---
id: "lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex"
kind: "lemma"
title: "Cech hypercohomology of an affine cover computes Ext of the cotangent complex"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 13
justified_by: []
aliases: []
deps:
  - "thm-flasque-sheaves-acyclic"
  - "thm-injective-complexes-model-the-bounded-below-derived-category"
  - "lem-injective-modules-flasque-and-ext-of-structure-sheaf"
  - "def-ext-groups-of-the-cotangent-complex"
  - "thm-cech-to-sheaf-cohomology-comparison"
  - "thm-leray-acyclic-cover-theorem"
  - "thm-qc-sheaf-affine-higher-cohomology-vanishes"
  - "def-cech-cohomology-open-cover"
  - "def-cech-cochain-complex-open-cover"
  - "def-acyclic-cover-for-sheaf"
  - "def-quasi-coherent-module-scheme"
  - "def-derived-hom-in-the-bounded-setting"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "thm-first-hypercohomology-spectral-sequence"
  - "thm-hyper-ext-spectral-sequence"
  - "def-sheaf-cohomology-derived-global-sections"
  - "def-quasi-isomorphism"
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
    - title: "The Stacks Project, injective resolutions of bounded-below complexes"
      url: "https://stacks.math.columbia.edu/tag/013K"
      locator: "Lemma 13.18.3(3), full statement and proof; a bounded-below complex in a category with enough injectives has a bounded-below injective resolution. Read 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.16.1 (tag 08SP) and Lemma 92.21.1 (tag 08UZ) with their proofs: the Cech computation of Ext of the cotangent complex on an affine cover (printed pages 25-33, read 2026-10-05)"
    - title: "The Stacks Project, Cohomology on Sites, complete chapter (Chapter 21)"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
      locator: "Section 21.10, Lemma 10.6 (tag 03AZ) with its full proof: the Cech-to-cohomology spectral sequence E_2^{p,q} = Cech^p(U, H^q(F)) => H^{p+q}(U,F) for a covering U of a site (printed page 15, read 2026-10-05). This source is the single-sheaf statement. The complex-level comparison is proved in steps 1.1 and 2.1 below; it is not inferred from this statement alone."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a quasi-compact separated scheme with a finite affine open cover $\mathfrak U=\{U_i\}$, let $L$ be a bounded-above complex of $\mathcal O_X$-modules with quasi-coherent cohomology, and let $M$ be a quasi-coherent module. Put $K=\mathbf R\mathcal Hom_{\mathcal O_X}(L,M)$. Form the derived Cech total complex whose component on $U_{i_0\dots i_p}$ is $\mathbf R\Gamma(U_{i_0\dots i_p},K)$. Its degree-$n$ cohomology is canonically $\operatorname{Ext}^n_{\mathcal O_X}(L,M)$ ([[def-ext-groups-of-the-cotangent-complex]]). If $K$ is represented by a bounded-below complex whose terms are acyclic on every cover intersection, ordinary sections of that representative give the same total complex. In particular, under this acyclicity hypothesis, a complex of locally free resolutions computing derived Hom can be used for the usual Cech double complex. Arbitrary underived $\mathcal Hom^\bullet(L,M)$ is not asserted to compute Ext.

Consequently, whenever local deformation classes, automorphisms and compatibility data are represented by the degree $0,1,2$ truncation of this derived Hom complex, their descent classes and obstruction classes are computed by the global groups $\operatorname{Ext}^1$ and $\operatorname{Ext}^2$, respectively.

## Facts & Assumptions

**Given:** $X,L,M,\mathfrak U$ as in the Statement and the Axiom of Choice.

[F1] Ext is the cohomology of global derived Hom, equivalently of $\mathbf R\Gamma(X,\mathbf R\mathcal Hom(L,M))$. ([[def-ext-groups-of-the-cotangent-complex]], [[def-derived-hom-in-the-bounded-setting]])

[F2] Flasque abelian sheaves are acyclic on every open ([[thm-flasque-sheaves-acyclic]]). Module-injectives are flasque as abelian sheaves and compute the stipulated sheaf cohomology ([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]]). Sheaf cohomology is computed by an injective resolution, and bounded-below complex hypercohomology is its derived global sections. ([[def-sheaf-cohomology-derived-global-sections]], [[thm-first-hypercohomology-spectral-sequence]])

[F3] The ordered Cech complex of a finite open cover has the usual alternating restriction differential. ([[def-cech-cochain-complex-open-cover]])

[F4] Higher cohomology of a quasi-coherent sheaf on an affine scheme vanishes. ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

## Proof


1.1 The global/internal derived-Hom comparison in [F1] can be computed explicitly. Let $M\to I^\bullet$ be a bounded-below module-injective resolution. Since restriction preserves injectives (its left adjoint, extension by zero, is exact), the bounded-below complex $K_0=\mathcal Hom^\bullet(L,I^\bullet)$ computes internal derived Hom on every open. Each term is a finite product of sheaves $\mathcal Hom(L^a,I^b)$, because $L$ is bounded above. These sheaves are flasque: a morphism $L|_U\to I|_U$ extends over $V\supset U$ by injectivity of $I|_V$ applied to $j_!(L|_U)\hookrightarrow L|_V$. Thus $K_0$ has global-section-acyclic terms and the bounded-below hypercohomology comparison [F2] identifies $\mathbf R\Gamma(X,K_0)$ with $\Gamma(X,K_0)=\operatorname{Hom}^\bullet(L,I^\bullet)$, the complex computing global derived Hom. This establishes [F1]. [F1, F2, given]

1.2 Resolve $M$ injectively and compute the internal derived Hom, then replace the resulting bounded-below complex $K$ by a bounded-below injective complex $J$, using Stacks tag 013K and the enough-injectives assertion of [[lem-injective-modules-flasque-and-ext-of-structure-sheaf]] through its module-injective supplier. Boundedness below follows from $L$ being bounded above and $M$ being in degree zero. The augmented sheaf Cech complex of each $J^q$ is exact: near a point choose one cover member containing it, shrink inside that member, and insert its index in the alternating Cech differential to obtain a contracting homotopy of the augmentation. Restriction of an injective sheaf of modules to an open is injective, since extension by zero is its exact left adjoint. Thus every intersection has no higher cohomology for $J^q$. For an intersection inclusion $j$, the module $j_*(J^q|_U)$ is injective because $j_*$ is right adjoint to the exact restriction functor. Thus the augmented sheaf Cech complex is an injective resolution of the injective $J^q$ and splits into short exact sequences, so applying global sections preserves its exactness. The double-complex filtration therefore gives a quasi-isomorphism from $\Gamma(X,J)$ to the total complex of $\Gamma(U_{i_0\dots i_p},J)$. The cover direction is finite, so totalization and its filtration converge in every degree. Each column computes $\mathbf R\Gamma(U_{i_0\dots i_p},K)$ by injectivity, and $\Gamma(X,J)$ computes $\mathbf R\Gamma(X,K)$. Taking cohomology and [F1] proves the derived Cech assertion. [F1, F2, F3, given]

2.1 For a bounded-below representative $K'$ with acyclic terms on every intersection, the first hypercohomology spectral sequence [F2] collapses to the ordinary section complex on each intersection. Replacing the derived columns in step 1.2 by these section complexes therefore preserves the total cohomology; the finite cover filtration again ensures convergence. Affine quasi-coherent terms are one sufficient case of the required acyclicity by [F4]. Finally, when the local deformation data are represented by the indicated truncation of derived Hom, their degree-one descent cocycles and degree-two obstruction cocycles have precisely the total cohomology just computed. This last application requires the stated representation of local deformation data; cohomology comparison by itself does not construct that representation. [F1, F2, F4, step 1.2] ∎

