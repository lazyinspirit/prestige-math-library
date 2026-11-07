---
dependency_level: 5
id: thm-polymath8b-enlarged-simplex-m50-bound
kind: theorem
title: "Polymath8b’s enlarged-simplex bound M_{50,1/25} > 4.0043"
status: draft
origin: pipeline
deps: [def-polymath8b-enlarged-simplex-variational-quantity, def-countable-choice, lem-explicit-rational-degree27-enlarged-fifty-variable-witness, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice, inherited from the full enlarged-simplex definition; no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Statement

For the enlarged-simplex variational quantity $M_{k,\epsilon}$ with the square-integrable test-function class and support $(1+\epsilon)R_k$, one has $M_{50,1/25}>4.0043$.


## Statement references

[[def-polymath8b-enlarged-simplex-variational-quantity|Enlarged-simplex functionals]]


## Facts & Assumptions

**Given:** The enlarged-simplex definition and its Countable Choice branch.

[F1] [[def-polymath8b-enlarged-simplex-variational-quantity]] defines the nonzero real square-integrable class, marginal and supremum.

[F2] [[lem-explicit-rational-degree27-enlarged-fifty-variable-witness]] gives a bounded symmetric polynomial zero extension with proper Riemann integrals $I>0$ and $500000J>40043I$, at $A=26/25$, $B=24/25$.

[F3] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] identifies bounded Borel proper Riemann integrals on boxes with their Lebesgue integrals under the stated branch.

[A1] Work under [[def-countable-choice]], exactly as in [F1].

## Proof

1.1 Take the explicit function in [F2]. Its polynomial zero extension is Borel measurable, bounded and compactly supported in $(26/25)R_{50}$. By [F3] its square integral is the same positive finite $I$ in the Lebesgue definition, so its equivalence class belongs to $\mathcal G_{50,1/25}$. Every section and its polynomial marginal in [F2] is integrable; [F3] identifies the truncated marginal-square integrals too. Thus each of the fifty $J_{50,i,24/25}$ equals the same $J$, by symmetry. The marginal class in [F1] is represented by these actual section integrals. [F1, F2, F3, A1, algebra]

2.1 Divide the exact positive excess $500000J-40043I>0$ by $10000I>0$. This gives $50J/I>40043/10000=4.0043$. No numerical approximation or external computation is used. [F2, step 1.1, algebra]

3.1 The supremum defining $M_{50,1/25}$ is at least the ratio of this member. Hence $M_{50,1/25}\ge50J/I>4.0043$, as claimed with the full original square-integrable class and original support. [F1, step 1.1, step 2.1, algebra] ∎

## Source notes

The former missing finite polynomial certificate is now supplied by the fully written local exact rational witness; the original Statement and Countable Choice definition scope are unchanged. This does not rely on the weaker1295row witness or modify its H246 consumer.
