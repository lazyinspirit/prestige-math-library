---
id: lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf
kind: lemma
title: Mixed function-field model measures and refinement invariance without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-flat-projective-euler-and-mixed-differences-specialize-over-a-dvr-in-zf
  - lem-mixed-euler-component-and-birational-projection-formulas-in-zf
  - lem-projective-flat-models-over-a-regular-curve-have-common-refinements
  - thm-integral-closure-finite-finite-type-domain-over-field
  - lem-finite-type-normal-domain-codimension-one-test-in-zf
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; finite normalizations, component lists, projective coordinates and mixed Euler differences give finite atomic measures. No general valuation-extension or Radon-representation theorem is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 model-measure conventions; the signed all-dimensional construction is proved here, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $K=k(B)$ for a smooth projective integral curve, and $Y/K$ an integral projective scheme of dimension $r\ge0$. Let $\mathcal Y/B$ be an integral projective flat model, with line bundles $\mathcal L_1,\ldots,\mathcal L_r$ restricting to $L_1,\ldots,L_r$. On its finite normalization, let $V$ run through the reduced $r$-dimensional components of the fibre at $v$, and put $b_V=\operatorname{ord}_V(t_v)>0$ with $|t_v|=e^{-1}$. There are canonical divisorial seminorm points $\xi_V\in Y_{K_v}^{\mathrm{an}}$, and the finite signed Radon measure
$$\mu_{\mathcal L_1,\ldots,\mathcal L_r;v}=\sum_Vb_V\,J_{O_V}(\mathcal L_1|_V,\ldots,\mathcal L_r|_V)\,\delta_{\xi_V}$$
(with all bundles pulled to the normalization) has mass $J_{O_Y}(L_1,\ldots,L_r)$. It is symmetric and tensor multilinear in the model bundles, unchanged by projective refinement, and depends only on their induced metrics at $v$. It is positive whenever all the restricted bundles on every $V$ are globally generated. No reducedness, generic smoothness, geometric normality or separability assumption is needed.

For a vertical Cartier divisor $D=\sum_Va_VV$ supported at $v$ on a normal model, its potential $\phi_D=-\log\|1_D\|$ has value $a_V/b_V$ at these points, and
$$\int\phi_D\,d\mu_{\mathcal L_1,\ldots,\mathcal L_r;v}=\sum_Va_VJ_{O_V}(\mathcal L_1|_V,\ldots,\mathcal L_r|_V).$$
Here $J$ is the actual finite mixed Euler intersection, including the empty list for $r=0$. This constructs signed measures for model metrics in all dimensions. Positivity for arbitrary bundles merely nonnegative on curves, and passage to continuous integrable metric limits, are not asserted by this lemma.

## Facts & Assumptions

**Given:** The function-field datum, integral projective generic scheme and projective flat model, finite line-bundle tuple and place in the Statement.

[F1] Mixed Euler intersections are finite integers, symmetric and top tensor multilinear, vanish above support dimension, commute with field extension and are nonnegative for globally generated entries. Universal parameter sections give injective cuts on arbitrary coherent modules with dimension drop. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F2] For coherent flat sheaves on any projective DVR-model, all generic/special mixed Euler differences agree, without smoothness, reducedness or Cohen–Macaulay assumptions. [[lem-flat-projective-euler-and-mixed-differences-specialize-over-a-dvr-in-zf]]

[F3] Top mixed differences are the sum of reduced top-component differences weighted by their generic lengths, and are invariant under projective birational pullback. Finite-type field algebras have finite minimal-prime lists in ZF. [[lem-mixed-euler-component-and-birational-projection-formulas-in-zf]]

[F4] Projective flat models of a fixed integral generic scheme admit a projective flat common refinement by generic diagonal closure. [[lem-projective-flat-models-over-a-regular-curve-have-common-refinements]]

[F5] A finite-type domain over a field has finite normalization, without Choice. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F6] On normal finite-type field charts and their localizations, Cartier effectivity and zero are tested by height-one orders. [[lem-finite-type-normal-domain-codimension-one-test-in-zf]]

[F7] A module over a PID is flat exactly when it is torsion-free. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

[F8] Coherent sheaves and line bundles on a specified projective scheme over a field become finitely globally generated after a sufficiently large projective twist. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

## Proof

1.1 Normalize the model on a finite affine cover using [F5], and glue by the localization rule for integral closure, obtained by clearing a finite monic equation. The normalization is finite and projective. Here the latter assertion has a finite construction: by [F8], its coherent algebra has a finite set of generators after twisting on the original projective model; these embed its relative spectrum in an affine bundle. Homogenized monic relations show its projective completion has no points at infinity, so it is closed in that projective bundle. Twisting and Segre coordinates give a finite projective embedding. Integrality makes its coordinate modules torsion-free over every base DVR and flat by [F7]. Its generic fibre is the finite normalization of $Y$. We calculate on this normal model and later restrict seminorms along the normalization map. [F5, F7, F8, given, construct, algebra]

1.2 Its total function field has transcendence degree $r+1$ over $k$; a nonzero fibre equation strictly lowers transcendence degree in each quotient domain, by the finite-type normalization dimension argument of [F1]. Hence every fibre has dimension at most $r$. Its components are finite by [F3]. A prime minimal over $t_v$ has height one: otherwise [F6] in its localization would make $1/t_v$ regular, since no smaller height-one prime could contain $t_v$. Its normal local ring is a DVR by the finite ideal argument: choose $0\ne b\in m$, the least $a$ with $m^a\subseteq(b)$ and $x\in m^{a-1}\setminus(b)$; the multiplier $x/b$ either makes itself integral by the determinant trick, impossible, or sends some $y\in m$ to a unit and gives $m=(y)$. The finitely generated intersection of the powers of $y$ is zero by the determinant trick. Consequently $b_V=\operatorname{ord}_V(t_v)$ equals the special-fibre local length at $\eta_V$. [F1, F3, F6, step 1.1, algebra]

2.1 At any fibre-component generic point let $D_V$ be this DVR in $F=K(Y)$. Its completed ring $\widehat D_V=\varprojlim_nD_V/(\pi_V^n)$ is again a DVR: the first nonzero coordinate gives its integer order, division by $\pi_V$ is unique in the successive quotient kernels, and units have uniquely compatible inverses. The original DVR injects by its zero intersection of powers. The specified subfield $k$ and element $t_v$ give an embedding $k[[t_v]]\to\widehat D_V$ by finite partial sums, whose leading orders show injectivity. Since the completion of $K$ is $K_v=k((t_v))$, by unique successive residue coefficients at the smooth $k$-rational point $v$, there is an isometric embedding $K_v\to\operatorname{Frac}\widehat D_V$ for the norm $\exp(-\operatorname{ord}_V(\cdot)/b_V)$. For each affine generic chart with ring $A$, the natural map $A\otimes_KK_v\to\operatorname{Frac}\widehat D_V$ therefore gives a multiplicative seminorm. The maps agree on overlaps, giving a point of the normalized generic analytification and then of $Y_{K_v}^{\mathrm{an}}$ by restriction. This defines $\xi_V$ without an arbitrary valuation-extension theorem. All inverse-limit operations were uniquely specified, so no infinite residue-section choice was used. [step 1.2, construct, algebra]

3.1 Define the measure on a Borel set by the displayed finite sum of atoms. It is Radon: the analytic space is Hausdorff directly from projective seminorm charts. Two points lie in a common affine hyperplane complement, using finite linear avoidance over the infinite field $K_v$; affine function evaluations are continuous and separate its seminorms. Finite sets of its atoms are thus compact and closed; they give inner regularity, and deleting the finitely many unwanted atoms gives outer regularity. Apply [F2] over $O_{B,v}$ to the line-bundle tuple and structure sheaf of the normal model. Its special mixed difference decomposes by [F3] into the $r$-dimensional reduced components with their generic lengths; lower-dimensional supports give zero by [F1]. Step 1.2 identifies these lengths with $b_V$, and birational normalization in [F3] identifies the generic mixed number with the original one on $Y$, proving the asserted mass. Symmetry and tensor multilinearity hold coefficientwise by [F1]. If the restricted bundles are globally generated, each coefficient is nonnegative by [F1]; otherwise the construction still gives a signed measure with finite total variation. [F1, F2, F3, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 We need one numerical vanishing for exceptional images. If $g:W\to Z$ is a projective morphism, $W$ is integral of dimension $r$ and $\dim Z<r$, then $J_{O_W}(g^*M_1,\ldots,g^*M_r)=0$. For generated $M_i$, use the same universal parameter sections on $Z$ and $W$ as in [F1]. After $r$ sections their quotient on $Z$ is zero by support drop. Thus their ideal is the unit ideal there, and its pullback is the unit ideal on $W$. The universal-section injections on $W$ consequently have final quotient zero too, proving the vanishing. For arbitrary $M_i$, express each as the quotient of two globally generated bundles by a sufficiently large projective twist, using [F8], and expand by top tensor multilinearity. Every generated term vanishes. The statement also covers a point image; no finite-map projection or direct-image theorem has been presumed. [F1, F8, algebra]

5.1 Let $f:\mathcal Z\to\mathcal T$ be a projective morphism of normal models inducing the identity on their normal generic scheme. For each top-dimensional fibre component $V$ of $\mathcal T$, the inverse generic point extends to its DVR $D_V$ by scaling its finitely many projective coordinates over $\mathcal T$ by one of smallest valuation. Its centre on $\mathcal Z_v$ has residue containing $k(V)$, of transcendence degree $r$, so the dimension bound of step 1.2 makes it the generic point of a top-dimensional component $W$. The inclusion $D_V\subseteq D_W$ is dominant inside the same field $F$. Units stay units, and if a uniformizer of $D_V$ had $D_W$-order $e$, all orders of $F^\times$ would be multiples of $e$. Since the latter value group is $\mathbb Z$, $e=1$ and the DVRs, residue fields and $b$'s agree. Uniqueness of this projective DVR centre makes $W$ the unique component dominating $V$. Thus $W\to V$ is projective birational, and [F3] equates its pulled-back coefficient intersection with the old one; step 2.1 gives the same analytic point. Every other top component has image closure of dimension less than $r$, so its pulled-back intersection is zero by step 4.1. Equality of all finite atomic measures follows. [F3, step 1.2, step 2.1, step 4.1, construct, algebra]

6.1 By [F4], two models of a common normal generic scheme have a common projective flat generic diagonal closure. Normalize it as in step 1.1; the generic fibre stays that normal scheme, and the projections are projective. Step 5.1 proves refinement independence on it. Nonnormal $Y$ is handled by normalizing each original model first, so that the generic fibre is its same finite normalization, and restricting the resulting seminorm points to $Y$ as in step 2.1. The coefficient equalities remain equalities after that finite pushforward. Pullback also preserves model norms: at any analytic point its residue valued field has a model centre obtained by a finite projective-coordinate minimum, and a local model frame there has norm one before and after pullback. If two representatives give the same metric on a fixed $L_i$ at $v$, on the common normal model their quotient has canonical generic section $1$ with vertical divisor $D_i$. At every component of the fibre its seminorm evaluates this section as $\exp(-\operatorname{ord}_V(D_i)/b_V)$, so equality of metrics makes every such order zero. This includes any lower-dimensional fibre component. All horizontal orders are already zero by generic triviality. After localizing the base at $v$, [F6] makes $D_i$ the zero Cartier divisor. Therefore the two restricted line bundles agree on the whole fibre, and all coefficient intersections agree. This proves dependence only on the induced metrics. [F4, F6, step 1.1, step 2.1, step 5.1, algebra]

7.1 For a vertical Cartier divisor $D$ on a normal model, its canonical rational section is locally $f$ times a norm-one frame, and $\operatorname{ord}_V(f)=a_V$. The seminorm from step 2.1 gives $\phi_D(\xi_V)=a_V/b_V$. Multiplying these values by the finite coefficients from step 3.1 gives the claimed integral formula. All $b_V$ are positive, so there is no zero denominator. For $r=0$, the empty mixed difference on a reduced zero-dimensional component over algebraically closed $k$ is $1$, recovering the positive ramification-weighted point measure; the mass is the generic field degree. Empty sums, trivial entries and nonreduced fibres are included in the same finite formulas. The construction has used numerical Euler intersections and explicit seminorms only. General numerical-nef mixed positivity and continuous metric-limit measures remain separate obligations. [step 1.2, step 2.1, step 3.1, algebra] ∎
