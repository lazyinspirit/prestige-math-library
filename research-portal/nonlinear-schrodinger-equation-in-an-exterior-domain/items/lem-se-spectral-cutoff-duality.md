---
id: lem-se-spectral-cutoff-duality
kind: lemma
domain: mathematics
title: Endpoint multiplier bounds extended to negative spectral orders
status: draft
deps:
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - math:thm-local-smooth-approximation-in-wkp
  - math:lem-compact-support-zero-extension-in-wkp
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  lem-se-exterior-dirichlet-realization: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:lem-mollification-commutes-with-weak-derivatives-in-the-interior: mathematical-premise
  math:thm-local-smooth-approximation-in-wkp: mathematical-premise
  math:lem-compact-support-zero-extension-in-wkp: mathematical-premise
  math:thm-complex-holder-minkowski-and-the-quotient-norm: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
formulation_deps:
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
argument_deps:
  - lem-se-exterior-dirichlet-realization
  - lem-se-positive-spectral-scale-contract
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - math:thm-local-smooth-approximation-in-wkp
  - math:lem-compact-support-zero-extension-in-wkp
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:lem-test-function-cutoffs-and-euclidean-localization
---

## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, where $\Theta$ is compact with smooth boundary and $\Omega$ is open. Let $A=I-\Delta_D\ge I$ be the shifted Dirichlet Laplacian and let $H_D^s$ be the associated Hilbert scale, with pivot $L^2(\Omega)$ and norm $\|A^{s/2}u\|_2$ on its spectral core. For every complex-valued $a\in W^{2,\infty}(\Omega)$ and every $-2\le s\le2$, multiplication by $a$ extends to a bounded complex-linear operator on $H_D^s$, with norm at most $C_{s,\Omega}\|a\|_{W^{2,\infty}}$. Here $W^{k,p}(\Omega;\mathbb C)$ is the space of almost-everywhere classes with weak derivatives through order $k$ in $L^p$, and $H^k(\Omega)=W^{k,2}(\Omega;\mathbb C)$ for $k=0,1,2$, with $\|u\|_{H^k}^2=\sum_{|\alpha|\le k}\|D^\alpha u\|_2^2$. In particular $W^{2,\infty}$ has norm $\|a\|_{W^{2,\infty}}=\max_{|\alpha|\le2}\|D^\alpha a\|_\infty$.

For $s>0$, the negative-order extension is defined by $\langle af,u\rangle_{-s,s}=\langle f,\overline a u\rangle_{-s,s}$ for $f\in H_D^{-s}$ and $u\in H_D^s$, where the pivot pairing is linear in its first argument. It agrees with ordinary multiplication on $L^2$. Thus the result applies in particular to smooth cutoffs with bounded derivatives through order two and to any potentials belonging to $W^{2,\infty}(\Omega)$. Complex conjugation is an isometry on each of these scale spaces.

## Facts & Assumptions

[F1] The exterior Dirichlet realization gives $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$ with equivalent graph and $H^2$ norms, and $D(A^{1/2})=H^1_0(\Omega)$ with the energy norm [[lem-se-exterior-dirichlet-realization]]. Here $H^1_0(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$.

[F2] The positive spectral-scale contract identifies positive levels with domains of powers, identifies negative levels with pivot antiduals, gives bounded-operator interpolation on the scale, and makes conjugation an isometry for the real Dirichlet form [[lem-se-positive-spectral-scale-contract]].

[F3] The weak Leibniz rule gives the product formula through any finite order when the multiplier is smooth and the indicated weak derivatives exist [[math:lem-weak-leibniz-rule-with-a-smooth-factor]].

[F4] The Axiom of Choice is assumed for the spectral and realization suppliers and implies the Countable Choice hypotheses of the Sobolev, product, mollification and extension suppliers. It also permits the approximating sequence used below [[math:def-axiom-of-choice]].

[F5] Integer-order Sobolev spaces are spaces of almost-everywhere classes characterized by the weak test identities; their norms are derivative sums for finite $p$ and the maximum of essential derivative bounds for $p=\infty$ [[math:def-sobolev-space-wkp-and-its-norm]]. We use complex scalars, $H^k=W^{k,2}$ and the norm convention in the Statement.

[F6] For an open set $G$, $b\in W^{k,p}(G;\mathbb C)$, $1\le p\le\infty$, and a nonnegative smooth unit-mass kernel $\rho$ supported in the unit ball, the interior mollification $b_\varepsilon=\rho_\varepsilon*E_0b$ is smooth on $G_\varepsilon=\{x\in G:\operatorname{dist}(x,\mathbb R^n\setminus G)>\varepsilon\}$ and $D^\alpha b_\varepsilon=\rho_\varepsilon*E_0(D^\alpha b)$ there for $|\alpha|\le k$ [[math:lem-mollification-commutes-with-weak-derivatives-in-the-interior]]. Here $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$, $E_0$ denotes extension by zero, and $G_\varepsilon=\mathbb R^n$ if $G=\mathbb R^n$.

[F7] For the same mollification, if $b\in W^{k,p}(G;\mathbb C)$ and $1\le p<\infty$, then $b_\varepsilon\to b$ in $W^{k,p}(U;\mathbb C)$ for every open $U$ compactly contained in $G$ [[math:thm-local-smooth-approximation-in-wkp]]. We apply this with $p=2$, on bounded interior sets for the coefficient and on $\mathbb R^n$ for compactly supported $H^1$ functions; no $W^{k,\infty}$ norm convergence is used.

[F8] If $v\in W^{k,p}(G;\mathbb C)$ vanishes outside a compact subset of the open set $G$, then $E_0v\in W^{k,p}(\mathbb R^n;\mathbb C)$, $D^\alpha E_0v=E_0D^\alpha v$ for $|\alpha|\le k$, and its Sobolev norm is preserved [[math:lem-compact-support-zero-extension-in-wkp]].

[F9] Complex Holder bounds $\left|\int fg\right|\le\|f\|_2\|g\|_2$, and complex Minkowski bounds finite sums in $L^2$ [[math:thm-complex-holder-minkowski-and-the-quotient-norm]]. These apply with Lebesgue measure on every open set used below.

[F10] A compact subset of an open Euclidean set has a smooth compactly supported cutoff valued in $[0,1]$ and equal to one near that subset [[math:lem-test-function-cutoffs-and-euclidean-localization]]. Applied to $\{0\}\subset B_1(0)$ and normalized by its positive finite integral, this supplies a nonnegative $\rho\in C_c^\infty(B_1(0))$ with integral one.

## Proof

**Given:** The domain, scale, choice assumption and multiplier in the Statement.

**Goal:** Prove the multiplier bounds at all orders from $-2$ to $2$ and identify the negative-order action.

1.1 Fix $k\in\{1,2\}$, $u\in H^k(\Omega)$ and $\varphi\in C_c^\infty(\Omega)$. Choose bounded open sets $U,V$ with $\operatorname{supp}\varphi\subset U$, $\overline U\subset V$ and $\overline V\subset\Omega$, both closures compact, and choose the kernel $\rho$ of [F10]. Let $a_\varepsilon=\rho_\varepsilon*E_0a$. For small $\varepsilon$, [F6] gives smoothness on $U$ and $|D^\beta a_\varepsilon(x)|\le\|D^\beta a\|_\infty$ there for $|\beta|\le k$, since the convolution is an average with a nonnegative unit-mass kernel. Because $V$ is bounded, $a|_V\in W^{k,2}(V)$: each derivative has finite $L^2(V)$ norm bounded by $|V|^{1/2}\|D^\beta a\|_\infty$. For $\varepsilon<\operatorname{dist}(\overline U,\mathbb R^n\setminus V)$ its mollification agrees on $U$ with $a_\varepsilon$. Thus [F7] gives $D^\beta a_\varepsilon\to D^\beta a$ in $L^2(U)$ for every $|\beta|\le k$, including the highest order. [F4, F5, F6, F7, F10, given]

2.1 Apply [F3] on $U$ to $a_\varepsilon$ and $u|_U$. In the weak test identity for $|\alpha|\le k$, pass to the limit against $\varphi$: the left-hand error is bounded by $\|a_\varepsilon-a\|_{L^2(U)}\|uD^\alpha\varphi\|_{L^2(U)}$, and the error in each right-hand product term is bounded by $\|D^\beta a_\varepsilon-D^\beta a\|_{L^2(U)}\|D^{\alpha-\beta}u\,\varphi\|_{L^2(U)}$, both tending to zero by step 1.1 and [F9]. Since the test function was arbitrary, the weak formula is $D^\alpha(au)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta a\,D^{\alpha-\beta}u$ on $\Omega$. Every summand is globally in $L^2$, with norm at most $\|D^\beta a\|_\infty\|D^{\alpha-\beta}u\|_2$. Finite-sum estimates and [F5] therefore give $au\in H^k(\Omega)$ and $\|au\|_{H^k}\le C_{n,k}\|a\|_{W^{k,\infty}}\|u\|_{H^k}$. For $k=0$ the bound is the pointwise $L^\infty$ estimate. [F3, F5, F9, step 1.1, given]

3.1 If $u\in H^1_0(\Omega)$, choose $u_j\in C_c^\infty(\Omega)$ converging to $u$ in $H^1$. Step 2.1 gives $au_j\to au$ in $H^1$. For fixed $j$, $v=au_j$ belongs to $H^1$ and vanishes outside $K_j=\operatorname{supp}u_j$, a compact subset of $\Omega$. By [F8], $E_0v\in H^1(\mathbb R^n)$. Its mollification is smooth by [F6] and vanishes when $\operatorname{dist}(x,K_j)>\varepsilon$, directly from the support of $\rho_\varepsilon$ in its defining integral. Hence for all sufficiently small $\varepsilon$ it has compact support in $\Omega$, with all these supports in one bounded ball $B$. By [F7] on $\mathbb R^n$ it converges to $E_0v$ in $H^1(B)$, and therefore globally in $H^1(\mathbb R^n)$, since the differences and their weak derivatives vanish outside $B$. Restriction to $\Omega$ proves $au_j\in H^1_0(\Omega)$; closure then gives $au\in H^1_0(\Omega)$. The case $v=0$ uses the zero approximants. The same proof applies to $\overline a$. Combined with step 2.1 this preserves $H^2\cap H^1_0$ as well. [F1, F4, F5, F6, F7, F8, step 2.1, given]

4.1 By the domain and norm identifications, steps 2.1 and 3.1 give multiplier bounds on $H_D^0=L^2$, $H_D^1=H^1_0$ and $H_D^2=H^2\cap H^1_0$, each bounded by a constant times $\|a\|_{W^{2,\infty}}$. The endpoint operators are consistent because they are all ordinary pointwise multiplication. Interpolation between orders $0$ and $1$, and between orders $1$ and $2$, yields the asserted bound for every $0\le s\le2$. The same bounds hold for multiplication by $\overline a$. [F1, F2, step 2.1, step 3.1]

5.1 For $0<s\le2$, the antidual identification makes $u\mapsto\langle f,\overline a u\rangle_{-s,s}$ a bounded conjugate-linear functional on $H_D^s$, with norm at most $C_{s,\Omega}\|a\|_{W^{2,\infty}}\|f\|_{H_D^{-s}}$. It therefore determines a unique $af\in H_D^{-s}$ with that bound. If $f\in L^2$, then $\langle f,\overline a u\rangle_{L^2}=\langle af,u\rangle_{L^2}$ for $u\in H_D^s$, so this definition agrees with ordinary multiplication. The real Dirichlet form also gives the stated conjugation isometry on the scale. The cutoff and potential cases follow by substituting the stated regularity into the bound. [F2, step 4.1, given] ∎

## Source notes

The proof uses local coefficient mollification and the test-function definition of the zero-boundary space; it does not require a trace product theorem or a higher-power Dirichlet boundary condition. No assertion is made here for orders beyond two.
