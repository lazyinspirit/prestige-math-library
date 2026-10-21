---
id: lem-integral-sutured-auxiliary-triangle-and-move-maps
kind: lemma
title: "Signed auxiliary triangle units and compatible sutured move maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-integral-sutured-floer-compactness-and-orientations
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

For the actual balanced local isotopy and disk-slide multidiagrams, the auxiliary top cycles have a triangle product equal to a unit top generator. Positive domains contributing to that product are exhausted by the explicit local triangles. For complete weakly admissible configurations, triangle and quadrilateral counts give integral slide and inverse-slide chain homotopies, with the specified exterior coherent orientation class transported through the full periodic-domain lattice. Every prescribed finite move is realizable by simultaneously weakly admissible local configurations and literal diagram conjugacies.

## Facts & Assumptions

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 New authoring, 2026-10-20. This computes the missing compatibility condition, including the punctured-surface radical. It supplies a signed determinant extension and the resulting inverse-map formulas for actual moduli problems satisfying the explicit analytic inputs below. It does not extend closed-manifold moduli theorems to incomplete sutured systems by omission. [construct]

1.2 **1. Exact integral lattice, with the boundary retained.** Let $\Sigma$ be the actual compact connected sutured Heegaard surface, and let the compressed positive and negative surfaces be connected. Write $H=H_1(\Sigma;\mathbb Z)$, with its possibly degenerate algebraic intersection form. Let $A,B\subset H$ be the spans of the ordered alpha and beta circles. Supply the actual homology-product condition, equivalently the unimodular relative handle matrix $I=(\alpha_i\cdot\beta_j)$ proved in the earlier reduction. The restricted form on $A\oplus B$ has matrix [construct]

1.3 $$\begin{pmatrix}0&I\\-I^{\mathsf T}&0\end{pmatrix}.$$ [construct]

1.4 This gives an **integral** direct summand. To see it explicitly, use $I^{-1}$ to subtract from any $h\in H$ the unique alpha/beta combination with the same pairings against every alpha and beta circle. The remainder is orthogonal to both. Thus $H=(A\oplus B)\oplus W$, where $W$ is this orthogonal complement. It contains the entire radical, including all boundary-circle classes. No quotient by the boundary radical is taken. In particular $A\cap B=0$ integrally, not just over a field. [construct]

1.5 Let gamma and delta be actual same-handlebody disk-system moves of beta. A disk slide replaces one basis vector by that vector plus or minus another; disk isotopies leave the classes fixed. Hence the homology spans of all three systems equal the **same integral submodule** $B$, with unimodular basis-change matrices. For $v\in B$ let $\beta(v),\gamma(v),\delta(v)$ denote the corresponding integral full-curve chains, using those three bases. [construct]

1.6 An integral region chain with a specified full-curve boundary, if it exists, is unique: the difference of two is an absolute two-cycle in $\Sigma$, and $H_2(\Sigma;\mathbb Z)=0$. It has zero boundary-region coefficient exactly as required for a sutured domain. Conversely, a full-curve chain homologous to zero bounds such a chain: it bounds in the surface's cellular complex, and its coefficient at each actual boundary component is zero because its boundary has no boundary edges. Thus for each $v$ there are unique domains [construct]

1.7 $$\partial P_{\beta\gamma}(v)=\beta(v)-\gamma(v),\qquad\partial P_{\gamma\delta}(v)=\gamma(v)-\delta(v).$$ [construct]

1.8 The same assertion defines $P_{\beta\delta}(v)$, and uniqueness gives the literal chain identity [construct]

1.9 $$P_{\beta\delta}(v)=P_{\beta\gamma}(v)+P_{\gamma\delta}(v).$$ [construct]

1.10 For any quadruply periodic domain, its boundary has an alpha combination plus a combination in $B$. Since $A\cap B=0$, the alpha combination is zero, and the beta/gamma/delta coefficients sum to zero in $B$. Therefore the full quadruply periodic-domain group is [construct]

1.11 $$\mathcal Q=\{P_{\beta\gamma}(v)+P_{\gamma\delta}(w):v,w\in B\}\cong B\oplus B.$$ [construct]

1.12 Injectivity follows by reading beta and delta boundary coefficients. Surjectivity follows by subtracting this expression with those coefficients; the remaining chain has zero boundary, hence is zero. This explicitly tracks all punctures. A hypothetical additional boundary/radical relation would require a nonzero alpha/beta combination lying in $W$, contrary to the integral direct sum, or an additional absolute two-cycle, which the boundary of $\Sigma$ excludes. [construct]

1.13 The auxiliary periodic domains are genuinely represented by Whitney classes, rather than merely formal two-chains. For a handleslide $d\ge2$. In that case $\pi_1(\operatorname{Sym}^d\operatorname{int}\Sigma)=H_1(\Sigma;\mathbb Z)$. One direct construction is as follows. Moving a single point while holding the other points at a basepoint gives generators from the surface's disk-band spine. A loop of unordered configurations can be decomposed into these motions by joining its initial roots to the basepoint and letting the joining paths coalesce at the diagonal; the interchange of two roots contracts across the diagonal in a coordinate disk. These are actual homotopies because collisions are allowed in the symmetric product. Two one-root motions commute by performing them in the two factors of $\Sigma\times\Sigma\to\operatorname{Sym}^d\Sigma$, so the resulting fundamental group is generated by commuting spine loops. There are no extra relations: map the surface spine to its product of circles, inducing its homology basis, and send a configuration to the coordinatewise product of those circle values. This maps the generator loops to an independent basis of the torus fundamental group. Hence the claimed fundamental group isomorphism follows. [construct]

1.14 Now take the beta torus loop with winding vector representing $v$ and the reversed gamma torus loop representing $v$. Their concatenation is zero in that fundamental group, so it has an actual disk filling in the symmetric product. With the two boundary arcs on their tori this is a periodic Whitney class. Its domain has the prescribed beta/gamma boundary, hence equals $P_{\beta\gamma}(v)$ by uniqueness. The same applies to the other auxiliary pairs. If $d=1$ there is no handleslide between distinct disk curves; for the small-isotopy comparison the sole auxiliary periodic generator is explicitly the difference of its two bigons, which represents it. If $d=0$ the lattice is zero. Thus the represented/domain distinction is resolved in the exact auxiliary moves used here, while sphere classes are retained separately. [construct]

1.15 **2. Compute the exact orientation-extension condition.** Start with compatible orientations on triangles $(\alpha,\beta,\gamma)$ and $(\alpha,\gamma,\delta)$ and their boundary pairs. They orient the first triangulation of a quadrilateral using the determinant-splicing construction already supplied. Its independence of decomposition follows from the common $(\alpha,\gamma)$ system: inserting a disk on that diagonal in one triangle and its inverse in the other contracts to the positive constant determinant factor. Canonically oriented spheres commute with the splice. [construct]

1.16 To orient the alternate diagonal $(\beta,\delta)$, insert one of its periodic classes. Its domain $P_{\beta\delta}(v)$ can be moved to the outer boundary by the **unique** replacement $P_{\beta\gamma}(v)+P_{\gamma\delta}(v)$. Section 1 supplies actual Whitney classes for these auxiliary domains. Their splicings into a quadrilateral have the same domain; cap the zero-winding boundary loops of their difference to see that their possible difference is a sphere insertion. Adjust by that sphere to get the exact class relation. Its determinant adjustment is the canonical complex sphere factor. This is exactly the subgroup called $K$ in the primary quadrilateral orientation proof. Here $K$ is the entire periodic subgroup, and its possible complementary quotient is zero. No represented class has been invented from a domain alone. [construct]

1.17 Define the orientation on each represented beta/delta periodic class by requiring this replacement to preserve the already oriented quadrilateral. This is consistent: two replacements differ by a relation in the direct sum $B\oplus B$, so both outer domains separately vanish. Their possible sphere differences have positive complex orientation. Multiplicativity follows by composing the two replacements at disjoint corners, using determinant associativity and the even parity of periodic disk indices. Fix reference beta/delta paths and extend to its nonperiodic classes. Now choose one orientation of an alternate $(\alpha,\beta,\delta)$ triangle and orient the matching auxiliary $(\beta,\gamma,\delta)$ triangle to agree with the first quadrilateral triangulation. Extend over their boundary-disk orbits. The same uniqueness calculation proves this is independent of all choices of representative. [construct]

1.18 Equivalently, after any fixed compatible reference systems have been chosen, their orientation-character twists satisfy [construct]

1.19 $$\chi_{\beta\delta}(v)=\chi_{\beta\gamma}(v)\,\chi_{\gamma\delta}(v).$$ [construct]

1.20 This equation is not an absolute sign convention by itself; it describes twists relative to the constructed reference systems. In particular it does not omit a determinant cocycle by writing down a character equation. The actual reference compatibility is supplied by the preceding determinant replacement construction. [construct]

1.21 The primary proof phrases its condition as vanishing of a connecting-image subgroup. The concrete replacement and zero quotient above are the actual domain-lattice condition needed here. They establish that orientation relation on the represented Whitney groupoid. They do **not** identify every abstract sutured cohomology connecting map with a closed four-manifold map without constructing that four-manifold. No such identification is needed for the determinant extension just described. [construct]

1.22 **3. Distinguish coherent compatibility from the auxiliary unit normalization.** One cannot yet infer move inverses merely from section 2. The coherent beta/delta system forced there must have its top generator as a cycle. The following finite local count is the appropriate way to test that normalization. [construct]

1.23 In a small Hamiltonian beta/delta pair, each coordinate has two intersections and two empty bigons. Their signed counts are units. The top tuple is a cycle precisely when the two units cancel in every coordinate. The differences of these bigons are a basis of the beta/delta periodic lattice. Thus this is a specific orientation class, rather than an arbitrary choice among its $2^d$ characters. [construct]

1.24 For a beta/gamma handleslide pair, choose the local two-handle model: gamma-one is the band sum of beta-one and beta-two, gamma-two is a small translate of beta-two, and the remaining pairs are separate small translates. The slide band joins two different boundary components of the surface cut along beta. Since that cut surface is connected, cutting along the band keeps its exterior connected. Consequently all boundary/radical topology lies in the single exterior region with zero sutured multiplicity; the nonzero domains in the two-handle patch obey the same local region equations independently of the genus of that exterior. [construct]

1.25 Label the four active regions as $D_1,D_2,D_3,D_4$, with periodic basis [construct]

1.26 $$P_1=D_1-D_2-D_3,\qquad P_2=D_3-D_4.$$ [construct]

1.27 For the top tuple $y^+$ and the tuple obtained by lowering its first coordinate, every domain is $D_1+nP_1+mP_2$. Its four coefficients are $(1+n,-n,-n+m,-m)$, so positivity leaves exactly $D_1$, $D_2+D_3$, $D_2+D_4$. Lowering the second coordinate leaves exactly $D_3,D_4$. These domain equations, rather than an inference from rank, isolate the actual unit-cancellation problem. [construct]

1.28 The first, fourth and fifth domains are embedded empty bigons, each with one regular strip modulo translation. The two remaining domains are annular matching problems. Cut the annular domain from a specified stationary corner by a length parameter $t\in(0,1)$. Uniformize its boundary components as concentric circles and let $f_1(t),f_2(t)$ be the angles of the two required boundary arcs. A holomorphic double-cover disk exists exactly when $F(t)=f_1(t)-f_2(t)=0$: the required annulus involution has form $z\mapsto c/z$, with $|c|=1$, and is unique when the angles agree. The linearized problem consists of the invertible normalized conformal problem and this scalar matching equation. Its determinant therefore differs from the orientation of $F'(t)$ by one constant sign on that disk class. At regular zeros the signed count is consequently the signed degree of $F$, up to that constant sign. [construct]

1.29 For one cut, $F(0)<0$ and $F(1)=\nu_1-\nu_2$; for the other, $G(0)>0$ and $G(1)=\nu_1-\nu_2$, where the two limiting annular angles are unequal after a generic choice. The endpoint signed-degree formula gives one family count zero and the other a unit. This statement concerns signed degrees: it does not falsely assert a zero-degree family contains no actual solutions. Hence the two annular signed counts have sum a unit, regardless of their individual reference signs. Choose the orientation on $P_2$ to cancel the two second-coordinate bigons, and on $P_1$ to cancel the first bigon's unit with that annular unit sum. The top generator is then a cycle. Spectator coordinates have the separate two-bigon cancellation. The reverse slide pair has the same construction with curve labels reversed. [construct]

1.30 To finish the normalization, use the auxiliary triple $(\beta,\gamma,\delta)$ in its actual small local position. If its top-to-top triangle count is a single regular product of small triangles and no other nonnegative index-zero domain contributes, its signed coefficient is a unit. Orient the triangle reference so it is $+1$. The signed triangle boundary identity then forces the resulting beta/delta top generator to be a cycle, because both input top generators are cycles. The characterization by the individual beta/delta bigon cancellations shows that the forced beta/delta system is the required distinguished one. Thus a **genuine top-triangle domain exhaustion** is still required at this point; the lattice alone does not supply it. [construct]

1.31 **4. Signed quadrilateral boundary and actual inverse formulas.** For the following identities supply the actual regular compactified zero/one-dimensional polygon problems on the chosen sutured multidiagrams, their stated admissibility/energy bounds and absence of all additional boundary strata. An accepted closed-diagram theorem is usable only when those diagrams satisfy its actual hypotheses. The determinant orientations in section 2 do supply the missing sign compatibility; they do not manufacture these analytic moduli inputs. [construct]

1.32 Choose corner orientation lines in homological convention, so the triangle operator $T$ has degree zero and the quadrilateral operator $H$ degree one. At an input strip end put the strip translation before the polygon determinant factor; at the output end use its dual orientation line. Contract each matching corner with its dual in boundary order. The finite determinant-splicing convention then gives the signed triangle identity $dT=T(d\otimes1+(-1)^{|x|}1\otimes d)$, and for the quadrilateral, on cycle inputs $\theta_{\beta\gamma},\theta_{\gamma\delta}$, gives [construct]

1.33 $$GF-U=dH+Hd,$$ [construct]

1.34 where $F=T_{\alpha\beta\gamma}(-,\theta_{\beta\gamma})$, $G=T_{\alpha\gamma\delta}(-,\theta_{\gamma\delta})$, and $U=T_{\alpha\beta\delta}(-,\theta_{\beta\delta})$. The two conformal endpoint signs are opposite because the oriented interval parameter for quadrilateral shapes has boundary $\{+\infty\}-\{-\infty\}$. Strip-breaking signs are the endpoint translation/corner contractions above; there is no characteristic-two cancellation in this formula. The auxiliary product $T_{\beta\gamma\delta}(\theta_{\beta\gamma},\theta_{\gamma\delta})=\theta_{\beta\delta}$ must be the actual normalized count from section 3. [construct]

1.35 If $U$ is an actual signed chain isomorphism, a left homotopy inverse of $F$ is $L=U^{-1}G$, with [construct]

1.36 $$LF-1=d(U^{-1}H)+(U^{-1}H)d.$$ [construct]

1.37 Here is an explicit reverse-side construction rather than an appeal to equality of ranks. Choose a small translate eta of gamma, let $V:C_\gamma\to C_\eta$ be its actual small-isotopy isomorphism, let $B:C_\gamma\to C_\beta$ be the reverse-slide triangle map, and let $F':C_\beta\to C_\eta$ be the forward-slide map with that translated endpoint. The reverse-slide quadrilateral gives $F'B-V=dH_2+H_2d$. The endpoint-isotopy quadrilateral gives $VF-F'=dJ+Jd$. Both use the normalized auxiliary top products described in section 3. Consequently [construct]

1.38 $$FB-1=dK+Kd,\qquad K=V^{-1}(JB+H_2).$$ [construct]

1.39 Thus $R=B$ is an actual right homotopy inverse. Left and right inverses agree up to the explicit homotopy [construct]

1.40 $$L-R=L(1-FR)+(LF-1)R=d(-LK+(U^{-1}H)R)+(-LK+(U^{-1}H)R)d.$$ [construct]

1.41 Thus the construction produces honest signed inverse homotopies once its actual polygon counts and the two small-isotopy isomorphisms have been supplied. It does not replace an isomorphism proof by equality of mod-two ranks. [construct]

1.42 For a finite sutured small-isotopy complex with zero periodic domains, the usual area-triangular argument is integral as well. After identifying nearest generators, the actual small-triangle map is $U=D+N$, where $D$ is diagonal with entries $\pm1$ and $D^{-1}N$ strictly lowers a finite area order. This implies $(D^{-1}N)^N=0$ for some finite $N$, and [construct]

1.43 $$U^{-1}=\left(\sum_{k=0}^{N-1}(-D^{-1}N)^k\right)D^{-1}.$$ [construct]

1.44 The finite signed expansion is an inverse over $\mathbb Z$. Its premise is an actual area order and actual leading-unit count; neither is inferred from the formal expression. All of these formulas remain on the full original integral/general-manifold branch. [construct]

1.45 **5. Enter the rank-one cut branch before assuming signed decomposition.** The order of construction need not be circular. Supply the actual finite integral top Alexander complex in the actual adapted exterior diagram, with its Spin-c-preserving index-one differential, and its homology $\mathbb Z$. The actual meridional Chern count identifies its generators with the outer generators. The literal cut diagram has exactly these generators, by the geometric generator bijection; no differential comparison is used yet. [construct]

1.46 Orient and order the cut attaching circles by their exterior labels. Its ordered-intersection sign $q_{\mathrm{cut}}(x')$ equals the exterior sign $q_{\mathrm{ext}}(p(x'))$: all coordinates are outside $P$, where the cut map is orientation preserving, and the matching permutations are identical. The common universal product-order factor is the same on both sides. Therefore the finite signed generator count is [construct]

1.47 $$\sum_{\text{top }x}q_{\mathrm{ext}}(x)=\sum_{x'}q_{\mathrm{cut}}(x')=\det I_{\mathrm{cut}}.$$ [construct]

1.48 The actual exterior differential reverses $q_{\mathrm{ext}}$ by the general strip-index parity calculation; it preserves this top sector. Its integral homology $\mathbb Z$ consequently gives Euler characteristic $+1$ or $-1$. Thus $I_{\mathrm{cut}}$ is unimodular **before any signed cut differential has been identified with the top differential**. The relative handle/domain operation already supplied then proves that the cut manifold is an integral homology product and its periodic-domain lattice is zero. This uses actual generator signs and the actual top differential, not an abstract assertion that a rank-one sutured invariant detects a product. [construct]

1.49 This step retains a genuine prerequisite: the integral top complex must actually be realized on the chosen admissible adapted diagram. It removes the internal dependence on signed surface decomposition; it does not invent the required signed exterior realization or diagram-change maps. [construct]

1.50 **6. The signed cut differential is a strict matrix identity up to generator signs.** Now suppose an actual admissible nice adapted diagram has been constructed, and the actual disk classification gives precisely the embedded empty bigons/rectangles and their unique lifts in the cut diagram. The cut map gives the local Fredholm conjugacies supplied in the disk-transfer donor. Let $o_{\mathrm{ext}}$ be a coherent exterior system, restricted to its actual outer differential, and let $o_{\mathrm{cut}}$ be the constructed coherent cut system. Both use the same determinant-splicing convention and canonical sphere orientations. For a rigid disk $u:x\to y$ write $r(u)=\pm1$ for the ratio between its two orientations under the local conjugacy. [construct]

1.51 Build the finite graph whose vertices are outer generators and whose oriented edges are the actual rigid bigons/rectangles; formal inverse edges carry the same sign ratio. The product of $r$ around every graph loop is one. To prove this, concatenate the corresponding lifted Whitney classes, using inverses where necessary. Their total domain upstairs is periodic and therefore zero. The loop is a sphere insertion by the explicit capping argument. Downstairs its domain is also zero, and the concatenated exterior class is a sphere insertion as well. The componentwise operator conjugacies commute with determinant sewing at each common generator. After capping the two torus boundary paths, they identify the two sphere determinant orientations: the matching fiber and sphere factors are complex-oriented, so the comparison sign is positive. Coherence of both systems therefore makes the loop product one. This proof uses the class-level capped concatenation and determinant excision; it does not assume an arbitrary graph cocycle is exact. [construct]

1.52 Choose a root in each connected component of this finite graph and set $\sigma$ there to $+1$. Extend $\sigma(x)$ as the product of edge ratios along a path from the root. The loop calculation makes it independent of path. Hence $r(u)=\sigma(x)\sigma(y)$ for every rigid edge. Under the generator bijection the map [construct]

1.53 $$\Phi(x)=\sigma(x)\,p^{-1}(x)$$ [construct]

1.54 then satisfies the literal integer matrix identity [construct]

1.55 $$\Phi\,\partial_{\mathrm{top}}=\partial_{\mathrm{cut}}\,\Phi.$$ [construct]

1.56 Its inverse is the same signed generator correspondence in the reverse direction. Thus this is a chain isomorphism, not merely an equality of ranks. It requires no extra unconstructed cut-parameter moduli space or orientation comparison for arbitrary higher-index domains. The actual exhaustive rigid-disk classification and both actual coherent systems are essential inputs. On the forward fibered branch the product cut gives zero periodic domains directly; on the reverse branch section 5 supplies them without first assuming this signed comparison. [construct]

2.1 New local construction, 2026-10-20. It is placed in the actual punctured-surface same-handlebody slide model. The complement may have arbitrary genus and any number of sutured boundary components. The construction retains that complement and does not replace the manifold by $S^3$. [construct]

2.2 **1. Place the actual slide and its small return translate.** Cut the connected sutured surface along the beta disk system. Its cut surface is connected because the compressed boundary surface is connected. The slide band joins two **different** beta boundary circles. A proper arc between different boundary components does not separate a connected surface: after cutting, its two sides are connected around either of the joined boundary components. Thus the complement of the beta curves and the band is connected. Place gamma-one as the band sum of beta-one and beta-two; gamma-two is a short transverse translate of beta-two, and the other gamma circles are separate short translates of their beta circles. All moves take place in the band-and-circle ribbons. The unchanged complementary surface remains attached, including every original sutured boundary. [construct]

2.3 Use the two-handle local model with embedded bigons $D_1,D_3,D_4$, annular region $D_2$, and exterior region $D_5$. The exterior includes the regions reached through the uncut handle faces and the entire complementary surface. The beta/gamma periodic domains are [construct]

2.4 $$P_1=D_1-D_2-D_3,\qquad P_2=D_3-D_4.$$ [construct]

2.5 Every spectator coordinate has two thin bigons $E_i^+,E_i^-$ and periodic domain $P_i=E_i^+-E_i^-$. There are no other periodic domains: the same-handlebody lattice computation identifies them with the beta basis, and these $d$ domains have independent beta boundary vectors. In particular the exterior region has coefficient zero in all of them. The beta edge of each selected positive bigon $D_1,D_3,E_i^+$ has the exterior zero region on its other side. For $D_3$, this is the region reached through the corresponding handle face; it is not a separately assigned positive cap. [construct]

2.6 These local regions can be constructed directly by thickening the two beta circles and their band, adding the short gamma offsets on each circle, and pairing the old cut faces as before. No change to the complementary surface or its boundary is made. The regions have the stated boundary-incidence relations by following the two sides of each ribbon; pairing the old disk faces identifies their outside components with $D_5$. This is why the local periodic basis and the zero-side assertions remain valid on the actual general sutured surface. [construct]

2.7 On the beta edge $I_i$ of each selected positive bigon, place one beta/delta intersection $w_i^+$ in its interior and place the other $w_i^-$ outside that edge. Choose delta as a sufficiently small normal graph over beta. On the part of $I_i$ from $w_i^+$ toward its gamma endpoint $y_i^-$, put delta strictly **inside** the selected bigon; on the part from $y_i^+$ to $w_i^+$ put it strictly outside, in the zero region. Keep exactly the two stated simple zeros of that normal graph. The signs on its remaining arc can be joined smoothly without new zeros. Choose its two signed lobe areas equal, by changing the positive and negative amplitudes separately. This makes delta an exact Hamiltonian translate for the chosen positive surface area form. All changes are arbitrarily small and remain in disjoint beta ribbons. [construct]

2.8 Let $v_i^+$ be the gamma/delta intersection near $y_i^-$. The opposite curve ordering makes it the source endpoint of the inverse-pair positive bigon. The three points $y_i^+,v_i^+,w_i^+$ bound an actual embedded curvilinear triangle $\Delta_i$ strictly inside the selected bigon: follow its gamma side, then the delta segment inside the bigon, then its beta segment. Choose the transverse graph and corner neighborhoods so the triangle uses a single convex intersection sector at each corner, with angle strictly less than $\pi$; it is the intersection of the corresponding inward half-disks there. The delta segment cuts off a nonempty strip adjacent to the beta edge from $w_i^+$ toward $y_i^-$. The triangles for the different coordinates are disjoint. [construct]

2.9 Let $Q_i$ denote the beta/delta periodic domain, with sign chosen to be $+1$ in that removed inner strip. It is $-1$ in the opposite thin lobe lying in the zero region near the other part of the same beta edge. These coefficients follow from the full beta-minus-delta boundary. Other $Q_j$ vanish in those two ports because the beta ribbons are disjoint. [construct]

2.10 **2. Exhaust all nonnegative top-to-top triangle domains.** Set $\Delta=\sum_i\Delta_i$. For the prescribed three top tuples, every other triangle domain differs from $\Delta$ by a full triply periodic domain. The actual same-handlebody lattice gives the unique expression [construct]

2.11 $$D=\Delta+u_1P_1+u_2P_2+\sum_{i\ge3}u_iP_i+\sum_{i=1}^d v_iQ_i,$$ [construct]

2.12 with integral coefficients. Sphere insertions have zero domain and are treated separately below; they do not add a missing region coefficient. [construct]

2.13 Choose one test point in each of the following open ports, away from all new curves. The translate is small enough that each indicated old-region core remains nonempty. Every listed test point has multiplicity zero in $\Delta$. [construct]

2.14 | Port | Multiplicity of $D$ | |---|---:| | Core of $D_2$, outside all beta ribbons | $-u_1$ | | Outer zero-side lobe at the beta-one edge | $-v_1$ | | Removed strip inside $D_1$ | $u_1+v_1$ | | Core of $D_4$, outside all beta ribbons | $-u_2$ | | Outer zero-side lobe at the beta-two edge | $-v_2$ | | Removed strip inside $D_3$ | $-u_1+u_2+v_2$ | | Core of $E_i^-$, for each spectator $i$ | $-u_i$ | | Its outer zero-side lobe | $-v_i$ | | Its removed strip inside $E_i^+$ | $u_i+v_i$ | [construct]

2.15 If $D$ is nonnegative, the first three rows give $u_1\le0$, $v_1\le0$, and $u_1+v_1\ge0$, hence $u_1=v_1=0$. The next three, with $u_1=0$, give $u_2=v_2=0$. Each spectator's three rows give $u_i=v_i=0$. Therefore $D=\Delta$. This exhausts **all** nonnegative domains for the specified top-to-top corners; it does not merely compute a leading area term or select one convenient domain. It also supplies the relevant auxiliary triple's admissibility: apply the same inequalities with reference domain zero to any nonnegative periodic chain and then to its negative. [construct]

2.16 The proof needs the removed inner strips and the opposite zero-side lobes. Letting the translate collapse onto beta, or keeping only the old four-region coefficient table, would lose these inequalities and would not prove uniqueness. [construct]

2.17 **3. Count and orient the actual product triangle.** Choose the integrable symmetric-product structure on a planar neighborhood $U$ of the band-and-circle model. This neighborhood contains all active curves and region supports but omits the cut-face holes; the handle-face identifications occur outside the domains under consideration. An embedded curvilinear triangle has exactly one conformal map from the three-punctured disk with its three boundary points fixed. Uniqueness follows because a conformal self-map of a disk fixing three boundary points is the identity. The normalized scalar linearized problem has zero kernel, by the same infinitesimal automorphism calculation; its index is zero, so its cokernel is zero. Thus the triangle is regular. Their disjoint coordinate neighborhoods give a regular product triangle representing $\Delta$, with one actual zero-dimensional moduli point and determinant count $\pm1$. Fix its reference orientation to make that count $+1$. [construct]

2.18 There is no extra holomorphic representative invisible to the domain. For these chosen integrable auxiliary data, the incidence cover of a holomorphic configuration map has a holomorphic evaluation to $U$. Its degree at a region point is the domain multiplicity. A nonconstant coordinate entering a zero region would have positive local degree there, by the open mapping theorem. Hence the domain $\Delta$, which has coefficient one exactly on the disjoint triangles, forces the evaluation to be the corresponding degree-one conformal maps and constant spectator sheets. No component can travel through the unchanged complementary surface, whose multiplicity is zero. The same argument excludes an added nonconstant holomorphic sphere. In the planar model $\operatorname{Sym}^d U$ is an open subset of $\mathbb C^d$ through the elementary symmetric functions, so its tangent bundle is complex trivial; sphere insertions there have zero Chern and Maslov contribution. This use of planar data concerns the **new auxiliary count**, not the full general-manifold theory. [construct]

2.19 For any other beta/delta target tuple, the actual small Hamiltonian pair's relative grading drops by the positive number of lowered coordinates. Its two bigons have index one, their difference has index zero, and all auxiliary periodic indices are zero: for $P_1$ this follows by comparing the index-one bigon with the index-one annular matching classes, and for $P_2,P_i,Q_i$ by comparing their two index-one bigons. The reference product triangle has index zero. Thus every class at a different target has positive index and contributes no rigid triangle. For actual holomorphic representatives the preceding support argument puts the problem in the planar model, so no untracked spherical Chern shift can alter that conclusion. [construct]

2.20 Consequently the actual chosen auxiliary count is [construct]

2.21 $$T_{\beta\gamma\delta}(\theta_{\beta\gamma},\theta_{\gamma\delta})=\theta_{\beta\delta},$$ [construct]

2.22 with coefficient $+1$ in the fixed reference orientation and no other rigid output. Choose the beta/gamma and gamma/delta systems by their actual bigon/annular-unit cancellations, so their top tuples are cycles. Once the actual triangle strip-breaking boundary identity is constructed for the compatible determinant system, it follows that the **induced** beta/delta top tuple is a cycle. Its separate two-bigon cancellations then identify that induced class as the distinguished auxiliary unit class. This last implication uses a signed chain identity, not a mod-two rank assertion. [construct]

3.1 **The exact periodic lattice, including the boundary radical.** Fix an actual punctured surface Σ and complete compressionbody disk families α,β,γ,δ. The latter three are related by the actual isotopies and disk slides in one compressionbody. Write H=H₁(Σ;Z), A=span[α_i], B=span[β_i]=span[γ_i]=span[δ_i], and C=A∩B inside H. These are integral subgroups, not rational Lagrangians. Boundary-parallel classes, if present, are included in H and hence in C and B. [construct]

3.2 A periodic domain is uniquely determined by its attaching-circle boundary with zero coefficient on ∂Σ. Existence is precisely that this boundary vanishes in H. Indeed, this is the definition of an absolute bounding two-chain on the surface; uniqueness follows from H₂(Σ)=0, or directly by propagating the zero boundary-region coefficient. Consequently the four-family periodic group is exactly [construct]

3.3 K₄ = {(a,b,c,d)∈A⊕B⊕B⊕B : a+b+c+d=0} ≅ C⊕B⊕B, (u,v,w) ↦ (u,v,w,−u−v−w). [construct]

3.4 No splitting of A+B in H, no nondegeneracy of the intersection form, and no omission of its radical is used. Similarly K₃≅C⊕B, with (u,v)↦(u,v,−u−v). The main pair periodic groups are C; the auxiliary pair groups are B. These are the full domain groups, not only a convenient subgroup. [construct]

3.5 For d≥2 all these domain relations are realized by polygon classes whenever the corner component is nonempty: the boundary loop in the symmetric product represents the sum of the displayed attaching-circle classes, and π₁(Sym^dΣ)=H₁Σ. The sum is zero, so it fills. Two fillings with the same domain differ by a zero-domain sphere; its complex determinant orientation is fixed. For d=0 there are no moving coordinates. For d=1, the already constructed actual boundary-region stabilization first gives d=2 by a literal integral chain isomorphism, so no abelianization assertion about Sym¹Σ is needed. [construct]

3.6 **A reference orientation and the character calculation.** Use the actual ordered global tangent frames of the attaching tori. Cut each polygon operator along its boundary and cap its framed real boundary segments. The closed complex part has its complex orientation; the ordered real caps and the translation/modulus factors have their specified order. A change of the cutting uses the same finite-kernel splice isomorphism as for strips. Its associativity follows by identifying both orders with the determinant of the same augmented kernel, with the same ordered cokernel columns. A periodic loop does not introduce an unrecorded frame sign: the tangent frames are global on the tori. The zero-domain sphere factor is complex oriented. This constructs a reference coherent orientation for this finite move configuration. It is not a choice of independently positive signs for its rigid polygons. [construct]

3.7 Relative to this reference, any other coherent orientation is a Z/2-character of the actual domain group, modulo generator orientation changes. Let h₀₁,h₁₂,h₀₂:B→Z/2 be the auxiliary pair characters. The already constructed auxiliary top-triangle unit fixes their compatibility as [construct]

3.8 h₀₂ = h₀₁+h₁₂. [construct]

3.9 Let m₀:C→Z/2 be the specified orientation class on (α,β). A triangle character on K₃ is of the form φ(u,v)=m(u)+h(v). Restricting it to the three pairs gives [construct]

3.10 (α,β): m(u)+h(u), (α,γ): m(u), (β,γ): h(v). [construct]

3.11 Thus, once the actual auxiliary unit class is fixed, the transported class on (α,γ) is forced to be [construct]

3.12 m₁ = m₀+h₀₁|C. [construct]

3.13 This is an affine transport relative to the specified reference; in particular it does not identify all characters of C. Apply it a second time to get m₂=m₁+h₁₂|C. A character on K₄ of the form q(u)+r(v)+s(w) restricts to [construct]

3.14 (α,β): q+r|C,     (α,γ): q+s|C,     (α,δ): q, (β,γ): r+s,       (γ,δ): s,          (β,δ): r. [construct]

3.15 Taking q=m₂, r=h₀₂ and s=h₁₂ realizes all six required pair classes simultaneously. This explicitly checks the stabilizer condition even when C≠0. It explains why prescribing the three exterior orientation systems independently would be wrong, and why transporting the specified one works. Every boundary-radical element of C is evaluated by the same formulas. [construct]

3.16 The same computation applies to each finite quadrilateral used for a slide, its inverse slide, and the small-isotopy comparison. Choose the classes successively along the move word and use this simultaneous extension on each inverse/composition configuration. At an end repeated diagram use the transported original class. A different move word need not induce the same automorphism; an isomorphism of the homology groups is what is needed here. [construct]

3.17 **Consequence for admitted actual multidiagrams.** On an actual weakly admissible configuration, the new signed exterior compactification and these compatible determinant orientations give the integer triangle and quadrilateral identities. The already constructed auxiliary unit and finite triangular isotopy inverse then give the signed handleslide equivalence and its two inverse homotopies with the transported class. The boundary-region stabilization is the literal old operator times the invertible constant factor, so it transports the same C-character. The relative compressionbody move word supplies the topology. On a zero-periodic homology-product branch C=0, and this paragraph specializes directly to the completed construction with no further choices. [construct]

4.1 **Keep a positive area form for the actual old pair.** Start with an actual weakly admissible (Σ,α,β). There is a positive area form ω annihilating every old periodic domain: separate the finite region coefficient subspace from the nonnegative orthant, then realize the resulting strictly positive region areas by positive smooth bumps and a sufficiently small positive background form. Fix this ω. Since ∂Σ≠∅, write ω=dλ. For a periodic domain Q, Stokes gives [construct]

4.2 area(Q)=∫∂Q λ. [construct]

4.3 This is an equality for signed two-chains, not a claim that every attaching circle is exact. Put A=span α, B=span β, C=A∩B as in the preceding construction. For u∈C the equality of α and β λ-periods follows exactly from old periodic area zero. [construct]

4.4 It suffices to construct γ and δ so that their λ-period functionals, expressed in the actual handle-slide bases of B, equal the β functional. Then every auxiliary periodic domain has area zero. Since the full triangle and quadrilateral domain groups are generated by the old C-domains and the auxiliary B-domains, every periodic domain of every required multidiagram has area zero. Positive ω then excludes a nonzero nonnegative periodic domain. This proves simultaneous weak admissibility, including auxiliary stabilizers, rather than inferring it from pairwise admissibility. [construct]

4.5 **An actual balanced slide patch.** Choose the slide band thin, with its interior disjoint from the other β circles. Its ribbon neighborhood is the actual planar two-handle patch used in the auxiliary unit construction. The four adjustable positive lobes have periodic domains [construct]

4.6 P₁=D₁−D₂−D₃,     P₂=D₃−D₄; [construct]

4.7 each spectator has P_i=E_i⁺−E_i⁻. Their span is all of the auxiliary B-domain group, not just the span of the sliding circle. This last fact follows also from the exact relation-group calculation for two copies of the same B: a domain is uniquely determined by its coefficient on one disk basis. [construct]

4.8 Construct the patch in area coordinates for the fixed ω. First make the band and all lobes so small that they lie in the chosen ribbon neighborhood. Prescribe [construct]

4.9 area(D₃)=area(D₄)=ε, area(D₂)=ε, area(D₁)=2ε, area(E_i⁺)=area(E_i⁻)>0. [construct]

4.10 These conditions are geometric choices, not a change of ω. To achieve them, reserve one subarc on each lobe boundary away from the intersections and the band junction. A normal displacement on that subarc changes its enclosed area continuously with nonzero derivative. The reserved subarcs have disjoint supports. Choose ε and the band width small first, then tune the remaining lobe areas in these subarcs. The D₃ band contribution is positive and can be made arbitrarily small; tune it first and then tune D₄, D₂, D₁ in that order. None of these displacements changes the crossing pattern, the slide-band isotopy class, or the strict convex corners. Spectator lobes are balanced by the same one-variable adjustment. The outside component continues to meet the actual boundary of Σ. [construct]

4.11 Thus ∫P₁ω=∫P₂ω=∫P_iω=0. Equivalently, the γ λ-periods are exactly the β λ-periods in the slid basis. The old C-periods have not changed: neither ω nor the old α,β circles was altered. Even if the ribbon patch crosses α circles, this statement remains true; its construction concerns the β-family only and the old periodic domains are still the original two-chains. [construct]

4.12 Choose δ as the small normal graph with the three-port placement used for the actual auxiliary triangle unit. Balance each positive and negative normal-graph lobe in ω-area. Then the βδ B-domains also have zero area. By subtraction so do the γδ domains. The three-port inequalities and the strict unit triangles remain valid: the area corrections occur along reserved open sides, away from the three ports and corners, and can be made arbitrarily small. Hence the same actual unit calculation is available on these simultaneously admissible diagrams. [construct]

4.13 For an elementary isotopy, use the same construction with a normal graph over the original circle: one positive lobe, one negative lobe of equal ω-area. It is an actual Hamiltonian deformation. Indeed, the normal velocity v_t along the moving circle satisfies ∫ι_{v_t}ω=0, because its λ-period is constant. Hence ι_{v_t}ω is the differential of a single-valued function on that circle. Extend that function to a thin annulus and cut it off outside; its Hamiltonian field has precisely the prescribed normal component. Different circles use disjoint annuli. [construct]

4.14 **Reaching prescribed diagrams rather than only specially balanced representatives.** A prescribed disk slide is represented by a slide band and a sufficiently small push-off; the balanced representative above uses that same band. Any other representative with the same band is isotopic to it. Thus it remains to realize a prescribed isotopy, not to assume that every representative is already action balanced. [construct]

4.15 Put the finite isotopy of one attaching family in generic position relative to the other. Its exceptional times are isolated ordinary tangencies creating or deleting a pair of intersections; between them the colored transverse curve graph has constant combinatorics. A compact isotopy can be approximated with finitely many such events. On an interval without an event, extend the velocity of the colored graph to an ambient vector field: at a crossing use the two transverse tangents as a basis, assigning their prescribed crossing-point velocity, then extend on the edges and patch in the complementary regions. Its flow carries the diagram exactly and carries the other family setwise. The induced surface diffeomorphism gives literal conjugacy of symmetric-product maps, operators, orientations, and domains after transporting J and ω. This step has no Hamiltonian or flux assumption. [construct]

4.16 At an exceptional event use its small disk normal form. Realize the creation/deletion by a sufficiently small normal bump of the moving circle. Add an opposite signed-area compensating bump on a different open subarc disjoint from the stationary family and every marked point. Such an arc exists because the intersection set is finite. Make the event disk small enough that its area is less than the capacity of the compensating strip. Vary that strip continuously so the total λ-period remains constant at every time. The compensating bump creates no intersection with the stationary family. Join the positive and negative graph portions with exactly two simple zeros. The resulting elementary move is Hamiltonian by the preceding primitive construction, and has exactly the required tangency event. Its endpoint and the prescribed local endpoint have the same colored graph, so the ambient-conjugacy step joins them. [construct]

4.17 This decomposes any prescribed finite isotopy into literal conjugacies and the admitted balanced elementary isotopies. Apply it also to the isotopy from a prescribed slide representative to the balanced representative of its band. No assertion that arbitrary non-Hamiltonian Lagrangian isotopies preserve Floer homology has been used. [construct]

4.18 **Actual consequence for the whole move word.** For each balanced elementary move, the complete finite triangle/quad configurations are weakly admissible by the fixed-positive-area argument. The signed exterior construction supplies their compactification. The transported C-character and the explicit K₄ extension supply their compatible signs. The actual auxiliary triangle is a unit, so the signed inverse and quadrilateral homotopies already constructed apply. Literal conjugacies transport the specified character. Ordinary stabilization is first converted by the relative geometry to the true boundary region and is then the literal old complex times its single invertible constant factor. [construct]

4.19 Consequently the relative compressionbody move word yields integral chain homotopy equivalences for the specified transported orientation class on general balanced sutured diagrams. The argument does not say that other C-characters produce the same homology. On the product/homology-product branch C=0, the character ambiguity disappears as previously proved. This supplies the new exterior move-admission operation required to use the nice cut diagram as an actual integral invariant, rather than only as a favorable chosen diagram. [construct] ∎
