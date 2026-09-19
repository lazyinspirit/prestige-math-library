# Step 7 preflight repair — Alpha group a

Run: `phase-2-remaining-27`  
Dispatch: `step7-preflight-a-1`  
Batches: 11, 12, 13

## Outcome

All nineteen owned failures were resolved within the group-a write scope. Eight item carriers required dependency or proof-evidence edits; their exact pre/post `itemHashGuard` digests were appended to `research/defect-ledger.jsonl` as `phase-2-remaining-27-step7-preflight-a-001` through `-008`. Seven stale or missing risk reviews and four stale boundary rows across three items were repaired in the owning batch contracts. No blocker remains.

The task permitted either A-page multi-homing or re-pointing a B-leaf consumer to a legal supplier. A tentative same-batch multi-home projection was rejected without writing by the sanctioned splicer because the canonical plan forbids duplicate item IDs. The final repair therefore uses the task's legal-supplier alternative throughout; the final manifests and plan contain no duplicate IDs and agree exactly.

## Content and dependency repairs

### `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian`

- Failure: `depcheck` `b-leaf-content` on `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus`.
- Cause: that supplier is homed only on a published B/examples leaf belonging to a concluded foreign run. The current Given already supplies the quotient coordinates and forms; the load-bearing fact is only the nonzero-period obstruction.
- Repair: removed the B-leaf dependency and made F1 cite `cor-a-nonzero-period-obstructs-exactness-and-bounding`, retaining `def-two-dimensional-torus`. The batch-13 manifest, plan object, and proof contract were synchronized.
- Sources read: Cannas da Silva, *Lectures on Symplectic Geometry*, Lectures 21–24 and 26; Meinrenken, *Symplectic Geometry*, §§7.1–8.4; exact library supplier statements and contract quotes.
- Hash: `a1cd0fd8c0c3ae0c6aea11d843cba2dc4a6c6189a4a05d4a5997c86f44ef30ab` → `fff2317baa840c65a0ef8e7a05b48923b3ff314c8b047f3b96c83bbf69f5f3e3`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, risk, boundary, citation-fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `ex-classical-root-systems-in-euclidean-coordinates`

- Failure: member of the cycle `prop-root-systems-of-the-classical-complex-lie-algebras -> ex-low-rank-dynkin-coincidences -> ex-classical-root-systems-in-euclidean-coordinates -> prop-root-systems-of-the-classical-complex-lie-algebras`.
- Cause: this item's use of the classical-root-system proposition is load-bearing; the non-load-bearing edge was the proposition's citation of the later low-rank example.
- Repair: no edit to this carrier. The cycle was broken at the proposition's redundant edge, and the remaining `ex-low-rank-dynkin-coincidences` B-leaf edge was re-pointed to that now-independent proposition.
- Current hash: `8d3e5cba3bf7053942a9fcbc7f3fca16f540ea4dac3c88b85cea50e82281b041`.
- Checks: full `depcheck` and `fwdcheck` report no cycle.

### `ex-low-rank-dynkin-coincidences`

- Failures: member of the dependency/forward cycle and `b-leaf-content` on `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`.
- Cause: its coordinate-model dependency is load-bearing, but its B2/C2 clause can use the earlier A-page proposition after that proposition was made independent of this example.
- Repair: re-pointed L2 and `deps` to `prop-root-systems-of-the-classical-complex-lie-algebras`. This retains the explicit similarity argument while removing the B-leaf edge. The batch-11 manifest, plan object, and contract were synchronized.
- Source read: Etingof, Lectures 19–24, together with the complete current statements/proofs of the coordinate example and classical-root-system proposition.
- Hash: `6f463dff3dc96718d97e6bdc9d7a32122499d675b9c8db62c9dbb06cb8cebedf` → `faad6c3928756fdb0fb6f943b896526c529ead4cfcf0f625f121ddeebd33515a`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, citation fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`

- Failure: `fwdcheck` `forward-undeclared` for `def-rank-and-isomorphism-of-root-systems`.
- Cause: the example already exhibits the orthogonal similarity and uniform rescaling. The later definition only names that relationship and is explanatory, not load-bearing.
- Repair: moved the target from `deps` to `forward_refs`; synchronized both manifest occurrence data and the batch-11 contract.
- Source read: Etingof, Examples 20.12–20.14, printed pp. 110–111, plus the exact later definition.
- Hash: `b7f775d8a983bffeca9e5e177dd8c3833af416ef0ad56e8fc0e2d1807a93bf9b` → `4d9df42b03a87d4f6471919b12840be98e9d66a9bb144f83458adbe59b4b0f42`.
- Checks: item `precheck` PASS; contract entry regenerated; `fwdcheck` PASS. `depcheck` retains only its advisory repository-wide `cited-not-in-deps` notice for this declared forward reference and exits successfully.

### `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras`

- Failure: `depcheck` `b-leaf-content` on `ex-cartan-subalgebra-and-roots-of-sl-two`.
- Cause: the B-leaf example was used only for the rank-one root computation. The earlier A-page item `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` supplies the same computation uniformly.
- Repair: re-pointed L4 and `deps` to the diagonal-Cartan example and wrote out the specialization `n=2`, yielding roots `±(epsilon_1-epsilon_2)` and Cartan matrix `[2]`. The manifest, plan, and contract were synchronized.
- Sources read: Knapp, Chapter II §11, printed p. 203 and Chapter VI; Etingof, Lecture 20 on real forms of `sl_2`; the complete legal supplier statement.
- Hash: `7cf6f4a5d1e089f997ad572eb6bf94d1bc36ce9b5fc625512084f78f661aa5a4` → `39f6477552051c459504c44665d8f3460e7477e698d776ebab40e6e04dc5f052`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, citation fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `fs-every-symplectic-action-is-hamiltonian`

- Failure: `depcheck` `b-leaf-content` on the published torus example.
- Cause: the counterexample needs the two-torus and the nonzero-period obstruction, not the B-leaf example as a logical prerequisite.
- Repair: replaced the B-leaf dependency with `def-two-dimensional-torus` and `cor-a-nonzero-period-obstructs-exactness-and-bounding`, and synchronized F1, the batch-13 manifest, plan, and contract.
- Sources read: Cannas da Silva, Lectures 21–24 and 26; Meinrenken, §§7.1–8.4; exact legal supplier clauses.
- Hash: `7bc529382cabb6e656ae96dc41c42cde1b5d22d1f58c12a8c0519d1d06d91e11` → `ec612c1d9b23687ca4c3b69267ef3f75756d5237a51ac47e1cc908f49ff37dc6`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, citation fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic`

- Failure: `depcheck` `b-leaf-content` on `ex-cartan-subalgebra-and-roots-of-sl-two`.
- Cause: the common `A_1` diagram requires only the `n=2` specialization of the earlier diagonal-Cartan computation.
- Repair: re-pointed L2 and `deps` to `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` and made the specialization explicit. The manifest, plan, and contract were synchronized.
- Sources read: Kirillov, Exercises 2.8–2.10 and §3.10, printed pp. 24–25 and 44–45; Etingof, Lecture 20 and Exercise 3.9; exact legal supplier statement.
- Hash: `062ea4c20ce982b22f41a1837f487117a41a017c286da1cc68cbc7a08ec533da` → `0a508995326d0405f257ba65110c7c7ec79a2a679523dac76f12bcb94196c4f3`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, citation fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `prop-dimension-formula-from-roots`

- Failure: `fwdcheck` `forward-undeclared` for the later regular-semisimple-density lemma.
- Cause: this proposition is spine content, so its load-bearing proof cannot be repaired by merely declaring a forward reference.
- Repair: replaced the later citation with an earlier-supplier proof. The complement of the root hyperplanes has centralizer `h`; its adjoint saturation is a nonempty open set by the submersion theorem. The nonvanishing locus of a maximal minor of `ad_x` is dense open and consists of regular elements, so its intersection with that saturation identifies `rank(g)=dim(h)`. The inherited Axiom of Choice assumption is explicit. The batch-11 manifest, plan, and contract were synchronized.
- Source read: Knapp, Chapter II §4 (dimension count), and the complete statements of the root decomposition, Lie III, adjoint differential, and open-submersion suppliers.
- Hash: `8050294a031ba710cf856a1d60d6e6e259347d6d687079821f6553f7ba516c0d` → `e83bec29af8cd7614cf1722cd94b31c3eb14395d009e885e527209a7ef92fcb8`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, risk, boundary, citation-fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

### `prop-root-systems-of-the-classical-complex-lie-algebras`

- Failures: dependency/forward cycle, B-leaf dependency on `ex-low-rank-dynkin-coincidences`, and undeclared forward link to that example.
- Cause: the later example merely collected low-rank coincidences, but the proposition had treated it as a prerequisite, creating the cycle.
- Repair: removed that edge and link; step 3.1 now proves `B_1=C_1=A_1`, `B_2=C_2`, `D_2=A_1 disjoint-union A_1`, and `D_3=A_3` directly from the coordinate lists. Remarks records why the later example is explanatory and identifies the broken edge. The batch-11 manifest, plan, and contract were synchronized.
- Sources read: Etingof, Lecture 20.3 and Examples 20.12–20.14, printed pp. 110–111; Knapp, Chapter II (2.43), (2.50), and §1, printed pp. 150 and 155.
- Hash: `63c0b7a230377e3609d1534c9e52bf1665da0966c5c98443d8177d0d4e795c46` → `41efe3fd1a5b3ba82228cfc2d306f939077d4478f54f909cbdf25dbd41498c33`.
- Checks: item `precheck` PASS; contract entry regenerated; strict contract, risk, boundary, citation-fidelity, `depcheck`, `fwdcheck`, and `rendercheck` PASS.

## Risk-review repairs

Each row below was missing a complete Alpha risk review. The current item, complete proof contract, cited supplier clauses, and stated source locators were read before a specific `status: complete` review was recorded with reviewer `group-alpha-a` in batch 11. No item carrier changed.

### `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams`

- Review: checked the finite semisimple direct-sum decomposition, uniqueness of simple summands, both directions of the classification transfer, and the declared choice scope against Etingof Lectures 19–24 and Knapp Chapter II.
- Decision: current proof is complete; the union of irreducible diagrams and reconstruction by direct sum preserve the stated equivalence.
- Current hash: `51d59c45bcaeb1103343418f0ffdb185c92bab4e6f4ea2bf49e0cba0f31a08a1`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

### `cor-opposite-root-spaces-pair-nondegenerately`

- Review: checked Killing-form nondegeneracy and root-space orthogonality at the cited Etingof locator.
- Decision: a nonzero vector in `g_alpha` pairing trivially with `g_-alpha` would, by orthogonality, pair trivially with all root spaces and the Cartan subalgebra, contradicting nondegeneracy; the one-dimensional conclusion is correctly inherited.
- Current hash: `4bc376c7a0a51531fe417152d04a759bb49dd3dc2a2747935e43f32cec44e116`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

### `def-open-and-closed-weyl-chambers`

- Review: checked the regular-vector, root-hyperplane, open-component, closure, wall, and fundamental-chamber conventions against Etingof's chamber discussion.
- Decision: the open chambers and their closures, including boundary walls, match the stated simple-root inequalities.
- Current hash: `1c9c5c2c5d7006fcdf9d5da18b13cc1407b78b9928497a417715f48b2a2134f7`.
- Checks: `risk-report --require-reviewed` PASS; strict contract PASS.

### `ex-root-strings-in-type-a-two`

- Review: checked the complete six-root list and both string endpoints against the root-string theorem and Etingof Lectures 19–24.
- Decision: `beta-alpha` and `beta+2alpha` are absent while `beta+alpha` is present, hence `p=0`, `q=1`, and `beta(h_alpha)=-1`.
- Current hash: `a12f0576e4286712865077a12f0f8556466a72008d484d084f46ea650647a464`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

### `ex-root-systems-a-two-b-two-and-g-two`

- Review: checked the explicit coordinate sets, reflections, Cartan integers, positive roots, and length ratios against the Etingof and Knapp rank-two classification locators.
- Decision: the calculations support the current distinctions among `A_2`, `B_2`, and `G_2` with no omitted rank-two case.
- Current hash: `73256c53bcf85a6e34bffc6d2cc28efbf8e7b04f185340fd6d31ddcb24828f76`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

### `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple`

- Review: checked the `sl_2` matrix commutators and nilpotence computation against the cited classical Lie-algebra sources.
- Decision: for a nonzero root vector `e`, `ad_e` is nonzero and nilpotent with `(ad_e)^3=0`, hence not diagonalizable; this directly refutes the universal claim.
- Current hash: `e2cf7c415ee15ca13d43cd1a94cf00c702db47a938f23a8a7bcb28a39bd0be8a`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

### `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`

- Review: checked the adjoint Jordan–Chevalley compatibility lemma, centerlessness/injectivity, operator uniqueness, and the zero-algebra case against the Etingof and Knapp locators.
- Decision: the cited lemma places the semisimple and nilpotent operator parts in the adjoint image, and injectivity gives the asserted unique commuting internal decomposition.
- Current hash: `b058999643e4570009d16e0604120a59ede5a144157400569126ef980da011f3`.
- Checks: `risk-report --require-reviewed` PASS; strict contract and citation fidelity PASS.

## Boundary-row repairs

### `def-dominant-integrable-highest-weight-cyclic-module`

- Failure: boundary audit detected an indexed finite sum while the `empty` row said the case was not applicable.
- Cause: the generic row was stale. The Definition explicitly permits `k=0` in the generated-left-ideal formula.
- Repair: changed `empty` to `checked`, recording that the empty sum is `0`, hence belongs to `I_lambda` and causes no quotient obstruction. No carrier edit was needed.
- Current hash: `1e68c45ecba8f9e9613e236d0c47f37496672f314ecd6953059a5136d5077563`.
- Checks: batch-12 strict contract and boundary audit PASS with zero contradicted candidates and zero template clusters.

### `prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector`

- Failures: boundary audit contradicted both `iff-forward` and `iff-reverse` rows because the Statement says literal preservation holds “exactly when” `delta=0`.
- Cause: the generic rows incorrectly treated the theorem as having no biconditional; step 4.1 already proves the narrow equality biconditional.
- Repair: changed both rows to `checked`. The forward evidence evaluates `mu after phi - mu=delta` under literal equality; the reverse substitutes `delta=0` into that identity. No carrier edit was needed.
- Current hash: `71479fe08d1587b99018d082745dd6d6b1396f7ae5face0db5f7eb1952f9938a`.
- Checks: batch-13 strict contract and boundary audit PASS with zero contradicted candidates and zero template clusters.

### `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram`

- Failure: boundary audit detected division by `(gamma,gamma)` while the `zero` row said no zero obligation arose.
- Cause: the generic row failed to record the proof's actual exclusion. In step 1.1, `gamma` is a positive root, hence nonzero, and [L4] supplies a positive-definite Euclidean inner product.
- Repair: changed `zero` to `checked`, recording `(gamma,gamma)>0`. No carrier edit was needed.
- Current hash: `383c863fa9320ef2cf6a4996610daccb1d0b328afed335859ac72c8392dedcbe`.
- Checks: batch-11 strict contract and boundary audit PASS with zero contradicted candidates and zero template clusters.

## Validation record

- `node tools/tsx-run.mjs tools/precheck.mts <item>`: PASS for all eight edited carriers.
- `node tools/regen-contract-entries.mjs <batch-contract> <id>`: regenerated all eight edited carriers.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-{11,12,13}.proof-contracts.json --strict`: PASS with zero errors; respectively 118/118, 115/115, and 47/47 items checked. Batch 12 retains two pre-existing nonfatal `shotgun-bracket` warnings on unowned items.
- `node tools/finite-smoke.mjs` on each owned batch contract: PASS.
- `node tools/risk-report.mjs <owned-batch-contract> --require-reviewed`: PASS, zero errors.
- `node tools/boundary-audit.mjs <owned-batch-contract> --fail-on-contradicted --fail-on-template --json`: PASS; no contradicted candidates or template clusters in any owned batch.
- `node tools/citation-fidelity.mjs <owned-batch-contract> --fail-on-missing-quote`: PASS; 420, 625, and 316 citations checked, with no missing quotes or widening candidates.
- `node tools/depcheck.mjs`: exit 0; no cycles and all references resolve. Repository-wide advisory warnings remain outside this dispatch; none is an owned failure except the declared-forward-reference advisory noted above.
- `node tools/fwdcheck.mjs --quiet`: PASS; every forward reference declared, strictly forward, closed, and acyclic.
- `node tools/rendercheck.mjs`: PASS over 21,295 files.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch 11 --update` and batch 13 equivalent: PASS.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --verify`: PASS; 54 pages across 15 manifests agree with the plan.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`: refreshed and deduplicated successfully.
- `node tools/defect-ledger.mjs validate --run phase-2-remaining-27`: PASS; 1,136 run rows checked with zero errors.

## Blockers

None.
