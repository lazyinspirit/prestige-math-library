---
id: ex-generic-and-exceptional-height-directions-on-a-torus
kind: example
title: "A standard embedded torus has generic height directions with four Morse critical points, but symmetry directions create degenerate or nongeneric behavior"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morse-function-and-excellent-morse-function, thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct computation
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Example

Let $R>r>0$ and embed the standard torus by
$$X(u,v)=\bigl((R+r\cos u)\cos v,\ (R+r\cos u)\sin v,\ r\sin u\bigr).$$
Every nonvertical height direction is Morse with four critical points, while
either vertical direction has circles of critical points. Thus the same
embedded torus exhibits the generic four-critical-point behaviour and the
exceptional symmetry directions explicitly.

## Facts & Assumptions

**Given:** The standard torus embedding $X(u,v)$ with $R>r>0$.

[F1] Morse and excellent Morse functions are defined on the A page ([[def-morse-function-and-excellent-morse-function]]).

[L1] Generic directions on a compact embedded manifold give Morse height functions ([[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]).

## Verification

**Proof technique:** direct computation.

1.1 Write a unit direction as $\mathbf q=(A\cos\phi,A\sin\phi,c)$ with $A\ge0$ and $A^2+c^2=1$. Its height on the torus is $$h_{\mathbf q}(u,v)=A(R+r\cos u)\cos(v-\phi)+cr\sin u.$$ If $A>0$, then $R+r\cos u>0$ makes the critical-point equations equivalent to $$\sin(v-\phi)=0,\qquad -A\sin u\cos(v-\phi)+c\cos u=0.$$ For each of the two signs $s=\cos(v-\phi)\in\{1,-1\}$, the second equation has exactly two solutions modulo $2\pi$. Hence every nonvertical direction has exactly four critical points. [given, algebra]

2.1 At a critical point from step 1.1 the mixed second derivative vanishes, while the two diagonal Hessian entries are $$-r\bigl(As\cos u+c\sin u\bigr),\qquad -As(R+r\cos u).$$ The first has absolute value $r\sqrt{A^2+c^2}=r$, and the second is nonzero because $A>0$ and $R+r\cos u>0$. Thus all four critical points are nondegenerate, so every nonvertical height is Morse by [F1]. In particular the $x$-height is the case $(A,c,\phi)=(1,0,0)$. [F1, step 1.1, algebra]

2.2 If $A=0$, then $c=\pm1$ and the height is $k(u,v)=\pm r\sin u$. Its critical set is the union of the two circles $u=\pi/2$ and $u=3\pi/2$, so both vertical directions are degenerate and not Morse. [step 1.1, algebra]

3.1 The two vertical poles form a null subset of the direction sphere, while every direction in their complement has the four Morse critical points from steps 1.1 and 2.1. This proves directly that generic directions have four critical points and identifies the exceptional symmetry directions, consistently with [L1]. [L1, step 2.1, step 2.2] ∎
