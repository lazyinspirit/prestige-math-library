# Batch 68 authoring notes — Dehn surgery on knots and homology

Run `inverse-problems-knot-theory-all-109-2026-10-19`; batch 68; pair `dehn-surgery-on-knots-and-homology` / `dehn-surgery-on-knots-and-homology-examples`.

## Authority, scope, and active state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, both batch-68 task files, the owner authoring direction, the batch-68 plan section at `research/plan-knot-theory-track.md:448–476`, `plan-spec.json`, the batch-68 manifest, and the dependency-level input.
- The run-local owner direction controls over stale task or map text. The KT-13 section of `research/plan-knot-theory-track.md` controls inventory and placement; `plan-spec.json` agrees on the two pages, titles, category, order, and page prerequisites but leaves item lists empty.
- **Plan/map conflict:** KT-13 lines 455–462 place `def-oriented-slope-and-knot-dehn-filling` on this A page, while `research/knot-theory-planning-2026-10-18/prerequisite-map.md` labels it as owned by KT-02. The current plan controls, so batch 68 owns it here.
- The recorded scheduling input is `69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`.
- Latest recomputed status from disk (after the final batch checks) remains `1-scaffold`, now 18/109 results covered, with units 5, 6, 9, 10, 11, 12, 14, 16 and 83 additional results still missing; artifacts are missing for units 31 and 63, and nothing is in flight. The run status still points to the Step 1 owner blocker recorded at 18:58 in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`, whose entry names unit 58 (covered but artifact-incomplete). This status/blocker discrepancy is owner-owned and was not reconciled here.
- `git log -5 --oneline` has only owner workflow commits at the head (latest `dd17c1fe56 Lower mathematics workflow worker concurrency to 20`); the assigned artifacts remain untracked and no commit was made.
- The current generated batch-57/58 bodies are present and were read, rather than treating the earlier empty manifests as current. No other pair's files were edited.

## Design issues requiring owner reconciliation

1. The B design says “A homology sphere is not characterized by $H_1=0$.” For a connected closed oriented 3-manifold, $H_1=0$ characterizes an integral homology sphere; the phrase is false or ambiguous if “characterized” means “defined.” The authored false statement is explicit and valid: $H_1=0$ implies simple connectedness. Its trefoil filling counterexample also shows that the homology sphere need not be $S^3$.
2. KT-13 asks for the conventionally oriented $L(p,q)$ from $p/q$ surgery on the unknot. Saveliev §2.3 and Ozsváth–Stipsicz–Szabó Exercise 1.2.14(b) label the corresponding filling with the opposite sign, writing $-L(p,q)$ in their convention. The local definition names the orientation of the $p/q$ filling as $L(p,q)$ to follow KT-13. Keep this explicit until downstream surgery consumers reconcile notation.
3. The design's trace warning is preserved: the theorem covers a single integer-framed 2-handle only. A rational $p/q$ filling requires an integral continued-fraction chain or a separately specified rational cobordism.
4. The plan's batch-level schedule is level 1, but recomputation from the actual batch-57/58 item dependencies gives levels 2–8 for this batch's items. The assigned item manifest records those levels; `batch-dependency-levels.json` is shared owner data and was not changed.
5. The KT-13 source boundary names Hatcher's *Notes on Basic 3-Manifold Topology* as a surgery treatment. The full note's relevant scope contains no Dehn filling, surgery-homology, or 2-handle trace proof; it is not used. Two independent full treatments remain on the A page (Saveliev and Ozsváth–Stipsicz–Szabó), with *Framed Knots* as an additional peripheral-convention treatment.

## Inventory, dependencies, and item levels

Levels are recomputed by the task rule: zero without in-run suppliers; otherwise one plus the maximum actual in-run supplier level. External published dependencies do not raise a level.

| Item | Home | Direct logical suppliers | Level | Claim / convention |
|---|---|---|---:|---|
| `def-oriented-slope-and-knot-dehn-filling` | A | `def-knot-exterior` (57, 0), `def-knot-meridian-and-preferred-longitude` (57, 1), published oriented-knot and countable-choice definitions | 2 | Primitive unoriented class $p\mu+q\lambda$; gluing by an orientation-reversing map; integer $n$ means $n\mu+\lambda$. |
| `lem-knot-surgery-first-homology-mayer-vietoris` | A | slope definition (2), batch-57 exterior/peripheral definitions (0,1), published Mayer–Vietoris, sphere, torus, and deformation-retraction results, countable choice | 3 | For the stated peripheral-basis hypotheses, $H_1(E_K(p/q))=\mathbb Z/|p|$ if $p\ne0$ and $\mathbb Z$ if $p=0$. The proof derives the exterior generator and longitude image from Mayer–Vietoris. |
| `thm-framed-knot-surgery-trace-boundary` | A | slope definition (2), batch-57 exterior/peripheral definitions (0,1), published oriented-knot and countable-choice definitions | 3 | The oriented boundary of the standard integer-framed trace is the matching filling. Rational trace claims remain excluded. |
| `def-lens-space-surgery-orientation-convention` | A | slope definition (2), countable choice | 3 | Defines $L(p,q)=E_U(p/q)$ in this run's orientation convention for $p>0$. |
| `lem-trefoil-plus-one-surgery-group-presentation` | A | slope definition (2), batch-57 knot/peripheral definitions, batch-56 Wirtinger presentation and local-conjugacy interfaces, batch-58 crossing and blackboard-framing results (blackboard theorem level 6), published van Kampen and braid definitions | 7 | Proposed right-handed/positive-braid $+1$ surgery group presentation. Its proof is explicitly conditional on unresolved local crossing and blackboard-parallel checks; it is **not ready**. |
| `ex-knot-kt-13-worked-cases` | B | homology lemma (3), trace theorem (3), lens convention (3), countable choice | 4 | Unknot $0$-filling is $S^1\times S^2$, $+1$-filling is $S^3$, positive $p/q$ fillings use the local lens convention. |
| `cex-knot-kt-13-boundary-case` | B | homology lemma (3), trefoil group lemma (7), slope/exterior/oriented-knot interfaces, countable choice | 8 | $+1$ trefoil filling has $H_1=0$ and an explicit nontrivial $A_5$ image, conditional on the unresolved trefoil group presentation. |

The manifest's actual levels are written in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.pages.json`. The scheduled batch level 1 and those item levels measure different dependency layers; owner must refresh the shared batch dependency graph after all batch manifests settle.

A scoped recomputation over the run manifests reports no dependency-level mismatch for these seven items. The full `item-dependency-levels.mjs check --run ...` reports 172 empty scaffold inventories in other batches. The full `batch-dependency-levels.mjs check --run ...` reports the shared batch levels stale. No shared level file was edited.

## Supplier-body and axiom checks

- Batch 57 `def-knot-exterior` is now present and defines the chosen exterior from a supplied tubular tube under $\mathrm{AC}_\omega$. `def-knot-meridian-and-preferred-longitude` is present and defines the positive normal-disk meridian and a degree-one null-homology longitude; that definition alone does **not** assert existence or a homology basis.
- Batch 57 `thm-knot-exterior-homology-and-longitude` is present, but its statement assumes full AC. The surgery homology item states its peripheral basis and generator conditions explicitly and proves the needed exterior homology locally by Mayer–Vietoris; it does not silently import that full-AC theorem. The local calculation uses no further choice after the chosen tube/peripheral data are supplied.
- Batch 58 `def-oriented-crossing-sign-writhe-and-blackboard-framing` and `thm-blackboard-framing-self-linking-is-writhe` are present. The definition makes the positive geometric half twist positive by a determinant convention; the blackboard theorem's proof identifies self-linking with self-writhe. The unused `thm-linking-number-is-invariant-and-writhe-is-not` edge was removed from the trefoil item because it is not needed for the blackboard computation.
- The direct group-theory supplier bodies from batch 56 are present but not ready. `lem-wirtinger-crossing-ball-cover` step 1.3 explicitly says it has **not** proved the simultaneous construction of the subspace $Y$, the relative-open sets $U,V_i$, or the compatible collar-pasting deformation retractions. `lem-wirtinger-local-meridian-conjugacy` depends on that unresolved carrier. `thm-knot-wirtinger-presentation-correctness` also depends on it. This is the exact unresolved prerequisite for trefoil item step 1.1; the item cites the actual draft interfaces as `[L1]`/`[L2]`, not as accepted results.
- The trefoil finite parallel trace `[A2]` reads the blackboard parallel as $bac$ and assigns coefficient $+3$. Although the full Friedl Wirtinger proof and the Hilden trefoil longitude passage were read, their diagram basepoints/meridian labels have not been matched to this downward-oriented positive-half-twist convention. The positive-crossing conjugation direction and the finite parallel word therefore remain unresolved. Trefoil and the dependent counterexample are escalated; no acceptance is claimed.
- All batch-68 carriers that invoke the chosen exterior/peripheral interface state $\mathrm{AC}_\omega$. The local homology and trace arguments make no further choices. No full-AC claim is added to these conditional proofs.

## Source reading and dispositions

The coverage file records each URL, exact locator, harvested heading, supported item, and disposition. No source used as primary support failed retrieval.

- Nikolai Saveliev, *Lectures on the Topology of 3-Manifolds*, 2nd revised ed., Lecture 1 §1.5 Lemma 1.6 (printed pp. 24–25), Lecture 2 §§2.2–2.5 (printed pp. 32–42), `https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf`. The complete meridian-image gluing argument, surgery convention, trace-boundary proof, lens-space convention, and integer/rational scope were inspected.
- Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, *Heegaard Floer homology*, version 2025-12-15, §1.2.3 and Exercises 1.2.11, 1.2.14 (printed pp. 11–12), `https://web.math.princeton.edu/~petero/konyv9.pdf`. The filling and homology arguments and both unknot cases were inspected; the opposite lens orientation label is recorded, not adopted.
- Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, *Framed Knots*, arXiv:1910.10257v6, §§4.2.1–4.2.3, 4.3, 7.1 (PDF pp. 12–20), `https://arxiv.org/pdf/1910.10257v6`. Peripheral, longitude, and framing conventions were inspected.
- Hugh M. Hilden, María Teresa Lozano, and José María Montesinos-Amilibia, *On the affine representations of the trefoil knot group*, arXiv:1003.3554v1, printed p. 6 and p. 23, `https://arxiv.org/pdf/1003.3554`. Page 6 gives the trefoil meridian presentation; p. 23 records a canonical longitude word and its 0-surgery quotient. These passages are cross-checks, not a substitute for resolving the local crossing convention.
- Stefan Friedl, *Knot Theory*, 2024 full lecture notes, §§5.2–5.3 (printed pp. 66–72) and §7.1 (printed pp. 94–98), `https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf`. The full Wirtinger construction/proof and trefoil longitude example were inspected. The general crossing sign is consistent with the determinant rule, but the diagram-specific meridian labels and direction have not yet been reconciled with the present positive braid; coverage records this as out-of-scope rather than proof support.
- Retrieval history: a cross-check URL listed by batch 56, `https://homepages.math.uic.edu/~kauffman/Stillwell.pdf`, returned only a 7-page file with no inspectable cited §4.2.4 proof. One alternative-source search succeeded immediately in finding Friedl's full lecture notes; the complete relevant sections above were read, and recovery stopped on success. The Stillwell URL is not cited as support and is not marked dropped in this batch.
- Hatcher's *Notes on Basic 3-Manifold Topology* was inspected as specified by KT-13's source boundary; its relevant scope contains no surgery-homology or 2-handle-trace proof, so it is not used.

## Per-item status

- `def-oriented-slope-and-knot-dehn-filling`: primitive classes are constructed by a unimodular matrix; same-class curves are related by the torus bigon/annulus argument; meridian-preserving gluing transitions extend over the solid torus. Level 2. Step 1 decision: `ready`.
- `lem-knot-surgery-first-homology-mayer-vietoris`: the statement explicitly assumes the peripheral-basis/generator hypotheses; the proof uses collared open covers, the exact Mayer–Vietoris cokernel and the primitive $p=0$ case. It does not use the separate full-AC KT-02 theorem. Level 3. Step 1 decision: `ready`.
- `thm-framed-knot-surgery-trace-boundary`: the standard orientation-compatible attachment removes $N(K)$ and contributes free face $D^2\times S^1$ with the specified meridian; corners are handled in a collar. Integer-only boundary is stated. Level 3. Step 1 decision: `ready`.
- `def-lens-space-surgery-orientation-convention`: local run convention explicitly assigns $L(p,q)=E_U(p/q)$ for $p>0$. Level 3. Step 1 decision: `ready`; owner convention reconciliation remains necessary before downstream consumers use the bare notation.
- `lem-trefoil-plus-one-surgery-group-presentation`: proof records `[L1]`/`[L2]` supplier interfaces and `[A2]` finite parallel trace as unresolved conditions. Exact root gap is batch-56 `lem-wirtinger-crossing-ball-cover` step 1.3; sign/word reconciliation affects the displayed filling relator. Level 7. **Escalated.**
- `ex-knot-kt-13-worked-cases`: solid-torus gluing proves 0- and +1-fillings; homology/trace facts cite A-page results. Level 4. Step 1 decision: `ready`.
- `cex-knot-kt-13-boundary-case`: the $A_5$ permutation witness was independently composed right-to-left and its displayed image table fixes all five letters; $a$ remains a nonidentity 5-cycle. The counterexample depends on the unresolved trefoil presentation. Level 8. **Escalated.**

## Scoped validation log

Actual scoped checks after the final item edits:

- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.proof-contracts.json --json`: **pass**, 7/7 contracts, no errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts <seven changed items> --json`: **pass**, 6 proof-bearing items checked, 0 failures; the lens-space definition is not applicable.
- `node tools/proof-layout.mjs <seven changed items>`: **pass**, 7 items, 23 numbered steps, 0 defects.
- `node tools/rendercheck.mjs <seven items and two A/B pages> --json`: **pass**, 9 files, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.coverage.json --stamp`: **pass**, 5/5 sources fetch-verified; 0 drops; 0 additional stamps on the final rerun.
- `node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.coverage.json --json`: **0 errors**, 1 warning: 4/22 harvested source results were scaffolded, so Alpha should confirm the documented dispositions.
- The scoped manifest/item/page inventory check found **0 mismatches**; all seven declared item levels match recomputed run levels. The assigned A/B Markdown files contain YAML frontmatter only, with empty bodies and preserved inventories.
- The full dependency checks remain blocked by other batches: 172 empty scaffold inventories and a stale shared batch-level file. Latest recomputed status lists missing artifacts `unit 31` and `unit 63`, while the blocker record still names incomplete `unit 58`; neither shared levels nor engine state were edited.

`node tools/step1-decisions.mjs record` wrote five item-level `ready` records (`def-oriented-slope-and-knot-dehn-filling`, the homology lemma, trace theorem, lens convention, and worked example) and two `escalated` records (trefoil group presentation and dependent counterexample). Each record contains examined dependencies and evidence; none used `--owner`, and all seven record paths were absent before these writes. These records document Step 1 completion only and are not independent approval.

The read-only `step1-decisions.mjs check` confirms the five ready records for this pair are closed at their current hashes and the two escalated records remain open as intended. The run-wide check remains open because other authored items have stale or missing readiness records.

The assigned A/B pages remain frontmatter-only and no summaries were generated. The engine-managed `page_layout: compact-v1` flag is not present yet because the run has not completed its initial authoring gate; it was not authored manually. Shared plans, published items, verdicts, engine state, the batch dependency-level file, and other pairs' carriers remain untouched.

### Final post-diagram validation

After correcting the trefoil braid-tangle over/under order to match the positive half-twist convention, the explicitly changed item was rechecked:

- `node tools/proof-layout.mjs items/lem-trefoil-plus-one-surgery-group-presentation.md`: **pass**, 1 item, 3 steps, 0 defects.
- `node tools/rendercheck.mjs items/lem-trefoil-plus-one-surgery-group-presentation.md`: **pass**, KaTeX and frontmatter validation clean.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.proof-contracts.json --json`: **pass**, all 7 contracts, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.coverage.json --json`: **0 errors**, with the previously recorded 1 low-yield warning (4/22 results scaffolded; Alpha disposition confirmation).
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-68.coverage.json --stamp`: **pass**, 5/5 sources fetch-verified, 0 newly stamped.

The exact-path Git status confirms the seven assigned item carriers, two assigned A/B pages, four batch evidence files, and seven batch-68 Step 1 records are untracked authoring artifacts. The broader repository has unrelated work in progress; this batch did not modify other pair files or owner-controlled shared artifacts.
