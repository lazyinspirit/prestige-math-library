---
id: lem-elementary-hnn-reductions-preserve-the-represented-element
kind: lemma
title: "Elementary HNN reductions preserve the represented element"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hnn-word-pin-and-britton-reduced-word]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

## Statement

In the associated-subgroup notation for an HNN extension, replacing a pin

$$tct^{-1}\qquad(c\in C_-)$$

by $\phi(c)$, or replacing a pin

$$t^{-1}dt\qquad(d\in C_+)$$

by $\phi^{-1}(d)$, does not change the represented element of the HNN
extension.

## Facts & Assumptions

**Given:** The associated-subgroup presentation of an HNN extension.

[L1] A pin is a subword $tct^{-1}$ with $c\in C_-$ or a subword $t^{-1}dt$ with $d\in C_+$, where the defining relation is $tct^{-1}=\phi(c)$. ([[def-hnn-word-pin-and-britton-reduced-word]])

## Proof

**Proof technique:** direct.

1.1 By [L1], every pin of the first kind is literally one side of a defining relator of the presentation, so replacing $tct^{-1}$ by $\phi(c)$ preserves the represented element. [L1, given]

2.1 If $d\in C_+$, write $d=\phi(c)$ with $c=\phi^{-1}(d)\in C_-$. Then step 1.1 applied to $tct^{-1}=\phi(c)=d$ gives $t^{-1}dt=c=\phi^{-1}(d)$ after multiplying by $t^{-1}$ on the left and $t$ on the right. So replacing a pin of the second kind by $\phi^{-1}(d)$ also preserves the represented element. [L1, step 1.1, algebra] ∎
