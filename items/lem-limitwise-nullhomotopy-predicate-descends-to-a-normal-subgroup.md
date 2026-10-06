---
id: lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup
kind: lemma
title: "Limitwise-nullhomotopy predicate descends to a normal subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limitwise-nullhomotopy-predicate-on-based-loops, def-regular-foliation-atlas, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-countable-choice-principle-for-foliation-pair, lem-nullhomotopy-persists-under-a-compact-transverse-deformation, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-based-loops-and-fundamental-group, thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 8
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310 (Lemma 3.1 and Lemma 3.2); the finite-chart homotopy and conjugation details are supplied here"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. For a transversely oriented codimension-
one foliation, a leaf $L$, a base point $x\in L$, and a side $j$, the predicate $Q_j(f)$
of [[def-limitwise-nullhomotopy-predicate-on-based-loops]] is independent of the chosen
normal fence and is constant on based-homotopy classes of loops in $N_j(L,x)$. The set
of classes in $N_j(L,x)$ satisfying this predicate is a well-defined normal subgroup of
$\pi_1(L,x)$. Consequently the class-level subgroup $\Pi^j_1(L,x)$ may be defined using
any representative and any sufficiently short normal fence.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation, a leaf $L$, a base point $x\in L$, a side $j$, and the predicate $Q_j$ on based loops in $N_j(L,x)$ for a chosen sufficiently short normal fence.

## Proof

**Proof technique:** direct.

1.1 A based leafwise homotopy of two loop representatives has compact intrinsic image. Subdivide its parameter cylinder into finitely many small rectangles inside convex plaque-coordinate boxes. Continue one positive base transversal along a finite tree of the subdivision. Face relations give identical transported labels by the finite chart homotopy argument of [[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]]. The sole noncontractible circuit of the parameter cylinder is the original loop; since its class lies in $N_j$, its return germ is the identity on a sufficiently short interval on side j. Thus all finitely many edge relations hold on one positive interval. Assign boundary edge paths to the two displaced loops, assign interior edges once in their common plaque cores, and fill each face by coning its boundary in one convex plaque core. As in [[lem-nullhomotopy-persists-under-a-compact-transverse-deformation]] in its shared-edge and face-filling construction, this yields a leafwise homotopy between the displaced boundary loops, with a moving basepoint. Nullhomotopy is unchanged by that basepoint change. Hence the predicate is constant on based-homotopy classes. [given, construct]

2.1 Two short fence choices are compared at the basepoint by the local plaque transport between their transversals. It is an increasing germ sending zero to zero, so it sends all sufficiently small positive parameters into, and onto, a sufficiently small positive interval. For matching parameters their displaced loops have the same local transverse labels; the finite rectangle construction of step 1.1, applied to the constant representative homotopy and these two boundary choices, gives a leafwise homotopy between them. Therefore the condition "every sufficiently small displacement is null" is unchanged by the fence. [step 1.1, construct]

3.1 The constant loop satisfies the predicate, using its constant plaque-wise displacement; step 2.1 makes this true for any fence. For two loops in $N_j$ satisfying the predicate, choose one common short base transversal. Their displaced loops are closed and null at each sufficiently small parameter, so their concatenation is null. Displacement of the concatenation agrees with that concatenation up to the finite plaque homotopies in step 1.1. Reversal likewise gives the reversed null loop. Thus the class set contains the identity and is closed under products and inverses. [step 1.1, step 2.1, construct]

4.1 For any based loop g, its side-preserving transport germ sends a sufficiently small positive parameter ε to another positive parameter tending to zero. Displacing $g*f*\bar g$ gives the g-path, the displaced null loop f at that transported parameter, and the reverse g-path. This loop is null. To check that the conjugate also lies in $N_j$, let $\rho$ be the reversed-loop holonomy homomorphism on the full base transversal ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Coorientation makes its germs increasing and side-preserving. Restriction to side $j$ is a well-defined homomorphism $r_j$ into the group of local half-transversal germs: restriction commutes with composition and inversion, and agreement near the basepoint remains agreement on that side. Thus $N_j=\ker(r_j\circ\rho)$ is normal, and the conjugate belongs to it. The kernel of $\rho$ itself need not equal $N_j$. Therefore the predicate-defined subgroup is normal in $\pi_1(L,x)$. All compact subdivisions and germ relations were finite. [step 1.1, step 2.1, step 3.1, given] ∎
