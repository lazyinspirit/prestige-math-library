---
id: ex-gradient-catastrophe-before-shock-formation
kind: example
title: Gradient catastrophe before shock formation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [prop-characteristics-for-a-one-dimensional-scalar-conservation-law, def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, thm-euclidean-inverse-function-theorem, cor-mean-value-theorem, thm-chain-rule, thm-algebra-of-derivatives, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, def-countable-choice, thm-rankine-hugoniot-jump-condition, thm-dominated-convergence]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§3.3–3.4, pp. 14–18"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.1, pp. 350–351"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, Theorem 5, pp. 237–238 (existence for bounded measurable initial data)"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Example

Assume Countable Choice ([[def-countable-choice]]) for entropy uniqueness. Let $f(u)=\tfrac12u^2$ and $u_0(x)=-\arctan x$. Then
$u_0\in C^\infty\cap L^\infty$, $u_0'(y)=-1/(1+y^2)\in[-1,0]$, and
$\min_yu_0'(y)=-1$ at $y=0$. For $0\le t<1$, the characteristic map
$X_t(y)=y+u_0(y)t=y-t\arctan y$ is an increasing diffeomorphism of
$\mathbb R$, and the classical solution is $u(X_t(y),t)=u_0(y)$ with
$$u_x(X_t(y),t)=\frac{u_0'(y)}{1+tu_0'(y)}=-\frac{1}{1+y^2-t}.$$
In particular $u_x(0,t)=-1/(1-t)$, so the first gradient catastrophe is at
$T_*=1$. At $t=1$ the solution remains continuous, with unbounded slope at
$x=0$; a nonzero shock is present for every $t>1$. More precisely, for each
$t>1$ the unique $a(t)>0$ satisfying $a=t\arctan a$ gives characteristics from
$y=\pm a$ meeting at $x=0$; the shock traces are $u^-=\arctan a$ and
$u^+=-\arctan a$, and its speed is $0$. This is a compressive Burgers shock,
and the explicit outer-branch construction below gives its entropy continuation beyond $T_*$. The datum is not in $L^1$, so the integrable-data existence theorem does not apply. Uniqueness is [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]
([[prop-characteristics-for-a-one-dimensional-scalar-conservation-law]],
[[def-kruzhkov-entropy-solution]],
[[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$ and the initial datum $u_0(y)=-\arctan y$, together with the characteristic map $X_t(y)=y-t\arctan y$ for $t\ge0$ and the classical solution ansatz $u(X_t(y),t)=u_0(y)$.

[F1] Characteristic equations: for a $C^1$ classical solution, $u$ is constant along every characteristic $x(t)$ with $\dot x=f'(u(x(t),t))$, and $u_x$ satisfies the transport identities used below along characteristics ([[prop-characteristics-for-a-one-dimensional-scalar-conservation-law]], [[def-kruzhkov-entropy-solution]]).

[F2] Calculus: the chain rule for compositions, the algebra of derivatives, the mean value theorem for differentiable functions, and the inverse function theorem giving a smooth local inverse of a map with invertible derivative ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]], [[thm-euclidean-inverse-function-theorem]]).

[F3] Chord/Lax admissibility for a jump: for the convex flux $f(u)=\tfrac12u^2$, a nontrivial Rankine--Hugoniot jump from $u^-$ to $u^+$ is entropy-admissible if and only if $u^->u^+$; equivalently $f'(u^+)\le s'\le f'(u^-)$ ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]). The jump computation is [[thm-rankine-hugoniot-jump-condition]]. Bounded pointwise convergence passes local integrals by [[thm-dominated-convergence]], and entropy uniqueness is [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]].

## Proof

**Proof technique:** direct.

1.1 **The data.** $u_0(y)=-\arctan y$ is smooth and bounded, with $u_0'(y)=-1/(1+y^2)\in[-1,0)$ and $\min_yu_0'=-1$ attained only at $y=0$. The flux $f(u)=\tfrac12u^2$ is $C^\infty$ with $f'(u)=u$. [F2, given]


1.2 **The characteristic map is a diffeomorphism for $t<1$.** $X_t'(y)=1+tu_0'(y)=1-\tfrac{t}{1+y^2}=\tfrac{1+y^2-t}{1+y^2}>0$ for $0\le t<1$ and all $y$, so by the mean value theorem [F2] $X_t$ is strictly increasing; moreover $X_t(y)=y+O(1)$ tends to $\pm\infty$ as $y\to\pm\infty$, so $X_t$ maps $\mathbb R$ onto $\mathbb R$. A strictly increasing surjection is a homeomorphism, and since $X_t'$ never vanishes, the inverse function theorem [F2] makes the inverse $y(\cdot,t)=X_t^{-1}$ smooth with $y_x(x,t)=1/X_t'(y(x,t))$ and, differentiating $X_t(y(x,t))=x$ in $t$, $y_t(x,t)=-u_0(y(x,t))/X_t'(y(x,t))$. [F2, given]


1.3 **The outer branches for $t>1$.** The function $h(a)=t\arctan a-a$ increases up to $\sqrt{t-1}$ and then decreases to $-\infty$, so its unique positive zero $a(t)$ satisfies $a(t)>\sqrt{t-1}$. Hence $X_t'>0$ on $[a(t),\infty)$, and $X_t$ maps this interval bijectively onto $[0,\infty)$; by oddness it maps $(-\infty,-a(t)]$ bijectively onto $(-\infty,0]$. For $x>0$ choose the unique $y>a(t)$ with $X_t(y)=x$, and for $x<0$ choose the unique $y<-a(t)$; define $u(x,t)=-\arctan y$. These branches are smooth by the inverse function theorem, solve Burgers directly: implicit differentiation gives $y_x=1/X_t'(y)$, $y_t=-u_0(y)/X_t'(y)$, hence $u_t+uu_x=0$, and have traces $u^-=\arctan a(t)$, $u^+=-\arctan a(t)$ at $x=0$. Their fluxes agree, so the stationary jump satisfies Rankine--Hugoniot and is entropy-admissible by [F3]. [F2, F3, given]


2.1 **The ansatz is a classical solution.** Put $u(x,t)=u_0(y(x,t))$ for $0\le t<1$, which is smooth in $(x,t)$. By the chain rule and step 1.2, $u_t=u_0'(y)y_t=-u_0'(y)u_0(y)/X_t'(y)$ and $u_x=u_0'(y)y_x=u_0'(y)/X_t'(y)$. Hence $u_t+f(u)_x=u_t+f'(u)u_x=u_0'(y)\bigl[-u_0(y)+u_0(y)\bigr]/X_t'(y)=0$, so $u$ solves $u_t+f(u)_x=0$ classically on $\mathbb R\times(0,1)$. Since $X_t$ satisfies $\dot X_t(y)=u_0(y)=f'(u(X_t(y),t))$, this is exactly the family of characteristics of [F1], along which $u$ is the constant $u_0(y)$. [F1, F2, step 1.2]


2.2 **The gradient formula.** Differentiating $u(X_t(y),t)=u_0(y)$ in $y$ and using $u_xX_t'=u_0'$ gives $u_x(X_t(y),t)=\dfrac{u_0'(y)}{X_t'(y)}=\dfrac{u_0'(y)}{1+tu_0'(y)}=-\dfrac{1}{1+y^2-t}$. At $y=0$, where $X_t(0)=0$, this reads $u_x(0,t)=-1/(1-t)$ for $t<1$. [F2, step 1.2]


3.1 **Catastrophe at $T_*=1$.** For each $t<1$, $\sup_x|u_x(x,t)|=\sup_y\frac{1}{1+y^2-t}=\frac{1}{1-t}\to\infty$ as $t\uparrow1$, the supremum being attained at $y=0$; the classical solution exists for every $t<1$ by step 2.1, and its slope becomes unbounded as $t\uparrow1$. Hence the first gradient catastrophe occurs at $T_*=1$. [step 2.1, step 2.2]


3.2 **The limit profile at $t=1$.** $X_1'(y)=\tfrac{y^2}{1+y^2}\ge0$ with equality only at $y=0$, so $X_1(y)=y-\arctan y$ is strictly increasing with range $\mathbb R$; its inverse is continuous, and the profile $u(x,1)=u_0(X_1^{-1}(x))$ is continuous. For $y\ne0$, implicit differentiation as in step 2.2 with $t=1$ gives $u_x(X_1(y),1)=-1/y^2$, which tends to $-\infty$ as $y\to0$, i.e. as the corresponding point $x=X_1(y)\to0$. Thus at $t=1$ the solution is still continuous but has unbounded slope at $x=0$: a gradient catastrophe, not a jump. [F2, step 2.1, step 2.2]


4.1 **Entropy continuation and uniqueness.** The branches of step 1.3 give a bounded piecewise smooth profile for $t>1$. Its only jump is the descending stationary shock, so graph integration and the chord criterion give the weak equation and all smooth convex entropy inequalities; smooth convex approximation gives the Kruzhkov inequalities. For $t<1$ the smooth solution of step 2.1 has zero entropy production and attains $u_0$ locally uniformly. As $t\to1$ from either side, the selected feet converge for every $x\ne0$ to $X_1^{-1}(x)$; boundedness and dominated convergence give matching local $L^1$ traces to the continuous profile of step 3.2. Integrating separately below and above $t=1$ and taking these traces cancels the time-interface terms in both weak and entropy pairings. Thus this is a global entropy solution with the stated datum. Its uniqueness follows from [F3], even though $-\arctan x$ is not integrable. The first slope blow-up is at $t=1$, and a nonzero shock is present for every $t>1$. [F2, F3, step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

The profiles below distinguish the continuous gradient catastrophe from the later jump. They are parametrized by $(x,u)=(y-t\arctan y,-\arctan y)$: use all $y$ at $t=1/2$ and $t=1$, and only the outer branches $|y|>a(2)$ at $t=2$. The plotted portions have $|x|\le2$. At $t=1$ the profile passes continuously through the marked origin with unbounded slope (step 3.2). At $t=2$, the open circles mark the one-sided traces $u^-=\arctan a(2)$ and $u^+=-\arctan a(2)$, where $a(2)=2\arctan a(2)$; they do not prescribe a value on the stationary shock $x=0$ (step 1.3). The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[x=0.72cm,y=1.05cm]
\begin{scope}[xshift=0.0cm]
\draw[->,gray] (-2.3,0)--(2.35,0) node[right] {$x$};
\draw[->,gray] (0,-1.6)--(0,1.65) node[above] {$u$};
\node at (0,2.15) {$t=1/2$};
\draw[blue,thick] plot coordinates {(-2.000000,1.203872) (-1.959466,1.198209) (-1.919017,1.192376) (-1.878655,1.186368) (-1.838386,1.180175) (-1.798213,1.173791) (-1.758140,1.167205) (-1.718171,1.160411) (-1.678313,1.153397) (-1.638568,1.146154) (-1.598944,1.138672) (-1.559445,1.130938) (-1.520078,1.122942) (-1.480848,1.114670) (-1.441762,1.106110) (-1.402828,1.097247) (-1.364053,1.088067) (-1.325444,1.078553) (-1.287011,1.068689) (-1.248761,1.058458) (-1.210704,1.047840) (-1.172850,1.036816) (-1.135210,1.025366) (-1.097794,1.013466) (-1.060615,1.001094) (-1.023684,0.988225) (-0.987014,0.974832) (-0.950620,0.960889) (-0.914516,0.946367) (-0.878716,0.931234) (-0.843238,0.915460) (-0.808097,0.899011) (-0.773311,0.881852) (-0.738898,0.863947) (-0.704876,0.845259) (-0.671266,0.825748) (-0.638087,0.805375) (-0.605358,0.784101) (-0.573101,0.761884) (-0.541336,0.738683) (-0.510082,0.714459) (-0.479360,0.689173) (-0.449187,0.662787) (-0.419581,0.635268) (-0.390556,0.606586) (-0.362126,0.576715) (-0.334300,0.545637) (-0.307082,0.513341) (-0.280475,0.479824) (-0.254473,0.445096) (-0.229066,0.409179) (-0.204236,0.372108) (-0.179958,0.333933) (-0.156200,0.294719) (-0.132919,0.254549) (-0.110067,0.213523) (-0.087586,0.171753) (-0.065412,0.129370) (-0.043474,0.086515) (-0.021696,0.043338) (0.000000,-0.000000) (0.021696,-0.043338) (0.043474,-0.086515) (0.065412,-0.129370) (0.087586,-0.171753) (0.110067,-0.213523) (0.132919,-0.254549) (0.156200,-0.294719) (0.179958,-0.333933) (0.204236,-0.372108) (0.229066,-0.409179) (0.254473,-0.445096) (0.280475,-0.479824) (0.307082,-0.513341) (0.334300,-0.545637) (0.362126,-0.576715) (0.390556,-0.606586) (0.419581,-0.635268) (0.449187,-0.662787) (0.479360,-0.689173) (0.510082,-0.714459) (0.541336,-0.738683) (0.573101,-0.761884) (0.605358,-0.784101) (0.638087,-0.805375) (0.671266,-0.825748) (0.704876,-0.845259) (0.738898,-0.863947) (0.773311,-0.881852) (0.808097,-0.899011) (0.843238,-0.915460) (0.878716,-0.931234) (0.914516,-0.946367) (0.950620,-0.960889) (0.987014,-0.974832) (1.023684,-0.988225) (1.060615,-1.001094) (1.097794,-1.013466) (1.135210,-1.025366) (1.172850,-1.036816) (1.210704,-1.047840) (1.248761,-1.058458) (1.287011,-1.068689) (1.325444,-1.078553) (1.364053,-1.088067) (1.402828,-1.097247) (1.441762,-1.106110) (1.480848,-1.114670) (1.520078,-1.122942) (1.559445,-1.130938) (1.598944,-1.138672) (1.638568,-1.146154) (1.678313,-1.153397) (1.718171,-1.160411) (1.758140,-1.167205) (1.798213,-1.173791) (1.838386,-1.180175) (1.878655,-1.186368) (1.919017,-1.192376) (1.959466,-1.198209) (2.000000,-1.203872)};
\end{scope}
\begin{scope}[xshift=4.15cm]
\draw[->,gray] (-2.3,0)--(2.35,0) node[right] {$x$};
\draw[->,gray] (0,-1.6)--(0,1.65) node[above] {$u$};
\node at (0,2.15) {$t=1$};
\draw[blue,thick] plot coordinates {(-2.000000,1.274393) (-1.950155,1.269665) (-1.900458,1.264789) (-1.850916,1.259757) (-1.801537,1.254563) (-1.752328,1.249198) (-1.703298,1.243655) (-1.654455,1.237925) (-1.605808,1.231999) (-1.557368,1.225866) (-1.509145,1.219516) (-1.461149,1.212938) (-1.413393,1.206121) (-1.365890,1.199051) (-1.318653,1.191715) (-1.271696,1.184098) (-1.225035,1.176186) (-1.178687,1.167961) (-1.132669,1.159405) (-1.087001,1.150501) (-1.041702,1.141227) (-0.996794,1.131561) (-0.952301,1.121481) (-0.908248,1.110961) (-0.864661,1.099974) (-0.821570,1.088492) (-0.779006,1.076483) (-0.737002,1.063914) (-0.695594,1.050749) (-0.654821,1.036949) (-0.614723,1.022473) (-0.575346,1.007277) (-0.536736,0.991314) (-0.498945,0.974532) (-0.462027,0.956876) (-0.426040,0.938290) (-0.391046,0.918711) (-0.357111,0.898073) (-0.324302,0.876308) (-0.292694,0.853343) (-0.262362,0.829102) (-0.233383,0.803508) (-0.205839,0.776478) (-0.179811,0.747934) (-0.155378,0.717793) (-0.132619,0.685979) (-0.111608,0.652417) (-0.092410,0.617041) (-0.075081,0.579797) (-0.059661,0.540644) (-0.046171,0.499561) (-0.034609,0.456550) (-0.024943,0.411643) (-0.017108,0.364904) (-0.011003,0.316437) (-0.006485,0.266381) (-0.003371,0.214921) (-0.001440,0.162280) (-0.000430,0.108716) (-0.000054,0.054519) (0.000000,-0.000000) (0.000054,-0.054519) (0.000430,-0.108716) (0.001440,-0.162280) (0.003371,-0.214921) (0.006485,-0.266381) (0.011003,-0.316437) (0.017108,-0.364904) (0.024943,-0.411643) (0.034609,-0.456550) (0.046171,-0.499561) (0.059661,-0.540644) (0.075081,-0.579797) (0.092410,-0.617041) (0.111608,-0.652417) (0.132619,-0.685979) (0.155378,-0.717793) (0.179811,-0.747934) (0.205839,-0.776478) (0.233383,-0.803508) (0.262362,-0.829102) (0.292694,-0.853343) (0.324302,-0.876308) (0.357111,-0.898073) (0.391046,-0.918711) (0.426040,-0.938290) (0.462027,-0.956876) (0.498945,-0.974532) (0.536736,-0.991314) (0.575346,-1.007277) (0.614723,-1.022473) (0.654821,-1.036949) (0.695594,-1.050749) (0.737002,-1.063914) (0.779006,-1.076483) (0.821570,-1.088492) (0.864661,-1.099974) (0.908248,-1.110961) (0.952301,-1.121481) (0.996794,-1.131561) (1.041702,-1.141227) (1.087001,-1.150501) (1.132669,-1.159405) (1.178687,-1.167961) (1.225035,-1.176186) (1.271696,-1.184098) (1.318653,-1.191715) (1.365890,-1.199051) (1.413393,-1.206121) (1.461149,-1.212938) (1.509145,-1.219516) (1.557368,-1.225866) (1.605808,-1.231999) (1.654455,-1.237925) (1.703298,-1.243655) (1.752328,-1.249198) (1.801537,-1.254563) (1.850916,-1.259757) (1.900458,-1.264789) (1.950155,-1.269665) (2.000000,-1.274393)};
\fill[blue] (0,0) circle (1.8pt);
\end{scope}
\begin{scope}[xshift=8.3cm]
\draw[->,gray] (-2.3,0)--(2.35,0) node[right] {$x$};
\draw[->,gray] (0,-1.6)--(0,1.65) node[above] {$u$};
\node at (0,2.15) {$t=2$};
\draw[blue,thick] plot coordinates {(0.000000,1.165561) (-0.023692,1.170810) (-0.047639,1.175932) (-0.071832,1.180930) (-0.096261,1.185810) (-0.120921,1.190576) (-0.145802,1.195230) (-0.170899,1.199777) (-0.196202,1.204220) (-0.221707,1.208562) (-0.247407,1.212808) (-0.273294,1.216959) (-0.299365,1.221018) (-0.325612,1.224990) (-0.352030,1.228875) (-0.378615,1.232678) (-0.405361,1.236400) (-0.432262,1.240044) (-0.459316,1.243613) (-0.486516,1.247108) (-0.513859,1.250531) (-0.541340,1.253886) (-0.568956,1.257173) (-0.596702,1.260394) (-0.624575,1.263553) (-0.652572,1.266649) (-0.680688,1.269686) (-0.708921,1.272665) (-0.737268,1.275586) (-0.765724,1.278453) (-0.794288,1.281266) (-0.822955,1.284027) (-0.851725,1.286738) (-0.880593,1.289399) (-0.909557,1.292011) (-0.938615,1.294577) (-0.967765,1.297098) (-0.997003,1.299573) (-1.026328,1.302006) (-1.055737,1.304396) (-1.085229,1.306745) (-1.114801,1.309054) (-1.144451,1.311324) (-1.174177,1.313556) (-1.203978,1.315751) (-1.233852,1.317909) (-1.263796,1.320031) (-1.293810,1.322120) (-1.323891,1.324174) (-1.354038,1.326195) (-1.384250,1.328184) (-1.414525,1.330142) (-1.444861,1.332069) (-1.475257,1.333966) (-1.505712,1.335833) (-1.536224,1.337672) (-1.566793,1.339483) (-1.597416,1.341266) (-1.628093,1.343023) (-1.658822,1.344753) (-1.689603,1.346458) (-1.720433,1.348137) (-1.751313,1.349792) (-1.782241,1.351423) (-1.813216,1.353031) (-1.844237,1.354615) (-1.875303,1.356177) (-1.906413,1.357717) (-1.937567,1.359235) (-1.968763,1.360732) (-2.000000,1.362209)};
\draw[blue,thick] plot coordinates {(0.000000,-1.165561) (0.023692,-1.170810) (0.047639,-1.175932) (0.071832,-1.180930) (0.096261,-1.185810) (0.120921,-1.190576) (0.145802,-1.195230) (0.170899,-1.199777) (0.196202,-1.204220) (0.221707,-1.208562) (0.247407,-1.212808) (0.273294,-1.216959) (0.299365,-1.221018) (0.325612,-1.224990) (0.352030,-1.228875) (0.378615,-1.232678) (0.405361,-1.236400) (0.432262,-1.240044) (0.459316,-1.243613) (0.486516,-1.247108) (0.513859,-1.250531) (0.541340,-1.253886) (0.568956,-1.257173) (0.596702,-1.260394) (0.624575,-1.263553) (0.652572,-1.266649) (0.680688,-1.269686) (0.708921,-1.272665) (0.737268,-1.275586) (0.765724,-1.278453) (0.794288,-1.281266) (0.822955,-1.284027) (0.851725,-1.286738) (0.880593,-1.289399) (0.909557,-1.292011) (0.938615,-1.294577) (0.967765,-1.297098) (0.997003,-1.299573) (1.026328,-1.302006) (1.055737,-1.304396) (1.085229,-1.306745) (1.114801,-1.309054) (1.144451,-1.311324) (1.174177,-1.313556) (1.203978,-1.315751) (1.233852,-1.317909) (1.263796,-1.320031) (1.293810,-1.322120) (1.323891,-1.324174) (1.354038,-1.326195) (1.384250,-1.328184) (1.414525,-1.330142) (1.444861,-1.332069) (1.475257,-1.333966) (1.505712,-1.335833) (1.536224,-1.337672) (1.566793,-1.339483) (1.597416,-1.341266) (1.628093,-1.343023) (1.658822,-1.344753) (1.689603,-1.346458) (1.720433,-1.348137) (1.751313,-1.349792) (1.782241,-1.351423) (1.813216,-1.353031) (1.844237,-1.354615) (1.875303,-1.356177) (1.906413,-1.357717) (1.937567,-1.359235) (1.968763,-1.360732) (2.000000,-1.362209)};
\draw[blue,thick,fill=white] (0,1.165561) circle (2.6pt);
\draw[blue,thick,fill=white] (0,-1.165561) circle (2.6pt);
\node[right] at (0.15,1.165561) {$u^-$};
\node[left] at (-0.15,-1.165561) {$u^+$};
\end{scope}
\end{tikzpicture}
```
