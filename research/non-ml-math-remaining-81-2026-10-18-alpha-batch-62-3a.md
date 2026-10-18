# Batch 62 Step 3a Alpha report

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-62`.

Scope has no touched items, page changes, reader findings or refuter findings. Pre/post item, contract, manifest and page snapshot entries are identical. Exactly zero decisions are owed; risk reviews remain mandatory for six items. No repair or judgment is claimed.

## Dependency-ordered review

### Level 4: thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization

Reviewed all five proof steps against the current ten direct suppliers and reader/refuter evidence (both finding lists empty). For ell>=3, delta=2cos(pi/ell)>0, q is a unit and v+1=q delta is nonzero. Expanded the quadratic, braid difference and (Ti+1)(Ti+1+1)(Ti+1)=Ei+v(Ti+1) identities; the quotient inverse satisfies both adjacent relations. Pullback closure has Markov coefficient q/delta-1=-1/(q delta). The free Hecke tower decomposition survives base change and gives uniqueness by restriction and cyclicity, without generic semisimplicity or parameter division. Ranks one and two have empty parabolic-generator sets; rank zero is only the scalar closure convention, not a T0 rule. No choice or iff branch is needed. Source convention checked in Iohara–Lehrer–Zhang §1.2 (negative generators fi=-Ui); the local proof supplies the quotient/trace argument. No mathematical defect or unmet prerequisite found.

Current claim: for q=exp(pi i/ell), ell>=3, the specialized Ocneanu trace descends through the six-term Hecke ideal and equals normalized diagram closure. Direct prerequisites: Markov-trace definition and theorem; generic Hecke definition, standard-basis theorem and free-tower lemma; closure definition and component identities; generator-presentation definition, spanning theorem and presentation isomorphism. Sources: https://arxiv.org/pdf/1702.08128 §1.2, printed p.2, equations (1.1)–(1.2). Risk review complete; next: zero-loop example.

### Level 4: ex-temperley-lieb-zero-loop-normalized-trace-fails

Reviewed both verification steps and the three direct suppliers against empty reader/refuter finding lists. The diagram category is a free complex module and closure assigns one loop to the rank-one identity, giving Tr1(1)=0 at delta=0. In C, zero is not a unit; every scalar multiple c Tr1 still takes the identity to zero. Thus precisely the claimed scalar normalization fails; the unnormalized closure and rank-zero empty identity remain defined. No assertion that all unrelated normalized functionals fail is used. No selection, limiting, or iff argument is required. Chen Definition 2.1.7 and §5.1 confirm the unnormalized closure convention; normalization is conditional on a unit in the local definition. No defect or prerequisite gap found.

Suppliers: def-temperley-lieb-closure-trace-and-partial-trace, lem-temperley-lieb-closure-trace-component-identities, def-temperley-lieb-diagram-category. Source: Chen https://arxiv.org/pdf/1502.06845 Definition 2.1.7, PDF p.16; §5.1, PDF p.47. Risk review complete; next: localization example.

### Level 5: ex-temperley-lieb-localization-denominator-v-plus-one

Reviewed both verification steps, the generic Hecke definition and its standard-basis theorem, the actual normalized-generator clause of the published Jones-specialization definition, and the reviewed trace-descent theorem. In D, (v+1)(v+1)^(-1)=1 rules out a unital map v->-1. Base change preserves the rank-two basis {1,T1}; at v=-1, x=T1+1 is nonzero and x^2=0, so cx is idempotent only for c=0. The conclusion concerns an idempotent generator, so the zero scalar is not a counterexample. Over D the quadratic identity gives e_i^2=e_i. The published supplier is used only for this algebraic generator clause, not its link-invariance/AC assertions. No quotient semisimplicity, limit or choice is assumed. Empty reader/refuter findings agree with the independent calculation; no mathematical defect or prerequisite gap found.

The exact claim is failure of the v=-1 specialization of C[v,v^-1,(v+1)^-1], with nonzero square-zero T1+1 in the unlocalized specialized algebra. Sources provide generator conventions (Iohara–Lehrer–Zhang §1.2); the localization obstruction is the displayed elementary unit argument, not an external theorem. No source or Statement changed. Risk review complete; next: loop-two example.

### Level 5: ex-temperley-lieb-loop-two-jones-wenzl-projector

Read all three verification steps and all six direct suppliers. The recurrence at delta=2 gives [1]=1,[2]=2,[3]=3, so all required denominators are units in the nonzero ring C. Expanding (1-U1/2)^2 using U1^2=2U1 verifies idempotence and both annihilation identities. Its identity-diagram coefficient proves nonvanishing independently of trace. Partial closure gives ptr2(1)=2p1 and ptr2(U1)=p1, hence ptr2(p2)=3p1/2; full closure gives 4-(1/2)2=3. These agree with the exact n=2 partial-trace supplier and Chen §2.3 recursion. No generic-q expression with q-q^-1 in the denominator is used at q=1; the recurrence handles this endpoint. Reader/refuter finding lists are empty; no mathematical defect, choice use or unmet prerequisite found.

Current claim is p2=1-U1/2, nonzero idempotent, two-sided annihilation, partial trace 3p1/2 and closure 3. Suppliers: closure definition/component identities, diagram category, quantum-integer definition, unit-denominator recursion and Jones–Wenzl partial-trace/uniqueness lemma. Source: Chen §2.3, Theorem 2.3.2 and ensuing partial-trace identity, https://arxiv.org/pdf/1502.06845. Risk review complete; next: level-nine fusion table and boundary example.

### Level 9: ex-temperley-lieb-ell-four-and-five-fusion

Read both verification steps and the current three cited fusion, diagram-negligible-quotient and pivotal/ribbon-conversion theorems. Retained labels are 0..ell-2. Independently substituted every unordered positive-label pair in |a-b|<=c<=min(a+b,2ell-4-a-b), c congruent a+b mod 2: ell=4 gives {0,2},{1},{0}; ell=5 gives {0,2},{1,3},{2},{0,2},{1},{0}. Products with label 0 are the unit cases; symmetry supplies reverse pairs, so the tables are complete. The source proofs establish actual simple multiplicities using matrix Hom blocks/independent simple classes, not just a character equality. The conversion preserves labels and tensor products while correcting the pivotal sign; this example makes no assertion of an unmodified positive-loop pivotal equivalence and uses no framed-tangle universality or choice. Sawin Theorem 5 and proof confirm the semisimple ribbon quotient; local path splits remove the boundary summand before any forbidden division. No reader/refuter findings, mathematical defect or missing prerequisite found.

Direct suppliers are thm-temperley-lieb-rank-one-tilting-quotient-fusion-category, thm-temperley-lieb-root-negligible-quotient-is-semisimple and thm-temperley-lieb-rank-one-pivotal-ribbon-conversion. Also inspected the retained-path split/matrix-unit argument and exact filtration/character supplier statements used there. Sawin https://arxiv.org/pdf/math/0308281 Theorem 5 and complete proof, printed pp.25–26, describe the ribbon quotient; its tensor rule is proved in the local supplier and evaluated here. This is a review of the assigned use, not a new certification of every transitive tilting prerequisite. Risk review complete; next: order-three boundary.

### Level 9: ex-temperley-lieb-order-three-root-boundary

Reviewed both verification steps and all eight direct supplier interfaces, including the complex semisimplicity criterion at n=2<ell=3. Here delta=1,[2]=1,[3]=0: the denominator used for p2 is nonzero even though its trace vanishes. In the independent diagram basis {1,U1}, U1^2=U1, so p2=1-U1 is a nonzero idempotent and all four pairing entries are 1. For x=a1+bU1, pairing with either basis element gives a+b; hence the radical is exactly C(1-U1). The two nonzero orthogonal idempotents U1 and 1-U1 form a basis and identify the entire algebra with C direct sum C. The quotient by the trace-radical block is C, while the Jacobson radical is zero; no identification of these two radicals is made. This also proves the semisimplicity claim directly, and the root-quotient supplier identifies the negligible component. Iohara–Lehrer–Zhang Remark 2.2 agrees with this first-boundary distinction. No choice, undefined projector, vanishing-denominator division, reader/refuter finding or mathematical defect found.

Suppliers: root-negligible-quotient and complex-semisimplicity theorems; quantum-integer and recursion definitions; JW partial-trace/uniqueness lemma; closure and diagram definitions; generator-spanning theorem. Sources: Iohara–Lehrer–Zhang https://arxiv.org/pdf/1702.08128 §2.1, Remark 2.2, printed p.3; Chen §2.3 for the recursive/trace convention. Risk review complete; all six ordered reviews finished.

## Dispositions and evidence limits

No confirmed mathematical defect, unmet prerequisite, defective published supplier, affected outside consumer, proposed withdrawal or item repair was identified. Published content remained read-only. All six item raw SHA256 hashes equal the reader-post snapshot, which equals reader-pre; the identical snapshot contract/manifest/page entries show no historical reader delta. Only risk-review audit enrichment is being added to the owned contract. No fresh decision is owed for this enrichment because these six carriers are untouched/unflagged in the authoritative scope. The decisions file therefore contains an empty array.

Both unchanged pages were opened as context; no page-only obligation exists. Their summaries agree with the reviewed trace result and examples. The existing 34 cross-batch dependency records remain present; their prior review/readiness qualifications are retained. No Statement or Definition changed and no consumer propagation is triggered. The shared frontier ledger records this review without removing or recertifying prior entries.

External source checks were limited to the conventions and exact relevant sections identified above; no full-book or full transitive-library audit is claimed. In particular, the localization obstruction is proved locally by the unit equation, rather than imported from Chen’s diagram definition. Existing verification fields in outside supplier carriers are historical evidence and were not used as mathematical verdicts or changed.

## Local checks

Initial risk-report completed successfully and routed two CRITICAL plus four HIGH items. All six now have specific complete risk_review entries. Final command `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-62.proof-contracts.json --require-reviewed` exited 0: `risk-report: 0 error(s), 6 item(s) routed`. No item was changed, so proof-layout, reflow and item-repair precheck are not applicable. No judge, stamp, dispatch, engine transition or gate battery was run.
