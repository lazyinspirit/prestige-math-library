# Batch 50 notes — qft-mg02 / qft-mg02-examples

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, batch 50. This batch owns the `qft-mg02` / `qft-mg02-examples` pair and its batch evidence. Drafts remain conditional where stated; these records are not independent proof approval.

## Plan and inventory decisions

The complete design section is `research/plan-quantum-field-theory-track.md` §“Exact compact U1 rotor plus finite CAR data” (order 539). The design reservation says `qft-mg02` requires only `qft-mf01`; the current `research/plan-spec.json` and batch-50 manifest require `orthonormal-bases-parseval-and-fourier-series`, `qft-mf01`, and `unbounded-self-adjoint-operators-and-stones-theorem`. The current plan and manifest control; no shared plan was edited. The companion requires `qft-mg02`.

The dispatched eight-item A inventory asserted a joint finite-mode occupation basis and its site-number spectrum but did not supply that prerequisite result. I added `lem-qft-finite-mode-occupation-basis` on the A page, before its consumer, with a complete proof from the inspected antisymmetric Fock construction and CAR interface. This expands the A page from eight to nine items; the page remains well below its 100-item cap. The B page retains its three assigned example/counterexample items.

The in-run levels recomputed over batches 37 and 50 are:

| Item | Level |
|---|---:|
| `lem-qft-finite-mode-occupation-basis` | 2 |
| `def-qft-compact-lattice-gauge-data` | 3 |
| `lem-qft-lattice-gauss-projection` | 4 |
| `lem-qft-lattice-hamiltonian-selfadjoint` | 4 |
| `lem-qft-lattice-physical-evolution` | 5 |
| `lem-qft-lattice-local-gauss-flux` | 5 |
| `lem-qft-lattice-ward-identities` | 6 |
| `lem-qft-qed-gauss-localization` | 6 |
| `lem-qft-lattice-ward-contact` | 7 |
| `ex-qft-qed-nonempty-gauss` | 5 |
| `cex-qft-qed-compact-charge-sector` | 6 |
| `ex-qft-qed-ward-selection` | 7 |

Batch 50 is page-level dependency level 1, with batch 37 as its sole in-run supplier. The scoped item graph over batches 37 and 50 is acyclic and every listed level matches the manifest.

## QFT-MF01 interface review

The current batch-37 manifest now contains `qft-mf01` and the actual draft carriers `def-qft-fock-and-test-spaces` and `lem-qft-fock-ccr-car`. I inspected the complete supplier items, their direct mathematical dependencies, and the displayed proofs. The Fock definition specifies antisymmetric tensor sectors, the vacuum and the second-variable-linear pairing. The CAR lemma assumes Countable Choice and a separable complex Hilbert space, states bounded creation and annihilation operators satisfying the CAR on all of Fock space, and supplies its argument. Here `K=\bigoplus_{x\in V}\mathbb C^s` is finite-dimensional and separable, and the consumer uses the same pairing and CAR convention. The newly added occupation-basis lemma proves the finite wedge ONB and the site-number spectrum locally.

The actual supplier interfaces match the conditional use, so the five page/item cross-batch edges are recorded as `verified` in `research/physics-td-qft-rpm-62-2026-10-14-batch-50.cross-batch-dependencies.json`. Both QFT-MF01 supplier items remain drafts and do not have current Step-1 readiness records. No proof acceptance is inferred from their labels; all uses in this batch remain explicitly conditional on the inspected draft results.

## Source research and disposition

The A page uses two independent full-text treatments:

- John B. Kogut, “An Introduction to Lattice Gauge Theory and Spin Systems,” *Reviews of Modern Physics* 51 (1979), §VI.C, printed pp. 694–696. The complete 55-page review was read. The active Rome1 mirror is byte-identical to the retrieved UC Davis copy (SHA-256 `005acf041cd354e737c714a1241baa842605df5ee2d6106af25b8a5b1cdf45d3`). The section supports the compact-link, electric-flux, Hamiltonian and Gauss-law setup; the exact domains and finite-mode basis are proved locally.
- Patrick Emonts and Erez Zohar, *Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories*, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4. The full HTML text is the active citation; the corresponding complete 32-page PDF was retrieved and those sections read for rotor links, fermionic matter, Gauss generators and invariant dynamics. The quantum-link model in those notes is not identified with the rotor model here.

The coverage file records 10 harvested results across both pages, including the out-of-scope dispositions for Emonts–Zohar §§2.3–2.4. Retrieval history is preserved there: the UC Davis PDF endpoint had six TLS failures before the byte-identical Rome1 replacement; the arXiv PDF endpoint had six page-count verification failures because `mutool` is unavailable, so the complete HTML text and retrieved PDF were inspected instead; the APS PDF returned HTTP 401; and the unused Wiese PDF candidate was dropped after its recorded page-count failures. The dropped endpoint records preserve the attempts and searches and now include an item-specific local argument and direct dependency list for every assigned result. These drops do not reduce mathematical coverage: all operator and domain claims have local conditional proofs, and no measurement or empirical claim is made.

## Current authoring and scope

The definition fixes a finite oriented graph, compact link rotors, finite CAR matter, maximal diagonal Gauss domains, a bounded gauge-invariant interaction and the exact electric Hamiltonian domain. The proofs establish the finite-regulator projection, nonempty sector, self-adjoint Hamiltonian, Stone evolution, regional flux identity, gauge selection rules, time-ordered contact identity and the stated conditional continuum localization obstruction. The continuum clause specifies the test-function assignments, common domain, exact smeared Gauss relation, locality, cutoff sequence and convergence assumptions. It asserts no continuum representation or unconditional continuum theorem.

The B examples verify a nonzero fixed-background state, refute arbitrary total-occupation sectors on a closed graph, and illustrate a charged expectation selection rule. They make no experimental or statistical claim.

## Checks and blockers

- `proof-contract.mjs --strict`: pass; all 12 items checked, zero errors and warnings.
- `precheck.mts` on the 12 assigned item files: pass; 11 proof-bearing items pass, the definition is not applicable. The phase checker’s dependency-layer labels and references were applied, then contracts were regenerated for the resulting step numbers.
- `rendercheck.mjs` on the 12 items and two pages: pass; 14 files, zero errors and warnings.
- Focused `depcheck.mjs` on the 12 assigned IDs: pass; both assigned pages and their prerequisite cycle closure checked, zero errors and warnings.
- `content-policy.mjs --manifest-only --authored`: pass; 12 items, zero errors and warnings.
- `coverage-checklist.mjs`: pass; two pages, 10 harvested results, zero errors and warnings.
- `source-fetch-check.mjs --stamp`: 4/9 sources fetch-verified and 9/9 resolved; five source endpoints are documented drops. No new stamp was needed on the final check.
- Scoped item dependency-level computation over batches 37 and 50: pass; zero errors and the levels above.
- `frontier-dependency-ledger.collect` on the scoped 37/50 snapshot: pass; the five declared page/item edges are all interface-verified, with no orphaned reviews. Full-run collection stops on an unrelated invalid review in batch 11.
- `proof-layout.mjs` on all explicitly changed items: blocked before layout analysis because the renderer checkout cannot resolve `@/components` from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). The physics workspace was not changed to work around the external renderer issue.
- Full-run `item-dependency-levels.mjs check` reports empty inventories, malformed entries without item IDs in `qft-mf03`, and stale levels in unrelated RPM items. None names a batch-50 item; the scoped graph passes.
- Full-run `batch-dependency-levels.mjs check` and `step1-decisions.mjs check` stop with `Duplicate item undefined` while loading the malformed `qft-mf03` manifest. No other batch manifest, shared dependency state, plan, verdict or engine state was edited. The current batch-50 Step-1 records were generated with the repository CLI against a temporary snapshot containing the unchanged batch-37 and batch-50 manifests plus the current plan and item tree. All transitive in-run suppliers for these 12 items are owned by batches 37 or 50, and all 12 hash-bound `ready` records were verified closed in that scoped snapshot. Their reason preserves the draft/conditional status and explicitly says this is not proof acceptance.

The run-wide readiness gate remains open because of other batches and the malformed QFT-MF03 manifest. Batch-50 authoring and its scoped readiness records are complete; these records do not constitute independent approval.
