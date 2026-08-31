---
id: cor-nerode-classes-give-the-canonical-minimal-dfa
kind: corollary
title: "Nerode classes form the canonical minimal DFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-myhill-nerode-characterization, lem-dfa-states-refine-nerode-classes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Statement

If $L$ is regular, then the DFA whose states are the Nerode classes of $L$ is a
minimal DFA for $L$. Its state set and transition structure depend only on $L$,
so it is canonical.

## Facts & Assumptions

**Given:** A regular language $L\subseteq\Sigma^*$.

[L1] By [[thm-myhill-nerode-characterization]], finite-index Nerode classes build a DFA recognizing $L$.

[L2] By [[lem-dfa-states-refine-nerode-classes]], every DFA recognizing $L$ has distinct reachable states for distinct Nerode classes.

## Proof

**Proof technique:** direct.

1.1 Because $L$ is regular, [L1] provides a DFA $D_L$ whose states are exactly the Nerode classes of $L$ and which recognizes $L$. [L1, given]

1.2 Let $D$ be any DFA recognizing $L$. Every Nerode class contains some word $u$, and the state reached by $D$ on $u$ is reachable. By [L2], two distinct Nerode classes cannot reach the same state of $D$, so $D$ has at least as many reachable states as $D_L$ has states. [L2, given]

2.1 Step 1.2 shows that no DFA for $L$ can use fewer reachable states than $D_L$, so $D_L$ is minimal. It is canonical because its states are defined directly from the language $L$ rather than from an auxiliary machine. [step 1.1, step 1.2] ∎
