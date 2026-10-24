---
id: ex-euler-criterion-with-a-large-prime
kind: example
title: "Euler's criterion computes $(3/726377359)$ by repeated squaring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulers-criterion-for-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Example 4.2.5"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

Let $p=726377359$. Repeated squaring computes

$$3^{(p-1)/2}=3^{363188679}\equiv-1\pmod p,$$

and therefore $(3/p)=-1$.

For a checkable transcript, let $q_i\equiv3^{2^i}\pmod p$ and let $c_i$ be the accumulated product through bit $i$ of $363188679$. The rows with bit $0$ leave the accumulator unchanged.

| $i$ | bit | $q_i$ | $c_i$ |
|---:|:---:|---:|---:|
| 0 | 1 | 3 | 3 |
| 1 | 1 | 9 | 27 |
| 2 | 1 | 81 | 2187 |
| 3 | 0 | 6561 | 2187 |
| 4 | 0 | 43046721 | 2187 |
| 5 | 0 | 311816404 | 2187 |
| 6 | 1 | 332055490 | 554374989 |
| 7 | 1 | 627697086 | 692682703 |
| 8 | 1 | 290411863 | 122079421 |
| 9 | 0 | 428546868 | 122079421 |
| 10 | 0 | 664373569 | 122079421 |
| 11 | 0 | 128724442 | 122079421 |
| 12 | 1 | 392778933 | 332499182 |
| 13 | 0 | 25099053 | 332499182 |
| 14 | 1 | 74866315 | 85056380 |
| 15 | 1 | 620616191 | 683996757 |
| 16 | 1 | 721181380 | 157844918 |
| 17 | 0 | 204089129 | 157844918 |
| 18 | 1 | 418766369 | 355227031 |
| 19 | 0 | 709737354 | 355227031 |
| 20 | 0 | 528168097 | 355227031 |
| 21 | 1 | 329748334 | 275223588 |
| 22 | 0 | 397327928 | 275223588 |
| 23 | 1 | 16921694 | 272602723 |
| 24 | 1 | 688270323 | 635018952 |
| 25 | 0 | 178932138 | 635018952 |
| 26 | 1 | 99664525 | 255823173 |
| 27 | 0 | 375528119 | 255823173 |
| 28 | 1 | 179529638 | 726377358 |

## Facts & Assumptions

**Given:** The prime $p=726377359$, the binary exponent $363188679$, and the displayed repeated-squaring transcript.

[L1] Euler's criterion gives $(a/p)\equiv a^{(p-1)/2}\pmod p$ for every integer $a$ and odd prime $p$ ([[thm-eulers-criterion-for-legendre-symbol]]).

## Verification

**Proof technique:** direct.

1.1 Starting from $q_0=3$, each table entry satisfies $q_{i+1}\equiv q_i^2\pmod p$; the bit column is the binary expansion $363188679=(10101101001011101000111000111)_2$, and multiplying precisely the $q_i$ with bit $1$ gives the displayed accumulators, ending at $726377358$. [given, algebra]

2.1 The final residue is $726377358=p-1\equiv-1\pmod p$, and it is not congruent to $1$ because $p>2$. [step 1.1, algebra]

3.1 Applying [L1] with $a=3$ and using step 2.1 gives $(3/p)=-1$. [L1, step 2.1] ∎
