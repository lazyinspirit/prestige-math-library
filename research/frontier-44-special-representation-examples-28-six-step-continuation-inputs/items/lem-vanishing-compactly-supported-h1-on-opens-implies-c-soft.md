---
id: lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft
kind: lemma
title: "Vanishing compactly supported first cohomology on opens characterises c-softness"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-c-soft-sheaf, def-compactly-supported-global-sections,
       def-support-of-a-sheaf-section,
       lem-c-soft-field-sheaves-are-compact-support-acyclic,
       lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward,
       def-extension-by-zero-abelian-sheaf,
       lem-extension-by-zero-short-exact-sequence,
       def-direct-image-sheaf, lem-direct-image-is-sheaf,
       def-restriction-sheaf-open-subspace,
       def-inverse-image-presheaf-and-sheaf, def-exact-sequence-sheaves,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       thm-abelian-sheaves-have-enough-injectives,
       def-sheaf-on-topological-space, def-compact-space,
       def-subspace-topology-top, def-locally-compact-space,
       def-hausdorff-space, thm-locally-compact-hausdorff-basics,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-choice-implies-dependent-implies-countable-choice,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.2, printed pp. 207-210: Proposition 11.2.9 with its proof (for a locally compact space, F is c-soft if and only if R Gamma_c(U;F) is concentrated in degree 0 for every open U), read in full; Proposition 11.2.7 and Corollary 11.2.10 supply the surrounding equivalences'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.4, p. 340: the criterion that Y-softness is equivalent to the f_!-acyclicity of the open extensions, the pattern specialized here with Y a point'
---

## Statement

Assume the Axiom of Choice. Let $X$ be a locally compact Hausdorff space
([[def-locally-compact-space]], [[def-hausdorff-space]]) and let
$\mathcal E$ be a sheaf of abelian groups on $X$
([[def-sheaf-on-topological-space]]); every clause applies in particular to
sheaves of $k$-vector spaces. Suppose that
$$H^1_c(V,\mathcal E|_V)=0\qquad\text{for every open subspace }V\subseteq X,$$
where $\mathcal E|_V$ is the restriction
([[def-restriction-sheaf-open-subspace]]) and $H^1_c$ is the first
compactly supported cohomology ([[def-compactly-supported-global-sections]]).
Then $\mathcal E$ is c-soft ([[def-c-soft-sheaf]]); more precisely, every
section of $\mathcal E$ over a compact subset $K\subseteq X$ extends to a
compactly supported global section of $\mathcal E$. Conversely, if
$\mathcal E$ is c-soft, then
$H^q_c(V,\mathcal E|_V)=0$ for every $q>0$ and every open subspace
$V\subseteq X$. Hence c-softness of $\mathcal E$ is equivalent to
$R\Gamma_c(V,\mathcal E|_V)$ being concentrated in degree $0$ for every open
subspace $V\subseteq X$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a sheaf $\mathcal E$ of abelian groups on $X$ with $H^1_c(V,\mathcal E|_V)=0$ for every open $V\subseteq X$, and the Axiom of Choice.

[F1] Short exact sequence of the closed complement: for an open subspace $j:U\hookrightarrow X$ with closed complement $Z=X\setminus U$ and closed inclusion $i:Z\hookrightarrow X$, and for every sheaf $\mathcal F$ of abelian groups on $X$, there is a short exact sequence $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$, where $j_!$ is extension by zero and $i_*$ is the direct image ([[lem-extension-by-zero-short-exact-sequence]], [[def-extension-by-zero-abelian-sheaf]], [[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]).

[F2] The compact-support calculus: for $j:U\hookrightarrow X$ open and $i:Z\hookrightarrow X$ closed, the canonical maps $\Gamma_c(X,j_!\mathcal A)\to\Gamma_c(U,\mathcal A)$ and $\Gamma_c(X,i_*\mathcal B)\to\Gamma_c(Z,\mathcal B)$ are natural isomorphisms, the functors $j_!$ and $i_*$ carry c-soft sheaves to c-soft sheaves, and the induced isomorphisms $R^q\Gamma_c(X,j_!\mathcal A)\cong R^q\Gamma_c(U,\mathcal A)$ and $R^q\Gamma_c(X,i_*\mathcal B)\cong R^q\Gamma_c(Z,\mathcal B)$ hold for all $q\ge0$; for compact $Z$ one has $\Gamma_c(Z,\mathcal B)=\Gamma(Z,\mathcal B)$ ([[lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward]], [[def-compactly-supported-global-sections]]).

[F3] Long exact sequences: the functors $R^q\Gamma_c(X,-)$ form a cohomological delta functor with $R^0\Gamma_c(X,-)\cong\Gamma_c(X,-)$, and every short exact sequence of abelian sheaves on $X$ has a natural long exact compactly supported cohomology sequence, so a segment $H^0_c(X,\mathcal A)\to H^0_c(X,\mathcal B)\to H^0_c(X,\mathcal C)\xrightarrow{\partial}H^1_c(X,\mathcal A)$ is exact; here $H^0_c(X,\mathcal F)=\Gamma_c(X,\mathcal F)$ ([[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[def-compactly-supported-global-sections]], [[thm-abelian-sheaves-have-enough-injectives]]).

[F4] c-softness: a sheaf is c-soft when every section over a compact set extends to a global section; restriction of a c-soft sheaf to an open subspace is c-soft; and c-soft sheaves are acyclic, $H^q_c(X,\mathcal F)=0$ for $q>0$ ([[def-c-soft-sheaf]], [[lem-c-soft-field-sheaves-are-compact-support-acyclic]]).

[F5] Topology: a compact subset $K$ of the Hausdorff space $X$ is closed, so its complement $X\setminus K$ is an open subspace and is itself locally compact Hausdorff; compactness of a subset may be read in the subspace or in $X$; and $i^{-1}\mathcal E$ over $K$ is the sheaf of sections of $\mathcal E$ over $K$ ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-locally-compact-hausdorff-basics]], [[def-subspace-topology-top]], [[def-inverse-image-presheaf-and-sheaf]], [[def-compact-space]]).

[F6] The Axiom of Choice, from which dependent choice follows; dependent choice is used by the delta-functor and derived-functor theorems invoked in fact F3 ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Setup.** Let $K\subseteq X$ be compact; by [F5] the set $K$ is closed, so $U:=X\setminus K$ is open and the pair $(U,K)$ is the open/closed decomposition of [F1] with closed inclusion $i:K\hookrightarrow X$. The restriction $\mathcal E|_K=i^{-1}\mathcal E$ is the sheaf of sections of $\mathcal E$ over $K$ [F5], and [F1] applied to $\mathcal F=\mathcal E$ produces the short exact sequence of sheaves on $X$ $$0\to j_!(\mathcal E|_U)\to\mathcal E\to i_*(\mathcal E|_K)\to0$$ with $j:U\hookrightarrow X$ the open inclusion. [F1, F5]

1.2 **The converse.** Suppose $\mathcal E$ is c-soft. For every open $V\subseteq X$ the restriction $\mathcal E|_V$ is c-soft on $V$ by [F4], and c-soft sheaves are acyclic, so $H^q_c(V,\mathcal E|_V)=0$ for every $q>0$; thus $R\Gamma_c(V,\mathcal E|_V)$ is concentrated in degree $0$ with value $\Gamma_c(V,\mathcal E|_V)$. This proves the converse direction and, taking $q>0$ arbitrary, shows that $R\Gamma_c(V,\mathcal E|_V)$ concentrated in degree $0$ for all opens $V$ implies in particular the hypothesis $H^1_c(V,\mathcal E|_V)=0$ used below. [F4]

2.1 **The long exact sequence of the pair.** Apply the delta-functor machinery of [F3] to the short exact sequence of [step 1.1]; the calculus of [F2] identifies its compactly supported cohomology with that of the open and closed pieces: $H^0_c(X,j_!(\mathcal E|_U))\cong\Gamma_c(U,\mathcal E)$ and $H^1_c(X,j_!(\mathcal E|_U))\cong H^1_c(U,\mathcal E)$, while $H^0_c(X,i_*(\mathcal E|_K))\cong\Gamma_c(K,\mathcal E|_K)=\Gamma(K,\mathcal E|_K)$ because $K$ is compact. The exact sequence therefore reads $$0\to\Gamma_c(U,\mathcal E)\to\Gamma_c(X,\mathcal E)\to\Gamma(K,\mathcal E|_K)\xrightarrow{\ \partial\ }H^1_c(U,\mathcal E)\to\cdots,$$ and the hypothesis of the statement applies to the open subspace $U=X\setminus K$, giving $H^1_c(U,\mathcal E)=0$. Hence the kernel of $\partial$ is all of $\Gamma(K,\mathcal E|_K)$, that is, the restriction map $\Gamma_c(X,\mathcal E)\to\Gamma(K,\mathcal E|_K)$ is surjective. [step 1.1, F2, F3]

3.1 **Conclusion of the direct direction.** Since $\Gamma_c(X,\mathcal E)\subseteq\Gamma(X,\mathcal E)$, the surjectivity of [step 2.1] shows that every section of $\mathcal E$ over $K$ extends to a compactly supported global section, hence in particular to a global section; as $K$ was an arbitrary compact subset, $\mathcal E$ is c-soft by [F4]. [step 2.1, F4]

4.1 **The equivalence.** The direct direction is [step 3.1], and it produces the sharper statement that sections extend with compact support; the converse direction is [step 1.2]. Consequently c-softness of $\mathcal E$ is equivalent to the vanishing of $H^q_c(V,\mathcal E|_V)$ for all $q>0$ and all open $V\subseteq X$, i.e. to $R\Gamma_c(V,\mathcal E|_V)$ being concentrated in degree $0$ for every open $V\subseteq X$. The Axiom of Choice enters only through the injective resolution data and the delta-functor and calculus theorems of [F2] and [F3], whose comparison steps use dependent choice, a consequence of AC [F6]. [step 1.2, step 3.1, F2, F3, F6] ∎

## Remarks

- **Why the hypothesis is stated for all opens.** Only the complements $X\setminus K$ of compact sets are used in the proof, but an arbitrary open subspace of a locally compact Hausdorff space need not be a compact complement, and the criterion is stated in the form needed by its consumers, where the vanishing is available for every open subspace of a fibre. The proof shows that the weaker hypothesis "$H^1_c(X\setminus K,\mathcal E)=0$ for every compact $K$" already implies c-softness.

- **Relation to the acyclicity lemma.** The acyclicity lemma [[lem-c-soft-field-sheaves-are-compact-support-acyclic]] proves that c-softness implies vanishing on the whole space and on open and closed restrictions; the present lemma is the converse, and the two together identify c-softness with a vanishing condition on all open subspaces, which is the form in which the finite-fibre-dimension theorem of this page verifies fibrewise c-softness.
