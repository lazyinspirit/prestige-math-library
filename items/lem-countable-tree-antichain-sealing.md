---
id: lem-countable-tree-antichain-sealing
kind: lemma
title: "Seal a maximal antichain at a countable limit level"
status: published
origin: pipeline
deps: [lem-countable-normal-tree-cofinal-branch, lem-tree-predecessors-and-common-extensions, def-normal-splitting-set-theoretic-tree]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Lemma 9.11, printed p45"
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

Let $T$ be a countable normal tree of nonzero countable limit height $\delta$, and let $A$ be a maximal antichain. There is a countable family of cofinal branches covering $T$, each meeting $A$. Adding one distinct top for each distinct branch gives a countable normal tree of height $\delta+1$ in which every new top extends a member of $A$; $A$ remains maximal. If $T$ is splitting, the extension is splitting. No Choice is needed.

## Facts & Assumptions

**Given:** Such $T$, $\delta$, and $A$. An antichain is maximal under inclusion among antichains.

[F1] There is a countable collection of cofinal branches covering this $T$, in ZF. [[lem-countable-normal-tree-cofinal-branch]]

[F2] Every node has exactly one predecessor of every smaller height. Nodes below a common node are comparable, and strict order increases height. [[lem-tree-predecessors-and-common-extensions]]

[F3] Normality requires a unique root, extensions at higher levels, and distinct predecessor sets for distinct nodes at nonzero limit levels. Splitting requires two immediate successors when the successor level exists. [[def-normal-splitting-set-theoretic-tree]]

## Proof

1.1 Fix an enumeration $e:\omega\to T$ and, using F1, a sequence $(c_n)_{n<\omega}$ of cofinal branches covering $T$. A maximal antichain has a member comparable with each $t\in T$: otherwise adjoining $t$ would make a larger antichain. In particular $A$ is nonempty, since $T$ is nonempty. Define $a(t)=e(k)$ for the least $k$ with $e(k)\in A$ comparable with $t$. Put $u(t)=t$ if $a(t)\le_Tt$, and $u(t)=a(t)$ otherwise. Thus both $t,a(t)\le_Tu(t)$. [F1, given]

2.1 Let $n(t)$ be the least $n$ with $u(t)\in c_n$. Every branch containing a node contains its predecessors: each such predecessor is comparable with every branch node by common-predecessor comparability and transitivity, and maximality of the chain then includes it. Hence $b_t=c_{n(t)}$ contains both $t$ and $a(t)$. The family $\mathcal B=\{b_t:t\in T\}$ covers $T$, consists of cofinal branches meeting $A$, and is countable via $k\mapsto b_{e(k)}$. Forming the image as a set removes repetitions. [F2, step 1.1]

3.1 On the disjoint union $U=(T\times\{0\})\cup(\mathcal B\times\{1\})$, keep the original order on the old copy and put $(s,0)<_U(b,1)$ exactly when $s\in b$. No new node is below another node. Each branch $b$ is downward closed by step 2.1 and has exactly one node at every level below $\delta$: cofinality gives a node above any given level, its unique predecessor is in $b$, and chain comparability permits at most one. Height therefore identifies $b$ order-isomorphically with $\delta$. Thus the new top has a well-ordered predecessor set of type $\delta$, while old predecessor sets are unchanged. This defines a tree of height $\delta+1$, with old copy identified with $T$. [F2, step 2.1]

4.1 The tree $U$ is countable: enumerate its old copy by $k\mapsto(e(k),0)$ and its top level by $k\mapsto(b_{e(k)},1)$ and interleave these two sequences. It has the old unique root. Every old node extends to a new top by the covering property; extensions between old levels persist. Different new tops correspond to different branches, hence have different predecessor sets, so uniqueness holds at the new limit level as well as the old ones. This proves normality. If $T$ is splitting, every old immediate-successor pair persists: for old height $\alpha<\delta$, one has $\alpha+1<\delta$ since $\delta$ is limit. New tops have no splitting requirement. [F3, step 2.1, step 3.1]

5.1 Every new top lies above a member of $A$ by step 2.1. Old nodes remain comparable with a member of $A$ by step 1.1. The old antichain $A$ is still an antichain, since the old order is unchanged. As all nodes of $U$ are comparable with its members, no further node can be adjoined to it, so it remains maximal. All selections used least indices in two fixed enumerations, not a choice function on a family of nonempty sets. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
