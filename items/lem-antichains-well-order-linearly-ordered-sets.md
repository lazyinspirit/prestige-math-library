---
id: lem-antichains-well-order-linearly-ordered-sets
kind: lemma
title: "Maximal antichains well-order linearly ordered sets"
status: draft
origin: pipeline
deps: ["lem-multiple-choice-produces-maximal-antichains", "thm-hartogs", "thm-transfinite-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 9.1(a), p.134"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF, if every poset has a maximal antichain, every linearly ordered set is well-orderable. Consequently MC implies that $\mathcal P(\alpha)$ is well-orderable for every ordinal $\alpha$.

## Facts & Assumptions

[F1] [[lem-multiple-choice-produces-maximal-antichains]]: MC gives a maximal antichain in every poset.

[F2] [[thm-transfinite-recursion]]: A definable successor rule recurses along a set ordinal.

[F3] [[thm-hartogs]]: The ordinal $h(Q)$ cannot inject into $Q$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For a linearly ordered $(Q,<)$ form the poset of pairs $(U,u)$ with $\varnothing\ne U\subseteq Q$ and $u\in U$, ordered by $(U,u)\le(V,v)$ iff $U=V$ and either $u=v$ or $u<v$. A maximal antichain contains exactly one pair above each $U$: at most one by linearity, at least one because otherwise any $(U,u)$ could be added. Its graph specifies a selector $c(U)\in U$. [given]

2.1 Recursively remove $c$ of the remaining subset of $Q$ until it is empty, using a fixed stop symbol thereafter. If this did not stop before $h(Q)$, the removed points would give an injection of that ordinal into $Q$. Their order of removal therefore well-orders all of $Q$. For $Q=\varnothing$ the empty order suffices. [F2, F3, step 1.1]

3.1 The power set of any ordinal $\alpha$ is linearly ordered by its characteristic functions: at the least element of the symmetric difference compare $0<1$. Transitivity follows because for three functions the first two comparison indices either differ (the earlier decides) or agree (the value order decides). Under MC the antichain hypothesis holds, so the first two steps apply to this linear order. [F1, step 2.1] ∎
