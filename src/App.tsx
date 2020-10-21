import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { makeStyles, Theme, ThemeProvider, createStyles, responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles';
import { FormGroup, Checkbox } from '@material-ui/core';
import { Grid, Typography, Link } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

let restheme = createMuiTheme({
  // カラーパレットを利用してテーマカラーの設定する
  palette: {
    primary: {
      main: '#ab003c',
    },
    secondary: {
      light: '#ee99fc',
      main: '#0d47a1',
      contrastText: '#ee99fc',
    },
  }
});
restheme = responsiveFontSizes(restheme);



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      width: 1200,
    },
    cardHeader: {
      padding: theme.spacing(1, 2),
      // width: 800,
    },
    // item一覧の大きさ設定
    list: {
      width: 300,
      height: 400,
      backgroundColor: '#fafafa',
      overflow: 'auto',
    },
    // 結果表示用アイテム
    carditem: {
      height: 100,
      fontSize: '3rem',
      padding: '2em',
      fontStyle: 'bold',
      borderRadius: 3,
      color: 'black',
      backgroundColor: '#fafafa',
      letterSpacing: 6,
      fontWeight: 500,
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
    chkItem: {
      backgroundColor: 'black',
    },
  }),
);

function not(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

// intersection is ソート？
function intersection(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}


function union(a: number[], b: number[]) {
  return [...a, ...not(b, a)];
}

// getRandomIntInclusive is ランダムで表示する
function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



// class App extends React.Component {
function App() {

  useEffect(() => {
    document.title = 'くじ,';
  });

  const classes = useStyles(restheme);

  const [checked, setChecked] = React.useState<number[]>([]);
  const [left, setLeft] = React.useState<number[]>([3]);
  const [right, setRight] = React.useState<number[]>([0, 1, 2, 4, 5, 6, 7, 8, 9
    , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
    , 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
    , 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,]);
  const [cityname, setCityname] = React.useState<string>(' ');
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  let tokyoCity = [
    { key: 0, value: '[区部]千代田区' },
    { key: 1, value: '[区部]中央区' },
    { key: 2, value: '[区部]港区' },
    { key: 3, value: '[区部]新宿区' },
    { key: 4, value: '[区部]文京区' },
    { key: 5, value: '[区部]台東区' },
    { key: 6, value: '[区部]墨田区' },
    { key: 7, value: '[区部]江東区' },
    { key: 8, value: '[区部]品川区' },
    { key: 9, value: '[区部]目黒区' },
    { key: 10, value: '[区部]大田区' },
    { key: 11, value: '[区部]世田谷区' },
    { key: 12, value: '[区部]渋谷区' },
    { key: 13, value: '[区部]中野区' },
    { key: 14, value: '[区部]杉並区' },
    { key: 15, value: '[区部]豊島区' },
    { key: 16, value: '[区部]北区' },
    { key: 17, value: '[区部]荒川区' },
    { key: 18, value: '[区部]板橋区' },
    { key: 19, value: '[区部]練馬区' },
    { key: 20, value: '[区部]足立区' },
    { key: 21, value: '[区部]葛飾区' },
    { key: 22, value: '[区部]江戸川区' },
    { key: 23, value: '[市部]八王子市' },
    { key: 24, value: '[市部]立川市' },
    { key: 25, value: '[市部]武蔵野市' },
    { key: 26, value: '[市部]三鷹市' },
    { key: 27, value: '[市部]青梅市' },
    { key: 28, value: '[市部]府中市' },
    { key: 29, value: '[市部]昭島市' },
    { key: 30, value: '[市部]調布市' },
    { key: 31, value: '[市部]町田市' },
    { key: 32, value: '[市部]小金井市' },
    { key: 33, value: '[市部]小平市' },
    { key: 34, value: '[市部]日野市' },
    { key: 35, value: '[市部]東村山市' },
    { key: 36, value: '[市部]国分寺市' },
    { key: 37, value: '[市部]国立市' },
    { key: 38, value: '[市部]福生市' },
    { key: 39, value: '[市部]狛江市' },
    { key: 40, value: '[市部]東大和市' },
    { key: 41, value: '[市部]清瀬市' },
    { key: 42, value: '[市部]東久留米市' },
    { key: 43, value: '[市部]武蔵村山市' },
    { key: 44, value: '[市部]多摩市' },
    { key: 45, value: '[市部]稲城市' },
    { key: 46, value: '[市部]羽村市' },
    { key: 47, value: '[市部]あきる野市' },
    { key: 48, value: '[市部]西東京市' },
    { key: 49, value: '[郡部]瑞穂町' },
    { key: 50, value: '[郡部]日の出町' },
    { key: 51, value: '[郡部]檜原村' },
    { key: 52, value: '[郡部]奥多摩町' },
    { key: 53, value: '[大島支庁]大島町' },
    { key: 54, value: '[大島支庁]利島村' },
    { key: 55, value: '[大島支庁]新島村' },
    { key: 56, value: '[大島支庁]神津島村' },
    { key: 57, value: '[三宅支庁]三宅村' },
    { key: 58, value: '[三宅支庁]御蔵島村' },
    { key: 59, value: '[八丈支庁]八丈町' },
    { key: 60, value: '[八丈支庁]青ヶ島村' },
    { key: 61, value: '[小笠原支庁]小笠原村' }
  ];


  // handleToggle is リストをクリックしたときのイベント
  const handleToggle = (value: number) => () => {
    console.log("handleToggle-start.")
    console.log(value)
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    // 要素が存在しない場合
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: number[]) => intersection(checked, items).length;

  const handleToggleAll = (items: number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    console.log("handleCheckedLeft-start.")
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };


  // itemからガチャを引く
  const drawItem = (items: number[]) => {
    console.log("drawItem-start.")
    if (0 !== items.length) {

      // ランダムの値を取得する

      let idx = getRandomIntInclusive(0, items.length - 1);
      let setidx = items[idx];

      // 表示される名前を取得する
      setCityname(tokyoCity[setidx].value);


      // 表示したものを右から左に移動させる
      const currentIndex = checked.indexOf(setidx);
      const newChecked = [...checked];

      console.log(items)
      if (currentIndex === -1) {
        console.log("drawItem-push.");

        newChecked.push(setidx);


        setChecked(newChecked);

        // 一覧を変更する
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        newChecked.splice(idx, 1);
      } else {
        console.log("drawItem-splice.");

        newChecked.splice(currentIndex, 1);

      }

    }

  };

  // viewItem is 内容の表示
  const viewItem = (name: string) => {

    return (
      // 名前を描画する
      <Card
        // fontWeight="fontWeightBold"
        className={classes.carditem}
      >
        {name}
      </Card>
    )
  };
  // customList is 市区町村一覧
  const customList = (title: React.ReactNode, items: number[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        className={classes.list}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = `tokyo-city-${value}-label`;
          let cityname = tokyoCity[value].value;
          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                {/* チェックボックス */}
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${cityname}.`}
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  // reactを描画する
  return (
    <div className="App">

      <ThemeProvider theme={restheme}>

        <header className="App-header">
          東京都漫才道中くじ＠
          {new Date().getFullYear()}
      </header>

        <Grid item>

          {viewItem(cityname)}

        </Grid>


        <FormGroup>
          <Grid
            direction="row"
          >

            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              →
          </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              ←
          </Button>
            <Button
              variant="outlined"
              // onClick={drawItem}
              onClick={() => drawItem(right)}
              disabled={right.length === 0}
            >
              くじを引く

          </Button>
          </Grid>
          {/* 大枠の設定する */}
          <Grid container
            spacing={4}
            justify="flex-start"
            alignItems="center"
            className={classes.root}
            direction="row"
          >

            <Grid item
              alignItems="baseline"
            >
              {customList('アップロード済', left)}
            </Grid>

            <Grid item>
              {customList('未実施', right)}
            </Grid>

          </Grid>

        </FormGroup>

      </ThemeProvider>
      <footer>
        <Copyright />
      </footer>
    </div >
  );
}



// Copyright is footerの文字列
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary">
      {'連絡先：'}
      <Link
        color="inherit"
        href="https://scrapbox.io/cyber-note/">こちら
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

export default App;
