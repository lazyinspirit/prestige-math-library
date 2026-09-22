---
id: prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory
kind: proposition
title: Degree-d sphere maps act by multiplication by d in any generalized theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-reduced-generalized-cohomology-theory", "def-reduced-generalized-homology-theory", "thm-based-sphere-maps-are-classified-by-geometric-degree", "def-degree-of-a-self-map-of-an-oriented-sphere", "def-wedge-of-pointed-spaces", "cor-homotopic-maps-induce-the-same-map-on-singular-homology", "thm-cellular-homology-computes-singular-homology", "cor-homology-of-spheres"]
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

Give $S^p$ for $p\ge1$ its CW structure with the basepoint as sole vertex and one $p$-cell, and give finite wedges the corresponding wedge structure. Let $p\geq1$, let $f:S^p\to S^p$ be a based continuous map of degree
$d\in\mathbb Z$ in the sense of [[def-degree-of-a-self-map-of-an-oriented-sphere]],
and let $\widetilde h$ be a reduced generalized homology theory
([[def-reduced-generalized-homology-theory]]) and $\widetilde g$ a reduced
generalized cohomology theory ([[def-reduced-generalized-cohomology-theory]]) on
based CW complexes. Then
$$f_*:\widetilde h_n(S^p)\to\widetilde h_n(S^p),\qquad f^*:\widetilde g^n(S^p)\to\widetilde g^n(S^p)$$
are multiplication by $d$ for every integer $n$. For $p=0$ the only based
self-maps of $S^0$ (with its discrete CW structure) are the identity and the collapse map, and they induce identity and zero respectively. If one calls these integers their degrees, this uses reduced $H_0(S^0;\mathbb Z)\cong\mathbb Z$, not the unreduced positive-dimensional definition cited above.

## Facts & Assumptions

[F1] For $r\geq1$, degree is an isomorphism $\pi_r(S^r,b)\to\mathbb Z$ sending the identity to $1$; the group operation is the oriented pinch sum, equivalently cubical concatenation, and two based self-maps of $S^r$ are based homotopic if and only if their degrees agree ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F2] For $p\ge1$, homological degree is defined by $f_*[S^p]=d[S^p]$ in $H_p(S^p;\mathbb Z)\cong\mathbb Z$ ([[def-degree-of-a-self-map-of-an-oriented-sphere]]).

[F3] A reduced generalized homology theory has based homotopy invariance, and for a finite wedge the summand inclusions induce an isomorphism $\bigoplus_\alpha\widetilde h_n(X_\alpha)\cong\widetilde h_n(\bigvee_\alpha X_\alpha)$ ([[def-reduced-generalized-homology-theory]]).

[F4] A reduced generalized cohomology theory has based homotopy invariance, and for a finite wedge the summand inclusions induce an isomorphism $\widetilde g^n(\bigvee_\alpha X_\alpha)\cong\prod_\alpha\widetilde g^n(X_\alpha)$ ([[def-reduced-generalized-cohomology-theory]]).

[F5] The wedge is the quotient of the disjoint union of the summands identifying their basepoints, and the structural maps of a wedge are the summand inclusions and collapses ([[def-wedge-of-pointed-spaces]]).

[F6] Integral singular homology is homotopy invariant and computed naturally by cellular chains; the reduced sphere groups have their usual generator, including reduced $H_0(S^0)=\mathbb Z$ ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], [[thm-cellular-homology-computes-singular-homology]], [[cor-homology-of-spheres]]).

## Proof

**Proof technique:** direct.

**Given:** A based degree-$d$ map $f:S^p\to S^p$, $p\geq1$, and a reduced homology theory $\widetilde h$ and reduced cohomology theory $\widetilde g$.

1.1 All maps used are in the functors' domains. For $p\ge1$ the skeleton of $S^p$ in each dimension $0\le k<p$ is its basepoint and in dimensions $k\ge p$ is the entire sphere. The same description holds for a finite wedge with its common vertex. Every based continuous map among these spaces therefore preserves every skeleton and is cellular. For $p=0$ every map of the discrete vertex sets is cellular. In particular this applies to $f$, pinch, fold, wedge inclusions, collapses and wedge maps; the homotopy axiom applies to based homotopies between these cellular endpoints. Let $r$ be the geometric degree in [F1]. Then $[f]=r[\mathrm{id}]$ under pinch addition. We compare $r$ with the homological degree $d$ below. [F1, F3, F4, given]

1.2 Write $P:S^p\to S^p\vee S^p$ for the pinch and $F:S^p\vee S^p\to S^p$ for the fold, so that for based self-maps $\alpha,\beta$ the pinch sum is represented by $F\circ(\alpha\vee\beta)\circ P$; the two components $\pi_1P,\pi_2P$ are based degree-one maps, hence are based homotopic to the identity. [F1, F5, given]

1.3 For $p=0$ the only based self-maps are identity and collapse. Identity induces identity by functoriality; collapse factors through a point, whose reduced groups are zero by the empty-wedge clauses of [F3] and [F4], so it induces zero. These are also the integers acting on reduced $H_0(S^0;\mathbb Z)$ by [F6]. No degree is defined here using unreduced $H_0(S^0;\mathbb Z)\cong\mathbb Z^2$. [F3, F4, F6]

2.1 For homology, $P_*:\widetilde h_n(S^p)\to\widetilde h_n(S^p\vee S^p)$ has components $(\pi_1P)_*=(\pi_2P)_*=\mathrm{id}$ under the wedge isomorphism of [F3], hence is the diagonal; and $F_*$ is the sum map because $F$ restricts to the identity on each summand. Therefore $(F\circ(\alpha\vee\beta)\circ P)_*=\alpha_*+\beta_*$ for all based $\alpha,\beta$. [F3, F5, step 1.2]

2.2 For cohomology, $F^*$ is the diagonal and $P^*$ is the sum map under the wedge isomorphism of [F4], because $F$ restricts to the identity on each summand and the components of $P$ are degree one; therefore $(F\circ(\alpha\vee\beta)\circ P)^*=\alpha^*+\beta^*$ for all based $\alpha,\beta$. [F4, F5, step 1.2]

3.1 By step 1.1 and functoriality of $\widetilde h$, $f_*$ equals the $r$-fold sum of $\mathrm{id}_*$ in the group $\operatorname{End}(\widetilde h_n(S^p))$, which is multiplication by $r$ by step 2.1. For negative $r$, an inverse class has the negative induced map, since adding it to the original class gives a nullhomotopic map, which factors through the zero reduced group of a point. The same observation includes $r=0$. [F3, step 1.1, step 2.1]

3.2 By step 1.1 and functoriality of $\widetilde g$, $f^*$ equals the $r$-fold sum of $\mathrm{id}^*$ in the group $\operatorname{End}(\widetilde g^n(S^p))$, which is multiplication by $r$ by step 2.2, including $r<0$: the additive inverse class induces the negative endomorphism since its pinch sum with the original is null and hence induces zero through a point. [F4, step 1.1, step 2.2]

3.3 The same finite pinch calculation in ordinary integral homology identifies the two degree conventions. By [F6], the top homology of a finite wedge of $p$-spheres is free on the sphere inclusions: its cellular complex has a common vertex, one generator per $p$-cell, and zero boundary (also for $p=1$, since both endpoints attach to that vertex). The collapses give the corresponding coordinate projections. Thus pinch is diagonal and fold is addition in top homology, exactly as in step 2.1. Homotopy invariance [F6] and $[f]=r[\mathrm{id}]$ give $f_*[S^p]=r[S^p]$. By the definition [F2], $d=r$. [F2, F6, step 1.1, step 2.1]

4.1 Combining steps 1.3, 3.1 and 3.2 gives the asserted multiplication by the degree on every reduced homology and cohomology group of $S^p$. [step 1.3, step 3.1, step 3.2, step 3.3] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), Lemma 2.3 and Remark 2.2, printed pp. 4–5, where the degree action is proved for cohomology by factoring a positive-degree map through a pinch to a wedge followed by a folding map, with its negative-degree case left to a similar trick. Here pinch additivity proves the inverse-class action explicitly, and the ordinary cellular homology calculation identifies geometric and homological degrees.
