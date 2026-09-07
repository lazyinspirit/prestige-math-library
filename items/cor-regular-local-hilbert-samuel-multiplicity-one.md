---
id: "cor-regular-local-hilbert-samuel-multiplicity-one"
kind: "corollary"
title: "regular local hilbert samuel multiplicity one"
deps: ["thm-associated-graded-ring-of-a-regular-local-ring", "def-hilbert-samuel-multiplicity"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.106.1, monomial-count consequence"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ and every integer $n\ge0$, $\ell_R(R/\mathfrak m^{n+1})=\binom{n+d}{d}$. Consequently $e_{\mathfrak m}(R)=1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-associated-graded-ring-of-a-regular-local-ring]]: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\ldots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$. Conversely, if the associated graded ring of a nonzero Noetherian local ring is isomorphic as a graded $k$-algebra to $k[X_1,\ldots,X_d]$ with standard grading, then $R$ is regular of dimension $d$.

[F2] [[def-hilbert-samuel-multiplicity]]: Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite $R$-module, and let $I$ be an ideal of definition for $M$. If $M=0$, define $$ e_I(M):=0. $$ If $M\neq0$, let $P_{I,M}$ be the eventual Hilbert-Samuel polynomial from thm-existence-of-hilbert-samuel-polynomial, and let $d=\deg P_{I,M}$. Because $I\subseteq\mathfrak m$ and $M\neq0$, Nakayama's lemma makes $M/I^{n+1}M$ nonzero for every $n$, so $P_{I,M}$ is not the zero polynomial and $d$ is defined. The **Hilbert-Samuel multiplicity** of $M$ with respect to $I$ is $$ e_I(M):=d!\cdot(\text{leading coefficient of }P_{I,M}). $$ Equivalently, when $M\neq0$ and $$ P_{I,M}(n)=\frac{e_I(M)}{d!}n^d+\text{lower-degree terms}, $$ then $e_I(M)$ is the integer scaling the top term.

## Proof

1.1 The filtration of $R/\mathfrak m^{n+1}$ has factors $\mathfrak m^j/\mathfrak m^{j+1}$ for $0\le j\le n$. The graded polynomial description identifies their total dimension with the number of monomials in $d$ variables of degree at most $n$. Introducing a slack exponent identifies these with $(d+1)$-tuples of nonnegative integers summing to $n$, counted by $\binom{n+d}{d}$. [F1, algebra]

2.1 The leading coefficient is $1/d!$, so multiplying it by $d!$ gives multiplicity one. If $d=0$, the only monomial is $1$, and the constant polynomial has leading coefficient one and $0!=1$. The formula also gives length one at $n=0$. [F2, step 1.1, algebra] ∎
