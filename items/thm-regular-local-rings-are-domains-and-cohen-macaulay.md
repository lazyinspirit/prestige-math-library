---
id: "thm-regular-local-rings-are-domains-and-cohen-macaulay"
kind: "theorem"
title: "regular local rings are domains and cohen macaulay"
deps: ["lem-regular-local-domain-induction", "lem-regular-local-parameter-is-nonzerodivisor", "lem-regular-local-quotient-by-parameter-is-regular", "def-cohen-macaulay-local-module-and-ring", "def-regular-sequence-on-a-module", "def-depth-with-respect-to-an-ideal", "thm-depth-bounded-by-support-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.106.2–10.106.3"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

[F2] [[lem-regular-local-parameter-is-nonzerodivisor]]: In a positive-dimensional regular local ring, every member of a regular system of parameters is a nonzerodivisor.

[F3] [[lem-regular-local-quotient-by-parameter-is-regular]]: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$.

[F4] [[def-cohen-macaulay-local-module-and-ring]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a nonzero finite $R$-module. The module $M$ is **Cohen--Macaulay** when $$\operatorname{depth}(M)=\dim\operatorname{Supp}_R(M).$$ The zero module is excluded from this local definition. The local ring $R$ is Cohen--Macaulay when it is Cohen--Macaulay as an $R$-module.

[F5] [[def-regular-sequence-on-a-module]]: Let $R$ be a commutative unital ring, let $M$ be an $R$-module, and let $\mathbf x=(x_1,\ldots,x_n)$ be a finite ordered sequence in $R$. The sequence is $M$-regular when $M/(x_1,\ldots,x_{i-1})M\ne0$ and multiplication by $x_i$ is injective on it for every $i$, and $M/(\mathbf x)M\ne0$.

[F6] [[thm-depth-bounded-by-support-dimension]]: For every nonzero finite module $M$ over a Noetherian local ring $R$, $$0\le\operatorname{depth}_R(M)\le\dim\operatorname{Supp}_R(M).$$ The nonzero hypothesis is essential for this formulation: under the adopted convention $\operatorname{depth}_R(0)=+\infty$, whereas the empty support has no nonnegative Krull dimension.

[F7] [[def-depth-with-respect-to-an-ideal]]: For a finite module $M$ with $IM\ne M$, $\operatorname{depth}_I(M)$ is the supremum of the lengths of $M$-regular sequences in $I$; for a local ring depth means depth with respect to its maximal ideal.

## Proof

1.1 The ring is a domain. Successively apply the parameter-quotient lemma: after $c$ quotients the remaining cotangent classes form a basis, and the quotient is regular of dimension $d-c$. This starts with $c=0$ and ends with $R/\mathfrak m=k\ne0$. [F1, F3]

2.1 At each nonterminal stage the next parameter is a nonzerodivisor. All the quotients are nonzero, so the tuple satisfies the definition of a regular sequence. Its length is $d$, and the depth definition therefore gives $\operatorname{depth}R\ge d$; the support-dimension bound gives $\operatorname{depth}R\le d$. Thus the Cohen–Macaulay definition holds. For $d=0$, the empty tuple and the field $R$ give the same conclusion. [F2, F4, F5, F6, F7, step 1.1] ∎
