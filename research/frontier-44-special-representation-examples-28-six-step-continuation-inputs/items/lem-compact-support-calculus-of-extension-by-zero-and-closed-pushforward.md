---
id: lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward
kind: lemma
title: "Compact-support calculus along open and closed embeddings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-c-soft-sheaf, def-compactly-supported-global-sections,
       def-support-of-a-sheaf-section, def-extension-by-zero-abelian-sheaf,
       def-direct-image-sheaf, lem-direct-image-is-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-restriction-sheaf-open-subspace,
       lem-sections-near-a-compact-set-are-sections-on-that-set,
       lem-c-soft-field-sheaves-are-compact-support-acyclic,
       thm-extension-by-zero-adjunction-exactness,
       lem-extension-by-zero-short-exact-sequence,
       thm-acyclic-resolution-theorem-for-right-derived-functors,
       def-f-acyclic-resolution, def-acyclic-object-for-a-left-exact-functor,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors,
       prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors,
       thm-effaceable-cohomological-delta-functors-are-universal,
       cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic,
       cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero,
       def-universal-delta-functor, def-sheaf-cohomology-derived-global-sections,
       thm-abelian-sheaves-have-enough-injectives,
       lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions,
       thm-exactness-of-sheaves-stalkwise,
       lem-sheaf-section-over-empty-set-terminal,
       def-sheaf-on-topological-space, def-compact-space,
       def-locally-compact-space, def-hausdorff-space,
       thm-locally-compact-hausdorff-basics, def-subspace-topology-top,
       lem-compactness-of-a-subspace-is-ambient,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       lem-t0-t1-and-hausdorff-are-hereditary,
       def-stalk-of-presheaf, def-germ-of-section,
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
      locator: '§11.2, printed pp. 207-210: Proposition 11.2.5 (c-softness is preserved by restriction to locally closed subsets, by extension by zero along the inclusion of an open subset, and by the extension F_Z of a sheaf on a closed subset), equation (10.2.4) for Gamma_Z, and the proofs read in full'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.1, p. 338: the functor f_! of direct images with proper supports, its behaviour for open and closed immersions, and its coincidence with the compactly supported section functor for Y a point; §1.4 p. 340 for the acyclicity pattern'
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §21 Cohomology with support in a closed subset (tag 0A39)"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: '§21, pp. 36-37: sections with support in a closed subset, used as the closed-embedding model for compactly supported global sections'
---

## Statement

Assume the Axiom of Choice. Let $X$ be a locally compact Hausdorff space, let
$j:U\hookrightarrow X$ be the inclusion of an open subspace with closed
complement $Z=X\setminus U$
([[def-subspace-topology-top]], [[def-locally-compact-space]],
[[def-hausdorff-space]]), and let $i:Z\hookrightarrow X$ be the inclusion of
$Z$. All sheaves below are sheaves of abelian groups
([[def-sheaf-on-topological-space]]); every clause applies in particular to
sheaves of $k$-vector spaces.

1. For every sheaf $\mathcal A$ on $U$ the canonical map
   $\Gamma_c(X,j_!\mathcal A)\to\Gamma_c(U,\mathcal A)$ --- the restriction of
   the identification of $(j_!\mathcal A)(X)$ with a subgroup of
   $\mathcal A(U)$ ([[def-extension-by-zero-abelian-sheaf]],
   [[def-compactly-supported-global-sections]]) --- is an isomorphism, natural
   in $\mathcal A$; the functor $j_!$ carries c-soft sheaves on $U$ to c-soft
   sheaves on $X$ ([[def-c-soft-sheaf]]); and the induced canonical
   isomorphisms $R^q\Gamma_c(X,j_!\mathcal A)\cong R^q\Gamma_c(U,\mathcal A)$
   hold for all $q\ge0$ and are natural in $\mathcal A$.
2. For every sheaf $\mathcal B$ on $Z$ the canonical map
   $\Gamma_c(X,i_*\mathcal B)\to\Gamma_c(Z,\mathcal B)$ --- the restriction of
   the identification of $(i_*\mathcal B)(X)$ with $\mathcal B(Z)$
   ([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]) --- is an
   isomorphism, natural in $\mathcal B$; the functor $i_*$ carries c-soft
   sheaves on $Z$ to c-soft sheaves on $X$; and the induced canonical
   isomorphisms $R^q\Gamma_c(X,i_*\mathcal B)\cong R^q\Gamma_c(Z,\mathcal B)$
   hold for all $q\ge0$ and are natural in $\mathcal B$.
3. If $Z$ is compact ([[def-compact-space]]), then
   $\Gamma_c(X,i_*\mathcal B)\cong\Gamma(Z,\mathcal B)$ and
   $R^q\Gamma_c(X,i_*\mathcal B)\cong H^q(Z,\mathcal B)$ for all $q\ge0$
   ([[def-sheaf-cohomology-derived-global-sections]]).

All isomorphisms are the canonical ones induced by the extension-by-zero
adjunction [[thm-extension-by-zero-adjunction-exactness]] and by the
acyclic-resolution comparison
[[thm-acyclic-resolution-theorem-for-right-derived-functors]]; no choice is
used beyond the injective resolution data and their comparison theorems.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, an open subspace $j:U\hookrightarrow X$ with closed complement $Z=X\setminus U$, the inclusion $i:Z\hookrightarrow X$, sheaves of abelian groups $\mathcal A$ on $U$ and $\mathcal B$ on $Z$, and the Axiom of Choice.

[F1] Extension by zero: for open $V\subseteq X$, $$(j_!\mathcal A)(V)=\{\,s\in\mathcal A(V\cap U):\operatorname{Supp}(s)\ \text{is closed in }V\,\},$$ equivalently $s\in(j_!\mathcal A)(V)$ when every $x\in V\setminus U$ has an open neighbourhood $W_x\subseteq V$ with $s|_{W_x\cap U}=0$; for $V\subseteq U$ the condition is vacuous and $(j_!\mathcal A)(V)=\mathcal A(V)$; the functor $j_!$ is exact on sheaves of abelian groups and is left adjoint to restriction, and $(j_!\mathcal A)_x\cong\mathcal A_x$ for $x\in U$ while $(j_!\mathcal A)_x=0$ for $x\notin U$ ([[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]]).

[F2] Direct image: for open $V\subseteq X$, $(i_*\mathcal B)(V)=\mathcal B(V\cap Z)$; $i_*\mathcal B$ is a sheaf of abelian groups on $X$, and a morphism $\mathcal B\to\mathcal B'$ induces $i_*\mathcal B\to i_*\mathcal B'$ degreewise ([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]).

[F3] Compactly supported global sections: $\Gamma_c(X,\mathcal F)\subseteq\Gamma(X,\mathcal F)$ consists of the sections whose support is compact; $\Gamma_c(X,-)$ is additive and left exact; $H^q_c(X,\mathcal F)=R^q\Gamma_c(X,\mathcal F)$ is computed from the supplied functorial injective resolution datum on $\mathrm{Ab}(X)$ and forms a cohomological delta functor with long exact sequences; if the space is compact then $\Gamma_c=\Gamma$ and $H^q_c=H^q$ ([[def-compactly-supported-global-sections]], [[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[def-sheaf-cohomology-derived-global-sections]]).

[F4] c-softness: $\mathcal F$ is c-soft when every section over a compact set extends to a global section, equivalently when every section over an open neighbourhood of a compact set agrees with a global section near it; flasque implies c-soft; injective abelian sheaves are c-soft; c-soft sheaves satisfy $H^q_c(X,\mathcal F)=0$ for $q>0$; c-softness is preserved by restriction to open and to closed subspaces and by extension by zero along an open inclusion; every section over a compact set extends to a compactly supported global section with support in any prescribed open neighbourhood ([[def-c-soft-sheaf]], [[lem-c-soft-field-sheaves-are-compact-support-acyclic]]).

[F5] Supports: $\operatorname{Supp}(s)$ is closed in the domain of $s$, the support of a restricted section is the trace of the support, and a section has empty support exactly when it is zero ([[def-support-of-a-sheaf-section]]).

[F6] Topology: compact subsets of the Hausdorff space $X$ are closed and two disjoint compact subsets are separated by disjoint open sets; the open (respectively closed) subspaces of a locally compact Hausdorff space are locally compact and Hausdorff; open subsets of a subspace are traces of open subsets of $X$; and for $A\subseteq S\subseteq X$ the topology $A$ inherits from $S$ is the one it inherits from $X$, so compactness of $A$ may be read in either space ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-locally-compact-hausdorff-basics]], [[def-subspace-topology-top]], [[lem-compactness-of-a-subspace-is-ambient]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F7] Exactness and injectives: the section group of an abelian sheaf over the empty set is the zero group ([[lem-sheaf-section-over-empty-set-terminal]]); a sequence of abelian sheaves is exact exactly when all its stalk sequences are ([[thm-exactness-of-sheaves-stalkwise]]); abelian sheaves on any topological space have enough injectives ([[thm-abelian-sheaves-have-enough-injectives]]); and injective comparison extensions exist between the resolutions of a supplied datum ([[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]]).

[F8] Acyclic resolutions and universality: the acyclic-resolution theorem identifies $R_I^nF(A)$ with the cohomology of any $F$-acyclic resolution of $A$ ([[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-f-acyclic-resolution]], [[def-acyclic-object-for-a-left-exact-functor]]); a natural transformation of additive functors induces natural transformations of the right derived functors ([[prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors]]) which assemble into a morphism of cohomological delta functors ([[prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors]]); an effaceable cohomological delta functor in positive degrees is universal ([[thm-effaceable-cohomological-delta-functors-are-universal]], [[def-universal-delta-functor]]); and a morphism of universal delta functors extending a degree-zero isomorphism is that unique isomorphism ([[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]], [[cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]]).

[F9] The Axiom of Choice, from which dependent choice follows ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Clause (1), degree zero.** By [F1], $(j_!\mathcal A)(X)=\{\,s\in\mathcal A(U):\operatorname{Supp}(s)\ \text{closed in }X\,\}$. For such $s$ the support of $s$ read as a global section of $j_!\mathcal A$ is the same set $\operatorname{Supp}(s)\subseteq U$: at $x\in U$ the stalks of $j_!\mathcal A$ and $\mathcal A$ agree with compatible germ identifications, while for $x\notin U$ the germ of $s$ vanishes, because the defining local condition supplies an open neighbourhood $W_x$ with $s|_{W_x\cap U}=0$, so the restriction of $s$ to $W_x$ is already the zero element of $(j_!\mathcal A)(W_x)$. Hence, using that compactness of a subset of $U$ may be read in $U$ or in $X$ and that compact subsets of $X$ are closed [F6], the subgroups $\Gamma_c(X,j_!\mathcal A)=\{\,s\in(j_!\mathcal A)(X):\operatorname{Supp}(s)\ \text{compact in }X\,\}$ and $\{\,s\in\mathcal A(U):\operatorname{Supp}(s)\ \text{compact in }U\,\}=\Gamma_c(U,\mathcal A)$ are equal inside $\mathcal A(U)$; the canonical map is the inclusion of these equal subgroups, hence a bijection, and it is natural in $\mathcal A$ because $j_!\varphi$ acts as $\varphi$ on sections of $\mathcal A(U)$. [F1, F5, F6]

1.2 **Clause (2), degree zero and stalks of $i_*$.** By [F2], $(i_*\mathcal B)(X)=\mathcal B(X\cap Z)=\mathcal B(Z)$. The stalks are computed as follows: for $z\in Z$ the sets $V\cap Z$ with $V$ an open neighbourhood of $z$ in $X$ are exactly the open neighbourhoods of $z$ in $Z$ and are cofinal in the colimit defining the stalk, and $(i_*\mathcal B)(V)=\mathcal B(V\cap Z)$ for each of them, so the two colimit diagrams agree and $(i_*\mathcal B)_z\cong\mathcal B_z$; for $x\notin Z$ the open set $X\setminus Z=U$ is a neighbourhood of $x$ with $(i_*\mathcal B)(W)=\mathcal B(W\cap Z)=\mathcal B(\varnothing)=0$ for every open $W\subseteq U$, so $(i_*\mathcal B)_x=0$. Consequently for $t\in\mathcal B(Z)$ the support of $t$ read as a global section of $i_*\mathcal B$ is the set $\operatorname{Supp}(t)\subseteq Z$, and compactness of a subset of $Z$ may be read in $Z$ or in $X$ [F6]; hence $\Gamma_c(X,i_*\mathcal B)=\{\,t\in\mathcal B(Z):\operatorname{Supp}(t)\ \text{compact in }Z\,\}=\Gamma_c(Z,\mathcal B)$, the canonical map is the identity, and it is natural in $\mathcal B$ because $i_*\varphi$ acts as $\varphi$ on sections over $Z$. [F2, F5, F6, F7]

2.1 **Clause (1), c-softness.** Let $\mathcal A$ be c-soft on $U$, let $K\subseteq X$ be compact and let $\sigma$ be a section of $j_!\mathcal A$ over $K$; by the neighbourhood formulation of c-softness [F4] it suffices to represent $\sigma$ by a class of a section $s\in(j_!\mathcal A)(V)$ over an open $V\supseteq K$ and to produce a global section of $j_!\mathcal A$ agreeing with $s$ near $K$. The set $L:=K\cap U$ is compact in $U$ [F6], and $s$ is an element of $\mathcal A(V\cap U)$ whose support is closed in $V$, so $V\cap U$ is an open neighbourhood of $L$ in $U$ over which $s$ is a section of $\mathcal A$; clause (1) of [F4] applied to the c-soft sheaf $\mathcal A$ on the locally compact Hausdorff space $U$ [F6] yields $e\in\Gamma_c(U,\mathcal A)$ with $\operatorname{Supp}(e)$ compact and $e=s$ on an open neighbourhood $N\subseteq V\cap U$ of $L$. As an element of $\mathcal A(U)$ the section $e$ has compact support in $U$, hence compact support in $X$ and in particular closed support in $X$ [F6]; therefore $e\in(j_!\mathcal A)(X)$ and $\operatorname{Supp}(e)$ is compact, that is, $e\in\Gamma_c(X,j_!\mathcal A)$. The global section $e$ agrees with $s$ near $K$: at points of $L=K\cap U$ the two sections agree on $N$, and at a point $x\in K\setminus U$ the germ of $s$ vanishes by the local condition in [F1] while the germ of $e$ vanishes because $e\in(j_!\mathcal A)(X)$ gives an open neighbourhood $W_x$ of $x$ with $e|_{W_x\cap U}=0$. Hence $j_!\mathcal A$ is c-soft. [step 1.1, F1, F4, F5, F6]

2.2 **$i_*$ is exact.** Let $0\to\mathcal B'\to\mathcal B\to\mathcal B''\to0$ be an exact sequence of sheaves on $Z$ and apply $i_*$ degreewise; by [F7] it suffices to test exactness of the resulting sequence at every stalk of $X$. At a point $z\in Z$ the stalk sequence of the $i_*$-images is the given exact stalk sequence under the identifications $(i_*\mathcal B)_z\cong\mathcal B_z$ of [step 1.2], and at a point $x\notin Z$ all three stalks vanish by [step 1.2], so the sequence $0\to0\to0\to0$ is exact there. Hence $i_*$ sends exact sequences to exact sequences. [step 1.2, F7]

2.3 **Clause (2), c-softness.** Let $\mathcal B$ be c-soft on $Z$, let $K\subseteq X$ be compact and let $\sigma$ be a section of $i_*\mathcal B$ over $K$, represented by a section $s\in(i_*\mathcal B)(V)=\mathcal B(V\cap Z)$ over an open $V\supseteq K$ [F4]. Then $L:=K\cap Z$ is compact in $Z$ [F6] and $V\cap Z$ is an open neighbourhood of $L$ in $Z$, so c-softness of $\mathcal B$ provides $t\in\Gamma(Z,\mathcal B)$ agreeing with $s$ on an open neighbourhood $N\subseteq V\cap Z$ of $L$ [F4]. Choose open $W\subseteq X$ with $W\cap Z=N$ [F6]; the global section $t\in\mathcal B(Z)=(i_*\mathcal B)(X)$ agrees with the class $\sigma$ over $K$: at $z\in L$ the open set $W\cap V$ contains $z$ and $t|_{W\cap V}=s|_{W\cap V}$ as elements of $\mathcal B((W\cap V)\cap Z)$ because $(W\cap V)\cap Z\subseteq N$, so the germs agree, and at $x\in K\setminus Z$ the stalk $(i_*\mathcal B)_x$ vanishes by [step 1.2], so all germs there are equal. Hence $i_*\mathcal B$ is c-soft. [step 1.2, F2, F4, F6]

3.1 **Clause (1), computing both derived functors by the same complex.** Let $0\to\mathcal A\to J^0\to J^1\to\cdots$ be the injective resolution of $\mathcal A$ supplied by the fixed functorial injective resolution datum on $\mathrm{Ab}(U)$ [F7, F8]; each $J^q$ is injective, hence c-soft on the locally compact Hausdorff space $U$ [F4], hence $j_!J^q$ is c-soft on $X$ by [step 2.1], and c-soft sheaves on $X$ are acyclic for $\Gamma_c(X,-)$ [F4]. Since $j_!$ is exact [F1], the complex $0\to j_!\mathcal A\to j_!J^0\to j_!J^1\to\cdots$ is a $\Gamma_c(X,-)$-acyclic resolution of the sheaf $j_!\mathcal A$ on $X$, and the acyclic-resolution theorem gives canonical isomorphisms $R^q\Gamma_c(X,j_!\mathcal A)\cong H^q(\Gamma_c(X,j_!J^\bullet_{\mathrm{del}}))$ for all $q\ge0$. For the functor $L:=\Gamma_c(X,j_!(-))$ on $\mathrm{Ab}(U)$, whose derived functors are formed with the same datum on $\mathrm{Ab}(U)$, the resolution $J^\bullet$ is likewise $L$-acyclic, and the derived functors $R^qL(\mathcal A)$ are computed by the very same complex $L(J^\bullet)=\Gamma_c(X,j_!J^\bullet)$; since both isomorphisms are the canonical isomorphisms of the acyclic-resolution theorem for the same resolution complex, they are compatible with comparison extensions of morphisms $\mathcal A\to\mathcal A'$ [F7, F8]. [F1, F4, F7, F8]

4.1 **Clause (1), the natural isomorphisms via universality.** Put $G:=\Gamma_c(U,-)$ on $\mathrm{Ab}(U)$; the degree-zero identification of [step 1.1] is a natural isomorphism $\zeta:L\Rightarrow G$ of additive left exact functors [F3], and by [F8] the induced transformations $R^q(\zeta):R^qL\Rightarrow R^qG$ are natural and assemble into a morphism of cohomological delta functors. Injective sheaves on $U$ are acyclic for both functors: for injective $\mathcal I$ the sheaf $j_!\mathcal I$ is c-soft on $X$ [step 2.1, F4], whence $R^qL(\mathcal I)\cong R^q\Gamma_c(X,j_!\mathcal I)=0$ for $q>0$ by [step 3.1] and [F4], while $R^qG(\mathcal I)=0$ for $q>0$ because $\mathcal I$ is c-soft on $U$ and c-soft sheaves are $\Gamma_c$-acyclic [F4]; hence $R^\bullet L$ and $R^\bullet G$ are effaceable cohomological delta functors in positive degrees, therefore universal [F3, F8]. The morphism $R^\bullet(\zeta)$ extends the degree-zero isomorphism $\zeta$, so by the uniqueness of the isomorphism of universal delta functors extending a given degree-zero isomorphism it is an isomorphism in every degree [F8]; thus $R^qL\cong R^qG$ naturally, and composing with the canonical identification of [step 3.1] gives the natural isomorphism $R^q\Gamma_c(X,j_!\mathcal A)\cong R^q\Gamma_c(U,\mathcal A)$ of clause (1). [step 1.1, step 3.1, F3, F8]

5.1 **Clause (2), the derived isomorphisms.** Let $0\to\mathcal B\to J^0\to J^1\to\cdots$ be the injective resolution of $\mathcal B$ supplied by the fixed datum on $\mathrm{Ab}(Z)$ [F7, F8]; each $J^q$ is injective, hence c-soft on $Z$, hence $i_*J^q$ is c-soft on $X$ by [step 2.3] and acyclic for $\Gamma_c(X,-)$ [F4]; since $i_*$ is exact by [step 2.2], the complex $0\to i_*\mathcal B\to i_*J^0\to i_*J^1\to\cdots$ is a $\Gamma_c(X,-)$-acyclic resolution of $i_*\mathcal B$, and the acyclic-resolution theorem combined with the degreewise identification $\Gamma_c(X,i_*J^q)\cong\Gamma_c(Z,J^q)$ of [step 1.2] gives canonical isomorphisms $R^q\Gamma_c(X,i_*\mathcal B)\cong H^q(\Gamma_c(X,i_*J^\bullet_{\mathrm{del}}))\cong H^q(\Gamma_c(Z,J^\bullet_{\mathrm{del}}))\cong R^q\Gamma_c(Z,\mathcal B)$ for all $q\ge0$, where the last isomorphism is the acyclic-resolution comparison on $Z$ applied to the same resolution, whose terms are acyclic for $\Gamma_c(Z,-)$ because they are c-soft on $Z$ [F4]; naturality in $\mathcal B$ holds because the outer isomorphisms are the canonical ones for the fixed resolution data and the middle one is a degreewise natural identification. Equivalently, the same conclusion follows from the universality argument of [step 4.1] applied to the functors $M:=\Gamma_c(X,i_*(-))$ and $\Gamma_c(Z,-)$ on $\mathrm{Ab}(Z)$: their degree-zero identification is [step 1.2], injective sheaves are acyclic for both by [step 2.3] and [F4], and the induced morphism of universal delta functors is an isomorphism. [step 1.2, step 2.2, step 2.3, step 4.1, F4, F7, F8]

6.1 **Clause (3).** Let $Z$ be compact. For every sheaf $\mathcal B$ on $Z$ the support of a global section is closed in $Z$ [F5], hence a closed subset of the compact space $Z$, hence compact, so every global section is compactly supported: $\Gamma_c(Z,\mathcal B)=\Gamma(Z,\mathcal B)$ and $H^q_c(Z,\mathcal B)=H^q(Z,\mathcal B)$ for all $q$ [F3]. Substituting into the isomorphisms of [step 1.2] for $q=0$ and of [step 5.1] for $q\ge1$ gives $\Gamma_c(X,i_*\mathcal B)\cong\Gamma(Z,\mathcal B)$ and $R^q\Gamma_c(X,i_*\mathcal B)\cong H^q(Z,\mathcal B)$ for all $q\ge0$. [step 1.2, step 5.1, F3, F5]

7.1 **Conclusion.** Clause (1) is [step 1.1], [step 2.1] and [step 4.1]; clause (2) is [step 1.2], [step 2.3] and [step 5.1]; clause (3) is [step 6.1]. The Axiom of Choice is used only through the injective resolution data of [F7] and the comparison theorems of [F8], where dependent choice is required and follows from AC [F9]. [step 1.1, step 2.1, step 4.1, step 1.2, step 2.3, step 5.1, step 6.1, F9] ∎

## Remarks

- **What is and is not a definitional identity.** The identifications
  $\Gamma_c(X,j_!\mathcal A)=\Gamma_c(U,\mathcal A)$ and
  $\Gamma_c(X,i_*\mathcal B)=\Gamma_c(Z,\mathcal B)$ are equalities of
  subgroups of $\mathcal A(U)$ and $\mathcal B(Z)$; only after passing to
  derived functors does an argument (the acyclic-resolution comparison, or
  universality of the derived delta functors) enter.

- **Where closedness of $Z$ is used.** The complement $Z$ is closed because
  $U$ is open; this is used only through the facts that $Z$ is locally compact
  Hausdorff and that compactness of subsets of $Z$ may be read in $X$
  ([[thm-locally-compact-hausdorff-basics]]). The direct image $i_*$ along the
  closed inclusion is exact; the analogous statement fails for a general
  continuous map, and no such statement is claimed here.

- **Relation to the short exact sequence.** For every sheaf $\mathcal F$ on
  $X$ the sequence
  $0\to j_!(\mathcal F|_U)\to\mathcal F\to i_*(\mathcal F|_Z)\to0$ of
  [[lem-extension-by-zero-short-exact-sequence]] and the isomorphisms proved
  here together let compactly supported cohomology of $X$ be assembled from
  its open and closed pieces; this is the precise sense in which the lemma is
  the compact-support calculus of the pair $(U,Z)$.
