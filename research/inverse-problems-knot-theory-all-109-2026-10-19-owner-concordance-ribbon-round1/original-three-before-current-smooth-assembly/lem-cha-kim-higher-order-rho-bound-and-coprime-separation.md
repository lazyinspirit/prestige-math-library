---
id: lem-cha-kim-higher-order-rho-bound-and-coprime-separation
kind: lemma
title: "Higher-order rho bounds and coprime separation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-blanchfield-pairing-and-higher-order-rho-invariant
  - thm-cheeger-gromov-uniform-rho-bound
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha and Taehee Kim, “Iterated satellite operators on the knot concordance group”"
      url: "https://arxiv.org/pdf/2402.04629v2"
      locator: "§§3.6 and 6, rho bounds and separate coprime-polynomial theorem"
    - title: "Jae Choon Cha and Charles Livingston, “Knot signature functions are independent”"
      url: "https://arxiv.org/pdf/math/0208225v3"
      locator: "Theorem 1, prescribed-root signature support"
    - title: "Jae Choon Cha, “Structure of the string link concordance group and Hirzebruch-type invariants”"
      url: "https://arxiv.org/pdf/0709.2968"
      locator: "Lemma 5.6 and proof, bump signature construction"
---

## Statement

Assume the winding-zero and nonzero axis Blanchfield self-pairing hypotheses of Cha–Kim. For each finite stage of their iterated-infection construction, the companion knots can be chosen so that the relevant higher-order rho contribution has a fixed sign and dominates the sum of all remaining terms, using a uniform Cheeger–Gromov bound and signature functions supported near selected Alexander roots. Pairwise-coprime Alexander hypotheses are used only for the separate Theorem C separation argument, not for Theorems A or B.

## Statement references

[Cha–Kim, §§3.6 and 6](https://arxiv.org/pdf/2402.04629v2)

[Cha–Livingston, Theorem 1](https://arxiv.org/pdf/math/0208225v3)

[Cha, Lemma 5.6](https://arxiv.org/pdf/0709.2968)

## Facts & Assumptions

**Given:** The exact finite family of PTFA coefficient systems, the nonzero Blanchfield self-pairing condition, and the winding-zero pattern in Cha–Kim’s construction.

[F1] Each fixed surgery manifold has a uniform rho bound independent of its coefficient representation ([[thm-cheeger-gromov-uniform-rho-bound]]).

[F2] A knot can be chosen with signature jump supported at a prescribed conjugate pair of Alexander roots ([[def-blanchfield-pairing-and-higher-order-rho-invariant]]).

## Proof

1.1 For the finite list of coefficient systems, let C be the maximum of the corresponding Cheeger–Gromov constants from [F1]. Choose a positive integer N larger than the sum of the absolute values of all bounded error terms divided by the desired signature jump. [F1, given, choose, algebra]

1.2 Choose distinct unit-circle roots and companion knots whose signature functions have the prescribed local jumps, as in Cha–Livingston Theorem 1 and Cha Lemma 5.6. The source construction uses Seifert-matrix realization for the selected reciprocal polynomials. [F2, given, choose]

2.1 The resulting rho sum has one selected contribution of magnitude greater than N and all remaining contributions bounded by C, so its sign cannot cancel. Pairwise coprimeness enters only when applying the distinct-pattern separation argument of Theorem C. [F1, F2, step 1.1, step 1.2, algebra]

## Owner escalation

A complete proof must include the Cheeger–Gromov bound, the signature-jump construction with its Seifert realization input, and the exact coefficient-system bookkeeping. The analytic bound and Seifert realization are not locally proved; no Theorem C hypothesis is transferred to Theorems A/B.