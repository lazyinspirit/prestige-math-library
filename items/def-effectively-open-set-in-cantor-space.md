---
id: def-effectively-open-set-in-cantor-space
kind: definition
title: "Effectively open sets in Cantor space"
status: draft
origin: session
deps: [def-computable-and-partial-computable-function, def-computation-alphabet-and-word-convention]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Simpson, §7.3"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
---
## Definition
Cantor space $2^\omega$ is the set of infinite binary sequences. For
$\sigma\in\{0,1\}^*$, let
$[\sigma]=\{X:\sigma\text{ is a prefix of }X\}$; this cylinder has fair-coin
measure $2^{-|\sigma|}$.

A set $W\subseteq\{0,1\}^*$ is **computably enumerable** when it is the range
of a partial computable enumeration procedure (equivalently, some algorithm
prints exactly its members, repetitions allowed), in the partial-computability
convention of [[def-computable-and-partial-computable-function]]. An
**effectively open** set is a union
$$\bigcup_{\sigma\in W}[\sigma]$$
for such a $W$. String conventions are those of
[[def-computation-alphabet-and-word-convention]].
