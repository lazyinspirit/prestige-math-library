---
id: prop-pid-module-classification-agrees-with-finite-abelian-group-classification
kind: proposition
title: "The PID-module and finite-abelian-group classifications have the same canonical data"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, def-elementary-divisor-data-for-a-finite-abelian-group, def-invariant-factor-data-for-a-finite-abelian-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Example 4.2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 4"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

For a finite abelian group, the PID-module elementary divisors and invariant factors agree with the published group-theoretic data. In particular the two classifications attach the same prime-power multiset and the same divisibility chain, including the empty data for the trivial group.

## Facts & Assumptions

**Given:** The module-derived abelian classification of [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]] and the group-side definitions of [[def-elementary-divisor-data-for-a-finite-abelian-group]] and [[def-invariant-factor-data-for-a-finite-abelian-group]].

[L1] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order, with unique factor orders up to permutation ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L2] Every finite abelian group has a unique divisibility list of invariant factors, with the trivial group represented by the empty list ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

## Proof

**Proof technique:** direct.

1.1 A finite abelian group cannot contain a nonzero free summand $\mathbb Z^r$, so its module-theoretic free rank is $0$. [given]

2.1 The module elementary-divisor form and [L1] both express the group as cyclic groups of prime-power order. Their uniqueness clauses force the same prime powers with the same multiplicities, which is exactly agreement of the two elementary-divisor definitions. [step 1.1, L1, given]

3.1 Aligning those common prime powers produces the module invariant factors, while [L2] uniquely characterizes the group invariant-factor chain. The two chains therefore agree. Conversely either common list reconstructs the same cyclic direct sum, proving agreement in both directions. [step 2.1, L2] ∎
