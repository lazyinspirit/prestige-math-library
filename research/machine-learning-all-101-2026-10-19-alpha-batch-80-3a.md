# Batch 80 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-80`. Review in dependency order; engine owns hashes, gates and transitions.

## Completed level 0 reviews

`def-finite-markov-decision-process`: Checked the finite disjoint blocks D_s and ordered-pair injectivity against thm-sum-rule and the ordered-pair theorem. Empty S gives unique empty policies; nonempty S and normalized probabilities force nonempty reward alphabet. Finite maxima give M and the triangle inequality gives |r|≤M. No choice or diagram is required.

`lem-bounded-discounted-return-converges`: Checked geometric comparison, scaling, tail invariance, finite-sum inequalities and order preservation. The signed series converges by decomposing each term into its nonnegative positive/negative parts, both dominated by Mγ^j; linearity then applies. This immediate standard consequence closes the implicit absolute-to-ordinary convergence step. N=0, M=0, γ=0 and 0^0=1 satisfy every displayed estimate. G is now explicitly bound; reader repair accepted.

`lem-finite-state-sup-norm-space-is-complete`: Read all eight steps and the exact finite-dimensional metric, real Cauchy completeness, unique-limit, least-natural-threshold, induction and total-order suppliers. Empty S is a singleton. For nonempty S, each coordinate has a unique real limit and least threshold; the finite maximum works at rational ε. No choice is used. Confirmed refuter:80:1: the claim about other ACω completeness proofs on this page is false; removed only that sentence after checking the Cauchy criterion and the least-index Bolzano–Weierstrass path. Statement/proof/deps remain unchanged.

Confirmed refuter defect is closed in `ml101-b80-finite-completeness-choice-remark`. 

## Completed levels 1–2

`thm-finite-mdp-policy-induces-reward-state-chain`: Checked every kernel normalization and finite-support countable-additivity argument, finite prefix laws, measurable last-coordinate projection and the homogeneous specialization of Ionescu–Tulcea. Nonempty S ensures a valid initial point and normalized rewards; dummy reward zero adds no positive mass. AC is explicitly assumed and inherited exactly from the path-law supplier; no unjustified action process is introduced.

`ex-undiscounted-single-state-mdp-diverges`: Accepted the explicit metric/domain and 0≤q<1 clarification. The N-term sum is N, F(v)=v implies 1=0, and |F(v)-F(w)|=|v-w| contradicts every q<1 for distinct points. Diagram arrows, sole action and reward-one joint law match the model. This example uses γ=1 outside the discounted definitions explicitly and only as a formal backup.

`def-discounted-return-and-value-functions`: Checked the actual path-law supplier, finite reward bound and measurability suppliers. Every finite return is measurable; its bounded pointwise limit is measurable and dominated by the integrable constant M/(1−γ). Future dummy-zero coordinates, even on null paths, satisfy this same bound. Empty S uses only its empty value function; nonempty S carries AC from the chain construction. Definition uses start-state expectations, avoiding conditioning on null state events.

`thm-bellman-contraction-and-unique-fixed-point`: Accepted the explicit norm and repaired completeness citation. Finite stochastic weights bound every policy-coordinate difference by γ times the sup norm; the two finite-max inequalities prove the optimality bound in both directions. Zero function gives nonemptiness, cited finite-state lemma gives completeness, and Banach applies at q=γ including γ=0. Empty S is the singleton case, so neither an empty maximum nor an empty Banach domain is used.



## Completed owned level 3 reviews

`alg-policy-iteration`: accepted explicit point-mass embedding; exact evaluation exists by contraction, each action list supplies a unique earliest maximizer, retention branch and stopping/output instructions are complete. The associated correctness/termination theorem remains separate. No new boundary certification is claimed.

`lem-policy-value-satisfies-bellman-equation`: Checked the finite-prefix expansion for every start state, independence of the next kernel from the prior reward coordinate, and the finite first-step mixture. B=M/(1−γ) dominates every measurable finite return on a probability space, so DCT gives V_N(t)→V(t) for every t; finite-limit algebra and unique real limits yield the Bellman equation. The empty state branch is vacuous and the nonempty branch explicitly assumes AC. Reader repair accepted.

`thm-value-iteration-convergence-error-bound`: Item bytes unchanged: touched obligation is supplier-contract enrichment. Read the full induction: m=0 gives equality with γ^0=1, the successor step uses the contraction with nonnegative γ and the fixed-point identity, and induction gives all m. At γ=0 the first backup is exact; for empty S both norms vanish. Norm is supplied by the corrected contraction Statement. Geometric null convergence and Banach already provide the convergence described by the title.

`ex-finite-mdp-common-reward-shift`: Checked every fixed-point computation including stochastic θ=0 and θ=1. Expected reward is 1+2θ and the original fixed point is 2+4θ; adding 2 gives 6+4θ. Direct substitutions T*6=6 and T*_{shift}10=10 justify optimal fixed-point naming through uniqueness; action b wins in each model. Point-mass policy convention is explicit. Diagram represents only original rewards 1,3 with correct state/action arrows; no addition is needed.



## Foreign reader obligation at level 3

`reader:80:2`: Confirmed historical unbound B in the hash-authenticated observed Statement (ca15a33b…). The current producer explicitly quantifies real B≥0 and the uniform bound on every transition tuple. Independently checked all three proof steps: induction preserves mass one, coordinate series converge by geometric domination before finite summation, and nonnegative time-t transition weights total one, so the bounded-return lemma applies with M=B. B=0 and γ=0 work; nonempty S is explicit in the CMDP definition. Read current producer contract and manifest, both aligned with this argument. The named consumer uses only probability normalization of the recursive masses, which is unchanged. No outside edit or inherited native coverage is claimed.

Observed, repaired, pre-snapshot, application and owner-review artifact raw hashes all verified against the authenticated route registry. The current source matches the registered repair-after hash `5e7218df68b243d032bae7e0ecef3f25509b404b02d4041275ec8235c528a3e1`. Exact original producer and consumer fingerprints and dependency path are retained in the decisions JSON. 

## Completed level 4 reviews

`thm-policy-improvement`: Read all ten steps: stochastic-policy average is bounded by the maximum, γ≥0 makes T^ν monotone, and greedy iteration increases pointwise. Nonempty complete domain and contraction give metric convergence; coordinate inequalities and real limit order justify weak improvement and strict improvement at the changed state. Retaining every already-greedy action makes a policy change strictly improve some coordinate, forbidding recurrence among the finite product of action sets and giving ≤N_det−1 changes. Terminal greediness gives T*V=V and uniqueness identifies V*. Monotone policy iteration downwards from V* proves domination of every stationary value. Empty S has one policy and no changes; AC is confined to the nonempty path-value interpretation. Reader notation and nonemptiness repairs are accepted.

`ex-policy-iteration-tie-retention`: Item bytes unchanged; supplier-contract enrichment only. Each point-mass action has backup v/2 with unique fixed point zero; both one-step scores equal zero. The algorithm explicitly embeds deterministic policies, retains the old maximizing action, and stops after evaluation. The separately specified switching variant swaps a and b indefinitely; it does not claim every arbitrary tie rule cycles. Diagram has two action choices and both zero-reward probability-one return arrows, matching the model.

`ex-value-iteration-attains-error-rate`: Item bytes unchanged; supplier-contract enrichment only. One-state backup 1+v/2 fixes 2. Checked base m=0 and successor 2−2^(−m)=2(1−2^(−m−1)) using integer-power laws; positive error is exactly 2^(1−m), equal to γ^m times initial error 2 for every m. Diagram gives the sole legal action and reward-one self-loop. No denominator, zero-power or typing issue occurs.

`reader:80:1`: Confirmed the archived deterministic-policy typing defect in steps 2.2 and 5.1. Independently reviewed every current proof step: the finite-max bound gives ||V*||≤M/(1−γ), conditional one-step inequalities telescope from time 1, and the bounded vanishing terminal remainder gives an upper bound for every admissible continuation. The current point-mass embedding is normalized and is used consistently in Bellman evaluation and the tail value. The explicit finite-history kernels are probability kernels, their prefix masses give the conditional transition identity, and the stationary tail law attains the bound. γ=0, zero rewards, ties and unreachable states work; S is nonempty and AC is explicit. The current contract and manifest match. The Q-learning consumer F10 and proof 1.1 use the unchanged action-value formula and attainment; no consumer edit is needed.

The greedy producer observed/source-after/pre-snapshot/application/owner-review raw hashes all match the route registry. Current producer raw hash: `87518bfe39034ebfd499b63b5185eedb1717a9ffa26f479e643062e2835791da`. The observed bytes and corrected bytes are distinct; the historical defect is not called a false positive. 

## Final dispositions and bookkeeping

Exactly 13 decisions are recorded: seven accepted reader content repairs; three `reviewed_no_defect`/`audit_enrichment` decisions for unchanged item bytes with refreshed supplier quotation contracts; both foreign reader findings `confirmed_fatal` with corrected current producers; and refuter:80:1 `confirmed_fatal`, repaired locally. Each confirmed defect has one closed `3a-adjudicate` ledger row; both reader decisions reference exactly one such row. The truncated-value exposition gap is nonfatal: the common finite-return formula immediately defines values at every state. No substantial unmet prerequisite or unresolved mathematical escalation remains.

All seven text-repair preimages exist and their actual raw SHA-256 values match the immutable native pre-reader snapshot. The three enrichment-only item hashes are identical pre/post. No missing historical carrier or owner-authorized historical shortcut was used. Foreign decisions preserve producer batches, named consumers, exact dependency paths, immutable pre-reader fingerprints and carrier-at-split values. Registered source-after and observed artifacts were hash-checked independently; their existence supplies provenance, not mathematical acceptance.

Updated the owned manifest’s six stale Statement/Definition mirrors and the repaired Bellman-value lemma’s dependency mirror to current accepted content. Proof contracts have specific completed risk reviews for all 13 HIGH/CRITICAL items. The only local item edit removes the false ACω sentence in a Remark; it changes no Statement, Definition, proof, prerequisites or consumer interface. It requires no new lemma, pair or page. No existing judge record was present on that item and no review stamp was created.

Checked the actual affected uses in all four outside direct item consumers of the reader-changed interfaces: `lem-optimal-action-value-is-attained-by-greedy-policy` uses unique Bellman fixed points and the bounded-return/DCT estimate; `thm-tabular-q-learning-convergence-under-robbins-monro-conditions` uses existence of V*; `def-discounted-cost-constraint` uses bounded discounted signal convergence; `lem-normalized-discounted-state-occupancy-is-probability` applies it to time-t signal averages. The explicit notation/empty-norm clarifications preserve these applications. All in-batch consumers were read in dependency order. No consumer needed a further source repair, hence there is no additional propagation hop. No proposed withdrawal was removed. Published suppliers remained read-only; no defective published mathematical claim was identified within this review, so no published-ledger entry is needed.

All four scoped TikZ diagrams were checked: undiscounted reward-one self-loop; original reward-shift model with rewards 1 and 3; value-iteration reward-one self-loop; and tie-retention model with two reward-zero actions. State/action node types, arrow directions and joint-mass labels agree with the text. Their rigorous verifications are independent of the drawings. No missing diagram is required. Statements/Definitions/Examples in the owned inventory are uninterrupted and their hyperlinks are in following reference sections. A/B page bodies remain empty; compact-v1 flags and inventories are preserved.

## Source checks

Read exact local supplier statements for all authored inferences, including the finite-MDP data and probability kernels, finite sums and maxima, real/metric convergence and completeness, geometric series/powers, Ionescu–Tulcea, expectation and dominated convergence, and the finite-policy action-state-reward law and conditional-expectation rules used in the foreign greedy proof. The real completeness path was checked through `thm-cauchy-criterion-via-lub` and its least-index Bolzano–Weierstrass prerequisite: no ACω is spent in the finite-coordinate proof.

External primary sources consulted in this review:

- [Sutton and Barto, Stanford PDF](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf), §§4.2–4.4, especially the policy-improvement argument, stochastic extension and Figure 4.3’s explicit tie-cycling caveat. The local contraction/rate arguments were verified directly rather than inferred from the textbook’s uniqueness assertions.
- [Brown CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf), §§2.1–2.2, PDF pages 5–7: finite state/action model, discounted stationary-policy recursion, unique optimal fixed point and greedy selector. Browser PDF access failed; direct PDF retrieval succeeded and these pages were read using PyMuPDF. `pdftotext` was unavailable, so it supplied no evidence.
- [Mozgovoy notes](https://www.maths.tcd.ie/~mozgovoy/data/notes_MS_2014.pdf), Example 1.65, PDF page 13 (zero-based page 12), and Theorem 3.19, PDF page 34 (zero-based page 33): finite-coordinate completeness and finite-dimensional norm equivalence. The local finite-state proof handles the empty case separately and does not invoke norm equivalence.
- [Achiam et al., supplement](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf), Appendix 10.1.1, PDF page 1, (17)–(18): normalized occupancy and its finite-state matrix convention. The producer’s normalization and signal bound were checked directly from its finite probability recurrence.

## Local checks and handoff

All commands below completed with exit code 0:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-finite-state-sup-norm-space-is-complete.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-state-sup-norm-space-is-complete.md`: 1 proof checked, 0 failures.
- `node tools/rendercheck.mjs items/lem-finite-state-sup-norm-space-is-complete.md`: 1 file passed, including real KaTeX and YAML parsing.
- Final required batched item layout command: `node tools/proof-layout.mjs items/lem-finite-state-sup-norm-space-is-complete.md`: 1 item, 8 steps, 0 defects. This is the sole item changed by this adjudication.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-80.proof-contracts.json`, then `--require-reviewed`: 17 routed items, 0 errors; all 13 required reviews complete.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-80.proof-contracts.json --strict`: 17/17 checked, 0 errors and 0 warnings.

Native status was recomputed from `.autopilot/`: the run is active, with 100/101 adjudication units covered and batch 80 pending this handoff. No scheduling or control state was changed. No judge, hash stamp, self-certification, publication or gate battery was initiated. Engine owns the remaining hashes, boundary currency and gates. The reader’s stale pre-edit algorithm boundary metadata is historical evidence only; this mathematical review does not refresh or certify it.

Final focused bookkeeping check: exactly the 13 scope obligations are present once; every decision-linked ledger row is closed at `3a-adjudicate`; every touched Statement/Definition/Example manifest mirror matches current item text. Corrected item raw SHA-256: `c0d292e9c518ab526eff19916a6638e0dec9ce61393ae80ae6c236e435069bdc`. This is a recorded local byte observation, not an engine stamp.
