---
id: thm-qa-finite-abelian-hidden-subgroup-reconstruction-success
kind: theorem
title: Finite abelian hidden-subgroup reconstruction succeeds
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-finite-abelian-hidden-subgroup-reconstruction
  - thm-qa-finite-abelian-hidden-subgroup-sample-law
  - lem-qa-annihilator-restriction-cut
  - lem-qa-common-kernel-repetition-bound
  - lem-chernoff-bound-for-independent-bernoulli-trials
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew Aspnes, Notes on Randomized Algorithms, §§5.2.1–5.2.4 and H.2.2"
      url: "https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf"
---

## Statement

Let $G$ be finite abelian, let $H\le G$ be hidden by the supplied function, and let $0<\delta<1$. The common-kernel list output by [[alg-qa-finite-abelian-hidden-subgroup-reconstruction]] always denotes a subgroup $K$ with $H\le K$. For $|G|=1$ it equals $H=G$ exactly without queries. For $|G|\ge2$, set $s=\lceil\log_2|G|\rceil$ and pass the integer $M=\lceil4s+16\ln(1/\delta)\rceil$ to the reconstruction algorithm; its output equals $H$ with probability at least $1-\delta$.

## Facts & Assumptions

**Given:** The exact Fourier-sample procedure and the common-kernel reconstruction procedure with the integer $M$ specified in the Statement.

[F1] Every sample lies in $H^\perp$ and the sample law is uniform there. ([[thm-qa-finite-abelian-hidden-subgroup-sample-law]])

[F2] If $K>H$, a fresh sample cuts $K$ by index at least two with conditional probability at least $1/2$, while preserving $H$. ([[lem-qa-annihilator-restriction-cut]])

[F3] After $M=\lceil4s+16\ln(1/\delta)\rceil$ independent samples, the probability that the final common kernel is not $H$ is at most $\delta$. ([[lem-qa-common-kernel-repetition-bound]])

## Proof

1.1 If $|G|=1$, its only subgroup is $G$, and the algorithm outputs the empty constraint list denoting $G$. Thus the conclusion holds with probability one and zero queries. [given, construct]

1.2 Suppose $|G|\ge2$. Each measured character belongs to $H^\perp$ by [F1], so it is trivial on $H$. Hence every kernel in the output list contains $H$, and their intersection $K$ satisfies $H\le K$. [F1, given]

1.3 Starting with $K_0=G$, whenever $K_{t-1}>H$ the conditional cut probability and index reduction are those of [F2]. After $s=\lceil\log_2|G|\rceil$ cuts, the subgroup order is at most $|G|/2^s\le1$; since it contains the nonempty subgroup $H$, it must equal $H$. [F2, given, algebra]

2.1 The reconstruction procedure makes exactly $M$ independent samples. Therefore [F3] bounds the event that the final common kernel is not $H$ by $\delta$. Combining with $H\le K$ from step 1.2 gives success probability at least $1-\delta$. [F3, step 1.2, step 1.3] ∎

## Remarks

No subgroup generator extraction is used. The confidence integer is supplied to the reconstruction procedure; the theorem does not hide its classical computation.
