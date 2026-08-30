---
id: ex-pole-pushing-along-three-discs
kind: example
title: "Pole pushing along an explicit chain of three discs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-runge-pole-pushing-lemma]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Lemma 9.2.2 discussion"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Lemma 4.4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Example

Take $K=\{z:|z|\le1\}$ and the three discs
$D_1=D(2,3/4)$, $D_2=D(5/2,3/4)$, $D_3=D(3,3/4)$. Then one may push the pole of
$(z-2)^{-1}$ successively to $5/2$, to $3$, to $7/2$, and then to $\infty$,
while keeping the approximation uniform on $K$.

## Facts & Assumptions

**Given:** The compact set $K$ and the three discs displayed in the Example.

[L1] Runge's pole-pushing lemma moves a simple pole along any finite disc chain disjoint from the compact set ([[lem-runge-pole-pushing-lemma]]).

## Verification

**Proof technique:** direct.

1.1 Each closed disc $\overline D_j$ is disjoint from $K$, and the pairs $(2,5/2)$, $(5/2,3)$, and $(3,7/2)$ lie in $D_1$, $D_2$, and $D_3$ respectively. Thus the displayed data form a pole-pushing chain from $2$ to $7/2$. [given]

2.1 Apply clause 1 of [L1] to that chain to obtain, for any prescribed $\varepsilon>0$, a rational function with only pole $7/2$ that approximates $(z-2)^{-1}$ uniformly on $K$. For the polynomial conclusion, every $z\in K$ satisfies $|z|<3/2<7/2$, so clause 2 of [L1], with $R=3/2$, gives a polynomial approximating $(z-2)^{-1}$ uniformly on $K$ to within $\varepsilon$. [step 1.1, L1, algebra] ∎
