---
id: def-skew-multiplicity-module-over-c
kind: definition
title: "The skew multiplicity module $K^{\\lambda/\\mu}$ over $\\mathbb C$"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
  - def-sign-representation-and-restriction-of-a-representation
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-hom-groups-and-induced-hom-maps
  - prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-young-tableau-standard-tableau-and-shape
  - def-group-ring
  - thm-group-actions-and-group-ring-modules-correspond
justified_by:
  - thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 3, printed pp. 116–117: the restriction of a Specht character to a product subgroup and its skew Schur characteristic"
---

## Definition

Let $\mu\subseteq\lambda$ be partitions, put $m:=|\mu|$ and $r:=|\lambda|-m$, and let $S^\mu$ and $S^\lambda$ be the complex Specht modules. Use the block subgroup $H_{m,r}\le S_{m+r}$ and the group identification $\iota_{m,r}:S_m\times S_r\to H_{m,r}$ of [[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]. Restrict $S^\lambda$ to $H_{m,r}$ and pull the action back along $\iota_{m,r}$; write the resulting finite-dimensional complex $S_m\times S_r$-module as $V^{\lambda}_{m,r}$ ([[def-sign-representation-and-restriction-of-a-representation]], [[def-finite-dimensional-representation-of-a-group-over-a-field]]).

View $S^\mu$ and $V^{\lambda}_{m,r}$ as left $\mathbb C[S_m]$-modules via the correspondence between group actions and group-ring modules ([[def-group-ring]], [[thm-group-actions-and-group-ring-modules-correspond]]). The **skew multiplicity module** is

$$K^{\lambda/\mu}:=\operatorname{Hom}_{\mathbb C[S_m]}\bigl(S^\mu,V^{\lambda}_{m,r}\bigr),$$

the space of $\mathbb C[S_m]$-module homomorphisms ([[def-hom-groups-and-induced-hom-maps]]). It is a complex vector space by [[prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra]] and the group-action/group-ring-module correspondence. It is finite-dimensional: each Specht module is spanned by polytabloids indexed by the finite set of tableaux of its shape ([[def-young-tableau-standard-tableau-and-shape]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]), and $K^{\lambda/\mu}$ is a linear subspace of the finite-dimensional space of complex-linear maps from $S^\mu$ to $V^{\lambda}_{m,r}$.

Give it an $S_r$-action by postcomposition on the target:

$$(\tau\cdot\varphi)(v):=\iota_{m,r}(1,\tau)\cdot\varphi(v)\qquad(\tau\in S_r,\ \varphi\in K^{\lambda/\mu},\ v\in S^\mu).$$

This action is well defined. For $\sigma\in S_m$, the two elements $\iota_{m,r}(\sigma,1)$ and $\iota_{m,r}(1,\tau)$ commute in $S_m\times S_r$, so

$$(\tau\cdot\varphi)(\sigma\cdot v)=\iota_{m,r}(1,\tau)\iota_{m,r}(\sigma,1)\cdot\varphi(v)=\iota_{m,r}(\sigma,1)\iota_{m,r}(1,\tau)\cdot\varphi(v)=\sigma\cdot(\tau\cdot\varphi)(v).$$

Thus $\tau\cdot\varphi$ remains $\mathbb C[S_m]$-linear, and componentwise multiplication shows $(\tau_1\tau_2)\cdot\varphi=\tau_1\cdot(\tau_2\cdot\varphi)$ with the identity acting trivially. This makes $K^{\lambda/\mu}$ a finite-dimensional complex $S_r$-module. The construction includes $m=0$ and $r=0$. It defines the skew object as an intertwiner space over $\mathbb C$; no skew polytabloid filtration over an arbitrary field is asserted. No choice principle is used.
