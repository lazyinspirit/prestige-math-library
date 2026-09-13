---
id: fs-ccc-means-countably-closed
kind: false-statement
title: Every ccc forcing is countably closed
status: draft
origin: pipeline
deps: [thm-cohen-forcing-closure-and-chain-condition]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Cohen forcing", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## False statement

Every ccc forcing is countably closed ($\sigma$-closed).

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-cohen-forcing-closure-and-chain-condition]] proves that $\operatorname{Add}(\omega,1)$ is ccc.

## Counterexample

1.1 Let $P=\operatorname{Add}(\omega,1)$. It is countable, hence ccc, as also recorded in F1. Define $p_n=\{((0,k),0):k<n\}$. Then $p_{n+1}\le p_n$, but a common lower bound would contain $\bigcup_np_n$, an infinite function, and so would not be a condition. Therefore $P$ is not countably closed. [F1]

2.1 The explicit descending chain already refutes the claim without appealing to a B-page example. Under F1's strict $<\kappa$ convention, its assertion that this forcing is $\omega$-closed concerns only finite descending sequences and is not the advertised countable closure. [F1, step 1.1] ∎
