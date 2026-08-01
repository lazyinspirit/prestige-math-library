---
id: thm-prufer-code-bijection
kind: theorem
title: "Prüfer encoding and decoding are inverse bijections between labelled trees on $n\\ge2$ vertices and words of length $n-2$ on their labels"
status: published
origin: session
deps: [def-prufer-code, lem-prufer-decoding-produces-a-tree, cor-nontrivial-tree-has-two-leaves, def-injection-surjection-bijection, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
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

For every natural $n\ge2$, Prüfer encoding is a bijection from the set of trees with vertex set $n$ to the set of words of length $n-2$ on $n$. Its inverse is the decoding procedure of [[lem-prufer-decoding-produces-a-tree]].

## Facts & Assumptions

**Given:** A natural number $n\ge2$.

[F1] Encoding repeatedly removes the least labelled leaf and records its neighbour ([[def-prufer-code]]).

[L1] Decoding is well defined and produces a labelled tree ([[lem-prufer-decoding-produces-a-tree]]).

[F2] Two maps are inverse bijections when both composites are identity maps ([[def-injection-surjection-bijection]]).

[L2] Induction is valid on the word length ([[thm-induction-principle]]).

[F3] Decoding chooses the least unused label absent from the remaining word, attaches it to the first remaining symbol, and then deletes that symbol.

## Proof

**Proof technique:** induction on the size of the label set. We prove the stronger statement for every finite set of natural labels with its inherited order.

1.1 On a two-element natural-label set, the only word is empty and the only tree is the edge joining the labels, so encoding and decoding agree. [base, F1, L1]

1.2 Assume that encoding and decoding are inverse on every finite natural-label set of size $n-1$. [ih]

1.3 Let $w=a_0\cdots a_{n-3}$ and let $v$ be the least label absent from $w$. Decoding first attaches $v$ to $a_0$ and never uses $v$ again. [choose, F3, L1]

1.4 Conversely, let $T$ be a labelled tree, let its first encoding operation delete the least leaf $u$, and let it record the neighbour $b$. [choose, F1]

2.1 In the decoded tree, $v$ is a leaf. Every label smaller than $v$ occurs in $w$, so while it is unused it receives an edge as a recorded neighbour and later receives its deletion edge or the final edge. Hence no smaller label is initially a leaf, and encoding first deletes $v$ and records $a_0$. [step 1.3, F1]

2.2 The label $u$ is absent from the full code. Every smaller label is not initially a leaf, so before it can be deleted, deletion of an incident leaf records it at least once. Thus $u$ is the least label absent from the code, and decoding first restores the edge $ub$. [step 1.4, F3]

3.1 After removing $v$ and the first word entry, both procedures operate on the same ordered label set of size $n-1$ and the suffix word. The induction hypothesis shows that the remaining operations are inverse. Thus encoding the decoded tree returns $w$. [step 1.2, step 2.1, L2]

3.2 After deleting $u$ and the first code entry, the induction hypothesis restores the remaining tree on its ordered label set of size $n-1$. Therefore decoding the code of $T$ returns $T$. [step 1.2, step 2.2, L2]

4.1 Both composites are identities, so encoding and decoding are inverse bijections on the ordered label set of size $n$. Applying this to the natural order on $n$ proves the theorem. [step 3.1, step 3.2, F2, discharge-induction] ∎
