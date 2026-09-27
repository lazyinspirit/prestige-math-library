---
id: cor-dfas-and-nfas-recognize-the-same-languages
kind: corollary
title: "DFAs and NFAs recognize the same languages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-epsilon-nfa-word-transition, prop-deterministic-automata-are-special-nondeterministic-automata, thm-subset-construction-reachability-invariant, def-regular-language-by-dfa-recognition]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cor-dfas-and-nfas-recognize-the-same-languages). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $\Sigma$ be an alphabet and let $L\subseteq\Sigma^*$.

Then $L$ is recognized by some NFA over $\Sigma$ if and only if $L$ is regular.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$.

[L1] By [[def-regular-language-by-dfa-recognition]], $L$ is regular exactly when some DFA over $\Sigma$ recognizes $L$.

[L2] Every total DFA embeds as an epsilon-NFA with the same recognized language ([[prop-deterministic-automata-are-special-nondeterministic-automata]]).

[L3] The exact subset-construction invariant produces a total DFA recognizing the language of each epsilon-NFA ([[thm-subset-construction-reachability-invariant]]).

[L4] The NFA recognition convention is the finite epsilon-closure and word-transition construction ([[def-epsilon-nfa-word-transition]]).

## Proof

**Proof technique:** direct.

1.1 If $L$ is regular, then [L1] gives a DFA recognizing $L$, and [L2] turns that DFA into an epsilon-NFA recognizing the same language under [L4]. [L1, L2, L4, given]

1.2 If some NFA recognizes $L$, interpret it with [L4]. Then [L3] gives a total DFA recognizing the same language, and [L1] therefore shows that $L$ is regular. [L1, L3, L4, given]

2.1 Steps 1.1 and 1.2 prove that $L$ is recognized by an NFA if and only if $L$ is regular. [step 1.1, step 1.2] ∎
