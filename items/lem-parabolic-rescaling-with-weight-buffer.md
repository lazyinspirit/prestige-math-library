---
dependency_level: 6
id: lem-parabolic-rescaling-with-weight-buffer
kind: lemma
title: Parabolic rescaling with a polynomial-weight buffer
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- def-l2-decoupling-constant-for-moment-curve
- lem-compatible-interval-meshes-for-moment-curve-decoupling
- thm-complex-holder-minkowski-and-the-quotient-norm
- thm-linear-change-of-variables-for-lebesgue-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
---

## Statement

Assume Countable Choice. Let $n\ge2$, $p\ge2$, $E\ge100n$, $E'>E+n$, $0<\delta\le\sigma\le1$, and let $I\subset[0,1]$ have length $\sigma$. On every ball $B$ of radius $R\ge\delta^{-n}$,
$$ \|E_I^{(n)}g\|_{L^p(w_{B,E})}\le C_{n,p,E,E'}D_{p,n}(\delta/\sigma,E')\left(\sum_{J\in\mathcal P_\delta(I)}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/2}. $$
The partition is canonical, starting at the left endpoint of $I$. The constant is independent of $\delta,\sigma,R,I,g$.

## Statement references

[Source proof development](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] The actual decoupling constants, canonical meshes, larger-ball extension, complex Holder/Minkowski and linear change of variables are the dependencies. All analytic operations inherit Countable Choice. The remaining explicit interfaces are [[def-countable-choice]] [[def-l2-decoupling-constant-for-moment-curve]] [[lem-compatible-interval-meshes-for-moment-curve-decoupling]] [[thm-complex-holder-minkowski-and-the-quotient-norm]] [[thm-linear-change-of-variables-for-lebesgue-measure]].

## Proof

1.1 Write $I=[a,a+\sigma]$ and set $t=a+\sigma s$. The binomial formula gives $\Gamma(a+\sigma s)=\Gamma(a)+T\Gamma(s)$ with $T$ triangular, diagonal $\sigma,\ldots,\sigma^n$, and $\|T^{-1}\|\le C_n\sigma^{-n}$ for $a\in[0,1]$. Thus $E_Ig(x)=\sigma e(x\cdot\Gamma(a))E\widetilde g(T^*x)$, with $\widetilde g(s)=g(a+\sigma s)$. The target mesh has step $\delta/\sigma$ and transforms exactly to $\mathcal P_\delta(I)$, including its final short interval. [given, F1, construct, algebra]

2.1 Put $r=(\delta/\sigma)^{-n}$, $y=T^*x$ and $v(y)=(1+|(T^*)^{-1}y-c_B|/R)^{-E}$. Then $r\|(T^*)^{-1}\|/R\le C_n$. Take an $r$-scale lattice cover with a fixed dimensional enlargement of its balls, large enough to cover space. Nearest-center comparison gives $v(y)\le C\sum_cv(c)\mathbf1_{B(c,C_nr)}(y)$. For the reverse weighted bound, the triangle inequality gives $v(c)\le v(y)(1+C_n|y-c|/r)^E$. Therefore lattice shell counting yields
$$ \sum_cv(c)w_{B(c,C_nr),E'}(y)\le C v(y)\sum_c(1+|y-c|/r)^{-(E'-E)}\le C'v(y), $$
since $E'-E>n$. This is uniform in the anisotropy of $T$, and is why the weight buffer is explicit. [given, F1, construct, algebra]

3.1 Apply the defining decoupling inequality at step $\delta/\sigma$ and exponent $E'$ on each lattice ball of radius $C_nr$, using its larger-ball extension. Raise to $p$, multiply by $v(c)$, sum and use Minkowski at $p/2\ge1$. The two comparisons above bound the left from below by $\|E\widetilde g\|_{L^p(v)}$ and bound each right piece by its $L^p(v)$ norm. Increasing finite lattice sums and nonnegative Tonelli justify the infinite cover. Hence $\|E\widetilde g\|_{L^p(v)}\le C D(\delta/\sigma,E')(\sum_H\|E_H\widetilde g\|_{L^p(v)}^2)^{1/2}$. [given, F1, construct, algebra]

4.1 Change back by $y=T^*x$. The common factor $\sigma|\det T|^{-1/p}$ appears on both sides and cancels, and the mesh correspondence was exact. This proves the assertion for every allowed real scale. The faster input weight is an actual hypothesis of this lemma; this proof does not assert the unbuffered same-$E$ comparison. [given, F1, construct, algebra] ∎

