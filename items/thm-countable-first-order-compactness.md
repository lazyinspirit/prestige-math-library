---
id: thm-countable-first-order-compactness
kind: theorem
title: "Compactness for explicitly countable languages"
status: draft
origin: pipeline
deps: [thm-countable-first-order-completeness, lem-derivation-finite-support-and-concatenation, thm-set-language-first-order-soundness]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1J.1 p44; Weiss–D’Mello Theorem 1 and Exercise 6 p14 for finite entailment."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In classical ZF, a sentence theory $T$ in an explicitly countable language has a model iff every finite subset has a model. A model with carrier injecting into $\omega$ can be obtained when it is satisfiable. Moreover, if $T\models\sigma$ for a sentence $\sigma$, some finite $T_0\subseteq T$ entails $\sigma$.

## Facts & Assumptions

**Given:** An explicitly countable signature, a sentence theory $T$ and a sentence $\sigma$.

[F1] Consistent countable-language theories have at most countable nonempty models, and semantic consequence equals provability. ([[thm-countable-first-order-completeness]])

[F2] Every proof uses finitely many assumptions. ([[lem-derivation-finite-support-and-concatenation]])

[F3] A theory with a model is consistent; provability is sound. ([[thm-set-language-first-order-soundness]])

## Proof

1.1 If $M\models T$, the same $M$ satisfies every subset, in particular every finite subset. Conversely suppose each finite subset of $T$ has a model. Any proof of bottom from $T$ would have finite support $T_0$ by F2; its model would contradict F3. Thus $T$ is consistent and F1 supplies an at most countable nonempty model. This also handles $T=\varnothing$: the finite-subset hypothesis then concerns that empty theory itself. [F1, F2, F3]

2.1 If $T\models\sigma$, F1 gives a finite proof $T\vdash\sigma$. F2 supplies its finite assumption set $T_0\subseteq T$, with $T_0\vdash\sigma$. F3 then gives $T_0\models\sigma$. The support can be empty when $\sigma$ is logically provable. No selection of models for all finite subsets was needed in step 1.1: a single alleged proof would call for only one model. [F1, F2, F3] ∎
