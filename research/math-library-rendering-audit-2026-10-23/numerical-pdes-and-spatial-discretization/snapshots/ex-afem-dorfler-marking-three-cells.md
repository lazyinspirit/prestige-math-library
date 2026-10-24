---
id: "ex-afem-dorfler-marking-three-cells"
kind: "example"
title: "A deterministic Dörfler mark on three cells"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
proof_strategy: direct
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
generation:
  role: example
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for
        an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Example

Take squared cell indicators $(9,4,1)$ in the stated identifier order and $\theta_E=3/5$.

## Facts & Assumptions

**Given:** Three nonnegative squared indicators and the deterministic prefix rule of [[alg-dorfler-marking-and-conforming-nvb-refinement]].

[F1] Dörfler marking selects the shortest descending-value prefix whose sum reaches the declared fraction of the total ([[alg-dorfler-marking-and-conforming-nvb-refinement]]).

## Verification

1.1 The total is $9+4+1=14$, so the threshold is $(3/5)14=42/5=8.4$. The sorted descending prefix sums are $9,13,14$. [F1, given, algebra]

2.1 The first prefix already has sum $9\ge8.4$, while the empty prefix has sum $0<8.4$. Thus the unique minimal mark is the first cell, regardless of the later tie rule. [step 1.1, algebra] ∎

## Finite check

The three prefixes are exactly $\varnothing$, $\{1\}$, $\{1,2\}$ and $\{1,2,3\}$ with sums $0,9,13,14$; the first threshold-crossing prefix has cardinality one.
