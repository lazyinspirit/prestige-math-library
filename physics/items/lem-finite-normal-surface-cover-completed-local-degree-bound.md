---
id: lem-finite-normal-surface-cover-completed-local-degree-bound
kind: lemma
title: "Completed local degrees of finite normal surface covers"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [
          cor-equicharacteristic-complete-local-power-series-quotient,
                    cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module,
                    cor-height-preserved-under-going-down-integral-extensions, def-axiom-of-choice,
                    def-dependent-choice, lem-normal-domain-implies-s-two, lem-surface-finite-completion-factors,
                    lem-surface-regular-fibres-preserve-normality, thm-auslander-buchsbaum-formula,
                    thm-completion-preserves-regular-local-rings]
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

Assume AC and DC. Let $X\to Y$ be finite dominant of degree $n$ between integral normal surfaces in the permitted class, with $Y$ regular. At a closed $x\in X$ over a point $y\in Y$ with $\dim O_{Y,y}=2$, the complete normal local domain $\widehat{O_{X,x}}$ is finite over the complete regular local ring $\widehat{O_{Y,y}}$, and its fraction-field degree is at most $n$. In the equicharacteristic setting the latter ring is a power-series ring in two variables over its residue field.

## Facts & Assumptions

**Given:** A finite dominant morphism $X\to Y$ of degree $n$ between integral normal surfaces over the permitted base, with $Y$ regular, and a closed point $x\in X$ over $y\in Y$ with $\dim\mathcal O_{Y,y}=2$.

[F1] *cor-equicharacteristic-complete-local-power-series-quotient.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local ring, let $k=A/\mathfrak m$, and let $e=\dim_k(\mathfrak m/\mathfrak m^2).$ Then there is a surjective $k$-algebra homomorphism $k\llbracket X_1,\ldots,X_e\rrbracket \twoheadrightarrow A.$ ([[cor-equicharacteristic-complete-local-power-series-quotient]])

[F2] *cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every system of parameters of a nonzero finite Cohen--Macaulay module over a Noetherian local ring is a regular sequence on that module. ([[cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]])

[F3] *cor-height-preserved-under-going-down-integral-extensions.* Assume the Axiom of Choice. Let $A\subseteq B$ be an integral extension of domains with $A$ integrally closed. If $\mathfrak q\in\operatorname{Spec}(B)$ lies over $\mathfrak p:=\mathfrak q\cap A$ and one of the heights $\operatorname{ht}(\mathfrak p)$ or $\operatorname{ht}(\mathfrak q)$ is finite, then both are finite and  ([[cor-height-preserved-under-going-down-integral-extensions]])

[F4] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F5] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F6] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F7] *lem-surface-finite-completion-factors.* Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres. ([[lem-surface-finite-completion-factors]])

[F8] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F9] *thm-auslander-buchsbaum-formula.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free. ([[thm-auslander-buchsbaum-formula]])

[F10] *thm-completion-preserves-regular-local-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular. ([[thm-completion-preserves-regular-local-rings]])

## Proof

1.1 Put $T=\mathcal O_{Y,y}$ and let $C$ be the finite semilocal normal algebra of the cover over $\operatorname{Spec}T$; it is torsion-free of generic rank $n$. Height preservation for integral extensions of a normal domain gives $\operatorname{ht}(\mathfrak q)=2$ at each maximal ideal $\mathfrak q$ of $C$, so $C_{\mathfrak q}$ is a normal two-dimensional local ring and hence Cohen--Macaulay. [F3, F6, given]

2.1 A parameter pair of $T$ generates an ideal primary for each maximal ideal of the finite $T$-algebra $C$, so it is a regular sequence on every $C_{\mathfrak q}$ and hence on $C$; thus $\operatorname{depth}_TC=2$ and Auslander--Buchsbaum makes $C$ finite free of rank $n$ over $T$. [F2, F9, step 1.1]

3.1 The finite-completion-factor lemma identifies $C\otimes_T\widehat T$ with the finite product of the complete local rings $\widehat{C_{\mathfrak q}}$. Completion normality makes each nonzero factor a normal local domain; the base maps are finite local and the parameter pair remains regular, so each factor is finite free over the regular completion $\widehat T$ of some positive rank $n_{\mathfrak q}$, and the ranks sum to $n$. [F7, F10, step 2.1]

4.1 Localizing at the fraction field of $\widehat T$ turns each normal domain factor into its fraction field, of degree $n_{\mathfrak q}\le n$; in particular the complete normal local domain $\widehat{\mathcal O_{X,x}}$ is finite over $\widehat T$ with fraction-field degree at most $n$. [F7, step 3.1]

5.1 Regularity and dimension two of $\widehat T$ follow from completion-preserved regularity, and in the equicharacteristic setting the coefficient-field presentation gives a surjection $\kappa(y)[\![u,v]\!]\to\widehat T$ between regular local domains of dimension two; its prime kernel has height zero and hence is zero, so $\widehat T$ is a power-series ring in two variables over its residue field. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F4, F5, F10, step 4.1, F8] ∎

## Remarks

- The sum of the local ranks over the completion factors is exactly n; no global degree equality after splitting into factors is claimed.
- The equicharacteristic identification of the completed regular local ring with a power-series ring is used only in the final step.
