---
id: ex-ip-singular-state-gaussian-posterior
kind: example
title: "A rank-one prior gives a singular Gaussian inverse posterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-ip-finite-linear-gaussian-posterior
  - cor-ip-gaussian-map-equals-tikhonov-minimizer
  - lem-ip-singular-gaussian-support-and-pseudoinverse
proof_strategy: direct
axiom_use: "AC is inherited from the finite Gaussian posterior model. The example's matrix and one-variable quadratic calculations use no stronger choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), finite-dimensional Gaussian MAP/Tikhonov context; the singular example is computed locally."
---

## Example

Assume AC. Let
$X\sim N_2(0,\operatorname{diag}(1,0))$,
$\eta\sim N_2(0,I_2)$ independently, $A=I_2$, and observe
$y=(2,3)^T$ in the model $Y=AX+\eta$. The prior support is
$S_0=\{(t,0)^T:t\in\mathbb R\}$. The Gaussian posterior version has mean
$(1,0)^T$ and covariance $\operatorname{diag}(1/2,0)$. On $S_0$, the
support-restricted objective is
$$ J_y(x)=(x_1-2)^2+(x_2-3)^2+x_1^2, $$
and its unique minimizer is $(1,0)^T$.

## Example references

[[thm-ip-finite-linear-gaussian-posterior|The posterior formula allows a singular state covariance when the observed covariance is positive definite.]]

[[cor-ip-gaussian-map-equals-tikhonov-minimizer|The MAP, posterior mean, and support-restricted minimizer agree for the finite Gaussian model.]]

## Facts & Assumptions

**Given:** AC, the model and datum in the Example.

[A1] AC is inherited from the Gaussian-law and finite Gaussian-conditioning
interfaces. [[def-axiom-of-choice]]

[F1] The finite linear Gaussian posterior mean and covariance are given by the
displayed conditioning formulas, even for singular prior covariance.
[[thm-ip-finite-linear-gaussian-posterior]]

[F2] The posterior MAP and mean equal the unique support-restricted
Tikhonov minimizer. [[cor-ip-gaussian-map-equals-tikhonov-minimizer]]

[F3] A rank-one Gaussian prior with covariance $\operatorname{diag}(1,0)$ has
support $\{(t,0)^T:t\in\mathbb R\}$ and pseudoinverse
$\operatorname{diag}(1,0)$. [[lem-ip-singular-gaussian-support-and-pseudoinverse]]

## Verification

**Given:** The hypotheses and facts in the Example and Facts & Assumptions.

1.1 Here $C_0=\operatorname{diag}(1,0)$ and $S=AC_0A^T+\Gamma=\operatorname{diag}(2,1)$. Thus $C_0S^{-1}y=(1,0)^T$ and $C_0-C_0S^{-1}C_0=\operatorname{diag}(1/2,0)$, which gives the posterior mean and covariance in the Example by [F1]. [A1, F1, given, algebra]

2.1 On $S_0$, $x_2=0$ and $C_0^\dagger=\operatorname{diag}(1,0)$ by [F3]. The objective becomes $(x_1-2)^2+9+x_1^2 =2(x_1-1)^2+11$, so it has the unique minimizer $(1,0)^T$. By [F2] this point is also the posterior MAP and mean, as asserted. [F2, F3, step 1.1, algebra] ∎
