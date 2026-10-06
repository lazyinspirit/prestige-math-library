---
id: lem-arith-dilatations-and-defect-of-smoothness
kind: lemma
title: "Dilatations and defect computation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - thm-blowup-projective
  - thm-valuative-criterion-properness
  - lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
  - thm-etale-formally-etale-finite-presentation
  - thm-differentials-smooth-locally-free
  - thm-jacobian-criterion-smooth-morphism
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - cor-dvr-is-a-pid
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-scheme-zariski-main-factorization-quasi-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 2.2/8-10 and 3.2/1-2, 3.3/1-3 (dilatations and the defect of smoothness)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$, residue field $k$, uniformizer $\pi$, and let $R^{\mathrm{sh}}$ be a strict henselization. Let $X$ be a finite-type flat $R$-scheme with smooth generic fibre of relative dimension $d$, and let $Y\subseteq X_k$ be a closed subscheme.

(a) The $\pi$-chart of the blowup $\operatorname{Bl}_Y(X)$ is flat over $R$ and universally receives a unique $R$-morphism from every flat $R$-scheme $B$ whose special morphism $B_k\to X_k$ factors through $Y$; it is called the dilatation of $X$ along $Y$. Dilatations commute with unramified flat base change of DVRs, with closed immersions and with products.

(b) For a section $a:\operatorname{Spec}R\to X$, the **defect** $\delta(a)$ is the length of the torsion submodule of $a^*\Omega_{X/R}$; it vanishes if and only if $X$ is smooth along $a$, and for smooth generic fibre it equals the minimum valuation of the maximal-rank Jacobian minors of a standard presentation of generic codimension, and is bounded uniformly over all $a\in X(R^{\mathrm{sh}})$.

(c) A morphism between smooth $R$-schemes of the same relative dimension is etale exactly at the points where its relative differential determinant is invertible; in particular $\delta(a)=0$ means that the differential at the rational specialization of $a$ has full rank $d$.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with uniformizer $\pi$, fraction field $K$ and residue field $k$, a strict henselization $R^{\mathrm{sh}}$, a flat finite-type $R$-scheme $X$ with smooth generic fibre of dimension $d$, a closed subscheme $Y\subseteq X_k$, and a section $a$ of $X$.

[F1] The standard charts of an affine blowup present the $\pi$-chart as $A[I/\pi]$, the quotient of $A[t_j]/(\pi t_j-g_j)$ by its $\pi$-power torsion; the Rees-Proj blowup is projective, hence proper, and the valuative criterion gives unique lifting of sections ([[thm-affine-blowup-standard-charts]], [[lem-affine-blowup-algebra-properties]], [[thm-blowup-projective]], [[thm-valuative-criterion-properness]], the last three assuming AC).

[F2] Local fibre dimension is upper semicontinuous and bounded above by tangent dimension ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]]); smooth morphisms have locally free differentials of rank the relative dimension, and the Jacobian criterion detects standard smooth charts by unit minors ([[thm-differentials-smooth-locally-free]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-etale-formally-etale-finite-presentation]]).

[F3] Over a DVR, flat is equivalent to torsion-free; smooth total spaces are regular, regular local rings are UFDs and the regular local rings of smooth fibres have the stated divisorial properties; the normal-domain intersection formula gives Hartogs extension in codimension one ([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]], [[cor-dvr-is-a-pid]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]).

## Proof

**Proof technique:** direct: compute the dilatation chart, prove the relative etale criterion, and read off the defect.

1.1 For an affine chart $\operatorname{Spec}A\subseteq X$ with ideal $I\subseteq A$ cutting out $Y$ on the special fibre and containing $\pi$, the $\pi$-chart of the blowup has coordinate ring $A[I/\pi]=A[t_j:j]/(\pi t_j-g_j)$ modulo its $\pi$-power torsion, by [F1]. This ring is $\pi$-torsion-free by construction, hence flat over the DVR $R$ by [F3]. If $B$ is flat over $R$ and the special morphism $B_k\to X_k$ factors through $Y$, then the images of the generators $g_j$ in $B$ are divisible by $\pi$: they vanish modulo $\pi$ because the factorization makes them lie in $IB$, so $g_j=\pi h_j$ with $h_j\in B$ unique, multiplication by $\pi$ being injective on the flat, hence $\pi$-torsion-free ring $B$. Sending $t_j\mapsto h_j$ kills all torsion and defines the unique $R$-morphism from $\operatorname{Spec}B$ to the $\pi$-chart; the blowup is projective, hence proper, and the valuative criterion gives the unique lifting of sections. [F1, F3, given, construct]

2.1 The universal property of step 1.1 is stated by generators and relations, so it is preserved by unramified flat base change $R\to R'$ of discrete valuation rings, by closed immersions and by products: the chart is pulled back and its torsion description commutes with flat base change, ideals restrict under closed immersions with their generators, and for the product centre $Y_1\times_kY_2$ the ideal is the sum of the extended ideals of the two centres, with the universal property checked componentwise. [F1, step 1.1, algebra]

3.1 A morphism $f:V\to W$ between smooth $R$-schemes of equal relative dimension is etale exactly where the determinant of its relative differential is invertible: if the determinant is a unit at a point, appending the equations $T_i-f_i$ to a standard smooth presentation of $V$ and using independence of the $\mathrm df_i$ together with the relation differentials produces a standard smooth chart with a unit Jacobian minor, so $f$ is etale there by [F2]; conversely, an etale morphism of equal relative dimension has an invertible differential determinant because the differential is an isomorphism between the locally free modules of the same rank. [F2, step 2.1, algebra]

4.1 For a section $a$ of $X$ with smooth generic fibre of dimension $d$, the module $a^*\Omega_{X/R}$ is finitely generated over the DVR, hence the direct sum of a free part and a torsion part, and $\delta(a)$ is the length of that torsion part. If $\delta(a)=0$, the differential vector space at the rational specialization of $a$ has dimension $d$; the generic section specializes to the special section, so the upper semicontinuity of local fibre dimension [F2] gives special local dimension at least $d$, while tangent dimension bounds it above by $d$. Choosing $n-d$ local equations with independent differentials exhibits a standard smooth ambient $Z$ of relative dimension $d$ containing $X$ locally along $a$; flatness makes the local dimension of $X$ equal to its special-fibre dimension plus one, namely $d+1$, which is the local dimension of the smooth ambient $Z$ at that rational point. A regular local domain has no nonzero ideal whose quotient has the same dimension, so the defining ideal of $X$ in $Z$ is zero locally. Hence $X$ agrees with the smooth ambient near the specialization and $a$ factors through the smooth locus. Hence $X$ is smooth along $a$, and conversely smoothness makes $a^*\Omega$ locally free, so its torsion vanishes. [F2, F3, step 3.1, algebra]

5.1 The numerical form of the defect is the Smith-normal-form computation: a presentation of $a^*\Omega$ exhibits its torsion length as the minimum over the generators of the valuations of the maximal-rank minors of the Jacobian matrix, and on the smooth locus of each generic dimension component those maximal-rank minors generate the unit ideal, so clearing finitely many denominators produces a power of $\pi$ and a maximum over a finite affine cover that bounds $\delta(a)$ uniformly for all $a\in X(R^{\mathrm{sh}})$. [F2, step 4.1, algebra]

6.1 All of these assertions are applied only to separated flat finite-type $R$-models with smooth generic fibre; the generic schematic closures and their blowups used later are flat because their chart rings are $\pi$-torsion-free by [F3], and the wider source theorem for arbitrary nonflat schemes is not used. [F3, step 5.1, algebra] ∎ 