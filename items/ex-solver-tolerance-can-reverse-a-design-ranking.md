---
id: ex-solver-tolerance-can-reverse-a-design-ranking
kind: example
title: "A small sensitivity solve error can reverse a two-design ranking"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - lem-computed-sensitivity-singular-value-perturbation
  - lem-information-matrix-perturbation-bound
  - lem-logdet-information-perturbation-bound
  - thm-uniform-sensitivity-error-controls-design-gap
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "The complete article was retrieved and §2.3 inspected for information conditioning and D-optimal objective sensitivity."
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §7.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book and §7.5 were read for the D-optimal determinant criterion."
---

## Example

Two scalar candidate designs have exact sensitivities $101/100$ and $1$, so the first is D-optimal. A solver returns $99/100$ and $51/50$, each within $1/50$ of its exact sensitivity, reversing the computed ranking. Both exact and computed information matrices remain uniformly positive definite, so the conditional design-gap bound applies.

## Facts & Assumptions

**Given:** Candidate set $\mathcal X=\{d_1,d_2\}$, parameter dimension $p=1$, unit precision $W_{d_1}=W_{d_2}=1$, exact sensitivities $J_{d_1}=101/100$, $J_{d_2}=1$, and computed sensitivities $J_{h,d_1}=99/100$, $J_{h,d_2}=51/50$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]] defines the scalar information $M(d)=J_d^TW_dJ_d$; [[lem-information-matrix-perturbation-bound]] defines its computed counterpart $M_h(d)=J_{h,d}^TW_dJ_{h,d}$.

[F2] [[lem-computed-sensitivity-singular-value-perturbation]]: each singular-value error is bounded by the operator norm of the Jacobian error.

[F3] [[lem-information-matrix-perturbation-bound]]: for $K=101/100$, $\eta=1/50$, and $w=1$, the information error is at most $\delta=w(2K\eta+\eta^2)$.

[F4] [[lem-logdet-information-perturbation-bound]]: if all matrices on each true/computed segment have eigenvalues at least $\alpha>0$, then each log-determinant error is at most $p\delta/\alpha$.

[F5] [[thm-uniform-sensitivity-error-controls-design-gap]]: a computed maximizer under uniform error $\delta$ and eigenvalue floor $\alpha$ has true log-determinant gap at most $2p\delta/\alpha$ when $\tau=0$.

[F6] [[thm-logarithm-derivative-and-integral]]: $\log(1+x)=\int_1^{1+x}dt/t$ for $x>0$ and $\log$ is strictly increasing.

## Verification

1.1 The exact information values are $M(d_1)=(101/100)^2=10201/10000$ and $M(d_2)=1$, so the true log-determinant criterion ranks $d_1$ above $d_2$. The computed values are $M_h(d_1)=(99/100)^2=9801/10000$ and $M_h(d_2)=(51/50)^2=10404/10000$, so the computed criterion ranks $d_2$ above $d_1$ by strict monotonicity of $\log$ from [F6]. [given, F1, F6, algebra]

1.2 The two Jacobian errors have absolute value $1/50$, and for one-dimensional matrices this is the singular-value error, consistent with [F2]. Here $K=101/100$, $\eta=1/50$, and $w=1$, so [F3] gives the uniform bound $\delta=2(101/100)(1/50)+(1/50)^2=51/1250$. For any approximate design $\xi=(\lambda,1-\lambda)$ with $0\le\lambda\le1$, $M(\xi)$ is a convex combination of $10201/10000$ and $1$, hence is at least $1$; $M_h(\xi)$ is a convex combination of $9801/10000$ and $10404/10000$, hence is at least $\alpha=9801/10000$. Their segment also has this lower bound. [given, F1, F2, F3, algebra]

2.1 By [F4] each criterion error is at most $\delta/\alpha=(51/1250)/(9801/10000)=408/9801$. The computed maximizer is $d_2$, so [F5] bounds its true log-determinant gap from the true maximizer $d_1$ by $816/9801$. Directly, that gap is $\log(10201/10000)\le201/10000$ by the integral in [F6], and $201/10000<816/9801$ by cross-multiplication. Thus the ranking flip is consistent with the stated uniform error guarantee. [step 1.1, step 1.2, F4, F5, F6, algebra] ∎
