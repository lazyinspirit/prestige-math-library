---
id: ex-drinfeld-double-of-a-finite-group
kind: example
title: "The Drinfeld double of a finite group algebra"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 13
deps:
  - def-hh-finite-double-cross-relations
  - lem-hh-double-coalgebra-and-antipode-descent
  - lem-hh-group-and-polynomial-hopf-algebras-exist
  - def-hh-scalar-and-tensor-conventions
  - thm-hh-double-modules-and-yetter-drinfeld-modules
  - thm-hh-finite-double-hopf-structure-and-canonical-r
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §4.3, Example 4.21 and Exercise 42"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
---

## Example

Let $G$ be a finite group and $k$ a field. The group algebra $kG$ has basis $G$, coproduct $\Delta(g)=g\otimes g$, counit $\varepsilon(g)=1$ and antipode $S(g)=g^{-1}$. The dual has point-mass basis $\{\delta_x:x\in G\}$. In the finite double, the basis elements satisfy

$$ (\delta_x\otimes g)(\delta_y\otimes h)=\mathbf 1_{x=gyg^{-1}}\,\delta_x\otimes gh,\qquad \Delta_D(\delta_x\otimes g)=\sum_{ab=x}(\delta_a\otimes g)\otimes(\delta_b\otimes g), $$

with $\varepsilon_D(\delta_x\otimes g)=\mathbf 1_{x=e}$ and $S_D(\delta_x\otimes g)=\delta_{g^{-1}x^{-1}g}\otimes g^{-1}$. Its canonical $R$-matrix and inverse are

$$R=\sum_{x\in G}(\delta_x\otimes e)\otimes(\varepsilon\otimes x),\qquad R^{-1}=\sum_{x\in G}(\delta_x\otimes e)\otimes(\varepsilon\otimes x^{-1}).$$

For a left-left Yetter–Drinfeld module, the coaction is a $G$-grading $V=\bigoplus_{x\in G}V_x$, the action satisfies $gV_x\subseteq V_{gxg^{-1}}$, and the braiding is $c(v_x\otimes w)=x\cdot w\otimes v_x$ for $v_x\in V_x$.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$, and the finite-double formulas and Yetter–Drinfeld equivalence stated below. Verify the basis formulas and the module description.

[L1] [[def-hh-finite-double-cross-relations]]: the normal-order product is $\sum g_1(S(h_1))g_3(h_3)(g_2*f)\otimes h_2k$.

[L2] [[lem-hh-double-coalgebra-and-antipode-descent]]: $\Delta_D(fh)=\sum(f_1h_1)\otimes(f_2h_2)$ and $S_D(fh)=S(h)(f\circ S^{-1})$.

[L3] [[thm-hh-finite-double-hopf-structure-and-canonical-r]]: the canonical tensor is $R=\sum_i(f_i\otimes1_H)\otimes(\varepsilon_H\otimes h_i)$ and its inverse uses $S^{-1}(h_i)$.

[L4] [[thm-hh-double-modules-and-yetter-drinfeld-modules]]: the left-left Yetter–Drinfeld braiding is $c(v\otimes w)=\sum v_{-1}\cdot w\otimes v_0$.

[F1] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: the group algebra $kG$ has coproduct $\Delta(g)=g\otimes g$, counit $\varepsilon(g)=1$ and antipode $S(g)=g^{-1}$.

[A1] The group basis elements multiply by the group law and are invertible; the point mass $\delta_x$ evaluates to $1$ at $x$ and $0$ at every other group element.

## Verification


1.1 The group-like maps are those of [F1]; multiplicativity, coassociativity and both counit equations hold on each group basis vector, and $S(g)g=gS(g)=e$. The dual coproduct is $\Delta(\delta_x)=\sum_{ab=x}\delta_a\otimes\delta_b$, since both sides evaluate on $(a,b)$ as $\mathbf1_{ab=x}$. [given, A1, F1, algebra]

1.2 For $h=g\in G$ and dual factors $\delta_y$ and $\delta_x$, the iterated dual coproduct is $\Delta^{(2)}(\delta_y)=\sum_{abc=y}\delta_a\otimes\delta_b\otimes\delta_c$. In [L1], the scalar factors require $a=g^{-1}$ and $c=g$, so $b=gyg^{-1}$; the remaining convolution $\delta_b*\delta_x$ is pointwise multiplication and is zero unless $b=x$. This gives the stated double product. [A1, L1, algebra]

1.3 The dual bases of $kG$ are $(g)_{g\in G}$ and $(\delta_g)_{g\in G}$. Substitution in [L3] gives the displayed $R$ and inverse, since $S^{-1}(g)=g^{-1}$. [A1, L3, algebra]

2.1 Substituting $\Delta(\delta_x)$ and $\Delta(g)$ into [L2] gives the stated coproduct and counit. The antipode formula becomes $S_D(\delta_xg)=g^{-1}\delta_{x^{-1}}$; reordering by the product of step 1.2 gives $\delta_{g^{-1}x^{-1}g}g^{-1}$. [L1, L2, step 1.1, step 1.2, algebra]

3.1 For any left $kG$-coaction write $\delta(v)=\sum_g g\otimes v_g$, a finite sum. Coassociativity and comparison of coefficients in the group basis imply $\delta(v_g)=g\otimes v_g$, while counitality gives $v=\sum_gv_g$; uniqueness of these coefficients makes the sum of the subspaces $V_g$ direct. Conversely such a grading defines a coaction. For homogeneous $v_x\in V_x$, the Yetter–Drinfeld equation at $g\in G$ is exactly $\delta(g\cdot v_x)=gxg^{-1}\otimes g\cdot v_x$, so compatibility is equivalent to conjugation compatibility. The braiding [L4] is therefore $c(v_x\otimes w)=x\cdot w\otimes v_x$. [A1, L4, algebra] ∎
