	var that = null;
	var cloth;
	
	sap.ui.controller("shopping_site.shopping", {
	
	onInit: function() {
		that=this;
		model =new sap.ui.model.json.JSONModel();
		model.loadData("Recent.json", " ",false);
		this.getView().byId("List").setModel(model);
		},
	itemPressed:function(oEvent){
		 var speci = new sap.ui.model.json.JSONModel()
		var goto = oEvent.getSource().sId.split("List-")[1];
		 speci.loadData("Specs.json", " ",false);
		if(goto == "0")
			{
			var app=this.getView().byId("SplitApp")
			var temp = this.getView().byId("p1")
			var temp2 = this.getView().byId("p2")
			app.addPage(temp)
			var temp2 = this.getView().byId("SplitApp").to(temp2)
			this.getView().byId("sf").setModel(speci);
			}
		else if(goto=="1"){
				var app=this.getView().byId("SplitApp")
			var temp = this.getView().byId("p1")
			var temp2 = this.getView().byId("p3")
			app.addPage(temp)
			var temp2 = this.getView().byId("SplitApp").to(temp2);
				this.getView().byId("sf2").setModel(speci);
		}
		else if(goto=="2"){
			var app=this.getView().byId("SplitApp")
		var temp = this.getView().byId("p1")
		var temp2 = this.getView().byId("p4")
		app.addPage(temp)
		var temp2 = this.getView().byId("SplitApp").to(temp2);
			this.getView().byId("sf3").setModel(speci);
	}
	// this.getView().byId("ram").setValue(model.oData.Specs[0].galaxys8[0].RAM)
	/*
	 * var filtered = model.oData.Specs.filter(function(item){ return
	 * item.galaxys8})
	 */
			
		/*
		 * model.oData.Specs["0"].galaxys8;
		 * this.getView().byId("sf").bindAggregation(data);
		 */
	},
	category : function(oEvent)
	{
		 var cate = new sap.ui.model.json.JSONModel();
		 cate.loadData("clothing.json"," ",false);
		var selectedTitle = oEvent.getSource()._oNavigationControl.oParent.mProperties.title;
		if(selectedTitle == "Electronics"){
			var sapp=this.getView().byId("SplitApp")
			var temp = this.getView().byId("mp1")
			var temp2 = this.getView().byId("mp2")
			sapp.addMasterPage(temp)
			var temp2 = this.getView().byId("SplitApp").toMaster(temp2);
			new sap.m.List();
			var sli = new sap.m.StandardListItem({title:"{name}", type:"Navigation", press : function(oEvent){
				var gen = oEvent.getSource().sId.split("list2-")[1];
				if(gen == "0"){
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
					var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/electronic/categories/0/categories",sli2);		
				}
				else if(gen == 1)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/electronic/categories/1/categories",sli2);				
					}
				else if(gen==2)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/electronic/categories/2/categories",sli2);				
					}
				else if(gen==3)
				{
				var mp2 = that.getView().byId("mp2")
				var mp3 = that.getView().byId("mp3")
				sapp.addMasterPage(mp2)
				var mpage = that.getView().byId("SplitApp").toMaster(mp3);
				that.getView().byId("list3").setModel(cate);
			var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/electronic/categories/3/categories",sli2);				
				}
			}});
			this.getView().byId("list2").setModel(cate);
			this.getView().byId("list2").bindAggregation("items","/electronic/categories",sli);		
		}
		else if(selectedTitle == "Clothing"){
			var sapp=this.getView().byId("SplitApp")
			var temp = this.getView().byId("mp1")
			var temp2 = this.getView().byId("mp2")
			sapp.addMasterPage(temp)
			var temp2 = this.getView().byId("SplitApp").toMaster(temp2);
			new sap.m.List();
			var sli = new sap.m.StandardListItem({title:"{name}", type:"Navigation", press : function(oEvent){
				var gen = oEvent.getSource().sId.split("list2-")[1];
				if(gen == "0") //women
				{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
					var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}", press:function(oEvent){
						that.inner();
							cloth = +oEvent.oSource.oBindingContexts.undefined.sPath.split("/")[5];					
							var p1 = that.getView().byId("p1")
							var clothing = that.getView().byId("clothing")
							sapp.addPage(p1)
							 that.getView().byId("SplitApp").to(clothing);
							var mm=new sap.ui.model.json.JSONModel(models)
							that.getView().byId("clothing").setModel(mm);
							var models = mdel.oData.clothing.categories[0].categories[cloth];
						/*	var list = that.getView().byId("clothes");
							var binding = list.getBinding("items");
							if( !query ) {
							    binding.filter( [] );
							} 
							else {
							   binding.filter( [ new sap.ui.model.Filter([
							      new sap.ui.model.Filter("name",  sap.ui.model.FilterOperator.Contains, query ),
							      new sap.ui.model.Filter("gender", sap.ui.model.FilterOperator.Contains, query )
							   ],false)
							])}*/
						}})
					that.getView().byId("list3").setModel(cate);
				var store =	that.getView().byId("list3").bindAggregation("items","/clothing/categories/0/categories",sli2);
				var mdel=that.getView().byId("list3").getModel();
		
	//	var selector= +oEvent.oSource.oBindingContexts.undefined.sPath.split("/")[3];		
			
				//var models=	mdel.oData.clothing.categories[0].categories[cloth]
				/*.filter(function(item)
						{return item.key=="clo_wo_CRD"})*/
				}
				else if(gen == 1) //men
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/clothing/categories/1/categories",sli2);				
					}
				else if(gen==2) //girls
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/clothing/categories/2/categories",sli2);				
					}
				else if(gen==3) //boys
				{
				var mp2 = that.getView().byId("mp2")
				var mp3 = that.getView().byId("mp3")
				sapp.addMasterPage(mp2)
				var mpage = that.getView().byId("SplitApp").toMaster(mp3);
				that.getView().byId("list3").setModel(cate);
			var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/clothing/categories/3/categories",sli2);				
				}
			}});
			this.getView().byId("list2").setModel(cate);
			this.getView().byId("list2").bindAggregation("items","/clothing/categories",sli);		
		}
		else if(selectedTitle == "Footwear"){
			var sapp=this.getView().byId("SplitApp")
			var temp = this.getView().byId("mp1")
			var temp2 = this.getView().byId("mp2")
			sapp.addMasterPage(temp)
			var temp2 = this.getView().byId("SplitApp").toMaster(temp2);
			new sap.m.List();
			var sli = new sap.m.StandardListItem({title:"{name}", type:"Navigation", press : function(oEvent){
				var gen = oEvent.getSource().sId.split("list2-")[1];
				if(gen == "0"){
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
					var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/Footwear/categories/0/categories",sli2);		
				}
				else if(gen == 1)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/Footwear/categories/1/categories",sli2);				
					}
				else if(gen==2)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/Footwear/categories/2/categories",sli2);				
					}
				else if(gen==3)
				{
				var mp2 = that.getView().byId("mp2")
				var mp3 = that.getView().byId("mp3")
				sapp.addMasterPage(mp2)
				var mpage = that.getView().byId("SplitApp").toMaster(mp3);
				that.getView().byId("list3").setModel(cate);
			var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/Footwear/categories/3/categories",sli2);				
				}
			}});
			this.getView().byId("list2").setModel(cate);
			this.getView().byId("list2").bindAggregation("items","/Footwear/categories",sli);	
		}
		else if(selectedTitle == "Accessories"){
			var sapp=this.getView().byId("SplitApp")
			var temp = this.getView().byId("mp1")
			var temp2 = this.getView().byId("mp2")
			sapp.addMasterPage(temp)
			var temp2 = this.getView().byId("SplitApp").toMaster(temp2);
			new sap.m.List();
			var sli = new sap.m.StandardListItem({title:"{name}", type:"Navigation", press : function(oEvent){
				var gen = oEvent.getSource().sId.split("list2-")[1];
				if(gen == "0"){
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
					var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/accessories/categories/0/categories",sli2);		
				}
				else if(gen == 1)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation",info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/accessories/categories/1/categories",sli2);				
					}
				else if(gen==2)
					{
					var mp2 = that.getView().byId("mp2")
					var mp3 = that.getView().byId("mp3")
					sapp.addMasterPage(mp2)
					var mpage = that.getView().byId("SplitApp").toMaster(mp3);
					that.getView().byId("list3").setModel(cate);
				var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation", info:"{amount}",icon:"{pic}"})
						that.getView().byId("list3").setModel(cate);
						that.getView().byId("list3").bindAggregation("items","/accessories/categories/2/categories",sli2);				
					}
				else if(gen==3)
				{
				var mp2 = that.getView().byId("mp2")
				var mp3 = that.getView().byId("mp3")
				sapp.addMasterPage(mp2)
				var mpage = that.getView().byId("SplitApp").toMaster(mp3);
				that.getView().byId("list3").setModel(cate);
			var sli2 = new sap.m.StandardListItem({title:"{name}",type:"Navigation", info:"{amount}",icon:"{pic}"})
					that.getView().byId("list3").setModel(cate);
					that.getView().byId("list3").bindAggregation("items","/accessories/categories/3/categories",sli2);				
				}
			}});
			this.getView().byId("list2").setModel(cate);
			this.getView().byId("list2").bindAggregation("items","/accessories/categories",sli);	
		}
		
		
		},
		onPressDetailBack : function() {
			that.getView().byId("SplitApp").backDetail();
			
		},
		onPressMasterBack : function() {
			that.getView().byId("SplitApp").backMaster();
			
		},
		inner:function(oEvent){
			this.getView().byId("list2");
		}
		
	});