---
id: def-qftx-bps-state-and-saturation
kind: definition
title: BPS state and central-charge saturation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-algebra-and-multiplets
deps:
  - thm-qftx-n-extended-central-charge-bounds
  - pthm-qftx-n2-bps-saturation-kernel-equivalence
  - def-qftx-unitary-super-poincare-representation
  - def-countable-choice
dependency_roles:
  thm-qftx-n-extended-central-charge-bounds: mathematical-premise
  pthm-qftx-n2-bps-saturation-kernel-equivalence: physical-result
  def-qftx-unitary-super-poincare-representation: formulation-prerequisite
  def-countable-choice: mathematical-premise
dependency_level: 4
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Algebraic BPS saturation in massive rest fibers of selected four-dimensional rigid extended-super-Poincare unitary representations, in natural units; no physical QFT, particle existence, or stability is asserted."
sources:
  references:
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§3.4, printed pp. 13–15 (PDF pp. 18–20), equations (3.12)–(3.16): massive central-charge bounds and representation shortening."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf"
      locator: "§2.4.2, printed pp. 40–41 (PDF pp. 31–32): the N=2 central-charge inequality and the null supercharge combination at saturation."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice and use natural units $\hbar=c=1$. Let $N\ge2$, and let a selected four-dimensional rigid super-Poincare representation have a nonzero Hilbert space with positive inner product, future-cone joint momentum spectrum, and closed supercharges with actual Hilbert adjoints on the common invariant product domain specified here. A **massive rest fiber** is a nonzero Hilbert space $\mathcal K$ carrying the restricted supercharge and central-charge operators on a common dense invariant domain $\mathcal D$, with $P^\mu=(M,0,0,0)$, $M>0$, and scalar central-charge matrix $Z=(z^{IJ})$ acting by $Z^{IJ}=z^{IJ}I$, where $z^{IJ}=-z^{JI}$. Use metric $\eta=\operatorname{diag}(-1,1,1,1)$, so $P_0=-M$, and the convention $\epsilon_{12}=1$ in the supercharge algebra.

For $v\in\mathbb C^N$, set $\|v\|_2^2=\sum_I|v_I|^2$ and define $\|Z\|_{\mathrm{op}}=\sup_{\|v\|_2=1}\|Zv\|_2$. The unitary massive-fiber bound is $M\ge\|Z\|_{\mathrm{op}}$. A **BPS-saturated state** in this item is a nonzero vector $\psi\in\mathcal D$ in a specified massive rest fiber for which $M=\|Z\|_{\mathrm{op}}$. This term records algebraic saturation only; it does not assert that any specified charge is represented by a state, or that a saturating state exists, is stable, or occurs in a physical spectrum.

For $N=2$, write $z=z^{12}$, so $Z=\begin{pmatrix}0&z\\-z&0\end{pmatrix}$ and $\|Z\|_{\mathrm{op}}=|z|$. Choose $\phi$ such that $e^{-i\phi}z=|z|$ and define $A=Q^1_1-e^{i\phi}(Q^2_2)^*$ and $A^\sharp=(Q^1_1)^*-e^{-i\phi}Q^2_2$ on $\mathcal D$. In this $N=2$ case, a nonzero domain vector saturates the bound if and only if both displayed combinations annihilate it. For unbounded charges, $A^\sharp$ denotes the displayed sum of individual adjoints and is not assumed to be the maximal-domain adjoint of $A$.

## Definition references

[Bilal, §3.4](https://arxiv.org/pdf/hep-th/0101055)

[Tong, §2.4.2](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf)

[[thm-qftx-n-extended-central-charge-bounds]]

[[pthm-qftx-n2-bps-saturation-kernel-equivalence]]

[[def-qftx-unitary-super-poincare-representation]]

[[def-countable-choice]]
