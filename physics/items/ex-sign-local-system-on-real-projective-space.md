---
id: ex-sign-local-system-on-real-projective-space
kind: example
title: Sign local system on real projective space
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cellular-chains-compute-homology-with-local-coefficients, prop-the-manifold-orientation-system-is-a-local-system, thm-fundamental-group-of-the-circle, thm-higher-dimensional-spheres-are-simply-connected, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.1, Exercise 77, pp.99–100
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

For $n=1$, identify $\pi_1(\mathbb {RP}^1)\cong\mathbb Z$ and let
$m\in\mathbb Z$ act on $\mathbb Z_{\mathrm{sgn}}$ as multiplication by
$(-1)^m$. For $n\ge2$, let the unique nonidentity element
$g\in\pi_1(\mathbb {RP}^n)\cong\mathbb Z/2$ act as $-1$. With one cell in
every degree $0\le k\le n$, the cellular differential is zero for even $k$
and multiplication by $2$ up to a harmless sign for odd $k$. Thus
$$H_k(\mathbb {RP}^n;\mathbb Z_{\mathrm{sgn}})\cong\begin{cases}\mathbb Z/2,&k=0,\\\mathbb Z/2,&0<k<n\text{ and }k\text{ is even},\\0,&0<k<n\text{ and }k\text{ is odd},\\\mathbb Z,&k=n\text{ and }n\text{ is even},\\0,&k=n\text{ and }n\text{ is odd},\end{cases}$$
and it is zero outside $0\le k\le n$. In particular the top group is $\mathbb Z$ exactly when $n$ is even; in that case the sign system is the orientation system.

## Facts & Assumptions

**Given:** $n\ge1$, the standard projective CW structure, and the sign system.

[F1] [[thm-cellular-chains-compute-homology-with-local-coefficients]] evaluates lifted group-ring incidence matrices through monodromy.

[F2] [[prop-the-manifold-orientation-system-is-a-local-system]] identifies orientation monodromy with the orientation character.

[F3] The degree map identifies the fundamental group of the circle with $\mathbb Z$, sending the positive once-around loop to $1$ ([[thm-fundamental-group-of-the-circle]]).

[F4] The antipodal self-map of $S^n$, for $n\ge1$, has degree $(-1)^{n+1}$ ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]).

[F5] For every $n\ge2$, the sphere $S^n$ is simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F6] The deck group of a universal cover of a connected, locally path-connected, semilocally simply connected base is its fundamental group ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

## Proof

**Proof technique:** direct.

1.1 Compute the cellular differential, including $n=1$. For $n=1$, the map $t\mapsto[\cos(\pi t):\sin(\pi t)]$ identifies $\mathbb R/\mathbb Z$ with $\mathbb {RP}^1$. Under [F3], the positive once-around loop is a generator $g$ of its infinite cyclic fundamental group. Choose the vertex lift at $0\in\mathbb R$ and the lifted open edge from $0$ to $1$. Its boundary is [F1, F3, F5, F6]

$$\partial\widetilde e_1=g\widetilde v-\widetilde v.$$

Evaluation through the action $g\mapsto-1$ gives $-2$. Choosing the opposite edge or vertex-lift convention gives $g^{-1}-1$, which also evaluates to $-2$; reversing its orientation changes this to $2$. This is a direct universal-cover calculation on $\mathbb R$, not an assertion that $S^1\to\mathbb {RP}^1$ is universal.

For $n\ge2$, the antipodal quotient map $S^n\to\mathbb {RP}^n$ is a two-sheeted cover; [F5] makes it the universal cover. Projective coordinate charts make the connected base locally path-connected and semilocally simply connected, so [F6] identifies its fundamental group with the deck group $\langle g\mid g^2=1\rangle$. In the lifted standard projective CW structure, the two hemispherical faces of a lifted $k$-cell contribute $1$ and $(-1)^kg$: the antipodal gluing preserves the induced face orientation for even $k$ and reverses it for odd $k$. Thus the group-ring boundary is $1+(-1)^kg$. Evaluating at $g=-1$ gives $1-(-1)^k$, hence zero for even $k$ and $2$ for odd $k$. Together with the direct $n=1$ calculation, [F1] gives the asserted differential in every allowed dimension. Reversing a cell orientation changes only its harmless overall sign.

2.1 The resulting complex has one copy of $\mathbb Z$ in each degree. For $0<k<n$, an even $k$ has zero outgoing differential and incoming image $2\mathbb Z$, giving $\mathbb Z/2$; an odd $k$ has injective outgoing differential, giving zero. At degree zero, $d_1=2$ gives $\mathbb Z/2$. At the top there is no incoming differential, so the kernel is $\mathbb Z$ for even $n$ and zero for odd $n$. This proves the table. [step 1.1]

3.1 Compare with the orientation system in both ranges. When $n=1$, the displayed identification with $\mathbb R/\mathbb Z$ gives the projective line its usual circle orientation. Its orientation character is therefore trivial, whereas the positive generator acts by $-1$ on $\mathbb Z_{\mathrm{sgn}}$. Hence the sign system is not the orientation system, consistently with the zero top sign homology in step 2.1. [F2, F4, step 1.1, step 2.1]

For $n\ge2$, the deck transformation of the universal sphere cover is antipodal and has degree $(-1)^{n+1}$ by [F4]. It reverses local orientation exactly when $n$ is even. By [F2], its orientation monodromy is therefore $-1$ exactly for even $n$, so $\mathbb Z_{\mathrm{sgn}}$ equals $\mathcal O_{\mathbb {RP}^n}$ exactly in that case; the top $\mathbb Z$ in step 2.1 is then its twisted fundamental class. This proves both directions of “exactly when”: $n=1$ was separated, odd $n\ge3$ has trivial orientation monodromy but nontrivial sign monodromy, and even $n$ has the same nontrivial monodromy in both systems.

For $n=0$, outside the stated range, $\mathbb {RP}^0$ is a point with trivial fundamental group, so no nontrivial sign system exists and its ordinary $H_0$ is $\mathbb Z$. All lifts and orientations above are individually specified finite data, so no AC is used. ∎
