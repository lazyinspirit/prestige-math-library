---
id: thm-resolution-of-normal-surface-singularities
kind: theorem
title: Resolution of normal surface singularities
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 21
deps:
- cor-complete-local-domain-finite-over-a-regular-power-series-ring
- def-axiom-of-choice
- def-birational-morphism-schemes
- def-dependent-choice
- def-normal-noetherian-ring
- def-normal-surface-modification-and-normalized-point-blowup
- def-proper-morphism
- lem-complete-regular-surface-degree-p-extension-has-bounded-h1
- lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood
- lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme
- lem-finite-length-duality-over-a-regular-local-base
- lem-finite-normal-surface-cover-completed-local-degree-bound
- lem-finite-separable-normal-surface-extension-preserves-bounded-h1
- lem-nonsquare-tangent-conic-rational-surface-blowups-terminate
- lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points
- lem-normal-projective-surface-dualizing-module-over-regular-local-base
- lem-normalized-point-blowups-dominate-local-normal-surface-modifications
- lem-normalized-surface-point-blowup-resolution-descends-from-completion
- lem-projective-normal-surface-grauert-riemenschneider-vanishing
- lem-projective-regular-local-base-coherent-duality-by-embedding
- lem-proper-surface-regularity-transfers-to-and-from-completion
- lem-rational-normal-surface-reduced-to-invertible-canonical-module
- lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
- lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic
- lem-surface-finite-type-normalization-finite
- lem-surface-open-regular-locus
- lem-surface-regular-fibres-preserve-normality
- thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups
- thm-regular-equals-smooth-over-perfect-field
- thm-stalk-structure-sheaf-prime-localization
- lem-normal-surface-normalization-commutes-with-base-completion
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
  - title: The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves)
    url: https://stacks.math.columbia.edu/tag/0C2I
  - title: The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing)
    url: https://stacks.math.columbia.edu/tag/0AX7
  - title: Joseph Lipman, Introduction to resolution of singularities, Proc. Sympos. Pure Math. 29 (1975), 187-230
    url: https://www.math.purdue.edu/~jlipman/papers-older/%5B1975%5D%20Introduction%20to%20resolution%20of%20singularities.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Dependent Choice, inherited from the completion and commutative-algebra suppliers. Let $k$ be a field of arbitrary characteristic and let $Y$ be a normal integral scheme (every local ring is an integrally closed domain) of finite type over $k$ of dimension two. There is a finite sequence $Y_n\to\cdots\to Y_1\to Y_0=Y$ such that each $Y_i\to Y_{i-1}$ is the blowup at a closed point lying above a singular point of $Y$ followed by finite normalization, each $Y_i$ is normal and proper over $Y$, and $Y_n$ is regular. Consequently the composite $\pi:Y_n\to Y$ is a proper birational morphism, is an isomorphism over the regular locus of $Y$, and resolves all singularities of $Y$. Regularity is the conclusion over an arbitrary field; smoothness over $k$ follows if $k$ is perfect. No properness of $Y$ over $k$ is required.

## Facts & Assumptions

**Given:** A field $k$ of arbitrary characteristic and a normal integral scheme $Y$ of finite type over $k$ of dimension two.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups.* Assume AC and DC. Every complete equicharacteristic Noetherian normal local domain $A$ of dimension two admits a regular resolution by finitely many normalized point blowups at singular closed points. All normalizations are finite and the resulting morphism is projective, birational, and an isomorphism off the original closed point. ([[thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups]])

[F4] *lem-normalized-surface-point-blowup-resolution-descends-from-completion.* Assume AC and DC. For $A$ as in the preceding normalization-completion lemma, every finite sequence of normalized point blowups over $\operatorname{Spec}\widehat A$ has a uniquely corresponding finite sequence over $\operatorname{Spec}A$ with isomorphic base-changed models. Each centre lies over the closed point. ([[lem-normalized-surface-point-blowup-resolution-descends-from-completion]])

[F5] *lem-normal-surface-normalization-commutes-with-base-completion.* Assume AC and DC. Let $A$ be a normal local surface domain essentially of finite type over a field or a complete equicharacteristic local base, with normal completion $\widehat A$. (lem-normal-surface-normalization-commutes-with-base-completion)

[F6] *lem-proper-surface-regularity-transfers-to-and-from-completion.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring and $X\to\operatorname{Spec}A$ locally of finite type. Set $Y=X\times_A\widehat A$. For $y\in Y$ with image $x\in X$, regularity of $\mathcal O_{Y,y}$ implies regularity of $\mathcal O_{X,x}$. If $y$ lies on the closed fibre, the two local rings are regular simultaneously. ([[lem-proper-surface-regularity-transfers-to-and-from-completion]])

[F7] *lem-surface-open-regular-locus.* Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open. ([[lem-surface-open-regular-locus]])

[F8] *lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points.* Assume AC and DC. Let $Y$ be a normal integral finite-type surface over any field. If each completed local ring at a singular closed point has a regular resolution by finitely many normalized point blowups at singular centres, then $Y$ has such a finite global sequence, proper and birational over $Y$ and an isomorphism on the regular locus. ([[lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points]])

[F9] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F10] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F11] *thm-regular-equals-smooth-over-perfect-field.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a perfect field and let $X$ be a finite-type $k$-scheme. Here **regular** means that $X$ is locally Noetherian and every local ring $\mathcal O_{X,x}$ is regular local; **smooth over $k$** means that $X\to\operatorname{Spec}k$ is smooth under the classical local-standard-smooth convention. ([[thm-regular-equals-smooth-over-perfect-field]])

[F12] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain ([[def-normal-noetherian-ring]]). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F13] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F14] *def-birational-morphism-schemes.* Let $k$ be a field and let $X$ and $Y$ be integral $k$-schemes of finite type (def-integral-scheme, def-locally-finite-type-and-finite-type-morphism). ([[def-birational-morphism-schemes]])

[F15] *thm-stalk-structure-sheaf-prime-localization.* For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$. ([[thm-stalk-structure-sheaf-prime-localization]])

## Proof

1.1 At a singular closed point $y\in Y$ the local ring $\mathcal O_{Y,y}$, the stalk of the structure sheaf, is a normal two-dimensional Noetherian local domain, essentially of finite type over $k$, with normal completion by the regular-fibre normality result; the complete equicharacteristic resolution theorem applies to that completion and produces a finite sequence of normalized point blowups at singular closed points ending in a regular local ring. [F3, F10, F12, F15, given]

2.1 Normalization commutes with base completion, so the finite normal chart algebra remains normal and finite birational over the base-changed unnormalized chart, and matching closed-fibre points let the finite normalized sequence descend to the original local ring; its terminal regularity descends by proper completion transfer. [F4, F5, F6, step 1.1]

3.1 A normal surface is regular in codimension one and has open regular locus, so its singular set is a finite set of closed points; the local-to-global spreading helper integrates the finitely many local sequences to a finite sequence of global normalized point blowups, and the normalizations are finite by the finite-type normalization supplier. [F7, F8, F9, step 2.1]

4.1 The terminal surface $Y_n$ is normal and proper over $Y$, the resulting composite is a proper birational morphism, and each blowup is an isomorphism off its centre, so the composite is an isomorphism over the original regular locus; since $Y$ is already normal, $Y_0=Y$. [F12, F13, F14, step 3.1]

5.1 Over a perfect field regular finite-type $k$-schemes are smooth, while over an imperfect field the conclusion is the stated regularity; the local proof covers every characteristic, using polynomial square and root identities without dividing by $2$ or $3$ and the triple-cubic normality unit alternative, with the exact charts recorded in the durable square-conic-closure argument, and importing no arbitrary-Noetherian alteration equivalence or ADE classification. [F11, F3, step 4.1]

6.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited completion and commutative-algebra suppliers, and no properness of $Y$ over $k$ is used. [F1, F2, step 5.1] ∎

## Remarks

- The local resolutions are produced on completions and descended, so no excellence theorem is substituted.
- Smoothness is claimed only over a perfect field; over an imperfect field the conclusion is regularity.
