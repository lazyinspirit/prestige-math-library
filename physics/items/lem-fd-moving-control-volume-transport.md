---
id: lem-fd-moving-control-volume-transport
kind: lemma
title: Transport across a moving control boundary
status: published
origin: pipeline
proof_strategy: direct
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.6.1–4.6.4, printed pp. 152–156."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf"
      locator: "§1.3, complete 4-page moving-volume transport derivation."
---

## Statement

Assume countable choice: every countable family of nonempty sets has a choice function. Let $I\subseteq\mathbb R$ be an open interval, let $C_0\subseteq\mathbb R^3$ be a bounded open region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U_C$ be an open neighborhood of $\overline{C_0}$. Let $X\in C^2(I\times U_C;\mathbb R^3)$ have orientation-preserving diffeomorphic time slices onto open images (bijections with $C^2$ inverses and positive Jacobian determinant). Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous, and set $C(t)=X_t(C_0)$. Let $g$ be a scalar $C^1$ field on an open neighborhood of $\{(t,x):x\in\overline{C(t)},\,t\in I\}$. Define the boundary velocity by $w(t,X(t,\xi))=\partial_tX(t,\xi)$ and let $n$ be the outward Euclidean unit normal on $\partial C(t)$. Use Euclidean surface measure, whose chart density is $\sqrt{\det(DY^{\mathsf T}DY)}$. Then
$$\frac{d}{dt}\int_{C(t)}g(t,x)\,dx =\int_{C(t)}\partial_tg(t,x)\,dx+\int_{\partial C(t)}g(t,x)\,w(t,x)\cdot n(t,x)\,dS_x.$$
For vector-valued $g$, the identity holds componentwise. No condition equating $w$ with a fluid velocity is required.

## Statement references

[[lem-fd-transport-and-density]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.6.1–4.6.4](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf).

[Mei, MIT OpenCourseWare, *Kinematic Transport Theorem*, §1.3](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf).

## Facts & Assumptions

**Given:** Countable choice, the stated $C^2$ family of orientation-preserving diffeomorphisms, bounded $C^1$ reference region, and scalar field defined near the swept closures.

[A1] [[def-countable-choice]]: countable choice means that every countable family of nonempty sets admits a choice function.

[F1] [[lem-fd-c1-domain-jordan-integrals]]: a bounded open $C^1$ region and its compact closure have matching integrals for continuous fields; its compact closure is Jordan measurable.

[F2] [[lem-fd-transport-and-density]]: for a compact Jordan reference set and a $C^1$ scalar field, differentiation of the integral under a $C^2$ orientation-preserving motion gives $\int_{C(t)}(\partial_tg+\operatorname{div}_x(gw))\,dx$.

[F3] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, a bounded $C^1$ domain and a vector field that is $C^1$ on its closure satisfy $\int_C\operatorname{div}F\,dx=\int_{\partial C}F\cdot n\,dS$.

## Proof

1.1 If $C_0=\varnothing$, then $C(t)=\partial C(t)=\varnothing$ for every $t$, all integrals are zero, and the asserted identity holds without applying the divergence theorem. Henceforth suppose $C_0\ne\varnothing$. Fix $t_0\in I$ and put $K=\overline{C_0}$. By [F1], $K$ is compact Jordan and integration over $C(t_0)$ agrees with integration over $X_{t_0}(K)$. Translate time by $t_0$ and apply [F2] to the translated motion and field. Since the Eulerian velocity of that motion is $w$, the derivative at $t_0$ is
$$\int_{C(t_0)}\bigl(\partial_tg+\operatorname{div}_x(gw)\bigr)\,dx.$$
The argument applies to every $t_0\in I$. [given, F1, F2, algebra]

2.1 The field $gw$ is $C^1$ on a neighborhood of $\overline{C(t_0)}$. Apply [F3] and use $\int_C\operatorname{div}(gw)=\int_{\partial C}gw\cdot n$ to obtain the stated formula. Apply this scalar argument to each component when $g$ is vector-valued. [given, A1, F3, step 1.1] ∎

