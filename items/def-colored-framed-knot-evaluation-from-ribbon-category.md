---
id: def-colored-framed-knot-evaluation-from-ribbon-category
kind: definition
title: "Colored framed-link evaluation from a ribbon category"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - lem-multicolored-ribbon-coupon-evaluation
  - def-rigid-object-and-rigid-monoidal-category
  - def-braiding
  - def-twist-and-ribbon-structure
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Uses countable choice only through the cited construction of the framed ribbon-tangle evaluator."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, Theorem 2.5 and §§3–4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §§8.9–8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Assume the Axiom of Countable Choice. Let $\mathcal C$ be a ribbon category with chosen left duals and tensor unit $\mathbf 1$. A **finite oriented framed link colored in $\mathcal C$** is a finite disjoint union $L$ of oriented smoothly embedded circles in $S^3$, a homotopy class of nowhere-zero normal vector field on each component, and an assignment of an object of $\mathcal C$ to each component. A framed colored isotopy carries orientations, framings, and component colors. If $F_{\mathcal C}$ is the ribbon-tangle evaluation functor, define
$$\operatorname{RT}_{\mathcal C}(L):=F_{\mathcal C}(L)\in\operatorname{End}_{\mathcal C}(\mathbf 1).$$
This value depends only on the framed colored isotopy class. It is not automatically a field scalar; if $\mathcal C$ is $k$-linear and $\operatorname{End}_{\mathcal C}(\mathbf 1)=k$, it is a scalar in $k$. The empty link is assigned $1_{\mathbf 1}$.

## Definition references

[[lem-multicolored-ribbon-coupon-evaluation|Multicolored framed-tangle evaluation lemma]]

[[def-rigid-object-and-rigid-monoidal-category|Rigid category and duality data]]

[[def-braiding|Braiding definition]]

[[def-twist-and-ribbon-structure|Ribbon twist definition]]

[[def-countable-choice|Countable-choice axiom]]

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, Theorem 2.5 and §§3–4](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The ribbon category, its chosen left duals, a finite oriented framed link, and an object color on every component.

[F1] For arbitrary component colors, the ribbon evaluation assigns a morphism to each colored framed tangle, is invariant under framed graph isotopy, and preserves the empty graph ([[lem-multicolored-ribbon-coupon-evaluation]]).

[A1] Countable choice means every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Definition and [A1].

1.1 Under [A1], the evaluator in [F1] exists. The colored framed link is a ribbon graph with no boundary endpoints, so it assigns a morphism from the tensor unit to itself. This is an element of $\operatorname{End}_{\mathcal C}(\mathbf 1)$, with no field-valued conclusion unless that endomorphism ring has been identified with a field. [F1, A1, given]

2.1 If two representatives are framed colored isotopic, [F1] gives equal evaluator morphisms; the empty graph has value $1_{\mathbf 1}$ by the same fact. Therefore the displayed assignment is well-defined on framed colored isotopy classes and has the stated empty-link value. [F1, A1, step 1.1, given] ∎
