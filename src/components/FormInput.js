import React, { Component } from 'react'

export default class FormInput extends Component {
    state = {
        nama: 'deni',
        mobil: 'Fortuner',
        jenisKelamin: 'perempuan'
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] :  e.target.value
        });
    };

    render() {
        return (
            <div>
                <div>
                    <p>Nama saya : {this.state.nama}</p>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/>
                </div>
                <div>
                    <p>Alamat : {this.state.alamat}</p>
                    <input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange}/>
                </div>
                <div>
                    <p>Hobi : {this.state.hobi}</p>
                    <input type="text" name="hobi" value={this.state.hobi} onChange={this.handleChange}/>
                </div>

                <div>
                    <p>Mobil saya {this.state.mobil}</p>
                    <select name="mobil" id="" value={this.state.mobil} onChange={this.handleChange}>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Pajero">Pajero</option>
                    <option value="Alpharad">Alpharad</option>
                    <option value="Lexus">Lexus</option>
                    </select>

                    <p>Jenis Kelamin {this.state.jenisKelamin}</p>
                    <input type="radio" name="jenisKelamin"  value='laki-laki' id="" onChange={this.handleChange} checked={this.state.jenisKelamin == 'laki-laki' ? true : false} />
                    <input type="radio" name="jenisKelamin"  value='laki-laki' id="" onChange={this.handleChange} checked={this.state.jenisKelamin == 'perempuan' ? true : false} />
                </div>

            </div>
        );
    };

}

