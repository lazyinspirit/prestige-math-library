---
id: thm-qa-20-second-order-conservative-error
kind: theorem
title: Conservative second-order error
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-20-symmetric-second-order-formula
  - def-qa-19-finite-matrix-dynamics
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-qa-19-matrix-exponential-unitary-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed pp. 134–135: symmetric second-order formula and higher-order error context."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: product-formula context; Chapter 9, Exercise 4, printed p. 79, Eq. (9.7): the symmetric second-order local-error form."
---

## Statement

Let $V$ be finite-dimensional, let $H_1,\ldots,H_m$ be self-adjoint with $m\ge1$, put $H=\sum_jH_j$ and $M=\sum_j\|H_j\|$. For every real $t$ and integer $r\ge1$,
$$\left\|S_2(t/r)^r-U_H(t)\right\|\le\frac{|t|^3M^3}{3r^2},$$
where $S_2$ is the palindromic product of [[def-qa-20-symmetric-second-order-formula]] and $U_H$ is the finite-matrix evolution of [[def-qa-19-finite-matrix-dynamics]].

## Facts & Assumptions

**Given:** The finite-dimensional space $V$, self-adjoint terms $H_1,\ldots,H_m$, $m\ge1$, $t\in\mathbb R$, and $r\ge1$.

[F1] [[thm-qa-19-matrix-exponential-unitary-properties]] states that each term evolution is unitary, differentiable with derivative $-iH_jU_{H_j}(s)$, and satisfies the time-composition law.

[F2] [[def-qa-20-symmetric-second-order-formula]] defines the palindromic product with two half-time factors for every term except the middle term.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives the submultiplicative operator norm.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines the operator norm by the maximum over unit vectors.

[L1] In this proof, $R(h)=O(h^a)$ means there are constants $C,\delta>0$ with $\|R(h)\|\le C|h|^a$ whenever $|h|<\delta$.

## Proof


1.1 The claim is immediate on the zero-dimensional space, so assume $V\ne\{0\}$. Write $A_j=-iH_j$, $A=\sum_jA_j$, $P(h)=S_2(h)$, and $Q(h)=U_H(h)$. Every factor is unitary by [F1], and the palindromic word gives $P(-h)=P(h)^{-1}$; also $Q(-h)=Q(h)^{-1}$. Differentiating the factors at zero, the two occurrences with coefficient $1/2$ contribute a total coefficient $1$ for each $A_j$, so $P(0)=Q(0)=I$ and $P'(0)=Q'(0)=A$. [given, F1, F2, algebra]

2.1 Let $E(h)=P(h)-Q(h)$. Smoothness follows by repeatedly differentiating the constant-generator identity in [F1]. Thus $E(h)=Ch^2+O(h^3)$ for some endomorphism $C$ by [L1]. The inverse identities in step 1.1 give $E(-h)=P(h)^{-1}-Q(h)^{-1}=-P(h)^{-1}E(h)Q(h)^{-1}$. Since both inverse factors equal $I+O(h)$, comparing degree-two coefficients yields $C=-C$, hence $C=0$. Therefore $P$ and $Q$ have matching Taylor coefficients through degree two. [step 1.1, F1, L1, algebra]

3.1 Write $P(h)=F_1(h)\cdots F_{2m-1}(h)$ in its displayed order, with $F_\ell(h)=e^{c_\ell h A_{j_\ell}}$ and the coefficients $c_\ell$ equal to the half-step palindrome in [F2]. Repeated product differentiation and [F1] give $\|P'''(h)\|\le(\sum_\ell |c_\ell|\|H_{j_\ell}\|)^3=M^3$: each $j<m$ occurs twice with coefficient $1/2$, and $j=m$ occurs once with coefficient $1$. Also $Q'''(h)=A^3Q(h)$. For a unit vector $v$, the vector triangle inequality gives $\|Av\|\le\sum_j\|H_jv\|\le\sum_j\|H_j\|=M$, so [F4] yields $\|A\|\le M$. Then [F3], [F4], and unitarity give $\|Q'''(h)\|\le M^3$. The integral Taylor remainder after degree two therefore gives $\|P(h)-Q(h)\|\le(2M^3)|h|^3/3!=M^3|h|^3/3$. [step 2.1, F1, F2, F3, F4, algebra]

4.1 Expand $P(h)^r-Q(h)^r$ by telescoping. The definition [F4] and submultiplicativity [F3] show that unitary factors preserve the norm, so its norm is at most $rM^3|h|^3/3$ by [step 3.1]. With $h=t/r$, this is $|t|^3M^3/(3r^2)$; [F1] gives $Q(h)^r=U_H(t)$. [step 3.1, F1, F3, F4, algebra] ∎
