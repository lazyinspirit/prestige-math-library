# Quantum groups, crystal bases, and highest-weight categorification

Prose scaffold, owner-authorised 2026-09-07. This is future planning: it does
not author library items or publish mathematics. The exact page IDs and item
IDs below are intended for registration only after the source and dependency
audit closes.

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
`tensor-products-of-modules`. Hopf-algebra and quantum-integer foundations are
included on this page because the library has no citable A-page owner for them.

| proposed item | exact content and proof joint |
|---|---|
| `def-symmetrizable-cartan-datum-for-a-quantum-group` | Fix free weight and coweight lattices, simple roots/coroots, a symmetrizer `d_i`, and `q_i=q^{d_i}`. Distinguish root datum from the matrix alone. |
| `def-quantum-integers-factorials-and-divided-powers-at-q-i` | Define `[n]_i`, Gaussian coefficients, and formal divided powers over `Q(q)`; reconcile with the published one-parameter q-integer convention. |
| `lem-quantum-pascal-recurrence-and-gaussian-integrality` | Prove both q-Pascal recurrences and use induction to show the Gaussian quotient lies in `Z[q_i,q_i^-1]`; later integral forms may not assume this from notation. |
| `def-bialgebra-counit-and-antipode` | Define bialgebra and Hopf algebra over a commutative ring, including tensor-product multiplication and both convolution-inverse equations. |
| `lem-an-antipode-is-unique` | Prove uniqueness as a convolution inverse; this licenses the definite article used for quantum groups. |
| `def-drinfeld-jimbo-quantized-enveloping-algebra` | Give every generator and relation for `U_q(g)`, including the full positive and negative quantum Serre sums. |
| `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions` | Verify the bar, Chevalley involution, and contravariant anti-involution on all relations rather than naming them formally. |
| `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra` | State one fixed coproduct convention for `E_i,F_i,K_h`; check relation preservation, counit, antipode and coassociativity on generators. |
| `def-positive-negative-and-toral-quantum-subalgebras` | Define `U_q^+`, `U_q^-`, and `U_q^0` with their root gradings. |
| `thm-triangular-decomposition-of-a-quantized-enveloping-algebra` | Multiplication `U_q^- tensor U_q^0 tensor U_q^+ -> U_q(g)` is a vector-space isomorphism. The proof route must include the quantum-Serre PBW independence step, not only spanning. |
| `thm-quantized-sl-two-string-formulas` | Derive the exact divided-power commutation formula and the finite simple `U_{q_i}(sl_2)` modules used later. |
| `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` | State this for the integral form and its correct toral quotient; direct substitution into rational denominators is forbidden. |

**B companion:** `quantized-enveloping-algebras-and-quantum-serre-relations-examples`.
It contains explicit `U_q(sl_2)`, type `A_2`, and the `e=2` cyclic Cartan
calculations plus a counterexample showing why the unsymmetrized parameter is
wrong.

## QG-2 — Divided powers, integral forms, and quantum highest weights

**Requires:** QG-1 and `integrable-highest-weight-kac-moody-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-lusztig-divided-power-integral-form` | Define the `A`-subalgebra generated by `E_i^(r),F_i^(r),K_h` and the required quantum binomial toral elements. |
| `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` | Check preservation on divided powers and toral binomials. |
| `thm-integral-triangular-decomposition-for-the-lusztig-form` | Prove the multiplication isomorphism over `A`; freeness is part of the claim. |
| `def-kashiwara-skew-derivations-on-the-negative-quantum-half` | Define `e_i'` and `e_i''` by the two coproduct-leading-term identities and prove their twisted Leibniz rules on the quantum-Serre quotient. |
| `lem-the-negative-half-is-separated-by-iterated-skew-derivations` | Use the root grading and QG-1 PBW independence to prove that a positive-degree element killed by every `e_i'` is zero. This is the nondegeneracy joint used by both crystals and KLR pairings. |
| `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` | Normalize `(1,1)=1` and define the form recursively by adjunction of left multiplication by `F_i` with `e_i'`; record the exact `q_i` factor. |
| `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` | Prove well-definedness through the Serre ideal, symmetry, nondegeneracy from separation, and integrality on the divided-power form. QG-7 may not appeal to an unnamed “standard form.” |
| `def-quantum-weight-module-and-integrability` | Weight-space action of every `K_h`; local nilpotence of both `E_i` and `F_i`. |
| `def-quantum-verma-module-and-simple-highest-weight-quotient` | Construct the universal quotient and its unique simple quotient using QG-1 triangular decomposition. |
| `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` | For dominant `Lambda`, quotient by `F_i^(<h_i,Lambda>+1)v`; prove integrability, simple uniqueness, and the universal property. |
| `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` | Normalize the highest vector and use the fixed anti-involution from QG-1. |
| `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` | Establish finite free integral weight lattices and equality of weight multiplicities after specialization; state all freeness hypotheses. |
| `prop-integrable-quantum-highest-weight-modules-are-semisimple` | Use highest vectors and the nondegenerate contravariant form in the bounded-above finite-weight-space category. |

**B companion:** `divided-powers-integral-forms-and-quantum-highest-weights-examples`.

## QG-3 — Kashiwara operators and crystal lattices

**Requires:** QG-2.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-local-ring-at-q-zero` | Define `A_0` as rational functions regular at `q=0`, separately from `A`. |
| `thm-unique-kashiwara-i-string-decomposition` | Every vector in an integrable module has a unique finite sum `sum F_i^(n)u_n` with `E_i u_n=0`; prove via the QG-1 `sl_2` formulas. |
| `def-kashiwara-crystal-operators` | Define `tilde e_i,tilde f_i` on the unique string decomposition and record weights. |
| `def-crystal-lattice-and-crystal-basis` | Give all lattice, weight, stability, mod-q basis, and partial-inverse axioms. |
| `def-crystal-graph-epsilon-phi-and-weight` | Define arrows and the exact `phi_i=epsilon_i+<h_i,wt>` relation. |
| `def-kashiwara-lattices-lambda-and-infinity` | Generate `L(Lambda)` and `L(infinity)` from the highest/unit vector by lowering crystal operators. |
| `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` | Establish the compatibility between `U_q^-` and `V(Lambda)` required by the grand loop. |
| `thm-grand-loop-existence-of-highest-weight-crystal-bases` | Expose the mutually inductive height statements: lattice stability, projection compatibility, basis spanning/independence, and partial inverses. Do not cite “grand loop” as one unexpanded step. |
| `thm-crystal-basis-of-the-negative-half` | Construct `B(infinity)` with the same induction and record its projection to every `B(Lambda)`. |

**B companion:** `kashiwara-operators-and-crystal-lattices-examples`.

## QG-4 — Tensor-product crystals and highest-weight uniqueness

**Requires:** QG-3 and `tensor-products-of-modules`.

| proposed item | exact content and proof joint |
|---|---|
| `def-tensor-product-of-crystals` | Fix left-to-right convention and the equality case in the `epsilon/phi` rule. |
| `thm-crystal-basis-tensor-product-rule` | Prove lattice stability and the two cases for Kashiwara operators using the coproduct and `sl_2` strings. |
| `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` | Derive the max formulas and partial-inverse property. |
| `def-highest-weight-element-and-connected-highest-weight-crystal` | Separate a highest vertex from the assertion that every vertex is reached by lowering arrows. |
| `thm-the-highest-weight-crystal-b-lambda-exists` | Use QG-3 and show connectedness of the crystal of `V(Lambda)`. |
| `thm-uniqueness-of-normal-highest-weight-crystals` | A weight-preserving highest-vertex map commuting with operators is the unique isomorphism under normality; prove well-definedness across different lowering words. |
| `thm-highest-weight-components-in-a-tensor-product-crystal` | Characterize highest vertices by the signature rule and identify each generated component. |
| `prop-dual-crystal-and-reversal-conventions` | Give the exact arrow, weight, `epsilon`, and `phi` transformations under duality. |

**B companion:** `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples`.

## QG-5 — Balanced triples and global crystal bases

**Requires:** QG-2 through QG-4 and `graded-bimodules-and-tensor-functors`.

| proposed item | exact content and proof joint |
|---|---|
| `def-the-bar-lattice-and-integral-lattice-of-a-based-module` | Distinguish the bar of the `A_0` lattice from the `A` divided-power lattice. |
| `def-balanced-triple-and-globalization-map` | Define `E cap L cap bar(L) -> L/qL` and balancedness as its isomorphism. |
| `lem-balanced-triple-linear-algebra-over-the-projective-line` | Prove the intersection and base-change decompositions using the two affine charts; this is the existence joint, not a slogan. |
| `thm-the-highest-weight-crystal-triple-is-balanced` | Lift the grand-loop induction to the `A`, `A_0`, and bar lattices with weightwise finite freeness. |
| `def-lower-global-basis-of-a-quantum-highest-weight-module` | Globalize each crystal element and freeze the lower-basis normalization. |
| `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis` | Prove bar invariance, congruence mod q, integrality, basis, and uniqueness. |
| `def-upper-global-basis-by-the-contravariant-form` | Define the dual basis and state the required perfectness of the integral pairing. |
| `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` | Prove the pairing and operator adjunction formulas. |
| `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` | Match the integral form, bar, bilinear form, and generator normalization; do not identify names without this dictionary. |
| `prop-global-bases-specialize-to-integral-weight-bases` | State which specializations preserve a basis and which root-of-unity specializations may lose semisimplicity. |

**B companion:** `balanced-triples-and-global-crystal-bases-examples`.

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
| `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` | Apply QG-4 uniqueness only after proving normality and connectedness of the good-node component. |
| `def-regular-partition-label-convention-and-mullineux-crystal-involution` | State p/e-regular versus restricted convention and residue negation under sign. |
| `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` | Restrict the semi-infinite-wedge bar to the empty-partition highest-weight component, identify it with QG-5's lower global basis, and prove dominance-unitriangular expansion in the ambient partition basis. Do not call the reducible whole Fock space the basic representation. |

**B companion:** `quantum-affine-type-a-and-level-one-fock-space-examples`.

## QG-7 — KLR algebras and categorification of the negative half

**Requires:** QG-1, QG-2, `graded-bimodules-and-tensor-functors`, and
`grothendieck-groups-and-graded-cartan-pairings`.

| proposed item | exact content and proof joint |
|---|---|
| `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` | Give idempotent, dot and crossing generators and every quadratic/braid case via fixed homogeneous polynomials `Q_ij(u,v)=Q_ji(v,u)` with nonzero extremal coefficients; include the symmetric double-edge specialization used for `e=2`. |
| `def-klr-grading-and-diagrammatic-composition` | State degrees and reconcile algebraic multiplication with vertical stacking. |
| `thm-polynomial-representation-of-a-klr-algebra` | Under the stated nonvanishing/extremal-coefficient hypotheses on `Q_ij`, construct the faithful action by multiplication, divided differences and permutation operators; verify all defining cases. |
| `thm-klr-pbw-basis-theorem` | Prove spanning by relations and independence through the faithful polynomial representation. |
| `def-klr-induction-and-restriction-bimodules` | Define idempotent embeddings and the exact functors, with grading shifts. |
| `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives` | Exhibit the Frobenius trace/cups/caps and the required finite freeness; use HA-18 sidedness. |
| `def-divided-power-klr-idempotents-and-projectives` | Construct nil-Hecke idempotents explicitly; do not infer them from an unnamed summand. |
| `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations` | Translate the categorical decompositions to the divided-power integral form. |
| `def-the-klr-cartan-pairing` | Use graded Hom and the exact bar-sesquilinear convention from HA-19. |
| `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form` | Check generator adjunction and normalization against the explicit QG-2 skew-derivation recursion, then use uniqueness. |
| `thm-klr-categorification-of-the-negative-quantum-half` | Prove surjectivity by divided powers and injectivity from nondegeneracy/PBW ranks. |

**B companion:** `klr-algebras-induction-and-quantum-serre-categorification-examples`.

## QG-8 — Cyclotomic KLR algebras and highest-weight categorification

**Requires:** QG-5, QG-7, `modular-representations-and-projective-covers`,
and `grothendieck-groups-and-graded-cartan-pairings`.

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
| `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis` | In symmetric Cartan type over characteristic zero, match duality, bar invariance, crystal reduction and almost-orthonormality to QG-5 uniqueness. |
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
| Jeong--Kang--Kashiwara, *Crystal Bases for Quantum Generalized Kac--Moody Algebras*, [arXiv:math/0305390](https://arxiv.org/abs/math/0305390) | complete 60-page article; local SHA-256 `f873e27305536ded497ec03bf1dec3770354f56e8e00e9b7aafe384cf140b7f6` | §§1–4 for presentation, integrability, strings and crystals; §§7–10 for the 15-part grand loop, balanced triples and global bases |
| Kang--Kashiwara, *Categorification of Highest Weight Modules via KLR Algebras*, [arXiv:1102.4677v4](https://arxiv.org/abs/1102.4677) | complete 42-page final-version article; SHA-256 `9d8f183a8bb552f51477d776683071f61e901a757667cf7e72249817a42a0091` | §§2–4 definitions/projectivity/exact sequences, §5 categorical `sl_2`, §6 highest-weight categorification |
| Kashiwara--Miwa--Petersen--Yung, *Perfect Crystals and q-deformed Fock Spaces*, [arXiv:q-alg/9603025](https://arxiv.org/abs/q-alg/9603025) | complete 74-PDF-page author article; SHA-256 `99bb8974806e51befd59b396675cf8eff16ea647696baeb4e345127037e6ee6a` | §§3.1–3.3 perfect crystals, energy, wedge relations and normal-basis proof; §§4.1–4.3 ground state, semi-infinite limit, action and integrability; §5.2 type `A_n^(1)` including `n=1`; Appendix B Serre deduction |
| Leclerc--Thibon, *Canonical Bases of q-Deformed Fock Spaces*, [arXiv:q-alg/9602025](https://arxiv.org/abs/q-alg/9602025) | complete author article; local cache `leclerc-thibon-fock-canonical.pdf` | formulas (3)--(4) for addable/removable-node action, the beta-number wedge dictionary following them, Theorems 3.2--3.3 for the bar, and Theorem 4.1 for the ambient IC bases and the basic-representation lower global basis |
| Rouquier, *2-Kac--Moody Algebras*, [arXiv:0812.5023](https://arxiv.org/abs/0812.5023) | complete 66-page article; SHA-256 `645032786278b9fb97a2d56ec6fcfc20eddca67c7eb21643d6169bb18fed7f9d` | §3.2.1 arbitrary `Q_ij`, Theorem 3.7 and §3.2.2 faithful polynomial realization/basis, §§3.2.3 and 4.1 symmetrizable Cartan grading/decategorification, §5 integrable 2-representations |
| Varagnolo--Vasserot, *Canonical Bases and Khovanov--Lauda Algebras*, [arXiv:0901.3992](https://arxiv.org/abs/0901.3992) | complete 30-page article; SHA-256 `2062768e9a3bfb77e978e3892101adcca5c247ef604f865829e65c7b3e4efe78` | §§1--3 geometric realization and PBW theorem; §4, especially Theorem 4.5, identifies indecomposable projectives with the canonical basis in the symmetric simply-laced case |
| Webster, *Knot Invariants and Higher Representation Theory I*, [arXiv:1001.2020v9](https://arxiv.org/abs/1001.2020) | complete 62-page article; SHA-256 `5b4172ac78dfe77327fd18dada41b039f5c0e6308fc036b1de24aceab67b1a91` | §1.3, Theorem 1.8 and Remark 1.9 for cyclotomic biadjunction, K0 categorification, the closing-diagram Frobenius trace and its symmetric normalization in symmetrizable type |

KMPY supplies the normal-wedge basis, semi-infinite limit, integrability and the
`A_1^(1)` case. Leclerc--Thibon fixes the beta-number/partition dictionary and
the exact node exponents. The QG-6 scaffold deliberately retains the termwise
derivation between them, so the displayed node action is proved rather than
copied. Rouquier's arbitrary-`Q_ij` polynomial realization supplies the
multiple-edge `e=2` basis route that the simply-laced Khovanov--Lauda and
Varagnolo--Vasserot articles do not. The all-symmetrizable K0 theorem and the
symmetric-type global-basis identification remain separate claims.

## 4. Hard-gate checklist

- No page may call a classical Kac--Moody theorem a quantum supplier.
- `A`, `A_0`, and the bar lattice remain distinct throughout.
- The grand loop exposes its interdependent assertions; it is not a black box.
- Global-basis names are accompanied by upper/lower and bar/pairing conventions.
- Fock-space Serre checks include `e=2`.
- Generic and cyclotomic KLR basis theorems are not conflated.
- KLR functor exactness/projectivity declares the correct bimodule side.
- The lower-global-basis identification states symmetric-Cartan and field
  hypotheses. The bare highest-weight K0 isomorphism does not imply it.
- QG-8 is the nondegenerate route later consumed by cyclotomic Hecke theory;
  a degenerate category-O theorem cannot replace it.

## 5. Future-frontier splice contract

Register this block after the HA-18--HA-23 enrichment and the braid/Soergel
supplier pages, and before either Kazhdan--Lusztig KL-6 or the symmetric-group
Ariki pages. Within the block, retain the displayed QG-1--QG-8 order and place
each B companion immediately after its A page. The page records in
`quantum-groups-planning/pages.json` deliberately have empty `items`; the 127
reviewed proposed identities (92 A items and 35 B examples/counterexamples)
remain design evidence in
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
