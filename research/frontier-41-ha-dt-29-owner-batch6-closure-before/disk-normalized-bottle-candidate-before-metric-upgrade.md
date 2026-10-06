---
id: lem-compactified-unstable-manifolds-give-a-cw-decomposition
kind: lemma
title: "Compactified unstable manifolds give the Morse--Smale CW decomposition"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-morse-smale-pair, def-morse-function-adapted-to-a-cobordism, def-smooth-cobordism-triad-for-morse-theory, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, lem-interior-slab-handle-attachment, def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, thm-morse-trajectory-compactness-up-to-breaking, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-gluing-broken-index-two-trajectories-gives-collar-ends, lem-breaking-length-is-bounded-by-index-drop, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-cell-attachment-by-a-characteristic-map, def-cw-complex-with-closure-finiteness-and-weak-topology, lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, thm-regular-interval-diffeomorphism, prop-deformation-lemma-for-a-critical-point-free-slab, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-topological-manifolds-are-metrizable-and-paracompact, def-compact-space, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-end-flow-matching-gives-local-broken-charts, lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds, thm-euclidean-implicit-function-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, lem-universal-metric-trajectory-projection-is-fredholm, lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics]
justified_by: []
dependency_level: 6
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9.a-c: Theorem 4.9.3 and Propositions 4.9.6-4.9.7 with Examples 4.9.4-4.9.5 (construction of the cellular decomposition by compactified unstable manifolds and the attaching maps), printed pp. 115-126, PDF pp. 125-136"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5 with Remark 2.5.3(c) and Figure 2.17, read at PDF pp. 64-66; Sec. 4.5, end, printed p. 200: the theorem of Qin that the compactified unstable manifold pair is homeomorphic to the disk pair and that the unstable manifolds give a CW decomposition"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.1, remarks (3) and (4): comparison with the cellular complex of a self-indexing Morse function, PDF pp. 87-88"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(W;M_0,M_1)$ be
either a closed manifold $M$ with a Morse--Smale pair $(f,X)$ (the case
$M_0=M_1=\varnothing$ of the triad notation), or a compact cobordism triad
with adapted excellent Morse function $f$ and adapted complete downward
gradient-like field $X$ that is Morse--Smale and boundary-directed: outward
along $M_0$ and inward along $M_1$
([[def-morse-smale-pair]],
[[def-morse-function-adapted-to-a-cobordism]],
[[def-smooth-cobordism-triad-for-morse-theory]]). Thus all critical points are
interior, and every maximal nonconstant $X$-trajectory has a definite forward
limit: a critical point of strictly lower value, or, in the relative case, a
point of $M_0$ through which the trajectory leaves $W$.

For a critical point $p$ set
$$\overline W{}^u(p)=W^u(p)\ \sqcup\!\!\bigsqcup_{\substack{q\in\operatorname{Crit}(f)\\ \mathcal M(p,q)\ne\varnothing}}\!\!\mathcal M(p,q)\times\overline W{}^u(q)\ \sqcup\ \mathcal E_p,$$
where $\mathcal E_p$ is the set of maximal $X$-trajectories of $W$ whose
backward limit is $p$ and which leave $W$ through $M_0$, each recorded as an
abstract point ($\mathcal E_p=\varnothing$ in the closed case), with the
topology of geometric convergence
([[def-broken-morse-trajectory]],
[[def-geometric-convergence-to-a-broken-morse-trajectory]]), and let
$\Phi_p:\overline W{}^u(p)\to W$ send $W^u(p)$ to itself,
$(\gamma,x)\in\mathcal M(p,q)\times\overline W{}^u(q)$ to the image of $x$,
and a trajectory of $\mathcal E_p$ to its exit point in $M_0$. Then:

1. $\overline W{}^u(p)$ is a compact metrizable space homeomorphic to the
   closed disk $D^{\operatorname{ind}(p)}$ with interior $W^u(p)$, and the
   attaching map is the restriction $\Phi_p|_{\partial\overline W{}^u(p)}$,
   whose image lies in
   $M_0\cup\bigcup_{\operatorname{ind}(q)<\operatorname{ind}(p)}\Phi_q(\overline W{}^u(q))$,
   the union of $M_0$ with the closed cells of strictly lower index; in the
   closed case the term $M_0$ is absent and the image lies in the union of the
   cells of strictly lower index
   ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]);
2. the disks $\overline W{}^u(p)$ are the closed cells of a finite relative CW
   pair $(X,M_0)$ with one $k$-cell for each critical point of index $k$:
   take the quotient of the disjoint union
   $M_0\sqcup\bigsqcup_p\overline W{}^u(p)$ that identifies points with the same
   image in $W$ under the maps $\Phi_p$, with the attaching map of the cell at
   $p$ given by $\Phi_p|_{\partial\overline W{}^u(p)}$ read in the quotient;
   each $k$-skeleton is obtained from the previous one by attaching the disks
   of index $k$ along their boundary, and $\Phi$ identifies it
   homeomorphically with the closed subspace
   $$W^{(k)}=M_0\cup\bigcup_{\operatorname{ind}(p)\le k}W^u(p)\subset W$$
   ([[def-cell-attachment-by-a-characteristic-map]],
   [[def-cw-complex-with-closure-finiteness-and-weak-topology]],
   [[prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]]); in
   the closed case the open unstable manifolds partition $M$ and this is a CW
   structure on $M$; in the relative case the open unstable manifolds do not
   cover $W\smallsetminus M_0$, because trajectories entering through $M_1$
   need not pass through a critical point, and the content is the homotopy
   equivalence of pairs $(W,M_0)\simeq(X,M_0)$
   ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]],
   [[thm-morse-functions-and-handle-decompositions-correspond]],
   [[cor-unstable-disk-is-the-handle-core]]);
3. the boundary admits the stratification
   $$\partial\overline W{}^u(p)=\mathcal E_p\ \sqcup\!\!\bigsqcup_{q:\ \operatorname{ind}(q)<\operatorname{ind}(p)}\!\!\mathcal M(p,q)\times\overline W{}^u(q),$$
   with $\mathcal E_p=\varnothing$ in the closed case; the boundary is mapped
   by $\Phi_p$ into
   $M_0\cup\bigcup_{\operatorname{ind}(q)<\operatorname{ind}(p)}W^u(q)$, so
   only $M_0$ and cells of strictly lower index meet the boundary of the
   closed cell $\overline W{}^u(p)$.

The finite relative CW assertion includes a finite CW structure on the incoming
face. One may supply such a structure; it can also be constructed by the
closed case in one lower dimension, as in the proof below. If only a finite
CW model $A\simeq M_0$ is retained instead, the attachment comparison gives
the corresponding model $(X',A)\simeq(W,M_0)$; it does not silently declare
that model to be a CW structure on the actual incoming face.

## Facts & Assumptions

**Given:** The Axiom of Choice and the normalized downward Morse--Smale field on the closed manifold or adapted compact triad in the statement.

[F1] In a critical chart, $f=f(q)-|u|^2+|z|^2$ and $X=(2u,-2z)$; the unstable disk is the handle core, and crossing the critical level attaches that handle ([[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]], [[cor-unstable-disk-is-the-handle-core]], [[thm-one-critical-point-handle-attachment]], [[def-morse-function-adapted-to-a-cobordism]]).

[F2] Finite regular bands and boundary collars are transported by the flow; the field is complete on its boundaryless carrier and exits only through $M_0$ ([[thm-regular-interval-diffeomorphism]], [[def-morse-function-adapted-to-a-cobordism]]).

[F3] The local metric passage estimates and finite-dimensional matching normal complements give smooth charts at broken interior configurations, with compatible independent neck coordinates. The underlying finite-dimensional implicit-function theorem applies also to endpoint-sheet perturbations ([[lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds]], [[lem-metric-end-flow-matching-gives-local-broken-charts]], [[thm-euclidean-implicit-function-theorem]]).

[F4] Smooth partitions and Euclidean bumps permit finite chart constructions. Compact smooth closed manifolds admit excellent Morse functions; the universal metric trajectory projection permits metric variations fixed near all critical points, and the finite-regularity diagonal argument supplies smooth Morse--Smale metrics ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[lem-universal-metric-trajectory-projection-is-fredholm]], [[lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics]]).

[F5] Handles may be replaced by their core cells relative to the current stage, and homotopic core attaching maps give equivalent attachments relative to that stage. The existing handle/CW proof records the mapping-cylinder and homotopy-extension argument, also for a model of the incoming face ([[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]], [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]).

## Proof

**Proof technique:** direct, by pointed critical-crossing bottles and attachment comparison.

1.1 We may use an excellent height function without changing the field or any trajectory. In the closed case choose disjoint critical charts and add distinct sufficiently small constants times bumps equal to one near each critical point. On the compact transition supports $df(X)$ has a negative upper bound, so sufficiently small constants preserve $d\widetilde f(X)<0$ there; outside them nothing changes. Hessians and critical points are unchanged, and the local normalized form merely receives the new constant value. No new critical point is possible where $d\widetilde f(X)<0$. In the relative case the given height already is excellent, and the bumps, if needed, are away from the fixed boundary levels. The geometric trajectory topology is unchanged. Also realize $X$ as an actual metric gradient when needed for the local suppliers: away from critical points split $TM=\mathbb RX\oplus\ker df$, put $g(X,X)=-df(X)$ and make these factors orthogonal using the coordinate Euclidean metric restricted to $\ker df$ on each regular chart; then $g(X,\cdot)=-df$. Near the critical points use the Euclidean Morse-chart metric. A subordinate partition combines these metrics while preserving this linear identity. Thus the local metric matching estimates of [F3] apply to this same field. [F1, F4, given, construct]

2.1 Define the pointed space using a marked endpoint: an object is a finite descending critical chain from $p$, followed by a terminal trajectory segment to an interior point, a terminal critical point, or a transverse exit through $M_0$. Record every critical break separately; do not identify different incoming histories with the same evaluation point. Parametrize its image by decreasing height, constantly extending below the marked endpoint and above $f(p)$. In normalized critical charts its height speed is at most $C/\sqrt{|c-f(q)|}$, and on the compact regular complement it is bounded, so all such paths have a common square-root modulus. Uniform limits split at every critical point actually hit, and finite-time uniqueness on noncritical intervals gives the terminal segment and preserves its marked endpoint. There are finitely many critical values and every nonconstant critical connection loses index by transversality. Thus the pointed space is compact metrizable, and evaluation is continuous. An exit sequence is allowed to acquire critical breaks before its final exit; only the final marked height is fixed at zero. This proves compactness of the recursively displayed space, without declaring the unbroken exit stratum closed. Let $B_p(A)$ be its closed subset of objects whose marked height is at least $A$. [F1, F2, step 1.1, construct]

3.1 The pointed local charts follow from exact endpoint matching. At a critical break followed by a free marked endpoint use a fixed-time anchor and the whole ambient endpoint sheet, so $u=B(s,\xi)=\xi$ is free. With an incoming transverse graph $a=A(\alpha_T(a,b),\xi_i)$, the unknown derivative in $a$ is the identity at $1/T=0$; the free $b$ coordinates parametrize the terminal unstable disk. For an exit use the same endpoint map followed by its transverse crossing of the regular face $f=0$, whose time is smooth by $df(X)<0$. Several earlier breaks use the finite exterior normal equations $H_k(e,\xi_k,\eta_k)$ of [F3]: solve their normal complements, then substitute the flat passage endpoint displacements $e$. At all zero necks the joint unknown derivative is the identity. Hence the implicit-function theorem gives compatible corner charts with the terminal coordinates retained. This argument proves the variable-endpoint extension locally; it is not an application of a fixed-critical-end compactness theorem to moving endpoints. [F1, F2, F3, step 2.1, construct]

4.1 For $A$ just below $f(p)$, $B_p(A)$ is the local closed unstable disk. Lowering $A$ across a critical-point-free interval gives a homeomorphism of pointed spaces by transporting each terminal endpoint to a smoothly reparametrized height on its own orbit; retain its previous broken prefix and fix endpoints above a slightly larger level. This is continuous on broken charts of step 3.1, where it changes only finite exterior evolution times. To cross a critical value $\alpha=f(q)$, consider the compact set $Q=\overline{\mathcal M}(p,q)$ of all incoming histories, recorded at the entry level $\alpha+\varepsilon$. At that level its incoming sheets have transverse unstable-normal coordinates $u$ of dimension $k=\operatorname{ind}(q)$, by Morse--Smale transversality. The corner charts of step 3.1 retain those normal coordinates at already broken prefixes. They give a product normal neighbourhood $Q\times D^k_\delta$: to construct it globally, choose locally the vector fields differentiating the normal coordinates $u_i$ while tangent to every old corner face, combine them by finite restricted Euclidean corner bumps, and flow them in a fixed order. Their derivatives satisfy $du_j(Y_i)=\delta_{ij}$, so these small flows and their inverse identify the neighbourhood with $Q\times D^k_\delta$. Compactness of $Q$ gives one uniform radius. If $Q$ is empty no modification is needed. This supplies the full disk bundle at the crossing, including all earlier broken prefixes. [F1, F3, F4, step 2.1, step 3.1, construct]

5.1 On a fibre of that normal neighbourhood write its entry sheet as $(u,h(u,\xi))$ with $|h(u,\xi)|^2=\varepsilon+|u|^2$. Put $\lambda=e^{-2t}$ for forward time from the entry level and let $w$ be the terminal unstable coordinate. The exact normalized passage has $u=\lambda w$ and terminal coordinates $(w,\lambda h(\lambda w,\xi))$. For $\lambda>0$ these are ordinary pointed trajectories; for $\lambda=0$ they are the separate objects $(\xi,w)$ on the lower unstable disk. The endpoint height is $\alpha+\lambda^2\varepsilon-(1-\lambda^4)|w|^2$. The portion down to height $\alpha-\varepsilon$, with $|u|\le\delta$, therefore has meridian domain $0\le\lambda\le\lambda_{\rm top}$ and $|w|\le R(\lambda)$, where $\lambda_{\rm top}>1$ is a fixed short backward-time top cut, $R(0)=\sqrt\varepsilon$, and $R(\lambda)=\min(\delta/\lambda,\sqrt{\varepsilon/(1-\lambda^2)})$ for $0<\lambda<1$, with $R(\lambda)=\delta/\lambda$ for $\lambda\ge1$. This is a continuous positive radial bound. Its lower boundary is the disk $\lambda=0$, $|w|\le\sqrt\varepsilon$, followed by the exit annulus at height $\alpha-\varepsilon$ up to $|w|=\sqrt{\varepsilon+\delta^2}$. The marked histories $\xi$ prevent identifications between these disks for different incoming pieces. These coordinates agree with the pointed geometry of steps 2.1–3.1. [F1, F3, step 4.1, construct, algebra]

6.1 Give this bottle a completely explicit topological cylinder comparison. Normalize the radius by $v=|w|/R(\lambda)$; its meridian is a rectangle. The original incoming cylinder has meridian $0\le|u|\le\delta$ and $1\le\lambda\le\lambda_{\rm top}$. Map its top to the identical top, and its axis to the target axis. Map its bottom radial interval first onto the critical disk radius interval $[0,\sqrt\varepsilon]$, then onto the exit annulus radius interval $[\sqrt\varepsilon,\sqrt{\varepsilon+\delta^2}]$; these correspond on the target rectangle to its bottom edge followed by its lower outer edge. Map the original outer side monotonically onto the remaining outer edge, with its lower endpoint the unique $\lambda$ satisfying $\delta/\lambda=\sqrt{\varepsilon/(1-\lambda^2)}$. Choose that outer-side map to be the regular flow-height transport used off the tube, and fix the top pointwise. This prescribed orientation-preserving boundary homeomorphism between rectangles extends by rays from their centres: send the centre to the centre and send a point at radial fraction $r$ toward a boundary point to the same fraction toward its prescribed boundary image. Restoring the positive radial bound and keeping the angular direction $u/|u|$ gives a fibrewise cylinder homeomorphism; on the axis angular coordinates collapse continuously. It sends a small bottom disk onto the whole added lower critical disk, the remaining bottom annulus onto the exit annulus, and matches the regular transport on the outer side. The height formulas of step 5.1 are independent of $\xi$, so the same map works over the whole normal bundle and on all its old corner faces. For $k=0$ there is no radius or annulus: the comparison is simply the interval map adding its critical endpoint. Thus each critical crossing preserves the disk-pair type and agrees with the existing topology, rather than merely supplying a once-broken collar. [F1, F2, F3, step 4.1, step 5.1, construct]

7.1 Iterate the finitely many regular transports and critical-crossing homeomorphisms. In the closed case stop below the minimum height; in the relative case stop at the regular exit height zero. Each homeomorphism can be chosen fixed on a sufficiently high inner cap of the original unstable disk, and sends its interior to the unbroken pointed locus of the enlarged disk. Consequently the final pair is $(D^{\operatorname{ind}(p)},\operatorname{int}D^{\operatorname{ind}(p)})$, with continuous evaluation and precisely the recursive broken and exit faces in the statement. The index-zero initial disk is a point and has no outgoing break or exit. The exit face at height zero includes histories that have already broken and then exited; no exit-only subset was assumed closed. [F1, F2, step 2.1, step 4.1, step 6.1]

8.1 The boundary image consists only of $M_0$ and strictly lower-index unstable cells, since each critical connection loses index and evaluation forgets its incoming history. Interiors evaluate injectively and distinct critical unstable interiors are disjoint by their backward limits. Thus attaching the disks in index order gives the stated finite cell quotient. Its finite-stage quotient is compact and its continuous evaluation into the Hausdorff manifold is bijective onto $W^{(k)}$; therefore it is a homeomorphism. The characteristic maps give closure finiteness and the finite quotient weak topology. In the closed case every backward orbit has a critical limit, so the unstable interiors partition $M$ and the final quotient is $M$. [F1, F2, step 2.1, step 7.1]

9.1 Compare with the relative handle stages without confusing value order and skeleta. Write $H_p:D^{\operatorname{ind}(p)}\to\overline W^u(p)$ for the constructed disk homeomorphism. It fixes a sufficiently small inner cap around $p$. The boundary attaching map $\Phi_pH_p|_S$ lies in the earlier lower-value cells. Radially shrink the source boundary sphere to a smaller sphere inside that fixed cap; its image is the ordinary local unstable core attaching sphere. Choose an innermost fixed cap strictly inside that smaller sphere. Throughout the radial annulus homotopy the source avoids this innermost cap; injectivity and the fixed-cap property of $H_p$ make its image avoid that cap as well. Thus its endpoint heights remain below a regular level strictly below $f(p)$. Thus the two attaching maps are homotopic in the previous handle stage. Starting with the collar retracting to $M_0$, replace each value-ordered handle by its core using [F5] and use this homotopy and the mapping-cylinder attachment comparison in [F5]. Induction gives an equivalence of pairs $(X,M_0)\simeq(W,M_0)$, with this particular characteristic-disk attachment. The value order is an attachment order, not a skeletal filtration; the index order of step 8.1 supplies the actual skeleta. For index zero the attaching sphere is empty and both constructions add a point. [F1, F2, F5, step 7.1, step 8.1, construct]

10.1 Supply the finite base structure by dimension induction if it was not given. In dimension zero compactness gives finitely many points. In higher dimension the closed argument of steps 1.1–8.1 needs no CW base, hence gives an actual finite CW structure for any closed manifold equipped with normalized Morse--Smale data. Such data exist: choose an excellent Morse function by [F4], prescribe a Euclidean metric on small critical charts, and use the universal metric perturbations of [F4] outside those fixed neighbourhoods. For each density condition choose slightly larger disjoint critical neighbourhoods around the common prescribed Euclidean ones and keep the reference metric fixed on the larger sets. The finite-regularity regularizing tensors vanish on those larger sets; convolution and cutoffs within their positive margin therefore smooth their differences while keeping the common Euclidean neighbourhoods fixed exactly. The countable compact-disk transversality conditions remain open. The diagonal Baire argument of [F4] therefore works in this restricted smooth metric space, giving a Morse--Smale metric still Euclidean near the critical points. Apply the closed construction to the $(\dim W-1)$-manifold $M_0$ and retain that finite structure as the base in step 8.1. If instead only a finite model $A$ is used, apply the base-replacement attachment comparison of [F5] to obtain $(X',A)$; that is the model qualification in the statement. This completes all the retained disk, CW, stratification and relative comparison claims. [F4, F5, step 8.1, step 9.1, base, ih, construct] ∎
