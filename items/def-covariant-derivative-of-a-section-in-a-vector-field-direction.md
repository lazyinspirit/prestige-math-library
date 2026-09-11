---
id: def-covariant-derivative-of-a-section-in-a-vector-field-direction
kind: definition
title: Covariant derivative of a section in a vector field direction
status: published
origin: pipeline
deps: [def-connection-on-a-smooth-vector-bundle]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, section 5.1
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

For a connection as in [[def-connection-on-a-smooth-vector-bundle]], a smooth vector field $X\in\Gamma(TM)$ and a section $s\in\Gamma(E)$, define the **covariant derivative in direction $X$** by
$$\nabla_Xs=(\nabla s)(X),\qquad (\nabla_Xs)(p)=(\nabla s)_p(X(p)).$$
It is a smooth section: in any local coordinates and bundle frame, if the matrix of $\nabla s$ has entries $b^a_i$ and $X$ has components $X^i$, its components are the finite sums $\sum_i b^a_iX^i$. For a single tangent vector $v\in T_pM$, the notation $\nabla_vs$ means $(\nabla s)_p(v)$. In particular the direction is used only at $p$, while the section can be differentiated there.

Zero direction gives zero; zero section gives zero by real linearity of $\nabla$. For a zero-dimensional base the sum is empty. Empty base and rank-zero bundle also give the unique zero section. A direction is not required to be nonzero or to extend along any prescribed curve. This is evaluation of supplied data and needs no choice.
