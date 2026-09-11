---
id: def-row-and-column-filtrations-of-a-first-quadrant-double-complex
kind: definition
title: Row and column filtrations of a first quadrant double complex
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-direct-sum-total-complex-of-a-double-complex, lem-the-total-differential-squares-to-zero, prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes, def-filtered-chain-complex]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Section 12.25, the two filtration formulas (homological translation)"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Definition

Let $C$ be a first-quadrant homological double complex. Its
[[def-direct-sum-total-complex-of-a-double-complex|totalisation]] $T$ exists:
each nonnegative diagonal has at most $n+1$ nonzero terms and negative
diagonals are zero. The finite sum/product identification is provided by
[[prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes]],
and [[lem-the-total-differential-squares-to-zero]] gives the chain condition.

For integers $s,n$, its **column filtration** and **row filtration** are
the partial biproducts
$$F^{\mathrm{col}}_sT_n=\bigoplus_{p+q=n,\ p\le s}C_{p,q},\qquad F^{\mathrm{row}}_sT_n=\bigoplus_{p+q=n,\ q\le s}C_{p,q}.$$
Their injections into $T_n$ are split monomorphisms: projecting onto the
selected summands is a left inverse. Thus these are subobjects. The selected
index sets increase with $s$, giving the filtration inclusions.

Both arrows preserve each cutoff: $h$ lowers $p$ and fixes $q$, while $v$
fixes $p$ and lowers $q$. Consequently $h+v$ restricts to each partial sum,
and the two families are [[def-filtered-chain-complex|filtered subcomplexes]].
They vanish for $s<0$ and equal $T_n$ for $s\ge n$ when $n\ge0$. For
$n<0$ every piece and $T_n$ are zero. In particular degree zero has just the
single possible component $C_{0,0}$; both filtrations jump there at $s=0$.

The quotient $F_s/F_{s-1}$ selects column $s$ with remaining differential
$v$, or row $s$ with remaining differential $h$, respectively. In spectral
coordinates $(s,t)$, total degree is $s+t$; hence these associated graded
components are respectively $C_{s,t}$ and $C_{t,s}$. No sign is inserted:
the original double-complex arrows already anticommute. The construction
uses only the specified finite biproduct maps and no choices.
