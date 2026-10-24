---
id: lem-surface-complete-equicharacteristic-formal-fibres
kind: lemma
title: Surface complete equicharacteristic formal fibres
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
- cor-complete-local-domain-finite-over-a-regular-power-series-ring
- def-axiom-of-choice
- def-dependent-choice
- lem-surface-finite-completion-factors
- lem-surface-generic-power-series-formal-fibres
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-check-G-ring-easy, proposition-Noetherian-complete-G-ring'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For a complete equicharacteristic Noetherian local ring $A$ and primes $\mathfrak q\subseteq\mathfrak p$, the formal fibre $\widehat{A_{\mathfrak p}}\otimes_A\kappa(\mathfrak q)$ is geometrically regular over $\kappa(\mathfrak q)$.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local ring $A$ and primes $\mathfrak q\subseteq\mathfrak p$ of $A$.

[F1] *cor-complete-local-domain-finite-over-a-regular-power-series-ring.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an injective local homomorphism $k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$ whose image is a regular complete local subring over which $A$ is module-finite. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]])

[F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F4] *lem-surface-finite-completion-factors.* Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres. ([[lem-surface-finite-completion-factors]])

[F5] *lem-surface-generic-power-series-formal-fibres.* Assume AC. For $A=k[\![X_1,\ldots,X_n]\!][Y_1,\ldots,Y_m]$ and $K=\operatorname{Frac}A$, every completed local generic fibre $\widehat{A_{\mathfrak p}}\otimes_AK$ is geometrically regular over $K$. ([[lem-surface-generic-power-series-formal-fibres]])

## Proof

1.1 Replacing $A$ by the complete local domain $A/\mathfrak q$ reduces the assertion to generic formal fibres: completion commutes with passing to the quotient, so the formal fibre at $\mathfrak q$ of the original ring is the generic formal fibre of the quotient, and it suffices to treat $\mathfrak q=0$. [F1, given]

2.1 For the complete local domain $B=A/\mathfrak q$, choose a finite regular power-series subring $R\subset B$. Put $K=\operatorname{Frac}R$, $L=\operatorname{Frac}B$ and $\mathfrak r=\mathfrak p\cap R$. The finite-completion-factor isomorphism $\widehat{R_{\mathfrak r}}\otimes_RB=\prod_{\mathfrak p_i\cap R=\mathfrak r}\widehat{B_{\mathfrak p_i}}$, tensored over $B$ with $L$, identifies $\widehat{B_{\mathfrak p}}\otimes_BL$ as a direct-product factor of $(\widehat{R_{\mathfrak r}}\otimes_RK)\otimes_KL$. [F1, F4, step 1.1]

3.1 The generic formal fibre of $R$ is geometrically regular by the power-series supplier. Its base change to the finite field extension $L/K$ remains geometrically regular: any finitely generated field extension of $L$ is finitely generated over $K$. A direct-product factor is a localization at an idempotent, so it and all these field base changes are regular. Thus the chosen generic formal fibre of $B$ is geometrically regular. This uses a product factor, never stability under arbitrary quotients. [F5, step 2.1]

4.1 Hence the formal fibre $\widehat{A_{\mathfrak p}}\otimes_A\kappa(\mathfrak q)$ is geometrically regular over $\kappa(\mathfrak q)$ for every pair of primes $\mathfrak q\subseteq\mathfrak p$; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the completion suppliers. [F2, F3, step 3.1] ∎

## Remarks

- The reduction to q=0 is the only place the quotient of the base by q is used; the finite-factor and power-series lemmas do the rest.
- The quotient reduction is an equality of formal fibres; the finite extension step takes a direct-product factor of a field base change. Arbitrary quotients of regular rings need not be regular.
