---
id: ex-index-table-modulo-seventeen
kind: example
title: "An index table modulo $17$ turns multiplication into addition modulo $16$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-index-of-a-unit-relative-to-a-primitive-root, prop-index-calculus-modulo-n, def-primitive-root-modulo-n, cor-totient-at-one-and-at-a-prime]
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
    - title: "Peter Hackman, Elementary Number Theory, Example C.I.2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

Relative to the primitive root $3$ modulo $17$, the powers for exponents $0$ through $15$ are

$$1,3,9,10,13,5,15,11,16,14,8,7,4,12,2,6.$$

Thus, for example, $\operatorname{ind}_3(5)=5$, $\operatorname{ind}_3(7)=11$, and $\operatorname{ind}_3(6)=15$.

## Facts & Assumptions

**Given:** The displayed power table modulo $17$.

[L1] The index is the unique exponent class relative to a primitive root ([[def-index-of-a-unit-relative-to-a-primitive-root]]).

[L2] Products add indices and powers multiply indices modulo $\varphi(n)$ ([[prop-index-calculus-modulo-n]]).

[L3] A unit of order $\varphi(n)$ is a primitive root modulo $n$ ([[def-primitive-root-modulo-n]]).

[L4] $\varphi(17)=16$ ([[cor-totient-at-one-and-at-a-prime]]).

## Verification

**Proof technique:** direct.

1.1 Multiplying each displayed residue by $3$ modulo $17$ gives the next one and returns $6$ to $1$, so the table is correct and contains every nonzero class exactly once. In particular, $3$ has order $16=\varphi(17)$ and is primitive by [L3]. [L3, L4, algebra]

2.1 Since $5\cdot7\equiv1\pmod{17}$, [L2] gives $5+11\equiv0\pmod{16}$ for their indices; and $5^3\equiv6\pmod{17}$ gives $3\cdot5\equiv15\pmod{16}$. Both agree with the entries read using [L1]. [step 1.1, L1, L2, L4, algebra] ∎
