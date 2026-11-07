---
id: thm-vinogradov-rational-derivative-sum-estimate
kind: theorem
title: "A rational-derivative bound for exponential sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-vinogradov-differencing-sum-estimate
  - thm-vinogradov-mean-value-estimate-for-exponential-sums
  - def-vinogradov-mean-value-Jsk
  - def-factorial-and-falling-factorial
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.12"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 61–62, complete proof of Theorem 24.12."
---

## Statement

Write $e(x):=\exp(2\pi i x)$ for real $x$.

For each natural $j$, $j!$ is the usual natural factorial, viewed as an integer.

Fix $0<\delta<1$. Let $N<N'\le2N$, integers $k\ge2$ and $b\ge k$, and $R>0$, $3\le Q\le N^{1/2}$. Let $f$ be real-valued and $C^{k+1}$ on $[N-3Q^2,2N+4Q^2]$, with $|f^{(k+1)}(u)|/(k+1)!\le(2Q)^{-2k-2}R^{-1}$. Suppose $0<R_j\le Q^j$ for $2\le j\le k$, and for every integer $n\in[N+Q^2,2N+2Q^2]$ there are coprime integers $a_j,q_j$ with $R_j\le q_j\le Q^{2j}R_j^{-1}$ and $|f^{(j)}(n)/j!-a_j/q_j|\le q_j^{-2}$. If at least $h\ge\delta k$ of the indices $j\in\{2,\ldots,k\}$ satisfy $R_j\ge Q^{\delta j}$, then for some $\lambda=\lambda(\delta)>0$,
$$\left|\sum_{N<n\le N'}e(f(n))\right|\ll_\delta NQ^{-\lambda k^{-2}}+NR^{-1/2}.$$

## Statement references

[Montgomery–Vaughan, Theorem 24.12 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[[def-vinogradov-mean-value-Jsk]]

[[def-factorial-and-falling-factorial]]

[[lem-integer-part]]

## Facts & Assumptions

**Given:** The parameters and derivative/rational-approximation hypotheses in the statement.

[F1] The smooth-phase differencing estimate has the displayed mean-value and derivative factors ([[thm-vinogradov-differencing-sum-estimate]]).

[F2] For every integer $r\ge1$, the mean value satisfies the Vinogradov bound with exponent $2kr-\tfrac12k(k+1)+\eta(k,r)$, where $\eta(k,r)=\tfrac12k^2(1-1/k)^r$ ([[thm-vinogradov-mean-value-estimate-for-exponential-sums]]).

[F3] $J_{s,k}(X)$ denotes the $2s$-th torus mean, equivalently its equal-power-sum count ([[def-vinogradov-mean-value-Jsk]]).

[F4] $j!$ is the product $1\cdot2\cdots j$ for a natural $j$ ([[def-factorial-and-falling-factorial]]).

[F5] The floor is the greatest integer at most its argument; the ceiling is the least integer at least its argument, with $x\le\lceil x\rceil<x+1$ and $\lceil x\rceil=-\lfloor-x\rfloor$ ([[lem-integer-part]]).


## Proof

**Proof technique:** insert the mean-value estimate and choose the moment large enough that the denominator gains dominate.

1.1 Choose an integer $r=\lceil\kappa k\rceil$, where $\kappa$ will be a sufficiently large constant depending only on $\delta$, as allowed by [F5], and set $b=kr$ in [F1]. By [F2], $$\left(\frac{J_{kr,k}(2Q)}{(2Q)^{2kr-\frac12k(k+1)}}\right)^{1/(4k^2r^2)}\le \exp\!\left(\frac{C\log k}{4r}\right)Q^{(1-1/k)^r/(8r^2)}.$$ This follows by subtracting the denominator exponent from the numerator exponent in [F2] and taking the $1/(4k^2r^2)$ power; the factor from replacing $2Q$ by $Q$ is absorbed into the absolute constant. [given, F1, F2, F3, F5, algebra]

1.2 Let $S$ be a set of $h\ge\delta k$ indices satisfying the largeness hypothesis. Replace each input $R_j$ by $R'_j:=\max(1,R_j)$. If $R_j\ge1$, keep the supplied approximation. If $R_j<1$, for each required integer $n$ set $\theta=f^{(j)}(n)/j!$ and take $q'_j=1$ and $a'_j=\lfloor\theta+1/2\rfloor$. By [F5], $a'_j\le\theta+1/2<a'_j+1$, so $-1/2\le\theta-a'_j<1/2$; hence the error is at most $1/2\le(q'_j)^{-2}$. Also $R'_j=1\le q'_j\le Q^{2j}(R'_j)^{-1}$. Thus the hypotheses of [F1] hold with the $R'_j$, and $R'_j\le Q^j$. For $j\in S$, $R'_j=R_j\ge Q^{\delta j}>1$; for all other indices, $(R'_j)^{-1}\le1$. Therefore $$\left(\prod_{j=2}^k(R'_j)^{-1}\right)^{1/(8k^2r^2)}\le Q^{-\delta\sum_{j\in S}j/(8k^2r^2)}\le Q^{-\delta^3/(16r^2)},$$ where $\sum_{j\in S}j\ge h(h+1)/2\ge\delta^2k^2/2$. Since $R'_j\ge R_j$, the product with $R'_j$ in [F1]'s conclusion is no larger than the product with the original $R_j$. [given, F1, F3, F4, F5, choose, construct, algebra]

2.1 Choose $\kappa$ so large that $e^{-\kappa}\le\delta^3/4$. Since $(1-1/k)^r\le e^{-r/k}\le e^{-\kappa}$, the positive exponent from step 1.1 is at most $\delta^3/(32r^2)$, while step 1.2 supplies $-\delta^3/(16r^2)$. Their product is therefore at most $Q^{-\delta^3/(32r^2)}$. The prefactor $\exp(C\log k/(4r))$ is bounded by an absolute constant because $r\ge\kappa k$. Also [F5] gives $r=\lceil\kappa k\rceil\le\kappa k+1\le2\kappa k$ after increasing $\kappa$, so $r^{-2}\ge(4\kappa^2k^2)^{-1}$. Substitution into [F1], and absorption of $N/Q$ into $NQ^{-\lambda/k^2}$ after taking $0<\lambda\le1$, proves the claimed estimate with a positive $\lambda$ depending only on $\delta$. [step 1.1, step 1.2, F1, F5, algebra] ∎

