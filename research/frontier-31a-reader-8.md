# Frontier 31a — Step 6a reader report, batch 8

## Opened scope

I read the current `research/frontier-31a-batch-8.pages.json`, all four
assigned pages, all 94 assigned item files, the complete batch proof-contract
file, and the 37 direct published dependencies named by the manifest.  The
opened pages were:

- A: `library/homological-algebra/ext-and-balanced-resolutions.md` (35 items)
  and `library/homological-algebra/yoneda-extensions-and-homological-dimension.md`
  (44 items).
- B: `library/homological-algebra/ext-and-balanced-resolutions-examples.md`
  (7 items) and
  `library/homological-algebra/yoneda-extensions-and-homological-dimension-examples.md`
  (8 items).

The direct published dependency inventory comprises the supplied
projective/injective-resolution data, comparison and homotopy-independence
results, derived-functor and delta-functor results, syzygy/resolution results,
the exact-functor/adjunction result, the free-module result, the extension,
pullback/pushout, and biproduct results, and the dimension/PID results listed
in the manifest.  I read each current target.  The source gate also fetched
all six batch coverage sources successfully.

## Confirmed defects

### R8-1 — fatal: 75 proof-bearing items are proof-strategy scaffolds, not mathematical items

**Location:** every item in the `scope` array and `contracts` map of
`research/frontier-31a-batch-8.proof-contracts.json` (75 items); in each
corresponding `items/<id>.md`, the `Statement`/`Example`/`Statement refuted`
heading and its `Proof`/`Verification`/`Refutation` body.

**Evidence:** all 75 contract objects are byte-for-byte identical.  They
contain no citation or derivation and only the generic assertions “The first
proof step performs the construction or comparison stated in the item” and
“The second proof step draws the stated conclusion from the construction.”
Their matching item bodies have the same two generic steps.  For example,
`prop-ext-zero-is-hom-for-the-injective-construction` says only “Identify
H^0 Hom(M,I(N)) with Hom(M,N) ...”; it supplies neither a hypothesis nor an
isomorphism.  The balance theorem says only “Compare the two augmented edge
Hom complexes with Tot Hom(P,I),” and the examples/counterexamples say “Use”
or “Give” without displaying their data.

This is not a short omitted step: the 75 items have no proposition,
quantification, construction, counterexample, conclusion, or verifiable
argument.  The defect affects 30 proof-bearing A items on the Ext page, its
7 B items, 30 proof-bearing A items on the Yoneda/dimension page, and its
8 B items.  It includes the false-statement refutations: their prefixed
`FALSE:` sentences are not refuted by the generic text.

The 75 affected IDs are exactly the contract scope (and therefore are
individually locatable without a lossy paraphrase):

`prop-ext-zero-is-hom-for-the-injective-construction`,
`prop-ext-zero-is-hom-for-the-projective-construction`,
`prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`,
`prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`,
`prop-positive-ext-vanishes-on-an-injective-second-variable`,
`prop-positive-ext-vanishes-on-a-projective-first-variable`,
`lem-the-two-hom-double-complex-differentials-commute-before-signing`,
`lem-acyclic-assembly-by-exact-columns`, `lem-acyclic-assembly-by-exact-rows`,
`lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact`,
`lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact`,
`thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic`,
`lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data`,
`prop-the-ext-balance-isomorphism-is-natural-in-both-variables`,
`prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws`,
`thm-long-exact-ext-sequence-in-the-second-variable`,
`thm-long-exact-ext-sequence-in-the-first-variable`,
`prop-the-two-ext-long-exact-sequences-agree-under-balance`,
`thm-ext-dimension-shifting-in-the-first-variable`,
`thm-ext-dimension-shifting-in-the-second-variable`,
`cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable`,
`cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable`,
`prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses`,
`lem-ext-one-of-z-mod-n-by-z-is-z-mod-n`,
`fs-ext-is-defined-before-choosing-or-supplying-resolutions`,
`fs-projective-ext-and-injective-ext-are-equal-by-definition`,
`fs-ext-is-covariant-in-both-variables`,
`fs-positive-ext-vanishes-whenever-either-variable-is-injective`,
`fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals`,
`fs-balance-of-ext-requires-the-spectral-sequence-pages`,
`ex-ext-zero-as-hom-in-both-constructions`,
`ex-ext-from-a-two-term-projective-resolution`,
`ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group`,
`ex-the-hom-double-complex-in-low-bidegrees`, `ex-an-ext-dimension-shift`,
`cex-positive-ext-does-not-vanish-for-an-injective-first-variable`,
`ex-naturality-of-the-balance-isomorphism`,
`prop-a-morphism-of-extensions-is-an-isomorphism`,
`prop-equivalence-of-extensions-is-an-equivalence-relation`,
`lem-pullback-and-pushout-descend-to-extension-classes`,
`lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives`,
`thm-baer-sum-makes-extension-classes-an-abelian-group`,
`prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject`,
`lem-equivalent-extensions-have-the-same-ext-class`,
`lem-every-ext-one-class-is-represented-by-an-extension`,
`lem-two-extensions-with-the-same-ext-class-are-equivalent`,
`thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one`,
`cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set`,
`lem-yoneda-splicing-is-well-defined-on-equivalence-classes`,
`thm-yoneda-product-is-associative-and-unital`,
`thm-higher-yoneda-ext-agrees-with-derived-ext`,
`prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product`,
`thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective`,
`thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`,
`thm-injective-dimension-at-most-n-iff-higher-ext-vanishes`,
`cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite`,
`thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees`,
`prop-global-dimension-zero-characterises-semisimple-module-categories`,
`prop-hereditary-rings-have-global-dimension-at-most-one`,
`lem-subgroups-of-free-abelian-groups-are-free`,
`thm-the-integers-have-global-dimension-one`,
`fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m`,
`fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects`,
`fs-equivalence-classes-of-extensions-automatically-form-a-set`,
`fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category`,
`fs-projective-dimension-is-the-length-of-any-projective-resolution`,
`fs-left-and-right-global-dimension-are-equal-by-definition`,
`ex-the-split-extension-as-the-zero-baer-class`,
`ex-baer-sum-of-two-extensions-of-cyclic-groups`,
`ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes`,
`ex-splicing-two-short-exact-sequences`, `ex-a-noncommutative-yoneda-product`,
`ex-projective-dimension-of-a-cyclic-abelian-group`,
`ex-global-dimension-of-a-field-and-of-the-integers`, and
`cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms`.

**Required repair:** independently author each item’s formal claim or fully
specified construction/counterexample, give its actual argument with cited
dependencies, and replace its corresponding generic proof contract.  Any
material repair must remove a stale `verification.judge` record if one is
present, then reflow and precheck the changed item and run the focused contract
check.

### R8-2 — fatal: the pullback/pushout “definition” never defines either construction

**Location:** `items/def-pullback-and-pushout-of-an-extension.md`,
`## Definition`.

**Evidence:** the entire definition is an instruction to “Use the published
pullback and pushout universal properties ...”, with no morphism in the
quotient variable, no morphism in the subobject variable, no pullback/pushout
object, and no induced exact sequences.  Thus it does not define the objects
used by the Baer sum or its descendant claims.  The published dependency
`def-pullbacks-and-pushouts` defines universal pullbacks/pushouts in general,
but it does not supply this missing extension-specific definition.

**Required repair:** for an extension
`0 -> N -> E -> M -> 0`, explicitly define the pullback extension along
`u:M' -> M` and the pushout extension along `v:N -> N'`, display the two
short exact sequences, and record their endpoint variance.  Update any
affected proof contract if the repair makes an item proof-bearing.

## Per-page verdict

| Page | Verdict | Reason |
| --- | --- | --- |
| `ext-and-balanced-resolutions` (A) | fail | Its 30 proof-bearing items have R8-1; the balanced notation rests on an unproved comparison. |
| `ext-and-balanced-resolutions-examples` (B) | fail | All 7 examples/counterexamples have R8-1. |
| `yoneda-extensions-and-homological-dimension` (A) | fail | Its 30 proof-bearing items have R8-1, and its pullback/pushout definition has R8-2. |
| `yoneda-extensions-and-homological-dimension-examples` (B) | fail | All 8 examples/counterexamples have R8-1. |

## Edits, checks, and blockers

No content edit was made: repairing either fatal issue requires substantive
reauthoring, not a safe local correction by an independent reader.  Therefore
no reflow or item-specific post-edit precheck was applicable and no judge
record was removed.

Focused checks were nevertheless run against the unchanged current files:

- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-8.coverage.json --timeout-sec 45` — 6/6 fetch-verified.
- `node tools/content-policy.mjs research/frontier-31a-batch-8.pages.json` — 94 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-31a-batch-8.proof-contracts.json --strict` — 75/75, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with all 94 assigned item paths — 75 checked, 0 failing.

The last two passes are not mathematical clearance: their contracts and proof
texts are the same generic scaffolds identified in R8-1.  There is no external
access blocker and no uneditable published-dependency defect to escalate.
