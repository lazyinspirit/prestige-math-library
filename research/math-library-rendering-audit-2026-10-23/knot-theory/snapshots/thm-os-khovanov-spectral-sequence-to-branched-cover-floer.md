---
id: thm-os-khovanov-spectral-sequence-to-branched-cover-floer
kind: theorem
title: "The Khovanov to branched-cover Heegaard Floer spectral sequence"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-every-oriented-link-admits-a-regular-projection
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - thm-os-spectral-sequence-for-a-fixed-link-diagram
  - thm-reduced-khovanov-over-f2-link-invariance
axiom_use: "Assumes AC for the branched-cover construction and ACω for Reidemeister invariance and the Floer analytic package; these are distinct uses."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Theorem 1.1, Corollary 1.2, and §6"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume AC and ACω. For every nonempty oriented link $L\subset S^3$, there is a spectral sequence over $\mathbb F_2$ whose $E_2$ page is the reduced Khovanov cohomology $\widetilde{Kh}^{*,*}(\overline L;\mathbb F_2)$ of the mirror link and whose abutment is $\widehat{HF}(\Sigma(L);\mathbb F_2)$ with its image filtration. The page identification is an isomorphism of bigraded vector spaces; this statement does not claim a diagram-independent filtered quasi-isomorphism type for the chain-level spectral sequence.

## Statement references

[[thm-os-spectral-sequence-for-a-fixed-link-diagram|Fixed-diagram spectral sequence]]

[[thm-reduced-khovanov-over-f2-link-invariance|Reduced Khovanov link invariance]]

[[lem-double-branched-cover-of-an-oriented-link-well-defined|Branched-cover invariance]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Theorem 1.1, Corollary 1.2, and §6](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** AC, ACω, and a nonempty oriented link $L$.

[F0] Every nonempty oriented link in $S^3$ has a finite regular diagram: move it off $\infty$ using the link definition's ambient-isotopy convention, then choose a regular projection direction. Every component has a point away from the finite crossing set for the basepoint ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[lem-every-oriented-link-admits-a-regular-projection]]).

[F1] The branched cover is well-defined up to oriented diffeomorphism ([[lem-double-branched-cover-of-an-oriented-link-well-defined]]).

[F2] For a fixed diagram, the surgery construction has $E_2$ equal to based reduced Khovanov cohomology and converges to the branched-cover Floer group ([[thm-os-spectral-sequence-for-a-fixed-link-diagram]]).

[F3] Over ACω, the reduced Khovanov group is independent of the chosen diagram and marked component up to bigraded isomorphism ([[thm-reduced-khovanov-over-f2-link-invariance]]).

[A1] AC is used by the link-complement and covering-space construction; ACω is separately used by the Reidemeister-move and generic Floer analytic branches ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

1.1 By [F0], choose an ambient-isotopic representative $L'$ with a finite regular diagram $D$ and a point on its mirror away from crossings. Apply [F2] to $D$; this gives a spectral sequence with $E_2$ equal to the based reduced Khovanov group of the mirror diagram and abutment $\widehat{HF}(\Sigma(L');\mathbb F_2)$. By [F1], $\widehat{HF}(\Sigma(L');\mathbb F_2)\cong\widehat{HF}(\Sigma(L);\mathbb F_2)$. [F0, F1, F2, A1, given, choose]

2.1 Apply [F3] to identify that page, up to bigraded isomorphism, with $\widetilde{Kh}(\overline L;\mathbb F_2)$ independently of the selected diagram and component. The convergence in [F2] and target invariance in [F1] give the stated invariant endpoints, with no diagram-independent filtered chain claim. [F1, F2, F3, step 1.1]

3.1 The two deductions above are exactly the stated endpoint construction relative to [F2] and [F3]. They preserve the fixed-diagram scope of the filtered construction and use only the invariant isomorphism classes of its endpoints. Thus the formal assembly is complete relative to these two exact supplier interfaces. [F2, F3, step 1.1, step 2.1] ∎

## External-input boundary

The fixed-diagram supplier uses the explicitly labelled external Ozsváth–Szabó surgery and unlink-map inputs, with exact locators and reading limits recorded in those suppliers and the run source receipt. The reduced link-invariance supplier supplies the independent based-link passage. This proof assembles those results; it does not reconstruct their imported parts or claim a diagram-independent filtered chain type. AC for the branched cover and ACω for the analytic/Reidemeister branches remain the separate assumptions of the Statement.
