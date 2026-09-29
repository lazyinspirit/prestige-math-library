---
id: thm-james-submodule-theorem-in-characteristic-zero
kind: theorem
title: James's submodule theorem over the complex numbers
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-invariant-inner-product-on-a-tabloid-module
  - lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional
  - lem-polytabloid-covariance-and-column-sign
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-orthogonality-and-orthogonal-complement
  - def-subrepresentation-and-irreducible-representation
  - def-young-subgroup-tabloid-and-permutation-module
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Chapter 9, Definition 9.1, Remark 9.2, Lemma 9.3 and proof, and Theorem 9.4 and proof, printed pp. 31-32; the local product is Hermitian"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For every $n\ge0$, partition $\lambda\vdash n$, and $S_n$-submodule
$U\subseteq M^\lambda$, either
$$S^\lambda\subseteq U\qquad\text{or}\qquad U\subseteq(S^\lambda)^\perp,$$
where orthogonality is for the invariant positive definite Hermitian tabloid
product.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, and an $S_n$-submodule
$U\subseteq M^\lambda$.

[F1] The tabloids form a basis of $M^\lambda$, and the $S_n$-action extends
linearly from the tabloid action
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] An $S_n$-submodule is a linear subspace stable under each element of
$S_n$ ([[def-subrepresentation-and-irreducible-representation]]).

[F3] The column antisymmetrizer, polytabloid, and Specht space are
$$
\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma,\qquad e_t=\kappa_t\cdot\{t\},\qquad S^\lambda=\operatorname{span}_{\mathbb C}\{e_s:s\text{ is a }\lambda\text{-tableau}\}
$$
for each $\lambda$-tableau $t$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] For every $t$, $\kappa_tM^\lambda=\mathbb C e_t$ and $e_t\ne0$
([[lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional]]).

[F5] The Specht space is generated as an $S_n$-module by any one polytabloid
$e_t$ ([[lem-polytabloid-covariance-and-column-sign]]).

[F6] The tabloid product is conjugate-linear in its first argument and linear
in its second ([[def-invariant-inner-product-on-a-tabloid-module]]).

[F7] Each $\kappa_t$ is self-adjoint for the tabloid product
([[def-invariant-inner-product-on-a-tabloid-module]]).

[F8] This Hermitian product is positive definite: if $x\ne0$, then
$\langle x,x\rangle>0$
([[def-invariant-inner-product-on-a-tabloid-module]]).

[F9] The orthogonal complement is
$(S^\lambda)^\perp=\{v:\langle v,s\rangle=0\text{ for every }s\in S^\lambda\}$
([[def-orthogonality-and-orthogonal-complement]]).

[F10] Every shape has a canonical standard row-filled tableau $t_0$; for
$n=0$ it is the empty tableau
([[def-young-subgroup-tabloid-and-permutation-module]]).

No form of the Axiom of Choice is used. The first branch uses only witnesses
to one existential statement, and all group-algebra sums are finite.

## Proof

**Proof technique:** direct.

1.1 If $\kappa_tu\ne0$ for some $u\in U$ and $\lambda$-tableau $t$, then [F4] gives $\kappa_tu=c e_t$ with $c\ne0$; by [F1]-[F3] the finite group-algebra sum $\kappa_tu$ lies in $U$, so division gives $e_t\in U$. [given, F1, F2, F3, F4]

1.2 Otherwise $\kappa_tu=0$ for every $u\in U$ and every $t$; self-adjointness in [F7] and $e_t=\kappa_t\cdot\{t\}$ from [F3] give $\langle u,e_t\rangle=\langle u,\kappa_t\cdot\{t\}\rangle=\langle\kappa_tu,\{t\}\rangle=0$. [given, F3, F7]

2.1 By [F5], the polytabloid from step 1.1 generates $S^\lambda$ under $S_n$; stability of $U$ from [F2] and step 1.1 therefore give $S^\lambda\subseteq U$. [given, F2, F5, step 1.1]

2.2 Since the $e_t$ span $S^\lambda$ by [F3] and the product is linear in its second argument by [F6], step 1.2 gives $\langle u,s\rangle=0$ for every $u\in U$ and $s\in S^\lambda$; by [F9], $U\subseteq(S^\lambda)^\perp$. [given, F3, F6, F9, step 1.2]

3.1 The cases “some $\kappa_tu\ne0$” and “all $\kappa_tu=0$” are exhaustive; if both conclusions held, $S^\lambda\subseteq U\subseteq(S^\lambda)^\perp$, so the nonzero canonical $e_{t_0}\in S^\lambda$ from [F3], [F4], [F10] would satisfy $\langle e_{t_0},e_{t_0}\rangle=0$ by [F9], contradicting [F8]. Thus exactly one alternative holds. [given, F3, F4, F8, F9, F10, step 2.1, step 2.2] ∎
