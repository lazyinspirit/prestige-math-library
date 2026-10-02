# Current Step 3 Euler/Riemann–Roch batch-7 audit

## Scope and live status checkpoint

This audit covers the exact 44 IDs in
research/frontier-37-owner-30-batch-7.pages.json (34 A items and 10 B
examples/counterexamples). Run-status snapshot: 2026-09-30 17:29 UTC. The
itemDecision split below is the last read at 16:44 UTC; it was not refreshed
after the authorized consumer proof edit. This report supersedes supplier and
decision-count snapshots in research/frontier-37-owner-30-euler-escalations-audit.md;
the earlier report remains useful for per-item dependency routes and
source-disposition work. Under root's narrow release, one proof was edited:
items/lem-function-with-poles-defines-map-p1.md. No other item, page, carrier,
contract, coverage row, receipt, shared decision, plan, ledger, or gate was
changed here.

All 44 item files exist. The last read-only itemDecision showed:

- Four closed decisions: def-genus-euler-characteristic-curve (accept),
  lem-nonzero-map-invertible-to-locally-free-injective (accept),
  lem-vector-bundle-p1-has-maximal-degree-line-subbundle (accept), and
  lem-vector-bundle-p1-extension-splits (repaired). These are reused from
  their current receipts, not newly audited here.
- Thirty-eight owner-held rows: eight retain recorded author-level supplier
  escalations and thirty have stale inputs requiring current owner decisions.
  None was reopened by this audit.
- Two proof edits awaiting fresh item audit:
  lem-smooth-curve-coherent-torsion-free-locally-free and
  lem-vector-bundle-p1-maximal-line-quotient-locally-free. Their live reason
  was current item audit required; neither had a new owner receipt.
- A third root-authorized proof edit,
  lem-function-with-poles-defines-map-p1, was made after that itemDecision
  snapshot. No itemDecision refresh or owner receipt was attempted for it. All
  three changed proofs therefore await proper current review; this report does
  not imply acceptance.

The two earlier repaired routes were re-read: use integrality/cancellation at
a point where the multiplier germ is nonzero; for a converse local-freeness
argument, use the finite residue-zero locus as a closed subset of the whole
curve and its open complement; for the P1 quotient argument, derive
elementwise annihilating powers and use the unit ideal, and compute rank only
after local freeness. They appear sound, but their current item-audit
requirements remain open.

At 17:29 UTC the run was still in Step 3b authoring (27/30 pairs complete;
three unrelated author dispatches were listed in flight; downstream stages
wait for prior stages). This is a status observation, not a gate result. This
audit ran no gate.

## Supplier refresh already confirmed

The eight direct B6 supplier files identified in the previous report remain
present at their recorded raw SHA-256 values, and live `itemDecision` still
marks them owner-held with `changed inputs require a current owner decision`.
They remain open review routes; their old author escalations do not certify the
current B7 uses.

The relevant Cartier/Picard dictionary is now present and closed on current
inputs. In particular `cor-degree-descends-picard-curve` and
`thm-cartier-divisors-mod-principal-to-picard` are `repaired`, while
`def-invertible-sheaf-of-cartier-divisor`,
`def-linear-equivalence-cartier-divisors`, and
`def-effective-cartier-divisor` are `accept`; the line-bundle/rational-section,
addition/tensor, Cartier-sheaf, pullback, and Cartier–Weil helper interfaces
checked here are closed as `repaired`. A current closed receipt does not certify
an unre-read B7 use. The earlier per-item route table remains useful, but the
old `B5 review, no file` labels for the Picard rows are superseded by this
checkpoint.

## Current proof and supplier audit

This section records the 44-item decision split at 16:44 UTC and the actual
proof findings. The four closed items named above are reused from their
receipts. I re-read the two earlier edited proofs, the current
Birkhoff–Grothendieck proof, the ten companion examples/counterexamples, and
the B7 routes through the named divisor, linear-system, and rational-map
suppliers. The later consumer edit and its narrow scope are described below.
No gate, receipt, coverage, or shared decision was attempted.

The eight B7 rows whose current decision still carries its author-level
escalation are `def-little-l-divisor`,
`lem-riemann-roch-space-finite-dimensional`,
`lem-divisor-order-monotonicity-sections`,
`lem-add-one-point-exact-sequence-line-bundle`,
`lem-add-one-point-euler-characteristic`,
`lem-h1-stabilizes-downward-point-removal`,
`lem-degree-zero-effective-divisor-empty`, and
`def-index-speciality-divisor`. The twenty A rows held only because inputs
changed are `lem-divisor-decomposition-positive-negative-points`,
`thm-euler-characteristic-degree-shift-curve`,
`thm-riemann-roch-euler-characteristic-curve`,
`cor-riemann-inequality-divisor-sections`,
`cor-negative-degree-no-sections-rr`,
`cor-existence-rational-function-bounded-pole`,
`cor-smooth-proper-curve-finite-map-projective-line`,
`thm-h1-line-bundle-vanishes-sufficiently-high-degree`,
`cor-riemann-theorem-large-degree`,
`thm-genus-zero-point-implies-projective-line`,
`lem-projective-line-divisors-classified-by-degree`,
`cor-picard-projective-line-integers`,
`thm-birkhoff-grothendieck-vector-bundles-p1`,
`cor-degree-zero-line-bundle-section-trivial`,
`cor-nontrivial-degree-zero-line-bundle-no-sections`,
`thm-riemann-roch-as-l-minus-index`, `def-nonspecial-divisor`,
`lem-large-positive-divisors-nonspecial`,
`cor-dimension-complete-linear-system`, and
`rem-sharp-degree-thresholds-wait-for-duality`. The ten B rows also remain
owner-held after input changes; their exact findings follow.

### Companion-page items

| B7 item | Current proof finding |
|---|---|
| `ex-riemann-roch-projective-line-divisor` | The all-integer computation for `d[∞]`, including the `H¹` correction for `d <= -2`, is sound. Its prose still contains stale “not authored” supplier notes; current Cartier/Picard routes are closed, while its B7 decision still needs current owner review. |
| `ex-genus-zero-conic-with-rational-point` | The conditional conic argument is sound: a given rational point supplies a degree-one divisor, the plane-conic genus computation gives `g=0`, and P1 cohomology values transport under the isomorphism. The plane-curve supplier is now `repaired`; line-bundle and B7 inputs still require current owner review. |
| `cex-genus-zero-without-rational-point-not-p1` | Two live proof errors need correction. (i) A divisor of degree one need not be a single closed point: it may have negative coefficients. For this real conic, every closed point has residue field `R` or `C`; no real point excludes residue degree one, so every closed-point degree is two and every divisor has even degree. Alternatively use the genus-zero theorem’s contrapositive. (ii) The factorization argument at item 1 does not yield its claimed `alpha*gamma=0` contradiction: after normalizing the `z=0` restrictions as `x+iy` and `x-iy`, the `z^2`, `xz`, and `yz` coefficients give `alpha*gamma=1`, `alpha+gamma=0`, and `gamma-alpha=0`, inconsistent in characteristic zero. Alternatively use rank three of the quadratic form versus rank at most two for a product of two linear forms. The classical-to-scheme dimension bridge remains explicitly open. Root released the item-only correction to another helper; this report makes no item edit. Live raw SHA: `bdfbee6b9e43f2af633b756948eede1b3bcf4ea355f543cfd4c8af583e8f9cba`. |
| `ex-adding-point-section-dimension-jump` | The four P1 computations check: jumps `0`, `1`, full residue degree `2`, and intermediate jump `1` in residue degree `2`. The general bound is routed through the one-point quotient lemma. No additional mathematical defect found. |
| `cex-riemann-inequality-not-equality-special-divisor` | The general statement is correct: `l(D)=deg(D)+1-g+i(D)`, strict exactly for special divisors. Its optional quartic example still has the expressly recorded integrality/existence obligation; smooth pure-dimension-one quartic alone is not established as an integral curve by the cited items. The arithmetic-genus supplier is now `repaired`; the separate integrality route remains unresolved. |
| `ex-degree-zero-principal-divisor` | The divisor of `(t-a)/(t-b)`, its degree, and `L(div(f))=k·(1/f)` are correct. The listed dictionary suppliers now have closed receipts; the B7 use still needs a current decision. |
| `ex-linear-system-poles-at-one-point` | The repaired base-point analysis is correct: `1,f` are base-point-free at the actual pole divisor and acquire `p` as a base point in the larger `np` when `n>m`. The two P1 pencils in one `L(2∞)` are also distinct modulo target PGL2. It depends on the rational-map route below. |
| `ex-nonspecial-large-divisor` | The fixed-direction vanishing and its P1 threshold `d >= -1` are sound. It does not assert the universal `2g-2` threshold. It depends on the finite-map/ample-pullback route below. |
| `cex-negative-degree-rr-right-side-negative` | The computation `l(-m∞)=0`, `i(-m∞)=m-1`, and `l-i=-m+1` is correct for every `m>=1`; the false equality reading fails from `m=2` onward. |
| `ex-empty-divisor-euler-characteristic` | The `D=0` identities `l(0)=1`, `i(0)=g`, `χ=1-g`, and `|0|={0}` are correct. Its complete-linear-system route is part of the current B6 review path. |

### Rational-map supplier route and repaired B7 consumer

lem-proper-normal-curve-rational-function-map has a historical repaired
receipt at raw SHA-256
feceacff23bbf82258202ddfb02f2b5232014a127aa8eaa00442960ae6fc958e, but the
live proof version previously audited at that hash did not support the
transcendental case: it applied the monic-polynomial valuation argument from
the algebraic branch to a transcendental function and its inverse, then
incorrectly concluded both were regular everywhere and hence a global unit.
Root re-released this supplier for repair. I fully read a later active-writer
version at SHA-256
899a2ccc5acff8e716cc1ae6c12923d7a8e60466cda2720a70cfc3b7b5101d21; that
version used separate algebraic/transcendental cases, local DVR extensions,
properness plus quasi-finiteness, and finite torsion-free modules over target
DVRs. It looked plausible on that read. During continued writes, the last
on-disk digest I observed, without rereading that exact version, was
fc0175613016212f8e923cfe49620dfdf1d4ab7a260369cfb47a503984e12d93. The
supplier is still active and awaiting root integration; the latter digest is
not a reviewed or stable version, and no closure is inferred.

The consumer lem-function-with-poles-defines-map-p1 was repaired under root's
exact item-only release. Its current SHA-256 from the last actual consumer
edit is
622fb69a41f426719e6b60229829c0329b12840fabc5aaf32a01e0dbf4529c11. The
revised proof preserves the full statement, including finite local freeness,
the zero/pole fibre divisor identities and weighted degrees, and the
no-poles clause for every nonzero rational function. It now:
- proves f is transcendental using geometric integrality, properness, and
  H0(C,O_C)=k;
- identifies the two scheme fibres by affine base change as quotients by f
  and f^{-1};
- computes their local DVR quotient lengths and orders, establishes exact
  support using target-chart units, and gives the effective Cartier fibre
  equations on the chart with the complement;
- obtains residue-weighted degrees through lem-finite-flat-curve-fibre-degree;
  and
- proves the separate no-poles clause by local DVR membership, gluing to a
  global section, and H0(C,O_C)=k.

Focused precheck and rendercheck passed after matching the repository's
canonical phase numbering; a read-only dependency-link check found 26 direct
dependencies and all linked IDs present. These checks are mechanical, not a
fresh mathematical acceptance or item receipt. The fibre coefficient
calculation uses the normalized DVR order of each displayed local Cartier
equation directly; this audit did not invoke a general Cartier-Weil
identification theorem. Root should review whether the actual supplied
definitions and local computations suffice for the full stated Weil-divisor
identity. The finite-flat fibre-degree route also remains conditional on the
active normal-map supplier reaching a stable accepted version. No receipt,
coverage, shared decision, plan, ledger, or gate was changed or attempted for
this consumer.

The dependent B7 claims (cor-smooth-proper-curve-finite-map-projective-line,
thm-h1-line-bundle-vanishes-sufficiently-high-degree,
thm-genus-zero-point-implies-projective-line,
cor-nontrivial-degree-zero-line-bundle-no-sections,
ex-linear-system-poles-at-one-point, and ex-nonspecial-large-divisor) remain
conditional on the rational-map route. The recorded receipts for lem-finite-flat-curve-fibre-degree,
lem-proper-normal-curve-rational-function-map, and
lem-pullback-cartier-divisor-line-bundle read repaired before or apart from
the active supplier edit; they do not establish the supplier's current
stability or override the live proof review above.

The current live `thm-birkhoff-grothendieck-vector-bundles-p1` file has SHA-256
`9b21cbf30c065fd888a2c4b192d5e44d0c87b7422d681109f547e8734005006f`. Its
normalized (M=E(-b)), quotient (W=\oplus_i\mathcal O(n_i)) with
\(n_i\le0\), extension split, and twist-back argument is valid; its
uniqueness step recovers the counts \(\#\{i:a_i\ge -m\}\). The previously
reported (c-c_r) inequality is absent from this live file and came from a
stale variant; it is withdrawn. The item itself remains owner-held because its
inputs changed.

## B7 supplier carrier reconciliation checkpoint

After root reviewed the three repaired supplier bodies, I synchronized their B7
claim/dependency rows and proof-contract evidence. The batch-7 Beta author is
drained: its result records completion at `2026-09-30T04:47:30Z`, and current
autopilot status reports no in-flight worker. Other active helpers have disjoint
scopes. I did not edit any item in this carrier pass.

- In `frontier-37-owner-30-batch-7.pages.json`, the three item rows for
  `lem-add-one-point-exact-sequence-line-bundle`,
  `lem-riemann-roch-space-finite-dimensional`, and
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree` now have claim
  summaries, direct dependency arrays, and proof strategies reconciled to the
  reviewed item bodies. A targeted read-only comparison confirms the manifest
  dependency arrays match their current frontmatter (46, 27, and 33 direct
  dependencies respectively). Root subsequently refreshed the manifest's
  dependency-level labels; the current values are 14, 12, and 22 respectively.
- In `frontier-37-owner-30-batch-7.proof-contracts.json`, citations and
  derivations for those three target entries were regenerated from the current
  Facts and proof steps. I refreshed 13 B7 consumer citation quotations to
  match the current full supplier Statements: 2 citations to the exact-sequence
  lemma, 9 to the finite-dimensionality lemma, and 2 to the H¹ vanishing
  theorem. The exact-sequence empty-boundary record now says the order formula
  is for nonempty opens and the empty-open section group is zero; Choice/DC and
  the normalized nonnegative Serre threshold are also reflected in the relevant
  boundary records.
- The new direct B5/B6 dependencies are not marked accepted and their cross-batch
  edge records remain for root integration. The newly added direct out-of-batch edges are:
  `lem-add-one-point-exact-sequence-line-bundle` to
  `def-invertible-sheaf-of-cartier-divisor` (B5),
  `def-riemann-roch-space-of-divisor` (B6),
  `lem-cartier-divisor-sheaf-invertible` (B5), and
  `thm-line-bundle-rational-section-cartier-divisor` (B5);
  `lem-riemann-roch-space-finite-dimensional` to
  `def-invertible-sheaf-of-cartier-divisor` (B5),
  `thm-cartier-weil-divisors-curves-agree` (B6), and
  `thm-line-bundle-rational-section-cartier-divisor` (B5); and
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree` to
  `def-cartier-divisor` (B5),
  `def-invertible-sheaf-of-cartier-divisor` (B5),
  `def-riemann-roch-space-of-divisor` (B6),
  `lem-cartier-divisor-sheaf-invertible` (B5),
  `thm-cartier-weil-divisors-curves-agree` (B6), and
  `thm-line-bundle-rational-section-cartier-divisor` (B5). Existing edges to
  `lem-cartier-divisor-addition-tensor` remain recorded open. These are
  dependency declarations only; the B5/B6 supplier review and edge closure are
  pending, and no receipt was borrowed or implied.

A targeted read-only comparison confirmed all three manifest dependency lists
match their item files and all 13 consumer citations quote the current source
Statements. No strict contract gate, broad check, receipt, coverage change,
shared decision, cross-batch edge edit, scope edit, or other gate was attempted.
Current carrier hashes:

| Carrier | SHA-256 |
|---|---|
| `frontier-37-owner-30-batch-7.pages.json` | `eeacac5442edcce73927c99f0dff1a3f4f55c31488456df7bb9c6293fffad541` |
| `frontier-37-owner-30-batch-7.proof-contracts.json` | `09ffe3e69fdebe16773e7a74bdebe18d1142483288483f720c43795ace9891c5` |
