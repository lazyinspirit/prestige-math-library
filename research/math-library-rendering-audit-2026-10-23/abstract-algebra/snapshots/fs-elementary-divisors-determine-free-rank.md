---
id: fs-elementary-divisors-determine-free-rank
kind: false-statement
title: "FALSE: elementary divisors determine the free rank"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-free-rank-of-a-finitely-generated-pid-module, def-invariant-factors-and-elementary-divisors-of-a-pid-module, thm-nonzero-commutative-rings-have-invariant-basis-number]
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
    - title: "K. Conrad, Modules over a PID, structure-theorem rank data"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, structure theorem"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

**False claim.** The elementary divisors of a finitely generated module over a PID determine its free rank.

## Facts & Assumptions

**Given:** Free rank ([[def-free-rank-of-a-finitely-generated-pid-module]]) and the convention that elementary divisors record only torsion cyclic summands ([[def-invariant-factors-and-elementary-divisors-of-a-pid-module]]).

[L1] Every nonzero commutative unital ring has invariant basis number for finite bases: if $R^m\cong R^n$, then $m=n$ ([[thm-nonzero-commutative-rings-have-invariant-basis-number]]).

## Refutation

**Proof technique:** direct.

1.1 Let $R$ be any PID. The free modules $R$ and $R^2$ are torsion-free, so both have empty elementary-divisor lists. The zero module $R^0$ has the same empty torsion data as well. [given, algebra]

2.1 By [L1], their free ranks are respectively $1$, $2$, and $0$ and are genuinely distinct. Thus identical elementary-divisor data does not determine the free rank. [step 1.1, L1] ∎
