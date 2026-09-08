---
id: thm-infinite-ramsey-finite-colors
kind: theorem
title: "Infinite Ramsey theorem for fixed finite arity and colors"
status: draft
origin: pipeline
deps: [def-partition-arrow-notation, thm-recursion, thm-induction-principle, thm-well-ordering-theorem, def-axiom-of-choice]
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
    - title: "Monk, Set theory following Jech (2024), Theorem 29.1, printed p648; increasing-tail recursion and choice of homogeneous tails expanded locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, for positive finite integers $n,r$, every coloring $c:[\omega]^n\to r$ has an infinite homogeneous subset. Thus $\omega\to(\omega)^n_r$.

## Facts & Assumptions

**Given:** Positive finite integers $n,r$; assume AC.

[F1] Homogeneous means that all fixed-arity subsets have one color. [[def-partition-arrow-notation]]

[F2] A specified rule on a state set admits natural-number recursion. [[thm-recursion]]

[F3] Induction proves a property from its initial and successor cases. [[thm-induction-principle]]

[F4] AC well-orders every set, in particular $\mathcal P(\omega)$. [[thm-well-ordering-theorem]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 For arity one, the color fibers partition $\omega$ into $r$ sets. If all were finite, their finite union would be finite, whereas $\omega$ is infinite. Hence one fiber is infinite and homogeneous by F1. More generally, the same conclusion holds for any finite coloring of an infinite subset of $\omega$. [F1, given]

2.1 Assume the assertion at arity $n\ge1$ and let $c:[\omega]^{n+1}\to r$. The induction assertion applies to every infinite subset $S\subseteq\omega$: enumerate it increasingly and pull back the coloring to $[\omega]^n$, then push forward an infinite homogeneous set. Fix a well-order of $\mathcal P(\omega)$ by F4 and A1, so whenever the induction assertion supplies homogeneous infinite subsets we can take the first one in this well-order. This is the explicit choice use in the construction. [F4, A1, step 1.1, given]

3.1 Set $S_0=\omega$. Given infinite $S_i$, set $m_i=\min S_i$ and consider on $[S_i\setminus\{m_i\}]^n$ the coloring $u\mapsto c(\{m_i\}\cup u)$. Its argument has size $n+1$ because $m_i\notin u$. By step 2.1 choose the first infinite homogeneous $S_{i+1}\subseteq S_i\setminus\{m_i\}$, and let $j_i<r$ be its color. The color is unique, since an infinite set has an $n$-element subset. Store $S_i$ and the stage as a state to apply F2. All subsequent $m_k$ for $k>i$ belong to $S_{i+1}$, and $m_{i+1}>m_i$ because $m_i$ was its predecessor set's minimum. [F1, F2, step 2.1]

4.1 By step 1.1 some color $j<r$ has infinitely many indices $K=\{i:j_i=j\}$. Put $H=\{m_i:i\in K\}$. It is infinite since the $m_i$ increase strictly. Given any $n+1$ members, order their indices $i_0<\cdots<i_n$. The last $n$ nodes lie in $S_{i_0+1}$, so step 3.1 gives $c(\{m_{i_0},\ldots,m_{i_n}\})=j_{i_0}=j$. Thus $H$ is homogeneous. This proves the successor assertion; with step 1.1, F3 proves the theorem for every positive finite arity. [F1, F3, step 1.1, step 3.1] ∎
