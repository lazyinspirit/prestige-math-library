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
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: e835017bbb59dafa985ae886440e71ebc4c10033018e89aedff65b89a2fe39d8
    item_sha256: 7dbf7c11275fb004ffe0292689dd1bd8485ae2ad5b107c09cf0fd7c3f337c303
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
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

[L2] Euler's formula gives $\varphi(n)=\prod_{i<r}\bigl(p_i^{k_i}-p_i^{k_i-1}\bigr)$ over the distinct prime divisors of $n$ and, after carrying the natural numbers into $\mathbb{Q}$, the equivalent form $\varphi(n)=n\prod_{i<r}\left(1-\frac1{p_i}\right)$ ([[thm-euler-totient-product-formula]]). Multiplying out that second product over the subsets of $\{p_0,\ldots,p_{r-1}\}$ is the inclusion-exclusion display used below; the cited theorem states the two products, not that display.

## Verification

**Proof technique:** direct.

1.1 Inclusion-exclusion over the multiples of $2,3,5$ gives $\varphi(360)=360-180-120-72+60+36+24-12=96$. [L1, L2]

1.2 The product form gives $\varphi(360)=(2^3-2^2)(3^2-3)(5-1)=4\cdot6\cdot4=96$. [L1, L2]

2.1 Both computations therefore give the same value, $\varphi(360)=96$. [step 1.1, step 1.2] ∎
