---
id: lem-regular-local-surface-is-rational-by-point-blowup-domination
kind: lemma
title: "Regular local surfaces have rational modification cohomology"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-blowup-point-pushforward-vanishing,
                    lem-normal-surface-modification-leray-short-exact-sequence,
                    lem-normalized-point-blowups-dominate-local-normal-surface-modifications]
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

Assume AC and DC. A regular two-dimensional local domain in the permitted finite-type class defines a rational singularity.

## Facts & Assumptions

**Given:** A regular two-dimensional local domain $A$ in the permitted finite-type class.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-rational-normal-surface-singularity-and-bounded-modification-h1.* Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F4] *lem-blowup-point-pushforward-vanishing.* Assume the Axiom of Choice. Let $S$ be a regular surface over a field $k$ (more generally a locally Noetherian scheme of dimension two whose local rings at the center are regular of dimension two) and let $p$ be a closed point with residue field $\kappa(p)$. Let $\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$. ([[lem-blowup-point-pushforward-vanishing]])

[F5] *lem-normal-surface-modification-leray-short-exact-sequence.* Assume AC and DC. Let $A$ be a normal local domain of dimension two in the field/complete-equicharacteristic finite-type class, and $X'\xrightarrow gX\to\operatorname{Spec}A$ normal integral modifications. Then $g_*\mathcal O_{X'}=\mathcal O_X$ and $H^1(X,\mathcal O_X)\to H^1(X',\mathcal O_{X'})$ is injective. ([[lem-normal-surface-modification-leray-short-exact-sequence]])

[F6] *lem-normalized-point-blowups-dominate-local-normal-surface-modifications.* Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. ([[lem-normalized-point-blowups-dominate-local-normal-surface-modifications]])

## Proof

1.1 Every proper normal modification of $\operatorname{Spec}A$ is dominated by a finite sequence of normalized point blowups, and because the base is regular these are ordinary regular point blowups. [F3, F6, given]

2.1 The point-blowup pushforward theorem, in its arbitrary-Noetherian regular-center form, makes every higher direct image of the structure sheaf under a point blowup vanish; hence the higher direct images of the structure sheaf under the composite of the sequence vanish, and $H^1$ of the affine base is zero. [F4, step 1.1]

3.1 The Leray injection embeds the $H^1$ of the original normal modification into the $H^1$ of its dominating model, which is zero; since the modification was arbitrary, $A$ defines a rational singularity. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F3, F5, step 2.1] ∎

## Remarks

- Rationality of a regular local surface is thus reduced to the vanishing of higher direct images of a point blowup.
- No classification of resolutions is used, only domination by point blowups.
