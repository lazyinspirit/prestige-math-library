---
id: ex-riesz-product-for-three-powers-of-three
kind: example
title: "A Riesz product for three powers of three"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-riesz-product-for-a-hadamard-lacunary-set]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Definition 3.6.5"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Example

For unimodular $\varepsilon_1,\varepsilon_3,\varepsilon_9$, the product

$$P(x)=\prod_{n\in\{1,3,9\}}\left(1+\operatorname{Re}(\varepsilon_ne_n(x))\right)$$

is a nonnegative mass-one trigonometric polynomial, with
$\widehat P(-n)=\overline{\varepsilon_n}/2$ for $n=1,3,9$.

## Facts & Assumptions

**Given:** Three complex numbers $\varepsilon_1,\varepsilon_3,\varepsilon_9$
of modulus one.

## Verification

**Proof technique:** expand the three ratio-three factors.

1.1 Each factor equals $|1+\varepsilon_ne_n|^2/2$, so $P\ge0$. In an [given, algebra]
expansion, each chosen frequency is a signed sum of $1,3,9$ with coefficients
in $\{-1,0,1\}$. [given, algebra]

2.1 Such a signed sum is zero only when all three coefficients are zero: [step 1.1, algebra]
the largest nonzero term has magnitude larger than the sum of all smaller
ones. Thus the constant coefficient is $1$, so $\int_0^1P=1$.
[step 1.1, algebra]

3.1 The same observation shows that frequency $-n$ has only the first-order [step 2.1, algebra]
contribution $\overline{\varepsilon_n}e_{-n}/2$. Therefore
$\widehat P(-n)=\overline{\varepsilon_n}/2$, agreeing with
[[lem-riesz-product-for-a-hadamard-lacunary-set]]. [step 2.1, algebra] ∎
