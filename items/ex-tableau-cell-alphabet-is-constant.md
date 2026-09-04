---
id: ex-tableau-cell-alphabet-is-constant
kind: example
title: "Counting the constant-size extended alphabet for a fixed nondeterministic machine"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-tableau-cell-alphabet-is-constant]
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

## Example

Take a machine with tape alphabet
$$ \Gamma=\{0,1,\sqcup\} $$
and state set
$$ Q=\{q_0,q_1,q_{\mathrm{acc}},q_{\mathrm{rej}}\}. $$

## Facts & Assumptions

**Given:** The fixed machine above.

[L1] For a fixed machine, the extended alphabet of one tableau cell is $\Gamma\cup(Q\times\Gamma)$, by [[lem-tableau-cell-alphabet-is-constant]].

## Verification

**Proof technique:** direct.

1.1 The bare tape-symbol options contribute the three symbols $0,1,\sqcup$. The state-tagged options contribute one pair $(q,a)$ for each $q\in Q$ and $a\in\Gamma$, so there are $4\cdot 3=12$ such tagged symbols. [given, algebra]

2.1 By [L1], the total extended alphabet size is therefore $3+12=15$, independent of the input length. This is the concrete constant hidden in the general lemma. [L1, step 1.1] ∎

