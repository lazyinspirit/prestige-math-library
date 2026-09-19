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

## Reader-warning dispositions

- `s8a-504d6f91bba7d13a5818352d` — `covered_by_rejection` via the exact confirmed-fatal rejection of `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`; repaired sign identity and checked contract.
- `s8a-d1d94383483c8b5b570d7e11` — `covered_by_rejection` via the exact confirmed-fatal rejection of `thm-root-sl-two-triple`; repaired the bracket sign and normalization and checked the contract.
- `s8a-8a04705b005451a70517e6fa` — `covered_by_rejection` via the exact confirmed-fatal rejection of `lem-killing-length-of-a-root-is-nonzero`; repaired the inherited sign and checked the contract.
- `s8a-95c9c72fdb655c4bbe61b22b` — `covered_by_rejection` via the exact confirmed-fatal rejection of `ex-root-strings-in-type-a-two`; repaired the root-string indexing and checked the contract.
- `s8a-ca3e35230c0f4eba4b54efcc` — `confirmed_fatal` independently of the targeted rejection: Statement (i) transposed all unequal-length Cartan pairs; repaired against guard `f5716626bd13ea94d1db8c9a4466c07f2169aac343cdb437f74eaeaffbd962cd`, yielding `ac3cf023bc6967575540c18bdc5cc502c68c1e0845b85b5eb041d8e6307ad2d8`.

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

## Sources consulted

- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, full lecture notes, Example 21.9 and Definitions 23.8, 23.11, 23.14, 23.15 (official MIT OCW PDF). Exact use: Example 21.9 lists the twelve $G_2$ roots, while the exceptional coordinate models give the $F_4,E_8,E_7,E_6$ counts $48,240,126,72$ and ranks $4,8,7,6$ used in the repaired dimension calculation.
- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter II, Proposition 2.44, printed pp. 151–152 (author-hosted PDF). Exact use: the proposition states and proves that the root system of a complex semisimple Lie algebra is irreducible if and only if the algebra is simple, replacing an inflated internal citation in the Cartan–Killing classification proof.
- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, Lecture 23, Exercises 23.10 and 23.13 (official MIT OCW PDF). Exact use: these exercises identify the displayed coordinate vectors as the simple positive roots for the $F_4$ and $E_8$ polarizations and give their Cartan matrices, closing the existence theorem's diagram-identification gap.
- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, Examples 20.12--20.14 and Remark 23.18 (official MIT OCW PDF). Exact use: the examples compute the classical coordinate root systems, while the remark records the low-rank root-system coincidences $D_2=A_1\sqcup A_1$, $D_3=A_3$, and $B_2=C_2$ used to separate the stable simple ranges from the exceptional cases.
