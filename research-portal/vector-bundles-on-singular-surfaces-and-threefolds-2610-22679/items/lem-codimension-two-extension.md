---
id: lem-codimension-two-extension
kind: lemma
title: Functions extend across codimension two
status: published
domain: mathematics
deps:
  - lem-normal-scheme-component-reduction
  - math:lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-open-immersion-schemes
  - math:def-direct-image-sheaf
  - math:def-noetherian-ring-and-module
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-specialisation-and-generic-point
  - math:def-sheaf-on-topological-space
  - math:def-presheaf-of-groups-rings-modules
  - math:def-morphism-of-presheaves
  - math:def-restriction-sheaf-open-subspace
  - math:ex-direct-image-open-immersion
  - math:lem-direct-image-is-sheaf
  - math:def-affine-scheme-spectrum
  - math:lem-distinguished-open-refinement-at-a-point
  - math:thm-sections-basic-open-affine-scheme
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:cor-specialisation-order-is-prime-inclusion
  - math:lem-height-equals-local-dimension
  - math:def-stalk-of-presheaf
  - math:thm-sheaf-morphism-isomorphism-stalkwise
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-multiplicative-subset-and-localisation
  - math:prop-localisation-zero-equality-and-kernel-criteria
dependency_roles:
  lem-normal-scheme-component-reduction: mathematical-premise
  math:lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-direct-image-sheaf: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-specialisation-and-generic-point: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-presheaf-of-groups-rings-modules: mathematical-premise
  math:def-morphism-of-presheaves: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:ex-direct-image-open-immersion: mathematical-premise
  math:lem-direct-image-is-sheaf: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:lem-distinguished-open-refinement-at-a-point: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:cor-specialisation-order-is-prime-inclusion: mathematical-premise
  math:lem-height-equals-local-dimension: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:thm-sheaf-morphism-isomorphism-stalkwise: mathematical-premise
  math:def-field-of-fractions: mathematical-premise
  math:thm-field-of-fractions-is-a-field-and-the-domain-embeds: mathematical-premise
  math:def-multiplicative-subset-and-localisation: mathematical-premise
  math:prop-localisation-zero-equality-and-kernel-criteria: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction is an isomorphism of sheaves of rings $\mathcal O_X\cong j_*\mathcal O_U$. Consequently restriction gives isomorphisms on global functions and on groups of global units.

Here a noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from that component's generic point to the given point. A global unit is a global function admitting a multiplicative inverse.

## Statement references

[[lem-normal-scheme-component-reduction]]

[[math:def-axiom-of-choice]]

[[math:def-scheme]]

[[math:def-open-immersion-schemes]]

[[math:def-direct-image-sheaf]]

[[math:def-noetherian-ring-and-module]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-specialisation-and-generic-point]]

[[math:def-sheaf-on-topological-space]]

[[math:def-presheaf-of-groups-rings-modules]]

[[math:def-morphism-of-presheaves]]

## Facts & Assumptions

[F1] Under the Axiom of Choice, every affine open of a noetherian normal scheme is the spectrum of a finite product of noetherian integrally closed domains; the corresponding factor spectra are open and closed integral subschemes ([[lem-normal-scheme-component-reduction]]).

[F2] Under the Axiom of Choice, a noetherian integrally closed domain $A$ with fraction field $K$ equals the intersection of its height-one localizations inside $K$ ([[math:lem-normal-noetherian-domain-intersection-of-height-one-localizations]]). If there are no height-one primes, the intersection is understood to be $K$.

[F3] An open immersion identifies its source with an open subscheme ([[math:def-open-immersion-schemes]]), with the restricted structure sheaf ([[math:def-restriction-sheaf-open-subspace]]). Direct image is computed on inverse-image opens, with the inherited restriction maps ([[math:def-direct-image-sheaf]]); hence for the open inclusion $j$ one has $(j_*\mathcal O_U)(V)=\mathcal O_U(U\cap V)$ ([[math:ex-direct-image-open-immersion]]). Direct image preserves sheaves of rings ([[math:lem-direct-image-is-sheaf]]).

[F4] Sheaves have locality and unique gluing ([[math:def-sheaf-on-topological-space]]). For sheaves of rings, section rings and restriction homomorphisms carry the algebraic structure ([[math:def-presheaf-of-groups-rings-modules]]). A sheaf morphism is a family of section maps commuting with restrictions ([[math:def-morphism-of-presheaves]]).

[F5] In an affine spectrum, points are primes and the distinguished opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ ([[math:def-affine-scheme-spectrum]]). Every point of an open set has such a neighborhood inside it ([[math:lem-distinguished-open-refinement-at-a-point]]). On $\operatorname{Spec} A$, sections on $D(f)$ are $A_f$, with the canonical localization restriction maps ([[math:thm-sections-basic-open-affine-scheme]]), and the stalk at $\mathfrak p$ is $A_{\mathfrak p}$ ([[math:thm-stalk-structure-sheaf-prime-localization]]).

[F6] A point $y$ is a specialization of $x$ if $y\in\overline{\{x\}}$, and a generic point has the whole space as its closure ([[math:def-specialisation-and-generic-point]]). Under the Axiom of Choice, specialization of primes is exactly inclusion of ideals ([[math:cor-specialisation-order-is-prime-inclusion]]). The height of a prime is the supremum of lengths of strict prime chains ending at it ([[math:lem-height-equals-local-dimension]]).

[F7] A stalk consists of germs represented by sections on neighborhoods; two representatives agree as germs precisely when they agree on a smaller neighborhood ([[math:def-stalk-of-presheaf]]). A morphism of sheaves of sets is an isomorphism exactly when all its stalk maps are bijective ([[math:thm-sheaf-morphism-isomorphism-stalkwise]]).

[F8] The fraction field $K=\operatorname{Frac}(A)$ of a domain is the localization by all nonzero elements ([[math:def-field-of-fractions]]); it is a field and $A\to K$ is injective ([[math:thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[F9] For a commutative ring $A$, a multiplicative subset $S$ contains $1$ and is closed under products. The localization $S^{-1}A$ consists of fractions $a/t$, with $t\in S$, with the usual fraction addition and multiplication ([[math:def-multiplicative-subset-and-localisation]]). Two fractions satisfy $a/t=b/u$ exactly when $v(au-bt)=0$ for some $v\in S$ ([[math:prop-localisation-zero-equality-and-kernel-criteria]]). Here $A_f$ means localization at $S=\{1,f,f^2,\ldots\}$, and $A_{\mathfrak p}$ means localization at $S=A\setminus\mathfrak p$.

[A1] The Axiom of Choice is assumed for the component reduction [F1], the intersection result [F2], the affine structure-sheaf construction underlying [F5], and the specialization result in [F6] ([[math:def-axiom-of-choice]]).

## Proof

**Given:** A noetherian normal scheme $X$, an open immersion $j:U\hookrightarrow X$ containing all points of component codimension at most one, and the Axiom of Choice.

**Goal:** Show that $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism and obtain the asserted global isomorphisms.

1.1 Identify $U$ with its image. By [F3], $\mathcal O_U=\mathcal O_X|_U$ and $j_*\mathcal O_U$ is a sheaf of rings whose sections on $V$ are $\mathcal O_U(U\cap V)$. The restriction maps $r_V:\mathcal O_X(V)\to\mathcal O_U(U\cap V)$ commute with further restrictions, so [F4] makes them a morphism of sheaves of rings $r:\mathcal O_X\to j_*\mathcal O_U$. It suffices to prove that $r_V$ is bijective on a basis: by the germ description in [F7], every target germ then has a preimage on a basis neighborhood, and two source germs with equal images agree after shrinking to a basis neighborhood; [F7] consequently makes $r$ an isomorphism of sheaves of sets. Its inverse also preserves ring operations, since each $r_V$ is a ring homomorphism. By [F1], affine neighborhoods split into finite disjoint unions of integral affine factor spectra; these factors form a basis, with their restricted structure sheaves. Thus we may take $V=\operatorname{Spec} A$ for a noetherian integrally closed domain $A$. By [F6], its generic point is $(0)$, and prime chains from $(0)$ compute the component codimension: every prime chain can be extended down to $(0)$, while specialization is prime inclusion. Passing to an open neighborhood of a point preserves those chains, because every open containing a specialization also contains its generalizations. The generic point of $V$ is the generic point of its irreducible component of $X$, since $V$ is a nonempty open in that integral component. Thus the generic point and all height-one points of $V$ belong to $U$. It remains to prove bijectivity on these integral affine neighborhoods. [F1, F3, F4, F6, F7, A1, given]

2.1 Put $W=U\cap V$ and $K=\operatorname{Frac}(A)$. For any multiplicative subset $S\subseteq A\setminus\{0\}$, send a fraction $a/t\in S^{-1}A$ to the same fraction in $K$. By [F9] and the absence of zero divisors, equality $a/t=b/u$ in either localization is equivalent to $au=bt$, since the permitted multiplier is nonzero; conversely one may use the multiplier $1$. Hence this assignment is well-defined and injective, and the fraction arithmetic in [F9] makes it a ring homomorphism. This applies to $S=A\setminus\mathfrak p$ and to the powers of any nonzero $f$. By step 1.1, $W$ contains the generic point and is dense in $V$. By [F5] and [F8], a section $s$ on $W$ determines $z\in K$ by its generic germ. For each height-one prime $\mathfrak p$, its point lies in $W$; the germ of $s$ there lies in $A_{\mathfrak p}$ and has generic image $z$, since the restriction maps in [F5] are the canonical localization maps. Thus $z\in A_{\mathfrak p}$ inside $K$ for every such prime, and [F2] gives $z\in A$. The section defined by $z$ agrees with $s$ on every nonempty distinguished open $D(f)\subseteq W$: both sections lie in $A_f$ by [F5] and have the same image in $K$. Here $f\ne0$, since a nonempty $D(f)$ contains a prime not containing $f$; thus $A_f\to K$ is one of the injective localization maps just constructed using [F9]. The distinguished opens cover $W$ by [F5], so locality in [F4] gives equality on $W$. Hence $r_V:A\to\mathcal O_U(W)$ is surjective. It is injective because $W$ contains the generic point and $A\to K$ is injective by [F8]. The empty height-one intersection is $K$ as in [F2], so the field case is included. Together with step 1.1 this proves that $r$ is an isomorphism of sheaves of rings. Taking sections over $X$ and using [F3] gives $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$. A ring isomorphism carries precisely the invertible elements to invertible elements, with inverses preserved, so it also gives the claimed isomorphism of global unit groups. [F2, F3, F4, F5, F8, F9, A1, step 1.1] ∎
