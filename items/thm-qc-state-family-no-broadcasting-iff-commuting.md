---
id: thm-qc-state-family-no-broadcasting-iff-commuting
kind: theorem
title: "State Family No Broadcasting Iff Commuting"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: ["def-qc-broadcasting-family", "thm-qc-singular-pair-no-broadcasting", "thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "thm-complex-spectral-theorem-for-normal-endomorphisms", "def-qc-density-operator", "thm-qc-kraus-map-completely-positive", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "thm-trace-of-ab-equals-trace-of-ba", "def-qc-dirac-notation-conversion", "def-qc-tensor-map"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa, and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast"
      url: "https://arxiv.org/pdf/quant-ph/9511010"
      locator: "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
---

## Statement

Let $S$ be any family, finite or infinite, of density operators on a nonzero finite-dimensional complex Hilbert space $H$. One common channel broadcasts every member of $S$ if and only if every pair of members commutes.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional $H$ and a family $S\subseteq\mathcal D(H)$, possibly empty.

[L1] Broadcasting uses one channel and requires both marginals to equal each input ([[def-qc-broadcasting-family]]).

[L2] Any pair of finite-dimensional states is jointly broadcastable only if it commutes ([[thm-qc-singular-pair-no-broadcasting]]). Its body is draft with open QC02/QC03 dependencies.

[L3] A pairwise commuting family of diagonalizable endomorphisms on a finite-dimensional space has one common eigenbasis, including the empty family ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]). The root supplier is published and states exactly this arbitrary-family interface.

[L4] Density operators are self-adjoint and hence diagonalizable with real eigenvalues; finite-dimensional inner-product spaces have orthonormal bases ([[def-qc-density-operator]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]). The QC03 state carrier is a draft.

[L5] A finite Kraus sum $X\mapsto\sum_jK_jXK_j^*$ is completely positive ([[thm-qc-kraus-map-completely-positive]]).

[L6] The partial-trace characterization computes each marginal by tracing the corresponding tensor factor ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]); rank-one operators use the stated Dirac convention and tensor maps act on elementary tensors factorwise ([[def-qc-dirac-notation-conversion]], [[def-qc-tensor-map]]).

[F1] Finite trace is cyclic for compatible endomorphisms ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof


1.1 Suppose one channel broadcasts every member of $S$. For any $\rho,\sigma\in S$, the same channel broadcasts the pair, so [L2] gives $[\rho,\sigma]=0$. If $S$ has fewer than two elements, pairwise commutation is vacuous or follows from $[\rho,\rho]=0$. [given, L1, L2, algebra]

1.2 Conversely, suppose all members commute pairwise. Each is diagonalizable by [L4], so [L3] gives a common eigenbasis $(v_j)$ (not assumed orthogonal). Group this finite basis by its joint eigenvalue tuples across $S$. If two tuples differ, some self-adjoint $\rho\in S$ has distinct real eigenvalues on the corresponding vectors, and those vectors are orthogonal because $\langle\rho v,w\rangle=\langle v,\rho w\rangle$ forces $(\lambda-\mu)\langle v,w\rangle=0$. Within each common eigenspace, choose an orthonormal basis by Gram–Schmidt; every $\rho\in S$ acts there as one scalar, so the resulting orthonormal basis $(e_j)$ still diagonalizes every member. If $S$ is empty, any orthonormal basis suffices. [given, L3, L4, algebra]

2.1 Define $K_j=|e_j\otimes e_j\rangle\langle e_j|$ and $B(X)=\sum_jK_jXK_j^*$. The map is completely positive by [L5]. Also $K_j^*K_j=|e_j\rangle\langle e_j|$, so $\sum_jK_j^*K_j=I$; cyclicity [F1] gives $\operatorname{tr}B(X)=\operatorname{tr}X$ for every $X$, hence $B$ is a channel. For any $\rho=\sum_j\lambda_j|e_j\rangle\langle e_j|$ in $S$, $B(\rho)=\sum_j\lambda_j|e_j\otimes e_j\rangle\langle e_j\otimes e_j|$, and the partial-trace identity [L6] gives either marginal as $\rho$. The same channel works for every member, proving sufficiency. [given, L1, L5, L6, F1, step 1.2, algebra] ∎

