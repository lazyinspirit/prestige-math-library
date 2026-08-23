---
id: thm-complex-pythagorean-identity-by-identity-theorem
kind: theorem
title: "The complex Pythagorean identity by the identity theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-holomorphic-functions, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-algebra-of-complex-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-complex-trigonometric-hyperbolic-dictionary]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "$\\sin^2z+\\cos^2z=1$ by identity"
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §2.3"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

For every complex number $z$,
$$\sin^2z+\cos^2z=1.$$

This proof obtains the complex identity from its real restriction by the identity theorem.

## Facts & Assumptions

**Given:** The complex sine and cosine of [[thm-complex-trigonometric-hyperbolic-dictionary]] and their algebra under sums and products ([[thm-algebra-of-complex-derivatives]]).

[L1] For every real $x$, $\sin^2x+\cos^2x=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain ([[thm-identity-theorem-holomorphic-functions]]).

[L3] The functions $\sin$, $\cos$, $\sinh$, and $\cosh$ are entire ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] and the holomorphic algebra laws, $h(z):=\sin^2z+\cos^2z-1$ is entire. [L3, algebra]

1.2 For every real $x$, [L1] gives $h(x)=0$. [L1]

2.1 The real axis has accumulation point $0$ in the complex domain $\mathbb C$, so [L2] applied to $h$ and the zero function makes $h$ identically zero. Hence $\sin^2z+\cos^2z=1$ for every complex $z$. [step 1.1, step 1.2, L2] ∎

## Remarks

This route is independent of the direct exponential-form calculation obtained by expanding the complex trigonometric dictionary and [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]]. The proof above uses neither that addition formula nor its algebraic consequences.
