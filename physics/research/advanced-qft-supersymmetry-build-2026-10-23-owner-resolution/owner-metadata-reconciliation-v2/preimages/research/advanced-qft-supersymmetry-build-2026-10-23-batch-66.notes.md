# Batch 66 authoring notes

## Scope and plan

Owned pair: qftx-gaga-compact-coherent-finiteness and qftx-gaga-compact-coherent-finiteness-examples. The canonical plan contains the compact projective coherent-finiteness theorem and the finite-support and nonvanishing examples. The dispatch requirements match the current plan-spec.json. No separate pair-design section was found; the owner scaffold section 967.18 is a source scaffold with matching scope and proof obligations, and the plan controls.
The A page contains 12 mathematical carriers and the B page contains 2 examples. Both page files contain YAML frontmatter only; page bodies remain empty. The A page requires the exact eight planned prerequisite pages, and the B page requires the A page. Neither page is near the 100-item cap.

The batch-level dependency file places batch 66 at level 2 because its page consumes batch 63 and 65 pages. The plan’s original theorem/example item levels 3/4 predate these local A-page intermediates; after the local suppliers and their actual edges were added, the full run item graph computes the theorem/examples at levels 5/6. These are different graph levels, not a claim conflict; the item dependency checker passed on the recomputed graph.

## Run-wide dependency graph

Computed item levels from the full run graph after the final dependency edits. Batch 66 suppliers were authored and recorded before their consumers; out-of-run suppliers do not increase the in-run level.

- Level 0: def-qftx-gaga-frechet-space, lem-qftx-gaga-baire-category-complete-metric-spaces, lem-qftx-gaga-scalar-pseudoconvex-acyclicity, lem-qftx-gaga-cstar-laurent-decomposition.
- Level 1: def-qftx-gaga-coherent-section-topology, lem-qftx-gaga-frechet-open-mapping.
- Level 2: lem-qftx-gaga-schwartz-compact-perturbation.
- Level 3: lem-qftx-gaga-frechet-complex-compact-finiteness, lem-qftx-gaga-pseudoconvex-intersection-acyclicity, lem-qftx-gaga-coherent-section-topology-well-defined.
- Level 4: lem-qftx-gaga-coherent-section-restriction-compact.
- Level 5: thm-qftx-gaga-analytic-compact-projective-coherent-finiteness.
- Level 6: ex-qftx-gaga-analytic-projective-point, ex-qftx-gaga-analytic-finite-not-vanishing.
The scoped item-dependency-levels check passed for 441 items across 138 pages; the run maximum is level 12. The batch-66 manifest levels above match the current full run graph.

## Live cross-batch prerequisite status

Before recording readiness, the current snapshot was loaded with loadStep1Record and each supplier was checked with step1Decision. Archived blocker notes were not used as status evidence.

- thm-qftx-gaga-analytic-oka-coherence is manifested in batch 63. Its complete current statement/proof match the planned Oka interface, but its existing non-owner ready record is hash-stale: “Item or dependency changed; record current readiness.” No batch-63 record was changed.
- The exact planned thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity ID is absent from batch 65 and has no readiness record. The exact full planned statement is quoted in the Facts & Assumptions of the theorem and section-topology helper, and in the proof-contract file. Only its positive-degree polydisc vanishing clause is used; the full local scope, scalar Dolbeault-resolution clause, partial resolution length >2N, and exclusion of global Cartan A/B/Stein generation are retained.
- The manifested alternate thm-qftx-gaga-local-coherent-acyclicity was read in full. It has a current escalated Step 1 record: the record identifies hash-stale readiness for thm-qftx-gaga-analytic-oka-coherence and its transitive lem-qftx-gaga-analytic-bounded-degree-relations helper; I checked both current records with step1Decision, and each is ready but hash-stale. Its stronger statement includes the scalar Dolbeault resolution and a partial resolution of length 2N+1. It is not substituted for the planned ID.
- lem-qftx-gaga-euclidean-sheaf-cohomological-dimension has a complete inspected ordinary-cohomology proof. Its existing non-owner ready record is hash-stale; its thm-qftx-gaga-metric-cech-derived-comparison prerequisite record is hash-stale too. The local intersection proof uses ordinary cohomological dimension on Euclidean opens, never compact-support cohomology.
All consuming arguments are complete conditionals. Cross-batch-dependencies.json is a JSON array with 9 direct rows, all open; it records page and exact item edges only.

## Sources read and harvest dispositions

All harvested results are assigned or inline in batch-66.coverage.json. Full-text sections were read; nine source entries have successful fetch_verified stamps from source-fetch-check --stamp at 2026-10-23 18:54 UTC. There are seven distinct URLs because Ahlfors and MIT support both pages. No source is dropped and no source-content retrieval remains unresolved.

- Jean-Pierre Demailly, Complex Analytic and Differential Geometry: [PDF](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), IX §§1.A–1.B pp. 404–408, IX §4.B–4.D pp. 419–424, IV §6 pp. 212–215, VIII §6 pp. 377–379. Supports the Fréchet/Schwartz arguments, scalar Dolbeault vanishing, local resolutions, coherent-section topology, compact restriction, and compact coherent finiteness.
- Henri Cartan, “Un théorème de finitude”: [Numdam scan](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf), Exposé 17 pp. 1–11. The full 12-page scan was re-fetched and re-read after compaction; it supports the independent compact-complex finiteness route, Fréchet quotient topology, compact restriction, Leray comparison, and Schwartz argument.
- Yuan Liu, “Cartan’s method and its applications in sheaf cohomology”: [arXiv PDF](https://arxiv.org/pdf/2204.13185), §2.1, Theorems 2.2–2.5, PDF pp. 6–10. Supports the ordinary Euclidean-open cohomological-dimension argument.
- L. V. Ahlfors, Complex Analysis, 3rd ed.: [PDF](https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf), Chapter 5 §1.3, printed pp. 184–186. Supports Laurent expansion and coefficient extraction.
- Jeremy Orloff, MIT 18.04 Topic 7: [lecture PDF](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf), §7.7, Theorem 7.19 and full proof, PDF pp. 10–13. Independently supports the Laurent splitting.
- The Stacks Project, [§6.27](https://stacks.math.columbia.edu/tag/0099) and [§20.12](https://stacks.math.columbia.edu/tag/09SV), complete relevant official sections. Supports skyscraper sections/stalks and flasque acyclicity.
The Demailly web PDF viewer timed out during authoring and again during resumed verification. The full local PDF/text copy had already been successfully retrieved, the complete relevant reasoning was read, and the existing successful fetch stamp was reused; the failure was a viewer-access issue rather than a missing source argument.

## Authored carriers, exact scope, and direct dependencies

### qftx-gaga-compact-coherent-finiteness

- def-qftx-gaga-frechet-space (level 0, ready): Defines complex Fréchet spaces as Hausdorff complete metrizable locally convex spaces with countable seminorm bases.
  - Direct deps: none.
- def-qftx-gaga-coherent-section-topology (level 1, escalated): Defines compact-convergence presentation quotients for coherent sections and the induced finite-cover Čech quotient topology.
  - Direct deps: def-qftx-analytic-coherent-module, def-qftx-gaga-frechet-space.
  - justified_by: lem-qftx-gaga-coherent-section-topology-well-defined.
- lem-qftx-gaga-baire-category-complete-metric-spaces (level 0, ready): Proves the countable closed-cover Baire theorem for nonempty complete metric spaces under full AC.
  - Direct deps: def-axiom-of-choice.
- lem-qftx-gaga-frechet-open-mapping (level 1, ready): Proves the open mapping theorem for continuous surjective complex-linear maps between Fréchet spaces under full AC.
  - Direct deps: def-axiom-of-choice, def-qftx-gaga-frechet-space, lem-qftx-gaga-baire-category-complete-metric-spaces.
- lem-qftx-gaga-schwartz-compact-perturbation (level 2, ready): Proves that adding a compact map to a Fréchet quasi-epimorphism preserves closed finite-codimensional image.
  - Direct deps: def-axiom-of-choice, def-qftx-gaga-frechet-space, lem-qftx-gaga-baire-category-complete-metric-spaces, lem-qftx-gaga-frechet-open-mapping.
- lem-qftx-gaga-frechet-complex-compact-finiteness (level 3, ready): Proves finite-dimensional Hausdorff target cohomology for compact cochain maps surjective on cohomology, and openness of surjective cohomology maps.
  - Direct deps: def-axiom-of-choice, def-qftx-gaga-frechet-space, lem-qftx-gaga-frechet-open-mapping, lem-qftx-gaga-schwartz-compact-perturbation.
- lem-qftx-gaga-scalar-pseudoconvex-acyclicity (level 0, ready): Derives ordinary positive-degree structure-sheaf acyclicity on Hartogs-pseudoconvex domains from the smooth Dolbeault resolution and scalar vanishing.
  - Direct deps: def-axiom-of-choice, def-bigraded-complex-differential-forms, def-sheaf-cohomology-derived-global-sections, thm-cauchy-riemann-characterization-in-several-complex-variables, thm-dolbeault-lemma-polydisc, thm-smooth-function-module-sheaves-are-acyclic, thm-acyclic-resolution-theorem-for-right-derived-functors, cor-dolbeault-vanishing-pseudoconvex-domain.
- lem-qftx-gaga-pseudoconvex-intersection-acyclicity (level 3, escalated): Proves coherent acyclicity on finite intersections of relatively compact coordinate polydiscs by a psh exhaustion, scalar vanishing, and a conditional partial-resolution dimension shift.
  - Direct deps: def-axiom-of-choice, def-qftx-analytic-coherent-module, def-plurisubharmonic-function, def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity, def-levi-form-and-strict-plurisubharmonicity, thm-c-two-levi-criterion-for-plurisubharmonicity, thm-stability-operations-for-plurisubharmonic-functions, thm-holomorphic-pullback-of-plurisubharmonic-functions, lem-smooth-regularization-of-psh-exhaustion, lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity, cor-dolbeault-vanishing-pseudoconvex-domain, thm-long-exact-sequence-sheaf-cohomology, lem-qftx-gaga-scalar-pseudoconvex-acyclicity, lem-qftx-gaga-euclidean-sheaf-cohomological-dimension, thm-qftx-gaga-analytic-oka-coherence.
- lem-qftx-gaga-coherent-section-topology-well-defined (level 3, escalated): Proves Fréchet quotient completeness, relation closedness in the analytic Krull topology, and local chart/presentation independence, conditional on exact Oka and local-acyclicity suppliers.
  - Direct deps: def-axiom-of-choice, def-qftx-analytic-coherent-module, def-qftx-gaga-frechet-space, thm-qftx-gaga-analytic-oka-coherence, thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity, thm-long-exact-sequence-sheaf-cohomology, thm-holomorphic-germ-ring-is-noetherian, thm-artin-rees-lemma, thm-krull-intersection-theorem, thm-cauchy-estimates-on-a-polydisc, thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables.
- lem-qftx-gaga-coherent-section-restriction-compact (level 4, escalated): Proves compactness of coherent-section restriction to a relatively compact open subset under full AC, via Cauchy estimates, Ascoli, diagonal exhaustion, and quotient maps.
  - Direct deps: def-axiom-of-choice, def-qftx-gaga-coherent-section-topology, def-qftx-gaga-frechet-space, lem-qftx-gaga-coherent-section-topology-well-defined, thm-cauchy-estimates-on-a-polydisc, cor-ascoli-arzela-for-compact-metric-domains, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, rem-complex-euclidean-space-dictionary, thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables.
- lem-qftx-gaga-cstar-laurent-decomposition (level 0, ready): Proves the unique split of every holomorphic function on C* into its entire nonnegative part, one z^-1 term, and an entire reciprocal part.
  - Direct deps: def-complex-annulus, def-convergent-complex-laurent-series, thm-laurent-expansion-annulus, thm-uniform-limit-interchanges-complex-line-integrals, thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables.
- thm-qftx-gaga-analytic-compact-projective-coherent-finiteness (level 5, escalated): Proves finite-dimensional Hausdorff ordinary coherent cohomology on P^r(C), 0≤r≤3, under full AC and the exact conditional Oka/local-acyclicity interfaces; constructs nested Leray covers and proves topology independence.
  - Direct deps: def-axiom-of-choice, def-complex-projective-space-and-holomorphic-charts, def-qftx-analytic-coherent-module, def-qftx-gaga-coherent-section-topology, def-qftx-gaga-frechet-space, thm-qftx-gaga-analytic-oka-coherence, thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity, thm-artin-rees-lemma, thm-krull-intersection-theorem, thm-cauchy-estimates-on-a-polydisc, thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables, cor-ascoli-arzela-for-compact-metric-domains, thm-leray-acyclic-cover-theorem, thm-cech-to-sheaf-cohomology-comparison, def-cech-cochain-complex-open-cover, lem-cech-differential-squares-zero, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, rem-complex-euclidean-space-dictionary, cor-dolbeault-vanishing-pseudoconvex-domain, lem-qftx-gaga-pseudoconvex-intersection-acyclicity, lem-qftx-gaga-coherent-section-topology-well-defined, lem-qftx-gaga-coherent-section-restriction-compact, lem-qftx-gaga-frechet-complex-compact-finiteness.

### qftx-gaga-compact-coherent-finiteness-examples

- ex-qftx-gaga-analytic-projective-point (level 6, escalated): Computes H^0 and all higher cohomology for a finite-support coherent sheaf from its finite skyscraper decomposition.
  - Direct deps: def-axiom-of-choice, def-sheaf-on-topological-space, def-skyscraper-sheaf-abelian-group, def-sheaf-cohomology-derived-global-sections, def-stalk-of-presheaf, def-complex-manifolds-and-holomorphic-vector-bundles, thm-flasque-sheaves-acyclic, thm-qftx-gaga-analytic-compact-projective-coherent-finiteness.
- ex-qftx-gaga-analytic-finite-not-vanishing (level 6, escalated): Computes H^1(P^1,O(-2)) as C by the two-standard-chart Čech quotient and Laurent splitting.
  - Direct deps: def-axiom-of-choice, def-qftx-gaga-projective-twisting-line-bundles, def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity, def-polydisc-boundary-radius, def-levi-form-and-strict-plurisubharmonicity, thm-c-two-levi-criterion-for-plurisubharmonicity, thm-leray-acyclic-cover-theorem, thm-cech-to-sheaf-cohomology-comparison, thm-qftx-gaga-analytic-oka-coherence, thm-qftx-gaga-analytic-compact-projective-coherent-finiteness, lem-qftx-gaga-scalar-pseudoconvex-acyclicity, lem-qftx-gaga-cstar-laurent-decomposition.

## Contracts, page evidence, and scoped checks

The batch manifest contains current item statements, dependency roles, sources, page references, and run-wide levels. The A/B page inventories match the manifest and are frontmatter-only. The complete-statements audit passed for all 14 items: no hyperlinks interrupt statements, and each references section immediately follows its statement/definition/example.
The proof-contract file covers all 14 items, 59 numbered proof steps, 95 fact-to-supplier citations, all eight boundary cases, and applicable finite checks. The strict checker reports exactly two citation-source-missing errors: A2 in thm-qftx-gaga-analytic-compact-projective-coherent-finiteness and A3 in lem-qftx-gaga-coherent-section-topology-well-defined both cite the exact planned item absent from batch 65. Their exact plan statement and source location are recorded; this is the unresolved prerequisite, not a substituted or fabricated proof. There are no other contract errors or warnings.
The final scoped results are: proof-layout 14 items / 59 steps / 0 defects; coverage-checklist 2 pages / 42 harvested results / 0 errors / 0 warnings; item-dependency-levels 441 items / 138 pages / pass; manifest-integrity 138 owed / 138 present / 0 missing / 0 added.

## Step 1 dispositions and owner follow-up

Fourteen current local Step 1 records were written with step1-decisions.mjs record, no --owner flag, and each record contains the examined direct dependency IDs. 7 are current ready and 7 are escalated. Readiness records completion of local prerequisite authoring only; no independent review or acceptance is claimed.

Ready: def-qftx-gaga-frechet-space, lem-qftx-gaga-baire-category-complete-metric-spaces, lem-qftx-gaga-frechet-open-mapping, lem-qftx-gaga-schwartz-compact-perturbation, lem-qftx-gaga-frechet-complex-compact-finiteness, lem-qftx-gaga-scalar-pseudoconvex-acyclicity, lem-qftx-gaga-cstar-laurent-decomposition.
Escalated: def-qftx-gaga-coherent-section-topology, lem-qftx-gaga-pseudoconvex-intersection-acyclicity, lem-qftx-gaga-coherent-section-topology-well-defined, lem-qftx-gaga-coherent-section-restriction-compact, thm-qftx-gaga-analytic-compact-projective-coherent-finiteness, ex-qftx-gaga-analytic-projective-point, ex-qftx-gaga-analytic-finite-not-vanishing.
The escalations preserve the exact open inputs above. Owner follow-up is to provide a current Oka readiness record, the exact planned local-polydisc-acyclicity carrier and current readiness, the current bounded-degree-relations helper record, and current readiness for the Euclidean dimension helper and its metric Čech comparison prerequisite. Once supplied, compare their actual statement, hypotheses, and proof status against Facts A1–A3/F4 before changing any consuming readiness.

