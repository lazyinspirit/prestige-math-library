# Batch 5 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-5`; assigned batch: 5.

## Definition review

`def-fd-x00`: amended_repair; retain the sound reader Definition repair and synchronize its stale manifest mirror. Historical source `research/fluid-dynamics-all-47-2026-10-23-owner-step2-baseline/items__def-fd-x00.md` has exactly the frozen pre-reader SHA256 `846ab43da5514f3a658aed27c149ae4da818b2349b115a0c0b9a17abf6fdfd58`; current source matches the post-reader item hash. The diff supplies actual preimage evidence, without reconstructing missing bytes. It explicitly supplies q/p/rho maps and regularity, right-handed cross product, identity matrix, barotropic meaning, steady spatial field and exterior-domain scalar/vector directional limits. No displayed PDE changed. Positive density and coefficient hypotheses cover all divisions; no existence claim or empirical inference is introduced. The six cited mathematical definitions were read; their coordinate operators, path integrals and parametrized surface flux conventions agree.

All 24 direct in-run consumer uses were inspected across batches 5, 6, 7, 13, 14, 39 and 46. The unchanged derivative and PDE uses remain valid; steady streamlines use the spatial velocity, exterior spheres contain every sufficiently distant sphere, periodic consumers specify lifts, and the rotating mode has smooth q. No necessary consumer repair changes another interface, so no further propagation is required. Out-of-batch consumers were not edited. Exact direct-consumer IDs and dispositions are listed below. The reader's aggregate descendant count is historical evidence, not an independently claimed complete indirect audit.

Reader findings `reader:5:1` and `reader:5:2` are confirmed nonfatal: the gradient explanatory basis uses n/F rather than m/R, and the Euclidean space explanation has merged prose. Explicit coordinate formulas remain usable; published mathematics stays read-only. Published maintenance is recorded in the canonical published ledger; each finding has its own closed nonfatal-recorded scoped defect row.

Risk report ran without `--require-reviewed`: five HIGH/CRITICAL items. The Definition risk review is complete in its owning contract. The following checkpoints record the subsequent completed reviews in dependency order.

## Tanh lemma review

`lem-fd-x03-tanh-error-bounds`: all three steps sound. The five supplier statements give globally defined hyperbolic functions, cosh positivity, derivatives/monotonicity, exponential addition/reciprocity and the closed-interval MVT. The two monotonicity arguments use continuous functions on [0,s] when s>0 and handle s=0 separately. The second bound is the exact identity 2/(exp(2s)+1) followed by denominator comparison. Risk review complete; no decision owed for this untouched, unflagged item. No AC or empirical premise. 

## Nondimensionalization review

`thm-fd-x01`: reviewed_no_defect, audit_enrichment. Current item bytes equal both frozen snapshots; the touched obligation concerns refreshed supplier excerpts in the contract. All five steps checked. Acceleration and scaled pressure have factor U²/L, viscosity U/L², mass ρ₀U/L, compressible pressure c²/L and potential U²/L. Positive parameters permit reversal in both systems, preserving positive density and the constitutive constraint for p*. Open coordinate slices meet the scalar chain-rule hypotheses; empty domains are vacuous. No asymptotic assertion or solution existence follows. Risk review complete.

## Acoustic and rotating mode review

`thm-fd-x02`: reviewed_no_defect, audit_enrichment; item unchanged against both snapshots, contract supplier excerpts refreshed. All eight proof steps and fifteen declared supplier interfaces checked, including the two local lemmas' proofs. Linearization is pointwise, with positivity only for sufficiently small epsilon at each point. Mass cancels for all omega; nonzero A and k make momentum equivalent to omega²=chi|k|², using phase surjectivity and S′(0)=1. The zero mode permits arbitrary omega. The growing mode's sign and lambda²=-chi|k|² are correct. A transverse a is chosen from finitely many standard basis vectors; no AC. The projected rotation calculation and q sign give exactly w_t+2Omega×w=-grad q and zero divergence. Omega=0, signed/zero alpha and W=0 remain valid. All stated derivatives follow from the supplied real trigonometric derivative identities. Risk review complete.

## Finite-depth mode review

`thm-fd-x03`: reviewed_no_defect, audit_enrichment. All six steps checked; eight exact supplier interfaces support every use. Positive h,g,k imply positive s, tanh(s), omega and the cosh denominator. The profile solves G″=k²G, G′(-h)=0, G(0)=1, G′(0)=k tanh(kh). These verify the interior/bottom equations and both surface signs. Smooth explicit expressions extend through the faces; a=0 is valid. Relative squared shallow error is (s-tanh(s))/s, the frequency bound factors 1-r², and deep squared error is 1-tanh(s). No zero denominator, missing converse, nonlinear approximation estimate or empirical inference. Risk review complete.

## Consumer dispositions

All direct dependency uses below remain sound under the reader clarification; no consumer source changed. No repaired consumer interface requires an additional hop. The declared in-run set has 24 entries; direct reference-only uses were also searched in current item bodies and are reported below.

- Batch 5: `thm-fd-x01`, `thm-fd-x02`, `thm-fd-x03`.
- Batch 6: `thm-fd-x04`, `thm-fd-x05`, `thm-fd-x06`, `thm-fd-x08`, `thm-fd-x09`, `def-fd-incompressible-euler-system`, `thm-fd-x13`.
- Batch 7: `thm-fd-x07`, `thm-fd-x10`, `thm-fd-x11`.
- Batch 13: `pthm-fd-px05-prediction`, `pthm-fd-px08-prediction`, `pthm-fd-px09-prediction`, `pthm-fd-px13-prediction`, `ex-fd-x05-application`, `ex-fd-x08-application`, `ex-fd-x09-application`.
- Batch 14: `pthm-fd-px07-prediction`, `pthm-fd-px10-prediction`.
- Batch 39: `def-fd-rotating-stratified-shallow-equations`.
- Batch 46: `def-fd-wall-defect-capillary-models`.

Direct reference-only authored consumers: none.

## Source checks and limits

Published mathematical inputs were read at their exact local Statement/Definition sections, including the six operator/integral definitions, five tanh suppliers, scalar chain rule, square-root existence, trigonometric dictionary/identities, exponential derivative, Cauchy–Schwarz, cross-product bilinearity/orthogonality/norm and standard basis. The local real trigonometric and triple-product lemmas were checked through their proofs; complex derivative and real-total-derivative supplier statements justify restriction to the real axis. The complex exponential definition and absolute-convergence supplier make its series well-defined. Published status is not substituted for checking actual hypotheses. This is a scoped supplier-use review, not a complete transitive audit of the mathematics library.

External primary-source passages retrieved during this review:

- [Stewart, MIT 8.09 Chapter 6](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf), §6.5 printed pp.124–126 and §6.7 printed pp.133–134, equations 6.95–6.96 and 6.133–6.134: acoustic linearization and Reynolds/scaling conventions. Local proofs supply the exact conditional claims and stronger caveats.

- [MIT 16.01 F5](https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf), pp.1–4, specifically the Reynolds ratio on p.1 and Mach ratio on p.3: parameter context; empirical approximations in those notes are not premises of the exact local scaling theorem.

- [Lindley, Warwick support class 6](https://warwick.ac.uk/fac/sci/masdoc/people/studentpages/students2012/lindley/fluid_dynamics/fluidssupport6_2015.pdf), §1 p.1, equations 1.1 and 1.7: rotating-system sign and dispersion. The local proof handles general orientation and zero signed frequency explicitly.

- [Feddersen, Linear Surface Gravity Waves 1](https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf), §§2.2–2.4, equations 2.14–2.19, PDF pp.4–6: linear boundary problem, separated mode and dispersion. The source potential coefficient (aω/k)/sinh(kh) equals (ag/ω)/cosh(kh) under ω²=gk tanh(kh). The local theorem supplies its quantitative bounds independently.

- [Firing, OCN 620 chapter 19](https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html), §§19.3–19.4: wave variables and shallow/deep comparison frequencies. Its physical regime rules do not replace the locally proved error estimates.

The Zahn MIT 6.013 URL returned an access error through the web tool. No successful retrieval of that PDF or Stein–Shakarchi's external text is claimed; the mathematical complex-function inputs were checked from the exact local suppliers, and Stewart independently supplies the acoustic source context. No unresolved mathematical prerequisite relies on those unavailable external readings. No experiment, measured input, statistical estimate, postulate acceptance, or claim of empirical truth is made.

## Decisions, maintenance and diagrams

Exactly six decisions are owed and supplied: four touched carriers and two reader findings. No page or refuter finding is owed. The three theorem touched decisions are audit enrichment with empty defect IDs, since only supplier citation excerpts changed. The definition is amended_repair with confidence 1 because the reader's sound item change required manifest synchronization. Its closed fixed defect row is `fluid-dynamics-all-47-2026-10-23-3a-batch-5-definition-completeness`. The two published rows end in `gradient-basis-prose` and `euclidean-space-prose`, each owned at 3a-adjudicate and closed as nonfatal-recorded. Original mathematics-owner maintenance remains OPEN in the published ledger; no import or original was edited.

No TikZ/tikzcd diagram occurs in the routed items, and no diagram is needed for their coordinate derivations. Both assigned pages remain frontmatter only with compact-v1 and preserved inventories. No withdrawal or substantial prerequisite escalation is pending. The engine owns decision hashes, gates, scheduling and later review; no stamping or judging was performed.

## Focused validation

- Risk report on the batch-5 contract, without `--require-reviewed`: 11 items routed, five HIGH/CRITICAL, zero errors. Repeated with `--require-reviewed` after all five specific reviews: zero errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-fd-x00.md items/lem-fd-x03-tanh-error-bounds.md items/thm-fd-x01.md items/thm-fd-x02.md items/thm-fd-x03.md`: four proof carriers checked, zero failing; definition has no proof steps.
- `node tools/physics-support/rendercheck.mjs` on the same five paths: five files pass real YAML/KaTeX checks.
- After all item edits, `node tools/physics-support/proof-layout.mjs` on those five paths: five items, 22 steps, zero defects. No item source was edited during this adjudication; the reader's definition repair remains byte-identical.
- `node tools/physics-support/defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23`: 29 run rows checked, zero errors at execution. Three scoped rows appended through the serialized append tool, with the generated view refreshed.
- All current batch-5 contract quote strings checked as exact substrings of their supplier source. Four touched item raw hashes checked against frozen post-reader hashes: all match. The three theorem raw hashes also match their frozen pre-reader hashes.

No gate battery, judge cycle, decision stamping, publication or commit was attempted. The engine must stamp and validate the current decisions and changed manifest/contract metadata.

The strict local contract validator `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-5.proof-contracts.json --strict` passed all 11 items with zero errors and warnings. Tool-discovery attempts at the nonexistent plural `proof-contracts.mjs` and at `statement-first-check.mjs --help` failed before content checking; the correct singular contract validator was then used. The latter checker requires run/domain arguments, so no statement-policy pass is claimed from its help attempt. Direct inspection found uninterrupted routed Statement/Definition sections with references afterward.
