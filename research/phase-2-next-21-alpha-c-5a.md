# Step 5A authored-content adjudication — group c (batches 1, 2, 3)

Run `phase-2-next-21`; group `c` covers batch 1 (measure theory, orders
288.045/288.046), batch 2 (functional analysis, four pages) and batch 3
(functional analysis, tempered distributions, two pages). Scope read from
`research/phase-2-next-21-step5-scope-{1,2,3}.json` (version 3). This is direct
group adjudication of the authored mathematics; it is not a repeat of the
Step-3 scaffold or source-inventory audit, and it is not an independent judge
or a publication stamp.

## Verdicts

All 134 obligations (126 items and 8 pages) received one decision with
obligation `authored:<batch>:<id>` in
`research/phase-2-next-21-alpha-c-5a-decisions.json`, every one `accepted`
with `defect_ids: []`:

- batch 1: 35 items and 2 pages;
- batch 2: 58 items and 4 pages;
- batch 3: 33 items and 2 pages.

Repaired: 0. Escalated: 0. Withdrawn: 0. No local definitions or lemmas were
needed, no pair or page was added, and no manifest item order, page header or
plan splice was changed. The only contract edits are the 94 `risk_review`
entries below.

## What was actually checked

Every item file was read in full (statement, facts, numbered proof steps,
remarks) and every page header/prose was read against its item list. Inference
steps were checked one by one, together with the hypotheses of each cited
supplier: the exact published statements of the load-bearing suppliers were
re-read in `items/` (for example
`thm-integrals-are-invariant-under-measure-preserving-maps`,
`thm-monotone-convergence-for-the-integral`, `thm-fatou-lemma`,
`thm-dominated-convergence`, `thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
`lem-mod-null-invariant-sets-have-strictly-invariant-representatives`,
`thm-complex-holder-minkowski-and-the-quotient-norm`,
`thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces`,
`thm-chebyshev-markov-inequality-for-the-integral`,
`thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`,
`lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences`,
`lem-basic-weak-star-neighborhoods`,
`cor-relative-hahn-banach-bidual-isometry`, `thm-relative-hahn-banach-*`,
`thm-locally-convex-strict-separation`, `thm-compact-iff-fip`, `thm-zorn`,
`thm-uniform-boundedness-principle`, `lem-complete-subspace-is-closed`,
`thm-dual-of-c0-is-ell-one`, `thm-complex-dual-of-ell-one-is-ell-infinity`,
`cor-ell-p-duality-by-counting-measure`,
`thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`,
`cor-relative-hahn-banach-dual-norming`,
`thm-dual-of-a-quotient-is-the-annihilator`,
`def-schwartz-space-and-its-seminorms`, `def-schwartz-topology-and-convergence`,
`cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`,
`thm-poisson-summation-for-schwartz-functions`,
`thm-fourier-transform-maps-schwartz-space-continuously-to-itself`,
`thm-fourier-translation-modulation-dilation-and-reflection-laws`,
`lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`,
`thm-plancherel`, `thm-l-one-l-two-agreement-of-fourier-transform`,
`thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`,
`lem-test-function-lf-topology-universal-property`,
`lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space`,
`lem-distribution-pairing-with-smooth-parameter-families`,
`def-convolution-of-distributions-when-one-has-compact-support`,
`lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`,
`lem-compactly-supported-distributions-extend-to-smooth-functions`,
`def-distributional-derivative`,
`def-multiplication-of-a-distribution-by-a-smooth-function`,
`def-dirac-delta-and-its-derivatives`,
`thm-locally-integrable-functions-embed-in-distributions`,
`thm-local-finite-order-characterization-of-distributions`,
`thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`).

Spot checks of boundary and endpoint cases included: the `0<mu(X)<infinity`
normalization in the ergodic corollary; `F_N=0` off `E_N` in Garsia's
argument; the `x=0` and `X={0}` cases in Banach-Alaoglu, Goldstine and the
Krein-Milman chain; the empty-test-list case in weak-star neighbourhoods; the
`R=0` branch of the asymptotic-center lemma; the `p=2`, `varepsilon=2` and
`n=1` endpoints of Clarkson/uniform-convexity; the `a=c` and `(a,c)=(0,1)`
squares in the Weyl sandwiches; the terminating-digit convention at `E_b`;
the `0*infinity` conventions in the distributional products; and the
`x=0`, `f=0` and zero-space branches throughout.

Numerically or algebraically sensitive claims were recomputed: the block
frequencies 2/3 and 1/3 of the divergent Birkhoff point; the two occurrences
of the square-root-two decimals; `0.1010..._2=2/3`; the constant
`-i*pi` in the transform of `pv(1/x)` (checked through
`U'=-2*pi*i*delta_0`, `sgn'=2*delta_0` and oddness); the Gaussian
`t^{-n/2}` theta law; `Ehat=1/(1+4*pi^2*xi^2)` and `(1-D^2)E=delta_0`; and
the scalar Clarkson estimates in both exponent ranges.

## Risk review

94 items are routed high or critical risk by `tools/risk-report.mjs` (29 in
batch 1, 45 in batch 2, 20 in batch 3). A specific `risk_review` disposition
was written into each owning batch contract during this read through
`tools/apply-risk-reviews.mjs` (reviewer
`group-alpha 5a-c (Step 5A direct group review)`). Each note records the
concrete steps, constants and boundary cases checked for that item.
`node tools/risk-report.mjs research/phase-2-next-21-batch-N.proof-contracts.json
--require-reviewed` reports `0 error(s)` for N = 1, 2, 3 with 35, 58 and 33
items routed. No risk was left unresolved.

## Local suppliers and amendments

None. Every declared dependency of every reviewed item exists as an item file
and states the fact the consumer cites; no missing local prerequisite was
found, so no definition, lemma, contract, manifest or page-order change was
made. No shared-plan or Phase-2 amendment is requested from the serial lead.

The three forward references to `def-ultrafilter-extension-principle` in
`cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`,
`cor-ell-one-is-not-reflexive` and `ex-reflexivity-of-ell-p-and-lp` resolve to
an existing item (published definition) and are the deliberate Step-3b
forward-link arrangement recorded in
`research/phase-2-next-21-independent-cert-b.md` (§ "Step-3b forward-link
repair", event 316); the proofs use the ultrafilter lemma only as a stated
hypothesis.

## Published findings

No new published-item defect was found by this review. One audit-status
update was recorded in `research/published-consumer-supplier-ledger.md` as a
dated section with exact item IDs: the blocking
condition recorded for a family of A-P rows ("until the common finite
zero-complement simple-integral repair is installed") is satisfied by the
repair installed on 2026-09-13 documented in
`research/phase-2-next-21-published-simple-integral-repair.md`. Those rows
remain A-P for Phase-3 revalidation; the update is not a repair and no
published byte was edited. The load-bearing rows for this group include
`def-integral-of-a-nonnegative-simple-function`,
`def-nonnegative-lebesgue-integral`,
`prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
`thm-monotone-convergence-for-the-integral`,
`thm-integrals-are-invariant-under-measure-preserving-maps`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
`prop-indefinite-integral-of-an-integrable-function-is-countably-additive`,
`thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces`,
`thm-chebyshev-markov-inequality-for-the-integral`,
`thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`,
`def-calligraphic-l-p-on-a-measure-space`,
`def-l-p-space-as-a-quotient-by-null-functions`,
`thm-minkowski-inequality-for-integrals` and
`thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`.
Two of them, `def-integral-of-a-nonnegative-simple-function` and
`def-nonnegative-lebesgue-integral`, were re-read in full during this review;
their current text names the repaired representation-independence lemma and
contains no false claim. Three further suppliers named in the Step-1 notes
(`prop-indefinite-integral-of-an-integrable-function-is-countably-additive`,
`thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces`,
`thm-chebyshev-markov-inequality-for-the-integral`) have no current ledger row
of their own; the ledger section records them as un-audited inheritors of the
repaired chain rather than as rows with a recorded blocking condition. The
remaining A-P consumer proofs were not re-read here and keep their recorded
strategy.

## Checks run (honest local results)

- `node tools/step5-scope.mjs stamp --run phase-2-next-21 --group c` →
  stamped 134 carrier hashes after the contract risk reviews.
- `node tools/step5-scope.mjs check --run phase-2-next-21 --phase adjudicate
  --batch N` for N = 1, 2, 3 → `35/58/33 item(s) routed`, `37/62/35
  adjudication obligation(s)`, `0 error(s)` in each case.
- `node tools/step5-scope.mjs check-escalations --run phase-2-next-21` →
  no owner escalations.
- `node tools/manifest-deps.mjs` on the three batch manifests → 126 items,
  0 errors.
- `node tools/risk-report.mjs ... --require-reviewed` → 0 errors for all
  three batches.
- `node tools/proof-contract.mjs research/phase-2-next-21-batch-N.proof-contracts.json
  --strict` → 0 errors for N = 1, 2, 3; batch 3 carries one non-fatal
  `shotgun-bracket` citation-distribution warning on
  `cex-product-of-two-distributions-is-not-canonically-defined` (step 1.1
  cites four of five declared facts while two other steps cite none). This is
  the same heuristic class as the pre-existing warning recorded for group b's
  Postnikov item and is not evidence of a false claim; the item's mathematics
  is unaffected and the engine's gate of record remains the strict
  zero-error result.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21`
  → refreshed and deduplicated. The three owned inputs
  `research/phase-2-next-21-batch-{1,2,3}.cross-batch-dependencies.json`
  are empty arrays: this group's items consume local items and published
  items only, so there is no cross-batch row to add.

## Limitations and blockers

None blocking. Two honest limitations. First, the published A-P rows listed
above are revalidated by their Phase-3 owner, not by this group; this review
confirms only that their recorded blocking repair is installed and that the
local uses consume the standard statements. Second, this is a bounded
defect-focused adjudication of the assigned batch, not a whole-closure
certification or an independent judge; the engine's static, content,
dependency, source and contract gates remain mandatory.
