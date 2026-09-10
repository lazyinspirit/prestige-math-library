# Published prerequisite audit: Fourier support handoff

Date: 2026-09-11. Scope: all six rows in the published-finding handoff of
`phase-2-fourier-support-2-batch-1.notes.md`, followed only far enough through
the regular-measure approximation route to check the named norm-recovery
strategy. Full current target bodies and the used clauses named below were
read. This is a bounded defect-focused audit, not an independent judgment or a
transitive-closure certification. No published item was edited.

Before every disposition, the canonical ledger was searched by exact ID,
aliases, defect mechanism and supplying IDs. All six handoff targets have empty
alias lists. `thm-riesz-thorin-interpolation` was already A-P and the
total-variation-density theorem was already U-P; their existing records are
extended rather than duplicated. The other four handoff targets and the two
direct regular-measure suppliers identified below were outside the index.

## Existing finding extended: Riesz--Thorin

`thm-riesz-thorin-interpolation` (SHA-256
`d0c2888ec7176a134d6f38602e174c5449a2c7fbc5cef2ca23fc38e4579ba928`)
remains A-P. Step 2.1 gives
`||f_it||_{p0}=||f||_{p_theta}^{p_theta/p0}` and the analogous right-boundary
power, but step 3.1 replaces each by `||f||_{p_theta}`. Step 4.1 consequently
asserts a unit boundary bound without first normalizing the nonzero input. On
one counting-measure atom, with the identity, `p0=1`, `p1=2`, both target
exponents 2, `theta=1/2`, and `f=4`, the left source boundary norm is
`4^(4/3)>4`, directly refuting step 3.1. This is the existing normalization
finding, not a new indexed defect.

The existing record's extension strategy is also confirmed: use the authored
normalized finite-simple core after its atomic publication/rehome, handle zero
coefficients before complex powers, use the finite-simple dual-test criterion
for target membership and then use density and completeness. The published
`thm-riesz-fischer-completeness-of-l-p` explicitly assumes countable choice;
the current Riesz--Thorin statement does not. The existing A-P strategy already
requires that assumption to be propagated when the extension step is repaired,
so this is an additional exact clause under the same row rather than a second
classification.

## Existing finding promoted: variation of a supplied density

`thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value`
(SHA-256
`1c8a7a04d23c92f06d2d6fdd8c4b0dd9a911ba6c187cf1a52897e50d586b3e94`)
moves U-P to A-P. Its L3 and steps 1.1--1.2 invoke the signed and complex
Radon--Nikodym existence results. Both published existence suppliers now
explicitly assume full Choice, but the target states no such assumption. The
current proof therefore does not meet the suppliers' hypotheses.

There are two complete local repair choices. Either state AC and declare its
exact use, or formulate the result conditionally for a supplied measurable
`L^1` density `h` satisfying `nu(E)=int_E h dmu`. In the latter form,
`thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data`
and
`thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`
give the two conclusions directly and choice-free. No new Phase-2 supplier is
needed. This does not close the separate existing
`def-radon-nikodym-derivative` existence-interface finding.

## New audited pending repairs

### `lem-euclidean-balls-have-positive-finite-lebesgue-measure`

Current SHA-256:
`0104e52fe5c1e59fb74ae53c6959becf8a5d0ad0e37759a4a2ba11d6887bcb33`.
Step 1.1 correctly places the Euclidean ball between two cubes, but step 2.1
uses `lambda(B(x,r))` and monotonicity before proving the ball measurable;
containment between two measurable sets does not imply measurability. Step 3.1
then cites that circular line for measurability. The positive and finite cube
bounds are valid after measurability is supplied.

Repair with the already-published chain `lem-metrics-on-rn` (the Euclidean norm
is a metric), `thm-metric-open-set-algebra` (metric balls are open), and
`thm-borel-sets-are-lebesgue-measurable` (open, hence Borel, sets are Lebesgue
measurable under the countable-choice assumption already stated by the target).
Then apply the two cube inclusions and monotonicity. The implicit finite
coordinate estimates are correct and are not metadata defects. Classification:
A-P; no new Phase-2 pair.

### `thm-total-variation-is-a-measure`

Current SHA-256:
`e98f27e36fbfce27dcacbbb80c9b2046d6370183df4a811f48bf7629f9db8dcb`.
Proof 1.2 says to choose a countable partition of every `E_m` and then obtains
the sum of the separate suprema by “taking suprema.” Arbitrary chosen
partitions do not approximate those suprema, and simultaneously selecting
near-maximizers for all `m` would require an unstated countable-choice step.
Thus the displayed superadditivity is not proved.

A choice-free repair works with finite partial sums. For fixed `N` and error,
use finite choice to take near-maximizing partitions only for
`E_0,...,E_N`, combine those finitely many countable partitions into a
partition of their union and append the complement in `E`. This bounds each
finite partial sum of `sum_m |nu|(E_m)` by `|nu|(E)` after sending the error to
zero; the definition of a nonnegative extended series then gives the whole
inequality. If a selected variation is infinite, choose one partition above an
arbitrary finite threshold and argue the same way. The reverse inequality in
step 2.1 follows by finite triangle inequalities and limits of the countably
additive series. Published `lem-finite-choice` and the existing variation/series
definitions suffice. Classification: A-P; no new Phase-2 pair.

### `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`

Current SHA-256:
`5afe86e1c63aa781193e9f578a86bc72c298398da504d96f568e1e286033ae7d`.
Its only supplier, `thm-riesz-fischer-completeness-of-l-p` (SHA-256
`56f63967388ef395432672ce1d9082b9309631310a00eeb0010fa123aacbe5dc`),
explicitly assumes countable choice because it selects measurable
representatives for a countable subsequence. The corollary states no choice
assumption and proof 1.1 directly applies that qualified clause. This is an
unmet hypothesis, rather than a missing redundant edge.

Add countable choice to the statement/Given, declare `def-countable-choice`
(or the stronger currently used AC interface) and identify the representative
selection inherited from Riesz--Fischer. The later complex-Lp theorem already
states countable choice, so its present use does not add a second defect.
Classification: A-P; no new Phase-2 pair.

### `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`

Current SHA-256:
`18b742c1c4b798984669a18689ae7394e1ed137b84ebb02f391328fe2b7a1d50`.
Proof 3.1 establishes only the upper norm bound, then compresses the reverse
bound into “regular approximation by compactly supported phase functions.” It
does not construct those functions, identify a theorem supplying them, or
control their sup norms and integral error. This approximation is the
substantial lower-bound argument and is not a clear implicit use of a single
adequate published supplier.

One complete route starts with
`thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals`,
approximates the finitely many simple phase cells in `L^1(|mu|)` by compactly
supported continuous cutoffs using regularity, and takes the cutoffs in
pairwise disjoint neighbourhoods so their phase-weighted sum still has
supremum norm at most one. Equivalently, after repairing its choice contract,
`thm-c-c-is-dense-in-l-p-for-radon-measures` supplies the finite-measure
`L^1` approximation, with a final radial clipping if needed. The library's
cutoff supplier explicitly assumes dependent choice, so a repair using this
route must state DC and propagate it through the representation clause; it
cannot be treated as a missing direct edge to an unconditional theorem. The
two direct supplier defects below must be repaired at the same cutover.
Classification: A-P; no new Phase-2 pair.

### `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`

Current SHA-256:
`06867d65e8f024fba25df055f920e1429910254e29faa34e94ddee9bc80b72bf`.
Proof 1.1 uses a compactly supported cutoff equal to one on each compact set,
but neither states dependent choice nor declares
`lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set`, whose published
contract explicitly assumes DC. This is an unmet assumption, not optional
dependency cleanup. Proof 3.1 also says a finite Radon measure is inner regular
on every Borel set merely by “open inner regularity ... and finite
complements”; the complement of an open set in a noncompact LCH space need not
be compact, so the printed inference omits the tight compact core.

Repair under explicit DC for the cutoff use. For all-Borel inner regularity,
first use open inner regularity on `X` and finiteness to choose a compact
`K` with small outside mass. Use outer regularity on the Borel set `K\\E`,
choose an open `O` containing it with small excess, and then `K\\O` is compact,
lies in `E`, and loses only the two controlled errors. The representation and
norm-extension lines can then remain. Classification: A-P; no new Phase-2
pair.

### `thm-c-c-is-dense-in-l-p-for-radon-measures`

Current SHA-256:
`42d93e5d70cde06dc5dc09327a1bdce2f9847fff8d15d786244c17154b1778e6`.
Proof 2.1 invokes the same LCH cutoff supplier, which explicitly assumes DC,
but the density theorem is stated without DC. Its regular approximation and
finite-indicator reduction are otherwise the right argument in the audited
finite-`p` scope. Add DC, declare `def-dependent-choice` and the cutoff's exact
use, or replace the cutoff with a genuinely choice-free construction. This
repair is needed before using the theorem as the published phase-approximation
supplier for the complex RMK norm lower bound. Classification: A-P; no new
Phase-2 pair.

## Bounded supplier conclusions and limits

The following relevant clauses were read and found adequate for the repairs
above: the Euclidean metric, openness of metric balls, Borel-to-Lebesgue
measurability under countable choice, the explicit countable-choice contract of
Riesz--Fischer, the LCH cutoff under dependent choice, the simple-integral
supremum formula for total variation, and the real/complex `L^1` density
variation formulas. Existing index dispositions, including the U-P impact-only
row for the complex-density theorem and A-R for Riesz--Fischer, are preserved;
this bounded audit does not classify every unreviewed dependency of those
suppliers. In particular it does not certify the full RMK construction chain or
every direct consumer of these true statements.

The general Radon-density defect does not enter the live Fourier Euclidean
density path. The exact path is the new Schwartz-density scaffold through
`thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, then
`thm-c-c-rn-is-dense-in-l-p-of-rn`, then the explicit Euclidean
`lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff`.
Both density theorems state countable choice, and the last lemma constructs its
cutoff from distance to the complement, Euclidean Heine--Borel and the extreme
value theorem. It does not use general LCH Urysohn/DC. Thus no live Fourier
authoring obligation remains from this finding.

## Step-3B convolution-authoring follow-up

The authoring handoff reported two more published concerns. Exact-ID, empty
alias, mechanism and supplier searches show that both already have one A-P row
and detailed proof evidence in the canonical ledger. This follow-up extends
those records and introduces no classification.

`lem-convolution-is-independent-of-the-chosen-borel-representatives`
(current SHA-256
`c4b52d97fe0342e3685d71ba023723226ca7099313cdff530d17892974070a8b`)
still has both recorded gaps. In proof 1.1,
`x-N_f=x+(-N_f)` requires reflection as well as the cited translation
invariance. The published reflection supplier
`thm-lebesgue-measure-under-dilations-and-reflections` states countable choice,
which the target does not. Proof 2.1 establishes representative independence
only whenever an absolute integral exists, while proof 3.1 asserts an
almost-everywhere domain without proving that existence. Repair either by
stating the conditional equality only and leaving a.e. existence to the later
convolution theorem, or give the Tonelli absolute-envelope proof locally;
expose the exact reflection/choice contract in either route. Existing A-P
remains open; no new Phase-2 pair.

`thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound`
(current SHA-256
`e6a6897435f68f93f7eaf450712a4962123d6b98c614ae24f0b3fe52dcadaa50`)
also retains its recorded A-P finding. Proof 1.1 chooses Borel representatives
of completed-Lebesgue classes, but the published base-measurable-representative
supplier explicitly assumes countable choice and is neither declared nor
satisfied. Translation invariance itself is published choice-free; the defect
is the representative-existence contract, not a missing redundant edge to
translation. Add countable choice and
`thm-completion-measurable-functions-have-base-measurable-representatives`,
then keep the current Borel product/Tonelli absolute-envelope calculation and
use the repaired conditional representative-independence clause. Existing
Tonelli/Fubini suppliers are published. No new Phase-2 pair.

The live draft Fourier convolution theorem states countable choice and proves
the convolution interface through the newer published
`lem-complex-translation-and-approximate-identity-interfaces`, whose proof
supplies Borel representatives, reflection and representative independence
under that assumption. Its Facts/Proof do not use the two defective old items,
although both still appear redundantly in the draft dependency array. Removing
those draft-only edges makes the bypass exact; no live mathematical authoring
prerequisite is uncovered here.
