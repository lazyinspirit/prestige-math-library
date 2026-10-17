---
id: thm-csm-examples-quadratic-covariance
kind: theorem
title: "Gaussian covariance for positive quadratic forms and a boundary counterexample"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-csm-examples-gamma-gaussian-tools
dependency_roles:
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "David Tong, Statistical Physics, §2.2.1, equipartition of quadratic degrees of freedom"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $K\in\mathbb R^{n\times n}$ be symmetric positive definite, and let $\beta>0$. For $x\in\mathbb R^n$ put $H(x)=\tfrac12x^{\mathsf T}Kx$ and define the probability density $Z^{-1}e^{-\beta H(x)}$ with respect to Lebesgue measure. Then

$$Z=\int_{\mathbb R^n}e^{-\beta H(x)}dx=\left(\frac{2\pi}{\beta}\right)^{n/2}(\det K)^{-1/2},\quad \mathbb E[x]=0,\quad \mathbb E[xx^{\mathsf T}]=\beta^{-1}K^{-1},\quad \mathbb E[H]=\frac{n}{2\beta}.$$

Positive definiteness and $\beta>0$ are essential for this normalized full-space Gaussian. The unrestricted identity $\mathbb E[x\,H'(x)]=\beta^{-1}$ is false without a boundary hypothesis: on $[-L,L]$ with $L>0$ and $H\equiv0$, the normalized expectation on the left is $0$.

## Facts & Assumptions

**Given:** $n\ge1$, symmetric positive-definite $K$, $\beta>0$, and $H(x)=\tfrac12x^{\mathsf T}Kx$ on $\mathbb R^n$.

[F1] [[lem-csm-examples-gamma-gaussian-tools]]: for $a>0$, $\int_{\mathbb R}e^{-ax^2}dx=\sqrt{\pi/a}$, odd Gaussian moments vanish, and the second moment is $\sqrt\pi/(2a^{3/2})$.

## Proof
1.1 We construct $R$ with $K=R^{\mathsf T}R$ by induction on $n$. For $n=1$, take $R=\sqrt{K_{11}}>0$. For $n>1$, write $K=\begin{pmatrix}a&b^{\mathsf T}\\b&C\end{pmatrix}$; positive definiteness gives $a>0$ and $S:=C-bb^{\mathsf T}/a$ positive definite, since $y^{\mathsf T}Sy=(-b^{\mathsf T}y/a,y)^{\mathsf T}K(-b^{\mathsf T}y/a,y)>0$ for $y\ne0$. By induction $S=R_1^{\mathsf T}R_1$; then $R=\begin{pmatrix}\sqrt a&b^{\mathsf T}/\sqrt a\\0&R_1\end{pmatrix}$ satisfies $R^{\mathsf T}R=K$ and $\det R=\sqrt{\det K}>0$. [given, construct, algebra]



2.1 The invertible linear substitution $y=Rx$ has constant Jacobian $\det R=\sqrt{\det K}$, and $x^{\mathsf T}Kx=|y|^2$. Applying [F1] to each coordinate on compact boxes and taking the absolutely convergent Gaussian limits gives $Z=(\det K)^{-1/2}\prod_{j=1}^n\int_{\mathbb R}e^{-\beta y_j^2/2}dy_j=(2\pi/\beta)^{n/2}(\det K)^{-1/2}$. [F1, step 1.1, algebra]



3.1 In the $y$ coordinates the normalized density factors into $n$ even one-dimensional Gaussian densities. Each coordinate has mean $0$, variance $1/\beta$ by [F1], and distinct coordinates have zero cross moment because the product integrand is odd in either coordinate. Thus $\mathbb E[y]=0$ and $\mathbb E[yy^{\mathsf T}]=\beta^{-1}I$. [F1, step 2.1, algebra]



4.1 Since $x=R^{-1}y$, the mean is zero and $\mathbb E[xx^{\mathsf T}]=R^{-1}(\beta^{-1}I)R^{-\mathsf T}=\beta^{-1}(R^{\mathsf T}R)^{-1}=\beta^{-1}K^{-1}$. Also $H(x)=|y|^2/2$, so summing the $n$ coordinate second moments gives $\mathbb E[H]=n/(2\beta)$. [step 1.1, step 3.1, algebra]



5.1 For the stated boundary counterexample, the density on $[-L,L]$ is the constant $(2L)^{-1}$ because $H=0$ and the normalizing integral is $2L$. Since $H'(x)=0$ everywhere, $\mathbb E[xH'(x)]=0\ne\beta^{-1}$ for $\beta>0$. [given, algebra] ∎

## Remarks

If $K$ has a nonzero kernel, the integrand is constant along an unbounded kernel direction and $Z=\infty$; if $\beta\le0$, the full-space integral also diverges. The theorem does not assert a named-degree-of-freedom equipartition rule on arbitrary domains or for discrete variables.
