# Batch 71 source reading — `tgr-g01` / `tgr-g01-examples`

Four independent full-text treatments were retrieved as complete PDFs. The A page uses two independent statistical-mechanics treatments (Katz and Tong), and the static relativistic gas branches also use independent Chavanis and Tong treatments. Complete source bodies were opened through the full-text reader and the listed relevant reasoning was inspected. The assigned proofs establish their precise finite-model claims locally; none of these sources supplies a proof of an arbitrary physical system or an empirical observation.

`source-fetch-check --coverage research/physics-remaining-80-2026-10-17-batch-71.coverage.json --stamp` completed with 7/7 source entries fetched and stamped, zero failures, and zero drops. The stamps bind PDF byte counts, page counts, short SHA-256 prefixes, and fetch times in the coverage file. Raw PDFs were not retained in the workspace.

## Treatments and harvested results

- **Joseph Katz, “Thermodynamics and Self-Gravitating Systems,” complete 41-page author manuscript.** Read §§2(i)–2(ii), PDF pp. 2–5, for finite phase counting, point-collapse and cutoff context; §2(c), pp. 9–10, for canonical preparation; and §3, pp. 13–17, for ensemble-dependent heat capacity. This informs the finite softened, point-attempt and ensemble-comparison model choices. Katz’s self-gravitating calculations use approximations and source-specific assumptions; the exact finite softened Gibbs normalization, the equal-mass collapse result and the regulated relative-shell response are consumed only at their inspected local mathematical statements and are not inferred from Katz.

- **David Tong, “Statistical Physics,” complete 191-page author-hosted lecture notes.** Read §§1.3.1–1.3.3, PDF pp. 24–30, for canonical weights, energy variance and entropy conventions; §1.4 for grand-canonical weights; and inspected §2.1 plus §§3.5–3.6 using the current batch-69 full-text record and this batch’s full-text retrieval. The current source view independently confirms the variance-response and Fermi occupation context. The lecture notes’ thermodynamic-limit discussion is not imported into the finite gravitational claims.

- **Pierre-Henri Chavanis, “Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas,” complete 36-page paper.** Read §III, PDF pp. 8–11, including the local Maxwell–Jüttner law, lapse-dependent temperature/chemical parameters, pressure and hydrostatic equations. This paper couples its gas to a self-gravitating system. The assigned postulate instead prescribes the static background, and its exact finite normalization and hydrostatic identity are proved from the local mathematical supplier.

- **Pierre-Henri Chavanis, “Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas,” complete 62-page paper.** Read §III and the relativistic local distribution passages, PDF pp. 19–21, for Fermi–Dirac energy and redshifted temperature/chemical-potential conventions. The source treats a self-gravitating continuum model; it does not establish a generic curved-space finite-mode spectrum. The assigned finite-mode trace and marginals are proved directly by a finite sum, without countable choice.

## Conventions and limits

All sources are theoretical treatments. The assigned items report no observed gravitational gas, measurement, uncertainty estimate or statistical inference. Katz and Chavanis discuss self-gravitating equilibrium models that exceed the fixed finite Hamiltonian or prescribed-background scopes here; those broader results are recorded as context only. The canonical relative Kepler momentum distribution has an unbounded tail, while the microcanonical branch alone receives the explicit uniform slow-motion restriction.

Each source’s supported items, exact locator, per-item disposition and fetch stamp are recorded in `physics-remaining-80-2026-10-17-batch-71.coverage.json`; the unique source inventory and all item-level harvest dispositions are in this directory’s `source-manifest.json`. No retrieval failure, retry, source drop, or owner escalation occurred.
