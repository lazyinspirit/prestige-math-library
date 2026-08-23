---
id: ex-gabriels-horn-has-finite-volume
kind: example
title: 'Gabriel''s horn has finite improper volume $\pi$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, def-improper-integral-at-infinity, thm-improper-p-test-rational]
justified_by: []
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
    - title: "APEX Calculus II, §7.4, Example 216"
      url: "https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf"
pipeline_run: null
---

## Example

Gabriel's horn is obtained by revolving $y=1/x$ for $x\ge1$ about the $x$-axis. Its improper volume exists and equals $\pi$.

## Facts & Assumptions

**Given:** For $R>1$, the truncation obtained by revolving $f(x)=1/x$ on $[1,R]$.

[F1] A solid of revolution with profile $f$ has volume $\pi\int_a^bf(x)^2\,dx$ ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

[F2] For rational $p>1$, $\int_1^\infty x^{-p}\,dx=1/(p-1)$ ([[thm-improper-p-test-rational]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], the truncation has volume $\pi\int_1^Rx^{-2}\,dx=\pi(1-1/R)$. [F1]

2.1 By [F2] with $p=2$, the improper integral tends to $1$, so the truncated volumes tend to $\pi$. [step 1.1, F2]

3.1 Thus the horn has finite improper volume $\pi$. No assertion about its lateral surface area is used here. [step 2.1] ∎
