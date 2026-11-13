---
title: Relative central neighbourhood and antipodal generic points
status: draft
research_item: lem-relative-local-neighbourhood-artin-tits-normalisers
dependency_level: 12
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 9; Proposition 3.6, proof
      statement: The source argument asserts that for $u\in\mathrm{Cone}(J)^\circ$
        there is a sufficiently small ambient ball $B$ centred at $u$ such that
        hyperplanes of $\mathcal H$ meeting $B\cap\mathrm{Cone}$ contain $u$,
        and $B\cap\Theta_J$ lies in $\mathrm{Cone}(J)$. It uses density of the
        relative hyperplane complement to choose $v$ in this ball on no relative
        hyperplane, and asserts the same for $v^\prime=2u-v$, with $u$ interior
        to $[v,v^\prime]$.
      hypotheses: The hypotheses in the extracted statement; standing Coxeter-system
        notation of §§2–3. Spherical type is imposed only where explicitly
        stated.
      reading_limits: Original PDF page 9 and its extracted text were inspected for
        exact attribution. The stronger ambient-ball assertion is retained in
        internal evidence and is not used as a premise. No independent external
        theorem is imported; the corrected relative statement has the local
        proof below.
---

PDF p. 9: ` Proposition 3.6, proof `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)
- [lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices)
- [lem-author-b319c70a2611-hyperplane-vertex-separation](item-lem-author-b319c70a2611-hyperplane-vertex-separation)
- [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball)
- [lem-author-b319c70a2611-central-relative-ball](item-lem-author-b319c70a2611-central-relative-ball)
- [lem-author-b319c70a2611-antipodal-avoidance](item-lem-author-b319c70a2611-antipodal-avoidance)


## Statement

Let $E=\Theta_J$ and $u\in\mathrm{Cone}(J)^\circ$ in the finite-dimensional topology of [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers). There exists an ambient Euclidean ball $B$ centred at $u$ such that $B\cap E\subseteq\mathrm{Cone}(J)$, only finitely many members of $\mathcal H^J$ meet $B\cap E$, and every ambient root hyperplane meeting $B\cap E$ contains $u$. There are $v,v^\prime\in B\cap E$ on no relative hyperplane with $v^\prime=2u-v$. If $\dim E>0$, choose $v\ne v^\prime$, so $u$ is interior to $[v,v^\prime]$; if $E=0$, take $v=v^\prime=u$. No claim is made that every root hyperplane meeting $B\cap\mathrm{Cone}$ contains $u$.

## Facts & Assumptions

**Given:** Relative space, cone and proper traces in [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers), the relative topology in [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites), and the coordinate, separation, finite-ball, central-ball and avoidance lemmas [lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices), [lem-author-b319c70a2611-hyperplane-vertex-separation](item-lem-author-b319c70a2611-hyperplane-vertex-separation), [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball), [lem-author-b319c70a2611-central-relative-ball](item-lem-author-b319c70a2611-central-relative-ball), [lem-author-b319c70a2611-antipodal-avoidance](item-lem-author-b319c70a2611-antipodal-avoidance). **Goal:** Supply the relative neighbourhood used by the local-finiteness consumer.

## Proof


**Given:** Relative space, cone and proper traces in [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers), the relative topology in [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites), and the coordinate, separation, finite-ball, central-ball and avoidance lemmas [lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices), [lem-author-b319c70a2611-hyperplane-vertex-separation](item-lem-author-b319c70a2611-hyperplane-vertex-separation), [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball), [lem-author-b319c70a2611-central-relative-ball](item-lem-author-b319c70a2611-central-relative-ball), [lem-author-b319c70a2611-antipodal-avoidance](item-lem-author-b319c70a2611-antipodal-avoidance). **Goal:** Supply the relative neighbourhood used by the local-finiteness consumer.



**Proof technique:** direct.

1.1 The coordinate-vertex and hyperplane-separation lemmas [lem-author-b319c70a2611-coordinate-vertices](item-lem-author-b319c70a2611-coordinate-vertices) and [lem-author-b319c70a2611-hyperplane-vertex-separation](item-lem-author-b319c70a2611-hyperplane-vertex-separation) give the finite construction used in [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball). Thus [lem-author-b319c70a2611-central-relative-ball](item-lem-author-b319c70a2611-central-relative-ball) supplies a relative ball $B_E(u,r)$ contained in $\mathrm{Cone}(J)$, meeting finitely many proper traces, with every ambient hyperplane meeting that relative ball containing $u$. Take the ambient ball $B=B_\Theta(u,r)$ in the coordinate Euclidean metric; its intersection with $E$ is precisely $B_E(u,r)$. [given, algebra]

2.1 Apply [lem-author-b319c70a2611-antipodal-avoidance](item-lem-author-b319c70a2611-antipodal-avoidance) in this relative ball to obtain the antipodal pair and the asserted dimension-dependent segment property. This proves every assertion. The original article’s stronger condition on $B\cap\mathrm{Cone}$ is not needed and is not proved here. [step 1.1, given] ∎

## Source notes

The article, PDF p. 9, Proposition 3.6 proof, asserts a stronger ambient condition on $B\cap\mathrm{Cone}$. This item deliberately supplies the correct relative condition on $B\cap\Theta_J$, sufficient for that proposition. The original assertion and an explicit boundary-point obstruction are preserved separately in run-local evidence for independent final assessment. The finite-pair separation input has an independent local inversion-set proof and does not use Proposition 3.6. No original-article assertion is used as proof of a prerequisite.
