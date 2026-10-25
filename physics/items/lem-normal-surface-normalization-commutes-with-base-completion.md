---
id: lem-normal-surface-normalization-commutes-with-base-completion
kind: lemma
title: "Normalization of a surface modification commutes with local-base completion"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-surface-finite-type-formal-fibres, lem-surface-finite-type-normalization-finite,
                    lem-surface-regular-fibres-preserve-normality, thm-completion-of-a-noetherian-local-ring,
                    thm-integrality-commutes-with-localisation]
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

Assume AC and DC. Let $A$ be a normal local surface domain essentially of finite type over a field or a complete equicharacteristic local base, with normal completion $\widehat A$. For an integral modification $X$ of $\operatorname{Spec}A$, finite normalization commutes with the base change to $\widehat A$: $(X^\nu)_{\widehat A}$ is the finite normalization of $X_{\widehat A}$. Both base-changed schemes are integral, with common function field $\operatorname{Frac}\widehat A$.

## Facts & Assumptions

**Given:** A normal local surface domain $A$ essentially of finite type over a field or a complete equicharacteristic local base, with normal completion $\widehat A$, and an integral modification $X$ of $\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-surface-finite-type-formal-fibres.* Assume AC and DC. Let $A$ be a field or a complete equicharacteristic Noetherian local ring and $B$ an essentially finite-type $A$-algebra. Every formal fibre of every local ring of $B$ is geometrically regular over its residue fraction field. ([[lem-surface-finite-type-formal-fibres]])

[F5] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F6] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F7] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

[F8] *thm-integrality-commutes-with-localisation.* Let $A \to B$ be a homomorphism of commutative rings, let $S \subseteq A$ be multiplicative, and let $b \in B$. 1. If $b$ is integral over $A$, then $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$. 2. If $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$, then some $s \in S$ makes $sb$ integral over $A$. ([[thm-integrality-commutes-with-localisation]])

## Proof

1.1 On an affine chart of $X$ write $B\subset K=\operatorname{Frac}(A)$ for the coordinate algebra and $B^{\nu}$ for its finite normalization in $K$. Flatness of $\widehat A$ over $A$ injects $B\otimes_A\widehat A$ and $B^{\nu}\otimes_A\widehat A$ into $K\otimes_A\widehat A$, the localization of the domain $\widehat A$ at the nonzero elements of $A$, so both are domains with fraction field $\operatorname{Frac}\widehat A$. [F7, F8, given]

2.1 The map $A\to\widehat A$ has geometrically regular formal fibres by the finite-type formal-fibre lemma, and the flat base change $B^{\nu}\to B^{\nu}\otimes_A\widehat A$ has fibres that are base-field extensions of those formal fibres; they are regular by geometric regularity, and the residue extensions involved are finitely generated. [F4, step 1.1]

3.1 Normality ascends along flat maps with regular fibres, so $B^{\nu}\otimes_A\widehat A$ is normal; it is finite and integral over $B\otimes_A\widehat A$ and lies inside the common fraction field, and any element of that field integral over the smaller ring is integral over this normal ring, hence belongs to it. Therefore $B^{\nu}\otimes_A\widehat A$ is exactly the normalization of $B\otimes_A\widehat A$. [F5, F6, step 2.1]

4.1 The identifications on affine charts agree on overlaps inside the common function field and glue, giving that $(X^{\nu})_{\widehat A}$ is the finite normalization of $X_{\widehat A}$, with both base changes integral and common function field $\operatorname{Frac}\widehat A$. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F8, step 3.1] ∎

## Remarks

- The proof uses the actual geometric regularity of the completion map and does not assume normality of an arbitrary completed ring.
- Finiteness of the normalization on both sides is the preceding finite-type lemma.
