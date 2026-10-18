---
id: thm-it-finite-strong-subadditivity
kind: theorem
title: Strong subadditivity of finite-dimensional quantum entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-von-neumann-entropy
  - def-it-finite-dimensional-quantum-relative-entropy
  - lem-it-quantum-entropy-support-and-finiteness
  - thm-it-quantum-entropy-identities
  - thm-it-quantum-relative-entropy-partial-trace-dpi
  - def-qc-density-operator
  - lem-it-partial-traces-of-a-state-are-states
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H_A,H_B,H_C$ be nonzero finite-dimensional complex inner-product spaces and let $\rho_{ABC}$ be a density operator on their ordered tensor product. Write $\rho_{AB},\rho_{BC},\rho_B$ for its marginals using the partial traces in [[def-qc-partial-trace]]. Then
$$S(\rho_{AB})+S(\rho_{BC})\ge S(\rho_B)+S(\rho_{ABC}),$$
where $S(\rho)=-\operatorname{tr}(\rho\ln\rho)$ with $0\ln0:=0$ as in [[def-it-von-neumann-entropy]].

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H_A,H_B,H_C$ and a density operator $\rho_{ABC}$ on $H_A\otimes H_B\otimes H_C$.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(X\|Y)$ is finite on support inclusion and equals $\operatorname{tr}(X\ln X)-\operatorname{tr}(X\ln Y)$ there; otherwise it is $+\infty$.

[F2] [[lem-it-quantum-entropy-support-and-finiteness]]: for any bipartite state, the joint support is contained in the tensor product of its marginal supports, so its relative entropy to the product of its marginals is finite.

[F3] [[thm-it-quantum-entropy-identities]]: for a finite bipartite state $\omega_{UV}$, $D(\omega_{UV}\|\omega_U\otimes\omega_V)=S(\omega_U)+S(\omega_V)-S(\omega_{UV})$.

[F4] [[thm-it-quantum-relative-entropy-partial-trace-dpi]]: for positive semidefinite $X,Y$ on a finite tensor product, $D(\operatorname{Tr}_C X\|\operatorname{Tr}_C Y)\le D(X\|Y)$, including extended values.

[F5] [[def-qc-density-operator]]: a state is positive semidefinite and has trace one.

[F6] [[def-qc-partial-trace]]: tracing out the last factor sums the diagonal blocks indexed by that factor.

[F7] [[def-qc-tensor-register-and-permutation]]: the product basis has the displayed factor order and tensor products act factorwise.

[F8] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: positive operators have finite spectral decompositions in orthonormal eigenbases.

[F9] [[lem-it-partial-traces-of-a-state-are-states]]: partial traces of a finite bipartite density operator are density operators.

## Proof

1.1 Let $\rho_A=\operatorname{Tr}_{BC}\rho_{ABC}$ and $\rho_{BC}=\operatorname{Tr}_A\rho_{ABC}$; [F9] makes them states. The operator $\rho_A\otimes\rho_{BC}$ is also a state: spectral decompositions of the two positive factors give nonnegative product eigenvalues, and their sum is $\operatorname{tr}(\rho_A)\operatorname{tr}(\rho_{BC})=1$. Applying [F2] to the bipartite states $\rho_{A|BC}$ and $\rho_{AB}$ gives support inclusion for both relative entropies $D(\rho_{ABC}\|\rho_A\otimes\rho_{BC})$ and $D(\rho_{AB}\|\rho_A\otimes\rho_B)$; [F1] then makes both finite. [given, F1, F2, F5, F7, F8, F9, algebra]

2.1 Set $X=\rho_{ABC}$ and $Y=\rho_A\otimes\rho_{BC}$. By [F6] and the ordered product basis [F7], $\operatorname{Tr}_C X=\rho_{AB}$ and $\operatorname{Tr}_C Y=\rho_A\otimes\operatorname{Tr}_C\rho_{BC}=\rho_A\otimes\rho_B$: the latter equality follows entrywise by summing the C-diagonal block of $\rho_{BC}$ while the A-factor matrix coefficient remains fixed. Apply [F4] to this pair to obtain
$$D(\rho_{AB}\|\rho_A\otimes\rho_B)\le D(\rho_{ABC}\|\rho_A\otimes\rho_{BC}).$$
[given, F4, F6, F7, step 1.1, algebra]

3.1 Both sides in step 2.1 are finite by step 1.1, so [F3] identifies them as $S(\rho_A)+S(\rho_B)-S(\rho_{AB})$ and $S(\rho_A)+S(\rho_{BC})-S(\rho_{ABC})$, respectively. Cancel the common finite term $S(\rho_A)$ and rearrange the inequality to obtain $S(\rho_{AB})+S(\rho_{BC})\ge S(\rho_B)+S(\rho_{ABC})$. [F3, step 1.1, step 2.1, algebra] ∎
