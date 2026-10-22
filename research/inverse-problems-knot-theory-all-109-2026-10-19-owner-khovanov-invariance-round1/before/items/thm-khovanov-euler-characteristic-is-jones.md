---
id: thm-khovanov-euler-characteristic-is-jones
kind: theorem
title: "Khovanov Euler characteristics equal the Jones polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - lem-khovanov-graded-euler-characteristic-jones-normalization
  - thm-bracket-state-sum-matches-library-jones-specialization
  - thm-khovanov-homology-is-an-oriented-link-invariant
  - thm-reduced-khovanov-basepoint-and-reidemeister-invariance
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
axiom_use: "Assumes full AC only for the library Hecke/Jones comparison; the local Euler state sum is choice-free and uses ACω only through link invariance."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§2.4 and 7.1–7.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§3.1 and 3.5"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§3–4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
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

[F4] The current unreduced and reduced invariance carriers leave required local-move and relative-basepoint steps unresolved, so they do not yet establish diagram-independent groups denoted $Kh^{i,j}(L)$ and $\widetilde{Kh}^{i,\widetilde j}(K,p)$ ([[thm-khovanov-homology-is-an-oriented-link-invariant]], [[thm-reduced-khovanov-basepoint-and-reidemeister-invariance]]).

## Proof

The steps prove only the diagramwise Euler calculation; they do not prove that the link-level cohomology groups in the Statement are diagram-independent.

1.1 By [A1] and [F1], full AC supplies AC$_\omega$. For each fixed diagram $D$, [F2] identifies its rank Euler sums with $(q+q^{-1})f_D(A)$ and $f_D(A)$, respectively. [A1, F1, F2, given, algebra]

2.1 By [F3], the state sum for that fixed diagram identifies with $V_L(t)$ at $t=A^{-4}$. Thus the diagramwise Euler sums have the displayed Jones values. This calculation does not establish that the groups are independent of the diagram or, in the reduced case, of the basepoint. [F2, F3, step 1.1, algebra]

3.1 The theorem's notation $Kh^{i,j}(L)$ and $\widetilde{Kh}^{i,\widetilde j}(K,p)$ requires the diagram and basepoint invariance claims. Those claims are not supplied because the carriers in [F4] still have the exact local RII/RIII and relative tangle gaps recorded in their proofs. Therefore the stated link-level Euler-characteristic theorem is not proved here. [F4, step 2.1, algebra] ∎
