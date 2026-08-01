---
id: ex-bartle-sherbert-bounds-for-pi
kind: example
title: "The Bartle-Sherbert bounds 2.828 < pi < 3.185"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pi-via-first-positive-cosine-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two, def-sine-and-cosine-by-power-series, thm-alternating-series-test, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Example

Let $\gamma=\pi/2$. Then
$$\sqrt2<\gamma<\sqrt{6-2\sqrt3},\qquad 2.828<\pi<3.185.$$

## Facts & Assumptions

**Given:** The first positive cosine zero $\gamma=\pi/2$.

[L1] $\cos$ is strictly decreasing on $[0,2]$, with unique zero $\gamma$ ([[def-pi-via-first-positive-cosine-zero]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L2] The cosine power series and alternating-series remainder bounds are those of [[def-sine-and-cosine-by-power-series]] and [[thm-alternating-series-test]].

[L3] Nonnegative square roots exist and preserve comparisons after squaring ([[thm-of-square-roots]]).



## Verification

**Proof technique:** direct.

1.1 At $x=\sqrt2$, the first two cosine terms cancel and the alternating tail beginning with $x^4/4!$ is positive, so $\cos(\sqrt2)>0$. [L2, L3]

1.2 Put $a=\sqrt{6-2\sqrt3}$. Then $1-a^2/2+a^4/24=0$, and the remaining alternating cosine tail begins negative with decreasing absolute terms, so $\cos a<0$. [L2, L3, algebra]

2.1 Strict decrease and [L1] give $\sqrt2<\gamma<a$. [step 1.1, step 1.2, L1]

3.1 Since $(707/500)^2<2$, $2\sqrt2>707/250$. Since $(433/250)^2<3$ and $(637/400)^2>6-2(433/250)$, one has $a<637/400$, hence $2a<637/200$. [step 2.1, L3, algebra]

4.1 Doubling the bounds of step 2.1 proves the displayed decimal bounds for $\pi$. [step 2.1, step 3.1] ∎
