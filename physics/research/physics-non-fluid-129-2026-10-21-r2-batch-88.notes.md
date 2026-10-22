# Batch 88 — Large-deviation variational mechanics and ensemble inequivalence

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pages: `csm-frontier-large-deviation-ensembles` / `csm-frontier-large-deviation-ensembles-examples`

## Scope and design reconciliation

The controlling inventory is four A items and one B example, below the 100-item page cap. A local finite-alphabet ensemble definition was added before its consumers because the assigned proof routes require the exact product reference, empirical macrostate, canonical tilt, constrained cost, and microcanonical shell conventions. All five items are mathematical and use mathematical prerequisites only. The B example uses the A-page definition and variational theorem.

`research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` is absent, so the assigned track design and current plan apply. The complete plan/design comparison found these differences and dispositions:

- The track design at `research/plan-classical-statistical-mechanics-frontier-expansion-track.md` L99–105 and the detailed source scaffold at `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md` L123–151 declare two earlier pages: `csm-full-phase-local-equivalence` and `csm-frontier-probability-interfaces`. Current controlling `research/plan-spec.json` L205373–205382 and the dispatched batch-88 manifest require those pages **plus** `method-of-types-and-finite-large-deviations`. The manifest retains all three current plan requirements.
- The detailed source scaffold calls the finite-alphabet Sanov supplier a stable-root “draft.” The current exact imported item `thm-it-finite-alphabet-sanov-theorem` is published, as is the imported method-of-types page. The local page and root original have identical current SHA-256 `137f5d5bd0aa68b0a5e401df48d915f67b73fb3c5537e2aa9c9e3856bf55e063`, matching the pinned current import. The theorem’s complete Statement, Facts, proof, and direct type-bound suppliers were inspected. It has the full-support specialization needed here; no proof-status gap remains. The older `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/splice-support.json` P-row saying `status: draft` is stale and was not treated as current evidence.
- The older `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/suppliers.json` row gives `thm-csm-frontier-compact-laplace-tilt` an item dependency on finite-alphabet Sanov. The finished compact theorem is proved for arbitrary compact metric LDPs and does not use Sanov. That unsupported item edge is omitted; the finite-alphabet Sanov theorem is an explicit supplier of `thm-csm-frontier-mean-field-supporting-lines`, where it is needed to establish the base macrostate LDP.
- The compact theorem’s proof uses finite covers, so its level is zero. The track’s existing item reservations and proof routes for mean-field supporting lines and Curie–Weiss bifurcation are retained. No spatial marked-continuum claim is imported into the finite mean-field argument.

The current batch dependency-level snapshot assigns batch 88 level 1 and records batch 85 as its in-run prerequisite through `csm-frontier-probability-interfaces`. The lower-level supplier was inspected before these consumers. All eight batch-85 items currently have `step1Decision` records that close as `ready`; the readiness records themselves state that independent acceptance remains a later gate. The draft probability page and its relevant finite-entropy-chain proof were inspected. The new item proofs do not make an item-level logical use of that entropy-chain lemma; its A-page edge remains because it is an explicit current plan requirement. The required cross-batch row records only this page edge, not an independent proof approval.

The other page prerequisites were inspected at their actual current interfaces. `csm-full-phase-local-equivalence` is published and concerns a specified spatial interacting phase-space model with local marked observables, energy bands, choice hypotheses and singleton positional variational state. It is separate from the new compact finite-simplex model. The exact method-of-types Sanov interface is published, pinned, and uses the support-simplex, full-support, natural-log and zero-mass conventions checked against the current carrier.

## Item inventory, dependencies, and levels

The inventory is ordered supplier before consumer on A; the B example follows the supporting-line theorem.

| Item | Page | Level | Direct logical suppliers |
|---|---|---:|---|
| `def-csm-frontier-mean-field-ensemble` | A | 0 | `def-it-empirical-type-and-type-class`; `def-it-finite-alphabet-product-law`; `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `thm-csm-frontier-compact-laplace-tilt` | A | 0 | none; the compact LDP assumptions and proof are stated locally |
| `thm-csm-frontier-mean-field-supporting-lines` | A | 1 | local mean-field definition; compact Laplace/tilt theorem; finite-alphabet Sanov theorem; finite relative-entropy continuity; finite KL nonnegativity/equality |
| `thm-csm-frontier-curie-weiss-bifurcation` | A | 2 | local mean-field definition; supporting-line theorem; imported logarithm definition/laws/derivative, chain rule, mean-value theorem and intermediate-value theorem |
| `ex-csm-frontier-nonexposed-energy` | B | 2 | local mean-field definition; supporting-line theorem; imported logarithm definition/laws/derivative, chain rule and mean-value theorem |

All outside mathematical suppliers were read at their exact current Statements/Definitions and, where a proof is used as an interface, their complete relevant proofs. Root mathematical originals and imported snapshots remain unmodified. Every declared item dependency has role `mathematical-premise`.

## Mathematical decisions

- The compact Laplace/tilt theorem states its speed-$n$ open/closed LDP bounds and uses only a compact metric state space, a nonnegative lower-semicontinuous rate not identically infinite, and a continuous real tilt. Its upper bound is a finite-cover argument. The same local proof derives the normalized tilted-law LDP and its exact rate.
- The mean-field theorem specializes the published support-simplex Sanov theorem to a full-support finite reference. It separately proves canonical macrostate selection, the shell entropy limit only along shrinking radii where open/closed constrained infima match, and concentration of those shells onto constrained minimizers. The direct min/max algebra proves the upper-supporting-line criterion without assuming that nonconcave entropy can be recovered by formal Legendre inversion.
- The Curie–Weiss proof classifies global minima by the sign of the derivative on each side of the unique positive root. It checks the equality case $\beta J=1$, both endpoints, and the non-minimizing stationary point at zero above threshold.
- The B example solves the energy constraint exactly. Its curvature is positive on $(0,1/9]$, which contains the assigned energy interval $(0,1/10]$ in its interior. The symmetric second-difference argument rules out every affine upper support there, including at $u=1/10$.
- The definition, theorem proofs, and example concern a pure finite mathematical model. They report no measurement and make no empirical or spatial-interacting-model claim.

## Source retrieval and reading

The fresh full-text readings and raw PDFs are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-88-sources/source-reading.md`; per-item locators, supported items, and `included` dispositions are in `research/physics-non-fluid-129-2026-10-21-r2-batch-88.coverage.json`. The two independent treatments are Touchette’s complete review and Poisat’s complete author-hosted lecture notes. The source notes retain their limits: Touchette states but does not locally prove the compact-space theorem; Poisat leaves parts of Varadhan’s lemma and the Curie–Weiss variation table as exercises. The local carriers contain the complete arguments.

`source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-88.coverage.json --stamp` fetched and stamped both full-text PDFs (Touchette: 95 pages; Poisat: 21 pages). No retrieval failed, no retry or alternative route was needed, and `source_resolution` is empty. No source was dropped or escalated.

## Readiness and scoped checks

The five final `step1Decision` records bind each authored item, its direct and transitive mathematical suppliers, and its placement/contract evidence. They record Step-1 authoring readiness only, not independent proof acceptance.

The final A-proof refinements changed supplier hashes; the dependent B example was rechecked against the current supporting-line statement and its readiness record was refreshed. All five assigned records now close as `ready/current`.

Scoped check outputs after the final proof refinements:

- `source-fetch-check --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-88.coverage.json`: **2/2 full-text PDFs fetch-verified; 2/2 resolved; 0 drops**. Both stamps match the retained raw PDF SHA-256 values.
- `proof-layout.mjs` on the three proof items edited in the final refinement pass: **3 items, 18 steps, 0 defects**.
- Normative `precheck.mts` on the four proof-bearing items: the first pass proposed canonical phase/step numbering; that repair was adopted. Final pass: **4 checked, 0 failing**.
- `rendercheck.mjs` on five items and two pages: **7 files passed YAML, KaTeX and diagram rendering**.
- `content-policy.mjs` on the batch-88 manifest: **5 scoped items, 0 errors, 0 warnings**.
- `proof-contract.mjs --strict`: **5/5 items, 0 errors, 0 warnings**.
- `depcheck.mjs --items-file` on the five assigned IDs: **passed**; its selected prerequisite/page-cycle context covered **406 items and 389 pages**.
- Scoped `inspectStatement` on the five assigned items: **5 items, 0 defects**. The native run adapter `statement-first-check --run physics-non-fluid-129-2026-10-21-r2 --domain physics` could not run because `research/physics-non-fluid-129-2026-10-21-r2-statement-first.json` is absent. No run policy was fabricated. The item-level statement inspection still passes; the owner must supply/resolve the run-local policy before its run-level gate.
- Scoped `item-dependency-levels` recomputation over batch 88: **5 items, 0 errors**, levels `0, 0, 1, 2, 2` as listed above. The unfiltered run CLI reports empty inventories in unrelated scaffold batches; those are outside this batch and do not affect this scoped result.
- Current read-only `computeRunBatchDependencyLevels`: **129 batches**, batch 88 remains level 1 and requires batch 85. The recorded full-run scheduling file still binds the pre-authoring input SHA-256 `e9464e11acecf8f1a8bda27ba93ac324cf04cd85b6d1fd546ef373621e7cc91b`; current manifests recompute to `94b9536d963eb83c30bf3f532598bdf01021c5f3fd7f1009ead1b3051a4b8dc0`. Accordingly, `batch-dependency-levels.mjs check` reports stale. The batch-88 row itself is unchanged; the engine/owner must refresh the run-wide snapshot at the drained construction join specified in `WORKFLOW.md`. It was left untouched here.
- `page-layout.mjs check` was not run: the fresh-run workflow adds `page_layout: compact-v1` at the drained initial-construction join. Both authored page bodies are empty now, as required.

These two run-level records (statement-first policy and the drained dependency-level snapshot) remain owner/engine follow-ups; they do not change the five item dependency closures or the current authored claims. No mathematical prerequisite, source retrieval, placement, proof-contract, scoped format, or selected dependency check remains unresolved for the assigned items.
