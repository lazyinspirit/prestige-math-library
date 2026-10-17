---
id: lem-box-control-projection-is-pointwise-clipping
kind: lemma
title: The L2 projection onto a pointwise box is clipping
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-pde-box-control-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–4: pointwise projection formula for distributed controls."
---

## Statement

Let $Q_{ad}=Q_{ad}(q_a,q_b)\subset L^2(E;\mathbb R)$ be as in [[def-pde-box-control-set]], and let $r\in L^2(E)$. Define
$$
P_{Q_{ad}}r(x)=\min\{q_b(x),\max\{q_a(x),r(x)\}\}\quad\text{a.e.}
$$
Then $P_{Q_{ad}}r$ is the unique minimizer of $\|q-r\|_{L^2(E)}$ over $q\in Q_{ad}$. Equivalently, $q=P_{Q_{ad}}r$ if and only if
$$
(q-r,v-q)_{L^2(E)}\ge0\qquad(v\in Q_{ad}).
$$

## Facts & Assumptions
**Given:** The finite-measure control domain, the bounds $q_a,q_b\in L^2(E)$ with $q_a\le q_b$ almost everywhere, and $r\in L^2(E)$.

[F1] The admissible set consists of the $L^2$ functions satisfying $q_a\le q\le q_b$ almost everywhere ([[def-pde-box-control-set]]).

## Proof

1.1 Put $q(x)=\min\{q_b(x),\max\{q_a(x),r(x)\}\}$. This function is measurable and lies between $q_a$ and $q_b$; therefore $q\in Q_{ad}$ and $q\in L^2(E)$. For real numbers $a\le b$, the clipped value $c=\min\{b,\max\{a,s\}\}$ satisfies $(c-s)(t-c)\ge0$ for every $t\in[a,b]$: if $s<a$, then $c=a$ and both factors are nonnegative; if $a\le s\le b$, then $c=s$ and the product is zero; if $s>b$, then $c=b$ and both factors are nonpositive. Applying this pointwise with $s=r(x)$ and $t=v(x)$ and integrating gives $(q-r,v-q)_{L^2}\ge0$ for every $v\in Q_{ad}$. [F1, given, algebra]

2.1 For any $v\in Q_{ad}$, $\|v-r\|_2^2-\|q-r\|_2^2 =\|v-q\|_2^2+2(q-r,v-q)_2\ge\|v-q\|_2^2.$ Thus $q$ minimizes the distance and equality can hold only when $v=q$ in $L^2$. Conversely, if $q$ is a distance minimizer, then for any $v\in Q_{ad}$ and $0<t\le1$, $q+t(v-q)\in Q_{ad}$. Expanding $\|q+t(v-q)-r\|_2^2\ge\|q-r\|_2^2$, dividing by $2t$, and letting $t\downarrow0$ gives $(q-r,v-q)_2\ge0$. [F1, step 1.1, given, algebra] ∎
