---
id: "thm-konig-finite-level-tree"
kind: "theorem"
title: "König’s lemma for finite levels"
status: published
origin: "pipeline"
deps: ["def-set-theoretic-tree-and-levels", "thm-recursion", "thm-well-ordering-theorem", "lem-tree-predecessors-and-common-extensions", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.32, printed p86"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  audited: 2026-09-09
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

In ZFC, every tree of height $\omega$ with finite levels has an infinite branch.

## Facts & Assumptions

**Given:** Such a tree $T$. AC is used once to fix a well-order of its node set; recursion thereafter takes least eligible nodes.

[F1] Every lower height has a unique predecessor; nodes with a common upper bound are comparable. [[lem-tree-predecessors-and-common-extensions]]

[F2] Assuming AC, every set can be well-ordered. [[thm-well-ordering-theorem]]

[F3] A specified initial value and a self-map of a set determine a sequence by natural recursion. [[thm-recursion]]

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

## Proof

1.1 Call $t$ good if the heights of nodes above or equal to $t$ are unbounded in $\omega$. The height assumption and F1 imply that every level is nonempty. Some root is good: otherwise, each of the finitely many roots has a finite height bound on its extensions; their maximum bounds all nodes because each node has a root predecessor (or is a root). That contradicts height $\omega$. [F1, given]

2.1 If a good node $t$ has height $n$, its immediate successors are precisely its extensions at height $n+1$, by F1. This is a finite set. Each higher extension of $t$ passes through one of these successors. If none were good, the maximum of their finitely many bounds, together with $n+1$, would bound all extensions of $t$. Thus a good immediate successor exists. [F1, step 1.1]

3.1 Fix a well-order of $T$ using AC. Let $t_0$ be the least good root and send each good node to its least good immediate successor. On the set of good nodes this is a self-map, so recursion gives $t_n$ at height $n$ with $t_n<_Tt_{n+1}$ for every $n$. [A1, F2, F3, step 1.1, step 2.1]

4.1 The set $B=\{t_n:n<\omega\}$ is an infinite chain. If $u$ could be added to it, put $n=\operatorname{ht}(u)$. Comparability with $t_n$ and the level-antichain conclusion of F1 force $u=t_n$. Thus $B$ is already maximal, hence is an infinite branch. [F1, step 3.1] ∎
