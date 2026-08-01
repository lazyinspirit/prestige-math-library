---
id: lem-prufer-decoding-produces-a-tree
kind: lemma
title: "The Prüfer decoding procedure is well defined and produces a labelled tree"
status: published
origin: session
deps: [def-prufer-code, def-tree-forest-and-leaf, lem-edge-addition-to-a-tree, lem-pigeonhole, thm-well-ordering-principle, thm-induction-principle, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Prüfer codes"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

Let $S\subseteq\mathbb N$ be finite with $|S|=n\ge2$, and let $(a_i)_{i<n-2}$ be a word on the label set $S$. The following procedure is well defined and produces a tree on $S$:

At stage $i$, choose the least unused label absent from the remaining word $a_i\cdots a_{n-3}$, join it to $a_i$, and mark it used. After all symbols are processed, join the two unused labels.

## Facts & Assumptions

**Given:** A word $(a_i)_{i<n-2}$ on a finite set $S\subseteq\mathbb N$ of cardinality $n\ge2$ ([[def-finite-cardinality]]).

[L1] A word with $r$ positions cannot contain more than $r$ distinct labels. Thus among $r+2$ available labels at least two are absent; every nonempty set of natural labels has a least element ([[lem-pigeonhole]], [[thm-well-ordering-principle]]).

[F1] A tree is a connected acyclic graph ([[def-tree-forest-and-leaf]]).

[L2] Induction applies to the decoding stages ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on the stage number.

1.1 Before any word entry is processed, the graph has $n$ singleton components indexed by $S$, each containing exactly one unused label. [base]

1.2 Assume that after $i$ stages the built edges form a forest and every component contains exactly one unused label. [ih]

2.1 There are $n-i$ unused labels and $n-2-i$ entries in the remaining word. Hence at least two unused labels are absent from that word, so the least such label $v$ exists. Every label used at an earlier stage was absent from the then-remaining word and hence from its current suffix, so $a_i$ is unused; because $a_i$ occurs in the remaining word, $v\ne a_i$. [step 1.2, L1]

3.1 The label $a_i$ lies in a component different from the component containing $v$: by the induction hypothesis each component contains exactly one unused label, and $a_i\ne v$. Adding $va_i$ and marking $v$ used joins those components without a cycle and leaves exactly one unused label in the new component. Thus the invariant holds after stage $i+1$. [step 1.2, step 2.1]

4.1 Induction gives the invariant after all $n-2$ word stages. Exactly two unused labels and two components remain; joining those labels makes the graph connected without creating a cycle. [step 3.1, L2]

5.1 The output uses all labels in $S$ and is connected and acyclic, hence is a labelled tree on $S$. [step 4.1, F1, discharge-induction] ∎
