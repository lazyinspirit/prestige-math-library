---
id: lem-reverse-holder-from-a-distribution-estimate
kind: lemma
title: Reverse Holder from a distribution estimate for a doubling weight
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-weight-and-weighted-lp-space, def-weighted-maximal-function-relative-to-a-doubling-weight, lem-differentiation-of-l-one-functions-for-a-doubling-weight, lem-maximal-dyadic-subcubes-of-a-cube-at-a-height, thm-countable-additivity-and-set-function-continuity, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fatou-lemma, thm-monotone-convergence-for-the-integral, thm-layer-cake-formula-for-l-p-powers, def-real-power, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Corollary 7.2.4 with its proof (the density hypothesis and the reverse Hölder conclusion), printed pp. 517-518"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Lemma 4.36 and its proof, printed pp. 86-89"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $v$ be a
weight on $\mathbb R^n$ whose measure $v\,d\lambda$ is doubling
([[def-weighted-maximal-function-relative-to-a-doubling-weight]]), and let
$h\ge0$ be measurable with $hv\in L^1_{\mathrm{loc}}(\lambda)$. Suppose there
are $0<\alpha,\beta<1$ such that for every cube $Q$ and every measurable
$S\subseteq Q$,
$$v(S)\le\alpha v(Q)\quad\Longrightarrow\quad\int_Shv\,d\lambda\le\beta\int_Qhv\,d\lambda.$$
Then there are $q>1$ and $c<\infty$, depending only on $n$, the doubling
constant of $v$, $\alpha$ and $\beta$, such that
$$\Bigl(\frac{1}{v(Q)}\int_Qh^qv\,d\lambda\Bigr)^{1/q}\le\frac{c}{v(Q)}\int_Qhv\,d\lambda$$
for every cube $Q$.

## Facts & Assumptions

**Given:** Dependent Choice, a weight $v$ with $\mu:=v\,d\lambda$ doubling, a nonnegative measurable $h$ with $h\in L^1_{\mathrm{loc}}(\mu)$, constants $0<\alpha,\beta<1$, a cube $Q_0$, and the levels $\alpha_k:=(C_n\alpha^{-1})^k\alpha_0$ with $\alpha_0:=\mu(Q_0)^{-1}\int_{Q_0}h\,d\mu>0$.

[F1] $\mu$ is a locally finite measure with $0<\mu(Q)<\infty$ for every cube; cubes and balls of comparable size have comparable $\mu$-measure, with a constant depending only on $n$ and the doubling constant of $v$ ([[def-weighted-maximal-function-relative-to-a-doubling-weight]], [[def-weight-and-weighted-lp-space]]).

[F2] Inside $Q_0$ the dyadic subcubes form a family with a top element $Q_0$ in which every proper descendant has a parent inside $Q_0$ and two cubes are nested or disjoint ([[lem-maximal-dyadic-subcubes-of-a-cube-at-a-height]]).

[F3] Differentiation for the doubling weight $v$: for $\mu$-almost every point, the $\mu$-averages of an $L^1_{\mathrm{loc}}(\mu)$ function over the dyadic subcubes shrinking nicely to the point converge to the value of the function ([[lem-differentiation-of-l-one-functions-for-a-doubling-weight]]).

[F4] $\mu$ is countably additive on disjoint measurable pieces, and the layered integral identity and Fubini/Tonelli are available ([[thm-countable-additivity-and-set-function-continuity]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-layer-cake-formula-for-l-p-powers]]).

## Proof

**Proof technique:** direct.

1.1 Since $\alpha_k\ge\alpha_0$ for every $k\ge0$ and the top cube $Q_0$ has $\mu$-average $\alpha_0$, the cube $Q_0$ is not bad at any level $k$. For every bad subcube $R$ the ancestors of $R$ inside $Q_0$ form a finite chain ending at $Q_0$; hence there is a topmost bad ancestor, and the family of maximal bad subcubes (those with no bad proper ancestor inside $Q_0$) is well defined, pairwise disjoint and at most countable. Let $U_k$ be their union. [F1, F2, given, algebra]

2.1 Let $R$ be a maximal bad subcube at level $k$ with parent $P$: then $\langle h\rangle^\mu_P\le\alpha_k$ by maximality, and $\mu(P)\le C_n\mu(R)$ by [F1] since $P$ is a cube of twice the side length containing $R$; hence $\int_Rh\,d\mu\le\int_Ph\,d\mu\le C_n\alpha_k\mu(R)$, that is, $\langle h\rangle^\mu_R\le C_n\alpha_k$. Moreover $U_{k+1}\subseteq U_k$ by the same parent argument, and $h\le\alpha_k$ $\mu$-almost everywhere on $Q_0\setminus U_k$: for a point $x$ outside $U_k$ and outside the $\mu$-null exceptional set of the differentiation lemma, no dyadic subcube $R\ni x$ has $\langle h\rangle^\mu_R>\alpha_k$, since such an $R$ would lie in a maximal bad cube containing $x$; the subcubes containing $x$ shrink nicely to $x$, so their $\mu$-averages converge to $h(x)$ by that lemma, and the limit satisfies $h(x)\le\alpha_k$. [F1, F2, F3, step 1.1, given, algebra]

3.1 Decay of the integrals. For a maximal bad subcube $R$ at level $k$, the set $S:=R\cap U_{k+1}$ is measurable and contained in $R$; since $U_{k+1}$ is the disjoint union of its maximal bad subcubes, on each of which the $\mu$-average of $h$ exceeds $\alpha_{k+1}$, $\alpha_{k+1}\mu(S)\le\int_Sh\,d\mu\le\int_Rh\,d\mu\le C_n\alpha_k\mu(R)$, so $\mu(S)\le\alpha\mu(R)$ because $C_n\alpha_k=\alpha\alpha_{k+1}$. The hypothesis applied to $S\subseteq R$ therefore gives $\int_Sh\,d\mu\le\beta\int_Rh\,d\mu$; summing over the pairwise disjoint maximal cubes at level $k$ yields $\int_{U_{k+1}}h\,d\mu\le\beta\int_{U_k}h\,d\mu$, hence $\int_{U_k}h\,d\mu\le\beta^k\int_{Q_0}h\,d\mu$ by iteration. [F1, F4, step 1.1, step 2.1, given, algebra]

4.1 Integral bound. If $\int_{Q_0}h\,d\mu=0$, then $h=0$ $\mu$-a.e. on $Q_0$ and the conclusion is immediate. Otherwise $\alpha_0>0$ as above. Summing the bounds $\mu(R\cap U_{k+1})\le\alpha\mu(R)$ from step 3.1 shows $\mu(U_{k+1})\le\alpha\mu(U_k)$; hence $\mu(\bigcap_kU_k)=0$. The sets $Q_0\setminus U_0$ and $U_k\setminus U_{k+1}$ are disjoint measurable pieces covering $Q_0$ up to a $\mu$-null set; by step 2.1, $h\le\alpha_0$ on $Q_0\setminus U_0$ and $h\le\alpha_{k+1}$ on $U_k\setminus U_{k+1}$, all $\mu$-a.e. Hence, for every $\gamma>0$, $\int_{Q_0}h^{1+\gamma}d\mu\le\alpha_0^\gamma\int_{Q_0\setminus U_0}h\,d\mu+\sum_{k\ge0}\alpha_{k+1}^\gamma\int_{U_k}h\,d\mu\le\alpha_0^\gamma\Bigl(\int_{Q_0}h\,d\mu\Bigr)\bigl[1+(C_n\alpha^{-1})^\gamma\sum_{k\ge0}\bigl((C_n\alpha^{-1})^\gamma\beta\bigr)^k\bigr]$. Choose $\gamma>0$ so small that $r:=(C_n\alpha^{-1})^\gamma\beta<1$; then the geometric series converges. [F4, step 2.1, step 3.1, given, algebra]

5.1 Dividing the display of step 4.1 by $\mu(Q_0)$ and using $\alpha_0=\mu(Q_0)^{-1}\int_{Q_0}h\,d\mu$ gives $(\mu(Q_0)^{-1}\int_{Q_0}h^{1+\gamma}d\mu)^{1/(1+\gamma)}\le c\,\mu(Q_0)^{-1}\int_{Q_0}h\,d\mu$ with $c=(1+(C_n\alpha^{-1})^\gamma/(1-r))^{1/(1+\gamma)}<\infty$; since $Q_0$ was arbitrary, the reverse Hölder inequality holds with $q=1+\gamma>1$ and this $c$, both depending only on $n$, the doubling constant of $v$, $\alpha$ and $\beta$. [step 3.1, step 4.1, given, algebra] ∎
