---
id: def-gr-dust-electric-magnetic-weyl-variables-and-schouten
kind: definition
title: "Schouten tensor, prescribed curvature, electric-magnetic Weyl variables and the reconstruction formula in the dust reduction"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-dust-reduction-variables-and-gauge, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-observer-and-rest-space, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Definition

Work in the reduction conventions of
[[def-gr-dust-reduction-variables-and-gauge]]: $\gamma$ is the signature
$(+---)$ metric, $U$ the unit future timelike vector $U=n$, $r=\rho c^2$, the
frame $(e_0,e_1,e_2,e_3)$ is $\gamma$-orthonormal with $e_0=U$,
$\gamma(e_i,e_j)=\eta_{ij}$ on spatial pairs, and indices are moved with
$\gamma$.

**(a) Schouten tensor.** The **reduction Schouten tensor** of $\gamma$ is
$$S_{ij}:=\operatorname{Ric}_{ij}-\tfrac16S_\gamma\,\gamma_{ij},$$
where $\operatorname{Ric}$ and $S_\gamma=\gamma^{ab}\operatorname{Ric}_{ab}$ are
the Ricci tensor and scalar curvature of $\gamma$
([[def-gr-curvature-tensor-and-derived-tensors]]). If the dust field equation
$G(\gamma)-\Lambda\gamma=\kappa\,r\,U^\flat\otimes U^\flat$ holds, then
$$S_{ij}=\kappa r\Bigl(U_iU_j-\tfrac13\gamma_{ij}\Bigr)-\tfrac13\Lambda\,\gamma_{ij}.$$
This normalization is fixed so that the standard Kulkarni--Nomizu decomposition
$$R_{ijkl}=C_{ijkl}+\tfrac12\bigl(S_{ik}\gamma_{jl}-S_{il}\gamma_{jk}+S_{jl}\gamma_{ik}-S_{jk}\gamma_{il}\bigr)$$
holds for every metric of dimension four, with $C$ the Weyl tensor
([[def-gr-curvature-tensor-and-derived-tensors]]); the identity is checked on
constant-curvature metrics in the Remarks.

**(b) Prescribed curvature.** The **prescribed curvature tensor** of a
configuration $(C,E,B,r)$ is the tensor field with frame components
$$R^{\mathrm{pre}}{}_{ijkl}:=C_{ijkl}+\tfrac12\bigl(S_{ik}\gamma_{jl}-S_{il}\gamma_{jk}+S_{jl}\gamma_{ik}-S_{jk}\gamma_{il}\bigr),\qquad S_{ij}\text{ as in (a)} ,$$
where $C=C[E,B]$ is the Weyl tensor reconstructed from the electric and
magnetic variables in (d). A **tentative reduced configuration** is a smooth assignment
$(e_a{}^\mu,\Gamma_a{}^i{}_j,E_{ij},B_{ij},r)$ in the gauge of
[[def-gr-dust-reduction-variables-and-gauge]]. Equality of its actual curvature
with $R^{\mathrm{pre}}$ is the curvature constraint, rather than an assumption
on the independent unknowns. Reduced evolution enforces its time components;
the residual theorem establishes the remaining components from constrained
initial data. This distinction keeps the tentative connection available before
torsion-freeness and the full curvature constraint are proved.

**(c) Electric and magnetic Weyl variables.** For a smooth Weyl-type tensor $C$
of type $(0,4)$ with the curvature symmetries write
$C^*{}_{ijkl}:=\tfrac12C_{ij}{}^{pq}\epsilon_{klpq}$ for its right dual
([[def-gr-dust-reduction-variables-and-gauge]] clause (c) for
$\epsilon_{ijkl}$). The **electric and magnetic parts with respect to $U$** are
the spatial fields
$$E_{ij}:=C_{0i0j},\qquad B_{ij}:=C^*{}_{0i0j},$$
with frame indices; they are symmetric and spatial in all indices and
trace-free with respect to $h$ whenever $C$ has the Weyl symmetries.

**(d) Reconstruction formula.** Define the dependent tensor
$$C_{ijkl}:=2\bigl(l_{j[k}E_{l]i}-l_{i[k}E_{l]j}\bigr)-2\bigl(U_{[k}B_{l]p}\epsilon^p{}_{ij}+U_{[i}B_{j]p}\epsilon^p{}_{kl}\bigr),$$
with brackets of weight $\tfrac12$ and $l_{ij}=h_{ij}-U_iU_j$; this expression
is the **reconstruction** of a Weyl tensor from a pair $(E,B)$ of symmetric
spatial trace-free fields. The verification that the reconstructed tensor has
the curvature antisymmetries, pair symmetry, cyclic identity and zero traces —
and that its electric and magnetic parts recover $(E,B)$ — is the content of
[[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]].

The definition fixes the objects and conventions only; the evolution and
subsidiary equations, the initial-data determination and the local existence
theorem are proved in the items named above and in
[[lem-gr-dust-reduced-evolution-equations]] and
[[thm-gr-dust-local-evolution]].

## Remarks

- **Normalization check.** For a constant-curvature metric with
  $R_{ijkl}=K(\gamma_{ik}\gamma_{jl}-\gamma_{il}\gamma_{jk})$ one has
  $\operatorname{Ric}_{ij}=3K\gamma_{ij}$, $S_\gamma=12K$ and
  $S_{ij}=3K\gamma_{ij}-2K\gamma_{ij}=K\gamma_{ij}$, so the decomposition of
  (a) reads $C+\tfrac12(K\gamma_{ik}\gamma_{jl}-K\gamma_{il}\gamma_{jk}+K\gamma_{jl}\gamma_{ik}-K\gamma_{jk}\gamma_{il})=C+K(\gamma_{ik}\gamma_{jl}-\gamma_{il}\gamma_{jk})=R$,
  as required for a metric of constant curvature. The design's original display
  used the same Schouten normalization with a differently normalized bracket
  expression; the normalization above is the one under which the
  Kulkarni--Nomizu identity and this check both hold, and the discrepancy is
  recorded in the batch notes for owner review.
- **Vacuum sign check of (a).** For $r=0$, tracing
  $G(\gamma)-\Lambda\gamma=0$ with $\gamma^{-1}$ in dimension four gives
  $-S_\gamma-4\Lambda=0$, hence $S_\gamma=-4\Lambda$ and
  $\operatorname{Ric}=-\Lambda\gamma$. Therefore
  $S_{ij}=-\Lambda\gamma_{ij}+\tfrac23\Lambda\gamma_{ij}=-\tfrac13\Lambda\gamma_{ij}$,
  exactly as in (a). In the constant-curvature vacuum case the preceding
  normalization check has $K=-\Lambda/3$. Returning to $g=-\gamma$ gives
  $\operatorname{Ric}(g)=\Lambda g$ and $S_g=4\Lambda$, the usual de Sitter
  signs when $\Lambda>0$; the reduction signs reflect the metric flip.
