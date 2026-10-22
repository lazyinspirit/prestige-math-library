---
id: lem-casson-gordon-bordism-admissibility
kind: lemma
title: Prime-power characters admit a multiple bounding bordism
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - def-cyclic-zero-surgery-cover
  - def-finite-order-character-of-a-branched-cover
  - def-torsion-linking-form-and-casson-gordon-bordism
  - lem-zero-surgery-cyclic-cover-homology-splitting
  - def-oriented-bordism-group-of-a-space
  - lem-oriented-bordism-classes-over-a-space-form-an-abelian-group
  - thm-casson-gordon-third-bordism-group-finite
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 8, §8.1, pp. 164–166, and §8.4, pp. 169–171; complete sections read, but the group calculation is deferred to a spectral-sequence reference
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed p. 189; finite Ω3(C_m × C∞) bordism is invoked without its proof
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. Let $K$ be a smooth oriented knot, let $q$ be a prime power, and let $\chi:H_1(\Sigma_q(K);\mathbb Z)\to\mathbb Q/\mathbb Z$ have prime-power order $d$. Under the standard splitting $H_1(M_{0,q};\mathbb Z)\cong H_1(\Sigma_q(K);\mathbb Z)\oplus\mathbb Z\langle\widetilde\mu\rangle$, the character extends to $\eta:H_1(M_{0,q};\mathbb Z)\to\mathbb Z/d\oplus\mathbb Z$ by identifying its cyclic image with $\mathbb Z/d$ and using the free-summand projection in the second factor. Some positive multiple of $(M_{0,q},\eta)$ bounds a compact oriented $4$-manifold with an extending map to $K(\mathbb Z/d\oplus\mathbb Z,1)$.

## Statement references

[[def-torsion-linking-form-and-casson-gordon-bordism|The Casson–Gordon character and bordism conventions]]

[[def-cyclic-zero-surgery-cover|The cyclic zero-surgery cover]]

[[def-finite-order-character-of-a-branched-cover|Finite-order characters]]

[[lem-zero-surgery-cyclic-cover-homology-splitting|The zero-surgery cover homology splitting]]

[[def-oriented-bordism-group-of-a-space|Oriented bordism groups of maps]]

[[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group|The bordism group operation]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.1, pp. 164–166](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** AC, the smooth oriented knot, its prime-power cover and character, and the marked splitting in the Statement.

[F1] The actual integral splitting is $H_1(M_{0,q})=H_1(\Sigma_q(K))\oplus\mathbb Z[\widetilde\mu]$, with free coordinate one on the closed lift of $\mu^q$. [[lem-zero-surgery-cyclic-cover-homology-splitting]]

[F2] The geometric smooth third bordism group of the specified $K(C_d\times\mathbb Z,1)$ is finite. Its proof supplies the full prime-power calculation. [[thm-casson-gordon-third-bordism-group-finite]]

[F3] A zero geometric bordism class means an actual compact smooth oriented filling with its extending map; disjoint union is the group operation. [[def-oriented-bordism-group-of-a-space]], [[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group]] Finite smooth CW presentations exist under AC. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[A1] Full AC is the convention of this item. [[def-axiom-of-choice]]

## Proof

1.1 On [F1]'s branched-cover summand send a class to its character value, identifying its cyclic image with $C_d$; send $\widetilde\mu$ to zero in that factor. In the other factor use the integral free projection. This is the stated homomorphism $\eta$ on actual integral homology and hence on the fundamental group. It is represented by a continuous map to the specified $K(G,1)$: on a finite CW presentation send each one-cell to a loop with the assigned group image, fill each two-cell because its relation has trivial image, and extend over higher cells because the target's higher homotopy groups vanish. The extensions agree on cell boundaries; their finite pasting is continuous. AC permits these finite choices, and changing them alters the map only within its homotopy class by the same cell-by-cell argument. [A1, F1, F3, given, construct]

2.1 Its geometric class belongs to [F2]'s finite group. Some positive integer $r$ kills that element (indeed the explicit calculation permits $r=d$). By [F3], zero means that the disjoint union of those $r$ actual marked copies bounds a compact smooth oriented four-manifold with a map to $K(G,1)$ restricting to their maps. This is exactly the required bordism datum, with the positive orientations and both prescribed character coordinates unchanged. [F2, F3, step 1.1, construct, algebra] ∎