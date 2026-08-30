---
id: fs-an-nfa-accepts-only-if-every-branch-accepts
kind: false-statement
title: "FALSE: an NFA accepts only if every branch accepts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

**False claim:** an NFA accepts a word only when every computation branch on
that word accepts.

## Facts & Assumptions

**Given:** The NFA over $\Sigma=\{a,b\}$ with states $q_0,q_1,q_2,q_3$, start
state $q_0$, accepting state $q_3$, loops $q_0\xrightarrow{a}q_0$ and
$q_0\xrightarrow{b}q_0$, and extra transitions
$q_0\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$.

[A1] The statement refuted is: an NFA accepts a word only when every
computation branch accepts.

[L1] By [[def-nfa-acceptance-and-recognized-language]], an NFA accepts a word
exactly when the set of states reachable after reading the word contains an
accepting state.

## Refutation

**Proof technique:** direct.

1.1 On input $abb$, one computation branch takes the transition $q_0\xrightarrow{a}q_1$ at the first letter and then follows the two $b$-transitions to $q_3$, so this branch accepts. Another branch stays on the loop at the first letter, reaches $q_0$ again after reading the first $b$, and then has no way to complete the suffix $bb$ to $q_3$, so that branch rejects. [given]

2.1 Step 1.1 shows that after reading $abb$ an accepting state is reachable, even though not every branch accepts. Therefore [L1] says the machine accepts $abb$. [L1, step 1.1]

3.1 This contradicts [A1]. NFA acceptance is existential over branches, not universal. [A1, step 2.1] ∎
