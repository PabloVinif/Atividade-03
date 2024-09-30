import 'package:flutter/material.dart';

void main() {
  runApp(AppBancario());
}

class AppBancario extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplicativo Bancário',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: TelaFormulario(),
    );
  }
}

class TelaFormulario extends StatefulWidget {
  @override
  _TelaFormularioState createState() => _TelaFormularioState();
}

class _TelaFormularioState extends State<TelaFormulario> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _nomeController = TextEditingController();
  final TextEditingController _valorController = TextEditingController();
  List<String> _transacoes = [];

  void _adicionarTransacao() {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _transacoes.add(
            'Nome: ${_nomeController.text}, Valor: R\$ ${_valorController.text}');
        _nomeController.clear();
        _valorController.clear();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Formulário de Transações'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            Form(
              key: _formKey,
              child: Column(
                children: <Widget>[
                  TextFormField(
                    controller: _nomeController,
                    decoration: InputDecoration(labelText: 'Nome da transação'),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor, insira o nome';
                      }
                      return null;
                    },
                  ),
                  TextFormField(
                    controller: _valorController,
                    decoration: InputDecoration(labelText: 'Valor da transação'),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor, insira o valor';
                      }
                      if (double.tryParse(value) == null) {
                        return 'Insira um valor numérico válido';
                      }
                      return null;
                    },
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: _adicionarTransacao,
                    child: Text('Adicionar Transação'),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: _transacoes.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: ListTile(
                      title: Text(_transacoes[index]),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
