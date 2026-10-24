---
id: lem-finite-simplex-entropy-continuity-and-concavity
kind: lemma
title: Finite-simplex entropy is continuous and concave
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-logarithm-slower-than-every-positive-power, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, cor-second-derivative-characterises-convexity]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof is coordinatewise on a finite simplex.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 1 §1.1 and Chapter 2 §2.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "David J. C. MacKay, Information Theory, Inference, and Learning Algorithms, Chapter 12 §12.3"
      url: https://www.geophysik.uni-muenchen.de/~igel/Inv-II/Others/Mackay/information_theory.pdf
---

## Statement

For a finite nonempty alphabet of size $m$, let
$$H(p):=-\sum_{i=1}^m p_i\ln p_i,\qquad 0\ln0:=0,$$
on the probability simplex $\Delta_m=\{p\in[0,1]^m:\sum_i p_i=1\}$. Then $H$ is continuous and concave on $\Delta_m$, with $0\le H(p)\le\ln m$.

## Facts & Assumptions

**Given:** An integer $m\ge1$ and the finite probability simplex $\Delta_m$.

[F1] [[def-natural-logarithm]]: $\ln$ is the natural logarithm on $(0,\infty)$.

[F2] [[thm-logarithm-slower-than-every-positive-power]]: $\ln s/s\to0$ as $s\to+\infty$.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: for $t>0$, $(\ln t)'=1/t$, so the second derivative of $-t\ln t$ is $-1/t$.

[F4] [[cor-second-derivative-characterises-convexity]]: a twice-differentiable function with nonpositive second derivative on an interval is concave there, by applying the nonnegative-second-derivative criterion to its negative.

## Proof

1.1 Define $h(t)=-t\ln t$ for $0<t\le1$ and $h(0)=0$. With $s=1/t$, $|t\ln t|=\ln(s)/s\to0$ as $t\downarrow0$ by [F1] and [F2]; hence $h$ is continuous on $[0,1]$. [F1, F2, given, algebra]

2.1 On $(0,1)$, [F3] gives $h''(t)=-1/t<0$, so [F4] makes $h$ concave there. For $u,v\in[0,1]$ and $0<\epsilon<1$, replace each endpoint by $u_\epsilon=(1-\epsilon)u+\epsilon/2$ and $v_\epsilon=(1-\epsilon)v+\epsilon/2$. Concavity on $(0,1)$ applies to these interior points; taking $\epsilon\downarrow0$ and using step 1.1 gives the concavity inequality on the closed interval. [F3, F4, step 1.1, algebra]

3.1 For $p,q\in\Delta_m$ and $0\le\theta\le1$, apply the concavity inequality for $h$ to each coordinate $\theta p_i+(1-\theta)q_i$. Summing the $m$ inequalities gives $H(\theta p+(1-\theta)q)\ge\theta H(p)+(1-\theta)H(q)$. Continuity of $H$ follows from continuity of the finite sum of the coordinate functions $h$. [step 1.1, step 2.1, given, algebra]

4.1 Each summand $-p_i\ln p_i$ is nonnegative because $0\le p_i\le1$, so $H(p)\ge0$. The average of the $m!$ coordinate permutations of $p$ is the uniform vector $u=(1/m,\ldots,1/m)$, and each permutation has entropy $H(p)$. Concavity from step 3.1, iterated over this finite average, gives $H(u)\ge H(p)$. Since $H(u)=\ln m$, the claimed upper bound follows, including $m=1$. [F1, step 3.1, given, algebra, cases] ∎