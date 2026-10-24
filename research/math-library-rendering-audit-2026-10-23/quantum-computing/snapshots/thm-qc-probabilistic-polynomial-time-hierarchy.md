---
id: thm-qc-probabilistic-polynomial-time-hierarchy
kind: theorem
title: "Probabilistic polynomial time hierarchy"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-uniform-probabilistic-clocked-simulation
  - lem-qc-basis-query-time-normalization
  - def-time-and-space-constructible-function
  - def-effective-binary-encoding-and-decoder
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, final published model"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, probabilistic computation and diagonalization background"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For rational $1\le a<b$ with time-constructible polynomial bounds, $\mathrm{PrTIME}(n^a)$ is properly contained in $\mathrm{PrTIME}(n^b)$ in either one fixed declared access profile $P\in\{\mathrm{seq},\mathrm{basis}\}$, with basis denoting the explicitly derived full-basis comparison model. The separation proof uses the explicit uniform interpreters [[lem-qc-uniform-probabilistic-clocked-simulation]] and [[lem-qc-basis-query-time-normalization]].


## Facts & Assumptions

**Given:** rational $1\le a<b$, the time-constructible polynomial bounds $n^a,n^b$, and one fixed sequential or derived full-basis random-access profile.

[F1] [[lem-qc-unbounded-error-tie-normalization]] removes exact half-probability ties with $O(R(n))$ additional time, then label-swapping complements the normalized language.

[F2] [[def-effective-binary-encoding-and-decoder]] fixes a total binary code and decoder for the machine descriptions used in the diagonal enumeration.

[F4] [[lem-qc-uniform-probabilistic-clocked-simulation]] supplies the sequential interpreter and [[lem-qc-basis-query-time-normalization]] supplies the derived-basis interpreter via an index-only target, with polynomial-clock overhead $O(T\,\mathrm{polylog}\,n)$ for $O(\log n)$-bit explicit transition-table descriptions. Use that explicit prefix-free code here, rather than an arbitrary effective decoder.

[F3] [[def-time-and-space-constructible-function]] supplies the clock convention for the rational polynomial bounds.

## Proof


1.1 Choose a rational $a'$ with $a<a'<b$, so $a'>1$. On input $x$ of length $n$, scan the input to determine $n$, parse its initial self-delimiting code $e$, and require $|e|\le c_0\log n$ for a fixed constant $c_0$; reject malformed or overlong descriptions. For a valid code, clock $M_e(x)$ at $T=\lceil n^{a'}\rceil$ transitions, treating timeout as rejection. Normalize ties by [F1] and swap accept/reject labels. The diagonal machine accepts with probability greater than $1/2$ exactly when the normalized clocked machine for $e$ has probability below $1/2$. The explicit code and bounded parser are supplied by [F4], with effectiveness and clock conventions in [F2,F3]. The time-$T$ source computation has probability denominator dividing $2^T$; the selector of [F1] uses this source clock, while the interpreter merely implements its exact probability. [F1, F2, F3, F4, given, construct]

2.1 By [F4], the clocked simulation of every active $O(\log n)$-bit description uses $O(T\,\mathrm{polylog}\,n)$ time and preserves its fair-bit distribution. Reading the input length costs $O(n)$; code initialization costs $O(\log n)$; and the tie gadget costs $O(T)$. Since $a'>1$ and $a'<b$, their total is $O(n^{a'}\,\mathrm{polylog}\,n)=o(n^b)$. Thus the diagonal language belongs to $\mathrm{PrTIME}(n^b)$ by its polynomial-clock specialization. [F4, F1, F2, F3, step 1.1, algebra]

3.1 If some fixed $M_e$ decided the diagonal language in $O(n^a)$ time, take arbitrarily long strings beginning with its fixed code $e$. For all sufficiently large such lengths, $T=n^{a'}$ exceeds the running time of $M_e$, so the clocked computation in step 1.1 is exactly $M_e$'s computation. Tie normalization and label swapping then make the diagonal machine accept exactly on inputs where $M_e$ rejects, contradicting that $M_e$ decides the same language. Thus the diagonal language is not in $\mathrm{PrTIME}(n^a)$. The reverse non-strict inclusion follows by running the faster machine unchanged under the larger time bound, so the containment is proper in the selected profile. [F1, F2, F4, step 1.1, step 2.1, contradiction] ∎

