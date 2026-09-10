# Batch 12 — authored-content review (6b-f-12)

Run: phase-2-catchup-24. Group f; batch 12 only. Read the current scope, manifest, all five complete authored arguments, both pages, proof contracts, and the relevant published dependency statements. This is the dispatched local 6B review, not a publication or independent closure stamp.

## def-stay-put-one-tape-machine-and-run-interface

Accepted after reading Verification 1.1–7.1. The tape/update graphs are sets; the updated support lies in F union {h}, with finite adjunction proved explicitly. Total nonhalting delta gives a unique successor. Recursion applies to the total identity extension on the configuration set, with a specified start; the artificial tail is excluded from genuine runs. The bounded induction supplies the least halting index and deterministic prefix induction proves uniqueness and exhaustive disjoint outcomes. Empty input, empty Sigma, blank-only Gamma, head zero and already-halting starts are covered. All six declared supplier statements were checked; no AC is used.

Dependencies: `def-deterministic-one-tape-turing-machine`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`, `thm-recursion`, `thm-induction-principle`, `thm-subset-of-a-finite-set`. No unresolved obligation; no repair. Next action: scoped checks and engine-owned full join.

## lem-stay-put-right-left-macro-simulation

Accepted after reading Proof 1.1–5.1. Cartesian-product and ordered-pair suppliers justify disjoint tags and designated-state distinctness. The append-two enumeration induction establishes finite control without Choice. The table covers exactly unmarked nonhalting states and every marked state, including marked accepting/rejecting targets. L/R steps match literally. For S, writing at h then preserving the arbitrary scanned symbol at h+1 returns from a positive successor to h with the entire updated tape unchanged, including h=0. Unique outgoing transitions prove the next-unmarked converse. Checkoway printed slide 9, PDF p.18, gives the same macro; local arguments check the additional hypotheses.

Dependencies: `def-stay-put-one-tape-machine-and-run-interface`, `def-one-step-configuration-relation`, `def-finite-cardinality`, `def-cartesian-product`, `thm-the-characterising-property-of-ordered-pairs`, `thm-induction-principle`, `thm-omega-is-peano-system`. No unresolved obligation; no repair. Next action: scoped checks and engine-owned full join.

## thm-stay-put-elimination-with-explicit-simulation-interface

Accepted after reading Proof 1.1–6.1 and all eleven declared supplier statements. Recursion is applied to a total configuration/counter self-map; only genuine indices contribute. Both successor laws give k_i=i+s_i. Induction proves s_i<=i and the left-addition bound using the actually cited right-addition order compatibility. The half-open segment partition uses natural discreteness and covers every time before k_i. For divergence, k_(j+1)>=j+1 covers any simulator time j by a finite nonhalting expansion. The first-halt proof excludes all earlier boundary/interior halts, including t=0. Exhaustive original outcomes give the three converse implications. Initial embedding, both language inclusions and any fixed tape/head output function follow. Recurrent configurations are explicitly allowed; no AC or unproved simulation premise is used.

Dependencies: `def-stay-put-one-tape-machine-and-run-interface`, `lem-stay-put-right-left-macro-simulation`, `thm-recursion`, `thm-induction-principle`, `def-nat-addition`, `def-nat-order`, `lem-nat-order-add-compatible`, `thm-nat-linear-order`, `lem-nat-add-successor-left`, `lem-nat-add-identity`, `lem-nat-discrete`. No unresolved obligation; no repair. Next action: scoped checks and engine-owned full join.

## ex-eliminating-a-stay-put-transition

Accepted after checking Verification 1.1–4.1 against the two local suppliers. The original has two required entries and the simulator eight; marked accepting states are nonhalting. The one-letter and empty-input traces give exact times one and two, with head trace 0,1,0; the aa tape confirms nonblank-neighbor preservation. Every witness is a legal finite total machine and the example is correctly identified as locally generated.

Dependencies: `def-stay-put-one-tape-machine-and-run-interface`, `lem-stay-put-right-left-macro-simulation`. No unresolved obligation; no repair. Next action: scoped checks and engine-owned full join.

## cex-deleting-stay-put-moves-does-not-preserve-computation

Accepted after checking Counterexample 1.1–4.1 against the two local suppliers. Deleting the two S entries destroys required totality at (q0,blank); the alternative missing-entry rejection rule is expressly hypothetical. The separate four-entry total machine accepts a, whereas its legal S-to-R replacement rejects a, each after two steps. The clamped left-then-right trace 0,0,1 refutes exact head preservation. These are concrete witnesses, not a change to the model or an unsupported universal claim.

Dependencies: `def-stay-put-one-tape-machine-and-run-interface`, `lem-stay-put-right-left-macro-simulation`. No unresolved obligation; no repair. Next action: scoped checks and engine-owned full join.

## Pages and source evidence

Both `one-tape-simulation-normal-forms` and `one-tape-simulation-normal-forms-examples` are accepted. Their item order and prose match the proved claims. Seven exact authored obligations are recorded in `research/phase-2-catchup-24-alpha-f-6b-decisions.json`.

Read [Checkoway, Lecture 16](https://checkoway.net/teaching/cs301/2018-spring/slides/Lecture-16-tm-variants.pdf), printed slides 2–10, PDF pp.2–19, extracted lines 4–162. Slide 3 adds S; slides 8–10 establish both language inclusions using a new copy of every state, an S-to-right transition targeting that copy, and a symbol-preserving left return. The local proof checks finite control, the nonhalting transition domain, clamped zero boundary, halting targets and exact time accounting rather than importing different conventions.

Read [Savage, Chapter 5](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf), §5.1, Definition 5.1.1 and all discussion before §5.1.1, printed pp.210–211, extracted lines 25–90. This supplies finite control, single-ended tape, left-adjusted input, acceptance, total decision and tape-output context. Separate write/move commands and abnormal left-edge termination differ from the local convention; the source is not used to justify the local macro. Existing source-reading records and the historical source drop remain intact.

## Changes, dependencies and debt

No authored content, IDs, pages, manifests or provenance required repair. Added specific complete risk reviews for the three CRITICAL items in the owning contract. No new local supplier and no shared-plan or Phase-2 amendment is needed. All external item prerequisites used here are earlier published suppliers; the owned cross-batch input is correctly `[]`. No changing frontier supplier is consumed by batch 12. Batch 13 and other owners' decisions are outside this dispatch.

No defective published item was discovered in the supplier statements and proofs actually examined. This is not an exhaustive published-content audit. No canonical published-ledger classification changes or defect-ledger rows are warranted for these sound acceptances. No escalation was cleared and no withdrawal proposed.

## Validation checkpoint

All local checks passed (2026-09-10):

- `node tools/risk-report.mjs research/phase-2-catchup-24-batch-12.proof-contracts.json --require-reviewed`: exit 0; three CRITICAL reviews complete, two MODERATE items, zero errors.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-12.proof-contracts.json --strict`: exit 0; 5/5, zero errors or warnings.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-12.pages.json`: exit 0; five scoped items, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with exactly the five owned item paths: exit 0; 5 checked, 0 failing. No reflow needed because content was not changed.
- `node tools/rendercheck.mjs` with exactly the five owned item paths and two owned page paths: exit 0; all seven parse under the real renderer/KaTeX.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24`: exit 0; refreshed and deduplicated. Checked that batch 12 is in reviewed_batches and has no owned consumer edge; its empty input remains accurate.
- Exact contract quotations all occur in the current supplier files. Seven owned decisions match the scope exactly, with nonempty evidence and empty defect lists.

No blocker remains in this dispatch. No judge, stamp, workflow transition or full-frontier acceptance was performed. Next action belongs to the engine's full join and unchanged 6C/6D protocols.

# Batch 13 — authored-content review (6b-f-13)

Run phase-2-catchup-24, group f; assigned batch 13 only. All sixteen items and both pages accepted; local validation complete. Decisions below concern the actual authored text. Source cache: /tmp/uc19-rotman-EAIf3e/rotman-word-problem.{pdf,txt}; authoritative URL is recorded in each item contract. Web search found the Chicago PDF; web open failed, so the existing recovered complete local text is being read. No new recovery claim or gate stamp.

## lem-normalized-fixed-halting-machine-for-boone-simulation

Accepted: Proof 1.1–5.1 compiles each supplied total table entry into a write and designated move, preserves the unique dot at zero, and sends rejection/unreachable branches into a total loop. The source start is distinct from both halting states. At times 1+2n, undotting recovers exactly the original configuration; intermediate states cannot stop. Empty input is represented by one blank; the finite visited interval supplies all five description cases. The finite word map reduces HALT_TM to stopping for the single table. All three published supplier statements and the recognizer proof were read. No AC. Rotman printed pp.420–422 defines the target convention; the local compiler supplies the different boundary convention.

Dependencies: thm-halting-is-recognizable-and-undecidable, def-deterministic-one-tape-turing-machine, def-turing-machine-initial-and-halting-configuration-interface. No repair or unresolved obligation. Next: review the next assigned argument, then scoped checks.

## def-boone-machine-semigroup-and-augmented-configurations

Accepted: Verification 1.1–4.1 establishes finiteness, the equivalence relation by finite symmetric paths, compatibility with both concatenation arguments, and associativity. Every relation has one state and nonempty sides; contexts may be empty. The eight families retain the write rule and restrict erasure to S, excluding h. Augmented stopping configurations expressly allow empty right tape. The three published definition suppliers were read in full. No AC or additional supplier is required.

Dependencies: lem-normalized-fixed-halting-machine-for-boone-simulation, def-computation-alphabet-and-word-convention, def-equivalence-relation, def-semigroup-and-monoid. No repair or unresolved obligation. Next: review the next assigned argument, then scoped checks.

## lem-boone-semigroup-histories-detect-halting

Accepted: Proof 1.1–5.1 checks all five transition families and all three cleanup families in both directions. Every applicable replacement uses the sole state; end markers remain outer markers. Reverse cleanup permits the empty right segment exactly at the stopping state. On this closed domain the oriented graph has a unique successor except at q. A shortest undirected path to the sink cannot contain a backward-forward valley, so its pre-stop segment is a genuine machine run. Cleanup gives the other direction. Self-loops and empty input are covered. Rotman pp.427–428 Lemmas 12.3–12.4 were read; the local augmented domain corrects the source invariant. No AC.

Dependencies: def-boone-machine-semigroup-and-augmented-configurations. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## thm-fixed-finite-semigroup-has-undecidable-terminal-equality

Accepted: Proof 1.1–3.1 fixes the machine and finite presentation before varying binary input. The explicit terminating prefix/suffix encoding, including a blank for empty input, composes with the proved halting equivalence to contradict HALT_TM undecidability. Restricting either unrestricted terminal equality or two-word equality gives the same impossible decider. Rotman pp.428–430 Theorem 12.5 and Corollary 12.6 corroborate these quantifiers; no closure theorem or Choice is imported.

Dependencies: lem-normalized-fixed-halting-machine-for-boone-simulation, lem-boone-semigroup-histories-detect-halting. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## def-boone-group-presentation-and-special-word

Accepted: The finite, disjoint generator sets and explicit equations define a group through the published finite-presentation quotient convention, whose definition was read. Sharp changes signs in place, preserves cancellation pairs and concatenation, and squares to the identity; it is not asserted on the semigroup quotient or whole Boone group. Every special word retains one state with empty contexts allowed. The commutator uses full word inverses. Rotman pp.430–431 were read and every displayed family compared; state/x commutation is absent as required.

Dependencies: def-boone-machine-semigroup-and-augmented-configurations, def-recursive-and-finite-group-presentations. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-base-groups-and-associated-free-bases

Accepted: Proof 1.1–7.1 derives the finite multiple-letter pinch assertion from the actual single-letter Britton theorem and base embedding, then proves stable-letter sequence comparison by seam cancellation. The x-to-x-squared map is an isomorphism onto its specified subgroup and preserves infinite order under the finite tower. Retraction proves freeness and injectivity on both T signs; explicit mutually inverse twists of the free state factor prove the exact A_i/B_i bases, including empty contexts. The basis correspondence and tape involution are checked on generators. All five published suppliers were read, including the normal-form proof behind Britton. AC is used for nonempty coset transversals. Rotman pp.438–440 were read; the local free state factor avoids the erroneous state/x relation in the printed source.

Dependencies: def-boone-group-presentation-and-special-word, thm-reduced-words-form-the-free-group, thm-normal-form-for-free-products, thm-brittons-lemma, cor-the-base-group-embeds-in-its-hnn-extension, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-hnn-tower-and-auxiliary-subgroups

Accepted: Proof 1.1–4.1 uses the proved basis isomorphisms and reversibly identifies the rule relations. The free-product twist fixes H, giving A_i intersect H=T_1 and B_i intersect H=T_-1; retraction and infinite order then give trivial intersection with x powers. This excludes every pinch of a freely reduced auxiliary word and proves C free. The t and k extensions centralize actual subgroups by their identity isomorphisms, so no unproved basis for D or full-centralizer assertion is needed. AC is declared and used for HNN transversals. Rotman pp.438–440 and Simpson Definition 1 p.1 were read, checking the inverse-stable-letter convention.

Dependencies: lem-boone-base-groups-and-associated-free-bases, thm-hnn-normal-form-theorem, thm-brittons-lemma, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-positive-history-pushing

Accepted: Proof 1.1–6.1 derives the negative rule-letter identity algebraically and checks the exponent recurrence d_(m+1)=2d_m+1 for both signs. Applying it to the reversal gives the two left sharp identities. Every symmetric history word has exactly one state, hence positive tape-only contexts; both contextual replacement formulas have the correct signs and factors. Finite substitution yields LqR, including a zero-length history. The displayed commutator then cancels because t centralizes L and k centralizes R and q-inverse t q. AC is inherited from the tower, with no further selection. Rotman pp.432–433 Lemma 12.10 and the complete sufficiency argument were read.

Dependencies: def-boone-group-presentation-and-special-word, lem-boone-hnn-tower-and-auxiliary-subgroups, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-commutator-extracts-an-auxiliary-history

Accepted: Proof 1.1–4.1 first applies Britton at the two k letters to obtain actual D-membership in G_3. A minimal expression in conjugated t letters cannot have length zero; every later t pinch, for either sign, deletes two occurrences using actual C-membership and t centralization. Therefore a pinch with the initial t gives P-inverse Sigma R_0=q in the embedded G_2. Free reduction preserves the auxiliary alphabet. The minimization is over finite natural lengths and adds no Choice use beyond the declared HNN transversals. Rotman pp.440–441 Lemma 12.13 was read through its QED.

Dependencies: lem-boone-hnn-tower-and-auxiliary-subgroups, thm-brittons-lemma, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-reduced-auxiliary-words-have-no-rule-pinches

Accepted: Proof 1.1–4.1 checks both edge-subgroup intersections using the state twist, tape retraction and infinite order of x. An internal rule pinch would force zero intermediate exponent and violate free reduction. Both rearranged comparison words are therefore rule-reduced; the previously proved multiple-letter sequence comparison gives equal lengths. At positive common length Britton leaves only the last-L/first-R central pinch. The zero-length equation lies in G_0 by embedding. AC and its normal-form use remain explicit. Rotman pp.442–444 Lemma 12.14 and the start of Lemma 12.15 were read.

Dependencies: lem-boone-base-groups-and-associated-free-bases, lem-boone-hnn-tower-and-auxiliary-subgroups, thm-hnn-normal-form-theorem, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## lem-boone-positive-history-reconstruction

Accepted: Read Proof 1.1–6.1 against Rotman pp.443–447 through the formal reconstruction QED. The stronger signed-word induction is necessary and is actually proved. At p=0 free-product uniqueness and tape retraction force empty tapes and zero x exponents. The tape sign test is sound: reduced sx-basis expansions have no internal tape pinch, and a negative first remainder would force the seam s x s-inverse with x in the even-power subgroup, impossible. Theta gives the other subgroup sign and inversion the mirrored endpoint test. Minimal twisted-state occurrences give exactly one positive state generator and the two tape equations. Those endpoint tests force literal context divisibility, including empty remainders. Both edge orientations restrict to theta, so the displayed replacement negates m,n correctly. The new tape seams are freely reduced; common rule length strictly decreases after auxiliary reduction. Induction yields positivity before the final forward or reverse positive semigroup replacement. All exact hypotheses of the free-product and Britton suppliers were checked; AC is precisely the declared normal-form assumption.

Dependencies: lem-boone-commutator-extracts-an-auxiliary-history, lem-boone-reduced-auxiliary-words-have-no-rule-pinches, lem-boone-positive-history-pushing, def-axiom-of-choice, lem-boone-base-groups-and-associated-free-bases, thm-normal-form-for-free-products, thm-brittons-lemma. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## thm-boone-special-word-equivalence

Accepted: Proof 1.1–2.1 composes extraction and reconstruction with precisely their shared G_2 equation and positive special-word hypotheses; pushing supplies the converse from finite symmetric semigroup equality. Empty tape contexts remain in the domain, and Sigma=q is the defining conjugated-t commutation. The statement retains AC and does not export the stronger signed induction as an unrestricted equivalence. Rotman p.431 Lemma 12.7 and the complete two algebraic proof directions were checked.

Dependencies: lem-boone-positive-history-pushing, lem-boone-commutator-extracts-an-auxiliary-history, lem-boone-positive-history-reconstruction, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## thm-novikov-boone-undecidability-of-the-word-problem

Accepted: Proof 1.1–4.1 fixes the whole finite presentation before varying binary input. Sigma(w) has X=h and Y=v(w)h, hence its star is exactly C(w), including empty input. Copying, reverse scanning and finite sign lookup compute the full four-copy commutator by terminating finite delimited procedures. Composing with a total fixed-presentation decider contradicts the already proved terminal-equality undecidability. The published fixed-word-problem definition was read and matches the input domain. AC is inherited only through the group equivalence. Rotman p.431 Theorem 12.8 and Simpson p.4 Theorem 8, including its surrounding proof, confirm the fixed-presentation quantifier; the misprinted short test in Rotman Corollary 12.9 is not used.

Dependencies: thm-fixed-finite-semigroup-has-undecidable-terminal-equality, def-boone-group-presentation-and-special-word, thm-boone-special-word-equivalence, def-word-problem-for-a-fixed-finite-presentation, def-axiom-of-choice. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## ex-boone-sharp-is-not-word-inversion

Accepted: Verification 1.1–2.1 computes sign change in place and inverse spelling in both cancellation orders. The explicit symbols s_0,h are distinct even for a singleton machine tape alphabet. The two reduced length-two spellings differ, while empty and length-one cases agree. The example correctly limits the distinction to spellings and does not infer inequality in an arbitrary quotient. Its generated provenance is appropriate for this leaf calculation. Source convention checked at Rotman pp.430–431.

Dependencies: def-boone-group-presentation-and-special-word. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## ex-boone-halting-cleanup-through-an-empty-right-tape

Accepted: Verification 1.1–3.1 gives the exact contexts for right erasure, left erasure and final marker deletion. Both intermediate words are valid augmented stopping configurations with empty right tape. The trace remains valid when a=b=s_0, and no reachability from a selected input is assumed. This is a sound generated leaf example of the actual three cleanup relations, checked against Rotman p.427 and the local definition.

Dependencies: def-boone-machine-semigroup-and-augmented-configurations. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## ex-fixed-boone-undecidability-implies-uniform-undecidability

Accepted: Verification 1.1–2.1 hard-codes the single finite presentation in a terminating wrapper. Correctness and totality of the proposed uniform algorithm on all valid pairs give a forbidden total fixed-presentation decider; the empty and cancellation-word computations are illustrations, not the logical basis of the contradiction. AC is expressly propagated in the statement, Given paragraph and contract from the cited theorem; the wrapper itself uses no new choice. The generated example remains a leaf. Rotman p.431 Theorem 12.8 supplies the stated fixed-instance context.

Dependencies: thm-novikov-boone-undecidability-of-the-word-problem. No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## boone-machine-simulation-and-fixed-presentation-undecidability

Accepted: The A page orders all thirteen assigned suppliers and consumers consistently with their actual arguments. Its summary accurately describes the fixed machine, semigroup equivalence, embedded HNN subgroups, two-orientation reconstruction and fixed-presentation conclusion. The separation of choice-free machine/semigroup work from AC-dependent group normal forms matches the item contracts. No additional unproved result is introduced by the prose.

No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## boone-machine-simulation-and-fixed-presentation-undecidability-examples

Accepted: The B page contains exactly the three assigned generated leaf examples, and its short summary matches their verified spelling, cleanup and algorithm-specialization calculations. The A companion supplies all used claims. No new mathematical assumption or load-bearing forward reference is introduced.

No repair or unresolved obligation. Next: remaining assigned review and scoped checks.

## Batch 13 source evidence and dependency disposition

Read the recovered complete relevant sections of [Rotman, Chapter 12](https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf): printed pp.420–423 (three instruction types and five basic moves), p.425 Exercise 12.11 (single stopping state), pp.426–433 (positive presentation, history equivalence, special-word presentation and full sufficiency proof), and pp.438–447 through the formal reconstruction QED (HNN construction, extraction, no-pinches and signed-word reconstruction). Local text: `/tmp/uc19-rotman-EAIf3e/rotman-word-problem.txt`; PDF SHA-256 `928e6db26912dd7441b13d4d6dff58cfaf5cf7ef07ba0cb819a259223f7352fd`. This was an existing recovered source, not a newly fetched or stamped receipt. The current web search located the authoritative Chicago PDF; web open returned an internal error. The cache supplied the required complete text, so no further source recovery was needed.

The exact source endpoints checked are Lemma 12.7, p.431: for a positive special word, commutation of k with its conjugated t is equivalent to positive semigroup equality to q; and Lemma 12.15, pp.443–447: a rule-reduced auxiliary equation with freely reduced signed tapes forces positivity and terminal semigroup equality. The authored argument checks the edge isomorphisms, signed rule orientations, endpoint signs, empty remainders and base embeddings before applying either conclusion. It supplies local arguments for the source's omitted reverse orientation and avoids the printed cleanup, free-state-factor and shortened-commutator errors. No source theorem is assumed as an unproved local supplier.

Read [Simpson, A Slick Proof](https://sgslogic.net/t20/logic/seminar/050517.pdf), Definition 1, p.1, and Theorem 8 with its full proof, p.4. Definition 1 uses the relation p_i^{-1} h p_i=phi_i(h) for actual subgroup isomorphisms; Theorem 8 constructs one finite presentation with undecidable word problem. These corroborate the convention and quantifier only; the modular-machine proof is not a dependency of this batch.

The manifest's eight external prerequisite pages remain sufficient under the established scope. All directly used external item statements were read, with the relevant free-group, free-product, Britton/base-embedding and HNN normal-form proofs checked. All internal suppliers precede their consumers. The owned frontier input remains `[]`: batch 13 uses the published recognizer directly and consumes no changing same-run supplier, including batch 12. The unified frontier refresh confirms batch 13 is reviewed and has no owned consumer edges.

## Batch 13 published findings and changes

The three existing U-C19 A-P consumers were reread: `fs-every-finitely-presented-group-has-solvable-word-problem`, `fs-unsolvable-word-problem-means-no-word-can-be-decided`, and `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only`. Their deps and [L1] still use the recorded Novikov–Boone remark; the individual-word refutation still needs a concrete witness. The canonical published-consumer ledger already records these defects. Under the required mkdir lock, reread and merged their current supplier status, precise repair evidence/source locator and three deduplicated index rows. The supplier is now an authored draft locally accepted at 6B, not published. All three consumers remain A-P, with classification counts unchanged. No published content was edited. The future repairs must replace the recorded dependency with `thm-novikov-boone-undecidability-of-the-word-problem` and propagate AC; the individual-word item must calculate the empty-word instance. These consumers supply no owned argument.

No new mathematical or workflow defect was found, so no new defect-ledger row was added. No authored mathematical repair, withdrawal, new local supplier, provenance change, page-order change, shared-plan amendment or Phase-2 scope amendment is required. The only owned contract additions are the specific completed risk reviews made during the item reads. All sixteen item and two page decisions are accepted with empty defect lists. The seven existing batch-12 decisions and prior report section were preserved.

## Batch 13 final local checks — 2026-09-10

- `risk-report.mjs research/phase-2-catchup-24-batch-13.proof-contracts.json --require-reviewed`: exit 0; all 16 routed, 7 CRITICAL and 4 HIGH reviews complete, zero errors.
- `proof-contract.mjs research/phase-2-catchup-24-batch-13.proof-contracts.json --strict`: exit 0; 16/16 checked, zero errors or warnings.
- `content-policy.mjs research/phase-2-catchup-24-batch-13.pages.json`: exit 0; 16 scoped items, zero errors or warnings.
- `tools/tsx-run.mjs tools/precheck.mts` with the exact sixteen scope item paths: exit 0; 15 proof-bearing items checked, zero failing. The definition-only group presentation is skipped. No reflow was necessary because authored content did not change.
- `rendercheck.mjs` with the exact sixteen item paths and two page paths: exit 0; 18 files pass the real renderer YAML and KaTeX parsing checks.
- `frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24`: exit 0; refreshed and deduplicated; reviewed batch 13 has zero owned frontier edges.
- Exact-text comparison: all 47 contract supplier quotations occur in their current supplier files, and all 71 derivation rows match the current authored arguments. The 18 owned decisions match the exact scope; seven other-batch decisions remain.

No unresolved mathematical or source-understanding blocker remains in this assigned 6B review. Historical shell-liveness/source-backing transport gates were not rerun and are not represented as passed or waived. The engine owns full-frontier gates, hashes and subsequent transitions; no judgment tool, verification stamp, dispatch or publication action was performed. Next action is the engine-owned join and unchanged 6C/6D protocols.
