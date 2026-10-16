---
id: alg-qc-rz-efficient-scaled-grid-iterator
kind: algorithm
title: Efficient exact-denominator Rz grid iterator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-cyclotomic-one-dimensional-grid-enumeration
  - lem-qc-paired-ellipse-grid-uprighting
justified_by: [thm-qc-rz-efficient-scaled-grid-enumeration]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Sections 4–5 and Appendix A
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 3
---

## Definition

Inputs are $0<\varepsilon<1/2$ and the unit vector $w=e^{-i\theta/2}$, in the ideal exact-real arithmetic/comparison model. Put $h=\varepsilon^2/2$ and
$$ A=\{u:|u|\le1,\ \operatorname{Re}(\bar w u)\ge1-h\},\qquad B=\{u:|u|\le1\}. $$
The outer ellipse $E$ has center $(1-h/2)w$, semiaxes $h$ in direction $w$ and $2\sqrt h$ perpendicular to $w$. Compute $G$ simultaneously uprighting $E,B$ by [[lem-qc-paired-ellipse-grid-uprighting]], including its balancing operations, with $H=4/\varepsilon$. Retain this map for every layer. All subsequent coordinates are exact. Square roots in line/ellipse intersections are positive real exponentiation, or equivalently their comparisons can use sign tests and squared inequalities. Integer parts are obtained by bounded binary search, with their comparison cost charged.

Process denominator layers $k=0,1,\ldots$ in order. At $k=0$, enumerate the $81$ coefficient tuples $(a_0,a_1,a_2,a_3)\in\{-1,0,1\}^4$ in lexicographic order, form $u=a_0+a_1\omega+a_2\omega^2+a_3\omega^3$, and retain exactly those satisfying $u\in A$ and $u^\bullet\in B$. At $k\ge1$, run three disjoint subproblems, indexed by $r\in\{1,\omega,1+\omega\}$: write
$$ u=(r+\sqrt2 v)/(\sqrt2)^k,\qquad v\in\mathbb Z[\omega], $$
and impose the corresponding affine constraints on $v,v^\bullet$. In each subproblem apply $G$ to $v$ and $G^\bullet$ to $v^\bullet$, and replace the constraints by their affine images. Their outer ellipses are translated/scaled copies of $G(E),G^\bullet(B)$. For each of the two lattice cosets $v'=\alpha+i\beta+s\omega$, $s=0,1$, translate both constraint sets appropriately, remembering that $\omega^\bullet=-\omega$. The unknowns $\alpha,\beta$ then lie in $\mathbb Z[\sqrt2]$.

Construct a finite proposal domain for each resulting subproblem as follows. Let $I_x,I_y$ be the coordinate intervals of its first outer ellipse's bounding box, and $J_x,J_y$ those of its second; set $P_x=|I_x||J_x|$, $P_y=|I_y||J_y|$ and the fixed constant $T=4\lambda^3 64^2$, $\lambda=1+\sqrt2$.

- If both $P_x,P_y\ge T$, use the Cartesian product of the two one-dimensional proposal lists from [[lem-qc-cyclotomic-one-dimensional-grid-enumeration]]. Filter each proposal by the original exact cap and disk inequalities after inverse transformations.
- Otherwise take a coordinate with product less than $T$, enumerate and filter its one-dimensional list completely, and retain its finitely many actual coordinate solutions. For each, compute the two exact remaining-coordinate slice intervals of the transformed cap and disk. Each is the intersection of a quadratic interval and a linear half-line; compute it by the quadratic formula and sign tests, declaring it empty when appropriate. Use the one-dimensional proposal list on these slice intervals, including its singleton rule, and test both original constraints. Before normalizing a positive first slice width $\delta$ with second width $\Delta$, if $\delta<1/(\Delta+1)$, enlarge that first interval concentrically to width $1/(\Delta+1)$ and retain the original slice inequalities as filters; its new length product is at most one. For singleton second intervals first use the singleton enlargement of the one-dimensional lemma. This padding prevents arbitrarily small slice widths from causing an unbounded unit-rescaling exponent.

Each component is a Cartesian index range or one of finitely many one-dimensional ranges. Keep their lengths and prefix sums, so a domain index specifies one proposal without materializing a long list. Map a retained point back to $u$. Maintain a set of already emitted exact coefficient tuples for the current layer.

To stream the layer, interleave a random proposal attempt with the next index of an exhaustive sequential scan. For domain size $M>0$, a random attempt draws $q=\lceil\log_2 M\rceil$ unbiased bits and treats them as an integer $z$. If $z<M$, visit proposal $z$; otherwise omit the random visit on this iteration. In either case advance the exhaustive scan by one index. Thus accepted random visits are uniform and a random attempt is accepted with probability at least $1/2$, while rejection cannot block the exhaustive scan. At each visit emit its retained $u$ if not already emitted. Stop the layer once the sequential scan finishes, then discard its emitted set and advance to $k+1$. For an empty proposal domain advance immediately. This is a randomized within-layer order with deterministic finite-layer completion; it promises no lexicographic tie order. The enumeration and its complexity are established in [[thm-qc-rz-efficient-scaled-grid-enumeration]].
