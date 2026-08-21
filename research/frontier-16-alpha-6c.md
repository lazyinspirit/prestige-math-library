# Frontier 16 — lead Alpha step 6c cross-edge audit

Run: `frontier-16`  
Stage: `6c-cross`  
Reviewer: GPT 5.6 Sol lead Alpha  
Text state: unfrozen, before the step-7 judge sweep

## Scope and recovery

I read `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md` in full, then read the seven final batch manifests, their source inventories and relevant notes, the three group-Alpha 6b reports and findings, the seven owning proof-contract files, and the contract-audit repair record. The engine's `post-6b` touch snapshot is present and follows the green 5-author through 6b gate join.

The final relationship checklist is `research/frontier-16-audit-manifest.json`. It contains 1,618 relationships over 324 authored items in seven batches:

| batch | published-backward | forward | same-batch |
|---|---:|---:|---:|
| 1 | 196 | 2 | 104 |
| 2 | 121 | 2 | 63 |
| 3 | 134 | 0 | 113 |
| 4 | 201 | 1 | 27 |
| 5 | 97 | 0 | 135 |
| 6 | 208 | 0 | 49 |
| 7 | 137 | 0 | 28 |

I read **every one of the 1,099 non-same-batch rows** in that manifest: all 1,094 published-backward dependency uses and all five forward references. For each published edge I read the current source use and the target's actual Definition, Statement, Example, or Remark on disk, preserving domain, hypotheses, quantifiers, direction, and conclusion. The published targets comprise 448 literature-derived and 646 AI-altered Statements; none is AI-generated or legacy-unclassified. AI-altered targets received the same exact-clause read and were not treated as auto-trusted.

## Cross-level citation audit

All 1,094 published-backward citations are semantically licensed. The 839 direct contract citations use exact source clauses; `citation-fidelity` confirms every recorded quote occurs in the target and emits no widening candidate. For the remaining edges I read the Definition/Statement-level use, typing clause, or direct body link together with the target item. No source Fact strengthens a published result, drops a hypothesis, reverses an implication, changes a convention, or uses an external result as though proved locally.

The five declared forward references are accurate and orientation-only:

1. `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` → `def-covering-map-and-evenly-covered-neighbourhoods`: the Remark says exactly that the proved local sheet property is the later definition's property; neither the Statement nor proof cites it.
2. The same theorem → `cor-connected-cover-of-a-simply-connected-space-is-trivial`: the Remark points to the separately hypothesised connected-cover consequence and does not use it.
3. `def-simple-polygonal-region-and-triangulation` → `def-polygonal-arc-and-polygon`: the Remark correctly identifies its boundary-chain convention with the later polygon convention.
4. The same definition → `thm-polygonal-jordan-curve`: the Remark correctly says that theorem supplies the complementary-region result that the present filled-set definition deliberately does not assert.
5. `rem-classical-counterparts-for-trigonometry-free-oscillators` → `ex-x-squared-sine-of-one-over-x-squared`: the Remark accurately identifies the twice-damped reciprocal oscillator developed on the companion page.

`fwdcheck` confirms that all five are declared, point strictly forward, stay off the logical spine, and create no cycle.

No published dependency contains an unambiguous load-bearing falsehood. I therefore made no published-dependency repair, created no repair ledger, and changed no published item.

## Cross-batch seam audit

The manifest has zero cross-batch logical edges. I treated that as a finding to investigate, not as a clean count. The zero is legitimate:

- the real-analysis batches share published calculus, compactness, topology, and trigonometry inputs, but their new results do not supply one another's proofs;
- the proper Euclidean local-diffeomorphism theorem and the compact-local-homeomorphism covering theorem have different hypotheses and independently specialize the published covering definition, so neither licenses the other;
- the `x^2 sin(1/x^2)` oscillator and its Henstock–Kurzweil treatment use the same classical witness for different conclusions, but a B-only example cannot become dependency infrastructure and each proof closes from published calculus plus its own A-page theory;
- improper multiple integrals and Henstock–Kurzweil integrals are distinct developments and use published one-variable bridges rather than silently identifying the notions;
- the one genuine same-run topology seam—classification examples using the two-circle wedge computation—lies inside batch 6, exactly as the affinity batching intended.

I found no duplicated load-bearing lemma concealed in prose and no missing `requires` edge between batches. Adding an orientation link merely to make the cross-batch count nonzero would not improve mathematical closure.

## Well-definedness and external scope

I also read all nine `justified_by` discharges, although they are same-batch edges: uniqueness of the Henstock–Kurzweil value; uniform convergence of the classical Weierstrass series; counting measure; both completion discharges; restriction of a measure; the Dirac measure; weighted sums of measures; and the semifinite part. Each target discharges exactly the existence, uniqueness, sigma-algebra, or measure obligation named by its source definition.

There are no `external_refs` relationships in the run. The sole new `proved_here: false` fallback is `rem-sine-period-arc-length-integrand-is-nonelementary`. Its exact Hall statement, `sources.references` URL, failed local differential-algebra route, and necessity agree with its `external_dependency` block; `extcheck` passes. It is not used as generated dependency infrastructure.

## Repairs and defect ledger

The semantic audit found no fatal item defect. It did find two nonfatal scope-artifact defects:

- `research/frontier-16-batch-5.pages.json` lagged the final authored dependency lists on 13 measure-theory items. The missing records included choice and sigma-ideal inputs for completion, extended-real bounds, inclusion-exclusion inputs, the semifinite decomposition's actual measure/countability inputs, and restriction in the sigma-finite uniqueness proof.
- `research/frontier-16-batch-6.pages.json` lagged the final title/dependency lists on 13 topology items. The stale records included Euclidean compactness and Archimedean inputs, the final free-group normal-form route, covering regularity and circle-classification hypotheses, and the corrected universal-cover deck-group title.

The item text and Facts were already correct and fully contracted. I synchronized every ordered manifest dependency list to current frontmatter, corrected the one stale title, and ran:

- `splice-plan --run frontier-16 --batch 5 --update`;
- `splice-plan --run frontier-16 --batch 6 --update`.

The plan and all seven manifests now agree, and a fresh manifest-vs-frontmatter comparison reports zero dependency drift. The two dispositions and their fixes are defect-ledger rows `f16-lead-6c-001` and `f16-lead-6c-002`; `defect-ledger validate --run frontier-16` passes 175 rows with zero errors.

No item or page was added, deleted, or materially edited at 6c. I authored no new proof. There is therefore no 6c-created twice-touched item and no judge block to invalidate.

## Impact receipt

I generated `research/frontier-16-impact.json` from the engine-owned `pre-author → post-6b` window. It records 324 changed public interfaces and 261 affected current consumers. Every consumer has an item-specific `still-licensed` disposition naming its direct changed premises or well-definedness/body link, the exact Fact labels and proof steps where available, and the reason the current target clause still carries the use. The receipt validates with zero pending rows:

```text
impact-audit: 324 changed public interface(s), 261 affected item(s)
```

There are no published downstream consumers in this window: every affected consumer is another in-flight `frontier-16` item. The two 6c repairs changed manifests and the plan only, not a mathematical item interface, so they do not stale this touch-bound receipt.

## Spine receipt

I generated and filled `research/frontier-16-spine-audit.json`. I read the Statement, Facts, and every numbered proof step of all 58 proof-bearing items among the 100 largest transitive dependency cones, including the foundational set-existence, natural-number induction/recursion/arithmetic, integer/rational construction, ordered-field sign, and rational-embedding spine. Each hash-bound row has a concrete proof-route attestation. No false Statement, invalid inference, missing hypothesis, or bad dependency was found, and the receipt validates against the current hashes:

```text
spine-audit: 58 proof-bearing items among the top 100 transitive consumer cones
```

## Contract and detector gates

The merge was run before every dependent check and produced 271 current proof contracts from the seven owning files.

| gate | result |
|---|---|
| `proof-contract --strict` | 271/271, zero errors; one nonblocking `shotgun-bracket` warning on `thm-weierstrass-convergence-holomorphic-functions` step 1.2, whose five cited Facts were individually opened and are used there |
| `finite-smoke` | one applicable check; `cyclic-subgroup-lagrange` passes through modulus 24 for `ex-circle-covering-towers-follow-divisibility`; bounded evidence only |
| `risk-report --require-reviewed` | 271 items routed, zero missing/error; every high/critical contract retains a complete group-Alpha risk review |
| `boundary-audit` | 2,168 rows, 838 `not_applicable`; no template-reuse or contradicted-disposition candidate |
| `citation-fidelity --fail-on-missing-quote` | 1,223 citations; no missing quote and no widening candidate |
| `gate-liveness` | the engine's 14:17 gate-of-record reports 1 finite-smoke check, 271 contracts, 579 harvested results, and 4,540 prechecks, all live |

This Codex sandbox cannot run `gate-liveness.mjs`'s nested `spawnSync` probes: it reports their successful direct outputs as `unparsed`. I therefore do not claim a local wrapper pass; the four direct commands above pass with the stated nonzero scopes, and the engine's stage process has already recorded the wrapper pass.

## Other gates

- Full precheck: 4,540 checked, zero failing.
- `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `depsource`, `pathcheck`, `manifest-integrity`, `validate-plan`, and `splice-plan --verify`: zero hard errors.
- Content policy: 324 scoped items, zero errors or warnings; component provenance and reader-visible source URLs are present.
- Coverage checklist: 579 harvested rows, zero errors. The four low-yield warnings are the source-specific IFT, plane-geometry, and topology declines already read and adjudicated in the group 6b reports; none hides a missing standard result.
- Audit manifest: 1,618 relationships over 324 items, zero unresolved or missing-source defects.
- Pathway warnings are the expected draft-unplaced rows owned by step 10's `pathway-sync`, plus the pre-existing measure-theory singleton part; no pathway error exists.

The current engine URL receipt records 37/37 retained URLs live, with ten superseded originals excluded. A local rerun in this sandbox could not resolve any hostname at all and therefore supplied no source-specific evidence; I did not replace the engine's green receipt with that environment-wide DNS failure. The engine remains the gate of record and will rerun source liveness when this stage drains.

## Explicit exclusions and remaining owner boundary

I did not rerun the group readers' full same-batch proof audit over all 519 same-batch dependency edges; that is 6a/6b scope. I did read the nine well-definedness edges and every current interface consumer required by the impact receipt, and I used the current contracts and group reports when reconciling the repaired manifests. I did not judge, publish, change status, commit, or push.

One non-mathematical owner-bound seam remains. The new `rem-fundamental-theorem-of-algebra-via-liouville` names both independent FTA proofs, but the already-published `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` does not yet name the new Liouville route. Adding that reciprocal orientation link is not an obvious-falsehood repair and is outside the delegated published-item write boundary. The current level's theorem and proof are complete; the reciprocal backlink is queued for the owner rather than silently written into published content.

## Disposition

The complete 6c mathematical citation scope is clean. Both manifest-integration defects are fixed and ledgered, the plan/manifests/contracts agree, the impact and spine receipts validate, and no fatal 6c defect remains open. The only unperformed action is the owner-authorized reciprocal FTA backlink described above; it does not undermine the Liouville proof or any dependency edge in this level.
