---
id: "lem-associated-graded-polynomial-surjection"
kind: "lemma"
title: "associated graded polynomial surjection"
deps: ["lem-embedding-dimension-is-minimal-maximal-ideal-generator-number", "def-associated-graded-ring-and-module", "thm-nakayama-lemma"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.106.1, first proof paragraph"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-embedding-dimension-is-minimal-maximal-ideal-generator-number]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

[F2] [[def-associated-graded-ring-and-module]]: Let $R$ be a commutative ring, let $I\subset R$ be an ideal, and let $M$ be an $R$-module. The **associated graded ring** of the $I$-adic filtration is $$ \operatorname{gr}_I(R):=\bigoplus_{n\ge0} I^n/I^{n+1}. $$ Multiplication is induced by multiplication in $R$: $$ (a+I^{m+1})(b+I^{n+1})=ab+I^{m+n+1}. $$ The **associated graded module** is $$ \operatorname{gr}_I(M):=\bigoplus_{n\ge0} I^nM/I^{n+1}M, $$ viewed as a graded $\operatorname{gr}_I(R)$-module by $$ (a+I^{m+1})(x+I^{n+1}M)=ax+I^{m+n+1}M. $$

[F3] [[thm-nakayama-lemma]]: If $I$ is contained in the Jacobson radical of a commutative ring and $M$ is finite with $IM=M$, then $M=0$.

## Proof

1.1 The degree-zero part is $R/\mathfrak m=k$. On $\mathfrak m^n/\mathfrak m^{n+1}$ the action of $R$ factors through $k$, since $\mathfrak m\mathfrak m^n\subseteq\mathfrak m^{n+1}$. The graded multiplication therefore defines the displayed polynomial map. Altering a representative by $\mathfrak m^{n+1}$ changes a product of degrees $n,j$ by $\mathfrak m^{n+j+1}$, so multiplication and the map are well-defined. [F2, given, algebra]

2.1 Put $N=(x_1,\ldots,x_e)\subseteq\mathfrak m$. The basis hypothesis says $\mathfrak m=N+\mathfrak m^2$, so the finite module $\mathfrak m/N$ satisfies $\mathfrak m(\mathfrak m/N)=\mathfrak m/N$. Nakayama gives $\mathfrak m=N$. Expanding products now shows that degree-$n$ monomials in the $x_i$ generate $\mathfrak m^n$ over $R$; reducing coefficients modulo $\mathfrak m$ spans the degree-$n$ quotient over $k$. Thus every graded component is in the image. When $e=0$, the same Nakayama argument gives $\mathfrak m=0$ and the map is the identity on $k$. [F1, F3, step 1.1, algebra] ∎
