---
id: lem-acceptance-is-configuration-reachability
kind: lemma
title: "Acceptance is reachability of an accepting configuration"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-configuration-graph, def-halting-computation-and-divergence, def-nondeterministic-accepting-computation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 10: The Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf"
---

## Statement

Let $N$ be either a deterministic one-tape Turing machine or a nondeterministic
one-tape Turing machine, and fix an input word $w$. Then $N$ accepts $w$ if and
only if, in the configuration graph $G_N(w)$, some accepting configuration is
reachable from the initial configuration.

## Facts & Assumptions

**Given:** A machine $N$ of one of the two stated kinds, an input word $w$, and its configuration graph $G_N(w)$.

[L1] In the deterministic case, an accepting computation history on $w$ is a finite list of configurations beginning at the initial configuration, ending at an accepting configuration, and following the one-step relation at each stage, by [[def-halting-computation-and-divergence]].

[L2] In the nondeterministic case, an accepting computation on $w$ is likewise a finite list of configurations beginning at the initial configuration, ending at an accepting configuration, and following the nondeterministic one-step relation at each stage, by [[def-nondeterministic-accepting-computation]].

[L3] The configuration graph has exactly those legal one-step moves as its arcs, by [[def-configuration-graph]].

## Proof

**Proof technique:** direct.

1.1 Suppose first that $N$ accepts $w$. By [L1] in the deterministic case and by [L2] in the nondeterministic case, there is a finite accepting computation $C_0,\dots,C_n$ from the initial configuration to an accepting configuration. By [L3], each consecutive pair is an arc of $G_N(w)$, so this finite vertex list witnesses that an accepting configuration is reachable from the initial configuration. [L1, L2, L3, given]

1.2 Conversely, suppose there is a finite vertex list $C_0,\dots,C_n$ in $G_N(w)$ whose first term is the initial configuration, whose last term is accepting, and whose consecutive pairs are arcs. By [L3], each consecutive pair satisfies the legal one-step relation. Therefore [L1] or [L2], according to the kind of machine $N$, makes $C_0,\dots,C_n$ an accepting computation of $N$ on $w$. [L1, L2, L3, given]

2.1 Steps 1.1 and 1.2 prove that $N$ accepts $w$ if and only if some accepting configuration is reachable from the initial configuration in $G_N(w)$. [step 1.1, step 1.2] ∎
