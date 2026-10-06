---
id: "lem-ext-of-locally-free-sheaf-via-cohomology"
kind: "lemma"
title: "Ext of a locally free cotangent sheaf via sheaf cohomology"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 13
justified_by: []
aliases: []
deps:
  - "lem-injective-modules-flasque-and-ext-of-structure-sheaf"
  - "def-ext-groups-of-the-cotangent-complex"
  - "def-locally-free-sheaf-finite-rank"
  - "def-internal-hom-qc-sheaves"
  - "def-sheaf-hom"
  - "lem-dual-locally-free-and-base-change"
  - "def-invertible-sheaf"
  - "def-sheaf-cohomology-derived-global-sections"
  - "def-derived-hom-in-the-bounded-setting"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "def-smooth-morphism-schemes"
  - "thm-differentials-smooth-locally-free"
  - "def-sheaf-relative-differentials"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Sections 92.21 and 92.16 (tags 08UZ, 08SP): Ext^i(L,-) of a locally free cotangent complex computed by cohomology of the Hom sheaf; Lemma 92.9.1 (tag 08R5) for L=Omega[0] in the smooth case (printed pages 25-33, read 2026-10-05)"
    - title: "The Stacks Project, Cohomology of Schemes, complete chapter (Chapter 30)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "The identification of derived global sections with the derived Hom out of the structure sheaf and the vanishing of higher quasi-coherent cohomology on affines (chapter-level reading, 2026-10-05)"
---

## Statement

Assume the Axiom of Choice (it supplies the Dependent Choice of the derived
Hom, [[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $X$ be a
scheme, let $F$ be a locally free $\mathcal O_X$-module of finite rank
([[def-locally-free-sheaf-finite-rank]]) regarded as a complex in degree $0$,
and let $M$ be a quasi-coherent $\mathcal O_X$-module with
$T=\mathcal Hom_{\mathcal O_X}(F,M)\cong F^\vee\otimes_{\mathcal O_X}M$
([[def-internal-hom-qc-sheaves]], [[lem-dual-locally-free-and-base-change]],
[[def-invertible-sheaf]]). Then for every $i$,
$$\operatorname{Ext}^i_{\mathcal O_X}(F,M)\cong H^i\bigl(X,\mathcal Hom_{\mathcal O_X}(F,M)\bigr)=H^i(X,F^\vee\otimes M),$$
so in particular $\operatorname{Ext}^0=H^0(X,T)$,
$\operatorname{Ext}^1=H^1(X,T)$ and $\operatorname{Ext}^2=H^2(X,T)$.
Applying this to $F=\Omega^1_{X/S}$ for $S$-smooth $X$ gives the classical
deformation cohomology groups $H^i(X,T_{X/S}\otimes M)$ with tangent sheaf
$T_{X/S}=\mathcal Hom(\Omega^1_{X/S},\mathcal O_X)$.

## Facts & Assumptions

**Given:** a scheme $X$, a locally free finite-rank $\mathcal O_X$-module $F$, a quasi-coherent $\mathcal O_X$-module $M$, and the Axiom of Choice.

[F1] $\operatorname{Ext}^i_{\mathcal O_X}(K,N)=H^i(\mathbf R\operatorname{Hom}_{\mathcal O_X}(K,N))$ for a bounded-above complex $K$ and a module $N$ in degree $0$, and a bounded-below injective resolution $N\to J^\bullet$ computes this derived Hom by the global Hom complex $\operatorname{Hom}_{\mathcal O_X}(K,J^\bullet)$. ([[def-ext-groups-of-the-cotangent-complex]], [[def-derived-hom-in-the-bounded-setting]])

[F2] For $\mathcal O_X$-modules there is the tensor-Hom adjunction $\operatorname{Hom}_{\mathcal O_X}(F\otimes_{\mathcal O_X}N,N')=\operatorname{Hom}_{\mathcal O_X}(N,\mathcal Hom_{\mathcal O_X}(F,N'))$, and if $F$ is locally free then $\mathcal Hom_{\mathcal O_X}(F,-)$ is exact and $\mathcal Hom(F,N)$ is again a sheaf of $\mathcal O_X$-modules. ([[def-internal-hom-qc-sheaves]], [[def-sheaf-hom]])

[F3] For every sheaf $\mathcal G$ of $\mathcal O_X$-modules, the functor $\operatorname{Hom}_{\mathcal O_X}(\mathcal O_X,\mathcal G)$ is the global-sections functor $\Gamma(X,\mathcal G)$, and its right derived functors are the cohomology groups $H^i(X,\mathcal G)$. ([[def-sheaf-cohomology-derived-global-sections]], [[lem-injective-modules-flasque-and-ext-of-structure-sheaf]])

[F4] $F^\vee=\mathcal Hom_{\mathcal O_X}(F,\mathcal O_X)$ is finite locally free, and for finite locally free $F$ there is a canonical isomorphism $\mathcal Hom_{\mathcal O_X}(F,M)\cong F^\vee\otimes_{\mathcal O_X}M$. ([[lem-dual-locally-free-and-base-change]], [[def-invertible-sheaf]])

[F5] If $f:X\to S$ is smooth then $L_{X/S}\simeq\Omega^1_{X/S}[0]$ and $\Omega^1_{X/S}$ is locally free of finite rank. ([[lem-cotangent-complex-truncation-and-smooth-case]], [[thm-differentials-smooth-locally-free]], [[def-sheaf-relative-differentials]], [[def-smooth-morphism-schemes]])

## Proof

**Proof technique:** replace the derived Hom out of a locally free sheaf by global sections of its Hom sheaf using exactness and the tensor-Hom adjunction, then specialize along the smooth case of the cotangent complex.

1.1 Choose an injective resolution $M\to J^\bullet$ in sheaves of $\mathcal O_X$-modules, as in [F1]. The sheaf functor $\mathcal Hom(F,-)$ is exact: on an open where $F\cong\mathcal O_X^r$ it is the finite-product functor $(-)^r$. It also preserves injectives. Indeed, for an injective $J$, the adjunction $\operatorname{Hom}(N,\mathcal Hom(F,J))\cong\operatorname{Hom}(F\otimes N,J)$ shows that the left side is exact in $N$, since $F\otimes-$ is exact by the same local freeness argument. Thus $\mathcal Hom(F,M)\to\mathcal Hom(F,J^\bullet)$ is an injective resolution. The complexes $\operatorname{Hom}(F,J^\bullet)$ and $\Gamma(X,\mathcal Hom(F,J^\bullet))$ agree degreewise by [F2]. The first computes $\operatorname{Ext}^i(F,M)$ by [F1], and the second computes $H^i(X,\mathcal Hom(F,M))$ by [F3]: module-injectives are flasque as abelian sheaves, so their resolution computes the stipulated abelian-sheaf cohomology. This gives the claimed natural identification. [F1, F2, F3, given]

1.2 By [F4] the Hom sheaf is the tensor product $\mathcal Hom(F,M)\cong F^\vee\otimes M$, so the displayed isomorphisms give the formula of the Statement; the cases $i=0,1,2$ are the specialization to those degrees. [F4]

2.1 For the smooth specialization, [F5] gives $L_{X/S}\simeq\Omega^1_{X/S}[0]$ with $\Omega^1_{X/S}$ locally free of finite rank; applying step 1.1 with $F=\Omega^1_{X/S}$ and using the definition $\operatorname{Ext}^i(L_{X/S},M)=H^i(\mathbf R\operatorname{Hom}(L_{X/S},M))$ together with the quasi-isomorphism gives $\operatorname{Ext}^i_{\mathcal O_X}(L_{X/S},M)\cong H^i(X,\mathcal Hom(\Omega^1_{X/S},M))=H^i(X,T_{X/S}\otimes M)$, which is the classical deformation cohomology. The Axiom of Choice is inherited from the derived-Hom and injective-resolution/cohomology suppliers. [F1, F5, given] ∎

**Source application.** The smooth specialization uses the smooth-cotangent comparison of the declared supplier, proved there by the exact Stacks tag 08R5 application. The general finite locally free Ext formula above is proved with injective resolutions.
