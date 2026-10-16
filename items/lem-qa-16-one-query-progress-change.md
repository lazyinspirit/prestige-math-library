---
id: lem-qa-16-one-query-progress-change
kind: lemma
title: One oracle call changes adversary progress by at most filtered spectral norm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - def-qa-16-query-address-projectors
  - def-qa-standard-bit-query
  - def-qa-quantum-query-algorithm
  - lem-qa-16-query-unitary-normal-form
  - lem-qa-16-adversary-progress-endpoints
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-trace-of-an-endomorphism
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


In the unitary normal form of an ordinary oracle-only standard XOR bit-query algorithm, one oracle call changes the progress $W_t$ of [[lem-qa-16-adversary-progress-endpoints]] by at most
$$|W_{t+1}-W_t|\le2\max_{i\in[N]}\|\Gamma\circ\Delta_i\|.$$

## Facts & Assumptions

**Given:** An admissible Γ, normalized principal eigenvector α, and the pre-query states of a unitary-normal-form algorithm.



[F1] [[def-qa-16-general-adversary-bound]]: Γ is a finite real symmetric adversary matrix and Γ∘Δ_i is its i-th filtered block.

[F2] [[def-qa-16-input-mismatch-matrices]]: Δ_i(x,y)=1 exactly when x_i≠y_i.

[F3] [[def-qa-16-query-address-projectors]]: the address projectors are orthogonal and sum to identity.

[F4] [[def-qa-standard-bit-query]]: O_x applies X^{x_i} to the response bit at address i.

[F5] [[lem-qa-16-query-unitary-normal-form]]: input-independent unitaries separate standard XOR query calls.

[F6] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite real symmetric matrix has an orthonormal real eigenbasis.

[F7] [[lem-qa-16-adversary-progress-endpoints]]: the progress quantity is $W_t=\sum_{x,y}\Gamma_{xy}\alpha_x\alpha_y\langle\psi_x^t|\psi_y^t\rangle_D$ for the pre/post-query states and the chosen normalized principal eigenvector $\alpha$.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the adjoint satisfies $\langle Qv,w\rangle=\langle v,Q^*w\rangle$.

[F9] [[def-trace-of-an-endomorphism]]: trace is basis-independent and is the sum of diagonal entries in any basis.

## Proof

1.1 An input-independent unitary between queries preserves every pairwise inner product, so only the oracle slot changes progress. For inputs x,y, the product O_x^*O_y acts at address i as X^{x_i⊕y_i}; in the response eigenstate |−⟩=(|0⟩−|1⟩)/√2 this is −1 exactly when x_i≠y_i, and it is +1 on |+⟩. Therefore O_x^*O_y−I=−2Σ_iΔ_i(x,y)P_i^-, where P_i^- is the address-i projector tensored with |−⟩⟨−| on response and identity on work. [given, F2, F3, F4, F5, algebra]

2.1 Let ψ_x be the pre-query state and define Q_i:C^D→H by Q_i|x⟩=α_xP_i^-ψ_x. Substituting step 1.1 into W_{t+1}−W_t and collecting entries gives W_{t+1}−W_t=−2Σ_i tr((Γ∘Δ_i)Q_i^*Q_i) because Γ∘Δ_i is real symmetric and relabeling the two indices gives the trace exactly. [given, F1, F2, F7, F8, F9, step 1.1, algebra]

3.1 Fix i and write $A_i=\Gamma\circ\Delta_i$ and $R_i=Q_i^*Q_i$. By [F6], $A_i$ has a real orthonormal eigenbasis $(e_j)$ with eigenvalues $\lambda_j$, and $\|A_i\|=\max_j|\lambda_j|$. Evaluating the basis-independent trace [F9] in this basis and using [F8] gives $\operatorname{tr}(A_iR_i)=\sum_j\lambda_j\|Q_ie_j\|^2$, so $|\operatorname{tr}(A_iR_i)|\le\|A_i\|\sum_j\|Q_ie_j\|^2=\|A_i\|\operatorname{tr}(R_i)$. Evaluating $\operatorname{tr}(R_i)$ in the standard input basis yields $\sum_x\|Q_i|x\rangle\|^2$. Therefore $\sum_i\operatorname{tr}(R_i)=\sum_x\alpha_x^2\sum_i\|P_i^-\psi_x\|^2\le\sum_x\alpha_x^2=1$, since the $P_i^-$ are orthogonal subprojections of identity. Hence $|W_{t+1}-W_t|\le2\max_i\|\Gamma\circ\Delta_i\|$. [given, F3, F6, F7, F8, F9, step 2.1, algebra] ∎
