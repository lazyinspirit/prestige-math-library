---
id: thm-eastons-theorem-for-regular-cardinals
kind: theorem
title: Easton's theorem for regular cardinals
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gbc-global-choice-ground-for-easton, lem-easton-class-generic-model-satisfies-zfc, lem-easton-class-forcing-truth-and-set-names, lem-easton-head-cc-and-tail-closure, lem-easton-head-tail-no-new-short-sequences, thm-set-easton-product-realizes-regular-pattern, thm-chain-condition-preserves-cofinalities-and-cardinals, def-easton-function, def-aleph-and-beth-hierarchies, thm-regular-continuum-function-constraints, def-axiom-of-choice, def-cofinality, thm-cofinality-basics]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Theorem 15.18 (Easton) and its class-forcing proof, printed pp.232-237"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Theorem 77 (global Easton, proof sketch), PDF p.16"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  precheck: pending
---

## Statement

Let $(M,\mathcal{C})$ be a GBC + Global Choice + GCH ground
([[def-gbc-global-choice-ground-for-easton]]), let $F$ be a definable Easton
class function defined on every infinite regular cardinal of $M$
([[def-easton-function]]), and let $G$ be $M$-generic for the Easton class
product $P(F)$.

Then the generic union $M[G]$ is a model of ZFC containing $M$, $M[G]$ has the
same ordinals, the same cardinals and the same cofinality function as $M$, and
$$M[G]\models 2^{\kappa}=F(\kappa)$$
at every infinite regular cardinal $\kappa$ of $M$. Consequently the three
necessary conditions of [[thm-regular-continuum-function-constraints]], namely
$\kappa<2^{\kappa}$, monotonicity and $\operatorname{cf}(2^{\kappa})>\kappa$ for
infinite regular $\kappa$, are the only ZFC constraints on the values at
regular cardinals in the corresponding relative-consistency construction: every
Easton function on the regular cardinals of such a ground is realized by a
class-generic extension.

## Facts & Assumptions
**Given:** a GBC + Global Choice + GCH ground $(M,\mathcal{C})$, a definable Easton class function $F$ defined on every infinite regular cardinal of $M$, the class product $P=P(F)$ and an $M$-generic filter $G$.

[F1] $M[G]=\bigcup_{\lambda}M[G^{\le\lambda}]$ is a transitive model of ZFC containing $M$ with exactly the ordinals of $M$, the class forcing relation satisfies the truth lemma, and every element of $M[G]$ is the value of a $P^{\le\lambda}$-name for some infinite regular $\lambda$. ([[lem-easton-class-generic-model-satisfies-zfc]], [[lem-easton-class-forcing-truth-and-set-names]])

[F2] For every infinite regular $\lambda$, the head $P^{\le\lambda}$ is a set with the $\lambda^{+}$-chain condition, the tail $P^{>\lambda}$ is $\lambda^{+}$-closed, and $P^{\le\lambda}\cong$ the set-sized Easton product of the fibres with first coordinate $\le\lambda$. ([[lem-easton-head-cc-and-tail-closure]])

[F3] If a set-sized factor is $\lambda^{+}$-closed and the other is $\lambda^{+}$-cc, then every $\lambda$-sequence of ground-model elements in the product extension already lies in the extension by the cc factor. ([[lem-easton-head-tail-no-new-short-sequences]])

[F4] If $\theta$ is a regular cardinal of $M$ and a set forcing is $\theta$-cc, then forcing with it preserves every ground-model cofinality $\ge\theta$ and every ground-model cardinal $\ge\theta$. ([[thm-chain-condition-preserves-cofinalities-and-cardinals]])

[F5] For a set-sized Easton function on a set of regular cardinals, forcing with its Easton product over a ZFC + GCH ground realizes $2^{\kappa}=F(\kappa)$ at every regular $\kappa$ of the domain and preserves cardinals and cofinalities. ([[thm-set-easton-product-realizes-regular-pattern]])

[F6] In ZFC the continuum function at infinite regular cardinals satisfies $\kappa<2^{\kappa}$, monotonicity and $\operatorname{cf}(2^{\kappa})>\kappa$. ([[thm-regular-continuum-function-constraints]])

[F7] An Easton function has cardinal values, is nondecreasing, satisfies $\operatorname{cf}(F(\kappa))>\kappa$, and $F(\kappa)>\kappa$ for every $\kappa\in\operatorname{dom}(F)$, here the class of all infinite regular cardinals of $M$. ([[def-easton-function]])

[F8] GCH in the ground means $2^{\aleph_{\alpha}}=\aleph_{\alpha+1}$ for every ordinal $\alpha$, and a countable transitive model of ZFC + V = L with its closure classes is an example of such a ground. ([[def-aleph-and-beth-hierarchies]], [[def-gbc-global-choice-ground-for-easton]])

[F9] The ground-model Axiom of Choice is a hypothesis ([[def-axiom-of-choice]]); an infinite cardinal $\kappa$ is regular exactly when $\operatorname{cf}(\kappa)=\kappa$, and cofinality has the basic bounds and increasing witnesses used below ([[def-cofinality]], [[thm-cofinality-basics]]).

## Proof

1.1 By [F1] $M[G]\models\mathrm{ZFC}$ and $M\subseteq M[G]$ have the same ordinals; fix an infinite regular $\kappa$ of $M$. The head $P^{\le\kappa}$ is a set-sized Easton product with the $\kappa^{+}$-chain condition and the tail $P^{>\kappa}$ is $\kappa^{+}$-closed [F2]. Any subset of $\kappa$ in $M[G]$ has a name in a set stage $M[G^{\le\gamma}]$ for some infinite regular $\gamma\ge\kappa$ [F1], and the factorization $P^{\le\gamma}\cong P^{\le\kappa}\times P^{(\kappa,\gamma]}$ has $\kappa^{+}$-closed second factor and $\kappa^{+}$-cc first factor, so [F3] puts the subset already in $M[G^{\le\kappa}]$. The set-sized realization theorem gives $2^{\kappa}=F(\kappa)$ in $M[G^{\le\kappa}]$ [F5]. Thus the full extension has the same set of subsets of $\kappa$ as that head extension. [F1, F2, F3, F5]

1.2 Every ground regular cardinal remains regular in $M[G]$: suppose $\kappa$ is infinite and regular in $M$ but not in $M[G]$, and let $\delta=\operatorname{cf}^{M[G]}(\kappa)<\kappa$ with a cofinal $f:\delta\to\kappa$ in $M[G]$. Then $\delta$ is regular in $M[G]$ and therefore in $M$, since otherwise a ground cofinal map of shorter length would persist into $M[G]$; so $\delta$ is an infinite regular cardinal of $M$ with $\delta<\kappa$. By [F1] the function $f$ lies in some stage $M[G^{\le\gamma}]$ with $\gamma\ge\delta$, and the factorization $P^{\le\gamma}\cong P^{\le\delta}\times P^{(\delta,\gamma]}$ has $\delta^{+}$-closed second factor and $\delta^{+}$-cc first factor [F2], so [F3] gives $f\in M[G^{\le\delta}]$ and hence $\operatorname{cf}^{M[G^{\le\delta}]}(\kappa)\le\delta$; but [F4] at $\theta=\delta^{+}\le\kappa$ gives $\operatorname{cf}^{M[G^{\le\delta}]}(\kappa)=\operatorname{cf}^{M}(\kappa)=\kappa>\delta$, a contradiction. [F1, F2, F3, F4, F9]

2.1 Every ground cardinal remains a cardinal of $M[G]$: suppose $\kappa$ is the least ground cardinal with $\lvert\kappa\rvert^{M[G]}=\mu<\kappa$. By step 1.2, $\kappa$ cannot be regular in $M$, since an ordinal that remains regular in the ZFC extension is a cardinal there. Thus $\kappa$ is a singular ground cardinal, hence a limit cardinal; the ground cardinals below $\kappa$ are cofinal in $\kappa$. Choose a ground cardinal $\nu$ with $\mu<\nu<\kappa$. Minimality of $\kappa$ makes $\nu$ a cardinal in $M[G]$, whereas a bijection $\kappa\to\mu$ in $M[G]$ restricts to an injection $\nu\to\mu$, a contradiction. Hence all ground cardinals remain cardinals. [F1, F9, step 1.2]

2.2 All ground cofinalities are preserved. Let $\kappa=\operatorname{cf}^{M}(\delta)$ for an ordinal $\delta$ of $M$ and fix a strictly increasing cofinal $g:\kappa\to\delta$ in $M$; then $\operatorname{cf}^{M[G]}(\delta)\le\kappa$ because $g$ is still cofinal in $M[G]$. If $\eta=\operatorname{cf}^{M[G]}(\delta)<\kappa$, take a cofinal $h:\eta\to\delta$ in $M[G]$ and define $h':\eta\to\kappa$ in $M[G]$ by letting $h'(\xi)$ be the least $\beta<\kappa$ with $h(\xi)\le g(\beta)$; then $h'$ is cofinal in $\kappa$, because for any $\beta_{0}<\kappa$ cofinality of $h$ gives $\xi<\eta$ with $h(\xi)\ge g(\beta_{0})$, hence $g(h'(\xi))\ge h(\xi)\ge g(\beta_{0})$ and $h'(\xi)\ge\beta_{0}$ by strict increase of $g$. So $\operatorname{cf}^{M[G]}(\kappa)\le\eta<\kappa$, contradicting step 1.2 because $\kappa$ is regular in $M$; therefore $\operatorname{cf}^{M[G]}(\delta)=\operatorname{cf}^{M}(\delta)$. [F9, step 1.2]

3.1 By step 1.1 the full extension and the head extension have the same subsets of each regular $\kappa$, and by step 2.1 $F(\kappa)$ remains a cardinal; hence $(2^{\kappa})^{M[G]}=F(\kappa)$. Steps 2.1 and 2.2 therefore give a ZFC model $M[G]\supseteq M$ with the ordinals, cardinals and cofinalities of $M$ and with $2^{\kappa}=F(\kappa)$ at every infinite regular cardinal; for the final clause, if $F$ satisfies the three necessary conditions of [F6] then $F$ is an Easton function in the sense of [F7] and the construction above realizes it, while conversely those necessary conditions must hold of $2^{\kappa}$ by [F6]; the relative-consistency reading is the one of [F8]: a constructible GCH ground with its closure classes supplies the ground, so no more than the necessary conditions is required. This is the statement. ∎ [step 1.1, step 2.1, step 2.2]
