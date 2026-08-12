---
id: thm-pi-equivalent-characterizations-ledger
kind: theorem
title: "The zero, period, arc-length, polygonal, area, circumference, series, and product characterizations all give the same pi"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pi-zero-and-period-characterizations, thm-unit-semicircle-arc-length-is-pi, thm-circle-circumference-diameter-ratio-is-pi, thm-archimedean-polygon-perimeter-characterization-of-pi, thm-disc-area-is-pi-r-squared, thm-gregory-leibniz-series-for-pi-from-a-finite-remainder, thm-wallis-product-for-pi, thm-viete-product-for-pi]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
    - title: "D. Galvin, Primitives and techniques of integration, section 13.2"
      url: "https://www3.nd.edu/~dgalvin1/10860/10860_S20/book/Sec13.pdf"
pipeline_run: null
---

## Statement

The constant $\pi$ defined as twice the least positive cosine zero is also:

1. the least positive sine zero;
2. half the least positive common period of sine and cosine;
3. the length of a unit semicircle;
4. half the common limit of regular inscribed and circumscribed unit-circle perimeters;
5. the Riemann area of the unit disc;
6. $C(r)/d(r)$ for every circle of radius $r>0$;
7. four times the Gregory-Leibniz series sum;
8. twice the Wallis-product limit;
9. twice the reciprocal of the Viète-product limit.

## Facts & Assumptions

**Given:** The constant $\pi$ of the statement.

[L1] The zero and least-common-period conditions are equivalent characterizations of $\pi$ ([[thm-pi-zero-and-period-characterizations]]).

[L2] A once-traversed unit semicircle has length $\pi$ ([[thm-unit-semicircle-arc-length-is-pi]]).

[L3] Every positive-radius circle has circumference $2\pi r$ and circumference-to-diameter ratio $\pi$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

[L4] Regular inscribed and circumscribed unit-circle perimeters both tend to $2\pi$ ([[thm-archimedean-polygon-perimeter-characterization-of-pi]]).

[L5] The unit disc has Riemann area $\pi$ ([[thm-disc-area-is-pi-r-squared]]).

[L6] The Gregory-Leibniz series converges to $\pi/4$ ([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[L7] The finite Wallis products converge to $\pi/2$ ([[thm-wallis-product-for-pi]]).

[L8] The finite Viète products converge to $2/\pi$ ([[thm-viete-product-for-pi]]).

## Proof

**Proof technique:** direct.

1.1 Claims 1 and 2 are [L1]. [L1]

1.2 Claim 3 is [L2], and claim 6 is [L3]. [L2, L3]

1.3 Claim 4 follows from [L4] by dividing the common limit $2\pi$ by $2$, and claim 5 is [L5]. [L4, L5, algebra]

1.4 Claim 7 follows from [L6] by multiplying by $4$, and claim 8 follows from [L7] by multiplying by $2$. [L6, L7, algebra]

1.5 By [L8], the Viète-product limit is $2/\pi>0$, so twice its reciprocal is $2/(2/\pi)=\pi$, which is claim 9. [L8, algebra]

2.1 Every listed value is therefore equal to the originally defined constant $\pi$; no one of these equalities was used to define another. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
