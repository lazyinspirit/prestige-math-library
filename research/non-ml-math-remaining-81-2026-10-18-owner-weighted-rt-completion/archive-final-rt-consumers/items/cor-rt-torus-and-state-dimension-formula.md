---
id: cor-rt-torus-and-state-dimension-formula
kind: corollary
title: "RT torus operators and the state-space dimension formula"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-modular-hopf-matrix-squared, thm-algebraic-verlinde-formula, thm-weighted-rt-tqft-and-factorization, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§8.14 and 8.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.8 and 6.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Assume the weighted TQFT and factorization maps asserted in [[thm-weighted-rt-tqft-and-factorization]] have been established for a complex modular ribbon fusion category. For simple labels $i_1,\ldots,i_n$ and genus $g\ge0$,

$$\dim V(\Sigma_g;i_1,\ldots,i_n) =\sum_{x\in I}S_{0x}^{\,2-2g-n}\prod_{r=1}^nS_{i_rx}.$$

The torus state space has dimension $|I|$. In the standard meridian/longitude basis the torus generators are the matrix $S=s/D$ and the diagonal twist operator $T_{ij}=\delta_{ij}\theta_i$, with the weight convention supplying the stated projective scalar. No complex conjugation is part of the general dimension formula.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, its $S$ matrix, and the factorization isomorphisms and torus mapping-class maps from the named TQFT theorem.

[F1] $S$ is symmetric, invertible, satisfies $S^2=C$, and the general algebraic Verlinde formula is $N_{ij}^k=\sum_x S_{ix}S_{jx}S_{k^*x}/S_{0x}$ ([[def-modular-ribbon-category-and-hopf-link-data]], [[lem-modular-hopf-matrix-squared]], [[thm-algebraic-verlinde-formula]]).

[A1] The factorization maps, their inverses and the weighted TQFT are a stated interface of [[thm-weighted-rt-tqft-and-factorization]], whose current carrier records unresolved surgery and coupon-cancellation proofs. This corollary is conditional on that interface actually being established.

## Proof

**Given:** The data in the Statement, including the conditional factorization interface [A1].

1.1 For a sphere with three simple labels, its state space is $\operatorname{Hom}(\mathbf1,i_1\otimes i_2\otimes i_3)$, whose dimension is $N_{i_1i_2}^{i_3^*}$. By [F1] this equals
$\sum_x\frac{S_{i_1x}S_{i_2x}S_{i_3x}}{S_{0x}},$
which is the claimed formula for $(g,n)=(0,3)$. For $(g,n)=(0,0),(0,1),(0,2)$ the same formula reduces respectively to $\sum_xS_{0x}^2=1$, $\sum_xS_{0x}S_{ix}=\delta_{i0}$, and $\sum_xS_{ix}S_{jx}=\delta_{i,j^*}$, all entries of $S^2=C$ and symmetry in [F1]. [F1, given, algebra]

1.2 Assume the formula for a cut surface and glue two boundary circles carrying dual labels $a,a^*$. For a nonseparating cut, summing over the glued label contributes
$\sum_a S_{ax}S_{a^*x}=\sum_a S_{ax}S_{a,x^*}=1,$
by symmetry, dual-label symmetry, and $S^2=C$; the exponent changes from $2-2g-(n+2)$ to $2-2(g+1)-n$, which is the same integer. For a separating cut into genera $g_1,g_2$, the sum contributes
$\sum_a S_{ax}S_{a^*y}=\delta_{xy};$
the two powers of $S_{0x}$ then combine to exponent $2-2(g_1+g_2)-(n_1+n_2-2)$. Thus both kinds of factorization preserve the displayed formula. Repeatedly cutting a genus-$g$ surface into three-holed spheres proves the formula for all $g,n$. [A1, F1, step 1.1, algebra]

2.1 For $g=1,n=0$, the exponent is zero, so the formula gives $\sum_{x\in I}1=|I|$. The meridian/longitude mapping cylinder sends a basis label through one positive crossing of the corresponding two core colors; its matrix coefficient is the normalized Hopf-link evaluation $s_{ij}/D=S_{ij}$. A positive Dehn twist adds one positive ribbon twist to a core colored $i$, so its coefficient is $\theta_i$ and no off-diagonal label change occurs. The weighted category accounts for the projective scalar in the generator relation; it does not alter these declared matrix entries in the fixed basis convention. [F1, A1, step 1.2, algebra] ∎

## Readiness note

The conditional derivation is complete. The unconditioned RT corollary remains escalated until the factorization and surgery-defined TQFT in [A1] have complete proofs.
