---
id: thm-qc-pure-state-no-cloning
kind: theorem
title: "Pure State No Cloning"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["def-qc-quantum-channel", "def-qc-partial-trace", "thm-qc-finite-stinespring-dilation", "thm-qc-isometry-partial-trace-is-channel", "def-qc-tensor-register-and-permutation", "def-qc-pure-state-and-ray", "thm-qc-ray-projector-well-defined-and-bijective", "thm-qc-schmidt-decomposition", "thm-cauchy-schwarz-in-an-inner-product-space"]
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
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.2, Theorem 7.28 and proof; de Wolf is context only."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint 12, PDF p.203, pure-state no-cloning context only"
---

## Statement

Let $S$ be a set of pure-state rays in a nonzero finite-dimensional Hilbert space $H$. If one channel maps every pure-state projector $P_\psi$ with ray $\psi\in S$ to $P_\psi\otimes P_\psi$, then every pair of rays in $S$ is identical or orthogonal. Consequently no channel exactly clones all pure states when $\dim H\ge2$; when $\dim H=1$, the unique ray is cloned by the one-dimensional isometry.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional $H$, a set $S$ of rays, and a channel $\Phi$ with the stated exact pure-state outputs.

[L1] A pure state is a ray represented by a rank-one projector ([[def-qc-pure-state-and-ray]]); [[thm-qc-ray-projector-well-defined-and-bijective]] proves the projector is independent of the unit representative. The QC03 definition and its well-definedness theorem are present as drafts.

[L2] Every finite-dimensional channel has an isometric Stinespring dilation $V:H\to H\otimes H\otimes E$ ([[def-qc-quantum-channel]], [[thm-qc-finite-stinespring-dilation]]). The QC05 channel and dilation theorem bodies are present as drafts.

[L3] The Schmidt decomposition of a bipartite vector has orthonormal factor families and positive Schmidt coefficients; a rank-one reduced projector therefore leaves one Schmidt coefficient and a product vector ([[thm-qc-schmidt-decomposition]]). The QC03 theorem body is present as a draft.

[L4] The ordered tensor-register convention supplies the factorwise product inner product; partial trace is defined on finite tensor registers, and an isometry followed by partial trace defines a channel ([[def-qc-tensor-register-and-permutation]], [[def-qc-partial-trace]], [[thm-qc-isometry-partial-trace-is-channel]]).

## Proof


1.1 For each unit representative $\psi$ of a ray in $S$, the reduced state of $V\psi$ on the two output registers is the pure projector $P_\psi\otimes P_\psi$. By the Schmidt decomposition [L3], there is a unit environment vector $e_\psi$ and a phase absorbed into it such that $V\psi=\psi\otimes\psi\otimes e_\psi$. [given, L1, L2, L3, algebra]

2.1 For any two unit representatives $\psi,\phi\in S$, the isometry preserves their inner product. By step 1.1, $$\langle\psi,\phi\rangle=\langle V\psi,V\phi\rangle=\langle\psi,\phi\rangle^2\langle e_\psi,e_\phi\rangle.$$ Taking absolute values and applying Cauchy–Schwarz to the unit environment vectors gives $c=c^2|\langle e_\psi,e_\phi\rangle|\le c^2$, where $c=|\langle\psi,\phi\rangle|\in[0,1]$. Hence $c(1-c)\le0$ with both factors nonnegative, so $c=0$ or $c=1$. The first case is orthogonality; in the second, equality in Cauchy–Schwarz makes the two vectors scalar multiples and their rays identical ([[thm-cauchy-schwarz-in-an-inner-product-space]]). [given, step 1.1, algebra]

3.1 If $\dim H\ge2$, choose orthonormal $e_1,e_2$; the rays of $e_1$ and $(e_1+e_2)/\sqrt2$ are neither equal nor orthogonal, contradicting step 2.1 for a universal exact cloner. If $\dim H=1$, fix a unit vector $e$ and take the one-dimensional environment $E=\mathbb C$ with unit vector $f$. Define $V(e)=e\otimes e\otimes f$ and extend linearly; because this sends the unit basis vector to a unit product vector, it is an isometry. By [L4], $X\mapsto\operatorname{Tr}_E(VXV^*)$ is a channel; on the sole pure-state projector it outputs $P_e\otimes P_e$. Hence the unique ray is cloned by a channel. [given, step 2.1, L4, algebra, choose] ∎

