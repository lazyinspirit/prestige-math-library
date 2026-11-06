---
id: def-cft-r5-liouville-probabilistic-sphere-model
kind: definition
title: Probabilistic Liouville CFT on the sphere
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-full-local-cft-data
  - def-virasoro-algebra
  - def-virasoro-highest-weight-module
  - def-cft-r5-spherical-gaussian-free-field
  - def-cft-r5-spherical-gaussian-multiplicative-chaos-data
  - lem-cft-r5-liouville-zero-mode-integral
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
  def-cft-r5-spherical-gaussian-free-field: mathematical-premise
  def-cft-r5-spherical-gaussian-multiplicative-chaos-data: mathematical-premise
  lem-cft-r5-liouville-zero-mode-integral: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "§1.1, equations (1.1)–(1.11), PDF pp. 4–6; the convention is V_alpha=e^{alpha phi}."
    - title: "Rémi Rhodes and Vincent Vargas, Lecture notes on Gaussian multiplicative chaos and Liouville Quantum Gravity, arXiv:1602.07323v1"
      url: https://arxiv.org/pdf/1602.07323
      locator: "§3.3–§3.4, PDF pp. 10–12, for the sphere background, zero mode and Seiberg conditions."
---

## Definition

Use the sphere, Gaussian free field, and spherical Gaussian multiplicative chaos definitions given by the corresponding items on this page. Let $0<\gamma<2$, $\mu>0$, $Q=2/\gamma+\gamma/2$, $\Delta_\alpha=\frac{\alpha}{2}(Q-\frac{\alpha}{2})$, and $c_L=c_R=1+6Q^2$. For an integer $n\ge1$, real charges $\alpha_1,\ldots,\alpha_n$ at distinct points $z_1,\ldots,z_n\in\widehat{\mathbb C}$ have **Seiberg-domain** conditions

$$\alpha_i<Q\quad(1\le i\le n),\qquad \sum_{i=1}^n\alpha_i>2Q.$$

The abstract full-local CFT data package used for context on this page consists of a locally convex state space, left and right Virasoro actions, a unique vacuum and correlator functional, weak local fields, convergent radial operator products, locality, crossed-channel equality, and separately recorded classification flags. This item fixes a probabilistic sphere-correlation model and does not claim that those full package axioms have been constructed for it. The statement that the Seiberg conditions are necessary and sufficient for all corresponding correlation limits is a separate theorem obligation; this definition records the exact domain convention.

Adjoin a real constant mode $c$ with Lebesgue measure $dc$ (it is not a normalized probability variable) and define the distribution-valued field in the finite chart $z\in\mathbb C$ by

$$\phi(z)=c+X(z)-2Q\log|z|_+.$$

For a chosen smoothing family and finite $z\in\mathbb C$, define the regularized vertex insertion

$$V_{\alpha,\varepsilon}(z)=|z|_+^{-4\Delta_\alpha}e^{\alpha c}\exp\!\left(\alpha X_\varepsilon(z)-\frac{\alpha^2}{2}\mathbb E[X_\varepsilon(z)^2]\right).$$

Given a nonzero finite GMC datum $M_\gamma$, the sphere Liouville weight is the sigma-finite measure

$$d\nu_{\gamma,\mu}(c,X)=e^{-2Qc-\mu e^{\gamma c}M_\gamma(S)}\,dc\,d\mathbb P(X).$$

This is sigma-finite: its density is finite because $M_\gamma(S)<\infty$ almost surely, and a finite measurable density with respect to the sigma-finite base measure $dc\otimes\mathbb P$ gives a sigma-finite measure.

For distinct finite points $z_1,\ldots,z_n\in\mathbb C$, when the regularized expectations have a finite limit, the probabilistic $n$-point function is

$$\left\langle\prod_{i=1}^nV_{\alpha_i}(z_i)\right\rangle_{\gamma,\mu}:=\lim_{\varepsilon\downarrow0}\int\prod_{i=1}^nV_{\alpha_i,\varepsilon}(z_i)\,d\nu_{\gamma,\mu}(c,X).$$

An insertion at infinity is defined only at the level of correlations by the conformally normalized limit

$$\left\langle V_{\alpha_n}(\infty)\prod_{i=1}^{n-1}V_{\alpha_i}(z_i)\right\rangle_{\gamma,\mu}:=\lim_{R\to\infty}R^{4\Delta_{\alpha_n}}\left\langle V_{\alpha_n}(R)\prod_{i=1}^{n-1}V_{\alpha_i}(z_i)\right\rangle_{\gamma,\mu},$$

whenever this limit exists. This definition does not assert existence of the limit; results using an insertion at infinity must establish it in their stated domain.

The total-charge restriction in the Seiberg domain is the zero-mode integrability condition proved by the local zero-mode lemma. The individual bounds $\alpha_i<Q$, mollifier-independent Radon-measure construction throughout $0<\gamma<2$, conformal covariance, reflection positivity, and the complete Hilbert-space realization remain separate proof obligations. This is a mathematical sphere-correlation model definition; it does not assert that a realization satisfies every clause of the full local CFT data package.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

[[def-virasoro-highest-weight-module]]

[[def-cft-r5-spherical-gaussian-free-field]]

[[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]

[[lem-cft-r5-liouville-zero-mode-integral]]

[[def-cft-r5-liouville-radial-hamiltonian-data]]

## Remarks

The source convention has central charge $c_L=c_R=1+6Q^2$. For the normalizable continuum label $\alpha=Q+iP$, $P\ge0$, the weight is $\Delta_{Q+iP}=(Q^2+P^2)/4$. These are source conventions for the mathematical CFT data, not claims about a physical realization.

The source theorem used on this page restricts further to $0<\gamma<\sqrt2$ and two strict pair-sum bounds. It does not cover the full interval $0<\gamma<2$, all charges, all insertion counts, or higher genus.
