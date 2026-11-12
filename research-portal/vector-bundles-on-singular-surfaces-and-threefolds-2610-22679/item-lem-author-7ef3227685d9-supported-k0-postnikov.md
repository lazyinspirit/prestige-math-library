---
title: Postnikov inverse and the specified nonconnective degree-zero group
status: published
research_item: lem-author-7ef3227685d9-supported-k0-postnikov
dependency_level: 14
---

PDF p. 15: Supported degree-zero dévissage

## Prerequisites

- [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart)
- [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-canonical-t-structure-on-a-derived-category](https://alphabetamath.cc/item/def-canonical-t-structure-on-a-derived-category)
- [math:def-truncation-functors-and-cohomology-of-a-t-structure](https://alphabetamath.cc/item/def-truncation-functors-and-cohomology-of-a-t-structure)
- [math:lem-truncation-triangles-are-essentially-unique-and-functorial](https://alphabetamath.cc/item/lem-truncation-triangles-are-essentially-unique-and-functorial)
- [math:lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude](https://alphabetamath.cc/item/lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude)
- [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology)
- [math:prop-zero-and-split-triangles-are-distinguished](https://alphabetamath.cc/item/prop-zero-and-split-triangles-are-distinguished)
- [math:def-triangulated-grothendieck-group](https://alphabetamath.cc/item/def-triangulated-grothendieck-group)
- [math:def-grothendieck-group-of-an-essentially-small-abelian-category](https://alphabetamath.cc/item/def-grothendieck-group-of-an-essentially-small-abelian-category)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)


## Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied supported perfect and nonconnective constructions. For regular Noetherian finite-dimensional $U$ and closed $T$, the coherent Euler map induces a canonical isomorphism
$$\pi_0K_{|T|}(U)\xrightarrow{\sim}G_0(\mathcal A_T).$$
Its inverse takes $[M]$ to the class of the actual perfect object $M[0]$. The same construction for $T=U$ gives $G_0(U)\simeq\pi_0K(U)$, with $G_0(U)$ the coherent-sheaf Grothendieck group. These comparisons commute with inclusion of supported categories.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the supported-heart and Euler constructions [F1] in step 1.1 and the essentially small nonconnective realization [F2] in step 2.1. The universes satisfy [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), contain $\omega$ and the scheme data, and allow the enlargements required by the supplied constructions. Their existence is a standing size assumption, separate from Choice. The finite truncation calculation introduces no additional choice.

**Given:** The regular Noetherian finite-dimensional scheme $U$, the closed subscheme $T$, AC and these fixed suitable universes; use the supported perfect category and the nonconnective functor of [F1]–[F2].

**Goal:** Establish the inverse by finite truncation triangles, then pass to the specified nonconnective degree-zero group.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart) supplies $\mathcal C_T=\operatorname{Perf}_{|T|}(U)$ with its inherited bounded cohomological t-structure and abelian heart $\mathcal A_T$, the coherent $\mathcal O_U$-modules whose stalks vanish outside $|T|$. It embeds $M\in\mathcal A_T$ as the actual perfect object $M[0]$ and turns heart short exact sequences into cofiber sequences. [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler) supplies the homomorphism $\chi_T:K_0^\triangle(h\mathcal C_T)\to G_0(\mathcal A_T)$, its value $\chi_T([M[0]])=[M]$, the essential smallness of both hearts, and the supported/global Euler compatibility. Its construction also checks that Noetherian $U$ is qcqs, as required in [F2].

[F2] [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies the object/cofiber Grothendieck group of every small idempotent-complete stable category with $\pi_0$ of the BGT nonconnective functor, by object classes and naturally for exact functors. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies the cofiber and triangle groups and supplies the induced triangulated homotopy category. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes the essentially small idempotent-complete common-family realizations, their exact support inclusions, and this same nonconnective functor; its supported notation is $K_{|T|}(U)=\mathbb K(\mathcal C_T)$.

[F3] [math:def-canonical-t-structure-on-a-derived-category](https://alphabetamath.cc/item/def-canonical-t-structure-on-a-derived-category) fixes the t-structure axioms and heart. [math:def-truncation-functors-and-cohomology-of-a-t-structure](https://alphabetamath.cc/item/def-truncation-functors-and-cohomology-of-a-t-structure) fixes the truncation triangles, the convention $H_t^n(E)=(\tau_{\le n}\tau_{\ge n}E)[n]$, and boundedness. Applied to $h\mathcal C_T$ with the t-structure supplied in [F1], [math:lem-truncation-triangles-are-essentially-unique-and-functorial](https://alphabetamath.cc/item/lem-truncation-triangles-are-essentially-unique-and-functorial) gives the canonical truncation maps, the aisle criteria in (iii), and the iteration isomorphisms in (iv). [math:lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude](https://alphabetamath.cc/item/lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude) gives shift compatibility in (ii), amplitude detection for a bounded t-structure in (iv), and the concentration isomorphisms in (v).

[F4] [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology) supplies the retained/zero cohomology identities for the ordinary derived truncations. These are the ambient cohomological truncations restricted in [F1]. Thus $H_t^n(E)$ is the sheaf $H^n(E)$ in the heart: its defining double truncation has only the ordinary cohomology $H^n(E)$ in degree $n$, and shifting by $[n]$ puts that sheaf in degree zero. In particular $H^n(\tau_{\le n}E)=H^n(E)$. All the truncation objects belong to $\mathcal C_T$ by [F1].

[F5] [math:def-triangulated-grothendieck-group](https://alphabetamath.cc/item/def-triangulated-grothendieck-group) and [math:def-grothendieck-group-of-an-essentially-small-abelian-category](https://alphabetamath.cc/item/def-grothendieck-group-of-an-essentially-small-abelian-category) specify respectively the triangle and short-exact group presentations used here, on the essentially small categories supplied in [F1]–[F2]. [math:prop-zero-and-split-triangles-are-distinguished](https://alphabetamath.cc/item/prop-zero-and-split-triangles-are-distinguished) supplies the distinguished triangle $A\to0\to A[1]\to A[1]$ in $h\mathcal C_T$.

[F6] The geometric formulation uses [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), [math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) and [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme). Here $U$ is a scheme regular at every point, $T$ is a closed subscheme with underlying closed set $|T|$, and dimension is chain dimension, with the supplied empty-space convention. Regularity is absolute local-ring regularity, without a base-field smoothness assumption. These are exactly the geometric hypotheses and coherent objects of [F1].

## Proof
1.1 By the short-exact/cofiber assertion in [F1], the rule $[M]\mapsto[M[0]]$ respects every short exact relation of [F5] and defines $j_T:G_0(\mathcal A_T)\to K_0^\triangle(h\mathcal C_T)$. The value of $\chi_T$ in [F1] gives $\chi_Tj_T=1$ on the generating sheaf classes. For $E\in\mathcal C_T$, boundedness gives a finite cohomological range $[a,b]$; amplitude detection in [F3] puts $E$ in $\mathcal C_T^{\ge a}\cap\mathcal C_T^{\le b}$. The aisle criteria therefore give $\tau_{\le a-1}E\simeq0$ and $\tau_{\le b}E\simeq E$. For each $a\le n\le b$, apply the truncation triangle at $n-1$ to $Y=\tau_{\le n}E$. Iteration in [F3] identifies its first term with $\tau_{\le n-1}E$. Since $Y\in\mathcal C_T^{\le n}$, concentration in [F3] identifies its third term $\tau_{\ge n}Y$ with $H_t^n(Y)[-n]\simeq H^n(E)[-n]$, using [F4]. This produces the distinguished triangles $\tau_{\le n-1}E\to\tau_{\le n}E\to H^n(E)[-n]\to(\tau_{\le n-1}E)[1]$ in $h\mathcal C_T$. All their objects lie in $\mathcal C_T$ by [F1] and [F4]. The zero triangle of [F5], first for $A=0$, gives $[0]=0$, and then gives $[A[1]]=-[A]$; iteration in either direction gives $[A[m]]=(-1)^m[A]$ for every integer $m$. Summing the finitely many triangle relations from the two endpoints yields $[E]=\sum_{n=a}^b(-1)^n[H^n(E)[0]]=j_T\chi_T([E])$. Thus $j_T\chi_T=1$ on generators and $\chi_T$ and $j_T$ are inverse homomorphisms. [A1, F1, F3, F4, F5, F6, construct, algebra]

2.1 Apply [F2] to an equivalent small presentation of $\mathcal C_T$, which is stable and idempotent complete by that supplied realization. Its cofiber/triangle identification followed by the degree-zero comparison gives the object-class isomorphism $\alpha_T:K_0^\triangle(h\mathcal C_T)\xrightarrow{\sim}\pi_0K_{|T|}(U)$. Equivalent presentations preserve the objects and cofiber relations, and the naturality in [F2] makes the resulting map independent of their presentation. Compose $\chi_T\alpha_T^{-1}$; by step 1.1 this is exactly the displayed Euler isomorphism, with inverse $\alpha_Tj_T$ sending $[M]$ to the spectral class of the actual object $M[0]$. Taking $T=U$ gives the same comparison with $G_0(U)$ for the coherent heart $\mathcal A_U=\operatorname{Coh}(U)$. The exact support inclusion in [F2] induces the corresponding triangle and spectral homomorphisms, and forgetting support leaves each complex and cohomology sheaf unchanged. Naturality of $\alpha$ in [F2] and the supported/global compatibility of $\chi$ in [F1] therefore give the asserted commutative support/global square. Positive-degree comparison alone is not used. [A1, F1, F2, F5, step 1.1] ∎
