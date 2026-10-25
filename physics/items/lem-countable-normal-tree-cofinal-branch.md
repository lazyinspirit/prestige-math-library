---
id: lem-countable-normal-tree-cofinal-branch
kind: lemma
title: "Branches through countable normal trees of limit height"
status: published
origin: pipeline
deps: [def-normal-splitting-set-theoretic-tree, thm-recursion, lem-tree-predecessors-and-common-extensions]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Lemma 9.11 and its proof, printed p45 (branch existence expanded locally)"
      url: https://karagila.org/files/set-theory-2017.pdf
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
justified_by: []
forward_refs: []
---

## Statement

If $T$ is countable and normal of nonzero countable limit height $\delta$, every node lies on a branch cofinal in $\delta$. There is a countable collection of such branches covering $T$. The construction works in ZF, with no use of Choice.

## Facts & Assumptions

**Given:** Such $T$ and $\delta$, and an arbitrary $t\in T$.

[F1] Normality gives an extension at every strictly higher level below the tree height. [[def-normal-splitting-set-theoretic-tree]]

[F2] Natural-number recursion defines the unique orbit of a function on a set from a specified initial state. [[thm-recursion]]

[F3] Every node has a unique predecessor of every smaller height, and two predecessors of a common node are comparable. Strict order increases height. [[lem-tree-predecessors-and-common-extensions]]

## Proof

1.1 Fix surjections $e:\omega\to T$ and $d:\omega\to\delta$. They exist by countability: $\delta$ is infinite, and $T$ has nodes at arbitrarily high levels below $\delta$, so it too is infinite. Only these two witnesses are fixed. Define $\gamma_0=d(0)$ and $\gamma_{n+1}=\max\{\gamma_n+1,d(n+1)\}$. The successor of every ordinal below the limit $\delta$ is still below $\delta$, so recursion gives a strictly increasing sequence in $\delta$. It is cofinal since $\gamma_n\ge d(n)$. The nonautonomous rule is a recursion on the state $(n,\gamma_n)$. [given, F2]

2.1 Starting at $t_0=t$, let $\beta_n=\max\{\gamma_n,\operatorname{ht}(t_n)+1\}<\delta$ and take $t_{n+1}=e(k)$ for the least $k$ for which $t_n<_Te(k)$ and $\operatorname{ht}(e(k))=\beta_n$. The candidate set is nonempty by normality. Recursion on $(n,t_n)$ supplies this sequence, and its heights are cofinal because $\operatorname{ht}(t_{n+1})\ge\gamma_n$. Least natural indices require no choice function. [F1, F2, step 1.1]

3.1 Put $b_t=\{s\in T:\exists n\ s\le_Tt_n\}$. It contains $t$ and is a chain: if $s\le_Tt_n$ and $u\le_Tt_m$, both lie below $t_{\max\{n,m\}}$, so they are comparable. Its heights are cofinal by step 2.1. [F3, step 2.1]

4.1 If $s$ can be adjoined to $b_t$ while retaining a chain, choose $n$ with $\operatorname{ht}(t_n)>\operatorname{ht}(s)$, possible by cofinality and the limit-height hypothesis. Comparability with $t_n$ and strict increase of height force $s<_Tt_n$, hence $s\in b_t$. Thus $b_t$ is maximal and is a cofinal branch. [F3, step 3.1]

5.1 The same fixed $e,d$ determine $b_t$ uniquely for each $t\in T$. Replacement therefore forms $\mathcal B=\{b_t:t\in T\}$. The sequence $n\mapsto b_{e(n)}$ is onto $\mathcal B$, so it is countable, and $t\in b_t$ proves that it covers $T$. The construction includes the root and every prescribed node; no last level exists at the limit height. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
