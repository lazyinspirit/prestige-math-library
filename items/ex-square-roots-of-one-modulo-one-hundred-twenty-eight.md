---
id: ex-square-roots-of-one-modulo-one-hundred-twenty-eight
kind: example
title: "The four square roots of one modulo $128$ are $1,63,65,127$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-unit-group-modulo-two-power-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Example C.IV.9"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The solutions of $x^2\equiv1\pmod{128}$ are

$$x\equiv1,63,65,127\pmod{128}.$$

## Facts & Assumptions

**Given:** The modulus $128=2^7$.

[L1] Every unit modulo $2^7$ has a unique form $(-1)^\varepsilon5^j$ with $\varepsilon\in\{0,1\}$ and $j$ modulo $32$ ([[thm-unit-group-modulo-two-power-structure]]).

## Verification

**Proof technique:** direct.

1.1 Any solution of $x^2=1$ is a unit, with inverse $x$. It therefore has the unique form in [L1]. Squaring that form gives $5^{2j}$, which is $1$ exactly when $32\mid2j$, equivalently $j\equiv0$ or $16\pmod{32}$. [L1, algebra]

1.2 Repeated squaring gives $5^{16}\equiv65\pmod{128}$. [algebra]

2.1 Combining the two values of $j$ from step 1.1 with the two signs gives $1,-1,65,-65$, namely $1,127,65,63$ modulo $128$; uniqueness in [L1] shows there are no others. [step 1.1, step 1.2, L1] ∎
