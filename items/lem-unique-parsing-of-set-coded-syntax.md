---
id: lem-unique-parsing-of-set-coded-syntax
kind: lemma
title: "Unique parsing of finite syntax"
status: published
origin: pipeline
deps: ["def-set-coded-terms-and-formulas", "thm-strong-induction"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1B.4\u20131B.5 and x1.1\u2013x1.2, pp.6,48."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

Every term and every formula in the delimited coding has exactly one outer constructor, with uniquely determined symbol fields and immediate subexpressions. Each immediate subexpression is shorter than its parent.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] [[def-set-coded-terms-and-formulas]] defines every constructor by an
explicit concatenation map $\operatorname{enc}$: outer parentheses and
balance-one commas delimit token fields and complete child words. Terms and
formulas are the least subsets of $W_L$ closed under those maps.

[F2] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]])

## Proof

1.1 Induct on construction stages to verify that every expression starts with an opening parenthesis, ends with its matching closing parenthesis, and has positive parenthesis balance at every nonempty proper prefix. A parent contributes one to the balance while its child words each have nonnegative balance and total balance zero; leaf interiors have no parentheses. Thus these assertions hold for leaves and are preserved by all constructors. [F1]

2.1 For a word known to be an expression, the second token is its unique constructor tag. Scan from its opening parenthesis: commas at balance one separate exactly its outer fields, because child interiors have balance at least two. The first return to balance zero is the end of the expression. These boundaries depend only on the word, not on a proposed construction. [step 1.1, F1]

3.1 The tag prescribes the sorts of the fields, and any function or relation symbol prescribes their number through its arity. The scan therefore recovers every child word uniquely. Existence follows from membership in the constructor closure. Every child omits at least the outer opening, tag and closing tokens, so is shorter; strong induction on length also recovers all descendant parses. [step 2.1, F2] ∎
