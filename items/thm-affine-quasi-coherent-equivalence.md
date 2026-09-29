---
id: thm-affine-quasi-coherent-equivalence
kind: theorem
title: Affine quasi-coherent sheaves are modules
status: draft
origin: pipeline
deps:
  - def-quasi-coherent-module-scheme
  - lem-principal-affine-module-descent
  - lem-associated-sheaf-restriction-affine-open
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-stalk-localization
  - thm-gluing-sheaves
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - def-affine-scheme-spectrum
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
  - thm-prime-spectrum-is-compact
  - lem-distinguished-subset-cover-detects-radical
  - thm-sheaf-equalizer-condition
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-sections-basic-open-affine-scheme
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
ring with $1$ and put $X=\operatorname{Spec}A$. Let
$\operatorname{Mod}_A$ be the category of $A$-modules and
$\operatorname{QCoh}(X)$ the full subcategory of $\mathcal O_X$-modules
consisting of the quasi-coherent ones ([[def-quasi-coherent-module-scheme]]).

Consider the functors
$$(-)^{\sim}:\operatorname{Mod}_A\longrightarrow\operatorname{QCoh}(X),\qquad M\longmapsto\widetilde M,$$
given by the associated module sheaf
([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]), and
$$\Gamma(X,-):\operatorname{QCoh}(X)\longrightarrow\operatorname{Mod}_A,\qquad \mathcal F\longmapsto\Gamma(X,\mathcal F).$$

Then:

1. For every $A$-module $M$ the canonical map
   $M\to\Gamma(X,\widetilde M)$, $m\mapsto m$ (the section over $X$), is an
   isomorphism of $A$-modules ([[lem-associated-sheaf-sections-basic-open]]).
2. For every quasi-coherent $\mathcal F$ the canonical comparison morphism
   $\kappa_{\mathcal F}:\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$,
   whose component on $D(f)$ is the localisation at $f$ of the restriction map
   $\Gamma(X,\mathcal F)\to\mathcal F(D(f))$, is an isomorphism of
   $\mathcal O_X$-modules. In particular
   $\mathcal F\cong\widetilde{\Gamma(X,\mathcal F)}$.
3. $(-)^{\sim}$ is fully faithful: for all $A$-modules $M,N$ the map
   $\operatorname{Hom}_A(M,N)\to\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\widetilde N)$,
   $u\mapsto\widetilde u$, is a bijection, with inverse
   $\psi\mapsto\psi_X$.
4. Consequently $(-)^{\sim}$ and $\Gamma(X,-)$ are quasi-inverse equivalences
   $\operatorname{Mod}_A\simeq\operatorname{QCoh}(X)$: the unit in (1) and the
   counit in (2) are natural isomorphisms, and $M\mapsto\widetilde M$ is an
   equivalence of categories.

All claims include the zero ring $A=0$, where $X=\varnothing$, both categories
are equivalent to the terminal category, and the assertions are trivial. The
Axiom of Choice is used only as it is used by the associated-sheaf existence
theorem and its consequences cited below, and by the compactness of
$\operatorname{Spec}A$.

## Facts & Assumptions

**Given:** A commutative ring $A$ with $1$, the scheme $X=\operatorname{Spec}A$ with structure sheaf $\mathcal O_X$, and a quasi-coherent $\mathcal O_X$-module $\mathcal F$.

[F1] (Definition of quasi-coherence) Every point $x\in X$ has an affine open neighbourhood $V=\operatorname{Spec}B\subseteq X$ and a $B$-module $N$ with an isomorphism $\mathcal F|_V\cong\widetilde N$ of $\mathcal O_V$-modules ([[def-quasi-coherent-module-scheme]]).

[F2] The distinguished opens $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, $f\in A$, form a basis of the topology of $X$; moreover $\mathcal O_X(D(f))=A_f$ with restriction the localisation $A_f\to A_g$ for $D(g)\subseteq D(f)$ ([[def-affine-scheme-spectrum]], [[thm-sections-basic-open-affine-scheme]]).

[F3] $\operatorname{Spec}A$ is compact, by an argument using the Axiom of Choice ([[thm-prime-spectrum-is-compact]]).

[F4] For $f_1,\dots,f_r\in A$ with $r\ge1$ one has $X=D(f_1)\cup\cdots\cup D(f_r)$ if and only if $1\in\sqrt{(f_1,\dots,f_r)}$, that is, if and only if $f_1,\dots,f_r$ generate the unit ideal ([[lem-distinguished-subset-cover-detects-radical]]).

[F5] (Restriction to an affine open) If $W=\operatorname{Spec}C$ is an affine open subscheme of $\operatorname{Spec}B$ with ring map $B\to C$, then for every $B$-module $N$ there is a canonical isomorphism $(\widetilde N)|_W\cong\widetilde{(C\otimes_BN)}$ of $\mathcal O_W$-modules, natural in $N$ ([[lem-associated-sheaf-restriction-affine-open]]).

[F6] For an $A$-module $M$ and $f\in A$ there is a canonical identification $\Gamma(D(f),\widetilde M)=M_f$, natural in $f$ and in $M$; in particular $\Gamma(X,\widetilde M)=M$, and an $A$-linear map $u:M\to N$ induces $\widetilde u$ with component $u_f:M_f\to N_f$ at $D(f)$ ([[lem-associated-sheaf-sections-basic-open]]).

[F7] A morphism of $\mathcal O_X$-modules between sheaves whose sections on the distinguished-open basis are known is determined by its components on that basis, and a compatible family of module maps on distinguished opens extends uniquely to a morphism; hence a morphism is an isomorphism exactly when all of its distinguished-open components are isomorphisms ([[def-associated-sheaf-module-affine-scheme]], [[thm-associated-module-sheaf-exists]], [[def-sheaf-on-topological-space]], [[def-module-on-ringed-space]]).

[F8] (Sheaf axiom as equalizer) For a sheaf $\mathcal F$ of abelian groups, an open set $U$ and a cover $U=\bigcup_iU_i$, the restriction map $\mathcal F(U)\to\prod_i\mathcal F(U_i)$ is an equalizer of the maps $d_0((s_i))=(s_i|_{U_i\cap U_j})$ and $d_1((s_i))=(s_j|_{U_i\cap U_j})$; for a finite cover this means that $\mathcal F(U)$ is identified with $\ker(d_0-d_1)$ ([[thm-sheaf-equalizer-condition]]).

[F9] (Principal module descent) Let $f_1,\dots,f_r$ generate the unit ideal, let $M_i$ be $A_{f_i}$-modules with isomorphisms $\varphi_{ij}:(M_i)_{f_j}\to(M_j)_{f_i}$ satisfying $\varphi_{ii}=\mathrm{id}$ and $\varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}$ on triple localisations. Then $M=\ker(u-v)\subseteq\prod_iM_i$, where $u((m_k))_{k,l}=(m_k)|_{f_l}$ and $v((m_k))_{k,l}=\varphi_{kl}^{-1}((m_l)|_{f_k})$, satisfies $M_{f_i}\cong M_i$ for all $i$, compatibly with the $\varphi_{ij}$; the construction uses no choice principle ([[lem-principal-affine-module-descent]]).

[F10] Localisation commutes with kernels: for an $A$-linear map $u:P\to Q$ and $g\in A$, the natural map $(\ker u)_g\to\ker(u_g)$ is an isomorphism ([[cor-localisation-commutes-with-kernels-images-and-cokernels]]).

[F11] For a prime $\mathfrak p\in X$ the stalk of $\widetilde M$ at $\mathfrak p$ is canonically $\widetilde M_{\mathfrak p}\cong M_{\mathfrak p}$ ([[lem-associated-sheaf-stalk-localization]]).

[F12] Sheaves of modules glue: if $\mathcal G,\mathcal H$ are $\mathcal O_X$-modules and $\psi_i:\mathcal G|_{U_i}\to\mathcal H|_{U_i}$ are morphisms on the members of an open cover $X=\bigcup_iU_i$ which agree on the overlaps, then they glue to a morphism $\psi:\mathcal G\to\mathcal H$; if each $\psi_i$ is an isomorphism then so is $\psi$ ([[thm-gluing-sheaves]], [[def-sheaf-on-topological-space]]).

**Given (continued):** All associated sheaves $\widetilde M$ are those of [[def-associated-sheaf-module-affine-scheme]], and all uses of the words "isomorphism" and "quasi-inverse" refer to the full subcategory $\operatorname{QCoh}(X)$ of [[def-quasi-coherent-module-scheme]].



**Proof technique:** direct; compute that every quasi-coherent $\mathcal F$ is associated to its module of global sections by refining to a finite principal cover, applying principal module descent to the restrictions, and using the sheaf equalizer condition to identify the descent module with $\Gamma(X,\mathcal F)$.

## Proof

1.1 The zero ring: if $A=0$ then $X=\operatorname{Spec}A=\varnothing$ ([[def-affine-scheme-spectrum]]). The only $A$-module is $0$, whose associated sheaf is the zero sheaf on the empty space, and the only sheaf on $\varnothing$ is the zero sheaf, so $M\mapsto\widetilde M$ and $\Gamma$ are the identity functors between the one-object, one-morphism categories and each claim holds. Hence assume $A\neq0$, so that $X\neq\varnothing$, for the rest of the proof; then $\Gamma(X,\widetilde M)=M$ in particular is [F6]. [F6]

1.2 Each point has a basic neighbourhood on which $\mathcal F$ is associated to its own sections: let $x\in X$; by [F1] there are an affine open $V=\operatorname{Spec}B\subseteq X$ containing $x$ and a $B$-module $N$ with $\mathcal F|_V\cong\widetilde N$; by [F2] choose $f\in A$ with $x\in D(f)\subseteq V$. In $V=\operatorname{Spec}B$ the open $D(f)$ is the distinguished open cut out by the image of $f$ in $B$, with ring of sections $A_f$; applying [F5] to the affine open subscheme $D(f)=\operatorname{Spec}A_f$ of $V$ gives $(\widetilde N)|_{D(f)}\cong\widetilde{(A_f\otimes_BN)}$. Restricting the isomorphism $\mathcal F|_V\cong\widetilde N$ therefore yields $\mathcal F|_{D(f)}\cong\widetilde{(A_f\otimes_BN)}$, and by [F6] applied to the ring $A_f$ and the $A_f$-module $A_f\otimes_BN$ this module is $\Gamma(D(f),\mathcal F)$. Hence $$\mathcal F|_{D(f)}\;\cong\;\widetilde{\Gamma(D(f),\mathcal F)}$$ for such an $f$. [F1, F2, F5, F6]

1.3 The unit and naturality: claim 1 is the case $f=1$ of the canonical identification $\Gamma(D(f),\widetilde M)\cong M_f$ of [F6], which is natural in $M$: an $A$-linear map $u:M\to N$ makes the square with the unit maps commute because $\widetilde u_X=u$ under these identifications. Hence $\Gamma(X,-)\circ(-)^{\sim}\cong\mathrm{id}_{\operatorname{Mod}_A}$. [F6]

1.4 Full faithfulness: let $M,N$ be $A$-modules. If $\psi:\widetilde M\to \widetilde N$ is a morphism of $\mathcal O_X$-modules, put $u=\psi_X:M\to N$ under the identifications $\Gamma(X,\widetilde M)=M$, $\Gamma(X,\widetilde N)=N$ of [F6]. For $m/f^k\in M_f=\widetilde M(D(f))$ one has $m/f^k=f^{-k}\cdot(m|_{D(f)})$ in the module structure, so $$\psi_{D(f)}(m/f^k)=f^{-k}\,\psi_{D(f)}(m|_{D(f)}) =f^{-k}\,u(m)|_{D(f)}=\widetilde u_{D(f)}(m/f^k).$$ Thus $\psi$ and $\widetilde u$ have the same components on every distinguished open, so $\psi=\widetilde u$ by [F7]. Conversely $\widetilde{(\psi_X)}=\psi$ just shown, and $(\widetilde u)_X=u$, so $u\mapsto\widetilde u$ is a bijection with inverse $\psi\mapsto\psi_X$; this proves claim 3. [F6, F7]

2.1 Finite principal refinement: the distinguished opens $D(f)$ with $\mathcal F|_{D(f)}\cong\widetilde{\Gamma(D(f),\mathcal F)}$ cover $X$ by step 1.2, and $X$ is compact by [F3]; fix a finite subcover $X=D(f_1)\cup\cdots\cup D(f_r)$, with $r\ge1$ because $X\neq\varnothing$. Then $f_1,\dots,f_r$ generate the unit ideal by [F4]. [F3, F4, step 1.2]

3.1 Descent datum: for $i=1,\dots,r$ put $M_i=\Gamma(D(f_i),\mathcal F)$ and fix an isomorphism $\theta_i:\mathcal F|_{D(f_i)}\to\widetilde{M_i}$ as provided by step 1.2. For each pair $(i,j)$ the open $D(f_if_j)=D(f_i)\cap D(f_j)$ carries two identifications, so $$\varphi_{ij}:=\theta_j\circ\theta_i^{-1}:(M_i)_{f_j}\longrightarrow(M_j)_{f_i}$$ is an isomorphism of $A_{f_if_j}$-modules, using $\widetilde{M_i}(D(f_if_j))=(M_i)_{f_j}$ and $\widetilde{M_j}(D(f_if_j))=(M_j)_{f_i}$ from [F6]. These isomorphisms satisfy $\varphi_{ii}=\mathrm{id}$ and, on the triple overlap $D(f_if_jf_k)$, $\varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}$, because the $\theta$'s are isomorphisms of the same restrictions of $\mathcal F$. Thus $f_1,\dots,f_r$ and the datum $(M_i,\varphi_{ij})$ satisfy the hypotheses of [F9]. [F6, F9, step 2.1]

4.1 The descent module: by [F9] applied to the datum of step 3.1 there is an $A$-module $M=\ker(u-v)\subseteq\prod_iM_i$, with $u,v$ as in [F9], and canonical isomorphisms $M_{f_i}\cong M_i$ compatible with the $\varphi_{ij}$; the construction uses no choice principle. [F9, step 3.1]

5.1 The descent module is $\Gamma(X,\mathcal F)$: the finite family $X=D(f_1)\cup\cdots\cup D(f_r)$ is a cover, so by [F8] the restriction map $e:\Gamma(X,\mathcal F)\to\prod_i\Gamma(D(f_i),\mathcal F)=\prod_iM_i$ identifies $\Gamma(X,\mathcal F)$ with $\ker(d_0-d_1)$. Under the identifications $\Gamma(D(f_if_j),\mathcal F)=(M_i)_{f_j}$ induced by $\theta_i$ and $=(M_j)_{f_i}$ induced by $\theta_j$, the component $(i,j)$ of $d_0$ becomes $(m_i)|_{f_j}$ and that of $d_1$ becomes $\theta_i\theta_j^{-1}((m_j)|_{f_i}) =\varphi_{ij}^{-1}((m_j)|_{f_i})$; hence $d_0-d_1$ corresponds exactly to $u-v$ of step 4.1, and $e$ identifies $\Gamma(X,\mathcal F)\cong M$ canonically. [F8, F9, step 3.1, step 4.1]

6.1 The same computation on every basic open: fix $g\in A$; the open $D(g)$ is covered by $D(gf_1),\dots,D(gf_r)$, and $\theta_i$ identifies $\mathcal F(D(gf_i))$ with $(M_i)_g$ and $\mathcal F(D(gf_if_j))$ with $(M_i)_{gf_j}=(M_i)_{f_jg}$ by [F6] applied to $\widetilde{M_i}$. Transporting $d_0,d_1$ as in step 5.1 exhibits these identifications and the isomorphisms $\varphi_{ij}$ localised at $g$ as the localisation at $g$ of the maps $u,v$. By [F8] the restriction map $\Gamma(D(g),\mathcal F)\to\prod_i(M_i)_g$ identifies $\Gamma(D(g),\mathcal F)$ with $\ker\bigl((u-v)_g\bigr)$, and by [F10] this kernel is $(\ker(u-v))_g=M_g$. Hence for every $g\in A$ there is a canonical isomorphism $$\beta_g:\widetilde M(D(g))=M_g\longrightarrow\Gamma(D(g),\mathcal F),$$ natural in $g$ in the sense that the $\beta_g$ commute with the restriction maps $M_g\to M_h$ and $\Gamma(D(g),\mathcal F)\to\Gamma(D(h),\mathcal F)$ for $D(h)\subseteq D(g)$; both sides are induced by the same restriction maps out of $\Gamma(X,\mathcal F)$ and out of $\prod_iM_i$. [F6, F8, F9, F10, step 5.1]

7.1 The counit is an isomorphism: by [F7] the compatible family $\beta_g$, $g\in A$, is the family of distinguished-open components of a unique morphism $\widetilde M\to\mathcal F$. On $D(f_i)=\operatorname{Spec}A_{f_i}$ its components on the distinguished opens $D(f_ih)$ are the maps $\beta_{f_ih}$ of step 6.1, all isomorphisms; applying [F7] on the affine scheme $D(f_i)$ shows that the restriction of the morphism to $D(f_i)$ is an isomorphism, and since the $D(f_i)$ cover $X$, [F12] shows that the morphism itself is an isomorphism. Since $\Gamma(X,\mathcal F)\cong M$ by step 5.1, this is the canonical comparison morphism $\kappa_{\mathcal F}$ of the Statement: for each $g$ the map $\beta_g$ and the localisation at $g$ of the restriction $\Gamma(X,\mathcal F)\to\Gamma(D(g),\mathcal F)$ both factor the same restriction $\Gamma(X,\mathcal F)\to\prod_i(M_i)_g$ through the localisation $M\to M_g$, and the restriction $\Gamma(D(g),\mathcal F)\to\prod_i(M_i)_g$ is injective by [F8], so by the universal property of localisation the two maps $M_g\to\Gamma(D(g),\mathcal F)$ coincide. This proves claim 2. [F6, F7, F12, step 5.1, step 6.1]

8.1 Conclusion: by step 7.1 every quasi-coherent $\mathcal F$ satisfies $\mathcal F\cong\widetilde{\Gamma(X,\mathcal F)}$, so $(-)^{\sim}$ is essentially surjective; by step 1.4 it is full and faithful, hence an equivalence of categories, and by steps 1.3 and 7.1 the unit and counit relating $(-)^{\sim}$ and $\Gamma(X,-)$ are natural isomorphisms, so the two functors are quasi-inverse; this proves claim 4. For a prime $\mathfrak p\in X$, [F11] together with the isomorphism $\mathcal F\cong\widetilde{\Gamma(X,\mathcal F)}$ identifies the stalk $\mathcal F_{\mathfrak p}$ with the localisation $\Gamma(X,\mathcal F)_{\mathfrak p}$ of the global module. As to the Axiom of Choice: the only uses are the compactness of $\operatorname{Spec}A$ in step 2.1 (through [F3], whose proof uses AC) and the associated-sheaf machinery inherited through [F5], [F6], [F7] and [F11]; step 2.1 selects witnesses only for the finitely many members of a finite subcover, the cover in step 1.2 is the set of *all* distinguished opens with the stated property and not a per-point choice, and the principal module descent [F9] and its use in steps 3.1, 4.1, 5.1 and 6.1 are choice-free. All constructions are canonical. [F3, F9, F11, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 1.3, step 1.4] ∎
