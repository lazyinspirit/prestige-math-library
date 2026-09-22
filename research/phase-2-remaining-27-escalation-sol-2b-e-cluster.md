# Group e owner-escalation cluster resolution (lane 2b)

Run: `phase-2-remaining-27`  
Role: `alpha-adjudicate`  
Lane: `escalation-sol-2b`  
Date: 2026-09-20

## Scope and evidence read

I read the terminal receipts for queue positions 17, 18, 28, 29, 37, 38,
40–44, 46–48, 50–51, 54, and 59–61, including the context reseals at
17, 18, 47, 48, 50, and 51. The reseals repeat the same mathematical
obstructions after sibling changes; they are not counted as new defects.

I checked the current bytes of every escalated item and each direct supplier
named below. I also checked the cited source passages needed to decide whether
the local statement was false, stronger than its consumers could use, or merely
missing a hypothesis/interface. No published item was edited.

## Root-cause clustering

| Cluster | Escalated queue positions | Owning supplier item(s) | Decision on current supplier bytes |
|---|---:|---|---|
| Universal-meagre carrier | 17, 18; also 41–44, 60 and 61 downstream | `def-shelah-universal-meagre-forcing` | **False as written.** The empty tree satisfied the displayed perfectness clause vacuously, and `|t|` had no declared tree-height meaning. This destroyed the intended nonempty perfect carrier and made the empty pair absorbing. Repaired. |
| Sweetness/amalgam carrier | 28, 29, 40–44, 60; also 61 downstream | `def-shelah-sweetness-model` | **Missing carrier hypothesis.** The source construction uses a distinguished weak condition for unused coordinates. Without one, the terminal-antichain counterexample in the position-28 receipt is admitted. Repaired. The queued amalgamation proofs still require local re-adjudication. |
| Raisonnier and null-code choice/absoluteness | 37, 38, 46, 59; also 61 downstream | `def-boldface-sigma-one-three-measurability`; published `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`; published `thm-canonical-definable-global-well-order-of-l` | The measured-domain definition was **too strong for its consumers**: it demanded DC although they supply Countable Choice. Repaired to Countable Choice by exposing the exact reduction already present in the dyadic proof. The remaining uses are still open: the global well-order of `L` does not itself give the claimed uniform relative-`L[x]` predecessor enumeration/complexity, and the published dyadic lemma still states DC while position 46 claims a ZF construction. |
| Fraenkel–Mostowski ground-model interface | 47, 48, 50; inherited by 54 | `def-brunner-ordered-lauchli-permutation-models`; `def-corson-ordered-rational-permutation-model` | **Unnecessarily strong hypothesis.** Both definitions demanded an externally transitive ZFA+AC ground. The FM construction and Pincus transfer are internal to an arbitrary model of ZFA+AC. Repaired. The queued consumers must still correct their own atom-cardinality and proof-prose defects. |
| Good–Tree–Watson symmetric-model bridge | 51; inherited by 54 | `def-good-tree-watson-symmetric-stone-model` and the published formal consistency interface | **Too strong for the consumer, and not safely removable.** The source construction explicitly starts from a transitive ZFC ground; the current formal consistency theorem supplies consistency/proof reduction, not such a transitive model. No source-backed bridge from bare `Con(ZF)` was found, so no edit was made and this cluster remains open. |
| Shelah separation consistency interface | 61 | `thm-baire-property-model-equiconsistent-with-zfc`; published `thm-formal-consistency-of-zfc-plus-gch-from-zf` | The equiconsistency supplier is source-backed and not false, but the formal supplier is **too weak for the consumer's semantic use**: it expressly does not provide the model `M` assumed in position 61. No supplier was changed. Position 61 also inherits the unresolved measurable-set lower-bound chain. |

Position 61 is an integration theorem and inherits three independent clusters:
the Shelah construction, the Raisonnier-based nonmeasurability lower bound, and
the separate formal-to-semantic ground-model step. It therefore remains open
even though the forcing carrier interfaces were repaired.

## Authorised supplier repairs

### `def-shelah-universal-meagre-forcing`

Licence pre-Step-7 hash:
`2fe3a6adfd8133c2726095ca9ab6c8a5b476bd24750eac38402b35cfaf7fbe96`

Lane-input hash after intervening adjudicator work:
`a2cf76365a073e07aa500ce3df454618a59882855d4213e0be017d9f65400a2a`

Post-hash:
`00ca98ca2f3294938021a9011360bb9c42f39c89be642089559a2f8769bd971f`

The repair makes every tree condition nonempty, defines
`ht(t)=max{|s|:s in t}`, and adjoins a separate weakest
`1_UM`. The weak condition is not represented by an empty tree. Compatibility,
directed-class, and generic-tree prose now refers to nontrivial tree conditions
and uses the declared height.

Source witnesses:

- Shelah Definition 7.7 calls the witness a “perfect nowhere dense tree,” and
  Claim 7.11 says “remember 0 in UM is a minimal element.”
  <https://shelah.logic.at/files/95333/176.pdf>
- Roslanowski–Shelah state of a weakest forcing condition that “we will always
  assume that there is one.”
  <https://shelah.logic.at/files/95909/672.pdf>

### `def-shelah-sweetness-model`

Licence pre-Step-7 hash:
`8da00a1f05ce8da63241812856180c95982d298ce7ecb1b4b42790b6144fbffd`

Lane-input hash after intervening adjudicator work:
`66124b81d702ec0abc7a81bc53074750b23532f12e9bebd06cfa6476f203976b`

Post-hash:
`b3b7cf5045e111fa541d5d6ee694518ecf3778a52635a6a956dd11d55a2b28b0`

The forcing preorder now carries a distinguished weakest condition `1_P`; it
need not lie in the dense sweetness domain. The definition states the exact
consumer convention: canonical copies and amalgams fill an unused coordinate
with this weak condition. This is the missing carrier hypothesis supplied by
the intended Shelah forcings and excludes the receipt's bare-antichain input.

The same two Shelah sources above support the repair: the general forcing
notation assumes a weakest element, and the original amalgamation construction
uses the zero coordinate in its canonical copies.

### `def-boldface-sigma-one-three-measurability`

Licence pre-Step-7 hash:
`7c933744159408b3690266c34895f7ff3ff5bb3be360ebd6c86f0f8fa2f73f10`

Lane-input hash after intervening adjudicator work:
`eac89bcb9e422e1ef75c2f272b4b4735bca078599b537e55fce8bab8fa2ec11d`

Post-hash:
`ae2f938f71336e6acb758dc44c6b12163cd8b542cd3621f00fdd526cef85b4ac`

The measured-domain assumption is now Countable Choice, which is what positions
37–38 and 59 already assume. This is justified by the complete local argument:
step 1.2 of `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` uses DC only
to derive Countable Choice and says that this “licenses the countable-choice
hypotheses of F5 and F6.” The subsequent pullback construction therefore runs
directly under Countable Choice. `thm-completion-of-a-measure-space` already has
exactly that hypothesis.

The coin-measure convention is sourced at
<https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf>; the completion
construction is supported by Tao, Exercise 1.4.26,
<https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf>.

This correction does **not** certify the relative-`L[x]` complexity argument or
position 46's ZF claim.

### `def-brunner-ordered-lauchli-permutation-models`

Licence pre-Step-7 hash:
`71e269ca83b92420c6cb3a3360efec882ca85db0192ac9943cb77a579c37d4da`

Lane-input hash after intervening adjudicator work:
`ff5efd0bea8f4377e3e8f08f2fefe2b780c743a8a4ef0d64058e1ca442bb9a74`

Post-hash:
`b09bc9d56a298dbff4a11e71f037457ec93c5626430dcf6a35478eaa29e29bf3`

The construction is now explicitly internal to a model `M` of ZFA+AC. No
external well-foundedness or transitivity is assumed; order types, compact
supports, the normal filter, and hereditary symmetry are all computed in `M`.
A concrete transitive presentation remains a permitted special case.

Brunner supplies the two support systems:
<https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf>. Kleppmann's standard
FM setup says “let N be a model of ZFA+AC,” with no transitivity premise:
<https://www.repository.cam.ac.uk/bitstream/1810/253759/1/thesis.pdf>.

### `def-corson-ordered-rational-permutation-model`

Licence pre-Step-7 hash:
`fbc8e4e45adac5685d7fd3a0c8235b97706b733f1b48c5ceaca0c649920ed607`

Lane-input hash after intervening adjudicator work:
`09b47db8269138b9a39331f51687d9e5a96c065f5ef24bb5434853ca72b19044`

Post-hash:
`31deaa22b39cd3fa9ca4225b57fecda83e301ebf5c499d3c8325112e56e17a07`

The same internal-model correction was made for Corson's ordered rational
Urysohn construction. Corson's own setup begins, “Let M be a model of ZFA +
AC”: <https://arxiv.org/pdf/2001.06513>. Kleppmann supplies the independent
standard FM reference above.

All five repairs have `owner-prerequisite-repair` rows in
`research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl`, with a
direct escalated consumer in `found_via`, group `e`, exact guard hashes, and two
HTTPS sources. As required by `step7-guard`, each row's `pre_sha256` is the
frozen pre-Step-7 guard hash; the separate lane-input hashes above record the
later bytes actually re-read before these repairs.

## Unresolved source-level obstructions

### Relative constructibility and the Raisonnier chain

The proof at position 37 does not establish that its strict least-code order is
`Sigma^1_2(x)`: an existential code for a countable well-founded level does not
by itself implement the asserted bounded predecessor search with the displayed
quantifier complexity. Position 38 likewise invokes GCH in `L` as if it directly
supplied its relativised `L[x]` enumeration. Jech's descriptive-set-theory
development gives the relative constructibility facts in a chapter whose
ambient hypothesis is ZF+DC, not the Countable Choice context claimed here:
<https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/25-descriptive_set_theory.pdf>.

Position 46 is independently open. It claims ZF, but its cited coin-measure
supplier states DC. Its Baire-category argument may be choice-free after the
measure object is available; the present source chain does not construct that
measure in ZF. The recent Raisonnier paper corroborates the intended theorem,
not this missing weak-choice derivation:
<https://arxiv.org/pdf/2602.23340>.

Consequently positions 37, 38, 46, and 59 remain open.

### Good–Tree–Watson consistency bridge

Good–Tree–Watson explicitly begin with “a transitive model of ZFC”:
<https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf>. The library's
formal theorem proves `Con(ZF) -> Con(ZFC+GCH)` by proof-code reduction and
explicitly says it does not construct a set model or a transitive model. Those
interfaces cannot be composed as currently written. This is not a removable
wording hypothesis, so position 51 remains open and position 54 inherits that
obstruction. Position 61 has an analogous formal-to-semantic mistake in a
different Shelah construction; it does not depend on the Good–Tree–Watson
model.

## Per-escalation disposition

`resolvable-by-re-adjudication` means the defective unqueued supplier has now
been corrected and the final adjudicator can assess or repair the queued item's
own proof. It does not claim that the stale queue position already passes.

| Queue position | Escalated item | Disposition | Reason / next adjudication target |
|---:|---|---|---|
| 17 | `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` | `resolvable-by-re-adjudication` | Re-read against the nonempty perfect-tree/weak-condition interface; repair the finite-prefix graft so it appends only the tail after the chosen prefix. |
| 18 | `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` | `resolvable-by-re-adjudication` | Same root as 17; its reseal is not a separate obstruction. |
| 28 | `thm-shelah-sweet-amalgamation-preserves-sweetness` | `resolvable-by-re-adjudication` | The terminal-antichain supplier counterexample is excluded. Recheck density, admission witnesses, canonical copies, and the extension clause. |
| 29 | `ex-sweet-amalgam-over-a-common-complete-subalgebra` | `resolvable-by-re-adjudication` | Rebuild the displayed modulus from the repaired theorem; the old intrinsic modulus assertion is not automatically preserved. |
| 37 | `lem-measurable-null-code-orders-bound-constructible-null-unions` | `still-open` | Measure choice interface repaired, but relative-`L[x]` predecessor enumeration and the claimed `Sigma^1_2(x)` definition remain unsupported. |
| 38 | `lem-raisonnier-family-is-a-sigma-one-three-filter` | `still-open` | The application of GCH-in-`L` to `L[x]` and the relative constructibility complexity remain unsupported under the stated weak choice. |
| 40 | `thm-shelah-sweet-partial-isomorphism-extension` | `resolvable-by-re-adjudication` | Re-adjudicate after 28; check the twisted copy and the fixed-model extension clauses using the weak-coordinate convention. |
| 41 | `thm-shelah-universal-meagre-composition-preserves-sweetness` | `resolvable-by-re-adjudication` | Both carrier suppliers are repaired; add the trace-agreement and name/extension details identified in the receipt. |
| 42 | `thm-shelah-ch-omega-one-sweet-construction` | `resolvable-by-re-adjudication` | Re-adjudicate only after 28, 40, and 41; check limit continuity and Boolean completion locally. |
| 43 | `lem-shelah-real-name-capture-and-coded-meagre-unions` | `resolvable-by-re-adjudication` | The UM carrier is repaired; recheck complete embeddings, name capture, and coding against 42. |
| 44 | `lem-shelah-homogeneous-truth-has-baire-representatives` | `resolvable-by-re-adjudication` | Replace direct truth comparison by the source's quotient-homogeneity/formula-translation argument after 43 is settled. |
| 46 | `lem-uniform-null-g-delta-capture-functions` | `still-open` | Its statement promises ZF while the available coin-measure supplier states DC; no ZF construction was established. |
| 47 | `thm-relative-consistency-bpi-without-urysohn` | `resolvable-by-re-adjudication` | The Brunner construction now accepts the internal ZFA+AC ground supplied by the consistency argument. |
| 48 | `thm-relative-consistency-countable-choice-without-urysohn` | `resolvable-by-re-adjudication` | Same resealed root as 47; additionally replace the consumer's “countably infinite” real-ordered atom set by the internal real order type. |
| 50 | `thm-relative-consistency-bpi-without-stone` | `resolvable-by-re-adjudication` | Corson's supplier now has the internal model interface its consumer supplies; recheck the consumer's formal-consistency prose and typo. |
| 51 | `thm-relative-consistency-dc-without-stone` | `still-open` | No bridge from bare consistency to the source's transitive ground has been supplied; the bounded-metric and rational-cover proof defects also remain. |
| 54 | `rem-choice-strength-ledger-baire-urysohn-stone-tychonoff` | `still-open` | It inherits position 51 and must retain explicit relative-consistency qualifications. |
| 59 | `thm-raisonnier-filter-is-rapid-from-null-code-measurability` | `still-open` | Depends on open positions 37, 38, and 46; its block-index boundary also requires local correction. |
| 60 | `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` | `resolvable-by-re-adjudication` | The Shelah carriers are repaired; settle 44 first, then recheck the Borel-to-open/error coding. |
| 61 | `thm-shelah-baire-model-separates-baire-property-from-measurability` | `still-open` | Inherits the unresolved Raisonnier-based lower-bound chain and separately treats formal consistency as a supplied semantic ground model, even if the Shelah forcing half is repaired. |

Thus **13 positions are resolvable** (17, 18, 28, 29, 40–44, 47, 48, 50,
and 60), and **7 remain open** (37, 38, 46, 51, 54, 59, and 61).

The round-2 queue also reports the repaired supplier positions 6
(`def-boldface-sigma-one-three-measurability`), 7
(`def-brunner-ordered-lauchli-permutation-models`), and 16
(`def-shelah-sweetness-model`) stale. They need ordinary final-adjudicator
reseals before the affected later positions can become current. The owner lane
does not write those receipts. `def-shelah-universal-meagre-forcing` and
`def-corson-ordered-rational-permutation-model` are unqueued suppliers.

## Focused validation

- `node tools/prosecheck.mjs` on the five repaired suppliers: 5 files, 0 errors,
  0 warnings.
- `prosecheck --warnings` on this evidence report: 0 errors; its numerical
  inventory triggers only the expected heuristic count warning.
- Strict selected `tools/proof-contract.mjs` check for all five suppliers:
  `ok: true`, 5 checked, 0 errors, 0 warnings. No contract file needed a content
  change.
- Targeted `git diff --check` on the five suppliers and the two owned research
  artifacts: clean. The required unscoped `git diff --check` also ran; it
  reports three pre-existing, out-of-scope whitespace failures in
  `lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`,
  `thm-locally-compact-gelfand-duality`, and
  `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`.
- `node tools/step7-guard.mjs` with the run's canonical arguments recognised
  all 693 changed items as licensed, including the five new prerequisite rows.
  Its sole error is an unrelated pre-existing stale auditor-created
  certification carrier for `def-brownian-motion-started-at-x`.
- `node tools/depcheck.mjs`: ran to completion but returned `FAIL` for seven
  pre-existing, out-of-scope B/examples-page dependency errors. None names a
  repaired supplier or a dependency changed here; the full output also retains
  the repository's existing warnings.
- Round-2 group-e `queue-status`: 40 of 61 positions pending. It reports the
  three repaired queued suppliers at 6, 7, and 16 stale and all twenty assigned
  escalations at the positions listed above stale. No terminal record or reseal
  was written by this lane.

## Blockers handed to the owner/final adjudicator

1. Supply a source-complete relative-`L[x]` coding/predecessor lemma at the
   stated weak-choice strength, or narrow positions 37–38 and 59.
2. Supply a genuine ZF construction of the coin measure used at position 46,
   or add the missing choice hypothesis and propagate that change.
3. Supply an appropriate formal/model-theoretic bridge for the transitive
   Good–Tree–Watson ground, or weaken the relative-consistency conclusion at
   positions 51 and 54.
4. At position 61, replace the unsupported “model available from formal
   machinery” step by an exact source-backed relative-consistency argument,
   while retaining whatever lower-bound hypothesis survives resolution of the
   Raisonnier cluster.
