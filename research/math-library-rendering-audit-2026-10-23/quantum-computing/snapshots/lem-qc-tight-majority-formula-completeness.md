---
id: lem-qc-tight-majority-formula-completeness
kind: lemma
title: "Tight majority formula completeness"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-logspace-uniform-cook-formula-encoding
  - lem-qc-basis-query-time-normalization
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, native quantum operations, Section 2.3"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, proof of Theorem 7"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Cook, Short propositional formulas represent nondeterministic computations"
      url: https://www.ccs.neu.edu/home/viola/classes/papers/Cook1988.pdf
    - title: "Pippenger and Fischer, Relations among complexity measures"
      url: https://www.khoury.northeastern.edu/~viola/classes/papers/PippengerF-Oblivious.pdf
proof_strategy: direct
---

## Statement

For either fixed profile $P\in\{\mathrm{seq},\mathrm{basis}\}$, every $\mathrm{LCH}_{P,1}$ language reduces to MajSAT, and every $\mathrm{LCH}_{P,2}$ language reduces to MajMajSAT, with output length n log^O(1)n and each output bit computable in log^O(1)n time and O(log n) space, in the explicit input/machine/formula encodings. Basis means the derived full-basis restriction; isolated output-bit generation has direct source-input bit access, and the reduction also admits sequential on-demand generation with polylogarithmic overhead per formula-head transition.


## Facts & Assumptions

**Given:** one fixed sequential or derived-basis LCH profile, a fixed LCH₁ or LCH₂ machine, and its exact polynomially bounded fixed-length fair-bit strings. Use a time-constructible clock $R(n)\ge1$ and include ignored suffix bits; a machine using no random bits is padded by one ignored bit.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] fixes strict machine majority and at-least-half formula majority; [[lem-qc-unbounded-error-tie-normalization]] preserves the strict decision and removes all ties with linear overhead.

[F2] [[lem-qc-logspace-uniform-cook-formula-encoding]] gives the unique-witness near-linear formula encoding in both profiles, with direct bit generation and ordered source-constant clauses for sequential on-demand generation.

[F3] The gap-count construction for the transcript predicate is proved in steps 1.2–1.3 by a fixed number of explicit path-count compositions.

[F4] [[lem-qc-basis-query-time-normalization]] gives a quasilinear index-only simulation for the fixed basis machines here. Mapping its short input indices to a subword of a transcript or paired input adds only polylogarithmic overhead. The sequential case uses the ordinary fixed-tape simulation.

## Proof


1.1 For $L\in\mathrm{LCH}_{P,1}$, first tie-normalize its machine $M$ by [F1], then fix a linear integer clock $R(n)\ge1$ for the resulting machine. Let $A$ be its accepting count among the $2^{R(n)}$ fair strings $y$, including ignored suffixes. By [F4] its deterministic branch predicate has $n\log^{O(1)}n$ time: source choices read $y$ sequentially, and normalized short input indices map to the $x$ subword with charged offset arithmetic. Apply [F2], obtaining $F_x(y,z)$ with exactly one $z$ per accepting $y$ and none per rejecting $y$. Put $k=|z|$ and define $\psi_x=(v\wedge F_x(y,z))\vee(\neg v\wedge(\bigvee_i z_i\vee w))$. For fixed $y$, the $v=0$ branch has $2^{k+1}-1$ satisfying $(z,w)$ assignments, while $v=1$ adds two exactly when $y$ accepts. Each block is therefore one above or below half, and the total is at least half exactly when $A\ge2^{R(n)-1}$. The source has no tie, so this is its strict-majority decision. This same gadget applies to a quasilinear clock whenever needed below, with quasilinear output length. [F1, F2, F4, given, construct, algebra]

1.2 For $L\in\mathrm{LCH}_{P,2}$, take its linear-time oracle machine and tie-normalize the first-level oracle decider. For query $q_i$, let $R_i=O(|q_i|+1)\ge1$ clock the chosen yes/no oracle machine, with ignored fair suffixes. A proposed answer is correct precisely when its tie-free yes/no machine has more than $2^{R_i-1}$ accepting strings. Then exactly one accepting string $w_i$ has exactly $2^{R_i-1}$ accepting strings lexicographically before it. Serialize all proposed queries, answers and witnesses with lengths and canonical zero padding; its length is $O(n)$ because $\sum_i(|q_i|+1)=O(n)$. On a record of length $N$, put $r_i=a_i-2^{R_i-1}$, where $a_i$ counts accepting strings before $w_i$. Let $\mathrm{bad}$ indicate invalid syntax and $\mathrm{invalid}_i$ indicate that the chosen witness path fails to accept. Then $G=\mathrm{bad}+\sum_i(r_i^2+\mathrm{invalid}_i)$ is nonnegative and is zero exactly when every answer has its unique rank witness. These are explicit differences of path counts: choose $i$ nondeterministically, assign zero gap to invalid padded indices, and use independent strings for products; expand $(a-b)^2=a^2+b^2-2ab$. A fixed number of these sums/products also gives $h=1-2G^2=A-B$, positive exactly when $G=0$. Deterministic syntax/witness tests give integer indicator counts; invalid syntax skips the remaining tests and sets $G=1$. Normalize each fixed basis component by [F4] before using it on a query subword; it then has no native subinput query, and short-offset access costs only polylogarithmic time. These count constructions thus take $N\log^{O(1)}N$ time, with no nondeterministic choices during deterministic interpreter work. Choose one common quasilinear choice bound $P$ and require unused suffix bits zero on accepting paths, preserving counts $A,B$ among $2^P$ choice strings. A leading fair bit selects $A$ on branch zero and the complement of $B$ on branch one. There are $2^P+(A-B)$ accepting choice strings out of $2^{P+1}$, so the transcript-validity language $C=\{h>0\}$ has a matching-profile quasilinear probabilistic decider. The original rank strings still have total linear length. [F1, F3, F4, given, construct, algebra]

2.1 Normalize the original outer oracle machine by [F1] before this construction. Keep its original fixed-length fair-bit string $p$ separate from a guessed fixed-length transcript record $t$, whose unused suffix is canonically zero. Simulate the original machine on $p$ using the proposed answers in $t$, and record whether its queries match the listed queries and its final outcome accepts. Make a single final query to $C$ containing the record and this flag; extend $C$ to reject whenever the flag fails. There is exactly one correct answer/rank-witness record for each $p$ by step 1.2. Consequently exactly one $t$ gives a YES query when the original path accepts and none do when it rejects. The number of successful pairs $(p,t)$ is the original accepting-path count. No preservation of the acceptance probability after guessing $t$ is asserted; the next steps restore its threshold explicitly. [step 1.2, F1, construct, algebra]

3.1 Let $q(p,t)$ be the deterministic final query from step 2.1, padded to fixed length $L$. Apply [F2] to its quasilinear-time computation using [F4] to obtain $D_x(p,t,q,z)$ with exactly one satisfying $(q,z)$ extension for every pair $(p,t)$. Apply the same unique-witness/majority gadget of step 1.1 with the quasilinear clock for $C$ on the variable input $q$, retaining $q$ as free Boolean variables, to obtain $\Psi_C(q,u)$ whose inner at-least-half test is true exactly when $q\in C$. Form the outer matrix $\Phi_x=(v\wedge D_x(p,t,q,z)\wedge\Psi_C(q,u))\vee(\neg v\wedge(\bigvee_i t_i\vee\bigvee_j q_j\vee\bigvee_k z_k\vee w))$. Here $w$ is one outer padding bit; the inner block $u$ has a fixed length independent of the value of $q$. All deterministic computations have quasilinear time in their input length in the selected profile, so [F2] gives total formula size $n\log^{O(1)}n$, logarithmic workspace and the claimed bit-generation and sequential-streaming interfaces. [F2, F4, step 1.1, step 2.1, construct]

4.1 Fix the original fair string $p$, and put $H=|t|$, $k=|z|$. Among $v=0$ outer assignments, the fallback is false at exactly one $(t,q,z,w)$ tuple, so $2^{H+L+k+1}-1$ assignments give a residual inner formula true on at least half of $u$. Among $v=1$ assignments, $D_x$ has exactly one $(q,z)$ extension for each $t$, and precisely one $t$ has $q(p,t)\in C$ if and only if the original path accepts. Its two choices of $w$ contribute two additional successful outer assignments. Thus each fixed-$p$ block contributes one below half on a rejecting original path and one above half on an accepting original path. Summing the equal-sized $p$ blocks makes outer at-least-half true exactly when at least half of the original fair strings accept; outer tie normalization in step 2.1 makes this the original strict-majority language. [F1, step 2.1, step 3.1, algebra]

5.1 Step 1.1 proves the first-level reduction, and step 1.2 and step 2.1 and step 3.1 and step 4.1 prove the second-level reduction in either fixed profile. All added blocks have $O(n)$ length before the near-linear formula encoding, and only a fixed number of these encodings are composed. The explicit clause order of [F2] preserves the sequential streaming property; the direct-input bit generator has the claimed polylogarithmic time and logarithmic workspace. This proves both reductions. [F2, step 1.1, step 1.2, step 3.1, step 4.1] ∎

