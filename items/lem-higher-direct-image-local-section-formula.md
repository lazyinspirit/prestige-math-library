---
id: lem-higher-direct-image-local-section-formula
kind: lemma
title: Local-section formula for derived direct image
status: draft
origin: pipeline
deps:
  - def-direct-image-sheaf
  - def-higher-direct-image-sheaf
  - def-right-derived-object-relative-to-injective-resolution-data
  - def-injective-resolution-in-an-abelian-category
  - lem-ringed-space-module-sheaves-enough-injectives
  - def-flasque-sheaf
  - thm-flasque-sheaves-acyclic
  - def-acyclic-sheaf-global-sections
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - def-sheaf-cohomology-derived-global-sections
  - def-cohomology-object-of-a-cochain-complex
  - def-exact-sequence-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - def-sheafification
  - thm-sheafification-universal-property
  - thm-sheafification-preserves-stalks
  - lem-image-sheaf-is-sheafification-presheaf-image
  - def-module-on-ringed-space
  - lem-global-sections-left-exact
  - thm-abelian-sheaves-have-enough-injectives
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, \u00a7\u00a730.2\u201330.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), \u00a7\u00a719.1, 19.6, 19.9, 28.1\u201328.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let
$f:X\to S$ be a morphism of schemes ([[def-morphism-of-schemes]]) and let
$\mathcal F$ be an $\mathcal O_X$-module
([[def-module-on-ringed-space]]). Then for every $q\ge0$ the higher direct
image sheaf $R^qf_*\mathcal F$ ([[def-higher-direct-image-sheaf]]) is the
sheafification ([[def-sheafification]]) of the presheaf of $\mathcal O_S$-modules
$$V\longmapsto H^q\bigl(f^{-1}V,\mathcal F|_{f^{-1}V}\bigr)$$
on the open subsets $V\subseteq S$, where $H^q$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]). The identification
respects restriction maps and the $\mathcal O_S$-module structure: the
sheafified presheaf is an $\mathcal O_S$-module isomorphic to
$R^qf_*\mathcal F$, and for $q<0$ both sides are zero.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a morphism of schemes $f:X\to S$ and an $\mathcal O_X$-module $\mathcal F$.

[F1] Fix the supplied functorial injective resolution datum $I$ on $\mathrm{Mod}(\mathcal O_X)$ of [[lem-ringed-space-module-sheaves-enough-injectives]]; it gives one specific injective resolution $0\to\mathcal F\to I^0\to I^1\to\cdots$ with deleted complex $I_{\mathrm{del}}$, and $R^qf_*\mathcal F=H^q(f_*I_{\mathrm{del}})$ is the $q$-th cohomology object of this complex of $\mathcal O_S$-modules, with $R^qf_*\mathcal F=0$ for $q<0$. ([[def-higher-direct-image-sheaf]], [[def-injective-resolution-in-an-abelian-category]])

[F2] For open $U\subseteq V\subseteq X$, extension by zero gives an $\mathcal O_X$-linear monomorphism $j_{U!}\mathcal O_U\to j_{V!}\mathcal O_V$: on a stalk in $U$ it is the identity on $\mathcal O_{X,x}$, and on every other stalk its source is zero. Step 1.4 of [[lem-ringed-space-module-sheaves-enough-injectives]] identifies $\operatorname{Hom}_{\mathcal O_X}(j_{W!}\mathcal O_W,\mathcal I)$ naturally with $\mathcal I(W)$ for every open $W$. ([[def-flasque-sheaf]], [[thm-exactness-of-sheaves-stalkwise]])

[F3] Under AC every flasque sheaf of abelian groups $\mathcal G$ on a space $X$ has $H^q(U,\mathcal G|_U)=0$ for every open $U\subseteq X$ and every $q>0$; equivalently every restriction $\mathcal G|_U$ is $\Gamma$-acyclic. ([[thm-flasque-sheaves-acyclic]], [[def-acyclic-sheaf-global-sections]])

[F4] Under DC the acyclic resolution theorem holds: if $0\to A\to J^0\to J^1\to\cdots$ is an $F$-acyclic resolution of $A$ relative to a supplied injective resolution datum and the syzygies remain in the domain of the datum, then $R^nF(A)\cong H^n(F(J^\bullet_{\mathrm{del}}))$ canonically. ([[thm-acyclic-resolution-theorem-for-right-derived-functors]])

[F5] Under AC the groups $H^q(U,\mathcal G)$ are defined as right derived objects of the global-sections functor of $U$ relative to the supplied functorial injective resolution datum on abelian sheaves over $U$, and they vanish for $q<0$. ([[def-sheaf-cohomology-derived-global-sections]], [[thm-abelian-sheaves-have-enough-injectives]])

[F6] A complex of sheaves of $\mathcal O_S$-modules has cohomology objects $H^q(C^\bullet)=\operatorname{coker}(B^q\to Z^q)$ with $Z^q=\ker(d^q)$, $B^q=\operatorname{im}(d^{q-1})$; the image subsheaf of a morphism is the sheafification of its presheaf image. ([[def-cohomology-object-of-a-cochain-complex]], [[lem-image-sheaf-is-sheafification-presheaf-image]])

[F7] Sheafification is a left adjoint of the inclusion of sheaves: every presheaf morphism into a sheaf factors uniquely through the unit, and sheafification induces bijections on stalks. ([[def-sheafification]], [[thm-sheafification-universal-property]], [[thm-sheafification-preserves-stalks]])

[F8] A sequence of sheaves is exact if and only if it is exact on every stalk; a sequence of $\mathcal O_X$-modules is exact if and only if its underlying sequence of abelian sheaves is exact. ([[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]])

[F9] For an open subset $U\subseteq X$ the sections of the direct image presheaf are $(f_*\mathcal G)(V)=\mathcal G(f^{-1}V)$. ([[def-direct-image-sheaf]])

[F10] The global-sections functor $\Gamma(W,-)$ on abelian sheaves over a space $W$ is additive and left exact. ([[lem-global-sections-left-exact]])



## Proof

**Proof technique:** direct: an injective resolution in $\mathrm{Mod}(\mathcal O_X)$ is a flasque resolution, hence an acyclic resolution on every $f^{-1}V$; the cohomology sheaf of the resulting complex of sections is the sheafification of its presheaf cohomology.

1.1 Let $0\to\mathcal F\to I^0\to I^1\to\cdots$ be the resolution supplied by the datum $I$ of [F1]. Fix open $U\subseteq V\subseteq X$. The map $j_{U!}\mathcal O_U\to j_{V!}\mathcal O_V$ of [F2] is a monomorphism of $\mathcal O_X$-modules. Since $I^p$ is injective in $\mathrm{Mod}(\mathcal O_X)$, every morphism $j_{U!}\mathcal O_U\to I^p$ extends across this monomorphism to $j_{V!}\mathcal O_V$. Under the natural identifications of [F2], this is precisely surjectivity of the restriction $I^p(V)\to I^p(U)$. Thus every $I^p$ is flasque as an underlying sheaf of abelian groups. [F1, F2]

2.1 For every open $U\subseteq X$ the restricted sheaf $I^p|_U$ is flasque: for open $W\subseteq V\subseteq U$ the restriction $(I^p|_U)(V)\to(I^p|_U)(W)$ is the restriction $I^p(V)\to I^p(W)$ of the flasque sheaf $I^p$, which is surjective. [F2, step 1.1, construct]

3.1 For every open $V\subseteq S$ the restricted complex $I^\bullet|_{f^{-1}V}$ is exact at every positive term with $\mathcal F|_{f^{-1}V}$ as its degree-zero cohomology sheaf: exactness of $0\to\mathcal F\to I^0\to I^1\to\cdots$ is checked on stalks [F8], and a point $x\in f^{-1}V$ has the same stalks in $f^{-1}V$ as in $X$. Hence $0\to\mathcal F|_{f^{-1}V}\to I^0|_{f^{-1}V}\to I^1|_{f^{-1}V}\to\cdots$ is a resolution by flasque sheaves. [F8, step 2.1, construct]

4.1 By [F3] each restricted term $I^p|_{f^{-1}V}$ is $\Gamma$-acyclic, so the resolution of step 3.1 is an acyclic resolution of $\mathcal F|_{f^{-1}V}$; the functorial injective resolution datum on abelian sheaves over the space $f^{-1}V$ is defined on the whole category [F5], so every syzygy of that resolution lies in its domain, and the left exactness of the global-sections functor [F10] lets [F4] apply to $\Gamma(f^{-1}V,-)$, giving canonical isomorphisms $H^q(f^{-1}V,\mathcal F|_{f^{-1}V})\cong H^q\bigl(\Gamma(f^{-1}V,I^\bullet)\bigr)$ for every $q\ge0$, the right-hand side being the cohomology of the complex of sections. [F3, F4, F5, F10, step 3.1]

4.2 Let $C^\bullet=f_*I^\bullet$ be the complex of $\mathcal O_S$-modules with $C^p(V)=\Gamma(f^{-1}V,I^p)$ for open $V\subseteq S$ [F9]. Its cohomology presheaf is $V\mapsto H^q(C^\bullet(V))=H^q(\Gamma(f^{-1}V,I^\bullet))$, and the cohomology sheaf $H^q(C^\bullet)$ of [F6] is the sheafification of this presheaf: indeed $Z^q=\ker d^q$ has $Z^q(V)=\ker(d^q\colon C^q(V)\to C^{q+1}(V))$ because kernels of sheaf morphisms are computed on opens, $B^q$ is the sheafification of the presheaf $V\mapsto\operatorname{im}(d^{q-1}\colon C^{q-1}(V)\to C^q(V))$ by [F6], and passing to the quotient and to stalks, which commute, shows that the sheafified presheaf cohomology and $\operatorname{coker}(B^q\to Z^q)$ have the same stalk at every point; a morphism of sheaves with bijective stalks is an isomorphism, so the two agree. [F6, F7, F8, F9, step 3.1]

5.1 Combining steps 4.1 and 4.2, the sheaf $R^qf_*\mathcal F=H^q(f_*I^\bullet)$ is canonically isomorphic to the sheafification of the presheaf $V\mapsto H^q(f^{-1}V,\mathcal F|_{f^{-1}V})$. The isomorphism is natural in $V$ because every map used above is induced by restriction of sections along inclusions of opens, and for $q<0$ both sides are zero by [F1] and [F5]. [F1, F5, step 4.1, step 4.2]

6.1 Finally the presheaf $V\mapsto H^q(f^{-1}V,\mathcal F|_{f^{-1}V})$ is a presheaf of $\mathcal O_S$-modules: for $V'\subseteq V$ restriction along $f^{-1}V'\subseteq f^{-1}V$ is additive and compatible with the ring maps, and the action of $a\in\mathcal O_S(V)$ is induced by the action of its image in $\mathcal O_X(f^{-1}V)$. The action maps are morphisms of presheaves into the sheaf $R^qf_*\mathcal F$, so by the universal property of sheafification [F7] they descend uniquely to an $\mathcal O_S$-module structure on the sheafification, and the isomorphism of step 5.1 is $\mathcal O_S$-linear. This proves the statement, and AC and DC are used exactly through the injective resolution datum [F1], the acyclicity [F3] and the acyclic resolution theorem [F4]. [F1, F3, F4, F7, step 5.1, given] ∎
