---
id: "cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric"
kind: "corollary"
title: "Closed embedded submanifolds of complete Riemannian manifolds are complete"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps:
  - "prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding"
  - "def-pullback-riemannian-metric"
  - "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions"
  - "prop-components-of-a-topological-manifold-are-open-and-at-most-countable"
  - "thm-components-partition-and-are-closed"
  - "def-riemannian-distance-on-a-connected-manifold"
  - "thm-the-riemannian-distance-topology-is-the-manifold-topology"
  - "def-complete-metric-space"
sources:
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry, Section 19.1, pp.139--141"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
verification:
  audited: 2026-09-13
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
---

## Statement

Let $(M,g)$ be a Riemannian manifold such that every connected component,
with its Riemannian distance, is complete. Let $S\subseteq M$ be a closed
embedded submanifold and give $S$ the induced Riemannian metric $h=i^*g$,
where $i:S\hookrightarrow M$ is the inclusion.
Then every connected component of $(S,h)$ is complete for its intrinsic
Riemannian distance.

Thus closed embedded submanifolds of complete Riemannian manifolds are
complete componentwise. In particular, if $M$ and $S$ are connected and
$(M,d_g)$ is complete, then $(S,d_h)$ is a complete metric space.

## Facts & Assumptions

**Given:** A Riemannian manifold $(M,g)$ that is complete componentwise, a closed embedded submanifold $S\subseteq M$, its inclusion $i$, the induced metric $h=i^*g$, a connected component $C$ of $S$, and a $d_h$-Cauchy sequence $(x_n)$ in $C$.

[F1] [[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]]: The inclusion of an embedded submanifold is a smooth embedding. In particular, it is an immersion and identifies the submanifold topology with the ambient subspace topology.

[F2] [[def-pullback-riemannian-metric]]: For a smooth map $F$ and a Riemannian metric $g$, the pullback tensor satisfies $(F^*g)_p(v,w)=g_{F(p)}(dF_pv,dF_pw)$.

[F3] [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]: The pullback of a Riemannian metric is Riemannian exactly when the map is an immersion.

[F4] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold, the distance between two points is the infimum of the lengths of piecewise-$C^1$ curves joining them.

[F5] [[thm-the-riemannian-distance-topology-is-the-manifold-topology]]: On every connected Riemannian manifold, convergence for the Riemannian distance is equivalent to convergence in the manifold topology, including at boundary points.

[F6] [[def-complete-metric-space]]: A metric space is complete when every Cauchy sequence converges to a point of that space.

[F7] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes every connected component of a manifold open, while [[thm-components-partition-and-are-closed]] makes it closed.

## Proof

**Proof technique:** direct.

1.1 By [F1], $i$ is an immersion. Hence [F2] and [F3] show that $h=i^*g$ is indeed a Riemannian metric on $S$. By [F7], the connected component $C$ is open in $S$, so it is a connected submanifold and the restriction of $h$ to $C$ is again Riemannian. [F1, F2, F3, F7, given]

2.1 Let $M_0$ be the connected component of $M$ containing $C$. If $\gamma$ is a piecewise-$C^1$ curve in $C$, then [F2] gives pointwise equality of speeds and therefore $$L_h(\gamma)=L_g(i\circ\gamma).$$ Every such curve is also an ambient curve in $M_0$. Taking the two infima in [F4] consequently gives $$d_g(x,y)\le d_h(x,y)\qquad(x,y\in C).$$ [F2, F4, step 1.1]

3.1 The inequality in step 2.1 makes $(x_n)$ a $d_g$-Cauchy sequence in $M_0$. By the assumed completeness of $M_0$ and [F6], there is $p\in M_0$ such that $d_g(x_n,p)\to0$. [F6, step 2.1, given]

4.1 By [F5], $x_n\to p$ in the manifold topology of $M_0$. If $p\notin S$, then $M_0\cap(M\setminus S)$ would be an open neighbourhood of $p$ in $M_0$ containing none of the $x_n$, contradicting this convergence. Thus $p\in S$. If $O$ is any neighbourhood of $p$ in $S$, [F1] gives an ambient-open $V$ such that $p\in S\cap V\subseteq O$. Since $V\cap M_0$ is a neighbourhood of $p$ in $M_0$, eventually $x_n\in V\cap S\subseteq O$. Hence $x_n\to p$ in $S$. [F1, F5, step 3.1, given]

5.1 The component $C$ is closed in $S$ by [F7]. Since every $x_n$ lies in $C$ and step 4.1 gives $x_n\to p$ in $S$, closedness forces $p\in C$. Because $C$ is also open in $S$, the same convergence is convergence in the manifold topology of $C$. [F7, step 4.1]

6.1 Apply [F5] to the connected Riemannian manifold $C$. Step 5.1 then gives $d_h(x_n,p)\to0$. The arbitrary $d_h$-Cauchy sequence $(x_n)$ therefore converges to a point of $C$, so [F6] proves that $(C,d_h)$ is complete. Since $C$ was arbitrary, the componentwise statement and its connected special case follow. [F5, F6, step 1.1, step 5.1] ∎

## Source locator

Datar, $\S$19.1, printed pp. 139--141, supplies the Riemannian distance and local metric-topology comparison used through [F4] and [F5]. The closed-submanifold completion argument above is derived locally from the exact internal suppliers; it does not invoke Hopf--Rinow or any geodesic-completeness implication.

## Boundary and choice audit

The empty submanifold has no nonempty component and the assertion is vacuous; the connected empty case has no sequences. In dimension zero, every connected component is a singleton. The same argument works unchanged in dimension one. Constant and eventually constant Cauchy sequences are included. Disconnected ambient manifolds and submanifolds are handled one component at a time. No endpoint assertion or equivalence is being made. No choice principle is used: the proof treats one arbitrary Cauchy sequence and invokes completeness once for that sequence.
