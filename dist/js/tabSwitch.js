function TabSwitch(id){
				var oDiv = document.getElementById(id);
				this.aBtns = oDiv.getElementsByTagName("button");
				this.aDivs = oDiv.getElementsByTagName("div");

				for(var i = 0; i < this.aBtns.length; i++){
					this.aBtns[i].index = i;
					var obj = this;
					this.aBtns[i].onclick = function(){
						obj.tab(this);
					};
				}
			}

			TabSwitch.prototype.tab = function(oBtn){
				
				for(var j = 0; j < this.aBtns.length; j++){
					this.aBtns[j].className = "";
					this.aDivs[j].style.display = "none";
				}

				oBtn.className = "active";
				this.aDivs[oBtn.index].style.display = 'block';
			}