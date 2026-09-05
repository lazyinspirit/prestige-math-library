---
id: ex-the-zero-weight-singular-central-character
kind: example
title: "The zero-weight singular central character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions, cor-central-characters-are-dot-weyl-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
---

## Example

The weight $-\rho$ is fixed by the dot action of every Weyl-group element: for every $w\in W$,

$$w\cdot (-\rho)=-\rho.$$

Hence the central character of $-\rho$ has full Weyl-group stabilizer and is singular.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra with Weyl group $W$ and the weight $-\rho$.

## Verification

**Proof technique:** direct.

1.1 By definition of the dot action, $w\cdot (-\rho)=w((-\rho)+\rho)-\rho=w(0)-\rho=-\rho$ for every $w\in W$. [given, algebra]

2.1 Therefore the entire Weyl group stabilizes $-\rho$, and [[cor-central-characters-are-dot-weyl-orbits]] shows that its central character is singular with full Weyl-group stabilizer. [step 1.1] ∎
