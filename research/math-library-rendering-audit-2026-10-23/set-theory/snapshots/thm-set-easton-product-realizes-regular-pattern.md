---
id: thm-set-easton-product-realizes-regular-pattern
kind: theorem
title: Set-sized Easton realization on regular cardinals
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-function, def-easton-support-product, lem-easton-head-cc-and-tail-closure, lem-easton-head-tail-no-new-short-sequences, lem-easton-head-cardinality-and-name-count, thm-set-easton-product-preserves-cardinals-and-cofinalities, thm-nice-name-reduction-and-counting, def-nice-name-for-a-subset, def-dense-open-sets-and-model-generic-filters, thm-forcing-theorem, def-forcing-names-and-name-rank, def-check-names-and-the-canonical-generic-name, def-aleph-and-beth-hierarchies, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, the set-sized Easton calculation, printed p.234"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Theorem 58, PDF p.12"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume the Generalized Continuum Hypothesis ([[def-aleph-and-beth-hierarchies]]),
let $M$ be a transitive ground model of ZFC, let $F$ be a set-sized Easton
function ([[def-easton-function]]) and let $G$ be an $M$-generic filter for the
set-sized Easton product $P(F)$ ([[def-easton-support-product]]).

Then:

**(a)** $M$ and $M[G]$ have the same ordinals, the same cofinality function and
the same cardinals; and

**(b)** in $M[G]$ the continuum function on $\operatorname{dom}(F)$ is realized
by $F$: for every $\kappa\in\operatorname{dom}(F)$,
$(2^{\kappa})^{M[G]}=F(\kappa)$, the ground-model cardinal $F(\kappa)$ being
still a cardinal of $M[G]$.

The proof is the source's realization computation: the head alone carries every
subset of $\kappa$ in the extension and has at most $F(\kappa)$ nice names for
them, while the $F(\kappa)$ many $\kappa$-columns of the generic are pairwise
distinct by density.

## Facts & Assumptions

**Given:** GCH, a transitive ground model $M$ of ZFC, a set-sized Easton function $F$, and an $M$-generic filter $G$ for $P(F)$.

[F1] $M$ and $M[G]$ have the same ordinals, the same cofinality function and the same cardinals, and every $M$-cardinal remains a cardinal of $M[G]$. ([[thm-set-easton-product-preserves-cardinals-and-cofinalities]])

[F2] An Easton function $F$ has cardinal values, is nondecreasing, and satisfies $\operatorname{cf}(F(\kappa))>\kappa$ for $\kappa\in\operatorname{dom}(F)$, so $F(\kappa)>\kappa$ and $F(\kappa)\ge\kappa^{+}$. ([[def-easton-function]])

[F3] For every infinite regular $\lambda$: $P^{\le\lambda}$ has the $\lambda^{+}$-chain condition, $P^{>\lambda}$ is $\lambda^{+}$-closed, and $P(F)\cong P^{\le\lambda}\times P^{>\lambda}$ with head $P^{\le\lambda}$ and tail $P^{>\lambda}$, both sets when $F$ is set-sized. ([[lem-easton-head-cc-and-tail-closure]])

[F4] A condition of $P(F)$ is a partial function on the triples $(\kappa,\alpha,\beta)$, $\kappa\in\operatorname{dom}(F)$, $\alpha<\kappa$, $\beta<F(\kappa)$, values in $\{0,1\}$, with fewer than $\gamma$ triples of first coordinate $\le\gamma$ for every infinite regular $\gamma$, ordered by reverse inclusion; a condition of the head $P^{\le\kappa}$ therefore has fewer than $\kappa$ triples, and the fibre at $\kappa$ is $\operatorname{Add}(\kappa,F(\kappa))=\operatorname{Fn}(F(\kappa)\times\kappa,2,{<}\kappa)$. ([[def-easton-support-product]])

[F5] A filter $K\subseteq Q$ is $M$-generic when $K\cap D\ne\varnothing$ for every dense $D\subseteq Q$ with $D\in M$, a set being dense when below every condition it contains a stronger one. ([[def-dense-open-sets-and-model-generic-filters]])

[F6] If a set-sized forcing $P$ is $\lambda^{+}$-closed and $Q$ is $\lambda^{+}$-cc, then for every $M$-generic $G\times H$ and every $f:\lambda\to M$ with $f\in M[G\times H]$ one has $f\in M[H]$; in particular the $P$-factor adds no new subsets of $\lambda$ over the intermediate head extension $M[H]$. ([[lem-easton-head-tail-no-new-short-sequences]])

[F7] Under GCH, for every $\kappa\in\operatorname{dom}(F)$: $\lvert P^{\le\kappa}\rvert=F(\kappa)$, and there are at most $F(\kappa)$ nice $P^{\le\kappa}$-names for subsets of $\kappa$. ([[lem-easton-head-cardinality-and-name-count]])

[F8] Every $P$-name forced to be a subset of a ground-model set $A$ is forced equal to a nice name, that is, to a name $\{\langle\check a,p\rangle:a\in A,\ p\in A_a\}$ with each $A_a\subseteq P$ an antichain. ([[thm-nice-name-reduction-and-counting]], [[def-nice-name-for-a-subset]])

[F9] For each fixed formula the forcing relation is definable from $P$ and the name parameters over $M$, $p\Vdash\varphi(\vec\tau)$ implies $M[G]\models\varphi(\vec\tau_G)$ for every $M$-generic $G\ni p$, and every element of $M[G]$ is the value of a name in $M$. ([[thm-forcing-theorem]], [[def-forcing-names-and-name-rank]], [[def-check-names-and-the-canonical-generic-name]])

[F10] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

1.1 Fix $\kappa\in\operatorname{dom}(F)$. Then $\kappa$ is an infinite regular cardinal, $F(\kappa)$ is a ground cardinal with $F(\kappa)>\kappa$ and $\operatorname{cf}(F(\kappa))>\kappa$ by [F2], and by [F1] the models $M\subseteq M[G]$ have the same ordinals, cofinality function and cardinals, so $\kappa$ keeps its cofinality and $F(\kappa)$ is still a cardinal of $M[G]$. [F1, F2]

1.2 The head and the tail are the factors of $P(F)$ at $\kappa$: $P(F)\cong P^{\le\kappa}\times P^{>\kappa}$ with $P^{>\kappa}$ $\kappa^{+}$-closed, $P^{\le\kappa}$ $\kappa^{+}$-cc and both set-sized [F3, F4]. The coordinate projections $G^{>\kappa}$ and $G^{\le\kappa}$ of $G$ are $M$-generic: if $D\subseteq P^{\le\kappa}$ is dense and $D\in M$, then $\{p\in P(F):p^{\le\kappa}\in D\}$ is dense in $P(F)$ and lies in $M$, so $G$ meets it and $G^{\le\kappa}$ meets $D$, and symmetrically for the tail; hence $M[G]=M[G^{>\kappa}][G^{\le\kappa}]$. [F3, F4, F5]

2.1 $(2^{\kappa})^{M[G]}\le F(\kappa)$: let $x\in M[G]$ with $x\subseteq\kappa$. Its characteristic function is a function $\kappa\to M$ in $M[G]$, so $x\in M[G^{\le\kappa}]$ by [F6] applied to the pair $P^{>\kappa}$, $P^{\le\kappa}$ of step 1.2. By [F9] there is a $P^{\le\kappa}$-name $\sigma\in M$ with $\sigma_{G^{\le\kappa}}=x$. Form in $M$ the usual name $\sigma'$ for $\sigma\cap\check\kappa$; the top condition forces $\sigma'\subseteq\check\kappa$, and $\sigma'_{G^{\le\kappa}}=x$. By [F8] there is a nice $P^{\le\kappa}$-name $\tau\in M$ with $\tau_{G^{\le\kappa}}=x$. By [F7] the set of nice $P^{\le\kappa}$-names for subsets of $\kappa$ has at most $F(\kappa)$ elements in $M$, and $F(\kappa)$ is a cardinal of $M[G]$ by step 1.1, so the assignment $x\mapsto$ the ground well-order-least such $\tau$, which is defined in $M[G]$ using the well-order that [F10] gives in $M$, is an injection of the subsets of $\kappa$ in $M[G]$ into $F(\kappa)$. Hence $(2^{\kappa})^{M[G]}\le F(\kappa)$. [F6, F7, F8, F9, F10, step 1.1, step 1.2]

2.2 $(2^{\kappa})^{M[G]}\ge F(\kappa)$: for each $\beta<F(\kappa)$ form the $P^{\le\kappa}$-name $\dot x_{\beta}=\{\langle\check\alpha,p\rangle:\alpha<\kappa,\ p\in P^{\le\kappa},\ p(\kappa,\alpha,\beta)=1\}$. Its value is a subset of $\kappa$. For each $\alpha<\kappa$, the head conditions deciding the coordinate $(\kappa,\alpha,\beta)$ are dense, so $\alpha$ belongs to $x_\beta:=\operatorname{val}_{G^{\le\kappa}}(\dot x_\beta)$ exactly when the generic column at $(\alpha,\beta)$ has bit $1$. For distinct $\beta,\beta'$ and any head condition $p\in P^{\le\kappa}$, choose $\alpha<\kappa$ not occurring in any triple of $\operatorname{dom}(p)$, possible since $\lvert\operatorname{dom}(p)\rvert<\kappa$. Then $q=p\cup\{(\kappa,\alpha,\beta)\mapsto 1,(\kappa,\alpha,\beta')\mapsto 0\}$ is a head condition stronger than $p$ with $\lvert\operatorname{dom}(q)\rvert<\kappa$; adding these two coordinates also leaves the support bounds below $\kappa$ intact. The condition $q$ forces $\check\alpha\in\dot x_\beta$ and $\check\alpha\notin\dot x_{\beta'}$. Thus the head conditions forcing $\dot x_\beta\ne\dot x_{\beta'}$ are dense. By [F9] the map $\beta\mapsto x_\beta$ is an injection of $F(\kappa)$ into $\mathcal P(\kappa)$ in $M[G]$, and $(2^{\kappa})^{M[G]}\ge F(\kappa)$. [F4, F5, F9, step 1.2]

3.1 Steps 2.1 and 2.2 and the fact that $F(\kappa)$ is a cardinal of $M[G]$ give $(2^{\kappa})^{M[G]}=F(\kappa)$ for the fixed $\kappa$, and $\kappa\in\operatorname{dom}(F)$ was arbitrary, so the continuum function on $\operatorname{dom}(F)$ is realized; step 1.1 gives the preservation clause (a). This is the statement. ∎ [step 1.1, step 2.1, step 2.2]
