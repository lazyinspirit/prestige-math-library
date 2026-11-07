---
id: thm-wooley-efficient-congruencing-vmvt-large-moment-range
kind: theorem
title: Wooley’s Efficient-Congruencing Bound for Large Moments
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
- def-countable-choice
- def-vinogradov-mean-value-Jsk
- lem-vmvt-critical-mean-value-bound-from-decoupling
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- thm-lebesgue-measure-of-a-box-of-every-kind
- lem-complex-conjugation-and-modulus-laws
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-continuous-on-a-rectangle-is-riemann-integrable
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: T. D. Wooley, Vinogradov’s mean value theorem via efficient congruencing
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf
    locator: Theorem 1.1, printed p. 1576; proof §§3–7, printed pp. 1590–1607
  - title: Lillian B. Pierce, The Vinogradov Mean Value Theorem [after Wooley, and
      Bourgain, Demeter and Guth]
    url: https://arxiv.org/pdf/1707.00119v2
    locator: §4.1, statement and context for the large-moment efficient-congruencing
      theorem, printed pp. 14–16
  - title: N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)
    url: https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf
    locator: '§8.2, printed pp. 78–79: large-moment range and relation to the critical
      case'
  - title: 'Bourgain–Demeter–Guth, critical decoupling consequence: alternative local
      proof of the established large-moment bound'
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §4, followed here by the pointwise bound |f|<=N.
proof_strategy: direct
axiom_use: Countable Choice is inherited from the critical decoupling consequence
  and the Riemann/Lebesgue integral bridge; no full Axiom of Choice is introduced.
---

## Statement

Assume Countable Choice. For integers $k\ge2$ and $s\ge k(k+1)$, every real $X\ge1$, and every $\varepsilon>0$, there is a constant $C_{s,k,\varepsilon}>0$, independent of $X$, such that
$$J_{s,k}(X)\le C_{s,k,\varepsilon}X^{2s-k(k+1)/2+\varepsilon},$$
where $N$ is the integer with $N\le X<N+1$, $e(t)=\exp(2\pi i t)$, and $J_{s,k}(X)=\int_{[0,1]^k}\left|\sum_{n=1}^Ne\!\left(\sum_{j=1}^k\alpha_jn^j\right)\right|^{2s}\,d\alpha$ is the ordinary multiple Riemann integral.

## Statement references

[Wooley, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Pierce, §4.1](https://arxiv.org/pdf/1707.00119v2)

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Countable Choice and all the parameters in the Statement.

[A1] Countable Choice is inherited from the locally proved critical-moment supplier and the Riemann–Lebesgue comparison ([[def-countable-choice]]).

[F1] For every $k\ge2$, $K=k(k+1)/2$, and $\eta>0$, $J_{K,k}(X)\le C_{k,\eta}X^{K+\eta}$ for all real $X\ge1$ under [A1] ([[lem-vmvt-critical-mean-value-bound-from-decoupling]]).

[F2] The mean value is the ordinary multiple Riemann integral of $|f|^{2s}$, where $f(\alpha)=\sum_{n=1}^{N}e(\sum_{j=1}^k\alpha_jn^j)$ and $N=\lfloor X\rfloor$ ([[def-vinogradov-mean-value-Jsk]]).

[F3] The exponential is continuous, and modulus is Lipschitz by the triangle inequality, so these finite-sum integer-power integrands are continuous and bounded on the unit cube; continuous functions on a closed rectangle are Riemann integrable ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]]). Under [A1] their Lebesgue and Riemann integrals agree, and the cube has Lebesgue measure $1$ ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] The complex exponential on imaginary arguments has modulus $1$, and finite complex triangle inequalities imply $|f(\alpha)|\le N$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Fix the stated $k,s,X,\varepsilon$ and put $K=k(k+1)/2$, $N=\lfloor X\rfloor\ge1$ and $f(\alpha)=\sum_{n=1}^Ne(\sum_{j=1}^k\alpha_jn^j)$. The hypothesis $s\ge k(k+1)=2K$ implies $2s-2K\ge0$. By [F2]–[F4], the integral is a Lebesgue integral of the continuous bounded function $|f|^{2s}$ on the probability cube, with $|f|\le N\le X$. [given, A1, F2, F3, F4, construct, algebra]

2.1 Pointwise, $|f|^{2s}\le N^{2s-2K}|f|^{2K}$. Integrating and applying [F1] at the same $k$ with loss $\eta=\varepsilon$ gives $J_{s,k}(X)\le N^{2s-2K}J_{K,k}(X)\le C_{k,\varepsilon}X^{2s-2K}X^{K+\varepsilon}=C_{k,\varepsilon}X^{2s-K+\varepsilon}$. The nonnegative power permits $N\le X$ also when $1\le X<2$. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 Since $K=k(k+1)/2$, the last exponent is exactly the one in the Statement. The constant may be enlarged to one depending on $s,k,\varepsilon$ and is independent of $X$. In particular the boundary $s=2K=k(k+1)$ and $k=2$ are retained. No assertion outside the original large-moment range is required. [step 1.1, step 2.1, given, algebra] ∎

## Remarks

The Statement retains Wooley’s original theorem attribution and its full large-moment range. This local proof uses the stronger, already proved critical decoupling consequence followed by a trivial-supremum estimate; it does not claim to reconstruct the historical conditioning, congruence-counting or efficient-congruencing iteration from Wooley’s original paper.
