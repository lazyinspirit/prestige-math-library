---
id: lem-relu-bounded-product-approximation
kind: lemma
title: "Correctly scaled bounded product approximation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [lem-relu-square-approximation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Proposition 3"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Proposition 3 and proof, p. 8. The printed coefficient in equation (4) is mis-scaled; the corrected coefficient and error are proved here."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Fix $M>0$. For every $0<\varepsilon<M^2$, there is a ReLU network $P_{M,\varepsilon}$ on $[-M,M]^2$ that satisfies $|P_{M,\varepsilon}(x,y)-xy|\le\varepsilon$ and $P_{M,\varepsilon}(x,0)=P_{M,\varepsilon}(0,y)=0$. Its depth, number of weights, and number of computation units are at most $C_M(1+\log(M^2/\varepsilon))$, where $C_M$ depends only on $M$.

## Statement references

[Yarotsky, Proposition 3 and proof: multiplication from approximate squaring](https://arxiv.org/pdf/1610.01145)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** $M>0$, $0<\varepsilon<M^2$, and the square networks in [[lem-relu-square-approximation]].

[F1] For every $0<\delta<1$, a ReLU network $Q_\delta$ satisfies $Q_\delta(0)=0$, $\|Q_\delta(u)-u^2\|_{[0,1]}\le\delta$, and has $O(1+\log(1/\delta))$ depth, weights, and units ([[lem-relu-square-approximation]]).

## Proof

1.1 Set $\delta=\varepsilon/(6M^2)$ and, for $|x|,|y|\le M$, put $$P_{M,\varepsilon}(x,y)=2M^2\left[Q_\delta\!\left(\frac{|x+y|}{2M}\right)-Q_\delta\!\left(\frac{|x|}{2M}\right)-Q_\delta\!\left(\frac{|y|}{2M}\right)\right].$$ All three arguments lie in $[0,1]$. Replacing $Q_\delta(u)$ by $u^2$ gives $2M^2[((x+y)^2-x^2-y^2)/(4M^2)]=xy$, so the absolute error is at most $2M^2(3\delta)=\varepsilon$. [given, F1, algebra, construct]

2.1 Since $Q_\delta(0)=0$, substituting $x=0$ makes the first and third terms equal and the second zero; substituting $y=0$ makes the first and second terms equal and the third zero. The formula is globally defined, so this cancellation holds for every real value of the other coordinate. Absolute value is represented by $|z|=\rho(z)+\rho(-z)$, and the three square networks run in parallel followed by an affine combination, so the depth, weights, and units are $O(1+\log(1/\delta))=O(1+\log(M^2/\varepsilon))$, since $0<\delta<1/6$ and $\log(1/\delta)=\log 6+\log(M^2/\varepsilon)$. [step 1.1, F1, algebra] ∎
