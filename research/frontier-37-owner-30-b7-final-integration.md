# Frontier 37 B7 final integration

Audit date: 2026-10-01. This is the exclusive B7 integration report. It records
the live batch-7 carrier drain, source audits, authorized item repairs, and the
eventual carrier convergence. Carrier records document current declarations;
they do not accept draft mathematics or close run gates.

## B7 manifest drain for root review

The live batch-7 manifest contains 44 item rows across two pages, and the
batch-7 proof-contract scope contains the same 44 IDs. This report does not
change that scope, coverage, dependency levels, receipts, or run state. The run
was recomputed from disk on 2026-10-01 and remained live at `3a-scope` and
`3b-author`, with no workers in flight; the run status still has owner-held
scope and stale dependency-level planning blockers.

The current source snapshots show these carrier mismatches within the assigned
B7 scope:

| Item | Current source hash | Page dependencies | Proof-contract dependencies |
|---|---|---|---|
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | `fbb43ace1eb29cb929198cdab3e0c6d4bd7bb477e4861ae03d46d917dd15ebf1` | 9 declared suppliers missing | 9 declared suppliers missing |
| `cor-picard-projective-line-integers` | `29ea0879af8e57dbc91f006d4be7416255837eaf1c070e09021365a4d1705a49` | 4 declared suppliers missing | 4 declared suppliers missing |
| `lem-add-one-point-exact-sequence-line-bundle` | `45abf7121b4a3b72ab08c16a18a65205307d27fdc32846dfef07fa01a745097a` | aligned | aligned |
| `lem-riemann-roch-space-finite-dimensional` | `80bbb38fae2f137681b9abdb54b2b9f844c72b16857a9862e8f95f5525d823d3` | aligned | `def-coherent-module-scheme` citation missing |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `367ba2e233213e184102414de26a6aa9598e43dc0a5872cf9af2e8a353549981` | aligned | 3 declared supplier citations missing |
| `cex-riemann-inequality-not-equality-special-divisor` | `70cfe5c8f7f689a9e0010676faff1420248c9a1eb17851be24c4286703b8bfca` | aligned | aligned; 25/25 direct dependencies cited |

The three RR supplier source bodies have already been reconciled: the
one-point sequence records the actual Cartier/sheaf route and the AC-to-DC
implication; finite-dimensionality records its current divisor/sheaf route
and AC-to-DC premise; high-degree H1 replaces Serre's possibly negative
threshold by `max(m1, 0)` before using the nonnegative divisor/tensor
dictionary. The cex carrier already records the Fermat quartic proof with its
current 25 direct dependencies and eight proof steps.

The selected B7 consumer-quote mismatches observed at this drain are:

| Consumer contract | Current source section |
|---|---|
| `lem-vector-bundle-p1-maximal-line-quotient-locally-free` | `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`, Statement |
| `thm-birkhoff-grothendieck-vector-bundles-p1` | `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`, Statement |
| `thm-birkhoff-grothendieck-vector-bundles-p1` | `cor-picard-projective-line-integers`, Statement |
| `ex-degree-zero-principal-divisor` | `cor-picard-projective-line-integers`, Statement |
| `ex-riemann-roch-projective-line-divisor` | `cor-picard-projective-line-integers`, Statement |
| `cex-negative-degree-rr-right-side-negative` | `cor-picard-projective-line-integers`, Statement |
| `ex-nonspecial-large-divisor` | `cor-picard-projective-line-integers`, Statement |

The source excerpts are to be replaced only where their current literal text
does not match the on-disk declaration. The three stale B8 quotes found for
`thm-degree-two-g-line-bundle-basepoint-free`,
`thm-degree-two-g-plus-one-line-bundle-very-ample`, and
`ex-serre-duality-projective-line-twists` have been sent to the sole B8 carrier
writer; B8 files are outside this lane.

## RR-adjacent item repair scope

Root authorized exact item-only repairs for six additional B7 items named in
`frontier-37-owner-30-rr-adjacent-current-audit.md`:

* `lem-divisor-order-monotonicity-sections`
* `lem-add-one-point-euler-characteristic`
* `lem-divisor-decomposition-positive-negative-points`
* `lem-projective-line-divisors-classified-by-degree`
* `cor-degree-zero-line-bundle-section-trivial`
* `cor-nontrivial-degree-zero-line-bundle-no-sections`

All six target bodies were read in full. Their true claims and finite-support
proof routes are retained. The edits replaced stale “not authored” text with
the actual current source interfaces, carried the inherited Axiom of
Choice in both Statement and Given where required, stated the actual AC-to-DC
implication wherever the Cartier-to-Weil route needs DC, and reconciled direct
dependencies with the declarations used by the proofs. These edits do not
accept any draft supplier.

## RR-adjacent mathematical findings at the source audit

The six-body audit found these issues before the authorized repairs:

* `lem-divisor-order-monotonicity-sections` used the AC-dependent finite
  dimensionality result without stating AC, and called its chosen-uniformizer
  map canonical. Its direct dependencies omitted the L(D), principal Weil,
  Cartier-sheaf, and curve Cartier-to-Weil interfaces.
* `lem-add-one-point-euler-characteristic` had no independent proof gap
  conditional on its exact-sequence supplier; only the supplier-obligation
  wording was stale.
* `lem-divisor-decomposition-positive-negative-points` was sound conditional
  on the one-point Euler result; it omitted the direct Cartier-sheaf and
  curve Cartier-to-Weil dependencies.
* `lem-projective-line-divisors-classified-by-degree` had a source-interface
  gap and an arithmetic typo in the degree of `[p] - d[infinity]`: the correct
  calculation is `[kappa(p):k] - d[kappa(infinity):k] = d-d = 0`, not the
  product of `d` by both residue degrees. The proof also applied the smooth
  curve DVR and genus interfaces before establishing the projective-line
  curve hypotheses.
* `cor-degree-zero-line-bundle-section-trivial` invoked the rational-section
  theorem without proving that a nonzero global section has a nonzero generic
  germ. It also omitted the actual direct Cartier/rational-section/degree
  suppliers, and its Choice accounting missed the AC-dependent structure
  sheaf sections theorem used in the converse.
* `cor-nontrivial-degree-zero-line-bundle-no-sections` stated the plane cubic
  instance only for a cubic already known to be an integral curve and left
  the smooth pure-dimension-one to geometrically-integral passage open. Its
  Cartier/Picard source declarations were incomplete.

The six item edits and hashes, current Fact/Step mappings, and the stable-row
carrier convergence are recorded below. One selected validation remains
deferred until root declares the full source drain stable.

## Stable B7 source drain and carrier sync

The six authorized RR-adjacent item bodies are final. An independent reread
found no remaining mathematical gap. The cubic statement now says smooth over
`k` explicitly; the P1 degree computation is
`[kappa(p):k] - d[kappa(infinity):k] = d-d = 0`. The chosen-uniformizer map
lands intrinsically in the fiber `O_C(D+p)|p`; its coordinate depends on the
uniformizer, while its kernel and dimension bound do not. The cubic proof
establishes geometric integrality from smoothness and uses the published
plane-curve genus formula without adding a backward B8 genus-corollary edge.

| Stable B7 source | SHA-256 |
|---|---|
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | `fbb43ace1eb29cb929198cdab3e0c6d4bd7bb477e4861ae03d46d917dd15ebf1` |
| `cor-picard-projective-line-integers` | `29ea0879af8e57dbc91f006d4be7416255837eaf1c070e09021365a4d1705a49` |
| `lem-add-one-point-exact-sequence-line-bundle` | `45abf7121b4a3b72ab08c16a18a65205307d27fdc32846dfef07fa01a745097a` |
| `lem-riemann-roch-space-finite-dimensional` | `80bbb38fae2f137681b9abdb54b2b9f844c72b16857a9862e8f95f5525d823d3` |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `367ba2e233213e184102414de26a6aa9598e43dc0a5872cf9af2e8a353549981` |
| `cex-riemann-inequality-not-equality-special-divisor` | `70cfe5c8f7f689a9e0010676faff1420248c9a1eb17851be24c4286703b8bfca` |
| `lem-divisor-order-monotonicity-sections` | `4c4184c71f85891c0aabb736ae189100156bb61b76df9c6ebda16e822302fe7e` |
| `lem-add-one-point-euler-characteristic` | `2bdcad38e79a7b73832d461a2d751edf3add699d51166f70635d6caf0a84aeed` |
| `lem-divisor-decomposition-positive-negative-points` | `2fc681914e7f285da4b9b46b28e39d3e6e6eaa8ef291ebae3afad934c6005f33` |
| `lem-projective-line-divisors-classified-by-degree` | `303128a0f6d547e847daa6036273ffa66840ad2be9e361cc514049a17f26123b` |
| `cor-degree-zero-line-bundle-section-trivial` | `acda1423ef52f6c2d4582694b405ab100b67034120712792df4392cf31a3bf25` |
| `cor-nontrivial-degree-zero-line-bundle-no-sections` | `18546bc83a5cc74e975fb21301263089f84354e1a95d24044c7285ca4a18bf8f` |
| `def-genus-euler-characteristic-curve` | `efb5a410a5f59c4d7b58359d3f8a4e59ec692050ab5cc816bebd4c2995b5fc84` |
| `def-index-speciality-divisor` | `32de236d07b0d4392069bc758549e246f76ad940a00ac01622ba95b92e43689a` |
| `def-nonspecial-divisor` | `4df18ecc51cb4a35858ab2002f467b31d64e57c6d1db2c896bc6e2a589e5c9cd` |
| `cor-dimension-complete-linear-system` | `a86fad324b2257aeed051d5ec9529e4ecc810aea65eb1a5a58f41563700f85b0` |

For those 16 stable sources, the B7 page rows now carry the current item
statements and direct `deps` parsed from their YAML declarations. The
`dependency_level` fields and 44-ID page/proof-contract scope were preserved.
The B7 proof-contract entries were regenerated from current Fact blocks and
numbered proof steps for the 13 proof-bearing target rows and eight stable
consumers with stale quotes (21 entries total). This refreshes literal source
quotations, exact Fact-to-step uses, and
derivation step IDs. Boundary records were rewritten where the P1 proof
renumbering, cubic integrality proof, or old flagged-route wording had made the
previous evidence stale.

The separate B7 item writer's 12-row pass is now drained and synchronized.
The four closure rows synchronized in the prior drain remain at their recorded
hashes (`def-genus-euler-characteristic-curve`,
`def-index-speciality-divisor`, `def-nonspecial-divisor`, and
`cor-dimension-complete-linear-system`). The revised
`def-little-l-divisor` and the other 11 rows have these final hashes:

| Final B7 source | SHA-256 |
|---|---|
| `def-little-l-divisor` | `da898a84e770e68a2630a5678898f91c5962a24f624838b64d286755e6fe6651` |
| `cor-negative-degree-no-sections-rr` | `a6b29504fcc4cb31b5f538dea9482e7e588be677a4c0ccdbfa6099a163498ab4` |
| `thm-genus-zero-point-implies-projective-line` | `e7aad13c82a2843242ee6ed9aa3a21e5a9f73d9d470aa424df7623e2728b1c34` |
| `ex-riemann-roch-projective-line-divisor` | `4cacad597e14da3810111af318a592b6cf0e74827a268f2c0dc499df3a277de7` |
| `ex-genus-zero-conic-with-rational-point` | `8aa5bdf46d1113f203d1a71a9274134bd6c3baf804d6149b5b35875d2b14c000` |
| `cex-genus-zero-without-rational-point-not-p1` | `744f6a42df75e6d051a5f1e87845f8dec19ebb92b561715ecc2464e1e522c99f` |
| `ex-adding-point-section-dimension-jump` | `3ff0f389a8c4a16b5bca579dc6d87c37f9be9df90a5895a0d82d6dcd4d92c4ab` |
| `ex-degree-zero-principal-divisor` | `96d43240ac5e7e6368fd65bbe0be59eec145b98295cf037ff8a052d2cb2e5274` |
| `ex-linear-system-poles-at-one-point` | `73b94ee5c09413eb389e3caace7b295dbca5c2fbbe7f3a7a1a123f324adb94d4` |
| `ex-nonspecial-large-divisor` | `6f49bb564d48073f41507046c50b05b41fd0cd06d0828bd738f997f262211a92` |
| `cex-negative-degree-rr-right-side-negative` | `36e2249fe877cbf9eb0a992bdc74f5e73bcfab67cd915109aa4992f6b1c9ad4a` |
| `ex-empty-divisor-euler-characteristic` | `3584a27f020c0bf5ea288e7703fc6baec8b989ade8c3582ee27fc597758201d2` |

The direct frontmatter `deps` and page statements were synchronized for all
28 stable B7 source rows. The final quote refresh regenerated 35 B7
proof-contract entries from current Facts and numbered steps; four
definition-only entries have no Facts/proof steps and were skipped. A targeted
literal-quote inventory found zero stale quote mismatches for citations to
those 28 source rows across the B7 proof-contract scope.

After the 12-row drain, root corrected the one local formula in
`ex-adding-point-section-dimension-jump` step 1.1 to
`ord_infinity(A/B)=deg(B)-deg(A)`. Its Statement and dependencies did not change;
the current step-1.1 carrier derivation was regenerated from the corrected
proof, and the independent reviewer was notified.

The original 44-row B7 scope remains unchanged. The B7 page manifest and batch
proof-contract scope still have the same 44 IDs; no receipt, owner decision,
global level, baseline, gate, or run-state record was changed. The three stale
B8 source-quote rows listed above were sent to the sole B8 carrier writer. The
remaining root-owned full-frontier work will close cross-batch edges after the
source drains.

The proof-contract schema requires a citation to name a current Fact and a
source linked from that Fact. A few declared dependencies for the three RR
supplier rows occur only in their Statement/Given and are not linked from any
Fact. Their page `deps` are synchronized, while no synthetic contract citation
was added:

| Source row | Declared supplier(s) without a Fact link |
|---|---|
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | `def-locally-free-sheaf-finite-rank` |
| `lem-riemann-roch-space-finite-dimensional` | `def-coherent-module-scheme` |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `def-algebraic-curve-over-field`, `def-cartier-divisor`, `def-divisor-smooth-proper-curve` |

These source declarations remain visible in page `deps`; the batch contracts
carry exact citations for the links actually present in their Facts blocks, as
required by `proof-contract.mjs`.

The one selected meaningful validation has not run. It remains gated on root's
stable-scope direction; no strict or broader checks were attempted during this
carrier turn.


## Root native-gate-directed B7 syntax and contract refresh

The follow-up B7 carrier pass made only the named formatting, proof-numbering,
and declaration fixes. The projective-line divisor item now uses supported
`$...$` / `$$...$$` delimiters throughout its prose, and the origin coordinate
`[1:0]` is rendered as mathematics rather than a wikilink. The genus and
nonspeciality definitions keep their displayed formulas on one source line.
`cor-dimension-complete-linear-system` retains its existing supplier-boundary
paragraph as numbered step 5.2 with its existing Fact inputs; no theorem claim
was weakened.

The Fermat-quartic counterexample now computes genus through the existing B6
`thm-plane-curve-arithmetic-genus` and the current B7
`def-genus-euler-characteristic-curve`. Its former B8
`cor-genus-degree-smooth-plane-curve` dependency was removed, and the B7 page
row's `deps` was reparsed from current frontmatter. No `forward_refs`, levels,
page scope, or cross-batch ledger was edited.

The failing B7 proof-contract rows were refreshed from their actual Facts and
numbered steps; duplicate `(Fact, source)` citations were coalesced. The stale
P1 and quotient boundary step references and unanchored Choice/endpoint
boundaries were corrected. Root's native diagnostics supplied the work list;
no gate was rerun by this carrier.

| B7 source | Final SHA-256 |
|---|---|
| `lem-projective-line-divisors-classified-by-degree` | `303128a0f6d547e847daa6036273ffa66840ad2be9e361cc514049a17f26123b` |
| `def-genus-euler-characteristic-curve` | `efb5a410a5f59c4d7b58359d3f8a4e59ec692050ab5cc816bebd4c2995b5fc84` |
| `def-nonspecial-divisor` | `4df18ecc51cb4a35858ab2002f467b31d64e57c6d1db2c896bc6e2a589e5c9cd` |
| `cor-dimension-complete-linear-system` | `a86fad324b2257aeed051d5ec9529e4ecc810aea65eb1a5a58f41563700f85b0` |
| `cex-riemann-inequality-not-equality-special-divisor` | `70cfe5c8f7f689a9e0010676faff1420248c9a1eb17851be24c4286703b8bfca` |
