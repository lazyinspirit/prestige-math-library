---
id: ex-two-square-representation-of-seventy-three-by-extended-euclid
kind: example
title: "Extended Euclid gives $73=3^2+8^2$ from the root $27$ of $-1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.I.4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

Starting from $27^2\equiv-1\pmod{73}$, the Euclidean algorithm yields $73=3^2+8^2$ without searching the full collision square.

## Facts & Assumptions

**Given:** The congruence $27^2\equiv-1\pmod{73}$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

## Verification

**Proof technique:** direct.

1.1 The Euclidean divisions $73=2\cdot27+19$ and $27=19+8$ give $8=27-19=3\cdot27-73$. [algebra]

2.1 Hence $8\equiv3\cdot27\pmod{73}$, and the given square-root congruence gives $8^2\equiv9\cdot27^2\equiv-9\pmod{73}$; therefore $73\mid3^2+8^2$. [step 1.1, algebra]

3.1 Direct evaluation gives $3^2+8^2=9+64=73$, so $(3,8)$ is a two-square representation of $73$ by [F1]. [step 2.1, F1, algebra] ∎
