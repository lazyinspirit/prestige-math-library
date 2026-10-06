# Step 5a reader-3 — batch 3

Run: `frontier-40-geometry-braids-rep-27`. Scope: the two pages and 31 items assigned by the batch-3 manifest. This is an independent reader report, not a judge, audit stamp, or engine gate receipt.

## Outcome and page verdicts

| Page | Reader verdict |
| --- | --- |
| `mackeys-imprimitivity-theorem` (A) | Repaired. The spectral/multiplicity, cocycle and little-group proof route has no remaining defect identified by this review. The summary now describes the corollary's proved exhaustiveness direction precisely. |
| `mackeys-imprimitivity-theorem-examples` (B) | Repaired items; B-page prose was read and left unchanged. The finite witnesses, position/momentum domains and affine classification support its summary after the repairs below. No remaining page defect identified. |

Fifteen assigned draft item carriers and the assigned A-page prose were edited. The batch proof-contract file was updated, including false or stale boundary assertions in otherwise unchanged contracts. No withdrawal is proposed. No published carrier, other-batch carrier, B-page prose, plan specification, run-control file, or verification acceptance record was edited.

There are no uneditable findings and no mathematical blocker identified in this batch. The findings payload has an empty array. This does not certify the entire published prerequisite library.

## Opened assigned inventory

The manifest supplied ownership and ordering; authored files supplied the mathematics. All sections of each assigned item were read, including definitions, facts, proofs/verifications, remarks and provenance. Internal suppliers were reviewed before the higher-level reconstruction, main theorem, uniqueness theorem and little-group consumers. The examples were reviewed after their theorem suppliers. External supplier interfaces were also opened and the two especially relevant published construction proofs named below were read in full.

Page opened: `library/representation-theory/mackeys-imprimitivity-theorem.md` (A).

- `items/def-system-of-imprimitivity.md` — reviewed; no defect identified.
- `items/def-transformation-algebra-of-a-g-space.md` — reviewed; no defect identified.
- `items/lem-characters-of-l1-of-an-abelian-lch-group.md` — repaired; evidence below.
- `items/lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms.md` — reviewed; no defect identified.
- `items/lem-nondegenerate-czero-representations-have-regular-pvms.md` — repaired; evidence below.
- `items/lem-second-countable-lch-spaces-are-standard-borel.md` — reviewed; no defect identified.
- `items/lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups.md` — reviewed; no defect identified.
- `items/lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base.md` — reviewed; no defect identified.
- `items/lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra.md` — reviewed; no defect identified.
- `items/lem-borel-cross-sections-for-closed-subgroups.md` — repaired; evidence below.
- `items/lem-lca-fourier-transforms-form-a-dense-czero-algebra.md` — repaired; evidence below.
- `items/lem-pvm-multiplicity-model-over-a-standard-borel-space.md` — repaired; evidence below.
- `items/lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit.md` — reviewed; no defect identified.
- `items/lem-haar-lifts-and-borel-descent-on-a-homogeneous-space.md` — repaired; evidence below.
- `items/lem-spectral-measure-of-a-representation-of-an-abelian-lch-group.md` — repaired; evidence below.
- `items/def-transitive-system-of-imprimitivity.md` — reviewed; no defect identified.
- `items/lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic.md` — reviewed; no defect identified.
- `items/lem-haar-regularization-of-transitive-unitary-cocycles.md` — repaired; evidence below.
- `items/def-unitary-equivalence-of-systems-of-imprimitivity.md` — reviewed; no defect identified.
- `items/lem-induced-representations-carry-a-canonical-system-of-imprimitivity.md` — reviewed; no defect identified.
- `items/lem-spectral-measure-multiplicity-model-for-a-transitive-system.md` — repaired; evidence below.
- `items/lem-borel-cocycle-fields-for-imprimitivity-systems.md` — repaired; evidence below.
- `items/lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary.md` — reviewed; no defect identified.
- `items/lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining.md` — reviewed; no defect identified.
- `items/thm-mackey-imprimitivity-theorem.md` — reviewed; no defect identified.
- `items/thm-uniqueness-in-mackey-imprimitivity.md` — reviewed; no defect identified.
- `items/cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup.md` — repaired; evidence below.

Page opened: `library/representation-theory/mackeys-imprimitivity-theorem-examples.md` (B).

- `items/cex-a-nontransitive-system-is-not-classified-by-one-stabilizer.md` — repaired; evidence below.
- `items/ex-the-regular-position-momentum-imprimitivity-system.md` — repaired; evidence below.
- `items/ex-imprimitivity-for-a-finite-transitive-g-set.md` — repaired; evidence below.
- `items/ex-little-groups-for-the-real-ax-plus-b-group.md` — repaired; evidence below.

## Repairs and mathematical evidence

Locations below use final numbering; original numbering is given when needed to identify the defect. All affected proof contracts were refreshed after the final item text and canonical renumbering.

1. **`lem-characters-of-l1-of-an-abelian-lch-group`, Proof 3.4.** The inverse-topology estimate bounded the denominator away from zero but omitted making its error smaller than the same epsilon used for the numerator. Replaced the denominator condition by `|lambda_i(k)-lambda(k)| < min{epsilon, |lambda(k)|/2}`. Pointwise convergence at the fixed `k` supplies both bounds, and the displayed ratio then has the claimed uniform error. This is a short proof-step repair; the character classification and topology are preserved.

2. **`lem-nondegenerate-czero-representations-have-regular-pvms`, Facts F1/F3 and Proof 8.1.** Replaced single-bracket item references by actual wikilinks. Made regularity of the zero-at-infinity extension explicit: compact approximation inside `X` gives inner regularity of the finite extended scalar measures, and complement approximation on compact `X+` gives outer regularity. Added actual construction prerequisites to the proof tags and adopted the checker's canonical numbering; extension and nondegeneracy still precede restriction and uniqueness. The supplier is `lem-continuous-functional-calculus-produces-a-regular-pvm`, on a nonempty compact Hausdorff space and nonzero Hilbert space; the zero case remains separate.

3. **`lem-borel-cross-sections-for-closed-subgroups`, Proof 4.1 and trailing tags.** A section pushforward is *carried by* the Borel section image; its topological support need not be contained in that image when the image is not closed. Corrected that false support assertion to the measure-theoretic assertion actually proved by the displayed zero-complement formula. Removed doubled trailing tag groups/punctuation. The least-index nested-neighbourhood construction, Borel cocycle and Borel product isomorphism are unchanged.

4. **`lem-lca-fourier-transforms-form-a-dense-czero-algebra`, Proof 2.1.** The old argument attempted to infer continuity at the added character from a superlevel set asserted closed before continuity was established. The corrected argument uses the continuous evaluation `psi -> psi(0,f)` on the compact character space directly. Its positive superlevel sets are closed compact sets missing the augmentation character, so they are compact in the dual. This supplies vanishing at infinity without circularity or Fourier inversion.

5. **`lem-pvm-multiplicity-model-over-a-standard-borel-space`, Proof 1.2, 2.1, 3.1, 4.1, 5.1, 6.1.** Original steps 1.3 and 3.2 used `m`, `nu_0`, and `U'` before their construction. Reordered construction of the coded spectral PVM, multiplicity model, equivalent-measure unitary, base pullback and composite. Added the elementary resolvent proof of `sigma(S) subset [0,1]`: the PVM integral of `(z-t)^-1` inverts `zI-S` off that interval. Explicitly zero-extended the spectral PVM when evaluating it on subsets of `[0,1]`, and identified the conull `K`/`Y` direct integrals by restriction and zero extension. The prescribed-generator use of the published spectral-multiplicity theorem is justified by its fully read construction, Proof 1.2–1.9 and 2.1. To apply it, set `A=W*(S)` and prove its abelianness from WOT-closed commutation equations; an unnecessary earlier assertion identifying every original PVM projection with this algebra was removed. The statement, faithfulness and multiplicity conclusion are preserved.

6. **`lem-haar-lifts-and-borel-descent-on-a-homogeneous-space`, Facts F3, Proof 1.1 and 4.1.** Agreement on `C_c` invokes Radon-measure uniqueness, but the left-hand Borel product pushforward had only been shown finite on compact sets. Added the exact published regularity corollary for second-countable LCH spaces, whose countable-choice hypothesis follows from the stated AC. The proof now licenses applying RMK uniqueness to both measures. The concluding sentence also overstated the null-class result as identifying *all* Haar-null sets with quotient preimages. Corrected it to: a Borel base set is null iff its *full* quotient preimage is Haar null. An arbitrary nonsaturated Haar-null set need not be a quotient preimage.

7. **`lem-spectral-measure-of-a-representation-of-an-abelian-lch-group`, Facts F7, Proof 1.1, 4.1, 5.1, 6.1–6.2.** Original step 1.2 integrated against `P` before its construction. The PVM now exists before `R(n)` is defined, and the approximate-identity transform is named `widehat e_U`. Added a proof of the previously unsupported second-countability/standard-Borel assertion for the dual: separability of scalar `L^2(N)` follows from the direct-integral supplier; compact-support truncations and finite-measure `L^2 -> L^1` inclusions give `L^1` separability; countably many dense evaluations embed its dual unit ball into a countable product; the earlier character-space homeomorphism gives second countability of the dual. LCH then gives its standard-Borel structure. The zero Hilbert space is handled before the nonzero C-star-algebra argument. Strong continuity of `R` uses sequential dominated convergence on the metrizable `N`, and the evaluation pairing's joint continuity is explicitly verified for the subsequent product-measure Fubini use. The spectral existence, covariance, uniqueness and ergodicity claims are preserved.

8. **`lem-haar-regularization-of-transitive-unitary-cocycles`, Facts F5, Proof 3.1, Remarks.** The upgrade from an a.e.-in-`g` factorization to every fixed `g` needed two transport details. For a finite-Haar-measure set `C`, `q_*(1_C dt)` is finite and absolutely continuous with respect to the base measure; truncating its density and exhausting the sigma-finite base transfers local-measure convergence to the lift. Multiplication by the fixed variable-vector field `b(t)^-1` preserves strong local-measure convergence by finite-valued approximation and the uniform unitary norm bound. These arguments are now stated and the Radon–Nikodym dependency is explicit. Corrected the Remarks locator to the actual upgrade step 3.1. I checked the lift identity, Fubini selection, left-invariance argument for stabilizer constants, Borel homomorphism/continuity, descent, strict factorization and uniqueness in the local proof. Sunder's printed proof explicitly omits this regularization, so it was not treated as an authoritative proof of the missing details.

9. **`lem-spectral-measure-multiplicity-model-for-a-transitive-system`, Proof 3.1, 5.1, 6.1.** The old transport expression used `(c_g*)^-1` in a direction incompatible with its source and target. It is now `c_g* T_g`, where `c_g* eta(x)=eta(gx)` maps to the field `m(gx)` over `(g^-1)_*mu_0`. The multiplier calculation gives the required intertwiner, and Radon–Nikodym transport then permits multiplicity rigidity. Original step 1.2 announced constant multiplicity before ergodicity had proved it; uniqueness now follows the conull-level-set argument. Neither multiplicity rigidity nor ergodicity is assumed in place of its opened supplier.

10. **`lem-borel-cocycle-fields-for-imprimitivity-systems`, Statement, Facts F4, Proof 1.1–5.1.** The old joint-representative construction applied `W_g` to constant basis sections and asserted a probability normalization, although the statement fixed an arbitrary quasi-invariant representative. It also used decomposability before proving commutation. The statement now explicitly retains the nonzero sigma-finite Borel-measure domain required by its direct-integral model. A fixed Radon–Nikodym unitary transfers canonical translations from a rho-derived measure without assuming that the fixed representative is Radon or finite. Commutation/decomposability is established first. A strictly positive Borel `r in L^2(mu)` replaces the constant section; continuous maps `g -> W_g(r e_j)` are approximated from a countable dense family with summable squared errors. Tonelli gives a.e. column limits for *each fixed g*, division by `r` recovers the columns, and countably many Borel convergence/unitarity conditions define the exceptional set. The field is set to identity there. Continuity on finite-measure pieces and the pairwise a.e. cocycle law are then proved. Explicit dependencies provide separability, a countable orthonormal basis and Tonelli. No prescribed null coset is evaluated before strictification.

11. **`cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup`, Statement, Facts F4/F6, Proof 1.1–3.1.** Explicitly specified the topological semidirect product, continuous automorphism action and product topology; the abstract semidirect-product definition alone does not provide these hypotheses. Proved separability of an arbitrary irreducible representation by a countable dense group orbit of a nonzero cyclic vector. Proved joint continuity of the dual action on compact parameter sets. The continuous orbit bijection was insufficient by itself to justify Borel transport: every open subset of the second-countable LCH quotient is sigma-compact, its compact images are closed in the Hausdorff dual, and hence its image is Borel, proving the inverse measurable. For the `N` restriction, a countable dense subset gives one common conull set of base points; fixing a point there and using continuity gives the identity for *all* `n`, so normality yields `sigma|N = chi I`. The Borel section is explicitly supplied on the `K` quotient. These close prerequisites while preserving the full exhaustion assertion for irreducible representations.

12. **`cex-a-nontransitive-system-is-not-classified-by-one-stabilizer`, Counterexample setup and step 1.1.** Specified the discrete topology on `Z/2` and verified that the swap squares to identity and is unitary. Orbit maps from this discrete group are continuous, so the witness is indeed a strongly continuous unitary representation. The coordinate PVM, two invariant summands and orbit-cardinality obstruction are unchanged.

13. **`ex-the-regular-position-momentum-imprimitivity-system`, Example, Facts F5/F6, Verification 1.1, 1.4, 2.1.** The old inclusion of `n=0` used the undefined maximum of an empty coordinate set and positive-dimensional Fourier suppliers. Treated the singleton case separately with its zero metric and unit mass, and restricted those suppliers to `n>=1`. The full momentum operator is now defined precisely by the transported self-adjoint multiplier `F_2^-1 M_(2pi xi_j) F_2` on `{f: xi_j F_2 f in L^2}`. The full derivative/self-adjoint generators are `G_j=-iP_j` and `T_j=-P_j`; the notation `P_j=-i partial_j`, `G_j=-partial_j`, `T_j=i partial_j` is asserted on Schwartz functions, where the opened Fourier differentiation supplier licenses it. The original proof supplied no weak-derivative interpretation on general equivalence classes. The exact full domain, exponentials and sign convention are preserved without assigning pointwise derivatives to arbitrary `L^2` classes.

14. **`ex-imprimitivity-for-a-finite-transitive-g-set`, Example/Facts F1 and Verification 2.1.** Specified the discrete group topology. Equivalence of group representations alone does not identify PVMs. Added the explicit unitary `v -> F_v`, `F_v(g)=v(gx_0)`, with counting quotient norm, and checked both the left action and indicator projections. This proves equivalence of systems, retaining the fibre-dimension computation; `x_0 in X` makes the divisor `|X|` positive.

15. **`ex-little-groups-for-the-real-ax-plus-b-group`, Facts F3–F5, Verification 1.1–5.1.** The original F4 asserted irreducibility and infinite dimension instead of proving them; F5 asserted conjugation equivalence without its map, and the corollary citation incorrectly stated a `G/K` countability hypothesis. Replaced these with the exact `G` hypothesis and a full concrete proof. In quotient coordinates, `pi_lambda(b,a)f(k)=exp(i lambda b/k) f(k/a)` on `L^2(K,dk/|k|)`. The section cocycle verifies this model and identifies the translation spectral PVM. A commutant operator commutes with that PVM: commuting unitaries preserve it by spectral uniqueness, and real/imaginary self-adjoint parts are recovered from their norm-power-series exponentials. The diagonal commutant theorem makes the operator scalar multiplication; transitive ergodicity makes its symbol constant. Commuting orthogonal projections then prove irreducibility. Disjoint finite-measure intervals in `log|k|` prove infinite dimension. The explicit unitary `R_r f(k)=f(rk)` conjugates `pi_lambda` to `pi_(lambda/r)`. Disjoint nonzero spectral supports distinguish the positive-group signs and distinguish them from zero-orbit characters. Schur's lemma and logarithm/sign decomposition prove the quotient character list. All classification, equivalence and inequivalence claims remain.

16. **Assigned A-page summary, final little-group sentence.** Replaced “indexes the irreducible representations ...” by the precise proved statement that every irreducible representation of a topological semidirect product is an induction from irreducible stabilizer data. This aligns the summary with the corollary's actual direction; no item was withdrawn or weakened to avoid a proof repair.

17. **Batch proof contracts.** Refreshed complete step claims, exact supplier-section quotations, all actual fact uses and explicit internal-step inputs. Corrected boundary worksheets that denied divisions despite `lambda(k)`, vector norms, densities or cardinalities; denied the declared AC in the examples; described `R^n/{0}` as a singleton for positive `n`; mishandled empty/zero fibres; or omitted the two classification directions. Choice costs are linked to the actual citation/use records, rather than to a final sentence merely naming AC. Definition and statement interfaces are recorded as evidence, not as independent proof completion. Contracts were also refreshed for unchanged consumers quoting a repaired supplier statement.

## Authoritative source and prerequisite qualifications

The external text consulted was [V. S. Sunder, Notes on the Imprimitivity Theorem](https://www.imsc.res.in/~sunder/imp.pdf): Proposition 2.4 (printed p. 4), Remark 4.2 (p. 13), the full printed proof of Theorem 4.3 (pp. 14–17), and the discussion and statement of Theorem 5.1 (pp. 18–20). Theorem 4.3 gives the induced-system reconstruction in the same source-variable cocycle convention. Its explicit qualification on printed p. 16 leaves simultaneous everywhere-valid cocycle identities unjustified; the local Haar regularization proof was therefore checked independently. Theorem 5.1 states both directions of the regular-orbit little-group classification, while the authored corollary asserts exhaustiveness only. I do not claim that Sunder supplies the omitted measure-theoretic argument or a printed proof of Theorem 5.1.

The published proofs read in full were `thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras` (especially its prescribed-generator construction and two-inclusion algebra argument) and `lem-compactly-supported-covariant-generators-are-dense` (including its measurable-section completion and compact-fibre averaging estimate). Other published suppliers were checked at the definitions/statements and conventions actually consumed; their exact current quotations and assigned proof uses are in the batch contracts.

## Opened published supplier interfaces

All 131 distinct external direct suppliers below have `status: published` on the inspected disk state. They were consulted for the relevant Definition/Statement interfaces; this inventory does not claim a full independent audit of every supplier proof or its recursive dependency closure. Source-book URLs present only in their metadata were not all independently visited.

- `items/cor-locally-compact-hausdorff-spaces-are-cech-complete.md`.
- `items/cor-metrizable-cech-complete-iff-completely-metrizable.md`.
- `items/cor-second-countable-lch-locally-finite-borel-measures-are-regular.md`.
- `items/cor-urysohn-metrization.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-bochner-integrable-function.md`.
- `items/def-borel-functional-calculus-for-a-bounded-normal-operator.md`.
- `items/def-borel-sigma-algebra.md`.
- `items/def-character-and-maximal-ideal-space.md`.
- `items/def-compact-support-c-c-and-c-zero-on-an-lch-space.md`.
- `items/def-compactly-supported-convolution-on-a-group.md`.
- `items/def-compactness-variants.md`.
- `items/def-complete-metric-space.md`.
- `items/def-complex-haar-lp-spaces-and-compactly-supported-functions.md`.
- `items/def-continuous-map-top.md`.
- `items/def-convolution-on-cc-and-l1-of-a-group.md`.
- `items/def-coset.md`.
- `items/def-covariant-function-model-of-unitary-induction.md`.
- `items/def-direct-integral-of-a-measurable-hilbert-field.md`.
- `items/def-equivariant-map-of-group-actions.md`.
- `items/def-external-semidirect-product.md`.
- `items/def-gelfand-transform.md`.
- `items/def-group-action.md`.
- `items/def-hilbert-space.md`.
- `items/def-induced-r-linear-g-module-by-h-covariant-functions.md`.
- `items/def-infinitesimal-generator-of-a-unitary-group.md`.
- `items/def-involution-on-l1-of-a-group.md`.
- `items/def-left-and-right-regular-unitary-representations.md`.
- `items/def-left-haar-integral-and-left-haar-measure.md`.
- `items/def-locally-compact-space.md`.
- `items/def-measurable-and-decomposable-operator-fields.md`.
- `items/def-measurable-function-between-measurable-spaces.md`.
- `items/def-measurable-hilbert-field-from-a-countable-fundamental-family.md`.
- `items/def-measurable-space.md`.
- `items/def-metric-bounded-diameter.md`.
- `items/def-metric-convergence.md`.
- `items/def-modular-function-of-a-locally-compact-group.md`.
- `items/def-one-point-compactification.md`.
- `items/def-orthogonal-projection.md`.
- `items/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis.md`.
- `items/def-polish-space.md`.
- `items/def-pontryagin-dual-and-compact-open-topology.md`.
- `items/def-projection-valued-measure.md`.
- `items/def-quasi-invariant-measure-on-a-homogeneous-space.md`.
- `items/def-quotient-topology.md`.
- `items/def-radon-measure-on-an-lch-space.md`.
- `items/def-rho-function-for-a-closed-subgroup.md`.
- `items/def-schwartz-space-and-its-seminorms.md`.
- `items/def-second-countable-space.md`.
- `items/def-self-adjoint-positive-unitary-and-normal-operator.md`.
- `items/def-separable-space.md`.
- `items/def-standard-borel-space.md`.
- `items/def-strong-and-weak-operator-topologies.md`.
- `items/def-strongly-continuous-unitary-representation.md`.
- `items/def-strongly-measurable-banach-valued-function.md`.
- `items/def-topological-group.md`.
- `items/def-topological-space.md`.
- `items/def-von-neumann-algebra-and-commutant.md`.
- `items/lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure.md`.
- `items/lem-bochner-integral-norm-inequality.md`.
- `items/lem-closed-subgroup-quotient-averaging-and-compact-lifts.md`.
- `items/lem-compactly-supported-covariant-generators-are-dense.md`.
- `items/lem-compactly-supported-kernels-admit-commuting-radon-integrals.md`.
- `items/lem-complex-haar-l1-and-l2-are-complete-and-cc-dense.md`.
- `items/lem-continuity-criteria-for-unitary-representations.md`.
- `items/lem-continuous-characters-of-the-real-line-are-exponentials.md`.
- `items/lem-continuous-functional-calculus-produces-a-regular-pvm.md`.
- `items/lem-haar-change-of-variables-under-inversion.md`.
- `items/lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets.md`.
- `items/lem-haar-translations-are-strongly-continuous-on-lp-one-and-two.md`.
- `items/lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set.md`.
- `items/lem-measurable-sections-have-measurable-pointwise-inner-products.md`.
- `items/lem-metrics-on-rn.md`.
- `items/lem-orthogonal-projection-is-linear-self-adjoint-contractive.md`.
- `items/lem-radon-nikodym-cocycle-of-a-homogeneous-measure.md`.
- `items/lem-rat-embeds-dense.md`.
- `items/lem-real-ltwo-multipliers-and-unitary-transport.md`.
- `items/lem-right-translation-scales-left-haar-measure.md`.
- `items/lem-scalar-and-complex-measures-from-a-pvm.md`.
- `items/lem-schwartz-space-is-dense-in-l-two.md`.
- `items/lem-the-induced-action-is-unitary.md`.
- `items/lem-the-induced-inner-product-is-independent-of-coset-representatives.md`.
- `items/prop-polish-space-countability-conventions-agree.md`.
- `items/thm-banach-alaoglu.md`.
- `items/thm-bochner-dominated-convergence.md`.
- `items/thm-bochner-integrability-criterion.md`.
- `items/thm-bounded-borel-pvm-integral.md`.
- `items/thm-bounded-linear-maps-commute-with-bochner-integration.md`.
- `items/thm-bounded-normal-operator-abstract-spectral-theorem.md`.
- `items/thm-characters-on-a-unital-banach-algebra-are-continuous.md`.
- `items/thm-choice-implies-dependent-implies-countable-choice.md`.
- `items/thm-compactness-variants-hierarchy.md`.
- `items/thm-complex-stone-weierstrass-self-adjoint.md`.
- `items/thm-composition-with-borel-functions-preserves-measurability.md`.
- `items/thm-continuous-functional-calculus-for-bounded-self-adjoint-operators.md`.
- `items/thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication.md`.
- `items/thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces.md`.
- `items/thm-dominated-convergence.md`.
- `items/thm-dual-of-an-lca-group-is-locally-compact-abelian.md`.
- `items/thm-existence-of-a-left-haar-integral.md`.
- `items/thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h.md`.
- `items/thm-fourier-transform-maps-schwartz-space-continuously-to-itself.md`.
- `items/thm-fourier-translation-modulation-dilation-and-reflection-laws.md`.
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md`.
- `items/thm-hilbert-adjoint-properties.md`.
- `items/thm-induced-representation-is-independent-of-rho-function-and-measure-representative.md`.
- `items/thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets.md`.
- `items/thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity.md`.
- `items/thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra.md`.
- `items/thm-measurable-essentially-bounded-operator-fields-act-decomposably.md`.
- `items/thm-monotone-convergence-for-the-integral.md`.
- `items/thm-nonunital-commutative-gelfand-naimark.md`.
- `items/thm-one-point-compactification-properties.md`.
- `items/thm-parseval-equivalences-for-a-complete-orthonormal-family.md`.
- `items/thm-plancherel.md`.
- `items/thm-product-of-countable.md`.
- `items/thm-pvm-integral-is-a-star-homomorphism.md`.
- `items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md`.
- `items/thm-rationals-countable.md`.
- `items/thm-reals-cauchy-complete.md`.
- `items/thm-regular-representations-are-unitary-and-strongly-continuous.md`.
- `items/thm-rmk-uniqueness-among-radon-measures.md`.
- `items/thm-schurs-lemma-for-unitary-representations.md`.
- `items/thm-separable-hilbert-space-has-a-countable-orthonormal-basis.md`.
- `items/thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras.md`.
- `items/thm-standard-borel-spaces-admit-bimeasurable-real-codings.md`.
- `items/thm-support-and-uniqueness-of-the-spectral-measure.md`.
- `items/thm-the-modular-function-is-a-continuous-homomorphism.md`.
- `items/thm-tonelli-and-fubini-for-completed-product-measures.md`.
- `items/thm-unitary-induction-from-a-closed-subgroup.md`.
- `items/thm-weil-quotient-integration-formula-with-rho-function.md`.

## Validation, findings and handoff

For every edited item, reflow and precheck were run after its material repair. The initial mechanical check proposed canonical numbering in several files; actual construction prerequisites were made explicit first so normalization would not move a step ahead of the data it uses. The adopted canonical blocks were checked to preserve their mathematical prose and formulas apart from references/numbering. All fifteen final edited carriers pass precheck.

- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-3.proof-contracts.json --strict`: 31/31 contracts checked, zero errors and zero warnings.
- `node tools/rendercheck.mjs --quiet <all fifteen edited item paths> <both assigned page paths>`: 17 files passed real YAML/KaTeX rendering checks.
- The final `node tools/proof-layout.mjs` invocation batched all fifteen explicit edited item paths after the last item edit/reflow: 15 items, 112 steps, zero defects.
- No edited carrier retains a `verification.judge` record. No judge or independent acceptance stamp was added.

No confirmed or suspected uneditable mathematical finding remains from this review. There are no another-batch draft suppliers in the inspected direct interface inventory and no observed-source hash claim to make. The schema payload is `research/frontier-40-geometry-braids-rep-27-reader-findings-3.json` with batch `3` and an empty findings array.

Coverage limits: the review covered both assigned page bodies and all 31 authored item bodies. Published prerequisites were reviewed at their used interfaces, with full proof reading limited to the two construction suppliers named above; this is not a recursive published-library audit. Only the Sunder source sections listed above were independently consulted on the web. Initial large outputs truncated, so the relevant missing sections were retrieved in smaller chunks; no absence or proof completion was inferred from truncated output. No rendered batch-3 evidence bundle was located; the exact dispatch files and current authored items were the entry points. Existing engine stamps and author decisions were not treated as mathematical verdicts.

Handoff: ready for the Step 5b lead to inspect the item/contract/page diffs and this report. No withdrawal, unresolved mathematical obligation, or reader-held blocker is proposed. Engine transitions and gate closure remain with the build driver/lead.
