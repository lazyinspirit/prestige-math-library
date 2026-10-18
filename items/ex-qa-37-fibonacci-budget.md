---
id: ex-qa-37-fibonacci-budget
kind: example
title: "Fibonacci SK level and symbolic gate budget"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 16
deps:
  - thm-qa-37-su2-compiler-error-length
  - def-qa-37-resource-cost-model
  - thm-qa-37-arbitrary-n-encoded-circuit
  - lem-qa-37-product-error
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
justified_by: []
axiom_use: "The numerical recurrence is choice-free; existence of compiled QSD factors inherits exactly ACω from the arbitrary-n encoding theorem."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–4, recursion, level and word-length estimates, PDF pp. 2–10."
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406176
      locator: "Theorem 13, exact QSD decomposition, PDF pp. 9–13."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, finite-gate approximation, PDF pp. 26–29."
---

## Example

Take the fixed SK recurrence with $\eta_0=2^{-13}$ and requested tolerance
$\varepsilon=2^{-14}$. This is a symbolic certificate example: the finite
base-net list and its maximum length $L_0$ are supplied compiler data, not
computed here. The exact recurrence gives $J=2$ and output length at most
$25L_0$. For a finite QSD factor list of size $M>0$ on $n\ge1$ qubits,
use a triple code with nonzero spectator space and assume $\mathrm{AC}_\omega$
as in [[thm-qa-37-arbitrary-n-encoded-circuit]]. Allocate each factor
$\delta=\min\{\varepsilon/(2M),\eta_0/2\}$; then the sum of the factor
errors is at most $\varepsilon/2$, relative to the recorded product phase.
The two-qubit B6 search, measurement
outcomes, preparation and ancilla use, Hamiltonian evolution, and phase
correction are separate ledger coordinates. The supplied base-net certificate
is fixed input data counted in $L_{\rm in}$; this example does not compute it.
No B6 search-length bound follows from the SK calculation.

## Facts & Assumptions

**Given:** The SK recurrence and length estimate, the compiler cost ledger,
and a finite exact QSD factor list on an admissible triple code; assume
$\mathrm{AC}_\omega$ for the existence of the compiled factors.

[F1] The error recurrence and word-length estimate are
$\eta_{j+1}=64\eta_j^{3/2}$ and $L_j\le L_0 5^j$.
[[thm-qa-37-su2-compiler-error-length]]

[F2] The per-operation costs are separate coordinates; an absent bound is not
zero. [[def-qa-37-resource-cost-model]]

[F3] The exact QSD supplies a finite factorization into one-qubit gates and
CNOTs. [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]]

[F4] Operator error in a finite product of unitary factors is bounded by the sum of factor errors. [[lem-qa-37-product-error]]

[F5] Under $\mathrm{AC}_\omega$, every logical $n$-qubit unitary on the
triple code has a physical categorical braid approximation, with logical
block error and leakage amplitude each at most any prescribed positive
tolerance, relative to a recorded unit scalar.
[[thm-qa-37-arbitrary-n-encoded-circuit]]

## Verification

1.1 Compute $\eta_1=64(2^{-13})^{3/2}=2^6 2^{-39/2}=2^{-27/2}>2^{-14}$, while $\eta_2=64(2^{-27/2})^{3/2}=2^6 2^{-81/4}=2^{-57/4}<2^{-14}$. Therefore $J=2$ is the least level meeting the tolerance, and [F1] gives $L_2\le L_0 5^2=25L_0$. [F1, given, algebra]

1.2 Write the QSD factors from [F3] as $G_1,\ldots,G_M$, acting on the full logical register. Let $E$ be the code isometry and $P=EE^*$. For each factor, apply [F5] with tolerance $\delta/2$ to obtain a unitary braid operator $B_j$ and a unit scalar $\omega_j$. Put $\widehat G_j=\omega_j(G_j\otimes I_{\rm spectator})$. The code and leakage components of $B_jE-E\widehat G_j$ each have norm at most $\delta/2$: they are $E(E^*B_jE-\widehat G_j)$ and $(I-P)B_jE$. Their sum therefore has norm at most $\delta$. [F3, F5, given, algebra]

2.1 The telescoping expansion underlying [F4] applies with the isometry inserted: $$B_M\cdots B_1E-E\widehat G_M\cdots\widehat G_1=\sum_{j=1}^M B_M\cdots B_{j+1}(B_jE-E\widehat G_j)\widehat G_{j-1}\cdots\widehat G_1.$$ Every outer factor is unitary, so step 1.2 and the triangle inequality bound its norm by $M\delta$. This also bounds logical error and leakage, since compression and orthogonal projection do not increase norm; the target product carries the recorded phase $\prod_j\omega_j$. The minimum defining $\delta$ gives $M\delta\le\varepsilon/2$, including equality of its two candidates. By [F2], SK length, B6 search work, measurement and phase correction remain separate costs. The supplied $L_0$ and the numerical level calculation give no B6 length bound. [F2, F4, step 1.1, step 1.2, algebra] ∎
