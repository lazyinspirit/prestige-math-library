# Batch 117 source reading

Run: `physics-non-fluid-129-2026-10-21-r2`; batch 117; A page `tgrx-noether-entropy`.

The three complete source PDFs and their successful first-attempt retrieval stamps are retained with batch 40 of this same run. I inspected the additional sections below in those full bodies and reused the original byte counts, hashes, page counts, URLs, and timestamps in batch-117 coverage. No second fetch or retrieval attempt is claimed.

## Iyer and Wald (1994)

* Source: [Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy](https://arxiv.org/pdf/gr-qc/9403028), arXiv:gr-qc/9403028v1, complete 31-page PDF.
* Read: §3, equations (23)–(43); §4, equations (49)–(60); §6, equations (73)–(78) and (93)–(102). This includes the curvature-dependent first-variation potential, the local Noether-charge decomposition and both ambiguity classes, the fixed-generator surface identity, and the stationary horizon-charge variation with binormal correction.
* Supports: `lem-tgrx-noether-charge-decomposition`, `pthm-tgrx-noether-horizon-entropy-variation`, and `pthm-tgrx-noether-first-law`.
* Dispositions: the derivative-free-curvature specialization of the potential and charge decomposition, stationary entropy variation, and surface identity are included. The dynamical entropy proposal and curvature-derivative extension are out of scope. The current proof makes the local charge representative and its allowed ambiguity class explicit; it does not import global exactness from local current closure.

## Compère and Fiorucci (2019)

* Source: [Advanced Lectures on General Relativity](https://arxiv.org/pdf/1801.07064), arXiv:1801.07064v4, complete 125-page lecture notes.
* Read: Lecture 1, §§1.3.1–1.3.3 and §§1.4.1–1.4.2, including variational forms, local Noether charges, the surface-charge identity, and Hamiltonian integrability.
* Supports: local charge construction and ambiguities, explicit boundary-charge assumptions, and global integrability in `def-tgrx-noether-horizon-data` and its consumers.
* Convention check: their contracted presymplectic-current order is opposite to Iyer–Wald’s. This batch fixes the Iyer–Wald conventions in its own definitions and calculations, translating signs rather than copying a formula without adjustment.
* Dispositions: the general local charge decomposition and surface identity are included. The lecture’s boundary-action-specific Hamiltonian construction is out of scope because this page postulates its exact boundary variation instead.

## Harlow and Wu (2020)

* Source: [Covariant phase space with boundaries](https://arxiv.org/pdf/1906.08616), arXiv:1906.08616v4, complete 61-page paper.
* Read: §§2.2–2.4 and §4.4, covering local and covariant first variations, boundary terms, diffeomorphism charges, and Wald entropy.
* Supports: independent boundary-term and charge-convention review for `def-tgrx-noether-horizon-data` and `pthm-tgrx-noether-first-law`.
* Dispositions: boundary-term and Wald-charge context is included inline as a check. Specialized boundary-action examples and falloff formulas are out of scope; no such boundary model is adopted here.

## Retrieval and source history

The three URLs were fetched successfully on the first attempt in batch 40. The retained records are: Iyer–Wald, 314,892 bytes, 31 pages, SHA-256 prefix `eecd25f574d73e7d`; Compère–Fiorucci, 1,336,843 bytes, 125 pages, prefix `18a820213e7136bc`; Harlow–Wu, 733,556 bytes, 61 pages, prefix `6e769a78a0e216bc`. See the batch-117 coverage JSON for the exact prior fetch timestamps and per-item dispositions. No retrieval failed, no source was dropped, and no `source_resolution` record is required.
