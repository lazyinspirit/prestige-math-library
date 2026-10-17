# Batch 20 authoring notes — Exact smooth coupled counterpoised dust and observables

Run: `physics-remaining-80-2026-10-17` · batch: `20` · assigned A/B pair: `emg-mp02` / `emg-mp02-examples`.

## Plan and design reconciliation

The binding owner direction selects this pair and supersedes stale task/design material. The complete `Exact smooth coupled counterpoised dust and observables` section of `research/plan-einstein-maxwell-models-track.md` reserves one A-page physics theorem and two B-page examples. Its planned item IDs, title, A/B page IDs, category, order 475/476, and page requirements `emg-mm02` and `emg-mp01` match the current selected rows in `research/plan-spec.json` and `research/physics-remaining-80-2026-10-17-batch-20.pages.json`. The plan's empty item arrays were the pre-authoring inventories; they are now populated with the reserved theorem and examples. No plan/design claim conflict was found.

The original wider matter-limits source inventory also lists Harte's geometric-optics paper. It is not selected for this pair because the assigned theorem and examples make no lensing, wave-optics, or gauge-residual claim; that source belongs to the separate geometric-optics branch. The disposition and reason are recorded in the coverage file. The local proof route remains the exact mathematical family theorem, the regular-sphere corollary, and the adopted transported-dust postulate; no coupled IVP, stability, formation, or physical-realization claim is added.

## Inventory, dependencies, and levels

- `pthm-emg-counterpoised-smooth-sphere` is on A page `emg-mp02`. Its direct dependencies are `post-emg-transported-charged-dust` (physical assumption), `thm-emg-smooth-counterpoised-dust` (mathematical premise), and `cor-emg-regular-counterpoised-sphere` (mathematical premise). The inspected in-run supplier levels are 3, 3, and 4, so its level is `1 + max(3,3,4) = 5`.
- `ex-emg-ml-b05` and `ex-emg-ml-b06` are on B page `emg-mp02-examples`. Each depends on the A theorem as a physical result, so each level is `1 + 5 = 6`.
- `emg-mp02` has the exact planned page edges to `emg-mm02` and `emg-mp01`. The current Step 1 records for all five items on `emg-mm02` (batch 17) and all seven items on `emg-mp01` (batch 18) are closed `ready` records. The three exact direct item suppliers also have current closed `ready` records when checked with `loadStep1Record` and `step1Decision`; their inspected statements, proofs/status, hypotheses, signs, units, zero-density handling, and scope match the authored uses.

The direct mathematical statement in `thm-emg-smooth-counterpoised-dust` requires `AC_omega`, smooth positive `H`, and `Delta H <= 0`; its actual proof checks the Maxwell sign, the undivided dust identity at zero density, and the `Lambda=0` Einstein components. The spherical corollary requires `a,b>0` and `0<delta<=1` for the dilute bounds, defines proper integrals from the induced volume measure, and proves the integral and comparison claims analytically. The physical supplier adopts the same SI Maxwell/Einstein conventions, pressureless dust stress/current, mass and force equations, charge-current conservation, and positive-density ratio rule. No in-batch supplier was missing, so no conditional missing-carrier argument or escalation was needed.

The focused item-level calculation reports levels 5, 6, and 6 for the three actual items. The whole-run `item-dependency-levels.mjs check` also reports empty inventories on unrelated unfinished pages: `emg-ms03`, `emg-ms03-examples`, `emg-s02`, `emg-s02-examples`, `qsm-infinite-spin-physical-models`, `qsm-infinite-spin-physical-models-examples`, `qsm-dt-relaxation`, `qsm-dt-relaxation-examples`, `tgr-pet01`, `tgr-pet01-examples`, `tgr-pet02`, `tgr-pet02-examples`, `tgr-g02`, `tgr-g02-examples`, `tgr-phs01`, `tgr-phs01-examples`, `tgr-phs02`, `tgr-phs02-examples`, `tgr-phs03`, `tgr-phs03-examples`, `tgr-phs04`, and `tgr-phs04-examples`. It reports no level mismatch on batch 20's items. A fresh pure recomputation from the current run graph returns batch 20 at level 5 with requirements 17 and 18. The full run batch-level checker reports its shared schedule file stale after the live manifest inventory was populated; the engine/owner must refresh that shared scheduling evidence at the drained construction join. This worker did not edit the shared file.

## Sources and empirical scope

The A theorem's coverage ledger records three full-text sources, locators, supported item, and the disposition of each harvested result:

- Meinel and Hütten, [arXiv:1105.3807](https://arxiv.org/pdf/1105.3807), complete 8-page paper, §2 equations (1)–(7) and the mass/charge qualification in equations (8)–(12). Inline model context only; its `c=G=1` Gaussian conventions and fixed source sign are not imported.
- Carroll, [arXiv:gr-qc/9712019](https://arxiv.org/pdf/gr-qc/9712019), complete 238-page lecture notes, §1.4.1 dust construction, §3.4 curvature contractions, and relevant Ch. 4 matter/Maxwell-stress conventions. Inline independent convention comparison.
- Tong, [author-hosted General Relativity lecture notes](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), complete 290-page lecture notes, §§3.2.2, 3.4.1, 4.5.2–4.5.4, and 4.5.7. Inline independent curvature, stress, and energy-condition comparison.

`source-fetch-check --stamp` fetched and stamped all 3/3 sources; check mode again returned 3/3 verified and 3/3 resolved. No retrieval failure occurred, so there are no recovery retries, source drops, or alternative-proof dispositions. No experimental measurement or empirical inference is claimed. Literature is not used as a proof of a physical postulate or of the exact local solution.

## Scoped validation and readiness

- `precheck.mts` through the physics `tsx-run` wrapper: 3/3 proof-bearing items pass after adopting its canonical phase labels.
- `proof-layout.mjs`: 3 items, 7 proof steps, 0 defects.
- Strict proof-contract validation: all 3 assigned items checked, no errors or warnings; every cited supplier excerpt and every proof step is mapped.
- Scoped render check: all 3 items and both pages parse and render; no malformed math or frontmatter.
- Focused dependency, forward-reference, external-reference, and content-policy checks: zero errors and zero warnings.
- Step 1 records for all three assigned items are `ready`, with their exact direct dependencies and current carrier hashes. These records state authoring readiness only and do not claim independent proof acceptance.

The A/B pair uses 1/100 item slots on A and 2/100 example slots on B; no page-capacity issue remains. Cross-batch dependency rows are recorded one edge at a time in `research/physics-remaining-80-2026-10-17-batch-20.cross-batch-dependencies.json`; `verified` records only the scoped interface check, not independent approval.
