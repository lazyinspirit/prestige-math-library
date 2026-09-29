---
id: lem-ringed-space-module-sheaves-enough-injectives
kind: lemma
title: Enough injective sheaves of modules
status: published
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-kernel-cokernel-image-sheaves
  - thm-abelian-sheaves-form-abelian-category
  - def-exact-sequence-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - def-sheafification
  - thm-sheafification-universal-property
  - thm-sheafification-preserves-stalks
  - def-extension-by-zero-abelian-sheaf
  - thm-extension-by-zero-adjunction-exactness
  - thm-module-categories-are-grothendieck-categories
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-grothendieck-category
  - def-the-axioms-ab5-and-ab5-star
  - thm-ab5-is-equivalent-to-exactness-of-filtered-colimits
  - def-generator-and-cogenerator-of-a-category
  - def-separating-set-and-coseparating-set
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
  - cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution
  - def-injective-resolution-in-an-abelian-category
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Tag 07D6 (examples of Grothendieck abelian categories) and Tag 05AB (injectives in Grothendieck categories)"
      url: "https://stacks.math.columbia.edu/tag/07D6"
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, §§30.2–30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), §§19.1, 19.6, 19.9, 28.1–28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice, and let $(X,\mathcal O_X)$ be a ringed space. Then
the abelian category $\mathrm{Mod}(\mathcal O_X)$ of $\mathcal O_X$-modules has
enough injectives: every $\mathcal O_X$-module embeds into an injective
$\mathcal O_X$-module, and the functorial injective embedding supplied by the
Grothendieck injective-embedding theorem for Grothendieck categories supplies,
by iteration of cokernels, one specific injective resolution
$$0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$$
to each $\mathcal O_X$-module $\mathcal F$ with no further selection
([[def-injective-resolution-in-an-abelian-category]]). The Axiom of Choice
enters exactly through that embedding theorem applied to
$\mathrm{Mod}(\mathcal O_X)$; the category-theoretic verification below is
choice-free.

## Facts & Assumptions
**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and a ringed space $(X,\mathcal O_X)$.

[F1] An $\mathcal O_X$-module is a sheaf of abelian groups whose section groups $\mathcal F(U)$ are $\mathcal O_X(U)$-modules compatibly with restriction, and a morphism of $\mathcal O_X$-modules is a morphism of underlying sheaves whose components are $\mathcal O_X(U)$-linear. ([[def-module-on-ringed-space]])

[F2] The category of $\mathcal O_X$-modules on a ringed space is an abelian category, by [[thm-abelian-sheaves-form-abelian-category]]. Kernels are computed objectwise, and cokernels and images by sheafifying the objectwise module constructions ([[def-kernel-cokernel-image-sheaves]]). Forgetting the module action leaves the same objectwise groups and the same sheafification, so these have the same underlying abelian sheaves.

[F3] A sequence of $\mathcal O_X$-modules is exact if and only if its underlying sequence of abelian sheaves is exact, and a sequence of sheaves of abelian groups is exact if and only if it is exact on every stalk. ([[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]])

[F4] Sheafification assigns to a presheaf $\mathcal P$ a sheaf $a\mathcal P$ with a unit $\eta:\mathcal P\to a\mathcal P$, every presheaf morphism $\mathcal P\to\mathcal G$ into a sheaf factors uniquely through $\eta$, and $\eta$ induces a bijection on every stalk. ([[def-sheafification]], [[thm-sheafification-universal-property]], [[thm-sheafification-preserves-stalks]])

[F5] For an open $U\subseteq X$ with inclusion $j_U:U\to X$, extension by zero of a sheaf $\mathcal F$ on $U$ is $(j_{U!}\mathcal F)(V)=\{s\in\mathcal F(V\cap U):\operatorname{Supp}(s)\text{ is closed in }V\}$, and there is a natural bijection $\operatorname{Hom}_X(j_{U!}\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j_U^{-1}\mathcal G)$. ([[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]])

[F6] For every ring $R$ the category $R\text{-}\mathbf{Mod}$ is a Grothendieck category, so its filtered colimits are exact; in particular filtered colimits of abelian groups are exact. ([[thm-module-categories-are-grothendieck-categories]], [[lem-filtered-colimits-of-abelian-groups-are-exact]])

[F7] A Grothendieck category is an abelian category satisfying AB5 and having a generator, an object $G$ being a generator when every pair of distinct morphisms is separated by some morphism out of $G$; for a cocomplete abelian category AB5 is equivalent to exactness of all small filtered colimit functors. ([[def-grothendieck-category]], [[def-the-axioms-ab5-and-ab5-star]], [[thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]], [[def-generator-and-cogenerator-of-a-category]], [[def-separating-set-and-coseparating-set]])

[F8] Under AC every locally small Grothendieck abelian category admits a functorial monomorphism $M\rightarrowtail E(M)$ into an injective object, and every object admits an injective resolution. ([[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]], [[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]])

[F9] Two elements of a small filtered colimit of sets agree if and only if they are eventually equal, i.e. become equal after applying suitable arrows of the index category to a common object. ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]])



## Proof

**Proof technique:** direct: verify the three Grothendieck properties of $\mathrm{Mod}(\mathcal O_X)$ by explicit constructions (objectwise coproduct followed by sheafification, stalkwise filtered colimits, and the coproduct of extension-by-zero structure sheaves as a generator), then apply the Grothendieck injective-embedding theorem and iterate cokernels.

1.1 A morphism $\varphi:\mathcal F\to\mathcal G$ of $\mathcal O_X$-modules is a family of $\mathcal O_X(U)$-linear maps $\varphi_U:\mathcal F(U)\to\mathcal G(U)$ over the open sets of $X$, compatible with restrictions, and it is determined by that family [F1]. Hence $\operatorname{Hom}(\mathcal F,\mathcal G)$ is a subset of $\prod_U\operatorname{Hom}_{\mathcal O_X(U)}(\mathcal F(U),\mathcal G(U))$, a product of sets indexed by the set of open subsets of $X$, so it is a set and $\mathrm{Mod}(\mathcal O_X)$ is locally small. [F1, given]

1.2 Let $(\mathcal F_i)_{i\in I}$ be a set-indexed family of $\mathcal O_X$-modules and let $\mathcal P$ be the presheaf $U\mapsto\bigoplus_{i\in I}\mathcal F_i(U)$ with componentwise restriction maps and the diagonal action $a\cdot(s_i)_i=(a\cdot s_i)_i$ of $a\in\mathcal O_X(U)$; this is a presheaf of $\mathcal O_X$-modules, so in particular a presheaf of sets, with sheafification $\eta:\mathcal P\to a\mathcal P$ [F1, F4]. [F1, F4, construct]

1.3 Because $R\text{-}\mathbf{Mod}$ is a Grothendieck category for every ring $R$, every small filtered colimit of $R$-modules is exact and the filtered colimit functor preserves finite limits; in particular a filtered colimit of short exact sequences of modules over one ring is short exact. [F6]

1.4 Fix an open $U\subseteq X$, write $\mathcal O_U=\mathcal O_X|_U$ and $G_U:=j_{U!}\mathcal O_U$, the extension by zero of the structure sheaf restricted to $U$ [F5]. Its sections are $G_U(V)=\{a\in\mathcal O_X(V\cap U):\operatorname{Supp}(a)\text{ closed in }V\}$, and multiplication by $b\in\mathcal O_X(V)$ is $(b|_{V\cap U})a$; its support remains inside $\operatorname{Supp}(a)$, so this makes $G_U$ an $\mathcal O_X$-module. For $s\in\mathcal F(U)$ and $a\in G_U(V)$, the product $a\,s|_{V\cap U}$ is a section of $\mathcal F$ on $V\cap U$. On the open complement $V\setminus\operatorname{Supp}(a)$ take the zero section. The two sections agree on their overlap because $a$ vanishes there, so they glue uniquely to a section $\varphi_V(a)\in\mathcal F(V)$. This construction commutes with restriction and is $\mathcal O_X$-linear, hence defines $\varphi:G_U\to\mathcal F$ with $\varphi_U(1_U)=s$. Conversely, on $V\cap U$ any $\mathcal O_X$-linear morphism with this value sends $a$ to $a\,s|_{V\cap U}$, while on $V\setminus\operatorname{Supp}(a)$ it sends the zero section to zero; the same open cover therefore makes it unique. Thus $\operatorname{Hom}_{\mathrm{Mod}(\mathcal O_X)}(G_U,\mathcal F)\cong\mathcal F(U)$. [F1, F5, construct]

1.5 A Grothendieck category is an abelian category satisfying AB5 and possessing a generator; for a cocomplete abelian category AB5 holds if and only if every small filtered colimit functor is exact. [F7]

1.6 The Axiom of Choice is available as a hypothesis and will be applied below, where the Grothendieck injective-embedding theorem is invoked for a locally small Grothendieck category. [F8, given]

2.1 The presheaf $\mathcal P^+$ of the plus construction carries an $\mathcal O_X$-module structure for which $\eta$ is linear, and the same holds for $a\mathcal P=(\mathcal P^+)^+$: for a germ-compatible presentation $(U_i,s_i)$ over $U$ and $a\in\mathcal O_X(U)$, the class of $(U_i,a|_{U_i}\cdot s_i)$ is independent of the chosen representative because multiplying representatives by $a$ preserves equality of germs, and the class of $(U_i\cap V_j,s_i|_{U_i\cap V_j}+t_j|_{U_i\cap V_j})$ defines the sum of two presentations; the module axioms hold because they hold sectionwise in the modules $\mathcal P(U_i)$ and are compatible with the equivalence relation on germ-compatible presentations. Since a morphism of presheaves of modules $\mathcal P\to\mathcal G$ into the sheaf $\mathcal G$ is in particular a presheaf of sets morphism, [F4] factors it uniquely through $\eta$; the factorisation $a\mathcal P\to\mathcal G$ is $\mathcal O_X$-linear because linearity can be checked on the local presentations, which generate every section of $a\mathcal P$ over a cover, and on those it is just the linearity of $\mathcal P\to\mathcal G$. Hence $\operatorname{Hom}_{\mathrm{Mod}(\mathcal O_X)}(a\mathcal P,\mathcal G)\cong\operatorname{Hom}_{\text{presheaves of modules}}(\mathcal P,\mathcal G)\cong\prod_{i\in I}\operatorname{Hom}_{\mathrm{Mod}(\mathcal O_X)}(\mathcal F_i,\mathcal G)$, the second bijection because a compatible family of $\mathcal O_X(U)$-linear maps out of the direct sums $\bigoplus_i\mathcal F_i(U)$ is the same thing as a family of morphisms $\mathcal F_i\to\mathcal G$. Thus $a\mathcal P$ is a coproduct of the family $(\mathcal F_i)$ in $\mathrm{Mod}(\mathcal O_X)$, so small coproducts exist. [F4, step 1.2, construct]

3.1 Let $D$ be a small filtered diagram in $\mathrm{Mod}(\mathcal O_X)$ and let $\mathcal Q(U):=\operatorname*{colim}_j\mathcal F_j(U)$ be the objectwise filtered colimit presheaf, with the induced $\mathcal O_X(U)$-actions; by the same universal-property argument as in step 2.1 applied to filtered colimits instead of coproducts, its sheafification $a\mathcal Q$ is the colimit of $D$ in $\mathrm{Mod}(\mathcal O_X)$. Since sheafification is stalkwise a bijection [F4] and stalks are themselves filtered colimits over the neighbourhood filter, each stalk is $(\operatorname*{colim}_j\mathcal F_j)_x=\operatorname*{colim}_j(\mathcal F_j)_x$, the two sides being the filtered colimit of the same diagram of modules indexed by $j$ and a neighbourhood of $x$, with equality of representatives governed by [F9]. Now let a filtered diagram of short exact sequences $0\to\mathcal A_j\to\mathcal B_j\to\mathcal C_j\to 0$ of $\mathcal O_X$-modules be given. On stalks over $x$ one obtains the filtered colimit of the short exact sequences $0\to(\mathcal A_j)_x\to(\mathcal B_j)_x\to(\mathcal C_j)_x\to 0$ of $\mathcal O_{X,x}$-modules, which is short exact by step 1.3; hence the stalk sequence of the colimit sequence is exact, and by the stalkwise exactness criterion [F3] the colimit sequence $0\to\operatorname*{colim}_j\mathcal A_j\to\operatorname*{colim}_j\mathcal B_j\to\operatorname*{colim}_j\mathcal C_j\to 0$ is short exact. This holds for every small filtered diagram of short exact sequences, so every small filtered colimit functor on $\mathrm{Mod}(\mathcal O_X)$ is exact. [F3, F4, F9, step 1.3, algebra]

3.2 Let $\mathcal G:=\coprod_{U\subseteq X\text{ open}}G_U$ be the small coproduct of step 1.4, which exists by step 2.1, and let $f\ne g:\mathcal F\to\mathcal F'$ be distinct morphisms of $\mathcal O_X$-modules. Since morphisms are determined by their components [F1], there are an open $U$ and a section $s\in\mathcal F(U)$ with $f_U(s)\ne g_U(s)$. By the bijection of step 1.4 there is $\varphi\in\operatorname{Hom}(G_U,\mathcal F)$ with $\varphi_U(1_U)=s$, and the coproduct universal property of step 2.1 extends $\varphi$ to $\bar\varphi:\mathcal G\to\mathcal F$ with $\bar\varphi|_{G_U}=\varphi$. Then $(f\circ\bar\varphi)_U(1_U)=f_U(s)\ne g_U(s)=(g\circ\bar\varphi)_U(1_U)$, so $f\circ\bar\varphi\ne g\circ\bar\varphi$; hence the singleton family $\{\mathcal G\}$ separates morphisms and $\mathcal G$ is a generator of $\mathrm{Mod}(\mathcal O_X)$. [F1, step 1.4, step 2.1]

3.3 Since $\mathrm{Mod}(\mathcal O_X)$ is abelian [F2], it has finite coproducts and coequalizers, and step 2.1 supplies set-indexed coproducts; a small colimit of a diagram $D$ is the coequalizer of the two canonical maps $\coprod_{f\in\operatorname{Mor}(D)}\mathcal F_{f(0)}\rightrightarrows\coprod_{i\in\operatorname{Ob}(D)}\mathcal F_i$, so $\mathrm{Mod}(\mathcal O_X)$ is cocomplete and satisfies AB3. [F2, step 2.1, construct]

4.1 By step 3.1 every small filtered colimit functor on the cocomplete abelian category $\mathrm{Mod}(\mathcal O_X)$ is exact, so by the AB5 criterion of [F7] the category satisfies AB5. [F7, step 3.1]

5.1 Steps 1.1, 3.3, 4.1 and 3.2 show that $\mathrm{Mod}(\mathcal O_X)$ is locally small, abelian, cocomplete, satisfies AB5 and has the generator $\mathcal G$; by the definition of a Grothendieck category [F7] it is therefore a locally small Grothendieck category. [F7, step 1.1, step 3.2, step 3.3, step 4.1]

6.1 By step 5.1 and [F8], whose hypothesis is exactly the Axiom of Choice and the locally small Grothendieck structure just verified, $\mathrm{Mod}(\mathcal O_X)$ has enough injectives, every $\mathcal O_X$-module embeds into an injective $\mathcal O_X$-module, and there is a functorial monomorphism $\eta_{\mathcal F}:\mathcal F\rightarrowtail E(\mathcal F)$ into an injective object. [F8, step 5.1, given]

7.1 Fix an $\mathcal O_X$-module $\mathcal F$. Set $I^0(\mathcal F):=E(\mathcal F)$ and suppose a coaugmented complex $0\to\mathcal F\to I^0\to\cdots\to I^n$ of $\mathcal O_X$-modules has been constructed which is exact at every displayed term except possibly at $I^n$, with all $I^j$ injective. For $n\ge0$ put $C^n:=\operatorname{coker}(I^{n-1}\to I^n)$, with $I^{-1}$ read as $\mathcal F$, and set $I^{n+1}(\mathcal F):=E(C^n)$ with the monomorphism $C^n\rightarrowtail I^{n+1}(\mathcal F)$; the composite $I^n\twoheadrightarrow C^n\rightarrowtail I^{n+1}(\mathcal F)$ extends the complex by one term and makes it exact at $I^n$, all terms remaining injective. Recursing this construction over $n=0,1,2,\dots$ uses only the fixed functorial embedding $E$ applied to the canonical cokernel of the previously constructed map, so it selects nothing further and yields one specific injective resolution $0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$ of $\mathcal F$. [F8, step 6.1, construct] ∎
