# Step 7 adjudication — group a

Run: `phase-2-remaining-27`  
Batches: 11, 12, 13  
Status: in progress

This report is the task-authorized continuity record. Each completed item records the exact rejection, local evidence, dependency/source checks, decision, repair, focused validation, unresolved obligations, and next action. No judge, final adjudicator, or stage transition was run by this dispatch.

## Completed rejection adjudications

### `def-cartan-subalgebra-of-a-lie-algebra`

- Rejection tuple: `gpt-5.6-terra` / `f15116d62a5024a096510bfa613c328e0e306f5453434e45d870c1729e733d96`.
- Exact issue: the definition quantified only over finite-dimensional Lie algebras, but its following prose claimed the definition was stated for arbitrary Lie algebras. This is a direct internal scope contradiction, not a missing proof detail.
- Evidence read: `items/def-cartan-subalgebra-of-a-lie-algebra.md`; the two declared dependencies `def-normalizer-of-a-lie-subalgebra` and `def-lower-central-series-and-nilpotent-lie-algebra` are unaffected by the scope correction. No external source was needed to resolve the textual contradiction.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `d1e486d97395dc30538f71d58412b377bfc724d2086357e7d790994bf6f9b62c`.
- Repair: changed “arbitrary Lie algebras” to “arbitrary finite-dimensional Lie algebras”; no claim, dependency, page, manifest, or contract expansion.
- Post-edit guard: `02ed4ea1abc6acbf3172770caa6a22db84059ba4122a032e7b4869460118fa32`.
- Focused checks: item precheck (`0 checked, 0 failing`, definition has no proof) and item rendercheck passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-001`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`.

### `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`

- Rejection tuple: `gpt-5.6-terra` / `51b0dc8667e96cc73437485bc8a4d590b95d3273eb7aa272580b8beea7dcd434`.
- Exact issue: fact L1 attributed unconditional existence of the additive Jordan–Chevalley decomposition of `ad_x` to `lem-jordan-chevalley-parts-agree-under-adjoint-representation`, whose Statement clause (ii) is conditional on such a decomposition already being given. The proof used existence in step 1.1, so this was an inflated dependency citation.
- Evidence read: the complete consumer; the complete Statement and proof of `lem-jordan-chevalley-parts-agree-under-adjoint-representation`; the complete Statement and relevant interface of published `thm-additive-jordan-chevalley-decomposition`; and the page’s supplier remark `rem-additive-jordan-chevalley-is-supplied-by-x-two`. The latter two explicitly supply existence, uniqueness, commutation, semisimplicity, nilpotence, and polynomiality under AC.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `96dccbdb96892696f7b17411baea6d9fe567aad54e6acc2a52988ef8ad7a1237`.
- Repair: declared and cited `thm-additive-jordan-chevalley-decomposition` directly as L1; separated the adjoint-transfer lemma into L2 and the abstract definition into L3; updated both proof steps, Batch-11 manifest, Batch-11 proof contract, merged contract, and refreshed the unified frontier ledger. No same-frontier edge was added.
- Post-edit guard: `b058999643e4570009d16e0604120a59ede5a144157400569126ef980da011f3`.
- Focused checks: item precheck and rendercheck passed; focused strict proof-contract check passed after using the correct item ID; global depcheck ended `OK` with pre-existing warning inventory only.
- Defect ledger: appended `phase-2-remaining-27-step7-a-002`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-toral-and-maximal-toral-subalgebra`.

### `def-toral-and-maximal-toral-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `8976edfb0f9f297a792b965642fe4f496d4955969f0b3d06763f5cc70f27623a`.
- Exact issue: the definition quantified over an unrestricted complex Lie algebra but invoked the supplied notion of a semisimple endomorphism, whose definition explicitly assumes a finite-dimensional vector space. The term was therefore undefined on part of the stated domain.
- Evidence read: the complete consumer and the complete Definition of `def-semisimple-and-nilpotent-endomorphisms`. No external source was needed because the domain mismatch is explicit in the two current files.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `6fc430a60198ab5401da434074b372335e54401d68479fc32e0d31bb022c4a0c`.
- Repair: added the finite-dimensional hypothesis to the definition and synchronized the Batch-11 manifest plus all owned Batch-11/12 proof-contract quotations of this definition; then rebuilt the merged proof contract.
- Post-edit guard: `3f26ea092d0cde37cf11a5bce2452f540ce99978d504468b1977e901659babc4`.
- Focused checks: item precheck (`0 checked, 0 failing`) and rendercheck passed; the strict contract check for `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras` passed after all owned quote mirrors were synchronized.
- Defect ledger: appended `phase-2-remaining-27-step7-a-003`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras`.

### `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras`

- Rejection tuple: `gpt-5.6-terra` / `bf14c196e4a6c5e0e813f125ae3fb4cf92fae421a54af9421599e98dc379c21a`.
- Exact issue: L4 attributed `ad(x_s)=p(ad x)` to the internal Jordan-decomposition theorem. That theorem's public Statement identifies the two adjoints with the additive Jordan–Chevalley parts but does not state polynomiality, while step 1.3 crucially uses it.
- Evidence read: the complete consumer; the complete current Statement and proof of `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`; the complete Statement and relevant proof interface of published `thm-additive-jordan-chevalley-decomposition`; and `lem-jordan-chevalley-parts-agree-under-adjoint-representation` for the adjoint-transfer boundary.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `c668a7273e163169fa00502dbaa8e40062f5e61e2b777452ab4831ecc7e4b90f`.
- Repair: declared `thm-additive-jordan-chevalley-decomposition` directly, split L4's two supplied claims across their exact citations, and synchronized the Batch-11 manifest and proof contract; then rebuilt the aggregate contract and refreshed the unified frontier ledger.
- Post-edit guard: `ad83a650173d7779fb17fb0970faa8a3e0f7f9a644f7634d049395dee9b46bbb`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-004`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-brackets-of-root-spaces`.

### `prop-brackets-of-root-spaces`

- Rejection tuple: `gpt-5.6-terra` / `8400577dffcf82608a9f16012c6fb9c5124dfcd125bc138ac1989c792045c44c`.
- Exact issue: L1 cited only `def-derivation-of-a-lie-algebra`, whose own interface explicitly says that `ad_x` is an inner derivation only after its derivation law is established by the following proposition. Step 1.1 uses that deferred law.
- Evidence read: the complete consumer, the complete cited definition, and the complete Statement and Jacobi proof of published `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `b12c2b9ed2e12e8e3bea12f191f5fc0b8fc62b2a27acb773d61d40a95a522cd6`.
- Repair: declared and cited the exact adjoint-derivation proposition in L1, then synchronized the Batch-11 manifest and proof contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `96cd8af59bda5cbb98468d2b3a788c2861ef95e94681974d35b142c332b3a8fe`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-005`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `cor-opposite-root-spaces-pair-nondegenerately`.

### `cor-opposite-root-spaces-pair-nondegenerately`

- Rejection tuple: `gpt-5.6-terra` / `5ea66c523908ea02d3ea172e6f53128281069a35a95ff8031422715f30fc277f`.
- Exact issue: L2 bundled global nondegeneracy of the Killing form with the root-decomposition and root-orthogonality suppliers. Neither supplier's public Statement asserts global nondegeneracy, and step 1.1 crucially uses it to choose a vector pairing nontrivially with a nonzero root vector.
- Evidence read: the complete consumer, the complete Statements and proofs of `prop-killing-form-orthogonality-of-root-spaces` and `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`, and the complete Statement of published `thm-cartans-semisimplicity-criterion`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `ded35a4ab8351986fdadeaa370199643b72c748eabdfc484647bcae5db7dd960`.
- Repair: declared and cited `thm-cartans-semisimplicity-criterion` for global nondegeneracy, removed the inflated L2 contract attribution, synchronized the Batch-11 manifest and proof contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `4bc376c7a0a51531fe417152d04a759bb49dd3dc2a2747935e43f32cec44e116`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-006`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`.

### `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `6985c2d4ccc660400aa434eadf1f4b9f939b2a0c6819b687c6553b305c764c9f`.
- Exact issue: step 1.1 replaced the invariant-form identity `B([e,f],H)=B(e,[f,H])` by `B(e,[H,f])`; this reverses the sign. The displayed identity `[e,f]=-B(e,f)H_alpha` was false even though the proposition's line-equality conclusion remained true.
- Evidence read: the complete consumer and its cited invariant trace-form statement; the sign was also independently identified by Step-6 warning `s8a-504d6f91bba7d13a5818352d`.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `787caf02a0dc7270ef45bb2ea3c25c48703afae943742128390c27fc874ab421`.
- Repair: used `[f,H]=alpha(H)f` in the invariant-form identity and changed both occurrences of the scalar multiple to `[e,f]=B(e,f)H_alpha`; synchronized the Batch-11 proof contract.
- Post-edit guard: `ce600b521281df8c9dcbe64efe5611f5cf51551815288fd52ae112e97a71d239`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Reader warning: `s8a-504d6f91bba7d13a5818352d` was dispositioned `covered_by_rejection` against this exact confirmed-fatal tuple.
- Defect ledger: appended `phase-2-remaining-27-step7-a-007`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-root-sl-two-triple`.

### `thm-root-sl-two-triple`

- Rejection tuple: `gpt-5.6-terra` / `dc0e6be7844d02f452a0330aace6a852960f794b66df10b3434358a090117856`.
- Exact issue: L2 asserted the false formula `[x,y]=-B(x,y)H_alpha`, and step 1.1 chose `B(e,f)=-2/alpha(H_alpha)`. Under the correct positive formula that choice produces `-h_alpha`, not the theorem's required `h_alpha`.
- Evidence read: the complete consumer; the current line-equality supplier; the exact invariant trace-form and nondegenerate-Cartan-restriction suppliers; the Killing-dual and coroot definitions; and the independent Step-6 warning `s8a-d1d94383483c8b5b570d7e11`.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `3fbc26f22ddfe21ad39c907059bc7283b42e0e4137db6ef7328f7a03c57bc536`.
- Repair: removed the unsupported scalar formula from L2, declared direct invariance/nondegeneracy dependencies, derived `[e,f]=B(e,f)H_alpha` in step 2.1, and selected `f` with the positive normalization. Synchronized the Batch-11 manifest and contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `92c22d078d5aaf47a674750cbfb1e9e446d194d629ba472eebe30437450d788e`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract check passed after placing the new L2 citation rows in this item's contract entry.
- Reader warning: `s8a-d1d94383483c8b5b570d7e11` was dispositioned `covered_by_rejection` against this exact confirmed-fatal tuple.
- Defect ledger: appended `phase-2-remaining-27-step7-a-008`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root`.

### `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root`

- Rejection tuple: `gpt-5.6-terra` / `a1cf052e9b9bf47c8fd96a32242470b3a126bffa5f80180aa0182051a3f81898`.
- Exact issue: L3 attributed “if gamma is a root, then 2 gamma is not a root” to `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`, whose public Statement asserts only one-dimensionality. Step 4.1 relied on the unstated reducedness claim.
- Evidence read: the complete consumer; the complete one-dimensional-root-space theorem; the root-triple, bracket, opposite-bracket, root-space-definition, Cartan-integer, and trace-of-products interfaces. No external source was needed because the needed trace argument is derivable from these exact library interfaces.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `10bd1a9613d40c8bf5a7d00dfd9b6efe076c84bd324d71d5423db370268334d1`.
- Repair: removed the inflated root-space-theorem citation and proved no doubled root locally. For each root gamma, the stable space `W_gamma = C e_gamma ⊕ C h_gamma ⊕ ⊕_{j≥1} g_{-j gamma}` has zero trace for `ad(h_gamma)`, forcing `sum j dim g_{-j gamma}=1`; applying the same argument to `-gamma` removes positive multiples. The owned manifest, strategy, contract, aggregate contract, and unified frontier ledger were synchronized.
- Post-edit guard: `e91db12ff40bf2bbaa3a8742be1c017ed03ae2da50caf19ffb2f8800ef627792`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed after adopting the checker’s canonical step numbering.
- Defect ledger: appended `phase-2-remaining-27-step7-a-009`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-root-and-root-space-relative-to-a-cartan-subalgebra`.

### `def-root-and-root-space-relative-to-a-cartan-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `c8a6b0eb9deb7846ee47983ae6729c5f38447c3d7a9a81acddd8cbe63c660314`.
- Exact issue: the definition imported maximal torality and the full finite root-space decomposition from two theorems whose Statements explicitly assume the Axiom of Choice, while this item had no Choice hypothesis. Those consequences were not part of the definition's manifest contract.
- Evidence read: the complete definition, both cited theorem Statements, their relevant proofs, the Batch-11 manifest entry, and this item's proof-contract entry.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `40e81d3a04e285de39d16b2a107781916ce4e538f4883e5b40b770b4c7cc4f4b`.
- Repair: removed the two redundant AC-dependent consequences, retained the exact root-space/root definitions and zero convention, removed the now-unused maximal-toral dependency, synchronized the Batch-11 manifest, and refreshed the unified frontier ledger.
- Post-edit guard: `a9de5c73ea6fd7cd80058ab027e87b5bbf2759786673621061f38da44ffe1021`.
- Focused checks: item precheck (`0 checked, 0 failing`), rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-010`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`.

### `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`

- Rejection tuple: `gpt-5.6-terra` / `aced76b70576cb2c444db7d7694e38b1806e53bc16a1975298b44cb80c9d0a6d`.
- Exact issue: L5 attributed opposite-root existence and nondegeneracy of the opposite-root pairing to the root-space orthogonality proposition and two definitions, none of whose public interfaces states both conclusions.
- Evidence read: the complete consumer and the complete Statements and relevant proofs of the three former suppliers and `cor-opposite-root-spaces-pair-nondegenerately`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `d148f1d9eb75035b5e1c3976a67e248716b0b03fb3bd400fd20e140389aac1e1`.
- Repair: replaced the inflated L5 supplier bundle with the exact opposite-root-pairing corollary, synchronized the Batch-11 manifest and proof contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `f57b5a1f48a280b2bb8e5e272c4efa94188492be9fa67923ae2bbcdd8ddb4d23`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-011`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-root-reflections-are-induced-by-inner-automorphisms`.

### `prop-root-reflections-are-induced-by-inner-automorphisms`

- Rejection tuple: `gpt-5.6-terra` / `7f4b5f261b773e7303773dc00cf6e5605beaef3386b8db04a5f150f3c168e5e4`.
- Exact issue: step 1.2 claimed that the constant finite sum `sum (ad_X)^k/k!` solved the defining exponential ODE; without powers of the parameter it has zero derivative and does not solve that ODE in general.
- Evidence read: the complete consumer and the exact exponential/linear-ODE suppliers L4 and L5.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `c840ab237e01b4124f5f94d62abdac001bc89a0a0b2eea1625666bda97e9ab44`.
- Repair: defined the polynomial curve with coefficients `t^k`, checked its differential equation and initial value, and evaluated the resulting identity at `t=1`; regenerated the Batch-11 and aggregate proof contracts.
- Post-edit guard: `ea7667908f1eeb022b429ea7f986861b2bb10ca755b6ffcc9693c67992f3980d`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-012`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple`.

### `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple`

- Rejection tuple: `gpt-5.6-terra` / `d8eb8030de3e339bea86b73a54cf722e4154a6ef66c11c9809606b090ae7e6a7`.
- Exact issue: the proposed witness belonged to `sl_2(C)`, but the original suppliers only defined that algebra and its brackets; no cited interface proved that it is semisimple, so membership in the statement's quantified class was unproved.
- Evidence read: the complete refutation, the complete `sl_2` definition, the published Killing-form example, and Cartan's semisimplicity criterion.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `03fe03216d361046f96e9bfefb5d16d38d92d0b92e403bc53e31060534c49750`.
- Repair: added an exact L1 chain from the published nondegenerate Killing-form computation through Cartan's criterion, cited L1 in the witness step, synchronized the Batch-11 manifest and proof contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `e2cf7c415ee15ca13d43cd1a94cf00c702db47a938f23a8a7bcb28a39bd0be8a`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-013`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `lem-killing-length-of-a-root-is-nonzero`.

### `lem-killing-length-of-a-root-is-nonzero`

- Rejection tuple: `gpt-5.6-terra` / `248bf1f92f00b3b36f40160f4ed2d0b7539c15d67d369f517727cc14b39fd7a9`.
- Exact issue: step 1.1 asserted the wrong-sign identity `z=-B(e,f)H_alpha`; invariance gives the positive coefficient. The same error was independently recorded by Step-6 warning `s8a-8a04705b005451a70517e6fa`.
- Evidence read: the complete lemma, its exact invariant-form and nondegenerate-Cartan-restriction suppliers, the repaired opposite-root bracket item, and the independent warning.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `dd72cd386474edfd2d8b767c499bb170d5e16c460fd2d38024a707a78dbe7d29`.
- Repair: derived `B(z,H)=alpha(H)B(e,f)` and hence `z=B(e,f)H_alpha` from invariance and nondegeneracy, then propagated the positive sign to `alpha(z)`; regenerated the Batch-11 and aggregate proof contracts.
- Post-edit guard: `15bf27198fde6c0534af527f3b23c4ae529f3cdb3ac044f6819710ad1b458631`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed after keeping the full derivation in canonical one-step form.
- Reader warning: `s8a-8a04705b005451a70517e6fa` was dispositioned `covered_by_rejection` against this exact confirmed-fatal tuple.
- Defect ledger: appended `phase-2-remaining-27-step7-a-014`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root`.

### `fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root`

- Rejection tuple: `gpt-5.6-terra` / `16fcf9c52c62ba92c52429809a5a3cd611d19e3e3f0796cb56f3bdb385045ead`.
- Exact issue: the first witness used `-alpha` as a root without a supplier. The facts also redundantly attributed reducedness to the one-dimensional-root-space theorem, which does not state it.
- Evidence read: the complete refutation, the root definition, the exact opposite-root corollary, the reducedness corollary, and the one-dimensional-root-space theorem.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `13291ef0d604119017835cc3c13f4af014edb5c4a8b1de3de0aa56d13d8ac3e1`.
- Repair: cited the exact opposite-root corollary, retained reducedness solely under its exact corollary, synchronized the Batch-11 manifest, and refreshed the unified frontier ledger. This false-statement item has an unlabelled Given block, so contract regeneration correctly skipped it; the unchanged strict entry passed.
- Post-edit guard: `48dc8e7000acc25e18811276b4a34fd0122c281276d88c0a1aa40b45845ae3c4`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-015`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-all-integer-multiples-of-a-root-are-roots`.

### `fs-all-integer-multiples-of-a-root-are-roots`

- Rejection tuple: `gpt-5.6-terra` / `661a9d04fd86345947f4e4cabc562dda803f370c4172d71a95c125d58e8cc896`.
- Exact issue: the facts claimed that one-dimensionality of root spaces implies `2alpha` is not a root, but that theorem's Statement contains no reducedness assertion.
- Evidence read: the complete refutation, the complete one-dimensional-root-space theorem, and the exact scalar-multiples corollary.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `c6d990daf90a336fc410a54cf11e32d12534058fc50970c29576f05e25195828`.
- Repair: attributed nonexistence of `2alpha` solely to the exact scalar-multiples corollary, removed the inflated dependency, synchronized the Batch-11 manifest, and refreshed the unified frontier ledger.
- Post-edit guard: `14c0bd519d89ea731dc00607d5aa5517804493b1d79cc580c83d81c839a29fab`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-016`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-finite-dimensional-representations-of-sl-two`.

### `thm-finite-dimensional-representations-of-sl-two`

- Rejection tuple: `gpt-5.6-terra` / `b7b920a490f93f24b8ec906153f12595161e749532f7e0ec905e42223366986d`.
- Exact issue: L2 attributed to the eigenvalue-existence corollary the false assertion that an endomorphism's eigenspaces are exactly its invariant subspaces; the cited Statement gives only eigenvalue existence, and the identity operator preserves many non-eigenspace subspaces.
- Evidence read: the complete theorem and the complete Statements and proofs of both L2 suppliers.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `5e1c15bda581a8dac01acb57a4d7695a4f49b88983e65199a42c344f24736e0e`.
- Repair: narrowed L2 to the exact eigenvalue-existence interface and retained the separate exact commuting-eigenspace statement; regenerated the Batch-11 and aggregate proof contracts.
- Post-edit guard: `3ce44c6d49962d2aed01650713d3cbb87ac720e4fdc1240802d77d706f2b8e12`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-017`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra`.

### `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `9ad7280a1c5b2cfc9034a951d8d050629a691bf9b6ee471ec1571dd962f092c5`.
- Exact issue: the final Statement sentence falsely described the adjoint zero-weight space as the center. The root decomposition gives `g_0=h`, whereas the proof establishes only that the common kernel of the nonzero roots inside `h` equals `Z(g) intersect h`.
- Evidence read: the complete proposition, its complete root-decomposition supplier, and its centerlessness supplier.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `a264123da0842c420dac72586b2ef52ce67542d18371a5f27e2fec9f2baf8407`.
- Repair: replaced the false zero-weight-space sentence by the exact common-root-kernel equality inside `h`; regenerated this item's contract and the two owned downstream citation mirrors in Batches 11 and 12, then rebuilt the aggregate contract.
- Post-edit guard: `0a2f10b283dcd15b7e40251b6693b07335d701a332492ac2766617eeb7043633`.
- Focused checks: direct item precheck and rendercheck passed; strict contract checks passed for this item and both downstream consumers.
- Defect ledger: appended `phase-2-remaining-27-step7-a-018`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-root-strings-in-type-a-two`.

### `ex-root-strings-in-type-a-two`

- Rejection tuple: `gpt-5.6-terra` / `78549b266a38b099e449a528c8845efbdc7abe598dfb52cf1ff9a88006a73f40`.
- Exact issue: for the alpha-string through `beta=alpha`, the example confused `beta+k alpha=(k+1)alpha` with `k alpha`, assigning `p=q=1` and `p-q=0`; the correct index interval is `{-2,-1,0}`. Step-6 warning `s8a-95c9c72fdb655c4bbe61b22b` independently found the same error.
- Evidence read: the complete example, the exact root-string theorem, its `sl_3` root supplier, and the independent warning.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `867da79b6629a7b391293dd65e23ab3cb4445463ce25ff51d75fc5bc57cf128d`.
- Repair: changed the Example and verification to `p=2`, `q=0`, `p-q=2=alpha(h_alpha)`, and synchronized the otherwise non-regenerable unlabelled-Given contract derivation and boundary rows manually before rebuilding the aggregate contract.
- Post-edit guard: `a12f0576e4286712865077a12f0f8556466a72008d484d084f46ea650647a464`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Reader warning: `s8a-95c9c72fdb655c4bbe61b22b` was dispositioned `covered_by_rejection` against this exact confirmed-fatal tuple.
- Defect ledger: appended `phase-2-remaining-27-step7-a-019`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-root-space-brackets-for-matrix-units`.

### `ex-root-space-brackets-for-matrix-units`

- Rejection tuple: `gpt-5.6-terra` / `8172f10caf540a0816648f3cca43db842a577e2dfb97758778ca639de5d90985`.
- Exact issue: step 2.1 claimed that `k != j` makes both Kronecker terms vanish, overlooking the case `l=i`, where `[E_ij,E_ki]=-E_kj` is nonzero and lies in the root space of the functional sum.
- Evidence read: the complete example and direct multiplication of all four index cases.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `1474656e8e0b7615be1ae5f0932aaad6e2072dea15875e610275a86d8e8e11f6`.
- Repair: replaced the incomplete symmetry assertion by the exhaustive four-case analysis, including the opposite-root case landing in `g_0=h`; manually synchronized the derivation and zero-boundary contract rows and rebuilt the aggregate contract.
- Post-edit guard: `85c2b89e08995af16acba52b55cdd7a6d9d05a746401a38b531824697935ebc8`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-020`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra`.

### `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `6d6bc466d59e789f82133ee4382108c557d423772e1edf78518488bbc919b0b9`.
- Exact issue: the finite-union proof chose a line using only the first hyperplane, so that line could be contained in a later hyperplane; the assertion that it met every later hyperplane in at most one point was false.
- Evidence read: the complete corollary, its regular-hyperplane definition and centralizer-dimension supplier, and the finite-dimensional linear argument.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `9dad4f5ab8ce7f2df2694ea10e9f733aff8dfde786904e5ea7d07098fd01f27e`.
- Repair: replaced the invalid line choice by induction on the number of subspaces, choosing `u` outside the first `k-1` and `v` outside the last so each subspace excludes at most one scalar; stated density through the nonzero principal-open polynomial, removed the now-unused common-kernel dependency, synchronized the manifest/contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `5cd8cd8d1ffe3ec32e38519b448c7841087c14fde00ee1f1dc0e8f6a6c1307d4`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-021`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-dimension-formula-from-roots`.

### `prop-dimension-formula-from-roots`

- Rejection tuple: `gpt-5.6-terra` / `fbb531f40383a1a5ef630eff6f59edc6ebcfed91c12e78882dd33c64bbb7dd97`.
- Exact issue: step 2.1 treated “the minimum-centralizer element lies in a Cartan subalgebra” as equivalent to its centralizer having the Cartan dimension. Membership gives only `h` contained in the centralizer, not equality, so the unconditional rank formula was not proved.
- Evidence read: the complete proposition, the exact regular-semisimple density supplier, the exact Cartan-centralizer theorem, and the Cartan-conjugacy theorem.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `894b4941f7f9d8a364145c626ccc909b6d18b3b93a7b135fa9f93a4721eb06e6`.
- Repair: chose a regular semisimple element supplied by the existing density lemma, used the exact theorem that its centralizer is Cartan, and combined regularity with Cartan conjugacy to prove `rank(g)=dim(h)`; synchronized the manifest, regenerated this contract and two owned downstream citation mirrors, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `8050294a031ba710cf856a1d60d6e6e259347d6d687079821f6553f7ba516c0d`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for this item and both downstream consumers.
- Defect ledger: appended `phase-2-remaining-27-step7-a-022`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data`.

### `fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data`

- Rejection tuple: `gpt-5.6-terra` / `a632ef5f53802132216cda1c8a636bcdcb54f8a16eebe769b64d9f95b028e11a`.
- Exact issue: the refutation established the witnesses' dimensions, common complexification, and nonisomorphism, but never proved that either real Lie algebra met the statement's semisimplicity hypothesis.
- Evidence read: the complete false-statement item, the published `sl_2` Killing-form computation, and the exact Cartan semisimplicity criterion.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `95cf18da83c41b81ce3b9bb04ed10a641a8e24de45b629b7abd829a712edca90`.
- Repair: added the real Killing matrices in the bases `(h,e,f)` and `(ih,e-f,i(e+f))`, proved both are nondegenerate, and applied Cartan's criterion before using the two algebras as witnesses; synchronized the page manifest and contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `d225925a66be34c4bcd0befee3398365c16181c7157690a46b7494fa658a6c02`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-023`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-cartan-subalgebra-and-roots-of-sl-two`.

### `ex-cartan-subalgebra-and-roots-of-sl-two`

- Rejection tuple: `gpt-5.6-terra` / `b0f915671491fce7eec25c5cb665d77b2b9bf18029a27912e557832716993fa3`.
- Exact issue: the example used the semisimple root-space definition and theorem for `sl_2(C)` without assuming or proving that `sl_2(C)` is semisimple; the cited matrix-algebra definition supplies no such fact.
- Evidence read: the complete example, its `sl_2` definition, the exact root-space definition/theorem, and Cartan's semisimplicity criterion.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `80fb433b4a678fbe2d112e540795c4d162c131d6c08c9ba8a74c01a840253dbe`.
- Repair: moved the direct Killing-form calculation ahead of the root argument, recorded the nonzero determinant, and applied Cartan's criterion before proving the Cartan and root-space claims; synchronized the page manifest and contracts, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `317e5ee3130f11c477c2ca4d6681221d2f551f7a03d3d5d1962f00d5cbb20f7c`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for the item and its owned consumer.
- Defect ledger: appended `phase-2-remaining-27-step7-a-024`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras`.

### `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `a662ae69d49b8e602881aaf781c3e21423c60ac51c048829ea823c25af3672e5`.
- Exact issue: the normalizer argument inferred that each individual bracket `[h,x_lambda]` lies in `t` merely because their sum `[h,x]` lies in `t`; that componentwise inference was not justified.
- Evidence read: the complete theorem and its simultaneous weight-space decomposition in step 2.1.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `e7bc05fcf4da8c540a2cbf1c506967876fb605fa2e9699b9fe24248261c48466`.
- Repair: expanded the whole bracket in the direct weight-space decomposition and used uniqueness of that decomposition to make every nonzero-weight component vanish, then chose an `h` detected by each nonzero functional; regenerated the item contract and aggregate contract.
- Post-edit guard: `1fa8c36432690fc2d67bfac67ce41db0f4050fac7cfc4b48e3f5158e3ffa5d41`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-025`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`.

### `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`

- Rejection tuple: `gpt-5.6-terra` / `9980b34d4712b5c7902c31d1ecb772cc88fab29727ffabed4834aa5cdc79ad5f`.
- Exact issue: the example applied the semisimple root-space definition and decomposition theorem to `sl_n(C)` without establishing the theorem's semisimplicity hypothesis.
- Evidence read: the complete example, the exact published Killing-form formula for `sl_n`, Cartan's semisimplicity criterion, and the root-space definition/theorem.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `2f2871edc4d3142140fec22e0f521dea9417d0f85d91c7cb505541e1108d53e1`.
- Repair: added the exact nondegenerate Killing-form supplier and Cartan criterion, proved semisimplicity before the Cartan/root analysis, and removed the premature assumption that root spaces were already available; synchronized the page manifest and owned contract, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `5b8bf0873fdbc6ad7eda320602d808741044657c6cc6985396ea332c776fa67b`.
- Focused checks: direct item precheck, rendercheck, and strict proof-contract check all passed; the owned dependent contract checks remain clean.
- Defect ledger: appended `phase-2-remaining-27-step7-a-026`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`.

### `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`

- Rejection tuple: `gpt-5.6-terra` / `d4d1384214c2b5ca6311ab25cab847fe619c1bdfc3d062fedc695dba003e3671`.
- Exact issue: the statement falsely required the highest root to pair strictly positively with every simple root, and step 4.1 made the invalid inference that a positive diagonal term plus nonpositive off-diagonal terms summing to zero forced every off-diagonal term to vanish. Type `A_3` supplies the boundary case `(theta,alpha_2)=0`.
- Evidence read: the complete proposition, its rank-two root arithmetic supplier, and the direct `A_3` computation.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `5aac60c69228c3213d87f9d4e10cac1ea49eec14c8380e8bc6833b2aa8efe680`.
- Repair: removed the false strict-pairing claim while retaining dominance, proved that at least one simple pairing is positive from `(theta,theta)>0`, and used the full support of both maximal roots to make their mutual inner product positive and complete uniqueness; regenerated this contract and the owned downstream citation mirrors and rebuilt the aggregate contract.
- Post-edit guard: `e17cc6a37f1db4713f2620b14d6b870d70b1bbbcf4b517c159b990d2155fd10e`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for this item and the checked downstream highest-weight consumer.
- Defect ledger: appended `phase-2-remaining-27-step7-a-027`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-reducible-and-irreducible-root-system`.

### `def-reducible-and-irreducible-root-system`

- Rejection tuple: `gpt-5.6-terra` / `c991b7e3d5368909cf58c2a9e2100ad756ac36daa5e5f0c58115072117f9c6b8`.
- Exact issue: the boundary note said the zero vector space carries no root system, but the cited axioms admit `Phi=empty` in `E=0`: it spans `E`, avoids zero, and satisfies the reflection, integrality, and reducedness clauses vacuously.
- Evidence read: the complete definition and the complete cited reduced crystallographic root-system definition.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `3b67aa02209c58e5bf8d957148e347665e4c74124a69aa26f7b5e779d1e1addb`.
- Repair: stated the zero-rank convention accurately, observed that the empty zero-rank system is irreducible because there is no decomposition into two nonzero subspaces, corrected the singleton explanation to use reflection closure, and replaced the ill-typed “root spaces” phrase by “roots”; regenerated all five owned downstream citation mirrors and rebuilt the aggregate contract.
- Post-edit guard: `9f669c4b8efea3d5f08266a163b434fdfbb293aee0471768de470a80953f7e48`.
- Focused checks: item rendercheck and strict item contract passed; all five regenerated downstream contracts passed strict checks. The direct precheck reported zero checkable proof files for this definition and no failure.
- Defect ledger: appended `phase-2-remaining-27-step7-a-028`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-open-and-closed-weyl-chambers`.

### `def-open-and-closed-weyl-chambers`

- Rejection tuple: `gpt-5.6-terra` / `fcad319af404676454e8f24e826632ea8f99e7cd11352c47b5f29a444df4842b`.
- Exact issue: defining a wall as any root hyperplane containing a boundary point makes every root hyperplane a wall of every chamber, because all root hyperplanes and all chamber closures contain the common vertex zero.
- Evidence read: the complete definition and its exact chamber/positive-root suppliers.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `ef838d7872f7ad370560c53531c9afd2f0d7ea2be706c2e1c271917af72c2b85`.
- Repair: defined a wall by a relatively open intersection with the root hyperplane, equivalently as the supporting hyperplane of a codimension-one face, and stated the rank-at-least-two origin boundary case explicitly; added the two direct dependencies omitted by the old metadata, synchronized the page manifest, regenerated owned downstream contracts, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `1c9c5c2c5d7006fcdf9d5da18b13cc1407b78b9928497a417715f48b2a2134f7`.
- Focused checks: item rendercheck and strict item contract passed; all regenerated owned downstream contracts passed strict checks. The direct precheck reported zero checkable proof files for this definition and no failure.
- Defect ledger: appended `phase-2-remaining-27-step7-a-029`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram`.

### `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram`

- Rejection tuple: `gpt-5.6-terra` / `c67d4e34429e1d9cd4afedca11bd4c47b3fbba29fab6f27f637bbe037d46e3b0`.
- Exact issue: step 1.1 inferred that the partial simple-root sum `gamma_U` was a root and subtracted it from `gamma`; the available rank-two/root-subtraction fact applies only to two roots, and `gamma_U` had not been shown to be one.
- Evidence read: the complete proposition, the positive/simple-root definition, reflection closure, signed simple-root coordinates, and the irreducible-component supplier.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `49636a6c10e7e5ba9d99beb3ea997262cd4d5b86e27a2f34d66041b9837e7c4b`.
- Repair: chose a least-height positive root with support on both disconnected vertex sets, decomposed it into positive roots supported on opposite sides, and reflected their orthogonal sum to obtain a root with mixed-sign simple coordinates, contradicting the signed-coordinate theorem; also rewrote the reverse implication with orthogonal projection onto the root-system components, synchronized direct dependencies and the page manifest, regenerated this item and three owned consumers, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `383c863fa9320ef2cf6a4996610daccb1d0b328afed335859ac72c8392dedcbe`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for this item and all three owned consumers.
- Defect ledger: appended `phase-2-remaining-27-step7-a-030`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-root-systems-decompose-uniquely-into-irreducible-components`.

### `prop-root-systems-decompose-uniquely-into-irreducible-components`

- Rejection tuple: `gpt-5.6-terra` / `6d6bcab579723391659fbfe802868aefed5bde27b2dfb458fe2f38b7db0157a7`.
- Exact issue: the statement announced uniqueness up to order while its comparison decomposition allowed reducible parts. For any reducible root system, the single-part decomposition `Psi_1=Phi` meets those displayed conditions but is not the irreducible decomposition up to order; the proof supplied irreducibility only conditionally in its last step.
- Evidence read: the complete proposition and its reducible/irreducible definition, including the zero-rank convention already repaired.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `481e88ce0dd79bdda6740924b920e9bbdf3f086d8b75bc39271bf49a2186e419`.
- Repair: separated the valid general coarsening statement from the uniqueness conclusion and required all comparison parts to be irreducible for equality up to order; regenerated this item and all four owned consumers and rebuilt the aggregate contract.
- Post-edit guard: `b7c8ea3bea0c9cb10d8e69ba165ff4e7c6fe5179980c12663b2ceea5e0ed18c4`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for this item and all four owned consumers.
- Defect ledger: appended `phase-2-remaining-27-step7-a-031`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-classification-of-irreducible-reduced-crystallographic-root-systems`.

### `thm-classification-of-irreducible-reduced-crystallographic-root-systems`

- Rejection tuple: `gpt-5.6-terra` / `a1f240916ed82c200982bba875350da3a8502480b491d464c5dade14a3ab54be`.
- Exact issue: step 1.4 used non-equivalence of the two chosen Cartan matrices to exclude only a based isomorphism. An unbased root-system isomorphism need not preserve those chosen bases, so the claimed `B_n`/`C_n` nonisomorphism for `n>=3` was not proved.
- Evidence read: the complete classification theorem, the exact root-system isomorphism definition, the based Cartan-matrix theorem, and Weyl transitivity on bases.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `42a050641b1875eaa294adeb1f973b2f6413d0de938bb51f78305f29d28385c6`.
- Repair: proved that an arbitrary root-system isomorphism transports a base to a base, used a target Weyl element to carry that image base to the standard base, and then reduced the putative isomorphism to a simultaneous row-and-column permutation of the `B_n` and `C_n` Cartan matrices, which the oriented end edge excludes for `n>=3`; synchronized dependencies and the page manifest, regenerated this item and five owned consumers, rebuilt the aggregate contract, and refreshed the unified frontier ledger.
- Post-edit guard: `630029e425fe8ac5f92e36580a6a21e4a755e717cb598017b90d29250be4da67`.
- Focused checks: direct item precheck and rendercheck passed; strict proof-contract checks passed for this item and all five owned consumers.
- Defect ledger: appended `phase-2-remaining-27-step7-a-032`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`.

### `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`

- Rejection tuple: `gpt-5.6-terra` / `5bb4470fedf972ab77e21e117fa90832e1897cc2d32515789b1eee78172803c9`.
- Exact issue: the displayed matrix of a simple reflection transposed the Cartan-matrix indices: with row index `j` and column index `k`, the coefficient is `delta_jk-a_ik delta_ji`. Full-item review also found that the preceding descent subtracted one simple root but then called that operation a reflection, and that the final scalar rescaling was incorrectly written as multiplication by `lambda^2`.
- Evidence read: the complete theorem, its exact simple-root basis and reflection-formula suppliers, and the current finite-type Cartan-matrix statement. The reflection descent and matrix entries were checked directly on every basis vector.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `6f852c92e1cb5597b2cb0212c6871d0bf88f7b3cbd3f20b7f281908c3bbc9c14`.
- Repair: used the actual reflection `s_i(gamma)=gamma-m alpha_i` with positive integral `m` to decrease height, corrected the matrix entry to `delta_jk-a_ik delta_ji`, and corrected componentwise inner-product rescaling from `lambda^2` to `lambda`; removed the now-unused rank-two fact, synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, and refreshed the unified frontier ledger.
- Post-edit guard: `c3d40a424749759bb45de98feffe0d03d44eb9d2f8a93a51ad44d82a76d484fa`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed after canonical step renumbering.
- Defect ledger: appended `phase-2-remaining-27-step7-a-033`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-free-lie-algebra-on-a-vector-space`.

### `def-free-lie-algebra-on-a-vector-space`

- Rejection tuple: `gpt-5.6-terra` / `bf997cf85a903685577eea1cdd3499362ea85efa567ce8bb4f277df0373a3de8`.
- Exact issue: the definition claimed `L(V)` is infinite-dimensional for every nonzero `V`, but for one generator antisymmetry kills every bracket and `L(V)=V` is one-dimensional.
- Evidence read: the complete definition and the tensor-commutator construction; the one-generator case was evaluated directly.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `72b9bec97f15fd5bc82eae3b34a6e1a2c0f6c01ff08bac7228d744567af665ed`.
- Repair: replaced the false blanket claim with the exact boundary cases `L(0)=0`, `L(V)=V` for `dim V=1`, and infinite-dimensionality for `dim V>=2`; regenerated the owned universal-property consumer and aggregate contract.
- Post-edit guard: `86c7757007a24e85f5a4201f3bde10349cdc9bd9da76c2256bf31b0244c065c3`.
- Focused checks: definition precheck completed without a checkable proof, rendercheck passed, and the strict owned consumer contract passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-034`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unresolved rejection in ledger order.

### `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`

- Rejection tuple: `gpt-5.6-terra` / `ef171e582285ea3d097a572c8f6c34cb9e5d9fe294b0a22db4d080a0cbce3c18`.
- Exact issue: L2 falsely said points of every Weyl translate of the fundamental chamber pair positively with every root in the fixed positive system; a simple-reflection translate has negative pairing with that simple root.
- Evidence read: the complete theorem and the exact repaired chamber definition; the sign was checked directly on `s_i(C_+)`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `f3d53adbbaa9c124a57a8ea414d80e13fd03f27b1168750bfa4b8a5ce96cd13a`.
- Repair: restricted L2's positivity assertion to the fundamental chamber, which is the only form used in the freeness argument; regenerated the item and aggregate contracts.
- Post-edit guard: `6316f1b4975257f5abe27a1b0c016b4acb12b913a1da6e51d01b980a8a25d2f2`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-035`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-universal-property-of-the-free-lie-algebra`.

### `thm-universal-property-of-the-free-lie-algebra`

- Rejection tuple: `gpt-5.6-terra` / `b418cda8b32f9bc112f9809ce85b838cb4e85e81c101527dc0cfd7d008234522`.
- Exact issue: L3 attributed both injectivity of the canonical map into `U(g)` and its commutator identity to the PBW theorem, whose Statement supplies neither without first supplying an ordered basis; both assertions are essential to steps 1.1-2.1.
- Evidence read: the complete theorem, the exact current PBW Statement, published `cor-every-vector-space-has-a-basis`, published `cor-the-enveloping-algebra-has-no-hidden-linear-relations-in-degree-one`, and published `lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `17af5cd613e6f1031d613b14626932c40e04ef66e78a0635953b25494e35795f`.
- Repair: made the Axiom-of-Choice basis selection explicit, cited the exact degree-one PBW injectivity corollary and exact commutator lemma separately, rewrote the extension as extending `iota_g circle f`, synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, and refreshed the unified frontier ledger.
- Post-edit guard: `3f9d179ed0139f9451504dfc65c1723d26ff58621889f8d6f6a39be98e354b08`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-036`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers`.

### `prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers`

- Rejection tuple: `gpt-5.6-terra` / `b23bfa33a5bacd15d21a45c5083d669d5e2d43288520b47038a41c7c2ba0bf80`.
- Exact issue: step 1.3 called all nonnegative integral combinations of a base, plus zero, the positive system; that set contains zero and generally contains vectors that are not roots.
- Evidence read: the complete proposition and the exact definition and coordinate theorem for positive roots and simple bases.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `ce7b9d91d4eeba1aae24a92013af7f4b1512d4aac7fe13dcf1a5170b32dbe3e6`.
- Repair: intersected the nonnegative integral cone with the root set and removed zero; regenerated the item and aggregate contracts.
- Post-edit guard: `e74ff1618412aff4a4b727dabdeb43224690293bd3cd1e54c5bdbb41d2ccc861`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-037`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`.

### `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`

- Rejection tuple: `gpt-5.6-terra` / `7f5d8fd532d65a63a568fd9e3ef50571667683a220a75e2e13563e4868743c6f`.
- Exact issue: L1 attributed uniqueness up to order to the simple-ideal decomposition theorem, whose Statement supplies only existence; both directions of the classification used the unsupported uniqueness assertion.
- Evidence read: the complete corollary, the exact decomposition theorem, and published `prop-ideals-and-quotients-of-semisimple-lie-algebras`, which says every ideal is a sum of factors relative to any fixed simple-ideal decomposition.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `33f18370be6ab1a01027f2cd8f93dccb858b240b515e4077c71bdfea14fe8326`.
- Repair: derived uniqueness directly by expressing each simple factor from one decomposition as a subfamily sum in the other and using simplicity to force a singleton; added the exact ideals supplier, synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, refreshed the frontier ledger, and adopted canonical proof-step order.
- Post-edit guard: `51d59c45bcaeb1103343418f0ffdb185c92bab4e6f4ea2bf49e0cba0f31a08a1`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-038`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: the cited simple-algebra classification has a separate owned rejection and will be adjudicated on its own evidence. Next action is `ex-cartan-subalgebras-of-a-direct-sum`.

### `ex-cartan-subalgebras-of-a-direct-sum`

- Rejection tuple: `gpt-5.6-terra` / `1bca1409802ec2f832291ae2e2ce6be53974cd1660936f216dd9b1a8d3448e64`.
- Exact issue: the converse invoked the Cartan-equals-maximal-toral theorem, whose Statement explicitly assumes the Axiom of Choice, but the example did not assume it.
- Evidence read: the complete example and the exact Cartan/maximal-toral theorem. Full-item review also found that step 2.1 named `t_1` even while arguing for an arbitrary factor `i`, leaving the `i=2` case ill-formed.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `c8b9d9f9e093911ec6f86b7a3f3ff4e809e7a4cc030a2ccfa2ff4f761b90548c`.
- Repair: added the explicit Choice assumption and dependency, cited it in both uses of the Cartan/maximal-toral theorem, and rewrote the maximality argument uniformly by replacing the `i`th summand; synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `2257a71c90ef7ff6279e110024c859c25a1b5ede12993a573f725e9150f01174`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: appended `phase-2-remaining-27-step7-a-039`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-dimensions-of-the-exceptional-simple-lie-algebras`.

### `prop-dimensions-of-the-exceptional-simple-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `94725677c9248196ed61ec41340b431f237c983d4290b27f6cfe978f8ed6c306`.
- Exact issue: fact L1 attributed the exceptional root counts and ranks to `thm-existence-of-each-classified-root-system`, whose Statement supplies only existence and Dynkin type, not those numerical counts.
- Evidence read: the complete proposition and the exact internal supplier Statement; Etingof, MIT 18.745, Example 21.9, which explicitly lists the twelve roots of $G_2$; and Definitions 23.8, 23.11, 23.14 and 23.15, whose explicit models count $F_4,E_8,E_7,E_6$ as $48,240,126,72$ roots in ranks $4,8,7,6$.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `b512226fac3b41c227033224db6ab4a7440cd719878f9656c6588de541e83eb1`.
- Repair: replaced the inflated internal citation by the exact source-grounded explicit-model fact, removed the unused existence dependency, corrected the source locator, synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, and refreshed the unified frontier ledger.
- Post-edit guard: `8e2d07d2d1b0a57a6839a39d3552bf0773607e46b8e798f7e84abfb96aa5d4a0`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-040`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-rank-two-root-system-classification`.

### `thm-rank-two-root-system-classification`

- Rejection tuple: `gpt-5.6-terra` / `b94d952535924bacc82ca1f96f456b039a1e36c0b61fed82df4d0c2421ac6dec`.
- Exact judge issue: step 4.2(d) applied the nonproportional-root string theorem to the allowed boundary case $\gamma=\alpha_1$, thereby claiming $0\in\Phi$. Full-item review of that calculation also found that the displayed Cartan-integer subscripts were reversed relative to the item's own definition.
- Independent Step-6 warning: `s8a-ca3e35230c0f4eba4b54efcc` correctly identified that Statement (i) transposed every unequal-length Cartan pair. With $|\alpha|\ge|\beta|$, the first Cartan integer has the larger denominator and hence the smaller absolute value.
- Evidence read: the complete theorem, especially its definitions, steps 1.2, 2.1, 3.2 and 4.2; its own calculations already derive $|n_{\alpha\beta}|=1$ and $|n_{\beta\alpha}|=2$ or $3$ in the unequal-length cases. No external source was needed.
- Decisions: the judge rejection is `confirmed_fatal` (`logic`) and the independent reader warning is separately `confirmed_fatal` (`logic`), both against pre-edit guard `f5716626bd13ea94d1db8c9a4466c07f2169aac343cdb437f74eaeaffbd962cd`.
- Repair: corrected the Statement pairs to $(1,2),(-1,-2),(1,3),(-1,-3)$; corrected the step-4.2 Cartan-integer subscripts; and excluded $\gamma=\alpha_i$ before invoking the nonproportional-root string theorem. Regenerated the item and aggregate contracts.
- Post-edit guard: `ac3cf023bc6967575540c18bdc5cc502c68c1e0845b85b5eb041d8e6307ad2d8`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append targets `phase-2-remaining-27-step7-a-041` for the judge rejection and `phase-2-remaining-27-step7-a-042` for the independently fatal reader warning.
- Unresolved obligations: none for this item. Next action is `prop-weyl-length-equals-positive-root-inversion-number`.

### `prop-weyl-length-equals-positive-root-inversion-number`

- Rejection tuple: `gpt-5.6-terra` / `533ea329b8a698066297bd004e83bae6f68a03e54ac235d8ea64bb35ac0e78e3`.
- Exact issue: step 2.1 called a root pairing positively with every point of the negative chamber positive; writing such a point as $-x$ shows instead that the negative of the root is positive. The written inference therefore did not establish $w_0(\Phi^+)\subseteq\Phi^-$.
- Evidence read: the complete proposition and the exact definitions of positive/negative chambers and inversion sets. Full-item review also found that L1 wrote the wrong Cartan-integer subscript and purported to treat an arbitrary positive root as a simple root, while L3 did not derive its separating-hyperplane count.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `f2b3b5bdad361eb87f51f935946916b2e7bb0236b19c48588d64fbad4ea0c55a`.
- Repair: corrected the negative-chamber sign; removed malformed L1 and its now-unused dependencies; derived $|N(w^{-1})|=|N(w)|$ by the bijection $\alpha\mapsto-w\alpha$; and rewrote the chamber chain as the correct induction across transported simple walls. Synchronized the Batch-11 manifest, regenerated the item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `5377bddf3f1d096b78095a7dbc5e349314d76af3ea7e0a2748ad1b48e47ee175`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-043`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-cartan-killing-classification-of-complex-simple-lie-algebras`.

### `thm-cartan-killing-classification-of-complex-simple-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `225f38631c2fa1f3ad062e1eed05a9db17626497cff90580d76d82c841cc411f`.
- Exact issue: step 1.3 treated `thm-classification-of-irreducible-reduced-crystallographic-root-systems` as proving that a root system of every listed type exists, although its Statement only classifies an already-given irreducible root system.
- Evidence read: the complete theorem; the exact classification and existence supplier Statements; the complete current root-system theorem; and Knapp, Chapter II, Proposition 2.44 (printed pp. 151–152), which states and proves that the root system of a complex semisimple Lie algebra is irreducible exactly when the algebra is simple.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `7b17066267514577bfbe42d33f031b0f3b84b6b6cc1a435576fd09b53c2dd8d7`.
- Repair: added and cited `thm-existence-of-each-classified-root-system` for the missing existence step; separated classification, existence, and Lie-algebra realization into exact facts; and replaced the inflated internal attribution of simple iff irreducible by the verified Knapp proposition. Synchronized the Batch-11 manifest and source locator, regenerated the item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `076f10a021a99420caa0e6529821bd9f027ac8db20a7dd3edb0b77fa9800f4ce`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-044`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: the newly cited root-system existence theorem has its own targeted rejection and will be adjudicated independently. Next action is `thm-existence-of-each-classified-root-system`.

### `thm-existence-of-each-classified-root-system`

- Rejection tuple: `gpt-5.6-terra` / `be85cf9907f16f762fb8623632898e1783ab68bb92432eed8c276b7e6e976691`.
- Exact issue: L1 attributed the theorem that simple roots of a positive system form a basis to two definitions that state only the root-system and diagram conventions. The proof then used the unsupported assertion to identify the displayed coordinate vectors as simple roots and hence to claim the named Dynkin diagrams.
- Evidence read: the complete existence theorem; the exact two cited definitions; the complete Statement and proof of `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`; and Etingof, Lecture 23, Exercises 23.10 and 23.13, which identify the displayed $F_4$ and $E_8$ simple positive roots for the stated polarizations and compute their Cartan matrices.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `9f25aab334e7ba39ced8a87b58bb9b02ee632f44603014f7c94d118946922f14`.
- Repair: cited the exact simple-root basis theorem; explicitly identified positive roots or their nonnegative expansions for $A_n,B_n,C_n,D_n,G_2$; source-grounded the $F_4,E_8$ simple systems; corrected the $A_n$ construction from the erroneous $A_{n-1}$ indexing in $\mathbb R^n$ to $A_n$ in $\mathbb R^{n+1}$, including the $n=1$ boundary; and completed the missing mixed-case explanation in the $E_8$ reflection check. Synchronized the Batch-11 manifest and source metadata, regenerated the item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `ed500697e47e6f53cde509358e6f711896accb5ef327f0971dd3124a53bd95bc`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-045`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-every-connected-finite-graph-is-a-dynkin-diagram`.

### `fs-every-connected-finite-graph-is-a-dynkin-diagram`

- Rejection tuple: `gpt-5.6-terra` / `1ed7f930875acd69a18060af17661bc1c560dfcd692905c2ceef503d1bc3db13`.
- Exact issue: L1 restated the controlled-tree lemma as saying every finite-type Cartan matrix has a tree diagram, dropping the supplier's irreducibility/connectedness hypothesis. Reducible finite-type systems can have disconnected forest diagrams.
- Evidence read: the complete false-statement item and the exact controlled-tree lemma Statement. The cycle-matrix counterexample itself is unaffected and was checked at $m=3$ as well as general $m\ge3$.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `065eedb266e061dbb5f897e4185accf74ec0b49daab69b9c9523bcf7db0c28c4`.
- Repair: restored the exact qualification “when the root system is irreducible, equivalently when its diagram is connected”; regenerated the item and aggregate contracts.
- Post-edit guard: `904e2b7848815c6f97931da8f468470624b238934b41bfe9377fd23bfee1c8c9`.
- Focused checks: direct counterexample precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-046`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `rem-dynkin-diagrams-do-not-classify-global-lie-groups`.

### `rem-dynkin-diagrams-do-not-classify-global-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `576748258282c0616ecd4c7980ef2b4c8e3f02d4456a382880cf18a1b2a4d643`.
- Exact issue: the remark said that a Dynkin diagram classifies the complex semisimple Lie algebra but cited only the classification of complex simple Lie algebras by connected diagrams. That supplier does not state the finite-direct-sum classification.
- Evidence read: the complete remark; the exact simple-algebra classification Statement; and the exact semisimple classification corollary, which uses finite disjoint unions with multiplicity.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `162808fedcf0155e880b12b3353affdf02b3d058dbca411d58a69b4e2dd8d4ac`.
- Repair: distinguished connected diagrams for simple algebras from finite disjoint unions for semisimple algebras and cited the exact semisimple corollary; synchronized the Batch-11 manifest, refreshed the frontier ledger, and rebuilt the aggregate contract. The remark has no proof body, so its precheck correctly reports zero proof-like sections.
- Post-edit guard: `f4420ca692e7eae9789fc8ff9a8a76de73ddbc4a8f19ed52a1f56ec913e96b6c`.
- Focused checks: item rendercheck and strict Batch-11 proof-contract check passed; precheck reported `0 checked, 0 failing` as expected for a remark.
- Defect ledger: append target `phase-2-remaining-27-step7-a-047`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `def-classical-complex-matrix-lie-algebras`.

### `def-classical-complex-matrix-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `fccbebff70ead3d4262aacda8843383a031625b49853e0003c48277f16fa4407`.
- Exact issue: the displayed block solution for $\mathfrak{so}_{2n+1}$ declared both $u,w$ as $1\times n$ rows while placing $w$ in an $n\times1$ block, and its two off-diagonal transpose pairings did not solve $AJ+JA^T=0$.
- Evidence read: the complete definition and a direct $3\times3$ block multiplication with block sizes $1,n,n$. Full-definition review also found that the displayed expansion of $J[A,B]^T$ reversed the two products and that the final nonzero-properness claim needed $n\ge1$.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `12a63b55266687c46ca0a1d6b78e93b41512db16f08763177072028cc7dc548e`.
- Repair: replaced the odd block display by $\left(\begin{smallmatrix}0&u&-w^T\\w&a&b\\-u^T&c&-a^T\end{smallmatrix}\right)$ with $u$ a row and $w$ a column; corrected the commutator expansion to $JB^TA^T-JA^TB^T$; and imposed $n\ge1$ on the three form-preserving families and the nonzero-properness conclusion.
- Post-edit guard: `f0075d0d6741e1a9958ee91310f4845887ca17a7b6773a9de8c9280e28be4c96`.
- Focused checks: item rendercheck and strict Batch-11 proof-contract check passed; precheck reported `0 checked, 0 failing` as expected for a definition.
- Defect ledger: append target `phase-2-remaining-27-step7-a-048`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-root-system-a-one`.

### `ex-root-system-a-one`

- Rejection tuple: `gpt-5.6-terra` / `47c514b8a267fd6335eb2d83e6295d6e19138f3da82890a0bad8b5f8cdcea2c4`.
- Exact issue: the Statement called $\{\alpha\}$ the only base of $\Phi=\{\pm\alpha\}$, but the opposite positive system has base $\{-\alpha\}$.
- Evidence read: the complete example and the definitions of positive systems, bases, Weyl groups, and Cartan matrices. In rank one, the two choices of positive root give exactly the two one-element bases.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `dff0bc00a96d55c67384c69f604d0efab74ada9e819dcb4685011a4cba72a23c`.
- Repair: stated and proved that the two bases are $\{\alpha\}$ and $\{-\alpha\}$ and that either gives Cartan matrix $[2]`; regenerated the item and aggregate contracts.
- Post-edit guard: `8a68f912d212301097ddcd98a1b8db957f321f83f180acd5ec168d2f08429439`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-049`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-weyl-group-of-a-n-is-the-symmetric-group`.

### `ex-weyl-group-of-a-n-is-the-symmetric-group`

- Rejection tuple: `gpt-5.6-terra` / `b74eafb5f81ad6a790bcf3280b9d4a0f544bb50dc210acf6fb9f954e9c8d8511`.
- Exact issue: step 1.1 assigned Weyl-group generators to transpositions without proving that their relations were respected, while step 2.1 tested the action on ambient coordinate vectors even though the Weyl group acts on the sum-zero subspace.
- Evidence read: the complete example, the coordinate model of $A_n$, and the definition of the Weyl group. A direct reflection calculation on the sum-zero space identifies $s_{\varepsilon_i-\varepsilon_j}$ with the restricted coordinate transposition.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `e7e161cc3bb910166054819450af08a1c525566f0bc5e290d8846ee1c4907f27`.
- Repair: began with the existing coordinate-permutation homomorphism $\rho:S_{n+1}\to O(E)$, proved $W(A_n)=\rho(S_{n+1})$, and proved $\rho$ faithful from its action on all differences $\varepsilon_i-\varepsilon_j$; added the $n\ge1$ boundary and removed an unused dependency. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `5f0d80a0c6ee854ac4ee0c99cd69bd36a93b36ff102162755f0ab4f838621a41`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-050`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-classical-types-correspond-to-sl-so-and-sp`.

### `prop-classical-types-correspond-to-sl-so-and-sp`

- Rejection tuple: `gpt-5.6-terra` / `70103b493c3f5f665ff22179a8c3eabf6670bd04ce30599c84f8554712b3a890`.
- Exact issue: step 1.1 declared all listed $D_n$ root systems connected and all $\mathfrak{so}_{2n}$ simple, even though its own final step used $D_2=A_1\sqcup A_1$ and $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$.
- Evidence read: the complete proposition and its exact internal suppliers; Etingof, Remark 23.18, which records $D_2\cong A_1\sqcup A_1$, $D_3\cong A_3$, and $B_2\cong C_2$; and the coordinate root computations in Examples 20.12--20.14.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `98ae326379a6f7acbfde1877f3fa892398af50fa1b12c8d6536e239680b303e4`.
- Repair: stated the exact stable simple ranges $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $C_n$ ($n\ge3$), and $D_n$ ($n\ge4$); separated all low-rank cases; and proved $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$ by the faithful tensor-product action on two symplectic planes. Removed an unused existence dependency, synchronized the Batch-11 manifest, adopted canonical proof-step order, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `e4f8e5f74985c552c1b2eacd36c90e080ba827a17de2f2765577847fe819da82`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-051`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`.

### `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`

- Rejection tuple: `gpt-5.6-terra` / `4f34973fd3cd01300385f81c606f0061226f8f40528efc636fb09d751fa9a782`.
- Exact issue: L2 attributed the claims that $\mathfrak{su}(2)$ complexifies to $\mathfrak{sl}_2(\mathbb C)$ and that the latter has type $A_1$ to a false-statement interface and a generic root-system existence theorem, neither of which states those claims.
- Evidence read: the complete counterexample; the exact published $\operatorname{SU}(2)\to\operatorname{SO}(3)$ covering example; and the exact earlier computation of the diagonal Cartan subalgebra and two root spaces of $\mathfrak{sl}_2(\mathbb C)$.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `d5796146e5025c0fce45d3da044fa2fe2fca433262454da2c103f19df5c1301f`.
- Repair: computed directly that $ih,e-f,i(e+f)$ are a real basis of $\mathfrak{su}(2)$ and a complex basis of $\mathfrak{sl}_2(\mathbb C)$, then cited the exact $\mathfrak{sl}_2$ root computation for the $A_1$ diagram. Replaced the two unsupported dependencies, synchronized the Batch-11 manifest and source metadata, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `062ea4c20ce982b22f41a1837f487117a41a017c286da1cc68cbc7a08ec533da`.
- Focused checks: counterexample precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-052`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`.

### `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`

- Rejection tuple: `gpt-5.6-terra` / `dbfd910c6b969ea17ec3e94f1060e8bf5c616307b85b3202aed8637d376f191b`.
- Exact issue: step 1.2 killed only off-diagonal entries of the $a$-block, then falsely claimed that the defining form equation killed the independent $b,c$ and odd $u,w$ blocks.
- Evidence read: the complete proposition and the corrected classical block definitions. In the full ambient matrix representation, a Cartan element can be chosen with pairwise distinct entries $1,\dots,n,-1,\dots,-n$, with an additional zero in the odd case.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `31fec3a0bc2cf6e4ad0787b8175585002d7a5c3360661e849889b205ce7bb392`.
- Repair: chose one Cartan element with pairwise distinct full ambient diagonal entries; a normalizing commutator is both diagonal and zero on the diagonal, hence zero, so every off-diagonal matrix entry of the normalizer vanishes at once. The repair also stated the ambient simultaneous diagonalization argument correctly before restricting it to the invariant classical subalgebra. Regenerated item and aggregate contracts.
- Post-edit guard: `b4fafb86c499ea072f6605258c1293562737e58805b9c3fbccf4f3817d75f100`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-053`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-dynkin-diagram-duality-of-b-n-and-c-n`.

### `ex-dynkin-diagram-duality-of-b-n-and-c-n`

- Rejection tuple: `gpt-5.6-terra` / `7b58485e416945662f8b3b101fc9735e3b653dbc2e96518c84053f0669733de9`.
- Exact issue: no $n\ge2$ restriction was stated, although at $n=1$ there is no double edge and the proof's $\alpha_{n-1},\beta_{n-1}$ are undefined.
- Evidence read: the complete example, the Cartan-matrix and arrow definitions, and the duality proposition. The displayed calculation is correct exactly from rank two onward.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `1b2f480b2bfa4b61d3a51401ac16ea66f1a3462b2b5075b0d81a5c41a6100e1a`.
- Repair: added $n\ge2$ to the Example and Given data and synchronized the Batch-11 manifest and exact source locator; regenerated item and aggregate contracts.
- Post-edit guard: `9206bde818a4e757b10011270bdf791601d160b8a699f2d7ed92d5139d4f2295`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-054`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`.

### `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `d2758657af99c1074abd448591dd3c926f31326471844ad8e3c527ac5ac0f2f4`.
- Exact issue: the anti-diagonal matrix $S$ was called antisymmetric although $S^t=S$; moreover an invertible antisymmetric $5\times5$ matrix cannot exist.
- Evidence read: the complete example, the exact classical Killing-form and Cartan-criterion suppliers, the root-system theorem and isomorphism definition, and direct matrix calculations for both defining forms.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `bf931505e69118767e9f0d8f23f548afdf25789e38f6819e71fe5989df8f78b9`.
- Repair: identified $S$ as the symmetric Gram matrix and wrote its exact quadratic form; supplied semisimplicity; used a full distinct diagonal to prove both Cartans self-normalizing; corrected the orthogonal decomposition to include its zero-weight Cartan part; listed actual form-compatible symplectic root vectors; and proved the $B_2\to C_2$ map scales inner products by $2$, hence preserves every Cartan integer. Removed unused dependencies, added the exact needed suppliers, synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `b7f775d8a983bffeca9e5e177dd8c3833af416ef0ad56e8fc0e2d1807a93bf9b`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-055`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-classical-root-systems-in-euclidean-coordinates`.

### `ex-classical-root-systems-in-euclidean-coordinates`

- Rejection tuple: `gpt-5.6-terra` / `ce7b900ed824ab9306d3d05508ea983b4806f68426d74601049574b95f85d150`.
- Exact issue: L1 attributed the displayed coordinate models to an existence theorem whose Statement gives only existence by type, and the item supplied no range, making $D_1$ empty and nonspanning in $\mathbb R$.
- Evidence read: the complete example; the exact internal root-system definition and matrix-Lie-algebra root computation; Knapp, Chapter II, formulas (2.43) and (2.50); and Etingof, Example 21.18.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `3e08b5166215dd632b18bbb89c68f6c8235e5c71cb13002c26a6195de3d5a3d9`.
- Repair: imposed $n\ge2$; directly proved spanning, reducedness, reflection closure, and integrality for all four coordinate sets; distinguished the $D_2=A_1\sqcup A_1$ simple system; corrected the reflection-closure prose so single sign changes were not claimed to preserve $A$; and retained the exact supplier only for the matrix-Lie-algebra identification. Synchronized the Batch-11 manifest and source metadata, adopted canonical proof-step order, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `8d3e5cba3bf7053942a9fcbc7f3fca16f540ea4dac3c88b85cea50e82281b041`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-056`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`.

### `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `4368438df7a56066e515729e914a18edbc6c66c72fcfb04bdaf97368d5850627`.
- Exact issue: if $M_a$ is already the matrix of $\operatorname{ad}_{A_a}$, then the Killing form is $\operatorname{tr}(M_aM_b)$, not $4\operatorname{tr}(M_aM_b)$; the displayed equality was false and the next step introduced a second incompatible normalization.
- Evidence read: the complete counterexample, the exact Killing-form definition and Cartan criterion, the split $\mathfrak{sl}_2$ Killing-form computation, and the earlier exact $\mathfrak{sl}_2$ Cartan/root example.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `0b8e151bda6d0f2ae04fb51e8c14365faa2881d570cff78601cb86b8b9e36e55`.
- Repair: corrected $K(A_a,A_b)$ to $\operatorname{tr}(M_aM_b)=-8\delta_{ab}$ and $\operatorname{ad}_X$ to $\sum x_aM_a$; restricted the trace-form supplier to the split real algebra it actually covers; explicitly showed the compact and split bases complexify to $\mathfrak{sl}_2(\mathbb C)$; and cited the exact $A_1$ root computation. Replaced inflated dependencies, synchronized the Batch-11 manifest and sources, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `7cf6f4a5d1e089f997ad572eb6bf94d1bc36ce9b5fc625512084f78f661aa5a4`.
- Focused checks: counterexample precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-057`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-low-rank-dynkin-coincidences`.

### `ex-low-rank-dynkin-coincidences`

- Rejection tuple: `gpt-5.6-terra` / `9fc2d7f49b52c4177bdbe182ff4f6a212e960b4f42af30cd111fb448f7c4c2ff`.
- Exact issue: Fact [L3] falsely called the simply-laced trivalent diagram with arms $1,1,1$ a three-vertex path; that diagram has four vertices and is $D_4$, so the stated argument for $D_3=A_3$ was invalid.
- Evidence read: the complete example; the exact coordinate models for the classical root systems; the repaired explicit $B_2/C_2$ similarity; the $A_1$ coordinate example; and Etingof, Remark 23.18.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `5aecbd6b0f01b944f0785f3f2f3b961e5e0a40a47d9bc6ec816ee098b5f859d1`.
- Repair: replaced the false trivalent-diagram argument by the standard $D_3$ simple roots $e_1-e_2,e_2-e_3,e_2+e_3$, whose inner products give the three-vertex $A_3$ path; derived the rank-one coincidence directly; and replaced the vague $B_n/C_n$ fact by the exact previously proved $B_2/C_2$ similarity. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `6f463dff3dc96718d97e6bdc9d7a32122499d675b9c8db62c9dbb06cb8cebedf`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-058`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`

- Rejection tuple: `gpt-5.6-terra` / `b2c90c0e1aa55dbebfd1dbce7d44699d365b3eae4db82e1ca956d4d99bb1a46f`.
- Exact issue: a vector in a direct sum need not belong to one irreducible summand, so the claimed summand containing the highest-weight vector did not exist in general.
- Evidence read: the complete lemma and the exact finite-dimensional $\mathfrak{sl}_2$ decomposition theorem.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `c71ce7b6b76e82ff481bb4fa026e50d16ffd3e1400f58c3b05ef5be9c4a646bb`.
- Repair: decomposed the vector into irreducible-summand components; stability and direct-sum uniqueness show every component is killed by $e_i$ and has the same $h_i$ eigenvalue, and any nonzero component proves that eigenvalue is a nonnegative integer. Regenerated item and aggregate contracts.
- Post-edit guard: `94a0960289b0c30bcd096f4617c79142f66a7b6548af7be523a271571224cd5a`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-066`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two`

- Rejection tuple: `gpt-5.6-terra` / `9f1636a636381831be51f9b50517b9dd3567f48b853338300495cec800b35d97`.
- Exact issue: the witness required connected groups but attributed connectedness of $\mathrm{GL}_2(\mathbb C)$ and $\mathrm{SL}_2(\mathbb C)$ to interfaces that did not state it.
- Evidence read: the complete counterexample and both cited group-identification interfaces.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `c6ace76f8f49524be22eeb0193a0ea189ab153c1588360cb3712ae7d5011acad`.
- Repair: proved $\mathrm{SL}_2(\mathbb C)$ path connected by explicit Gauss-factor paths, deduced connectedness of $\mathrm{GL}_2(\mathbb C)$ and its projective quotient, and made the two center computations self-contained. Regenerated item and aggregate contracts.
- Post-edit guard: `7f53ae1e1cec85df7af6bfbbb29efd0ee1d9de9dba98735b82702c928246987c`.
- Focused checks: counterexample precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-067`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `def-partial-order-on-weights`

- Rejection tuple: `gpt-5.6-terra` / `bb5f25dad04b0bf2a3eec3345be4760b2921f81c3fe26bad040c129d98078a10`.
- Exact issue: $\lambda-\mu\in E$ does not imply $\lambda,\mu\in E$, so the claim that comparisons occur only inside $E$ was false on the declared domain $\mathfrak h^*$.
- Evidence read: the complete definition and its simple-root-basis supplier.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `190eb5d53736434c85d8726a8bb8e6d524ce8911603033653a11c4623fd9e923`.
- Repair: stated the exact conclusion: comparable functionals lie in one affine coset of $E$ in $\mathfrak h^*$, while neither need lie in $E$. Regenerated aggregate contracts.
- Post-edit guard: `76c45db70d836d23fa4e8c6f738f5000b99b7d2db70a26e845afc3bfb9b48eba`.
- Focused checks: definition precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-068`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `def-integral-dominant-and-strictly-dominant-weights`

- Rejection tuple: `gpt-5.6-terra` / `b92f277446500f972b1140657c5bae9ee50a4b017810b0320f042bcdf2f03389`.
- Exact issue: strict dominance was defined only by positive real coroot pairings, but the closing summary falsely put every strictly dominant weight in the integral lattice $P$.
- Evidence read: the complete definition and the exact fundamental-weight and weight-lattice definitions.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `35118c07a51558cb97bc70fd6ac0a55be7a802240459499c5490f487efca759b`.
- Repair: separated dominant-integral weights in $P$ from strictly dominant elements of $E$ having positive real fundamental-weight coordinates, explicitly noting that the latter need not be integral. Regenerated aggregate contracts.
- Post-edit guard: `41b73841731c60accce8d96c246b694aab08a420c76825f2578a47c7d78208a2`.
- Focused checks: definition precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-069`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-root-systems-of-the-classical-complex-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `e1f7372058c433d169230b26c3e1dcb16c4d7e2cad06c602f75da0bcdff4c9e4`.
- Exact issue: the even-orthogonal family allowed $n=1$, where $\mathfrak{so}_2$ has a one-dimensional Cartan but the displayed $D_1$ root set is empty and does not span its dual.
- Evidence read: the complete proposition, its block-matrix definition and split-Cartan supplier, the repaired existence theorem, and the explicit low-rank coincidence example.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `eb718aae8f4745acc74f8f8aadc9805e0b1b23b8df4ee77c02b47ad666cd8322`.
- Repair: imposed $n\ge2$ for the special-linear and even-orthogonal families, retained $n\ge1$ for symplectic and odd orthogonal families, and supplied the exact low-rank identifications needed outside the stable classification ranges. Synchronized the Batch-11 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `63c0b7a230377e3609d1534c9e52bf1665da0966c5c98443d8177d0d4e795c46`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-070`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `def-dominant-integrable-highest-weight-cyclic-module`

- Rejection tuple: `gpt-5.6-terra` / `dc8837d6f28800e5292847ca38c8e72cf9fc7065ef7a3dfa6a8d52db3e4dc85f`.
- Exact issue: the item cited an interface for generated two-sided ideals as though it defined generated left ideals.
- Evidence read: the complete definition, the cited ideal definition, and the universal-enveloping-algebra interface.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `5220b87129a1b82032e5e90fa3083f5d1189d6630bd18e06db715a1b6cf4d175`.
- Repair: removed the inaccurate dependency and explicitly constructed the generated left ideal as the finite sums $\sum u_js_j$, proving its minimality and the quotient-module construction directly. Synchronized the Batch-12 manifest, regenerated aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `1e68c45ecba8f9e9613e236d0c47f37496672f314ecd6953059a5136d5077563`.
- Focused checks: definition precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-071`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `ex-positive-roots-and-highest-root-of-g-two`

- Rejection tuple: `gpt-5.6-terra` / `2a7dc5d862b2ca73bedf4280aafbd9943ad2a01f466784665c12373b616deeca`.
- Exact issue: Fact [L2] dropped the reduced-crystallographic hypotheses needed for signed integral coordinates and the finite hypothesis needed by the highest-root theorem.
- Evidence read: the complete example and the exact Statements of both cited root-coordinate and highest-root results.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `e5d6d10a4c479ea010a48f5a4658a1c215f55125a0e75d19983640fba0a6b1a4`.
- Repair: restored every supplier hypothesis and corrected the closing dominance calculation: each other coefficient pair is coordinatewise below $(3,2)$, rather than incomparable with it. Regenerated item and aggregate contracts.
- Post-edit guard: `9544b297ec983c9a0d6421e8c33e04a03cc898d3d9d4c62b3e7550a11464166c`.
- Focused checks: example precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-072`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`

- Rejection tuple: `gpt-5.6-terra` / `07e2127f7c89083a3ac77b16a421e1095ba3ffa6f7272a3f9c15233b59812b37`.
- Exact issue: the augmentation used to project the PBW decomposition sent $H$ to zero, so it sent $H-\lambda(H)$ to $-\lambda(H)$ rather than annihilating the defining left ideal.
- Evidence read: the complete lemma, PBW and triangular-decomposition interfaces, the enveloping quotient definition, and the repaired cyclic-module definition.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `501554a27ba944b559414b860bdcdae21857e9355109a07ea5e7402d1a1ccf4c`.
- Repair: replaced the augmentation by the Borel character $\chi_\lambda(H+x)=\lambda(H)$, proved directly that it descends to $U(\mathfrak b)$, and used the corresponding PBW projection to show $U(\mathfrak n^-)\cap J=0$. Regenerated item and aggregate contracts.
- Post-edit guard: `9a82929f2319ce3115a594a9dc21fc50edf42607f9c5e3de97b95f4ac234586e`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-073`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `lem-integrability-relations-for-a-dominant-highest-weight`

- Rejection tuple: `gpt-5.6-terra` / `75ba9e6c35aded4d1c06f2738577789a0667bc4b0e7b8591939057475e442f46`.
- Exact issue: a vector in a direct sum of irreducible $\mathfrak{sl}_2$-modules need not lie in one summand, so the selected summand containing $v_\lambda$ was unjustified.
- Evidence read: the complete lemma and the exact finite-dimensional $\mathfrak{sl}_2$ theorem.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `47f804575675494fe9fec9673bcf08217657b137dab7cfabbf840c0e80aac333`.
- Repair: decomposed $v_\lambda$ into summand components; direct-sum uniqueness gives every component the same raising-annihilation and Cartan-eigenvalue equations, so the nilpotence relation holds componentwise and hence for their sum. Regenerated item and aggregate contracts.
- Post-edit guard: `5e9c815eaf190ecedbf1a0112a26f8208a3050f4863a6e351333b39e8fae0335`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-074`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `def-weyl-vector-rho`

- Rejection tuple: `gpt-5.6-terra` / `213f1abb0b7353e3351765e30d5ee0f298ee4cae3727576cdefb416baaf2bb76`.
- Exact issue: the definition used the root lattice $Q$ without defining it or citing an interface that did.
- Evidence read: the complete definition and the exact root-lattice definition.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `c3ecca31b5c7f7b1347e4f30081c791a6a3ef046bbd3bfb9eca3edf89e0e09f2`.
- Repair: added the root-lattice supplier at the first use of $Q$, synchronized the Batch-12 manifest, regenerated aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `f371ffd57e297866f14f020a0e43748b372a6e3d39336679f29b033f70efbe24`.
- Focused checks: definition precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-075`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules`

- Rejection tuple: `gpt-5.6-terra` / `069db1e83ed05724e12debd992593e92186252e4ff138395358cbc43ca31784a`.
- Exact issue: classification supplied isomorphisms $V_j\cong L(\lambda_j)$, but the statement and proof replaced the actual submodules by literal equal modules.
- Evidence read: the complete corollary, complete-reducibility interface, direct-sum definition, and highest-weight classification.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `e9003505b502e8c081a92234080b03abb3f757a427f9fdfd42f604f73333d00c`.
- Repair: retained the literal internal decomposition $V=\bigoplus_jV_j$, stated $V_j\cong L(\lambda_j)$, and distinguished the induced external isomorphism $V\cong\bigoplus_jL(\lambda_j)$. Synchronized the Batch-12 manifest and regenerated item and aggregate contracts.
- Post-edit guard: `539aedaa55a530573da006d30d4a1f531661b11deee06b39c594e66e6389ab10`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-076`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`

- Rejection tuple: `gpt-5.6-terra` / `52c5ac96e0cbb69e9ec0d58b293d5c9cb6914671541545f6aafe79f0904ba175`.
- Exact issue: Fact [L2] and step 1.1 applied an $\mathfrak{sl}_2$ result whose stated module hypothesis was nonzero, while the proposition allowed $V=0$.
- Evidence read: the complete proposition, exact $\mathfrak{sl}_2$ theorem, coroot-spanning interface, and weight-space definition.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `0c5657ab228a5a0193b04db3be6de777ba03e1cbdb0e8cf6017d6d17cd05de88`.
- Repair: stated the supplier's nonzero hypothesis exactly and discharged both $V=0$ and the empty-root/zero-Cartan case before choosing a root; the remaining proof then applies the theorem within its domain. Regenerated item and aggregate contracts.
- Post-edit guard: `dd185f0552ea858201870dec8b572fdfb9336559c3c95462e89aa1b9ed0fe53c`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-077`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `lem-simple-root-integrability-bounds-the-dominant-cyclic-module`

- Rejection tuple: `gpt-5.6-terra` / `b3463233e34bc243fe469ce1e77d1646b0f8ca481bb851d906238eac6b8d27cb`.
- Exact issue: associativity does not identify $U(\mathfrak{sl}_2)(xw)$ with the adjoint orbit space $Xw$; applying a generator also acts on $w$.
- Evidence read: the complete lemma, the Lie-representation identity, and its finite-dimensional adjoint and cyclic $\mathfrak{sl}_2$ submodules.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `a32441fb8cd4c6f3e1af48ae042e01620c15c1ad394094e762537c325fce2c26`.
- Repair: for $S=U(\mathfrak{sl}_2)w$ and the adjoint orbit $X=U(\mathfrak{sl}_2)x$, proved that $\operatorname{span}(X\cdot S)$ is a finite-dimensional invariant subspace containing $xw$, using $y(x's)=[y,x']s+x'(ys)$. Regenerated item and aggregate contracts.
- Post-edit guard: `1e1b53851025e40c28587431119efc1551f6227fe48155dabd9591a4c9e368f0`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-078`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `lem-highest-weight-modules-have-weights-below-the-top-weight`

- Rejection tuple: `gpt-5.6-terra` / `0807574d6fb5685d676188cf4f94762123d9bbf6c5fe315341f0ecbe839b4247`.
- Exact issue: Fact [L5] claimed conversely that every nonzero nonnegative integral combination of simple roots is a root, which the cited theorem neither states nor is true.
- Evidence read: the complete lemma and exact simple-root-coordinate theorem.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `534828575089052c409d046fb0d443f003d0f687491fdd28a65f8e002a58faf7`.
- Repair: retained only the supplied and used direction: every positive root is a nonzero nonnegative integral combination of the simple roots. Regenerated item and aggregate contracts.
- Post-edit guard: `029933bc925a014b06f7cadfc882fffefeb1aa3e3394840baaafd975da28883a`.
- Focused checks: direct item precheck and rendercheck passed; strict Batch-12 proof-contract check passed with one existing shotgun-citation warning and no errors.
- Defect ledger: append target `phase-2-remaining-27-step7-a-079`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`

- Rejection tuple: `gpt-5.6-terra` / `fd9334778924b3a03a0a0da45f3b18d5172a47fbd05cb44351c929f433f7d012`.
- Exact issue: no rank ranges were stated, so the library's zero natural and the empty $D_1$ model made the order formula meaningless or false.
- Evidence read: the complete example, coordinate root-system model, and Weyl-group definition.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `d7071f15ef07a853584f0fe34dc3e37ec0b8534b4b463cc72ccf9ece517dfce6`.
- Repair: imposed $n\ge1$ for $B_n$ and $n\ge2$ for $D_n$ in both the statement and Given data, and synchronized the Batch-11 manifest. Regenerated item and aggregate contracts.
- Post-edit guard: `2b3f4ee324b0175c274b1e6bc8f1855674ca12f7740a8c4404f06b3f0539c837`.
- Focused checks: example precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-080`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-the-adjoint-representation-has-highest-weight-the-highest-root`

- Rejection tuple: `gpt-5.6-terra` / `b463e68820143566ec78f9a595f2e1dab0e7fcec95bef5e94ea46e95d524334c`.
- Exact issue: Fact [L5] attributed the unique-maximal-weight characterization to interfaces that did not state it.
- Evidence read: the complete proposition, exact highest-weight definition, adjoint-ideal correspondence, and root-space interfaces.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `65cba6cfd3c9e9128f72c4a1c9192a5f709ff0acbe2c918c165d8c95fe77c375`.
- Repair: removed the inflated classification dependency and concluded directly: the constructed nonzero $\theta$-weight vector is killed by $\mathfrak n^+$, and irreducibility makes it generate the whole adjoint module. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `179fd0a92c00788912aee6c2b3eba4b90e87235775b5dc6a588b307b174e3a27`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-081`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `ex-the-adjoint-representation-and-the-highest-root`

- Rejection tuple: `gpt-5.6-terra` / `0a53b27d29ee780c33ffea8a5ba690694dd8bf3911c98e2dd796e0654045099e`.
- Exact issue: the example allowed $n=1$, where $E_{1n}$ is not traceless and no highest root exists; its conditional simplicity fact was also used without establishing the premise.
- Evidence read: the complete example, classical root calculation, highest-weight definition, and direct matrix commutators.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `3848344bda49560edaecc0b64aca8092d2d69742619e487e0c6435dbd3673120`.
- Repair: imposed $n\ge2$, removed the unsupported simplicity route, proved directly that $E_{1n}$ generates every off-diagonal matrix unit and diagonal difference under the adjoint action, and verified the highest-root order formula explicitly. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `abf232b45b6ea154d65ad09de3918f82ee9bc87ea580a4c636ef90da0663ea2c`.
- Focused checks: example precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-082`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `ex-verma-modules-for-sl-two`

- Rejection tuple: `gpt-5.6-terra` / `9c1f493507fdb3795ca115703d48dc8e2df1dda8ac2d6d3f9282c69047dc7891`.
- Exact issue: the proof selected the least nonzero index in a finite sum and claimed that applying that power of $e$ leaves only its $v_0$ contribution, although all higher-index terms generally survive. The PBW projection used to prove the basis also did not annihilate the left ideal generated by $h-\lambda(h)$ when $\lambda(h)\ne0$, and the maximal-submodule argument assumed without proof that a submodule containing a sum contains an individual basis vector.
- Evidence read: the complete example; the PBW factorisation; the displayed $\mathfrak{sl}_2$ action; and the distinct $h$-weights of the PBW basis.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `209ca629b05712d5411cc06561ef81099cb139cb119f735398aa2fe6bf6068bc`.
- Repair: obtained the PBW basis by tensoring the factorisation $U(\mathbb Cf)\otimes U(\mathfrak b)\simeq U(\mathfrak{sl}_2)$ with the Borel character; used the greatest nonzero index so that its corresponding power of $e$ kills all lower terms; and used polynomial spectral projection in $h$ to isolate a basis vector before proving uniqueness of the maximal proper submodule. The unused choice hypothesis was removed. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `6a584a6c4cde52912d0d4e8f308e234c63879a01cf280d925c70941d504062c2`.
- Focused checks: example precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-083`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `cor-normalized-haar-measure-on-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `7d89981133e44ba3339c60a88758a1746c1a308a8885d3d98c1fb30d8de68cd7`.
- Exact issue: step 1.2 claimed that compactness makes every left Haar measure a probability measure, although positive scalar multiples have arbitrary finite positive total mass.
- Evidence read: the complete corollary and the exact normalized-Haar and left-Haar interfaces.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `cd5725820dffdd48b4cd6c88471ec4dc4a7d4b0f0b5ed1263e164a2e1016d7dd`.
- Repair: distinguished finiteness from normalization, stated the division by total mass explicitly, and retained uniqueness only within the total-mass-one class. Regenerated item and aggregate contracts.
- Post-edit guard: `f59d59c217e19fa82f78a8da7f9959ba85a3eda15ad8761f60964d996df8639b`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-084`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics`

- Rejection tuple: `gpt-5.6-terra` / `59e47ebe4ddfa91a8007ac0020ac3b5f336ba41378050a7fa8de8a7a0fead449`.
- Exact issue: Fact [L3] computed $dL_{xh}^{-1}dR_hdL_x$ as $\operatorname{Ad}_{(xh)^{-1}}$ rather than $\operatorname{Ad}_{h^{-1}}$, so the displayed proof of right invariance used a false differential identity.
- Evidence read: the complete proposition and the exact definition of conjugation and the adjoint representation.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `2876298ed64b6848e0bf93e1d57416c1b6f871989c3af0db62e2e24f62e6777d`.
- Repair: computed the composite map $L_{(xh)^{-1}}R_hL_x(y)=h^{-1}yh$ and rewrote the right-invariance calculation using $\operatorname{Ad}_{h^{-1}}$. Regenerated item and aggregate contracts.
- Post-edit guard: `3f08500c2e26520ab7d70217954a6038e329b7c09812dead1792af0beb78a2a6`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-085`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-conjugacy-of-maximal-tori`

- Rejection tuple: `gpt-5.6-terra` / `0f40cc46c26a9f384c234f1b4f7bd79b9c42eed2d2febbca6f69e6057d853216`.
- Exact issue: Fact [L2] reversed the containment needed to prove that a maximal torus has maximal abelian Lie algebra, so the centralizer argument had no valid premise.
- Evidence read: the complete theorem; the torus definition; the analytic subgroup correspondence; closed subgroup theorem; and compact connected abelian structure theorem.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `cbf3cb977143dbbf878492809fe0a27063e8333781910acaab4699551e38227d`.
- Repair: assumed correctly that $\mathfrak t_i\subsetneq\mathfrak a$, constructed the analytic subgroup and its compact connected abelian closure, proved it strictly contains $T_i$, and supplied the exact topological and Lie-subgroup dependencies. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `80803e827b6f5785bf848cdf37c75d9cc40d9e0938d1648bc4ae53bdad847e91`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-086`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-schur-orthogonality-for-compact-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `bc62aba82eb165db296b036378c6df3babf2c2f18da707bcae91c0e9611db7de`.
- Exact issue: step 2.2 took traces and used similarity on $T(A):V_\sigma\to V_\pi$ and $A:V_\sigma\to V_\pi$ before the spaces and representations had been identified, so those expressions were not defined.
- Evidence read: the complete theorem, Schur's lemma, the matrix-coefficient convention, and the trace interface.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `069316d4008c906cd3fe2a46d9cadc1777a0f4a08b15d7f8d57e980f0b4e6c23`.
- Repair: restricted the trace computation to the endomorphism case $V_\sigma=V_\pi$ and $\sigma=\pi$, separated the always-valid rank-one coordinate identity from trace, and made the aligned-basis identification in the equal-representation formula explicit. Regenerated item and aggregate contracts.
- Post-edit guard: `d25688d631aab306c82ba0047029d6aa9d5d9cedc6b0cf07b7c486a01962937f`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-087`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-maximal-tori-exist-in-compact-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `64cb01c551125eabdfaa98f067b13ba39b72389cffad2f1934259f9bd3452a38`.
- Exact issue: Fact [L4] attributed “the closure of a subgroup is a subgroup” to Cartan's closed subgroup theorem, which only gives Lie-subgroup structure once closedness and the subgroup property are already known.
- Evidence read: the complete theorem and the exact closed-subgroup, connected-closure, and compact-closed-subset interfaces.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `4365914f94a49efd4de71ea64e68ad921c004d6d9eaf745e7fb2a8014df67933`.
- Repair: supplied the elementary net proof that closure is closed under $ab^{-1}$, retained exact citations for connectedness and compactness, and removed the inflated Cartan citation. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `85c31caeb4d14b64ed83c64397620fb2193b51eda46cc0757a4a0b33912ad986`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-088`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-weyl-integration-formula`

- Rejection tuple: `gpt-5.6-terra` / `840ab771674c6a96919023cdaa73fa6d6409a14c0dd88abfeafb0146d2778bc9`.
- Exact issue: Fact [L2] attributed finiteness and faithfulness of the compact Weyl group to the orbit proposition and definition, neither of which states those conclusions; the degree computation then used the unsupported finite cardinality.
- Evidence read: the complete theorem; the conjugacy-orbit proposition; the Weyl-group definition; and the exact compact-Weyl-group finiteness theorem.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `b082e54f4ca510cd37c9bfb787f747a8fc2471445d2cec976bcd84c05052702e`.
- Repair: added and cited the theorem that states finiteness and faithful action, while retaining the definition only for the automorphism action and the orbit proposition only for conjugacy. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `1a89ff865c8e41ba9531b13fa9a01164f6a88f0b197a91b45927e9a7fb0e7e22`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-089`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-integration-against-haar-is-invariant-under-translations-and-conjugation`

- Rejection tuple: `gpt-5.6-terra` / `cfc6c3f693944cadd78e8ff3c31d57adb14909022166e60ec6dc3d512396daa8`.
- Exact issue: step 1.1 labels the $h^{-1}E$ equality as right invariance and the $Eh^{-1}$ equality as left invariance, whereas those two labels should be interchanged.
- Evidence read: the complete proposition and its Fact [L1], which explicitly supplies both translation invariances.
- Decision: `confirmed_nonfatal` against guard `87ff55a1ef2d78d889d81e12099ccfe70a8aed7aa1a29eb50e44b426069a52b4`. The two valid equalities and both required hypotheses occur in the same sentence; a reader closes the defect by an immediate exchange of two words, and no claim, witness, computation, or dependency is missing.
- Repair and rejudge target: none under the fatal-only Step-7 rule.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group`

- Rejection tuple: `gpt-5.6-terra` / `7245dca3e4a8e35fc90a56ae4a2b50ad8f78ae2fdd7a72712be509f408a36de2`.
- Exact issue: Fact [L5] attributed compactness of the universal cover and finiteness of the central kernel to the bi-invariant-metric proposition, whose interface supplies neither; the attempted finite-cover argument also used the wrong character-lattice index.
- Evidence read: the complete proposition; the central-quotient theorem; finite-sheeted compactness; maximal-torus existence and conjugacy; torus exponential lattices; and the structure theorem for finitely generated abelian groups.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `7babacb90246b9618c95adb6a032aba525a9333400cb2fee224faa66bfe2eb98`.
- Repair: proved the central covering kernel finitely generated from a compact fundamental set; used arbitrarily large finite quotients if it were infinite; compared a finite central covering of maximal tori through their exponential lattices to obtain $|D|=[X^*(T_K):X^*(T)]\le[P:Q]$; and concluded that the simply connected cover is finite-sheeted and compact. Removed the inflated metric citation and added the exact finite-cover, torus, conjugacy, and group-structure dependencies. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `aa038f6e35eacd05e9e082e886a44c2f0833ad87fd410ff8f2e1464944e27bec`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-090`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-compact-connected-lie-groups-are-classified-by-root-data`

- Rejection tuple: `gpt-5.6-terra` / `4c53a4d196314a2175c89b0ca8f6b5efb2fb6e311a905318b261367d3455d02b`.
- Exact issue: step 2.1 treated characters of the maximal torus as characters of the full nonabelian group and consequently defined no actual homomorphism or kernel on $A\times G_{sc}$.
- Evidence read: the complete theorem; torus character/lattice duality; the semisimple simply connected endpoint; and the compact root-datum definition.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `4425f6028557cb665665fcb50cf7b07261faace82515ab367307650fe917a4e8`.
- Repair: embedded the prescribed lattice $X$ as a finite-index sublattice of $X^*(T_{sc}\times A)=P\oplus(X/X_V)$ using the semisimple projection; defined $C$ as the common kernel inside that torus; proved roots vanish on $C$, hence $C$ is central in $A\times G_{sc}$; and identified the quotient torus character lattice with $X$. Regenerated item and aggregate contracts.
- Post-edit guard: `8930131f7261683f923fd719ac09abe110d0f5dbd4abf475b8bf135322c59ca6`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-091`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-analytic-and-root-system-weyl-groups-agree`

- Rejection tuple: `gpt-5.6-terra` / `ccff4356e9e7abb8f03df045811da6b7eeaf7cc40ce62e4dbe668b83e1513dfc`.
- Exact issue: step 1.1 normalized compact conjugation as $\sigma(e_\alpha)=f_\alpha$; the correct compact normalization has the minus sign, and with the printed sign the purported real $\mathfrak{su}(2)$ generators were anti-fixed rather than in $\mathfrak g$.
- Evidence read: the complete theorem, the root $\mathfrak{sl}_2$ triple, and the compact-conjugation/Killing-form normalization.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `a56f8d2adf02952a37092a5d85e38271085fe7e1e11abecbd677960ba84adebe`.
- Repair: normalized $\sigma(e_\alpha)=-f_\alpha$, $\sigma(f_\alpha)=-e_\alpha$, and $\sigma(h_\alpha)=-h_\alpha$ using negative definiteness; verified that the displayed $X,Y,H$ are fixed and retain the stated $\mathfrak{su}(2)$ brackets. Regenerated item and aggregate contracts.
- Post-edit guard: `1b9ab834f89d1a89968b2dc59d7a1b258e12a9421b6080c8f09f94e8e9301e9f`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-092`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-highest-weight-classification-for-a-compact-connected-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `a2bb9f9ea7e3ced797ed7683360ee42471fe59a7792f878c2773ccdd32bf2e13`.
- Exact issue: Fact [L2] asserted $Q\subseteq X^*(T)\subseteq P$ for an arbitrary compact connected group, although the cited lattice sandwich is semisimple and fails already for a torus.
- Evidence read: the complete theorem; the semisimple lattice-sandwich statement; the finite central product cover; and torus character differentiation.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `32cfa5f976138fb01c530d8e4f676d84579d3dfc10eb76c8524e64a967a588e5`.
- Repair: restricted the sandwich fact to compact semisimple groups and, in the converse construction, pulled $\lambda$ to $Z(G)^0\times T_{sc}$, where its $T_{sc}$ component is an actual character and hence lies in $P$ because the derived factor is simply connected semisimple. Regenerated item and aggregate contracts.
- Post-edit guard: `6e1e238a68e90a68222e368320467de2648bea33e19cc89714c808946f226195`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-093`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-structure-of-a-compact-connected-abelian-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `b61e03a9863596bf1f252ccfb3284d90b3edcb6274288b65eff56ca010cb2b0a`.
- Exact issue: [A1] claimed that the Axiom of Choice entered through [L5] and through selecting a basis of a finite-rank lattice, but [L5] is only compactness of continuous images and the displayed minimal-norm induction is finite-dimensional and choice-free.
- Evidence read: the complete theorem, its explicit lattice-basis induction, and the compact-image supplier.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `4114e8822d99218169ed6540d317ed9c30b3ea87443194a81c2d9a466e4ce466`.
- Repair: removed the false choice hypothesis, dependency, accounting fact, and final use tag; the constructive finite-dimensional proof is otherwise unchanged. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `db112cb255e2402a563a7c3eec0c888ece76a8760d0019cb3eaa443cc50ed53e`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-094`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. The two Step-6 warnings about [L3]'s circle supplier are independently nonfatal presentation gaps: the item uses only the standard finite-product quotient identification, which is immediate from the displayed quotient Lie-group structure, and no statement or computation depends on the supplier asserting smoothness verbatim.

### `ex-root-systems-a-two-b-two-and-g-two`

- Rejection tuple: `gpt-5.6-terra` / `4aae028607fc274f86086931416a72970c831278483b5303f66c1929d9d11b5c`.
- Exact issue: step 1.2 called the orthogonal pair $(e_1,e_2)$ a $B_2$ simple base and assigned it the non-diagonal Cartan matrix; its off-diagonal Cartan integers are actually zero.
- Evidence read: the complete example; the exact root-system and Cartan-matrix definitions; the repaired rank-two classification; the explicit classical coordinate models; and Etingof, Theorem 21.10 and its rank-two diagram.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `b9d5b6d15093ffe70f1ea1120b3977659442e54b48fbe3ba78585584f1fb9c47`.
- Repair: replaced the false $B_2$ base by $(e_1-e_2,e_2)$ and computed its matrix; made the $A_2$ obtuse simple pair explicit; fully verified the $G_2$ reflection orbits, reducedness, integrality, and base; and replaced the overbroad existence citation with exact definition interfaces. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `73256c53bcf85a6e34bffc6d2cc28efbf8e7b04f185340fd6d31ddcb24828f76`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-059`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-existence-theorem-for-complex-semisimple-lie-algebras`.

### `thm-existence-theorem-for-complex-semisimple-lie-algebras`

- Rejection tuple: `gpt-5.6-terra` / `551f18a526bf8ffd0cfedf3e57d7eedd6317ad2724257f0e19ce440a1f683b82`.
- Exact issue: Fact [L2] changed the Serre theorem's conditional simplicity clause into the stronger claim that every “irreducible finite-type” matrix gives a simple algebra, instead of retaining the supplied hypothesis that the matrix comes from an irreducible root-system component.
- Evidence read: the complete theorem; the exact Serre theorem Statement; the unique component decomposition; the positive-system and simple-root-basis interfaces; the same-Cartan-matrix isomorphism theorem; and the library convention that the zero algebra is semisimple but not simple.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `f57b2a87baa162434d4a243ba9d2b945b9f756485aa263d7406c8c4347963251`.
- Repair: restored the exact Serre simplicity hypothesis and applied it only to actual component Cartan matrices; inserted the required same-Cartan-matrix isomorphisms rather than identifying root systems literally; supplied the construction of component bases; removed the unrelated classified-model existence dependency; and handled the empty root system explicitly, whose irreducibility under the library definition does not permit the zero algebra to be called simple. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `16e0407ebee46a26f131ba0d8b74e175730dc09c101d849f13191db64e4bce11`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-060`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system`.

### `fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system`

- Rejection tuple: `gpt-5.6-terra` / `80d4d895a155696584a2a8cbef13f007108118c77a4a58a7bb450c2e2ebebe2e`.
- Exact issue: step 1.2 misidentified $s_\alpha$ as reflection in the root line $\mathbb R\alpha$, whereas the library defines it as reflection in $\alpha^\perp$; the cited pentagon symmetry therefore did not prove the required reflection invariance.
- Evidence read: the complete counterexample; the exact reduced crystallographic root-system definition; and Knapp's discussion of the noncrystallographic dihedral systems.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `9a70208b7188130822c7830303d85531be6bcfc02f58317f34ba9cbe232abfbd`.
- Repair: parametrized the ten roots by angles $m\pi/5$ and computed that reflection in the perpendicular line sends $n\pi/5$ to $(2m+5-n)\pi/5$, proving closure under the library's actual reflection; also made the elementary nonintegrality contradiction exhaustive. Synchronized the Batch-11 manifest and regenerated item and aggregate contracts.
- Post-edit guard: `4fbafe1c8a557fb4974167adcf90d6dfa8ca9745dc04d28ad427b747d32e29ab`.
- Focused checks: counterexample precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-061`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `ex-serre-relations-for-a-two-recover-sl-three`.

### `ex-serre-relations-for-a-two-recover-sl-three`

- Rejection tuple: `gpt-5.6-terra` / `c71455da842c490e6aa1ceb8948d76324a0c37bac23b3cb8b6aac7b15d9d0db3`.
- Exact issue: step 2.1 asserted $[E_{23},E_{12}]=0$, but matrix multiplication gives $[E_{23},E_{12}]=-E_{13}$.
- Evidence read: the complete example; the exact Serre presentation definition and theorem; the matrix definition of $\mathfrak{sl}_3$; and the earlier published complete $A_2$ matrix calculation.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `d2ebb7ee5aac0108c6f978214853e28f7041b799d13dfcf4eca5bdf0863004df`.
- Repair: corrected the commutator; checked all four positive and negative quadratic Serre relations rather than only two; made the six off-diagonal generators and two diagonal basis elements explicit; and proved injectivity internally from the three-dimensional bounds on each Serre half and the triangular decomposition, removing an inflated dimension claim and the irrelevant $\mathfrak{sl}_2$ dependency. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `6370e9a64be18a948c8cc0cfdb37953a809119a70f366df54dedfe12ec745e9f`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-062`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `thm-root-string-property`.

### `thm-root-string-property`

- Rejection tuple: `gpt-5.6-terra` / `78d369326c5ebe9abf25876e13a3cf71d548a79d5a623cee00d2f210009a2b20`.
- Exact issue: step 1.1 called the $k=-1$ summand $\mathfrak g_{-\alpha}$ and invoked the opposite-root bracket, but that summand is $\mathfrak g_{\beta-\alpha}$ in general; the stated stability argument was therefore false outside the special case $\beta=0$.
- Evidence read: the complete theorem; the general bracket-of-weight-spaces proposition including the zero weight; the exact root-space decomposition; the root $\mathfrak{sl}_2$ triple; and the finite-dimensional $\mathfrak{sl}_2$ classification.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `6eb39d1ad0e41c3e6eec6083d4ec28700202e4cc6aec3a3ba371c69f5d3b9a0b`.
- Repair: proved stability uniformly from $[\mathfrak g_\gamma,\mathfrak g_\delta]\subseteq\mathfrak g_{\gamma+\delta}$, including targets equal to $\mathfrak g_0$; removed the inapplicable opposite-root dependency; computed each irreducible summand's interval by general endpoints instead of assuming every summand contains index zero; and used that the union is a nested concentric interval containing the actual $k=0$ summand. Synchronized the Batch-11 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `d0c2ac98fd2b42aa30ca979c333e0729c47fda7bc0ac59fa21fbec1f59b0a0d7`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-11 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-063`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `lem-simple-reflections-preserve-weight-multiplicities`.

### `lem-simple-reflections-preserve-weight-multiplicities`

- Rejection tuple: `gpt-5.6-terra` / `1ff9c8d03633a64e877dcafcc55fbb88283507f3171b84164c2a17eca97e7ff5`.
- Exact issue: step 3.1 used $f_\alpha^q$ even when $q<0$, and step 2.1 incorrectly asserted that every $h_\alpha$-eigenvector in an arbitrary irreducible summand of the restricted $\mathfrak{sl}_2$-module is automatically a simultaneous $\mathfrak h$-weight vector.
- Evidence read: the complete lemma; the root $\mathfrak{sl}_2$ triple; the finite-dimensional $\mathfrak{sl}_2$ classification; the exact weight-space definition; the Lie-theoretic and abstract reflection identifications; and Kirillov §8.1.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `e742e5432e6e3d83c48811cb3ecfc85969a6cc466452cec893bf8077f69f66fb`.
- Repair: replaced the invalid summandwise argument by the standard invertible operator $N_\alpha=\exp(\rho(e_\alpha))\exp(-\rho(f_\alpha))\exp(\rho(e_\alpha))$; computed its conjugation action $H\mapsto H-\alpha(H)h_\alpha$ on the Cartan; used it to give an actual isomorphism $V_\mu\to V_{s_\alpha\mu}$ for every functional, including zero spaces; and removed dependencies used only by the defective decomposition argument. Synchronized the Batch-12 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `06e3cc7c91abec5c1fd1c7a77ae04db2b7581ca473af7be9a01a03ca54707ccd`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-064`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is `prop-root-vectors-shift-weight-spaces`.

### `prop-root-vectors-shift-weight-spaces`

- Rejection tuple: `gpt-5.6-terra` / `a434f92dbf19d201c890ea96b610e37c7bb5378b9fc218fc7300abed00048917`.
- Exact issue: Fact [A1] claimed that the Axiom of Choice entered through the cited root-space definition, but that supplier merely defines the eigenspaces and uses no choice; the one-line representation calculation is choice-free as well.
- Evidence read: the complete proposition, the exact representation identity, and the cited root/root-space definition.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `819bdeab0a9837c8353d9fcd04c6929ab85dc0bb59ba808741c7b107168cb347`.
- Repair: removed the false choice hypothesis, dependency, fact, and proof tag while leaving the direct calculation unchanged. Synchronized the Batch-12 manifest, regenerated item and aggregate contracts, and refreshed the frontier ledger.
- Post-edit guard: `5252e75f145311a60220346315ff65680b05770755b600adfd8340d71f407ad0`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-065`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-weyl-character-formula-for-compact-connected-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `97fd9efc421cc89cde52261c9b7765dfbc00e171f12335bdc49fc0b0321f5734`.
- Exact issue: the theorem chose an arbitrary maximal torus $\widetilde T$ in the finite central cover and then evaluated lifted weights on lifts of elements of the specified torus $T$, although no compatibility $p(\widetilde T)=T$ had been imposed.
- Evidence read: the complete theorem; the element-in-a-maximal-torus and conjugacy theorems; and the finite central product cover used by the proof.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `6560c0d05f0bbc8f02c6b798cb5f3f6a183d2737e8586d2e4e47a7f5eb35f98f`.
- Repair: defined $\widetilde T=(p^{-1}T)^0$; proved it is a maximal torus, that every central kernel element lies in it, and hence that $p|_{\widetilde T}:\widetilde T\to T$ is surjective with the full finite kernel; then made the regular-element lift explicit before evaluating the denominator formula. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `681d5608b00e95c4c7923c051077dcf957e7bbcc98c1392dace036d61976ad9b`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-095`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `thm-compact-group-weyl-group-is-finite`

- Rejection tuple: `gpt-5.6-terra` / `e39aa5727e993d1f7a899b01ffb9ba784b6abf33e641907ae2e6829cb88a6b96`.
- Exact issue: Fact [L4] attributed the normal-quotient Lie-group structure, its quotient Lie algebra, and the exponential characterization of a closed subgroup's Lie algebra to the quotient-manifold theorem, whose statement supplies only the manifold, submersion, action, and dimension.
- Evidence read: the complete item; the quotient-manifold theorem; the exact closed-normal-subgroup quotient theorem; and the construction in Cartan's closed-subgroup theorem.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `5de4332f3354a2611e39590f2e8f8a4871f1d9602ef958e254a6d77af756b197`.
- Repair: replaced the overclaimed quotient-manifold dependency by the exact closed-normal-subgroup theorem for the Lie-group and quotient-Lie-algebra assertions, and separately cited the explicit exponential construction in the already-required closed-subgroup theorem. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `e8d4732916bb529bede938431e9071c570211962e577ecd123f35737e0090035`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-096`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the next unadjudicated targeted rejection in the authoritative ledger.

### `prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t`

- Rejection tuple: `gpt-5.6-terra` / `b7655f8c46bd87c123eb0f2c8fc5de315fc6339a7ea14a246b99d65168fe39af`.
- Exact issue: Fact [L3] attributed real-linearity of continuous additive maps to the character/cocharacter definition, which states only the circle-to-circle classification; step 1.1 depended essentially on the absent assertion.
- Evidence read: the complete proposition, the exact character/cocharacter definition, and the torus quotient/lattice structure theorem.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `65be41bcbab49e99fe719611825b9113b5c4e61f1c6aa13e3c598c1746a36224`.
- Repair: proved directly, via a local continuous argument and the local Cauchy equation, that every continuous homomorphism from a finite-dimensional real vector space to $S^1$ is the exponential of a unique real-linear functional; used lattice coordinates to derive the cocharacter formula from the actually supplied circle classification; and corrected the converse's complex domain and its $S^1$-valuedness argument. Regenerated item and aggregate contracts.
- Post-edit guard: `05a42fee7aac85cef28e690b670ae9ab8927697cf866bb305b3b4b43e6e3e722`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-097`, exact-linked to the rejection tuple and pre-edit guard.
- Unresolved obligations: none for this item. Next action is the last unadjudicated targeted rejection, `thm-peter-weyl-for-compact-lie-groups`.

### `thm-peter-weyl-for-compact-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `d6cf860b4a0beb3500232269569257fe8cf6db25a38f3923a6600a3d0f1cec95`.
- Exact issue: step 8.1 identified the fixed-column coefficient space $V_j(\pi)$ with $\pi$ under the library's left regular action, but the displayed transformation matrix is that of the contragredient $\pi^*$; already for $G=U(1)$ and $\pi(z)=z$, left translation acts on the function $z$ by $x^{-1}$.
- Evidence read: the complete theorem; the fixed left/right regular-action convention; the matrix-coefficient convention; the exact contragredient definition; both Hilbert-space suppliers implicated by the Step-6 warning; and Schur orthogonality.
- Decision: `confirmed_fatal` (`logic`) against pre-edit guard `4b87bf6982182e3295eefb4f6952fc102a4a2169c68a9e9ee14e4b2af7c6c936`.
- Repair: computed the left translation formula as the contragredient action, showed $V_j(\rho)\cong\rho^*$, and identified the $\pi$-isotypic summand as $\bigoplus_{j=1}^{d_\pi}V_j(\pi^*)$. The same edit repaired the independently fatal reader-warning citation in [L5] by assigning Fourier convergence to its actual supplier and orthogonal-complement existence to the exact closed-subspace decomposition theorem. Synchronized the Batch-12 manifest, regenerated contracts, and refreshed the frontier ledger.
- Post-edit guard: `4b5d783b9919cd14e3ab388795e248be04e07a96f9e1d885967b85f726f5ff0b`.
- Focused checks: direct item precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append targets `phase-2-remaining-27-step7-a-098` for the targeted rejection and `phase-2-remaining-27-step7-a-099` for reader warning `s8a-32a5894c99c2e337c193ecbd`, both bound to the same guarded edit.
- Unresolved obligations: none for this item. The duplicate warning `s8a-912c4448ec9268d07012201a` records the same citation defect and requires no second repair.

### `cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional`

- Rejection tuple: `gpt-5.6-terra` / `76a57f1ce746158ce25f48e4901fd2f9da4a6a0ea515268ae527f63b35e0b6f9`.
- Decision: `confirmed_fatal` (`dependency_citation`) against pre-edit guard `360d1f24fd451bd6f60cca282c67e687d31187a1dd8481d0397dc7cd0a8761fb`.
- Exact issue and repair: [L2] attributed simplicity to the cited example's statement although that statement only supplies the infinite PBW basis and finite-quotient criterion. Simplicity was irrelevant to the counterexample, so the repair retains only the exactly supplied infinite-dimensionality claim and removes the unsupported surplus conclusion.
- Post-edit guard: `8685eee8a01354b75403715942ef9c42f880fec8733c6e664799dff915e06c52`.
- Focused checks: counterexample precheck, rendercheck, and strict Batch-12 proof-contract check all passed.
- Defect ledger: append target `phase-2-remaining-27-step7-a-100`.

### `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian`

- Rejection tuple: `gpt-5.6-terra` / `0cb39ad5773fe7c322aae5c501eac7f3ff4aa40fefbcf65583c008695897b495`; decision `confirmed_fatal` (`dependency_citation`) at guard `be7dd05003bc7c1ca02d23d58abbd0b34a064a80fa8a271c1e35d926469a6081`.
- Repair: replaced the merely topological torus definition as supplier for $dx,dy,dx\wedge dy$ by the published smooth two-torus example that states those quotient-coordinate facts; retained the exact period obstruction. Post-guard `a1cd0fd8c0c3ae0c6aea11d843cba2dc4a6c6189a4a05d4a5997c86f44ef30ab`; Batch-13 precheck, rendercheck, and strict contract check passed; defect `phase-2-remaining-27-step7-a-101`.

### `cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic`

- Rejection tuple: `gpt-5.6-terra` / `99768d680ec6ded7d92e0cdb7d927e4f69990ca68c3373a05ec97cb5967c5ce6`; decision `confirmed_fatal` (`dependency_citation`) at guard `f3dea8a454b9637e0366f5e30b49dd571bf222ccf43cfb79a2ceab389141fa29`.
- Repair: proved $Z(SU(2))=\{\pm I\}$ and $Z(SO(3))=\{I\}$ by explicit commuting-matrix calculations and proved algebraically that an isomorphism preserves the centre, instead of attributing those facts to the character-lattice example. Post-guard `3a2e7b7dc5512b68620edc32992a9b104f63fd464c52a4c81917ed851da07dfe`; Batch-12 checks passed; defect `phase-2-remaining-27-step7-a-102`.

### `cor-complete-reducibility-for-compact-lie-groups`

- Rejection tuple: `gpt-5.6-terra` / `a48cd253ceea89d548060985ccd37e3b6f3ded332d8f563bd53aa957ddbce3ec`; decision `confirmed_fatal` (`dependency_citation`) at guard `59bc4fbd040759f63035a80b0eaca8e54a115c568db54debe997d489ddb6f3d9`.
- Repair: replaced the inner-product definition's inflated attribution with the exact finite-dimensional orthogonal-decomposition and dimension corollaries, while stating the empty-sum convention directly. Post-guard `c639bbf8006cd3e9f7cd970acbe836cb9214fe55ddbbfb899d5f75b82decc729`; Batch-12 checks passed; defect `phase-2-remaining-27-step7-a-103`. This is the exact repair independently identified by warning `s8a-4454bbe082772fc44e0e7520`.

### `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus`

- Rejection tuple: `gpt-5.6-terra` / `7e4fecff4df3cb3014c2f929760d94621397e8c68732c4ae4f094438dd2a769b`; decision `confirmed_fatal` (`dependency_citation`) at guard `85dfffb060c69d2e9c1db786cefec9d5df3f3163979c4be215c769b6e6f4f22e`.
- Repair: corrected the Choice audit to record that AC supplies the countable choice assumed by Cartan's closed-subgroup theorem as well as the maximal-torus structure theory. Post-guard `0124b0ae219809207166bd3243fdd3ccfb71987f144a90c6274675913b747f6a`; Batch-12 precheck, rendercheck and strict contract check passed; defect `phase-2-remaining-27-step7-a-104`.

### `cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `cb6de8e901ff03e4addafc7e424e3743b9e1fb88537f1ab922cb632ef5c77dba`; decision `confirmed_fatal` (`dependency_citation`) at guard `82d3155bb8614bf03c29d22ee1cdeaaac91eee20ec3205a6f1d0a6e89622cd74`.
- Repair: after proving the faithful image closed, gave it the closed-subgroup Lie structure, used automatic smoothness for the corestriction, proved its identity differential invertible from exponential naturality and dimension invariance, and used local inverses to prove the global inverse smooth. Post-guard `ffb2fb0b7a051002173289dcf22dfc54e6352ed188a536d1875118b3ba821a01`; Batch-12 focused checks passed; defect `phase-2-remaining-27-step7-a-105`.

### `cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `29bd7fe2a2dabcf5e446063b14cce067c85aaf4538ba65e2dda53f52b82105fa`; decision `confirmed_fatal` (`dependency_citation`) at guard `1116aec89489ab6f95acb3006e52d92e88aea6f64f966330e1c8bc48bc3282a9`.
- Repair: replaced the unrelated $L^p$-density citation by the exact compact-Hausdorff Urysohn separation corollary and recorded that AC supplies its dependent-choice hypothesis. Post-guard `1eca3c201eb986a5731cd455570709efae73c39e92c4b71a31dc98c90290e6ff`; Batch-12 focused checks passed; defect `phase-2-remaining-27-step7-a-106`.

### `cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `03957051092b8f5abf9eb179886b7d209e90eea12206c45c5a0769213ade7d27`; decision `confirmed_fatal` (`logic`) at guard `e14baf65b7c4486103a8c9fc054031573dcdf14e82bb1be1059e5a024d77cea`.
- Repair: replaced the ill-typed expression $f*T_{k_n}$ by a direct Cauchy--Schwarz comparison of the well-defined operators $T_p f$ and $T_{k_n}f$, then expanded $T_p f$ into contragredient matrix coefficients. Post-guard `bcd2894f29cd7851cddc24a058be599a18b94dba5679283817d7de5ddd7e880e`; Batch-12 focused checks passed; defect `phase-2-remaining-27-step7-a-107`.

### `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `2642d81e7ed1cb8a61ce5ef3abd35da40866caaeb80582419fa48cb12ad8c74d`; decision `confirmed_fatal` (`dependency_citation`) at guard `074ed425a19595762a4de7c86793a082e3920e25cb2f8f36e58e47e75cb149af`.
- Repair: no longer calls $(G,K)$ itself noncompact type when compact ideals may occur; instead it uses the definition's compact-ideal splitting and applies the symmetric-space interfaces to the effective pair, whose compact factors act trivially on the unchanged quotient. Post-guard `d2bda571a7f0fde4476a77a320d7314f1ebb213ccdcc80b59f8f6f09bbed4d06`; item precheck and rendercheck passed (this carrier is absent from the batch proof-contract scope); defect `phase-2-remaining-27-step7-a-108`.

### `cor-rank-of-a-compact-connected-lie-group-is-well-defined`

- Rejection tuple: `gpt-5.6-terra` / `89b9f62ee36eb50d817df6a49a6b63ee9bf8a171ab3f49ddd4b232fb09ed796b`; decision `confirmed_fatal` (`dependency_citation`) at guard `0fa9aa5d47189399117e0c3ebe6345c8c1bbb36fb27a0e619bf7a8cb900ec063`.
- Repair: added the maximal-torus existence theorem, chose a reference maximal torus, and then used conjugacy to prove every maximal torus has its dimension, eliminating the vacuous-existence gap. Post-guard `bd3fb89fd25427c9d53f0849047d3bc88cb2e01fe60e141ff96cac84c1b947ca`; Batch-12 focused checks passed; defect `phase-2-remaining-27-step7-a-109`.

### `cor-representation-ring-has-the-dominant-character-basis`

- Rejection tuple: `gpt-5.6-terra` / `351ff471f399da3b0aad3548b8d81ab9494a5d14db3b23ed5f398c8e6a3e8395`; decision `confirmed_fatal` (`dependency_citation`) at guard `46f6c06f8dc9fb33596ee4fddca415a377f4f08f66d24ba5686dd8105dfa68e5`.
- Repair: stopped attributing integral group-ring membership to the Weyl quotient formula. The proof now obtains a finite $T$-weight decomposition by unitarity and simultaneous diagonalization, proves Weyl invariance from the normalizer action, and proves injectivity using conjugacy into $T$. Post-guard `7f15c44242287486bf0ae849757ecd7d164b0353d34e92c1fd8100b118ac69d8`; Batch-12 precheck, rendercheck, and strict contract check passed; defect `phase-2-remaining-27-step7-a-110`.

### `cor-zero-level-symplectic-reduction-and-dimension-formula`

- Rejection tuple: `gpt-5.6-terra` / `2a3845cb3ba97bfc2f6d3129b24c94350d2465a2346bd16136368f002e572623`; decision `confirmed_fatal` (`logic`) at guard `d8f4cae50f04b526edcb0ebb76e8e0cc08cfd40cbf00d4e97d964777407caf73`.
- Repair: added the necessary nonempty-level hypothesis, because regularity is vacuous on an empty fiber while the original conclusion asserted a numerical manifold dimension. Post-guard `8556650bb35bb70b2fc4e3c370936e477f9275300012685baa10237c5d3ac999`; Batch-13 checks passed; defect `phase-2-remaining-27-step7-a-111`.

### `def-character-and-cocharacter-lattices-of-a-torus`

- Rejection tuple: `gpt-5.6-terra` / `0259c6885e7fa5fa28b4580434fb38cfcd4abaa946d08dfe9f3fd7b0286a3d8d`; decision `confirmed_fatal` (`logic`) at guard `29e9a409ee4cef8bb5bcb2e6f1772cd1d90db78d272c3a6b859aaf6cdf1d41a4`.
- Repair: corrected the ill-typed inverse of a character to the map $t\mapsto\chi(t)^{-1}$ on $T$ and stated the cocharacter inverse separately. Post-guard `724ac37ad9fe7a07b6ee61ad9b0904f1de1c875c0b1524f0727e44a4688d2128`; definition precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-112`.

### `def-coadjoint-representation-of-a-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `841ba6a99018430c2ddbcfcf2bcf95ec016b7161ee6757c1ec37f5e6c579e661`; decision `confirmed_fatal` (`logic`) at guard `0a987d49d280c1f8965d7c370ced028d6de27e1b7d2e3b5946951b4c4d8373c6`.
- Repair: replaced the false “inverse transpose” relation by the correct statement that the matrix of $\operatorname{Ad}^*_g$ is the transpose of the matrix of $\operatorname{Ad}_{g^{-1}}$. Post-guard `378a18f3765756a96d559f016cbbe5bcb0fa57c6ffc9d72995f3f7830f0ebaf0`; definition checks passed; defect `phase-2-remaining-27-step7-a-113`.

### `def-continuous-and-unitary-representation-of-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `5b0e9915a8995e864625bb61b79caca05fbe73853b5ea53cd90ec0b847db5559`; decision `confirmed_fatal` (`logic`) at guard `91f6d48e85dc003146d6fb4193ce1bb74d6e6731ebe98699dbfbb21dc2247d09`.
- Repair: changed the Hilbert-space representation codomain from the nongroup $\mathcal B(H)$ to the unitary group $U(H)$. Post-guard `1d1378f286818514d2bc7840c89867b96fe0adb02f1c23f4ca22e2981d73078d`; definition checks passed; defect `phase-2-remaining-27-step7-a-114`.

### `def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group`

- Rejection tuple: `gpt-5.6-terra` / `7b0258aaf781b2f25f33abcd26f8973e52afe2265b8103ea748be05d069611cb`; decision `confirmed_fatal` (`logic`) at guard `85343c63bb78fba062f9820e2ab57da94970308e9afbd92e268e7f3078fd734f`.
- Repair: replaced the false reversed-kernel “equivalence” by the valid substitution $y=xu$, obtaining $T_kf(x)=\int k(u)f(xu)\,du$, and identified the extra inversion symmetry needed for the former formula. Post-guard `bceda7ba2632a7faed68efa77dc5f00b3aafde370bbe77ea3928b0f9e7506636`; definition checks passed; defect `phase-2-remaining-27-step7-a-115`.

### `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `c195c083e481837db431977b4715759777368989d8dbaa901a64540a61b1aace`; decision `confirmed_fatal` (`dependency_citation`) at guard `a1d8859e9635a52eb8ede2cdbb2d8f6948bfd012fd482b65e154162d5eee5a4a`.
- Repair: supplied the missing strong-continuity proof from $C(G)$ density in $L^2$, uniform continuity on compact $G$, and translation isometries. Post-guard `9f7dc6f4d23cd70163ab9a9e55a7b51fb1a1b5dcddd77c2aedf5552f6c6dd3c1`; definition checks passed; defect `phase-2-remaining-27-step7-a-116`.

### `def-maximal-split-abelian-subspace-and-real-rank`

- Rejection tuple: `gpt-5.6-terra` / `65a38c643bacda5c00740e379c26c776790437a593e8c2e0e2478de355c20e80`; decision `confirmed_fatal` (`dependency_citation`) at guard `7593aae070728d7c49d441aa210ca3232d7e1fab77c19c651039e6d010fd74e1`.
- Repair: added the AC scope and split off compact ideals, which lie in $\mathfrak k_0$ and do not alter $\mathfrak p_0$, before invoking conjugacy for the effective noncompact-type pair. Post-guard `bc2a62f64e30a5b4a33ecd79abb637a89258fc9a42506321936fa7ccfe705a92`; definition checks passed; defect `phase-2-remaining-27-step7-a-117`.

### `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`

- Rejection tuple: `gpt-5.6-terra` / `7ae8a7c70a90feafea33e2883e5e14067a15acaa9c47b72fb86f454ced385233`; decision `confirmed_fatal` (`logic`) at guard `19e5524063b49395fee9d5f66ac9dcb74215c890547632c3e0e394167d9bf64a`.
- Repair: handled $\Phi^+=\varnothing$ before taking a maximum height; then $\mathfrak n^+=0$ is nilpotent. Post-guard `b202b94e539d65b167cf2b72717ff985be355dc3a445dff8abba28a30b8192d2`; definition checks passed; defect `phase-2-remaining-27-step7-a-118`.

### `def-positive-restricted-roots-and-nilpotent-n-algebra`

- Rejection tuple: `gpt-5.6-terra` / `8c6f11654162732414f254fdd67698978360671e624abaa29b92ef33725316aa`; decision `confirmed_fatal` (`dependency_citation`) at guard `a0902bb867cc5bf3e001bf0a30327315968fac3d3c0fa5495fd5a10e6635ea9e`.
- Repair: added the AC hypothesis and exact axiom dependency required by the Iwasawa theorem whose nilpotency, solvability, and direct-sum conclusions the definition imports. Post-guard `bd3d968f8a2338cfbe808eaeede3f5745451d52b38fc8df23b5c85ef0d60288e`; definition checks passed; defect `phase-2-remaining-27-step7-a-119`.

### `def-riemannian-symmetric-pair-of-noncompact-type`

- Rejection tuple: `gpt-5.6-terra` / `d3690e0fee9cb79119897f0f0ccf7617b36133221c19cde5d194b5e5d03adf72`; decision `confirmed_fatal` (`logic`) at guard `32658a1fb5cbd8eaaa69e4e1d2101a4b13b42a9895e655f58b8848ff5febec85`.
- Repair: restored the no-nonzero-compact-ideal condition in the Lie-algebra-level reformulation. Post-guard `b444bf39aaa16a5c3b19b967d37f366c19ec3ca527ed3f311adb5c30c28c0235`; definition checks passed; defect `phase-2-remaining-27-step7-a-120`.

### `def-root-datum-of-a-compact-connected-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `197f87ab2aeccc8fa27e79444654daae74fffe42f25041359217fe741bde9e05`; decision `confirmed_fatal` (`logic`) at guard `29df9b75cd86b1a0f598c23e511765822ffb8e1b8db739302c11d99c0893b264`.
- Repair: allowed empty finite root and coroot sets and recorded the torus datum $(X,\varnothing,X^\vee,\varnothing)$, so the definition now applies to every compact connected Lie group as claimed. Post-guard `c550f28abbb2b3ad380316b8a57e5aafce7653859cdc9440b2b1eabbc6503a76`; definition checks passed; defect `phase-2-remaining-27-step7-a-121`.

### `def-roots-of-a-compact-connected-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `f9d497d4d5f9aa75a973346d164464ab421e2eae1e2a490426836e1035c6d9a3`; decision `confirmed_fatal` (`dependency_citation`) at guard `08c9c20c9fc4f3404e8deb4c819be2b2033c5e9e461847a071907f819d829c62`.
- Repair: replaced the inapplicable semisimple-Lie-algebra weight supplier by unitarizability, spectral, and simultaneous-diagonalisation suppliers that prove the compact-torus character decomposition. Post-guard `9664d4da220b36ca42dc993c71304357b54c389fa25ed412f9f03e4849e978cb`; definition precheck and rendercheck passed, and all affected Batch-12 consumer contracts passed strict validation; defect `phase-2-remaining-27-step7-a-122`.

### `def-satake-diagram`

- Rejection tuple: `gpt-5.6-terra` / `2a82d22767b06352a7896ce25b32e53ba2462b45b967608d0c359ee4a45963c6`; decision `confirmed_fatal` (`logic`) at guard `2d74f662ad10fe3d0b01a0611812c6fc9906a62f7a2605a698459f860bea08ff`.
- Repair: restricted change-of-base redecorations to realized diagrams retaining the split part and restriction map, while abstract diagrams are compared by decorated-data isomorphism. Post-guard `28c3bca8a17a1bae26d9366dafd922468a49d82f060e89842bd0d53426fd6310`; definition precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-123`.

### `def-theta-stable-cartan-subalgebra-and-compact-split-parts`

- Rejection tuple: `gpt-5.6-terra` / `d3a939ba5722f6cda1aac157387e60c9f4b63f26612a6b1fa7bceb02af520ada`; decision `confirmed_fatal` (`logic`) at guard `3a75b43c5dd6f23dd977b94bce19804cdcf609f76720fca8f2a1fc9ac4ef51ff`.
- Repair: replaced the invalid signed-sum inference by invariance of the Killing-form inertia and Sylvester's law. Post-guard `731d767e3b5aa974c9454462e3c225061c38277ba8b9922eda4c9a6b8c6e848b`; definition precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-124`.

### `def-torus-and-maximal-torus-in-a-compact-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `616b13eac21f227723931e5c2b4f367a0f3903b61fe7826984ffab27e4227860`; decision `confirmed_fatal` (`logic`) at guard `86bfd3629f1b7204201053787e599a04348835a9ba577e285b8718c257a3e000`.
- Repair: corrected the p-adic integers from “connected” to totally disconnected. Post-guard `aeab4af90d782c2a021084e40c4d3a0ca793b432d9d2e094f91542d8a91dcc34`; definition precheck and rendercheck passed, and all affected Batch-12 consumer contracts passed strict validation; defect `phase-2-remaining-27-step7-a-125`.

### `def-vogan-diagram`

- Rejection tuple: `gpt-5.6-terra` / `895f676c0361e71fc6c687de60402f6be7dfe17dd1d5eba1713fa9a0b9a50166`; decision `confirmed_fatal` (`logic`) at guard `b76672c1813a7f852836fc1b11c56ee1dc634de7ac31d10b01203e1f5652dc18`.
- Repair: removed the false reconstruction of all fixed-root signs from the fixed-simple-root painting and retained the full marking as abstract data. Post-guard `a79d359728964833c1bb383cc069d7c35f405f9bc3bc6c1473c9999ad5d64ce1`; definition precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-126`.

### `def-weyl-group-of-a-compact-connected-lie-group`

- Rejection tuple: `gpt-5.6-terra` / `2d59850b20aba48e1887d975c64be1384631ffba7e4bb9a038cec27807224b2f`; decision `confirmed_fatal` (`logic`) at guard `3ea681db86338454af1632107d2ac29040de93df17dfedb8d99e01aa83712123`.
- Repair: corrected the representative-change computation to conjugation by $gt'$ and used commutativity in $T$. Post-guard `b9c9128957680afea4030c3511d687c51b761fc19f813a59c3c291ba3a4b0f99`; definition precheck and rendercheck passed, and all affected Batch-12 consumer contracts passed strict validation; defect `phase-2-remaining-27-step7-a-127`.

### `ex-a-nonreduced-bc-root-system-from-a-real-form`

- Rejection tuple: `gpt-5.6-terra` / `0eee91f29f39fb0e7920e8054dfd10ed4adb656caeea255d06473650387ad3a8`; decision `confirmed_fatal` (`logic`) at guard `73d2ac2dc7b57f661db65d2922ba66c8c1a6ef89fdf382153cf9887abba40869`.
- Repair: added the missing trace-zero condition so the displayed algebra is $mathfrak{su}(p,q)$ rather than $mathfrak u(p,q)$. Post-guard `4cc77fb3b80ff93b64299ab3aaa59f0def5e31ae21094809074d9ebfd3547132`; direct precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-128`.

### `ex-a-tensor-product-decomposition-for-sl-two`

- Rejection tuple: `gpt-5.6-terra` / `083c8d68e1623700cfdaef7b762aea536e5402f690a8ab4a1a1414d57dbc2ef2`; decision `confirmed_fatal` (`logic`) at guard `cffbdc1f4463c2a75de696c3b4cd7cacdd34c6d720e1537e4b294aeddf881b75`.
- Repair: separated parity and support-zero cases and made the coefficient count nonnegative before the case comparison. Post-guard `fa7f7ffb7d0fefff4bda5f29a88ad3dcdb57ea299c212b2127c4050e813bae6e`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-129`.

### `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle`

- Rejection tuple: `gpt-5.6-terra` / `fc096ac24e0d7ebf0f15a80c96def11bf65b111a11f6f61e444c22c42586c7ed`; decision `confirmed_fatal` (`dependency_citation`) at guard `4ad23252bec43c5c7a3c677e9231f70c07ff88c616e6e3a39ba759380a28d379`.
- Repair: directly proved the hat-map bracket, trace pairing, adjoint rotation action, and coadjoint rotation action instead of attributing them to an insufficient example. Post-guard `de1ad058be1924bab5aae4f017a5f72e2bb96a3d89ed520eb8f31dcfe2a97dee`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-130`.

### `ex-cartan-involution-and-k-plus-p-for-sl-n-r`

- Rejection tuple: `gpt-5.6-terra` / `1ff4f0064d9bb65bbab1f857812f4bde36b1ad909784ac77036cc239cb98b333`; decision `confirmed_fatal` (`logic`) at guard `186a03b125ce9d899a1d2b3f902721ba691dc46a4987aac82440bd8e5f845445`.
- Repair: corrected the endpoint discussion: the zero algebra $mathfrak{sl}_1(mathbb R)$ is semisimple, while $n\ge2$ selects the nonzero classical case. Post-guard `30a2cd9d8c1a3549cb567ba15faf1fcd00cbcb30ad696e5906144aacfb9c4ded`; direct precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-131`.

### `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map`

- Rejection tuple: `gpt-5.6-terra` / `5b51552367eadd71a4df9a6652864e58c2b36aa6c4eca2f294be72138e24d1d5`; decision `confirmed_fatal` (`logic`) at guard `dc7800f1e501453e3d8001402455986d756db119d499b23b9c86d89fe92e68b7`.
- Repair: typed the circle Lie algebra and its dual explicitly and verified the component equation for every Lie-algebra element, not only the unit generator. Post-guard `10b68dd9bbc5a94285924e877fe66c3b59c00f35edd2efd9e9973b63b38ee0a0`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-132`.

### `ex-compact-and-split-cartan-subalgebras-of-sl-two-r`

- Rejection tuple: `gpt-5.6-terra` / `9cd81c7b8b301d716109aebc3ee68b5f3b3f8c3554b00ce7128706b9679c2471`; decision `confirmed_fatal` (`logic`) at guard `0df8124667a63b1b20fda7f3b83a155f62f2eb9ce404baf4f75715338e8ef5d4`.
- Repair: computed the actual normalizer condition $[X,H]\in\mathbb RH$ and its compact-line analogue rather than only the centralizers. Post-guard `43ea50817973b6bf81888c5ed9a4e9d178a873a04762a0334606f77838bc9e3b`; direct precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-133`.

### `ex-compact-and-split-real-forms-of-sl-two-c`

- Rejection tuple: `gpt-5.6-terra` / `87a1884615324900a43d9b849da8af1cf362dc4d4759fd726a3d26ef1f52688b`; decision `confirmed_fatal` (`dependency_citation`) at guard `6fdcf4d6623c383c0d5a7fd29b61a2206546c132a2cc1b07a67afb356d99e1fd`.
- Repair: declared and registered $mathrm{AC}_\omega$, which the two matrix Lie-group suppliers assume, and recorded its exact use. Post-guard `058546f867cdc776b2203de423330be01007b87bd78bab6480afc12eedce3cd9`; direct precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-134`.

### `ex-complex-projective-space-as-a-circle-symplectic-reduction`

- Rejection tuple: `gpt-5.6-terra` / `d663293084e92810bed867e8b730889f560f3bddb26dc46373845645af9a2c27`; decision `confirmed_fatal` (`logic`) at guard `466be4db0e0f45de3dd3478cc077dd975383d193a8b3d77ca725d579e7c17c85`.
- Repair: added $n\ge1$, excluding the empty positive-radius level in $mathbb C^0$. Post-guard `9f059fc10f14c3b1d5333b517f873efc0f2be8cd1728f69fcc571e70d2604bd9`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-135`.

### `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra`

- Rejection tuple: `gpt-5.6-terra` / `55556c4204416a10d3f6012d0862bf6b881fba0a6f4513f7d26ca0589554b55e`; decision `confirmed_fatal` (`logic`) at guard `96150765f63aabffeb0ebfab8ec29503c5477767b76e770c73eebb1ae57c810f`.
- Repair: corrected the complex-dimension check for the complexification and its two-factor target from $d$ to $2d$. Post-guard `5d00ea99426390509123c594f9f7deeb2907d54608d9fde5e680f3837d18a0da`; direct precheck and rendercheck passed; defect `phase-2-remaining-27-step7-a-136`.

## Reader-warning dispositions

- `s8a-504d6f91bba7d13a5818352d` — `covered_by_rejection` via the exact confirmed-fatal rejection of `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`; repaired sign identity and checked contract.
- `s8a-d1d94383483c8b5b570d7e11` — `covered_by_rejection` via the exact confirmed-fatal rejection of `thm-root-sl-two-triple`; repaired the bracket sign and normalization and checked the contract.
- `s8a-8a04705b005451a70517e6fa` — `covered_by_rejection` via the exact confirmed-fatal rejection of `lem-killing-length-of-a-root-is-nonzero`; repaired the inherited sign and checked the contract.
- `s8a-95c9c72fdb655c4bbe61b22b` — `covered_by_rejection` via the exact confirmed-fatal rejection of `ex-root-strings-in-type-a-two`; repaired the root-string indexing and checked the contract.
- `s8a-ca3e35230c0f4eba4b54efcc` — `confirmed_fatal` independently of the targeted rejection: Statement (i) transposed all unequal-length Cartan pairs; repaired against guard `f5716626bd13ea94d1db8c9a4466c07f2169aac343cdb437f74eaeaffbd962cd`, yielding `ac3cf023bc6967575540c18bdc5cc502c68c1e0845b85b5eb041d8e6307ad2d8`.
- `s8a-32a5894c99c2e337c193ecbd` — `confirmed_fatal` independently of the targeted Peter–Weyl rejection: [L5] attributed the nonzero-orthogonal-complement theorem to the Fourier-expansion supplier. The guarded Peter–Weyl edit added the exact orthogonal-decomposition dependency and separated the two claims.
- `s8a-912c4448ec9268d07012201a` — `nonfatal` duplicate of `s8a-32a5894c99c2e337c193ecbd`; the one citation defect received one guarded repair and one defect row.
- `s8a-957adcaa2f669c513daa2534` — `nonfatal`: the circle supplier omits the adjective “Lie,” but the proof uses only the explicit quotient Lie-group structure already displayed in the item; no claim or inference fails.
- `s8a-86041504bf6d2fcc5e6f5825` — `nonfatal` duplicate of `s8a-957adcaa2f669c513daa2534`.
- `s8a-0c4f5daa7b7ad293b0e3bfbd` — `nonfatal`: “abstract root system” is immediately qualified by the nonreduced conclusion and is not used as the library's defined reduced-root-system term; this is presentation only.
- `s8a-6620c22509cb5bf85dd67ba3` — `not_defect`: this is explicitly a reading-depth disclosure and asserts no mathematical defect.
- `s8a-4454bbe082772fc44e0e7520` — `covered_by_rejection` via the exact confirmed-fatal rejection of `cor-complete-reducibility-for-compact-lie-groups`; the repair installed the precise orthogonal-decomposition and dimension suppliers.

## Rejudge targets

- `def-cartan-subalgebra-of-a-lie-algebra`
- `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`
- `def-toral-and-maximal-toral-subalgebra`
- `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras`
- `prop-brackets-of-root-spaces`
- `cor-opposite-root-spaces-pair-nondegenerately`
- `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`
- `thm-root-sl-two-triple`
- `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root`
- `def-root-and-root-space-relative-to-a-cartan-subalgebra`
- `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`
- `prop-root-reflections-are-induced-by-inner-automorphisms`
- `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple`
- `lem-killing-length-of-a-root-is-nonzero`
- `fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root`
- `fs-all-integer-multiples-of-a-root-are-roots`
- `thm-finite-dimensional-representations-of-sl-two`
- `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra`
- `ex-root-strings-in-type-a-two`
- `ex-root-space-brackets-for-matrix-units`
- `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra`
- `prop-dimension-formula-from-roots`
- `fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data`
- `ex-cartan-subalgebra-and-roots-of-sl-two`
- `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras`
- `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`
- `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`
- `def-reducible-and-irreducible-root-system`
- `def-open-and-closed-weyl-chambers`
- `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram`
- `prop-root-systems-decompose-uniquely-into-irreducible-components`
- `thm-classification-of-irreducible-reduced-crystallographic-root-systems`
- `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`
- `def-free-lie-algebra-on-a-vector-space`
- `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`
- `thm-universal-property-of-the-free-lie-algebra`
- `prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers`
- `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`
- `ex-cartan-subalgebras-of-a-direct-sum`
- `prop-dimensions-of-the-exceptional-simple-lie-algebras`
- `thm-rank-two-root-system-classification`
- `prop-weyl-length-equals-positive-root-inversion-number`
- `thm-cartan-killing-classification-of-complex-simple-lie-algebras`
- `thm-existence-of-each-classified-root-system`
- `fs-every-connected-finite-graph-is-a-dynkin-diagram`
- `rem-dynkin-diagrams-do-not-classify-global-lie-groups`
- `def-classical-complex-matrix-lie-algebras`
- `ex-root-system-a-one`
- `ex-weyl-group-of-a-n-is-the-symmetric-group`
- `prop-classical-types-correspond-to-sl-so-and-sp`
- `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`
- `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`
- `ex-dynkin-diagram-duality-of-b-n-and-c-n`
- `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`
- `ex-classical-root-systems-in-euclidean-coordinates`
- `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`
- `ex-low-rank-dynkin-coincidences`
- `ex-root-systems-a-two-b-two-and-g-two`
- `thm-existence-theorem-for-complex-semisimple-lie-algebras`
- `fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system`
- `ex-serre-relations-for-a-two-recover-sl-three`
- `thm-root-string-property`
- `lem-simple-reflections-preserve-weight-multiplicities`
- `prop-root-vectors-shift-weight-spaces`
- `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`
- `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two`
- `def-partial-order-on-weights`
- `def-integral-dominant-and-strictly-dominant-weights`
- `prop-root-systems-of-the-classical-complex-lie-algebras`
- `def-dominant-integrable-highest-weight-cyclic-module`
- `ex-positive-roots-and-highest-root-of-g-two`
- `lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`
- `lem-integrability-relations-for-a-dominant-highest-weight`
- `def-weyl-vector-rho`
- `cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules`
- `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`
- `lem-simple-root-integrability-bounds-the-dominant-cyclic-module`
- `lem-highest-weight-modules-have-weights-below-the-top-weight`
- `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`
- `prop-the-adjoint-representation-has-highest-weight-the-highest-root`
- `ex-the-adjoint-representation-and-the-highest-root`
- `ex-verma-modules-for-sl-two`
- `cor-normalized-haar-measure-on-a-compact-lie-group`
- `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics`
- `thm-conjugacy-of-maximal-tori`
- `thm-schur-orthogonality-for-compact-lie-groups`
- `thm-maximal-tori-exist-in-compact-lie-groups`
- `thm-weyl-integration-formula`
- `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group`
- `thm-compact-connected-lie-groups-are-classified-by-root-data`
- `thm-analytic-and-root-system-weyl-groups-agree`
- `thm-highest-weight-classification-for-a-compact-connected-lie-group`
- `thm-structure-of-a-compact-connected-abelian-lie-group`
- `thm-weyl-character-formula-for-compact-connected-lie-groups`
- `thm-compact-group-weyl-group-is-finite`
- `prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t`
- `thm-peter-weyl-for-compact-lie-groups`
- `cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional`
- `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian`
- `cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic`
- `cor-complete-reducibility-for-compact-lie-groups`
- `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus`
- `cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group`
- `cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group`
- `cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group`
- `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group`
- `cor-rank-of-a-compact-connected-lie-group-is-well-defined`
- `cor-representation-ring-has-the-dominant-character-basis`
- `cor-zero-level-symplectic-reduction-and-dimension-formula`
- `def-character-and-cocharacter-lattices-of-a-torus`
- `def-coadjoint-representation-of-a-lie-group`
- `def-continuous-and-unitary-representation-of-a-compact-lie-group`
- `def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group`
- `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`
- `def-maximal-split-abelian-subspace-and-real-rank`
- `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`
- `def-positive-restricted-roots-and-nilpotent-n-algebra`
- `def-riemannian-symmetric-pair-of-noncompact-type`
- `def-root-datum-of-a-compact-connected-lie-group`
- `def-roots-of-a-compact-connected-lie-group`
- `def-satake-diagram`
- `def-theta-stable-cartan-subalgebra-and-compact-split-parts`
- `def-torus-and-maximal-torus-in-a-compact-lie-group`
- `def-vogan-diagram`
- `def-weyl-group-of-a-compact-connected-lie-group`
- `ex-a-nonreduced-bc-root-system-from-a-real-form`
- `ex-a-tensor-product-decomposition-for-sl-two`
- `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle`
- `ex-cartan-involution-and-k-plus-p-for-sl-n-r`
- `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map`
- `ex-compact-and-split-cartan-subalgebras-of-sl-two-r`
- `ex-compact-and-split-real-forms-of-sl-two-c`
- `ex-complex-projective-space-as-a-circle-symplectic-reduction`
- `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra`

## Sources consulted

- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, full lecture notes, Example 21.9 and Definitions 23.8, 23.11, 23.14, 23.15 (official MIT OCW PDF). Exact use: Example 21.9 lists the twelve $G_2$ roots, while the exceptional coordinate models give the $F_4,E_8,E_7,E_6$ counts $48,240,126,72$ and ranks $4,8,7,6$ used in the repaired dimension calculation.
- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter II, Proposition 2.44, printed pp. 151–152 (author-hosted PDF). Exact use: the proposition states and proves that the root system of a complex semisimple Lie algebra is irreducible if and only if the algebra is simple, replacing an inflated internal citation in the Cartan–Killing classification proof.
- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, Lecture 23, Exercises 23.10 and 23.13 (official MIT OCW PDF). Exact use: these exercises identify the displayed coordinate vectors as the simple positive roots for the $F_4$ and $E_8$ polarizations and give their Cartan matrices, closing the existence theorem's diagram-identification gap.
- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, Examples 20.12--20.14 and Remark 23.18 (official MIT OCW PDF). Exact use: the examples compute the classical coordinate root systems, while the remark records the low-rank root-system coincidences $D_2=A_1\sqcup A_1$, $D_3=A_3$, and $B_2=C_2$ used to separate the stable simple ranges from the exceptional cases.

## Continued adjudications: example block

### `ex-cotangent-reduction-for-a-principal-bundle-at-zero`

- Rejection tuple: `gpt-5.6-terra` / `f285d57401a0dbdcea2d830ecf3d2b8842d05861dad2047510b982f928085794`; decision `confirmed_fatal` (`logic`) at guard `e5c8ddae0d5a3529351af3ad5fe963180dc89b6f20750be115a7e028120fdc4c`.
- Repair: separated the invariant level map from its induced quotient map, identified its fibres with the $G$-orbits, proved the induced map a diffeomorphism in local principal-bundle charts, and compared forms through the quotient projection. Post-guard `0c8fd465f2cd0ad9b544b5585b50024cd1a26439c9d0ea5c97809b259d565380`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-137`.

### `ex-diagonal-action-and-addition-of-angular-momenta`

- Rejection tuple: `gpt-5.6-terra` / `93f83f02f1018acecfcfcd1154df54de295bf482460ebc9cf448e79ffb3df662`; decision `confirmed_fatal` (`dependency_citation`) at guard `83e4400092c692a92fa4724206ab3b626d44c0ff1f44f46d23c7865ff198ebc4`.
- Repair: proved rotation covariance of the cross product directly and identified it with the coadjoint action before applying the product moment-map proposition. Post-guard `de1973bc315bf60fb32f573769687b63b3395c5864c847f6332dc8b2ee6740ce`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-138`.

### `ex-fourier-series-on-a-torus-as-peter-weyl`

- Rejection tuple: `gpt-5.6-terra` / `2ddf0dcc656312b73ef0320aab6d64bb212356916d01a7af7bf2e912f44898f3`; decision `confirmed_fatal` (`dependency_citation`) at guard `d22e1c5fe14a85af779aa284d6c43f940dbc3245ac4eaecc8fd754533eb2f307`.
- Repair: cited the scalar-endomorphism corollary and derived that every complex irreducible representation of the abelian torus is one-dimensional. Post-guard `d42add084fd3a80b1fba5a149875c17b6e9bc451bdf8f330d86f6f53c066c493`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-139`.

### `ex-grassmannians-from-unitary-symplectic-reduction`

- Rejection tuple: `gpt-5.6-terra` / `e9f28ecd956b34133f248530ec98037b8a98f8ba4ae2a3503be4ca8baf4e412d`; decision `confirmed_fatal` (`logic`) at guard `839b3f060eeb5963e60fea4c3e94b4e97f04ad14c3053af717473fae5bea409f`.
- Repair: imposed $1\le k\le n$, supplied the exact unitary-group interface, and derived regularity from freeness on the level. Post-guard `fb76ebc305376ae2ca274400aed98087507745bccb66e5d31c76697cacbe4fed`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-140`.

### `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n`

- Rejection tuple: `gpt-5.6-terra` / `91a06e4697345169240be8cacb33b862c50fc61af2ec4376dbefe1caaa108719`; decision `confirmed_fatal` (`dependency_citation`) at guard `6fae4b7051ca571a4afad924837fd01c58123bbfc847549d65dd961515fb5040`.
- Repair: replaced the supplier claim that omitted the $m=4$ case with a direct adjoint-trace computation of $B(X,Y)=(n-1)\operatorname{tr}(XY)$ on a matrix basis for every $n\ge2$, then used the exact nondegeneracy criterion. Post-guard `656970469510c24b13f5bf1666c36d100739d130eff9c7b1b9e9405b4fa3b12f`; direct precheck and rendercheck passed. This real-form example is absent from the pre-existing Batch-13 proof-contract scope, so no strict item contract exists to run; defect `phase-2-remaining-27-step7-a-141`.

### `ex-iwasawa-decomposition-of-sl-two-r`

- Rejection tuple: `gpt-5.6-terra` / `c2eee1dd62a7d9f78771496d068bc889b769f575422bbdddb7e8d3a3294df029`; decision `confirmed_fatal` (`logic`) at guard `7b96bd6b6657d704d4687e0c41d11dbd03086b6b2f87638013180875d0f54199`.
- Repair: constructed $\Theta(g)=(g^{\mathsf T})^{-1}$, verified its differential, its fixed group $SO(2)$, and its pointwise action on the center before invoking global Iwasawa. Post-guard `43e2a5fb33bd7e6b045de897b4e29f448cfd93819e855c2ff164a4a0f435a2fa`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-142`.

### `ex-matrix-coefficients-of-the-standard-su-two-representation`

- Rejection tuple: `gpt-5.6-terra` / `b037b9f80f085dbdbafbd2146837409aeffb1fc1836a2f16ffd0c253b859bff9`; decision `confirmed_fatal` (`logic`) at guard `9d42336c70ff4243c5166ad73bdda214433e5c06a24615962df2aba6d44a2d27`.
- Repair: corrected $\pi_{21}=-\overline b$ and $\pi_{12}=b$, and proved irreducibility directly from the explicit transitive action on the unit sphere. Post-guard `2deabe0d0084f9ea1a7bffef57b40f69947505c3704df68972e69909509368f8`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-143`.

### `ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n`

- Rejection tuple: `gpt-5.6-terra` / `2c005939c23809f6762be9cd891e94bca61321e486d7f8feac1344916cce2716`; decision `confirmed_fatal` (`logic`) at guard `d80396d4106d9c3714b817a3d2c8653beea173c6aef14b62603363f5690bb8a8`.
- Repair: corrected the determinant adjustment to use a diagonal unitary of reciprocal determinant and supplied direct centralizer arguments, including $n=1$. Post-guard `d7ca2e78e0da432cab8c88cdf6daf6e1939cb55a477401df66c5e02dbf4b6448`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-144`.

### `ex-normalized-haar-measure-on-a-torus`

- Rejection tuple: `gpt-5.6-terra` / `da5201fff7093d2b3efdbac8538731cf962207fe998e3f87e0abc38d5515b499`; decision `confirmed_fatal` (`dependency_citation`) at guard `f3b4ece19030e23df387edeb7a945b8f962b80ea8523a53d97e40c274bea2f86`.
- Repair: proved inner and outer regularity of the fundamental-domain pushforward from the exact Lebesgue Radon theorem and handled the one-point torus separately before using Haar uniqueness. Post-guard `95b46041bcead260d917095f3ba8b8ef2880cacd25049065671e5ec8d3ac9ab2`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-145`.

### `ex-polar-cartan-decomposition-of-sl-n-r`

- Rejection tuple: `gpt-5.6-terra` / `423dd352e09adb71c43d1a7f93f0e1586af9b5e76ac240799ee7634cb47f6d41`; decision `confirmed_fatal` (`logic`) at guard `7735b95f6e1e7f8d2384850569975ac132fec926b11b274772da11595e4c04c5`.
- Repair: verified the global involution, its fixed group, its differential, and its pointwise action on the center before invoking the global Cartan theorem. Post-guard `aa846b1650a3561a955bdc2e799ff5a4eade8e977b26fd7199de7e28c7bfa7d8`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-146`.

### `ex-reduced-harmonic-oscillator-flow-on-projective-space`

- Rejection tuple: `gpt-5.6-terra` / `8a9a43eaae3c589559df20fd63c8c31e1a2fd69b1e8ca3787bf283d857a3a173`; decision `confirmed_fatal` (`logic`) at guard `c55dd9d1899d5b6303813a858d562d01e25585fa5dd39a0662ee347bfac0e8be`.
- Repair: added the necessary hypotheses $n\ge1$ and $c>0$ for the nonempty free Hopf-sphere reduction. Post-guard `d8cc1bdeb5462322e6996557dcdda67d37be4e16e1b5428e749684da6a053cab`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-147`.

### `ex-restricted-roots-of-sl-n-r`

- Rejection tuple: `gpt-5.6-terra` / `a1ffbc5d606d28c922b2d40da4f4b03ebd52f522c5adfaa04aebbb36315380c1`; decision `confirmed_fatal` (`logic`) at guard `b8fe105015149bb0c3f0d8226b347ad7fc015010cb1b67dd9527ed482233ce84`.
- Repair: compared the eigenvalue equation for every $H\in\mathfrak a$, proving equality of functionals instead of inferring it from one regular diagonal element. Post-guard `20e1301251b15a974ec7f9d00d7ce5f107916fef65674db9026c4291fc4b6674`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-148`.

### `ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case`

- Rejection tuple: `gpt-5.6-terra` / `6ce6ac64b03496dc2820723860d9d77fa9f6412fc373058f8d7afb0f9b6005fa`; decision `confirmed_fatal` (`logic`) at guard `5f5dde54357c7c64a61e5e967d2b54ba7e11ba3aea25bcc602b6d5a7eed5fdc4`.
- Repair: explicitly ranged $\pi,\sigma$ through a fixed set of unitary representatives, so the diagonal case $\pi=\sigma$ covers exactly the equivalent case. Post-guard `ca7d5b260db74dccb5df132bb2bf5e93ce7397f51765947626a8005ff89ef990`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-149`.

### `ex-shifting-trick-for-a-nonzero-coadjoint-orbit`

- Rejection tuple: `gpt-5.6-terra` / `d576fdd5b0061c62e98f1d6faffc0308ed0466d9c7ac32d11470f24999641d86`; decision `confirmed_fatal` (`dependency_citation`) at guard `ec9f2ad0994aed43ce786d28c5997dcfd661b7eb92ccb499458d62313d6d76d3`.
- Repair: proved surjectivity of $d\mu$ from the scalar-triple-product identity, proved the stabilizer action free, used compactness for properness, and only then applied the dimension and shifting interfaces. Post-guard `213e436fb4c4e720bcb22403c2054d990c55468e3140a2c6dd9f0c352c6aff60`; direct precheck, rendercheck, and strict Batch-13 contract passed; defect `phase-2-remaining-27-step7-a-150`.

### `ex-standard-and-dual-representations-of-sl-n-by-highest-weights`

- Rejection tuple: `gpt-5.6-terra` / `3acb12849aef7da6e44fe0dae8abc0284edf6f67ef8e9b422a0b3a2f882f3416`; decision `confirmed_fatal` (`dependency_citation`) at guard `7bf0e82e5814685a4d1120cb964fb8c779c612a1681b3aa67d796d8ba3666339`.
- Repair: cited the exact highest-weight classification theorem for existence and uniqueness and restricted the definitions to the claims they actually state. Post-guard `c5068a9a0b79abb5bed57c87d9e8496b228097e5d0a3af6d6d4c9f869d5a34f5`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-151`.

## Additional rejudge targets

- `ex-cotangent-reduction-for-a-principal-bundle-at-zero`
- `ex-diagonal-action-and-addition-of-angular-momenta`
- `ex-fourier-series-on-a-torus-as-peter-weyl`
- `ex-grassmannians-from-unitary-symplectic-reduction`
- `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n`
- `ex-iwasawa-decomposition-of-sl-two-r`
- `ex-matrix-coefficients-of-the-standard-su-two-representation`
- `ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n`
- `ex-normalized-haar-measure-on-a-torus`
- `ex-polar-cartan-decomposition-of-sl-n-r`
- `ex-reduced-harmonic-oscillator-flow-on-projective-space`
- `ex-restricted-roots-of-sl-n-r`
- `ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case`
- `ex-shifting-trick-for-a-nonzero-coadjoint-orbit`
- `ex-standard-and-dual-representations-of-sl-n-by-highest-weights`

## Continued adjudications: structural representation block

### `ex-the-eight-dimensional-adjoint-representation-of-sl-three`

- Rejection tuple: `gpt-5.6-terra` / `2df098900f8b5a24213a1aaf23fa308dbfaac3f024dac0d1dba41c1d972a64bc`; decision `confirmed_fatal` (`dependency_citation`) at guard `317c8b22013b8fe255f8e43ffe7a6e6dc7a5044ba4b3c891787eb196b0beca94`.
- Repair: removed an irreducibility conclusion that the cited supplier did not establish; the example now claims only the proved weight-space decomposition and dimension. Post-guard `22b46797392b7de6f66c7629b0bbf39e58d739bb6107b83c6aaf0678822917a6`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-152`.

### `prop-top-highest-weight-summand-in-a-tensor-product`

- Rejection tuple: `gpt-5.6-terra` / `b82755b29f3dbb4d2ab98a1c5fd5fbe811704448868be238740596cea7eaab58`; decision `confirmed_fatal` (`logic`) at guard `28a33e18859deba2aeebd49976adac8ae8d3782e271333d8e488cd647a423683`.
- Repair: removed the false assertion that a submodule of a semisimple direct sum is literally a selected subset of fixed summands; complete reducibility plus the one-dimensional top-weight space now gives the unique top summand. Post-guard `800bdd3ccea71f84460fad7425c5b3a1e3fab97dc9aca5776cfce9f1386c3f2b`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-153`.

### `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`

- Rejection tuple: `gpt-5.6-terra` / `4344d1e43e3171a471e135d910d4ffb155d4258c6507118840dc37680eafd8d0`; decision `confirmed_fatal` (`logic`) at guard `51bc3e89e2d09d15cf197337549feb2c7c8d10336d0ce73e6efb2dbc4df1027b`.
- Repair: supplied explicit symmetric and alternating invariant subspaces and a direct weight/root-arrow proof that the symmetric square is irreducible. Post-guard `8932f02d0ece7e766797da81839545a75271c0b89b68b4f9451851f836d9cd11`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-154`.

### `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`

- Rejection tuple: `gpt-5.6-terra` / `7b467d042527e7f92559b1281fbd84f3f203c8e4c4855e44f17873594d534e33`; decision `confirmed_fatal` (`logic`) at guard `d70ad210f2d61db61fd4a46efea3609cf242b100ebcc8d9e4fce57f1549202be`.
- Repair: proved positivity on each root direction by the adjoint-trace identity $\alpha(H_\alpha)=4/\sum_\beta\beta(h_\alpha)^2>0$ before passing to the real span. Post-guard `802f8f0fe3828da8f19a86d8529cb85a648b74df72c4b7e14afb2f49356eec72`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-155`.

### `lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient`

- Rejection tuple: `gpt-5.6-terra` / `fc769082e23f1e647164805b38609d153790ceda25c75669c8962fdaf69125f4`; decision `confirmed_fatal` (`dependency_citation`) at guard `8839833d0e39bbeb931640117365ef78583742d329cfa50a554b1c2bf3a89606`.
- Repair: added the exact root-vector weight-shift dependency and used it with PBW to prove that the highest-weight line survives every proper quotient. Post-guard `be96fd3ea1f0cc62b7d499ac4e41e1f7e5f937c81c0b2c7dc7a6fbb86c035a49`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-156`.

### `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`

- Rejection tuple: `gpt-5.6-terra` / `024059a74433c2b99f300441135e047fe5d05a28244a5aae9404d5c492d08370`; decision `confirmed_fatal` (`dependency_citation`) at guard `dff03bfac9e99bc10a2720ac18aa322e8dc3635580fcec75c4560309ce8ad4d5`.
- Repair: cited the exact proposition establishing that the adjoint map is a smooth Lie-group representation before using its image as a connected subgroup of automorphisms. Post-guard `bfed28749bba17546824ff7a81a6be01c953ba1271305e07b7859971fbc93b5c`; direct precheck, rendercheck, and strict Batch-11 contract passed; defect `phase-2-remaining-27-step7-a-157`.

### `thm-serre-presentation-theorem`

- Rejection tuple: `gpt-5.6-terra` / `70d8c8d4643f568fcfa5d59c9997d4325f2d03d5f04a67fa625aeb68c56c42a5`; decision `confirmed_fatal` (`logic`) at guard `51ebcca0646a8e0e6cad2db7ac5c6bc5de2b82e6fcae03c34c551b300b2d6295`.
- Repair: replaced the invalid nonsimply-laced invariant-form normalization with the standard weight-space and ideal-propagation proof of simplicity on each connected component. Post-guard `fcdca3586e4558a8b6b216939090c8cf60440aebabf2495a6ce71d8b0809033d`; direct precheck, rendercheck, and strict Batch-11 contract passed; defect `phase-2-remaining-27-step7-a-158`.

### `prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits`

- Rejection tuple: `gpt-5.6-terra` / `2a5b23b537e32c470e4a1a2174a8b8e265ca1e2addc22bbf4f0725567e569ac0`; decision `confirmed_fatal` (`dependency_citation`) at guard `3dcc7a80c94976b4a6eb20a74062be44ac8ff8f3eb45c43485b68ef6219f6c37`.
- Repair: added the closed-subgroup and countable-choice interfaces and proved that the two relevant tori are maximal in the identity component of the centralizer before invoking conjugacy. Post-guard `400c6d329c51895b134d1d0f27a824a4ca52416c2f6e8239aba128ee7ecd31f3`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-159`.

### `prop-central-quotients-correspond-to-intermediate-character-lattices`

- Rejection tuple: `gpt-5.6-terra` / `5b684c74d0f6b1b66d7f0ef4da07ad15c901285a4f017438f585ebc638a48e8d`; decision `confirmed_fatal` (`logic`) at guard `65a048b83f11078d3a5ee25e57d9fbccf1da16f748eef804a984779e8b0228f7`.
- Repair: narrowed the false blanket assertion about central subgroups to the center of the compact semisimple simply connected cover and proved its finiteness as a compact zero-dimensional Lie subgroup. Post-guard `567238a84af1aa63cfa395dd5b8903aa7699773a9f2543ab4142fc76812c7134`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-160`.

### `lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact`

- Rejection tuple: `gpt-5.6-terra` / `4c749c660f9f82fcc485537f6245dbb650df1b68e6252b27b65d01d4f6d58eac`; decision `confirmed_fatal` (`dependency_citation`) at guard `a80f8a7afb7abbe048c6baf00d34330ac7dec4e9fed502e8edac8d60c4c1ea0c`.
- Repair: added the exact Fubini--Tonelli supplier needed for the Hilbert--Schmidt kernel computation. Post-guard `ce675f472837f15ad5f9dbb76f58d708f1a1b4be40e2c953f2d0d833c2a20431`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-161`.

### `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces`

- Rejection tuple: `gpt-5.6-terra` / `38083d199ef77bda02d58af31e9cdc58540973b6638af5e5f10bb4ad3125c1c3`; decision `confirmed_fatal` (`logic`) at guard `e64ea8e196a9019b9f3acd0e354156c3467e48b9f9cf0f54ede9dcb12f98e656`.
- Repair: removed the false right-translation invariance claim for a general convolution kernel, retained and proved left invariance, and added the exact Fubini interface. Post-guard `b5a9c603313891339bd56635f4acfd5036a6b6480017bcc7abfe80700c525ae0`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-162`.

### `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems`

- Rejection tuple: `gpt-5.6-terra` / `8731640936a9cc8b30f27c6b629b0b28cb32dd9ef5d5a854f4bd04f82f589377`; decision `confirmed_fatal` (`logic`) at guard `9492e480e778b4e02c9e1c4be5b86050d9d5aab8725f100c66b1e4b745c3823b`.
- Repair: derived finite central kernels from a common compact simply connected form, using that a closed discrete subgroup of a compact group is finite, instead of assuming finiteness. Post-guard `495ff8ef536aacb5a0bd758137006fcc4e7fe23ef871bf366337143f76166623`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-163`.

### `thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part`

- Rejection tuple: `gpt-5.6-terra` / `0be64ba65dd4d54c16610555f5260ea48cbe5f7ed15d9a66efb2f9848913b61d`; decision `confirmed_fatal` (`logic`) at guard `7a02220ef0798d3903656df762381f97e5bf40dffc1b666279f4a866ccc2faf5`.
- Repair: restricted the one-dimensionality claim to nonzero $T$-weight spaces and explicitly separated the zero-weight Cartan subalgebra. Post-guard `3ed52f298081aa7e8e19821cf9cd15f347f1ad094b6290002b09a735da91e4a2`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-164`.

### `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights`

- Rejection tuple: `gpt-5.6-terra` / `9b5c56f5f566863d8110b6d6981c928c45d4ac3626c1165a60e3ac446891a4d1`; decision `confirmed_fatal` (`logic`) at guard `75d450234b7ccbdc7d72e7673992f973d0acdd36658e0757559eb6799d8686f0`.
- Repair: corrected the ill-typed converse: a representation of the complexified derived algebra must be paired with a commuting action of $Z(G)^0$, and the resulting representation descends exactly when the finite kernel acts trivially. Post-guard `48178455656fcc71b671c2b2fdcf83b821ac7a26c8951ab48b61123d92dfc2a8`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-165`.

### `ex-symmetric-powers-as-highest-weight-modules`

- Rejection tuple: `gpt-5.6-terra` / `7bec953c91ac4b4880213c9dbbe48ee7e4ce3e81fe3800cb6037af800a181431`; decision `confirmed_fatal` (`logic`) at guard `3f1b403c83e92e6def842f58d28e81a259fa5ee0597682c264a6059e2571c62c`.
- Repair: corrected the root-vector annihilation condition from the wrong row index $i\ne1$ to the required column index $j\ne1$. Post-guard `f62c3e691873ad3dadd16b591853d32a8d4961514d553b6204682fd66240f7fb`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-166`.

## Additional source consulted

- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, Lecture 24, Theorem 24.2 and proof, printed pp. 129--132 (official MIT OCW PDF). Exact use: the proof establishes the Serre algebra by its weight decomposition and shows simplicity by propagation of a nonzero ideal through root spaces; this supports the repaired componentwise argument without the rejected invariant-form normalization.

## Further rejudge targets

- `ex-the-eight-dimensional-adjoint-representation-of-sl-three`
- `prop-top-highest-weight-summand-in-a-tensor-product`
- `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`
- `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`
- `lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient`
- `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`
- `thm-serre-presentation-theorem`
- `prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits`
- `prop-central-quotients-correspond-to-intermediate-character-lattices`
- `lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact`
- `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces`
- `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems`
- `thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part`
- `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights`
- `ex-symmetric-powers-as-highest-weight-modules`

## Continued adjudications: compact and real-form interfaces

### `fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant`

- Rejection tuple: `gpt-5.6-terra` / `9971128a707f7c4b3b5f203b94c754c04d7e4704d34f990337c0d9e3a62733a7`; decision `confirmed_fatal` (`dependency_citation`) at guard `d4c4e6e7527888800858b1e706e1eee0fed33be0f62a1f43e8e904641c1e29dc`.
- Repair: stated the actual Haar uniqueness hypothesis—regular left-invariant Borel probability measure—and applied it to the right translate. Post-guard `fddf195a67c25ccc1e7f33ff10197d4f45f77fbcc951f21ea2688aed6ceb7a85`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-167`.

### `lem-weyl-denominator-and-anti-invariant-orbit-sum-basis`

- Rejection tuple: `gpt-5.6-terra` / `ff5644d0a5a86f1f45de9c94a05f74eeb5bc8b90e9b94a1424e21a87234faa23`; decision `confirmed_fatal` (`logic`) at guard `7a0451f4fd22dd9c4ef8c8eb0d6787c3bb6a0d10bb0f009888c3c30d8ef7b841`.
- Repair: restricted the claim to the anti-invariant integral group algebra, corrected the lattice/group-algebra and reflection-sign arguments, and proved the denominator identity and orbit-sum basis in that setting. Post-guard `fdb302e88bfae50e4e4b828cbfc7c10c72cf8afa62320c2a576389421e90a4be`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-168`.

### `fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form`

- Rejection tuple: `gpt-5.6-terra` / `17f2f7ffd402df2bdb8678cfa323a90bb1a65f9aaeb7864b618b38ad010669d1`; decision `confirmed_fatal` (`dependency_citation`) at guard `a654c3a80b12419c3ad7c5a89e5efebaaf428b0df6675ef9fde996d6c8afa771`.
- Repair: removed the unsupported supplier and used the compact highest-weight theorem's exact classification by dominant elements of the actual character lattice. Post-guard `16ad25e0ffb780be696286cf5be220250cc3a3a34b29440440f070a5a541de9a`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-169`.

### `ex-weyl-integration-formula-for-su-two`

- Rejection tuple: `gpt-5.6-terra` / `569036a12b54305a334be5b8111c0499b2c6bb496f362058db41c95df6ac5a9f`; decision `confirmed_fatal` (`dependency_citation`) at guard `a6d27787ac4a0942c1f047a39caf1de8b7871917e4873fe0a5bf7c5dbab08b37`.
- Repair: computed the root character $z^2$ directly from conjugation of the matrix units instead of relying on an absent supplier. Post-guard `ad035d416645303b1f529ae03680f8f054fb0b1d049de3a97c74788a3ef00706`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-170`.

### `fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional`

- Rejection tuple: `gpt-5.6-terra` / `e4d0f0f779e72140e7a20aa02f713fb0ce184df706389ce6be653929e1577953`; decision `confirmed_fatal` (`logic`) at guard `7ea44c2969a97226e81a5e8175421d89d64f19af910b746212f68dffaaba0bd7`.
- Repair: changed the overstrong title to the existential conclusion proved by the infinite-dimensional regular representation example. Post-guard `bd05461eb0fe00d27dc14635e38c470c41c0ad8fe8645320b40385c6688306e7`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-171`.

### `lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator`

- Rejection tuple: `gpt-5.6-terra` / `1e37a33dc26a89850b70e38fa34d59bc4394b17a11c49d096f02eed81f9484c7`; decision `confirmed_fatal` (`dependency_citation`) at guard `7971445dd4a3c56ed9dbe3ec7763c411de9266b4aa2d2bc0fd07ac779b305d12`.
- Repair: added the torus Fourier-basis theorem and invoked its exact character orthogonality statement. Post-guard `fa48fde424cfc68b399754efab7e9a1f438aa27593ec2c4897f99351baa9933b`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-172`.

### `lem-compact-lie-groups-admit-central-continuous-approximate-identities`

- Rejection tuple: `gpt-5.6-terra` / `ceaf436f93944595a08c7d4643ba451faa04bab7d57c4db5133c92ae2591eb35`; decision `confirmed_fatal` (`logic`) at guard `707a3ef981837c761ffc27fb821a68955037649fd79f0a914b2f68a8d5b81516`.
- Repair: used centrality to rewrite convolution as an integral of left translates, which lie in the asserted invariant subspace. Post-guard `7f03187439d176970905256821e12749c0d7e0917f747d2042c76af3e82237b6`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-173`.

### `fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients`

- Rejection tuple: `gpt-5.6-terra` / `9c5a581410422520cecf949c3f4c5be1c91fff545ac6a194358060a48d575cc9`; decision `confirmed_fatal` (`dependency_citation`) at guard `4b61af6638f30a1d22f6c5260dc538261e43eda78f54a643dbc3c9a7f969bacb`.
- Repair: supplied unitarizability, complete reducibility, and scalar-endomorphism dependencies and derived the finite representation decomposition needed by the counterexample. Post-guard `c3bc2a4143b3a1bd478fdaa23a4fbb8398f5200bd0b330822903521b6efc6835`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-174`.

### `thm-real-forms-correspond-to-conjugate-linear-involutions`

- Rejection tuple: `gpt-5.6-terra` / `933b39aba7cb554450dc826e8b9c74744a03639b7ae5d2593594d45954970b88`; decision `confirmed_fatal` (`logic`) at guard `9a0885891d200910123a6eaf0dac394e06a457652bebf80424c66245b2806988`.
- Repair: used the real form's own involution $\sigma_{\mathfrak g_0}$ consistently in the conjugated fixed-locus identity. Post-guard `ab57832e41e339672f0dd1be14bb21236212a3ba6181de0581a58f5f8bfb715e`; direct precheck and rendercheck passed. This item is absent from the pre-existing Batch-13 proof-contract scope, so no strict item contract exists to run; defect `phase-2-remaining-27-step7-a-175`.

### `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`

- Rejection tuple: `gpt-5.6-terra` / `21581164fdd5ce3941e0717e20f386015728972069f81e108001a0a24aab1985`; decision `confirmed_fatal` (`logic`) at guard `b8597e75ca5a8955363b91f0b7dc429a986c1ad736606551e88c00f59196a027`.
- Repair: proved the fixed-algebra assertion for arbitrary tensor sums using unique coordinates in a real basis, rather than checking pure tensors only. Post-guard `d867fca5cb26af7063b328e1d93c1e138f693b904ec964671f94200a3f6c1b79`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-176`.

### `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`

- Rejection tuple: `gpt-5.6-terra` / `9b30bea17923aaeefc309210a0f1110570cdd27030680fb232f83dba9e9b807f`; decision `confirmed_fatal` (`logic`) at guard `216a2d77054ccf65c8f6d364bbbdb65ddd6b98a7f6258f077cb7084fda9094c6`.
- Repair: corrected the inverse to $F(k\exp X)=\operatorname{Ad}_kX$, proved right-$K$ invariance and descent, and repaired injectivity. Post-guard `6bb00c7d51808fdae64a001a3fa5f6989227bfb82e98501a8fcf0135dc8c6e82`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-177`.

### `ex-the-peter-weyl-decomposition-of-l-two-su-two`

- Rejection tuple: `gpt-5.6-terra` / `41ed1684a47688776b9aa45dfa03d24e7bc8356babe95a3e1d7d839dfffe6fda`; decision `confirmed_fatal` (`dependency_citation`) at guard `243db5add6dd950fd059c797bc36c10f558bd5f0d1727810f9fb4e4adeccdb17`.
- Repair: added the compact highest-weight classification and the precise compact-group/Lie-algebra differentiation-and-integration interface. Post-guard `cfca27986309c42d558b157515d32c5dec7d267d179178d147b049a1b043609c`; direct precheck, rendercheck, and strict Batch-12 contract passed; defect `phase-2-remaining-27-step7-a-178`.

### `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one`

- Rejection tuple: `gpt-5.6-terra` / `98dc7b5b94dd649770fa3bf95358cd97f482682be9e15c620045243f626ab8b7`; decision `confirmed_fatal` (`logic`) at guard `af021b0342251a1d003bb1de20822044b9dc85f8d83ab4463d1fa95faacdcf1e`.
- Repair: removed the false premise that the fixed Cartan involution preserves an arbitrary Cartan subalgebra. Post-guard `9f6371de41b87064b512da86bd6e10d7b5b1b3e02084c3e2a60e6a6cbbf6225d`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-179`.

### `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`

- Rejection tuple: `gpt-5.6-terra` / `91333c9f637069b4e146aca7c28c929d930b671189655b91188ca6879fcd31cc`; decision `confirmed_fatal` (`logic`) at guard `1d9dde603d8ba4ae569bb51946db1d490cc1bad013509301157f89d877491ae3`.
- Repair: computed restricted-root multiplicities by counting all complex roots with each restriction rather than asserting a false additivity law. Post-guard `04f4baffef214b261ae994cf2ecda8e45de25a78d99e0efb6b845c1b2c89cbad`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-180`.

### `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence`

- Rejection tuple: `gpt-5.6-terra` / `a165dff5f80210489c38c2842cc83f741af00c2832cfe067b4794bce99fc1249`; decision `confirmed_fatal` (`dependency_citation`) at guard `536a947818d8f30aaeb66298f5a8f64cb44d48e4e2f98743ea21e7e31a9a571a`.
- Repair: established $K^0$-conjugacy from compact parts, their centralizers, and maximal-torus conjugacy, adding each exact supporting dependency. Post-guard `f63fbce77ca9f17d4e73b39e752316ad8e1b95bb164332a0e11e04043681cfe8`; direct precheck and rendercheck passed; no strict item contract exists in the pre-existing Batch-13 scope; defect `phase-2-remaining-27-step7-a-181`.

## Further rejudge targets

- `fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant`
- `lem-weyl-denominator-and-anti-invariant-orbit-sum-basis`
- `fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form`
- `ex-weyl-integration-formula-for-su-two`
- `fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional`
- `lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator`
- `lem-compact-lie-groups-admit-central-continuous-approximate-identities`
- `fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients`
- `thm-real-forms-correspond-to-conjugate-linear-involutions`
- `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`
- `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`
- `ex-the-peter-weyl-decomposition-of-l-two-su-two`
- `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one`
- `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`
- `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence`
