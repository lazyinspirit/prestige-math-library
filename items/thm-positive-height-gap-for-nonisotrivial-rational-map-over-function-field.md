---
id: thm-positive-height-gap-for-nonisotrivial-rational-map-over-function-field
kind: theorem
title: Baker positive small-height finiteness for a map not isotrivial after finite extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-dynamical-canonical-height-over-function-field
  - thm-function-field-dynamical-height-growth-and-functional-equation
  - def-isotrivial-rational-map-over-function-field
  - thm-isotriviality-iff-potential-good-reduction
  - def-good-and-potential-good-reduction-rational-map
  - lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed
  - lem-potential-good-reduction-valued-extension-and-completion-descent
  - thm-genuinely-bad-reduction-has-strictly-positive-berkovich-green-diagonal
  - lem-positive-berkovich-green-diagonal-gives-finite-local-covers
  - lem-local-dynamical-green-conjugacy-and-good-reduction
  - lem-finite-local-green-covers-imply-small-height-finiteness
  - def-one-variable-function-field-with-constant-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem 1.6 and §2"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a
rational self-map of degree $d\ge2$ that is non-isotrivial after every finite
extension of $K$, and let $\widehat h_{\phi,K}$ be its canonical height.
There exists $\epsilon>0$ such that the set
$$\{P\in\mathbb P^1(K):\widehat h_{\phi,K}(P)\le\epsilon\}$$
is finite.

## Statement references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[def-rational-map-on-projective-line-degree]]

[[def-isotrivial-rational-map-over-function-field]]

[[def-dynamical-canonical-height-over-function-field]]


## Facts & Assumptions

**Given:** The Axiom of Choice, the one-variable function-field datum, the degree-$d$ map non-isotrivial after every finite extension, and its canonical height, as in the Statement.

[F1] A map is isotrivial after finite extension if and only if it has potentially good reduction over every completed place. ([[thm-isotriviality-iff-potential-good-reduction]])

[F2] Every completed place has a complete algebraically closed valued extension obtained by completing its algebraic closure. Potential good reduction over that completed place is equivalent to a good conjugacy in this extension. ([[lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed]], [[lem-potential-good-reduction-valued-extension-and-completion-descent]])

[F3] A map with genuinely bad reduction over a complete algebraically closed nontrivially nonarchimedean field has strictly positive Green diagonal everywhere; compactness then supplies a finite open cover of its classical projective line with a strictly positive lower bound for pairs in a common member. ([[thm-genuinely-bad-reduction-has-strictly-positive-berkovich-green-diagonal]], [[lem-positive-berkovich-green-diagonal-gives-finite-local-covers]])

[F4] Local Green kernels are unchanged on extending an absolute value, and are nonnegative on distinct pairs wherever the map has potentially good reduction. Good reduction of a homogeneous lift means integral coefficients and unit resultant. ([[lem-local-dynamical-green-conjugacy-and-good-reduction]], [[def-good-and-potential-good-reduction-rational-map]])

[F5] If finitely many nonempty places have positive finite local Green covers and all remaining local kernels are nonnegative, the $K$-rational points of canonical height at most one quarter of the sum of the positive cover bounds form a finite set. ([[lem-finite-local-green-covers-imply-small-height-finiteness]])

[F6] Every nonzero coefficient or resultant has nonunit absolute value at only finitely many places. ([[def-one-variable-function-field-with-constant-field]])

[A1] Full Choice is used through the function-field, closure, Berkovich and probability-measure suppliers; the final finite-signature argument requires no further choice. ([[def-axiom-of-choice]])

## Proof

1.1 Choose a homogeneous lift $F$ of $\phi$ with nonzero resultant. Outside the finite union of the supports of its nonzero coefficients and its resultant, all coefficients are integral and the resultant is a unit by [F6], so the map has good reduction by [F4]. Therefore the set $S$ of places where $\phi$ has genuinely bad reduction over the completion is finite. It is nonempty by [F1], since $\phi$ is not isotrivial after any finite extension. At every place outside $S$, the map has potentially good reduction. [F1, F4, F6, given, algebra]

1.2 For each $v\in S$, form $C_v$, the completion of an algebraic closure of $K_v$, by [F2]. The map has no good conjugacy over $C_v$, again by [F2]; since $C_v$ is algebraically closed, this is genuinely bad reduction there. Its absolute value is nontrivial because the original place is nontrivial. By [F3] there are $\beta_v>0$ and finitely many open subsets of $\mathbb P^1(C_v)$ covering it, with $g_{\phi,v}>\beta_v$ on each common-member pair. Restrict these sets to the embedded $\mathbb P^1(K)$; [F4] preserves their kernel values and they give the required finite covers of the rational points. [F2, F3, F4, A1, step 1.1, construct]

2.1 At all places outside $S$, [F4] gives nonnegative Green kernels on distinct $K$-points. Put $B=\sum_{v\in S}\beta_v>0$ and $\epsilon=B/4$. The finitely many covers of step1.2 and [F5] imply that the set of $K$-points with canonical height at most $\epsilon$ is finite. This is exactly the unchanged Statement. [F4, F5, step 1.1, step 1.2, algebra] ∎
