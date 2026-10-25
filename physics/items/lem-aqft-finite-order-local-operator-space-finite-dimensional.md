---
id: lem-aqft-finite-order-local-operator-space-finite-dimensional
kind: lemma
title: Finite dimensionality of fixed-order local operator spaces
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps: [def-aqft-local-operator-and-dimension]
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics (2004 TASI Lectures)"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Let $J=J_{\bar 0}\oplus J_{\bar 1}$ be a finite-dimensional $\mathbb Z/2$-graded complex vector space with a finite homogeneous basis $z_1,\ldots,z_n$, each generator assigned a rational engineering weight. Form $P=\operatorname{Sym}(J_{\bar 0}^{*})\otimes\Lambda(J_{\bar 1}^{*})$. For finite $q\in\mathbb Z_{\geq0}$ and any $D\in\mathbb Q$, let $P_{q,D}$ be the span of supercommutative monomials of total generator degree at most $q$ and total engineering weight $D$. Then $P_{q,D}$ is finite-dimensional. If a group acts linearly on $J$ preserving parity and the weight grading, its invariant subspace $P_{q,D}^{G}$ is also finite-dimensional.

## Statement references

[Burgess, §§2.2–3](https://arxiv.org/pdf/hep-th/0701053)

[Neubert, §2](https://arxiv.org/pdf/hep-ph/0512222)

## Facts & Assumptions

**Given:** A finite homogeneous basis of $J$, a finite degree bound $q$, a rational target weight $D$, and a linear parity- and weight-preserving group action on $J$.

[F1] [[def-aqft-local-operator-and-dimension]]: for a finite jet representation, the polynomial algebra is $\operatorname{Sym}(J_{\bar 0}^{*})\otimes\Lambda(J_{\bar 1}^{*})$, and the selected operator space has an explicit finite maximum polynomial field degree.

## Proof

1.1 If $n=0$, the polynomial algebra consists only of constants, so its degree-at-most-$q$ subspace has dimension at most one. If $n>0$, every monomial is indexed by an exponent vector $(a_1,\ldots,a_n)$ with $0\leq a_j\leq q$ for each $j$, since $\sum_j a_j\leq q$; hence the full degree-at-most-$q$ algebra is spanned by at most $(q+1)^n$ monomials. The exterior generators only reduce this finite set because their exponents are restricted to $0$ or $1$. [given, F1, algebra]

2.1 The subspace $P_{q,D}$ is spanned by the subset of those finitely many monomials whose assigned weights sum to $D$, so it is finite-dimensional; if no monomial has weight $D$, it is the zero space. The invariant vectors $P_{q,D}^{G}$ form a linear subspace of $P_{q,D}$ because the action preserves parity and weight, and every subspace of a finite-dimensional vector space is finite-dimensional. [given, step 1.1, algebra] ∎

