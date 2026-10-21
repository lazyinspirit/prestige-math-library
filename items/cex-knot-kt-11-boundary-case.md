---
id: cex-knot-kt-11-boundary-case
kind: counterexample
title: "A higher cyclic branched cover can have infinite first homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - thm-knot-determinant-is-order-of-double-cover-homology
  - thm-knot-cyclic-cover-order-from-alexander-polynomial
  - lem-square-seifert-presentation-and-alexander-normalization
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, Seifert Forms and Concordance"
      url: "https://arxiv.org/pdf/math/0101035v3"
      locator: "Section 3, Theorem 3.1 and Corollary 3.2, printed pp. 406–407; Theorem 3.1 cites Fox and the local argument is supplied here"
    - title: "Shin’ichi Saeki, Knot Theory Lecture Notes, Chapter 7: Seifert Matrices and Derived Invariants"
      url: "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
      locator: "Chapter 7, Example 7.4; right-handed trefoil Seifert matrix"
---

## Statement refuted

Every cyclic branched cover of a smooth oriented knot has finite first homology.

## Statement references

[[thm-knot-cyclic-cover-order-from-alexander-polynomial|The Alexander-polynomial criterion for cyclic-cover finiteness]]

[[thm-knot-determinant-is-order-of-double-cover-homology|Every double branched cover has finite first homology]]

[Livingston, “Seifert Forms and Concordance,” Theorem 3.1](https://arxiv.org/pdf/math/0101035v3)

## Facts & Assumptions

**Given:** Full AC, the right-handed trefoil matrix $V_T=\begin{pmatrix}-1&0\\1&-1\end{pmatrix}$, and the primitive sixth root $\zeta_6=e^{i\pi/3}$.

[A1] Full AC is the choice-function axiom required by the cyclic-cover and Alexander-polynomial theorems. [[def-axiom-of-choice]]

[F1] The Seifert determinant $\det(V-tV^T)$ represents the Alexander polynomial up to a unit $\pm t^k$. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]], [[def-alexander-polynomial-from-the-first-elementary-ideal]]

[F2] The cyclic-cover order theorem states that a zero at any nontrivial $q$-th root makes the first homology infinite. [[thm-knot-cyclic-cover-order-from-alexander-polynomial]]

[F3] The Alexander normalization gives $\Delta_K(1)=\pm1$, and the double-cover theorem gives finiteness when $|\Delta_K(-1)|$ is this nonzero odd integer. [[lem-square-seifert-presentation-and-alexander-normalization]], [[thm-knot-determinant-is-order-of-double-cover-homology]]

## Counterexample

**Proof technique:** direct.

1.1 Direct calculation gives $\det(V_T-tV_T^T)=\det\begin{pmatrix}t-1&-t\\1&t-1\end{pmatrix}=t^2-t+1$. By [F1], this represents the trefoil Alexander polynomial up to $\pm t^k$. Since $\zeta_6^2-\zeta_6+1=0$, the Alexander polynomial vanishes at this nontrivial sixth root. [F1, given, algebra]

2.1 Applying [F2] with $q=6$ shows that $H_1(\Sigma_6(T);\mathbb Z)$ is infinite, contradicting the refuted universal claim. For the boundary comparison, [F3] gives $\Delta_T(-1)$ odd and nonzero, so $H_1(\Sigma_2(T);\mathbb Z)$ is finite. Thus the failure occurs at a higher cyclic cover even though the double-cover case is always finite. The two supplier theorems use the Axiom of Choice in [A1]. [A1, F2, F3, step 1.1, given] ∎
