class Negociacao {

  constructor(data, quantidade, valor){
    this._data = data
    this._quantidade = quantidade;
    this._valor = valor;
  }

  obtemVolume(){
    return this._quantidade * this._valor;
  }

  getData(){
    this._data;
  }

  getQuantidade(){
    
  }
}