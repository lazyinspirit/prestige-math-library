---
id: thm-khovanov-euler-characteristic-is-jones
kind: theorem
title: Reduced and unreduced Khovanov Euler characteristics and the Jones polynomial
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - lem-khovanov-graded-euler-characteristic-jones-normalization
  - thm-bracket-state-sum-matches-library-jones-specialization
  - thm-khovanov-homology-is-an-oriented-link-invariant
  - thm-reduced-khovanov-basepoint-and-reidemeister-invariance
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
axiom_use: Assumes full AC only for the library Hecke/Jones comparison; the
  local Euler state sum is choice-free and uses ACω only through link
  invariance.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mikhail Khovanov, A categorification of the Jones polynomial,
        arXiv:math/9908171v2, §§2.4 and 7.1–7.2
      url: https://arxiv.org/pdf/math/9908171v2
    - title: Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial,
        Algebraic & Geometric Topology 2 (2002), §§3.1 and 3.5
      url: https://arxiv.org/pdf/math/0201043
    - title: Louis H. Kauffman, An Introduction to Khovanov Homology,
        arXiv:1107.1524v2 (2022), §§3–4
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf
    - title: Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7
      url: https://arxiv.org/pdf/2501.03115v1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $V_L(t)$ be the library Jones polynomial of a nonempty oriented link $L$, normalized by $V_{\bigcirc}(t)=1$. For every diagram $D$ of $L$, put $q=-A^{-2}$ and $t=q^2=A^{-4}$. Then the integral rank Euler characteristics satisfy
$$\sum_{i,j}(-1)^i\operatorname{rank}_{\mathbb Z}Kh^{i,j}(L)q^j=(q+q^{-1})V_L(t).$$
If $L=K$ is a knot with any basepoint $p$ away from the crossings, then
$$\sum_{i,\widetilde j}(-1)^i\operatorname{rank}_{\mathbb Z}\widetilde{Kh}^{i,\widetilde j}(K,p)q^{\widetilde j}=V_K(t).$$
The unreduced factor $q+q^{-1}$ and reduced factor $1$ are the respective unknot normalizations.

## Statement references

[[def-axiom-of-choice|Full Axiom of Choice]]

[[thm-choice-implies-dependent-implies-countable-choice|Full choice implies countable choice]]

[[lem-khovanov-graded-euler-characteristic-jones-normalization|Statewise Euler characteristic and bracket normalization]]

[[thm-bracket-state-sum-matches-library-jones-specialization|Bracket-to-library Jones comparison]]

[[thm-khovanov-homology-is-an-oriented-link-invariant|Unreduced link invariance]]

[[thm-reduced-khovanov-basepoint-and-reidemeister-invariance|Reduced basepoint and diagram invariance]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§2.4 and 7.1–7.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.1 and 3.5](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§3–4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** Full AC, a nonempty oriented link $L$, its finite-diagram complexes, and the library Jones polynomial.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] Full AC implies AC$_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For a fixed finite diagram $D$, the integral rank Euler sums of its Khovanov cohomology are $(q+q^{-1})f_D(A)$ unreduced and $f_D(A)$ reduced, where $q=-A^{-2}$ and $f_D$ is the writhe-normalized state sum ([[lem-khovanov-graded-euler-characteristic-jones-normalization]]).

[F3] Under full AC, the normalized bracket state sum equals the library Jones polynomial at $t=A^{-4}$ ([[thm-bracket-state-sum-matches-library-jones-specialization]]).

[F4] Under AC$_\omega$, the unreduced groups are independent of the diagram, and the reduced groups of a knot are independent of the diagram and basepoint ([[thm-khovanov-homology-is-an-oriented-link-invariant]], [[thm-reduced-khovanov-basepoint-and-reidemeister-invariance]]).

## Proof

1.1 By [A1] and [F1], full AC supplies AC$_\omega$. Hence [F4] identifies the bigraded groups computed from any finite diagram $D$ with $Kh^{i,j}(L)$, and in the knot case identifies the reduced groups with $\widetilde{Kh}^{i,\widetilde j}(K,p)$ for every allowed basepoint. The fixed-diagram complexes have finite rank and bounded support, so their rank Euler sums are finite. [A1, F1, F2, F4, given, algebra]

2.1 By [F2], those Euler sums are $(q+q^{-1})f_D(A)$ and $f_D(A)$, respectively. By [F3], $f_D(A)=V_L(A^{-4})$ under the stated full-AC hypothesis. Substituting $q=-A^{-2}$ and $t=q^2=A^{-4}$ gives exactly the two formulas in the Statement. For a crossingless unknot the unreduced complex has its two generators in quantum degrees $1,-1$, whereas the reduced interval module has one generator in reduced degree zero, so the respective factors are $q+q^{-1}$ and $1$. Since [F4] makes the groups diagram- and basepoint-independent, these are the claimed link and knot Euler characteristics. [F2, F3, F4, step 1.1, algebra] ∎
