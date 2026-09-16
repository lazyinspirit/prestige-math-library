---
id: prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory
kind: proposition
title: Degree-d sphere maps act by multiplication by d in any generalized theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-cohomology-theory, def-reduced-generalized-homology-theory, def-coefficient-groups-of-a-generalized-cohomology-theory, def-coefficient-groups-of-a-generalized-homology-theory, thm-based-sphere-maps-are-classified-by-geometric-degree, def-degree-of-a-self-map-of-an-oriented-sphere, def-wedge-of-pointed-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, Lemma 2.3 and Remark 2.2, printed pp. 4–5"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "Lemma 2.3 and Remark 2.2, printed pp. 4–5"
---

## Statement

Let $p\geq1$, let $f:S^p\to S^p$ be a based continuous map of degree
$d\in\mathbb Z$ in the sense of [[def-degree-of-a-self-map-of-an-oriented-sphere]],
and let $\widetilde h$ be a reduced generalized homology theory
([[def-reduced-generalized-homology-theory]]) and $\widetilde g$ a reduced
generalized cohomology theory ([[def-reduced-generalized-cohomology-theory]]) on
based CW complexes. Then
$$f_*:\widetilde h_n(S^p)\to\widetilde h_n(S^p),\qquad f^*:\widetilde g^n(S^p)\to\widetilde g^n(S^p)$$
are multiplication by $d$ for every integer $n$. For $p=0$ the only based
self-maps of $S^0$ are the identity and the collapse map, of degrees $1$ and $0$,
and the corresponding statements are the identities $1$ and $0$.

## Facts & Assumptions

[F1] For $r\geq1$, degree is an isomorphism $\pi_r(S^r,b)\to\mathbb Z$ sending the identity to $1$; the group operation is the oriented pinch sum, equivalently cubical concatenation, and two based self-maps of $S^r$ are based homotopic if and only if their degrees agree ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F2] The degree of a based self-map of an oriented sphere is an integer, additive under composition and invariant under based homotopy ([[def-degree-of-a-self-map-of-an-oriented-sphere]]).

[F3] A reduced generalized homology theory has based homotopy invariance, and for a finite wedge the summand inclusions induce an isomorphism $\bigoplus_\alpha\widetilde h_n(X_\alpha)\cong\widetilde h_n(\bigvee_\alpha X_\alpha)$ ([[def-reduced-generalized-homology-theory]]).

[F4] A reduced generalized cohomology theory has based homotopy invariance, and for a finite wedge the summand inclusions induce an isomorphism $\widetilde g^n(\bigvee_\alpha X_\alpha)\cong\prod_\alpha\widetilde g^n(X_\alpha)$ ([[def-reduced-generalized-cohomology-theory]]).

[F5] The wedge is the quotient of the disjoint union of the summands identifying their basepoints, and the structural maps of a wedge are the summand inclusions and collapses ([[def-wedge-of-pointed-spaces]]).

## Proof

**Proof technique:** direct.

**Given:** A based degree-$d$ map $f:S^p\to S^p$, $p\geq1$, and a reduced homology theory $\widetilde h$ and reduced cohomology theory $\widetilde g$.

1.1 The class of $f$ is the $d$-fold pinch sum of the class of the identity: since degree is an isomorphism from $\pi_p(S^p,b)$ to $\mathbb Z$ taking the identity to $1$ and the pinch sum to addition, $[f]=d[\mathrm{id}]$, and degree only depends on the based homotopy class. [F1, F2, given]

1.2 Write $P:S^p\to S^p\vee S^p$ for the pinch and $F:S^p\vee S^p\to S^p$ for the fold, so that for based self-maps $\alpha,\beta$ the pinch sum is represented by $F\circ(\alpha\vee\beta)\circ P$; the two components $\pi_1P,\pi_2P$ are based degree-one maps, hence are based homotopic to the identity. [F1, F5, given]

1.3 For $p=0$ the based self-maps of $S^0$ are the identity (degree $1$) and the collapse (degree $0$), so both assertions there are immediate from functoriality. [F1, F2, given]

2.1 For homology, $P_*:\widetilde h_n(S^p)\to\widetilde h_n(S^p\vee S^p)$ has components $(\pi_1P)_*=(\pi_2P)_*=\mathrm{id}$ under the wedge isomorphism of [F3], hence is the diagonal; and $F_*$ is the sum map because $F$ restricts to the identity on each summand. Therefore $(F\circ(\alpha\vee\beta)\circ P)_*=\alpha_*+\beta_*$ for all based $\alpha,\beta$. [F3, F5, step 1.2]

2.2 For cohomology, $F^*$ is the diagonal and $P^*$ is the sum map under the wedge isomorphism of [F4], because $F$ restricts to the identity on each summand and the components of $P$ are degree one; therefore $(F\circ(\alpha\vee\beta)\circ P)^*=\alpha^*+\beta^*$ for all based $\alpha,\beta$. [F4, F5, step 1.2]

3.1 By step 1.1 and functoriality of $\widetilde h$, $f_*$ equals the $d$-fold sum of $\mathrm{id}_*$ in the group $\operatorname{End}(\widetilde h_n(S^p))$, which is multiplication by $d$ by step 2.1. [step 1.1, step 2.1]

3.2 By step 1.1 and functoriality of $\widetilde g$, $f^*$ equals the $d$-fold sum of $\mathrm{id}^*$ in the group $\operatorname{End}(\widetilde g^n(S^p))$, which is multiplication by $d$ by step 2.2. [step 1.1, step 2.2]

4.1 Combining steps 1.3, 3.1 and 3.2 gives the asserted multiplication by the degree on every reduced homology and cohomology group of $S^p$. [step 1.3, step 3.1, step 3.2] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), Lemma 2.3 and Remark 2.2, printed pp. 4–5, where the degree action is proved for cohomology by factoring a positive-degree map through a pinch to a wedge followed by a folding map, with the negative-degree case handled by composing with a reflection. The argument above uses the library's based-degree classification for spheres instead of a reflection.
