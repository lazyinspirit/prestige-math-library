---
id: lem-easton-class-replacement
kind: lemma
title: Replacement in the Easton class extension
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, lem-easton-class-forcing-truth-and-set-names, lem-easton-class-tail-head-decision, lem-easton-class-separation-and-power-set, lem-lc-boolean-generic-zfc-and-ordinals, thm-forcing-preorders-have-regular-open-completions, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Replacement in the class extension, (15.16)-(15.17), printed pp.236-237"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15_applications_of_forcing.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground, $F$ a definable
Easton class function with class product $P=P(F)$ and $G$ an $M$-generic filter
([[def-gbc-global-choice-ground-for-easton]],
[[lem-easton-class-forcing-truth-and-set-names]]).

Then $M[G]$ satisfies the Replacement scheme: for every fixed formula
$\psi(x,y,\vec\rho)$ and all set parameters $\vec\rho_{G}\in M[G]$, if
$M[G]\models\forall x\in a\ \exists!y\ \psi(x,y,\vec\rho_{G})$ for some
$a\in M[G]$, then the image
$\{y:M[G]\models\exists x\in a\ \psi(x,y,\vec\rho_{G})\}$ is a set of $M[G]$;
indeed it is contained in the value of a ground set of witness names lying in
one stage $M^{P^{\le\gamma}}$.

## Facts & Assumptions
**Given:** a GBC + Global Choice + GCH ground, a definable Easton class function $F$, the class product $P=P(F)$, an $M$-generic filter $G$, a fixed formula $\psi(x,y,\vec\rho)$, parameter names $\vec\rho$ and a set $a=\tau_{G}\in M[G]$.

[F1] Stages, names, valuation, definable class forcing and truth lemma for $M[G]=\bigcup_{\lambda}M[G^{\le\lambda}]$. ([[lem-easton-class-forcing-truth-and-set-names]])

[F2] Uniform decisions with witnesses: applied to the formula $\exists y\,\psi(x,y,\vec\rho)$ and the tuples $(\sigma_{\alpha},\vec\rho)$ for a ground enumeration $\langle\sigma_{\alpha}:\alpha<\mu\rangle$ of $\operatorname{dom}(\tau)$ with $\mu\le\lambda$, there are $t\in G^{>\lambda}$ and maximal antichains $W_{\alpha}\subseteq P^{\le\lambda}$ such that each cell carries a recorded truth value and, when positive, a ground set name $\rho_{\alpha,q}$ with $t\cup q\Vdash\psi(\sigma_{\alpha},\rho_{\alpha,q},\vec\rho)$; the truth values are computed in $M[G^{\le\lambda}]$ and all witness names lie in one stage $M^{P^{\le\gamma}}$. ([[lem-easton-class-tail-head-decision]])

[F3] Separation and the bounded power-set clause hold in $M[G]$, and each $M[G^{\le\lambda}]$ is a transitive model of ZFC with the same ordinals as $M$ containing the stages below it, satisfying Choice. ([[lem-easton-class-separation-and-power-set]], [[lem-lc-boolean-generic-zfc-and-ordinals]], [[thm-forcing-preorders-have-regular-open-completions]])

[F4] The Axiom of Choice, so ground sets can be enumerated and images formed. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $a=\tau_{G}$, choose an infinite regular $\lambda$ above the stages of $\tau$ and $\vec\rho$ with $\mu:=\lvert\operatorname{dom}(\tau)\rvert^{M}<\lambda$, and enumerate $\operatorname{dom}(\tau)=\langle\sigma_{\alpha}:\alpha<\mu\rangle\in M$ [F4]; then $a\subseteq\{\sigma_{\alpha,G}:\alpha<\mu\}$ and $a,\vec\rho_{G}\in M[G^{\le\lambda}]$ by the valuation and stage clauses of [F1]. Assume $M[G]\models\forall x\in a\,\exists!y\,\psi(x,y,\vec\rho_{G})$. This assertion concerns only the active values $\sigma_{\alpha,G}\in a$; a name in $\operatorname{dom}(\tau)$ whose coefficient is not met by $G$ may have a value outside $a$. [F1, F4]

1.2 Apply [F2] to the formula $\exists y\,\psi(x,y,\vec\rho)$ and the tuples $(\sigma_{\alpha},\vec\rho)$, obtaining $t\in G^{>\lambda}$, maximal antichains $W_{\alpha}$ and, for every cell $q\in W_{\alpha}$ with a positive recorded value, a ground name $\rho_{\alpha,q}$ with $t\cup q\Vdash\psi(\sigma_{\alpha},\rho_{\alpha,q},\vec\rho)$. Put $S=\{\rho_{\alpha,q}:\alpha<\mu,\ q\in W_{\alpha},\ \text{the value recorded at }q\text{ is positive}\}$, a ground set indexed by the set $\mu\times\bigcup_{\alpha<\mu}W_{\alpha}$ [F3, F4]; by the last clause of [F2] there is an infinite regular $\gamma$ with $S\subseteq M^{P^{\le\gamma}}$, and then $\{\rho_{G}:\rho\in S\}=\{\rho_{G^{\le\gamma}}:\rho\in S\}\in M[G^{\le\gamma}]$ by [F1]. [F1, F2, F3, F4]

2.1 Every actual value lies in that image. Let $x=\sigma_{\alpha,G}\in a$ and let $y$ be the unique element of $M[G]$ with $M[G]\models\psi(x,y,\vec\rho_{G})$. The truth value of the existential instance was decided on the antichain $W_{\alpha}$ by the unique $q_{\alpha}\in W_{\alpha}\cap G^{\le\lambda}$ from [F2]. Its recorded value cannot be negative: then a condition of $G$ extending $t\cup q_{\alpha}$ would force $\neg\exists y\,\psi(\sigma_{\alpha},y,\vec\rho)$, contradicting soundness in the actual extension and the existence of $y$. Hence the positive cell carries $\rho_{\alpha,q_{\alpha}}\in S$ and forces $\psi(\sigma_{\alpha},\rho_{\alpha,q_{\alpha}},\vec\rho)$. Soundness gives $M[G]\models\psi(\sigma_{\alpha,G},\rho_{\alpha,q_{\alpha},G},\vec\rho_{G})$, so uniqueness yields $y=\rho_{\alpha,q_{\alpha},G}\in\{\rho_{G}:\rho\in S\}$. Thus the image is a subset of this set and is itself a set of $M[G]$ by Separation [F3]. [F1, F2, F3, step 1.2]

3.1 Replacement follows since $\psi$, the parameters and $a$ were arbitrary, and the proof shows in addition that the image is contained in the value of a ground set of witness names all of which lie in the single stage $M^{P^{\le\gamma}}$: this is the statement. ∎ [step 1.2, step 2.1]
