---
id: def-gts-stable-j-holomorphic-disks-with-boundary-markings
kind: definition
title: Stable J-holomorphic disks with boundary markings
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-relatively-spin-lagrangian-data
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-relatively-spin-lagrangian-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 18–19, stable disk moduli and evaluation maps
    - title: Kaoru Ono, Development in Symplectic Floer Theory, Proceedings of the International Congress of Mathematicians 2006
      url: https://www.mathunion.org/fileadmin/ICM/Proceedings/ICM2006.2/ICM2006.2.ocr.pdf
      locator: §3, printed pp. 1071–1072, stable disk moduli and relative-spin orientation data
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a smooth symplectic manifold $(M,\omega)$, a smooth $\omega$-tame almost-complex structure $J$ as in [[def-gts-symplectic-and-almost-complex-curve-data]], and compact embedded Lagrangians $L_0,\ldots,L_k$, allowing repetitions. Relative-spin data as in [[def-gts-relatively-spin-lagrangian-data]] may additionally be specified for orientations; it is not required to define the maps or their evaluation sets.

A bordered disk component is a compact smooth surface diffeomorphic to the closed unit disk, with holomorphic charts on its interior and boundary charts to half-disks whose boundary intervals map to the real axis; chart transitions are holomorphic in the interiors and smooth up to the boundary. A sphere component is a closed Riemann surface with the holomorphic atlas defined in the curve-data item.

A nodal domain in this definition is obtained from a finite disjoint union of such disk components and sphere components by identifying finitely many disjoint pairs of distinct points, each pair consisting either of two interior points or of two disk-boundary points. Each identified pair is one node, its two original points are its branches, and the disjoint union before identification is the normalization. A node is a boundary node when both branches lie on disk boundaries; otherwise it is an interior node. The dual graph has one vertex for each normalized component and one edge for each node.

A prestable disk domain with $k+1$ boundary markings is a finite connected nodal genus-zero bordered Riemann surface of this form whose dual graph is a tree and whose disk vertices and boundary-node edges form a connected tree. Thus smoothing its boundary nodes gives a disk, with sphere trees attached at interior nodes. There are $k+1$ distinct labeled smooth boundary points $z_0,\ldots,z_k$, allowed on ANY disk components. Their cyclic order is the order induced on the single boundary circle after smoothing the boundary nodes. Equivalently, traverse all oriented disk boundaries, passing from one branch to the other at every boundary node; the resulting cyclic traversal meets the labels in the specified order. The disk containing $z_0$ may be designated the root. A root designation is bookkeeping and is not required to survive contraction of unstable components.

Between successive markings $z_i,z_{i+1}$ this boundary traversal has label $L_i$, indices modulo $k+1$. Each normalized open boundary segment receives its traversal label. At an unmarked boundary node the two meeting segments inherit the same label. Sphere trees attach only at interior nodes. This permits a disk bubble to carry some of the original markings and their adjacent labels, rather than requiring all markings to remain on one component.

A prestable $J$-holomorphic disk map is a continuous componentwise smooth $J$-holomorphic map $u$ from such a domain to $M$, mapping each boundary segment into its label and matching the two values at every node. A stable map additionally has finite automorphism group among componentwise biholomorphisms preserving $u$, nodes, labels and markings. Equivalently, every constant sphere has at least three special points, and every constant disk satisfies $b+2i\ge3$, where $b$ counts boundary nodes and boundary markings and $i$ counts interior nodes. Nonconstant components have finite automorphism groups. For $k\ge1$, $u(z_i)\in L_{i-1}\cap L_i$; for $k=0$, $u(z_0)\in L_0$.

For a fixed labeled combinatorial domain, the relative class $\beta$ is the componentwise homotopy class with matched node values and boundary labels fixed. The moduli set $\mathcal M_{k+1}(\beta;L_0,\ldots,L_k,J)$ consists of stable maps modulo label- and marking-preserving biholomorphisms. Evaluation $ev_i$ is $u(z_i)$. Dropping stability defines the corresponding prestable set. In the single-object case all labels are $L$, and no spin hypothesis is needed for either set. Stability alone is not asserted for zero-area inputs with too few markings.

For SINGLE-object unmarked compactness, also allow zero boundary markings and the following collapsed-boundary type: a genus-zero sphere tree with one distinguished smooth point $q$, representing the collapsed boundary circle, with $u(q)\in L$. Its automorphisms preserve $q$, which counts as one special point for stability. There are no disk components in this type. This extension is separate from the notation $\mathcal M_{k+1}$ for $k\ge0$. A positive-area unmarked disk sequence may require this type after its constant principal disk is contracted. A constant unmarked disk itself is a valid prestable map, not a stable map.

These definitions give sets and evaluation maps. They assert no compactness, topology, transversality, virtual perturbation, gluing, or orientations. They correct the all-markings-on-root restriction, which is not preserved by disk bubbling.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-relatively-spin-lagrangian-data]]
