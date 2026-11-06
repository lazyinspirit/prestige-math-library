---
id: def-string-local-state-sum-sewing-input
kind: definition
title: Declared local state-sum sewing input
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 9
domain: physics
physical_scope: "An explicit local CFT sewing/factorization assumption on a chosen one-node collar; it does not prove sewing for a model or assert global unitarity."
deps:
  - def-cft-plumbing-and-sewing-parameter
  - def-string-vertex-operator-and-covariant-insertion
  - def-string-plumbing-propagator-and-long-tube
dependency_roles:
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-plumbing-propagator-and-long-tube: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview"
      url: "https://arxiv.org/pdf/1304.2832v4"
      locator: "§§3.2.1–3.2.3, PDF pp. 31–36, factorization through intermediate states near a separating degeneration."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A **declared local state-sum sewing input** for one closed collar consists of a complex graded intermediate state space $\mathcal H$, a nondegenerate bilinear pairing, and specified paired weight eigenvectors $(e_\alpha,e^\alpha)_{\alpha\in I}$ with $\langle e_\alpha,e^\beta\rangle=\delta_\alpha^{\ \beta}$. The index set $I$ is finite or countable. Completeness means that these paired vectors give the prescribed identity expansion on the model's stated state domain; for an infinite basis the topology and domain on which this expansion converges are supplied data. For a holomorphic family the vectors, pairings and domains are supplied at each parameter value. A model requiring an uncountable spectral integral must instead supply its own measure/integral sewing input.

Fix all other component moduli and external insertions. Supply an open continuation domain $D\subseteq\mathbb C^d$, a parameter $\lambda\in D$, the sector, holomorphic dimensionless eigenweights $h_\alpha(\lambda),\bar h_\alpha(\lambda)$, and fixed intercepts $a,\bar a$. The bar labels the independent right-moving weight, not complex conjugation in $\lambda$. Set $\delta_\alpha=h_\alpha-a$, $\bar\delta_\alpha=\bar h_\alpha-\bar a$, $d_\alpha=\delta_\alpha-\bar\delta_\alpha$, and $\Delta_\alpha=(\delta_\alpha+\bar\delta_\alpha)/2$. A term is **level matched** when $d_\alpha=0$; then $\Delta_\alpha=\delta_\alpha=\bar\delta_\alpha$ is its level-matched exponent. Supply linear component amplitude functionals $A_L(\,\cdot\,;\lambda)$ and $A_R(\,\cdot\,;\lambda)$ on the indicated paired state domains, with holomorphic paired coefficients $C_\alpha(\lambda):=A_L(e_\alpha;\lambda)A_R(e^\alpha;\lambda)$. Any graded pairing signs are included in this declared contraction.

Choose $0<\epsilon<1$ and a branch $q=re^{i\theta}$ with $0<r<\epsilon$ and $\theta_0\le\theta<\theta_0+2\pi$, omitting the cut of planar measure zero. Supply the scalar collar coefficient $F(q,\lambda)$ after all other insertions and differentials are fixed. The sewing assumption is the equality
$$F(q,\lambda)=\sum_{\alpha\in I} C_\alpha(\lambda)P_\alpha(q,\lambda),\qquad P_\alpha(q,\lambda):=\exp(2\Delta_\alpha(\lambda)\log r+i\theta d_\alpha(\lambda)).$$
The full collar density is $F(q,\lambda)d^2q/|q|^2$, with $d^2q=dx\,dy$ and dimensionless $q$; thus $P_\alpha=q^{\delta_\alpha}\bar q^{\bar\delta_\alpha}$ is exactly the supplied propagator coefficient. For a countable basis require absolute and locally uniform convergence jointly in $q$ and $\lambda$ on compact subsets of this punctured branch collar times $D$. For a single-valued closed channel additionally require integer $d_\alpha$; angular projection is used only under that condition.

For every compact parameter set $K\subset D$, require the explicit set $S_K:=\{\alpha\in I:\Delta_\alpha(\lambda)=0\text{ for some }\lambda\in K\}$ to be finite. Define the remainder coefficient, with the same reference measure as $F$, by
$$R_K(q,\lambda):=F(q,\lambda)-\sum_{\alpha\in S_K}C_\alpha(\lambda)P_\alpha(q,\lambda)=\sum_{\alpha\notin S_K}C_\alpha(\lambda)P_\alpha(q,\lambda).$$
Require a measurable majorant $G_K(q)\ge0$ with $|R_K(q,\lambda)|\le G_K(q)$ for every $\lambda\in K$ and $\int_{0<|q|<\epsilon}G_K(q)d^2q/|q|^2<\infty$. The **integrated remainder** is the absolutely convergent scalar integral $H_K(\lambda):=\int_{0<|q|<\epsilon}R_K(q,\lambda)d^2q/|q|^2$ for $\lambda\in K$; require it to be the restriction of a supplied holomorphic function on an open neighborhood of $K$ in $D$, agreeing with the integral wherever that integral is defined there. These are separate hypotheses: avoiding zeros of $\Delta_\alpha$ does not by itself imply integrability. For finite $I$ the series convergence is automatic, but the same remainder and continuation requirements remain. The sewing equality and all analytic conditions are per-model inputs, not consequences of the name CFT.

## Definition references

[[def-string-plumbing-propagator-and-long-tube]]

## Facts & Assumptions

**Given:** A single CFT collar with $zw=q$, a state pairing, and the component amplitudes, holomorphic paired coefficients, and convergence domain named in the Definition.

[F1] [[def-cft-plumbing-and-sewing-parameter]] fixes the local plumbing coordinate but does not assert an analytic CFT sewing theorem.

[F2] [[def-string-vertex-operator-and-covariant-insertion]] supplies the declared local vertex-state interface; on-shell/BRST membership is separately required for physical interpretations.

[F3] [[def-string-plumbing-propagator-and-long-tube]] fixes the collar powers, logarithmic coordinate, and branch/intercept convention used by the assumed state-sum equality.

[A1] The equality of the collar correlator with the complete convergent state-pairing sum is adopted as a local model input. This batch has no general theorem proving that axiom for arbitrary worldsheet CFTs.

## Proof

1.1 The definition fixes the state space, pairing, basis, component coefficients, and explicit sewing equality, so every symbol in the local collar state sum has a declared domain and convention. Its analytic-continuation clause makes each paired coefficient holomorphic, while the local-uniform convergence clause controls the collar sum on the stated punctured annulus. The integrable-majorant and integrated-remainder clauses separately make the nonresonant contribution holomorphic, rather than an uncontrolled boundary sum. [given, F1, F2, F3, A1, algebra]

2.1 Because the collar relation and propagator factor are supplied by [F1] together with the chosen intercept/branch data, the input determines a unique local state-sum expression once its basis and coefficients are fixed. It makes no assertion that a given CFT satisfies [A1]; that must be checked for that CFT before using the theorem that follows. [given, F1, F2, F3, step 1.1, algebra, A1] ∎


## Remarks

This is an explicit conditional interface introduced to expose the planned theorem's local sewing hypothesis. It is not a duplicate proof of CFT sewing convergence and is not a global string-field or S-matrix construction.
