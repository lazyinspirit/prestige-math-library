---
id: def-henkin-witness-extension
kind: definition
title: "Witness constants and Henkin theories"
status: published
origin: pipeline
deps: [def-set-coded-terms-and-formulas, def-set-signature-and-finite-syntax-strings, def-free-variables-and-syntactic-substitution, def-theories-models-and-semantic-consequence]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014), Definition 1I.2, printed p.39, and Lemma 1I.4, pp.40–41; witness-axiom convention explicitly distinguished."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $L$ be a set signature having at least one constant and $H$ a set of $L$-sentences. Call $H$ **Henkin** in the witness-axiom sense if for every existential sentence $\exists x\phi$ of $L$, some constant $c$ of $L$ satisfies

$$((\exists x\phi)\to\phi[c/x])\in H.$$

Here $\operatorname{FV}(\phi)\subseteq\{x\}$, and $\phi[c/x]$ replaces the free occurrences only. A constant has no free variables, so it is free for $x$ and the result is a sentence. Instances with parameters are obtained first by replacing their other free variables by closed terms; no open formula is inserted into the sentence theory. Implication has the fixed primitive expansion $\neg(\psi\land\neg\theta)$ of [[def-set-coded-terms-and-formulas]].

This condition does not itself require consistency, deductive closure or decisions of all sentences. These are additional hypotheses of the later Henkin truth results. The source's term “Henkin set” packages those additional conditions with witnesses for true existential sentences; this item deliberately isolates the witness-axiom condition promised here.

For an arbitrary starting signature, adjoin a seed constant $c_*$ and then disjoint tagged layers of witness constants, naming each new constant by its stage and the existential sentence for which it is introduced. Every later layer is disjoint from earlier ones and from the original symbols. The seed guarantees at least one closed term even for an empty signature. This specifies the language expansion and possible witness axioms, without asserting their consistency or the existence of a completion.

Conventions and prerequisites: [[def-set-signature-and-finite-syntax-strings]], [[def-free-variables-and-syntactic-substitution]], [[def-theories-models-and-semantic-consequence]].
