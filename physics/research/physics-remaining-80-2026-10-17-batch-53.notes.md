# Batch 53 authoring notes — TGR-MC01

## Controlling plan and design conflict

The current plan-spec entry and the batch-53 manifest require the A page to follow gr-connections-and-free-fall, inverse-and-implicit-function-theorems, and td-math-nonsmooth-equilibrium. The older section of the thermodynamics-and-general-relativity track design describes only the first two page prerequisites and its original TGR-MC01 reservation has requires: []. The current plan controls. Both A-page carriers retain all three current requirements; B requires A.

The older prose inventory uses research-only supplier labels GR-G0, GR-G1, GR-G2, and TD-M2–TD-M4. Those labels and the earlier covariant-thermodynamics proof module are research context, not accepted production premises. The authored items use inspected current mathematical suppliers with their actual status, and the local lemmas provide complete arguments. No research-only supplier is represented as a proved item.

## Inventory and item levels

Batch 53 has batch dependency level 0 and requires: [] in the run dependency-level file; no logical supplier is assigned to another batch in this run. The assigned item inventory is:

- def-tgr-local-fluid-state: level 0; all direct suppliers are outside this run.
- lem-tgr-local-gibbs-euler: level 1; consumes the level-0 local definition and current external calculus suppliers.
- lem-tgr-fluid-frame-projection: level 1; consumes the level-0 local definition and current external Lorentz/tangent-space suppliers.
- ex-tgrmath-parcel-rest-shift: level 2; consumes lem-tgr-local-gibbs-euler.

All locally authored items have domain mathematics, library mathematics, and mathematical-only dependency roles. The page-level requirements remain the three current plan pages. Exact direct item dependencies, supplier statements, proof statuses, and uses are recorded in the batch-53 dependency-inputs file.

## Source reading and dispositions

Two independent full-text lecture-note treatments were retrieved and inspected for the A page:

- Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1: PDF pp. 10–17 (§§3.1–3.2, 4.1–4.3) and pp. 17–19 (§§5.2–5.3). This supports the timelike flow field, stress-energy type, comoving state variables, first-law derivatives, rest-energy convention, and Euler identity. Its perfect-fluid and equation-of-state discussion does not supply our local frame-projection proof, inverse-function applications, or an empirical material law.
- Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015): the full 184-page PDF was retrieved; relevant reading was PDF pp. 137–147 (§§IX.2, IX.4.1–IX.4.2), plus PDF p. 166 (Appendix A, equations A.1–A.5). This independently supports local-rest variables, current/tensor decompositions, and the distinction between Eckart and Landau choices. Section IX.4 uses c=k_B=1; our definitions keep SI factors. Appendix A labels itself “To be written!” and does not give a complete proof, so none of our deductions relies on it as proof. The source names the Landau eigencondition but does not prove local existence; the item proves that result from the current local implicit-rank supplier.

The coverage file records URLs, exact locators, supported items, limitations, and dispositions for each read section. source-fetch-check --stamp records the actual full-text fetch results there. No source retrieval failed; no source-resolution drop or escalation is applicable.

## Proof and scope notes

The material state function is a supplied mathematical C2 function on an open positive-volume domain. The proof derives the Gibbs, Euler, parcel, and response identities from that function. Response claims retain their separate nonzero-derivative, positivity, and convexity hypotheses. The fluid-frame lemma proves general orthogonal decompositions, the exact timelike-current condition for the Eckart frame, local Landau existence only near a perfect tensor with h_0>0, and the null-dust obstruction. It asserts no global or far-from-equilibrium Landau frame.

No equation of state is adopted for nature; no empirical data, conservation law, global gravitational extensivity, fluid evolution, sound cone, or entropy-production claim is included. The rest-energy example is an exact algebraic change in the supplied state function.

## Scoped validation and run-wide blockers

The final scoped checks passed: `author-check` recorded all four gates as passing; the strict proof-contract check covered 4/4 items; precheck passed the three proof-bearing items; rendercheck parsed all six item/page files; content-policy reported 4 items with no errors or warnings; coverage-checklist reported 2 pages and 10 harvested results with no errors or warnings; `source-fetch-check --stamp` verified all 4 source entries; the focused dependency check passed for all 4 items and their prerequisite cycle closure; and explicit `proof-layout` checked 4 items, 22 steps, and found 0 defects. The author-check record is `research/physics-remaining-80-2026-10-17-author-check-53.json`.

Recomputing the assigned manifest gives `def-tgr-local-fluid-state` level 0, both lemmas level 1, and `ex-tgrmath-parcel-rest-shift` level 2. The recorded run batch graph also has batch 53 at level 0 with no in-run batch suppliers.

Two run-wide level checks cannot pass on the current other-batch inputs. `batch-dependency-levels check --run physics-remaining-80-2026-10-17` stops at `Duplicate item undefined`: batches 26 and 30 still contain bare-string item inventories, beginning with `csm-phase-ensembles` in batch 26, while this checker requires item objects. The full `item-dependency-levels check` reports 150 errors outside this batch (24 missing item IDs, 110 empty scaffold inventories, and 16 stale levels; examples include `emg-mg04` and `ex-emg-electric-stress`). The batch-53 manifest itself has no level errors and its four recorded levels match recomputation. The shared batch-level file records batch 53 at level 0 with no suppliers, but the current run checker aborts before its all-manifest input hash can be evaluated; the owner must refresh that shared snapshot after the other-batch manifests are repaired. These other-batch records are left for their owners.

All four batch-53 Step 1 records were written with `decision: ready` and `owner: false`, in supplier-first order. Rechecking each stored hash reports all four records as ready and current.

