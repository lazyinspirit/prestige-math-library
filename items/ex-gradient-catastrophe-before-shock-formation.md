---
id: ex-gradient-catastrophe-before-shock-formation
kind: example
title: Gradient catastrophe before shock formation
status: draft
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
