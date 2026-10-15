---
id: ex-euler-maruyama-superlinear-drift-outside-global-lipschitz-contract
kind: example
title: "A superlinear drift outside the Euler–Maruyama moment contract"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-euler-maruyama
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Facts & Assumptions

**Given:** AC, a scalar state, a scalar Brownian increment, and the
coefficient pair $b(x)=-x^3$, $\sigma(x)=1$.

[F1] The shared contract requires globally Lipschitz coefficients in state
and a uniform linear-growth bound.
[[alg-euler-maruyama]]

[F2] The uniform-moment theorem applies only under the coefficient and
initial-value hypotheses of the shared contract.
[[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[A1] AC is inherited from the Brownian interface; no choice is made in the
coefficient calculation.
[[def-axiom-of-choice]]

## Example

For the scalar coefficient pair $b(x)=-x^3$ and $\sigma(x)=1$, the drift is
superlinear: its magnitude grows faster than $1+|x|$. This is an example
about the hypotheses of the Euler–Maruyama moment theorem; it makes no
claim about strong existence, instability, or convergence for this
particular equation.

## Verification

1.1 The diffusion $\sigma=1$ is globally Lipschitz and has linear growth. For the drift, $|b(x)|/(1+|x|)=|x|^3/(1+|x|)\to\infty$ as $|x|\to\infty$, so no finite linear-growth constant exists. Also $|b(x)-b(0)|/|x|=|x|^2\to\infty$, so no finite global Lipschitz constant exists. [F1, algebra]

2.1 Since both required drift conditions fail, the uniform-moment theorem [F2] cannot be invoked for this coefficient pair. The conclusion is only that its stated hypotheses are absent; no contrary convergence or moment claim follows. AC in [A1] is inherited and no choice is used. [A1, F1, F2, algebra] ∎
