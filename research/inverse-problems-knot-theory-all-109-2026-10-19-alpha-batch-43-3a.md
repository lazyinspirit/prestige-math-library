# Step 3a adjudication — batch 43

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-43`. Scope: batch 43 only. Independent Alpha review; no judge, stamp, native gate battery, acceptance or publication claim.

## Decisions

Exactly two obligations were owed and decided. The original scope assignment group `o` is preserved. There are no page, refuter or authenticated foreign-gate obligations.

- `touched:43:ex-ip-outside-neumann-norm-ball` — **amended_repair**, `repair_confidence: 1`; closed defect `ipkt109-b43-3a-kernel-diagonal-qualifier`.
- `reader:43:1`, `def-euclidean-inner-product` — **confirmed_nonfatal**; closed `nonfatal-recorded` defect `ipkt109-b43-3a-published-euclidean-prose`. Published prose maintenance remains with the owner; this disposition is not a source repair.

Decision evidence is in `research/inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-43-3a-decisions.json`. Both referenced ledger rows are at `caught_at_stage: 3a-adjudicate` and `status: closed`.

## Dependency-ordered mathematical review

Read current carriers, their actual direct dependency statements/definitions, relevant supplier proofs, the reader report/findings, refuter artifact and pre/post hash records. Prior author/reader/refuter judgments were evidence only. Reviewed and checkpointed each item's risk evidence before advancing to the next higher dependency level. All seven complete reviews are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-43.proof-contracts.json`, with reviewer `alpha-batch-43`.

| Level | Carrier | Independently checked argument and boundaries |
|---|---|---|
| 0 | `def-ip-fixed-frequency-far-field-data` | Positive finite volume, bounded measurable D and k>0; quotient-class volume operator, strict rho<1 branch, unique L2 solution from the existing Neumann supplier without a justified_by cycle. q=0 yields zero data. Zero-volume and rho=1 cases are excluded. Multiplying plane-wave phases gives exactly k(theta-d)/(2pi) and normalization 1/(4pi), including theta=d. All eleven direct interfaces checked. |
| 1 | `lem-ip-small-contrast-scattering-map-well-defined` | Five proof steps: linearity in q plus operator bound gives Lipschitz rho and openness; Neumann supplies existence/uniqueness; L2 pairings give L1 products and representative independence; zero extension is L1 and Fourier formulas agree; the far-field supplier gives continuity and precisely the stated uniform outgoing estimate for r>=2R0. All supplier hypotheses hold. |
| 1 | `ex-ip-outside-neumann-norm-ball` | Four Verification steps: box volume M=1/64, diameter d=sqrt(3)/4, exponential derivative/FTC implies Re exp(ir)>=1-d>1/2. For a.e. x the integrable kernel section exceeds 1/(8pi d) off a null singleton. Positive level sets make the excess integral strictly positive, giving qM/(8pi d)=1/d=4/sqrt(3)>2. The second level-set argument yields norm-squared >4M; normalize 1_D to obtain ||K||>2. This says nothing about nonexistence/nonuniqueness. |
| 2 | `lem-ip-born-linearization-of-the-scattering-map` | Five steps: Born functional bounded by M/(4pi); N=0 Neumann tail and L2 pairing give the uniform remainder. Monotonicity of t/(1-t) on [0,1) gives the quadratic sufficient-condition bound. Its quotient by ||q|| tends to zero, on an open domain with complete realified L-infinity source and C target, proving the scalar real Fréchet derivative at zero. No joint-data-topology or global nonlinear-uniqueness inference. All thirteen direct interfaces checked. |
| 3 | `alg-ip-regularized-born-reconstruction` | Finite cell integrals give Fc with the correct Fourier sign/scale. The reduced SVD is supplied input; coefficients use the declared first-variable-linear inner product. B=0 returns no estimate; B>=1 applies a finite-valued filter once. Rank zero, zero data, sigma=tau, delta=0 and both residual branches are covered. Actual threshold Definition and complete batch-2 Picard proof independently read. Picard is only an exact-range caveat: orthogonality and square summability are required; finite residual is not a nonlinear solution certificate. No proof of a general algorithm property is embedded in the procedure. |
| 3 | `ex-ip-small-volume-contrast-in-born-regime` | Three steps: positive fourth root exists by the actual root theorem; M=ell^3 and diameter=sqrt(3)ell give C_D^2=1/8 and C_D=1/(2sqrt(2))<1. The strict branch is established before applying the Born bound; C_D/(1-C_D)=1/(2sqrt(2)-1) gives exactly the stated uniform constant. No zero cube or denominator endpoint is admitted. |
| 4 | `ex-ip-limited-aperture-born-data-have-a-nontrivial-kernel` | Five steps: the m+1 slabs partition the closed cube, including its final face, and have positive measure. Rank-nullity over C gives a nonzero coefficient vector even with repeated directions; positive-measure cells make h a nonzero L-infinity class. Nonzero sufficiently small scaling preserves zero Born samples and gives rho<1 (e.g. t=1/(2(1+C_D||h||infty))). Zero data returns zero for every admitted filter and positive budget, including delta=0. The finite-data kernel does not claim identical nonlinear or full open-aperture data. |

Countable Choice is the declared analytical branch through complex Lp completeness, volume/Neumann interfaces and box measure; finite-dimensional witnesses and finite filtering do not require full AC. Essential-bound results for real functions are applied to real |q| when bounding complex contrasts. The exact supplier IDs and item-specific caveats are retained in contracts and manifests.

The batch-2 Picard supplier's actual proof was checked: Bessel proves necessity; square summability makes the right singular expansion Cauchy; continuity and completeness of the left singular family prove sufficiency; orthogonal splitting gives the full pseudoinverse-domain characterization. Empty singular systems and finite rank are included. No unresolved supplier defect was found in this use.

## Touched repair and carrier comparison

Pre-reader item SHA256: `148cce4ced35add1f0df97436d1c8fc737214188a7eb9c60c3d3fe4b84fedfe3`.

Post-reader and actual pre-Alpha SHA256: `0599a46f75e595a98a8fe9f5e67cf5122247923fb3b17aa2b26beff19a07e56d`, also present in git commit `66722d74a1`. Contract hashes change from `80e2671573dccae996206c0f0ed45295157ab0b2015d55cbcfcc165999bf50b0` to `70f6f335cb8264971ea79b04bda03e4ca6e0023db44c75f6014052aba0946920`; the manifest remains `fa34ca339e63dc5ce22d8fe0bc1594cdc2af857d8f5e1961698f8f0f9c804cc6`.

The reader report describes adding the positive-level-set explanation for strict integration. That explanation is sound nonfatal elaboration. Alpha independently found and corrected its false pointwise adjective “nonnegative”: at y=x the specified representative G_1(0)=0 makes the difference -1/(8pi d), although it is positive almost everywhere. Removing that adjective preserves the full argument. Only Verification 3.1 and its exact derivation claim changed; no original Statement/Definition, dependency, claim strength, manifest or provenance changed. No prior judge record existed. No consumer interface change or surgical consumer repair is required. The original pre-reader full text was not reconstructed from its hash; the historical account of the clarification comes from the reader report, while the amended verdict is independently supported by the exact post-reader carrier and current correction.

Current edited raw SHA256: `d8fb7c8dbaca2147f408576e6859840bd62e642273b1b96c87c11d4000d99dc1`. The other six assigned item files exactly match their post-reader raw hashes.

## Published finding and consumer disposition

The complete current `def-euclidean-inner-product` Definition was inspected. Its sentence beginning “This is the same set that” embeds a metric-title fragment and ends “calls R^n”; this is ill-formed explanatory prose. Explicit dot-product/norm formulas, finite algebra, positivity, the n=0 zero-space convention and the n>=1 metric qualification remain sound. The fixed-frequency definition and both cube examples use only the explicit n=3 coordinate formula; no invalid calculation or consumer repair follows.

Current raw SHA256: `325f74cbe5db7d12ba4a6e6d50e7984e0e309b47b4f1ad0acdad4c87d77c7bb1`. Canonical guard `c614fb6351357f225a6033801a698efc323d85bd240141df60acb77528619b5c` matches the routed pre_sha256. SHA256 of the canonical raw-byte carrier wrapper is `09e04850d4c2254b0287b0b3a4b923a917ec4cd27a378d986aab1c6e274b5a07`, matching observed_sha256. No unbound historical disposition is claimed.

The published file was left read-only. After acquiring `research/.published-consumer-ledger.lock`, the ledger was reread and merged; only this worker's lock was released. Exact consumer/supplier IDs, source evidence, pending owner grammar strategy and closed bounded finding were added to `research/published-consumer-supplier-ledger.md`; its existing single A-P classification row was enriched without duplicating it. Prior entries/escalations were preserved. Owner should replace the malformed sentence with coherent prose identifying the same function space for n>=1, preserving formulas, n=0 algebra, references, dependencies and published status.

The four stable owned cross-batch rows remain in the batch dependency artifact; the actual algorithm/Picard use now records this independent current review. Existing three page prerequisite rows retain navigation scope/history. Owned-consumer dispositions were appended to `briefs/tasks/frontier-dependency-ledger.md`. No withdrawal was proposed or removed, and no outside-batch or published source was edited.

## Sources and diagrams

- [Cakoni–Colton–Haddar](https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf): read printed pp.9–11, Theorem 1.9 and proof, (1.21), (1.22), first Born formula; printed pp.18–19, (1.34)–(1.36), derivative discussion and Theorem 1.21 statement. Under m=1-n, our q=-k^2 m. The local remainder and strict-norm proofs supply the authored analytical estimates; source smoothness/physical/global-uniqueness conclusions are not imported. No claim to have read the external proof cited by Theorem 1.21.
- [Scherzer–Mindrinos](https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf): read printed pp.80–81, smooth-medium hypotheses, volume-potential statement, Theorem 5.28 and complete equivalence proof. Its C1 refractive-index and C2 solution regime checks conventions only; it does not replace the local L-infinity/Neumann proof.
- [Dyatlov](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf): read §11.1.1 Definition 11.1, printed p.119, to check the exp(-ix dot eta) convention and eta=2pi xi rescaling. No other PDE or Fourier theorem is imported.

Source retrieval limits: web PDF text was available; several screenshot requests failed. Downloaded CCH/Vienna relevant pages were recovered using PyMuPDF after finding pdftotext unavailable. No unavailable source proof was claimed as read.

The assigned Born TikZ has endpoints (2,0), (1.2,1.6), both radius 2, and the arrow from kd to ktheta is the labeled k(theta-d). Normalization divides the chord by 2pi. The external Picard supplier square commutes by K(lambda v_j)=lambda s_j u_j. Proofs remain independent of drawings. No assigned diagram repair/addition was needed.

Both assigned pages have empty Markdown bodies, preserve `page_layout: compact-v1`, and match the manifest inventories/prerequisites. No summaries or page edits were made.

## Local validation and limits

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-43.proof-contracts.json`: all seven items routed HIGH/CRITICAL; zero tool errors. After the complete reviews, the same command with `--require-reviewed`: seven routed, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-ip-outside-neumann-norm-ball.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-ip-outside-neumann-norm-ball.md`: one checked, zero failures.
- Final post-edit/post-formatter `node tools/proof-layout.mjs items/ex-ip-outside-neumann-norm-ball.md`: one item, four steps, zero defects. This is the only changed item path.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-43.proof-contracts.json --strict`: 7/7 checked, zero errors/warnings; all unchanged citation excerpts still match actual sources.
- `node tools/rendercheck.mjs` with the seven explicit assigned item paths and two explicit assigned page paths: nine files, zero errors.
- Scoped `inspectStatement` calls on the seven actual manifest items: zero uninterrupted-section defects.
- `node tools/defect-ledger.mjs validate --ledger /tmp/ipkt43-ledger-check.jsonl`, using exactly the two newly appended rows: two rows, zero errors.
- Focused `git diff --check` on the changed item and batch artifacts: clean. Decisions have exactly two distinct owed obligations. Published raw/guard/wrapper hashes and six unchanged post-reader item hashes independently verified.

A CLI-discovery mistake invoked `node tools/rendercheck.mjs --help`; this tool has no help mode and scanned the whole corpus, exiting with 35 errors across 42,275 files. A stop attempt came after completion. That unrelated broad result was not used as scoped validation and no outside repairs were attempted. The later explicit nine-file render check passed. No global pass is claimed.

Current `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19/status.md` read from disk reports the active run running, with Step 3a adjudication incomplete; this agrees with the current git history and is not inferred from old handoffs. No engine state/control or scheduling transition was changed.

There is no unresolved substantial mathematical prerequisite in the owned batch. The published nonfatal prose maintenance remains pending with the owner as recorded. The engine owns decision hashes, the gate battery and stage advancement.

Current handoff revalidation (2026-10-21): the existing report, decisions and amendment were already present when this review opened them. Independently checked the current seven carriers, direct dependency statements, volume/Neumann/far-field proofs and complete Picard argument; the conclusions above remain supported. Rechecked CCH printed pp. 9–11 and 18–19, Vienna pp. 80–81 and Dyatlov Definition 11.1, p. 119. All six unamended item raw hashes match the post-reader record; the amended example and published prerequisite match the raw hashes recorded above. Both decisions still reference exactly one existing closed ledger row each; no duplicate rows were added. Fresh strict contract checking (7/7), required risk checking (7 routed), example precheck (1/1), explicit nine-file rendering, bounded two-row ledger validation and focused whitespace checking all passed. The final proof-layout run again reported one item, four steps and zero defects. Both page bodies remain empty. No additional item edit, source repair, judge cycle, stamp or engine transition was performed in this revalidation.
