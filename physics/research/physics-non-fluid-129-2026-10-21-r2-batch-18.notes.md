# Batch 18 authoring notes — emg-fx03

## Plan and design comparison

The current plan page and assigned manifest agree with the design on the A/B
IDs, title, order 733, mathematics category, library, and earlier page
requirements emg-ms01, emg-cp02, and emg-ms03. The A page contains the three
planned interfaces. Two local mathematical prerequisites were added ahead of
them: the exact SO(3)-orbit geometry and source-free Maxwell-flux reduction; a
third supplies the two-dimensional Ricci identity used in the warped
calculation. The B page contains the planned constant-radius counterexample.

The design includes a general cosmological term -Lambda r^3/6 and RN-(A)dS
conclusion. The published def-emg-xs-geometric-electrovac supplier on emg-ms01
fixes Lambda=0. Following the plan's supplier interface without narrowing the
designed conclusion, the A page defines the full Ric = Lambda g + 2Q(F)
equation locally as a mathematical family. It uses the published electrovac
item only for the exact zero-Lambda specialization, Hodge convention, and flux
normalization. The nonzero-Lambda cases are not attributed to that supplier or
to a physical postulate.

The design's plus sign in F=(q_e/r^2) epsilon_2+q_m omega is reconciled with
the published RN datum F=-q_e r^-2 dx^0 wedge dr+q_m omega by fixing
epsilon_2=-dx^0 wedge dr and the four-volume
vol_g=-r^2 epsilon_2 wedge omega. This reproduces the source's electric flux
sign exactly.

The page-level emg-cp02 requirement is retained from the plan. Its published
page's 3+1 Maxwell reduction contains a conditionally stated use of a draft
Maxwell-system definition with precheck pending. The local proofs do not need
that reduction: they use the exact two-form source-free equations already
stated by def-emg-xs-geometric-electrovac and prove the quotient reduction
locally. The page-level prerequisite remains as broader framework context; no
proof status is inferred from its published page label.

## Supplier and dependency review

The exact def-emg-xs-geometric-electrovac, def-emg-xs-rn-data,
def-emg-xs-br-products, and thm-emg-xs-br-verification carriers were read.
The BR verification proof was checked in full; its domain, curvature sign,
Hodge orientation, two-form normalization and open chart hypotheses match the
constant-radius use. The theorem is published with verification.precheck:
pass; this is recorded only as current supplier metadata, not as a new
independent review.

The A-page GR curvature inputs were checked at their actual statements and
proofs: the Levi-Civita Christoffel formula, curvature coordinate formula,
four-dimensional algebraic symmetries, smooth manifold local flow, manifold
inverse function theorem, and first fundamental theorem of calculus. The
two-dimensional identity is established by an explicit product extension to a
four-dimensional Lorentzian metric, so the four-dimensional curvature
suppliers are used under their stated hypotheses. The only choice assumption
carried is AC_omega, inherited from the local Lorentzian and flux-integration
interfaces; no full Axiom of Choice is used.

loadStep1Record and step1Decision were called for the existing EMG suppliers
before authoring. They have no readiness records in this run. That absence is
not treated as a prerequisite gap: these carriers are published, and their
actual statements and, where applicable, complete proofs were inspected.
lem-emg-fieldstrength-positive-symmetric-reduction is not used as a proof
supplier because its actual proof is conditional on
def-emg-electrovacuum-cauchy-system; its verification.precheck: pending alone
is not classified as a defect.

## Sources and retrieval history

Two independent full-text treatments were inspected for the A-page material:

- Bronnikov, Kim and Skvortsov, [The Birkhoff theorem and string clouds](https://arxiv.org/pdf/1604.04905), complete 9-page PDF; Sections 2–4 and Theorem 1. Its signature (+---) and 8 pi G=c=1 units are not imported.
- Tong, [General Relativity](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), complete author-hosted 290-page PDF; Sections 6.1.1, 6.2.1 and 6.2.5, plus Section 3.4.1. The Birkhoff proof is expressly a sketch; the RN field/metric, flux discussion, and Bertotti–Robinson near-horizon limit are checked against local proofs.

The complete 69-page Chruściel–Lopes Costa–Heusler PDF,
[Stationary Black Holes: Uniqueness and Beyond](https://arxiv.org/pdf/1205.6112),
was inspected at Section 5.3. It states the domain-of-outer-communication
Birkhoff scope; it does not supply the local warped calculation authored here.

A repository download of Torre's Birkhoff worksheet returned HTTP 403. Search
found the two accessible independent treatments above. No result is backed
only by the unavailable PDF; it is recorded as a non-selected candidate, not
as a dropped required source.

The source coverage file records URLs, precise locators, supported items,
harvested-result dispositions and per-item argument/dependency mappings.
The required `source-fetch-check --stamp` was run after the coverage carrier
was saved: all three listed full-text sources fetched and were newly stamped
(Bronnikov et al., Tong, and Chruściel–Costa–Heusler); all three are resolved
and none is documented as dropped. Torre's failed candidate is not one of
those three cited sources and remains a non-selected retrieval attempt.

## Dependency levels and cross-batch inputs

The current run scheduling record and a fresh in-memory graph calculation both
give batch 18 level 0 with no in-run batch supplier. The item levels recomputed
from the authored A/B inventory are: `def-emg-fx-spherical-orbit-geometry` 0;
`lem-emg-fx-spherical-maxwell-reduction` and
`lem-emg-fx-two-dimensional-ricci-trace` 1;
`def-emg-fx-spherical-quotient` 2;
`lem-emg-fx-warped-curvature` 3;
`thm-emg-fx-local-charged-birkhoff` 4; and
`cex-emg-fx-constant-radius-rigidity` 5. The B-page item is included in the
manifest inventory so the scoped item-level calculation and readiness loader
both see it. Page requirements point to already existing outside-run pages.
There are no item edges to another batch in this run, so the batch-18
cross-batch dependency file is the empty array. The page-level requirements
are recorded here rather than as unsupported cross-batch review rows.

The shared recorded batch-graph input hash is
`8f4535e7901106f99f358e492a376f8de08ad4d64abd28be66749a86e1b236f8`; fresh
recomputation after this batch's manifest authoring gives
`61b1be4326f1eee836d16e6d673de9b4086e7dc84c79d07b22ce520d8174600e`. The
batch-18 edge summary remains `level 0, requires []`, but the shared hash-bound
run snapshot is stale and must be refreshed by the run owner. It was left
unchanged because it is run-wide scheduling evidence.

## Scoped final checks

- Precheck: all five proof-bearing items pass.
- Proof layout: 7 items, 17 proof steps, 0 defects.
- Render check: all 7 items and both pages pass; KaTeX parses all math.
- Content policy: 7 scoped items, 0 errors, 0 warnings.
- Dependency check: all 7 selected items pass; prerequisite item/page cycle
  checks pass across 1,195 items and 371 pages.
- Item dependency levels: all 7 assigned items match their computed levels.
- Proof contracts: strict check passes for 7/7 items with 0 errors or warnings.
- Source fetch: 3/3 sources are fetch-verified and 3/3 are resolved.

`loadStep1Record` and `step1Decision` were checked after final manifest and
contract creation. All seven assigned items have current `ready` records with
their direct dependencies listed; no item is escalated. These are authoring
readiness records, not independent proof approvals. The outstanding shared
batch-graph hash refresh above is owner scheduling evidence and does not change
the recomputed batch-18 dependency level or any item's inspected inputs.
