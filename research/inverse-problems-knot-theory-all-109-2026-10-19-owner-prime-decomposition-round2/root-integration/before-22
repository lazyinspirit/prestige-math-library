---
id: cex-knot-kt-05-boundary-case
kind: counterexample
title: "The Alexander polynomial does not determine the prime knot summands"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-connected-sum-and-prime-knot
  - thm-schubert-prime-decomposition-for-knots
  - lem-right-trefoil-is-prime
  - lem-mirroring-preserves-primality-of-a-knot
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
forward_refs:
  - def-knot-seifert-pairing-and-matrix
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - cor-alexander-polynomial-multiplies-under-connected-sum
  - def-levine-tristram-hermitian-form-and-signature
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - def-knot-arf-invariant-from-seifert-form
  - def-seifert-s-equivalence-and-conway-normalization
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.6–7.7 and §15.4, printed pp.94 and 254; granny and square knots"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Chapter 11, §11.5, printed pp.166–168; connected-sum prime decomposition context"
---

## Statement refuted

Assume the full Axiom of Choice. For an oriented Seifert surface $F\subset S^3$ with boundary $K$ and ordered basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$, let $V$ be the Seifert matrix with entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Here $\operatorname{lk}$ is the integer linking number of disjoint oriented cycles in $S^3$, and $a_i^+$ is a small push-off in the positive normal direction, chosen so that the positive normal followed by the oriented basis of $F$ gives the orientation of $S^3$. Use the standard knot-invariant conventions $\Delta_K(t)=\det(V-tV^T)$ up to units $\pm t^k$ and $\sigma_{-1}(K)=\operatorname{sign}(2(V+V^T))$, where the matrix sign is the number of positive eigenvalues minus the number of negative eigenvalues; independence of the chosen surface and basis is part of the Seifert-form invariance theorems. Let $T$ be the standard right-handed trefoil, let $T^*$ be its image under a fixed orientation-reversing reflection of $S^3$, and let $-T^*$ be that image with reversed knot orientation. Define $G=T\#T$ and $Q=T\#(-T^*)$. Then $\Delta_G(t)\doteq\Delta_Q(t)\doteq(t^2-t+1)^2$, and $|\sigma_{-1}(G)|=4$ while $\sigma_{-1}(Q)=0$. The oriented prime-factor multisets of $G$ and $Q$ are different. Thus equality of Alexander polynomials does not determine the prime knot summands.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Connected sums and prime knots]]

## Facts & Assumptions

**Given:** Full AC, the standard right-handed trefoil, and the planned KT-06/07/12 Seifert-form interfaces.

[A1] Full AC is the choice-function axiom. ([[def-axiom-of-choice]])

[A2] Full AC implies AC$_\omega$. ([[thm-choice-implies-dependent-implies-countable-choice]])

[A3] The planned KT-06 right-trefoil matrix convention is $V_T=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$; the actual definition and trefoil computation have not yet been authored or inspected. ([[def-knot-seifert-pairing-and-matrix]])

[A4] The planned KT-12 definition evaluates the Hermitian form at $\omega=-1$ as $2(V+V^T)$ and defines its signature; its actual statement and isotopy-invariance proof have not yet been authored or inspected. ([[def-levine-tristram-hermitian-form-and-signature]])

[A5] The planned KT-07 items identify $\det(V-tV^T)$ with the Alexander polynomial and prove multiplicativity under connected sum; their actual statements and proofs have not yet been authored or inspected. ([[thm-seifert-determinant-is-the-knot-alexander-polynomial]], [[cor-alexander-polynomial-multiplies-under-connected-sum]])

[A6] Exact unresolved suppliers are `def-knot-seifert-pairing-and-matrix`, `thm-seifert-matrix-presents-knot-alexander-module`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `cor-alexander-polynomial-multiplies-under-connected-sum`, `def-levine-tristram-hermitian-form-and-signature`, and `lem-seifert-stabilization-preserves-levine-tristram-signature`. ([[thm-seifert-matrix-presents-knot-alexander-module]], [[lem-seifert-stabilization-preserves-levine-tristram-signature]])

[A7] The prime-factor conclusion additionally requires `lem-right-trefoil-is-prime`, `lem-mirroring-preserves-primality-of-a-knot`, and `thm-schubert-prime-decomposition-for-knots`; the trefoil and Schubert items are escalated, while the mirror lemma depends on the trefoil result. ([[lem-right-trefoil-is-prime]], [[lem-mirroring-preserves-primality-of-a-knot]], [[thm-schubert-prime-decomposition-for-knots]])

## Refutation

**Given:** Full AC, the candidate matrix $V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$, and the planned matrix conventions [A3]–[A5].

1.1 Conditional on [A3] and [A5], direct calculation gives
$$\det(V-tV^T)=\det\begin{pmatrix}1-t&t\\-1&1-t\end{pmatrix}=(1-t)^2+t=1-t+t^2.$$
The proposed mirror matrix $-V^T$ gives the same polynomial up to a unit: $\det(-V^T+tV)=t^2\det(V-t^{-1}V^T)\doteq1-t+t^2$. [given, A3, A5, algebra]

2.1 Conditional on [A3]–[A5], the boundary connected-sum surfaces give block matrices $V\oplus V$ for $G$ and $V\oplus(-V^T)$ for $Q$. At $\omega=-1$, $2(V+V^T)=\begin{pmatrix}4&-2\\-2&4\end{pmatrix}$ has two positive eigenvalues, so the block signatures are $4$ and $2+(-2)=0$ respectively. The determinant of a block diagonal matrix is the product of block determinants, giving the same polynomial $(1-t+ t^2)^2$ for both. [given, A3, A4, A5, step 1.1, algebra]

3.1 The finite matrix calculation establishes the stated values conditional on the planned conventions. The matrix supplier, determinant-to-Alexander theorem, polynomial multiplicativity, signature definition/invariance, trefoil primeness and Schubert uniqueness suppliers listed in [A6]–[A7] are not yet available as actual inspected carriers; therefore the knot-invariant and distinct-prime-list conclusions are not verified and this counterexample is escalated. [given, A1, A2, A3, A4, A5, A6, A7, step 2.1]

## Owner escalation

Inspect the actual KT-06/07/12 items before promoting any planned interface to a fact. Verify the stated matrices and signature convention, then complete invariance and prime-factor comparisons. The explicit determinant/eigenvalue arithmetic above is conditional scaffolding only.

## Refutation references

[[def-knot-connected-sum-and-prime-knot]]

[[thm-schubert-prime-decomposition-for-knots]]

[[lem-right-trefoil-is-prime]]

[[def-knot-seifert-pairing-and-matrix]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[[cor-alexander-polynomial-multiplies-under-connected-sum]]

[[def-levine-tristram-hermitian-form-and-signature]]

[[lem-seifert-stabilization-preserves-levine-tristram-signature]]
