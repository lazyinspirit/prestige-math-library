---
id: cex-knot-kt-21-boundary-case
kind: counterexample
title: "An abstract annulus need not be a smooth concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-abstract-oriented-knot-cobordism
  - def-smooth-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-knot-connected-sum-and-prime-knot
  - def-knot-seifert-pairing-and-matrix
  - def-levine-tristram-hermitian-form-and-signature
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
  - lem-smooth-slice-iff-concordant-to-unknot
  - lem-slice-disk-induces-seifert-metabolizer
  - lem-locally-flat-slice-surface-bounds-seifert-hypersurface
  - thm-metabolizer-implies-levine-tristram-signature-vanishing
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 15
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, abstract cobordism/concordance definitions and signature discussion, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, concordance definitions; §1.1, slice knots, printed pp.4–5 and 10–11"
    - title: "Julia Collins, On the concordance orders of knots, PhD thesis"
      url: "https://era.ed.ac.uk/bitstream/handle/1842/5034/Collins2011.pdf?sequence=4"
      locator: "Theorem 2.2.9, pp.19–21, slice-disk Seifert form obstruction; Example 2.2.13, trefoil matrix and signature"
---

## Statement refuted

Every abstract oriented cobordism between two oriented knot circles in the standard three-sphere can be realized by a smoothly embedded concordance annulus in $S^3\times[0,1]$.

## Statement references

[[def-abstract-oriented-knot-cobordism|Abstract oriented cobordisms of knot circles]]

[[def-smooth-knot-concordance|Smooth embedded annulus concordance]]

## Facts & Assumptions

**Given:** The standard unknot $U$, the standard right-handed trefoil $T$, and the claim in the Statement refuted.

[F1] An abstract oriented cobordism is a compact oriented surface with boundary $-C_0\sqcup C_1$ and contains no ambient embedding data. ([[def-abstract-oriented-knot-cobordism]])

[F2] The Seifert matrix convention in the library is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for a chosen oriented surface and basis; the surface and basis are part of the data until invariance is proved. ([[def-knot-seifert-pairing-and-matrix]])

[F3] A trefoil Seifert surface admits a rank-two Seifert matrix whose symmetric sum is $\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$; if the cited convention uses the transpose matrix, the symmetric sum is unchanged. For a real symmetric matrix, its signature is the number of positive eigenvalues minus the number of negative eigenvalues. (Collins, Theorem 2.2.9 and Example 2.2.13, https://era.ed.ac.uk/bitstream/handle/1842/5034/Collins2011.pdf?sequence=4)

[F4] The standard unknot bounds a disk in $S^3$; the disk is contractible, so its first homology is zero and its symmetrized Seifert form has signature $0$. ([[def-knot-connected-sum-and-prime-knot]])

[F5] The current draft definition uses $H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T$, so at $\omega=-1$ its matrix is $2(V+V^T)$. This formula is used only for the finite matrix calculation here; its knot-level invariance is not inferred from this Definition. ([[def-levine-tristram-hermitian-form-and-signature]])

[F6] Under the Axiom of Countable Choice, a knot is smoothly slice if and only if it is smoothly concordant to the standard unknot. ([[lem-smooth-slice-iff-concordant-to-unknot]])

[A1] Full Axiom of Choice is assumed by the supplied Seifert-pairing definition. ([[def-axiom-of-choice]])

[A2] Full Axiom of Choice implies the countable-choice hypothesis used by [F6]. ([[thm-choice-implies-dependent-implies-countable-choice]])

[L1] The signature obstruction needs Seifert-surface/basis invariance and vanishing for a smooth slice disk at $-1$ when $-1$ is not a root. The actual batch-67 drafts [[def-levine-tristram-hermitian-form-and-signature]] and [[lem-seifert-stabilization-preserves-levine-tristram-signature]] are present; their formula and block calculation were inspected, but stabilization depends on [[lem-seifert-matrices-of-a-knot-are-s-equivalent]], whose proof closure through [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]] has not been validated. The actual batch-75 draft [[lem-slice-disk-induces-seifert-metabolizer]] is also present, but its proof is conditional on [[lem-locally-flat-slice-surface-bounds-seifert-hypersurface]], whose current body has no supplied proof. The batch-76 body [[thm-metabolizer-implies-levine-tristram-signature-vanishing]] remains absent. The draft Conway/Arf bridge is not a supplier for this signature obstruction. These interfaces do not complete the knot-level nonconcordance argument, so the item remains escalated.

## Counterexample

**Proof technique:** direct, with the nonconcordance inference escalated to the missing signature suppliers in [L1].

1.1 Let $C_0$ be the oriented circle underlying $U$ and $C_1$ the oriented circle underlying $T$. Take the abstract annulus $S^1\times[0,1]$ and identify its lower and upper boundary circles orientation-preservingly with $C_0$ and $C_1$, orienting the annulus so its boundary is $-C_0\sqcup C_1$. By [F1] this is an abstract oriented cobordism from $U$ to $T$. [F1, given, construct]

2.1 For the trefoil matrix in [F3], $$V+V^T=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}.$$ Its characteristic polynomial is $\lambda^2+4\lambda+3=(\lambda+1)(\lambda+3)$, so its eigenvalues are $-1$ and $-3$ and its signature is $-2$. By [F5], the Hermitian matrix at $\omega=-1$ is $H_{-1}(V)=2(V+V^T)$, which has the same signature. Also $\det(V+V^T)=3\ne0$, so $-1$ is not a root of the matrix polynomial $\det(V-tV^T)$. By [F4] the unknot's symmetrized form has rank zero and signature $0$. Thus the finite symmetrized-form calculations differ, and the nonroot boundary condition at $-1$ holds for the trefoil matrix. [F2, F3, F4, F5, A1, algebra]

3.1 If $U$ were smoothly concordant to $T$, then [F6] and [A2] would make $T$ smoothly slice. The intended contradiction is that [L1] makes the signature at $\omega=-1$ a concordance invariant and forces it to vanish for a smoothly slice knot, whereas step 2.1 computes $-2$ for $T$. The batch-67 invariance chain and batch-75 metabolizer proof remain incomplete, and the batch-76 vanishing theorem body is absent, so this inference is not claimed as proved here. No smooth-concordance conclusion is certified, and the counterexample remains escalated. [A2, F6, L1, step 2.1]

## Sources

[[def-abstract-oriented-knot-cobordism]]

[[def-smooth-knot-concordance]]

[[lem-smooth-slice-iff-concordant-to-unknot]]
