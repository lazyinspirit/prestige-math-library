# Step 3a reader report — batch 108

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

Assigned pages:

- `library/knot-theory/milnor-invariants-and-link-peripheral-nilpotent-quotients.md`
- `library/knot-theory/milnor-invariants-and-link-peripheral-nilpotent-quotients-examples.md`

All 22 assigned item bodies were read in manifest/dependency-level order:

`lem-classifying-maps-are-natural-under-group-homomorphisms`, `lem-h2-classifying-map-is-surjective`, `lem-regular-link-diagram-admits-normalized-height-realization`, `lem-simply-connected-hypersurface-complement-adds-free-generator`, `thm-homological-lhs-spectral-sequence-for-group-extensions`, `thm-five-term-homology-sequence-for-group-extensions`, `thm-stallings-integral-lower-central-isomorphism`, `def-lower-central-series-and-magnus-expansion-for-links`, `lem-link-diagram-upper-region-free-meridians`, `lem-link-nilpotent-quotient-generated-by-component-meridians`, `lem-magnus-commutator-degree-and-truncation`, `lem-magnus-conjugation-coefficients-use-shorter-subwords`, `thm-string-link-nilpotent-peripheral-identifications`, `def-milnor-integer-and-residue-invariants`, `thm-link-wirtinger-presentation-correctness`, `alg-truncated-milnor-invariants-from-based-diagram`, `lem-link-nilpotent-peripheral-presentation-from-diagram`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `thm-truncated-milnor-computation-terminates-and-is-correct`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `ex-borromean-link-milnor-triple-invariant`, and `cex-pairwise-linking-does-not-classify-links`.

The 33 direct dependency interfaces named by the assigned item `deps` were opened: `alg-oriented-linking-number-from-diagram`, `cor-classifying-space-of-a-discrete-group-is-a-k-g-one`, `cor-homotopic-maps-induce-the-same-map-on-singular-homology`, `def-axiom-of-choice`, `def-based-string-link-and-labeled-link-peripheral-system`, `def-countable-choice`, `def-dependent-choice`, `def-free-group`, `def-group-presentation`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`, `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed`, `lem-diagonal-bar-coinvariants-compute-group-homology`, `lem-hall-malcev-lower-central-commutators-add-weights`, `lem-link-peripheral-longitude-word-from-diagram`, `lem-link-wirtinger-crossing-ball-cover`, `lem-link-wirtinger-local-meridian-conjugacy`, `lem-string-link-exterior-homology-and-meridian-maps`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`, `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`, `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`, `thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence`, `thm-group-pushout-as-an-amalgamated-quotient`, `thm-homological-serre-spectral-sequence`, `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`, `thm-oriented-linking-number-scan-terminates-and-is-correct`, `thm-seifert-van-kampen`, `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set`, and `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`.

Additional dependency statements opened for the current-run draft supplier proofs included `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-excision-for-singular-homology`, `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `cor-homology-of-spheres`, `def-singular-chain-complex-and-singular-homology`, `thm-cellular-homology-computes-singular-homology`, `thm-fundamental-group-of-finite-wedge-of-circles`, and `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`. The published dependency `lem-hall-malcev-lower-central-commutators-add-weights` was also read through its proof.

## Page verdicts

- **A page `milnor-invariants-and-link-peripheral-nilpotent-quotients`: pass.** Its frontmatter inventory matches the 20 assigned A items, its six required pages exist, `page_layout: compact-v1` is present, and its Markdown body is empty.
- **B page `milnor-invariants-and-link-peripheral-nilpotent-quotients-examples`: pass.** Its frontmatter contains the two assigned examples in the correct placement list, requires the A page, preserves `page_layout: compact-v1`, and has an empty body.

## Repairs made

- `def-lower-central-series-and-magnus-expansion-for-links`: changed the truncated-ring quotient to `R_d = A_r / m^(d+1)`. The definition declares `m` in the formal-series ring `A_r`; the former polynomial-ring numerator did not contain that declared ideal. The corrected quotient still has the stated finite monomial basis and finite geometric inverses.
- `def-milnor-integer-and-residue-invariants`: made the string-link branch's condition $r\geq1$ explicit, matching the declared $F_r$ and the preceding lower-central/Magnus definition.
- `alg-truncated-milnor-invariants-from-based-diagram`: made $r\geq1$ an explicit input condition in both modes, matching its $F_r$ and truncated-ring prerequisites.
- `lem-magnus-commutator-degree-and-truncation`, `lem-magnus-conjugation-coefficients-use-shorter-subwords`, `lem-link-nilpotent-peripheral-presentation-from-diagram`, and `thm-link-wirtinger-presentation-correctness`: added the required proof-section `**Given:**` introductions. Their hypotheses and mathematical claims were already present in the Facts/Assumptions and statements.

The affected batch proof contracts were regenerated for all seven edited items. Current citation quotes were also regenerated for dependent contracts that quote the changed definitions: `lem-link-nilpotent-quotient-generated-by-component-meridians`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `thm-truncated-milnor-computation-terminates-and-is-correct`, and `ex-borromean-link-milnor-triple-invariant`. None of the seven edited items had a `verification.judge` record to remove. Reflow left six files unchanged and reflowed `lem-magnus-commutator-degree-and-truncation`; all seven one-file prechecks passed or reported the expected definition/algorithm result of 0 checked proofs and 0 failures. One final `node tools/proof-layout.mjs` command covered all seven changed item paths: 7 items, 15 steps, 0 defects.

Because the `Definition` changed, I checked its assigned direct and indirect consumers: `lem-magnus-commutator-degree-and-truncation`, `lem-magnus-conjugation-coefficients-use-shorter-subwords`, `lem-link-nilpotent-quotient-generated-by-component-meridians`, `thm-string-link-nilpotent-peripheral-identifications`, `def-milnor-integer-and-residue-invariants`, `lem-link-nilpotent-peripheral-presentation-from-diagram`, `alg-truncated-milnor-invariants-from-based-diagram`, `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `thm-truncated-milnor-computation-terminates-and-is-correct`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `ex-borromean-link-milnor-triple-invariant`, and `cex-pairwise-linking-does-not-classify-links`. No additional consumer math repair was needed.

The explicit $r\geq1$ conditions were checked against the algorithm's direct consumer `thm-truncated-milnor-computation-terminates-and-is-correct` and the direct/indirect consumers of `def-milnor-integer-and-residue-invariants`: `lem-milnor-basing-indeterminacy-and-self-crossing-scope`, `alg-truncated-milnor-invariants-from-based-diagram`, `thm-truncated-milnor-computation-terminates-and-is-correct`, `thm-milnor-invariants-isotopy-and-link-homotopy-scope`, `ex-borromean-link-milnor-triple-invariant`, and `cex-pairwise-linking-does-not-classify-links`. No other consumer changes were needed.

## Uneditable findings

The source IDs below are draft suppliers outside batch 108, except for the explicitly marked published dependency. Their defects are routed in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-108.json`.

1. `lem-string-link-exterior-homology-and-meridian-maps`, batch 64, **Proof 2.1 and 3.1 — unlicensed inference (fatal).** Both applications of excision assert that the closure of the excised complement lies in the interior of the subspace. In 2.1 that closure includes the outer boundary of `D^2`, which is not in `int_{D^2}(P)`; in 3.1 it includes the boundary of `D^2 x [0,1]`, which is not in `int(X_tau)`. The stated excision theorem requires this interior-containment hypothesis. Step 1.1 already gives the homotopy type needed to recover the punctured-disk homology in 2.1; the exterior calculation in 3.1 still needs a valid relative-homology argument, such as a boundary-collar/relative-cell proof with its excision conditions verified. Assigned consumer: `thm-string-link-nilpotent-peripheral-identifications`.

2. `lem-link-wirtinger-crossing-ball-cover`, batch 64, **Proof before 1.1 — ill-formed (nonfatal).** The numbered proof starts without the required `**Given:**` paragraph; the Facts section's Given line does not replace the proof-section introduction. Needed repair: add a concise proof-specific Given paragraph. Assigned consumer: `lem-link-diagram-upper-region-free-meridians`.

3. `lem-link-wirtinger-local-meridian-conjugacy`, batch 64, **Proof before 1.1 — ill-formed (nonfatal).** The numbered proof starts without the required proof-section `**Given:**` paragraph. Needed repair: add a concise proof-specific Given paragraph. Assigned consumer: `thm-link-wirtinger-presentation-correctness`.

4. `lem-link-peripheral-longitude-word-from-diagram`, batch 64, **Proof before 1.1 — ill-formed (nonfatal).** The numbered proof starts without the required proof-section `**Given:**` paragraph. Needed repair: add a concise proof-specific Given paragraph. Assigned consumer: `def-milnor-integer-and-residue-invariants`.

5. `lem-linking-number-even-sum-and-reidemeister-invariance`, batch 58, **Proof before 1.1 — ill-formed (nonfatal).** The numbered proof starts without the required proof-section `**Given:**` paragraph. Needed repair: add a concise proof-specific Given paragraph. Assigned consumer: `ex-borromean-link-milnor-triple-invariant`.

6. `thm-oriented-linking-number-scan-terminates-and-is-correct`, batch 58, **Proof before 1.1 — ill-formed (nonfatal).** The numbered proof starts without the required proof-section `**Given:**` paragraph. Needed repair: add a concise proof-specific Given paragraph. Assigned consumer: `ex-borromean-link-milnor-triple-invariant`.

7. `lem-hall-malcev-lower-central-commutators-add-weights`, **published dependency**, **Proof before 1.1 — ill-formed (nonfatal).** Its published proof begins directly with numbered step 1.1 and has no proof-section `**Given:**` paragraph. This is a format defect; the conclusion used by the assigned item is stated explicitly. Assigned consumer: `lem-link-nilpotent-quotient-generated-by-component-meridians`.

## Diagram and source review

The six relevant TikZ diagrams were checked against their text and conventions: the oriented crossing-sign determinant sketch; both local-meridian-conjugacy sketches; the punctured-disk access-path sketch; the upper-region vertical-sheet cross-section; and the assigned Borromean braid. The braid levels match the stated bottom-to-top order for the right-stacking convention, the component-position sequence returns to `(1,2,3)`, and each mixed pair has opposite signs. No diagram repair or added diagram was needed.

For mathematical context, McCleary's *Nontrivial Fundamental Groups*, Theorems 8bis.14 and 8bis.16 (printed pp. 343–344, PDF pp. 14–15), states the group-extension five-term sequence and the `H_1`-isomorphism/`H_2`-epimorphism criterion for finite lower-central quotients; the local claims match those hypotheses and conclusions. Hatcher, *Algebraic Topology*, §4.3, p. 408, states that the homotopy fiber of a map between CW complexes has CW homotopy type, as used in the LHS proof. MathWorld's “Braid Word” table (lines 21–24) lists the exact word `(sigma_1^{-1} sigma_2)^3` for the Borromean rings. I read these cited passages; I did not read the complete Milnor or Stees works.

## Blockers and coverage limits

There is no batch-108 blocker. The live run is still at Step 3a; at the final status check it reported one unrelated blocker, `3a-split` batch 99 failed three times, with nothing currently in flight.

No dedicated rendered evidence bundle for batch 108 was present in the live run directory, so the review used the authored carriers and proof contracts. The four dependency-level-zero item bodies were opened before their published supplier interfaces; those interfaces were subsequently read before reviewing the higher-level consumers, so I cannot claim strict supplier-first ordering for those initial four reads. I reviewed the current statements/definitions of the published direct suppliers and the full relevant arguments of the draft suppliers named above, but did not recursively re-audit every transitive published supplier proof.
