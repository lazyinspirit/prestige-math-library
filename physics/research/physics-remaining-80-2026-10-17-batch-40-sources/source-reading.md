# Batch 40 source retrieval and reading record

Run: `physics-remaining-80-2026-10-17`  
Subject: bounded quantum lattice pressure on cubes and van Hove sets  
Reading date: 2026-10-17

## Independent treatment 1: Naaijkens lecture notes

Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, extended and corrected Summer 2016 lecture notes, full 157-page PDF: <https://arxiv.org/pdf/1311.2717>.

The PDF was originally fetched in batch 39 and its complete source hash is recorded in that batch's source dossier. I re-inspected the complete relevant PDF text through the arXiv PDF reader for this batch. The local raw file is `research/physics-remaining-80-2026-10-17-batch-39-sources/raw/naajk-quantum-spin-systems.pdf`, SHA-256 `6d954604ef16fc58481f469a43ab3364229c4456d8ee6bf7c2446adb6d22751d`; the batch-40 `source-fetch-check --stamp` record reports 1,894,041 bytes, 157 pages, and SHA-256 prefix `6d954604ef16fc58`.

Inspected sections and disposition:

| Harvested result | Supported item | Disposition |
|---|---|---|
| §§3.2.2–3.2.3 and §§3.3.7–3.3.8, local net, quasi-local completion, translations and interaction setup, printed pp. 56–57 and 66–68 | `def-qsm-translation-invariant-spin-interaction` | Included. The source supplies the local-spin and translation framework; the assigned definition constructs the configuration relabelling unitaries, proves their group law and isometric extension, and fixes the anchored-shape convention locally. |
| §3.4.12, van Hove convergence by translated box counts, printed p. 79 | `thm-qsm-quantum-lattice-pressure` | Included. The source supplies convention context; the item defines the inner-boundary condition it uses and proves the pressure limit under that condition without an unstated equivalence of conventions. |
| Proposition 3.4.14, entropy per volume and infimum over boxes, printed p. 80 | `lem-qsm-stationary-spin-entropy-density` | Included. Naaijkens states the result and refers its proof elsewhere; the assigned item proves the cube limit locally from finite entropy subadditivity. |
| Proposition 3.4.15, invariant mean-energy density, printed p. 80 | `lem-qsm-stationary-spin-entropy-density` | Included. The assigned item supplies its own finite-range support count and cube-limit proof. |
| Theorem 3.4.16, KMS/free-energy characterization under a stronger exponential interaction bound, printed pp. 81–82 | `thm-qsm-spin-pressure-variational-principle` | Out of scope. The assigned variational statement deliberately does not identify maximizers with KMS states, so this separate characterization is not built in this pair. |
| Spectral energy concentration | `lem-qsm-energy-density-concentration` | Out of scope. No such conclusion is asserted in the inspected sections; the assigned proof instead derives it from pressure differentiability and finite spectral exponential moments. |

The Naaijkens text distinguishes its finite-region entropy and mean-energy quantities from whole-system entropy. Its van Hove definition uses box-partition counts, while the assigned pressure theorem states the exact inner-boundary hypothesis needed by its own proof. No claim is made that Naaijkens proves the assigned pressure result or the assigned energy-concentration result.

## Independent treatment 2: Lanford–Robinson

Oscar E. Lanford III and Derek W. Robinson, “Statistical Mechanics of Quantum Spin Systems III,” *Communications in Mathematical Physics* 9 (1968), 327–338. Full 12-page PDF: <https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf>.

The complete paper was retrieved locally at `research/physics-remaining-80-2026-10-17-batch-40-sources/raw/lanford-robinson-statistical-mechanics-iii.pdf`, SHA-256 `411b98b2fadec78950dd0227e085bb26bc57af3e82710635ea0be66be077ebe5`. The PDF has 718,298 bytes and 12 pages; the current coverage record has a successful full-text fetch stamp. The relevant finite-spin algebra/interaction setup on printed pp. 331–333 and the complete Theorem 3.1 text and proof on pp. 333–334 were inspected.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Finite-spin algebras, translations and invariant interactions, printed pp. 331–333 (actual PDF pp. 5–7) | `def-qsm-translation-invariant-spin-interaction` | Included. The paper supplies independent setup; the assigned definition gives the explicit configuration-basis translation construction and its local group-law proof. |
| Theorem 3.1(1), existence of thermodynamic pressure for the stated quantum-spin interaction class and parallelepiped limits | `thm-qsm-quantum-lattice-pressure` | Included. The assigned finite-range theorem is proved locally for cubes and arbitrary inner-boundary van Hove sequences. Lanford–Robinson explicitly defers pressure existence to an earlier paper; that deferred proof is not used to close the item. |
| Theorem 3.1(4), pressure as the supremum of mean entropy minus mean interaction energy, with an attaining equilibrium state | `thm-qsm-spin-pressure-variational-principle` | Included. The source supplies an independent statement and variational context. The assigned proof supplies the block-Gibbs construction and conditional attainment argument locally; the source proof relies in part on earlier references. |
| Mean entropy and interaction-energy conventions preceding Theorem 3.1 | `lem-qsm-stationary-spin-entropy-density` | Included. The local item proves its finite-range cube limits directly. |
| Spectral energy concentration | `lem-qsm-energy-density-concentration` | Out of scope. The inspected Theorem 3.1 proof does not state concentration; the assigned item derives it locally from pressure differentiability and finite spectral moments. |

The paper uses parallelepipeds whose side lengths tend to infinity and an absolutely summable translation-invariant interaction norm. The assigned finite-range interaction is a special case for the cube claim; the arbitrary-van-Hove extension and boundary-perturbation estimate are established by the local block comparison, not imported from the paper.

## Retrieval and limitations

The batch-40 command `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-40.coverage.json --stamp` succeeded: 2/2 full-text sources fetched and verified, 2/2 resolved, with no failures or drops. The Lanford–Robinson PDF was locally downloaded and hashed. `pdfinfo` and `pdftotext` executables are unavailable in this environment, so the complete relevant printed pages were inspected in the PDF text reader; no extraction or reading beyond the stated locators is claimed. No source-resolution retry or alternative-source search was needed.

These treatments support the scope and literature context. Every thermodynamic-limit, concentration, entropy-density, energy-density, and attainment deduction asserted by this batch is supplied in the item proofs with its exact mathematical assumptions; citations alone are not used to close a proof.

## Raw-PDF reinspection and pagination reconciliation — 2026-10-17

The author re-opened the raw PDFs with PyMuPDF and extracted the relevant pages directly, rather than treating the earlier printed-page locators as PDF-page indices. For Naaijkens, the inspected actual PDF pages were 56–58 (printed 56–58) for the finite local net, quasi-local completion and induced translation action; 65–68 (printed 65–68) for the finite-range interaction definition, Hamiltonians and translation invariance; and 78–82 (printed 78–82) for the van Hove, entropy, energy and KMS context. The definition item now records the §3.2 and §3.3 locators as well as the thermodynamic sections.

All 12 pages of the Lanford–Robinson PDF were text-extracted and inspected. Its pagination is offset: actual PDF page 5 is printed p. 331; PDF p. 6 is printed p. 332; PDF p. 7 is printed p. 333; and PDF p. 8 is printed p. 334. Theorem 3.1 begins on actual PDF p. 7 / printed p. 333, and its complete proof continues on actual PDF p. 8 / printed p. 334. The source locators below now give both page systems. The proof's explicit deferrals to [2] and [3] remain excluded from the local proof claims.

The run-local command `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-40.coverage.json --stamp` was rerun after this inspection and returned `2/2 source(s) fetch-verified (0 newly stamped)` and `2/2 source(s) resolved (0 documented drops; not fetch stamps)`. Both raw PDF SHA-256 values are unchanged from the retrieved records. No retrieval failure, recovery retry, source drop or alternative-source search occurred.
