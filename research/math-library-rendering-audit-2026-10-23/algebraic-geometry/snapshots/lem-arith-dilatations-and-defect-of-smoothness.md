---
id: lem-arith-dilatations-and-defect-of-smoothness
kind: lemma
title: "Dilatations and defect computation"
status: published
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

(a) The $\pi$-chart of the blowup $\operatorname{Bl}_Y(X)$ is flat over $R$ and universally receives a unique $R$-morphism over $X$ from every given $R$-morphism $B\to X$ with $B$ flat over $R$ whose special morphism $B_k\to X_k$ factors through $Y$; it is called the dilatation of $X$ along $Y$. Dilatations commute with unramified flat base change of DVRs and with products. A closed immersion $X_1\hookrightarrow X$ of flat $R$-schemes, with centre $Y_1=Y\times_X X_1$, induces a closed immersion of the corresponding dilatations; this is not a claim that arbitrary closed base change gives a cartesian square.

(b) For a section $a:\operatorname{Spec}R\to X$, the **defect** $\delta(a)$ is the length of the torsion submodule of $a^*\Omega_{X/R}$; it vanishes if and only if $X$ is smooth along $a$, and for smooth generic fibre it equals the minimum valuation of the maximal-rank Jacobian minors of a standard presentation of generic codimension, and is bounded uniformly over all $a\in X(R^{\mathrm{sh}})$.

(c) A morphism between smooth $R$-schemes of the same relative dimension is etale exactly at the points where its relative differential determinant is invertible; in particular $\delta(a)=0$ means that the special-fibre cotangent space at the rational specialization of $a$ has dimension $d$.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with uniformizer $\pi$, fraction field $K$ and residue field $k$, a strict henselization $R^{\mathrm{sh}}$, a flat finite-type $R$-scheme $X$ with smooth generic fibre of dimension $d$, a closed subscheme $Y\subseteq X_k$, and a section $a$ of $X$.

[F1] The standard charts of an affine blowup present the $\pi$-chart as $A[I/\pi]$, the quotient of $A[t_j]/(\pi t_j-g_j)$ by its $\pi$-power torsion; the Rees-Proj blowup is locally H-projective over $X$, hence proper, and the valuative criterion gives unique lifting of sections ([[thm-affine-blowup-standard-charts]], [[lem-affine-blowup-algebra-properties]], [[thm-blowup-projective]], [[thm-valuative-criterion-properness]], the last three assuming AC).

[F2] Local fibre dimension is upper semicontinuous and bounded above by tangent dimension ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]]); smooth morphisms have locally free differentials of rank the relative dimension, and the Jacobian criterion detects standard smooth charts by unit minors ([[thm-differentials-smooth-locally-free]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-etale-formally-etale-finite-presentation]]).

[F3] Over a DVR, flat is equivalent to torsion-free; smooth total spaces are regular, regular local rings are UFDs and the regular local rings of smooth fibres have the stated divisorial properties; the normal-domain intersection formula gives Hartogs extension in codimension one ([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]], [[cor-dvr-is-a-pid]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]).

## Proof

**Proof technique:** direct: compute the dilatation chart, prove the relative etale criterion, and read off the defect.

1.1 For an affine chart $\operatorname{Spec}A\subseteq X$ with ideal $I\subseteq A$ cutting out $Y$ on the special fibre and containing $\pi$, the $\pi$-chart of the blowup has coordinate ring $A[I/\pi]=A[t_j:j]/(\pi t_j-g_j)$ modulo its $\pi$-power torsion, by [F1]. This ring is $\pi$-torsion-free by construction, hence flat over the DVR $R$ by [F3]. If $B$ is flat over $R$ and the special morphism $B_k\to X_k$ factors through $Y$, then the images of the generators $g_j$ in $B$ are divisible by $\pi$: they vanish modulo $\pi$ because the factorization makes them lie in $IB$, so $g_j=\pi h_j$ with $h_j\in B$ unique, multiplication by $\pi$ being injective on the flat, hence $\pi$-torsion-free ring $B$. Sending $t_j\mapsto h_j$ kills all torsion and defines the unique $R$-morphism from $\operatorname{Spec}B$ to the $\pi$-chart; the blowup is locally H-projective over $X$, hence proper, and the valuative criterion gives the unique lifting of sections. [F1, F3, given, construct]

2.1 For an unramified flat extension of DVRs $R\to R'$, $\pi$ remains a uniformizer up to a unit. The inclusion $A[I/\pi]\subseteq A[1/\pi]$ stays injective after tensoring with $R'$, and its image is precisely the subalgebra generated by $A\otimes_RR'$ and the images $g_j/\pi$. Thus it is the dilatation algebra after base change. For two flat models, the tensor product of their dilatation algebras is flat over $R$ and is generated over $A_1\otimes_RA_2$ by the fractions from both centre ideals; the product centre has ideal $I_1(A_1\otimes_RA_2)+I_2(A_1\otimes_RA_2)$. The universal property checked componentwise therefore identifies this tensor product with the product-centre dilatation. Finally, for a flat closed subscheme with affine ring $A/J$, the homomorphism $A[I/\pi]\to(A/J)[\bar I/\pi]$, where $\bar I$ is the image of $I$, is surjective: the target is generated by the images of $A$ and $g_j/\pi$, and $\pi$-power torsion maps to zero. These affine surjections glue to the asserted closed immersion. The unique local factorizations in step 1.1 likewise glue for any flat source scheme $B$. [F1, F3, step 1.1, algebra]

3.1 Let $f:V\to W$ be a morphism between smooth $R$-schemes of equal relative dimension $d$. Near $f(v)$ choose etale coordinates $W\to\mathbb A_R^d$, using a unit minor of a standard smooth presentation, and denote the pulled-back coordinate functions on $V$ by $f_1,\dots,f_d$. If the relative differential determinant of $f$ is a unit at $v$, the $\mathrm df_i$ form a basis of $\Omega_{V/R}$ there. In a standard smooth presentation of $V$ in $n$ variables, append the $d$ graph equations $T_i-f_i$ to its $n-d$ relation equations. Their differentials have a unit $n\times n$ minor, so the composite $V\to\mathbb A_R^d$ is etale at $v$ by [F2]. Because $W\to\mathbb A_R^d$ is etale, this implies $f$ is etale: for a nilpotent lifting problem over $W$, unique lifting over $\mathbb A_R^d$ first gives the lift into $V$, and formal unramifiedness of $W\to\mathbb A_R^d$ forces its composite into $W$ to be the prescribed map. Local finite presentation then gives etaleness by [F2]. Conversely, if $f$ is etale, the same lifting property identifies its relative differential map with an isomorphism of the two locally free rank-$d$ modules, so its determinant is a unit. [F2, step 2.1, algebra]

4.1 For a section $a$ of $X$ with smooth generic fibre of dimension $d$, the module $a^*\Omega_{X/R}$ is finitely generated over the DVR, hence the direct sum of a free part and a torsion part, and $\delta(a)$ is the length of that torsion part. If $\delta(a)=0$, the differential vector space at the rational specialization of $a$ has dimension $d$; the generic section specializes to the special section, so the upper semicontinuity of local fibre dimension [F2] gives special local dimension at least $d$, while tangent dimension bounds it above by $d$. Choosing $n-d$ local equations with independent differentials exhibits a standard smooth ambient $Z$ of relative dimension $d$ containing $X$ locally along $a$; flatness makes the local dimension of $X$ equal to its special-fibre dimension plus one, namely $d+1$, which is the local dimension of the smooth ambient $Z$ at that rational point. A regular local domain has no nonzero ideal whose quotient has the same dimension, so the defining ideal of $X$ in $Z$ is zero locally. Hence $X$ agrees with the smooth ambient near the specialization and $a$ factors through the smooth locus. Hence $X$ is smooth along $a$, and conversely smoothness makes $a^*\Omega$ locally free, so its torsion vanishes. [F2, F3, step 3.1, algebra]

5.1 Choose a finite affine cover $\operatorname{Spec}A_\alpha$ of $X$ and presentations $A_\alpha=R[T_1,\dots,T_{n_\alpha}]/(f_1,\dots,f_{m_\alpha})$. Put $q_\alpha=n_\alpha-d$. A section whose specialization lies in this chart factors through the chart, since an open subset of $\operatorname{Spec}R$ containing its closed point is the whole spectrum. Evaluation of the Jacobian gives a presentation $R^{m_\alpha}\to R^{n_\alpha}\to a^*\Omega_{X/R}\to0$ of generic rank $q_\alpha$. Smith normal form over the DVR shows that the torsion length is the sum of the valuations of its $q_\alpha$ nonzero diagonal entries; equivalently it is the minimum valuation of the $q_\alpha\times q_\alpha$ minors. This proves the asserted numerical formula, with the size-zero minor interpreted as $1$. [F2, step 4.1, algebra]

6.1 Let $J_\alpha\subseteq A_\alpha$ be the ideal generated by these minors before evaluation. Smoothness of the pure relative-dimension-$d$ generic fibre says the Jacobian has rank $q_\alpha$ at every generic-fibre point, hence $J_\alpha A_\alpha[1/\pi]=A_\alpha[1/\pi]$. Expressing $1$ as a finite linear combination of minors over $A_\alpha[1/\pi]$ and clearing denominators gives $\pi^{N_\alpha}\in J_\alpha$ for some $N_\alpha\geq0$. After evaluating any $R^{\mathrm{sh}}$-section in this chart, the minor ideal therefore contains $\pi^{N_\alpha}$, so step 5.1 gives $\delta(a)\leq N_\alpha$. A section over $R^{\mathrm{sh}}$ factors through a chart containing its specialization just as above, and the finite maximum $\max_\alpha N_\alpha$ gives the uniform bound. Finally, step 4.1 identifies defect zero with smoothness along the section and with a $d$-dimensional special cotangent space; step 3.1 supplies the determinant criterion in (c). [F2, step 3.1, step 4.1, step 5.1, algebra] ∎
