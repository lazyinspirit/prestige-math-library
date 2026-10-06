---
page: lie-algebra-cohomology-and-kostants-nilradical-theorem-examples
title: "Lie Algebra Cohomology and Kostants Nilradical Theorem — Examples"
status: published
requires: [lie-algebra-cohomology-and-kostants-nilradical-theorem]
items: []
examples:
  - ex-kostant-n-cohomology-for-sl2
  - ex-kostant-n-cohomology-for-the-trivial-sl3-module
  - ex-degree-one-kostant-classes-correspond-to-simple-reflections
  - cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical
  - cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight
---

These five leaves check the theorem in the two smallest ranks and record two
hypothesis boundaries. [[ex-kostant-n-cohomology-for-sl2]] computes both
one-dimensional groups for $\mathfrak{sl}_2$, verifying the sign of the dot
action $s\cdot\lambda=-\lambda-2\rho=-(m+2)\omega$, the $\rho$-shift inside
the exterior root factor, and the top degree in rank one.
[[ex-kostant-n-cohomology-for-the-trivial-sl3-module]] is the first rank-two
check: for the trivial module the six Weyl elements contribute dimensions
$1,2,2,1$ in degrees $0,1,2,3$ with the six pairwise distinct weights
$w\cdot0=w\rho-\rho$, so the trivial coefficients do not force all cohomology
weights to vanish. [[ex-degree-one-kostant-classes-correspond-to-simple-reflections]]
identifies the degree-one part with one line per simple reflection, connecting
Kostant's theorem to the first term of the BGG resolution.

The two counterexamples mark the walls of the construction.
[[cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical]] computes
$H^1(\mathfrak n^+,\mathbb C)=(\mathfrak n^+)^*\cong\mathbb C$ for the abelian
one-dimensional nilradical of $\mathfrak{sl}_2$, showing that the
semisimplicity hypothesis of the Whitehead lemmas cannot be weakened to
nilpotency of the coefficient algebra.
[[cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight]]
compares the three candidate weights in rank one. Dropping the exterior
factor (weight $w\lambda=-m\omega$) fails for every $m\ge0$. Attaching the
whole shift to the top weight (weight $\lambda-\alpha=(m-2)\omega$) agrees
with the correct degree-one weight $-(m+2)\omega$ only when $m=0$ and fails
for every $m\ge1$. Neither modification works uniformly in $m$; the exterior root-weight shift
$s\rho-\rho=-\alpha$ is an independent contribution, not a bookkeeping
convention.
