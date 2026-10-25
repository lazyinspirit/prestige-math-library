---
id: lem-it-finite-vector-gaussian-water-level-allocation
kind: lemma
title: "Finite Gaussian water-level allocation"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the optimization is finite-dimensional."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§10.3.3, Theorem 10.3.3, printed pp. 313–314: reverse water-filling for independent Gaussian coordinates."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "§4.7.3, printed pp. 105–106: the vector Shannon lower bound; the exact finite allocation is proved locally here."
---

## Statement

Let $m\ge1$, let $\lambda_1,\ldots,\lambda_m\ge0$, and for $0\le\delta_i\le\lambda_i$ put

$$\phi_i(\delta_i):=\begin{cases}\frac12\log_2(\lambda_i/\delta_i),&\lambda_i>0,\ 0<\delta_i\le\lambda_i,\\+\infty,&\lambda_i>0,\ \delta_i=0,\\0,&\lambda_i=0,\ \delta_i=0.\end{cases}$$

For a total distortion budget $D\ge0$, minimize $\sum_i\phi_i(\delta_i)$ subject to $\sum_i\delta_i\le D$ and $0\le\delta_i\le\lambda_i$. If $0<D<\sum_i\lambda_i$, there is a unique $\theta\in(0,\max_i\lambda_i)$ satisfying

$$\sum_i\min(\lambda_i,\theta)=D,$$

and the minimum is

$$\frac12\sum_i\log_2^+(\lambda_i/\theta),\qquad \delta_i^*=\min(\lambda_i,\theta),$$

where $\log_2^+(u):=\max(0,\log_2 u)$ for $u>0$, and $\log_2^+(0):=0$. If $D=0$, the minimum is $+\infty$ when some $\lambda_i>0$ and is $0$ when all $\lambda_i=0$. If $D\ge\sum_i\lambda_i$, the minimum is $0$.

## Facts & Assumptions

**Given:** A nonempty finite list of nonnegative numbers $\lambda_i$ and $D\ge0$.

## Proof




1.1 Define $S(\theta)=\sum_i\min(\lambda_i,\theta)$ for $0\le\theta\le\max_i\lambda_i$. It is continuous, $S(0)=0$, and $S(\max_i\lambda_i)=\sum_i\lambda_i$. If $0\le\theta_1<\theta_2<\max_i\lambda_i$, some $\lambda_j>\theta_2$, so the $j$-th summand increases strictly and the others do not decrease. Thus for $0<D<\sum_i\lambda_i$, the intermediate-value theorem gives a unique $\theta$ with $S(\theta)=D$. [given, algebra]

1.2 For $t>0$, $\ln t\le t-1$: if $t\ge1$, integrate $1/u\le1$ on $[1,t]$; if $0<t<1$, use $\ln t=-\int_t^1du/u$ and $1/u\ge1$ on $[t,1]$. Hence $-\ln t+t-1\ge0$. [given, algebra]

2.1 Fix $0<D<\sum_i\lambda_i$, its $\theta$, and $c=(2\theta\ln2)^{-1}$. If $\lambda_i>\theta$, then for $0<\delta_i\le\lambda_i$, $$\phi_i(\delta_i)-\phi_i(\theta)+c(\delta_i-\theta)=\frac{-\ln(\delta_i/\theta)+\delta_i/\theta-1}{2\ln2}\ge0$$ by step 1.2; the inequality also holds at $\delta_i=0$ because $\phi_i(0)=+\infty$. If $0<\lambda_i\le\theta$, then $\phi_i(\lambda_i)=0$, and for $0<\delta_i\le\lambda_i$, step 1.2 gives $$\phi_i(\delta_i)\ge\frac{1-\delta_i/\lambda_i}{2\ln2}\ge\frac{\lambda_i-\delta_i}{2\theta\ln2}=-c(\delta_i-\lambda_i).$$ It holds at $\delta_i=0$ by the infinite-value convention. A zero eigenvalue has only $\delta_i=0$ and contributes zero. Thus for every feasible coordinate, $\phi_i(\delta_i)\ge\phi_i(\delta_i^*)-c(\delta_i-\delta_i^*)$, with $\delta_i^*=\min(\lambda_i,\theta)$. [given, step 1.2, algebra]

3.1 Summing the supporting inequalities in step 2.1 and using $\sum_i\delta_i\le D=\sum_i\delta_i^*$ proves $\sum_i\phi_i(\delta_i)\ge\sum_i\phi_i(\delta_i^*)$. The latter sum is exactly $\frac12\sum_i\log_2^+(\lambda_i/\theta)$; the allocation is feasible, so it attains the minimum. [given, step 2.1, algebra]

4.1 If $D=0$, nonnegativity forces every $\delta_i=0$, giving the two stated cases. If $D\ge\sum_i\lambda_i$, choose $\delta_i=\lambda_i$ for every i; all rates are zero, and no feasible objective can be negative. These cases complete the endpoint and degenerate branches. [given, step 3.1, algebra] ∎
