---
id: thm-affine-morphism-relative-spec-characterization
kind: theorem
title: Affine morphisms are relative spectra
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-affine-morphism-schemes
  - def-affine-local-quasi-coherent-algebra
  - def-direct-image-sheaf
  - def-morphism-of-schemes
  - def-morphism-ringed-spaces
  - def-scheme-over-base
  - lem-affine-morphism-structure-sheaf-pushforward-localizes
  - lem-relative-spec-glues-affine-algebras
  - thm-affine-scheme-ring-anti-equivalence
  - thm-gluing-affine-schemes
  - thm-gluing-sheaves
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, Lemma 29.11.3"
      url: https://stacks.math.columbia.edu/tag/01S8
---

## Statement

Let $f:X\to S$ be a morphism of schemes. Then $f$ is affine if and only if
there is an affine-locally module-associated sheaf $\mathcal A$ of commutative
unital $\mathcal O_S$-algebras and an isomorphism of $S$-schemes
$$X\cong \operatorname{Spec}_S\mathcal A.$$
If $f$ is affine, one may take $\mathcal A=f_*\mathcal O_X$. Conversely, for
any such $\mathcal A$ and $S$-isomorphism, $f$ is affine and the induced
isomorphism of $\mathcal O_S$-algebras is $f_*\mathcal O_X\cong\mathcal A$.
No choice axiom is assumed.

## Facts & Assumptions

**Given:** A scheme morphism $f:X\to S$.

[F1] A scheme morphism is affine exactly when the inverse image of every affine open of its target is affine; the empty scheme is affine ([[def-affine-morphism-schemes]]).

[F2] A sheaf of commutative unital $\mathcal O_S$-algebras is affine-locally module-associated when its restriction to every affine $U=\operatorname{Spec}R$ is the module-associated sheaf of an $R$-algebra, with principal-open restrictions given by localization ([[def-affine-local-quasi-coherent-algebra]]).

[F3] The scheme morphism supplies the structure map of sheaves of rings $f^\sharp:\mathcal O_S\to f_*\mathcal O_X$, so $f_*\mathcal O_X$ is an $\mathcal O_S$-algebra ([[def-morphism-ringed-spaces]]).

[F4] For an open $V\subseteq S$, $(f_*\mathcal O_X)(V)=\mathcal O_X(f^{-1}(V))$, with restrictions induced by those of $\mathcal O_X$ ([[def-direct-image-sheaf]]).

[F5] If $f$ is affine, then on every affine $U=\operatorname{Spec}R$ the restriction $(f_*\mathcal O_X)|_U$ is the module-associated sheaf of the coordinate algebra of $f^{-1}(U)$, and principal-open sections and restriction maps are the corresponding localizations ([[lem-affine-morphism-structure-sheaf-pushforward-localizes]]).

[F6] An affine-locally module-associated algebra sheaf $\mathcal A$ has a relative spectrum $\pi:Y=\operatorname{Spec}_S\mathcal A\to S$ with $\pi^{-1}(U)\cong\operatorname{Spec}\Gamma(U,\mathcal A)$ for affine $U$; principal-open inverse images and their restriction maps are given by localization ([[lem-relative-spec-glues-affine-algebras]]).

[F7] Global sections are quasi-inverse to the contravariant affine scheme--ring correspondence, which is natural for affine scheme morphisms ([[thm-affine-scheme-ring-anti-equivalence]]).

[F8] Compatible isomorphisms between affine charts glue uniquely to an isomorphism of schemes respecting the chart maps ([[thm-gluing-affine-schemes]]).

[F9] Compatible local sheaf isomorphisms on an open cover glue uniquely to a sheaf isomorphism ([[thm-gluing-sheaves]]).

[F10] A morphism of schemes is a morphism of the underlying locally ringed spaces ([[def-morphism-of-schemes]]).

[F11] An $S$-morphism is a scheme morphism commuting with the structure maps to $S$ ([[def-scheme-over-base]]).

## Proof

**Proof technique:** canonical affine-chart identifications and gluing.

1.1 Suppose $f$ is affine and put $\mathcal A=f_*\mathcal O_X$, with its $\mathcal O_S$-algebra structure from [F3]. For each affine open $U=\operatorname{Spec}R\subseteq S$, the inverse image is affine by [F1]. The canonical identification in [F5] shows that $\mathcal A|_U$ is module-associated and that its principal-open restrictions are the required localizations. Thus $\mathcal A$ satisfies [F2]. This argument includes an empty inverse image, whose coordinate ring is $0$. [F1, F2, F3, F5]

1.2 Let $\pi:Y=\operatorname{Spec}_S\mathcal A\to S$ be the relative spectrum. For every affine $U\subseteq S$, [F6] gives $\pi^{-1}(U)=\operatorname{Spec}\Gamma(U,\mathcal A)$. By [F4], $$ \Gamma(U,\mathcal A)=\Gamma(U,f_*\mathcal O_X) =\Gamma(f^{-1}(U),\mathcal O_X). $$ Both $f^{-1}(U)$ and $\pi^{-1}(U)$ are affine, so [F7] gives a canonical isomorphism between them. Its maps to $U$ agree: the ring maps from $\Gamma(U,\mathcal O_S)$ are the algebra structure maps of $f_*\mathcal O_X$. [F3, F4, F6, F7, F11]

1.3 These chart isomorphisms are compatible under restriction. Indeed, for an affine open $W\subseteq U$, the restriction $\Gamma(f^{-1}(U),\mathcal O_X)\to\Gamma(f^{-1}(W),\mathcal O_X)$ is exactly the restriction of $f_*\mathcal O_X$ in [F4], while the relative-spectrum chart transition in [F6] is induced by the same restriction of $\mathcal A$. Naturality in [F7] therefore identifies the restriction of the chart isomorphism over $U$ with the one over $W$. Every overlap of two affine opens of $S$ is covered by affine opens $W$ contained in it, so these equalities give compatible chart isomorphisms on all overlaps. Applying [F8] yields an $S$-isomorphism $X\cong Y$. The construction uses the full set of affine opens and canonical global-sections rings; it makes no simultaneous choice of affine presentations. [F4, F6, F7, F8, F11]

1.4 Conversely, let $\mathcal A$ be any algebra sheaf as in [F2], let $Y=\operatorname{Spec}_S\mathcal A$, and suppose $e:X\cong Y$ is an $S$-isomorphism. For every affine open $U\subseteq S$, [F6] makes $\pi^{-1}(U)$ affine, so $f^{-1}(U)$ is affine under $e$. By [F1], $f$ is affine. [F1, F6, F11]

1.5 On an affine $U=\operatorname{Spec}R$, the isomorphism $\mathcal A|_U\cong\widetilde{B_U}$ and [F6] identify $\pi^{-1}(D(r))$ with $\operatorname{Spec}(B_U[\varphi_U(r)^{-1}])$ for every principal open $D(r)\subseteq U$. Global sections of this affine spectrum recover $B_U[\varphi_U(r)^{-1}]$ by [F7]. By [F4] applied to $\pi$, these identifications are exactly the sections of $(\pi_*\mathcal O_Y)|_U$ on the principal-open basis, with the same restriction maps as $\mathcal A|_U$. They give a canonical $\mathcal O_U$-algebra isomorphism $(\pi_*\mathcal O_Y)|_U\cong\mathcal A|_U$. The identifications agree on overlaps because they are induced by the same restrictions in [F6]; [F9] glues them to $\pi_*\mathcal O_Y\cong\mathcal A$ on $S$. Finally, $e$ and [F4] identify $f_*\mathcal O_X$ with $\pi_*\mathcal O_Y$, compatibly with the $\mathcal O_S$-algebra structures. Hence $f_*\mathcal O_X\cong\mathcal A$. [F4, F6, F7, F9, F10, F11]

The zero ring is allowed throughout: when $f^{-1}(U)=\varnothing$, its ring of sections is $0$ and its spectrum is empty. If $S=\varnothing$, then $X=\varnothing$ and the same construction gives the unique empty relative spectrum. For the identity morphism, $\mathcal A=\mathcal O_S$ and the local charts in [F6] are $U=\operatorname{Spec}\Gamma(U,\mathcal O_S)$, so the identification is the identity. No AC is used. ∎
