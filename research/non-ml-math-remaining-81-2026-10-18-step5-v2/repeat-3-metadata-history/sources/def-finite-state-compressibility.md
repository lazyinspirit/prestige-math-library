---
id: def-finite-state-compressibility
kind: definition
title: "Finite-state compressibility of an individual sequence"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Stanford EE376C, Lempel-Ziv Compression lecture notes"
      url: "https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf"
      locator: "§1.4.1, within the recorded full-text §§1.3–1.5, PDF pp.4–9: information-lossless finite-state encoders and the one-sided finite-state comparison. The exact infimum/limsup convention is stated in this item."
---
## Definition

Consider a finite alphabet $\mathcal A$ and a one-sided infinite sequence $x=x_0x_1\cdots$.

An information-lossless $s$-state encoder consists of a finite state set $S$, an initial state, an update map $g:S\times\mathcal A\to S$, and an output map $f:S\times\mathcal A\to\{0,1\}^*$. It is information-lossless when for each initial state the map from finite input words to (concatenated output, final state) is injective.

Let $L_E(x_0^{n-1})$ be its concatenated output length and set $\rho_s(x)=\inf_E\limsup_nL_E(x_0^{n-1})/n$, over information-lossless encoders with at most $s$ states. Define finite-state compressibility $\rho_{\rm FS}(x)=\inf_{s\ge1}\rho_s(x)$. The infima are nonincreasing in $s$ and bounded below by zero, so the limit in the equivalent notation $\lim_{s\to\infty}\rho_s(x)$ exists.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ and a one-sided infinite sequence $x=x_0x_1\cdots$.

[F1] [[def-finite-alphabet-stationary-source]]: the source alphabet is a finite nonempty set.

## Proof

**Given:** The finite-state coding convention in the statement.

1.1 An information-lossless $s$-state encoder consists of a finite state set $S$, an initial state, an update map $g:S\times\mathcal A\to S$, and an output map $f:S\times\mathcal A\to\{0,1\}^*$. It is information-lossless when for each initial state the map from finite input words to (concatenated output, final state) is injective. [F1, given, algebra]

2.1 The encoder class is nonempty: let $t=\max(1,\lceil\log_2|\mathcal A|\rceil)$ and choose distinct $t$-bit labels for the finitely many source symbols. Use one state with the identity update and emit each symbol's label. The output splits into fixed-width labels and therefore uniquely determines every finite input word. Let $L_E(x_0^{n-1})$ be an encoder's concatenated output length and set $\rho_s(x)=\inf_E\limsup_nL_E(x_0^{n-1})/n$, over information-lossless encoders with at most $s$ states. Define finite-state compressibility $\rho_{\rm FS}(x)=\inf_{s\ge1}\rho_s(x)$. The infima are nonincreasing in $s$ and bounded below by zero, so the limit in the equivalent notation $\lim_{s\to\infty}\rho_s(x)$ exists. [given, step 1.1, construct, algebra] ∎
