---
id: thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness
kind: theorem
title: "Totally real boundary bubble-tree compactness under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-smooth-strip-compactness-away-from-energy-concentration, lem-finite-energy-almost-complex-puncture-removability, lem-soft-rescaling-captures-isolated-interior-energy-atoms, lem-soft-rescaling-captures-isolated-totally-real-boundary-energy-atoms]
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aleksey Zinger, Notes on J-Holomorphic Maps"
      url: "https://arxiv.org/abs/1706.00331"
      locator: "Full interior tree induction on printed pages 44–48 read; boundary induction proved below using actual local boundary suppliers"
---

## Statement

Assume Countable Choice. Let $S$ be a fixed compact bordered Riemann surface with smooth boundary, $(X,g)$ compact, and $J_n(z,x)$ smooth families of almost complex structures converging smoothly on $S\times X$ to $J_\infty$. For each boundary component $C_j$ fix a compact half-dimensional submanifold $L_j$ and a smooth boundary complex structure $J_{b,j}$ for which $L_j$ is totally real. Assume $J_n(z,x)=J_{b,j}(x)$ for $z\in C_j$, $x\in L_j$, independent of $n,z$. Let smooth solutions $u_n:S\to X$ have boundary values on the corresponding $L_j$ and energies at most $E_0$.

After a subsequence they have a smooth base limit off finitely many points, smoothly filled across those points, together with a finite forest of attached spheres and disks. Interior base atoms have sphere trees. Boundary atoms on $C_j$ have disk trees with boundary on $L_j$, with sphere trees also allowed at interior points of those disks. All bubbles over $p$ solve the autonomous equation for $J_\infty(p,x)$. Sphere children attach their infinity at an interior node of a parent; disk children attach their boundary infinity at a boundary node of a parent. Component values agree at every node, and distinct children have distinct attachment points.

The base converges smoothly away from its atoms, including boundary derivatives. Every bubble is a smooth rescaled limit off its child points, in explicit local source coordinates; relative child scales tend to zero and their centers to the parent attachment points. Each constant sphere has at least three nodes. Each constant disk has $b+2i\ge3$, where $b$ and $i$ count its boundary and interior nodes. There is no lost energy:
$$\lim_nE_g(u_n)=E_g(u)+\sum_vE_g(u_v).$$
All connecting annuli or half-annuli have vanishing energy and image diameter in the successive parent/child node limits. For a uniform $h>0$ the number of nonconstant bubbles is at most $\lfloor E_0/h\rfloor$, and the total number of bubble components is at most $3\lfloor E_0/h\rfloor$.

The source is fixed and has smooth boundary; punctured strip ends, their breaking, source degeneration, and gluing are separate assertions.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The fixed smooth bordered source, compact target, smooth coefficient convergence, fixed totally real boundary data, and actual bounded-energy solutions in the statement.

[F1] The local proof of [[lem-smooth-strip-compactness-away-from-energy-concentration]] extracts a smooth limit away from finitely many interior or boundary concentration points with the stipulated fixed boundary structures. Its disk and half-disk arguments are local in smooth conformal charts.

[F2] [[lem-finite-energy-almost-complex-puncture-removability]] fills finite-energy interior and boundary punctures here, and autonomous plane or half-plane limits at infinity.

[F3] [[lem-soft-rescaling-captures-isolated-interior-energy-atoms]] supplies an actual sphere rescaling step with total atom mass captured, connected parent value, finite child set, child masses in $[h,m-h]$, and at least two children for a constant sphere. Its proofs supply vanishing connecting-annulus energy and image diameter.

[F4] [[lem-soft-rescaling-captures-isolated-totally-real-boundary-energy-atoms]] supplies the corresponding actual disk step. Boundary child masses lie in $[h,m-h]$, interior child masses in $[h,m]$, and a constant disk has boundary-child count plus twice interior-child count at least two. It also supplies actual half-annulus collapse and node connection. All these statements have a common smaller uniform $h$.

## Proof

1.1 Pass to a subsequence with total energies converging to $E\le E_0$. Choose finitely many conformal disk and straight-boundary half-disk charts covering $S$. Smooth convergence of the coefficients and compactness give uniform local bounds and epsilon thresholds. Apply the actual countable extraction in [F1]: energy limits on a countable patch basis, finitely many exceptional points by disjoint-neighborhood energy counting, target-global first derivative estimates elsewhere, and target compactness and higher chart bootstrap give a smooth diagonal limit off those points. Remove any exceptional point admitting a further subsequence with bounded gradients on a neighborhood, at most finitely many times. The resulting finite set $P$ consists of genuine interior or boundary concentration points. Boundary convergence includes all one-sided derivatives by [F1]. [F1, given, construct, algebra]

2.1 The limiting map has finite energy by exhaustion. At every interior point of $P$ use the interior filling in [F2]. At a boundary point on $C_j$, the limiting coefficients remain smooth up to the edge and their restriction to $L_j$ is $J_{b,j}$, so the boundary filling in [F2] applies. Thus the base $u$ is smooth everywhere, with the same boundary conditions and the equation for $J_\infty$. Extract rational-radius energy limits in disjoint disk or half-disk neighborhoods of the points of $P$. Annular smooth convergence and filling imply $$\lim_nE_g(u_n;B_r^{(+)}(p))=m_p+E_g(u;B_r^{(+)}(p))$$ for every small radius, by subtracting two rational-radius limits and extending by continuity and monotone sandwiches. Each mass is positive and at least a uniform $h$: a genuine gradient blowup has a normalized plane or half-plane bubble with that lower bound and energy at most the atom, by [F3] and [F4]. Use the smaller of their uniform quanta over the finite source cover. [F2, F3, F4, step 1.1, construct, algebra]

3.1 Partition the source into those finitely many small disks and half-disks and their compact complement. On the complement energies converge smoothly; on each neighborhood they have the formula from step 2.1. Shrinking all these neighborhoods gives the exact base/atom identity $$E=E_g(u)+\sum_{p\in P}m_p.$$ This includes boundary atoms: the physical edge has area measure zero and introduces no missing region in that finite partition. [step 1.1, step 2.1, algebra]

4.1 First recall explicitly the interior induction furnished by [F3]. For an interior mass $m$, its root sphere has finite child set with $h\le m_z\le m-h$, and the sum of its energy and the child masses is $m$. Induction on $\lfloor m/h\rfloor$ therefore resolves every child in finitely many steps; the integer strictly decreases at each edge. Its connected finite sphere tree has total energy $m$, and every constant sphere has at least two children plus its parent node at infinity. This argument is local in a disk and applies to interior atoms occurring inside a disk bubble, not only to atoms on the original source. It uses the actual [F3] rescalings and estimates throughout. [F3, step 2.1, construct, algebra]

5.1 For a boundary mass $m$, use induction on $N=\lfloor m/h\rfloor$ with [F4]. Its root is a disk with finitely many boundary and interior child atoms. Each boundary child has integer mass bound at most $N-1$, so is resolved by the boundary induction hypothesis; when $N=1$ no boundary child exists because its mass would be both at least $h$ and at most $m-h<h$. Each interior child, even if its mass equals $m$, is resolved independently by the already established interior induction in step 4.1. Thus there is no circular induction on a child of unchanged boundary type. Finite branching and boundary depth at most $N$ prove termination, and all attached interior sphere trees are finite. The sum of the root energy and resolved child energies is $m$ by the actual mass balance in [F4]. [F4, step 4.1, construct, algebra]

6.1 These inductions give the actual domain and convergence properties. An interior rescaling is a complex translation and positive dilation in its parent coordinate. A boundary rescaling has real center and positive scale and hence preserves the upper half-plane. At each edge the child scale tends to zero relative to its parent, and its center tends to the finite attachment point, by [F3] or [F4]. Compose these maps along the finite path from a bubble to the original source chart; the resulting maps give precisely its smooth local limit off its finite child set. A child sphere attached inside a disk has an interior center, so after its scale tends to zero the physical boundary recedes and its domain exhausts the plane. A boundary child retains the half-plane. Distinct siblings correspond to distinct concentration points. Finitely many nested subsequences retain all these component limits simultaneously. [F3, F4, step 4.1, step 5.1, construct, algebra]

7.1 The node-connection assertions in [F3] and [F4] make the component values equal at every attachment. Their annulus or half-annulus estimates prove zero lost energy and image diameter between parent and child when the parent node neighborhood shrinks and the child plane or half-plane radius grows, after the sequence limit. Conformal affine changes along earlier edges preserve these estimates. There are finitely many edges, so all conclusions hold together. Each bubble structure is $J_\infty(p,x)$ where $p$ is its original base point: the initial source rescaling freezes that value and all later rescalings retain it. Disk descendants over a boundary point of $C_j$ retain $L_j$ and $J_{b,j}$. This constructs the asserted continuous nodal map. [F3, F4, step 4.1, step 5.1, step 6.1, construct, algebra]

8.1 A constant disk in [F4] has boundary-child count plus twice interior-child count at least two. Its parent node at infinity is a boundary node and contributes one, so $b+2i\ge3$. A constant sphere has at least two children by [F3], plus its parent node, giving at least three. Let $A$ be the number of nonconstant bubble components. Their uniform energy lower bound and the mass identities give $A\le\lfloor E_0/h\rfloor$. Let $U$ count constant disk vertices with exactly one child; that child must be a sphere by [F4]. Its entire descendant tree consists of spheres and contains a nonconstant sphere, since all leaves are nonconstant. These subtrees for distinct such vertices are disjoint, because a sphere subtree has no disk vertices. Consequently $U\le A$. All other constant vertices, say $B$ of them, have at least two children. If there are $q$ nonempty rooted trees, edge counting gives $$A+B+U-q\ge2B+U,\qquad B\le A-q.$$ Hence the total bubble count is $A+B+U\le3A-q\le3\lfloor E_0/h\rfloor$, with the empty-forest case immediate. [F3, F4, step 3.1, step 4.1, step 5.1, algebra]

9.1 Apply the respective inductions to every original atom, attaching its root at that base point. Their finite energy balances and step 3.1 give $$\lim_nE_g(u_n)=E_g(u)+\sum_vE_g(u_v).$$ Steps 6.1 and 7.1 give every convergence, scale and neck assertion, and step 8.1 gives node stability and the count bound. Only finite branching, finite integer induction, countable local subsequences, and finite component choices were used; Countable Choice suffices. The proof establishes compactness on the fixed smooth bordered source, and does not infer breaking at strip punctures or any gluing theorem. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, construct, algebra] ∎
