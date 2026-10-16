---
id: cex-qa-15-off-cube-values-are-unconstrained
kind: counterexample
title: "A symmetrized acceptance polynomial can exceed one between Hamming layers"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-15-acceptance-polynomial
  - def-qa-standard-bit-query
  - def-qc-pauli-matrices
  - lem-qa-15-symmetrization
  - def-qc-instrument-and-conditional-state
justified_by: []
proof_strategy: direct
axiom_use: "No choice; the two-bit query tree and permutation average are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement refuted

False claim: if an acceptance polynomial takes values in $[0,1]$ on the Boolean cube, then its symmetrized univariate polynomial takes values in $[0,1]$ at every real $t$ between $0$ and $N$.

## Facts & Assumptions

**Given:** The two-bit local query model and the finite permutation average of [[lem-qa-15-symmetrization]].

[F1] [[def-qa-15-bit-oracle-query-model]]: a local bit-query algorithm starts independently of the oracle input, can measure with finite instruments, and accepts according to a fixed output subset.

[F2] [[def-qa-standard-bit-query]]: at the one-hot address $e_i$, one XOR query toggles its target by the bit $x_i$.

[F3] [[def-qa-15-acceptance-polynomial]]: the acceptance probability on the Boolean cube is represented by a real polynomial.

[F4] [[lem-qa-15-symmetrization]]: the average over coordinate permutations gives the univariate polynomial matching the average values on each Hamming-weight layer.

[F5] [[def-qc-pauli-matrices]]: in the ordered qubit basis, $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ toggles the computational-basis bit.

## Counterexample


1.1 The Pauli $X$ in [F5] toggles a basis bit and is a fixed unitary because it permutes the two basis vectors. Start at the all-zero address, target, and two-bit output register. In the first round, apply $X$ to the first address bit to set the address to $e_0$, query and measure the target; since it began at zero, the outcome is deterministically $x_0$ by [F2]. If the outcome is $1$, apply $X$ to the first output bit and to the target; if it is $0$, leave both unchanged. This copies the result and resets the target. Apply $X$ to both address bits to change $e_0$ into $e_1$; repeat the query and measurement, copying the second outcome into the second output bit and resetting the target in the same way. Every outcome-controlled operation is a fixed unitary on its branch by [F1] and [F5]; the output is deterministically $(x_0,x_1)$. This finite tree uses exactly two queries. Accept on the fixed subset $\{00,01,10\}$, so the algorithm computes NAND. [given, F1, F2, F5, construct]

2.1 The resulting acceptance polynomial is $p(X_0,X_1)=1-X_0X_1$: its values are $1,1,1,0$ at $00,01,10,11$, respectively, exactly the NAND acceptance law. In particular it lies in $[0,1]$ on the Boolean cube. [step 1.1, F3, algebra]

3.1 Averaging $p$ over the two coordinate permutations leaves its constant term $1$ fixed and sends $X_0X_1$ to itself. By [F4], the associated Hamming-weight polynomial is $q(t)=1-\binom{t}{2}=1-t(t-1)/2$, since it takes values $1,1,0$ at weights $0,1,2$. [step 2.1, F4, algebra]

4.1 At the noninteger point $t=1/2$, $q(1/2)=1-((1/2)(-1/2))/2=9/8>1$. Thus the symmetrized polynomial is not constrained to remain in $[0,1]$ between integer Hamming weights, refuting the claim. [step 3.1, algebra] ∎
