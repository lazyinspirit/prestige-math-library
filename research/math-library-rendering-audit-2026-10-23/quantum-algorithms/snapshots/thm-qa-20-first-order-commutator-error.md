---
id: thm-qa-20-first-order-commutator-error
kind: theorem
title: First-order commutator error
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-20-first-order-product-formula
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
      locator: "Chapter 27 §27.3, printed pp. 134–135: Lie product formulas and finite-step simulation."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order Lie–Suzuki–Trotter simulation and term costs."
---

## Statement

Let $V$ be a finite-dimensional complex inner-product space, let $H_1,\ldots,H_m$ be self-adjoint endomorphisms of $V$ with $m\ge1$, and set $H=\sum_{j=1}^mH_j$. For every real $t$ and integer $r\ge1$,
$$\left\|S_1(t/r)^r-U_H(t)\right\|\le\frac{t^2}{2r}\sum_{1\le j<k\le m}\|[H_j,H_k]\|,$$
where $S_1$ has the fixed order of [[def-qa-20-first-order-product-formula]] and $U_H(t)=e^{-itH}$ is the finite-matrix evolution of [[def-qa-19-finite-matrix-dynamics]].

## Facts & Assumptions

**Given:** The finite-dimensional space $V$, self-adjoint terms $H_1,\ldots,H_m$, $m\ge1$, $t\in\mathbb R$, and $r\ge1$.

[F1] [[def-qa-20-first-order-product-formula]] defines $S_1(h)=e^{-ihH_1}\cdots e^{-ihH_m}$ in the announced order.

[F2] [[thm-qa-19-matrix-exponential-unitary-properties]] states that $U_K(s)$ is unitary, $U_K'(s)=-iKU_K(s)$, and $U_K(s+u)=U_K(s)U_K(u)$ for every finite-dimensional self-adjoint $K$ and real $s,u$.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives submultiplicativity of the operator norm.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines the operator norm by the maximum over unit vectors.

## Proof


1.1 If $V=\{0\}$, every endomorphism is the unique zero map and both sides of the theorem are zero. Otherwise, for self-adjoint $H_1,H_2$, put $A=-iH_1$ and $B=-iH_2$. For $h\ge0$ define $F(s)=e^{(h-s)(A+B)}e^{sA}e^{sB}$ for $0\le s\le h$. Its endpoints are $F(0)=e^{h(A+B)}$ and $F(h)=e^{hA}e^{hB}$. Differentiating the three finite-matrix evolutions using [F2] and the entrywise product rule gives $F'(s)=e^{(h-s)(A+B)}(e^{sA}B-Be^{sA})e^{sB}$. [given, F2, construct]

2.1 For fixed $s\ge0$, differentiating $e^{uA}Be^{(s-u)A}$ for $0\le u\le s$ and integrating yields $e^{sA}B-Be^{sA}=\int_0^s e^{uA}[A,B]e^{(s-u)A}\,du$. For unitaries $R,S$, [F2] and [F4] give $\|R\|=\|S\|=\|R^{-1}\|=\|S^{-1}\|=1$; [F3] applied to $RXS$ and then to $R^{-1}(RXS)S^{-1}$ gives $\|RXS\|=\|X\|$. Thus the unitary factors in the integrands and in [step 1.1] give $\|F'(s)\|\le s\|[A,B]\|$. Integrating from $0$ to $h$ gives $\|e^{h(A+B)}-e^{hA}e^{hB}\|\le h^2\|[A,B]\|/2$. For $h<0$ apply the same result to $-A,-B$ and $|h|$; since $[A,B]=-[H_1,H_2]$, the bound is $h^2\|[H_1,H_2]\|/2$ for all real $h$. [step 1.1, F2, F3, F4, algebra]

3.1 Put $A_j=-iH_j$. For $k=1,\ldots,m$, let $P_k=e^{hA_1}\cdots e^{hA_k}$ and $T_k=e^{h\sum_{j=1}^kA_j}$. Adding and subtracting $e^{h\sum_{j<k}A_j}e^{hA_k}$ and applying the two-term estimate in [step 2.1] gives $\|T_k-P_k\|\le\|T_{k-1}-P_{k-1}\|+\frac{h^2}{2}\|[\sum_{j<k}A_j,A_k]\|$. Linearity gives $[\sum_{j<k}A_j,A_k]=\sum_{j<k}[A_j,A_k]$, and $[A_j,A_k]=-[H_j,H_k]$; the triangle inequality from [F4] bounds this norm by $\sum_{j<k}\|[H_j,H_k]\|$. Right multiplication by $e^{hA_k}$ preserves the norm by the unitary norm argument in [step 2.1]. Starting with $T_1=P_1$ and iterating proves the local $m$-term bound $\|e^{-ihH}-S_1(h)\|\le\frac{h^2}{2}\sum_{j<k}\|[H_j,H_k]\|$. [step 2.1, F1, F2, F3, F4, algebra]

4.1 Set $h=t/r$. The identity $S^r-U^r=\sum_{\ell=0}^{r-1}S^{r-1-\ell}(S-U)U^\ell$ writes the difference as $r$ terms. The unitary norm argument in [step 2.1] bounds each term by $\|S_1(h)-U_H(h)\|$, so [step 3.1] gives $\|S_1(h)^r-U_H(h)^r\|\le\frac{t^2}{2r}\sum_{j<k}\|[H_j,H_k]\|$. By [F2], $U_H(h)^r=U_H(t)$. [step 2.1, step 3.1, F1, F2, F3, F4, algebra] ∎
