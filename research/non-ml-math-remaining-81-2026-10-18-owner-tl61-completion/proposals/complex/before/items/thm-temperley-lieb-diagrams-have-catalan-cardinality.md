---
id: thm-temperley-lieb-diagrams-have-catalan-cardinality
kind: theorem
title: "The rank-n diagram basis is counted by the nth Catalan number"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-temperley-lieb-diagram-category, def-balanced-bracket-word, thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words, cor-balanced-bracket-words-are-counted-by-the-catalan-numbers, def-dyck-path-and-semilength, lem-lattice-paths-are-determined-by-their-step-words, def-catalan-number]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra, §2"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF/printed pp. 5–9: cut diagrams, link states, and the Catalan count."
    - title: "David Guichard, Combinatorics and Graph Theory, Section 3.5: Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
      locator: "§3.5, printed p. 69: the Catalan count and properly matched parenthesis words; the diagram-to-word bijection is proved locally."
    - title: "Dana C. Ernst, Michael G. Hastings, and Sarah K. Salmon, Factorization of Temperley–Lieb diagrams"
      url: "https://msp.org/involve/2017/10-1/involve-v10-n1-p07-s.pdf"
      locator: "§3, printed pp. 98–100: the loop-free diagram basis and its indexing."
---

## Statement

For every $n\ge0$, the set $\mathcal D(n,n)$ of noncrossing pairings of the $2n$ boundary points is in bijection with the Dyck paths of semilength $n$, and hence with balanced bracket words with $n$ pairs. It is finite with cardinality $C_n$, so the free $R$-module $\mathrm{TL}_n(R,\delta)$ has a diagram basis indexed by exactly $C_n$ loop-free diagrams for every commutative ring $R$ and every $\delta\in R$.

## Facts & Assumptions

**Given:** $n\ge0$, the cyclically ordered top and bottom boundary labels in [[def-temperley-lieb-diagram-category]], and the Catalan number $C_n$.

[F1] The basis of $\mathrm{TL}_n(R,\delta)$ is the set of noncrossing pairings of the $n$ top and $n$ bottom boundary points, read in cyclic order. ([[def-temperley-lieb-diagram-category]])

[F2] The set $\mathcal B_n$ of recursively balanced bracket words is exactly the set of equal-count words whose prefixes have at least as many opens as closes, and it is finite of cardinality $C_n$. ([[def-balanced-bracket-word]], [[thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words]], [[cor-balanced-bracket-words-are-counted-by-the-catalan-numbers]])

[F3] Sending an opening bracket to an up-step and a closing bracket to a down-step identifies balanced bracket words with Dyck paths of semilength $n$, using the step-word bijection. ([[def-dyck-path-and-semilength]], [[lem-lattice-paths-are-determined-by-their-step-words]])

## Proof

**Proof technique:** direct.

1.1 Read the $2n$ boundary labels in their fixed cyclic order. Given a noncrossing pairing, mark the earlier endpoint of each pair by an opening parenthesis and the later endpoint by a closing parenthesis. The resulting word has equal numbers of each kind. In every prefix, each closing endpoint is paired with an earlier opening endpoint in that prefix, so the number of closes never exceeds the number of opens; hence the word is balanced. This construction also applies at $n=0$, where it gives the empty word. [F1, given, construct]

2.1 Conversely, scan a balanced word from left to right, placing each opening position on a stack and pairing each closing position with the most recently placed unmatched opening. At the end the stack is empty because the total numbers agree. The pairs are nested or disjoint, so they do not interlace. For a noncrossing pairing, the same rule recovers its original partners: if a close at position $j$ were paired with an earlier open $i$ while a later open $k$ between them remained unmatched until after $j$, then its eventual partner $l>j$ would give interlacing pairs $\{i,j\}$ and $\{k,l\}$, contrary to [F1]. Thus the two constructions are inverse bijections. [F1, step 1.1, construct]

3.1 Replace each opening bracket by an up-step and each closing bracket by a down-step. Equality of the bracket counts gives total height zero, and the prefix inequality proved in step 1.1 gives nonnegative prefix heights; hence this is a Dyck path of semilength $n$. Reading its step word recovers the bracket word, so [F3] gives a bijection. By [F2] the bracket-word set is finite of size $C_n$. Composing this bijection with steps 1.1–1.2 proves that $\mathcal D(n,n)$ is in bijection with Dyck paths and has size $C_n$. The free-module definition in [F1] makes these diagrams a basis of $\mathrm{TL}_n(R,\delta)$; no coefficient is changed in this count. [F1, F2, F3, step 1.1, step 2.1] ∎

## Remarks

The cyclic boundary convention matters: the top points are read left to right and the bottom points right to left. This yields $2n$ ordered endpoints and the semilength-$n$ Catalan convention, including the empty diagram at $n=0$.
