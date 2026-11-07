---
id: lem-soundararajan-primes-in-square-root-window
kind: lemma
title: "A Chebyshev prime window below the square root"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-chebyshev-theta-function
  - def-natural-logarithm
  - lem-chebyshev-theta-explicit-upper-bound
  - lem-central-binomial-coefficient-bounds
  - lem-central-binomial-coefficient-prime-valuation
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§3, printed pp. 5–6: the prime set P(y) and its Chebyshev lower bound."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§§1–2, pp. 8–12: Chebyshev prime bounds and prime number estimates."
---

## Statement

For every real $y\ge10^{16}$, the number of primes $p$ satisfying
$\sqrt y/23<p\le\sqrt y$ is at least
$\frac{7}{1000}\frac{\sqrt y}{\log y}$.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §3, printed pp. 5–6.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §§1–2, pp. 8–12.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A real number $y\ge10^{16}$.

[F1] For every natural $n\ge1$, $\frac{4^n}{2n+1}\le\binom{2n}{n}\le4^n$ ([[lem-central-binomial-coefficient-bounds]]).

[F2] In the prime factorization of $\binom{2n}{n}$, the exponent of a prime $p$ is $\sum_{k\ge1}(\lfloor2n/p^k\rfloor-2\lfloor n/p^k\rfloor)$; each summand is $0$ or $1$ ([[lem-central-binomial-coefficient-prime-valuation]]).

[F3] The Chebyshev function is $\theta(x)=\sum_{p\le x}\log p$, and $\theta(x)\le2x\log2$ for every real $x\ge2$ ([[def-chebyshev-theta-function]], [[lem-chebyshev-theta-explicit-upper-bound]]).

[F4] The logarithm is increasing, $\log(ab)=\log a+\log b$, and $\log(4^n)=2n\log2$ ([[thm-natural-logarithm-laws]]).

[F5] For $x>0$, $\log x=\int_1^x dt/t$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 For every natural $n\ge1$, the prime factorization formula in [F2] gives $$\log\binom{2n}{n}\le\theta(2n)+R_n,\qquad R_n:=\sum_{k=2}^{\lfloor\log(2n)/\log2\rfloor}\theta((2n)^{1/k}).$$ Indeed, the $k=1$ contribution is at most $\theta(2n)$, and for each $k\ge2$ only primes $p\le(2n)^{1/k}$ contribute, each by at most $\log p$. Since at most $t$ primes are at most $t$ and each contributes at most $\log t$, the elementary bound $\theta(t)\le t\log t$ holds. It then gives $$0\le R_n\le\frac{\sqrt{2n}\log^2(2n)}{\log2},$$ because $(2n)^{1/k}\le\sqrt{2n}$ for $k\ge2$ and there are at most $\log(2n)/\log2$ terms. [F2, F4, algebra]

2.1 For $n\ge10^6$, the bound in step 1.1 implies $$R_n+\log(2n+1)<\frac{14}{25}n<\frac23n<n\log2.$$ At $n=10^6$, $\log2>2/3$, $\log2<3/4$, and $2\cdot10^6+1<2^{21}$ give $\log(2n),\log(2n+1)<63/4$; also $\sqrt{2n}<1500$ and $1/\log2<3/2$. Hence $R_n/n<1500(63/4)^2(3/2)/10^6<0.559$ and $\log(2n+1)/n<16/10^6$, so their sum is below $0.56$. The two ratios decrease for $n\ge10^6$: $\log(2n)>4$ because $2n>64=2^6$ and $\log2>2/3$, so the logarithmic derivative of $\log^2(2n)/\sqrt n$ is $(4/\log(2n)-1)/(2n)<0$; the derivative of $\log(2n+1)/n$ is negative because its numerator $2n/(2n+1)-\log(2n+1)$ is negative. For the numerical logarithm bounds, substitute $t=(1+u)/(1-u)$ in $\log2=\int_1^2dt/t$ from [F5] to obtain $\log2=2\sum_{k\ge0}3^{-(2k+1)}/(2k+1)$; its first term gives $\log2>2/3$, and replacing every denominator by $1$ gives $\log2<3/4$. [F4, F5, step 1.1, algebra]

3.1 By [F1] and [F4], $$\log\binom{2n}{n}\ge2n\log2-\log(2n+1).$$ Combining this with step 1.1 and step 2.1 yields $\theta(2n)\ge n\log2$ for every $n\ge10^6$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 For every real $x\ge2\cdot10^6$, let $n=\lfloor x/2\rfloor$. Then $n\ge10^6$, $2n\le x$, and $n\ge x/4$. By [F3], increasing $x$ only adds nonnegative terms $\log p$, so $\theta$ is nondecreasing. Thus step 3.1 gives $$\theta(x)\ge\theta(2n)\ge n\log2\ge\frac{\log2}{4}x.$$ [F3, step 3.1, algebra]

5.1 Since $z\ge10^8$, both $z$ and $z/23$ are at least $2\cdot10^6$. Applying step 4.1 to $z$ and [F3] to $z/23$ gives $$\theta(z)-\theta(z/23)\ge\left(\frac14-\frac2{23}\right)(\log2)z=\frac{15\log2}{92}z.$$ If $N$ is the number of primes in $(z/23,z]$, then each contributes at most $\log z$, so $N\log z\ge\theta(z)-\theta(z/23)$. Thus $$N\ge\frac{15\log2}{92}\frac z{\log z} =\frac{15\log2}{46}\frac z{\log y} >\frac7{1000}\frac z{\log y},$$ where $\log2>2/3$ and $z=\sqrt y$. [F3, F4, step 4.1, algebra] ∎

