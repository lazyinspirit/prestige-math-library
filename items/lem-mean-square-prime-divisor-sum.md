---
id: lem-mean-square-prime-divisor-sum
kind: lemma
title: "Mean-square bound for finite prime-divisor sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-prime
  - def-uniform-finite-probability-space
  - thm-chinese-remainder-theorem
  - thm-first-mertens-theorem-for-primes
  - thm-chebyshev-prime-counting-bounds
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Adam J. Harper, Probabilistic Number Theory Lecture Notes 1, Theorem 2.1 and complete proof (Turán–Kubilius inequality)"
      url: "https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf"
      locator: "PDF pp. 3–4, Theorem 2.1 and proof; specialize to the strongly additive prime-divisor sum with coefficients a_p."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23.1, Theorem 23.1"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF pp. 9–11, Turán–Kubilius inequality and its prime-power variance term."
---

## Statement

There is an absolute constant $C$ such that for every integer $N\ge2$, every family of complex numbers $(a_p)_{p\le N}$ indexed by primes, and a uniformly distributed integer $U_N$ on $\{1,\ldots,N\}$,
$$\mathbb E\left|\sum_{p\le N}a_p\left(\mathbf1_{p\mid U_N}-\mathbb P(p\mid U_N)\right)\right|^2\le C\sum_{p\le N}\frac{|a_p|^2}{p}.$$

## Statement references

[Harper, *Probabilistic Number Theory Lecture Notes 1*, Theorem 2.1 and proof](https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23.1, Theorem 23.1](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** An integer $N\ge2$, complex coefficients $a_p$ for primes $p\le N$, and $U_N$ uniform on $\{1,\ldots,N\}$.

[F1] The probability of an event in this finite uniform space is its cardinality divided by $N$. ([[def-uniform-finite-probability-space]])

[F2] If $p,q$ are distinct primes, then the Chinese remainder theorem identifies simultaneous divisibility by $p$ and $q$ with divisibility by $pq$. ([[thm-chinese-remainder-theorem]])

[F3] For $y\ge2$, $\sum_{q\le y,\ q\text{ prime}}\log q\le C_0y$ for an absolute $C_0$. ([[thm-chebyshev-prime-counting-bounds]])

[F4] For $y\ge2$, $\sum_{q\le y,\ q\text{ prime}}(\log q)/q=\log y+O(1)$. ([[thm-first-mertens-theorem-for-primes]])

[F5] The natural logarithm is positive and increasing on $(1,\infty)$ and satisfies $\log(ab)=\log a+\log b$. ([[thm-natural-logarithm-laws]])

## Proof

**Proof technique:** direct covariance expansion.

1.1 Put $I_p=\mathbf1_{p\mid U_N}$ and $m_p=\mathbb E I_p=\lfloor N/p\rfloor/N$. Then $\operatorname{Var}(I_p)\le m_p\le1/p$. For distinct primes, [F1]–[F2] give $\mathbb E(I_pI_q)=\lfloor N/(pq)\rfloor/N$. If $pq\le N$, replacing each floor by its argument plus an error of magnitude at most $1$ shows $|\operatorname{Cov}(I_p,I_q)|\le C_1/N$. If $pq>N$, then $I_pI_q=0$ for every $U_N\le N$, so $|\operatorname{Cov}(I_p,I_q)|=m_pm_q\le1/(pq)$. Since $pq\le N$ and $pq>N$ respectively determine which of $1/N$ and $1/(pq)$ is smaller, in both cases $|\operatorname{Cov}(I_p,I_q)|\le C_2\min\{N^{-1},(pq)^{-1}\}$. [given, F1, F2, algebra]

1.2 On pairs with $pq\le N$, use $2|a_pa_q|\le |a_p|^2(\log q)/(\log p)+|a_q|^2(\log p)/(\log q)$. The region is symmetric in $p,q$, so [F3] gives $(1/N)\sum_{pq\le N}|a_pa_q|\le C_3\sum_{p\le N}(|a_p|^2/(N\log p))\sum_{q\le N/p}\log q\le C_4\sum_{p\le N}|a_p|^2/(p\log p)\le C_5\sum_{p\le N}|a_p|^2/p$. When $N/p<2$ the inner sum is empty; otherwise [F3] applies. [given, F3, F5, algebra]

1.3 On pairs with $pq>N$, the same weighted inequality and symmetry give $\sum_{pq>N}|a_pa_q|/(pq)\le\sum_{p\le N}(|a_p|^2/(p\log p))\sum_{N/p<q\le N}(\log q)/q$. If $N/p\ge2$, [F4] bounds the inner sum by $\log p+O(1)\le C_6\log p$. If $N/p<2$, then $p>N/2$ and [F4] bounds it by $\log N+O(1)\le C_7\log p$ (the finitely many smallest $N$ are absorbed into the constant). Therefore this region is also at most $C_8\sum_{p\le N}|a_p|^2/p$. [given, F4, F5, algebra]

2.1 Expanding the centered square and using step 1.1 bounds its diagonal by $\sum_{p\le N}|a_p|^2/p$. The off-diagonal absolute sum splits into the regions $pq\le N$ and $pq>N$, which steps 1.2 and 1.3 bound respectively. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Combining the diagonal estimate of step 2.1, the small-product estimate of step 1.2, and the large-product estimate of step 1.3 proves the assertion with an absolute constant $C$. [step 2.1, step 1.2, step 1.3, algebra] ∎

## Proof references

[[def-uniform-finite-probability-space]]

[[thm-chinese-remainder-theorem]]

[[thm-chebyshev-prime-counting-bounds]]

[[thm-first-mertens-theorem-for-primes]]

[[thm-natural-logarithm-laws]]
