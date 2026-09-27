---
id: def-graph-nonisomorphism-protocol
kind: definition
title: "The graph-nonisomorphism interactive protocol"
status: published
origin: session
deps: [def-interactive-proof-transcript-round-and-strategy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, §8.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

For two graphs $G_0,G_1$ on the same labelled vertex set $\{1,\ldots,n\}$,
the verifier chooses $b$ uniformly from $\{0,1\}$. It independently samples
a permutation $\pi$ by the following bounded procedure. Put
$k=\lceil\log_2(n!)\rceil$ (with $k=0$ when $n! =1$). Up to four times,
draw exactly $k$ fresh fair bits as an integer $t\in[0,2^k)$; on the first
draw with $t<n!$, unrank $t$ in the factorial number system to obtain $\pi$.
If all four draws fail, use the identity permutation. It sends
$H=\pi(G_b)$, receives a bit $b'$ from the prover, and accepts iff $b'=b$.
Factoradic unranking, the factorial arithmetic, the four draws, and graph
relabeling take polynomial time and use at most $4k+1$ random bits.

Each draw succeeds with probability $n!/2^k>1/2$ (or $1$ when $k=0$).
Conditional on at least one success, $\pi$ is exactly uniform on the $n!$
permutations; the fallback has probability $\varepsilon<1/16$ (zero when
$n!$ is a power of two). This is a one-round instance of
[[def-interactive-proof-transcript-round-and-strategy]].
