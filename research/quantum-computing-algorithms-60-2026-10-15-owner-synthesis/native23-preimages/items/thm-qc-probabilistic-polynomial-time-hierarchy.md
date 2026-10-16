---
id: thm-qc-probabilistic-polynomial-time-hierarchy
kind: theorem
title: "Probabilistic polynomial time hierarchy"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-uniform-probabilistic-clocked-simulation
  - def-time-and-space-constructible-function
  - def-effective-binary-encoding-and-decoder
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, probabilistic computation and diagonalization background"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For rational $1\le a<b$ with time-constructible polynomial bounds, $\mathrm{PrTIME}(n^a)$ is properly contained in $\mathrm{PrTIME}(n^b)$ in either one fixed declared access profile. The separation proof requires the uniform-in-description interpreter recorded as [[lem-qc-uniform-probabilistic-clocked-simulation]].


## Facts & Assumptions

**Given:** rational $1\le a<b$, the time-constructible polynomial bounds $n^a,n^b$, and one fixed sequential or VMW random-access profile.

[F1] [[lem-qc-unbounded-error-tie-normalization]] removes exact half-probability ties with $O(R(n))$ additional time, then label-swapping complements the normalized language.

[F2] [[def-effective-binary-encoding-and-decoder]] fixes a total binary code and decoder for the machine descriptions used in the diagonal enumeration.

[A1] [[lem-qc-uniform-probabilistic-clocked-simulation]] is the required uniform clocked-simulation bound for $O(\log n)$-bit descriptions. Its present proof does not establish the claimed overhead for variable descriptions, so the diagonal containment below remains conditional.

[F3] [[def-time-and-space-constructible-function]] supplies the clock convention for the rational polynomial bounds.

## Proof

1.1 Choose a rational $a'$ with $a<a'<b$, so $a'>1$. On input $x$ of length $n$, scan the input to determine $n$, parse its initial self-delimiting code $e$, and require $|e|\le c_0\log n$ for a fixed constant $c_0$; reject malformed or overlong descriptions. For a valid code, clock $M_e(x)$ at $T=\lceil n^{a'}\rceil$ transitions, treating timeout as rejection. Normalize ties by [F1] and swap accept/reject labels. The diagonal machine accepts with probability greater than $1/2$ exactly when the normalized clocked machine for $e$ has probability below $1/2$. The scan, code and clock are well-defined by [F2,F3]. [F1, F2, F3, given, construct]

1.2 By [A1], the clocked simulation of every active $O(\log n)$-bit description uses $O(T\,\mathrm{polylog}\,n)$ time and preserves its fair-bit distribution. Reading the input length costs $O(n)$; code initialization costs $O(\log n)$; and the tie gadget costs $O(T)$. Since $a'>1$ and $a'<b$, their total is $O(n^{a'}\,\mathrm{polylog}\,n)=o(n^b)$. Thus the diagonal language belongs to $\mathrm{PrTIME}(n^b)$ provided [A1] is proved. [A1, F1, F2, F3, step 1.1, algebra]

1.3 If some fixed $M_e$ decided the diagonal language in $O(n^a)$ time, take arbitrarily long strings beginning with its fixed code $e$. For all sufficiently large such lengths, $T=n^{a'}$ exceeds the running time of $M_e$, so the clocked computation in step 1.1 is exactly $M_e$'s computation. Tie normalization and label swapping then make the diagonal machine accept exactly on inputs where $M_e$ rejects, contradicting that $M_e$ decides the same language. Thus the diagonal language is not in $\mathrm{PrTIME}(n^a)$. The separation proof remains conditional on [A1]. [F1, F2, A1, step 1.1, step 1.2, contradiction] ∎
