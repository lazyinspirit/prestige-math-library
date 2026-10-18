---
id: thm-qc-tqc-f-symbol-unitary
kind: theorem
title: F-symbol unitarity
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-qc-tqc-f-symbol, def-qc-tqc-unitary-fusion-category, thm-qc-tqc-fusion-multiplicity-space-is-hilbert, lem-qc-tqc-fusion-tree-dimension]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: F-matrices are unitary changes between orthonormal tree bases."
---

## Statement

Every F-symbol matrix in orthonormal fusion-tree bases of a unitary fusion
category is unitary.

## Facts & Assumptions

**Given:** a unitary fusion category and simple charges $a,b,c,d$.

[F1] [[def-qc-tqc-f-symbol]]: the F-symbol matrix is the coordinate matrix of
$f\mapsto f\circ\alpha_{a,b,c}^{-1}$ from the left-tree Hom basis to the
right-tree Hom basis.

[F2] [[def-qc-tqc-unitary-fusion-category]]: the dagger is conjugate-linear
and reverses composition, and the associator is unitary,
$\alpha_{a,b,c}^\dagger=\alpha_{a,b,c}^{-1}$.

[F3] [[thm-qc-tqc-fusion-multiplicity-space-is-hilbert]]: for simple
$x,y,z$, the vertex space $V_{xy}^z$ has the positive Hermitian pairing
$\langle f,g\rangle\operatorname{id}_z=f\circ g^\dagger$, linear in the
first variable.

[F4] [[lem-qc-tqc-fusion-tree-dimension]]: both tree families in [F1] are
orthonormal bases of their fixed-input, fixed-total fusion spaces.

## Proof

1.1 For either tree domain $X$, let $(u_j)$ be its complete tree basis from [F4]. Composing the orthonormal vertex identities of [F3] along the tree, as in [F4], gives $u_j\circ u_k^\dagger=\delta_{jk}\operatorname{id}_d$. Consequently, for $f=\sum_j f_j u_j$ and $g=\sum_j g_j u_j$, conjugate-linearity of the dagger gives $f\circ g^\dagger=(\sum_j f_j\overline{g_j})\operatorname{id}_d$. Thus the coordinate inner product satisfies $\langle f,g\rangle\operatorname{id}_d=f\circ g^\dagger$ on both tree Hom spaces, although $X$ need not be simple. [F2, F3, F4, algebra]

2.1 Let $T(f)=f\circ\alpha_{a,b,c}^{-1}$. For maps $f,g$ in the left-tree Hom space, step 1.1 and unitarity of $\alpha$ give $\langle T(f),T(g)\rangle\operatorname{id}_d=(f\circ\alpha^{-1})\circ(g\circ\alpha^{-1})^\dagger=f\circ\alpha^{-1}\circ\alpha\circ g^\dagger=\langle f,g\rangle\operatorname{id}_d$. Since $d$ is a nonzero simple object, its identity is nonzero, so $T$ preserves inner products. [F1, F2, step 1.1, algebra]

3.1 The associator is an isomorphism, so $T$ is bijective. By [F1], its coordinate matrix in the orthonormal bases of [F4] is $F_d^{abc}$. A bijective inner-product-preserving linear map has a matrix $F$ satisfying $F^\dagger F=FF^\dagger=I$ in orthonormal bases; if the space is zero, $F$ is the empty identity matrix. Hence this F-symbol is unitary. [F1, F4, step 2.1, algebra] ∎
