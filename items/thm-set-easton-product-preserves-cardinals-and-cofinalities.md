---
id: thm-set-easton-product-preserves-cardinals-and-cofinalities
kind: theorem
title: Set-sized Easton forcing preserves cardinals and cofinalities
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-easton-function, def-easton-support-product, lem-easton-head-cc-and-tail-closure, lem-easton-head-tail-no-new-short-sequences, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-cofinality-basics, def-cofinality, thm-forcing-preserves-ordinals, lem-lc-boolean-generic-zfc-and-ordinals, thm-forcing-preorders-have-regular-open-completions, def-aleph-and-beth-hierarchies, def-axiom-of-choice, def-dense-open-sets-and-model-generic-filters]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, cardinal preservation argument after Lemma 15.19, printed pp.234-235"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Corollary 56, PDF p.12"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume the Generalized Continuum Hypothesis, that is $2^{\aleph_\alpha}=\aleph_{\alpha+1}$
for every ordinal $\alpha$ ([[def-aleph-and-beth-hierarchies]]). Let $F$ be a
set-sized Easton function ([[def-easton-function]]), let $M$ be a transitive
ground model of ZFC, and let $G$ be $M$-generic for the set-sized Easton product
$P(F)$ of [[def-easton-support-product]].

Then $M$ and the generic extension $M[G]$ have the same ordinals, the same
cofinality function, and the same cardinals: for every ordinal
$\delta\in M$, $\operatorname{cf}^{M[G]}(\delta)=\operatorname{cf}^{M}(\delta)$
([[def-cofinality]]), and every $M$-cardinal remains a cardinal of $M[G]$.

The proof is the source's cardinal-preservation argument after Lemma 15.19: if
a regular ground cardinal became singular, a cofinal map of shorter length would
already lie in the extension by the head of the product alone, and that head is
chain-condition forcing on its regular cardinals.

## Facts & Assumptions
**Given:** GCH, a set-sized Easton function $F$, a transitive ground model $M$ of ZFC, and an $M$-generic filter $G$ for $P(F)$.

[F1] Under GCH the successor cardinals satisfy $2^{\aleph_\alpha}=\aleph_{\alpha+1}$; every singular cardinal is a limit cardinal, so the smaller cardinals are cofinal in it. ([[def-aleph-and-beth-hierarchies]], [[thm-cofinality-basics]])

[F2] For every infinite regular $\lambda$, the head $P^{\le\lambda}$ has the $\lambda^{+}$-chain condition, the tail $P^{>\lambda}$ is $\lambda^{+}$-closed, and $P(F)\cong P^{\le\lambda}\times P^{>\lambda}$. ([[lem-easton-head-cc-and-tail-closure]])

[F3] For a transitive ZF model $M$ containing a forcing order $Q$ and its order, a filter $K\subseteq Q$ is $M$-generic when $K\cap D\ne\varnothing$ for every dense $D\subseteq Q$ with $D\in M$, a set being dense when below every condition it contains a stronger one. ([[def-dense-open-sets-and-model-generic-filters]])

[F4] If a set forcing $P$ is $\lambda^{+}$-closed and $Q$ is $\lambda^{+}$-cc, then every function $f:\lambda\to M$ in $M[G\times H]$ already lies in $M[H]$. ([[lem-easton-head-tail-no-new-short-sequences]])

[F5] If $\theta$ is regular and $P$ is $\theta$-cc, then forcing with $P$ preserves every ground-model cofinality at least $\theta$ and every ground-model cardinal at least $\theta$. ([[thm-chain-condition-preserves-cofinalities-and-cardinals]])

[F6] $\operatorname{cf}(\alpha)\le\alpha$ at every ordinal; a cofinal map of length $\operatorname{cf}(\alpha)$ may be taken strictly increasing; an infinite cardinal $\kappa$ is regular exactly when $\operatorname{cf}(\kappa)=\kappa$. ([[thm-cofinality-basics]], [[def-cofinality]])

[F7] Forcing with a nonempty preorder preserves the ordinals, and over a transitive ZFC ground model the generic extension satisfies ZFC: ordinals, cofinalities and cardinal minima are computed in it by its own Replacement. ([[thm-forcing-preserves-ordinals]], [[lem-lc-boolean-generic-zfc-and-ordinals]], [[thm-forcing-preorders-have-regular-open-completions]])

[F8] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

1.1 Fix the data of the statement, so that $M\subseteq M[G]$ are transitive models with the same ordinals and $M[G]\models\mathrm{ZF}$, and let $\delta\in M$ be an ordinal. [F7, given]

1.2 For every infinite ground regular cardinal $\lambda$ the factorization $P(F)\cong P^{\le\lambda}\times P^{>\lambda}$ holds in $M$. The coordinate projections $G^{>\lambda}$ and $G^{\le\lambda}$ of $G$ are $M$-generic: if $D\subseteq P^{\le\lambda}$ is dense and $D\in M$, then the set of conditions $p\in P(F)$ with $p^{\le\lambda}\in D$ is dense in $P(F)$ and lies in $M$, so $G$ meets it and $G^{\le\lambda}$ meets $D$; the same computation with a dense $D\subseteq P^{>\lambda}$ handles the tail. Hence $M[G]=M[G^{>\lambda}][G^{\le\lambda}]$. [F2, F3]

2.1 Every ground regular cardinal remains regular in $M[G]$. Suppose $\kappa$ is infinite and regular in $M$ but not in $M[G]$, and let $\delta=\operatorname{cf}^{M[G]}(\kappa)<\kappa$ with a cofinal $f:\delta\to\kappa$ in $M[G]$. Then $\delta$ is an infinite regular cardinal of $M[G]$ and hence also of $M$: if $\operatorname{cf}^{M}(\delta)<\delta$ then $M[G]$ would contain a cofinal map $\operatorname{cf}^{M}(\delta)\to\delta$ by [F7], making $\delta$ singular in $M[G]$. So $\delta$ is an infinite regular cardinal of $M$ with $\delta<\kappa$, and by step 1.2 the lemma [F4] applies with the $\delta^{+}$-closed tail $P^{>\delta}$ and the $\delta^{+}$-cc head $P^{\le\delta}$, giving $f\in M[G^{\le\delta}]$. Thus $\operatorname{cf}^{M[G^{\le\delta}]}(\kappa)\le\delta$, while [F5] at $\theta=\delta^{+}\le\kappa$ gives $\operatorname{cf}^{M[G^{\le\delta}]}(\kappa)=\operatorname{cf}^{M}(\kappa)=\kappa>\delta$, a contradiction. [F1, F6, F7, F8, step 1.2]

3.1 Every ground cardinal remains a cardinal of $M[G]$. Suppose not, and let $\kappa$ be the least ground cardinal with $\lvert\kappa\rvert^{M[G]}=\mu<\kappa$. By step 2.1, $\kappa$ cannot be regular in $M$: an ordinal regular in the ZFC extension is a cardinal there. Thus $\kappa$ is a singular ground cardinal, hence a limit cardinal, and the ground cardinals below it are cofinal in it. Choose a ground cardinal $\nu$ with $\mu<\nu<\kappa$. Minimality of $\kappa$ makes $\nu$ a cardinal of $M[G]$. A bijection $\kappa\to\mu$ in $M[G]$ restricts to an injection $\nu\to\mu$, since $\nu\subseteq\kappa$ and $\nu$ is an ordinal of $M[G]$; hence $\lvert\nu\rvert^{M[G]}\le\mu<\nu$, a contradiction. [F1, F7, step 2.1]

3.2 All ground cofinalities are preserved. Let $\kappa=\operatorname{cf}^{M}(\delta)$ and fix a strictly increasing cofinal $g:\kappa\to\delta$ in $M$, so that $\operatorname{cf}^{M[G]}(\delta)\le\kappa$ because $g$ still has unbounded range in $M[G]$. If $\eta=\operatorname{cf}^{M[G]}(\delta)<\kappa$, take a cofinal $h:\eta\to\delta$ in $M[G]$ and define $h':\eta\to\kappa$ in $M[G]$ by letting $h'(\xi)$ be the least $\beta<\kappa$ with $h(\xi)\le g(\beta)$. Then $h'$ has cofinal range in $\kappa$: given $\beta_0<\kappa$, cofinality of $h$ gives $\xi$ with $h(\xi)\ge g(\beta_0)$, hence $g(h'(\xi))\ge h(\xi)\ge g(\beta_0)$ and $h'(\xi)\ge\beta_0$ by strict increase of $g$. So $\operatorname{cf}^{M[G]}(\kappa)\le\eta<\kappa$ would hold, contradicting step 2.1 since $\kappa$ is ground regular; therefore $\operatorname{cf}^{M[G]}(\delta)=\kappa=\operatorname{cf}^{M}(\delta)$. [F6, F8, step 2.1]

4.1 Steps 3.2 and 3.1 show that $M$ and $M[G]$ have the same ordinals, the same cofinality function on the ordinals of $M$, and the same cardinals, which is the statement. ∎ [step 3.2, 3.1]
