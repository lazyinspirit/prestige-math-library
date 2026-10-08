---
id: thm-smooth-function-module-sheaves-are-acyclic
kind: theorem
title: Sheaves of smooth-function modules are cohomologically acyclic
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - lem-smooth-maps-paste-over-an-open-cover
  - def-ringed-space
  - def-module-on-ringed-space
  - def-restriction-sheaf-open-subspace
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - lem-sheaf-section-over-empty-set-terminal
  - thm-exactness-of-sheaves-stalkwise
  - def-kernel-cokernel-image-sheaves
  - thm-abelian-sheaves-form-abelian-category
  - lem-ringed-space-module-sheaves-enough-injectives
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - thm-flasque-sheaves-acyclic
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-global-sections-functor-sheaves
  - def-sheaf-cohomology-derived-global-sections
  - def-f-acyclic-resolution
  - def-acyclic-object-for-a-left-exact-functor
  - thm-acyclic-resolution-theorem-for-right-derived-functors
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §12.6, printed p. 100: H^1 of the differentiable-function sheaf is killed by a partition-of-unity contraction of Čech 1-cocycles; Forster uses direct-limit Čech cohomology, so this is a related special case, not the derived-cohomology proof below"
    - title: The Stacks Project, Sheaves of Modules
      url: https://stacks.math.columbia.edu/tag/01DI
      locator: "Section 19.5, Lemma 19.5.1: module sheaves have enough injectives"
    - title: The Stacks Project, Cohomology of Sheaves
      url: https://stacks.math.columbia.edu/tag/01EA
      locator: "Section 20.8, Lemma 20.8.1: injective O_X-module sheaves are flasque as abelian sheaves"
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $M$ be a smooth manifold
([[def-smooth-manifold]]), let
$\mathcal A=\mathcal C_M^\infty$ be its sheaf of real-valued smooth functions,
and let $\mathcal F$ be a sheaf of $\mathcal A$-modules. Then for every open
$U\subseteq M$ and every $q>0$,
$$H^q(U,\mathcal F|_U)=0.$$
The Axiom of Choice supplies injective resolutions for module sheaves and for
abelian-sheaf cohomology. Its consequences $\mathrm{AC}_\omega$ and DC supply,
respectively, the partitions of unity and the acyclic-resolution comparison
used below; no stronger choice principle is used.

## Facts & Assumptions

**Given:** A smooth manifold $M$, its sheaf $\mathcal A=\mathcal C_M^\infty$ of
smooth real-valued functions, an $\mathcal A$-module sheaf $\mathcal F$, and an
open subset $U\subseteq M$.

[F1] Smooth functions are $C^\infty$ maps, and smooth maps that agree on an
open cover paste uniquely. Thus $\mathcal A$ is a sheaf of commutative rings
and $(M,\mathcal A)$ is a ringed space
([[def-c-r-and-smooth-maps-between-smooth-manifolds]],
[[lem-smooth-maps-paste-over-an-open-cover]], [[def-sheaf-on-topological-space]],
[[def-ringed-space]]).

[F2] Under AC, sheaves of modules on a ringed space have a supplied functorial
injective resolution. A module-sheaf sequence is exact exactly when its
underlying abelian-sheaf sequence is exact: kernels are subsheaves with the
inherited module action, and cokernels are the sheafified objectwise quotients
with their induced action ([[lem-ringed-space-module-sheaves-enough-injectives]],
[[def-module-on-ringed-space]], [[def-kernel-cokernel-image-sheaves]],
[[thm-abelian-sheaves-form-abelian-category]],
[[thm-exactness-of-sheaves-stalkwise]]).

[F3] Every injective module sheaf is flasque as an abelian sheaf, and every
flasque abelian sheaf is acyclic for global sections on each open subset
([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]],
[[thm-flasque-sheaves-acyclic]]).

[F4] Full AC implies DC and $\mathrm{AC}_\omega$; under $\mathrm{AC}_\omega$,
every open cover of a smooth manifold has a smooth partition of unity whose
supports are locally finite and contained in their indexed cover members
([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]],
[[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[F5] An epimorphism of sheaves is surjective on stalks; each germ is represented
by a local section, and exactness of sheaves is stalkwise
([[def-stalk-of-presheaf]], [[thm-exactness-of-sheaves-stalkwise]]).

[F6] The global-sections functor is additive and left exact, sheaf cohomology is
its right derived functor on abelian sheaves, and an exact resolution by
$\Gamma$-acyclic objects computes those derived functors when its cycles lie in
the domain of the supplied injective data ([[def-global-sections-functor-sheaves]],
[[def-sheaf-cohomology-derived-global-sections]], [[def-f-acyclic-resolution]],
[[def-acyclic-object-for-a-left-exact-functor]],
[[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F7] Every sheaf has exactly one section over the empty open set
([[lem-sheaf-section-over-empty-set-terminal]]).

[F8] Restriction to an open subspace is the inverse-image sheaf; restricting a
module sheaf restricts its scalar sheaf and module action
([[def-restriction-sheaf-open-subspace]], [[def-module-on-ringed-space]]).

## Proof

**Proof technique:** exactness of global sections on smooth-module sheaves,
followed by a module-injective resolution whose terms are flasque as abelian
sheaves.

1.1 Fix an open $U\subseteq M$ and write $\mathcal A_U=\mathcal C_U^\infty$; restriction makes $\mathcal F|_U$ an $\mathcal A_U$-module sheaf by [F8]. If $U=\varnothing$, [F7] makes every global-section group zero, so exactness is immediate; suppose $U\ne\varnothing$. To prove that $\Gamma(U,-)$ is exact on these module sheaves, it suffices by left exactness in [F6] to prove surjectivity on global sections for an epimorphism $p:\mathcal G\to\mathcal H$. Fix $s\in\mathcal H(U)$. If $s$ has a global lift $t\in\mathcal G(U)$, take $g=t$. Otherwise index all local lift data by pairs $(V,t)$ with $V\subseteq U$ open, $t\in\mathcal G(V)$, and $p(t)=s|_V$. Their domains cover $U$ by [F5]. Use [F4] to choose a smooth partition of unity $(\rho_{(V,t)})$ subordinate to this indexed cover. On $V$, the product $\rho_{(V,t)}t$ extends by zero to a section of $\mathcal G(U)$: use zero on $U\setminus\operatorname{supp}\rho_{(V,t)}$; these definitions agree on the overlap because $\rho_{(V,t)}=0$ there. The extended sections are locally finite, so their local finite sums glue to $g\in\mathcal G(U)$ by the sheaf axiom, and $p(g)=\sum_{(V,t)}\rho_{(V,t)}s=s$. Thus $\Gamma(U,-)$ is exact on $\mathcal A_U$-module sheaves. [F1, F4, F5, F6, F7, F8, construct]

2.1 By [F2], choose the supplied injective resolution of the restricted module $0\to\mathcal F|_U\to\mathcal I^0\to\mathcal I^1\to\cdots$ in $\operatorname{Mod}(\mathcal A_U)$, using [F8]. Its underlying sequence of abelian sheaves is exact by [F2]. Each $\mathcal I^j$ is flasque as an abelian sheaf by [F3], so it is $\Gamma(U,-)$-acyclic; the successive cycles are abelian sheaves and therefore lie in the domain of the supplied abelian-sheaf cohomology data [F6]. By [F4], AC supplies DC, so the acyclic-resolution theorem identifies $H^q(U,\mathcal F|_U)$ with the cohomology of $\Gamma(U,\mathcal I^\bullet_{\mathrm{del}})$. Step 1.1 makes this complex exact in every positive degree, hence the cohomology vanishes for $q>0$. Since $U$ was arbitrary, the theorem follows. Full AC is used for the two injective-resolution data; its consequences $\mathrm{AC}_\omega$ and DC are used in [F4] and the acyclic-resolution comparison, respectively. [F1, F2, F3, F4, F6, F8, step 1.1, given] ∎
