---
id: lem-compactified-unstable-manifolds-give-a-cw-decomposition
kind: lemma
title: "Compactified unstable manifolds give the Morse--Smale CW decomposition"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-regular-continuation-datum-between-morse-smale-pairs,def-morse-smale-pair, def-morse-function-adapted-to-a-cobordism, def-smooth-cobordism-triad-for-morse-theory, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, lem-interior-slab-handle-attachment, def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, thm-morse-trajectory-compactness-up-to-breaking, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-gluing-broken-index-two-trajectories-gives-collar-ends, lem-breaking-length-is-bounded-by-index-drop, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-cell-attachment-by-a-characteristic-map, def-cw-complex-with-closure-finiteness-and-weak-topology, lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, thm-regular-interval-diffeomorphism, prop-deformation-lemma-for-a-critical-point-free-slab, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-topological-manifolds-are-metrizable-and-paracompact, def-compact-space, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-end-flow-matching-gives-local-broken-charts, lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds, thm-euclidean-implicit-function-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, lem-metric-critical-crossing-preserves-pointed-disk-pairs, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, thm-morse-lemma, thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function, thm-continuation-trajectories-are-compact-up-to-breaking]
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
either a closed manifold $M$ with a Morse--Smale pair $(f,X)$, including the actual metric version $X=-\operatorname{grad}_g f$ (the case
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
2. the disks $\overline W{}^u(p)$ give a finite disk-attachment pair
   $(Z,M_0)$ with one open $k$-disk for each critical point of index $k$:
   take the quotient of the disjoint union
   $M_0\sqcup\bigsqcup_p\overline W{}^u(p)$ that identifies points with the same
   image in $W$ under the maps $\Phi_p$, with the attaching map of the cell at
   $p$ given by $\Phi_p|_{\partial\overline W{}^u(p)}$ read in the quotient;
   the open disk at $p$ is $W^u(p)$ and its closure is the image
   $\Phi_p(\overline W{}^u(p))$, which need not be a disk because the
   disk map may identify boundary points. Each index-filtration stage $Z^{(k)}$ is obtained from the previous one by attaching the disks
   of index $k$ along their boundary, and $\Phi$ identifies it
   homeomorphically with the closed subspace
   $$W^{(k)}=M_0\cup\bigcup_{\operatorname{ind}(p)\le k}W^u(p)\subset W$$
   ([[def-cell-attachment-by-a-characteristic-map]]); in
   the closed case the open unstable manifolds partition $M$ and this is a CW
   structure on $M$, with this index filtration as its skeleta
   ([[def-cw-complex-with-closure-finiteness-and-weak-topology]],
   [[prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]]); in the relative case the open unstable manifolds do not
   cover $W\smallsetminus M_0$, because trajectories entering through $M_1$
   need not pass through a critical point, and the content is the homotopy
   equivalence of pairs $(W,M_0)\simeq(Z,M_0)$
   ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]],
   [[thm-morse-functions-and-handle-decompositions-correspond]],
   [[cor-unstable-disk-is-the-handle-core]]);
3. the boundary admits the stratification
   $$\partial\overline W{}^u(p)=\mathcal E_p\ \sqcup\!\!\bigsqcup_{q:\ \operatorname{ind}(q)<\operatorname{ind}(p)}\!\!\mathcal M(p,q)\times\overline W{}^u(q),$$
   with $\mathcal E_p=\varnothing$ in the closed case; the boundary is mapped
   by $\Phi_p$ into
   $M_0\cup\bigcup_{\operatorname{ind}(q)<\operatorname{ind}(p)}W^u(q)$, so
   only $M_0$ and cells of strictly lower index occur in the image of the
   boundary of the characteristic disk $\overline W{}^u(p)$.

For any supplied finite CW structure on $M_0$, cellular approximation of the
attaching maps, with attachment comparison at each stage, gives a finite CW
pair $(X,M_0)\simeq(Z,M_0)\simeq(W,M_0)$ relative to $M_0$, with one relative
$k$-cell per critical point of index $k$
([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]). Such a base
structure can also be constructed by the closed case in one lower dimension.
The original maps $\Phi_p$ give a CW structure extending that base only when
each index-$k$ attaching map lands in the ordinary $(k-1)$-skeleton of the
preceding CW stage, including the base cells. In general exits may land
anywhere in $M_0$, and the CW model's characteristic maps are the transported,
cellularly approximated maps rather than these exact evaluation maps.
If only a finite CW model $A\simeq M_0$ is retained, the same comparison gives
$(X',A)\simeq(W,M_0)$.

In the closed metric version the gradient need not have normalized local
eigenvalues. The proof uses its actual invariant disks and metric critical
crossings. Normalized field data are realized by a metric without changing
their trajectories.

## Facts & Assumptions

**Given:** The Axiom of Choice and the stated closed Morse--Smale data, in either the actual metric version or normalized field version, or the adapted relative data.

[F1] Actual metric critical points have smooth hyperbolic stable and unstable disks and the Morse dimensions; their smooth bootstrap and transported charts are as in the regular datum. Ordinary Morse coordinates give the standard critical handle attachment ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]], [[def-regular-continuation-datum-between-morse-smale-pairs]], [[thm-morse-lemma]], [[thm-one-critical-point-handle-attachment]]).

[F2] Finite regular bands and boundary collars are transported by the complete carrier flow and exit only through $M_0$; actual metric height paths have an integrable square-root modulus ([[thm-regular-interval-diffeomorphism]], [[def-morse-function-adapted-to-a-cobordism]], [[thm-continuation-trajectories-are-compact-up-to-breaking]]).

[F3] Actual metric passage estimates and joint normal matching give compatible broken charts. A critical crossing with a compact incoming normal tube preserves the pointed disk pair by a finite-time ambient normal-disk isotopy and flat late collar ([[lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds]], [[lem-metric-end-flow-matching-gives-local-broken-charts]], [[lem-metric-critical-crossing-preserves-pointed-disk-pairs]], [[thm-euclidean-implicit-function-theorem]]).

[F4] Finite chart constructions use smooth partitions and Euclidean bumps. Every closed compact smooth manifold has an excellent Morse function and a Morse--Smale metric, without an eigenvalue normalization premise ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function]]).

[F5] Handles are replaceable by core cells relative to the preceding stage, and homotopic attaching maps yield equivalent attachments. The proof of the handle/CW supplier, steps 1.1–2.1, gives the mapping-cylinder attachment comparison and cellular approximation at each stage, including replacement of a model base ([[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]], [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]).

## Proof

**Proof technique:** direct, by actual metric pointed critical crossings and attachment comparison.

1.1 Make the height excellent without changing the field. Add distinct small constants times bumps supported in disjoint critical charts and equal to one near the critical points; on the compact transition supports $df(X)$ stays bounded away from zero, so sufficiently small constants preserve strict descent and introduce no critical point. Hessians and trajectories are unchanged. Boundary heights are retained in the relative case. In the metric case the original metric still represents the new gradient near every critical point. In the normalized field case use the Euclidean critical-chart metric there. On each regular coordinate chart split $TM=\mathbb RX\oplus\ker df$, put $g(X,X)=-df(X)$, and make the factors orthogonal using the coordinate metric restricted to $\ker df$. A partition combines these positive metrics while preserving $g(X,\cdot)=-df$. Thus the same field is an actual metric gradient for the auxiliary excellent height. No equality of its hyperbolic rates is imposed. [F1, F4, given, construct]

2.1 Its local unstable disk is a valid handle core up to attaching homotopy. In ordinary Morse coordinates the actual disk is a graph $z=h(u)$ over the negative Hessian space, with $h(0)=Dh(0)=0$. The graphs $z=t h(u)$, $0\le t\le1$, remain below the critical value off the origin on a small disk. Adjust their boundary radius so that $|u|^2-t^2|h(u)|^2=\varepsilon$; the radial derivative is positive for sufficiently small $u$, so the implicit-function theorem gives a smooth boundary homotopy in the lower regular level. It connects the actual unstable attaching sphere to the ordinary negative-coordinate handle core sphere, with the critical ray unchanged. The restriction of height to the actual unstable disk is a nondegenerate maximum, so its small truncated cap is a closed disk by [F1]. This proves the core comparison for actual metric disks rather than invoking a normalized-core assertion outside its hypotheses. [F1, F3, step 1.1, construct]

3.1 Define the pointed space by a finite descending critical chain from $p$, followed by a terminal segment to a marked interior point, a terminal critical point, or a transverse exit. Record different histories separately. Extend its height path constantly beyond its marked endpoint and above $f(p)$. The metric height estimate in [F2] gives a common square-root modulus. On compact regular subintervals pass the height equation to a uniform limit and split at every critical point actually hit, as in the proof of [F2]. This argument is confined to compact $W$ before first exit, so it applies to relative moving endpoints as well; the boundary is regular and every boundary hit is recorded at height zero. Positive index drops bound the number of breaks. Hence the pointed space is compact metrizable and evaluation is continuous. Let $B_p(A)$ be its closed subset with marked height at least $A$. Broken-then-exiting limits are included; the exit-only stratum is not declared closed. [F1, F2, step 1.1, step 2.1, construct]

4.1 The pointed charts are exact finite matching charts with a free endpoint. At a last critical break use a fixed endpoint-time anchor and the whole ambient endpoint sheet, so its unstable coordinates $b$ are free. The incoming normal equation is $a=A(\alpha_T(a,b),\xi)$ with identity unknown derivative at $1/T=0$. It gives the lower unstable disk and its neck collar, including $b=0$. For an exit, append the finite transverse crossing of the regular face, whose time is smooth because $df(X)<0$. Earlier breaks use the independent passage endpoint displacements and the joint exterior normal equations of [F3]. Thus all old corner charts and marked endpoint coordinates are compatible. This locally proves the variable-endpoint extension; it does not promote fixed-critical-end compactness automatically. [F1, F2, F3, step 3.1, construct]

5.1 At a critical crossing $q$ consider the compact incoming history space $Q=\overline{\mathcal M}(p,q)$ recorded on an entry level above $f(q)$. Its normal coordinate is the unstable coordinate $u$ in an invariant-axis chart, of dimension $\operatorname{ind}(q)$; the derivative is onto on every old face by Morse--Smale transversality. The charts of step 4.1 therefore make this a neat normal neighbourhood. Construct it uniformly over $Q$: take local vector fields tangent to all old corner faces with $du_j(Y_i)=\delta_{ij}$, combine them by finite restricted Euclidean corner bumps, and apply their flows in a fixed order. Their inverse flows erase these same normal coordinates, giving a product $Q\times D^k_\delta$. Compactness gives a common radius; when $Q$ is empty no modification is needed. The actual metric critical-crossing theorem of [F3] now applies to this tube and supplies a homeomorphism of $B_p(A)$ with the lower-cutoff pointed disk, fixed on a higher cap and matching ordinary transport off the tube. Its proof uses positive finite passage inverses and the late $1/T$ collar, so unequal rates do not alter this disk conclusion. [F1, F3, F4, step 3.1, step 4.1, construct]

6.1 Between critical levels use ordinary endpoint flow-height reparametrization of [F2], retaining earlier histories and fixing a higher cap. Iterate this and step 5.1 over the finite excellent height spectrum, beginning with the small unstable cap of step 2.1. In the closed case stop below the minimum; in the relative case stop at the regular exit height zero. Every crossing homeomorphism sends the old interior to the unbroken interior and preserves old faces. Thus the final pair is $(D^{\operatorname{ind}(p)},\operatorname{int}D^{\operatorname{ind}(p)})$, with the exact recursive critical and exit stratification and continuous evaluation. The index-zero disk is a point with no outgoing critical or exit face. [F1, F2, F3, step 2.1, step 3.1, step 5.1]

7.1 Each boundary evaluates into $M_0$ or a strictly lower-index unstable disk; interiors evaluate injectively and different unstable interiors are disjoint by their backward limits. Attaching the disks in index order therefore gives the stated finite disk quotient $Z$. Each finite quotient is compact and evaluation is bijective onto the Hausdorff subspace $W^{(k)}$, hence is a homeomorphism. In the closed case the attaching image lies in the ordinary lower skeleton, finite attachments give weak topology and closure finiteness, and every backward orbit has a critical limit. These disks consequently give a CW structure on $M$. In the relative case they give the index filtration over all of $M_0$; this is not necessarily the ordinary skeletal filtration for a supplied base CW structure, since exits need not land in its lower skeleton. The exact disks extend that structure as CW cells precisely when every attaching image has the required ordinary skeletal containment. [F1, F2, step 3.1, step 6.1]

8.1 For the relative handle comparison, let $H_p$ be the constructed disk homeomorphism, fixed on an inner unstable cap. Radially shrink its source boundary sphere to a smaller sphere in that cap. Choose an innermost fixed cap strictly inside this smaller sphere; the homotopy avoids it, and injectivity of $H_p$ makes the image avoid it as well. Thus all endpoint heights in the homotopy stay below a regular level strictly below $f(p)$. The boundary attaching map is therefore homotopic in the previous handle stage to the actual local unstable sphere, which step 2.1 compares to the standard handle core. Starting at the collar of $M_0$, use the mapping-cylinder comparison of [F5] at each value-ordered handle to obtain $(Z,M_0)\simeq(W,M_0)$ relative to $M_0$ with the exact disk attachments. Value order is an attachment order; the index-order disks supply the filtration of step 7.1. Index-zero attachments have empty sphere. [F1, F2, F5, step 2.1, step 6.1, step 7.1, construct]

9.1 If a finite CW structure on $M_0$ was not supplied, use dimension induction. The zero-dimensional closed case is finitely many points. The closed proof of steps 1.1–7.1 has no incoming base and works for arbitrary Morse--Smale metrics. If $M_0$ is empty, use its empty CW structure; otherwise choose Morse--Smale data by [F4] on the closed manifold $M_0$ of dimension $\dim W-1$ and apply that closed construction. Starting with this base, replace the disk attachments of $Z$ in index order by CW attachments: transport each attaching sphere through the homotopy inverse from the preceding model, use the finite-source cellular approximation of [F5] to move it into that model's ordinary $(k-1)$-skeleton, and attach one $k$-disk. The attachment comparison of [F5] preserves the pair equivalence relative to $M_0$ at each stage. This yields a finite CW pair $(X,M_0)\simeq(Z,M_0)$ with the required relative cell counts; the base cells retain their original dimensions. The maps need not remain the exact evaluations $\Phi_p$. For a model base $A\simeq M_0$, the same mapping-cylinder construction gives $(X',A)\simeq(W,M_0)$. Together with step 8.1 this proves all the stated disk, exit, closed CW and relative CW model assertions. [F4, F5, step 1.1, step 7.1, step 8.1, construct] ∎
