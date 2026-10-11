---
id: thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis
kind: theorem
title: Existence and uniqueness of the Kazhdan–Lusztig basis
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties, cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants]
dependency_level: 14
justified_by: []
aliases: []
proof_strategy: direct
proof_scope: "Every clause is proved from the local elementary triangular-bar construction and the local Soergel filtration-multiplicity positivity theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — Theorem 5.2, Proposition 5.4 and §5.6 (printed pp. 27–30): bar-invariant triangular basis, coefficient degree/parity and inverse-index symmetry; the complete argument was read. The split-parameter convention is translated to this page by inverting Lusztig's parameter."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§5.1–5.6, printed pp. 27–30; Theorem 5.2 and its full construction and uniqueness proof, Proposition 5.4, and §5.6 were read in full."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — Corollary 1.2(1) (printed p. 5): coefficientwise positivity; §3.2 and Remark 3.2 (printed pp. 15–16): the Hecke normalization and characterization of the Kazhdan–Lusztig basis."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "Corollary 1.2(1), printed p. 5, and §3.2 including Remark 3.2, printed pp. 15–16, read in full; positivity is now supplied by the locally proved Soergel character/filtration argument."
---

## Statement

For each $w\in S_n$ there is a unique element $\underline H_w\in H_v(n)$ with (i) $\overline{\underline H_w}=\underline H_w$ and (ii) $\underline H_w\in H_w+\sum_{y<w}v\mathbb Z[v]\,H_y$ (the sum over the lower Bruhat ideal of $w$). The elements $\{\underline H_w\}_{w\in S_n}$ form an $A$-basis of $H_v(n)$, and writing $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ one has $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, $p_{y,w}\in v\mathbb Z[v]$ for $y<w$, the bar-duality $p_{x,w}=\sum_{y}r_{x,y}\,\overline{p_{y,w}}$ (matrix form $P=R\bar P$), and the symmetry $p_{y^{-1},w^{-1}}=p_{y,w}$. Moreover for $y<w$, with $d=\ell(w)-\ell(y)$: $p_{y,w}=v^{d}+\text{terms of strictly smaller degree}$ and $p_{y,w}\in v^{d}\,\mathbb Z[v^{-2}]$; in particular every $\underline H_w$ has integer nonnegative coefficients in the standard basis with $p_{y,w}$ of fixed parity $d\bmod 2$.

## Facts & Assumptions

**Given:** $n\ge1$, the normalized Hecke algebra $H_v(n)$, its standard basis and bar involution.

[F1] The unique bar-invariant triangular basis has the locally proved existence, uniqueness, basis, support, bar-duality, degree, leading-term, parity and inverse-index symmetry clauses of [[lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties]].

[F2] The same uniquely normalized triangular basis has nonnegative standard-basis coefficients by the local Soergel character and filtration-multiplicity proof of [[cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants]]. Its classical rescaling preserves every integer coefficient.

## Proof

**Proof technique:** combine the local elementary basis construction with the local multiplicity proof of positivity.

1.1 Apply [F1] to the given algebra. It constructs the unique $\underline H_w$ with the asserted bar-invariance and triangularity, proves that these elements form an $A$-basis, and proves all support, coefficient, bar-duality, symmetry, leading-term and parity clauses in the Statement. Its construction does not assume coefficientwise positivity. [F1, given]

2.1 The local character theorem used by [F2] identifies the normalized indecomposable Soergel character with these same unique triangular elements; their standard-basis coefficients are the actual nonnegative integer graded filtration multiplicities. Therefore $p_{y,w}\in\mathbb Z_{\ge0}[v]$ for $y\le w$, while the unsupported coefficients remain zero by step 1.1. The diagonal coefficient is one. Together with the degree and parity clauses of step 1.1 this proves the full Statement, including coefficientwise positivity, without an original-source fallback. [F2, step 1.1] ∎

## Remarks

The elementary construction precedes the local Soergel induction. Its trace, multiplication and character consumers use the elementary supplier directly, so the local positivity theorem is a later consequence and there is no circular positivity input.
