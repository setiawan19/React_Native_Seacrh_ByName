import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Button, Content, Text,Thumbnail, Left, List, ListItem, Body, Item, 
          Input, Footer, FooterTab, View, Card, CardItem , Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component  {
  constructor(){
    super();
    this.state = {listTransaksi: [
      {
        nama : "Rahmat",
        bank: "BNI",
        bankTo: "BRI",
        total: "5.000.000",
        tgl: "05 Agustus 2019",
        status: "Berhasil"
      },
      {
        nama : "Susi",
        bank: "BNI",
        bankTo: "Mandiri",
        total: "15.000.000",
        tgl: "25 Juli 2019",
        status: "Berhasil"
      },
      {
        nama : "Wahyuni Putri",
        bank: "BNI",
        bankTo: "BCA",
        total: "3.500.000",
        tgl: "10 Oktober 2019",
        status: "Berhasil"
      }
    ], 
    datasearch:[],
    textapi:""};
  };
  cari(){
    var data = this.state.listTransaksi;
    for(var i =0; i< data.length(); i++){
      if(data[i].nama.includes(this.state.textapi) == true){
        this.state.datasearch[i] = this.state.listTransaksi[i]; 
      }
    }
  };

  render(){
    const data = this.state.datasearch.map((v,i) => {
      var nama = v.nama;
      var bank = v.bank;
      var bankTo = v.bankTo;
      var alamat = v.tgl;
      var harga = v.total;
      var status = v.status;
      return (
        <ListItem avatar key={i}>
          <Content>
            <Card>
            <CardItem>
              <Left>
                <Body> 
                  <Item>
                    <Text>{bank}</Text>
                    <Icon raised name='arrowright' type='font-awesome'/>
                    <Text>{bankTo}</Text>
                  </Item>
                  <Text> {nama} </Text>
                  <Item>
                    <Text>Rp. {harga}</Text>
                    <Icon raised name='circle' type='font-awesome'/>
                    <Text>{tgl}</Text>
                  </Item> 
                </Body> 
              </Left> 
              <Right>
                <Button rounded success>
                  <Text>{status}</Text>
                </Button>
              </Right>
            </CardItem>
            </Card>
          </Content>
        </ListItem>
      )
    });

    return (
      <Container>
      <Header searchBar rounded style={{backgroundColor:'red'}}>
        <Item>
          <Icon name="search" type='font-awesome' />
          <Input placeholder="Cari Nama..." onChangeText={(text) => this.setState({textapi: text})}/>
        </Item>
      </Header>
      <Content>
        <Button full style={{backgroundColor:'red'}} onPress={()=>{this.cari()}}>
          <Text>LIHAT DAFTAR TRANSAKSI</Text>
        </Button>        
        <ScrollView>
          <List>
            {data}
          </List>
        </ScrollView>
      </Content>
    </Container>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
