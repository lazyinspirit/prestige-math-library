# Step 3a reader report — batch 51

Run: non-ml-math-remaining-81-2026-10-18  
Role: independent reader  
Verdict: no unresolved defect in the assigned pages or items. Nine item texts were repaired, proof-contract records were synchronized, and no finding remains for routing.

## Opened inventory

Assigned pages opened:

- A page: library/hall-algebras-and-tensor-categories/green-hall-bialgebras-and-quantum-group-realizations.md
- B page: library/hall-algebras-and-tensor-categories/green-hall-bialgebras-and-quantum-group-realizations-examples.md
- Required pages: finitary-ringel-hall-algebras; bialgebras-convolution-and-antipode-identities; noncrossing-partition-lattices-and-kreweras-complements.

All 39 manifest-listed items were opened. A-page items:

def-quiver-hall-positive-borel; lem-symmetric-gaussian-alternating-sum-vanishes; lem-yext-zero-splice-factorization; lem-yext-exact-sequences-in-both-variables; def-finite-field-hereditary-hall-category; lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary; lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary; lem-hall-euler-form-is-additive; lem-hall-sequence-count-equals-aut-weighted-subobject-count; def-euler-twisted-hall-algebra; lem-euler-twisted-hall-product-is-well-defined; def-green-hall-completion-and-coproduct; lem-euler-twisted-hall-product-is-associative-and-unital; lem-green-hall-coproduct-coefficients-are-finite; lem-green-cross-square-counting-identity; def-extended-hall-algebra-and-composition-subalgebra; lem-extended-hall-torus-action-is-well-defined; lem-green-hall-coproduct-is-coassociative; lem-green-coproduct-products-converge; thm-green-hall-coproduct-is-a-twisted-bialgebra-map; prop-green-hall-pairing-is-nondegenerate; cor-extended-green-hall-bialgebra; lem-hall-and-dj-borel-conventions-are-isomorphic; prop-ringel-map-is-well-defined-and-has-composition-image; thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form; lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra; lem-finite-dynkin-quiver-reflection-classification; lem-finite-dynkin-hall-algebra-is-simple-generated; lem-finite-field-schur-descent-and-restriction; lem-affine-de-quivers-have-exponentially-many-indecomposables; lem-hall-composition-full-exactly-finite-dynkin; lem-numerical-serre-rank-one-skew-kernel-is-integrable; lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir; lem-a-minimal-numerical-serre-kernel-obeys-the-quantum-casimir-constraint; thm-prime-power-numerical-serre-half-is-the-integral-specialization; thm-ringel-map-embedding-and-finite-dynkin-criterion.

B-page items:

cex-kronecker-composition-subalgebra-is-proper; ex-green-hall-square-and-coproduct-for-finite-vector-spaces; ex-a2-hall-products-and-quantum-serre.

Additional dependency statements consulted for the claims reviewed included thm-integral-triangular-decomposition-for-the-lusztig-form, thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double, and the prime-power specialization theorem listed above. The relevant statements of the Hall product, coproduct, and pairing definitions were also checked.

## Repairs and evidence

- lem-yext-exact-sequences-in-both-variables — clarified the Statement and closing discussion: exactness means image equals preimage of the zero class, including when Yoneda collections are class-sized; the usual exact sequences of abelian groups apply when those collections are sets. This avoids presupposing a smallness theorem. Evidence: Weibel, Introduction to Homological Algebra, §3.4.6, printed p. 79/PDF pp. 78–79, notes the set issue for Yoneda Ext; Mitchell, Theory of Categories, Ch. VII §5, Theorem 5.1, printed pp. 178–180, proves the Yoneda exactness argument without requiring enough projectives or injectives.

- lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary and lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary — stated the full representation categories are essentially small and selected explicit small skeletons. The finite-matrix enumeration supplies representatives; the acyclic proof transports projective path representatives into its skeleton. Evidence: the constructions enumerate finitely many matrix tuples for each dimension vector over a finite field and select one representative per finite general-linear-group orbit.

- lem-euler-twisted-hall-product-is-well-defined — replaced an Euler-pairing notation in the scalar well-definedness step with the directly defined integer chi_0(M,N). Evidence: the item’s Hall Euler form definition gives this integer; the additivity lemma is not needed for this scalar claim.

- lem-green-hall-coproduct-coefficients-are-finite and prop-green-hall-pairing-is-nondegenerate — used the same directly defined chi_0(M,N) in the coefficient formula and adjointness computation. Evidence: the coproduct definition gives coefficient nu^{chi_0(M,N)}P^R_{M,N}/a_R. Schiffmann, Lectures on Hall Algebras, §1.5, Lemma 1.8 (PDF p. 11), supplies the finite-support argument; the cross-square argument in §1.5, pp. 12–15, supports the counting identity. The A2 computation was checked against §3.3, Example 3.15 (PDF p. 37).

- lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir — made the Casimir construction and its proof uniform for t in {nu, nu^{-1}}, evaluating each finite-degree quasi-R coefficient at the chosen parameter using the nondegenerate Gram matrices available at both specializations. Its Casimir eigenvalue is t^{f(lambda)}.

- lem-a-minimal-numerical-serre-kernel-obeys-the-quantum-casimir-constraint — parameterized the minimal-kernel construction by t in {nu, nu^{-1}}, including the deletion, mixed-relation, Verma-module, and Casimir calculations.

- thm-prime-power-numerical-serre-half-is-the-integral-specialization — clarified that the PBW-rank and nondegeneracy statements cover both parameter signs and that the Green-form normalization is specifically the inverse-parameter specialization, after relabeling F_i as E_i. Replaced Step 4.1’s inference from a bar-semilinear map to a K-linear map between fibers with a direct repetition of Steps 1.1–3.1 at t=nu^{-1}. That repetition is justified by the prime-power specialization theorem’s both-sign nondegenerate forms and the two-parameter Casimir/rank-one lemmas. The bar source only supplies a semilinear parameter exchange; if p^a is a square then K=Q, so there is no field automorphism of K sending nu to nu^{-1} in general. Kashiwara, “On crystal bases of the q-analogue of universal enveloping algebras,” §7.5, printed pp. 515–516, was consulted for the lower-global-basis specialization background.

The batch-51 proof-contract file was updated to match revised statements and derivations, including consumer quote mirrors. Stale verification judge records were absent on the materially repaired items. The rank-one supplier already states and proves the needed range q>0, q≠1; its stale contract wording was synchronized to that range, with no additional item-text change.

## Page verdicts and remaining issues

- A page: no page-prose defect found. Its assigned mathematical carriers were reviewed and the confirmed item defects above were repaired.
- B page: no page-prose defect found. The finite-vector-space square/coproduct and A2 calculations were checked.
- Uneditable defects: none identified.
- Proposed withdrawals: none.
- Blocker: none.

## Validation and coverage

Reflow and precheck passed for the six earlier repaired items and the three additional repaired items. The rank-one supplier was also reflowed and prechecked. Final batched layout check: node tools/proof-layout.mjs on the ten reviewed item paths reported 10 items, 53 steps, 0 defects.

The assigned pages and all assigned items were reviewed, with claim-relevant dependencies and cited targets opened as described above. I did not independently re-prove the full transitive published source corpus; no unresolved defect was found in the assigned carriers.
