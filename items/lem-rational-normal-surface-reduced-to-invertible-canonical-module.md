---
id: lem-rational-normal-surface-reduced-to-invertible-canonical-module
kind: lemma
title: Rational normal surfaces reduce to an invertible canonical module
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 13
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-blowup-of-closed-point-of-regular-surface-is-regular
- lem-normal-projective-surface-dualizing-module-over-regular-local-base
- lem-normalized-point-blowups-dominate-local-normal-surface-modifications
- lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup
- lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology
- lem-rational-singular-point-blowup-canonical-pullback-surjective
- lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
- lem-regular-base-dualizing-traces-compose-on-rational-modifications
- lem-regular-base-surface-cartier-curve-canonical-adjunction
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, Sections 54.8–54.9: complete source arguments with local
      prerequisite replacements'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and DC. A rational normal local surface domain in the permitted regular-base dualizing setting admits a finite sequence of ordinary point blowups at singular closed points, with each model normal and projective, whose terminal canonical module is invertible. Its closed local rings remain rational; an invertible canonical module with finite injective dimension makes them Gorenstein.

## Facts & Assumptions

**Given:** A rational normal local surface domain $A$ in the permitted regular-base dualizing setting, its finite torsion-free rank-one canonical module $\omega_A$, and projective normal modifications of $A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F4] *lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup.* Assume AC and DC. For a finite torsion-free rank-one module $M$ over a Noetherian domain $A$, there is a nonzero ideal $J$ and a blowup $b:Y=\operatorname{Bl}_J\operatorname{Spec}A\to\operatorname{Spec}A$ such that $b^*M$ modulo torsion is invertible; the same holds on every integral model dominating $Y$. ([[lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup]])

[F5] *lem-normalized-point-blowups-dominate-local-normal-surface-modifications.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]])

[F6] *lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology.* Assume AC and DC. For a rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X$ is normal. Its exceptional fibre $E$ is a projective pure CM curve, its tautological conormal line $L=\mathcal O_E(1)$ is very ample, and $H^1(E,L^n)=0$, $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$. ([[lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology]])

[F7] *lem-rational-singular-point-blowup-canonical-pullback-surjective.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. ([[lem-rational-singular-point-blowup-canonical-pullback-surjective]])

[F8] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F9] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

[F10] *lem-regular-base-surface-cartier-curve-canonical-adjunction.* Assume AC and DC. For a normal projective surface modification $X$ over a finite normal local domain $A$ of a regular two-dimensional local ring $R$, let $E$ be a Cartier closed fibre with residue field $\kappa$ and conormal $L=O_X(-E)|_E$. ([[lem-regular-base-surface-cartier-curve-canonical-adjunction]])

[F11] *lem-blowup-of-closed-point-of-regular-surface-is-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S$ be a **regular surface**: a locally Noetherian scheme of pure dimension two all of whose local rings are regular (def-embedding-dimension-and-regular-local-ring). ([[lem-blowup-of-closed-point-of-regular-surface-is-regular]])

## Proof

1.1 The canonical module $\omega_A$ is finite, torsion-free of generic rank one; the principalization helper produces a nonzero ideal $J$ with blowup $b\colon Y=\operatorname{Bl}_J\operatorname{Spec}A\to\operatorname{Spec}A$ such that $b^*\omega_A$ modulo torsion is invertible, a property inherited by every integral model dominating $Y$. [F3, F4, given]

2.1 Applying the normalized-point-blowup domination helper to a normal modification dominating $Y$ gives a finite sequence of proper normalized point blowups over $A$, projective over $A$, whose terminal model dominates $Y$; rationality propagates to the local rings of every normal model, and the rational point-blowup helper shows each of those point blowups is already normal, so every normalization in the sequence is the identity and the sequence consists of ordinary point blowups. [F5, F6, F8, step 1.1]

3.1 Let $X$ be the terminal model and $L$ the invertible torsion-free quotient of $p^*\omega_A$. Fix a singular closed point $x\in X$. Each of its images on the preceding models is singular: blowing up a regular point gives a regular neighbourhood, and subsequent point blowups there remain regular. Along this path each arrow is either an isomorphism at the image point or a blowup at a singular rational point; the latter canonical evaluation is surjective. Compatibility of evaluations therefore makes $(p^*\omega_A)_x\to\omega_{X,x}$ surjective. No surjectivity at the exceptional curve of a regular point blowup is asserted. [F7, F9, F11, step 2.1]

4.1 At this singular point $x$, torsion-freeness of $\omega_X$ makes the surjection factor through the invertible quotient $L_x$, giving $L_x\twoheadrightarrow\omega_{X,x}$. Its generic isomorphism makes the kernel a torsion submodule of the torsion-free line $L_x$, hence zero. Thus $\omega_X$ is invertible at singular closed points. At every regular point it is invertible by the regular-stalk canonical-module computation. These assertions cover the surface, whose nonclosed points are regular. [F10, step 3.1]

5.1 If an initial centre of the sequence was a regular point, its entire descendant region is regular because a point blowup of a regular surface at a closed point stays regular; deleting that step and all later centres lying over it, and gluing the retained point blowups with the identity on the deleted regular region, retains an invertible canonical module on the terminal model and leaves only singular centres and whose terminal canonical module is still invertible. [F11, step 4.1]

6.1 The closed local rings of every model are rational by propagation; finally, an invertible canonical module identifies each local dualizing complex with the shift of a free module of rank one, whose finite injective dimension is exactly the Gorenstein condition for the local ring, so the terminal closed local rings are Gorenstein; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F8, step 4.1, step 5.1] ∎

## Remarks

- The principalization is by an ideal blowup; domination by point blowups is what converts it into the ordinary sequence used later.
- A regular centre can be deleted without touching the geometry over the singular region.
