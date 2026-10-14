# Batch 31 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-31`.

Reviewed in generated dependency order. The equal-mixture lemma is sound: finite domination, nonnegative RN representatives under explicit AC, positive/negative mass identification with event-supremum TV, and convex interpolation give the asserted equality. Zero distance and contamination endpoints are handled separately. Risk review complete in the owning contract.


The bounded-replacement example is sound: each changed coordinate contributes at most one, and both deterministic size-two clean samples can be changed to (0,1) with one replacement. The output marginals differ, excluding iid sampling. Risk review complete.

The mean example has a confirmed nonfatal typing gap in step 2.1: the finite-expectation supplier assumes a finite ambient sample space, whereas the displayed integral is over R. Added restriction to S={0,a}, weights from the path law, and equality of the ambient and restricted integrals via null complement and simple positive/negative parts. This handles coincident atoms and zero weights. The derivative calculation and full claim are unchanged. Stark §1.3.4 equations (50)–(52) confirms the reader locator. Risk review complete.

Both level-4 definitions are sound. Nonempty parameter space supplies diagonal admissible pairs for the extended supremum modulus, without assuming attainment; epsilon=1 is separately defined. For risk, measurability of the rule and target-first loss sections licenses all expectations and threshold events, including infinite loss/threshold. Finite probability products exist for N>=1; replacement invokes its supplier diagonal hypothesis. Both risk reviews complete.

The level-5 lower-bound theorem is sound. Clean laws remain available by Q=Ptheta; a pair with loss greater than half the finite positive modulus replaces an optimizer; explicit separation and the common-law supplier give the 1/2 tail bound under equal finite-product laws. The infinite-modulus argument permits infinite pair loss but concludes only at each finite threshold. Fixed kappa, finite M0, nonempty Theta and the exact AC use are preserved. Metric/squared-metric constants follow from the triangle inequality. Risk review complete.

The Bernoulli example is sound: TV equals absolute parameter separation on the four events; the extremal separations give the exact modulus. The two explicit contaminating-law constructions cover both sides of 1/2 and full contamination, with admissible weights. Risk review complete.

Routed decisions: `touched:31:ex-mean-gross-error-path-has-unbounded-sensitivity` is `amended_repair`; `refuter:31:1` is `confirmed_nonfatal`. Both reference the one closed ledger row `research/mathematical-statistics-foundations-37-3a-b31-finite-support-expectation-reduction`, caught at `3a-adjudicate`, with repair confidence 1. There are no reader or page obligations. The exact reader-post raw carrier was present at entry: `ac19336cb1b5697bc325305fbdd47409172ca243d0ddaf77edfc778384e3ab64`; the frozen pre-reader hash is `aa01874e3f4634fe673f5ac74fc084fc0619fc0d7825b65887f8f585a26ff8c9`. Frozen contract and manifest hashes are unchanged between those snapshots. The reader locator correction is retained; the subsequent proof amendment resolves the refuter gap.

Sources independently consulted:

- [Stark, Statistics 240 Part 9](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf), §1.3.4, equations (50)–(52), PDF page 16: the mean functional, point-contamination derivative, and infinite gross-error sensitivity. The source uses a normal base law; the local item proves its point-mass specialization directly. The prior pages 17–18 locator missed this passage.
- [Chen, Gao and Ren](https://arxiv.org/pdf/1506.00691), §5 equation (12) and Theorem 5.1, PDF page 16; Appendix E, proof of Theorem 5.1, PDF pages 45–46: contamination modulus and equal-mixture construction. The local theorem supplies its explicit loss-separation hypothesis and approximate-supremum witness rather than assuming the source's maximizing pair exists.
- [MIT 18.S997 notes](https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf), §5.3, Lemma 5.3 and Definition-Proposition 5.4, printed pages 105–106 / PDF pages 112–113: two-point error and event-supremum TV conventions. The local common-law supplier proves the event cover directly, also for extended losses.

Actual direct supplier Statement/Definition sections were read for every reviewed item, including the RN nonnegative-representative proof and common-law proof. Exact domains, target-first orientation, measurable loss sections, finite-product construction, and AC qualification agree with their actual uses. This review does not independently audit the entire transitive supplier closure or inherited bibliography. No defective published supplier was found; published content remains read-only and no published-ledger entry is necessary.

Only mean Verification 2.1 changed. Its claim, title, dependency list, manifest mirror and already `ai-altered` proof provenance remain accurate; no material rewrite or judge stamp was involved. The owning contract derivation was regenerated, and all seven required risk reviews are complete. No Statement/Definition changed, so no propagated consumer repair is needed. Current cross-batch supplier uses are retained with stable IDs in the dependency ledger; no withdrawal was proposed or removed.

Focused local checks (all exit 0):

- Initial `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-31.proof-contracts.json`: seven HIGH/CRITICAL subjects, 0 errors.
- Same command with `--require-reviewed`: 0 errors, 12 subjects routed, all seven required reviews complete.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-31.proof-contracts.json --strict`: 12/12 checked, 0 errors and 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-mean-gross-error-path-has-unbounded-sensitivity.md`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/ex-mean-gross-error-path-has-unbounded-sensitivity.md`: 1 file, valid YAML and math rendering.
- Final `node tools/proof-layout.mjs items/ex-mean-gross-error-path-has-unbounded-sensitivity.md`: 1 item, 3 steps, 0 defects.
- Native defect-ledger append: one closed row appended, generated view refreshed under the tool's append lock.

No blocker or unresolved mathematical uncertainty remains within this dispatch. No judgment, decision stamping, scheduling, or engine gate battery was performed. The engine owns those operations.

Final changed-item raw SHA-256: `4ace3a88741b5e2d91247e811e469830e5f5724349b492d24036e28301d4f2d7`.
