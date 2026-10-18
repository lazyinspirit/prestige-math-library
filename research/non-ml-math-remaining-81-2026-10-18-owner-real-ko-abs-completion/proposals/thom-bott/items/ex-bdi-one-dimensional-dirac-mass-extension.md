---
id: ex-bdi-one-dimensional-dirac-mass-extension
kind: example
title: A one-dimensional BDI Dirac-mass extension
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 14
deps:
- thm-tenfold-real-and-complex-clifford-extension-table
- def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Alexei Kitaev, Periodic table for topological insulators and superconductors
      (2009)
    url: https://arxiv.org/pdf/0901.2686
  - title: M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement
      1 (1964)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
proof_strategy: direct
---

## Example

Assume AC. In the normalized BDI convention $q=1,d=1$, the strong group is $KO^0(\mathrm{pt})=\mathbb Z$. The finite matrices below give gapped one-parameter Dirac Hamiltonians $H_B(k)$, $k\in\mathbb R$, and integer-labelled difference systems with every invariant $\nu\in\mathbb Z$. In particular a single negative mass against the positive reference is the generator. An integer invariant is constant along a continuous gapped path; the integer-labelled systems are not asserted to form a continuous path of changing index.

## Facts & Assumptions

**Given:** AC and finite-dimensional complex Hilbert spaces with entrywise conjugation $K$.

[F1] The normalized tenfold extension theorem assigns BDI index $q=1$, subtracts the one negative Dirac generator, and identifies the resulting index-zero invariant with negative real multiplicity-rank difference ([[thm-tenfold-real-and-complex-clifford-extension-table]]).

## Verification

1.1 Put $e=\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$, $\gamma=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$ and $s=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$. Direct multiplication gives $e^2=s^2=I$, $\gamma^2=-I$ and pairwise anticommutation. On $\mathbb C^2\otimes\mathbb C^N$ let $B$ be a real symmetric involution, $M_B=s\otimes B$, and $H_B(k)=ik\gamma\otimes I+M_B$. The kinetic term and mass are Hermitian and anticommute, so $H_B(k)^2=(k^2+1)I$. Thus every $k$ has gap at least one. [given, construct, algebra]

1.2 Take $T=K$ and $C=(e\otimes I)K$. Both square to $1$ and commute. Complex conjugation changes $ik\gamma$ to $-ik\gamma$ and fixes $M_B$, giving $TH_B(k)T^{-1}=H_B(-k)$. Conjugating additionally by $e$ reverses both $\gamma$ and $s$, giving $CH_B(k)C^{-1}=-H_B(-k)$. Their product $e\otimes I$ is the self-adjoint chiral involution. These are precisely the momentum-reversing BDI symmetries of the one-dimensional Dirac family. [step 1.1, algebra]

2.1 The admissible real symmetric masses anticommuting with both $e\otimes I$ and $\gamma\otimes I$ are exactly $s\otimes B$. Indeed anticommutation with $e$ makes the diagonal blocks zero, symmetry makes the other blocks $B,B^{\mathsf T}$, and anticommutation with $\gamma$ forces $B=B^{\mathsf T}$. Squaring the mass gives $B^2=I$. Therefore the reduced multiplicity problem is the actual real index-zero mass problem of [F1], with invariant $\nu=\dim E_-(B)-\dim E_-(B_0)$. Rank is constant along an involution homotopy because the continuous idempotent $(I-B)/2$ has integer-valued continuous trace. Fixed-rank involutions form a connected real Grassmannian, so this invariant also distinguishes exactly the stable components. [F1, step 1.1, algebra]

2.2 For $\nu\ge0$ take $N=\nu$, $B=-I_N$, $B_0=+I_N$; for $\nu<0$ take $N=-\nu$, $B=+I_N$, $B_0=-I_N$. Use the zero-dimensional empty system at $\nu=0$. The formula of step 2.1 gives invariant exactly $\nu$ in both cases. For $N=1$, the negative mass against the positive reference gives $\nu=1$, which [F1] sends to the unit of $KO^0(\mathrm{pt})$. Direct sum adds the integers and reversing the difference negates them. The entire continuous $k$ family in step 1.1 has the same invariant; no gap-preserving continuous integer jump is claimed. [F1, step 1.1, step 2.1, construct, algebra] ∎
