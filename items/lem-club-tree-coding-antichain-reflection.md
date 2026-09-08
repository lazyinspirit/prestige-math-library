---
id: lem-club-tree-coding-antichain-reflection
kind: lemma
title: "A club of correctly coded maximal-antichain restrictions"
status: published
origin: pipeline
deps: [lem-closure-points-on-regular-cardinals, lem-tree-predecessors-and-common-extensions, thm-small-intersections-of-clubs, thm-countable-subsets-of-omega-one-are-bounded, cor-cardinal-absorption, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.10 proof, printed p45; direct closure-map alternative to elementary-substructure reflection"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, let $T$ be a tree of height $\omega_1$ with countable levels, and $A$ a maximal antichain. There is a bijection $b:T\to\omega_1$. For any such bijection there is a club of nonzero limit ordinals $\delta<\omega_1$ such that

$$b^{-1}[\delta]=T_{<\delta},\qquad A\cap T_{<\delta}\text{ is maximal in }T_{<\delta}.$$

Equivalently, after coding nodes by $b$, the coded initial segment $\delta$ is exactly the restriction to levels below $\delta$, and $b[A]\cap\delta$ is maximal there. No Suslin or normality hypothesis is required.

## Facts & Assumptions

**Given:** Such $T,A$; assume AC.

[F1] Nodes have unique predecessors at all smaller heights. [[lem-tree-predecessors-and-common-extensions]]

[F2] A self-map of a regular uncountable cardinal has club many closure points. [[lem-closure-points-on-regular-cardinals]]

[F3] Finite intersections of clubs in an ordinal of uncountable cofinality are club. [[thm-small-intersections-of-clubs]]

[F4] Countable subsets of $\omega_1$ are bounded under countable choice. [[thm-countable-subsets-of-omega-one-are-bounded]]

[F5] An infinite cardinal times a nonzero smaller cardinal equals itself. [[cor-cardinal-absorption]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 Every level $T_\alpha$ is nonempty: height $\omega_1$ supplies a node of height at least $\alpha$, and F1 supplies its predecessor at $\alpha$ if necessary. AC chooses an injection of each countable level into $\omega$. The map sending a node to its height and its chosen level index injects $T$ into $\omega_1\times\omega$, of cardinality $\aleph_1$ by F5. AC also chooses a node at every level, injecting $\omega_1$ into $T$. Thus $|T|=\aleph_1$ and a bijection $b$ exists. Fix any such $b$. [F1, F5, A1, given]

2.1 Define $h(\xi)=\operatorname{ht}(b^{-1}(\xi))$ and $g(\alpha)=\sup\{b(t)+1:t\in T_\alpha\}$. Each $g(\alpha)<\omega_1$ by countability of the level and F4. Maximality of $A$ gives a member comparable with each node: otherwise that node could be adjoined to $A$. Let $w(\xi)$ be the least code of a member of $A$ comparable with $b^{-1}(\xi)$. This minimum exists. Thus $h,g,w$ are self-maps of $\omega_1$. [F4, A1, step 1.1, given]

3.1 By F4 and A1, $\omega_1$ is regular uncountable: every smaller cardinal is countable and cannot be cofinal. Apply F2 to $h,g,w$ and intersect their three closure clubs with the club $L$ of nonzero limit ordinals, using F3. The set $L$ is closed; it is unbounded because $\beta+\omega$ is a countable nonzero limit above any countable $\beta$. Call the resulting club $C$. For $\delta\in C$, if $b(t)<\delta$, then $\operatorname{ht}(t)=h(b(t))<\delta$. Conversely if $\operatorname{ht}(t)=\alpha<\delta$, then $b(t)<g(\alpha)<\delta$. These prove $b^{-1}[\delta]=T_{<\delta}$. [F2, F3, F4, A1, step 2.1]

4.1 For $t\in T_{<\delta}$, step 3.1 gives $b(t)<\delta$ and closure under $w$ gives $w(b(t))<\delta$. The corresponding node lies in $A\cap T_{<\delta}$ and is comparable with $t$. The restriction of $A$ is still an antichain, so this comparability with every restricted node proves maximality: no further node can be adjoined. This proves the assertion for every $\delta\in C$. [step 2.1, step 3.1] ∎
