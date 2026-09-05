---
id: rem-gibbs-phenomenon
kind: remark
title: "Gibbs phenomenon"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-fejer-kernel-is-a-positive-approximate-identity, lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity, thm-gibbs-overshoot-at-a-piecewise-c-one-jump]
verification:
  audited: 2026-09-05
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

Dirichlet partial sums are controlled by the oscillatory kernel $D_N$, whose
sign changes create the persistent overshoot quantified in
[[thm-gibbs-overshoot-at-a-piecewise-c-one-jump]]. By contrast,
[[lem-fejer-kernel-is-a-positive-approximate-identity]] and
[[lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity]] show
that Fejer and Poisson kernels are positive and have total mass one. Their
summation methods therefore average across a jump instead of amplifying it, and
the preceding convergence theorems return the midpoint value rather than a
fixed overshoot.
