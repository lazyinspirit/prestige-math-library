---
id: fs-any-positive-zero-of-sine-characterizes-pi
kind: false-statement
title: "False: any positive zero of sine characterizes pi"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pi-zero-and-period-characterizations, thm-sine-cosine-zero-sets-and-fundamental-period, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.2"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

If $p>0$ and $\sin p=0$, then $p=\pi$.

## Facts & Assumptions

**Given:** The proposed implication for positive sine zeros.

[L1] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

[L2] The least positive zero of sine is $\pi$ ([[thm-pi-zero-and-period-characterizations]]).

[L3] For every real $x$, $\sin x=0$ if and only if $x=m\pi$ for some integer $m$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Refutation

**Proof technique:** direct.

1.1 Put $p=2\pi$. By [L1], $p>0$, and by [L3], $\sin p=0$. [L1, L3, algebra]

1.2 Yet $2\pi\ne\pi$ because $\pi>0$. [L1, algebra]

2.1 Thus a positive zero need not equal $\pi$. The correct characterization in [L2] requires the least positive zero. [step 1.1, step 1.2, L2] ∎
