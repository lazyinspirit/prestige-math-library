# frontier-18 Alpha group d — step 6b adjudication

Scope: batches 2 and 9 (`extraspecial-p-groups-and-central-products`, `cayley-graphs-word-metrics-and-quasi-isometry`, and `ends-coends-and-weighted-limits`).

Reader coverage was mixed:

- `research/frontier-18-reader-2.md` repaired the quasi-isometry cluster but explicitly did **not** claim full-page coverage on batch 2.
- `research/frontier-18-reader-9.md` covered all 59 scoped items on batch 9 and found only contract drift.

I verified every reader and refuter finding from current disk before accepting or rejecting it. Confirmed-fatal findings were repaired in place, the affected batch contracts were regenerated or updated from the current item text, and the matching defect-ledger rows are written in `research/frontier-18-alpha-d-6b-ledger-rows.json` for append.

## Reader findings

### Batch 2

- `R2-1` — `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse` — `confirmed_fatal`.
  The reader was right that the proof used genuine choice without exposing it in the Statement. The current item now states `Assume the Axiom of Choice`, cites `def-axiom-of-choice`, and proves the quasi-inverse with explicit constants.

- `R2-2` — `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets` — `confirmed_fatal`.
  The unsupported “choose a separated net” step has been replaced by a Zorn-maximal `\delta`-separated subset argument, and the Statement now carries the AC hypothesis the proof actually uses.

- `R2-3` — the word/path-metric citation cluster (`thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph`, `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`, `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity`, `ex-the-integers-are-quasi-isometric-to-the-real-line`) — `confirmed_fatal`.
  The reader correctly found strong-triangle/ordinary-triangle miscitations. Those facts blocks now cite only the ordinary metric axioms actually used.

- `R2-4` — the downstream quasi-isometry hierarchy/group/finiteness cluster (`prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy`, `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups`, `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter`, `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence`, `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective`, `fs-a-quasi-isometry-is-continuous-or-bijective`, `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals`, `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included`, `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry`) — `confirmed_fatal`.
  I accepted the reader’s diagnosis: those items were still leaning on the repaired AC-dependent bridge even where direct arguments were available. The current proofs now use explicit quasi-inverses, bounded-distance arguments, or finite combinatorics directly.

### Batch 9

- `R9-1` — `research/frontier-18-batch-9.proof-contracts.json` — `confirmed_nonfatal`.
  The contradicted `iff-forward` / `iff-reverse` boundary rows were real contract defects and are now repaired.

- `R9-2` — `research/frontier-18-batch-9.proof-contracts.json` — `confirmed_nonfatal`.
  The stale derivation map for `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` has been synced to the current proof.

- `R9-3` — `research/frontier-18-batch-9.proof-contracts.json` — `confirmed_nonfatal`.
  The stale derivation map for `fs-every-end-exists` has been synced to the current refutation.

## Refuter findings

I dispatched five read-only proof refuters before final adjudication:

- `Bernoulli` on the extraspecial/central-product theorem spine and selected examples.
- `Lovelace` on the full Cayley/word-metric/quasi-isometry page pair.
- `Wegener` on the full ends/coends/weighted-limits page pair.
- `Volta` on the residual high-risk extraspecial examples skipped by Bernoulli.
- `Darwin` on the residual high/critical extraspecial A-page items plus `ex-a-central-product-of-two-cyclic-groups-of-order-four`.

Together they covered every high/critical item routed by `risk-report.mjs`.

### Batch 9 refuter findings

- `WEG-1` — `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` — `confirmed_fatal`.
  The refuter correctly found a corrupted category-of-elements fact line and an unlicensed step-1.2 smallness count. I repaired the `G`/`F` mismatch, cited the morphism clause where step `1.2` actually uses it, regenerated the contract entry, and rechecked the item.

- `WEG-2` — `thm-the-constant-singleton-weight-recovers-an-ordinary-limit` — `confirmed_fatal`.
  The current item now states the full category-of-elements clause it uses in step `3.1`, rather than a truncated objects-only citation.

- `WEG-3` — `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements` — `confirmed_fatal`.
  The fact line had the same `G`/`F` corruption, and the same defect also recurred in `ex-a-weighted-limit-computing-a-kernel-pair`. I repaired both together and regenerated the affected batch-9 contract entries.

### Batch 2 refuter findings — extraspecial page

- `BER-1` — `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` — `confirmed_fatal`.
  The example claimed an explicit four-generator witness but supplied only an existence argument. I rewrote it to use the two canonical factor maps in `\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)`, so the four generators are now actually exhibited.

- `BER-2` — `cex-a-special-p-group-that-is-not-extraspecial` — `confirmed_fatal`.
  The direct-product witness was not yet shown to be special. I repaired this by proving, for odd `p`, that `G=H_p\times H_p` satisfies `Z(G)=G'=\Phi(G)` using the published Frattini formula and the exponent-`p` Heisenberg result.

- `BER-3` — `fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism` — `confirmed_fatal`.
  The refutation relied on the dihedral/quaternion pairing coincidence without citing the example that actually computes it. The item now cites `ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight)` directly.

- `BER-4` — `thm-universal-property-of-the-central-product` / `research/frontier-18-batch-2.coverage.json` — `confirmed_fatal`.
  The theorem on disk is a locally proved quotient universal property, but the coverage row had falsely attributed it to van Beek’s Theorem 2.35, which is a different uniqueness theorem with an extra automorphism hypothesis. I repaired this as a harvest-faithfulness defect: the item’s source titles are now section-level, and the coverage row for Theorem 2.35 is deferred with an honest reason.

### Batch 2 refuter findings — Cayley/quasi page

- `LOV-1` — `lem-balls-in-a-connected-locally-finite-graph-are-finite` — `confirmed_fatal`.
  The Statement had omitted connectedness and the proof had treated a radius-zero open ball as `{x}`. I repaired the Statement/title and rewrote the proof through the finite closed-radius sets `C_n`, ending with the open-ball claim via the Archimedean bound.

- `LOV-2` — `prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance` — `confirmed_fatal`.
  The displacement claim was correct, but the final proof step falsely said right translation is an isometry only when the displacement is zero. I repaired the step to the true bounded-distance consequence.

- `LOV-3` — `prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite` — `confirmed_fatal`.
  The proof had used the open ball of radius `1` as though it contained the generators. It now uses the open ball of radius `2`, which does.

- `LOV-4` — `ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics` — `confirmed_fatal`.
  The example wrongly claimed `|1|_{\{2,3\}}=1`. It now proves `|1|_{\{2,3\}}=2` via `1=3+(-2)`.

- `LOV-5` — `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` — `confirmed_fatal`.
  The refutation had counted closed balls while citing open-ball notation. I repaired the count to the open ball `B(0,n+1)` in `\mathbb Z`.

### Batch 2 refuter findings — residual extraspecial high-risk items

- `VOL-1` and `VOL-2` — `ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight` — `confirmed_fatal`.
  The “index two, hence abelian” sentence was false, and the “any two” generation claim was stronger than the cited corollary. I rewrote the example by direct subgroup calculations inside `\operatorname{Dih}(C_4)`.

- `VOL-3` — `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight` — `confirmed_fatal`.
  The old proof appealed to a converse presentation claim it did not establish. The current version instead computes the six involutions in `H_2`, invokes the published classification of nonabelian groups of order `2^3`, and identifies the group as `\operatorname{Dih}(C_4)` that way.

- `DAR-1` and `DAR-2` — `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing` — `confirmed_fatal`.
  The old Statement did not name the extraspecial group, the chosen central generator, or the quotient action precisely enough, and step `2.1` silently used `\Phi(P)=Z(P)` without citing it. I rewrote the Statement and the proof so the quotient action and its kernel are now stated and proved on the exact central quotient.

- `DAR-3` — `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` — `confirmed_fatal`.
  The mathematics was sound, but the item’s `sources.references` pointed at the Cayley/quasi sources instead of the extraspecial sources actually harvested for it. I corrected the frontmatter references to Craven and van Beek.

- `DAR-4` — `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed` — `confirmed_fatal`.
  Step `1.4` had cited `thm-z-mod-p-is-a-field` for the claim `|\mathbb Z/p|=p`, which that theorem does not state. I repaired the step by giving the local residue-class count and keeping the product-rule citation for the threefold product.

No other refuter-reported defect was confirmed.

## Additional Alpha repairs

- I repaired a page-wide batch-2 quasi-isometry citation-fidelity defect that neither the reader nor the refuters had named explicitly: nine facts lines restated `def-coarsely-dense-subset-and-quasi-isometry` more strongly than it actually says. Those facts now use the exact coarse-Lipschitz/quasi-inverse definition, and the affected contract entries were regenerated.
- I repaired the batch-9 category-of-elements recurrence in `ex-a-weighted-limit-computing-a-kernel-pair` alongside `WEG-3`, even though the refuter had named only the corollary explicitly.

## Risk review

- `risk-report --require-reviewed` is now clean on both batches.
- Batch 2: all **90** routed `high`/`critical` items carry `risk_review.status: complete` in `research/frontier-18-batch-2.proof-contracts.json`.
- Batch 9: all **48** routed `high`/`critical` items carry `risk_review.status: complete` in `research/frontier-18-batch-9.proof-contracts.json`.
- Refuter assignment by cluster is honest on disk:
  - `Lovelace` covered the full Cayley/quasi page pair.
  - `Wegener` covered the full ends/coends/weighted-limits page pair.
  - `Bernoulli`, `Volta`, and `Darwin` together covered the full routed extraspecial set, with `Volta` on the four skipped high-risk examples and `Darwin` on the residual high/critical A-page cluster plus `ex-a-central-product-of-two-cyclic-groups-of-order-four`.

## Faithfulness and source checks

- Batch 2 extraspecial harvest: I re-opened the Craven and van Beek locators against the recorded coverage rows. The one confirmed faithfulness defect was the false mapping of van Beek Theorem 2.35 to `thm-universal-property-of-the-central-product`; that row is now deferred. I also corrected the item-level source references on `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` to the actual harvested extraspecial sources.
- Batch 2 Cayley/quasi harvest: I spot-checked the Löh and Druţu–Kapovich locators and did not confirm a missing standard result or a dishonest locator range from the sections I opened.
- Batch 9 harvest: I checked the Loregian / Richter / Riehl-backed category-of-elements chain against the on-disk items. I did not confirm a thin harvest, but I did confirm the corrupted category-of-elements fact lines on the weighted-limit / ordinary-limit / connected-components chain and repaired them.

## Gate state on the current text

- Batch 2:
  - `node tools/tsx-run.mjs tools/precheck.mts ...` — clean on every changed item.
  - `node tools/proof-contract.mjs research/frontier-18-batch-2.proof-contracts.json --strict` — clean.
  - `node tools/citation-fidelity.mjs research/frontier-18-batch-2.proof-contracts.json --fail-on-missing-quote` — clean.
  - `node tools/boundary-audit.mjs research/frontier-18-batch-2.proof-contracts.json --fail-on-contradicted` — clean.
  - `node tools/coverage-checklist.mjs research/frontier-18-batch-2.coverage.json --require-destination` — clean.
  - `node tools/risk-report.mjs research/frontier-18-batch-2.proof-contracts.json --require-reviewed` — clean.

- Batch 9:
  - `node tools/proof-contract.mjs research/frontier-18-batch-9.proof-contracts.json --strict` — clean.
  - `node tools/citation-fidelity.mjs research/frontier-18-batch-9.proof-contracts.json --fail-on-missing-quote` — clean.
  - `node tools/boundary-audit.mjs research/frontier-18-batch-9.proof-contracts.json --fail-on-contradicted` — clean.
  - `node tools/coverage-checklist.mjs research/frontier-18-batch-9.coverage.json --require-destination` — clean.
  - `node tools/risk-report.mjs research/frontier-18-batch-9.proof-contracts.json --require-reviewed` — clean.

## Gate adjudication — `content-policy-items`

- `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` — `false-positive`. [CLAUDE.md](/home/lazyinspirit/Projects/prestige-math-library/CLAUDE.md:526) bans applied canonical-embedding notation around natural numbers; this item uses the canonical factor maps `\iota_1,\iota_2` of a central product on group elements `r,s`. The detector in [tools/content-policy.mjs](/home/lazyinspirit/Projects/prestige-math-library/tools/content-policy.mjs:349) matches any applied `\iota` or `\iota_1(`, so it overfires here.
- `ex-the-integers-are-quasi-isometric-to-the-real-line` — `false-positive`. The standing rule is about applied embeddings of natural numbers, while this item uses the inclusion `\iota:\mathbb Z\to\mathbb R` and the identity `g(\iota(n))=n` for integers. The same broad regex in [tools/content-policy.mjs](/home/lazyinspirit/Projects/prestige-math-library/tools/content-policy.mjs:349) flags it anyway.
- `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective` — `false-positive`. The witness uses the inclusion of the even integers into `\mathbb R`, not a natural-number embedding; the rule text does not ban `\iota(2m)` in that setting, but the detector's generic applied-`\iota` regex still matches it.
- `notation-iota-applied` detector scope — `owner-decision`. [CLAUDE.md](/home/lazyinspirit/Projects/prestige-math-library/CLAUDE.md:526) bans only applied natural-number embeddings such as `\iota(n)`, `\iota(0)`, and `\iota(k!)`, but [tools/content-policy.mjs](/home/lazyinspirit/Projects/prestige-math-library/tools/content-policy.mjs:349) currently matches `/\\iota\\s*(?:_\\{[^}]*\\}|_[A-Za-z0-9])?\\s*\\(/g`, so it also fires on the central-product factor maps and the inclusions `\mathbb Z\hookrightarrow\mathbb R` and `2\mathbb Z\hookrightarrow\mathbb R`. Re-running `node tools/content-policy.mjs research/frontier-18-batch-*.pages.json` leaves exactly the three false-positive item hits above and `content-policy: 796 scoped item(s), 3 error(s), 0 warning(s)`.

The rerun output is therefore still red, but now exactly and only for those three items: the remaining blocker is detector overbreadth, not a live content defect in batch 2.

- Round `gate-adjudication-content-policy-items-3` (2026-08-24) re-ran `node tools/content-policy.mjs research/frontier-18-batch-*.pages.json` on the current tree and reproduced the same three `notation-iota-applied` hits, with no new content-policy findings. I made no content edits in this round because the blocker is unchanged detector overbreadth rather than a live defect in the scoped items.

## Pages, items, and contracts changed

- Batch 2 items changed:
  `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`,
  `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`,
  `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets`,
  the word/path-metric and quasi-isometry cluster named in `R2-3`, `R2-4`, `LOV-1` through `LOV-5`,
  `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two`,
  `cex-a-special-p-group-that-is-not-extraspecial`,
  `fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism`,
  `ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight`,
  `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight`,
  `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing`,
  `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups`,
  `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed`,
  and the frontmatter/source adjustment on `thm-universal-property-of-the-central-product`.
- Batch 2 page bodies did not change; B-page bodies remain empty and A-page summaries still satisfy the two-paragraph/under-150-word contract.
- Batch 2 contracts and harvest changed:
  `research/frontier-18-batch-2.proof-contracts.json`,
  `research/frontier-18-batch-2.coverage.json`.
- Batch 9 items changed:
  `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements`,
  `thm-the-constant-singleton-weight-recovers-an-ordinary-limit`,
  `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements`,
  `ex-a-weighted-limit-computing-a-kernel-pair`.
- Batch 9 contracts changed:
  `research/frontier-18-batch-9.proof-contracts.json`.
- No new items were added or deleted in my 6b pass.

## Twice-touched items

- No item in batches 2 or 9 required a second Alpha repair after my own step-6 edits in this pass.
- Several items were touched first by the independent reader and then by Alpha (`thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements`, `thm-the-constant-singleton-weight-recovers-an-ordinary-limit`, `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements`, and parts of the batch-2 quasi cluster), but none reached a further third rewrite inside this stage.

## Remaining gaps

- Reader 2’s report was not full-batch coverage on its own. That gap is now closed for the high/critical set by the Lovelace/Bernoulli/Volta/Darwin refuter coverage, but I am not claiming that Reader 2 alone covered the whole batch.
- I have no unresolved mathematical blocker inside batches 2 or 9 for step 6b. The next global duties (impact, cross-batch edges, judge adjudication, receipts) belong to the lead Alpha rather than this group report.

## Gate adjudication — `finite-smoke`

I reproduced the blocker from the current tree after rebuilding `research/frontier-18-proof-contracts.json`. Every finding on my group’s batches was a real proof-contract defect rather than a mathematical defect in the authored items: three batch-2 smoke rows named `tree-characterisation` for claims that do not explicitly assert that criterion, two batch-2 rows kept a genuine `tree-characterisation` obligation but carried inexact `asserts` text, and the two batch-9 rows on `fs-every-functor-preserves-ends` kept genuine poset checks but quoted non-existent shorthand rather than the authored witness sentences. I repaired only the contracts and reran the gate clean:

`finite-smoke: 0 error(s), 22 check(s) over 20/669 item(s) carrying obligations`

### Gate findings

- `lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints` / `tree-characterisation` — `repaired` — removed the smoke row from `research/frontier-18-batch-2.proof-contracts.json`; the lemma is an existence/shortening result and does not explicitly assert the tree criterion.
- `lem-the-graph-notions-agree-with-the-published-finite-graph-theory` / `tree-characterisation` — `repaired` — removed the smoke row; the item is a dictionary between finite and unrestricted graph vocabularies, not a tree-characterisation claim.
- `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path` / `tree-characterisation` — `repaired` — kept the check and replaced `asserts` with the exact Statement wording on disk: `A simple graph is a tree if and only if each pair of vertices is joined by exactly one path.`
- `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` / `tree-characterisation` — `repaired` — kept the check and replaced `asserts` with the exact local fact line the proof uses: `A simple graph is a tree if and only if every two of its vertices are joined by exactly one path`.
- `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set` / `tree-characterisation` — `repaired` — removed the smoke row; the counterexample refutes a freeness implication and does not explicitly assert the tree criterion.
- `fs-every-functor-preserves-ends` / `monotone-map-need-not-preserve-meets` — `repaired` — kept the check and replaced `asserts` with the exact step-2.1 witness sentence `the greatest lower bound of $\phi(x)=1$ and $\phi(y)=1$ in $Q$ is $1$, while $\phi(\bot)=0$.`
- `fs-every-functor-preserves-ends` / `full-subposet-meet-differs-from-ambient` — `repaired` — kept the check and replaced `asserts` with the exact step-2.2 witness sentence naming the ambient meet `m` and the full-subposet meet `\bot`.
