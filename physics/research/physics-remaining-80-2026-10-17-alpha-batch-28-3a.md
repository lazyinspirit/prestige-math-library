# Batch 28 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-28`.

Scope owes only `touched:28:pthm-csm-qualified-continuum-equilibrium-limits`. Reader findings and refuter findings are empty. Review order is normalization lemma, conditional theorem, bulk-field counterexample; untouched risk-only carriers receive no extra decisions.

## Completed level 2 review

`lem-csm-continuum-kernel-normalization`: all eight steps and fourteen direct supplier statements/definitions checked. Finite cell decomposition gives the Poisson sector measure; two-point stability gives the pair bound -2B. Finite range bounds the exterior count m; the resulting lower energy bound and exponential series give exactly the displayed normalizer bounds. Empty sectors and zero-volume regions remain valid. Pair-count measurability follows by pi-lambda and increasing simple approximations, followed by finite-measure Tonelli. Energy splitting proves nested consistency, including zero-weight infinite-energy fibers; the conditional-law equivalence works in both directions. No infinite-volume existence is inferred. Complete risk review recorded in the owning contract before proceeding higher. No item edit.

Sources checked: [Jansen](https://www.math.lmu.de/~jansen/gibbspp.pdf), §§3.2–3.3 and 5.1–5.2, equations (3.8)–(3.10), (5.1)–(5.4), Propositions 5.2–5.4; [Dereudre](https://arxiv.org/pdf/1701.08105), Definition 8, PDF pp.20–21. The latter additionally restricts stationarity and positive-volume test regions; those restrictions are not silently imported into the independently proved local lemma.

## Completed level 4 review

`pthm-csm-qualified-continuum-equilibrium-limits`: all nine proof steps and all 29 direct supplier statements/definitions checked. The eight clauses preserve each exact supplier's model class, boundary, density and choice hypotheses. In particular clauses 4 and 5 now state the previously omitted full AC and superstable-regular/positive-beta qualifications. The relevant suppliers are `thm-tdmath-van-hove-fixed-n-limit`, `thm-tdmath-canonical-interior-density-limit`, `thm-tdmath-periodic-fixed-n-limit` and `thm-tdmath-fixed-n-local-ensemble-equivalence`, in their current Statement sections. The Poisson-to-positional correction is exactly +1 in reduced pressure. The SI scale is E0/(beta ell0^d), and the action convention a0=h_ref is explicit. The beta=0 branch is mathematical and retains forbidden pairs. No measured inputs, material applicability, DLR existence or identification of minimizers are inferred.

The current raw item hash equals the reader post hash `ccb9d228cfc31e45918c905999abe9a910c25626c676f60d40a9abbddf52722b`. Replacing only its Statement by the old manifest Statement in memory reproduces the exact pre hash `e03049715b54d0508cf479ddb4606f48b7aeaf5e2addea4a110eebc463b8501f`. Thus the historical delta is known: precisely the reader's two stated qualifications. Both are retained. The manifest Statement was synchronized and the contract's adopted-postulate quotation refreshed to the current explicit exterior-map formulation. The routed verdict is `amended_repair` because the final carrier includes these metadata amendments. Complete risk review recorded before proceeding higher.

Consumer search over current items and pages finds only `cex-csm-bulk-field-changes-pressure` and the A-page placement/summary. The former uses unchanged clause 7's exterior restriction, and the latter already emphasizes clause-specific hypotheses. Neither needs an item/page edit or a further interface hop. The refreshed postulate's restriction/concatenation conditions are met by ordinary configuration restriction and union. Published mathematical suppliers were read at their actual statements/definitions; their full foundational proof closure was not independently audited. No published defect confirmed.

## Completed level 5 review

`cex-csm-bulk-field-changes-pressure`: all three proof steps and twelve direct prerequisites checked. With fixed z=exp(alpha), the adopted ideal-gas family has Z_Q=exp(V(exp(alpha-beta c)-1)) and Xi=exp(V exp(alpha-beta c)). Thus p(c)=exp(alpha-beta c)<exp(alpha)=p(0) for beta,c>0, with positive SI conversion E0/(beta ell0^3). Vacuum, c=0 comparison, positive scales and all-volume exactness were checked. The ideal model is independently adopted; superstability is not asserted for the zero pair potential. AC supports the Poisson reference. Its complete risk review is recorded; its postulate quotation and choice boundary note received audit enrichment only. No item edit or new decision obligation.

## Defect dispositions and consumer records

The one owed decision is `amended_repair`, with `repair_confidence: 1`. It references two closed rows in `research/defect-ledger.jsonl`: `physics-remaining-80-2026-10-17-batch-28-clause4-choice` (nonfatal explicit-choice omission, already present in proof) and `physics-remaining-80-2026-10-17-batch-28-clause5-interaction` (missing interaction-class hypothesis in the separately conditional public clause; fatal scope gap before repair). The latter row includes the accompanying positive-beta clarification. No new mathematical claim or proof was written. No stale judge record is present on the touched item. Frontier consumer checks are recorded in `briefs/tasks/frontier-dependency-ledger.md`.

No published defect, affected outside-scope consumer, withdrawal, escalation or mathematical blocker was confirmed. Published and imported sources remain read-only. This is a scoped claim/prerequisite review, not a new audit of all transitive mathematical proofs. No judge, certification, decision hash stamp or full gate battery was run.

## Local checks

All checks below exited 0 after the final metadata edits:

- `node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-28.proof-contracts.json` initially routed three CRITICAL items (scores 12, 12, 9); the final rerun with `--require-reviewed` reports 0 errors across the six-item batch.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-csm-continuum-kernel-normalization.md items/pthm-csm-qualified-continuum-equilibrium-limits.md items/cex-csm-bulk-field-changes-pressure.md`: 3 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` on those same three explicit paths: YAML and all math spans parse; 3 files OK.
- `node tools/physics-support/proof-layout.mjs` on those same three explicit paths, after all edits: 3 items, 20 steps, 0 defects.
- Focused JSON/evidence checks: exactly 1/1 owed decision, two unique closed defect rows with correct ownership, three complete risk reviews, all reviewed contract quotations contained in current supplier sections, synchronized manifest Statement, and unchanged theorem post-reader raw hash.

No item bytes were edited by this adjudicator, so reflow was unnecessary. The engine retains hash stamping and the gate battery. No blockers remain within the dispatched scope.
