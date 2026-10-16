---
id: lem-qc-tight-majority-formula-completeness
kind: lemma
title: "Tight majority formula completeness"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-logspace-uniform-cook-formula-encoding
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, proof of Theorem 7"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Cook, Short propositional formulas represent nondeterministic computations"
      url: https://www.ccs.neu.edu/home/viola/classes/papers/Cook1988.pdf
    - title: "Pippenger and Fischer, Relations among complexity measures"
      url: https://www.khoury.northeastern.edu/~viola/classes/papers/PippengerF-Oblivious.pdf
proof_strategy: direct
---

## Statement

Every LCH1 language reduces to MajSAT, and every LCH2 language reduces to MajMajSAT, with output length n log^O(1)n and each output bit computable in log^O(1)n time and O(log n) space, in the stated input/machine/formula encodings.


## Facts & Assumptions

**Given:** the sequential-input LCH definitions, a fixed LCH₁ or LCH₂ machine, and its exact polynomially bounded fixed-length fair-bit strings. Use a time-constructible clock $R(n)\ge1$ and include ignored suffix bits; a machine using no random bits is padded by one ignored bit.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] fixes strict machine majority and at-least-half formula majority; [[lem-qc-unbounded-error-tie-normalization]] preserves the strict decision and removes all ties with linear overhead.

[A1] [[lem-qc-logspace-uniform-cook-formula-encoding]] is the planned unique-witness formula for a deterministic computation, with the stated near-linear size, bit-generation and space bounds. Its Pippenger–Fischer simulation proof remains unresolved.

[A2] The gap-count construction for the LCH₂ transcript predicate is described and proved directly in steps 1.2–1.3; it uses only a fixed number of linear-time path-count compositions, not a polynomial-time closure theorem.

## Proof

1.1 For L∈LCH₁, use an explicit clock $R(n)\ge1$ and its $R(n)$ fair-bit string, including unused suffix bits; if the original machine uses no random bits, it ignores a padded bit. Let A be its accepting path count. Apply [A1] to the deterministic predicate “M accepts on x with random string y,” obtaining F_x(y,z) with exactly one z per accepting y and no z for a rejecting y; put k=|z|. Define ψ_x(y,z,v,w)=(v∧F_x(y,z))∨(¬v∧((∨_i z_i)∨w)), with one padding bit w. For each fixed y, the v=0 branch contributes 2^{k+1}−1 satisfying assignments of (z,w), while the v=1 branch contributes 2 iff y accepts. Therefore exactly A of the 2^{R(n)} blocks contribute one above half and the others one below half, so ψ has at least half satisfying assignments iff A≥2^{R(n)−1}; tie normalization makes this equivalent to M's strict-majority decision. [F1, A1, given, algebra]

1.2 For L∈LCH₂, let its O(N)-time oracle machine use an LCH₁ oracle C₀. For every query q, use the explicit clock $R(|q|)=\max(T(|q|),1)$ for its C₀ decider, including ignored suffix bits. Replace each query q by a proposed answer bit and an R(|q|)-bit path w for the corresponding tie-free machine: use the original machine for answer yes and its complemented machine for answer no. The condition that w accepts and exactly $2^{R(|q|)-1}$ accepting paths precede it in lexicographic order holds for exactly one w iff the proposed answer is correct. Encode the adaptive transcript canonically with fixed zero padding. For each syntactically valid record and selected query index i, let r_i be the number of earlier accepting paths minus $2^{R(|q|)-1}$; its two path counts take O(N) time because the serialized query lengths sum to O(N) and the extra padded bit per empty query is constant. A nondeterministic index chooses one i, while padded invalid indices contribute zero, so sums over i add their Gap counts exactly. Products use pairs of independent path strings. Invalid syntax and a witness path that fails to accept contribute nonnegative indicator penalties. Hence G=bad+Σ_i(r_i²+invalid_i) is a nonnegative integer difference of two path counts in O(N) time, and G=0 exactly for a syntactically valid query/answer/witness list in which each proposed answer has its unique boundary-rank witness. Expanding $r_i^2=(a_i-b_i)^2=a_i^2+b_i^2-2a_ib_i$ shows directly that squares and products are differences of #P path counts; a fixed number of these compositions still takes O(N) time. Therefore h=1−2G² is an integer Gap with h>0 iff G=0. If h=A−B for #P counts A,B, pad both path machines to exactly 2^P binary choice strings, branch on one fair bit, accept A on branch 0 and reject exactly the accepting B strings on branch 1. The total accepting count is A+(2^P−B)=2^P+h out of 2^{P+1}, so the strict-majority machine accepts exactly when h>0. Thus the transcript-validity language C={h>0} lies in PrTIME(N). [F1, A2, given, algebra]

1.3 Convert the original adaptive oracle computation to a one-query-at-the-end computation N^C. For each original random string p, N guesses one fixed-length transcript record, simulates the original machine on p using the proposed answers, and checks that every generated query matches the corresponding record entry. It records one Boolean flag for path consistency and final acceptance, then makes its single query to C at the end and accepts iff C accepts the record and the flag is true. There is exactly one correct answer/rank-witness record for each p by step 1.2; it passes the consistency check exactly when it is the original oracle path. Thus the accepting-path count of N equals that of the original machine. [step 1.2, F1, construct, algebra]

2.1 For the one-query machine N, let p be its fixed-length random string and let q(p) be its deterministic query, padded to a fixed length L. Apply [A1] to the query computation to get a formula D_x(p,q,z) with exactly one satisfying (q,z) extension for each p. Apply the construction of step 1.1 uniformly to the fixed linear-time predicate C on q, retaining q as Boolean input variables, to get Ψ_C(q,u) whose at-least-half test over the fixed inner block u holds exactly when q∈C. Form the outer matrix $\Phi_x=(v\wedge D_x(p,q,z)\wedge\Psi_C(q,u))\;\vee\;(\neg v\wedge(\bigvee_i q_i\vee\bigvee_j z_j\vee w))$. Here w is one outer padding bit, and the inner block u is fixed independently of q because q is padded to length L. The formula has n log^O(1)n size with each bit generated in log^O(1)n time and O(log n) space, conditional on [A1]'s uniformity bound. [A1, step 1.1, construct]

2.2 Fix p and let a_p be 1 iff its unique query q(p) belongs to C. Among assignments with v=0, the fallback is false for exactly one (q,z,w) tuple, so it contributes 2^{L+k+1}−1 outer assignments whose residual formula is true on at least half of u. With v=1, D_x has exactly one satisfying (q,z); its two w values contribute 2 further true outer assignments iff Ψ_C(q,u) has a majority, that is, iff a_p=1. The total per-p block is therefore one below half when a_p=0 and one above half when a_p=1. Summing the equal-sized p-blocks makes the outer at-least-half threshold hold iff N accepts on at least half its random strings; tie normalization makes this exactly its strict-majority language. [F1, step 2.1, algebra]

2.3 The LCH₁ reduction in 1.1 and LCH₂ reduction in 1.2–2.2 have the stated bounds conditional on [A1]. The exact Pippenger–Fischer uniform near-linear formula simulation required by [A1] has not been reproved locally, so both reductions remain escalated. [A1, step 1.1, step 1.2, step 2.2]
