---
id: thm-structural-recursion-on-set-coded-syntax
kind: theorem
title: "Structural induction and recursion on syntax"
status: published
origin: pipeline
deps: ["lem-unique-parsing-of-set-coded-syntax", "thm-recursion", "thm-strong-induction"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 Appendix app3\u2013app5, pp.2\u20133."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

Constructor induction is valid for the term and formula sets: a property true of leaves and preserved by each licensed constructor holds of every expression. For a specified set $A$, supplied leaf values in $A$, and supplied operations into $A$ for all constructors on the appropriate finite powers of $A$, there is a unique evaluation $E:\operatorname{Term}_L\cup\operatorname{Form}_L\to A$ obeying those rules. The construction is uniform in the supplied parameters. Operations may also depend on the constructor's symbol fields.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Every term and every formula in the delimited coding has exactly one outer constructor, with uniquely determined symbol fields and immediate subexpressions. Each immediate subexpression is shorter than its parent. ([[lem-unique-parsing-of-set-coded-syntax]])

[F2] Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$. ([[thm-recursion]])

[F3] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]])

## Proof

1.1 Immediate subexpressions are uniquely determined and shorter. Strong induction on word length therefore proves constructor induction, including the vacuous shorter-expression hypothesis at the first leaves. [F1, F3]

1.2 Let $D$ be the expression set and use the state set $B=\omega\times\mathcal P(D\times A)$. Start with $(0,\varnothing)$. For a state $(n,h)$ whose second component is the correct evaluation of expressions of length at most $n$, extend $h$ to all expressions of length $n+1$ using the prescribed operations and shorter child values. Leaves use their supplied values. On any other state set the successor state to $(n+1,\varnothing)$, making the rule a total set function $B\to B$. Parsing gives a unique value at every newly added expression. [F1, construct]

2.1 Natural recursion in $B$ gives the state sequence. Induction on $n$ shows only correct states are reached and their graphs extend one another. Their union is a set function with domain $D$ obeying the rules. Any other evaluation agrees on leaves and then on a constructor whenever it agrees on its children, so step 1.1 proves uniqueness. The state definition uses only the given parameters, proving uniformity. [F2, step 1.1, step 1.2] ∎
