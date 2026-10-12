# Batch 38 notes — Qm Math Intervals And Contacts

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **38**, covering the
single pair `qm-math-intervals-and-contacts` (A, order 155) and
`qm-math-intervals-and-contacts-examples` (B, order 156), category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Everything on both pages is mathematics (`domain: mathematics`); no physical
interpretation, measurement model or empirical claim is made. The binding owner
direction (`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`)
and the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L961ff were read first; no approved claim was dropped.

## Inventory

- 20 A items: `def-nrqm-intervals-hilbert-sobolev-spaces`,
  `lem-nrqm-intervals-weak-derivative-ac-representative`,
  `lem-nrqm-intervals-endpoint-trace-and-half-line-decay`,
  `lem-nrqm-intervals-integration-by-parts`,
  `thm-nrqm-intervals-sine-on-completeness`,
  `lem-nrqm-intervals-free-line-resolvent`,
  `thm-nrqm-intervals-dirichlet-diagonal-domain-identification`,
  `lem-nrqm-intervals-compact-resolvent-eigenbasis`,
  `thm-nrqm-intervals-twisted-periodic-momentum-domain`,
  `thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent`,
  `thm-nrqm-intervals-regular-ivp-parameter-series`,
  `thm-nrqm-intervals-prufer-energy-monotonicity`,
  `thm-nrqm-intervals-dirichlet-nodal-theorem`,
  `thm-nrqm-intervals-delta-interface-operator`,
  `thm-nrqm-intervals-delta-rank-one-resolvent`,
  `thm-nrqm-intervals-delta-unique-bound-state`,
  `thm-nrqm-intervals-separated-robin-green-resolvent`,
  `thm-nrqm-intervals-robin-simple-complete-spectrum`,
  `thm-nrqm-intervals-barrier-transfer-and-thick-limit-error`,
  `thm-nrqm-intervals-finite-well-root-conditions-and-bound-count`.
- 3 B items: `ex-nrqm-intervals-contacts-dirichlet-momentum-failure`,
  `ex-nrqm-intervals-contacts-separated-box-degeneracy`,
  `ex-nrqm-intervals-contacts-attractive-contact-energy`.
- Manifest: `research/physics-cm-qm-gr-79-2026-10-11-batch-38.pages.json`
  (20 + 3 items, each labelled with `dependency_level`); carriers
  `library/non-relativistic-quantum-mechanics-mathematics/qm-math-intervals-and-contacts.md`
  and `.../qm-math-intervals-and-contacts-examples.md`; contracts
  `research/physics-cm-qm-gr-79-2026-10-11-batch-38.proof-contracts.json`.

## Design conflicts and deviations (for Step-3 adjudication)

1. **A-page `requires` expanded beyond the design.** The plan (`research/plan-spec.json`,
   order 155) declares `requires: [qm-math-oscillator]`, and the design section
   says the same. The authored items' actual supplier pages are the plan's one
   prerequisite plus the following thirteen published pages, each demanded by
   `validate-plan.mjs` `undeclared-prereq` findings and each declared in
   `plan-spec.json`: `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`
   (via the ACL representative interface of `lem-nrqm-intervals-weak-derivative-ac-representative`),
   `completeness-and-uniform-continuity` (via Banach-valued integration in
   `thm-nrqm-intervals-regular-ivp-parameter-series`),
   `complex-power-series-and-analytic-functions`,
   `continuity-ivt-evt-and-uniform-continuity`,
   `finite-dimensional-normed-spaces-and-riesz-lemma`,
   `fubini-and-change-of-variables`,
   `linear-independence-bases-and-dimension` (via
   `cor-independent-set-is-no-larger-than-a-finite-spanning-set`,
   `cor-every-spanning-set-contains-a-basis`, `def-dimension`,
   `def-linear-basis` used in `lem-nrqm-intervals-compact-resolvent-eigenbasis`,
   `thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent` and
   `thm-nrqm-intervals-robin-simple-complete-spectrum`),
   `picard-lindelof-and-first-order-odes` (Gronwall),
   `sine-cosine-and-the-definition-of-pi` (sine/cosine derivatives and zero
   sets in `thm-nrqm-intervals-dirichlet-nodal-theorem`),
   `smooth-approximation-and-sobolev-extension`,
   `smooth-partitions-of-unity-and-exhaustions`,
   `the-riemann-integral` and `uniform-spaces`. After the repair,
   `validate-plan.mjs research/plan-spec.json --run ...` reports **zero**
   findings on either batch-38 page. `splice-plan.mjs --run ... --batch 38
   --dry-run` now reports `batch 38 WITHHELD — 1 requires edge(s) await
   adjudication` and lists exactly those thirteen edges: the manifest/carrier
   `requires` and the plan disagree by design, and the Step-3 adjudication path
   is `splice-plan.mjs ... --accept-requires` after its gate closes (the same
   situation batch 36 recorded). This batch does not edit `plan-spec.json`.
2. **Four batch-local A prerequisites outside the reservation.**
   `def-nrqm-intervals-hilbert-sobolev-spaces`,
   `lem-nrqm-intervals-integration-by-parts`,
   `lem-nrqm-intervals-free-line-resolvent` and
   `lem-nrqm-intervals-compact-resolvent-eigenbasis` are not in the frozen
   reservation; they were added so that every reserved claim has a complete
   local closure (Sobolev space definition, the integration-by-parts identities
   the Robin form uses, the free-line resolvent kernel, and the abstract
   compact-resolvent eigenbasis lemma). The manifest marks them with
   `inventory_expansion_required: true`; they are all mathematics and all
   satisfy the same dependency rules.
3. **Reservation identifiers.** The design reservations spell the items
   `nrqm-intervals-and-contacts-*`; SCHEMA.md requires the kind prefix. All 23
   items are authored with prefixed IDs and keep the reservation spelling in
   `aliases` and in the manifest `reference` fields, so the plan keys still
   resolve. No promised claim was removed; the 16 reserved A claims and 3
   reserved B claims are all present with their design titles.
4. **B-item dependency expansion.** The reservation chains each B item to one A
   item; the authored examples additionally depend on the items they actually
   use: `ex-nrqm-intervals-contacts-dirichlet-momentum-failure` on
   `lem-nrqm-intervals-integration-by-parts`,
   `def-adjoint-of-a-densely-defined-unbounded-operator` and
   `def-complex-exponential`;
   `ex-nrqm-intervals-contacts-separated-box-degeneracy` on
   `thm-nrqm-intervals-sine-on-completeness`,
   `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma` and
   `thm-tonelli-and-fubini-for-completed-product-measures`;
   `ex-nrqm-intervals-contacts-attractive-contact-energy` on
   `thm-nrqm-intervals-delta-unique-bound-state`,
   `def-complex-exponential` and `thm-derivative-of-exponential`. All additions
   are same-batch or published mathematical suppliers.
5. **Batch-level digest.** `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
   lists batch 38 with `dependency_level: 2` and `requires: ["36"]`, while the
   authored items additionally consume the batch-35 item
   `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`
   (transitively: batch 36 requires batch 35). The ordering is therefore sound;
   the current digest is what the engine computed. `node
   tools/physics-support/batch-dependency-levels.mjs check --run ...` passes
   (79 batches, maximum level 15), so no recompute is owed at handoff.

## Mathematical repairs made during construction

Every listed repair was applied to the item file, re-checked with `precheck.mts`
and `proof-layout.mjs`, and reflected in the proof contracts.

1. `thm-nrqm-intervals-prufer-energy-monotonicity`, step 1.1: the conclusion
   `B = R` from `B^2 = R^2` now uses continuity of `B/R` with value `1` at `0`
   (the earlier text only recorded `B^2=R^2`), and the vanishing of `A` now
   cites Gronwall's inequality (`thm-gronwall-integral-inequality`, added to
   `deps` and to the facts as [F4]) instead of an unstated exponential formula.
2. `thm-nrqm-intervals-regular-ivp-parameter-series`, step 1.2: the contraction
   estimate was rewritten with the correct integrand
   `\int_0^r(r-s)e^{\lambda s}ds=(e^{\lambda r}-1-\lambda r)/\lambda^2 <=
   (r/\lambda)e^{\lambda r}`; the earlier display bounded the wrong integrand
   but the contraction conclusion and the constant `\alpha L/\lambda` are
   unchanged.
3. `thm-nrqm-intervals-separated-robin-green-resolvent`, step 5.1: the abstract
   compactness of the resolvent at an arbitrary `z` in the resolvent set was
   corrected to the second resolvent identity
   `(A-z)^{-1}=(A-i)^{-1}(I+(z-i)(A-z)^{-1})` (the earlier display had the sign
   of `(i-z)`), and the composition fact is now declared as a dependency
   (`lem-compositions-with-a-compact-operator-are-compact`) and cited in [F4].
4. `lem-nrqm-intervals-compact-resolvent-eigenbasis`: the statement now assumes
   `\dim_{\mathbb C}H=\infty` (the finite-dimensional case made the sequence
   claim `|\mu_n|\to\infty` false), the countability/indexation of the
   eigenfamily is proved in step 1.1 via countable unions of finite eigenvalue
   classes and `cor-every-spanning-set-contains-a-basis` +
   `def-dimension`/`def-linear-basis`, the spectral theorem's finiteness
   property ("for every `\varepsilon>0` finitely many eigenvalues with
   `|\lambda|\ge\varepsilon`") is recorded in [F2], and step 2.1 states
   `|\mu_n|\ge|\nu_n|^{-1}-|c|\to\infty`.
5. `thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent` and
   `thm-nrqm-intervals-robin-simple-complete-spectrum`: both consumers now
   verify the infinite-dimensionality hypothesis of the compact-resolvent lemma
   for `L^2(0,L)` (infinite orthonormal family of sine functions plus
   `cor-independent-set-is-no-larger-than-a-finite-spanning-set`,
   `def-dimension`, `def-linear-basis`). The Robin item additionally proves the
   operator is bounded below (new step 1.2: the Robin boundary terms are
   absorbed by the endpoint trace bounds on intervals of length
   `\delta=\min\{L,(4(|\alpha|+|\beta|+1))^{-1}\}`) and derives the strictly
   increasing eigenvalue list `\lambda_n\to\infty` in a new step 3.1, so clause
   (a) no longer asserts a bounded-below case that was not proved.
6. `thm-nrqm-intervals-barrier-transfer-and-thick-limit-error`: steps 2.1-3.1
   were restructured. The transfer matrix, its invertibility (`\det M=1`) and
   the unique solvability of the matching system
   (`(C-B)=De^{ika}`, `|D|\ge2`) now carry the uniqueness half of (a) without
   the earlier circular appeal to formulas "derived below", and step 3.1
   constructs the matching solution explicitly. Step 4.1's coefficient algebra
   was corrected (`\kappa^2-k^2=2m(U-2E)/\hbar^2`, and
   `4+(\kappa/k-k/\kappa)^2=U^2/(E(U-E))`); the final formulas for `T` were
   already right and are unchanged.
7. `thm-nrqm-intervals-delta-unique-bound-state`: a dangling `[F3]` citation in
   step 3.1 was replaced by the fact actually used ([F1]), the unused [F2] fact
   was removed, and the dead source URL
   (`https://math.ucr.edu/baez/gopalkrishnan.pdf`) was corrected to the live
   one (`https://math.ucr.edu/home/baez/gopalkrishnan.pdf`) used by the other
   delta items.
8. `thm-nrqm-intervals-finite-well-root-conditions-and-bound-count`, step 3.1:
   a dangling reference "steps 1.3-2.3" was corrected to the existing steps
   1.3, 2.1 and 2.2.
9. `thm-nrqm-intervals-dirichlet-nodal-theorem`: the two published suppliers
   actually used in step 1.4 for the free solution (`thm-sine-and-cosine-derivatives`,
   `thm-sine-cosine-zero-sets-and-fundamental-period`) were added to `deps` and
   recorded in [F1].
10. `def-nrqm-intervals-hilbert-sobolev-spaces` and
    `lem-nrqm-intervals-integration-by-parts` state their hypotheses and
    endpoint conventions explicitly (the definition deliberately does not
    identify `H^1_0(0,L)` with vanishing endpoint values; that identification
    is proved in the integration-by-parts item in both directions).
11. Final authoring read (after the first readiness pass): two displayed
    intermediate identities were corrected although their conclusions were
    already right. In `thm-nrqm-intervals-separated-robin-green-resolvent`,
    step 1.1 now derives the boundary bracket from clause (a) applied to
    `(u',v)` and `(v',u)` and displays
    `[u^*\overline{v'^*}-u'^*\overline{v^*}]_0^L`, the negative of the previous
    (sign-flipped) bracket and the form the computation actually evaluates.
    In `thm-nrqm-intervals-robin-simple-complete-spectrum`, [F5] now cites
    clause (a) applied to `(u',u)` rather than clause (c) with `v=u`; clause
    (c) is the antisymmetric second-order identity and does not by itself give
    the symmetric form identity. Both items were re-checked (precheck,
    proof-layout, regenerated contracts, proof-contract, boundary-audit) and
    their readiness records re-recorded.

## Sources

- Coverage: `research/physics-cm-qm-gr-79-2026-10-11-batch-38.coverage.json`;
  `source-fetch-check.mjs --coverage ... --stamp` fetched the complete bodies of
  all 8 page-source pairs (5 on the A page, 3 on the B page): Teschl's
  *Mathematical Methods in Quantum Mechanics* (complete book PDF), Brezis
  *Functional Analysis, Sobolev Spaces and PDE* (complete book PDF), Teschl's
  *Ordinary Differential Equations and Dynamical Systems* (complete book PDF),
  Gopalakrishnan's honors thesis (complete PDF; recorded with kind
  `monograph`), and Binney-Skinner *The Physics of Quantum Mechanics* (complete
  book PDF). Check mode re-run: 8/8 fetch-verified, 8/8 resolved, no drops.
- `coverage-checklist.mjs`: 2 pages, 46 harvested results, 0 errors, 0 warnings.
  Every harvested result has an `included` disposition naming the consuming
  item; no deferred or out-of-scope entries were needed.
- `citecheck.mjs` on the 23 items: OK (every recognised elementary move cites a
  home that states it).

## Dependency levels (as labelled in the manifest)

Level 0: `def-nrqm-intervals-hilbert-sobolev-spaces`,
`thm-nrqm-intervals-regular-ivp-parameter-series`,
`thm-nrqm-intervals-barrier-transfer-and-thick-limit-error`;
level 1: `lem-nrqm-intervals-weak-derivative-ac-representative`,
`thm-nrqm-intervals-sine-on-completeness`,
`thm-nrqm-intervals-prufer-energy-monotonicity`;
level 2: `lem-nrqm-intervals-endpoint-trace-and-half-line-decay`,
`lem-nrqm-intervals-compact-resolvent-eigenbasis`,
`ex-nrqm-intervals-contacts-separated-box-degeneracy`;
level 3: `lem-nrqm-intervals-integration-by-parts`,
`thm-nrqm-intervals-dirichlet-nodal-theorem`,
`thm-nrqm-intervals-finite-well-root-conditions-and-bound-count`;
level 4: `lem-nrqm-intervals-free-line-resolvent`,
`thm-nrqm-intervals-dirichlet-diagonal-domain-identification`,
`thm-nrqm-intervals-twisted-periodic-momentum-domain`,
`thm-nrqm-intervals-separated-robin-green-resolvent`; level 5:
`thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent`,
`thm-nrqm-intervals-delta-interface-operator`,
`thm-nrqm-intervals-robin-simple-complete-spectrum`,
`ex-nrqm-intervals-contacts-dirichlet-momentum-failure`;
level 6: `thm-nrqm-intervals-delta-rank-one-resolvent`,
`thm-nrqm-intervals-delta-unique-bound-state`; level 7:
`ex-nrqm-intervals-contacts-attractive-contact-energy`. Labels were recomputed
from the final item frontmatter after every dependency change; the
`item-dependency-levels.mjs check --run` run reports no finding on any
batch-38 page or item (its remaining errors are other batches' still-empty
scaffold inventories).

## Completion checks (final state)

- `tsx-run.mjs tools/physics-support/precheck.mts` on all 23 items: 22 checked
  (the pure definition carries no proof), 0 failing, all clean.
- `proof-layout.mjs` on all 23 items: 23 items, 113 steps, 0 defects.
- `rendercheck.mjs` on both carriers: OK (no wikilink inside math, no nested
  delimiters, no multiline display block, all math parses under KaTeX, both
  frontmatter blocks parse).
- `depcheck.mjs --items-file /tmp/batch38-items.json`: OK; selected item/page
  checks and their prerequisite cycle checks passed (1739 items, 233 pages in
  scope).
- `content-policy.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-38.pages.json`:
  23 scoped items, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json --run ...`: exit 1 with exactly
  four `undeclared-prereq` findings, all on other batches' pages
  (`cm-math-rotation-double-cover`, `qm-math-orbital-and-spin`); **zero**
  findings on either batch-38 page. (The count at the time of writing reflects
  concurrent work on those batches; none of the findings is batch 38's.)
- `proof-contract.mjs research/...-batch-38.proof-contracts.json`: 0 errors,
  0 warnings, 23/23 items checked.
- `boundary-audit.mjs` on the same file: 184 boundary rows, no template-reuse
  cluster at or above the audit threshold and no contradicted dispositions; the
  `iff` reasons are item-specific and the six family/aggregate `empty` rows are
  `checked` with step anchors.
- `coverage-checklist.mjs`: 0 errors, 0 warnings (see above).
- `source-fetch-check.mjs --coverage ...`: 8/8 fetch-verified, 0 drops.
- `manifest-deps.mjs` on the batch manifest: 23 items, 0 errors.
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `item-dependency-levels.mjs check --run ...`: no batch-38 finding (remaining
  errors are other batches' empty scaffold inventories).
- `batch-dependency-levels.mjs check --run ...`: 79 batches, maximum level 15,
  no error.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated; the batch-38 input file records 2 page edges and 10 item edges
  (all `verified`, with the exact clause used).
- `extcheck.mjs`: 27519 items, 0 recorded-not-proved, 0 resting on them — OK.
- `fwdcheck.mjs`: 0 findings on any batch-38 item or page; the repo-wide run
  exits 1 on 12 361 pre-existing `forward-undeclared` findings in other
  workspaces' items, recorded as unrelated.
- `pathcheck.mjs`: 3 pre-existing errors in
  `library/abstract-algebra/_pathway.md` and `library/combinatorics/_pathway.md`;
  none on batch 38.

## Unresolved findings handed to the owner

1. The 13 `requires` edges of item 1 above await the Step-3 adjudication
   (`splice-plan.mjs --accept-requires`) before the batch can be spliced into
   `plan-spec.json`; this batch deliberately leaves the plan untouched.
2. `validate-plan.mjs --run ...` still exits 1 on other batches' pages.
3. `fwdcheck.mjs` and `pathcheck.mjs` report pre-existing repo-wide findings
   outside this batch; none involves a batch-38 item or carrier.
4. No published defect was found on a batch-38 path; no escalation for an
   unmet prerequisite remains. Step-1 readiness is an authoring record, not
   independent mathematical approval; Step 3 supplies that review.

## Readiness records

All 23 items were recorded `ready` with `step1-decisions.mjs record` **after**
the final carrier edits (manifest, both page carriers, proof contracts,
coverage, cross-batch input, these notes), each with its examined dependency
list. `step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11` reports
**zero** open work entries for the two batch-38 pages; the run still lists 228
open entries belonging to other, not-yet-authored batches (286 of 392 items
run-wide are ready at the time of writing). No record uses `--owner`, and no
escalation record was written.
