// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const form = flutter_sdk.src__widgets__form;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_form_field = flutter_sdk.src__material__text_form_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const list_tile = flutter_sdk.src__material__list_tile;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToListTile: () => (T.BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MeuApp = class MeuApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Formulário e Lista Dinâmica", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.TelaPrincipal.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MeuApp.new();
    }
  };
  (main.MeuApp.new = function() {
    main.MeuApp.__proto__.new.call(this);
    ;
  }).prototype = main.MeuApp.prototype;
  dart.addTypeTests(main.MeuApp);
  dart.addTypeCaches(main.MeuApp);
  dart.setMethodSignature(main.MeuApp, () => ({
    __proto__: dart.getMethods(main.MeuApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MeuApp, I[0]);
  main.TelaPrincipal = class TelaPrincipal extends framework.StatefulWidget {
    createState() {
      return new main._TelaPrincipalState.new();
    }
    static ['_#new#tearOff']() {
      return new main.TelaPrincipal.new();
    }
  };
  (main.TelaPrincipal.new = function() {
    main.TelaPrincipal.__proto__.new.call(this);
    ;
  }).prototype = main.TelaPrincipal.prototype;
  dart.addTypeTests(main.TelaPrincipal);
  dart.addTypeCaches(main.TelaPrincipal);
  dart.setMethodSignature(main.TelaPrincipal, () => ({
    __proto__: dart.getMethods(main.TelaPrincipal.__proto__),
    createState: dart.fnType(main._TelaPrincipalState, [])
  }));
  dart.setLibraryUri(main.TelaPrincipal, I[0]);
  var _itens = dart.privateName(main, "_itens");
  var _chaveFormulario = dart.privateName(main, "_chaveFormulario");
  var _controlador = dart.privateName(main, "_controlador");
  var _adicionarItem = dart.privateName(main, "_adicionarItem");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  main._TelaPrincipalState = class _TelaPrincipalState extends framework.State$(main.TelaPrincipal) {
    [_adicionarItem]() {
      if (dart.nullCheck(this[_chaveFormulario].currentState).validate()) {
        this.setState(dart.fn(() => {
          this[_itens][$add](this[_controlador].text);
          this[_controlador].clear();
        }, T.VoidTovoid()));
      }
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Formulário e Lista Dinâmica")}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: C[1] || CT.C1, child: new form.Form.new({key: this[_chaveFormulario], child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text_form_field.TextFormField.new({controller: this[_controlador], decoration: new input_decorator.InputDecoration.new({labelText: "Digite um item"}), validator: dart.fn(valor => {
                        if (valor == null || valor[$isEmpty]) {
                          return "Por favor, insira algum texto";
                        }
                        return null;
                      }, T.StringNToStringN())}), new basic.SizedBox.new({height: 16}), new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _adicionarItem), child: new text.Text.new("Adicionar Item")})])})})}), new basic.Expanded.new({child: new scroll_view.ListView.builder({itemCount: this[_itens][$length], itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(this[_itens][$_get](index))}), T.BuildContextAndintToListTile())})})])})});
    }
    static ['_#new#tearOff']() {
      return new main._TelaPrincipalState.new();
    }
  };
  (main._TelaPrincipalState.new = function() {
    this[_itens] = T.JSArrayOfString().of([]);
    this[_chaveFormulario] = T.GlobalKeyOfFormState().new();
    this[_controlador] = new editable_text.TextEditingController.new();
    main._TelaPrincipalState.__proto__.new.call(this);
    ;
  }).prototype = main._TelaPrincipalState.prototype;
  dart.addTypeTests(main._TelaPrincipalState);
  dart.addTypeCaches(main._TelaPrincipalState);
  dart.setMethodSignature(main._TelaPrincipalState, () => ({
    __proto__: dart.getMethods(main._TelaPrincipalState.__proto__),
    [_adicionarItem]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._TelaPrincipalState, I[0]);
  dart.setFieldSignature(main._TelaPrincipalState, () => ({
    __proto__: dart.getFields(main._TelaPrincipalState.__proto__),
    [_itens]: dart.finalFieldType(core.List$(core.String)),
    [_chaveFormulario]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_controlador]: dart.finalFieldType(editable_text.TextEditingController)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MeuApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,iCACE,sCACA,yCACiB,4BAElB;IAEV;;;;;;;;EACF;;;;;;;;;;AAIuC;IAAqB;;;;;;;;EAC5D;;;;;;;;;;;;;;;;;;AAQI,UAAiC,AAAE,eAA/B,AAAiB;AAIjB,QAHF,cAAS;AACsB,UAA7B,AAAO,mBAAI,AAAa;AACJ,UAApB,AAAa;;;IAGnB;UAG0B;AACxB,YAAO,oCACG,+BACC,kBAAK,wCAER,gCACc,wBAChB,sDAES,wBACA,+BACE,gCACa,wBAChB,mDACc,gCACA,oDACC,+BAEF,QAAC;AACV,4BAAI,AAAM,KAAD,YAAY,AAAM,KAAD;AACxB,gCAAO;;AAET,8BAAO;kDAGX,gCAAiB,MACjB,6DACa,8BACJ,kBAAK,6BAMtB,+BACkB,6CACH,AAAO,oCACL,SAAC,SAAS,UACd,mCACE,kBAAK,AAAM,oBAAC,KAAK;IAQxC;;;;;;IA7DmB,eAAS;IACtB,yBAAmB;IACG,qBAAe;;;EA4D7C;;;;;;;;;;;;;;;;AApFkB,IAAhB,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
