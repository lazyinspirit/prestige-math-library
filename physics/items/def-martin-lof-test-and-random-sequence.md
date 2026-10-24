---
id: def-martin-lof-test-and-random-sequence
kind: definition
title: "Martin-Löf tests and random sequences"
status: published
origin: session
deps: [def-effectively-open-set-in-cantor-space, lem-fair-coin-open-content-is-countably-subadditive]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simpson, §8.2"
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
A sequence $(U_n)_{n\ge0}$ is **uniformly effectively open** when there is one
computably enumerable relation
$W\subseteq\mathbb N\times\{0,1\}^*$ such that
$$U_n=\bigcup_{(n,\sigma)\in W}[\sigma]$$
for every $n$. Thus a single algorithm, given no oracle, enumerates all pairs
$(n,\sigma)$ and thereby enumerates the cylinders at every level uniformly.
This notion uses only the cylinders of
[[def-effectively-open-set-in-cantor-space]] and requires no choice principle.

For open $U$ write $\mu(U):=\mu_o(U)$, the choice-free fair-coin open
content of [[lem-fair-coin-open-content-is-countably-subadditive]].

A **Martin-Löf test** is a uniformly effectively open sequence with
$\mu(U_n)\le2^{-n}$. A sequence $X\in2^\omega$ is Martin-Löf random when
$X\notin\bigcap_nU_n$ for every such test. Computable enumerability, cylinders,
and open content are as in [[def-effectively-open-set-in-cantor-space]]. Under
countable choice this is the usual Borel fair-coin measure of each $U_n$;
the test definition itself requires no choice principle.
