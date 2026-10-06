---
id: lem-surface-regular-fibres-preserve-normality
kind: lemma
title: "Surface regular fibres preserve normality"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [
          cor-flat-local-depth-additivity, thm-serre-normality-criterion,
                    def-axiom-of-choice, def-dependent-choice, lem-flat-local-ascent-of-regularity,
                    lem-flat-local-depth-formula-regular-sequence-split,
                    cor-depth-of-a-finite-local-module-at-most-its-dimension, lem-surface-finite-type-formal-fibres,
                    thm-completion-of-a-noetherian-local-ring,
                    thm-regular-local-rings-are-domains-and-cohen-macaulay]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project: full proof imports for normal-surface resolution, lemma-Sk-goes-up, lemma-Rk-goes-up, lemma-normal-goes-up-noetherian"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain.

## Facts & Assumptions

**Given:** A flat map of Noetherian rings with regular fibres, and in the application the completion map of a normal essentially finite-type local ring over a field or complete equicharacteristic base.

[F1] *cor-flat-local-depth-additivity.* Assume the Axiom of Choice. For a flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings, $\operatorname{depth}(S)=\operatorname{depth}(R) +\operatorname{depth}(S/\mathfrak mS).$ ([[cor-flat-local-depth-additivity]])

[F2] Under AC, a commutative Noetherian ring is normal if and only if it satisfies $(R_1)$ and $(S_2)$; no domain hypothesis is required. ([[thm-serre-normality-criterion]])

[F3] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F4] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F5] *lem-flat-local-ascent-of-regularity.* Assume the Axiom of Choice. For a flat local map $(R,\mathfrak m)\to(S,\mathfrak n)$ of nonzero Noetherian local rings: if $R$ and $S/\mathfrak mS$ are regular, then $S$ is regular. Conversely, regularity of $S$ implies regularity of $R$. ([[lem-flat-local-ascent-of-regularity]])

[F6] *lem-flat-local-depth-formula-regular-sequence-split.* Assume the Axiom of Choice. Let $(R,\mathfrak m,k)\to(S,\mathfrak n,\ell)$ be a flat local homomorphism of Noetherian local rings. If $x_1,\ldots,x_r$ is an $R$-regular sequence and $\bar y_1,\ldots,\bar y_s$ is regular on the closed fibre $S/\mathfrak mS$, then arbitrary lifts $y_j\in\mathfrak n$ make $x_1,\ldots,x_r,y_1,\ldots,y_s$ an $S$-regular sequence. ([[lem-flat-local-depth-formula-regular-sequence-split]])

[F7] A nonzero finite module over a Noetherian local ring has depth at most its support dimension. ([[cor-depth-of-a-finite-local-module-at-most-its-dimension]])

[F8] *lem-surface-finite-type-formal-fibres.* Assume AC and DC. Let $A$ be a field or a complete equicharacteristic Noetherian local ring and $B$ an essentially finite-type $A$-algebra. Every formal fibre of every local ring of $B$ is geometrically regular over its residue fraction field. ([[lem-surface-finite-type-formal-fibres]])

[F9] *thm-completion-of-a-noetherian-local-ring.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $ 3. The completion map $R \to \widehat R$ is faithfully flat. ([[thm-completion-of-a-noetherian-local-ring]])

[F11] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

## Proof

1.1 Let $R\to S$ be the given flat map with $R$ normal, and take $Q\in\operatorname{Spec}S$ with $P=Q\cap R$. The local map $R_P\to S_Q$ is flat with regular closed fibre. If $\dim R_P\ge2$, normality and [F2] give $\operatorname{depth}R_P\ge2$, so [F1] gives $\operatorname{depth}S_Q\ge2$. If $\dim R_P\le1$, [F2] makes $R_P$ regular; then [F5] makes $S_Q$ regular, and [F11] gives $\operatorname{depth}S_Q=\dim S_Q$. Thus every $S_Q$ satisfies the required $(S_2)$ bound. [F1, F2, F5, F11, given]

2.1 Now suppose $\dim S_Q\le1$. If $\dim R_P\ge2$, its depth at least two supplies a regular sequence of length two, which remains regular on $S_Q$ by [F6]; this contradicts the depth bound [F7]. Hence $\dim R_P\le1$, so again $R_P$ and its regular closed fibre imply that $S_Q$ is regular by [F5]. Thus $S$ satisfies $(R_1)$. This argument does not assume that $S$ is a domain. [F2, F5, F6, F7, step 1.1]

3.1 By the Noetherian-ring version of Serre's criterion [F2], $(R_1)$ and $(S_2)$ make $S$ normal. For a normal essentially finite-type local ring $B$ over the stated base, [F9] makes $B\to\widehat B$ flat with Noetherian local target, while [F8] makes all its fibres geometrically regular, hence regular. Applying the result just proved makes $\widehat B$ normal; being a nonzero local normal ring, it is an integrally closed domain. [F2, F8, F9, step 1.1, step 2.1]

4.1 This proves both assertions, including targets with several components in the first assertion. AC and DC are inherited from the cited suppliers. [F3, F4, step 3.1] ∎

## Remarks

- The general Serre criterion is needed because the target can be disconnected; for example, $k\to k\times k$ has regular fibres.
- Normality makes the low-dimensional base localizations regular; at higher-dimensional base localizations the flat depth formula supplies the $(S_2)$ bound.
