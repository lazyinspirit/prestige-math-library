---
id: fs-every-word-containing-a-stable-letter-is-nontrivial
kind: false-statement
title: "FALSE: every word containing a stable letter is nontrivial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hnn-word-pin-and-britton-reduced-word, thm-brittons-lemma]
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

Every HNN word that contains a stable letter represents a nonidentity element.

## Facts & Assumptions

**Given:** An HNN extension in associated-subgroup notation.

[L1] A pin is a subword $tct^{-1}$ with $c\in C_-$ or $t^{-1}dt$ with $d\in C_+$. ([[def-hnn-word-pin-and-britton-reduced-word]])

[L2] Britton's lemma applies only to words that are already Britton-reduced. ([[thm-brittons-lemma]])

## Refutation

**Proof technique:** direct.

1.1 For any $c\in C_-$, the word $tct^{-1}$ contains a stable letter and is a pin by [L1]. [L1, given]

2.1 By the defining relator it equals $\phi(c)\in A$, so it can even represent the identity when $c=e$. Thus [L2] does not justify the stated claim, and the statement is false. [L1, L2, step 1.1, algebra] ∎
