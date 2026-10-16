---
id: lem-qa-14-coherent-query-normal-form
kind: lemma
title: Coherent normal form for finite quantum query algorithms
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-quantum-query-algorithm
  - def-qa-finite-branch-output-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-kraus-choi-equivalence
  - thm-qc-trace-preserving-kraus-normalization
  - def-qc-kraus-representation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qa-standard-bit-query
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-toffoli-and-fredkin
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
proof_strategy: direct
axiom_use: None; all instruments, registers, outcome sets, and basis completions are finite, so the construction uses no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§11.1, printed pp.89–90 (PDF pp.101–102): the pure-state query circuit with input-independent unitaries."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–114 (PDF pp.119–123): the unitary query-state model and its query steps."
    - title: "John Watrous, The Theory of Quantum Information (2018 author-hosted draft)"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§2.2.2: finite Kraus representations and isometric dilations of finite-dimensional instruments."
---

## Statement

For every $N\ge1$ and $x\in\{0,1\}^N$, let the address register have ordered basis $|0\rangle,\ldots,|N-1\rangle$, let the response register be one qubit, and let the standard Boolean XOR query act by
$$O_x|j,b,w\rangle=|j,b\oplus x_{j+1},w\rangle\qquad(0\le j<N).$$
Fix an integer $T\ge0$, a finite register space, and a finite-branch quantum query algorithm whose every execution branch makes at most $T$ calls to this oracle. There is a finite pure-state unitary circuit, with input-independent unitaries between exactly $T$ ordinary oracle calls and a final output measurement, that has the same output distribution. The construction adds only finite ancillas and nonoracle gates; it does not require controlled access to the oracle and makes no claim that the transformed family is uniformly generated or has bounded gate cost.

## Facts & Assumptions

**Given:** A finite-branch quantum query algorithm on a nonzero finite register, with finite outcome sets, input-independent nonoracle operations, and at most $T$ standard Boolean XOR queries on every branch.

[F1] [[def-qa-quantum-query-algorithm]]: the algorithm has a finite execution tree of unitary and instrument nodes, and every branch uses at most $T$ designated oracle calls.

[F2] [[def-qa-finite-branch-output-law]]: an instrument branch has its specified outcome weight and conditional state; the output law is the finite sum over terminal histories.

[F3] [[def-qc-instrument-and-conditional-state]]: each finite instrument consists of completely positive outcome maps whose traces sum to the input trace.

[F4] [[thm-qc-kraus-choi-equivalence]]: every finite-dimensional completely positive map has a finite Kraus representation.

[F5] [[def-qc-kraus-representation]]: a finite Kraus family represents $\Phi$ by $\Phi(X)=\sum_jK_jXK_j^\dagger$ for every operator $X$.

[F6] [[thm-qc-trace-preserving-kraus-normalization]]: a trace-preserving map with finite Kraus operators $K_j$ satisfies $\sum_j K_j^\dagger K_j=I$.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle K\psi,\eta\rangle=\langle\psi,K^\dagger\eta\rangle$.

[F8] The oracle action in the Statement is an involution on the finite product basis, hence a unitary; it preserves each address and acts on the response there as either $I$ or $X$. Both actions fix $|+\rangle$. When $N=2^n$, this is the standard bit query of [[def-qa-standard-bit-query]] under the big-endian address encoding.

[F9] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: the declared finite register has its ordered orthonormal computational basis.

[F10] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F11] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: the Hadamard gate sends $|0\rangle$ to $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$.

[F12] [[def-qc-toffoli-and-fredkin]]: a Fredkin gate swaps its two target wires exactly when its control wire is $1$.

## Proof

1.1 At an instrument node with outcome maps $(\mathcal I_a)_{a\in\Omega}$, choose a finite Kraus family $(K_{a,r})_r$ for each $\mathcal I_a$ by [F3]–[F4]. The formula in [F5] shows that their union is a Kraus family for the total map $\Phi=\sum_a\mathcal I_a$. The trace identity in [F3] makes $\Phi$ trace-preserving, so [F6] gives $\sum_{a,r}K_{a,r}^\dagger K_{a,r}=I$. [F3, F4, F5, F6, choose]

1.2 Label every node of the finite execution tree by the number of oracle calls already made on its path. For each $t<T$, order the finitely many nonoracle nodes in that query-count slice by tree depth, execute each node on histories with its observed-outcome prefix, and use the identity on histories already at their next query or terminal node. This places every next query at one common slot while preserving each branch's transitions; histories that have terminated are inactive in this and every later slot. The retained outcome history identifies the branches that still make a query. On every inactive branch, conditionally swap the caller's entire $N$-level address register with a fresh register of the same dimension initialized to $|0\rangle$, and swap the caller's response qubit with a fresh qubit initialized to $|+\rangle$, prepared using $H$ from [F11]. The address-register swap is the finite basis permutation exchanging the two ordered register factors; controlling it on the retained history gives a finite input-independent unitary. After the ordinary oracle call, reverse both conditional swaps. On an inactive branch the oracle acts on $|0\rangle|+\rangle$ as either $I$ or $X$ on the response, both of which fix $|+\rangle$; the caller's address and response, including any entanglement with work, are restored. Active branches are unchanged, so this pads the slot without controlled oracle access. [given, F1, F8, F9, F11, F12, algebra]

2.1 Add a finite label register $L$ with orthonormal basis $|a,r\rangle_L$ and use the same factor order throughout, defining $V:H\to L\otimes H$ by $V\psi=\sum_{a,r}|a,r\rangle_L\otimes K_{a,r}\psi$. Orthonormality [F9], the adjoint identity [F7], and step 1.1 give $\langle V\psi,V\phi\rangle=\sum_{a,r}\langle K_{a,r}\psi,K_{a,r}\phi\rangle=\langle\psi,\phi\rangle$; hence $V$ is an isometry. For any density operator $\rho$, projecting the label onto the outcome subspace spanned by $\{|a,r\rangle_L:r\}$ and discarding the label leaves $\sum_rK_{a,r}\rho K_{a,r}^\dagger$; orthogonality removes all unequal-label cross terms. By [F5] this is exactly $\mathcal I_a(\rho)$. [F5, F7, F9, step 1.1, algebra]

3.1 In the common codomain $L\otimes H$, let $J\psi=|0\rangle_L\otimes\psi$ be the clean-ancilla embedding. The images under $J$ and $V$ of one orthonormal basis of $H$ are orthonormal lists of the same finite length in this same finite-dimensional space. Choose a finite spanning basis by [F10]; process it in order, subtracting its projections onto the current list and appending the normalized nonzero remainder. This finite Gram–Schmidt procedure completes each list to an orthonormal basis. Mapping the first completed basis to the second defines a unitary $U$ with $UJ=V$, so the instrument node is realized by an ordinary unitary and retained outcome/Kraus labels. [F9, F10, step 2.1, construct]

4.1 Keep each observed outcome in an orthogonal record register; hidden Kraus labels remain orthogonal environment labels and are not used by later controls. Induct over the finite execution tree, comparing the unnormalized system density for each observed history after tracing out its hidden labels. A unitary node applies the same branch unitary on every hidden-label subspace, and an instrument node has child reduced density $\mathcal I_a(\rho)$ by step 2.1, so each history's unnormalized system density agrees with the original instrument computation. At terminal histories, measuring the declared output and ignoring the orthogonal records therefore gives exactly the output law in [F2]. [F1, F2, step 2.1, step 3.1, induction]

5.1 Insert one such ordinary call in each of the $T$ slots, using input-independent history controls for active and padded branches. Steps 1.1–4.1 preserve every output probability, and step 1.2 pads only branches with fewer than $T$ calls. Thus the resulting pure-state circuit has exactly $T$ ordinary XOR calls and the original output distribution. [F1, F2, F6, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
