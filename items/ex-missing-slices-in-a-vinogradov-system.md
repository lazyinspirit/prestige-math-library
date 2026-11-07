---
id: ex-missing-slices-in-a-vinogradov-system
kind: example
title: "A Missing-Slice Mean Value with Degrees One and Four"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - cor-vinogradov-mean-value-for-distinct-degrees
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "Corollary 1.2, which allows missing positive degrees"
verification: {}
---

## Example

For the degree set $\{1,4\}$, the intermediate degree slices $2$ and $3$ are omitted. The corresponding sixth moment satisfies

$$\int_{[0,1)^2}\left|\sum_{1\le n\le X}e(\alpha_1n+\alpha_2n^4)\right|^6\,d\alpha_1\,d\alpha_2\ll_{\varepsilon}X^{3+\varepsilon}$$

for every $\varepsilon>0$ and every real $X\ge1$, where $j(u)=u+0i$ is the real embedding into $\mathbb C$ and $e(u)=\exp(2\pi i j(u))$.

## Example references

[Wooley, Corollary 1.2](https://arxiv.org/pdf/1708.01220v2)

## Facts & Assumptions

**Given:** $X\ge1$ and $\varepsilon>0$. Take $k=2$, $(d_1,d_2)=(1,4)$, and $s=3$. Verify the displayed sixth-moment bound.

[F1] [[cor-vinogradov-mean-value-for-distinct-degrees]]: distinct positive degrees $d_1,\ldots,d_k$ give the stated $X^{s+\varepsilon}$ mean-value bound for $0<s\le k(k+1)/2$.

## Verification

1.1 The selected degrees $1$ and $4$ are distinct positive integers, and $s=3$ satisfies $0<s\le2(2+1)/2=3$. [given, algebra]

2.1 Substituting $k=2$, $(d_1,d_2)=(1,4)$, and $s=3$ into [F1] gives the displayed bound, with the degree-2 and degree-3 slices absent. [given, F1, step 1.1] ∎
