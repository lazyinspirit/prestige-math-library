---
id: def-emg-fx-wave-currents
kind: definition
title: Wave stress and multiplier currents
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-gr-metric-volume-form-and-current-flux
  - def-gr-smooth-lorentzian-objects
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Appendix D, PDF pp. 103–104: scalar wave stress tensor, vector-field current, deformation tensor and divergence identity. The local definition adds a real potential and source, whose divergence identity is proved in the next item."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Section 1.2, PDF pp. 3–6, and Sections 8.1.2 and 8.4, PDF pp. 56–60: the coupled Einstein–Maxwell wave systems and the additional transformations and mode-specific structure required in that application. No such coupled stability result is imported here."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, with metric-selected Levi-Civita connection $\nabla$. Let $\mathcal U\subseteq M$ be open, let $u,V,s\in C^\infty(\mathcal U,\mathbb R)$, and let $X$ be a smooth vector field on $\mathcal U$. Define
$$\Box_g u:=\nabla^a\nabla_a u,\qquad |du|_g^2:=g^{ab}(\nabla_a u)(\nabla_b u).$$
If $\Box_g u=Vu+s$, define the symmetric covariant tensor
$$T_{ab}[u,V]:=(\nabla_a u)(\nabla_b u)-\frac12g_{ab}\bigl(|du|_g^2+Vu^2\bigr),$$
the vector current $J_X^a:=g^{ac}T_{cb}X^b$, and the scalar deformation term $K_X:=T_{ab}\nabla^{(a}X^{b)}$, where $\nabla^{(a}X^{b)}=(\nabla^aX^b+\nabla^bX^a)/2$.

For a finite smooth singular $3$-chain $\Sigma=\sum_{i=1}^k c_i\sigma_i$ with $k\ge0$ and $c_i\in\mathbb R$, take each simplex $\sigma_i$ to be a map $\Delta^3\to\mathcal U$ that extends smoothly to a map into $M$ on an open neighborhood of $\Delta^3$ in its affine span. Here
$$\Delta^3:=\{(t_0,t_1,t_2,t_3)\in\mathbb R^4:t_j\ge0,\ \sum_{j=0}^3t_j=1\},$$
with its standard orientation from the ordered vertices $e_0,e_1,e_2,e_3$, where each $e_j$ is the $j$th standard basis vector of $\mathbb R^4$. Define the local flux by
$$\Phi_{J_X}(\Sigma):=\sum_{i=1}^k c_i\int_{\Delta^3}\sigma_i^*(\iota_{J_X}\mathrm{vol}_g).$$

Here $\mathrm{vol}_g$ is the oriented metric $4$-form whose expression in an oriented chart is $\sqrt{|\det(g_{ab})|}\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and $\iota_{J_X}\mathrm{vol}_g$ is the $3$-form that sends $(Y_1,Y_2,Y_3)\in(T_pM)^3$ to $\mathrm{vol}_{g,p}(J_X(p),Y_1,Y_2,Y_3)$ at each $p\in\mathcal U$. The map $\sigma_i^*$ is pullback of differential forms, and each simplex integral uses the pullback form-integration convention of the metric-volume current-flux definition listed in the following references section. Linearity makes the sum independent of the written chain representation. The integral uses the differential-form convention on null faces and assigns no flux to a chain with points outside $\mathcal U$; it never extends $J_X$ outside $\mathcal U$. In length coordinates, if $u$ has unit $[u]$, then $V$ has unit $\mathrm m^{-2}$, $s$ has unit $[u]\mathrm m^{-2}$, and the components of $T$ have unit $[u]^2\mathrm m^{-2}$; no physical normalization of $u$ or $X$ is imposed.

## Definition references

[[def-countable-choice]]

[[def-gr-metric-volume-form-and-current-flux]]

[[def-gr-smooth-lorentzian-objects]]

[[def-smooth-vector-field-as-a-tangent-bundle-section]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

## Remarks

The background assumption $\mathrm{AC}_\omega$ is inherited from the supplied smooth Lorentzian and tangent-bundle definitions. The definition makes no additional selection. The current is a vector field; its flux is fixed by the cited metric-volume definition, so no unit normal to a null hypersurface is introduced here.
