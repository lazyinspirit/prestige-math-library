# Phase 2 next 17 — batch 8 scaffold notes

## Scope and controlling evidence

Owned pairs only:

- `affine-lie-algebras-and-loop-central-extensions` / `affine-lie-algebras-and-loop-central-extensions-examples` (RL-13), scaffolded as 15 A-page items and 6 B-page items.
- `the-weyl-kac-character-formula` / `the-weyl-kac-character-formula-examples` (RL-15), imported from `phase-2-next-15` batch 7 and retained as 16 A-page items and 4 B-page items.

Before construction I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the complete RL-13 and RL-15 design sections in `research/plan-representation-theory-lie-track.md`, `research/plan-spec.json`, this batch's task, the current notes/coverage/manifests, `research/phase-2-next-17-prerequisite-audit.md`, and `briefs/tasks/frontier-dependency-ledger.md`. The active state was verified from `.autopilot/phase-2-next-17` with the autopilot status command; concluded `RESUME.md` files were not treated as run state.

## Plan/design conflicts and resolutions

`research/plan-spec.json` is controlling for page identity, order, category, companion and `requires`. It gives the correct metadata for all four pages, but every one of their `items` arrays is empty. That conflicts with the complete RL-13/RL-15 inventories in the assigned design and with the authorized imported RL-15 scaffold. I treated the empty arrays as unscaffolded plan placeholders, preserved every controlling page-level field, filled the assigned RL-13 inventory, and retained the imported RL-15 inventory. I did not edit the shared plan. This agrees with the run import record and the repository's preserve-items synchronization rule.

The RL-13 design table places the root-list proposition before the local highest-root lemma, loop/GCM comparison and affine-Weyl calculation. That order would make its real-root classification rely implicitly on later affine reflections. The manifest therefore preserves the design's scope but orders `alpha_0`, the loop/GCM isomorphism and the affine-Weyl semidirect product before `prop-roots-of-an-untwisted-affine-lie-algebra`; the root proposition explicitly depends on all three plus the invariant-form theorem.

RL-15's design inventory has 15 A items, while the authorized imported scaffold contains the additional proof-sized supplier `lem-casimir-constrained-verma-character-expansion`. It is retained immediately before its denominator and integrable-numerator consumers because the Casimir norm block and locally finite Verma-character inversion cannot honestly be left inline in both consumers.

## Dependency and mathematical audit

Every item has an explicit `deps` array. All 31 immediate dependencies outside this manifest resolve to published items on the three declared prerequisite pages or their published transitive closures. All same-batch dependencies point backward after the ordering correction; no B-page item is used as a dependency. No new cross-batch prerequisite pair is required.

The central-extension normalization was checked directly. For
`omega(x tensor f,y tensor g)=(x,y) Res(f' g dt)`, the affine-node bracket is
`[f_theta tensor t,e_theta tensor t^-1]=(f_theta,e_theta)c-theta^vee`.
It is exactly `c-theta^vee` only after fixing the invariant form by
`(theta,theta)=2` for the highest long root and normalized root vectors with
`(e_theta,f_theta)=1`. The definition, loop/GCM theorem, A1 computation and normalization counterexample now all use this convention explicitly.

Other seams checked explicitly:

- The two cocycle well-definedness lemmas precede the central extension.
- The derived algebra contains the loop algebra and `c`, while no bracket has a `d` component.
- Highest-root uniqueness is obtained from the published finite highest-weight construction applied to the simple adjoint module, not from an undeclared classification theorem.
- The affine-Weyl notation states the normal factor and the unique order `t_gamma w`, avoiding ambiguity between `W_0 semidirect Q^vee` and `Q^vee semidirect W_0` conventions.
- The root-space computation supplies both dimensions and the real/imaginary classification; isotropic `n delta` uses the declared invariant-form dependency.
- A nontrivial evaluation module cannot extend over `d`: the `m=0` relation makes a proposed `D` commute with `rho(x)`, while `m=1` requires `[D,a rho(x)]=a rho(x)`.
- The imported affine-denominator and basic-character items were repaired after RL-13 became available. In particular,
  `e^-Lambda_0 ch L(Lambda_0)=1+(z^-1+1+z)q+(z^-1+2+z)q^2+O(q^3)`
  is now stated rather than leaving a promised numerical table unspecified.

No item in either pair uses AC. The Weyl-Kac numerator keeps the imported choice-free finite rank-one exponential argument and deliberately does not consume the broader published weight-invariance result whose proof declares AC. No Foundations item or prerequisite path was added, so the Foundations/deferred-set-theory boundary is unchanged. I found no defective published prerequisite and no published defect requiring a canonical-ledger entry.

## Source evidence

Two independent full lecture-note treatments support each A page:

- Alexander Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*: complete relevant arguments inspected in the fetched 159-page PDF and extracted text, especially §§6.3-6.4, 7.1-7.2, 8.2, 9.2, 10.1-10.3 and 11.2.
- Nicolas Perrin, *Introduction to Kac-Moody Groups and Lie Algebras*: complete relevant arguments inspected in the fetched 279-page PDF and extracted text, especially §§10.7, 11.1-11.2, 12.2.1-12.2.3 and 14.1.

The coverage file records exact proposition/theorem and printed-page locators, supported item IDs, local body paths, genuine historical retrieval attempts, full-body hashes and dispositions for every harvested result. The exact-URL fetch stamps were reused without restarting retry allowances. Case-by-case twisted-type classification, analytic convergence, smooth loop groups and later Kac-Moody group geometry are recorded as out of scope for specific reasons.

## Readiness and dependency ledger

Fresh `step1-decisions` records were written once in manifest prerequisite order for all 41 owned items: 41 `ready`, 0 `escalated`. An owned-scope parse of `step1-decisions check --run phase-2-next-17` reports 41 owned items and 0 open findings. The whole-run snapshot reports 502/521 ready and is not yet closed because other batches remain in flight; that is not an owned mathematical finding.

`research/phase-2-next-17-batch-8.cross-batch-dependencies.json` remains `[]`: the RL-13 to RL-15 consumer edge is inside batch 8, and every dependency outside batch 8 is already published. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17` completed successfully.

## Checks

Checks run after construction:

- Batch manifest dependencies: 41 items, 0 missing/normalized, 0 errors.
- Batch manifest-only content policy: 41 items, 0 errors, 0 warnings.
- Batch coverage: 2 pages, 61 harvested results, 0 errors, 0 warnings.
- Whole-run coverage: 17 pages, 533 harvested results, 0 errors, 0 warnings.
- Batch source fetch: 4/4 fetch-verified and resolved, 0 drops.
- Whole-run source fetch: 57/58 fetch-verified and 58/58 resolved; the one documented drop belongs outside this batch.
- Batch source backing using the exact-URL `phase-2-next-15` liveness evidence: 15 authored results, all backed by an openable verified source or documented alternative.
- Plan validation: passed; declared page order is acyclic and consistent, with no item-level cycle, forward reference, B-page dependency or unresolved ID among scaffolded pages.
- Forward-reference check: 17,154 items, 0 open forward references, 398 closed, 32 load-bearing, 0 errors or warnings.
- External-reference check: 17,154 items, 164 recorded-not-proved and 55 consequences; 0 errors and 55 existing published-consequence warnings, none introduced by or connected to this batch.
- Whole-run manifest dependencies: 521 items, 0 missing/normalized, 0 errors.
- Whole-run manifest-only content policy: 521 scoped items, 0 errors, 0 warnings.
