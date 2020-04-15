import React from 'react'

// Material-UI関連のimport
import {
    createMuiTheme, 
    MuiThemeProvider, 
    CssBaseline, 
    FormControl,
    Typography,
} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'

// GraphQL関連のimport
import gql from 'graphql-tag'

// Apollo-Client関連のimport
import { useQuery } from 'react-apollo-hooks'

// Material-UIのスタイル設定
const useStyles = makeStyles({
    root: {
        padding: '20px',
        minWidth: '100%',
    }
})
  
// Material-UIのテーマ設定
// primaryカラーの設定
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700]
        }
    }, 
})

// DataTableの列定義
// display: false だと、右上のView Columnsから再表示できる
// display: 'excluded' だと、右上のView Columnsにも表示されない
const columns = [
    {name: 'YOHKB', label: 'YOHKB', options: { sort: true, filter: true } }, 
    {name: 'SZDKB', label: 'SZDKB', options: { sort: true, filter: true } }, 
    {name: 'SISCD', label: 'SISCD', options: { sort: true, filter: true } }, 
    {name: 'BUSCD', label: 'BUSCD', options: { sort: true, filter: true } }, 
    {name: 'TANCD', label: 'TANCD', options: { sort: true, filter: true } }, 
    {name: 'DENNO', label: 'DENNO', options: { sort: true, filter: true } }, 
    {name: 'DENSQ', label: 'DENSQ', options: { sort: true, filter: true } }, 
    {name: 'NDPAG', label: 'NDPAG', options: { sort: true, filter: true } }, 
    {name: 'UDGYO', label: 'UDGYO', options: { sort: true, filter: true } }, 
    {name: 'AITCD', label: 'AITCD', options: { sort: true, filter: true } }, 
    {name: 'SRYMD', label: 'SRYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'HSYMD', label: 'HSYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'NSYMD', label: 'NSYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'FRYMD', label: 'FRYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'MHYMD', label: 'MHYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'KSYMD', label: 'KSYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'HINCD', label: 'HINCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'BRNCD', label: 'BRNCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'MAISU', label: 'MAISU', options: { sort: true, filter: true, display: false } }, 
    {name: 'KINGK', label: 'KINGK', options: { sort: true, filter: true, display: false } }, 
    {name: 'NKRCD', label: 'NKRCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'NYKNO', label: 'NYKNO', options: { sort: true, filter: true, display: false } }, 
    {name: 'NYKKB', label: 'NYKKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'SKRCD', label: 'SKRCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'ZSHNO', label: 'ZSHNO', options: { sort: true, filter: true, display: false } }, 
    {name: 'SYKKB', label: 'SYKKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'ZSHNG', label: 'ZSHNG', options: { sort: true, filter: true, display: false } }, 
    {name: 'TDNKB', label: 'TDNKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'ADNKB', label: 'ADNKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'HDNKB', label: 'HDNKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'SHZKB', label: 'SHZKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'KSKFG', label: 'KSKFG', options: { sort: true, filter: true, display: false } }, 
    {name: 'HASKB', label: 'HASKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOTNO', label: 'LOTNO', options: { sort: true, filter: true, display: false } }, 
    {name: 'ENTRY', label: 'ENTRY', options: { sort: true, filter: true, display: false } }, 
    {name: 'UNSCD', label: 'UNSCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'HATSU', label: 'HATSU', options: { sort: true, filter: true, display: false } }, 
    {name: 'CHAKU', label: 'CHAKU', options: { sort: true, filter: true, display: false } }, 
    {name: 'KAINO', label: 'KAINO', options: { sort: true, filter: true, display: false } }, 
    {name: 'HSBUS', label: 'HSBUS', options: { sort: true, filter: true, display: false } }, 
    {name: 'UNCHN', label: 'UNCHN', options: { sort: true, filter: true, display: false } }, 
    {name: 'HJURY', label: 'HJURY', options: { sort: true, filter: true, display: false } }, 
    {name: 'HENTR', label: 'HENTR', options: { sort: true, filter: true, display: false } }, 
    {name: 'HMEIG', label: 'HMEIG', options: { sort: true, filter: true, display: false } }, 
    {name: 'HCYMD', label: 'HCYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'HCBIN', label: 'HCBIN', options: { sort: true, filter: true, display: false } }, 
    {name: 'HCHUK', label: 'HCHUK', options: { sort: true, filter: true, display: false } }, 
    {name: 'CUNCH', label: 'CUNCH', options: { sort: true, filter: true, display: false } }, 
    {name: 'HSZK6', label: 'HSZK6', options: { sort: true, filter: true, display: false } }, 
    {name: 'HKOSU', label: 'HKOSU', options: { sort: true, filter: true, display: false } }, 
    {name: 'MARFG', label: 'MARFG', options: { sort: true, filter: true, display: false } }, 
    {name: 'MEGKB', label: 'MEGKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'TDNO1', label: 'TDNO1', options: { sort: true, filter: true, display: false } }, 
    {name: 'TDNO2', label: 'TDNO2', options: { sort: true, filter: true, display: false } }, 
    {name: 'SQYMD', label: 'SQYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'NDENO', label: 'NDENO', options: { sort: true, filter: true, display: false } }, 
    {name: 'HTANKB', label: 'HTANKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'ARARI', label: 'ARARI', options: { sort: true, filter: true, display: false } }, 
    {name: 'SKFLG', label: 'SKFLG', options: { sort: true, filter: true, display: false } }, 
    {name: 'HDNFG', label: 'HDNFG', options: { sort: true, filter: true, display: false } }, 
    {name: 'SDPFG', label: 'SDPFG', options: { sort: true, filter: true, display: false } }, 
    {name: 'NIPFG', label: 'NIPFG', options: { sort: true, filter: true, display: false } }, 
    {name: 'SIRAI', label: 'SIRAI', options: { sort: true, filter: true, display: false } }, 
    {name: 'SOSKB', label: 'SOSKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'JYUNO', label: 'JYUNO', options: { sort: true, filter: true, display: false } }, 
    {name: 'JYUSQ', label: 'JYUSQ', options: { sort: true, filter: true, display: false } }, 
    {name: 'EIGKB', label: 'EIGKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'OKFLG', label: 'OKFLG', options: { sort: true, filter: true, display: false } }, 
    {name: 'ZAIKB', label: 'ZAIKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'SMYMD', label: 'SMYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'COMNT', label: 'COMNT', options: { sort: true, filter: true, display: false } }, 
    {name: 'MIKKB', label: 'MIKKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'SNDKB', label: 'SNDKB', options: { sort: true, filter: true, display: false } }, 
    {name: 'DNYMD', label: 'DNYMD', options: { sort: true, filter: true, display: false } }, 
    {name: 'KRDEN', label: 'KRDEN', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOC01', label: 'LOC01', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOC02', label: 'LOC02', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOC03', label: 'LOC03', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOC04', label: 'LOC04', options: { sort: true, filter: true, display: false } }, 
    {name: 'LOC05', label: 'LOC05', options: { sort: true, filter: true, display: false } }, 
    {name: 'COMN1', label: 'COMN1', options: { sort: true, filter: true, display: false } }, 
    {name: 'COMN2', label: 'COMN2', options: { sort: true, filter: true, display: false } }, 
    {name: 'COMN3', label: 'COMN3', options: { sort: true, filter: true, display: false } }, 
    {name: 'ZAMAI', label: 'ZAMAI', options: { sort: true, filter: true, display: false } }, 
    {name: 'MOMAI', label: 'MOMAI', options: { sort: true, filter: true, display: false } }, 
    {name: 'MOKIN', label: 'MOKIN', options: { sort: true, filter: true, display: false } }, 
    {name: 'FLG01', label: 'FLG01', options: { sort: true, filter: true, display: false } }, 
    {name: 'FLG02', label: 'FLG02', options: { sort: true, filter: true, display: false } }, 
    {name: 'FLG03', label: 'FLG03', options: { sort: true, filter: true, display: false } }, 
    {name: 'FLG04', label: 'FLG04', options: { sort: true, filter: true, display: false } }, 
    {name: 'FLG05', label: 'FLG05', options: { sort: true, filter: true, display: false } }, 
    {name: 'GENCD', label: 'GENCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'KAKCD', label: 'KAKCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'IKUCD', label: 'IKUCD', options: { sort: true, filter: true, display: false } }, 
    {name: 'TAICD', label: 'TAICD', options: { sort: true, filter: true, display: false } }, 
    {name: 'CHA01', label: 'CHA01', options: { sort: true, filter: true, display: false } }, 
    {name: 'CHA02', label: 'CHA02', options: { sort: true, filter: true, display: false } }, 
    {name: 'CHA03', label: 'CHA03', options: { sort: true, filter: true, display: false } }, 
    {name: 'VAR01', label: 'VAR01', options: { sort: true, filter: true, display: false } }, 
    {name: 'VAR02', label: 'VAR02', options: { sort: true, filter: true, display: false } }, 
    {name: 'VAR03', label: 'VAR03', options: { sort: true, filter: true, display: false } }, 
]

// DataTableのオプション
const options = {
    selectableRows: 'none',
};

// データ取得クエリ
const GET_URIKAKTRN = gql`
query {
    tran(
        tablename: "urikaktrn"
        buscd: "0281"
        ymd: "2020-02-15"
    ) {
        YOHKB
        SZDKB
        SISCD
        BUSCD
        TANCD
        DENNO
        DENSQ
        NDPAG
        UDGYO
        AITCD
        SRYMD
        HSYMD
        NSYMD
        FRYMD
        MHYMD
        KSYMD
        HINCD
        BRNCD
        MAISU
        KINGK
        NKRCD
        NYKNO
        NYKKB
        SKRCD
        ZSHNO
        SYKKB
        ZSHNG
        TDNKB
        ADNKB
        HDNKB
        SHZKB
        KSKFG
        HASKB
        LOTNO
        ENTRY
        UNSCD
        HATSU
        CHAKU
        KAINO
        HSBUS
        UNCHN
        HJURY
        HENTR
        HMEIG
        HCYMD
        HCBIN
        HCHUK
        CUNCH
        HSZK6
        HKOSU
        MARFG
        MEGKB
        TDNO1
        TDNO2
        SQYMD
        NDENO
        HTANKB
        ARARI
        SKFLG
        HDNFG
        SDPFG
        NIPFG
        SIRAI
        SOSKB
        JYUNO
        JYUSQ
        EIGKB
        OKFLG
        ZAIKB
        SMYMD
        COMNT
        MIKKB
        SNDKB
        DNYMD
        KRDEN
        LOC01
        LOC02
        LOC03
        LOC04
        LOC05
        COMN1
        COMN2
        COMN3
        ZAMAI
        MOMAI
        MOKIN
        FLG01
        FLG02
        FLG03
        FLG04
        FLG05
        GENCD
        KAKCD
        IKUCD
        TAICD
        CHA01
        CHA02
        CHA03
        VAR01
        VAR02
        VAR03
    }
}
`

const Urikaktrn = () => {

    const classes = useStyles()

    // データ取得
    // fetchPolicy: 'cache-and-network' を指定することで、
    // 画面遷移が起こったタイミングで、キャッシュorネットワークからデータを取得して再表示する
    const { loading, error, data, refetch } = useQuery(GET_URIKAKTRN, {
        fetchPolicy: 'cache-and-network',
    })

    // 通信状態に応じたコンポーネントを表示
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    const datas = data.tran

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <FormControl className={classes.root}>
                <Typography variant="h4">
                    売掛トラン
                </Typography>
                <br />
                <MUIDataTable
                    data={datas}
                    columns={columns}
                    options={options}
                />
            </FormControl>
        </MuiThemeProvider>
    )

}

export default Urikaktrn