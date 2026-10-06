---
id: lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points
kind: lemma
title: "Surface resolution globalizes from complete local point resolutions"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    lem-local-normalized-point-blowup-sequences-spread-at-closed-points,
                    lem-normal-domain-implies-r-one,
                    lem-normalized-surface-point-blowup-resolution-descends-from-completion,
                    lem-surface-open-regular-locus, lem-surface-regular-fibres-preserve-normality,
                    thm-blowup-projective]
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

Assume AC and DC. Let $Y$ be a normal integral finite-type surface over any field. If each completed local ring at a singular closed point has a regular resolution by finitely many normalized point blowups at singular centres, then $Y$ has such a finite global sequence, proper and birational over $Y$ and an isomorphism on the regular locus.

## Facts & Assumptions

**Given:** A normal integral finite-type surface $Y$ over a field, such that each completed local ring at a singular closed point has a regular resolution by finitely many normalized point blowups at singular centres.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F4] *lem-local-normalized-point-blowup-sequences-spread-at-closed-points.* Assume AC and DC. Let $X$ be a normal integral surface locally of finite type over a permitted base and $x\in X$ a closed point with two-dimensional local ring $B$. Any finite normalized point-blowup sequence over $\operatorname{Spec}B$ spreads to the same finite sequence of normalized blowups at closed points of $X$, unchanged off $x$. ([[lem-local-normalized-point-blowup-sequences-spread-at-closed-points]])

[F5] *lem-normal-domain-implies-r-one.* Every commutative Noetherian integrally closed domain satisfies $(R_1)$. ([[lem-normal-domain-implies-r-one]])

[F6] *lem-normalized-surface-point-blowup-resolution-descends-from-completion.* Assume AC and DC. For $A$ as in the preceding normalization-completion lemma, every finite sequence of normalized point blowups over $\operatorname{Spec}\widehat A$ has a uniquely corresponding finite sequence over $\operatorname{Spec}A$ with isomorphic base-changed models. Each centre lies over the closed point. ([[lem-normalized-surface-point-blowup-resolution-descends-from-completion]])

[F7] *lem-surface-open-regular-locus.* Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open. ([[lem-surface-open-regular-locus]])

[F8] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F9] *thm-blowup-projective.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ (def-quasi-coherent-ideal-sheaf) and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of def-blowup-scheme-along-ideal. Then: 1. ([[thm-blowup-projective]])

## Proof

1.1 The regular locus of $Y$ is open, and normality makes every codimension-one local ring regular, so the closed complement of the regular locus has dimension zero and consists of finitely many closed points of the Noetherian surface. [F5, F7, given]

2.1 At each such point the local ring has dimension two and normal completion by normality ascent; the completed resolution given by hypothesis descends to a finite local sequence of normalized point blowups at singular centres by the completion-descent helper. [F6, F8, step 1.1]

3.1 Each local sequence spreads globally by the closed-point spreading helper: every centre lies over the original singular point, and the spread sequence is an isomorphism away from that point. [F3, F4, step 2.1]

4.1 The terminal scheme is regular at every point over the original singular point, because localization over the local spectrum identifies the corresponding local rings with those of the regular local terminal model; performing these finite sequences successively at the finitely many singular points, each later sequence lies in a region where the earlier operations were isomorphisms, so the local inputs are unchanged. [F4, F9, step 3.1]

5.1 The resulting finite global sequence of normalized point blowups is proper, birational and an isomorphism on the regular locus, and its terminal scheme is regular over all original singular points and over the unchanged regular locus, hence regular everywhere; no properness of $Y$ over its field and no smoothness over an imperfect field is assumed. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, step 4.1] ∎

## Remarks

- The globalization is a finite succession of spread local sequences, one for each of the finitely many singular closed points.
- The local-to-global identification of the terminal regular points uses that the spread sequences are isomorphisms away from their own centre.
