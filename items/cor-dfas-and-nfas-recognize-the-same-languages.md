---
id: cor-dfas-and-nfas-recognize-the-same-languages
kind: corollary
title: "DFAs and NFAs recognize the same languages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-every-dfa-is-an-nfa, thm-subset-construction-preserves-language, def-regular-language-by-dfa-recognition]
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Statement

Let $\Sigma$ be an alphabet and let $L\subseteq\Sigma^*$.

Then $L$ is recognized by some NFA over $\Sigma$ if and only if $L$ is regular.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$.

[L1] By [[def-regular-language-by-dfa-recognition]], $L$ is regular exactly when some DFA over $\Sigma$ recognizes $L$.

[L2] By [[prop-every-dfa-is-an-nfa]], every DFA language is also an NFA language.

[L3] By [[thm-subset-construction-preserves-language]], every NFA language is also a DFA language.

## Proof

**Proof technique:** direct.

1.1 If $L$ is regular, then [L1] gives a DFA recognizing $L$, and [L2] turns that DFA into an NFA recognizing the same language. [L1, L2, given]

1.2 If some NFA recognizes $L$, then [L3] gives a DFA recognizing the same language, and [L1] therefore shows that $L$ is regular. [L1, L3, given]

2.1 Steps 1.1 and 1.2 prove that $L$ is recognized by an NFA if and only if $L$ is regular. [step 1.1, step 1.2] ∎
