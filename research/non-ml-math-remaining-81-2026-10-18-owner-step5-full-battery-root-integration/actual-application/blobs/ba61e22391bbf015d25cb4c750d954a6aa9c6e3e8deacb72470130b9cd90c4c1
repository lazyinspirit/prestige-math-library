---
id: thm-ko-coefficient-table-and-eightfold-periodicity
kind: theorem
title: The real KO coefficient table and eightfold periodicity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 15
deps:
- thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
- thm-real-bott-periodicity-from-rank-eight-clifford-thom
- lem-real-and-symplectic-clutching-groups-in-low-degrees
- def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
  - title: Max Karoubi, Lectures on K-theory, ICTP Lecture Notes (2004)
    url: https://webusers.imj-prg.fr/~max.karoubi/Publications/71.pdf
  - title: Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf
      bundles and Morse theory (2021)
    url: https://arxiv.org/pdf/2011.14368
proof_strategy: direct
---

## Statement

Assume AC. For $n=0,\ldots,7$, the groups $KO^{-n}(\mathrm{pt})$ are respectively $\mathbb Z,\mathbb Z/2,\mathbb Z/2,0,\mathbb Z,0,0,0$. Multiplication by the volume-positive rank-eight spinor class $\beta$ gives $KO^j(\mathrm{pt})\cong KO^{j-8}(\mathrm{pt})$ for every integer $j$. The degree-four integer generator is the rank-four quaternionic spinor image of the quaternionic line; the degree-eight generator is the actual symbol $\beta$.

## Facts & Assumptions

**Given:** AC and the real bundle theory with its suspension grading.

[F1] Independent stable clutching calculations give $KO^0(\mathrm{pt})=\mathbb Z$, $KO^{-1}=KO^{-2}=\mathbb Z/2$, $KO^{-3}=0$, and $KSp^0(\mathrm{pt})=\mathbb Z$, $KSp^{-j}(\mathrm{pt})=0$ for $1\le j\le3$ ([[lem-real-and-symplectic-clutching-groups-in-low-degrees]]).

[F2] The trivial rank-four Spin bundle induces the natural isomorphism $KSp^0(Y)\to\widetilde{KO}^0(Y_+\wedge S^4)$ with the specified balanced quaternionic spinor symbol ([[thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp]]).

[F3] Multiplication by the same rank-eight symbol $\beta$ is an isomorphism on all finite pairs and integer degrees ([[thm-real-bott-periodicity-from-rank-eight-clifford-thom]]).



**Proof technique:** low clutching and the quaternionic rank-four boundary.

## Proof

**Proof technique:** direct construction.

1.1 The first four groups are exactly [F1]. That proof uses components and the first two homotopy groups of stable $O$, independently of real Bott and of this table. Their integer and order-two generators are respectively the real line, the Möbius clutching and the one-turn stable orthogonal clutching. [F1]


1.2 For pointed finite CW $Y$, the isomorphism [F2] commutes with basepoint evaluation and with its split section. Its map on the basepoint summand is also an isomorphism. Hence it restricts to an isomorphism on the two kernels, namely $\widetilde{KSp}^0(Y)\cong\widetilde{KO}^0(Y\wedge S^4)$. Explicitly, any lift of a target-kernel element has zero basepoint restriction by injectivity on the basepoint group, which proves surjectivity on kernels; injectivity is inherited. [F2, algebra]


2.1 Taking $Y=S^j\wedge S^0$ for $j=0,1,2,3$ in step 1.2 gives $KO^{-4-j}(\mathrm{pt})\cong KSp^{-j}(\mathrm{pt})$. The second list in [F1] therefore supplies $\mathbb Z,0,0,0$ for degrees $-4,-5,-6,-7$. At $j=0$ the quaternionic line maps by the actual rank-four spinor symbol, fixing the stated generator. This uses the quaternionic source, not a false unshifted real rank-four orientation. [F1, F2, step 1.2, algebra]


3.1 Combining steps 1.1 and 2.1 proves all eight residue groups. The natural isomorphism [F3] transports them to every integer degree, with map multiplication by the fixed $\beta$. No complex Bott theorem, abstract periodicity of orthogonal groups or ABS comparison has entered this deduction. AC is carried from the exact suppliers, so no choice-free conclusion is asserted. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
