---
id: lem-waring-major-arcs-disjoint
kind: lemma
title: "Disjointness of the chosen Waring major arcs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-real-power
  - lem-integer-part
  - def-common-divisor-and-gcd
  - def-coprime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, the major/minor arc decomposition, printed pp. 1620–1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, rational major-arc centers and separation, printed pp. 34–35; the present radii are checked directly"
---

## Statement

Let $k\ge2$ and $N\ge16$ be integers, and set $P=\lfloor N^{1/8}\rfloor$ and $Q=\lfloor N^{1/16}\rfloor$. On $\mathbb T=\mathbb R/\mathbb Z$ with distance $\|t\|_{\mathbb T}=\min_{m\in\mathbb Z}|t-m|$, for each $1\le q\le Q$ and $a\pmod q$ whose only positive common divisor with $q$ is $1$, take the closed interval $\{\alpha:\|\alpha-a/q\|_{\mathbb T}\le16P/(qN^k)\}$. These intervals are pairwise disjoint.

## Statement references

[Wooley, §10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $N\ge16$, $P=\lfloor N^{1/8}\rfloor$, $Q=\lfloor N^{1/16}\rfloor$, and distinct reduced fractions $a/q,b/r$ with $q,r\le Q$.

[F1] The integer part is characterized by $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$, and real positive powers are increasing ([[lem-integer-part]], [[def-real-power]]).

[F2] A reduced fraction is a fraction whose numerator and positive denominator have greatest common divisor $1$ ([[def-common-divisor-and-gcd]], [[def-coprime]]).

## Proof

**Proof technique:** separation of reduced fractions.

1.1 The torus distance between distinct centers $a/q$ and $b/r$ is the minimum of $|a/q-b/r-m|$ over integers $m$. Each nonzero difference has numerator $ar-bq-mqr$, a nonzero integer, so the distance is at least $1/(qr)\ge1/Q^2$. [F2, given, algebra]

1.2 The sum of the two radii is at most $32P/N^k\le32N^{1/8-k}$. Since $Q\le N^{1/16}$, $1/Q^2\ge N^{-1/8}$, and since $N\ge16$, $k\ge2$,
$$32N^{1/8-k}<N^{-1/8}$$
because $N^{k-1/4}\ge16^{7/4}=128>32$. Thus the sum of the radii is strictly less than the center distance from step 1.1, proving the closed intervals disjoint. [F1, step 1.1, algebra] ∎
