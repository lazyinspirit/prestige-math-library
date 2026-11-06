---
id: lem-type-iib-local-variation-test
kind: lemma
title: Localized Ten Dimensional Variations Detect Their Coefficients
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-smooth-manifold
- def-smooth-tensor-field
- def-multidimensional-darboux-integral
- thm-continuous-on-a-rectangle-is-riemann-integrable
- lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
    url: https://arxiv.org/pdf/gr-qc/9712019v1
    locator: §4, equations (4.66)–(4.68), PDF p. 124; the local bump-test argument is stated and proved here in dimension
      ten.
aliases: []
---

## Statement

Let $U\subset\mathbb R^{10}$ be open, let $W$ be a finite-dimensional real coordinate vector space, let $w:U\to(0,\infty)$ be continuous, and let $A:U\to W$ be continuous. A dual-coordinate test field is a smooth map $Q:U\to W^*$, where $W^*$ is the linear dual, with compact support $\operatorname{supp}Q:=\overline{\{x\in U:Q(x)\ne0\}}\subset U$. For each such $Q$, put $h_Q(x)=w(x)\langle A(x),Q(x)\rangle$ on $U$ using the canonical pairing $W\times W^*\to\mathbb R$, and extend $h_Q$ by zero to $\widetilde h_Q$ on $\mathbb R^{10}$. Since $\operatorname{supp}Q$ is a compact subset of $U$, $\widetilde h_Q$ is continuous with compact support. Define $\int_U h_Q\,d^{10}x$ to be the Darboux integral of $\widetilde h_Q$ over any closed nondegenerate coordinate rectangle whose interior contains its support; the value is independent of the chosen rectangle, since a common larger rectangle can be subdivided along their faces and $\widetilde h_Q=0$ on the added subrectangles. If

$\int_U w(x)\,\langle A(x),Q(x)\rangle\,d^{10}x=0$

for every smooth compactly supported test field $Q$ of the dual coordinate type, where $\langle\ ,\ \rangle$ is a nondegenerate finite-dimensional coordinate pairing, then $A=0$ on $U$. This applies to scalar, covector, form, and symmetric covariant two-tensor coefficients in local Euler–Lagrange variations.

## Statement references

[[def-smooth-manifold]]

[[def-smooth-tensor-field]]

[[def-multidimensional-darboux-integral]]

[[lem-smooth-bump-between-concentric-euclidean-balls]]

## Facts & Assumptions

**Given:** The open set $U$, positive continuous weight $w$, continuous finite-component field $A$, nondegenerate pairing, and integral orthogonality in the Statement.

[F1] [[lem-smooth-bump-between-concentric-euclidean-balls]]: inside any coordinate ball there is a smooth nonnegative bump equal to one on a smaller closed ball and supported in the larger ball.

[F2] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] and [[def-multidimensional-darboux-integral]]: a continuous function on any closed nondegenerate rectangle is Darboux integrable, and its integral is the common lower and upper Darboux integral. Positivity on a nondegenerate subrectangle is proved directly by a lower Darboux sum in step 2.1.

## Proof

1.1 Suppose $A(p)\ne0$. Nondegeneracy of the pairing gives a constant coordinate test vector $q$ with $\langle A(p),q\rangle\ne0$. Replace $q$ by $-q$ if needed, so this contraction is positive. Continuity of $A$ and $w>0$ gives a closed nondegenerate coordinate ball $K$ around $p$ on which $\langle A(x),q\rangle w(x)\ge c>0$. [given, F2, algebra]

2.1 Choose a smaller closed ball $K_0$ in the interior of $K$, and by [F1] take a smooth bump $\rho\ge0$ equal to one on $K_0$ and supported in the interior of $K$. Choose a closed nondegenerate coordinate rectangle $R_0\subset K_0$, with side lengths $b_j-a_j>0$. The test field $Q=\rho q$ is smooth and compactly supported. Its zero-extended integrand $\widetilde h_Q$ is nonnegative everywhere and at least $c$ on $R_0$. Take a grid partition of a containing rectangle that has every face of $R_0$ among its grid planes. The lower Darboux sum then satisfies $L(\widetilde h_Q,P)\ge c\prod_{j=1}^{10}(b_j-a_j)>0$, so its Darboux integral is positive. This contradicts the hypothesis. Hence $A(p)=0$ at every point. The proof uses only the chosen finite-dimensional pairing and therefore applies to each listed tensor type. [given, F1, F2, step 1.1, algebra] ∎
