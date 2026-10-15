---
id: ex-approximate-vs-exact-d-optimal-design
kind: example
title: "An approximate D-optimum need not be an exact three-run design"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-approximate-linear-model-design-and-optimality-criteria
  - thm-d-optimality-equivalence-theorem
justified_by: []
aliases: []
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
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §7.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Example

Take candidates $\mathcal X=\{0,1,2\}$, regression vector $f(x)=(1,x)^{\mathsf T}$, and $p=2$. The approximate design with weights $\xi^*_0=\xi^*_2=1/2$ and $\xi^*_1=0$ has $\det M(\xi^*)=1$ and is D-optimal. For exactly three runs, the largest possible determinant is $8/9$, so no exact three-run allocation attains the approximate optimum.

## Facts & Assumptions

**Given:** The three candidate points, regression vectors, and approximate design in the Example.

[F1] [[def-approximate-linear-model-design-and-optimality-criteria]]: $M(\xi)=\sum_{x\in\mathcal X}\xi_x f(x)f(x)^{\mathsf T}$.

[F2] [[def-approximate-linear-model-design-and-optimality-criteria]]: an exact $n$-run design has weights $\xi_x=n_x/n$ with nonnegative integer counts summing to $n$.

[F3] [[thm-d-optimality-equivalence-theorem]]: a nonsingular approximate design is D-optimal when every candidate leverage $f(x)^{\mathsf T}M(\xi)^{-1}f(x)$ is at most $p$, with equality on its support.

## Verification

1.1 The information matrix is $M^*=\begin{pmatrix}1&1\\1&2\end{pmatrix}$, with determinant $1$ and inverse $\begin{pmatrix}2&-1\\-1&1\end{pmatrix}$. Hence the leverage at $x$ is $u(x)=(1,x)M^{*-1}(1,x)^{\mathsf T}=(x-1)^2+1$, giving $u(0)=2$, $u(1)=1$, and $u(2)=2$. By [F3], all candidates satisfy $u(x)\le p=2$ and equality holds on the support $\{0,2\}$, so $\xi^*$ is D-optimal. [given, F1, F3, algebra]

1.2 For an exact three-run design let $(n_0,n_1,n_2)$ be the nonnegative integer counts with sum $3$. Substitution into [F1] and the exact-count convention [F2] gives $\det M=(n_0n_1+4n_0n_2+n_1n_2)/9$. [given, F1, F2, algebra]

2.1 The ten count triples give determinants as follows: $(3,0,0),(0,3,0),(0,0,3)$ give $0$; $(2,1,0),(1,2,0),(0,2,1),(0,1,2)$ give $2/9$; $(2,0,1),(1,0,2)$ give $8/9$; and $(1,1,1)$ gives $6/9$. Thus the exact maximum is $8/9$, attained by either endpoint allocation with counts $2$ and $1$. [step 1.2, choose, algebra]

3.1 Since $8/9<1=\det M(\xi^*)$, the exact three-run optimum and the approximate optimum differ. This finite calculation concerns only the stated candidate set and run count. [step 1.1, step 2.1, algebra] ∎