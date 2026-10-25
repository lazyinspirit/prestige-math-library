---
id: ex-qftx-n2-short-rest-fiber-algebra
kind: example
title: Finite N=2 rest-fiber algebra at central-charge saturation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-algebra-and-multiplets-examples
deps:
  - def-qftx-bps-state-and-saturation
  - def-qftx-super-poincare-algebra-4d
  - def-countable-choice
dependency_roles:
  def-qftx-bps-state-and-saturation: formulation-prerequisite
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A finite-dimensional N=2 rest-frame supercharge-algebra module in natural units; it demonstrates algebraic saturation only and is not a full Poincare representation, a constructed QFT, or evidence for a physical particle."
sources:
  references:
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§3.4, printed pp. 13–15 (PDF pp. 18–20), central-charge oscillators and shortening; this four-dimensional CAR module is constructed locally."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf"
      locator: "§2.4.2, printed pp. 40–41 (PDF pp. 31–32), N=2 BPS oscillator combinations; no full Poincare extension is imported."
verification:
  precheck: pass
---

## Example

Let $M>0$ and let $\mathcal K$ have orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|12\rangle$. Give $\mathcal K$ the grading for which $|0\rangle,|12\rangle$ are even and $|1\rangle,|2\rangle$ are odd. Define operators $c_1,c_2$ by

$$c_1|0\rangle=0,\quad c_1|1\rangle=|0\rangle,\quad c_1|2\rangle=0,\quad c_1|12\rangle=|2\rangle,$$

$$c_2|0\rangle=0,\quad c_2|1\rangle=0,\quad c_2|2\rangle=|0\rangle,\quad c_2|12\rangle=-|1\rangle,$$

and let $c_1^\dagger,c_2^\dagger$ be their actual Hilbert adjoints. Set

$$Q^1_1=\sqrt{2M}\,c_1,\quad Q^2_2=\sqrt{2M}\,c_1^\dagger,\quad Q^1_2=\sqrt{2M}\,c_2,\quad Q^2_1=-\sqrt{2M}\,c_2^\dagger.$$

Take $P^\mu=(M,0,0,0)$, $Z^{12}=M I$, $Z^{21}=-M I$, $Z^{11}=Z^{22}=0$, and $\bar Q_{\dot\alpha I}=(Q^I_\alpha)^\dagger$. On $\mathcal D=\mathcal K$ these matrices satisfy the massive N=2 rest-frame supercharge relations with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\epsilon_{12}=1$. The central-charge bound is saturated and the corresponding combination $A=Q^1_1-(Q^2_2)^\dagger$ vanishes identically. This is a finite-dimensional module for the rest-frame supercharge algebra; no extension to the full Poincare group or physical particle is asserted.

## Example references

[[def-qftx-bps-state-and-saturation]]

[[def-qftx-super-poincare-algebra-4d]]

## Facts & Assumptions

**Given:** The four-dimensional graded Hilbert space, its stated operators, $M>0$, $P^\mu=(M,0,0,0)$, and the displayed central charges.

[A1] Assume $\mathrm{AC}_\omega$, inherited from the selected representation and BPS-bound interface ([[def-countable-choice]]): every sequence of nonempty sets has a choice function.

[F1] [[def-qftx-bps-state-and-saturation]]: for a massive N=2 rest fiber, saturation means $M=|z|$; it is an algebraic criterion and does not assert state existence or stability.

[F2] [[def-qftx-super-poincare-algebra-4d]]: $\eta=\operatorname{diag}(-1,1,1,1)$, $\epsilon_{12}=1$, $\bar Q=(Q)^\dagger$, $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, and $\{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ}$.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], [F2], and the matrices defined in the Example.

1.1 In the ordered basis $|0\rangle,|1\rangle,|2\rangle,|12\rangle$, the stated operators are $c_1=\begin{pmatrix}0&1&0&0\\0&0&0&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$ and $c_2=\begin{pmatrix}0&0&1&0\\0&0&0&-1\\0&0&0&0\\0&0&0&0\end{pmatrix}$. Their conjugate-transpose matrices are the actual adjoints. Multiplication gives $\{c_i,c_j^\dagger\}=\delta_{ij}I_4$ and $\{c_i,c_j\}=0$ for $i,j\in\{1,2\}$; taking adjoints also gives $\{c_i^\dagger,c_j^\dagger\}=0$. [given, algebra]

2.1 Scaling these identities by $2M$ shows $\{Q^I_\alpha,(Q^J_\beta)^\dagger\}=2M\delta^I{}_J\delta_{\alpha\beta}I_4$. The only nonzero same-chirality brackets with $I=1,J=2$ are $\{Q^1_1,Q^2_2\}=2M I_4$ and $\{Q^1_2,Q^2_1\}=-2M I_4$. They equal $2\epsilon_{12}Z^{12}$ and $2\epsilon_{21}Z^{12}$, respectively; the reversed flavor pairs give the same values by symmetry of the anticommutator and antisymmetry of both $\epsilon$ and $Z$. Thus the undotted central brackets match [F2], and their adjoints give the dotted relations; all other same-chirality brackets vanish. [F2, step 1.1, algebra]

3.1 Here $Z=\begin{pmatrix}0&M\\-M&0\end{pmatrix}$ has $Z^\dagger Z=M^2 I_2$, hence $\|Z\|_{\mathrm{op}}=M=|Z^{12}|$. Also $A=\sqrt{2M}c_1-\sqrt{2M}c_1=0$, and its adjoint combination is zero. Therefore every nonzero vector in $\mathcal D$ satisfies the algebraic saturation condition in [F1]. [F1, step 2.1, algebra]

4.1 The construction verifies only the finite rest-frame supercharge algebra. It uses no choice from a family, while [A1] is retained as the inherited interface assumption of the BPS definition. Since the data supply no Lorentz action or full unitary Poincare representation, they do not establish a physical particle or QFT state. [A1, given, step 3.1] ∎
