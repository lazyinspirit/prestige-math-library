---
id: ex-pontryagin-thom-map-of-the-standard-framed-equator
kind: example
title: "The Pontryagin-Thom map of the standard framed equator"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
  - def-the-standard-smooth-step-function
  - def-countable-choice
  - def-framed-cobordism-of-embedded-submanifolds
  - def-framing-of-a-normal-bundle
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-stabilized-framed-cobordism-colimit
  - lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
  - lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - thm-regular-value-formula-for-degree
proof_strategy: direct
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
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, framed submanifolds and Theorem B, printed pp.42-50"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 5.34: the canonically framed equatorial sphere is null bordant, printed p.43"
---

## Example

Assume $\mathrm{AC}_\omega$. For $m\ge1$ let $S^{m-1}\subseteq S^m$ be the equator, framed by the outward
unit normal of the closed northern hemisphere. The standard hemisphere sweep
in $S^m\times I$ is a compact neat framed cobordism from this framed equator to
the empty manifold, so the framed equator is framed null-cobordant and its
Pontryagin-Thom map $S^m\to S^1$ is nullhomotopic; for $m=1$ the two equator
points carry opposite signs and the signed count is $0$. Stabilizing this fixed $(m-1)$-dimensional equator raises its codimension, not its dimension, and suspends its zero collapse class. When $m=1$, this zero-dimensional example contrasts with a single positive point, which represents $+1$ in $\pi_1(S^1)$ and in the zeroth stable stem.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the sphere $S^m$ with its standard orientation, the equator $S^{m-1}=\{x\in S^m:x_{m+1}=0\}$, and the outward unit normal field $\nu_{\mathrm{eq}}$ of the closed northern hemisphere $H=\{x\in S^m:x_{m+1}\ge0\}$ along its boundary.

[F1] A framing of a closed embedded submanifold is a trivialization of its normal bundle; the normal bundle of the equator in $S^m$ is the rank-one bundle spanned by $\partial_s$ in the height coordinate $s=x_{m+1}$, and $\nu_{\mathrm{eq}}$ trivializes it ([[def-framing-of-a-normal-bundle]]).

[F2] The Pontryagin-Thom map of a closed framed codimension-$k$ submanifold is $p\circ\Phi_\varphi\circ c$; for the empty submanifold the tube is empty, the collapse is the constant map to the basepoint and the Pontryagin-Thom map of $\varnothing$ is the constant based map ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F3] Framed-cobordant closed framed submanifolds have based homotopic Pontryagin-Thom maps, the empty framed submanifold included ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]], [[def-framed-cobordism-of-embedded-submanifolds]]).

[F4] Framed cobordism classes of closed framed $0$-manifolds of $S^n$ are classified by the signed count, a single positively framed point realizes $+1$ and its orientation reversal $-1$, and degree is an isomorphism $\pi_n(S^n)\to\mathbb Z$ (computed below).

[F5] Equatorial stabilization sends the class of $(N,\varphi)$ to the class of the equatorial inclusion with the equatorial normal prepended, and the Pontryagin-Thom class of a stabilization is the suspension $E(\mathrm{PT}(N,\varphi))$ ([[def-stabilized-framed-cobordism-colimit]], [[lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is inherited from the framed-cobordism, transversality and Pontryagin--Thom suppliers ([[def-countable-choice]]). The finite signed count itself requires no choice.

## Verification

1.1 Using [A1] for the Pontryagin–Thom and regular-value degree suppliers, for a finite framed set in $S^n$, the centre of the collapse target has precisely that set as its regular preimage, with differential signs equal to its framing signs. The regular-value degree formula therefore gives degree equal to the signed count. Degree classifies based self-maps of $S^n$, and the fixed-codimension Pontryagin--Thom bijection transfers this classification to framed cobordism. A single positive point has degree $+1$ and its reversal degree $-1$. [A1, given, algebra]

1.2 (The equator and its framing.) The equator is a closed embedded $(m-1)$-submanifold of $S^m$; in the height coordinate $s=x_{m+1}$ its normal bundle is the rank-one bundle spanned by $\partial_s$, and the restriction of $\nu_{\mathrm{eq}}$ is a nonvanishing section, hence a framing. For $m=1$ the equator is the two-point set $\{(\pm1,0)\}$ and $\nu_{\mathrm{eq}}=(0,-1)$ at both points; with respect to the standard orientation of $S^1$, whose positive tangent is $(0,1)$ at $(1,0)$ and $(0,-1)$ at $(-1,0)$, the first framing is negative and the second positive. [F1, F4]

1.3 Let $\sigma$ be the smooth step function and put $h(t)=2t\,\sigma(8t-1)$. For $0\le t\le1/2$, take $W=\{(x,t)\in S^m\times I:x_{m+1}=h(t)\}$. Near $t=0$, $h=0$, so $W$ is the product of the equator with time. For $1/4\le t\le1/2$, $h(t)=2t$, and at the cap $(x,t)=(e_{m+1},1/2)$ the derivative $h'=2$ makes the defining function $x_{m+1}-h(t)$ a submersion. In local pole coordinates the surface is the smooth graph $t=x_{m+1}/2$; it has no cap boundary. Elsewhere on $W$ the height gradient in $S^m$ is nonzero. Thus $W$ is a compact neat embedded $m$-manifold with only the equatorial boundary at time zero and a literal product collar. The field $V=(-\nabla_{S^m}x_{m+1},h'(t))$ is a nonvanishing normal field: its two components cannot vanish together on $W$. Near time zero it is $(-e_{m+1},0)$, the outward normal of the northern hemisphere, with no time dependence. Trivialize the quotient normal by sending $[V]$ to $1$. This frames $W$ and extends the equator framing throughout its end collar. Hence $W$ is a framed null-cobordism. [F1, F3, construct]


2.1 (Nullhomotopy and the one-dimensional count.) By step 1.3 and [F3] the Pontryagin-Thom map of $(S^{m-1},\nu_{\mathrm{eq}})$ is based homotopic to the Pontryagin-Thom map of the empty framed submanifold, which is the constant map by [F2]; hence the framed equator is framed null-cobordant and its Pontryagin-Thom map $S^m\to S^1$ is nullhomotopic. For $m=1$ this is also visible in the classification of [F4]: the two equator points carry signs $-1$ and $+1$ by step 1.2, so their signed count is $0$ and their framed class is the class of the empty $0$-manifold. [F2, F3, F4, step 1.2, step 1.3]

3.1 Stabilizing this equator preserves its dimension $m-1$ and changes its ambient sphere from $S^m$ to $S^{m+1}$, hence its codimension from one to two. By [F5], its collapse class suspends from the zero element of $\pi_m(S^1)$ to zero in $\pi_{m+1}(S^2)$, and remains zero under iteration. For $m=1$ both this equator and a single positively framed point are zero-dimensional; by [F4] their classes are $0$ and $+1$, respectively. For $m>1$ a single point belongs to a different dimension and is not a generator of the equator's stable stem. [F4, F5, step 2.1] ∎
