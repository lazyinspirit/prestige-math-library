---
id: ex-britton-reduction-of-a-word-with-two-pins
kind: example
title: "Britton reduction of a word with two pins"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hnn-word-pin-and-britton-reduced-word, lem-elementary-hnn-reductions-preserve-the-represented-element, thm-brittons-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Example

In associated-subgroup notation, the word

$$w=tct^{-1}t^{-1}dt\qquad(c\in C_-,\ d\in C_+)$$

contains two pins and Britton-reduces to the base-group element
$\phi(c)\phi^{-1}(d)$.

## Facts & Assumptions

**Given:** An HNN extension in associated-subgroup notation.

[L1] The displayed subwords $tct^{-1}$ and $t^{-1}dt$ are pins. ([[def-hnn-word-pin-and-britton-reduced-word]])

[L2] Replacing either kind of pin by the corresponding subgroup element preserves the represented element. ([[lem-elementary-hnn-reductions-preserve-the-represented-element]])

[L3] Britton's lemma detects nontriviality only after all pins have been removed. ([[thm-brittons-lemma]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the first three letters of $w$ form a pin, so [L2] replaces them by $\phi(c)$ and gives the shorter word $\phi(c)t^{-1}dt$. [L1, L2, given]

2.1 The remaining stable-letter subword is the second kind of pin, so another application of [L2] gives $\phi(c)\phi^{-1}(d)\in A$. This is the Britton-reduced representative to which [L3] applies. [L2, L3, step 1.1, algebra] ∎
