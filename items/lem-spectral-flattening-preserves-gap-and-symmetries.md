---
id: lem-spectral-flattening-preserves-gap-and-symmetries
kind: lemma
title: "Spectral flattening preserves gaps and symmetry relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence, def-self-adjoint-and-normal-endomorphism, thm-complex-spectral-theorem-for-normal-endomorphisms]
justified_by: []
proof_strategy: direct
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
    - title: "Alexei Kitaev, Periodic table for topological insulators and superconductors (2009)"
      url: "https://arxiv.org/pdf/0901.2686"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

For a finite-dimensional self-adjoint gapped Hamiltonian $H$, define $\operatorname{sign}(H)$ by its spectral decomposition: it is $+1$ on positive eigenspaces and $-1$ on negative eigenspaces. The path $H_t=(1-t)H+t\operatorname{sign}(H)$ is continuous, remains gapped, and preserves every unitary or antiunitary symmetry relation $S H S^{-1}=\sigma H$ with $\sigma\in\{+1,-1\}$. At $t=1$ it is a self-adjoint involution.

## Facts & Assumptions
**Given:** A finite-dimensional complex Hilbert space, a self-adjoint endomorphism $H$ with $0\notin\operatorname{spec}(H)$, and a unitary or antiunitary operator $S$ satisfying $S H S^{-1}=\sigma H$ for a real sign $\sigma=\pm1$.

[F1] A finite-dimensional self-adjoint endomorphism is normal ([[def-self-adjoint-and-normal-endomorphism]]).

[F2] Every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] The Hamiltonian and symmetry conventions are those in [[def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence]].

## Proof

**Proof technique:** diagonalize and check each eigenspace.

1.1 If the Hilbert space is zero-dimensional, the unique path is the unique endomorphism path and the assertion is vacuous. Otherwise, by [F1] and [F2], choose an orthonormal eigenbasis of $H$. Every eigenvalue $\lambda$ is real because self-adjointness gives $\langle Hv,v\rangle=\langle v,Hv\rangle$, while $Hv=\lambda v$ makes the two sides conjugates; since $H$ is gapped, $\lambda\ne0$. On its eigenspace $H_t$ acts by $(1-t)\lambda+t\operatorname{sgn}(\lambda)$, which is positive for $\lambda>0$ and negative for $\lambda<0$ for every $t\in[0,1]$. Thus $H_t$ has no zero eigenvalue. [given, F1, F2, algebra]


2.1 Each eigenvalue expression is continuous in $t$, so the diagonal operator path $H_t$ is continuous. At $t=1$, its eigenvalues are $\pm1$, giving $H_1^*=H_1$ and $H_1^2=I$. [step 1.1, algebra]


3.1 The symmetry relation implies $S\operatorname{sign}(H)S^{-1}=\operatorname{sign}(\sigma H)=\sigma\operatorname{sign}(H)$: $S$ sends a $\lambda$-eigenvector to a $\sigma\lambda$-eigenvector, and the scalar values involved are real, so the statement holds for antiunitary as well as unitary $S$. Therefore $S H_tS^{-1}=(1-t)\sigma H+t\sigma\operatorname{sign}(H)=\sigma H_t$ for every $t$. [given, F3, step 1.1, algebra] ∎
