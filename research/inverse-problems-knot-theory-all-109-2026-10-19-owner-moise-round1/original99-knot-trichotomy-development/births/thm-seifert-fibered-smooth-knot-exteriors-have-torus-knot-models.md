---
id: thm-seifert-fibered-smooth-knot-exteriors-have-torus-knot-models
kind: theorem
title: Seifert-fibered smooth knot exteriors have actual torus-knot models
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-coprime-torus-knot
  - thm-knot-exterior-homology-and-longitude
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-seifert-van-kampen
  - lem-seifert-fiber-quotient-is-finite-orbifold-free-product
  - lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
  - lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
  - lem-smooth-tori-in-s-three-give-marked-unknotted-or-satellite-models
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: Full AC is retained from the finite Seifert and smooth knot recognition suppliers. The additional group presentations and two-by-two matrix constructions are finite.
sources:
  references:
    - title: Hatcher, Notes on Basic 3-Manifold Topology
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: Printed13–14 Seifert models; the base restriction, nontrivial triangle quotients, meridional extension and actual ambient torus-knot recognition are proved here
---

## Statement

Assume full AC. If the chosen exterior of a smooth oriented knot $K\subset S^3$ has a smooth Seifert fibration, then $K$ is ambient isotopic through orientation-preserving smooth diffeomorphisms to a coprime torus knot or to the unknot. No atoroidality hypothesis is needed. The underlying Seifert base is a disk with at most two exceptional points. With zero or one exceptional point the exterior is a solid torus and $K$ is the unknot; with two exceptional multiplicities $q_1,q_2$, these are coprime and are the absolute parameters of the resulting torus knot, up to interchange. The assertion uses the actual meridian filling of the knot exterior, not a classification of arbitrary Seifert-fibered closed three-manifolds.

## Facts & Assumptions

**Given:** Full AC, the smooth knot and its actual smooth Seifert-fibered exterior $E$.

[F1] The base is a compact surface with boundary and finitely many exceptional points. After removing their disk neighborhoods the ordinary circle bundle has quotient group the free group on a graph spine. Its filled fiber quotient is the free product of the puncture cyclic groups and the original base free group, with multiplicities given by the actual meridian relations. [[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof1.1–3.1.

[F2] Knot-exterior homology is $H_1(E;\mathbb Z)=\mathbb Z$ with positive-meridian generator and preferred longitude zero. The actual meridian filling recovers simply connected $S^3$, and van Kampen kills precisely that meridian. [[thm-knot-exterior-homology-and-longitude]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-seifert-van-kampen]]

[F3] A smooth Seifert piece over a disk with zero or one exceptional point is a parametrized smooth solid torus, retaining its boundary fiber direction. Ordinary bundles over disks and annuli have the explicit smooth transport trivializations. [[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Proof1.1–2.1.

[F4] Smooth compact surfaces with boundary have actual finite disk-and-band presentations. Equal smooth Seifert boundary-fiber slopes can be matched by boundary isotopies and their product collars glued smoothly. [[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]], [[lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing]]

[F5] Two parametrized smooth solid tori forming $S^3$ have a common torus ambient isotopic to a Clifford torus; its essential circles become actual torus knots or the unknot. Its proof constructs the unknot disk and tube isotopies, without assuming every orientation-preserving diffeomorphism of $S^3$ isotopic to identity. [[lem-smooth-tori-in-s-three-give-marked-unknotted-or-satellite-models]]

## Proof

1.1 Let $B$ be the base and $n$ its exceptional-point count. There is exactly one boundary component of $B$, because the inverse image of each base boundary circle is one boundary torus, and $E$ has one boundary torus. Set $r=1-\chi(B)$. Remove the exceptional disks. As in [F1], its graph group has free basis $a_1,\ldots,a_r,c_1,\ldots,c_n$, with the $c_i$ encircling the exceptional disks. Let $h$ be the regular fiber and let $\epsilon_j\in\{1,-1\}$ be its orientation transport around $a_j$. Transport around $c_i$ preserves fiber orientation. Choose lifts of these free generators. They give the actual bundle presentation with relations $a_jha_j^{-1}=h^{\epsilon_j}$ and $[c_i,h]=1$, and no additional relation. To verify absence of a hidden extension relation, pull the bundle over the graph to its universal-cover tree and trivialize successively over its edges. A chosen generator lift identifies the two endpoint fibers by the indicated degree; free edge words introduce no two-cell relation. The fiber group injects: the base graph has no second homotopy, or directly its tree pullback is a product. Restoring each exceptional solid torus adds precisely $c_i^{q_i}h^{\beta_i}=1$, with $q_i\ge2$ and $\gcd(q_i,\beta_i)=1$. Indeed its meridian is primitive in the boundary basis (one base circuit, one fiber), and its base coefficient is $q_i$ in the local model. This is a presentation of the actual exterior, not just its fiber quotient. [F1, F3, F4, given, construct, algebra]

1.2 Orientability of $E$ makes fiber-orientation transport equal the base-orientation sign: in a product chart, preserving total orientation means that the signs on the base plane and fiber line multiply to $+1$. If $B$ were nonorientable, at least one $\epsilon_j$ would be $-1$. Abelianization of step1.1 would then be a direct sum of the free group on the $a_j$ and the finitely generated abelian group
$$Q=\langle h,c_1,\ldots,c_n\mid 2h=0,\ q_i c_i+\beta_i h=0\rangle.$$
This last group is torsion, since $2q_ic_i=0$. It is nonzero: if some $q_i$ is even, send that $c_i$ to one in $\mathbb Z/2$ and all other generators to zero; if every $q_i$ is odd, send $h$ to one and $c_i$ to $\beta_i\bmod2$. Either assignment respects every relation and is onto. This contradicts [F2]'s torsion-free $H_1(E)$. Thus $B$ is orientable. All $\epsilon_j$ are now $+1$. The cone/fiber relation matrix has rational rank $n$, so the first homology rank is $r+1$. Fact [F2] makes $r=0$. The finite disk-and-band spine of $B$ is therefore a tree; successively absorbing its leaf disks and their single connecting bands leaves one disk. Thus $B$ is actually a disk, without an unproved surface classification or a rational-homology-to-manifold recognition assertion. [F1, F2, F4, step 1.1, construct, algebra, contradiction]

2.1 If $n\le1$, [F3] makes $E$ a smooth solid torus. The chosen knot tube is another parametrized solid torus and together they are the ACTUAL $S^3$. The core-unknot construction in [F5], Proof2.2, applies to that tube core, which is $K$: the other meridian has longitude coefficient $\pm1$, its tube annulus joined to the actual other meridian disk is a smooth spanning disk. Hence $K$ is the unknot. It remains to consider $n\ge2$. On the boundary choose a primitive regular fiber $h$ and one transverse base lift $d$. The punctured-disk boundary word in the fiber quotient is $d=(x_1\cdots x_n)^{-1}$. Write the actual meridian as $h^a d^b$, and put $\gamma=|b|=\Delta(\mu_K,h)$. Primitivity of these torus basis elements follows from the circle-bundle boundary coordinates in [F4]. Killing the meridian and then the fiber gives the quotient
$$G=\langle x_1,\ldots,x_n\mid x_i^{q_i}=1,\ (x_1\cdots x_n)^\gamma=1\rangle,$$
where the last relation is absent if $\gamma=0$. This group must be trivial because meridian filling gives $S^3$. If $\gamma=0$, it is the nontrivial free product of the $C_{q_i}$, a contradiction. Thus $\gamma\ge1$. All these are based boundary words of the actual filling; a sign or conjugation of the boundary word does not change its normal meridian relation. [F1, F2, F3, F4, F5, step 1.1, step 1.2, construct, algebra]

2.2 We supply the finite obstruction used next. For any integers $p,q,s\ge2$, the group $\langle X,Y\mid X^p=Y^q=(XY)^s=1\rangle$ is nontrivial. Put $\alpha=e^{\pi i/p}$, $t_q=2\cos(\pi/q)$ and $t_s=2\cos(\pi/s)$. Choose $x,d$ solving $x+d=t_q$ and $\alpha x+\alpha^{-1}d=t_s$; the determinant $\alpha^{-1}-\alpha$ is nonzero. Set
$$A=\begin{pmatrix}\alpha&0\\0&\alpha^{-1}\end{pmatrix},\qquad B=\begin{pmatrix}x&1\\xd-1&d\end{pmatrix}.$$
Their determinants are one and their traces, and that of $AB$, are respectively $2\cos(\pi/p),t_q,t_s$. Their distinct eigenvalues are $e^{\pm\pi i/p},e^{\pm\pi i/q},e^{\pm\pi i/s}$. Thus $A^p=B^q=(AB)^s=-I$, so their classes in $PSL_2(\mathbb C)$ satisfy the displayed relations. The class of $A$ has exact order $p$ and is nonidentity. This constructs the needed nontrivial quotient directly, without spherical, Euclidean or hyperbolic triangle uniformization. [construct, algebra]

2.3 If $n\ge3$, send $x_1,x_2,x_3$ to the classes of $A,B,(AB)^{-1}$ in step2.2 with orders $q_1,q_2,q_3$, and send all other $x_i$ to one. Their product is one, so they satisfy the final relation for EVERY $\gamma$. This contradicts the triviality of $G$. Therefore $n=2$. If $\gamma\ge2$, apply step2.2 with orders $q_1,q_2,\gamma$ directly to $G$, again a contradiction. Hence $\gamma=1$. Then $G$ is the cyclic group of order $\gcd(q_1,q_2)$, by eliminating $x_2=x_1^{-1}$; its triviality gives $\gcd(q_1,q_2)=1$. This proves both the number restriction and the exact meridian-fiber intersection needed for geometric filling. [step 2.1, step 2.2, construct, algebra, contradiction]

3.1 Extend the fibration across the ORIGINAL knot tube, not an unmarked replacement filling. In its meridian/longitude coordinates the fiber slope is $a'\mu_K+b'\lambda_K$ with $|b'|=1$ by step2.3. On $D^2_z\times S^1_w$ the smooth circle action
$$t\cdot(z,w)=(e^{ia't}z,e^{ib't}w)$$
has precisely that boundary slope and is free, because $b'=\pm1$. Its core, the actual $K$, is a regular fiber. Use [F4]'s identity-starting boundary isotopies and matching product collars to match this tube fibration with the exterior fibration under their ACTUAL gluing. The isotopies are supported in collars disjoint from the core. Their union is a smooth Seifert fibration of the original $S^3$ with base the two glued disks, hence $S^2$, and just the original two exceptional fibers. All meridian markings remain those of the given knot. [F3, F4, step 2.3, construct]

3.2 Choose a smooth simple circle in that base sphere through the regular point corresponding to $K$ and separating the two exceptional points. Such a circle can be constructed as the boundary of a small disk about one exceptional point with a narrow arc to that regular point, rounding the two arc ends in base charts. Its inverse image is a smooth torus containing $K$. The two base disks each have one exceptional point, so their inverse images are parametrized smooth solid tori by [F3]. The fiber $K$ is an essential primitive circle on their common torus, since the regular circle bundle over a circle has the smooth product coordinates of [F4]. Apply [F5]: an actual orientation-preserving ambient isotopy carries that torus to a Clifford torus and its fiber to a coprime torus curve. Moreover the intersection of a regular fiber with each side's meridian is its local multiplicity $q_i$: the transverse meridian disk meets the regular orbit $q_i$ times in the fibered solid-torus model, exactly as computed in [F1]. The two side meridians form a unimodular basis, as [F5]'s van Kampen computation shows. Hence the absolute parameters of this primitive torus curve are $q_1,q_2$, up to interchange. They are at least two, so this is the nontrivial torus-knot case. Together with step2.1 this proves every assertion. No hyperbolization, Stallings fibering, general closed Seifert classification, or isotopy classification of arbitrary diffeomorphisms of $S^3$ has entered. [F1, F3, F4, F5, step 2.1, step 2.3, step 3.1, construct, algebra] ∎
