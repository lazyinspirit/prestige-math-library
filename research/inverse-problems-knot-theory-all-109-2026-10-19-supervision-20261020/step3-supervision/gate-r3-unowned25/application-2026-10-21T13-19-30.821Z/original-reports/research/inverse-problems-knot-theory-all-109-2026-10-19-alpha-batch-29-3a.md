# Batch 29 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-29`.

Scope: exactly three touched obligations; no reader/refuter findings, page obligations, or foreign gates. Six HIGH/CRITICAL risk reviews are required. Native state on disk is at `3a-read`; recent Git log checked. All eight initial raw item hashes equal the post-reader snapshot.

## Dependency-ordered independent review

- Level 4 `alg-ip-regularized-levenberg-marquardt`: complete Definition and direct prerequisite interfaces reviewed. Domain/discrepancy/budget order, zero residual, zero budget, positive damping, exact calls and all return statuses are sound. AComega enters Hilbert adjoint and shifted normal invertibility. Risk review recorded before proceeding. Found and corrected nonfatal source locator: Kaltenbacher PDF p.63 contains the stated LM formulas; PDF p.80 contains loping Landweber Kaczmarz. This does not alter the Definition or its consumers. The well-definedness lemma was opened only to assess the algorithm claim.

Sources actually read so far: Clason https://arxiv.org/pdf/2001.00617v2, PDF pp.109–110 (printed106–107), §11.2 through Theorem11.8 proof and Lemma11.9 statement; Kaltenbacher https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf, PDF pp.63 and80. Browser PDF screenshots failed; complete relevant page text was recovered with PyMuPDF from downloads. No whole-book reading is claimed.

Review completed below in the generated dependency order.

- Level 4 `lem-ip-lm-product-condition-implies-range-approximation`: all four steps and exact product-condition/norm/forward-map statements checked. With E the two-point remainder, target=E+y-yδ and ||E||≤ce(R+δ); δ<R/τ gives [1+ce(1+τ)]R/τ. The point-distance hypothesis forces e≥0. The e≤e0 specialization gives σ/γ exactly. δ=0 and e=0 are valid, R=τδ is excluded, V nonempty follows from its supplied points; no choice. Reader blank-line repair accepted; no mathematical change or defect.

- Level 5 `lem-ip-lm-step-existence-and-residual-forcing`: all six proof steps reviewed. Shifted normal invertibility and quadratic expansion prove the formula and unique minimum; minimizer comparison bounds ||hα||≤||r||/√α. Resolvent identity proves local positive-parameter continuity. At infinity f→||r||; the supplied nonzero witness gives f(a)<σ||r|| for small a>0. IVT on [a,b] yields forcing. The exclusions r≠0, σ∈(0,1), γ>1 are essential; T=0 cannot satisfy the range hypothesis. AComega only through Hilbert interfaces; no DC or closed-range limit. Risk complete. Reader formatting accepted with the locator amendment to PDF p.63; no Statement change.

- Level 5 `ex-ip-lm-scalar-regularized-step-stability`: complete five-step verification and published exact safeguarded LM/QR procedures checked. Square completion proves the unique minimizer; (ε−√α)²≥0 yields the fixed-damping bound, sharp at ε=√α and r=δ. Forcing instead makes α scale with ε² and the increment diverge for fixed r>0. This compares subproblems, not a live discrepancy update (the selected datum would already stop). Supplied scalar reduced QR has s>0, QᵀQ=1 and correct right-hand-side sign. Affineness gives ratio1 and strict interior trust radius leaves damping unchanged. Risk complete; only the same source locator is repaired.

- Level 6 `lem-ip-lm-fejer-decrease-and-parameter-bound`: four steps and actual adjoint, CS, absolute-value, norm statements checked. First variation is valid in both signs of real t; αh=T*q. With q=r−Th and w=Te+r, expansion has the correct signs and gives the displayed decrement using exact forcing. Applying T yields (TT*+αI)q=αr and hence α≤σM²/(1−σ); division uses r≠0 and σ<1. Zero-vector operator bounds are handled explicitly. Clason Lemma11.9 complete proof read on PDF pp.110–111. Risk complete; reader formatting retained with no mathematical defect.

- Level 7 `thm-ip-lm-local-discrepancy-stopping`: entire proof and exact suppliers reviewed. The finite-induction construction preserves e≤e0 and ||x−x0||≤2e0<2r, so no local hypotheses are presumed outside the ball. No DC is needed: the positive finite bound uses only finite paths. Found a nonfatal proof computation error in 3.1: the telescoped lower bound omitted D on the left. Repaired it to D m τ²δ² < D ΣR_n² ≤ e0² for m≥1. The existing contradiction threshold and finite bound were already the correct ones. The ordered pair (x_n,x_next) uses derivative at x_n, producing the norm of −Δ_n, as required. Hence R_next≤qR_n. First-crossing/logarithm argument has the correct reversed inequality and explicitly covers N=0,1. The complete claim, positive-noise hypothesis and logarithmic index bound are unchanged; no stopped-solution rate follows. Clason Assumption11.10 and entire Theorem11.11 proof read on PDF pp.111–113. Risk complete. Local repair verdict: amended_repair, confidence1 (newly discovered risk-review defect; no additional routed obligation invented).

- Level 8 `cex-ip-lm-zero-noise-discrepancy-stopping`: all three proof steps and entire refuted formulation checked. Identity map satisfies derivative/remainder conditions with c=M=1; e0=1/16 is below 1,1/8,1/4. Exact scalar forcing uniquely gives α=1, h=r_n/2, hence r_n=2^(−n)/16>0 at every finite n. The item explicitly defines the zero-noise extension; it does not treat δ=0 as admissible in the positive-noise algorithm. The counterexample refutes precisely the finite-zero-threshold extension. Risk complete; no defect or edit.

## Historical comparison

All eight initial raw SHA256 values matched the post-reader snapshot. For each of the three touched lemmas, the exact pre-reader SHA256 was reconstructed in memory by replacing only the four-LF gap after `## Proof` with the current two-LF gap (reverse direction for hash reconstruction). Every other blank-line run in the proof remained two LFs. This proves the pre/post delta is whitespace only; the reader report's description of adding inter-step separation is imprecise. No missing historical bytes or owner current-content exception is needed. Current content was independently reviewed, and no historical acceptance was inherited. The existence lemma additionally receives the present citation-locator amendment.

## Confirmed defects and local repair decisions

<a id="source-locator-decision"></a>

`ipkt109-b29-3a-kaltenbacher-locator`: confirmed_nonfatal; local repair accepted with confidence1 in the algorithm, existence lemma and scalar example. Reference titles now identify PDF p.63. Source and manifest metadata are synchronized. Coverage retains prior locators and actual-reading claims as qualified historical evidence and now supplies the independently checked current locator; author notes have an explicit correction. No mathematical interface changed. The formal routed existence decision is `amended_repair`.

<a id="stopping-coefficient-decision"></a>

`ipkt109-b29-3a-stopping-telescoping-coefficient`: confirmed_nonfatal; local `amended_repair`, confidence1. Step3.1 now includes D and m≥1. D may be smaller than1, so the old displayed lower bound did not follow; the corrected inequality immediately justifies the already stated threshold m>e0²/(Dτ²δ²). The complete theorem and its dependencies are unchanged. No prior judge stamp was present on any edited item; this small proof repair does not carry mathematical acceptance forward. This new defect arose during required risk review of an originally untouched carrier. The decisions array contains exactly the three authenticated touched obligations; this paragraph is its explicit additional local defect disposition, rather than an invented fourth routed obligation. Both confirmed defects have one closed 3a-adjudicate ledger row each.

The product and Fejer reader whitespace repairs receive `accepted_repair`, confidence1, with no defect rows because the pre/post change is mechanical spacing.

## Presentation, prerequisites, and ownership

All eight owned Statements/Definitions/Example descriptions are uninterrupted by hyperlinks; their separate references sections retain all links. Proofs retain necessary supplier links. Both A/B pages have empty bodies and compact-v1; inventories and status are unchanged. No TikZ/tikzcd or other diagram occurs, and none is needed for these algebraic/operator arguments.

Read the current direct cited prerequisites used in each argument: real Hilbert/real inner-product and bounded-operator/norm definitions, nonlinear forward-map and Frechet derivative definitions, one-basepoint and product TCC, Hilbert adjoint/shifted-normal inversion (including its complete closed-range proof), AComega, norm triangle, real absolute-value and Cauchy–Schwarz statements, Hilbert adjoint properties, IVT, square roots, logarithm definition/laws and Archimedean naturals; also the complete exact safeguarded LM procedure and relevant exact QR callee. Found no defective published supplier in those actual uses. This is not a re-audit of all foundational ancestors or unused computed/SVD branches.

No Statement or Definition changed, so no new supplier-interface propagation is triggered. The counterexample's use of the stopping theorem was checked against its unchanged statement. Existing cross-batch records retain their history and limitations; the frontier dependency ledger records this current bounded review. No published file, outside batch, stable ID, proposed withdrawal or page inventory was changed. No published finding, unmet prerequisite, unresolved escalation or owner decision remains.

## Local checks and handoff

- `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-29.proof-contracts.json`: 8 items routed, six HIGH/CRITICAL, zero errors before reviews. Final rerun with `--require-reviewed`: zero errors; six complete item-specific reviews recorded.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-29.proof-contracts.json --strict`: 0 errors, 0 warnings, 8/8 checked.
- `node tools/tsx-run.mjs tools/reflow.mts` on the four edited carriers (algorithm, existence, scalar example, stopping theorem): all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven proof-review carriers including the algorithm: six proof phases checked, zero failures; algorithm has no proof phase.
- `node tools/rendercheck.mjs` on the four edited carriers: all four pass actual KaTeX and renderer YAML parsing.
- Final single batched `node tools/proof-layout.mjs` on algorithm, product-range lemma, existence lemma, scalar example, Fejer lemma and stopping theorem: 6 items, 25 steps, 0 defects. No subsequent item edits.
- Scoped consistency: exactly three owed decisions, six complete risk reviews, eight uninterrupted claims, and three synchronized current manifest source locators.
- Native append recorded two closed nonfatal defect rows and refreshed the generated defect-ledger view. No ledger row was created for whitespace or failed tool availability.

Tool limits: an initially guessed `refuter-29.md` filename was absent; the actual `refute-29.json` was found and read in full. Python is available as `python3`; PDF text extraction used PyMuPDF after discovering that `pdftotext` was unavailable. Browser screenshot retrieval failed and supplied no source evidence. These mechanical attempts create no mathematical findings. Both downloaded sources supplied the complete relevant text subsequently read.

Report and decisions are ready for the engine. No judge invocation, stamp, dispatch, full gate battery, publication, push or stage transition was performed. No blocker remains.


Owner bookkeeping classification

Root corrected clean metadata/audit-enrichment classification using the original native no-defect evidence and exact recovered full preimages, archived in research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r1-seven-empty-refs/native-originals/. No native execution, mathematical audit or defect was created. Native substantive evidence is preserved.
