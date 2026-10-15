---
id: thm-hh-finite-double-hopf-structure-and-canonical-r
kind: theorem
title: "Finite double and its canonical quasitriangular structure"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 12
deps:
  - def-hh-finite-double-cross-relations
  - lem-hh-double-coalgebra-and-antipode-descent
  - thm-hh-double-modules-and-yetter-drinfeld-modules
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - def-hh-leg-notation-and-quasitriangular-hopf-algebra
  - def-hh-braiding-and-triangular-structure
  - def-hh-module-category-and-tensor-action
  - thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §4.3, Theorem 4.18"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §7.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $H$ be a finite-dimensional Hopf algebra over a field with bijective antipode, and let $(h_i)$ and $(f_i)$ be dual bases of $H$ and $H^*$. In the factor order $D(H)=H^{*\mathrm{op}}\otimes H$, the tensor

$$R=\sum_i(f_i\otimes1_H)\otimes(\varepsilon_H\otimes h_i)$$

is basis-independent and invertible, with

$$R^{-1}=\sum_i(f_i\otimes1_H)\otimes(\varepsilon_H\otimes S^{-1}(h_i)).$$

It is quasitriangular in the convention

$$R\Delta_D(d)=\Delta_D^{\mathrm{op}}(d)R,\qquad(\Delta_D\otimes\operatorname{id})R=R_{13}R_{23},\qquad\alpha^{-1}_{D,D,D}(\operatorname{id}\otimes\Delta_D)R=R_{13}R_{12}.$$

On every pair of left $D(H)$-modules, $\tau\circ R$ is the Yetter–Drinfeld braiding of [[thm-hh-double-modules-and-yetter-drinfeld-modules]].

## Facts & Assumptions

**Given:** A finite-dimensional Hopf algebra $H$ with bijective antipode, its finite double $D(H)$, and the left-left Yetter–Drinfeld equivalence and braiding already proved. Prove the canonical tensor is a basis-independent invertible $R$ and satisfies the three quasitriangular identities.

[F1] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for dual bases $(h_i),(f_i)$, $\sum_i f_i\otimes h_i$ is basis-independent and represents $\operatorname{id}_H$ under $H^*\otimes H\cong\operatorname{End}_k(H)$.

[L1] [[def-hh-finite-double-cross-relations]]: $D(H)=H^{*\mathrm{op}}\otimes H$ in normal order $fh$.

[L2] [[lem-hh-double-coalgebra-and-antipode-descent]]: $D(H)$ is a Hopf algebra with $\Delta_D(fh)=\sum(f_1h_1)\otimes(f_2h_2)$.

[L3] [[thm-hh-double-modules-and-yetter-drinfeld-modules]]: on left $D(H)$-modules the map $c(v\otimes w)=\sum v_{-1}\cdot w\otimes v_0$ is a natural, invertible module braiding satisfying both hexagons.

[F2] [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]: in the fixed left-associated triple tensor, the second quasitriangular hexagon is $\alpha^{-1}_{H,H,H}(\operatorname{id}\otimes\Delta)(R)=R_{13}R_{12}$.

[F3] [[def-hh-module-category-and-tensor-action]]: a bialgebra acts diagonally on tensor products of modules, including its regular left module.

[F4] [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]]: finite-dimensionality gives bijective antipode.

[F5] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: the antipode is anti-multiplicative.

[A1] The antipode $S$ of $H$ is bijective; this is explicit because $R^{-1}$ uses $S^{-1}$, and [F4] supplies it.

## Proof


1.1 By [F1], $\sum_i f_i\otimes h_i$ represents $\operatorname{id}_H$, so it is independent of the chosen dual bases. Applying the embeddings $H^*\to D(H)$ and $H\to D(H)$ in the two tensor factors preserves this independence and gives the displayed $R$. [F1, L1, construct]

1.2 Applying $S^{-1}$ to the two antipode equations, and reversing products by the anti-multiplicativity result [F5], gives $\sum x_2S^{-1}(x_1)=\varepsilon(x)1_H=\sum S^{-1}(x_2)x_1$. Multiplying $R$ by the proposed inverse, the first double factor uses $f_i\odot f_j=f_j*f_i$ and the second uses $h_iS^{-1}(h_j)$. Pairing the first dual factor with $x\in H$ gives $\sum_{i,j} f_j(x_1)f_i(x_2)h_iS^{-1}(h_j)=\sum x_2S^{-1}(x_1)=\varepsilon(x)1_H$. In the reverse product the pairing is $\sum_{i,j}f_j(x_1)f_i(x_2)S^{-1}(h_i)h_j=\sum S^{-1}(x_2)x_1=\varepsilon(x)1_H$. Finite dual separation [F1] makes both products $1_D\otimes1_D$. [A1, F1, F4, F5, L1, L2, algebra]

1.3 On any two left $D(H)$-modules, $(\tau R)(v\otimes w)=\sum_i h_i\cdot w\otimes(f_i\otimes1_H)\cdot v=\sum_i f_i(v_{-1})h_i\cdot w\otimes v_0=\sum v_{-1}\cdot w\otimes v_0=c(v\otimes w)$ by the dual-basis identity $\sum_i f_i(x)h_i=x$. Thus $\tau R$ is the natural invertible module braiding of [L3]. [F1, L1, L3, algebra]

2.1 Apply $D(H)$-linearity of this braiding to the regular left modules $V=W=D(H)$, whose tensor actions are supplied by [F3]. Since $c=\tau\circ L_R$, pulling the target action on $W\otimes V$ back along the flip gives the operator identity $L_RL_{\Delta_D(d)}=L_{\Delta_D^{\mathrm{op}}(d)}L_R$ on $D(H)\otimes D(H)$. Evaluating at $1_D\otimes1_D$ yields $R\Delta_D(d)=\Delta_D^{\mathrm{op}}(d)R$. [F3, L2, L3, step 1.3, algebra]

3.1 Apply the hexagon $c_{V,W\otimes U}=(\operatorname{id}_W\otimes c_{V,U})(c_{V,W}\otimes\operatorname{id}_U)$ from [L3] to three regular modules with their tensor actions [F3]. Substituting $c=\tau R$ and tracking the initial order $V,W,U$ makes its two crossing operators $R_{12}$ followed by $R_{13}$; hence their combined operator is $R_{13}R_{12}$. The left side is the block flip applied to $(\operatorname{id}\otimes\Delta_D)R$, with the fixed reassociation, so [F2] gives $\alpha^{-1}_{D,D,D}(\operatorname{id}\otimes\Delta_D)R=R_{13}R_{12}$. The other hexagon $c_{V\otimes W,U}=(c_{V,U}\otimes\operatorname{id}_W)(\operatorname{id}_V\otimes c_{W,U})$ first crosses positions $2,3$ and then $1,3$, producing $R_{13}R_{23}$ and thus $(\Delta_D\otimes\operatorname{id})R=R_{13}R_{23}$. Evaluating both regular-module operator identities at $1_D\otimes1_D\otimes1_D$ proves equality in $D(H)^{\otimes3}$. These are the stated leg conventions, so all three quasitriangular identities hold. [F2, F3, L2, L3, step 1.3, algebra] ∎
## Remarks

No triangularity assertion is made. The exact leg convention, including the associator in the second hexagon, has been checked against the batch-8 definition body.
