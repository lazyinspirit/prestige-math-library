---
id: fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input
kind: false-statement
title: "FALSE: Schur-Zassenhaus conjugacy needs no solvability or deeper input"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable, rem-schur-zassenhaus-conjugacy-in-full-generality]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

The conjugacy part of Schur-Zassenhaus needs neither a solvability hypothesis
nor any deeper finite-group input.

## Facts & Assumptions

**Given:** The local page boundary for Schur-Zassenhaus conjugacy.

[L1] This page proves complement conjugacy when the kernel or quotient is
solvable ([[thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable]]).

[L2] The stronger clean theorem is recorded separately as a source-cited
boundary item ([[rem-schur-zassenhaus-conjugacy-in-full-generality]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] shows that the local proof package carries an explicit solvability hypothesis. [given, L1]

2.1 Fact [L2] records that the full unrestricted conjugacy theorem sits beyond that local proof boundary. So the claim that no solvability qualification or deeper input is involved is false. [L1, L2, step 1.1] ∎
