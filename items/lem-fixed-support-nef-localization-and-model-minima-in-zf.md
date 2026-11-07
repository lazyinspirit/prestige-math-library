---
id: lem-fixed-support-nef-localization-and-model-minima-in-zf
kind: lemma
title: Fixed-support localization of nef function-field metrics and successive minima
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - lem-curve-model-chern-measures-and-refinement-invariance-in-zf
  - lem-curve-model-local-variation-and-integral-nef-stabilization-in-zf
  - lem-function-field-model-intersection-sums-in-all-dimensions-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
  - lem-function-field-model-local-metric-variation-in-all-dimensions-in-zf
  - lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf
  - lem-function-field-successive-minima-for-nef-model-metrics-in-zf
  - thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf
  - lem-projective-field-ampleness-and-finite-map-criteria-in-zf
  - thm-function-field-adelic-intersection-product-exists
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; all choices are finite for each prescribed tolerance and no sequence of approximations is selected.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Section 2.4, Proposition 2.13; this finite fixed-support argument is locally reconstructed and is not claimed to be the source proof.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $B/k$ a smooth projective integral curve, $K=k(B)$, and $Y/K$ an integral projective scheme of dimension $r$. Let $\bar L$ be an adelic metrized line bundle whose underlying bundle is ample and whose metric is a uniform maximum-over-places limit of globally curve-nef integral-model metrics as in [[def-adelic-metrized-line-bundle-over-function-curve]]. Then its normalized essential minimum satisfies
$$\lambda_1(Y,\bar L)\ge \frac{(\bar L^{r+1}\cdot Y)}{(r+1)(L^r\cdot Y)}\ge0.$$
No uniform bound on a varying number of exceptional places is assumed.

## Facts & Assumptions

**Given:** Exactly the field, base curve, projective integral scheme and nef metrized ample line bundle of the Statement. For every tolerance the Definition supplies a finite model and a curve-nef model metric within that tolerance; no sequence is selected.

[F1] Normal projective curve-model Chern measures are finite atoms with coefficients fibre multiplicity times component degree; globally nef model bundles give positive measures. Refinement preserves these measures and model norms. [[lem-curve-model-chern-measures-and-refinement-invariance-in-zf]]

[F2] On curves, interchanging a fixed model test function and a model-metric variation is justified by the exact local variation identities and symmetry. [[lem-curve-model-local-variation-and-integral-nef-stabilization-in-zf]]

[F3] Local model intersection variation in any dimension is integration against the actual mixed model measure; integral model local terms are integers. [[lem-function-field-model-local-metric-variation-in-all-dimensions-in-zf]]

[F4] Mixed intersections of curve-nef bundles are nonnegative, and tensoring a curve-nef bundle by a positive ample power is ample over an infinite field. [[thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf]]

[F5] On a projective scheme over an infinite field, ample bundles have very ample powers and their positive cohomology eventually vanishes; the criterion is componentwise. [[lem-projective-field-ampleness-and-finite-map-criteria-in-zf]]

[F6] The global model intersections, local terms and point heights agree, including finite extension normalization. The numerical adelic intersection is the local stabilized model value in fixed nef approximations. [[lem-function-field-model-intersection-sums-in-all-dimensions-in-zf]], [[lem-function-field-model-point-measures-and-height-normalization-in-zf]], [[thm-function-field-adelic-intersection-product-exists]]

[F8] In every dimension, mixed model measures have total mass equal to the generic mixed degree; together with [F4] their atomic coefficients are nonnegative when all entries are fibrewise nef. [[lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf]]

[F7] The asserted minima inequality holds for each globally curve-nef integral model metric with ample generic restriction. [[lem-function-field-successive-minima-for-nef-model-metrics-in-zf]]

## Proof

1.1 Fix a target model $T_0$ and bundle $M_0$ agreeing with $\bar L$ away from a finite set $S$ of places. We first prove that $M_0$ has nonnegative degree on every curve in a fibre outside $S$. Given such a curve $C$, use a high twist of its ideal in a projective embedding. Its finite global sections generate away from $C$. If $r>1$, choose $r-1$ sections vanishing on $C$ successively avoiding the finitely many irreducible components on which dimension would fail to drop, including vertical components; an infinite field avoids a finite union of proper coefficient subspaces. The principal-ideal dimension bound gives a horizontal integral surface through the generic point of $C$ and no final two-dimensional vertical component. For $r=1$ use $T_0$ itself. Its finite normalization has a fibre component $C'$ mapping finitely onto $C$; the pulled-back degree is a positive integer multiple of $M_0\cdot C$. After completing at the selected place, treat the finitely many generic curve branches separately. [F1, F5, given, construct, algebra]

2.1 Restrict a globally nef approximation to this horizontal generic curve and its normal model. Its local Chern measure is positive by [F1]. The target local metric is the model metric induced by $M_0$. We explicitly separate its finitely many divisorial atoms. For each other atom choose a rational function whose normalized valuation differs from that at $C'$, and clear the finitely many denominators. For $t=-\log|f|$, a rational tent centered at $a$ is $\delta^{-1}\bigl((t-a+\delta)_+-2(t-a)_++(t-a-\delta)_+\bigr)$. After clearing denominators, each positive part comes from the two sections $1$ and a uniformizer multiple of a power of $f$ on its pole-divisor bundle; blowing up the finite fractional ideal makes its metric a model metric. The horizontal generic divisors cancel because the coefficients sum to zero. Finite minima are obtained by further finite fractional-ideal blowups. Thus a nonnegative rational model function is one at $C'$ and zero at all other target atoms. By [F2], its integrals against the positive approximating measures converge to its integral against the target model measure: transfer the variation onto the fixed signed test measure and use uniform convergence. The latter integral is the multiplicity-weighted degree of $M_0$ on $C'$, hence nonnegative. Step 1.1 gives $M_0\cdot C\ge0$. [F1, F2, step 1.1, construct, algebra]

3.1 Choose one globally nef model metric $M$ within a prescribed tolerance $\epsilon$ of $\bar L$, and take a common normal projective refinement of its model and $T_0$. The quotient of its pullback and the pullback of $M_0$ has a vertical Cartier divisor, supported on finitely many fibres; its parts at individual fibres are Cartier by finite open gluing. Keep only the parts over $S$. The resulting line bundle $M'$ has the metric of $M$ at $S$ and that of $M_0=\bar L$ elsewhere. By step 2.1 its degree on every vertical curve outside $S$ is nonnegative. At $S$ its local model metric equals that of $M$; on the normal common model a vertical Cartier quotient with zero divisorial potential has zero divisor, so their vertical degrees agree. Thus $M'$ is nef on every vertical curve. The normalized local ramification weights over one base place sum to one, so $|h_{M'}(P)-h_{\bar L}(P)|\le |S|\epsilon$ for every finite point extension and every $P$ for which the chosen section is nonzero. [F1, F6, step 2.1, given, construct, algebra]

4.1 Fix this one refinement and a very ample $H$ on it. For each positive $m$, [F4] makes $mM'+H$ ample on every reduced special fibre; [F5] includes nilpotents. It is also ample on the generic fibre. To pass to a global ample bundle, choose a power giving a generic embedding and spread its finite data to a nonempty open of $B$; only finitely many fibres remain. At each such fibre [F5] gives a sufficiently divisible power with an embedding and $H^1=0$. Finite projective Cech cohomology and the uniformizer exact sequence make the local $H^1$ vanish by Nakayama and lift the finite fibre sections. Their common zero locus has proper image missing the chosen fibre, so they generate on a neighbourhood. The induced proper map is finite near the fibre by the finite-fibre criterion in [F5]; Nakayama on its finite chart-algebra cokernel upgrades the fibre embedding to a closed immersion near that fibre. Taking a common positive power handles all exceptional fibres. The finite relative section module is coherent by the same finite Cech construction; [F5] on the projective base curve makes a large base twist globally generated. The resulting finite relative projective embedding and the Segre embedding give a globally very ample positive power of $(mM'+H)\otimes f^*A_B^q$ for some $q$ and fixed degree-one ample $A_B$ on $B$. Thus this bundle is globally nef. Only finitely many local lifts are chosen. [F4, F5, step 3.1, construct, algebra]

4.2 Write $d=\deg_LY>0$. At a place outside $S$, both $M_0$ and $M$ are locally nef by step 2.1, and their local metrics differ by at most $\epsilon$. The mixed measures occurring in [F3] are positive and have fixed generic masses by [F8] and [F4]. Therefore the local self-intersection terms differ by at most $(r+1)d\epsilon$. For sufficiently small $\epsilon$ this is less than one, so [F3] makes the two integral local terms equal. At places in $S$, $M'$ and $M$ have the same metric. Hence the global normalized self-height of $M'$ equals that of the globally nef approximation $M$, which equals the target height for small enough $\epsilon$ by the stabilized construction [F6]. This equality uses no summation of an error over a growing exceptional set. [F3, F4, F6, F8, step 2.1, step 3.1, algebra]

5.1 Apply [F7] to the globally nef bundle of step 4.1 and divide by the positive power used there. Pullback of $A_B^q$ adds the same constant to every point height and to the normalized $(r+1)$-fold subvariety height: the base fibre has square zero and its first mixed intersection is $d$. These constants cancel from the inequality. For the fixed approximation and fixed $H$, the remaining mixed-intersection polynomial of $M'+H/m$ has finite coefficients, so its normalized height tends to that of $M'$ as $m$ grows. To control $H$ on points, choose a positive integer $a$ with $aL-H_K$ ample and a nonzero section of a positive power. Outside its divisor, model effectivity and the bounded metric differences on the fixed finite set $S$ give $h_H(P)\le a h_{\bar L}(P)+C$ for one finite $C$ independent of $P$. Combining with step 3.1 and rearranging gives $\bigl(1+a/m\bigr)h_{\bar L}(P)\ge h_{M'+H/m}(Y)-C/m-|S|\epsilon$ on a nonempty open. For each fixed approximation choose $m$ large relative to its finite $a,C$ and mixed intersections. Then let $\epsilon$ be arbitrarily small. The fixed-model open is intersected with the open furnished by [F7], still nonempty on integral $Y$, and the resulting supremum of infima is at least the target normalized height. Positivity of the target height follows from [F4] on the globally nef approximants and [F6]. For $r=0$, all local valuation denominators are bounded by the fixed point-field degree, so sufficiently close integral model metrics have identical point local terms at every place, and the model inequality passes directly. [F3, F4, F6, F7, step 3.1, step 4.1, step 4.2, algebra] ∎
