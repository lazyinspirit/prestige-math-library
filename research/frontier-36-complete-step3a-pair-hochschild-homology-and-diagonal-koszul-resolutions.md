# Step 3a scope review: Hochschild homology and diagonal Koszul resolutions

**Decision:** `sufficient` for A page `hochschild-homology-and-diagonal-koszul-resolutions` and companion B page `hochschild-homology-and-diagonal-koszul-resolutions-examples`.

## Scope evidence

The current batch-23 manifest contains the planned 14 A claims and four B examples. The A page develops ordinary Hochschild homology for associative algebras over a field: the enveloping-algebra dictionary, two-sided bar resolution, chain complex with coefficients, bar/Tor interpretation, functoriality and coefficient long exact sequence, and degree-zero coinvariants. It then specializes to polynomial algebras, proving the diagonal differences regular, resolving the diagonal by a finite Koszul complex, and computing Hochschild homology with coefficients and for the regular bimodule. The examples cover the empty case (A=k), one-variable diagonal and twisted-coefficient computations, and the two-variable signs.

This matches the HA-22 prose and inventory in `research/plan-homological-algebra-track.md` (§ HA-22, lines 5175–5219) and the current `research/plan-spec.json` entries. All 18 canonical claims are marked included in `research/frontier-36-complete-batch-23.coverage.json`. The coverage maps Weibel §9.1 and Exercise 9.1.3 to the bar/Tor and polynomial calculations, and Khovanov’s “Hochschild homology” section to the polynomial Koszul formula and examples. I read the relevant Weibel arguments and exercises (printed pp. 300–304) and Khovanov’s section (PDF pp. 1–3): [Weibel, *An Introduction to Homological Algebra*, Chapter 9](https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf); [Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules*](https://arxiv.org/pdf/math/0510265).

The library role is covered. HA-23 consumes the bar resolution, Tor interpretation, and coefficient functoriality; the later BG-19 design also uses the polynomial diagonal comparison and its grading. The three declared prerequisites match the needed graded-bimodule, Tor/flatness, and Koszul/regular-sequence background. The current batch-23 cross-batch dependency record is empty; the B page depends on A.

## Deliberate boundaries and owner state

This scope does not claim Hochschild cohomology, cyclic homology, group-ring comparisons, tensor-algebra or truncated-polynomial resolutions, a general ground-ring theorem, or a general smooth HKR theorem. The design and source-coverage record treat these as separate or unused material; no declared consumer here needs them. They do not make the stated HA-22 subject inadequate.

The current scope ledger has only the A/B page entries and no pair-specific proceed, merger, or enrichment decision. The owner-authoring direction contains no instruction amending this pair. This report records scope only; it does not record owner approval to proceed or review proof correctness.
