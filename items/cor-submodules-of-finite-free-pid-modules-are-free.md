---
id: cor-submodules-of-finite-free-pid-modules-are-free
kind: corollary
title: "A submodule of a free module of finite rank over a PID is free of no larger rank"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simultaneous-basis-theorem-for-pid-submodules, thm-nonzero-commutative-rings-have-invariant-basis-number]
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
    - title: "K. Conrad, Modules over a PID, Theorem 2.2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Theorem 1.0.1"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

If $M$ is free of finite rank $n$ over a PID and $N\le M$, then $N$ is free of a uniquely determined finite rank $r\le n$.

## Facts & Assumptions

**Given:** Invariant basis number for nonzero commutative rings ([[thm-nonzero-commutative-rings-have-invariant-basis-number]]).

[L1] There is a basis $a_1e_1,\ldots,a_re_r$ of the submodule with $r\le n$ ([[thm-simultaneous-basis-theorem-for-pid-submodules]]).

## Proof

**Proof technique:** direct.

1.1 The family in [L1] is an $R$-basis of $N$, so $N$ is free and has a basis of length $r\le n$. The zero submodule has the empty basis, and ambient rank zero forces $r=0$. [L1]

2.1 Invariant basis number makes the finite basis length unique, so $r$ is the rank of $N$. The endpoints $r=0$ and $r=n$, including $N=M$, are permitted. [step 1.1, given] ∎
