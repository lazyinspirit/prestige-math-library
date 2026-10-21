# Step 3a adjudication — batch 35

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-35`. Covers exactly batch 35.

## Scope and outcome

Read the dispatch and generated dependency order, canonical repository instructions, reader report/findings, `step3-scope-35.json`, both hash snapshots, native `refute-35.json`, current batch contracts and manifest. Live `.autopilot/` status reports an active Step-3 run; `git log -3` has head `ace06e03bc`. Historical handoffs were not used as authority. No foreign gate obligations, touched carriers, page obligations or refuter findings are routed. Exactly two reader obligations are owed and decided below.

All seven current batch item raw hashes equal both pre-reader and post-reader snapshots; the two page hashes also equal post-reader. No reader repair needs acceptance, amendment or reversion. No item, page, manifest, provenance or judge record was edited. Only the four required risk_review records were added to the owned proof contract. The two published findings remain source-maintenance alerts; their closed nonfatal-recorded ledger dispositions do not claim source repair.

## Dependency-ordered mathematical review

The following reviews were completed and checkpointed in this report and the contract before proceeding to the next risk carrier: level 2 proposition, level 2 PDE example, level 3 Stiefel lemma, level 3 line example. Current source and supplier content, rather than prior verdicts or scaffold boundary claims, supplied the evidence.

### `prop-ip-constraints-can-remove-kernel-ambiguity`

Independently checked Proof 1.1 and 2.1 against current F1 admissible-class Definition, F2 linear-map Definition and F3 kernel Definition. Both implications preserve real-vector-space domains. Nonempty C witnesses 0 in C-C; a singleton and A=0 satisfy the stated equivalence, while empty C would invalidate equality to {0} and is excluded. Choosing one element needs no AC. No stability conclusion is inferred. Published F3 inline-link presentation finding reader:35:1 is nonfatal and will be routed read-only.

### `ex-ip-pde-inadmissible-state-rejected-before-solve`

Independently checked Verification 1.1 and 2.1 against the current admissible-class and linear-map Definitions. With h=1/3 and zero boundary values the stencil is 9[[2,-1],[-1,2]], and matrix multiplication is linear. C contains (0,0); (-1,1) fails its first inequality. The explicitly pre-solver validator rejects this candidate, with no assertion about continuum positivity, PDE solvability or solver convergence. Zero coordinates are admitted. No source import or AC is required.

### `lem-ip-stiefel-gradient-finite-budget-return-and-feasibility`

Independently checked every current proof step and F1/F4 procedure, F2 tangent theorem, F3 retraction theorem, and polar Definition. Step 1.1 cancels the symmetric part; 2.1 uses trace of symmetric times skew-symmetric equals zero and positive definiteness for uniqueness of the tangent metric dual. Only the supplied C1 derivative is used. Step 2.2 gives Gram=I+eta^T eta positive definite for every tangent step, so polar outputs stay in St(n,p) inside U. Step 3.1 bounds trials by K, checks acceptance inequality and both status implications. K=0, equality r=tau, g=0, p=1 and p=n, lambda=0, rejection after a failed residual test and final accepted trial all obey the claims. No AC, finite-precision, convergence or global-optimum assertion. Independently read Absil et al. Chapter 3 Example 3.6.2 p.48 and Chapter 4 Example 4.1.3 p.59; real Frobenius and tangent polar formulas agree (their St(p,n) has reversed parameter notation). Published first-order theorem inline-link finding is nonfatal; its local polar proof and actual domain satisfy this use.

### `ex-ip-constraint-eliminates-a-kernel-direction`

Independently checked both Verification steps against current admissible-class Definition and the fully reviewed kernel criterion. A(s,t)=s is linear by coordinate arithmetic; C0 is nonempty. Its difference set is the horizontal axis (each (a,0)=(a,0)-(0,0)); the kernel is the vertical axis and their intersection is exactly {(0,0)}. Applying the reverse implication gives injectivity; explicit (y,0) supplies existence for every real y including zero and negative y. No AC, stability conclusion or excluded datum is hidden. The higher level uses only the unchanged reviewed supplier interface.

The actual direct suppliers opened were `def-ip-admissible-constraint-class`, `def-linear-map`, `def-kernel-and-image-of-a-linear-map`, `alg-ip-stiefel-constrained-regularized-gradient`, `thm-stiefel-grassmann-tangent-projections`, `def-stiefel-qr-polar-retractions`, `thm-stiefel-retractions-are-first-order`, `def-stiefel-grassmann-optimization-conventions`, `def-ip-nonlinear-forward-map` and `def-ip-forward-map-and-solution-classes`. Also opened `thm-linear-kernel-image-and-injectivity` to check the kernel definition's closing assertion. The Stiefel procedure is an alg-ID algorithm with a complete Definition, finite supplied schedule, oracle hypotheses, five return statuses and explicit exact-arithmetic limitations. Its correctness is separately proved in the lemma; justified_by does not create a recursive procedure call. The current-frame variable X is initialized in instruction 1 and replaced on acceptance in instruction 4. No definition repair is necessary.

The ordinary halfspace example was also opened as context: its two sign cases realize every vector as a difference of admissible points, and its fiber is precisely {(y,t):t>=0}. It owes no decision. Both current A/B pages are YAML only with compact-v1 and matching inventories; neither owes a page decision. No owned TikZ/tikzcd diagrams exist and none is needed for these algebraic arguments. All owned complete statement/definition/example sections are uninterrupted by links; their following references sections, where present, retain suppliers and source links.

## Exact source checks and limits

Read [Absil, Mahony and Sepulchre, Chapter 3](https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf), Example 3.6.2 and adjacent gradient identity, printed p.48 (PDF p.32; extracted lines 1541–1567): the real orthonormal-frame tangent decomposition, induced Frobenius metric, normal symmetric term and gradient projection match the authored algebra. Read [Chapter 4](https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf), Definition 4.1.1, printed p.55, and complete Example 4.1.3, printed p.59 (PDF p.6; lines 218–237): tangent input, polar formula (4.7), QR alternative (4.8) and positive diagonal convention agree. The source uses St(p,n) for n-by-p frames; local St(n,p) reverses the notation consistently. These sections supply corroboration, not a new external-input lemma or a convergence guarantee. The local finite-budget and branch proofs were checked directly. Boumal, Clason, van Leeuwen/Brune, Axler and the complete transitive supplier closure were not externally re-audited; no such source-reading coverage is claimed.

## Routed decisions and published findings

### `reader:35:1` — `confirmed_nonfatal`

`def-kernel-and-image-of-a-linear-map`; owned consumer `prop-ip-constraints-can-remove-kernel-ambiguity`. The complete Definition ends with an inline wikilink to thm-linear-kernel-image-and-injectivity. This violates uninterrupted-section presentation. The displayed kernel/image sets are correct; the closing subspace/injectivity assertion is established by the linked theorem. The owned proposition uses only the kernel set description, and derives both directions of its restricted criterion itself. No mathematical consumer defect results. Current raw SHA256 664a5b94d94b10c53e2c1ec18680734728b93d3922ecfc5d6020e8ab23a11a9a; current canonical guard equals routed pre_sha256 4b246dba93c76076a4325aac51ceaac6d3ab2513355f2d19ab373fc8bdc0ecfe and SHA256(JSON.stringify({item_sha256: raw})) equals routed observed_sha256 b948c896ac56a9bc216c22b8a8791d5f056bbf0350fd076863286ec416a0dd40. Published bytes remain read-only. Owner maintenance must preserve hypotheses, mathematics, attribution, dependencies and published status; replace the inline link with plain terminology and move the preserved link to an immediately following matching references section, one reference per source line and paragraph. Closed nonfatal-recorded disposition records routing only; source repair is pending.

Closed ledger row: `ipkt109-b35-3a-published-format-1`. No repair performed and no repair-confidence claim is made.

### `reader:35:2` — `confirmed_nonfatal`

`thm-stiefel-retractions-are-first-order`; owned consumer `alg-ip-stiefel-constrained-regularized-gradient`. The Statement opens with an inline wikilink to def-stiefel-qr-polar-retractions. This violates uninterrupted-section presentation. Independently checked the full theorem: smooth Gram–Schmidt and positive-root/inversion maps, polar I+t^2 eta^T eta expansion, upper-triangular/skew-symmetric QR derivative, and quotient column-space invariance establish the claim. The owned procedure and feasibility lemma use the real Frobenius tangent polar formula only; Gram=I+eta^T eta has full rank for every tangent trial. No mathematical consumer defect results. Current raw SHA256 6bf25121ca1a796c86fde4b26af846085e0b647dcb83a357ba8a41883363e771; current canonical guard equals routed pre_sha256 2241d550540e3d566408557853c9f89b77f5c45886677cd87c6a0b9c6f649392 and SHA256(JSON.stringify({item_sha256: raw})) equals routed observed_sha256 8f0e605d5963782b4cf63c8b8064de4c85fc353d51d3c580b7e19a015cea1ab7. Published bytes remain read-only. Owner maintenance must preserve hypotheses, mathematics, attribution, dependencies and published status; replace the inline link with plain terminology and move the preserved link to an immediately following matching references section, one reference per source line and paragraph. Closed nonfatal-recorded disposition records routing only; source repair is pending.

Closed ledger row: `ipkt109-b35-3a-published-format-2`. No repair performed and no repair-confidence claim is made.

Updated the published consumer/supplier ledger after exclusively acquiring `research/.published-consumer-ledger.lock`, rereading and merging, then releasing only this worker's lock. The existing kernel classification row was enriched; one Stiefel theorem index row was added. Each ID occurs once in the classification index. Stable IDs and proposed withdrawals remain present. The frontier-dependency ledger records the reviewed owned consumer uses and both owner maintenance alerts. No supplier Statement/Definition changed, so no triggered consumer repair or further propagation is required.

## Local checks and owner alert

- Initial risk-report: zero errors, five proof-bearing items routed; three HIGH and one CRITICAL required reviews.
- Final risk-report with --require-reviewed: zero errors, all four required risk reviews complete.
- Exact local record check: exactly the two owed decisions, each referencing exactly one closed 3a-adjudicate row; all seven item and both page raw hashes unchanged; two published classification IDs deduplicated.
- Defect-ledger append accepted both new rows and regenerated the shared view. Isolated validation of these two rows passes.
- Run-wide defect-ledger validation fails on the existing outside-scope row `ipkt109-b11-3a-published-ftc-pointwise-strength`: subclass `overstrong-statement`, location `Statement final clause; Proof 2.1–3.1`, and disposition `recorded-published-owner-alert` are outside the closed enums. Owner must correct that row's mechanical schema. No defect row was created for this mechanical failure and no foreign row was edited.
- No changed item paths: reflow, item precheck/rendercheck and final proof-layout are not applicable. No gate battery, judge, stamp, dispatch or self-certification was performed.

No mathematical blocker or unresolved prerequisite was found in the assigned review. Published reference relocation and the batch-11 ledger schema alert remain with the owner. Engine owns decision hashes and the gate battery.
