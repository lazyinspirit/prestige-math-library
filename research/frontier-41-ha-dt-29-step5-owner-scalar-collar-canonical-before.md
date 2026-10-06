---
id: lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation
kind: lemma
title: "A first saddle lobe admits a collar-fixed center-saddle cancellation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar, prop-morse-cancellation-criterion-via-a-unique-connecting-orbit, lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood, def-countable-choice-principle-for-foliation-pair, thm-euclidean-inverse-function-theorem, thm-existence-and-uniqueness-of-a-maximal-ode-solution, lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11, author-hosted lecture notes"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 2-3 (simple-lobe picture and pictorial surgery); the fixed-cap range, compact-slab and C\u00b2 adapter construction is supplied locally in the center-saddle carrier memo"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-one foliation of a smooth $3$-manifold and let $f:D^2\to M$ be a $C^2$ disk map with a regular outer collar. Suppose the characteristic foliation of $f$ has a compact embedded disk lobe $\Omega\Subset\operatorname{int}(D^2)$ whose regular leaves are the full nested circles about one nondegenerate center $p$. Suppose its frontier is one embedded piecewise-$C^2$ separatrix circuit $\Gamma$ with one nondegenerate saddle $q$ and otherwise regular arcs; there are no other characteristic critical points in a neighborhood of $\overline{\Omega}\cup\{q\}$. Let $u_0$ be the cooriented $C^2$ first integral on the full circle annulus, continued across the center/saddle block and its regular collar. For the standard Euclidean metric on the source disk, assume $-\nabla u_0$ has exactly one unstable half-trajectory from $q$ entering $\Omega$ with forward limit $p$, while its other unstable half-trajectory exits through a regular transverse section before any other singularity. Assume $f(\Gamma)$ lies in one ambient leaf $L$ and fix a leafwise smoothing collar from the saddle corner to a regular loop $\gamma\subset L$, together with one compact $C^2$ filling of $\gamma$ in $L$. After flattening the fixed collars, the leafwise cap has outer boundary exactly $f(\Gamma)$. Then one can choose a compact regular-neighborhood block $W\Subset\operatorname{int}(D^2)$ containing the lobe and saddle and construct a replacement map $f_{\mathrm{new}}:D^2\to M$ with the same outer boundary map, equal to the original map on an open collar of $\partial W$ and outside $W$, and with no characteristic critical points in $W$; all characteristic singularities outside $W$ are unchanged, so exactly one center and one saddle are removed. No homotopy from the original map on the interior of $W$ is asserted.

## Facts & Assumptions

**Given:** The disk map $f$ and data of the statement, with a lobe $\Omega$, saddle $q$, center $p$, first integral $u_0$, the prescribed exit section and fixed cap data.

[F1] The Morse cancellation criterion for a compact collared surface triad cancels an index-zero/index-one pair when the descending sphere of the saddle meets the belt circle of the minimum in exactly one transverse point along a unique connecting orbit ([[prop-morse-cancellation-criterion-via-a-unique-connecting-orbit]]).

[F2] A cancellation modification can be confined to any chosen open neighbourhood of the compactified connecting orbit and the two critical points, relative to the two faces ([[lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood]]).

[F3] The sibling-pair item `lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar` builds, over one fixed enlarged cap disk, a $C^2$ transverse product with an exact collar whose section vanishes on the frontier; the sibling-pair item `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` realizes the pointwise cap-product gluing by unique transverse-flow roots. Their exact uses are flagged in steps 4.1 and 6.1 below.

[F4] If the derivative of a $C^2$ map is invertible at a point, it is a local $C^1$ diffeomorphism, and a $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root ([[thm-euclidean-inverse-function-theorem]]); a $C^1$ time-dependent field has local solutions unique through each point ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 Choose regular intermediate level $v$ between the critical values of $p$ and $q$ and place the prescribed exit section below $v$ on the outgoing branch, so that at level $v$ the second point of the saddle attaching sphere lies outside the center disk: retain the full lobe circle at level $v$ and the marked exit point in its regular exit tube. Complete the initially open exit interval by a regular product strip to an external circle, and continue that external circle as a product cylinder below and above the critical band. The normalized field $Z=\nabla u_0/|\nabla u_0|^2$ satisfies $du_0(Z)=1$ on each regular collar, so no critical point is introduced; rounding the corners inside the regular product region, away from the selected trajectory and the cancellation support, gives a compact collared annular triad with two full incoming/outgoing circle faces and exact face collars. [F4, given, construct]

2.1 At the level $v$ the saddle attaching sphere is the two-point set $A_q\cong S^0$ of the two descending branches of $q$, and the minimum belt sphere is the full circle $B_p\cong S^1$ bounding the disk component born at $p$. The branch tending to $p$ meets $B_p$ in exactly one point; the other branch crosses the prescribed exit section below $v$, so its point at level $v$ lies outside that disk and contributes no intersection. A point and a regular curve in the one-dimensional intermediate level meet transversely, so $A_q\cap B_p$ is exactly one transverse point. [given, step 1.1]

3.1 By step 2.1 and [F1] the index-zero/index-one pair $(p,q)$ is cancelled by the Morse cancellation criterion applied to the compact slab, and [F2] confines the modification to any chosen open neighbourhood of the compactified connecting orbit and $p,q$, relative to the two faces; this is the two-item batch-3 edge whose choice premise is inherited under $\mathrm{AC}_\omega$. [F1, F2, step 2.1]

4.1 For the disk-map application, form one fixed enlarged cap disk $\widehat W$ by gluing the specified leafwise filling to the plaque projection of $f$ on a fixed collar crossing $\Gamma$, with the prescribed smoothing collar and a flattened open seam; the resulting $C^2$ map into $L$ agrees with $f$ on the interior curve $\Gamma$. Apply the fixed-cap supplier [F3] on this enlarged disk to obtain a transverse product $P$ on $\widehat W\times J$ before choosing the final outer collar; in the transported section coordinate $t_C=0$ on $\Gamma$, and by compactness of $\Gamma$ a sufficiently thin closed collar around $\Gamma$ has section range $S\Subset J$. [F3, step 3.1, construct]

5.1 Choose the actual block $W$ as $\Omega$ with a thinner exterior collar inside that range, keeping $p,q$ and the compactified connecting arc in its interior, so that its closed outer collar $C_0$ satisfies $t_C(C_0)=S\Subset I\Subset J$ for a chosen intermediate closed collar $I$. Restrict $P$ to $W\times I$; the factorization $f(x)=P(x,t_C(x))$ is exact on $C_0$ and its interior, and factorization of the original map on the cap interior is not required. Choose the cancellation support $U$ around the compactified connecting arc and $p,q$ with closure inside $W$ and disjoint from $C_0$; the auxiliary slab extension lies outside $U$, so the supported scalar modification restricts back to the source block while remaining equal to the original scalar on an open collar. [F3, step 4.1, construct]

6.1 Smooth the scalar on a compact inner region by finite convolution; in small convex critical neighbourhoods keep the derivative of the smoothed gradient within half the least singular value $\sigma$ of the original invertible Hessian, so the smoothed gradient remains injective on that neighbourhood and [F4] continues the unique critical zero with unchanged inertia, while the nonzero boundary gradient prevents escape and a positive gradient minimum on the compact regular complement excludes new zeros. In the regular connecting band the interpolants remain submersions and the time-dependent field $Y_s=-(\bar u-u_0)\nabla u_s/|\nabla u_s|^2$ transports their level components, with [F4] supplying local uniqueness and a compact buffer keeping the flow inside the band. An adapted descending field from the saddle-facing ray to the minimum, with the other ray routed through the separate exit tube and patched in regular charts with positive weights, realizes one attaching point on the center circle and one on the external circle; the exit tube is completed by the auxiliary rectangle and product cylinder with matching scalar collars, where the gluing suppliers of [F3] apply. [F3, F4, step 5.1]

7.1 Blend the cancelled smooth scalar $\bar v$ back to $u_0$ on a separate outer regular annulus: with $X=\nabla u_0/|\nabla u_0|^2$ choose the approximation so $d\bar v(X)>1/2$ and $\sup|d\rho(X)|\,\|\bar v-u_0\|_\infty<1/4$, so that $d((1-\rho)u_0+\rho\bar v)(X)>1/4$. The result is $C^2$, has no new collar critical point and preserves the exact outer germ. Then choose a smooth strictly increasing reparameterization $\vartheta:\mathbb R\to I$ that is the identity on a neighbourhood of the compact collar-value set and sends the compact range $K_v$ of the replacement scalar into $I$, made by choosing a positive derivative on the two compact tails and adjusting its integrals below the endpoint margins; $d(\vartheta\circ v)=\vartheta'(v)\,dv$ creates no characteristic critical point, and $P(x,\vartheta(v(x)))$ glues pointwise to the original disk map on the open collar. [F3, step 6.1, construct]

8.1 The replacement map $f_{\mathrm{new}}(x):=P(x,\vartheta(v(x)))$ on $W$, extended by $f$ on the open collar of $\partial W$ and outside $W$, is $C^2$, has the same outer boundary map, equals $f$ outside $W$ and on the open collar, removes exactly the one center and one saddle in $W$ and changes no singularity outside $W$; no homotopy from the original map on the interior of $W$ is asserted. The construction is conditional on the stated simple-lobe, exit, smoothing-collar and fixed-cap hypotheses, uses only the two batch-3 suppliers, one fixed cap, finitely many collars and bump parameters, and hence only the standing countable choice from [F5]. [F2, F3, F5, step 7.1] ∎
