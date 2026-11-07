---
id: lem-parabolic-rescaling-for-moment-curve-decoupling
kind: lemma
title: Parabolic Rescaling for Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- def-countable-choice
- def-l2-decoupling-constant-for-moment-curve
- def-moment-curve-extension-operator
- lem-polynomial-weight-localization
- thm-complex-holder-minkowski-and-the-quotient-norm
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §7, Lemma 7.5, pp. 650–651, parabolic rescaling of an arc to the full
      moment curve.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $p\ge2$, $E\ge100n$, $0<\delta\le1$, and $0<\rho\le1$. If $I\subset[0,1]$ is an interval of length $\delta^\rho$ and $B\subset\mathbb R^n$ is a ball of radius $R\ge\delta^{-n}$, then for every $g\in L^1([0,1])$,
$$\|E_I^{(n)}g\|_{L^p(w_{B,E})}\le C_{n,p,E}\,D_{p,n}(\delta^{1-\rho},E)\left(\sum_{\substack{J\subset I\\ |J|=\delta}}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/2},$$
where the sum is over a partition of $I$ into intervals of length $\delta$ (with a final shorter interval if needed), and $C_{n,p,E}$ is independent of $\delta,\rho,R,I,g$.

## Statement references

[Decoupling constants and interval partitions]([[def-l2-decoupling-constant-for-moment-curve]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norm localization]([[lem-polynomial-weight-localization]])

[BDG, Lemma 7.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)
