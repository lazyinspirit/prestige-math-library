---
id: lem-finite-word-deviations-give-homoclinic-orbits
kind: lemma
title: "Constant codes give the fixed points, and finite nonconstant word codes give homoclinic orbits converging to a fixed point at both ends"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-coded-quadratic-recurrence-is-a-contraction, lem-symbol-locality-gives-coding-continuity, thm-henon-coded-invariant-set-is-conjugate-to-shift, def-stable-unstable-cones-and-line-slopes, def-metric-convergence, def-metric-space, def-continuity-real, thm-of-square-roots, def-abs-value, lem-of-abs-value, thm-geometric-series, lem-geometric-sequence-null]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  lem-symbol-locality-gives-coding-continuity: mathematical-premise
  thm-henon-coded-invariant-set-is-conjugate-to-shift: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-metric-space: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  thm-geometric-series: mathematical-premise
  lem-geometric-sequence-null: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.2, homoclinic orbits and the Smale-Birkhoff homoclinic theorem"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.2, periodic and nonperiodic itineraries and their limiting behaviour"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, coding of the invariant set and convergence of coded orbits"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$, let $R=\sqrt a+3$, $L=\sqrt{a-2R}$, let $x(s)$ and $h$ be the coded sequence and coding map of [[def-bilateral-symbol-and-bounded-sequence-space]], [[lem-coded-quadratic-recurrence-is-a-contraction]] and [[lem-symbol-locality-gives-coding-continuity]], and let $F(x,y)=(y,y^2-a-x)$. For $u\in\{-1,+1\}$ write $\bar u\in X_\pm$ for the constant code $\bar u_n:=u$, and put

$$r_u:=1+u\sqrt{a+1},$$

so that $r_+>0>r_-$, and write $W^s,W^u$ for the stable and unstable sets of [[def-stable-unstable-cones-and-line-slopes]]. Then:

1. $x_n(\bar u)=r_u$ for every $n$, and $r_u^2=a+2r_u$; consequently $h(\bar u)=(r_u,r_u)$ is a fixed point of $F$;
2. if $s\in X_\pm$ satisfies $s_n=u$ for all $|n|\ge N$ for some $N\ge0$, then

$$F^n\bigl(h(s)\bigr)\longrightarrow(r_u,r_u)\quad\text{as }n\to+\infty\quad\text{and as }n\to-\infty ;$$

3. if moreover $s$ is not the constant code $\bar u$, then $h(s)\ne(r_u,r_u)$, $F^n(h(s))\ne(r_u,r_u)$ for every $n\in\mathbb Z$, and $h(s)\in W^s(r_u,r_u)\cap W^u(r_u,r_u)$; hence $h(s)$ is a homoclinic point of the fixed point $(r_u,r_u)$;
4. distinct codes $s\ne t$ of the kind in clause 2 give distinct points $h(s)\ne h(t)$; in particular the finite-word deviations from the two constant codes produce infinitely many distinct homoclinic points.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,L$, the coded sequence $x(s)$ and map $h$, the phase map $F$, the constant codes $\bar u$, the numbers $r_u$, and a code $s$ with $s_n=u$ for $|n|\ge N$.

[F1] Coding data ([[lem-coded-quadratic-recurrence-is-a-contraction]], [[lem-symbol-locality-gives-coding-continuity]]): $x(s)\in B_R$ is the unique fixed point of $T_s$, $\operatorname{sign}x_n(s)=s_n$, $|x_n(s)|\ge L$, $x_{n+1}(s)+x_{n-1}(s)=x_n(s)^2-a$; locality: $(T_s^m0)_n$ depends only on $s_j$ with $|j-n|\le m-1$; uniform error: $\|T_s^m0-x(s)\|_\infty\le2RL^{-m}$; $h$ is injective; $F(x_{n-1}(s),x_n(s))=(x_n(s),x_{n+1}(s))$.

[F2] Conjugacy and invariant set ([[thm-henon-coded-invariant-set-is-conjugate-to-shift]]): $F(h(s))=h(S_\pm s)$ for all $s$, and the coded set is invariant.

[F3] Square roots and the equation $r^2=a+2r$ ([[thm-of-square-roots]], [[def-abs-value]]): $a+2r_u>0$, $\sqrt{a+2r_u}=|r_u|$ and $r_u=u\sqrt{a+2r_u}$, because $r_u^2=a+2r_u$ and $\operatorname{sign}r_u=u$.

[F4] Stable and unstable sets ([[def-stable-unstable-cones-and-line-slopes]]): $W^s(\bar z)=\{z:F^n(z)\ \text{defined for all }n\ge0,\ F^n(z)\to\bar z\}$, $W^u(\bar z)=\{z:F^{-n}(z)\to\bar z\}$, and a homoclinic point of a fixed point $\bar z$ is a point of $W^s(\bar z)\cap W^u(\bar z)$ different from $\bar z$; convergence is metric convergence ([[def-metric-convergence]], [[def-metric-space]]).

[F5] The sequence $L^{-m}$ tends to $0$ because $L>1$ ([[lem-geometric-sequence-null]], [[thm-geometric-series]]).

[F6] Absolute value and order ([[lem-of-abs-value]], [[def-abs-value]]): $|uv|=|u||v|$, $|u+w|\le|u|+|w|$, and $10^2=100$.

## Proof

**Proof technique:** direct; check the constant codes against the recurrence, use the locality of the finite windows for the two-sided convergence, and invoke injectivity of the coding for the distinctness of finite-word homoclinic points.



1.1 The constants $r_u$: by [F6] and $a\ge100$, $a+2-2\sqrt{a+1}\ge a+2-2(\sqrt a+1)=a-2\sqrt a>0$ for $a>4$, so $a+2r_u=a+2+2u\sqrt{a+1}>0$; the number $r_u=1+u\sqrt{a+1}$ satisfies $r_u^2=1+2u\sqrt{a+1}+(a+1)=a+2+2u\sqrt{a+1}=a+2r_u$, and $\operatorname{sign}r_u=u$ (for $u=+1$ because $\sqrt{a+1}>1$, for $u=-1$ because $\sqrt{a+1}>1$). Hence by [F3] $r_u=u\sqrt{a+2r_u}$. [given, F3, F6, algebra]

2.1 Constant codes: let $\tilde x$ be the constant sequence $\tilde x_n:=r_u$. By step 1.1, $(T_{\bar u}\tilde x)_n=u\sqrt{a+r_u+r_u}=u\sqrt{a+2r_u}=r_u=\tilde x_n$ for all $n$; so $\tilde x$ is a fixed point of $T_{\bar u}$ in $B_R$ (indeed $|r_u|\le1+\sqrt{a+1}\le R$ by [F6] and $a\ge100$). By uniqueness ([F1]) $x(\bar u)=\tilde x$, hence $h(\bar u)=(r_u,r_u)$; and $F(r_u,r_u)=(r_u,r_u^2-a-r_u)=(r_u,r_u)$ because $r_u^2-a=2r_u$. [step 1.1, F1, F2, F6, algebra]

3.1 Convergence in the forward direction: let $m\ge0$ and let $n\ge N+m-1$; then every $j$ with $|j-n|\le m-1$ satisfies $j\ge n-(m-1)\ge N$, hence $s_j=u=\bar u_j$. By [F1], $\bigl(T_s^m0\bigr)_n=\bigl(T_{\bar u}^m0\bigr)_n$. Therefore $$\bigl|x_n(s)-x_n(\bar u)\bigr|\le\bigl|x_n(s)-\bigl(T_s^m0\bigr)_n\bigr|+\bigl|\bigl(T_{\bar u}^m0\bigr)_n-x_n(\bar u)\bigr|\le4RL^{-m}$$ for $n\ge N+m-1$, using the uniform error bound of [F1] twice and $x(\bar u)=\tilde x$ of step 2.1. Given $\varepsilon>0$, choose $m$ with $4RL^{-m}<\varepsilon$, possible by [F5]; then $|x_n(s)-r_u|<\varepsilon$ for all $n\ge N+m-1$. Hence $x_n(s)\to r_u$ as $n\to+\infty$, and therefore $F^n(h(s))=(x_{n-1}(s),x_n(s))\to(r_u,r_u)$ by [F1]. [step 2.1, F1, F2, F5, algebra]

3.2 Nonconstancy: suppose $s\ne\bar u$; then there is $k$ with $s_k\ne u$, and by [F1] $\operatorname{sign}x_k(s)=s_k\ne u=\operatorname{sign}r_u$, so $x_k(s)\ne r_u$ and $h(s)=(x_{-1}(s),x_0(s))$; if $h(s)=(r_u,r_u)$ then $x_{-1}(s)=x_0(s)=r_u$, and then by the recurrence $x_n(s)=r_u$ for all $n$, so $s_n=\operatorname{sign}x_n(s)=u$ for all $n$, a contradiction. Hence $h(s)\ne(r_u,r_u)$. Since $F^n(h(s))=h(S_\pm^ns)$ by [F2] and each $S_\pm^ns$ is again not constant, the same argument gives $F^n(h(s))\ne(r_u,r_u)$ for all $n\in\mathbb Z$. [step 2.1, F1, F2, algebra]

4.1 Convergence in the backward direction: the same argument with $n\le-N-(m-1)$ (so that every $j$ with $|j-n|\le m-1$ satisfies $j\le N$) gives $|x_n(s)-r_u|\le4RL^{-m}$; hence $x_n(s)\to r_u$ as $n\to-\infty$. Since $F$ is a bijection ([F1]) and $F^n(h(s))=(x_{n-1}(s),x_n(s))$, this says $F^n(h(s))\to(r_u,r_u)$ as $n\to-\infty$. [step 3.1, F1, algebra]

5.1 Homoclinic points: by steps 3.1 and 4.1, the point $h(s)$ lies in $W^s(r_u,r_u)\cap W^u(r_u,r_u)$ (the forward and backward orbits are defined for all times because $F$ is a bijection and $F^n(h(s))=(x_{n-1}(s),x_n(s))$ for all $n$), and by step 3.2 it differs from the fixed point. By the definition [F4] it is a homoclinic point of $(r_u,r_u)$. [step 3.1, step 4.1, step 3.2, F1, F4]

6.1 Distinctness: if $s\ne t$ then $h(s)\ne h(t)$ because $h$ is injective by [F1]; the nonconstant finite-word codes are infinite in number (for example the codes differing from $\bar u$ at exactly the coordinates $0,1,\dots,j$ for $j\ge0$ are pairwise distinct), so there are infinitely many distinct homoclinic points. [step 5.1, F1] ∎


## Remarks

- The convergence rates are uniform in the code: for a code that agrees with $\bar u$ for $|n|\ge N$, the deviation satisfies $|x_n(s)-r_u|\le4RL^{-m}$ whenever $|n|\ge N+m-1$.

- The two constant codes give fixed points, not homoclinic points; homoclinic points arise precisely from nonconstant codes with constant tails, which are the finite-word deviations promised by the design.
