---
id: lem-minimizing-along-a-geodesic-is-an-initial-interval-property
kind: lemma
title: Minimizing along a geodesic is an initial interval property
status: published
origin: pipeline
deps:
  - def-cut-time-in-a-unit-tangent-direction
  - def-riemannian-distance-on-a-connected-manifold
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Lectures 21–24"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Assume countable choice through the declared dependencies. Let $(M,g)$ be a
complete connected boundaryless Riemannian manifold, $p\in M$, $v\in T_pM$ a
unit vector, and $\gamma(t)=\exp_p(tv)$ for $t\ge0$. The set
$$A_p(v)=\{t\ge0:d_g(p,\gamma(t))=t\}$$
is an initial interval: if $T\in A_p(v)$ and $0\le s\le T$, then
$s\in A_p(v)$. Moreover, if the cut time $c_p(v)$ is finite, then
$c_p(v)\in A_p(v)$. Equivalently, once an earlier segment fails to minimize,
no later segment along this ray minimizes.

## Facts & Assumptions

**Given:** The complete ray $\gamma$ and the fixed initial point $p$.

[A1] The setup carries $\mathrm{AC}_\omega$ through
[[def-countable-choice]] and the cut-time supplier. This proof makes no use of
full AC.

[F1] The cut time is the supremum of the positive minimizing times, as defined
in [[def-cut-time-in-a-unit-tangent-direction]].

[F2] Riemannian distance is the infimum of lengths of piecewise $C^1$ curves,
by [[def-riemannian-distance-on-a-connected-manifold]].

## Proof

**Proof technique:** direct competitor concatenation and an epsilon argument.

1.1 Put $m(t)=d_g(p,\gamma(t))$ and $A=\{t\ge0:m(t)=t\}$. The ray segment from $0$ to $t$ has unit speed and length $t$, so [F2] gives $m(t)\le t$; also $0\in A$. Thus membership in $A$ is exactly the assertion that the segment to $\gamma(t)$ minimizes. [F2, given]

1.2 For any $s,t\ge0$ and $\varepsilon>0$, [F2] gives one curve from $p$ to $\gamma(s)$ of length less than $m(s)+\varepsilon$; appending the ray segment gives $m(t)\le m(s)+\varepsilon+|t-s|$. Reversing $s,t$ and letting $\varepsilon\downarrow0$ proves $|m(t)-m(s)|\le|t-s|$. This uses one near-minimizer at a time. [F2, given]

2.1 If $T\in A$ and $0<s<T$ were not in $A$, then $m(s)<s$; by [F2] there is a piecewise $C^1$ curve from $p$ to $\gamma(s)$ of length strictly less than $s$. Concatenating it with $\gamma|_{[s,T]}$ gives a curve to $\gamma(T)$ of length less than $s+(T-s)=T$, contradicting $T\in A$. The case $s=0$ is already in [1.1], so $A$ is an initial interval. [F2, step 1.1]

2.2 Let $c=c_p(v)$ from [F1]. If $c<\infty$, then for every sufficiently small $\varepsilon>0$ the supremum property gives $s\in A$ with $c-\varepsilon<s\le c$; by the Lipschitz estimate [1.2], $m(c)\ge m(s)-|c-s|=2s-c>c-2\varepsilon$, while the ray segment gives $m(c)\le c$. Hence $m(c)=c$, so every finite cut-time endpoint minimizes; for $c=+\infty$ there is no finite endpoint to check. [F1, F2, step 1.2]

3.1 At $T=0$ the segment is constant and minimizing. The empty manifold has no point $p$; in dimension zero there are no unit directions, and in dimension one the two directions are handled separately. The finite endpoint argument uses one existential near-minimizer for each arbitrary $\varepsilon$, not a selected sequence, so it spends no countable-choice instance beyond the inherited $\mathrm{AC}_\omega$ setup [A1]. The contrapositive is the equivalent formulation in the Statement; both implications are established. [A1, F1, step 2.1, step 2.2] $\square$
