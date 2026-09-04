---
page: randomized-complexity-and-amplification
title: "Randomized Complexity and Amplification"
status: draft
items:
  - def-probabilistic-polynomial-time-machine
  - def-rp-corp-zpp-bpp-and-pp
  - thm-zpp-equals-rp-intersection-corp
  - lem-majority-error-bound-from-chebyshev
  - thm-bpp-amplification-to-inverse-polynomial-error
  - lem-chernoff-bound-for-bernoulli-trials
  - thm-bpp-amplification-to-exponentially-small-error
  - thm-rp-one-sided-amplification
  - thm-adleman-bpp-is-contained-in-p-poly
  - def-pairwise-independent-hash-family
  - lem-affine-finite-field-hashes-are-pairwise-independent
  - thm-freivalds-matrix-product-verification
  - def-polynomial-identity-testing
  - thm-schwartz-zippel-lemma
  - cor-pit-is-in-corp
  - fs-reusing-random-bits-amplifies-success
  - fs-pp-has-bounded-error-away-from-one-half
examples:
  - ex-majority-error-bound-from-chebyshev
  - ex-pit-is-in-corp
  - cex-reusing-random-bits-amplifies-success
---

This page fixes the standard probabilistic complexity classes and then separates
three different amplification stories that are often blurred together: BPP
majority amplification by Chebyshev, exponentially small BPP error by a
Chernoff bound, and one-sided RP amplification by independent repetition.
Adleman's theorem then converts exponentially reliable randomness into a
nonuniform advice string.

The second half packages two standard randomized algebraic tools. Pairwise
independent finite-field hashes supply a compact randomness source, Freivalds'
test gives a one-sided randomized verifier for matrix products, and the
Schwartz-Zippel lemma yields the coRP classification of polynomial identity
testing under the explicit degree and evaluation assumptions recorded on the
page. The false statements close by isolating the two easy mistakes: correlation
breaks amplification, and PP does not require a fixed margin above one half.
