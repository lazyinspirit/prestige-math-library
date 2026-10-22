---
id: def-torsion-linking-form-and-casson-gordon-bordism
kind: definition
title: Torsion linking form and Casson–Gordon bordism data
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-finite-linking-form-and-metabolizer
  - def-finite-order-character-of-a-branched-cover
  - lem-linking-pairing-on-rational-homology-sphere-is-nonsingular
  - lem-zero-surgery-cyclic-cover-homology-splitting
  - def-oriented-bordism-group-of-a-space
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 7, §7.6, pp. 140–141; Chapter 8, §8.1, pp. 164–166; complete relevant sections read
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Assume AC. Let $K$ be a smooth oriented knot, $q\ge2$, and $M=\Sigma_q(K)$ oriented as the boundary of the positive-meridian branched cover. When $H_1(M;\mathbb Z)$ is finite, its torsion linking form is the oriented pairing $\lambda_M:H_1(M;\mathbb Z)\times H_1(M;\mathbb Z)\to\mathbb Q/\mathbb Z$ given by $\lambda_M(x,y)=(C\cdot b)/n\bmod\mathbb Z$, where integral $1$-cycles $a,b$ represent $x,y$, respectively, $n>0$ is an integer, and $C$ is an integral $2$-chain in $M$ with $\partial C=na$, placed transversely to $b$; reversing the orientation negates $\lambda_M$. For a prime-power-order character $\chi$ of order $d$, the standard splitting $H_1(M_{0,q};\mathbb Z)\cong H_1(M;\mathbb Z)\oplus\mathbb Z\langle\widetilde\mu\rangle$ of the $q$-fold cyclic cover $M_{0,q}$ of zero surgery extends $\chi$ to $\eta:H_1(M_{0,q};\mathbb Z)\to\mathbb Z/d\oplus\mathbb Z$ by identifying its cyclic image with $\mathbb Z/d$ and using the free-summand projection in the second factor. A Casson–Gordon bordism datum is a positive integer $r$ and a compact oriented $4$-manifold $W$ with a map to $K(\mathbb Z/d\oplus\mathbb Z,1)$ whose boundary represents $r$ copies of $(M_{0,q},\eta)$.

## Definition references

[[def-finite-linking-form-and-metabolizer|Finite nonsingular linking forms and metabolizers]]

[[def-cyclic-branched-cover-of-a-knot|The cyclic branched cover convention]]

[[def-finite-order-character-of-a-branched-cover|Finite-order characters]]

[[def-oriented-bordism-group-of-a-space|Oriented bordism groups of maps]]

[[lem-linking-pairing-on-rational-homology-sphere-is-nonsingular|Well-definedness and nonsingularity of the torsion linking pairing]]

[[def-cyclic-zero-surgery-cover|The cyclic cover of zero surgery]]

[[lem-zero-surgery-cyclic-cover-homology-splitting|The asserted homology splitting]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.5.3, p. 139 and §8.1, pp. 164–166](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

