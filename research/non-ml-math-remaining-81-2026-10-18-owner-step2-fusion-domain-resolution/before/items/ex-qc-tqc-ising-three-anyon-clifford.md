---
id: ex-qc-tqc-ising-three-anyon-clifford
kind: example
title: Three-Ising-anyon braid matrices are Clifford
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - ex-qc-tqc-ising-data
  - def-qc-clifford-normalizer
  - def-qc-pauli-matrices
dependency_level: 7
axiom_use: None; the check is an explicit two-dimensional matrix calculation.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.A, PDF pp. 31–32
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.9 and §9.17, PDF pp. 24–25 and 61–62
---

## Example

In the three-$\sigma$, total-$\sigma$ Ising sector, use
$F=H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$,
$R_1=e^{-i\pi/8}$, and $R_\psi=e^{3i\pi/8}$. After removing the common phase
$R_1$, the two projective braid generators are
$$B_1=\begin{pmatrix}1&0\\0&i\end{pmatrix},\qquad B_2=H B_1 H.$$

## Facts & Assumptions

**Given:** The displayed fixed Ising fusion sector, its ordered channel basis,
and the Pauli matrices $X,Y,Z$.

[F1] The Pauli matrices are
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$,
$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.
[[def-qc-pauli-matrices]]

[F2] A unitary is Clifford when it normalizes the phase-aware Pauli group.
[[def-qc-clifford-normalizer]]

[F3] In the three-$\sigma$, total-$\sigma$ sector, the Ising supplier gives
$F=H$, $R_1=e^{-i\pi/8}$, and $R_\psi=e^{3i\pi/8}$; hence
$R_\psi/R_1=i$. It explicitly limits this to sector data.
[[ex-qc-tqc-ising-data]]

## Verification

1.1 By [F3], $R_\psi/R_1=i$. Removing $R_1$ gives $B_1=\operatorname{diag}(1,i)$, and recoupling by $H=H^{-1}$ gives $B_2=HB_1H$. Both are unitary because $H$ and $B_1$ are unitary. Put $a=(1+i)/2$ and $b=(1-i)/2$, so $B_2=\begin{pmatrix}a&b\\b&a\end{pmatrix}$. Direct multiplication, using $a^2+ib^2=a$, $ab(1+i)=ib$, and $b^2+ia^2=-a$, gives $$B_1B_2B_1=\begin{pmatrix}a&ib\\ib&-a\end{pmatrix} =B_2B_1B_2.$$ Thus these matrices define a unitary representation of the two-generator Artin presentation of $B_3$, independently of any all-label Ising coherence claim. [F3, algebra]

2.1 Direct multiplication gives $B_1XB_1^*=Y$, $B_1YB_1^*=-X$, and $B_1ZB_1^*=Z$; also $B_2XB_2^*=X$, $B_2YB_2^*=Z$, and $B_2ZB_2^*=-Y$. Thus each generator conjugates every Pauli matrix to a signed Pauli matrix. [F1, step 1.1, algebra]

3.1 Products and inverses of Pauli normalizers again normalize the Pauli group: for normalizers $A,B$, $(AB)\mathcal P(AB)^* =A(B\mathcal P B^*)A^*=\mathcal P$, and the inverse property follows by conjugating the equality $A\mathcal P A^*=\mathcal P$ by $A^*$. The scalar phase removed in step 1.1 has trivial conjugation action, so the physical braids are projectively Clifford in this sector. [F2, step 1.1, step 2.1, algebra] ∎

## Remarks

This is a projective statement for an isolated fixed-charge sector. The scalar
phase cannot be discarded when the braid is coherently controlled. The
supplier gives sector data only; this item makes no all-label Ising category
claim.
