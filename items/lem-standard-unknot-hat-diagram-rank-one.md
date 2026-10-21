---
id: lem-standard-unknot-hat-diagram-rank-one
kind: lemma
title: "The standard genus-zero hat diagram of the unknot has rank one"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §2"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.5–7; multipointed Heegaard Floer complex and hat specialization"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §3.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.13–14; the unknot's genus-zero one-pointed diagram"
---

## Statement

Let $U$ be the standard oriented unknot and take its genus-zero one-pointed Heegaard diagram: $\Sigma=S^2$, each handlebody is a three-ball, there are no $\alpha$- or $\beta$-curves, and one $w$-point and one $z$-point are joined by trivial arcs in the two balls. The associated-graded hat chain complex has one generator, zero differential, and homology of rank one over $\mathbb F_2$. This is a computation for the stated diagram; it makes no invariance claim for other diagrams.

## Statement references

[[def-admissible-pointed-heegaard-floer-data|The pointed Heegaard diagram and associated-graded hat complex]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|The oriented unknot in the standard three-sphere]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §2](https://arxiv.org/pdf/math/0607691)

[Manolescu, *An Introduction to Knot Floer Homology*, §3.5](https://web.stanford.edu/~cm5/hfk.pdf)

## Facts & Assumptions

**Given:** The genus-zero, one-pointed diagram specified in the statement.

[F1] [[def-admissible-pointed-heegaard-floer-data]] defines $\operatorname{Sym}^{m}(\Sigma)$, the product tori, and their intersection points as generators; its hat specialization sets the basepoint variable to zero.

[F2] [[def-admissible-pointed-heegaard-floer-data]] defines the differential by counts of classes of Maslov index $1$.

## Proof

1.1 Here $h=0$ and $k=1$, so $m=h+k-1=0$. The empty products of $\alpha$- and $\beta$-curves both map to the unique point of $\operatorname{Sym}^{0}(S^2)$, which is a singleton. By [F1], this intersection is the entire generator set, so the chain group has dimension one. [F1, given, construct]

2.1 Every map into a singleton is constant, so there is only the constant class in $\pi_2(\mathbf x,\mathbf x)$. Its pullback tangent bundle is zero-dimensional; hence the linearized Cauchy–Riemann operator has zero kernel and cokernel and Maslov index $0$. Thus there is no class of Maslov index $1$ to contribute under [F2]. The differential is zero, and the homology equals the one-dimensional chain group. [F1, F2, step 1.1, algebra] ∎
