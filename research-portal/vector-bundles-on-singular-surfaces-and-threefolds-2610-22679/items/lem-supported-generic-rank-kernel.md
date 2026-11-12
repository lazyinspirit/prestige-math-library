---
id: lem-supported-generic-rank-kernel
kind: lemma
title: Generic localization detects the point subgroup
status: published
domain: mathematics
deps:
  - lem-curve-supported-second-stage
  - prop-supported-k-zero-devissage
  - lem-curve-generic-rank-localization
  - lem-smooth-leading-cycle-normalization
  - lem-koszul-point-support-class
  - prop-perfect-k-localization-input
  - math:def-axiom-of-choice
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:cor-field-finite-type-over-a-field-is-a-finite-extension
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-subspaces-and-compact-opens
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:cor-closed-points-of-spectrum-are-maximal-ideals
  - math:def-residue-field-scheme-point
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-classical
  - math:thm-finite-field-extensions-are-algebraic
dependency_roles:
  lem-curve-supported-second-stage: mathematical-premise
  prop-supported-k-zero-devissage: mathematical-premise
  lem-curve-generic-rank-localization: mathematical-premise
  lem-smooth-leading-cycle-normalization: mathematical-premise
  lem-koszul-point-support-class: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:cor-field-finite-type-over-a-field-is-a-finite-extension: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-subspaces-and-compact-opens: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  math:cor-closed-points-of-spectrum-are-maximal-ideals: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
  math:thm-finite-field-extensions-are-algebraic: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 16, final paragraph of the proof of Theorem 6.7
      reading_limits: For this repair, the supplied extracted text of p. 16, final
        supported exact sequence and concluding paragraph of Theorem 6.7, was
        read. It states the article-context generic-localization and
        smooth-point conclusion over an algebraically closed field. The present
        perfect-field formulation and its hypothesis checks are justified by the
        declared suppliers and local argument; this bibliographical reference is
        not an additional imported premise or a claim to have reconstructed the
        comparison proofs.
dependency_level: 23
formulation_deps:
  - lem-curve-supported-second-stage
  - prop-supported-k-zero-devissage
  - lem-curve-generic-rank-localization
  - lem-koszul-point-support-class
  - prop-perfect-k-localization-input
  - math:def-axiom-of-choice
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-residue-field-scheme-point
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-classical
argument_deps:
  - lem-curve-supported-second-stage
  - prop-supported-k-zero-devissage
  - lem-curve-generic-rank-localization
  - lem-smooth-leading-cycle-normalization
  - lem-koszul-point-support-class
  - prop-perfect-k-localization-input
  - math:def-axiom-of-choice
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:cor-field-finite-type-over-a-field-is-a-finite-extension
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-subspaces-and-compact-opens
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:cor-closed-points-of-spectrum-are-maximal-ideals
  - math:def-residue-field-scheme-point
  - math:def-affine-open-subscheme
  - math:def-smooth-morphism-classical
  - math:thm-finite-field-extensions-are-algebraic
---

## Statement
Assume the Axiom of Choice and the fixed universe bounds of the completed comparison suppliers. Let $k$ be a perfect field, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $i:C\hookrightarrow U$ an integral closed curve of codimension two, with generic point $\eta$. No smoothness or normality of $C$ is assumed. Use the actual Elmanto–Morrow filtered nonconnective perfect-complex $K$-theory and write $K_C(U)=\operatorname{fib}(K(U)\to K(U\setminus C))$ and $F_C^jK(U)=\operatorname{fib}(F^jK(U)\to F^jK(U\setminus C))$.

The group $\pi_0K_C(U)$ is canonically the Grothendieck group of perfect complexes on $U$ supported on $C$. Under this identification, the arrow in the supported exact sequence
$$\pi_0F_C^3K(U)\longrightarrow\pi_0K_C(U)\longrightarrow\mathbb Z[C]\cong\mathbb Z$$
is generic localization: it sends a supported perfect complex $E$ to $\sum_n(-1)^n\operatorname{length}_{\mathcal O_{U,\eta}}H^n(E)_\eta$, and the positive cycle $[C]$ corresponds to $1$. Its kernel, equivalently the image of $\pi_0F_C^3K(U)$, is the subgroup generated by the classes of perfect complexes supported at closed points of $C$. Indeed it is generated by the individual residue-sheaf classes $[i_{x*}\kappa(x)]$, where $i_x:\operatorname{Spec}\kappa(x)\hookrightarrow U$ and $x$ ranges over closed points of $C$.

If $U$ is an open subscheme of a finite-type $k$-scheme $X$, these points are closed smooth points of $X$. In particular this applies to a curve contained in the smooth locus in the article's algebraically closed-field setting.

Here integral means reduced and irreducible; a curve is one-dimensional. A perfect complex is a complex locally quasi-isomorphic to a bounded complex of finite locally free sheaves. It is supported on a subset when all its cohomology stalks vanish outside that subset. Its Grothendieck group has one generator for each perfect object and the usual distinguished-triangle relations. The length of a finite-length module is the number of simple factors in a composition series. Generic localization is the map induced by restriction to the generic point, expressed through coherent $G$-theory as generic rank; the alternating-length formula specifies the same map on supported perfect objects.

## Facts & Assumptions

**Given:** AC, the fixed universe bounds, $k$, $U$, $C$ and the actual supported filtration as in the Statement. For the final assertion, also let $U\subseteq X$ be an open immersion into a finite-type $k$-scheme.

**Goal:** Identify the actual supported sequence and its second arrow, compute its kernel by closed-point classes, and establish the stated smooth-point conclusion.

[F1] [[lem-curve-supported-second-stage]] supplies the actual equivalence $\epsilon_2:F_C^2K(U)\simeq K_C(U)$ and the exact sequence after transport along $\epsilon_2$. [[lem-smooth-leading-cycle-normalization]] identifies the transported projection with alternating generic length times the positive supported cycle $[C]$. These suppliers require the stated perfect-field, smoothness, dimension, AC and universe hypotheses.

[F2] [[prop-perfect-k-localization-input]] identifies the category-defined supported nonconnective $K$-spectrum with the actual restriction fiber for a qcqs scheme and a quasi-compact open complement. [[prop-supported-k-zero-devissage]] identifies its degree-zero group with $G_0(C)$ and sends the coherent class $[F]$ inversely to the class of $i_*F[0]$. Here $G_0(C)$ is generated by coherent sheaves with short-exact-sequence relations. The ambient scheme must be regular Noetherian and finite-dimensional.

[F3] [[lem-curve-generic-rank-localization]] states, under AC, that for an integral Noetherian one-dimensional scheme the kernel of generic rank on $G_0$ is generated by the residue sheaves of closed points. Under the supported comparison it identifies generic rank with alternating generic length; its localization description is the filtered limit over nonempty opens.

[F4] [[lem-koszul-point-support-class]] proves under AC that the residue sheaf of a closed smooth point of a finite-type scheme over a perfect field is perfect and supported at that point, using a local Koszul resolution.


[F5] Under AC, [[math:thm-regular-equals-smooth-over-perfect-field]] says that a smooth finite-type scheme over a perfect field is regular, including local Noetherianity. [[math:def-locally-finite-type-and-finite-type-morphism]] supplies quasi-compactness and affine neighbourhoods with finitely generated coordinate algebras. [[math:def-locally-noetherian-and-noetherian-scheme]] identifies local Noetherianity plus quasi-compactness with Noetherianity and a finite affine Noetherian cover.

[F6] [[math:thm-noetherian-ring-has-noetherian-spectrum]] makes each Noetherian affine chart topologically Noetherian. Under AC, [[math:lem-noetherian-subspaces-and-compact-opens]] makes every subspace of a Noetherian space Noetherian and quasi-compact. [[math:def-quasi-compact-and-quasi-separated-scheme]] defines the two qcqs conditions, including quasi-compactness of intersections of affine opens. [[math:lem-closed-immersion-affine-quotient-and-base-change]] identifies the inverse image of an affine chart under a closed immersion with a quotient spectrum and retains the homeomorphism onto a closed subset. [[math:thm-noetherian-ring-quotients-and-localisations]] makes these quotient rings Noetherian.

[F7] [[math:cor-closed-points-of-spectrum-are-maximal-ideals]] identifies closed affine points with maximal ideals. [[math:def-residue-field-scheme-point]] gives $\kappa(\mathfrak p)=\operatorname{Frac}(A/\mathfrak p)$ on $\operatorname{Spec}A$, and hence $\kappa(\mathfrak m)=A/\mathfrak m$ for a maximal ideal. [[math:cor-field-finite-type-over-a-field-is-a-finite-extension]] makes a field finitely generated as a $k$-algebra finite over $k$. [[math:thm-finite-field-extensions-are-algebraic]] says that every element of such a finite extension is a root of a nonzero polynomial over $k$. [[math:def-affine-open-subscheme]] supplies the restricted structure sheaf on an open subscheme, so its stalks and residue fields agree with those in the ambient scheme. [[math:def-smooth-morphism-classical]] supplies the local standard-smooth meaning of smoothness and its locality on the source.

[A1] [[math:def-axiom-of-choice]] is assumed through the regularity theorem in [F5], the Noetherian compactness and closed-immersion results in [F6], the affine closed-point and smoothness interfaces in [F7], and the supported-category, coherent-group and generic-rank comparisons in [F1]–[F4]. The fixed compatible site and universe bounds are precisely those of [F1]–[F2]; no universe existence is deduced from Choice. The finite cover and finite algebra calculations below require no additional choice assumption. The perfect-field convention and point-residue objects are specified in [F4]; the integral-curve, length and coherent-group conventions are specified in [F2]–[F3].

## Proof

1.1 By [F5], $U$ is regular and locally Noetherian. Its finite-type structure morphism is quasi-compact, so $U$ is quasi-compact; hence it is Noetherian and has a finite affine Noetherian cover. By [F6] the spectra in this cover are topologically Noetherian. A descending chain of closed subsets of $U$ stabilizes on each member of the finite cover, and therefore stabilizes globally by taking the largest of their finitely many stabilization indices. Thus $|U|$ is Noetherian. By [F6], $U\setminus C$ and every intersection of affine opens of $U$ are quasi-compact, so $U$ is qcqs. Its dimension is three by hypothesis, in particular finite. [given, F5, F6]

2.1 Pull the finite affine Noetherian cover of $U$ back to $C$. By the closed-immersion quotient description in [F6], these inverse images are affine spectra of quotients of the Noetherian chart rings. Those quotients are Noetherian by [F6]. The inverse images form a finite cover, so [F5] makes $C$ a Noetherian scheme. It is integral and one-dimensional by hypothesis. Thus the curve hypotheses of [F3], as well as the ambient hypotheses of [F2], hold. [given, F5, F6, step 1.1]

2.2 The localization equivalence in [F2] now identifies the actual fiber $K_C(U)$ with the $K$-spectrum of the full category of perfect complexes supported on $C$. The degree-zero comparison and triangle presentation in the supported dévissage identify its $\pi_0$ with the stated Grothendieck group and canonically with $G_0(C)$. [F2, step 1.1]

3.1 The pair $C\subset U$ satisfies all hypotheses of [F1]. Transporting the supported graded exact sequence along the actual augmentation $\epsilon_2$ gives the displayed sequence. By [F1] its second arrow takes $[E]$ to the alternating generic-length coefficient times $[C]$, with positive generator. By [F3], under the specific $G_0(C)$ comparison of step 2.2 this coefficient is generic rank, equivalently localization to the generic point in the stated filtered-limit sense. This identifies the actual arrow, rather than inferring it from an abstract isomorphism of its target with $\mathbb Z$. [F1, F3, step 2.1, step 2.2]

4.1 By [F3], the kernel of generic rank on $G_0(C)$ is generated by $[\kappa(x)]$ for closed points $x$ of $C$. Since $C$ is closed in $U$, each such $x$ is closed in $U$. The inverse in [F2] sends $[\kappa(x)]$ to the class of the same residue sheaf, viewed as a perfect complex on $U$ in degree zero. It is supported at $x$; [F4] independently supplies its local perfectness. Consequently the kernel is generated by these point classes. Conversely every perfect complex supported at a closed point has zero stalk at $\eta$, so its alternating generic length is zero. Hence the subgroup generated by all such complexes is exactly the kernel. Exactness in step 3.1 identifies this kernel with the image of $\pi_0F_C^3K(U)$. [F2, F3, F4, step 3.1]

5.1 Suppose $U$ is open in a finite-type $k$-scheme $X$, and let $x$ be one of the closed points in step 3.1. By [F5], there is an affine neighbourhood $V=\operatorname{Spec}B$ of $x$ in $U$ with $B$ a finitely generated $k$-algebra. Since $x$ is closed in $U$, it is closed in $V$; by [F7] its ideal $\mathfrak m$ is maximal, and $\kappa(x)=B/\mathfrak m$. This field is a finitely generated $k$-algebra, so [F7] makes $\kappa(x)/k$ finite. The open-subscheme identification in [F7] gives the same residue field when $x$ is viewed in $X$. [given, F5, F7, step 4.1]

6.1 To prove global closedness, let $y\in\overline{\{x\}}$ in $X$ and choose an affine neighbourhood $W=\operatorname{Spec}A$ of $y$. Every open neighbourhood of this specialization contains $x$, so $x\in W$, corresponding to a prime $\mathfrak p$. By [F7], $A/\mathfrak p$ embeds as a $k$-subalgebra in $\kappa(x)=\operatorname{Frac}(A/\mathfrak p)$. By step 5.1 and the finite-extension algebraicity in [F7], every nonzero $a\in A/\mathfrak p$ has a nonzero polynomial relation over $k$. Remove the highest common power of its variable from such a polynomial; since $a\ne0$ in a field, the remaining relation is $c_0+c_1a+\cdots+c_da^d=0$ with $c_0\ne0$ and $d\geq1$. It gives $a^{-1}=-c_0^{-1}(c_1+\cdots+c_da^{d-1})\in A/\mathfrak p$. Thus $A/\mathfrak p$ is a field, $\mathfrak p$ is maximal, and [F7] makes $x$ closed in $W$. As $y$ is still a specialization in $W$, $y=x$. This proves that $x$ is closed in $X$. Finally the smooth affine neighbourhoods in $U$ are also neighbourhoods in $X$ with the same structure sheaves; the source-local smoothness convention in [F7] therefore makes $X$ smooth over $k$ at $x$. All generators in step 4.1 are consequently supported at closed smooth points of $X$, proving the final assertion and the lemma. [given, F7, step 4.1, step 5.1, algebra] ∎
