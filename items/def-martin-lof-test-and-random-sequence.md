---
id: def-martin-lof-test-and-random-sequence
kind: definition
title: "Martin-Löf tests and random sequences"
status: published
origin: session
deps: [def-effectively-open-set-in-cantor-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Simpson, §8.2"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
---
## Definition
A sequence $(U_n)_{n\ge0}$ is **uniformly effectively open** when there is one
computably enumerable relation
$W\subseteq\mathbb N\times\{0,1\}^*$ such that
$$U_n=\bigcup_{(n,\sigma)\in W}[\sigma]$$
for every $n$. Thus a single algorithm, given no oracle, enumerates all pairs
$(n,\sigma)$ and thereby enumerates the cylinders at every level uniformly.

A **Martin-Löf test** is a uniformly effectively open sequence with
$\mu(U_n)\le2^{-n}$. A sequence $X\in2^\omega$ is Martin-Löf random when
$X\notin\bigcap_nU_n$ for every such test. Computable enumerability, cylinders,
and measure are as in [[def-effectively-open-set-in-cantor-space]].
