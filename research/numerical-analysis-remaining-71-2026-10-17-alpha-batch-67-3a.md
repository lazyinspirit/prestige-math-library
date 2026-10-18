# Batch 67 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-67`.

## Level 0 completed

`refuter:67:1`, `cor-ale-exact-splitting-residual-orders`: confirmed fatal missing initialization. For a=b=0, y(0)=0 and split initial state 1, both numerical maps are identities and the error stays 1, contradicting either claimed order. Read the current three direct suppliers in full; the global-order supplier Statement expressly requires exact initial data. Added y_0=y(0) to the Statement and carried it into Given and step 1.1; the same initialization applies to the conditional approximate-subflow branch. Updated the manifest mirror, derivation and zero-boundary contract. Repair confidence: 1. Reader pre/post item hashes agree; no reader repair was present. No item references or dependency consumers exist; the sole A-page contextual reference inherits the corollary hypotheses and needs no edit.

Source: Hairer, https://www.unige.ch/~hairer/poly_geoint/week2.pdf, §5, PDF pp. 12–14 (exact Lie/Strang compositions; orders). The exact initial-data hypothesis is checked against local supplier `thm-lie-strang-global-orders-and-subflow-error`, Statement and steps 1.1–4.1.

Level-0 checkpoint was recorded before proceeding to higher levels; final local checks are recorded below.

## Level 1 completed

Energy identity: positive definiteness on V gives existence/uniqueness, and self-adjoint polarization gives the exact energy identity. Outward flux work cancels only at the shared trace. Zero forcing gives nonincrease for every positive time step, including zero interiors. Recurrence example: induction gives (-2)^n delta v0; nonzero increments double in magnitude and zero initial increment stays zero. Both full proofs and defining suppliers reviewed; no defects. Specific complete risk reviews recorded in their contracts. The level-1 records were completed before the transport review.

## Level 2 completed locally; published owner disposition open

Both Reynolds proofs were independently traced through compact closure change of variables, null boundaries, zero extensions, uniform time difference quotients and the Jacobian identity. The one-dimensional endpoint FTC is choice-free; the higher-dimensional Borel comparison and divergence theorem require the already stated Countable Choice, precisely at step 5.1. `reader:67:3` and `refuter:67:2` identify the same nonfatal contract locator defect, now corrected from 4.1 to 5.1. No mathematical item edit is needed. The refuter severity is reduced because no hypothesis, axiom declaration or proof inference changes.

`reader:67:1` and `reader:67:2`: the current published `thm-lebesgue-criterion-in-rn` Proof 3.2 really refers to the finite balls covering K from 3.1, with no small-volume bound; for constant f, K can be all Q and cannot have arbitrarily small cover volume. A sound repair is to apply 1.1 to the high-oscillation cells plus degenerate grid skeleton of 1.3/2.2, whose rectangle volumes sum below eta/2. This missing argument for the full iff conclusion is in a published carrier outside edit scope. Owner must repair and review that carrier, or explicitly disposition the obligation on the independently proved used direction; this adjudicator cannot record it as fixed. Both reader obligations are escalated, sharing an open defect row; the associated transport risk reviews remain open.

Actual consumer use: one-dimensional F11 and step 2.1, higher-dimensional F12 and step 2.1, use only null discontinuities implies integrability. Supplier 1.2, 2.1, 3.1, 4.1 and 5.1 prove that direction independently of defective 3.2. Compact-null/content-zero and finite-cover grid-control supplier statements checked. No change or withdrawal of either sound transport statement is proposed.

Upwind theorem: branch termination/uniqueness, periodic mass telescoping and constant preservation via discrete GCL checked for N=1, U=0, c=0 and the nonpositive-Jacobian failure branch. No CFL is required. Specific complete risk review recorded. The independent Robin and heat-example branches are recorded below.

## Level 3 completed

Robin theorem: reviewed every solve/exchange, both directions of fixed-point equivalence and the spectral theorem's actual finite real self-adjoint hypotheses. Each Cayley factor has norm less than one; only submultiplicativity is used for the possibly noncommuting product. The threshold correctly bounds e_m and the returned first trace at pass m+1. Nonzero trace space makes the inverse norm positive; q=0, fixed initial datum, zero loads and M=1 work. Budget exhaustion grants no certificate. Complete risk record written; no repair.

## Level 4 completed

Heat example: all five suppliers meet their exact used hypotheses. Blocks diag(1,2), diag(1,1) yield S1=2, S2=1; trace 2 has outward fluxes 3 and -3. Pass-one change 3 exceeds threshold 3/10, and pass-two change 0 meets it at the budget endpoint. Returned trace 2 has actual error zero. Complete risk record written; no repair.

## Dispositions and durable evidence

Exactly five owed obligations are recorded in the companion `-decisions.json`: refuter:67:1 confirmed fatal and fixed (confidence 1); reader:67:3 and refuter:67:2 confirmed nonfatal and fixed (confidence 1), sharing one defect; reader:67:1 and reader:67:2 escalated, sharing the open published defect. No touched/page obligations exist in the scope and none were invented for the adjudicator's own repair. All reader pre/post item, contract and manifest fingerprints in the hash maps agree; no reader edits were accepted, amended or reverted. No judge stamp existed on the edited corollary. No source or status change, new item/page, proposed withdrawal, dispatch or judge operation was made.

The three native ledger rows are `na71-b67-3a-splitting-initial-data` (fixed), `na71-b67-3a-reynolds-choice-locator` (fixed), and `na71-b67-3a-published-lebesgue-cover` (open). The latter is deliberately not represented as a closed or repaired fatal. Its current raw source hash `b2d93736fb45fa2c0da86991182dd453e7e56214dc576a357558ff303ea8de94` hashes as JSON({item_sha256:raw}) to the exact routed observation `156be6fc860b36c4a8ed04440c828c7184708514e7823f9432e3a1938a38d0ff`; historical pre_sha256 differs but the actual observed bytes are available, so no unbound historical disposition is inferred. Published finding and strategy were merged under the prescribed exclusive lock, released by its creator; the deduplicated current classification row was moved from U-P to A-P while retaining prior repair evidence. Frontier dependency ledger records the owned exact consumer uses and owner handoff. Other owners' item carriers were left unchanged.

## Sources and review limits

All current routed carriers, their direct dependency statements/definitions, and the local Jacobian/GCL/Schur proofs were read. The entire current published Lebesgue-criterion proof and Borel comparison proof were independently inspected. This is a bounded carrier and used-interface review, not an audit of the complete transitive published closure.

- Hairer, [Lecture 2](https://www.unige.ch/~hairer/poly_geoint/week2.pdf), §5, PDF pages 12–14, equations (23)–(25) and the following order discussion: finite-dimensional split flows and orders agree with the local supplier. Exact initialization is expressly required by the local global-order theorem; approximate accuracy/stability requirements are also checked locally.
- Lebl, [The set of Riemann integrable functions](https://www.jirka.org/ra/html/sec_riemannlebesgue.html), Theorem 10.4.3, and [rectangular integration](https://www.jirka.org/ra/html/sec_rirect.html), Proposition 10.1.8 and Example 10.1.9: bounded rectangular criterion and the constant-integrand volume obstruction. These contextual statements do not repair the current authored false step.
- Engström–Hansen, [arXiv:2210.13868](https://arxiv.org/pdf/2210.13868), introduction and §6 Remark 5: heat transmission/Robin context is distinct from a uniform continuum geometric rate. The finite SPD contraction and numerical certificate here are established by the actual local proof, not imported from that continuum result.
- Donea and Joosten URLs in current carriers were attempted through the web reader and returned Internal Error. No claim of independently rereading those full texts or refreshing their source stamps is made. Their contextual references do not replace the locally checked proofs. Existing author source-evidence records remain historical evidence, not this reviewer's reading claim.

## Local checks and remaining owner action

- `node tools/tsx-run.mjs tools/precheck.mts items/cor-ale-exact-splitting-residual-orders.md`: pass, one proof, zero failures.
- `node tools/rendercheck.mjs items/cor-ale-exact-splitting-residual-orders.md`: pass, real YAML/KaTeX check.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-67.proof-contracts.json --strict`: 14/14, zero errors or warnings.
- Risk report without `--require-reviewed` run before review and again at close: 14 routed, seven HIGH/CRITICAL, no execution errors. Five have complete risk reviews; both transport records retain detailed mathematical findings with status open for the published-source escalation.
- Risk report with `--require-reviewed`: **fails with exactly two risk-review-missing errors**, the two Reynolds items whose records remain open. This is an intentional unresolved owner hold, not a passing review assertion.
- Final required `node tools/proof-layout.mjs items/cor-ale-exact-splitting-residual-orders.md`: one item, two steps, zero defects. Run once after final item edits and precheck; no subsequent item edit.
- Native defect append succeeded and refreshed the generated view. Full run ledger validation crashes at tools/defect-ledger.mjs:271 because another row has non-array evidence; no other owner's ledger row or tool was repaired. This mechanical failure is not logged as a mathematical defect. The three newly appended rows are separately checked below.

Owner next action: resolve the published converse-cover defect through the published repair protocol, or explicitly authorize a durable used-direction disposition for the two reader obligations. The false supplier step and these escalations remain open; no closure, certification or engine transition is claimed. After owner resolution the two risk records and required-review check need completion by the engine's routed process.

Final artifact consistency check: exactly five scope obligations, five decisions, three distinct defect rows; fixed decisions reference the two closed rows and escalations reference the shared open row. No decision hash or engine stamp added. Separate new-row ledger validation: three rows, zero errors. Full-run validator crash identifies existing batch-15 rows NA71-3a-batch15-filter-certificate-FP, NA71-3a-batch15-vertex-figure-exposition, NA71-3a-batch15-formal-power-bisector and NA71-3a-batch15-expected-degree with string evidence; routed to owner by this report, left unchanged.
