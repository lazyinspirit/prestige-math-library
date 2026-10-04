---
id: thm-separation-of-regular-curve-components-by-point-blowups
kind: theorem
title: Separation of finitely many curve components by point blowups
status: published
origin: pipeline
deps: [lem-intersection-multiplicity-drop-under-point-blowup, lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups, def-intersection-multiplicity-of-closed-subschemes, def-strict-transform-closed-subscheme, def-blowup-scheme-along-ideal, def-axiom-of-choice, thm-blowup-closed-immersion-transform-universal, def-integral-scheme, def-locally-noetherian-and-noetherian-scheme, def-dimension-noetherian-topological-space, lem-normalization-factors-through-blowup-of-curve-point, lem-point-blowup-of-integral-curve-is-finite]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, tag 0BI8 (Lemma 54.15.4)"
      url: https://stacks.math.columbia.edu/tag/0BI8
      locator: "Lemma 54.15.4 and its proof: reduce to regular Y_i by Lemma 54.15.2, then repeatedly decrease the maximum of m_p(Y_i cap Y_j) using Lemma 54.15.3, and finally separate the curves when the maximum is one; complete text retrieved and read 2026-10-03."
    - title: "The Stacks Project, tag 0BI7 (Lemma 54.15.3)"
      url: https://stacks.math.columbia.edu/tag/0BI7
      locator: "Lemma 54.15.3 supplies both the strict decrease of the maximum multiplicity and the separation of two branches meeting with multiplicity one; retrieved 2026-10-03."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Noetherian
scheme and let $Y_1,\dots,Y_r\subseteq X$ be pairwise distinct integral closed
subschemes of dimension one, each with finite normalization. Then there exists a
finite sequence of blowups of $X$ at closed points such that the strict
transforms $Y_i'$ in the final blowup are pairwise disjoint regular curves
([[def-strict-transform-closed-subscheme]]).

## Facts & Assumptions

[F1] Regularization in the ambient scheme: for an integral one-dimensional
closed subscheme $Y\subseteq X$ with finite normalization there is a finite
sequence of blowups of $X$ at closed points whose final strict transform of $Y$
is a regular curve; the sequence may be taken to consist of blowups at the
images of intrinsic centers ([[lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups]]).

[F2] Preservation of regularity: if $Y$ is an integral curve and $\pi:X'\to X$
is the blowup at a closed point $p$ with $\mathcal O_{Y,p}$ regular, then $\pi$
restricts to an isomorphism from the strict transform of $Y$ to $Y$; if $p$ is
not a point of $Y$, the strict transform is the pullback isomorphic to $Y$. In
particular point blowups preserve regularity and integrality of an
already-regular curve ([[lem-intersection-multiplicity-drop-under-point-blowup]],
[[thm-blowup-closed-immersion-transform-universal]]).

[F3] Multiplicity drop and separation: let $Y,Z$ be distinct integral curves in
the ambient scheme, $p\in Y\cap Z$ a closed point with $\mathcal O_{Y,p}$
regular, and let $\pi:X'\to X$ be the blowup at $p$ with strict transforms
$Y',Z'$. Then the unique point $q$ of $Y'$ over $p$ satisfies
$m_q(Y'\cap E)=1$, every point of $Y'\cap Z'$ over $p$ has multiplicity
strictly smaller than $m_p(Y\cap Z)$, and if $m_p(Y\cap Z)=1$ then $Y'$ and
$Z'$ are disjoint over $p$
([[lem-intersection-multiplicity-drop-under-point-blowup]],
[[def-intersection-multiplicity-of-closed-subschemes]]).

[F4] Two distinct integral closed subschemes of dimension one in a Noetherian
scheme meet in a finite set of closed points: a one-dimensional irreducible
component of the intersection would be a closed irreducible curve contained in
both, hence equal to each of them, contrary to distinctness; a Noetherian space
of dimension zero is finite
([[def-integral-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[def-dimension-noetherian-topological-space]]).

[F5] The Axiom of Choice is assumed, used to choose finitely many
non-regular or maximum-multiplicity centers at each of the finitely many stages
([[def-axiom-of-choice]]).

## Proof

**Given:** AC, a Noetherian scheme $X$ and pairwise distinct integral one-dimensional closed subschemes $Y_1,\dots,Y_r\subseteq X$, each with finite normalization.

1.1 Apply [F1] successively to the strict transforms of $Y_1,\ldots,Y_r$. These applications remain legitimate: a blowup centered away from another component leaves it unchanged; at a center on that component, its strict transform is its intrinsic point blowup ([[thm-blowup-closed-immersion-transform-universal]]), which is finite and retains the same finite normalization ([[lem-point-blowup-of-integral-curve-is-finite]], [[lem-normalization-factors-through-blowup-of-curve-point]]). Thus every not-yet-regularized component still satisfies the finite-normalization hypothesis of [F1]. During each later sequence, every already regular component stays regular by [F2]. Since there are finitely many components and each intrinsic regularization is finite, after finitely many ambient point blowups all strict transforms are regular integral curves. Rename these curves and the current ambient scheme $Y_1,\ldots,Y_r$ and $X$. [F1, F2, given]

2.1 (The multiplicity maximum) By [F4] each intersection $Y_i\cap Y_j$ with $i\ne j$ is a finite set of closed points, so the set of numbers $m_p(Y_i\cap Y_j)$, over all pairs and all intersection points, is finite. If it is empty, the $Y_i$ are already pairwise disjoint and we are done. Otherwise let $n\ge1$ be its maximum. [F3, F4, step 1.1]

3.1 (Phase $n\ge2$: lowering the maximum) Suppose $n\ge2$ and let $p_1,\dots,p_s$ be the finitely many points at which the maximum $n$ is attained. Blow up these points one after another (each is a closed point of the current ambient scheme, and the strict transforms are updated). For each pair $(i,j)$ meeting at a blown-up point $p_t$, [F3] shows that every multiplicity of $Y_i'\cap Y_j'$ over $p_t$ is strictly smaller than $n$; new intersections arise only with the exceptional curves of the blowups and have multiplicity $1$; and the local data at points that are not blown up are unchanged. Hence after these finitely many blowups either no pairwise intersection remains, in which case the curves are already disjoint and the process stops, or the maximum of the remaining pairwise multiplicities is strictly smaller than $n$. All strict transforms remain regular integral curves by [F2], and their pairwise intersections remain finite. Repeating this phase at most $n-1$ times, always lowering the current maximum, the process either stops with pairwise disjoint curves or reaches the case in which the maximum is $1$. Every phase consists of finitely many blowups, so the total number of blowups is finite. [F2, F3, step 2.1]

3.2 (Phase $n=1$: separating the components) Assume the maximum of all pairwise multiplicities is $1$ and let $p_1,\dots,p_s$ be the finitely many points lying in at least two of the curves. Blow up these points one after another. For each pair $(i,j)$ meeting at a point $p_t$ with $m_{p_t}(Y_i\cap Y_j)=1$, the final clause of [F3] shows that $Y_i'$ and $Y_j'$ are disjoint over $p_t$; after the finitely many blowups of this phase, every pair of strict transforms meets over none of the points $p_t$. Since intersections can only occur at the $p_t$ (the strict transforms agree with the original curves away from the blown-up points), the final strict transforms $Y_i'$ are pairwise disjoint, and they remain regular curves by [F2]. [F2, F3, step 2.1]

4.1 Combining steps 1.1, 3.1 and 3.2: first make all components regular, then lower the maximum pairwise multiplicity by finitely many point blowups until either no intersection remains or the maximum is $1$; in the latter case separate the remaining multiplicity-$1$ contacts by finitely many further point blowups. The composite is a finite sequence of blowups of $X$ at closed points whose final strict transforms are pairwise disjoint regular curves, which is the assertion. [F5, step 1.1, step 3.1, step 3.2] ∎
