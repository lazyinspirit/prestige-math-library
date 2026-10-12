---
id: lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications
kind: lemma
title: Complex algebraic morphisms admit compatible finite smooth stratifications
status: draft
origin: session
deps: [lem-classical-variety-noetherian-components, lem-dimension-nonempty-open-subset, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-regular-equals-smooth-over-perfect-field, thm-generic-smoothness-characteristic-zero, lem-smooth-map-tangent-surjectivity-criterion, thm-holomorphic-implicit-function-theorem, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, Section 8
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Assume AC. Let $f:X\to Y$ be one morphism of reduced separated complex algebraic varieties of finite type, and prescribe finitely many closed algebraic subsets of each. There are finite partitions of $X$ and $Y$ into irreducible smooth locally closed algebraic strata such that every prescribed subset is a union of strata, every stratum closure is a union of strata of no larger dimension with its boundary of strictly smaller dimension, and each source stratum maps surjectively and smoothly onto one target stratum. On analytic spaces each such restriction is a submersion. The source may be empty. This assertion imposes no Whitney condition, conical control or topological triviality.

## Facts & Assumptions

**Given:** AC, one morphism $f:X\to Y$, and the two finite lists of prescribed closed algebraic subsets.

[F1] Varieties and their locally closed subvarieties have finite affine covers and finitely many irreducible components; their topology is Noetherian ([[lem-classical-variety-noetherian-components]]).

[F2] Nonempty opens of an irreducible variety are dense and preserve dimension; a proper closed subvariety has smaller dimension ([[lem-dimension-nonempty-open-subset]]).

[F3] Reduced finite-type varieties over the perfect field $\mathbb C$ have dense open regular loci on every component, and these loci are smooth ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]]).

[F4] For a morphism from a smooth irreducible variety to an irreducible target in characteristic zero, a dense target open has smooth inverse-image restriction. In the dominant case it can be further shrunk to lie in the image; in the nondominant case the open can avoid the image altogether ([[thm-generic-smoothness-characteristic-zero]]).

[F5] Algebraic smoothness between smooth complex varieties implies surjectivity on tangent spaces ([[lem-smooth-map-tangent-surjectivity-criterion]]); locally standard smooth polynomial presentations produce holomorphic manifold charts by [[thm-holomorphic-implicit-function-theorem]].

[A1] AC is inherited through [F1]–[F5] ([[def-axiom-of-choice]]).

## Proof

1.1 First construct a finite smooth frontier partition of any reduced variety $Z$ respecting a finite list $\mathcal C$ of closed subsets. In each irreducible component $Z_i$, remove its nonsmooth locus, its intersections with all other components, and each $C\cap Z_i$ for which $C\in\mathcal C$ does not contain $Z_i$. The resulting $U_i$ is a nonempty dense smooth open subset of $Z_i$ by [F1]–[F3], and is open in $Z$ because it misses all other components. Its closure is $Z_i$. Distinct $U_i$ are disjoint and each is either contained in or disjoint from every $C$. The complement $Z'=Z\setminus\bigcup_iU_i$ is closed and intersects each component in a proper closed subset, so $\dim Z'<\dim Z$. On $Z'$ repeat the operation with the inherited list $\mathcal C$ enlarged by all $Z_i$. Induction on the nonnegative dimension terminates, gives finitely many irreducible smooth locally closed strata, and makes every $Z_i$ a union of subsequent strata. Thus each $\overline{U_i}=Z_i$ is a union of strata; the same argument at each later round establishes the frontier condition for all strata. Empty input has the empty partition. [F1, F2, F3, A1, construct]

2.1 Construct target strata in rounds on a closed residual subvariety $R\subseteq Y$, beginning with $R=Y$. Maintain lists of prescribed closed sets in $R$ and in $f^{-1}(R)$; besides the original lists these include the restrictions of closures of all previously emitted strata. Produce a source smooth frontier partition $\{Z_\alpha\}$ of $f^{-1}(R)$ by step 1.1 respecting the maintained source list. Take an irreducible component $R_i$ of $R$. Choose its dense smooth open away from other components and away from each target prescribed closed subset not containing $R_i$, exactly as in step 1.1. For each $Z_\alpha$, its image closure is irreducible and lies in a component of $R$. If that closure is not $R_i$, remove its intersection with $R_i$, which is proper closed; if it is $R_i$, use [F4] to shrink to a dense open of $R_i$ on which $Z_\alpha\to R_i$ is smooth and onto. There are finitely many $\alpha$, so all these requirements leave a nonempty dense open $V_i\subseteq R_i$. [F1, F2, F3, F4, step 1.1, construct]

3.1 Emit each $V_i$ as a target stratum. The nonempty subsets $Z_\alpha\cap f^{-1}(V_i)$ are open in $Z_\alpha$, since $V_i$ is open in $R$, hence irreducible smooth locally closed source strata. Each maps smoothly and onto $V_i$ by its selection in step 2.1. Every source point over $V_i$ belongs to exactly one such stratum. Source frontier relations over this open target set follow from the frontier partition $\{Z_\alpha\}$: closure commutes with restriction to the open $f^{-1}(V_i)$, so each closure intersects that open in a union of these emitted strata. The closure of an emitted source stratum maps into the closed component $R_i$ and therefore misses every $V_j$ with $j\ne i$. Prescribed source and target subsets remain unions of emitted strata by construction. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 Put $R'=R\setminus\bigcup_i V_i$. It is closed, and $\dim R'<\dim R$ because each component lost a dense open. Enlarge the next target prescription list by the closures of the emitted target strata, and enlarge the next source list by the closures in $X$ of the emitted source strata. Restrict these lists to $R'$ and $f^{-1}(R')$ and repeat steps 2.1–3.1. The target dimension drops every round, so after finitely many rounds all target and source points have been partitioned. Compatibility with each earlier stratum closure is maintained by the enlarged lists, giving the frontier condition across rounds as well as within rounds. An emitted stratum is dense open in its own irreducible closure, and its boundary is proper closed there, so every boundary stratum has strictly smaller dimension by [F2]. [F1, F2, step 2.1, step 3.1, construct]

5.1 Smooth complex algebraic strata are complex manifolds analytically: on a locally standard smooth affine presentation a full-rank Jacobian minor lets [F5] solve the defining polynomial equations holomorphically for the dependent coordinates. Between these charts the differential of each emitted restriction is surjective by [F5], so it is a holomorphic, hence real smooth, submersion. No global properness is used, no restriction to a nonclosed stratum is asserted proper, and the empty source contributes no source strata. AC is carried from the indicated suppliers only. [F5, A1, step 3.1, step 4.1] ∎

## Scope note

Whitney regularity is a separate additional input. This lemma is an actual preparatory construction for the owned compatible-Whitney-stratification theorem; it does not narrow or discharge that stronger candidate. A finite cyclic diagram with one stratification used on repeated objects may require infinitely many strata under prescribed supports: for $z\mapsto z^2$ on the affine line, making $\{2\}$ a union of strata and making the map send strata into strata forces every iterated inverse image of $2$ to be a union of zero-dimensional strata, which is impossible with finitely many strata. Thus “finitely many maps” requires a precise diagram contract and cannot be inserted as an unrestricted clause.
