---
id: lem-function-field-successive-minima-for-nef-model-metrics-in-zf
kind: lemma
title: Successive minima for nef function-field model metrics without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-nef-difference-bigness-by-finite-section-counts-in-zf
  - thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf
  - lem-function-field-model-intersection-sums-in-all-dimensions-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
  - lem-flat-projective-euler-and-mixed-differences-specialize-over-a-dvr-in-zf
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf
  - lem-projective-field-ampleness-and-finite-map-criteria-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over the supplied algebraically closed field; each section construction is a finite algebraic argument and no countable metric choices are made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Proposition 2.13; the model-metric case is reconstructed here from finite section counts.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $B/k$ a smooth projective integral curve, $K=k(B)$, and $Y/K$ an integral projective scheme of dimension $r\ge0$. Suppose $S/B$ is a normal integral projective flat model of the finite normalization of $Y$, and $M$ is a line bundle on $S$ nonnegative on every integral projective $k$-curve. Suppose its generic restriction is the pullback of an ample bundle $L$ on $Y$, with the induced model metric $\bar L$. Write $D=J_{O_Y}(L^{[r]})$ and $I=J_{O_S}(M^{[r+1]})$. Then $D>0$ and
$$\sup_{U\subseteq Y\text{ nonempty open}}\inf_{P\in U(\overline K)}h_{\bar L}(P)\ \ge\ \frac{I}{(r+1)D}\ \ge0.$$
Heights are the order-normalized finite-extension-invariant model heights. The assertion includes inseparable point fields and $r=0$. It asserts the model-metric inequality; passage from maximum-over-places metric limits to uniform point-height bounds is not presumed.

## Facts & Assumptions

**Given:** Exactly the field, base curve, integral generic scheme, normal flat projective model, curve-nef model bundle and ample generic restriction in the Statement.

[F1] If curve-nef bundles $A,B$ on an integral projective $d$-fold over an infinite field satisfy $J(A^{[d]})-dJ(A^{[d-1]},B)>0$, a positive power of $A\otimes B^{-1}$ has a nonzero global section. [[lem-nef-difference-bigness-by-finite-section-counts-in-zf]]

[F2] Mixed intersections of curve-nef bundles are nonnegative in every dimension. [[thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf]]

[F3] Model local intersections sum to the actual global Euler intersection, invariant under normal refinement and generic normalization. [[lem-function-field-model-intersection-sums-in-all-dimensions-in-zf]]

[F4] A point over $E/K$ extends from the normalization $C$ of $B$ in $E$ to a projective model, and its model height is $[E:K]^{-1}\deg_C(P_C^*M)$, including inseparability and further field extensions. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

[F5] Flat projective specialization over a DVR preserves all finite mixed Euler differences. [[lem-flat-projective-euler-and-mixed-differences-specialize-over-a-dvr-in-zf]]

[F6] Curve degree is tensor additive, equals the Euler difference, is nonnegative for an effective Cartier divisor, and multiplies under a nonconstant curve map by its generic field degree. Pullback along a point-image curve map has degree zero. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F7] Top mixed Euler intersections are tensor multilinear, coherent-twist invariant and exact-sequence additive. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F8] A very ample bundle has strictly positive top degree on an integral projective scheme; ample bundles have positive very ample powers. [[lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf]], [[lem-projective-field-ampleness-and-finite-map-criteria-in-zf]]

## Proof

1.1 Put $d=r+1$. The total space $S$ is an integral projective $k$-scheme of dimension $d$. The ample generic bundle has $D>0$ by [F7]–[F8], including the finite positive field degree for $r=0$. Generic normalization preserves $D$ by [F3]. Also $I\ge0$ by [F2]. Every point lifts to the finite normalization after a finite extension of its point field: over its image the nonzero finite fibre algebra has a simple field quotient, obtained by minimizing its positive vector-space dimension. By [F4] heights do not change. Its extended normal point curve maps to $S$; its image is a projective curve, and [F6] with nefness of $M$ shows its height is nonnegative. Thus every point height is nonnegative, and so is the essential minimum. If $I=0$, this already proves the entire assertion. [F2, F3, F4, F6, F7, F8, given, algebra]

2.1 Suppose $I>0$. Choose a closed point $v\in B$ and write $F=f^*O_B(v)$ on $S$. Such a point exists by a finite-type field-algebra quotient and is $k$-rational since $k$ is algebraically closed. The bundle $F$ is curve-nef: a point-image curve gives degree zero, and a curve dominating $B$ gives its positive finite map degree by [F6]. We have
$$J_{O_S}(M^{[d-1]},F)=D.$$
Indeed the canonical effective Cartier fibre section gives $0\to O_S\to F\to O_{S_v}\otimes F\to0$. The restriction of $F$ to the fibre is trivial. Apply [F7] to the other $d-1$ entries and then [F5] over $O_{B,v}$ to identify this fibre Euler difference with the generic degree $D$. This works for nonreduced fibres. Given any positive rational $t=p/q<I/(dD)$, apply [F1] to the curve-nef actual bundles $A=M^q$ and $B'=F^p$: their strict expression is $q^d(I-dtD)>0$. Obtain a nonzero section of $(M^q\otimes F^{-p})^a$ for some positive integer $a$. [F1, F5, F6, F7, step 1.1, construct, algebra]

3.1 The nonzero section of step 2.1 is nonzero generically on integral $S$, hence on its generic fibre. Its generic zero scheme is a proper closed subset. Remove its image under the finite normalization morphism to obtain a nonempty open $U\subseteq Y$: the image is closed by finiteness and misses the generic point. For $P\in U(\overline K)$ lift after a finite extension and use [F4]. The pulled-back section on its normal point curve is not identically zero, and its effective divisor has nonnegative degree by [F6]. Moreover the pullback of $F$ has degree $[E:K]$, since $v$ has degree one. Consequently
$$aq[E:K]h_{\bar L}(P)-ap[E:K]\ge0,$$
so $h_{\bar L}(P)\ge t$ throughout $U$. The essential minimum is therefore at least every positive rational $t<I/(dD)$, and hence at least $I/(dD)$ by the order density of the rationals. By [F3] this quotient is precisely the normalized model intersection height. The argument did not require a minimum-height point, a chosen sequence of sections, a uniform finite-support limit theorem or a smoothness assumption on $Y$. [F3, F4, F6, step 1.1, step 2.1, algebra] ∎
