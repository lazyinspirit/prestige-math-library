---
id: ex-class-a-zero-dimensional-index-is-negative-rank
kind: example
title: "A zero-dimensional class-A flattened Hamiltonian"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 1
deps: [def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexei Kitaev, Periodic table for topological insulators and superconductors (2009)"
      url: "https://arxiv.org/pdf/0901.2686"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Example

On $\mathbb C^2$, let $H=\operatorname{diag}(-1,+1)$. Define the $d=0$ rank-difference index by $\nu(H)=\dim E_{<0}(H)-\dim E_{<0}(H_{\rm ref})$, where $H_{\rm ref}$ is the fixed reference system; choose the zero-band reference, whose negative eigenspace has dimension zero. Then $H$ is already flattened, with occupied projection $P=\operatorname{diag}(1,0)$, and the example has $\nu(H)=1$.

## Facts & Assumptions

**Given:** A finite-dimensional class-A Hamiltonian on $\mathbb C^2$ and the zero-band reference.

[F1] A finite-dimensional free Hamiltonian is self-adjoint, is gapped at zero when zero is outside its spectrum, and stable equivalence is by gap-preserving homotopy after adding fixed reference bands ([[def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence]]).


## Verification

1.1 The eigenvalues of $H$ are $-1$ and $+1$, so $H$ is self-adjoint and gapped. The projection onto its negative eigenspace is $P=(I-H)/2=\operatorname{diag}(1,0)$. Direct multiplication gives $P^2=P=P^*$; its image is the one-dimensional span of $(1,0)$. [given, F1, algebra]


2.1 Therefore $\dim E_{<0}(H)=1$, while the stated zero-band reference has negative eigenspace dimension zero. Substitution in the defined rank difference gives $\nu(H)=1-0=1$. [step 1.1, algebra] ∎
