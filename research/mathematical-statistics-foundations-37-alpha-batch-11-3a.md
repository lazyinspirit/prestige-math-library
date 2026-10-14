# Batch 11 Step 3a adjudication

Run: mathematical-statistics-foundations-37. Group: batch-11. Scope: batch 11 only.

## Level 1: confidence-set definition

Accepted the reader repair to `def-confidence-set-and-coverage`. Current raw SHA256 is `89b2c751e06be19bb3ce5a04ee888b8c72c97c50360787c890fb4c54032bf3c0`, exactly the post-reader snapshot. Replacing only its added dependencies with the former singleton list reproduces pre-reader SHA256 `ce80817d37b10ee6814155fc331c1be9c9004792d711715d36da2056e4f78207`. Thus the complete Definition is unchanged. The statistical-experiment definition supplies probability laws on one measurable space. Nonempty Theta and measurable membership sections make the set of coverages a nonempty subset of [0,1]. The complete bisection proof in `cor-cauchy-reals-lub-complete` supplies sup(-S), so inf(S)=-sup(-S) exists. No parameter sigma-algebra, infimum attainment, or AC is required. Empty and full confidence outputs give coverages zero and one. For alpha=0/1 the inequality agrees in both directions with infimum coverage at least 1-alpha.

The reader's contract boundary evidence already records this argument. Synchronized the owning manifest dependency list, which had retained only the experiment dependency. No Statement/Definition changed; no consumer interface repair is needed. Repair confidence: 1. The missing dependency was nonfatal citation metadata, not a false definition.

## Completed level-3 reviews

`ex-discrete-pivot-inversion-is-conservative`: explicit countable additivity, the three-atom parameter-free law, generalized .1/.9 quantiles, measurable membership, and coverage 1>4/5 all checked. No defect.

`ex-known-variance-normal-mean-interval`: normal density normalization and affine law, AC inheritance, positive bounded density, both CDF tail limits via increasing events, IVT/uniqueness, symmetry/no atoms, and both directions of affine inversion checked. Requires sigma>0 and 0<alpha<1 exactly as stated. No defect.

`ex-uniform-maximum-pivot-confidence-interval`: finite maximum continuity, product rectangle law, CDF at and outside [0,1], exact central mass, and both directions of inversion checked. n=1 works; M<=0 gives an empty confidence output on a null event. No defect.

Each current complete argument and direct supplier statement was read. Specific complete risk reviews are recorded in the batch contract before advancing to level 5.

## Sources checked

[MIT Lecture 11](https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf), PDF pp.1-3: coverage/infimum definition, acceptance-event inversion, and pivot calibration. [USC Lecture 14](https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf), PDF pp.4,6, normal-pivot exercise, and p.14: definition, pivot inversion, discrete caveat and uniform-maximum exercise. Local claims are independently justified; lecture shorthand about a minimum does not assert infimum attainment here.

## Level 5: t interval and published findings

The complete four-step t-interval verification is sound. Its two in-run Gaussian suppliers were independently read: the projection proof diagonalizes a self-adjoint idempotent, orthogonal invariance preserves independent standard normals, and disjoint coordinate blocks remain independent. The mean/residual theorem uses the rank-one projection, positive chi-square degrees, and the explicitly defined measurable ratio (zero on the denominator-zero event). The t CDF mixture proof gives continuity, strict increase, symmetry and unique quantiles. AC covers all declared inherited choice hypotheses. n=2 works; n=1 and zero variance are excluded. Restriction to the common open full-measure D_n removes division by zero without parameter-dependent spaces. Pivot inversion is equivalent in both directions to the interval inequalities. Complete risk review recorded before advancing to level 7.

`reader:11:1`, `def-orthogonal-projection`: confirmed_nonfatal. Current Definition literally has the missing conjunction after V=W+W-perp. The exact finite-dimensional orthogonal-decomposition statement gives unique components; the equivalent final clause defines the same map, including W=0 and W=V. No mathematical ambiguity remains. Owner strategy: add “and” before “associates”; published content remains read-only. Its current raw hash is 3f3367502b3a8fa95ec93df1a6df6df72403bef7ea710617c81ddc7ebdd3f509; guard hash 20b435194cb8415db679333d556bc537b57134a909115e6ca15a055600a04663 matches the scope pre fingerprint.

`reader:11:2`, `cor-continuous-functions-are-borel-measurable`: confirmed_nonfatal. Current Proof 1.1 contains the duplicate interior [L1]. The full two-step proof directly applies the exact continuous-preimage theorem to every Borel set and the definition of Borel measurability. The stated Countable Choice assumption is supplied by AC in the Gaussian consumer chain. Owner strategy: remove the interior duplicate reference; no claim or consumer correction is needed. Raw hash 2ea3b096bdbcb87107febbf765c9b97dc142c2bcaf1356c1d947ab57f147955f; guard hash d4089cdae0161a58e007c8bfd779ed6a6ec261e12d0722be290be0f250879cbc matches scope pre fingerprint. Step 2.1 also repeats its step reference inside prose; this is the same harmless editorial pattern.

Both findings persist in current text. Their consumer is ex-exact-unknown-variance-normal-t-interval via thm-normal-mean-residual-independence-and-exact-t-pivot and the projection supplier. Disposition is nonfatal-recorded, not repaired, in the closed defect rows; owner maintenance remains pending. No unbound in-run observation or historical counterexample is involved.

## Level 7: binomial tail inversion

All four steps and ten supplier statements checked. The two finite counting identities telescope to the displayed strictly negative derivative for k<n, including k=0 and k=n-1; IVT and strict decrease give unique interior roots. The least CDF crossing exists; the strict rejection convention gives size less than alpha, including a zero rejection probability. Both directions of inversion give [0,U_x], with U_n=1. At n=1, U_0=1-alpha; at p=0/1 the true endpoint is covered surely. Finite-space countable additivity is immediate from summing finitely many atom masses. No defect or missing prerequisite; complete risk review recorded.

## Local citation corrections

The browser's complete source pagination shows USC slide8 on PDF p.10 (p.9 is a handwritten continuation of the preceding exponential exercise). Corrected source titles in ex-known-variance-normal-mean-interval and ex-exact-unknown-variance-normal-t-interval, and synchronized their manifest references. These are nonfatal locator errors: the stable URL and exact slide8 identify the normal exercise uniquely. Mathematical text, hypotheses and dependencies are unchanged; no consumer check is triggered and no prior judge record exists in either carrier. Repair confidence: 1. No new routed obligation is manufactured for these untouched items.

## Decisions, ledger and consumer maintenance

Exactly three routed decisions are written: touched:11:def-confidence-set-and-coverage is amended_repair (accepted reader item addition, completed manifest mirror and contract anchors); reader:11:1 and reader:11:2 are confirmed_nonfatal, each referencing exactly one closed nonfatal-recorded row. The accepted completeness repair has its own fixed row. Each of the two locally discovered source-locator corrections also has a fixed row; none creates an extra routed decision. Five rows were appended through the serialized defect-ledger tool. The published ledger was reread after acquiring research/.published-consumer-ledger.lock, merged with two deduplicated A-P entries and count increments, and only this session's lock released. Frontier dependency notes preserve stable IDs and outside-owner obligations; no withdrawal was proposed or removed.

## Local checks and owner alert

- Initial risk-report: five HIGH/CRITICAL subjects; final --require-reviewed: zero errors, all nine subjects routed.
- Strict proof-contract: initially found unanchored iff evidence in the reader's definition contract. Added explicit Definition anchors; final result zero errors/warnings, 9/9 items checked. This mechanical failure creates no defect row.
- Reflow: known-normal example reflowed; t example unchanged. Their complete numbered steps and mathematics are preserved. Precheck: 2 checked, 0 failing; definition has no proof phase.
- Focused rendercheck on definition and both edited examples: 3 files pass YAML and actual KaTeX checks.
- Final required batched proof-layout on both edited items: 2 items, 7 steps, 0 defects, after all item edits/reflow.
- Run-scoped shared defect-ledger validation: 41 rows checked, one outside-scope enum error in msf37-batch24-3a-fixed-radius-truncation (subclass proof-step-overstatement is outside the closed enum). Owner alert: batch24 must reconcile that mechanical field; no mathematical defect asserted and no outside edit made. This prevents claiming a clean shared-ledger check. Batch11's own five rows are validated separately against the same schema.

No mathematical blocker remains in this assignment. Two published editorial repairs remain owner maintenance obligations; the shared ledger's batch24 mechanical diagnostic remains outside this dispatch. No judge, stamp, gate battery, publication or engine transition was initiated. The engine owns subsequent hashes and gates.
