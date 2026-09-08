---
id: thm-elementary-ordinal-chain-union
kind: theorem
title: "Unions of nonempty elementary chains"
status: draft
origin: pipeline
deps: [def-elementary-set-structure-embedding, thm-structural-recursion-on-set-coded-syntax, thm-set-structure-satisfaction-recursion, def-term-denotation-in-a-set-structure, lem-satisfaction-coincidence]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Theorem 4 and complete proof, printed pp.16–18; ordinal-index extension described before the theorem."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

Let $\lambda>0$ be a set ordinal and $(\mathcal M_\alpha)_{\alpha<\lambda}$ an elementary chain of nonempty structures for one finite-arity set signature $L$. Its union is a set $L$-structure $\mathcal U$, and $\mathcal M_\alpha\prec\mathcal U$ for every $\alpha<\lambda$. No continuity hypothesis on the chain is required.

## Facts & Assumptions

**Given:** Work in ZF. Earlier structures are elementary substructures of later ones.

[F1] Substructures contain constants and restrict functions and relations; elementary substructures agree on every formula with parameters in the smaller carrier. ([[def-elementary-set-structure-embedding]])

[F2] Constructor induction applies to terms and formulas. ([[thm-structural-recursion-on-set-coded-syntax]])

[F3] Satisfaction has the atomic, negation, conjunction and existential-assignment clauses. ([[thm-set-structure-satisfaction-recursion]])

[F4] Term evaluation follows the variable, constant and function clauses. ([[def-term-denotation-in-a-set-structure]])

[F5] Truth depends only on the finitely many free variables; tuples can be completed to assignments using a fixed carrier element. ([[lem-satisfaction-coincidence]])

## Proof

1.1 Put $U=\bigcup_{\alpha<\lambda}M_\alpha$. This is a set and is nonempty because it contains $M_0$. A finite tuple in $U$ belongs to one stage: take the maximum of the least membership indices of its entries; for the empty tuple use stage0. Interpret constants by their common value, functions by the unions of their graphs, and relations by their unions. Any two stages are comparable and the larger restricts to the smaller, so a function has one consistent value on each tuple and its graph is total on $U^r$. Likewise the union relation restricts to the relation at each stage: a tuple from $M_\alpha$ that enters the relation at some other stage has the same truth in their larger common stage and hence in $M_\alpha$. Constants are treated separately; function and relation symbols have positive arity. Therefore $\mathcal U$ is an $L$-structure and each $\mathcal M_\alpha$ is its substructure. [F1]

1.2 Induct on each formula simultaneously for every stage and every tuple in that stage. Equality of truth values passes to negation because negation reverses that value, and to conjunction because it is true exactly when its two constituents are true. Restrict tuples to the free variables of each constituent. [F2, F3, F5]

2.1 For any term and parameter tuple in $M_\alpha$, variable values coincide, constant values coincide, and equal argument values give equal function outputs by restriction from step 1.1. Term induction yields equality of the term values in $\mathcal M_\alpha$ and $\mathcal U$. Consequently both equality and relation atoms have identical truth values in the two structures. [F2, F3, F4, F5, step 1.1]

2.2 For $\exists x\psi$ and a tuple from $M_\alpha$, a witness $b\in M_\alpha$ gives truth of the matrix in $\mathcal U$ by the matrix induction hypothesis, hence gives the existential statement there. Conversely, a witness $b\in U$ lies in some $M_\beta$. Set $\gamma=\max(\alpha,\beta)<\lambda$. The parameters and $b$ lie in $M_\gamma$, so the matrix induction hypothesis transfers the matrix from $\mathcal U$ to $\mathcal M_\gamma$. Thus $\mathcal M_\gamma$ satisfies the existential instance. Elementarity $\mathcal M_\alpha\prec\mathcal M_\gamma$ transfers this assertion back to $\mathcal M_\alpha$; if $\gamma=\alpha$, it is already the desired assertion. This uses only elementarity between given stages. [F1, F3, F5, step 1.1]

3.1 The atomic, Boolean and existential cases exhaust the primitive syntax. Thus each formula has identical truth in a stage and in the union, on every tuple from that stage, so each stage is elementary in the union. If $\lambda=1$, the union is $\mathcal M_0$; more generally if $\lambda=\delta+1$, the union is $\mathcal M_\delta$. Limit ordinals require no last stage and were covered by the finite maximum in step 2.2. [F1, F2, step 2.1, step 1.2, step 2.2] ∎
