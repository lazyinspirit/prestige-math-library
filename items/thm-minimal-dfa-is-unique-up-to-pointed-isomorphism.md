---
id: thm-minimal-dfa-is-unique-up-to-pointed-isomorphism
kind: theorem
title: "Minimal DFAs are unique up to start-state-preserving isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-nerode-classes-give-the-canonical-minimal-dfa, def-reachable-dfa-state, lem-removing-unreachable-states-preserves-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

If two DFAs are minimal among the DFAs recognizing the same regular language
$L$, then there is an isomorphism between them that sends the start state of one
to the start state of the other.

## Facts & Assumptions

**Given:** Minimal DFAs $D_1$ and $D_2$ recognizing the same regular language $L$.

[L1] By [[cor-nerode-classes-give-the-canonical-minimal-dfa]], the Nerode-class DFA $D_L$ is a minimal DFA for $L$.

[L2] By [[def-reachable-dfa-state]], a state is reachable exactly when some input word leads to it from the start state.

[L3] By [[lem-removing-unreachable-states-preserves-language]], deleting unreachable states preserves the recognized language.

## Proof

**Proof technique:** direct.

1.1 A minimal DFA has no unreachable states. Indeed, if $D_i$ had an unreachable state, then [L3] would remove it without changing the language, contradicting minimality. [L3, given]

2.1 Let $D_L$ be the canonical Nerode-class DFA from [L1]. Because step 1.1 shows that every state of $D_i$ is reachable, for each state $q$ of $D_i$ we may choose a word $u$ with $\delta_i^*(q_{0,i},u)=q$, which is possible by [L2], and send $q$ to the Nerode class $[u]$. If two words $u,v$ reach the same state $q$, then every continuation is accepted or rejected identically from that state, so $u$ and $v$ determine the same Nerode class. Thus the map is well defined. For any Nerode class $[u]$, the state reached by $D_i$ on $u$ maps to $[u]$, so the map is surjective onto the state set of $D_L$. [L1, L2, step 1.1, construct]

3.1 Both $D_i$ and $D_L$ are minimal DFAs for $L$: $D_i$ by hypothesis and $D_L$ by [L1]. Therefore their finite state sets have the same cardinality. The surjection from step 2.1 between finite sets of equal size is therefore a bijection. [L1, step 2.1, given]

4.1 The bijection of steps 2.1 and 3.1 sends the start state to $[\varepsilon]$, and its definition via reaching words shows that it preserves letter transitions and accepting states. Hence each $D_i$ is pointed-isomorphic to $D_L$, so $D_1$ and $D_2$ are pointed-isomorphic to one another. [step 2.1, step 3.1] ∎
