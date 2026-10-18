---
id: ex-qc-tqc-ising-data
kind: example
title: Ising fusion data and chiral convention
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-qc-tqc-unitary-fusion-category, def-qc-tqc-fusion-multiplicity-space, def-qc-tqc-fusion-tree-basis, lem-qc-tqc-fusion-tree-dimension, def-qc-tqc-f-symbol, def-qc-tqc-r-symbol]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "arXiv:0707.1889v2, §II.A.1, Eq. (7), PDF p. 5 (fusion rules), and PDF p. 6 (Ising phases); §III.B.2, Eq. (50), PDF p. 31 (F matrix), and Eq. (53), PDF p. 32 (Majorana exchange and relative phase); §III.C.2, PDF p. 37 (absolute Ising phases)."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: multiplicity bases and unitary F-matrices."
---

## Example

Use simple labels $\mathbf1,\psi,\sigma$ with unit fusion and
$\sigma\otimes\sigma=\mathbf1\oplus\psi$,
$\sigma\otimes\psi=\psi\otimes\sigma=\sigma$, and
$\psi\otimes\psi=\mathbf1$. In the three-$\sigma$, total-$\sigma$ fusion
space, the intermediate-channel basis is $(\mathbf1,\psi)$. In the pullback
R convention of [[def-qc-tqc-r-symbol]], fix

$$F^{\sigma\sigma\sigma}_{\sigma} =2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad R^{\sigma\sigma}_{\mathbf1}=e^{-i\pi/8},\qquad R^{\sigma\sigma}_{\psi}=e^{3i\pi/8}.$$

These are sector data only. This item makes no claim about an all-label Ising
F/R table or global Ising ribbon coherence.

The phases above use the pullback convention in [[def-qc-tqc-r-symbol]]. In a
convention recording the eigenvalues of the object-level braiding itself, the
eigenvalues are the inverses of the displayed phases. This convention note
does not extend the sector data to any other Ising fusion space.

## Facts & Assumptions

**Given:** the fusion rules and three-$\sigma$, total-$\sigma$ matrices in the
Example.

[F1] [[def-qc-tqc-fusion-multiplicity-space]]: $N_{ab}^c$ is the dimension of
$V_{ab}^c=\operatorname{Hom}(a\otimes b,c)$.

[F2] [[def-qc-tqc-f-symbol]]: $F$ is the coordinate matrix between the two
orthonormal tree bases.

[F3] [[def-qc-tqc-r-symbol]]: $R$ is the channel-exchange matrix in the stated
pullback convention.

[F4] [[def-qc-tqc-unitary-fusion-category]]: unitarity means preservation of
the positive inner products on fusion spaces.

## Verification

1.1 The three-$\sigma$, total-$\sigma$ space has one left-tree basis vector with intermediate charge $\mathbf1$ and one with intermediate charge $\psi$: each channel in $\sigma\otimes\sigma=\mathbf1\oplus\psi$ fuses with the remaining $\sigma$ to $\sigma$. Thus this sector is two-dimensional, with the basis stated in the Example. [F1, given, algebra]

1.2 Let $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. It is real and symmetric, and direct multiplication gives $H^\dagger H=H^2=I_2$. Hence the displayed F matrix is unitary in the stated basis. [F2, F4, given, algebra]

1.3 Both displayed R entries have modulus one, and their ratio is $e^{3i\pi/8}/e^{-i\pi/8}=e^{i\pi/2}=i$. Thus each channel exchange is unitary and the relative phase is exactly $i$. [F3, F4, given, algebra]

2.1 Steps 1.1–1.3 verify the dimension, recoupling matrix, and exchange phases only in this three-$\sigma$, total-$\sigma$ sector. No all-label associator, pentagon, hexagon, modularity, or ribbon claim is made here. [step 1.1, step 1.2, step 1.3] ∎
