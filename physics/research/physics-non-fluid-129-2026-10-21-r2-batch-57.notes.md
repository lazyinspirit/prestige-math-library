# Batch 57 authoring notes — finite-mode light–matter models and detection statistics

Run: physics-non-fluid-129-2026-10-21-r2  
Role: beta  
Assigned pair: nrqmx-quantum-optics-models and nrqmx-quantum-optics-models-examples

## Inventory and plan reconciliation

The complete design section at research/plan-non-relativistic-quantum-mechanics-frontier-expansion-track.md L419 and its linked prose scaffold specify four A-page items and two examples:

- A: post-nrqmx-finite-mode-light-matter-model, pthm-nrqmx-jaynes-cummings-blocks, pthm-nrqmx-beam-splitter-count-statistics, and pthm-nrqmx-finite-mode-loss-channel.
- B: ex-nrqmx-jc-vacuum-rabi and ex-nrqmx-single-photon-antibunching.

The inventory agrees. plan-spec.json has the matching page IDs, titles, category, order, companions, and requires lists, but both item arrays are empty placeholders. There is no metadata or proof-route conflict; the design inventory is the item source, and the read-only shared plan was left unchanged.

The exact finite-mode g²(0) definition needed by the assigned single-photon example was not supplied by the inspected earlier pages. I added def-nrqmx-finite-mode-g2-statistic on A as a local definition. It defines the dimensionless one-mode factorial statistic from ideal number probabilities, with finite second factorial moment and finite positive mean. It does not claim an output-field correlation law or experimental result.

The A manifest has five items and the B manifest has two, well below the 100-item page cap. Both page frontmatter and the manifests preserve the planned requirements. The companion relationships are local to this pair.

## Argument and dependency order

All seven items are in physics. They use physical/model assumptions only where the statement makes a physical assignment; mathematical premises come from mathematical suppliers. Dependency levels are computed across all in-run suppliers, not just this batch:

| Level | Items |
|---:|---|
| 5 | post-nrqmx-finite-mode-light-matter-model |
| 6 | def-nrqmx-finite-mode-g2-statistic, pthm-nrqmx-jaynes-cummings-blocks, pthm-nrqmx-beam-splitter-count-statistics |
| 7 | pthm-nrqmx-finite-mode-loss-channel, ex-nrqmx-jc-vacuum-rabi, ex-nrqmx-single-photon-antibunching |

Authoring followed supplier order: the finite-mode assignment first; then the g² definition, Jaynes–Cummings blocks, and beam-splitter statistics; then the loss channel and examples. The loss proof establishes complete positivity for every finite ancilla on the full one-mode trace-class Fock space by vacuum isometric embedding, unitary conjugation, and the trace-class partial trace. It does not apply a finite-dimensional Choi theorem to an infinite-dimensional channel.

The batch cross-dependency array contains eight exact in-run edges: A-page requirements on batches 51 and 52, four batch-51/52 item inputs to the A postulate, and two batch-52 item inputs to the beam-splitter theorem. Every row is verified. Current loadStep1Record/step1Decision checks returned hash-current ready records for the batch-51 finite-open page and its six A items, the batch-52 finite-mode Gaussian page and its ten A items, and the direct suppliers post-nrqmx-finite-open-model, def-nrqmx-finite-mode-symplectic-data, lem-nrqmx-finite-mode-fock-schr-identification, and thm-nrqmx-finite-mode-bogoliubov. The complete current statements and proofs of the mathematical suppliers were re-read against the consumers. These records establish current authored prerequisites only; they do not constitute independent proof acceptance.

The run-wide batch schedule computes batches 51 and 52 at level 1 and batch 57 at level 2 with prerequisites 51 and 52. batch-dependency-levels.mjs check reports the shared schedule hash stale after the batch manifests changed. The owner-controlled schedule was not rewritten.

## Source review and retrieval

Coverage records the complete source locators, searches, harvested results, and dispositions for both pages. The two independent quantum-optics treatments used across the pair are:

- Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, https://arxiv.org/pdf/2203.13206. I inspected §§IV.1 and IV.2.1–2.2, including Eqs. (267)–(271), and §VI.2.1, Eq. (491) and footnote 51. The notes are marked work-in-progress and omit some proofs; they supply conventions and context only. The local arguments prove the block, count, and channel claims. The continuous-time output-field photodetection model is explicitly out of scope.
- Christian Weedbrook et al., Gaussian Quantum Information, full review, https://arxiv.org/pdf/1110.3234. I inspected §II.2.6, Eqs. (36)–(38), §§II.5.1 and II.5.4, and §V.2. The review’s port convention differs from the local state-action convention, which is fixed and derived in the beam-splitter proof.
- John Watrous, The Theory of Quantum Information, Chapter 2, https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf. I inspected §2.1.3, printed pp. 67–69, and §2.2.2, Theorem 2.22, printed pp. 82–84. This supports finite-dimensional context only and is not used to prove the infinite-dimensional oscillator channel.

source-fetch-check --stamp recorded five full-text source records, counting each page/source entry, and the final check confirms 5/5 fetch-verified. No retrieval attempt failed, so there are no recovery retries, dropped sources, or source escalations. source_resolution.item_argument_dependencies records the exact argument, direct dependencies, and level for every assigned item.

## Model scope and empirical qualifications

The A postulate adopts finite oscillator modes, finite atomic/dipole data, SI conventions, ideal number-count and homodyne PVMs, and separately selected approximation regimes. The Jaynes–Cummings specialization explicitly sets D=d sigma_x and g=-E d/hbar, so the retained exchange coefficient matches the stated rotating-wave dipole term. The RWA scale |g|sqrt(n+1)<<omega,omega0 applies only to specified low-excitation sectors and is not uniform over Fock space. No atomic-compression error bound is asserted.

The finite selected modes are not identified with the continuum transverse radiation model or the cutoff finite-level emission branch. No photon-position or photon-spin tensor factorization, helicity, gauge/canonical/kinetic angular-momentum split, paraxial limit, continuum spontaneous-emission law, or reservoir/Markov derivation is asserted. The detector PVMs are declared ideal outcome models, not apparatus specifications or observed records. The g² value and count distributions are conditional model predictions; no measurements, finite-trial statistics, or experimental antibunching dataset are invented or claimed.

## Scoped check results

- proof-layout.mjs: 7 changed items, 23 numbered steps, 0 defects.
- precheck.mts: 6 checkable items, 0 failures; the postulate passes the nonproof-structure check and the definition has no proof body.
- proof-contract.mjs --strict: 7/7 items, 0 errors and 0 warnings.
- content-policy.mjs: 7 scoped items, 0 errors and 0 warnings.
- depcheck.mjs: all 7 selected items pass; dependency/cycle context covers 2,335 items and 540 pages.
- fwdcheck.mjs: all 7 selected items pass; dependency/forward-reference context covers 2,320 items and 547 pages.
- rendercheck.mjs: all 7 items and both pages pass; 9 files checked, including KaTeX and frontmatter parsing.
- source-fetch-check.mjs: 5/5 page-source records fetch-verified.
- coverage-checklist.mjs --require-destination: 2 pages, 21 harvested results, 0 errors and 0 warnings.
- Scoped dependency-level recomputation over the full run graph gives levels 5, 6, 6, 6, 7, 7, 7 for the seven assigned items; all match the manifest. The run-wide item-dependency-levels.mjs check reports 30 unrelated errors: 26 empty scaffold inventories and four placeholder entries without item IDs. The empty pages are emg-fx13 and its examples page; the qftx ribbon/braid, Chern–Simons/BF gravity, KZ/chiral interface, Hall/BPS wall-crossing, and categorified-line-operator pairs; csm-frontier-sampling-certificates-examples; both csm-frontier-inverse-gibbs pages; both csm-frontier-planar-critical-point pages; both csm-frontier-rare-event-numerics pages; qsmx-quantum-double-examples; and both pages for tgrx-topological-entropy-models, tgrx-jt-disk-model, and tgrx-research-boundaries. The four malformed placeholders are the three bare-string entries at indexes 0–2 of qftx-modular-tqft-sewing and the bare-string entry at index 0 of qftx-modular-tqft-sewing-examples in batch 77. The run-wide batch-dependency-levels check currently stops on “Duplicate item undefined” at those placeholders; an earlier check also reported the batch schedule hash stale after manifest changes. The owner-controlled batch schedule and all other batches were left unchanged.


## Readiness records

All seven assigned items have current Step 1 ready records, written in dependency-level order after their contracts and scoped checks passed. The records include each item’s direct dependency IDs and the relevant placement, proof, source, and scope evidence. Current in-run batch-51 and batch-52 supplier records remain ready and hash-current. These Step 1 records document authored readiness, not independent proof acceptance.
