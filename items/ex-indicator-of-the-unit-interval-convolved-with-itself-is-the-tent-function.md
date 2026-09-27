---
id: ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function
kind: example
title: "$\\mathbf{1}_{[0,1]} * \\mathbf{1}_{[0,1]}$ is the tent function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Example

Let $f := \mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then

$$ (f*f)(x) = \int_{\mathbb{R}} \mathbf{1}_{[0,1]}(x-y)\mathbf{1}_{[0,1]}(y)\,dy $$

is the tent function

$$ (f*f)(x)= \begin{cases} 0,& x \le 0,\\ x,& 0 \le x \le 1,\\ 2-x,& 1 \le x \le 2,\\ 0,& x \ge 2. \end{cases} $$

## Facts & Assumptions

**Given:** The indicator $f=\mathbf{1}_{[0,1]}$.

## Verification

**Proof technique:** direct.

1.1 For fixed $x$, the integrand is $1$ exactly when $y \in [0,1] \cap [x-1,x]$ and zero otherwise. This bounded-support integrand is integrable for every $x$, and $(f*f)(x)$ is the length of that overlap interval. [given, algebra]

2.1 If $0 \le x \le 1$, the overlap is $[0,x]$, so $(f*f)(x)=x$. If [step 1.1, algebra]
$1 \le x \le 2$, the overlap is $[x-1,1]$, so $(f*f)(x)=2-x$. For $x \le 0$ or $x \ge 2$, there is no overlap, so $(f*f)(x)=0$. [step 1.1, algebra]

3.1 The explicit formula is positive precisely on $(0,2)$, so its support is $[0,2]=[0,1]+[0,1]$, as claimed by the displayed tent function. [step 2.1] ∎
