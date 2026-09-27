---
id: "lem-morphisms-from-the-constant-sheaf-are-global-sections"
kind: "lemma"
title: "Morphisms from the constant sheaf are global sections"
status: draft
origin: pipeline
deps: [def-topological-space, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-sheafification, def-presheaf-on-topological-space, def-morphism-of-presheaves, def-presheaf-of-groups-rings-modules, def-sheaf-on-topological-space, def-section-restriction-and-global-section, def-global-sections-functor-sheaves, thm-abelian-sheaves-form-abelian-category, thm-sheafification-universal-property, def-zero-and-stalk-complex, def-cochain-complex-in-an-abelian-category, def-cochain-map, def-homotopically-projective-bounded-above-complex]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
      locator: "Sections 3 and 17: presheaves, the sheaf condition, sheafification and its universal property"
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 31 (0FKU): the identification Hom(O_X,-) = Gamma(X,-) used to represent cohomology classes"
---

## Statement

Let $X$ be a topological space ([[def-topological-space]]). Let
$\mathbb Z_{\mathrm{pt}}$ be the constant presheaf with value $\mathbb Z$,
let
$$\mathbb Z_X:=a\,\mathbb Z_{\mathrm{pt}}$$
be its sheafification with sheafification map
$\eta:\mathbb Z_{\mathrm{pt}}\to\mathbb Z_X$, and put
$$1_X:=\eta_X(1)\in\Gamma(X,\mathbb Z_X),$$
where $1\in\mathbb Z_{\mathrm{pt}}(X)=\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]],
[[def-sheafification]]). For an abelian sheaf $\mathcal F$ on $X$ let
$\operatorname{Hom}_{\mathrm{Ab}(X)}(\mathbb Z_X,\mathcal F)$ be the abelian
group of morphisms of sheaves of abelian groups, with addition computed
componentwise ([[def-global-sections-functor-sheaves]],
[[thm-abelian-sheaves-form-abelian-category]]). Then:

1. **(Sections as morphisms.)** For every abelian sheaf $\mathcal F$ the map
   $$\Phi_{\mathcal F}:\operatorname{Hom}_{\mathrm{Ab}(X)}(\mathbb Z_X,\mathcal F)\longrightarrow\Gamma(X,\mathcal F),\qquad \varphi\mapsto\varphi_X(1_X),$$
   is a bijection. Its inverse sends $s\in\Gamma(X,\mathcal F)$ to the unique
   morphism of sheaves $\varphi:\mathbb Z_X\to\mathcal F$ with
   $\varphi_X(1_X)=s$, and that morphism is described as follows: for every open
   $U\subseteq X$, every locally constant $f:U\to\mathbb Z$ and every
   $n\in\mathbb Z$ one has
   $$\varphi_U(f)|_{f^{-1}(n)}=n\cdot s|_{f^{-1}(n)},$$
   the pair $\mathbb Z_X(U)\cong\{f:U\to\mathbb Z\text{ locally constant}\}$
   being the identification of clause 2 of
   [[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]].

2. **(Additivity and naturality.)** $\Phi_{\mathcal F}$ is a homomorphism of
   abelian groups for every $\mathcal F$, hence an isomorphism, and for every
   morphism $\psi:\mathcal F\to\mathcal G$ of abelian sheaves one has
   $$\Phi_{\mathcal G}(\psi\circ\varphi)=\Gamma(X,\psi)\bigl(\Phi_{\mathcal F}(\varphi)\bigr)$$
   for all $\varphi:\mathbb Z_X\to\mathcal F$; thus the bijections
   $\Phi_{\mathcal F}$ are natural in $\mathcal F$.

3. **(Complexes.)** If $J^\bullet$ is a cochain complex of abelian sheaves
   ([[def-cochain-complex-in-an-abelian-category]]) and $\mathbb Z_X$ is read
   as the stalk complex concentrated in degree $0$
   ([[def-zero-and-stalk-complex]]), then the levelwise maps
   $\Phi_{J^n}$ define an isomorphism of cochain complexes
   ([[def-cochain-map]])
   $$\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X,J^\bullet)\xrightarrow{\ \cong\ }\Gamma(X,J^\bullet),$$
   where the left-hand complex is the cochain Hom complex
   ([[def-homotopically-projective-bounded-above-complex]]), the right-hand
   complex has the differentials $\Gamma(X,d^n)$ and entries
   $\Gamma(X,J^n)$, and the isomorphism is natural in the complex
   $J^\bullet$.

## Facts & Assumptions

[F1] The constant presheaf $\mathbb Z_{\mathrm{pt}}$ has $\mathbb Z_{\mathrm{pt}}(U)=\mathbb Z$ for every open $U$, with all restriction maps the identity, and the constant sheaf is $\mathbb Z_X=a\mathbb Z_{\mathrm{pt}}$, its sheafification ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F2] There is a canonical isomorphism of sheaves of sets $\theta:\mathbb Z_X\to\underline{\mathbb Z}_{\mathrm{loc}}$ to the sheaf of locally constant $\mathbb Z$-valued functions such that $\theta_U(\eta_U(a))$ is the constant function with value $a\in\mathbb Z$; in particular $\theta_U$ is a bijection for every open $U$ and $\theta_X(1_X)$ is the constant function $1$. Clause 3 of the same lemma equips $\mathbb Z_X$ with its abelian-sheaf structure and makes $\theta_U$ and $\eta_U$ group homomorphisms ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F3] The sheafification map is the canonical morphism $\eta_{\mathcal F}:\mathcal F\to a\mathcal F$ of the plus construction, and $a\mathcal F=\mathcal F^{++}$ ([[def-sheafification]]).

[F4] A morphism of presheaves $\varphi:\mathcal F\to\mathcal G$ is a family of maps $\varphi_U$ with $\varphi_V(s|_V)=\varphi_U(s)|_V$ for all $V\subseteq U$ and all $s\in\mathcal F(U)$ ([[def-morphism-of-presheaves]]).

[F5] For an open cover $U=\bigcup_{i\in I}U_i$, sections $s_i\in\mathcal F(U_i)$ with $s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}$ for all $i,j$ glue to a section $s\in\mathcal F(U)$ with $s|_{U_i}=s_i$, and such $s$ is unique by locality ([[def-sheaf-on-topological-space]]).

[F6] Restriction is written $s|_V:=\rho^U_V(s)\in\mathcal F(V)$ for $V\subseteq U$ and $s\in\mathcal F(U)$, and $s|_U=s$, $(s|_V)|_W=s|_W$ for $W\subseteq V\subseteq U$ ([[def-section-restriction-and-global-section]]).

[F7] A presheaf of groups has every $\mathcal F(U)$ a group with every restriction map $\rho^U_V:\mathcal F(U)\to\mathcal F(V)$ a group homomorphism ([[def-presheaf-of-groups-rings-modules]]).

[F8] $\mathrm{Ab}(X)$ is the category of sheaves of abelian groups on $X$, and a morphism of sheaves is a family of group homomorphisms commuting with restriction; addition of morphisms is componentwise ([[def-global-sections-functor-sheaves]]).

[F9] The category of sheaves of abelian groups on $X$ is an abelian category ([[thm-abelian-sheaves-form-abelian-category]]).

[F10] Every morphism of presheaves $\varphi:\mathbb Z_{\mathrm{pt}}\to\mathcal G$ into a sheaf $\mathcal G$ factors uniquely as $\varphi=\overline\varphi\circ\eta$ with $\overline\varphi:a\mathbb Z_{\mathrm{pt}}\to\mathcal G$ a morphism of sheaves ([[thm-sheafification-universal-property]]).

[F11] The stalk complex $S^n(A)$ has $A$ in degree $n$, zero elsewhere, and every differential zero; it is concentrated in degree $n$ ([[def-zero-and-stalk-complex]]).

[F12] For cochain complexes the Hom complex has $\underline{\operatorname{Hom}}^r(P,A)=\prod_n\operatorname{Hom}(P^n,A^{n+r})$ and $(du)^n=d_Au^n-(-1)^ru^{n+1}d_P$; the upper indices are read through the reindexing convention under which a cochain complex $C^\bullet$ has chain complex $(C^\sharp)_n:=C^{-n}$ ([[def-homotopically-projective-bounded-above-complex]], [[def-cochain-complex-in-an-abelian-category]]).

[F13] A cochain map $f:C^\bullet\to D^\bullet$ is a family $f^n:C^n\to D^n$ with $d_D^n\circ f^n=f^{n+1}\circ d_C^n$ for every $n$ ([[def-cochain-map]]).

## Proof

**Given:** A topological space $X$, the constant presheaf $\mathbb Z_{\mathrm{pt}}$ with sheafification $\eta:\mathbb Z_{\mathrm{pt}}\to\mathbb Z_X=a\mathbb Z_{\mathrm{pt}}$, the global section $1_X=\eta_X(1)$, an abelian sheaf $\mathcal F$ and its global section $s=\varphi_X(1_X)$ for an arbitrary morphism $\varphi:\mathbb Z_X\to\mathcal F$.

1.1 For every presheaf of abelian groups $\mathcal G$ on $X$ the map $$\Psi_{\mathcal G}:\operatorname{Hom}_{\mathrm{PAb}(X)}(\mathbb Z_{\mathrm{pt}},\mathcal G)\longrightarrow\mathcal G(X),\qquad \psi\mapsto\psi_X(1),$$ is a bijection, where $\mathrm{PAb}(X)$ denotes presheaves of abelian groups with morphisms given by families of group homomorphisms commuting with restrictions. Injectivity: for a morphism $\psi$ and an open $U$, additivity of $\psi_U$ gives $\psi_U(n)=n\cdot\psi_U(1)$ for all $n\in\mathbb Z$, and naturality [F4] with the identity restriction maps of $\mathbb Z_{\mathrm{pt}}$ [F1] gives $\psi_U(1)=\psi_X(1)|_U$ [F6], so $\psi_U(n)=n\cdot(\psi_X(1)|_U)$ is determined by $\psi_X(1)$. Surjectivity: for $t\in\mathcal G(X)$ the formulas $\psi_U(n):=n\cdot t|_U$ define group homomorphisms that commute with restriction, because $n\cdot t|_V=n\cdot(t|_U|_V)$ for $V\subseteq U$ [F6, F7], and $\psi_X(1)=t$. The map is additive because addition of such morphisms is componentwise, so evaluation at $1$ preserves sums. [F1, F4, F6, F7]

1.2 By [F2] there is a canonical isomorphism of sheaves of sets $\theta:\mathbb Z_X\to\underline{\mathbb Z}_{\mathrm{loc}}$ with each $\theta_U$ a bijection, and $\theta_U(\eta_U(a))$ the constant function with value $a$; in particular $\theta_X(1_X)$ is the constant function $1$ on $X$. As an isomorphism of sheaves $\theta$ commutes with restrictions, so a section of $\mathbb Z_X$ over $U$ is a locally constant function $f:U\to\mathbb Z$ and for $n\in\mathbb Z$ the preimage $f^{-1}(n)\subseteq U$ is open, the sets $f^{-1}(n)$, $n\in\mathbb Z$, forming a pairwise disjoint open cover of $U$. [F2, F4]

2.1 Fix a global section $s\in\Gamma(X,\mathcal F)$ and an open $U\subseteq X$ with a locally constant $f:U\to\mathbb Z$. For $n\in\mathbb Z$ set $u_n:=n\cdot s|_{f^{-1}(n)}\in\mathcal F(f^{-1}(n))$; since the open sets $f^{-1}(n)$ are pairwise disjoint [step 1.2], the compatibility $u_n|_{f^{-1}(n)\cap f^{-1}(m)}=u_m|_{f^{-1}(n)\cap f^{-1}(m)}$ holds for all $n,m$, for $n\ne m$ both sides being sections over the empty open set, and for $n=m$ being the same section, and [F5] provides a unique section $\psi_U(f)\in\mathcal F(U)$ with $\psi_U(f)|_{f^{-1}(n)}=n\cdot s|_{f^{-1}(n)}$ for every $n$. This defines $\psi_U$ for every open $U$. [F5, F6, step 1.2]

3.1 The maps $\psi_U$ of [step 2.1] are group homomorphisms and commute with restriction, so they define a morphism of sheaves $\psi:\mathbb Z_X\to\mathcal F$ with $\psi_X(1_X)=s$. Additivity: for locally constant $f,g:U\to\mathbb Z$ the sections $\psi_U(f+g)$ and $\psi_U(f)+\psi_U(g)$ have the same restriction to each $f^{-1}(n)\cap g^{-1}(m)$, namely $(n+m)\cdot s|_{f^{-1}(n)\cap g^{-1}(m)}$, using that restriction $\mathcal F(U)\to\mathcal F(f^{-1}(n)\cap g^{-1}(m))$ is a group homomorphism [F7] and the defining property of $\psi_U$ [step 2.1], so locality [F5] gives $\psi_U(f+g)=\psi_U(f)+\psi_U(g)$. Naturality: for $V\subseteq U$ and locally constant $f:U\to\mathbb Z$, the restriction $f|_V$ is locally constant with $(f|_V)^{-1}(n)=V\cap f^{-1}(n)$, and both $\psi_V(f|_V)$ and $\psi_U(f)|_V$ restrict to $n\cdot s|_{V\cap f^{-1}(n)}=n\cdot(s|_{f^{-1}(n)})|_{V\cap f^{-1}(n)}$ [F6, F7], so locality gives $\psi_V(f|_V)=\psi_U(f)|_V$ [F4, F5]. Finally $\psi_X(1_X)=s$ because $\theta_X(1_X)$ is the constant function $1$ [step 1.2], whose level set in degree $1$ is all of $X$ and whose level sets in degrees $n\ne1$ are empty. [F4, F5, F6, F7, step 2.1, step 1.2]

4.1 By [step 3.1] every $s\in\Gamma(X,\mathcal F)$ equals $\psi_X(1_X)=\Phi_{\mathcal F}(\psi)$ for some morphism $\psi:\mathbb Z_X\to\mathcal F$; hence $\Phi_{\mathcal F}$ is surjective. [step 3.1]

4.2 Let $\varphi:\mathbb Z_X\to\mathcal F$ be a morphism and put $s:=\varphi_X(1_X)$. For every open $U$ and every $n\in\mathbb Z$ the section $\eta_U(n)$ is the constant function $n$ on $U$ [step 1.2, F3], so naturality of $\varphi$ [F4] and additivity of $\varphi_U$ give $(\varphi\circ\eta)_U(n)=\varphi_U(\eta_U(n))=n\cdot\varphi_U(\eta_U(1))=n\cdot s|_U$, because $\eta_U(1)=1_X|_U$ [F6]; the same value $n\cdot s|_U$ is obtained from the morphism $\psi$ of [step 3.1] by its defining property [step 2.1]. Hence $\varphi\circ\eta=\psi\circ\eta$, and the uniqueness part of [F10] forces $\varphi=\psi$. Thus $\Phi_{\mathcal F}$ is injective with inverse $s\mapsto\psi$. Moreover the computation $\varphi_U(f)|_{f^{-1}(n)}=n\cdot s|_{f^{-1}(n)}$ displayed in clause 1 follows from naturality and additivity of $\varphi_U$ [F8] applied to $f|_{f^{-1}(n)}$, the constant function $n$ over $f^{-1}(n)$ [step 1.2], and agrees with the description of $\psi$ in [step 2.1]. [F2, F3, F4, F6, F8, F10, step 2.1, step 3.1, step 1.2]

5.1 The map $\Phi_{\mathcal F}$ is additive: for morphisms $\varphi,\varphi':\mathbb Z_X\to\mathcal F$ the identity $(\varphi+\varphi')_X=\varphi_X+\varphi'_X$ of componentwise addition [F8] gives $\Phi_{\mathcal F}(\varphi+\varphi')=\Phi_{\mathcal F}(\varphi)+\Phi_{\mathcal F}(\varphi')$. Together with [step 4.1] and [step 4.2] this makes $\Phi_{\mathcal F}$ an isomorphism of abelian groups. Naturality: for a morphism $\psi:\mathcal F\to\mathcal G$ of abelian sheaves and $\varphi:\mathbb Z_X\to\mathcal F$ one has $\Phi_{\mathcal G}(\psi\circ\varphi)=(\psi\circ\varphi)_X(1_X)=\psi_X(\varphi_X(1_X))=\Gamma(X,\psi)(\Phi_{\mathcal F}(\varphi))$ by componentwise composition of families [F8]. [F8, F9, step 4.1, step 4.2]

6.1 Let $J^\bullet$ be a cochain complex of abelian sheaves and read $\mathbb Z_X$ as the stalk complex concentrated in degree $0$ [F11]. In the cochain Hom complex the $n$-th entry is $\prod_m\operatorname{Hom}(\mathbb Z_X^m,J^{m+n})$ [F12], and since $\mathbb Z_X^m=0$ for $m\ne0$ [F11] this entry is $\operatorname{Hom}(\mathbb Z_X,J^n)$, with differential $d u=d_{J^n}u-(-1)^n u\,d_{\mathbb Z_X}$ and $d_{\mathbb Z_X}=0$ [F11, F12], that is, $du=d_{J^n}\circ u$. Transporting along the bijections $\Phi_{J^n}$ of [step 5.1] sends $u$ to $\Phi_{J^n}(u)=u_X(1_X)$, and naturality of $\Phi$ [step 5.1] turns composition with $d_{J^n}$ into the map $\Gamma(X,d^n)$, so the levelwise maps define a cochain map $\underline{\operatorname{Hom}}^\bullet(\mathbb Z_X,J^\bullet)\to\Gamma(X,J^\bullet)$ [F13] that is bijective in every degree, hence an isomorphism of cochain complexes, natural in $J^\bullet$ because each $\Phi_{J^n}$ is. [F11, F12, F13, step 5.1]

7.1 Clause 1 is [step 4.1] together with [step 4.2], the description of the inverse being the one constructed in [step 2.1] and verified in [step 3.1] and [step 4.2]; clause 2 is [step 5.1]; clause 3 is [step 6.1]. No choice principle is used anywhere. ∎ [step 4.1, step 4.2, step 2.1, step 3.1, step 5.1, step 6.1]
