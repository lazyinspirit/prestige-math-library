---
id: ex-finite-bad-place-test-for-a-ternary-form
kind: example
title: "Finite bad places for a ternary form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-ternary-isotropy-via-hilbert-symbol, thm-local-isotropy-at-almost-all-primes]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

For the ternary form

$$
q(X,Y,Z)=X^2+2Y^2-15Z^2,
$$

the only primes that can require an explicit local check are $2,3,5$.

## Facts & Assumptions

**Given:** The ternary Hilbert-symbol criterion and the almost-all-primes
isotropy theorem ([[cor-ternary-isotropy-via-hilbert-symbol]],
[[thm-local-isotropy-at-almost-all-primes]]).

## Verification

**Proof technique:** direct.

1.1 The diagonal coefficients of $q$ are $1,2,-15$, so the only primes dividing $2abc$ are $2,3,5$. The theorem [[thm-local-isotropy-at-almost-all-primes]] guarantees that only finitely many primes can be bad; the exact finite list for this form is determined in the next step. [given, algebra]

2.1 The criterion [[cor-ternary-isotropy-via-hilbert-symbol]] reduces the local question to the single symbol $(15,30)_p$. For $p\notin\{2,3,5\}$ both arguments are $p$-adic units, so the odd-prime formula gives value $1$. Thus every prime outside $\{2,3,5\}$ is good, and only $2,3,5$ need separate local computation. [step 1.1, given, algebra] ∎
