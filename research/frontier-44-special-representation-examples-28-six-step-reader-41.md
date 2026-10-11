# Reader 41 — independent review of batch 41

Run: `frontier-44-special-representation-examples-28-six-step`. The current manifest assigns three A results and two B examples. The opened runtime state showed stage `3a-read`. The task-named batch notes describe a historical equivariant inventory; they were evidence of that mismatch, not authority for this assignment.

## Opened inventory and coverage

Repository instructions read: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `briefs/reader.md`. Current task artifacts opened: the batch-41 page manifest (inventory and dependency fields), proof contracts (citations, derivations and boundaries), batch notes, runtime state, and the batch-32 frozen pre-reader fingerprints when supplier changes were detected. Initial truncated outputs were recovered with bounded section reads; no truncated output was treated as proof of absence.

Assigned pages, both opened in full:

- `A`: `library/special-topics-in-representation-theory/proper-cohomological-descent-and-constructible-hypercovers.md`.
- `B`: `library/special-topics-in-representation-theory/proper-cohomological-descent-and-constructible-hypercovers-examples.md`.

Assigned item inventory, opened with their complete authored arguments; principal result order was comparison, proper Cech descent, hypercover theorem, then the examples:

- `items/lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization.md`.
- `items/lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves.md`.
- `items/thm-proper-hypercovers-compute-constructible-derived-cohomology.md`.
- `items/ex-proper-cech-descent-does-not-require-acyclic-fibers.md`.
- `items/ex-hypercover-total-degree-uses-only-a-finite-matching-truncation.md`.

Direct mathematical suppliers opened (full definitions/statements and the supplied proofs used in checking the assigned arguments):

- `items/cor-cohomology-over-a-field-is-dual-to-homology-over-that-field.md`.
- `items/cor-homology-of-spheres.md`.
- `items/def-algebraically-constructible-complex-of-analytic-field-sheaves.md`.
- `items/def-analytic-topology-and-finite-smooth-algebraic-stratifications.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-chain-complex-in-an-abelian-category.md`.
- `items/def-classical-algebraic-prevariety-regular-maps-and-varieties.md`.
- `items/def-direct-sum-total-complex-of-a-double-complex.md`.
- `items/def-one-point-compactification.md`.
- `items/def-projective-morphism-classical.md`.
- `items/def-simplicial-object-and-simplicial-commutative-ring.md`.
- `items/lem-analytic-constructible-sheaves-admit-coherent-six-operations.md`.
- `items/lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology.md`.
- `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`.
- `items/lem-simplicial-normalization-prism-and-trivial-fibration-criterion.md`.
- `items/prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes.md`.
- `items/thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace.md`.
- `items/thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology.md`.
- `items/thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications.md`.
- `items/thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology.md`.
- `items/thm-one-point-compactification-properties.md`.
- `items/thm-stereographic-projection-riemann-sphere-homeomorphism.md`.

Additional support/model suppliers opened while tracing the six-operation clauses:

- `items/lem-analytic-six-operation-support-and-trace-calculus.md`.
- `items/lem-complex-algebraic-stratifications-have-finite-conical-cochain-models.md`.
- `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md`.

The two batch-32 suppliers were subsequently replaced by their owner during this review. Their current arguments were read again, recovering the omitted chunks. This rereading was necessary to check changed source bytes. The explicit simplicial definition and the secondary support/model proofs were opened as their uses required further checking, after the first pass through some consumers. The report does not claim that every node of the entire foundational dependency closure was audited recursively in strict order. No unrelated clauses of the six-operation, stratification, Hodge or KLR suppliers are certified here.

## Sources and exact mathematical evidence

[Dugger–Hollander–Isaksen, Hypercovers and simplicial presheaves](https://arxiv.org/pdf/math/0205027), Proposition A.4 and Lemma A.5, printed pp.35–36 (PDF pages indexed 34–35), were read with their complete proofs. The proposition gives the bounded-height bisimplicial Cech induction and retract from its diagonal; the lemma expresses levelwise covering maps as pullbacks of finite products of matching covers. The assigned proof implements these constructions with proper surjections and derived sheaf totals. DHI works on a general site: its appendix is not an analytic proper-base-change or proper-stalk-contraction theorem, and its invocation of diagonal homotopy theory does not replace the local additive comparison proof.

[Stacks, Section 14.23](https://stacks.math.columbia.edu/tag/0194) and [Theorem 14.24.3](https://stacks.math.columbia.edu/tag/019G) were opened for normalization context. The proof here uses the opened local normalization supplier and finite universal operator identities. No complete reading of either Stacks chapter PDF, Goresky's book, BBD or Bernstein–Lunts is claimed.

The actual proper-stalk argument is elementary once the cited proper-base-change and uniform strict-resolution clauses are supplied: insertion of one fixed fiber point contracts the augmented cohomology row. It does not make individual fibers acyclic. Finite diagonals suffice for convergence without dimensional bounds on their coefficient groups. The two-point hard-truncation calculation has differential matrix with rows `((-1)^(p+1),1)` and `(1,(-1)^(p+1))`, rank one over every field, including characteristic two.

## Repairs and their evidence

All five assigned items were repaired; no item was withdrawn and no claim was narrowed to avoid a proof. No other-batch item, B-page prose, published carrier, plan or manifest was edited.

1. `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`: corrected the **Given** from lowering simplicial faces to raising cosimplicial cofaces. Rebuilt step 1.1 with prepend-initial-vertex contractions. The old prism has the opposite endpoint sign and a constant simplicial map remains nonzero on unnormalized positive-degree point chains; it cannot be identified with a degree-zero-only vertex projector as written. The new deletion identities give `partial h+h partial=1-e` directly, and the tensor contraction has its Koszul sign. Steps 2.1–3.1 construct the two comparisons by specified model fillings. Corrected step 4.1's ill-typed residual `(f-g)(z)-partial h_(m-1)(partial z)` to `(f-g)(z)-h_(m-1)(partial z)` and verified its cycle equation. Step 5.1 reverses every map, composition and homotopy identity, including the inverse homotopies, and cancels the internal terms for a homotopy lowering simplicial degree. Step 6.1 distinguishes cosimplicial normalization and checks finite diagonals, augmentation and natural derived presentations. These were substantive proof/variance/computation defects; the Statement's mathematical conclusion is preserved.
2. `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`: strengthened step 3.1's global argument. Preserving finite sums alone does not justify applying a derived functor termwise to this total. The supplied simplicial injective model has levelwise injectives; direct image preserves them because its left adjoint is exact. Finite sums in each degree give a bounded-below injective total, so applying sections termwise computes derived global sections and columnwise derived composition gives the displayed global comparison. The stalk contraction, arbitrary field, lower bound and naturality conclusions are unchanged.
3. `thm-proper-hypercovers-compute-constructible-derived-cohomology`: clarified in the Statement that `sk` denotes restriction through the stated level and `cosk` is its finite-limit right Kan extension; a skeleton was incorrectly described as a finite-limit construction. This formal convention already appeared in the Given; no descent hypothesis, coefficient domain, cutoff or conclusion changed. Corrected step 6.1's smoothness caveat to a fiber product of smooth **varieties**; smooth morphisms themselves are stable under base change and composition. Checked the finite matching-product map, the truncated retraction, the fixed-degree argument and the common product refinement against the local proofs and DHI's exact construction.
4. `ex-proper-cech-descent-does-not-require-acyclic-fibers`: filled step 1.1's unstated separatedness and chart-topology checks. The diagonal has equations `z=z'`, `w=w'`, `zw'=1` or `wz'=1` on the four chart products, so equalizers are closed. The stereographic formulas in the inverse chart are `(2 Re w,-2 Im w,1-|w|^2)/(1+|w|^2)`, with continuous inverse `w=(x-iy)/(1+t)` near the north pole; this verifies the glued analytic topology rather than asserting its identification with the one-point compactification. Corrected step 2.1's deletion-map domains for composition with the displayed insertions. Opened every cited topology/homology/cohomology target, including the sheaf–singular comparison, and retained the nonzero fiber `H^2=k` witness.
5. `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`: corrected Fact F2, which falsely attributed skeleton/coskeleton vocabulary to the simplicial-object definition. That vocabulary is supplied by the hypercover theorem, F1. Added the explicitly inherited `def-axiom-of-choice` dependency. In step 3.1 justified the derived two-point cochain model: finite discrete spaces have sheaves given by finite families of vector spaces and exact global sections, so only internal degree zero contributes. Checked the normalized rank-one matrix and top hard-truncation cohomology. Kept the essential distinction between hard truncation of cochain terms and coskeleton reconstruction.
6. Assigned A-page prose: corrected its smoothness caveat consistently with item 3. The remainder of its summary matches the repaired local arguments.

Every affected numbered derivation in the batch-41 proof contracts was updated; F1/F5 use lists were adjusted for the new comparison and chart arguments. The hypercover Statement quotation and, after supplier replacement, the cited simplicial-model Statement quotations were refreshed from the current source. No stale `verification.judge` record was present in any of the five assigned items, so none required deletion. No judge/audit/certification stamp was added.

The new explicit AC edge in the truncation item is absent from its original manifest row. The lead/engine must reconcile this mechanically; the reader's edit license does not include manifests or `research/plan-spec.json`.

## Focused consumer checks

Clarifying the original hypercover Statement triggered a search of the actual item `deps` graph. It has 26 direct/indirect consumers. The two additional direct consumers, the proper mixed-Hodge theorem and nodal-curve example, were opened with their complete arguments. The assigned truncation example was repaired and checked as above. The remaining downstream statements/definitions and exact affected supplier clauses were opened in dependency order for a focused interface check; their entire Hodge/perverse/KLR/Specht proofs were not audited.

The direct applications use bounded constant coefficients (rational constant sheaves in the Hodge arguments), proper matching covers, and the same finite truncation/refinement convention. The formal clarification changes no hypothesis or consequence they consume. The further consumers use the unchanged mixed-Hodge, semisimplicity or based-algebra conclusions, so this clarification requires no downstream mathematical change. The mixed-Hodge theorem's F2 paraphrases the coefficient scope more broadly as bounded-below; its actual applications here use the bounded constant object. This interface check is not acceptance of an unbounded extension.

Consumer inventory (each current claim/interface opened):

- `items/ex-hypercover-total-degree-uses-only-a-finite-matching-truncation.md`.
- `items/thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree.md`.
- `items/ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class.md`.
- `items/thm-mixed-hodge-weights-control-proper-cohomological-restriction-images.md`.
- `items/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction.md`.
- `items/thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps.md`.
- `items/thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology.md`.
- `items/cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero.md`.
- `items/ex-projective-perverse-decomposition-for-projective-space-to-a-point.md`.
- `items/thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis.md`.
- `items/lem-cyclotomic-extension-of-scalars-respects-the-based-quotient.md`.
- `items/thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis.md`.
- `items/thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis.md`.
- `items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md`.
- `items/thm-graded-specht-classes-realize-standard-fock-vectors.md`.
- `items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md`.
- `items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md`.
- `items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md`.
- `items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md`.
- `items/thm-graded-specht-heads-classify-the-graded-simple-modules.md`.
- `items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md`.
- `items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md`.
- `items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md`.
- `items/def-graded-adjustment-polynomials-in-positive-characteristic.md`.
- `items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md`.
- `items/rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers.md`.

## Uneditable findings and source continuity

The JSON contains four historical supplier findings against exact **pre** bytes, one historical intermediate supplier citation defect, and two current B-page prose defects. The defective subjects' existing IDs are used, not reader-local obligation labels.

Initial source hashes were computed after the source reads, before their concurrent replacements:

- Simplicial-descent supplier: `3688eef4f9e88feac978ccc97d211f68c7f3e9b6eeeb9ee2cbeb9af9ad44e9d8`.
- Incidence-model supplier: `bec800c25532b9fde20336747615df77aa478ecd7eb7ae0d62e77fcdb30b21aa`.

Each independently recorded observed raw-source hash matches the corresponding producer fingerprint in `step3-hash-32-pre.json`. The frozen fingerprint by itself was not used as evidence of reading; it binds the bytes already read and hashed. Current replacements are different bytes. Historical findings are retained with `snapshot: pre`, and are expressly not asserted against those corrected replacements. Both suppliers belong to current-run batch 32, reached from the assigned proper-surjection lemma through its declared dependencies; they were not mislabeled as published.

- Subject `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`; Proof step 3.2: the displayed degeneracy identities for e_p; **false-claim**, **fatal**. Historical defect in the exact observed pre-reader bytes, independently hashed during this review and matching the producer frozen pre fingerprint. The identity sigma^0 e_p=e_{p+1} sigma^0 is false: for P={y,z}->pt with section y, at p=0 the two sides send z to (y,y,z) and (y,z,z). The next identity sigma^{i+1} e_p=e_{p-1} sigma^i is ill-typed. For i>=0 the correct shifted identity is sigma^{i+1} e_p=e_{p+1} sigma^i; the exceptional identity is sigma^0 e_p=e_{p+1} e_p. Correct the identities and verify the resulting extra-degeneracy contraction. This is a batch-32 draft supplier reached directly by the assigned consumer; its general total-model clause, rather than its local-section conclusion, is what that consumer uses. Current replacement step 5.2 retains only the verified insertion/face identities in an enlarged injective diagram model; the defective old degeneracy equations have been removed. No claim is made that the corrected current bytes still contain this old defect.

- Subject `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`; Proof step 5.3: "since the base stars form a basis"; **false-claim**, **fatal**. Historical defect in the exact observed pre-reader bytes, independently hashed during this review and matching the producer frozen pre fingerprint. The finitely many open stars of a fixed finite triangulation are not a neighbourhood basis for its analytic topology. On the interval with its single-edge triangulation, the edge star (0,1) cannot be shrunk to an arbitrary small neighbourhood of 1/2. An isomorphism on derived sections over these finitely many stars alone does not prove the comparison is a stalkwise quasi-isomorphism without a proved constructibility/reconstruction input for its target. Supply compatible calculations on a genuinely cofinal system of small neighbourhoods, or independently prove target reconstruction and use the derived diagram equivalence. The assigned consumer reaches this batch-32 supplier through its declared six-operation suppliers. Current replacement steps 4.1, 4.2 and 5.1 use cofinal small Euclidean-ball calculations and actual acyclic product resolutions, explicitly distinguishing principal opens in the face poset from analytic neighbourhoods. No claim is made that the corrected current bytes still contain this old defect.

- Subject `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`; Proof step 7.3: "every U intersection St(tau) ... is convex"; **false-claim**, **fatal**. Historical defect in the exact observed pre-reader bytes, independently hashed during this review and matching the producer frozen pre fingerprint. A small intrinsic metric ball U around the common vertex of two edges is a union of two edge segments. With tau that vertex, U intersection St(tau) is that branched union, which is not convex in the geometric realization. Convexity of the intersections with each individual closed simplex does not imply convexity of the star union. Replace the asserted convexity by an explicit contraction/acyclic-resolution calculation for the relevant star intersections and verify its compatibility under shrinking; this is needed for the stated stabilized internal-Hom stalk computation. This is the same batch-32 incidence supplier in the assigned consumer dependency closure. Current replacement step 6.4 uses convex intersections with individual closed simplices, not convexity of whole stars, and checks restriction compatibility and local constancy. No claim is made that the corrected current bytes still contain this old defect.

- Subject `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`; Proof step 6.2: cone bound from H^r(F;k)=0 for 1<=r<=R; **missing-hypothesis**, **fatal**. Historical defect in the exact observed pre-reader bytes, independently hashed during this review and matching the producer frozen pre fingerprint. The argument silently identifies k->H^0(F;k) as an isomorphism, which the positive-degree vanishing hypotheses do not supply. Take V=pt, B=k in degree zero (b=0), and F two discrete points with a finite deleted-boundary model. Every positive H^r(F;k) vanishes, but the unit is the diagonal k->k^2 and its cone has H^0=k, contradicting the claimed lower bound b+R+1, for example R=1. Add the hypothesis that k->H^0(F;k) is an isomorphism (and prove it for any intended connected nonempty fiber), or state the extra degree-zero contribution. This cone-bound clause is not itself used in the assigned proper-descent proof, but is a defective claim in its batch-32 supplier closure. Current replacement step 6.1 adds the essential k->H^0(F;k) isomorphism and explicitly gives the two-point counterexample to the former estimate. No claim is made that the corrected current bytes still contain this old defect.

- Subject `proper-cohomological-descent-and-constructible-hypercovers-examples`; Examples, first example paragraph, final sentence: "This is the smallest witness"; **overstrong-title-or-statement**, **fatal**. Neither a comparison class nor a meaning of smallest nor a minimality proof is given. A two-point proper surjection already has H^0=k^2 and is not cohomologically acyclic relative to k; the P^1 example establishes nonzero positive cohomology but proves no minimality assertion. Delete the superlative or specify and prove a precise minimality statement. B-page prose is outside the reader edit license.

- Subject `proper-cohomological-descent-and-constructible-hypercovers-examples`; Examples, final paragraph: "the bound is sharp ... level n alone cannot determine H^n in general"; **overstrong-title-or-statement**, **fatal**. The item establishes necessity of the outgoing differential only for hard truncation of the cochain complex. The page instead makes an unqualified claim about simplicial levels/coskeleton data immediately after discussing coskeleton truncations. From the levels through n one can form cosk_n sk_n of a proper hypercover, which is again a proper hypercover and computes H^n by the assigned theorem; even its level-zero Cech reconstruction descends. Qualify the sharpness claim as discarding all cochain terms above n without reconstructing them. The mere existence of a potentially nonzero outgoing differential is not a proof of this unqualified necessity. B-page prose is outside the reader edit license.

- Subject `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`; Intermediate replacement Proof step 4.1: "Step 2.2 normalizes the horizontal direction" (corrected during final freshness check); **citation-inaccurate**, **fatal**. Historical citation error in the replacement source read and independently hashed as 487ec1bd7bed4fda95fb71801ba4fb5c2674173e1aa222e80944466a1bbd822e: step 2.2 was Ordinary Cartesian descent, whereas normalization was proved in step 3.1. The trailing tags already cited step 3.1. During final freshness checking the supplier changed again, to raw hash 9be18d46ea74afcfd0a97412e49a95fd47ada04c183e39319946931bddadcddf, and the prose now correctly cites step 3.1. This intermediate replacement is not the producer immutable pre snapshot, and its defective bytes are no longer current; no retained raw intermediate snapshot can bind them, so observed_source is null. This is retained historical evidence, not a claim against the corrected current supplier. The assigned proper-surjection consumer directly reaches this batch-32 supplier.

## Page verdicts and blockers

- **A page:** locally repaired. Its assigned result statements and proof routes were checked and the summary now matches them. The four initially observed supplier defects were corrected independently in the current replacements; the subsequent localized supplier citation reference was also corrected independently during final freshness checking. No unresolved current supplier defect is asserted by this report. This is a reader verdict, not a certification or a gate close.
- **B page:** hold for Step 3b/its prose owner. Its two examples were repaired and checked, but the page's unproved “smallest” assertion and its unqualified cutoff sharpness remain outside this reader's edit license.

Outstanding handoff work: route the two B-page prose findings; preserve/discharge the four hash-bound historical findings and the intermediate citation observation against their replacements; reconcile the explicit AC edge in the owned manifest. No withdrawal is proposed. A complete independent audit of the entire transitive geometric/Hodge/KLR closure was not performed and is not claimed.

## Actual validation

For each of the five changed item paths, in dependency order, ran:

- `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`: exit 0, unchanged on all five.
- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: exit 0, PASS on all five, one checked proof and zero failures each.

After the final item edits/formatters, ran exactly one batched final `node tools/proof-layout.mjs` invocation with all five explicit changed item paths: exit 0, **5 items, 25 steps, 0 defects**. Scoped `node tools/rendercheck.mjs` with those five items and both assigned pages: exit 0, **7 files**, all frontmatter and math parsed under the real renderer/KaTeX. A `--help` probe of rendercheck unexpectedly began its default scan; its unscoped output was not used as evidence for this assignment.

Contracts and findings JSON parse successfully. The first final freshness assertion detected a further concurrent supplier correction, so the intermediate citation observation was updated to historical evidence with `observed_source: null`; no stale current-source hash is claimed. These mechanical checks supply formatting evidence only; no build gate, judging, publishing, push or engine transition was attempted.
