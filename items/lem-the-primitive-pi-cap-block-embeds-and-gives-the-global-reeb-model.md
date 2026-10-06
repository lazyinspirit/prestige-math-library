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
- lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
- lem-c2-inverses-and-scalar-return-roots
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



[F5] Actual compact $C^2$ disk regions admit $C^2$ disk parametrizations, including a prescribed regular boundary parametrization; compact oriented genus-one $C^2$ surfaces admit $C^2$ torus normal forms ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]). Invertible $C^2$ differentials give $C^2$ local inverses and nonzero scalar transverse derivatives give unique $C^2$ roots ([[lem-c2-inverses-and-scalar-return-roots]]).

## Proof

**Proof technique:** direct.

1.1 Fix a small $e>0$ and sweep the actual caps over $[H(e),e]$. Since $D_{H(e)}=D_e\cup A_e$ by [F1], the base identification pairs the whole $e$-base with its included source disk in the $H(e)$-base. Parametrize these actual $C^2$ disks by [F5]. At a paired seam choose one smooth ambient field transverse to its compact disk and use its signed short flow with the disk parametrization as common target coordinates. On each adjoining half-sweep the inverse in [F5] pulls these coordinates back to a source face collar. The collars agree on the identified disk because they use its same target points, while their signed normal variables occupy opposite sides by [F2]. Their transitions to the interior sweep charts are $C^2$. Thus the quotient has a compatible $C^2$ seam atlas and its map is a local $C^2$ diffeomorphism, not merely a locally open piecewise map. [F1, F2, F5, given, construct]

2.1 The parametrized disk cylinder is a $C^2$ three-ball after product-corner rounding. Its two disjoint paired boundary disks have the actual parametrizations and collars from step 1.1. We construct a jointly $C^2$ boundary-sphere isotopy from the identity carrying them to standard disk windows. Work in the smooth sphere carrier of [F5]. Extend each actual $C^2$ disk parametrization over a slightly larger disk: finite local coordinate extensions, patched in Euclidean target coordinates and followed by the carrier's smooth tubular retraction, preserve the original parametrization, and invertibility of its differential plus compact injectivity give an embedded extension after shrinking. In that larger disk conjugate positive radial source diffeomorphisms, fixed near its outer boundary, to shrink the actual window to a tiny center image. These conjugated maps and their radial interpolations are jointly $C^2$. Choose a stereographic chart missing a point outside both windows. If $\phi$ is the extended disk chart with center image $z_0$ and derivative $A$, Taylor's formula on a radius-$\varepsilon$ patch gives $\phi(x)=z_0+Ax+O(\varepsilon^2)$ and $D\phi(x)=A+O(\varepsilon)$. On the tiny image define $d(z)=z_0+A\phi^{-1}(z)-z$ and extend it by a cutoff supported in a radius-$O(\varepsilon)$ neighborhood disjoint from the other window. Then $d=O(\varepsilon^2)$ and $Dd=O(\varepsilon)$; the cutoff contributes only $O(\varepsilon)$ to the derivative. For small $\varepsilon$, $z\mapsto z+t d(z)$, $0\le t\le1$, is an ambient $C^2$ isotopy because its perturbation derivative has norm less than one. It carries the small image to a linear ellipse. A positive-determinant matrix path makes that ellipse round: subdivide the compact matrix path into finitely many small increments and realize each by the same cutoff interpolation with perturbation derivative less than one. Finite small bump translations along a path avoiding the other window then carry the round disk to its standard location; positive radial maps expand it to the standard window. The path and supports can be chosen in the connected complement of the other closed disk, and all increments are finite. Apply this construction first to one disk and then to the other in the complement of the now fixed first window, choosing the first target disjoint from the remaining disk; if necessary choose the two standard windows after the finite paths, since their sizes and positions are free. Concatenating with smooth time changes constant near each join gives a jointly $C^2$ sphere isotopy $E_t$ from the identity. Extend it over the ball's product boundary collar by $(x,r)\mapsto(E_{\alpha(r)}(x),r)$, with smooth $\alpha=1$ near the boundary and $\alpha=0$ near the inner collar edge, and extend by the identity inside; its inverse uses $E_{\alpha(r)}^{-1}$. This uses the explicit isotopy, not a flow of a merely $C^1$ tangential velocity. Absorb attaching boundary parametrization differences by the increasing-angle-lift disk extensions of [F5], in the associated face collars. Identifying the two standard windows then gives the ordinary ball with one $1$-handle, whose disk cross-section and circular core identify it $C^2$-diffeomorphically with $D^2\times S^1$. Compatible corner roundings are compared in a common transverse direction by interpolation of their graph profiles with fixed ends. Thus the model comparison respects the seam atlas of step 1.1. [F5, step 1.1, construct]

2.2 The boundary map of $X$ is an embedded torus $C$: the lateral meridian fence is embedded, the unglued base annulus maps to $A_e$, their interiors are disjoint in the finite collar suspension and they meet only at their two boundary meridians; it is a collar graph over the original torus, with corners removable by local rounding. [F1, F2, step 1.1]

3.1 Prove global injectivity of the quotient map by preimage counts. For $y$ outside $C$ the finite number $n(y)$ of interior preimages is locally constant: compactness and local injectivity make the fibre finite, finitely many inverse neighbourhoods cover its points, and the image of their compact complement excludes a small target neighbourhood. Every positive cap leaf differs from the original torus, so the whole cap-block image misses that torus, and hence $n=0$ on the component of $M\setminus C$ containing it. Across $C$ the count changes by exactly one, because the boundary has exactly one preimage and a half-chart, while any interior preimages would contribute the same positive count on both sides. Consequently $C$ separates, $n=1$ on its other component, and $C$ has no interior preimages; there are at most two complement components because both collar sides of the connected $C$ are connected and each complementary component has boundary in $C$. Hence $X$ maps bijectively onto the closure of the nonzero side, and it is a homeomorphism by compactness. The seam and interior target charts of step 1.1 make this bijection a local $C^2$ diffeomorphism; on the rounded boundary the signed half-collar gives the same assertion. Its inverse is therefore $C^2$ everywhere, and step 2.1 supplies the differentiable solid-torus type. [F2, F5, step 1.1, step 2.1, step 2.2]

4.1 Attach the product collar between $C$ and the original torus $L$. The collar coordinates extend the $C^2$ boundary parametrization, and an increasing normal collar reparametrization absorbs the added interval. This yields a compact $C^2$ solid torus $R$ with boundary exactly $L$; since $L$ is a leaf, no ambient leaf crosses it, every point of $R$ belongs to one of the cap or annulus leaves, so $R$ is saturated; and the exhaustion of [F1] proves that all its interior leaves are planes with limit set $L$. [F1, step 3.1]

5.1 For the foliated model choose an increasing interval conjugacy $\psi$ with $\psi(H(t))=q\,\psi(t)$ for $q=1/2$: pick any increasing homeomorphism of $[H(e),e]$ onto $[qe',e']$, extend over $H$-iterates by the equation, and put $\psi(0)=0$; endpoints match, monotone iterates tend to $0$, and the inverse construction gives a continuous inverse. In the finite torus suspension collar the map $(\text{meridian }u,\text{longitude }s,\text{transverse }t)\mapsto(u,s,\psi(t))$ respects the longitude identifications, so it is a foliated homeomorphism to the standard contracting collar. Identify the fundamental cap disks at the two ends with the standard disks using the exact annulus $A_e$ to match boundary identifications, fix the endpoint compatibility $\chi_{H(e)}\circ h=h_{\mathrm{std}}\circ\chi_e$ for the included source disk map $h$, and extend these endpoint disk maps continuously across the compact parameter block: circle boundary maps interpolate by their increasing angle lifts, and disk maps fixing their boundary interpolate by the Alexander radial isotopy $k_r(x)=r\,k(x/r)$ for $|x|\le r$ and $k_r(x)=x$ for $r\le|x|\le1$, whose inverse uses $k^{-1}$ and whose estimate $|k_r(x)-x|\le2r$ gives joint forward and inverse continuity at $r=0$. The product cap maps then descend over the paired bases and glue exactly to the collar map, sending every disk or annulus leaf to its standard counterpart and giving a bijective foliated map on the whole interior. [F1, F2, step 4.1]

6.1 At $L$ the map has the fixed torus base-coordinate map; any points approaching $L$ eventually lie in an arbitrarily thin compact torus collar where $\psi(t)\to0$ uniformly in bounded base coordinates, so their images approach the corresponding boundary points, and $\psi^{-1}(t)\to0$ gives the same uniform statement for inverse images, while away from $L$ all maps are product or chart homeomorphisms. Hence the global map and its inverse are continuous everywhere including the limiting boundary, and the solid torus $R$ is foliated-homeomorphic to the standard Reeb component with continuous inverse at the boundary; no smooth conjugacy of arbitrary contracting germs is asserted, and the construction uses finitely many disk collars and one interval conjugacy, hence only the standing countable choice from [F4]. [F1, F3, F4, step 5.1] ∎
