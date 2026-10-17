---
id: ex-qsm-ising-phase-regimes
kind: example
title: Controlled diagonal quantum Ising regimes
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: >-
  Illustrative conditional regimes of the spin-1/2 diagonal nearest-neighbor
  Ising model at positive temperature. The example concerns model states and a
  dimensionless lattice pressure, not a measured material or mechanical pressure.
deps:
  - def-qsm-infinite-spin-physical-quantities
  - pthm-qsm-diagonal-quantum-phase-predictions
dependency_roles:
  def-qsm-infinite-spin-physical-quantities: formulation-prerequisite
  pthm-qsm-diagonal-quantum-phase-predictions: physical-result
dependency_level: 13
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, KMS condition and diagonal Ising context, printed pp. 74–78
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, printed pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24, 31–43, and 52–55.
empirical_premises: []
verification:
  precheck: pass
---

## Example

Use the homogeneous nearest-neighbor spin-$\tfrac12$ model $H_\Lambda=-J\sum_{\{i,j\}\subseteq\Lambda,\ |i-j|_1=1}Z_iZ_j-h\sum_{i\in\Lambda}Z_i$, with $J$ and $h$ in joules, $Z_i$ the dimensionless Pauli matrices, and $T>0$. Here $|i-j|_1:=\sum_{k=1}^d|i_k-j_k|$ is the lattice $\ell^1$ distance; each internal unordered nearest-neighbor pair occurs once. The relevant implications are conditional model predictions:

- In one dimension, finite $J,h$ give exactly one full-algebra $\beta$-KMS state for every $T>0$.
- In two dimensions with $h=0$, the strict condition $4\tanh(|J|/(k_BT))<1$ is sufficient for uniqueness.
- In two dimensions with $J>0$, $h=0$, and $T\le J/(2k_B)$, there are at least two translation-invariant $\beta$-KMS states with opposite nonzero magnetizations. For the dimensionless pressure function $p_\beta(h)$ defined by the supplier, the secant slope from zero is at least $\beta m_*$ for every $h>0$ and at most $-\beta m_*$ for every $h<0$, so it has a cusp at zero field.

The last inequality is a conservative sufficient coexistence range; it is not an identified critical temperature. The example does not classify parameters outside the displayed regimes or describe a transverse-field model.

## Facts & Assumptions

**Given:** The physical units and positive-temperature convention of [[def-qsm-infinite-spin-physical-quantities]], and the conditional Ising model result of [[pthm-qsm-diagonal-quantum-phase-predictions]].

[A1] [[def-qsm-infinite-spin-physical-quantities]]: $J,h$ are energy parameters in joules, $\beta=1/(k_BT)$, and the dimensionless pressure per site is not a mechanical pressure in pascals.

[F1] [[pthm-qsm-diagonal-quantum-phase-predictions]]: in the homogeneous nearest-neighbour model, the sufficient two-dimensional high-temperature row-sum condition is $4\tanh(|J|/(k_BT))<1$; the two-dimensional low-temperature sufficient condition is $T\le J/(2k_B)$; the one-dimensional uniqueness and two-dimensional coexistence conclusions hold only under that theorem's stated assumptions. For the two-dimensional low-temperature model, $p_\beta(h)=\lim_{n\to\infty}|\Lambda_n|^{-1}\log\operatorname{Tr}_{\Lambda_n}(e^{-\beta H_{\Lambda_n}(h)})$, $\Lambda_n=[-n,n]^2$, is dimensionless per site and has secant slopes at least $\beta m_*$ for $h>0$ and at most $-\beta m_*$ for $h<0$.

## Verification

**Proof technique:** direct specialization of the earlier conditional result.

**Given:** [A1], [F1], finite $J,h$, and $T>0$.

1.1 The displayed Hamiltonian is the homogeneous nearest-neighbor specialization of the diagonal interaction in [F1], with each unordered internal edge counted once and the field term once per site. Its energy coefficients have units joules, so $\beta J=J/(k_BT)$ and $\beta h=h/(k_BT)$ are dimensionless. [A1, F1, given, algebra]

2.1 In $d=1$, [F1] applies for every finite $J,h$ and $T>0$. In $d=2$, substitution of the $2d=4$ nearest-neighbor terms into the strict row-sum criterion yields the sufficient high-temperature condition in the Example, while $\beta J\ge2$ is equivalent to $T\le J/(2k_B)$ and gives the sufficient coexistence condition. Thus the three displayed regimes follow from [F1], and parameters outside these sufficient conditions receive no conclusion here. [A1, F1, step 1.1, algebra] ∎


## Remarks

The example uses the physical-quantities item for the energy and temperature units only. Its separate AC-dependent entropy-density clause is not part of this specialization.
