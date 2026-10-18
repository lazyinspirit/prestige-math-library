---
id: lem-it-finite-mixture-entropy-bounds
kind: lemma
title: Entropy bounds for a finite mixture of states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
- def-it-von-neumann-entropy
- thm-it-quantum-relative-entropy-nonnegative-equality
- thm-qc-schmidt-decomposition
- def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

For states $\rho_i$ and finite probabilities $p_i$, put $\bar\rho=\sum_i p_i\rho_i$. Then
$$0\le S(\bar\rho)-\sum_i p_iS(\rho_i)\le H(p).$$

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[def-it-von-neumann-entropy]]: Finite-dimensional von Neumann entropy.

[F2] [[thm-it-quantum-relative-entropy-nonnegative-equality]]: Nonnegativity and equality for finite quantum relative entropy.

[F3] [[thm-qc-schmidt-decomposition]]: Schmidt decomposition.

[F4] [[def-trace-of-an-endomorphism]]: 'The basis-independent trace of an endomorphism of a finite-dimensional vector space'.

## Proof

1.1 Omit zero weights. Positivity of $\bar\rho-p_i\rho_i$ implies $\ker\bar\rho\subseteq\ker\rho_i$ (take its quadratic form on a kernel vector), so every relative entropy below is finite. Expanding the spectral cross traces gives $$S(\bar\rho)-\sum_i p_iS(\rho_i)=\sum_i p_iD(\rho_i\Vert\bar\rho)\ge0$$ by the finite-state QRE nonnegativity supplier. For the upper bound, diagonalize each $\rho_i=\sum_j\lambda_{ij}|v_{ij}\rangle\langle v_{ij}|$, omitting zero eigenvalues, and purify the mixture as $|v\rangle=\sum_{ij}\sqrt{p_i\lambda_{ij}}|v_{ij}\rangle\otimes|i,j\rangle$. Its label marginal $G$ has diagonal $q_{ij}=p_i\lambda_{ij}$ and has the same nonzero eigenvalues as $\bar\rho$ by Schmidt decomposition. For $\Delta=\operatorname{diag}(q)$, positivity gives $\operatorname{supp}G\subseteq\operatorname{supp}\Delta$; hence $$0\le D(G\Vert\Delta)=H(q)-S(G)=H(p)+\sum_i p_iS(\rho_i)-S(\bar\rho).$$ This proves both bounds, including singleton/zero-weight cases. [F1, F2, F3, F4, given, algebra, construct] ∎
