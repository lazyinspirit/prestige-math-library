---
id: pthm-qftx-n2-bps-central-charge-mass
kind: physics-theorem
title: N=2 SU(2) central-charge mass bound from Seiberg–Witten periods
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
axiom_base: ZF + AC_omega, inherited through the mathematical central-charge theorem and unitary representation definition.
deps:
  - def-countable-choice
  - def-qftx-n2-coulomb-branch-data
  - def-qftx-unitary-super-poincare-representation
  - post-qftx-n2-seiberg-witten-effective-solution
  - thm-qftx-n-extended-central-charge-bounds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-unitary-super-poincare-representation: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  thm-qftx-n-extended-central-charge-bounds: mathematical-premise
proof_strategy: direct
physical_scope: Conditional representation-theoretic mass bound for an existing massive state in a selected pure-SU(2) N=2 Seiberg–Witten period patch; it asserts neither state existence nor stability, and does not construct the underlying continuum QFT.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9407087v1
      locator: "§1, equations (1.1)–(1.2), printed pp. 1–2; §4, equations (4.5)–(4.7), printed pp. 17–18: source normalization of the BPS mass formula and electric/magnetic period pairing."
    - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9601007v1
      locator: "§4.3, equation (4.14), printed pp. 16–17: the source period pairing and mass normalization for states already in short multiplets."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Use the four-dimensional rigid
$\mathcal N=2$ super-Poincare convention
$\eta=\operatorname{diag}(-1,1,1,1)$, $\epsilon_{12}=1$, and
$c=\hbar=1$. Let $U$ be a regular patch of the selected pure-SU(2)
Seiberg--Witten period data. Fix $u\in U$ and a formal charge label
$(n_e,n_m)\in\mathbb Z^2$. Suppose the selected physical model has a
nonzero massive unitary rest-fiber representation $\mathcal K$ with mass
$M>0$, scalar central-charge matrix $Z^{12}=zI$, $Z^{21}=-zI$, a common
dense invariant product domain $\mathcal D$, and actual Hilbert adjoints for
all supercharges. Require its charge normalization to be

$$z=\sqrt2\,\mathcal Z_{\mathrm{SW}}(u;n_e,n_m)=\sqrt2\bigl(n_ea(u)+n_ma_D(u)\bigr).$$

Then

$$M\ge\sqrt2\,|n_ea(u)+n_ma_D(u)|.$$

If equality holds, choose $\varphi\in\mathbb R$ with
$e^{-i\varphi}z=|z|$ and define
$A=Q^1_1-e^{i\varphi}(Q^2_2)^*$ and
$A^\sharp=(Q^1_1)^*-e^{-i\varphi}Q^2_2$ on $\mathcal D$. Both
$A\psi$ and $A^\sharp\psi$ vanish for every $\psi\in\mathcal D$.
Equality defines algebraic BPS saturation only; the statement asserts no
state exists for any chosen charge label and no BPS state is stable.

## Statement references

[Seiberg and Witten, §1, equations (1.1)–(1.2), and §4, equations (4.5)–(4.7)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §4.3, equation (4.14)](https://arxiv.org/pdf/hep-th/9601007v1).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the period data on $U$, and the
massive rest-fiber representation and common domain in the Statement.

[A1] Assume $\mathrm{AC}_\omega$: every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[thm-qftx-n-extended-central-charge-bounds]]: under $\mathrm{AC}_\omega$, in a massive rest-fiber representation with $M>0$ and common invariant product domain, $M\ge\|Z\|_{\mathrm{op}}$; for $N=2$, $Z^{12}=zI$ gives $\|Z\|_{\mathrm{op}}=|z|$, and equality implies the phase-selected null charge pair annihilates every domain vector.

[F2] [[def-qftx-unitary-super-poincare-representation]]: the inner product is positive, each $\bar Q$ is the actual Hilbert adjoint with its actual domain, and all displayed generator products are defined on a common dense invariant domain.

[F3] [[def-qftx-n2-coulomb-branch-data]]: on a local regular patch, $a$ and $a_D$ are the electric and dual period coordinates, and the source-normalized charge-label pairing is $\mathcal Z_{\mathrm{SW}}=n_ea+n_ma_D$.

[A2] [[post-qftx-n2-seiberg-witten-effective-solution]]: the adopted model convention identifies the scalar algebraic central charge with $z=\sqrt2\,\mathcal Z_{\mathrm{SW}}$; the singularity and low-energy solution data are source-proposed model inputs.

## Proof

**Given:** [F1] applies to the stated nonzero massive N=2 rest fiber with its common domain; [F3] and [A2] fix the period pairing and its central-charge normalization.

1.1 By [F3], the formal period pairing for the chosen label is
$\mathcal Z_{\mathrm{SW}}=n_ea(u)+n_ma_D(u)$. By [A2], the scalar
central-charge entry is therefore
$z=\sqrt2\bigl(n_ea(u)+n_ma_D(u)\bigr)$. [F3, A2, given, algebra]

2.1 For the antisymmetric $N=2$ matrix
$Z=\begin{pmatrix}0&z\\-z&0\end{pmatrix}$, direct multiplication gives
$Z^*Z=|z|^2I_2$, hence $\|Z\|_{\mathrm{op}}=|z|$. Apply [F1] to obtain
$M\ge\|Z\|_{\mathrm{op}}=|z|
=\sqrt2\,|n_ea(u)+n_ma_D(u)|$. [A1, F1, step 1.1, algebra]

3.1 If equality holds, then $M=|z|$. The N=2 saturation conclusion in [F1],
with $e^{-i\varphi}z=|z|$, gives $A\psi=A^\sharp\psi=0$ for every
$\psi\in\mathcal D$. The conclusion remains confined to this represented
rest fiber: neither [F1] nor the period pairing asserts that the selected
charge label occurs as a stable state. [F1, F2, step 2.1] ∎

## Remarks

The source papers use the period mass normalization for BPS states; this item
derives the inequality from the local mathematical positive-representation
theorem and records the equality condition without taking BPS saturation as a
premise. The formal lattice may contain labels absent from the stable spectrum.
