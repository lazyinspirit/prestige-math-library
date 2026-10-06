---
id: ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles
kind: example
title: The pair of pants is a cobordism realizing addition of circles
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-oriented-smooth-cobordism
  - thm-smooth-cobordism-is-an-equivalence-relation
  - def-unoriented-and-oriented-bordism-groups
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - ex-a-circle-is-the-boundary-of-a-disk
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-boundary-defining-function
  - prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors
  - thm-euclidean-inverse-function-theorem
  - def-induced-boundary-orientation
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-euclidean-spheres-and-closed-balls
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-euclidean-upper-half-space-and-its-boundary
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-collar-of-a-manifold-boundary
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
  - def-compact-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post-5a.json"
    content_sha256: "817fa487e7fe078a3da37e17f445b9f0458a953150bad8cea1a61800c1220e41"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Disjoint union and the abelian group structure, printed pp.10-12"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, disjoint-union addition and products, printed pp.243-248"
---

## Example

Let $P=\{(x,y)\in\mathbb R^2:\|(x,y)\|\le2,\ \|(x,y)-(1,0)\|\ge\tfrac12,\
\|(x,y)+(1,0)\|\ge\tfrac12\}$, the closed disk of radius $2$ with two disjoint
open disks of radius $\tfrac12$ removed. Then $P$ is a compact oriented smooth
surface with boundary three circles, and with the outward-normal-first
orientation its boundary is $-(C_1\sqcup C_2)\sqcup C_0$, where $C_0$ is the
outer circle and $C_1,C_2$ are the two inner circles, all three carrying their
counterclockwise orientations. Hence $P$ is an oriented bordism from
$C_1\sqcup C_2$ to $C_0$ and exhibits in $\Omega_1^{SO}$ the additive relation
$[C_1]+[C_2]=[C_0]$
([[def-unoriented-and-oriented-bordism-groups]]); all three classes are zero
by the disk example ([[ex-a-circle-is-the-boundary-of-a-disk]]), so the
example illustrates disjoint-union addition rather than an independent
invariant.

## Facts & Assumptions

**Given:** The set $P$ above, the outer circle $C_0=S_2(0,2)$, the inner circles $C_-=S_2((1,0),\tfrac12)$ and $C_+=S_2((-1,0),\tfrac12)$, the standard orientation of $\mathbb R^2$, and the induced orientation of $P$ and of its boundary.

[F1] At a boundary point of a planar region where exactly one smooth defining function $\rho$ vanishes and $d\rho\ne0$, choose a coordinate whose derivative of $\rho$ is nonzero. Use the other coordinate together with $\rho$ as a local coordinate map. The inverse function theorem gives its $C^1$ inverse, which is smooth by induction from the inverse-derivative formula; restricting to $\rho\ge0$ gives a half-space chart, and ambient smooth transitions give a smooth boundary atlas ([[thm-euclidean-inverse-function-theorem]], [[def-euclidean-upper-half-space-and-its-boundary]], [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], [[def-boundary-defining-function]]). The interior has Euclidean charts ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]). Euclidean closed balls are compact and closed subsets of compact spaces are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[F2] Boundary orientation is outward-normal-first ([[def-induced-boundary-orientation]]). If $r=p-c$ is the radial vector of a circle in the standard plane, $\det(r,Jr)=|r|^2>0$. A normal pointing away from $c$ therefore gives the counterclockwise tangent $Jr$, while a normal pointing toward $c$ gives the clockwise tangent $-Jr$ ([[def-oriented-smooth-manifold-and-oriented-chart]], [[ex-a-circle-is-the-boundary-of-a-disk]]).

[F3] A bordism from a closed $n$-manifold $M_0$ to $M_1$ is data with a decomposition of the boundary into open and closed parts and collar embeddings of fixed widths; an oriented bordism additionally requires the induced boundary orientation to be the negative of the source orientation on the incoming face and the target orientation on the outgoing face ([[def-oriented-smooth-cobordism]], [[def-smooth-collar-of-a-manifold-boundary]], [[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]).

[F4] The bordism classes of closed oriented $1$-manifolds form the abelian group $\Omega_1^{SO}$ with $[M]+[N]=[M\sqcup N]$, and orientation-preserving diffeomorphic circles have equal class ([[thm-disjoint-union-makes-bordism-classes-abelian-groups]], [[thm-smooth-cobordism-is-an-equivalence-relation]], [[def-unoriented-and-oriented-bordism-groups]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Verification

1.1 ($P$ is a compact smooth surface with boundary the three circles.) Introduce the smooth functions $\rho_0(x)=4-\|x\|^2$, $\rho_-(x)=\|x-(1,0)\|^2-\tfrac14$ and $\rho_+(x)=\|x+(1,0)\|^2-\tfrac14$ on $\mathbb R^2$; then $P=\{x:\rho_0(x)\ge0,\ \rho_-(x)\ge0,\ \rho_+(x)\ge0\}$. On $C_0=\{x:\rho_0(x)=0\}$ we have $|x|=2$, so $\|x\mp(1,0)\|\ge 2-1=1>\tfrac12$ and the other two functions are strictly positive; on $C_\pm=\{x:\rho_\pm(x)=0\}$ we have $\|x\pm(1,0)\|=\tfrac12$, so $\|x\|\le 1+\tfrac12=\tfrac32<2$ and, since the two inner centres are at distance $2$ and the radii sum to $1$, $\|x\mp(1,0)\|\ge 2-\tfrac12=\tfrac32>\tfrac12$. Hence the three circles are pairwise disjoint and each boundary point of $P$ lies on exactly one of them, where exactly one defining function vanishes with nonzero gradient. Each such point therefore has a boundary chart obtained from that defining function by the inverse function theorem, so $P$ is a compact smooth surface with boundary $C_0\sqcup C_1\sqcup C_2$; compactness follows because $P$ is a closed subset of the compact disk $\{|x|\le2\}$. [F1]

2.1 (The induced orientations of the three circles.) Give $P$ the orientation induced from the standard orientation of $\mathbb R^2$. At a point $p\in C_0$ the outward normal of $P$ is the radial unit vector $p/2$, and $(p/2,Jp/2)$ is a positive basis of $\mathbb R^2$, where $J$ is the quarter-turn; by the outward-normal-first rule the positive tangent direction of $C_0$ is $Jp$, the counterclockwise direction. At a point $p\in C_\pm$, let $c$ be the centre of that circle; the removed disk lies outside $P$ in the direction $c-p$, so the outward normal of $P$ at $p$ is the unit vector $(c-p)/|c-p|=2(c-p)$, and $(2(c-p),2J(c-p))$ is again a positive basis; hence the positive tangent direction is $J(c-p)=-J(p-c)$, which is the clockwise direction of the circle centred at $c$. So the induced orientation of the outer circle is counterclockwise and that of each inner circle is clockwise, i.e. the oriented boundary is $C_0-C_1-C_2=-(C_1\sqcup C_2)\sqcup C_0$. [F2, step 1.1]

3.1 ($P$ is an oriented bordism from $C_1\sqcup C_2$ to $C_0$.) Take the incoming boundary part $(\partial P)_0=C_1\sqcup C_2$ with the source orientations counterclockwise on both circles, and the outgoing part $(\partial P)_1=C_0$; the induced orientations computed in step 2.1 are clockwise on $C_1,C_2$, which is the negative of the source orientation on the incoming part, and counterclockwise on $C_0$, which is the target orientation. The radial parametrisations $\theta_0(s,p)=c+(1+\tfrac{s}{4})(p-c)$ for $p$ in an inner circle with centre $c$, and $\theta_1(s,p)=(1+\tfrac{s}{4})p$ for $p\in C_0$, $s\in[0,1)$ respectively $s\in(-1,0]$, are smooth embeddings onto collar neighbourhoods of the corresponding boundary circles: their images have radii $\tfrac12(1+\tfrac{s}{4})\in[\tfrac12,\tfrac58)$ and $2+\tfrac{s}{2}\in(\tfrac32,2]$ in the relevant radial directions and lie in $P$ by the estimates of step 1.1. Hence $P$ with these collars and this orientation is an oriented bordism from $C_1\sqcup C_2$ to $C_0$. [F3, step 1.1, step 2.1]

4.1 (The additive relation; all classes vanish.) By step 3.1 the cobordism class of $C_1\sqcup C_2$ equals that of $C_0$, that is, $[C_1]+[C_2]=[C_0]$ in $\Omega_1^{SO}$ by [F4]. Each of the three circles is the boundary of a Euclidean disk (with the counterclockwise orientation induced by the standard orientation of the plane, after the outer circle is viewed as the boundary of the disk it encloses and each inner circle as the boundary of the removed disk), so by the disk example, which applies to a circle with either orientation, all three classes are zero in $\Omega_1^{SO}$ and in $\Omega_1^{O}$; the relation therefore reads $0+0=0$ and exhibits the disjoint-union addition of the group structure rather than an independent invariant. [F4, step 3.1] ∎
