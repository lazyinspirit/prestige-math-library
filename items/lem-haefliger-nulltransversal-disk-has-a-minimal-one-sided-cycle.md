---
id: lem-haefliger-nulltransversal-disk-has-a-minimal-one-sided-cycle
kind: lemma
title: "A null-transversal disk has a minimal one-sided cycle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, lem-characteristic-disk-center-saddle-index-count, lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier, def-transversely-oriented-codimension-one-foliation, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-countable-choice-principle-for-foliation-pair, lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family, lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar, lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle, lem-area-minimal-three-sector-homoclinic-cycle-has-identity-inward-holonomy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 9
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andr\u00e9 Haefliger, Vari\u00e9t\u00e9s feuillet\u00e9es, Annali della Scuola Normale Superiore di Pisa, 3e s\u00e9rie, 16 (1962), no. 4, 367-397 (complete Numdam scan)"
      url: "https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf"
      locator: "\u00a74.2, Proposition 4.2, printed pp. 390-392"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-one foliation of a $3$-manifold and let $h:D^2\to M$ be a disk map in the relative generic position of [[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]], with boundary a closed transversal and with the images of its distinct characteristic singular points in distinct ambient leaves. Such separated data are obtainable rel the prescribed boundary collar by [[lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar]]. Then there is a regular closed characteristic orbit or finite saddle polycycle $P$ in one ambient leaf $L$. Its holonomy germ is the identity on the inward half-transversal and nonidentity on the opposite side. The selection is inclusion-minimal among the source characteristic cycles with nonidentity holonomy and bounded simple-cycle domains. A vanishing-cycle application additionally requires a proved inward family and leafwise caps; a polycycle endpoint uses the separate construction in `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family` once its family hypotheses are supplied.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation $F$ of a $3$-manifold and a disk map $h:D^2\to M$ in relative generic position with boundary a closed transversal and with the images of distinct characteristic singular points in distinct ambient leaves.

[F1] The relative generic position of the disk map, the separation of the images of its singular points into distinct ambient leaves rel the boundary collar, the finite center-saddle index count, and the orbit-or-polycycle frontier alternative for every period annulus are supplied by the sibling-pair items `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`, `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar`, `lem-characteristic-disk-center-saddle-index-count` and `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier`; their uses are flagged in steps 1.1 and 3.1 below.

[F2] The sibling-pair item `lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle` supplies, for a separated generic characteristic disk, an inclusion-minimal source characteristic cycle with nonidentity holonomy and a bounded simple-cycle domain; the minimality is among all such cycles in the original source disk, and the selected bounded domain also minimizes area among these cycles.

[F3] The sibling-pair item `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family` supplies the separate inward transverse family construction once a polycycle endpoint's family hypotheses are supplied, and the in-pair item [[lem-area-minimal-three-sector-homoclinic-cycle-has-identity-inward-holonomy]] supplies the three-sector conclusion that the unused branches close into the inner one-quadrant homoclinic loop with identity full holonomy and that the realized inward return equals the inward $P$-holonomy.

[F4] The holonomy representation of a leaf is well defined, so a full nonidentity germ is nonidentity on at least one side and identity inward forces nonidentity on the opposite side ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]); the coorientation supplies the two half-transversals of the statement ([[def-transversely-oriented-codimension-one-foliation]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the disk map is in relative generic position and its finitely many characteristic singular points have distinct ambient leaf images; applying the minimum-selection supplier [F2] to this separated disk yields a source characteristic cycle $P$ with nonidentity full holonomy whose bounded simple-cycle domain is inclusion-minimal among all source characteristic cycles with nonidentity holonomy. The cycle $P$ is either a regular closed characteristic orbit or a finite saddle polycycle, and no disk replacement is used in its selection. [F1, F2, given, choose]

2.1 Suppose $P$ is regular or its bounded homoclinic side occupies one saddle sector, and its inward germ is nonidentity. On that side, the finite regular strips and, in the homoclinic case, the single saddle-sector passage give a genuine one-circuit source return map $R$. Finite target plaque transport identifies it with the inward ambient holonomy, up to conjugacy and possible inversion. Choose an arbitrarily small inward parameter $r$ with $R(r)\ne r$; reverse the characteristic direction if necessary so $R(r)>r$. Over one return strip, use regular $C^2$ first-integral strip coordinates $(s,u)$ with $s$ increasing along trajectories and $u$ constant, and choose a strictly decreasing graph $u=f(s)$ from $r$ to $R^{-1}(r)$. Its endpoints match after the return identification. Choose matching endpoint derivatives and smooth the seams while retaining $f'<0$. Its image is a simple $C^2$ source circle $C$ inside the bounded side of $P$, following that one-sector itinerary once. The field crosses $C$ toward the inward side $u>f(s)$; the bounded Jordan disk $K_C$ is therefore positively invariant and lies strictly inside the domain of $P$. The construction is at positive regular parameters and does not smooth through the saddle itself. [F1, F4, step 1.1, construct]

2.2 If the bounded side of $P$ occupies three saddle quadrants, use the area-minimizing conclusion of the selection supplier [F2] and apply [F3] to this same cycle in the unchanged disk. It supplies identity inward holonomy directly, as well as the inner one-quadrant loop $Q$ with identity full holonomy and the equality of the realized inward return with the inward $P$-holonomy. Since $P$ has nonidentity full holonomy, its opposite-side germ is nonidentity by [F4]. [F2, F3, F4, step 1.1]


3.1 In the regular or one-sector case of step 2.1, restrict the original disk map to $K_C$, using a disk parametrization of this regular planar Jordan domain. Its characteristic singularities are the original finitely many nondegenerate interior singularities; their ambient leaves remain distinct, and its boundary $C$ is everywhere transverse to the characteristic field, hence its image is a closed transversal to $F$. Thus this restricted generic disk satisfies the hypotheses of [F2]. That supplier gives a simple characteristic cycle $Q$ with nonidentity full holonomy and bounded domain inside $K_C$. This is a cycle in the original source disk, strictly inside the domain of $P$, contradicting its original inclusion-minimality. Nonidentity of $Q$ comes from the nonidentity-cycle supplier, not from the center-period-annulus frontier alternative. Consequently the inward germ of $P$ is identity, and its full nonidentity germ is nonidentity on the opposite side. [F1, F2, F4, step 2.1]

4.1 Therefore in every case the selected cycle $P$ has identity holonomy on the inward half-transversal and nonidentity holonomy on the opposite side, and the selection is inclusion-minimal among the source characteristic cycles with nonidentity holonomy and bounded simple-cycle domains. The polycycle endpoint additionally uses the separate rounding construction of [F3] once its family hypotheses are supplied, and a vanishing-cycle application requires in addition a proved inward family and leafwise caps; interior singularities are retained and no claim that all interior trajectories are closed is made. The selection and the case analysis use only finitely many source cycles, ports and sections together with the cited suppliers, hence only the standing countable choice from [F5]. [F1, F3, F5, step 3.1, step 2.2] ∎
