# MenuHoverAnimation
마우스를 올리면 따라다니는 메뉴바 애니메이션을 만들어 보았습니다.

![MenuHoverAnimation](https://user-images.githubusercontent.com/61913417/104996853-f4344980-5a6b-11eb-8de9-31ced26bde9a.gif)

### 구상 과정과 구현
- 마우스를 올릴 시 메뉴바가 나타나고 따라다니게 하고 싶다!
	1. 마우스를 올리는 요소에 mouseenter 이벤트를 줘서 마우시가 올라 올 때 동작하게 만든다.
    2. active 클래스를 줘서 active 클래스가 있는 요소에 메뉴바가 생기도록 할 것이다.
	3. 메뉴바가 옮겨다닐것이므로 마우스를 올렸을 때 다른 요소에 active 클래스가 있을 수 있다.
   	--> if문을 통해 지금 요소에 active가 있는지 검사!
   	--> 없다면 active가 있는 요소에 active 클래스를 제거해 준다.
   	--> 지금 요소에 active 클래스를 생성해 준다.
	4. .target의 위치 설정을 위해 a 요소의 위치값을 가져온다.
    --> getBoundingClientRect 함수를 이용해 a 요소의 가로 너비와 세로 너비를 가져온다
    --> left 값과 top 값도 가져오는데 여기서는 스크롤이 생길 때 위치값이 변하므로 기본 위치에 스크롤 값(window.pageXOfferset, window.pageYOfferset)을 더해준다
    --> .target에 이 값들을 주면 a 태그와 같은 위치가 잡히고 border-bottom을 설정해 주었으므로 아래쪽에만 선이 생기게 된다
>     target.style.width = `${width}px`
>	여기서 변수 값만 넘겨주게 되면 코드가 적용되지 않으므로 px을 붙여서 넘겨 주어야하는데 변수값에 문자열을 붙여서 넘겨주기 위해 백틱(``)을 사용하였다!


- 선택한 요소를 제외한 나머지 요소들은 흐리게 만들어 집중 효과를 내고 싶다!
	- 해당 요소에 active가 없다면 모든 요소에 opacity = '.3' 값을 주어 흐리게 만들고 active를 생성하는 요소에는 opcity = '1' 값을 주어 해당 요소만 진하게 처리하였습니다
    
- 메뉴바의 색깔을 요소가 선택될 때마다 변하게 만들고 싶다!
	1. colors 라는 변수에 원하는 색깔들을 넣어 배열을 만든다.
	2. Math.random()*colors.length 를 통해 colors에 들어있는 색깔 갯수 만큼의 랜덤한 실수를 생성한다.
	3. Math.floor()를 통해 랜덤했던 실수의 소숫점 숫자들을 버려 정수로 만든다.
	4. 이 값을 colors의 index에 넣어 color 라는 변수에 삽입한다.
	5. .target의 borderColor 값에 이 값을 넣어주어 랜덤한 색상이 나타나게 만든다.
 
- 마우스가 요소 밖으로 나갈 시 원상태로 만들어 준다!
	1. mouseleave 이벤트를 통해 마우스가 요소에서 빠져나갈 때 작동하게 한다.
	2. 마우스가 빠져 나오면 모든 요소에 opacity='1' 값을 주고 borderColor에 transparent 값을 줘서 메뉴바의 색상을 투명하게 하고 원상태로 만들어준다.
	
	
    > #### 나왔다가 다른 요소로 들어가면 괜찮은데 나왔다가 같은 요소에 들어가니까 잘 적용되지 않는 문제점이 있었다.
    > ---
    > 이 문제점의 원인은 마우스가 빠져나갈 때 active 클래스를 제거해 주지 않았기 때문에 mouseHover 함수에서 `if(!this.parentNode.classList.contains('active'))`으로 active 클래스가 없다면으로 설정하고 코딩했으므로 다시 마우스를 올렸을 때 active 클래스가 있으므로 동작하지 않게 된 것이다.
    
    3. 그러므로 요소를 빠져 나올 때 active 클래스를 제거해 준다.
    
#### 어려웠던 점
- mouseleave 이벤트를 주었는데 mouseenter 될 때 동작하고 moseenter 이벤트가 없으면 mouseleave 될 때 잘 동작하는데 mouseenter와 mouseleave 이벤트를 동시에 주면 계속 mouseenter 될 때 mouseleave 이벤트까지 함께 실행되는 문제가 있었다.
> 이 문제의 해결법은 .target에 `pointer-events: none;` 를 주는 것이었다.
a 태그 위에 span 태그를 뒤덮고 border-bottom 값을 줬으므로 눈에는 보이지 않았지만 a 태그 위에 span 태그가 뒤덮여있어서 마우스 이벤트가 a 태그를 선택하는데 방해가 되었던 것이다. 그러므로 span 영역이 포인터 이벤트의 대상이 되지 않기 위해 `pointer-events: none;`를 지정해 주었다.

    
	            
