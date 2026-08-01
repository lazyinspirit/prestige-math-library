---
id: ex-niemytzki-plane-metrization-profile
kind: example
title: "Under choice, the Niemytzki plane is Tychonoff and locally metrizable but not normal, paracompact, or metrizable"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-locally-metrizable-space, def-completely-regular-and-tychonoff-spaces, def-hausdorff-space, def-t0-and-t1-spaces, thm-basis-criterion, def-topology-basis-subbasis, lem-jones-normal-density-discrete-bound, cor-cauchy-reals-lub-complete, thm-of-archimedean, thm-cantor-set-ternary-description, thm-rationals-countable, lem-of-q-dense, lem-of-q-embeds, lem-cardinal-operations-are-well-defined, thm-product-of-countable, lem-subset-of-countable, def-countable, thm-cantor-powerset, thm-schroder-bernstein, thm-stone-metric-spaces-are-paracompact, thm-paracompact-hausdorff-implies-normal, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Chodounský, Non-normality and relative normality of Niemytzki plane"
      url: "https://eudml.org/doc/196374"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. On $M=\mathbb R\times[0,\infty)$, take ordinary Euclidean disks about points of positive height and, at $(a,0)$, the sets consisting of $(a,0)$ together with an open Euclidean disk tangent to the boundary there. The resulting Niemytzki plane is Tychonoff and locally metrizable, but not normal, paracompact, or metrizable.

## Facts & Assumptions

**Given:** The tangent-disk family described in the example and the Axiom of Choice.

[L1] A family covering every point and admitting a contained member around each point of an intersection is a basis ([[thm-basis-criterion]]).

[L2] Under choice, if a closed discrete subspace $D$ of a normal space has dense subset $E$, then $2^{|D|}\le2^{|E|}$ ([[lem-jones-normal-density-discrete-bound]]).

[L3] The projection identifies $D=\mathbb R\times\{0\}$ with $\mathbb R$. The Cauchy-sequence real field is complete ordered and hence Archimedean, and $\mathbb R\approx\mathcal P(\mathbb N)$: the ternary Cantor construction injects binary sequences into $\mathbb R$; rational cuts inject $\mathbb R$ into $\mathcal P(\mathbb Q)$; $\mathbb Q\approx\mathbb N$ transports this to $\mathcal P(\mathbb N)$; and the characteristic-function bijection together with Schröder--Bernstein closes the two injections ([[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]], [[thm-cantor-set-ternary-description]], [[lem-of-q-dense]], [[lem-of-q-embeds]], [[thm-rationals-countable]], [[lem-cardinal-operations-are-well-defined]], [[thm-schroder-bernstein]]).

[L4] $E=\mathbb Q\times\mathbb Q_{>0}$ is at most countable: $\mathbb Q$ is countably infinite, $\mathbb Q_{>0}\subseteq\mathbb Q$ is at most countable, and a product of two at-most-countable sets is at most countable. In particular $E$ injects into $\mathbb N$ ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[thm-product-of-countable]], [[def-countable]]).

[L5] There is no bijection $\mathcal P(\mathbb N)\approx\mathcal P(\mathcal P(\mathbb N))$, while injections in both directions would yield one ([[thm-cantor-powerset]], [[thm-schroder-bernstein]]). A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

[L6] Complete regularity separates every point from every disjoint closed set by a continuous $[0,1]$-valued map, and Tychonoff means complete regular plus $T_1$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L7] Hausdorff means that distinct points have disjoint open neighbourhoods, while $T_1$ asks for an open set about each of two distinct points that misses the other ([[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

## Verification

**Proof technique:** contradiction.

1.1 Tangent disks and ordinary disks satisfy [L1]: intersections at a positive-height point contain a small ordinary disk, and a tangent disk at a boundary point contains a smaller tangent disk. Distinct points have disjoint such members: use small ordinary disks above the boundary, and for a boundary point $(a,0)$ choose a sufficiently small tangent disk, whose closure is tangent only at $(a,0)$. Thus $M$ is Hausdorff and hence $T_1$ by the two disjoint opens. The boundary $D=\mathbb R\times\{0\}$ is closed and discrete, while $E=\mathbb Q\times\mathbb Q_{>0}$ is countable and dense by the rational-density property. [L1, L7]

1.2 Suppose the plane were normal. Then [L2] gives an injection $\mathcal P(D)\to\mathcal P(E)$. For the cardinal bridge in [L3], binary sequences map bijectively to the Cantor set and hence inject into $\mathbb R$; $x\mapsto\{q\in\mathbb Q:\iota(q)<x\}$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$ by rational density; $\mathbb Q\approx\mathbb N$ transports the latter to $\mathcal P(\mathbb N)$; and characteristic functions identify $\mathcal P(\mathbb N)$ with binary sequences. Schröder--Bernstein therefore gives $\mathbb R\approx\mathcal P(\mathbb N)$, and the projection transports this to $D\approx\mathcal P(\mathbb N)$. By [L4], an injection $E\to\mathbb N$ induces an injection $\mathcal P(E)\to\mathcal P(\mathbb N)$, while the just-established bijection gives $\mathcal P(D)\approx\mathcal P(\mathcal P(\mathbb N))$. Their composite is therefore an injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$. The singleton map supplies the reverse injection, so [L5] makes this impossible. [assume-contra, L2, L3, L4, L5]

2.1 The tangent-disk coordinate charts obtained by radial projection from the tangency point give metrizable neighbourhoods at boundary points; Euclidean disks do so above the boundary. To separate a point $p$ from a closed $F$ not containing it, first take a basic neighbourhood of $p$ disjoint from $F$. If $p=(a,0)$, choose a tangent disk $T_r(p)$ disjoint from $F$ and define $f(p)=1$ and, for $(u,v)$ with $v>0$, $$f(u,v)=\max\!\left\{0,1-\frac{(u-a)^2+v^2}{rv}\right\}.$$ Its support is the smaller tangent disk $T_{r/2}(p)$, and $f\to1$ at $p$ because $(u-a)^2+v^2<\varepsilon rv$ is exactly membership in a sufficiently small tangent disk. It is ordinarily continuous above the boundary and zero on a tangent neighbourhood of every other boundary point, so it is continuous on $M$ and vanishes on $F$. If $p$ has positive height, an ordinary Euclidean bump supported in a small disk disjoint from $F$ and from the boundary has the same properties, extended by zero elsewhere. Thus $M$ is completely regular; with the $T_1$ conclusion of step 1.1, [L6] makes it Tychonoff and locally metrizable. [L6, step 1.1]

3.1 Hence the plane is not normal. If it were paracompact, its Tychonoff property gives Hausdorffness and [L5] would make it normal; if it were metrizable, [[thm-stone-metric-spaces-are-paracompact]] would make it paracompact. Both are impossible. [L5, step 2.1, step 1.2]

4.1 This proves the stated profile. [step 2.1, step 3.1, discharge-contradiction] ∎
