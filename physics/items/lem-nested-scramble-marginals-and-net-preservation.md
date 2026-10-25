---
id: lem-nested-scramble-marginals-and-net-preservation
kind: lemma
title: "Nested uniform scrambles preserve net counts and uniform marginals"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-nested-uniform-scramble
  - def-lambda-t-net
  - lem-countable-iid-baseb-digits-from-one-uniform
  - thm-dynkin-pi-lambda
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5, Propositions 17.2–17.3"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §4"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
---

## Statement

Let $a_1,\ldots,a_n$ be a $(\lambda,t,m,d)$-net in base $b$, and scramble it
by [[def-nested-uniform-scramble]]. Then each scrambled point has law
$\operatorname{Unif}([0,1)^d)$ and, with probability one, the scrambled array
is again a $(\lambda,t,m,d)$-net in base $b$.

## Facts & Assumptions

**Given:** A base-$b$ $(\lambda,t,m,d)$-net and the nested uniform scramble defined above.

[F1] [[def-lambda-t-net]]: Every elementary interval with total digit depth $m-t$ contains exactly $\lambda b^t$ points, counting multiplicities.

[F2] [[def-nested-uniform-scramble]]: At each coordinate and input-prefix node, the next digit is transformed by a uniform permutation; distinct nodes and coordinates use independent permutations.

[F3] [[lem-countable-iid-baseb-digits-from-one-uniform]]: The required countable family of independent uniform permutations exists; finite digit cylinders determine the uniform Borel law.

[F4] [[thm-dynkin-pi-lambda]]: Two probability measures agreeing on a generating $\pi$-system agree on all Borel sets.

[F5] [[lem-geometric-sequence-null]]: Since $0<1/b<1$, $b^{-L}\to0$ as $L\to\infty$.

## Proof

**Proof technique:** direct.

**Given:** The net, integers $b,d,m,t,\lambda$, and the independent node permutations.

1.1 Fix a point $a_i$ and coordinate $j$. Its input prefixes of lengths $0,1,\ldots,K-1$ are distinct nodes, so the corresponding permutations are independent. Conditional on the fixed input digits, each output digit is uniform on $\{0,\ldots,b-1\}$, independently of the earlier output digits. For each $m\ge1$, the event that all output digits from position $m$ onward equal $b-1$ is contained, for every $L\ge1$, in the event that its first $L$ digits equal $b-1$, which has probability $b^{-L}$; [F5] makes that tail event null. The countable union over $m$ is null. Outside it, every specified output prefix of length $K$ puts the numeric output in the corresponding half-open base-$b$ interval, not at its right endpoint. These cylinders form a generating $\pi$-system, so [F4] extends their probabilities $b^{-K}$ to the uniform Borel law. Independent permutation families across coordinates give $X_i\sim\operatorname{Unif}([0,1)^d)$. The finite set of points and coordinates has a common probability-one event on which none of their expansions is eventually all $b-1$. [F2, F3, F4, F5, given]

2.1 At any fixed digit depth $K$, the map from input words of length $K$ to output words is a bijection: it is a bijection at depth one, and at each subsequent depth every existing prefix is extended by the bijection supplied by its own permutation. Taking the coordinatewise product gives a bijection of all depth-vector digit boxes. It therefore permutes the boxes of total depth $m-t$ and preserves the number of input points in each image box. On the probability-one event from step 1.1, these digit boxes are exactly the numeric half-open elementary intervals of the scrambled coordinates. By [F1] every such output box contains $\lambda b^t$ points. [F1, F2, step 1.1]

3.1 Step 1.1 proves marginal uniformity and step 2.1 proves net preservation outside the null expansion events identified in step 1.1. These are exactly the two assertions. [step 1.1, step 2.1] ∎
