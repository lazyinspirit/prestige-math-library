---
id: prop-deterministic-cfls-are-unambiguous
kind: proposition
title: "Deterministic context-free languages are unambiguous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ambiguity-and-inherent-ambiguity, def-deterministic-pda, lem-dpdas-have-unique-computations, prop-pda-to-cfg-construction-preserves-unambiguity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
    - title: "Alfred V. Aho, COMS W3261 Lecture 8: Pushdown Automata"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L8-PDA.html"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation"
      url: "https://www.cis.upenn.edu/~cis2620/notes/tcbook-u-lang.pdf"
---

## Statement

Every deterministic context-free language has an unambiguous context-free
grammar.

## Facts & Assumptions

**Given:** A deterministic context-free language $L$.

[L1] By [[def-deterministic-pda]], some DPDA recognizes $L$.

[L2] By [[lem-dpdas-have-unique-computations]], computations of a DPDA on one marked input are linearly ordered by extension and have at most one maximal computation.

[L3] By [[prop-pda-to-cfg-construction-preserves-unambiguity]], a PDA with at most one accepting computation on each word yields an unambiguous fragment-variable grammar for the same language.

## Proof

**Proof technique:** direct.

1.1 Choose a DPDA $M$ recognizing $L$ by [L1]. [L1, given, choose]

2.1 Form an equivalent DPDA $\widehat M$ that records whether the endmarker has been consumed. Before $\dashv$ it simulates $M$ in a pre-endmarker copy of the state set; a transition consuming $\dashv$ enters the post-endmarker copy; and all subsequent $\varepsilon$-moves remain in that copy. Declare a post-endmarker copy accepting exactly when its underlying state lies in $F$, and delete every outgoing move from those accepting copies. This preserves determinism by [L1]: it only duplicates states and removes moves. [L1, step 1.1]

3.1 The machine $\widehat M$ recognizes the same language as $M$. Indeed, an accepting computation of $M$ has consumed the marked input and hence reaches a post-endmarker accepting copy in $\widehat M$; conversely, every accepting copy projects to an accepting configuration of $M$. Halting at the first such copy does not change whether that configuration is reachable. [L1, step 2.1]

3.2 Every accepting computation of $\widehat M$ is maximal because its accepting states have no outgoing moves. By [L2], there is therefore at most one accepting computation on each marked input. [L2, step 2.1]

4.1 Applying [L3] to $\widehat M$ yields an unambiguous context-free grammar generating its language, which is $L$ by step 3.1. Therefore every deterministic context-free language is unambiguous. [L3, step 3.1, step 3.2] ∎
