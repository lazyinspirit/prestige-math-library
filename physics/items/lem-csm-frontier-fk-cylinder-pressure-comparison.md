---
id: lem-csm-frontier-fk-cylinder-pressure-comparison
kind: lemma
title: "Numerical FK cylinder limits and pressure comparison"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-fk-real-boundaries
  - lem-csm-frontier-fk-fkg-spatial-markov
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
axiom_use: "No choice axiom is used: numerical cylinder limits and finite sums are constructed here, not a countably additive infinite-volume law."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey Grimmett, The Random-Cluster Model"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Section 4.5, printed pp. 85–91, Theorems 4.58 and 4.63 and equations (4.54)–(4.78); the local proof separates numerical cylinder limits from measure extension."
verification:
  precheck: pass
---

## Statement

Let $q\geq1$ be a finite real number. On the nearest-neighbor square lattice let $\Lambda_n=\{-n,\ldots,n\}^2$, let $E_n$ consist of edges with both endpoints in $\Lambda_n$, and let $B_n=\{x\in\Lambda_n:\|x\|_\infty=n\}$. For $p\in(0,1)$ and a partition $\xi$ of $B_n$, give $A\subseteq E_n$ probability proportional to $p^{|A|}(1-p)^{|E_n\setminus A|}q^{k_\xi(A)}$, where $k_\xi$ counts components after the partition classes are identified. Write $\phi^b_{n,p,q}$ for the free partition when $b=0$ and the one-class wired partition when $b=1$.

For every event $C$ determined by finitely many edge coordinates, the numerical limits
$$\pi^b_{p,q}(C):=\lim_{n\to\infty}\phi^b_{n,p,q}(C),\qquad b\in\{0,1\},$$
exist. They are consistent, nonnegative normalized finite-coordinate probability families, invariant under translations and quarter-turns. On increasing cylinder events they are increasing in $p$, with $\pi^0\leq\pi^1$. Every cylinder-probability limit of arbitrary boundary partitions lies between these two families on increasing cylinder events. There is an at most countable set $D_q\subset(0,1)$ such that $\pi^0_{p,q}(C)=\pi^1_{p,q}(C)$ for every cylinder event $C$ whenever $p\notin D_q$.

Let $D_r$ be the event that actual open edges inside $\Lambda_r$ join $0$ to $B_r$, and define the real numbers
$$\Theta_b(p,q)=\inf_{r\geq1}\pi^b_{p,q}(D_r).$$
Then $\Theta_1(p,q)\leq\Theta_0(p',q)$ for $0<p<p'<1$, and
$$\lim_{n\to\infty}\phi^1_{n,p,q}(0\leftrightarrow B_n)=\Theta_1(p,q).$$
Connections here use actual edges, not artificial boundary-identification paths. These are statements about real limits and finite probability tables; existence of a countably additive probability on the infinite configuration space is not asserted.

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

## Facts & Assumptions

**Given:** Finite real $q\geq1$, $p\in(0,1)$, the finite box laws in the Statement, and cylinder events depending on a fixed finite set of edges.

[F1] The positive finite FK weights and arbitrary boundary partitions are defined in [[def-csm-frontier-fk-real-boundaries]].

[F2] Finite FK laws have spatial Markov conditioning, positive association and monotonicity in parameter and boundary wiring. Their common-uniform heat-bath coupling preserves coordinatewise order and converges to the corresponding finite laws [[lem-csm-frontier-fk-fkg-spatial-markov]].

## Proof

**Proof technique:** finite boundary comparison, positive-activity tiling and one-variable convexity.

**Given:** [F1]–[F2] and the data in the Statement.

1.1 If $n<m$, condition the law on $E_m$ on edges outside $E_n$. Its induced partition on $B_n$ refines the wired partition and is coarser than the free partition. By [F2], free laws increase under restriction as volume grows and wired laws decrease. Every all-open event on a fixed finite set therefore has a bounded monotone sequence of probabilities. An atom prescribing open edges $O$ and closed edges $H$ has probability $\sum_{T\subseteq H}(-1)^{|T|}\phi(\text{all edges of }O\cup T\text{ open})$. Finite inclusion-exclusion gives the limit of every atom and hence every cylinder event. Limits of finite sums preserve positivity, normalization and all restriction-consistency identities. No measure extension is used. [F1, F2, algebra]

1.2 Write $h=\log(p/(1-p))$ and $v=e^h$. For $Q_N=\{0,\ldots,N-1\}^2$ define the activity sum and its volume normalization
$$Y_N^b(h)=\sum_{A\subseteq E(Q_N)}e^{h|A|}q^{k_b(A)},\qquad F_N^b(h)=N^{-2}\log Y_N^b(h).$$
The finite law is unchanged by replacing the original weights by these activity weights. Since $1\leq q^{k(A)}\leq q^{N^2}$ and $|E(Q_N)|=2N(N-1)$, one has $0\leq F_N^0(h)\leq\log q+2\log(1+e^h)$. For fixed $L$, write $N=kL+s$, $0\leq s<L$, tile the $kL$-square by $k^2$ disjoint $L$-squares, and leave the remaining vertices as singletons. Restricting the sum to configurations closing every interpiece edge gives
$$Y_N^0(h)\geq (Y_L^0(h))^{k^2}q^{N^2-k^2L^2}.$$
Closed edges have activity factor $1$ and component factors multiply over the pieces. Hence $\liminf_NF_N^0(h)\geq F_L^0(h)$ for each $L$. The finite bound above and $F_N^0\leq\sup_LF_L^0$ prove that $F(h)=\lim_NF_N^0(h)=\sup_LF_L^0(h)$ exists and is finite. [F1, algebra]

2.1 The same comparison holds for any two nested translated boxes. For a fixed $z\in\mathbb Z^2$, put $r=\|z\|_\infty$; then $\Lambda_{n-r}\subseteq\Lambda_n+z\subseteq\Lambda_{n+r}$. For every fixed increasing cylinder event, the translated free probability is sandwiched between those from the two unshifted boxes, with reverse order for wired probabilities. Their limits coincide by step 1.1. Inclusion-exclusion gives equality for all cylinders. Quarter-turn invariance holds already in each centered finite box. Thus each edge orientation and position has the same limiting open probability $u_b(p,q)$. Parameter monotonicity and $\pi^0\leq\pi^1$ follow from [F2]. For an arbitrary-boundary cylinder limit $\nu$, condition on the exterior of a fixed box $\Lambda_r$, use $\phi^0_r(C)\leq\nu_j(C)\leq\phi^1_r(C)$ for increasing $C$ supported inside it, pass to the given numerical limit, then let $r\to\infty$. This proves the asserted sandwich. [F2, step 1.1, algebra]

2.2 Wiring boundary vertices lowers component counts by an integer between $0$ and $|\partial Q_N|-1$, so
$$q^{-(|\partial Q_N|-1)}Y_N^0(h)\leq Y_N^\xi(h)\leq Y_N^0(h).$$
As $|\partial Q_N|\leq4N$, every boundary partition has the same pressure limit $F(h)$. Differentiating the finite sums gives
$$(F_N^b)'(h)=N^{-2}\mathbb E^b_{Q_N,h,q}|A|,\qquad (F_N^b)''(h)=N^{-2}\operatorname{Var}^b_{Q_N,h,q}(|A|)\geq0.$$
Thus these functions and their finite pointwise limit $F$ are convex. [F1, step 1.2, algebra]

3.1 Ordered secant slopes of a finite convex function have finite one-sided limits $F'_-(h)\leq F'_+(h)$, bounded locally by secants to fixed points on either side. If $h<k$ then $F'_+(h)\leq F'_-(k)$. Therefore the nonempty intervals $(F'_-(h),F'_+(h))$ at nondifferentiability points are pairwise disjoint. Assign each its first rational in a fixed enumeration: this is an injection into a countable set. Let $D_q$ be the image of these at most countably many $h$ under $h\mapsto e^h/(1+e^h)$. At a differentiability point, for each $t>0$ convexity gives
$$\frac{F_N^b(h)-F_N^b(h-t)}{t}\leq(F_N^b)'(h)\leq\frac{F_N^b(h+t)-F_N^b(h)}{t}.$$
Pass to lower and upper numerical limits as $N\to\infty$, then let $t\downarrow0$; the common pressure limit proves $(F_N^b)'(h)\to F'(h)$ for both boundaries. [step 2.2, algebra]

4.1 Finite free edge probabilities in $Q_N$ are at most the infinite-volume numerical value $u_0$, and finite wired ones are at least $u_1$, by nested-box comparison and step 2.1. Thus
$$(F_N^0)'(h)\leq(2-2/N)u_0\leq(2-2/N)u_1\leq(F_N^1)'(h).$$
At $p\notin D_q$ both outside quantities tend to $F'(h)$, so $u_0=u_1$. For an arbitrary cylinder event $C$ supported on $H$, use the common-uniform ordered finite heat-bath chains from [F2]. At every time the difference of their $C$ probabilities in absolute value is at most their probability of differing on $H$, which by order and a union bound is at most the sum over $e\in H$ of their mean edge differences. Let time tend to infinity, then the finite box tend to the lattice. This gives
$$|\pi^1_{p,q}(C)-\pi^0_{p,q}(C)|\leq |H|(u_1-u_0)=0.$$
This proves equality of the numerical families, without constructing an infinite coupling or law. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $p<p'$, select one $t\in(p,p')\setminus D_q$. Such a point exists because a countable set cannot fill a real interval; it requires no sequence of arbitrary choices. For every increasing cylinder event $C$,
$$\pi^1_{p,q}(C)\leq\pi^1_{t,q}(C)=\pi^0_{t,q}(C)\leq\pi^0_{p',q}(C).$$
Apply this to $D_r$ and take the infimum over $r$ to obtain $\Theta_1(p,q)\leq\Theta_0(p',q)$. Finally let $a_n=\phi^1_{n,p,q}(D_n)$. For $m\geq r$, truncation of a path at its first smaller-boundary hit and [F2] give $a_m\leq\phi^1_{m,p,q}(D_r)\leq a_r$. In particular $a_n$ decreases to a real $L$. Letting $m\to\infty$ gives $L\leq\pi^1_{p,q}(D_r)\leq a_r$. Taking the infimum over $r$ proves $L=\Theta_1(p,q)$. [F2, step 1.1, step 4.1, algebra] ∎

## Remarks

The proof constructs finite-coordinate numerical families. Turning them into countably additive Borel laws requires the separately stated measure-extension hypotheses. No equality of free and wired laws is asserted at an exceptional parameter.
