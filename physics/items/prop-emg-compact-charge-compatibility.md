---
id: prop-emg-compact-charge-compatibility
kind: proposition
title: "Compact no-boundary normal charge compatibility"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-strict-charged-barotropic-system
  - def-riemannian-divergence
  - prop-coordinate-formula-for-riemannian-divergence
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  def-riemannian-divergence: mathematical-premise
  prop-coordinate-formula-for-riemannian-divergence: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
verification:
  precheck: pending
---

## Statement

Let $\Sigma$ be a compact oriented smooth three-manifold without boundary with smooth Riemannian metric $h$. Let $n$ be a future unit normal, let $e$ be the electric vector determined by the two-form convention of [[def-emg-strict-charged-barotropic-system]], and suppose smooth initial data for that system satisfy the sourced electric Gauss constraint

$$\operatorname{div}_h e=-\mu_0 g(j,n).$$

Define the SI normal-charge integral

$$Q_n:=-\frac1c\int_\Sigma g(j,n)\,\operatorname{vol}_h=\int_\Sigma N Z\bigl(-g(u,n)\bigr)\,\operatorname{vol}_h.$$

Then $Q_n=0$. The result is conditional on the stated Gauss constraint; it does not assert existence of initial data satisfying the remaining Einstein or magnetic constraints.

## Facts & Assumptions

**Given:** The compact oriented boundaryless Riemannian three-manifold and smooth charged-fluid initial data of [[def-emg-strict-charged-barotropic-system]], with its sourced Gauss constraint.

[F1] [[def-emg-strict-charged-barotropic-system]]: $j^a=cNZu^a$, $N>0$, and $g(u,u)=-1$.

[A1] The specified initial electric Gauss equation is $\operatorname{div}_h e=-\mu_0g(j,n)$; it is an explicit hypothesis of this proposition.

[F2] [[def-riemannian-divergence]]: The Riemannian divergence is the scalar determined in each oriented chart by $\mathcal L_e\operatorname{vol}_h=(\operatorname{div}_h e)\operatorname{vol}_h$.

[F3] [[prop-coordinate-formula-for-riemannian-divergence]]: If $h_{ij}$ is the coordinate metric and $e=e^i\partial_i$, then $\operatorname{div}_h e=(\det h)^{-1/2}\partial_i((\det h)^{1/2}e^i)$.

[F4] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: For a compactly supported smooth $2$-form $\eta$ on an oriented boundaryless smooth three-manifold, its finite chart integral satisfies $\int_\Sigma d\eta=0$.

## Proof

**Proof technique:** direct.

1.1 On an oriented coordinate chart write $\operatorname{vol}_h=\sqrt{\det h}\,dx^1\wedge dx^2\wedge dx^3$. Direct contraction gives $\iota_e\operatorname{vol}_h=e^1\sqrt{\det h}\,dx^2\wedge dx^3-e^2\sqrt{\det h}\,dx^1\wedge dx^3+e^3\sqrt{\det h}\,dx^1\wedge dx^2$. Differentiating and reordering the wedge factors gives $d(\iota_e\operatorname{vol}_h)=\partial_i(\sqrt{\det h}\,e^i)dx^1\wedge dx^2\wedge dx^3=(\operatorname{div}_h e)\operatorname{vol}_h$ by [F3]. [F2, F3, algebra]

2.1 Since $\Sigma$ is compact, $\iota_e\operatorname{vol}_h$ is compactly supported. Apply [F4] to step 1.1 to obtain $\int_\Sigma\operatorname{div}_h e\,\operatorname{vol}_h=0$. Integrating [A1] therefore gives $0=-\mu_0\int_\Sigma g(j,n)\operatorname{vol}_h$, and $\mu_0>0$ implies $\int_\Sigma g(j,n)\operatorname{vol}_h=0$. [step 1.1, A1, F4, algebra]

3.1 By [F1], $j=cNZu$ and hence $-c^{-1}g(j,n)=NZ(-g(u,n))$ pointwise. The definition of $Q_n$ and step 2.1 give $Q_n=0$. No sign assumption on $Z$ is needed. [step 2.1, F1, algebra] ∎