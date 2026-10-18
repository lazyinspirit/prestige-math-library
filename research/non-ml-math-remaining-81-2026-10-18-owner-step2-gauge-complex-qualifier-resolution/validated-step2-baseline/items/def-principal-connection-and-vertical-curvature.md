---
id: def-principal-connection-and-vertical-curvature
kind: definition
title: Principal connections and vertical curvature
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
axiom_base: "ZF + AC_omega, inherited through the canonical smooth tangent-bundle and smooth-vector-field conventions cited below; the horizontal splitting and curvature formula make no further choices."
deps:
  - def-smooth-principal-g-bundle
  - def-countable-choice
  - thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure
  - def-differential-of-a-smooth-map
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - def-lie-bracket-of-smooth-vector-fields
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/pdf/2110.06334"
      locator: "Chapter 1, §1.3.1–§1.3.4, printed pp. 32–35 (PDF pp. 31–34)."
    - title: "Jack Smith, Differential Geometry, Cambridge Part III Michaelmas 2022 lecture notes taken by Leonard Tomczak"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
      locator: "Chapter 9, §§9.3–9.4, printed pp. 43–44 (PDF pp. 42–43)."
verification:
  precheck: n/a
---

## Definition

Assume $\mathrm{AC}_\omega$ as recorded by
[[def-countable-choice]], and let $\pi:P\to M$ be a smooth right principal
$G$-bundle in the sense of
[[def-smooth-principal-g-bundle]]. The tangent bundle $TP$ has the canonical
smooth structure supplied by
[[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]. Its
**vertical subbundle** is
$$VP:=\ker(d\pi)\subseteq TP.$$
In each principal chart $U\times G$, this is the tangent bundle in the $G$
factor, so it is a smooth vector subbundle of $TP$ in the sense of
[[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]].

A **principal connection** on $P$ is a smooth vector subbundle $H\subseteq TP$
such that $T_pP=V_pP\oplus H_p$ for every $p\in P$ and
$$d(R_g)_p(H_p)=H_{pg}\qquad(p\in P,\ g\in G),$$
where $R_g(p)=pg$ is the principal right action. Thus $H$ is a smoothly varying
horizontal complement to the vertical tangent directions, invariant under the
structure-group action. This definition is conditional on a specified $H$;
it is not an existence theorem for connections on every bundle.

Let $h:TP\to H$ and $v:TP\to VP$ be the projections given by this direct-sum
decomposition. For smooth vector fields $X,Y$ on $P$, define the
**vertical-valued curvature** by
$$K_H(X,Y):=-v([hX,hY]),$$
where the vector-field bracket is the commutator
[[def-lie-bracket-of-smooth-vector-fields]]. This formula is tensorial in
$X,Y$: for a smooth function $f$,
$$v([f hX,hY])=f\,v([hX,hY])-hY(f)\,v(hX)=f\,v([hX,hY]),$$
because $v(hX)=0$, and the same calculation in the second input gives
$v([hX,f hY])=f\,v([hX,hY])$. It is alternating because the bracket is
alternating. Consequently the formula defines a smooth alternating bundle map
$TP\times_P TP\to VP$, rather than depending on which local vector-field
extensions represent the tangent vectors.

This item uses the vertical-valued convention. It does not identify $VP$ with a
Lie-algebra-valued form or assert a Maurer–Cartan formula. Its axiom base
contains $\mathrm{AC}_\omega$ exactly through the canonical tangent-bundle
and vector-field suppliers above; the displayed splitting and curvature
formula themselves select no objects from a family.
