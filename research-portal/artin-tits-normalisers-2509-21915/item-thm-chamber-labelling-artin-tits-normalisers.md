---
title: Labelling theorem for relative chambers
status: published
research_item: thm-chamber-labelling-artin-tits-normalisers
dependency_level: 12
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 9, 10; Theorem 3.9; (3.10)
      statement: The map $(x,I)\mapsto xC_I$ is a bijection from $\mathrm{Cham}(J)$ to
        the chambers of $(\mathrm{Cone}(J)^\circ,\mathcal H^J)$.
      hypotheses: The Coxeter-system and relative-cone conventions of §§2–3. Theorem
        3.9 does not explicitly state finite rank; the finite-rank geometric
        convention used here is already specified by the completed relative-cone
        definition. No spherical-type assumption on W or W_J is imposed.
      reading_limits: Read the original extracted §§2.1–2.2, Proposition 3.6 and
        Theorem 3.9, and visually inspected original PDF pp. 4, 9 and 10. This
        reference attributes the original theorem and its conventions; its
        assertion is not used as an independent proof input. The independent
        labelling input is the declared completed supplier.
---

PDF p. 9: ` Theorem 3.9; (3.10) `; PDF p. 10: ` Theorem 3.9; (3.10) `

## Prerequisites

- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [rem-same-chambers-artin-tits-normalisers](item-rem-same-chambers-artin-tits-normalisers)
- [prop-relative-stratification-artin-tits-normalisers](item-prop-relative-stratification-artin-tits-normalisers)
- [thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)


## Statement

The map $(x,I)\mapsto xC_I$ is a bijection from $\mathrm{Cham}(J)$ to the chambers of $(\mathrm{Cone}(J)^\circ,\mathcal H^J)$.

## Statement references

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)

## Facts & Assumptions

[F1] The domain is the set of pairs $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum length in $xW_I$. [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[F2] The relative space is $\Theta_J$, the cone is $\mathrm{Cone}\cap\Theta_J$, its interior is taken in $\Theta_J$, and its hyperplanes are the distinct traces $H_\alpha\cap\Theta_J$ with $\Theta_J\not\subseteq H_\alpha$. Chambers are connected components of the complement; restriction omits traces missing the domain. [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[F3] The independent labelling theorem applies to every finite-rank Coxeter system and arbitrary $J$, and maps exactly the pairs in [F1] bijectively to the chambers of the relative-interior arrangement by $(x,I)\mapsto xC_I$. [thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)

[F4] The full-cone and relative-interior chamber sets coincide. Their chambers are the full-dimensional translates of the coordinate faces used here. [rem-same-chambers-artin-tits-normalisers](item-rem-same-chambers-artin-tits-normalisers) [prop-relative-stratification-artin-tits-normalisers](item-prop-relative-stratification-artin-tits-normalisers)

## Proof
**Given:** The finite-rank geometric convention of [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers), with arbitrary Coxeter type and arbitrary $J\subseteq\Gamma_0$. Neither $W$ nor $W_J$ is required to be finite. **Goal:** Prove the displayed bijection in these conventions.


1.1 Identify the notation in [F3] with that of [F2]: its $E_J$ is $\Theta_J$, its $U$ is $\mathrm{Cone}$, its $T^\circ$ is $\mathrm{Cone}(J)^\circ$, and its proper root traces are precisely $\mathcal H^J$. Both constructions omit traces missing this interior and use the induced Euclidean topology. Thus their chambers, defined as connected components, agree as subsets. [F2, F3]

1.2 The label conditions in [F3] are exactly those in [F1], with the same standard parabolics and length function. Its face $C_I$ has zero coordinates on $I$ and strictly positive coordinates off $I$, which is the coordinate-face convention in [F4]. In particular the map in [F3] is exactly the displayed map, rather than a map to a different choice of chamber representatives. [F1, F3, F4]

2.1 Apply the bijection in [F3] using the identifications in steps 1.1–1.2. This proves existence and uniqueness of the label of every target chamber. The full-cone interpretation, if used, agrees by [F4]. Since [F3] places no sphericity restriction on $W$ or $W_J$, none is introduced in this application. [F3, F4, step 1.1, step 1.2] ∎

## Source notes

The article attributes Theorem 3.9 to [24, Theorem 1.15]. The independently inspected author-hosted Iyama–Wemyss draft used by the completed labelling supplier numbers the applicable result Theorem 1.12, with labels in Definition 1.8 (printed pp. 6–7 / PDF pp. 30–31). Its §1.1 starts with an $n\times n$ Coxeter matrix and vertex set $\{1,\ldots,n\}$, while §1.2 permits the Coxeter group to be infinite. The number difference is recorded as a source-version difference; no claim about an unread version is made. The present proof applies the completed supplier and does not reconstruct the independent source proof.

The article's §2.2 follows [24] for its dual representation and refers to Vinberg [31]; Proposition 3.6 explicitly uses a finite-dimensional vector space. Vinberg's paper has not been independently read here. Although Theorem 3.9 has no explicit rank qualifier, its geometric objects in this collection already have the finite-rank convention in the relative-cone definition. The displayed statement is retained with that convention, preserving all Coxeter types and all vertex subsets, including nonspherical ones. The arbitrary-rank algebraic definition of the label set remains available; it alone supplies no infinite-rank chamber topology. An extension to infinitely many simple generators with a specified topology is not established here. This scope boundary is internal applicability evidence, not an original-article defect judgment.
