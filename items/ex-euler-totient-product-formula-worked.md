---
id: ex-euler-totient-product-formula-worked
kind: example
title: "$\\varphi(360)=96$ by both inclusion-exclusion and the prime-power product formula"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euler-totient-product-formula, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Carnegie Mellon, number-theory lecture notes"
      url: "https://www.cs.cmu.edu/~goyal/15356/lecture_notes.pdf"
pipeline_run: null
---

## Example

Euler's totient at $360$ is $96$, obtained either by excluding multiples of
$2,3,5$ or by multiplying the prime-power contributions.

## Facts & Assumptions

**Given:** The positive integer $360$.

[L1] Its canonical prime factorisation is $360=2^3\cdot3^2\cdot5$ ([[thm-canonical-prime-factorisation]]).

[L2] Euler's formula may be read both as finite inclusion-exclusion over distinct prime divisors and as the product of the factors $p^k-p^{k-1}$ ([[thm-euler-totient-product-formula]]).

## Verification

**Proof technique:** direct.

1.1 Inclusion-exclusion over the multiples of $2,3,5$ gives $\varphi(360)=360-180-120-72+60+36+24-12=96$. [L1, L2]

1.2 The product form gives $\varphi(360)=(2^3-2^2)(3^2-3)(5-1)=4\cdot6\cdot4=96$. [L1, L2]

2.1 Both computations therefore give the same value, $\varphi(360)=96$. [step 1.1, step 1.2] ∎
