# Batch 13 owner coverage repair

The missing canonical `research/advanced-qft-supersymmetry-build-2026-10-23-batch-13.coverage.json` is now supplied (advanced-qft-supersymmetry-build-2026-10-23 = advanced-qft-supersymmetry-build-2026-10-23). Original source coverage, source-fetch stamps, native results and readiness receipts remain unchanged. This is source-harvest repair and one subsequently authorized proof/format repair round, not independent acceptance or a workflow transition.

Read the assigned four item carriers, manifest, notes and original coverage; inspected the coverage validator contract and physics schema/workflow. Freshly retrieved the three full PDFs with `curl -fL --retry 2 URL -o /tmp/batch13-coverage-repair/NAME.pdf`. All succeeded, and their SHA256 prefixes match the author's fetch evidence: Benini 12f65cc39e9d7888 (828699 bytes), Baez 9dfc7aaea35d2df3 (885332 bytes), Schäfer-Nameki 280ef82922ba967f (1095446 bytes). `pdftotext` was unavailable; Python3 PyMuPDF extracted the selected pages instead.

Actual repair reading: Benini §2.3 completely, printed18–20/PDF19–21, plus the preceding structure/anomaly paragraph PDF18; Baez §8.3 completely pp55–63, stopping before §8.4, plus p54 context and abstract p1 to establish its introductory-survey nature; Schäfer-Nameki §2.5 pp23–25 and all §2.8 including §§2.8.1–2.8.2 pp28–33. The canonical locator corrects the original Benini PDF offset and Baez associator/functor page shorthand. These are selected-section reads, not full-paper reading claims.

The harvest has 22 source-owned section/named-result/figure headings. Included rows specify the restricted finite interface actually present; they do not attribute the explicit gauge-composition proof to a source. Arbitrary categorical reduction, equivalence and strictification results are explicitly out of this finite model. Physical screening, realizations and anomaly/gauging claims name real planned destinations (`qftx-two-group-symmetry-backgrounds` or `qftx-finite-symmetry-gauging`). The lecture notes are `lecture-notes`; Benini is `paper`; Baez is `survey`, grounded in its abstract's detailed introductory treatment rather than an invented textbook classification.

Command: `node tools/physics-support/coverage-checklist.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-13.coverage.json --require-destination --json`. Actual result after final edits: exit0, 1 page, 22 harvested, 0 errors, 1 advisory (`coverage-low-yield`, 8/22 included). This advisory remains for Alpha's substantive source-omission review; categorical and physical declines were not relabelled included to eliminate it.

## Authorized proof-only follow-up

During source/interface comparison, the theorem's original step1.3 displayed a sign-inconsistent bar-cocycle identity. Root explicitly authorized investigation and surgical proof repair. Independent expansion using formal beta symbols, action prefixes and freely reduced group words gives

`delta(zeta) + rho(g0) beta(x,y,z) - beta(u,v,w) = D(g0,x,y,z) - D(u,g1,y,z) + D(u,v,g2,z) - D(u,v,w,g3) = 0`.

The original displayed left side had the last two signs reversed, and the original right side was the negative of the corrected four-D sum. The final claimed identity and the Definition and Statement were already correct. The repair changes this equality only, then adopts the normative physics precheck's required topological phase ordering/numbering. Original to new step map: 1.1→1.1, 1.2→2.1, 1.3→2.2, 1.4→3.1, 2.1→1.2, 2.2→2.3, 3.1→4.1. The in-prose step range and theorem contract references were synchronized; other contracts are semantically unchanged. Frontmatter, Statement, references and Facts are byte-identical to the preserved preimage. No public-interface change or consumer repair is needed; no current batch manifest besides batch13 names this theorem. The definition's batch14/38 consumers are untouched.

Durable algebra verification: `python3 research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch13-consistency-sign-check.py` exits0: `PASS: corrected step 1.3 expands identically in the free-group bar-cochain module; original equality does not.` This is an exact formal algebra expansion, not a finite randomized proof substitute. The existing general proof then applies D=0.

Focused final checks (all exit0):

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-aqft-two-group-background-consistency.md --json`: 1 checked, 0 failed, pass/direct.
- `node tools/physics-support/proof-layout.mjs items/thm-aqft-two-group-background-consistency.md`: 1 item, 7 steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs items/thm-aqft-two-group-background-consistency.md --json`: 1 checked, no errors/warnings.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-13.proof-contracts.json --strict --items thm-aqft-two-group-background-consistency --json`: ok, no errors/warnings.

An initial bare `node ...precheck.mts` invocation failed because Node22 needs the tsx loader. The corrected invocation initially returned REPAIR for pre-existing phase numbering; the required form was adopted before the passing final checks. A preliminary root-tools proof-layout invocation produced no applicable physics report; the final check above uses the physics helper.

## Preservation and invalidation

Original source-coverage SHA256 remains fe1dc4ecf54f0fca5f898affeba33c09dc40b0536e889817eae69b6eb04febbb. Pre-repair theorem and contract are preserved as `batch13-consistency-sign-before.md` and `batch13-contracts-before-phase-repair.json`. The four exact existing Step1 readiness receipts were copied into `batch13-preimages/`; their originals were not edited. No native state/result was changed and no full gate or controller reload was run.

The theorem's Step1 readiness hash 0ca4f3dc61c89dfd32c393dc2fc1e291d7c3b2d58aa0b1502d89d52ab70c7aaa is stale because its proof changed. Definition and both examples remain unchanged and depend only on the unchanged definition. The contract file's bytes changed to synchronize step references; any aggregate frontier/contract evidence requires owner refresh. Root owns readiness rehash/recertification and normal engine continuation. No mathematical prerequisite remains unresolved by this repair; later independent review and the low-yield source review remain ordinary obligations.

Current theorem raw SHA256: f25ea5e178e7dfa1fad152ec16d1c2e3027d31ca1bc73c3103244c31b28cb5da.

## Root disposition

At 2026-10-23 08:05 UTC root reran the exact formal algebra check successfully, inspected the proof-only derivation and preserved evidence, and used the native Step1 record command to recertify only the consistency theorem with its unchanged exact definition supplier. Current readiness SHA256 is ce3746430bb85b2a07945a24e836ce51659bd3a0a5d55cccc263b0a5a647fa14. No scientific interface changed. Canonical coverage now supplies the absent artifact; native retry is authorized to clear this operational hold and continue author dispatch. The complete construction gate and aggregate recertification remain for the drained join; no independent acceptance is asserted.
