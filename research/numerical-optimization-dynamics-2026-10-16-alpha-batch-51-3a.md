# Batch 51 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-51`.
Scope: five touched carriers and `refuter:51:1`; no reader findings or page-touched obligations. Current touched raw hashes all equal frozen reader-post hashes and differ from pre-reader hashes. The reader records bibliography corrections and proof reflow without claim changes. These known citation-metadata corrections receive `reviewed_no_defect`, `change_kind: metadata`, and no defect rows.

## Completed level 1

`def-adaptive-simpson-refinement-indicator`: reviewed_no_defect (metadata). For a<b and even n>=2, the n/2n grids are nested; at n=2, the refined formula equals the sum on the two half-panels. Division by 15 defines an indicator, not a bound. Supplier `alg-composite-simpson-rule` Definition was checked. The corrected Owen URL identifies the intended source. No Definition or consumer interface changed.

## Completed level 2

`lem-composite-simpson-asymptotic-error-expansion`: reviewed_no_defect (metadata). Read the full current proof, `lem-simpson-panel-peano-kernel` including its proof, and current statements of all other cited dependencies. On a length-2h panel, integral K=-(2h)^5/2880. Uniform continuity bounds the summed remainder by (b-a)h^4 epsilon/180 and the midpoint-integral discrepancy by (b-a)epsilon, giving normalized discrepancy <=(b-a)epsilon/90. k>=1 excludes empty panels; Archimedean/Bernoulli gives h_k->0. No coefficient division or choice is used. Risk review complete in the batch contract before higher-level review.

## Sources

Owen, https://artowen.su.domains/mc/Ch-quadrature.pdf, Chapter 7, section 7.2, printed pp. 7–8, (7.5)–(7.6): downloaded with curl after web fetch timed out and read with PyMuPDF. Expanded weights in (7.6) agree with the local rule. The PDF has apparent typographical errors in its compact sums and following error coefficient (printing (b-a)^4/n^4 rather than the dimensionally correct (b-a)^5/n^4). These are not imported locally; the local coefficient is proved from the kernel.

Driscoll–Braun, https://fncbook.com/adaptive/, section 5.7.1, (5.7.1)–(5.7.4), and https://fncbook.com/integration/, section 5.6.2, (5.6.14)–(5.6.17): Simpson extrapolation and /15 indicator. The local C4 proof does not assume a full higher-order expansion.

## Review progress

The following sections complete the higher-level reviews and page adjudication. Published content remains read-only.

## Completed level 3

`thm-simpson-richardson-error-estimator-asymptotic`: reviewed_no_defect (metadata). All steps and suppliers checked. Subtraction yields (E_k-E_(k+1))/15=c h^4/16+o(h^4); reverse triangle yields its magnitude expansion. Division is made only for c!=0, when E_(k+1) is eventually nonzero. The unconditional Richardson remainder is (16E_(k+1)-E_k)/15=o(h^4). c=0 supplies no relative conclusion; no finite accuracy guarantee is asserted. Risk review complete.

`ex-adaptive-simpson-cap-reached`: reviewed_no_defect (metadata). The rational node evaluations give S0=2/3+1/7503 and S1=(2+8/626+2/2501)/12. The strict inequalities imply eta>17957/540000>1/1000. D=0 prevents a split and returns cap-reached. Positive denominators and P=1 satisfy the algorithm domain.

`ex-adaptive-simpson-misses-narrow-feature`: reviewed_no_defect (metadata). All five samples are polynomial roots, making acceptance immediate for every positive tolerance, before the depth check. The displayed five lower bounds hold on [1/8,3/16]. Continuity, nonnegativity and adjacent integral additivity give I>=C/16=2tau>tau for tau=C/32. All cited dependency statements were read, and its risk review is complete. No item mathematical edits or consumer-interface changes have been needed.

## Completed level 4

`ex-adaptive-simpson-leading-error-cancellation`: risk-only review complete, no separate decision owed. Read every verification step and current cited statements. f4=360x^2-120 integrates to zero; I=-6/7, Q2=-83/96, Q4=-5267/6144 give errors 5/672 and 5/43008; eta=1/2048 gives 21/5. All divisions are valid. This finite example does not establish that nonzero coefficient is necessary for asymptotic relative accuracy.

## Completed level 6

`thm-certified-adaptive-simpson-enclosure`: risk-only review complete, no separate decision owed. Read the defining algorithm, every proof step, all cited supplier statements and the actual Simpson-bound/DAG proofs. V encloses exact point values; W encloses exact length; division by positive [6,6] is valid. The full-range derivative enclosure gives M4<=M, and the n=2 bound becomes ML^5/2880. Upward remainder rounding and outward interval sums preserve enclosure. Strong induction on positive budgets proves the <=P call bound; finite-leaf integral additivity proves global inclusion. Exact midpoint/radius and final comparison handle rounding inflation, D=0, p=1 or 2, zero derivative bound, nonrepresentable midpoints and malformed/nonfinite oracle results. Oracle soundness is a mathematical hypothesis; neither samples nor an inconclusive status certify tolerance success. No choice principle is used.

Source checks: Kearfott, https://interval.louisiana.edu/preprints/survey.pdf, section 1 printed pp. 1–3 and complete section 3.3 printed p. 7, states outward enclosure and the verified Simpson fourth-derivative remainder. Rump, https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf, section 4, (4.1)–(4.3), and section 12, Theorem 12.1 and Algorithm 12.2, printed pp. 85–86, supplies directed rounding and verified quadrature with C4 and even n. Scott's linked 2017 draft section 13.2 and Theorem 13.5 were read at PDF pp. 243–245 (printed pp. 223–225); k=3, C4 and finite evaluation-functional continuity meet its hypotheses. The local proofs supply the needed results independently.

## Page finding: refuter:51:1

Verdict: confirmed_fatal; repair_confidence: 1. Closed defect: `nod-20261016-3a-batch51-page-relative-necessity`. The original page incorrectly asserted relative accuracy "only when" the leading coefficient is nonzero. The theorem states a sufficient condition and expressly withholds a relative conclusion when c=0. The page now states that nonzero coefficient ensures asymptotic relative accuracy and that the expansion alone gives no conclusion when it vanishes. No item Statement/Definition or manifest inventory changed, and no consumer repair is required.

Independent counterexample check: put a_j=1/(j^2(2*pi*2^j)^4) and f(x)=sum_(j>=1) a_j cos(2*pi*2^j*x) on [0,1]. All derivative series through order four converge uniformly by comparison with sum 1/j^2 (whose tail is bounded by 1/(N-1)); repeated termwise differentiation gives f in C4. Termwise integration gives I=0 and integral f4=0, hence c=0. A uniform trapezoid grid with 2^k panels averages a cosine mode to 1 exactly when j>=k, otherwise to 0, by the finite geometric sum of roots of unity. Since Q_k=(4T_(2^k)-T_(2^(k-1)))/3, for k>=2,

$$E_k=I-Q_k=a_{k-1}/3-sum_{jge k}a_j.$$

Now a_(k-1)/a_k -> 16 and sum_(j>=k)a_j/a_k -> sum_(r>=0)16^(-r)=16/15: the summands are 16^(-r) k^2/(k+r)^2, and the geometric tail uniformly controls passage to the limit. Therefore E_k/a_k -> 64/15>0 and E_(k+1)/E_k -> 1/16. Thus |Q_(k+1)-Q_k|/(15|E_(k+1)|) -> 1 despite c=0. This independently confirms the refuter's exact mathematical observation; it does not rely on the polynomial finite-level example as an asymptotic witness. The original page's raw hash matches both reader snapshots; its observed hash is a typed carrier digest, not a raw-byte hash.

No defective published supplier was identified in the reviewed interfaces. Published carriers were not edited. No substantial prerequisite gap or owner escalation remains. Cross-batch interfaces are unchanged; the owned dependency record retains all original rows and supplier IDs. No withdrawal was proposed or deleted.

## Focused checks and mechanical reconciliation

Initial `proof-contract.mjs ... --strict` checked all seven proof-bearing items and found one stale F4 quotation in the certified-enclosure contract, quoting an older interval-operations Definition. The exact current Definition was already read; its used real interval formulas, positive-divisor domain and overflow behavior support the same inference. Replaced only this quotation with the exact current real-operations paragraph and noted the reconciliation in the risk review. This is a mechanical evidence repair, not a mathematical defect, and creates no defect-ledger row or additional routed decision.

The nonfatal `shotgun-bracket` warning on lemma step 1.2 is informational: all cited facts are used in that step to establish regularity, compactness, integrability and kernel error bounds; no mathematical gap was found.

## Final local validation and handoff

- Exactly six decisions written: five metadata `reviewed_no_defect` and one `confirmed_fatal` page finding, repaired with confidence 1 and exactly one closed ledger row. No risk-only or unflagged obligations were invented.
- Original typed page digest independently recomputed as `9a54faccc43cd42834b70297e25e2d27b13165badd35d7014dd827037adc9ed5`, matching the routed refuter observation. All five touched item files still exactly match their frozen reader-post raw hashes; this adjudicator changed no item source.
- `node tools/defect-ledger.mjs append --file /tmp/batch51-defect-row.json`: one schema-valid closed row appended under the tool's serialization lock; generated view refreshed.
- `node tools/rendercheck.mjs library/numerical-linear-algebra-and-approximation/adaptive-quadrature-and-error-indicators.md`: one file passed real KaTeX and renderer YAML checks.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five touched paths: four proofs checked, zero failing; the definition has no phase proof.
- `node tools/proof-layout.mjs` once on those same five explicit paths after all source work: five items, fourteen steps, zero defects. No item formatter or later item edit was performed.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-51.proof-contracts.json --strict`: final zero errors, one informational shotgun-bracket warning, seven of seven checked.
- `node tools/risk-report.mjs` on the owning contract was run before reviews and rerun with `--require-reviewed`: all five CRITICAL reviews complete; final zero errors across seven proof-bearing items.
- Exact rational recomputation independently confirmed both cancellation values/errors/ratio and the cap witness's rejected indicator. This finite arithmetic is sanity evidence, not evidence for the general asymptotic theorem.
- Owned cross-batch input preserves all 22 rows with stable supplier/consumer IDs and records this interface review; `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16` refreshed and deduplicated successfully.

No unresolved blocker, published defect, withdrawal, or outside consumer repair is reported. No judge cycle, decision stamping, dispatch, engine transition, publication, or commit was initiated. Engine-owned hashing and the full gate battery remain for the handoff.
