---
id: "thm-rasiowa-sikorski-with-explicit-choice"
kind: "theorem"
title: "Rasiowa–Sikorski with its choice use exposed"
deps: ["def-dense-open-sets-and-model-generic-filters", "def-axiom-of-choice", "thm-transfinite-recursion"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Theorem 1.14 and Corollary 1.15 p4; Marks Lemma 24.6 p99
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, given a nonempty forcing preorder P, a sequence $(D_n)_{n<\omega}$ of dense subsets and $p\in P$, a filter G contains p and meets every $D_n$. If a surjection $e:\omega\to P$ is supplied, the conclusion has a ZF proof without AC.

## Facts & Assumptions

**Given:** General branch assumes AC for the omega cross P refinement family; supplied-enumeration branch is ZF. Explicit descending sequence and upward closure verify nonemptiness, direction and all dense-set meetings.

[F1] [[def-dense-open-sets-and-model-generic-filters]]: Density supplies refinements; filters are upward closed and internally downward directed.

[F2] [[def-axiom-of-choice]]: AC selects an element from each set in a set-indexed family of nonempty sets.

[F3] [[thm-transfinite-recursion]]: The definable-rule recursion schema applies on omega and uses no Choice.

## Proof

1.1 For $(n,q)\in\omega\times P$, let $E_{n,q}=\{r\in D_n:r\le q\}$. These sets are nonempty by density. AC selects $h(n,q)\in E_{n,q}$; this is the sole AC use. Recursively set $p_0=p$ and $p_{n+1}=h(n,p_n)$. Thus $p_{n+1}\le p_n$ and $p_{n+1}\in D_n$. [F1, F2, F3, construct]

2.1 Define $G=\{q\in P:\exists n\ (p_n\le q)\}$. It contains p and is upward closed. If q,r have witnesses n,m, then $p_{\max(n,m)}\in G$ strengthens both. Hence G is a filter and $p_{n+1}\in G\cap D_n$ for every n. [F1, step 1.1]

3.1 If e is supplied, instead define h(n,q) as $e(k)$ for the least k with $e(k)\in D_n$ and $e(k)\le q$. Such k exists by density and surjectivity, and is unique by leastness. This rule and the recursion and verification above require only ZF. [F1, F3, step 1.1, step 2.1] ∎
