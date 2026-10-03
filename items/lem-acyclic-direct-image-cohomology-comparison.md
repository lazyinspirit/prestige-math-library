---
id: lem-acyclic-direct-image-cohomology-comparison
kind: lemma
title: "Cohomology comparison when higher direct images vanish"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-direct-image-sheaf
  - def-higher-direct-image-sheaf
  - def-flasque-sheaf
  - thm-godement-resolution-flasque
  - thm-flasque-sheaves-acyclic
  - lem-higher-direct-image-local-section-formula
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - def-sheaf-cohomology-derived-global-sections
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves, Section 20.13"
      url: "https://stacks.math.columbia.edu/tag/01EY"
      locator: "Lemma 20.13.6(1); Remark 20.13.2 and Lemma 20.13.3; direct acyclic-resolution proof"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:X\to Y$ be a
morphism of schemes and $\mathcal F$ an $\mathcal O_X$-module. If
$R^qf_*\mathcal F=0$ for all $q>0$, then the natural cohomology comparison is
an isomorphism
$$H^n(Y,f_*\mathcal F)\xrightarrow{\sim}H^n(X,\mathcal F)\qquad(n\ge0).$$
The comparison is natural in $\mathcal F$, agrees in degree zero with the
identity $\Gamma(Y,f_*\mathcal F)=\Gamma(X,\mathcal F)$, and applies also to
$f$ restricted over any open subset of $Y$ where the same vanishing holds.
No quasi-coherence, separatedness or properness of $f$ is required.

## Facts & Assumptions

**Given:** The Axiom of Choice, a morphism of schemes $f:X\to Y$ and an
$\mathcal O_X$-module $\mathcal F$ with vanishing higher direct images.

[F1] [[thm-godement-resolution-flasque]]: Under Choice the Godement resolution of an abelian sheaf is functorial, exact, has flasque terms, and computes its sheaf cohomology.

[F2] [[lem-ringed-space-module-sheaves-enough-injectives]]: The category of modules on a ringed space is abelian with supplied functorial injective resolutions under Choice; forgetting the module structure preserves kernels, cokernels and exactness.

[F3] [[def-flasque-sheaf]] and [[thm-flasque-sheaves-acyclic]]: A flasque sheaf has surjective restrictions and has zero positive cohomology on every open subset.

[F4] [[def-direct-image-sheaf]] and [[lem-higher-direct-image-local-section-formula]]: Direct image sections on $V$ are sections on $f^{-1}V$, and higher direct images of a module are sheafifications of $V\mapsto H^q(f^{-1}V,\mathcal F)$, with no restriction on the morphism.

[F5] [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-higher-direct-image-sheaf]] and [[def-sheaf-cohomology-derived-global-sections]]: An exact resolution by objects acyclic for a left exact functor computes its right derived functors, with canonical comparison, provided its syzygies lie in the domain of the supplied resolution datum.

[F6] [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: Choice supplies Dependent Choice, as needed for acyclic-resolution comparisons.

## Proof

1.1 Apply the Godement construction to the underlying abelian sheaf of $\mathcal F$, retaining its module structure. For a module $G$, the first term on an open $U$ is $\prod_{x\in U}G_x$, with $a\in\mathcal O_X(U)$ acting through its germ on each factor. The germ map is module-linear; take its module cokernel and repeat. Since these cokernels have the same underlying abelian sheaves, this yields an exact functorial module resolution $\mathcal F\to G^\bullet$ whose terms are flasque and whose section complex computes $H^n(X,\mathcal F)$. All modules and syzygies lie in the supplied datum's domain, and Choice supplies the required Dependent Choice. [F1, F2, F6, given]

1.2 Every flasque module $G$ is $f_*$-acyclic: on every open $V\subset Y$, flasque acyclicity gives $H^q(f^{-1}V,G)=0$ for $q>0$, and the local-section formula gives $R^qf_*G=0$. Moreover $f_*G$ is flasque, since its restrictions are the restrictions of $G$ along inverse-image opens. These facts hold for arbitrary $f$. [F3, F4]

2.1 Apply the acyclic-resolution theorem to $f_*$ and $G^\bullet$. It identifies the cohomology sheaves of $f_*G^\bullet$ with $R^qf_*\mathcal F$. The hypothesis makes this an exact coaugmented resolution of $f_*\mathcal F$, and its terms are flasque by step 1.2. Forget the $\mathcal O_Y$-module structure, preserving exactness by [F2]. All terms and syzygies are then in $\mathrm{Ab}(Y)$, the full domain of the supplied cohomology datum. Apply the acyclic-resolution theorem to $\Gamma(Y,-)$ on that category; this resolution computes $H^n(Y,f_*\mathcal F)$. Its global section complex equals $\Gamma(X,G^\bullet)$ term by term, so step 1.1 gives the claimed comparison isomorphism. [F2, F4, F5, step 1.1, step 1.2]

3.1 Functoriality of Godement and of the acyclic-resolution comparisons makes these identifications natural and independent of presentations. In degree zero they are exactly the equality of direct-image global sections. Restricting over an open of $Y$ repeats the same proof. Empty schemes and the zero module give zero complexes, and for the identity morphism the comparison is the identity. [F1, F4, F5, step 2.1] ∎
