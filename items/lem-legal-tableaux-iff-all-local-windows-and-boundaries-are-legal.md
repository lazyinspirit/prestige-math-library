---
id: lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal
kind: lemma
title: "A tableau is legal exactly when the start row is correct and every local window is legal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bounded-computation-tableau, def-local-tableau-window]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Statement

A bounded tableau is the computation history of one branch exactly when:

- its first row is the correct start configuration, and
- every local $2\times 3$ window is legal.

## Facts & Assumptions

**Given:** A bounded tableau $T$ for a fixed machine $N$ and input $w$.

[L1] A bounded computation tableau is legal precisely when each row follows the previous one either by one legal transition or by repeating an already halting configuration, beginning at the start configuration, by [[def-bounded-computation-tableau]].

[L2] A local $2\times 3$ window is legal exactly when the padded adjacent rows agree with either one legal local update of the machine or a repeated halting row, by [[def-local-tableau-window]].

## Proof

**Proof technique:** direct.

1.1 If $T$ is an actual computation history, then its first row is the start configuration. Each pair of adjacent rows is either one legal transition or a repeated halting row, so every padded $2\times 3$ window is legal by [L2]. [L1, L2, given]

1.2 Conversely, assume the two bullet conditions in the statement hold. In particular, every local window is legal in the sense of [L2]. [L2, given]

2.1 Fix adjacent rows $r$ and $r+1$. If row $r$ is already halting, [L2] forces row $r+1$ to repeat it exactly. Otherwise row $r$ has a unique head neighborhood, and the overlapping legal windows force every cell outside that neighborhood to stay unchanged while the local neighborhood realizes exactly one allowed transition of $N$. So row $r+1$ is either the same halting configuration or the one-step successor of row $r$. [L2, step 1.2]

3.1 Because the first row is correct and every later row follows the previous one in one of the two ways allowed by step 2.1, the whole tableau is a valid branch computation history in the sense of [L1]. Hence [L1] gives the converse implication. [L1, step 1.2, step 2.1] ∎
