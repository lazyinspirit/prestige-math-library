---
id: lem-expander-walk-bad-edge-return
kind: lemma
title: "Expander walk bad edge return"
status: draft
origin: pipeline
deps: [lem-expander-walk-contraction]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §2.1 Proposition2.5 and its full proof, pp9–10."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

Let $F$ be a nonempty set of nonloop ordinary edges of a reverse-paired $d$-regular graph, and put $\varepsilon=|F|/|E|$. In a stationary walk, condition on some edge being in $F$. For $i\ge1$, the probability that the edge $i$ positions later belongs to $F$ is at most $\varepsilon+\alpha^{i-1}$. Interpret $\alpha^0=1$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] A walk that at each step chooses one of the $d$ ports uniformly has transition matrix $M$ and stationary uniform law $u=\mathbf1/n$. For any initial probability vector $p$ and integer $t\ge0$, using the ordinary Euclidean norm, $$\|M^tp-u\|_2\le\alpha^t\|p-u\|_2,\qquad \operatorname{TV}(M^tp,u)\le\frac{\sqrt n}{2}\alpha^t.$$ For $t=0$ the factor $\alpha^0$ is interpreted as one. For $t\ge1$, the adjacency-slot power has nontrivial norm $\alpha^t$. Here total variation means half the $\ell^1$ distance. ([[lem-expander-walk-contraction]]).


## Proof

1.1 The conditioned edge is uniform in $F$ and its orientation is uniform. Its terminal vertex therefore has law $x_v=\deg_F(v)/(2|F|)$. The next-step probability of using $F$ from $v$ is $y_v=\deg_F(v)/d=(2|F|/d)x_v$. Also $\max x_v\le d/(2|F|)$ and $\sum x_v=1$, whence $\|x\|_2^2\le d/(2|F|)$. This conditioning is legitimate because $F\ne\varnothing$. [F1, algebra]

2.1 Between that terminal vertex and the later tested edge there are $i-1$ transitions, so the probability is $y^{\mathsf T}M^{i-1}x$. Its constant part is $y^{\mathsf T}u=2|F|/(dn)=\varepsilon$. For the other part, spectral contraction and Cauchy–Schwarz give absolute value at most $(2|F|/d)\|x-u\|_2^2\alpha^{i-1}\le\alpha^{i-1}$; here $y=(2|F|/d)x$ allows its constant component to be removed in that inner product. This proves the result, including adjacent edges $i=1$. The nonloop condition ensures the stated two-endpoint count. [F1, step 1.1, algebra] ∎
