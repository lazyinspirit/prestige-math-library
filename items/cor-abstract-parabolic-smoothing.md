---
id: cor-abstract-parabolic-smoothing
kind: corollary
title: Abstract parabolic smoothing for mild solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [lem-generator-of-the-contour-semigroup-is-the-sectorial-operator, thm-exponential-bound-for-a-c-zero-semigroup, thm-classical-regularity-for-holder-continuous-forcing-under-compatibility, thm-analytic-semigroup-smoothing-estimates, lem-semigroup-generator-commutes-with-orbits-on-its-domain, thm-variation-of-constants-formula, def-complex-sector-and-bounded-analytic-semigroup, def-sectorial-operator-with-the-semigroup-sign-convention, def-infinitesimal-generator-of-a-c-zero-semigroup, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-bounded-linear-operator, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.31 and its proof for the iterated estimates, printed pp. 69-71'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.5, (11.49)-(11.53) on the domains $D(\bar L^k)$, printed pp. 275-276'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $A$ be sectorial of angle $\delta\in(0,\pi/2]$ on a complex Banach space $X$
with generated analytic semigroup $(T(t))_{t\ge0}$
([[def-sectorial-operator-with-the-semigroup-sign-convention]]). For $k\ge0$,
set $D(A^0):=X$, define $D(A^k):=\{y\in D(A^{k-1}):A^{k-1}y\in D(A)\}$ for
$k\ge1$, and give $D(A^k)$ the graph norm
$\|y\|_{D(A^k)}:=\sum_{j=0}^k\|A^jy\|$. Let $m\ge1$, $b>0$, $x\in X$, and
$f\in C^{m-1,\alpha}([0,b],D(A^{m-1}))$ for some $\alpha\in(0,1)$, with time
regularity measured in that graph norm. For $m=1$, impose no compatibility
condition on $x$. For $m\ge2$, define $\gamma_0:=x$ and
$\gamma_{j+1}:=A\gamma_j+f^{(j)}(0)$ for $0\le j<m-1$, and assume
$\gamma_j\in D(A)$ for $0\le j\le m-1$. Let
$$u(t):=T(t)x+\int_0^tT(t-s)f(s)\,ds.$$
Then $u(t)\in D(A^m)$ for every $t\in(0,b]$, $A^mu\in C((0,b],X)$, and,
writing $g(t):=A^{m-1}f(t)$,
$$\|A^mu(t)\|\le C_mt^{-m}\|x\|+(c_0+1)\|g(0)\|+\left(\frac{c_1}{\alpha}+c_0+1\right)[g]_\alpha t^\alpha,\qquad 0<t\le b,$$
where $c_0=\sup_{[0,b]}\|T(t)\|$, $c_1=\sup_{0<t\le b}t\|AT(t)\|$, and $C_m$ is
the analytic smoothing constant for $A^mT(t)$. In particular, for a constant
$C'_m$ depending only on $m,\alpha,b$ and the semigroup bounds,
$$\|A^mu(t)\|\le C'_mt^{-m}\bigl(\|x\|+\|f\|_{C^{m-1,\alpha}([0,b],D(A^{m-1}))}\bigr).$$
The compatibility tower is retained from the planned statement for $m\ge2$;
under this stronger graph-norm source hypothesis the proof below does not need
the tower. For $m=1$, homogeneous smoothing gives the result for every $x\in X$.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta\in(0,\pi/2]$ on the complex Banach space $X$ with generated analytic semigroup $T$ and constants $c_0=\sup_{0\le t\le b}\|T(t)\|$, $c_1=\sup_{0<t\le b}t\|AT(t)\|$; the recursively defined graph domains $D(A^k)$ with $D(A^0)=X$ and $D(A^k)=\{y\in D(A^{k-1}):A^{k-1}y\in D(A)\}$ and norms $\|y\|_{D(A^k)}=\sum_{j=0}^k\|A^jy\|$; $m\ge1$, $b>0$, $x\in X$, $\alpha\in(0,1)$, $f\in C^{m-1,\alpha}([0,b],D(A^{m-1}))$, $g:=A^{m-1}f$, and $u(t):=T(t)x+\int_0^tT(t-s)f(s)ds$; for $m\ge2$ the tower $\gamma_0=x$, $\gamma_{j+1}=A\gamma_j+f^{(j)}(0)$ is defined with $\gamma_j\in D(A)$ for $0\le j\le m-1$ (an unused hypothesis).

[L1] For a sectorial operator $B$ with vertex $0$, its contour semigroup $S$ satisfies $S(t)X\subseteq D(B^k)$, $\|B^kS(t)\|\le K_kt^{-k}$ for $k\ge1$, and $S^{(k)}(t)=B^kS(t)$ in operator norm ([[thm-analytic-semigroup-smoothing-estimates]]). It is bounded on the positive real axis, has generator $B$, and is unique among exponentially bounded semigroups with that generator ([[lem-generator-of-the-contour-semigroup-is-the-sectorial-operator]]). Every strongly continuous semigroup has an exponential bound under the assumed Dependent Choice ([[thm-exponential-bound-for-a-c-zero-semigroup]]).

[L2] For every $y\in D(A)$ and every $t\ge0$ one has $AT(t)y=T(t)Ay$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]).

[L3] The generated semigroup $T$ is strongly continuous on $[0,\infty)$ with generator $A$, and $A$ is closed ([[def-complex-sector-and-bounded-analytic-semigroup]], [[def-sectorial-operator-with-the-semigroup-sign-convention]]).

[L4] If $x_0\in D(A)$ and $h\in C^\alpha([0,b],X)$, then $U(t):=T(t)x_0+\int_0^tT(t-s)h(s)ds$ is a classical solution: $U\in C^1([0,b],X)$, $U(t)\in D(A)$ for every $t$, $U(0)=x_0$, $U'=AU+h$ pointwise, and $AU\in C([0,b],X)$ with $AU(0)=Ax_0$ ([[thm-classical-regularity-for-holder-continuous-forcing-under-compatibility]]).

[L5] For that $U$, every $0<t\le b$ satisfies $AU(t)-Ax_0=(T(t)-I)(Ax_0+h(0))+R_h(t)$ where $\|R_h(t)\|\le(\frac{c_1}{\alpha}+c_0+1)[h]_\alpha t^\alpha$, with $c_0,c_1$ the semigroup constants and $[h]_\alpha$ the Hölder constant of $h$ ([[thm-classical-regularity-for-holder-continuous-forcing-under-compatibility]]).

## Proof

**Proof technique:** direct.

1.1 Homogeneous term with an arbitrary vertex. Let $\omega$ be a sectorial vertex for $A$ and put $B:=A-\omega I$. Since $R(\lambda,B)=R(\lambda+\omega,A)$, $B$ is sectorial with vertex $0$. The semigroup $S(t):=e^{-\omega t}T(t)$ has generator $B$ on $D(A)$: its difference quotient converges exactly when that of $T$ does, since $(S(h)y-y)/h=e^{-\omega h}(T(h)y-y)/h+(e^{-\omega h}-1)y/h$. It is exponentially bounded by [L1], hence equals the contour semigroup of $B$ by [L1]. Induction using $B=A-\omega I$ gives $D(B^k)=D(A^k)$ and $A^k=(B+\omega I)^k=\sum_{j=0}^k\binom{k}{j}\omega^{k-j}B^j$ on this common domain: in the induction step, the lower powers $B^jy$ for $j<k$ already lie in $D(B)=D(A)$, so $A^ky\in D(A)$ is equivalent to $B^ky\in D(B)$. Put $K_0:=\sup_{t\ge0}\|S(t)\|$. For $0<t\le b$, [L1] now gives $T(t)X\subseteq D(A^m)$ and $\|A^mT(t)\|\le e^{\max\{\omega,0\}b}\sum_{j=0}^m\binom{m}{j}|\omega|^{m-j}K_jb^{m-j}t^{-m}=:C_mt^{-m}$. In particular $c_0,c_1$ are finite. Differentiating $T(t)=e^{\omega t}S(t)$ gives $T^{(m)}(t)=A^mT(t)$, continuous in operator norm for $t>0$. This $C_m$ is a finite-interval smoothing constant; no global $t^{-m}$ bound for a nonzero vertex is asserted. Writing $u=T(\cdot)x+v$, with $v(t):=\int_0^tT(t-s)f(s)\,ds$, reduces the remaining membership, continuity and estimate to those for $A^mv$. [L1, given, algebra]

1.2 The curves $h_j$ and their images. The graph norm on $D(A^{m-1})$ dominates $\|\cdot\|$ and $\|A^j\cdot\|$ for every $0\le j\le m-1$, so each $h_j:=A^jf$ is a continuous $X$-valued curve on $[0,b]$; the curve $g=h_{m-1}$ satisfies $\|g(0)\|\le\|f(0)\|_{D(A^{m-1})}$ and, for $m\ge2$, is differentiable in $X$ with $g'=A^{m-1}f'$ bounded, hence Lipschitz and α-Hölder, while for $m=1$ it equals $f$ and is α-Hölder by hypothesis; thus $g\in C^\alpha([0,b],X)$ with $\|g(0)\|$ and $[g]_\alpha$ controlled by $\|f\|_{C^{m-1,\alpha}([0,b],D(A^{m-1}))}$. Fix $0<t\le b$ and $0\le j\le m-2$ and put $u_j(s):=T(t-s)h_j(s)$: by strong continuity of $T$ from [L3] and continuity of $h_j$ the curve $u_j$ is continuous on $[0,t]$, and for every $s\in[0,t]$ one has $h_j(s)\in D(A)$, $u_j(s)\in D(A)$ and $Au_j(s)=T(t-s)h_{j+1}(s)=u_{j+1}(s)$ by [L2]. [L2, L3, given, algebra]

2.1 Domain induction by closedness. The claim is that for every $0\le j\le m-1$ one has $v(t)\in D(A^j)$ with $A^jv(t)=V_j(t):=\int_0^tT(t-s)h_j(s)\,ds$; the case $j=0$ is the definition of $v$. Assume the claim for some $j\le m-2$ and take right-endpoint Riemann sums $S_n$ of the continuous curve $u_j$ along partitions of $[0,t]$ with mesh tending to $0$: then $S_n\to V_j(t)=A^jv(t)$, while each $S_n$ lies in $D(A)$ and $AS_n$ is the corresponding Riemann sum of $u_{j+1}$, so $AS_n\to V_{j+1}(t)$ by [step 1.2]; since $A$ is closed by [L3], $V_j(t)\in D(A)$ and $AV_j(t)=V_{j+1}(t)$, that is $v(t)\in D(A^{j+1})$ and $A^{j+1}v(t)=V_{j+1}(t)$. Induction up to $j=m-1$ gives $v(t)\in D(A^{m-1})$ and $A^{m-1}v(t)=w(t):=\int_0^tT(t-s)g(s)\,ds$, which is exactly the function $U$ of [L4] with $x_0=0$ and $h=g$. [step 1.2, L3, L4, given, algebra]

3.1 Classical regularity of $w$. By [step 1.2] the forcing $g$ lies in $C^\alpha([0,b],X)$, so [L4] applied to $x_0=0$ and $h=g$ makes $w$ a classical solution with $w(t)\in D(A)$ for every $t\in[0,b]$, $Aw\in C([0,b],X)$ and $Aw(0)=0$, and [L5] gives $Aw(t)=(T(t)-I)g(0)+R_g(t)$ with $\|R_g(t)\|\le(\frac{c_1}{\alpha}+c_0+1)[g]_\alpha t^\alpha$ for $0<t\le b$; since $A^{m-1}v(t)=w(t)$ by [step 2.1], the recursive definition of $D(A^m)$ yields $v(t)\in D(A^m)$ with $A^mv(t)=Aw(t)$. [step 1.2, step 2.1, L4, L5, given, algebra]

4.1 Final estimate and continuity. Adding the homogeneous bound of [step 1.1] to the bound of [step 3.1] gives, for every $0<t\le b$, $\|A^mu(t)\|\le C_mt^{-m}\|x\|+(c_0+1)\|g(0)\|+(\frac{c_1}{\alpha}+c_0+1)[g]_\alpha t^\alpha$, and $A^mu$ is continuous on $(0,b]$ because both $A^mT(\cdot)x$ and $Aw$ are continuous there by [step 1.1] and [step 3.1]; since $t\le b$ and the norms of $g(0)$ and $[g]_\alpha$ are controlled by [step 1.2], this gives $\|A^mu(t)\|\le C'_mt^{-m}(\|x\|+\|f\|_{C^{m-1,\alpha}([0,b],D(A^{m-1}))})$ with $C'_m$ depending only on $m,\alpha,b$ and the semigroup bounds. For $m=1$ the same argument runs with the single curve $h_0=f$ and the vacuous tower, and the splitting of [step 1.1] is what removes every requirement on $x\in X$; no choice principle beyond Dependent Choice is used. [step 1.1, step 1.2, step 3.1, given, algebra] ∎
