---
id: ex-qa-20-noncommuting-pauli-error
kind: example
title: First-order error for two Pauli terms
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - thm-qa-20-first-order-commutator-error
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed pp. 134–135: noncommuting term products and product-formula error."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9, Exercise 1, printed p. 79: explicit noncommuting Pauli $X,Z$ exponentials."
---

## Example

For the Pauli matrices
$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},$$
the two-term Hamiltonian $H=X+Z$ has first-order commutator bound $t^2/r$. Also, for every $\lambda\ge0$, the same fixed total matrix $H=Z$ has the decomposition $H_1=\lambda X$, $H_2=Z-\lambda X$, whose commutator certificate grows with $\lambda$ although $\|H\|=1$.

## Facts & Assumptions

**Given:** The displayed matrices as endomorphisms of $\mathbb C^2$ with its standard inner product $\langle u,v\rangle=v^*u$ (linear in the first argument), real $t$, integer $r\ge1$, real $\lambda\ge0$, and tolerance $\epsilon>0$.

[F1] [[thm-qa-20-first-order-commutator-error]] gives $\|S_1(t/r)^r-U_{H_1+H_2}(t)\|\le\frac{t^2}{2r}\|[H_1,H_2]\|$ for two terms.

[F2] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] states $\|T^*T\|=\|T\|^2$.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines the operator norm as the maximum over unit vectors.

## Verification


1.1 In the standard inner product, direct conjugate transpose gives $X^*=X$ and $Z^*=Z$. Matrix multiplication gives $XZ=\begin{pmatrix}0&-1\\1&0\end{pmatrix}=-iY$ and $ZX=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=iY$. Therefore $[X,Z]=XZ-ZX=-2iY$. [given, algebra]

2.1 The same matrices give $Y^*Y=I_2$. Hence [F2] and [F3] give $\|Y\|=1$, and scalar homogeneity of the operator norm yields $\|[X,Z]\|=2$. [step 1.1, F2, F3, algebra]

3.1 Substituting $H_1=X$, $H_2=Z$ and $\|[X,Z]\|=2$ into [F1] gives $\|S_1(t/r)^r-U_{X+Z}(t)\|\le(t^2/(2r))2=t^2/r$. For the exact finite boundary $t=0$, both evolutions are $I_2$ and the error is zero. [step 2.1, F1, algebra]

4.1 For $H_1=\lambda X$ and $H_2=Z-\lambda X$, both terms are Hermitian and their sum is $Z$. Direct multiplication gives $Z^*Z=I_2$, and [F2]–[F3] give $\|Z\|=1$. Bilinearity and $[X,X]=0$ give $[H_1,H_2]=\lambda[X,Z]$, whose norm is $2\lambda$ by [step 2.1] and $\lambda\ge0$. Thus [F1] gives the sufficient certificate $\lambda t^2/r$. To make this particular bound at most $\epsilon$ requires $r\ge\lambda t^2/\epsilon$ when $t\ne0$. For fixed $t\ne0$ and $\epsilon>0$, this threshold is unbounded as $\lambda$ grows while the total matrix and its norm stay fixed; it shows that this error certificate cannot choose a uniform $r$ from $\|H\|$ and $\epsilon$ alone. It is not a lower bound on the actual simulation error. [given, step 2.1, F1, F2, F3, algebra] ∎
