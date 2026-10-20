---
id: lem-parabolic-bellman-barrier-with-lebesgue-height-bound
kind: lemma
title: A parabolic Bellman barrier with a Lebesgue height bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-normalized-parabolic-bellman-bounded-weak-solution
  - thm-am-gm
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, Sections 2.1 and 2.2, Theorems 2.1.9 and 2.2.4
      url: https://doi.org/10.1090/surv/233
---

## Statement

Assume AC. For each dimension $d\ge1$ there is a finite constant $C_d$ such that for every nonnegative $f\in C_c^\infty(\mathbb R\times\mathbb R^d)$ there exists a bounded nonnegative globally Lipschitz function $v$, with bounded weak derivatives $v_t,D_xv,D_x^2v$, satisfying
$$\|v\|_\infty\le C_d\|f\|_{L^{d+1}(\mathbb R^{d+1})},\qquad |D_xv|\le v\quad\hbox{almost everywhere},$$
and, simultaneously for every constant symmetric positive semidefinite matrix $A$,
$$v_t+A:D_x^2v-(1+\operatorname{tr}A)v+(\det A)^{1/(d+1)}f\le0$$
as distributions and as bounded-function inequalities almost everywhere. One can choose $v$ to decay exponentially in $|x|$ uniformly in time and to vanish for all sufficiently large future times. The derivative bounds used in constructing $v$ may depend on derivatives of $f$; the displayed height constant does not.

## Facts & Assumptions

**Given:** AC, $d\ge1$ and $f\ge0$ smooth compactly supported.

[A1] Full AC is retained through the normalized Bellman construction. [[def-axiom-of-choice]]

[F1] The normalized Bellman construction supplies a bounded nonnegative Lipschitz $v$ with bounded weak $v_t,D_xv,D_x^2v$, satisfying $$\max_{A\ge0,\,\operatorname{tr}A\le1}\{r v_t+A:D_x^2v-v+(r\det A)^{1/(d+1)}f\}=0,\quad r=1-\operatorname{tr}A,$$ almost everywhere. It also supplies comparison with bounded smooth global supersolutions having bounded uniformly continuous $t$ derivative and spatial Hessian, and the identity $$S=v-v_t\ge0,\quad H=vI-D_x^2v\ge0,\quad S\det H=(f/(d+1))^{d+1}.$$ [[lem-normalized-parabolic-bellman-bounded-weak-solution]]

[F2] Arithmetic–geometric mean applies to the nonnegative eigenvalues of a positive semidefinite matrix and to an additional nonnegative scalar. [[thm-am-gm]]

[F3] Smooth convolution differentiates its kernel; for every weak derivative used here, the weak test identity applied to a translated kernel gives derivative-convolution commutation. Lebesgue differentiation holds for locally integrable functions. Its absolute Lebesgue-point version follows by also applying it to the countable family $|g-q|$, $q\in\mathbb Q$, and using $\limsup A_r|g-g(z)|\le2|q-g(z)|$, then $q\to g(z)$. Consequently bounded weak derivatives converge almost everywhere under a bounded compactly supported approximate identity. No second time or mixed derivatives of the unsmoothed $v$ are required. [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]

[F4] Dominated convergence applies with an integrable absolute majorant, and Fubini applies to absolutely integrable functions. [[thm-dominated-convergence]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

1.1 Take $v$ from [F1]. Put $\rho(x)=\sqrt{1+|x|^2}$, $\eta=1/4$, and $U(x)=C\exp(-\eta\rho(x))$. Then $D_x^2U=U(\eta^2D\rho\otimes D\rho-\eta D^2\rho)\le\eta^2UI$. For normalized $A,r$ the Bellman expression of $U$ is at most $-[r+(1-\eta^2)\operatorname{tr}A]U+f/(d+1)\le-(1-\eta^2)U+f/(d+1)$ by [F2]. Choose finite $C$ to make this nonpositive on the compact spatial support of $f$; it is nonpositive elsewhere as well. This bounded smooth $U$ has the bounded uniformly continuous derivatives required for comparison. Hence $v(t,x)\le C\exp(-\eta\rho(x))$ uniformly in $t$. [A1, F1, F2, given, construct]

1.2 For symmetric $B$ let $c_m(B)=(-1)^me_m(B)$, the signed sum of order-$m$ principal minors, with $c_0=1$, and define the matrix differential $C_m$ by $dc_m(B)[E]=C_m(B):E$. Polynomial expansion and homogeneity give $$\det(zI-B)=\sum_{m=0}^dz^{d-m}c_m(B),\qquad C_m(B):B=mc_m(B).$$ For $B\le0$, $C_m(B)\le0$ when $m\ge1$: differentiating each principal minor of $-B$ gives minus an embedded positive semidefinite cofactor matrix, including singular cases by continuity. For smooth $w$, each row and column of $C_m(D^2w)$ has zero divergence. Indeed expand its minors as signed sums over permutations; every differentiated Hessian factor gives a third derivative, canceled by the term with the differentiated row transposed with that factor's row. The signs reverse and the mixed third derivatives coincide; order-one minors have constant differentials. This proves the divergence identity by finite polynomial calculation. [given, algebra]

2.1 Write $F(t)=\sup_xf(t,x)$, supported in $[a,b]$. Choose smooth compactly supported $g\ge F$ so that $U(t)=\int_t^\infty e^{t-s}g(s)ds\ge F(t)$ everywhere: after choosing a smooth compact majorant of $F$, add a sufficiently large positive smooth bump in $(b+1,b+2)$, whose convolution has positive minimum on $[a,b]$. Since $U_t=U-g$, its normalized Bellman expression is $-rg-(1-r)U+(r\det A)^{1/(d+1)}f\le-F+f/(d+1)\le0$. Comparison applies, so $0\le v\le U$ and $v=0$ after the right endpoint of $\operatorname{supp}g$. [F1, F2, step 1.1, construct]

2.2 Comparing coefficients in $\det(zI-B)=\det((z-h)I-(B-hI))$ and differentiating in $B$ at fixed $h\ge0$ gives $$C_m(B)=\sum_{k=1}^m(-1)^{m-k}\binom{d-k}{m-k}h^{m-k}C_k(B-hI).$$ Thus $\sum_{m=1}^dw_mh^{d-m}C_m(B)=\sum_{k=1}^d\beta_kh^{d-k}C_k(B-hI)$, where $\beta_k=\sum_{j=0}^{d-k}(-1)^j\binom{d-k}{j}w_{k+j}$. If $hI-B\ge0$ and every $\beta_k\ge0$, this matrix is negative semidefinite by step 1.2. Set $p=d+2$. The two sequences needed below are $a_m=(p-m-1)/(m+1)$ and $b_m=1/[m(m+1)]$. For $n=d-k\ge1$, the alternating difference of $a$ is $p\int_0^1t^k(1-t)^ndt\ge0$; for $n=0$ it is $a_d>0$. That of $b$ is $\int_0^1t^{k-1}(1-t)^{n+1}dt\ge0$. These integral formulas follow by expanding $(1-t)^n$. Both matrix sums are therefore negative semidefinite whenever $hI-B\ge0$. [step 1.2, algebra]

2.3 First let $u\ge0$ be smooth, $uI-D_x^2u\ge0$, $u-u_t\ge0$, zero for $t\ge T_1$, with itself and every derivative used below exponentially decaying in $x$ on finite time intervals. Fix $t$ and put $w(s,x)=e^{-s}u(s,x)$, so $w_s\le0$ and $wI-D_x^2w\ge0$. For $m=0,\ldots,d$ set $$A_m=-\int_t^{T_1}\!\int_{\mathbb R^d}w^{p-m-1}c_m(D_x^2w)w_s\,dxds.$$ Then $A=\sum_mA_m=\int_t^{T_1}\int w^{p-d-1}(-w_s)\det(wI-D_x^2w)$. Temporal integration by parts gives the initial term $(p-m)^{-1}\int w(t)^{p-m}c_m(D_x^2w(t))$ plus $(p-m)^{-1}\int_t^{T_1}\int w^{p-m}C_m(D_x^2w):D_x^2w_s$. Two spatial integrations by parts, the divergence identity and Euler identity in step 1.2 yield $$(m+1)A_m=\frac{\int w(t)^{p-m}c_m(D_x^2w(t))dx}{p-m}+(p-m-1)\int_t^{T_1}\!\int w^{p-m-2}w_s(D_xw)^{\mathsf T}C_m(D_x^2w)D_xw\,dxds.$$ These integrations can first use compact spatial cutoffs. Every boundary error vanishes by exponential decay, and all integrals are absolutely convergent on the finite time interval, justifying Fubini. No power is singular since $p=d+2$. [F4, step 1.2, construct, algebra]

3.1 Sum the identity in step 2.3. Its final integrals are nonnegative: their matrix is $w^{p-d-2}\sum_ma_mw^{d-m}C_m(D_x^2w)\le0$ by step 2.2, and $w_s\le0$. Therefore $A\ge\sum_m[(p-m)(m+1)]^{-1}\int w(t)^{p-m}c_m(D_x^2w(t))dx$. For $m\ge1$, substitute $c_m=m^{-1}C_m:D_x^2w$ and integrate once in space. Their sum becomes $$-\int w(t)^{p-d-1}(D_xw)^{\mathsf T}\Bigl[\sum_{m=1}^db_mw(t)^{d-m}C_m(D_x^2w)\Bigr]D_xw\,dx\ge0$$ by step 2.2. The $m=0$ term is $p^{-1}\int w(t)^pdx$. Consequently $$p e^{pt}\int_t^{T_1}e^{-ps}\!\int u^{p-d-1}(u-u_s)\det(uI-D_x^2u)dxds\ge\int u(t,x)^pdx$$. [F4, step 2.2, step 2.3, algebra]

3.2 Restrict the nonnegative $u$ to any spatial line. The scalar inequality $y''\le y$ gives $y(r)\le y(0)\cosh r+y'(0)\sinh r$ by variation of constants for $y''-y$. Nonnegativity for all $r\ge0$ implies $y'(0)\ge-y(0)$; reversing the direction gives $|D_xu|\le u$. Integrating the derivative inequality along a segment gives $u(t,x)\ge u(t,y)e^{-|x-y|}$ (or first use $u+\delta$ and let $\delta\downarrow0$). Therefore $$\int u(t,x)^pdx\ge c_du(t,y)^p,\qquad c_d=\int_{\mathbb R^d}e^{-p|x|}dx>0.$$ This constant is finite and depends only on $d$, since $p=d+2$. [step 2.3, algebra]

4.1 Convolve the weak solution $v$ from step 1.1 in spacetime with a nonnegative smooth unit-mass kernel of radius $\epsilon$, and write $v_\epsilon$. It is nonnegative, has $v_\epsilon-(v_\epsilon)_t\ge0$ and $v_\epsilon I-D_x^2v_\epsilon\ge0$ by the linear weak inequalities and [F3]. For each fixed $\epsilon$, all derivatives decay exponentially in $x$ by step 1.1 and kernel differentiation; step 2.1 supplies a finite future cutoff. Hence steps 3.1–3.2 apply to $v_\epsilon$. At almost every spacetime point [F3] and [F1] give $$(v_\epsilon-(v_\epsilon)_t)\det(v_\epsilon I-D_x^2v_\epsilon)\longrightarrow(f/(d+1))^{d+1}.$$ All the weak derivatives occurring here are bounded uniformly after convolution. On any fixed finite time interval $[a,T_1+1]$, the integrand in step 3.1 is dominated by a constant times $e^{-\eta|x|}$: the factor $v_\epsilon^{p-d-1}$ is precisely $v_\epsilon$, with uniform exponential decay, and the remaining determinant factors are uniformly bounded. Thus [F4] gives the exact needed dominated limit. Also $v_\epsilon(t,y)\to v(t,y)$ at every point by Lipschitz continuity. We obtain $$c_dv(t,y)^p\le\frac{p}{(d+1)^{d+1}}\int_t^\infty e^{-p(s-t)}\!\int v(s,x)^{p-d-1}f(s,x)^{d+1}dxds$$. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 3.2]

5.1 Fix finite $a$ and put $V_a=\sup_{s\ge a,x}v(s,x)<\infty$. For $t\ge a$, step 4.1 is bounded above by $p(d+1)^{-d-1}V_a^{p-d-1}\|f\|_{d+1}^{d+1}$. Taking the supremum in $(t,y)$ gives $c_dV_a^p\le p(d+1)^{-d-1}V_a^{p-d-1}\|f\|_{d+1}^{d+1}$. If $V_a=0$ there is nothing to prove; otherwise divide to obtain $V_a\le[p/(c_d(d+1)^{d+1})]^{1/(d+1)}\|f\|_{d+1}$. This constant is independent of $a$, so it bounds $v$ everywhere. Applying the line argument in step 3.2 to the spatially smoothed weak solution and passing to Lebesgue points gives $|D_xv|\le v$ almost everywhere. Finally rescale the normalized control inequalities of [F1] using $r=1/(1+\operatorname{tr}A)$ and normalized matrix $rA$; divide by $r>0$ to get the asserted inequality for every $A\ge0$. The common null set is obtained first for countably many dense matrices and then by continuity. Steps 1.1 and 2.1 supply the additional decay and future cutoff. [F1, F3, step 1.1, step 2.1, step 3.2, step 4.1, algebra] ∎
