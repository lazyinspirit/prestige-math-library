# Batch 66 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-66`.

Scope has no touched/page/reader/refuter obligations; decisions array remains empty. Pre/post item and page snapshots agree. Risk-only reviews are required for three items in the supplied order. Reader and refuter reported no findings; those reports were treated as evidence, not acceptance.

## Completed level 1: lem-qftx-spinor-factorization

Reviewed the complete current lemma, `def-qftx-spinor-helicity`, the explicit Pauli/metric conventions in published `def-qft-dirac-projections`, and the lemma contract. The determinant identity is a direct expansion valid without the null assumption; the rest uses nonzero null momentum. A nonzero column constructs rank-one factors even if the other column vanishes. Equality of column spaces and comparison at a nonzero component prove uniqueness of the rescaling. Finite selection needs no arbitrary choice.

Local discovery / repair decision: confirmed nonfatal `pnf129-r2-b66-3a-class-cardinality`, repaired with `repair_confidence: 1`. The original final Statement sentence falsely said the equivalence class has one element. At p=(1,0,0,1), the distinct factor pairs ((2,0),(1,0)) and ((4,0),(1/2,0)) belong to that same class. Replaced only this sentence with the assertion that all factorizations form exactly one equivalence class; updated its manifest mirror. The proof already establishes this assertion; no proof rewrite or dependency change is needed. This is a new risk-review discovery, not a fabricated reader/refuter obligation.

Consumer search in items and library found the Definition discharge, `prop-qftx-helicity-polarization-ward`, and `thm-qftx-rational-bcfw-residue`. The Definition states uniqueness up to rescaling and agrees with the correction. The proposition uses only existence; the theorem uses existence and the determinant identity. Their exact cited claims are preserved; no consumer edit, further interface propagation or outside owner escalation is necessary.

Sources checked: [Marzolla](https://arxiv.org/pdf/1705.09678), §3, equations (3.1), (3.4), (3.8)–(3.10), PDF pp.12–13, for the explicit matrix, determinant and independent complex spinors. Only these relevant passages were read, not the whole work. The local construction and uniqueness proof were independently checked. The completed risk review is recorded in the owning contract.

Checkpoint: level-1 review and repair complete; subsequent completed work is recorded below.

## Completed level 2: prop-qftx-helicity-polarization-ward

Read its complete current proof and all five cited supplier facts. With the given alternating tensor, lambda_a r^a equals the defined bracket; the normalized difference has zero contraction with lambda. The one-dimensional kernel is spanned by raised lambda. The dotted argument has the same typing and sign. The raised Pauli map is invertible, so the difference of vectors is proportional to p; the complex-bilinear conservation assumption then gives reference independence. Coincident references give zero difference; every used denominator is explicitly nonzero. The corrected factorization supplier preserves all actual uses. No content repair is needed.

Source comparison: [Elvang–Huang](https://arxiv.org/pdf/1308.1697), §2.4, equation (2.49) and the following gauge-shift discussion, PDF pp.17–18; [BCFW](https://arxiv.org/pdf/hep-th/0501052), §3.1, equation (3.2), PDF p.8. Only the relevant formulas and explanations were examined. The local proof supplies the exact index convention and assumes conservation separately. Contract risk review completed before proceeding to the rational theorem.

## Completed level 2: thm-qftx-rational-bcfw-residue

Read the complete theorem and its four exact cited facts. Shifted outer products have determinant zero even if a factor vanishes at an exceptional z; no nonzero shifted-factor assumption is needed. Their added terms cancel. Removing all simple principal parts gives a rational function without finite poles, hence a polynomial, and its limit zero makes it identically zero. All listed poles are nonzero, permitting evaluation at zero and multiplication of each residue by 1/z_alpha. The optional channel formula is direct substitution of the explicit residue hypothesis. Nonzero channel derivatives make all denominators legitimate. No model decay, general QFT factorization, or experimental conclusion is derived.

Checked empty pole list (A identically zero), single pole A(z)=1/(z-1), excluded higher/coincident/zero poles, possible zero shifted factors, and finite spinor selection. The contact example was read as boundary context: A=c nonzero has an empty finite-pole sum and infinity residue -c in its own explicit convention. It needs no edit.

Source comparisons: [BCFW](https://arxiv.org/pdf/hep-th/0501052), §2 equations (2.1)–(2.7), PDF pp.3–6, plus the helicity-specific scope of §3.1; [Elvang–Huang](https://arxiv.org/pdf/1308.1697), §§3.1–3.2 equations (3.1)–(3.8), PDF pp.35–37; [Marzolla](https://arxiv.org/pdf/1705.09678), §5 equations (5.1)–(5.6), PDF pp.30–32. Relevant source formulas and qualifications were checked, not full books or unrelated model proofs. The local proof uses partial fractions instead of a contour argument. Contract risk review completed.

## Scope, diagrams and routing

All three required CRITICAL reviews are complete. Both assigned pages were inspected for diagram context; no TikZ/tikzcd occurs in the batch and no diagram is needed for these elementary linear-algebra and rational-function arguments. No defective published supplier was found in the used Pauli/metric conventions. Their unrelated operator/Fock and transitive proof material was not audited. No published ledger edit, withdrawn item, outside consumer repair or scientific escalation is needed.

The scope snapshot has no owed decision entries, and remains unchanged. The decisions file therefore has an empty array. The new local risk-review repair is explicitly decided above and references the single closed defect row; it is not relabelled as a historical reader repair. Engine collection must account for the newly changed risk-only carrier through its normal routing checks. No decision hash stamps, acceptance stamps, judge cycles or gates were generated here.

## Final local checks and handoff

- Initial `risk-report.mjs` on the batch contract, without `--require-reviewed`: exit 0; three CRITICAL and one MODERATE item routed. After all three Alpha reviews, the same command with `--require-reviewed`: exit 0, zero errors. The equivalence-class wording now triggers an additional risk signal in the lemma; its reviewed mathematical content is covered explicitly.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-66.proof-contracts.json --strict`: exit 0; four of four contracts, zero errors/warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qftx-spinor-factorization.md`: exit 0; one checked, zero failures.
- `rendercheck.mjs items/lem-qftx-spinor-factorization.md`: exit 0; YAML and all math parse.
- Final `proof-layout.mjs items/lem-qftx-spinor-factorization.md`: exit 0; one item, three steps, zero defects. No item edit followed this check.
- Raw current-carrier comparison: all five item hashes matched both reader snapshots before the repair; at handoff only the repaired lemma differs (`e15b354dc1fdec48b2538f55329fc168e0182a4ec2b8bd11fc2c0bd122c3c3b3`). Original pre/post snapshots remain unchanged. Manifest Statement and provenance mirror and empty decision inventory were explicitly checked.
- Closed ledger row `pnf129-r2-b66-3a-class-cardinality` appended using the ledger tool and its generated view refreshed; frontier dependency note appended for batch 66.

The attempted `content-policy.mjs --help` invocation treated `--help` as a filename and reported a batch-read error (despite process exit 0); this was a command-usage mistake, not a content result or a defect row. The actual manifest-scoped invocation is recorded below. No whole-run gate or publication claim is made.

Scientific blockers: none. Engine action: collect the normal artifacts and route the newly changed risk-only lemma through the ordinary current-content checks; do not treat the empty original obligation inventory as review acceptance of this new change. Published content and imports remain untouched.

`node tools/physics-support/content-policy.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-66.pages.json`: exit 0; five scoped items, zero errors, zero warnings.
