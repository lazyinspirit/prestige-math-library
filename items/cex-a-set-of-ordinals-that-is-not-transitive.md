---
id: cex-a-set-of-ordinals-that-is-not-transitive
kind: counterexample
title: "A set of ordinals that is not an ordinal: $\\{0,1,\\omega\\}$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-ordinal, lem-ordinal-trichotomy, lem-ordinal-basics,
       lem-omega-least-limit-ordinal, def-natural-numbers, def-well-order,
       def-limit-ordinal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 4 (Ordinals), Definition 4.3 and Exercise 4.1 (transitivity)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3 (an ordinal is a transitive set well ordered by membership)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement refuted

**Refuted claim:** every set of ordinals is itself an ordinal, since membership
well-orders any such set.

The witness is $A=\{0,1,\omega\}$. Its members are ordinals
([[def-ordinal]]), and membership restricted to $A$ is a strict well-order: it
is irreflexive, transitive as a relation, trichotomous, and every nonempty
subset of $A$ has an $\in$-least element
([[lem-ordinal-trichotomy]]). Yet $A$ is not transitive, and therefore not an
ordinal: $2\in\omega\in A$, but $2\notin A$, because $2$ differs from each of
$0$, $1$ and $\omega$. So the well-ordering clause of the definition of an
ordinal does not imply the transitivity clause, and the two clauses are
genuinely independent: conversely $B=\{0,1,\{1\}\}$ is transitive but membership does not compare its distinct members $0$ and $\{1\}$. No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}=\omega$ with $0=\varnothing$, $\sigma(n)=n\cup\{n\}$, $1=\{0\}$, $2=\{0,1\}$, and the ordinals of [[def-ordinal]]; the set $A=\{0,1,\omega\}$.

[F1] A set $\alpha$ is an ordinal when it is transitive and $\in$ restricted to $\alpha$ is a strict well-order; $0=\varnothing$ is an ordinal, $\alpha^{+}=\alpha\cup\{\alpha\}$, and for ordinals $\alpha<\beta$ means $\alpha\in\beta$ ([[def-ordinal]]).

[F2] For ordinals $\alpha,\beta$: every element of an ordinal is an ordinal, and $\alpha\notin\alpha$ ([[lem-ordinal-basics]]).

[F3] Any two ordinals satisfy exactly one of $\alpha\in\beta$, $\alpha=\beta$, $\beta\in\alpha$; every nonempty set of ordinals has an $\in$-least element; and a set of ordinals ordered by inclusion is well ordered with strict part $\in$ ([[lem-ordinal-trichotomy]]).

[F4] Every natural number is an ordinal; $\omega$ is an ordinal and a limit ordinal; and every ordinal in $\omega$ is $0$ or a successor ordinal ([[lem-omega-least-limit-ordinal]]).

[F5] $\mathbb{N}=\omega$ is inductive: $0=\varnothing\in\omega$ and $n\in\omega$ implies $\sigma(n)=n\cup\{n\}\in\omega$; hence $1=\{0\}$ and $2=\{0,1\}$ are members of $\omega$ ([[def-natural-numbers]]).

[F6] An ordinal is a successor ordinal when it equals $\beta^{+}$ for some ordinal $\beta$, and a limit ordinal when it is nonzero and not a successor ([[def-limit-ordinal]]).

[F7] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

## Counterexample

**Proof technique:** direct.

1.1 The members of $A=\{0,1,\omega\}$ are ordinals, and the membership relations among them are as follows: $0$ and $1$ and $2$ are natural numbers, hence ordinals by [F4]; $\omega$ is an ordinal by [F4]; $1=\{0\}$ and $2=\{0,1\}$ by [F5], and $0\in1$, $1\in\omega$, $2\in\omega$, $0\in\omega$ because $0,1,2$ are members of the inductive set $\omega$; moreover $2\ne\omega$, since $2=\sigma(1)=1^{+}$ is a successor ordinal while $\omega$ is a limit ordinal by [F4] and [F6]. [F1, F4, F5, F6]

1.2 Conversely $B=\{0,1,\{1\}\}$ is transitive: its members $0=\varnothing$, $1=\{0\}$ and $\{1\}$ are all subsets of $B$. But $0\ne\{1\}$, since $\{1\}$ is nonempty, and neither $0\in\{1\}$ (because $0\ne1$) nor $\{1\}\in0$ holds. Thus membership on $B$ is not trichotomous and is not a strict well-order. Thus transitivity alone does not imply the well-ordering clause of the ordinal definition. [F1, F5]

2.1 Membership restricted to $A$ is irreflexive: each of $0$, $1$, $\omega$ is an ordinal by step 1.1, and no ordinal is a member of itself by [F2]. [step 1.1, F2]

2.2 Membership restricted to $A$ is transitive as a relation: the only pairs of members of $A$ linked by membership are $0\in1$, $1\in\omega$ and $0\in\omega$ by step 1.1, so the only two-step chain is $0\in1\in\omega$, and it is completed by $0\in\omega$. [step 1.1]

2.3 Membership restricted to $A$ is trichotomous: any two distinct members of $A$ are ordinals by step 1.1, so exactly one of $\xi\in\eta$, $\xi=\eta$, $\eta\in\xi$ holds by [F3]. [step 1.1, F3]

2.4 Every nonempty subset of $A$ has an $\in$-least element: subsets of $A$ are sets of ordinals by step 1.1, so the least-element clause of [F3] applies. [step 1.1, F3]

2.5 The set $A$ is not transitive: $2\in\omega$ and $\omega\in A$ by step 1.1, but $2\notin A$, because $2\ne0$ ($2=\{0,1\}$ has members while $0=\varnothing$ has none), $2\ne1$ ($1=\{0\}$ but $1\in2$, so $1\ne2$ since no ordinal is a member of itself by [F2]), and $2\ne\omega$ by step 1.1. [step 1.1, F2, F5]

3.1 Steps 2.1 to 2.4 exhibit membership restricted to $A$ as a strict well-order in the sense of [F1] and [F7]: irreflexive, transitive as a relation, trichotomous, with a least element in every nonempty subset. Step 2.5 shows that the set $A$ is not transitive. By [F1] an ordinal must satisfy both clauses, so $A$ is not an ordinal even though it is a set of ordinals; the refuted claim is false, and the well-ordering clause alone does not suffice; step 1.2 proves the converse independence as well. No choice principle is used. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.2, F1, F7] ∎
