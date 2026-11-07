---
id: thm-vinogradov-mean-value-main-conjecture
kind: theorem
title: The Main Conjecture in Vinogradov’s Mean Value Theorem
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-countable-choice
- def-vinogradov-mean-value-Jsk
- thm-vinogradov-mean-value-is-solution-count
- lem-vmvt-critical-mean-value-bound-from-decoupling
- thm-wooley-cubic-case-of-vmvt
- thm-wooley-efficient-congruencing-vmvt-large-moment-range
- thm-holder-inequality-for-integrals
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- thm-lebesgue-measure-of-a-box-of-every-kind
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-continuous-on-a-rectangle-is-riemann-integrable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. D. Wooley, The cubic case of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://arxiv.org/pdf/1401.3150v1
    locator: Theorem 1.1, printed p. 1
  - title: T. D. Wooley, Vinogradov’s mean value theorem via efficient congruencing
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf
    locator: Theorem 1.1, printed p. 1576
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: Theorem 1.1, p. 634; Theorem 1.2 and §4, pp. 635–639
  - title: Lillian B. Pierce, The Vinogradov Mean Value Theorem [after Wooley, and
      Bourgain, Demeter and Guth]
    url: https://arxiv.org/pdf/1707.00119v2
    locator: '§§1, 4.1, 6.2–6.3: main-conjecture statement, efficient congruencing
      and decoupling deductions'
---

## Statement

Assume countable choice. Let $s,k$ be positive integers and let $X\ge1$ be real. Put $N=\lfloor X\rfloor$, the unique integer satisfying $N\le X<N+1$, and $e(t)=\exp(2\pi i t)$. Define
$$J_{s,k}(X)=\int_{[0,1]^k}\left|\sum_{n=1}^Ne\!\left(\sum_{j=1}^k\alpha_jn^j\right)\right|^{2s}\,d\alpha,$$
using the ordinary multiple Riemann integral. For every $\varepsilon>0$ there is a constant $C_{s,k,\varepsilon}>0$, independent of $X$, such that
$$J_{s,k}(X)\le C_{s,k,\varepsilon}X^\varepsilon\left(X^s+X^{2s-k(k+1)/2}\right).$$

## Statement references

[Wooley, cubic theorem](https://arxiv.org/pdf/1401.3150v1)

[Wooley, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Bourgain–Demeter–Guth, Theorems 1.1–1.2 and §4](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Pierce, §§1, 4.1, 6.2–6.3](https://arxiv.org/pdf/1707.00119v2)

## Facts & Assumptions

**Given:** Countable choice; positive integers $s,k$; a real $X\ge1$; and $\varepsilon>0$.

[A1] Countable choice is assumed in the Lebesgue integration framework used by the critical-moment supplier ([[def-countable-choice]]).

[F1] $J_{s,k}(X)$ is the integral of the $2s$-th power of the degree-$k$ exponential sum with $e(t)=\exp(2\pi i t)$ and $N=\lfloor X\rfloor$ ([[def-vinogradov-mean-value-Jsk]]).

[F2] This mean value counts the tuples $(x_1,\ldots,x_s,y_1,\ldots,y_s)\in\{1,\ldots,N\}^{2s}$ satisfying $\sum_a x_a^j=\sum_a y_a^j$ for every $1\le j\le k$ ([[thm-vinogradov-mean-value-is-solution-count]]).

[F3] For $k\ge2$, $K=k(k+1)/2$ and every $\eta>0$, $J_{K,k}(X)\le C_{k,\eta}X^{K+\eta}$ under [A1] ([[lem-vmvt-critical-mean-value-bound-from-decoupling]]).

[F4] Under [A1], for every $s\ge1$, $J_{s,3}(X)\le C_{s,\eta}X^\eta(X^s+X^{2s-6})$ for every $\eta>0$ ([[thm-wooley-cubic-case-of-vmvt]]).

[F5] Under [A1], for $k\ge2$, $s\ge k(k+1)=2K$ and every $\eta>0$, $J_{s,k}(X)\le C_{s,k,\eta}X^{2s-K+\eta}$ ([[thm-wooley-efficient-congruencing-vmvt-large-moment-range]]).

[F6] Hölder's inequality applies to the Lebesgue integral; every integrand here is continuous on the unit cube, its Lebesgue and Riemann integrals agree, and the cube has measure $1$ ([[thm-holder-inequality-for-integrals]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Given:** [A1] and [F1]–[F6].

1.1 Suppose $k=1$. By [F2], choose $x_1,\ldots,x_s$ and $y_1,\ldots,y_{s-1}$ freely from $\{1,\ldots,N\}$. The equation $\sum_a x_a=\sum_a y_a$ determines at most one possible integer $y_s$, so $J_{s,1}(X)\le N^{2s-1}\le X^{2s-1}$. Since $2s-1\ge s$, this is at most $X^\varepsilon(X^s+X^{2s-1})$. [F2, algebra, choose]

1.2 Suppose $k=3$. The estimate in [F4], with $\eta=\varepsilon$, is exactly the required bound because $k(k+1)/2=6$. [F4, given]

1.3 Suppose $k\ge2$ and $k\ne3$, and put $K=k(k+1)/2$. If $s\le K$, apply [F6] to $|f|^{2s}$ and $1$, where $f(\alpha)=\sum_{n=1}^Ne(\sum_{j=1}^k\alpha_jn^j)$. For $s<K$, Hölder gives $J_{s,k}(X)\le J_{K,k}(X)^{s/K}$; for $s=K$ this is equality. By [F3] with $\eta=\varepsilon K/s$, this is at most $C X^{s+\varepsilon}$. The target right side contains $X^{s+\varepsilon}$. [A1, F1, F3, F6, algebra]

1.4 If $s\ge2K$, [F5] gives $J_{s,k}(X)\le C X^{2s-K+\varepsilon}$ directly, and this is bounded by the target right side. [F5, given]

1.5 It remains that $K<s<2K$. Put $a=(2K-s)/K$ and $b=(s-K)/K$. Then $a,b>0$, $a+b=1$, and $2s=2Ka+4Kb$. Applying [F6] to $|f|^{2Ka}|f|^{4Kb}$ with conjugate exponents $1/a$ and $1/b$ gives $J_{s,k}(X)\le J_{K,k}(X)^aJ_{2K,k}(X)^b$. By [F3] at $K$ and [F5] at $2K$, the right side is at most $C X^{a(K+\varepsilon)+b(3K+\varepsilon)}=C X^{2s-K+\varepsilon}$. Since $s>K$, $2s-K\ge s$, so this is bounded by the target right side. [A1, F1, F3, F5, F6, algebra]

2.1 The cases $k=1$, $k=3$, and $k\ge2$, $k\ne3$ exhaust all positive integers $k$. Their constants may be enlarged to one constant depending only on $s,k,\varepsilon$, proving the assertion for all $X\ge1$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given] ∎
