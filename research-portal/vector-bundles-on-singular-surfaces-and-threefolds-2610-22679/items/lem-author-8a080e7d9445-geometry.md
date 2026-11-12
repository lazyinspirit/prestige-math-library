---
id: lem-author-8a080e7d9445-geometry
kind: lemma
title: The actual smooth open pair and its Nisnevich square
status: published
domain: mathematics
deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-noetherian-ring-and-module
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-subspaces-and-compact-opens
  - math:lem-spectrum-localization-open-immersion
  - math:def-affine-scheme-spectrum
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-finite-presentation-morphism
  - math:def-smooth-morphism-schemes
  - math:def-smooth-locus-morphism
  - math:thm-smooth-locus-open
  - math:def-regular-local-ring-geometric-point
  - math:thm-characteristic-of-a-field-is-zero-or-prime
  - math:thm-perfect-field-characterizations
  - math:def-separated-morphism-schemes
  - math:cor-affine-schemes-separated
  - math:lem-base-change-open-closed-immersions
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
  - math:thm-affine-closed-immersions-quotient-rings
  - math:def-integral-scheme
  - math:def-relative-dimension-smooth-morphism
  - math:thm-differentials-smooth-locally-free
  - math:def-prime-subfield
dependency_roles:
  def-article-conventions: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-subspaces-and-compact-opens: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-locally-finite-presentation-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
  math:thm-smooth-locus-open: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:thm-characteristic-of-a-field-is-zero-or-prime: mathematical-premise
  math:thm-perfect-field-characterizations: mathematical-premise
  math:def-separated-morphism-schemes: mathematical-premise
  math:cor-affine-schemes-separated: mathematical-premise
  math:lem-base-change-open-closed-immersions: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
  math:lem-fibre-product-open-restriction: mathematical-premise
  math:thm-affine-closed-immersions-quotient-rings: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-relative-dimension-smooth-morphism: mathematical-premise
  math:thm-differentials-smooth-locally-free: mathematical-premise
  math:def-prime-subfield: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 7
formulation_deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-smooth-locus-morphism
  - math:def-regular-local-ring-geometric-point
  - math:thm-perfect-field-characterizations
  - math:def-separated-morphism-schemes
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
  - math:thm-affine-closed-immersions-quotient-rings
  - math:def-integral-scheme
  - math:def-relative-dimension-smooth-morphism
  - math:thm-differentials-smooth-locally-free
  - math:def-prime-subfield
argument_deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
  - math:def-noetherian-ring-and-module
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-subspaces-and-compact-opens
  - math:lem-spectrum-localization-open-immersion
  - math:def-affine-scheme-spectrum
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-locally-finite-presentation-morphism
  - math:def-smooth-morphism-schemes
  - math:def-smooth-locus-morphism
  - math:thm-smooth-locus-open
  - math:def-regular-local-ring-geometric-point
  - math:thm-characteristic-of-a-field-is-zero-or-prime
  - math:thm-perfect-field-characterizations
  - math:def-separated-morphism-schemes
  - math:cor-affine-schemes-separated
  - math:lem-base-change-open-closed-immersions
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
  - math:thm-affine-closed-immersions-quotient-rings
  - math:def-integral-scheme
  - math:def-relative-dimension-smooth-morphism
  - math:thm-differentials-smooth-locally-free
  - math:def-prime-subfield
---

## Statement
Assume the Axiom of Choice. Let $X$ be an affine finite-type $k$-scheme of dimension three over an algebraically closed field $k$, and let $U=X_{\mathrm{smooth}/k}=\operatorname{Sm}(X\to\operatorname{Spec}k)$, with its open subscheme structure. Let $T\subseteq X$ be a closed subset contained in $U$. Whenever a scheme structure on $T$ is needed, use its reduced induced closed subscheme structure. Put $V=U\setminus T$ and $W=X\setminus T$, with their open subscheme structures.

All four schemes $X,U,V,W$ are quasi-compact and quasi-separated. The schemes $U,V$ are smooth separated finite type over the perfect field $k$, and are regular Noetherian schemes. Here regular means locally Noetherian with regular local rings at all points; these are intrinsic properties, so they still hold when the schemes are viewed over the prime subfield of $k$. No finite-type assertion over that prime subfield is made.

The opens $U,W$ cover $X$ and have intersection $V$. The square with top arrow $V\hookrightarrow W$, bottom arrow $U\hookrightarrow X$, and the inclusion arrows vertically is a distinguished Nisnevich square; its associated family $\{U\hookrightarrow X,W\hookrightarrow X\}$ is a Nisnevich cover.

The relative-dimension function $d:U\to\mathbb Z_{\geq0}$ for $U\to\operatorname{Spec}k$ is locally constant, and only finitely many strata $U_n=\{u\in U:d(u)=n\}$ are nonempty; every $U_n$ is open and closed. If $T$ with the specified structure is an integral curve, meaning a nonempty reduced irreducible scheme of dimension one, then it is affine and is contained in exactly one nonempty stratum $U_n$.

## Facts & Assumptions
**Given:** The geometric data and Axiom of Choice of the Statement, with fixed universe bounds.

**Goal:** Establish the actual open schemes, their distinguished square and the curve-stratum assertion.

[A1] The Axiom of Choice is assumed through [[math:def-axiom-of-choice]]. It discharges the hypotheses of the Noetherian-spectrum and compact-subspace suppliers in [F2], smooth-locus openness in [F3], relative dimension in [F7], and the affine closed-immersion supplier in [F6], at their uses in steps 1.1 and 2.1. No separate choice of charts at all points is made.

[F1] [[def-article-conventions]] fixes the algebraically closed field, affine finite-type convention, dimension, and category $\mathrm{Sch}_k$ of qcqs $k$-schemes. The finite-type morphism and local finite-presentation conventions are [[math:def-locally-finite-type-and-finite-type-morphism]] and [[math:def-locally-finite-presentation-morphism]].

[F2] A ring is Noetherian when all its ideals are finitely generated, and a scheme is Noetherian when it is locally Noetherian and quasi-compact. [[math:def-noetherian-ring-and-module]] [[math:def-locally-noetherian-and-noetherian-scheme]] Finite-type algebras over a Noetherian ring are Noetherian and finitely presented. [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] [[math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]] A Noetherian ring has Noetherian spectrum; under AC every subspace of a Noetherian space is Noetherian and quasi-compact. [[math:thm-noetherian-ring-has-noetherian-spectrum]] [[math:lem-noetherian-subspaces-and-compact-opens]] The underlying Zariski space of $\operatorname{Spec}A$ has the basic opens $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, by [[math:def-affine-scheme-spectrum]]. Principal opens are $D(f)=\operatorname{Spec}A_f$, with the restricted structure sheaf, and localizations of Noetherian rings are Noetherian. [[math:lem-spectrum-localization-open-immersion]] [[math:thm-noetherian-ring-quotients-and-localisations]]

[F3] The smooth locus is defined for a locally finitely presented morphism; under AC it is open and its restricted morphism is smooth. [[math:def-smooth-locus-morphism]] [[math:thm-smooth-locus-open]] Smoothness here means locally of finite presentation, flatness, and geometrically regular fibres at each point; it is preserved on source opens. [[math:def-smooth-morphism-schemes]] A point of a locally Noetherian scheme is regular precisely when its local ring is regular local. [[math:def-regular-local-ring-geometric-point]]

[F4] The characteristic of a field is zero or a prime; a field is perfect exactly when it has characteristic zero or its positive-characteristic Frobenius is surjective. [[math:thm-characteristic-of-a-field-is-zero-or-prime]] [[math:thm-perfect-field-characterizations]] The prime subfield is the unique smallest subfield, the intersection of all subfields. [[math:def-prime-subfield]]

[F5] Separatedness means that the diagonal is a closed immersion. [[math:def-separated-morphism-schemes]] A morphism between affine schemes is separated; closed immersions remain closed immersions after base change. [[math:cor-affine-schemes-separated]] [[math:lem-base-change-open-closed-immersions]]

[F6] [[def-nisnevich-covering-interface]] gives the Nisnevich family and distinguished-square conditions, as well as the reduced induced closed subscheme of a closed subset. Open immersions are étale, including the empty one. [[math:ex-localization-etale-open-immersion]] Pullback along an open immersion is the inverse-image open subscheme. [[math:lem-fibre-product-open-restriction]] A closed immersion into $\operatorname{Spec}A$ has source $\operatorname{Spec}(A/I)$ under the supplier's AC convention. [[math:thm-affine-closed-immersions-quotient-rings]] An integral scheme is nonempty, reduced and irreducible. [[math:def-integral-scheme]]

[F7] Relative dimension of a smooth morphism is the local dimension of its geometric fibres, with the field-extension convention in [[math:def-relative-dimension-smooth-morphism]]. Under AC this function is locally constant, the explicit smooth-locus conclusion of [[math:thm-differentials-smooth-locally-free]].

## Proof
1.1 Write $X=\operatorname{Spec}A$. Every ideal of the field $k$ is either zero or $k$, so $k$ is Noetherian. By [F2], $A$ is Noetherian and finitely presented over $k$. Thus $X\to\operatorname{Spec}k$ is locally of finite presentation, and [F3] makes $U$ an open smooth $k$-scheme; its open $V$ is smooth as well. The space $|X|$ is Noetherian by [F2]. Every open $O\subseteq X$ is consequently quasi-compact, and the intersection of any two affine opens of $O$ is an open subset of $X$, hence quasi-compact. Thus $X,U,V,W$ are qcqs. For any point $\mathfrak p\in O$, the basis property in [F2] gives $f\in A$ with $\mathfrak p\in D(f)\subseteq O$. Thus the principal opens $D(f)=\operatorname{Spec}A_f$ inside $O$ cover it. Each $A_f$ is Noetherian and is of finite type over $k$: a finite algebra generating list for $A$, together with $1/f$, generates every fraction $a/f^m$. These charts and quasi-compactness show that $O$ is Noetherian and finite type over $k$, including when $O$ is empty. The diagonal of $O\to\operatorname{Spec}k$ is the base change of the closed diagonal of $X\to\operatorname{Spec}k$ to $O\times_k O$: the inverse image of that diagonal is exactly $O$. Thus every such $O$, in particular $U,V$, is separated by [F5] and the open-product identification in [F6]. At a point of $U$ or $V$, the geometric-regularity clause of [F3], applied to the fibre over $\operatorname{Spec}k$ and the extension $K=k$, says its local ring is regular local. Together with the proved Noetherianness this gives regular Noetherian schemes. Their spaces and local rings do not change on forgetting part of the base-field structure, so these intrinsic properties persist over the prime subfield. Finally, in characteristic $p>0$, algebraic closedness gives a root of $t^p-a$ for every $a\in k$; hence Frobenius is surjective. In characteristic zero no Frobenius test is needed. By [F4], $k$ is perfect. [given, A1, F1, F2, F3, F4, F5, F6]

2.1 Since $T\subseteq U$, we have $X=U\cup W$ and $U\cap W=V$. The open pullback rule [F6] identifies $U\times_X W$ with $V$, so the stated square is cartesian. Put $Z=(X\setminus U)_{\mathrm{red}}$. Its map to $X$ has image in $W$; the same rule identifies $W\times_X Z$ with the whole open subscheme $Z$, so its projection to $Z$ is an isomorphism. Both $U\hookrightarrow X$ and $W\hookrightarrow X$ are open immersions and hence étale, with unchanged local rings at their points. The square is therefore distinguished by [F6], and every point of $X$ has a residue-preserving lift to one of its two opens, proving the Nisnevich covering condition. By [F7], $d$ is locally constant. Each inverse image $U_n$ is open, and its complement is the union of the other such opens, so it is also closed. These strata cover the quasi-compact $U$, so a finite subfamily covers; disjointness makes all remaining strata empty. For an integral curve $T$, its specified reduced closed immersion into affine $X$ makes it $\operatorname{Spec}(A/I)$ by [F6]. If it met $U_n$ and another stratum, then $T\cap U_n$ and $T\setminus U_n$ would be nonempty clopen subsets partitioning $T$, contrary to irreducibility: each part would be a proper closed subset whose union is $T$. Thus the nonempty $T$ lies in exactly one nonempty $U_n$. [given, A1, F1, F6, F7, step 1.1] ∎
