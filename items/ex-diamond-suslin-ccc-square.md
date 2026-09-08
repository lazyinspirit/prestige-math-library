---
id: ex-diamond-suslin-ccc-square
kind: example
title: "Under diamond, ccc fails to survive a square"
status: draft
origin: pipeline
deps: [thm-diamond-constructs-normal-suslin-tree, thm-splitting-suslin-tree-poset-square-not-ccc, lem-finite-knaster-poset-products, def-poset-ccc-and-knaster-property, def-axiom-of-choice]
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
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.10, printed pp44–45; ordinal-coded instance of the local split-pair theorem"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

Assume ZFC and $\diamondsuit$, and take the normal splitting Suslin tree $T$ constructed earlier, with node set $\omega_1$. For each $t$, let $t^0$ and $t^1$ be the two least ordinal codes of its immediate successors. Its reverse tree order $P$ is ccc, while

$$E=\{(t^0,t^1):t<\omega_1\}\subseteq P\times P$$

is an antichain of size $\aleph_1$. In particular this $P$ is not Knaster.

## Facts & Assumptions

**Given:** ZFC plus a diamond sequence; use the tree with ordinal node codes from the construction.

[F1] Under diamond a normal splitting Suslin tree with underlying set $\omega_1$ exists. [[thm-diamond-constructs-normal-suslin-tree]]

[F2] Its reverse poset is ccc, and pairs of distinct immediate successors indexed by parents form an uncountable antichain in its square. [[thm-splitting-suslin-tree-poset-square-not-ccc]]

[F3] A finite product of Knaster posets is Knaster. [[lem-finite-knaster-poset-products]]

[F4] Knaster implies ccc. [[def-poset-ccc-and-knaster-property]]

[A1] Assume AC as part of ZFC. [[def-axiom-of-choice]]

## Verification

1.1 F1 supplies the tree under the stated diamond and A1 hypotheses. Its successor sets contain at least two ordinal-coded nodes, so their first and second members define $t^0,t^1$ without further choices. The split-pair construction in F2 applies to exactly these selections. Each first successor determines its parent, so $t\mapsto(t^0,t^1)$ is injective and $|E|=\aleph_1$. For incomparable parents even the first successors are incompatible; for $t<_Tu$, simultaneous coordinate compatibility would put the two distinct $t$-successors below $u$, impossible by unique predecessors, as calculated in F2. Thus the displayed $E$ is the explicit antichain, and $P$ is ccc. [F1, F2, A1, given]

2.1 If $P$ were Knaster, F3 would make $P\times P$ Knaster and F4 would make it ccc. This contradicts the antichain $E$ in step 1.1. Hence this conditional ccc example is not Knaster; the diamond assumption remains necessary for the tree supplied here. [F3, F4, A1, step 1.1] ∎
