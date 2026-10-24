---
id: def-knot-bridge-position-and-unknotting-number
kind: definition
title: Bridge number and unknotting number of an oriented knot
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - def-knot-connected-sum-and-prime-knot
  - def-countable-choice
  - lem-knot-admits-morse-height-representative
  - thm-every-knot-has-unknotting-sequence
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "§2.11, printed pp. 23–24, for bridge presentations; §16.9, printed p. 339, for the standard height"
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, printed pp. 21–25, for the unknotting number and descending diagrams"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice. Identify the oriented $S^3$ with the unit sphere in $\mathbb R^4$ by an orientation-preserving diffeomorphism and fix the standard height $h(x_1,x_2,x_3,x_4)=x_4$. Its only critical points are the two poles, and each regular level is a 2-sphere. A **Morse representative** of a smooth oriented knot $K$ is a knot ambient isotopic to $K$ on which $h$ has only nondegenerate critical points. Define the **bridge number** $b(K)$ as the minimum number of local maxima of $h$ on a Morse representative of $K$. The standard unknot is the oriented unit circle in a fixed coordinate 2-plane of $S^3$.

A **regular oriented diagram** is a projection of a smooth oriented knot with finitely many transverse double points, no other multiple points, and an over/under choice at each double point. A **crossing change** switches which branch is over at one chosen double point and leaves the projection and strand orientations unchanged. Define the **unknotting number** $u(K)$ as the minimum number of crossing changes needed to turn some regular diagram of a representative of $K$ into a diagram of the standard unknot. Both minima are taken in subsets of $\mathbb N$. The Morse-representative set is nonempty by the first well-definedness result below; under countable choice the regular-diagram existence result and the descending-diagram theorem below make the unknotting set nonempty. The bridge-number definition and the least-element argument in $\mathbb N$ require no choice; countable choice is used only to invoke the stated regular-projection supplier for $u(K)$.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and ambient isotopy in the standard oriented three-sphere]]

[[def-regular-oriented-link-diagram|Finite transverse double points with strand orientations and over/under data]]

[[def-knot-connected-sum-and-prime-knot|The standard unknot convention]]

[[def-countable-choice|The countable-choice axiom used for regular diagram existence]]
