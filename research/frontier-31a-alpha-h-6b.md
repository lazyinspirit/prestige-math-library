# Frontier-31a Step 6b Alpha report — group h

Run: `frontier-31a`

Role: routed group Alpha (`6b-h`)

Owned batches: `4`, `15`

## Evidence opened

I opened the two live scope files, both reader reports and findings JSON files,
both refuter reports, the current manifests and proof contracts, every routed
carrier, every HIGH/CRITICAL proof, and the cited dependencies needed to check
the disputed inferences. The exact routing records are
`research/frontier-31a-step6-scope-4.json` and
`research/frontier-31a-step6-scope-15.json`; the reader records are
`research/frontier-31a-reader-4.md`,
`research/frontier-31a-reader-findings-4.json`,
`research/frontier-31a-reader-15.md`, and
`research/frontier-31a-reader-findings-15.json`; the refuter records are
`research/frontier-31a-refute-4.json` and
`research/frontier-31a-refute-15.json`.

For batch 4 I reread Kajino, *Probability Theory*, Definition 3.64 and
Theorem 3.65 with its proof (PDF pp. 100--104), Biskup, *MATH 275D*, Theorem
2.4, Lemmas 2.6--2.8, and Proposition 2.9 with proofs (PDF pp. 1--5), and
Shalizi, *Building Processes*, Theorem 29 and its proof (PDF pp. 4--5). The
live URLs are recorded in the relevant item frontmatter. For batch 15 I reread
Huang--Ju--Zhou, *Erdős--Hajnal beyond the five-vertex path*, version 2,
complete Section 5, especially Lemma 5.1 and Claims 5.1.1--5.1.2, at
`https://arxiv.org/html/2606.06258v2` (source lines 856--915 in the harvested
view). These source passages were checked against the current carriers rather
than treated as verdicts.

## Decisions and repairs

The machine-readable file
`research/frontier-31a-alpha-h-6b-decisions.json` contains exactly one routed
decision for each of the six touched obligations and five refuter obligations,
plus three gate decisions for defects found during Alpha's required risk review.
Every decision has a unique closed defect-ledger row and a current
`subject_sha256` stamp.

| Obligation | Verdict | Closed row |
| --- | --- | --- |
| `touched:4:lem-countable-product-cylinder-premeasure-is-countably-additive` | `amended_repair` | `frontier-31a-S6-h-touched-4-countable-cylinder-premeasure` |
| `touched:4:thm-borel-probability-measures-on-polish-spaces-are-inner-regular` | `amended_repair` | `frontier-31a-S6-h-touched-4-polish-inner-regularity` |
| `touched:4:thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` | `amended_repair` | `frontier-31a-S6-h-touched-4-kolmogorov-compactness` |
| `touched:15:def-integral-geometric-layers-of-a-decreasing-block-partition` | `accepted_repair` | `frontier-31a-S6-h-touched-15-layer-definition-display` |
| `touched:15:lem-integral-geometric-layers-have-rounded-cutoff-bounds` | `amended_repair` | `frontier-31a-S6-h-touched-15-rounded-terminal-cutoff` |
| `touched:15:thm-the-structural-comb-partition-criterion-implies-property-star` | `amended_repair` | `frontier-31a-S6-h-touched-15-final-theorem-delimiters` |
| `refuter:4:1` | `confirmed_fatal` | `frontier-31a-S6-h-refuter-4-1` |
| `refuter:4:2` | `confirmed_fatal` | `frontier-31a-S6-h-refuter-4-2` |
| `refuter:15:1` | `confirmed_nonfatal` | `frontier-31a-S6-h-refuter-15-1` |
| `refuter:15:2` | `confirmed_nonfatal` | `frontier-31a-S6-h-refuter-15-2` |
| `refuter:15:3` | `confirmed_nonfatal` | `frontier-31a-S6-h-refuter-15-3` |
| `gate:frontier-31a-S6-h-gate-4-nonempty-product` | `confirmed_fatal` | `frontier-31a-S6-h-gate-4-nonempty-product` |
| `gate:frontier-31a-S6-h-gate-4-countable-support-choice` | `confirmed_fatal` | `frontier-31a-S6-h-gate-4-countable-support-choice` |
| `gate:frontier-31a-S6-h-gate-4-kolmogorov-active-supports` | `confirmed_fatal` | `frontier-31a-S6-h-gate-4-kolmogorov-active-supports` |

Batch 4 repairs:

1. `lem-countable-product-cylinder-premeasure-is-countably-additive` now states
   both countable choice and dependent choice. The proof distinguishes the
   fixed countable choices (`def-countable-choice`), countability of the union
   of supports (`thm-countable-union-of-countable`), and the prefix-dependent
   compatible recursion (`def-dependent-choice`). Its current invariant is that
   every remaining cylinder section has tail mass at least
   `eta/2^m`; continuity from above keeps each successor intersection nonempty.
   `thm-countable-product-of-probability-spaces`,
   `cor-countable-independent-copies-exist`, their contracts, the manifest, and
   `rem-kolmogorov-extension-state-space-boundary` now carry the same scope.
2. `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined`
   is now titled and concluded only as a well-defined finitely additive
   cylinder law. Its statement also assumes the full product is nonempty; step
   1.1 fixes a base point to turn a finite-coordinate symmetric-difference
   witness into a full product point. The former `def-premeasure-on-an-algebra`
   dependency was removed.
3. `lem-cylinder-sigma-events-depend-on-countably-many-coordinates` now states
   countable choice. Countable-union closure explicitly selects one support for
   each event and invokes `thm-countable-union-of-countable`. The manifest,
   contract, `rem-cylinder-sigma-algebra-versus-full-product-power-set`, and
   `cex-a-noncylinder-path-functional-may-fail-measurability` were synchronized;
   the counterexample uses the stronger stated AC hypothesis.
4. Reader 4's current inner-regularity repair is sound: the empty-space case,
   countably chosen finite ball covers, compact core with internal finite nets,
   open-set approximation including `G=P`, and the two-sided regularity
   lambda-system cover the relevant endpoint and closure cases. Its exact new
   dependency is `thm-dynkin-pi-lambda`.
5. Reader 4's Kolmogorov repair correctly confines compact replacements to
   finite active-coordinate Polish products. Alpha repaired one remaining
   normalization error: repeating the cylinder sequence cannot make its nth
   term depend on only the first n active coordinates. Current step 1.1 instead
   chooses nested finite supports `H_n` containing both the original support of
   `C_n` and the first n active coordinates. They exhaust the active set, and
   step 2.1 successively extracts compatible limits on them. AC fills inactive
   coordinates; Caratheodory and pi-lambda yield existence and uniqueness
   exactly on the cylinder sigma-algebra. The stale manifest reference to a
   Tychonoff route was also removed.

Batch 15 repairs:

1. In `lem-integral-geometric-layers-have-rounded-cutoff-bounds`, reader 15's
   terminal argument correctly separates the capped cutoff. Alpha additionally
   proved strict growth: for `2 <= r <= q`, `m_(r-1)+1` is at most `t` and at
   most `ell^(r/2)` because `sqrt(ell)>=2`, so it is admissible in the maximum
   defining `m_r`. Thus no layer is empty, including at `ell=4` and the terminal
   endpoint.
2. In
   `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade`,
   the structural condition is now applied in both directions. If two selected
   vertices had opposite relations, every vertex in the other nonempty selected
   block would be mixed, so the pair relation is uniform.
3. In `thm-the-structural-comb-partition-criterion-implies-property-star`, Fact
   F3 now says exactly what
   `lem-no-property-star-outcome-forces-a-small-structural-block-partition`
   proves. Step 1.2 explicitly relabels the finite partition in nonincreasing
   size order and records preservation of the partition, block bounds, purity,
   pattern-graph isomorphism type, and cross-block condition before integral
   layers are formed.
4. Reader 15's single-line definition display and restored inline-math
   delimiters remain present and render cleanly.

No item was withdrawn.

## HIGH/CRITICAL risk review

The initial owned-contract runs without `--require-reviewed` routed five batch-4
and six batch-15 items. Each now has
`risk_review: {status: complete, reviewer: alpha-6b-h, notes: ...}` with notes
that identify the actual mathematical hazard and its resolution:

- batch 4: `lem-countable-product-cylinder-premeasure-is-countably-additive`,
  `thm-countable-product-of-probability-spaces`,
  `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`,
  `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, and
  `lem-cylinder-sigma-events-depend-on-countably-many-coordinates`;
- batch 15:
  `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade`,
  `lem-integral-geometric-layers-have-rounded-cutoff-bounds`,
  `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade`,
  `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part`,
  `thm-the-structural-comb-partition-criterion-implies-property-star`, and
  `ex-integral-geometric-layers-for-fourteen-ordered-blocks`.

The final `risk-report.mjs --require-reviewed` runs pass for both contracts.

## Validation

- PASS focused reflow on every materially edited proof carrier.
- PASS focused precheck on ten edited proof/counterexample carriers: 10 checked,
  0 failing.
- PASS rendercheck on both owned A pages, both owned B pages, and the nine
  materially edited proof/counterexample carriers: 14 files clean.
- PASS strict proof contracts: batch 4, 22/22; batch 15, 12/12; zero errors or
  warnings.
- PASS manifest dependencies: batch 4, 29 items; batch 15, 14 items; zero
  errors.
- PASS content policy: batch 4, 29 scoped items; batch 15, 14 scoped items;
  zero errors or warnings.
- PASS risk reports with `--require-reviewed`: batch 4, 22 routed items; batch
  15, 12 routed items; zero errors.
- PASS `defect-ledger.mjs validate --run frontier-31a`: zero errors after
  appending the 14 group-h rows through the append-only interface.
- PASS `step6-scope.mjs stamp --run frontier-31a --group h`: all 14 decision
  carrier hashes sealed.

## Unresolved external gate and next action

There is no unresolved mathematical case in batches 4 or 15. The focused
`step6-scope.mjs check --phase adjudicate` reaches group h without reporting a
group-h decision, hash, carrier, or ledger error, but exits nonzero on two
pre-existing global published-content records for batch 14:
`published-claim-extra: lem-sheaf-condition-check-on-basis` and
`published-repair-extra: reader:14:1`. Batch 14 belongs to another dispatch, so
group h did not alter those artifacts. This is the named external blocker to a
globally clean Step-6 scope check.

The authorised next action is for the owner of batch 14's published-content
protocol to reconcile those two records; the 6c lead can then consume the
sealed group-h decisions for computed cross-group work. Group h makes no stage
transition decision.
