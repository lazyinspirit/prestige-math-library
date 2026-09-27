---
id: lem-easton-class-generic-model-satisfies-zfc
kind: lemma
title: The Easton class-generic union satisfies ZFC
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, lem-easton-class-forcing-truth-and-set-names, lem-easton-class-tail-head-decision, lem-easton-class-separation-and-power-set, lem-easton-class-replacement, lem-lc-boolean-generic-zfc-and-ordinals, thm-forcing-preorders-have-regular-open-completions, thm-forcing-preserves-ordinals, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, M[G] is a model of ZFC, printed p.237"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15_applications_of_forcing.pdf"
verification:
  precheck: pending
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground, $F$ a definable
Easton class function with class product $P=P(F)$ and $G$ an $M$-generic filter
([[def-gbc-global-choice-ground-for-easton]],
[[lem-easton-class-forcing-truth-and-set-names]]).

Then $M[G]=\bigcup_{\lambda}M[G^{\le\lambda}]$ is a transitive model of ZFC
containing $M$ and having exactly the ordinals of $M$, the class forcing
relation satisfies the truth lemma in it, and for every ordinal $\lambda$ of
$M$ every subset of $\lambda$ in $M[G]$ belongs to a single set stage: there is
an infinite regular $\gamma$ with
$\mathcal{P}(\lambda)^{M[G]}=\mathcal{P}(\lambda)^{M[G^{\le\gamma}]}\in M[G^{\le\gamma}]$.

## Facts & Assumptions
**Given:** a GBC + Global Choice + GCH ground $(M,\mathcal{C})$, a definable Easton class function $F$, the class product $P=P(F)$ and an $M$-generic filter $G$.

[F1] $M[G]=\bigcup_{\lambda}M[G^{\le\lambda}]$, the stages are nested, every element of $M[G]$ is the value of a $P$-name, and the class forcing relation is definable and satisfies the truth lemma. ([[lem-easton-class-forcing-truth-and-set-names]])

[F2] Separation, Power Set and the bounded power-set clause hold in $M[G]$. ([[lem-easton-class-separation-and-power-set]])

[F3] Replacement holds in $M[G]$. ([[lem-easton-class-replacement]])

[F4] Each stage $M[G^{\le\lambda}]$ is, via the regular-open completion of the set forcing $P^{\le\lambda}$, a transitive model of ZFC having exactly the ordinals of $M$ and satisfying Choice, and $G^{\le\lambda}$ is its generic filter. ([[lem-lc-boolean-generic-zfc-and-ordinals]], [[thm-forcing-preorders-have-regular-open-completions]], [[thm-forcing-preserves-ordinals]])

[F5] Every element of $M$ is $\check x_{G}$ for its check name, and check names with the top condition of a head are head names. ([[lem-easton-class-forcing-truth-and-set-names]])

[F6] The ground model satisfies the Axiom of Choice by hypothesis; each set-forcing stage satisfies Choice by [F4]. ([[def-axiom-of-choice]], [[lem-lc-boolean-generic-zfc-and-ordinals]])

## Proof

1.1 Transitivity and ordinals. If $u\in\tau_{G}\in M[G]$, then $u=\sigma_{G}$ for some pair $\langle\sigma,p\rangle\in\tau$ by the valuation clause of [F1], so $u\in M[G]$ and $M[G]$ is transitive; and every $x\in M$ equals its check-name value in $M[G]$ by [F5], so $M\subseteq M[G]$. Each stage has exactly the ordinals of $M$ by [F4], and the stages are nested by [F1], so the ordinals of $M[G]$ are exactly those of $M$. [F1, F4, F5]

2.1 The easy axioms. Extensionality and Foundation are inherited from the ambient universe because $M[G]$ is transitive and its membership relation is the true one; Infinity holds because $\omega\in M\subseteq M[G]$ by step 1.1. For Pairing and Union, given $x_{1},\dots,x_{n}\in M[G]$, choose by [F1] a single stage $M[G^{\le\lambda}]$ containing all of them, possible because the stages are nested and every element lies in some stage; then $\{x_{1},\dots,x_{n}\}$ and $\bigcup x_{1}$ are elements of that ZFC model by [F4] and hence of $M[G]$. Choice holds because each stage satisfies it by [F4] and [F6], so every element of $M[G]$ carries a well-ordering in $M[G]$, and the well-orderable sets of an extension form a model of Choice. [F1, F4, F6, step 1.1]

3.1 The hard axioms. Separation is [F2], Replacement is [F3], and Power Set with the bounded clause is [F2] as well; together with step 2.1 and step 1.1 this makes $M[G]$ a transitive model of ZFC containing $M$ with the same ordinals and the truth lemma of [F1]. Applying the bounded power-set clause of [F2] to the ordinal $a=\lambda\in M\subseteq M[G]$ gives an infinite regular $\gamma$ with $\mathcal{P}(\lambda)^{M[G]}=\mathcal{P}(\lambda)^{M[G^{\le\gamma}]}\in M[G^{\le\gamma}]$, which is the last clause. [F1, F2, F3, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 establish every clause: $M[G]$ is a transitive ZFC model containing $M$ with the ordinals of $M$, carries the definable class forcing relation and its truth lemma, and has all subsets of any ground ordinal inside one set stage. This is the statement. ∎ [step 1.1, step 2.1, step 3.1]
