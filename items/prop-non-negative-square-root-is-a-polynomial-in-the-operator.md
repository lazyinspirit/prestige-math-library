---
id: prop-non-negative-square-root-is-a-polynomial-in-the-operator
kind: proposition
title: "The non-negative square root of a non-negative operator is a polynomial in the operator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-non-negative-square-root-exists-and-is-unique, thm-non-negative-operator-characterisations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T$ be a non-negative operator on a finite-dimensional real or complex inner
product space. Then its unique non-negative square root is $p(T)$ for some
polynomial $p\in\mathbb R[x]\subseteq\mathbb C[x]$.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex inner product space $V$, a non-negative endomorphism $T:V\to V$, and the distinct eigenvalues $\lambda_1,\dots,\lambda_r$ of $T$.

[L1] A non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues ([[thm-non-negative-operator-characterisations]]).

[L2] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $V$ has an orthonormal eigenbasis consisting of eigenvectors of $T$, and every eigenvalue $\lambda_j$ is a nonnegative real number. Interpolation on the finite set $\{\lambda_1,\dots,\lambda_r\}$ gives a polynomial $p\in\mathbb R[x]$ with $p(\lambda_j)=\sqrt{\lambda_j}$ for every $j$. [L1, algebra]

2.1 On each eigenspace $E_{\lambda_j}(T)$, the operator $p(T)$ acts as multiplication by $p(\lambda_j)=\sqrt{\lambda_j}$. Therefore $p(T)^2$ acts as multiplication by $\lambda_j$, so $p(T)^2=T$; the same eigenbasis shows that $p(T)$ is non-negative. By [L2], $p(T)$ is the unique non-negative square root of $T$. [L1, L2, step 1.1] ∎
