# Step 7 adjudication — group g

Run: `phase-2-next-20`  
Batch: 12  
Pages: `effective-numberings-reductions-resources-and-randomness`, `effective-numberings-reductions-resources-and-randomness-examples`

All eight current judge rejections and all seven Step-6 reader warnings assigned to group g have been adjudicated. Four judge rejections and two reader warnings were confirmed fatal and repaired; the remaining four rejections were false positives and the remaining five warnings were nonfatal. No cross-group alert or new lemma was needed.

## Judge rejections

### `def-acceptable-numbering-with-universal-evaluation`

- Tuple: `gpt-5.6-terra` / `447c97faf789e4bff97553d10c91f315c430320b406c56a739a58de703ecd1b1`
- Pre-edit guard: `774b0425a1feffc92346759441a2231b82da178a1f4f237880187364cf5d02d7`
- Outcome: `false_positive`
- Evidence: `thm-kleene-normal-form-for-the-fixed-machine-coding` does not merely state the extensional equality. Its proof step 1.2 constructs terminating finite tape routines; steps 2.1–4.1 compile composition, primitive recursion, and strict minimization; and step 4.1 explicitly says the finite-derivation-to-program process is effective. `lem-step-by-step-interpreter-for-machine-codes` independently supplies the fixed one-step evaluator, while `def-kleene-computation-predicate-and-output-map` supplies the word/index and malformed-code conventions. These are exactly the ingredients used in Verification 1.1–2.1. The dependency chain is acyclic.
- Change/check: no content change is licensed or warranted. Read the full item and the complete cited normal-form and one-step-interpreter proofs.

### `def-polynomial-time-verifier-and-reduction-interface`

- Tuple: `gpt-5.6-terra` / `d94b219825d9b73cf8d51a25cec03efc9a6c7ba5e9542f619e1d2bb418544169`
- Pre-edit guard: `d266e24ae9505dc08a6488da51fb8a9e726a83a9a99488bf94b89c19893419af`
- Outcome: `confirmed_fatal` (`logic`)
- Evidence: Verification 1.1 first observes that an input/output tape can retain its initially occupied input extent, but its displayed composition estimate then substitutes only $C(n+1)^a$ for the first output length. With $a=0$, an identity first transducer can leave an $n$-bit output, and a degree-$b>1$ second transducer need not run in $O(n)$. The displayed bound was false even though polynomial-reduction transitivity is true.
- Repair: bounded the first output length by $n+C(n+1)^a+1$ and substituted it into the second bound, obtaining $C(n+1)^a+D(n+C(n+1)^a+2)^b+n+1$. Synchronized the exact derivation and corrected the stale risk-review sentence in `research/phase-2-next-20-batch-12.proof-contracts.json`.
- Post-edit guard: `c4249863dc2bad104e12d0869232eb24ccd21958d9a2b41198ca9ad33290ceec`
- Focused checks: item precheck pass; strict proof-contract pass (1/1); rendercheck pass.

### `def-uniform-asymptotic-time-space-comparison`

- Tuple: `gpt-5.6-terra` / `e32fa9f26acf0207f856df82cfbdddaa62105cdc2a7b9d1900c84ffa69e9d8cf`
- Pre-edit guard: `76155dcf13528b91b9288f64fd22a28c13987f07a6cdacf978db25ac80667ba9`
- Outcome: `confirmed_fatal` (`logic`)
- Evidence: `def-multitape-and-nondeterministic-machines` defines both deterministic multitape and nondeterministic one-tape variants. The item then spoke of a machine's single finite run time for each input. That does not define a nondeterministic cost, because no maximum over branches or all-branch halting convention was supplied. Every batch-12 consumer uses deterministic multitape cost.
- Repair: explicitly restricted this resource interface and its all-input worst-case definition to deterministic multitape machines, and stated that the item defines no nondeterministic branch-cost convention. Synchronized the proof-contract's degenerate-case evidence.
- Post-edit guard: `ad45ece55a369bbf8dfd815d20190a868685615f673434d25f72165c1377bdde`
- Focused checks: precheck correctly checked zero proof-bearing items; strict proof-contract pass (1/1); rendercheck pass.

### `ex-smn-specializes-a-two-argument-index`

- Tuple: `gpt-5.6-terra` / `539524904276555b2dc6b2aaa98af2dcb4cf512a7480b79fc5c4b98145116f50`
- Pre-edit guard: `faf264fc4c71423571f41405180a13676cd4ca7097253581fc15aa5ac638542b`
- Outcome: `false_positive`
- Evidence: F1 cites the full `thm-smn-for-the-fixed-acceptable-numbering`, not only its displayed equality. That theorem's proof step 1.1 explicitly generates a finite program which writes the stored canonical parameter blocks, uses the unary $m+n$ arity header, appends the retained input blocks, and invokes the raw evaluator; step 3.1 explicitly identifies the $m=n=1$ construction as prepending one stored numeral and changing the header to two. Those are the exact facts used in example step 2.1.
- Change/check: no content change is licensed or warranted. Read the full example and full cited specialization proof, including the fixed tuple syntax.

### `thm-clocked-universal-simulation-with-time-and-space-bounds`

- Tuple: `gpt-5.6-terra` / `a5264d1de235d100ef0c56a3001e1e4ef5ed352906e006a01bb92fdd61681f66`
- Pre-edit guard: `5f9d662f772a2a58a66929e489324be67b3a2768b40664c276e4b4187a8b3859`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Evidence: F5 claimed that all heads start at zero from `def-turing-machine-initial-and-halting-configuration-interface`, but that item defines only a one-tape raw tuple and one-tape initial configuration. `def-multitape-and-nondeterministic-machines` defines the multitape transition function but no initial-tape convention. The original proof therefore had not supplied its simulated multitape initial configuration.
- Repair: restricted F5's source restatement to the published one-tape interface and, in step 1.1, explicitly defined the tagged multitape initial configuration: state 0, every head at cell 0, input on the first tape, blanks in every other cell/tape, and the one-tape clamped boundary adopted tapewise. Synchronized derivation 1.1 and the risk-review record in the batch proof contract.
- Post-edit guard: `3a28db4d3affe4225680c155a1bc6665fb1c5276c3f12734a1a43e80729c00a8`
- Focused checks: item precheck pass; strict proof-contract pass (1/1); rendercheck pass.
- Reader warning `s8a-33e59de43b3f81641c38e9a5`: `nonfatal`. Step 3.1 is the conceptual stack invariant; step 8.1 gives the lazy representation and explicitly identifies each fresh interval, increasing allocation order, archive position, and allocation forced by another virtual tape. The remaining reconciliation is immediate bookkeeping.
- Reader warning `s8a-a68edca5f96efbfe4c338bcc`: `nonfatal`. Travel between consecutive level-$i$ and level-$j$ operations costs $O_M(2^i+2^j)$ and is chargeable to those adjacent events (or removed by the stated return scans); this preserves the summed event bound. The missing sentence is a reader-closable amortization detail.
- Reader warning `s8a-b5bdce28a808fdc40e4c311e`: `nonfatal`. The order check is the direct consecutive split using $h_i-1=\sum_{j<i}h_j$ and $2h_i-1=(h_i-1)+h_i$; midpoint/end markers give those exact capacities. No occupancy or ordering claim fails.

### `thm-kleene-fixed-point-theorem-for-program-indices`

- Tuple: `gpt-5.6-terra` / `8995904dd643173290d6a7ffaf15368c608b518a829c358a953ab8326481b0e1`
- Pre-edit guard: `98f18a7bf2ced9f225c0a88e621f53f9c0f13d66b8b4c54ac846c7c2acb0d04e`
- Outcome: `false_positive`
- Evidence: the opened F2 supplier `def-acceptable-numbering-with-universal-evaluation` proves the literal compiler the rejection says is absent. Its Verification 2.1 embeds supplied indices through canonical-bit writing chains, disjoint state renaming, finite-table assembly, and effective length-lex indexing; its Verification 1.1 and normal-form dependency provide the raw universal evaluator and finite tape routines. F1 independently provides the total computable specialization subroutine. Thus the finite program $q$ is effectively generated from the supplied index $f$ without running $F$ during code generation.
- Change/check: no content change is licensed or warranted. Read the full theorem, both direct dependencies, and the transitive normal-form compiler proof.

### `thm-kleene-normal-form-for-the-fixed-machine-coding`

- Tuple: `gpt-5.6-terra` / `3632cafa837e71698ed8aee15b7098a87b1ee182a6d10c6de0c32bb2a8fff6bb`
- Pre-edit guard: `eaa592200751f7c104e0a8b701f86cc6f5469dd40789dad18cbec308be5a1653`
- Outcome: `confirmed_fatal` (`logic`)
- Evidence: as written, `$\mu y\,g(\mathbf a,y)=0$ is defined with value $z$` places `=0` outside the minimization expression and so asserts a value of zero while simultaneously allowing arbitrary $z$. The claim must be assessed as written; the following least-zero conditions do not cure the malformed display.
- Repair: removed the extraneous `=0` from the minimization expression. The sentence now says that $\mu y\,g(\mathbf a,y)$ has value $z$ exactly when all earlier strict evaluations are defined and nonzero and $g(\mathbf a,z)=0$.
- Post-edit guard: `7a3ad30c11dcbd1b4b1b0bc06ed3bbd5fe0c54c51086621cf055095b4723361c`
- Focused checks: item precheck pass; strict proof-contract pass (1/1); rendercheck pass.

### `thm-smn-for-the-fixed-acceptable-numbering`

- Tuple: `gpt-5.6-terra` / `d07959022ffaa946e8d3e06121018ec3281d566be35d1ad7affad669c6443e16`
- Pre-edit guard: `9ee4e525acb1ea8d864edc09e4fd34b6e689c135254c6592346a2f14ae403043`
- Outcome: `false_positive`
- Evidence: the rejection considers only the acceptable-numbering Definition sentence, but F1 cites the entire proved item. Its Verification 1.1 constructs the raw evaluator. Verification 2.1 constructs canonical literal-writing chains, disjoint state copies, finite transition-table emission, and effective length-lex indexing, based on the normal-form compiler's finite tape routines. The s-m-n proof applies that exact compilation mechanism to an $n$-tuple parser, the $m$ stored literals, the $m+n$ arity header, and the raw evaluator; F2 supplies the computable coding operations. This is not an inference from abstract extensional equality alone.
- Change/check: no content change is licensed or warranted. Read the complete specialization theorem, acceptable-numbering verification, coding lemma, and normal-form compiler proof.

## Reader warnings

### `def-rp-corp-zpp-bpp-and-pp-classes`

- Warning `s8a-b09eb45028a39827db669be9`: `nonfatal`.
- Evidence: $q_0=1$ because the initial state is nonhalting, so the survival sum gives $1\le\mathbb ET\le p(n)$ and hence $p(n)\ge1$, including at $n=0$. In the converse direction an all-branch bounded attempt also cannot halt in zero transitions, and $P$ is chosen as a larger bound including restoration and bit-block generation, so $P(n)>0$. Thus the Markov division and grouping into $KP(n)$ survival terms are valid. The missing explicit inequalities are immediately recoverable proof detail, not a false definition or theorem.

### `lem-fixed-machine-history-predicate-is-primitive-recursive`

- Warning `s8a-a7391f38c04f81bfadd17537`: `confirmed_fatal` (`logic`).
- Pre-edit guard: `7e027abbe9a36c115606e822b86631360bf8b67a4c6a2c4c4db8da02d1508c05`
- Evidence: step 4.1's bounded scan correctly stops at the first coordinate outside $\{1,2\}$, but its reason that the next cell is implicitly blank is false when that coordinate is a written tape symbol at least 3. This is a false proof assertion, not merely an omitted explanation, even though the PR algorithm and lemma conclusion remain correct.
- Repair: stated that the stopping rule itself produces the maximal bit prefix and that the next implicit cell is necessarily blank only when no stored non-bit coordinate occurs. Synchronized derivation 4.1 in the proof contract.
- Post-edit guard: `7a6c09f7aabb5aad1d873f5b1db3d4b86e8e07b1de87a0c375f019229c3b55b8`
- Focused checks: item precheck pass; strict proof-contract pass (1/1); rendercheck pass.

### `def-pairwise-independent-hash-family-interface`

- Warning `s8a-3442729f7ced19b3452cc7db`: `confirmed_fatal` (`logic`).
- Pre-edit guard: `ae02911bc6a7acd00c130e10d834229ed14b43ec03df844fab282263478e1729`
- Evidence: for fixed seed $k$ and input $x$, $h_k(x)$ is one element of $R$, not a random variable or probability distribution. Saying that each such value is uniform is ill-typed and fails to state the separate marginal condition, which matters when $|D|\le1$ and the pair clause is vacuous.
- Repair: replaced the ambiguous sentence by the exact condition $|\{k:h_k(x)=u\}|/|K|=1/|R|$ for every $x\in D$ and $u\in R$, followed by the existing joint count condition.
- Post-edit guard: `744e7f5371ef0f3baff604b8d73de454241ec1c1a003c268098fe31adbea0891`
- Focused checks: item precheck pass; strict proof-contract pass (1/1); rendercheck pass.

### Source-backing warning

- Warning `s8a-4e43a0b076ba80a9993597b9` on `def-machine-time-and-space-constructibility`: `nonfatal`.
- Evidence: the referenced titles in `def-machine-time-and-space-constructibility`, `def-computable-many-one-reducibility-interface`, `def-oracle-turing-reducibility-interface`, and the pre-repair hash-family item openly say that full reading or the exact locator remains pending; they do not falsely claim completed source verification. The batch coverage preserves the exhausted retrieval attempts and states that Gallier/Aspnes source backing was dropped in favor of complete local alternatives, while Arora/Patey retrieval evidence remains distinct. The affected statements are `ai-altered`, and their mathematical content is locally defined/proved rather than logically imported from an unread source passage. This remains provenance/source-richness debt, not a fatal mathematical or dependency defect, and no content edit is licensed.

## Rejudge targets

- `def-polynomial-time-verifier-and-reduction-interface`
- `def-uniform-asymptotic-time-space-comparison`
- `thm-clocked-universal-simulation-with-time-and-space-bounds`
- `thm-kleene-normal-form-for-the-fixed-machine-coding`
- `lem-fixed-machine-history-predicate-is-primitive-recursive` (reader-warning repair)
- `def-pairwise-independent-hash-family-interface` (reader-warning repair)

## Evidence sources consulted

- `items/thm-kleene-normal-form-for-the-fixed-machine-coding.md`: finite program compilation for initial functions, composition, primitive recursion, and strict minimization.
- `items/def-acceptable-numbering-with-universal-evaluation.md`: the concrete raw evaluator, literal-writing chains, disjoint state renaming, finite-table assembly, and effective index recovery used by the acceptable-numbering, s-m-n, and fixed-point items.
- `items/thm-smn-for-the-fixed-acceptable-numbering.md`: the concrete tuple/header construction that specializes stored parameters.
- `items/lem-step-by-step-interpreter-for-machine-codes.md` and `items/def-kleene-computation-predicate-and-output-map.md`: fixed one-step evaluation and the exact coding/malformed-input conventions.
- `items/def-turing-machine-initial-and-halting-configuration-interface.md` and `items/def-multitape-and-nondeterministic-machines.md`: the one-tape initial-configuration scope and the separate multitape transition interface.
- The six repaired items themselves and their entries in `research/phase-2-next-20-batch-12.proof-contracts.json`: exact pre-repair claims, local derivations, edge cases, and synchronized contract evidence.
- `research/phase-2-next-20-batch-12.coverage.json`: the recorded source-retrieval status relevant to warning `s8a-4e43a0b076ba80a9993597b9`.

No web source was used: every adjudicated issue was resolved from complete local supplier proofs, exact item text, or an elementary finite calculation. The source-backing warning remains explicitly classified as nonfatal provenance debt rather than represented as completed external verification.

## Validation and routing

- Current live-ledger reconciliation: eight group-g rejection tuples, each with exactly one adjudication; no later group-g rejection was present.
- Focused precheck: 5 proof-bearing repaired items checked, 0 failing. The resource-comparison definition has no proof-bearing body, so precheck correctly omitted it.
- Strict proof contract: 6/6 repaired items checked, 0 errors, 0 warnings.
- Rendercheck: 6 repaired files checked; all Markdown/frontmatter and KaTeX checks passed.
- Defect ledger: 96 run-wide rows checked, 0 errors; the six group-g fatal decisions each have one matching defect row.
- Step-7 scope check was run and reported 16 still-pending dispositions, all on items outside group g.
- Step-7 fatal-only guard was run: 63 of 73 run-wide changes were licensed and it reported 10 unlicensed edits, all on items outside group g. It reported no group-g edit.
- `git diff --check` on the group-g repaired items, batch-12 contract, and report passed.
- Cross-group alerts: none. No dependency edge or cited defect required a repair outside group g.
- Dependency/frontier changes: none; no `deps`, page `requires`, or batch input was changed, so no frontier-ledger refresh was triggered by this dispatch.
- Blockers within group g: none. The remaining repository-wide scope/guard failures belong to concurrent owning-group work and are left to the engine's prescribed routing.
