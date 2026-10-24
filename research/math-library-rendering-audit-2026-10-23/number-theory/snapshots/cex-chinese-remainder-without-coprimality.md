---
id: cex-chinese-remainder-without-coprimality
kind: counterexample
title: "The system $x\\equiv1\\pmod2$, $x\\equiv2\\pmod4$ has no solution, so coprimality in the Chinese remainder theorem cannot be dropped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chinese-remainder-theorem, def-congruence-modulo-an-integer, lem-chinese-remainder-two-moduli]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "MIT, Chinese Remainder Theorem notes"
      url: "https://math.mit.edu/~roed/courses/magic/CRT.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** prescribed residue classes always determine a simultaneous
class even when the positive moduli are not coprime.

The system $x\equiv1\pmod2$, $x\equiv2\pmod4$ is a counterexample.

## Facts & Assumptions

**Given:** The two displayed congruences with moduli $2$ and $4$.

[L1] Congruence $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L2] For positive moduli $m,n$, simultaneous residues $a,b$ are compatible exactly when $\gcd(m,n)\mid(a-b)$; pairwise coprimality makes this automatic ([[lem-chinese-remainder-two-moduli]], [[thm-chinese-remainder-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 If $x\equiv1\pmod2$, then $x-1$ is even and $x$ is odd. If $x\equiv2\pmod4$, then $x-2$ is divisible by $4$ and $x$ is even. No integer is both odd and even, so the system has no solution. [L1]

1.2 Equivalently, $\gcd(2,4)=2$ does not divide $1-2=-1$, so the compatibility criterion in [L2] fails. [L2]

2.1 The claim without coprimality admits the unsolvable system in step 1.1 and is therefore false. [step 1.1, step 1.2] ∎
