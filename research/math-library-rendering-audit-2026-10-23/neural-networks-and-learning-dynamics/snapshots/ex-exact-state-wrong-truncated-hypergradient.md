---
id: ex-exact-state-wrong-truncated-hypergradient
kind: example
title: "An exact primal state can have a wrong finite-unroll derivative"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-smooth-bilevel-learning-problem
  - rem-truncated-training-and-exact-hypergradients
  - thm-finite-iteration-sensitivity-bound-and-residual-limitation
  - thm-smooth-bilevel-hypergradient-formula
justified_by: []
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §§6.3.1–6.3.2"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
---

## Example

Fix $q\in(0,1)$ and define $G(z,\theta)=qz+(1-q)\theta$ for $z,\theta\in\mathbb R$, with initialization $z_0(\theta)=0$, recurrence $z_{k+1}(\theta)=G(z_k(\theta),\theta)$, and outer objective $g(z,\theta)=z$. The exact fixed-point branch is $z^*(\theta)=\theta$, so the exact hypergradient of $J(\theta)=g(z^*(\theta),\theta)$ is $1$. For every finite $K\ge1$, the $K$-step iterate is $z_K(\theta)=(1-q^K)\theta$. At $\theta_0=0$ it equals the exact state and its fixed-point residual $r_K:=z_K(0)-G(z_K(0),0)$ is zero, but its derivative is $1-q^K\ne1$. Thus an exact primal state and zero primal residual do not force the finite-unroll derivative to equal the implicit hypergradient.

## Example references

[[def-smooth-bilevel-learning-problem|Stationary branch and hypergradient]]

[[rem-truncated-training-and-exact-hypergradients|Finite-iteration and exact-branch distinction]]

[[thm-finite-iteration-sensitivity-bound-and-residual-limitation|Finite-iteration sensitivity result]]

## Facts & Assumptions

**Given:** $q\in(0,1)$, $G(z,\theta)=qz+(1-q)\theta$, $z_0(\theta)=0$, and $g(z,\theta)=z$. For comparison with the stationary-branch formula, set $f(\theta,z):=\frac12(z-\theta)^2$ on $\Theta=W=\mathbb R$; both $f$ and $g$ are polynomials, so they meet the $C^2$ and $C^1$ assumptions on these open domains. The stationarity equation is $z-\theta=0$, which is equivalent to $z=G(z,\theta)$ because $1-q>0$. Compare the exact fixed-point derivative with the derivative of a finite iterate at $\theta_0=0$.

[F1] [[def-smooth-bilevel-learning-problem]]: the exact stationary branch defines the outer objective whose derivative is the implicit hypergradient.

[F2] [[thm-finite-iteration-sensitivity-bound-and-residual-limitation]]: a finite contraction iterate differentiates its finite composition, and its derivative can differ from the fixed-point sensitivity even with zero primal residual.

[F3] [[thm-smooth-bilevel-hypergradient-formula]]: for a $C^2$ inner objective and $C^1$ outer objective with invertible stationary Hessian, the local branch hypergradient is $\partial_\theta g-B^TH^{-T}\nabla_zg$.

## Verification

1.1 Solving $z=G(z,\theta)$ gives $(1-q)z=(1-q)\theta$. Since $1-q>0$, the unique fixed point is $z^*(\theta)=\theta$, and therefore $J(\theta)=z^*(\theta)$ has derivative $1$. Also $G_z=q<1$. [given, F1, algebra]

1.2 For $K=0$, $z_0(\theta)=(1-q^0)\theta=0$. If $z_K(\theta)=(1-q^K)\theta$, then $z_{K+1}=q(1-q^K)\theta+(1-q)\theta=(1-q^{K+1})\theta$. Induction gives the displayed finite-iterate formula for every $K\ge1$. [given, algebra, construct]

2.1 The inner objective has $\partial_zf=z-\theta$, so its stationary branch is the same $z^*(\theta)=\theta$ as the fixed-point branch. Here $H=1$, $B=-1$, $\partial_\theta g=0$, and $\nabla_zg=1$. Formula [F3] therefore gives $0-(-1)(1)^{-1}(1)=1$, verifying the exact hypergradient under the bilevel prerequisites. [F1, F3, given, step 1.1, algebra]

2.2 At $\theta_0=0$, step 1.2 gives $z_K(0)=0=z^*(0)$ and the fixed-point residual is $z_K(0)-G(z_K(0),0)=0-G(0,0)=0$. The stopped outer objective is $J_K(\theta)=g(z_K(\theta),\theta)=(1-q^K)\theta$, so $J_K'(0)=1-q^K$. [given, step 1.2, algebra]

3.1 Because $0<q<1$ and $K\ge1$, $q^K>0$, hence $1-q^K\ne1$. Thus the zero residual at the exact state does not make the finite-unroll derivative equal to the exact hypergradient. [F2, step 2.1, step 2.2, algebra] ∎
