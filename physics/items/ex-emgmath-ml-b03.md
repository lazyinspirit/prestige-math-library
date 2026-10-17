---
id: ex-emgmath-ml-b03
kind: example
title: Anisotropic magnetic stress and null energy-current vector
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - thm-emg-selected-matter-energy-conditions
  - def-emg-matter-formal-systems
  - lem-gr-observer-projection-decomposition
dependency_roles:
  thm-emg-selected-matter-energy-conditions: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §4.5.3, equation (4.52), PDF pp. 191–192 (printed pp. 184–185)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Maxwell Hilbert tensor and field-component convention; both component examples are verified directly here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.111), PDF p. 36 (printed p. 30)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Independent Maxwell stress-tensor comparison; the exact SI component calculation is performed locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Work pointwise on Minkowski space with length coordinates $x^0=ct$, signature $(-,+,+,+)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and future time-orientation $N=\partial_0$. In SI bookkeeping assign $[B_0]=\mathrm T$ and $[E_0]=\mathrm{V\,m^{-1}}$. First take $\mathbf E=0$, $\mathbf B=B_0\mathbf e_z$ with $B_0\ne0$. Then take $\mathbf E=E_0\mathbf e_x$, $\mathbf B=(E_0/c)\mathbf e_y$ with $E_0\ne0$. These are explicit field-component calculations; no coupled Einstein solution is asserted.

## Facts & Assumptions

**Given:** The Maxwell tensor and observer conventions of [[def-emg-matter-formal-systems]], with $\mu_0,c>0$.

[F1] [[def-emg-matter-formal-systems]]: $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$ and $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ in an oriented orthonormal frame.

[F2] [[thm-emg-selected-matter-energy-conditions]]: $T_{\mathrm{EM}}$ is trace-free and satisfies DEC; its observer current is $-T^a{}_bn^b$.

[F3] [[lem-gr-observer-projection-decomposition]]: the orthogonal complement of a future timelike vector in a Lorentzian four-space is three-dimensional and has positive-definite metric.

[F4] [[def-emg-matter-formal-systems]]: a perfect-fluid tensor has $T_m^{ab}=(\epsilon+p)U^aU^b/c^2+pg^{ab}$ for a future timelike $U$ with $g(U,U)=-c^2$ and real $\epsilon,p$.

[A1] $B_0\ne0$ and $E_0\ne0$ in the two respective examples. All quantities are pointwise mathematical components.

## Verification

1.1 For the pure magnetic case, the only independent nonzero component is $F_{12}=B_0$, so $F_{ab}F^{ab}=2B_0^2$. Substitution in [F1] gives $u=B_0^2/(2\mu_0)$ and $T_{\mathrm{EM}}^{ab}=\operatorname{diag}(u,u,u,-u)$ in the order $(0,x,y,z)$, with all off-diagonal entries zero. The rest observer $n=\partial_0$ has current $-T^a{}_bn^b=(u,0,0,0)$, which is timelike. [F1, A1, algebra]

1.2 The mixed tensor is $T^a{}_b=\operatorname{diag}(-u,u,u,-u)$, so its two distinct eigenvalues each have eigenspace dimension two because $u>0$. For a perfect fluid, [F4] gives $T^a{}_b=(\epsilon+p)U^aU_b/c^2+p\delta^a{}_b$. This map sends the timelike vector $U$ to $-\epsilon U$ and every vector orthogonal to $U$ to $p$ times that vector; $U^\perp$ is three-dimensional by [F3] applied to $U/c$. If $-\epsilon=p$, the map is the scalar map $pI$ and all four eigenvalues coincide; otherwise its eigenvalue multiplicities are one and three. The magnetic tensor has neither spectrum, so it cannot be a perfect-fluid tensor in any observer frame. [F3, F4, algebra]

2.1 For the crossed-field case, $F_{01}=-E_0/c$ and $F_{31}=E_0/c$ are the only independent nonzero components. They give $F_{ab}F^{ab}=0$ and $u=E_0^2/(\mu_0c^2)$. Direct substitution yields $T^{00}=T^{03}=T^{30}=T^{33}=u$ and all other components zero. Therefore $-T^a{}_bn^b=(u,0,0,u)$ for $n=\partial_0$, whose norm is $-u^2+u^2=0$ and whose time component is positive. The DEC current is future null, so its causal bound is saturated. [F1, F2, A1, algebra] ∎

## Remarks

The first tensor is anisotropic even though its rest-frame spatial energy-current component vanishes. In the crossed-field case, the observer energy-current vector is future null, while the physical SI energy-flux vector is the nonzero spatial vector $(E_0^2/(\mu_0c))\mathbf e_z$ with magnitude $cu$. These are exact algebraic consequences of the displayed tensors and do not describe measured fields.
