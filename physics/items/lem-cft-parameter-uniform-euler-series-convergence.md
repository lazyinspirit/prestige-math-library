---
id: lem-cft-parameter-uniform-euler-series-convergence
kind: lemma
title: Parameter-uniform convergence of formal Euler series
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 0
domain: mathematics
library: mathematics
proof_strategy: direct
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Yuto Moriwaki, Vertex operator algebra and parenthesized braid operad
      url: https://arxiv.org/pdf/2209.10443v3
      locator: Appendix A, Lemma A.4, Proposition A.5 and Corollary A.6; source comparison only, with the coefficient-majorant proof reconstructed here.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $B\subseteq\mathbb C^r$ be open, with $r\geq0$, let $q>0$, and write $D_q=\{x\in\mathbb C:|x|<q\}$ and $\theta=x\partial_x$. Let $N\geq1$. Suppose $f_0,\ldots,f_{N-1},g:B\times D_q\to\mathbb C$ are continuous and holomorphic in $x$. Suppose continuous functions $c_n:B\to\mathbb C$, $n\geq0$, define a formal power series $y=\sum_{n\geq0}c_n(b)x^n$ satisfying
$$\left(\theta^N+\sum_{k=0}^{N-1}f_k(b,x)\theta^k\right)y=g(b,x).$$
Then, for every compact $K\subset B$ and $0<\rho<q$,
$$\sum_{n\geq0}\sup_{b\in K}|c_n(b)|\rho^n<\infty.$$
The sum is continuous on $B\times D_q$, holomorphic in $x$, and all its $x$ derivatives are obtained by termwise differentiation, uniformly on compact subsets. If the $c_n$ are holomorphic on $B$, the sum is jointly holomorphic.

In addition, let $M\geq0$ and $\lambda\in\mathbb C$, and suppose continuous $c_{n,j}:B\to\mathbb C$, $0\leq j\leq M$, give a formal solution
$$Y=x^\lambda\sum_{j=0}^{M}(\log x)^j\sum_{n\geq0}c_{n,j}(b)x^n$$
of the homogeneous equation above. The symbol $\log x$ is formal with $\theta\log x=1$. Then each coefficient power series satisfies the same absolute compact-uniform estimate. Consequently $Y$ converges absolutely and locally uniformly on $B\times D_q^{\mathrm{cut}}$, where $D_q^{\mathrm{cut}}=\{x:0<|x|<q,\ x\notin\mathbb R_{\leq0}\}$ and powers use its principal logarithm. Its sum is continuous and holomorphic in $x$, and jointly holomorphic when the parameter coefficients are holomorphic. The same assertion holds for a finite sum of such expressions in distinct exponent classes modulo $\mathbb Z$ satisfying the homogeneous equation coefficientwise. No convergence or finite value at $x=0$ is claimed for the branched expression itself.

## Facts & Assumptions

**Given:** Exactly the continuous parameter functions, formal equations, finite logarithmic degree and branch conventions of the Statement. Formal equality uses the Taylor coefficients in $x$ of the given analytic functions. The proof uses the Cauchy coefficient integral, finite polynomial algebra, and elementary geometric-series bounds, with the required estimates supplied explicitly.

## Proof

1.1 Fix compact $K\subset B$ and $0<\rho<R<q$. Taylor-expand $f_k(b,x)=\sum_{t\geq0}a_{k,t}(b)x^t$ and $g(b,x)=\sum_{t\geq0}b_t(b)x^t$. On $K\times\{|x|=R\}$ joint continuity gives one bound $C\geq1$ for all these finitely many functions. The Cauchy coefficient integral therefore gives $|a_{k,t}(b)|\leq CR^{-t}$ and $|b_t(b)|\leq CR^{-t}$, uniformly for $b\in K$. The same fixed-circle integral shows that all coefficient functions are continuous in $b$. Define $P_0(n,b)=n^N+\sum_{k=0}^{N-1}a_{k,0}(b)n^k$ and $P_t(l,b)=\sum_{k=0}^{N-1}a_{k,t}(b)l^k$ for $t\geq1$. Coefficient comparison in the formal equation, using $0^0=1$ for the identity operator, yields
$$P_0(n,b)c_n(b)=b_n(b)-\sum_{l=0}^{n-1}P_{n-l}(l,b)c_l(b).$$
For $t\geq1$, $|P_t(l,b)|\leq NC R^{-t}(1+l)^{N-1}$, including $l=0$. [given, algebra]

2.1 For every $A>0$ there is an integer $n_0\geq1$ such that $|P_0(n,b)|\geq AC(1+n)^{N-1}$ for every $b\in K$ and $n\geq n_0$. Indeed $|P_0(n,b)|/n^N\geq1-C\sum_{k=0}^{N-1}n^{k-N}$, which is at least $1/2$ for sufficiently large $n$; increasing $n_0$ then gives $n^N/2\geq AC(1+n)^{N-1}$. Division is used only at these large degrees, never at possibly resonant small degrees. Put $d_n=R^n\sup_K|c_n|$, finite by continuity. The recurrence and $(1+l)^{N-1}\leq(1+n)^{N-1}$ for $l<n$ give
$$d_n\leq A^{-1}\left(1+N\sum_{l<n}d_l\right)\qquad(n\geq n_0).$$
Choose finite nonnegative $D_n\geq d_n$ for $n<n_0$, and define $D_n=A^{-1}(1+N\sum_{l<n}D_l)$ thereafter. Induction on $n$ gives $d_n\leq D_n$. For $n\geq n_0$ the defining recurrence gives $D_{n+1}=(1+N/A)D_n$. Hence $\sum_nD_ns^n<\infty$ for $0\leq s<(1+N/A)^{-1}$. Choose $A$ large enough that $\rho/R<(1+N/A)^{-1}$. Then $\sum_n\sup_K|c_n|\rho^n=\sum_nd_n(\rho/R)^n<\infty$. [step 1.1, algebra]

3.1 Every point of $B$ has a compact neighborhood contained in $B$, so the estimate proves local uniform convergence of the continuous partial sums, giving continuity of the sum. It also proves holomorphy in $x$: on a small disk, uniform convergence allows the sums to pass through the Cauchy integrals, giving the Cauchy formula for the sum. The Cauchy derivative formula on a slightly larger circle gives locally uniform convergence of all termwise $x$ derivatives. If each $c_n$ is holomorphic in $b$, choose a compact parameter polydisc and an $x$ disk with slightly larger concentric polydiscs still in the domain. The preceding uniform estimates allow passage through the iterated Cauchy integrals in all variables. The resulting multivariable Cauchy formula proves joint holomorphy. This establishes the first assertion. [step 2.1, algebra]

4.1 Conjugating the homogeneous operator by $x^\lambda$ replaces $\theta$ by $\theta+\lambda$. After expansion it remains monic of order $N$, and its lower coefficients are finite constant linear combinations of the original $f_k$ and the constant function $1$. They retain continuity and disk holomorphy. It therefore suffices to prove the logarithmic assertion for $\lambda=0$. Write $y_j=\sum_nc_{n,j}(b)x^n$ and $f_N=1$. The coefficient of $(\log x)^M$ in the equation is $P(\theta)y_M=0$, where $P(\theta)=\sum_{k=0}^Nf_k\theta^k$. The power-series result proves the absolute compact-uniform estimate, continuity, disk holomorphy and derivative properties for $y_M$. More generally, distributing the $k$ derivatives in $\theta^k(y_j(\log x)^j)$ shows that the coefficient of $(\log x)^i$ is
$$P(\theta)y_i=-\sum_{k=0}^N f_k\sum_{j=i+1}^{\min(M,i+k)}\binom{k}{j-i}\frac{j!}{i!}\theta^{k-j+i}y_j.$$
Exactly $j-i$ derivatives act on the logarithmic factor, giving the displayed factorial. [given, step 3.1, algebra]

5.1 Descend from $i=M-1$ to $0$. The right-hand side in step 4.1 is a finite sum of continuous functions holomorphic in $x$ on the full disk: every $y_j$ appearing there has $j>i$, and its derivative property was established in the preceding descent step. It is therefore a valid inhomogeneity for the power-series result, which proves the same absolute estimate and regularity properties for $y_i$. Induction proves these conclusions for all $i$. On each compact subset of the cut punctured disk, $x^\lambda$ and the finitely many powers of its principal logarithm are bounded. Multiplying the finitely many coefficient estimates by these bounds proves absolute local uniform convergence of $Y$, and uniform convergence preserves continuity and the stated holomorphy. Analytic coefficient functions preserve each exponent class modulo integers. Thus a finite number of distinct classes satisfy their equations separately; applying this proof to each and summing their finite bounds proves the last assertion. [step 2.1, step 3.1, step 4.1, algebra] ∎
