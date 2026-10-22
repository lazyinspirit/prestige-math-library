# Batch 23 Step 1 notes — emg-fx08

Run: physics-non-fluid-129-2026-10-21-r2

## Inventory and plan reconciliation

This batch owns A page emg-fx08 (order 743) and B page emg-fx08-examples
(order 744), both in einstein-maxwell-models-mathematics with library
mathematics. The A page requires emg-ms02, emg-fx06, and emg-ms01; the B page
requires the A page. The final inventory is three A items and one B
counterexample, below the 100-item page cap.

The detailed design section and plan-spec agree on page IDs, companion, order,
title, category, library, page requirements, and the four planned item IDs.
The plan-spec item arrays are empty, as expected before authoring, while the
detailed design names the interfaces. The batch manifest now contains those
exact planned interfaces; no substantive design conflict was found.

The design's scope and cautions are retained: a massless classical charged
test scalar on a fixed subextremal electric RN exterior; the gauge
$A_t=-Q/r$ with $A_t\to0$ at infinity; the Coulomb phase
$\Theta=\omega r_*-eQ\log(r/L)$; relative horizon-to-infinity potential;
geometric units $G=c=1$ with $[e]=[\omega]=\mathrm m^{-1}$; and no claim
of scattering-solution existence, quantum pair production,
backreaction, nonlinear instability, massive-field behavior, mirrors, AdS
boundaries, bound states, or complex-frequency quasinormal modes. The source
sign convention and simple plane-wave asymptotic are not imported where they
differ from the exact local gauge and the long-range $1/r$ coefficient.

## Item inventory, dependencies, and levels

All dependencies are mathematical premises. Suppliers were inspected before
their consumers.

| Item | Page | Level | Direct dependencies |
| --- | --- | ---: | --- |
| def-emg-fx-charged-radial-scattering | A | 2 | def-emg-xs-rn-data; prop-emg-xs-rn-horizon-data; lem-emg-fx-rn-scalar-wave-potential |
| lem-emg-fx-charged-radial-equation | A | 3 | def-emg-fx-charged-radial-scattering |
| prop-emg-fx-superradiant-wronskian | A | 4 | def-emg-fx-charged-radial-scattering; lem-emg-fx-charged-radial-equation |
| cex-emg-fx-neutral-no-amplification | B | 5 | prop-emg-fx-superradiant-wronskian |

The Definition depends on the batch-21 scalar-coordinate result at its exact
current statement and hypotheses. The four computed in-run item levels are
2, 3, 4, and 5, matching their manifest labels. Suppliers are authored in that
order, then the neutral counterexample follows the flux proposition.

There are two in-run edges in the required cross-batch array: page emg-fx08
requires page emg-fx06, and the Definition consumes
lem-emg-fx-rn-scalar-wave-potential. Both scoped checks are recorded as
verified. The required pages emg-ms01 and emg-ms02 are published suppliers
outside this run, so they are page requirements but not cross-batch rows. The
B-to-A edge is within this batch.

The stored run schedule records batch 23 at dependency level 3 with
requires=[21]. Recalculation from the current complete manifests gives the
same batch-23 row, but the run-level input hash changed: recorded
477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9 versus
computed 2d1e3d9e3f9c1019a0fb60c75d1677c10dcaa79c95511f1a078d90a099dc38ea.
The run-level schedule is shared evidence and was left for owner reconciliation.
The final batch-dependency-levels check therefore reports a stale schedule.

The full-run item-dependency-levels check has 37 empty inventories outside
batch 23. They are emg-fx13 and emg-fx13-examples;
gr-fx09-bootstrap-and-stability-boundaries and its examples page;
qftx-ribbon-braid-representations and its examples page;
qftx-modular-tqft-sewing and its examples page;
qftx-chern-simons-bf-gravity and its examples page;
qftx-kz-chiral-interface and its examples page;
qftx-hall-bps-wall-crossing and its examples page;
qftx-categorified-line-operators and its examples page;
csm-frontier-sampling-certificates-examples;
csm-frontier-inverse-gibbs and its examples page;
csm-frontier-planar-critical-point and its examples page;
csm-frontier-rare-event-numerics and its examples page;
qsmx-quantum-double and its examples page;
qsmx-transverse-ising-spectral and its examples page;
tgrx-focusing-boundary and its examples page;
tgrx-ads-effective-boundaries and its examples page;
tgrx-topological-entropy-models and its examples page;
tgrx-jt-disk-model and its examples page; and
tgrx-research-boundaries and its examples page. None of the 37 is owned by
this batch. The scoped calculation reports no error for the four batch-23
items and confirms levels 2, 3, 4, and 5.

## Supplier interface audit and readiness

The published emg-ms01 Definition supplies the exact dyonic RN metric and
electric potential. The local electric case sets $q_e=Q$, $q_m=0$, so
$A_t=-Q/r$ exactly. Its definition does not introduce magnetic bundles or
charge quantization.

The published emg-ms02 horizon proposition assumes $M>0$, $Q^2>0$ and
$M^2\ge Q^2$. Its exact root and surface-gravity proof was inspected; the
result defines a local Killing horizon in the selected metric and does not
assert an event horizon in a maximal spacetime. This batch uses the strict
subextremal subcase $0<|Q|<M$.

The batch-21 emg-fx06 supplier lem-emg-fx-rn-scalar-wave-potential was read
through its complete current proof. Its exact hypotheses are $m>0$,
$q_e^2+q_m^2<m^2$, a supplied real normalized spherical harmonic, and the
specified exterior. It proves that the oriented tortoise integral is a smooth
coordinate onto $\mathbb R$ and states its horizon-energy limitation. The
charged Definition uses only that coordinate and harmonic interface, not the
supplier's uncharged field equation or energy conclusion. Its current
Step-1 record is ready (not inferred from its draft status or review fields);
the current readiness hash is
bceb5d48954d9db17b5b2162c0e24a8c951b38b2ac5e88fe6ad6143e0ead0d39.

That supplier's transitive mathematical dependency on def-countable-choice
is pinned in research/math-imports.json and byte-identical to the read-only
root item (SHA-256 9defd3355ab0f6afc7f0ce0dc10fdefe78d9a2f39b3af244e44b3dc181cce2cc).
The imported definition states AC_omega. This batch retains that supplier
background, makes no additional choice, and does not edit the import or root
mathematics.

The four final items each have a current Step-1 ready record with owner=false.
Their exact direct dependency lists are in the table above. Step-1 readiness
records bind the current item and dependency closure; they do not imply
independent proof acceptance.

## Source reading and harvest

The A page uses two independent full-text treatments, including the complete
2020 Lecture Notes in Physics edition. The second treatment is a full
book-length PhD thesis, recorded as a monograph source kind in the mechanical
coverage vocabulary; its bibliographic title and the source-reading record
identify it explicitly as a thesis.

- Brito, Cardoso, and Pani, *Superradiance -- the 2020 Edition*,
  https://arxiv.org/pdf/1501.06570. Full-text fetch: 16,222,249 bytes,
  281 pages, SHA-256 prefix 1e0663f0ea7d487a. Complete relevant arguments
  inspected in §§4.1.1, 4.4, and 4.6.1. The coverage file maps equations
  (4.2a), (4.3)-(4.4), and (4.50)-(4.56) to the Definition, radial lemma,
  and flux proposition. Its unmodified plane-wave asymptotic and different
  written gauge convention are explicitly not imported.
- Balakumar, *Aspects of quantum charged scalar field theory in curved
  spacetime: Black hole superradiance and Hadamard renormalisation*,
  https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0. Full-text
  fetch: 1,731,481 bytes, 307 pages, SHA-256 prefix de751e44335eda8d.
  Complete relevant arguments inspected in Chapter 3, §§3.1-3.3.4.
  Equations (3.11)-(3.56) support the Definition and radial reduction;
  equations (3.76)-(3.84) support the Wronskian treatment. The simple
  infinity plane-wave expression is not imported because the exact $1/r$
  charged tail requires the logarithmic phase. Quantum-state normalization
  is outside this page.

The coverage records 12 harvested results with item mappings and dispositions.
All four page/source records were successfully fetched and stamped once;
the final non-stamping source check verifies 4/4. The browser text extractor
could not open the 16 MB arXiv PDF because of its response-size limit; the
complete relevant arguments were read in the same edition's full arXiv HTML,
and source-fetch-check subsequently fetched and stamped the complete PDF. No
full-text source fetch failed; no source was dropped or left unresolved.

## Final scoped checks

- Content policy: 4 items, 0 errors, 0 warnings.
- Proof contracts: strict 4/4 items, 0 errors, 0 warnings.
- Proof precheck: 3 proof-bearing items passed; the Definition is not
  applicable.
- Proof layout: 4 changed items, 6 steps, 0 defects.
- Render check: 4 items and 2 page files, 0 errors; all math spans parsed.
- Dependency check: selected 4 items; the prerequisite closure covers
  1,465 items and 323 pages, with no unresolved edge or cycle.
- Coverage checklist: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- Source fetch check: 4/4 verified and resolved, 0 drops.
- Scoped item levels: 2, 3, 4, 5, all labels match computed levels.

The full-run item-level command remains red only for the 37 unrelated empty
inventories listed above. The run-level batch schedule check reports the
shared schedule hash stale; recomputation confirms the batch-23 row itself
remains level 3 and requires batch 21. Neither run-level artifact was edited.
