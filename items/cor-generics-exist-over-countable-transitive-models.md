---
id: "cor-generics-exist-over-countable-transitive-models"
kind: "corollary"
title: "Generics over countable transitive models in ZF"
deps: ["def-dense-open-sets-and-model-generic-filters", "thm-transfinite-recursion"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Theorem 1.14 and Corollary 1.15 p4; local least-code ZF refinement
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, let $e:\omega\to M$ be an external surjective enumeration of a transitive set model M of ZF. If M contains a forcing preorder P and its order, then for each $p\in P$ an M-generic filter through p exists. The existence of M and its enumeration are hypotheses.

## Facts & Assumptions

**Given:** ZF with supplied external enumeration of M. Enumerate all ground dense sets with P as fallback, refine by least e-indices, and verify the resulting filter directly; no AC-dependent theorem is consumed.

[F1] [[def-dense-open-sets-and-model-generic-filters]]: Density is absolute, and genericity means meeting every ground-model dense set.

[F2] [[thm-transfinite-recursion]]: A unique definable successor rule gives a sequence on omega in ZF.

## Proof

1.1 Set $D_n=e(n)$ if e(n) is a dense subset of P, and $D_n=P$ otherwise. Every ground-model dense subset occurs. For q in P let $h(n,q)=e(k)$ for the least k such that $e(k)\in D_n$ and $e(k)\le q$. Transitivity gives $P\subseteq M$, so surjectivity of e and density ensure such k exists. This is a uniquely defined rule, not a choice function obtained by AC. Recursively put $p_0=p$ and $p_{n+1}=h(n,p_n)$. [F1, F2, construct]

2.1 Put $G=\{q\in P:\exists n\ p_n\le q\}$. Then p belongs to G; transitivity gives upward closure; and the term with index max(n,m) strengthens any two members witnessed by n,m. Thus G is a filter. Each $p_{n+1}\in D_n\cap G$, so F1 makes G M-generic. Neither the sequence nor G is asserted to be an element of M. [F1, step 1.1] ∎
