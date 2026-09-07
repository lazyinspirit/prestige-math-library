---
id: thm-countable-choice-gives-countable-subsets
kind: theorem
title: "Countable choice gives countable subsets of infinite sets"
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-dedekind-infinite-iff-countable-subset", "lem-finite-choice", "thm-n-cross-n-countable"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4.1, p.20"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF plus $\mathrm{AC}_\omega$, every infinite set contains a countably infinite subset and is Dedekind-infinite.

## Facts & Assumptions

[F1] [[def-countable-choice]]: Countable choice selects one object from each nonempty set in an omega family.

[F2] [[thm-n-cross-n-countable]]: Omega squared has an explicitly supplied enumeration.

[F3] [[thm-dedekind-infinite-iff-countable-subset]]: An injected omega is equivalent to Dedekind infinitude.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For each positive integer $n$, the set $T_n$ of injective maps $n\to X$ is nonempty: extend a finite tuple by a point outside its finite range, which exists because $X$ is infinite. This finite induction makes no countable choice. Now use countable choice once to select $t_n\in T_n$. [F1]

2.1 The set $U=\bigcup_{n>0}\operatorname{ran}(t_n)$ is covered by the coordinate values $t_n(i)$ with $i<n$. Enumerate those pairs by the fixed enumeration of omega squared, discarding pairs outside the domain. This produces a sequence onto $U$. Since $U$ contains $n$ distinct points for every $n$, it is infinite. Retain the first occurrence of each new value; the retained indices form an infinite subset of omega and their increasing enumeration gives a bijection $\omega\to U$. [F2, step 1.1]

3.1 Composing with the inclusion $U\subseteq X$ yields an injected omega and hence Dedekind infinitude. [F3, step 2.1] ∎
