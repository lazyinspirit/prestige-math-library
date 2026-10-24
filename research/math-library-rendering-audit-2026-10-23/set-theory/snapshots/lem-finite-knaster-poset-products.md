---
id: lem-finite-knaster-poset-products
kind: lemma
title: "Finite products preserve Knaster"
status: published
origin: pipeline
deps: [def-finite-support-poset-product, def-poset-ccc-and-knaster-property, thm-countable-union-of-countable, thm-well-ordering-theorem, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 15.14, printed pp265–266; indexed thinning expanded locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC every finite product of Knaster posets, with coordinatewise order, is Knaster. Greatest elements are not required. In particular, for any family $(p_\xi)_{\xi\in J}$ in that product indexed by an uncountable $J\subseteq\omega_1$, some uncountable $K\subseteq J$ has pairwise compatible values; repetitions among the $p_\xi$ are allowed.

## Facts & Assumptions

**Given:** Finitely many Knaster posets $P_i$ ($i<n$). Assume AC.

[F1] Knaster extracts an uncountable compatible subset of every uncountable set; each condition is compatible with itself. [[def-poset-ccc-and-knaster-property]]

[F2] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

[F3] AC well-orders every set. [[thm-well-ordering-theorem]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 For any Knaster poset $Q$ and family $(q_\xi)_{\xi\in J}$ with uncountable $J\subseteq\omega_1$, first suppose the range is countable. Some fiber is uncountable: otherwise an enumeration of the range and F2 would express $J$ as a countable union of countable fibers. Retain such a fiber; all its values coincide and hence are pairwise compatible. If the range is uncountable, F1 gives an uncountable pairwise compatible subset $B$ of the range. Retain $\{\xi\in J:q_\xi\in B\}$. Its image is $B$, so it is uncountable, and its values are pairwise compatible, even when repeated. The only infinite choice used here is the countable choice for F2, supplied by A1. [F1, F2, A1, given]

2.1 Start with the given indexed family in $\prod_{i<n}P_i$ and set $J_0=J$. For each $i<n$ apply step 1.1 to the $i$th coordinate on $J_i$, obtaining an uncountable $J_{i+1}\subseteq J_i$ on which that coordinate is pairwise compatible. Earlier coordinate compatibility persists under restriction. Finite iteration gives uncountable $K=J_n$ with every coordinate pair compatible. If $n=0$, set $K=J$ and there are no coordinate conditions to impose. [step 1.1, given]

3.1 For distinct $\xi,\eta\in K$, select for each $i<n$ a common lower bound $r_i\le_i p_\xi(i),p_\eta(i)$. There are only finitely many selections, so $r=(r_i)_{i<n}$ is a tuple in the product and a lower bound for both. At $n=0$ it is the empty tuple. Thus step 2.1 proves the indexed assertion without any greatest-element hypothesis. [F1, step 2.1]

4.1 Given an uncountable subset $X$ of the product, F3 and A1 give a well-order of $X$ and hence an injection $\omega_1\to X$: enumerate the first $\omega_1$ elements of its order type, which must be at least $\omega_1$ since $X$ is uncountable. Apply steps 2.1 and 3.1 to this injective enumeration. Its restriction to $K$ remains injective, so its image is an uncountable compatible subset of $X$, as F1 requires. If the product is empty or a singleton (including the empty product), it has no uncountable subset and the Knaster assertion is vacuous. [F1, F3, A1, step 2.1, step 3.1] ∎
