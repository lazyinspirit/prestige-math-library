---
id: cex-pinn-regularization-thresholds-need-balanced-sample-counts
kind: counterexample
title: "The PINN regularization thresholds need not be comparable under the stated count condition"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [alg-empirical-pinn-objective]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "equations (3.1)–(3.2), Appendix C, proof of Theorem 3.2"
---

## Statement refuted

For $d\ge2$, $0<\alpha\le1$, and positive constants in equation (3.1), the count condition $m_r=O(m_b^{d/(d-1)})$ alone does not imply that the two threshold coordinates have bounded max-to-min ratio. In particular, choosing $\lambda_m^R=\widehat\lambda_m^R$ satisfies the stated coordinatewise lower bound and norm upper bound, while that ratio can diverge.

## Statement references
[Shin et al., equations (3.1)–(3.2) and Appendix C: threshold and minimizer comparison](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix C, equation (21): claimed regularizer-coordinate comparability](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The threshold definitions for $d\ge2$, positive fixed $\lambda_r,\lambda_b,c_r,c_b$, and the sample-count condition in the Statement.

[F1] The exact thresholds are
$$\widehat\lambda^R_{r,m}=\frac{3\lambda_r(\sqrt d)^{2\alpha}c_r^{-2\alpha/d}m_r^{-\alpha/d}}{C_m},\qquad \widehat\lambda^R_{b,m}=\frac{3\lambda_b(\sqrt d)^{2\alpha}c_b^{-2\alpha/(d-1)}m_b^{-\alpha/(d-1)}}{C_m},$$
where the same positive $C_m$ divides both coordinates ([[alg-empirical-pinn-objective]]).

## Proof

**Proof strategy:** explicit sample-count sequence.

1.1 Set $m_r=m_b=n$ for integers $n\ge1$. Since $d/(d-1)>1$, we have $n\le n^{d/(d-1)}$, so the required count condition holds. Choose $\lambda_m^R=\widehat\lambda_m^R$; then the coordinatewise lower-bound condition is equality and the max norm is exactly the prescribed comparison scale. [given, F1, algebra, choose]

2.1 Cancelling the common factor $C_m$ in [F1] gives $$\frac{\lambda^R_{r,m}}{\lambda^R_{b,m}}=\frac{\widehat\lambda^R_{r,m}}{\widehat\lambda^R_{b,m}}=\frac{\lambda_r c_r^{-2\alpha/d}}{\lambda_b c_b^{-2\alpha/(d-1)}}\,n^{\alpha/(d-1)-\alpha/d}=C\,n^{\alpha/(d(d-1))},$$ where $C>0$ is independent of $n$. The exponent is positive, so the ratio tends to infinity. Thus the two coordinates need not be comparable under the stated count condition. [step 1.1, F1, algebra] ∎

