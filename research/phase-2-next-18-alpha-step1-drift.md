# phase-2-next-18 — Alpha prerequisite-drift review

I reviewed the 18 A pages in
`research/phase-2-next-18-scope-ledger.json`, all nine assigned batch manifests,
the exact prose locations in `research/phase-2-next-18-planning-notes.md`, and
the current direct and transitive closures in `research/plan-spec.json`.
Candidate names in `research/phase-2-next-18-drift-evidence.json` were treated
only as search leads. I also checked that none of the eight Foundations
closures reaches `deferred-set-theory-beyond-choice`.

For the two unfamiliar dependency seams on which the decision turned, I read
the complete relevant arguments in authoritative sources. Hatcher's *Vector
Bundles and K-Theory*, Version 2.2, Proposition 2.2 proof, printed pp. 43–45,
<https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf>, constructs the required
Laurent-polynomial approximation from Fourier coefficients, the Poisson
kernel, uniform continuity, and a partition of unity; it does not import a
Stone–Weierstrass theorem. Miroslav Repický, *A proof of the independence of
the Axiom of Choice from the Boolean Prime Ideal Theorem*, full pp. 543–546,
<https://im.saske.sk/~repicky/-r30.pdf>, proves the finite-support continuity
lemma and clopen separation before the maximal-ideal primeness argument. This
confirms that the basic-Cohen-model BPI page needs the symmetric-extension
machinery already in its closure, not the later Halpern–Läuchli page.

No prerequisite correction, new pair, rescope, or order change is needed.

### banach-valued-integration-and-the-radon-nikodym-property

The FA-12 scaffold's strong measurability, Bochner integration, dominated
convergence, vector-measure variation, Radon–Nikodym property, and
reflexivity/RNP results use FA-1, FA-7, FA-9, FA-10 and MT-2, MT-7, MT-8,
MT-10, MT-12–16. All occur transitively through the declared backward edge
`schauder-bases-approximation-and-banach-space-pathologies (order 288.067)`.
In particular, the closure contains the measure, simple-function, convergence,
signed-measure, Radon–Nikodym, and Lp interfaces named by the item contracts.
Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### boolean-prime-ideal-theorem-in-the-basic-cohen-model

The binding replacement-cut scaffold and Repický's complete four-page proof
both factor the result through finite supports, forcing automorphisms, the
symmetry lemma, the basic Cohen model, and the earlier Boolean-ideal
vocabulary. Those interfaces, including formal finite-fragment consistency
transfer, are all in the closure of
`symmetric-extensions-and-basic-choice-failure-models (order 691)`.
Repický's proof does not use Halpern–Läuchli, so adding the later order-695 page
would be both unnecessary and forward. Remaining prerequisite uncertainty:
none.

VERDICT: no-drift

### brownian-motion-construction-and-continuity

The PT-18 finite-dimensional Gaussian construction, extension step,
Kolmogorov continuity estimate, passage to the Polish path space, Wiener
measure, Markov property, and time inversion are supplied by
`probability-spaces-random-variables-and-expectation (order 288.097)`,
`independence-borel-cantelli-and-zero-one-laws (order 288.099)`,
`infinite-product-measures-and-kolmogorov-extension (order 288.101)`,
`weak-convergence-tightness-and-representation (order 288.109)`,
`central-limit-theorems (order 288.113)`,
`markov-kernels-and-markov-chains (order 288.125)`,
`product-measures-and-the-fubini-tonelli-theorems (order 288.021)`,
`complete-metrizability-and-baire (order 277)`, and
`function-space-topologies (order 283)`. The same-run Markov input is earlier
in reading order, and no stochastic-calculus page is used. Remaining
prerequisite uncertainty: none.

VERDICT: no-drift

### complex-topological-k-theory-and-bott-periodicity

The AT K-theory scaffold uses the vector-bundle monoid, its locally defined
Grothendieck completion, stable homotopy input, clutching, and the explicit
Laurent-polynomial proof of Bott periodicity. Its declared suppliers are
`cup-cap-cross-products-and-cohomology-rings (order 366.013)`,
`topological-vector-bundles-and-grassmannian-classification (order 366.029)`,
and `spectra-and-stable-homotopy-groups (order 366.0241)`. Hatcher's complete
approximation argument additionally uses only Fourier/integration, uniform
continuity, compactness, and partitions of unity, all already in that
transitive closure; it does not require the later Stone–Weierstrass page.
Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### halpern-lauchli-and-bpi-without-choice

SET-21 deliberately combines the tree-partition argument with the strict
choice-separation comparison. Its two declared backward inputs are
`symmetric-collapse-and-ultrafilter-free-models (order 693)` and
`boolean-prime-ideal-theorem-in-the-basic-cohen-model (order 692.1)`.
Their closures supply the forcing/symmetric-model, Boolean algebra, BPI, and
failure-of-choice interfaces named in the scaffold. The finite word calculus,
dense-matrix thinning, and compactness-tree steps are local contracts rather
than evidence for another page edge. No closure path enters the deferred
catalogue. Remaining prerequisite uncertainty: none at page level; the
scaffold's mandated source-level proof audit remains authorship work.

VERDICT: no-drift

### leray-hirsch-thom-isomorphism-and-gysin-sequences

The Leray–Hirsch module argument, Thom class and isomorphism, Euler class,
Gysin sequence, and sphere/projective-bundle applications use
`cup-cap-cross-products-and-cohomology-rings (order 366.013)`,
`orientations-poincare-lefschetz-and-alexander-duality (order 366.015)`,
`the-serre-spectral-sequence-and-applications (order 366.027)`, and
`topological-vector-bundles-and-grassmannian-classification (order 366.029)`.
These are exactly the binding reconciliation table's suppliers and include
Mayer–Vietoris and diagram-lemma machinery transitively. The listed A items do
not use generalized cohomology, so the shorter earlier prose summary is not a
missing edge. Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### markov-kernels-and-markov-chains

The PT-15 kernel composition, Chapman–Kolmogorov, Ionescu–Tulcea,
strong-Markov, and martingale-problem contracts resolve through
`infinite-product-measures-and-kolmogorov-extension (order 288.101)`,
`conditional-expectation (order 288.115)`,
`conditional-distributions-and-regular-conditional-probability (order 288.117)`,
`stopping-times-and-optional-stopping (order 288.123)`, and
`product-measures-and-the-fubini-tonelli-theorems (order 288.021)`.
Their closures contain the measurable-space, finite-dimensional consistency,
martingale, and monotone-class interfaces used in the prose. Remaining
prerequisite uncertainty: none.

VERDICT: no-drift

### minimal-walks-oscillation-and-l-and-s-spaces

SET-29's C-sequences, traces, coherent finite-to-one functions, oscillation
coloring, Moore L-space, CH S-space, and PFA non-S-space branches use
`proper-forcing-countable-support-iterations-and-pfa (order 707)` and
`condensation-gch-and-diamond-in-l (order 677)`. The first closure supplies
the required PFA and topology interfaces; the second supplies diamond/CH and
tree combinatorics. Separation, product/subspace topology, cardinal functions,
compactness, and paracompactness were all found transitively. No deferred
catalogue path exists. Remaining prerequisite uncertainty: none at page level;
the scaffold's primary-text requirement for the Moore proof remains an
authorship gate, not a missing plan supplier.

VERDICT: no-drift

### prikry-forcing-and-gitiks-singular-cardinal-model

SET-26's Prikry-property and preservation spine, followed by Gitik's class
forcing and symmetric-submodel construction, is rooted at
`large-cardinals-measures-and-elementary-embeddings (order 699)` and
`symmetric-collapse-and-ultrafilter-free-models (order 693)`. Their transitive
closures contain forcing truth/formal transfer, normal measures, symmetric
systems, and axiom-verification interfaces. The Magidor/extender orientation
is local and the final consistency statement retains its stated strong-large-
cardinal antecedent. No deferred catalogue path exists. Remaining prerequisite
uncertainty: none at page level; the mandated full Gitik proof remains an
authorship/source gate.

VERDICT: no-drift

### proper-forcing-countable-support-iterations-and-pfa

SET-27's countable-model definition of properness, master conditions,
countable-support iteration, PFA consistency route, and topological
consequences resolve through
`finite-support-iterations-and-martins-axiom (order 685)` and
`large-cardinals-measures-and-elementary-embeddings (order 699)`.
Their closures include elementary submodels, forcing preservation,
supercompact embeddings, and the required topology pages. The two inputs are
strictly earlier and the closure avoids the deferred catalogue. Remaining
prerequisite uncertainty: none.

VERDICT: no-drift

### schauder-bases-approximation-and-banach-space-pathologies

FA-11's Schauder-coordinate machinery, basis constants, approximation
properties, the ba dual, James-space pathology, and unconditional-convergence
results require the FA-4 and FA-6–10 spine. Every one is in the transitive
closure of `reflexivity-and-eberlein-smulian (order 288.065)`, the declared
backward edge. The local Enflo construction is a scoped example rather than a
new prerequisite page. Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### semisimple-lie-algebras-cohomology-and-levi-theory

The DG semisimple scaffold's Killing-form criteria, Cartan/Weyl theory,
Chevalley–Eilenberg cohomology, Whitehead lemmas, Levi–Malcev theory, Ado, and
Lie II/III use `lie-subgroups-actions-and-homogeneous-spaces (order 493)`,
`lie-algebra-representations-enveloping-algebras-and-pbw (order 495)`,
`solvable-and-nilpotent-lie-algebras (order 497)`,
`chain-complexes-and-homology (order 365.037)`,
`long-exact-sequences-in-homology (order 365.043)`, and
`covering-spaces-and-lifting (order 293)`. The homological pages include
cochain/cohomology and connecting-map interfaces, while matrix trace,
cyclicity, triangularization, and finite-dimensional duality occur
transitively. Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### solovays-model-and-regularity-of-all-sets-of-reals

SET-24's Levy collapse, homogeneous/intermediate model analysis, ZF+DC
verification, regularity properties, failure of full choice, and formal
relative-consistency statement use
`large-cardinals-measures-and-elementary-embeddings (order 699)`,
`symmetric-collapse-and-ultrafilter-free-models (order 693)`, and
`borel-analytic-sets-perfect-sets-and-determinacy (order 673)`.
Their closures contain the inaccessible-cardinal, forcing/symmetry,
descriptive-set, Lebesgue-measure, and convergence interfaces named by the
contracts. The scaffold distinguishes the standard inner models and retains
the inaccessible hypothesis. No deferred catalogue path exists. Remaining
prerequisite uncertainty: none at page level; full source verification of the
regularity proof remains an authorship obligation.

VERDICT: no-drift

### solvable-and-nilpotent-lie-algebras

The derived/lower-central series, Engel and Lie theorems, radical, and
nilradical contracts resolve through
`lie-algebra-representations-enveloping-algebras-and-pbw (order 495)`,
`eigenvalues-eigenvectors-and-the-characteristic-polynomial (order 86)`, and
`linear-maps-rank-nullity-and-quotient-spaces (order 76)`. The closure also
contains the complex-field, splitting, triangularization, and tensor-product
linear algebra used in the prose. Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### suslin-trees-lines-algebras-and-independence

SET-17's Kurepa equivalences, ccc-square consequence, MA destruction, forcing
and specializing trees, and the diamond/L counterdirection use
`finite-support-iterations-and-martins-axiom (order 685)` and
`condensation-gch-and-diamond-in-l (order 677)`. Those closures contain the
SET-9 tree/diamond spine, forcing preservation and iteration, topology,
countability, and cardinal-function inputs. The scaffold explicitly makes the
history-tree normalization and order-completion lemmas local. No deferred
catalogue path exists. Remaining prerequisite uncertainty: none at page level.

VERDICT: no-drift

### symmetric-collapse-and-ultrafilter-free-models

SET-20's symmetric Levy-collapse analysis, Feferman–Levy model, Feferman
definability model, and Blass parameter-HOD construction use
`symmetric-extensions-and-basic-choice-failure-models (order 691)` and
`preservation-cohen-forcing-and-the-continuum (order 683)`.
Their closures provide symmetric systems, forcing preservation, Boolean/BPI
vocabulary, and formal consistency transfer. The prose's mandatory correction
to the finite-bit-flip explanation changes the local proof, not its page
suppliers. No deferred catalogue path exists. Remaining prerequisite
uncertainty: none at page level; the required complete Feferman and Blass
source readings remain authorship gates.

VERDICT: no-drift

### the-serre-spectral-sequence-and-applications

The Serre filtration, local-coefficient E2 identification, transgression,
edge maps, multiplicativity, convergence, and applications use
`singular-cohomology-and-coefficient-theorems (order 366.011)`,
`cup-cap-cross-products-and-cohomology-rings (order 366.013)`,
`fibrations-fiber-bundles-and-homotopy-exact-sequences (order 366.021)`,
`obstruction-theory-postnikov-towers-and-classifying-spaces (order 366.025)`,
`local-coefficients-twisted-homology-and-duality (order 366.0243)`,
`spectral-sequences (order 365.065)`, and
`double-complexes-exact-couples-and-convergence (order 365.067)`.
These closures supply cellular, exact-couple, convergence, fibration, and
twisted-coefficient machinery, with no later characteristic-class input.
Remaining prerequisite uncertainty: none.

VERDICT: no-drift

### topological-vector-bundles-and-grassmannian-classification

The AT vector-bundle scaffold's local triviality operations, pullbacks,
classifying maps, Grassmannians, universal bundles, and stabilization use
`fibrations-fiber-bundles-and-homotopy-exact-sequences (order 366.021)`,
`obstruction-theory-postnikov-towers-and-classifying-spaces (order 366.025)`,
and `partitions-of-unity-and-paracompactness (order 269)`.
Their closures contain compactness, homotopy/CW, quotient, and finite-
dimensional linear algebra interfaces. Thus the shorter early prose
"requires" line does not reveal a missing edge; the binding exact table and
canonical plan agree. Remaining prerequisite uncertainty: none.

VERDICT: no-drift

## Validation

`node tools/drift-review-check.mjs --run phase-2-next-18 --before-apply`
exits 0: 18 pages reviewed, decisions valid, with materialization and
buildability pending. `node tools/validate-plan.mjs research/plan-spec.json`
exits 0: the declared page order is acyclic and consistent, with no item-level
cycles, forward references, B-page dependencies, or unresolved IDs among
pages whose item lists exist. No canonical-plan edit was applied. The engine
owns subsequent materialization; no prerequisite decision is blocked.
