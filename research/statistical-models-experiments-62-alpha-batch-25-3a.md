# Step 3a adjudication: batch 25

Run: `statistical-models-experiments-62`; group: `batch-25`.

The routed scope contains no touched items, changed pages, reader findings, or refuter findings. The required decisions array is empty. Reader pre/post item, contract, manifest and page hashes agree throughout; no reader repair requires acceptance. Four risk reviews were completed in the generated order. Only the owned contract risk-review fields and the two requested output files were written.

## Level 2: observed-data likelihood lemma

`lem-observed-data-likelihood-under-response-model`: reviewed all steps, facts, and direct supplier statements/definitions. Step 1.1 gives a finite measure with exactly the original null sets by positive summable weights on a measurable finite-measure partition. Step 1.2 uses measurable projections, domination, and the sublaw bound to apply RN to finite measures with a common finite reference. AC supplies simultaneous representative selection. Step 2.1 sums finitely many pattern sections and uses kernel normalization. Step 3.1 applies Tonelli with the stated sigma-finite product decomposition. Empty blocks use unit singletons; zero response sections and probability-one patterns cause no difficulty. Product section integrals are density versions and can be infinite on null sets; this does not contradict the availability of selected finite representatives. No defect found; risk review complete in the contract. No item edit or consumer repair.

Sources opened: [Lu Mao, Chapter 1](https://lmaowisc.github.io/missing_data/chapter-1.html), section 1.2, web lines 57-75; [NRC, Chapter 4](https://www.nationalacademies.org/read/12955/chapter/6), pp.60-61, web lines 395-419. These support the likelihood interpretation; the general equivalent-reference construction is checked from the local proof and exact RN/Tonelli suppliers.

Next action: review the binary theorem, then level-3 factorization and the finite examples. No unresolved obligation for this lemma.

## Level 2: binary-outcome bounds

`thm-binary-outcome-mnar-nonidentification`: all four steps and eight cited facts checked against the current definitions. Writing the missing success mass as c yields 0<=c<=1-a and m=b+c; the constructed four-cell law realizes every m in the claimed interval. Its observed masses are b,a-b,1-a regardless of m. The interval collapses exactly at a=1. With MAR, the empty observed projection for pattern zero forces a constant response kernel on the full-law support and hence b=a*m. For a=0 every Bernoulli full law remains compatible with MAR, including deterministic endpoints. Null-state kernel choices are explicitly immaterial. Checked b=0, b=a, a=0, a=1 and both interval endpoints. No defect; risk review complete. Source context: Mao Chapter 1, sections 1.6-1.7; the exact finite argument is verified locally.

Next action: review the MAR factorization theorem and its additional analytic suppliers before the example. No unresolved level-2 obligation.

## Level 3: MAR factorization

`thm-mar-ignorable-likelihood-factorization`: three steps and all exact supplier statements reviewed. A common measurable factor across all full-data parameters is explicitly assumed. Clipping preserves its almost-sure kernel identities. Pushforward integration and integration against q follow by nonnegative simple approximation and monotone convergence; Q is finite, so the RN integration supplier applies on every simple-function cell. The product h*q is a finite selected density version. The coordinate integrals agree as density classes, with the explicit version and uncountable-null-set caveats preserved. The ratio has a positive denominator under the stated hypotheses; the profile factor is common because the same nonempty Psi is allowed for every theta. The supremum identity also holds at q=0 and at zero response supremum and requires no maximizing psi. No defect; risk review complete. Sources: Mao section 1.4 (lines 95-104) and NRC pp.60-61 (lines 395-419); both include the parameter-distinctness condition. No Statement/Definition changed and no consumer repair is needed.

Next action: verify the finite mechanism examples and complete scoped local checks.

## Level 3: finite mechanisms and observational equivalence

`ex-missingness-mechanisms-and-nonidentification`: both verification steps and all suppliers checked. All three kernels and their complements lie in [0,1] and normalize. Independent fair X,Y put both Y values at each X in the support, so the third kernel cannot factor through observed X for pattern zero. The X-dependent second mechanism factors for both patterns but is not constant. The two table rows normalize and give identical observed masses (1/4,1/4,1/2), population means 1/4 and 3/4, and respondent mean 1/2. Their conditional response probabilities on Y=(1,0) are (1,1/3) and (1/3,1), so both fail MAR with an empty pattern-zero projection. Zero cells leave the Y marginals positive. The rows attain the two endpoints of the lower-level theorem's interval; that theorem supplies intermediate attainability. No defect; risk review complete. Source context: Mao sections 1.3-1.7 and NRC Chapter 4, pp.51-52, patternwise definitions.

## Other scope and maintenance

The two definitions, death example and both page summaries were read as context. The full/observed-data spaces and pattern-specific sigma-algebra are well typed, including empty coordinate blocks. The definitions classify a supplied kernel, without asserting existence on arbitrary spaces. The death example assumes no post-death value on a positive-probability event and correctly says that the proposed score is not a random variable on the full population. No additional verdict is owed for these unchanged, unflagged carriers. No claim is made of independently reading the Hernan-Robins PDF; this context example's conclusion follows directly from its explicit assumptions and the random-variable definition.

No published defect, proposed withdrawal, missing prerequisite, or outside-consumer alert was found. No Statement or Definition changed. The existing batch cross-batch dependency input is empty; current manifests confirm no cross-batch logical edge, and all 20 outside direct suppliers are published; the shared dependency and published ledgers need no content change absent an affected edge or defect. Stable IDs and all page placements remain present. No defect-ledger rows are created.

Next action: finish scoped artifact/hash checks and run the required risk report with --require-reviewed. No mathematical blocker remains.

## Final local checks and handoff

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-25.proof-contracts.json`: exit 0, seven items routed, two CRITICAL and two HIGH items identified, no errors.
- The same command with `--require-reviewed`: exit 0, seven items routed, no errors; all four required reviews have complete item-specific notes.
- Compared the frozen pre/post projections: all seven item, contract and manifest hashes agree, as do both page projections. All seven current item raw SHA-256 values equal their reader-post item hashes. Contract hashes change now because the four risk reviews were added; reader history is preserved.
- Every contract citation quote is present in its current supplier after whitespace normalization. Read the exact current supplier Statements/Definitions; checked the routed proof derivations and applicable boundaries independently. No transitive prerequisite proof audit is claimed.
- Current run-manifest ownership confirms zero cross-batch logical item edges. The existing empty owned dependency input remains accurate; no ledger input changed and no refresh was needed.
- Wrote and parsed the requested version-1 decisions JSON with run and group `batch-25` and exactly zero decisions, matching the routed obligation count.

No items were edited, so reflow, precheck and final proof-layout on changed item paths are not applicable. No mathematical repairs, repair-confidence claims, defect rows, published edits, judge cycles, stamps or gate battery were performed. No blocker remains. The engine owns subsequent decision hashing, validation and stage transitions.
