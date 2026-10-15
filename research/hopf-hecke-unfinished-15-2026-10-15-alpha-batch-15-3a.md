# Step 3a adjudication — batch 15

Run: `hopf-hecke-unfinished-15-2026-10-15`. Group: `batch-15`.

The scope lists no touched items, changed pages, reader findings, or refuter findings. All five item/contract/manifest projections and both page projections agree between the pre-reader and post-reader snapshots. Therefore no routed decision is owed; the decisions file will contain an empty array. The two risk obligations are reviewed in generated dependency order. This report records local review, not a judge verdict or engine gate.

## Level 0: rank-one kernel counterexample

Reviewed `cex-hh-rank-one-tensor-action-is-not-faithful`, both numbered steps, its contract, the empty reader/refuter findings, and its four cited suppliers: `def-hh-hecke-symmetry-and-ordered-basis-operator`, `def-hh-universal-coxeter-hecke-parameters-and-presentation`, `thm-hh-generic-coxeter-hecke-standard-basis` (especially parts 2 and 4), and `thm-hh-hecke-symmetry-tensor-power-action`.

The exact counterexample is over F=Q(q), with N=1,n=2. The A1 Coxeter group has two elements (word reduction and the nontrivial map to C2). Base change preserves the standard basis 1,T1. The specified operator acts by q on the sole tensor basis vector; T1-q1 therefore acts by zero and has nonzero coefficients (-q,1) in that algebra basis. This refutes universal faithfulness without making any claim about image centralizers. The witness is admissible; n=0 and special parameters are not needed, and no choice is used. No defect found and no item edit made.

Source checks: [Luo–Wang](https://arxiv.org/pdf/2012.07203), section 6.1, Lemma 6.1, printed pp. 30–31, uses equal-label eigenvalue q^-1; substituting q -> q^-1 matches this item. [Davydov–Molev](https://arxiv.org/pdf/1008.3739), section 4.2, equation (4.3), printed p. 15, gives the present ordered-basis operator directly. These source conventions were checked, rather than treating the bibliographic citation as a proof. The actual local suppliers supply the basis and action.

Recorded a complete, item-specific risk_review in the batch contract. The level-0 review is complete.

## Level 1: antipode descent

Reviewed `lem-hh-type-a-quantum-antipode-descends`, all eight proof steps, all seven cited facts and its contract. Opened its four current suppliers in full: the local candidate definition, `def-hh-type-a-quantum-tensor-action-for-centralizers`, `lem-hh-quantum-presentation-and-tensor-action-descent`, and `lem-hh-free-associative-ring-and-relations-descent`. The bialgebra supplier establishes its maps independently of the new antipode; there is no circular use of a Hopf assertion.

Step 1.1 derives symmetric Cartan weights from the two L weights. Step 2.1 preserves inverse, Cartan commutation and both weight relations. In 2.2 the off-diagonal reordering factors are q^{a_ji} and q^{a_ij}, equal by symmetry; on the diagonal the reversed commutator is -C_i and cancels the reversed right side. Zero distant weights justify 2.3. For 2.4, moving the Cartan factors gives total exponent zero in each of iij, iji and jii, for both X=EK^-1 and Y=KF; reversing the cubic polynomial swaps its outside terms and introduces three minus signs. Thus both Serre families vanish, with no missing adjacency orientation.

Step 3.1 uses the actual finite-sum ideal description and explicitly proves stability under the anti-map: reversal sends arb to S(b)S(r)S(a). It does not assume that the candidate is an algebra homomorphism. Step 4.1 checks both convolution products on L and its inverse, E and F. Step 5.1 moves S through products in the reversed order, contracts first the a-sum for the left identity and the b-sum for the right identity, then extends from words by linearity. Finite Sweedler contractions are well-defined by the stated tensor interpretation. The empty word and scalar words satisfy the identities. N=1 removes E,F and Serre relations and leaves the same Laurent-generator argument. The field Q(q) makes q-q^-1 a nonzero invertible element; no q=0 or q=±1 specialization, bijective-antipode conclusion, or choice assumption is made. No defect or substantial unmet prerequisite found.

Source check: [Etingof–Semenyakin](https://arxiv.org/pdf/2106.05252), sections 2.1.3–2.2.2, printed pp. 4–5, Definition 2.1 and Example 2.3(iv), equations (2.5)–(2.7), supply the matching coproduct and antipode conventions. The authors separately impose invertibility later; the present item explicitly avoids that extra conclusion. The general-rank relator checks are supplied by the local proof, rather than inferred from the source's rank-one example. Recorded a complete specific risk_review.

## Scope, dispositions and handoff

Opened the remaining current batch carriers and manifest as scope context: the candidate definition and both rank-two examples. Neither the untouched examples nor the unchanged pages owe adjudication decisions. No broader page-summary or transitive published-library audit is claimed. The batch cross-dependency record has only page-context rows and no item edge to another in-run batch; the two reviewed items use the declared published suppliers plus their local candidate. No dependency change or new cross-batch defect requires ledger maintenance.

No mathematical carrier, statement, definition, manifest, provenance or verification stamp was edited. Only the two required risk_review objects were added to the owning contract. There are no repairs, confirmed defects, published-supplier alerts, proposed withdrawals or local escalations; consequently no defect-ledger row or published-consumer ledger edit is warranted. No repair_confidence field applies. No proof-layout or precheck is needed because no item was edited. No judge, stamp, certification or gate battery was run.

All five current item raw SHA-256 values match their post-reader snapshot values. Pre/post item, contract, manifest and page projections are equal. The contract now differs only by the two risk-review enrichments; engine hash stamping remains pending as required. The decisions file is version 1 with run and group batch-15 and an empty decisions array.

Initial required risk-report run: exit 0, five routed items; antipode CRITICAL (13), counterexample HIGH (6). Final `node tools/risk-report.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-15.proof-contracts.json --require-reviewed`: exit 0, `risk-report: 0 error(s), 5 item(s) routed`; both required reviews complete.

The live status command found the run active at Step 3a with a separate batch-10 split failure. That engine-level blocker is outside this dispatch; no run controls were changed. Local batch-15 work has no blocker. Next action: engine collection, hashing and gate checks.
