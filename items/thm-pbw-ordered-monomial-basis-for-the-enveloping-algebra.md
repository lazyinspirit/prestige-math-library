---
id: thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
kind: theorem
title: "PBW gives an ordered monomial basis for the enveloping algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $x_1,\dots,x_r$ be an ordered basis of a finite-dimensional complex Lie algebra $\mathfrak g$. Then the monomials

$$x_1^{a_1}x_2^{a_2}\cdots x_r^{a_r} \qquad (a_i\in \mathbb N_0)$$

form a basis of $U(\mathfrak g)$. In particular, multiplication identifies $\operatorname{gr}U(\mathfrak g)$ with the symmetric algebra $S(\mathfrak g)$ on the symbols of the $x_i$.

## Facts & Assumptions

**Given:** A finite ordered basis $x_1,\dots,x_r$ of a complex Lie algebra $\mathfrak g$.

[F1] The defining relation in $U(\mathfrak g)$ is
$x_jx_i=x_ix_j+[x_j,x_i]$ ([[def-universal-enveloping-algebra-as-a-tensor-quotient]]).

## Proof

**Proof technique:** direct.

1.1 Orient [F1] as a rewriting rule whenever $j>i$. Order words first by length and then by their number of inverted index pairs. The swapped term has one fewer inversion and the bracket term has smaller length, so every sequence of reductions terminates in a linear combination of ordered words. Hence the ordered monomials span $U(\mathfrak g)$. [F1, given, algebra]

1.2 Reductions on disjoint adjacent pairs commute. The only overlapping ambiguity occurs in a word $x_kx_jx_i$ with $k>j>i$. Reducing the left pair first and the right pair first gives expressions whose difference is
$$[x_k,[x_j,x_i]]+[x_j,[x_i,x_k]]+[x_i,[x_k,x_j]],$$
which is zero by the Jacobi identity. Thus every overlap is resolvable, and termination from step 1.1 implies that every word has a unique ordered normal form. [F1, step 1.1, algebra]

2.1 If a linear combination of distinct ordered monomials represented zero in the tensor quotient, its unique normal form from step 1.2 would be that same nonzero combination and also the zero normal form, a contradiction. The ordered monomials are therefore linearly independent and hence a basis. [step 1.1, step 1.2]

3.1 In the associated graded algebra the bracket correction in [F1] has one lower tensor degree, so the symbol of an ordered monomial depends only on the corresponding commutative monomial. Step 2.1 shows that these symbols form a basis in each degree. Therefore the natural graded map $S(\mathfrak g)\to\operatorname{gr}U(\mathfrak g)$ is an isomorphism. [F1, step 2.1, algebra] ∎
