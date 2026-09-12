---
id: lem-irrational-circle-orbits-are-dense
kind: lemma
title: Irrational circle orbits are dense
deps: ["def-circle-rotation-and-doubling-map", "lem-pigeonhole"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Proposition 2.16 p.26 and Example 2.33 p.49
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For irrational $\alpha$, the subgroup $\{\{n\alpha\}:n\in\mathbb Z\}$ is dense in the circle. For every $\varepsilon>0$ and integer $M\ge0$ there is an integer $n>M$ with $d(\{n\alpha\},0)<\varepsilon$. These assertions are choice-free.

## Facts & Assumptions

[F1] Circle distance is distance to the nearest integer. [[def-circle-rotation-and-doubling-map]].

[F2] N+1 points in N intervals contain a pair in one interval. [[lem-pigeonhole]].

## Proof

**Given:** For irrational $\alpha$, the subgroup $\{\{n\alpha\}:n\in\mathbb Z\}$ is dense in the circle. For every $\varepsilon>0$ and integer $M\ge0$ there is an integer $n>M$ with $d(\{n\alpha\},0)<\varepsilon$. These assertions are choice-free.

1.1 For an integer $N\ge2$, place $\{j\alpha\}$, $0\le j\le N$, in the N half-open intervals $[k/N,(k+1)/N)$. Two indices i<j lie in one interval. Hence for q=j-i, $1\le q\le N$ and $0<d(\{q\alpha\},0)<1/N$; positivity follows from irrationality. Change q to -q if needed to obtain a subgroup point $\beta\in(0,1/N)$. [F1, F2]

2.1 The subgroup contains $0,\beta,2\beta,\ldots,m\beta$, where $m=\lfloor1/\beta\rfloor$; the last term is interpreted modulo one if necessary. Consecutive gaps are beta and the remaining gap to 1 is at most beta. For every x in [0,1), taking $k=\lfloor x/\beta\rfloor$ gives $0\le x-k\beta<\beta$. Since N can be arbitrarily large, every circle neighborhood meets the subgroup. [step 1.1, F1, algebra]

3.1 For fixed M>=1 let $\delta=\min_{1\le q\le M}d(\{q\alpha\},0)>0$. Take N with $1/N<\min(\delta,\varepsilon)$ and use the positive q from step 1.1 before changing its sign. That q exceeds M and has distance less than epsilon. For M=0 any q supplied there works after taking $1/N<\varepsilon$. Only finite minima and finite pigeonhole choices occur. [step 1.1, F1, algebra] ∎

