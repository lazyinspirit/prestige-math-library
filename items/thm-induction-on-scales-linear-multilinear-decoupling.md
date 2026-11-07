---
id: thm-induction-on-scales-linear-multilinear-decoupling
kind: theorem
title: Induction-on-Scales Comparison of Linear and Multilinear Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
- def-countable-choice
- def-l2-decoupling-constant-for-moment-curve
- thm-complex-holder-minkowski-and-the-quotient-norm
- lem-parabolic-rescaling-for-moment-curve-decoupling
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§7, Theorem 7.6, pp. 652–653: linear decoupling is bounded by a small
      power loss times a supremum of multilinear constants.'
---

## Statement

Assume Countable Choice. Let $n\ge2$, $p\ge2$, $E\ge100n$, and let $K\ge2n!$ be an integer as in the definition of the multilinear constant. There are constants $C_{n,p,K,E}<\infty$ and $\varepsilon_{p,n}(K)\ge0$ such that $\varepsilon_{p,n}(K)\to0$ as $K\to\infty$ and, for every $0<\delta\le1$,
$$D_{p,n}(\delta,E)\le C_{n,p,K,E}\,\delta^{-\varepsilon_{p,n}(K)}\sup_{\delta\le\delta'\le1}M_{p,n}(\delta',K,E).$$

## Statement references

[Linear and multilinear decoupling constants]([[def-l2-decoupling-constant-for-moment-curve]])

[BDG, Theorem 7.6](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)
