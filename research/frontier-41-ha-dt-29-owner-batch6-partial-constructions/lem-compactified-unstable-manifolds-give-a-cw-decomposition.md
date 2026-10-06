---
id: lem-compactified-unstable-manifolds-give-a-cw-decomposition
kind: lemma
title: "Compactified unstable manifolds give the Morse--Smale CW decomposition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
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

**Given:** The Axiom of Choice and the closed or boundary-directed adapted Morse--Smale data in the statement. The all-dimensional relative compactified-disk claim is retained, but is not proved below.

[F1] The unstable manifold is an immersed open disk of the Morse index, and the field strictly decreases $f$ away from critical points ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]], [[def-morse-function-adapted-to-a-cobordism]]).

[F2] Finite-time flow transport across a compact critical-point-free band is controlled; the boundary collar is a product and the field exits through $M_0$ ([[thm-regular-interval-diffeomorphism]], [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]], [[def-morse-function-adapted-to-a-cobordism]]).

## Proof

**Proof technique:** direct (partial proof attempt).

1.1 By [F1] the uncompactified unstable manifold has the required interior disk dimension. A trajectory that stays in the compact cobordism and is eventually bounded away from its critical set cannot remain there indefinitely: on that compact regular region, $-df(X)$ has a positive minimum, while $f$ has bounded range. Thus it reaches a boundary collar, where the product model in [F2] gives a finite exit time and a unique exit point in $M_0$. This establishes the exit alternative for such trajectories. [F1, F2, given]

1.2 In a compact regular band, flow transport continuously identifies endpoint slices by [F2]; similarly, at a fixed unbroken exit trajectory the exit point varies continuously, by transversality to the product collar. These local continuity statements and the interior disk of step 1.1 do not establish compactness or the disk type of the space with broken trajectories added. They establish only the regular-band and unbroken-exit portions of the proposed construction. [F2, step 1.1] ∎

The exact missing supply is a relative variable-endpoint compactification theorem for each $W^u(p)$, with explicit geometric neighbourhoods at all broken-and-exiting configurations, a disk-pair homeomorphism $(\overline W{}^u(p),W^u(p))\cong(D^{\operatorname{ind}(p)},\operatorname{int}D^{\operatorname{ind}(p)})$, continuous evaluation, and compatible critical-crossing and exit-face charts. It must also identify its attaching maps with a relative CW model of the handle decomposition after a finite CW structure on $M_0$ has been supplied or constructed. Fixed-critical-end compactness and index-two collars do not supply this theorem. In particular, continuity of unbroken exit points does not make the unbroken exit stratum closed: a sequence may break first and then exit.

Audin–Damian Section 4.9.b–c, printed pp.118–127, supplies a separate closed-manifold variable-endpoint topology and a disk-bundle critical-crossing construction, including the index-zero case. The claimed relative construction requires its boundary and compatibility extension; iterating a one-dimensional collar is insufficient. The handle/CW supplier supplies a homotopy model, not these actual characteristic disks. The value filtration also need not be skeletal. The full retained statement therefore remains not supplied.
