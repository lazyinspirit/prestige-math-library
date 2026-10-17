# Batch 44 source reading and reuse record

Run: `physics-remaining-80-2026-10-17`  
Pair: `qsm-infinite-spin-physical-models` / `qsm-infinite-spin-physical-models-examples`  
Reading date: 2026-10-17

## Independent quantum statistical mechanics treatments for the A page

### Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*

Complete 157-page lecture-note PDF, arXiv:1311.2717v2, full text: <https://arxiv.org/pdf/1311.2717>. The exact local PDF is reused from `research/physics-remaining-80-2026-10-17-batch-39-sources/raw/naajk-quantum-spin-systems.pdf`, SHA-256 `6d954604ef16fc58481f469a43ab3364229c4456d8ee6bf7c2446adb6d22751d`; it has 157 pages and its successful full-text stamp is reused from the run's batch 43 coverage. I directly inspected the relevant local text for this pair at §3.4, printed pp. 74–77 (physical-time KMS definition, finite Gibbs/KMS calculation, and equilibrium discussion) and pp. 79–80 (van Hove pressure, finite-region entropy, entropy and energy densities). The batch-39 record separately documents the prior full-text reading of §§3.3.7–3.3.8 and the dynamics proofs on pp. 64–71; I reuse that exact reading record rather than claiming a new reread of those pages here.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Definition 3.4.4, KMS strip and inverse-temperature convention, pp. 74–75 | `def-qsm-infinite-spin-physical-quantities`, `post-qsm-infinite-spin-equilibrium`, both A-page physics theorems | `inline`; the items retain physical time and width `βℏ`; the source's natural-unit convention is not silently substituted. |
| Finite Gibbs/KMS calculation and equilibrium context, pp. 76–77 | `post-qsm-infinite-spin-equilibrium`, `pthm-qsm-infinite-spin-equilibrium-predictions` | `inline`; the adopted postulate is labeled as adoption, and the existence deduction is supplied by the local conditional QSM theorem. |
| §3.4.12 pressure and Propositions 3.4.14–3.4.15 entropy/energy density, pp. 79–80 | `def-qsm-infinite-spin-physical-quantities`, `pthm-qsm-infinite-spin-equilibrium-predictions` | `inline`; Naaijkens supplies context; the exact inner-boundary pressure and cube entropy claims are proved in their current local supplier items. |
| §§3.3.7–3.3.8 finite-range interaction setup and dynamics context, pp. 66–68; Theorems 3.3.12, 4.1.2 and 4.2.1, pp. 69–71 and 96–102 | `def-qsm-infinite-spin-physical-quantities`, `pthm-qsm-infinite-spin-equilibrium-predictions` | `inline` via the prior batch-39 full-text record; the current proof uses the inspected local supplier interface, not a citation alone. |

### David Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*

Complete 36-page author-hosted lecture-note PDF, arXiv:math-ph/0107009v1, full text: <https://arxiv.org/pdf/math-ph/0107009>. The exact local PDF is reused from `research/physics-remaining-80-2026-10-17-batch-43-sources/raw/ruelle.pdf`, SHA-256 `17b08625f412c71761bf4a1e655e7bef26fb99e1152df49d4d904d95b5fb364e`; it has 36 pages and its successful full-text stamp is reused from the run's batch 43 coverage. I inspected actual PDF pp. 13–14 and 24–25 directly. Ruelle's KMS parameter changes under time rescaling; our carriers state their chosen SI convention explicitly as strip width `βℏ` seconds.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Chapter 1 §7, bounded analytic-strip KMS identity and time rescaling, pp. 13–14 | `def-qsm-infinite-spin-physical-quantities`, `post-qsm-infinite-spin-equilibrium`, both A-page physics theorems | `inline`; the current items state the physical-time convention and do not conflate rescaled time with SI time. |
| Chapter 2 §6, local Gibbs states and infinite-volume KMS context, pp. 24–25 | `post-qsm-infinite-spin-equilibrium`, `pthm-qsm-infinite-spin-equilibrium-predictions` | `inline`; context only, with existence and any further deductions supplied by the local conditional proofs. |

These are two independent full-text QSM treatments for the A page. Neither establishes that a particular material is described by the adopted model.

## Thermodynamic-limit source treatment

Oscar E. Lanford III and Derek W. Robinson, “Statistical Mechanics of Quantum Spin Systems III,” *Communications in Mathematical Physics* 9 (1968), 327–338, complete 12-page PDF: <https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf>. Reused local file: `research/physics-remaining-80-2026-10-17-batch-40-sources/raw/lanford-robinson-statistical-mechanics-iii.pdf`, SHA-256 `411b98b2fadec78950dd0227e085bb26bc57af3e82710635ea0be66be077ebe5`. I inspected PDF pp. 5–8 (printed pp. 331–334), including the local spin/interaction setup and the complete Theorem 3.1 text and proof. The paper explicitly defers the pressure-existence proof to an earlier reference; that deferral is not used to close the current pressure theorem.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Local spin algebra, translation, and interaction setup, pp. 331–333 | `def-qsm-infinite-spin-physical-quantities` | `inline`; exact local algebra, units and translation definitions are retained. |
| Theorem 3.1 pressure and entropy/energy conventions, pp. 333–334 | `def-qsm-infinite-spin-physical-quantities`, `pthm-qsm-infinite-spin-equilibrium-predictions` | `inline` as independent statement and convention context; its deferred proof is not treated as evidence for the local result. |

## Ising source treatments reused for the phase branch and B example

The complete Sascha Friedli–Yvan Velenik author PDF and the complete 99-page *Proofs from the Book: Ising, DLR, Dobrushin and Peierls* seminar notes were fetched, inspected at the exact locators, and stamped in the current run's batch-42 coverage. I reuse those batch-42 reading records without claiming a new retrieval or reread in this batch:

- Friedli–Velenik, <https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf>, Chapter 3, PDF pp. 127–132; Chapter 6, pp. 265–289; appendix, pp. 329–332. The records support the finite-alphabet Ising/DLR, uniqueness, and low-temperature context for `pthm-qsm-diagonal-quantum-phase-predictions` and `ex-qsm-ising-phase-regimes`. Disposition: `inline` context; the current claims use the exact QSM theorem, which proves the conditional quantum transfer.
- Junior Seminar in Mathematical Physics, <https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf>, PDF pp. 20–24, 31–43, and 52–55. The records support transfer-matrix, DLR, and Peierls context for the same two items. Disposition: `inline` context; no source citation substitutes for the current QSM supplier proof.

## Retrieval history and limitations

No retrieval failed, no recovery retry or alternative-source search was needed, and no source was dropped. Existing full-text retrieval stamps were reused verbatim and cross-checked against local SHA-256 values for the three available local PDFs. The batch-42 source records document the full-text fetches and locators for the two CSM sources without a local raw copy in this batch. `source_resolution` recovery records are therefore not applicable. The actual batch-44 fetch check is recorded in `research/physics-remaining-80-2026-10-17-batch-44.notes.md`.

No experiment item or measured quantity is authored. All phase and pressure statements are conditional model deductions; the source treatments do not establish empirical applicability or certainty.
