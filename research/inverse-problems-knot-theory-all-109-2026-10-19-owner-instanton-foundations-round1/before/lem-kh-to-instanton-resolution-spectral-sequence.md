---
id: lem-kh-to-instanton-resolution-spectral-sequence
kind: lemma
title: "Filtered instanton complex from the cube of knot resolutions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - lem-instanton-knot-complex-asd-analytic-foundations
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-reduced-khovanov-cohomology-of-a-knot
  - lem-khovanov-cube-differential-squares-to-zero
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - def-axiom-of-choice
  - def-countable-choice
axiom_use: "The finite filtration and its algebraic rank argument are choice-free; the singular-instanton construction inherits the declared AC branch."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§6–8.7"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knot homology groups from instantons, §1.2 and §§3.3–3.7"
      url: "https://people.math.harvard.edu/~kronheim/yaft.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Statement

Assume full AC. Let $D$ be a finite based diagram of a smooth knot $K\subset S^3$ with ordered crossings $c_1<\cdots<c_n$. The singular instanton resolution complex admits a finite filtration whose first page, with its first differential, is isomorphic to the reduced Khovanov cube of the reflected based diagram $\overline D$. Its spectral sequence converges to $I^\natural(K;\mathbb Z)$. The cube sign at the edge changing $c_j$ is $(-1)^{\sum_{i<j}v_i}$, and the edge operation is multiplication for a merge or comultiplication for a split. Thus its $E_2$ page is the reduced integral Khovanov cohomology of $\overline D$. The claim includes coherent instanton orientations and the unlink group and saddle-map identifications; it asserts no diagram-invariance of intermediate pages.

## Statement references

[[def-instanton-knot-homology-and-canonical-class|Singular instanton homology]]

[[def-singular-instanton-knot-and-sutured-closure-data|Admissible resolution data]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Integral Frobenius operations and cube signs]]

[[lem-instanton-knot-complex-asd-analytic-foundations|Analytic instanton complex]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§6–8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

**Given:** Full AC, a finite ordered crossing set, the based reduced Khovanov cube convention, and the singular instanton data.

[A1] A long exact sequence for the three singular instanton groups at each crossing, with maps induced by the two saddle cobordisms, is required. No complete local proof or current supplier carrier was found for this exact integral, reduced version.

[A2] Coherent choices of instanton orientations over every face of the resolution cube are required so the signed face maps square to zero. The local proof must identify each oriented face and verify the sign relation; the citation alone does not supply it.

[A3] The unlink groups and saddle maps must be identified integrally with the reduced Frobenius module and its merge/split maps. This is a separate local computation.

[A4] A bounded filtered-complex spectral sequence then converges to filtered homology; the finite-filtration theorem is supplied by [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]].

## Proof obligation

Kronheimer–Mrowka prove the resolution construction in §§6–8 and identify the reduced Khovanov $E_2$ page in §8.7. The local proof obligations above remain open in this carrier, including exact integral signs and the reduced unlink/saddle identification. This item is escalated.
