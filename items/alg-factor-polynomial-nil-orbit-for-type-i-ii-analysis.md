---
id: alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis
kind: algorithm
title: Factorization witnesses for Möbius Type I/II reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - thm-green-tao-quantitative-nil-orbit-factorization
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Theorem 1.19, printed pp. 476–477
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Section 2 factorization application, printed pp. 545–547
---

## Definition

Let $m,d\geq0$, $M_0,N\geq1$, and $A>0$. Let $G/\Gamma$ be an
$m$-dimensional nilmanifold with a degree-$d$ filtration $G_\bullet$, let
$X$ be an $M_0$-rational adapted Mal’cev basis, and let
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$. The
**factorization-witness procedure** outputs a tuple
$(M,G',X',\varepsilon,g',\gamma)$ satisfying the following conditions:
$M$ is an integer with $M_0\leq M\leq C M_0^c$, where $C,c>0$ depend only
on $A,m,d$; $G'\leq G$ is a rational subgroup and
$\Gamma'=G'\cap\Gamma$; $X'$ is an adapted Mal’cev basis for
$G'/\Gamma'$ whose vectors have rational $X$-coordinates of height at most
$M$; $\varepsilon,g',\gamma\in\operatorname{poly}(\mathbb Z,G_\bullet)$;
$g(n)=\varepsilon(n)g'(n)\gamma(n)$ for every $n\in\mathbb Z$;
$\varepsilon$ is $(M,N)$-smooth on $[N]$; $g'(n)\in G'$ and
$(g'(n)\Gamma')_{n\in[N]}$ is totally $M^{-A}$-equidistributed using the
metric from $X'$; and $\gamma$ is $M$-rational with a right-coset period
at most $M$.

Execute the following instructions for these input data.

1. Call the quantitative nil-orbit factorization supplier with
   $(G/\Gamma,G_\bullet,X,g,M_0,N,A)$, using its one-variable
   dimension-decreasing descent (proof steps 2.1–5.1). Initialize the
   descent with $H_0=G$, $f_0=g$ and $E_0=R_0=e$ as prescribed there;
   use its prescribed complexity bounds and equidistribution thresholds.
2. At a failed equidistribution test, use the supplier's proper-subgroup
   factorization and update the accumulated factors in its specified order.
   At the first successful test, retain the stopping subgroup, adapted
   basis and accumulated factors. The supplier's descent has at most $m$
   proper-subgroup transitions.
3. Read off $M,G',X',\varepsilon,g',\gamma$ from the supplier's
   stopping-stage output and return that tuple, with $\Gamma'=G'\cap\Gamma$.

The call permits any witnesses supplied by that descent; its output
relation is the factorization-witness specification above. This is a
mathematical procedure with a supplier subroutine, without a claim that
the equidistribution tests or witness choices are effectively decidable
from arbitrary real input data. Only one call for the fixed input is
needed; no simultaneous choice of witnesses over all inputs is required.

## Definition references

[Filtered nilpotent groups and nilmanifolds](def-filtered-nilpotent-lie-group-and-nilmanifold)

[Mal’cev bases and rationality](def-malcev-basis-and-rationality)

[Polynomial sequences](def-polynomial-sequence-on-a-filtered-group)

[Smooth and rational polynomial nilsequences](def-smooth-and-rational-polynomial-nilsequences)

[Total equidistribution](def-total-equidistribution-of-a-nil-orbit)

[Green and Tao, Theorem 1.19](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

[F1] The one-variable factorization and its dimension-decreasing descent, including the stopping-stage output bounds, are supplied by [[thm-green-tao-quantitative-nil-orbit-factorization]].
