---
id: ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra
kind: example
title: The Heisenberg subalgebra of an affine Lie algebra
deps: ["def-untwisted-affine-central-extension", "prop-roots-of-an-untwisted-affine-lie-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Proposition
        12.2.14
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

The subspace $\mathcal H=\mathbb Cc\oplus\bigoplus_{m\ne0}\mathfrak h\otimes t^m$ is a Heisenberg Lie algebra: its center is exactly $\mathbb Cc$ and
$$[h\otimes t^m,k\otimes t^n]=m\delta_{m,-n}B(h,k)c.$$
Here Heisenberg means a central extension of a vector space by a one-dimensional center with nondegenerate alternating commutator form. The zero Cartan modes are excluded.

## Facts & Assumptions

**Given:** A nonzero finite simple algebra with its normalized Cartan form.

[F1] The bracket and centrality of $c$ are [[def-untwisted-affine-central-extension]].

[F2] Cartan modes are the imaginary-root spaces by [[prop-roots-of-an-untwisted-affine-lie-algebra]].

## Verification

1.1 Finite Cartan elements commute. Thus F1 gives the displayed bracket, entirely in $\mathbb Cc$, proving closure. By F2 each nonzero mode has dimension $\ell$ and the underlying vectors are precisely the stated Cartan modes. For $m\ne0$, pairing it with mode $-m$ gives the nondegenerate pairing $mB$ because $B$ is nondegenerate on the finite Cartan. [F1, F2, given, algebra]

2.1 Let $z=ac+\sum_{m\ne0}h_m\otimes t^m$ have finite support and at least one $h_j\ne0$. Choose $k\in\mathfrak h$ with $B(h_j,k)\ne0$. Its bracket with $k\otimes t^{-j}$ is exactly $jB(h_j,k)c\ne0$: all other modes have nonopposite degrees and contribute zero. Hence no such $z$ is central. Conversely $ac$ is central by F1. This proves center $\mathbb Cc$ and nondegeneracy of the alternating form on $\mathcal H/\mathbb Cc$. If zero modes were included, they would commute with every Cartan mode and enlarge the center by $\mathfrak h$. The finite-support zero element and rank-one case require no exception. [F1, step 1.1, algebra] ∎
