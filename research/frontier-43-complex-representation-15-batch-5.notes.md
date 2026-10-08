# Batch 5 scaffold notes — `sl2-r-discrete-series-and-unitary-dual`

Run: `frontier-43-complex-representation-15`, role beta, label batch-5, pair RG-30.
Owned outputs: `research/frontier-43-complex-representation-15-batch-5.pages.json`,
`...-batch-5.coverage.json`, `...-batch-5.notes.md`,
`...-batch-5.cross-batch-dependencies.json`, the batch-5 Step-1 records
(`research/frontier-43-complex-representation-15-step1-<item>.json`) and the batch-5
section of `briefs/tasks/frontier-dependency-ledger.md`. No item file, published
page, shared plan, engine state or verdict was edited.

## Scope built

A page `sl2-r-discrete-series-and-unitary-dual` (order 1240): 19 items.
B page `sl2-r-discrete-series-and-unitary-dual-examples`: 5 items.

All 14 design A items and all 5 design B items are present, with the A page
extended by five necessary local prerequisites, one of which is the split-off
non-square-integrability clause of design item 9 (below):
`lem-the-weighted-discrete-series-space-is-a-hilbert-space`,
`lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r`,
`lem-k-type-coefficient-formulas-for-the-sl2-discrete-and-principal-series`,
`thm-the-limits-of-discrete-series-are-not-square-integrable`,
`lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series` and
`lem-dixmiers-lemma-for-countable-dimensional-algebras` was NOT added because the
published item `lem-dixmiers-lemma-for-countable-dimensional-algebras` already
exists and is consumed directly (see the classification record).

Readiness: 21 items `ready`, 3 items `escalated`
(`thm-plancherel-support-for-sl2-r`, `thm-tempered-status-of-the-sl2-r-unitary-series`,
`thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`). No claim was
weakened to make it `ready`; the exact escalated statements are preserved in the
manifest and in the Step-1 records.

## Conventions fixed by this batch (binding for authoring)

- Batch 3's conventions are used throughout: `G=SL2(R)`, `K=SO(2)`,
  `a_t=diag(e^{t/2},e^{-t/2})`, principal-series parameter `nu` with
  `|alpha|^{1+nu}=Delta_P^{1/2}e^{nu}`, exceptional lattice
  `W_eps={nu in Z: nu ≡ eps+1 (2)}`, and the compact-picture ladder
  `L_{E±}f_n=((1+nu±n)/2)f_{n±2}` from
  `lem-sl2-raising-and-lowering-formulas-in-the-compact-picture`.
- Casimir normalization: `Omega=1/8 W^2 - 1/4 W + 1/2 E_+E_-`, acting by
  `(nu^2-1)/8` on `I_{eps,nu}` (batch 3). Kerr's and Kowalski's Casimir elements
  are scalar multiples of this one (Kerr's parameter agrees, `lambda=nu`; his
  quadratic Casimir is `-2 Omega` in this normalization). No source constant was
  transplanted without this reconciliation.
- Discrete-series indexing: `D_n^-` is the holomorphic model with K-types
  `-(n+2j)` and highest weight `-n`; `D_n^+` is its complex conjugate with
  K-types `n+2j`. At the exceptional parameter `nu=n-1` they are the extremal
  submodules `M^+_{-n}` and `M^-_n` of batch 3. This matches Kerr's
  `D^∓_{n-1}` up to the naming of the superscripts, and Frahm's `pi_n^±` with
  lowest K-type `e^{±in theta}` at `(eps,lambda)=((-1)^n,n-1)`.
- The limits of discrete series are the two summands of the unitary principal
  series `I_{1,0}` (`nu=0`, `eps=1`), i.e. `D_1^-=M^+_{-1}`, `D_1^+=M^-_1`,
  Casimir scalar `-1/8`.

## Design / plan / task conflicts (recorded, not resolved here)

1. **`RL-n` placeholder.** The design's RG-30 block requires "RG-25, RG-26, RG-28
   plus `RL-n` for highest/lowest weight sl2 modules". `RL-n` is an undefined
   placeholder; the dispatch and `research/plan-spec.json` give the controlling
   five page IDs
   (`group-c-star-algebras-and-the-fell-unitary-dual`,
   `direct-integral-decomposition-and-type-i-groups`,
   `sl2-r-principal-and-complementary-series`,
   `harish-chandra-isomorphism-casimir-and-central-characters`,
   `verma-modules-and-shapovalov-forms`), which the shell manifest already
   carried and which are kept. The highest/lowest-weight content needed here is
   supplied by the published Verma/Casimir pages plus batch 3, so no extra
   supplier is missing. The Alpha drift report reaches the same conclusion.
2. **Plancherel branch held.** The design lists
   `thm-plancherel-support-for-sl2-r` among the A items and the hard proof plan
   says "compare with Lang's Plancherel formula". The owner authoring direction
   and the representation drift resolution hold the RG-26-dependent branch:
   "RG-30 cannot cite central or type-I rows until their proofs close; the
   specific held branch includes `thm-plancherel-support-for-sl2-r` and any
   proof depending on it." The item is scaffolded in full but recorded
   `escalated`; `thm-tempered-status-...` (which needs it) is escalated too.
3. **Split of design A item 9.** The design's
   `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series` promises
   "unitary and irreducible but not square-integrable". The unitarity and
   irreducibility clauses are proved locally and are `ready`. The
   non-square-integrability clause is split out as
   `thm-the-limits-of-discrete-series-are-not-square-integrable` (and is `ready`
   under the all-coefficients definition of square-integrability, see below);
   the promised claim is preserved, not dropped.
4. **Corollary content made precise.** The design's
   `cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits`
   is graded by the source's "parameter convergence and exceptional splittings".
   The scaffolded statement records exactly (a) the two distinct Fell limits of
   `I_{1,i nu}` as `nu -> 0` (the two limit-of-discrete-series classes), giving
   non-Hausdorffness, and (b) the convergence of the spherical unitary principal
   series to `I_{0,0}`, giving non-discreteness, and cites batch 3 for the
   complementary-to-trivial convergence. No Plancherel-support statement is made
   in this corollary; that belongs to the held Plancherel item.
5. **Definitional caveat on "not square-integrable".** The exact computation
   (below) shows one extremal matrix coefficient of `D_1^pm` is not in `L^2(G)`.
   The scaffolded theorem states the all-matrix-coefficients definition of
   square-integrability (Hochs Definition 1.3; Frahm's discrete-series slide),
   under which this is a complete proof. The stronger, more customary statement
   that `D_1^pm` is not a subrepresentation of the left regular representation
   (equivalently: no Plancherel atom) is the Godement/Plancherel direction
   (Kowalski Lemma 7.4.13, proved in Bekka–de la Harpe–Valette Prop. 12.2.3 and
   Th. 12.2.5, whose full text was not fetched). The item says explicitly that
   it does not claim it; the Plancherel atom statement stays in the held branch.
6. **`validate-plan` invocation forms.** The engine's gate form
   `node tools/frontier-item-gate.mjs --run frontier-43-complex-representation-15
   --tool validate-plan` passes: "declared page order is acyclic and consistent;
   no item-level cycles, forward references, B-page dependencies, or unresolved
   ids", with the note that the 30 planned pages carry no item list in
   `plan-spec.json` (item dependencies are validated from the manifests by the
   other gates). The raw form `node tools/validate-plan.mjs research/plan-spec.json
   --run ...` additionally reports run-wide `frontier-selection` findings for all
   371 scaffolded manifest items and `redundant-prereq` notes for the page
   `requires` list that the dispatch mandates; that is the plan-spec's empty item
   inventories, a run-level reconciliation item for the owner, not a batch-5
   defect. No unresolved batch-5-specific plan finding remains.

## Mathematical evidence gathered while scaffolding (for the Step-3 author)

- **Exact limit coefficient (verified by the scaffolder).** For the compact
  picture of `I_{1,0}` (`eps=1`, `nu=0`), with `f_1` the normalized weight-one
  vector, the coefficient integral reduces, after `u=e^{i theta}`, to
  `(1/2 pi i) ∮ 2e^{tau/2}((1+e^tau)u^2+(1-e^tau))/(u P(u^2)) du` with
  `P(z)=(1-e^{2tau})z^2+2(1+e^{2tau})z+(1-e^{2tau})`. Its poles inside the unit
  disc are `u=0` and `u=± sqrt(tanh(tau/2))`; the residues at the latter vanish
  because `(1+e^tau)tanh(tau/2)+(1-e^tau)=0`, and the residue at `0` is
  `2e^{tau/2}/(1+e^tau)`. Hence
  `⟨Pi_0(a_tau)f_1,f_1⟩=sech(tau/2)`, which is `1` at `tau=0` and
  `~2e^{-|tau|/2}`; its `L^2` integral against `sinh tau d tau` diverges
  linearly. The same computation is the source of the `n=1` endpoint of
  Kowalski's `cosh(t)^{-2n}` family.
- **Discrete-series coefficient.** Kowalski Proposition 7.4.16(3) gives
  `|⟨pi_n(a(e^t))f_n,f_n⟩|^2 = pi^2 n^{-2} cosh(t)^{-2n}` for the unnormalized
  extremal vector. The manifest states only the normalization-invariant form
  `|⟨pi_n(a_tau)u_n,u_n⟩| = cosh(tau/2)^{-n}` for the unit vector `u_n`, which is
  forced at `tau=0` and is what the KAK integral needs; the source's constants
  are not transplanted.
- **KAK density.** Kowalski Lemma 7.4.14 uses
  `a(r)=diag(e^r,e^{-r})` and density `sinh(2r)dr`; in batch 3's
  `a_tau=diag(e^{tau/2},e^{-tau/2})` this is `sinh(tau)dtau`, which is the
  normalization used in `lem-kak-integration-formula-...` and in the two
  coefficient-integral checks.
- **Kowalski's hard direction is not locally available.** Kowalski Lemma 7.4.13
  states that an irreducible unitary representation is a subrepresentation of
  the regular representation iff all its matrix coefficients are `L^2`, and that
  one square-integrable coefficient suffices; his proof sketches only the
  easier "all `L^2` => subrepresentation" direction via the closed graph theorem
  and Schur's lemma (both published locally and used in
  `thm-square-integrability-...`), and refers the harder direction to
  Bekka–de la Harpe–Valette [14, Prop. 12.2.3, Th. 12.2.5]. The full text of
  that book could not be retrieved; this is the exact reason the atom/no-atom
  formulation of limit non-square-integrability is held, while the
  all-coefficients formulation is proved.
- **Classification gap.** Kerr §2 invokes Harish-Chandra's subquotient theorem
  for admissible irreducible representations and Etingof proves Dixmier's lemma
  (already a published item here) but only sketches globalization
  (Theorem 7.5). Lang Chapters VII and X, whose full text the design cites, sit
  behind a publisher wall and were not fetched. The algebraic classification
  (Dixmier + the PBW four-alternatives + batch-3 composition series + the
  unitarity intervals) is scaffolded ready; the two passage theorems are the
  held inputs of `thm-classification-...`.

## Sources actually fetched and inspected

Local text extractions were read from `/tmp/src5/` (Kerr, Kowalski, Etingof,
Hochs, Frahm); `source-fetch-check --stamp` verified full-text retrieval for all
seven source objects in the coverage file (5 unique URLs): 7/7 fetch-verified.

| source | range read | used for |
|---|---|---|
| Kerr, *Notes on the Representation Theory of SL2(R)* | §§1–2 pp. 1–12; §5 pp. 19–21; Appendix I §7 pp. 33–36 | extremal submodules at exceptional parameters, limits, holomorphic model, coefficient/unitarity |
| Kowalski, *Representation Theory* (GSM 155, author PDF) | Ch. 7 §§7.3–7.4, pp. 292–317 | compact picture, ladder, discrete-series models and exact extremal coefficient, KAK integration, subrepresentation criterion, tempered list, Bargmann classification |
| Etingof, *Representations of Lie Groups* (MIT 18.757, Lecture 9) | §7.2–7.3, pp. 37–39; §9.1–9.2, pp. 47–50 | Dixmier/central character, four-alternatives (g,K)-classification, globalizations sketch |
| Hochs, *Harish-Chandra's Plancherel formula for SL(2,R)* | §1 pp. 2–6; §2 Thm 2.1 and proof pp. 6–19 | explicit Plancherel formula, discrete-series definition/atoms, Weyl integration densities |
| Frahm, *The Plancherel formula ... I: Examples* | SL(2,R) slides, 28 pp. | independent Plancherel statement, Weyl integration formula, discrete-series parametrization and characters |

**Retrieval history (recovery attempted, recorded).** Plymen, *Noncommutative
Fourier Analysis* (`https://eprints.maths.manchester.ac.uk/1416/1/RJPNew.pdf`)
was attempted twice (curl, 90 s and 45 s) and timed out both times; the web
search located Frahm's and Hochs' complete treatments, which were fetched and
read instead, so the Plymen URL is not used in the coverage file. Lang,
*SL2(R)* (`https://link.springer.com/book/10.1007/978-1-4612-5142-2`) is cited by
the design but its full text is publisher-walled; the "book/large treatment"
requirement is met by Kowalski's book-length PDF together with the Kerr, Hochs,
Frahm and Etingof notes. No fabricated reading is claimed for either.

## Cross-batch inputs

`research/frontier-43-complex-representation-15-batch-5.cross-batch-dependencies.json`
contains 52 rows: 50 `item` rows and 2 `page` rows, all `status: open` (Step-1
scaffolder; reviews belong to Step 3/5a). They record every in-run supplier from
batch 3 (`sl2-r-principal-and-complementary-series`: principal-series
conventions, compact picture, K-types, ladder, detection, exceptional lattice,
unitarity of principal/complementary series, parameter equivalence, the
complementary-to-trivial corollary) and the batch-1 RG-26 rows consumed by the
held Plancherel item (`thm-irreducible-direct-integral-decomposition-for-type-i-groups`,
`thm-essential-uniqueness-of-type-i-irreducible-disintegration`,
`thm-central-decomposition-into-factor-representations`, and the direct-integral
and factor/primary definitions), plus the two page prerequisites.
`frontier-dependency-ledger refresh --run frontier-43-complex-representation-15`
succeeded for the merge; with `--require-reviewed` it correctly reports
"Cross-batch review incomplete: supply every batch input and review every
declared edge" — expected at Step 1 and left for the owner's later stages.

## Checks run (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15`
  — pass, 371 items across 30 pages, maximum level 28; all batch-5 labels
  recomputed after the final manifest edit (max level on this page: 14, attained by the held Plancherel/tempered/classification items).
- `node tools/manifest-deps.mjs research/frontier-43-complex-representation-15-batch-*.pages.json`
  — 371 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only <all 15 batch manifests>` —
  371 scoped items, 0 errors, 0 warnings. (Scoped to the batch-5 manifest alone
  it reports the declared cross-batch suppliers as missing, which is the
  expected single-batch-scope behaviour; the whole-run scope is the gate.)
- `node tools/coverage-checklist.mjs research/frontier-43-complex-representation-15-batch-5.coverage.json --require-destination`
  — 2 pages, 40 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage ...batch-5.coverage.json --stamp`
  — 7/7 sources fetch-verified (all newly stamped).
- `node tools/extcheck.mjs` — 0 recorded-not-proved items; no external
  references or fallbacks in the checked scope.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` — PASS
  ("declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids"), with the note that the
  30 planned pages carry no item lists in `plan-spec.json`. The raw
  `validate-plan.mjs research/plan-spec.json --run ...` form reports the
  corresponding run-wide `frontier-selection`/`redundant-prereq` notes; recorded
  in conflict 6.
- `node tools/manifest-integrity.mjs --run ...` — PASS, 30 pages owed and 30 in
  the manifests, no scope drift.
- `node tools/step1-decisions.mjs check --run ...` — 371 items, 368 closed,
  3 open (the three batch-5 escalations above).
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` — merged
  cleanly; `--require-reviewed` still incomplete (see above).
- `node tools/url-sweep.mjs --coverage research/...-batch-5.coverage.json --out /tmp/url5.json --recover --fail-on-dead`
  — 5/5 live, 0 failed, 0 suspect (5 citation decisions).
- `node tools/frontier-item-gate.mjs --run ... --tool extcheck` — FAIL with 371
  `focus-item-unknown` rows, one for every scaffolded manifest item of the run
  (including batch-5's), because no item files exist before Step 3 authoring; the
  plain `extcheck` scan of the corpus reports 0 recorded-not-proved items and no
  external references. The frontier-form failure is a stage-order condition of
  the whole run, not a batch-5 defect, and resolves when the items are authored.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` — PASS (see
  conflict 6); `manifest-integrity` — PASS (30 pages owed, 30 in the manifests).
- `node tools/step1-decisions.mjs record` was run once per batch-5 item in
  dependency order: 21 `ready`, 3 `escalated`; re-recording is not permitted and
  no escalation was overwritten.

## Escalation summary for the owner

1. `thm-plancherel-support-for-sl2-r` — author only after the six RG-26 local
   interfaces are authored and proved; the explicit SL(2,R) density/formal-degree
   calculation and its sources are already recorded, the local disintegration
   proof is not.
2. `thm-tempered-status-of-the-sl2-r-unitary-series` — unblock it together with
   (1), or supply the L^{2+epsilon} characterization of temperedness.
3. `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` — needs a
   proved local supplier for Harish-Chandra admissibility/analyticity and one
   for globalization (Lang Ch. VII/X, Etingof §7.3), plus (1) for the tempered
   clause.
No other batch-5 item is blocked; all 21 ready items have complete local proof
routes with the suppliers named in their strategies.


## Root integration after bounded SL2 source review

The original three owner-held rows are resolved for Step-1 authoring readiness by complete local routes plus the exact user-authorized Plancherel citation; this is not authored-proof acceptance. The Plancherel citation is limited to Harish-Chandra's original full $C_c^\infty$ trace-inversion identity and its source normalization/densities/degrees. The original body remains unread and is not represented in source-fetch or harvest evidence.

Root integrated a local GCR/type-I route and direct ladder classification, corrected $I_{1,0}$ as a reducible sum rather than a dual point, separated Plancherel carrier from closed Fell support, corrected native Haar constants to $4\pi f(e)$ and degree $(n-1)/(4\pi)$, and added the actual same-page and cross-batch dependencies. The support exclusion uses the corrected run Casimir $\Omega=(\nu^2-1)/8$ and the spherical-corner witness $D=\phi^*(-\Omega-1/8)\phi$, $\phi=e_K*\psi*e_K$; no zero-mass inference is used.

A focused root adjudication caught that the first review report's auxiliary Hardy witness used a Casimir twice the run's declared normalization and did not explicitly isolate the spherical corner. The current manifest and owner direction use the corrected half-scale and K-averaged corner. This is the second and final repair round for the SL2 source/proof finding. The stable Step-1 readiness records and the native gate are still pending; neither a proof acceptance nor a gate pass is claimed here.


Final Step-1 result 2026-10-07: all 371 readiness records and focused scaffold checks are current, but the single native gate attempt failed at step1-dependency-ledger. The aggregate ledger identifies two unreviewed edges (batch5 item tempered-status → batch3 normalized-principal parameter; batch10 page divisors/Riemann–Roch → batch9 Hodge page). Repair round limit 2 is exhausted; no third review/repair pass or gate retry was started. The active engine had already hot-reloaded the changed Step3b stage module; profile LUNA_MAX is loaded. No authored proof or gate pass is claimed. See frontier-43-complex-representation-15-sl2-completion-integration.json.
