---
id: fs-hnn-normal-form-is-canonical-without-transversals
kind: false-statement
title: "FALSE: HNN normal form is canonical without choosing transversals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-of-transversals-for-hnn-normal-forms, thm-hnn-normal-form-theorem]
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

The HNN normal form of an element is canonical even before any transversal
choice is made.

## Facts & Assumptions

**Given:** An HNN extension with chosen associated subgroup $2\mathbb Z\le\mathbb Z$ and identity isomorphism.

[L1] HNN normal form is defined relative to explicit transversal data. ([[def-choice-of-transversals-for-hnn-normal-forms]])

[L2] Uniqueness holds only after those transversals are fixed. ([[thm-hnn-normal-form-theorem]])

## Refutation

**Proof technique:** direct.

1.1 Let $A=\langle a\rangle\cong\mathbb Z$, let $C_-=C_+=\langle a^2\rangle$, and let $\phi=\operatorname{id}$. With transversal $S=\{e,a\}$, the element $ta$ is already in normal form. With transversal $S'=\{e,a^{-1}\}$ for the same odd coset, write $a=a^2a^{-1}$ and use the relation $ta^2=a^2t$ to obtain the different normal form $a^2ta^{-1}$. [L1, given, algebra]

2.1 Both written words represent the same group element, but they are distinct as normal forms until the transversal choice is fixed. So the uniqueness clause of [L2] is relative, not canonical without data, and the statement is false. [L1, L2, step 1.1, algebra] ∎
