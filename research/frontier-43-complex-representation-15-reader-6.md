# Step 5a independent reader — batch 6

Run: `frontier-43-complex-representation-15`. Dispatch: `reader-6`. Scope: the two assigned pages and 27 assigned draft items. The current engine status was recomputed from `.autopilot/frontier-43-complex-representation-15` and showed Step 5a active; Git HEAD was `9322daa95`. Historical RESUME files were not used.

## Review result and page verdicts

- **A — `quantized-enveloping-algebras-and-quantum-serre-relations`: amended.** Seven A items needed corrections or explicit justifications. The definitions, Gaussian calculus, Serre cancellation, crossed-double normal forms, intrinsic classical reduction, generic ranks and pairings, total grading, and rank-one strings were checked. The formal Hopf interface now explicitly uses color-degreewise completed tensors. The mathematical claims remain available, with this essential completion qualification. No page prose edit was necessary.
- **B — `quantized-enveloping-algebras-and-quantum-serre-relations-examples`: amended.** The oscillator example needed an explicit toral lattice, a coefficient-field Laurent construction, and correction of undefined signed-index notation. The A2 and affine A1 expansions and the full unsymmetrized B2 representation were checked. B-page prose was read and left unchanged.

These are reader verdicts for handoff, not judge stamps, certification, or publication approval. No withdrawal is proposed. No confirmed uneditable defect remains in the material reviewed. No mathematical blocker remains for this reader assignment.

## Repairs and exact evidence

1. **`lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`, Proof 4.1 and final Remarks.** The argument for the associated graded of the left/right generated ideals omitted the upper containment needed when leading terms cancel. Replaced it by containment in `J`, hence in `gr J=I_j` from step 3.1, and explicit PBW lifts for the reverse containment. This closes a short proof omission; no theorem hypothesis or conclusion changes. Corrected the Remarks' filtration-splitting locator from 2.1 to 1.3 and the characteristic-zero locator from nonexistent 3.2 to 2.1.

2. **`def-positive-negative-and-toral-quantum-subalgebras`, Statement immediately following the conjugation formula.** “Uq0 acts ... by the scalar” did not specify the action and could be read as the false multiplication assertion. It now says each `K_h` acts **by conjugation** with scalar `q^{beta(h)}`. Proof 1.4 establishes precisely this action. Products by toral elements are not generally scalar multiplication on homogeneous components.

3. **`lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`, Proof 4.2.** The computed coefficient omitted `q_i^{k(u+1-k)}`. The two expansion exponents and the toral crossing total
   `ru+tv+t(a+2u)=k(u+1-k)+(k-1)r`, using `t=k-r` and `a+u+v=1-k`. Inserted the missing prefactor and the full equality. The alternating Gaussian cancellation remains valid because the prefactor is independent of `r`; at `k=0` it is 1. The old exact coefficient was defective, although the claimed quasiprimitivity remains correct.

4. **`thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`, Proof 2.3.** Both antipode computations moved toral factors to the right but printed them on the left without the additional crossing scalar. The corrected right-normal formulas are
   `S(Serre+_ij)=-Serre+_ij K_i^m K_j` and
   `S(Serre-_ij)=-q_i^{2m}q_j^2 Serre-_ij K_i^{-m}K_j^{-1}`.
   These identities hold modulo the toral/action relations, before imposing Serre. The positive crossing exponent is `m(m-1+a_ij)=0`; the negative one is `m(m+1+a_ij)=2m` with the additional `q_j^2` factor. Their right sides are in the two-sided Serre ideal. This repairs incorrect computations without changing the Hopf formulas or conclusion.

5. **`def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`, Definition (c), final completion caveat, Facts F13 and Proof 1.1.** The full hbar-adic tensor completion permits unbounded color/word support, whereas `S` and `V` are direct sums over color degree. Multiplication on the whole completion would therefore have no target in those direct-sum algebras: for example, the limit of `sum_{m=0}^N hbar^m [v_i|...|v_i] tensor 1` has unbounded word length and its product is outside the direct sum. Specified the tensor completion **in each fixed total color degree**, taking the direct sum afterwards. Proved `R=C[[hbar]]` is a PID by minimum order and the unit criterion, applied the opened finite-free PID submodule theorem to each generated word component, and concluded that each crossed-product component is a finite sum of copies of the complete Cartan coefficient algebra `A_C`. This supplies the continuous multiplication needed for convolution and antipodes. Added exactly the three published prerequisites used in this argument: the PID definition, formal-series unit criterion, and finite-free PID submodule corollary. Existing word and Cartan constructions are preserved. The unrestricted completion interface was ill-formed; the degreewise qualification is essential.

6. **`thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free`, Statement AC locator and Proof 1.1, 3.2.** The formal Cartan variables do not algebraically generate the completed coefficient algebra `A_C`. Surjectivity now uses the identity on the entire `A_C` and finite tensor sums. Replaced the unsupported instruction to expand coassociativity to second order by a local derivation: the co-commutator `D=Delta-Delta^op` satisfies `(1+c+c^2)(D tensor id)D=0` because the four expanded permutations cancel in cyclic sums by coassociativity; divide by `hbar^2` in the coefficientwise torsion-free completed tensors and reduce. Subtracting the two coproduct commutator identities, dividing by `hbar`, and reducing on primitive elements gives the explicit 1-cocycle formula. The earlier freeness/torsion argument licenses these divisions before the embedding conclusion, avoiding circularity. Corrected AC's stated use from step 2.1 to its actual application in 3.1.

7. **`thm-quantized-sl-two-string-formulas`, Proof introduction and use in 3.1–4.1.** The infinite cyclic module uses `[N-t+1]_i` for `t>N+1`, while the supplier defined quantum integers only for nonnegative indices. Declared the local signed extension `[s]_i=(q_i^s-q_i^{-s})/(q_i-q_i^{-1})` for all integers, agreeing with the supplier and giving `[-s]_i=-[s]_i`. The finite string statement is unchanged. In particular the tail's boundary `E v_{N+1}=0` and its subsequent signed coefficients are now well formed.

8. **`ex-quantized-sl-two-relations-coproduct-and-antipode`, Example opening, F2, F5, Verification 1.3.** A matrix `(2)` and symmetrizer alone do not determine the toral lattice of the general datum. Specified `P^vee=Z h_1`, `P=Z alpha_1`, pairing 2, and `K=K_{h_1}`, making the asserted three-generator algebra exact. The Laurent supplier constructs integer-coefficient Laurent polynomials, so F5 now constructs the finite Laurent coefficient space over `Q(q)` locally, with its monomial basis and finite convolution ring laws. Removed undefined `[2n]_q` shorthand for negative integers and gave the actual scalar for all `n in Z`. Removed the stale description of triangular decomposition as “escalated”; the oscillator proof remains independent of that theorem.

The exact batch proof-contract file was updated for all affected derivations, the completion prerequisites, and consumer source excerpts invalidated by the clarifications. Also corrected two contract boundary descriptions: the datum's zero case now refers to its pairing rather than later toral generators, and the quantum-integer numerator is asserted nonzero only at positive indices. There was no `verification.judge` record on any of the eight repaired carriers, so none needed removal. No audit or judge record was added.

## Sources actually consulted

- [Jeong–Kang–Kashiwara](https://arxiv.org/pdf/math/0305390), §1, printed pp. 3–6: the additional datum assumptions were distinguished from this page's weaker datum; (1.1), (1.4), (1.5), and (1.6) supply the symmetric coefficients, presentation, divided powers, and exact inverse-K positive coproduct/antipode convention. The Hopf structure is asserted there; its relation checks are local here.
- [Enriquez](https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf), §1.1, pp. 22–23; §2.1, pp. 31–37, especially Lemmas 2.5–2.11 and (25)–(27); §2.2, p. 37, (28): compared the intrinsic classical-reduction, dual-Borel, and finite-module arguments. The printed coefficient/radical problems identified in the authored supplier are visible in (28); the local generated-half pairing avoids them. These were inspected source sections, not a whole-paper audit.
- [Etingof–Semenyakin v3](https://arxiv.org/pdf/2106.05252v3), §2.1, Definition 2.1 and §2.2, Proposition 2.2 and Example 2.3(iv), printed pp. 4–5: commutative-ring Hopf axioms, uniqueness and the non-involutive rank-one example. Its coproduct convention differs from JKK's; the difference is preserved.
- [Berkeley lectures](https://categorified.net/LieQuantumGroups.pdf), inspected extracted portions of §10.4.1–10.4.2 and §13.1.3, Lemmas 13.1.3.9, 13.1.3.21 and Theorem 13.1.3.22, printed pp. 308–310. The text states quasiprimitivity and refers to Jantzen for its computation; the assigned item supplies that computation. Its positive coproduct uses K rather than inverse K.

Source reading used PDF text extraction. Attempts to obtain three PDF screenshots returned cache misses; no visual reading of those pages is claimed. Mathematical repairs are based on the displayed local derivations, not acceptance of source assertions.

## Validation

For each of the eight changed item paths, ran `node tools/tsx-run.mjs tools/reflow.mts PATH` and then `node tools/tsx-run.mjs tools/precheck.mts PATH`: all exited 0 and each precheck reported one checked proof, zero failures. Reflow changed the coideal item layout and left the other seven unchanged.

Ran `node tools/rendercheck.mjs` on exactly those eight paths: 8 files, no YAML/math rendering failures, exit 0. After all item edits and reflow, ran `node tools/proof-layout.mjs` **once**, batching all eight paths: **8 items, 74 steps, 0 defects**, exit 0. No item was edited afterwards.

Checked all 204 proof-contract source excerpts against their current opened supplier text after whitespace normalization: zero mismatches. This is an excerpt-integrity check, not proof certification. Arithmetic spot checks independently expanded the corrected antipode expressions in right-toral normal words at `q=2` for a zero edge, A2, B2, affine A1, and G2 (both signs: 10 matches). Checked the unsummed coproduct exponent equality on 494 admissible index tuples through `m=8`. These finite checks corroborate, but do not replace, the general algebraic derivations above.

## Coverage limits and handoff

All assigned page bodies and all 27 assigned items were read; assigned suppliers preceded their assigned consumers. Direct prerequisite statements/definitions and the relevant local proofs were opened, with deeper Kac–Moody/PBW supplier follow-ups expanded during the review. This is not an exhaustive audit of every transitive published prerequisite, nor of every bibliography entry or full source book. The contract review used current source excerpts and boundary descriptions and corrected affected derivations; repeated full-proof copies were not treated as independent evidence. No rendered evidence bundle was supplied in this dispatch.

The sole edited mathematical carriers are the eight batch-6 draft items listed above. A/B page prose, other batches, published items, manifests, and `research/plan-spec.json` were not edited. The report and findings JSON are ready for the engine-owned split and Step 5b review. `findings` is empty because every defect identified on the reviewed subjects was within scope and repaired; no uneditable subject or historical observed-source claim is being routed.

## Opened inventory

Task/evidence inputs: `CLAUDE.md`, `README.md`, `SCHEMA.md`, the relevant reader/Step-5 portions of `WORKFLOW.md`, `briefs/reader.md`, the exact batch-6 pages manifest (inventory parsed; current authored item files control the review), empty cross-batch dependency file, proof-contract file, and portions of batch notes. Read/recomputed `.autopilot` status and read the latest Git commit identity. No historical RESUME file was used.

Assigned pages:

- `library/special-topics-in-representation-theory/quantized-enveloping-algebras-and-quantum-serre-relations.md` (A)
- `library/special-topics-in-representation-theory/quantized-enveloping-algebras-and-quantum-serre-relations-examples.md` (B)

Assigned items (listed in supplier-before-consumer order):

- `items/def-bialgebra-counit-and-antipode.md`
- `items/def-lie-bialgebra-and-root-graded-manin-triple.md`
- `items/def-symmetrizable-cartan-datum-for-a-quantum-group.md`
- `items/lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix.md`
- `items/def-quantum-integers-factorials-and-divided-powers-at-q-i.md`
- `items/lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part.md`
- `items/lem-an-antipode-is-unique.md`
- `items/thm-root-graded-manin-triple-gives-dual-lie-bialgebras.md`
- `items/def-drinfeld-jimbo-quantized-enveloping-algebra.md`
- `items/lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras.md`
- `items/lem-quantum-pascal-recurrence-and-gaussian-integrality.md`
- `items/def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum.md`
- `items/def-positive-negative-and-toral-quantum-subalgebras.md`
- `items/lem-q-binomial-expansion-for-q-commuting-elements.md`
- `items/lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions.md`
- `items/lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals.md`
- `items/lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra.md`
- `items/lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double.md`
- `items/thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra.md`
- `items/thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free.md`
- `items/thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing.md`
- `items/thm-triangular-decomposition-of-a-quantized-enveloping-algebra.md`
- `items/thm-quantized-sl-two-string-formulas.md`
- `items/cex-unsymmetrized-q-parameters-break-the-cartan-normalization.md`
- `items/ex-quantum-serre-calculation-in-type-a-two.md`
- `items/ex-the-double-edge-quantum-serre-relation-for-affine-a-one.md`
- `items/ex-quantized-sl-two-relations-coproduct-and-antipode.md`

Direct external prerequisites opened (body statements/definitions and relevant proofs):

- `items/cor-every-vector-space-has-a-basis.md`
- `items/cor-square-matrix-invertible-iff-determinant-is-a-unit.md`
- `items/cor-submodules-of-finite-free-pid-modules-are-free.md`
- `items/cor-torsion-splits-from-the-free-part-over-a-pid.md`
- `items/def-algebra-over-a-commutative-ring.md`
- `items/def-algebraic-dual-and-linear-functional.md`
- `items/def-axiom-of-choice.md`
- `items/def-determinant-of-a-square-matrix.md`
- `items/def-endomorphism-ring-of-a-module.md`
- `items/def-exterior-algebra-of-a-vector-space.md`
- `items/def-field.md`
- `items/def-field-of-fractions.md`
- `items/def-formal-exponential-logarithm-and-powers.md`
- `items/def-formal-power-series-and-coefficient-extraction.md`
- `items/def-free-abelian-group.md`
- `items/def-generalized-cartan-matrix.md`
- `items/def-generated-and-principal-ideals.md`
- `items/def-invertible-matrix-and-similarity-over-a-commutative-ring.md`
- `items/def-kac-moody-algebra-associated-to-a-gcm.md`
- `items/def-kac-moody-root-lattice-height-and-positive-cone.md`
- `items/def-lie-algebra-over-a-field.md`
- `items/def-pbw-filtration-on-the-universal-enveloping-algebra.md`
- `items/def-polynomial-ring-on-a-family-of-indeterminates.md`
- `items/def-polynomial-ring-over-a-commutative-ring.md`
- `items/def-principal-ideal-domain.md`
- `items/def-q-integer-q-factorial-and-q-multinomial.md`
- `items/def-quotient-ring.md`
- `items/def-quotient-vector-space-and-canonical-projection.md`
- `items/def-realization-of-a-generalized-cartan-matrix.md`
- `items/def-restriction-and-extension-of-scalars.md`
- `items/def-ring-characteristic.md`
- `items/def-row-space-column-space-nullspace-and-matrix-ranks.md`
- `items/def-symmetric-algebra-of-a-vector-space.md`
- `items/def-symmetrizable-generalized-cartan-matrix.md`
- `items/def-tensor-algebra-of-a-vector-space.md`
- `items/def-the-laurent-polynomial-ring.md`
- `items/def-universal-enveloping-algebra.md`
- `items/lem-formal-order-laws.md`
- `items/lem-matrix-rank-detected-by-nonzero-minors.md`
- `items/lem-pbw-for-countably-presented-kac-moody-lie-algebras.md`
- `items/lem-schur-complement-congruence-and-determinant.md`
- `items/prop-contragredient-algebra-has-a-triangular-decomposition.md`
- `items/prop-kac-moody-root-spaces-are-finite-dimensional.md`
- `items/prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism.md`
- `items/rem-hopf-algebra-structure-on-the-enveloping-algebra.md`
- `items/thm-determinant-multiplicative.md`
- `items/thm-determinant-of-a-triangular-matrix.md`
- `items/thm-every-independent-set-extends-to-a-basis.md`
- `items/thm-field-of-fractions-is-a-field-and-the-domain-embeds.md`
- `items/thm-first-isomorphism-theorem-rings.md`
- `items/thm-formal-power-series-unit-criterion.md`
- `items/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.md`
- `items/thm-invariant-factor-decomposition-over-a-pid.md`
- `items/thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero.md`
- `items/thm-poincare-birkhoff-witt.md`
- `items/thm-quotient-ring-universal-property.md`
- `items/thm-rank-nullity.md`
- `items/thm-real-square-matrix-invertible-iff-determinant-nonzero.md`
- `items/thm-right-exactness-of-tensor-products.md`
- `items/thm-ring-matrix-arithmetic-laws.md`
- `items/thm-serre-presentation-of-a-kac-moody-algebra.md`
- `items/thm-symmetry-and-associativity-over-a-commutative-ring.md`
- `items/thm-tensor-product-of-algebras-over-a-commutative-ring.md`
- `items/thm-universal-property-of-the-field-of-fractions.md`
- `items/thm-universal-property-of-the-symmetric-algebra.md`
- `items/thm-universal-property-of-the-tensor-algebra.md`
- `items/thm-universal-property-of-the-universal-enveloping-algebra.md`
- `items/thm-well-ordering-theorem.md`

Additional published suppliers opened in the focused classical/PBW and endomorphism follow-ups:

- `items/lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel.md`
- `items/lem-kac-moody-opposite-simple-centralizer-vanishes.md`
- `items/lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h.md`
- `items/lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint.md`
- `items/lem-serre-elements-vanish-before-serre-generation.md`
- `items/lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra.md`
- `items/lem-pbw-spanning-by-ordered-monomials.md`
- `items/lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis.md`
- `items/lem-enveloping-quotient-kernels-and-augmentation-intersections.md`
- `items/lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors.md`
- `items/thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules.md`
- `items/def-kac-moody-verma-module.md`
- `items/def-generalized-casimir-on-restricted-kac-moody-modules.md`
- `items/def-kac-moody-category-o.md`
- `items/def-universal-enveloping-algebra-as-a-tensor-quotient.md`
- `items/prop-endomorphisms-form-a-ring.md`
- `items/def-simple-reflections-and-the-kac-moody-weyl-group.md`
- `items/def-contragredient-lie-algebra-before-the-maximal-ideal-quotient.md`
- `items/lem-free-lie-construction-for-finite-kac-moody-generators.md`
