---
id: lem-locally-flat-slice-surface-bounds-seifert-hypersurface
kind: lemma
title: "A locally flat slice surface bounds a Seifert hypersurface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-axiom-of-choice
  - lem-linking-number-equals-four-dimensional-intersection-number
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-linking-number-equals-signed-intersection
  - thm-topological-collaring-for-manifold-boundaries
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "Course II, §3, printed pp. 11–12"
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/freedmanquinn.pdf"
      locator: "Original §9.3, Theorem 9.3A, printed p. 137 (scan PDF p. 143); relative normal bundles"
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds, reformatted 2013 edition"
      url: "https://archive.mpim-bonn.mpg.de/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf"
      locator: "§9.5, Theorem 9.7, printed p. 145/PDF pp. 158–159, including its local-π2 erratum"
    - title: "Frank Quinn, Topological transversality holds in all dimensions"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/quinn1.pdf"
      locator: "Theorem, printed p. 145; strongly relative submanifold transversality"
    - title: "John Milnor, On Spaces Having the Homotopy Type of a CW-Complex"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf"
      locator: "Theorem 1 and Corollary 1, printed pp. 272–273; separable metric ANRs and manifolds have countable CW type"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Example 1B.1 and Proposition 1B.9, printed pp. 88–91; S1 is K(Z,1) and maps from connected CW complexes are classified by π1 homomorphisms"
---

## Statement

Assume full AC. Let $D$ be a locally flat properly embedded disk in the standard four-ball $B^4$ with boundary an oriented knot $K\subset S^3$, and let $F\subset S^3$ be a connected oriented Seifert surface for $K$. After matching product collars and pushing the interior of $F$ slightly into $B^4$, the closed locally flat surface $\Sigma=F\cup_KD$ bounds a compact connected oriented locally flat three-manifold $R\subset B^4$. The conclusion includes an oriented ambient product neighborhood of $R$ on both sides, with the positive normal push-off along the $F$ portion of $\partial R=\Sigma$ lying on the complementary side of $R$.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local-flatness charts, and product collars]]

## Facts & Assumptions

**Given:** Full AC, the locally flat disk and the smooth Seifert surface in the Statement, with their matching product collars. Orient $D$ so that the orientations of $F$ and $D$ glue across $K$.

[A1] Full AC is the family-of-nonempty-sets choice axiom. [[def-axiom-of-choice]]

[F1] The proper disk has the local-flat pair charts and product boundary collar specified for proper surfaces. Doubling the ball and disk across their common boundary gives a locally flat $2$-sphere, and the product collar supplies an actual normal bundle germ along the seam annulus. [[def-locally-flat-proper-surface-and-concordance-collars]]

[F2] **External TOP input — relative normal bundles.** Freedman–Quinn, Theorem 9.3A (original §9.3, printed p. 137) and its reformulation as Theorem 9.7 (2013 edition, §9.5, printed p. 145/PDF pp. 158–159) say that a closed subspace $N$ of an ANR homology $4$-manifold has a normal vector bundle, agreeing near a chosen closed subset where a normal bundle germ is prescribed, provided $N\times\mathbb R$ is a manifold and the local complement fundamental group is trivial off codimension two and infinite cyclic in codimension two. Their erratum notes that local $\pi_2$-vanishing may also be necessary; we verify it in step 1.1. The theorem supplies a normal bundle, not a regular fiber.

[F3] **External TOP input — strongly relative transversality.** Quinn's Theorem on printed p. 145 states that if proper submanifolds $M,X\subset Y$ have a specified normal microbundle for $X$, closed sets $C\subset D\subset Y$ are given, and $M$ is transverse to that microbundle near $C$, then an isotopy of $M$, supported in any prescribed neighborhood of $(D\setminus C)\cap M\cap X$, makes it transverse near $D$. The intersection has the restricted normal microbundle. We use the theorem in dimension $5$ for $4$-submanifolds with $3$-dimensional intersection and keep a full boundary collar fixed.

[F4] For disjoint boundary cycles in $S^3$, the linking number equals the signed intersection of collared bounding $2$-chains in $B^4$ when their interiors are in general position; disjoint bounding disks therefore have intersection number zero. [[lem-linking-number-equals-four-dimensional-intersection-number]]

[F5] The zero-framing supplied by $F$ is the longitude whose push-off has linking number zero, with positive meridians normalized by the boundary orientation. The surface-intersection formula also fixes the positive coorientation along $F$. [[thm-linking-number-equals-signed-intersection]]

[F6] Mayer–Vietoris applies to the collared decomposition of the ball into the disk tube and its exterior. A compact topological manifold boundary has an actual product collar, so a boundary map may be changed on that collar while fixing its boundary value. [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[thm-topological-collaring-for-manifold-boundaries]]

[F7] **External CW and map-classification input.** A topological manifold is metrizable and locally contractible, hence has the homotopy type of a countable CW complex by Milnor, Theorem 1/Corollary 1. Hatcher's Proposition 1B.9 applies to that CW model: for $S^1=K(\mathbb Z,1)$, a homomorphism of fundamental groups is induced by a map to $S^1$, unique up to based homotopy. Thus maps to $S^1$ with the same induced homomorphism are homotopic on the connected exterior.

[F8] Alexander duality identifies $H_1(S^3\setminus K;\mathbb Z)$ with $\mathbb Z$, generated by the positively oriented meridian; the zero longitude bounds the truncated Seifert surface in the knot exterior. Filling that longitude with the inner solid torus therefore gives $H_1(M(K);\mathbb Z)\cong\mathbb Z[\mu]$. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

## Proof

**Given:** Full AC, $D$, $F$, and their matched product collars. The proof treats the locally flat category directly, so it also covers a smooth disk.

1.1 Double $B^4$ across $S^3$ to $S^4$ and double $D$ across its product boundary collar to a locally flat sphere $N\cong S^2$. A smooth tubular neighborhood of the smooth knot $K$ in $S^3$, crossed with the doubled collar coordinate, gives an actual rank-two normal bundle germ over a closed seam annulus $C=K\times[-a,a]\subset N$. Away from the seam the pair is locally flat by hypothesis; at the seam its chart is the product pair $(\mathbb R\times\mathbb R\times\mathbb R^2,\mathbb R\times\mathbb R\times\{0\})$. The local complement is homotopy equivalent to $S^1$, so its fundamental group is infinite cyclic and its local $\pi_2$ vanishes. Also $S^4$ is a boundaryless ANR homology $4$-manifold, $N\times\mathbb R\cong S^2\times\mathbb R$ is a manifold, and $S^4\setminus N$ is a manifold. Apply [F2] relative to $C$ to obtain a normal disk bundle over $N$ that agrees with the displayed germ on a smaller seam annulus. Restrict it to one copy of $D$. Agreement near the seam and compactness of the remaining disk allow its radius to be shrunk so that the whole tube lies in the original $B^4$ and is product-shaped on a boundary collar. [A1, F1, F2, construct]

2.1 The oriented normal plane bundle over the disk is trivial. Choose a nowhere-zero section, and make its restriction to the seam smooth by a homotopy in the prescribed smooth tube, extending that homotopy across a smaller collar of $D$. Its parallel disk $D'$ is disjoint from $D$, and its boundary $K'$ is a smooth push-off of $K$. Represent the two disk parametrizations by finite continuous singular chains. Their disjoint compact supports have disjoint relatively open neighborhoods in the standard smooth ball. The relative finite-chain construction in [F4] replaces them by smooth rational chains within those respective neighborhoods, fixing their already smooth knot boundaries and standard end collars; hence their intersection count is zero, without smoothing either TOP disk embedding. By [F4], $\operatorname{lk}(K',K)=D'\cdot D=0$. The push-off determined by the Seifert surface $F$ also has linking number zero, since it is disjoint from $F$, by [F5]. In the smooth normal tube, the class of a framed push-off differs from the zero longitude by its winding number times the positive meridian. Thus the degree of the transition map between these two oriented framings is their linking-number difference, namely zero. This degree-zero map $K\to SO(2)$ extends over $D$; adjust the section by that extension. The resulting framed tube agrees with the zero-longitude marking from $F$. Remove its interior and round the product corners to obtain the compact topological disk exterior $X$. The collared decomposition $B^4=X\cup(D^2\times D^2)$ has overlap retracting to $D^2\times S^1$. Mayer–Vietoris [F6] gives $H_1(X;\mathbb Z)\cong\mathbb Z$, generated by the positive normal meridian $\mu$. The boundary of $X$ is the zero surgery $M(K)=E_K\cup_{T^2}(D^2\times S^1)$, with disk slope the zero longitude and circle coordinate the positive meridian; by [F8], its $H_1$ is also generated by $\mu$, and its inclusion into $X$ sends this generator to $\mu$. [F4, F5, F6, F8, step 1.1, construct, algebra]

3.1 Truncate $F$ at the knot tube and cap its boundary by $D^2\times\{1\}$ in the inner solid torus. This gives a closed connected surface $\Sigma_0\subset M(K)$. On a product neighborhood of the $F$ portion, let $u$ be the signed normal coordinate in the positive Seifert direction and put $f_0=\exp(2\pi i u)$. On the inner solid torus put $f_0(x,z)=z$. The zero-longitude marking makes these definitions agree in the peripheral product collar. Cut the remaining knot exterior along $F$. The two copies of $F$ receive real phases $\epsilon$ and $1-\epsilon$; on the remaining peripheral annulus use the lifted angular coordinate between these values. Extend this real phase over the compact cut exterior by finitely many collar cutoffs and a partition of unity, keeping every value in $(0,1)$ away from the prescribed collars and equal to $1/2$ off them. Exponentiating gives a continuous boundary map $f_0:M(K)\to S^1$ whose fiber over $1$ is exactly $\Sigma_0$, with a product neighborhood and positive coorientation on $F$. Its induced homomorphism sends the positive meridian to $1$, as required by the angular coordinate $z$. [F5, step 2.1, construct]

4.1 The exterior $X$ is connected: the overlap $D^2\times S^1$ and the tube are connected, and the Mayer–Vietoris sequence for the decomposition of connected $B^4$ forces $H_0(X;\mathbb Z)\cong\mathbb Z$. By [F7], $X$ has a connected CW model. The homomorphism $\pi_1(X)\to\mathbb Z$ obtained by abelianization and sending $\mu\mapsto1$ is realized by a continuous map $g:X\to S^1$. The maps $g|_{M(K)}$ and $f_0$ induce the same homomorphism because $H_1(M(K))\to H_1(X)$ sends the positive meridian generator to $\mu$, by steps 2.1 and [F8]. Choose a boundary basepoint and multiply $g$ by a constant in $S^1$ if needed so its value there equals $f_0$; this leaves the induced homomorphism unchanged. Hatcher's classification in [F7] then makes the restrictions based homotopic. Use the collar [F6] and its homotopy extension property to replace $g$ by a continuous map $f:X\to S^1$ equal to $f_0$ on a whole smaller boundary collar. This step uses only a continuous map; it invokes no smooth structure or regular-value theorem on $X$. [F6, F7, F8, step 2.1, step 3.1, construct]

5.1 Let $Y=X\times S^1$, let $Z=X\times\{1\}$ with its specified trivial circle-normal line microbundle, and let $M=\{(x,f(x)):x\in X\}$ be the graph. It is a proper locally flat submanifold, since the homeomorphism $(x,z)\mapsto(x,zf(x)^{-1})$ takes it to $Z$. On a closed collar of $\partial X$, $f=f_0$ and $1$ is a product-transverse value, so $M$ is microbundle-transverse to $Z$ there. Choose nested closed collars $C_0\subset\operatorname{Int}C$ of the whole boundary in $Y$, with $M$ transverse near $C$. Apply [F3] with $D=Y$ and with support in a neighborhood of $(Y\setminus C)\cap M\cap Z$ disjoint from $C_0$. The resulting proper submanifold $M'$ is transverse to $Z$ and unchanged on $C_0$. Parametrize it by its isotopy image $j:X\to M'$ and put $f'=\operatorname{pr}_{S^1}\circ j$. Then $R_0=(f')^{-1}(1)$ is a compact locally flat $3$-manifold, its boundary is exactly $\Sigma_0$, and its whole boundary product and coorientation are those prescribed by $f_0$. Quinn's conclusion identifies its normal microbundle in $M'$ with the restriction of the trivial normal line of $Z$; pulling back by $j$ gives an actual two-sided product neighborhood of $R_0$ in $X$, agreeing with the prescribed product on $C_0$. Discard any closed components of $R_0$; since $\Sigma_0$ is connected, exactly one component has boundary. [F3, step 3.1, step 4.1, construct]

6.1 The fiber $\Sigma_0$ contains the cap disk $D^2\times\{1\}$ in the inner solid torus. Attach the radial sector $D^2\times[0,r]$ at the fixed angular value $z=1$ down to the zero section $D$ of the tube. Its top disk matches the cap disk, and its side annulus matches the peripheral product collar because the tube frame is the zero framing from step 2.1. In these product coordinates the sector's normal is the angular coordinate; it agrees with the circle-normal coorientation of $R_0$, and on $F$ that coorientation is the positive Seifert direction from step 3.1. Glue the product neighborhoods along their common products and flatten the explicit quadrant corners. To perform the collar push in the Statement, use the product chart near $F$ and choose a small smooth function $h:F\to[0,\epsilon/4)$ that vanishes on $K$, is positive on $\operatorname{int}F$, and has the boundary profile of the matched seam collar. Choose $\rho:[0,\epsilon)\to[0,1]$ with $\rho(0)=1$, $\rho=0$ for $s\ge\epsilon/2$, and $\|h\|_\infty\|\rho'\|_\infty<1/2$. On the adjacent collar product define $(x,s,u)\mapsto(x,s+h(x)\rho(s),u)$. For each $x$, the collar coordinate has derivative $1+h(x)\rho'(s)>1/2$; the map fixes the seam $K$ and is the identity at the inner edge, so it embeds the product neighborhood while preserving the normal coordinate and coorientation. Choose the disk sector collar to agree with this same seam product. The result is a compact connected oriented locally flat $3$-manifold $R\subset B^4$ with boundary the collar-adjusted $F\cup_KD$. Its two-sided product neighborhood places the positive push-off of $F$ on the complementary side of $R$. Thus all conclusions hold for a locally flat disk, including the smooth case. [F1, step 2.1, step 3.1, step 5.1, construct, algebra] ∎

## Sources

[[lem-linking-number-equals-four-dimensional-intersection-number]]

[[thm-linking-number-equals-signed-intersection]]

[[thm-topological-collaring-for-manifold-boundaries]]
