---
id: def-effectively-open-set-in-cantor-space
kind: definition
title: "Effectively open sets in Cantor space"
status: published
origin: session
deps: [def-computable-and-partial-computable-function, def-computation-alphabet-and-word-convention, def-binary-sequence-cylinders-and-fair-coin-content, lem-fair-coin-open-content-is-countably-subadditive, def-countable-choice, thm-fair-coin-measure-on-binary-sequences]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simpson, §7.3"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Definition
Cantor space $2^\omega$ is the set of infinite binary sequences. For
$\sigma\in\{0,1\}^*$, let
$[\sigma]=\{X:\sigma\text{ is a prefix of }X\}$. Its choice-free fair-coin
content is $2^{-|\sigma|}$, as in
[[def-binary-sequence-cylinders-and-fair-coin-content]]. The choice-free
fair-coin open content $\mu_o$ of
[[lem-fair-coin-open-content-is-countably-subadditive]] assigns this same
value to $[\sigma]$ and is countably subadditive on open sets. Assuming
countable choice ([[def-countable-choice]]), $\mu_o$ agrees on open sets
with the unique Borel fair-coin probability of
[[thm-fair-coin-measure-on-binary-sequences]].

A set $W\subseteq\{0,1\}^*$ is **computably enumerable** when it is the range
of a partial computable enumeration procedure (equivalently, some algorithm
prints exactly its members, repetitions allowed), in the partial-computability
convention of [[def-computable-and-partial-computable-function]]. An
**effectively open** set is a union
$$\bigcup_{\sigma\in W}[\sigma]$$
for such a $W$. String conventions are those of
[[def-computation-alphabet-and-word-convention]].
The definition of effective openness and the open-content value
$\mu_o(U)$ require no choice principle.
