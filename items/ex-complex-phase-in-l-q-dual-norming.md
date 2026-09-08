---
id: ex-complex-phase-in-l-q-dual-norming
kind: example
title: "Conjugate phases norm a three-atom function"
status: published
origin: pipeline
landmark: false
deps: [lem-complex-lq-norm-from-finite-simple-dual-tests, lem-complex-conjugation-and-modulus-laws, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: "Compute the phase test and express any real test as a convex combination of eight sign vertices."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.2 Corollary 10.5 supplies the phase test; the three-atom calculation is an original example."
---

## Example

On $X=\{0,1,2\}$ with the full sigma-algebra and each atom of mass $1/3$, let $\omega=(-1+i\sqrt3)/2$ and $g=(1,\omega,\omega^2)$. Then $\|g\|_1=1$. The complex bilinear test $s=(1,\overline\omega,\overline\omega^2)$ has $\|s\|_\infty=1$ and $\int gs=1$. In contrast,
$$\sup_{s\in\mathbb R^3,\ \|s\|_\infty\le1}\left|\int gs\right|=\frac23.$$
Taking $s=g$ without conjugating the phase gives $\int g^2=0$.

## Facts & Assumptions

**Given:** The three-atom probability space and the explicitly displayed $g$ and $\omega$.

[F1] The bilinear finite-simple dual norm equals the $L^1$ norm on this finite measure space ([[lem-complex-lq-norm-from-finite-simple-dual-tests]]).

[F2] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] The integral of a nonnegative simple function is its coefficient-weighted sum of atom measures ([[def-integral-of-a-nonnegative-simple-function]]).

[F4] Real and imaginary component integration extends that formula to complex coefficients ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Verification

**Proof technique:** Compute the phase test and express any real test as a convex combination of eight sign vertices.

1.1 Direct multiplication gives $\omega^2=(-1-i\sqrt3)/2$, $\omega^3=1$, $1+\omega+\omega^2=0$ and $|\omega|=1$. Thus all three values of $g$ have modulus one, so F3 gives $\|g\|_1=(1+1+1)/3=1$. The measure is a probability measure: disjoint sets just partition three atoms, and their weighted cardinalities add to one on $X$. [F2, F3, given]

1.2 For a real test $t=(t_0,t_1,t_2)\in[-1,1]^3$, set $w_\sigma=\prod_{j=0}^2(1+\sigma_jt_j)/2$ for $\sigma\in\{-1,1\}^3$. Each weight is nonnegative, summing the product over all signs gives $\sum_\sigma w_\sigma=1$, and summing $\sigma_jw_\sigma$ gives $t_j$. Thus $t=\sum_\sigma w_\sigma\sigma$. For the linear expression $L(t)=(t_0+\omega t_1+\omega^2t_2)/3=\int gt$, F2 implies $|L(t)|\le\sum_\sigma w_\sigma|L(\sigma)|\le\max_\sigma|L(\sigma)|$. [F2, F3, F4]

2.1 The conjugated test has modulus one on each atom, so its essential infinity norm is one. Coordinatewise $gs=(1,1,1)$, and F3–F4 give $\int gs=1$. Every complex test of norm at most one has integral modulus at most $\|g\|_1=1$ by F1; all tests here have finite-measure support. Hence this test attains the full complex supremum. [F1, F2, F3, F4, step 1.1]

3.1 At the two equal-sign vertices, $L(\sigma)=0$ because $1+\omega+\omega^2=0$. Every other sign vertex has one exceptional sign, at some coordinate $j$, so $L(\sigma)=\pm2\omega^j/3$ and has modulus $2/3$. For instance $t=(1,-1,-1)$ gives $L(t)=2/3$. This proves both the real upper bound and its attainment. Finally F4 gives $\int g^2=(1+\omega^2+\omega^4)/3=(1+\omega^2+\omega)/3=0$, proving the claimed failure of the unconjugated phase. [F4, step 1.1, step 1.2] ∎
