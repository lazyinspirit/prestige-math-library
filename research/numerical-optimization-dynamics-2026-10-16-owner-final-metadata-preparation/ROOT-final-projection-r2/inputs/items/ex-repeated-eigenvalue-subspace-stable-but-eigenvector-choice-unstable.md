---
id: ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable
kind: example
title: A repeated eigenspace can be stable while chosen eigenvectors oscillate
status: draft
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

Let $H=\ell^2(\mathbb N)$ and define $\lambda_1=\lambda_2=1$ and
$\lambda_j=j$ for $j\ge3$. Give
$$V=\left\{u=(u_j):\sum_{j\ge1}\lambda_j|u_j|^2<\infty\right\},\qquad a(u,v)=\sum_{j\ge1}\lambda_j u_j\overline{v_j},$$
the energy Hilbert norm, and let $J:V\hookrightarrow H$ be inclusion. This
is a compact injective map with dense range; the first eigenvalue $1$ has
eigenspace $E=\operatorname{span}\{e_1,e_2\}$ and is separated from
$\lambda_3=3$. Use the conforming trial space $V_h=E$ at every index $h$.
Then its repeated Ritz eigenspace $E_h$ equals $E$, so the subspace gap is
zero, while a valid choice of unit Ritz eigenvector may alternate between
$e_1$ and $e_2$ and therefore fail to converge.

## Facts & Assumptions

**Given:** Countable Choice; $H,V,J,a$ and $\lambda_j$ as defined above;
$E=\operatorname{span}\{e_1,e_2\}$; and $V_h=E$ for each $h$.

[F1] A bounded Hermitian coercive form on a Hilbert space induces the energy
inner product, and a compact injective dense inclusion gives the compact
coercive-form spectrum ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]],
[[def-hilbert-space]], [[def-compact-linear-operator]],
[[thm-compact-coercive-form-spectrum-and-minmax]]).

[F2] The directed energy best-approximation gap is the supremum of normalized
distances to the trial space ([[def-eigenspace-best-approximation-gap]]).

[F3] For an isolated repeated cluster, the conforming Galerkin theorem
compares the invariant eigenspaces and does not select individual eigenvectors
([[thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster]]).

[F4] Under Countable Choice, a complete totally bounded metric space is
compact; the compact-operator definition reduces compactness to compactness of
the closure of a unit-ball image
([[def-totally-bounded]],
[[thm-complete-and-totally-bounded-implies-compact]],
[[def-compact-linear-operator]], [[def-countable-choice]]).

[A1] Countable Choice is retained from the compact-form theorem and the
orthogonal-subspace results it uses ([[def-countable-choice]]).

## Proof
**Proof technique:** direct.

**Given:** The weighted sequence space, inclusion $J$, form $a$, eigenspace
$E$, and trial space $V_h=E$.

1.1 The map $U:V\to\ell^2$ given by $(Uu)_j=\sqrt{\lambda_j}u_j$ is a surjective isometry, so $V$ is Hilbert and $a$ is its inner product. Since $\lambda_j\ge1$, $a(u,u)\ge\|Ju\|_H^2$, and $a(u,u)=\|u\|_V^2$; hence the form is coercive and bounded. Finite sequences lie in $V$ and are dense in $H$, so $J$ is injective with dense range. [F1, A1, given, algebra]

1.2 Let $B_V:=\{u\in V:\|u\|_V\le1\}$. For any $\varepsilon>0$, choose $N$ so $1/\sqrt{\lambda_{N+1}}<\varepsilon/2$. If $x=Ju$ with $u\in B_V$, then $\sum_{j>N}|x_j|^2=\sum_{j>N}|u_j|^2\le\lambda_{N+1}^{-1}\sum_{j>N}\lambda_j|u_j|^2\le\lambda_{N+1}^{-1}$. The set $C_N:=\{(z_1,\ldots,z_N)\in\mathbb K^N:\sum_{j\le N}\lambda_j|z_j|^2\le1\}$ is closed and bounded in $\mathbb R^N$ (if $\mathbb K=\mathbb R$) or $\mathbb R^{2N}$ (if $\mathbb K=\mathbb C$), so it is compact by Heine--Borel and has a finite $\varepsilon/2$-net with centers in $C_N$. Each center $z$ lifts by zero padding to $\widetilde z=(z_1,\ldots,z_N,0,\ldots)\in J(B_V)$, because its weighted energy is at most one. For $x=Ju\in J(B_V)$, the prefix $(x_1,\ldots,x_N)$ belongs to $C_N$; the net and the tail bound therefore give $\|x-\widetilde z\|_{\ell^2}<\varepsilon$ for one of these finitely many lifts. Thus $J(B_V)$ is totally bounded with centers in itself. Its closure $C:=\overline{J(B_V)}$ is also totally bounded: a finite $\varepsilon/2$-net for $J(B_V)$ is an $\varepsilon$-net for $C$ by the triangle inequality and the definition of closure. The set $C$ is complete because it is closed in the complete Hilbert space $H$: every Cauchy sequence in $C$ converges in $H$, and closedness keeps its limit in $C$. By [F4], $C$ is compact. The unit-ball criterion in [[def-compact-linear-operator]] now shows that $J$ is compact. [F4, F1, given, algebra]

1.3 Each coordinate vector $e_j$ satisfies $a(e_j,v)=\lambda_j(Je_j,Jv)_H$. For any nonzero $u\in V$, $\frac{a(u,u)}{\|Ju\|_H^2} =\frac{\sum_j\lambda_j|u_j|^2}{\sum_j|u_j|^2}\ge1,$ with equality exactly when $u_j=0$ for all $j\ge3$. Therefore the first eigenvalue is $1$, its full eigenspace is $E$, and the next eigenvalue is $3$. [F1, step 1.2, given, algebra]

2.1 The restriction of the continuous form to $V_h=E$ is the identity form, so both Ritz values are $1$ and the full cluster eigenspace is $E_h=E$. For every $u\in E$, $u\in V_h$, so the definition [F2] gives $\delta_a(E,V_h)=0$; likewise the gap from $E$ to $E_h$ is zero. The cluster theorem [F3] therefore applies with $r=1,s=2$ and its gap conclusion is attained exactly. [F2, F3, step 1.3, given]

3.1 For each $h$, choose $u_h=e_1$ when $h$ is an even positive integer and $u_h=e_2$ when $h$ is odd. Both are unit Ritz eigenvectors for the same repeated eigenvalue $1$. Their successive energy distances are $\|e_1-e_2\|_a=\sqrt2$, so $(u_h)$ is not Cauchy and cannot converge. This does not contradict step 2.1: the invariant subspace remains exactly $E$, while the repeated eigenspace supplies no preferred basis vector. [step 2.1, given, algebra] ∎

## Remarks

The trial spaces in this abstract illustration are constant and are not a
mesh-refinement family. It isolates the multiplicity issue: a subspace gap
can be zero even when an arbitrary sequence of eigenvector choices has no
limit.
