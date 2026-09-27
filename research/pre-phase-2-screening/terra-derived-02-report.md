# Terra derived-category screening — batch 02 — 2026-09-23

Assignment `terra-derived-02` screened all 25 assigned historically published
items at their current hashes. Every target remains published and matches its
baseline content hash from `52bba95d9bd8ede09e96f4b024d634cca38b0100`.

There are 21 `no_candidate_found` dispositions, three retained
`existing_finding` dispositions, and one new `U-P_candidate` disposition.
This is a bounded direct-prerequisite/fatal-defect screen, not a transitive
proof certification.

The new candidate is a narrowly unresolved direct contract mismatch:

- `prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes`
  uses the DC-bearing Ext-to-derived-Hom theorem to annihilate its connecting
  map, but the main contract names only supplied resolutions. A finite-degree
  comparison may avoid DC, but is not supplied by this target or its checked
  direct supplier; the report does not infer that DC is necessary or that the
  splitting theorem is false.

`prop-homology-of-the-derived-tensor-product-is-tor` retains its existing U-P
finding: it invokes the DC-bearing balanced-Tor comparison/coherence interface
while its own statement says only supplied projective resolutions. The two
bounded K-projective/K-injective theorems retain their historical census U-P
classifications; their explicit DC-or-supplied-data contracts and local
homotopy constructions checked out, with no new defect found.

The mixed derived-Hom item is cleared because its opening scope inherits the
DC-or-supplied-lifts/extensions bounded model theorems, which provide the
no-roof and comparison-homotopy data used by its cocycle calculation. The
remaining screens checked the roof/Ore and localized-triangle arguments,
canonical truncation triangles, model-category equivalences, derived functor
universal properties, and the Ext/Yoneda and algebraic counterparty contracts.
The Stacks Project, Tag 06XP, was read for the splitting question: it defines
Ext as derived Hom and gives the standard resolution computation, so it does
not resolve this library's classical-Ext weak-choice interface. Exact literal
passages, current hashes, direct supplier checks, flags, and uncertainties are in
[`terra-derived-02-receipts.json`](terra-derived-02-receipts.json).
