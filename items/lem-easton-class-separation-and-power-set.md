---
id: lem-easton-class-separation-and-power-set
kind: lemma
title: Separation and Power Set in the Easton class extension
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, lem-easton-class-forcing-truth-and-set-names, lem-easton-class-tail-head-decision, lem-easton-head-tail-no-new-short-sequences, lem-easton-head-cc-and-tail-closure, def-easton-support-product, lem-lc-boolean-generic-zfc-and-ordinals, thm-forcing-preorders-have-regular-open-completions, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Power Set and the Separation step left to the reader, printed p.236"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
verification:
  precheck: pending
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground
([[def-gbc-global-choice-ground-for-easton]]), $F$ a definable Easton class
function with class product $P=P(F)$ and $G$ an $M$-generic filter
([[lem-easton-class-forcing-truth-and-set-names]]).

Then $M[G]$ satisfies the Separation scheme, formula by formula with set
parameters, and for every $a\in M[G]$ there is an infinite regular $\lambda$ of
$M$ with $a\in M[G^{\le\lambda}]$ such that every subset of $a$ in $M[G]$ lies
in $M[G^{\le\lambda}]$ and the power set
$\mathcal{P}(a)^{M[G]}=\mathcal{P}(a)^{M[G^{\le\lambda}]}$ is an element of
$M[G^{\le\lambda}]$. In particular every subset of an ordinal $\lambda$ of $M$
that belongs to $M[G]$ already belongs to a single set stage, and Power Set
holds in $M[G]$.

This supplies the Separation step that the source leaves to the reader, and it
shows that no proper-class power set is needed: the head stage already carries
the full power set of a ground-stage set.

## Facts & Assumptions
**Given:** a GBC + Global Choice + GCH ground, a definable Easton class function $F$, the class product $P=P(F)$, an $M$-generic filter $G$, and a set $a\in M[G]$.

[F1] Stages, names, valuation and truth lemma: every element of $M[G]$ is $\tau_{G}$ for a $P^{\le\lambda}$-name $\tau\in M$, stages are nested set-forcing extensions, and $M[G]\models\varphi(\vec\tau_{G})\Leftrightarrow\exists p\in G\,(p\Vdash\varphi(\vec\tau))$ with a definable class relation. ([[lem-easton-class-forcing-truth-and-set-names]])

[F2] Uniform decisions: for a fixed formula, an ordinal $\mu\le\lambda$ and $\mu$ many ground tuples of head names, there is a tail condition $t\in G^{>\lambda}$ together with maximal antichains $W_{\alpha}\subseteq P^{\le\lambda}$ and recorded decisions such that the truth value of each instance in $M[G]$ is the value recorded at the unique $q_{\alpha}\in W_{\alpha}\cap G^{\le\lambda}$; the decision data lies in $M[G^{\le\lambda}]$, and the attached witness names lie in one stage $M^{P^{\le\gamma}}$. ([[lem-easton-class-tail-head-decision]])

[F3] If a set-sized factor is $\lambda^{+}$-closed and the other factor is $\lambda^{+}$-cc, then every $\lambda$-sequence of ground-model elements in the product extension already lies in the extension by the cc factor. ([[lem-easton-head-tail-no-new-short-sequences]])

[F4] The head $P^{\le\lambda}$ has the $\lambda^{+}$-chain condition and the tail $P^{>\lambda}$ is $\lambda^{+}$-closed; the middle factor $P^{(\lambda,\gamma]}$ of the factorization $P^{\le\gamma}\cong P^{\le\lambda}\times P^{(\lambda,\gamma]}$ is $\lambda^{+}$-closed by the same union computation: for each regular support bound $\rho>\lambda$, a union of $\delta\le\lambda<\rho$ compatible supports of size below $\rho$ has size at most $\delta\cdot\sup_{\xi<\delta}|A_\xi|<\rho$. ([[lem-easton-head-cc-and-tail-closure]], [[def-easton-support-product]])

[F5] For stages $\lambda\le\gamma$, $P^{\le\gamma}\cong P^{\le\lambda}\times P^{(\lambda,\gamma]}$ splits conditions by first coordinate into two set-sized factors, and $M[G^{\le\gamma}]$ is a transitive model of ZFC with the same ordinals as $M$ and satisfies Choice. ([[def-easton-support-product]], [[lem-lc-boolean-generic-zfc-and-ordinals]], [[thm-forcing-preorders-have-regular-open-completions]])

[F6] The Axiom of Choice, hence every ground set is well-orderable and can be enumerated. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $a=\tau_{G}\in M[G]$ with $\tau\in M^{P^{\le\lambda_{0}}}$ for an infinite regular $\lambda_{0}$ [F1]. Choose an infinite regular $\lambda\ge\lambda_{0}$ with $\mu:=\lvert\operatorname{dom}(\tau)\rvert^{M}<\lambda$, possible because the ground has arbitrarily large regular cardinals, and enumerate $\operatorname{dom}(\tau)=\langle\sigma_{\alpha}:\alpha<\mu\rangle\in M$ using [F6]. Let $I=\{\alpha<\mu:\exists p\in G^{\le\lambda}\ (\langle\sigma_\alpha,p\rangle\in\tau)\}$. Since $\tau$ is a head name, the valuation clause of [F1] gives $a=\{\sigma_{\alpha,G}:\alpha\in I\}$; the activity set $I$ and $a$ lie in $M[G^{\le\lambda}]$ by Separation and valuation there, and $\mu\le\lambda$. [F1, F5, F6]

2.1 Separation. Let $\psi(x,\vec\rho)$ be a fixed formula with parameter names $\vec\rho$ naming elements of $M[G]$; enlarging $\lambda$ if necessary, we may assume the parameters also lie in $M^{P^{\le\lambda}}$ [F1]. Apply [F2] with the tuples $(\sigma_{\alpha},\vec\rho)$, $\alpha<\mu\le\lambda$, to get $t\in G^{>\lambda}$ and maximal antichains $W_{\alpha}$ with decisions; the decision data lie in $M[G^{\le\lambda}]$. For each $\alpha<\mu$ let $q_{\alpha}\in W_{\alpha}\cap G^{\le\lambda}$ be the unique member met by the generic head, and let $b=\{\alpha\in I:\text{the recorded decision at }q_\alpha\text{ is positive}\}$. The activity set $I$ is in the head stage by step 1.1, and the decision data and the enumeration $\alpha\mapsto\sigma_{\alpha,G}$ are there too, so $b\subseteq\mu$ and $\{\sigma_{\alpha,G}:\alpha\in b\}$ are sets of the ZFC head stage [F5]. By [F2] the recorded value is the truth value of $\psi(\sigma_{\alpha,G},\vec\rho_G)$ in $M[G]$, and step 1.1 says the active $\alpha$ enumerate exactly $a$. Thus this set is $\{x\in a:M[G]\models\psi(x,\vec\rho_G)\}$, which proves Separation. [F1, F2, F5, step 1.1]

2.2 Power Set. Let $b\subseteq a$ with $b\in M[G]$. Choose an infinite regular $\gamma\ge\lambda$ with $b\in M[G^{\le\gamma}]$ [F1] and define the membership code $c(\alpha)=1$ if $\sigma_{\alpha,G}\in b$ and $c(\alpha)=0$ otherwise, for $\alpha<\mu$; extend it to $\bar c:\lambda\to M$ by $\bar c(\alpha)=0$ for $\mu\le\alpha<\lambda$ and read $\bar c$ as a function into $\{0,1\}\subseteq M$. Both $c$ and $\bar c$ lie in $M[G^{\le\gamma}]$ because $b$ and the enumeration do. In the factorization $P^{\le\gamma}\cong P^{\le\lambda}\times P^{(\lambda,\gamma]}$ of [F5] the second factor is $\lambda^{+}$-closed by [F4] and the first is $\lambda^{+}$-cc by [F4], so [F3] gives $\bar c\in M[G^{\le\lambda}]$ and hence $c\in M[G^{\le\lambda}]$. Therefore $b=\{\sigma_{\alpha,G}:c(\alpha)=1\}$ is a set of $M[G^{\le\lambda}]$ by Replacement there, again using [F5]. As $b\subseteq a$ was arbitrary, every subset of $a$ in $M[G]$ lies in $M[G^{\le\lambda}]$; since $a\in M[G^{\le\lambda}]$ by step 1.1 and $M[G]\supseteq M[G^{\le\lambda}]$, this says $\mathcal{P}(a)^{M[G]}=\mathcal{P}(a)^{M[G^{\le\lambda}]}\in M[G^{\le\lambda}]$, which is Power Set for $a$. [F1, F3, F4, F5, step 1.1]

3.1 Steps 2.1 and 2.2 prove Separation and the bounded power-set clause for the arbitrary $a\in M[G]$; applying the clause with $a$ an ordinal of $M$ gives the subset clause, and since every set has its $M[G]$-power set inside some stage, Power Set holds in $M[G]$. This is the statement. ∎ [step 2.1, step 2.2]
