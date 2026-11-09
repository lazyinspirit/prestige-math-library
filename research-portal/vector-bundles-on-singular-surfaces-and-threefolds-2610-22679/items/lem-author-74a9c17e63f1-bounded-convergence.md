---
id: lem-author-74a9c17e63f1-bounded-convergence
kind: lemma
title: Stage bounds imply completeness and finite multiplicative convergence
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - prop-tower-exact-couple-interface
  - def-stable-spectra-interface
  - thm-author-74a9c17e63f1-stage-bound-input
  - lem-author-74a9c17e63f1-page-product-transport
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  thm-author-74a9c17e63f1-stage-bound-input: mathematical-premise
  lem-author-74a9c17e63f1-page-product-transport: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 17
---

## Statement
Assume the Axiom of Choice. If $X$ has finite valuative dimension, the actual motivic filtration is complete and the preceding multiplicative spectral sequence converges with
$$E_\infty^{a,b}\simeq F^{-b}_{\mathrm{mot}}K_{-a-b}(X)/F^{-b+1}_{\mathrm{mot}}K_{-a-b}(X).$$
Each $K_n(X)$ has its finite image filtration in this assertion; no splitting of that filtration is claimed.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [[lem-author-74a9c17e63f1-page-product-transport]]. They discharge that supplier’s local-realization premise at its first application below. [[math:def-axiom-of-choice]]

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with a qcqs scheme $X$ over the standing field with finite valuative dimension, and the actual tower.

**Goal:** Check the stagewise hypotheses for convergence and the zero-limit assertion.

[F1] [[thm-author-74a9c17e63f1-stage-bound-input]] supplies $B\geq0$ with $F^rK(X)\in\mathrm{Sp}_{\geq r-B}$. [[def-motivic-filtration]] identifies every stage $r\leq0$ and its augmentation with $K$.

[F2] [[prop-tower-exact-couple-interface]] gives finite convergence from actual high-stage vanishing and low-stage isomorphisms. [[def-stable-spectra-interface]] supplies stable limits; [[lem-author-74a9c17e63f1-page-product-transport]] identifies the source products and their abutment maps.

## Proof
1.1 Use the supplied realization under [A1]. Regard $X$ as a scheme over the prime field of its standing field, so the stage-bound supplier in [F1] applies to this actual restricted tower. Choose its integer $B=B(X)\geq0$. Its contract covers every qcqs scheme of finite valuative dimension, including the empty scheme. Use that bound uniformly: for any fixed integer $n$, set $U_n=\max(1,B+n+1)$ and $L_n=0$. If $r\geq U_n$ then $n<r-B$, so $\pi_nF^r=0$. If $r\leq L_n$, the map to $K$ is an equivalence by [F1]. These are precisely the high/low hypotheses of [F2], including actual vanishing of stage groups rather than only their images. The resulting additive convergence and displayed associated-graded identification are therefore those of [F2]. [A1, F1, F2, construct]

2.1 Completeness also follows from the stage bound. The sequential limit of spectra is the fiber of $1-\mathrm{shift}:\prod_{r\geq0}F^r\to\prod_{r\geq0}F^r$. For any fixed degree $n$, the groups $\pi_nF^r$ and $\pi_{n+1}F^r$ are zero for sufficiently large $r$ by step 1.1. On their finite-support products $1-\mathrm{shift}$ is an isomorphism, with inverse the finite geometric sum of the nilpotent shift. The fiber long exact sequence thus gives $\pi_n\lim_rF^r=0$ for every $n$, hence the limit spectrum is zero. Restricting to stages $r\geq0$ is cofinal for this tower limit. [F1, F2, step 1.1]

3.1 The image filtration on each $K_n$ is full for $r\leq0$ and zero for $r\geq U_n$, so it is finite. The product identification in [F2] makes the convergence in step 1.1 multiplicative with exactly this finite filtered abutment. This proves all claims. [F1, F2, step 1.1, step 2.1] ∎
