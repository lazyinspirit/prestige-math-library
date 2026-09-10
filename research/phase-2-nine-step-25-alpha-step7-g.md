# Step 7 adjudication — group g

Run: `phase-2-nine-step-25`  
Batches: 14, 15, 16  
Scope: 29 exact judge rejections; no Step-6 reader warnings or incoming cross-group alerts at scope time.

## Completed adjudications

### `lem-primitive-recursive-syntax-and-proof-checking`

- Rejection: the six-scheme/three-rule calculus and its annotations were allegedly unspecified.
- Decision: `false_positive` against guard hash `2846bfeceb1a23121c4875e8bbd08f6cd67d8c1c23f21dc23ee00768586fe03f`.
- Evidence: F2 in the item explicitly defines a certified proof as a derivation of `def-set-coded-formal-derivation`. The opened published dependency specifies exactly six logical schemes, MP/generalization/restricted existential elimination, finite annotations, earlier-line indices, and the relevant side conditions. Steps 4.1–5.1 enumerate and check precisely that interface. No content or contract change was licensed or made.
- Sources consulted: repository items `items/lem-primitive-recursive-syntax-and-proof-checking.md`, `items/def-effective-theory-and-certified-godel-numbering.md`, `items/lem-certified-syntax-coding-operations-are-primitive-recursive.md`, and published dependency `items/def-set-coded-formal-derivation.md`. No external source was needed for this dependency-interface objection.
- Focused check: current guard and judge hashes recomputed with `tools/item-hash.mjs`; judge hash matches the rejection row.

### `lem-interpretation-translates-finite-derivations`

- Rejection: the simultaneous substitution equivalence was said to fail when the substituted variable is absent from the formula because the term's free variables need not occur in the substituted formula.
- Decision: `confirmed_nonfatal` against guard hash `d45a52907135a1261c4875e8bbd08f6cd67d8c1c23f21dc23ee00768586fe03f`.
- Evidence: the induction is stated under the guard on the free inputs, which in this simultaneous term/formula induction includes `FV(t)`. Thus the proposed `t=y` counterexample is outside the guarded hypothesis when `D(y)` fails. Step 1.1 supplies a value for `t` under that guard, and step 3.1 proves that surplus guards can subsequently be removed using interpreted-domain nonemptiness. Writing the guard as `G_{(FV(phi) minus {x}) union FV(t)}` would be clearer, but the local inference is immediate and the item-level transport result is not false or unsupported.
- Sources consulted: current item and `items/def-effective-interpretation-and-proof-translation.md`, plus its published calculus/deduction dependencies already quoted in the facts block. No external source was needed for this local guarded-substitution check.
- Focused check: current guard and judge hashes recomputed; judge hash `0b305a...` matches the rejection row. No content, contract, impact, or judge metadata changed.

### `thm-primitive-recursive-numeralwise-representability`

- Rejection: step 6 calls the beta graph bounded although F2's statement advertises only numeralwise Q representation and PA history properties.
- Decision: `confirmed_nonfatal` against guard hash `f21f6392d94ce1a01637afd1439e526dc91e6a896cd8fa422b53fe96965ed178`.
- Evidence: the rejection correctly spots a statement-level citation omission, but the opened F2 proof displays the exact remainder graph `R(b,d,r)`; its only quantified variable is bounded by `b`, and beta is obtained by substituting the arithmetic term `1+(i+1)c` for its divisor argument. Boundedness is therefore an immediate elementary inspection, while the theorem's PA-Sigma-one and representability claims remain correct. This is a nonfatal proof-step gap, not a false or overstrong claim.
- Sources consulted: current theorem, `items/lem-godel-beta-coding-and-q-remainder.md`, `items/lem-q-numeral-calculation-and-bounded-cases.md`, and `items/def-numeralwise-representability-and-arithmetic-sigma-one.md`. No external source was needed for the displayed-formula complexity check.
- Focused check: current guard/judge hashes recomputed; judge hash `1105e0...` matches the rejection. No file changed.

### `def-effective-interpretation-and-proof-translation`

- Rejection: the optional formalized proof-map clause had no domain/codomain correctness condition, so a constant primitive-recursive map satisfied the literal text.
- Decision: `confirmed_fatal` (`other`) against guard hash `31a019486591917645c9fce7dd6be32d29186fa27a0e3ae215b7012580190a52`.
- Repair: the definition now distinguishes effective certificates for the interpretation obligations and translated source axioms from formalized proof-translation data. The latter specifies an arithmetic base `B`, a total primitive-recursive map on certified proof codes, and the `B`-verified implication from each source derivation code to a target derivation code of the guarded translation; it also records the contradiction-certificate consequence and explicitly excludes merely total constant maps.
- Sources consulted: current definition, `items/lem-interpretation-translates-finite-derivations.md`, and `items/thm-formal-relative-consistency-from-verified-proof-reduction.md`. The correction is definitional and follows the exact correctness formula already required by the consumer theorem; no external source was needed.
- Focused check: `tools/precheck.mts items/def-effective-interpretation-and-proof-translation.md` reports `0 failing`; repaired guard hash is `ef4ebec4fb773ada2813eacd094a38aee04b24d10c85ec9e15694aed28df42f6`.
- Ledger/rejudge: defect row `phase-2-nine-step-25-7-g-001` appended through `tools/defect-ledger.mjs`; this item is a Step-7 rejudge target. No unrelated item was edited.

### `thm-lob-from-derivability-conditions`

- Rejection: the interpreted-arithmetic branch used F3's guarded translation as an unguarded T-language fixed point and did not identify the translated source predicate with T's chosen provability predicate.
- Decision: `confirmed_fatal` (`dependency_citation`) against guard hash `74f67ecb64ebb5d3af981d32f827886aeec839890706e27fe69674a5f06996e8`.
- Repair: the statement now assumes the exact internal diagonalization property needed for `Prov_T(v) -> phi`, notes that the direct effective-signature extension-of-Q case is supplied by the diagonal lemma, and explicitly warns that an interpreted copy suffices only if it supplies this unguarded target-language fixed point and predicate identification. The unused interpretation-transport dependency/fact and invalid step-1 appeal were removed. The standard D1–D3 derivation is otherwise unchanged.
- Sources consulted: current theorem, `items/thm-arithmetic-diagonal-lemma.md`, `items/thm-hilbert-bernays-lob-derivability-conditions.md`, and `items/lem-interpretation-translates-finite-derivations.md`. These interfaces decide the objection exactly; no external source was needed.
- Focused check: precheck passes (`1 checked, 0 failing`); repaired guard hash is `c5614950868d766253b3bab32093bf72198920a08710024bfabff566ada0e6f3`.
- Ledger/rejudge: defect row `phase-2-nine-step-25-7-g-002` appended. After the interrupted preflight was repaired by synchronizing this item's batch and merged contracts, the immediate engine handoff completed; the one Terra rejudge kept the repaired theorem at context hash `9f841bc30a6451e500ecf1628b7336831631871c83822892ac442083ef49f48e`. No second cycle was requested.

### `thm-tarski-arithmetic-truth-undefinability`

- Rejection: the general own-language theorem was said to require T's entire signature to be effective in order to invoke F1.
- Decision: `false_positive` against guard hash `839120de3a8b5d279d8b3e17040a5041ddafda07388f8caf38b569bbc60e7978`.
- Evidence: a proposed truth formula `Tr` contains only finitely many nonarithmetic symbols. Arithmetic together with that finite symbol set is an effective subsignature, so F1 applies to `not Tr` there and yields a liar sentence `L` in the same finite subsignature, hence in T's ambient language. The assumed own-language biconditional schema includes `L`. No effective presentation of T's unused symbols is needed, so the claimed counterexample to the proof does not exist.
- Sources consulted: current theorem and `items/thm-arithmetic-diagonal-lemma.md`; the finite-support reduction is elementary syntax and required no external source.
- Focused check: current hashes recomputed; judge hash `b0bebed5...` matches the rejection. No content or contract changes.

### `ex-godel-diagonal-substitution-calculation`

- Rejection: F1's statement does not itself expose the representing graph `D` or its Q-provable unique-value equation used in step 1.1.
- Decision: `confirmed_nonfatal` against guard hash `7a31b4ac91d533413321dddffc9b5e94e4fc362064c1ac3fdacd3ae1db23237f`.
- Evidence: the example and Given clause explicitly fix `D` as a graph representing the diagonal substitution function. Under the page's numeralwise-representability convention this is exactly the Q-provable unique-value biconditional used in step 1.1, and the opened F1 proof constructs that `D` from its representability dependency. The phrase “used in F1” points to a construction detail rather than F1's displayed conclusion, but a competent reader closes this citation-level gap immediately and the calculation is correct.
- Sources consulted: current example, `items/thm-arithmetic-diagonal-lemma.md`, and `items/def-numeralwise-representability-and-arithmetic-sigma-one.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `1918a42d...` matches. No file changed.

### `ex-consistent-theory-with-an-internal-false-proof`

- Rejection: F2's second-incompleteness conclusion does not itself state numeralwise correctness for each concrete non-proof code.
- Decision: `confirmed_nonfatal` against guard hash `2996c083ac86441b305b8be1ddf5c8d9d8f5dec4b769fa5cee9ce3097c4552eb`.
- Evidence: the phrase “standard certified predicate” in F2 refers to `def-arithmetic-provability-and-consistency`, whose chosen proof predicate is a numeralwise representing graph. That definition gives Q proofs of true standard instances and Q proofs of the negations of false standard instances. External consistency makes every concrete standard PA-refutation-code instance false, so each standard numeral is excluded inside the model. The reasoning is correct; only the attribution should have pointed to F2's predicate-definition dependency rather than the second-incompleteness conclusion itself.
- Sources consulted: current example, `items/thm-second-incompleteness-for-standard-provability.md`, `items/def-arithmetic-provability-and-consistency.md`, and `items/def-numeralwise-representability-and-arithmetic-sigma-one.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `bbf4ccda...` matches. No file changed.

### `lem-finite-formula-witness-rank-bounds`

- Rejection: step 3.1 said monotonicity puts all witnesses in one hierarchy stage, which is false for an unbounded witness class such as `y=y` over V.
- Decision: `confirmed_fatal` (`logic`) against guard hash `47049ee357bada78f5f6c4bbbc0f7e6d2a177119c93edb6fdbe4dac7b1c749a3`.
- Repair: step 3.1 now says that for every true parameter instance at least one witness lies in `W_{b(alpha)}`, while witnesses of larger rank need not. This is exactly what least-stage selection proves and what the finite-reflection consumer uses.
- Sources consulted: current lemma, `items/lem-finite-formula-witness-criterion.md`, `items/thm-montague-levy-finite-reflection.md`, and its rank/collection dependencies. The counterexample and correction are elementary; no external source was needed.
- Focused check: precheck passes (`1 checked, 0 failing`); repaired guard hash is `00c8e43e9b024b62153a4f732b5d7408ff25b5dbaefce35c1441518238d50a62`.
- Ledger/rejudge: defect row `phase-2-nine-step-25-7-g-003` appended. Its immediate engine handoff completed, and the one Terra rejudge kept the repaired lemma at context hash `04f334171f0f0f6dcb71b61c6bc6aa4009ee196459d70b81d68d93f3b86f87c6`.

### `cor-elementary-membership-chains-and-collapse-compatibility`

- Rejection: the hypotheses allegedly permit an empty stage, so F1's nonempty-structure premise was said to be missing.
- Decision: `false_positive` against guard hash `d676aa1387606d8c4d74873f36fa04121c9fb1da7ff51f468c561abb49380a54`.
- Evidence: under `def-elementary-set-structure-embedding`, a structure and an elementary substructure both have nonempty carriers. The corollary assumes an elementary chain of actual membership structures, so every stage is nonempty by the declared convention; `lambda>0` separately ensures that there is a stage. The proposed `M_0=empty` object is therefore outside the hypotheses, and F1 applies exactly.
- Sources consulted: current corollary, `items/thm-elementary-ordinal-chain-union.md`, `items/thm-collapse-of-elementary-membership-submodels.md`, and the quoted `items/def-elementary-set-structure-embedding.md` interface. No external source was needed.
- Focused check: hashes recomputed; judge hash `78fba4dd...` matches. No file changed.

### `thm-bpi-equivalent-to-boolean-filter-extension`

- Rejection: F3's displayed statement only gives complement duality for ultrafilters/prime ideals, not the all-filter/all-ideal correspondence claimed in the fact row and used in step 2.1.
- Decision: `confirmed_nonfatal` against guard hash `ea1c8e22a84f292a5ab1ca095527681b34c60a255fe67f157516ab68a085387e`.
- Evidence: the citation row does overstate F3's displayed conclusion. However, the opened F3 proof explicitly establishes that `F -> {not f : f in F}` is an inclusion-preserving bijection from all Boolean filters to ideals and preserves properness. The same assertion follows immediately from complementation reversing order, De Morgan's law, and `not 1=0`. Step 2.1 is therefore correct with a one-line local derivation; no theorem claim or witness fails.
- Sources consulted: current theorem, `items/lem-generated-boolean-filter-and-ultrafilter-tests.md`, and `items/def-boolean-ideals-filters-and-primality.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `49f29c92...` matches. No file changed.

### `thm-stone-regular-open-boolean-completion`

- Rejection: F2's theorem statement does not say that the sets `[b]` form a clopen basis, although step 1.1 uses that property for order density.
- Decision: `confirmed_nonfatal` against guard hash `664cbf72b630bf640dd83067f98915f58f58fcaaac85f82ae27b957dea32d578`.
- Evidence: the fact-row paraphrase is broader than F2's displayed conclusion. However, F2's opened proof cites `def-stone-ultrafilter-space-and-clopens`, which defines the topology as all unions of the sets `[b]` and explicitly establishes that they form a clopen basis. This is in the declared transitive dependency interface, and the point/basic-neighborhood argument in step 1.1 is valid. The citation compression is nonfatal.
- Sources consulted: current theorem, `items/thm-stone-clopen-representation-under-bpi.md`, and `items/def-stone-ultrafilter-space-and-clopens.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `fcc4d16f...` matches. No file changed.

### `thm-order-continuous-homomorphisms-extend-to-boolean-completions`

- Rejection: F2's displayed theorem does not explicitly advertise the dense-supremum formula used in steps 7.1 and 9.1.
- Decision: `confirmed_nonfatal` against guard hash `1c0787187b1e61eab8db14a6b55095d7777f35e8a7eeb2fd8da48fdb1e4dee06`.
- Evidence: the fact row compresses a consequence proved inside F2. The opened F2 proof establishes exactly `c = sup{j(b): j(b)<=c}` for any order-dense embedding into a complete Boolean algebra: a positive remainder would contain another nonzero dense image element, contradicting the definition of the join. That elementary argument fully supports both uses. The citation locator is imprecise, but the theorem and its extension formula remain proved.
- Sources consulted: current theorem, `items/thm-stone-regular-open-boolean-completion.md`, and `items/def-complete-boolean-algebra-and-regular-open-sets.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `149b4171...` matches. No file changed.

### `def-countable-paracompactness-and-dowker-space`

- Rejection: the phrase “product characterization below” was treated as a promise that this definition item itself must contain the characterization and proof.
- Decision: `false_positive` against guard hash `96a3e9af40f7fe047578f031ff82f316a8766428734cf01654bad5776a73458c`.
- Evidence: “below” refers to the rendered A page. Its declared item order places `thm-countable-paracompactness-shrinking-criterion` and then `thm-dowker-product-characterization` immediately after this definition. The latter states and proves under AC that `X x [0,1]` is normal iff `X` is normal and countably paracompact. The orientation is non-load-bearing and the page promise is fulfilled.
- Sources consulted: current definition, `library/foundations/pcf-scales-and-zfc-dowker-spaces.md`, and `items/thm-dowker-product-characterization.md`. No external source was needed.
- Focused check: hashes recomputed; judge hash `e1a5eedf...` matches. No file changed.

### `lem-directed-progressive-products-have-club-continuous-chains`

- Rejection: F4 omits the exact-bound dependency's explicit upper side condition `kappa <= lambda` for the coordinate-cofinality conclusion.
- Decision: `confirmed_nonfatal` against guard hash `5c01d95f0dfebac60f636b8f53a67e3ba06d5fae58505fba36301b7f49b771de`.
- Evidence: the fact-row paraphrase is incomplete, but the theorem calls a cardinal eligible only when `kappa^{++} < lambda`; hence every eligible `kappa` automatically satisfies `kappa < lambda`. Step 4.1 additionally records `tau^+ <= kappa < kappa^{++} < lambda` immediately before invoking F4. The statement and each use therefore meet the dependency's exact hypotheses, leaving only a locally repairable citation omission.
- Sources consulted: current lemma and `items/lem-bounding-projections-give-exact-upper-bounds.md`. The opened dependency states the omitted upper bound exactly, so no external source was needed.
- Focused check: hashes recomputed; judge hash `5a719cf6...` matches. No file changed.

### `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain`

- Rejection: F3's displayed dependency interface states regularity below `aleph_omega`, while step 3.1 also uses the finite-index classification `kappa = aleph_j`.
- Decision: `confirmed_nonfatal` against guard hash `f4bb54fbf1b91f5c6f38e8f8b078fc44ce9d41141592962cf88ac3c899aecbf6`.
- Evidence: the opened dependency proves exactly this classification in its step 3.1: an infinite cardinal below `aleph_omega` is `aleph_alpha`, and strict monotonicity forces `alpha in omega`. Thus an uncountable regular `kappa < aleph_omega` is `aleph_j` for positive finite `j`, giving `kappa^{++}=aleph_{j+2}` and only finitely many excluded coordinates. The local fact row cites a proved internal clause rather than the dependency's displayed statement, an immediate citation-locator gap with no false claim.
- Sources consulted: current lemma and `items/thm-regularity-of-the-alephs.md`, including its fact L10 and proof step 3.1. No external source was needed because the dependency contains the exact derivation.
- Focused check: hashes recomputed; judge hash `217ab22a...` matches. No file changed.

### `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails`

- Rejection: step 3.1's internal point `u` was alleged not to satisfy F1's premise `u in M cap P_B` when an initial coordinate is a top `aleph_n`.
- Decision: `false_positive` against guard hash `6b4e9bc0cc665d2ef07abcb61c57b94697e26171a4b1ad4a606c730decd4da53`.
- Evidence: the rejection reads `P_B` as a strict product, but the opened definition is `P_B=prod_{n in B}(aleph_n+1)` and explicitly allows `u(n)=aleph_n`. Since `X_R(B)` is a subspace of `P_B`, `u in M cap X` implies `u in M cap P_B`, including points with initial top coordinates. F1 applies exactly at each tail coordinate outside `S`, where step 3.1 separately verifies `u(n)<aleph_n`.
- Sources consulted: current lemma, `items/lem-rudin-internal-hull-tail-domination.md`, `items/def-rudin-ordinal-box-space.md`, and `items/def-rudin-ambient-ordinal-box-space.md`. No external source was needed because the definitions decide the premise.
- Focused check: hashes recomputed; judge hash `e4835b8c...` matches. No file changed.

### `thm-kojman-shelah-space-weight-and-character`

- Rejection: F1's pointwise uniform finite-aleph cofinality bound was alleged not to follow from the scale-subspace definition.
- Decision: `false_positive` against guard hash `7f3b20e474a1d68c63724a40a0268a1756860f66455bbe9a0116c41d8de45615`.
- Evidence: the definition makes `X` a subset of `X_R(B)`. The opened Rudin-space definition says exactly that for each point there is one finite `m` such that every coordinate cofinality lies strictly between `omega` and `aleph_m`; the witness may depend on the point, exactly as step 1.1 assumes. The scale-subspace definition also explicitly says admissible finite modifications preserve `X`. Thus F1 and the “every point” character bound are licensed verbatim through the named definition.
- Sources consulted: current theorem, `items/def-kojman-shelah-scale-subspace.md`, and `items/def-rudin-ordinal-box-space.md`. No external source was needed because the defining interfaces settle the objection.
- Focused check: hashes recomputed; judge hash `24f91780...` matches. No file changed.

### `lem-rudin-disjoint-box-refinement`

- Rejection: step 3.1 was challenged on the case `0 in B`, where the top coordinate would have cofinality only `omega`.
- Decision: `false_positive` against guard hash `1c1c17f340d7b8faf8602703144ad9465c8f170ea0f012a46eea571bf4ec60e5`.
- Evidence: the declared Rudin-space definition fixes `B` as an infinite subset of `omega minus {0,1}`. Thus every `n in B` is at least 2, and F3 gives `cf(t(n))=aleph_n>omega`; consequently `t in Y_B` and `(0,t]_Y=Y_B` is a valid nonempty initial cell. The proposed boundary case is outside the hypotheses.
- Sources consulted: current lemma, `items/def-rudin-ambient-ordinal-box-space.md`, and `items/def-rudin-ordinal-box-space.md`. No external source was needed because the index restriction is explicit.
- Focused check: hashes recomputed; judge hash `3ca34374...` matches. No file changed.

### `lem-rudin-bounded-cofinality-hull-transfer`

- Rejection: proof step 1.2 selected one regular successor `theta`, while the statement promises the construction for every sufficiently large regular `theta`.
- Decision: `confirmed_fatal` (`logic`) against guard hash `e5e44c2bb95ba6638c67dad45d9b41080fa1216ddf823d0172ff583470d26d29`. The rejection ledger's `1d9dfaa1...` digest is the judge form, not the required guard form.
- Repair: step 1.2 now fixes one ordinal rank threshold `rho` and then an arbitrary regular cardinal `theta>rho`. Regularity and `kappa<theta`, rather than successorhood, give the closure of `V_theta` under sets of at most `kappa` members used throughout the construction. This proves the advertised eventual universal quantifier, including regular limit cardinals.
- Sources consulted: current lemma and its hierarchy, regularity, and downward Löwenheim–Skolem dependencies. The issue is a quantifier mismatch resolved from the proof's own rank argument; no external source was needed.
- Focused check: precheck passes (`1 checked, 0 failing`); repaired guard hash is `0bbcadd61fcf28f5b704ac80b5bd92bc89847666b50697dddb930c9cbb02cf24`.
- Ledger/rejudge: defect row `phase-2-nine-step-25-7-g-004` appended. The first resumed handoff stopped before a judge call because both the adjudication and defect rows carried the judge-form hash rather than the required frozen guard hash. The exact hash records were corrected from the frozen `pre-step7`/Step-5 closure evidence to `e5e44c2bb95ba6638c67dad45d9b41080fa1216ddf823d0172ff583470d26d29`, and stale `F7` use metadata was removed from this item's batch and merged contracts. The guard and both contracts then passed, the immediate handoff completed, and the one Terra rejudge kept the repaired lemma at context hash `ef0da453a7d31a411b420779374d98bb698e28c801a87464a95fc305e43c6afc`.

### `lem-kojman-shelah-subspace-is-closed`

- Rejection: step 3.1's fallback `k=m` when the lower-cofinality union is empty can overlook a nonempty finite equality set `E` containing indices above `m`.
- Decision: `confirmed_nonfatal` against guard hash `74c54e8bd2396ed96caf11274b8a77332eb783f3d696dbaa2bec16f062e7c337`.
- Evidence: the preceding sentence already requires choosing `k>=m` above every member of both the lower-cofinality union and `E`; both sets are finite, so such a natural number always exists. Retaining that stated choice makes every tail coordinate avoid `E` and leaves steps 4–5 unchanged. The contradictory fallback is a one-line proof-step slip that a competent reader closes immediately, not a false theorem, invalid construction principle, or missing dependency.
- Sources consulted: current lemma and `items/lem-kojman-shelah-tail-supremum-closure.md`. No external source was needed for the finite maximum correction.
- Focused check: hashes recomputed; judge hash `0cc81a5f...` matches. No file changed under the fatal-only repair rule.

### `cor-unraveling-covers-give-determinacy`

- Rejection: step 1.1 was said not to establish that the source object is a nonempty pruned tree, because clopenness of the lifted payoff supplies only an open payoff.
- Decision: `false_positive` against guard hash `8016071cfdee608bd476e2ea4abcca6f6677dde41ec3324f080dc3a62570923f`.
- Evidence: by `def-game-covering-and-k-covering`, a game covering already has source and target nonempty trees with terminal taboos. The cited `thm-gale-stewart-open-determinacy` explicitly extends its pruned-tree result to terminal-taboo games by `lem-taboo-games-reduce-to-pruned-residual-games`. Thus the covering definition supplies the source taboo-tree hypothesis, and clopenness supplies the open-payoff hypothesis used in step 1.1; the proof does not assert that clopenness itself makes the tree pruned.
- Sources consulted: current corollary, `items/def-game-covering-and-k-covering.md`, `items/thm-gale-stewart-open-determinacy.md`, and `items/lem-taboo-games-reduce-to-pruned-residual-games.md`. No external source was needed because the declared interfaces settle the objection.
- Focused check: the exact adjudication is already present at line 94 of the append-only adjudication ledger with context hash `6e6345a...`. No content or contract changed.

### `lem-natural-number-game-strategies-have-continuum-many-plays`

- Rejection: F2 was said to inaccurately claim that the sequence-coding lemma supplies explicit natural-number codes for finite words.
- Decision: `confirmed_nonfatal` against guard hash `2bdd616900c46857d7e61c19092088062a91672b24d40ceff377f56796321e24`.
- Evidence: the dependency's displayed statement does not mention finite-word codes, but its proof step 2.1 explicitly constructs them by coding the length and recursively pairing the entries. The current lemma's step 1.1 also independently orders the relevant finite positions by finite strata and obtains the needed enumeration, so its strategy-table bijection does not actually rely on the compressed F2 paraphrase. Step 2.1 then gives a two-sided coding of compatible plays by the opponent's moves, including the initial-coordinate distinction for players I and II. The claim is correct; only the citation locator is imprecise.
- Sources consulted: current lemma, `items/lem-cantor-and-baire-sequence-coding.md`, `items/def-gale-stewart-games-on-pruned-trees.md`, and `items/thm-schroder-bernstein.md`. No external source was needed because the cited dependency contains the exact finite-word construction.
- Focused check: current guard and judge hashes are `2bdd6169...` and `226c0c0a...`; the latter matches the rejection row. Precheck and both batch-16 and merged strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

### `lem-perfect-set-game-strategy-dichotomy`

- Rejection: F1 was said to supply neither countable finite-word codes nor a cylinder topology, leaving the barrier-history coding in step 3.1 unsupported.
- Decision: `confirmed_nonfatal` against guard hash `44a35192ca61ac1cb204657a00da67a65f167a84ac2d31ac3ceacc47a7b02449`.
- Evidence: the dependency's displayed statement omits those two phrases, but its proof step 2.1 explicitly codes finite words, and steps 1.1–1.2 identify the metric topology with cylinders and prove compactness. The present lemma also directly enumerates binary blocks in step 1.1, so iterating that elementary coding over a finite history proves the countability used in step 3.1. The barrier argument is valid: absence of a barrier recursively builds a strategy-consistent play with outcome `x`, and a fixed barrier uniquely reconstructs every later bit of at most one `x`. The least-code map is therefore an injection, including the empty-set case.
- Sources consulted: current lemma, `items/lem-cantor-and-baire-sequence-coding.md`, `items/def-cantor-sequence-space-for-descriptive-set-theory.md`, and `items/def-gale-stewart-games-on-pruned-trees.md`. No external source was needed because the complete local constructions settle the objection.
- Focused check: current guard and judge hashes are `44a35192...` and `053ea60d...`; the latter matches the rejection. Precheck and both strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

### `lem-sequence-spaces-continuously-inject-into-the-real-line`

- Rejection: F2's interface was said not to define cylinders or state that they are open, leaving the neighborhood used in step 1.1 unsupported.
- Decision: `confirmed_nonfatal` against guard hash `144ef74cf2c5845248426c8fde0e206871a346f83a3bba4a569626bcd4e8f088`.
- Evidence: the sequence-coding lemma's displayed statement gives the first-difference metric, and its proof step 1.1 proves exactly that this metric induces the cylinder topology; its direct Baire/Cantor definition dependencies explicitly make those cylinders bases. Therefore `N_{b|n}` is the required open neighborhood. The geometric tail estimate proves continuity of `j`, while the stated homeomorphism `h` supplies a continuous injection and hence the composition. The mathematics is complete; only the fact row cites a proved internal clause rather than the displayed conclusion.
- Sources consulted: current lemma, `items/lem-cantor-and-baire-sequence-coding.md`, `items/def-baire-sequence-space.md`, `items/def-cantor-sequence-space-for-descriptive-set-theory.md`, `items/thm-cantor-set-ternary-description.md`, and `items/def-continuous-map-top.md`. No external source was needed because the local interfaces and displayed estimates settle the issue.
- Focused check: current guard and judge hashes are `144ef74c...` and `483a4daf...`; the latter matches the rejection. Precheck and both strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

### `lem-uncountable-analytic-splitting`

- Rejection: the title promised arbitrary second-countable metric spaces, while the statement and proof assume a Polish space and obtain their metric/dense set from that hypothesis.
- Decision: `confirmed_fatal` (`other`) against guard hash `bce276b7a31c34a18f16d1356d592b0a301d82ea09df99f93fa0c787f7b2a1fe`.
- Repair: narrowed only the title from “Uncountable splitting in a second-countable metric space” to “Uncountable splitting in a Polish space,” exactly matching the displayed statement and proof. The mathematical body and scope contract are unchanged.
- Evidence: the current proof correctly removes the union of all countable basic traces, chooses two distinct residual points, and refines disjoint small balls to basis neighborhoods whose intersections with `A` are uncountable. But no step states or proves the broader title's reduction from an arbitrary second-countable metric space. Since titles are part of the checked mathematical claim, the mismatch is material even though a related broader ZFC fact can be proved separately.
- Sources consulted: current lemma and `items/def-polish-space.md`; related local normal-form items were inspected to verify that no analytic or alternate ambient-space hypothesis was intended. No external source was needed for this title/statement identity defect.
- Focused check: repaired guard hash is `6102be0035a5a164939e609ed2c48a739e85235107daca8cab03550213ed9efc`; precheck, rendercheck, and both batch-16 and merged strict proof-contract checks pass. Defect row `phase-2-nine-step-25-7-g-005` was appended through `tools/defect-ledger.mjs`. The immediate engine handoff completed, and the one Terra rejudge kept the repaired item at context hash `457ed6afc2c3abd161620374b70f78fcfbc298b1ba9056a415377ac280cff7ce`.

### `thm-souslin-operation-preserves-lebesgue-measurability`

- Rejection: step 2.1 used Carathéodory splitting for an arbitrary Lebesgue-measurable `D`, while F6 alone only defines that splitting for Carathéodory-measurable sets.
- Decision: `confirmed_nonfatal` against guard hash `e840ff5a856334fb9fdb0dc8fc8ede67d4ed774feeb792eabc9910c092a529de`.
- Evidence: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` defines “Lebesgue measurable” by exactly the Carathéodory identity for Lebesgue outer measure. It is a direct dependency of F4 and is quoted as L1 in F4's complete proof, which then identifies Lebesgue measure with the restriction of that outer measure. Thus the arbitrary measurable `D` in step 2.1 satisfies F6's hypothesis. The fact row omits this definitional bridge, but a competent reader closes it immediately. The finite-box envelope argument avoids infinite subtraction, and the normalized-scheme defect set proves the Souslin result modulo a countable null union.
- Sources consulted: current theorem, `items/def-souslin-operation-on-set-schemes.md`, `items/cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls.md`, `items/thm-lebesgue-measure-is-a-complete-measure.md`, `items/def-lebesgue-measure-and-the-lebesgue-sigma-algebra.md`, `items/def-caratheodory-measurable-set.md`, and `items/thm-borel-sets-are-lebesgue-measurable.md`. No external source was needed because the exact defining identity and full envelope argument are present locally.
- Focused check: current guard and judge hashes are `e840ff5a...` and `58eed298...`; the latter matches the rejection. Precheck and both strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

### `thm-ad-implies-perfect-set-property-for-sequence-spaces`

- Rejection: F3's displayed dependency interface packages only the dyadic injection and compact-copy transfer, not the continuous map `pi` with `pi(b(x))=x` used in step 4 to transfer enumerations.
- Decision: `confirmed_nonfatal` against guard hash `5dfde2441cfb823e4ef75acbeee4e6b876c7d377aa230845e08348c6061f48cb`.
- Evidence: the dyadic-coding lemma's proof step 2.2 explicitly constructs the continuous left inverse `pi` and proves `pi(b(x))=x`; step 6.1 uses it to prove the packaged compact-copy transfer stated by that lemma. Moreover, step 4 needs only the inverse of the injective `b` on its range, which is uniquely defined in ZF even without continuity. The nonempty sets of enumeration codes are formed without a simultaneous choice, and F4 supplies exactly the countable selection of Baire codes under AD. All three ambient-space transfers and the empty cases are sound. The defect is a statement-level citation compression, not a missing map.
- Sources consulted: current theorem, `items/lem-dyadic-coding-coin-measure-and-lebesgue-transfer.md`, `items/lem-perfect-set-game-strategy-dichotomy.md`, `items/lem-cantor-and-baire-sequence-coding.md`, and `items/thm-ad-implies-countable-choice-for-baire-space.md`. No external source was needed because the full construction and left-inverse equation are proved locally.
- Focused check: current guard and judge hashes are `5dfde244...` and `72311dc8...`; the latter matches the rejection. Precheck and both strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

### `thm-ad-and-dc-imply-lebesgue-measurability`

- Rejection: step 1.1 invoked an explicit natural-number coding of each rational measure game, while F1's displayed statement only gives the conditional inner/outer bounds.
- Decision: `confirmed_nonfatal` against guard hash `5bce7e9fd4e308cba5c5ebe89ddd1bc5a5e4c3250a11df6d2809bb1e9e525257`.
- Evidence: F1's direct dependency `def-rational-determinacy-measure-game` explicitly enumerates rational moves, pairs their codes into naturals, assigns illegal-move losses, defines the payoff subset of `N^N`, and proves that a coded winning strategy restricts to a legal rational-game strategy. The comparison lemma repeats this as its own F1 and proves the two exact strategy bounds. Therefore AD applies to the actual coded payoff, and either possible winner contradicts a rational value strictly between the inner and outer envelopes. The rest of the proof correctly uses the dyadic left inverse and a definable countable union of translated unit-interval pieces. The target's citation should locate the coding through F1's definition dependency, but no mathematical hypothesis or strategy transfer is missing.
- Sources consulted: current theorem, `items/def-rational-determinacy-measure-game.md`, `items/lem-determinacy-measure-game-inner-outer-comparison.md`, `items/def-axiom-of-determinacy-for-natural-number-games.md`, `items/lem-dyadic-coding-coin-measure-and-lebesgue-transfer.md`, and the local rational-density/translation interfaces. No external source was needed because the complete coding and preservation argument are explicit locally.
- Focused check: current guard and judge hashes are `5bce7e9f...` and `75435210...`; the latter matches the rejection. Precheck and both strict proof-contract checks pass. No content, contract, impact, or judge metadata changed.

## Resume history

- On the earlier attempt, four repaired owned items still had no paid rejudge-cycle receipt or terminal-resolution ledger: `def-effective-interpretation-and-proof-translation`, `thm-lob-from-derivability-conditions`, `lem-finite-formula-witness-rank-bounds`, and `lem-rudin-bounded-cofinality-hull-transfer`. The first attempt on `def-effective-interpretation-and-proof-translation` had failed locally with `spawnSync /usr/bin/node EPERM` before a judge call.
- On this resume, `def-effective-interpretation-and-proof-translation` was handed off under request key `c71f3fa438bb95840f6c6dad`. Its once-only Terra repair rejudge completed and rejected the still-missing effective-signature and numerical-coding hypotheses. The final adjudicator repaired the queued definition and recorded a current terminal disposition `repaired` at `research/phase-2-nine-step-25-step7-terminal-resolutions.jsonl` line 4. The controller response is `{"ok":true}`; no duplicate cycle was requested.
- The next required handoff, `thm-lob-from-derivability-conditions`, was submitted under request key `b603627fb138dda69b807edf` and failed before any paid repair rejudge. Its response is `{"ok":false,"error":"tools/proof-contract.mjs exited 1"}`. Reproducing the exact focused check on both the batch-14 and merged contracts gives two errors: `citation-fact-missing` because contract citation `F3` is no longer a fact in the repaired item, and `step-entry-input-fact-missing` because contract step entry `d1` still names that removed fact. The handoff lock was released, and no non-initial repair cycle exists for this item.
- On the present resume, the batch contract already matched the licensed repair but the merged contract still contained the same two stale references. Only that item's merged entry was synchronized to the batch entry. Both focused strict contract checks and precheck passed, and the immediate handoff then completed with a Terra `keep:true` rejudge. At that checkpoint, seven newly routed exact judge rejections remained; all seven are adjudicated above.

## Closure checks

- The adjudication ledger contains decisions for all 29 unique exact `(id, model, context_sha256)` tuples owned by group g: 8 `false_positive`, 16 `confirmed_nonfatal`, and 5 `confirmed_fatal`. The seven rejections in the current generated group-g scope all have exact decisions. The Rudin preflight hash reconciliation is represented by a superseding physical JSONL row, so there are 30 physical owned-item rows but only 29 exact adjudication keys; it does not represent a second mathematical decision or a second judge cycle.
- The five fatal repairs have defect rows `phase-2-nine-step-25-7-g-001` through `phase-2-nine-step-25-7-g-005`. The four ordinary repaired items completed their immediate handoffs with Terra `keep:true` receipts; the definition repair exhausted its one Terra rejudge and has an engine-recorded final-adjudicator terminal disposition `repaired`. No further repair or judge call is owed by group g.
- The full Step-7 guard was run at `2026-09-10T18:54:06+10:00`. Its group-g slice has zero errors and zero warnings. The whole-run command exits 1 solely for the out-of-group item `fs-collapse-solves-all-extension-problems`, whose changed text is currently paired with a `false_positive` decision; group g did not edit or disposition that item.
- `node tools/step7-scope.mjs check --run phase-2-nine-step-25` was run and exits 1 solely because alert `s8a-88255d9a84fb7df7224ef579` on out-of-group page `tor-flatness-and-global-dimension-examples` lacks its owning-group disposition. Group g had no Step-6 warning or incoming cross-group alert requiring a decision.
- The final defect-ledger closure check examined 93 run rows and exits 1 solely because the out-of-group fatal decision on `thm-conditional-monotone-convergence` has no defect row. All five group-g fatal decisions have their matching rows and exact repaired digests.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25` completed successfully. The refreshed batch 14, 15, and 16 inputs are each `[]`; the unified ledger lists every batch as reviewed, no unreviewed batch, seven run-wide edges, and no edge involving an owned batch or page.

Group g's item work and engine-managed handoffs are complete. The three remaining whole-run failures above belong to other groups and remain for the engine's routing and closure gates.

## Step 7 preflight repair — round 1

Gate: `proof-contract`, with the overlapping `citation-fidelity` diagnostic. The repair envelope assigns four run-owned batch-14 items and contains no live rejection tuple and no retained fatal repair licence. Accordingly, this pass changes documentary proof-contract quotations only; no item, proof, dependency, impact, verification, adjudication, or judge record is changed.

### `lem-interpretation-translates-finite-derivations`

- Finding and decision: contract citation F1 retained pre-repair wording from `def-effective-interpretation-and-proof-translation`. Replaced it in the batch-14 and merged contracts with the exact current first three paragraphs of that item's Definition, which state the domain/equivalence/function obligations, term-graph translation, source-axiom requirement, and free-variable guard used by steps 1.1 and 3.1.
- Evidence: `items/lem-interpretation-translates-finite-derivations.md`, Facts F1 and proof steps 1.1/3.1; `items/def-effective-interpretation-and-proof-translation.md`, Definition paragraphs 1–3. Declared supplier: `def-effective-interpretation-and-proof-translation`.
- Validation: selected strict proof-contract checks pass in both contract files; batch-14 citation fidelity finds the replacement verbatim. Unresolved obligations: none. Next action: review the next assigned citation record.

### `thm-second-incompleteness-for-standard-provability`

- Finding and decision: contract citation F2 retained the earlier compressed Löb statement. Replaced it in both contracts with the exact current Statement of `thm-lob-from-derivability-conditions`, including the internal unguarded fixed-point hypothesis and the predicate-identification qualification used by step 2.1 under the theorem's Given clause.
- Evidence: `items/thm-second-incompleteness-for-standard-provability.md`, Fact F2, Given clause, and proof step 2.1; `items/thm-lob-from-derivability-conditions.md`, Statement. Declared supplier: `thm-lob-from-derivability-conditions`; F3 continues to supply D1–D3.
- Validation: selected strict proof-contract checks pass in both contract files; batch-14 citation fidelity finds the replacement verbatim and reports no widening candidate. Unresolved obligations: none. Next action: review the next assigned citation record.

### `thm-explicit-definitions-give-conservative-extensions`

- Finding and decision: contract citation F1 retained pre-repair wording from the interpretation definition. Replaced it in both contracts with the exact current first three Definition paragraphs, which supply the full-domain interpretation obligations and translation conventions used in step 1.1. The conservativity argument and its finite-support interface are unchanged.
- Evidence: `items/thm-explicit-definitions-give-conservative-extensions.md`, Fact F1 and proof step 1.1; `items/def-effective-interpretation-and-proof-translation.md`, Definition paragraphs 1–3. Declared supplier: `def-effective-interpretation-and-proof-translation`.
- Validation: selected strict proof-contract checks pass in both contract files; batch-14 citation fidelity finds the replacement verbatim. Unresolved obligations: none. Next action: review the final assigned citation record.

### `lem-zf-arithmetic-interpretation-and-effective-axioms`

- Finding and decision: contract citation F4 retained the same pre-repair interpretation wording. Replaced it in both contracts with the exact current first three Definition paragraphs, which include the domain, equality, arithmetic-operation graph, translated-axiom, and guard conventions invoked at step 1.2. No arithmetic claim or choice convention changed.
- Evidence: `items/lem-zf-arithmetic-interpretation-and-effective-axioms.md`, Fact F4 and proof step 1.2; `items/def-effective-interpretation-and-proof-translation.md`, Definition paragraphs 1–3. Declared supplier: `def-effective-interpretation-and-proof-translation`.
- Validation: selected strict proof-contract checks pass in both contract files; batch-14 citation fidelity finds the replacement verbatim. Unresolved obligations: none. Next action: run the saved-file scoped checks and return the preflight repair result to the engine.

### Targeted checks

- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-14.proof-contracts.json --strict --items lem-interpretation-translates-finite-derivations,thm-second-incompleteness-for-standard-provability,thm-explicit-definitions-give-conservative-extensions,lem-zf-arithmetic-interpretation-and-effective-axioms` — 0 errors, 0 warnings, 4/4 checked.
- The same selected strict command against `research/phase-2-nine-step-25-proof-contracts.json` — 0 errors, 0 warnings, 4/4 checked.
- `node tools/citation-fidelity.mjs research/phase-2-nine-step-25-batch-14.proof-contracts.json --fail-on-missing-quote` — 127 citations over 56 items; no missing quotation and no widening candidate.
- Both JSON documents parse as version 1 with complete scope/contract counts (56/56 and 692/692), and the four affected entries are byte-equivalent after JSON serialization. No dependency changed, so the frontier-ledger refresh protocol was not triggered.
- Judge-ledger verification over all 215 group-g items found 30 physical rejection rows: 29 have exact adjudication matches, the remaining repair-rejudge row has a later terminal disposition `repaired`, and zero rejection rows postdate the authoritative preflight envelope. Thus the envelope's empty `live_tuples` remains current for this dispatch.

Blocker: none for the four assigned proof-contract findings. Other gate failures and other groups' assigned records remain outside this envelope and were not modified.
