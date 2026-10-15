# Prerequisite drift review — `quantum-prerequisites-4-2026-10-15`

Reviewed the scope ledger, batches 1–4, their task designs, the owner’s binding authoring direction, the corresponding prose scaffolds and proposed supplier bodies, `research/plan-spec.json`, and the run’s drift evidence. The plan’s existing transitive closures contain the external supplier homes used by the assigned A-page claims. No plan corrections were needed.

Validation: `drift-review-check.mjs --before-apply` accepted all four decisions with zero exact blockers. `validate-plan.mjs` confirmed the selected eight-page order is acyclic. It also reports that all eight current page item inventories are empty, so its item-level dependency check is necessarily pending authoring; this review checks the assigned designs and the referenced proposed supplier bodies, not future author edits.

### complex-coordinate-and-path-transport

VERDICT: no-drift

The assigned A page is at order **358.1**. Its declared requirements match the manifest and canonical plan: `arc-length-and-rectifiable-curves` (order 274), `connectedness` (order 358), `the-complex-exponential-and-eulers-formula` (order 282), and `the-total-derivative` (order 334).

I checked the six proposed suppliers and their actual `deps`: the real-linear coordinate map, coordinate isometry and topological transport, real total-derivative transport, complex-path length definition, coordinate length/BV/piecewise-speed theorem, and monotone-reparametrization theorem. Their external dependencies are in this closure: complex arithmetic and its coordinate model, the complex metric, metric and topology definitions, compactness and connectedness, Euclidean derivatives, partitions and extended-real completeness, and the R² rectifiability, speed-integral and reparametrization results. The internal dependencies proceed from coordinate scalar transport to isometry/topology, then differentiation and path results; no additional page edge or ordering change is needed.

Source check: Lebl, *Guide to Cultivating Complex Analysis*, §§1.1.1–1.1.2 (pp. 9–10), develops the coordinate model `C = R²`, its modulus and metric; Lang, *Differential Geometry I*, §1.1 (p. 1), defines metric path length by partition sums and states invariance under continuous surjective monotone reparametrization. Lang compresses the equality as “clearly”; the partition argument checks it in both orientations: monotonicity sends each new partition to an ordered, possibly repeated, old partition, and surjectivity supplies ordered preimages of every old partition (reversed in the decreasing case). Thus both suprema agree, including pauses; the proposal separately handles singleton intervals. The proofs do not transfer an R² theorem directly to a C-valued path.

Sources: [Lebl, *Guide to Cultivating Complex Analysis*](https://www.jirka.org/ca/ca.pdf), ch. 1, §§1.1.1–1.1.2; [Lang, *Differential Geometry I*](https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf), §1.1. Remaining uncertainty: no missing edge in the reviewed design or proposal; final author-written dependencies remain to be checked when items are authored.

### complex-norms-and-realification

VERDICT: no-drift

The assigned A page is at order **248.1**. Its declared requirements match the manifest and canonical plan: `complexification-realification-and-real-structures` (order 147) and `rn-as-a-normed-space` (order 248).

The six assigned suppliers are the complex norm definition, real-embedding modulus lemma, realification lemma, coordinate-ℓ¹ norm lemma, complex normed-subspace definition, and equivalent-complex-norms definition. Their proposed direct dependencies are covered by the transitive closure, including `field-extensions-and-the-complex-numbers`, `foundations-of-the-real-numbers`, `roots-and-rational-powers`, `vector-spaces-and-subspaces`, the realification page, finite-sum/function-space suppliers, and the real norm and metric suppliers. In particular, the real modulus identity has its absolute-value and nonnegative-square-root suppliers, and the equivalence definition has the real order supplier. The complex norm contract retains homogeneity for every complex scalar; real homogeneity alone would not suffice.

Source check: Kochanek, *Functional Analysis*, Lecture 1, Definition 1.1 (p. 1), gives the norm axioms over either `R` or `C`, including scaling by the modulus for every scalar and the induced metric. The proposed realification proof restricts that axiom through the canonical embedding and the modulus-restriction lemma; the remaining finite-coordinate norm proof uses modulus laws and finite sums. No unmet dependency or ordering issue appears.

Source: [Kochanek, *Functional Analysis*, Lecture 1](https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf), Definition 1.1. Remaining uncertainty: no missing edge in the reviewed design or proposal; final author-written dependencies remain to be checked when items are authored.

### complex-subspace-realification

VERDICT: no-drift

The assigned A page is at order **479.1**. Its declared requirements match the manifest and canonical plan: `complex-norms-and-realification` (order 248.1) and `normed-and-banach-spaces` (order 479).

The sole assigned supplier, `lem-complex-normed-subspace-realifies-to-real-normed-subspace`, consumes the complex normed-subspace definition, the realification definition and norm lemma, the real normed-subspace definition, a basis definition, and the complex coordinate theorem. The transitive closure supplies these through the preceding complex-norm page, `complexification-realification-and-real-structures`, `normed-and-banach-spaces`, `linear-independence-bases-and-dimension`, and `field-extensions-and-the-complex-numbers`. The proposed basis argument splits each supplied complex coefficient into real and imaginary parts, regroups a real dependence into a complex dependence, and treats the empty basis explicitly; it does not require a choice principle. No completeness or closedness conclusion is asserted that would require an additional supplier.

Source check: Kochanek, Lecture 1, Definition 1.1, confirms that the norm definition is field-parametric; the finite-basis realification claim follows from the stated coefficient decomposition and the already-declared realification/basis suppliers. Remaining uncertainty about the prerequisite closure: none identified.

Source: [Kochanek, *Functional Analysis*, Lecture 1](https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf), Definition 1.1. Remaining uncertainty: no missing edge in the reviewed design or proposal; final author-written dependencies remain to be checked when items are authored.

### pointwise-extended-real-function-products

VERDICT: no-drift

The assigned A page is at order **192.1**. Its declared requirement matches the manifest and canonical plan: `limsup-and-subsequential-limits` (order 191). The binding owner direction and final proposed carrier refine the earlier design: define the total operation on all functions `X → R̄`, with `deps: [def-extended-reals]`, and make no measurability claim. The required page closure supplies `def-extended-reals`; a measurable-function supplier is not needed for this refined definition.

Source check: Hunter, *Measure Theory*, §3.2, Proposition 3.6 and its extended-real caveat, proves the usual pointwise product preserves measurability when it is well-defined and identifies simultaneous zero and infinite values as the excluded cases. The proposed function-level operation is a distinct convention: its exhaustive zero, finite-nonzero, and signed-infinite clauses make those four zero/infinity inputs zero while leaving the scalar partial product unchanged, and assert no field laws or measurability of the output. The defining operation therefore has all prerequisites in the declared closure.

Source: [Hunter, *Measure Theory*](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf), §3.2, Proposition 3.6 and the following extended-real-valued-functions paragraph. Remaining uncertainty: no missing edge in the reviewed design or proposal; final author-written dependencies remain to be checked when items are authored.
