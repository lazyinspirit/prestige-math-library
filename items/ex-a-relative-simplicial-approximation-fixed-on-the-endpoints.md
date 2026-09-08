---
id: ex-a-relative-simplicial-approximation-fixed-on-the-endpoints
kind: example
title: "A relative simplicial approximation fixed on the endpoints"
status: published
origin: pipeline
deps: ["thm-relative-simplicial-approximation-after-subdivision", "lem-the-open-star-criterion-produces-a-simplicial-map"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "E. C. Zeeman, Relative simplicial approximation (1964)"
      url: "https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf"
---

## Example

For $f:[0,1]\to[0,1]$, $f(x)=x^2$, fix the endpoint subcomplex $A=\{0,1\}$. On the midpoint subdivision define the simplicial vertex map $g(0)=g(1/2)=0$, $g(1)=1$. Its realization is $|g|(x)=0$ for $0\leq x\leq1/2$, and $|g|(x)=2x-1$ for $1/2\leq x\leq1$. Then $|g|$ is homotopic to $f$ rel both endpoints.

## Source locators

Relative theorem pp.39–42, interval specialization.


## Facts & Assumptions

[F1] Star inclusions certify a simplicial approximation. [[lem-the-open-star-criterion-produces-a-simplicial-map]].

[F2] Relative approximation permits fixed endpoint subcomplexes. [[thm-relative-simplicial-approximation-after-subdivision]].


## Verification

**Given:** The specified interval map and the midpoint triangulation.

1.1 The first source edge maps to the target vertex $0$ and the second to the target edge, so $g$ is simplicial. The two affine formulas agree at $1/2$, both giving $0$, and $|g|(0)=0$, $|g|(1)=1$. The target stars are $[0,1)$ and $(0,1]$. The source stars of $0,1/2,1$ are $[0,1/2)$, $(0,1)$, $(1/2,1]$; under $x^2$ they lie respectively in $[0,1)$, $[0,1)$, $(0,1]$. Thus this is even a star approximation to $f$. [F1]

2.1 The explicit homotopy is $H(x,t)=(1-t)x^2+t|g|(x)$. It is continuous because its piecewise polynomial formulas agree at $x=1/2$; its values lie in $[0,1]$ as convex combinations. It satisfies $H(x,0)=x^2$, $H(x,1)=|g|(x)$ and $H(0,t)=0,H(1,t)=1$. At the midpoint, $f(1/2)=1/4$, $|g|(1/2)=0$, and $H(1/2,t)=(1-t)/4$, so fixing the endpoints does not mean fixing the entire interval. This explicitly realizes the relative theorem for the pair. [F2, step 1.1] ∎
