---
id: ex-subset-construction-can-require-exponentially-many-states
kind: example
title: "A three-state NFA whose equivalent DFA needs four states"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-subset-construction-dfa, prop-subset-construction-can-require-exponentially-many-states]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Let $L\subseteq\{0,1\}^*$ be the language of words whose second symbol from the
end is $1$.

An NFA for $L$ has three states: a start state that loops on both symbols, a
state entered when the machine guesses that two symbols remain and the current
symbol is $1$, and an accepting state reached after one more symbol. The subset
construction on this NFA produces four reachable subsets.

## Facts & Assumptions

**Given:** The language of words over $\{0,1\}$ whose second symbol from the end is $1$.

[L1] By [[def-subset-construction-dfa]], the subset construction turns each reachable set of NFA states into a DFA state.

[L2] By [[prop-subset-construction-can-require-exponentially-many-states]], nondeterministic branching can force a deterministic simulation to keep track of several possibilities at once.

## Verification

**Proof technique:** direct.

1.1 The three NFA states represent "still guessing", "just guessed the penultimate 1", and "accepted after one more symbol". On a word such as $010$, the machine may stay in the guessing state for the first symbol and then branch correctly at the second symbol, where the symbol $1$ really is penultimate. [given]

2.1 The reachable subsets are the four nonempty sets $\{q_0\}$, $\{q_0,q_1\}$, $\{q_0,q_2\}$, and $\{q_0,q_1,q_2\}$. They have different future acceptance behavior: the two sets containing $q_2$ accept $\varepsilon$ while the other two do not; $\{q_0,q_1\}$ accepts the one-letter suffix $0$ while $\{q_0\}$ does not; and $\{q_0,q_1,q_2\}$ accepts $0$ while $\{q_0,q_2\}$ does not. Therefore [L1] makes them four distinct DFA states. [L1, step 1.1]

3.1 This concrete four-state DFA illustrates the general phenomenon from [L2]: subset states encode simultaneous NFA possibilities. [L2, step 2.1] ∎
