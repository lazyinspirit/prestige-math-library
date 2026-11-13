---
title: Finite wall-crossing connectivity
status: draft
research_item: lem-finite-wall-path-artin-tits-normalisers
dependency_level: 15
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 11, Lemma 3.20(3) and Remark 3.22
      statement: Any two chambers are related by a finite sequence of wall crossings.
        The remark observes that this also follows from local finiteness of the
        relative-interior arrangement and the identification of its chambers
        with those of the full relative arrangement.
      hypotheses: The article's Coxeter-system and relative-arrangement conventions;
        no spherical-type hypothesis is imposed on this assertion.
      reading_limits: The frozen extracted text at Lemma 3.20(3) and Remark 3.22 was
        read for attribution. The article is not used as a proof premise here;
        its cited Proposition 1.43 was not independently read for this item.
---

PDF p. 11: ` Lemma 3.20(3); Remark 3.22 `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)
- [rem-same-chambers-artin-tits-normalisers](item-rem-same-chambers-artin-tits-normalisers)
- [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system and let $J\subseteq S$. Let $\mathrm{Cone}(J)$ be the intersection of the Tits cone with $\Theta_J=\{f:f(\alpha_j)=0\text{ for all }j\in J\}$, and let $\mathcal H^J$ be the distinct proper traces on $\Theta_J$ of root hyperplanes. Chambers are the connected components of the relative arrangement complement; distinct chambers are adjacent when their closures share a wall, a codimension-one intersection with an arrangement hyperplane.

Write $\mathrm{Cham}(J)$ for the pairs $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum length in $xW_I$. For $a\notin I$, let $D=[I,a]$ be the component containing $a$ in the Coxeter diagram induced on $I\cup\{a\}$. When $W_D$ is finite, the simple wall crossing is $\omega_{a,I}(x,I)=(xw_{D\setminus\{a\}}w_D,(I\cup\{a\})\setminus\{\iota_D(a)\})$, where $w_L$ is the longest element of the finite parabolic $W_L$ and $w_D\alpha_i=-\alpha_{\iota_D(i)}$.

Any two chambers are related by a finite sequence of simple wall crossings. In particular, this follows from local finiteness of the relative-interior arrangement and the identification of its chambers and adjacency relation with those of the full relative arrangement. The empty sequence is allowed when the two chambers coincide.

## Statement references

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

## Facts & Assumptions


[F1] The relative-interior arrangement is locally finite; restriction identifies its chambers with those of the full relative arrangement and preserves adjacency. Any two interior chambers have a finite gallery, a finite sequence whose consecutive chambers are adjacent. [rem-same-chambers-artin-tits-normalisers](item-rem-same-chambers-artin-tits-normalisers)

[F2] The map $(x,I)\mapsto xC_I$ labels the interior chambers bijectively by $\mathrm{Cham}(J)$, where $C_I$ is the coordinate face with zero coordinates on $I$ and positive coordinates outside $I$. [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[F3] If chambers labelled $(x,I)$ and $(y,K)$ are adjacent, there is an $a\notin I$ for which $W_{[I,a]}$ is finite and $\omega_{a,I}(x,I)=(y,K)$. [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)

## Proof


**Given:** Two chambers of the relative arrangement for the stated finite-rank Coxeter system and subset $J$.

**Goal:** Connect their labels by finitely many simple wall crossings and establish the stated local-finiteness explanation.

1.1 By [F1], identify the given chambers with interior chambers and choose a finite gallery between them. By [F2], each chamber in this gallery has a unique label in $\mathrm{Cham}(J)$. If the endpoints coincide, the gallery may have no adjacency steps. [F1, F2, choose]

2.1 Apply [F3] to each consecutive pair of labelled chambers. Its finiteness conclusion makes the corresponding simple wall-crossing map well-defined, and that map sends the first label to the second. Since the gallery has finitely many steps, these maps form the required finite sequence. This construction uses the locally finite interior gallery and the chamber and adjacency identification in [F1], proving the stated explanation as well. [F1, F3, step 1.1] ∎

## Source notes

The article supplies attribution for the statement and its local-finiteness observation. The proof uses the declared completed suppliers, not the article's assertion as a premise.
