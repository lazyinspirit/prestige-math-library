---
id: rem-the-morse-index-theorem-for-geodesics
kind: remark
title: The Morse index theorem for geodesics
status: draft
origin: pipeline
deps:
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-index-form-of-a-geodesic-segment
  - thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point
  - thm-index-lemma
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed p.189, immediately after the proof of Theorem 10.15: the definition of the index of a geodesic segment and the statement of the Morse index theorem as a far-reaching generalization that the book does not treat (indexed on printed p.189)."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 21, section 21.2, printed pp.156-158: Definition 21.2.1 of the index form and the fixed-endpoint space T_gamma Omega(p,q) = {W in X_ad(gamma) : W(a) = W(b) = 0}, whose restriction is the object this remark refers to."
---

## Remark

This pair proves the two finite-variation facts on which the local theory of
conjugate points is built: the index lemma ([[thm-index-lemma]]) and the loss
of minimality past the first conjugate point
([[thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point]]). The
classical **Morse index theorem** is the quantitative refinement that turns
those two facts into an exact count. It is recorded here as orientation only:
it is not proved anywhere in this pair, no item of this pair or of the
companion examples page uses it as a supplier, and no proof below quotes it as
a proved statement.

In the formulation of the source, for a geodesic segment
$\gamma:[a,b]\to M$ of the Levi-Civita connection, "the index of a geodesic
segment is defined to be the maximum dimension of a linear space of proper
normal vector fields on which $I$ is negative definite", and "the index of
any geodesic segment is finite, and is equal to the number of its interior
conjugate points counted with multiplicity" (Lee, printed p.189; here
*proper* means that the fields vanish at $a$ and $b$).

In the notation of this pair the form is the index form of
[[def-index-form-of-a-geodesic-segment]] restricted to the fixed-endpoint
subspace $\mathcal X_0(\gamma)$ of continuous piecewise $C^1$ fields with
$V(a)=V(b)=0$, and "counted with multiplicity" is the multiplicity of
[[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]. The count is
over interior instants $t\in(a,b)$: the terminal instant $b$ is not counted,
and a segment whose endpoint $\gamma(b)$ is conjugate to $\gamma(a)$
additionally carries positive nullity. The remark makes no claim of its own
about the finiteness of the index or about either count; both are quoted from
the source as orientation.

What this pair supplies in the direction of the theorem is exactly the two
items named above. In the absence of conjugate instants, the index lemma
produces the Jacobi field with prescribed endpoint values $J(a)=u$,
$J(b)=w$, unique among Jacobi fields and satisfying
$I_\gamma(J,J)\le I_\gamma(V,V)$ for every continuous piecewise $C^1$
competitor with the same endpoint values; and a conjugate instant
$\gamma(c)$ with $a<c<b$ produces a piecewise smooth fixed-endpoint
competitor on $[a,b]$ of strictly smaller energy and strictly smaller length.
The full path-space statement of the Morse index theorem, together with the
companion nullity statement, is deferred to a sequel.
