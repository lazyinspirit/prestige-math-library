---
id: lem-omega-smallest-inductive
kind: lemma
title: "The natural numbers exist: a smallest inductive set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inductive-set]
aliases: []
landmark: false
short: "$\\omega=\\bigcap$ inductive"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

There is a set $\omega$ that is inductive ([[def-inductive-set]]) and is a subset of every inductive set; it is unique. This $\omega$ is the set of natural numbers.

## Facts & Assumptions

**Given:** ZFC; in particular the Axiom of Infinity: there exists an inductive set. Write $x^{+} := x \cup \{x\}$. Recall that $I$ inductive means $\varnothing \in I$ and ($x \in I \Rightarrow x^{+} \in I$).

## Proof

**Proof technique:** direct.

1.1 By the Axiom of Infinity fix an inductive set $I_0$. [given]

1.2 By Separation the collection $\omega := \{x \in I_0 : x \in J \text{ for every inductive set } J\}$ is a set. [given, construct]

2.1 $\omega$ is inductive: $\varnothing \in J$ for every inductive $J$ (so $\varnothing \in I_0$ and $\varnothing \in \omega$), and if $x \in \omega$ then $x \in J$ for every inductive $J$, hence $x^{+} \in J$ for every inductive $J$, and $x^{+} \in I_0$ since $x \in I_0$ and $I_0$ is inductive, so $x^{+} \in \omega$. [step 1.2]

2.2 $\omega \subseteq J$ for every inductive $J$: any $x \in \omega$ satisfies $x \in J$ by definition. [step 1.2]

3.1 Uniqueness: if $\omega'$ is also inductive and contained in every inductive set, then $\omega \subseteq \omega'$ (as $\omega'$ is inductive) and $\omega' \subseteq \omega$ (as $\omega$ is inductive), so $\omega = \omega'$ by Extensionality. [step 2.1, step 2.2] ∎
