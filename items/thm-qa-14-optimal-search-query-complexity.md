---
id: thm-qa-14-optimal-search-query-complexity
kind: theorem
title: Bounded-error unstructured search query complexity is Theta of square root N
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - thm-qa-14-bbbv-search-lower-bound
  - thm-qa-14-grover-search-upper-success
  - thm-qa-14-grover-search-upper-query-cost
  - alg-qa-14-one-marked-search-with-verification
  - def-qa-14-search-promise
  - def-qa-quantum-query-complexity
proof_strategy: direct
axiom_use: None; the result combines the finite query bounds already proved in this page.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): quantum query lower-bound context."
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
      locator: "§2, Theorem 2 (PDF pp.6–8): amplitude-amplification upper bound."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§19.1, printed pp.87–89 (PDF pp.96–98): unstructured search complexity."
---

## Statement

Under the empty-versus-one-marked promise [[def-qa-14-search-promise]] and standard bit-query cost, bounded-error decision and finding each have worst-case query complexity $\Theta(\sqrt N)$.

## Facts & Assumptions

**Given:** The direct bit-query lower bound and the verified fixed-one Grover upper-bound procedure, with query costs counted as in the promise model.

[F1] [[thm-qa-14-bbbv-search-lower-bound]]: both decision and finding require at least $\sqrt N/24$ standard bit queries.

[F2] [[thm-qa-14-grover-search-upper-success]]: the fixed-one procedure returns a verified marked item with probability at least $1-1/N$ on each one-mark input and returns no on the empty input.

[F3] [[thm-qa-14-grover-search-upper-query-cost]]: one fixed-one run uses at most $3\sqrt{2N}$ standard bit queries.

[F4] [[def-qa-14-search-promise]]: the promise consists only of $0^N$ and the singleton inputs, and a verified coordinate decides yes.

[F5] [[def-qa-quantum-query-complexity]]: worst-case query cost is the maximum over promised inputs and execution branches.

## Proof

1.1 The lower bound for both tasks is [F1], so each complexity is at least a positive constant times $\sqrt N$. [F1]

1.2 For $N\ge3$, the one-run success probability in [F2] is at least $1-1/N\ge2/3$. For $N=1$, [F2] gives certainty. For $N=2$, run the fixed-one procedure twice with fresh registers and independent measurements, returning a verified candidate if either run verifies one. Each run has success probability at least $1/2$ by [F2]; conditional independence of the fresh runs gives failure probability at most $(1-1/2)^2=1/4$, hence success at least $3/4$. [F2, F4, algebra]

2.1 Verification prevents a false yes on $0^N$, by [F2] and [F4]. On each singleton input the procedures in step 1.2 return its marked coordinate with probability at least $2/3$. They are therefore bounded-error solvers for both the decision and finding tasks. The two-run case uses at most twice the cost in [F3], and the other cases use at most one run, so [F5] bounds their worst-case query cost by $6\sqrt{2N}=O(\sqrt N)$. [F2, F3, F4, F5, step 1.2, algebra]

3.1 Combining steps 1.1 and 2.1 gives matching positive constant lower and upper multiples of $\sqrt N$ for both decision and finding. All statements concern standard bit queries; nonoracle gate and preprocessing costs remain separate. [F1, step 1.1, step 2.1, algebra] ∎
