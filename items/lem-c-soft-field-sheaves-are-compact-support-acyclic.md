---
id: lem-c-soft-field-sheaves-are-compact-support-acyclic
kind: lemma
title: "Compact-support acyclicity of c-soft sheaves"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-c-soft-sheaf, def-compactly-supported-global-sections,
       def-sheaf-cohomology-derived-global-sections,
       def-support-of-a-sheaf-section,
       lem-sections-near-a-compact-set-are-sections-on-that-set,
       def-sheaf-on-topological-space, def-compact-space,
       def-locally-compact-space, def-hausdorff-space,
       thm-locally-compact-hausdorff-basics, def-subspace-topology-top,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact,
       lem-compactness-of-a-subspace-is-ambient, def-flasque-sheaf,
       def-extension-by-zero-abelian-sheaf,
       thm-extension-by-zero-adjunction-exactness,
       lem-extension-by-zero-short-exact-sequence,
       lem-morphisms-from-the-constant-sheaf-are-global-sections,
       thm-abelian-sheaves-have-enough-injectives,
       def-injective-object,
       thm-acyclic-resolution-theorem-for-right-derived-functors,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       lem-global-sections-left-exact, thm-exactness-of-sheaves-stalkwise,
       lem-stalk-inverse-image-sheaf,
       def-direct-sum-of-a-family-of-modules, def-sheaf-tensor-product,
       lem-stalk-tensor-product, thm-every-independent-set-extends-to-a-basis,
       lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions,
       thm-sheaf-morphism-isomorphism-stalkwise, lem-finite-choice,
       def-axiom-of-choice]
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
      locator: '§11.2, printed pp. 207-209: Proposition 11.2.2 (compact-support extension), Proposition 11.2.5 (restriction and extension by zero), Proposition 11.2.6 (exact compact-support sections), Proposition 11.2.7 (c-soft quotient), Proposition 11.2.8 (acyclicity framework), Corollary 11.2.3 (constant flat coefficients), and Example 11.2.14(iii) (flabby implies c-soft); the complete arguments for the clauses used here are supplied locally'
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §12 Flasque sheaves (Lemma 12.2, tag 09SX, injective sheaves are flasque)"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: 'Lemma 20.12.2 (tag 09SX): injective sheaves of modules are flasque; its proof refers to Lemma 20.8.1 (tag 01EA), which proves surjectivity of restriction via extension-by-zero representing modules. Abelian sheaves are the constant-Z-ring case'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.4: resolutions by Y-soft sheaves and the finite-dimensionality criterion for f_!, the pattern used for the acyclicity and preservation clauses'
---

## Statement

Assume the Axiom of Choice. Let $X$ be a locally compact Hausdorff space and
let $\mathcal F$ be a sheaf of abelian groups on $X$
([[def-sheaf-on-topological-space]]); every clause applies in particular to
sheaves of $k$-vector spaces, and the tensor clause of (4) is stated only
there. Then:

1. if $\mathcal F$ is c-soft ([[def-c-soft-sheaf]]), every section of
   $\mathcal F$ over a compact subset $K\subseteq X$ extends to a compactly
   supported global section whose support is contained in any prescribed open
   neighbourhood of $K$;
2. every injective abelian sheaf on $X$ is c-soft;
3. if $\mathcal F$ is c-soft, then $H^q_c(X,\mathcal F)=0$ for every $q>0$
   ([[def-compactly-supported-global-sections]]); when $X$ is compact this is
   the vanishing of the sheaf cohomology $H^q(X,\mathcal F)$
   ([[def-sheaf-cohomology-derived-global-sections]]);
4. c-softness is preserved by restriction to open subsets, by restriction to
   closed subsets, by extension by zero along an open inclusion, and by finite
   direct sums of sheaves of abelian groups; for sheaves of $k$-vector spaces
   it is also preserved by tensor product with a constant $k$-vector space;
5. if $0\to\mathcal F'\xrightarrow{\alpha}\mathcal F\xrightarrow{\beta}\mathcal F''\to0$
   is a short exact sequence of sheaves of abelian groups and $\mathcal F'$ is
   c-soft, then every section of $\mathcal F''$ over a compact subset lifts to
   a section of $\mathcal F$ over an open neighbourhood of it, and the induced
   sequence
   $0\to\Gamma_c(X,\mathcal F')\to\Gamma_c(X,\mathcal F)\to\Gamma_c(X,\mathcal F'')\to0$
   is exact; if $\mathcal F'$ and $\mathcal F$ are c-soft then
   $\mathcal F''$ is c-soft.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a short exact sequence $0\to\mathcal F'\xrightarrow{\alpha}\mathcal F\xrightarrow{\beta}\mathcal F''\to0$ of sheaves of abelian groups on $X$ and the Axiom of Choice.

[F1] c-softness of $\mathcal F$ means that $\Gamma(X,\mathcal F)\to\Gamma(K,i^{-1}\mathcal F)$ is onto for every compact $K\subseteq X$, equivalently that every section of $\mathcal F$ over an open neighbourhood of $K$ agrees with a global section near $K$; flasque implies c-soft ([[def-c-soft-sheaf]]). The functor $\Gamma_c(X,-)$ is additive and left exact, its right derived functors $H^q_c(X,-)$ are computed from the injective resolution datum of [[thm-abelian-sheaves-have-enough-injectives]] and form a cohomological delta functor with long exact sequences, and $H^q_c(X,-)=H^q(X,-)$ for $X$ compact ([[def-compactly-supported-global-sections]], [[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[def-sheaf-cohomology-derived-global-sections]]).

[F2] Sections over a compact set: the canonical map $\varinjlim_{U\supseteq K}\mathcal F(U)\to\Gamma(K,i^{-1}\mathcal F)$ is an isomorphism, and for pairwise disjoint compact $K_1,\dots,K_m$ and sections $s_j$ over open neighbourhoods $U_j$ there are an open neighbourhood $U$ of the union and $s\in\mathcal F(U)$ with $s=s_j$ on an open neighbourhood $W_j\subseteq U_j$ of $K_j$ ([[lem-sections-near-a-compact-set-are-sections-on-that-set]]). Consequently two sections over a compact set that agree as classes agree near the set, and sections over two compact sets agreeing on the intersection glue over the union.

[F3] Topology: $X$ has a neighbourhood base of compact sets, and for open $W\ni x$ there is open $V$ with $x\in V\subseteq\overline V\subseteq W$ and $\overline V$ compact ([[thm-locally-compact-hausdorff-basics]]); compact subsets of the Hausdorff space $X$ are closed and two disjoint compact subsets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); a closed subset of a compact space is compact and a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]]); a compact Hausdorff space is normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[F4] Sheaf axioms and exactness: sections of a sheaf are determined by their germs and compatible local sections glue ([[def-sheaf-on-topological-space]]); a sequence of sheaves is exact exactly when it is stalkwise exact, and a monomorphism of sheaves has injective stalk maps ([[thm-exactness-of-sheaves-stalkwise]]); global sections are left exact ([[lem-global-sections-left-exact]]). Restriction to a subspace is exact: its stalks are the original stalks ([[lem-stalk-inverse-image-sheaf]]), so stalkwise exactness applies.

[F5] Extension by zero and injectives: for the inclusion $j:U\hookrightarrow X$ of an open subspace, $j_!$ is extension by zero ([[def-extension-by-zero-abelian-sheaf]]), the adjunction $\operatorname{Hom}_X(j_!\mathcal G,\mathcal H)\cong\operatorname{Hom}_U(\mathcal G,j^{-1}\mathcal H)$ holds and $j_!$ is exact ([[thm-extension-by-zero-adjunction-exactness]]), and for the constant sheaves the canonical map $j_!\mathbb Z_U\to\mathbb Z_X$ is a monomorphism appearing in the short exact sequence of [[lem-extension-by-zero-short-exact-sequence]]. Morphisms out of the constant sheaf are global sections, $\operatorname{Hom}(\mathbb Z_X,\mathcal H)\cong\Gamma(X,\mathcal H)$ and $\operatorname{Hom}(\mathbb Z_U,\mathcal H|_U)\cong\Gamma(U,\mathcal H)$ ([[lem-morphisms-from-the-constant-sheaf-are-global-sections]]). An injective object of $\mathrm{Ab}(X)$ is an abelian sheaf admitting extensions along monomorphisms ([[def-injective-object]]); flasque means that all restriction maps $\mathcal H(V)\to\mathcal H(U)$ for open $U\subseteq V$ are surjective ([[def-flasque-sheaf]]).

[F6] Direct sums and tensor products: for a finite family of abelian groups the direct sum is their coproduct ([[def-direct-sum-of-a-family-of-modules]]), the tensor product of sheaves is stalkwise, $(\mathcal F\otimes\mathcal G)_x\cong\mathcal F_x\otimes\mathcal G_x$ ([[lem-stalk-tensor-product]], [[def-sheaf-tensor-product]]); under AC every vector space has a basis ([[thm-every-independent-set-extends-to-a-basis]], with the empty independent set), and constant sheaf sections are locally constant coefficient functions ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]); a morphism of sheaves is an isomorphism as soon as it is one on stalks ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F7] The topological patching uses finite selections ([[lem-finite-choice]]). The Axiom of Choice supplies the basis used for arbitrary constant-vector coefficients in step 2.3, the injective resolution datum and the derived-functor statements of [F1].

## Proof

**Proof technique:** direct.

1.1 Let $C_1,C_2\subseteq X$ be compact, let $V_1,V_2$ be open with $C_k\subseteq V_k$, let $s_k\in\mathcal F(V_k)$, and suppose that $W\subseteq V_1\cap V_2$ is open with $C_1\cap C_2\subseteq W$ and $s_1|_W=s_2|_W$. Then there are an open $V\supseteq C_1\cup C_2$ and $s\in\mathcal F(V)$ with $s=s_k$ on an open neighbourhood of $C_k$ for $k=1,2$: the sets $A:=C_1\setminus W$ and $B:=C_2\setminus W$ are compact and disjoint ([F3]), hence separated by disjoint open $G_1\supseteq A$, $G_2\supseteq B$ ([F3]); with $V_k':=V_k\cap(G_k\cup W)$ one has $C_k\subseteq V_k'$, $V_1'\cap V_2'\subseteq W$, so $s_1|_{V_1'}$ and $s_2|_{V_2'}$ glue to the required $s$ over $V_1'\cup V_2'\supseteq C_1\cup C_2$ ([F4]). [F3, F4, construct]

1.2 Let $C\subseteq X$ be compact, $B\subseteq X$ closed, $V\subseteq X$ open with $C\cup B\subseteq V$, $s_C\in\mathcal F(V)$ and $s_B\in\mathcal F(V)$ with $s_C|_W=s_B|_W$ for an open $W\subseteq V$ containing $C\cap B$. Then there are an open $V_0\subseteq V$ with $C\cup B\subseteq V_0$ and $s_0\in\mathcal F(V_0)$ with $s_0=s_C$ on an open neighbourhood of $C$ and $s_0=s_B$ on an open neighbourhood of $B$. Indeed $A:=C\setminus W$ is compact, $B_0:=B\setminus W$ is closed, and $A\cap B_0=\varnothing$; covering $A$ by finitely many open $V_x$ with $x\in V_x\subseteq\overline{V_x}\subseteq X\setminus B_0$ and $\overline{V_x}$ compact ([F3]) and setting $G_1:=\bigcup V_x\supseteq A$, $G_2:=X\setminus\bigcup\overline{V_x}\supseteq B\setminus W$ one has $G_1\cap G_2=\varnothing$; now $V_0':=V\cap(G_1\cup W)$ contains $C$, $V_0'':=V\cap(G_2\cup W)$ contains $B$, and $V_0'\cap V_0''\subseteq W$, so the restrictions of $s_C$ and $s_B$ glue ([F3, F4]). [F3, F4, construct]

1.3 **Clause (1).** Let $\mathcal F$ be c-soft, let $K\subseteq X$ be compact and let $W\subseteq X$ be an open neighbourhood of $K$; let $\sigma\in\Gamma(K,i^{-1}\mathcal F)$ be represented by $s\in\mathcal F(U)$ for an open $U\supseteq K$ ([F2]), and replace $U$ by $U\cap W$. Choose open $W_0,W_1$ with $K\subseteq W_0\subseteq\overline{W_0}\subseteq W_1\subseteq\overline{W_1}\subseteq W$ and $\overline{W_1}$ compact (finitely many applications of the shrinking of [F3]); put $C:=\overline{W_1}\setminus W_0$, a compact set disjoint from $K$. Since $\mathcal F$ is c-soft, $[s]\in\Gamma(K,i^{-1}\mathcal F)$ has a preimage $t_1\in\Gamma(X,\mathcal F)$ ([F1]); by [F2] $t_1=s$ on an open neighbourhood of $K$. Apply the gluing of [F2] to the disjoint compact sets $K$ and $C$ with the sections $t_1$ (over $X$) and $0$ (over $X$): there are an open $V\supseteq K\cup C$ and $u\in\mathcal F(V)$ with $u=t_1$ on an open neighbourhood of $K$ and $u=0$ on an open neighbourhood of $C$. Choose a compact $K'$ with $K\cup C\subseteq K'\subseteq V$ ([F3]) and extend the class of $u|_{K'}$ to a global section $t_2\in\Gamma(X,\mathcal F)$ by c-softness ([F1]); then $t_2=u$ on an open neighbourhood of $K'$ by [F2]. Finally $t_2=0$ on the open set $W_1\setminus\overline{W_0}$: it is contained in $C\subseteq K'$ and $u=0$ near $C$; hence $t_2|_{W_1}$ and $0$ agree on $W_1\setminus\overline{W_0}$ and glue across the open cover $\{W_1,X\setminus\overline{W_0}\}$ of $X$ to a section $t\in\Gamma(X,\mathcal F)$ with $t=t_2$ on $W_1$ and $t=0$ on $X\setminus\overline{W_0}$ ([F4]). Then $\operatorname{Supp}(t)\subseteq\overline{W_0}\subseteq W$, so $t$ is compactly supported with support inside the prescribed $W$, and $t=t_2=t_1=s$ near $K$, so $t$ represents $\sigma$ over $K$. [F1, F2, F3, F4, construct]

1.4 **Clause (2).** Let $\mathcal I$ be an injective abelian sheaf and let $U\subseteq X$ be open. By [F5] the canonical map $j_!\mathbb Z_U\to\mathbb Z_X$ is a monomorphism, so injectivity of $\mathcal I$ makes $\operatorname{Hom}(\mathbb Z_X,\mathcal I)\to\operatorname{Hom}(j_!\mathbb Z_U,\mathcal I)$ surjective; under the adjunction and the identifications of [F5], $\operatorname{Hom}(\mathbb Z_X,\mathcal I)\cong\Gamma(X,\mathcal I)$ and $\operatorname{Hom}(j_!\mathbb Z_U,\mathcal I)\cong\operatorname{Hom}_U(\mathbb Z_U,\mathcal I|_U)\cong\Gamma(U,\mathcal I)$, and the composite is the restriction map. Hence every section of $\mathcal I$ over an open set extends to $X$, that is, $\mathcal I$ is flasque, and a flasque sheaf is c-soft by [F1]. [F1, F5]

2.1 **Lifting over a compact space.** Let $Y$ be a compact Hausdorff space, let $0\to\mathcal A\to\mathcal B\xrightarrow{\gamma}\mathcal C\to0$ be a short exact sequence of abelian sheaves on $Y$ with $\mathcal A$ c-soft on $Y$, and let $c\in\Gamma(Y,\mathcal C)$. Then $c$ has a preimage in $\Gamma(Y,\mathcal B)$. Indeed, the family of all pairs $(U,b)$ with $U\subseteq Y$ open, $b\in\mathcal B(U)$ and $\gamma_U(b)=c|_U$ is cut out by a formula and covers $Y$ (the stalk maps of $\gamma$ are onto, [F4]); by compactness and normality of $Y$ ([F3]) there are finitely many compact $K_1,\dots,K_m$ covering $Y$ with lifts $b_i\in\mathcal B(V_i)$ over open $V_i\supseteq K_i$. We show by induction on $m$ that the pieces can be corrected, without changing their images under $\gamma$, so that they agree near all pairwise intersections and glue ([F2]); for $m=1$ there is nothing to do. For $m\ge2$, the induction hypothesis gives a section $b'$ over an open neighbourhood of $D:=K_1\cup\dots\cup K_{m-1}$ with $\gamma(b')=c$ there; over an open neighbourhood of the compact set $D\cap K_m$ the difference $b'-b_m$ has vanishing $\gamma$, so it lies in the image of $\mathcal A$ ([F4]); the corresponding section of $\mathcal A$ over that neighbourhood extends to $Y$ by c-softness of $\mathcal A$, and adding its image to $b_m$ keeps $\gamma(b_m)=c$ while making $b'-b_m$ vanish near $D\cap K_m$; the gluing of step 1.1 applied to the compact pieces $D$ and $K_m$ then produces a section over an open neighbourhood of $D\cup K_m$ mapping to $c$, completing the induction. Since $K_1\cup\dots\cup K_m=Y$ and a neighbourhood of $Y$ in $Y$ is $Y$, this is a preimage of $c$ in $\Gamma(Y,\mathcal B)$. [step 1.1, F1, F2, F3, F4, construct]

2.2 **Clause (4), the topological preservations.** Let $\mathcal F$ be c-soft. (i) For an open subspace $U\subseteq X$: a compact subset of $U$ is compact in $X$ ([F3]) and a section of $\mathcal F|_U$ over it is represented by an ambient section over a neighbourhood, which clause (1) extends with support control into any prescribed neighbourhood; restricting the result to $U$ extends the given section, so $\mathcal F|_U$ is c-soft. (ii) For a closed subspace $Z\subseteq X$: compact subsets of $Z$ are compact in $X$ ([F3]) and a section of $\mathcal F|_Z$ over one is a class of ambient sections over neighbourhoods of it in $X$ ([F2]); clause (1) extends such a class, and restricting to $Z$ gives the required extension, so $\mathcal F|_Z$ is c-soft. (iii) Let $\mathcal A$ be any c-soft sheaf on the open subspace $U$, which is locally compact Hausdorff by [F3], and put $\mathcal G:=j_!\mathcal A$. Its stalks are $\mathcal A_x$ on $U$ and zero outside $U$, by the local support condition of [F5]. Let $K\subseteq X$ be compact and represent a section over it by $s\in\mathcal G(V)$, $V\supseteq K$ open [F2]. The set $L:=K\cap\operatorname{Supp}(s)$ is closed in $K$, hence compact, and lies in $V\cap U$. If $L=\varnothing$, the zero global section has the required germs on $K$. Otherwise choose opens $W_0,W_1$ with $L\subseteq W_0\subseteq\overline{W_0}\subseteq W_1\subseteq\overline{W_1}\subseteq V\cap U$ and compact closures [F3]. In $U$ the sets $T:=K\cap\overline{W_1}$ and $C:=\overline{W_1}\setminus W_0$ are compact. The class of $s$ on $T$ and the zero class on $C$ agree on $T\cap C$, since every such point belongs to $K\setminus L$ and has zero germ of $s$. By the fusion of step 1.1 and the neighbourhood representation of [F2], they give a section near $T\cup C$ in $U$. C-softness of $\mathcal A$ extends this class to $g\in\Gamma(U,\mathcal A)$, agreeing with $s$ near $T$ and with zero near $C$. Glue $g|_{W_1}$ with zero on $U\setminus\overline{W_0}$; the overlap lies in $C$. The result $e\in\Gamma(U,\mathcal A)$ has support closed and contained in the compact $\overline{W_0}\subseteq U$, hence lies in $\Gamma_c(X,j_!\mathcal A)$. On $K\cap W_1$ it has the germs of $s$, and on $K\setminus\overline{W_0}$ both germs vanish because $L\subseteq W_0$. Thus $e$ represents the original section over $K$, proving c-softness of $j_!\mathcal A$. [step 1.1, step 1.3, F1, F2, F3, F4, F5]


2.3 **Clause (4), finite sums and constant-vector tensors.** For a finite family of c-soft abelian sheaves, sections of the direct sum are finite tuples of sections: componentwise locality and gluing show that the finite product presheaf is a sheaf, and the finite product is also the direct sum. A class over a compact $K$ is represented by a tuple on a neighbourhood of $K$ [F2]; extend each component by step 1.3 and form the tuple of global sections. This proves c-softness of finite direct sums. Now assume $\mathcal F$ is a sheaf of $k$-vector spaces, let $M$ be any $k$-vector space and $\mathcal H:=\mathcal F\otimes_{k_X}M_X$. Choose a basis $B$ of $M$ under AC [F6, F7]. Each coordinate functional $\lambda_b:M\to k$ induces a sheaf morphism $\mathcal H\to\mathcal F$ via $\mathrm{id}\otimes(\lambda_b)_X$ and the canonical $\mathcal F\otimes_{k_X}k_X\cong\mathcal F$; the latter map is multiplication and is an isomorphism on stalks [F6]. A germ of $\mathcal H$ is a finite sum of $\mathcal F$-germs times basis vectors, by [F6]. Represent its coefficients by local sections; equality of germs gives the same finite-sum expression on a smaller neighbourhood. Thus a section $s$ representing a class over compact $K$ has finite coordinate expressions locally near $K$. Compactness gives finitely many such neighbourhoods, whose union $O$ contains $K$ and whose expressions use one finite subset $B_0\subseteq B$. Put $s_b:=(\mathrm{id}\otimes\lambda_b)(s|_O)$ for $b\in B_0$; uniqueness of basis coordinates and locality give $s|_O=\sum_{b\in B_0}s_b\otimes b$. Extend the finitely many $s_b$ to global sections $t_b$ agreeing near $K$ by step 1.3. Then $\sum_{b\in B_0}t_b\otimes b$ is a global section of $\mathcal H$ agreeing with $s$ near $K$. The zero-coefficient case $M=0$ is immediate. This proves the tensor clause for arbitrary constant $M$. [step 1.3, F2, F3, F4, F6, F7]


3.1 **Clause (5), local lifting.** Let $\mathcal F'$ be c-soft, let $K\subseteq X$ be compact and let $\sigma''\in\Gamma(K,i^{-1}\mathcal F'')$ be represented by a section $s''\in\mathcal F''(U)$ over an open $U\supseteq K$ ([F2]). Choose open $U_0$ with $K\subseteq U_0\subseteq\overline{U_0}\subseteq U$ and $\overline{U_0}$ compact ([F3]). The restricted sheaves on the compact space $\overline{U_0}$ form a short exact sequence whose kernel is c-soft on $\overline{U_0}$: a compact subset of $\overline{U_0}$ is compact in $X$ ([F3]) and a section of the restricted kernel over it is represented by an ambient section of $\mathcal F'$ over an open neighbourhood ([F2]), which c-softness of $\mathcal F'$ extends to $X$. Hence the lifting lemma of step 2.1 applies to the compact space $\overline{U_0}$ and the class of $s''$ over it: there is $t\in\Gamma(\overline{U_0},i^{-1}\mathcal F)$ with $\beta(t)$ equal to that class. Represent $t$ by a section of $\mathcal F$ over an open $V\supseteq\overline{U_0}$ ([F2]); shrinking $V$ we may assume that the image of that section under $\beta$ equals $s''$ on $V$ (they agree as classes over $\overline{U_0}$, hence near it, [F2]). This section of $\mathcal F$ over the open neighbourhood $V$ of $K$ lifts the given class $\sigma''$; since $K$ and $\sigma''$ were arbitrary, clause (5) holds locally. [step 2.1, F1, F2, F3, F4]

3.2 **Clause (5), compact-support exactness.** Let $\mathcal F'$ be c-soft; we show that $\Gamma_c(\beta):\Gamma_c(X,\mathcal F)\to\Gamma_c(X,\mathcal F'')$ is surjective. Let $s''\in\Gamma_c(X,\mathcal F'')$ and put $S:=\operatorname{Supp}(s'')$, compact. Choose open $W_0,W_1$ with $S\subseteq W_0\subseteq\overline{W_0}\subseteq W_1\subseteq\overline{W_1}$ and $\overline{W_1}$ compact (finitely many shrinkings, [F3]); put $C:=\overline{W_1}\setminus W_0$, a compact set disjoint from $S$. Apply the lifting lemma of step 2.1 to the compact space $\overline{W_1}$ and the class of $s''$ over it: there is $t\in\Gamma(\overline{W_1},i^{-1}\mathcal F)$ with $\beta(t)=s''|_{\overline{W_1}}$; represent $t$ by $a\in\mathcal F(V_0)$ over an open $V_0\supseteq\overline{W_1}$ with $\beta(a)=s''|_{V_0}$ ([F2]). On the open set $O:=V_0\setminus S$ the section $a$ has $\beta(a)=s''=0$, hence $a|_O=\alpha(e)$ for a uniquely determined $e\in\mathcal F'(O)$: the family of all open $O_x\subseteq V_0$ over which $a$ lies in the image of $\alpha$ covers $V_0\setminus S$ ([F4], the kernel of $\beta$ is the image of $\alpha$ as subsheaves) and the local sections glue because $\alpha$ is injective on sections ([F4]). The compact set $C=\overline{W_1}\setminus W_0$ is contained in $O$, so $e$ is a section of the c-soft $\mathcal F'$ over an open neighbourhood of the compact set $C$; by clause (1) applied to $\mathcal F'$ there is $e_X\in\Gamma_c(X,\mathcal F')$ with $e_X=e$ near $C$ ([F2]). Set $a_1:=a-\alpha(e_X)|_{V_0}\in\mathcal F(V_0)$: then $\beta(a_1)=s''|_{V_0}$, and $a_1$ vanishes on the open set $O_C:=\{\,x\in V_0: a_x=\alpha(e_X)_x\,\}$, which contains $C$. The overlap $W_1\setminus\overline{W_0}$ of the open cover $\{W_1,X\setminus\overline{W_0}\}$ of $X$ is contained in $C\subseteq O_C$, where $a_1$ vanishes, so $a_1|_{W_1}$ and the zero section on $X\setminus\overline{W_0}$ agree there and glue to a section $t'\in\Gamma(X,\mathcal F)$ with $t'=a_1$ on $W_1$ and $t'=0$ on $X\setminus\overline{W_0}$ ([F4]). Then $\operatorname{Supp}(t')\subseteq\overline{W_0}$ is compact, and $\beta(t')=s''$: on $W_1$ one has $\beta(a_1)=s''$, while on $X\setminus\overline{W_0}$ both sides vanish since $S\subseteq W_0\subseteq\overline{W_0}$, and $W_1\cup(X\setminus\overline{W_0})=X$. Therefore $t'\in\Gamma_c(X,\mathcal F)$ with $\Gamma_c(\beta)(t')=s''$. [step 2.1, step 1.3, F1, F2, F3, F4, construct]

4.1 **Clause (5), quotient.** Let $\mathcal F'$ and $\mathcal F$ be c-soft. Let $K\subseteq X$ be compact and let $\sigma''\in\Gamma(K,i^{-1}\mathcal F'')$: by step 3.1 it is lifted by a section $u$ of $\mathcal F$ over an open neighbourhood of $K$, and clause (1) applied to the c-soft $\mathcal F$ with the compact set $K$ and the prescribed neighbourhood of $u$ produces $t\in\Gamma_c(X,\mathcal F)$ with $t=u$ near $K$; then $\beta(t)\in\Gamma(X,\mathcal F'')$ restricts to $\sigma''$ over $K$, so every class over a compact set extends to a global section and $\mathcal F''$ is c-soft. [step 1.3, step 3.1, F1]

5.1 **Clause (3).** Let $\mathcal F$ be c-soft and resolve it by injectives, $0\to\mathcal F\to I^0\to I^1\to\cdots$, using the functorial datum of [F1]; each $I^j$ is c-soft by clause (2) ([[thm-abelian-sheaves-have-enough-injectives]] supplies the resolution terms as injective objects). The syzygies $Z^0:=\mathcal F$, $Z^{j+1}:=\operatorname{im}(I^j\to I^{j+1})$ are c-soft: $Z^1=\operatorname{coker}(\mathcal F\to I^0)$ is a quotient of c-soft sheaves in $0\to\mathcal F\to I^0\to Z^1\to0$, and inductively $Z^{j+1}$ is a quotient of c-soft sheaves in $0\to Z^j\to I^j\to Z^{j+1}\to0$ (clause (5)); hence each short exact sequence $0\to Z^j\to I^j\to Z^{j+1}\to0$ consists of c-soft sheaves, so by clause (5) the sequence $0\to\Gamma_c(X,Z^j)\to\Gamma_c(X,I^j)\to\Gamma_c(X,Z^{j+1})\to0$ is exact. Therefore the augmented complex $0\to\Gamma_c(X,\mathcal F)\to\Gamma_c(X,I^0)\to\Gamma_c(X,I^1)\to\cdots$ is exact, and $H^q_c(X,\mathcal F)=H^q(\Gamma_c(X,I^\bullet_{\mathrm{del}}))=0$ for $q>0$ ([F1]). For $X$ compact the identification $H^q_c(X,\mathcal F)=H^q(X,\mathcal F)$ of [F1] gives the vanishing of sheaf cohomology. [step 1.4, step 4.1, F1]

6.1 **Conclusion.** Clause (1) is step 1.3, clause (2) is step 1.4, clause (3) is step 5.1, clause (4) is steps 2.2 and 2.3, and clause (5) is steps 3.1, 3.2 and 4.1. The Axiom of Choice supplies the coefficient basis of step 2.3 and the injective resolution datum and derived-functor statements of [F1]; all topological selections are finite. [step 1.3, step 1.4, step 3.1, step 3.2, step 4.1, step 5.1, step 2.2, step 2.3, F7] ∎

## Remarks

- **Where c-softness of the kernel is spent.** The lifting and compact-support exactness of steps 3.1 and 3.2 use the c-softness of the kernel, and only of the kernel: the corrected lift is glued directly with zero on the complementary open set, so the middle term is not assumed c-soft in the exactness clause, in agreement with Schapira's Proposition 11.2.6. The middle term's c-softness is used only in step 4.1, where it makes the quotient c-soft (Schapira's Proposition 11.2.7).

- **What is not claimed.** Schapira's Proposition 11.2.4 also covers small filtered colimits and arbitrary small direct sums of c-soft sheaves; those infinite forms are not needed by this pair and are not claimed here, since the coproduct machinery for sheaves is not developed in the library. The tensor clause treats arbitrary constant vector-space coefficients by a finite-coordinate argument near each compact set; it does not assert the corresponding result for general flat sheaves of coefficients.
