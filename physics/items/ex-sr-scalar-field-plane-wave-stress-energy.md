---
id: ex-sr-scalar-field-plane-wave-stress-energy
kind: example
title: "Null plane-wave scalar field and its conserved stress-energy tensor"
status: draft
origin: pipeline
domain: mathematics
deps: [lem-sr-scalar-field-euler-lagrange, lem-sr-scalar-field-hilbert-stress-energy, lem-sr-scalar-field-stress-divergence-identity, def-ck-tensor-field-on-minkowski-space, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-sr-affine-minkowski-model]
dependency_roles:
  lem-sr-scalar-field-euler-lagrange: mathematical-premise
  lem-sr-scalar-field-hilbert-stress-energy: mathematical-premise
  lem-sr-scalar-field-stress-divergence-identity: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Let $k\ne0$ be a null covector, $\eta^{ab}k_ak_b=0$, with $k^\sharp$ future, let $f:\mathbb R\to\mathbb R$ be smooth, $\theta_0\in\mathbb R$, and let $\varphi(x):=f(k_ax^a+\theta_0)$ in an inertial chart; take $V\equiv0$ and $K>0$. Then $\varphi$ solves the massless scalar-field equation of [[lem-sr-scalar-field-euler-lagrange]], and its Hilbert stress-energy tensor is the conserved tensor $$T^{ab}=Kf'(k_ax^a+\theta_0)^2\,k^ak^b,$$ a positive multiple of the rank-one tensor $k^\sharp\otimes k^\sharp$, whose generating vector $k^\sharp$ is nonzero and future null, wherever $f\prime\ne0$ and the zero tensor wherever $f'=0$.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial chart $x$, constant $\eta_{ab}=\eta^{ab}=\operatorname{diag}(-1,1,1,1)$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]]), coordinate partials $\partial_a$ ([[def-directional-and-partial-derivatives]]); a nonzero null covector $k$ with $k^\sharp$ future ($k^ak_a=0$, $k^a=\eta^{ab}k_b\ne0$, $k^0>0$) ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]); smooth $f$, $\theta:=k_ax^a+\theta_0$; $V\equiv0$, $K>0$; $\varphi=f\circ\theta$, a smooth scalar field ([[def-ck-tensor-field-on-minkowski-space]]).

[F1] Chain rule: $\partial_a\varphi=f'(\theta)k_a$ and $\partial_a\partial_b\varphi=f''(\theta)k_ak_b$. ([[thm-chain-rule-for-total-derivatives]], [[def-directional-and-partial-derivatives]])

[F2] Scalar-field equation and Hilbert tensor: the field equation of the model with potential $V$ is $\Box\varphi=V'(\varphi)$, and the Hilbert tensor of the density with this $V$ is $T^{ab}=K[\partial^a\varphi\partial^b\varphi-\eta^{ab}(\tfrac12\partial_d\varphi\partial^d\varphi+V(\varphi))]$. ([[lem-sr-scalar-field-euler-lagrange]], [[lem-sr-scalar-field-hilbert-stress-energy]])

[F3] Divergence identity: $\partial_aT^{ab}=K(\Box\varphi-V'(\varphi))\partial^b\varphi$; consequently any solution of the field equation has conserved Hilbert tensor. ([[lem-sr-scalar-field-stress-divergence-identity]])

## Verification

**Proof technique:** direct.

1.1 The field solves the massless equation. By [F1], $\partial_a\varphi=f'(\theta)k_a$ and $\partial_a\partial_b\varphi=f''(\theta)k_ak_b$; hence $\Box\varphi=\eta^{ab}\partial_a\partial_b\varphi=f''(\theta)\eta^{ab}k_ak_b=0$, because $k$ is null. With $V\equiv0$ this is exactly the scalar-field equation $\Box\varphi=V'(\varphi)$ of [F2]. [F1, F2, given]

2.1 The stress-energy tensor. Substituting [F1] into the Hilbert formula of [F2] with $V\equiv0$ gives $\partial^a\varphi\partial^b\varphi=f'(\theta)^2k^ak^b$ and $\partial_d\varphi\partial^d\varphi=f'(\theta)^2k_dk^d=0$, hence $T^{ab}=Kf'(\theta)^2k^ak^b$, which is symmetric. Wherever $f'(\theta)\ne0$ the coefficient $Kf'(\theta)^2$ is positive and $T$ is a positive multiple of the rank-one tensor $k^\sharp\otimes k^\sharp$ with nonzero future null generating vector $k^\sharp$; wherever $f'(\theta)=0$ all components vanish. For every future unit $n$, $T^{ab}n_an_b=Kf'(\theta)^2(k_an^a)^2\ge0$; in the inertial frame, $T^{00}=Kf'(\theta)^2(k^0)^2\ge0$ with $k^0>0$. [F1, step 1.1, given]

2.2 Conservation. Since $\varphi$ solves the field equation by step 1.1, [F3] gives $\partial_aT^{ab}=0$: the plane-wave tensor is conserved on the whole chart domain. [F3, step 1.1]

3.1 The example is an explicit conditional computation for the massless scalar model with a null plane-wave profile; it asserts no wave observation, no energy condition beyond the displayed nonnegativity and no measurement. [step 2.1, step 2.2] ∎
