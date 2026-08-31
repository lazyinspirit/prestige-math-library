---
id: thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one
kind: theorem
title: "A stationary splitting converges for every start if and only if its iteration matrix has spectral radius below $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-stationary-iteration-from-a-matrix-splitting,
       thm-the-complex-numbers-are-algebraically-closed,
       cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form,
       thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Gilbert Strang, 18.086 Mathematical Methods for Engineers II, Section 6.2 Iterative Methods"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/4bea2ab7b0fa37cd96f2ce442efa769d_am62.pdf"
---

## Statement

Let $A=M-N$ be a matrix splitting in $M_n(\mathbb C)$ with stationary iteration

$$x_{k+1}=M^{-1}Nx_k+M^{-1}b,$$

and let $B:=M^{-1}N$ be its iteration matrix. Then the following are
equivalent:

1. For every right-hand side $b$ and every initial vector $x_0$, the iterates
   converge to the unique solution of $Ax=b$.
2. The spectral radius $\rho(B)$ is strictly less than $1$.

## Facts & Assumptions

**Given:** A complex matrix splitting $A=M-N$ with invertible $M$, its stationary iteration, and its iteration matrix $B=M^{-1}N$.

[F1] The stationary iteration is $$x_{k+1}=Bx_k+M^{-1}b$$ with $B=M^{-1}N$ ([[def-stationary-iteration-from-a-matrix-splitting]]).

[L1] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L2] Over an algebraically closed field, every endomorphism has Jordan form ([[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]]).

[L3] The spectrum is the root set of the characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

## Proof
**Proof technique:** direct.

1.1 A vector $x$ is a fixed point of the stationary iteration if and only if it solves $Ax=b$: indeed, by [F1], $$x=Bx+M^{-1}b \iff Mx=Nx+b \iff Ax=b.$$ Therefore, whenever $x_*$ solves $Ax=b$, the error $e_k:=x_k-x_*$ satisfies $$e_{k+1}=Bx_k+M^{-1}b-x_*=B(x_k-x_*)=Be_k.$$ [F1, algebra]

2.1 Assume $\rho(B)<1$. By [L1], [L2], and [L3], we may write $B=SJS^{-1}$ with $J$ Jordan and every eigenvalue $\lambda$ of $B$ satisfying $|\lambda|<1$. On a Jordan block $J_\lambda=\lambda I+N$ with nilpotent $N$, one has $$J_\lambda^k=\sum_{j=0}^{s-1}\binom{k}{j}\lambda^{k-j}N^j.$$ Because $|\lambda|<1$, each scalar factor $\binom{k}{j}\lambda^{k-j}$ tends to $0$, so every Jordan block tends to $0$. Hence $J^k\to0$ and therefore $B^k\to0$. Since $1\notin\sigma(B)$, the matrix $I-B$ is invertible by [L3]. Define $$x_*:=(I-B)^{-1}M^{-1}b.$$ Then $(I-B)x_*=M^{-1}b$, so $x_*=Bx_*+M^{-1}b$, and step 1.1 shows that $x_*$ solves $Ax=b$. For any initial vector $x_0$, step 1.1 gives $e_k=B^ke_0\to0$, so the iterates converge to $x_*$. If $y$ is another solution of $Ax=b$, then step 1.1 also gives $y=By+M^{-1}b$, hence $$y-x_*=B(y-x_*).$$ Iterating and using $B^k\to0$ yields $y-x_*=B^k(y-x_*)\to0$, so $y=x_*$. Thus the iterates converge to the unique solution of $Ax=b$ for every $b$ and every $x_0$. [L1, L2, L3, step 1.1, algebra]

3.1 Conversely, assume the iteration converges for every $b$ and every $x_0$. Taking $b=0$, statement 1 gives convergence to the unique solution of $Ax=0$. By step 1.1 that unique solution is also the unique fixed point of $x\mapsto Bx$, so it is $0$. Hence for every start $x_0$ one has $B^kx_0=x_k\to0$, which means $B^k\to0$. If $Bv=\lambda v$ with $v\ne0$, then $$\lambda^kv=B^kv\to0,$$ so $\lambda^k\to0$ and therefore $|\lambda|<1$. By [L3], every spectral value of $B$ is such an eigenvalue over $\mathbb C$, and thus $\rho(B)<1$. [L3, step 1.1, algebra] ∎
