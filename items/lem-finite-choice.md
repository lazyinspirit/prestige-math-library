---
id: lem-finite-choice
kind: lemma
title: "Every finite family of nonempty sets has a choice function"
status: draft
origin: session
deps: [def-choice-function, thm-induction-principle, def-axiom-of-choice]
justified_by: []
forward_refs: [ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $\mathcal{F}$ be a family of exactly $n$ nonempty
sets. Then $\mathcal{F}$ has a choice function ([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

## Facts & Assumptions

**Given:** A natural number $n$ and a family $\mathcal{F}$ with exactly $n$ members, each nonempty.

[A1] Every member of $\mathcal{F}$ is nonempty.

[L1] Induction on $\mathbb{N}$: if a property holds at $0$ and passes from $n$ to $n + 1$, it holds for every natural number ([[thm-induction-principle]]).

[L2] A choice function for $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

## Proof

**Proof technique:** induction.

1.1 Induct on $n$, the number of members of the family. [L1, base]

1.2 For $n = 0$ the family is empty, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function. [L2, base]

1.3 Induction hypothesis: every family of exactly $n$ nonempty sets has a choice function. [ih]

1.4 Let $\mathcal{F}$ have exactly $n + 1$ members, each nonempty, and fix one member $S \in \mathcal{F}$. [choose]

2.1 The family $\mathcal{G} = \mathcal{F} \setminus \{S\}$ has exactly $n$ members, each nonempty. [step 1.4, A1]

2.2 Since $S$ is nonempty, there exists an element of $S$; fix one and call it $a$. [step 1.4, A1, choose]

3.1 By the induction hypothesis there is a choice function $h$ for $\mathcal{G}$. [step 1.3, step 2.1]

4.1 Define $g = h \cup \{(S, a)\}$, a function with domain $\mathcal{G} \cup \{S\} = \mathcal{F}$, since $S \notin \mathcal{G}$. [step 3.1, step 2.2, construct]

5.1 For $T \in \mathcal{G}$ we have $g(T) = h(T) \in T$, and $g(S) = a \in S$. [step 4.1, step 3.1, step 2.2]

6.1 So $g$ is a choice function for $\mathcal{F}$, which completes the induction step. [step 5.1, L2]

7.1 By induction, every family of finitely many nonempty sets has a choice function. [step 1.2, step 6.1, discharge-induction] ∎

## Remarks

- **Where the Axiom of Choice would be needed, and why it is not needed here.**
  Step 2.2 picks one element out of one nonempty set. That is a single
  existential instantiation, licensed by first-order logic alone. The induction
  performs $n$ such instantiations, one per stage, and $n$ is a natural number, so
  the process terminates. What ZF cannot do is perform *infinitely many*
  instantiations at once, and that is exactly the gap
  [[def-axiom-of-choice]] fills.
- The lemma is not a special case of AC that happens to be provable; it is the
  precise boundary of what is free. [[ex-russells-socks]] makes the boundary
  concrete, and [[ex-finite-choice-by-induction]] works this induction out on a
  small family.
