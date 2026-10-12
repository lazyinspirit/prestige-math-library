# Quantum groups, crystal bases, and highest-weight categorification

Library supplier scope (owner-authorized 2026-10-07): this Special Topics in Representation Theory scaffold may build on any published or draft content in the library. Record each supplier’s actual status and exact claim/proof; draft status alone is not grounds for duplicating a prerequisite. Unauthored planned inventories are design obligations rather than completed proofs.

Category reconciliation (2026-10-07): QG-1–QG-8 now form the Quantum Groups and Crystal Bases track within `special-topics-in-representation-theory`. Canonical plan categories change; IDs, orders, mathematical scope and source gates remain unchanged. Hopf Algebras & Hecke Algebras is a separate foundational category; its new obligations do not yet replace existing suppliers.

Prose scaffold, owner-authorised 2026-09-07 and reconciled against the live
library on 2026-09-08. This is future planning: it does not author library
items or publish mathematics. The page IDs are registered at canonical orders
767--782 with empty item arrays. Proposed item IDs remain design evidence, not
published suppliers; the open source gates in section 3 must close before a
normal frontier may treat this track as proof-ready.

## 0. Scope and seam contract

This track supplies the quantum infrastructure required by the symmetric-group
representation scaffold. Classical root data and integrable Kac--Moody modules
remain owned by `kac-moody-algebras-from-generalized-cartan-matrices` and
`integrable-highest-weight-kac-moody-modules`. Generic type-A Hecke algebras
remain owned by `principal-series-representations-of-gl-n-over-a-finite-field`.
The generic KLR presentation and highest-weight categorification are owned here;
the symmetric-group track owns the type-A cyclotomic Hecke--KLR isomorphism,
Specht modules, and decomposition-number consequences.

The standing coefficient convention is an ordinary symmetrizable generalized
Cartan datum with no imaginary simple roots. Set `A=Z[q,q^-1]` and work over
`Q(q)` before integral specialization. For cyclic affine type A, include the
`e=2` double-edge Cartan entry explicitly. Do not infer a quantum theorem from
its classical Kac--Moody analogue.

The dependency order is QG-1 through QG-8. Every A page has an examples
companion depending only on its A page. B pages are leaves and never supply a
proof. All claims about canonical/global bases record upper versus lower basis,
bar convention, and integral lattice.

## 1. Pages

| label | A page ID | role |
|---|---|---|
| QG-1 | `quantized-enveloping-algebras-and-quantum-serre-relations` | Drinfeld--Jimbo presentation, Hopf structure, triangular decomposition |
| QG-2 | `divided-powers-integral-forms-and-quantum-highest-weights` | Lusztig form and integrable highest-weight modules |
| QG-3 | `kashiwara-operators-and-crystal-lattices` | string decompositions and crystal bases |
| QG-4 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness` | tensor rule and connected highest-weight recognition |
| QG-5 | `balanced-triples-and-global-crystal-bases` | globalization and canonical/global-basis normalization |
| QG-6 | `quantum-affine-type-a-and-level-one-fock-space` | cyclic Cartan datum, partition Fock action, Misra--Miwa crystal |
| QG-7 | `klr-algebras-induction-and-quantum-serre-categorification` | generic KLR basis, projectives, induction/restriction, negative half |
| QG-8 | `cyclotomic-klr-algebras-and-highest-weight-categorification` | highest-weight quotient and global-basis classes |

## QG-1 — Quantized enveloping algebras and quantum Serre relations

**Requires:** `kac-moody-algebras-from-generalized-cartan-matrices`,
`tensor-products-of-modules`, and
`permutation-statistics-inversions-and-eulerian-numbers`, and
`harish-chandra-isomorphism-casimir-and-central-characters`. The published
one-parameter q-integers are reused; Hopf-algebra foundations and the
root-datum-specific q-integer normalization are included here because the
library has no citable A-page owner for them.

| proposed item | exact content and proof joint |
|---|---|
| `def-symmetrizable-cartan-datum-for-a-quantum-group` | Fix free weight and coweight lattices, simple roots/coroots, a symmetrizer `d_i`, and `q_i=q^{d_i}`. Distinguish root datum from the matrix alone. |
| `def-quantum-integers-factorials-and-divided-powers-at-q-i` | Define `[n]_i`, Gaussian coefficients, and formal divided powers over `Q(q)`; reconcile with the published one-parameter q-integer convention. |
| `lem-quantum-pascal-recurrence-and-gaussian-integrality` | Prove both q-Pascal recurrences and use induction to show the Gaussian quotient lies in `Z[q_i,q_i^-1]`; later integral forms may not assume this from notation. |
| `lem-q-binomial-expansion-for-q-commuting-elements` | If `yx=q_i^a xy`, prove the finite Gaussian expansion of `(x+y)^n` with the exact exponent convention used by the coproduct. This is the cancellation engine for the Serre check, not an appeal to the ordinary binomial theorem. |
| `def-bialgebra-counit-and-antipode` | Define bialgebra and Hopf algebra over a commutative ring, including tensor-product multiplication and both convolution-inverse equations. |
| `lem-an-antipode-is-unique` | Prove uniqueness as a convolution inverse; this licenses the definite article used for quantum groups. |
| `def-drinfeld-jimbo-quantized-enveloping-algebra` | Give every generator and relation for `U_q(g)`, including the full positive and negative quantum Serre sums. |
| `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions` | Verify the bar, Chevalley involution, and contravariant anti-involution on all relations rather than naming them formally. |
| `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals` | Expand the coproduct of each Serre sum with the q-binomial lemma, group by tensor bidegree, and cancel the Gaussian coefficients. Obtain the negative case from the checked Chevalley convention. This isolates the only nonlocal relation-preservation calculation. |
| `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra` | State one fixed coproduct convention for `E_i,F_i,K_h`; check relation preservation, counit, antipode and coassociativity on generators. |
| `def-positive-negative-and-toral-quantum-subalgebras` | Define `U_q^+`, `U_q^-`, and `U_q^0` with their root gradings. |
| `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum` | Over `C[[h]]` with `q=exp(h)`, define the root-graded word space, braided shuffle multiplication, braided coproduct, Cartan crossed product, and coefficientwise `h`-adic completion. For a rank-`r` symmetrizable matrix, prove that the symmetric matrix `DA` has a nonsingular `r`-by-`r` principal minor and relate its determinant to the corresponding principal minor of `A`; use it to choose the extended Cartan coordinates required by the classical limit. No infinite sum is multiplied outside the completion. |
| `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` | Expand a Serre word in the shuffle product and cancel every word coefficient with the earlier Gaussian identity; apply the same coefficient calculation to prove that the opposite Serre ideal lies in the radical of the shuffle--tensor word pairing. These are the two q-binomial proofs omitted behind the shuffle-algebra and pairing-radical citations, not assumptions of the quantum Serre relations. |
| `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` | Use the classical PBW filtration to prove that a two-sided ideal `J` of `U(l)` with `Delta(J)` contained in `J tensor U(l)+U(l) tensor J` is generated on both sides by the Lie ideal `J cap l`. Include the induction on filtration degree and the symmetric-algebra leading term. |
| `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` | Put the standard cobracket on the two Borels, use the extended Cartan realization and the invariant form to identify their graded restricted duals, and record finite root-degree multiplicities. This is the Deodhar--Gabber--Kac input used to show that the shuffle classical-limit kernel has zero primitive part. |
| `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` | Reproduce the Hopf co-Poisson classical-limit argument: the shuffle-image kernel modulo `h` is a Hopf ideal, the preceding primitive/coideal and Borel-duality lemmas force it to vanish, and the degreewise finite `C[[h]]` structure theorem eliminates torsion and compares ranks. Conclude injectivity and topological freeness in every root degree. |
| `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` | Transfer the finite root-degree rank statement from the formal deformation to `C(q)`, descend the explicit word pairing through both Serre ideals by the q-binomial cancellation, and prove degreewise nondegeneracy from the tensor-word pairing and equal ranks. Then descend to `Q(q)` by faithful scalar extension, proving the required finite-matrix reflection of independence inline. |
| `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double` | On `U_q^0 tensor U_q^+ tensor U_q^-`, define the crossed-double multiplication from the preceding Hopf pairing and toral action, prove associativity from the two pairing identities, compute the `E_iF_j` and toral cross-relations, and construct inverse maps with the presented Drinfeld--Jimbo algebra. This is the injectivity engine for full triangular decomposition. |
| `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` | Multiplication `U_q^- tensor U_q^0 tensor U_q^+ -> U_q(g)` is a vector-space isomorphism. Reorder for spanning with the checked cross-relations, and prove independence by the mutually inverse crossed-double maps; do not cite half-PBW alone as full triangularity. |
| `thm-quantized-sl-two-string-formulas` | Derive the exact divided-power commutation formula and the finite simple `U_{q_i}(sl_2)` modules used later. |

**B companion:** `quantized-enveloping-algebras-and-quantum-serre-relations-examples`.
It contains explicit `U_q(sl_2)`, type `A_2`, and the `e=2` cyclic Cartan
calculations plus a counterexample showing why the unsymmetrized parameter is
wrong.

## QG-2 — Divided powers, integral forms, and quantum highest weights

**Requires:** QG-1 and `integrable-highest-weight-kac-moody-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-kashiwara-skew-derivations-on-the-negative-quantum-half` | Define e_i prime and e_i double-prime from the exact commutator toral coefficients; prove the quotient-compatible twisted Leibniz rules, actual negative weights and local nilpotence. |
| `def-lusztig-divided-power-integral-form` | Define U_A over A=Z[q,q^-1] using ALL divided E_i^(r),F_i^(r), toral K_h and T_(i,c,t). Field generation is immediate; integral freeness is proved at QG-5, not assumed here. |
| `def-quantum-weight-module-and-integrability` | Require the chosen P-label grading and every K_h eigenvalue; local nilpotence of E_i and F_i. Recover labels even if the toral pairing is degenerate. |
| `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` | Normalize the module highest vector and use the constructed Cartan-projection descent, with the true bilinear scalar convention; do not leave existence at standard arguments. |
| `def-quantum-verma-module-and-simple-highest-weight-quotient` | Construct the universal quotient and its unique simple quotient using QG-1 triangular decomposition. |
| `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` | Fix the normalized Kashiwara half form by (1,1)=1 and adjunction with e_i prime; distinguish it from the Lusztig form by the full root-color factor supplied at QG-5. |
| `lem-divided-power-and-toral-quantum-binomial-reordering-identities` | Prove divided multiplication, full E/F reordering and toral index/coefficient integrality. These give integral triangular spanning only; independence/freeness follows from the QG-5 simultaneous globalization. |
| `lem-divided-power-half-has-integral-skew-string-coefficients` | Use ORDINARY powers of e_i prime in the finite projector and coefficient extraction; prove integral string coefficients without a global basis or nonunit Gaussian inversion. |
| `lem-finite-support-regularization-of-quantum-label-weight-modules` | Construct the finite-support auxiliary perfect datum with primitive formal coroots; prove the chosen P-graded support-category equivalence, dominance and q_i normalization. No old-torus algebra embedding or silent fundamental-weight assumption. |
| `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` | Check preservation on divided powers and toral binomials. |
| `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` | Use triangular Cartan projection and the fixed linear anti-involution to construct the Verma form; identify its radical with the maximal proper graded submodule and descend to the actual simple quotient. |
| `lem-quantum-highest-weight-serre-quotient-is-integrable` | Prove local nilpotence on the highest Serre quotient by full rank-one commutations and quantum Serre identities, with its precise label grading. |
| `lem-the-negative-half-is-separated-by-iterated-skew-derivations` | Use the root grading and QG-1 PBW independence to prove that a positive-degree element killed by every `e_i'` is zero. This is the nondegeneracy joint used by both crystals and KLR pairings. |
| `lem-unmodified-integral-torus-has-a-quantum-binomial-basis` | Prove full Gaussian Vandermonde/shift spanning, K± multiplication and extremal Laurent independence. Use finite-coordinate Smith coset representatives for Pvee/sum Z(d_i h_i), without assuming that subgroup is a direct summand. |
| `lem-local-q-one-deformation-proves-integrable-highest-weight-universality` | Build a finitely generated torsionfree weight lattice over the q=1 rational DVR, hence locally free; compare the simple classical fibre and dimensions to prove the Serre quotient/simple-module universal property. This does not claim Z[q±]-freeness. |
| `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` | Supply the rational-local half/toral rank and positive-quotient comparison before crystals; discharge root-datum regularity by the finite-support supplier. |
| `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` | Prove Serre descent, symmetry and nondegeneracy. The word lattice is A-valued; the divided lattice has explicit Gaussian-inverse localization, not false A-valued integrality: norm(F_i^(2))=1/(1+q_i^2). |
| `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` | After the positive quotient K_h=1, identify the characteristic-zero torus with k[H_i] and T_(i,c,t)=binom(H_i+c,t), with exact kernel. On chosen label-graded lattices verify all scalar operators; the unquotiented torus need not have K_h=1. |
| `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` | For dominant `Lambda`, quotient by `F_i^(<h_i,Lambda>+1)v`; prove integrability, simple uniqueness, and the universal property. |
| `prop-integrable-quantum-highest-weight-modules-are-semisimple` | Use highest vectors and the nondegenerate contravariant form in the bounded-above finite-weight-space category. |
| `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` | Prove both half algebra isomorphisms and the positive full quotient U(g_der), using the rational-local rank/relation proof. Extra regular-realization Cartan directions act through labels, not fabricated integral torus generators. No substitution in vanishing denominators. |

**B companion:** `divided-powers-integral-forms-and-quantum-highest-weights-examples`.

Early field/rational-local suppliers close QG-2 before crystals. The two full integral theorems retain their exact IDs and Z claims on QG-5 (batch8), after simultaneous globalization; no early QG-2–QG-4 dependency reaches them.

## QG-3 — Kashiwara operators and crystal lattices

**Requires:** QG-2.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-local-ring-at-q-zero` | Define `A_0` as rational functions regular at `q=0`, separately from `A`. |
| `thm-unique-kashiwara-i-string-decomposition` | Every vector in an integrable module has a unique finite sum `sum F_i^(n)u_n` with `E_i u_n=0`; prove via the QG-1 `sl_2` formulas. |
| `def-kashiwara-crystal-operators` | Define finite string operators with both endpoint projections; on the half only the infinite lower-string relation applies. Record actual weights. |
| `thm-the-i-string-decomposition-of-the-negative-half` | Prove the direct finite skew-string expansion with ordinary derivative projector powers and exact integral coefficient extraction. |
| `def-crystal-lattice-and-crystal-basis` | Give all lattice, weight, stability, mod-q basis, and partial-inverse axioms. |
| `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` | Give the full finite-string recurrence, coproduct/polarization compatibility, valuation bounds and integer leading residue proof; obtain f strict and e non-strict ties without a rational sum-of-squares shortcut. |
| `def-crystal-graph-epsilon-phi-and-weight` | For integrable modules use finite epsilon/phi string lengths; on B(infinity) phi=epsilon+weight is formal and can be negative, while actual lowering length is infinite. |
| `def-kashiwara-lattices-lambda-and-infinity` | Generate `L(Lambda)` and `L(infinity)` from the highest/unit vector by lowering crystal operators. |
| `lem-highest-weight-tensor-maps-and-their-adjunction` | Construct the cyclic TOP summand V(lambda+mu) and normalized adjoint retraction using early universality and polarization; the whole tensor product is not cyclic. |
| `thm-grand-loop-existence-of-highest-weight-crystal-bases` | Prove all mutually inductive clauses, integer residue/Gram transfer, large-weight color recurrence and tensor/projection steps. Form-dual first means FIELD dual; A0 self-duality follows only after Gram perfection. Correct the printed JKK normalization by the full recurrence. |
| `lem-crystal-lattice-polarizations-are-perfect-at-q-zero` | After the grand loop prove A0-valued Gram congruent to identity, perfection and local self-duality. Field nondegeneracy alone is insufficient; do not infer Laurent-A self-duality. |
| `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` | Prove compatibility modulo q on the actual lattice; zero projection can result from a sum lying in qL without each summand doing so. |
| `thm-crystal-basis-of-the-negative-half` | Construct `B(infinity)` with the same induction and record its projection to every `B(Lambda)`. |

**B companion:** `kashiwara-operators-and-crystal-lattices-examples`.

## QG-4 — Tensor-product crystals and highest-weight uniqueness

**Requires:** QG-3 and `tensor-products-of-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `lem-tensor-products-of-integrable-weight-modules-are-integrable` | Verify chosen label grading, q-binomial local nilpotence, finite weight spaces/upper cones and the free tensor lattice; operator stability is proved next. |
| `def-tensor-product-of-crystals` | Fix left-to-right convention and the equality case in the `epsilon/phi` rule. |
| `lem-i-string-components-of-a-crystal-lattice` | Prove finite tail extraction into the lattice, the top-weight residues and single surviving component; induct on the largest string index and include both endpoints. |
| `def-highest-weight-element-and-connected-highest-weight-crystal` | Separate a highest vertex from the assertion that every vertex is reached by lowering arrows. |
| `thm-crystal-basis-tensor-product-rule` | Expand arbitrary lattice vectors into ALL finite top-string blocks and prove tensor stability before transporting congruences; then use the complete rank-one strict/non-strict rule. |
| `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` | Derive the exact max formulas by correct raising signs. At equality both max entries are attained, but f selects the second factor and e the first; max-attainment does not characterize the strict f branch. |
| `thm-the-highest-weight-crystal-b-lambda-exists` | Use QG-3 and show connectedness of the crystal of `V(Lambda)`. |
| `prop-dual-crystal-and-reversal-conventions` | Reverse arrows/weights, swap finite epsilon/phi and prove reversed tensor order with correct inequalities/endpoints. Do not assert this finite dual construction for B(infinity). |
| `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` | Prove top-isotypic lattice/residue splitting and a possibly infinite LOCALLY WEIGHT-FINITE indexed direct sum of canonical B(lambda). Finite upper intervals justify peeling; declared AC covers simultaneous top lifts. No false finite-constituent claim in affine type. |
| `thm-highest-weight-components-in-a-tensor-product-crystal` | Characterize highest vertices by the signature rule and identify each generated component by the preceding integrable-module crystal theorem. |

**B companion:** `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples`.

## QG-5 — Balanced triples and global crystal bases

**Requires:** QG-2 through QG-4. No graded-bimodule input is used in the
balanced-triple construction; that HA dependency begins only at QG-7.

| proposed item | exact content and proof joint |
|---|---|
| `lem-lusztig-and-kashiwara-normalizations-match-by-root-color` | Prove the complete v=q^-1 dictionary, K_h inversion, opposite coproduct then tensor flip, and B_L=C_nu B_K with C_nu=product(1-q_i^2)^(-nu_i). Derive full form/coeval recurrence, not just rank one. |
| `def-the-bar-lattice-and-integral-lattice-of-a-based-module` | Distinguish M_A, A0 chart and its actual bar Ainf chart. E_Z is a Z-module, not M_A. General based data obey exactly Lusztig27.1.2(a)-(d); based maps send basis to basis-or0 with basis-subset kernels. |
| `def-balanced-triple-and-globalization-map` | Define the Z-linear globalization E_Z to the integral residue ZB; after tensoring Q recover the rational chart. Keep A, A0 and Ainf structures distinct. |
| `def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules` | M_A intersection L0 is a Z[q]-module, its bar chart is Z[q^-1], and E_Z is Z-linear. The residue subgroup is ZB inside QB with kernel qL_Z; rational extension, not a Z-isomorphism to all QB. |
| `def-root-height-completion-for-weightwise-quasi-r-intertwiners` | Use the positive-FIRST completion product U_q^+[beta] tensor U_q^-[-beta] and evaluate only with proved vectorwise finite action. This is a quasi-R operator, not a universal quasitriangular structure. |
| `def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves` | Define D(x,y)=d_nu^-1 B_K(iota x,y), d_nu=product(q_i-q_i^-1)^nu_i, so D(E_i,F_j)=delta_ij/(q_i-q_i^-1). Fix negative Delta/positive opposite-Delta adjunction and simple-root toral values; no arbitrary extra toral pairing. |
| `lem-balanced-triple-linear-algebra-over-the-projective-line` | Prove finite pole-bounded two-chart generation and quotient statements. A-freeness follows from finite FREE Z residue; torsionfree over nonPID A is not enough. |
| `lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis` | Prove integer localized form values and Z residue coefficients before globalization; norm1 gives B union minus B. Do not replace Z residues by rational ones. |
| `lem-negative-half-reversal-preserves-integral-and-crystal-lattices` | Prove integral/bar/chart preservation and half-form isometry; reversal preserves the SIGNED crystal/global set, sufficient for gluing and saturated right ideals. |
| `lem-string-ideal-decomposition-of-the-integral-lattices` | Use ordinary skew extraction to prove HALF saturation before gluing and finite Gaussian boundary generation. Module string lattices are images, not U-submodules; their saturation is a later conclusion. |
| `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree` | Transport the proved nondegenerate half form by nonzero degree/color scalars and prove homogeneous finite-degree duality and exact divided values. Algebra-dual tensors are not universally integral in affine type. |
| `lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite` | Prove field coevaluation is basis independent and finite on vectors under explicit upper/lower-cone bounds. Finite label-weight dimensions alone are not an action bound. |
| `lem-string-ideal-triples-are-balanced` | Prove descending string-ideal balance including negative-coroot boundary, lower-degree lifts, integer quotient injection and the actual infinity mirror without inverting nonunit Gaussians. |
| `thm-the-highest-weight-crystal-triple-is-balanced` | Run simultaneous integral induction: saturated half strings, signed reversal and right-ideal test weights glue lifts, finite Z-chart generation proves A-freeness, then module saturation/quotients. Freeness is a conclusion, not a global-basis premise. |
| `thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique` | Construct field positive-first coevaluation with the full local dictionary; prove all generator recursions and separation uniqueness for Delta(u)Theta=Theta barDelta(u). Integral action is the separate scoped lemma. |
| `def-lower-global-basis-of-a-quantum-highest-weight-module` | Define the lower lifts in E_Z and their Laurent lattice M_A=A tensor_Z E_Z; normalize the actual bar and crystal residue. |
| `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations` | Prove the same-orientation inverse/bar identity, all exact toral-indexed threefold factorizations and the finite-coefficient cocycle. Do not multiply uncontrolled infinite sums. |
| `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis` | Prove bar invariance, congruence mod q, integrality, basis, and uniqueness. |
| `def-upper-global-basis-by-the-contravariant-form` | Use inverse FIELD Gram matrices to define the restricted graded A-dual weightwise. Its dual infinity chart and form-adjoint bar are explicit; lower A-unimodularity/self-duality is not assumed. |
| `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module` | Prove surviving lower-global images and killed basis subsets; give the integral kernel sum U_A^-F_i^(s), s>lambda(h_i), from saturated signed right ideals, without presuming integral intersection commutes with sums. |
| `thm-integral-triangular-decomposition-for-the-lusztig-form` | After simultaneous globalization prove the FULL Z[q±] multiplication isomorphism/freeness using global half bases and the early unmodified torus basis. Root components are finite free; preserve arbitrary free coweight-lattice cosets. |
| `prop-global-bases-specialize-to-integral-weight-bases` | Prove the free global basis survives any unital A-to-S specialization, including nonflat/root-of-unity maps. q0 uses the Z[q] chart, not a map out of Laurent A; semisimplicity is a separate issue. |
| `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` | Use the full color/form dictionary, signed norm characterization and coefficient+1 Ti,n positive recursion, then based highest quotients. Preserve approved ADE comparison; it does not identify upper with lower. |
| `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` | After globalization prove each V_A(lambda) label component finite FREE over Z[q±], with full classical/Weyl-Kac character and characteristic-zero q=1 fibre via the early rational-local comparison. No regular-dominant restriction or unproved Z-freeness assumption. |
| `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` | Prove restricted graded perfectness WEIGHTWISE, not full algebraic Hom for infinite rank. Exact operators are weighted adjoints; unweighted adjunction holds modulo q. Upper bar/charts differ from the lower ordinary bar chart. |
| `lem-quasi-r-divided-power-integrality-on-based-lattices` | Prove general highest-FIRST/arbitrary-based-second and arbitrary-based-first/lowest-SECOND action, finite highest products, finite-type arbitrary based pairs, and exact based-map constructible classes. Finite-type coefficient tests need only a SIGNED integral lattice identification. Give the explicit affine A1 four-axiom based-module ACTION counterexample; Lambda0 is dominant, not regular. |
| `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` | Retain field tensor bars/cocycle whenever action is finite. Integral/based tensors use the proved highest-first, lowest-second, finite-highest-product, exact based-subquotient/direct-sum closure or finite-type arbitrary-pair cases; arbitrary affine based pairs fail. Construct corrected triangular global tensors and the ACTUAL bar infinity chart; raw tensors need not be bar fixed. |

**B companion:** `balanced-triples-and-global-crystal-bases-examples`.

Current frontier44 evidence: batch5/6/7/8 inventories25/17/14/31 (all native IDs retained); the genuine guarded87 pass registered68 reviewed rows and retained19 current records byte-identical. This is scaffold proof-readiness, not an authored-item independent audit; source/author review remains open. Full source and boundary evidence is in `frontier-44-special-representation-examples-28-owner-quantum-global-repair.md`; immutable native carriers/decisions and root transfer history are preserved.

## QG-6 — Quantum affine type A and level-one Fock space

**Requires:** QG-4, QG-5 and
`young-diagrams-tableaux-and-permutation-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-cyclic-affine-type-a-cartan-datum` | For `e>=2`, define residues `I=Z/eZ`, with `a_ij` including the `e=2` value `-2`; define fundamental weight `Lambda_0`. |
| `def-the-level-one-vector-representation-its-affinization-and-energy-function` | Give the cyclic vector crystal, its affinization by `z`, and the exact energy/ground-state sequence; include `A_1^(1)` separately. |
| `def-finite-q-wedge-space-and-normal-ordering-relations` | Quotient tensor powers of the affinized vector representation by the explicit `R-1` kernel and fix the energy ordering. |
| `thm-normally-ordered-q-wedges-form-a-basis` | Prove spanning by terminating straightening and independence from the triangular reduction mod q, for every finite wedge length. |
| `def-semi-infinite-q-wedge-fock-space-and-q-adic-topology` | Form the stabilized inductive limit at a ground state and state the completion in which the infinite coproduct sums converge. |
| `thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable` | Prove tail independence, convergence, commutator relations, and obtain the Serre relations from the integrability argument/Appendix-B criterion. |
| `lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas` | Write the beta-number bijection and translate the coproduct action term by term into addable/removable-node sums with the stated exponents. |
| `def-level-one-partition-fock-space-and-node-residues` | Basis by all partitions, residue `column-row mod e`, and addable/removable nodes. |
| `def-the-node-order-and-n-i-exponents-for-fock-space` | Fix the above/below convention and the precise signed counts used in q-powers. |
| `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` | Check `K`, `[E_i,F_j]`, and every quantum Serre case, including adjacent double edge for `e=2`, by sign-reversing/cancellation partitions. |
| `prop-the-empty-partition-generates-an-integrable-highest-weight-submodule` | Verify highest weight `Lambda_0`, integrability and the QG-2 universal map. |
| `def-good-and-cogood-nodes-by-residue-signature-reduction` | Define cancellation direction and distinguish normal/conormal nodes. |
| `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` | Derive the q=0 leading terms from the node formulas. |
| `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` | Realize the good-node component as the connected component of the integrable module's crystal basis, then apply QG-4's integrable-module decomposition theorem after proving its highest weight is `Lambda_0`. Do not infer the conclusion from abstract rank-one normality alone. |
| `def-regular-partition-label-convention-and-mullineux-crystal-involution` | State p/e-regular versus restricted convention and residue negation under sign. |
| `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` | Restrict the semi-infinite-wedge bar to the empty-partition highest-weight component, identify it with QG-5's lower global basis, and prove dominance-unitriangular expansion in the ambient partition basis. Do not call the reducible whole Fock space the basic representation. |

**B companion:** `quantum-affine-type-a-and-level-one-fock-space-examples`.

## QG-7 — KLR algebras and categorification of the negative half

**Requires:** QG-1, QG-2, QG-5,
`graded-bimodules-and-tensor-functors`, and
`grothendieck-groups-and-graded-cartan-pairings`.

| proposed item | exact content and proof joint |
|---|---|
| `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` | Give idempotent, dot and crossing generators and every quadratic/braid case via fixed homogeneous polynomials `Q_ij(u,v)=Q_ji(v,u)` with nonzero extremal coefficients; include the symmetric double-edge specialization used for `e=2`. |
| `def-klr-grading-and-diagrammatic-composition` | State degrees and reconcile algebraic multiplication with vertical stacking. |
| `thm-polynomial-representation-of-a-klr-algebra` | Under the stated nonvanishing/extremal-coefficient hypotheses on `Q_ij`, construct the faithful action by multiplication, divided differences and permutation operators; verify all defining cases. |
| `thm-klr-pbw-basis-theorem` | Prove spanning by relations and independence through the faithful polynomial representation. |
| `def-klr-induction-and-restriction-bimodules` | Define idempotent embeddings and the exact functors, with grading shifts. |
| `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives` | Ind is left adjoint to Res; Coind is its right adjoint and equals reversed-block Ind shifted by the root pairing (beta|gamma). Prove the longest-shuffle coefficient pairing. Retain ungraded finite freeness and the precise graded projective idempotent-shift decomposition; shuffle degrees need not be constant on sequence idempotents. This is the generic algebra, distinct from cyclotomic E/F biadjunction. |
| `def-divided-power-klr-idempotents-and-projectives` | Construct nil-Hecke idempotents explicitly; do not infer them from an unnamed summand. |
| `lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases` | Use finite degree-zero End/Fitting, central finite quotient and nilpotent idempotent lifting to prove graded covers and free shift-orbit Grothendieck bases for the locally finite infinite algebra. The initial Hom diagonal is dim End(S); the separate maximal-tail lemma proves absolute simplicity. |
| `lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head` | Prove the nil-Hecke matrix tail model, maximal idempotent support and one surviving Mackey quotient. Defining-corner generation forces a unique simple induction head once. Homogeneous hull and finite density give underlying and absolute simplicity; recursive divided strings give the integral triangular Hom basis. |
| `lem-klr-projective-duality-and-positive-divided-string-leading-terms` | Prove generic simple/projective dual normalization by triangular ordinary characters, word parity and evaluation; induction preserves projective #. FIRST-block Frobenius gives coefficient1 and integral divided-string ideal equality. Conditional signed global vectors then have positive signs by the exact general LEFT recursion. Declare inherited AC only for the quantum/global comparison clauses. |
| `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations` | Translate the categorical decompositions to the divided-power integral form. |
| `def-the-klr-cartan-pairing` | Distinguish the symmetric bilinear tensor form T(P,Q)=gdim(P^psi tensor_R Q) from the first-variable bar-sesquilinear Hom form h(P,Q)=T(P#,Q). Use the explicit color-symmetric polynomial denominator, finite graded projective freeness over that polynomial algebra and the actual degree/shift convention. |
| `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form` | Check generator adjunction and normalization against the explicit QG-2 skew-derivation recursion, then use uniqueness. |
| `thm-klr-categorification-of-the-negative-quantum-half` | Prove integral surjectivity using the local maximal-tail/simple-head lemma and a selected divided-word Hom matrix triangular with unit diagonal; prove absolute simplicity over arbitrary fields. Form preservation and nondegeneracy give injectivity. All divided words span, but only a selected triangular family is a basis; PBW algebra ranks or flat-family assertions do not give projective ranks. |
| `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` | Retain the full normalized symmetric datum, characteristic-zero and loopless quiver-geometric scope with arbitrary arrow multiplicities: Q_ij=(-1)^h_ij (u-v)^(h_ij+h_ji). Prove the actual geometric Ext realization and semisimple flag pushforward prerequisites, then the local graded Yoneda positive-End/norm argument and positive FIRST-block bridge via the exact existing balanced/norm/LEFT-string interfaces. Arbitrary parameter gauges need separate proofs; a universal u+v replacement or the finite-ADE comparison theorem is insufficient. The geometric foundation remains owner-held until a complete local argument is supplied. |

**B companion:** `klr-algebras-induction-and-quantum-serre-categorification-examples`.


Current frontier44 owner repair preserves all18 native IDs and adds two necessary local suppliers (15A+5B=20). The algebraic proof routes and root corrections are reviewed; original18 native readiness records remain archived and no new readiness pass or authored-item audit is claimed. The geometric global-basis branch stays held. Exact findings and source/proof routes are recorded in `frontier-44-special-representation-examples-28-owner-klr-review.md` and the current interface proposal.

## QG-8 — Cyclotomic KLR algebras and highest-weight categorification

**Requires:** QG-5, QG-7, and
`grothendieck-groups-and-graded-cartan-pairings`. HA-19 already reaches the
published finite-dimensional-algebra projective-cover and Krull--Schmidt
suppliers, so a second direct page edge to
`modular-representations-and-projective-covers` is unnecessary.

| proposed item | exact content and proof joint |
|---|---|
| `def-cyclotomic-klr-quotient-at-a-dominant-weight` | Give the idempotentwise polynomial cyclotomic relation and rank-zero algebra. |
| `def-cyclotomic-klr-induction-and-restriction-functors` | Descend the generic functors and state exact left/right adjunction shifts. |
| `def-cyclotomic-klr-diagram-duality-and-graded-module-duals` | Descend the horizontal-reflection anti-involution, define graded duals, and fix the self-dual grading-shift normalization used to label simples and projectives. |
| `thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric` | In the field-valued symmetrizable regime, construct the homogeneous closing-diagram trace, prove its Frobenius and cyclic properties, and deduce that graded duality preserves projectives up to the declared weight shift. Keep this separate from the global-basis theorem's stronger symmetric-Cartan and characteristic-zero hypotheses. |
| `thm-cyclotomic-klr-induction-is-projective-on-the-right` | Prove the principal-idempotent bimodule is projective using the explicit polynomial filtration. |
| `thm-cyclotomic-klr-sl-two-categorical-commutator` | Give the two weight-sign cases and exact graded identity summands. |
| `thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero` | Verify Serre, adjunction, local nilpotence, and highest-vector relations. |
| `lem-the-vacuum-projective-is-a-highest-weight-generator` | Identify the rank-zero projective and prove every projective class is generated by induction summands. |
| `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module` | Construct the QG-2 universal map; prove injectivity by the Cartan/Shapovalov pairing and surjectivity by the vacuum generator. |
| `thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module` | Use the perfect projective/simple pairing with exact field and finite-dimensional hypotheses. |
| `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda` | Prove socle/head crystal operators and identify the connected graph via QG-4 uniqueness. |
| `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient` | For the generic-to-cyclotomic quotient functor, first identify its `K_0` map with `pi_Lambda`. QG-5 then makes the class of a normalized generic basis projective map to one lower-global-basis class or zero; use HA-19's shift-orbit basis and nonnegative Krull--Schmidt multiplicities to prove that the extension-of-scalars object is correspondingly one normalized indecomposable projective or zero. This conditional algebraic step is valid only after QG-7's generic global-basis theorem is genuinely supplied. |
| `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis` | In symmetric Cartan type over characteristic zero, with the same quiver-geometric parameter regime as QG-7's basis theorem, combine the based-quotient lemma with QG-5's projection theorem. Any extension to arbitrary KLR parameters requires its own proved invariance theorem. |
| `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis` | Deduce from perfect pairing; state the grading normalization uniquely. |

**B companion:** `cyclotomic-klr-algebras-and-highest-weight-categorification-examples`.

## 2. B-companion item inventory

Each item below is computational or diagnostic. It depends on its companion A
page and no B page supplies a later proof.

### QG-1 examples

- `ex-quantized-sl-two-relations-coproduct-and-antipode`
- `ex-quantum-serre-calculation-in-type-a-two`
- `ex-the-double-edge-quantum-serre-relation-for-affine-a-one`
- `cex-unsymmetrized-q-parameters-break-the-cartan-normalization`

### QG-2 examples

- `ex-divided-powers-and-lusztig-form-in-quantized-sl-two`
- `ex-quantum-verma-and-simple-modules-for-sl-two`
- `ex-specializing-a-quantum-highest-weight-lattice-at-q-one`
- `cex-direct-q-one-substitution-in-quantum-denominators`

### QG-3 examples

- `ex-kashiwara-strings-in-the-three-dimensional-sl-two-module`
- `ex-crystal-graph-of-b-two-lambda-one`
- `ex-projection-from-b-infinity-to-a-highest-weight-crystal`
- `cex-an-a-zero-lattice-without-a-crystal-basis`

### QG-4 examples

- `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two`
- `ex-highest-components-in-a-small-type-a-two-tensor-crystal`
- `ex-dual-crystal-reverses-arrows-and-weights`
- `cex-changing-the-tensor-equality-convention-changes-the-crystal`

### QG-5 examples

- `ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module`
- `ex-lower-and-upper-global-bases-in-a-small-highest-weight-module`
- `ex-canonical-global-basis-normalization-in-symmetric-type`
- `cex-bar-invariance-and-mod-q-congruence-without-balancedness`

### QG-6 examples

- `ex-level-one-fock-node-actions-for-partitions-up-to-three`
- `ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions`
- `ex-good-node-crystal-component-for-equals-three`
- `ex-unitriangular-global-basis-elements-in-small-rank`
- `cex-the-whole-partition-fock-space-is-not-the-basic-representation`

### QG-7 examples

- `ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i`
- `ex-the-two-vertex-klr-polynomial-representation`
- `ex-the-double-edge-klr-braid-correction`
- `ex-a-nil-hecke-divided-power-projective`
- `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route`

### QG-8 examples

- `ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two`
- `ex-the-categorical-sl-two-commutator-in-a-small-weight`
- `ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block`
- `ex-self-dual-shift-normalization-for-a-cyclotomic-projective`
- `cex-k-zero-categorification-alone-does-not-identify-a-global-basis`

## 3. Source and proof-control ledger

Primary proof routes currently read by the supervising agent:

| source | verified body | ranges used |
|---|---|---|
| Kashiwara, *On Crystal Bases of the Q-Analogue of Universal Enveloping Algebras*, [complete52-page PDF](https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf) | Actual complete body SHA-256 `39b89708ecbff58c7262cb5aede2857aca82b24303ed32788b3263fdd6be63a5`; current owner read full relevant proofs, with exact render/OCR evidence, not a blanket authored-proof audit | §§1.4–2.6 fixed coproduct, polarization and indexed crystal uniqueness; §§3–4 grand loop; §§5–7 signed residue, finite Z charts, string saturation, simultaneous integral globalization and actual based quotient |
| Brundan, *Dual Canonical Bases and Kazhdan--Lusztig Polynomials*, [arXiv:math/0509700v2](https://arxiv.org/abs/math/0509700) | Historical planning body receipt: complete 29-page article; local SHA-256 `803ba980109ed6a0b8f58335c58bb583cdb2e202861eb59aa502470f27b83cae` | Finite type-A tensor/exterior normalization context only. General symmetrizable integral action uses the complete local ordered/constructible proof and Bao–Wang; arbitrary affine based pairs are explicitly excluded by the action counterexample. |
| Lacabanne, *Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups*, [arXiv:1807.00770v2](https://arxiv.org/abs/1807.00770) | Historical planning body receipt: complete 42-page article; inspected PDF SHA-256 `42cca3b7ba2382d103303cc4f1f8534380eec69f67b499691de7b1ee5025ae1a` | Finite-type double calculation is historical context. The current field route proves the full Lusztig parameter/torus/form dictionary and all homogeneous recursions, inverse and toral-indexed cocycle locally; no unclosed imported double/pairing prerequisite remains. |
| Lusztig, *Introduction to Quantum Groups*, [complete author-hosted scan](https://math.mit.edu/~gyuri/papers/quant.gr.pdf) | Actual355-page body,16994932 bytes, SHA-256 `b0dc6abfffe51656848b44c692c39add1d8191f20ec78c6d5eb36570abf0fa1b`; full relevant arguments actually read and exact symbols visually pinned | Printed3–7/PDF12–16 form/bar;19–21/PDF28–30 presentation/coproduct;34–39/PDF43–48 field quasi-R;118–124/PDF127–133 signed/positive canonical normalization;192–195/PDF201–204 ordered action/finite-type coefficients;214–223/PDF223–232 exact four based axioms and finite-type tensor construction. Chapters23/31 dot-U bases are context, not unmodified integral freeness suppliers |
| Bao–Wang, *Canonical Bases in Tensor Products Revisited*, [complete arXiv1403.0039v2 PDF](https://arxiv.org/pdf/1403.0039) | Actual7-page full body,150881 bytes, SHA-256 `b98a5272c73638bd6155ef04dc484cd8abcd479266276883e38e8c27f759a71b`; complete article actually read by owner/root | §2.1 exact based conditions; Lemmas2.2–2.3/Propositions2.4,2.6 ordered integral action; Theorems2.7,2.9 triangular tensors/finite highest products. Remark2.10 is not integral splitting; p5 association assumes the relevant integral actions; Remark2.14 confirms the affine algebra-coefficient boundary |
| Enriquez, *PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras*, [J. Lie Theory 13 (2003), official full text](https://ftp.gwdg.de/pub/misc/EMIS/journals/JLT/vol.13_no.1/11.html) | complete 44-page article; inspected PDF SHA-256 `00731481131cc7313f5a05b5088678b5769f6e8bc3baa1957d1a046003280f9e` | §§1.1 and 2.1 plus Appendix A for arbitrary finite-rank symmetrizable formal-shuffle PBW and degreewise freeness; §2.2 and §2.4 for generic nondegenerate opposite-half pairing and scalar transfer; the scaffold explicitly authors the paper's cited q-binomial Serre/radical steps, classical Borel-duality input, and generic crossed-double transport |
| Jeong--Kang--Kashiwara, *Crystal Bases for Quantum Generalized Kac--Moody Algebras*, [arXiv:math/0305390](https://arxiv.org/abs/math/0305390) | complete 60-page article; local SHA-256 `f873e27305536ded497ec03bf1dec3770354f56e8e00e9b7aafe384cf140b7f6` | §§1–4 for presentation, integrability, strings and crystals; §§7–10 for the 15-part grand loop, balanced triples and global bases |
| Kang--Kashiwara, *Categorification of Highest Weight Modules via KLR Algebras*, [arXiv:1102.4677v4](https://arxiv.org/abs/1102.4677) | complete 42-page final-version article; SHA-256 `9d8f183a8bb552f51477d776683071f61e901a757667cf7e72249817a42a0091` | §§2–4 definitions/projectivity/exact sequences, §5 categorical `sl_2`, §6 highest-weight categorification |
| Kashiwara--Miwa--Petersen--Yung, *Perfect Crystals and q-deformed Fock Spaces*, [arXiv:q-alg/9603025](https://arxiv.org/abs/q-alg/9603025) | complete 74-PDF-page author article; SHA-256 `99bb8974806e51befd59b396675cf8eff16ea647696baeb4e345127037e6ee6a` | §§3.1–3.3 perfect crystals, energy, wedge relations and normal-basis proof; §§4.1–4.3 ground state, semi-infinite limit, action and integrability; §5.2 type `A_n^(1)` including `n=1`; Appendix B Serre deduction |
| Leclerc--Thibon, *Canonical Bases of q-Deformed Fock Spaces*, [arXiv:q-alg/9602025](https://arxiv.org/abs/q-alg/9602025) | complete author article; local cache `leclerc-thibon-fock-canonical.pdf` | formulas (3)--(4) for addable/removable-node action, the beta-number wedge dictionary following them, Theorems 3.2--3.3 for the bar, and Theorem 4.1 for the ambient IC bases and the basic-representation lower global basis |
| Rouquier, *2-Kac--Moody Algebras*, [arXiv:0812.5023](https://arxiv.org/abs/0812.5023) | complete 66-page article; SHA-256 `645032786278b9fb97a2d56ec6fcfc20eddca67c7eb21643d6169bb18fed7f9d` | §3.2.1 arbitrary `Q_ij`, Theorem 3.7 and §3.2.2 faithful polynomial realization/basis, §§3.2.3 and 4.1 symmetrizable Cartan grading/decategorification, §5 integrable 2-representations |
| Varagnolo--Vasserot, *Canonical Bases and Khovanov--Lauda Algebras*, [arXiv:0901.3992](https://arxiv.org/abs/0901.3992) | complete 30-page article; SHA-256 `2062768e9a3bfb77e978e3892101adcca5c247ef604f865829e65c7b3e4efe78` | §§1--3 geometric realization and PBW theorem; §4, especially Theorem 4.5, identifies indecomposable projectives with the canonical basis in the symmetric simply-laced case |
| Webster, *Knot Invariants and Higher Representation Theory I*, [arXiv:1001.2020v9](https://arxiv.org/abs/1001.2020) | complete 62-page article; SHA-256 `5b4172ac78dfe77327fd18dada41b039f5c0e6308fc036b1de24aceab67b1a91` | §1.3, Theorem 1.8 and Remark 1.9 for cyclotomic biadjunction, K0 categorification, the closing-diagram Frobenius trace and its symmetric normalization in symmetrizable type |

Kashiwara's Theorem3 gives the possibly infinite locally weight-finite indexed QG-4 decomposition, with finite upper intervals and top-isotypic lattice/residue splitting. It does not recognize arbitrary abstract graphs from rank-one normality. The current simultaneous Kashiwara91 §§6–7 route proves Z residues, signed reversal, saturated half string ideals, gluing and finite Z-chart generation; global A-freeness is its conclusion. The two exact full integral IDs are consequently on QG-5, not early QG-2. The earlier rational-local q=1 DVR comparison proves field/classical universality independently. The positive toral and full specialization quotients impose K_h=1 and are respectively k[H_i] and U(g_der); the unquotiented specialization and extra Cartan directions are not confused with it.

The fixed QG-5 dictionary is v=q^-1, K_h inversion, the opposite source coproduct then tensor flip, Theta in U^+ tensor U^-, B_L=C_nu B_K and D=d_nu^-1 B_K, with the full color factors. Field coevaluation/uniqueness/inverse/cocycle are proved locally from the full primary arguments. The printed JKK large-weight factor is corrected by the full degree/color recurrence; this is an attributed source discrepancy, not an independent audit claim. The Kashiwara divided-half form is Gaussian-localized, not falsely A-valued. Restricted graded upper perfectness is weightwise; its field inverse Gram, dual infinity chart, adjoint bar and weighted exact operators are explicit. A0 perfection does not imply lower A-self-duality.

Integral Theta action holds in general symmetrizable highest-FIRST/arbitrary-based-second and arbitrary-based-first/lowest-SECOND cases under finite action, all finite highest products, and exact based direct sums/subquotients with bar-compatible basis-to-basis-or0 maps and basis-subset kernels. Finite-type arbitrary based pairs follow from the complete coefficient argument, whose signed extremal A-lattice identification does not claim a strict based isomorphism. The explicit affine A1 four-axiom based-module example disproves automatic arbitrary-pair ACTION integrality, not merely universal algebra coefficients: dominant Lambda0 is not regular dominant. Corrected triangular tensor global lifts use the actual tensor-bar infinity chart; raw basis tensors are generally not bar fixed. Field bars/association remain valid whenever their action is finite. Semi-infinite limits stay QG-6/KL-6-local; no universal R-matrix is imported.

KMPY supplies the normal-wedge basis, semi-infinite limit, integrability and the
`A_1^(1)` case. Leclerc--Thibon fixes the beta-number/partition dictionary and
the exact node exponents. The QG-6 scaffold deliberately retains the termwise
derivation between them, so the displayed node action is proved rather than
copied. Rouquier's arbitrary-`Q_ij` polynomial realization supplies the
multiple-edge `e=2` basis route that the simply-laced Khovanov--Lauda and
Varagnolo--Vasserot articles do not. The all-symmetrizable K0 theorem and the
symmetric-type global-basis identification remain separate claims.
Varagnolo--Vasserot's Theorem 4.5 is the QG-7 negative-half global-basis bridge
only in its characteristic-zero, quiver-geometric symmetric regime; the
scaffold does not silently extend that theorem to arbitrary `Q_ij`.

### Open full-proof source gates

The historical source-only planning discussion did not close the QG-1 proof
obligations; those remain subject to ordinary author review. JKK displays the Hopf formulas and triangular decomposition in
(1.6)--(1.7) but refers them to earlier works; Kashiwara likewise cites
Lusztig for (1.1.21). Enriquez now gives a complete general-symmetrizable
formal-shuffle route for half-PBW and the generic opposite-half pairing. The
seven QG-1 joints above explicitly supply the steps that Enriquez abbreviates
or cites: both q-binomial Serre/radical cancellations, the classical Borel
duality input, degreewise adic torsion/rank control, generic scalar reflection,
and the crossed-double passage from half-PBW to full triangular decomposition.
This repairs the prior missing route, but the authoring gate remains until that
chain and the corrected symmetrizable RL-12 Serre supplier route are checked in
the built pages. Current QG-2–QG-5 scaffold routes now close the formerly missing integral/toral/form/normalization joints locally, as recorded above. The guarded87 proof-readiness pass is genuine current scaffold evidence; it does not replace authoring, independent proof audit or engine gates. Both current A/B source-coverage entries are explicit. The four QG-5 B calculations/counterexamples are locally derived from printed source results, not invented source-native examples; their eight honest inline proof-use rows trigger only the documented low-yield advisory, accepted by root after reviewing the calculations. Historical native source/readiness caveats are archived and superseded only by the actual focused repairs. No remaining arbitrary affine based-pair integral claim is disguised as a source gate: it is a proved false boundary.

## 4. Hard-gate checklist

- No page may call a classical Kac--Moody theorem a quantum supplier.
- The `q=1` specialization occurs after construction of the integral form; it
  may not be placed on QG-1 or proved by substituting into rational formulas.
- `A`, `A_0`, and the bar lattice remain distinct throughout.
- Field tensor bars require vectorwise finite action. Integral tensor claims use
  the proved ordered/constructible general-symmetrizable cases or finite-type
  arbitrary based pairs; the affine arbitrary-pair action counterexample is
  explicit. This is not a universal R-matrix or semi-infinite-limit theorem.
- The grand loop exposes its interdependent assertions; it is not a black box.
- Global-basis names are accompanied by upper/lower and bar/pairing conventions.
- Fock-space Serre checks include `e=2`.
- Generic and cyclotomic KLR basis theorems are not conflated.
- KLR functor exactness/projectivity declares the correct bimodule side.
- The lower-global-basis identification states symmetric-Cartan and field
  hypotheses, the KLR parameter regime, and the based-quotient bridge. The bare
  highest-weight K0 isomorphism does not imply it.
- QG-8 is the nondegenerate route later consumed by cyclotomic Hecke theory;
  a degenerate category-O theorem cannot replace it.

## 5. Future-frontier splice contract

The block is registered after the HA-18--HA-23 enrichment and the braid/Soergel
supplier pages, and before either Kazhdan--Lusztig KL-6 or the symmetric-group
Ariki pages. Within the block, retain the displayed QG-1--QG-8 order and place
each B companion immediately after its A page. The page records in
`quantum-groups-planning/pages.json` deliberately have empty `items`; the 127
former reviewed identities are now 148 (113 A items and 35 B
examples/counterexamples) after adding three missing global-basis quotient
joints, seven finite tensor-bar/pairing joints, four Hopf/integral control
lemmas, and seven shuffle/PBW/pairing/crossed-double joints.
They remain design evidence in
`quantum-groups-planning/proposed-items.json` until the normal scaffold stage.

The frozen consumer seams are:

- KL-6 consumes QG-5 for the upper/lower global-basis uniqueness dictionary.
- The symmetric-group Fock-space page consumes QG-6, without re-authoring
  quantum affine relations or the Misra--Miwa crystal.
- Its KLR page consumes QG-7, and its nondegenerate Ariki page consumes QG-8
  only after proving the cyclotomic Hecke--KLR isomorphism locally.

Later frontiers may add quantum Weyl groups, universal R-matrices, quantum
coordinate algebras, cluster categorification, canonical bases beyond symmetric
type, and higher tensor-product categorifications. None is a hidden prerequisite
of the supplier seams above.

## 6. Phase-2 boundary, published impact, and planned consumers

The 2026-09-08 live census finds no published page or published item that
directly or transitively consumes a proposed QG page/item. Therefore the
quantum block supplies **no new root pair** for the provisional 142-pair Phase
2 retirement manifest. This is a demand judgment, not a claim that QG is
ready: all sixteen QG pages are unbuilt, and page registration or future page
closure is not a proof-adequacy certificate.

The non-QG inputs are split deliberately. Published inputs are
`tensor-products-of-modules`,
`permutation-statistics-inversions-and-eulerian-numbers` for its q-integer
definition, and, transitively through HA-19,
`modular-representations-and-projective-covers`; no recorded item on either
page is used by the exact item seams. Planned inputs are RL-12
`kac-moody-algebras-from-generalized-cartan-matrices`, RL-14
`integrable-highest-weight-kac-moody-modules`, RG-8
`young-diagrams-tableaux-and-permutation-modules`, HA-18
`graded-bimodules-and-tensor-functors`, and HA-19
`grothendieck-groups-and-graded-cartan-pairings`. RL-12 and RL-14 happen already
to be present in the provisional Phase 2 closure for unrelated demand; that
does not make QG a Phase 2 consumer root. HA-18, HA-19, and RG-8 are not added
without a published or retirement demand.

The only external planned consumers are KL-6
`parabolic-category-o-and-fock-space-bases` (QG-5), SYMR-10
`level-one-fock-space-and-residue-crystals` (QG-6), SYMR-11
`cyclotomic-hecke-and-quiver-hecke-algebras` (QG-6--QG-8), and SYMR-12
`ariki-categorification-and-graded-decomposition-numbers` (QG-6 and QG-8).
Their exact item seams, including the symmetric/characteristic-zero/parameter
guards on the global-basis route, are recorded in the dated reconciliation
receipt. None may be cut over before Phase 3 repairs a published consumer,
should one exist by then.
