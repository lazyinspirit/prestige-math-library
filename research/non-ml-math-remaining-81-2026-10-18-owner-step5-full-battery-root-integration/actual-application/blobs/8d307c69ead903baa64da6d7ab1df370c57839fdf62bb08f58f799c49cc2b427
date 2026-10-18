---
id: thm-daha-a1-polynomial-representation-faithful
kind: theorem
title: "The generic rank-one DAHA polynomial representation is faithful"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-daha-a1-double-affine-hecke-algebra, def-daha-a1-root-datum-and-parameter-conventions, def-daha-a1-polynomial-representation, lem-daha-a1-affine-normal-words-span, lem-daha-a1-q-affine-automorphisms-linearly-independent]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 5, Theorems 5.6–5.8, PDF pp. 25–28; the local proof gives the rank-one leading-term argument explicitly."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§7.11–7.13, PDF pp. 56–59: type-A1 DAHA and polynomial representation context."
---

## Statement

Let $K=\mathbb Q(q,t)$ with $q,t$ algebraically independent. The polynomial representation of [[def-daha-a1-double-affine-hecke-algebra]] from [[def-daha-a1-polynomial-representation]] is faithful over this formal parameter field. This item makes no coefficient-specialization claim; in particular, it does not claim faithfulness at root-of-unity $q$.

## Facts & Assumptions

**Given:** The rank-one DAHA, its polynomial representation, the spanning normal words, and the q-affine substitutions acting on Laurent polynomials.

[F1] [[def-daha-a1-polynomial-representation]]: $\pi,T_0,T_1$ act by one affine substitution plus a Laurent-rational multiplication term, and the coefficient of the substitution part is $a_i(z)=(tu_i(z)-t^{-1})/(u_i(z)-1)$.

[F2] [[lem-daha-a1-affine-normal-words-span]]: every DAHA element is a finite linear combination of $Z^mT_{i_1}\cdots T_{i_r}\pi^\epsilon$ with alternating indices and $\epsilon\in\{0,1\}$.

[F3] [[lem-daha-a1-q-affine-automorphisms-linearly-independent]]: distinct affine substitutions $z\mapsto q^a z^{\pm1}$ are linearly independent as operators on $K[z,z^{-1}]$ with coefficients in $K(z)$.

[F4] [[def-daha-a1-root-datum-and-parameter-conventions]]: the extended affine group is $W_{\mathrm{aff}}\rtimes\Omega$, and each element has a unique form $w\pi^\epsilon$ with $w$ an alternating reduced word in $s_0,s_1$ and $\epsilon\in\{0,1\}$.

## Proof

1.1 Write each $\mathsf T_i=a_i\sigma_i+b_i$ as in [F1], with $b_i(z)\in K(z)$. The rational function $a_i(z)$ is nonzero: its numerator $tu_i(z)-t^{-1}$ is nonzero because $u_i$ is a nonconstant monomial and $t\ne0$. In the expansion of an alternating word $T_{i_1}\cdots T_{i_r}\pi^\epsilon$, choosing the substitution term $a_{i_j}\sigma_{i_j}$ from every $\mathsf T_{i_j}$ gives the affine substitution $g=s_{i_1}\cdots s_{i_r}\pi^\epsilon$ with a nonzero rational coefficient $\gamma_g(z)$, a product of transforms of the nonzero $a_{i_j}$. Every other term omits at least one reflection and therefore has affine Coxeter length strictly less than $r$. The semidirect-product normal form in [F4] makes the top substitutions for distinct alternating words and $\pi^\epsilon$ distinct. [F1, F2, F4, given, algebra]

2.1 Suppose a finite linear combination of the spanning words in [F2] acts as zero, and choose the largest affine length $r$ among words with a nonzero coefficient. For any fixed top substitution $g$ of length $r$, step 1.1 shows that its coefficient in the crossed-product expansion is exactly $\gamma_g(z)\sum_m c_m z^m$: shorter words and all lower terms have smaller length. By [F3], the coefficient of each substitution must vanish. Since $\gamma_g\ne0$, the Laurent polynomial $\sum_m c_mz^m$ is zero, so all its coefficients vanish. Repeating for the finitely many top substitutions of length $r$ and then descending in length shows that every coefficient in the original relation is zero. [F2, F3, step 1.1, algebra]

3.1 The spanning family in [F2] has linearly independent images by step 2.1. Every element of the representation kernel is a finite linear combination of that spanning family, so it is zero. Thus the representation is injective and hence faithful. [F2, step 2.1, algebra] ∎
