---
id: lem-mobius-factorization-progression-reduction
kind: lemma
title: Progression reduction for a factored nil-orbit
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-malcev-basis-and-rationality
  - alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis
  - def-smooth-and-rational-polynomial-nilsequences
  - def-total-equidistribution-of-a-nil-orbit
  - def-polynomial-sequence-on-a-filtered-group
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Section 2, printed pp. 545–547
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Theorem 1.19 and Appendix A.4–A.6, A.9, A.13–A.17
---

## Statement

Let $N\geq2$, let $G/\Gamma$ be an $m$-dimensional nilmanifold with a
degree-$d$ filtration and an $M$-rational adapted Mal’cev basis $X$, and
suppose $g=\varepsilon g'\gamma$ is a factorization witness from the
factorization-witness specification, with $M\geq\log(2N)$. Let the cosets
$\gamma(n)\Gamma$ have period $q\leq M$. Let $P$ be a nonempty arithmetic
progression of step $q$, contained in $[N]$, and write its terms as
$n=n_0+qt$, choosing $n_0\in P$, where $t$ ranges over a finite interval of integers containing zero. All terms
of $P$ then have one common coset $\gamma_j\Gamma$; choose that
representative with rational coordinates of height at most $M^{C_{m,d}}$.
Put
$$H_j=\gamma_j^{-1}G'\gamma_j,\qquad \Lambda_j=H_j\cap\Gamma,\qquad h_P(t)=\gamma_j^{-1}g'(n_0+qt)\gamma_j.$$
For a Lipschitz function $F:G/\Gamma\to\mathbb C$, define
$$F_P(x\Lambda_j)=F(\varepsilon(n_0)\gamma_jx\Gamma).$$
Then $\Lambda_j$ is a lattice in $H_j$, $F_P$ is well-defined, and
$h_P$ is polynomial for the conjugated filtration on $H_j$. There is an
adapted Mal’cev basis $Y_j$ of complexity at most $M^{C_{m,d}}$ such that
$$\|F_P\|_{\mathrm{Lip},Y_j} \leq M^{C_{m,d}}\|F\|_{\mathrm{Lip},X}.$$
For each $n=n_0+qt\in P$,
$$\left|F(\varepsilon(n)g'(n)\gamma(n)\Gamma) -F_P(h_P(t)\Lambda_j)\right| \leq \frac{Mq|t|}{N}\,\|F\|_{\mathrm{Lip},X}.$$
No equidistribution assertion for $h_P$ is part of this lemma.

## Statement references

[Green and Tao, Section 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Green and Tao, Theorem 1.19 and Appendix A](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

**Given:** The nilmanifold, factorization witness, progression, representative,
and Lipschitz function in the Statement.

[F1] An $(M,N)$-smooth sequence has adjacent group-metric displacement at most
$M/N$; a rational coset sequence of period $q$ is constant on each residue
class modulo $q$. [[def-smooth-and-rational-polynomial-nilsequences]]

[F2] Rational conjugation of a rational subgroup, adapted bases for rational
subgroups, and the comparison of subgroup and ambient quotient metrics have
fixed-power losses in the rationality parameter.
[[lem-quantitative-malcev-polynomial-coordinate-calculus]]
[[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]
[[lem-quantitative-malcev-metric-and-subgroup-comparisons]]

[F3] Integer affine substitution and conjugation preserve polynomiality for
the induced filtration. [[def-polynomial-sequence-on-a-filtered-group]]
[[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]]

[F4] Nilmanifolds, Mal’cev metrics, and total-equidistribution tests use
[[def-filtered-nilpotent-lie-group-and-nilmanifold]],
[[def-malcev-basis-and-rationality]], and
[[def-total-equidistribution-of-a-nil-orbit]].

## Proof

**Given:** The data in the Statement. Constants in fixed-power bounds depend
only on $m,d$.

1.1 Since $\gamma(n)\Gamma=\gamma_j\Gamma$ for $n\in P$, the quotient map $x\Lambda_j\mapsto \gamma_jx\Gamma$ is well-defined: if $x'=x\lambda$ with $\lambda\in\Lambda_j\subseteq\Gamma$, then $\gamma_jx'\Gamma=\gamma_jx\Gamma$. The rationality of $\gamma_j$ and $G'$ makes $H_j$ a rational subgroup; the rational-subgroup basis result in [F2] gives that $\Lambda_j$ is a lattice and supplies an adapted basis $Y_j$ of fixed-power complexity. [F2, given]

2.1 Integer affine substitution makes $t\mapsto g'(n_0+qt)$ polynomial. Conjugation by $\gamma_j^{-1}$ maps the filtration of $G'$ to its conjugate filtration on $H_j$, so [F3] proves the polynomiality of $h_P$. Directly from the definitions, $$F_P(h_P(t)\Lambda_j) =F(\varepsilon(n_0)g'(n_0+qt)\gamma_j\Gamma).$$ [F1, F3, step 1.1, given]

3.1 For $n=n_0+qt$, the adjacent-step estimate in [F1] and the triangle inequality give $$d_X^G(\varepsilon(n),\varepsilon(n_0)) \leq |n-n_0|M/N=q|t|M/N.$$ Right invariance of the group metric preserves this distance after multiplication by $g'(n)\gamma_j$, and the quotient metric is no larger. The Lipschitz inequality for $F$ therefore gives the asserted pointwise error. [F1, step 2.1, algebra]

4.1 The map $x\Lambda_j\mapsto\gamma_jx\Gamma$ is the restriction of the ambient quotient map after left translation by $\gamma_j$. The coordinates of $\gamma_j$ have height at most a fixed power of $M$; the bounded left-translation estimate and the quotient subgroup-metric comparison in [F2] therefore bound its Lipschitz constant by $M^{C_{m,d}}$. Multiplication by $\varepsilon(n_0)$ has the same bound because smoothness gives $d_X^G(\varepsilon(n_0),e)\leq M$. Composition with $F$ proves the stated bound for $F_P$. Steps 1.1–4.1 prove every assertion in the Statement. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎
## Source notes

This lemma isolates the well-defined quotient map, the smooth-factor
replacement, and its Lipschitz cost. Choosing the block origin in $P$
keeps every adjacent smoothness comparison and the frozen value inside
the supplied smoothness interval. The separate transfer of total
equidistribution across rational conjugation and lattice change is proved in
[[lem-mobius-rational-conjugation-preserves-total-equidistribution]].
