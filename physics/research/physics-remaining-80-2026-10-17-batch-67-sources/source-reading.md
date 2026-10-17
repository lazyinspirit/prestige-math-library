# Batch 67 source reading — `tgr-pet02`

Run: `physics-remaining-80-2026-10-17` · batch 67 · pages `tgr-pet02` and `tgr-pet02-examples`.

## A-page treatments

- Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, complete 157-page author-hosted lecture-note PDF, [arXiv PDF](https://arxiv.org/pdf/1311.2717). I inspected §3.4, Definition 3.4.4 (printed pp. 74–75) and the finite Gibbs/KMS calculation (printed pp. 76–77). It supports the KMS strip and finite Gibbs convention used by `post-tgr-selected-gibbs-kms-preparation`, `pthm-tgr-local-kms-clock-temperature`, and `ex-tgr-independent-redshifted-cells`. The source sets $\hbar=1$ after defining the strip; the local items retain $\hbar\beta$ in physical seconds and prove their own finite-cell applications. The current-run complete PDF retrieval and byte hash are reused from batches 41/64; relevant text was reopened and checked for this use.

- David Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*, complete 36-page author-hosted lecture-note PDF, [arXiv PDF](https://arxiv.org/pdf/math-ph/0107009). I inspected Chapter 1 §7 (printed/PDF pp. 12–13), including the strip boundary relation and the statement that rescaling time rescales the inverse-temperature parameter. It independently supports `pthm-tgr-local-kms-clock-temperature` and the B-page finite KMS example. The source's natural-time convention is not imported; the local theorem composes the physical-time strip functions directly. Its Chapter 2 infinite-spin Gibbs/KMS discussion is outside this page's finite-cell claim. The complete PDF retrieval and raw-byte hash are reused from current-run batch 41/64 evidence.

These are two independent full-text treatments on the A page, both author-hosted lecture notes. Their exact current page locators, supported items, dispositions, limitations, raw-file hashes, and fetch stamps are in `research/physics-remaining-80-2026-10-17-batch-67.coverage.json`.

## Finite-response treatments

- Ryogo Kubo, “Statistical-Mechanical Theory of Irreversible Processes I,” *Journal of the Physical Society of Japan* 12 (1957), §2, printed pp. 572–575, [scanned PDF](https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf). The complete 17-page scan and response section were inspected in current-run batch 47; batch 64 reuses that exact scan and its SHA-256 record. It supports the first-order commutator sign/order and causal convolution in `pthm-tgr-finite-stationary-response`. The local result proves the finite-norm remainder and clock/spectral redshift itself.

- MIT OpenCourseWare 8.512, *Theory of Solids II*, Lecture 1, §§1.1–1.5, [complete 11-page lecture note](https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf). The interaction-picture response §§1.1–1.2 and spectral/detailed-balance discussion §§1.3–1.5 were inspected from the full-text PDF. Its $\hbar=1$ and perturbative conventions are recorded in coverage; the local theorem uses physical units, finite-time controls, and the exact QSM supplier remainder.

Kubo and MIT are independent full-text treatments of the response convention. Their harvested results and exact dispositions are recorded in the batch coverage file. No source retrieval failed in the active source history, no recovery retry or search was needed, and no source was dropped; the existing current-run full-document stamps were reused rather than restated as new fetches.
