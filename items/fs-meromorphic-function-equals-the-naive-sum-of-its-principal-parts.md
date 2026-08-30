---
id: fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts
kind: false-statement
title: "FALSE: a meromorphic function always equals the naive sum of its principal parts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-mittag-leffler-theorem-on-the-plane]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Example 9.4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

**False claim:** A meromorphic function is always the pointwise sum of its
principal parts, with no convergence-forcing corrections.

## Facts & Assumptions

**Given:** The principal parts $p_n(z)=-n/(z-n)$ at the positive integers.

[L1] Mittag-Leffler on the plane needs correction terms to force convergence
([[thm-mittag-leffler-theorem-on-the-plane]]).

## Refutation

**Proof technique:** direct.

1.1 Fix any noninteger positive real $x$. Then $p_n(x)=-n/(x-n)=1+x/(n-x)\to1$ as $n\to\infty$. [given, algebra]

2.1 Therefore the naive series $\sum_{n\ge1}p_n(x)$ has terms that do not tend to $0$, so it diverges. This is exactly why the correction terms from [L1] are not optional in Mittag-Leffler's theorem. [step 1.1, L1, algebra] ∎