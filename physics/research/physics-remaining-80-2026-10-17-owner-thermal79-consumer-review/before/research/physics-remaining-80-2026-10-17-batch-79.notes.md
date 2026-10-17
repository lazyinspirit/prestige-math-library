# Batch 79 notes — tgr-phs03 / tgr-phs03-examples

Run physics-remaining-80-2026-10-17, beta batch 79. The assigned pair is the A page tgr-phs03 (order 655) and B page tgr-phs03-examples (order 656), in thermodynamics-and-general-relativity. Only those pages, their three assigned items, and batch-79 evidence were authored. New content remains draft.

## Plan and design comparison

The current plan-spec.json, batch-79 task, and current page manifest require tgr-phs01 and tgr-phs02 for the A page; the B companion requires tgr-phs03 and is a leaf. The original reservation in plan-thermodynamics-and-general-relativity-track.md lists additional page-level requirements TGR-I01, TGR-MHS01, and TGR-MI02. The current plan controls page ordering and page-level edges, so those older extra page requirements were not added. Their actual needed interfaces remain explicit item dependencies: def-tgr-framework-units, prop-tgr-kn-first-law-smarr, and lem-tgr-first-law-calibration-freedom.

The original item inventory reserves two A items and one B thought experiment. The old proposed records use the obsolete combined role physical-premise-or-result; the authored items use current schema roles. The area theorem also names the SI-family theorem and units definition directly because its proof uses their actual physical interface, and names the calculus suppliers used to prove the global additive-constant conclusion. No new local definition or mathematical result was needed: the existing exact family result, calibration lemma, chain rule, and mean value theorem suffice.

## Inventory, dependencies, and levels

The A page contains the adopted reversible-heat postulate and the conditional area-entropy theorem. The B page contains one Schwarzschild entropy-difference thought experiment. All three items are below the 100-item page cap.

| Item | Direct in-run suppliers and current levels | Item level |
|---|---|---:|
| post-tgr-thermodynamic-horizon-identification | def-tgr-framework-units (5), pthm-tgr-kn-family-mechanics (11), pthm-tgr-reduced-horizon-temperature (8) | 12 |
| pthm-tgr-area-entropy-calibration | def-tgr-framework-units (5), pthm-tgr-kn-family-mechanics (11), postulate (12), prop-tgr-kn-first-law-smarr (9), pthm-tgr-reduced-horizon-temperature (8), lem-tgr-first-law-calibration-freedom (0) | 13 |
| texp-tgr-horizon-entropy-difference | theorem (13), pthm-tgr-kn-family-mechanics (11) | 14 |

def-countable-choice, thm-chain-rule-for-total-derivatives, and cor-mean-value-theorem are imported mathematical suppliers outside the current in-run item graph, so they do not raise these levels. AC_omega is stated explicitly because the selected spectrum lemma assumes it, and the current PTHM temperature proof consumes that lemma. No full Axiom of Choice is added. The batch-level scheduling file assigns batch 79 level 7 from batches 77 and 78 (levels 5 and 6); no cycle was found in the authored direct graph.

The direct dependencies and dependency_roles are in the manifest. Page requirements are exactly the current plan edges. The cross-batch file has one row per in-run cross-batch edge; it records scoped interface checks only, not independent acceptance.

## Supplier inspection and unresolved PHS02 interface

I read the current tgr-phs01 and tgr-phs02 page bodies and the complete current statements and proofs of the direct mathematical and physical suppliers used here. The PHS01 family theorem gives the current SI first-law identity on the zero-magnetic-flux strict-subextremal family, with the Schwarzschild slice included and positive kappa_acc. The mathematical Kerr–Newman family identity, the framework units definition, the calibration-freedom lemma, the Euclidean chain-rule theorem, and the mean value theorem were inspected at their current item bodies. Their current Step 1 records are ready. Their use here is at their exact stated scopes; no process law, ADM/Komar claim, or general entropy theorem is inferred.

The current PHS02 postulate and current PHS02 temperature theorem item files and complete proof were inspected after they became available. The temperature statement says that the selected reduced exponential-current and adopted two-state rate model gives T_red = hbar*c*kappa/(2*pi*k_B) for a positive energy gap and positive inverse-length parameter. It identifies this as a horizon reference temperature only if that parameter is separately matched to the supplied generator's kappa_geom. The proof's rate-ratio calculation and Markov ODE solution are conditional and complete at that interface. The optional local proper-temperature clause additionally uses a separately selected stationary bath and reference match; this page does not rely on that optional clause.

The current PHS02 temperature proof consumes lem-tgr-thermal-contour-spectrum. Its actual Statement begins with the hypothesis Assume Countable Choice, and its proof cites that hypothesis. The current PHS02 temperature Statement and Facts omit AC_omega, although its proof contract quotes the spectrum supplier with that hypothesis. Earlier in-run readiness checks saw stale PHS02 Step 1 hashes; fresh records at 2026-10-17T01:11:32.322Z (model postulate) and 2026-10-17T01:11:39.857Z (temperature theorem) now return ready/current. The unresolved interface is the omitted AC_omega hypothesis in the PHS02 temperature Statement and Facts. The assigned items carry AC_omega explicitly and use the temperature theorem only conditionally. The supplier remains open for owner review of this interface; this batch did not edit batch 78. The precheck-pending and draft labels are not treated as prerequisite gaps.

The batch-78 dependency-input evidence identifies the full transitive PHS02 chain. The adopted PHS02 model postulate also depends on the units definition, the two published QFT model postulates, the exponential-current lemma, the spectrum lemma, the timelike-scalar/spectral-thermometer lemmas. The PHS02 temperature theorem also depends on the stationary-equilibrium postulate, Killing thermal normalization, the Tolman–Ehrenfest result, and the exponential derivative and mean-value suppliers. The current Step 1 records for the other in-run direct suppliers inspected for the reference-temperature proof are ready. We use no conclusion from the optional stationary local-temperature branch. The PHS03 postulate's extra AC_omega dependency is mathematical/formulation context, not a physical law.

The consuming proof performs the conversion explicitly:
$$T_K=T_{\rm red}=\frac{\hbar c\kappa_{\rm geom}}{2\pi k_B}
=\frac{\hbar\kappa_{\rm acc}}{2\pi c k_B},\qquad
\delta Q_{\rm rev}=\frac{\kappa_{\rm acc}c^2}{8\pi G_N}dA_H.$$
It cancels the positive kappa_acc, proves the coefficient relation on the connected strict domain using a segment argument and the chain rule/mean value theorem, and leaves one additive constant. The B item derives the selected Schwarzschild area from the current SI map, then subtracts two states on the same family so the offset cancels.

## Source reading and dispositions

The A page has two independent full-text treatments, including a complete lecture-note treatment. Their passages provide context for the distinction between the stationary mechanical identity and an added thermodynamic identification; neither is used as a substitute proof.

- Robert Wald, The Thermodynamics of Black Holes, complete 46-page PDF. I read the relevant §2 passages on PDF pp. 6–10 and §3 passages on PDF pp. 10–16. The successful full-body fetch stamp and attempt are reused from current-run batch 77 (46 pages; 357,742 bytes; SHA-256 prefix e6699e090f21eea0).
- Pietro Benetti Genolini, Introduction to Black Hole Thermodynamics, complete 84-page lecture notes. I read §1.3 on PDF pp. 14–16 and §2.1 on PDF pp. 18–20, including the initially unspecified area coefficient and its later quantum calibration. source-fetch-check --stamp fetched the complete PDF (84 pages; 1,089,286 bytes; SHA-256 prefix 2908b394913b1037).
- Wald is recorded as included for the adopted physical context and inline for the conditional theorem and B example. Benetti Genolini is recorded as included for the independent A-page treatment and inline for the theorem and B example. Every disposition, URL, locator, and item mapping is in batch-79.coverage.json.

No source retrieval failed, so there were no recovery retries, drops, alternative proofs, or source-resolution escalations. The earlier Bekenstein query produced a search result only; that paper is not harvested or used. No experimental measurement or empirical premise is claimed.

## Cross-batch edges and readiness

batch-79.cross-batch-dependencies.json records 11 exact in-run edges: 2 page edges and 9 item edges. Eight have a completed scoped interface check and are verified; the PHS02 page requirement and both item uses of pthm-tgr-reduced-horizon-temperature are open because its current Step 1 row is ready/current but its Statement does not carry the AC_omega premise used by its spectrum proof. The open rows preserve the exact current evidence. No off-batch transitive observation is entered as a review row.

All three assigned items now have Step 1 escalated records. The PHS02 temperature and model-postulate records are currently ready/current, but the `pthm-tgr-reduced-horizon-temperature` Statement still omits the AC_omega premise used by its full proof. The escalations record this cross-batch statement-interface defect, not draft status, pending precheck, or missing independent approval. These records are authoring readiness only, not independent proof judgments.

## Scoped checks

- Normative precheck: 3 assigned items checked, 0 failures; the postulate passed the nonproof-structure check.
- Proof layout: 3 assigned items, 8 numbered proof steps, 0 defects.
- Rendercheck: 5 changed item/page files, 0 errors; all math rendered and all YAML parsed.
- Content policy: 3 assigned items, 0 errors and 0 warnings.
- Manifest dependency arrays: 3 items, 0 missing arrays or errors.
- Focused dependency check: 3 selected items; dependency closure 2,674 items on 451 pages; 0 errors and 0 warnings.
- Forward-reference and recorded-not-proved checks: 3 selected items; 0 open references, 0 unproved items, 0 errors, and 0 warnings.
- Strict proof contracts: all 3 items checked; 0 errors and 0 warnings. Scoped proof-contract coverage: 3 items, both proof-bearing items covered, 0 errors.
- Source fetch: 4/4 A/B-page source entries fetch-verified, 0 new stamps, 0 drops. Coverage checklist: 2 pages, 6 harvested source-result dispositions, 0 errors and 0 warnings.
- Scoped in-run item-level recomputation over the 60-item transitive dependency closure: postulate level 12, theorem level 13, B thought experiment level 14; 0 errors. The unscoped run item-level check stops on the two empty tgr-phs04 inventories in unassigned batch 80.
- The current full batch-level recomputation leaves batch 79 at level 7 with requirements 51, 54, 73, 77, and 78, but the shared batch-dependency-levels file still lists only 77 and 78. The full check reports stale batch dependency levels. That shared scheduling file was left unchanged for the owner to refresh at the drained join; the maximum recomputed run level is 8.
- Cross-batch edge audit: 11 expected and 11 recorded direct edges, with no missing, extra, or malformed rows. Eight are verified at the scoped interface level; three remain open for the AC_omega statement-interface issue.
