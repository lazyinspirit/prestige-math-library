# Frontier 32 Step-9 review

Reviewed all 202 originally pending declines: 199 `stands`, 3 `owner-decision`. Retained 118 prior decisions. Refresh reports zero pending in every group; the scope check reports 320 current declines and zero errors. The authorized mathematical repair is complete and passed focused validation; independent Step-9 recertification remains blocking. No scope addition, new page, item rename, reading-order change, or publication was made.

## Supervising mathematical review — completed repair, certification pending

Only `thm-special-vertex-local-structural-partition-criterion-implies-property-star` was changed in mathematical content. Its Statement is byte-for-byte preserved. The matching batch-13 manifest metadata and proof-contract/risk-review row were synchronized. No published item, judge verdict or stamp was written.

Confirmed the load-bearing citation mismatch in the former F1/F2/F3: the large-Y, small-partition, and wide-layer lemmas assume the universal structural hypothesis. The transversal and final small-layer lemmas themselves are local; the latter does not require any structural hypothesis. Reading all five statements and proofs confirms the defect precisely, rather than attributing the stronger premise to every citation.

Source: [Huang–Ju–Zhou, Lemma 5.1 and complete proof, including Claims 5.1.1–5.1.2](https://arxiv.org/html/2606.06258v2#S5), HTML lines 859–915. Local clauses alone drive the source proof. The repair derives these consequences explicitly, preserving the existing conservative constants while proving integral cutoff bounds and counting the terminal layer. The five former partition/layer-lemma dependencies were replaced by the structural definition (local clauses only) and geometric-series theorem; all other dependencies are unchanged.

Pre-edit SHA-256: `e9f7f35be1f978333d4f84e0788945db726368a6cbe13a24d072ceca6e3e0e4c`. Post-edit SHA-256: `174e2bf582c435297f40e7409e5ad8f100ee1bc6809b24f716dcc91c51e236d9`.

Boundary review: empty trigger is vacuous; failure of outcome one ensures nonempty X and patterns; ell>=4, w>=4, c in (0,1] keep denominators positive. Floor cutoffs, nonsquare ell, q>=2, c=1, real w and integral chosen k are explicit. The final bound is 23w/60<w/2.

Validation: `tools/tsx-run.mjs tools/precheck.mts` on the item: 1 checked, 0 failing; `tools/rendercheck.mjs` on the item: 1 file, no errors; `tools/proof-contract.mjs research/frontier-32-batch-13.proof-contracts.json --strict`: 15/15 contracts, 0 errors and warnings; `tools/citation-fidelity.mjs` on that contract: 48 citations across 15 items, no missing quotes or widening candidates. These are focused checks, not independent recertification. Obligation `step8-group-g-local-criterion-review` remains open until the engine recertifies the exact Step-9 delta and the supervising session verifies it.

## Scope-denial delta

Only rows with no prior decision in the supplied delta were cognitively reviewed. Updated the owning group a–f decision files with exact source locators, current proof/closure comparisons and destination evidence; refreshed a–g through the prescribed interface. Original decline reasons remain intact for traceability; evidence qualifies inaccurate premises rather than repeating them as facts.

Owner decisions:

- `6b26579f158210d5dfbbcfdf91f32443c966e5c2a71f883d1acc0c65e97aaaaa` (c): Usher's orientation-of-double argument precedes the relative fundamental-class definition and needs no such machinery. The current double construction supplies smooth structure; the owner must resolve whether to expand its orientation contract and associated coverage.
- `5d6da426bfa61f295513d698c699f4eaab1e1b5fbe1cc6952373d2d35e8a79d9` (d): Chen's category O warning contradicts the future RL-4 plan's assertion of extension closure among arbitrary enveloping-algebra modules. The future owner must correct that contract; this dispatch does not edit it.
- `724247dea7d79c10f9ab989d302218a379fa44a221cfbdf1cbd1d65d0e23dc75` (f): the basis-sheaf criterion already appears in batch 12 and the frozen closure, so its deferred external-draft route is stale. The owner must reconcile coverage and distinguish Vakil's broader extension-from-basis theorem from the existing criterion for an all-opens presheaf.

Ran `node tools/scope-decisions.mjs refresh --run frontier-32 --all`: a53, b72, c35, d64, e48, f42, g6, each zero pending. Ran `node tools/scope-decisions.mjs check --run frontier-32`: 320 current declines, 0 errors. These validate decision currency/schema, not the engine's other gates.

## Open run ledgers

Inspected latest frontier-32 defect states: 599 distinct rows, comprising 581 fixed, 15 narrowed, 2 nonfatal-recorded and 1 deferred; none has disposition open. The deferred row is `frontier-32-A9-local-criterion-001`: its matching repair evidence was appended with `node tools/defect-ledger.mjs append --file /tmp/frontier32-step9-defect.json`, which also rendered `research/DEFECT-LEDGER.md` (7,032 historical rows, fingerprint `7a52a9b87f27`). Its deferral is solely for independent recertification, not an unfinished local proof.

The only latest open run obligation is `step8-group-g-local-criterion-review`, tier block. It remains open exactly as the mathematical-review task requires; this report supplies the completed review, repair hash and checks. All 13 Step-8 alerts have dispositions in their existing alert-decision ledger; no undisposed alert remains. The scope ledger is a page inventory, not a queue of open defect dispositions. No earlier fixed row was reopened or overwritten.

### Completed scope checkpoints: groups a and c

Reviewed all 17 pending circuit rows and all 7 pending boundary/PDE rows. Twenty-three stand; boundary decline `6b26579f158210d5dfbbcfdf91f32443c966e5c2a71f883d1acc0c65e97aaaaa` is an owner decision because Usher’s elementary orientation-of-double paragraph precedes, and does not use, relative fundamental classes. Exact source locators, destination checks, and qualifications are in the owning decision rows. Circuit logspace availability and Katz’s general bounded-fan-in depth theorem were qualified explicitly; neither exclusion relies on the inaccurate characterization. No result added.

### Completed scope checkpoint: group b

All 60 pending rows stand after checking PT-4/5/6/7 destinations and FR-4’s actual direct proofs. Evidence qualifies Durrett 2.2.6 (arbitrary variables, already a direct L2 specialization), Rider 1.3 (signed representation counts), Rider 1.5/1.6 (both group results, no spherical statement), and the bounded-representative/inversion scope. Durrett §§2.2, 3.2; Roch Note 3 §1.4; Grafakos 3.6.2/3.6.3/3.6.7; Rider §1; Fan–Queffelec–Queffelec §3.2/3.3; Pisier slide 8 were checked. No content added.

### Completed checkpoint: group d

Reviewed all 64 pending decisions: 63 stands, one owner-decision (`5d6da426bfa61f295513d698c699f4eaab1e1b5fbe1cc6952373d2d35e8a79d9`). Chen lecture 2 Warning 3.4 contradicts the future RL-4 contract at `research/plan-representation-theory-lie-track.md:366` asserting extension closure in all modules; the future owner must correct it. No plan/content change made. Milne 3.17, 3.18, 3.21, 3.45, 3.52 and Wiese 2.3.9 descriptions were qualified in evidence. Wiese 2.3.7 is false (the rational Hamilton division algebra has nonisomorphic maximal subfields Q(i), Q(sqrt(-2))); the current Schur-index proof avoids it. Sources: Milne ANT §§3–4; Conrad Different §§3–4; Andersen §12.4; Etingof §15; Chen lectures 2 and 4; Sakellaridis §§2–3; Wiese §§2.2–2.5; Zheng §§4.3,4.6. Exact row evidence is in the owning decision file.

### Completed checkpoint: group e

All 31 pending rows stand with source-specific qualifications in the decision file. Checked Hatcher Ch.0 and §§2.2 examples 2.37–2.45; May Ch.10 §§3–4 and Ch.13 §4; Nicolaescu §2.4; Ritter lectures 8–9; Cieliebak–Frauenfelder §2.1; Abbondandolo–Majer §§2.12–2.13; Smale (1.3)/(1.6). Corrected Hatcher’s HEP/Whitehead conflation and realization description, May section locators, Nicolaescu’s two-value rearrangement/endpoints, and fixed-pair versus global-union compactness. Current relative-field proof derives its local sphere directly from the given Morse normal form; declining a separate global slice theorem does not remove this local argument. No content changed.

### Completed checkpoint: group f

Reviewed all 23 pending rows: 22 stands and owner-decision 724247dea7d79c10f9ab989d302218a379fa44a221cfbdf1cbd1d65d0e23dc75. Its basis-sheaf destination already belongs to batch 12 and the frozen closure, while the source also proves the broader extension-from-basis theorem. Exact source and current-proof evidence is in the owning decision file. Sources: Vakil §§3.2.H,3.6,3.7,5.5.5,6.4,6.5,7.4; Milne AG 5.5,5.10,5.33,6.25,6.27 and Flag varieties, AG10 10.158; Stacks Morphisms §§4,15,22 and Schemes §§20,22–24; MIT 18.725 Theorem 7.1. Qualified elementary composition/immersion subresults, quasi-compact kernel versus quasi-separated pushforward, and projection versus homogeneous-map scope. All 202 originally pending rows have evidence; final refresh/check and ledger inspection are recorded above.

## Exact write scope and remaining action

Mathematical content changed only in `items/thm-special-vertex-local-structural-partition-criterion-implies-property-star.md`. Metadata changed only for that same ID in `research/frontier-32-batch-13.pages.json` and `research/frontier-32-batch-13.proof-contracts.json` (including its matching risk review). Scope evidence is in `research/frontier-32-alpha-{a,b,c,d,e,f}-scope-decisions.json`; all seven owning decision files were refreshed by the scope tool. Matching defect evidence and its generated view are recorded above. This report is the durable supervising checkpoint.

Next action belongs to the engine: recertify the exact Step-9 mathematical delta and route the three owner decisions. The supervising session must verify that recertification before closing `step8-group-g-local-criterion-review`. No judge record, stamp, routing, retry or stage transition was issued here.
