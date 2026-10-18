---
id: ex-na-degenerate-local-ground-state-tie-break
kind: example
title: "A degenerate local ground eigenspace has a deterministic tie choice"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
dependency_level: 5
---

## Example

For two spin-$1/2$ sites let $Z=\operatorname{diag}(1,-1)$ and $H=Z\otimes Z$. Use the initial state $|00\rangle$ with rank-one open-boundary TT cores $G_k(1,i_k,1)=1_{\{i_k=1\}}$ for $k=1,2$, and run one width-two sweep without rank caps. The two-site ground eigenspace is $\operatorname{span}\{|01\rangle,|10\rangle\}$. The deterministic standard-basis projection rule in [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]] selects $|01\rangle$.

## Facts & Assumptions

**Given:** The ordered two-site computational basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, the initial $|00\rangle$ core list and width-two no-cap sweep specified above, and the Hamiltonian $Z\otimes Z$.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: a finite Hermitian Hamiltonian acts on the finite tensor-array coefficient space.

[F2] [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]]: among lowest eigenvectors, the rule projects standard basis vectors in order and takes the first nonzero projection.

[F3] [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]]: the exact local solve uses that deterministic ground-vector rule.

## Verification


1.1 In the ordered basis, $H=\operatorname{diag}(1,-1,-1,1)$. Its least eigenvalue is $-1$ and its eigenspace is exactly $\operatorname{span}\{|01\rangle,|10\rangle\}$. [given, F1, algebra]

2.1 The orthogonal projection onto that eigenspace sends $|00\rangle$ to zero and sends $|01\rangle$ to itself. Hence the first standard basis vector with nonzero projection is $|01\rangle$; it is already unit length and has positive first nonzero coordinate. The local solve therefore returns $|01\rangle$ deterministically, with energy $-1$. [F2, F3, step 1.1, algebra] ∎
