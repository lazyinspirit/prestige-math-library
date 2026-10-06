---
id: lem-product-of-projective-lines-is-a-smooth-projective-surface
kind: lemma
title: "The product of two projective lines is an integral smooth projective surface"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - cor-base-change-finite-type-and-products
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction
  - def-axiom-of-choice
  - def-dimension-noetherian-topological-space
  - def-flat-morphism-schemes
  - def-integral-scheme
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-krull-dimension-of-a-ring
  - def-locally-finite-presentation-morphism
  - def-multivariate-polynomial-ring-by-iteration
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-projective-morphism-pre-proj
  - def-proper-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-reduction-of-scheme
  - def-relative-projective-space-standard-charts
  - def-smooth-morphism-to-field-classical
  - lem-ag-standard-smooth-flatness
  - lem-base-change-locally-finite-type-presentation
  - lem-chain-dimension-open-cover
  - lem-fibre-products-glue-over-open-covers
  - lem-flat-morphisms-stable-base-change
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-projective-line-curve-and-divisor-basics
  - lem-projective-space-finite-type-over-base
  - lem-proper-stable-base-change
  - lem-smoothness-stable-under-product-classical
  - thm-affine-fibre-product-tensor-ring
  - thm-irreducible-closed-subsets-and-prime-ideals
  - thm-projective-morphism-proper
  - thm-projective-space-proper-over-base
  - thm-segre-line-bundle-external-tensor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
let $X=\mathbb P^1_k\times_{\operatorname{Spec}k}\mathbb P^1_k$ with
projections $\mathrm{pr}_1,\mathrm{pr}_2$
([[def-relative-projective-space-standard-charts]]). Then $X$ is an integral
([[def-integral-scheme]]) smooth ([[def-smooth-morphism-to-field-classical]])
projective ([[def-projective-morphism-pre-proj]]) $k$-scheme of pure dimension
two ([[def-dimension-noetherian-topological-space]]); in particular $X$ is a
smooth projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]). The
projections are flat ([[def-flat-morphism-schemes]]), proper
([[def-proper-morphism]]), and of finite presentation
([[def-locally-finite-presentation-morphism]]), and the structure morphism
$X\to\operatorname{Spec}k$ is proper.

## Facts & Assumptions

**Given:** a field $k$ and the product $X=\mathbb P^1_k\times_{\operatorname{Spec}k}\mathbb P^1_k$ with its projections.

[F1] Chart data: the projective line has the two standard charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$, glued along $D(t)=D(u)$ by $t=u^{-1}$ ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[def-relative-projective-space-standard-charts]]). In particular $\mathbb P^1_k$ is covered by two affine schemes and the structure morphism $\mathbb P^1_k\to\operatorname{Spec}k$ is quasi-compact.

[F2] Products of affine schemes and polynomial rings: $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$ for ring maps $A\to B$, $A\to C$ ([[thm-affine-fibre-product-tensor-ring]]); $k[t]\otimes_kk[u]\cong k[t,u]$ as iterated polynomial rings ([[def-multivariate-polynomial-ring-by-iteration]], [[cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction]]); $k[t,u]$ is a domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]), Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]) and of Krull dimension two ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[def-krull-dimension-of-a-ring]]).

[F3] Gluing fibre products: products of the open pieces glue to the fibre product, with no separatedness hypothesis ([[lem-fibre-products-glue-over-open-covers]]).

[F4] Irreducibility: a nonempty topological space is irreducible exactly when every two of its nonempty open subsets meet ([[lem-irreducibility-criteria-and-open-subspaces]]). For a domain $A$ the spectrum $\operatorname{Spec}A$ is irreducible with generic point the zero ideal, and irreducible closed subsets correspond to prime ideals ([[thm-irreducible-closed-subsets-and-prime-ideals]]); a scheme is integral when it is nonempty, reduced and irreducible ([[def-integral-scheme]]), and reducedness means the nilpotent ideal sheaf vanishes, equivalently all local rings are reduced ([[def-reduction-of-scheme]]).

[F5] Dimension: for a Noetherian space covered by finitely many open subspaces, the chain dimension is the supremum of the dimensions of the pieces ([[lem-chain-dimension-open-cover]], [[def-dimension-noetherian-topological-space]]).

[F6] Smoothness: $\mathbb P^1_k$ is a smooth curve over $k$ ([[lem-projective-line-curve-and-divisor-basics]]), $\mathbb P^1_k\to\operatorname{Spec}k$ is of finite type ([[lem-projective-space-finite-type-over-base]]), and for any field $k$ and finite-type $k$-schemes $X,Y$ smooth over $k$, the product $X\times_kY$ is smooth over $k$ in the local-standard-smooth convention; a product of finite-type $k$-schemes is of finite type over $k$ ([[lem-smoothness-stable-under-product-classical]], [[cor-base-change-finite-type-and-products]], [[def-smooth-morphism-to-field-classical]]).

[F7] Projectivity: for $m=n=1$ and $S=\operatorname{Spec}k$ the Segre construction gives a closed immersion $\sigma:X\hookrightarrow\mathbb P^3_k$ with $\sigma^*\mathcal O(1)\cong\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$ ([[thm-segre-line-bundle-external-tensor]]); composing with the projection exhibits the structure morphism $X\to\operatorname{Spec}k$ as projective in the H-projective convention, hence proper ([[def-projective-morphism-pre-proj]], [[thm-projective-morphism-proper]]).

[F8] Projections of the product: $\mathbb P^1_k\to\operatorname{Spec}k$ is flat, because its two standard charts are standard smooth $k$-algebras and standard smooth algebras are flat ([[lem-ag-standard-smooth-flatness]], [[def-flat-morphism-schemes]]); it is proper ([[thm-projective-space-proper-over-base]]) and locally of finite presentation, its charts being finitely presented $k$-algebras ([[lem-ag-standard-smooth-flatness]], [[def-locally-finite-presentation-morphism]]). Each projection $\mathrm{pr}_i$ is the base change of this morphism along the structure morphism of the other factor, hence flat ([[lem-flat-morphisms-stable-base-change]]), proper ([[lem-proper-stable-base-change]]) and locally of finite presentation ([[lem-base-change-locally-finite-type-presentation]]); it is quasi-compact because the preimage of each standard chart is the union of the two affine charts lying over it ([[def-quasi-compact-and-quasi-separated-morphism]]). Hence each projection is of finite presentation.

[F9] The Axiom of Choice is inherited from the scheme, product and Segre suppliers above; only the two-element chart cover and the four chart products are used below.



## Proof
**Proof technique:** direct: compute on the four standard product charts, use their common generic point for irreducibility, then product-stability and the Segre embedding for smoothness, projectivity and properness.

1.1 Charts and their coordinate rings. By [F1] the standard charts $U_0,U_1$ cover $\mathbb P^1_k$ and meet in $\operatorname{Spec}k[t,t^{-1}]=\operatorname{Spec}k[u,u^{-1}]$ with $t=u^{-1}$. For $i,j\in\{0,1\}$ put $C_{ij}:=U_i\times_kU_j$; by [F3] these four products exist and form an open cover of $X=\mathbb P^1_k\times_k\mathbb P^1_k$. Each $C_{ij}$ is affine: by [F2] it is $\operatorname{Spec}(k[t]\otimes_kk[u])\cong\operatorname{Spec}k[t,u]$, the isomorphism with the iterated polynomial ring being the one fixed in [F2], and $C_{ij}\cap C_{kl}$ corresponds to a localization of $k[t,u]$. [F1, F2, F3]

2.1 Irreducibility and nonemptiness. Each chart $C_{ij}$ is the spectrum of the domain $k[t,u]$ [F2], hence irreducible with generic point the zero ideal, and nonempty. On each nonempty overlap $C_{ij}\cap C_{kl}$, which is a localization of the domain $k[t,u]$ and therefore again a domain, the generic points of the two charts restrict to the generic point of the overlap: passing to the localization of the zero ideal gives the zero ideal, and the gluing identifies the overlap with a localization compatibly with the chart isomorphisms. Consequently the four chart generic points are compatible and define a single point $\xi\in X$ lying in every chart. Every nonempty open subset $U\subseteq X$ meets some chart $C_{ij}$ in a nonempty open subset, which is a nonempty open subset of the irreducible chart $C_{ij}$ and hence contains its generic point $\xi$. Therefore any two nonempty open subsets of $X$ meet, and $X\neq\varnothing$; by [F4] the space $X$ is irreducible. [F1, F2, F4, step 1.1]

3.1 Reducedness. Every local ring $\mathcal O_{X,x}$ is a local ring of one of the charts $C_{ij}$, which are spectra of the domain $k[t,u]$; localizations of a domain are domains, hence reduced. So the nilpotent ideal sheaf of $X$ vanishes and $X$ is reduced [F4]. Together with step 2.1 this makes $X$ an integral scheme [F4], and by [F2] the charts are Noetherian, so $X$ is a Noetherian space. [F2, F4, step 1.1, step 2.1]

4.1 Dimension. Each chart $C_{ij}$ is $\operatorname{Spec}k[t,u]$, whose chain dimension is the Krull dimension of $k[t,u]$, namely two [F2], and whose coordinate ring is Noetherian [F2]; the finite cover by the four charts exhibits $X$ as a Noetherian space, so [F5] gives $\dim X=\sup_{ij}\dim C_{ij}=2$. Since $X$ is irreducible by step 2.1, it has pure dimension two. [F2, F5, step 1.1, step 2.1, step 3.1]

5.1 Smoothness. By [F6] the projective line is smooth over $k$ and of finite type, so $X$ is of finite type over $k$ [F6] and smooth over $k$ by the second clause of the product-stability theorem [F6]; in particular every local ring of $X$ is regular [F6]. In particular $X$ is a smooth projective surface once projectivity is established. [F6, step 1.1, step 4.1]

6.1 Projectivity, properness and the projections. By [F7] with $m=n=1$, $S=\operatorname{Spec}k$ there is a closed immersion $\sigma:X\hookrightarrow\mathbb P^3_k$ with $\sigma^*\mathcal O(1)\cong\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$; composing $\sigma$ with the projection $\mathbb P^3_k\to\operatorname{Spec}k$, which is projective by the identity closed immersion, exhibits $X\to\operatorname{Spec}k$ as H-projective, hence proper [F7]. For the projections: $\mathrm{pr}_i$ is the base change of the flat, proper, locally finitely presented morphism $\mathbb P^1_k\to\operatorname{Spec}k$ along the structure morphism of the other factor [F8], so it is flat, proper and locally of finite presentation, and it is quasi-compact because the preimage of each standard chart is a union of two of the four affine charts [F8], [F1]; hence each projection is of finite presentation. [F1, F7, F8, step 5.1]

7.1 Conclusion and choice accounting. Steps 1.1–3.1 exhibit $X$ as an integral $k$-scheme of pure dimension two with Noetherian affine charts, step 5.1 shows it is smooth over $k$, and step 6.1 shows the structure morphism is projective hence proper and that the projections are flat, proper and of finite presentation. The Axiom of Choice is inherited from the suppliers recorded in [F9]; the chart cover has two members and the chart products four, so no infinite selection is made. [F9, step 4.1, step 5.1, step 6.1] ∎ 