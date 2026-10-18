---
id: lem-hh-signed-alcove-products-and-oriented-basis
kind: lemma
title: "Signed alcove products and the oriented affine Hecke basis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [lem-hh-root-datum-affine-geometry-and-wall-parameters, def-hh-affine-hecke-algebra-from-root-datum, lem-hh-affine-hecke-im-basis, thm-hh-matsumoto-reduced-word-theorem, thm-cg-affine-alcove-transitivity-presentation-and-length, lem-cg-affine-generic-gallery-paths-and-disk-moves]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrich Görtz, Alcove walks and nearby cycles on affine flag manifolds"
      url: "https://arxiv.org/pdf/math/0610839"
      locator: "Theorem 3.1.1, Proposition 3.2.1, and §3.4."
---

## Statement

Use the canonical affine-wall geometry of a reduced based root datum and its normalized Iwahori–Matsumoto algebra ([[def-hh-affine-hecke-algebra-from-root-datum]]). Let $A$ be the base alcove, $W_{\mathrm e}=Y\rtimes W_0=W_{\mathrm{aff}}\rtimes\Omega$, and $D$ a finite Weyl chamber at infinity. A crossing of $H_{\beta,k}$ is positive if it moves toward the side containing points sufficiently far in $D$. For an expression $g=s_1\cdots s_r\omega$, assign the sign $\varepsilon_i=1$ to a positive crossing from $s_1\cdots s_{i-1}A$ to $s_1\cdots s_iA$, and $\varepsilon_i=-1$ to a negative crossing. Then
$$E_D(g):=N_{s_1}^{\varepsilon_1}\cdots N_{s_r}^{\varepsilon_r}U_\omega$$
is independent of the expression, including expressions that are not reduced. Moreover $\{E_D(g):g\in W_{\mathrm e}\}$ is a complex vector-space basis of the algebra. Products for galleries beginning at another alcove satisfy the same independence assertion. An endpoint retains its group element, so elements of $\Omega$ with the same geometric alcove are distinguished.

## Facts & Assumptions

**Given:** The canonical affine geometry and the positive conjugacy-invariant parameters specified above.

[F1] The affine subgroup is the Coxeter group of the base-alcove walls, its length counts separating walls, and its action is simply transitive on alcoves. In the essential quotient these facts and the finite dihedral wall cycles are supplied by [[thm-cg-affine-alcove-transitivity-presentation-and-length]] and [[lem-cg-affine-generic-gallery-paths-and-disk-moves]]. The canonical root-datum realization, including its common root-kernel directions and $\Omega$, is proved in [[lem-hh-root-datum-affine-geometry-and-wall-parameters]].

[F2] Coxeter words reduce by braid moves and deletion of adjacent equal generators; any two reduced words for the same element are related by braid moves ([[thm-hh-matsumoto-reduced-word-theorem]]).

[F3] The normalized elements $N_g=N_wU_\omega$, for $g=w\omega$, form a basis. For a simple generator $s$, $N_s^{-1}=N_s-c_s$, where $c_s=v_s-v_s^{-1}$, and multiplication by a simple generator changes length by one or contributes a shorter term ([[lem-hh-affine-hecke-im-basis]], [[def-hh-affine-hecke-algebra-from-root-datum]]).

## Proof

**Given:** The data above.

1.1 A backtrack crosses the same wall twice in opposite directions, so its signed product is $N_sN_s^{-1}=1$ or $N_s^{-1}N_s=1$. To check a braid move of length $m<\infty$, examine the associated $2m$-sector dihedral residue. Project a point sufficiently far in $D$ to a plane transverse to its common codimension-two face. The $m$ wall lines through the origin separate that plane into the $2m$ sectors of [F1]. On traversing their cycle once, the signs are $m$ consecutive plus signs followed by $m$ consecutive minus signs, up to cyclic rotation: the roots defining the crossed sides run consecutively through a half-circle, and the sign of their pairing with the projected point changes exactly at the two bounding rays of a half-plane. Starting at the beginning of the plus block, the positive product is one alternating word of length $m$ and the negative product is the inverse of the other alternating word. The Hecke braid relation makes their product $1$. Every cyclic rotation also has product $1$, since every factor is invertible. Cutting the cycle into the two gallery arcs of the braid move proves equality of their signed products. This also proves the assertion for a residue translated away from the base alcove. [F1, F3, algebra]

2.1 By [F2], reduce either expression for an affine element by braid moves and backtrack deletions and then compare the resulting reduced expressions. Step 1.1 preserves each product. Every extended expression can first be put in the form of an affine word followed by a single $\omega$: the crossed-product identity $U_\omega N_sU_\omega^{-1}=N_{\omega s\omega^{-1}}$ transports each crossing to the same geometric wall, with the same direction sign and parameter. The affine part and terminal $\omega$ are unique at the group level. This proves independence for extended words. The same backtrack and dihedral-cycle argument works with any initial alcove. Common root-kernel directions do not meet a wall and are recorded only in the terminal frame, so introduce no additional gallery relation. [F1, F2, F3, step 1.1, algebra]

3.1 Choose a reduced expression for $g$. Replacing each inverse factor by $N_s-c_s$ gives the term $N_g$ from retaining every generator. Every other term uses fewer than $\ell(g)$ simple factors, so repeated simple multiplication from [F3] expresses it as a finite sum of $N_h$ with $\ell(h)<\ell(g)$. Thus $E_D(g)=N_g+\sum_{\ell(h)<\ell(g)}a_{h,g}N_h$, with finitely many nonzero coefficients. Induction on $\ell(g)$ shows that the $E_D(g)$ span: length-zero elements are exactly $U_\omega$, and the formula expresses $N_g$ through $E_D(g)$ and shorter elements. [F3, step 2.1, algebra]

4.1 In a finite relation among the $E_D(g)$, choose the largest length with a nonzero coefficient. At that length the expansion in step 3.1 has distinct leading terms $N_g$, and all its other terms have smaller length. Their coefficients cannot cancel because the $N_g$ are a basis. Thus no nonzero relation exists. This proves the asserted basis, even when $\Omega$ is infinite, because every expansion and relation considered has finite support. All choices and inductions here concern finite words and finite-dimensional residue planes. [F3, step 3.1, algebra] ∎
