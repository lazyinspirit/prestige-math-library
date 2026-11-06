---
id: thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism
kind: theorem
title: Virtual cochains, rational Thom augmentation and bordism for an oriented implicit atlas
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- def-gts-pardon-implicit-atlas-and-vfc-package
- thm-cellular-chains-compute-homology-with-local-coefficients
- thm-excision-and-mayer-vietoris-with-local-coefficients
- lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
  thm-cellular-chains-compute-homology-with-local-coefficients: mathematical-premise
  thm-excision-and-mayer-vietoris-with-local-coefficients: mathematical-premise
  lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Section 9.1–9.3 and Appendix B; the exact local constructions and reading limits are specified below.
dependency_level: 11
axiom_use: "Full AC is used in step 4.1 to assert exactness of arbitrary products of Q-vector spaces in the rigid-cover Čech comparison, and is also an explicit hypothesis of the compact-Hausdorff comparison supplier F4."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $Z$ be compact Hausdorff with a specified locally orientable implicit atlas of virtual dimension $d$, satisfying the corrected relative regular-locus, extra-section submersion, relative finite-group freeness and tame-boundary axioms of [[def-gts-pardon-implicit-atlas-and-vfc-package]]. Then there is an explicitly constructed rational virtual cochain complex, with its canonical natural derived comparison to Čech cochains with virtual orientation coefficients, and a normalized obstruction-space Thom augmentation. They define
$$[Z]^{\mathrm{vir}}:\check H^d(Z;o_{Z\operatorname{rel}\partial Z})\longrightarrow\mathbb Q.$$
For empty boundary use $o_Z$; for an oriented atlas these are the indicated constant rational orientation coefficients. The functional is independent of finite covering subatlas and compatible with the described chart shrinking/refinement maps. It is the ordinary fundamental pairing on an actually regular oriented manifold. The construction applies when the regular thickening manifolds are Hausdorff without a global second-countability assumption.

The construction respects its actual boundary connector: $[\partial Z]^{\mathrm{vir}}(a)=[Z]^{\mathrm{vir}}(\delta a)$ and $i_*[\partial Z]^{\mathrm{vir}}=0$. In particular a compact oriented implicit-atlas bordism of dimension $d+1$ between $Z_0,Z_1$, with a continuous map $F$ to $Y$, gives equality of the two endpoint pushforward functionals on $\check H^d(Y;\mathbb Q)$. Covariant pushforward is defined by precomposition with Čech pullback. All finite-isotropy factors are rational, including $|\Gamma_I|^{-1}$ on the Thom augmentation. This theorem is GIVEN an actual atlas and constructs no CR atlas or compactification.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[def-gts-pardon-implicit-atlas-and-vfc-package]] specifies the exact atlas, orientation, relative regularity and boundary convention; it does not assert the construction proved here.

[F2] [[thm-cellular-chains-compute-homology-with-local-coefficients]] gives the natural cellular/singular comparison for a CW pair with one ambient local system.

[F3] [[thm-excision-and-mayer-vietoris-with-local-coefficients]] gives actual transported subdivision/prism excision and Mayer–Vietoris, with no countability hypothesis.

[F4] [[lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology]] gives the compact-Hausdorff refinement-limit comparison, natural including coefficient connectors under AC. The supported-chain local duality, finite-group/DNC construction and Thom normalization are proved below, rather than imported.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 All ambient spaces in this section are Hausdorff and locally compact; the final base Z is compact Hausdorff. For a compact subset K, a complex F(K) is contravariant under inclusion of compact subsets. Call it a compact-support descent complex if: [F1, F2, F3, F4, given, construct, algebra]

2.1 (a) F(empty) is acyclic; (b) $F(K_{1} \cup  K_{2})→F(K_{1})$ direct-sum $F(K_{2})→F(K_{1} \cap  K_{2})$ is an acyclic total complex; (c) for a filtered decreasing family of compact supports $K_{i}$, the map colim $F(K_{i})→F(\cap  K_{i})$ is a quasi-isomorphism. [F1, F2, F3, F4, given, construct, algebra, step 1.1]

3.1 The stalk is F({z}). These are homotopy compact-presheaf conditions, not an assertion that each chain group is a sheaf. [F1, F2, F3, F4, given, construct, algebra, step 2.1]

4.1 Here is a STRICT comparison complex, avoiding a choice of refinement maps. Fix a well-order of the point set of compact K. A rigid closed cover assigns a closed neighbourhood $C_{x}$ to each x∈K, has only finitely many DISTINCT $C_{x}$, and satisfies x∈interior $C_{x}$. Its index set is always K, even when two assigned sets agree. Covers are ordered by C'_x subset $C_{x}$ for EVERY x; intersection gives a common refinement. Use products over increasing point-tuples of the coefficient groups on their $C_{x}$ intersections, and the alternating restriction differential. Refinement maps use the identity of this fixed index set and compose strictly. Take the directed colimit of these complexes. To compare one rigid cover with its finitely many distinct sets, choose one representative index for each distinct set; forgetting and reinserting repeated copies are inverse up to the explicit alternating prism inserting the two index choices. Thus its Čech complex is homotopy equivalent to that of a finite cover. Compact Hausdorff normality gives closed shrinkings of finite open covers and open enlargements of finite closed covers. Consequently this strict model computes precisely the refinement-colimit Čech convention in the corrected Definition. The products are products of Q-vector spaces and hence exact under the stated AC. Below its totalization is used only after good truncation to nonnegative internal degrees, so each total degree involves finitely many bidegrees. [F1, F2, F3, F4, given, construct, algebra, step 3.1]

5.1 For a fixed finite closed cover, the augmentation F(K)→Tot Čech(F) is a quasi-isomorphism. Prove this by induction on its number of sets: split off the last set and use (b) for its intersection with the union of the preceding ones; the three resulting finite-cover complexes are the mapping-cone form of that Mayer–Vietoris square. The one-set case is the identity. Condition (c) permits the neighbourhood refinements used in passing between open and closed covers. Thus F computes its own Čech hypercohomology. [F1, F2, F3, F4, given, construct, algebra, step 4.1]

6.1 Here is the exact purity argument, including the boundedness needed for that conclusion. Suppose the stalk cohomology is concentrated in degree zero and F is locally weakly bounded below in COHOMOLOGY. A compact support has a finite closed cover on which bounds exist; repeated (b) gives a bound on that support. Induct upward from that bound through degrees $i<0$. Once $H^{i-1}F$ is zero, the exact sequence from (b), together with (c), says $H^i F$ is an ordinary compact sheaf: its finite gluing sequence is exact, and its support-continuity is (c). Its zero stalks then force it to be zero: an element vanishes on a neighbourhood of each point, finitely many of these neighbourhoods cover its compact support, and finite gluing is injective. Consequently $H^i F(K)=0$ for every $i<0$. [F1, F2, F3, F4, given, construct, algebra, step 5.1]

7.1 There is now an actual canonical comparison ROOF (use the strict rigid-cover complex just defined) F(K) → $\tau _{\ge 0}F(K)$ → $\operatorname{\check C ech}(\tau _{\ge 0}F)(K)$ ← $\operatorname{\check C ech}(H^{0}F)(K)$.         (C) [F1, F2, F3, F4, given, construct, algebra, step 6.1]

8.1 The first arrow is good truncation, the second is the cover augmentation, and the last is the inclusion of degree-zero cycles in the good truncation. Strong negative vanishing proves the first is an objectwise quasi-isomorphism. Good truncation therefore inherits descent; the finite-cover argument and repeated-index prism prove the second is a quasi-isomorphism. For the last, its cone is bounded below and stalk-acyclic. A total Čech cocycle in fixed degree is killed after refinement: its lowest Čech-degree component is an internal cocycle; choose local internal primitives, take a finite closed refinement of their neighbourhoods and subtract their total coboundary. This removes that component and creates only the next Čech-degree component. Repeat; only finitely many degrees occur because the internal complex is bounded below. In its bottom internal degree the zero stalk kernel makes the remaining local cocycle zero after refinement. This proves acyclicity without assuming a global primitive or interchanging an unbounded spectral sequence. Thus (C) is a functorial quasi-isomorphism roof and gives $H^{q}$ F(K)=Čech $H^{q}(K;H^{0}F)$. [F1, F2, F3, F4, given, construct, algebra, step 7.1]

9.1 The argument also applies to bounded mapping cones of such complexes. Accordingly it preserves pair triangles and their connecting maps. In particular it is stronger than an arbitrary vector-space isomorphism after taking cohomology. [F1, F2, F3, F4, given, construct, algebra, step 8.1]

10.1 Let M be ANY Hausdorff topological n-manifold with boundary. No second-countability or paracompactness assumption is imposed on M. Let N be a closed tame codimension-zero submanifold-with-boundary of its boundary: locally N is absent, the full boundary, or one half of the boundary. Let Y be a closed subset of M, let j:M interior union N interior→M, and let L be a rank-one local coefficient system. Put, with $k=n-q$, $F_{Y}^{q}(K)=C_{k}(M,M \setminus  (K \cap  Y);L)$ $\oplus  C_{k-1}(N,N \setminus  (K \cap  Y);L).$ [F1, F2, F3, F4, given, construct, algebra, step 9.1]

11.1 The differential is (a,b)↦(boundary $a+i_*b,-\partial $ b). This is the ordinary homological cone of the inclusion from N, regraded cohomologically. It is viewed on the one-point compactification $Y^+$; a compact K containing infinity means K intersection Y, so infinity has zero stalk. [F1, F2, F3, F4, given, construct, algebra, step 10.1]

12.1 The descent conditions of §1 hold directly. Relative singular chains give (a). For (b), barycentric subdivision makes chains small for the two complement opens; the subdivision prism is a chain homotopy to the identity. The resulting ordinary Mayer–Vietoris complex is exact, and taking its relative quotient gives the asserted total acyclicity. For (c), a finite chain disjoint from the intersection of a filtered family of closed supports is disjoint from one member: its compact image has a finite subcover by the complement opens, and filteredness combines those finitely many indices. Thus the colimit map is in fact an isomorphism of relative chain groups. These arguments apply also to the N summand and its mapping cone. [F1, F2, F3, F4, given, construct, algebra, step 11.1]

13.1 The weak lower bound uses no countable exhaustion. First an open subset U of $R^{n}$ has $H_{k}(U;L)=0$ for $k\ge n$, with the usual exception of degree zero when $n=0$. A sufficiently fine grid has a finite union of closed cubes inside U containing the compact image of the given cycle. On that finite CW complex the actual published local cellular/singular comparison applies. There are no cells above dimension n; a finite n-cycle in $R^{n}$ is zero, since cancellation across adjacent n-cell faces transports its coefficients unchanged and a nonzero coefficient must propagate to an outer face, where it cannot cancel. This proves the assertion, also with local coefficients by their invertible face transports. The relative sequence then gives $H_{k}(U,U \setminus  Y;L)$=0 for $k>n$. The same finite cubical argument in half-space charts and their boundary proves the corresponding bound for boundary and tame-half-boundary cone pairs. This uses a grid only in coordinate domains, never a triangulation of the whole topological manifold. [F1, F2, F3, F4, given, construct, algebra, step 12.1]

14.1 For an arbitrary manifold, any finite chain and finite chain witnessing its relative boundary lie in a finite union of coordinate charts. That open union is second countable and normal, regardless of the whole M. Shrink this FINITE cover to closed sets, intersect with Y, and use the supported Mayer–Vietoris sequence. Each piece and each successive intersection lies in a chart; induction preserves the bound $H_{k}=0$ for $k>n$. Excision identifies the chart-supported pairs with their pairs in the union. Thus the supported cone is weakly bounded below. This is a finite-chain argument; no global countable atlas or global collar was used. [F1, F2, F3, F4, given, construct, algebra, step 13.1]

15.1 Its stalks are calculated in a ball, half-ball or tame quarter-ball by radial deformation of a punctured chart. At a point of M interior the only local group is the orientation line $o_{M}$ tensor L in $q=0$. At a point of N interior the boundary-to-interior cone gives the same line with its outward-normal-first orientation. At a boundary point not in N interior, including the edge of N, that local cone contracts and its groups vanish. At infinity the stalk is zero. These chart computations commute with chart changes by their action on the top local homology line. They therefore identify the degree-zero sheaf with extension by zero of $(o_{M} \otimes  L)$|_{M interior union N interior}, restricted to Y. [F1, F2, F3, F4, given, construct, algebra, step 14.1]

16.1 Applying the PROVED roof (C), and the finite-cover definition of compactly supported Čech cohomology on Y as relative cohomology of $Y^+$ at infinity, gives $H^{q}$ $F_{Y}(Y^+)=\operatorname{\check C ech}$ $H_{c}^{q}(Y; j_!j^*(o_{M} \otimes  L)|Y)$.                 (LD) [F1, F2, F3, F4, given, construct, algebra, step 15.1]

17.1 The maps in (LD) are natural for open restriction, inclusions of supports, the boundary cone, and products with oriented coordinate vector spaces. These assertions hold at the chain and orientation-sheaf level used in (C). In particular (LD) is not an invocation of a published duality theorem whose Statement assumed second countability. [F1, F2, F3, F4, given, construct, algebra, step 16.1]

18.1 If a finite group G acts on a locally compact Hausdorff space Y, the quotient map q is closed and proper. For a sheaf F, the stalk $(q_*F)_{x}$ is the finite direct sum of $F_{y}$ over the orbit above x: choose pairwise disjoint neighbourhoods of its finitely many points and shrink the quotient neighbourhood using closedness of q. Hence $q_*$ is exact. Rational G-invariants are exact by the averaging idempotent $|G|^{-1}\sum _{g}$ g, also on complexes and local systems. If $F=q^*L$ with its descent action, $(q_*F)^{G}=L$. These identities with compact supports and the comparison construction (C) give Čech $H_{c}^*(Y;q^*L)^{G}$ = Čech $H_{c}^*(Y/G;L)$. [F1, F2, F3, F4, given, construct, algebra, step 17.1]

19.1 This proof permits isotropy; freeness is required only for the relative chart covering degrees used below. The corrected local-orientability axiom ensures that the virtual orientation system is such a descended system even when G itself has stabilizers. [F1, F2, F3, F4, given, construct, algebra, step 18.1]

20.1 For any locally compact Y and local system L there is a canonical orientation-twisted suspension isomorphism Čech $H_{c}^{q+r}(Y \times  R_{>0}^{r}; L \otimes  o_{R}^{\otimes  r})$ $= \check H_c^q(Y;L).$ [F1, F2, F3, F4, given, construct, algebra, step 19.1]

21.1 For $r=1$, compactify the positive line at its two ends and use the relative interval cochain complex modulo its ends. Its sole reduced cohomology is the orientation line in degree one; the two-cone Mayer–Vietoris contraction gives the displayed shift for any Čech coefficient complex. Iterate, using the ordered super tensor convention. This proves precisely the sphere-suspension case needed here, not an unproved general Künneth theorem. [F1, F2, F3, F4, given, construct, algebra, step 20.1]

22.1 Fix a FINITE subatlas A of the corrected Definition and put $E_{A}=\bigoplus$ $E_{\alpha }$, $\Gamma _{A}=\prod$ $\Gamma _{\alpha }$, and $m=d+\operatorname{dim}$ $E_{A}$. For I subset J subset A define $D_{IJ}$ to be the set of [F1, F2, F3, F4, given, construct, algebra, step 21.1]

23.1 (e,t,x) in $E_{A}$ times $R_{\ge 0}^{A}$ times $Z_{J}^{reg}$ [F1, F2, F3, F4, given, construct, algebra, step 22.1]

24.1 with $t_{\alpha }=0$ outside I, $s_{\alpha }(x)=t_{\alpha }$ $e_{\alpha }$ for alpha in J, and $\psi _{K,J}(x)$ in $Z_{K}^{reg}$ for $K=\{\alpha :t_{\alpha }>0\}$. Let $D_{IJ}(K_{0})$ be its closed subset $e=0$ and $\psi _{\varnothing ,J}(x)$ in $K_{0}$, for compact $K_{0}$ subset Z. Denote by $N_{IJ}$ the part with x on the atlas boundary. [F1, F2, F3, F4, given, construct, algebra, step 23.1]

25.1 The RELATIVE submersion axiom, not transversality of $s_{J}$ itself, gives $D_{IJ}$ a manifold-with-corners structure of dimension m+|I|. To check at a face with positive parameters exactly K, use the local product coordinates for $s_{J \setminus  K}$ near $\psi _{K,J}^{-1}(Z_{K}^{reg})$. Its extra coordinates are solved by $z_{\alpha }=t_{\alpha }$ $e_{\alpha }$; the remaining variables are the regular K-chart coordinates, free e outside K, and the nonnegative t in I. This has exactly the displayed dimension and corner faces. At positive $t_{\alpha }$, solve $e_{\alpha }=s_{\alpha }(x)/t_{\alpha }$ instead. These descriptions agree on overlap. The boundary part $N_{IJ}$ is tame and its complementary boundary faces are $t_{\alpha }=0$. Corners may be straightened as topological manifold boundary; their ordering is retained in the orientation line. That orientation line is $o_{Z_{J}^{reg}}$ tensor $o_{E_{A}}$ tensor $o_{E_{J}}^{\mathrm{dual} }$ tensor $o_{R}^{\otimes  I}$. [F1, F2, F3, F4, given, construct, algebra, step 24.1]

26.1 Define the RELATIVE virtual partial complex by $A_{IJ}^{q}(K_{0})=C_{m-q}(D_{IJ},D_{IJ} \setminus  D_{IJ}(K_{0});o_{E_{A}}^{\mathrm{dual} })^{\Gamma _{A}}$. [F1, F2, F3, F4, given, construct, algebra, step 25.1]

27.1 Define its ABSOLUTE version by adding the boundary cone summand $C_{m-q-1}(N_{IJ},N_{IJ} \setminus  D_{IJ}(K_{0});o_{E_{A}}^{\mathrm{dual} })$ with differential (a,b)↦(boundary $a+i_*b,-\partial $ b). The finite-group invariant functor is exact over Q, so the conclusions of §§1–3 apply. [F1, F2, F3, F4, given, construct, algebra, step 26.1]

28.1 Let $V_{I}=\psi _{\varnothing ,I}(s_{I}^{-1}(0) \cap  Z_{I}^{reg})$, and let $j_{IJ}:V_{I}$ intersection $V_{J}→Z$. Apply (LD) to the closed support $D_{IJ}(K_{0})$. Removing the unselected t-boundary leaves the support $\psi _{\varnothing ,J}^{-1}(K_{0} \cap  V_{I} \cap  V_{J})$ times $R_{>0}^{I}$. [F1, F2, F3, F4, given, construct, algebra, step 27.1]

29.1 The orientation formula above cancels $o_{E_{A}}$ against its dual; Euclidean suspension cancels the |I| shift. Finite-group descent then gives $H^{q}$ $A_{IJ}(K_{0})$ = Čech $H^{q}(K_{0};(j_{IJ})_!(j_{IJ})^* o_{Z})$ [F1, F2, F3, F4, given, construct, algebra, step 28.1]

30.1 for the absolute version, and the same with $o_{Z \mathrm{rel}  \partial }=j_!j^*o_{Z}$ for the relative version. This calculation proves in particular that the partial complexes are pure compact-support descent complexes. Its local map sends a normal relative fundamental class to its virtual orientation germ; it is a specified comparison, not a dimension count. [F1, F2, F3, F4, given, construct, algebra, step 29.1]

31.1 For I subset I' subset J' subset J there is an actual map $D_{IJ}→D_{I'J'}$ given by $x↦\psi _{J',J}(x)$, with e unchanged and newly allowed parameters still zero. Its relative singular-chain pushforward is multiplied by $|\Gamma _{J \setminus  J'}$|^{-1}. [F1, F2, F3, F4, given, construct, algebra, step 30.1]

32.1 These weighted maps compose exactly. They preserve the absolute/relative boundary cone. On a common zero-footprint stalk the raw pushforward is the orientation map times the degree $|\Gamma _{J \setminus  J'}$|, because the RELATIVE group acts freely there. The displayed factor makes the induced orientation-sheaf map the identity. Maps outside the relevant footprints are extension by zero. This verifies the needed normalization and compatibility explicitly. [F1, F2, F3, F4, given, construct, algebra, step 31.1]

33.1 The virtual cochain complex is the following FINITE bar totalization: $C_{vir}^{q}(K_{0})=\bigoplus$ over $I_{0}$ strictly-subset ... strictly-subset $I_{p}$ subset A $A_{I_0,I_p}^{q+p}(K_0).$ [F1, F2, F3, F4, given, construct, algebra, step 32.1]

34.1 Use internal differential (-1)^p d and the alternating face differential deleting an $I_{i}$. For an endpoint use its weighted structure map; for an internal face use the identity. The two differentials anticommute and the simplicial faces square to zero, so this is an actual complex. It agrees with the finite-poset hocolim, but the displayed formula fixes its degrees and signs. Use the analogous relative partial complexes for $C_{vir}(K_{0} \mathrm{rel}  \partial )$. [F1, F2, F3, F4, given, construct, algebra, step 33.1]

35.1 Its p-filtration is finite. At a base point z the partial cohomology is $o_{Z,z}$ if z belongs to $V_{I}$ intersection $V_{J}$ and zero otherwise. The atlas axioms give: [F1, F2, F3, F4, given, construct, algebra, step 34.1]

36.1 $V_{I}$ intersection $V_{K}$ subset $V_{J}$ when I subset J subset K; $V_{I}$ intersection $V_{I'}$ subset $V_{I \cup  I'}$. [F1, F2, F3, F4, given, construct, algebra, step 35.1]

37.1 Thus the set $S_z=\{I:z\in V_I\}$ is nonempty, interval-convex in 2^A and closed under unions. It has the maximum $I_z=\bigcup S_z$. Its nerve contracts by adjoining that maximum to a chain, with the alternating last-vertex cone homotopy. The stalk bar complex is therefore $o_{Z,z}$ tensor the contractible nerve chain complex. It has just $o_{Z,z}$ in degree zero. The local orientation inclusions from $A_{II}$ patch, since the weighted maps were checked to be identity. Finite filtration preserves descent and weak lower boundedness. The purity comparison (C) now yields a NATURAL quasi-isomorphism roof $C_{vir}(K_{0})$ ~= $\operatorname{\check C ech}(K_{0};o_{Z})$, $C_{vir}(K_{0} \mathrm{rel}  \partial )$ ~= $\operatorname{\check C ech}(K_{0};o_{Z \mathrm{rel}  \partial })$.             (V) [F1, F2, F3, F4, given, construct, algebra, step 36.1]

38.1 This constructs the full comparison, including its functorial maps and finite-filtration convergence. It is not an assumed Pardon Theorem 4.3.4. [F1, F2, F3, F4, given, construct, algebra, step 37.1]

39.1 Put $T(E_{A})=C_{\operatorname{dim} E_{A}+*}(E_{A},E_{A} \setminus  0;o_{E_{A}}^{\mathrm{dual} })^{\Gamma _{A}}$. It has cohomology/homology Q in its zero degree and zero otherwise, with canonical generator $[E_{A}]$. This follows by radial contraction of a punctured vector space to its sphere and the elementary relative ball computation. The coefficient orientation dual makes $[E_{A}]$ canonical without choosing an orientation of $E_{A}$. [F1, F2, F3, F4, given, construct, algebra, step 38.1]

40.1 For $K_{0}=Z$, projection $D_{II}→E_{A}$ is a map of the support pairs. On the $p=0$ summand $A_{II}$, define the Thom augmentation by $\epsilon _{I}=|\Gamma _{I}|^{-1}(projection to E_{A})_*$. [F1, F2, F3, F4, given, construct, algebra, step 39.1]

41.1 Set it zero on $p>0$. It maps $C_{vir}^{d+*}(Z \mathrm{rel}  \partial )$ to $T(E_{A})$ with the reversed homological degree. This is a CHAIN MAP. Indeed, for an IJ edge its endpoint composites are both $|\Gamma _{J}|^{-1}$ times the SAME raw projection: the II endpoint includes $|\Gamma _{J \setminus  I}$|^{-1}, whereas the JJ endpoint already has coefficient $|\Gamma _{J}|^{-1}$. They cancel in the alternating boundary. For higher simplices the output is zero or is the same cancellation after deleting an interior face. The internal differential commutes with projection. This also fixes the normalization hidden by the phrase “induced by projection”: unweighted projections are not an augmentation for the weighted faces. [F1, F2, F3, F4, given, construct, algebra, step 40.1]

42.1 As a check, a point with one zero-dimensional obstruction chart, trivial action of Gamma on that chart, and empty empty-index regular locus has weight 1/|Gamma|. The ordinary regular empty-index atlas has weight one. These are consistent atlas-weight normalizations; no freeness of the full covering group was assumed. [F1, F2, F3, F4, given, construct, algebra, step 41.1]

43.1 For finite A subset A', shuffle cross product with the canonical relative class $[E_{A' \setminus  A}]$ and the map [F1, F2, F3, F4, given, construct, algebra, step 42.1]

44.1 $D_{IJ,A}$ times $E_{A' \setminus  A}→D_{IJ,A'}$ [F1, F2, F3, F4, given, construct, algebra, step 43.1]

45.1 set the extra t's to zero and give the atlas-refinement morphism in the derived category. One can choose any invariant relative cycle representing the class by averaging. Two choices differ by a boundary, so their chain maps differ by the explicit cross-product chain homotopy. Local duality identifies this morphism with the identity on $o_{Z}$; hence it is a quasi-isomorphism by (V). The weighted endpoint factors stay $|\Gamma _{I}|^{-1}$, so the augmentation commutes with this product, and $[E_{A}]$ times $[E_{A' \setminus  A}]=[E_{A}']$. This is the actual finite-subatlas independence proof. [F1, F2, F3, F4, given, construct, algebra, step 44.1]

46.1 Using (V), the augmentation and $[E_{A}]↦1$ define [Z]^vir : Čech $H^{d}(Z;o_{Z \mathrm{rel}  \partial })$→Q. [F1, F2, F3, F4, given, construct, algebra, step 45.1]

47.1 Every atlas has a finite covering subatlas by compactness. Two such finite choices are contained in their union, so the functional is independent of the choice. Open shrinking of charts gives pushforward on supported chain pairs; its local orientation map is identity and it commutes with epsilon. Therefore it gives the same functional. The construction is for a specified atlas, not a claim that arbitrary unrelated implicit atlases yield the same functional. [F1, F2, F3, F4, given, construct, algebra, step 46.1]

48.1 The absolute partial complex was the boundary inclusion cone. Taking its finite bar totalization preserves that cone, giving the chain triangle $C_{vir}(Z\ \mathrm{rel}\ \partial)\to C_{vir}(Z)\to C_{vir}(\partial Z)\to C_{vir}(Z\ \mathrm{rel}\ \partial)[1]$. [F1, F2, F3, F4, given, construct, algebra, step 47.1]

49.1 The orientation coefficient sequence is [F1, F2, F3, F4, given, construct, algebra, step 48.1]

50.1 $0\to o_{Z\ \mathrm{rel}\ \partial}\to o_Z\to i_*o_{\partial\ Z}\to0$, [F1, F2, F3, F4, given, construct, algebra, step 49.1]

51.1 with the outward-normal line and its parity retained. In the half-ball calculation of §2 the cone projection is exactly restriction to the outward-normal-first boundary orientation germ. Therefore the comparison roof (C) identifies the chain triangle with the Čech coefficient triangle, including its LAST connecting morphism, not only the first two maps. This follows also by applying the same roof to the mapping cone itself; its maps are the actual inclusion and projection. The augmentation commutes with the boundary connecting chain map, since projection to $E_{A}$ does, and the endpoint group factors are identical for the boundary atlas. Hence [boundary Z]^vir(a)=[Z]^vir(delta a) [F1, F2, F3, F4, given, construct, algebra, step 50.1]

52.1 for a in Čech $H^{d-1}(\partial  Z;o_{\partial })$. The composite delta after restriction from Z is zero by the cochain short-exact-sequence connector formula. Thus $i_*[\partial  Z]$^vir=0. [F1, F2, F3, F4, given, construct, algebra, step 51.1]

53.1 If an oriented atlas bordism B of dimension d+1 has boundary $Z_{1}$ disjoint-union $(-Z_{0})$, then for every continuous F:B→Y, $(F|Z_{1})_*[Z_{1}]^{vir}=(F|Z_{0})_*[Z_{0}]^{vir}$ [F1, F2, F3, F4, given, construct, algebra, step 52.1]

54.1 as functionals on Čech $H^{d}(Y;Q)$. Indeed evaluate on a, use the preceding boundary identity and $\delta (F|\partial )^*a=0$. This proves the topological bordism package GIVEN a compatible oriented bordism atlas. It does not construct an atlas over a path of almost-complex structures. [F1, F2, F3, F4, given, construct, algebra, step 53.1]

55.1 For a genuinely regular compact oriented d-manifold, the empty-index atlas already covers. Its complex is $C_{d-*}(Z,Z \setminus  Z)=C_{d-*}(Z)$, with the boundary cone in the boundary case. Formula (LD) identifies its augmentation to a point with the ordinary fundamental-class pairing. Thus the normalization is the ordinary oriented fundamental class. Disjoint union is direct sum on all the chain complexes and on the augmentation, giving additivity. [F1, F2, F3, F4, given, construct, algebra, step 54.1]

56.1 For a continuous f:Z→Y, define covariant pushforward ONLY by precomposition with Čech pullback: $(f_*[Z]^{vir})(a)=[Z]^{vir}(f^*a)$. Functoriality is literal composition of cochain pullbacks, and bordism invariance follows above. No BF Chow class, singular-homology identification for an arbitrary compact Hausdorff Z, fibre-product formula, Kontsevich–Manin axiom or localization theorem is inferred. [F1, F2, F3, F4, given, construct, algebra, step 55.1] ∎

## Remarks

A5 was authored by the complementary lane after actual reading of the saved Pardon text §§4.2–5.2 and Appendix A.5–A.8, with relevant compact-presheaf definitions in A.1–A.2. The three published basic interfaces are the actual pinned physics imports. No independent full geometric-atlas acceptance is implied; that atlas is a hypothesis of this abstract theorem.
