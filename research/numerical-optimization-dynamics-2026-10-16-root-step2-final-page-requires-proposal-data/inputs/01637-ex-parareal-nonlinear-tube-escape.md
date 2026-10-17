---
id: ex-parareal-nonlinear-tube-escape
kind: example
title: "A nonlinear Parareal iterate can leave its local Lipschitz tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-parareal-propagator-pair
  - alg-parareal-correction-sweeps
  - thm-parareal-binomial-error-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Slides 23–29, Parareal recurrence and finite-sweep behavior."
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16, Parareal error hypotheses and convergence estimate."
---

## Example

Let $D=[0,1]$, $F(x)=x^2$, and $G(x)=x$. Both maps send $D$ into itself. On $D$, $G$ is $1$-Lipschitz and $F-G$ is $1$-Lipschitz. With $x_0=1/4$ and two macro intervals, the first corrected row contains $U_2^1=-1/8$, outside $D$. The tube condition in the binomial error theorem must therefore be checked for corrected iterates; invariance of the individual maps on $D$ is insufficient.

## Facts & Assumptions

**Given:** The finite Parareal recurrence and the stated maps on $D=[0,1]$.

[F1] [[alg-parareal-correction-sweeps]]: $U_{n+1}^{k+1}=G(U_n^{k+1})+F(U_n^k)-G(U_n^k)$, with $U_{n+1}^0=G(U_n^0)$.

[F2] [[thm-parareal-binomial-error-bound]]: the estimate requires all fine and Parareal iterates under consideration to belong to one common set where the two Lipschitz inequalities hold.

[A1] $N=2$, $x_0=1/4$, $F(x)=x^2$, $G(x)=x$, and $D=[0,1]$.

## Verification

1.1 For $x,y\in D$, $|G(x)-G(y)|=|x-y|$. Also $(F-G)(x)-(F-G)(y)=(x-y)(x+y-1)$, and $|x+y-1|\le1$ on $D$, so $F-G$ is $1$-Lipschitz there. Both maps take $D$ into $D$. [given, A1, algebra]

2.1 Coarse initialization gives $U_1^0=U_2^0=1/4$, while the first corrected node is $U_1^1=F(1/4)=1/16$. Applying [F1] again, $U_2^1=G(1/16)+F(1/4)-G(1/4)=1/16+1/16-1/4=-1/8$. [A1, F1, step 1.1, algebra]

3.1 Since $-1/8\notin D$, the first corrected table already leaves the set on which the Lipschitz bounds were verified. Thus [F2] cannot be invoked for a sweep whose comparisons use that value; no divergence conclusion follows. [given, F2, step 2.1] ∎

