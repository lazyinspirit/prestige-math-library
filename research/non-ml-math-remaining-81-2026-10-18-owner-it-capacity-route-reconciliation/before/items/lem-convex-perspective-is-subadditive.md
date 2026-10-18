---
id: lem-convex-perspective-is-subadditive
kind: lemma
title: The closed convex perspective is subadditive
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-f-divergence
  - thm-finite-jensen-inequality-in-euclidean-space
  - lem-convex-generator-boundary-limits-exist
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, equations (35)–(39)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Statement

Let $f$ be a convex generator from [[def-finite-f-divergence]]. Define its
closed perspective on $a,b\ge0$ by
$$
\Pi_f(a,b):=\begin{cases}
b f(a/b),&b>0,\ a>0,\\
b f(0),&b>0,\ a=0,\\
a f_\infty,&b=0,\ a>0,\\
0,&a=b=0.
\end{cases}
$$
For every finite family $(a_i,b_i)\in[0,\infty)^2$,
$$\Pi_f\!\left(\sum_i a_i,\sum_i b_i\right)\le\sum_i\Pi_f(a_i,b_i).$$

## Facts & Assumptions

**Given:** A convex generator $f$ with the extended boundary values $f(0)$
and $f_\infty$ defined in [[def-finite-f-divergence]], and a finite family
of nonnegative pairs $(a_i,b_i)$.

[F1] [[def-finite-f-divergence]]: $f$ is convex on $(0,\infty)$,
$f(1)=0$, $f(0)=\lim_{t\downarrow0}f(t)$, and
$f_\infty=\lim_{t\to\infty}f(t)/t$; the value at a positive first
coordinate and zero second coordinate is the corresponding first coordinate
times $f_\infty$.

[F2] [[thm-finite-jensen-inequality-in-euclidean-space]]: for a finite
family of points in a convex domain and nonnegative weights summing to one,
the convex function at their weighted average is at most the weighted sum
of its values.

[F3] [[lem-convex-generator-boundary-limits-exist]]: every finite convex
generator is continuous at every positive argument.

## Proof

1.1 Put $A=\sum_i a_i$ and $B=\sum_i b_i$. If $B=0$, all $b_i=0$. If
$A=0$, every pair is $(0,0)$ and both sides are zero. If $A>0$, both sides
equal $A f_\infty$ by the definition of $\Pi_f$, including the convention
that a positive coefficient times $+\infty$ is $+\infty$. [F1, given,
algebra]

1.2 Suppose $B>0$ and no index has $b_i=0<a_i$. If any $b_i>0=a_i$ with
$f(0)=+\infty$, the right side is $+\infty$ and the inequality holds.
Otherwise extend $f$ to the convex domain $[0,\infty)$ by its finite value
$f(0)$. This extension is convex at the endpoint too: approximate a zero
argument in any convexity inequality by positive arguments and pass to the
limit using $f(0)=\lim_{t\downarrow0}f(t)$ from [F1]. For indices with
$b_i>0$, the weights $b_i/B$ sum to one and
$A/B=\sum_{b_i>0}(b_i/B)(a_i/b_i)$. Applying [F2] gives
$Bf(A/B)\le\sum_{b_i>0}b_if(a_i/b_i)$; terms $(a_i,b_i)=(0,0)$ contribute
zero. This is the asserted inequality. [F1, F2, given, algebra]

2.1 Suppose $B>0$ and $J:=\{i:b_i=0<a_i\}$ is nonempty. If
$f_\infty=+\infty$, the right side is $+\infty$, so the inequality holds.
If any $b_i>0=a_i$ with $f(0)=+\infty$, the right side is $+\infty$ and
the inequality holds. Otherwise, if $f_\infty$ is finite, replace each
$b_i=0$ with $i\in J$ by
$b_i^{(\eta)}=\eta>0$, leaving all other second coordinates unchanged.
the finite Jensen inequality [F2] then gives
$(B+|J|\eta)f(A/(B+|J|\eta))\le\sum_{b_i>0}b_if(a_i/b_i)+\sum_{i\in J}\eta f(a_i/\eta)$.
As $\eta\downarrow0$, the left side tends to $Bf(A/B)$ by [F3] at the
positive number $A/B$, and each last summand tends to
$a_i f_\infty$ by the definition of $f_\infty$. The resulting inequality
is exactly $\Pi_f(A,B)\le\sum_i\Pi_f(a_i,b_i)$. [F1, F2, F3, given,
construct, algebra] ∎
