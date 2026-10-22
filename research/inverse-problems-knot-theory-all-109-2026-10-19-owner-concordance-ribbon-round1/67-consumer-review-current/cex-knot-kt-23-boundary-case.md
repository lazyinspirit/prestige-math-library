---
id: cex-knot-kt-23-boundary-case
kind: counterexample
title: "The trefoil fails both algebraic sliceness tests"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 17
deps:
  - def-axiom-of-choice
  - def-levine-tristram-hermitian-form-and-signature
  - def-knot-seifert-pairing-and-matrix
  - cor-nonfactorization-obstructs-sliceness
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - lem-slice-disk-induces-seifert-metabolizer
  - thm-locally-flat-slice-implies-fox-milnor-factorization
  - thm-metabolizer-implies-levine-tristram-signature-vanishing
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ralph H. Fox and John W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots"
      url: "https://ir.library.osaka-u.ac.jp/repo/ouka/all/7307/ojm03_02_08.pdf"
      locator: "§2, Theorem 2, printed pp. 262–263."
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3.1 and §3.3, printed pp. 325–326: metabolic signature vanishing and the reciprocal-norm obstruction."
    - title: "Anthony Conway, The Levine–Tristram Signature: A Survey"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1 and Remark 2.10, printed pp. 3–5: the Hermitian signature and metabolic vanishing."
---

## Statement refuted

Assume full AC, and let $T$ be the right-handed trefoil whose positive-push Seifert matrix in the ordered Hopf-core basis is $V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$. The claim refuted is that $T$ bounds a locally flat properly embedded disk in the standard four-ball $B^4$.

## Statement references

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The trefoil matrix and its positive-push convention]]

[[thm-locally-flat-slice-implies-fox-milnor-factorization|The necessary Fox–Milnor norm condition]]

[[cor-nonfactorization-obstructs-sliceness|The necessary sliceness obstruction]]

[[thm-metabolizer-implies-levine-tristram-signature-vanishing|The metabolic signature obstruction]]

## Facts & Assumptions

**Given:** Full AC, the positive-push trefoil matrix $V$, and the claim that the trefoil is locally flat slice to be refuted.

[A1] Full AC is the choice axiom assumed by the Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] The positive Hopf-plumbed right-handed trefoil has $V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ in the stated basis. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F2] The determinant $\det(V-tV^T)$ generates the Alexander polynomial up to a Laurent unit. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F3] At a nonroot $\omega\ne1$, the Levine–Tristram signature is the signature of $H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T$. [[def-levine-tristram-hermitian-form-and-signature]]

[F4] If this Seifert form is metabolic and $\Delta_T(\omega)\ne0$, then $\sigma_\omega(T)=0$. [[thm-metabolizer-implies-levine-tristram-signature-vanishing]]

[L1] The Fox–Milnor theorem and the current slice-metabolizer supplier state the slice-to-metabolizer route, but the latter proof is conditional on a separate locally flat hypersurface construction. [[thm-locally-flat-slice-implies-fox-milnor-factorization]], [[lem-slice-disk-induces-seifert-metabolizer]]

[L2] The corollary converting nonfactorization to nonsliceness is the contrapositive of [L1] and inherits that same unresolved proof obligation. [[cor-nonfactorization-obstructs-sliceness]]

## Counterexample

1.1 By [F1] and [F2], $\Delta_T(t)\doteq\det(V-tV^T)=(1-t)^2+t=t^2-t+1$. Thus $|\Delta_T(-1)|=3$, since every Laurent unit $\pm t^k$ evaluates to $\pm1$ at $-1$. [A1, F1, F2, given, algebra]

2.1 If $\Delta_T(t)\doteq f(t)f(t^{-1})$ for some $f\in\mathbb Z[t^{\pm1}]$, then evaluating at $t=-1$ gives $3=f(-1)^2$ or $-3=f(-1)^2$. Neither is possible because an integer square is nonnegative and $3$ is not an integer square. Hence the trefoil polynomial is not an integral reciprocal norm. [step 1.1, algebra]

2.2 At $\omega=-1$, one has $H_{-1}(V)=2(V+V^T)=\begin{pmatrix}4&-2\\-2&4\end{pmatrix}$, whose eigenvalues are $2$ and $6$. Since $\Delta_T(-1)\ne0$, its Levine–Tristram signature is $2$. By [F4], a metabolic Seifert form would have signature $0$ there, so the trefoil Seifert form is not metabolic. [F1, F3, F4, step 1.1, algebra]

3.1 The polynomial and signature calculations refute algebraic sliceness. They would refute local flat sliceness through [L1] or [L2], but those supplier proofs remain unresolved in the current carriers; this item therefore remains escalated rather than claiming a completed topological refutation. [L1, L2, step 2.1, step 2.2] ∎

## Unresolved proof obligation

The local computations prove that $\Delta_T$ is not a reciprocal norm and that the Levine–Tristram signature at $-1$ is $2$, so the trefoil Seifert form is not metabolic. The assigned locally flat nonsliceness conclusion still requires the locally flat slice-disk-to-metabolizer proof. The current `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` has no proof of the required embedded locally flat 3-manifold and aligned two-sided product neighborhood; do not treat the numerical calculation alone as a proof that no locally flat disk exists.
