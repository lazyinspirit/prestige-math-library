---
id: def-casson-gordon-signature-defect
kind: definition
title: Casson–Gordon Witt class and signature defect
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-torsion-linking-form-and-casson-gordon-bordism
  - lem-casson-gordon-bordism-admissibility
  - lem-casson-gordon-bordism-independence-and-nonsingularity
  - lem-casson-gordon-twisted-intersection-form-is-nonsingular
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
      locator: Chapter 8, §8.1, pp. 164–166; complete invariant definition and limiting-signature passage read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 307–309; the signature invariant interface read
    - title: Stefan Friedl, Higher and Quantum Invariants of Knots
      url: https://epub.uni-regensburg.de/53903/1/phd_thesis.pdf
      locator: §4.3.8; the exact coefficient field and Witt-class definition read
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp. 190–191; the τ expression is defined with twisted and nonsingular untwisted intersection forms, with full bounding-data independence only sketched
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Assume AC. Let $K$ be a smooth oriented knot, let $q$ be a prime power, and let $\chi:H_1(\Sigma_q(K);\mathbb Z)\to\mathbb Q/\mathbb Z$ have prime-power order $d$. Choose a Casson–Gordon bordism datum $(M_{0,q},\eta,r,W)$. Write $G=\mathbb Z/d\oplus\mathbb Z$, let $Y\to W$ be the regular cover determined by $\eta$, and give $\mathbb C(t)$ the $G$-action $(a,n)z=\exp(2\pi ia/d)t^n z$ and involution $\overline{t}=t^{-1}$ with complex conjugation on constants. Define
$$H_2^t(W;\mathbb C)=H_2(Y;\mathbb C)\otimes_{\mathbb C[G]}\mathbb C(t).$$
The Casson–Gordon Witt class is
$$\tau(\Sigma_q(K),\chi)=\frac{1}{r}\bigl([H_2^t(W;\mathbb C)]-[Q_0(W)\otimes_{\mathbb C}\mathbb C(t)]\bigr)\in W(\mathbb C(t))\otimes\mathbb Q,$$
using the nonsingular twisted form and the ordinary nonsingular image form. Precisely, put $Q_0(W)=H_2(W;\mathbb C)/\operatorname{rad}(\lambda_W)$ with its induced form; the untwisted term in the display is understood as $Q_0(W)\otimes_{\mathbb C}\mathbb C(t)$. The twisted boundary complex is acyclic, so its algebraic Poincare cap preserves the absolute twisted module. This does not assert that an arbitrary ordinary absolute intersection form is nonsingular. Here $W(\mathbb C(t))$ is the Witt group of nonsingular Hermitian forms over the field with involution, modulo hyperbolic forms. Its signature defect is $\sigma(K,\chi)=\sigma_1(\tau(\Sigma_q(K),\chi))$, where $\sigma_1$ evaluates a Hermitian representative at $t=e^{i\theta}$ and takes the one-sided limit as $\theta\to0^+$. This is the specified Casson–Gordon invariant and signature homomorphism; it is not an arbitrary rho invariant or an unspecified difference of signatures.

## Definition references

[[def-torsion-linking-form-and-casson-gordon-bordism|The character pair and bounding data]]

[[lem-casson-gordon-bordism-admissibility|Existence of a multiple bounding bordism]]

[[lem-casson-gordon-twisted-intersection-form-is-nonsingular|The capped twisted intersection form]]

[[lem-casson-gordon-bordism-independence-and-nonsingularity|Independence of the rationalized Witt class]]

[[def-oriented-bordism-group-of-a-space|The oriented bordism class convention]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.1, pp. 164–166](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

