# Phase 2 analysis/topology blocker resolution — 2026-09-08

## Scope and current state

This record resolves the mathematical and source-reading blockers owned by
phase-2-wave-1 batches 4, 5, 7, 10, 11 and 15: complex Lp, relative
Hahn–Banach, simplicial subdivision, Cauchy–Kovalevskaya, Euclidean
surface/divergence, measurable manifold densities, and DC/Baire.

The engine was not advanced. The command
`node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-wave-1 --state-dir .autopilot/phase-2-wave-1`
reported `PAUSED`, stage `1-scaffold`, and no work in flight. No published item,
library page, central plan, ledger or engine-state file was edited.

At this disposition checkpoint, parent review reported synchronized 59/59
fetch and 59/59 live source results; the earlier 55/55 checkpoint is recorded in
`phase-2-workflow-sync-2026-09-08.md`; earlier batch-local DNS failures are
historical diagnostics, not current source blockers. Each owned coverage file
now separates `blockers: []` from `protected_phase3` and
`certification_limits`. The main combined receipt after serial regeneration is
authoritative for the final run-wide counts, since other groups may add source
rows after this scoped disposition.

## Dispositions by batch

### Batch 4 — complex Lp

Status: direct source/scaffold blockers closed; 12 items, unchanged.

The norm, completeness, density, pairing, finite-simple dual-test and
convolution routes were checked with the p=1 and p=infinity endpoints handled
separately. The bilinear norming phase, semifinite requirement at infinity and
failure of general L-infinity approximate-identity convergence are explicit.

Two dependency edits remove an unnecessary path through a protected published
proof defect without deleting the endpoint mathematics:

- `thm-complex-holder-minkowski-and-the-quotient-norm` now uses
  `def-essential-supremum-with-respect-to-a-measure` and proves the endpoint
  bound directly.
- `lem-complex-lq-norm-from-finite-simple-dual-tests` uses the same definition
  and proves that an almost-maximal level set has positive measure by the
  defining least-essential-bound contradiction.

Source/read evidence: Teschl §§10.1–10.4, printed pp.281–298, read
continuously from the fetched 2,619,066-byte PDF, including Theorem 10.4,
Lemma 10.6, Theorems 10.12/10.16 and Lemmas 10.18–10.19; Laugesen at the exact
declared blocks Ch.1 pp.9–11, Theorem 2.6 pp.21–22, Lemma 14.6 p.81,
Chs.14–15 pp.85–92 and Appendix C pp.169–172, from the stamped 887,135-byte,
176-page arXiv PDF.

Protected Phase 3 defect: the proof of
`prop-closure-properties-of-measurable-functions-used-by-the-integral` asserts
the false identity `{inf_n f_n>a}=intersection_n{f_n>a}`. The statement is
true, but the published proof and its published consumer path through
`prop-essential-supremum-is-attained-as-the-least-essential-bound` remain in
the Phase 3 debt ledger.

### Batch 5 — relative Hahn–Banach

Status: direct source/scaffold blockers closed; 14 items, unchanged.

The pair treats HB as an explicit dominated-extension principle over ZF, not a
ZF theorem. The real and complex norm-preserving extensions, point norming,
bidual evaluation, asymmetric open-convex gauge, exterior-point separation and
compact-versus-closed strong separation were checked. The compact distance
proof needs only a finite cover/minimum, and the complex extension uses the
correct real-part reconstruction.

Source/read evidence: Brezis §§1.1–1.2 and the first §1.3 paragraph, printed
pp.1–9/PDF pp.16–24, read continuously through Theorem 1.1, Corollaries
1.2–1.4, Lemmas 1.2–1.3 and Theorems 1.6–1.7; Teschl Theorems 4.13–4.20 and
§5.1 read through the gauge and geometric-separation proofs. The successful
run-wide source sync supersedes the historical 1/2 batch-local transcript.

Protected Phase 3 debt: broad published choice-ledger remarks remain only
inventories. No BPI-to-HB implication or unavailable independence assertion is
used by this pair.

### Batch 7 — simplicial subdivision and approximation

Status: direct source/scaffold blockers closed; 31 items, unchanged.

The face-poset realization, finite weak topology, barycentric triangulation,
oriented chain recursion, carrier/cone homotopy, mesh/star criterion, relative
derived subdivision and finite common refinement were checked. The comparison
ownership repair in `phase-2-local-mathematical-repairs-2026-09-08.md` is
sound: this pair owns geometric and oriented simplicial subdivision, while the
signed comparison with the general singular operator belongs to later AT-3
items `def-barycentric-subdivision-chain-operator` and
`thm-barycentric-subdivision-is-a-chain-map`.

Source/read evidence: Hatcher §2.1 pp.120–123 and §2.C pp.177–179 through the
complete relevant proofs, plus Appendix A.1; Maunder §2.5 pp.45–57
continuously through 2.5.20 and §4.3 pp.119–120; Zeeman's entire pp.39–43
article, including addendum and counterexample; Rourke–Sanderson Chapter 2
pp.13–20 and Appendix proof blocks pp.27–30. All four sources have current
coverage fetch stamps.

Protected Phase 3 defects: published
`prop-a-finite-simplicial-complex-has-compact-hausdorff-realization` uses an
invalid union-of-open-extensions argument for the weak/subspace topology. The
AT-3 signed simplicial/singular comparison amendment and the inherited AT page
header/cutover chain also remain Phase 3 work. None is concealed by the local
ownership correction.

### Batch 10 — CK and Euclidean surface/divergence

Status: direct source/scaffold blockers closed; 44 items, increased from 43 by
one shared local lemma.

The CK majorant algebra, formal recursion, Goursat implicit equation,
higher-order reduction and noncharacteristic flattening were checked. The
finite-face cutoff/divergence proof already recorded in
`phase-2-local-mathematical-repairs-2026-09-08.md` was independently assessed
as rigorous under the manifest's compact regular-patch hypotheses: null chart
preimages, finite ball covers, product-bump gradient/support-volume estimates,
the `(1-eta)F` limit and internal-face cancellation are all explicit.

New item:
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`.
For a C1 diffeomorphism it defines the source pullback measure
`mu(A)=lambda(T(A))` and Jacobian-weighted measure, proves compact-finiteness,
local finiteness and Radon regularity, proves the pullback integration identity
and the Jacobian-weighted-measure integration identity from indicators through
simple functions and monotone convergence, identifies the two measures on
`C_c` using the sound compact-support COV formula, and applies Radon
uniqueness. It claims Borel functions only. Both B10 Borel
consumers use it. The surface integral definition also no longer imports
`thm-integration-against-a-density`; it defines the needed nonnegative product
integral directly.

Source/read evidence: Gantumur complete §§1–5 pp.1–14; Ageno Remarks
2.11–2.12, complete §2.3 pp.20–27 and §2.4.1 pp.28–29; Hunter complete
§§1.9–1.12 pp.11–18 and Theorem 2.23 p.32; Oh complete §3.9 pp.46–48,
including Proposition 3.23 and its graph/partition proof. All four coverage
sources have current fetch stamps.

Protected Phase 3 defects:

- `lem-smooth-bump-between-concentric-euclidean-balls` concludes support is
  inside the open outer ball merely from vanishing on its complement; its
  displayed construction can have the outer sphere in the support. The
  published consumer `ex-a-radial-bump-on-euclidean-space` inherits this.
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
  begins the monotone-class step with open rectangles, which are not an
  algebra, and does not supply finite localization for decreasing potentially
  infinite measures.

The new strict-margin bump and Borel COV proofs are authorized local
alternatives, not edits to these published defects.

### Batch 11 — measurable densities

Status: direct source/scaffold blockers closed; 18 items, unchanged.

The Borel cocycle, boundary overlap, countable chart gluing, countable
additivity, independence, Radon regularity, smooth comparison, completed
representatives and zero-dimensional case were checked. The overlap consumer
now uses the new B10 Borel COV lemma. Its A page explicitly requires
`euclidean-surface-measure-divergence-and-green-identities`. The completed
integration statement proceeds through Borel representatives modulo completed
null sets; it does not require or claim a completed-measurable COV theorem.

Source/read evidence: Lee Chapter 16 “Densities,” printed pp.428–433, read
continuously from the fetched 4,811,268-byte PDF through Propositions
16.35–16.45 and the intervening construction; Folland Theorems 2.14–2.15
pp.50–51, Theorem 2.47 pp.74–76, Theorem 7.8 p.217 and §11.4 pp.361–363.
The overlap item now cites Folland and Lee in separate source rows with their
own URLs and locators.

Protected Phase 3 defect: the same published measurable-C1 theorem remains
unchanged, and its repository consumers remain debt-ledger entries even though
the proposed density proof has a complete local Borel route.

### Batch 15 — DC and complete-metric Baire

Status: direct source/scaffold blockers closed; 10 items, unchanged.

The prescribed-start equivalence, tagged nested-ball DC proof, ZF completeness
of the discrete sequence metric, open-dense successor sets and least-index
extraction of an R-chain were checked. The converse uses no hidden choice:
each next witness index is the least natural satisfying the already-given
existential property.

Source/read evidence: Miller p.2, Definitions 4.2–4.4 p.8 and complete §5
pp.10–11, including every part of Proposition 5.4, from the stamped
205,978-byte, 26-page PDF; Karagila Definition 4 pp.4–5 and complete Chapter 2
§§2.1–2.4 pp.8–11, including Theorems 13–18 and the warnings on choice use,
from the stamped 455,955-byte source.

Protected Phase 3 defect: the inherited published load-bearing forward edge
`cex-ordered-field-not-archimedean` ->
`cor-rational-function-field-as-a-fraction-field` remains a cutover/order
repair. It is not a dependency of the proposed DC/Baire pair.

## Counts and remaining blockers

Owned item total changed from 128 to 129. The only addition is the B10 Borel
COV lemma. Against the synchronized 430-item snapshot, three separately owned
local items had already brought the working manifests to 433; this repair
brings the current 15-batch filesystem total to 434. No item was deleted.

Current mathematical/source blockers in these six batches: **0**.

Remaining protected published Phase 3 proof/cutover entries recorded above:
**6**:
measurable-function infimum proof; finite-realization topology proof;
simplicial/singular comparison/cutover; bump strict-support proof; measurable
C1 COV proof; ordered-field/fraction-field forward cutover. Separately, there
are **2** inherited page-header/prerequisite reservation groups: CK and AT. The
corresponding B-page prerequisite closures (39 and 5 pairs respectively) are already
present in the 142-pair Phase 2 manifest according to the workflow sync; they
remain Phase 3 header/cutover work, not missing proposed suppliers.

Historical full-transitive inventories (including the B5 334-node and B15
619-node traversals, and the B11 1,392-node conservative expansion) are not
blanket semantic proof certificates. This report closes only the exact source
and local mathematical objections identified for the proposed consumers.
