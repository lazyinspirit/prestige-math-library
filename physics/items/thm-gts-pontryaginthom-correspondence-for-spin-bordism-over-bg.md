---
id: thm-gts-pontryaginthom-correspondence-for-spin-bordism-over-bg
kind: theorem
title: Pontryagin–Thom correspondence for normal Spin bordism over an independent BG
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
proof_strategy: direct
axiom_strength: ZF + full AC inherited from the imported classifying-space and transversality suppliers.
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-universal-principal-bundle-and-classifying-space
  - def-disk-sphere-and-thom-space-of-a-metric-vector-bundle
  - def-axiom-of-choice
  - lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space
  - thm-transversality-homotopy-theorem
  - thm-strong-whitney-approximation-by-transverse-maps
  - thm-relative-whitney-approximation-for-manifold-valued-maps
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms
  - def-pontryagin-thom-collapse-of-an-embedded-submanifold
  - thm-euclidean-tubular-neighbourhood-theorem
  - lem-stabilizing-a-normal-bundle-suspends-its-thom-space
  - def-stable-homotopy-groups-of-a-sequential-prespectrum
  - lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models
  - thm-relative-whitney-approximation-for-euclidean-valued-maps
  - thm-parametric-transversality
  - def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-real-pin-spin-topological-double-covers
justified_by: []
dependency_roles:
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  def-universal-principal-bundle-and-classifying-space: mathematical-premise
  def-disk-sphere-and-thom-space-of-a-metric-vector-bundle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space: mathematical-premise
  thm-transversality-homotopy-theorem: mathematical-premise
  thm-strong-whitney-approximation-by-transverse-maps: mathematical-premise
  thm-relative-whitney-approximation-for-manifold-valued-maps: mathematical-premise
  prop-relative-transversality-preserves-a-map-on-a-closed-good-region: mathematical-premise
  lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms: mathematical-premise
  def-pontryagin-thom-collapse-of-an-embedded-submanifold: mathematical-premise
  thm-euclidean-tubular-neighbourhood-theorem: mathematical-premise
  lem-stabilizing-a-normal-bundle-suspends-its-thom-space: mathematical-premise
  def-stable-homotopy-groups-of-a-sequential-prespectrum: mathematical-premise
  lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models: mathematical-premise
  thm-relative-whitney-approximation-for-euclidean-valued-maps: mathematical-premise
  thm-parametric-transversality: mathematical-premise
  def-sequential-prespectrum-spectrum-and-adjoint-structure-maps: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  thm-real-pin-spin-topological-double-covers: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: R. E. Stong, Notes on Cobordism Theory
      url: https://api.pageplace.de/preview/DT0400.9781400879977_A26112653/preview-9781400879977_A26112653.pdf
      locator: Chapter II, Manifolds with Structure—The Pontryagin–Thom Theorem, reprint pp. 14–26 (preview PDF pp. 21–33).
    - title: Konstantin Wernli, Lecture Notes on Spin Geometry
      url: https://arxiv.org/pdf/1911.09766v1
      locator: §2.3.1–2.3.2 through Remark 2.3.18, printed pp. 60–68 (PDF pp. 61–69), for Spin lifts and the obstruction/torsor convention. The Thom-spectrum and structured-collapse construction is supplied locally; Section 4 concerns the analytic index theorem and is not cited as a Thom-spectrum source.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X$ be a topological space homotopy equivalent to a CW complex, and let $n\ge0$. For the spectrum expression choose a CW complex $X^{\mathrm{cw}}$ and homotopy inverse maps $h:X^{\mathrm{cw}}\to X$ and $r:X\to X^{\mathrm{cw}}$. The notation $\pi_n(M\operatorname{Spin}\wedge X_+)$ means $\pi_n(M\operatorname{Spin}\wedge(X^{\mathrm{cw}})_+)$, with labels transported by $r$. Postcomposition with $h$ transports the resulting bordism classes back to $X$. Use CW universal classifying-space models for the compact Lie groups $\operatorname{Spin}(k)$ and their associated universal bundles. All products, Thom quotients, smash products and suspensions on the spectrum side are formed in based compactly generated weak Hausdorff spaces; Thom basepoints are nondegenerate, using the radial collar of the sphere bundle. Thus the stage spaces are well-pointed and the stable-group definition applies. The notation for general $X$ is a homotopy-model convention, not an assertion that the original topology of $X$ is compactly generated weak Hausdorff. Write $B\operatorname{Spin}=\operatorname{colim}_{k}B\operatorname{Spin}(k)$, $BSO=\operatorname{colim}_{k}BSO(k)$, and $BO=\operatorname{colim}_{k}BO(k)$, with the direct-limit topologies for the stabilization systems that add a trivial real line. For a closed smooth $n$-manifold $M$, a stable normal bundle is the normal complement of $TM$ in a trivial finite-rank bundle from a smooth embedding, considered up to adding trivial real lines. A stable normal Spin structure $\sigma_\nu$ is a homotopy class of lifts of the stable classifying map of this bundle through the induced maps $B\operatorname{Spin}\to BSO\to BO$. Define $\Omega_n^{\mathrm{Spin,nor}}(X)$ to be the set of bordism classes of triples $(M^n,f,\sigma_\nu)$ with $f:M\to X$ continuous. A bordism is a compact smooth $(n+1)$-manifold $W$ with boundary identified with $M_0\amalg(-M_1)$, a compatible stable normal Spin structure restricting to the endpoint structures under the outward-normal convention, and a continuous map $W\to X$ restricting to the endpoint maps. Disjoint union gives the group operation, with inverse given by orientation reversal of the Spin bordism data. For each $k\geq0$, let $E\operatorname{Spin}(k)\to B\operatorname{Spin}(k)$ be a contractible numerable universal principal $\operatorname{Spin}(k)$-bundle and let $\gamma_k^{\operatorname{Spin}}=E\operatorname{Spin}(k)\times_{\lambda_k}\mathbb R^k$ be its associated universal oriented $k$-plane bundle, with $\lambda_k:\operatorname{Spin}(k)\to SO(k)$ as in the Spin definition. Use the standard stabilization inclusions fixing the last coordinate; they induce $B\operatorname{Spin}(k)\to B\operatorname{Spin}(k+1)$ and identify $\gamma_k^{\operatorname{Spin}}\oplus\underline{\mathbb R}$ with the pullback of $\gamma_{k+1}^{\operatorname{Spin}}$. Define the sequential Thom prespectrum $M\operatorname{Spin}$ by

$$ (M\operatorname{Spin})_k=\operatorname{Th}(\gamma_k^{\operatorname{Spin}}),\qquad \sigma_k:\Sigma\operatorname{Th}(\gamma_k^{\operatorname{Spin}})\cong\operatorname{Th}(\gamma_k^{\operatorname{Spin}}\oplus\underline{\mathbb R})\longrightarrow\operatorname{Th}(\gamma_{k+1}^{\operatorname{Spin}}), $$

where $\operatorname{Th}$ is the disk/sphere quotient and $\sigma_k$ is induced by the stated bundle inclusion. The term $\pi_n$ below is the stable homotopy group, the colimit of stage homotopy groups under these structure maps. Then Pontryagin–Thom collapse gives a natural isomorphism

$$\Omega_n^{\mathrm{Spin,nor}}(X)\cong\pi_n(M\operatorname{Spin}\wedge X_+).$$

For a compact Lie group $G$ used as independent gauge-background data, take $X=BG$. This formula treats the map to $BG$ as independent data; it does not classify a fused tangential $\operatorname{Spin}^G$ structure.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[def-universal-principal-bundle-and-classifying-space]]

[[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]]

[[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]]

[[def-stable-homotopy-groups-of-a-sequential-prespectrum]]

## Facts & Assumptions

**Given:** $X$ of CW type, a closed smooth $n$-manifold, a stable normal embedding, a stable normal Spin lift and a continuous map to $X$.

[F1] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]: a Spin lift is a principal Spin bundle mapping equivariantly to the oriented frame bundle; stabilization is the corresponding stable normal structure.

[F2] [[def-universal-principal-bundle-and-classifying-space]]: numerable principal bundles are represented by classifying maps to their universal classifying spaces.

[F3] [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]]: the Thom space is the based disk/sphere quotient of the supplied bundle.

[F4] [[lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space]]: every compact smooth manifold admits a finite-dimensional Euclidean embedding.

[F5] [[thm-transversality-homotopy-theorem]] and [[thm-strong-whitney-approximation-by-transverse-maps]]: smooth representatives can be homotoped or approximated to be transverse to a closed embedded zero section.

[F6] [[lem-stabilizing-a-normal-bundle-suspends-its-thom-space]]: adjoining a trivial normal line suspends the Thom space, so stable normal stabilization agrees with spectrum suspension.

[F7] [[thm-relative-whitney-approximation-for-manifold-valued-maps]] and [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]: a homotopy already transverse near its closed endpoint region can be smoothed and perturbed while fixed on a smaller endpoint neighbourhood.

[F8] [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]] and [[thm-euclidean-tubular-neighbourhood-theorem]]: a tubular neighbourhood defines the based collapse map; [[def-stable-homotopy-groups-of-a-sequential-prespectrum]] interprets its stabilized homotopy class.

[F9] [[lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms]]: a based homotopy made transverse near its zero-section preimage has a normal cobordism as its inverse image; its argument applies to an additional continuous map into $X$ by restricting that map to the preimage.

[F10] Every continuous finite-rank Euclidean bundle on a Hausdorff second-countable smooth source has a smooth isometric model, and its orientation and Spin/Spin-c lifts transport to that model. [[lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models]]

[F11] A continuous Euclidean-valued section can be approximated by a smooth one with a prescribed positive pointwise error and fixed on a neighborhood where it was already smooth; this applies in finitely many local bundle charts after choosing a smooth model. [[thm-relative-whitney-approximation-for-euclidean-valued-maps]]

[F12] For a smooth finite-dimensional family of maps transverse to the zero section, parameters outside a null set give transverse slices. For a section, the family is made submersive by adding finitely many compactly supported local sections spanning the fibers. [[thm-parametric-transversality]]

[F13] The stable Spin classifying spaces and Thom prespectrum in the Statement use the sequential prespectrum and structure-map conventions of [[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], and stable homotopy groups are the colimits defined in [[def-stable-homotopy-groups-of-a-sequential-prespectrum]]. The supplier [[thm-real-pin-spin-topological-double-covers]] makes $\operatorname{Spin}(k)\to SO(k)$ a two-sheeted covering. Since $SO(k)$ is compact smooth, covering charts give $\operatorname{Spin}(k)$ a compact smooth manifold structure, also when $k=0$ (a finite discrete manifold). It is Hausdorff and second-countable, hence has CW type by [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]. A coordinate-ball radial contraction with a cutoff makes its identity inclusion a cofibration, so the classifying-space convention of [F2] applies.

## Proof

**Given:** The data above and the stated classifying, embedding, transversality and Thom-space inputs.

1.1 First reduce to the chosen CW model. Postcomposition by $h$ and $r$ induces inverse maps on bordism classes: each specified homotopy, composed with a cycle label, supplies the required cylinder bordism with its product normal Spin structure. The same homotopies on CW models induce based smash homotopies and hence inverse stable-group maps. Two choices of model are compared by composing their homotopy inverses, so these identifications are independent of the choice and natural in $X$. In the remaining construction write $X$ for the CW model; the final isomorphism is transported back by the maps just described. Embed $M$ in $\mathbb R^{n+k}$ using [F4] and let $\nu$ be its normal bundle. The stable normal Spin lift classifies $\nu$ into the finite-stage universal Spin bundle after increasing $k$ if necessary; [F2] supplies the classifying map. Choose a tubular chart $\Phi:D_\rho(\nu)\to\mathbb R^{n+k}$, a classifying map $c:M\to B\operatorname{Spin}(k)$, and a bundle isometry $a:\nu\cong c^*\gamma_k^{\operatorname{Spin}}$ for the given normal Spin lift. On the tube define the based labeled collapse by $\Phi(x,v)\mapsto [a_x(v/\rho)]\wedge f(x)\in\operatorname{Th}(\gamma_k^{\operatorname{Spin}})\wedge X_+$ for $\|v\|<\rho$, and send the tube boundary and its complement to the basepoint. The Thom quotient makes this map continuous; $f$ is used on the tubular projection $x$ and is not extended over the complement. The quotient identity $\operatorname{Th}(\gamma_k^{\operatorname{Spin}})\wedge X_+=\operatorname{Th}(\operatorname{pr}_1^*\gamma_k^{\operatorname{Spin}}\to B\operatorname{Spin}(k)\times X)$ follows by presenting both sides as the disk bundle with its sphere and $X$-basepoint subsets collapsed. Thus the labeled collapse determines a class in $\pi_n(M\operatorname{Spin}\wedge X_+)$. A bordism embedded in $\mathbb R^{n+k}\times[0,1]$ gives a homotopy of these collapse maps; [F6] identifies changes of $k$ with suspension. [F1, F2, F3, F4, F6, F8, F13, given, construct]

1.2 Conversely, represent a stable class by a based map $g:S^{n+k}\to\operatorname{Th}(\gamma_k^{\mathrm{Spin}})\wedge X_+$ at a finite stage, increasing $k$ so that $k>0$. Write $W$ for the open inverse image of the uncollapsed open disk bundle, and write its data as $(b(x),s(x),f(x))$, with $E=b^*\gamma_k^{\mathrm{Spin}}$, $\|s(x)\|<1$, and $f:W\to X$ continuous. The fiber norm, extended by $1$ at the Thom basepoint, is a continuous scalar function, so its zero preimage $K$ is compact and lies in $W$. Choose nested relatively compact neighborhoods of $K$ inside $W$. On the largest use [F10] to choose a smooth metric model $E'$ and an isometry $T_x:E'_x\to E_x$; transport the given Spin lift through $T$. In a finite bundle atlas, approximate $T^{-1}s$ by a smooth section with [F11], summing the local approximations with a smooth partition of unity. On a compact annulus outside a smaller neighborhood of $K$, the original section has positive norm minimum, and on the whole compact support its norm has maximum strictly below $1$. Choose the approximation smaller than these two margins. A finite collection of smooth sections supported in the smaller neighborhood spans the fibers near $K$; after a sufficiently small perturbation all possible zeros still lie where they span. Their evaluation family is a submersion at its zeros, so [F12] gives a transverse slice arbitrarily close to the approximation. Blend this slice with $T^{-1}s$ by a cutoff equal to one on the entire possible-zero neighborhood and zero off the larger neighborhood. The resulting continuous section $s_1$ equals a smooth transverse section near its zeros, has no other zeros, and stays in the open unit disks. The straight interpolation from $T^{-1}s$ to $s_1$, mapped by $T$, is a based homotopy supported in that compact neighborhood; $b$ and $f$ are unchanged in this first homotopy. Thus $Z=s_1^{-1}(0)$ is a compact smooth $n$-manifold. The vertical derivative induces an isomorphism $A:\nu_Z\to E'|_Z$; give $\nu_Z$ the metric pulled back by $A$, and give it the normal Spin lift transported through $A$ and $T$. We now construct the structured inverse homotopy, including the base and label coordinates. Choose a compatible tube $\phi:D_{2\rho}(\nu_Z)\to W$ by [F8], with compact closed image, contained in the region where $s_1$ is smooth, and choose $0<2\rho<1$. A metric connection on $E'$ identifies $E'_{\phi(z,v)}$ with $E'_z$ by parallel transport along $a\mapsto\phi(z,av)$; such a connection is obtained by averaging the metric local-frame connections with a smooth partition of unity. Denote transport from $z$ to $\phi(z,v)$ by $P_{z,v}$. In these identifications, $s_1(\phi(z,v))=A_zv+R(z,v)$, where $\|R(z,v)\|/\|v\|\to0$ uniformly in $z$: the vertical derivative is $A$, and compactness of $Z$ makes its continuity estimate uniform in a finite tube atlas. Shrink $\rho$ until $\|R\|\le\|v\|/2$ for $\|v\|\le2\rho$. Choose a cutoff $\beta(r)$ equal to one for $r\le\rho$ and zero near $2\rho$. Interpolate $s_1$ to $s_2=s_1+\beta(r)(P_{z,v}A_zv-s_1)$ in the tube and leave it unchanged elsewhere. At every interpolation time its transported value differs from $A_zv$ by at most $r/2$, so it is nonzero for $r>0$ and its only zeros remain $Z$. Shrinking the tube also keeps all norms below $1$. This homotopy again fixes $b$ and $f$, and its fiber derivative on $Z$ stays $A$. In particular, on $r\le\rho$ the final section is exactly $P_{z,v}A_zv$, of norm $r$. Define a continuous source function $\alpha$ by $\alpha(\phi(z,v))=r/\rho$ for $r\le\rho$ and $\alpha=1$ off that open tube. For $0\le t\le1$ replace the disk vector $w=T s_2$ at $x\in W$ by
$$Q_t(x)=\frac{w}{1-t\alpha(x)+t\alpha(x)\|w\|},$$
interpreting a vector of norm $1$ as the Thom basepoint. Its denominator is positive wherever the formula is needed: at a zero, $\alpha=0$, and when $t=\alpha=1$ the vector is nonzero. Outside $W$ keep the basepoint. This is a continuous based homotopy, including $t=1$. To check the quotient issue, the radial formula $w\mapsto w/(1-u+u\|w\|)$ is continuous on each disk bundle away from $(w,u)=(0,1)$, preserves the unit sphere, and at $u=1$ sends every nonzero vector to that sphere. It therefore descends to the Thom quotient and to its smash with $X_+$; taking the product of the quotient map with the compact interval preserves the quotient property. Near $Z$ our $u=t\alpha$ is bounded away from $1$. On the compact source complement of a smaller tube, the continuous original fiber norm has a positive lower bound, including norm $1$ at basepoint values, so the descended formula is continuous there through $u=1$. These two regions cover the source. Thus no uniform choice of a neighborhood in the possibly noncompact classifying base or any smoothness of $X$ is required. At $t=1$ the complement of $r<\rho$ is the basepoint. On that tube the fiber direction is $P_{z,v}A_zv$ and its norm is the radial function
$$h(r)=\frac{r}{1-r/\rho+r^2/\rho},\qquad h(0)=0,\quad h(\rho)=1.$$
Only now change the base and label. For $0\le u\le1$ put $x_u=\phi(z,(1-u)v)$ and replace the tube data by
$$\left(b(x_u),\ T_{x_u}P_{z,(1-u)v}A_zv\,\frac{h(r)}r,\ f(x_u)\right),$$
with zero vector at $r=0$ and the basepoint on $r=\rho$ and off the tube. At $u=0$ this is exactly the localized map; at $u=1$ it has base $b(z)$, label $f(z)$ and vector $T_zA_zv\,h(r)/r$. This formula is continuous at $r=0$ since $h(r)/r\to1$, and at the tube boundary since it is a continuous disk-bundle formula on the compact closed tube times the parameter interval whose boundary vectors all have norm $1$. The quotient therefore pastes to the constant complementary map. In particular, the classifying coordinate and the $X$-label are explicitly moved together along radial source paths; neither a contraction in $X$ nor a homotopy of $f$ chosen independently of $b$ is being assumed. Finally replace $h(r)$ by $(1-u)h(r)+ur/\rho$. This stays positive for $0<r<\rho$, equals zero at $0$ and one at $\rho$, so gives another continuous homotopy. Its endpoint is precisely the collapse of the compatible normal datum $A^{-1}:E'|_Z\to\nu_Z$, followed by the classifying map with its transported Spin lift and the zero-set label $f|_Z$. The derivative identification and the transported Spin structure are the very ones used to define the extracted cycle. If the zero set is empty, the same radial formula with $\alpha=1$ collapses the entire map, since the norm on its compact source is bounded below away from zero. All these formulas also work on compact collar-product families: choose tube, connection and cutoffs productwise on the collars, and their restrictions are exactly the corresponding endpoint constructions. This compatibility is not an assertion that an arbitrary label is fixed during the inverse homotopy; it is the explicit restriction compatibility used for endpoint-fixed normal bordisms. Hence the collapse of the extracted Spin cycle represents the original stable class. [F1, F2, F3, F5, F8, F10, F11, F12, given, construct]

2.1 The collapse class is independent of the embedding after stabilization. Stabilize two embeddings $e_0,e_1:M\to\mathbb R^N$ to the same dimension and join them in $\mathbb R^{2N}$ by $e_t(x)=(\cos(\pi t/2)e_0(x),\sin(\pi t/2)e_1(x))$. At every $t$ at least one coefficient is nonzero; injectivity and injectivity of the differential follow from the corresponding embedding, so each $e_t$ is an embedding. The normal bundles form a bundle over $M\times[0,1]$ carrying the transported stable Spin lift, and their collapse maps form a homotopy. Thus bordant cycles determine the same stable class. [F1, F3, F6, step 1.1, algebra]

3.1 Suppose two cycle collapse maps are joined by a based homotopy $H$, after the stabilization in [F6]. Reparameterize time to make $H$ constant on endpoint collars, and extend it constantly a little past both endpoints. The resulting source is boundaryless near the closed time slab. The inverse image $W$ of the uncollapsed open disk bundle carries continuous data $(b,s,f)$, including its pulled-back Spin bundle; its zero preimage in the original closed time slab is compact by the continuous fiber-norm function used in step 1.2. Only this compact set, together with its continuation over smaller closed endpoint collars, is used below; the entire zero preimage in the extended open interval need not be compact. On each endpoint collar and sufficiently near its zero set, the bundle is isometrically identified with the pullback of the original smooth normal bundle, and $s$ is its smooth linear normal section times the fixed collapse scale. This assertion concerns the pulled-back bundle and its section, not smoothness of the continuous universal classifying map or the $X$-label. Choose a relatively compact open neighborhood $N$ of that compact set in the extended source, with closure in $W$, and restrict to smaller tubes on its endpoint collars if necessary. All zero-free annulus bounds and perturbation supports below are taken over the closed time slab, with the endpoint collars protected; no zero-free bound is asserted on an outer collar boundary containing continued zeros. We require a smooth model of the bundle that respects these given collar data. Here is the relative model construction from [F10] and [F11]. First choose any smooth metric model $E'$ on $N$ and continuous isometry $U:E\to E'$ using [F10]. On the disjoint endpoint collars, both the prescribed normal-bundle model of $E$ and $E'$ are smooth. In smooth finite bundle charts, [F11] and a partition of unity approximate $U$ by a smooth bundle map $V_0$ with operator-norm error less than $1/4$ everywhere there. Such a pointwise error can be imposed on noncompact collar pieces as well; only finitely many charts are needed over each compact zero-set neighborhood. Set $V=V_0(V_0^*V_0)^{-1/2}$. The positive square root is smooth in smooth positive-definite matrices, for example by the locally uniformly convergent binomial series after a local positive rescaling. Thus $V$ is a smooth isometry. More generally the straight segment $(1-a)U+aV_0$ is invertible for $0\le a\le1$ because it stays within $1/4$ of the isometry $U$; applying the same polar formula gives a continuous path of isometries from $U$ to $V$. Evaluate this path at a smooth time-collar cutoff equal to one on smaller endpoint collars and zero near the inner edges of the larger collars, and leave $U$ unchanged off them. It gives a global continuous isometry $U':E\to E'$ equal to the smooth isometry $V$ on the smaller collars. Transport the original Spin lift by this very isometry. On those collars $U's$ is smooth and transverse, and transport back by $U'^{-1}$ recovers exactly the original normal Spin data, not merely a homotopy class of an unidentified normal bundle. Approximate $U's$ by smooth section coefficients using [F11], fixed on still smaller closed endpoint collars. Blend with a compactly supported cutoff as in step 1.2, taking errors below the positive zero-free annulus margin and below the disk norm margin. Add finitely many smooth sections supported away from the protected collars, spanning the fibers near every possible non-collar zero. Their evaluation family is transverse at those zeros; at collar zeros transversality already holds and the perturbation is identically zero. Thus [F12] supplies an arbitrarily small transverse slice, fixed on the collars. The interpolation to this section remains in the open disk bundle on its compact support and has no zeros on the safety annulus; off that support it is the original $H$. Both $b$ and $f$ remain unchanged during this smoothing and perturbation. Its zero inverse image $Y$ in the time slab is consequently a compact smooth neat bordism with product collars on the original endpoint cycles. Its normal bundle is identified by the vertical derivative with $E'|_Y$, and through $U'^{-1}$ it carries the restricted original Spin lift. At an endpoint the vertical derivative has zero time component and agrees with the original collapse derivative in the sphere directions. Hence these endpoint identifications are exactly the original normal identifications with the stated outward-normal convention; no unchosen endpoint framing or new Spin lift is introduced. The continuous map $f|_Y:Y\to X$ extends the two original cycle labels. The local structured-collapse homotopy of step 1.2 applies on this compact bordism with product tubes and connection on the endpoint collars; its formulas restrict to the same endpoint constructions, including $b(\phi(z,(1-u)v))$ and $f(\phi(z,(1-u)v))$. Thus its endpoint uses are compatible with the normal and label data just fixed; [F9]'s normal-cobordism conclusion is realized here by a section argument and does not require the universal base or $X$ to be smooth. This proves that homotopic stable collapse maps give bordant original cycles. Conversely the zero set of the collapse constructed in step 1.1 is the original manifold itself, with derivative the positive collapse scale times the prescribed normal identification and with exactly its original label and Spin lift; changing that positive scale is a homotopy through the same normal data. Together with step 1.2 and the stabilized embedding independence of step 2.1, these are both inverse identities, so collapse is injective and surjective. Disjoint union is represented by collapse on disjoint tubes, giving addition of stable classes, and composition of the label with a continuous map commutes with all the displayed constructions. This proves the asserted natural group isomorphism. For $n=0$ the transverse preimage is a compact zero-manifold and the same relative argument applies; if $X=\varnothing$, both sides are zero. [F1, F2, F6, F7, F8, F9, F10, F11, F12, step 1.1, step 1.2, step 2.1] ∎

