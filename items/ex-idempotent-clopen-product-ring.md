---
id: ex-idempotent-clopen-product-ring
kind: example
title: "Coordinate idempotents split the spectrum of a product ring into two clopen pieces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-idempotent-gives-clopen-spectrum-partition]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 14.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.22: Connected components of spectra"
      url: "https://stacks.math.columbia.edu/tag/04PP"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Let $k$ be a field and let $R=k\times k$. The coordinate idempotent $e=(1,0)$ satisfies $$ D(e)=\{(0)\times k\},\qquad D(1-e)=\{k\times(0)\}, $$ so $\operatorname{Spec}(R)$ splits into two clopen singletons.

## Facts & Assumptions

**Given:** A field $k$, the product ring $R=k\times k$, and the idempotent $e=(1,0)$.

[L1] An idempotent partitions the spectrum into complementary clopen subsets $D(e)$ and $D(1-e)$ ([[lem-idempotent-gives-clopen-spectrum-partition]]).

[A1] The prime ideals of $k\times k$ are exactly $(0)\times k$ and $k\times(0)$.

## Verification

**Proof technique:** direct.

1.1 The element $e=(1,0)$ satisfies $e^2=e$, so [L1] gives a clopen partition $\operatorname{Spec}(R)=D(e)\sqcup D(1-e)$. [L1, given]

2.1 By [A1], the only prime ideals are $(0)\times k$ and $k\times(0)$. The ideal $k\times(0)$ contains $e$, while $(0)\times k$ does not; hence $D(e)=\{(0)\times k\}$. Similarly $D(1-e)=\{k\times(0)\}$. [A1, step 1.1, algebra]

3.1 Therefore the coordinate idempotents split the product spectrum into two clopen singleton pieces. [step 2.1] ∎
