# Step 3b — Amenability, Reiter nets, and Følner conditions

Run: `frontier-43-complex-representation-15`  
Pair: `amenability-reiter-nets-and-folner-conditions`  
Active continuation: `alpha-high / c394992e1208ca49` (prior attempt
`dcb003c64da27aec`, itself continuing `86c946c10dfdb195`)

## Owned inventory and checkpoints

The checklist records current authoring status. A checked box means authoring and the applicable item checks are complete; owner-held escalations remain unchecked. The dispatch-authorized local addition is called out separately because the immutable pre-author scaffold inventory and its existing-file list omit it.

### Dependency level 0

- [x] def-complex-haar-l-infinity-space (dispatch addition; engine certification pending)

- [x] lem-an-lch-group-has-an-open-sigma-compact-subgroup
- [x] lem-layer-cake-identity-for-nonnegative-integrable-functions
- [x] lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions
- [x] lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation
- [x] def-left-folner-net-for-a-locally-compact-group
- [x] def-reiter-condition-p1

### Dependency level 1

- [x] def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
- [x] def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
- [ ] lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets (owner escalation; see final disposition)
- [x] lem-folner-nets-give-reiter-nets
- [ ] lem-reiter-functions-can-be-cut-down-to-folner-sets (owner escalation; see final disposition)

### Dependency level 2

- [x] def-amenable-locally-compact-group
- [ ] lem-averages-over-probability-densities-attain-the-essential-supremum (owner escalation; see final disposition)
- [x] lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous

### Dependency level 3

- [x] lem-a-reiter-net-has-an-invariant-mean-cluster-point
- [x] lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean
- [ ] lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set (owner escalation; see final disposition)
- [x] cex-the-free-group-on-two-generators-is-not-amenable

### Dependency level 4

- [x] lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities

### Dependency level 5

- [x] lem-an-invariant-mean-produces-a-reiter-net

### Dependency level 6

- [x] lem-a-group-with-the-fixed-point-property-is-amenable
- [x] thm-amenability-is-equivalent-to-reiter-p1

### Dependency level 7

- [x] prop-compact-and-locally-compact-abelian-groups-are-amenable
- [x] thm-folner-criterion-for-locally-compact-groups
- [x] thm-hulanicki-weak-containment-criterion-for-amenability
- [x] ex-the-real-affine-group-is-amenable-and-nonunimodular

### Dependency level 8

- [x] cor-folner-sequences-for-second-countable-compactly-generated-groups (authored with the restored amenability hypothesis; owner decision held — see the continuation pass and final disposition)
- [x] thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions
- [x] ex-compact-groups-have-a-constant-reiter-net
- [x] ex-folner-sets-in-rn

## Open obligations at entry

- Read the canonical schema/workflow, current pair plan, page prose, batch
  manifests and coverage, cross-batch dependencies, Step 3a observations and
  decisions, and the named subgroup-resolution records; compare all claimed
  findings with current files.
- Read and write the first item's exact suppliers before surveying subsequent
  items or tools. Recompute each item's dependency level from its actual
  dependencies and keep item metadata, manifest, coverage, contracts, and page
  order consistent.
- The subgroup-resolution record proposes a level-0 local supplier for the
  closed-subgroup branch and resulting changes to the stability theorem. Verify
  whether those changes have already been integrated before relying on that
  record; inspect its exact cited source passages and preserve any unresolved
  supplier-use obligation.
- Audit and author all 30 assigned IDs, both pages, and item-specific proof
  contracts. Register any authorized local prerequisite additions within the
  existing A page only. Preserve sibling rows in shared batch files.
- Run all required explicit-scope authoring checks, record evidence-backed item
  decisions, and run `tools/proof-layout.mjs` once after final item edits and
  formatting, with every changed item path in one command.

## Checkpoint log

### Entry

- Verified `CLAUDE.md` and read `README.md`, `SCHEMA.md`, and `WORKFLOW.md`.
- `.autopilot/frontier-43-complex-representation-15/state.json` identifies the
  live stage as `3b-author`, with this dispatch active and no recorded engine
  blockers. The adjacent `status.md` is stale and is not used as live status.
- No item is accepted or authored by this entry checkpoint. Next action:
  reconcile the current Step 3a evidence and batch inputs, then inspect and write
  the first level-0 item from its exact suppliers.

### First-item supplier audit and local addition

- Current manifest and RG-27 source row confirm that the first assigned item is
  the complex (L^\infty(G,\mu;\mathbb C)) mean definition. Its declared
  suppliers were read in full: `def-l-infinity-on-a-measure-space` and
  `def-l-p-space-as-a-quotient-by-null-functions` explicitly construct real
  functions/classes; `def-complex-haar-lp-spaces-and-compactly-supported-functions`
  covers only (p=1,2); `def-left-haar-integral-and-left-haar-measure` supplies
  the fixed nonzero left Haar measure. The current scaffold therefore has no
  exact complex (L^\infty) supplier.
- Read the complete relevant passages in Axler, *Measure, Integration & Real
  Analysis*, §7A, Definitions 7.1 and 7.3 (printed pp. 194–195), and §7B,
  Definitions 7.15–7.18 (pp. 202–204), from the current author-hosted PDF
  (`https://measure.axler.net/MIRA.pdf`; 426 pages; SHA256
  `7a7ab07fb74f5394c3180da51875ec467a0d89627321c8b2624b6b9b9585fb4e`). These
  passages explicitly allow scalar field \(\mathbb R\) or \(\mathbb C\), define
  the essential supremum and a.e. quotient, and identify the resulting
  (L^\infty) normed space. Read BHV, *Kazhdan's Property (T)*, Appendix G,
  Definition G.1.2 and Remark G.1.3 (printed pp. 447–448; PDF pp. 453–454) for
  the mean and positive-functional norm bound.
- The current plan keeps both pages at orders 1234/1235, category
  `representation-theory`, with nine published A-page prerequisites and the
  B-page prerequisite to A. The current cross-batch dependency input is `[]`.
  The owner direction preserves arbitrary LCH groups, sup-norm UCB, nets, and
  no global measurable coset section. The Step 3a scope receipt is no longer
  sufficient as written because it missed this complex-space prerequisite.
- Authorized local repair: add `def-complex-haar-l-infinity-space` to the
  existing A page and make the original mean definition use it. The helper has
  level 0; this changes the mean definition to level 1 and requires recomputing
  all affected levels/order before continuing. No AC is used in this
  construction or in the mean-definition argument.
- Current checks at this checkpoint: source passages and direct suppliers read;
  local supplier authoring and registration are now complete. Next action:
  continue in the recalculated dependency order.

### `def-complex-haar-l-infinity-space` — complete local prerequisite

- Authored the new A-page definition at dependency level 0. It defines complex
  Borel-measurable (L^\infty(G,\mu;\mathbb C)) classes modulo almost-everywhere
  equality and proves the quotient operations are well-defined and the
  essential-supremum function is a norm. Direct suppliers are the published
  complex Haar (L^p) conventions, essential supremum, null sets, measure
  spaces, complex modulus, measurable-function closure, and left Haar measure.
- Source: Axler, *Measure, Integration & Real Analysis*, §7A Definitions 7.1
  and 7.3, pp. 194–195; §7B Definitions 7.15–7.18, pp. 202–204. The complete
  426-page current author-hosted PDF was fetched and the relevant passages read;
  local SHA256 is recorded above. The source is registered in batch-2 coverage.
- Registered the helper first in the A-page manifest and revised the original
  mean-definition scaffold to depend on it and on left Haar measure. The mean
  scaffold is now dependency level 1. Recomputed and synchronized all current
  batch-2 manifest levels; the recalculated grouped order is:
  - level 0: the new helper, `lem-an-lch-group-has-an-open-sigma-compact-subgroup`,
    `lem-layer-cake-identity-for-nonnegative-integrable-functions`,
    `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions`,
    `lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation`;
  - level 1: the mean definition, then
    `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets`;
  - level 2: amenability, Følner-net, UCB, and Reiter definitions;
  - level 3: Reiter cluster point, probability-density averages, Følner-to-Reiter,
    convolution-to-UCB, Reiter cutdown, and the free-group counterexample;
  - levels 4–9: recomputed from the current graph and retained in the manifest.
- Check: `node tools/tsx-run.mjs tools/precheck.mts
  items/def-complex-haar-l-infinity-space.md` passed (1 checked, 0 failing).
  An initial direct `node tools/precheck.mts` invocation failed because Node
  does not load `.mts` directly; the TSX-wrapper invocation passed. No item
  decision was recorded for this addition; it is outside the immutable
  pre-author inventory and will receive engine certification after dispatch.
- Choice: none used. Next action in the recalculated order:
  `lem-an-lch-group-has-an-open-sigma-compact-subgroup` (level 0).

### `lem-an-lch-group-has-an-open-sigma-compact-subgroup` — repaired and authored

- Current scaffold defect: it said an arbitrary compact neighbourhood (U)
  generates the subgroup $\bigcup_{n\ge0}U^n$, although $U$ need not be
  symmetric, and its finite-cover argument for openness incorrectly moves
  noncommuting factors across one another. Both claims in the intended result
  are true, but that proof route is invalid.
- Repair: for a compact neighbourhood (K\ni e), set (U=KK^{-1}). Inversion
  and multiplication carry compact sets to compact sets, (U) is symmetric and
  contains (K); the union of its finite powers is a subgroup. Induction and
  finite-product compactness show each power compact. Since it contains an open
  identity neighbourhood, its left translates show the subgroup is open. The
  statement explicitly defines (sigma)-compact as a countable union of
  compact subsets. The proof is choice-free; finite-product compactness uses
  only finite choice in ZF.
- Rechecked exact suppliers. Added the missing topological group, Hausdorff,
  neighbourhood, inverse-law, natural-number induction, and translation
  homeomorphism dependencies; removed `def-generated-subgroup` because the
  subgroup claim is proved directly. Dependency level remains 0.
- Rechecked the current source. The manifest's BHV locator to Appendix G,
  Proposition G.2.2(iii), is wrong: that clause concerns dense unions of
  directed families of closed subgroups. The Thomas Lecture 19 locator about
  compact test sets is also not evidence for this claim. Read BHV, *Kazhdan's
  Property (T)*, Chapter 1 §1.3, the complete proof of Theorem 1.3.1 (printed
  pp. 41–42), and Chapter 3 §3.2's opening remark (printed p. 152). The first
  passage states the locally compact group is covered by open compactly
  generated subgroups and that subgroups generated by nonempty open sets are
  open; the second states compactly generated LCH groups are (sigma)-compact.
  The item now cites only these relevant BHV passages, and the matching item
  coverage row was added.
- Check: `node tools/tsx-run.mjs tools/precheck.mts
  items/lem-an-lch-group-has-an-open-sigma-compact-subgroup.md` passed
  (1 checked, 0 failing). No decision was recorded yet; full scoped checks and
  item decision follow after all required authoring.
- Choice: none. Next action in recalculated order:
  `lem-layer-cake-identity-for-nonnegative-integrable-functions` (level 0).

### `lem-layer-cake-identity-for-nonnegative-integrable-functions` — repaired and authored

- The statement and local proof retain arbitrary measure spaces (X) and do
  not assume (\mu) is globally (\sigma)-finite. The proof forms
  (S=\{f+g>0}); Chebyshev–Markov bounds its explicit level-set cover by
  finite-measure sets. The product-measurable threshold set is written as a
  countable union/intersection of measurable rectangles, and Tonelli is then
  applied only to (S\times\mathbb R), where both measures are
  (\sigma)-finite. The scalar threshold identity supplies the integrand
  equality, and setting (g=0) gives the norm formula.
- Source audit: read the full BHV Appendix G Lemma G.5.2 proof (printed
  pp. 467–468) and Anne Thomas Lecture 19 slides 12–13. Both stated lemmas hold
  for arbitrary measure spaces, but their proofs invoke Fubini without stating
  the needed (\sigma)-finiteness or restricting to the (L^1)-support. The
  library Tonelli supplier requires (\sigma)-finite spaces. The local support
  reduction above repairs this proof gap; no uncertainty remains.
- Choice: the layer parameter uses the library's Carathéodory Lebesgue measure
  on (\mathbb R), whose construction as a countably additive
  (\sigma)-finite measure assumes only the Axiom of Countable Choice
  ((\mathrm{AC}_\omega)). This exact assumption is stated in the item and
  declared in `deps`/`axiom_use`; no full AC or DC is used. The current graph
  gives direct consumer
  `lem-reiter-functions-can-be-cut-down-to-folner-sets` and transitive
  consumers `thm-folner-criterion-for-locally-compact-groups`,
  `cor-folner-sequences-for-second-countable-compactly-generated-groups`, and
  `ex-folner-sets-in-rn`. Their actual proof uses and axiom contracts remain to
  be checked when those items reach their recomputed authoring turn.
- Updated the A/B batch coverage source wording to record the actual Fubini
  arguments and the local (\sigma)-finite support repair. Manifest level
  remains 0; no in-run dependency edge changed.
- Check: `node tools/tsx-run.mjs tools/precheck.mts
  items/lem-layer-cake-identity-for-nonnegative-integrable-functions.md` passed
  (1 checked, 0 failing). No item decision was recorded yet; complete scoped
  batch checks and evidence-backed decisions remain for handoff.
- Next action in dependency order:
  `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions` (level 0).


### lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions — repaired and authored

- The original claim omitted Hausdorffness although the library explicitly
  defines it as a separate hypothesis for locally convex TVSs, and the proof
  concludes equality from continuous-dual separation. The omission is
  substantive: give V=R the indiscrete topology, take X=V, and let G=(R,+) act
  by translations. The topology is locally convex and compact; every map into X
  is continuous, and the action is affine, but no point is fixed by translation
  by 1. The item now states Hausdorffness explicitly.
- Choice is stated explicitly. Full AC is used only to obtain the real HB
  dominated-extension principle from the Zorn-based theorem, which supplies
  the hypothesis of the continuous-dual separation supplier at the final
  fixed-point contradiction. Averaging, finite sums, compactness/FIP, and
  reciprocal estimates use no choice. The proof does not select a simultaneous
  sequence of preimages: for each arbitrary n it uses the existential
  membership x_0 in A_n(g)(X) only to derive the same bound.
- Read BHV, Kazhdan's Property (T), Appendix G, Theorem G.2.1 and its complete
  proof (printed pp. 450–451; PDF pages 456–457 in the complete local copy
  /tmp/prestige-kazhdan-total.pdf, SHA256
  0281823290dfb42efc0542705b4f232f9e3d9186e945914ffb65b59db790c889). The
  source states “locally convex” and its proof concludes using dual separation;
  this library's split TVS convention requires making Hausdorffness explicit.
- Audited the exact local suppliers for AC-to-HB, the real/complex locally
  convex TVS and convex-combination conventions, compact images, compact
  closedness in the Hausdorff subspace X, the closed-set FIP, dual separation,
  finite sums, reciprocal order, and the reciprocal Archimedean estimate.
  Expanded the item and manifest dependencies accordingly; the item remains
  level 0. Updated the manifest statement, strategy, source locator, and
  axiom_use, plus the BHV coverage descriptions.
- The proof has five complete, separately paragraphed steps and an explicit
  epsilon estimate for 2C/(n+1). The first explicit-path precheck reported its
  expected numbering repair; the canonical sequence was adopted and rechecked:
  node tools/tsx-run.mjs tools/precheck.mts
  items/lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions.md
  passed (1 checked, 0 failing). Explicit rendercheck passed for this item.
  No current item decision is recorded yet; strict contract and full batch
  gates remain for handoff.
- Next action in dependency order: author
  lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation (level 0).


### lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation — authored and checked

- Rechecked the named subgroup-resolution finding against current carriers. The
  A-page manifest and research/plan-spec.json both declare the backward
  prerequisite induced-unitary-representations-of-locally-compact-groups
  (supplier order 1226 before this page at order 1234); the pair's current
  cross-batch item-dependency input remains empty, so no edge or page addition
  was needed. The live manifest row was already before the stability theorem.
- The resolution record's six source-input hashes match the current files:
  rho existence 6fb964082f53d19ef4a12be7e0e4b853c5c58396a1f4f501591051e92f9b5afa;
  Weil formula 26f26119ed4186c283dcff757bdf0844edfb47864a1541c952dcaebf2bd1bbf7;
  compact quotient lifts 11c29b6eab97c87d0b9f6f2e776c691fd3ab12d933e0da10947dcff61b70b269;
  compact-kernel integration e7dc7e05a03f3fa1167579863ca0917519c688166e64160a60f364365ad993e4;
  Haar inversion ef7c15000442b5bbe42eeb0e2e25827a54e9b684c3fb4eed3e580c265885c294;
  complex Haar L1/L2 density 0916108d2036bfe490593cd8f4d2a4665191c128055dcda8aac595c1a255271e.
  I also read the complete current direct-supplier items for rho covariance,
  left/right regular representations, their strong continuity, the modular
  function, finite-sum weak containment, and Cauchy-Schwarz. Their claims and
  hypotheses match the local uses; no unfinished sibling supplier is involved.
- Read the complete BHV Proposition F.1.10 proof (Appendix F, printed p. 426 / PDF
  p. 432), Proposition A.4.1 (printed p. 323 / PDF p. 329), and Theorem B.1.4
  (printed p. 347 / PDF p. 353) from the complete local author-hosted PDF at
  https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf (523 pages, SHA256
  0281823290dfb42efc0542705b4f232f9e3d9186e945914ffb65b59db790c889). The
  complete F.1.10 coefficient formula is reproduced and independently checked.
  The local proof supplies the compact quotient-support bound, joint
  continuity, finite Borel-partition approximation, explicit inversion
  intertwiner, and the final C_c-density estimate omitted by the short source
  argument. No global measurable section, direct integral, or sigma-finite
  product decomposition is used.
- The item explicitly assumes AC, declares its inherited uses through the
  rho/Weil, quotient, kernel, inversion, regular-representation and C_c-density
  suppliers, and has dependency_level 0. Its 28 frontmatter dependencies
  exactly match the manifest entry. The coverage rows for both paired pages now
  record the compact-support partition and left/right-intertwiner expansions.
- Proof, registration, and source entries are authored. Explicit reflow left
  the six complete proof steps in separate paragraphs; explicit-path precheck
  passed (1 checked, 0 failing), and explicit rendercheck passed with KaTeX and
  YAML. The proof's coefficient identity, empty test set, zero-measure support,
  finite partition and epsilon estimates were checked directly. No item decision
  is recorded yet; contracts and the final batch gates remain.
- Two published text/proof issues found while checking suppliers are reported
  for owner follow-up. First, in
  def-weak-containment-of-unitary-representations, the transitivity argument
  chooses tolerance epsilon/(2n) after an approximating finite sum indexed by
  n; it does not handle n=0 (the empty coefficient sum), where that division is
  undefined. The transitivity claim remains true: if the first approximation
  uses the empty sum, its coefficient is already within epsilon/2 of zero on
  Q, so one zero vector in the final representation supplies the needed
  approximation; otherwise the finite-n argument applies. The future
  stability-theorem clause (i) must use this case split or an equivalent local
  proof, rather than citing the published remark without the boundary case.
  Second, the inversion supplier
  lem-haar-change-of-variables-under-inversion has the malformed phrase
  “In particular sigma e0” at proof step 2.1 (the file's line 73); the argument
  needs sigma nonzero there to call it right Haar. This is a confirmed text
  defect, likely a lost inequality symbol; the requested repair is to write
  sigma != 0 and retain the subsequent nonzero-measure justification. I checked
  the two inversion identities used here independently, and neither issue
  leaves uncertainty in the authored lemma.
- Next action in the recomputed dependency order: author def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group (level 1).


### Recomputed inventory reconciliation

- The live batch-2 manifest confirms the local complex L-infinity addition moves
  def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group from its
  pre-addition level 0 to level 1. This original assigned item remains
  unauthored and is next. The updated inventory above now matches the current
  manifest: level 1 contains that mean definition and the finite-positive-Haar-
  subset lemma; the amenability, Folner, UCB, and Reiter definitions are level 2;
  subsequent assigned levels run from 3 through 9 as shown. My prior checkpoint
  sentence naming def-amenable-locally-compact-group as the next level-1 item
  was incorrect and is superseded by this graph recount.


### def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group — authored and checked at recomputed level 1

- The current manifest row, not the pre-addition dispatch label, puts this
  original item at level 1 because it depends on the new level-0
  def-complex-haar-l-infinity-space supplier. That supplier is fully authored
  and its definition, norm, and complex-class construction were read and
  checked provisionally. The consumer uses its carrier and norm in the
  statement, class translation and essential-supremum isometry in proof step
  1.1, complex modulus/classes in step 1.2, and the threshold-bound and
  constant-one norm in step 2.1. The helper is an authorized addition and will
  receive engine certification after successful dispatch; it is not put through
  a self-review loop.
- Read the full BHV Definition G.1.2 and Remark G.1.3 (printed pp. 447–448; PDF
  pp. 453–454), Anne Thomas Lecture 19 (PDF p. 2 for the real-valued invariant
  mean definition and p. 9 for the mean on L-infinity and its unit-ball bound),
  and Daws–Runde, arXiv:0705.3432v5, Introduction p. 1 (amenability as an
  invariant state on complex L-infinity). The MIRA §7A Definitions 7.1/7.3
  (printed pp. 194–195) and §7B Definitions 7.15–7.18 (printed pp. 202–204)
  supplying the local complex L-infinity prerequisite were reread. BHV and
  Daws–Runde support the complex-functional convention; Thomas is real-valued,
  and the item proves the complex extension directly by rotating m(f) to the
  positive real axis.
- Corrected a source-locator error inherited from the scaffold: Thomas Lecture
  19 slides 2–6 / PDF pp. 1–6 did not include the cited L-infinity mean
  definition and norm bound. The item and batch coverage now point to PDF pp. 2
  and 9 for the actual statements.
- Direct suppliers were audited: the complex L-infinity helper, fixed left Haar
  measure, topological-group translations, Borel preimages, and complex
  conjugation/modulus laws. The group translations preserve null sets and
  superlevel measures by left Haar invariance; the complex phase argument gives
  |m(f)| <= m(|f|), and essential-supremum threshold bounds give
  m(|f|) <= ||f||infinity m(1). Therefore every positive functional has
  ||m||=m(1), establishing both norm-one directions, including ||1_G||=1 from
  nonzero Haar measure. No Choice principle is used.
- Registered matching 12 frontmatter/manifest dependencies at dependency_level
  1. Explicit-path precheck passed (1 checked, 0 failing); explicit rendercheck
  passed with KaTeX and YAML. No item decision is recorded yet; item contract
  and full batch gates remain.
- Next action in recomputed dependency order: author
  lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets
  (level 1).


### lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets — confirmed false under the current Haar convention; escalated

- The level-1 scaffold promises that every positive-measure Borel subset for
  every LCH group's left Haar measure contains a Borel subset of finite,
  strictly positive measure. The authored statement cannot be proved as
  written, and I did not create an item file or replace its claim.
- Counterexample: let (D=(\mathbb R,+)) with the discrete topology,
  (G=\mathbb T\times D), and (A=\{1\}\times D). This is an LCH group and
  (A) is closed Borel. In each compact coset (K_d=\mathbb T\times\{d\}),
  all singleton masses are equal by left invariance. The coset has finite
  Haar measure and contains arbitrarily large finite sets, so each singleton
  has measure zero. If (B\subseteq A) is Borel and meets only countably many
  cosets, it is a countable union of these null singletons and has measure
  zero. If it meets uncountably many cosets, every open (U\supseteq B)
  contains a nonempty open slice in every one of those cosets. Each slice has
  positive measure by
  `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`.
  An uncountable family of positive slice measures has finite partial sums
  arbitrarily large: for some (n\ge1), infinitely many slices have measure
  at least (1/n). Hence every such (U) has infinite measure, and outer
  regularity of the current Haar measure gives \(\mu(B)=\infty\). Thus every
  Borel subset of (A) has measure either zero or infinity; no finite
  positive subset exists. The same argument gives \(\mu(A)=\infty\), so this
  is a positive-measure counterexample.
- Audited the scaffold's proposed transversal construction. Its uncountable
  sum assigns zero to (A), but the resulting measure is not outer regular
  for the topology on (G); the uniqueness theorem for left Haar measure
  cannot identify it with the regular Haar measure used by this library.
  The strategy also invokes full AC to select a transversal without listing
  `def-axiom-of-choice` as a dependency. These are defects in the route, but
  the counterexample independently refutes the promised claim even if full
  AC is granted.
- Source audit: BHV, *Kazhdan's Property (T)*, Appendix G, Exercise G.6.2
  (printed pp. 471–472; PDF pp. 477–478 in the complete local copy noted
  above) asks for weak-star density and supplies no proof of this finite
  positive subset assertion. Thomas, Lecture 20, PDF p. 8, invokes
  Hahn–Banach for density but does not prove the missing semifiniteness
  claim. The current
  `def-radon-measure-on-an-lch-space` explicitly provides compact finiteness,
  outer regularity on Borel sets, and inner regularity on open sets, not
  compact inner approximation on arbitrary Borel sets; that distinction is
  exactly where the proposed repair route fails.
- The direct manifest consumer is
  `lem-averages-over-probability-densities-attain-the-essential-supremum`.
  Its current manifest strategy's reverse-bound clause takes
  \(A=\{h>\|h\|_\infty-\delta\}\), calls this lemma to obtain finite
  positive \(B\subseteq A\), and normalizes \(1_B\). That consumer's item
  file has not been authored, so there is not yet a numbered consuming proof
  step to cite; when authored, it must state and escalate the exact step rather
  than silently use this false assertion. Independently, for \(h=1_A\),
  \(\|h\|_\infty=1\), while every nonnegative \(L^1\) probability density
  integrates to zero on \(A\): each Borel level set
  \(A\cap\{f>1/n\}\) has measure zero or infinity, and the latter would
  contradict integrability. Thus the direct consumer's promised supremum is
  also false for this group. Its downstream weak-star-density and topological
  mean-to-Reiter routes remain open pending their own assigned audits.
- Current item decision is not recorded: the pair's scope decision must first
  be refreshed after the registered helper and dependency changes. Once the
  scope gate permits item decisions, record this original scaffold ID as
  `escalate` with its exact current dependency list and this counterexample.
  Owner action required: decide whether the foundational Haar/L-infinity
  conventions or the promised theorem and affected consumers are to change;
  this assignment does not authorize either scope change. Until then, leave
  this item and its false direct consumer unresolved.
- Checks: no item file exists; no precheck or rendercheck is applicable. No
  acceptance decision is claimed. The level-1 authored mean definition is
  already prechecked and rendered; the next valid independent assigned item
  is `def-amenable-locally-compact-group` (recomputed level 2).


### def-amenable-locally-compact-group — authored at recomputed level 2

- Exact claim/convention: a locally compact Hausdorff group is amenable when
  it admits a left-invariant mean on the complex (L^\infty(G,\mu)) space
  and left translation convention from
  `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group`. There
  are no countability, discreteness, compactness, or unimodularity hypotheses.
  Positive rescaling of Haar measure preserves its null sets, the almost-
  everywhere classes, and essential-supremum norm, so the definition is
  normalization-independent. This corrects the manifest strategy's false
  assertion that rescaling $\mu$ rescales the $L^\infty$ norm.
- Exact direct supplier: `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group`
  (level 1), whose mean is a positive complex-linear functional normalized at
  (1_G); the definition adds invariance under (L_g f(x)=f(g^{-1}x)).
  No additional result or Choice is used.
- Read the complete relevant BHV Appendix G.1 passage, Definition G.1.2 and
  Remark G.1.3 (printed pp. 447–448), Definition G.1.4 (printed p. 448), and
  Remark G.1.6 (printed p. 449), from the 523-page author-hosted PDF
  `https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf`; G.1.4 uses
  invariant means on UCB(G), which is not silently substituted for this
  item's L-infinity definition. Also read Daws–Runde, *Reiter's properties
  (P1) and (P2) for locally compact quantum groups*, arXiv:0705.3432v5,
  Introduction, printed p. 1: for locally compact groups the definition is
  an invariant state on complex L-infinity(G). These source conventions match
  the local supplier and assigned statement.
- Authored `items/def-amenable-locally-compact-group.md`; matching manifest
  dependencies remain the single earlier mean supplier, and manifest level 2
  is unchanged. Corrected the manifest strategy and both A/B coverage source
  rows to state the actual normalization argument and distinguish the BHV
  UCB formulation from the Daws–Runde L-infinity formulation. The assigned
  claim is unchanged. Axiom contract: no choice principle is used.
- Checks: explicit-path precheck returned `0 checked, 0 failing — all clean`
  (definition has no proof phase); explicit rendercheck passed, including
  KaTeX and YAML. No current item decision is recorded yet; the pair scope
  decision needs refreshing before item decisions and the final contracts and
  batch gates remain outstanding.
- Open obligation remains the false finite-positive-subset lemma and its
  direct average-supremum consumer, escalated above. Next assigned item in
  exact tie order: `def-left-folner-net-for-a-locally-compact-group` (level 2).


### def-left-folner-net-for-a-locally-compact-group — authored; dependency level recomputed to 0

- The audited statement fixes a left Haar measure and defines the left Følner
  condition by Borel sets (F) with (0<\mu(F)<\infty), using the ratios
  (\mu(gF\triangle F)/\mu(F)) for (g\in Q). It includes the net
  formulation with an explicit eventual uniform-on-compact quantifier, the
  identity-containing compact reduction, and the empty test (Q=\varnothing)
  (defined as discrepancy zero). The ratio lies in ([0,2]) by left
  invariance and subadditivity.
- Direct suppliers actually used: `def-left-haar-integral-and-left-haar-measure`
  for Borel left invariance and the group topology, and
  `def-directed-set-and-net` for directed-preorder indexing. The scaffold also
  listed the left-invariant-mean definition, but the Følner condition and its
  net formulation do not use means. I removed that extraneous edge and added
  the exact net supplier. This changes the manifest level from 2 to 0; item
  metadata and manifest now agree. No earlier authored item uses this
  definition, so the earlier mean and amenability proofs remain independent
  of it.
- The equivalence is proved locally. The set of all triples
  ((Q,\varepsilon,F)) with (F) a witness is ordered by test-set inclusion
  and decreasing tolerance; every pair has an upper bound by applying the
  condition to the union compact set and minimum tolerance. The third
  coordinate is therefore a net and eventually meets each compact estimate.
  Because each index contains its witness, this proof requires no global
  choice function. Read the exact BHV statement, *Kazhdan's Property (T)*,
  Theorem G.5.1(ii), printed pp. 466–468, and Remark G.5.3, p. 469, from the
  complete 523-page author-hosted PDF; G.5.1(ii) states the Borel-set
  left-Følner estimate, while the net equivalence is proved locally. Read
  Thomas, Lecture 19, PDF pp. 2–3, for the Følner–Greenleaf equivalence
  statement and its left-translate/compact-test convention.
- Updated the item, A-page manifest row, and both coverage records. The
  original statement is preserved, with the empty-test and net-indexing
  conventions made explicit. Axiom contract: no choice principle is used.
- Checks: first explicit precheck found the wrapped-step format
  `untagged-steps`; `reflow.mts` put each complete step on one physical line,
  and precheck proposed canonical numbering `2.1` for the converse phase. I
  adopted that numbering and reran explicit-path precheck (1 checked, 0
  failing). Explicit rendercheck passed (KaTeX and YAML). The full run-wide
  dependency-level check still reports unrelated sibling rows; this item's
  level itself is 0 and is not among the reported mismatches. Final contracts,
  pair decisions, and batch gates remain outstanding.
- The earlier checkpoint calling this a level-2 item is superseded by the
  audited dependency set above. With level 0 items complete, the next assigned
  item in recomputed dependency order is
  `def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group`
  (currently level 2, after the already-authored amenability definition).


### def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group — authored at recomputed level 1

- The item defines UCB using actual bounded complex-valued functions and the
  sup-norm limit (\|L_x\varphi-\varphi\|_{\sup}\to0) as (x\to e), with
  (L_x\varphi(y)=\varphi(x^{-1}y)). It proves continuity, closed linear
  subspace structure, translation invariance, joint continuity of the action,
  and the canonical isometric injection into the complex (L^\infty(G,\mu))
  class space. Full Haar support proves that a continuous function vanishing
  almost everywhere vanishes everywhere; the proof treats the zero-supremum
  case separately.
- Re-audited all original scaffold suppliers. The listed
  `def-l-infinity-on-a-measure-space` is explicitly real-valued, while the
  actual-function statement and embedding are complex; the mean definition
  does not occur in the UCB claim. Replaced those unused/inexact edges with
  the exact direct suppliers: `def-left-haar-integral-and-left-haar-measure`
  for the topological group and fixed measure,
  `def-complex-haar-l-infinity-space` for complex Borel classes and norm,
  `thm-continuous-preimages-of-borel-sets-are-borel` for measurability, and
  `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`
  for full support. The A-page item and manifest now match at dependency level
  1. No Choice principle is used.
- Read BHV, *Kazhdan's Property (T)*, Appendix G.1's complete relevant passage
  (printed pp. 447–449), including the bounded-function UCB definition and
  orbit-map characterization on p. 448. Read Thomas, Lecture 20, the UCB
  definition and action-invariance passage (PDF pp. 5–6; file pages indexed
  4–5). Thomas phrases UCB as an L-infinity-class orbit-continuity subspace;
  the assigned scaffold instead promises the actual-function model and its
  injection. I proved the latter and do not claim every orbit-continuous
  L-infinity class has a continuous representative. This distinction is
  recorded in the item sources and coverage wording.
- Updated the original dependencies, exact source locators, and A-page
  coverage entry while preserving the companion row. Recomputing the current
  A/B graph moves `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous`
  from level 3 to level 2 and
  `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean` from level 4
  to level 3. Both manifest labels were updated; the pair-only dependency
  calculation now reports no level mismatches. These downstream items remain
  unauthored and will be handled at their recomputed turns.
- Checks: explicit-path precheck first requested canonical phase numbering;
  after adopting `1.4` for translation invariance and `2.1` for joint
  continuity, precheck passed (1 checked, 0 failing). Explicit rendercheck
  passed (KaTeX and YAML). No item decision is recorded yet; pair scope,
  contract, and batch checks remain pending.
- The earlier level-2 next-action note is superseded by the dependency
  recalculation. The next assigned item in recomputed order is
  `def-reiter-condition-p1` (level 2); the finite-positive-subset lemma stays
  escalated and must not be used to justify an average-supremum proof.


### def-reiter-condition-p1 — authored; dependency level recomputed to 0

- Exact convention: (\mathcal P=\{f\in L^1(G):f\ge0,\|f\|_1=1\}), with
  nonnegativity meaning a real nonnegative almost-everywhere class and
  (L_gf(x)=f(g^{-1}x)). The single-set condition is quantified over every
  compact (Q) and (\varepsilon>0); the discrepancy is the supremum of
  ({0\}\cup\{\|L_gf-f\|_1:g\in Q\}), so it is finite in ([0,2]) and
  equals zero for (Q=\varnothing). The net formulation is given by its
  explicit compact-uniform eventual quantifier. The set (\mathcal P) is
  convex and preserved onto itself by each left translate.
- Read the original direct suppliers. The Lp item gives complex (L^1) a.e.
  classes and the norm; the fixed Haar definition gives left invariance; the
  continuous-preimage item makes left translations Borel; the
  measure-preserving integral theorem gives choice-free L1 invariance; the
  L1 linearity theorem supplies convexity; and the directed-preorder item
  defines nets. I removed the scaffold's unused mean-definition edge and its
  strong-continuity lemma edge. The latter imports full AC through Cc-density,
  which is unnecessary here: the present definition uses only Haar
  measure-preservation and a witness-indexed net. The new direct dependencies
  are exactly those used by the local proof; no Choice principle is used.
- The net equivalence is proved directly. From a net, one eventual index for a
  fixed compact set and tolerance supplies a single witness. Conversely, use
  all triples ((Q,\varepsilon,f)) where (f) is a witness, ordered by
  inclusion of (Q) and decreasing tolerance. The condition at \(\{e\})
  ensures this directed preorder is nonempty; a union compact set and minimum
  tolerance give upper bounds. Its third-coordinate family is the required
  net, and the construction uses no global choice function.
- Read the statement of BHV, *Kazhdan's Property (T)*, Theorem G.3.1(iii),
  including the (L^1(G)_{1,+}) convention and compact-uniform bound
  (printed pp. 453–454) in the complete author-hosted PDF. Read Thomas,
  Lecture 19, the definition of (L^1(G)_{1,+}) and Reiter's Property
  (PDF p. 11, file page indexed 10), and Daws–Runde, Section 1, printed p. 2,
  defining (P_p) and specializing to (p=1). The source conventions match
  the item; the empty-test value and choice-free net indexing are proved
  locally.
- Updated the item, A-page manifest dependency set, and A/B coverage entries.
  The original mean and strong-continuity dependency edges were removed after
  confirming they were not used; exact integration and net suppliers were
  added. This moves the item from level 2 to level 0. The pair-only graph
  recalculation moved `lem-folner-nets-give-reiter-nets` and
  `lem-reiter-functions-can-be-cut-down-to-folner-sets` from level 3 to 1,
  `lem-averages-over-probability-densities-attain-the-essential-supremum`
  from 3 to 2, the weak-star density lemma from 4 to 3, and the downstream
  suffix through level 8 down one level. Every owned row now matches its
  computed level; no cross-batch edge changed.
- Checks: explicit-path precheck passed after adopting its dependency-layer
  numbering (1.1,1.2,2.1,3.1) (1 checked, 0 failing). Explicit rendercheck
  passed with KaTeX and YAML; manifest and coverage JSON parse. The
  pair-filtered dependency-level calculation returned no errors. No item
  decision is recorded yet; pair scope, contracts, and final batch gates
  remain outstanding.
- The earlier checkpoint naming Reiter as a level-2 item is superseded. The
  finite-positive-subset lemma remains escalated at level 1. After that held
  item, the next assigned independent item in the recomputed order is
  `lem-folner-nets-give-reiter-nets` (level 1); its authored suppliers are
  `def-left-folner-net-for-a-locally-compact-group` and
  `def-reiter-condition-p1`.


### lem-folner-nets-give-reiter-nets — authored at recomputed level 1

- Exact claim: for each Borel Følner set (F) with (0<\mu(F)<\infty),
  (f_F=\mu(F)^{-1}\mathbf1_F) is a nonnegative unit (L^1) class and
  (\|L_xf_F-f_F\|_1=\mu(xF\triangle F)/\mu(F)) for every (x\in G).
  This equality gives both the net implication and the single-set
  Følner-condition implication to Reiter (P1). Positive finite measure makes
  the denominator valid; left invariance bounds the symmetric-difference
  measure by (2\mu(F)), and the indicator integral is finite.
- Exact dependencies used: the authored Følner and Reiter definitions; the
  complex Haar (L^1) classes; left Haar invariance; Borel measurability of
  indicators and their left translates; and the simple-function integral
  formula. The old scaffold's real-valued (L^p)-quotient dependency was
  removed because the current complex Haar (L^1) supplier gives the actual
  space. The proof requires no strong-continuity theorem, so no AC assumption
  is imported from the unused strong-continuity lemma. Dependency level 1
  matches the manifest and pair graph.
- Read BHV, *Kazhdan's Property (T)*, Appendix G.5, the complete first
  paragraph of the proof of Theorem G.5.1 (printed p. 467): it computes the
  normalized indicator translation and the exact symmetric-difference norm.
  Read the full theorem statement around printed pp. 466–468 as context; the
  Reiter (P1) definition at Theorem G.3.1(iii), printed pp. 453–454, was also
  reread. I checked the local class well-definedness, indicator integrability,
  denominator, finite symmetric-difference measure, and both net and
  single-set conclusions directly.
- Updated the item, manifest dependencies and proof strategy; both A/B source
  coverage rows already map the BHV G.5 first-paragraph formula. The item
  changes the scaffold's general “measurable” set to Borel, matching the
  library's Borel Haar measure and the authored Følner definition. This does
  not use the false finite-positive-subset result.
- Checks: an initial explicit precheck found an untagged wrapped step because
  the proof contained a display formula; I changed that equality to inline
  math and ran the formatter. Explicit-path precheck then passed (1 checked,
  0 failing); explicit rendercheck passed (KaTeX and YAML); the pair-only
  dependency calculation has no level mismatch. No item decision is recorded
  yet; pair scope, contracts, and final batch gates remain pending.
- Next assigned item in the recomputed dependency order:
  `lem-reiter-functions-can-be-cut-down-to-folner-sets` (level 1). The
  false finite-positive-subset lemma remains held; this independent item will
  be audited without relying on it unless its actual proof requires it.


### lem-reiter-functions-can-be-cut-down-to-folner-sets — proof route escalated; claim not certified

- The scaffold promises the quantitative statement for an arbitrary compact
  (Q\) with (\mu(Q)>0), using Reiter error on (Q^2), and its strategy
  follows the Reiter-implies-Følner proof of BHV Theorem G.5.1. The complete
  source proof explicitly takes (Q\) compact **containing the identity**
  (printed pp. 467–469); the current item statement does not impose that
  hypothesis.
- The scaffold's key claim (Q\subseteq AA^{-1}) is justified by the bound
  (\mu(Q)=\mu(xQ)\le\mu(xK\cap K)) for (K=Q^2). This inclusion needs
  (e\in Q), because (xQ\subseteq xQ^2\) is used. Concrete failure of the
  claimed lower bound without that hypothesis: in (G=(\mathbb R,+)), take
  (Q=[1,2]) and (x=3/2). Then (K=Q^2=[2,4]), while
  (xK\cap K=[7/2,4]) has measure (1/2<\mu(Q)=1). This disproves the
  strategy's stated inequality, but it does not by itself refute the lemma's
  conclusion; I have not established a counterexample to the quantitative
  claim by another route.
- The direct consumer is `thm-folner-criterion-for-locally-compact-groups`;
  its current manifest route invokes this lemma in the Reiter-to-Følner
  direction. The consumer item file and numbered proof step are not yet
  authored, so its exact consuming step must be flagged when that theorem is
  reached. A valid remedy for the theorem-level direction is to use a compact
  identity-neighborhood containing the target compact set and choose the
  Reiter function for its square. That does not prove the stronger auxiliary
  arbitrary-(Q) quantitative statement as currently promised.
- I did not create an item file or represent the unresolved claim as proved.
  Owner decision required: either approve a statement correction adding the
  identity-containing hypothesis to this auxiliary lemma while retaining the
  arbitrary-target Følner criterion via the separate enlargement argument,
  or supply/authorize a proof of the original stronger quantitative claim.
  This authoring assignment does not authorize silently narrowing it. Keep the
  item escalated; continue independent assigned items. No precheck or
  rendercheck applies while no item proof has been authored. No item decision
  is recorded; the pair scope review is still required before item decisions.
- The source and supplier audit also confirms that the eventual proof uses the
  current AC\(_\omega\)-conditional layer-cake lemma and Tonelli on the finite
  compact measure and sigma-finite Lebesgue parameter. I will audit product
  measurability and each axiom use before any completion claim. The next
  independent assigned item is `lem-averages-over-probability-densities-attain-the-essential-supremum`
  (recomputed level 2); it has a separate confirmed counterexample recorded
  above and will also remain escalated.


### `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous` — authored at recomputed level 2

- Exact claim: for fixed left Haar measure and AC, the formula
  `(f*phi)(x)=integral f(y)phi(y^-1 x)dmu(y)` defines a representative-independent
  actual bounded continuous function for `f in L1` and `phi in L-infinity`; it
  has the stated sup bound and left-translation defect estimate, belongs to the
  actual-function `UCB(G)`, is bilinear, satisfies
  `L_g(f*phi)=(L_g f)*phi`, and is associative as `(f*b)*phi=f*(b*phi)`.
- Exact suppliers read: the current actual-function UCB definition; the local
  complex Haar L-infinity and L1 conventions; left Haar invariance; the
  inversion change-of-variables identity; strong L1 left-translation
  continuity; the extended L1 convolution and its norm bound; Cc density; and
  Fubini on sigma-finite products. In particular, the published L1-convolution
  definition does not claim a pointwise integral representative for a general
  L1*L1 class; the proof only uses its class-level extension and proves the
  L1-L-infinity pointwise formula directly.
- Proof route: for each x, the exceptional pullback of a Haar-null set under
  `y -> y^-1 x` is `x N^-1`, null by inversion followed by left invariance.
  Essential bounds then give pointwise integrability, independence of both
  representatives and the exact sup bound. A left-Haar substitution yields
  equivariance and the defect estimate. For compactly supported f,b, a finite
  Borel partition approximates the continuous kernel `b(y^-1 z)` uniformly on
  compact parameter sets; after this approximation Fubini applies to finite
  sums of product-measurable functions on finite compact restrictions. The
  L1 convolution bound and the smoothing bound extend associativity by Cc
  density. No global sigma-finiteness or product-Borel assumption is used.
- Sources checked online: BHV, *Kazhdan's Property (T)*, Appendix G §G.3,
  printed p. 453 (author PDF p. 458), states the smoothing membership in
  `UCB(G)`; Thomas, Lecture 20, UCB smoothing lemma, PDF p. 13 (slide labelled
  10), states the same for probability densities. These source statements do
  not supply the representative-independence, actual-function, norm, defect,
  or associativity details proved locally.
- Exact Choice use: AC is inherited through published strong L1 translation
  continuity and the extended L1 convolution/Cc density suppliers. The finite
  partition proof uses only finite choice. The unused mean-definition edge was
  removed. Direct dependency registration now includes the complex
  L-infinity space, inversion, Fubini, compact support/topology, L1 density,
  and integral suppliers; the item and manifest both say dependency level 2.
- Checks: after removing a duplicated unnumbered paragraph and adopting the
  canonical numbered-step sequence, explicit-path precheck passed (1 checked,
  0 failing). Explicit rendercheck passed (KaTeX, delimiters and YAML). The
  final proof-layout batch is deferred until all item edits are complete. No
  item decision is recorded yet; pair scope and strict batch checks remain
  pending.
- The preceding cutdown lemma remains escalated. Next assigned item is
  `lem-averages-over-probability-densities-attain-the-essential-supremum`
  (level 2); it directly consumes the confirmed false semifiniteness claim and
  will be audited independently with its actual failure recorded.


### `lem-averages-over-probability-densities-attain-the-essential-supremum` — counterexamples authored; claim escalated at level 2

- Exact scaffold claim: for every real $h\in L^\infty(G)$,
  `sup_{f in P} integral f h = ||h||_infinity`, with a purported complex
  analogue after separating real and imaginary parts. This claim is false
  already on $G=\mathbb Z$ with counting Haar measure: for $h=-1$, every
  probability density averages to $-1$ while $||h||_\infty=1$. Thus the
  real-valued statement uses the wrong target for signed functions. After
  separating a complex function, each support-function target must likewise
  use the upper essential supremum of its real or imaginary part, not the
  absolute-value norm.
- A second, independent counterexample shows that this signed-function repair
  is still false under the repository's current Haar convention. Let
  $D=(\mathbb R,+)$ be discrete, $G=\mathbb T\times D$, and
  $A=\{1\}\times D$. The Haar measure is outer regular on Borel sets and
  inner regular on opens, but the convention expressly does not assert compact
  inner regularity for arbitrary Borel sets. Every countable $B\subseteq A$
  has measure zero: cover its countably many torus-coordinate points by arcs
  with summable lengths; every compact subset of that open cover meets only
  finitely many discrete cosets, so open inner regularity bounds the cover's
  measure by an arbitrarily small number. Every uncountable $B\subseteq A$
  has infinite measure: each open superset has a positive-measure torus slice
  for every index in an uncountable set; under AC, one positive threshold
  occurs on uncountably many slices, so finite compact unions give arbitrarily
  large lower bounds. Outer regularity then gives $\mu(B)=\infty$. Hence
  $\mu(A)=\infty$ and no finite-measure subset of $A$ has positive measure.
  For $h=\mathbf1_A$, $||h||_\infty=1$ but every $f\in P$ has
  $\int_A f=0$: each $A\cap\{f>1/n\}$ has finite measure by the $L^1$
  bound, hence is null, and their countable union is the positive support.
  The supremum is therefore zero. This confirms the finite-positive-subset
  scaffold is a genuine blocker under the exact measure definition, not a
  missing argument.
- Source audit: BHV, *Kazhdan's Property (T)*, Exercise G.6.2, printed
  pp. 471–472 (PDF pp. 476–477), asks for weak-star density but gives no proof
  or semifiniteness qualification. Thomas, Lecture 20, PDF p. 9, states the
  density lemma and gives the Hahn–Banach criterion; it likewise does not
  address the current non-semifinite Borel Haar convention. The sources are
  accurately recorded as intended routes, not as proofs of this false claim.
- Exact open supplier obligation: the scaffold's reverse-bound step defining
  the superlevel set $A_\delta$ and choosing $B\subseteq A_\delta$ with
  $0<\mu(B)<\infty$ consumes
  `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets`.
  That supplier's conclusion is false by the $\mathbb T\times D$ example and
  remains unproved/escalated. It is listed in the item manifest, clearly marked
  as an open supplier, and not used in the counterexamples.
- Exact downstream flagged use: the direct consumer
  `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` invokes
  this averaging identity in its strict-separation step to identify
  `sup_{f in P} Re integral(f h)` with `||Re h||_infinity`. This use cannot be
  accepted under the current statement; when that consumer is authored, flag
  the supplier ID, consumer ID, and that support-function step verbatim, then
  keep its decision escalated unless the owner resolves the claim and the actual
  proof use.
- Choice: the $\mathbb Z$ counterexample is choice-free. The stronger
  non-semifinite example uses AC through Haar uniqueness on the compact torus
  factor and the uncountable-threshold argument. No Choice claim is hidden.
- Checks: explicit-path precheck passed (1 checked, 0 failing) for the
  counterexample artifact, and explicit rendercheck passed. These structural
  checks do not prove the scaffold claim. Pair scope, strict contracts, and
  final batch gates remain outstanding; no item decision is recorded.
- **Order note:** the smoothing item was inadvertently authored before this
  averaging item, despite the same-level dispatch order. Its proof only uses
  already authored UCB/L1 suppliers and does not depend on this averaging item.
  The remaining work resumes in recomputed dependency order; no later item will
  justify an earlier one.
- Next remaining assigned item in recomputed order:
  `lem-a-reiter-net-has-an-invariant-mean-cluster-point` (level 3), after the
  other authored level-2 item `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous`.


### `lem-a-reiter-net-has-an-invariant-mean-cluster-point` — authored at recomputed level 3

- Exact claim: under the ultrafilter lemma, an arbitrary Reiter net gives
  integration functionals `lambda_f(phi)=integral f phi` in the dual of complex
  `L-infinity(G)`. The net has a weak-star cluster point; every cluster point
  is a positive unital left-invariant functional, and so Reiter (P1) implies
  amenability. The proof uses the complex `L-infinity` supplier; the old real
  `def-l-infinity-on-a-measure-space` dependency was removed.
- Exact suppliers read: the authored complex `L-infinity`, mean, amenability,
  and Reiter definitions; left Haar invariance; the complex integral bounds;
  weak-star topology and the dual-space definition; Banach–Alaoglu under the
  ultrafilter lemma; compactness characterized by net cluster points; and the
  cluster-point/subnet theorem. The exact equality is
  `lambda_f(L_g phi)=lambda_{L_(g^-1) f}(phi)` using `x=g y` and left Haar
  invariance; hence the defect is bounded by
  `||L_(g^-1)f_i-f_i||_1 ||phi||_infinity`, which tends to zero on the compact
  singleton `{g^-1}`. This is the only invariance estimate needed.
- Sources checked: BHV, *Kazhdan's Property (T)*, Theorem G.3.1, (iv) to (v),
  printed pp. 454–455, gives the Reiter-to-invariant-mean implication.
  Daws–Runde, Introduction, printed p. 1 after equation (1), explicitly states
  every weak-star accumulation point of an asymptotically invariant
  L1-probability net is invariant. Thomas Lecture 19, slides 5–7, supports the
  integration embedding `L1 -> L-infinity*`; it does not state the
  cluster-point conclusion, and the item locator/coverage wording now says
  that precisely.
- Choice: the item assumes the ultrafilter lemma and spends it through
  Banach–Alaoglu and compactness of nets. It does not assume full AC or DC.
  The separate AC proof of the ultrafilter lemma is not imported.
- Check: explicit-path precheck passed (1 checked, 0 failing); explicit
  rendercheck passed (KaTeX, delimiters and YAML). Pair scope, contracts and
  final batch gates remain pending; no item decision is recorded.
- Next item in the dispatch tie order is
  `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean` (level 3),
  followed by the weak-star-density consumer, whose averaging supplier remains
  escalated as recorded above.


### `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean` — authored at recomputed level 3

- Exact claim: from a left-invariant mean on actual-function `UCB(G)`, define
  `m-tilde(phi)=m(f_0*phi)` for a fixed `f_0 in P`; this is a mean on complex
  `L-infinity(G)` and is invariant under left convolution by every
  `f in P`. The statement now makes the complex-linearity and positivity
  convention for the UCB mean explicit.
- Proof route and checks: first establish norm one of a positive unital
  complex-linear UCB functional. For `m(f*psi)=m(psi)`, choose a compact set
  carrying all but an arbitrarily small amount of the L1 mass using Cc
  density. The continuous orbit map `y -> L_y psi` has a finite cover on that
  compact set; disjointification gives a finite Borel partition, and the
  associated finite linear combination approximates the smoothing in sup
  norm. The tail is bounded by `||psi||sup` times its L1 mass. This proves the
  identity without a Bochner-measurability or global sigma-finiteness claim.
- The positive-probability class `P` is proved locally closed under extended
  L1 convolution: approximate nonnegative densities by nonnegative Cc
  functions via absolute values of Cc approximants; compactly supported Fubini
  and left Haar invariance give nonnegative convolutions of mass equal to the
  product of masses; the extended convolution bound passes these to the L1
  limit, where positivity and total mass persist. Then the published
  approximate-identity net `(e_U)` is applied on the correct side:
  `m((f*e_U)*phi)=m(e_U*phi)` and
  `||(f*e_U)*phi-f*phi||sup <= ||f*e_U-f||1 ||phi||infinity -> 0`.
  Associativity from the authored smoothing lemma and local closure of `P`
  give topological invariance. No sup-norm convergence of `e_U*phi` for an
  arbitrary L-infinity function is asserted.
- Choice: AC is inherited through Cc density, the extended L1 convolution,
  compact-support Fubini, and the published positive probability
  approximate-identity net. The partition itself needs only finite choice.
- Sources checked: BHV, *Kazhdan's Property (T)*, Appendix G §G.3, proof of
  Theorem G.3.1 (i) to (ii), printed pp. 453–454, contains the UCB smoothing
  identity and construction of `m-tilde`. Thomas, Lecture 20, slides 11–14,
  gives the same construction. The local proof supplies the compact-partition
  approximation and the explicit right-L1 limit. The current source coverage
  records Thomas Lecture 19 only for its L1-to-dual pairing; it does not
  attribute a cluster-point claim to that lecture.
- Checks: explicit-path precheck passed (1 checked, 0 failing); explicit
  rendercheck passed (KaTeX, delimiters and YAML). Pair scope, contracts, and
  final batch gates remain outstanding; no item decision is recorded.
- Next item in the dispatch order is
  `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` (level 3).
  Its direct average supplier has the two counterexamples above. Author it as
  an escalated consumer, flag the exact support-function separation step and
  supplier ID, and leave the decision escalated pending owner repair.

### lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets — level-0 false scaffold claim; counterexample authored and escalated

- Exact claim preserved: every positive Borel set for every LCH left Haar measure contains a Borel subset of finite positive measure, with the scaffold's stated extension to measurable sets and no sigma-compactness assumption. The counterexample is for
  \(G=\mathbb T\times(\mathbb R_{\mathrm{discrete}})\) and
  \(A=\{1\}\times\mathbb R\): every countable Borel subset of \(A\) is null,
  while every uncountable Borel subset has infinite measure. Thus
  \(\mu(A)=\infty\) and no Borel subset of \(A\) has finite positive measure.
  This refutes the claim itself under the current repository convention.
- Exact convention/source checked: [Cohn, *Measure Theory*, §7.2, printed
  p. 190 (PDF p. 207)](https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf)
  requires compact finiteness, outer regularity on measurable sets, and compact
  inner approximation only for open sets. The local
  def-radon-measure-on-an-lch-space states that same convention. Haar
  existence on the chosen LCH group is supplied by
  cor-existence-of-left-and-right-haar-measures; the coset restrictions are
  identified by positivity, compact finiteness, and
  thm-uniqueness-of-left-haar-measure-up-to-scale. The torus normalized
  measure and product-topology facts are cited in the item. BHV Exercise G.6.2
  and Thomas Lecture 20 p. 9 are retained as intended consumer routes, not as
  proofs of this false premise. The original Bourbaki pointer is retained but
  not used to infer that the repository's weaker regularity convention implies
  semifiniteness.
- Choice: AC is used by the Haar existence/uniqueness suppliers and to infer
  that some threshold set is uncountable from a countable union of threshold
  sets; only finite selection is used after that. The item records these uses.
- Exact blocked supplier use: the scaffold lower-bound step of
  lem-averages-over-probability-densities-attain-the-essential-supremum
  selects a finite-positive-measure Borel subset of the superlevel set
  \(\{h>\|h\|_\infty-\delta\}\) and normalizes its indicator. The current
  counterexample artifact does not use that supplier. The route is refuted by
  this item; lem-averages-over-probability-densities-attain-the-essential-supremum
  remains separately escalated for its signed \(h=-1\) defect and its
  independent non-semifinite counterexample.
- Registration/checks: item frontmatter and batch-2 manifest now agree on the
  19 direct proof inputs and level 0; the original statement remains unchanged
  in the manifest. Batch-2 coverage now names the exact regularity convention
  and the inherited source pointers. The batch-2 contract records exact fact
  excerpts/uses and all eight boundary dispositions. Explicit-path precheck
  passed (constructive, 1 checked/0 failing), rendercheck passed, strict
  contract for this item passed, and batch-2 coverage-checklist passed
  (2 pages, 102 harvested results, 0 errors/warnings). The attempted
  item-path invocation of content-policy.mjs was a CLI misuse (it expects a
  pages manifest); no content-policy result is claimed here. No item decision
  or scope certification is recorded yet.
- **Order correction:** this was the earliest still-missing assigned item and
  has now been backfilled after later level-2/3 work had already started. The
  earlier smoothing-before-averaging deviation remains documented. Recompute
  levels after all current dependency edits, then resume with the earliest
  outstanding item in that recomputed order.

### Dependency-level refresh and Step 4 alerts

After replacing the false semifiniteness dependency with the actual suppliers
used by the counterexample, the owned manifest graph was recomputed. Current
levels are: level 0 — the complex-L-infinity prerequisite already present in
the manifest, Reiter P1 and left-Følner definitions, the open sigma-compact
subgroup lemma, the finite-positive-subset counterexample, layer cake,
Markov–Kakutani, and restricted regular representation; level 1 — the mean
definition, UCB definition, averaging counterexample, Følner-to-Reiter, and
Reiter-to-Følner cutdown; level 2 — amenability definition, weak-star-density
counterexample, and convolution smoothing; level 3 — Reiter cluster point,
UCB-to-topological-mean, norm-approximation, and the free-group example;
levels 4–7 contain the invariant-mean-to-Reiter lemma, fixed-point/equivalence
results, the Følner/Hulanicki/base-class results and the level-7 corollary,
stability theorem and examples. The cutdown item is the next outstanding item
in this recomputed order.

The manifest currently has 31 items (27 A and 4 B), whereas the Step 3a report
and the explicit Step 3b dispatch list describe 30. The extra A item is
def-complex-haar-l-infinity-space, already present as a local prerequisite and
used by the assigned proofs; it was preserved and not re-authored. This
manifest/inventory discrepancy is reported for Step 4; no pair or claim was
added.

The run-wide dependency-level command now finds every owned batch-2 item at
its recomputed label. It still reports other-batch mismatches, which remain
outside this writer's authority. One direct downstream level change is
specifically relevant to Step 4: batch 4's
thm-an-amenable-property-t-locally-compact-group-is-compact depends on
def-amenable-locally-compact-group and
thm-hulanicki-weak-containment-criterion-for-amenability; the latter now has
computed level 6, making this consumer's computed level 7 while its current
batch-4 manifest still says level 8. The sibling row was not edited.

The earlier assignment labels and prior checkpoints are retained as history;
the live order follows the current manifest graph. The level-0 semifiniteness
counterexample was backfilled after later work had already begun, and the
weak-star item was drafted before that backfill. The smoothing-before-averaging
deviation remains separately recorded. No completed item was justified using a
later supplier.

Independent read-only review confirms that the T×R-discrete Haar
counterexample and the ultrafilter mean are sound under the repository
convention; it also confirms that the Følner numerical witnesses disprove only
the displayed proof-route estimate/inclusion, not the cutdown conclusion.
The owner clarification requested earlier on the finite-positive-subset and
cutdown scope repairs has no response recorded at this checkpoint. The
cutdown item remains an open authoring obligation until either a complete
proof of the stronger auxiliary claim is supplied or the owner resolves the
identity-containing compact-set repair.

### `lem-reiter-functions-can-be-cut-down-to-folner-sets` — recomputed level 1; route gap recorded, claim remains open

- Exact claim preserved: for any compact positive-Haar-measure (Q), an (L^1) probability density with the displayed (Q^2)-variation bound should yield a finite-positive Borel set with the stated (Q)-Følner estimate. The item explicitly says the claim is not certified; its two ℝ examples refute only the source-route steps, not the lemma conclusion.
- Independently checked the examples: for (Q=[1,2]), (K=[2,4]), (x=3/2), the intersection has length (1/2) while (Q) has length (1), and (x+Q\not\subseteq(x+K)\cap K). For (Q=[100,101]), every (A\subseteq K=[200,202]) has (A-A\subseteq[-2,2]), disjoint from (Q). Both ratios scale by the positive Haar normalization constant. These are genuine route counterexamples, not statement counterexamples.
- Read the complete relevant extraction arguments: BHV, *Kazhdan's Property (T)*, Theorem G.5.1 proof, printed pp. 468–469/PDF pp. 473–474, lines 23979–24053: it starts with compact (Q\ni e), sets (K=Q^2), and uses (Q\subseteq K) and (xQ\subseteq K\cap xK). Thomas, Lecture 19, PDF slides 14–18, lines 324–456, has the same identity-containing hypothesis and uses the same inclusion. The cited route's identity assumption is confirmed.
- Current direct dependencies are now synchronized between the item and batch-2 manifest: 17 inputs, including the local Lebesgue/Haar and interval/compactness suppliers needed by the witnesses. The graph was recomputed; no owned batch-2 dependency-level mismatch remains. Run-wide dependency-level output still has sibling mismatches, including the previously recorded batch-4 amenability-property consumer at computed level 7 vs manifest 8.
- Contract: batch-2 contract now records all seven internal fact-to-supplier excerpts/uses, three actual step claims/inputs, and all eight boundary dispositions. Strict proof-contract check passed (0 errors/warnings). Explicit-path precheck and rendercheck passed. The direct-path coverage command was initially invoked with the pages manifest instead of the coverage manifest and reported a missing page entry; that was CLI misuse, not a valid coverage result. Re-run coverage against the sibling `.coverage.json` during batch checks.
- Choice is stated exactly in the item: AC is inherited for Haar existence/uniqueness; AC\(_\omega\) supports the interval formula and follows from AC; arithmetic and the two route witnesses use no further choice.
- Open owner decision: either preserve the strong statement by supplying a full proof, or narrow this auxiliary lemma to compact (Q\ni e) and enlarge targets in the general Følner criterion. No response is recorded yet. Keep this item escalated until the selected claim/proof route is resolved and checked. The next recomputed-level item is `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities` (level 3); inspect its exact suppliers and determine whether it consumes an unresolved claim before authoring it.

### Dependency-order checkpoint — weak-star-density consumer moved to level 4

- The next A-page scaffold is `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities`. Its strategy's exact unsupported use is the paragraph beginning “By the density lemma choose a net (b_i) in the probability densities with integral (b_i\psi\to\widetilde m(\psi)) for every (psi\in L^\infty(G)).” The named supplier `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` is already refuted under the current Haar convention, so that route cannot be cited as valid.
- A mathematically sound local replacement is available: prove finite-test density of probability densities against bounded continuous functions by finite-dimensional convex separation plus normalized indicators of relatively compact open neighborhoods; smooth that approximating net with one fixed density to obtain weak-star convergence to the topological mean on all (L^\infty) tests. This preserves the assigned conclusion while avoiding the refuted all-means density claim. The complete argument and exact suppliers still need authoring/checking.
- The convolution probability-closure step needed for the smoothed net is already proved in the earlier item `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean`; that exact dependency is now registered, and the false weak-star supplier edge has been removed. The recalculated level rose from 3 to 4. The downstream batch-2 manifest/item labels were recomputed and synchronized: invariant-mean-to-Reiter is 5; amenability/Reiter equivalence and fixed-point-to-amenability are 6; Følner criterion, Hulanicki, compact/abelian amenability and the real-affine example are 7; the sequence corollary, stability theorem and remaining examples are 8. The run-wide level check now has no batch-2 mismatch, while unrelated sibling mismatches remain.
- This item is not yet authored and has no decision. It must be resumed after the remaining level-3 B-page counterexample is complete. Next item in the recomputed page order: `cex-the-free-group-on-two-generators-is-not-amenable` (level 3).

### `cex-the-free-group-on-two-generators-is-not-amenable` — recomputed level 3; authored

- Exact claim: (F_2=\langle a,b\rangle) with the discrete topology and counting Haar measure admits no left-invariant mean on the complex (L^\infty(F_2,\mu)) used by the amenability definition. Counting measure has no nonempty null set, so these classes are exactly bounded functions with the ordinary sup norm.
- Scaffold repair: the source's cover (F_2=A\cup aA) is generally **not disjoint**. The scaffold's equality (1=\nu(A)+\nu(aA)) was therefore invalid. The authored proof uses only (F_2=A\cup aA), monotonicity and finite subadditivity to get (\nu(A)\ge1/2); then (A,bA,b^2A) are pairwise disjoint by their initial reduced-word blocks, giving (1\ge3\nu(A)\ge3/2). This is a complete contradiction using the complex mean definition.
- Exact suppliers: the current free-group definition/reduced-word theorem supplies unique reduced forms; the counting-measure item supplies the left Haar measure and the fact that its only null set is empty; the complex (L^\infty), mean, and amenability definitions supply the functional conventions. No choice principle is used.
- Source verification: read BHV, *Kazhdan's Property (T)*, Appendix G.2, Example G.2.4(ii), printed p. 452/PDF p. 457, the complete reduced-word mean contradiction. BHV itself says (F_2=A\cup aA) and correctly infers only (\nu(A)\ge1/2); it does not assert disjointness. Read Thomas Lecture 23 slide 2, which states the discrete free-subgroup obstruction, and Thomas Lecture 3 slides 7–13, which develops the reduced-word model. The original Thomas Lecture 19 slide-8 source pointer was wrong for the free-group result; item metadata and B-page coverage now use the correct Lecture 23 and Lecture 3 sources, while Lecture 19 remains credited only for Reiter/Følner material.
- Registration/checks: item direct dependencies and level 3 match the batch-2 manifest. Explicit-path precheck passed (1 checked/0 failing), explicit rendercheck passed, strict item contract passed (1/1, 0 errors/warnings), and batch-2 coverage passed (2 pages, 104 harvested results, 0 errors/warnings). The run-wide dependency-level check has no batch-2 errors; remaining errors are in other pairs/batches, outside this writer's authority. Final content policy, plan validation, item decisions, and proof-layout remain pending for batch completion.
- Choice: no AC or dependent choice is used; the word sets, their decompositions, and finite mean calculations are explicit. No item decision is recorded until final scoped checks.
- Next assigned item in the recomputed order: `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities` (level 4). Its dependency on the earlier UCB-to-topological-mean result is registered; the false weak-star supplier is not consumed by the replacement route.

### Independent review result — Følner cutdown scope remains open

The read-only review independently confirms that BHV and Thomas Lecture 19 start the extraction argument with compact (Q\ni e), and that the two ℝ calculations refute only the displayed route steps. The reviewer found no complete proof or statement-level counterexample to the stronger arbitrary-(Q) quantitative lemma. Keep `lem-reiter-functions-can-be-cut-down-to-folner-sets` escalated and uncertified until the owner chooses the supported identity-containing narrowing or an independent proof of the stronger statement is supplied.

### `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities` — level 4; authored and locally checked

- **Claim and route.** Preserve the statement: a topological invariant mean on complex $L^\infty(G)$ yields a net $g_j\in\mathcal P$ with $\|f*g_j-g_j\|_1\to0$ for each $f\in\mathcal P$, uniformly on norm-compact subsets. The scaffold's proposed use of `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` is not used; that supplier is refuted under the repository's Haar convention. Instead, finite-dimensional separation plus normalized indicators of relatively compact open neighborhoods gives finite-test approximation against bounded continuous functions. Smoothing that witness-indexed net by one fixed $p^\sharp$ gives convergence on every $L^\infty$ test. A local cosetwise proof represents the full bounded dual of $L^1(G)$ by bounded Borel functions, which justifies weak convergence of defects even when Haar measure is not sigma-finite globally. Finite-product Mazur closure then supplies norm witnesses, and a finite norm net gives compact-set uniformity.
- **Exact mathematical inputs.** The direct suppliers and their uses are itemized in the item's `Facts & Assumptions` and the batch-2 contract: relatively compact open neighborhoods and Haar positivity/compact finiteness; an open sigma-compact subgroup and its clopen cosets; sigma-finite real $L^1$ duality on each coset; Radon $C_c$ density; inversion and modular change-of-variables; the compact-support adjoint convolution identity proved locally in the item; the earlier UCB-to-topological-mean supplier's explicit Remark that extended convolution preserves $\mathcal P$; smoothing continuity; weak/weak-star convergence; and Mazur closure. The false all-means weak-star-density supplier is absent from the direct dependencies and from the proof.
- **Source verification.** Read the complete relevant proof portion of Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1 (ii)$\Rightarrow$(iii), printed pp. 454–455 (author-hosted PDF pp. 459–460; online PDF text lines around 23217–23287). Its p. 454 assertion that all $L^1$ probabilities are weak-star dense in all means is not used. The cited portions on weak convergence of defects, the convexity/Mazur closure passage, and compact-set uniformity are used as route guidance after the local replacement. Also read Anne Thomas, Lecture 20, slides 15–17 (PDF pp. 15–17): p. 15 makes the same all-means density assertion and is not used; slides 15–17 give the subsequent weak-convergence, product-convexity, closure, and uniformity route. The two source locators and qualifications are recorded in item metadata and batch-2 manifest.
- **Choice.** The item states AC. It is used in separation, choices of coset representatives and local approximants, Radon $C_c$ density, and Mazur's theorem. The finite-test nets are indexed by witnesses; no dependent-choice assumption or global choice function for those nets is added.
- **Registration and checks.** Item metadata and batch-2 page-manifest dependencies match exactly (40 direct inputs) after removing the unused `thm-compact-subset-of-a-hausdorff-space-is-closed` edge; both record dependency level 4. Step-level labels and source uses are recomputed from the proof. Explicit-path precheck passed (1 checked/0 failing); explicit rendercheck passed; strict contract for this item passed (1/1, 0 errors/warnings). The contract records 40 supplier citations with exact source excerpts and uses, 17 proof derivations, and all eight boundary dispositions. The run-wide dependency-level command reports no batch-2 mismatch; its errors concern sibling items only. Final batch content-policy, plan, and item-decision passes remain pending. Current engine status is paused at 3b-author because the exclusive-cohort JSON fails to parse at position 87256 (line 877, column 7); status also reports this pair's expected artifact missing. No autopilot state was edited.
- **Current disposition.** No mathematical obligation remains open in this item. No `accept`/`repaired` decision has been recorded before the final batch checks. The next item in the recomputed dependency order is `lem-an-invariant-mean-produces-a-reiter-net` (level 5); inspect its exact suppliers and source passages before authoring it.

### Dependency-level 5 authoring checkpoint — `lem-an-invariant-mean-produces-a-reiter-net`

- The assigned original item ID and its promised statement/strategy are present in the batch-2 page manifest, but `items/lem-an-invariant-mean-produces-a-reiter-net.md` is absent. This is a missing existing-scaffold file, not a new scope addition. Step 3a reviewed the full LCH/AC/net scope and the BHV/Thomas Reiter chain; no owner-held narrowing or unresolved source decision for this item is recorded.
- Exact route suppliers reread: the Reiter definition gives $\mathcal P$, preservation by left translations, and the compact-uniform $(P1)$ conclusion; the UCB definition embeds actual UCB functions isometrically into $L^\infty$ and is translation invariant; amenability supplies an invariant $L^\infty$ mean; the UCB-to-topological-mean lemma and level-4 norm-approximation lemma provide the topological mean and a net uniform on norm-compact subsets of $\mathcal P$; the published strong-continuity lemma gives continuity of $x\mapsto L_xf$ on $L^1$; the extended-convolution definition supplies bilinearity and its norm bound, while the compact-support convolution definition supplies the pointwise formula needed to prove $L_x(f*g)=(L_xf)*g$ first on $C_c$ and then by $C_c$ density on $L^1$; the previous UCB-to-mean item's Remark supplies closure of $\mathcal P$ under convolution. The compact-image theorem supplies compactness of the orbit. Direct dependencies will be corrected to include the amenability/UCB restriction, compact-support formula, left Haar invariance, convolution-closure remark, and compact-image facts, and to remove the unused total-boundedness/completeness route.
- Source passages read: BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1 (ii)$\Rightarrow$(iii), printed p. 455 (PDF pp. 459–460), closing paragraphs after the finite-norm-net estimate: the orbit $\{x^{-1}f:x\in Q\}$ is compact by strong continuity, followed by the smoothing and Reiter estimate. Thomas, Lecture 20, slides 17–18 (PDF pp. 17–18), gives the same compact-orbit argument and concludes (P1). Both source proofs take a compact set containing $e$; the local proof will handle an arbitrary compact $Q$ by adjoining $e$, whose finite union with $Q$ remains compact. The exact references and this qualification will be recorded in the item.
- **Open authoring work:** write the absent item while preserving its manifest statement, prove the extended-convolution equivariance by a Cc calculation plus the L1 convolution bound/density, register the corrected direct dependencies and item contract, then run explicit-path checks. No consumer will be justified using a later level item; the level-4 norm-approximation supplier is already complete.

### `lem-an-invariant-mean-produces-a-reiter-net` — level 5; authored

- **Scaffold and scope.** The assigned original ID, statement, and strategy were in the batch-2 page manifest, although its item file was absent. The manifest/dispatch inventory confirms this is an original scaffold item, so it requires an ordinary current item decision; it is not a new addition eligible for automatic item certification.
- **Claim and proof.** Preserve the full LCH, AC, net-valued claim. A UCB-invariant mean yields a topological invariant mean, and the preceding level-4 lemma yields a density net uniformly on norm-compact subsets of $\mathcal P$. For compact $Q$, the proof adjoins $e$, fixes $f\in\mathcal P$, and uses strong continuity plus compactness of continuous images to make $\{L_xf:x\in Q\cup\{e\}\}$ norm-compact in $\mathcal P$. It proves $L_x(f*g)=(L_xf)*g$ first from the Cc convolution formula and left-Haar substitution, then extends the identity to L1 inputs using Cc density and the convolution bound. Choosing one net index on the orbit and setting $g=f*g_j$ gives $g\in\mathcal P$ by the explicit convolution-closure Remark of the UCB-to-mean supplier; the triangle estimate gives $\Delta_Q(g)\le\varepsilon$. For the amenable consequence, a left-invariant $L^\infty$ mean restricts through the UCB class embedding.
- **Dependency repair.** The original row omitted the direct suppliers needed for the amenable restriction, the pointwise Cc formula, the left-Haar substitution, the compact-image step, Cc translation preservation, and the explicit $\mathcal P$ convolution-closure Remark. Added direct dependencies on `def-amenable-locally-compact-group`, the UCB definition, `def-left-haar-integral-and-left-haar-measure`, `def-compactly-supported-convolution-on-a-group`, `thm-compactness-under-continuous-maps`, `lem-translations-preserve-compactly-supported-continuous-functions`, and `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean`. Removed unused total-boundedness/completeness route dependencies. The resulting 14 direct dependencies match between item and manifest, and the level remains 5.
- **Sources.** Re-read the complete relevant closing argument in BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1 (ii)$\Rightarrow$(iii), printed p. 455 (PDF pp. 459–460; online PDF text lines 23272–23287), which uses a compact test set containing $e$, compactness of the translated orbit, and the smoothing estimate. Re-read Thomas, Lecture 20, slides 17–18 (PDF pp. 17–18; online text lines 356–383), which gives the same compact-orbit and convolution calculation. The local proof handles arbitrary compact $Q$ by adjoining $e$; this qualification is recorded in the item source locator.
- **Choice.** AC is stated and inherited through the UCB-to-topological-mean, norm-approximation, strong-continuity and Cc-density suppliers. The compact orbit and convolution-equivariance calculations use no additional choice or dependent choice.
- **Checks.** Explicit-path precheck passed (1 checked/0 failing); explicit rendercheck passed; strict contract passed (1/1, 0 errors/warnings). The contract has 15 supplier citations with exact excerpts/uses, six proof derivations, and all eight boundary dispositions. The run-wide dependency-level command shows no batch-2 mismatch; the reported failures are confined to sibling items. Batch content policy, plan validation, final item decisions and the one batched proof-layout command remain pending.
- **Disposition and next action.** No mathematical obligation remains open in this item. No item decision has been recorded before final batch checks. The next assigned item in dependency order is `lem-a-group-with-the-fixed-point-property-is-amenable` (level 6); inspect its exact suppliers and source passages before authoring it.

### Dependency-level 6 authoring checkpoint — `lem-a-group-with-the-fixed-point-property-is-amenable`

- The assigned original ID and statement/strategy are present in the batch-2 manifest, but the current item file is absent. Step 3a classified this as an added local A supplier within the approved full-LCH scope with AC and nets; no owner-held narrowing was recorded.
- Exact direct suppliers reread: UCB functions are actual bounded functions with an isometric class map into $L^\infty$; the amenability definition is a left-invariant mean on that complex $L^\infty$ space; the level-5 Reiter item and the cluster-point lemma bridge a UCB mean to an $L^\infty$ mean; Banach–Alaoglu gives weak-star compactness only under the ultrafilter lemma; the fixed-point action must live on a nonempty compact convex subset of a locally convex topological vector space. BHV, *Kazhdan's Property (T)*, Appendix G, Remark G.1.6 and Theorem G.1.7, printed pp. 448–449 (online PDF text lines 22939–22956), explicitly constructs this state space/action and gives fixed-point-property $\Rightarrow$ amenability.
- **Confirmed scaffold gap.** The manifest's axiom note says AC is used through Banach–Alaoglu and the cluster-point lemma, but the item statement omits AC and the direct dependency list omits the theorem `thm-ultrafilter-lemma`, even though both Banach–Alaoglu and the cluster-point lemma assume it. The published `thm-ultrafilter-lemma` states AC implies the needed principle. Step 3a's approved pair-wide direction explicitly retains AC; the authored statement will say AC, and the direct dependency list will declare the implication. Also add the exact topological-vector-space/dual/closed-subspace suppliers needed for the state-space verification.
- **Open authoring work:** write the item with the AC condition explicit, verify the means state space is bounded, nonempty, convex, weak-star closed/compact and the affine action is continuous, derive the UCB fixed mean, then apply the level-5 Reiter item and the ultrafilter-lemma-dependent cluster-point item. Synchronize direct dependencies and contract; item decisions wait for final batch gates.

### `lem-a-group-with-the-fixed-point-property-is-amenable` — level 6; authored

- **Scaffold and scope.** The assigned original ID and fixed-point-property implication were in the batch-2 page manifest, but the item file was absent. Step 3a labels this one of the approved local A suppliers in the pair's full LCH scope. The pair-level instruction retains AC and nets.
- **Choice repair.** The scaffold's axiom note used AC through Banach–Alaoglu and the Reiter cluster-point lemma, but the Statement did not state AC and the direct dependencies omitted the bridge from AC to the ultrafilter lemma. The authored Statement now explicitly assumes AC and directly declares `thm-ultrafilter-lemma`. This supplies the hypothesis of Banach–Alaoglu and of the cluster-point supplier. No owner-held axiom branch is overridden; this follows the Step 3a approved AC scope.
- **Proof route.** Form $M$ from positive unital functionals on actual UCB. The local proof establishes mean norm at most one, nonemptiness by evaluation at $e$, convexity and weak-star closedness. It verifies that the weak-star dual is a locally convex topological vector space, obtains compactness of $M$ from Banach–Alaoglu and closed-subspace compactness, defines the translation action, and proves its continuity from UCB orbit continuity and weak-star evaluations. The fixed point property yields a UCB-invariant mean. The level-5 Reiter item followed by the ultrafilter-lemma-dependent cluster-point item gives a left-invariant mean on $L^\infty(G)$, hence amenability.
- **Source verification.** Read the full relevant BHV passage, *Kazhdan's Property (T)*, Appendix G.1, Remark G.1.6 and Theorem G.1.7, printed pp. 448–449 (author-hosted PDF pp. 453–454; online text lines 22939–22956). It states that $UCB(G)^*$ with weak-star topology is locally convex; the means form a nonempty weak-star closed compact convex subset of the dual unit ball; translations act continuously and affinely; and a fixed point is equivalent to amenability. The item records this source locator and gives local proof details under the repository's explicit AC convention.
- **Registration and checks.** Item and page manifest now match on the exact Statement, 17 direct dependencies and dependency level 6. Explicit-path precheck passed (1 checked/0 failing); rendercheck passed; strict item contract passed (1/1, 0 errors/warnings), with 17 supplier citations, seven proof derivations and eight boundary dispositions. The run-wide dependency check reports no batch-2 mismatches; the listed errors remain in sibling batches. Final batch content-policy, plan validation, item decisions and batched proof-layout remain pending.
- **Disposition and next action.** No mathematical obligation remains open in this item. No item decision is recorded before the batch gates. The next item in dependency order is `thm-amenability-is-equivalent-to-reiter-p1` (level 6); inspect its exact suppliers and source passages before authoring it.

### Dependency-level 6 authoring checkpoint — `thm-amenability-is-equivalent-to-reiter-p1`

- The original theorem ID and biconditional statement are present in the batch-2 page manifest, but the item file is absent. The approved pair scope retains full LCH generality, AC, and nets. The current routes are the level-5 amenability-to-P1 lemma and the level-3 Reiter-net cluster-point lemma; the assigned false all-means weak-star-density claim is not needed.
- Exact supplier audit: amenability supplies a left-invariant mean on complex $L^\infty$; the UCB definition embeds actual UCB functions into $L^\infty$ and preserves left translations; `lem-an-invariant-mean-produces-a-reiter-net` turns a UCB mean into (P1) under AC; `lem-a-reiter-net-has-an-invariant-mean-cluster-point` turns a Reiter net into an $L^\infty$ invariant mean but assumes the ultrafilter lemma. The source theorem G.3.1's equivalent (i), (iii), and (v) clauses were read in full; the proof will use these two local bridge items rather than its all-means density assertion.
- **Confirmed scaffold gaps.** The original statement does not say AC although its own axiom note and both bridge suppliers require choice; the item will state AC, consistent with Step 3a's approved pair-wide AC scope. The original direct deps omit the UCB definition required to restrict an amenable $L^\infty$ mean, and omit the direct AC-to-ultrafilter-lemma bridge required by the cluster-point supplier. Add `def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group` and `thm-ultrafilter-lemma`, preserving the full equivalence.
- **Source verification.** BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1, printed pp. 452–456 (online PDF text around lines 23152–23296), gives the complete five-clause equivalence and both (i)$\Rightarrow$(ii)$\Rightarrow$(iii) and (iv)$\Rightarrow$(v) arguments. Thomas, Lecture 20, slides 11–18, gives the invariant-mean-to-Reiter route and Reiter-to-Følner chain; only the needed amenability/P1 passages are in scope. No new source uncertainty is open.
- **Open authoring work:** preserve the exact biconditional but add AC, add the two missing direct prerequisites, write the two implications using the authored local bridge items, synchronize the manifest/contract, then run explicit-path checks. An item decision waits for final batch gates.

### `thm-amenability-is-equivalent-to-reiter-p1` — level 6; authored

- **Scaffold and scope.** The original theorem ID and biconditional were present in the batch-2 manifest, but the item file was absent. The full LCH statement and Haar-normalization qualification are preserved. The Statement now explicitly assumes AC, consistent with the Step 3a approved pair-wide AC scope and with the bridge lemmas' hypotheses.
- **Proof and prerequisites.** The forward implication restricts an amenable $L^\infty$ mean through the UCB class embedding and applies the level-5 amenability-to-Reiter bridge. The reverse implication takes a Reiter net and applies the cluster-point lemma. The original dependency row omitted the UCB embedding, the mean definition, the left-Haar normalization premise, and the AC-to-ultrafilter-lemma bridge; these direct prerequisites are now declared. AC supplies the ultrafilter lemma required by the cluster-point result. Haar rescaling is handled by the explicit density correspondence $f\mapsto c^{-1}f$.
- **Source verification.** Re-read the complete BHV, *Kazhdan's Property (T)*, Appendix G.3 Theorem G.3.1 statement and relevant proof, printed pp. 452–456 (online PDF text around lines 23152–23296), for the amenability/(P1)/invariant-mean equivalence. Also re-read Thomas, Lecture 20, slides 11–18 (PDF pp. 11–18); its invariant-mean-to-Reiter argument supports the forward route, while the reverse implication here uses the local cluster-point supplier. BHV's separate all-means weak-star-density premise is not used by this theorem's local bridge route.
- **Registration and checks.** Item statement, direct dependencies and dependency level 6 match the page manifest. Explicit-path precheck passed (1 checked/0 failing); rendercheck passed; strict item contract passed (1/1, 0 errors/warnings), with supplier excerpts/uses and all eight boundary cases. Run-wide dependency checking reports no batch-2 mismatch; current errors are sibling-only. Batch content-policy, plan validation, item decisions and final proof-layout remain pending.
- **Disposition and next action.** No mathematical obligation remains open here. No item decision is recorded before batch gates. The next assigned item in dependency order is `prop-compact-and-locally-compact-abelian-groups-are-amenable` (level 7); inspect its exact suppliers and source passages before authoring it.

### Dependency-level 7 authoring checkpoint — `prop-compact-and-locally-compact-abelian-groups-are-amenable`

- The original proposition ID and its two claims are in the batch-2 manifest, but its item file is absent. The approved pair scope retains arbitrary locally compact Hausdorff groups, nets, and AC.
- Exact route suppliers reread: normalized Haar probability on compact groups is available under AC; the Haar integral gives the mean pairing and left invariance; Markov–Kakutani gives the fixed-point property for abelian topological groups under AC; the level-6 fixed-point-property lemma gives amenability. The item will also cite the exact complex $L^\infty$ and integration facts needed to define the compact-group mean on equivalence classes and verify left invariance.
- Source verification: BHV, *Kazhdan's Property (T)*, Appendix G.1 Example G.1.5 (compact groups) and Appendix G.2 Theorem G.2.1, including the complete Markov–Kakutani averaging proof, printed pp. 448–451 (online PDF text lines 22927–23027). The local proof uses the compact Haar integral for part (1) and the already checked Markov–Kakutani and fixed-point suppliers for part (2).
- **Open authoring work:** state AC explicitly, preserve both claims and the no-countability/no-unimodularity scope, add the missing integral/measure-preserving suppliers to the direct dependencies, and author both parts. Final batch gates and the ordinary item decision remain pending.

### `prop-compact-and-locally-compact-abelian-groups-are-amenable` — level 7; authored and locally checked

- **Statement and route.** Preserved both assigned claims and the full LCH scope, with AC now explicit as required by the normalized-Haar, Markov–Kakutani, and fixed-point-property suppliers. The compact case defines $m(\varphi)=\int_K\varphi\,d\mu$ on complex $L^\infty$ classes, proves integrability from essential boundedness and probability normalization, checks representative independence, boundedness, positivity, unitality, and left invariance, then applies the amenability definition. The abelian case obtains the fixed-point property from the Hausdorff Markov–Kakutani item and applies the level-6 implication.
- **Supplier and mathematical audit.** Added exact direct suppliers for complex $L^\infty$, integrability, almost-everywhere invariance of integrals, the simple-function calculation $\int 1_K\,d\mu=\mu(K)$, Borel translation, left-Haar measure preservation, and invariance of integrals. The proof makes the essential-supremum $\eta$ estimate explicit before applying integral linearity and the triangle inequality. The page-manifest statement, 20 direct dependencies, AC note, provenance, and level 7 now match the item. No unresolved supplier is consumed.
- **Source verification.** Re-read BHV, *Kazhdan's Property (T)*, Appendix G.1 Example G.1.5 (printed p. 448) and Theorem G.1.7 (printed pp. 448–449), and Appendix G.2 Theorem G.2.1 with its complete averaging/FIP/separation proof (printed pp. 450–451). Example G.1.5 identifies normalized Haar measure as the invariant mean on $C(K)$; the local proof separately verifies the stronger required $L^\infty$-mean claim directly by integration. Theorem G.2.1 gives the abelian fixed-point averaging route; the local supplier states Hausdorffness because this library's dual-separation proof requires it. The local AC declarations are explicit and do not infer choice-free conclusions from the source's abbreviated theorem statement.
- **Checks.** Explicit-path precheck passed (1 checked/0 failing); explicit rendercheck passed (0 errors); strict item proof contract passed (1/1, 0 errors/warnings) after recording all eight boundary dispositions, including inapplicable endpoint and iff cases. `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` passed (378 items, 30 pages, maximum level 27). Final batch content policy, plan validation, decisions, and the one batched proof-layout remain pending.
- **Disposition and next action.** The compact/abelian proposition has no open mathematical gap; its item decision waits for the final batch checks. Continue with `thm-folner-criterion-for-locally-compact-groups` (level 7), the next assigned item in page order.

### Continuation dispatch `dcb003c64da27aec` — `thm-folner-criterion-for-locally-compact-groups`

- **Current claim and conventions.** The manifest still promises the full Følner criterion for arbitrary locally compact Hausdorff groups, nets, and a fixed left Haar measure. The authored Statement explicitly assumes AC, consistent with the approved pair-wide choice ledger and the level-6 amenability/Reiter equivalence supplier. It retains Borel finite-positive-measure witnesses and the equivalent left Følner net formulation.
- **Exact supplier audit.** Re-read the complete current items for `thm-amenability-is-equivalent-to-reiter-p1`, `def-reiter-condition-p1`, `def-amenable-locally-compact-group`, `def-left-folner-net-for-a-locally-compact-group`, `lem-folner-nets-give-reiter-nets`, `lem-layer-cake-identity-for-nonnegative-integrable-functions`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-haar-translations-are-strongly-continuous-on-lp-one-and-two`, `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`, `def-locally-compact-space`, `def-topological-group`, `thm-finite-products-of-compact-spaces`, `thm-compactness-under-continuous-maps`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `def-borel-sigma-algebra`, `def-complex-haar-lp-spaces-and-compactly-supported-functions`, `def-left-haar-integral-and-left-haar-measure`, `def-axiom-of-choice`, and `def-countable-choice`. Each proof input is now cited where used. `lem-reiter-functions-can-be-cut-down-to-folner-sets` remains escalated from its general-compact-Q route gap and is deliberately not a direct supplier or proof input here.
- **Source verification.** Read the complete BHV, *Kazhdan's Property (T)*, Appendix G.5, Theorem G.5.1 and its Reiter-to-Følner proof (printed pp. 466–469; author-hosted PDF pp. 471–474). Also read Thomas, Lecture 19, slides 14–18 (PDF pp. 14–18). Both extraction proofs start with a compact test set containing the identity and use its Haar measure as a positive denominator; containing the identity alone does not guarantee positive measure in a nondiscrete group. The local proof fixes this by enlarging an arbitrary compact target Q to P=Q∪C for a compact identity neighbourhood C containing an open neighbourhood O, so 0<μ(P)<∞, and then uses K=P². The chosen P1 tolerance is ημ(P)/(4μ(K)), η=ε/2; layer-cake plus Tonelli on finite-measure K gives a positive finite superlevel E_t whose good set yields the required uniform P-bound. The compact-parameter boundary integrand is product-measurable through the strongly continuous L1 action and the separable bounded-variation range of the nested superlevel indicators; Tonelli is applied only on K×(0,∞), not on G×(0,∞).
- **Registration and levels.** The item and page manifest now agree on its Statement, 21 direct dependencies, explicit AC use, and dependency level 7. Its actual proof does not consume the still-unresolved broader cutdown lemma, so no unfinished supplier obligation is hidden in a citation. Coverage now records the identity-containing source hypothesis and the local compact-neighbourhood extension. The contract records exact supplier excerpts/uses, six step claims, and all eight boundary dispositions.
- **Checks actually run for this item.** `node tools/tsx-run.mjs tools/precheck.mts --json items/thm-folner-criterion-for-locally-compact-groups.md` passed (1 checked, 0 failing); `node tools/rendercheck.mjs --json items/thm-folner-criterion-for-locally-compact-groups.md` passed (1 checked, 0 errors/warnings); strict `tools/proof-contract.mjs` for this item passed (1 checked, 0 errors/warnings). The single batched `proof-layout` run and complete batch content/coverage/plan/dependency gates remain for handoff.
- **Decision and next action.** The item is fully authored with no open mathematical gap; its `repaired` item decision is deferred until the final batch gate pass. Continue with `thm-hulanicki-weak-containment-criterion-for-amenability` (recomputed level 7, next A-page item order). The unresolved cutdown item remains separately escalated, with no current consumer in this theorem.

### Continued dependency-level 7 checkpoint — `thm-hulanicki-weak-containment-criterion-for-amenability`

- **Claim and convention.** The full locally compact Hausdorff statement is preserved, with AC explicit. The proof uses the fixed left Haar measure, the left regular action $\lambda_G(x)\xi(y)=\xi(x^{-1}y)$, and the library's finite-sum coefficient definition of $1_G\prec\lambda_G$. It retains the equivalent compact-uniform almost-invariant-unit-vector formulation.
- **Supplier audit.** Re-read the exact current suppliers `thm-amenability-is-equivalent-to-reiter-p1`, `def-amenable-locally-compact-group`, `def-reiter-condition-p1`, `def-weak-containment-of-unitary-representations`, `lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors`, `def-left-and-right-regular-unitary-representations`, `thm-regular-representations-are-unitary-and-strongly-continuous`, `def-matrix-coefficient-of-a-unitary-representation`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-complex-haar-lp-spaces-and-compactly-supported-functions`, `def-complex-l-two-inner-product`, `def-real-and-complex-inner-product-space`, `lem-complex-conjugation-and-modulus-laws`, `def-left-haar-integral-and-left-haar-measure`, and `def-strongly-continuous-unitary-representation`. The two $L^2$ coefficient conversions were checked under the library's first-variable-linear inner product and left-translation convention.
- **Source verification.** Read the complete BHV, *Kazhdan's Property (T)*, Appendix G.3 Theorem G.3.2 proof (printed pp. 456–457/PDF pp. 461–462): Reiter P1 gives a unit $L^2$ vector by $\sqrt f$ and $|\sqrt a-\sqrt b|^2\le|a-b|$; the converse uses $f=|\xi|^2$ and Cauchy–Schwarz. Re-read Appendix F.1 Corollary F.1.5 and its proof (printed pp. 423–424/PDF pp. 428–429), which supplies the weak-containment/almost-invariant-vector equivalence; its coefficient estimates are independently expanded in local supplier `lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors`. Also read Thomas, Lecture 20, slides 17–18 (PDF pp. 17–18), for the Reiter-to-$L^2$ conversion. No source uncertainty remains.
- **Registration and checks.** Item and batch-2 manifest agree on the statement, 16 direct dependencies, AC use, and level 7. The strict contract records 17 exact supplier-section excerpts, six numbered-step claims/inputs, and all eight boundary dispositions. Explicit-path precheck passed (1 checked/0 failing), rendercheck passed (1 checked/0 errors/warnings), and strict item contract passed (1 checked/0 errors/warnings). The final batched `proof-layout`, content policy, coverage, plan validation, full dependency check and item decision are pending.
- **Disposition and next action.** The theorem is fully authored with no open mathematical gap; defer its `repaired` item decision until the final batch checks. Continue with the level-7 B-page example `ex-the-real-affine-group-is-amenable-and-nonunimodular`, following the dispatch's page-order tie break.

### `ex-the-real-affine-group-is-amenable-and-nonunimodular` — level 7; authored and locally checked

- **Claim and route.** The full positive affine group $G=\{(a,b):a>0,b\in\mathbb R\}$ and the library modular convention are retained. The proof establishes the topological-group/LCH hypotheses directly, writes $G=NH$ with $N\cong(\mathbb R,+)$ and $H\cong(\mathbb R_{>0},\cdot)$, and applies Markov–Kakutani first to $N$ on an arbitrary nonempty compact convex action space, then to $H$ on the nonempty compact convex set $X^N$. This gives the fixed-point property and hence amenability. It independently constructs $a^{-2}da\,db$ as a nonzero Radon left Haar measure by positive smooth density, proves left invariance with Jacobian $a_0^2$, and computes the modular value from right multiplication by $g^{-1}$, obtaining $\Delta_G(a,b)=a^{-1}$.
- **Exact inputs and choice.** Item metadata and page manifest now agree on 29 direct dependencies at level 7. The local proof no longer declares unused quotient and semidirect-product definitions; it cites the actual group-topology, fixed-set, measure-density, change-of-variables, Haar, and modular suppliers used. AC is explicit: MK is applied twice, the fixed-point-to-amenability bridge assumes AC, AC supplies AC$_\omega$ for the density/Radon and change-of-variables suppliers, and the Haar/modular suppliers carry AC. No dependent-choice assumption is introduced.
- **Source verification.** Re-read the complete relevant BHV, *Kazhdan's Property (T)*, Appendix G.2, Proposition G.2.2(ii) proof (printed pp. 451–452) and Theorem G.2.1 averaging proof (printed pp. 450–451). Read Alghamdi, *Representation Theory for the Group SL2(R)*, Chapter 3 §§3.1, 3.3 (printed pp. 15–17/PDF pp. 23–25), including the affine group/subgroup formulas and complete left-Haar Jacobian calculation. The modular scalar is recomputed using the library's defining equation, so the source's convention is not assumed.
- **Checks.** Explicit-path precheck passed (1 checked, 0 failing); rendercheck passed (1 checked, 0 errors/warnings); strict item proof contract passed (0 errors/warnings), with 30 exact supplier excerpts, 11 numbered-step claims/inputs, and all eight boundary dispositions. Final batch coverage/content-policy, plan validation, dependency-level check, item decision, and one batched proof-layout remain pending.
- **Disposition and next action.** No mathematical or supplier-use gap remains in this example; its item decision is deferred until final batch checks. Continue with `cor-folner-sequences-for-second-countable-compactly-generated-groups` at level 8. The pair-wide cutdown, finite-positive-subset, averaging-counterexample, and weak-star-density obligations remain separately tracked and must not be marked complete.

### `cor-folner-sequences-for-second-countable-compactly-generated-groups` — level 8; escalated statement defect

- **Current assigned claim.** The batch-2 page manifest says every second-countable compactly generated LCH group with the listed compact symmetric generating set admits a Følner sequence; it does not assume the group is amenable. Its scaffold proof strategy directly applies the level-7 Følner criterion to every such group, but that criterion only produces the sets when the group is amenable.
- **Confirmed counterexample.** Take the discrete free group $F_2=\langle a,b\rangle$ and $S=\{e,a,a^{-1},b,b^{-1}\}$. The reduced-word model is countable, so the discrete group is second countable; it is LCH, $S$ is finite/compact and symmetric, contains $e$ and the nonempty open singleton $\{e\}$, and generates $F_2$. The published assigned counterexample `cex-the-free-group-on-two-generators-is-not-amenable` proves that $F_2$ has no invariant mean. If the assigned sequence existed, its stated estimate for every compact $Q$ would make it a Følner net by `def-left-folner-net-for-a-locally-compact-group`; `thm-folner-criterion-for-locally-compact-groups` would then imply amenability, contradicting that counterexample. Thus the statement is false as written.
- **Source audit.** Read BHV, *Kazhdan's Property (T)*, Appendix G.5 Remark G.5.3 (printed p. 469) and Appendix F.1 Proposition F.1.7 with its complete proof (printed pp. 424–425). BHV states that a compactly generated group is amenable iff it has a Følner sequence for a compact generating set; the proof uses Baire to obtain a compact-power neighbourhood and then contains each compact test set in a larger power. The assigned scaffold's Thomas Lecture 19 locator (slide 2/closing comments for sequence conversion) is not supported by that lecture: the complete lecture text has no such sequence or compact-generation passage. Do not retain that reference as evidence for this corollary.
- **Owner-held remedy and disposition.** The natural repair is to add amenability to the antecedent (or choose another owner-approved statement); either changes the current promised claim. I have not altered the statement, authored a purported proof, or registered a contract. This ID remains an open owner escalation; its ordinary item decision must be `escalate` until the owner resolves the statement. The already-authored Følner criterion is the exact required supplier once the claim is resolved.
- **Next action.** Continue with the next independent level-8 item, `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`; retain this corollary as the unresolved blocker.

### `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions` — level 8; supplier audit checkpoint

- **Claim and scope.** The assigned statement is unchanged: under AC, amenability passes to closed subgroups and Hausdorff quotients, and is closed under extensions by a closed normal subgroup and its quotient. All groups remain arbitrary LCH groups; no countability, sequence, or unimodularity condition is added.
- **Current suppliers reread.** Checked the current UCB definition, complex $L^\infty$ mean/amenability definitions, the two UCB/Reiter bridges and their complete proof uses, the Hulanicki criterion, weak containment definition and its finite-sum transitivity argument, the restricted-regular-representation lemma, quotient topology/group definitions, product topology and topological-group definition, compactness under continuous maps, the LCH closed-subspace theorem, Haar existence, and `lem-closed-subgroup-quotient-averaging-and-compact-lifts`. The last item supplies that $G/N$ is LCH Hausdorff and the quotient projection is open; it was omitted from the original row and must be added as a direct dependency. Also add the closed-subspace, Haar-existence, compact-image, product-topology, quotient-universal-property, open-surjection-quotient, and topological-group suppliers used below.
- **Proof audit and route.** For (i), restrict the coefficient approximations from $1_G\prec\lambda_G$ to compact subsets of $H$, then use `\lambda_G|_H\prec\lambda_H`, finite-sum transitivity, and Hulanicki for $H$. For (ii), pull back actual UCB functions along the open quotient map; prove the pullback is isometric and intertwines translations, then restrict the $L^\infty(G)$ mean. For (iii), restrict amenability of $N$ to a UCB mean, set $\phi_g(h)=\phi(gh)$, and define $F_\phi(g)=m_N(\phi_g)$. The conjugation term $gng^{-1}$ proves $\phi_g\in\mathrm{UCB}(N)$; mean invariance gives right-$N$ invariance of $F_\phi$. It descends continuously, and an identity neighbourhood in $G$ maps to an identity neighbourhood in $G/N$, which proves quotient UCB by the exact supremum-defect equality. The resulting invariant UCB mean gives (P1) and amenability through the assigned UCB/Reiter suppliers. No global section of $G\to G/N$ is needed.
- **Source audit.** Re-read BHV, *Kazhdan's Property (T)*, Appendix G.2, Proposition G.2.2(i)–(ii) and its complete proof (printed p. 451), and Appendix G.3 Corollary G.3.4 together with Proposition F.1.10 (printed pp. 426, 457). The local proof expands BHV's UCB pullback/extension route and invokes the assigned local weak-containment lemma. The manifest's Thomas Lecture 19 source locator is false for this theorem: the full Lecture 19 PDF contains no occurrence of “subgroup”, “quotient”, or “extension”. Remove that reference from this item. The current coverage file has no item-specific Thomas mapping for it, and its shared Lecture 19 source row remains for other mapped items.
- **Open work at this audit checkpoint.** Author the item, register corrected direct dependencies and a strict contract, and run explicit-path checks. After that continue with the two level-8 B-page examples; the Følner-sequence corollary remains owner-escalated.

### `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions` — level 8; authored and locally checked

- **Claim and proof.** Preserved all three implications and arbitrary LCH scope. The closed-subgroup proof restricts the Hulanicki coefficient approximations to compact subsets of $H$, applies the assigned restricted-regular-representation lemma and weak-containment transitivity, then returns to Hulanicki for $H$. The quotient is first shown to be a topological LCH group: the quotient projection is open, its square is an open quotient map, and the quotient multiplication and inverse are continuous by the quotient universal property. Amenability descends by pullback of actual UCB functions and restriction of an $L^\infty$ mean. For extensions, the conjugation estimate proves $\phi_g(h)=\phi(gh)\in\mathrm{UCB}(N)$; an invariant mean on $N$ gives $F_\phi(g)=m_N(\phi_g)$. Right-$N$ invariance makes $F_\phi$ descend, and openness of $G\to G/N$ plus equality of the two sup defects proves the descended function is UCB without a global section. The quotient invariant mean then yields Reiter (P1) and amenability.
- **Suppliers and registration.** Added exact direct dependencies for closed-subspace LCH, Haar existence, quotient LCH/openness, quotient group laws, product and quotient continuity, compact images, UCB means, and regular-representation continuity. Removed the unused Reiter-net cluster-point dependency. Item and A-page manifest agree on direct inputs and computed level 8. The contract has 29 exact source excerpts across 25 supplier IDs, maps all six proof steps to their actual inputs, and records all eight boundary dispositions. Choice is explicit: AC supplies Haar existence and is inherited through the UCB-to-Reiter and Hulanicki suppliers; the quotient proof uses no global section and no DC.
- **Source verification and correction.** Read the complete relevant BHV, *Kazhdan's Property (T)*, Appendix G.2 Proposition G.2.2(i)–(ii) proof (printed p. 451), Appendix G.3 Corollary G.3.4 (printed p. 457), and Appendix F.1 Proposition F.1.10 proof (printed p. 426). BHV proves quotient inheritance by UCB pullback and extension inheritance by fixed points; the local extension proof is an independent UCB-mean averaging argument. The item no longer cites Thomas Lecture 19, whose full text has no subgroup, quotient, or extension passage. The current coverage file has no item-specific Thomas source mapping for this theorem, so no sibling coverage row needed removal; its shared Lecture 19 source row remains for other items.
- **Checks actually run.** Explicit-path precheck passed (1/1); explicit rendercheck passed (1/1, 0 errors/warnings); strict contract passed (1/1, 0 errors/warnings). The run-wide dependency command reports only the pre-existing sibling mismatch `ex-extremal-length-of-rectangle-and-annulus` (declared level 4, computed 5); the owned pair has no dependency-level mismatch, and this theorem computes to level 8. Batch content policy, validate-plan, final item decisions, and the single batched proof-layout remain pending.
- **Open obligation and next item.** The earlier `cor-folner-sequences-for-second-countable-compactly-generated-groups` statement defect remains owner-held and escalated; its statement was not changed. Continue with level-8 B-page `ex-compact-groups-have-a-constant-reiter-net`; inspect its exact suppliers and source passages before authoring it.

### `ex-compact-groups-have-a-constant-reiter-net` — level 8; supplier and source audit checkpoint

- **Assigned statement and owner readiness.** Preserve the exact claim for a compact LCH group with normalized left Haar probability: $f=\mathbf1_K$ has norm one, is left-invariant, gives a constant Reiter net with zero defect on every compact test, and yields amenability via the Reiter equivalence. The owner `ready` receipt is scaffold readiness only; no item acceptance is implied.
- **Exact supplier audit.** Re-read `cor-normalized-haar-probability-on-a-compact-group` (AC, left Haar probability and $\mu(K)=1$), the complex Haar $L^1$ definitions (class norm and integral), the Reiter (P1) definition (including $\Delta_\varnothing=0$ and the net formulation), and `thm-amenability-is-equivalent-to-reiter-p1` (AC). The assigned earlier proposition `prop-compact-and-locally-compact-abelian-groups-are-amenable` supplies the compact-group amenability context and is retained as an actual cited input. The constant-net construction requires no choice after the Haar measure is fixed.
- **Proof route.** Since $K$ is the whole group, its indicator is the constant-one Borel function and lies in $L^1(K)$ with norm $\mu(K)=1$. For every $x,y\in K$, $x^{-1}y\in K$, so $L_x\mathbf1_K(y)=1$ exactly; every compact-set defect is zero, including the empty test by the Reiter definition. The one-point directed set gives the constant net. Independently define $m([\varphi])=\int_K\varphi\,d\mu$: essential boundedness and finite probability mass give integrability, almost-everywhere equality gives representative independence, and integral linearity, positivity, normalization, and left invariance give an invariant mean on complex $L^\infty(K)$. This explicitly checks the compact clause of the earlier proposition under the library's class convention. The item will still use the assigned Reiter equivalence for its promised amenability inference.
- **Source audit.** Read BHV, *Kazhdan's Property (T)*, Appendix G.1 Example G.1.5 in full (printed p. 448): it identifies normalized Haar probability as the invariant mean on $C(K)$ and concludes compact groups are amenable. Also read Theorem G.3.1's complete listed equivalence and Reiter (P1) definition (printed pp. 452–453). Thomas Lecture 19's full PDF has the Reiter (P1) definition on slide 10 but no compact-group constant-net example; the manifest's item-specific Thomas locator is unsupported, so remove Thomas from this item's source list. The current batch coverage file has no Thomas content row assigned to this example; preserve the shared source row for other mappings.
- **Open work.** Author the pointwise Reiter calculation and the complex $L^\infty$ mean check, correct and register exact dependencies (including direct integral suppliers if the mean calculation needs them), replace the unsupported source locator, create its strict contract, and run explicit-path gates. Recompute dependency levels and the remaining queue after the actual dependency set is registered.

### `ex-compact-groups-have-a-constant-reiter-net` — level 8; authored and locally checked

- **Claim and proof.** Preserved the exact constant-net statement. The Borel density $\mathbf1_K$ has $L^1$ norm $\mu(K)=1$ and satisfies $L_x\mathbf1_K=\mathbf1_K$ pointwise for every $x\in K$, so $\Delta_Q(\mathbf1_K)=0$ for every compact $Q$, including $Q=\varnothing$. The singleton directed set gives the constant net, and Reiter equivalence gives amenability. In a separate check of the compact-group clause, normalized Haar integration is shown well-defined on complex $L^\infty$ classes: essential boundedness on a probability space gives integrability, the integral ignores null changes, and left Haar invariance makes the mean invariant. This matches the earlier compact-group proposition under the library's $L^\infty$ convention.
- **Dependencies, Choice, and registration.** The item and B-page manifest agree on 22 actual direct inputs at computed level 8. In particular, the earlier compact/abelian amenability proposition is used as the compact clause checked by the explicit mean. AC is stated and used through normalized Haar probability and Reiter-to-amenability; the singleton net and integral calculations add no further choice or DC. The strict contract contains 23 exact excerpts across 22 suppliers, three step claims and inputs, and all eight boundary dispositions. B-page coverage now maps BHV G.1 Example G.1.5 and G.3 Theorem G.3.1(iii) to this item while preserving sibling source rows.
- **Source verification.** Read BHV, *Kazhdan's Property (T)*, Appendix G.1 Example G.1.5 (printed p. 448) in full; it identifies normalized Haar probability as the invariant mean on $C(K)$ and concludes compact groups are amenable. Read Theorem G.3.1's full statement and Reiter (P1) clause (printed pp. 452–453); the library's local Reiter equivalence supplies the complete inference used here. Thomas Lecture 19 slide 10 defines Reiter's property, but the full lecture contains no compact-group constant-net example; its old item locator was removed. The current B-page coverage has no item-specific Thomas mapping for this example.
- **Checks actually run.** Explicit-path precheck passed (1/1); explicit rendercheck passed (1/1, 0 errors/warnings); strict contract passed (1/1, 0 errors/warnings). The run-wide dependency command reports the same unrelated sibling mismatch `ex-extremal-length-of-rectangle-and-annulus` (declared 4, computed 5); the owned pair has no dependency-level mismatch, and this item computes to level 8. Batch content policy, validate-plan, final item decisions, and the one batched proof-layout remain pending.
- **Next item.** Continue with `ex-folner-sets-in-rn` at level 8, following the dispatch order; inspect its exact suppliers and source passages before authoring it.

### `ex-folner-sets-in-rn` — level 8; supplier and source audit checkpoint

- **Assigned claim.** Preserve the explicit left Haar measure $\lambda_n$, the expanding closed cubes $C_t=[-t,t]^n$, and the bound $2((1+R/t)^n-1)$ for a compact test set inside a centered cube. The item then supplies a left Følner net and invokes the assigned Følner criterion for amenability.
- **Exact supplier audit.** Re-read the left Følner definition (including Borel/positive finite measure and the empty-test convention), Lebesgue measurability and translation invariance, box measure formula for open/closed faces, Lebesgue Radon property, finite-measure additivity/monotonicity, compact-subset boundedness in a metric space, the Euclidean metric definition, directed nets, and the binomial theorem. The current strategy also cites Haar uniqueness and bounded-set finiteness, but neither is necessary for the fixed measure $\lambda_n$ or the finite box calculation; direct dependencies will be pared to actual uses. Add the compact-to-bounded input needed to choose $R$ from an arbitrary compact $Q$.
- **Scaffold-route correction.** The displayed estimate is valid, but the strategy's claimed inclusion of the *whole* symmetric difference in the outer-minus-inner shell is false: for a positive translate, a strip of $C_t\setminus(x+C_t)$ lies inside the inner cube. Repair the route using equal finite measures: $\lambda_n(A\triangle C_t)=2\lambda_n(A\setminus C_t)$ for $A=x+C_t$, and the one-sided difference is contained in the outer box $[-(t+R),t+R]^n\setminus C_t$. The box formula and finite additivity then give exactly the promised bound. This is a proof-strategy repair, not a counterexample to the item statement.
- **Choice and scope.** The item was not recording a Choice dependency even though its direct Radon and box suppliers assume AC$_\omega$ and the Følner criterion assumes AC. Full AC supplies AC$_\omega$ and is the approved pair context; the authoring record will state this exact use. The displayed Følner sets and directed net remain explicit. Keep $n\ge1$ from the Lebesgue and Euclidean metric suppliers and choose a nonnegative centered-cube bound $R$ for each compact $Q$.
- **Source audit.** Verified BHV, *Kazhdan's Property (T)*, Appendix G.5 Remark G.5.3 and Example G.5.4 (printed p. 469): G.5.4 is the interval sequence in $\mathbb Z$, not a cube calculation in $\mathbb R^n$. The complete Theorem G.5.1 proof (printed pp. 466–469) supplies the general Følner context, but not the claimed Euclidean estimate. Garrido, *An Introduction to Amenable Groups*, §3 likewise defines the Følner condition and gives the $\mathbb Z$ example, with no $\mathbb R^n$ cube estimate. Both item source locators must be corrected to describe that context only; the Euclidean calculation is local and elementary. No source uncertainty blocks the calculation.
- **Open work.** Author the compactness-bound argument, one-sided shell estimate, explicit convergence bound from the binomial theorem, and AC-aware Følner-criterion inference; synchronize exact dependencies, source notes, and a strict contract. The Choice premise will be made explicit in the item and manifest and listed as a Step 4 statement qualification; the mathematical claim and ID remain unchanged under the pair's approved AC scope.

### Continuation pass `c394992e1208ca49` — verification, corollary authoring, refreshed records

- **Entry state.** The prior dispatch `dcb003c64da27aec` ended exit=1 because the
  pair-author artifact audit found one missing carrier,
  `items/cor-folner-sequences-for-second-countable-compactly-generated-groups.md`;
  every other gate finding in the final disposition above named that same file.
  This pass re-verified the live state before editing: the 25 `repaired` item
  receipts recompute as current, the four auxiliary `escalate` receipts stand
  with the evidence quoted above, `def-complex-haar-l-infinity-space` is absent
  from both the immutable baseline inventory and its existing-file list (a
  genuine post-baseline addition for the engine's auditor certification), and
  the pair scope receipt was stale only because of the corollary row changed
  below.
- **Corollary repair and authoring.** The scaffold row for
  `cor-folner-sequences-for-second-countable-compactly-generated-groups`
  omitted the amenability hypothesis that its own strategy silently used, and
  the unqualified existence claim is false: $F_2$ is second-countable and
  compactly generated and has no Følner sequence. I re-read the sources live
  (author-hosted BHV PDF, 523 pp.: Remark G.5.3 printed p. 469 states that for
  compactly generated $G$ amenability is *equivalent* to the existence of a
  Følner sequence, and the exhaustion "every compact subset is contained in
  $eQ^m$ for some $m$" is in the proof of Proposition F.1.7, printed
  pp. 424–425; Thomas Lecture 19, PDF pp. 3 and 17, proves the
  mean/Følner equivalence and reduces tests to compact sets containing $e$).
  The repaired statement restores "amenable" — the design's promised
  countability-versus-amenability separation — and the proof is local: steps
  1.1 and 2.1 build the compact exhaustion $K_n=S^n$ (open exhaustion from
  $W=U\cdot U^{-1}$), step 2.2 selects one Følner witness per $K_n$ at
  tolerance $1/n$ through the criterion ($AC_\omega$ from AC), step 3.1 proves
  the compact-uniform limit, and step 1.2 proves the converse through the
  criterion; second countability is never used. The item, its manifest row
  (statement, 12 exact dependencies, level 8, AC note, strategy, sources), the
  batch-2 contract (8 exact citations, 6 derivations, all eight boundary
  dispositions) and the two coverage rows now agree and pass their checks.
  The item decision remains owner-held: the standing `escalate` receipt
  predates the repair and `itemDecision` reports "changed inputs require a
  current owner decision"; this writer did not and cannot record a new
  decision for it.
- **What was not changed.** No proof of the four false or route-gapped
  auxiliaries was invented, no claim was narrowed, and no owner-held decision
  was overridden; their items, receipts, and counterexample artifacts are
  preserved exactly as recorded above. The theorem-level Følner criterion and
  everything downstream of it do not consume
  `lem-reiter-functions-can-be-cut-down-to-folner-sets` (its deps and proof
  bypass it), and nothing in the pair consumes the three refuted auxiliaries.
- **Registration refresh.** Scope receipt re-recorded `sufficient` at
  confidence 1 with the corollary repair in its reason (scope hash changes
  because the manifest statement changed). Batch-2 coverage now has 111
  harvested rows: I renamed the G.5.3 corollary row to name the Proposition
  F.1.7 exhaustion it uses, added the Thomas Lecture 19 row for the corollary,
  and removed the unused Bourbaki book-landing-page pointer, which was never
  full text and alone failed the source-fetch gate; the bibliography entry
  itself stays in the owner-held item with its "not used as evidence" locator.
  All 13 remaining sources are fetch-verified. The shared group-b
  scope-decision file (`…-alpha-b-scope-decisions.json`) now records `stands`
  with per-row evidence for all 15 batch-2 declines; the 8 batch-4 rows are
  left pending for that pair. No changes were made to the cross-batch input
  (still `[]`). The A page's placement in the category pathway remains a Step 4
  sync item.
- **Cross-pair finding (reported, not edited).** Batch 4's
  `thm-an-amenable-property-t-locally-compact-group-is-compact` contract cites
  `thm-hulanicki-weak-containment-criterion-for-amenability` with the quote
  "Then $G$ is amenable if and only if $1_G\prec\lambda_G$", which is no
  longer a verbatim substring of the authored Statement (the clause survives
  inside the fuller sentence, so the *use* is unaffected; only the quote is
  stale). The merged strict-contract gate reports this one error against this
  pair's items; the batch-4 owner or the Step 4 quote refresh must update it.
- **Checks actually run in this pass.** Explicit-path precheck: 31 files, 30
  proof-bearing items checked, 0 failing (`def-amenable-locally-compact-group`
  has no proof section). Explicit-path rendercheck: 33 files (31 items and
  both pages), 0 errors, 0 warnings. Prosecheck: 0 errors, 4 heuristic
  count-in-prose warnings. One batched `proof-layout.mjs` invocation: 31
  items, 156 steps, 0 defects. Batch-2 `proof-contract --strict`: 31/31 items,
  0 errors/warnings. `content-policy` on the batch manifest: 31 scoped items,
  0 errors/warnings. `coverage-checklist --require-destination`: 2 pages, 111
  harvested results, 0 errors/warnings. `manifest-deps`: 31 items, 0 errors.
  Scoped `depcheck`, `fwdcheck`, `extcheck`, `depsource`: pass on all 31 items
  (480 dependencies to published pages, 0 unresolved). Run-wide
  `item-dependency-levels check`: exit 0. `source-fetch-check`: 13/13
  sources. Pair-author artifact audit: 35/35 files present. `scope-decisions
  check --group b`: 0 errors on the 15 batch-2 declines. Run-scoped
  `validate-plan` and `pathcheck` still fail on in-flight sibling pairs; the
  owned pages show only the previously recorded `redundant-prereq` warnings
  and the one `draft-unplaced` pathway warning.

## Final Step 3b disposition

### Authored content and decisions

Created the A and B pages at
`library/representation-theory/amenability-reiter-nets-and-folner-conditions.md`
and
`library/representation-theory/amenability-reiter-nets-and-folner-conditions-examples.md`.
Thirty-one item files are authored: the 30 original assigned IDs with current
files, plus the dispatch-authorized addition
`def-complex-haar-l-infinity-space`. That local prerequisite is absent from
both the immutable pre-author inventory and its existing-file list; it was not
put through manual item review, as the engine will certify it after successful
dispatch. The corollary
`cor-folner-sequences-for-second-countable-compactly-generated-groups` was
authored in the continuation pass with its amenability hypothesis restored
(see that section: the scaffold statement omitted the hypothesis and was false
for $F_2$); its item decision remains owner-held because the standing
`escalate` receipt predates the repair.

Twenty-five original items have current `repaired` receipts at confidence 1:
`def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group`,
`def-amenable-locally-compact-group`, `def-reiter-condition-p1`,
`def-left-folner-net-for-a-locally-compact-group`,
`def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group`,
`lem-an-lch-group-has-an-open-sigma-compact-subgroup`,
`lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous`,
`lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean`,
`lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities`,
`lem-an-invariant-mean-produces-a-reiter-net`,
`lem-a-reiter-net-has-an-invariant-mean-cluster-point`,
`thm-amenability-is-equivalent-to-reiter-p1`, `lem-folner-nets-give-reiter-nets`,
`lem-layer-cake-identity-for-nonnegative-integrable-functions`,
`thm-folner-criterion-for-locally-compact-groups`,
`thm-hulanicki-weak-containment-criterion-for-amenability`,
`lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions`,
`lem-a-group-with-the-fixed-point-property-is-amenable`,
`prop-compact-and-locally-compact-abelian-groups-are-amenable`,
`lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation`,
`thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`,
`ex-folner-sets-in-rn`, `ex-compact-groups-have-a-constant-reiter-net`,
`ex-the-real-affine-group-is-amenable-and-nonunimodular`, and
`cex-the-free-group-on-two-generators-is-not-amenable`.

Four original scaffold items keep current `escalate` receipts at confidence 1,
and a fifth is owner-held after repair:

- `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets` is false for the Haar convention in this library. In
  $G=\mathbb T\times\mathbb R_{\rm discrete}$, the Borel set
  $A=\{1\}\times\mathbb R$ has infinite measure while every Borel subset of
  $A$ has measure zero or infinity. The owner must resolve the claim.
- `lem-averages-over-probability-densities-attain-the-essential-supremum` is
  false: on $\mathbb Z$ with $h=-1$, all probability averages are $-1$ while
  $\|h\|_\infty=1$; a separate nonnegative example refutes the proposed repair.
- `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` is false
  by the ultrafilter mean on $\mathbb T\times\mathbb R_{\rm discrete}$ and the
  missed weak-star neighborhood at $\mathbf1_A$. Its declared supplier
  `lem-averages-over-probability-densities-attain-the-essential-supremum` is
  required by the original strict-separation route, but none of the current
  numbered counterexample steps uses it; both claims remain escalated.
- `lem-reiter-functions-can-be-cut-down-to-folner-sets` has a confirmed gap in
  the cited extraction route for arbitrary positive-measure compact $Q$.
  The route is verified when $e\in Q$; the stronger statement has neither a
  complete proof nor a statement-level counterexample. The owner must supply
  the proof or decide on the supported identity-containing scope and downstream
  consequences.
- `cor-folner-sequences-for-second-countable-compactly-generated-groups` no
  longer matches that first escalation text: the continuation pass restored
  the missing amenability hypothesis from the design and the source (BHV
  Remark G.5.3), preserved the promised compactness/countability reading, and
  authored the item, its manifest row and its strict contract. The standing
  `escalate` receipt now reports "changed inputs require a current owner
  decision", so the item remains owner-held: the owner records `repaired` for
  the restored statement or directs another disposition.

The current pair scope has a fresh `sufficient` receipt. The prior independent
Step 3a receipt is preserved at
`research/frontier-43-complex-representation-15-amenability-scope-original-review-preserved.json`.

### Supplier and registration changes

- `ex-folner-sets-in-rn` now cites
  `thm-lebesgue-measure-is-a-complete-measure` for measurability closure in the
  set-subtraction step; item and manifest dependencies, Choice note, and
  contract agree at level 8.
- `prop-compact-and-locally-compact-abelian-groups-are-amenable` and
  `ex-compact-groups-have-a-constant-reiter-net` replace the examples-page
  `cor-normalized-haar-probability-on-a-compact-group` dependency with the
  A-page suppliers `cor-existence-of-left-and-right-haar-measures` and
  `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`.
  Each item locally rescales a left Haar measure by the compact group's
  positive finite total measure.
- `lem-reiter-functions-can-be-cut-down-to-folner-sets` replaces the
  examples-page `ex-lebesgue-measure-as-haar-measure-on-rn` dependency with
  A-page Lebesgue Radon, translation-invariance, interval-volume, Euclidean
  local-compactness, metric, Haar-uniqueness, and AC-to-countable-choice
  suppliers. Its local route audit now derives the real-line Haar formula
  directly.
- Coverage now classifies the Alghamdi PhD thesis as a monograph, its supported
  source-kind entry. `coverage-checklist --require-destination` passed with two
  pages, 110 harvested results, and zero errors or warnings (111 after the
  continuation pass below).
- The batch-2 cross-batch input is `[]`; refresh completed successfully. No
  outgoing in-run cross-batch dependency is declared by this pair. The unified
  ledger retains open incoming batch-4 rows for
  `def-amenable-locally-compact-group`,
  `thm-hulanicki-weak-containment-criterion-for-amenability`, and the page
  prerequisite; the batch-4 consumer owner must reconcile its uses. Its review
  file was not edited.

### Final checks

Current-pass numbers (continuation `c394992e1208ca49`); the earlier pass's
values are superseded.

- Explicit-path precheck: 31 files, 30 proof-bearing items checked, zero
  failures. Explicit-path rendercheck: 33 files (31 items and both pages), zero
  errors or warnings. Prosecheck: 0 errors, 4 heuristic `count-in-prose`
  warnings. The single required batched proof-layout invocation checked 31
  items and 156 steps with zero defects.
- Strict proof contracts cover all 31 authored items and pass with zero errors
  or warnings. `content-policy` reports 31 scoped items, 0 errors, 0 warnings,
  so the earlier `scope-item-missing` / `page-item-missing` errors no longer
  exist. The merged run-wide strict pass reports its remaining errors on
  in-flight sibling pairs plus the single stale batch-4 quote of this pair's
  Hulanicki Statement reported in the continuation section.
- The dispatch artifact audit requires 35 files for this pair and now reports
  `ok: true`, 35/35 present.
- Scoped forward-reference, external-reference, and dependency-source checks
  pass on the 31 authored files (480 dependencies resolve to published pages,
  0 unresolved). Owned item dependency levels match every current manifest
  label, and the run-wide `item-dependency-levels` command exits 0.
- Run-scoped `validate-plan` and `pathcheck` still exit nonzero on in-flight
  sibling pairs. The owned A/B pair has no hard `validate-plan` error; the A
  page carries its 24 `redundant-prereq` warnings, and `pathcheck` reports the
  one `draft-unplaced` warning because Step 4's pathway sync has not placed the
  new draft A page yet.
- `source-fetch-check` passes 13/13 sources after the unused Bourbaki
  landing-page pointer was removed from coverage (its bibliography entry stays
  in the owner-held item). No new defect in published content was confirmed.

### Handoff status

The two pages, 31 authored item files, contracts for every authored item, the
refreshed coverage map, the batch cross-dependency input, the refreshed scope
receipt, the group-b decline decisions for this pair, and this report are
present; the pair-author artifact audit is 35/35 and the batch-2 checks above
pass. The pair is **not fully closed**, and this writer cannot close it:

- Five original item decisions remain owner-held: the four genuinely false or
  route-gapped scaffold auxiliaries (each with a current `escalate` receipt and
  evidence) and the repaired corollary, whose standing `escalate` receipt now
  reports "changed inputs require a current owner decision".
- `def-complex-haar-l-infinity-space` awaits the engine's auditor certification
  after this dispatch succeeds.
- Cross-pair obligation: the batch-4 owner (or the Step 4 quote refresh) must
  update the stale Hulanicki Statement quote in
  `thm-an-amenable-property-t-locally-compact-group-is-compact`'s contract.

All other run-wide gate failures observed in this pass belong to sibling pairs
still in flight and are not this pair's to clear. No item was marked complete
on unresolved mathematics.

## Focused UCB-domain repair, round 1 complete

Native amenability was drained and root authorized only the confirmed domain repair. Proof 4.1 now uses associativity, probability-convolution closure (3.2), and the kernel-independence equality (3.1) to obtain m((f0*f)*φ)=m(f0*φ)=mtilde(φ). Every argument of the original mean lies in UCB. Its full Statement, Definitions, dependencies and arbitrary-LCH/global-null conventions remain unchanged. Updated only this carrier, exact batch-2 manifest strategy and exact contract derivation. Actual direct consumers were reconciled by reading: invariant-mean-to-Reiter F4/Proof1.1 uses its unchanged topological-mean conclusion; norm-density F20/Proof4.1 uses its unchanged probability-convolution closure and assumes/uses the unchanged topological invariance. No downstream carrier or quote change is necessary because their cited interfaces and exact actual uses remain intact. The transitive Reiter/Hulanicki/Følner/amenablePropertyT mappings recorded above remain valid; their whole closures are not newly audited or accepted here.

Final one-path local checks after final edit: precheck exit0 (1 checked,0 failing); rendercheck exit0 (1 file parsed); strict batch-2 proof-contract --items lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean exit0 (1/1,0 errors/warnings); proof-layout exit0 (1 item,7 steps,0 defects). No fullStep3 gate. This concrete branch has used one focused mathematical repair round; round2 is reserved for a concrete new failure. Reviewer writes are drained. Root owns source creation-origin currency/public refresh and decisions; no origin/mtime/runtime/globalplan/published edit was made.

Canonical itemHashGuard: lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean: `daef2b744cbc92b1ffeaedb5909eebd80ceb5db90992a855298decbe0dec78db`.

## Three true auxiliary replacements, focused round 1 complete

Root explicitly authorized the exact replacements with the same IDs/kind lemma. Implemented supplier-first: finite-positive/compact-detectability/L1-pairing equivalence, signed local support β with complex support-function and continuous β=sup_G conclusions, and continuous-test density for all means/full global-L∞ weak-star approximation for topological means. Every Statement explicitly assumes AC, keeps arbitrary LCH G and the actual outer-regular/open-inner-regular/global-null conventions, and retains the original false-claim counterexamples in Remarks. No published convention or main Reiter/Hulanicki Statement was weakened.

The finite-regularity bridge uses open O of finite measure and compact inner approximation of O only. The averages proof uses nonnegative Cc approximants for the upper bound and finite compact superlevel witnesses for the lower bound; the complex formula takes signed real parts rather than a complex norm or separate unsupported optimizers. The weak-density proof makes its own explicit compact-support adjoint identity: Cc probability witnesses permit compact continuous kernel integration, then approximate an arbitrary bounded Borel test on compact KL in L1 to pass the identity. Zero kernels are handled. Fixed p^sharp smoothing of the continuous-test witness net approximates a topological mean on every global L∞ class. It does not use the norm-density item's proof-only intermediate conclusion as an invented theorem or create a dependency cycle. No assertion about full density in arbitrary means remains.

Exact actual supplier-use reconciliation: finite-detection is used by support β and the density counterexample; support β supplies density's F2 continuous support value at Proof1.1; weak-density has no current actual item consumer. Original false-route edges were replaced by genuine uses of the corrected mathematical Statements, not mechanically deleted. The main Day/Reiter/Hulanicki route remains its independently proved UCB smoothing route. The density item now has level4 (was2), with genuine smoothing level2 and UCB-mean/closure level3 dependencies; finite-detection level0 and support level1 remain. Imported dependencyLevels on the explicit batch-2 manifest reports these exact labels 0/1/4 and no cycles. Topologically sorted the batch-2 A-page item inventory and matching page frontmatter so all suppliers precede density. Page prose now explains local-null/global-null detectability and the two distinct approximation domains.

Synchronized the three batch-2 manifest rows (Statements, dependencies, strategies, levels, titles, provenance, sources/locators/axiom use), exact contracts/boundaries/quotes, coverage support notes, and A-page ordering/prose. Source locators explicitly distinguish historical false scaffold claims from these local corrections. Provenance is ai-altered/ai-altered with source URLs; no external unproved fallback was added. Density F8 specifically cites the UCB supplier's Remark for probability-convolution closure, not its topological-mean Statement. Preserve that exact Remark citation when refreshing contracts.

Final explicit-path checks after final carrier edit: precheck exit0 (3checked,0failing); rendercheck exit0 (3items+1page parse); scoped strict batch-2 proof-contract --items these3IDs exit0 (3/3,0errors,0warnings); proof-layout exit0 (3items,10steps,0defects). Initial canonical precheck renumbering and contract boundary-anchor corrections were adopted within this authoring round; no second mathematical repair loop or fullStep3/corpus gate was run. Reviewer writes are drained. Root owns decisions and any needed native Amenability refresh/source-origin currency; no runtime/globalplan/ledger/ownerdecision/origin/mtime or outside-active-pair edit was made.

Current canonical itemHashGuard hashes (verification excluded):

- lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets: `a6eef5c7ef4eee74ac265304344ed2d38dc7f3f9dfc4500aae7aa1e66599b36a`
- lem-averages-over-probability-densities-attain-the-essential-supremum: `502b25d82e4e896674134227f4bd60bec43972c7e5ab3a38227031febf642698`
- lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set: `0d07f0d2693a85e8144cfa4c8aab435ed19edbe69f12cb2a451a5c6021cef4db`

Quantitative cutdown carrier remains untouched and EXACTLY held. Its original single-f/2ε claim was not narrowed, removed, or renamed false. Separate parity-smoothing assessment follows.

## Exact cutdown preserving proof, first mathematical repair round complete

This addendum supersedes every earlier held/missing-result line about the quantitative cutdown in this report. Root found a new scalar-averaging preserving route and explicitly authorized its first genuine mathematical repair round. The assigned reviewer independently checked all action orders, scalar inequalities, compact averages, measurability and zero cases before implementing it. Full original arbitrary-positive-compact-Q/single-density/2epsilon Statement is preserved, with no e-in-Q, symmetry, countability, unimodularity, semifiniteness or new generating-set hypothesis. Removed escalation/audit-only caveats and the open obligation; retained the original failed-overlap-route examples in Remarks. The consequent P1⇒full arbitrary-target Følner condition is also proved locally. The only Statement convention added defines the consequent's empty-test supremum as0.

The compact orbit average g is defined directly by finite Borel partitions and samples of y↦L_yf. Intersecting partitions proves the finite convex averages Cauchy in the published complete L1 space; positivity/probability are retained in the norm limit. This avoids assuming a pointwise formula for the published extended convolution or global Bochner measurability. The exact noncommuting action calculation gives Q defect(h)≤3δ/2 and Q² defect(h)≤2δ for h=(f+g)/2.

The decisive new inequality is valid for ANY finite-positive Borel U: insert L_xL_a1_U to obtain d_x(U)≤d_a(U)+d_xa(U) for each x,a∈Q. Integrate in a using only left Haar and xQ⊂Q², giving μ(Q)d_x(U)≤C_Q(U)+C_Q²(U), uniformly in x. No bad xQ² overlap, right translation or reverse-layer selection is needed. Strict h-superlevel indicators are right-continuous in L1 for t>0; dyadic right-step level approximations explicitly make D(a,t) product-measurable by countably many continuous a-slices on Borel level intervals. Restrict Haar to compact finite Q and Q² and apply Tonelli/layer cake; no global sigma finiteness or locally-null quotient replacement is used.

Weighted averaging selects one positive-finite level U even when δ=0, since integralH=1 and integralF≤B=δ(3μQ/2+2μQ²). With r=μQ²/μQ≥1, the new uniform bound is δ(3/2+2r)≤epsilon(1+3/(4r))≤7epsilon/4<2epsilon. The stronger7epsilon/4 bound is an explicitly local derived result. P1 supplies fresh data on Q0² after adjoining a compact identity neighborhood to an arbitrary CONSEQUENT target; it is not used as a substitute for the first single-density clause.

Exact sources/interfaces read: complete published left-translation continuity, complete complex L1/Cc-density and extended-convolution definition (the latter's deliberately absent general pointwise formula motivated the partition construction); complete native layer-cake proof, exact Chebyshev/Tonelli/measurable-limit interfaces and existing Haar/Borel compact conventions. Inspected complete BHV author-hosted PDFpp472–475/printed466–469, including all of G.5.1/G.5.2 and its extraction proof. That proof assumes e∈Q; source locators now say so and explicitly distinguish the new preserving local route/stronger constant. No authoritative source theorem for this stronger unqualified quantitative clause is claimed.

Synchronized only this carrier and its affected batch2 manifest Statement/deps/strategy/axiom/provenance/sources, exact citations/derivations/boundaries and coverage support notes. The computed/declared dependency level remains1; explicit batch2 manifest graph has no cycles. Current exact item-text/dependency scan finds no consumer outside the carrier itself, and the batch2 inventory has no direct consumer, so no mathematical downstream rewrite is necessary. Main arbitrary-LCH amenability/Hulanicki branches remain intact. No other item, published convention, active principal subject, runtime/globalplan/ledger/decision/origin/mtime edit was made.

Final explicit-path precheck exit0(1checked0failing), rendercheck exit0(1file), scoped strict batch2 proof-contract --items lem-reiter-functions-can-be-cut-down-to-folner-sets exit0(1/1,0errors0warnings), proof-layout exit0(1item7steps0defects). Required canonical numbering was adopted before these final checks. Scoped batch2 coverage-checklist require-destination exit0(2pages111harvestedresults0errors0warnings). These are local checks and owned mathematical review, not fullStep3 gate/wholeclosure acceptance. Reviewer writes are drained; root owns independent integration, current decision and any public native Amenability refresh. Round2 is reserved solely for a concrete post-handoff finding. No exact missing mathematical result remains in this cutdown branch after this proof.

Canonical itemHashGuard(verificationexcluded): lem-reiter-functions-can-be-cut-down-to-folner-sets: `63827dfa361be975de2aae737d2b11d2932e886fd1c2bc9158f828902973892c`.
