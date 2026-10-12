---
id: lem-symbol-locality-gives-coding-continuity
kind: lemma
title: "Finite symbol windows determine the code: locality of the iterates, coding continuity and injectivity of $h(\\sigma)=(x_{-1}(\\sigma),x_0(\\sigma))$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-coded-quadratic-recurrence-is-a-contraction, lem-bounded-bilateral-sequence-ball-is-complete, thm-banach-fixed-point, cor-banach-error-estimates, def-metric-continuity, def-metric-convergence, lem-geometric-sequence-null, def-series, lem-of-abs-value, def-abs-value, def-lipschitz-holder-contraction, def-metric-space, def-metric-ball, lem-cm-bilateral-shift-metric-and-sequential-compactness]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  cor-banach-error-estimates: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-convergence: mathematical-premise
  lem-geometric-sequence-null: mathematical-premise
  def-series: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-abs-value: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 11.5, the proof that the itinerary map for the tent map is a homeomorphism, and Lemma 11.15"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.2, finite memory and finite foresight of the binary itinerary"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, coding of invariant sets by which of two components contains successive iterates"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and let $R=\sqrt a+3$, $L=\sqrt{a-2R}$, $X_\pm$, $D_\pm$ and $B_R$ be as in [[def-bilateral-symbol-and-bounded-sequence-space]] and [[lem-coded-quadratic-recurrence-is-a-contraction]]. Define the **quadratic phase map**

$$F:\mathbb R^2\longrightarrow\mathbb R^2,\qquad F(x,y):=(y,\;y^2-a-x),$$

and for each $s\in X_\pm$ let $x(s)$ be the unique fixed point of $T_s$ in $B_R$. Define the **coding map**

$$h:X_\pm\longrightarrow\mathbb R^2,\qquad h(s):=\bigl(x_{-1}(s),\,x_0(s)\bigr).$$

Then:

1. $F$ is a bijection with $F^{-1}(x,y)=(x^2-a-y,\,x)$, and for every $s\in X_\pm$ and $n\in\mathbb Z$

$$F\bigl(x_{n-1}(s),x_n(s)\bigr)=\bigl(x_n(s),x_{n+1}(s)\bigr);$$

2. **(locality)** for all $m\ge0$, $n\in\mathbb Z$ and $s,t\in X_\pm$: if $s_j=t_j$ for all $j$ with $|j-n|\le m-1$, then $\bigl(T_s^m0\bigr)_n=\bigl(T_t^m0\bigr)_n$, where $T_s^m$ is the $m$-fold iterate and $0$ the zero sequence;
3. **(uniform error)** for all $m\ge0$ and $s\in X_\pm$,

$$\bigl\|T_s^m0-x(s)\bigr\|_\infty\le 2R\,L^{-m};$$

4. **(coding continuity)** if $s,t\in X_\pm$ agree at every coordinate $j$ with $|j|\le m$, then $|x_n(s)-x_n(t)|\le4R\,L^{-m}$ for $n\in\{-1,0\}$, and consequently

$$\bigl\|h(s)-h(t)\bigr\|_2\le4\sqrt2\,R\,L^{-m};$$

in particular $h$ is continuous at every $s\in X_\pm$ ([[def-metric-continuity]]) when $X_\pm$ carries $D_\pm$ and $\mathbb R^2$ the Euclidean metric;

5. **(injectivity)** $h$ is injective.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,L$, the shift spaces $X_\pm$, the balls $B_R$, the operators $T_s$, their fixed points $x(s)$ of [[lem-coded-quadratic-recurrence-is-a-contraction]], the map $F$ and the coding map $h$ displayed above.

[F1] Fixed point data ([[lem-coded-quadratic-recurrence-is-a-contraction]]): for each $s\in X_\pm$, $x(s)\in B_R$, $T_sx(s)=x(s)$, $\operatorname{sign}x_n(s)=s_n$, $|x_n(s)|\ge L$ and $x_{n+1}(s)+x_{n-1}(s)=x_n(s)^2-a$ for all $n$; also $\|T_s^m0-x(s)\|_\infty\le 2RL^{-m}$ is what clause 3 asserts.

[F2] Banach error estimate ([[cor-banach-error-estimates]], [[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]]): for a contraction with constant $q<1$ on a complete metric space, the iterates from any starting point $x_0$ satisfy $d(x^*,x_m)\le q^m d(x_1,x_0)/(1-q)$; here $q=1/L$, $L\ge\sqrt{74}>2$, so $1/(1-1/L)=L/(L-1)\le2$.

[F3] Ball and metric data ([[def-bilateral-symbol-and-bounded-sequence-space]], [[lem-bounded-bilateral-sequence-ball-is-complete]], [[def-metric-space]]): $0\in B_R$; $\|y\|_\infty\le R$ for $y\in B_R$; $T_s(B_R)\subseteq B_R$; and $\|T_s^m0\|_\infty\le R$; the distance on $X_\pm$ is $D_\pm(s,t)=d_2(\varphi(s),\varphi(t))$ with the published metric $d_2$ of $X_2=\{0,1\}^{\mathbb Z}$.

[F4] Cylinders and balls in the published space ([[lem-cm-bilateral-shift-metric-and-sequential-compactness]], clause 2): with $u,v\in X_2$ and $F_m:=\{-m,\dots,m\}$, if $d_2(u,v)<2^{-m}$ then $u_j=v_j$ for $|j|\le m$; under the isometry $\varphi$ of [[lem-bounded-bilateral-sequence-ball-is-complete]] this says for $s,t\in X_\pm$: if $D_\pm(s,t)<2^{-m}$ then $s_j=t_j$ for $|j|\le m$.

[F5] Absolute value, order and the sequence $0$ ([[def-abs-value]], [[lem-of-abs-value]], [[def-bilateral-symbol-and-bounded-sequence-space]]): $|uv|=|u||v|$, $|u|\le M$ if and only if $-M\le u\le M$ for $M\ge0$, and the zero sequence satisfies $(T_s^00)_n=0$.

[F6] Continuity in a metric space ([[def-metric-continuity]], [[def-metric-ball]], [[def-metric-convergence]]): $h$ is continuous at $s$ when for every $\varepsilon>0$ there is $\delta>0$ such that $D_\pm(s,t)<\delta$ implies $\|h(s)-h(t)\|_2<\varepsilon$.



## Proof

**Proof technique:** direct; an induction on $m$ for the finite window, the a priori Banach estimate for the uniform error, and the explicit inverse of $F$ for injectivity.

1.1 Inverse of $F$: for all $(x,y)\in\mathbb R^2$, $F(x^2-a-y,\,x)=(x,\;x^2-a-(x^2-a-y))=(x,y)$ and $F(y,\,y^2-a-x)=(y^2-a-x,\;(y^2-a-x)^2-a-y)$, so with $(u,v)=(y,y^2-a-x)$ one has $v^2-a-u=y^2-a-x$, i.e. $F^{-1}(u,v)=(v^2-a-u,v)$; both composites are the identity, so $F$ is a bijection and $F^{-1}(x,y)=(x^2-a-y,x)$. For $s\in X_\pm$ and $n\in\mathbb Z$, [F1] gives $x_{n+1}(s)=x_n(s)^2-a-x_{n-1}(s)$, hence $F(x_{n-1}(s),x_n(s))=(x_n(s),\,x_n(s)^2-a-x_{n-1}(s))=(x_n(s),x_{n+1}(s))$. [given, F1, algebra]

1.2 Locality, by induction on $m\ge0$: for $m=0$ the sequence $T_s^00=0$ is independent of $s$, so the claim is vacuous. Assume it holds for $m$ and let $s,t$ agree for $|j-n|\le m$. Then $(T_s^{m+1}0)_n=s_n\sqrt{a+(T_s^m0)_{n-1}+(T_s^m0)_{n+1}}$. The symbol $s_n=t_n$ lies in $|n-n|=0\le m$; by the induction hypothesis applied at $n-1$ and $n+1$ (for which the required windows are $|j-(n-1)|\le m-1$ and $|j-(n+1)|\le m-1$, both contained in $|j-n|\le m$) the two radicands coincide; hence the two values coincide. This proves clause 2. [given, F1, F3, algebra]

2.1 Uniform error: $T_s^m0$ is the $m$-th Banach iterate of the starting point $0\in B_R$ for the contraction $T_s$ with constant $1/L$ on the complete space $B_R$ ([F3], [F1]). By [F2], $\|T_s^m0-x(s)\|_\infty\le q^m\|T_s0-0\|_\infty/(1-q)\le q^m R/(1-q)\le 2RL^{-m}$, where $\|T_s0\|_\infty\le R$ by [F3]. [given, step 1.2, F1, F2, F3]

3.1 Coding estimates: let $s,t$ agree for $|j|\le m$ and let $n\in\{-1,0\}$. For $n=0$, locality at level $m$ requires agreement for $|j|\le m-1$, which holds; for $n=-1$ it requires agreement for $|j+1|\le m-1$, i.e. $|j|\le m$, which also holds. Hence $\bigl(T_s^m0\bigr)_n=\bigl(T_t^m0\bigr)_n$, and two applications of step 2.1 give $|x_n(s)-x_n(t)|\le|(T_s^m0)_n-(T_t^m0)_n|+4RL^{-m}=4RL^{-m}$ for $n=-1,0$ ([[def-abs-value]], [F5]). Consequently $\|h(s)-h(t)\|_2=\sqrt{|x_{-1}(s)-x_{-1}(t)|^2+|x_0(s)-x_0(t)|^2}\le\sqrt2\cdot4RL^{-m}$. [given, step 1.2, step 2.1, F5, algebra]

4.1 Continuity of $h$: let $\varepsilon>0$ and choose $m\ge0$ with $4\sqrt2\,RL^{-m}<\varepsilon$, possible because $L>1$, hence $L^{-m}=(1/L)^m$ tends to $0$ ([[lem-geometric-sequence-null]], [[def-series]]). Put $\delta:=2^{-m}$. If $D_\pm(s,t)<\delta$, then by [F4] $s_j=t_j$ for $|j|\le m$, so step 3.1 gives $\|h(s)-h(t)\|_2<\varepsilon$. By [F6] this is continuity of $h$ at $s$, and $s$ was arbitrary. [given, step 3.1, F4, F6, algebra]

5.1 Injectivity: suppose $h(s)=h(t)$. For $u\in X_\pm$ and $n\in\mathbb Z$ put $z_n(u):=(x_{n-1}(u),x_n(u))$. By step 1.1, $z_{n+1}(u)=F(z_n(u))$ and $z_{n-1}(u)=F^{-1}(z_n(u))$ for all $n$; induction on $n\ge0$ gives $z_n(u)=F^n(z_0(u))$ and induction on $n\le0$ gives $z_n(u)=F^{n}(z_0(u))$ (using the bijectivity of $F$ from step 1.1). Since $z_0(s)=h(s)=h(t)=z_0(t)$, it follows that $z_n(s)=z_n(t)$ for all $n$, hence $x_n(s)=x_n(t)$ for all $n$. By [F1], $s_n=\operatorname{sign}x_n(s)=\operatorname{sign}x_n(t)=t_n$, so $s=t$. [given, step 1.1, F1] ∎


## Remarks

- Clause 2 is the quantitative content of "finite memory": the value of the $m$-th approximation at coordinate $n$ sees only the $2m-1$ symbols centred at $n$. Clause 4 turns this into a modulus of continuity of the coding map through the uniform error estimate.

- Injectivity uses only that $F$ is invertible and that the sign of $x_n$ recovers $s_n$; no differentiability is used in this item.
