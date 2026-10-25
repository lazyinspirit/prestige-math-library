---
id: ex-extended-dfa-transition-respects-concatenation
kind: example
title: "Computing $\\delta^*(q,uv)$ as $\\delta^*(\\delta^*(q,u),v)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-extended-dfa-transition-respects-concatenation, def-dfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  audited: 2026-08-30
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

## Example

Consider the DFA over $\{a,b\}$ with states $q_0,q_1,q_2,q_3$, where:

- $q_0$ means "no nonempty suffix of the input is a prefix of `abb`",
- $q_1$ means "the current suffix is `a`",
- $q_2$ means "the current suffix is `ab`",
- $q_3$ means "the current suffix is `abb`".

Take $q_0$ as the start state and $F=\{q_3\}$ as the accepting set.

Its transitions are
$$ \delta(q_0,a)=q_1,\ \delta(q_0,b)=q_0,\ \delta(q_1,a)=q_1,\ \delta(q_1,b)=q_2, $$
$$ \delta(q_2,a)=q_1,\ \delta(q_2,b)=q_3,\ \delta(q_3,a)=q_1,\ \delta(q_3,b)=q_0. $$
Take $u=ab$ and $v=abb$.

Then
$$ \delta^*(q_0,uv)=\delta^*(q_0,ababb)=q_3=\delta^*(\delta^*(q_0,ab),abb). $$

## Facts & Assumptions

**Given:** The DFA above with start state $q_0$, accepting set $F=\{q_3\}$, and the words $u=ab$ and $v=abb$.

[L1] Extended transition respects concatenation: $\delta^*(p,uv)=\delta^*(\delta^*(p,u),v)$, by [[lem-extended-dfa-transition-respects-concatenation]].

[L2] Acceptance is determined by the final state reached after reading the whole word, by [[def-dfa-acceptance-and-recognized-language]].

## Verification

**Proof technique:** direct.

1.1 Compute directly that $\delta^*(q_0,ab)=q_2$, because $q_0\xrightarrow{a}q_1\xrightarrow{b}q_2$. [given]

1.2 Reading the whole concatenated word at once gives $q_0\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$, so $\delta^*(q_0,uv)=q_3$ as well. [given]

2.1 Continuing from $q_2$, we get $q_2\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$, so $\delta^*(q_2,abb)=q_3$. Therefore $\delta^*(\delta^*(q_0,u),v)=q_3$. [given, step 1.1]

3.1 The two calculations agree, exactly as [L1] predicts. In particular the word $ababb$ lands in the accepting state $q_3$, consistent with [L2]. [L1, L2, step 2.1, step 1.2] ∎
