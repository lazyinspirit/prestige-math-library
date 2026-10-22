---
id: thm-thurston-hyperbolic-dehn-filling
kind: theorem
title: Thurston's hyperbolic Dehn filling theorem for finitely many cusps
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - def-cusp-slope-length
  - lem-dehn-filling-deformation-and-completeness
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: William P. Thurston, The Geometry and Topology of Three-Manifolds
      url: https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf
      locator: Chapter 5, §5.8, Theorem 5.8.2 and proof, printed pp.102–104
    - title: Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations
        and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem
      url: https://arxiv.org/pdf/math/9901045
      locator: Theorem 0.1 and §§1–3; Propositions 2.9 and 3.6
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with $k\ge1$ torus cusps and a complete finite-volume hyperbolic metric. Choose an ordered peripheral basis on each cusp. For cusp $i$, let the generalized filling parameter sphere be $S_i=\mathbb R^2\cup\{\infty\}$, with $\infty$ denoting the complete cusp and primitive integral pairs modulo sign denoting ordinary slopes. There is a neighborhood $U$ of $(\infty,\ldots,\infty)$ in $\prod_{i=1}^k S_i$ such that every tuple in $U$ whose finite coordinates are primitive integral slopes determines a complete finite-volume hyperbolic metric on the corresponding ordinary Dehn filling; coordinates equal to $\infty$ remain unfilled complete cusps. Consequently, one may choose neighborhoods $U_i$ of $\infty$ with $\prod_i U_i\subseteq U$, and only finitely many primitive integral pairs at each cusp lie outside $U_i$. Thus every simultaneous filling whose slopes all lie in their respective $U_i$ is hyperbolic. Nonprimitive ray parameters may describe cone or orbifold completions but are not ordinary smooth fillings. No universal numeric length threshold or universal bound on the number of exceptional slopes is asserted.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8, Theorem 5.8.2](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** AC, the complete finite-volume metric with $k\ge1$ torus cusps and the chosen ordered peripheral bases.

[A1] AC and its countable-choice consequence are retained. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The full $k$-cusped local deformation-and-completeness theorem gives a product neighborhood of the complete generalized parameters and smooth complete finite-volume ordinary fillings for every primitive tuple therein, with the other cusps unfilled. [[lem-dehn-filling-deformation-and-completeness]]

[F2] Slopes and arbitrary supplied ordinary gluing maps have the stated primitive-pair convention. [[def-multicusped-dehn-filling]]

[F3] The input metric and volume convention are [[def-pared-hyperbolic-structures-and-volume]]. Each chosen-section cusp length is a norm on its rank-two peripheral lattice; changing section rescales it by a positive constant. [[def-cusp-slope-length]]

## Proof

1.1 Apply [F1] to the entire given $k$-cusped metric. It supplies a product neighborhood $U$ of $(\infty,\ldots,\infty)$ and the required complete finite-volume metric for every tuple with primitive finite coordinates. Coordinates $\infty$ retain their complete translation cusps, so the conclusion includes every partial filling and the unchanged complete manifold. These are the ordinary fillings of [F2], including their supplied gluing data, rather than just representations solving the peripheral equations. [A1, F1, F2, F3, given]

2.1 Choose cuspwise open neighborhoods $U_i$ of $\infty$ with $\prod_iU_i\subseteq U$; one may use the product neighborhood in [F1] itself. The complement $S_i\setminus U_i$ is a closed subset of the compact sphere $S_i$ missing $\infty$, hence a compact subset of $\mathbb R^2$ and therefore bounded. A bounded set contains only finitely many integer lattice points: if its norm is at most $B$, each coordinate is one of the finitely many integers between $-\lceil B\rceil$ and $\lceil B\rceil$. Restricting to primitive pairs and quotienting by simultaneous sign cannot increase their number. This proves the finite-exception assertion at every cusp and hence the simultaneous conclusion. [F1, F2, step 1.1, construct, algebra]

3.1 By [F3], any sequence of primitive slopes whose chosen-section lengths tend to infinity leaves every bounded coefficient set, so it eventually lies in its $U_i$. Rescaling a horotorus multiplies all these lengths by one positive constant and does not alter this conclusion. A nonprimitive ray parameter does not specify an ordinary primitive meridian; by [F2] its cone-angle convention is separate from the smooth fillings proved here. All neighborhoods are allowed to depend on the given manifold and its metric, so the proof asserts neither a universal numeric threshold nor a universal number of exceptions. [F2, F3, step 2.1, algebra] ∎
