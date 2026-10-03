---
id: lem-euler-characteristic-finite-support-twist-invariance
kind: lemma
title: "Euler characteristic of a closed point, and invariance under an invertible twist"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-dimension-noetherian-topological-space
  - def-direct-image-sheaf
  - def-euler-characteristic-coherent-sheaf
  - def-extension-degree-and-finite-extension
  - def-field
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-pullback-module-ringed-spaces
  - def-residue-field-scheme-point
  - def-sheaf-tensor-product
  - def-stalk-of-presheaf
  - def-topological-space
  - lem-closed-immersion-cohomology-pushforward
  - lem-closed-immersion-projection-formula-invertible
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-structure-sheaf-affine-scheme
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-zero-sheaf-cohomology-global-sections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.33 (tag 0BEI)"
      url: "https://stacks.math.columbia.edu/tag/0BEI"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the Euler-characteristic supplier
([[def-axiom-of-choice]]). Let $k$ be a field ([[def-field]]), let $X$ be a
proper $k$-scheme, let $p\in X$ be a closed point with residue field
$\kappa(p)$ ([[def-residue-field-scheme-point]]) and let
$i:\operatorname{Spec}\kappa(p)\to X$ be the corresponding closed immersion
([[def-closed-immersion-schemes]]); write $\kappa(p)$ also for the structure
sheaf of $\operatorname{Spec}\kappa(p)$. Then $\kappa(p)$ is a coherent
$\mathcal O_X$-module via $i_*$ ([[def-direct-image-sheaf]],
[[def-coherent-module-scheme]]), and for every invertible $\mathcal O_X$-module
$\mathcal L$ ([[def-invertible-sheaf]]):

1. $H^q(X,i_*\kappa(p))=0$ for every $q\ge 1$ and
   $\chi(X,i_*\kappa(p))=[\kappa(p):k]$, a finite integer
   ([[def-euler-characteristic-coherent-sheaf]],
   [[def-extension-degree-and-finite-extension]]);
2. $i^*\mathcal L$ is isomorphic to $\mathcal O_{\operatorname{Spec}\kappa(p)}$
   and there is an isomorphism
   $\mathcal L\otimes_{\mathcal O_X}i_*\kappa(p)\cong i_*\kappa(p)$;
   consequently
   $\chi(X,\mathcal L\otimes i_*\kappa(p))=\chi(X,i_*\kappa(p))=[\kappa(p):k]$.

## Facts & Assumptions

**Given:** a field $k$, a proper $k$-scheme $X$, a closed point $p\in X$ with residue field $\kappa(p)$, the corresponding closed immersion $i:\operatorname{Spec}\kappa(p)\to X$, an invertible $\mathcal O_X$-module $\mathcal L$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Closed immersions: $i$ is a closed immersion precisely when its underlying map is a homeomorphism onto a closed subset and $\mathcal O_X\to i_*\mathcal O_Z$ is surjective ([[def-closed-immersion-schemes]]). The scheme $Z:=\operatorname{Spec}\kappa(p)$ has exactly one point $q$, so its only open subsets are $\varnothing$ and $Z$ ([[def-topological-space]]); the stalk of any sheaf $\mathcal F$ on $Z$ at $q$ is therefore $\varinjlim_{U\ni q}\mathcal F(U)=\mathcal F(Z)$, since $Z$ is the only neighbourhood of $q$ ([[def-stalk-of-presheaf]]). The structure sheaf satisfies $\mathcal O_Z(Z)=\kappa(p)$, so $\mathcal O_Z$ is the one-point sheaf with value $\kappa(p)$, written $\kappa(p)$ ([[thm-structure-sheaf-affine-scheme]], [[def-residue-field-scheme-point]]).

[F2] Properness of $X$ over $k$ gives finite type, so every affine chart of $X$ is a spectrum of a Noetherian ring and $X$ is locally Noetherian ([[def-locally-noetherian-and-noetherian-scheme]]); on a locally Noetherian scheme a quasi-coherent module is coherent if and only if it is of finite type, and $Z$, being the spectrum of a field, is locally Noetherian ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]). The structure sheaf $\mathcal O_Z=\kappa(p)$ is finite type and quasi-coherent, hence coherent on $Z$; consequently $i_*\kappa(p)$ is coherent on $X$ whenever $X$ is locally Noetherian ([[lem-closed-immersion-cohomology-pushforward]]).

[F3] Residue degrees: the closed point $p$ lies in an affine open $U=\operatorname{Spec}A\subseteq X$ with $A$ a finite-type $k$-algebra, and corresponds to a maximal ideal $\mathfrak m\subseteq A$ with $\kappa(p)\cong A/\mathfrak m$; by [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]] the residue field $\kappa(p)$ is a finite extension of $k$, so the degree $[\kappa(p):k]=\dim_k\kappa(p)$ of [[def-extension-degree-and-finite-extension]] is a finite integer.

[F4] Pushforward cohomology and vanishing: for the quasi-coherent $\mathcal O_Z$-module $\kappa(p)$ there are isomorphisms $H^q(Z,\kappa(p))\cong H^q(X,i_*\kappa(p))$ for every $q\ge0$ ([[lem-closed-immersion-cohomology-pushforward]]). The space $Z$ is a one-point Noetherian space of dimension $0$ ([[def-dimension-noetherian-topological-space]]), so $H^q(Z,\mathcal F)=0$ for every sheaf of abelian groups $\mathcal F$ on $Z$ and every $q>0$ ([[thm-noetherian-topological-space-dimension-vanishing]]); and $H^0(Z,\kappa(p))\cong\Gamma(Z,\kappa(p))=\mathcal O_Z(Z)=\kappa(p)$ ([[thm-zero-sheaf-cohomology-global-sections]], [F1]).

[F5] Stalks of pullback: for the morphism $i$ and the point $q\in Z$ one has $(i^{-1}\mathcal L)_q\cong\mathcal L_{i(q)}=\mathcal L_p$ and $(i^{-1}\mathcal O_X)_q\cong\mathcal O_{X,p}$ ([[lem-stalk-inverse-image-sheaf]]); the pullback $i^*\mathcal L=\mathcal O_Z\otimes_{i^{-1}\mathcal O_X}i^{-1}\mathcal L$ ([[def-pullback-module-ringed-spaces]]) therefore has stalk $(i^*\mathcal L)_q\cong\mathcal O_{Z,q}\otimes_{\mathcal O_{X,p}}\mathcal L_p$ ([[lem-stalk-tensor-product]]). Since $\mathcal L$ is invertible, $\mathcal L_p\cong\mathcal O_{X,p}$ ([[def-invertible-sheaf]]; [[def-locally-free-sheaf-finite-rank]]), and $\mathcal O_{Z,q}\otimes_{\mathcal O_{X,p}}\mathcal O_{X,p}\cong\mathcal O_{Z,q}=\kappa(p)$ ([[thm-unit-isomorphisms-for-module-tensor-products]]); hence $(i^*\mathcal L)(Z)=(i^*\mathcal L)_q\cong\kappa(p)=\mathcal O_Z(Z)$ by [F1].

[F6] Projection formula: for the closed immersion $i$, the invertible module $\mathcal L$ and the quasi-coherent $\mathcal O_Z$-module $\kappa(p)$, the canonical map $\mathcal L\otimes i_*\kappa(p)\to i_*(i^*\mathcal L\otimes_{\mathcal O_Z}\kappa(p))$ is an isomorphism, and $H^q(X,\mathcal L\otimes i_*\kappa(p))\cong H^q(Z,i^*\mathcal L\otimes\kappa(p))$ for every $q\ge0$ ([[lem-closed-immersion-projection-formula-invertible]]); moreover $i^*\mathcal L\otimes_{\mathcal O_Z}\kappa(p)\cong\mathcal O_Z\otimes_{\mathcal O_Z}\kappa(p)\cong\kappa(p)$ once $i^*\mathcal L\cong\mathcal O_Z$ ([F5], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] The Axiom of Choice is inherited from the Euler-characteristic, closed-immersion and pushforward suppliers cited in [F2]–[F6]; the computations below make no selection.

## Proof

**Proof technique:** direct; identify $Z$ and its sheaves, compute the cohomology of $i_*\kappa(p)$, trivialise the pullback of $\mathcal L$, and apply the projection formula.

1.1 Set-up. The morphism $i:\operatorname{Spec}\kappa(p)\to X$ is a closed immersion with image the closed point $p$, so $i$ is a homeomorphism onto $\{p\}$; the scheme $Z=\operatorname{Spec}\kappa(p)$ has one point $q$, its structure sheaf is the one-point sheaf $\kappa(p)$, and the stalk of any sheaf on $Z$ at $q$ is its group of global sections. Since $X$ is proper over $k$, it is of finite type over the field $k$, hence locally Noetherian. [F1, F2, given]

1.2 Coherence. The structure sheaf $\mathcal O_Z=\kappa(p)$ is a finite-type quasi-coherent $\mathcal O_Z$-module, so it is coherent on the locally Noetherian $Z$; the pushforward $i_*\kappa(p)$ is then a coherent $\mathcal O_X$-module. [F2]

1.3 Finite residue degree. The closed point $p$ corresponds to a maximal ideal of a finite-type $k$-algebra, so $\kappa(p)$ is a finite extension of $k$ and $[\kappa(p):k]=\dim_k\kappa(p)$ is a finite integer. [F3]

1.4 Cohomology of $i_*\kappa(p)$. For every $q\ge0$ there is an isomorphism $H^q(X,i_*\kappa(p))\cong H^q(Z,\kappa(p))$; the cohomology of $\kappa(p)$ on the one-point space $Z$ vanishes in positive degrees, and $H^0(Z,\kappa(p))\cong\kappa(p)$. Hence $H^q(X,i_*\kappa(p))=0$ for $q\ge1$ and $H^0(X,i_*\kappa(p))\cong\kappa(p)$. [F4]

1.5 The pullback of $\mathcal L$ is trivial. The stalk of $i^*\mathcal L$ at the unique point $q$ is $\mathcal O_{Z,q}\otimes_{\mathcal O_{X,p}}\mathcal L_p\cong\kappa(p)$, and this is also the group of global sections: $(i^*\mathcal L)(Z)=(i^*\mathcal L)_q\cong\kappa(p)=\mathcal O_Z(Z)$. A morphism of sheaves $i^*\mathcal L\to\mathcal O_Z$ on the one-point space $Z$ is determined by its component on global sections, so a $\kappa(p)$-linear isomorphism $\kappa(p)\to\kappa(p)$ extends to a morphism of $\mathcal O_Z$-modules $i^*\mathcal L\to\mathcal O_Z$ whose stalk at $q$ is an isomorphism; by the stalkwise criterion this morphism is an isomorphism, so $i^*\mathcal L\cong\mathcal O_{\operatorname{Spec}\kappa(p)}$. [F1, F5]

2.1 Part (1). The Euler characteristic of the coherent module $i_*\kappa(p)$ on the proper $k$-scheme $X$ is the finite alternating sum $\sum_{q\ge0}(-1)^q\dim_kH^q(X,i_*\kappa(p))$; by step 1.4 only $q=0$ contributes, with $H^0\cong\kappa(p)$, so $\chi(X,i_*\kappa(p))=\dim_k\kappa(p)=[\kappa(p):k]$ by step 1.3. [F4, step 1.4, step 1.3]

2.2 Part (2). By the projection formula the canonical map $\mathcal L\otimes i_*\kappa(p)\to i_*(i^*\mathcal L\otimes_{\mathcal O_Z}\kappa(p))$ is an isomorphism; substituting the isomorphism $i^*\mathcal L\cong\mathcal O_Z$ of step 1.5 and the unit isomorphism $\mathcal O_Z\otimes_{\mathcal O_Z}\kappa(p)\cong\kappa(p)$ identifies the target with $i_*\kappa(p)$. Hence $\mathcal L\otimes i_*\kappa(p)\cong i_*\kappa(p)$. [F6, step 1.5]

3.1 Consequence for the Euler characteristic. The isomorphism of step 2.2 induces isomorphisms $H^q(X,\mathcal L\otimes i_*\kappa(p))\cong H^q(X,i_*\kappa(p))$ for every $q\ge0$, so the two alternating sums agree: $\chi(X,\mathcal L\otimes i_*\kappa(p))=\chi(X,i_*\kappa(p))=[\kappa(p):k]$ by step 2.1. [F6, step 2.2, step 2.1]

4.1 Conclusion and choice accounting. Steps 1.4 and 2.1 give statement (1), steps 1.5 and 2.2 give the two isomorphism clauses of statement (2), and step 3.1 gives its Euler-characteristic consequence. The Axiom of Choice is used only through the suppliers recorded in [F7]: the Euler-characteristic and pushforward technology of [F2] and [F4], the closed-immersion and projection-formula machinery of [F6], and the residue-field finiteness of [F3]; the point $p$, the sheaf $\mathcal L$ and the morphism $i$ are part of the given data, and no selection is made in steps 1.1–3.1. [F7, step 1.4, step 2.1, step 2.2, step 3.1] ∎
