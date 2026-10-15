# Batch 30 authoring notes — `rpm-radiation-models`

## Inventory and plan reconciliation

- The original paired inventory reserves four A items and two B examples/counterexamples. All six are retained with their original IDs and scope. The plan-spec row and assigned dispatch agree on page category, order, library, companion, and prerequisite set; plan-spec’s item array was an empty scaffold placeholder, so the paired-inventory IDs control the authored inventory.
- The design prose lists page prerequisites as `rpm-external-charge`, then `rpm-spin-finite-size`; the current plan-spec and assigned manifest list the same two prerequisites in the opposite order. The manifest order is retained. This is an ordering difference only.
- The local `rem-rpm-self-force-status` uses `def-rpm-body-moments` as a formulation prerequisite. A stale design role called it `physical-result`, but schema validation reserves that role for a proved physical theorem or thought experiment; the supplier is a definition. The schema-valid role is therefore `formulation-prerequisite`, with the exact same dependency retained.
- No additional local mathematical definition was needed: the LL definitions are written explicitly in the LL lemma and are re-used by the conditional residual lemma. No item from another pair was duplicated.

## Dependency levels and current interfaces

- Page level is 3 from the assigned dependency-level map: batch 30 requires the batch-24 `rpm-external-charge` page at level 1 and batch-27 `rpm-spin-finite-size` at level 2. The declared prerequisite set is complete.
- Item levels, recomputed from current in-run item suppliers, are: `lem-rpm-ll-reduced-ode` 0; `lem-rpm-reduction-residual` 1; `post-rpm-lad-effective-equation` 2; `rem-rpm-self-force-status` 3; `ex-rpm-al-future-boundary-preacceleration` 0; `cex-rpm-lad-force-free-runaway` 3. The postulate consumes batch-24 `def-rpm-charge-spin-model` at level 1. The self-force remark consumes batch-27 `def-rpm-body-moments` at level 2. The counterexample consumes the postulate at level 2 (and also uses the batch-24 model definition); the other two local results have no in-run supplier.
- I inspected the actual batch-24 charge/spin definition and its source statement, not just its draft label. It supplies flat signature, $x^0=ct$, proper time, constant primitive $m,q$, the prescribed external two-form, and the flat electromagnetic tensor convention; it is a complete draft definition with no separate readiness record found at inspection time. The postulate strengthens the field to $C^2$ and restricts to $q\ne0$ for its derivative and positive $\tau_e$; these are explicit additional hypotheses.
- I inspected the actual batch-27 body-moments definition and its source statement. It defines smooth finite-body moments and explicitly makes no slice-independence or MPD claim. It is recorded ready in its current Step 1 file, but that status is not independent approval. The remark uses only this definition’s stated scope.
- The generic finite-time bounded-vector-field comparison discussed in adjacent design material is not one of this pair’s reserved items and is not used to claim trajectory convergence. The residual estimate stays at the exact order supported by its conditional hypotheses.

## Proof and physical-scope checks

- The LL field is a $C^1$ vector field because $F\in C^2$. The proof checks the antisymmetric Lorentz term and projector are tangent on the future unit shell, obtains a local full-state IVP by Picard–Lindelöf, and constructs the shell-restricted solution as a graph to prove invariance without assuming a global theorem.
- The residual lemma differentiates $f_0=\alpha F U$ exactly and uses $\dot f_0-B=\alpha F(a-f_0)$. The final constant is uniform only under the stated bounds on $\alpha$, $F$, $\Pi_U$, $a-f_0$, and its derivative over the shared compact interval. It does not establish the existence of such LAD families.
- The LAD equation remains a separate adopted flat effective postulate. The nonrelativistic AL pulse example is a distinct scalar future-boundary problem. The force-free relativistic counterexample checks a global-in-proper-time rapidity branch of the LAD ODE; it is not an observation and is not a finite-body claim.
- The source review retains the instantaneous-rest-frame small-radiation-reaction qualification in the LL modeling context. No measured value or numerical precision is introduced. GHW’s theorem is described only for its shrinking-body family and the authors’ separate qualified reduced-order discussion; it is not used as a proof of LAD or of unrestricted accuracy.

## Source record

- Two independent A-page treatments are recorded: Landau–Lifshitz’s complete book §§75–76 and Zhang’s complete paper §2/Appendix A. The local mathematical claims have complete proofs; the sources provide independent formulation and boundary cross-checks.
- PPV and GHW are supplemental to the A-page self-force remark. The coverage file records each harvested result as included, inline, or out-of-scope, with its exact locator and reason. Source-fetch stamps and final scoped check outputs are appended below after validation.
- The Springer PPV URL returned a 303-character wall page on the initial fetch and five retries. After that failure I searched for alternatives: the EMIS page redirected to an inaccessible zbMATH page and PMC returned a CAPTCHA. The complete arXiv v3 HTML copy was already inspected and stamped in batch 24, so it is the active item source. The old Springer URL and all six failed attempts remain in `batch-30.coverage.json` with a certain URL-only drop and an alternative argument/dependency record for `rem-rpm-self-force-status`; no literature result was dropped.

## Readiness and tool checks

The six `step1-decisions.mjs record` calls completed without `--owner`; the readiness API confirms all six records are current and closed. The local item levels recompute to `0, 1, 2, 3, 0, 3` in manifest order. The whole-run item-level check still reports 44 unrelated empty scaffold pages and one unrelated mismatch (`lem-qft-free-action-equations`: recorded level 3, computed 2); it reports no level mismatch for batch 30. The current batch-30 page level recomputes to 3, matching the recorded value, but the shared batch-level fingerprint is stale because the run manifests changed. The shared dependency-level file was left to the owner.

Final scoped checks:

- `proof-contract.mjs ...batch-30.proof-contracts.json --strict`: **pass**, 0 errors and 0 warnings across all six items.
- Focused `physics-content` over the six item carriers and both pages: **pass**, 0 errors.
- `audit-manifest.mjs` over batches 22, 24, 27 and 30: **pass**, 290 relationships and 0 defects.
- `source-fetch-check.mjs --coverage ...batch-30.coverage.json`: **resolved**, 6/7 sources fetch-verified and 7/7 resolved with one documented retrieval-URL drop.
- `step1Decision` currency check: all six readiness records are **ready/current**.
- `proof-layout.mjs` was run on all six explicitly changed item files but could not render: Node reported `ERR_MODULE_NOT_FOUND: Cannot find package '@/components'` while importing `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. The authored files and external renderer were not changed to work around this environment error.
- Whole-run `physics-check.mjs --run` is blocked by the unrelated invalid/empty current page in `physics-td-qft-rpm-62-2026-10-14-batch-10.pages.json`. Whole-run `proof-contract-coverage.mjs` is blocked by the empty frontier inventory `td-cycles-and-low-temperature`. The focused content check and strict batch contract check pass independently.
- `batch-dependency-levels.mjs check --run` reports a stale shared input fingerprint; its recomputed batch-30 level remains 3. No shared plan, dependency-level file, engine state, or verdict was edited. No tests were added or run.
