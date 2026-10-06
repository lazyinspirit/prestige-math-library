---
id: lem-local-normalized-point-blowup-sequences-spread-at-closed-points
kind: lemma
title: "Local normalized point sequences spread at closed surface points"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-eventual-global-generation-coherent-twists,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    lem-relative-spec-glues-affine-algebras, lem-surface-finite-type-normalization-finite,
                    thm-blowup-base-change-flat, thm-integrality-commutes-with-localisation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $X$ be a normal integral surface locally of finite type over a permitted base and $x\in X$ a closed point with two-dimensional local ring $B$. Any finite normalized point-blowup sequence over $\operatorname{Spec}B$ spreads to the same finite sequence of normalized blowups at closed points of $X$, unchanged off $x$. Its localization over $\operatorname{Spec}B$ is the given sequence. If $X$ is projective over a Noetherian affine base, so is the spread sequence.

## Facts & Assumptions

**Given:** A normal integral surface $X$ locally of finite type over a permitted base, a closed point $x\in X$ with two-dimensional local ring $B$, and a finite sequence of normalized point blowups over $\operatorname{Spec}B$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-eventual-global-generation-coherent-twists.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring (def-noetherian-ring-and-module) and let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ (def-affine-scheme-spectrum) factors over  ([[lem-eventual-global-generation-coherent-twists]])

[F5] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F6] *lem-relative-spec-glues-affine-algebras.* Let $S$ be a scheme and let $\mathcal A$ be an affine-locally module-associated sheaf of commutative unital $\mathcal O_S$-algebras, as in def-affine-local-quasi-coherent-algebra. Put $B_U=\Gamma(U,\mathcal A)$ for each affine open $U\subseteq S$. ([[lem-relative-spec-glues-affine-algebras]])

[F7] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F8] *thm-blowup-base-change-flat.* Assume the Axiom of Choice as inherited from the relative Proj construction. Let $g\colon X'\to X$ be a flat morphism of schemes and $\mathcal I$ a quasi-coherent ideal sheaf of finite type on $X$. ([[thm-blowup-base-change-flat]])

[F9] *thm-integrality-commutes-with-localisation.* Let $A \to B$ be a homomorphism of commutative rings, let $S \subseteq A$ be multiplicative, and let $b \in B$. 1. If $b$ is integral over $A$, then $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$. 2. If $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$, then some $s \in S$ makes $sb$ integral over $A$. ([[thm-integrality-commutes-with-localisation]])

## Proof

1.1 Each center of the given sequence over the local base $B$ lies on the closed fibre: the image of a closed point under the proper structure map is closed, and the fibre is finite type, so the residue field of the center is finite over $\kappa(x)$. [F3, given]

2.1 Blow up $x$ globally and normalize; localization is flat, so the global blowup localizes to the local blowup by the flat blowup base-change theorem, and normalization commutes with localization because the affine integral closures are computed in the common function field. Hence the first step of the spread sequence localizes to the first step of the given sequence. [F7, F8, F9, step 1.1]

3.1 The next local centre is a point of the fibre over $x$ of the global model, with finite residue field over $\kappa(x)$; being a closed point of a finite-type fibre over a closed point, it is closed in the global model. Blow it up globally and normalize finitely, and continue inductively; away from $x$ all these operations are isomorphisms. [F3, F7, step 2.1]

4.1 Projectivity is preserved by twisting the center ideal by an ample bundle and taking a finite generating family, followed by finite-over-projective normalization; the sequence is finite, so no limit or arbitrary-modification spreading theorem is used. The identifications agree with the given local sequence by flat base change and localization of integral closures, proving the claim; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F4, F5, F6, step 3.1] ∎

## Remarks

- Every centre is closed in the global model because it lies over the closed point x and has finite residue field.
- Normalization commutes with localization for the affine integral closures, which is what makes the local sequence match the spread one.
