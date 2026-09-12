---
id: ex-real-and-imaginary-factors-in-the-affine-sl2-denominator
kind: example
title: Real and imaginary factors in the affine sl2 denominator
deps: ["prop-affine-denominator-separates-real-and-imaginary-root-factors"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Section 10.3
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 12.3
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For untwisted affine $\mathfrak{sl}_2$, write $q=e^{-\delta}$ and $z=e^{-\alpha}$. The normalized positive-root denominator is
$$P=\prod_{n\ge1}(1-q^n)\prod_{n\ge0}(1-zq^n)\prod_{n\ge1}(1-z^{-1}q^n).$$
Its imaginary factors are the first product; its real factors are the other two.

## Facts & Assumptions

**Given:** Finite rank one with positive root $\alpha$.

[F1] [[prop-affine-denominator-separates-real-and-imaginary-root-factors]] supplies the three root families and their multiplicities.

## Verification

1.1 Here $\ell=1$ and $\Phi_0^+=\{\alpha\}$. The roots $n\delta$ give $q^n$ for $n\ge1$; $\alpha+n\delta$ give $zq^n$ for $n\ge0$; $-\alpha+n\delta$ give $z^{-1}q^n$ for $n\ge1$. F1 says all these factors have exponent one in this rank. Substitution gives the stated product. [F1, algebra]

2.1 In particular its degree-zero factor is $1-z$. To first degree in $q$, the remaining factors are $(1-q)(1-zq)(1-z^{-1}q)$; factors with index at least two contribute only at degree at least two. Thus $$P=(1-z)\bigl(1-(1+z+z^{-1})q+O(q^2)\bigr).$$ This calculation checks both index endpoints: omitting $n=0$ from the positive family loses $1-z$, while including it in the negative family adds the nonexistent root $-\alpha$. The grouping is coefficientwise formal as in F1, with no analytic Jacobi identity asserted. [F1, step 1.1, algebra] ∎
