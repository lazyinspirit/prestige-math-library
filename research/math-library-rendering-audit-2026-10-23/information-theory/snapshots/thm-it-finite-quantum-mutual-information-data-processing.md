---
id: thm-it-finite-quantum-mutual-information-data-processing
kind: theorem
title: Data processing for finite quantum mutual information
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-quantum-information-measures
  - def-it-von-neumann-entropy
  - thm-it-finite-strong-subadditivity
  - thm-qc-finite-stinespring-dilation
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-it-partial-traces-of-a-state-are-states
  - def-qc-tensor-register-and-permutation
  - thm-qc-wire-permutation-is-unitary
  - thm-qc-channels-compose-and-tensor
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the Stinespring spaces and spectral decompositions are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 5.35 and Chapter 8"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §§11.7–11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $A,B,A',B'$ be nonzero finite-dimensional complex inner-product spaces, let $\rho_{AB}$ be a density operator on $A\otimes B$, and let $\Phi:A\to A'$ and $\Psi:B\to B'$ be quantum channels. Then

$$I(A':B')_{(\Phi\otimes\Psi)(\rho)}\le I(A:B)_\rho,$$

where quantum mutual information is $I(X:Y)_\omega=S(\omega_X)+S(\omega_Y)-S(\omega_{XY})$ as in [[def-it-finite-quantum-information-measures]].

## Facts & Assumptions

**Given:** The spaces, state, and channels in the Statement.

[F1] [[def-it-finite-quantum-information-measures]]: $I(X:Y)=S(X)+S(Y)-S(XY)$ for finite bipartite states.

[F2] [[thm-it-finite-strong-subadditivity]]: for every finite tripartite state $\omega_{XYZ}$, $S(XY)+S(YZ)\ge S(Y)+S(XYZ)$.

[F3] [[thm-qc-finite-stinespring-dilation]]: each finite-dimensional channel has an isometric dilation $V$ with output obtained by tracing its finite environment.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: positive operators have finite orthonormal spectral decompositions.

[F5] [[lem-it-partial-traces-of-a-state-are-states]]: partial traces of finite-dimensional density operators are density operators.

[F6] [[def-qc-tensor-register-and-permutation]] and [[thm-qc-wire-permutation-is-unitary]]: factors may be reordered by a unitary wire permutation, preserving the state and its entropy.

[F7] [[thm-natural-logarithm-laws]]: the natural logarithm product law used in the entropy identities underlying strong subadditivity.

## Proof

1.1 First apply $\Phi$ to $A$. Choose a Stinespring isometry $V:A\to A'\otimes E$ from [F3], and form $\widetilde\rho_{A'EB}:=(V\otimes I_B)\rho_{AB}(V^*\otimes I_B)$. This is a state: a spectral decomposition of $\rho_{AB}$ in [F4] shows that its nonzero eigenvalues remain the same under the isometric embedding. Its $A'E$ marginal is $V\rho_A V^*$ and has the same positive eigenvalues as $\rho_A$, while its $A'EB$ joint state has the same positive eigenvalues as $\rho_{AB}$. Thus [F1] gives $I(A'E:B)_{\widetilde\rho}=I(A:B)_\rho$. [given, F1, F3, F4, algebra, choose]

2.1 Reorder $A'EB$ to $EA'B$ by the unitary permutation in [F6]. Apply [F2] to the ordered tripartite state $\widetilde\rho_{EA'B}$, with $A'=Y$, to obtain $S(EA')+S(A'B)\ge S(A')+S(EA'B)$. Rearranging by [F1] gives $I(EA':B)\ge I(A':B)$. The entropy identities and their logarithm product law are supplied by [F7]. The $A'B$ marginal is $(\Phi\otimes\operatorname{id}_B)(\rho)$ by [F3] and the partial-trace convention; hence applying $\Phi$ cannot increase mutual information. [F1, F2, F3, F5, F6, F7, step 1.1, algebra]

3.1 Repeat step 1.1–2.1 with $\Psi$ acting on the second register, now taking the first register to be $A'$. This gives $I(A':B')_{(\Phi\otimes\Psi)(\rho)}\le I(A':B)_{(\Phi\otimes\operatorname{id}_B)(\rho)}$. Combine this with step 2.1 to obtain the claimed inequality. The entropy-law prerequisite remains [F7]. [given, F1, F2, F3, F5, F6, F7, step 2.1, algebra] ∎
