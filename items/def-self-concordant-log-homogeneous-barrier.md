---
id: def-self-concordant-log-homogeneous-barrier
kind: definition
title: "Self-concordant log-homogeneous barriers and their local geometry"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.5, printed pp. 585–596; Chapter 9 §9.6 for the self-concordance convention."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 14: Self-concordant functions"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture14.pdf"
      locator: "Full 2-page lecture, Definition 14.1, local Hessian metric and Newton decrement."
---

## Definition

Let $E$ be a finite-dimensional real inner-product space, let $D\subset E$ be open and convex, and let $F:D\to\mathbb R$ be $C^3$. Write $H_F(x)=D^2F(x)$ for its Hessian as a self-adjoint operator. A **self-concordant barrier** on $D$ is a strictly convex $F$ with positive-definite Hessian, with $F(x_k)\to+\infty$ whenever $x_k$ approaches a finite boundary point of $D$, and satisfying both conditions below.

For $x\in D$, define the local norm and its dual by
$$\|h\|_x=\sqrt{D^2F(x)[h,h]},\qquad \|\ell\|_{x,*}=\sup_{\|h\|_x\le1}|\ell[h]|.$$
The **Dikin inclusion** is $\{x+h:\|h\|_x<1\}\subset D$. The **self-concordance inequality** is
$$|D^3F(x)[u,v,v]|\le2\|u\|_x\|v\|_x^2\qquad(u,v\in E).$$
The Newton decrement is $\lambda_F(x)=\|DF(x)\|_{x,*}$.

If $K\subset E$ is a closed convex cone with nonempty interior and $D=\operatorname{int}K$, the barrier is **$\nu$-log-homogeneous** when $\nu>0$, $F(\alpha x)=F(x)-\nu\log\alpha$ for every $x\in D$ and $\alpha>0$, and $\lambda_F(x)\le\sqrt\nu$ for every $x\in D$. The number $\nu$ is its barrier parameter. When equality constraints $Ax=b$ are imposed, local norms and decrements are computed after restricting $D^2F$ and $DF$ to the tangent space $\ker A$.
