---
id: lem-null-characteristic-frontier-cap-transports-nullity-to-adjacent-annulus
kind: lemma
title: "A null characteristic frontier transports nullity to the adjacent annulus"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nullhomotopy-persists-under-a-compact-transverse-deformation, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-based-loops-and-fundamental-group, def-countable-choice-principle-for-foliation-pair]
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
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (center/separatrix frontier loops); the fixed-disk transport and exact prescribed-loop conclusion are proved locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $P$ be a regular closed characteristic orbit in a generic disk map, and suppose its based class is trivial in its ambient leaf $L$. Then the characteristic return map on a transverse section in the disk is the ambient foliation holonomy of $P$, hence is the identity germ. The adjacent characteristic period annuli therefore consist of closed prescribed level loops; every sufficiently close loop on either side is null-homotopic in its own leaf.

## Facts & Assumptions

**Given:** A regular closed characteristic orbit $P$ of a generic disk map, with ambient leaf $L$, whose based class $[P]$ is trivial in $\pi_1(L)$ ([[def-based-loops-and-fundamental-group]]), and a small transverse section in the disk at a point of $P$.

[F1] The holonomy representation and holonomy group of a leaf are defined on leafwise homotopy classes, so a loop whose based class is trivial in its leaf has identity holonomy germ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F2] If a $C^2$ transverse trace annulus has leafwise loops and its base loop bounds a compact continuous leafwise disk, then the prescribed loops are null-homotopic in their own leaves for all parameters in some open interval about the base parameter (the sibling item `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`). This is a local assertion; it supplies neither persistence throughout an arbitrary compact parameter interval nor a transport of one fixed disk map.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Because $P$ is regular, the characteristic line field is nonzero along it and there is a small transverse section at a point of $P$ on which the first-return map of the characteristic field is defined. Along the regular orbit, foliated-chart transport on this section is exactly that first-return map: the orbit lies in the single ambient leaf $L$ and the section maps transversely to the foliation, so chartwise transport of the section along the finitely many charts covering $P$ composes to the characteristic return and to the ambient foliation holonomy simultaneously. [given, construct]

2.1 Triviality of $[P]$ in $\pi_1(L)$ makes the holonomy germ of the transported section the identity by [F1]; hence every sufficiently close point of the section returns to itself under the first-return map, and the nearby characteristic trajectories close on both sides of $P$. The adjacent characteristic period annuli therefore consist of closed prescribed level loops. [F1, step 1.1]

3.1 Shrink the identity-return interval of step 2.1. Finite regular characteristic strips give a jointly $C^2$ trace of the prescribed closed loops across $P$: in each strip the pulled-back $C^2$ transverse coordinate is a submersion, so its nearby level arcs have $C^2$ graph parametrizations; the finite overlaps are matched by the same transverse label, and identity return closes the trace. Its point tracks are transverse to the ambient foliation, since the transverse label has nonzero parameter derivative. Fix a compact continuous leafwise filling of $P$ and apply [F2] at its base parameter. The resulting open interval contains parameters on both sides of $P$, and every prescribed loop there is null-homotopic in its own leaf. No continuation to distant levels or transport of the original disk parametrization is required. [F2, step 1.1, step 2.1, construct]

4.1 Therefore the return map is the ambient holonomy, it is the identity germ, the adjacent annuli are closed level loops, and every sufficiently close loop on either side is null-homotopic in its leaf; the argument is asserted for regular orbits only and does not identify holonomy with the characteristic return across a saddle polycycle, and it uses only the fixed nullhomotopy and finitely many charts, hence only the standing countable choice from [F3]. [F2, F3, step 3.1] ∎
