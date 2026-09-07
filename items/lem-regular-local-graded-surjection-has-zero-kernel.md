---
id: "lem-regular-local-graded-surjection-has-zero-kernel"
kind: "lemma"
title: "regular local graded surjection has zero kernel"
deps: ["lem-associated-graded-polynomial-surjection", "thm-hilbert-samuel-dimension-theorem", "cor-multivariate-polynomial-ring-over-a-domain-is-a-domain"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.106.1 proof; Li Proposition 25.6"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For the graded map $\phi:k[X_1,\ldots,X_e]\twoheadrightarrow\operatorname{gr}_{\mathfrak m}R$ defined by a cotangent basis in a nonzero Noetherian local ring, if $e=\dim R$, then $\ker\phi=0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-associated-graded-polynomial-surjection]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

[F2] [[thm-hilbert-samuel-dimension-theorem]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M\neq0$ be a finite $R$-module, and let $I$ be an ideal of definition for $M$. Then the Hilbert-Samuel polynomial $P_{I,M}$ has degree $$ \deg P_{I,M}=\dim \operatorname{Supp}(M). $$

[F3] [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]: If $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$.

## Proof

1.1 If $e=0$, the map is the identity of $k$. Suppose $e\ge1$. If the homogeneous kernel were nonzero, it would contain a nonzero homogeneous polynomial $f$ of degree $a\ge1$, because the degree-zero map is injective. [F1, given]

2.1 Put $P=k[X_1,\ldots,X_e]$. Since $P$ is a domain, multiplication by $f$ injects $P(-a)$ into $P$. Counting monomials of total degree at most $n$, for $n\ge a$, gives $\sum_{j=0}^n\dim_k(P/(f))_j=\binom{n+e}{e}-\binom{n-a+e}{e}$. This polynomial has degree $e-1$: the terms of degree $e$ cancel. [F3, step 1.1, algebra]

3.1 The surjection $P/(f)\to\operatorname{gr}_{\mathfrak m}R$ bounds $\ell_R(R/\mathfrak m^{n+1})$ by that count, because its filtration factors are precisely the graded pieces. But its eventual Hilbert–Samuel polynomial has degree $\dim R=e$ and positive leading coefficient (it is eventually positive). A polynomial of degree $e$ cannot be bounded by one of degree $e-1$ for all large $n$. Thus no such $f$ exists. [F2, step 2.1, algebra] ∎
