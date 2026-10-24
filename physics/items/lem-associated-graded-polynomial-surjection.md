---
id: "lem-associated-graded-polynomial-surjection"
kind: "lemma"
title: "associated graded polynomial surjection"
deps: ["def-associated-graded-ring-and-module"]
sources:
  references:
    - title: "10.106.1, first proof paragraph"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F2] [[def-associated-graded-ring-and-module]]: Let $R$ be a commutative ring, let $I\subset R$ be an ideal, and let $M$ be an $R$-module. The **associated graded ring** of the $I$-adic filtration is $$ \operatorname{gr}_I(R):=\bigoplus_{n\ge0} I^n/I^{n+1}. $$ Multiplication is induced by multiplication in $R$: $$ (a+I^{m+1})(b+I^{n+1})=ab+I^{m+n+1}. $$ The **associated graded module** is $$ \operatorname{gr}_I(M):=\bigoplus_{n\ge0} I^nM/I^{n+1}M, $$ viewed as a graded $\operatorname{gr}_I(R)$-module by $$ (a+I^{m+1})(x+I^{n+1}M)=ax+I^{m+n+1}M. $$

## Proof

1.1 The degree-zero part is $R/\mathfrak m=k$. On $\mathfrak m^n/\mathfrak m^{n+1}$ the action of $R$ factors through $k$, since $\mathfrak m\mathfrak m^n\subseteq\mathfrak m^{n+1}$. The graded multiplication therefore defines the displayed polynomial map. Altering a representative by $\mathfrak m^{n+1}$ changes a product of degrees $n,j$ by $\mathfrak m^{n+j+1}$, so multiplication and the map are well-defined. [F2, given, algebra]

2.1 For $n\ge1$, every element of $\mathfrak m^n/\mathfrak m^{n+1}$ is a sum of classes of products $u_1\cdots u_n$ with each $u_j\in\mathfrak m$. In $\mathfrak m/\mathfrak m^2$, express the class of each $u_j$ as a $k$-linear combination of the given basis classes $x_i+\mathfrak m^2$. Replacing one factor $u_j$ by such a combination changes the product only by an element of $\mathfrak m^{n+1}$. Expanding therefore expresses every degree-$n$ class as a $k$-linear combination of monomials in the $x_i+\mathfrak m^2$, all in the image of $\phi$. Degree zero is $k$ by step 1.1. This argument also covers $e=0$: the empty degree-one basis makes every positive-degree quotient zero, so the map $k\to\operatorname{gr}_{\mathfrak m}R$ is surjective. [step 1.1, given, algebra] ∎
