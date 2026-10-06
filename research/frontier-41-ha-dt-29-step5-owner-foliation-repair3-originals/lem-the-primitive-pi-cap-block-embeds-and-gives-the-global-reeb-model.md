---
id: lem-the-primitive-pi-cap-block-embeds-and-gives-the-global-reeb-model
kind: lemma
title: The primitive pi cap block embeds and gives the global Reeb model
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps
- lem-paired-regular-disk-sweep-is-open-across-its-base-gluing
- lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- def-reeb-component-in-a-cooriented-three-manifold-foliation
- prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 15
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §8, Theorem 8.2 and its proof, printed pp. 27-28 (Reeb identification)
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §3.2.2, printed pp. 49-51
---

## Statement

The primitive Π cap block is an embedded solid torus after attaching its collar to the original leaf, and its foliation is foliated-homeomorphic to the standard Reeb component, with continuous inverse at the boundary.

## Facts & Assumptions

**Given:** The primitive $\Pi$ torus collar of the original leaf with its contracting longitude and exhausting plane caps, its canonical cap bundle and the actual meridian caps.

[F1] The in-pair item [[lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps]] supplies the contracting longitude holonomy $H$ with $D_{H(t)}=D_t\cup A_t$ for every small $t$, the collar annuli $A_t$, and the exhaustion of nearby leaves as planes with limit set the original torus; the in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the coherent cap development and the canonical Jordan caps.

[F2] The in-pair item [[lem-paired-regular-disk-sweep-is-open-across-its-base-gluing]] supplies the local openness of the paired disk sweep across its base gluing and the containment of the image boundary in the image of the boundary, and the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the finite disk collars and surface normal forms used for the solid-torus quotient.

[F3] The standard Reeb foliation of the closed solid torus has its boundary as a single compact leaf and every interior leaf a plane accumulating on it ([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]]), and a Reeb component of an ambient foliation is a compact saturated solid torus foliated homeomorphically by that model with boundary mapped to a leaf ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Fix a small $e>0$ and sweep the actual caps over $[H(e),e]$. Since $D_{H(e)}=D_e\cup A_e$ by [F1], the base identification pairs the whole $e$-base with its included source disk in the $H(e)$-base. The quotient $X$ is a solid torus: the disk cylinder is a three-ball, identifying two disjoint boundary disks in it is the attachment of one $1$-handle, and disk collars explicitly convert this quotient to $D^2\times S^1$. The seam charts of [F2] give a local homeomorphism, piecewise $C^2$ and orientation coherent, at every interior point of $X$. [F1, F2, given, construct]

2.1 The boundary map of $X$ is an embedded torus $C$: the lateral meridian fence is embedded, the unglued base annulus maps to $A_e$, their interiors are disjoint in the finite collar suspension and they meet only at their two boundary meridians; it is a collar graph over the original torus, with corners removable by local rounding. [F1, F2, step 1.1]

3.1 Prove global injectivity of the quotient map by preimage counts. For $y$ outside $C$ the finite number $n(y)$ of interior preimages is locally constant: compactness and local injectivity make the fibre finite, finitely many inverse neighbourhoods cover its points, and the image of their compact complement excludes a small target neighbourhood. Every positive cap leaf differs from the original torus, so the whole cap-block image misses that torus, and hence $n=0$ on the component of $M\setminus C$ containing it. Across $C$ the count changes by exactly one, because the boundary has exactly one preimage and a half-chart, while any interior preimages would contribute the same positive count on both sides. Consequently $C$ separates, $n=1$ on its other component, and $C$ has no interior preimages; there are at most two complement components because both collar sides of the connected $C$ are connected and each complementary component has boundary in $C$. Hence $X$ maps bijectively onto the closure of the nonzero side, and it is a homeomorphism by compactness. Interior target charts give its inherited C² regularity; no differentiable classification of the abstract solid torus is asserted. [F2, step 2.1]

4.1 Attach the product collar between $C$ and the original torus $L$. This yields a compact solid torus $R$ with boundary exactly $L$; since $L$ is a leaf, no ambient leaf crosses it, every point of $R$ belongs to one of the cap or annulus leaves, so $R$ is saturated; and the exhaustion of [F1] proves that all its interior leaves are planes with limit set $L$. [F1, step 3.1]

5.1 For the foliated model choose an increasing interval conjugacy $\psi$ with $\psi(H(t))=q\,\psi(t)$ for $q=1/2$: pick any increasing homeomorphism of $[H(e),e]$ onto $[qe',e']$, extend over $H$-iterates by the equation, and put $\psi(0)=0$; endpoints match, monotone iterates tend to $0$, and the inverse construction gives a continuous inverse. In the finite torus suspension collar the map $(\text{meridian }u,\text{longitude }s,\text{transverse }t)\mapsto(u,s,\psi(t))$ respects the longitude identifications, so it is a foliated homeomorphism to the standard contracting collar. Identify the fundamental cap disks at the two ends with the standard disks using the exact annulus $A_e$ to match boundary identifications, fix the endpoint compatibility $\chi_{H(e)}\circ h=h_{\mathrm{std}}\circ\chi_e$ for the included source disk map $h$, and extend these endpoint disk maps continuously across the compact parameter block: circle boundary maps interpolate by their increasing angle lifts, and disk maps fixing their boundary interpolate by the Alexander radial isotopy $k_r(x)=r\,k(x/r)$ for $|x|\le r$ and $k_r(x)=x$ for $r\le|x|\le1$, whose inverse uses $k^{-1}$ and whose estimate $|k_r(x)-x|\le2r$ gives joint forward and inverse continuity at $r=0$. The product cap maps then descend over the paired bases and glue exactly to the collar map, sending every disk or annulus leaf to its standard counterpart and giving a bijective foliated map on the whole interior. [F1, F2, step 4.1]

6.1 At $L$ the map has the fixed torus base-coordinate map; any points approaching $L$ eventually lie in an arbitrarily thin compact torus collar where $\psi(t)\to0$ uniformly in bounded base coordinates, so their images approach the corresponding boundary points, and $\psi^{-1}(t)\to0$ gives the same uniform statement for inverse images, while away from $L$ all maps are product or chart homeomorphisms. Hence the global map and its inverse are continuous everywhere including the limiting boundary, and the solid torus $R$ is foliated-homeomorphic to the standard Reeb component with continuous inverse at the boundary; no smooth conjugacy of arbitrary contracting germs is asserted, and the construction uses finitely many disk collars and one interval conjugacy, hence only the standing countable choice from [F4]. [F1, F3, F4, step 5.1] ∎
