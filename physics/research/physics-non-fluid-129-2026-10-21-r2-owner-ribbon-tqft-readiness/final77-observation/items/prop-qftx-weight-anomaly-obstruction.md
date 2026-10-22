---
id: prop-qftx-weight-anomaly-obstruction
kind: proposition
title: "A nontrivial weight anomaly obstructs forgetting the weights"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or physical claim."
dependency_level: 1
deps:
  - def-qftx-weighted-topological-model
  - thm-weighted-rt-tqft-and-factorization
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-qftx-weighted-topological-model: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kevin Walker, On Witten's 3-manifold Invariants"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/walker3.pdf"
      locator: "Introduction pp. 2–4, §7 Theorem 7.9, and §18: framing extension and the signature correction."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.15–8.16, printed pp. 229–232: Gauss sums and the central-charge scalar in the modular-group action."
verification:
  precheck: pending
---

## Statement

Assume full AC and its inherited countable-choice consequences, and fix a weighted RT bordism $M$ with all its boundary data, ribbon graph, object Lagrangians, and coupons held fixed. If its integer weight is $n$, then $Z(M,n+1)=\kappa Z(M,n)$. If $\kappa\ne1$ and $Z(M,n)$ is a nonzero linear map, the weighted RT assignment cannot factor through the operation that forgets integer weights while keeping the same maps. This obstruction concerns ordinary forgetting of the weight; an anomaly-canceling enlargement or a different normalization requires separate data and is not asserted here.

## Statement references

[[def-qftx-weighted-topological-model]]

[[thm-weighted-rt-tqft-and-factorization]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, its weighted RT model, a fixed underlying colored bordism with weight $n\in\mathbb Z$, and the conditional assumption $Z(M,n)\ne0$.

[A1] Full AC is adopted and countable choice is retained as an inherited consequence of the weighted RT construction ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] [[def-qftx-weighted-topological-model]] fixes $\kappa=p_+/D$ and the exact weighted RT map $Z(M,n)$ for the same underlying bordism data.

[F2] [[thm-weighted-rt-tqft-and-factorization]] states that a unit increase of integer weight multiplies the map by $\kappa$; all other bordism, Lagrangian, boundary, and coupon data remain fixed in this comparison.

## Proof

1.1 In the formula of [F2], increasing $n$ to $n+1$ leaves the Maslov correction, surgery signature, colored graph operator, boundary data, and cap normalization unchanged, and replaces the factor $\kappa^n$ by $\kappa^{n+1}$. Hence $Z(M,n+1)=\kappa Z(M,n)$. [A1, F1, F2, given, algebra]

2.1 Suppose the assignment factored as $Z=\overline Z\circ U$ through the forgetful operation $U$ on weighted bordisms. Since $U(M,n+1)=U(M,n)$, factorization would give $Z(M,n+1)=Z(M,n)$. With step 1.1 this yields $(\kappa-1)Z(M,n)=0$. A nonzero vector in the complex vector space of linear maps cannot be annihilated by a nonzero scalar, so $\kappa=1$, contradicting $\kappa\ne1$. Therefore no such factorization exists under the stated nonzero-map condition. [F1, F2, step 1.1, algebra] ∎
