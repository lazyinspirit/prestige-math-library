---
id: fs-the-connection-one-form-of-an-orthonormal-frame-is-frame-independent
kind: false-statement
title: A surface connection form depends on its frame
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-connection-one-form-rotation-law-on-an-oriented-surface
  - thm-gaussian-curvature-structure-equation
  - ex-the-euclidean-levi-civita-connection
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
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed p. 165 (PDF p. 181), equations (9.4): the frame equations are written in a frame, and the connection form changes with that frame. The explicit nonconstant-rotation witness below is computed locally."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, printed pp. 11–12 (PDF pp. 19–20), Lemma 2.1.2 and its frame rotation discussion: the connection form is frame dependent while its exterior derivative gives the curvature. The Euclidean witness is computed locally here."
---

## Statement

The following assertion is false.

**Claim.** Let $(M,g)$ be an oriented Riemannian surface and let
$(E_1,E_2)$, $(E'_1,E'_2)$ be smooth positively oriented $g$-orthonormal frames
on an open set $U\subseteq M$, with connection forms
$\omega(X)=g(\nabla_XE_1,E_2)$ and $\omega'(X)=g(\nabla_XE'_1,E'_2)$ in the
convention of this page. Then $\omega'=\omega$.

The claim fails already on the Euclidean plane: rotating a frame by the
nonconstant angle function $\varphi(x,y)=x$ changes the connection form from
$0$ to $dx$, although both forms have vanishing exterior derivative.

## Facts & Assumptions

**Given:** An oriented Riemannian surface, an open set $U$, two smooth positively oriented orthonormal frames on $U$, and the connection forms $\omega,\omega'$ in the convention of this page.

[F1] Rotation law: on each open patch $V$ carrying a smooth angle lift $\varphi:V\to\mathbb R$ with $E'_1=\cos\varphi\,E_1+\sin\varphi\,E_2$ and $E'_2=-\sin\varphi\,E_1+\cos\varphi\,E_2$, the connection forms satisfy $\omega'|_V=\omega|_V+d\varphi$ ([[thm-connection-one-form-rotation-law-on-an-oriented-surface]]).

[F2] Structure equation: with $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and $K=g(R(E_1,E_2)E_2,E_1)$, the connection form satisfies $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F3] In the Euclidean plane with standard coordinates and the standard flat connection, $\nabla_{\partial_x}\partial_x=\nabla_{\partial_x}\partial_y =\nabla_{\partial_y}\partial_y=0$ ([[ex-the-euclidean-levi-civita-connection]]).

## Refutation

**Proof technique:** explicit witness on the Euclidean plane.

1.1 Take $M=\mathbb R^2$ with its standard flat Riemannian metric, its standard orientation, $U=\mathbb R^2$, and the standard frame $E_1=\partial_x$, $E_2=\partial_y$, which is positively oriented and orthonormal. By [F3] each $\nabla_{\partial_i}\partial_j$ vanishes on $U$, so $\omega(X)=g(\nabla_XE_1,E_2)=0$ for every $X$; that is, $\omega=0$ identically. [F3, given]

2.1 Put $\varphi(x,y)=x\in C^\infty(U)$ and define the smooth positive frame $E'_1=\cos\varphi\,E_1+\sin\varphi\,E_2$, $E'_2=-\sin\varphi\,E_1+\cos\varphi\,E_2$. It is orthonormal with the same orientation as $(E_1,E_2)$ because a rotation by $\varphi$ preserves the metric and the orientation of the plane. The function $\varphi$ is a global smooth angle lift of this rotation, so [F1] applies on all of $U$ and gives $\omega'=\omega+d\varphi=dx$. Since $dx$ is not the zero form and $\omega=0$, the two frames have different connection forms; the asserted identity $\omega'=\omega$ fails. [F1, step 1.1, algebra]

3.1 The exterior derivative is nevertheless frame-independent here: by [F2] the structure form $-K\,dA$ equals $d\omega=0$ on the flat plane. Since $d\varphi=dx$, direct differentiation gives $d\omega'=d(dx)=0$. Thus the failure of frame-independence is exactly the exact-form ambiguity $d\varphi$ in [F1], and the invariant object is $d\omega$, not $\omega$ itself. [F1, F2, step 2.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” printed p. 165, equations (9.4), and Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.1, Lemma 2.1.2, both record that the connection form is attached to a chosen frame and that frame rotations change it by an exact form. The counterexample above computes the witness $\varphi(x,y)=x$ on the Euclidean plane directly from the library's Euclidean connection item and the page's rotation law and structure equation.
