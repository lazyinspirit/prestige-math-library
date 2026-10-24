---
id: ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells
kind: example
title: "A compact set in an infinite non locally finite realization still meets finitely many cells"
status: published
origin: pipeline
deps: ["lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices", "def-open-and-closed-stars-in-a-subdivision"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Example

Let $K$ have vertices $o,v_1,v_2,\ldots$, edges $\{o,v_n\}$ and their faces, with weak realization topology. Every compact subset lies in finitely many edges although the vertex $o$ has infinitely many incident edges. An explicit compact subset is
$$C_0=\{(1-t)o+tv_1:0\leq t\leq1\}\ \cup\ \{(1-t)o+tv_2:0\leq t\leq1/2\}.$$
In contrast the set $Q=\{(1-1/n)o+(1/n)v_n:n\geq1\}$ is closed discrete and not compact. For this countably indexed fan the conclusion for every compact subset has the choice-free proof below.

## Source locators

Proposition A.1 p.520, simplicial specialization.


## Facts & Assumptions

[F1] Stars and weak topology use simplexwise coordinates. [[def-open-and-closed-stars-in-a-subdivision]].


## Verification

**Given:** The countably indexed fan with weak topology and, when proving the universal claim, a compact subset $C$.

1.1 The two segments defining $C_0$ are continuous images of compact closed real intervals, so their finite union is compact. Its positive supports are $\{o\}$, $\{v_1\}$, $\{o,v_1\}$ and $\{o,v_2\}$, exactly four open simplices in two edges. Any neighbourhood of $o$ intersects each edge in a relative neighbourhood of its endpoint, hence meets the interior of every edge. Thus $o$ is not locally finite. [F1]

1.2 Each closed edge meets $Q$ in exactly one point, and the central vertex is not in $Q$. Every subset of $Q$ therefore has finite closed traces on every simplex and is weakly closed. In particular $Q$ is closed and discrete, and its singleton cover has no finite subcover. The numerical parameter $1/n$ tending to zero does not imply convergence to $o$ in the weak topology: $|K|\setminus Q$ is an open neighbourhood of $o$ missing all these points. [F1]

1.3 For a compact nonempty $C$, the coordinate $x\mapsto x_{v_n}$ is continuous because it is continuous on every simplex. Let $m_n=\sup\{x_{v_n}:x\in C\}\in[0,1]$. This supremum is attained: otherwise the sets $\{x\in C:x_{v_n}<m_n-1/k\}$ for positive integers $k$ would cover $C$, and a finite subcover would bound all coordinates by $m_n-1/k_0$ for its largest index $k_0$, contradicting the supremum. If $m_n>0$, there is exactly one point of the entire fan with coordinate $x_{v_n}=m_n$, namely $p_n=(1-m_n)o+m_nv_n$, so this point belongs to $C$. These points are canonical and require no countable selections. [given]

2.1 If infinitely many $m_n$ are positive, the corresponding $p_n$ form an infinite set with at most one point on each edge, every subset of which is weakly closed just as for $Q$. It is therefore closed in compact $C$, and is compact (adjoin its open complement to any cover to see this directly). Yet it is discrete with an infinite singleton cover, a contradiction. Only finitely many $m_n$ are positive, so $C$ lies in their edges and possibly $o$; if none are positive use the first edge to contain $o$. For empty $C$ no edge is needed. [step 1.2, step 1.3] ∎


## Remarks

Under Countable Choice the general result [[lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices]] supplies the compact-support conclusion immediately. The specialized maximum-coordinate argument above proves this countably indexed example without adding that hypothesis. The supplied instance $C_0$ and the noncompact set $Q$ are explicit, rather than unspecified selections of points on the edges.
