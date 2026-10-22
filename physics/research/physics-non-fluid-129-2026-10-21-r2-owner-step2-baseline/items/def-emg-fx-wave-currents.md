---
id: def-emg-fx-wave-currents
kind: definition
title: Wave stress and multiplier currents
status: draft
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
---

## Definition

Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, with metric-selected Levi-Civita connection $\nabla$. Let $\mathcal U\subseteq M$ be open, let $u,V,s\in C^\infty(\mathcal U,\mathbb R)$, and let $X$ be a smooth vector field on $\mathcal U$. Define
$$\Box_g u:=\nabla^a\nabla_a u,\qquad |du|_g^2:=g^{ab}(\nabla_a u)(\nabla_b u).$$
If $\Box_g u=Vu+s$, define the symmetric covariant tensor
$$T_{ab}[u,V]:=(\nabla_a u)(\nabla_b u)-\frac12g_{ab}\bigl(|du|_g^2+Vu^2\bigr),$$
the vector current $J_X^a:=g^{ac}T_{cb}X^b$, and the scalar deformation term $K_X:=T_{ab}\nabla^{(a}X^{b)}$, where $\nabla^{(a}X^{b)}=(\nabla^aX^b+\nabla^bX^a)/2$. The flux of $J_X$ through an oriented smooth $3$-chain is the flux $\Phi_{J_X}$ defined in [[def-gr-metric-volume-form-and-current-flux]], including that definition's differential-form convention on null faces. In length coordinates, if $u$ has unit $[u]$, then $V$ has unit $\mathrm m^{-2}$, $s$ has unit $[u]\mathrm m^{-2}$, and the components of $T$ have unit $[u]^2\mathrm m^{-2}$; no physical normalization of $u$ or $X$ is imposed.

## Definition references

[[def-countable-choice]]

[[def-gr-metric-volume-form-and-current-flux]]

[[def-gr-smooth-lorentzian-objects]]

[[def-smooth-vector-field-as-a-tangent-bundle-section]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

## Remarks

The background assumption $\mathrm{AC}_\omega$ is inherited from the supplied smooth Lorentzian and tangent-bundle definitions. The definition makes no additional selection. The current is a vector field; its flux is fixed by the cited metric-volume definition, so no unit normal to a null hypersurface is introduced here.
