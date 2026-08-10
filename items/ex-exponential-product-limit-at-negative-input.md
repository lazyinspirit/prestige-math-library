---
id: ex-exponential-product-limit-at-negative-input
kind: example
title: "The log-free product limit $(1-2/n)^n\\to\\exp(-2)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-exponential-product-limit, def-real-exponential-function-and-e, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, def-integer-power, lem-limit-of-tail]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-10
    scope: published-audit-targeted
    context_sha256: 1b09d929df31280d6a9428c9a6b6dc8c4f76f94460fdf974b3fa9ec2658c62d5
    item_sha256: ef8f8386df40064bb605a193211a9cee01ed0acabdcb3e3007c3e75b1c962a80
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Example

Define a sequence $(a_n)_{n\in\mathbb N}$ by
$$a_0:=0,\qquad a_n:=\left(1-\frac2{\iota(n)}\right)^n\quad(n\ge1).$$
Then $a_n\longrightarrow e^{-2}$. The separate value at $n=0$ avoids division
by $\iota(0)=0$; the finitely many remaining initial indices with
nonpositive base do not affect the limit.

## Facts & Assumptions

**Given:** The sequence $(a_n)$ defined above.

[L1] The product-limit theorem holds for every real input once $n>|x|$ ([[thm-exponential-product-limit]]).

[L2] Since $e=\exp(1)$, the addition and reciprocal formulas and the definition of negative integer powers give $\exp(-2)=1/\exp(2)=1/(\exp(1)\exp(1))=1/e^2=e^{-2}>0$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[def-integer-power]]).

[L3] A sequence and any one of its tails have the same limit ([[lem-limit-of-tail]]).

## Verification

**Proof technique:** direct.

1.1 For every $n>2$, the base is positive and $a_n=(1-2/\iota(n))^n$, so [L1] applies at $x=-2$ and gives $a_n\to\exp(-2)$ on that tail.  [L1]

2.1 By [L3], the whole sequence has the same limit as the tail in step 1.1, and [L2] identifies that limit as $e^{-2}>0$.  [step 1.1, L2, L3] ∎
