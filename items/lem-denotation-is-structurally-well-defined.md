---
id: lem-denotation-is-structurally-well-defined
kind: lemma
title: "Regular-expression denotation is structurally well-defined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-expression-syntax, def-regular-expression-denotation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

For every regular expression $R$ over an alphabet $\Sigma$, there exists a
unique language $\mathcal L(R)\subseteq\Sigma^*$ satisfying the recursive
clauses of [[def-regular-expression-denotation]].

## Facts & Assumptions

**Given:** A regular expression $R\in\operatorname{Reg}(\Sigma)$.

[L1] By [[def-regular-expression-syntax]], every regular expression is obtained from the base symbols $\varnothing,\varepsilon,a$ by finitely many applications of union, concatenation, and star.

[L2] By [[def-regular-expression-denotation]], the intended denotation is fixed on the three base symbols and, for a composite expression, is obtained from the denotations of its immediate subexpressions by one of the operations $L\cup K$, $LK$, or $L^*$.

## Proof

**Proof technique:** direct.

1.1 By [L1], every regular expression has a finite construction tree, so there is a well-founded induction on the number of constructor occurrences in that tree. [L1, given]

2.1 In the base cases $R=\varnothing$, $R=\varepsilon$, and $R=a$, the language is uniquely fixed by [L2]. If $R$ is composite, then its outermost constructor is uniquely one of $+$, concatenation, or $^*$ by [L1]. The induction hypothesis gives unique denotations to the immediate subexpressions, and then [L2] applies one fixed language operation to those already determined languages. [L1, L2, step 1.1, induction]

3.1 Therefore exactly one language $\mathcal L(R)$ satisfies the recursive clauses for the given expression $R$. [step 2.1] ∎
