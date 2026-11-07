---
id: lem-function-field-model-curve-height-sums-and-section-independence-in-zf
kind: lemma
title: Function-field model curve-height sums and section independence without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-normal-projective-surface-cartier-intersection-pairing-in-zf
  - lem-curve-model-chern-measures-and-refinement-invariance-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - thm-sections-basic-open-affine-scheme
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; the model family, divisor supports and chart operations are finite. All place sums below have proved finite support.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 local-to-global conventions; the r=1 model-metric construction is supplied here, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $K=k(B)$ for a smooth projective integral $k$-curve, and $Y/K$ an integral projective curve. Let $\bar L_0,\bar L_1$ be line bundles with metrics induced at every place by projective flat $B$-models, allowing different models for the two bundles. On the finite normalization $\nu:C\to Y$, choose a nonzero rational section $s_0$ of $\nu^*L_0$, and a rational section $s_1$ of $\nu^*L_1$ regular and nonzero at every point in $\operatorname{supp}\operatorname{div}(s_0)$; such $s_1$ exists. For $y$ in that support put $E_y=\kappa(y)$ and $n_y=\operatorname{ord}_y(s_0)$. Using $|t_v|=e^{-1}$, define
$$\lambda_v(s_0,s_1)=\sum_y n_y\int -\log\|s_1(y)\|_v\,d\mu_{E_y,v}+\int -\log\|s_0\|_v\,c_1(\nu^*\bar L_1)_v.$$
The first integrals are against the finite point measures of total mass $[E_y:K]$; the second is against the finite curve-model Chern measure. All evaluations at the atoms used in this formula are finite real numbers, and $\lambda_v=0$ outside a finite set of places. Their finite sum is a symmetric bilinear pairing of the two model-metrized line bundles, independent of $s_0,s_1$, the common model and its normal refinement, and the particular models representing the same metrics. On any common normal projective flat model $S/B$ of $C$ with the pulled-back model bundles $\mathcal L_0,\mathcal L_1$, it equals
$$\sum_v\lambda_v(s_0,s_1)=\mathcal L_0\cdot\mathcal L_1.$$
The right side is the actual surface Cartier pairing. Thus the model self-intersection height $(\mathcal L\cdot\mathcal L)/(2\deg_YL)$ is well-defined when $\deg_YL>0$, and the pairing extends additively to finite curve cycles by normalization and finite sums. No assertion for arbitrary continuous/integrable metric limits or higher-dimensional cycles is made by this lemma.

## Facts & Assumptions

**Given:** The base function field, integral projective curve, two line bundles and their model metrics; the finite normalization and rational sections as in the Statement.

[F1] The finite Cartier pairing on a normal integral projective surface is symmetric, bilinear, invariant under projective birational normal refinement and independent of rational sections. It is computed by the divisor orders of one section times the degrees of the other bundle on the corresponding curves. [[lem-normal-projective-surface-cartier-intersection-pairing-in-zf]]

[F2] Curve-model Chern measures are finite atomic measures with the multiplicity-weighted component degrees, divisorial seminorm points and generic-degree mass. They and model norms are invariant under normal refinement and the representing model of a fixed metric. Normal common refinements exist. [[lem-curve-model-chern-measures-and-refinement-invariance-in-zf]]

[F3] For any finite $E/K$, the point measure is $\mu_{E,v}=\sum_{w\mid v}e_{w/v}\delta_{\xi_w}$. For model metrics the point-height sum is finite, section independent and equals the degree on the normalization of $B$ in $E$, divided by $[E:K]$; the generic point extends to the projective model. This includes inseparability. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

[F4] Projective curve degrees are invariant under finite normalization and agree with the sum of rational-section orders on the normal curve, with residue-degree weights. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F5] Sections on an affine principal open are given by localization. [[thm-sections-basic-open-affine-scheme]]

## Proof

1.1 Pull the given model bundles to a common projective flat refinement and normalize it as constructed in [F2]. Its generic fibre is the finite normalization $C$ of $Y$, and it is an integral normal projective $k$-surface $S$, flat over $B$. All original metric norms pull back unchanged, so we may calculate there. Rational sections of $\nu^*L_i$ are rational sections of $\mathcal L_i$ on $S$, as their function fields are the same. Their Cartier divisors have finite support by [F1]. The normalization preserves generic degrees by [F4]. [F1, F2, F4, given, construct, algebra]

2.1 The choice of $s_1$ required by the Statement is possible by finite linear algebra. Fix a projective embedding of $C$. For sufficiently large $m$, both $\nu^*L_1(m)$ and $O_C(m)$ have finite global generating families. Here the needed construction is finite: start with frames and generators on a finite cover by principal opens in the standard affine charts; clear their finite presentation and transition denominators using [F5], multiply by powers of chart coordinates to a common homogeneous degree, and glue. A further power kills the finitely many differences on overlaps. This makes a twisted global family generating on the original finite cover. At each of the finitely many points of $\operatorname{div}(s_0)$, the sections vanishing there form a proper $K$-linear subspace of the finite span of either generating family. A finite union of proper subspaces cannot cover a vector space over the infinite field $K$: choose coefficients along $(1,a,\ldots,a^N)$, for which each nonzero evaluation polynomial has only finitely many roots. Choose one section $\alpha$ of $\nu^*L_1(m)$ and one $\beta$ of $O_C(m)$ nonzero at every specified point, and put $s_1=\alpha/\beta$. If the support is empty, choose any nonzero rational section. This proves existence with no arbitrary approximation principle. [F5, step 1.1, construct, algebra]

3.1 Let $H_y$ be the reduced horizontal closure of $y$ in $S$. Its function field is $E_y$, and the order of the rational section $s_0$ along $H_y$ is $n_y$: after localizing the base at its generic point this is exactly the same normal curve DVR. The normalization $B_y$ of $B$ in $E_y$ maps to $S$ by the finite projective-coordinate extension in [F3], and maps birationally onto $H_y$. It is the normalization of $H_y$: the inverse generic map between their normal projective curves extends over each DVR by scaling finitely many projective coordinates, and the extensions are unique. Hence [F4] and the point-height degree formula [F3] give
$$\deg_{H_y}(\mathcal L_1|_{H_y})=\deg_{B_y}(\mathcal L_1|_{B_y})=\sum_v\int-\log\|s_1(y)\|_v\,d\mu_{E_y,v}.$$
Each sum is finite by [F3], and $s_1(y)$ is a nonzero vector by step 2.1. The weights are unnormalized here: the normalization factor $[E_y:K]^{-1}$ of a point height has been removed, exactly as required for the horizontal cycle contribution. Residue extensions and ramification, including inseparability, are precisely those in the actual point measure. [F3, F4, step 1.1, step 2.1, algebra]

4.1 Along a component $V$ of $S_v$, write $a_V=\operatorname{ord}_V(s_0)$ and $b_V=\operatorname{ord}_V(t_v)>0$. In a local model frame $e$, $s_0=fe$ and $\|e\|=1$. Thus at its divisorial analytic point, $-\log\|s_0\|(\xi_V)=a_V/b_V$. The generic rational function in this expression is nonzero in $K(C)$, so its seminorm value is nonzero and finite, even if $s_0$ has zeros or poles elsewhere on the analytic curve. By [F2] its integral is the finite number
$$\int-\log\|s_0\|_v\,c_1(\nu^*\bar L_1)_v=\sum_{V\subset S_v}a_V\deg_V(\mathcal L_1|_V).$$
Only finitely many of these terms are nonzero as $v$ varies, because the vertical part of the Cartier divisor of $s_0$ has finite support on $S$. This verifies both the integral and its support assertion without an integral of an uncontrolled logarithmic singularity against an unknown limiting measure. [F1, F2, step 1.1, algebra]

5.1 Evaluate the surface pairing [F1] using the rational section $s_0$ of $\mathcal L_0$. Its horizontal curves are exactly the $H_y$ from step 3.1 with coefficients $n_y$, and its other curves are the vertical components in step 4.1. Therefore
$$\mathcal L_0\cdot\mathcal L_1=\sum_y n_y\deg_{H_y}(\mathcal L_1|_{H_y})+\sum_v\sum_{V\subset S_v}a_V\deg_V(\mathcal L_1|_V)=\sum_v\lambda_v(s_0,s_1).$$
This is an equality of finite sums: there are finitely many $y$, each point sum is finite by step 3.1, and the vertical sum is finite by step 4.1. Their union is a finite exceptional set outside which every local term is zero. The actual surface pairing is symmetric, bilinear and section independent by [F1]. Consequently the local-to-global sum has these properties, even though its displayed local terms use the chosen sections. [F1, step 3.1, step 4.1, algebra]

6.1 Two common normal models are dominated by a third by [F2]. The surface pairing is unchanged by those projective birational pullbacks by [F1], proving common-model independence. More generally, if different model representatives induce the same metrics, choose the same $s_0,s_1$ on $C$. Their point norms in step 3.1 agree, and their curve Chern measures and norms in step 4.1 agree by [F2]. Thus each local expression agrees and so does the global sum. This proves independence of the metric representatives as well. Starting with singular $Y$ merely made the fixed finite normalization $C$ in step 1.1; all generic degrees used for normalization are unchanged by [F4], so the displayed self-height has the stated denominator on the original $Y$. A finite integral curve cycle is handled by applying these constructions to its finitely many components and taking the indicated integer combination. The trivial bundle and empty section divisor cause no exception, and the self-height is only divided by $2\deg_YL$ when that degree is positive. This proves the entire model-metric curve assertion. [F1, F2, F4, step 1.1, step 3.1, step 4.1, step 5.1, algebra] ∎
