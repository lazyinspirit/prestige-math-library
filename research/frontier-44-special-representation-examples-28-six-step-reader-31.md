# reader-31 — independent mathematical review

Run: `frontier-44-special-representation-examples-28-six-step`; batch: `31`. Engine state read from its current state file: `3a-read`. No publishing, judgments or stamps performed.

## Opened inventory

Assigned pages:

- `library/complex-analysis/compact-kahler-hodge-foundations.md` (A). Full prose and lists opened.
- `library/complex-analysis/compact-kahler-hodge-foundations-examples.md` (B). Full prose and lists opened.

Assigned items (full current bodies opened, suppliers before consumers):

- `def-compact-kahler-manifold-and-hodge-polarization-conventions`.
- `lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`.
- `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`.
- `lem-de-rham-top-integral-is-fundamental-class-evaluation`.
- `lem-kahler-commutators-and-laplacian-type-preservation`.
- `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`.
- `ex-hodge-and-polarization-of-a-point`.

Prerequisite items: relevant current Definition/Statement and, where used, Facts or proof opened. This is targeted prerequisite verification, not a corpus audit.

- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`.
- `cor-hodge-star-is-an-isometry-and-squares-to-a-sign`.
- `cor-homotopic-maps-induce-the-same-map-on-singular-homology`.
- `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms`.
- `def-abutment-to-a-filtered-object`.
- `def-axiom-of-choice`.
- `def-bigraded-complex-differential-forms`.
- `def-cellular-homology`.
- `def-complex-manifolds-and-holomorphic-vector-bundles`.
- `def-de-rham-cohomology`.
- `def-de-rham-integration-cochain-map`.
- `def-fundamental-class-of-a-compact-oriented-manifold`.
- `def-hodge-star-on-an-oriented-inner-product-space`.
- `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold`.
- `def-kronecker-evaluation-pairing`.
- `def-local-orientation-sign-of-a-regular-preimage`.
- `def-oriented-cellular-chain-group`.
- `def-pullback-of-a-differential-form`.
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`.
- `def-riemannian-hodge-star`.
- `def-riemannian-metric-and-riemannian-manifold`.
- `def-second-order-laplace-type-operators-on-vector-bundles`.
- `def-sheaf-cohomology-derived-global-sections`.
- `def-singular-cochain-complex-with-coefficients`.
- `def-singular-cohomology-with-coefficients`.
- `def-singular-cup-product-on-cochains`.
- `def-singular-simplex-and-singular-chain-group-with-coefficients`.
- `def-smooth-differential-k-form`.
- `lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice`.
- `lem-formal-adjoints-of-differential-operators-exist-and-are-unique`.
- `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier`.
- `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`.
- `prop-cup-product-is-natural-unital-and-associative`.
- `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`.
- `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles`.
- `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum`.
- `thm-acyclic-resolution-theorem-for-right-derived-functors`.
- `thm-associativity-of-balanced-tensor-products`.
- `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
- `thm-cellular-homology-computes-singular-homology`.
- `thm-change-of-variables-for-oriented-manifold-diffeomorphisms`.
- `thm-choice-implies-dependent-implies-countable-choice`.
- `thm-d-dbar-decomposition-and-identities`.
- `thm-de-rham-theorem`.
- `thm-dolbeault-lemma-polydisc`.
- `thm-euclidean-inverse-function-theorem`.
- `thm-excision-for-singular-homology`.
- `thm-general-stokes-theorem`.
- `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`.
- `thm-holomorphic-inverse-function-theorem-several-variables`.
- `thm-long-exact-sequence-of-a-pair-in-singular-homology`.
- `thm-monotone-convergence-for-the-integral`.
- `thm-morse-sard-for-euclidean-maps`.
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`.
- `thm-smooth-function-module-sheaves-are-acyclic`.
- `thm-smooth-partitions-of-unity-exist-on-manifolds`.
- `thm-smooth-singular-chains-compute-singular-homology`.
- `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`.
- `thm-the-next-page-is-the-homology-of-the-current-page`.

## Repairs and mathematical evidence

- Definition (3): replaced the false rationality conclusion for the Weil operator with real linearity. Commuting with conjugation is real descent, not rational descent.
- Pointwise Lefschetz lemma F1: inserted conjugation in the Hermitian star identity. Step 4.1: retained the full coefficient `c_r=r!(n-k+2r)!/(n-k+r)!`, discarded terms killed by the string length, and gave the fixed-index recursive projection formula.
- Scalar comparison step 1.2: supplied both cycle/boundary and chain/cycle complements, proving the tensor splitting directly instead of silently assuming preservation of injections.
- Kähler commutator step 1.1: defined the metric coefficients precisely and included the inverse-metric factor in the quadratic normal-coordinate change. Step 4.1: corrected the star identities to exchange the two Laplacian summands.
- Harmonic Hodge theorem steps 2.1 and 3.2: proved that the Green operator preserves type, used the deleted global-sections complex, and supplied the Dolbeault energy identity needed for adjoint vanishing.
- Top integration lemma: specified the complexified comparison and the simplex normalization of the smooth-induced homology orientation; replaced the incorrect ball-pair excision with point restriction and finite-fibre excision; put inverse-branch weights on their actual target domains and justified absolute summability.
- Point example step 1.1: the representative of `[lambda]` has value `lambda`, not universally 1. Step 2.1 uses the comparison’s unit to locate the rational unit.

## Interface consumer inventory

Focused interface checks opened the current statements/definitions/examples and the relevant Weil-operator, polarization and top-integral clauses of these direct/indirect consumers. This is not a full audit of their unrelated proofs. All assigned consumers were read fully. The pointwise lemma’s metric/range clarifications and the top-integral normalization were checked against their direct consumers, including the full hard-Lefschetz theorem and the pertinent Hodge–Riemann proof steps. The other downstream interfaces are unchanged.

- `cex-specializing-v-to-one-forgets-graded-decomposition-information`.
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`.
- `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`.
- `def-graded-adjustment-polynomials-in-positive-characteristic`.
- `def-morphisms-and-polarizability-of-rational-hodge-structures`.
- `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`.
- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`.
- `ex-hodge-and-polarization-of-a-point`.
- `ex-primitive-one-forms-on-a-hermitian-two-plane`.
- `ex-projective-perverse-decomposition-for-projective-space-to-a-point`.
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`.
- `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two`.
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`.
- `lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`.
- `lem-kahler-commutators-and-laplacian-type-preservation`.
- `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`.
- `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures`.
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`.
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`.
- `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`.
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`.
- `lem-smooth-projective-analytification-has-rational-kahler-polarization`.
- `lem-smooth-projective-modification-preserves-open-cohomology-images`.
- `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`.
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`.
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`.
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`.
- `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`.
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`.
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`.
- `thm-graded-specht-classes-realize-standard-fock-vectors`.
- `thm-graded-specht-heads-classify-the-graded-simple-modules`.
- `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties`.
- `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz`.
- `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`.
- `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`.
- `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`.
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`.
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`.
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`.
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`.
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`.


### Additional details of the repairs

- In the opening definition’s orientation paragraph, the orthonormal complex frame now explicitly has `g(v_j,Jv_k)=0`. Its metric-normalization remark uses a pointwise type-(1,0) coframe `zeta_j`, rather than suggesting that an arbitrary orthonormal frame consists of exact holomorphic coordinate differentials.
- The Weil-operator defect is a false claim, not an acceptable background omission. For example, on `V_Q=Q e_1+Q e_2`, let `t=sqrt(2)`, `C e_1=t e_2`, `C e_2=-e_1/t`, and take the weight-one pieces spanned by `e_1-i t e_2` and its conjugate. This has the required conjugation symmetry and the indicated Weil operator, but `C e_1` is not rational. Real descent is exactly what commutation with conjugation proves.
- In the pointwise lemma, the exterior Hermitian metric is explicitly the determinant metric, with different degrees orthogonal; an arbitrary extension of the degree-one metric would not give the displayed adjoint identities. Exterior powers outside degrees 0..2n are zero. The factorial and primitive-star formulas are restricted to primitive degrees at most n, avoiding undefined negative factorials or powers on a zero primitive in a higher degree. The original coefficient error is already visible at n=2, u=1, r=s=1: `Lambda L 1=2`, not 1. The full recurrence in step 3.1 gives the repaired coefficient in step 4.1.
- The normal-coordinate repair uses the explicit convention `h_{a bar b}=g_C(partial_z_a,partial_bar_z_b)` and `Gamma^b_ac=2 partial_a h_{c bar b}(0)`. The transformed derivative is `partial_c h'_{a bar b}=partial_c h_{a bar b}-(1/2)Gamma^b_ac=0`. This spells out the inverse-metric factor that the original displayed expression did not supply explicitly. The star proof now exchanges `dd*` and `d*d` under star, rather than claiming each summand commutes separately.
- The scalar-comparison lemma’s F7 now derives complexification by real and imaginary parts on an arbitrary smooth manifold, instead of applying a compact-Kähler-only definitional paragraph to its larger domain.
- In the top-integral proof, the old claim that a ball-supported relative group identifies directly with the ball punctured at its centre was replaced by restriction to `H_m(M,M\{y};R)`. The identity simplex supplies its positive local generator through radial retraction and the pair boundary map; simplicial comparison proves that its alternating boundary is a generator. Finite-point excision then computes the regular-fibre multiplicity. This also eliminates the incorrect description of a real local homology group as infinite cyclic.
- Step 2.2 of the top-integral lemma now pushes each partition weight through its inverse branch. Absolute summability is proved with a smooth positive dominating top form, not presumed from finiteness of the signed integral. The Riemann–Lebesgue comparison is explicitly supplied before monotone convergence is used. Added published dependencies: `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`, `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum`, and `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`. Their relevant statements were opened; the last item’s full proof was read. `def-integral-of-an-oriented-chart-supported-top-form` was additionally opened to check its Riemann-integral convention.
- The Green-type preservation omission is now proved from the type decomposition, orthogonality and uniqueness of the Green solution. The Dolbeault computation uses the deleted resolution (without the initial holomorphic global sections) and the energy identity `0=2(||dbar v||^2+||dbar* v||^2)` on a harmonic v. The first omission and that energy implication were short proof omissions; the incorrect augmented-complex description was an actual erroneous cohomology calculation.
- All seven affected contracts were updated: corrected derivation text and inputs, current exact supplier excerpts, new top-integral citations, and the affected endpoint/empty/degenerate/choice entries. Inaccurate boundary evidence claiming the definition explicitly stated all degree bounds, that no empty top-integral case arose, and that every degenerate simplex contributed zero was corrected. No `verification.judge` record was present on these carriers; the cleanup left no such record. Existing independent template-review records were preserved. No manifests, plan specification, B-page prose or outside item was edited.

## Authoritative source checks

- [Deligne, *Théorie de Hodge II*](https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf), (2.1.4)–(2.1.5), (2.1.10)–(2.1.17), printed pp. 25–27: rational Hodge data carries a real Hodge structure after extension to R, and the Weil element is in the real group S(R). These clauses confirm real rather than rational descent, the orientation convention, and the Tate bidegree shift.
- [Schnell, Class 14](https://www.math.stonybrook.edu/~cschnell/mat545/class14.pdf), Lemma 14.7 and its complete proof, pp. 3–4: a Kähler metric has holomorphic coordinates with `omega=(i/2) sum dz_j wedge dbar_z_j+O(|z|^2)`. The proof cancels its symmetric linear metric terms by a quadratic holomorphic change. This was added to the commutator item’s references.
- [Schnell, Class 17](https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf), Proposition 17.3 and the complete two-plane/direct-sum proof, pp. 2–4: `W=epsilon(k) J star`. The local real-star supplier fixes the complex conjugation in the Hermitian pairing. The string coefficients were independently derived from the local recurrence, without assuming a representation-theory black box.
- [Schnell, Class 18](https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf), Corollaries 18.1–18.4 and Theorem 18.5 with their proofs, pp. 1–2: the Laplacian equality, type-preserving harmonic splitting and closed-pure-type description agree with the repaired local proof. The sheaf and spectral-sequence portions were checked against the opened local suppliers and the local finite-dimensional argument.
- The Demailly PDF request timed out. I do not claim to have read it; the relevant normal-coordinate and Hodge arguments were recovered from Schnell and the displayed local derivations above. No source uncertainty remains on those arguments.

## Outside-consumer observations

The current-run downstream item `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` initially contained two defects that I was not licensed to edit: Proof 2.1 said the rational primitive space was preserved by the Weil operator, and Proof 3.1 called the transported higher-degree structure the Tate twist `H^{2n-k}(k-n)`. The first needed preservation of the complexification; the second needed `H^{2n-k}(-(k-n))`, whose weight is k. Both are corrected in its current source by another writer before handoff; the corrected passages were reopened and checked. Its original observed bytes were not retained, so I make no historical raw-hash binding. These are downstream observations, not an assigned consumer’s dependency findings. There is no remaining uneditable defect from this review.

## Page verdicts

- `compact-kahler-hodge-foundations` (A): the title, conventions and prose summary agree with the current six-item foundation package after the repairs. The full Hodge decomposition, rational comparison, top integration, pointwise identities, Kähler commutators and sheaf/filtration conclusions have the hypotheses and local arguments described above. No page-prose edit was necessary. Reader verdict: no remaining defect found; this is not a judge or publication stamp.
- `compact-kahler-hodge-foundations-examples` (B): its single-point cohomology, weight-zero pairing, positivity and degree-zero Lefschetz summary agree with the corrected example. No B-page edit. Reader verdict: no remaining defect found.

## Validation and handoff

Every changed item received `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. All six proof-bearing carriers passed, and the definition reported zero applicable proofs and zero failures. Contract derivations were synchronized after reflow, and current citation excerpts were checked against their actual supplier sections. Explicitly scoped rendercheck passed for all seven items and both assigned pages. A help probe was interpreted by rendercheck as its default corpus check; it made no edits and supplies no mathematical coverage claim here. Only the explicit nine-file render result is used for this batch.

After the final item edit and formatter, the required single batched handoff check was:

```sh
node tools/proof-layout.mjs items/def-compact-kahler-manifold-and-hodge-polarization-conventions.md items/lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity.md items/lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds.md items/lem-de-rham-top-integral-is-fundamental-class-evaluation.md items/lem-kahler-commutators-and-laplacian-type-preservation.md items/thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms.md items/ex-hodge-and-polarization-of-a-point.md
```

Result: `proof-layout: 7 items, 29 steps, 0 defects` (exit 0). No later item edits were made.

Blockers: none for the assigned batch. Coverage limitation: external dependencies were opened to their required statements/definitions and selected complete proofs, not recursively audited in full; outside consumers received focused interface checks only. All assigned pages and items were read in full. The empty findings array reports the absence of remaining current uneditable findings, not approval of unrelated corpus mathematics.
