---
id: ex-qftx-n2-long-rest-fiber-algebra
kind: example
title: Finite $N=2$ rest-fiber algebra with zero central charge and strict bound
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
physical_scope: "A finite-dimensional N=2 rest-frame supercharge-algebra module in natural units; it demonstrates a strict central-charge bound only and is not a full Poincare representation, a constructed QFT, or evidence for a physical particle."
sources:
  references:
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§3.4, printed pp. 13–15 (PDF pp. 18–20), massive central-charge oscillator algebra and the distinction between strict and saturated bounds."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf"
      locator: "§2.4.2, printed pp. 40–41 (PDF pp. 31–32), long versus short massive N=2 representations; the finite CAR module is constructed locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M>0$ and let $\mathcal K=\Lambda\mathbb C^4$ with orthonormal basis $|S\rangle$ indexed by subsets $S\subseteq\{1,2,3,4\}$ and grading $(-1)^{|S|}$. For $j\in\{1,2,3,4\}$ define $c_j|S\rangle=0$ when $j\notin S$ and
$c_j|S\rangle=(-1)^{|\{s\in S:s<j\}|}|S\setminus\{j\}\rangle$ when $j\in S$. Let $c_j^\dagger$ be the actual Hilbert adjoint. For $I,\alpha\in\{1,2\}$ put $j=2(I-1)+\alpha$ and set $Q^I_\alpha=\sqrt{2M}\,c_j$, with $\bar Q_{\dot\alpha I}=(Q^I_\alpha)^\dagger$. Take $P^\mu=(M,0,0,0)$ and $Z^{IJ}=0$. On $\mathcal D=\mathcal K$, these operators satisfy the massive $N=2$ rest-frame supercharge relations with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\epsilon_{12}=1$. Since $\|Z\|_{\mathrm{op}}=0<M$, the central-charge bound is strict in these rest-frame algebra data, so the mass/central-charge equality condition for BPS saturation is not met. This finite module is a representation of the rest-frame supercharge algebra only; it is not asserted to extend to a full Poincare representation or a physical particle.

## Example references

[[def-qftx-bps-state-and-saturation]]

[[def-qftx-super-poincare-algebra-4d]]

## Facts & Assumptions

**Given:** The $16$-dimensional graded Hilbert space, the four contraction operators and their actual adjoints, $M>0$, $P^\mu=(M,0,0,0)$, and $Z^{IJ}=0$.

[A1] Assume $\mathrm{AC}_\omega$, inherited from the selected representation and BPS-bound interface ([[def-countable-choice]]): every sequence of nonempty sets has a choice function.

[F1] [[def-qftx-bps-state-and-saturation]]: a nonzero vector in a massive $N=2$ rest fiber is BPS-saturated exactly when $M=|z|$; this algebraic criterion does not assert state existence or stability.

[F2] [[def-qftx-super-poincare-algebra-4d]]: $\eta=\operatorname{diag}(-1,1,1,1)$, $\epsilon_{12}=1$, $\bar Q=(Q)^\dagger$, $\{Q^I_\alpha,\bar Q_{\dot\beta J}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu\delta^I{}_J$, and $\{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ}$.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], [F2], and the operators in the Example.

1.1 For the displayed subset-basis action, removing two distinct labels in opposite orders gives opposite signs, while removing the same label twice gives zero; hence $\{c_j,c_k\}=0$. For $j\ne k$, inserting $k$ and removing $j$ in opposite orders also gives opposite signs. For $j=k$, if $j\notin S$ then $c_jc_j^\dagger|S\rangle=|S\rangle$ and $c_j^\dagger c_j|S\rangle=0$, while if $j\in S$ the two terms reverse roles. Thus $\{c_j,c_k^\dagger\}=\delta_{jk}I$ on every basis vector; taking adjoints gives $\{c_j^\dagger,c_k^\dagger\}=0$. [given, algebra]

2.1 Scaling by $\sqrt{2M}$ gives $\{Q^I_\alpha,(Q^J_\beta)^\dagger\}=2M\delta^I{}_J\delta_{\alpha\beta}I$ and all same-chirality anticommutators zero. These are exactly the rest-frame relations in [F2] with $Z^{IJ}=0$ and $P_0=-M$. [F2, step 1.1, algebra]

3.1 Since $Z=0$, its operator norm is $\|Z\|_{\mathrm{op}}=0<M$. By [F1], the $N=2$ mass/central-charge equality condition is $M=|z|=\|Z\|_{\mathrm{op}}$, which fails for these rest-frame algebra data. This conclusion concerns only the finite module and does not assert that it is a BPS sector of a full Poincare representation. [F1, step 2.1, algebra]

4.1 The verification concerns only a finite rest-frame module and uses no choice from a family; [A1] is retained as the inherited interface assumption of the BPS definition. The data supply no Lorentz action, full unitary Poincare representation, or physical particle, so the example makes no claim about the spectrum of any QFT. [A1, given, step 3.1] ∎
