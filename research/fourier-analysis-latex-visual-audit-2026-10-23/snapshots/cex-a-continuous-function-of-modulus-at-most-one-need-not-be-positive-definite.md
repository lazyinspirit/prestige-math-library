---
id: cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite
kind: counterexample
title: A continuous function of modulus at most one need not be positive definite
dependency_level: 1
deps:
- def-positive-definite-function-on-an-abelian-group
- def-continuous-map-top
- def-complex-numbers-and-arithmetic
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

On $G=\mathbb R$ let $\phi$ be the continuous trapezoid function
$$\phi(x)=\begin{cases}1,&|x|\le1,\\ 2-|x|,&1\le|x|\le2,\\ 0,&|x|\ge2,\end{cases}$$
so that $\phi$ is linear on $[1,2]$ and on $[-2,-1]$ and vanishes outside
$[-2,2]$. Then $\phi$ is continuous, $\phi(0)=1$ and $|\phi(x)|\le1$ for all
$x$, but $\phi$ is not positive definite
([[def-positive-definite-function-on-an-abelian-group]]): for the points
$x_1=0,x_2=1,x_3=2$, the matrix
$$[\phi(x_j-x_k)]_{j,k}=\begin{pmatrix}1&1&0\\1&1&1\\0&1&1\end{pmatrix}$$
has determinant $-1<0$, so it is not positive semidefinite and the
positive-definiteness inequality fails; explicitly, the coefficients
$c=(1,-2,1)$ give quadratic form $-2<0$. Thus
boundedness and continuity of a function of modulus at most one do not imply
positive definiteness.

## Facts & Assumptions

**Given:** The trapezoid function $\phi:\mathbb R\to\mathbb C$ above.

[F1] $\phi:\mathbb R\to\mathbb C$ is continuous, $\phi(0)=1$, and $|\phi(x)|\le1$ for every $x$ ([[def-continuous-map-top]], [[def-complex-numbers-and-arithmetic]]): on $[-1,1]$ it is the constant $1$, on $[1,2]$ and on $[-2,-1]$ it is the continuous affine function $2-|x|$ joining the values $1$ and $0$, and it is $0$ outside $[-2,2]$.

[F2] $\phi$ is positive definite exactly when $\sum_{j,k}c_j\overline{c_k}\,\phi(x_j-x_k)\ge0$ for every finite family $x_1,\dots,x_n\in\mathbb R$ and all $c_1,\dots,c_n\in\mathbb C$ ([[def-positive-definite-function-on-an-abelian-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The values of $\phi$ at the differences of $x_1=0,x_2=1,x_3=2$ are $\phi(0)=1$, $\phi(\pm1)=1$ and $\phi(\pm2)=0$, so the Hermitian matrix of [F2] is $M=\begin{pmatrix}1&1&0\\1&1&1\\0&1&1\end{pmatrix}$. Its determinant is $1\cdot(1\cdot1-1\cdot1)-1\cdot(1\cdot1-1\cdot0)+0\cdot(1\cdot1-1\cdot0)=-1<0$. The explicit negative quadratic form in the next step establishes the failure of positive semidefiniteness directly. [F1, algebra]

2.1 Explicitly, the coefficients $c_1=1,c_2=-2,c_3=1$ give $$\sum_{j=1}^{3}\sum_{k=1}^{3}c_jc_k\,\phi(x_j-x_k)=1+4+1+2\cdot(-2)+2\cdot(-2)=-2<0,$$ the quadratic form of $M$ being $c_1^2+c_2^2+c_3^2+2c_1c_2+2c_2c_3$; hence the defining inequality of [F2] fails for this finite family, and $\phi$ is not positive definite, even though it is continuous with $\phi(0)=1$ and $|\phi(x)|\le1$ everywhere. [F2, step 1.1, algebra] ∎ 
