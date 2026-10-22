# Batch 90 source reading — classical Potts random clusters and planar loop transfer

Run: `physics-non-fluid-129-2026-10-21-r2`  
Date: 2026-10-21–22  
Scope: `csm-frontier-fk-loop-algebra` and `csm-frontier-fk-loop-algebra-examples`.

## Grimmett

Geoffrey R. Grimmett, *The Random-Cluster Model*, complete author-hosted arXiv review PDF: <https://arxiv.org/pdf/math/0205237>.

- Read §2.2, printed p. 6 / PDF p. 5, for the finite Potts model and its spin space.
- Read all of §2.3, printed pp. 7–9 / PDF pp. 6–8. This includes the joint Potts/FK law, both marginal calculations, the independent uniform cluster-color conditional, and the complete two-point correlation/connection proof.
- Harvested for `def-csm-frontier-finite-potts-fk`, `def-csm-frontier-fk-boundary-wiring`, `thm-csm-frontier-edwards-sokal`, and `ex-csm-frontier-potts-two-vertices`; each is `included` in `research/physics-non-fluid-129-2026-10-21-r2-batch-90.coverage.json`.
- The source uses a common ferromagnetic coupling. The local definitions allow a separate finite nonnegative activity on each edge, and the complete edge-dependent finite-sum proof is supplied locally.

A Cambridge-hosted Springer chapter PDF timed out once in the web reader. The complete 46-page author-hosted review was found and opened as an alternative; its full text and relevant proof were inspected. The inaccessible Cambridge route is not cited in an authored item.

## Grans-Samuelsson, Liu, He, Jacobsen, and Saleur

Linnea Grans-Samuelsson, Lawrence Liu, Yifei He, Jesper Lykke Jacobsen, and Hubert Saleur, “The action of the Virasoro algebra in the two-dimensional Potts and loop models at generic Q,” complete arXiv PDF: <https://arxiv.org/pdf/2007.11539>.

- Read §3.2, PDF pp. 9–10, including equations (3.3)–(3.5), the FK/loop expansion, frontier set partitions, loop states, and the Temperley–Lieb update convention.
- Harvested for the finite connectivity-transfer context and loop-normalization context, with `included` dispositions and limits recorded per item in coverage.
- The article treats periodic cylinders and warns that torus loop/cluster identities have additional topological terms. This batch claims a finite plane graph with free exterior boundary; no cylinder or torus formula, affine representation, or integrability result is used.

## Duminil-Copin

Hugo Duminil-Copin, *Geometric Representations of Lattice Spin Models*, complete 107-page Cours Peccot lecture notes: <https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf>.

- Read Chapter 3 §§3.1–3.2, printed pp. 23–26 / PDF pp. 31–34, for the finite random-cluster measure, free boundary condition, Potts coupling, and the finite correlation/connectivity relation.
- Read Chapter 4 §4.1, printed pp. 37–39 / PDF pp. 45–47, for the free-boundary medial loop construction, its loop weight, and the local induction identifying loop count with cluster count and open-edge count.
- Harvested as the complete lecture-notes treatment for the finite model and free-boundary loop convention. The local wired-boundary definition uses the notes only for the underlying finite FK weights and component-count convention; it defines the boundary equivalence relation itself. Its explicit model is a finite square-lattice subgraph with connected complement; the local proof extends the identity to any finite connected simple plane graph with a fixed embedding and edge-dependent activities.
- Its proof says some elementary loop-count details follow readily; the authored lemma supplies those component and boundary-count arguments fully. No six-vertex solvability or phase-transition claim is used.

## Retrieval and disposition

The two Jacobsen entries are retrieval-route records, not sources read or cited by these items. The ENS host and ENS Paris-Saclay mirror each returned a connection timeout on the initial attempt and all five recovery retries. Searches then located the full Duminil-Copin notes, which were opened, read at the locators above, and stamped. Their complete local proofs provide the assigned mathematical coverage; the failed Jacobsen routes are marked dropped with the exact route, searches, and per-item alternative arguments/dependencies in the coverage file.

`source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-90.coverage.json --stamp` completed: 3/5 source rows are full-text fetched and stamped, and the other 2/5 are documented failed URL routes replaced by the included Duminil-Copin full notes. Grimmett: 646,142 bytes, 46 pages, SHA-256 prefix `6ef160a9841219a3`; Grans-Samuelsson et al.: 891,417 bytes, 38 pages, prefix `29787c2e3b11d28b`; Duminil-Copin: 1,741,151 bytes, 107 pages, prefix `0e09a4e510a96691`. The source-resolution records retain six actual timeout attempts for each Jacobsen hostname, alternative searches, and per-item arguments/dependencies. They drop only the unreachable URL routes, not their mathematical coverage. None of the included sources is used in place of the local proofs.
