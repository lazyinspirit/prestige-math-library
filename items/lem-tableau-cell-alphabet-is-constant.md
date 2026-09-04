---
id: lem-tableau-cell-alphabet-is-constant
kind: lemma
title: "For a fixed machine, each tableau cell ranges over a constant-size extended alphabet"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-computation-tableau]
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

Fix a nondeterministic Turing machine $N$ with state set $Q$ and tape alphabet
$\Gamma$. Then every cell of a bounded computation tableau for $N$ ranges over
the constant-size set
$$ \Delta_N:=\Gamma\cup(Q\times\Gamma). $$

## Facts & Assumptions

**Given:** A fixed machine $N$ with state set $Q$ and tape alphabet $\Gamma$.

[L1] In a bounded computation tableau, each row is a configuration and each row has exactly one state-tagged tape symbol marking the head position, by [[def-bounded-computation-tableau]].

## Proof

**Proof technique:** direct.

1.1 A tableau cell either lies away from the head, in which case it stores only a tape symbol from $\Gamma$, or it is the unique scanned cell of that row, in which case it must record both the scanned tape symbol and the current state, hence an element of $Q\times\Gamma$. By [L1], these are the only possibilities. [L1, given]

2.1 Therefore every cell value lies in $\Delta_N=\Gamma\cup(Q\times\Gamma)$. Because the machine $N$ is fixed before any input is considered, both $Q$ and $\Gamma$ are fixed finite sets, so $|\Delta_N|=|\Gamma|+|Q||\Gamma|$ is a constant independent of the input length. [step 1.1] ∎

