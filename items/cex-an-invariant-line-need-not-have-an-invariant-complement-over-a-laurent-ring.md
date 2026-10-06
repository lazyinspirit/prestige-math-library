---
id: cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring
kind: counterexample
title: "An invariant line need not have an invariant complement over a Laurent ring"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps:
  - def-unreduced-burau-matrices
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
  - lem-the-invariant-vector-and-covector-of-the-unreduced-burau
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - prop-reduced-and-unreduced-burau-representations-have-the-same-kernel
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Every invariant line in a finite free module over the Laurent ring
$\Lambda_1=\mathbb Z[t^{\pm1}]$ admits an invariant complement.

## Facts & Assumptions

**Given:** the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$; an integer $n\ge2$; the free module $W=\Lambda_1^n$ with standard basis $e_1,\dots,e_n$ and the unreduced Burau action $\rho^{\mathrm{mat}}_n$ of $B_n$; the column vector $v=(1,\dots,1)^T$ and the row vector $\sigma=(1,t,\dots,t^{n-1})$.

[A1] $B_iv=v$ for every $i$, hence $\rho^{\mathrm{mat}}_n(\beta)v=v$ for every $\beta\in B_n$; and a row vector $\tau$ satisfies $\tau B_i=\tau$ for every $i$ if and only if $\tau=c\,\sigma$ for some $c\in\Lambda_1$ ([[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]], clauses (a) and (b); the action is defined on generator matrices by [[def-unreduced-burau-matrices]] and extended by [[lem-unreduced-burau-matrices-satisfy-the-artin-relations]]).

[A2] For $n\ge2$ the element $1+t+\cdots+t^{n-1}$ is not a unit of $\Lambda_1$ ([[lem-units-and-powers-of-the-laurent-polynomial-ring]], clause (d)); in particular it is not a unit of the form $\pm t^m$.

## Counterexample

**Given:** the same data as above.

**Proof technique:** direct.

1.1 *The invariant line.* By [A1], $\rho^{\mathrm{mat}}_n(\beta)v=v$ for every $\beta\in B_n$; hence $\Lambda_1v=\{av:a\in\Lambda_1\}$ is a $B_n$-invariant line in the finite free module $W$. [A1]

1.2 *No invariant complement.* Suppose, for contradiction, that $C\subseteq W$ is a $\Lambda_1$-submodule with $W=\Lambda_1v\oplus C$ and $\rho^{\mathrm{mat}}_n(\beta)(C)\subseteq C$ for every $\beta\in B_n$. Let $\pi:W\to\Lambda_1v$ be the projection along $C$, so $\pi$ is $\Lambda_1$-linear, $\pi(v)=v$, and $\pi$ is $B_n$-equivariant: writing $x=av+c$ with $a\in\Lambda_1$, $c\in C$, invariance of $C$ and $v$ give $\rho^{\mathrm{mat}}_n(\beta)x=a v+\rho^{\mathrm{mat}}_n(\beta)c$ with $\rho^{\mathrm{mat}}_n(\beta)c\in C$, so $\pi(\rho^{\mathrm{mat}}_n(\beta)x)=av=\pi(x)$. Writing $\pi(x)=\lambda(x)v$ defines a $\Lambda_1$-linear functional $\lambda:W\to\Lambda_1$ with $\lambda(v)=1$ and $\lambda(\rho^{\mathrm{mat}}_n(\beta)x)=\lambda(x)$ for all $\beta\in B_n$ and $x\in W$. [A1, algebra]

2.1 *The contradiction.* Since $\lambda(\rho^{\mathrm{mat}}_n(\beta)x)=\lambda(x)$ for every $\beta$, evaluating on $\beta=\sigma_i$ gives $\lambda B_i=\lambda$ for every $i$; by the classification in [A1] there is $c\in\Lambda_1$ with $\lambda=c\,\sigma$ as row vectors. Then $1=\lambda(v)=c\,\sigma(v)=c\,(1+t+\cdots+t^{n-1})$, so $1+t+\cdots+t^{n-1}$ has the multiplicative inverse $c$ in $\Lambda_1$. This contradicts [A2] for $n\ge2$. Hence the invariant line $\Lambda_1v$ has no $B_n$-invariant complement, and the refuted statement fails already for $n=2$. This is the integral obstruction behind the caveat of [[prop-reduced-and-unreduced-burau-representations-have-the-same-kernel]] that its splitting $K^n=\ker\sigma\oplus Kv$ is only a field statement. AC is inherited from the cited same-kernel proposition; the module and matrix computations are choice free. [A1, A2, step 1.2] ∎
