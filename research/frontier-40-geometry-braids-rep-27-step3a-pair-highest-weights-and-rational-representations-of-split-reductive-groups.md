# Step 3a scope review — Highest Weights and Rational Representations of Split Reductive Groups

- Run: `frontier-40-geometry-braids-rep-27`, batch 20, role alpha (step 3a
  scope review). This dispatch owns only this pair.
- A page: `highest-weights-and-rational-representations-of-split-reductive-groups`
  (order 893, `algebraic-geometry`).
- B page: `highest-weights-and-rational-representations-of-split-reductive-groups-examples`
  (order 894).
- Scope decision: **sufficient** (receipt
  `research/frontier-40-geometry-braids-rep-27-step3a-review-highest-weights-and-rational-representations-of-split-reductive-groups.json`).
- This report decides scope only. It is not an item approval, a proof review, or
  an owner record, and it edits no scaffold, item, coverage row, plan, or engine
  state. The initial review flagged the item-level statement defect documented
  in §8; it was repaired during authoring and does not change the scope decision.

## Current scope reconciliation after authoring

The frozen pre-author inventory contained 35 batch-20 items: 33 on A and 2 on
B. The current batch-20 manifest contains 37 items: 35 on A and 2 on B. Its only
post-baseline IDs are `def-simple-and-semisimple-representations` and
`lem-tensor-and-hom-representations-are-rational`; both are marked
`local_addition: true` and are local prerequisite helpers on the existing A
page. The owner's Frontier 40 direction permits required local helpers, and
the pair authoring task directs authors to supply necessary prerequisites on
assigned A pages. These two helpers support the already-promised representation
and complete-reducibility arguments; they add no pair or promised claim.

The current non-owner Step 3a receipt remains `sufficient` for scope hash
`3427227d88b5dfd6583bf85fc8810cee3cc2d1e98677302d92bdfb50f7b2006e`, matching
the current pair manifest. This reconciliation does not record an owner
decision or certify either item. Both additions still await the engine's item
and readiness certification against current content and the successful author
dispatch; no self-review receipts are recorded. The Step 3a §8 induced-module
statement repair has been applied and is covered by the current receipt.

Counts in the original review below that describe the 35-item inventory or its
open cross-batch edges refer to the frozen pre-author state. The current
manifest has 117 distinct dependency IDs (35 in-pair, 43 elsewhere in this
run, and 39 published), 98 distinct Statement/strategy item links with none
unresolved, and 144 batch-20 cross-batch rows, all `verified`.

## 1. Inputs read (exact paths)

- Dispatch brief and prompt:
  `research/frontier-40-geometry-braids-rep-27-step3a-pair-highest-weights-and-rational-representations-of-split-reductive-groups-dfddf14030593199.task.md`.
- Binding direction: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27-pair scope; local helpers permitted; lower-order in-run dependencies permitted).
- Prose design: `research/plan-algebraic-geometry-expansion-track.md` AG-GRP-5 —
  order table L20/L40, design row L218, anti-overclaim checklist item 4 (L327).
- Contract: `research/plan-spec.json` rows 893/894 (`requires` arrays; the plan's
  item lists for these rows are empty and were filled by this run's scaffold).
- Scope carrier: `research/frontier-40-geometry-braids-rep-27-batch-20.pages.json`
  (Frozen pre-author inventory: A 33 and B 2, 35 items total. Current manifest:
  A 35 and B 2, 37 items total; 32 of 37 are local additions, all carrying
  `design_row: AG-GRP-5`, including the two post-baseline helpers above.)
- Coverage: `research/frontier-40-geometry-braids-rep-27-batch-20.coverage.json`
  (2 pages, 4 source rows, 67 harvested results: 32 `included`, 22 `inline`,
  13 `out-of-scope` with reasons; 0 errors, 1 expected low-yield warning on B).
- Cross-batch record: `research/frontier-40-geometry-braids-rep-27-batch-20.cross-batch-dependencies.json`
  (At the frozen pre-author review: 114 open rows. The current refreshed
  record has 144 batch-20 rows, all `verified`.)
- Construction record: `research/frontier-40-geometry-braids-rep-27-batch-20.notes.md`.
- Dependency-order receipts: `research/frontier-40-geometry-braids-rep-27-batch-20.notes.md`
  §4/§10 (levels recomputed; the run-wide `item-dependency-levels check` names no
  batch-20 item, re-verified here).
- Required pages: batch-13 manifest
  `research/frontier-40-geometry-braids-rep-27-batch-13.pages.json` (A 13 / B 2 items);
  batch-19 manifest `research/frontier-40-geometry-braids-rep-27-batch-19.pages.json`
  (A 36 / B 3 items); published page
  `library/algebraic-geometry/groups-of-multiplicative-type-and-arithmetic-tori.md`
  (`status: published`).
- Owner decisions: no Step 3a owner record exists for this pair. The current
  non-owner Step 3a receipt is `sufficient` and matches the current scope hash
  shown above; the original pre-author review had required a current scope
  review before that receipt was refreshed.
- Sources re-read for this review (full texts, byte-identical to the coverage
  fetch stamps): Milne, *Algebraic Groups* 2022 printing, 4 838 013 bytes,
  sha256_16 `f2ddd8fa4d263085` (Ch. 4, 10, 12, 19, 21, 22 at the recorded
  locators); Steinberg, *Lectures on Chevalley Groups*, Arun Ram mirror,
  9 127 447 bytes, sha256_16 `5943b5571ab9815c` (Ch. 12, scan pp. 214–231).

## 2. Design vs delivered scaffold

- All five design-promised ids are present: A
  `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups`,
  `thm-complete-reducibility-of-rational-modules-in-characteristic-zero`,
  `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic`;
  B `ex-fundamental-sl2-modules-in-characteristic-p`,
  `cex-rational-modules-need-not-be-semisimple-in-characteristic-p`.
  No commissioned claim is weakened at statement level: the classification is
  stated for a split reductive group over a field and explicitly "in every
  characteristic"; complete reducibility is stated only in characteristic zero
  for connected reductive groups; the remark states exactly the positive-
  characteristic non-implication; the B page carries the promised SL_2
  classification example and the characteristic-$p$ nonsemisimplicity
  counterexample.
- The design's two special obligations are respected. (i) M22 Lemma 22.24 is
  isolated: `lem-primitive-vectors-from-standard-maximal-parabolics` states the
  maximal-parabolic existence with the correct pairings, and
  `lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples`
  handles the semisimple multiples; the coverage records Steinberg Ch. 12
  Theorem 39(e) second proof (Mostow) and Milne's NOTES line ("The proof of the
  key lemma 22.24 is taken from Steinberg 1967, Chapter 12"). (ii) The complex
  AG-LIE highest-weight pair is not cited: the batch-20 manifest contains no
  reference to `highest-weight-theory-for-complex-semisimple-lie-algebras` or
  any of its items, and no dependency reaches it.
- Supporting inventory matches Milne §22(a)–(c), with the local char-0 Lie block
  supplying Milne's Casimir route to 22.41–22.42 (stabilizer Lie algebras,
  ideals/normal subgroups, Lie(G) semisimple, nondegenerate trace forms,
  perfectness, Casimir endomorphism, codimension-one reduction, descent of
  semisimplicity, linear reductivity). These are proof helpers for the promised
  theorem, not additional published claims.
- `requires` arrays equal `plan-spec.json` verbatim; B requires only A; every
  in-run dependency has lower order than 893 (batches 13/14/15/18/19 = orders
  873/875/877/889/891). No forward or circular edges.

## 3. Subject coverage (definitions, results, examples)

- Definitions: weights, weight spaces, dominant weights, the $\Delta$-generated
  order, fundamental weights (with the correct caution that only the
  $\lambda_0$-part need not lie in $X$); primitive vectors for $(B,T)$ via
  $B$-stable lines; the induced coordinate module $E(\lambda)$; the
  contragredient representation.
- Highest-weight machinery: root-group expansion (Milne 22.14), normalizer action
  (22.15), modules generated by a primitive vector (22.17), existence and
  uniqueness of the highest weight for simple modules (22.18–22.19), and
  isomorphism from equal highest weight (22.19).
- Existence for arbitrary split reductive groups: $E(\lambda)$ primitive vectors
  (22.21–22.22), power extension over a normal affine domain (22.23), the
  maximal-parabolic fundamental-weight lemma (22.24), tensor products of
  primitive vectors (22.25), the semisimple existence lemma (22.26), central
  characters and descent along a central isogeny (22.9–22.12), the torus-times-
  semisimple product case, and the reductive case via
  $Z(G)^\circ\times G_{\mathrm{der}}\to G$ (19.25).
- Classification: `thm-dominant-weights-classify-...` (Milne 22.2), including the
  weight decomposition $V(\lambda)=V(\lambda)_\lambda\oplus\bigoplus_{\mu<\lambda}V(\lambda)_\mu$.
- Characteristic zero: complete reducibility for connected reductive groups
  (Milne 22.41–22.42) with the local Lie/Casimir apparatus; the statement
  matches (a)⇔(b)⇔(c) and adds the standard linearly-reductive consequence
  Milne 12.53(a).
- Positive characteristic: `rem-...positive-characteristic` and the B-page
  counterexample. The counterexample's mathematics was checked directly: for
  $V=S^p(k^2)$ the only $U$-fixed vector is a multiple of $e_1^p$, hence the
  only simple submodule is the Frobenius-twist module
  $W=\langle e_1^p,e_2^p\rangle\cong L(p)$, so $\mathrm{socle}(V)=W$ and
  $\dim V=p+1>2$; the B example's weight bound $\dim_k L(m)\le m+1$ with
  multiplicity at most one follows the same way.
- Exclusions carry written reasons in the coverage file and match the design's
  three-claim boundary: Milne 22.4–22.7 (absolute simplicity/base change/tensor
  products of simples), 22.27–22.28 ($E(\lambda)$ nonvanishing and unique socle),
  22.32–22.35 beyond SL_2, 22.36–22.38 and 22.48–22.52 (Weyl character theory),
  22.43–22.45, Steinberg Theorem 41 (full tensor-product theorem) and Theorem 42
  (Borel–Tits). The B-page low-yield warning is confirmed: its three declines
  (SL_2 simplicity for $m<p$ citing unread Springer; GL$_n$/PGL$_n$ examples
  duplicating published material; the full Steinberg tensor-product theorem)
  are appropriate for a two-item examples page.
- One recorded source limitation was independently checked: Milne 22.8 equation
  (139) fails for the legitimate split reductive root datum
  $X=\{(p,q):p\equiv q\ (2)\}$ with $\alpha=2\chi$, $\lambda=\omega+\delta$
  (no decomposition with $m\omega\in X$ and $\lambda_0\in X_0$). The scaffold
  avoids (139) and follows 22.20/22.26/22.12 instead, as its notes state.

## 4. Prerequisites and dependency scope

- The frozen 35-item scope had 100 distinct dependency IDs: 73 in-run
  scaffold items (7 batch 13, 6 batch 14, 3 batch 15, 9 batch 18, 15 batch 19,
  32 in-pair A, 1 in-pair B) and 27 published items. The current 37-item
  manifest has 117 distinct dependency IDs: 35 in-pair, 43 elsewhere in-run,
  and 39 published; none are missing or present-but-unpublished. Current
  Statement/strategy links comprise 98 distinct IDs, all resolved.
- The extra in-run item edges (batches 14/15/18) lie inside the transitive
  prerequisite closure of the declared page requires: AG-GRP-4 (batch 19)
  requires AG-GS-3 (batch 14), AG-ACT-1 (batch 15) and AG-GRP-3 (batch 18), and
  AG-GS-2 (batch 13) is the declared Hopf/comodule supplier. No page-level
  require is missing.
- Consumers: within the run, no other batch's item or cross-batch file names a
  batch-20 item as a supplier (0 hits); the only page-level consumer is B894.
  The current A-page items also consume the two local helpers as recorded in
  their dependencies. The planned
  AG-ACT-3 page does not require this pair (its complete-reducibility input is
  the complex Brion/Schwarz route), and `plan-spec.json` records no other page
  requiring this A page.
- **Unmet prerequisites: none found.** Nothing this pair consumes is absent from
  both the published library and the current scaffold. The frozen review counted
  40 external in-run supplier items and 114 open cross-batch edges; the current
  manifest has 43 external in-run supplier IDs and its 144 batch-20 cross-batch
  rows are verified. The two new local helpers are present before their
  consumers; their item/readiness certification remains pending as stated above.

## 5. Source coverage

- 67 harvested rows, 0 errors, 1 warning (the B-page low-yield warning, declines
  confirmed in §3). Milne is the primary route; Steinberg Ch. 12 is the
  independent treatment for the existence step. The two sources are genuinely
  independent for Lemma 22.24: Milne re-proves it intrinsically from Chevalley's
  line-stabilizer theorem 4.27 (covered locally by
  `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup` and its Lie clause),
  while Steinberg gives the Mostow proof via Chevalley's Lemma 75 — both read in
  the fetched texts. This closes the plan's source gate on "Steinberg's exact
  lemma and an independent treatment".
- Verified source content at the recorded locators: Milne 22.2 (fundamental
  theorem, no characteristic restriction), 22.13–22.26 (proof of the theorem,
  including 22.21–22.22, 22.23, 22.24 with the Steinberg NOTES, 22.25, 22.26),
  22.27–22.28, 22.29–22.31 (induced modules), 22.33 (SL_2 example; the $m<p$ and
  $m=p^h-1$ simplicity range is not claimed), 22.39–22.42 (semisimplicity in
  characteristic zero), 22.46–22.47; 12.52–12.56 (linear reductivity, char-2
  example, Nagata remark); 4.16, 4.19; 19.10–19.12, 19.25; 21.48–21.51.
- Verified Steinberg content: Theorem 39(a)–(e) (primitive vector fixed by
  $U=B_u$, weight strings $\lambda-\sum a_\alpha\alpha$, dominance, uniqueness,
  existence), Lemma 72, Lemma 73/Theorem 40/Lemma 74, Lemma 75 (Chevalley) with
  the Mostow attribution, the characteristic-$p$ paragraph after Theorem 39(e),
  and the p. 225 characteristic-zero complete-reducibility paragraph.
- The published AG-LIE complex highest-weight page is neither used nor duplicated
  (different category, complex Lie-algebra scope, and this pair's route is
  group-representation-theoretic over arbitrary fields).

## 6. Residual uncertainty

1. Proof correctness, statement-level truth beyond the checks recorded here, and
   the declared Choice inventories are outside 3a; the strategies are routes,
   not certified proofs. This review did verify the source statements and one
   statement defect (§8) directly against the full texts.
2. This decision's receipt is bound to the current batch-20 A+B manifest hash
   (`scopeHash` covers id, title, category, item ids/kinds/titles/statements).
   Any later item-list, title, kind, or statement change voids it and requires a
   fresh 3a decision. The induced-module repair is already reflected in the
   current receipt.
3. The current cross-batch rows record verified supplier interfaces; final
   run-level readiness and the two helper item certifications remain subject to
   the Step 3 gates.

## 7. Findings for the owner (summary)

- Scope: sufficient for the current 37-item pair. All design-promised claims,
  definitions, examples and counterexamples remain present with the promised
  hypotheses and boundaries. The pair contains 32 local helper additions,
  including two authorized post-baseline prerequisite items; no pair or promised
  claim was added.
- No unmet prerequisite was found. The two post-baseline helpers are in place
  before their consumers; their engine item/readiness certifications remain
  pending.
- The §8 induced-module statement defect was repaired as recorded in the
  current scope receipt; it was a repair to a planned result, not a missing
  topic, and did not alter scope.

## 8. Previously flagged item-level finding (now repaired): the induced-module fixed space

`prop-primitive-vectors-of-the-induced-coordinate-module` (batch 20, item 10)
states: "If $E(\lambda)\ne0$, then the space $E(\lambda)^{U^-}$ of
$U^-$-fixed elements is one-dimensional, its nonzero elements are primitive
vectors of weight $\lambda$, and evaluation at the identity $f\mapsto f(1)$ is
an isomorphism $E(\lambda)^{U^-}\to k$." With the manifest's own conventions
($B$ the Borel with positive roots, $U=B_u$, $E(\lambda)$ defined by
$f(gb)=f(g)\lambda(b^{-1})$ for $b\in B^0=B^-$, left regular action), this is
false; Milne 22.21–22.22 states the same result for $E(\lambda)^{U}$, and
Milne 22.27(c) uses $E(\lambda)^U=E(\lambda)_\lambda$.

Exact evidence. Take $G=\mathrm{SL}_2$, $B$ upper triangular, $U$ upper
unipotent, $U^-$ lower unipotent, $\lambda=m\chi$ with $m\ge1$. Then
$E(\lambda)=\bigl\langle g_{12}^{\,k}g_{22}^{\,m-k}:0\le k\le m\bigr\rangle$
inside $O(\mathrm{SL}_2)$, of dimension $m+1$ (so $E(\lambda)\ne0$). Direct
computation of the two fixed spaces gives:

- $E(\lambda)^U=\mathrm{span}\{g_{22}^{\,m}\}$: fixed by $U$, $T$-eigenvector
  of weight $\lambda$, and $g_{22}^{\,m}(1)=1$, so $f\mapsto f(1)$ is an
  isomorphism. This is exactly Milne 22.22 (his big cell is $U\cdot B^0$, his
  $U=B_u$).
- $E(\lambda)^{U^-}=\mathrm{span}\{g_{12}^{\,m}\}$: nonzero, but
  $g_{12}^{\,m}$ is *not* fixed by $U$ (so it is not primitive for $(B,T)$
  under `def-primitive-vector-of-a-rational-representation`, Milne 22.16 or
  Steinberg Theorem 39(a)), it has $T$-weight $-m\chi\ne\lambda$, and
  $g_{12}^{\,m}(1)=0$ (so evaluation at the identity is the zero map on this
  1-dimensional space, not an isomorphism).

The strategy has the same slip twice: it claims the big cell $U^-B^0$ is open
(with $B^0=B^-$, $U^-\cdot B^-=B^-$ is not open; Milne's cell is $U\cdot B^0$)
and concludes from a constant function on $U^-$ that an element of $E(\lambda)$
exists without the regularity/extension check that Milne 22.26(a) supplies.
Steinberg Theorem 39(a) likewise fixes primitive vectors by $U^+$, not $U^-$.

Impact and original recommendation (owner/author action, no scaffold edit by
this review): change the statement and strategy of
`prop-primitive-vectors-of-the-induced-coordinate-module` from $U^-$ to $U$
(equivalently $E(\lambda)^U$, big cell $U\cdot B^0$), matching Milne 22.22. The
consuming items `lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights`
(22.26 route) and `lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups`
then retain their planned arguments; the existence route to the classification
theorem is unaffected in scope. The original review also noted that the
coverage row "22.21–22.22 …" pointed only at
`def-induced-coordinate-module-e-lambda`; the row has since been split so that
22.22 points at the proposition item. The repair and coverage annotation are
now applied; the fresh current Step 3a receipt includes the repaired statement
under scope hash
`3427227d88b5dfd6583bf85fc8810cee3cc2d1e98677302d92bdfb50f7b2006e`.

## 9. Decision

`sufficient`: the current 37-item pair carries every definition, result,
example and counterexample the AG-GRP-5 design and the pair's library role
require. Its 32 local additions are proof helpers under the owner's helper
direction, including the two post-baseline prerequisites; they do not add a pair
or expand the promised claims. The design's source gate (Steinberg's Lemma 22.24
input plus an independent treatment) is closed with both full texts
re-verified; the current 117 dependency IDs and 98 wikilinks resolve to the
published library or current-frontier scaffolds. No omitted topic or unmet
prerequisite warrants enrichment or a pair merger. Item/readiness certification
for the two local helpers remains pending at this report's update.
