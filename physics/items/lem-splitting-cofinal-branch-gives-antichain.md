---
id: lem-splitting-cofinal-branch-gives-antichain
kind: lemma
title: "Splitting turns an uncountable branch into an antichain"
status: published
origin: pipeline
deps: [def-normal-splitting-set-theoretic-tree, lem-tree-predecessors-and-common-extensions, def-kappa-tree-and-tree-property, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Exercise 9.6, printed p44 (local proof with splitting explicit)"
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

In ZFC, a splitting $\omega_1$-tree with a cofinal branch has an antichain of cardinality $\aleph_1$. Normality is not additionally required. Here $\omega_1$-tree has the meaning of [[def-kappa-tree-and-tree-property]].

## Facts & Assumptions

**Given:** A splitting $\omega_1$-tree $T$ and a cofinal branch $b$.

[F1] Splitting gives at least two immediate successors of every node whose successor height is below the tree height. [[def-normal-splitting-set-theoretic-tree]]

[F2] Every node has a unique predecessor of each smaller height; common predecessors are comparable, and strict order strictly increases height. [[lem-tree-predecessors-and-common-extensions]]

[A1] Assume AC, used to select off-branch successors at all levels simultaneously. [[def-axiom-of-choice]]

## Proof

1.1 For each $\alpha<\omega_1$, cofinality gives $v\in b$ of height at least $\alpha$. If its height is greater, let $u$ be its unique predecessor of height $\alpha$; otherwise set $u=v$. Every $w\in b$ is comparable with $u$: if $w\le_Tv$, use common-predecessor comparability, and if $v<_Tw$, use $u\le_Tv<_Tw$. Maximality of $b$ therefore puts $u$ in $b$. Distinct nodes of the same height cannot both belong to a chain. Thus there is a unique $b_\alpha\in b\cap T_\alpha$ for every $\alpha$. For $\alpha<\beta$, comparability and height give $b_\alpha<_Tb_\beta$. [F2, given]

2.1 The node $b_{\alpha+1}$ is an immediate successor of $b_\alpha$, since an intermediate node would have height strictly between $\alpha$ and $\alpha+1$. Conversely every immediate successor $u$ of $b_\alpha$ has height $\alpha+1$: if its height were larger, its predecessor at $\alpha+1$ would lie strictly between $b_\alpha$ and $u$. Since $\alpha+1<\omega_1$, splitting makes $S_\alpha=\{u:u\text{ is an immediate successor of }b_\alpha,\ u\ne b_{\alpha+1}\}$ nonempty. AC gives $a_\alpha\in S_\alpha$ for every $\alpha<\omega_1$. [F1, F2, A1, step 1.1]

3.1 If $\alpha<\beta$, then $b_{\alpha+1}\le_Tb_\beta<_Ta_\beta$. Were $a_\alpha$ and $a_\beta$ comparable, their different heights $\alpha+1<\beta+1$ would force $a_\alpha<_Ta_\beta$. The two distinct nodes $a_\alpha,b_{\alpha+1}$ of height $\alpha+1$ would then be predecessors of $a_\beta$, contradicting uniqueness at that height. Thus $a_\alpha,a_\beta$ are incomparable. [F2, step 1.1, step 2.1]

4.1 Consequently $\{a_\alpha:\alpha<\omega_1\}$ is an antichain. Its indexing is injective because $\operatorname{ht}(a_\alpha)=\alpha+1$, so it has cardinality $\aleph_1$. The argument includes $\alpha=0$ and adjacent levels; all successor levels used remain below $\omega_1$. [step 2.1, step 3.1] ∎
