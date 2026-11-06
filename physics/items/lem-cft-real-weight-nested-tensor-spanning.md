---
id: lem-cft-real-weight-nested-tensor-spanning
kind: lemma
title: Spanning by analytic nested universal tensor components with real weights
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 5
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-real-exponential-polynomial-uniqueness
  - thm-cft-strongly-graded-pz-dual-representation
  - lem-cft-pz-parallel-transport
  - def-cft-logarithmic-intertwining-operator
dependency_roles:
  lem-cft-real-exponential-polynomial-uniqueness: mathematical-premise
  thm-cft-strongly-graded-pz-dual-representation: mathematical-premise
  lem-cft-pz-parallel-transport: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part VIII, Proposition 12.6 and Corollary 12.7"
      url: https://arxiv.org/pdf/1110.1931v2
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let a finite binary tree of representing $P(z)$-products have strongly graded generalized-module objects with real weights and objectwise uniformly nilpotent $L(0)-L(0)_s$. Assume the binary products have the restricted-dual realization and component-spanning property of the strong dual-representation theorem. Reconstruct the universal logarithmic intertwiners with fixed endpoint logarithms. Suppose the scalar sums over all intermediate weights converge absolutely throughout an open nested sewing domain and define analytic functions there, also after arbitrary finite insertions of $L(-1)$ on the leaves. Continue these functions along one specified configuration-space path. Then, at each nonsingular continuation germ, the doubly homogeneous components of all continued nested universal-map values span the root module as a vector space. No finite-exponent-coset or discreteness hypothesis is imposed.

## Facts & Assumptions

**Given:** Exactly the actual tree, real weights, objectwise nilpotence bounds, and analytic convergence stipulated in the Statement. The lemma supplies spanning; it does not assert this convergence for an arbitrary tree without those hypotheses.

[F1] [[thm-cft-strongly-graded-pz-dual-representation]] gives binary component spanning and finite-dimensional doubly homogeneous root components.

[F2] [[lem-cft-pz-parallel-transport]] reconstructs universal intertwiners and their endpoint branches. [[def-cft-logarithmic-intertwining-operator]] supplies the derivative identity, translation bracket and weight rule.

[F3] [[lem-cft-real-exponential-polynomial-uniqueness]] proves normality and uniqueness of real-exponent series with uniformly bounded logarithmic degree, including arbitrary nondiscrete real supports.

## Proof

1.1 The mode weight rule and the objectwise nilpotence bounds express every scalar tree series, in the logarithms of its sewing coordinates, as a real-exponential series with one finite bound on each logarithmic degree. For several sewing coordinates, the normality proof of F3 applies on a product rectangle: interpolate on a finite tensor product of imaginary-translate grids to separate the log-polynomial coefficients, then dominate each exponential on a smaller rectangle by its value at one of the $2^r$ real corners of the larger rectangle. The coefficient sums at those corners are finite by the given absolute convergence. Factors $|n_1|^{k_1}\cdots|n_r|^{k_r}$ from derivatives are bounded by an exponential margin, since $\prod_j|n_j|^{k_j}e^{-\epsilon\sum_j|n_j|}$ is bounded. Thus the full scalar projection sums and all sewing derivatives are locally normally convergent. This proves the derivative manipulations used below from the actual all-index absolute convergence, rather than from an iterated grouped sum. [given, F2, F3, algebra]

2.1 If the indicated span were proper, choose a nonzero restricted functional $f$ on one finite-dimensional doubly homogeneous root component annihilating that span. For every collection of leaves its scalar coefficient therefore vanishes at the specified configuration. Absolute leaf-position derivatives are linear combinations of coefficients with $L(-1)$ inserted on leaves: at each vertex the first-input derivative differentiates its relative sewing coordinate, and the translation bracket expresses the derivative at its root as the sum of derivatives at its two children. This triangular system has unit diagonal, so induction down the tree expresses every absolute derivative as a finite linear combination of such leaf insertions. The same holds for every finite repeated derivative. They vanish at the specified configuration, since the annihilation hypothesis holds for all leaf vectors, including those inserted vectors. By step1.1 these are the actual Taylor derivatives. Taylor uniqueness makes each coefficient zero in a neighborhood. Analytic continuation back along the specified path makes it zero throughout its initial connected sewing domain, by finitely many overlapping neighborhoods and the identity theorem. [F1, F2, step 1.1, algebra]

3.1 Fix all sewing variables except one deepest variable, and fix all leaf generalized-weight components. Its formal scalar expansion is $\sum_hq^{h-c}\sum_{j=0}^Na_{h,j}(\log q)^j$, with real $h,c$ and finite $N$; its coefficients are precisely the finite intermediate-weight projections prescribed by the tree. It converges absolutely on a complex logarithm neighborhood by step1.1 and is zero there by step2.1. Apply F3 after $s=\log q$. Every coefficient $a_{h,j}$ is zero. Thus $f$ annihilates every tree coefficient in which that deepest universal map has first been projected to one finite generalized-weight component. There is no need to separate exponents by monodromy or assume finitely many exponent classes: F3 performs exactly this coefficient extraction for arbitrary real weights. [F2, F3, step 1.1, step 2.1, algebra]

4.1 By F1 the deepest map's homogeneous components span its binary product algebraically. The zero assertion of step3.1 therefore holds with that subtree replaced by an arbitrary vector of its root object. Repeat step3.1 on a deepest remaining vertex. After finitely many repetitions only the top binary product remains; F1 then says $f$ annihilates all of the original root module. This contradicts the nonzero choice of $f$. Hence the nested universal components span, as asserted. [F1, step 3.1, algebra] ∎
