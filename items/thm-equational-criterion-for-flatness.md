---
id: thm-equational-criterion-for-flatness
kind: theorem
title: "The equational criterion characterizes flat modules by lifting finite relations on generators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, thm-flatness-criteria-by-injections-and-ideals]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Theorem (9.18)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Section 10.39: Flat modules and flat ring maps"
      url: "https://stacks.math.columbia.edu/tag/00H9"
---

## Statement

Let $R$ be a commutative ring and let $M$ be an $R$-module. Then $M$ is flat if
and only if the following condition holds:

Whenever $x_1,\ldots,x_n\in M$ and $a_1,\ldots,a_n\in R$ satisfy
$$
\sum_{i=1}^n a_ix_i=0,
$$
there exist elements $y_1,\ldots,y_m\in M$ and coefficients $b_{ij}\in R$ such
that
$$
x_i=\sum_{j=1}^m b_{ij}y_j\quad\text{for every }i,
$$
and
$$
\sum_{i=1}^n a_ib_{ij}=0\quad\text{for every }j.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an $R$-module $M$.

[L1] Flatness means exactness of tensoring ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Tensor products commute with finite direct sums and the regular module is a tensor unit, so $$ R^n\otimes_R M\cong M^n $$ canonically ([[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[L3] Flatness is equivalent to injectivity of $I\otimes_R M\to M$ for every finitely generated ideal $I\subseteq R$ ([[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** direct.


1.1 Assume $M$ is flat, and let $I=(a_1,\ldots,a_n)\subseteq R$. The surjection $\pi:R^n\to I$ sending $e_i$ to $a_i$ has kernel $K$. Tensoring the exact sequence $$ K\longrightarrow R^n \xrightarrow{\pi} I\longrightarrow 0 $$ with $M$ remains exact by [L1]. [L1, given, algebra]

1.2 Conversely, assume the stated relation-lifting property. To prove flatness it is enough by [L3] to show that for every finitely generated ideal $I=(a_1,\ldots,a_n)$, the multiplication map $I\otimes_R M\to M$ is injective. Take an element $\sum_{i=1}^n a_i\otimes x_i$ in its kernel, so $\sum_i a_ix_i=0$. By the relation-lifting property, $x_i=\sum_j b_{ij}y_j$ and $\sum_i a_ib_{ij}=0$ for every $j$. Then $$ \sum_i a_i\otimes x_i =\sum_j \left(\sum_i a_ib_{ij}\right)\otimes y_j =0 $$ in $I\otimes_R M$. Hence the map is injective. [L3, given, algebra]

1.3 The ideal-injection criterion [L3] now shows that $M$ is flat. [L3]


2.1 The relation $\sum_{i=1}^n a_ix_i=0$ says exactly that the tensor $\eta=\sum_i a_i\otimes x_i\in I\otimes_R M$ maps to $0$ under the multiplication map $I\otimes_R M\to M$. By [L3], that map is injective, so $\eta=0$. Therefore the tensor $$ \widetilde\eta:=\sum_i e_i\otimes x_i\in R^n\otimes_R M $$ lies in the image of $K\otimes_R M\to R^n\otimes_R M$ from step 1.1. [L3, step 1.1, algebra]

3.1 Write a preimage of $\widetilde\eta$ as a finite sum $\sum_{j=1}^m k_j\otimes y_j$ with $k_j\in K$ and $y_j\in M$. Under the identification $R^n\otimes_R M\cong M^n$ from [L2], if $k_j=(b_{1j},\ldots,b_{nj})$, then comparing coordinates gives $$ x_i=\sum_{j=1}^m b_{ij}y_j\qquad\text{for every }i. $$ Since each $k_j$ lies in $\ker\pi$, one also has $$ \sum_{i=1}^n a_ib_{ij}=0\qquad\text{for every }j. $$ This is the required decomposition. [L2, step 2.1, algebra]


4.1 Therefore the equational criterion is equivalent to flatness. [algebra] ∎
