# Step 3b author checkpoint — Suslin trees, lines, algebras, and independence

Run: `phase-2-next-18`  
Owned A page: `suslin-trees-lines-algebras-and-independence`  
Owned B page: `suslin-trees-lines-algebras-and-independence-examples`  
Batch: 6

## Verified starting state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the Step-3b brief, the live batch-6 manifest and coverage, the SET-17 design at `research/plan-set-theory-completion-track.md:640-659`, the correction at `research/phase-2-set-blocker-resolution-2026-09-08.md:145-170`, all current Step-1 decisions for this pair, and the Step-3a review and owner decision.
- The owner-added items `thm-every-countable-linear-order-embeds-in-the-rationals` and `thm-special-trees-are-exactly-rationally-special` are present in the manifest and coverage, have owner readiness records, and precede their consumers.
- No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- At dispatch start none of the 29 owned item files or either page existed. The shared batch-6 dependency input was `[]`; the shared batch-6 proof-contract file did not yet exist.
- Full local text was read for Monk, *Set theory following Jech*, Lemma 9.12 and Theorems 9.13-9.18 (printed pp.65-75), Lemma 9.36 and Proposition 9.37 (pp.86-87), Theorem 15.38 and Lemmas 15.44-15.45 (pp.273-278), and Theorems 16.35, 16.37-16.38 (pp.331-333), from `/tmp/pml-monk-jech.pdf` / `/tmp/pml-monk-jech.txt`. Karagila, *Forcing & Symmetric Extensions*, Theorems 4.22-4.25 (printed pp.24-25) and Proposition 7.4 / the MA iteration opening (pp.34-37) were also read from `/tmp/pml-forcing-2023.pdf` / `/tmp/pml-forcing-2023.txt`.

## Scaffold audit findings retained in the proofs

- The normal-refinement proof must use the history-node/Hausdorff repair before taking suitable levels; immediate splitting cannot be assumed in the starting Suslin tree. The authored lemma will make the lift assertion precise for forbidden chains and antichains.
- The branch order needs *countably infinite successor sets ordered densely without endpoints*. Merely assigning arbitrary countable successor orders would not prove density or absence of endpoints.
- Completion is used with Monk's exact completion clauses (preservation of existing suprema and generation by old suprema). Unqualified uniqueness among arbitrary complete extensions would be false/ambiguous.
- The line-to-tree construction obtains countable levels from ccc and height `omega_1` from its `omega_1`-sized carrier plus AC; it does not silently identify construction stage with tree height.
- The Suslin-algebra limit levels use the exact diagonal distributive law. Nonzero diagonal meets, rather than arbitrary choice functions, form the limit antichain.
- The countable-tree forcing closure proof must add a top level when the union height is limit. The named-antichain argument must first decide a ground node comparable with each current node, then seal the resulting actual maximal antichain.
- The two consistency corollaries will retain their actual strength: the MA reduction gives `SH + not CH`, and the constructible reduction gives `GCH + not SH`. Those strengthened conclusions are required by the false-statement item; bare consistency of SH and bare consistency of not-SH would not refute equivalence with CH.
- No owned proof uses the Recorded Kurepa orientation item, and no Foundations dependency path reaches the Recorded-results page.

## Item checkpoints

Items are authored below in manifest prerequisite order. Each checkpoint records the completed claim, exact source range, direct dependencies examined, decision receipt, focused checks, and any remaining gap.

### 1. `def-suslin-hypothesis-and-suslin-algebra` — complete

- Claim/conventions: SH is nonexistence of a strong published-convention Suslin line; a Suslin algebra is a nontrivial complete atomless ccc Boolean algebra satisfying the displayed diagonal countable-distributivity law.
- Source: Monk, Sections 9 and 15, especially printed pp.67 and 278.
- Examined direct dependencies: `def-suslin-line-order-interface`, `def-complete-boolean-algebra-and-regular-open-sets`, `def-poset-ccc-and-knaster-property`, `def-axiom-of-choice`.
- Boundary/choice evidence: empty Boolean bounds and nonempty omega indices are explicit; `0 != 1` excludes the degenerate algebra; the definition makes no selection, while its AC dependency records the page's later simultaneous choices.
- Checks: focused precheck (definition skipped, clean), rendercheck, and strict proof-contract check passed. Step-3b decision recorded `accept`, confidence 1, hash-bound to all four dependencies.
- Open gap: none. Next action: author `lem-suslin-tree-normal-splitting-refinement` from Monk Lemma 9.12 with the history-node correction.

### 2. `lem-suslin-tree-normal-splitting-refinement` — complete, repaired

- Claim/conventions: every Suslin tree yields a normal, in fact infinitely splitting, Suslin derived tree; “lift” is made precise as a transformation of any hypothetical uncountable branch/antichain back to the original tree.
- Source: Monk Lemma 9.12, complete proof, printed pp.65-68.
- Examined direct dependencies: `def-aronszajn-suslin-and-special-tree`, `def-normal-splitting-set-theoretic-tree`, `lem-tree-predecessors-and-common-extensions`, `thm-countable-union-of-countable`, `def-axiom-of-choice`.
- Repair: the authored proof prunes uncountable cones, takes cofinal branching points, inserts history nodes to remove limit ambiguity, then thins to limit levels and a cofinal root cone. This corrects the scaffold risk that arbitrary thinning could assume the desired splitting/Hausdorff properties prematurely.
- Boundary/choice evidence: roots, singleton degeneration, genuine limit ambiguity, cofinal endpoints, and every simultaneous selection are handled at steps 1.1-6.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `lem-suslin-tree-branch-first-difference-order`, using dense no-endpoint orders on the countably infinite successor sets.

### 3. `lem-suslin-tree-branch-first-difference-order` — complete, repaired

- Claim/conventions: on maximal branches of the infinitely splitting normal refinement, rational dense no-endpoint orders on the successor sets induce a dense no-endpoint ccc linear order, and every nonempty open interval is nonseparable.
- Source: Monk Theorem 9.13 and its complete proof, printed pp. 68-69.
- Examined direct dependencies: `lem-suslin-tree-normal-splitting-refinement`, `lem-normal-set-theoretic-tree-sequence-representation`, `lem-tree-predecessors-and-common-extensions`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-countable-union-of-countable`, `def-axiom-of-choice`, `thm-zorn`.
- Repair: the scaffold's unspecified countable successor orders were strengthened to transported copies of the dense no-endpoint rational order. The omitted Zorn supplier was added to the item and shared manifest, with its chain-upper-bound hypothesis checked for partial branches. The proof derives countable limit branch length, first-difference linearity, ccc by an uncountable tree-antichain extraction, and nonseparability in every interval by bounding a proposed countable dense set below one height.
- Boundary/choice evidence: nonemptiness, singleton degeneration, interval endpoints, the no-endpoint construction, and all simultaneous maximal-branch/local-order choices are explicit at steps 1.1-6.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `lem-linear-order-completion-existence-uniqueness-and-density` from Monk's exact clauses C1-C4.

### 4. `lem-linear-order-completion-existence-uniqueness-and-density` — complete, repaired

- Claim/conventions: completion means exactly C1-C4: literal old-order inclusion, complete bounds (including empty families), generation by old suprema, and preservation of old suprema. Such completions exist and are uniquely isomorphic over the old order. For a dense no-endpoint old order, endpoint deletion leaves a dense, no-endpoint, boundedly complete order; interval ccc and absence of separable nonempty intervals transfer under their stated hypotheses.
- Source: Monk Theorems 9.14-9.15 and Corollary 9.16, complete proofs, printed pp. 69-72.
- Examined direct dependencies: `def-partial-order`, `def-interval`, `def-dense-top`, `def-separable-space`, `def-countable`, `def-axiom-of-choice`.
- Repair: unqualified uniqueness was replaced by uniqueness among exact C1-C4 completions. The proof constructs closed lower cuts, includes empty and singleton cases, proves uniqueness by lower traces, derives old-order density, and proves the ccc and nowhere-separable transfers independently before deleting endpoints.
- Boundary/choice evidence: empty cut families, singleton principal cuts, degenerate orders, both possible global endpoints, bounded suprema after deletion, and every interval-selection use of AC are explicit at steps 1.1-7.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: compose `thm-suslin-tree-implies-suslin-line` from the three completed local suppliers.

### 5. `thm-suslin-tree-implies-suslin-line` — complete

- Claim/conventions: in ZFC, a Suslin tree produces a Suslin line satisfying every clause of the strong published interface.
- Source: Monk Lemma 9.12 through Corollary 9.16, printed pp. 65-72.
- Examined direct dependencies: `def-suslin-line-order-interface`, `lem-suslin-tree-normal-splitting-refinement`, `lem-suslin-tree-branch-first-difference-order`, `lem-linear-order-completion-existence-uniqueness-and-density`, `def-axiom-of-choice`.
- Argument: normalize and infinitely split the tree, order its maximal branches, take the exact completion, and remove possible global endpoints. Local nonseparability implies the required global nonseparability, and all strong-interface clauses are checked explicitly.
- Boundary/choice evidence: nonempty output, singleton exclusion, endpoint deletion, bounded completeness, and propagation of every upstream AC use are explicit at steps 1.1-3.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `accept`, confidence 1.
- Open gap: none. Next action: author `lem-suslin-line-nowhere-separable-quotient` from Monk Theorem 9.17.

### 6. `lem-suslin-line-nowhere-separable-quotient` — complete, repaired

- Claim/conventions: separable closed intervals define a convex equivalence relation with separable classes; the quotient is dense, ccc, and nowhere separable. Removing possible quotient endpoints, exactly completing, and removing possible completion endpoints gives the required dense no-endpoint boundedly complete line.
- Source: Monk Theorem 9.17 and its complete proof, printed pp. 72-74.
- Examined direct dependencies: `def-suslin-line-order-interface`, `lem-linear-order-completion-existence-uniqueness-and-density`, `thm-countable-union-of-countable`, `def-axiom-of-choice`, `thm-zorn`.
- Repair: the scaffold omitted the Zorn supplier required for maximal disjoint interval families; it is now declared in the item and shared manifest and its chain-union hypothesis is checked. The proof also deletes possible quotient endpoints before invoking the endpointless form of the completion-transfer lemma.
- Boundary/choice evidence: one- and two-point classes, singleton quotient, both possible quotient and completion endpoints, nonempty interval witnesses, countable unions, maximality, and representative choices are explicit at steps 1.1-5.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `lem-nowhere-separable-suslin-line-nested-interval-tree`.

### 7. `lem-nowhere-separable-suslin-line-nested-interval-tree` — complete, repaired

- Claim/conventions: an endpointless dense ccc line with no separable nonempty interval yields, by reverse nesting of recursively selected closed intervals, a Suslin tree on carrier `omega_1`.
- Source: Monk Theorem 9.18 and its complete proof, printed pp. 74-75.
- Examined direct dependencies: `lem-suslin-line-nowhere-separable-quotient`, `def-set-theoretic-tree-and-levels`, `def-aronszajn-suslin-and-special-tree`, `def-axiom-of-choice`, `thm-transfinite-recursion`, `thm-countable-union-of-countable`.
- Repair: the manifest omitted both the recursion theorem and the countable-union theorem. Both are now declared. The proof does not identify recursion index with tree height: it first proves the tree relation, excludes uncountable chains and antichains, gets countable levels, and only then derives height exactly `omega_1` from carrier size. It separately rules out countable cofinal branches by bounding their node heights.
- Boundary/choice evidence: the root, strict nondegenerate endpoints, every stage's nonempty candidate set, countable/uncountable branch alternatives, and the exact recursive choice are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: compose `thm-suslin-line-implies-suslin-tree`.

### 8. `thm-suslin-line-implies-suslin-tree` — complete

- Claim/conventions: in ZFC, every Suslin line yields a Suslin tree.
- Source: Monk Theorems 9.17-9.18, printed pp. 72-75.
- Examined direct dependencies: `lem-suslin-line-nowhere-separable-quotient`, `lem-nowhere-separable-suslin-line-nested-interval-tree`, `def-axiom-of-choice`.
- Argument: apply the completed quotient/completion reduction, then the completed nested-interval construction. The proof repeats the exact tree checklist and does not use the earlier Recorded equivalence.
- Boundary/choice evidence: nonempty strengthened line, endpoint deletion, `omega_1` height, singleton exclusion, and inherited AC uses are explicit at steps 1.1-2.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `accept`, confidence 1.
- Open gap: none. Next action: audit and author `lem-suslin-tree-forcing-is-countably-distributive`.

### 9. `lem-suslin-tree-forcing-is-countably-distributive` — complete, repaired

- Claim/conventions: a normal Suslin tree in reverse order is ccc and `aleph_1`-distributive, and its forcing adds no new `omega`-sequences of ordinals.
- Sources: Monk Proposition 15.43 and Lemma 15.44, printed pp. 277-278; Karagila Theorems 4.16 and 4.22, printed pp. 22 and 24.
- Examined direct dependencies: `def-kappa-closure-distributivity-and-chain-condition`, `def-dense-open-sets-and-model-generic-filters`, `def-normal-splitting-set-theoretic-tree`, `def-aronszajn-suslin-and-special-tree`, `lem-tree-predecessors-and-common-extensions`, `def-axiom-of-choice`, `thm-zorn`, `thm-countable-subsets-of-omega-one-are-bounded`, `cor-countable-choice-and-omega-one-cofinality`, `thm-closure-distributivity-and-no-short-sequences`, `thm-forcing-preserves-ordinals`.
- Repair: the scaffold omitted the maximal-antichain, ordinal-boundedness, regularity, forcing-semantics, and ordinal-preservation suppliers. All are now declared. The proof derives a tail contained in each dense open set, obtains a common normal extension above countably many tail bounds, then invokes the precise no-short-sequences theorem on the separative quotient and ordinal preservation.
- Boundary/choice evidence: root/nonempty forcing, height-zero start, finite and countable dense families, strict level bounds, Zorn chain unions, simultaneous antichain choices, and semantic ordinal scope are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `thm-suslin-tree-regular-open-algebra-is-suslin`.

### 10. `thm-suslin-tree-regular-open-algebra-is-suslin` — complete

- Claim/conventions: the regular-open completion of the reverse forcing order of a normal splitting Suslin tree is a nontrivial complete atomless ccc Boolean algebra satisfying the exact diagonal countable-distributivity law.
- Source: Monk Lemma 15.45 and its complete proof, printed p. 278.
- Examined direct dependencies: `def-suslin-hypothesis-and-suslin-algebra`, `lem-suslin-tree-forcing-is-countably-distributive`, `thm-forcing-preorders-have-regular-open-completions`, `thm-regular-open-sets-form-a-complete-boolean-algebra`, `def-axiom-of-choice`.
- Argument: splitting produces two disjoint nonzero regular-open pieces below every nonzero element; a Boolean antichain pulls back to a forcing antichain; the displayed diagonal identity is proved in both directions by building dense open decision sets and using the tree's countable distributivity. The fixed-meet/arbitrary-join identity used in that argument is derived locally.
- Boundary/choice evidence: Boolean zero/one, the one-element algebra, empty bounds, nonzero representative choices, and both equality directions are explicit at steps 1.1-3.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `accept`, confidence 1.
- Open gap: none. Next action: author `lem-suslin-algebra-refining-antichain-tree`.

### 11. `lem-suslin-algebra-refining-antichain-tree` — complete, repaired

- Claim/conventions: every Suslin algebra has a continuous `omega_1`-sequence of countable maximal Boolean antichains, binary-split at successors and consisting exactly of positive coherent branch meets at nonzero limits; the tagged reverse Boolean order is a normal splitting Suslin tree.
- Sources: Jech, *Set Theory*, Definition 30.19 and converse assertion, printed p. 594; Bukovsky, “Generic extensions of models of ZFC,” Lemma 9 proof, printed pp. 356-357. The latter's complete relevant passage at PDF lines 445-467 verifies the strong-refinement/common-refinement construction; the authored proof supplies the full tree verification omitted there.
- Examined direct dependencies: `def-suslin-hypothesis-and-suslin-algebra`, `def-normal-splitting-set-theoretic-tree`, `def-aronszajn-suslin-and-special-tree`, `thm-transfinite-recursion`, `thm-countable-union-of-countable`, `def-axiom-of-choice`.
- Repair: removed the unused Boolean-prime-ideal supplier and the scaffold instruction to extend a limit antichain. Exact diagonal distributivity already shows that the positive branch meets join to one, hence form a maximal antichain. Added the missing recursion and exact tree-interface suppliers.
- Boundary/choice evidence: root one, exclusion of zero meets, nontrivial binary splitting, nonempty limit levels, all higher-level extensions, unique limit nodes, and simultaneous split/enumeration choices are explicit at steps 1.1-7.1. A hypothetical cofinal branch yields the displayed uncountable disjoint family of successive differences.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: compose `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras` from the four completed directions without using the Recorded remark.

### 12. `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras` — complete, repaired

- Claim/conventions: existence of a Suslin tree, strong Suslin line, and nontrivial Suslin algebra are pairwise equivalent in ZFC; negating the equivalences identifies SH with nonexistence of a tree or algebra.
- Sources: Monk Theorems 9.13-9.18 and Lemma 15.45, printed pp. 68-75 and 278; Jech, *Set Theory*, Definition 30.19 and the converse tree/algebra assertion, printed p. 594.
- Examined direct dependencies: `def-suslin-hypothesis-and-suslin-algebra`, `lem-suslin-tree-normal-splitting-refinement`, `thm-suslin-tree-implies-suslin-line`, `thm-suslin-line-implies-suslin-tree`, `thm-suslin-tree-regular-open-algebra-is-suslin`, `lem-suslin-algebra-refining-antichain-tree`, `def-axiom-of-choice`.
- Repair: the regular-open supplier accepts a normal splitting tree, so the missing direct normalization dependency was added. Both directions of both biconditionals are explicit; the proof does not cite or consume `rem-suslin-hypothesis-independent` or any other Recorded result.
- Boundary/choice evidence: the strong nonempty/no-endpoint line, height-`omega_1` tree, nontrivial algebra, both directions of each equivalence, and the propagated AC uses are item-specifically recorded at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `cor-suslin-tree-yields-nonproductive-ccc` from normalization and the published square-antichain theorem.

### 13. `cor-suslin-tree-yields-nonproductive-ccc` — complete, repaired

- Claim/conventions: from any Suslin tree, normalize to a normal splitting one; its reverse forcing order is ccc while its explicitly coordinatewise square contains an uncountable antichain.
- Source: Monk Proposition 9.34, printed pp. 86-87, only for the analogous sibling-selection pattern; the product theorem is the self-contained published local supplier `thm-splitting-suslin-tree-poset-square-not-ccc`.
- Examined direct dependencies: `lem-suslin-tree-normal-splitting-refinement`, `thm-splitting-suslin-tree-poset-square-not-ccc`, `def-axiom-of-choice`.
- Repair: clarified the scaffold source metadata so it does not claim that Monk Proposition 9.34 states the product result. The published supplier's locator mismatch is reported separately; its complete local proof is sound and sufficient.
- Boundary/choice evidence: height `omega_1` excludes empty/singleton degeneracy; the product is the coordinatewise two-factor product; AC is only propagated through the checked suppliers.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `thm-ma-aleph-one-eliminates-suslin-trees`.

### 14. `thm-ma-aleph-one-eliminates-suslin-trees` — complete, repaired

- Claim/conventions: under `MA(aleph_1)`, the nonempty ccc finite-specialization forcing for a hypothetical Suslin tree has at most `aleph_1` node-domain dense sets; their meeting filter yields a total specialization, whose countable antichain fibers contradict the tree's exact size `aleph_1`.
- Sources: Karagila Proposition 7.4, complete proof, printed p. 35; Monk Theorem 16.38, complete specialization proof, printed p. 332.
- Examined direct dependencies: `def-martins-axiom`, `def-finite-aronszajn-specialization-poset`, `thm-aronszajn-specialization-poset-ccc`, `lem-specialization-dense-domains-and-union`, `def-aronszajn-suslin-and-special-tree`, `thm-countable-union-of-countable`, `cor-cardinal-absorption`, `thm-schroder-bernstein`, `def-axiom-of-choice`.
- Repair: the scaffold silently treated an `omega_1`-tree as having exactly `aleph_1` nodes before applying MA to the node-indexed dense family, and did not directly supply the nonempty forcing interface. The proof now builds injections both ways using simultaneous level enumerations, cardinal absorption and Schroder-Bernstein, and explicitly checks nonemptiness, ccc, dense-family size and filter orientation.
- Boundary/choice evidence: nonempty levels and forcing, empty and singleton conditions, natural label zero, finite/countable degeneracy, all selected level representatives/enumerations, and the contradiction discharge are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `cor-ma-and-not-ch-implies-suslin-hypothesis` with the exact MA-scheme instantiation.

### 15. `cor-ma-and-not-ch-implies-suslin-hypothesis` — complete, repaired

- Claim/conventions: in ZFC, MA together with not-CH implies SH; the proof uses the set-sized definition of CH and the strict MA bound at the continuum.
- Sources: Karagila, Section 7, Definition 7.1 and Proposition 7.4, complete statements/proof, printed pp. 34-35; the exact CH and cardinal bridges are the published local suppliers listed below.
- Examined direct dependencies: `def-martins-axiom`, `rem-continuum-hypothesis`, `def-aleph-and-beth-hierarchies`, `lem-cardinality-of-a-well-orderable-set`, `lem-cardinal-arithmetic-basic-laws`, `thm-cardinal-power-set-and-cantor`, `thm-ma-aleph-one-eliminates-suslin-trees`, `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`, `def-axiom-of-choice`.
- Repair: the scaffold asserted without a supplier that not-CH puts `aleph_1` below the continuum. The authored proof negates the actual set formulation of CH, cardinalizes its strict intermediate witness under AC, proves `aleph_0 < |A| < 2^aleph_0`, and invokes the least-successor-cardinal property to derive `aleph_1 < 2^aleph_0`. It then instantiates exactly `MA(aleph_1)` and uses only the no-tree-to-SH direction of Kurepa equivalence.
- Boundary/choice evidence: the strict witness is nonempty and nondegenerate, equality with either endpoint is excluded, `aleph_1` is checked infinite before the MA instance, and AC is spent in cardinalizing the witness and propagated through the two tree suppliers at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `def-countable-normal-tree-end-extension-forcing`, including exact condition coding and end-extension order.

### 16. `def-countable-normal-tree-end-extension-forcing` — complete

- Claim/conventions: conditions are countable fixed-sequence normal trees of height `alpha_p+1` with a genuine top level and full omega splitting below it; stronger conditions agree literally on every old level and add only higher levels.
- Sources: Karagila Theorem 4.25, complete proof, printed p. 25; Monk's definition of special normal trees before Lemma 15.31 and Theorem 15.38, complete relevant passage, printed pp. 271-275 (`/tmp/pml-monk-jech.txt:19907-20090`).
- Examined direct dependencies: `def-normal-splitting-set-theoretic-tree`, `def-forcing-preorder-compatibility-and-filter`, `def-countable`, `def-axiom-of-choice`.
- Argument/well-definedness: nodes live in the fixed set of countable-ordinal sequences in omega, restrictions are literal, limit uniqueness follows by function extensionality, and exact old-level equality makes end extension an antisymmetric forcing order. The `(0,{empty function})` condition proves nonemptiness. The definition flags that a raw omega-union can lose the required top level.
- Boundary/choice evidence: empty, height zero, singleton, top-level and nontop splitting cases are explicit. Formation makes no choice; AC is retained for the next theorem's simultaneous enumerations and extensions.
- Checks: definition skipped by focused precheck as expected; rendercheck and strict proof-contract check passed. Step-3b decision recorded `accept`, confidence 1.
- Open gap: none. Next action: author `thm-countably-closed-forcing-adds-a-normal-suslin-tree`, proving the new-top fusion and exact name-sealing argument.

### 17. `thm-countably-closed-forcing-adds-a-normal-suslin-tree` — complete, repaired

- Claim/conventions: the fixed-coded end-extension forcing is `aleph_1`-closed, preserves `omega_1`, and internally forces its explicitly named generic union to be a normal omega-splitting Suslin tree; no generic over the universe is asserted.
- Sources: Karagila Theorem 4.25, complete proof, printed p. 25 (`/tmp/pml-forcing-2023.txt:1594-1624`); Monk's special-normal-tree definition, Lemmas 15.31-15.33 and Theorem 15.38, complete proofs, printed pp. 271-275 (`/tmp/pml-monk-jech.txt:19907-20118`).
- Examined direct dependencies: `def-countable-normal-tree-end-extension-forcing`, `lem-countable-tree-antichain-sealing`, `def-kappa-closure-distributivity-and-chain-condition`, `thm-closure-distributivity-and-no-short-sequences`, `cor-countable-choice-and-omega-one-cofinality`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-transfinite-recursion`, `thm-forcing-theorem`, `lem-forcing-monotonicity-density-and-decision`, `def-forcing-relation-for-atomic-formulas`, `thm-forcing-preserves-ordinals`, `thm-generic-extensions-satisfy-zf-and-zfc`, `thm-zorn`, `def-aronszajn-suslin-and-special-tree`, `lem-splitting-cofinal-branch-gives-antichain`, `def-axiom-of-choice`.
- Repair: the scaffold omitted the suppliers needed to instantiate closure at regular `aleph_1`, keep fusion heights and carriers countable, decide named nodes through the atomic forcing relation, transfer ZFC to the extension, and eliminate cofinal branches. The closure proof handles arbitrary countable ordinal lengths: an attained successor supremum gives an existing lower bound, while a limit union receives a branch-coded top. The antichain proof first decides an actual ground member comparable with each node, fuses the twice-countable decisions, proves the collected set is a maximal antichain, and only then seals it. The sealing top ensures all future end extensions preserve maximality.
- Boundary/choice evidence: zero-, one-, successor-, and nonzero-limit-length chains are separate; the lost-top limit case is repaired; every generic level stabilizes in one countable condition; and the exact AC uses are countable unions, recursive stage choices, Zorn in the ZFC extension, and the splitting-branch lemma.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `thm-every-countable-linear-order-embeds-in-the-rationals` by an explicit finite-constraint recursion.

### 18. `thm-every-countable-linear-order-embeds-in-the-rationals` — complete, repaired

- Claim/conventions: every at most countable linear order, including finite and empty orders, has a strict order embedding into the rationals.
- Source: Monk Lemma 9.36 and its complete proof, printed pp. 86-87 (`/tmp/pml-monk-jech.txt:5997-6011`).
- Examined direct dependencies: `def-partial-order`, `def-countable`, `def-injection-surjection-bijection`, `lem-countable-iff-surjection-from-n`, `thm-rationals-countable`, `thm-rat-ordered-field`, `thm-recursion`, `thm-induction-principle`, `thm-well-ordering-principle`.
- Repair: removed the unused countable-union supplier. The proof uses a surjection from the naturals with repetitions, so it covers nonempty finite orders under the library convention; it skips repeated points and handles all four combinations of finite lower and upper constraints. A fixed bijection with the rationals and least admissible index replace recurring rational choices, so the argument is choice-free.
- Boundary/choice evidence: the empty order, zero-stage partial map, singleton/repeated enumeration, both one-sided gaps, the two-sided gap and no-constraint gap are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `thm-special-trees-are-exactly-rationally-special` using Monk Proposition 9.37 with the blocker-resolution correction to its finite-support coding.

### 19. `thm-special-trees-are-exactly-rationally-special` — complete, repaired

- Claim/conventions: for every set-theoretic tree, not only an Aronszajn tree, being a countable union of antichains is equivalent in ZF to having a strictly increasing rational labeling; empty and singleton trees are included.
- Source: Monk Proposition 9.37 and its complete proof, printed pp. 86-87 (`/tmp/pml-monk-jech.txt:6012-6052`), together with the local correction discussion at `research/phase-2-set-blocker-resolution-2026-09-08.md:145-170`.
- Examined direct dependencies: `def-aronszajn-suslin-and-special-tree`, `def-partial-order`, `def-countable`, `lem-countable-iff-surjection-from-n`, `lem-subset-of-countable`, `thm-recursion`, `thm-induction-principle`, `thm-well-ordering-principle`, `thm-every-countable-linear-order-embeds-in-the-rationals`.
- Repair: added the omitted suppliers for lexicographic linearity and explicit countability of the finite-support code image. More importantly, the blocker-resolution note's claim that the first difference is at most `min(c(s),c(t))` is false (colors 0 below 1 can first differ at 1). The sufficient and correct bound is `p <= c(t)`: coordinate `c(t)` always differs, including when `c(t)<c(s)` because its antichain fiber cannot occur below `s`; predecessor inclusion then rules out the wrong first-difference orientation. This fills the omitted line in Monk's second case without adopting the false stronger bound.
- Boundary/choice evidence: rational-to-cover and cover-to-rational directions, empty/singleton trees, color zero, the all-zero code, code collisions on incomparable nodes, and choice-free least-index constructions are explicit at steps 1.1-3.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. The correction-note wording should be amended in serial reconciliation, but the authored theorem contains the valid argument. Next action: audit and author `thm-specializing-forcing-kills-a-suslin-tree`.

## Published-item concerns for owner reconciliation

- Confirmed citation-locator mismatch, high confidence: `thm-splitting-suslin-tree-poset-square-not-ccc` on A page `set-theoretic-trees-delta-systems-and-diamond`. Monk Proposition 9.34 actually states that a normal height-`omega_1` tree with an uncountable branch has an uncountable antichain (`/tmp/pml-monk-jech.txt:5940-5951`); it does not state the ccc-square theorem. The published item's mathematical proof is self-contained and appears sound, and its source label already says the split-pair product proof is local, so no new mathematical supplier is required. Repair strategy: replace the external locator with an exact source for the product fact if one is found, or explicitly label Proposition 9.34 only as an analogous sibling-selection argument rather than support for the theorem. This source defect does not block the sound local supplier.

## Open obligations

- Author all 29 owned items and two pages; create and validate item-specific batch-6 proof contracts.
- Preserve sibling batch-6 manifest, coverage, proof-contract and dependency rows.
- Run explicit-path precheck/rendercheck, content policy, boundary audit, strict proof-contract check, dependency/frontier checks, and pre-splice plan validation.
- Record every completed original item with `tools/step3-decisions.mjs` at confidence 1 only after its content and contract pass.

Next action: author `thm-specializing-forcing-kills-a-suslin-tree`.

### 20. `thm-specializing-forcing-kills-a-suslin-tree` — complete, repaired

- Claim/conventions: for a transitive ZFC ground and a ground Suslin tree, finite-specialization forcing is ccc, preserves all cardinals and cofinalities, and internally forces that the unchanged ground tree remains Aronszajn but is special and has an uncountable antichain. No generic over the universe is asserted.
- Source: Monk Lemma 16.37 and Theorem 16.38 with complete proofs, printed p. 332 (`/tmp/pml-monk-jech.txt:24754-24805`).
- Examined direct dependencies: `def-aronszajn-suslin-and-special-tree`, `def-finite-aronszajn-specialization-poset`, `thm-aronszajn-specialization-poset-ccc`, `lem-specialization-dense-domains-and-union`, `thm-chain-condition-preserves-cofinalities-and-cardinals`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-countable-union-of-countable`, `def-forcing-name-valuation-and-generic-extension`, `thm-check-name-evaluation-and-generic-reconstruction`, `lem-forcing-monotonicity-density-and-decision`, `thm-forcing-theorem`, `thm-generic-extensions-satisfy-zf-and-zfc`, `def-axiom-of-choice`.
- Repair: the scaffold's informal generic-union strategy omitted the canonical name calculation, the distinction between internal forcing and external generic existence, the argument that specialization prevents a new cofinal branch, and the proof that one fiber is actually uncountable. The authored proof supplies all four. If every fiber were countable, ZFC in the extension would make the tree countable, contradicting its cofinal height set in the preserved `omega_1`.
- Boundary/choice evidence: the empty greatest condition, singleton assignments, natural label zero, nonempty generic needed for check recovery, height-`omega_1` nondegeneracy, and the exact ground/extension uses of AC are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `thm-finite-support-iteration-kills-all-named-suslin-trees`, checking successor bookkeeping and limit preservation before using the final continuum computation.

### 21. `thm-finite-support-iteration-kills-all-named-suslin-trees` — complete, repaired

- Claim/conventions: in any supplied generic extension by the ZFC+GCH ground's `omega_2` finite-support ccc bookkeeping iteration, every hypothetical final Suslin tree has a bounded-stage canonical code whose finite-specialization order is later scheduled on the actual positive mixed branch. The resulting specialization persists, so the final model has no Suslin tree and satisfies SH. The equivalent forcing formulation retains the forcing theorem's external-generic qualification.
- Source: Karagila Theorem 7.10 and Lemmas 7.11-7.13 with complete relevant proofs, printed pp. 37-38 (`/tmp/pml-forcing-2023.txt:2267-2356`).
- Examined direct dependencies: `def-omega-two-ma-bookkeeping-iteration`, `lem-bounded-stage-capture-in-finite-support-iterations`, `thm-finite-support-iterations-preserve-ccc`, `thm-specializing-forcing-kills-a-suslin-tree`, `thm-chain-condition-preserves-cofinalities-and-cardinals`, `def-aronszajn-suslin-and-special-tree`, `lem-iteration-restrictions-and-complete-embeddings`, `thm-forcing-equivalence-and-boolean-completion`, `thm-forcing-theorem`, `thm-generic-extensions-satisfy-zf-and-zfc`, `thm-regularity-of-the-alephs`, `cor-cardinal-absorption`, `thm-schroder-bernstein`, `thm-countable-union-of-countable`, `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`, `def-axiom-of-choice`.
- Repair: the scaffold silently identified arbitrary final raw names with scheduled canonical names and omitted the cardinal coding, intermediate-Suslinity, positive mixture branch, top-adjunction, and exact SH bridges. The proof instead transports the tree to carrier `omega_1`, codes its relation by a subset of ground `omega_1`, captures that structure, proves it remains Suslin at all relevant intermediate stages under the final-Suslin contradiction hypothesis, and bounds its finite-function order by `aleph_1`. Successor factorization plus dense forcing equivalence removes the isomorphic presentation and redundant top before invoking the specialization theorem.
- Boundary/choice evidence: nonempty levels precede all level choices; the one-point negative branch is distinguished from the positive branch; finite conditions include empty/singleton graphs; fiber zero and possibly empty fibers are included; raw versus canonical codes and generic-existence qualifications are explicit at steps 1.1-6.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `cor-formal-consistency-of-suslin-hypothesis` from the certified MA reduction and the already completed implication to SH.

### 22. `cor-formal-consistency-of-suslin-hypothesis` — complete, repaired

- Claim/conventions: for the fixed certified proof predicates, external `Con(ZFC)` implies external `Con(ZFC+SH)`. Consistency means absence of a standard certified finite refutation. No arithmetic base is claimed to prove the implication, and no transitive model is extracted.
- Sources: the local formal-consistency suppliers, with the object-theory route sourced to Karagila Theorem 7.10 and Proposition 7.4, printed pp. 35-38 (`/tmp/pml-forcing-2023.txt:2146-2180,2267-2356`).
- Examined direct dependencies: `cor-formal-consistency-of-ma-and-not-ch`, `cor-ma-and-not-ch-implies-suslin-hypothesis`, `thm-formal-relative-consistency-from-verified-proof-reduction`, `def-arithmetic-provability-and-consistency`.
- Repair: the scaffold called the MA consistency leg a published verified reduction, but that supplier explicitly promises only an external fixed-finite-fragment metatheorem. The proof now gives the exact standard finite-proof splice from a ZFC+SH refutation to a ZFC+MA+not-CH refutation, applies the MA transfer only externally, and uses the verified-reduction theorem to state why no internal PA implication follows from the available data.
- Boundary/choice evidence: zero, one, and finitely many SH-axiom occurrences are separate; malformed codes are excluded by certified checking; the splice itself uses no choice; the fixed object proof spends only the AC already present in ZFC.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `cor-formal-consistency-of-not-suslin-hypothesis`, retaining the same external-versus-internal proof-reduction boundary.

### 23. `cor-formal-consistency-of-not-suslin-hypothesis` — complete, repaired

- Claim/conventions: for the fixed proof predicates, PA proves `Con(ZFC) -> Con(ZFC + not-SH)`, hence external consistency transfers as well. This is a syntactic proof reduction and does not extract a transitive model.
- Sources: the formal constructible-inner-model suppliers, together with Monk's Suslin-tree-to-line construction (Theorems 9.12-9.13, printed pp. 65-69) and the constructibility route to a Suslin tree (Theorem 15.42, printed p. 277); the complete relevant passages were checked in `/tmp/pml-monk-jech.txt`.
- Examined direct dependencies: `lem-finite-fragment-l-interpretation-with-gch`, `cor-v-equals-l-gives-a-suslin-tree`, `thm-suslin-tree-implies-suslin-line`, `thm-formal-relative-consistency-from-verified-proof-reduction`, `thm-constructible-inner-model-semantic-and-formal-schema`, `def-suslin-hypothesis-and-suslin-algebra`, `def-arithmetic-provability-and-consistency`, `def-axiom-of-choice`.
- Repair: the scaffold did not explicitly supply the formal `L`-interpretation bridge, the literal definition of not-SH, or the fixed proof-predicate interface. The proof first concatenates fixed object proofs to obtain `(not-SH)^L`, then extends the verified finite-fragment dispatcher by one decidable not-SH certificate tag and one constant proof block. The resulting primitive-recursive map sends every certified `ZFC + not-SH` refutation to a certified ZFC refutation, in the direction required by the verified-reduction theorem.
- Boundary/choice evidence: zero and repeated occurrences of the added axiom, malformed inputs, the strong-line endpoint convention, and object-level AC only inside `L` are explicit at steps 1.1-5.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit and author `thm-conditional-independence-of-suslin-hypothesis` as an external nonprovability consequence of the two completed consistency transfers.

### 24. `thm-conditional-independence-of-suslin-hypothesis` — complete, repaired

- Claim/conventions: externally, `Con(ZFC)` implies consistency of both ZFC+SH and ZFC+not-SH and therefore the absence of a certified ZFC proof of either side. The conclusion is conditional metamathematical independence, not an internal ZFC theorem and not a claim about which side is true.
- Source: the two completed formal-consistency corollaries; Monk Chapters 15-16 remain contextual background rather than a substitute for the proof-code argument.
- Examined direct dependencies: `cor-formal-consistency-of-suslin-hypothesis`, `cor-formal-consistency-of-not-suslin-hypothesis`, `def-arithmetic-provability-and-consistency`, `def-suslin-hypothesis-and-suslin-algebra`.
- Repair: the scaffold omitted the proof-predicate and SH-definition interfaces and could be read as internalizing both reductions. The proof retains the weaker external metatheory forced by the SH leg. A hypothetical ZFC proof of either sentence is viewed in the opposite extension, followed by exactly one use of that extension's added axiom and a fixed propositional contradiction block.
- Boundary/choice evidence: empty and malformed proof sequences, both one-added-axiom constructions, the shared strong-line convention, and the absence of any new Choice use are explicit at steps 1.1-3.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `ex-first-difference-order-on-a-binary-branching-tree` with all eight branch calculations and the finite failure of density/no-endpoints/nowhere separability.

### 25. `ex-first-difference-order-on-a-binary-branching-tree` — complete, repaired

- Claim/conventions: for `2^{<=3}` with binary successor order `0<1`, the eight terminal branches are `000<001<010<011<100<101<110<111`; their adjacent first-difference coordinates are `2,1,2,0,2,1,2`.
- Source: the completed general branch-order lemma, following Monk Theorem 9.13, printed pp. 68-69.
- Examined direct dependency: `lem-suslin-tree-branch-first-difference-order`.
- Repair: the scaffold did not distinguish local from height hypotheses. The adjacent gap `000<001` and endpoints `000,111` fail because the two-point local successor order is not dense and has endpoints. The singleton open interval `(000,010)={001}` is separable because bounded height prevents the above-a-countable-bound splitting used in the general nowhere-separability proof. Finite ccc holds only trivially.
- Boundary/choice evidence: the empty root word versus nonempty terminal branches, zero-indexed coordinates, singleton interval, actual endpoints, all eight top nodes, and the entirely finite ZF calculation are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: trace three actual stages of `ex-nested-interval-tree-from-a-suslin-line` and calculate the nested/disjoint alternatives against the completed recursion invariant.

### 26. `ex-nested-interval-tree-from-a-suslin-line` — complete, repaired

- Claim/conventions: the first three recursive intervals can satisfy `a0<a2<b2<a1<b1<b0`, so `I1,I2` are strictly nested in `I0` and disjoint from one another; every later interval has the same nested-or-disjoint relation to every earlier interval.
- Source: Monk Theorem 9.18 and complete proof, printed pp. 74-75 (`/tmp/pml-monk-jech.txt:5139-5192`), implemented through `lem-nowhere-separable-suslin-line-nested-interval-tree`.
- Examined direct dependencies: `lem-nowhere-separable-suslin-line-nested-interval-tree`, `def-axiom-of-choice`.
- Repair: supplied actual inequalities at stages zero, one and two. The general calculation classifies an endpoint-avoiding gap as inside, left, or right of each earlier interval, including boundary-equality handling; intervals containing a common descendant are comparable and incomparable indices have disjoint intervals.
- Boundary/choice evidence: empty prior endpoint set, ordinal zero and one, strict nondegenerate endpoints, ambient versus interval endpoints, finite selections, and full `omega_1`-recursion AC are explicit at steps 1.1-5.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: work through `ex-antichain-sealing-in-countable-tree-forcing`, keeping a ground antichain of one condition distinct from a name for an antichain of the generic union.

### 27. `ex-antichain-sealing-in-countable-tree-forcing` — complete, repaired

- Claim/conventions: below any condition forcing a name `dot A` to be a maximal antichain of the generic tree, a two-dimensional fusion extracts a countable ground antichain `A*`, seals it with a new branch-top level, and yields `q` forcing `dot A=check A*`.
- Sources: Karagila Theorem 4.25 and complete proof, printed p. 25 (`/tmp/pml-forcing-2023.txt:1594-1624`); the local published sealing lemma supplies the exact branch-top construction.
- Examined direct dependencies: `thm-countably-closed-forcing-adds-a-normal-suslin-tree`, `def-countable-normal-tree-end-extension-forcing`, `lem-countable-tree-antichain-sealing`, `thm-closure-distributivity-and-no-short-sequences`, `lem-forcing-monotonicity-density-and-decision`, `def-forcing-relation-for-atomic-formulas`, `thm-forcing-theorem`, `thm-countable-union-of-countable`, `thm-transfinite-recursion`, `def-axiom-of-choice`.
- Repair: one enumeration of the initial condition is insufficient because decision extensions add new nodes. The proof uses outer `n` and inner `m` recursions, so every evolving node is eventually assigned a persistent ground member of the name comparable with it. The omega-union loses its top, the sealing lemma restores it, and literal end extension proves that the seal survives all future conditions.
- Boundary/choice evidence: empty named antichain excluded by root comparison; `n=m=0`, zero rounds, one-node starting condition, repeated decisions/branches, lost and restored top, internal forcing versus universe-generics, and exact AC uses are explicit at steps 1.1-6.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author `ex-specialization-generic-kills-a-tree`, calculating every dense domain requirement, the generic union and its fibers, and the cardinal reason that at least one fiber is uncountable.

### 28. `ex-specialization-generic-kills-a-tree` — complete, repaired

- Claim/conventions: each node requirement `D_t` is dense by the explicit fresh label `0` for empty range or `1+max ran(p)` otherwise; a supplied generic union is total and partitions the unchanged tree into countably many antichain fibers, at least one of which is uncountable.
- Source: Monk Theorem 16.38 and complete proof, printed p. 332 (`/tmp/pml-monk-jech.txt:24754-24805`), together with the completed forcing theorem.
- Examined direct dependencies: `thm-specializing-forcing-kills-a-suslin-tree`, `def-finite-aronszajn-specialization-poset`, `lem-specialization-dense-domains-and-union`, `def-aronszajn-suslin-and-special-tree`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-axiom-of-choice`.
- Repair: the scaffold did not derive which cardinal fact forces an uncountable fiber or why no new cofinal branch appears. If all fibers were countable, their countable union would make the height-`omega_1` tree countable and its height image a countable cofinal subset of preserved `omega_1`. The specializing map is injective on every branch, so the same boundedness argument prevents a new cofinal branch. No predetermined fiber, including fiber zero, is assumed uncountable.
- Boundary/choice evidence: empty greatest condition and empty range, singleton extension, label zero, possibly empty fibers, nonempty generic, limit-height/no-top convention, internal forcing, and exact countable-choice uses are explicit at steps 1.1-6.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: audit the final false statement `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis`, ensuring that each branch retains both distinguishing assertions rather than weakening to consistency of only SH or only not-SH.

### 29. `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis` — complete, repaired

- Claim/conventions: assuming external `Con(ZFC)`, both `ZFC+SH+not-CH` and `ZFC+CH+not-SH` are consistent. These joint branches refute `SH -> CH` and `CH -> SH` separately; no actual model is extracted from consistency.
- Sources: Karagila Section 7, printed pp. 34-38, for the MA branch; Monk Theorem 15.42, printed p. 277, and the completed constructibility/diamond/tree suppliers for the `L` branch.
- Examined direct dependencies: `cor-formal-consistency-of-ma-and-not-ch`, `cor-ma-and-not-ch-implies-suslin-hypothesis`, `lem-finite-fragment-l-interpretation-with-gch`, `thm-formal-consistency-of-zfc-plus-gch-from-zf`, `thm-constructible-inner-model-semantic-and-formal-schema`, `thm-v-equals-l-implies-diamond`, `prop-diamond-implies-continuum-hypothesis`, `cor-v-equals-l-gives-a-suslin-tree`, `thm-suslin-tree-implies-suslin-line`, `def-suslin-hypothesis-and-suslin-algebra`, `thm-formal-relative-consistency-from-verified-proof-reduction`, `def-arithmetic-provability-and-consistency`, `def-axiom-of-choice`.
- Repair: the scaffold's separate consistency-of-SH and consistency-of-not-SH dependencies did not retain any CH value. The MA fixed-proof splice now preserves not-CH. For the other direction, fixed constructible proofs of CH and not-SH are installed as two new constant branches in one verified `L` dispatcher, retaining the published terminal contradiction block; this proves the joint CH+not-SH consistency implication.
- Boundary/choice evidence: zero, one and repeated added-axiom occurrences, malformed inputs, both strong-line endpoint clauses, both directions of the proposed iff, internal-L Choice and choice-free finite proof splices are explicit at steps 1.1-4.1.
- Checks: focused precheck, rendercheck, and strict proof-contract check passed. Step-3b decision recorded `repaired`, confidence 1.
- Open gap: none. Next action: author both owned pages, update coverage and the preserved batch-6 dependency ledger row, then run the complete pair/batch gates.

## Page checkpoint — complete

- Authored `library/foundations/suslin-trees-lines-algebras-and-independence.md` with the 24 A-page items in exact manifest prerequisite order and `library/foundations/suslin-trees-lines-algebras-and-independence-examples.md` with the five B-page examples/counterexample in exact manifest order.
- The A prose distinguishes the direct Kurepa equivalences, Boolean-algebra construction, three forcing mechanisms, declared uses of Choice, and the external rather than model-extracting consistency conclusion. It does not consume the Recorded Kurepa result.
- The B prose records the actual finite branch calculation, nested/disjoint interval invariant, named-antichain sealing distinction, generic specialization calculation, and the two separate joint consistency branches needed to refute the proposed iff.
- Both pages are `draft`. Focused rendercheck passed for each; page precheck examined zero proof items as expected and reported clean.
- Coverage already registers the complete source ranges and both owner-added local results for this pair. No coverage claim was weakened or added after authoring, and the sibling page's coverage record remains untouched.
- The pair has no same-frontier cross-batch item dependency: its nonlocal suppliers and both page requirements are already published, while all new Suslin suppliers are in this pair. The existing batch-6 input remains the valid empty array; there is no sibling row to alter.
- Open gap: none. Next action: run the full explicit-path and shared batch gates, refresh/recheck decisions whose hashes changed, and record all pre-splice or published-debt findings for serial reconciliation.

## Final dispatch report

### Authored inventory

The following 29 items are mathematically complete, have item-specific proof
contracts, and passed their owned explicit-path checks:

1. `def-suslin-hypothesis-and-suslin-algebra`
2. `lem-suslin-tree-normal-splitting-refinement`
3. `lem-suslin-tree-branch-first-difference-order`
4. `lem-linear-order-completion-existence-uniqueness-and-density`
5. `thm-suslin-tree-implies-suslin-line`
6. `lem-suslin-line-nowhere-separable-quotient`
7. `lem-nowhere-separable-suslin-line-nested-interval-tree`
8. `thm-suslin-line-implies-suslin-tree`
9. `lem-suslin-tree-forcing-is-countably-distributive`
10. `thm-suslin-tree-regular-open-algebra-is-suslin`
11. `lem-suslin-algebra-refining-antichain-tree`
12. `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`
13. `cor-suslin-tree-yields-nonproductive-ccc`
14. `thm-ma-aleph-one-eliminates-suslin-trees`
15. `cor-ma-and-not-ch-implies-suslin-hypothesis`
16. `def-countable-normal-tree-end-extension-forcing`
17. `thm-countably-closed-forcing-adds-a-normal-suslin-tree`
18. `thm-every-countable-linear-order-embeds-in-the-rationals`
19. `thm-special-trees-are-exactly-rationally-special`
20. `thm-specializing-forcing-kills-a-suslin-tree`
21. `thm-finite-support-iteration-kills-all-named-suslin-trees`
22. `cor-formal-consistency-of-suslin-hypothesis`
23. `cor-formal-consistency-of-not-suslin-hypothesis`
24. `thm-conditional-independence-of-suslin-hypothesis`
25. `ex-first-difference-order-on-a-binary-branching-tree`
26. `ex-nested-interval-tree-from-a-suslin-line`
27. `ex-antichain-sealing-in-countable-tree-forcing`
28. `ex-specialization-generic-kills-a-tree`
29. `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis`

Both owned pages are authored at
`library/foundations/suslin-trees-lines-algebras-and-independence.md` and
`library/foundations/suslin-trees-lines-algebras-and-independence-examples.md`.
The A page lists the 24 spine items and the B page lists the five examples and
false statement in exact manifest order.

No new item ID was created during this dispatch. The two local preparatory
suppliers `thm-every-countable-linear-order-embeds-in-the-rationals` and
`thm-special-trees-are-exactly-rationally-special` were already present in the
immutable authoring baseline after the Step-3a owner enrichment. There is
therefore no auditor-authored addition awaiting the engine bypass.

AC is not hidden in the prose. The contracts locate its use in simultaneous
branch extensions and successor orders, Zorn maximality, interval and
antichain selection, transfinite tree construction, countable enumerations,
and the ZFC forcing extensions. The countable-order embedding and the two
directions of rational specialness use least-index recursions and remain
choice-free; the finite binary-tree example is also ZF. The incompatible MA
and constructible branches remain separate, and their common conclusion is
only the stated external conditional independence.

### Final scaffold repairs

- The final B item had ID prefix `fs-` but kind `counterexample`. Repository
  schema requires `fs-` items to have kind `false-statement`. The kind is now
  corrected in both the item and the owned manifest entry; the ID, title,
  promised false claim and proof are unchanged. This repair removed the only
  owned `depcheck` error.
- The first boundary audit detected three identical generic
  `iff-reverse` inapplicability reasons. They were replaced by distinct
  item-specific reasons for the nonproductive-ccc corollary, the MA theorem,
  and the countable-order embedding theorem. The rerun has no contradicted or
  templated boundary row.
- Coverage now includes the two algebra-to-tree sources introduced by the
  completed proof: Jech, Definition 30.19 and the following orientation on
  printed p.594, and Bukovsky, Lemma 9 on printed pp.356-357. The record says
  explicitly that Jech states but does not prove the converse there, and that
  the missing exact tree verification is local. Full-text fetch stamps are
  present for both.

### Checks actually run

- Owned explicit-path precheck: 27 proof-bearing files checked, 0 failing;
  the two definitions correctly contain no proof-like section.
- Owned explicit-path rendercheck: all 29 items and both pages, 0 errors.
- Strict selected proof-contract check: 29/29, 0 errors, 0 warnings.
- Boundary audit after repair: 232 boundary rows, 59 item-specific
  `not_applicable` rows, 0 template clusters and 0 contradicted candidates.
- Citation fidelity: 202 citations over 29 items; every excerpt found and no
  widening candidate detected.
- Risk report: 29 items routed, 0 errors. Finite-smoke found no executable
  finite obligation in these contracts, so it performed 0 checks rather than
  supplying mathematical evidence.
- Shared coverage checklist after the owned additions: 2 A pages and 59
  harvested results, 0 errors, 0 warnings. Source fetch: 8/8 shared sources
  stamped and resolved, including the two newly added owned sources.
- All-run manifest dependency check: 561 items, 0 normalized, 0 errors.
- Repository `depcheck --pending-audit-ok`: pass after the false-statement kind
  repair; its 269 legacy warnings are outside this pair. `fwdcheck`: pass.
  `extcheck`: pass with its existing repository warnings; no owned item has a
  direct or inherited path to the Recorded set-theory page.
- The batch-6 cross-batch input remains `[]`: a mechanical comparison found no
  owned supplier in another current-frontier batch. Both ordinary page
  prerequisites are published. Ledger refresh and `--require-reviewed` pass.
- `validate-plan research/plan-spec.json`: its current internal acyclicity and
  reference checks pass. The required pre-splice inventory mismatch remains:
  the plan has 0 items on each owned page, while the batch manifest has 24 on
  A and 5 on B.
- Final JSON parsing passed for the shared batch manifest, coverage, proof
  contracts, batch dependency input and unified dependency ledger. The owned
  29 items and two pages have no trailing whitespace.
- The full batch-6 explicit-path run was also attempted. Its owned 27
  proof-bearing files pass before precheck reaches the first missing sibling
  file. Full-batch rendercheck reports exactly 27 unreadable sibling paths:
  the 25 items and two pages of the separately owned PFA pair. Full-batch
  content-policy likewise reports exactly those 25 missing sibling items and
  no owned item error. These are not repairs authorized to this pair.

### Published concern and serial amendments

- Confirmed source-locator defect, high confidence:
  `thm-splitting-suslin-tree-poset-square-not-ccc` on published page
  `set-theoretic-trees-delta-systems-and-diamond`. Monk Proposition 9.34 at
  `/tmp/pml-monk-jech.txt:5940-5951` proves a different normal-tree
  branch/antichain fact, not the product theorem. The published item's complete
  local split-pair proof appears mathematically sound, so no new supplier is
  required. Repair by citing an exact product source or describing Proposition
  9.34 only as an analogous sibling-selection argument. This is confirmed
  citation debt, not a suspicion that the theorem is false.
- Shared-prose correction for Step 4:
  `research/phase-2-set-blocker-resolution-2026-09-08.md:162-170` says the
  first differing code coordinate is at most
  `min(f(s),f(t))`. That stronger claim is false when the lower node has color
  0 and the upper node color 1. The authored proof uses the correct sufficient
  bound `p <= f(t)`, because coordinate `f(t)` always differs, and predecessor
  inclusion fixes the orientation at the first difference.
- Shared-coverage reconciliation for Step 4:
  `research/phase-2-next-18-batch-9.coverage.json:573-576` defers “PID implies
  no Suslin trees” to this pair, but PID is introduced on the later PFA page
  and this result is not in the SET-17 design or manifest. Reroute it to its
  actual later owner or mark it outside the selected scope. The sibling file
  was not edited here.

No other potentially defective published item was found in the owned
dependency cone.

### Owner-only closure and remaining obligations

The mathematical work is complete, but the dispatch is not workflow-closed.
Changing the preserved `fs-` item kind from `counterexample` to
`false-statement` changes the pair scope hash. The previous owner `proceed`
receipt is therefore stale, and `tools/step3-decisions.mjs` correctly reports:

- owner action required to record `proceed` for the current
  `suslin-trees-lines-algebras-and-independence` scope; and
- a current item audit required for
  `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis` after that scope
  closes.

The other 28 item receipts remain current. I did not use `--owner`, did not
invent an owner ruling, and could not validly re-record item 29 while its pair
scope is owner-held. After the owner approves this classification-only scope
repair, item 29 should be rerecorded as `repaired`, confidence 1, with its 13
examined dependency IDs already listed in checkpoint 29. Step 4 must then
splice the 24/5 plan inventory, apply the two shared prose/coverage amendments,
and leave the independently owned PFA files to their owner.
