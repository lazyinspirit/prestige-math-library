---
id: ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q
kind: example
title: "The functional $f\\mapsto\\int_0^{1/2} f$ on $L^p[0,1]$ has norm $2^{-1/q}$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: "Represent the functional by the indicator of $[0,1/2]$, compute that indicator's $L^q$ norm from its measure, and invoke the norm formula for $\\Lambda_g$."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Proposition 7.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. On $[0,1]$ with
Lebesgue measure, define
$$\Lambda([f]):=\int_0^{1/2} f(x)\,dx.$$
Then $\Lambda$ is a bounded linear functional on $L^p[0,1]$ and
$$\|\Lambda\|=2^{-1/q},$$
with the endpoint convention $2^{-1/\infty}=1$ when $p=1$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and an exponent $1 \le p < \infty$ with conjugate exponent $q$.

[L1] The interval $[0,1/2]$ has Lebesgue measure $1/2$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L2] If $g \in L^q(\mu)$, then the pairing functional $\Lambda_g$ has norm $\|g\|_q$ in the ranges treated on the A page ([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

## Verification

**Proof technique:** Represent the functional by the indicator of $[0,1/2]$, compute that indicator's $L^q$ norm from its measure, and invoke the norm formula for $\Lambda_g$.

1.1 Let $g:=\mathbf 1_{[0,1/2]}$. [given, construct] Then $$\Lambda([f])=\int_0^1 f(x)g(x)\,dx=\Lambda_g([f]),$$ so $\Lambda$ is exactly the pairing functional associated to $g$. [given, construct]

1.2 By [L1], if $q<\infty$ then $$\|g\|_q^q=\int_0^1 |g|^q\,dx=\int_0^{1/2}1\,dx=\frac12,$$ so $$\|g\|_q=2^{-1/q}.$$ [L1, given]

1.3 If $q=\infty$, then $|g| \le 1$ everywhere and $g=1$ on a set of positive measure, so $\|g\|_\infty=1=2^{-1/\infty}$. [L1, given]

2.1 Applying [L2] to step 1.1 and steps 1.2-1.3 gives $$\|\Lambda\|=\|\Lambda_g\|=\|g\|_q=2^{-1/q}.$$ [L2, step 1.1, step 1.2, step 1.3] ∎
