---
id: fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence
kind: false-statement
title: "FALSE: denominator degree one more than numerator degree already forces convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-improper-p-test-rational,
       thm-residue-evaluation-rational-real-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $R=p/q$ is rational and $\deg q=\deg p+1$, then
$\int_{-\infty}^{\infty}R(x)\,dx$
must converge.

## Facts & Assumptions

**Given:** The rational function $R(x)=1/(1+x)$ on $(0,\infty)$, or symmetrically $1/x$ on the punctured real line.

[L1] The two-degree gap in the rational residue theorem is the one used for unconditional improper convergence ([[thm-residue-evaluation-rational-real-integrals]]).

[L2] The rational $p$-test diverges at exponent $1$ ([[thm-improper-p-test-rational]]).

## Refutation

**Proof technique:** direct.

1.1 A degree drop by one means that at infinity the rational function behaves like $c/x$ with $c\ne0$. The model case is exactly the $p=1$ tail in [L2], whose integral diverges logarithmically. [L2]

2.1 Therefore the hypothesis $\deg q=\deg p+1$ does not force improper [step 1.1, L1] ∎ convergence. The theorem uses the stronger two-degree gap for a reason. [L1]
