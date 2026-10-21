---
id: thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
kind: theorem
title: "Balanced three-sphere knot generators admit consistent relative gradings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
  - thm-seifert-van-kampen
  - thm-higher-dimensional-spheres-are-simply-connected
  - cor-fundamental-group-of-two-dimensional-torus
  - thm-parametric-transversality
  - lem-balanced-knot-whitney-index-differences-equal-twice-total-mark-differences
  - lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models
  - lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
  - lem-symmetric-product-divisor-intersections-and-point-movement
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/abs/math/0209056"
      locator: "Relative grading conventions; actual Whitney connectivity and consistency are proved locally below"
---

## Statement

Assume Countable Choice. Fix an actual balanced multipointed diagram of an oriented knot in $S^3$, with $m=h+k-1$, its surface complex structure and common product-integrable generator charts. Every two actual generators $x,y$ are joined by an actual continuous Whitney class. For $m>0$, the actual index and marked degrees define consistent relative integer gradings: if the generator set is nonempty, there are functions $M,A$ on it satisfying, for EVERY realized class $u:x\to y$,
$$M(x)-M(y)=\mu(u)-2\sum_i n_{w_i}(u),\qquad A(x)-A(y)=\sum_i n_{z_i}(u)-\sum_i n_{w_i}(u).$$
Each function is unique up to one common additive constant. In particular every actual index-one term weighted by $U_1^{a_1}\cdots U_k^{a_k}$, where $a_i=n_{w_i}(u)$, lowers $M$ by one and lowers $A$ by exactly $\sum_i n_{z_i}(u)$ when each $U_i$ has degrees $(-2,-1)$. Positive $z$ degrees are included.

No holomorphic representative is required for Whitney connectivity. No absolute normalization, nonemptiness of the generator set, existence of regular counts, square-zero or invariant comparison is asserted. For $m=0$ the point target has its sole generator and constant class, with arbitrary constant gradings.

## Facts & Assumptions

**Given:** The actual balanced splitting, attaching systems, generator set and target geometric data.

[F1] Broad proper compression disks admit same-boundary neat replacements and actual smooth standard cut balls. ([[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]])

[F2] Seifert--van Kampen identifies the group of a collared union with its group pushout. Spheres of dimension at least two are simply connected, and the torus has abelian fundamental group. These are proved without full Choice. ([[thm-seifert-van-kampen]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[cor-fundamental-group-of-two-dimensional-torus]])

[F3] Finite-dimensional supported smooth variations and Sard give transversality to finitely many target submanifolds under Countable Choice. ([[thm-parametric-transversality]])

[F4] For realized same-end classes in this balanced $S^3$ diagram, the index difference is twice either total marked-degree difference. ([[lem-balanced-knot-whitney-index-differences-equal-twice-total-mark-differences]])

[F5] Continuous Whitney classes have smooth fixed-end representatives, actual indices are additive under concatenation, and point-divisor degrees are additive and homotopy invariant. ([[lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models]], [[lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index]], [[lem-symmetric-product-divisor-intersections-and-point-movement]])

## Proof

1.1 Put $G=\pi_1(\Sigma,p)$. We first show that $G$ modulo the normal closure of all alpha and beta attaching loops is trivial. Use [F1] independently on the two disk systems; the boundary circles and the actual splitting are unchanged. Each handlebody is recovered from its boundary collar by attaching one two-handle along every compression circle and capping the resulting spherical boundary components by the actual cut balls. This is the reverse of the supplied product disk cuts: a disk collar is exactly $D^2\times[-1,1]$, its attaching annulus is $\partial D^2\times[-1,1]$, and after all such insertions the remaining pieces are the cut balls. By [F2], attaching each two-handle makes the boundary group map onto and kills precisely the normal closure of that circle; its collared intersection retracts to the attaching circle. Attaching a three-ball along its spherical collar changes no fundamental group, since that overlap is path connected and simply connected. Hence $\pi_1(U_\gamma)$ is $G$ modulo its own normal meridian subgroup, for either system. Applying [F2] to the two collared handlebodies in $S^3$ identifies their pushout with $G$ modulo both normal subgroups: a homomorphism out of this quotient is exactly a homomorphism out of $G$ killing both lists, the pushout universal property. The sphere result in [F2] makes that quotient trivial. Consequently the abelianization of $G$ is generated by the classes of the two attaching lists. All basepoint connectors in this finite argument are finite path choices. [F1, F2, given, construct, algebra]

1.2 Suppose $m\ge2$ and put $X=\operatorname{Sym}^m\Sigma$. At the repeated basepoint $o=mp$, moving only its first coordinate defines a homomorphism $G\to\pi_1(X,o)$. Its image is abelian: represent two coordinate loops in two different slots of $\Sigma^m$, where the square map traversing their independent parameters is an explicit commutation homotopy. Their images are the same as moving the first slot because permutations have identical quotient image. Thus this homomorphism kills all commutators. We prove it is onto next, rather than assume the fundamental group of a symmetric product. [given, construct, algebra]

2.1 Choose any distinct tuple $q$ and a path $C:o\to q$ given by $m$ coordinate paths starting at $p$. A based loop at $q$ has a smooth representative, by finite chart subdivision and straight coordinate smoothing, fixed in a small ball about its basepoint. More explicitly approximate its finitely many coordinate segments uniformly inside their chart balls, smooth the finitely many joins by convolution in smaller overlaps, and use straight chart homotopies on these balls; the original based homotopy class is retained. In the smooth symmetric product the repeated-root locus has finitely many smooth multiplicity strata, each of real codimension at least two, as is seen from its disjoint coordinate-disk polynomial charts. Apply [F3] to the one-dimensional loop, fixing its small basepoint collar, with finitely many supported target-coordinate variations spanning the tangent fibers on its compact remaining image. A common small parameter makes it transverse to every stratum and hence disjoint from them, since the expected inverse-image dimension is negative. Off this locus the ordered quotient is an ordinary finite cover: disjoint root disks give the actual $m!$ local orderings. Subdivide the loop into finitely many such neighborhoods and transport one ordering; its coordinate paths end with a permutation of the starting tuple. In $C$ followed by this loop followed by $\bar C$, match the reversed paths in that permuted order. Each coordinate is now a closed path at $p$. The projected simultaneous product of these $m$ coordinate loops is exactly the original conjugated loop up to its harmless piecewise reparametrization. Changing their clocks one at a time in the product gives an explicit based homotopy to their sequential concatenation. Thus every loop at $o$ is a product of first-coordinate loop images, proving onto-ness. This uses no path lifting at a repeated tuple: the repeated basepoint occurs only on the explicitly chosen paths $C,\bar C$. [F3, step 1.2, construct, algebra]

3.1 For $m=1$ the balanced relation gives only $(h,k)=(0,2)$ or $(1,1)$. The surface is respectively a sphere or torus, so [F2] makes its fundamental group abelian; its identity map is the needed onto map from $G$. Thus for every $m>0$, $\pi_1(X)$ is abelian and is generated by images of the alpha and beta meridians, by step 1.1 and steps 1.2 and 2.1. Changing a coordinate basepoint or its connecting path only conjugates that meridian image, which makes no difference in this abelian group. At any generator $x$, moving its one point on $\alpha_i$ around that circle, holding the other points fixed, is a loop in its actual product torus. Its image is precisely the corresponding meridian image after basepoint transport. The same holds for beta. Therefore the images of $\pi_1(T_\alpha,x)$ and $\pi_1(T_\beta,x)$ together generate $\pi_1(X,x)$. [F2, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 Given generators $x,y$, choose a path $a:x\to y$ in the alpha product torus and a path $b:y\to x$ in the beta product torus, both connected products of circles. Their concatenation is a based loop in $X$. By step 3.1 its inverse class is a product of an alpha-torus loop and a beta-torus loop, after transporting the beta loop from $x$ to $y$ along $a$ if necessary. Transport conjugacy is harmless because the ambient group is abelian. Insert these loops into $a$ and $b$ on their respective sides. The resulting loop is nullhomotopic in $X$ and still has its alpha arc from $x$ to $y$ and its beta arc back. An actual based nullhomotopy is exactly a disk extension of this circle map: collapse the final constant boundary of its homotopy cylinder. This is a continuous Whitney disk with the required two boundary arcs and endpoints. [step 3.1, construct, algebra]

5.1 Suppose the generator set is nonempty and fix $x_0$. For each $x$ use any realized class $u_x:x_0\to x$ from step 4.1 and define $$M(x)=-\mu(u_x)+2\sum_i n_{w_i}(u_x),\qquad A(x)=-\sum_i n_{z_i}(u_x)+\sum_i n_{w_i}(u_x).$$ Their values are independent of the chosen class by [F4]; hence these formulas define unique values without choosing class representatives globally. There are only finitely many generators in any event. For a class $u:x\to y$, [F5] concatenates $u_x$ with $u$ and adds its actual index and divisor degrees. Comparing with $u_y$ by [F4] gives exactly the two displayed grading differences. Any two functions with these differences differ by their common value at $x_0$, since every pair is connected. Thus each is unique up to one overall additive constant. [F4, F5, step 4.1, construct, algebra]

6.1 For an actual index-one class, put $a_i=n_{w_i}(u)$. The grading of its weighted output is $M(y)-2\sum a_i=M(x)-1$, while $A(y)-\sum a_i=A(x)-\sum n_{z_i}(u)$ by step 5.1. These are identities for every such class, including positive $z$ degrees, with no use of a count or differential-square assertion. For $m=0$ the target is a point and the constant model gives the final convention directly. Absolute grading shifts, invariant comparisons and nonemptiness were never used or inferred. [step 5.1, algebra] ∎
