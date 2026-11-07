---
dependency_level: 4
id: def-smooth-and-rational-polynomial-nilsequences
kind: definition
title: Smooth and rational polynomial nilsequences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
  - def-total-equidistribution-of-a-nil-orbit
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Definitions 1.17–1.18 and Theorem 1.19, printed pp. 475–476
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Rational sequences, smooth sequences, and factorization statement, pp. 23–28
---

## Definition

Let $G/\Gamma$ have a Mal’cev basis $X$ and coordinate-chain metric $d_X^G$.
For real $M,N\geq1$, a sequence $\varepsilon:\mathbb Z\to G$ is
**$(M,N)$-smooth on $[N]$** if
$d_X^G(\varepsilon(n),e)\leq M$ and
$d_X^G(\varepsilon(n),\varepsilon(n-1))\leq M/N$ for every integer
$n\in[N]$. A subgroup $G'\leq G$ is **$M$-rational relative to $X$** if it
is closed and connected, its Lie algebra has a basis of rational linear
combinations of $X$ with coefficient heights at most $M$, and
$\Gamma'=G'\cap\Gamma$ is a lattice in $G'$. A group element $\gamma\in G$
is **$M$-rational** if $\gamma^q\in\Gamma$ for some integer $1\leq q\leq M$;
a point is $M$-rational if it has an $M$-rational representative. A sequence
$\gamma:\mathbb Z\to G$ is $M$-rational if every coset $\gamma(n)\Gamma$ is
an $M$-rational point. A coset sequence is periodic with period $q$ if
$\gamma(n+q)\Gamma=\gamma(n)\Gamma$ for every $n\in\mathbb Z$. For
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$, the coset sequence
$(g(n)\Gamma)_{n\in\mathbb Z}$ is a **polynomial nilsequence**. It is totally
$\delta$-equidistributed on $[N]$ if it satisfies the Lipschitz
equidistribution bound on every arithmetic progression in $[N]$ of length at
least $\delta N$, using the inequality in the preceding definition.

## Definition references

[Green and Tao, Definitions 1.17–1.18](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)
