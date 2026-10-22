---
id: def-q-fold-branched-cover-of-a-slice-disk
kind: definition
title: Cyclic branched cover of a smooth proper disk
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-smooth-slice-disk-exterior
  - lem-slice-disk-exterior-has-homology-of-a-circle
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp.190–194, covering-space/slice-disk-exterior setup and Theorem2 proof; baseline for the local smooth disk-exterior and meridional cover conventions. The detailed coordinate, collar and covering formulations here are local definitions, not verbatim assertions attributed to the source.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Assume AC. Let $K\subset S^3$ be a smooth oriented knot bounding a smooth proper disk $D\subset B^4$, and let $q\ge2$. Write $X_D$ for the compact disk exterior and let the positive meridian induce $\pi_1(X_D)\to H_1(X_D;\mathbb Z)\cong\mathbb Z\to\mathbb Z/q$. Let $X_{D,q}$ be the connected cover classified by the kernel of this map. Attach $D^2\times D^2$ to $X_{D,q}$ along the connected cover of $D^2\times S^1$ using the normal-disk map $z\mapsto z^q$. The resulting compact oriented $4$-manifold $W_{D,q}$ is the $q$-fold cyclic cover of $B^4$ branched along $D$; its boundary is $\Sigma_q(K)$, and the local branched model is $(x,z)\mapsto(x,z^q)$.

## Definition references

[[def-cyclic-branched-cover-of-a-knot|The positive-meridian cyclic branched cover of the boundary knot]]

[[def-smooth-slice-disk-exterior|The disk exterior and meridian]]

[[lem-slice-disk-exterior-has-homology-of-a-circle|The meridian induces the epimorphism to the infinite cyclic group]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.8, pp. 142–145](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]
