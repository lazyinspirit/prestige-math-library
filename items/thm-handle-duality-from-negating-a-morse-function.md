---
id: thm-handle-duality-from-negating-a-morse-function
kind: theorem
title: "Handle duality from negating a Morse function"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, thm-morse-functions-and-handle-decompositions-correspond, def-dual-handle-decomposition, thm-morse-lemma, def-nondegenerate-critical-point-nullity-index-and-coindex, cor-unstable-disk-is-the-handle-core, cor-index-zero-handles-create-components, cor-index-n-handles-cap-boundary-spheres, def-countable-choice]
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
proof_strategy: "negation of the function and reversal of the triad"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact triad with adapted
excellent Morse function $f$ and adapted field $X$. Then $1-f$ is an adapted
excellent Morse function for the reversed triad $(W;M_1,M_0)$, with the same
critical points, of indices $n-\operatorname{ind}(p)$, and $-X$ is an adapted
field for $1-f$. The handle decomposition of $1-f$ relative to $M_1$ is the
dual of the decomposition of $f$ relative to $M_0$: each $k$-handle corresponds
to an $(n-k)$-handle in reverse order, and attaching and belt spheres are
interchanged.

## Facts & Assumptions

[F1] [[def-smooth-cobordism-triad-for-morse-theory]]: A smooth cobordism triad $(W;M_0,M_1)$ is a compact smooth $n$-manifold with boundary, for $n\ge1$ two closed embedded $(n-1)$-submanifolds with $\partial W=M_0\sqcup M_1$, and fixed collars; for $n=0$ the faces and collar domains are empty, with no dimension-$-1$ manifold; the reversed triad is $(W;M_1,M_0)$ with the faces exchanged.

[F2] [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair $(f,X)$ has $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, $f$ constant on the faces, all critical points interior, nondegenerate and outside a fixed collar, and $X$ a complete downward gradient-like field pointing outward along $M_0$ and inward along $M_1$; excellent means distinct critical points have distinct values.

[F3] [[thm-morse-lemma]] and [[def-nondegenerate-critical-point-nullity-index-and-coindex]]: near a nondegenerate critical point of index $\lambda$ there are coordinates with $f=f(p)-\sum_{i\le\lambda}(x^i)^2+\sum_{i>\lambda}(x^i)^2$; the index is the number of negative squares of the Hessian and equals $n$ minus the index of the negated Hessian.

[F4] [[thm-morse-functions-and-handle-decompositions-correspond]]: Assume $\mathrm{AC}_\omega$. An adapted excellent Morse function on a compact triad determines a finite handle decomposition relative to the incoming face with one handle of index $\operatorname{ind}(p)$ per critical point, whose attaching sphere is the boundary of the unstable disk of the adapted field transported to the lower regular level.

[F5] [[def-dual-handle-decomposition]]: Given a handle decomposition of the triad relative to $M_0$, the dual decomposition is the presentation of the reversed triad $(W;M_1,M_0)$ relative to $M_1$ with the same handle bodies read with the two disk factors exchanged, attached in reverse order; a $k$-handle becomes an $(n-k)$-handle, the attaching region of the original handle is the outgoing region of the dual handle, the attaching sphere of the original handle is the belt sphere of the dual handle, and conversely.

[F6] [[cor-unstable-disk-is-the-handle-core]]: For the adapted descending field used in the handle construction, the unstable disk of $p$ down to the lower regular level is the core of the attached handle and its boundary is the attaching sphere.

[F7] [[cor-index-zero-handles-create-components]] and [[cor-index-n-handles-cap-boundary-spheres]]: a $0$-handle attaches along the empty set and adds a disjoint $n$-disk; an $n$-handle attaches along its whole boundary sphere.

[F8] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

## Proof

**Given:** The compact triad $(W;M_0,M_1)$ with adapted excellent Morse function $f$ and adapted field $X$, and $n=\dim W$.

1.1 The negated function is Morse with the same critical points. Since $d(1-f)=-df$, the critical set of $1-f$ equals $\operatorname{Crit}(f)$; at a critical point $p$ the Hessian satisfies $\operatorname{Hess}_p(1-f)=-\operatorname{Hess}_p(f)$, so the nondegeneracy is preserved and the negative eigenspace of $f$ becomes the positive eigenspace of $1-f$: by [F3], $\operatorname{ind}_{1-f}(p)=n-\operatorname{ind}_f(p)$. The critical values $1-c$ are again pairwise distinct, so $1-f$ is excellent, and its critical points lie outside the same collars. [F2, F3, given, algebra]

1.2 The negated field. Off the critical set, $d(1-f)(-X)=df(X)<0$, and in the Morse coordinates $(u,v)$ of $f$ at $p$, where $f=f(p)-|u|^2+|v|^2$ and $X=(2u,-2v)$, one has $1-f=(1-f(p))+|u|^2-|v|^2$ and $-X=(-2u,2v)$; writing the coordinates in the order $(v,u)$ exhibits $-X$ in the model form required of a downward gradient-like field for $1-f$. Negating a complete field preserves completeness, and $-X$ points inward along $M_0$ and outward along $M_1$, which is exactly the adapted boundary behaviour for the reversed triad $(W;M_1,M_0)$: its incoming face is $M_1$ and its outgoing face is $M_0$. [F1, F2, F3, given, algebra]

2.1 The reversed function is adapted and excellent on the reversed triad. Indeed $(1-f)^{-1}(0)=f^{-1}(1)=M_1$ and $(1-f)^{-1}(1)=f^{-1}(0)=M_0$, the function $(1-f)$ is constant on the faces because $f$ is, and by steps 1.1 and 1.2 it is Morse with all critical points interior and outside the fixed collars, so $(1-f,-X)$ is an adapted pair for $(W;M_1,M_0)$; it is excellent by step 1.1. [F1, F2, step 1.1, step 1.2, algebra]

2.2 The unstable disk of $-X$ is the stable disk of $X$. In the Morse coordinates $(u,v)$ of [F3] at $p$, the field $X$ is $(2u,-2v)$ and $-X$ is $(-2u,2v)$; trajectories of $X$ converge to $p$ backwards along the $u$-directions and forwards along the $v$-directions, while trajectories of $-X$ converge to $p$ backwards along the $v$-directions and forwards along the $u$-directions. Hence the unstable disk of $-X$ at $p$ is the stable disk of $X$ at $p$, of dimension $n-\operatorname{ind}(p)$, and the unstable disk of $X$ at $p$ is the stable disk of $-X$. [F3, F6, step 1.2, algebra]

3.1 The induced decomposition of the reversed triad. By [F4] applied to the adapted excellent pair $(1-f,-X)$ on $(W;M_1,M_0)$, the function $1-f$ determines a finite handle decomposition of $W$ relative to $M_1$, with one handle of index $n-\operatorname{ind}(p)$ for each critical point $p$, and the attaching sphere of that handle is the boundary of the unstable disk of $p$ for the field $-X$, transported to the lower regular level of $1-f$. The order of the handles is the order of increasing values of $1-f$, that is, the reverse of the order of increasing values of $f$. [F4, F8, step 1.1, step 2.1, algebra]

4.1 The decomposition is the dual one. In the decomposition of $f$ relative to $M_0$, the handle at $p$ has index $k=\operatorname{ind}(p)$, its core is the unstable disk of $X$ at $p$ by [F6], and its belt sphere is the boundary of the complementary disk, which is the stable disk read in the outgoing boundary; correspondingly, in the decomposition of $1-f$ relative to $M_1$, the handle at $p$ has index $n-k$, its core is the unstable disk of $-X$, that is the stable disk of $X$, and its attaching sphere is the flow-transported boundary of that disk. Comparing with [F5], the two presentations have the same handle bodies with the disk factors exchanged, the order is reversed, the attaching region of each handle of the first presentation is the outgoing region of the corresponding handle of the second, and the attaching and belt spheres of each handle are interchanged. Therefore the decomposition of $1-f$ relative to $M_1$ is exactly the dual decomposition of the decomposition of $f$ relative to $M_0$. The endpoint cases are included: a $0$-handle of the first presentation, a disjoint disk, corresponds to an $n$-handle of the dual presentation, and conversely by [F7], with the same interchange of spheres. [F4, F5, F6, F7, step 2.2, step 3.1, algebra]

5.1 Conclusion. The function $1-f$ is an adapted excellent Morse function for the reversed triad with the same critical points and indices $n-\operatorname{ind}(p)$, the field $-X$ is adapted for it, and by step 4.1 the handle decomposition of $1-f$ relative to $M_1$ is the dual of the decomposition of $f$ relative to $M_0$, with $k$-handles corresponding to $(n-k)$-handles in reverse order and with attaching and belt spheres interchanged. This is Wall's duality argument via $-f$; only the collar, handle and correspondence suppliers are used, through $\mathrm{AC}_\omega$. [F2, F4, F5, step 2.1, step 4.1, algebra] ∎
