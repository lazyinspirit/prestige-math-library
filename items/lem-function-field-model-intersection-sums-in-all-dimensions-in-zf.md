---
id: lem-function-field-model-intersection-sums-in-all-dimensions-in-zf
kind: lemma
title: Function-field model intersection sums in all dimensions without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-mixed-euler-component-and-birational-projection-formulas-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
  - lem-finite-type-normal-domain-codimension-one-test-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; dimension induction, finite Cartier supports, finite section avoidance and finite atomic integrals suffice. Every place sum has proved finite support.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 local-to-global recursion; model-metric construction supplied here in every dimension, not imported.
---

## Statement

Work in ZF with $k$ algebraically closed, $K=k(B)$ for a smooth projective integral curve, and an integral projective $Y/K$ of dimension $r\ge0$. Let $\bar L_0,\ldots,\bar L_r$ have metrics induced at all places by projective flat models, allowing distinct models. On a common normal model $S/B$ of the finite normalization of $Y$, define the model intersection by the actual finite Euler integer
$$I_Y(\bar L_0,\ldots,\bar L_r)=J_{O_S}(\mathcal L_0,\ldots,\mathcal L_r).$$
There are admissible rational sections on that normalized generic scheme, successively nonzero on all components in their divisor recursion. With such sections the point local terms and the recursion
$$\lambda_v(Y;s_0,\ldots,s_r)=\lambda_v(\operatorname{div}_{\mathrm{top}}(s_0);s_1,\ldots,s_r)+\int-\log\|s_0\|_v\,d\mu_{\bar L_1,\ldots,\bar L_r;v}$$
construct finite real local terms; divisor-cycle terms are interpreted by finite linearity and normalization. Here $\operatorname{div}_{\mathrm{top}}$ is the $(r-1)$-dimensional Cartier divisor cycle on the normalized generic scheme; the point case uses the finite unnormalized point measures. The resulting place family has finite support and
$$\sum_v\lambda_v(Y;s_0,\ldots,s_r)=I_Y(\bar L_0,\ldots,\bar L_r).$$
The global pairing is symmetric, tensor multilinear, independent of admissible rational-section choices, normal common model, and the representatives of the fixed model metrics. It extends by finite linearity to integral cycles. Its self-height has the normalization $I_Y(\bar L^{\,r+1})/((r+1)J_{O_Y}(L^{\,r}))$ whenever the denominator degree is positive. No nefness or smoothness is needed for these signed model statements. Passage to arbitrary continuous integrable metrics, and mixed positivity for bundles merely nonnegative on curves, are not asserted here.

## Facts & Assumptions

**Given:** The base curve, integral generic projective scheme and finite model-metric bundle list. Sections used in the recursion have the admissibility property constructed below.

[F1] Signed finite mixed model measures exist in every dimension, have their generic mixed-intersection mass, and are symmetric, multilinear, refinement invariant and dependent only on the model metrics. Divisorial seminorm evaluations of a rational section are finite, and vertical Cartier potentials integrate to their component-weighted mixed intersections. Normal common refinements exist. [[lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf]]

[F2] The finite mixed Euler integer vanishes above support dimension, is top tensor multilinear, exact-sequence additive and invariant under twisting the coherent sheaf by a line bundle. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F3] Mixed Euler differences decompose by top component generic lengths and are invariant under projective birational pullback. Finite-type field supports have finite component lists. [[lem-mixed-euler-component-and-birational-projection-formulas-in-zf]]

[F4] Point measures and unnormalized model point-height sums are finite, include exact ramification weights and inseparability, and their global sum equals the degree on the normal point curve. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

[F5] On normal finite-type field charts and localizations, Cartier effectivity and zero are tested by height-one orders. [[lem-finite-type-normal-domain-codimension-one-test-in-zf]]

[F6] Coherent finite projective Cech/Euler theory and finite global generation after a projective twist hold over every field. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F7] Torsion-free modules over a PID are flat. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

## Proof

1.1 Pull the finite bundle family to a common projective flat model and normalize it using [F1]. Its generic fibre is the finite normalization of $Y$, and its total space $S$ is an integral normal projective $k$-scheme of dimension $r+1$. All norms are preserved, and numerical generic intersections are unchanged by birational normalization [F3]. For any normal integral projective $k$-scheme $T$ of dimension $n\ge1$ and any rational section $s$ of a line bundle $M$, there is the finite Cartier formula
$$J_{O_T}(M,M_1,\ldots,M_{n-1})=\sum_H\operatorname{ord}_H(s)J_{O_H}(M_1|_H,\ldots,M_{n-1}|_H),$$
where $H$ are the reduced $(n-1)$-dimensional components of its Cartier divisor. We prove this formula in the next two steps, rather than invoking a higher Chow or moving theorem. [F1, F3, given, construct, algebra]

2.1 First suppose the divisor $D$ of $s$ is effective, so $M=O(D)$. The actual sequence $0\to O_T\to O_T(D)\to O_D(D)\to0$ is exact in local Cartier equations. Apply the remaining $n-1$ Euler difference operators and use exact-sequence additivity [F2]. The divisor support has dimension at most $n-1$, by the finite-type strict transcendence-degree drop at a nonzero equation. Its top difference is unchanged on replacing $O_D(D)$ by $O_D$ by [F2]. The component formula [F3] now gives the displayed sum; its generic lengths are exactly $\operatorname{ord}_H(D)$ in the normal height-one DVRs. Any lower-dimensional divisor support contributes zero by [F2]. Thus the effective Cartier formula holds even if the quotient has nonreduced or embedded support. [F2, F3, step 1.1, algebra]

3.1 For arbitrary $D$, its negative height-one orders have finite support. For each of these finitely many prime divisors, choose a homogeneous polynomial vanishing on it but not on integral $T$, and take its power large enough to dominate that negative order. Their finite product defines an effective Cartier divisor $A$. It creates no negative height-one order, so $D+A$ is effective by [F5]. The top tensor multilinearity [F2] writes the desired value as the difference for $O(D+A)$ and $O(A)$. Subtract the two effective formulas of step 2.1; their orders subtract to those of $D$. This proves the Cartier formula of step 1.1 for every rational section. No claim that an individual horizontal prime divisor is itself Cartier was needed. [F2, F5, step 1.1, step 2.1, construct, algebra]

4.1 Admissible rational sections can be constructed on the normalized generic scheme over the infinite field $K$. At each stage there are finitely many components in the previously formed divisor cycles by [F3]. For the next generic line bundle $L_i$, take finite global generating families of $L_i(a)$ and $O(a)$ using [F6]. Choose one numerator and one denominator section nonzero at every generic point of that finite component list; this is finite linear avoidance. Indeed evaluate coefficients $(1,c,\ldots,c^m)$ in each residue field; a nonzero evaluation polynomial has only finitely many roots in $K$, and $K$ is infinite. Their ratio is a rational section nonzero on each listed component, and it restricts to their normalizations. Continue the finite recursion; at the final zero-dimensional cycles choose the two sections nonzero at all their finitely many points. This ensures each point evaluation is a nonzero vector and each earlier rational section has finite nonzero norm at all divisorial atoms in [F1]. Thus every local term in the displayed recursion is an actual finite atomic sum. The same construction permits any other section choices satisfying this admissibility condition. [F1, F3, F6, step 1.1, construct, algebra]

5.1 We prove finite place support and the global formula by induction on $r$. If $r=0$, the normalized generic scheme is $\operatorname{Spec}E$ for a finite $E/K$. The local terms are those of [F4]. Their sum is the line-bundle degree on the normalization of $B$ in $E$, which maps projectively and birationally to the normal model $S$ by the projective-coordinate point extension. Birational invariance [F3] and the dimension-one Euler degree identify this with $J_{O_S}(\mathcal L_0)$. Now suppose $r>0$. Apply the Cartier formula from step 3.1 on $S$ with section $s_0$. Its top-dimensional horizontal components $H$ have generic fibres the components of $\operatorname{div}_{\mathrm{top}}(s_0)$, with the same orders: localizing at the generic base point leaves the identical height-one local ring. Each $H$ dominates $B$ and is integral, so its chart modules over a base DVR are torsion-free and flat by [F7]. Its finite normalization is therefore a projective flat model of its normalized generic component, as constructed in [F1], so the induction hypothesis identifies its mixed Euler intersection with its finite local sum for the remaining $r$ bundles. Birational invariance [F3] preserves the value on passing from $H$ to that normalization. All top-dimensional vertical components are the $V\subset S_v$. Their Cartier formula contribution at $v$ is
$$\sum_{V\subset S_v}\operatorname{ord}_V(s_0)J_{O_V}(\mathcal L_1|_V,\ldots,\mathcal L_r|_V)=\int-\log\|s_0\|_v\,d\mu_{\bar L_1,\ldots,\bar L_r;v},$$
by [F1]. This is the asserted recursion and total equality. Only finitely many horizontal components occur, each has finite place support by induction, and the vertical divisor part meets only finitely many fibres. Their finite union proves that the resulting entire place family has finite support. [F1, F3, F4, F7, step 1.1, step 3.1, step 4.1, induction, algebra]

6.1 The total equality in step 5.1 makes the global sum symmetric and tensor multilinear by [F2], and independent of admissible sections. Any two normal common models are dominated by a third as in [F1], and [F3] preserves the total top Euler pairing under its projective birational projections. This proves common-model independence. If different representatives give the same metrics, use the same generic admissible sections in the recursion. The point terms agree by their identical norms, and at every higher stage both the norms and the mixed measures agree by [F1]; induction gives equality of every local term. Thus the total also depends only on the fixed model metrics. Finite sums over integral cycles define the claimed cycle-linear extension. Normalization preserves the generic degree by [F3], so the self-height denominator is exactly the one on the original $Y$. It is only used when positive; empty divisor cycles and trivial bundles require no separate limiting argument. These are all-dimensional signed model statements, not an acceptance of the remaining nef/continuous-limit branches of the parent theorem. [F1, F2, F3, step 5.1, algebra] ∎
