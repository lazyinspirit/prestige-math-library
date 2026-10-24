---
id: fs-every-entire-function-with-antiderivative-is-polynomial
kind: false-statement
title: "FALSE: every entire function with an antiderivative is a polynomial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-normalized-exponential-functional-equation, thm-fundamental-theorem-of-algebra-minimum-modulus-proof]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.4"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

**False claim:** Every entire function that has an entire antiderivative is a polynomial.

## Facts & Assumptions

**Given:** The complex exponential function.

[L1] The complex exponential is entire and satisfies $\exp'=\exp$ on $\mathbb C$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] For all complex $z,w$, $\exp(z+w)=\exp z\exp w$, and the complex exponential agrees with the real exponential on the real axis ([[thm-complex-exponential-addition-and-real-extension]]).

[L3] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]).

[L4] The normalized real exponential satisfies $\exp0=1$ and has derivative $1$ at $0$ ([[thm-normalized-exponential-functional-equation]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the complex exponential is entire and is its own entire antiderivative. [L1]

1.2 By [L2] and [L4], $\exp z\exp(-z)=\exp0=1$, so the exponential never vanishes; [L1] then makes its derivative nonzero everywhere, and it is nonconstant. [L1, L2, L4, algebra]

2.1 If the complex exponential were a nonconstant polynomial, [L3] would give it a complex zero, contradicting step 1.2. [step 1.2, L3]

3.1 It is not a constant polynomial because its derivative is nonzero by step 1.2, and step 2.1 excludes every nonconstant polynomial; together with step 1.1, the exponential is an entire nonpolynomial function with an entire antiderivative, refuting the claim. [step 1.1, step 1.2, step 2.1] ∎
