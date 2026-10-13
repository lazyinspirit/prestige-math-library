---
id: ex-compact-support-and-softness-on-a-finite-discrete-space
kind: example
title: "Compact support and softness on a finite discrete space"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [lem-c-soft-field-sheaves-are-compact-support-acyclic,
       def-c-soft-sheaf, def-compactly-supported-global-sections,
       def-support-of-a-sheaf-section, def-sheaf-on-topological-space,
       def-morphism-of-presheaves, def-stalk-of-presheaf,
       lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions,
       def-direct-sum-of-a-family-of-modules, def-standard-topologies,
       def-compact-space,
       lem-compactness-of-a-subspace-is-ambient,
       thm-sheaf-morphism-isomorphism-stalkwise,
       lem-finite-choice, def-axiom-of-choice,
       thm-exactness-of-sheaves-stalkwise,
       prop-an-exact-functor-has-vanishing-positive-derived-functors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.2, printed pp. 207-210: Definition 11.2.1 and Propositions 11.2.2 and 11.2.6, the c-softness and compactly supported section statements specialized here to a finite discrete space'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.1: for $Y$ a point the functor $f_!$ is the compactly supported global-sections functor, whose discrete case is computed here'
    - title: "The Stacks Project, Sheaves of Modules (chapter 17); §5 Supports of modules and sections, Definition 5.1 (tag 01AT) and Lemma 5.2 (tag 01AU)"
      url: "https://stacks.math.columbia.edu/download/modules.pdf"
      locator: '§5, pp. 5-6: the support of a section and its closedness in the domain, used in the support computations'
---

## Example

Assume the Axiom of Choice. Let $X$ be a finite set with the discrete
topology ([[def-standard-topologies]]) and let $k$ be a field. A sheaf
$\mathcal V$ of $k$-vector spaces on $X$ is the same thing as a family
$(V_x)_{x\in X}$ of $k$-vector spaces --- its stalks --- with
$\mathcal V(U)=\prod_{x\in U}V_x$ for every open $U\subseteq X$
([[def-sheaf-on-topological-space]]). Then:

1. every sheaf of $k$-vector spaces on $X$ is c-soft
   ([[def-c-soft-sheaf]]);
2. $\Gamma_c(X,\mathcal V)=\bigoplus_{x\in X}V_x$ and
   $H^q_c(X,\mathcal V)=0$ for every $q>0$
   ([[def-compactly-supported-global-sections]]), so the derived object
   $R\Gamma_c(X,\mathcal V)$ is concentrated in degree zero with value
   $\bigoplus_{x\in X}V_x$;
3. for a $k$-vector space $W$ with constant sheaf $W_X$
   ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]) there
   are natural bijections
   $$\operatorname{Hom}_{\operatorname{Sh}_k(X)}(\mathcal V,W_X)\cong\operatorname{Hom}_k\Bigl(\bigoplus_{x\in X}V_x,\,W\Bigr)=\operatorname{Hom}_k\bigl(\Gamma_c(X,\mathcal V),W\bigr).$$

This is the discrete case of the exceptional inverse image along the terminal
map $X\to\mathrm{pt}$: the functor $W\mapsto W_X$ is right adjoint to
$\Gamma_c(X,-)$.

## Facts & Assumptions

**Given:** A finite set $X$ with the discrete topology, a field $k$, sheaves of $k$-vector spaces on $X$, and the Axiom of Choice.

[F1] A sheaf on $X$ is a presheaf satisfying the gluing and locality axioms, and a morphism of sheaves is a morphism of the underlying presheaves ([[def-sheaf-on-topological-space]], [[def-morphism-of-presheaves]]).

[F2] In the discrete topology every subset is open and clopen and the singletons form a basis, so $\{x\}$ is the smallest open neighbourhood of $x$ ([[def-standard-topologies]]).

[F3] The stalk $\mathcal F_x$ of a presheaf is the filtered colimit of the groups $\mathcal F(W)$ over the open neighbourhoods $W$ of $x$ ([[def-stalk-of-presheaf]]).

[F4] A sheaf is c-soft on a locally compact Hausdorff space when every section over a compact set extends to a global section; injective sheaves are c-soft and c-soft sheaves satisfy $H^q_c=0$ in positive degrees ([[def-c-soft-sheaf]], [[lem-c-soft-field-sheaves-are-compact-support-acyclic]]).

[F5] $\Gamma_c(X,\mathcal F)$ consists of the global sections with compact support, and on a compact space every global section has closed support and hence is compactly supported, so $\Gamma_c=\Gamma$ and $H^q_c=H^q$ ([[def-compactly-supported-global-sections]], [[def-support-of-a-sheaf-section]]).

[F6] For a compact subset $K$ of a topological space, compactness may be read in the ambient space, and in a discrete space the singletons form an open cover, so a compact subset of a discrete space is finite ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]], [[def-standard-topologies]]).

[F7] The constant sheaf $W_X$ with value an abelian group $W$ is the sheaf of locally constant $W$-valued functions, with $(W_X)_x\cong W$ at every point ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]); a morphism of sheaves which is an isomorphism on stalks is an isomorphism ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F8] For a family $(M_x)_{x\in X}$ of modules the product is $\prod_x M_x$ and the direct sum $\bigoplus_x M_x$ is its submodule of finitely supported elements; for a finite index set the two coincide ([[def-direct-sum-of-a-family-of-modules]]).

[F9] The Axiom of Choice is assumed; selections over a finite index set need only finite choice, a theorem of ZF ([[def-axiom-of-choice]], [[lem-finite-choice]]).

## Verification

**Proof technique:** direct.

1.1 **Sheaves on a discrete space are families.** Let $\mathcal V$ be a sheaf of $k$-vector spaces on $X$ and write $V_x:=\mathcal V(\{x\})$, an open set by [F2]. For open $U\subseteq X$ the singletons $\{x\}$, $x\in U$, are pairwise disjoint open sets covering $U$, so the gluing and locality axioms [F1] identify $s\in\mathcal V(U)$ with the family of its restrictions $s_x\in V_x$, giving $\mathcal V(U)\cong\prod_{x\in U}V_x$; these identifications are compatible with restriction to smaller opens. The neighbourhood $\{x\}$ is the smallest open neighbourhood of $x$ [F2], so the filtered colimit of [F3] is already $\mathcal V(\{x\})$ and the stalk at $x$ is $V_x$. Since a morphism of sheaves is a morphism of presheaves [F1], it is exactly a family of $k$-linear maps $\varphi_x:V_x\to W_x$ determining $\varphi_U=\prod_{x\in U}\varphi_x$; conversely any such family satisfies the restriction squares. [F1, F2, F3]

2.1 **Every sheaf is c-soft.** The space $X$ is Hausdorff because distinct singletons are disjoint open neighbourhoods. Each singleton is compact (one member of any cover covers it) and open, hence a compact neighbourhood; thus $X$ is locally compact. Let $K\subseteq X$ be compact; by [F6] the set $K$ is finite, so a section of $\mathcal V$ over $K$ is a family $(v_x)_{x\in K}\in\prod_{x\in K}V_x$ under the identification of [step 1.1]. Extending it by $v_x:=0$ for $x\in X\setminus K$ defines a global section of $\mathcal V$ whose restriction to $K$ is the given family, since the restriction maps are the projections of the product [step 1.1]. Hence the restriction map $\Gamma(X,\mathcal V)\to\Gamma(K,\mathcal V|_K)$ is surjective for every compact $K$, that is, $\mathcal V$ is c-soft [F4]; no choice is used, only the formula for the extension. [step 1.1, F2, F4, F6]

2.2 **Compact support in degree zero.** The finite set $X$ is compact: for any open cover, choose one member containing each $x\in X$; these finitely many members cover $X$, by finite choice [F9], and for $X=\varnothing$ take the empty subcover. Hence every global section of $\mathcal V$ has compact support and $\Gamma_c(X,\mathcal V)=\Gamma(X,\mathcal V)=\prod_{x\in X}V_x$ by [F5] and [step 1.1]; since $X$ is finite, the product coincides with the direct sum, so $\Gamma_c(X,\mathcal V)=\bigoplus_{x\in X}V_x$ [F8]. [step 1.1, F2, F5, F6, F8, F9]

3.1 **Vanishing in positive degrees and the adjunction.** Every sheaf on $X$ is c-soft by [step 2.1], so the acyclicity lemma gives $H^q_c(X,\mathcal V)=0$ for every $q>0$, and $R\Gamma_c(X,\mathcal V)$ is concentrated in degree zero with value $\Gamma_c(X,\mathcal V)$ as computed in [step 2.2]; this proves (2) and, with [step 2.1], also (1). For a $k$-vector space $W$ the constant sheaf $W_X$ has $(W_X)_x\cong W$ for every $x$ [F7], so by [step 1.1] a morphism $\varphi:\mathcal V\to W_X$ is exactly a family of $k$-linear maps $\varphi_x:V_x\to W$, and such a family defines $v\mapsto\sum_{x\in X}\varphi_x(v_x)$ on the direct sum, and restricting a linear map to the coordinate inclusions recovers the family. Every vector is the finite sum of its coordinate vectors, so these constructions are inverse [F8]; under the identification of [step 2.2] this is $\operatorname{Hom}_k(\Gamma_c(X,\mathcal V),W)$. The bijection is natural in $\mathcal V$ and in $W$, because it is obtained by composing with the canonical inclusions $V_x\to\bigoplus_xV_x$ and is compatible with the action of morphisms on the components. [step 1.1, step 2.1, step 2.2, F4, F7, F8]

4.1 **Conclusion.** Clause (1) is [step 2.1], clause (2) is [step 2.2] together with [step 3.1], and clause (3) is [step 3.1]. The Axiom of Choice is inherited from the compact-support acyclicity lemma used for the vanishing; the only selections made here are over the finite set $X$ and its finite subsets, supplied by finite choice in ZF [F9]. [step 2.1, step 2.2, step 3.1, F9] ∎

## Remarks

- **A choice-free route to the vanishing.** On a finite discrete space the restriction functors $\mathcal V\mapsto V_x=\mathcal V(\{x\})$ are exact — a sequence of sheaves is exact exactly when it is exact on stalks ([[thm-exactness-of-sheaves-stalkwise]]) and the stalk at $x$ is $V_x$ — and a finite product of exact functors is exact, so $\Gamma_c(X,-)$ is exact here. Applying this exact functor to any supplied injective resolution leaves an exact augmented complex, so the positive derived groups vanish ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]). This argument adds no choice use beyond the supplied resolution data. The display of clause (2) above is proved through the general acyclicity lemma to keep the dependence on the pair's main tools visible; the statement assumes AC to match that reference.

- **Where the finiteness is used.** Finiteness of $X$ is used twice: it makes the product $\prod_{x\in X}V_x$ a direct sum, and it makes every global section compactly supported, as shown in step 2.2. Extension by zero in step 2.1 is a formula on any discrete space and requires no selection over the ambient set. For an infinite discrete space the restriction maps to the compact (finite) subsets are still surjective and every sheaf is still c-soft, but $\Gamma_c$ is the direct sum of the stalks while $\Gamma$ is the product, and the two differ.

- **The adjunction.** The bijection of clause (3) says that the functor $W\mapsto W_X$ from $k$-vector spaces to sheaves is right adjoint to $\Gamma_c(X,-)$; this is the discrete shadow of the exceptional inverse image $a_X^!W$ along the terminal map $a_X:X\to\mathrm{pt}$, whose general definition belongs to the six-operations material and is not used here.
