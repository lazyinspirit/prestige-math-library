---
id: def-milstein-scheme-and-iterated-integrals
kind: definition
title: "Milstein updates, iterated Brownian integrals, and commutative noise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-continuous-brownian-ito-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Chapters 5.2 and 10.3, printed pp. 167-176 and 345-351"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Section 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 6.4"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Definition

Assume AC and the Brownian filtered-space conventions in [[def-continuous-brownian-ito-process]]. Let $d,m\ge1$ be finite integers, let $W=(W^1,\ldots,W^m)$ be the driving standard Brownian motion, and consider the autonomous It\^o SDE
$$dX_t=b(X_t)\,dt+\sum_{j=1}^m\sigma_j(X_t)\,dW^j_t,$$
where $b:\mathbb R^d\to\mathbb R^d$ and each $\sigma_j:\mathbb R^d\to\mathbb R^d$ is differentiable. For a differentiable vector-valued function $f$, $Df(x)$ is its Jacobian and $L_i f(x):=Df(x)\sigma_i(x)$; this definition is applied componentwise when $f$ is matrix-valued.

On a deterministic grid $t_n=nh$, define $\Delta W_n^j=W^j_{t_{n+1}}-W^j_{t_n}$ and the iterated It\^o integral
$$I_{ij,n}:=\int_{t_n}^{t_{n+1}}(W^i_s-W^i_{t_n})\,dW^j_s,\qquad 1\le i,j\le m.$$
The integrand is predictable and square-integrable, so this is the $L^2$ It\^o integral of [[def-ito-integral-for-square-integrable-predictable-processes]]; its finite energy is $\mathbb E\int_{t_n}^{t_{n+1}}(W^i_s-W^i_{t_n})^2ds=h^2/2$ by [[thm-ito-isometry-and-linearity-in-predictable-l2]].

The general Milstein Taylor update is
$$Y_{n+1}=Y_n+b(Y_n)h+\sum_{j=1}^m\sigma_j(Y_n)\Delta W_n^j+\sum_{i,j=1}^m L_i\sigma_j(Y_n)I_{ij,n}.$$
The diffusion fields have **commutative noise** when $L_i\sigma_j(x)=L_j\sigma_i(x)$ for every $x$ and every $i,j$. Under that condition, the equivalent update using only Brownian increments is
$$Y_{n+1}=Y_n+b(Y_n)h+\sum_{j=1}^m\sigma_j(Y_n)\Delta W_n^j+\frac12\sum_{i,j=1}^m L_i\sigma_j(Y_n)\bigl(\Delta W_n^i\Delta W_n^j-\delta_{ij}h\bigr).$$
For scalar noise ($d=m=1$), this reads
$$Y_{n+1}=Y_n+b(Y_n)h+\sigma(Y_n)\Delta W_n+\frac12\sigma(Y_n)\sigma'(Y_n)\bigl((\Delta W_n)^2-h\bigr).$$

For every $1\le i,j\le m$, define the Brownian area component $A_{ij,n}:=(I_{ij,n}-I_{ji,n})/2$ and the symmetric part $S_{ij,n}:=(I_{ij,n}+I_{ji,n})/2$. In particular, $A_{ii,n}=0$ and $S_{ii,n}=I_{ii,n}$. Then $A_{ji,n}=-A_{ij,n}$, $S_{ji,n}=S_{ij,n}$, and reindexing the sums gives
$$\sum_{i,j}L_i\sigma_j I_{ij,n}=\frac12\sum_{i,j}(L_i\sigma_j+L_j\sigma_i)S_{ij,n}+\frac12\sum_{i,j}(L_i\sigma_j-L_j\sigma_i)A_{ij,n}.$$
The second sum vanishes under commutative noise; otherwise the general update includes the area components. A noncommuting Milstein implementation must sample or approximate the needed areas and account for their approximation error and computational cost; this definition makes no claim that an exact area sample is free or that a particular area sampler has a specified error rate.

For this pair, $C_b^k(\mathbb R^d;\mathbb R^q)$ means that every component and every partial derivative of orders at most $k$ exists, is continuous, and is bounded. This notation is componentwise for vector and matrix valued functions.
