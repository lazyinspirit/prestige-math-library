---
id: thm-commutative-milstein-strong-order-one
kind: theorem
title: "Strong order one for scalar and commutative-noise Milstein schemes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-milstein-scheme-and-iterated-integrals
  - lem-iterated-brownian-integral-identities
  - lem-milstein-local-defect-bounds
  - lem-stochastic-local-to-global-rms-bound
  - def-continuous-brownian-ito-process
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Sections 10.3 and 10.6, printed pp. 345-351 and 356-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Section 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 6.4"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Assume AC. Let $d,m\ge1$ be finite, let $W$ be an $m$-dimensional Brownian motion relative to a filtration satisfying [[def-continuous-brownian-ito-process]], and let $X$ solve
$$dX_t=b(X_t)dt+\sum_{j=1}^m\sigma_j(X_t)dW_t^j,\qquad X_0\in L^2(\mathbb R^d).$$
Assume $b,\sigma_1,\ldots,\sigma_m\in C_b^3(\mathbb R^d)$ as defined in [[def-milstein-scheme-and-iterated-integrals]]. Put $L_i f=Df\,\sigma_i$ and assume commutative noise $L_i\sigma_j=L_j\sigma_i$ for all $i,j$. On the uniform grid $t_n=nh$, $h=T/N\le1$, initialize $Y_0=X_0$ and use the product-increment Milstein update in the Definition. Then there is a constant $C_T$, independent of $N$, such that
$$\max_{0\le n\le N}\mathbb E|Y_n-X_{t_n}|^2\le C_T h^2.$$
Thus the grid root-mean-square error is $O(h)$ on $[0,T]$. For $m=1$ the commutativity condition is automatic and the scheme is the scalar Milstein update. No claim is made for a noncommuting-noise scheme without an area sampler satisfying a separately proved approximation bound.

## Facts & Assumptions

**Given:** AC, the SDE and coefficient hypotheses, a finite horizon $T>0$, an integer $N\ge1$ with $h=T/N\le1$, the exact solution $X$, and the Milstein grid process $Y$.

[L1] [[def-milstein-scheme-and-iterated-integrals]]: the commutative update is $Y_{n+1}=Y_n+b(Y_n)h+\sum_j\sigma_j(Y_n)\Delta W_n^j+\frac12\sum_{i,j}L_i\sigma_j(Y_n)(\Delta W_n^i\Delta W_n^j-\delta_{ij}h)$.

[L2] [[lem-iterated-brownian-integral-identities]]: $I_{ij,n}+I_{ji,n}=\Delta W_n^i\Delta W_n^j-\delta_{ij}h$, so the commutative double-integral term equals the product-increment term.

[L3] [[lem-milstein-local-defect-bounds]]: on each step, $X_{t_{n+1}}=X_{t_n}+b(X_{t_n})h+\sum_j\sigma_j(X_{t_n})\Delta W_n^j+\sum_{i,j}L_i\sigma_j(X_{t_n})I_{ij,n}+R_{n+1}$, with $|\mathbb E[R_{n+1}\mid\mathcal F_{t_n}]|\le Ch^2$ and $\mathbb E[|R_{n+1}|^2\mid\mathcal F_{t_n}]\le Ch^3$.

[L4] [[lem-stochastic-local-to-global-rms-bound]]: if a grid error has an adapted Lipschitz drift increment, martingale-difference terms with variance $O(h|e_n|^2)$, a bounded local mean $O(h^2)$, and a centered local remainder with second moment $O(h^3)$, then its terminal and grid root-mean-square error is $O(h)$.

[F1] [[def-continuous-brownian-ito-process]]: the Brownian increments after $t_n$ are independent of $\mathcal F_{t_n}$, and the SDE solution has the stated adapted continuous drift-plus-It\^o decomposition.

[A1] [[def-axiom-of-choice]]: AC is inherited from the exact Brownian and It\^o suppliers [F1], [L2], and [L3]; no choice is made in the error recurrence.

## Proof

**Given:** The assumptions above.

1.1 Define $e_n=Y_n-X_{t_n}$. Apply [L3] to the exact solution on $[t_n,t_{n+1}]$. Using [L2] and commutativity, the exact Taylor increment has the same product form as the update [L1], except that its coefficients are evaluated at $X_{t_n}$ and it includes the remainder $R_{n+1}$. [F1, L1, L2, L3, given]

1.2 Subtract the exact update from [L1]. With $u_n=b(Y_n)-b(X_{t_n})$, set
$$M_{n+1}=\sum_j(\sigma_j(Y_n)-\sigma_j(X_{t_n}))\Delta W_n^j+\frac12\sum_{i,j}(L_i\sigma_j(Y_n)-L_i\sigma_j(X_{t_n}))(\Delta W_n^i\Delta W_n^j-\delta_{ij}h).$$
Then $e_{n+1}=e_n+hu_n+M_{n+1}-R_{n+1}$. The increments after $t_n$ are independent of $\mathcal F_{t_n}$ by [F1]; their first moments vanish, and each centered quadratic factor has mean zero. Hence $M_{n+1}$ is orthogonal to every square-integrable $\mathcal F_{t_n}$-measurable vector. [F1, L1, L3, step 1.1]

2.1 The derivatives of $b$ are bounded, so $|u_n|\le C|e_n|$. Also each $L_i\sigma_j$ is globally Lipschitz: its derivative is a sum of products of first and second derivatives of the diffusion fields, all bounded by [L1]. The linear Gaussian term in $M_{n+1}$ has conditional second moment at most $Ch|e_n|^2$. For the quadratic term, $\mathbb E[(\Delta W_i\Delta W_j-\delta_{ij}h)^2\mid\mathcal F_{t_n}]\le2h^2$ by independent centered normal coordinates; the finite sum and the Lipschitz bound therefore give second moment at most $Ch^2|e_n|^2\le Ch|e_n|^2$. Thus $\mathbb E|M_{n+1}|^2\le Ch\,\mathbb E|e_n|^2$. [F1, L1, step 1.2, algebra]

2.2 Let $r_n=\mathbb E[R_{n+1}\mid\mathcal F_{t_n}]$ and $Q_{n+1}=-(R_{n+1}-r_n)$. By [L3], $|r_n|\le Ch^2$, $\mathbb E|R_{n+1}|^2\le Ch^3$, and hence $\mathbb E|Q_{n+1}|^2\le2\mathbb E|R_{n+1}|^2+2\mathbb E|r_n|^2\le Ch^3$ because $h\le1$. The defining event-integral property of conditional expectation makes $Q_{n+1}$ orthogonal to every square-integrable $\mathcal F_{t_n}$-measurable vector. Therefore the recurrence in step 1.2 has the form required by [L4], with local mean $-r_n$ and centered terms $M_{n+1},Q_{n+1}$. [L3, L4, step 1.2, algebra]

3.1 Initially $e_0=0$. For each $n\le N$, apply [L4] to the recurrence restricted to the first $n$ steps; its constants are the same because $nh\le T$. Thus $\max_{0\le n\le N}\mathbb E|e_n|^2\le C_T h^2$, and taking square roots gives the stated grid root-mean-square order one. When $m=1$, the only commutativity equation is $L_1\sigma_1=L_1\sigma_1$; if all diffusion fields vanish, the stochastic terms and their bounds vanish and the same proof reduces to the deterministic recurrence. The argument uses AC only through [A1]. [A1, L4, step 2.2, given] ∎
