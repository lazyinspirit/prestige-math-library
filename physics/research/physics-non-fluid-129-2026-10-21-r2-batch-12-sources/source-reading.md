# Batch 12 source reading — Compatible finite elements

Run: physics-non-fluid-129-2026-10-21-r2  
Pair: emx-compatible-finite-elements / emx-compatible-finite-elements-examples

## Retrieval and reading

All three source bodies were retrieved in full and inspected. The local PDF extraction tool was used to read the complete Long Chen ten-page lecture notes, all relevant sections of Hiptmair's 103-page article, and the relevant finite-element, projection, cohomology, and boundary-complex sections of Arnold–Falk–Winther's 70-page article. Exact URLs, claimed reading ranges, harvested headings, and each result's disposition are in physics-non-fluid-129-2026-10-21-r2-batch-12.coverage.json; final full-text fetch stamps are written there by source-fetch-check --stamp.

### Long Chen — Finite Element Methods for Maxwell Equations

URL: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf  
Kind: full lecture notes; complete 10-page PDF read.

- Sections 1.1–1.3, PDF pp. 1–6: first-family lowest-order Nedelec basis and edge circulations; RT0 face fields and normal fluxes; Stokes' commuting curl identity; canonical interpolation domain warning.
- Section 2, PDF pp. 6–8: PEC H0(curl) formulation, discrete weak divergence and a different constrained saddle-point error estimate.
- Section 3, PDF pp. 8–10: the full finite-element de Rham sequence, cohomology and topology dependence.

Harvest disposition: edge/face definitions and the rough-field edge-moment counterexample are included. Weak Maxwell, full-complex topology and projection observations are inline comparison context with local proofs and exact imported hypotheses. The chapter's saddle-point error result is out of scope for the positive-shift theorem because it has a different formulation and requires its own discrete Poincare and regularity hypotheses.

### Ralf Hiptmair — Finite elements in computational electromagnetism

URL: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf  
Kind: complete Acta Numerica article, 103-page author PDF read in relevant sections.

- Sections 2.3–2.4, printed pp. 248–252: material-weighted weak formulations and H(curl) graph-space conventions.
- Sections 3.1–3.3, printed pp. 255–268: oriented cochains, incidence operators, Whitney edge/face spaces, full-complex cohomology and Galerkin mass matrices.
- Section 3.5, printed pp. 278–281: moment interpolation and its domain.
- Sections 5.1–5.2, printed pp. 307–310: real-frequency resonance, indefinite form and error control via discrete inf-sup stability.

Harvest disposition: weak Galerkin assembly, full-complex topology and the resonance example are included; interpolation and H(curl) conventions are comparison context. The article's real-frequency inf-sup estimate is out of scope as a proof of the positive-shift coercive estimate.

### Arnold, Falk, and Winther — Finite element exterior calculus: from Hodge theory to numerical stability

URL: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf  
Kind: complete 70-page Bulletin of the AMS article read in relevant sections.

- Sections 3.3–3.5, PDF pp. 23–27: Hilbert-complex subspaces, bounded cochain projections, discrete harmonic spaces and quotient stability.
- Sections 5.2–5.5, PDF pp. 49–57: finite-element degrees of freedom, Whitney assembly, approximation, failure of canonical moments on rough inputs, and smoothed projections.
- Section 5.6 and Section 6.2, PDF pp. 57–61: full Whitney cohomology and the distinct essential-boundary de Rham complex.
- Section 6.1, PDF pp. 59–60: variable-coefficient Maxwell eigenproblem in the Hilbert-complex setting.

Harvest disposition: local finite-element assembly, the moment-domain counterexample, the precise role of graph-convergent projections, and the absolute/relative distinction are scaffolded or absorbed into the corresponding A items. The source is cited as context; its abstract stability framework is not substituted for the local Lax–Milgram and Galerkin proof.

## Supplier verification and qualifications

The root mathematics imports for the discrete de Rham page, the Lax–Milgram page, and all directly used imported supplier items were compared with their pinned hashes in research/math-imports.json; all inspected local snapshots matched their recorded hashes. The original mathematics carriers remain read-only.

Batch 4's def-emx-finite-energy-boundary-model and batch 11's def-emx-matrix-maxwell-system and thm-emx-matrix-energy-constraints were checked with loadStep1Record and step1Decision. Their current readiness records are closed ready. The actual draft definition and theorem proofs were read; the matrix theorem remains draft with pending independent precheck, but this is not a prerequisite gap because its full conditional proof and current Step 1 record are present. No supplier was escalated.
