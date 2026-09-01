---
id: cex-chebyshev-bounds-do-not-give-the-prime-number-theorem
kind: counterexample
title: "Two-sided Chebyshev bounds do not imply the prime number theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-chebyshev-prime-counting-bounds]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement refuted

The existence of positive constants $c_1<c_2$ with

$$
c_1\frac{x}{\log x}\le f(x)\le c_2\frac{x}{\log x}
$$

for all sufficiently large $x$ forces

$$
f(x)\sim\frac{x}{\log x}.
$$

## Facts & Assumptions

**Given:** The refuted implication and the Chebyshev bound shape from
[[thm-chebyshev-prime-counting-bounds]].

[L1] For $x>e$, one has $\log x>1>0$, so the quotient $x/\log x$ is defined.

## Counterexample

**Proof technique:** direct.

1.1 Let $ f(x):=\frac{3}{2}\frac{x}{\log x}\qquad(x>e). $ By [L1] this is well defined, and $ 1\cdot\frac{x}{\log x}\le f(x)\le2\cdot\frac{x}{\log x} $ for every $x>e$, so the two-sided Chebyshev-type bounds hold. [L1, given, construct, algebra]

2.1 But $ \frac{f(x)}{x/\log x}=\frac32 $ for every $x>e$, so the ratio does not tend to $1$. Therefore the displayed implication is false. [step 1.1, algebra] ∎
