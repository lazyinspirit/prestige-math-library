# Batch 35 authoring notes — qft-mc02

## Inventory, assignment, and dependency order

This batch owns only the pair qft-mc02 / qft-mc02-examples (orders 509–510) in quantum-field-theory-mathematics, library mathematics. The A page requires qft-mc01; the B page requires the A page. The run's batch-dependency-levels.json gives batch 35 level 1 because it requires batch 34. The item manifest records the computed item-level labels after authoring.

The two originally reserved A items and the B counterexample were retained. Four A-page prerequisites were added because the consuming proof needs explicit definitions of a weak common-domain operator-valued tempered distribution, the Poincaré test pullback, the Minkowski Fourier/support convention, and the continuity of that pullback on Schwartz space. The local lemma proves the needed continuity estimate. These additions stay on the assigned A page and have mathematical dependencies only.

## Design versus plan-spec comparison

The plan-spec row and the complete plan-quantum-field-theory-track.md section agree on the pair/page IDs, A/B classification, order, title, category, library, companion, and declared qft-mc01 prerequisite. No page-level metadata conflict was found.

The older track reservation and the 2026-10-12 repaired QFT research inventory both reserve two A items and one B item. The repaired inventory is authoritative for the reconstruction scope: actually positive continuous moments on Schwartz tensor algebra yield a weak field on the common GNS domain; covariance, tested locality/equations, and matrix-coefficient spectrum are conditional on their displayed moment identities. The full Wightman reconstruction theorem, positivity/existence of unspecified interaction data, joint self-adjoint generators, and a joint spectral measure are outside this carrier.

The additional four A items are a justified prerequisite expansion required by the explicit-definition rule. They do not replace or weaken either reserved A claim, add another pair, or add an item on the B page. The plan-spec remains unchanged. Its `items` arrays were empty as planning placeholders.

## Current qft-mc01 supplier interface and status

The batch-34 qft-mc01 authoring dispatch is still in flight. Its page manifest currently has an empty inventory, although the following current draft files are present and were inspected in full:

- lem-qft-positive-state-cauchy-schwarz: positive-state Cauchy–Schwarz, including zero-norm cases; the null space is a left ideal.
- thm-qft-algebraic-gns-domain: quotient GNS construction on the left radical, Hilbert completion under Countable Choice AC_omega, common invariant dense domain, adjoint restriction, closability, normalized cyclic vector and state recovery. No essential self-adjointness is concluded.
- lem-qft-state-symmetry-implementer: for a topological-group unital star action, state invariance and continuity of every scalar coefficient at the identity imply a strongly continuous unitary implementation fixing the cyclic vector and implementing the action on the common domain.

Their exact hashes, statements, hypotheses, uses and unresolved in-flight status are in batch-35.cross-batch-dependencies.json. The theorem is authored conditionally from these current interfaces; they are not represented as independently accepted suppliers. The theorem's readiness remains escalated until batch 34 is complete and each actual supplier interface is rechecked.

## Source reading and dispositions

- Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, §2.4 and §4.4 (printed pp. 20–21, 78–81), full-text book carrier: positive functionals, GNS quotient, left multiplication, adjoint identity, closability, and cyclic uniqueness. Disposition: included for the algebraic representation framework; the local qft-mc02 proof supplies the test-space continuity and exact weak-field conclusion.
- Mund, General Aspects of Relativistic Quantum Field Theory, §2.1, Theorem 2.6 and proof (PDF pp. 15–17), complete 39-page lecture-note carrier. The PDF calls the notes incomplete. Its theorem assumes Hermiticity, positivity, covariance, causality, spectral and cluster conditions and states a stronger Wightman reconstruction. Disposition: included for the Borchers test algebra and GNS/moment-to-field route; only each explicitly displayed conditional component is used here, and all such arguments are written locally.
- Fewster and Rejzner, Algebraic Quantum Field Theory—an introduction, §2.3 (printed pp. 7–9), complete 47-page source: generic GNS quotient and common domain. Disposition: included as an independent treatment of GNS. Its PDF pp. 10–11 also records the r^-2 Yukawa expression; the B counterexample proves the off-origin residual directly and does not infer the singular delta normalization.

The per-page URL, locator, supported-item, disposition, retrieval-attempt, and fetch-stamp records are in batch-35.coverage.json. The QFT lecture note and textbook provide two independent treatments for the A page, one a book and one complete lecture-note text.

## Checks and readiness

Check results and Step-1 decisions are appended after final carrier edits. The qft-mc01 suppliers remain the exact unresolved prerequisites listed above; the B counterexample and self-contained local A definitions/lemma can be marked ready only after their scoped checks pass.

