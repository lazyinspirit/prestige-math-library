---
id: cex-qsmx-categorification-not-spectrum
kind: counterexample
title: Equal representation structure need not fix energy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-qsmx-spin-weight-and-hall-realization
  - thm-qsmx-exchange-lie-weight-blocks
  - thm-qsmx-klr-character-specialization
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsmx-spin-weight-and-hall-realization: mathematical-premise
  thm-qsmx-exchange-lie-weight-blocks: mathematical-premise
  thm-qsmx-klr-character-specialization: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

On a fixed two-site spin-half space, a rank-one Hall realization, a KLR
negative-half Grothendieck isomorphism, and the diagonal
$\mathfrak{sl}_2$-module decomposition determine the spectrum and Gibbs
partition trace of every Hamiltonian commuting with that action.

## Statement references

[[def-qsmx-spin-weight-and-hall-realization]]

[[thm-qsmx-exchange-lie-weight-blocks]]

[[thm-qsmx-klr-character-specialization]]

## Facts & Assumptions

**Given:** Use the Hall definition at $q_H=2$, so $\nu=\sqrt2$, and the
one-vertex type-$A_1$ KLR datum $D$ over $k=\mathbb Q$ (its off-diagonal
$Q_{ij}$ family is empty). Let $W=V(1)\otimes V(1)$ with the diagonal action
from the spin definition, and let $P(v\otimes w)=w\otimes v$. Choose an
energy $J>0$ and $\beta=(\ln2)/J>0$; then $\beta J$ is dimensionless, and
$\beta$ has inverse-energy units if $J$ is interpreted as an energy.

[A1] Adopt the Axiom of Choice ([[def-axiom-of-choice]]) inherited through
the Hall/KLR supplier chain; the finite-dimensional witness uses no
additional choice.

[F1] [[def-qsmx-spin-weight-and-hall-realization]]: $V(1)$ has basis
$|\uparrow\rangle,|\downarrow\rangle$ and the global spin generators are
the sums of $E,F,H/2$ over the two tensor factors. At $q_H=2$ its one-vertex
Hall composition algebra is identified with $U_{\sqrt2}^+(\mathfrak{sl}_2)$
by $E\mapsto[S]$; this is an algebra identification and assigns no operator
to $W$.

[F2] [[thm-qsmx-exchange-lie-weight-blocks]]: for $N=2$, the swap $P$
commutes with all three generators of the diagonal $\mathfrak{sl}_2$ action.

[F3] [[thm-qsmx-klr-character-specialization]]: for the stated type-$A_1$
datum $D$ over $\mathbb Q$, the canonical KLR Grothendieck isomorphism
identifies the divided-power negative half with the graded projective
Grothendieck algebra; it assigns no Hamiltonian to $W$.

## Counterexample

1.1 In the ordered tensor basis, define
$v_{++}=|\uparrow\uparrow\rangle$,
$v_0=(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)/\sqrt2$,
$v_{--}=|\downarrow\downarrow\rangle$, and
$v_s=(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)/\sqrt2$.
These four vectors are pairwise orthonormal by the tensor-product inner
product, and they span the four-dimensional space. The swap $P$ fixes the first
three and sends $v_s$ to $-v_s$, so the same space decomposes into the
symmetric triplet and antisymmetric singlet for both Hamiltonians below.
The swap is an involutive permutation of an orthonormal basis, so $P=P^*$.
By [F2], it commutes with the diagonal $\mathfrak{sl}_2$ action. [given, A1, F1, F2, algebra]

1.2 Let $H_0=0$ and $H_1=JP$. Both are Hermitian, since $J$ is real and
$P=P^*$, and both commute with the same diagonal $\mathfrak{sl}_2$ action:
the zero matrix commutes with every endomorphism and $P$ commutes by [F2].
The spectrum of $H_0$ is $0$ with
multiplicity four; the spectrum of $H_1$ is $J$ on the triplet and $-J$ on
the singlet. Thus
$Z_{H_0}(\beta)=\operatorname{Tr}e^{-\beta H_0}=4$ and
$Z_{H_1}(\beta)=\operatorname{Tr}e^{-\beta H_1}
=3e^{-\beta J}+e^{\beta J}$. [given, F1, F2, algebra]

2.1 Since $\beta J=\ln2$, the second trace is
$3/2+2=7/2$, which differs from $4$. Hence the same spin representation
decomposition admits distinct symmetry-preserving spectra and Gibbs traces.
[given, step 1.1, step 1.2, algebra]

3.1 The Hall interface in [F1] and KLR interface in [F3] remain identical
for $H_0$ and $H_1$: they specify algebra and Grothendieck-group
identifications, while neither assigns an operator on $W$. Under the same
inherited assumption [A1], this pair therefore refutes the claimed
uniqueness. [A1, F1, F3, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The example is an exact finite-dimensional counterexample. It does not use
experimental evidence or identify the Hall or KLR categories with a
tensor-product categorification of the spin space.
