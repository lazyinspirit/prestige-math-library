---
id: ex-empty-incoming-boundary-requires-zero-handles
kind: example
title: "An empty incoming boundary requires zero handles"
status: published
origin: pipeline
dependency_level: 7
deps: [prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, cor-index-zero-handles-create-components, cor-index-n-handles-cap-boundary-spheres]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "empty-boundary obstruction and the sphere presentation"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $n\ge1$. If a nonempty compact connected triad has $M_0=\varnothing$, then every handle
decomposition relative to $M_0$ begins with at least one $0$-handle: a
$k$-handle with $k\ge1$ attaches along the nonempty sphere
$S^{k-1}\times D^{n-k}$, which cannot be embedded in the empty initial boundary.
The sphere $S^n$ has the presentation with exactly one $0$-handle and one
$n$-handle. This shows that the nonempty-incoming-boundary hypothesis in the
elimination proposition cannot be dropped.

## Facts & Assumptions

**Given:** A nonempty compact connected triad $(W;M_0,M_1)$ with $n\ge1$ and $\mathrm{AC}_\omega$ with $M_0=\varnothing$ and $\dim W=n$, and a finite handle decomposition of $W$ relative to $M_0$ with indices $k_1,\dots,k_r$ and attaching embeddings $h_1,\dots,h_r$.

[F1] [[def-handle-decomposition-relative-to-the-incoming-boundary]]: a decomposition relative to $M_0$ is a finite ordered list of handles attached successively, the first to the boundary of the initial stage; when $M_0=\varnothing$ the initial stage is the empty manifold and the first handle attaches to the empty set.

[F2] [[cor-index-zero-handles-create-components]]: a $0$-handle attaches along the empty set $S^{-1}\times D^n$ and adds one disjoint $n$-disk component.

[F3] [[cor-index-n-handles-cap-boundary-spheres]]: an $n$-handle attaches along its whole boundary sphere $S^{n-1}$. For $n\ge2$ it fills a boundary component diffeomorphic to $S^{n-1}$; for $n=1$ its attaching $S^0$ is a pair of boundary points, possibly in different components.

[F4] [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]]: Assume $\mathrm{AC}_\omega$. A connected triad with nonempty incoming boundary admits a presentation relative to that boundary with no $0$-handles; when the incoming boundary is empty, exactly the $0$-handles needed to create the components remain.

[F5] [[thm-morse-functions-and-handle-decompositions-correspond]]: Assume $\mathrm{AC}_\omega$. Every finite handle decomposition of a compact triad relative to its incoming face is induced by an adapted excellent Morse function with one critical point per handle, of the same index (and conversely).

[A1] For $k\ge1$ the attaching region $S^{k-1}\times D^{n-k}$ is nonempty: $S^{k-1}\ne\varnothing$ for $k\ge1$, and $D^{n-k}\ne\varnothing$ for $0\le k\le n$. For $k=0$ the attaching region is $S^{-1}\times D^n=\varnothing$.

## Verification

**Proof technique:** direct.

1.1 The initial stage of any presentation relative to $M_0=\varnothing$ is empty, so its boundary is empty as well, and the first attaching embedding $h_1$ must map into it; hence the first handle must have empty attaching region. By [A1] this happens exactly for $k=0$: the attaching region of a $0$-handle is $S^{-1}\times D^n=\varnothing$, while a $k$-handle with $k\ge1$ has nonempty attaching region and cannot be attached to the empty initial boundary. Therefore every presentation begins with at least one $0$-handle. [F1, A1, given, algebra]

2.1 A connected manifold with empty incoming boundary needs at least one $0$-handle, since the first stage is empty and only a $0$-handle creates a component by [F2]; and by [F4] exactly the $0$-handles needed to create the components of $W$ remain, which for connected $W$ is one $0$-handle. Hence the elimination of $0$-handles is impossible when $M_0=\varnothing$, and the hypothesis $M_0\ne\varnothing$ in [F4] is necessary. [F2, F4, step 1.1, algebra]

3.1 The sphere example: the closed $n$-sphere is the union of two closed disks glued along their common boundary sphere, $S^n=D^n\cup_{S^{n-1}}D^n$. Read the first disk as a $0$-handle and the second as an $n$-handle attached along its whole boundary $S^{n-1}$, which by [F3] fills the whole boundary sphere and produces $S^n$. This presentation has exactly one $0$-handle and one $n$-handle, and no other handles, in agreement with the fact that a connected manifold with $M_0=\varnothing$ keeps exactly one $0$-handle by step 2.1 and that the $n$-handle closes the remaining boundary sphere. [F3, step 2.1, construct]

4.1 By [F5] the presentation of step 3.1 is realized by a Morse function on the triadic description of $S^n$ with two critical points, of indices $0$ and $n$; this is the standard round-sphere height function with a minimum and a maximum. In particular the sphere carries a presentation with exactly one $0$-handle as claimed, and the presentation of any connected triad with empty incoming boundary must begin with a $0$-handle, so the elimination proposition cannot be applied without change in that case. [F3, F5, step 1.1, step 3.1, algebra] ∎
