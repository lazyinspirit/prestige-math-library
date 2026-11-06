---
id: def-gts-differential-spin-c-orientation-of-a-proper-submersion
kind: definition
title: Differential Spin-c orientation of a proper submersion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
deps:
  - def-gts-differential-extension-of-a-generalized-cohomology-theory
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-complex-spinc-thom-orientation
  - def-smooth-manifold
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-ahat-and-relative-chern-character-forms
justified_by: []
dependency_roles:
  def-gts-differential-extension-of-a-generalized-cohomology-theory: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  thm-complex-spinc-thom-orientation: mathematical-premise
  def-smooth-manifold: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-ahat-and-relative-chern-character-forms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Daniel S. Freed and John Lott, An Index Theorem in Differential K-Theory
      url: https://arxiv.org/pdf/0907.3508v2
      locator: §2.1 equations (2–3)–(2–13), printed/PDF pp. 8–9, and §3.1 through Lemma 3–13, pp. 16–18; Chern/Todd normalization and Riemannian/differential Spin-c data. These passages define the geometric tuple; a pushforward theorem is not imported here.
    - title: Ulrich Bunke and Thomas Schick, Differential K-theory. A survey.
      url: https://arxiv.org/pdf/1011.6663v2
      locator: Sections 5.1–5.2, differential Spin-c orientations and pushforward conventions.
---

## Definition

Let $\pi:X\to B$ be a smooth proper submersion of finite-dimensional Hausdorff second-countable manifolds without boundary, with compact fibers of constant dimension $n$. Its vertical tangent bundle is $T^vX=\ker(d\pi)$. A Riemannian structure on $\pi$ is a smooth positive-definite metric $g^{T^vX}$ on $T^vX$ and a smooth horizontal distribution $T^HX\subset TX$ complementary to $T^vX$. A smooth metric $g^{TB}$ exists on $B$ by a smooth partition of unity and is used only as an auxiliary choice. Make $T^HX$ orthogonal to $T^vX$ and give it the pulled-back metric, obtaining $g^{TX}=g^{T^vX}\oplus\pi^*g^{TB}$. If $\nabla^{TX}$ is its Levi-Civita connection and $P^v:TX\to T^vX$ is orthogonal projection, define $\nabla^{T^vX}_V W=P^v(\nabla^{TX}_V W)$ for vector fields $V$ on $X$ and vertical vector fields $W$. The Koszul formula shows that this connection is independent of $g^{TB}$ and restricts to the Levi-Civita connection on each fiber.

A Spin-c structure $s$ is a principal $\operatorname{Spin}^c(n)$ lift $P_c$ of the oriented orthonormal frame bundle $P_{SO}(T^vX)$. Write $\operatorname{Spin}^c(n)=(\operatorname{Spin}(n)\times U(1))/\langle(-1,-1)\rangle$, let $\rho:\operatorname{Spin}(n)\to SO(n)$ be the vector representation, and let $\chi([q,z])=z^2$. Its determinant line is $L=P_c\times_\chi\mathbb C$. The homomorphism $[q,z]\mapsto(\rho(q),z^2)$ to $SO(n)\times U(1)$ has invertible derivative. The metric connection $\nabla^{T^vX}$ and a unitary connection $\nabla^L$ on $L$ therefore determine a unique principal connection on $P_c$ projecting to their product. The associated spinor representation is $[q,z]\mapsto z\Delta_n(q)$, where $\Delta_n$ is the complex spin representation with Clifford convention $c(v)c(w)+c(w)c(v)=-2g(v,w)$. It gives the induced spinor connection, whose central curvature is $F_{\nabla^L}/2$ because the determinant character is $z^2$.

In the Freed–Lott geometric model, a **differential Spin-c orientation** is the tuple $(s,g^{T^vX},T^HX,\nabla^L)$ with these conventions. On each fiber, the vertical Dirac operator is $D_b=\sum_j c(e^j)\nabla^{S}_{e_j}$ in a local oriented orthonormal frame, using the induced spinor connection; a twisting bundle adds its stated unitary connection by tensor product. The normalized Todd form is

$$\operatorname{Todd}(\nabla^{T^vX},\nabla^L)=\widehat A(\nabla^{T^vX})\wedge\exp\!\left(-\frac{F_{\nabla^L}}{4\pi i}\right).$$

Odd fiber dimension uses the source suspension convention. No boundary condition or equivalence relation between different tuples is part of this definition, and no separate odd-form correction is included. A differential pushforward also needs the chosen differential extension and an analytic transgression construction; those are not implied by the geometric tuple alone.

## Definition references

[[def-gts-differential-extension-of-a-generalized-cohomology-theory]]

[[def-smooth-manifold]]

[[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[[def-ahat-and-relative-chern-character-forms]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[thm-complex-spinc-thom-orientation]]

## Remarks

The horizontal distribution identifies $TX$ with $T^vX\oplus T^HX$ and therefore specifies the geometric family connection. The Todd normalization uses $c_1(\nabla^L)=-F_{\nabla^L}/(2\pi i)$ and the Spin-c factor $e^{c_1/2}$. This is the convention $\operatorname{ch}(\nabla)=\operatorname{tr}e^{-F_\nabla/(2\pi i)}$; the central Spin-c weight is one, so its spinor curvature contributes $F_{\nabla^L}/2$ before the minus-sign exponential. A separate added odd form changes a differential-orientation convention and is not included in this fixed Freed–Lott convention.
