---
id: prop-dual-elimination-of-top-index-handles
kind: proposition
title: "Dual elimination of top-index handles"
status: draft
origin: pipeline
dependency_level: 7
deps: [def-smooth-cobordism-triad-for-morse-theory, def-dual-handle-decomposition, thm-handle-duality-from-negating-a-morse-function, prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles, thm-morse-functions-and-handle-decompositions-correspond, cor-index-n-handles-cap-boundary-spheres, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "duality applied to the elimination of zero handles in the reversed triad"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact connected triad with
$M_1\ne\varnothing$ and $\dim W=n$. Then $W$ admits a handle decomposition
relative to $M_0$ with no $n$-handles; if $M_1$ is disconnected the dual
presentation ends with the corresponding connecting $(n-1)$-handles coming
from the connecting $1$-handles in the reversed triad, and still has no
$n$-handles. Equivalently, the $n$-handles of a presentation relative to $M_0$
are the duals of the $0$-handles in the reversed triad, so eliminating those
$0$-handles eliminates these $n$-handles.

## Facts & Assumptions

[F1] [[def-smooth-cobordism-triad-for-morse-theory]]: the reversed triad of $(W;M_0,M_1)$ is $(W;M_1,M_0)$, a compact triad with the same collars and the faces exchanged; no orientation is used.

[F2] [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]]: Assume $\mathrm{AC}_\omega$. A compact connected triad whose incoming boundary is nonempty admits a handle decomposition relative to that boundary with no $0$-handles; if that incoming boundary has $k$ components the presentation begins with $k-1$ connecting $1$-handles; if the incoming boundary is empty, exactly the $0$-handles needed to create the components remain.

[F3] [[thm-morse-functions-and-handle-decompositions-correspond]]: Assume $\mathrm{AC}_\omega$. Every finite handle decomposition of a compact triad relative to its incoming face is induced by an adapted excellent Morse function with one critical point per handle, of the same index.

[F4] [[thm-handle-duality-from-negating-a-morse-function]]: Assume $\mathrm{AC}_\omega$. If $f$ is adapted excellent on a compact triad then $1-f$ is adapted excellent on the reversed triad with indices $n-\operatorname{ind}(p)$ at the same critical points, and its handle decomposition relative to the opposite face is the dual of the decomposition of $f$.

[F5] [[def-dual-handle-decomposition]]: in the dual presentation a $k$-handle becomes an $(n-k)$-handle, the order is reversed, and attaching and belt spheres are interchanged.

[F6] [[cor-index-n-handles-cap-boundary-spheres]]: an $n$-handle attaches along its whole boundary sphere $S^{n-1}$ and caps it; a $0$-handle attaches along the empty set and creates a component.

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

## Proof

**Given:** The compact connected triad $(W;M_0,M_1)$ with $\dim W=n$ and $M_1\ne\varnothing$.

1.1 The reversed triad $(W;M_1,M_0)$ of [F1] is compact and connected, its incoming face is $M_1\ne\varnothing$, and its outgoing face is $M_0$, which may be empty. By [F2] applied to the reversed triad, $W$ admits a handle decomposition relative to $M_1$ with no $0$-handles; if $M_1$ has $k$ components, that presentation begins with $k-1$ connecting $1$-handles. Every handle body of this presentation is the same subset of $W$ as in any other presentation, and the indices are recorded with respect to the reversed orientation of the cobordism. [F1, F2, given, construct]

2.1 Realize the presentation by a Morse function: by [F3] the decomposition of step 1.1 is induced by an adapted excellent Morse function $f$ on the reversed triad $(W;M_1,M_0)$. Applying [F4], the function $1-f$ is adapted excellent on the original triad $(W;M_0,M_1)$, with the same critical points and with indices transformed by $k\mapsto n-k$, and its handle decomposition relative to $M_0$ is the dual of the decomposition of $f$, in the sense of [F5]. [F3, F4, F5, F7, step 1.1, construct]

3.1 Since the presentation of step 1.1 has no $0$-handles, its dual presentation has no $n$-handles, because a $0$-handle becomes an $n$-handle under $k\mapsto n-k$ by [F5]. The connecting $1$-handles of step 1.1, which join the $k$ components of $M_1$ when $M_1$ is disconnected, become handles of index $n-1$ in the dual presentation, again by [F5], and they come last because the order is reversed. The number of handles of each index is preserved under duality, so the resulting presentation of $W$ relative to $M_0$ has the same number of $n$-handles as the reversed presentation has $0$-handles, namely zero. [F5, step 1.1, step 2.1, algebra]

4.1 Equivalently, the $n$-handles of any presentation relative to $M_0$ are the duals of the $0$-handles of the reversed presentation: a $0$-handle is an $n$-disk attached along the empty set [F6], and its dual is an $n$-handle attached along the whole boundary sphere [F6], so eliminating the $0$-handles of the reversed presentation by [F2] eliminates exactly the $n$-handles of the dual presentation relative to $M_0$. This is the dual endpoint elimination; the argument uses the duality, correspondence and elimination suppliers, and through them $\mathrm{AC}_\omega$. [F2, F5, F6, step 3.1, algebra] ∎
