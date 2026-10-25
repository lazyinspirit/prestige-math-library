---
id: thm-qa-finite-abelian-hidden-subgroup-cost
kind: theorem
title: Finite abelian hidden-subgroup query and circuit costs
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-finite-abelian-hidden-subgroup-reconstruction
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - def-qa-finite-abelian-hidden-subgroup-problem
  - thm-qa-finite-abelian-hidden-subgroup-reconstruction-success
  - def-qc-circuit-cost-model
  - def-qc-coherent-function-oracle
  - lem-qa-cyclic-group-has-n-characters
  - lem-qa-character-dual-of-a-product-factors
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $N=|G|$. For $N\ge2$, let $M$ be the integer supplied to the reconstruction algorithm. If the supplied preparation and product-QFT circuits make no access to the hiding oracle, then in a named-oracle query model the algorithm makes exactly $M$ coherent hiding-oracle queries; this query count is separate from ordinary gate costs. Let $C_P$ and $C_Q$ be the ordinary gate counts of the supplied exact uniform-state preparation and product-QFT circuits. If the hiding function is instead compiled from an explicit reversible Boolean circuit with $C_F$ gates per evaluation, the total ordinary gate count is $M(C_P+C_Q+C_F)$; a named oracle query is not silently counted as an elementary gate. Each sample measures a $b$-bit character label, where $b=\sum_i\lceil\log_2n_i\rceil$. The output list therefore uses $Mb$ bits and writing it costs $O(Mb)=O(M\log_2N)$ classical bit operations, once $M$ and the circuits are supplied. If a model assigns separate per-sample costs $C_{\rm meas}$ to label measurement and $C_{\rm disc}$ to discarding the output register, the corresponding coordinates are $MC_{\rm meas}$ and $MC_{\rm disc}$; they remain separate from gates and queries. If supplied invariant-factor circuits satisfy $C_P+C_Q=O(\log^2N)$ and the hiding-oracle circuit has $C_F$ gates per evaluation, the ordinary gate count is $O(M(C_F+\log^2N))$, while the named-oracle query count remains $M$ under the same no-access condition. For $N=1$ the algorithm uses zero oracle queries and outputs the trivial common kernel with constant control work. Computing the integer $M$, generating circuit descriptions, and converting the implicit list to subgroup generators are separate costs; no polynomial-time implementation claim is made without those explicit inputs and bounds.

## Facts & Assumptions

**Given:** The common-kernel output encoding, exact sample/reconstruction procedures, and the cost coordinates declared by [[def-qc-circuit-cost-model]] and [[def-qc-coherent-function-oracle]].

[F1] For $N\ge2$ and positive integer input $M$, the reconstruction procedure makes $M$ independent sample calls and outputs their character list, with no generator conversion. For $N=1$ it returns the empty list denoting $G$ immediately, without sample calls or oracle queries. ([[alg-qa-finite-abelian-hidden-subgroup-reconstruction]])

[F2] The character dual of a product is indexed by the product of the cyclic character labels, and a cyclic factor of order $n$ has exactly $n$ character labels. ([[lem-qa-character-dual-of-a-product-factors]], [[lem-qa-cyclic-group-has-n-characters]])

[F3] The cost model keeps named oracle queries, finite-basis gates, uniform-family generation, and classical bit costs as separate coordinates. ([[def-qc-circuit-cost-model]])

[F4] A supplied XOR oracle invocation is one named oracle call; compiling an explicit Boolean function requires reversible-gate costs. ([[def-qc-coherent-function-oracle]])

[F5] For $N\ge2$, one sample invokes the supplied preparation, hiding oracle, product QFT, output-register discard, and character-label measurement once. For $N=1$ it returns the trivial character without these operations. ([[alg-qa-finite-abelian-hidden-subgroup-sample]])

[F6] The group and character labels use fixed-width binary coordinates with $b=\sum_i\lceil\log_2n_i\rceil$ bits. ([[def-qa-finite-abelian-hidden-subgroup-problem]])

[F7] Under the query-count hypothesis in the Statement, the preparation and product-QFT circuits make no access to the hiding oracle; the sample procedure's only such access is its explicit call to $O_F$. ([[alg-qa-finite-abelian-hidden-subgroup-sample]])

## Proof

1.1 For $N\ge2$, the reconstruction algorithm executes exactly $M$ independent sample procedures by [F1]. Under [F7], each sample's explicit call to the hiding oracle is its only hiding-oracle access, so the query coordinate is exactly $M$. If the oracle is compiled from a Boolean circuit, its $M$ evaluations contribute $M C_F$ ordinary gates by [F4]. [F1, F4, F7]

1.2 Still assuming $N\ge2$, write $G=\prod_{i=1}^r\mathbb Z/n_i\mathbb Z$ with each $n_i\ge2$. By [F2] and [F6], each character is represented by one tuple with coordinate $k_i\in\mathbb Z/n_i\mathbb Z$ and its fixed-width binary encoding uses $b=\sum_i\lceil\log_2n_i\rceil\le\log_2N+r\le2\log_2N$ bits, since $r\le\log_2N$. Thus the output list has $Mb=O(M\log_2N)$ bits, and writing those bits takes the same order of classical bit operations. [F2, F6, algebra]

1.3 For $N\ge2$, by [F5], one sample uses one preparation, one QFT, one label measurement, one output-register discard, and one explicit hiding-oracle evaluation. Under [F7], that is one hiding-oracle query per sample. Sequentially composing $M$ samples multiplies each additive per-sample coordinate by $M$: the named-query coordinate is $M$, and the ordinary gate count is $M(C_P+C_Q+C_F)$ when an explicit oracle circuit is used. Measurements and discarding are charged in their own declared coordinates; they are not added to gate or query counts. The cost model [F3] also keeps description generation and the classical computation of $M$ separate. [F1, F3, F4, F5, F7, algebra]

2.1 If $C_P+C_Q=O(\log^2N)$ and the oracle is compiled with $C_F$ gates per evaluation, the gate count in step 1.3 is $O(M(C_F+\log^2N))$; the query and classical-output bounds remain separate. For $N=1$, [F1] gives the immediate empty-list return, denoting $G$, with zero queries and constant control work. [F1, step 1.3, algebra] ∎

## Remarks

The $O(\log^2N)$ premise is conditional on actual exact circuits for the supplied invariant-factor preparation and QFT, including any encoding extension. It does not assert that such circuits exist over an arbitrary fixed finite gate alphabet.
