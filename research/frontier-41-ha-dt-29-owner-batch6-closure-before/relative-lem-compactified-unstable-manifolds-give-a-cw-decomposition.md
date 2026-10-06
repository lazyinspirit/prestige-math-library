---
id: lem-compactified-unstable-manifolds-give-a-cw-decomposition
kind: lemma
title: "Compactified unstable manifolds give the Morse--Smale CW decomposition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-smale-pair, def-morse-function-adapted-to-a-cobordism, def-smooth-cobordism-triad-for-morse-theory, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, lem-interior-slab-handle-attachment, def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, thm-morse-trajectory-compactness-up-to-breaking, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-gluing-broken-index-two-trajectories-gives-collar-ends, lem-breaking-length-is-bounded-by-index-drop, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-cell-attachment-by-a-characteristic-map, def-cw-complex-with-closure-finiteness-and-weak-topology, lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, thm-regular-interval-diffeomorphism, prop-deformation-lemma-for-a-critical-point-free-slab, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-topological-manifolds-are-metrizable-and-paracompact, def-compact-space, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex]
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

## Facts & Assumptions

**Given:** The Axiom of Choice and boundary-directed Morse--Smale data $(f,X)$ on a closed manifold or on a compact cobordism triad $(W;M_0,M_1)$ as in the statement.

[F1] $W^u(p)$ is an injectively immersed open disk of dimension $\operatorname{ind}(p)$, and it is the interior of the local unstable disk described in the Morse-chart model ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]], [[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]], [[def-stable-and-unstable-sets-of-a-critical-point]]).

[F2] In the closed case the trajectory compactification is the published compactness-up-to-breaking theorem: every sequence of trajectories with fixed ends has a geometrically convergent subsequence, the compactified space is compact metrizable and second-countable, and the added strata are indexed by strictly descending chains of critical points, whose length is bounded by the index drop ([[thm-morse-trajectory-compactness-up-to-breaking]], [[lem-breaking-length-is-bounded-by-index-drop]], [[def-geometric-convergence-to-a-broken-morse-trajectory]]).

[F3] In dimension two the compactification is a compact one-manifold with boundary whose boundary strata are glued in by collar charts ([[thm-index-two-compactification-is-a-compact-one-manifold-with-boundary]], [[lem-gluing-broken-index-two-trajectories-gives-collar-ends]]); the same local description iterates to all dimensions.

[F4] In the relative case $X$ is the restriction of a complete field on a boundaryless collar carrier, and trajectories in compact $W$ are followed only until boundary exit. The field $X$ is boundary-directed, and outside the critical set the function $f$ strictly decreases along $X$; a maximal trajectory that does not converge to a critical point leaves $W$ through $M_0$ in finite time, by the product collar model, the regular-interval theorem and the controlled crossing of compact regular bands ([[thm-fundamental-theorem-on-flows]], [[thm-regular-interval-diffeomorphism]], [[prop-deformation-lemma-for-a-critical-point-free-slab]], [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]], [[def-morse-function-adapted-to-a-cobordism]]).

[F5] The critical points of an adapted excellent Morse function are interior and finite in number ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]), and the corresponding handle decomposition relative to the incoming boundary is described by the run's handle correspondence: the interior slab attachment attaches a handle whose core is the unstable disk, the attachment region is the boundary sphere of that disk, and the associated filtration is a relative CW complex ([[def-smooth-cobordism-triad-for-morse-theory]], [[def-morse-function-adapted-to-a-cobordism]], [[def-handle-decomposition-relative-to-the-incoming-boundary]], [[thm-morse-functions-and-handle-decompositions-correspond]], [[lem-interior-slab-handle-attachment]], [[thm-one-critical-point-handle-attachment]], [[cor-unstable-disk-is-the-handle-core]], [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]).

[F6] Attaching a cell along a map defined on the boundary of a disk produces a relative CW pair: the interior of the attached disk embeds openly into its closure, the skeleta are closed and the cells partition the quotient, and the weak topology on a compact metric space follows from closedness of the skeleta and finiteness of the cell family ([[def-cell-attachment-by-a-characteristic-map]], [[def-cw-complex-with-closure-finiteness-and-weak-topology]], [[lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure]], [[prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]], [[thm-topological-manifolds-are-metrizable-and-paracompact]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 In the closed case, [F2] makes $\overline W{}^u(p)$ a compact metrizable space, because it is obtained from $W^u(p)$ by adding the broken trajectories issuing from $p$, and the number of added strata is finite by [F5]; each added stratum $\mathcal M(p,q)\times\overline W{}^u(q)$ is recursively one dimension lower, and the second-countable structure passes to the compactification by the homeomorphism onto a compact set of height-parametrized paths. [F2, F5, given]

1.2 In the relative case, let $t\mapsto x(t)$ be a maximal nonconstant trajectory whose backward limit is $p$ and which is bounded away from the critical set after some time. By [F4] it stays in the compact region between two regular levels and, since $f$ strictly decreases along it and $X$ is boundary-directed, it cannot remain in $W$ for all positive times without converging to a critical point of lower value; hence it leaves the interior through $M_0$ in finite time and, because the field points outward along $M_0$ in the collar, its exit point is a definite point of $M_0$. Therefore the forward limits of maximal trajectories are either critical points or exit points, and the escape stratum $\mathcal E_p$ of the statement is exactly the set of trajectories of the second kind. [F4, given, algebra]

2.1 The disk model: iterating [F3] over the finitely many critical values between $f(p)$ and the minimum, the regular-interval theorem identifies the slices of $W^u(p)$ below a critical value with the corresponding slices above it, and crossing a critical value glues in the stratum $\mathcal M(p,q)\times\overline W{}^u(q)$ along exactly the boundary of the lower disk; the resulting compact space is homeomorphic to the closed disk $D^{\operatorname{ind}(p)}$ with interior $W^u(p)$, which is the closed case of part 1 and, by the same iteration, the closed-case part of the stratification (3). [F1, F2, F3, step 1.1]

2.2 The compactness of the relative compactification follows by combining steps 1.1--2.1 with step 1.2: sequences of trajectories through $p$ either have a geometrically convergent subsequence with critical-point limits, as in the closed case, or else escape through the collar, and the escape stratum is closed in the compactification because the exit point depends continuously on the trajectory and $M_0$ is compact; the strata are again finite and strictly index-decreasing, with the escape stratum contributing no critical point. Hence the relative analogue of part 1 holds with $\mathcal E_p$ replacing the closed-case lower-index strata in the boundary, and $W^u(p)$ remains the interior of the compactified disk. [F2, F4, F5, step 1.2]

3.1 For the cell structure, [F5] identifies the handle attached at $p$ with the local unstable disk as core. The value filtration need not agree with the index filtration. If the compactified disks and their lower-index attaching maps of steps 2.1--2.2 are established, [F6] shows that taking the quotient of $M_0\sqcup\bigsqcup_p\overline W{}^u(p)$ by the relations $\Phi_p$ attaches each disk along its boundary to the union of $M_0$ and the lower-index closed cells, and that the resulting quotient is a finite relative CW pair $(X,M_0)$ whose $k$-skeleton is homeomorphic to $W^{(k)}$. The correspondence theorem of [F5] identifies the handle attachment maps with the cell attachments up to the boundary-collar transport, giving the homotopy equivalence of pairs $(W,M_0)\simeq(X,M_0)$; in the closed case the unstable manifolds cover $M$ and this is a CW structure on $M$. [F5, F6, step 2.1, step 2.2]

4.1 The boundary stratification (3) is the statement that the boundary of the disk $\overline W{}^u(p)$ consists precisely of the added strata: the lower-index closed disks $\mathcal M(p,q)\times\overline W{}^u(q)$ and the escape stratum $\mathcal E_p$; each added stratum lies in the boundary because $W^u(p)$ is the interior, and conversely every boundary point is such a limit by parts 1 and 3. The map $\Phi_p$ sends a boundary stratum $(\gamma,x)$ to the image of $x\in\overline W{}^u(q)$ with $\operatorname{ind}(q)<\operatorname{ind}(p)$, and sends a trajectory of $\mathcal E_p$ to its exit point in $M_0$; hence the boundary image lies in $M_0\cup\bigcup_{\operatorname{ind}(q)<\operatorname{ind}(p)}W^u(q)$, as claimed. [step 2.1, step 2.2, step 3.1] ∎
