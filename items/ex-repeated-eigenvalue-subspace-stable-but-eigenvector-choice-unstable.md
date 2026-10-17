---
id: ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable
kind: example
title: A repeated eigenspace can be stable while chosen eigenvectors oscillate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-compact-linear-operator
  - def-countable-choice
  - def-eigenspace-best-approximation-gap
  - def-hilbert-space
  - def-totally-bounded
  - def-metric-compactness
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-reals-cauchy-complete
  - thm-of-archimedean
  - lem-compact-self-adjoint-residual-controls-invariant-subspace-gap
  - lem-conforming-energy-projection-is-best-approximation
  - lem-finite-dimensional-galerkin-minmax
  - thm-compact-coercive-form-spectrum-and-minmax
  - thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster
  - thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error
  - thm-complete-and-totally-bounded-implies-compact
  - thm-heine-borel-rn
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.3 and Remark 47.16, repeated eigenvalues and invariant-subspace comparison."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.5–8.6, printed pp. 132–136, spectral clusters and eigenspace comparison."
verification: {}
---

## Example

Let $I:=\{1,2,\ldots\}$, $H=\ell^2(I,\mathbb R)$, and define
$\lambda_1=\lambda_2=1$ and $\lambda_j=j$ for $j\ge3$. Give
$$V=\left\{u=(u_j)_{j\in I}:\sum_{j\ge1}\lambda_j|u_j|^2<\infty\right\},\qquad \|u\|_V^2:=\sum_{j\ge1}\lambda_j|u_j|^2,\qquad a(u,v):=\sum_{j\ge1}\lambda_j u_jv_j.$$
Let $J:V\hookrightarrow H$ be inclusion. It is a compact injective map with
dense range; the first eigenvalue $1$ has
eigenspace $E=\operatorname{span}\{e_1,e_2\}$ and is separated from
$\lambda_3=3$. Use the constant conforming trial spaces $V_n=E$ for every
positive integer $n$.
Then each repeated Ritz eigenspace $E_n$ equals $E$, so the subspace gap is
zero, while a valid choice of unit Ritz eigenvector may alternate between
$e_1$ and $e_2$ and therefore fail to converge.

## Facts & Assumptions

**Given:** Countable Choice; the index set $I$, real Hilbert space $H$, weighted space $V$, form $a$, inclusion $J$, and weights $\lambda_j$ defined above; $E=\operatorname{span}\{e_1,e_2\}$; and $V_n=E$ for every $n\ge1$.

[F1] The space $\ell^2(I,\mathbb R)$ is defined by finite square sums, with its standard inner product and finite-tail property ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F2] Every Cauchy sequence of real numbers converges ([[thm-reals-cauchy-complete]]).

[F3] A bounded Hermitian coercive form on a Hilbert space induces the energy inner product; a compact injective dense inclusion gives the compact coercive-form spectrum ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-hilbert-space]], [[def-compact-linear-operator]], [[thm-compact-coercive-form-spectrum-and-minmax]]).

[F4] The directed energy best-approximation gap is the supremum of normalized distances to the trial space ([[def-eigenspace-best-approximation-gap]]).

[F5] For an isolated repeated cluster, the conforming Galerkin theorem compares the invariant eigenspaces and does not select individual eigenvectors ([[thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster]]).

[F6] Under Countable Choice, a complete totally bounded metric space is compact; the compact-operator definition reduces compactness to compactness of the closure of a unit-ball image ([[def-totally-bounded]], [[thm-complete-and-totally-bounded-implies-compact]], [[def-compact-linear-operator]], [[def-countable-choice]]).

[F7] Closed bounded subsets of $\mathbb R^N$ are compact, so every open cover has a finite subcover ([[thm-heine-borel-rn]], [[def-metric-compactness]]).

[F8] The natural numbers are unbounded in $\mathbb R$ ([[thm-of-archimedean]]).

[F9] Cauchy--Schwarz holds in the real inner-product space $H$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A1] Countable Choice is assumed by the compact-form theorem and the cluster theorem ([[def-countable-choice]]).

## Proof
**Proof technique:** direct.

**Given:** The weighted sequence space, inclusion $J$, form $a$, eigenspace $E$, and trial spaces $V_n=E$ for $n\ge1$.

1.1 Let $(x^{(n)})$ be Cauchy in $H$. For each $j\in I$, $x_j^{(n)}$ is Cauchy in $\mathbb R$ because $|x_j^{(n)}-x_j^{(m)}|\le\|x^{(n)}-x^{(m)}\|_H$; let $x_j$ be its limit by [F2]. The norms $\|x^{(n)}\|_H$ are bounded: after some index every term is within $1$ of one fixed term, and the finitely many earlier norms have a maximum. Thus they are bounded by some $C$. For every finite $F\subseteq I$, passage to coordinate limits gives $\sum_{j\in F}|x_j|^2\le C^2$, so $x=(x_j)\in H$ by [F1]. Given $\varepsilon>0$, choose $N$ so $\|x^{(n)}-x^{(m)}\|_H<\varepsilon/2$ for $n,m\ge N$. For fixed $n\ge N$ and finite $F$, let $m\to\infty$ in $\sum_{j\in F}|x_j^{(n)}-x_j^{(m)}|^2<\varepsilon^2/4$; taking the supremum over finite $F$ gives $\|x^{(n)}-x\|_H\le\varepsilon/2<\varepsilon$. Thus $H$ is complete. [F1, F2, given, algebra]

2.1 Define $U:V\to H$ by $(Uu)_j=\sqrt{\lambda_j}u_j$. The estimate $\sum_j\lambda_j|\alpha u_j+\beta v_j|^2\le2|\alpha|^2\|u\|_V^2+2|\beta|^2\|v\|_V^2$ shows $V$ is a vector space, and the coordinate formula makes $U$ linear. It is onto, since $y\in H$ has preimage $u_j=y_j/\sqrt{\lambda_j}\in V$, and it is an isometry from $\|\cdot\|_V$ to $\|\cdot\|_H$. Moreover $a(u,v)=(Uu,Uv)_H$, so the series defining $a$ is well-defined and $a$ is the inner product inducing $\|\cdot\|_V$. Step 1.1 and this isometry make $V$ a Hilbert space. Since $\lambda_j\ge1$, $a(u,u)\ge\|Ju\|_H^2$; [F9] gives $|a(u,v)|\le\|u\|_V\|v\|_V$, so $a$ is bounded and coercive. Finite truncations are dense in $H$ by the tail property in [F1], so $J$ is injective with dense range. [F1, F9, step 1.1, given, algebra]

3.1 Let $B_V:=\{u\in V:\|u\|_V\le1\}$. For any $\varepsilon>0$, choose $N\ge2$ with $1/(N+1)<\varepsilon^2/4$ by [F8]. If $x=Ju$ with $u\in B_V$, then $\sum_{j>N}|x_j|^2=\sum_{j>N}|u_j|^2\le (N+1)^{-1}\sum_{j>N}\lambda_j|u_j|^2\le1/(N+1)$. The ellipsoid $C_N:=\{(z_1,\ldots,z_N)\in\mathbb R^N:\sum_{j\le N}\lambda_j|z_j|^2\le1\}$ is closed and bounded, hence compact by [F7]. Its open balls of radius $\varepsilon/2$ centered at its points cover it, so compactness gives a finite $\varepsilon/2$-net with centers in $C_N$. Each center $z$ lifts by zero padding to $\widetilde z=(z_1,\ldots,z_N,0,\ldots)\in J(B_V)$. For $x=Ju\in J(B_V)$, its prefix lies in $C_N$ and the tail norm is less than $\varepsilon/2$, so some lift satisfies $\|x-\widetilde z\|_H<\varepsilon$. Thus $J(B_V)$ is totally bounded. Its closure $C:=\overline{J(B_V)}$ is totally bounded as well: a finite $\varepsilon/2$-net for $J(B_V)$ is an $\varepsilon$-net for $C$ by the triangle inequality and the definition of closure. The set $C$ is complete because it is closed in the complete space $H$. By [F6], $C$ is compact; the unit-ball criterion in [[def-compact-linear-operator]] now shows that $J$ is compact. [F1, F6, F7, F8, A1, step 2.1, given, algebra]

3.2 For every coordinate vector $e_j$, $a(e_j,v)=\lambda_j(Je_j,Jv)_H$. For nonzero $u\in V$, $\frac{a(u,u)}{\|Ju\|_H^2}=\frac{\sum_j\lambda_j|u_j|^2}{\sum_j|u_j|^2}\ge1$, with equality exactly when $u_j=0$ for every $j\ge3$. Conversely, testing any weak eigenpair equation at $v=e_j$ gives $(\lambda_j-\lambda)u_j=0$ for each $j$, so every eigenvalue is one of the $\lambda_j$ and its eigenspace is the span of the corresponding coordinate vectors. Hence the first eigenvalue is $1$ with eigenspace $E$, and the next is $\lambda_3=3$. [F3, A1, step 2.1, given, algebra]

4.1 The restriction of the continuous form to each $V_n=E$ is the identity form, so its two Ritz values are $1$ and the full cluster eigenspace $E_n=E$. For every $u\in E$, $u\in V_n$, so [F4] gives $\delta_a(E,V_n)=0$; likewise the gap from $E$ to $E_n$ is zero. The cluster theorem [F5] applies with $r=1,s=2$ and its gap conclusion is attained exactly. [F4, F5, A1, step 3.2, given]

5.1 For every positive integer $n$, set $u_n=e_1$ when $n$ is even and $u_n=e_2$ when $n$ is odd. Both are unit Ritz eigenvectors for the same repeated eigenvalue $1$. Their successive energy distances are $\|e_1-e_2\|_a=\sqrt2$, so $(u_n)$ is not Cauchy and cannot converge. This does not contradict step 4.1: the invariant subspace remains exactly $E$, while the repeated eigenspace supplies no preferred basis vector. [step 4.1, given, algebra] ∎

## Remarks

The trial spaces in this abstract illustration are constant and are not a mesh-refinement family. It isolates the multiplicity issue: a subspace gap can be zero even when an arbitrary sequence of eigenvector choices has no limit.
