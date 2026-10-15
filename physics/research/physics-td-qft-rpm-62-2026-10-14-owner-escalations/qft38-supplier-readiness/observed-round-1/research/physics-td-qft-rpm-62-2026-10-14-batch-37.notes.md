# Batch 37 authoring notes

Run `physics-td-qft-rpm-62-2026-10-14`, batch 37, beta authoring. The assigned
pair is `qft-mf01` / `qft-mf01-examples`; the current autopilot status is
owner-paused at `1-scaffold`. No autopilot state, shared plan, published page,
imported mathematics or verdict was edited. The optional owner direction file
was absent at authoring time.

## Design and plan decisions

- The dispatch and QFT track design assign `qft-mf01` order 513 and
  `qft-mf01-examples` order 514, with page-level prerequisites
  `fourier-transform-convolution-and-approximate-identities`,
  `qm-math-oscillator`, and `schwartz-space-and-the-plancherel-theorem`. The
  canonical `plan-spec.json` and this batch manifest retain those three edges.
- The reservation JSON embedded in the design says `requires: []`; the
  canonical plan and active dispatch say otherwise. The plan controls, so the
  manifest preserves the three canonical prerequisite pages.
- A generated `beta-37.task.md` contains a stale reservation for QFT-MC03 and
  unrelated finite-instrument/factorial-series items. It does not match this
  dispatch or the QFT-MF01 design section, so it was not used.
- The original inventory lists four planned items: `def-qft-fock-and-test-spaces`,
  `lem-qft-fock-ccr-car`, `lem-qft-segal-weyl-domain`,
  `lem-qft-second-quantized-spectrum`, plus B item
  `ex-qftmath-mode-domain`. Three omitted local prerequisites were added on the
  A page before their consumers: `lem-qft-l2-product-tensor-identification`,
  `lem-qft-hermite-graph-core-for-position`, and
  `lem-qft-fock-one-mode-splitting`. This preserves the designed claims while
  supplying the full product-space identification, the weighted Hermite graph
  core, and the one-mode factorization used in the Segal proof.
- Inventory labels `NRQM-M1`, `NRQM-M8`, and `NRQM-M12` resolve to completed
  research arguments, not published item IDs. They are not treated as proved
  by label. The carriers cite the inspected published tensor construction,
  bounded tensor maps, permutation-sector projections, Hermite recurrence and
  completeness, Fourier uniqueness, and the new local graph-core proof.
- The content remains mathematical. No particle species, spin-statistics,
  physical postulate, point-field measurement or empirical claim is inferred.

## Inventory, dependencies and levels

The assigned manifest contains seven A items and one B example, below the
100-item page limit. Topological order and computed item levels are:

| Item | In-batch suppliers | Level |
|---|---|---:|
| `def-qft-fock-and-test-spaces` | none | 0 |
| `lem-qft-hermite-graph-core-for-position` | none | 0 |
| `lem-qft-l2-product-tensor-identification` | `def-qft-fock-and-test-spaces` | 1 |
| `lem-qft-fock-ccr-car` | `def-qft-fock-and-test-spaces` | 1 |
| `lem-qft-fock-one-mode-splitting` | `def-qft-fock-and-test-spaces` | 1 |
| `lem-qft-second-quantized-spectrum` | `lem-qft-fock-ccr-car`, `lem-qft-l2-product-tensor-identification` | 2 |
| `lem-qft-segal-weyl-domain` | `lem-qft-fock-ccr-car`, `lem-qft-fock-one-mode-splitting`, `lem-qft-hermite-graph-core-for-position` | 2 |
| `ex-qftmath-mode-domain` | `lem-qft-fock-ccr-car`, `lem-qft-second-quantized-spectrum` | 3 |

The internal dependency graph is acyclic. Batch 37 has no in-run supplier
outside itself; the semantic batch level remains zero. The assigned
cross-batch dependency ledger is therefore `[]`. After the manifest changed,
the run-level dependency file's manifest hash became stale; that owner-managed
file was not rewritten.

Direct suppliers and their inspected mathematical content:

- `def-schwartz-space-and-its-seminorms` and `def-tempered-distribution`:
  actual Schwartz seminorm topology and continuous complex-linear functional
  convention.
- `def-test-function-space-d-of-an-open-set` and `def-test-function-topology`:
  compact support and LF topology for `D`.
- `lem-nrqm-composites-hilbert-tensor-construction` and
  `lem-nrqm-composites-bounded-tensor-maps`: algebraic tensor quotient,
  product pairing/completion, dense elementary tensors and continuous tensor
  extensions with norm bounds.
- `lem-nrqm-composites-permutation-sector-projections`: permutation action,
  symmetric/antisymmetric averaging projections, fixed-sector descriptions,
  and the explicit warning that particle statistics are not derived.
- `thm-nrqm-oscillator-hermite-recurrence` and
  `thm-nrqm-oscillator-hermite-completeness`: real normalized Hermite basis,
  polynomial degrees, ladder recurrence and completeness, with Countable
  Choice only.
- `cor-uniqueness-of-the-l-one-fourier-transform`, the Gaussian transform,
  L2 Hilbert/Cauchy-Schwarz, dominated convergence and the orthogonal-complement
  closure theorem: exact premises used by the new local graph-core proof.
- Product-measure definitions and the Tonelli/Fubini, sigma-finite uniqueness,
  completion, Dynkin pi-lambda, continuity-from-below and simple-function
  density suppliers: exact premises for full product-L2 surjectivity.
- Unbounded-operator graph, adjoint, closed/core and self-adjoint definitions:
  exact conventions used in the local multiplier and Fock-domain arguments.

The QFT tensor convention is second-variable-linear. Each completed tensor
product uses the unchanged norm completion of the published first-linear
construction with its pairing conjugated; this is stated in the local Fock
definition. The Hermite core supplier is first-linear, and complex conjugation
transfers its real position-multiplier statement to the second-linear mode
space.

## Source harvest and retrieval record

Four independent full treatments were read over the locators recorded in the
coverage JSON: Dereziński's full QFT notes, Tong's full QFT notes, Teschl's
complete mathematical-physics book, and Dyatlov's complete MIT analysis notes.
The contents and item-by-item dispositions are in the coverage file; no
measurement or formal delta expression was used as a proof of a domain claim.

`source-fetch-check --stamp` was run on the four selected PDF URLs. It fetched
each body, but returned `0/4 source(s) fetch-verified`: each of the six
recorded attempts per URL stopped at `compressed PDF page count could not be
verified with mutool`, because `mutool` is unavailable in this environment.
No additional fetch was made after those five recovery retries. Alternative
searches were recorded in each `source_resolution`: Dereziński, Teschl and
Dyatlov searches returned their existing PDF/full-course pages; Tong's search
also found the author's full HTML chapter on multi-particle states. The
coverage records preserve all attempts and the source text's per-item
dispositions. Each included or inline result has an alternative proof argument
and exact declared dependency list in `source_resolution`; those local proofs
carry the mathematical claims independently of the unstamped PDF references.

The source checker was then run in check mode and reported `4/4 source(s)
resolved (4 documented drops; not fetch stamps)`. The coverage checklist with
`--require-destination` passed with 20 harvested results and no warnings. The
PDF byte/page hashes were not fabricated; the missing `mutool` stamp remains an
explicit environment limitation for independent review.

An unused Stéphane Attal `Fock_Spaces.pdf` candidate returned 404 during
earlier source discovery and is not cited or part of the selected coverage.
The inspected Dereziński, Tong, Teschl and Dyatlov treatments already cover
the page's source needs; no claim relies on the unused candidate.

## Check record

Scoped proof contracts, layouts, dependency checks, manifest checks and Step 1
readiness records are being completed after final carrier edits. No tests were
run. Completion records will be mechanical authoring evidence only; they do
not certify independent approval.
