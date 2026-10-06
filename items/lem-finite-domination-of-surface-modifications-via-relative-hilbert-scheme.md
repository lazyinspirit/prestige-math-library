---
id: lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme
kind: lemma
title: Finite domination of surface modifications by a relative Hilbert scheme
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-normal-surface-modification-and-normalized-point-blowup
- lem-normalized-point-blowups-dominate-local-normal-surface-modifications
- lem-surface-finite-type-normalization-finite
- lem-finite-over-projective-noetherian-affine-base-is-projective
- thm-hilbert-scheme-represents-projective-flat-families
- def-hilbert-functor-of-flat-projective-subschemes
- thm-hilbert-polynomial-degree-support-dimension
- thm-proper-quasi-finite-is-finite
- cor-finite-flat-noetherian-modules-are-projective
- lem-proper-source-to-separated-target-proper
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, proof of Lemma 54.8.6 and 54.8.10: finite domination input
      replaced by the proved Hilbert-scheme argument'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $B$ be a finite normal local $A$-domain, and let $Y\to\operatorname{Spec}B$ be a normal integral modification. There are a normal surface $X$ obtained by finitely many normalized point blowups of $\operatorname{Spec}A$, a normal integral modification $Y'\to Y$, and a finite morphism $Y'\to X$ forming a commutative diagram over $\operatorname{Spec}A$. Both $X$ and $Y'$ are projective over $A$. If $A$ is regular, $X$ is regular and its normalized blowups are ordinary point blowups.

## Facts & Assumptions

**Given:** A normal Noetherian local domain $A$ of dimension two essentially of finite type over a field or complete equicharacteristic local ring, a finite normal local $A$-domain $B$, and a normal integral modification $Y\to\operatorname{Spec}B$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-normalized-point-blowups-dominate-local-normal-surface-modifications.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]])

[F5] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F6] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F7] *thm-hilbert-scheme-represents-projective-flat-families.* Assume AC and DC. Let $S$ be any locally Noetherian scheme, possibly non-quasi-compact, let $X\to S$ be projective of finite presentation in the convention of def-projective-morphism-coherent-bundle-convention, and let $L$ be relatively ample. ([[thm-hilbert-scheme-represents-projective-flat-families]])

[F8] *def-hilbert-functor-of-flat-projective-subschemes.* Work with AC and DC. Fix a locally Noetherian scheme $S$, possibly non-quasi-compact, a projective morphism of finite presentation $X\to S$ in the convention of def-projective-morphism-coherent-bundle-convention, and a relatively ample invertible sheaf $L$ on $X$. The test category is **all $S$-schemes**, with arbitrary $S$-morphisms. Set $X_T=X\times_ST$. ([[def-hilbert-functor-of-flat-projective-subschemes]])

[F9] *thm-hilbert-polynomial-degree-support-dimension.* Assume the Axiom of Choice, inherited from the Hilbert-polynomial, hyperplane, global-generation and base-change suppliers cited below ([[def-axiom-of-choice]]). ([[thm-hilbert-polynomial-degree-support-dimension]])

[F10] *thm-proper-quasi-finite-is-finite.* Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes $f:X\to S$ is finite (def-proper-morphism, def-quasi-finite-morphism-schemes, def-finite-morphism-schemes). No Noetherian or nonemptiness hypothesis is imposed, and the assertion is local on the base. ([[thm-proper-quasi-finite-is-finite]])

[F11] *cor-finite-flat-noetherian-modules-are-projective.* Let $R$ be a Noetherian commutative ring and let $M$ be a finite flat $R$-module. Then $M$ is finite projective. ([[cor-finite-flat-noetherian-modules-are-projective]])

[F12] *lem-proper-source-to-separated-target-proper.* Assume the Axiom of Choice. Let $f:X\to S$ be proper and let $g:Y\to S$ be separated. Then every $S$-morphism $h:X\to Y$ is proper. No Noetherian, reducedness or nonemptiness hypothesis is used, and the empty source is included. ([[lem-proper-source-to-separated-target-proper]])

## Proof

1.1 The normalized-point domination helper applied over $B$ supplies a projective normal modification dominating the given $Y$; finiteness of $B$ over $A$ together with the finite-projective composition helper makes this model projective over $A$ with a global projective-space embedding. [F4, F6, given]

2.1 Put $K=\operatorname{Frac}A$, $L=\operatorname{Frac}B$ and $n=[L:K]$; the generic fibre of the model is $\operatorname{Spec}L$, which as a closed subscheme defines a $K$-point of the relative Hilbert scheme with polynomial $n$. Taking the schematic closure of that point and its finite normalization gives a normal integral projective modification $H$ of $\operatorname{Spec}A$. [F5, F7, F8, step 1.1]

3.1 Applying normalized-point domination to $H\to\operatorname{Spec}A$ gives a normal projective $X$ mapping to $H$, and pulling back the universal family produces a closed subscheme $Z\subseteq Y_0\times_A X$, where $Y_0$ is the projective dominating model chosen in step 1.1 whose every geometric fibre has constant Hilbert polynomial $n$, hence dimension zero by the Hilbert-polynomial dimension theorem; the proper family is therefore quasi-finite and finite. [F4, F9, F10, step 2.1]

4.1 The family is flat and finitely presented, hence finite locally free of rank $n$; its generic fibre is $\operatorname{Spec}L$, and on every affine open of the integral base its finite flat algebra is torsion-free and injects into $L$, so the family is integral. Its normalization $Y'$ is finite over $X$ by the normalization-finiteness helper. [F5, F11, step 3.1]

5.1 The universal closed family gives a proper morphism $Y'\to Y$ which is generically the identity on $L$, hence a modification; $Y'$ is projective over $A$ by finite-over-projective, and composing with the initial dominating modification recovers the original $Y$. If $A$ is regular, its normalized point blowups are ordinary regular point blowups, giving the stated specialization. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F6, F12, step 4.1] ∎

## Remarks

- Hilbert representability is used only after a projective replacement and over a Noetherian affine base with a specified global embedding.
- The rank of the finite locally free family is the degree n of the generic extension.
