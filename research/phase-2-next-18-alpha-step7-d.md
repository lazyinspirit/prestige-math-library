# Step 7 adjudication — group d

Run: `phase-2-next-18`  
Batches: 7, 8

This report is the durable item-by-item checkpoint for the group-d Step 7
adjudication. Hashes are `itemHashGuard` digests unless explicitly identified
as judge-ledger hashes.

## Rejections

### `lem-feferman-levy-fixed-boolean-values-come-from-initial-layers`

- Rejection: `gpt-5.6-terra`, context
  `11dd9cba9b3c8b8170873336063412b063def6026fdd6feb7fa853e0f5cca8ba`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3 attributed extension of a forcing automorphism to
  `RO(P)` to `lem-symmetry-lemma-for-forcing-automorphisms`, whose statement
  supplies only invariance of the ordinary forcing relation. The needed
  regular-open action is instead an elementary consequence of the explicit
  construction in `thm-forcing-preorders-have-regular-open-completions`.
- Repair: separated the exact symmetry-lemma interface from the explicit
  derivation that `U -> pi``U` preserves the regular-open algebra, and cited
  that derivation at proof step 2.1.
- Pre-edit hash:
  `be499757d168110bd042b9abd9e38b1ba3685f71f1edde250dcc28fb6d795484`.
- Post-edit hash:
  `8540e8178c2a3e9a129becc15753aeb66d40d838b67898296fe5ac03c3dc77cb`.
- Focused checks: `precheck.mts` passes after canonical reflow;
  `rendercheck.mjs` passes.
- Rejudge target: yes.

### `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`

- Rejection: `gpt-5.6-terra`, context
  `8572473fd937fc7b9747d749874a55300822310d5a35a47806d21d1269d1613d`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the old title used the unqualified library term “maximal proper
  ideal,” while both the Statement and proof establish maximality only in the
  fixed supported-definability class and expressly disclaim global
  maximality.
- Repair: narrowed the item and batch-manifest title to “an ideal maximal in
  its supported-definability class”; the Statement and proof were already
  exact and remain unchanged.
- Pre-edit hash:
  `9e18fe1a283c8110317b26bd127bc7659634d6459f9c4a92e8dee07e8c90a284`.
- Post-edit hash:
  `d0e172815f00d625908f4a574a8acbbd0b0814f5ccd65868b81cf86db97fa977`.
- Focused checks: item precheck and rendercheck pass; the updated batch-7
  manifest parses as JSON.
- Rejudge target: yes.

### `lem-each-feferman-levy-real-layer-is-countable`

- Rejection: `gpt-5.6-terra`, context
  `e24e55cba77dac84bb798ecc6bcc2ac96ebc53e0b88eb94a70d7a6d253c35025`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2’s cited Statement supplies only countability of
  `aleph_(m+1)^V`, not the named canonical surjection the consumer claimed.
  The nonempty-countable-to-surjection step is a separate exact interface.
- Repair: added `lem-countable-iff-surjection-from-n`, stated F2 exactly, and
  used the new dependency to fix one internal surjection for the already fixed
  layer before composing with `e_m`. Synchronized the batch manifest and proof
  contract.
- Pre-edit hash:
  `0ad4d14c3dee425634992d24d2eafe6e995affa267a1dda9e2eea6c48e05dbbe`.
- Post-edit hash:
  `996c43c20bd9d20be6c60b129e3230986329ad17187b88e6250638dd9167771f`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; both
  updated batch-7 JSON carriers parse.
- Rejudge target: yes.

### `fs-bpi-is-ac`

- Rejection: `gpt-5.6-terra`, context
  `e61dec9033e32f8693a844c6f1f691893c2988de6c93c3372568b2c4925a4081`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: step 1.2 called the semantic basic-Cohen construction equivalent
  to the syntactic `Con(ZF)` argument, although its transitive-ZFC-ground
  hypothesis does not follow from bare syntactic consistency. F3 alone already
  supplied the valid syntactic contradiction.
- Repair: removed the unlicensed semantic route and its dependency, renumbered
  the remaining Facts, and synchronized the manifest and proof contract. The
  refutation now uses only the exact syntactic consistency implication.
- Pre-edit hash:
  `401e34c9aa8c95cccb7ff213f29048cd15acae7448523067d998f378fb563998`.
- Post-edit hash:
  `80043ef130ae04e39ba897380dbdd547af01510e871cbd212907ce5483e66568`.
- Focused checks: item precheck and rendercheck pass; both batch-7 JSON
  carriers parse.
- Rejudge target: yes.

### `lem-feferman-levy-symmetric-collapse-is-finitely-formalizable`

- Rejection: `gpt-5.6-terra`, context
  `fbce38daf567fcee13d84357e1f3d42d4233a46c665d08fd99439b308a9f7c98`.
- Outcome: `false_positive`.
- Evidence: step 3.1 does not apply the full semantic HS theorem to a mere
  `Gamma`-model. Steps 1.1–2.1 explicitly expand only the finitely many
  formula-specific HS-verification derivations needed for `Delta`, put every
  ground instance used by those derivations into `Gamma`, and step 3.1 invokes
  those retained instances. This is precisely the finite-proof-data route in
  `lem-forcing-transfer-for-finite-zfc-fragments`, whose Statement expressly
  says the retained arguments are valid over the resulting transitive
  `Gamma`-model without applying a full-ZFC theorem there.
- Repair: none; the rejected inference is not present in the item.
- Adjudicated hash:
  `c0f4452e9220bc5357e6ffba25846a860429bcc9b58a8eab79b0a8c26142e6c2`.
- Focused checks: exact Statements and proof steps 1.1–3.1 of both cited
  dependencies were read; no content check was run because no edit is
  licensed.
- Rejudge target: no.

### `cor-feferman-levy-omega-one-has-countable-cofinality`

- Rejection: `gpt-5.6-terra`, context
  `9a8f25ad9d0acf91b7f75e8f5f26f5e67398d46f160d8d83aafa3853ef2a1059`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: step 1.1 used `V subseteq N`, but neither declared dependency
  stated ground-set inclusion. The published symmetric-model theorem states
  that exact inclusion.
- Repair: added `thm-hereditarily-symmetric-interpretations-form-a-zf-model`
  as F3 and cited it where the ground aleph sequence is placed in `N`;
  synchronized manifest and contract.
- Pre-edit hash:
  `ff45918f95aa0b1702d83d1c583067cf238f0ff9d3a7430f60d7f5ee78060f4d`.
- Post-edit hash:
  `cb93111b0af7c1b480549d00267e87a4aace4a23ae6f25832de767590ab3db23`.
- Focused checks: canonical reflow, precheck, and rendercheck pass; both
  batch-7 JSON carriers parse.
- Rejudge target: yes.

### `thm-feferman-levy-reals-remain-uncountable`

- Rejection: `gpt-5.6-terra`, context
  `38cb791d4f981b7180da511d9b12d193cbe185e9a7c67b446ee65f96a1b51f31`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 states only the layer decomposition; step 1.1 additionally
  needed the hypothesis that `N` satisfies ZF in order to internalize the
  choice-free real-line theorem.
- Repair: declared the exact symmetric-model theorem as F3 and cited it at
  step 1.1; synchronized the manifest and contract.
- Pre-edit hash:
  `f0f41082ba433cef7883d58887e34790084046c32ad3562add30a315a848b666`.
- Post-edit hash:
  `66739af6799757412c55a856e5e6558c3ba3d40de9cb0d792d7c826f3a7b96e8`.
- Focused checks: canonical reflow, precheck, and rendercheck pass; both
  batch-7 JSON carriers parse.
- Rejudge target: yes.

### `lem-feferman-levy-bounded-layer-support`

- Rejection: `gpt-5.6-terra`, context
  `33b078d5bddc3e6264baa26e592bd96394039cb02864d124bcb4385cf18eb773`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: a name whose value happens to be a real in the supplied generic
  need not be forced to be a subset of omega in all generics, so the former
  assertion that its Boolean nice name was forced equal to the original name
  was false.
- Repair: used `thm-forcing-theorem` only to identify each atomic Boolean
  value in the supplied generic and proved that the constructed Boolean name
  has value exactly `x` there. The proof now explicitly disclaims global
  forced equality. Manifest and contract were synchronized.
- Pre-edit hash:
  `5e57a95cdd8a2b29b4bb2edc3def3365858d96d53068120cfdb19668c933366a`.
- Post-edit hash:
  `adc70995aaaecc9a5958ad0c4a97f8673736cb0eace034c72438e9446da75dce`.
- Focused checks: canonical reflow, precheck, and rendercheck pass; both
  batch-7 JSON carriers parse.
- Rejudge target: yes.

### `lem-blass-ultrafilter-free-model-is-finitely-formalizable`

- Rejection: `gpt-5.6-terra`, context
  `083377d84bf663b0e15d8818acbbaaa934e56c84b406b6e2561f96f9f33928b0`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 attributed a “complete finite proof pattern” to the preceding
  theorem's Statement, which states only that all ultrafilters in the model
  are principal. The finite-support inference also lacked its exact
  syntactic dependency.
- Repair: F1 now states the theorem's exact conclusion and identifies its
  displayed proof as the proof text being traced. Added
  `lem-derivation-finite-support-and-concatenation` as F5 for the finite
  assumption-support step; synchronized manifest and proof contract.
- Pre-edit hash:
  `143da3a43fe105a0d56d60433c797deaed033e4c4b4c3e6ba5b9f0c6a22aedfa`.
- Post-edit hash:
  `7f11784e5bc6286c16c3a5eb09916fa4ecbd4a83052bcbda49acedd10c60bd74`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; both
  batch-7 JSON carriers parse.
- Rejudge target: yes.

### `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf`

- Rejection: `gpt-5.6-terra`, context
  `464f8b7de621ad7b7db2b158d6fedf91033c5e88de6668059576e039006ed17f`.
- Outcome: `confirmed_nonfatal`.
- Evidence: step 1.1 introduces the finite target fragment as a finite list of
  ZF instances “together with the two additional sentences.” More
  importantly, F1's exact supplying item defines its `Delta` as a finite list
  containing the ZF instances and both displayed extra sentences, and proves
  that the constructed structure satisfies every selected ZF formula plus
  both extras. Thus “this exact Delta” in step 2.1 includes the two extras;
  only the consumer's compressed phrasing is locally ambiguous.
- Repair: none; the exact supplying interface licenses soundness for the
  whole finite refutation, and Step 7 does not license a polish edit.
- Adjudicated hash:
  `05523659e976550d2ba467b832aaae155002be6e5817bf78c71cc2899063c969`.
- Focused checks: the complete finite-formalizability item, including its
  Given clause and steps 1.1–3.1, was read against this consumer.
- Rejudge target: no.

### `cor-feferman-model-has-no-free-ultrafilter-on-omega`

- Rejection: `gpt-5.6-terra`, context
  `6a4eced1c4c65625fef591726204b03a5bb0b355db51c01f110deb18f9ecc2d9`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's source Statement promises only ordinary principality of a
  prime ideal. The old F1 and step 3.1 silently strengthened this to the
  point-principal form needed to dualize to an ultrafilter.
- Repair: stated F1 exactly and derived locally that a principal prime ideal
  of `P(omega)` has generator `omega minus {k}`. The manifest and proof
  contract now distinguish the supplied principality from that derivation.
- Pre-edit hash:
  `4fd7a33460a0c6e7ecfffa0ee4c93e328b8710997ce1de50c9830dde7e719164`.
- Post-edit hash:
  `07cf688d1f62e6ed61c6c5e595a2d9d882966330449e72b8977c015c45552010`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; both
  batch-7 JSON carriers parse.
- Rejudge target: yes.

### `thm-feferman-model-prime-ideals-on-p-omega-are-principal`

- Rejection: `gpt-5.6-terra`, context
  `ff3b7189165c85619b28b96909768363282fa90b559cb44248fd5e9f4719eec7`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's exact Statement constructs a tail automorphism fixing the
  condition and parameters but does not itself state forcing equivariance.
  Step 2.1 attributed equivariance to a “symmetry lemma built into F1” even
  though the theorem already directly depends on the separate symmetry
  lemma.
- Repair: declared the exact symmetry lemma as F5 and used it explicitly to
  transport the forced membership statement after F1 supplies the fixed
  condition and parameters; synchronized the proof contract.
- Pre-edit hash:
  `cd5784d59393f56692b27135b8ef896f973d475d6878d38a9dae518049ec1395`.
- Post-edit hash:
  `543e0936272edc9663c9041d65432afd75c22906869c7fe9fe77474a12408e6c`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; the
  exact symmetry dependency is synchronized in the item, batch manifest, and
  proof contract, whose strict item-scoped check passes. The defect-ledger
  row's earlier post hash records the proof edit before this final dependency
  metadata synchronization; the hash above is the current repaired state.
- Rejudge target: yes.

### `def-halpern-lauchli-finite-word-calculus`

- Rejection: `gpt-5.6-terra`, context
  `964701bff39ba7612d1d2595cf75e57aee9a72a94fb4b4ad55d0d5c655250419`.
- Outcome: `false_positive`.
- Evidence: the assertion that no derivation can start at the dimension-two
  endpoint overlooks Rule 1's bidirectional commutation of adjacent universal
  symbols. The first move is
  `forall a_1 forall a_2 exists x_1 exists x_2` to
  `forall a_2 forall a_1 exists x_1 exists x_2`, after which the matched
  `a_1,x_1` pair is adjacent and Rule 2 applies. The cited original paper
  states these exact rules and proves the endpoint rearrangement by induction.
- Repair: none; the rejection's immobility invariant is false.
- Adjudicated hash:
  `ebd2abf98a3d57d73d184c58796ce4dfe1c779cb26c471370aaee3a6158671f9`.
- Focused checks: read Halpern–Läuchli, §2, printed pp. 364–365, including
  Rules 1–3 and Lemma 1; read the complete local rearrangement lemma.
- Rejudge target: no.

### `lem-finite-partial-prime-ideal-extension`

- Rejection: `gpt-5.6-terra`, context
  `c36f1ea3962e37197347959069ba03207daa0518a59e9a2e6f4fefaee075e5d2`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the preceding definition reserves “decides `F`” for a diagram
  whose domain is exactly the subalgebra generated by `F`. The constructed
  extension has domain generated by `A union F`, which can be strictly larger,
  so the old consequence and step 5.1 misused the defined term.
- Repair: replaced “decides `F`” by the exact “extends across `F`” conclusion
  and explicitly separated the two notions; synchronized the proof contract.
- Pre-edit hash:
  `3fa1d09962b65cc46d335cc96eb6dc6c3cbad396ddd1207523ec316f9252147e`.
- Post-edit hash:
  `018679a17c7ac93e201d32df1806a80b9b8bca98bf6996dfda20b003c4fff5c0`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; the
  updated batch-8 proof contract parses.
- Rejudge target: yes.

### `lem-basic-cohen-model-schema-of-continuity`

- Rejection: `gpt-5.6-terra`, context
  `f591de97c6045fe969c6aecf8deac7d63f9be68f58a8a8709a699956ec3b5a18`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the main assertion requires its varied tuple to have distinct
  entries, but the old consequence allowed any tuple merely disjoint from the
  support. A repeated entry cannot lie in two pairwise disjoint clopens.
- Repair: added the missing pairwise-distinct hypothesis to the consequence
  and synchronized the manifest and proof contract.
- Pre-edit hash:
  `6d8c150a35b45172a44fcc76f82a203b988b651a0f85bc63c9becac21cadfa90`.
- Post-edit hash:
  `07758479a8b9ae4f5e28d81075dc50c12fc981f8cc0dddc58f21bf840dbebd14`.
- Focused checks: item precheck and rendercheck pass; both batch-7 JSON
  carriers parse.
- Rejudge target: yes.

### `lem-feferman-tail-flip-model-is-finitely-formalizable`

- Rejection: `gpt-5.6-terra`, context
  `8f78f101191367082824fb796e709ac2ef03d059581d91dec4734bd3e5657ddc`.
- Outcome: `false_positive`.
- Evidence: step 3.1 does not infer that the ordinary generic extension is the
  target or inherits its axioms. Steps 1.1–2.1 first expand the finite-predicate
  identification and the complete displayed proofs of the two target
  sentences into a finite forcing verification. The transfer lemma then
  supplies only the transitive finite-fragment source and its generic
  extension; the retained formulas define the set of symmetric-name
  interpretations inside that extension and verify each selected target
  sentence in that structure. This is exactly the transfer lemma's permitted
  formula-by-formula use.
- Repair: none; the rejected identification of the target with `M[G]` is not
  made.
- Adjudicated hash:
  `96a4ba55d057d22a7f50251424da1da2353a40ef0c10967886ffca943082f05c`.
- Focused checks: read the complete transfer lemma and consumer steps 1.1–3.1;
  compared the same explicit finite-verification pattern in the Feferman–Levy
  formalizability item.
- Rejudge target: no.

### `fs-bpi-well-orders-every-set`

- Rejection: `gpt-5.6-terra`, context
  `2137f947a80aff2d6cd67a8141dd9b4d459b89e911938cf7cb907faaa506995d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3's source defines AC by choice functions; it does not state the
  well-ordering theorem. The old F3 therefore inflated its interface, and the
  syntactic nonimplication used the unstated implication from universal
  well-orderability to AC. The prose also blurred the semantic construction's
  hypotheses with bare `Con(ZF)`.
- Repair: stated F3 exactly, proved the needed implication locally by
  well-ordering the union and selecting the least member of each family
  member, and separated the supplied semantic model from the conditional
  syntactic result. Synchronized manifest and contract.
- Pre-edit hash:
  `3a643b9b9f94711cfa8768510b35586c10d836dd3ef706f634787faa09a90602`.
- Post-edit hash:
  `30fff4acd0a49110b2461b9a3b6fb86ebfea03bdea0184060b37c4c0fc9843c7`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse.
- Rejudge target: yes.

### `thm-halpern-lauchli-dense-matrix-dichotomy`

- Rejection: `gpt-5.6-terra`, context
  `4a824c7e223e250a54452877d3214490588676a5680a622e8cb73459dd42022b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the old item used `Phi(W,n,p)` without importing its definition.
  F3 only summarized preservation, so the negative unwinding and positive
  matrix interpretation were not locally type-checkable from the displayed
  Facts.
- Repair: expanded F3 with the supplying lemma's exact left-to-right word
  interpretation and definition of `Phi`, followed by its preservation
  conclusion; synchronized the proof contract.
- Pre-edit hash:
  `932c0152ba7d3c1074f05f706b8f1325db229eb1b1bb60381c08445a2479a827`.
- Post-edit hash:
  `b23a131098ff555ee9365059f87a868c6d4092b5c8ca828a71ee8c89aaa4607c`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; the
  updated batch-8 proof contract parses.
- Rejudge target: yes.

### `ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra`

- Rejection: `gpt-5.6-terra`, context
  `a0d949d3c150f3eea25d72feaf051f7d23a676f5b6f50abbd2a44fe2a171c7ef`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 inflated the countable-algebra theorem's prime-ideal existence
  Statement into a supplied tree with specified levels and branch. Those
  structures occur in its proof but were not its cited interface.
- Repair: added the exact finite-partial-diagram definition as F1 and made
  every level and branch computation explicitly local. The countable-algebra
  theorem is now F2 and is used only for its prime-ideal existence conclusion;
  synchronized manifest and contract.
- Pre-edit hash:
  `8c74ddbca9bc8f41e87102ba506616607fc889ae3618354ce610467bc7d22ef6`.
- Post-edit hash:
  `ab13dd84591015e59921e3ec396ec27455f1751f2c33940715a41afe7f4f0218`.
- Focused checks: canonical reflow, item precheck, and rendercheck pass; both
  batch-8 JSON carriers parse.
- Rejudge target: yes.

### `lem-solovay-homogeneous-truth-has-borel-representatives`

- Rejection: `gpt-5.6-terra`, context
  `9e47f54ba829a34b45428eef5ac232b3ecb43a2490529ba9847f185b2bf497c9`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: homogeneity makes the tail forcing decide a sentence; it does not
  make arbitrary truth absolute from `N[x]` to `N[x][H]`. The old proof took
  the random/Cohen Boolean value of `phi` itself and then used precisely that
  false absoluteness step.
- Repair: after factoring the final extension over each generic real, take the
  random/Cohen Boolean value of the assertion that the top condition of the
  homogeneous tail forces `phi`. The real-forcing truth lemma, tail
  homogeneity, and tail truth lemma now identify its Borel representative with
  final-extension truth. Synchronized manifest and contract.
- Pre-edit hash:
  `9268b2a44876c6eb130a32caac9d0f7147592d6d5f8d083d883bbbd9a0c2f158`.
- Post-edit hash:
  `b7e10c01f943e039e5d65c2d011dd6746c9ba6fbdf1541cf5228ecf010da7da6`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse. The repaired route was checked against Solovay Part III,
  Lemma 1.4, especially displayed steps (2)–(5).
- Rejudge target: yes.

### `thm-every-solovay-model-set-of-reals-has-the-baire-property`

- Rejection: `gpt-5.6-terra`, context
  `9ac22b519b23c3f938220592646fa533603952924570a43546401b1770c2f9a3`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the representation lemma gives agreement only on `N`-Cohen
  generics, while generic-largeness constructs the meagre complement using an
  ambient enumeration. The old proof falsely asserted a witness `D in N` and
  never transferred an explicit meagreness witness into `M`.
- Repair: ambiently enumerate the `N`-coded nowhere-dense obstructions and
  code their union by one real `d`. Equality of the reals of `M` and the final
  extension puts `d` in `M`; coded absoluteness verifies the same meagre set
  there. Combine it with the Borel open-mod-meagre code in `M`. Synchronized
  manifest and contract.
- Pre-edit hash:
  `af7cf1f5e4b0ce90baecc18e33be682b9b9f77afae41d8ca0f05082273184578`.
- Post-edit hash:
  `b30e7d8a7ba3229538df921591b35352e0cab12f6b8c7c7d7346dc16612b4889`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse. Solovay Part III Lemma 1.4's coded exceptional-set argument
  was used as the primary-source check.
- Rejudge target: yes.

### `thm-every-solovay-model-set-of-reals-is-lebesgue-measurable`

- Rejection: `gpt-5.6-terra`, context
  `30855e43b33de72aa87f2aba127e95411061015ea3d70c4a9e4a2b065030b1fe`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: generic-largeness states only that `N`-random reals are conull;
  it does not supply one `N`-coded null Borel set containing every
  nongeneric. The old F3 and step 1.1 inflated that conclusion, and the
  unsupported `N`-membership was essential to the internal completeness step.
- Repair: ambiently enumerate all `N`-coded null Borel sets, code their union
  `C` by one real, and transfer that code to `M` using equality of reals. The
  `N`-coded representative and the `M`-coded null exception then yield
  measurability by coded absoluteness and completeness. Synchronized manifest
  and contract.
- Pre-edit hash:
  `502c7641ae3d0d6b8b71df0c65bc48ee9a974536f409d921f5612a4cbabbda7f`.
- Post-edit hash:
  `a44126fa794594e1b6774e7b9720cad1cf873f8efd053071f185b6ae9fdf5885`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse. Checked against Solovay Part III Lemma 1.4.
- Rejudge target: yes.

### `thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function`

- Rejection: `gpt-5.6-terra`, context
  `c2af9056b32374465226908893dfc009ccb2a1910fd5a403dfa7dc9a1865d705`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: measurable-subgroup rigidity and Steinhaus both explicitly assume
  Countable Choice, but the old F3/F5 restatements suppressed that hypothesis
  and the proof applied them internally in `M` without supplying it.
- Repair: added the exact theorem that `M` satisfies Dependent Choice and the
  exact ZF implication `DC => AC_omega`; F3--F5 now retain their choice scope,
  and both consuming steps cite the derived Countable Choice fact. Synchronized
  the batch manifest and owning proof contract.
- Pre-edit hash:
  `01d75804a5d32e5ac3da5c2cfaf0b82747d22cbf9a615456a2b3e34fdf9ab608`.
- Post-edit hash:
  `0d121748732700083d8daca99c0ef25af960690d9970f859ddea6de40a4cc574`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check passes.
- Rejudge target: yes.

### `lem-solovay-perfect-tree-of-mutually-generic-name-interpretations`

- Rejection: `gpt-5.6-terra`, context
  `5f75694fd3d52f4ed9fde909e149f162eaef590275c8bc1d1de36a9b676165ab`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the forcing-theorem Statement supplies definability and truth, not
  the density of conditions deciding a formula. The old F2 attributed the
  stronger decision interface to that theorem, and step 2.1 depends on it.
- Repair: added the exact forcing decision-density lemma and stated the finite
  iteration that decides a prescribed finite prefix of a real name. Retained
  the forcing theorem for definability of the unique compatible prefixes.
  Synchronized the batch manifest and owning proof contract.
- Pre-edit hash:
  `3822b81dc51ff0ab9bb86360355096fe6fa0771f8e07db9a6584d5fd40b52aec`.
- Post-edit hash:
  `72d4675e1a315f26d38ce1bbf6226c9e2cc39e275ebe223e2b075e6a0443c97d`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check passes.
- Rejudge target: yes.

### `lem-solovay-random-and-cohen-generics-are-large`

- Rejection: `gpt-5.6-terra`, context
  `55ef9c1bf1d758a42b7b9918c51bbcc8fa7c84284b08bd3a455c91c5ad8a3972`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F1 overstates the collapse-localization dependency, whose Statement
  addresses the specific stages `V[G_xi]`, not arbitrary intermediate `N`.
  However, the item's own Statement and Given block explicitly assume that
  `R^N` is ambient-countable, exactly the premise both proof steps use. Thus
  the cited gloss is poor attribution but creates no gap in the argument.
- Repair: none; nonfatal outcomes do not license content or contract changes.
- Pre-edit/current hash:
  `8dd9b51e71ec2ef5027457dbc68e4ba6c1a8720d14db7e10441da1f4ef605df9`.
- Rejudge target: no.

### `lem-solovay-construction-is-uniformly-formalizable`

- Rejection: `gpt-5.6-terra`, context
  `3ae6c4972cd0973fbb1e9c92906982bb0f3d1cdf9caad65b874296189f59e1da`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the semantic Solovay-model theorems do not provide the
  source-theory-certified proof constructors needed for a PA-verified uniform
  transformer. The old proof repeatedly asserted those constructors rather
  than deriving them.
- Repair: narrowed the title and Statement to externally indexed fixed-fragment
  model transfer. For a fixed target fragment the proof now traces a finite
  source family, reflects it above an inaccessible, takes a countable
  elementary hull and transitive collapse retaining the inaccessible, builds a
  generic for that countable model, and runs the retained Solovay construction.
  It explicitly disclaims a uniform arithmetic proof compiler. Synchronized
  the batch manifest and owning proof contract.
- Pre-edit hash:
  `5a355b6d1e34c2b8f92007415d8a9a5f9795d5302fb5f3b26aa89e2cdb4b5c57`.
- Post-edit hash:
  `ad04452085dd3867b94ded3c4c3ed3bfd7534703201320e189c3abeaee40f0af`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; strict proof-contract checks pass for this item and the
  collateral localization contract touched while synchronizing citations.
- Rejudge target: yes.

### `cor-solovay-model-has-no-banach-tarski-decomposition`

- Rejection: `gpt-5.6-terra`, context
  `136f60d8fde36350e30a7cfb5ca0627bdf8cc2d49583ced84889e6da522d0560`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the old Statement did not bind the asserted decomposition to the
  usual one-use equidecomposition convention, so it admitted the judge's
  reading in which every source piece is reused in each of two reassemblies.
  On that reading the stated zero-radius argument was false. The proof also
  used orthogonal invariance and finite additivity results whose Statements
  require Countable Choice without establishing that hypothesis internally.
- Repair: stated the one-use convention explicitly as one partition, one
  rigid motion per piece, and a single disjoint union equal to the two target
  copies. The positive-radius argument now applies finite additivity to that
  exact equality, while the singleton case counts its sole nonempty piece and
  sole image against two target points. Added the exact `DC => AC_omega`
  dependency and derived Countable Choice in the Solovay model. Synchronized
  the batch manifest and owning proof contract.
- Pre-edit hash:
  `b5ee5cc1a31b0c9e0b49c42db32436cb5e90d78ed9dff596550575c1ac78ae`.
- Post-edit hash:
  `affaeb6f7cf057b24ff0d79e5022640d749e40fff8244d63cf201c8f95c0c1e6`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check has no errors
  (one nonblocking broad-fact-use warning remains).
- Rejudge target: yes.

### `thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability`

- Rejection: `gpt-5.6-terra`, context
  `430c9770a2405c20b43158016d9f78aecdb4e3be8aa61708c669e5ee8fbb3aac`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: F3 made the sequence parameter definable over the intermediate
  model `V[r]`, while the old step substituted it into an ambient `V[G]`
  definition without an absoluteness or relativization argument. Tail
  homogeneity did not supply that missing transfer.
- Repair: added the exact constructible-ground dependency. Since `V=L`, the
  intermediate model is `V[r]=L[r]`; the repaired step uniformly defines
  `L[r]` in `V[G]` and syntactically relativizes the fixed defining formula to
  it before substitution. Synchronized the manifest and owning contract.
- Pre-edit hash:
  `703bf435ae0fbbd91c1b96d91b8159d7db8074a14dd3320a2e3b70bffb73c44a`.
- Post-edit hash:
  `97752233f456885524812a900edc8a6016f4735a2d412e07f312dfcd56d24eeb`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; strict contract checks pass for this item and the collateral
  Halpern--Lauchli contract restored while placing the new citation.
- Rejudge target: yes.

### `cor-solovay-model-has-no-vitali-or-bernstein-set`

- Rejection: `gpt-5.6-terra`, context
  `a58ee50079926b01df20e7b7b618a79f91bda82cc12c9e1a9963815b5d37bac6`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the cited definition says that a Bernstein set contains no
  **nonempty** perfect subset. The old F4 gloss and step 1.2 dropped that
  qualifier and thereby made the false claim that it does not contain the
  empty perfect set.
- Repair: restored `nonempty` in the fact gloss and on both sides of the
  perfect-set contradiction, leaving the actual PSP argument unchanged.
- Pre-edit hash:
  `1dbc26a1d39bfaaee7eebe1ff1eee86b5430b1f6070fe4f5edcc31ef37fd7520`.
- Post-edit hash:
  `6a1f38f583d59f421e52f506b4bf38a26ecfba15d1ad597c5c8d86c957abfe30`.
- Focused checks: item precheck and rendercheck pass; batch-8 contract JSON
  parses and the strict item-scoped contract check passes.
- Rejudge target: yes.

### `thm-solovay-model-regularity-relative-to-an-inaccessible`

- Rejection: `gpt-5.6-terra`, context
  `7e2b14587fb673c7064986d33169240e92ec235701379e56a96d27c3fc7e2dff`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the repaired finite-fragment lemma expressly disclaims the
  primitive-recursive transformer required by the old F2, so the old step's
  claim that F1 supplied that exact hypothesis was false.
- Repair: replaced the arithmetic transformer dependency with the exact
  externally indexed finite-fragment model-transfer metatheorem. For each
  finite target fragment the proof now identifies the finite source fragment,
  suitable reflected countable transitive model, and conversion proof supplied
  by F1. It expressly uses no uniform arithmetic map. Synchronized the
  manifest and contract.
- Pre-edit hash:
  `f588716f98026601a3e843f35a80e2892d2d61942c68cb25ae4b0b2c4dcfb10b`.
- Post-edit hash:
  `7a68aed34a0f8740ae62b7eeab5b6d451d8d68161b1311f766e230fa623aaf35`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; strict contract checks pass for this theorem and the
  upstream formalizability contract whose changed corollary quote was synced.
- Rejudge target: yes.

### `ex-the-perfect-tree-splitting-of-a-new-real-name`

- Rejection: `gpt-5.6-terra`, context
  `ba63cc84e5e38e148d8d9c078329ea5ed0af70fef22069a1e71967c04a4c6ae2`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's Statement asserts only the completed perfect tree, not the
  prescribed finite dense-set refinement used by the example. Direct review
  also found that the old second and third levels counted unordered rather
  than ordered pairs and failed to meet earlier product-dense requirements for
  newly created sibling pairs.
- Repair: added the exact forcing-definability and decision-density suppliers,
  proved splitting below every condition from the newness hypothesis, and
  displayed the finite refinement procedure. The repaired second and third
  levels handle all 12 and 56 ordered pairs respectively and meet every
  `E_j` with `j` no larger than the stage. Synchronized manifest and contract.
- Pre-edit hash:
  `6998583ea924e9e9a7fa39b1a5e21d3ee5430c1dda5fcebb7d49fa34b86d56ea`.
- Post-edit hash:
  `42225c5fc4622b3d7159423d4e8b4bd2d3d9bdd22508fb15881f1b7a817a4d5c`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check passes.
- Rejudge target: yes.

### `lem-solovay-borel-code-and-regularity-absoluteness`

- Rejection: `gpt-5.6-terra`, context
  `b885782540e26651ad1fc77df72617b5750d59552672594b70e691a607ea70c4`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3 contradicted the exact cited definition by making nonemptiness
  part of perfectness, although that definition expressly counts the empty set
  as perfect.
- Repair: stated perfectness exactly as closedness plus absence of isolated
  points and made nonemptiness a separate condition. Updated the boundary and
  risk records and synchronized the citation-use map.
- Pre-edit hash:
  `d97f1433ea87ed7aa524d5b883aabdfdbf25b8d48bc67531bd9f6b4e7b75ab4d`.
- Post-edit hash:
  `c951fcbb2ba5c7966ea6a2c9d26841ff4dd3da5ff52e3319d25daaf0520e3469`.
- Focused checks: item precheck and rendercheck pass; the batch-8 contract
  parses and its strict item-scoped check passes.
- Rejudge target: yes.

### `ex-volume-contradiction-for-an-alleged-banach-tarski-decomposition`

- Rejection: `gpt-5.6-terra`, context
  `906b07a7e9498c3703ab9cb8f61b15273e36e009d69b644ee19a6ff4f09412e6`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3 suppressed the Countable Choice hypothesis of the cited
  orthogonal-invariance corollary; the box-measure theorem in F4 has the same
  hypothesis. Neither was discharged in the old example.
- Repair: added the Solovay-model DC theorem and the exact `DC => AC_omega`
  implication, then derived Countable Choice before applying either measure
  result. Refreshed the repaired one-use Banach--Tarski statement in the
  contract and synchronized the manifest.
- Pre-edit hash:
  `8d6f978dcd9ec1e4530c3c2b346f5f564965a11e2f2339c7bdc67827979091dc`.
- Post-edit hash:
  `6c8840f95dbfcdae1acc6fd2f03818c64e07b0c392e254b7df6d5bf1221bf769`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check passes.
- Rejudge target: yes.

### `ex-a-borel-representative-from-a-random-boolean-value`

- Rejection: `gpt-5.6-terra`, context
  `247c3597b91588ba49600b32dbb1e517d01ee6cad41d62b18b09446c93ca5978`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: homogeneous tail forcing does not make arbitrary formulas upward
  absolute from `N[x]` to `V[G]`. The old Boolean value represented
  `phi(x,a)` over the former and then asserted precisely that false transfer.
- Repair: formed the random Boolean value of the assertion that the top of the
  homogeneous tail forces `phi`. The random truth lemma identifies this
  assertion with Borel membership, while the tail's 0-or-1 Boolean value and
  actual generic identify it with final-extension truth. The proof expressly
  disclaims upward absoluteness and retains the nongeneric exception.
- Pre-edit hash:
  `5c1ddaef94796f0a316072b7d2ed5d6bedd56c578a124631be48fcd267051587`.
- Post-edit hash:
  `2a8b2bd259fc289035aae9c50ec6d45c9b382421e04a41c033bbad8d4c3c390b`.
- Focused checks: item precheck and rendercheck pass; the batch-8 manifest and
  contract parse; the strict item-scoped contract check passes.
- Rejudge target: yes.

### `ex-coding-countably-many-solovay-definition-parameters`

- Rejection: `gpt-5.6-terra`, context
  `5f442d2ece3106984fc86e7e97031c9a0c82dbe99edb5b529c2bbbb365a7ac4d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the omega-closure theorem only says that an ambient function from
  omega into `M` belongs to `M`; it neither states nor supplies the one-code
  parameter interface attributed to it in F2.
- Repair: removed the irrelevant omega-closure dependency. The example now
  performs the pairing and tagged interleaving directly and cites only the
  exact HOD(S) definition, whose own interface explicitly permits one
  interleaved S-parameter. Synchronized manifest and contract.
- Pre-edit hash:
  `9d2ebf23d5c9ed77af8773dbc680807df6224a3568147e0b00c9ecc44ff02346`.
- Post-edit hash:
  `2089a27d7c4db18a7e6a6d7ed340873fc15d95fbf44a229f9bb9d37799546038`.
- Focused checks: item precheck and rendercheck pass; both batch-8 JSON
  carriers parse; the strict item-scoped proof-contract check passes.
- Rejudge target: yes.

### `thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity`

- Rejection: `gpt-5.6-terra`, context
  `57218ad4264cb018626339c0d3744a39dd3c2b639c0b9afe046f15f689682d65`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F8 cited the one-dimensional dyadic-coding lemma as though it
  supplied a bidirectional measure-space isomorphism between one and three
  coordinates. Its statement supplies only a one-way pullback criterion, so
  the old proof did not establish measurability of arbitrary subsets of
  `R^3`, on which the Banach--Tarski consequence depends.
- Repair: constructed the canonical digit-interleaving Borel bijection on a
  conull domain, proved Borel and null-set preservation in both directions
  from cylinder measures and a monotone-class argument, and invoked product
  completion only after deriving Countable Choice from DC. Split that
  construction from its application into canonical proof steps and updated
  the manifest and proof contract.
- Pre-edit hash:
  `83e218ebfd0fbac1077b1056501092a2e01ea5c9cbb28ebda19f920511e6a5ae`.
- Post-edit hash:
  `e156e34d7ab3a9e891af33d1558ff5820c04f1e7e154bcbeb368f86b9f432d6d`.
- Focused checks: item reflow is unchanged; precheck and rendercheck pass;
  the batch-8 contract parses and its strict item-scoped check passes.
- Rejudge target: yes.

### `thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset`

- Rejection: `gpt-5.6-terra`, context
  `afb63857b3aead601a60009fbb49821e452fadb0feeb8e479d14db80fbf20bd8`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 localizes a real to a bounded initial extension; it does not
  produce a forcing name over the earlier intermediate model chosen for the
  definition parameters. The old proof therefore had not met the name
  hypothesis of the perfect-tree lemma.
- Repair: localized `x` to a later bounded stage, factored the interval
  coordinates over `N`, and used the definition of `N[H]` to obtain a
  `Q`-name in `N` whose valuation is `x`. Added the exact setup and valuation
  dependencies and split the construction into canonical proof steps.
- Pre-edit hash:
  `e288239dc3c94139218fd592b8693734c4cf0b82c26371d2cca74e70d926c3ae`.
- Post-edit hash:
  `325515c4bec1279a012fb24fd122e415c6e760dc00a43a803741cb913de54002`.
- Focused checks: item reflow is unchanged; precheck and rendercheck pass;
  both batch-8 JSON carriers parse and the strict item-scoped contract check
  passes.
- Rejudge target: yes.

### `def-feferman-tail-flip-definability-model`

- Rejection: `gpt-5.6-terra`, context
  `fe8e82648a2a74b19284acbd17bd63935e8af73f230c3f14fa598f0d77298ab8`.
- Outcome: `false_positive`. This supersedes the earlier, erroneous fatal
  disposition in the append-only adjudication history.
- Evidence: for every allowed ground-model bit flip `b`, its `n`th coordinate
  `b_n` is a ground-model real and
  `b[O_n]={S_n triangle b_n triangle a:a in V cap 2^omega}=O_n`. Thus the
  proposed `O_n` are fixed individually, their family is fixed, and the
  rejection's claimed tail reshuffle does not move its witness. Coordinate
  permutations are not members of the displayed bit-flip group.
- Repair disposition: the attempted change was reverted. The item is
  byte-for-byte equal to its Step-7 baseline content, and the manifest entry
  was restored to the corresponding equality strategy.
- Baseline and current hash:
  `4cea592dab5f2b6165cae53d4137c9e5c424e689780ce8d5cad5fb0f2149b705`.
- Focused checks: exact comparison with the saved baseline item succeeds;
  rendercheck passes and the batch-7 manifest parses.
- Rejudge target: no.

### `lem-solovay-collapse-localizes-countable-ordinal-data`

- Rejection: `gpt-5.6-terra`, context
  `9db6313f3f112148076a9c5209d4394d4f213caf63ffac87f39f9d8c3cf68a2e`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the forcing theorem supplies definability and the truth lemma,
  not the dense decision interface that F3 and step 1.2 attributed to it.
  Hence the deciding maximal antichains were not justified by the cited
  statement.
- Repair: added the exact published forcing monotonicity/density/decision
  lemma. Step 1.2 now uses its density clause before ambient Choice extends
  and selects the maximal antichains; the support-bound argument is unchanged.
  Removed an accidental unrelated contract fragment encountered during the
  focused check.
- Pre-edit hash:
  `b069c344b2d20ee49072ec21576930f500d2100555c4477390cba1d991de3d03`.
- Post-edit hash:
  `70c69e1f240bf93f200b0781e7cccd1473a815e4164316c2750d1875acbb5578`.
- Focused checks: item reflow is unchanged; precheck and rendercheck pass;
  both batch-8 JSON carriers parse and the strict item-scoped contract check
  passes.
- Rejudge target: yes.

### `thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice`

- Rejection: `gpt-5.6-terra`, context
  `b8476fc5baa42c9b57047f4b905bef0b98cee08a1329e349e13e7dfcaf55e1f8`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the cited DC interface requires a nonempty carrier and, in the
  prescribed-start form used by the proof, `a_0 in A`. Old step 2.1 stated
  neither; with `A=R=empty` its assertion that seriality makes the first
  successor-witness set nonempty is false.
- Repair: explicitly assumed `A` nonempty and `a_0 in A`, required each
  successor to lie in `A`, and derived witness-set nonemptiness from membership
  of the current point together with seriality. The matching derivation and
  boundary row were synchronized.
- Pre-edit hash:
  `a65c9f687bcc12a6d2154232d7da690bc026aeb9d732b01d9e305225b1d76f1a`.
- Post-edit hash:
  `80eb43940a78c863e97f155ef9ccf0c4b420a857c1054d99cc3c96e9b4bbbe31`.
- Focused checks: item reflow is unchanged; precheck and rendercheck pass;
  the strict batch-8 item-scoped proof-contract check passes.
- Rejudge target: yes.

### `thm-small-forcing-does-not-create-measurable-cardinals`

- Rejection: `gpt-5.6-terra`, context
  `65a43aa71f592d2991df9f53140c9c66df2c12a8aea5d892828d83bebdaa9b5b`.
- Outcome: `confirmed_nonfatal`.
- Evidence: Hamkins's Lemma 6 explicitly reduces amenability first to
  `j` restricted to ordinals and then to the range sets `j``theta`. The
  reconstruction omitted from the item is immediate: for a ground
  enumeration `e:theta -> A`, both `j(e)` (as a member of `M subset V`) and
  `j` restricted to `theta` are ground sets, and
  `j(e)(j(alpha))=j(e(alpha))`. Ground Replacement collects the graph of
  `j` restricted to `A`. This never asserts `j(A)=j``A`.
- Repair: none; fatal-only adjudication does not license a presentation edit.
- Item hash:
  `69eefc34f19634036bd6361fc5ed25d71fe0381994f0286f75e3b5031aa63194`.
- Rejudge target: no.

### `thm-blass-model-has-only-principal-ultrafilters`

- Rejection: `gpt-5.6-terra`, context
  `0648b07248d750244e4098850cb534351583ec1db5216e23eec33a3a0aa5c6a0`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: old step 2.1 chose only the least coordinate absent from the
  finite parameter set. Such a coordinate can lie below a used coordinate,
  whereas F5 complements the next coordinate above all displayed
  predicates. Step 3.1 therefore did not satisfy F5's hypothesis.
- Repair: chose `k` strictly above every real-parameter coordinate and
  applied F5 with `n=k-1`; the resulting tail flip fixes the condition and
  all defining parameters while complementing the chosen real modulo finite.
- Pre-edit hash:
  `2bc60e37a5c161c20a43515806516149d9dc5830ea8fa7491fa64f2605e2b6ec`.
- Post-edit hash:
  `2a1089078e19912ac260b5e241e50013ecd8157b582adb8b262ab46ac67e9810`.
- Focused checks: canonical reflow is unchanged; precheck and rendercheck
  pass; the strict batch-7 item-scoped proof-contract check passes.
- Rejudge target: yes.

### `lem-basic-cohen-search-and-shift-prime-ideal-construction`

- Rejection: `gpt-5.6-terra`, context
  `d13efcc3ba10f418839f878632448d63a13b5286515eacaceeca9101f776c7ff`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the old fresh-bit argument claimed that arbitrary pairwise
  incompatibility data on a finite family of supports could be encoded by
  assigning one bit to each vertex. A one-bit label per vertex cannot realize
  an arbitrary finite graph, so that construction did not prove the required
  compatible-type rectangle.
- Repair: replaced the invalid graph encoding with the exact finite
  compatible-type lemma proved in Ransom's Appendix C and gave a direct
  Cohen-row flattening into pairwise disjoint ordinal blocks. The flattening
  preserves the finite Boolean type and compatibility in both directions;
  the cited spreading and gathering maps then return the constructed witness
  to the original presentation.
- Pre-edit hash:
  `cc17c8f1bf4aa53262895b6211859b10c2b5a2f79df7243f81f755a8f406cf54`.
- Post-edit hash:
  `f61ba6b973d11203fcfe89474c4e5e8819758ac544e5b902a58976d639a16fdd`.
- Focused checks: canonical reflow is unchanged; precheck and rendercheck
  pass; the strict batch-7 item-scoped proof-contract check passes.
- Rejudge target: yes.

## Reader-warning dispositions

- `s8a-c5fa9f8adb456c5c68db17be` on
  `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`:
  `nonfatal`. The cited lemma omits the added rank coordinate, but the stated
  rank-then-fixed-arity-tuple order is immediately well-ordered by ordinal
  minimization followed by the cited finite-coordinate minimization. No
  content change was made for this warning.
- `s8a-149f144d65de223bbac269d6` on
  `thm-feferman-definability-union-is-a-zf-model`: `nonfatal`. The equality is
  load-bearing and compressed, but the two rank-inductive directions are
  sound for this exact ground-model bit-flip group. Feferman's Theorem 4.9
  independently proves ZF for the ranked model, while the judge's proposed
  contrary family is fixed by every allowed flip. No content change was made
  for this warning.
- `s8a-94991e56b3f10fac0556e7e4` on
  `thm-small-forcing-does-not-create-measurable-cardinals`: `nonfatal`.
  The complete primary-source proof of the Gap Forcing Theorem, especially
  Lemmas 2--6, confirms the compressed common-cover, fresh-sequence,
  target-identification, and amenability steps. No false claim was found and
  no content change was made.
- `s8a-f06fde5f1b13bdcd5b4091da` on
  `thm-blass-model-has-only-principal-ultrafilters`: `nonfatal`. Replacement
  follows the ordinary hereditary-OD proof after relativizing the fixed
  functional formula to `N`: substitute the finite definitions of the input
  set and parameters to define the whole image at once, and use that every
  output lies in `N` to obtain the hereditary clause. No per-value code choice
  is used.
- `s8a-c0a91e001968fd7bf3d0eb63` on
  `thm-blass-model-has-only-principal-ultrafilters`: `nonfatal`. The
  simultaneous rank induction gives subsets and surjective images no larger
  `W`-rank than their source, so each least-index partition piece remains
  below the carrier rank. Bounded definition codes form one `W`-set and their
  evaluation map surjects onto the target, avoiding any choice of one code per
  element. No false identity or Choice use was found.
- `s8a-d4dcbee147e95f0a9247f199` on
  `lem-basic-cohen-search-and-shift-prime-ideal-construction`: `nonfatal`.
  Ransom's compatible-type lemma and Appendix C give the exact finite
  rectangle used after the judge-licensed repair, while Theorems 5.15, 5.23,
  5.27 and Corollary 5.28 supply the spreading/gathering inverses, outer
  bijection, forcing isomorphism, and witness transfer. No additional defect
  remains from the warning.
- `s8a-26b5aa8d93682b5d1dc80339` on
  `thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset`:
  `nonfatal`. The bounded-stage tree is an ambient omega-sequence of
  conditions and forced finite strings, so the stated omega-sequence closure
  puts its code in the Solovay model. That code retains the explicit pruned
  splitting certificate needed for internal nonemptiness and perfectness.
- `s8a-a95284571634bb44336564fc` on
  `thm-halpern-lauchli-and-the-basic-cohen-bpi-model`: `nonfatal`. This was a
  bookkeeping defect only. The current item, batch manifest, and strict proof
  contract declare and use only the local Halpern--Lauchli theorem and the
  semantic BPI-plus-not-AC theorem. The three obsolete batch-8 item-review
  rows were changed to `removed`; the unified ledger was refreshed and read,
  and all three now have empty declarations and removal evidence.

## Cross-group alerts

None at this checkpoint.

## Sources consulted

- Repository dependencies supplied the exact regular-open and forcing
  interfaces used in the repaired Feferman items.
- Halpern and Läuchli, “A partition theorem” (1966), §2, printed pp. 364–365,
  was consulted at
  `https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf`. Rules 1–3 and
  Lemma 1 support the exact word-calculus moves and endpoint rearrangement.
- Solovay, “A Model of Set-Theory in Which Every Set of Reals is Lebesgue
  Measurable” (1970), Part II Theorem 2.8 and Part III Lemma 1.4, printed
  pp. 38–42, was consulted at
  `https://people.math.ethz.ch/~fdalio/ZKmodel.pdf`. It supports taking a
  Borel representative of the ground-formulated tail-forcing assertion and
  chaining that representation to truth in the final collapse extension.
- Feferman, “Some applications of the notions of forcing and generic sets,”
  §§3--4, printed pp. 336--341, was consulted at
  `https://bibliotekanauki.pl/articles/1381977.pdf`. The ranked ramified
  stages are defined on pp. 336--340, and Theorem 4.9(i) on p. 341 proves the
  resulting `M*` is a ZF model directly. The source does not formulate the
  later hereditary-symmetric presentation; that identification was checked
  separately against the exact bit-flip action, including the rejection's
  proposed orbit-family witness.
- Hamkins, “Gap Forcing,” Gap Forcing Theorem and Lemmas 1--7, printed
  pp. 4--9, was consulted at `https://arxiv.org/pdf/math/9808011`.
  Lemma 6 supplies the exact range-to-restriction amenability reduction, and
  Lemmas 2--5 support the warning's other compressed restriction steps.
- Hayut and Karagila, “Spectra of uniformity,” Proposition 2.3 and Corollary
  2.4, printed pp. 288--289, was consulted at
  `https://dml.cz/bitstream/handle/10338.dmlcz/147812/CommentatMathUnivCarolRetro_60-2019-2_10.pdf`.
  It supports the least-ordinal partition argument turning a free ultrafilter
  at the least ordinal into a uniform complete measure and its consequence in
  symmetric extensions of `L`.
- Tachtsis, “On the Existence of Free Ultrafilters on omega and on
  Russell-sets in ZF,” Theorem 4, printed pp. 5--7, was consulted at
  `https://www.impan.pl/shop/publication/transaction/download/product/91097`.
  It states the exact paired finite-modification parameter-HOD construction
  and attributes the all-ultrafilters conclusion to Blass; the source does
  not reproduce Blass's full proof, so the `W`-closure argument was checked
  directly from the item.
- Ransom, “The Boolean Prime Ideal Theorem in the Basic Cohen Model,”
  Sections 4.1 and 5.1--5.2, Appendix C, Theorems 5.15, 5.23 and 5.27, and
  Corollary 5.28, was consulted at `https://arxiv.org/abs/2511.21684`.
  These passages prove the compatible-type rectangle and the
  spreading/gathering and reindexing transfers used by the repaired
  search-and-shift construction.

## Validation

- Coverage reconciliation found 43 exact latest group-d adjudications: 36
  `confirmed_fatal`, 3 `confirmed_nonfatal`, and 4 `false_positive`. Every
  rejection has a report section. All 8 group-d Step-6 warnings have one
  exact durable disposition and appear above; no group-d cross-group alert
  exists.
- `step7-guard.mjs` passes against `pre-step7`: all 171 run-wide changed items
  are licensed, with no creation, deletion, error, or warning. The group-d
  repaired set is the 36 fatal items; the rejected change to
  `def-feferman-tail-flip-definability-model` was restored to its baseline.
- `step7-scope.mjs check` passes: 6 groups, 566 partitioned items, no routed
  open rejection, and 48/48 reader warnings or alerts dispositioned.
- All 36 group-d fatal-repair items pass `precheck.mts` and `rendercheck.mjs`.
  Their strict proof-contract checks pass 13/13 in batch 7 and 23/23 in batch
  8; the Banach--Tarski corollary retains one advisory shotgun-citation
  warning. The complete batch-7 strict contract passes 39/39.
- `defect-ledger.mjs validate` and its adjudication/reader coverage `check`
  both pass over 232 run rows with no errors. The append-only ledger still
  contains `phase-2-next-18-step7-d-034`, written during the reverted mistaken
  fatal disposition. The later exact adjudication and the baseline-restored
  item establish that this row is historical residue, not a live defect; no
  authorized ledger-retraction interface exists.
- The six edited JSON carriers parse. `depcheck`, `fwdcheck`, `extcheck`, and
  the repaired-item `citecheck` exit successfully; their repository-wide
  warning classes are advisory and unrelated to these repairs. `git diff
  --check` passes.
- The frontier dependency ledger was refreshed after the final dependency
  edit and read. All 9 batch inputs are reviewed with no unreviewed batch. The
  three warned item reviews now have empty declarations and `removed`
  evidence; the real semantic BPI theorem edge remains declared. The one
  orphan review is the already-`removed` nonexistent scaffold lemma and is
  retained as the ledger tool's documented moved-target audit evidence.

## Engine-owned preflight residue

The optional complete batch-8 strict-contract diagnostic reports 7 stale
mapping errors on four unchanged items:
`thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf`,
`lem-solovay-inner-model-is-closed-under-ambient-omega-sequences`,
`lem-solovay-random-and-cohen-generics-are-large`, and
`lem-solovay-universal-measurability-transfers-to-euclidean-spaces`. None is
part of a licensed fatal repair in this dispatch; in particular the random-
and-Cohen-generics rejection was `confirmed_nonfatal`, which forbids a
contract edit here. The engine's separate Step-7 preflight owns mechanical
contract regeneration before rejudge.

Group-d adjudication and its Step-8 frontier-ledger reconciliation are
complete. Rejudge and stage transition remain engine-owned.
