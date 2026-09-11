---
id: "ex-cohen-name-valuation-and-dense-set-meeting"
kind: "example"
title: "Cohen-name valuation and dense-set meeting"
deps: ["lem-names-for-pairs-functions-and-ordinals", "def-dense-open-sets-and-model-generic-filters"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila end of Chapter 1 p5 and Definition 2.3 p6; Marks Cohen example
        p99
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF let M be a transitive ZF model, $P=2^{<\omega}\in M$ ordered by extension (longer sequences are stronger), and G an M-generic filter. Then $c=\bigcup G$ is a total binary sequence distinct from every binary sequence in M. Its graph is the valuation of the name

$$\tau=\{\langle\operatorname{pairName}(\check n,\check i),s\rangle:s\in P,\ n<\operatorname{length}(s),\ i=s(n)\}.$$

The graph name belongs to M.

## Facts & Assumptions

**Given:** ZF; M-generic Cohen filter. Explicit length extensions make the union total, bit flips separate it from each ground real, and valuation of the displayed ground-model pair-name set gives its exact graph.

[F1] [[lem-names-for-pairs-functions-and-ordinals]]: The checked pair name evaluates to the actual ordered pair and the construction is internal in M.

[F2] [[def-dense-open-sets-and-model-generic-filters]]: Genericity meets each ground dense set, and filters are internally directed.

## Verification

1.1 Two conditions in G have a common extension and hence agree on the intersection of their domains. Thus their union c is a binary partial function. For each n, $D_n=\{s:\operatorname{length}(s)>n\}$ is a dense set in M: extend any short sequence with zeros to length n+1. Genericity supplies a condition of G of length above n, so the domain of c is all omega. [F2]

2.1 For each binary sequence $r\in M$, the set $E_r=\{s:\exists n<\operatorname{length}(s)\ s(n)\ne r(n)\}$ belongs to M and is dense. Given s, if it already disagrees it is in E_r; otherwise append the bit $1-r(\operatorname{length}(s))$. A condition of $G\cap E_r$ witnesses $c\ne r$. [F2, step 1.1]

3.1 Internal Replacement and Union over the set of finite sequences and their finitely many coordinates form tau in M. Every entry has a name as its first coordinate, so tau is a name. F1 makes its value exactly $\{\langle n,s(n)\rangle:s\in G,\ n<\operatorname{length}(s)\}$, the graph of c by step 1.1. Each graph coordinate is included by a condition covering n, and any selected entry agrees with c. [F1, step 1.1, step 2.1] ∎
