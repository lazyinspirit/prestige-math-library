---
id: lem-emg-spacelike-slice-normal-collar
kind: lemma
title: "Local normal collar charts at a smooth spacelike hypersurface"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - thm-gr-local-geodesics-and-exponential-map
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, §§3.3–3.4, printed pp. 37–39 (PDF pp. 38–40)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, Chapter 3, §§3.3.1–3.3.2, printed pp. 120–122 (chapter PDF pp. 30–32)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr3.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, let
$\Sigma$ be a smooth three-manifold, and let $i:\Sigma\to M$ be a smooth
spacelike embedding. Suppose a smooth future unit normal field $n$ along
$i(\Sigma)$ is supplied. For every $p\in\Sigma$ there are an open
neighborhood $U_p\subseteq\Sigma$, a number $\epsilon_p>0$, and an open
$V_p\subseteq M$ such that the restricted map
$\Phi_p:(-\epsilon_p,\epsilon_p)\times U_p\to V_p$ given by

$$\Phi_p(t,x)=\gamma_{i(x),n_{i(x)}}(t)$$

is a diffeomorphism, where $\gamma_{q,v}$ is the maximal affinely
parameterized metric geodesic with initial data $(q,v)$. At its center,

$$d(\Phi_p)_{(0,p)}(a\partial_t+X)=a n_{i(p)}+d i_p(X).$$

The neighborhoods and time widths may depend on $p$; no globally injective
normal exponential map or uniform width is asserted.

## Facts & Assumptions

**Given:** The smooth Lorentzian manifold, the spacelike embedding, and the
supplied smooth future unit normal.

[F1] [[def-gr-smooth-lorentzian-objects]] fixes the smooth spacetime structure
and time orientation. [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] then
makes $i(\Sigma)$ an embedded three-dimensional submanifold with positive
definite induced metric; the supplied future unit normal is timelike and
orthogonal to its tangent space.

[F2] [[thm-gr-local-geodesics-and-exponential-map]]: geodesics depend smoothly
on time, base point and initial tangent on an open set of admissible data.

[L1] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map whose
differential is an isomorphism at a point restricts to a diffeomorphism between
neighborhoods of that point and its image.

[A1] [[def-countable-choice]]: the tangent-bundle smooth-structure convention
used by [F2] is carried under $\mathrm{AC}_\omega$. No stronger choice
principle is used in this local construction.

## Proof

**Given:** The geometric data in the Statement and the choice convention [A1].

1.1 The map $(t,x)\mapsto(t,i(x),n_{i(x)})$ is smooth and sends $(0,p)$ to
admissible geodesic initial data. By [F2] that datum has an open neighborhood
on which the geodesic evaluation map is smooth. Their composition is therefore
the normal exponential map $\Phi_p$ on a neighborhood of $(0,p)$. [given, A1,
F2, algebra]

2.1 Differentiating the geodesic at zero gives the displayed differential:
the time direction maps to $n_{i(p)}$, and the slice direction maps to
$d i_p(X)$. If $a n_{i(p)}+d i_p(X)=0$, its inner product with $n_{i(p)}$
is $-a=0$ because $n$ is orthogonal to $i(\Sigma)$; then $d i_p(X)=0$ and
$X=0$ because an embedding is an immersion. Thus the differential is an
isomorphism between four-dimensional tangent spaces. Apply [L1], then shrink
its source neighborhood to a product $(-\epsilon_p,\epsilon_p)\times U_p$;
the restriction is still a diffeomorphism onto its open image. [step 1.1, F1,
L1, algebra, construct] ∎

