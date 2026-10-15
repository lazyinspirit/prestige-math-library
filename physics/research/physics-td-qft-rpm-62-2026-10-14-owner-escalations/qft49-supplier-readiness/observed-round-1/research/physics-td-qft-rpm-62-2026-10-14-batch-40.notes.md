# Batch 40 notes — `qft-c01` / `qft-c01-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, beta batch 40, 2026-10-14. This
authoring covers the assigned A/B pair only. Both pages and all three items
remain drafts; the authored evidence is not independent approval.

## Instructions, plan comparison, and conflicts

Read the repository and physics workspace instructions, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the complete assigned section of
`research/plan-quantum-field-theory-track.md`, the QFT prose scaffold and
current audit bindings, `research/plan-spec.json`, the assigned task, the
owner authoring direction, and the batch dependency-level file before authoring.
The owner direction controls over stale design reservations.

The QFT-C01 design reservation lists only `qft-mc03` as its earlier page
prerequisite. The current plan-spec and assigned batch manifest require
`qft-mc03`, `sr-spacetime-primitives`, and `em-primitives-and-postulates`. The
current plan/task interface was followed and all three page prerequisites are
present on the A page. The B-item reservation uses `tex-qft-two-level-measurement`,
but the schema prefix for kind `thought-experiment` is `texp-`; the item is
therefore `texp-qft-two-level-measurement`. No published alias or link used the
stale identifier, so none was added.

The recorded batch-level row is batch 40, dependency level 1, requiring batch
36. `node tools/physics-support/batch-dependency-levels.mjs check --run
physics-td-qft-rpm-62-2026-10-14` reported a stale run-wide input digest. The
recorded level and prerequisite row match the currently read dependency graph;
the shared run-level file is left for its owner to refresh.

## Inventory, suppliers, and item levels

The A page contains `def-qft-framework-units` (level 0) and
`post-qft-constructed-model-and-measurement` (level 2). The B page contains
`texp-qft-two-level-measurement` (level 3). There is no in-run supplier for the
unit definition. The postulate depends on that definition, the finite QFT
instrument definition (level 0), and the finite-instrument normalization
lemma (level 1), so its level is 1 + max(0, 1) = 2. The thought experiment
depends on the postulate (level 2) and external mathematical definitions, so
its level is 3. The A/B pages are below the 100-item cap and the local item graph
is acyclic.

The actual `qft-mc03` carriers are drafts. The instrument definition states a
nonzero complex Hilbert space, a first-variable-linear pairing, `AC_omega`, a
finite family of bounded Kraus operators, the exact normalization
`sum M* M = I`, and its effects and operations. The normalization lemma assumes
that exact datum and a trace-class density operator under `AC_omega`; its
complete local proof gives positive effects and updates,
`p_a = tr(J_a(rho)) = tr(rho E_a)` in `[0,1]`, and total probability one. It
does not assert apparatus realization. The proof was inspected at its actual
interface and uses Countable Choice, not full Choice. Its draft status is
recorded in the postulate and cross-batch evidence; the consumer does not treat
the draft label as approval.

The SR suppliers fix the affine Minkowski model, `(-+++)` signature, inertial
chart, `x^0=ct`, and metre coordinates. The EM suppliers fix the current SI
status of `c`, `h`, `e`, and measured `mu0`, plus the tensor components and
potential units. Their use is limited to unit and component conventions; no
classical Maxwell equation or Lorentz-force law becomes a QFT premise. The
other direct mathematical suppliers define the test space and distribution
pairing, Hilbert pairing and domains, formal coefficient sequences, and the
rank-one operators used in the finite example. Their transitive prerequisites
were inspected through the exact imported statements.

The A item makes the engineering dimensions a selected free-kinetic-term
normalization and proves the unit algebra, including the zero-charge case. It
labels the temporal wave number separately from SI angular frequency, records
the first-variable-linear pairing convention, and leaves anomalous dimensions
separate. The B proof constructs the `C^2` Hilbert space and two projections,
checks the finite instrument, computes probabilities and positive-probability
updates, and handles zero-probability division. Its factorial-series argument
proves the formal coefficient sequence exists while numerical evaluation has
radius zero; it assigns no probability to an isolated coefficient.

## Sources and retrieval record

The unit definition has two active, independent QFT treatments: Srednicki's
author-hosted full book draft, §12, and David Tong's author-hosted full Chapter
0 HTML, §0.1. The current SI status is supported by the official BIPM
brochure. Watrous and Griffiths supply two full-text measurement treatments;
their dimension and apparatus limits remain explicit. The factorial series
has active OpenStax and Howell full-text treatments, reused with their exact
batch-36 stamps and read extents.

Heidelberg's complete 282-page QFT lecture notes and relevant sections were
read, but `source-fetch-check --stamp` recorded two connection timeouts and
four compressed-PDF page-count failures across its six allowed attempts. The
URL is recorded as a certain mechanical source drop with the complete attempt
history and active alternatives. No item reference relies on that URL. The
separate Tong PDF URL previously dropped in batch 37 is not reused; this batch
uses the author-hosted HTML section and its own verified stamp.

The coverage file records all searched and harvested headings and their
dispositions, active fetch stamps, reused receipts, and the Heidelberg source
resolution. The proof contracts quote exact local supplier excerpts and map
every proof step. The cross-batch input records the `qft-c01` page edge and the
two QFT-MC03 item interfaces consumed by the postulate and example.

## Scoped checks and readiness

Final scoped check results are recorded after the last item and contract edits
below. A `ready` Step 1 record means the current authored argument and its
required inputs are available for independent review; it is not a proof verdict
or publication approval.
