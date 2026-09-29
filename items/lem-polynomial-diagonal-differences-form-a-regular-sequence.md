---
id: lem-polynomial-diagonal-differences-form-a-regular-sequence
kind: lemma
title: Polynomial diagonal differences form a regular sequence
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, def-regular-sequence-on-a-module, thm-coproduct-property-of-tensor-products-of-commutative-algebras, thm-universal-property-of-a-polynomial-ring-on-a-family]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For $R=k[x_1,\ldots,x_n]$ over a field $k$, write
$R^e\cong k[x_1,\ldots,x_n,y_1,\ldots,y_n]$ and
$u_i=x_i-y_i$. The ordered sequence $(u_1,\ldots,u_n)$ is regular on the
$R^e$-module $R^e$, and multiplication induces
$R^e/(u_1,\ldots,u_n)\cong R$. This includes $n=0$.

## Facts & Assumptions

**Given:** A field $k$, $R=k[x_1,\ldots,x_n]$, the two canonical copies of $R$
in $R^e$, and the ordered differences $u_i$.

[F1] The diagonal construction sets $u_i=x_i\otimes1-1\otimes x_i$ and
identifies $R^e=R\otimes_kR$ ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F2] A sequence is regular on a module when every successive quotient is
nonzero and the next multiplication map is injective, and the final quotient
is nonzero ([[def-regular-sequence-on-a-module]]).

[F3] Tensor products of commutative $k$-algebras satisfy the coproduct mapping
property ([[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]).

[F4] A polynomial ring has the unique evaluation homomorphism for any assigned
family of generator values ([[thm-universal-property-of-a-polynomial-ring-on-a-family]]).

## Proof

**Proof technique:** direct.

1.1 Put $S=k[X_1,\ldots,X_n,Y_1,\ldots,Y_n]$. By [F4] the assignments $X_i\mapsto x_i\otimes1$ and $Y_i\mapsto1\otimes x_i$ define a $k$-algebra map $S\to R\otimes_kR$. By [F3] the two polynomial maps from the copies of $R$ into $S$ induce a map $R\otimes_kR\to S$. The composites fix every polynomial generator, so these maps are inverse; [F1] identifies $u_i$ with $X_i-Y_i$. [F1, F3, F4, given, algebra]

2.1 For $1\leq i\leq n$, substitution $Y_r\mapsto X_r$ for $r<i$ gives $S/(X_1-Y_1,\ldots,X_{i-1}-Y_{i-1})\cong k[X_1,\ldots,X_n,Y_i,\ldots,Y_n]$: the inverse includes the displayed remaining variables, and both composites fix their generators. This quotient is a nonzero polynomial ring over $k$. [step 1.1, F4, given, algebra]

2.2 Substituting every $Y_r\mapsto X_r$ gives $S/(X_1-Y_1,\ldots,X_n-Y_n)\cong k[X_1,\ldots,X_n]$ by the same inverse-on-generators check. Under [F1] this is the multiplication quotient $R^e/(u_1,\ldots,u_n)\cong R$, which is nonzero; for $n=0$ both rings are $k$ and the map is the identity. [step 1.1, F1, F4, given, algebra]

3.1 In the quotient of step 2.1, write $C_i=k[X_1,\ldots,X_{i-1},X_{i+1},\ldots,X_n,Y_i,\ldots,Y_n]$, so that it is $C_i[X_i]$ and $Y_i\in C_i$. If $0\ne f\in C_i[X_i]$ has degree $d$ and leading coefficient $c\ne0$, then $(X_i-Y_i)f$ has degree $d+1$ with the same nonzero leading coefficient $c$. Thus multiplication by $u_i$ is injective on each successive quotient. [step 2.1, given, algebra]

4.1 Steps 2.1 and 2.2 give every required nonzero successive quotient and the nonzero final quotient; step 3.1 gives injectivity at each position. By [F2] this is precisely regularity on $R^e$. When $n=0$, there are no injectivity conditions and the final quotient $k$ is nonzero, so the empty sequence is regular as well. [step 2.1, step 2.2, step 3.1, F2, given] ∎
