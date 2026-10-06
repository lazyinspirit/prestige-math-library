---
id: lem-proper-surface-regularity-transfers-to-and-from-completion
kind: lemma
title: "Regularity of a proper scheme transfers to and from local-base completion"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          def-axiom-of-choice, def-proper-morphism, lem-ag-flat-local-regularity-ascent-descent,
                    lem-proper-stable-base-change, thm-completion-of-a-noetherian-local-ring,
                    thm-completion-preserves-regular-local-rings,
                    cor-localisations-of-regular-local-rings-are-regular,
                    lem-surface-completion-base-change-preserves-closed-fibre-local-completions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemmas 54.11.1 and 54.11.2 (complete proof read)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring and $X\to\operatorname{Spec}A$ locally of finite type. Set $Y=X\times_A\widehat A$. For $y\in Y$ with image $x\in X$, regularity of $\mathcal O_{Y,y}$ implies regularity of $\mathcal O_{X,x}$. If $y$ lies on the closed fibre, the two local rings are regular simultaneously. If $X$ is proper over $A$, then $X$ is regular if and only if $Y$ is regular. Here regular means that every local ring is regular; no smoothness over a field is asserted.

## Facts & Assumptions

**Given:** A Noetherian local ring $(A,\mathfrak m)$, a scheme $X\to\operatorname{Spec}A$ locally of finite type, and the base change $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$, with $y\in Y$ and image $x\in X$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F3] *lem-ag-flat-local-regularity-ascent-descent.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)\to(S,\mathfrak n)$ be a flat local homomorphism (def-flat-and-faithfully-flat-modules-and-ring-maps) of Noetherian local rings, so that $S/\mathfrak mS$ is again a Noetherian local ring. Then: 1. ([[lem-ag-flat-local-regularity-ascent-descent]])

[F4] *lem-proper-stable-base-change.* Assume the Axiom of Choice (AC). For every proper morphism $f:X\to S$ and every morphism $S'\to S$, the base-changed morphism $f_{S'}:X\times_S S'\longrightarrow S'$ is proper. ([[lem-proper-stable-base-change]])

[F5] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

[F6] *thm-completion-preserves-regular-local-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular. ([[thm-completion-preserves-regular-local-rings]])

[F7] *cor-localisations-of-regular-local-rings-are-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$. ([[cor-localisations-of-regular-local-rings-are-regular]])

[F8] *lem-surface-completion-base-change-preserves-closed-fibre-local-completions.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring, $\widehat A$ its maximal-adic completion, and $X$ a scheme locally of finite type over $A$. Put $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$. The closed fibres of $X$ and $Y$ are canonically isomorphic. ([[lem-surface-completion-base-change-preserves-closed-fibre-local-completions]])

## Proof

1.1 The completion $A\to\widehat A$ is faithfully flat, and flatness is preserved by base change and localization, so the local homomorphism $\mathcal O_{X,x}\to\mathcal O_{Y,y}$ is flat; flat-local regularity descent therefore gives regularity of $\mathcal O_{X,x}$ whenever $\mathcal O_{Y,y}$ is regular. [F3, F5, given]

2.1 If $y$ lies on the closed fibre, the completed local rings of $\mathcal O_{X,x}$ and $\mathcal O_{Y,y}$ are canonically isomorphic, and completion preserves and reflects regularity of Noetherian local rings; hence the two local rings are regular simultaneously. [F5, F6, F8, given, step 1.1]

3.1 If $X$ is proper over $A$, then $Y$ is proper over $\widehat A$ by stability of properness under base change, and both are Noetherian; a closed point of either scheme maps to the closed point of its local base because a proper morphism is closed. [F2, F4, step 2.1]

4.1 Every point of a Noetherian scheme has a closed specialization, and regularity of a local ring is inherited by its further localizations; conversely a localization of a regular local ring at a prime is regular, so regularity of $X$ (respectively $Y$) is detected at closed points, all of which lie on the closed fibres where step 2.1 applies. Thus $X$ is regular if and only if $Y$ is regular. [F7, step 1.1, step 3.1]

5.1 The Axiom of Choice is inherited from the completion and flatness suppliers; no smoothness over a field is asserted anywhere. [F1, step 4.1] ∎

## Remarks

- The first two assertions are local and use only faithful flatness and the completion comparison of local rings; properness enters only to compare global regularity through closed points.
- The identification of completed local rings on the closed fibre is the preceding base-change lemma.
