---
id: lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings
kind: lemma
title: Stabilizing slices and supported obstruction spaces for a nodal stable map
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
axiom_use: "Full AC is inherited through the closed-surface Fredholm, Sard–Smale, and Fredholm-index-stability suppliers used in F2–F4; no weaker choice strength is substituted."
deps:
- def-axiom-of-choice
- def-gts-pardon-gromov-topology-on-stable-map-moduli
- lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
- thm-sard-smale-residual-regular-values-for-fredholm-maps
- thm-euclidean-inverse-function-theorem
- thm-plancherel
- thm-fredholm-index-is-stable-under-compact-perturbations
- thm-bounded-inverse-theorem
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Lemmas9.2.7–9.2.9; the nodal Hilbert matching and away-special obstruction proof below avoids an invalid density
      claim in a higher Sobolev target.
dependency_level: 10
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-pardon-gromov-topology-on-stable-map-moduli: mathematical-premise
  lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint: mathematical-premise
  thm-sard-smale-residual-regular-values-for-fredholm-maps: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fredholm-index-is-stable-under-compact-perturbations: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $(C,\mathbf p,u)$ be a stable $J$-holomorphic map to a smooth compact tame almost-complex symplectic target $X$ of real dimension $2n$. The normalization has finitely many components and finitely many node preimages. There is a compact embedded codimension-two submanifold with boundary $D\subset X$, allowing $D=\varnothing$, transverse to $u$, with no preimage on its boundary, at nodes or at original markings, such that adjoining the finite set $u^{-1}(D)$ stabilizes the pointed DOMAIN.

For $k\ge3$, the actual linearized operator on the $H^k$ sections on the normalization whose two values match at every node is Fredholm into $H^{k-1}$ of normalized bundle-valued $(0,1)$ forms, of real index $2n(1-g)+2\langle c_1(TX),u_*[C]\rangle$. Smooth forcings supported away from every node and marking, and from any prescribed finite additional set of smooth points (in particular all the chosen slice preimages), span its finite-dimensional cokernel. Thus finitely many such forcings give a surjective finite-dimensional obstruction augmentation, with bounded right inverse.

Given a smooth local orbifold uniformizing family of the stabilized marked domain, those finitely many forcings extend to smooth obstruction forms on its universal curve times $X$, still supported away from its nodes and markings. For its finite group $\Gamma$, the induced real representation $E=\mathbb R[\Gamma]\otimes E_0$ makes this extension equivariant without losing surjectivity at the chosen map. Adding the isomorphism to that fiber rigidifies its entire thickened tuple. This supplies the auxiliary-slice and formal covering construction, but asserts no existence of the domain uniformizing family, nodal gluing theorem, compactness of varying domains, or VFC.

## Facts & Assumptions

**Given:** The smooth nodal stable map, normalization and target data, full AC, and a specified local universal family only for the last assertion.

[F1] Stable maps, normalization components and node matching use the current definition. A constant rational component has at least three special points and a constant elliptic component at least one; otherwise its automorphism group is infinite. [[def-gts-pardon-gromov-topology-on-stable-map-moduli]]

[F2] On each closed normalization component the actual real Cauchy–Riemann linearization is Fredholm in every Hilbert order, with smooth kernel, higher-range equality and real index $2n(1-g_v)+2c_1(u_v^*TX)$. [[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]]

[F3] Sard's finite-dimensional case and the inverse theorem apply to smooth finite-dimensional projection maps. [[thm-sard-smale-residual-regular-values-for-fredholm-maps]] [[thm-euclidean-inverse-function-theorem]]

[F4] Finite-rank perturbations preserve Fredholm index; Hilbert complements and the bounded inverse theorem give the bounded right inverse when the augmented operator is onto. Plancherel supplies the precise local negative-Sobolev norm. [[thm-fredholm-index-is-stable-under-compact-perturbations]] [[thm-bounded-inverse-theorem]] [[thm-plancherel]]

## Proof

1.1 Any component unstable as a pointed curve must be nonconstant: otherwise its infinitely many pointed-domain automorphisms would preserve the map, contradicting stability. A nonconstant map has an open set where $du\ne0$; complex linearity from a complex line then makes $du$ injective. On that open set choose as many distinct points as are needed to stabilize the component, avoiding all special points and finitely many previously chosen target values. This is possible because the map is an immersion on an open patch and hence has infinitely many distinct values there. There are finitely many components and finitely many missing special points. [F1, given, construct, algebra]

2.1 At each such point choose a small target coordinate ball and a linear projection to its two-dimensional tangent image, with invertible derivative on the source patch. Choose a regular value arbitrarily close to that projected value for the projection composed with ALL normalized component maps: this is a smooth map from the finite disjoint union of the normalized two-dimensional open source preimages to $\mathbb R^2$, a finite-dimensional Fredholm map of index zero. By [F3], its regular values form a residual dense set; no measure-zero conclusion beyond that supplier is needed. Avoid also the finitely many projected node and marking values. The inverse theorem ensures that the fiber has a source point near the chosen one. Intersect the projection fiber with a small closed transverse-coordinate ball. The inverse image of this regular projection value in the open source preimage of the target coordinate ball is discrete, hence countable: a second-countable surface has at most countably many points in a discrete subset. Its transverse-coordinate radii therefore form a countable set. Choose a radius outside that set, larger than the radius of the selected source image and small enough that the closed disk remains inside the target chart. This makes the disk boundary disjoint from every source image. This argument uses countability before compactness and does not assume the desired boundary avoidance. This gives a compact transverse codimension-two disk, disjoint from node/marking images. Its full preimage is discrete and closed in compact $C$, hence finite. For target dimension2 the transverse disk is a point and has no boundary. [F3, step 1.1, construct, algebra]

3.1 The finitely many chosen target values are distinct, so their balls may be chosen disjoint. Their transverse disks have disjoint union $D$, an embedded compact submanifold with boundary. All preimages are transverse and nonspecial, and the selected points supply every missing domain special point. Additional preimages only add markings. Constant components were already stable. If no extra points are needed take $D=\varnothing$. This proves the full stabilization assertion without assuming somewhere-injectivity of the whole map. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Let $B_k=\bigoplus_vH^k(u_v^*TX)$ and $Y_{k-1}=\bigoplus_vH^{k-1}(\Lambda^{0,1}T^*C_v\otimes u_v^*TX)$. The node-difference evaluation $\Delta:B_k\to\bigoplus_{e}T_{u(e)}X$ is bounded and onto: disjoint smooth cutoff sections at the two preimages of every node give arbitrary prescribed values, and point evaluation is bounded for $k\ge3$. Choose their finite-dimensional smooth lift $K$. Then $B_k=\ker\Delta\oplus K(\bigoplus_eT_{u(e)}X)$. The direct-sum Cauchy–Riemann operator $P$ is Fredholm by [F2]. Its finite-rank modification $P-PK\Delta$ is exactly $P|_{\ker\Delta}\oplus0$ in this splitting. Thus [F4] gives Fredholmness of the actual matched operator with index $\sum_v[2n(1-g_v)+2c_1(u_v^*TX)]-2n\#\{\text{nodes}\}=2n(1-g)+2c_1(u_*[C]),$ using $g=\sum_vg_v+\#\{\text{nodes}\}-\#\{\text{components}\}+1$. This includes self-nodes, whose two normalization points are distinct. [F1, F2, F4, construct, algebra, step 3.1]

5.1 First use $k=3$. Include every slice preimage from step 3.1 and any other prescribed finite smooth avoidance set among the special points in this argument. If smooth forcings supported away from that finite special set failed to span its cokernel, finite-dimensional duality would give a nonzero continuous functional $\ell$ on $Y_2$ annihilating both the matched range and all those forcings. Its distributional representative is supported on the finite special set. In a fixed local patch the $H^2$ bound makes its order at most2; multiplying a test with zero two-jet at the special point by a shrinking cutoff and using Taylor's formula shows it annihilates that test. Thus it is a linear combination of the Dirac mass and its derivatives through order2. Its actual membership in $H^{-2}$, from Plancherel duality, rules out all derivative terms: a nonzero derivative gives a Fourier polynomial of degree $r\ge1$, whose weighted squared integral dominates $\int^\infty R^{2r-3}dR$ on a cone and diverges. Hence locally $\ell$ is only a vector Dirac evaluation. [F4, step 4.1, construct, algebra]

6.1 Every such Dirac coefficient vanishes. Choose a smooth section with value ZERO at all special points, supported near one chosen normalized preimage, and with an arbitrary first jet there. It obeys all node-matching constraints. The principal Cauchy–Riemann symbol lets its image at that one point be prescribed arbitrarily, while every other special-point image is zero. The zeroth-order coefficient contributes nothing because the section value is zero. Annihilation of the matched range forces the chosen vector Dirac coefficient to be zero. Repeat finitely many times. This contradicts $\ell\ne0$. Consequently the away-special smooth forcings surject onto the finite cokernel. This proof does NOT say those forcings are dense in $H^2$, which would be false because point evaluation is continuous. [F2, F4, step 4.1, step 5.1, construct, algebra]

7.1 Select finitely many such smooth forcings whose cokernel classes form a basis and let $E_0$ be their finite span. The augmented operator on matched sections and $E_0$ is onto. Higher-range equality in [F2] preserves node values while promoting every preimage, so the same augmentation is onto in every higher integer Hilbert order, with the same smooth finite-dimensional kernel/cokernel realization. Its restriction to the kernel orthogonal complement gives a bounded right inverse by [F4]. This proves the stated actual Sobolev realization without ever putting a point constraint on ordinary $H^1$. [F2, F4, step 4.1, step 6.1, construct, algebra]

8.1 In the given stabilized domain family, the compact support of every chosen forcing is covered by finitely many product neighborhoods away from all nodes and marked sections. Extend its source-form coefficients smoothly in those product base coordinates, using a base cutoff equal to one at the chosen fiber. Extend its target tangent coefficients off the graph of $u$ by smooth local bundle frames and cutoffs on small target coordinate balls, and sum a finite smooth partition on the compact support. This gives smooth forms on the family times $X$ restricting to the chosen forcing and still supported away from special points. Finite target/source covers make every choice concrete. [given, step 3.1, step 7.1, construct, algebra]

9.1 For the finite uniformizing group $\Gamma$, define $E=\bigoplus_{g\in\Gamma}E_0$ with the regular permutation action and define its obstruction map by summing the $g$-translates of the extension on the $g$ summand. It is equivariant, and the identity summand still contains the original cokernel-spanning forcing, so surjectivity is retained. The isomorphism $\phi:C\to C_\alpha$ to its selected fiber makes any automorphism of the FULL thickened tuple trivial: $\phi\circ\iota=\phi$ and injectivity of $\phi$ force $\iota=\mathrm{id}$. This does not say the full covering-group action on isomorphism classes is free. The required stabilization and formal regular lift are therefore obtained. Nothing in this construction proves local nodal gluing or the existence of the specified uniformizing family; those remain the exact subsequent geometric obligations. [given, step 7.1, step 8.1, construct, algebra] ∎
