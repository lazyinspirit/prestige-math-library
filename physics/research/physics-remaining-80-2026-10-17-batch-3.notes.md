# Batch 3 authoring notes — EMG-MG03

Run: `physics-remaining-80-2026-10-17`  
Role: beta, batch 3  
Owned pair: `emg-mg03` / `emg-mg03-examples`  
Output manifest: `research/physics-remaining-80-2026-10-17-batch-3.pages.json`

## Plan comparison, inventory, and dependency levels

The current plan-spec and assigned task require `emg-mg02` and
`gr-einstein-and-matter`. The older design prose and historical proposed
inventory list `emg-mg01` and `emg-mg02`. The live plan controls; MG01 remains
transitive through MG02. This conflict is recorded here; no shared plan was
changed.

The design reserves four A items and one B example. Authoring required one
additional local A-page prerequisite, `lem-emg-scaled-three-torus-smooth`,
because no inspected carrier established the smooth structure, descended
forms, and flat Lorentzian product geometry used by the compact-torus example.
The six items are inventoried in the manifest: five A-page items and one B
example. The pair remains far below the 100-item page cap.

Using the current batch-2 manifest's planned in-run graph, dependency levels
are:

| Item | Level | In-run inputs |
|---|---:|---|
| `lem-emg-maxwell-current-forms` | 0 | none |
| `lem-emg-scaled-three-torus-smooth` | 0 | none |
| `lem-emg-gauss-finite-chain` | 1 | current-forms lemma (0) |
| `lem-emg-maxwell-action-variation` | 2 | current-forms lemma (0), batch-2 circle-gluing lemma (1), local-potential definition (0) |
| `ex-emgmath-compact-neutrality` | 2 | Gauss lemma (1), local torus lemma (0) |
| `lem-emg-maxwell-observer-stress` | 3 | action-variation lemma (2) |

Batch 3 is page dependency level 1 and requires batch 2 at level 0. The
dependency-level check is recorded below after its scoped run; the item levels
above retain the planned batch-2 item nodes even though their readiness is
escalated.

## Actual prerequisite audit and conditional suppliers

I inspected the full statements and proofs of the current Hodge-calculus,
observer-field-decomposition, point-normal/exponential-chart, local tetrad,
GR volume/current-flux, GR divergence, compact metric variation, Stokes,
Euclidean integration, and calculus suppliers used by the six items. The
current-form lemma's resolved dependency closure contains 1,119 local pinned
mathematical carriers, all published with no missing IDs and no
`proved_here: false` or open-problem carrier. The inherited boundaryless
assumption is explicit in its geometry supplier; the item makes no geodesic
completeness claim.

The batch-2 A page and both actual carriers now exist. The actual definition
`def-emg-local-potentials-and-circle-data` states a normalized datum consisting
of a supplied countable cover, smooth `U(1)` transition cocycle, compatible
local real connection forms, and fixed `kappa_0`; it defines physical local
potentials `A_i = kappa_0 a_i` and local curvature `F_i = dA_i`. The actual
`lem-emg-circle-connection-gluing` states and conditionally proves that these
data give a fixed right principal bundle, a global connection and curvature,
and that differences of connections with identical transition data are one
global base one-form. Thus the exact connection-variation interface in the
action proof matches the present supplier statements; it is not being inferred
from the older design alone.

Both batch-2 carriers are still draft. Their actual dependency declarations
include the following seven unresolved EMG-MG01 inputs, each absent from the
current item directory and published EMG-MG01 page:

- `def-emg-finite-real-supremum-domain`
- `def-emg-real-metric-axiom-convention`
- `lem-emg-metric-axioms-imply-nonnegativity`
- `def-emg-explicit-power-regimes`
- `lem-emg-sequence-limit-criterion-with-choice`
- `def-emg-boundaryless-completeness-domain`
- `def-emg-set-size-and-class-schema`

The gluing proof's [A1] also names the exact planned set-size contract for its
disjoint-union and quotient construction; that carrier is the seventh item in
the same list. The batch-2 Step-1 records for both actual carriers are
`escalated`, and their current proofs do not discharge the absent prerequisites.
Accordingly the action-variation item is complete as a conditional local
calculation but remains `escalated`; the observer-stress item consumes that
conditional tensor and also remains `escalated`. No absent item was authored
or treated as proved. All other assigned authoring, including the B page,
continued.

## Full-text sources and dispositions

`research/physics-remaining-80-2026-10-17-batch-3.coverage.json` records each
harvested result and disposition, its supported items, and the exact locators.
Tong and Carroll are two independent full lecture-note treatments for the A
page, with the same two treatments supporting the B example's convention
checks.

- David Tong, *General Relativity*, Cambridge Part III notes:
  [§3.2.5](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html) supports
  the sourced form equation, action variation, charge balance and Hodge
  convention; [§4.5.3](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html)
  supports the free-field metric variation and observer stress components.
- Sean M. Carroll, *Lecture Notes on General Relativity*, complete 238-page
  [arXiv PDF](https://arxiv.org/pdf/gr-qc/9712019): Ch. 1, eqs. (1.73)–(1.94)
  and (1.111); Ch. 4, eqs. (4.24)–(4.29); Ch. 7, eqs. (7.107)–(7.109). Carroll
  uses Gaussian units and the `(-+++)` signature; the notes preserve his
  reversed antisymmetric divergence order and translate coefficients only
  after applying antisymmetry.
- Klaus Wirthmüller, *Manifolds*, complete 148-page lecture notes:
  [§1.14(4)](https://kluedo.ub.rptu.de/files/4529/man_skript.pdf), printed
  pp. 12–13 (PDF pp. 18–19), gives the quotient-torus atlas by small cubes and
  translation transition maps. The initial web-tool fetch timed out; a direct
  full-text fetch succeeded, and the complete relevant pages were inspected
  with PyMuPDF. The subsequent source stamp records the full PDF hash and page
  count; no time was invented for the earlier tool failure.

`source-fetch-check --stamp` fetched and verified all 6 source records across
the two pages. The initial Wirthmüller web retrieval timed out, then the direct
full-text fetch succeeded and was inspected; no source is dropped and no
`source_resolution` recovery record is warranted. The new scaled-torus lemma
is a local mathematical construction with a complete proof and inspected
mathematical suppliers; the physics sources are not cited as proving that
quotient-manifold construction.

## Conditional and empirical scope

The current-form and finite-chain items are conditional deductions for smooth
fields and the displayed equations. The action and observer-stress items are
conditional variational calculations, not adopted physical postulates. The
compact-torus example verifies its model fields directly; it reports no
measurement or experiment. The B example uses a finite smooth singular cycle,
not a boundary-at-infinity argument.

## Scoped checks and blockers

After the final item edits, the scoped checks returned:

- `precheck.mts`: 6 items checked, 0 failing.
- `proof-layout.mjs`: 6 items, 31 numbered steps, 0 defects.
- Strict `proof-contract.mjs`: 6/6 checked, 0 errors, 0 warnings.
- `content-policy.mjs --manifest-only`: 6 scoped items, 0 errors, 0 warnings.
- Focused `depcheck.mjs`: all 6 items and both pages checked; 0 errors and
  0 warnings; 1,201 prerequisite items and 277 prerequisite pages in the
  inspected closure.
- `rendercheck.mjs`: all 8 changed item/page files passed, including KaTeX and
  YAML parsing.
- `source-fetch-check.mjs`: 6/6 source records fetch-verified and resolved.
- Cross-batch evidence: 86 dependency edges, including every manifest item and
  page prerequisite; no manifest edge is missing. The observer-to-action edge
  is explicitly open because the action result remains conditional.

The run-wide item-dependency-level check found no dependency-level error for
these six items; their levels are 0, 0, 2, 1, 3, and 2 respectively in manifest
order. The run-wide command still exits nonzero on empty scaffold inventories
for other pages and stale levels elsewhere, including
`lem-emg-coupled-reduced-einstein-evolution`,
`thm-emg-einstein-gauge-propagation`,
`thm-emg-local-high-sobolev-electrovacuum`, and several CSM/TGR items. The
run-wide proof-contract-coverage check is also held by the unrelated empty
frontier inventory `emg-pcp01`.

Step-1 records are current for all six assigned items: four are `ready` and
the action-variation item and its observer-stress consumer are `escalated`.
The full-run Step-1 check remains open (307 items, 82 ready, 324 outstanding
item/page records, including 99 empty page inventories) because it covers all
batches, not only batch 3. The two assigned escalations name the seven absent
inherited mathematical prerequisites in the actual batch-2 carrier chain.
