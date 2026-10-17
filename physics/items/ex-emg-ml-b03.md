---
id: ex-emg-ml-b03
kind: example
title: "Pure magnetic anisotropic stress and null-flux equality"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-matter-observables
  - pthm-emg-matter-energy-conditions
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  pthm-emg-matter-energy-conditions: physical-result
physical_scope: "Two exact pointwise electromagnetic-stress calculations in an orthonormal observer frame: a pure magnetic field has anisotropic principal stresses, and crossed equal-normalized electric and magnetic fields saturate the DEC flux bound. These are ideal local/test-background calculations, not measurements or full coupled Einstein–Maxwell solutions."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 1, equation (1.111), Maxwell stress in Gaussian units; Ch. 4, equations (4.69)–(4.72), general Hilbert stress-energy and weak-energy-condition context. The displayed observer-frame components are computed here."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3 and §4.5.7, PDF pp. 190–193 and 201–204 (printed pp. 183–186 and 194–197), Maxwell stress and energy-condition context; all displayed local components are computed here."
verification:
  precheck: pass
---

## Example

At a point in a Minkowski orthonormal observer frame, use the SI electromagnetic stress and observer conventions of [[def-emg-matter-observables]].

For a pure magnetic field $E=0$, $B=B_0e_3$ with $B_0\neq0$, the energy density is $u=B_0^2/(2\mu_0)$, the energy current is $(u,0,0,0)$, and the spatial principal stresses are $(u,u,-u)$. The tensor is trace-free, obeys WEC, NEC, SEC and DEC, and is not an isotropic perfect-fluid stress because $u\neq -u$.

For crossed fields $E=E_0e_1$, $B=(E_0/c)e_2$ with $E_0\neq0$, the energy density is $u=E_0^2/(\mu_0c^2)$ and the spatial energy current is $u e_3$. The observer energy-current four-vector is therefore null, so the DEC causal-flux inequality is saturated. Both calculations are exact ideal tensor evaluations at an observer event; they are not experimental reports or claims that the fields solve the full Einstein equation on an unchanged Minkowski metric.

## Facts & Assumptions

**Given:** A point with Minkowski metric, a positively oriented orthonormal observer tetrad, $\mu_0>0$, and one of the two stated nonzero field configurations.

[F1] [[def-emg-matter-observables]]: the electromagnetic tensor is $\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$, and the frame convention is $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$.

[F2] [[pthm-emg-matter-energy-conditions]]: the electromagnetic stress has observer density $u=(\epsilon_0|E|^2+|B|^2/\mu_0)/2$, energy current $(E\times B)/(\mu_0c)$, and satisfies the four stated energy conditions with causal DEC current.

[A1] The first configuration has $E=0$, $B=B_0e_3$, $B_0\neq0$; the second has $E=E_0e_1$, $B=(E_0/c)e_2$, $E_0\neq0$. These are pointwise ideal field values, not reported measurements.

## Verification

1.1 In the first configuration the tensor formula [F1] gives $T_{\mathrm{EM}}^{00}=B_0^2/(2\mu_0)=u$, $T_{\mathrm{EM}}^{11}=T_{\mathrm{EM}}^{22}=u$, $T_{\mathrm{EM}}^{33}=-u$, and zero mixed components. Thus its trace is $-u+u+u-u=0$ and its spatial principal stresses are unequal. To exclude every perfect-fluid representation, suppose $T^{ab}=(\epsilon+p)U^aU^b/c^2+p\eta^{ab}$ with $\eta(U,U)=-c^2$. Then $U^0\ne0$ and $0=T^{0i}=(\epsilon+p)U^0U^i/c^2$. If $\epsilon+p\ne0$, all $U^i$ vanish and $T^{ij}=p\delta^{ij}$, contradicting $(u,u,-u)$ with $u>0$. If $\epsilon+p=0$, the same isotropic spatial matrix follows directly from $T=p\eta$ and gives the same contradiction. Hence no such representation exists; [F2] supplies WEC, NEC, SEC and DEC for this electromagnetic tensor. [F1, F2, A1, algebra]

2.1 In the crossed-field configuration, $|E|^2=E_0^2$ and $|B|^2=E_0^2/c^2$, so [F2] gives $u=E_0^2/(\mu_0c^2)$. Also $E\times B=(E_0^2/c)e_3$, hence $\mathcal S_n=(E\times B)/(\mu_0c)=u e_3$. The observer energy-current four-vector $(u,\mathcal S_n)$ is nonzero null, so its DEC norm bound is attained. [F1, F2, A1, step 1.1, algebra] ∎
