---
id: "ex-chain-stokes-on-an-oriented-two-simplex"
kind: "example"
title: "Chain Stokes on an oriented two-simplex"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-stokes-theorem-for-smooth-singular-chains"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, Theorem 3.1, PDF p.5
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For an oriented smooth two-simplex $\sigma=[v_0v_1v_2]$ in a smooth manifold and a smooth one-form $\eta$,
$$\int_\sigma d\eta=\int_{[v_1v_2]}\eta-\int_{[v_0v_2]}\eta+\int_{[v_0v_1]}\eta.$$
For the standard triangle in $\mathbb R^2$ and $\eta=x\,dy$, both sides equal $1/2$.

## Facts & Assumptions

**Given:** The oriented simplex and one-form in the example.

[F1] [[thm-stokes-theorem-for-smooth-singular-chains]] gives $\int_c d\eta=\int_{\partial c}\eta$ with the alternating face differential.

## Verification

1.1 The oriented boundary is $$\partial[v_0v_1v_2]=[v_1v_2]-[v_0v_2]+[v_0v_1].$$ Applying [F1] and linearity of chain integration gives exactly the first displayed formula, including its middle minus sign. [F1, given]

2.1 For the standard triangle with $v_0=(0,0)$, $v_1=(1,0)$ and $v_2=(0,1)$, one has $d(x\,dy)=dx\wedge dy$ and therefore $$\int_\sigma d\eta=\int_0^1\int_0^{1-x}dy\,dx=\int_0^1(1-x)\,dx=\frac12.$$ On the first boundary edge use $(x,y)=(1-t,t)$, $0\le t\le1$, so $x\,dy=(1-t)dt$ and its integral is $1/2$. On $[v_0v_2]$ one has $x=0$, and on $[v_0v_1]$ one has $dy=0$, so the other two edge integrals vanish. Thus the signed boundary total is also $1/2$. [step 1.1, algebra]

3.1 Reversing the simplex orientation reverses both sides and all three induced edge signs. A zero form or degenerate simplex gives zero through [F1]; there is no omitted boundary endpoint because each oriented edge includes both of its vertices. The calculation is finite and choice-free. [F1, step 1.1, step 2.1] ∎
