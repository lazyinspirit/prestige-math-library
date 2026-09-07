---
id: prop-expander-walk-hits-bad-edges
kind: proposition
title: "Expander walk hits bad edges"
status: published
origin: pipeline
deps: [lem-expander-walk-bad-edge-return, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §2.1 Proposition2.5 and §2.2 Fact2.6, pp9–10, direct consequence."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

Let a stationary walk traverse $t\ge1$ edges of a reverse-paired regular graph with $\alpha<1$. For a fixed set $F$ of nonloop bad edges and $\varepsilon=|F|/|E|$,
$$\Pr[\text{at least one bad edge}]\ge\frac{t\varepsilon}{t\varepsilon+1+2/(1-\alpha)}.$$
For $F=\varnothing$ this lower bound is zero.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $F$ be a nonempty set of nonloop ordinary edges of a reverse-paired $d$-regular graph, and put $\varepsilon=|F|/|E|$. In a stationary walk, condition on some edge being in $F$. For $i\ge1$, the probability that the edge $i$ positions later belongs to $F$ is at most $\varepsilon+\alpha^{i-1}$. Interpret $\alpha^0=1$. ([[lem-expander-walk-bad-edge-return]]).

[F2] For vectors $u,v$ in a real or complex inner product space, $$|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert.$$ Equality holds if and only if $u$ and $v$ are linearly dependent, including the case in which either vector is zero. ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).


## Proof

1.1 For $\varepsilon>0$, let $X=\sum_{j=1}^t I_j$ count bad edges. Stationarity gives $\mathbb EX=t\varepsilon$. The return bound gives $\mathbb E(I_jI_{j+i})\le\varepsilon(\varepsilon+\alpha^{i-1})$. Hence $\mathbb EX^2\le t\varepsilon+t(t-1)\varepsilon^2+2t\varepsilon\sum_{i=1}^{t-1}\alpha^{i-1}\le t\varepsilon[1+t\varepsilon+2/(1-\alpha)]$. For $t=1$ the pair sum is empty. [F1]

2.1 On the finite probability space, Cauchy–Schwarz applied to $X$ and the indicator of $X>0$ yields $(\mathbb EX)^2\le\mathbb EX^2\Pr[X>0]$. Divide by the positive second-moment bound and cancel $t\varepsilon$. If $\varepsilon=0$, then $X=0$ and the claimed bound is zero directly, without division. [F2, step 1.1] ∎
