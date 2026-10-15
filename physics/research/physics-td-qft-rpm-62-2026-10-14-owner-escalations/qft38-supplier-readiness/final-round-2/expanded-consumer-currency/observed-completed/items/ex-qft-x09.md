---
id: ex-qft-x09
kind: example
domain: physics
library: physics
title: Minimal Dirac spin and orbital coefficient comparison
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 10
deps:
  - def-qft-example-data
  - def-qft-example-observable-types
  - pthm-qft-example-dirac-magnetic-benchmark
  - post-qft-qed-local-coupling
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-qft-example-observable-types: formulation-prerequisite
  pthm-qft-example-dirac-magnetic-benchmark: physical-result
  post-qft-qed-local-coupling: physical-assumption
physical_scope: >-
  A uniform-field evaluation of the minimal Dirac spin coefficient and its
  comparison with a separately defined ideal orbital cyclotron coefficient.
  It is not a full Landau spectrum, a radiative anomaly calculation, or an
  experimental prediction.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4 §§4.3 and 4.7, and Chapter 6 §6.3.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
    - title: X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2
      url: https://arxiv.org/html/2209.13084
---

## Statement

Take $q=-e$ with $e>0$, $m>0$, and a constant field
$\mathbf B=B_0\hat z$ with $B_0>0$. It is realized by the smooth SI
potential
$$ \mathbf A(x,y,z)=\frac{B_0}{2}(-y,x,0),\qquad \phi=0, $$
for which $\nabla\times\mathbf A=B_0\hat z$. By
[[pthm-qft-example-dirac-magnetic-benchmark]], the formal spin term is
$-(q/m)\mathbf S\cdot\mathbf B=(e/m)S_zB_0$. Since
$\Sigma_z=\operatorname{diag}(1,-1,1,-1)$, its two spin eigenvalue
coefficients are
$$ \Delta E_{\uparrow,\downarrow}=\pm\frac{e\hbar B_0}{2m},\qquad \Delta E_{\rm gap}=\frac{e\hbar B_0}{m}. $$
Define the comparison orbital coefficient by
$\omega_{c,\rm orb}:=eB_0/m$ and
$\nu_{c,\rm orb}:=\omega_{c,\rm orb}/(2\pi)$. The cyclic coefficient
frequency of the spin gap is
$$ \nu_{s,\rm coeff}:=\frac{\Delta E_{\rm gap}}{2\pi\hbar} =\frac{eB_0}{2\pi m}=\nu_{c,\rm orb}. $$
This is a comparison of formal minimal coefficients. It is not the full
Landau spectrum, a radiative correction, a prediction of zero measured
anomaly, or a laboratory measurement.

## Facts & Assumptions

**Given:** $q=-e\ne0$, $m>0$, $B_0>0$, the displayed smooth pure-magnetic
potential, and the conditional minimal Dirac coefficient of
[[pthm-qft-example-dirac-magnetic-benchmark]].

[F1] [[pthm-qft-example-dirac-magnetic-benchmark]]: the spin term is
$-(q/m)\mathbf S\cdot\mathbf B$ with
$\mathbf S=\hbar\boldsymbol\Sigma/2$ and its matching convention gives
$g_s=2$ at the minimal coefficient level.

[F2] [[def-qft-example-data]]: $e$ is in coulombs, $\hbar$ in
$\mathrm{J\,s}$, $m$ in kilograms, and $B_0$ in tesla.

[F3] [[def-qft-example-observable-types]]: an adopted coefficient is not a
source-reported empirical estimate; empirical uncertainty and conditions
would need to accompany a measurement claim.

[A1] The comparison coefficient is defined as
$\omega_{c,\rm orb}:=eB_0/m$ and
$\nu_{c,\rm orb}:=\omega_{c,\rm orb}/(2\pi)$. This conventional orbital
coefficient is supplied for comparison; no orbit equation is derived here.

## Example

The uniform field makes the spin eigenvalues and the formal coefficient
comparison explicit.

## Verification

1.1 Direct differentiation gives $\nabla\times\frac{B_0}{2}(-y,x,0)=B_0\hat z$, so the potential is smooth and satisfies the field hypothesis of [F1]. From [F1] and $q=-e$, the spin coefficient is $+(e/m)S_zB_0$. The explicit diagonal matrix $\Sigma_z$ has eigenvalues $+1$ and $-1$, so $S_z$ has eigenvalues $+\hbar/2$ and $-\hbar/2$. This gives the two stated shifts and their difference $e\hbar B_0/m$. [given, F1, algebra]

2.1 Dividing that positive gap by $2\pi\hbar$ yields $\nu_{s,\rm coeff}=eB_0/(2\pi m)$, equal to $\nu_{c,\rm orb}$ by [A1]. The unit of $eB_0/m$ is $\mathrm{s}^{-1}$ because $[\mathrm T]=\mathrm{kg}/(\mathrm{C\,s})$; the energy gap has unit joules. The equality is among model coefficients and uses no observation or statistical inference. [step 1.1, F2, F3, A1, algebra] ∎
