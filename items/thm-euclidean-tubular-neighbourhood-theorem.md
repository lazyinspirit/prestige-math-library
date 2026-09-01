---
id: thm-euclidean-tubular-neighbourhood-theorem
kind: theorem
title: "The Euclidean tubular neighbourhood theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-addition-map-for-a-euclidean-submanifold,
       lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section,
       lem-variable-radius-injectivity-for-normal-addition,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Theorem 3.54"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold. Then there is a
positive smooth function $\delta:S\to(0,\infty)$ such that the restricted
normal addition map
$$E:\Omega_\delta\to\mathbb R^m,\qquad \Omega_\delta:=\{(p,v)\in N^\perp S:\|v\|<\delta(p)\},$$
is a diffeomorphism onto an open neighbourhood of $S$. In particular, $S$ has a
tubular neighbourhood in $\mathbb R^m$.

## Facts & Assumptions

**Given:** An embedded smooth submanifold $S\subseteq\mathbb R^m$.

[L1] The model map in this statement is the normal addition map ([[def-normal-addition-map-for-a-euclidean-submanifold]]).

[L2] Normal addition is a local diffeomorphism along the zero section and is injective on a sufficiently small smooth variable-radius neighbourhood ([[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]], [[lem-variable-radius-injectivity-for-normal-addition]]).

[L3] Smooth partitions of unity exist on manifolds ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 If $S=\varnothing$, take the unique function $\delta:S\to(0,\infty)$. Then $\Omega_\delta=\varnothing$, and $E$ is a diffeomorphism from the empty manifold onto the open neighbourhood $\varnothing$ of $S$. Hence assume $S\ne\varnothing$. [L1, given]

2.1 Let $W$ be the union of all normal-bundle neighbourhoods on which [L2] makes $E$ a local diffeomorphism. It is open and contains the zero section. By shrinking bundle trivializations around their base points, choose an open cover $(U_i)$ of $S$ and numbers $r_i>0$ such that $$\{(p,v):p\in U_i,\ \|v\|<r_i\}\subseteq W.$$ By [L3], choose a locally finite smooth partition $(\phi_i)$ subordinate to this cover. [L2, L3, step 1.1, choose]

3.1 Define $$r(p):=\left(\sum_i\frac{\phi_i(p)}{r_i}\right)^{-1}.$$ The locally finite sum is smooth and positive. At each $p$, the finite nonempty set $I(p):=\{i:\phi_i(p)>0\}$ has an index $i_0$ with $r_{i_0}=\max_{i\in I(p)}r_i$. Since $$r(p)\le r_{i_0}$$ and $p\in\operatorname{supp}(\phi_{i_0})\subseteq U_{i_0}$, the whole fibre ball $\|v\|<r(p)$ over $p$ lies in $W$. [L3, step 2.1, algebra]

4.1 Let $\delta_0:S\to(0,\infty)$ be the positive smooth injectivity radius supplied by [L2], and put $$\delta(p):=\frac{\delta_0(p)r(p)}{\delta_0(p)+r(p)}.$$ This function is positive and smooth, with $\delta<\delta_0$ and $\delta<r$. [L2, step 3.1, construct, algebra]

5.1 The set $\Omega_\delta$ is open in $N^\perp S$ because $(p,v)\mapsto\|v\|-\delta(p)$ is continuous. Since $\delta<r$, step 3.1 gives $\Omega_\delta\subseteq W$, so $E$ is a local diffeomorphism at every point of $\Omega_\delta$. Since $\delta<\delta_0$, [L2] also makes $E$ injective on $\Omega_\delta$. [L2, step 3.1, step 4.1]

6.1 A local diffeomorphism is open. Hence $U:=E(\Omega_\delta)$ is open and contains $S$ because $E(p,0)=p$. The injective local diffeomorphism $E:\Omega_\delta\to U$ is a homeomorphism, and its local smooth inverses agree and assemble to a smooth global inverse. Thus $E$ is the required diffeomorphism. Together with the empty case in step 1.1, this proves the theorem. [L1, step 1.1, step 5.1] ∎
