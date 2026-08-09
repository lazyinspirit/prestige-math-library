# Wave 8 topology Audit-Beta findings

## Continuity checkpoint

- Current substage: A2 contract construction after the complete item, page, dependency-target, and initial literature-reading passes.
- Owned artifacts: `research/audit/wave8-topology.provenance.jsonl`, `research/audit/wave8-topology.findings.md`, and `research/audit/wave8-topology.proof-contracts.json`.
- Completed checks: all 32 scoped items read from disk; both page texts, the A-page summary, all Remarks, all 24 supplied proofs, and every declared dependency target needed for citation semantics read; reputable-literature searches completed for every provenance determination, with working-source candidates recorded.
- Open mathematical constraints: encode each fact citation with a verbatim target clause; map every numbered proof step exactly once; complete all eight boundary cases per proof; resolve and document the one presently identified citation-precision proposal without editing its item.
- Exact next action: read the contract validator and a conforming audit contract, then write and validate the 24 strict contracts before finalizing the 32-row provenance ledger and this proposal register.

## A1 provenance report

The ledger contains one row for each of the 32 manifest items. No
`established-knowledge` waiver is used, so no row depends on Alpha concurrence
for its present evidence class. All recorded source URLs returned rendered HTML
or PDF content through the model-side web route. The AMS direct article PDF
returned 403 to that route, so the Ornstein rows deliberately use the working
AMS volume landing page that identifies the paper, pages, and DOI.

Statement and evidence totals:

- 7 `literature-derived` / `exact-source`;
- 21 `ai-altered` / `semantic-source`;
- 4 `ai-generated` / `trivial`;
- 0 `established-knowledge` and 0 `none`.

Proof totals:

- 17 `ai-altered`;
- 7 `ai-generated`;
- 4 `not-supplied`;
- 4 `not-applicable`;
- 0 `literature-derived`.

Every item classification, including its proof component, is as follows.

### Literature-derived statements with exact sources

- `lem-locally-finite-unions-and-closures` — proof `ai-altered`.
- `def-paracompact-space` — proof `not-applicable`.
- `prop-compact-spaces-are-paracompact` — proof `ai-altered`.
- `prop-closed-subspaces-of-paracompact-spaces` — proof `ai-altered`.
- `lem-paracompact-hausdorff-is-regular` — proof `ai-altered`.
- `thm-paracompact-hausdorff-implies-normal` — proof `ai-altered`.
- `ex-hat-partition-of-unity-on-the-real-line` — proof `not-supplied`.

### AI-altered statements with semantic sources

- `def-cover-refinement-and-local-finiteness` — proof `not-applicable`.
- `def-partition-of-unity-subordinate-to-a-cover` — proof `not-applicable`.
- `lem-algebra-of-continuous-real-maps-on-a-space` — proof `ai-generated`.
- `lem-locally-finite-sums-are-continuous` — proof `ai-altered`.
- `lem-normalizing-a-locally-finite-positive-family` — proof `ai-altered`.
- `lem-paracompact-hausdorff-cover-shrinking` — proof `ai-altered`.
- `thm-subordinate-partitions-of-unity-exist` — proof `ai-altered`.
- `thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces` — proof `ai-altered`.
- `cor-compact-hausdorff-partitions-of-unity` — proof `ai-altered`.
- `lem-metric-open-covers-have-point-finite-refinements` — proof `ai-altered`.
- `lem-metric-point-finite-refinements-can-be-made-locally-finite` — proof `ai-altered`.
- `thm-stone-metric-spaces-are-paracompact` — proof `ai-altered`.
- `cor-metric-spaces-admit-subordinate-partitions-of-unity` — proof `ai-generated`.
- `lem-countably-compact-paracompact-hausdorff-is-compact` — proof `ai-generated`.
- `lem-regular-lindelof-spaces-are-paracompact` — proof `ai-altered`.
- `fs-paracompact-spaces-are-normal` — proof `ai-generated`.
- `fs-paracompactness-is-hereditary` — proof `ai-generated`.
- `fs-paracompactness-is-productive` — proof `ai-altered`.
- `ex-omega-one-is-not-paracompact` — proof `not-supplied`.
- `cex-paracompactness-is-not-open-hereditary` — proof `ai-generated`.
- `cex-paracompactness-is-not-productive` — proof `ai-altered`.

### AI-generated statements with trivial verification

- `rem-paracompactness-choice-and-convention-ledger` — proof `not-applicable`; this is a page-specific synthesis checked directly against its six dependencies.
- `ex-finite-partition-of-unity-on-a-compact-space` — proof `not-supplied`; the piecewise-affine formulas, sum, and two support containments were checked directly.
- `ex-locally-finite-versus-point-finite-families` — proof `not-supplied`; both exact interval families were checked pointwise and neighbourhood-wise.
- `cex-a-non-locally-finite-sum-can-be-discontinuous` — proof `ai-generated`; the support, cozero, pointwise-finiteness, and discontinuity calculations were checked directly.

The literature pass used the peer-reviewed primary Ornstein and Bacon papers,
Munkres §41 notes, University of Chicago, Rice, Wisconsin, Göttingen, Purdue,
Auburn, and CSUSM university notes, and the Encyclopedia of Mathematics where
the convention/counterexample role called for it. Per-item URLs and precise
deltas are in the JSONL ledger.

## A2 findings and proposals

### W8-TOP-B01 — stronger clause attributed to the wrong target

- Item: `lem-paracompact-hausdorff-cover-shrinking`.
- Class: **(b) citation-precision repair**.
- Status: applied at A4 after approval in `research/audit/wave8-A3.md`.
- Old fact:

  `[L1] The space is regular, and x∈O open gives open R with x∈R⊆cl(R)⊆O ([[lem-paracompact-hausdorff-is-regular]]).`

- Source check: the cited target's complete Statement is only “Every
  paracompact Hausdorff topological space is regular. No choice principle is
  used.” It does not state the closed-neighbourhood formulation. The exact
  required clause is condition (b) of
  `lem-regularity-via-closed-neighbourhoods`: for every `x∈U` with `U`
  open, there is open `V` with `x∈V⊆cl(V)⊆U`.
- Proposed frontmatter change: add
  `lem-regularity-via-closed-neighbourhoods` to `deps`.
- Proposed facts:

  `[L1] The space is regular ([[lem-paracompact-hausdorff-is-regular]]).`

  `[L3] In a regular space, x∈O open gives an open R with x∈R⊆cl(R)⊆O ([[lem-regularity-via-closed-neighbourhoods]], implication (a)⇒(b)).`

- Proposed step 1.1 citation tail:

  Old: `[A1, L1, F1, construct]`

  New: `[A1, L1, L3, F1, construct]`

No mathematical conclusion changes; the repair makes the cited dependency
state exactly the proposition used.

### W8-TOP-B02 — a true counterexample fact cites a target whose Statement is its negation

- Item: `cex-paracompactness-is-not-productive`.
- Class: **(b) citation-precision repair**.
- Status: applied at A4 after approval in `research/audit/wave8-A3.md`.
- Old dependency list: `[fs-paracompactness-is-productive]`.
- Old fact:

  `[L1] The two factors L are paracompact while L² is not paracompact ([[fs-paracompactness-is-productive]]).`

- Source check: the cited target's public Statement is “Assuming the Axiom of
  Choice, paracompactness is productive.” That is the false assertion being
  refuted, not the true proposition asserted by L1. Its Refutation proves the
  needed fact, but a dependency citation must be licensed by the target's
  primary mathematical statement; the strict contract admits no Refutation
  section as a source clause.
- Proposed dependency list:

  `[lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-paracompact, thm-normality-is-not-productive, lem-products-preserve-t0-t1-and-hausdorff, thm-paracompact-hausdorff-implies-normal, def-lower-limit-topology, def-hausdorff-space, def-axiom-of-choice, def-countable-choice]`

- Proposed replacement facts and counterexample:

  `[A1] Choice implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]).`

  `[F1] If x<y in L, then [x,y) and [y,y+1) are disjoint open neighbourhoods, so L is Hausdorff ([[def-lower-limit-topology]], [[def-hausdorff-space]]).`

  `[L1] The lower-limit line is regular and Lindelöf; under countable choice every regular Lindelöf space is paracompact ([[lem-lower-limit-line-is-regular-and-lindelof]], [[lem-regular-lindelof-spaces-are-paracompact]]).`

  `[L2] Under choice, L² is not normal ([[thm-normality-is-not-productive]]).`

  `[L3] The product of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).`

  `[L4] A paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).`

  `1.1 By [A1] and [L1], both factors L are paracompact. [A1, L1]`

  `2.1 If L² were paracompact, [F1] and [L3] would make it Hausdorff, and [L4] would then make it normal, contradicting [L2]. [F1, L2, L3, L4, step 1.1]`

  `3.1 Thus two paracompact spaces have a nonparacompact product, refuting the displayed assertion. [step 2.1]`

This is a material citation repair because the proof contract and visible proof
would change, although the counterexample and conclusion stay the same.

### Provenance retags

Class **(c)** was applied to all 32 scoped items at A4: the component-level
`provenance.statement` and `provenance.proof` values recorded in the ledger were
added, every existing `origin` field was preserved as A3 required, and the
ledger's working references were added to `sources.references` without
duplicating existing references. No scoped item had legacy `authorship`.

No class (a) unambiguous mathematical falsehood requiring repair was found. The
three false-statement items and three counterexample items correctly refute
their displayed claims. No class (d) debatable restatement is proposed.

## Proof and dependency audit conclusions

Apart from W8-TOP-B01 and W8-TOP-B02, every declared dependency target exists,
is earlier on the same page or otherwise legal in the manifest ordering, and
its on-disk primary mathematical section licenses the cited use. The ordinary
finite/empty cases in the proofs close directly under the stated definitions;
the eight-case dispositions and exact step anchors are in the proof-contract
file.

The potentially delicate arguments were checked separately:

- local finiteness passes to closures and gives the closure-of-union identity;
- the regularity and normality proofs use locally finite closure unions in the
  correct direction;
- normalization preserves cozero sets and supports because the denominator is
  everywhere positive;
- the compact finite-partition grouping uses nonnegativity plus the locally
  finite closure identity to retain support containment;
- Ornstein part (A) covers after removing the chosen-ball closures and its
  point-finiteness argument uses a nonincreasing ordinal-index sequence;
- Ornstein part (B) handles finite/infinite `rho_x`, the truncation
  `m_x=1`, and the strict radius inequalities;
- the countably compact argument produces an infinite closed discrete
  countable subset from an infinite locally finite refinement under Countable
  Choice, then applies only finite choice to the final finite refinement;
- the regular-Lindelöf difference cover handles the least index and its locally
  finite tail;
- the ordinal and lower-limit counterexamples use the hypotheses and
  separation conventions stated on disk.

The A-page summary and the choice/convention Remark were read with proof-step
suspicion. Their mathematical claims agree with the current item text and
source record. No published-claim decay was found.

## Coverage and unresolved concerns

Coverage is complete with no exception: all 32 scoped items, all 24 supplied
proofs/refutations/counterexamples, every numbered proof step, every direct fact
citation, every declared dependency target needed to check citation semantics,
all item Remarks, both page bodies, and the A-page summary were read. The strict
contract validator reports 24/24 contracts checked with zero errors and zero
warnings.

There is no unresolved mathematical truth concern. The two citation-precision
proposals were approved at A3 and applied at A4. All 32 provenance rows have
`alpha_concurred:false`, as expected at Beta proposal stage; none uses an
evidence class that requires concurrence.

## A4 application record

- `lem-paracompact-hausdorff-cover-shrinking`, class (b): replaced the old
  `[L1]` attribution of both regularity and the closed-neighbourhood clause by
  `[L1]` for regularity and new `[L3]` for implication (a)$\Rightarrow$(b) of
  `lem-regularity-via-closed-neighbourhoods`; added that dependency; and added
  `[L3]` to step 1.1. The mathematical conclusion is unchanged. The exact
  licensing clause is: for every $x\in U$ with $U$ open, there is open $V$ with
  $x\in V\subseteq\overline V\subseteq U$.
- `cex-paracompactness-is-not-productive`, class (b): replaced the old sole
  dependency and Fact citing the false displayed Statement of
  `fs-paracompactness-is-productive` with the nine true-statement dependencies
  approved at A3 and the written-out lower-limit-line argument. Under Choice,
  Countable Choice makes each factor paracompact; their product is Hausdorff;
  if it were paracompact it would be normal, contradicting the cited
  nonnormality theorem.
- Both material repairs had stale `verification.judge` and `audited` state
  removed. Their statement and proof components are `ai-altered`. The other 30
  items are pure provenance/source retags and retain their existing verification
  state.
- Corrected the evidence ledger attribution for `topology_262.pdf` from the
  University of Chicago to California State University, Northridge (CSUN).

## Continuity checkpoint — A4 finalization

Current substage: final validation after the approved A4 application. Owned
artifacts are the 32 manifest-listed item files and
`wave8-topology.provenance.jsonl`, `wave8-topology.findings.md`, and
`wave8-topology.proof-contracts.json`. The two approved citation/dependency
repairs and all 32 component provenance/source updates are applied; all
`origin` fields are preserved; only the material repairs lost stale judge and
audit state; the CSUN ledger correction is present. Reflow and precheck pass
on all 24 proof-bearing items. The strict contract check is 24/24 with zero
errors and zero warnings; scoped content, dependency, forward-reference,
external-dependency, render, and citation checks pass, with only the recorded
legacy audit-mode warnings. No mathematical constraint remains open. Exact
next action: run the final whitespace diff check and compare all scoped files
to `HEAD` to confirm 30 frontmatter-only retags and exactly two mathematical-
text changes, then report the command results.

## A4 validation record

- `node tools/proof-contract.mjs research/audit/wave8-topology.proof-contracts.json --strict`:
  24/24 contracts checked, zero errors, zero warnings.
- `tools/reflow.mts` and `tools/precheck.mts` on the 24 proof-bearing scoped
  items: all reflow outputs unchanged; precheck 24/24 clean.
- `tools/content-policy.mjs --audit --ledger` on the topology ledger and
  manifest: exit 0 for all 32 scoped items. Its four warnings are the existing
  audit-mode generation-role warnings for the convention Remark and three
  examples/counterexamples; A3 did not approve generation-role edits.
- `tools/depcheck.mjs --pending-audit-ok`: exit 0, with all references
  resolving, no cycles, and no draft items on published pages.
- `tools/fwdcheck.mjs --quiet` and `tools/extcheck.mjs --quiet`: exit 0. The
  external-dependency check retained its standing corpus-wide
  `unproved-on-published` warnings; no scoped resolution failure occurred.
- Scoped `tools/rendercheck.mjs` and `tools/citecheck.mjs` runs on all 32 ids:
  exit 0, all clean.
- `git diff --check`: exit 0.
- Direct comparison of every manifest item with `HEAD`: 32/32 changed, 30
  frontmatter-only retags, and exactly two body changes
  (`lem-paracompact-hausdorff-cover-shrinking` and
  `cex-paracompactness-is-not-productive`); 32/32 `origin` fields preserved;
  no `authorship` field present.
