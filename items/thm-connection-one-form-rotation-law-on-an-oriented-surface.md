---
id: thm-connection-one-form-rotation-law-on-an-oriented-surface
kind: theorem
title: Rotation law for the surface connection form
status: draft
origin: pipeline
deps:
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - prop-exterior-derivative-of-a-function-is-its-differential
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed p. 165 (PDF p. 181), equations (9.4), lines 6471–6488: Lee's frame equations use ω_std(X)=g(E₁,∇_X E₂)=−ω(X) relative to this pair. The frame-rotation identity is derived directly in the item, not attributed to this passage."
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, printed p. 11 (PDF p. 18), lines 604–615: Datar's frame equations use ω_std(X)=g(E₁,∇_X E₂)=−ω(X) relative to this pair. The frame-rotation identity is derived directly in the item, not attributed to this passage."
---

## Statement

Let $(M,g)$ be an oriented Riemannian surface and $U\subseteq M$ open with
specified smooth positively oriented $g$-orthonormal frames $(E_1,E_2)$ and
$(E'_1,E'_2)$, with connection forms $\omega$ and $\omega'$ in the convention
$\omega(X)=g(\nabla_XE_1,E_2)$. On each open patch $V\subseteq U$ where a
smooth angle lift $\varphi:V\to\mathbb R$ is supplied with
$$E'_1=\cos\varphi\,E_1+\sin\varphi\,E_2,\qquad E'_2=-\sin\varphi\,E_1+\cos\varphi\,E_2,$$
the forms satisfy $\omega'|_V=\omega|_V+d\varphi$, where $d\varphi(X)=X(\varphi)$.
Any two such lifts of the same frame rotation differ by a locally constant
element of $2\pi\mathbb Z$, so their differentials agree on overlaps; no global
angle lift is asserted.

## Facts & Assumptions

**Given:** An oriented Riemannian surface with two specified positive orthonormal frames on an open set $U$, and an open patch $V\subseteq U$ carrying a smooth real function $\varphi$ that expresses the rotation from the first frame to the second.

[F1] The connection forms of the two frames are defined by $\omega(Y)=g(\nabla_YE_1,E_2)$ and $\omega'(Y)=g(\nabla_YE'_1,E'_2)$, and the frame equations $\nabla_YE_1=\omega(Y)E_2$ and $\nabla_YE_2=-\omega(Y)E_1$ hold ([[def-connection-one-form-of-an-oriented-orthonormal-frame]]).

[F2] For a smooth function $f$ on a manifold, $df(X)=Xf$ for every smooth vector field $X$ ([[prop-exterior-derivative-of-a-function-is-its-differential]]).

## Proof

**Proof technique:** Differentiate the rotated frame vector with the product rule and read off the defining inner product.

1.1 Fix a smooth vector field $X$ on $V$. Expanding $E'_1=\cos\varphi\,E_1+\sin\varphi\,E_2$ and differentiating with the product rule, the frame equations of [F1] give $\nabla_XE'_1=-\sin\varphi\,(X\varphi)E_1+\cos\varphi\,\omega(X)E_2+\cos\varphi\,(X\varphi)E_2-\sin\varphi\,\omega(X)E_1=(\omega(X)+X\varphi)E'_2$. [F1, given, algebra]

2.1 Since $(E'_1,E'_2)$ is a $g$-orthonormal frame, $g(E'_2,E'_2)=1$; substituting the expansion of step 1.1 into the definition $\omega'(X)=g(\nabla_XE'_1,E'_2)$ from [F1] yields $\omega'(X)=\omega(X)+X\varphi$ for every smooth $X$ on $V$. [F1, step 1.1, algebra]

3.1 By [F2] applied to the smooth function $\varphi$ on $V$, the one-form $d\varphi$ satisfies $d\varphi(X)=X\varphi$; hence step 2.1 states the identity of one-forms $\omega'|_V=\omega|_V+d\varphi$ on $V$. [F2, step 2.1]

4.1 Let $\widetilde\varphi$ be a second smooth angle lift of the same rotation on a connected open set $W\subseteq V$. Expanding both expressions for $E'_1$ in the basis $(E_1,E_2)$ gives $\cos\widetilde\varphi=\cos\varphi$ and $\sin\widetilde\varphi=\sin\varphi$; hence $\widetilde\varphi-\varphi$ takes values in $2\pi\mathbb Z$, and by continuity it is constant on $W$, so $d\widetilde\varphi=d\varphi$ on $W$. If $W$ is empty the identity is vacuous, and if $\varphi$ is constant then $d\varphi=0$, so $\omega'|_V=\omega|_V$ there. [given, step 2.1, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 prove the stated identity on every supplied patch $V$ and its independence of the choice of lift on overlaps; no global angle lift is constructed or required. [step 3.1, step 4.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” printed p. 165, equations (9.4), records the frame equations in the opposite sign convention $\omega_{\mathrm{std}}=-\omega$; Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.1, printed p. 11, records the same frame equations. The rotation identity is derived above from those frame equations in the present sign convention; the sources are not claimed to state the identity in this sign.
