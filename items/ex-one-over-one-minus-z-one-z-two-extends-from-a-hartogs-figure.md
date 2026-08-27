---
id: ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure
kind: example
title: "The function 1 / (1 - z1 z2) extends holomorphically from a Hartogs figure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-hartogs-figure-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

The function

$$
f(z_1,z_2)=\frac{1}{1-z_1z_2}
$$

is holomorphic on the full bidisc $\{|z_1|<1,\ |z_2|<1\}$ and therefore, a
fortiori, on every Hartogs figure inside that bidisc.

## Facts & Assumptions

**Given:** The function $f(z_1,z_2)=1/(1-z_1z_2)$ on the unit bidisc.

[L1] Every holomorphic function on a Hartogs figure extends uniquely to the full
bidisc hull ([[thm-hartogs-figure-extension]]).

## Verification

**Proof technique:** direct.

1.1 On the unit bidisc one has $|z_1z_2|<1$, so $1-z_1z_2\ne0$. Hence the reciprocal $f(z_1,z_2)=1/(1-z_1z_2)$ is holomorphic there. [given, algebra]

2.1 Restricting $f$ to any Hartogs figure produces a concrete instance of [L1], and the extension theorem recovers the same global formula on the whole bidisc. [step 1.1, L1] ∎
