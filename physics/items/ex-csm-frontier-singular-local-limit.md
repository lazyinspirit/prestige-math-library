---
id: ex-csm-frontier-singular-local-limit
kind: example
title: "A fixed label vanishes locally while a spatial mark stays random"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-local-topologies
  - def-csm-frontier-vague-topology
dependency_roles:
  def-csm-frontier-local-topologies: mathematical-premise
  def-csm-frontier-vague-topology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, complete author-hosted book"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, Sections 2.1 and 2.4, printed pp. 9–18: point processes as locally finite counting measures."
    - title: "Olav Kallenberg, Foundations of Modern Probability, 1997"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/32878/1/Olav%20kallenberg_1997.pdf"
      locator: "Chapter 4, Theorem 4.19 and Lemma 4.20, printed pp. 75–77: vague tests and escape of mass."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

For each integer $n\ge1$, put $S_n=\{-n,-n+1,\ldots,n-1\}\subset\mathbb Z$ and $L_n=\{1,2,\ldots,2n\}$. Let $\Omega_n$ be the finite set of bijections $\pi:L_n\to S_n$, equipped with its power-set sigma-algebra and probability $\mathbb P_n$ defined by $\mathbb P_n(\{\pi\})=1/(2n)!$ for every $\pi\in\Omega_n$ (and by summing these atom masses on every subset); let $\pi_n$ be the identity random bijection on this probability space. The position of fixed label $1$ is $U_n=\pi_n(1)$, and its point measure is $\Xi_n=\delta_{U_n}$. Give labels $1,\ldots,n$ mark $0$ and labels $n+1,\ldots,2n$ mark $1$. Let $V_n$ be the mark of the particle occupying spatial site $0$. For every nonnegative continuous compactly supported $f:\mathbb R\to\mathbb R$ and every $\varepsilon>0$,
$$\mathbb P_n\!\left(\left|\int f\,d\Xi_n\right|>\varepsilon\right)\longrightarrow0,$$
while $\mathbb P_n(V_n=0)=\mathbb P_n(V_n=1)=1/2$ for every $n$. The testwise convergence assertion uses the varying-space convention displayed here and requires no coupling between different $n$.

## Example references

[[def-csm-frontier-local-topologies]]

[[def-csm-frontier-vague-topology]]

## Facts & Assumptions

**Given:** For each $n$, the power-set sigma-algebra on $\Omega_n$ and the uniform probability $\mathbb P_n$, the finite label set $L_n$, the finite site set $S_n$, and the definitions of finite-spin local convergence and vague convergence.

[F1] [[def-csm-frontier-vague-topology]]: $\int f\,d\delta_u=f(u)$ for each nonnegative continuous compactly supported test function; vague convergence is tested by all such functions.

[F2] [[def-csm-frontier-local-topologies]]: finite-coordinate locality is a separate notion from the spatial vague topology used here.

## Verification

1.1 For any fixed site $x\in S_n$, exactly $(2n-1)!$ of the $(2n)!$ bijections send label $1$ to $x$. Thus $U_n$ is uniform on $S_n$ under $\mathbb P_n$. The inverse label $\pi_n^{-1}(0)$ is also uniform on $L_n$, because exactly $(2n-1)!$ bijections assign any prescribed label to site $0$. Exactly $n$ labels carry each mark, so $\mathbb P_n(V_n=0)=\mathbb P_n(V_n=1)=1/2$. [given, algebra]

2.1 Let $K=\operatorname{supp}f$. Since $K$ is compact, it is bounded and $K\cap\mathbb Z$ is finite; write $c_K=|K\cap\mathbb Z|$. Uniformity of $U_n$ gives $\mathbb P_n(U_n\in K)=|K\cap S_n|/(2n)\le c_K/(2n)$. For every $\varepsilon>0$, [F1] gives
$$\mathbb P_n\!\left(\left|\int f\,d\Xi_n\right|>\varepsilon\right)\le\mathbb P_n(U_n\in K)\le\frac{c_K}{2n}\longrightarrow0.$$
Thus each compactly supported vague test tends to zero in probability, while step 1.1 shows that selecting by the fixed spatial site $0$ retains a nondegenerate mark law. This is a statement about spatial point-measure tests; finite-coordinate local convergence on spin configurations is a separate notion by [F2]. These two statements concern different selection rules and do not contradict one another. [given, F1, F2, step 1.1, algebra] ∎

