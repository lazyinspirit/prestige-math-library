---
id: def-qsm-quasilocal-spin-algebra
kind: definition
title: Norm-completed quasi-local quantum spin algebra
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- def-qsm-local-spin-algebras
- lem-qsm-local-spin-inclusions-isometric
- def-c-star-algebra
- def-completion-of-a-normed-space
- def-countable-choice
- lem-qsm-matrix-state-calculus
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-c-star-algebra: mathematical-premise
  def-completion-of-a-normed-space: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
justified_by:
- lem-qsm-quasilocal-completion
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.2.3, pp. 55–57
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Definition

Use the finite local matrix algebras and isometric factor inclusions of [[def-qsm-local-spin-algebras]] and [[lem-qsm-local-spin-inclusions-isometric]]. Identify $A\in\mathcal A_\Lambda$ with its image in every larger finite-region algebra. The directed union

$$\mathcal A_{\mathrm{loc}}:=\bigcup_{\Lambda\subseteq\Gamma,\ |\Lambda|<\infty}\mathcal A_\Lambda$$

is the algebra of **strictly local observables**. Its norm is $\|A\|=\|A\|_{\mathcal A_\Lambda}$ for any finite localization region $\Lambda$ of $A$; isometric inclusions make this independent of the chosen region. The **quasi-local spin algebra** is the norm completion

$$\mathcal A:=\overline{\mathcal A_{\mathrm{loc}}}^{\,\|\cdot\|}.$$

The C*-algebra structure on this completion has product and adjoint extended continuously from the finite local matrix algebras. Countable Choice is assumed for the published existence theorem for metric completions; [[lem-qsm-quasilocal-completion]] supplies the full extension argument using the finite C*-identity of [[lem-qsm-finite-matrix-cstar-and-state-duality]].

**No global Hilbert tensor product is selected.** “Quasi-local” means norm completion of the directed algebra of finite-region observables; it does not mean a chosen representation as operators on an infinite tensor-product Hilbert space. A local operator $A\in\mathcal A_\Lambda$ may have more than one localization region. Disjoint finite local factors commute in their common finite tensor algebra.

