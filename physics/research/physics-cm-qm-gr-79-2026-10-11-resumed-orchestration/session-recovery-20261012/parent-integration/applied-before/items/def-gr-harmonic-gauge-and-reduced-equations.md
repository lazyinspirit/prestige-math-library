---
id: def-gr-harmonic-gauge-and-reduced-equations
kind: definition
title: "The harmonic gauge vector, the reduced Einstein equation and the Einstein residual"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-spacelike-initial-data-and-constraints, lem-gr-constraint-projections, def-christoffel-symbols-of-an-affine-connection, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  lem-gr-constraint-projections: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 2.4 (The Evolution Equations): the splitting of the field equations into evolution and constraint parts, gauge source functions and the harmonically reduced field equations (2.39), and the subsidiary system obtained from their divergence"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) with metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let
$U\subseteq M$ be an open set carrying a fixed smooth **background metric**
$\bar g$ with Levi-Civita connection $\bar\nabla$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), whose Christoffel
symbols in any chart are $\bar\Gamma^a{}_{bc}$
([[def-christoffel-symbols-of-an-affine-connection]]); the same symbol
$\Gamma^a{}_{bc}$ denotes those of $g$. Let $\kappa>0$ and $\Lambda\in\mathbb R$
be constants and let $T$ be a smooth symmetric covariant $2$-tensor field on $U$
([[def-gr-smooth-covariant-two-tensor-field]]), the **matter stress-energy
tensor**, with $T=g^{ab}T_{ab}$ its metric trace
([[def-gr-inverse-metric-and-musical-isomorphisms]]).

**(a) Gauge vector.** The **harmonic-gauge vector field** of the pair
$(g,\bar g)$ is the smooth vector field
$$H^a:=g^{bc}\bigl(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc}\bigr) .$$
The difference of the connection coefficients is a $(1,2)$-tensor, so $H$ is a
well-defined smooth vector field independent of the chart used to express the
symbols ([[def-gr-tensor-fields-and-components]]).

**(b) Reduced Einstein equation.** The **reduced Einstein equation** for the
pair $(g,T)$ with respect to $\bar g$ is the second-order quasilinear system
$$\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}=\kappa\bigl(T_{ab}-\tfrac12Tg_{ab}\bigr)+\Lambda g_{ab},$$
where $\operatorname{Ric}_{ab}$ is the Ricci tensor of $g$
([[def-gr-curvature-tensor-and-derived-tensors]]),
$H_b=g_{bc}H^c$ and $\nabla_{(a}H_{b)}=\tfrac12(\nabla_aH_b+\nabla_bH_a)$.

**(c) Reduced solutions.** A **reduced solution** on $U$ is a pair $(g,T)$ of a
smooth Lorentzian metric and a smooth symmetric $2$-tensor on $U$ satisfying
(b) for the fixed background $\bar g$.

**(d) Einstein residual.** The **Einstein residual** of a pair $(g,T)$ is the
smooth symmetric $2$-tensor
$$E_{ab}:=G_{ab}+\Lambda g_{ab}-\kappa T_{ab},\qquad G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab},$$
with $S=g^{ab}\operatorname{Ric}_{ab}$ the scalar curvature
([[def-gr-curvature-tensor-and-derived-tensors]]). The pair solves the Einstein
equation exactly when $E=0$.

**(e) Constraint equations.** If $g$ is defined on a neighborhood of a spacelike
hypersurface $\Sigma$ with future unit normal field $\mathfrak n$ and tangential
frame $(e_i)$ ([[def-gr-spacelike-initial-data-and-constraints]]), the
**constraint residuals** are the functions $E(\mathfrak n,\mathfrak n)$ and
$E(\mathfrak n,e_i)$ on $\Sigma$; that these are the normal and
normal-tangential projections of the field equation, and that they agree with
the Hamiltonian and momentum constraint equations of the initial data, is
recorded in [[lem-gr-constraint-projections]] and
[[def-gr-spacelike-initial-data-and-constraints]].

The definition introduces the objects only. The principal part of (b), its
first-order symmetric hyperbolic reduction, the identity expressing $E$ through
$H$, the wave equation satisfied by $H$ and the propagation of the constraint
residuals are proved in [[lem-gr-reduced-einstein-principal-part]],
[[thm-gr-reduced-einstein-local-existence]],
[[lem-gr-einstein-residual-and-subsidiary-identity]] and
[[thm-gr-harmonic-constraint-propagation]].
