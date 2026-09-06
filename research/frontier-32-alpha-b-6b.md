# Frontier 32 Step 6b Alpha report — group b

Run: `frontier-32`

Group: `b` (`6b-b`)

Owned batches: `3`, `5`, `6`

## Scope and evidence

I adjudicated only the obligations routed by
`frontier-32-step6-scope-{3,5,6}.json`. For each batch I read the current item
or page carrier, reader report and findings JSON, refuter report and JSON, the
owned proof contract and manifest, and every dependency or source statement
needed to test the finding. The exhaustive machine-readable result is
`research/frontier-32-alpha-b-6b-decisions.json`: it contains exactly 64
decisions, one for each routed obligation, 64 distinct defect-ledger
references, and a current `subject_sha256` on every decision.

The owned obligation counts are:

- batch 3: 37 (one touched item and 36 refuter findings);
- batch 5: 25 (16 touched items, one reader finding, and eight refuter
  findings);
- batch 6: two (one touched item and one refuter finding).

## Adjudication and repairs

### Batch 3 — Radon measures and Riesz--Markov--Kakutani

The reader's repair to
`lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` was mathematically
correct: continuity of the zero extension follows from continuity on the
compact closure and vanishing on its boundary, not from the boundary being a
relative neighbourhood. I retained that repair and amended its proof contract
and risk record (`amended_repair`).

All 36 refuter findings were confirmed fatal. Thirty-four item carriers
contained authoring imperatives instead of statements and proofs; the two page
carriers repeated the same false completion claim. The repair replaces every
placeholder with a quantified claim and a checkable proof or computation, and
updates both RMK page introductions accordingly. The repaired chain now:

- constructs the RMK outer content without extended-real subtraction, proves
  countable subadditivity using a finite subordinate partition on compact
  support, verifies Caratheodory measurability, and derives the compact-set
  formula, integration identity, inner regularity, and uniqueness;
- proves regularity under sigma-compactness of open sets, the
  second-countable LCH corollary, Radon regularity of Lebesgue measure, Lusin's
  theorem, and density of `C_c` in finite-`p` spaces with their exact finiteness
  hypotheses;
- states the real and complex `C_0` representation results with the correct
  real/imaginary decomposition, global finiteness, total variation, and
  Radon-class uniqueness;
- makes `AC_omega` and `def-countable-choice` explicit in the ordinal club
  arguments, keeps every constructed countable supremum below `omega_1`, and
  proves the Dieudonne measure and eventual-constancy claims;
- supplies explicit witnesses for all false statements and representing-measure
  examples. In particular, the wedge counterexample uses Baire category to
  find an interval in one closed level and then sums its column masses, so the
  claimed failure is not resting on an unstated uniform-bound assumption.

The principal source was Donald L. Cohn, *Measure Theory*, 2nd ed., Chapter 7
(`https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf`), checked against the
current statements rather than treated as a blanket citation.

### Batch 5 — modes of probabilistic convergence

Of the 16 touched carriers, six reader repairs were accepted unchanged and ten
were amended to synchronize corrected contracts, citations, or required risk
reviews. The reader finding on
`ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence`
was confirmed fatal: `a_k=0` makes the proposed recursive probability bound
unavailable even for `X_n=1/n`. The statement and Given block now require
`a_k>0` and `b_k>0`; summability and `a_k\to0` then give the claimed almost-sure
subsequence by Borel--Cantelli.

All eight refuter findings were confirmed fatal and repaired:

- Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 4.6.3 is now
  the exact locator for uniform integrability plus convergence in probability
  iff convergence in `L^1`, including integrability of the limit;
- dominated `L^p` convergence now cites and applies Durrett Theorem 1.5.8 to
  `|X_n-X|^p`; the former Roch section did not state this result;
- Durrett Exercise 3.2.8 is described accurately as giving the comparison
  transform `t/(1+t)`. The library's `min(1,t)` metric is proved directly,
  including well-definedness on a.e. classes, definiteness, triangle
  inequality, and both convergence directions;
- the fast-subsequence hypothesis defect is repaired consistently in its
  statement, facts, proof contract, and manifest evidence.

The Durrett checks used
`https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`. Roch, Lecture 3,
Theorem 3.14 (`https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf`)
was retained only for the continuous-mapping result it actually states.

### Batch 6 — lacunary Fourier series

The reader's Riesz-product coefficient correction in
`lem-riesz-product-for-a-hadamard-lacunary-set` is retained with synchronized
risk evidence (`amended_repair`). The sole refuter finding was confirmed
nonfatal: the old proof of `thm-lacunary-lp-norm-equivalence` established only
the upper estimate when `p>=2`. The repaired lower estimate is the direct
Holder consequence `||f||_p>=||f||_2` on normalized Haar measure, with the
`L^2` coefficient identity giving `||f||_2=(sum |a_j|^2)^{1/2}`. This leaves
the theorem and its cited Grafakos Theorem 3.6.4 scope unchanged.

## Risk review

I ran `tools/risk-report.mjs` without `--require-reviewed` on every owned
contract before closure and read each HIGH or CRITICAL proof against its
reader/refuter and citation evidence. Every required item has a specific
`risk_review: {status: complete, reviewer: alpha-6b-b, notes: ...}`. The
current contracts contain ten completed reviews in batch 3 (including all
seven items currently above the threshold), 18 in batch 5, and three in batch
6. The notes identify the actual issue checked: extended-real and compactness
cases in the RMK construction, choice and ordinal bounds, both directions of
the probability-convergence equivalences, denominator and endpoint cases,
and signed-frequency uniqueness and both norm bounds for lacunary sums.

Re-running all three risk reports with `--require-reviewed` reports zero
errors.

## Validation

The focused gates are clean:

- reflow and focused precheck: all 57 routed proof-bearing item carriers pass;
- rendercheck: all 61 routed item/page carriers pass under the real KaTeX and
  YAML parsers;
- proof-contract strict: batch 3 `36/36`, batch 5 `26/26`, batch 6 `11/11`,
  with zero errors or warnings;
- manifest dependency and content policy: 88 scoped items, zero errors and
  zero warnings;
- risk report with `--require-reviewed`: all three contracts, zero errors;
- boundary audit: batch 3 has no template or contradicted candidates; the
  combined owned scan has no contradicted candidate;
- defect-ledger append: 64 closed rows; `defect-ledger validate --run
  frontier-32` checks the full current run ledger with zero errors;
- Step-6 adjudication checks after stamping: batch 3 has 37 obligations,
  batch 5 has 25, and batch 6 has two, all with zero errors;
- focused whitespace/diff check: clean.

A broader diagnostic render pass also exposed seven pre-existing render
failures in untouched carriers, and boundary audit reports template-reuse
candidates in untouched portions of batches 5 and 6. None is contradicted by
the audit detectors, none was made stale by an owned repair, and this dispatch
does not authorize editing those carriers. They therefore are not represented
as group-b defect rows.

## Handoff

No owned defect or mathematical obligation remains unresolved. I did not
dispatch readers/refuters, alter another Alpha group's carriers, decide a
stage transition, or issue a judge stamp.

## Gate repair cycle 1 — `step6-routing-adjudicate`

Reread the five live batch-5 probability items, their dependencies and endpoint
cases, Reader 5's repairs, the refuter scope, the frozen post-reader carrier,
and the later contract-audit record. The item and manifest components still
retain the reader repairs; `contract-audit-8` subsequently changed the five
proof-contract records. The touched decisions are now `amended_repair`, with
five `route: gate` supplemental decisions and five matching rows in
`frontier-32-alpha-b-6b-gate-ledger-rows.json`. No new mathematical defect was
found.

The full primary gate now reports 717 routed items, 359 adjudication
obligations, and zero errors. Run-wide defect-ledger validation checks 394
`frontier-32` rows with zero errors.
