---
id: thm-hh-double-modules-and-yetter-drinfeld-modules
kind: theorem
title: "Modules over the finite double are left-left Yetter–Drinfeld modules"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 11
deps:
  - def-hh-finite-double-cross-relations
  - def-hh-left-left-yetter-drinfeld-module
  - lem-hh-double-crossing-map-and-associativity
  - lem-hh-double-coalgebra-and-antipode-descent
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - def-hh-module-category-and-tensor-action
  - thm-hh-bialgebra-module-tensor-coherence
  - def-hh-hopf-algebra-and-antipode
  - thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
  - def-hh-braiding-and-triangular-structure
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. García and C. Vay, Simple modules of small quantum groups at dihedral groups, Doc. Math. 29 (2024), §3.1.3"
      url: "https://ems.press/content/serial-article-files/42618"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §§7.14–7.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §4.3"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
---

## Statement

Let $H$ be a finite-dimensional Hopf algebra over a field with bijective antipode, and let $D(H)$ be the finite double above. Restriction to $H$ and reconstruction of a coaction from the $H^{*\mathrm{op}}$ action give inverse equivalences between left $D(H)$-modules and left-left Yetter–Drinfeld $H$-modules. The equivalence preserves tensor products. The Yetter–Drinfeld category is braided by

$$c_{V,W}(v\otimes w)=\sum v_{-1}\cdot w\otimes v_0,$$

with inverse

$$c_{V,W}^{-1}(w\otimes v)=\sum v_0\otimes S^{-1}(v_{-1})\cdot w.$$

## Facts & Assumptions

**Given:** The finite-dimensional Hopf algebra $H$, bijective antipode $S$, candidate $D(H)$, and left-left Yetter–Drinfeld structures of the preceding items. Prove the module equivalence, tensor compatibility and braiding.

[F1] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: when $H$ is finite-dimensional, evaluation identifies $H^*\otimes H$ with $\operatorname{End}_k(H)$, and its canonical tensor is basis-independent.

[F2] [[def-hh-module-category-and-tensor-action]]: tensor products of left modules carry the diagonal action through the coproduct.

[F3] [[thm-hh-bialgebra-module-tensor-coherence]]: the associator and unit constraints are module maps for the diagonal action.

[F4] [[def-hh-braiding-and-triangular-structure]]: a braiding is a natural family of invertible module maps satisfying the two stated hexagons.

[L1] [[def-hh-finite-double-cross-relations]]: $D(H)=H^{*\mathrm{op}}\otimes H$ in normal order and the embeddings of its two factors multiply by the stated crossing rule.

[L2] [[def-hh-left-left-yetter-drinfeld-module]]: $f\cdot v=\sum f(v_{-1})v_0$ is the specified left $H^{*\mathrm{op}}$-action.

[L3] [[lem-hh-double-crossing-map-and-associativity]]: $\chi$ obeys the two distributive laws, so the normal-order multiplication is associative.

[L4] [[lem-hh-double-coalgebra-and-antipode-descent]]: $D(H)$ is a Hopf algebra and its inverse crossing is $fh=\sum f_1(h_1)f_3(S(h_3))h_2f_2$.

[L5] [[def-hh-left-left-yetter-drinfeld-module]]: the left-left compatibility equation is $\delta(h\cdot v)=\sum h_1v_{-1}S(h_3)\otimes h_2\cdot v_0$.

[F5] [[def-hh-hopf-algebra-and-antipode]]: $S$ satisfies both antipode contractions.

[F6] [[thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective]]: the antipode of a nonzero finite-dimensional Hopf algebra is bijective.

[F7] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: the antipode is anti-multiplicative, so its inverse is anti-multiplicative when it exists.

[A1] $H$ is finite-dimensional and $S$ is bijective, as required by the inverse crossing and inverse braiding formulas. Also $H\ne0$: its counit is a unital algebra map, so $\varepsilon_H(1_H)=1_k$; consequently the nonzero hypothesis of [F6] is satisfied.

## Proof


1.1 Let $(h_i)$ be a basis of $H$ and $(f_i)$ its dual basis. For a left $D(H)$-module $M$, restrict the action to $H$ and set $\delta(v)=\sum_i h_i\otimes(f_i\otimes1_H)\cdot v$. By [F1], $\sum_i h_i\otimes f_i$ is the basis-independent tensor representing $\operatorname{id}_H$; hence $\delta$ is basis-independent and $(f\otimes\operatorname{id})\delta(v)=(f\otimes1_H)\cdot v$ for every $f\in H^*$. [given, F1, L1, construct]

1.2 The coaction counit identity follows from $(\varepsilon_H\otimes\operatorname{id})\delta(v)=(\varepsilon_H\otimes1_H)\cdot v=v$, since $\varepsilon_H\otimes1_H$ is the unit of $D(H)$. To check coassociativity, pair the first two $H$ factors with arbitrary $f,g\in H^*$. On $(\Delta\otimes\operatorname{id})\delta(v)$ the result is $(f*g\otimes1_H)\cdot v$ by the definition of convolution $(f*g)(x)=\sum f(x_1)g(x_2)$. On $(\operatorname{id}\otimes\delta)\delta(v)$ it is $(g\otimes1_H)\cdot((f\otimes1_H)\cdot v)=(f*g\otimes1_H)\cdot v$ by the $H^{*\mathrm{op}}$ module law in [L2]. Finite dual separation from [F1] gives coassociativity. [given, F1, L1, L2, algebra]

1.3 Conversely, let $V$ be a left-left Yetter–Drinfeld module. Give it the $H^{*\mathrm{op}}$ action of [L2] and define $(f\otimes h)\cdot v:=f\cdot(h\cdot v)$. The $H$ and $H^{*\mathrm{op}}$ factors act by their algebra structures; it remains to check their crossing relation. [given, L1, L2, construct]

1.4 For $h\in H$, $f\in H^*$ and $v\in V$, the left side of the forward crossing acts as $h\cdot(f\cdot v)=\sum f(v_{-1})h\cdot v_0$. The right side acts as $\sum f_1(S(h_1))f_3(h_3)f_2\cdot(h_2\cdot v)=\sum f(S(h_1)h_2v_{-1}S(h_4)h_5)h_3\cdot v_0$ by [L5]. The tensor antipode cancellation $\sum S(h_1)h_2\otimes h_3\otimes S(h_4)h_5=1\otimes h\otimes1$ follows by applying the two equations [F5] successively and reduces this to $\sum f(v_{-1})h\cdot v_0$. Therefore the action respects the crossing. [A1, F5, L1, L2, L5, algebra]

1.5 By the diagonal-action definition [F2], the $H$ action on $V\otimes W$ is the tensor action, and the $H^{*\mathrm{op}}$ action is $f\cdot(v\otimes w)=\sum f_1\cdot v\otimes f_2\cdot w$. Pairing with every $f$ shows that its reconstructed coaction is $\delta(v\otimes w)=\sum v_{-1}w_{-1}\otimes v_0\otimes w_0$. The associator and unit maps are module maps by [F3] and are the same underlying vector-space maps under the two functors, so the equivalence is monoidal. [F1, F2, F3, L1, L2, L3, algebra]

1.6 Define $c_{V,W}$ by the displayed formula and use the displayed candidate inverse. Applying $S^{-1}$ to the two antipode equations in [F5] and reversing products by [F7] gives $\sum S^{-1}(x_2)x_1=\varepsilon(x)1_H=\sum x_2S^{-1}(x_1)$. On $w\otimes v$, the composite $c_{V,W}c_{V,W}^{-1}$ is $\sum v_{-1,2}S^{-1}(v_{-1,1})\cdot w\otimes v_0=w\otimes v$ by the second identity; the other composite is $\sum v_0\otimes S^{-1}(v_{-1,2})v_{-1,1}\cdot w=v\otimes w$ by the first. Thus the maps are inverse. [A1, F5, F6, F7, L2, algebra]

2.1 The inverse crossing of [L4], acting on $v$, gives $(f\otimes1_H)\cdot((1\otimes h)\cdot v)=\sum f_1(h_1)f_3(S(h_3))h_2\cdot(f_2\cdot v)=\sum f(h_1v_{-1}S(h_3))h_2\cdot v_0$. By the reconstruction identity in step 1.1, this is $(f\otimes\operatorname{id})\delta(h\cdot v)$; since it holds for every $f$, finite dual separation yields $\delta(h\cdot v)=\sum h_1v_{-1}S(h_3)\otimes h_2\cdot v_0$, which is the compatibility condition [L5]. Thus restriction and reconstruction produce a Yetter–Drinfeld module. [F1, L4, L5, step 1.1, algebra]

2.2 A $D(H)$-module map preserves the restricted $H$-action and commutes with every $f\otimes1_H$ action. The reconstruction identity of step 1.1 then shows it preserves the coaction, so restriction defines a functor to Yetter–Drinfeld modules. [step 1.1, construct]

2.3 For $f,g\in H^*$ and $h,k\in H$, first apply the crossing identity of step 1.4 to $h\cdot(g\cdot(k\cdot v))$, obtaining $\sum g_1(S(h_1))g_3(h_3)\,g_2\cdot(h_2\cdot(k\cdot v))$. Applying $f$ on the left and using the $H^{*\mathrm{op}}$ action law gives $\sum g_1(S(h_1))g_3(h_3)(g_2*f)\cdot((h_2k)\cdot v)$, exactly the action of $(fh)(gk)$ in [L1]. Bilinearity extends this identity to all elements of $D(H)$. Thus every Yetter–Drinfeld module determines a left $D(H)$-module, and maps preserving both structures are exactly the resulting module maps. [L1, L2, L3, step 1.4, algebra]

2.4 Starting with a $D(H)$-module, reconstructing its coaction and then the action of step 1.3 returns the original action, because $f\otimes h=(f\otimes1_H)(\varepsilon_H\otimes h)$ in normal order. Starting with a Yetter–Drinfeld module, the reconstructed coaction has the same evaluation against every $f$ as the original coaction, so finite dual separation makes the coactions equal. The two functors are inverse. [F1, L1, step 1.1, step 1.3, algebra]

2.5 The map $c_{V,W}$ is $H$-linear: applying the Yetter–Drinfeld equation [L5] to $h_1\cdot v$ gives $c(h\cdot(v\otimes w))=\sum (h_1v_{-1}S(h_3)h_4)\cdot w\otimes h_2\cdot v_0=\sum (h_1v_{-1})\cdot w\otimes h_2\cdot v_0=h\cdot c(v\otimes w)$, where $S(h_3)h_4$ contracts by [F5]. [F5, L5, step 1.5, algebra]

3.1 The map is $H$-colinear as well. The coaction of its output is $\sum v_{-1,1}w_{-1}S(v_{-1,3})v_{-1,4}\otimes v_{-1,2}\cdot w_0\otimes v_{0,0}$. The adjacent factors $S(v_{-1,3})v_{-1,4}$ contract to the unit by [F5], leaving $\sum v_{-1,1}w_{-1}\otimes v_{-1,2}\cdot w_0\otimes v_{0,0}$, which is $(\operatorname{id}\otimes c)\delta(v\otimes w)$ by coassociativity and the tensor-product coaction. Pairing this identity with every $f\in H^*$ proves $H^{*\mathrm{op}}$-linearity; together with step 2.5, $c$ is a $D(H)$-module map. [F5, L5, step 1.5, step 2.5, algebra]

4.1 Naturality follows because Yetter–Drinfeld morphisms preserve both the action and coaction. The two hexagons required by [F4] follow by expanding the tensor-product coaction: $c_{V,W\otimes U}(v\otimes w\otimes u)=\sum v_{-1,1}\cdot w\otimes v_{-1,2}\cdot u\otimes v_0$, and $c_{V\otimes W,U}(v\otimes w\otimes u)=\sum (v_{-1}w_{-1})\cdot u\otimes v_0\otimes w_0$; these are exactly the two iterated composites of the displayed $c$. Hence the family is a braiding. [F4, L2, step 1.5, step 1.6, algebra] ∎
## Remarks

The inverse-braiding formula uses $S^{-1}$, and [F6] establishes bijectivity for nonzero finite-dimensional $H$; [A1] verifies nonzeroness here. The proof uses the left-left convention fixed in the definition and does not transfer formulas from an $H^{*\mathrm{cop}}$ convention.
