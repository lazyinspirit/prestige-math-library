---
id: "def-aronszajn-suslin-and-special-tree"
kind: "definition"
title: "Aronszajn, Suslin and special trees"
status: "draft"
origin: "pipeline"
deps: ["def-kappa-tree-and-tree-property", "def-countable", "def-first-uncountable-ordinal", "thm-rationals-countable"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Chapter 9, Definition 9.1 and Exercise 9.4, printed p43; Definition 9.5, p44; specialization convention adapted"
      url: "https://karagila.org/files/set-theory-2017.pdf"
justified_by: []
forward_refs: []
---

## Definition

Use $\omega_1$ from [[def-first-uncountable-ordinal]] and “countable” to include finite sets as in [[def-countable]]. An **Aronszajn tree** is a tree of height $\omega_1$ whose every level is countable and which has no cofinal branch. A **Suslin tree** is an Aronszajn tree with no uncountable antichain. Normality and splitting are not implicit. This direct formulation does not presuppose at the point of definition that $\omega_1$ has already been proved to be an infinite cardinal.

A tree $T$ is **special** if there is $f:T\to\omega$ with $f(s)\ne f(t)$ whenever $s<_Tt$. Equivalently, $T$ is a countable union of antichains. Indeed, a witnessing $f$ gives antichains $A_n=f^{-1}(\{n\})$ and $T=\bigcup_{n<\omega}A_n$. Conversely, given antichains $A_n$ covering $T$, set $f(t)=\min\{n:t\in A_n\}$. This minimum exists for each $t$; comparable distinct nodes cannot have the same minimum because they would belong to the same antichain. No choice is used in this equivalence, and overlaps among the $A_n$ cause no difficulty.

A strictly increasing rational labeling $q:T\to\mathbb Q$ suffices for specialness. Fix an injection $j:\mathbb Q\to\omega$, available from [[thm-rationals-countable]], and put $f=j\circ q$. If $s<_Tt$, then $q(s)<q(t)$, so $f(s)\ne f(t)$. No converse about increasing rational labelings is asserted. The empty and singleton trees are special (use the empty map and the constant-zero map respectively), but are not Aronszajn or Suslin trees since they lack height $\omega_1$.
