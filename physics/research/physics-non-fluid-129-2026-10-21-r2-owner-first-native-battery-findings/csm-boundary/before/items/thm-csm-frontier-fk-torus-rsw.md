---
id: thm-csm-frontier-fk-torus-rsw
kind: theorem
title: "Periodic-torus RSW lower bounds at the FK self-dual point"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-csm-frontier-fk-real-boundaries
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-frontier-fk-torus-cellular-duality
  - lem-csm-frontier-fk-mixed-reflection-gluing
  - thm-polygonal-jordan-curve
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-frontier-fk-torus-cellular-duality: mathematical-premise
  lem-csm-frontier-fk-mixed-reflection-gluing: mathematical-premise
  thm-polygonal-jordan-curve: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 2, Theorem 5, Lemmas 6–7, and Proposition 8 (PDF pp. 6–13)."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapters 3 and 6, FKG, planar duality, and periodic crossing context."
verification:
  precheck: pass
---

## Statement

For each $q\geq1$ and aspect ratio $\alpha>1$, there is a constant $c(\alpha,q)>0$ such that the following holds. Let $n,m$ be positive integers with $m>\lceil\alpha n\rceil$, let $T_m=(\mathbb Z/m\mathbb Z)^2$ with its nearest-neighbor horizontal and vertical edges and periodic boundary conditions, and give its edges the FK law with no boundary wiring, parameter $q$, and $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. The probability of a horizontal open crossing of the vertex rectangle $\{0,\ldots,\lceil\alpha n\rceil\}\times\{0,\ldots,n\}$ is at least $c(\alpha,q)$, uniformly in $n$ and $m$.

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

[[lem-csm-frontier-fk-torus-cellular-duality]]

[[lem-csm-frontier-fk-mixed-reflection-gluing]]

[[thm-polygonal-jordan-curve]]

## Facts & Assumptions

**Given:** Real $q\geq1$, $\alpha>1$, positive integers $n,m$ with $m>\lceil\alpha n\rceil$, and the finite periodic square-torus FK law at $p=\sqrt q/(1+\sqrt q)$.

[F1] Finite FK laws on labelled multigraphs use the stated component weights ([[def-csm-frontier-fk-real-boundaries]]).

[F2] Finite FK has positive association, exact spatial Markov conditioning, and conditional edge-open probability at least $\rho=p/[p+q(1-p)]$ ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F3] The dual-complement law on every labelled square torus has likelihood bounded by $q^{-2}$ and $q^2$ relative to the ordinary dual FK law, including thin quotients ([[lem-csm-frontier-fk-torus-cellular-duality]]).

[F4] In the rotated lattice $P=\{(u,v)\in\mathbb Z^2:u\equiv v\pmod2\}$ with diagonal edges, use diagonal torus periods $(m,m)$ and $(-m,m)$. For $N\in4\mathbb Z_{>0}$ the closed square has each crossing probability at least $a=\rho/(1+q^2)$ when $N<m$, and the closed width-$3N/2$, height-$N$ rectangle has horizontal crossing probability at least $b=a^3/[2(1+q^2)]$ when $3N/2<m$ ([[lem-csm-frontier-fk-mixed-reflection-gluing]]). These are actual-edge crossing events with the literal closed-side conventions.

[F5] A simple polygonal Jordan curve separates the plane into two components ([[thm-polygonal-jordan-curve]]). Consequently opposite-direction paths in any of the finite planar rotated rectangles intersect: a loop-erased horizontal path, completed through exterior side collars, separates the bottom from the top. All primal diagonal edges meet only at common vertices.

## Proof

1.1 The invertible linear map $u=x+y$, $v=y-x$ sends the ordinary square lattice to $P$ and its nearest-neighbor edges to the diagonal edges. Its inverse is $x=(u-v)/2$, $y=(u+v)/2$. Ordinary periods $(m,0),(0,m)$ become $(m,-m),(m,m)$, generating exactly the diagonal-period lattice in [F4]. It is therefore a labelled graph isomorphism, preserving the weights in [F1]. A rotated patch with both coordinate spans less than $m$ embeds: every nonzero period has at least one coordinate of absolute value at least $m$. We may compute probabilities of such patches in these coordinates. The cellular torus comparison [F3] is the likelihood input used in [F4], not an unproved planar substitution for torus topology. [F1, F3, F4, given, construct, algebra]

1.2 A closed rotated vertical rectangle of width $S\in4\mathbb Z_{>0}$ and height $2S$ has crossing probability at least $d=b^2a$ if $2S<m$. Indeed take the vertical crossings of $[0,S]\times[0,3S/2]$ and $[0,S]\times[S/2,2S]$, and a horizontal crossing of their overlap square $[0,S]\times[S/2,3S/2]$. The vertical bounds are [F4] after coordinate interchange; the shift $S/2$ is even and preserves $P$. The square bound is also [F4]. Each horizontal path intersects both vertical paths by [F5], so their union gives the required vertical crossing. FKG [F2] gives $b^2a$. Translation by any integer vector with even coordinate sum preserves the lattice, the periodic FK law, and this estimate. Restricting a taller crossing at its first hit of any intermediate integer height gives a crossing of the truncated rectangle. [F2, F4, F5, construct, algebra]

2.1 Suppose $n\geq32$. Set $k=\lfloor n/32\rfloor$, $L=16k$, $h=4k=L/4$, $W=\lceil\alpha n\rceil$ and $J=\lceil W/h\rceil$. For $0\leq j\leq J$ put $a_j=jh$, $b_j=-jh$, and take the closed squares
$$Q_j=[a_j,a_j+L]\times[b_j,b_j+L].$$
For $0\leq j<J$ take the closed connectors
$$C_j=[a_j+h,a_j+L]\times[b_j-h,b_j+L].$$
Each connector has width $12k$ and height $20k$. Since $a_j+b_j=0$, every vertex of every square and connector has original coordinate $0\leq y=(u+v)/2\leq L\leq n$. The corner translations $(jh,-jh)$ preserve $P$. Every square embeds and has horizontal crossing probability at least $a$ by [F4], since $L<m$. A vertical aspect-two rectangle of the same connector width $S=12k$, starting at its bottom, has height $24k<n<m$. Step 1.2 bounds its vertical crossing probability below by $d$. Truncation at height $20k$ implies a vertical crossing of $C_j$, so that event too has probability at least $d$. Its witness may use the taller box to establish the numerical bound, but the event being intersected below is supported on $C_j$ itself. [F4, step 1.1, step 1.2, given, construct, algebra]

3.1 Require horizontal crossings of all $Q_j$ and vertical crossings of all $C_j$. In $Q_j\cap C_j$ the horizontal path has a subpath crossing its width-$12k$ span, while the vertical path has a subpath crossing its full height-$L$ span. They intersect by [F5]. The same applies to $Q_{j+1}\cap C_j$, whose height-$L$ span is shifted down by $h$. Thus the union is a connected actual-open-edge set. A left endpoint of the $Q_0$ crossing has $u=0$ and hence $x\leq0$. A right endpoint of the $Q_J$ crossing has $u=Jh+L$ and $v\leq-Jh+L$, hence $x\geq Jh\geq W$. Their joined path stays in $0\leq y\leq n$ by step 2.1. Truncate this path between its last vertex on $x=0$ before its first hit of $x=W$. It gives the required ordinary-grid crossing of $\{0,\ldots,W\}\times\{0,\ldots,n\}$. The patches need not jointly embed: lift the periodic configuration to the plane and choose the guaranteed crossings in these fixed lifts. Their adjacent overlaps are literal planar overlaps. The final target itself embeds, since $W<m$ and $n<m$, so its projected crossing is unambiguous. [F5, step 1.1, step 2.1, construct, algebra]

4.1 By finite FKG [F2], the joint event in step 3.1 has probability at least $a^{J+1}d^J\geq\min(a,d)^{2J+1}$. Because $k\geq n/64$ for $n\geq32$, $h\geq n/16$ and $h\geq4$. Hence $J\leq W/h+1\leq16\alpha+5/4$ and $2J+1\leq32\alpha+7/2$. Its probability is at least $\min(a,d)^{\lceil32\alpha+5\rceil}>0$, independently of $n,m$. When $1\leq n<32$, use the fixed ordinary horizontal row of $W$ edges. All its labels are distinct since $W<m$. Repeated conditioning with [F2] gives probability at least $\rho^W\geq\rho^{\lceil32\alpha\rceil}$. The minimum of these two positive constants is a permissible $c(\alpha,q)$. This proves the stronger ceiling-width statement for all stated sizes. [F2, step 2.1, step 3.1, algebra] ∎

## Remarks

The auxiliary rotated boxes have closed sides and scales divisible by four; these conventions are used only in the proof. The target is the stated ordinary square-grid rectangle for every positive integer size. The local mixed-reflection supplier uses first intersection along the vertical path; the earlier first-along-reflected-path prescription is not used. Its finite counterexample and correction history are retained in the owner research directory.

