# Wave 7 topology separation/Urysohn — Audit-Beta A1/A2 findings

## Scope read

The manifest owns exactly the two A/B pairs `hereditary-and-productive-separation` / `hereditary-and-productive-separation-examples` and `urysohn-lemma-and-tietze` / `urysohn-lemma-and-tietze-examples`: 52 mathematical-content items, of which 44 carry numbered proofs, refutations, counterexamples, or verifications. Every item was read from disk. Every one of the 266 numbered steps and every one of the 237 distinct fact-to-target citations in those proof-bearing items was read. The contract records eight boundary dispositions for every proof-bearing item, 352 dispositions in total.

No item outside the manifest was audited or retagged. Dependency targets outside the manifest were read only to verify the clauses cited by an in-scope item.

## A1 determinations

The complete row-level rationales and working source URLs are in `wave7-topology-separation-urysohn.provenance.jsonl`. All 21 distinct recorded URLs were opened through the browser-backed source reader; the sources include a peer-reviewed article, open university textbooks and course notes, the Encyclopedia of Mathematics, and convention-tiebreaking Wikipedia pages.

The four exact-source statements are:

- `lem-normality-is-closed-hereditary`
- `thm-completely-normal-iff-hereditarily-normal`
- `lem-regular-lindelof-spaces-are-normal`
- `def-lower-limit-topology`

The 39 semantic-source statements are:

- `lem-t0-t1-and-hausdorff-are-hereditary`
- `lem-regularity-is-hereditary`
- `lem-complete-regularity-is-hereditary`
- `thm-positive-heredity-of-separation-axioms`
- `lem-products-preserve-t0-t1-and-hausdorff`
- `lem-products-preserve-regularity`
- `lem-finite-minima-of-continuous-unit-interval-maps`
- `lem-products-preserve-complete-regularity`
- `thm-positive-productivity-of-separation-axioms`
- `cor-perfect-normality-is-hereditary`
- `lem-lower-limit-line-is-regular-and-lindelof`
- `cor-lower-limit-line-is-normal`
- `lem-jones-normal-density-discrete-bound`
- `lem-lower-limit-plane-antidiagonal`
- `thm-normality-is-not-productive`
- `lem-deleted-tychonoff-plank-is-regular-and-nonnormal`
- `thm-normality-is-not-hereditary`
- `fs-every-regular-space-is-normal`
- `ex-separation-preservation-table`
- `ex-closed-subspaces-of-normal-spaces`
- `ex-the-deleted-tychonoff-plank-separation-profile`
- `ex-the-lower-limit-line-and-plane-separation-profile`
- `cex-normality-is-not-open-hereditary`
- `cex-normality-is-not-finitely-productive`
- `cex-t1-free-regular-and-normal-conventions`
- `def-the-dyadic-rationals-of-the-unit-interval`
- `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`
- `thm-urysohn-lemma`
- `cor-urysohns-lemma-closes-the-separation-chain`
- `lem-a-uniformly-approximable-real-valued-map-is-continuous`
- `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`
- `thm-tietze-extension-theorem`
- `cor-tietze-for-unbounded-and-open-interval-valued-maps`
- `thm-a-locally-compact-hausdorff-space-is-completely-regular`
- `cor-a-compact-hausdorff-space-is-tychonoff`
- `fs-every-normal-space-is-completely-regular`
- `fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends`
- `ex-the-metric-urysohn-function-costs-no-choice`
- `ex-sierpinski-space-is-normal-and-not-completely-regular`

The convention deltas responsible for most `ai-altered` classifications are written explicitly in the ledger: the library's words *regular*, *normal*, and *completely regular* omit a built-in $T_1$ condition; several statements expose AC, countable choice, or dependent choice that classical ZFC sources leave implicit; and several page theorems aggregate distinct standard results.

The seven directly verified `ai-generated` / `trivial` statements are:

- `cor-complete-normality-is-hereditary`
- `ex-a-urysohn-function-on-the-real-line`
- `ex-the-first-dyadic-levels-of-the-urysohn-construction`
- `ex-every-closed-subset-of-the-line-is-a-zero-set`
- `ex-tietze-extension-from-a-closed-interval-of-the-line`
- `cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension`
- `cex-tietze-fails-in-a-t1-space-that-is-not-normal`

Their ledger rationales give the elementary verification rather than relying on source failure. The two positive page-specific compositions classified `ai-generated` / `none` are `rem-hereditary-and-productive-separation-ledger` and `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`. The latter took the truth-risk route and failed it in the precise place below. No statement was classified `established-knowledge`, and no item awaits Alpha concurrence merely because a search failed.

Proof provenance totals are 20 `ai-altered`, 24 `ai-generated`, four `not-applicable`, and four `not-supplied`. No existing in-scope item has a component-provenance block or legacy `authorship` field, so the approved A4 provenance work would be a 52-item bulk pure-retag/source-reference pass bracketed by one stage snapshot.

## Class (a): false choice-cost claim

Item: `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`.

Old text:

> Every other theorem and corollary on this page that assumes dependent choice does so purely by inheritance, through a citation of one of the two results above, and spends no further choice principle of its own: `cor-urysohns-lemma-closes-the-separation-chain`, `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`, `cor-tietze-for-unbounded-and-open-interval-valued-maps`, `thm-a-locally-compact-hausdorff-space-is-completely-regular`, and `cor-a-compact-hausdorff-space-is-tychonoff`.

This is false for `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`. Its Statement itself says that the forward direction spends a choice principle beyond the DC already used inside Urysohn's lemma. Its proof step 5.1 applies `[A1]`, dependent choice, to assemble the sequence $((m_k,H_k))_k$ after the individual Urysohn functions have been shown to exist. The next section of the same Remark accurately calls this an additional countable-choice-shaped DC application, so the Remark contradicts both the cited theorem and itself.

Proposed replacement:

> The following results on this page assume dependent choice purely by inheritance, through a citation of one of the two results above, and spend no further choice principle of their own: `cor-urysohns-lemma-closes-the-separation-chain`, `cor-tietze-for-unbounded-and-open-interval-valued-maps`, `thm-a-locally-compact-hausdorff-space-is-completely-regular`, and `cor-a-compact-hausdorff-space-is-tychonoff`.

This removes only the false universal quantification and the one counterexample to it. The following countable-choice paragraph remains correct and needs no change.

## Class (b): citation-precision repairs

### `lem-finite-minima-of-continuous-unit-interval-maps`

Old `[F2]`:

> The open intervals form the usual open-set basis of $[0,1]$ as a subspace of $\mathbb R$ (`def-interval`, `def-continuous-map-top`).

Neither cited target states a topological basis for the usual topology or its trace to $[0,1]$: `def-interval` defines interval forms, and `def-continuous-map-top` defines continuity. Step 1.1 needs exactly the missing basis fact when it checks $m^{-1}((a,b))$.

Proposed `[F2]`:

> In the usual topology of $\mathbb R$, a set is open exactly when each of its points lies in a bounded open interval contained in it; bases trace to subspaces, so the sets $(a,b)\cap[0,1]$ form a basis for $[0,1]$ (`lem-real-line-is-a-metric-space`, clause 3; `def-topology-basis-subbasis`; `def-subspace-topology-top`).

Add those three ids to `deps`; keep the existing mathematical proof. This is a citation repair, not a change to the minimum argument.

### `thm-urysohn-lemma` and `thm-tietze-extension-theorem`

The same missing topology clause occurs in `[L6]` of Urysohn's lemma and `[L7]` of Tietze's theorem. Both facts say that $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$, but cite only `def-subspace-topology-top` and `def-interval`. The first target says that ambient opens trace to subspace opens; the second identifies the two interval forms but does not establish that the ambient order rays are open in the usual topology. The dyadic-scale lemma on the same page correctly supplies the missing argument from `lem-real-line-is-a-metric-space`, clause 3.

For `thm-urysohn-lemma`, proposed `[L6]`:

> The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ (`lem-real-line-is-a-metric-space`, clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ (`def-subspace-topology-top`, `def-interval`). They are disjoint and contain $0$ and $1$, respectively.

For `thm-tietze-extension-theorem`, make the identical citation-precise replacement in `[L7]`. Add `lem-real-line-is-a-metric-space` to each item's `deps`. No proof step or theorem conclusion changes.

### `ex-the-metric-urysohn-function-costs-no-choice`

Old `[L1]`:

> For nonempty $S \subseteq X$: $d(\cdot,S)$ is $1$-Lipschitz, hence continuous (`lem-distance-to-set-is-lipschitz`); $d(x,S) \ge 0$; and $d(x,S)=0$ exactly when $x \in \overline{S} = S$, $S$ being closed (`thm-metric-spaces-are-completely-normal`'s own Facts, `def-metric-space`).

The zero-distance characterization is present only in the cited theorem's Facts, not in its Statement, and `def-metric-space` does not state the distance-to-a-set closure theorem. The actual earlier theorem is available on disk.

Proposed `[L1]`:

> For nonempty $S \subseteq X$, $d(\cdot,S)$ is $1$-Lipschitz, hence continuous; $d(x,S)\ge 0$; and $\overline S=\{x:d(x,S)=0\}$ (`lem-distance-to-set-is-lipschitz`; `def-metric-bounded-diameter`; `thm-metric-closure-characterisation`, claim 1). In particular, when $S$ is closed, $d(x,S)=0$ exactly when $x\in S$.

Add `def-metric-bounded-diameter` and `thm-metric-closure-characterisation` to `deps`. The distance-ratio verification then uses direct Statement clauses.

### `ex-sierpinski-space-is-normal-and-not-completely-regular`

The Facts block currently has `[L1] ... . [L2] ...` in one paragraph. The item parser therefore sees only `L1`, while proof step 1.2 cites nonexistent fact `L2`. This is not merely cosmetic: it prevents an exact citation contract for the step.

Proposed repair: insert one blank line before `[L2]`, leaving every mathematical word unchanged. The two resulting facts are:

> `[L1]` $S$ is normal and not completely regular, with witness argument as in `fs-every-normal-space-is-completely-regular`.
>
> `[L2]` $S$ is not $T_1$ (`def-t0-and-t1-spaces`): the only closed sets of $S$ are $S,\{a\},\varnothing$, so the singleton $\{b\}$ is not closed.

The strict proof-contract gate currently reports exactly one error, `step-1.2 names missing fact L2`, and no other contract error. This repair should clear it without changing the argument.

## Nonfatal observations left unchanged

`library/topology/urysohn-lemma-and-tietze.md` has a legacy seven-section A-page summary rather than the current two-paragraph summary form. Its mathematics agrees with the items, including the additional choice use in the perfect-normality theorem. This is page prose and was recorded rather than chased under the standing triage rule.

The Cantor-set coding citation in `thm-normality-is-not-productive` passes from binary sequences to subsets of $\mathbb N$ by characteristic functions without naming that elementary bridge. The step takes well under 30 seconds and does not change the cardinal argument, so it was not proposed for repair.

No other mathematical falsehood, invalid proof step, wrong-direction dependency, missing hypothesis, or choice-strength mismatch was found.

## Durable checkpoint and A4 status

Current substage: A1 and A2 complete for both owned pairs. Owned artifacts are this file, `wave7-topology-separation-urysohn.provenance.jsonl`, and `wave7-topology-separation-urysohn.proof-contracts.json`. The ledger has 52 rows; the contract covers all 44 proof-bearing items, all 266 numbered steps, all 237 distinct fact-to-target citations, and all eight standard boundaries per item. Open mathematical constraints are the one class-(a) repair and four class-(b) repair proposals above, the latter affecting five items. Exact next action is A3 adjudication. No A3 approval is recorded in `wave7-run-state.json`, so no frontmatter tag, source-reference edit, item repair, touchlog snapshot, judge deletion, audit-stamp deletion, or A4 gate run has been performed.

## A4 application — 2026-08-09

A3 approved all 52 provenance determinations, with its required override for `lem-regular-lindelof-spaces-are-normal`. That ledger row is now `ai-altered` / `semantic-source`: the MSSC text builds $T_1$ into both *regular* and *normal*, while the library uses the separation-only convention. The applied census is 3 `exact-source`, 40 `semantic-source`, 7 `trivial`, and 2 `none` Statements; proof provenance is 20 `ai-altered`, 24 `ai-generated`, 4 `not-applicable`, and 4 `not-supplied`. All 52 items now carry both component tags, 39 missing reader-visible references were added for the ledger's 21 distinct URLs, and no existing reference was deleted. Seven generated corollary/example/counterexample items received the matching existing `generation.role`; the two generated Remarks have no fitting role in the closed vocabulary and remain the two expected legacy `generated-kind` warnings.

The six A3-approved material repairs were applied exactly as adjudicated:

- `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` now names four inheritance-only consequences instead of falsely quantifying over every DC-bearing consequence; the perfect-normality zero-set theorem is no longer in that list because its proof step 5.1 spends a further DC instance. Class (a), verified directly from that theorem's Statement and step 5.1.
- `lem-finite-minima-of-continuous-unit-interval-maps` replaces the unsupported old F2 with the real-line interval-basis clause and the basis-to-subspace clauses from `lem-real-line-is-a-metric-space`, `def-topology-basis-subbasis`, and `def-subspace-topology-top`, and declares those dependencies. Class (b), exact clauses recorded in the updated contract.
- `thm-urysohn-lemma` L6 and `thm-tietze-extension-theorem` L7 now cite the real-line metric-topology clause for openness of the ambient order rays and the subspace definition for their traces in $[0,1]$; both declare `lem-real-line-is-a-metric-space`. Class (b), exact clauses recorded in the updated contracts.
- `ex-the-metric-urysohn-function-costs-no-choice` L1 now cites the direct Lipschitz, distance-to-set nonnegativity, and metric-closure Statements, via `lem-distance-to-set-is-lipschitz`, `def-metric-bounded-diameter`, and `thm-metric-closure-characterisation`; the latter two dependencies were added. Class (b), exact clauses recorded in the updated contract.
- `ex-sierpinski-space-is-normal-and-not-completely-regular` now places L1 and L2 in separate fact paragraphs, so step 1.2 cites a fact the parser actually recognizes. No mathematical word changed. Class (b), and the L2 contract entry now records `def-t0-and-t1-spaces` with use at step 1.2.

Their dedicated baselines are `pre-A4-rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`, `pre-A4-lem-finite-minima-of-continuous-unit-interval-maps`, `pre-A4-thm-urysohn-lemma`, `pre-A4-thm-tietze-extension-theorem`, `pre-A4-ex-the-metric-urysohn-function-costs-no-choice`, and `pre-A4-ex-sierpinski-space-is-normal-and-not-completely-regular` in `wave7-touches.json`. Each material item lost its stale judge pass and its old publication-gate reading (five `verification.verified` blocks and one `verification.audited` line). No replacement verification was written; A6 owns the independent current-text reading. The remaining 46 items received only provenance, generation where applicable, and additive references, retaining their historical verification records.

Reflow was run on all five repaired proof-bearing items and changed none. Targeted precheck passes 5/5, and the full batch precheck passes 44/44. Renderer/YAML/KaTeX checks pass 52/52; `citecheck` reports no recognized missing home across the 52; `content-policy --audit` reports 0 errors and the three expected generated-risk warnings; the five repaired contracts pass strict validation 5/5; finite smoke has 0 selected checks and 0 errors; and risk routing covers 44/44 with 0 errors. Global `depcheck --pending-audit-ok`, `fwdcheck`, `extcheck`, and `depsource` exited successfully while the four disjoint A4 batches were active.

One hard whole-contract issue remains for the orchestrator/Alpha. Full `proof-contract --strict` reports exactly:

> `citation-ai-generated-statement [cor-perfect-normality-is-hereditary]: L2 cites cor-complete-normality-is-hereditary, whose provenance.statement is ai-generated`

This is the one-element generated-statement cone now also reported by `genrisk`. It is exposed by the A3-approved `trivial` tag on `cor-complete-normality-is-hereditary`; none of the six approved body repairs created the dependency. A3 did not authorize changing that label, deleting or redirecting the dependency edge, or unfolding the corollary into its consumer, so no unapproved containment edit was made. Alpha must choose a sourced retag or one of the recorded containment-ladder routes before the whole-wave A4 strict gate can pass.

Coverage remains complete: every one of the 52 in-scope items, all 266 numbered steps, and every dependency citation in both A/B pairs was read. The legacy seven-section Urysohn/Tietze A-page summary and the sub-30-second Cantor-set characteristic-function bridge remain the two deliberately unchanged nonfatal observations. No other unresolved mathematical concern was found in this batch.

## A4 recovery — 2026-08-09

This batch contains no `established-knowledge` row, so the Alpha D2 recovery required no provenance-ledger or source-frontmatter transcription here. The only amended A3 decision in scope was the generated-target containment repair for `cor-perfect-normality-is-hereditary`; no page file was edited.

The old dependency list and Fact L2 made the generated direct corollary `cor-complete-normality-is-hereditary` load-bearing:

> `[L2]` Complete normality, including its $T_1$ conjunction $T_5$, is hereditary (`cor-complete-normality-is-hereditary`).

The item now cites `thm-completely-normal-iff-hereditarily-normal` and `lem-t0-t1-and-hausdorff-are-hereditary` directly, removes the generated target from `deps`, and states their exact operative clauses:

> `[L2]` A space is completely normal exactly when every one of its subspaces is normal; $T_1$ is hereditary (`thm-completely-normal-iff-hereditarily-normal`, `lem-t0-t1-and-hausdorff-are-hereditary`).

Step 1.1 now writes out the elementary heredity derivation: after L1 gives complete normality of $X$, every subspace of $S$ is a subspace of $X$ and hence normal; the characterization applied to $S$ gives complete normality, while hereditary $T_1$ gives the $T_6$ clause. This is a class-(b) citation-precision and generated-target-containment repair; the Statement and conclusion are unchanged. The proof contract replaces the generated-corollary citation with two L2 citation entries quoting those source Statements and records the rewritten step exactly. Because the mathematical proof and dependency interface changed, the stale `verification.judge` block and obsolete `verification.audited` stamp were removed; no replacement verification was written.

Reflow left the item unchanged. Targeted precheck passed 1/1, strict proof-contract validation passed 44/44 with zero errors and warnings, finite smoke reported zero selected checks and errors, and risk routing covered 44/44 with zero errors. `content-policy --audit` covered 52/52 with zero errors and only the two inherited generated-Remark warnings. JSON and JSONL validation reconciled four page ids, 52 manifest ids, 52 unique ledger rows, and 44 contract entries; the ledger has zero D2 rows. `depcheck --pending-audit-ok`, `fwdcheck`, `extcheck`, `citecheck`, targeted `rendercheck`, and `depsource` all exited zero.

Exact edited item ids: `cor-perfect-normality-is-hereditary`. Exact edited page ids: none. Namespaced artifact edits: this findings file and `wave7-topology-separation-urysohn.proof-contracts.json`. The namespaced provenance ledger is unchanged.

## A6 Alpha adjudication — `ex-a-urysohn-function-on-the-real-line`

The current-hash DeepSeek refuter supplied the discrete two-point
counterexample to the Remark “a Urysohn function is never unique.” Alpha's
earlier `nonfatal` disposition is withdrawn: this is a literal mathematical
falsehood, not a quickly closed proof gap, and the workflow expressly requires
Remark prose to receive proof-step suspicion.

The repaired Remark gives a concrete second witness for the pair actually under
discussion: $x^2$ on $[0,1]$, extended by the same constants outside. It is
continuous, satisfies the prescribed zero and one values, and differs from the
linear clamp. The stale judge and pre-repair page certification were removed.
Old normalized hash:
`85131005cca7093e4ff4e89e78af60c08efeb31466866e71770dbee9eba1629d`.
Current normalized hash:
`3a8d8194769956f1aefd8430db9798b165c15d64c4c8cb0ac2fa4cada4c3eb8c`.
Final-current Terra certification and DeepSeek rereading remain pending.
