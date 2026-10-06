---
id: lem-projective-normal-surface-modification-h1-injects-off-special-fibre
kind: lemma
title: H1 of a normal surface modification injects off its special fibre
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-normal-surface-modification-and-normalized-point-blowup
- lem-local-normal-surface-modification-dimension-and-projective-cohomology
- lem-surface-finite-type-normalization-finite
- lem-normal-surface-fibre-divisor-conormal-degree-positive
- lem-finite-over-projective-noetherian-affine-base-is-projective
- thm-proper-pushforward-coherent
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Lemmas 54.7.3–8 (complete proofs read; normal-surface arguments
      reconstructed)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or complete equicharacteristic local base, and let $X\to\operatorname{Spec}A$ be a projective normal modification. If $U$ is the inverse image of the punctured spectrum, $H^1(X,\mathcal O_X)\to H^1(U,\mathcal O_U)$ is injective.

## Facts & Assumptions

**Given:** A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base, a projective normal modification $X\to\operatorname{Spec}A$, and $U$ the inverse image of the punctured spectrum.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. (def-normal-surface-modification-and-normalized-point-blowup)

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F6] *lem-normal-surface-fibre-divisor-conormal-degree-positive.* Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ a normal integral modification. For any nonempty effective Cartier divisor $Z$ supported in the special fibre, some integral component $C$ of $Z$ satisfies $\deg_C(\mathcal O_X(-Z)|_C)>0$. In particular its conormal bundle is not trivial. ([[lem-normal-surface-fibre-divisor-conormal-degree-positive]])

[F7] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F8] *thm-proper-pushforward-coherent.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the affine localization theorem, the Čech comparison and the dévissage lemma cited below ([[def-axiom-of-choice]], [[def-dependent-choice]]). ([[thm-proper-pushforward-coherent]])

## Proof

1.1 Represent a class in $H^1(X,\mathcal O_X)$ by a Cech cocycle for the two-affine cover and glue the rank-two vector bundle $E$ whose transition matrix is upper triangular with that cocycle off the diagonal; this gives an extension $0\to\mathcal O_X\to E\to\mathcal O_X\to0$ whose splitting is equivalent to vanishing of the class, and the same construction on a refinement detects the restriction to $U$. [F4, given]

2.1 The quotient defines a section $\sigma$ of the projective bundle $P(E)\to X$, and a splitting of the class over $U$ defines a disjoint second section $\sigma'$ there. Let $X'$ be the integral schematic closure of $\sigma'(U)$; if it missed $\sigma(X)$, then $X'\to X$ would be both proper and affine, since the complement of the section is locally an affine-line chart, so proper coherent pushforward would make its affine algebra finite. [F4, F8, step 1.1]

3.1 A finite birational morphism onto the normal scheme $X$ is an isomorphism: on each affine normal chart $\operatorname{Spec}B$, its source algebra is finite, lies in $\operatorname{Frac}B$, and is integral over $B$, hence equals $B$ by integral closedness, so $X'\to X$ would be an isomorphism and the two sections would be disjoint globally, giving a splitting and forcing the class to vanish; hence for a nonzero class $X'$ meets $\sigma(X)$. [F4, F5, step 2.1]

4.1 Normalize $X'$ finitely using the normalization-finiteness helper; the pullback $Z$ of the Cartier section is nonempty, supported in the special fibre, and effective Cartier because the integral dominant component is not contained in the section. The conormal bundle of the section is $\mathcal O_X$, since locally its ideal is the coordinate of the other affine-line direction and both the kernel and quotient of the extension are $\mathcal O_X$, so the conormal bundle of $Z$ is trivial by pullback of an invertible Cartier ideal. [F5, step 3.1]

5.1 But the positive conormal degree lemma on the normal modified surface forbids a nonzero effective Cartier divisor supported in the special fibre with trivial conormal bundle, a contradiction; hence every class vanishing off the special fibre is zero, which is the injectivity statement. The projective bundle and its normalization are projective over $A$ by twisting coherent generators and finite-projective composition, so the two-affine and finite-type hypotheses hold throughout; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F6, F7, step 4.1] ∎

## Remarks

- The geometric content is the reduction of a nonzero cohomology class to a second disjoint section, whose normalization yields a forbidden fibre divisor.
- Splitting of the bundle extension is equivalent to vanishing of the Cech class, which is what makes the argument detect injectivity.
