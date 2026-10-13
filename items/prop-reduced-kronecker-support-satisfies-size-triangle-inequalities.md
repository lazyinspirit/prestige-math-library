---
id: prop-reduced-kronecker-support-satisfies-size-triangle-inequalities
kind: proposition
title: "The support of the reduced Kronecker coefficients satisfies the size triangle inequalities"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Murnaghan's inequalities, p. 4"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Statement

If $\bar g^\gamma_{\alpha,\beta}>0$ then
$$|\alpha|\le|\beta|+|\gamma|,\qquad |\beta|\le|\alpha|+|\gamma|, \qquad |\gamma|\le|\alpha|+|\beta|$$
(Murnaghan's inequalities). Hence the support $\operatorname{Supp}(\alpha,\beta)$
of the nonzero reduced coefficients with fixed $\alpha,\beta$ lies in the
triangle region of the weight lattice.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$ with $\bar g^\gamma_{\alpha,\beta}>0$ and a nonzero summand $(\mu,\lambda,\eta,\rho,\theta,\pi)$ of the expansion.

[F1] $\bar g^\gamma_{\alpha,\beta}=\sum c^\gamma_{\mu,\theta,\pi}c^\alpha_{\rho,\lambda,\theta}c^\beta_{\rho,\eta,\pi}g^\mu_{\lambda,\eta}$, a sum of nonnegative integers, and for every nonzero summand $|\alpha|=|\rho|+|\lambda|+|\theta|$, $|\beta|=|\rho|+|\eta|+|\pi|$, $|\gamma|=|\mu|+|\theta|+|\pi|$ and $|\mu|=|\lambda|=|\eta|$ ([[lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients]]).

## Proof

**Proof technique:** direct.

1.1 Since $\bar g^\gamma_{\alpha,\beta}>0$ is a sum of nonnegative integers, some summand is positive; fix such a summand, whose four coefficients are positive and whose sizes satisfy the degree equations of [F1]. [F1]

2.1 *The three differences.* Using the degree equations and $|\lambda|=|\eta|=|\mu|$, compute $|\alpha|+|\beta|-|\gamma|=(|\rho|+|\lambda|+|\theta|)+(|\rho|+|\eta|+|\pi|)-(|\mu|+|\theta|+|\pi|)=2|\rho|+|\lambda|+|\eta|-|\mu|=2|\rho|+|\mu|\ge0$; next $|\alpha|+|\gamma|-|\beta|=(|\rho|+|\lambda|+|\theta|)+(|\mu|+|\theta|+|\pi|)-(|\rho|+|\eta|+|\pi|)=|\lambda|+|\mu|+2|\theta|-|\eta|=|\mu|+2|\theta|\ge0$; and symmetrically $|\beta|+|\gamma|-|\alpha|=(|\rho|+|\eta|+|\pi|)+(|\mu|+|\theta|+|\pi|)-(|\rho|+|\lambda|+|\theta|)=|\mu|+2|\pi|\ge0$. Each difference is a sum of nonnegative integers, giving the three inequalities for this summand. [F1, step 1.1]

3.1 Since these inequalities depend only on the sizes of $\alpha,\beta,\gamma$ and not on the chosen positive summand, they hold whenever $\bar g^\gamma_{\alpha,\beta}>0$, that is, for every $\gamma\in\operatorname{Supp}(\alpha,\beta)$. This is precisely the assertion that the support lies in the triangle region cut out by the three size inequalities. The argument is a finite computation with nonnegative integers and uses no choice principle; the empty partition is allowed, and then the corresponding inequality is the trivial nonnegativity bound. [F1, step 2.1] ∎
