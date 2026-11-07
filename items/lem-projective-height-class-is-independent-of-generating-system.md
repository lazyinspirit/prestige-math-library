---
id: lem-projective-height-class-is-independent-of-generating-system
kind: lemma
title: "Projective height classes from generating systems are independent up to a bounded function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-projective-morphism-pre-proj
  - lem-spread-out-projective-scheme-line-bundle-and-generators
  - thm-absolute-height-is-invariant-under-field-extension
  - thm-line-bundle-sections-define-projective-map
  - thm-projective-morphism-proper
  - lem-graph-closed-separated-target
  - def-relative-projective-space-standard-charts
  - def-separated-morphism-schemes
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-ramification-index
  - def-prime-above-and-residue-degree
  - thm-fundamental-identity-for-primes-in-number-fields
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://doi.org/10.1007/978-1-4613-8655-1_6"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, MSRI 2006, slides 8–11 (statement overview only)"
      url: "https://www.msri.org/workshops/401/schedules/1186"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X$ be a projective $K$-scheme, let $\mathcal L$ be a globally generated invertible sheaf on $X$, and let $s_0,\ldots,s_r$ and $t_0,\ldots,t_m$ be two finite generating sets of $\mathcal L$. The two functions on $X(\overline K)$ obtained by taking the absolute logarithmic projective height of the respective section maps differ by a bounded function.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-line-bundle-sections-define-projective-map]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a projective $K$-scheme $X$; a globally generated invertible sheaf $\mathcal L$; and the two generating systems in the Statement.

[A1] AC is inherited by the section-map and absolute-height constructions. ([[def-axiom-of-choice]], [[thm-line-bundle-sections-define-projective-map]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F1] Each system defines a morphism $f_s,f_t$ to projective space with pullback of $\mathcal O(1)$ identified with $\mathcal L$, carrying coordinate sections to the given sections. Invertible sheaves are locally free of rank one. ([[thm-line-bundle-sections-define-projective-map]], [[def-invertible-sheaf]], [[def-globally-generated-sheaf]])

[F2] Projectivity supplies a closed immersion $i:X\hookrightarrow\mathbb P^q_K$. Graphs into separated schemes are closed; projective-space charts and their products are affine polynomial charts. Rings of integers and their finite-type algebras are Noetherian. ([[def-projective-morphism-pre-proj]], [[lem-graph-closed-separated-target]], [[def-relative-projective-space-standard-charts]], [[def-separated-morphism-schemes]], [[thm-ring-of-integers-and-ideals-are-full-lattices]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] Rings of integers of number fields are Dedekind, and their localizations at nonzero primes are discrete valuation rings. ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]) The relative logarithmic height is the sum of finite terms $\log\max_j(N\mathfrak P)^{-\operatorname{ord}_{\mathfrak P}(x_j)}$ and archimedean coordinate maxima with exponents $1,2$, divided by the field degree for absolute height. For $E/K$, the finite-place identity is $\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P/\mathfrak p}f_{\mathfrak P/\mathfrak p}=[E:K]$; archimedean embeddings give the analogous weighted identity. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[thm-absolute-height-is-invariant-under-field-extension]], [[def-ramification-index]], [[def-prime-above-and-residue-degree]], [[thm-fundamental-identity-for-primes-in-number-fields]])

## Proof

1.1 If $X$ is empty there are no points and the bound $0$ suffices. Otherwise form the closed graph $D_K$ of $(i,f_s,f_t)$ in $T_K=\mathbb P^q_K\times\mathbb P^r_K\times\mathbb P^m_K$, using [F1] and [F2]. Put $R=\mathcal O_K$ and take its schematic closure $D$ in the corresponding product $T_R$. Explicitly, on an affine product chart $\operatorname{Spec}A$, contract the ideal of $D_K$ from $A\otimes_R K$ to $A$. These ideals glue: contraction commutes with localization at chart coordinates, as follows by multiplying a representative by a power of that coordinate. Their quotients inject into their localizations over $K$, so their rings, and hence all structure sheaf stalks of $D$, are $R$-torsion-free. The generic fibre is exactly $D_K\cong X$. Noetherianity of the finite chart rings makes $D$ Noetherian and quasi-compact. [given, A1, F1, F2, construct]

1.2 Let $\mathcal A,\mathcal B$ be the pullbacks to $D$ of $\mathcal O(1)$ from the second and third factors. Their coordinate sections generate them everywhere. On the generic fibre [F1] identifies both with $\mathcal L$; let $\phi:\mathcal A_K\to\mathcal B_K$ be the resulting isomorphism. Choose a finite affine cover $U_j=\operatorname{Spec}A_j$ trivializing both line bundles; this exists by local freeness and quasi-compactness. In these frames $\phi$ is multiplication by $u_j\in A_j\otimes_R K$, with inverse $u_j^{-1}$ in the same ring. Clear the finitely many denominators: there are nonzero $a,b\in R$ such that $a u_j,b u_j^{-1}\in A_j$ for every $j$. These local maps glue to maps $a\phi:\mathcal A\to\mathcal B$ and $b\phi^{-1}:\mathcal B\to\mathcal A$: their differences vanish generically on overlaps, and the torsion-free structure sheaf from step 1.1 makes restriction to the generic fibre injective there. [given, F1, F2, step 1.1, choose, algebra]

2.1 Fix any finite extension $E/K$, any $P\in X(E)$, and any nonzero prime $\mathfrak P$ of $E$. Its graph coordinates extend to $T_R$ over the discrete valuation ring $V=\mathcal O_{E,\mathfrak P}$: in each of the three finite coordinate lists divide by an entry of least valuation, so that every coordinate is integral and one is $1$. This defines the projective-chart morphisms directly. Their product factors through $D$, since each equation in the contracted ideal vanishes after passing to the fraction field $E$, and $V\hookrightarrow E$ is injective. Pull back $\mathcal A,\mathcal B$ to $V$ and choose free rank-one frames $e_A,e_B$; a line bundle over this local spectrum is free because a trivializing neighbourhood of its closed point is the whole spectrum. In each frame the coordinate sections are integral and generate $V$, so each list has maximum absolute value $1$. Write $\phi(e_A)=u e_B$ on the generic fibre. The two maps of step 1.2 imply $a u,b/u\in V$, hence
$$-\operatorname{ord}_{\mathfrak P}(a)\leq\operatorname{ord}_{\mathfrak P}(u)\leq\operatorname{ord}_{\mathfrak P}(b).$$
Identifying both generic fibres with the same fibre of $\mathcal L$, the ratio of the $s$-maximum to the $t$-maximum is $|u|_{\mathfrak P}=(N\mathfrak P)^{-\operatorname{ord}_{\mathfrak P}(u)}$. Thus its logarithm has absolute value at most $\max\{\operatorname{ord}_{\mathfrak P}(a),\operatorname{ord}_{\mathfrak P}(b)\}\log N\mathfrak P$. The constants $a,b$ were fixed before choosing $E,P,\mathfrak P$. [given, F1, F2, F3, step 1.1, step 1.2, construct, algebra]

2.2 Put $c_{\mathfrak p}=\max\{\operatorname{ord}_{\mathfrak p}(a),\operatorname{ord}_{\mathfrak p}(b)\}$. These are nonnegative and zero at all but finitely many primes of $K$. Since $\operatorname{ord}_{\mathfrak P}(a)=e_{\mathfrak P/\mathfrak p}\operatorname{ord}_{\mathfrak p}(a)$ and $\log N\mathfrak P=f_{\mathfrak P/\mathfrak p}\log N\mathfrak p$, summing the bound in step 2.1 over $\mathfrak P\mid\mathfrak p$ and dividing by $[E:\mathbb Q]$ gives $c_{\mathfrak p}\log N\mathfrak p/[K:\mathbb Q]$ by [F3]. Therefore the entire finite-place contribution is bounded by the fixed finite constant $[K:\mathbb Q]^{-1}\sum_{\mathfrak p}c_{\mathfrak p}\log N\mathfrak p$, uniformly over all finite $E/K$. [F3, step 2.1, algebra]

3.1 For each embedding $\sigma:K\hookrightarrow\mathbb C$, the space $X_\sigma(\mathbb C)$ is a closed subset of compact complex projective space. In local frames the ratio of the two coordinate maxima is positive and continuous, since neither generating system vanishes simultaneously; its logarithm is independent of the frame. Compactness gives a bound $C_\sigma$ for its absolute value. At every embedding of $E$ above $\sigma$, the value is the same function evaluated at a point of $X_\sigma(\mathbb C)$. Counting conjugate embeddings separately, there are $[E:K]$ extensions of each embedding of $K$, by [F3]. Dividing their bounds by $[E:\mathbb Q]$ therefore gives a fixed archimedean bound independent of $E$. [given, F1, F2, F3, algebra]

3.2 At every place, a common fibre frame computes the difference between the logarithms of the two projective coordinate maxima, and changing that frame multiplies both maxima by the same scalar. The absolute height difference is their degree-normalized sum by [F3]. The finite bound in step 2.2 and archimedean bound in step 3.1 give one constant independent of both $E$ and $P$. Every algebraic point has some finite field of definition, and extension invariance in [F3] makes the result independent of that choice. This proves bounded difference on all of $X(\overline K)$. [F1, F3, step 2.2, step 3.1, algebra] ∎

## Remarks

The finite-place bound is obtained from integral maps between line bundles on one fixed graph closure. It is uniform over all finite extensions, including extensions of unbounded ramification. No compactness assertion over varying nonarchimedean fields is used.
