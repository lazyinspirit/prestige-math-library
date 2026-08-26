---
id: ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set
kind: example
title: "The map $x \\mapsto x+c(x)$ carries the Cantor set onto a compact set of Lebesgue measure $1$ inside $[0,2]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two,
       lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one,
       thm-cantor-function-properties]
aliases: []
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Example

Let $\psi(x)=x+c(x)$. The gap $(1/3,2/3)$ of the Cantor set is sent to
$(5/6,7/6)$, because $c$ is constant there with value $1/2$, while
$\psi(0)=0$ and $\psi(1)=2$. The A-page lemmas show that $\psi$ is a
homeomorphism from $[0,1]$ onto $[0,2]$ and that $\psi[C]$ is a compact set of
Lebesgue measure $1$.

## Facts & Assumptions

**Given:** The Cantor function $c$ and the map $\psi(x)=x+c(x)$.

[L1] $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$ ([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]]).

[L2] The set $\psi[C]$ is compact and has Lebesgue measure $1$ ([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]]).

[L3] The Cantor function is constant on every removed gap, and on $(1/3,2/3)$ that constant value is $1/2$ ([[thm-cantor-function-properties]]).

## Verification

**Proof technique:** direct.

1.1 Step [L3] gives $\psi(x)=x+1/2$ for $x \in (1/3,2/3)$, so $\psi(1/3)=5/6$, $\psi(2/3)=7/6$, and $\psi[(1/3,2/3)]=(5/6,7/6)$. Also $\psi(0)=0$ and $\psi(1)=2$. [L1, L3, algebra]

2.1 These computations sit inside the global picture from [L1] and [L2]: the map is a homeomorphism of the whole interval, and the image of the Cantor set itself is the compact measure-one set obtained by removing the translated gaps. [L1, L2] ∎
