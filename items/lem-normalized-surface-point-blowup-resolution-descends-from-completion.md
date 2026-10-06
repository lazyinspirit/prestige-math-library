---
id: lem-normalized-surface-point-blowup-resolution-descends-from-completion
kind: lemma
title: "Normalized point sequences and resolutions descend from completion"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-normal-surface-normalization-commutes-with-base-completion,
                    lem-proper-surface-regularity-transfers-to-and-from-completion,
                    lem-surface-completion-base-change-preserves-closed-fibre-local-completions,
                    lem-surface-finite-type-normalization-finite, thm-blowup-base-change-flat]
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

Assume AC and DC. For $A$ as in the preceding normalization-completion lemma, every finite sequence of normalized point blowups over $\operatorname{Spec}\widehat A$ has a uniquely corresponding finite sequence over $\operatorname{Spec}A$ with isomorphic base-changed models. Each centre lies over the closed point. If the completed terminal scheme is regular, so is the descended terminal scheme. Singular centres correspond to singular centres.

## Facts & Assumptions

**Given:** A normal local surface domain $A$ as in the normalization-completion lemma and a finite sequence of normalized point blowups over $\operatorname{Spec}\widehat A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-normal-surface-normalization-commutes-with-base-completion.* Assume AC and DC. Let $A$ be a normal local surface domain essentially of finite type over a field or a complete equicharacteristic local base, with normal completion $\widehat A$. ([[lem-normal-surface-normalization-commutes-with-base-completion]])

[F4] *lem-proper-surface-regularity-transfers-to-and-from-completion.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring and $X\to\operatorname{Spec}A$ locally of finite type. Set $Y=X\times_A\widehat A$. For $y\in Y$ with image $x\in X$, regularity of $\mathcal O_{Y,y}$ implies regularity of $\mathcal O_{X,x}$. If $y$ lies on the closed fibre, the two local rings are regular simultaneously. ([[lem-proper-surface-regularity-transfers-to-and-from-completion]])

[F5] *lem-surface-completion-base-change-preserves-closed-fibre-local-completions.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring, $\widehat A$ its maximal-adic completion, and $X$ a scheme locally of finite type over $A$. Put $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$. The closed fibres of $X$ and $Y$ are canonically isomorphic. ([[lem-surface-completion-base-change-preserves-closed-fibre-local-completions]])

[F6] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F7] *thm-blowup-base-change-flat.* Assume the Axiom of Choice as inherited from the relative Proj construction. Let $g\colon X'\to X$ be a flat morphism of schemes and $\mathcal I$ a quasi-coherent ideal sheaf of finite type on $X$. ([[thm-blowup-base-change-flat]])

## Proof

1.1 At each step properness sends the closed centre of the completed model to the closed point of the local base; the closed fibres of the corresponding models are canonically identified by the completion base-change lemma, so the centre corresponds to a unique closed point of the original model with the same residue field. [F5, given]

2.1 The matching centre ideal commutes with completion base change: on an affine chart the prime of the closed point contains $\mathfrak mA$, and quotienting by $\mathfrak m$ identifies the fibre prime, so flat base change gives the extended prime exactly, and blowups commute with this flat base change by the blowup base-change theorem. [F7, step 1.1]

3.1 The finite normalizations of the two blowups commute with base change by the normalization-completion lemma, so the model identification is established inductively over the finite sequence; projectivity over the local affine base is preserved by blowups and by finite normalization. [F3, F6, step 2.1]

4.1 If the completed terminal model is regular, the proper regularity-transfer lemma descends regularity to the original terminal scheme; at the centres, the equality of completed local rings and the fact that a Noetherian local ring is regular exactly when its completion is regular give the equivalence of regularity, hence of singularity, of corresponding centres. [F4, F5, step 3.1]

5.1 No algebraic descent of arbitrary modification data is claimed: only the finite point sequences and their matching fibre ideals are descended, and the correspondence is unique because each completed centre has a unique corresponding closed point of the original model with the same residue field. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, step 4.1] ∎

## Remarks

- The descent is step by step along the finite sequence; the key inputs are flat base change for blowups and finite normalization, and completion comparison at the centres.
- The statement is about point sequences and their regularity, not about arbitrary modifications.
