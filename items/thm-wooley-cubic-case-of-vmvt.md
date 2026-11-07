---
id: thm-wooley-cubic-case-of-vmvt
kind: theorem
title: Wooley’s Cubic Case of Vinogradov’s Mean Value Theorem
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
- thm-holder-inequality-for-integrals
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-continuous-on-a-rectangle-is-riemann-integrable
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: T. D. Wooley, The cubic case of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://arxiv.org/pdf/1401.3150v1
    locator: Theorem 1.1, printed p. 1 (PDF p. 1)
  - title: D. R. Heath-Brown, The cubic case of Vinogradov’s mean value theorem
    url: https://msp.org/ent/2022/1-1/ent-v1-n1-p01-p.pdf
    locator: Theorem, printed p. 2; efficient-congruencing proof §§2–3, printed pp.
      2–10
  - title: Lillian B. Pierce, The Vinogradov Mean Value Theorem [after Wooley, and
      Bourgain, Demeter and Guth]
    url: https://arxiv.org/pdf/1707.00119v2
    locator: §1.1, Theorem 1.2, printed p. 4; §4.4, Theorem 4.6 overview, printed
      pp. 21–22
  - title: 'Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem: critical decoupling consequence used for the alternative local
      proof'
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §4; the current proof uses the proved local critical-moment supplier
      and elementary Holder, rather than reconstructing Wooley’s multigrade method.
proof_strategy: direct
axiom_use: Countable Choice is used only through the accepted critical decoupling
  consequence and the complete Lebesgue/Riemann comparison. No full Axiom of Choice
  is introduced.
---

## Statement

Assume Countable Choice. For every positive integer $s$, every real $X\ge1$, and every $\varepsilon>0$, there is a constant $C_{s,\varepsilon}>0$, independent of $X$, such that
$$J_{s,3}(X)\le C_{s,\varepsilon}X^{\varepsilon}\bigl(X^s+X^{2s-6}\bigr),$$
where $N$ is the integer with $N\le X<N+1$, $e(t)=\exp(2\pi i t)$, and $J_{s,3}(X)=\int_{[0,1]^3}\left|\sum_{n=1}^Ne(\alpha_1n+\alpha_2n^2+\alpha_3n^3)\right|^{2s}\,d\alpha$ is the ordinary multiple Riemann integral.

## Statement references

[Wooley, Theorem 1.1](https://arxiv.org/pdf/1401.3150v1)

[Heath-Brown, Theorem](https://msp.org/ent/2022/1-1/ent-v1-n1-p01-p.pdf)

[Pierce, Theorem 1.2](https://arxiv.org/pdf/1707.00119v2)

## Facts & Assumptions

**Given:** Countable Choice and all the parameters in the Statement.

[A1] Countable Choice is inherited from the locally proved critical-moment supplier and the Riemann–Lebesgue comparison ([[def-countable-choice]]).

[F1] For every $k\ge2$, $K=k(k+1)/2$, and $\eta>0$, $J_{K,k}(X)\le C_{k,\eta}X^{K+\eta}$ for all real $X\ge1$ under [A1] ([[lem-vmvt-critical-mean-value-bound-from-decoupling]]).

[F2] The mean value is the ordinary multiple Riemann integral of $|f|^{2s}$, where $f(\alpha)=\sum_{n=1}^{N}e(\sum_{j=1}^k\alpha_jn^j)$ and $N=\lfloor X\rfloor$ ([[def-vinogradov-mean-value-Jsk]]).

[F3] The exponential is continuous, and modulus is Lipschitz by the triangle inequality, so these finite-sum integer-power integrands are continuous and bounded on the unit cube; continuous functions on a closed rectangle are Riemann integrable ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]]). Under [A1] their Lebesgue and Riemann integrals agree, and the cube has Lebesgue measure $1$ ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] The complex exponential on imaginary arguments has modulus $1$, and finite complex triangle inequalities imply $|f(\alpha)|\le N$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]).

[F5] Holder applies on a measure space for conjugate finite exponents ([[thm-holder-inequality-for-integrals]]).

## Proof

1.1 Fix a positive integer $s$, $X\ge1$ and $\varepsilon>0$. Put $N=\lfloor X\rfloor\ge1$ and $f(\alpha)=\sum_{n=1}^Ne(\alpha_1n+\alpha_2n^2+\alpha_3n^3)$. By [F2]–[F3] all its moment integrals may be treated as Lebesgue integrals on a probability cube; [F4] gives $|f|\le N\le X$. At $k=3$, the critical index in [F1] is $K=6$. [given, A1, F1, F2, F3, F4, construct, algebra]

2.1 If $1\le s<6$, apply Holder [F5] to $|f|^{2s}$ and $1$ with conjugate exponents $6/s$ and $6/(6-s)$. Since the cube has mass one, $J_{s,3}(X)\le J_{6,3}(X)^{s/6}$. Choose $\eta=6\varepsilon/s$ in [F1]. Then $J_{s,3}(X)\le C_{s,\varepsilon}X^{s+\varepsilon}$, which is at most the stated two-term right side. If $s=6$, [F1] directly gives this same bound with $\eta=\varepsilon$; no Holder exponent of infinity or division by $6-s$ is used. [A1, F1, F3, F5, step 1.1, algebra]

3.1 If $s>6$, then [F4] gives $|f|^{2s}\le N^{2s-12}|f|^{12}$ pointwise. Integrating by [F2]–[F3] and using [F1] with $\eta=\varepsilon$ yields $J_{s,3}(X)\le N^{2s-12}C_{3,\varepsilon}X^{6+\varepsilon}\le C_{3,\varepsilon}X^{2s-6+\varepsilon}$. This is again bounded by $C_{s,\varepsilon}X^\varepsilon(X^s+X^{2s-6})$. [A1, F1, F2, F3, F4, step 1.1, algebra]

4.1 The ranges $1\le s<6$, $s=6$ and $s>6$ exhaust all positive integers $s$. Their constants depend only on $s,\varepsilon$; enlarging one constant proves the original full quantitative bound for every real $X\ge1$. The case $N=1$ is already included in each integral inequality. [step 2.1, step 3.1, given, algebra] ∎

## Remarks

The theorem and its original efficient-congruencing attribution to Wooley are preserved. The local proof here follows the already proved critical decoupling consequence and elementary Holder/trivial-supremum estimates. It does not claim to reconstruct Wooley’s original multigrade proof or Heath-Brown’s deferred combination lemma, and imports neither as an unproved supplier.
