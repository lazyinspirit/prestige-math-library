---
id: cex-knot-kt-21-boundary-case
kind: counterexample
title: An abstract annulus need not be a smooth concordance
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-abstract-oriented-knot-cobordism
  - def-smooth-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-knot-connected-sum-and-prime-knot
  - def-knot-seifert-pairing-and-matrix
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - lem-smooth-slice-iff-concordant-to-unknot
  - lem-smooth-slice-disk-induces-seifert-metabolizer
  - lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 9
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
    - title: Charles Livingston, A Survey of Classical Knot Concordance, Handbook of
        Knot Theory, Chapter 7
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf
      locator: §2.1, abstract cobordism/concordance definitions and signature
        discussion, printed pp.322–323
    - title: Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture
        Notes 8
      url: https://numdam.org/item/10.5802/wbln.39.pdf
      locator: §3, concordance definitions; §1.1, slice knots, printed pp.4–5 and 10–11
    - title: Julia Collins, On the concordance orders of knots, PhD thesis
      url: https://era.ed.ac.uk/bitstream/handle/1842/5034/Collins2011.pdf?sequence=4
      locator: Theorem 2.2.9, printed pp.20–21, slice-disk Seifert form obstruction;
        Definition2.2.5, printed p.19, and Example2.2.13, printed p.23,
        transpose convention and trefoil matrix
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

[F3] The canonical three-positive-crossing disk-and-band surface has a positive handle basis with matrix $\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$. Its oriented crossing chart is the standard right-handed trefoil chart, so this is a specified surface for $T$. The matrix and its sign follow from the three pair-of-band Hopf annuli and the intersection form, rather than a handedness label alone. [[lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form]]

[F4] The standard unknot bounds a disk in $S^3$; the disk is contractible, so its first homology is zero and its symmetrized Seifert form has signature $0$. ([[def-knot-connected-sum-and-prime-knot]])

[F5] A metabolizer for a rank-two integral Seifert form is a rank-one direct summand $L$ with $V(x,y)=0$ for $x,y\in L$. Thus every nonzero $x\in L$ satisfies $x^T(V+V^T)x=2V(x,x)=0$. This is immediate from the defining bilinear relation, with no signature-invariance or general signature-vanishing theorem. ([[def-metabolic-seifert-form-and-algebraic-knot-concordance]])

[F6] Under the Axiom of Countable Choice, a knot is smoothly slice if and only if it is smoothly concordant to the standard unknot. ([[lem-smooth-slice-iff-concordant-to-unknot]])

[A1] Full Axiom of Choice is assumed by the supplied Seifert-pairing definition. ([[def-axiom-of-choice]])

[A2] Full Axiom of Choice implies the countable-choice hypothesis used by [F6]. ([[thm-choice-implies-dependent-implies-countable-choice]])

[F7] A smooth neat slice disk gives a metabolizer for every specified Seifert surface of its boundary. The complete smooth hypersurface, positive bicollar, and homological half-rank kernel argument are supplied independently of the held TOP hypersurface statement. [[lem-smooth-slice-disk-induces-seifert-metabolizer]]

## Counterexample

**Proof technique:** direct finite-form obstruction, using the separately proved smooth slice-to-metabolizer result.

1.1 Let $C_0$ be the oriented circle underlying $U$ and $C_1$ the oriented circle underlying $T$. Take the abstract annulus $S^1\times[0,1]$ and identify its lower and upper boundary circles orientation-preservingly with $C_0$ and $C_1$, orienting the annulus so its boundary is $-C_0\sqcup C_1$. By [F1] this is an abstract oriented cobordism from $U$ to $T$. [F1, given, construct]

1.2 For the fixed trefoil matrix in [F3], $V+V^T=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}.$ Its characteristic polynomial is $\lambda^2+4\lambda+3=(\lambda+1)(\lambda+3)$, so its eigenvalues are $-1,-3$ and its signature is $-2$. More directly, for $x=(a,b)\ne0$ over $\mathbb Q$ or $\mathbb R$, $x^T(V+V^T)x=-2(a^2-ab+b^2)=-(a-b)^2-a^2-b^2<0.$ Consequently $V$ cannot have a rank-one metabolizer: a nonzero vector in one would have zero value by [F5]. This is a calculation for the displayed Seifert surface and basis; no knot-level signature invariance is being inferred. The unknot's rank-zero form in [F4] still has signature zero. [F2, F3, F4, F5, A1, algebra]

2.1 If $U$ were smoothly concordant to $T$, [F6] and [A2] would give a smooth slice disk for $T$, with product boundary collar by the smooth concordance convention. Apply [F7] to that disk and the particular genus-one Seifert surface in [F3]. It gives a rank-one metabolizer for the displayed matrix, contradicting step 1.2. Thus no smooth concordance realizes the abstract annulus of step 1.1. This refutes the stated universal claim. [A1, A2, F5, F6, F7, step 1.1, step 1.2, algebra] ∎

## Sources

[[def-abstract-oriented-knot-cobordism]]

[[def-smooth-knot-concordance]]

[[lem-smooth-slice-iff-concordant-to-unknot]]
