---
id: def-shifted-coalgebra-l-infinity-algebra
kind: definition
title: "Shifted coalgebra definition of an L∞-algebra"
status: published
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-koszul-sign-rule-for-graded-tensors
  - def-reduced-graded-symmetric-coalgebra
  - def-ring-characteristic
  - lem-field-is-a-commutative-ring
  - lem-reduced-graded-symmetric-coalgebra-is-cofree
  - lem-coderivation-extension-from-corestrictions
justified_by:
  - lem-square-zero-coderivation-is-higher-jacobi-identities
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, sh Lie Structures"
      url: "https://arxiv.org/pdf/hep-th/9209099"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§10.1.12–10.1.20"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $k$ be a characteristic-zero field ([[def-field]],
[[def-ring-characteristic]]), and let $V=\bigoplus_{j\in\mathbb Z}V^j$ be a
graded $k$-vector space. Use the cohomological suspension

$$W=V[1],\qquad W^j=V^{j+1}.$$

The reduced cofree conilpotent cocommutative coalgebra on $W$ is the
$S^c(W)=\bigoplus_{n\ge1}S^n(W)$ of
[[def-reduced-graded-symmetric-coalgebra]], with its cofree property proved
in [[lem-reduced-graded-symmetric-coalgebra-is-cofree]].

An **L∞-algebra on $V$ in the shifted coalgebra convention** is a degree $+1$
coderivation $Q:S^c(W)\to S^c(W)$ with $Q^2=0$ and no arity-zero component.
A coderivation satisfies
$\bar\Delta Q=(Q\otimes1+1\otimes Q)\bar\Delta$, with the Koszul sign on
$1\otimes Q$, as defined in
[[lem-coderivation-extension-from-corestrictions]]. Its corestrictions are

$$q_n=\pi_1 Q|_{S^n(W)}:S^n(W)\longrightarrow W,\qquad |q_n|=+1 \quad(n\ge1),$$

where $\pi_1:S^c(W)\to S^1(W)=W$ is the length-one projection. Conversely,
each such family determines a unique coderivation by that lemma. The
condition $Q^2=0$ is equivalent to the higher Jacobi identities proved in
[[lem-square-zero-coderivation-is-higher-jacobi-identities]].

This is the shifted convention only: no unsuspended skew operations $l_n$ or
translation formula for them is asserted. Curved $L_\infty$ structures with
an arity-zero term are outside this definition.
