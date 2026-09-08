# frontier-34 / beta / batch-18 — blocked scaffold audit

Neither pair is ready for Step 3 sufficiency or authoring. This is an incomplete
mathematical audit, not a proof-closure certificate. The four manifest inventories
remain empty. No published content, canonical plan, prose design, other batch,
or controller configuration was edited. All binding mathematics remains owed.

## Authority and baseline

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md,
frontier-34-beta-18.task.md, frontier-34-beta-batch.task.md, the owned manifest,
the design's introduction/dependency table/B-companion contract, all of SET-10
and SET-30, and the clause-level target ledger. The batch task authorizes only
this batch's manifest, coverage, and notes. It does not authorize plan or prose
edits. The two page orders, titles, categories, companions and declared requires
match the current plan; no literal design/plan conflict was found.

The status command identified frontier-34 at 1-scaffold. HEAD was 4501527a0;
the last three commits also included ee067e69c and f854a7b88. The plan already
had unrelated uncommitted changes at entry. Historical RESUME files were not
used as run state. The drift report's SET entries name
`plan-set-theory-track.md`; this dispatch instead read the assigned completion
track directly. A page-level no-drift verdict does not settle the gaps below.

## Dependency evidence and its limits

A read-only Python traversal parsed all item frontmatter and scanned all 358
`research/*batch-*.pages.json` manifests then present. The initial parser used
an unsafe delimiter split and stopped on a URL containing `---`; the corrected
run split only whole-line frontmatter delimiters and reported no parse errors.

| Consumer | Requires closure, including consumer | Current item closure | Historical union closure | Historical manifests contributing |
|---|---:|---:|---:|---:|
| SET-10 | 105 | 2556 | 2562 | 55 |
| SET-30 | 38 | 1185 | 1203 | 25 |

The current item traversal included deps, justified_by and non-remark
forward_refs, and resolved aliases. It found no missing current IDs. Neither
requires closure reaches `deferred-set-theory-beyond-choice`. `validate-plan`
and `extcheck` exited 0, with legacy warnings. These are structural findings;
the exact statements and arguments of every one of these thousands of ancestors
have NOT been semantically audited in this dispatch. Full semantic closure
therefore remains an explicit fatal readiness obligation.

Historical manifests must not silently replace current interfaces. The union
scan found 1089/587 historical dependency disagreements for SET-10/SET-30. Its
apparent forbidden edge was
`research/level9-batch-1.pages.json: rem-baire-in-r-is-choice-free ->
rem-baire-category-choice-strength`. The current published remark was read
fully: it no longer has that edge, and expressly distinguishes the real-line
argument from the general complete-metric result. This is stale historical
evidence, not an established current bootstrap violation. The union also found
three obsolete compactness lemma IDs and, for SET-10, the old Young integral
IDs. Current-only traversal has no dangling target. No blanket certification
of all historical disagreements is made.

Read exact current interfaces for def-polish-space, def-baire-sequence-space,
thm-baire-sequence-space-is-polish,
thm-recursion-on-well-founded-setlike-relations,
rem-square-and-club-guessing-orientation,
lem-skolem-witness-closure-on-a-cardinal, and
thm-elementary-initial-segments-form-a-club. The Baire-space theorem explicitly
assumes countable choice for separability. It cannot be cited as an unqualified
ZF theorem. The recursion theorem provides unique definable set-valued
recursion, not arbitrary choices of witnesses. The club-guessing remark states
a requirement and explicitly proves no existence assertion.

## Fatal findings

**B18-F1 — elementary-model supplier absent from the proposed direct route.**
Kojman–Shelah, arXiv math/9512202v1, Claim 16, pp.8–9, uses an elementary chain
inside H(theta), of length omega_1+1, with stages of size aleph_1 and earlier
initial chains in successor stages. Neither consumer closure contains
`reflection-absoluteness-and-elementary-submodels`. That existing supplier is
order 663 with an empty plan inventory, and no batch manifest found in this
scan owns it. The published theorem about elementary *initial segments of a
structure whose universe is a regular cardinal* is not that chain theorem.
The general witness criterion proved inside its supporting lemma helps, but
does not by itself supply H(theta), cardinal-controlled hulls, elementary
unions, or the internally recorded chain.

Required repair before using this route: supply those precise interfaces on
the existing order-663 pair and add the backward requires edge, or fully prove
a replacement route within authorized earlier machinery. Neither has been
done. Do not use the catalogue to bridge this gap. Do not manufacture a second
general elementary-submodels page to conceal the existing supplier obligation.

Required supplier inventory (proposed additions, not registered IDs):

| A item | Required interface and proof order |
|---|---|
| def-elementary-hull-witness-functions | Set-sized countable-language structures and selected existential witnesses; deps: [thm-set-structure-satisfaction-recursion] |
| lem-cardinal-controlled-elementary-hull | Close a prescribed set of size at most mu under the witness functions in omega stages; mu infinite, ZFC; deps: [def-elementary-hull-witness-functions, thm-hessenberg, thm-recursion] |
| lem-union-of-elementary-increasing-chains | Finite tuples enter a stage; prove the existential witness criterion at the union; deps: [def-elementary-hull-witness-functions] |
| lem-internally-recorded-omega-one-elementary-chain | Continuous chain through omega_1, size aleph_1 stages, named parameters and initial-chain membership at successors; deps: [lem-cardinal-controlled-elementary-hull, lem-union-of-elementary-increasing-chains, thm-transfinite-recursion, thm-h-kappa-is-a-transitive-set] |
| lem-elementary-chain-characteristic-functions | For regular theta sufficiently large and n>1, characteristic suprema at aleph_n stay below aleph_n; prove strict growth from the stated chain closure; deps: [lem-internally-recorded-omega-one-elementary-chain, thm-cofinality-basics] |

B inventories: ex-elementary-hull-parameter-membership-versus-inclusion
(deps: [lem-cardinal-controlled-elementary-hull]);
ex-elementary-chain-coordinate-supremum
(deps: [lem-elementary-chain-characteristic-functions]). Category foundations;
placement is the existing A/B pair at 663/664, before SET-30 at 713. Its full
SET-5 design must also be preserved by its owner; this list specifies the
consumer interface, not a replacement of SET-5's scope. The final scan below
found no collisions; registration and semantic supplier closure remain owed.

**B18-F2 — PCF existence is not a black box.** The scale-existence theorem in
Kojman–Shelah is cited, not proved there. Kojman's *A,B,C of pcf* is a potential
course-length supplier, but only its introduction and the complete basic
club-guessing argument (Definitions 1–2, Fact 3, Theorems 1–3, pp.5–8) have been
read sufficiently here. Its remaining approachability/generator proof closure
has not been audited. SET-30 still owes generators, the basic PCF theorem,
the appropriate possible-cofinality/no-holes argument and the exact scale
existence theorem. Do not relabel any of those as orientation or presume a
60-item page budget has already been met. A split decision requires the full
inventory, not an invented count.

**B18-F3 — incompatible source versions and missing cardinality argument.**
The author-site Sh:609 PDF is a 13-page November 20 version. The arXiv v1 is a
10-page December 11 version and changes the space and numbered claims.
Use separate version-specific locators. The scale is on an infinite set of
coordinates; relabelling it does not prove the full-product assertion. Its
normalization is conditional on existence of least upper bounds, not a
globally good-scale assertion. The cardinality calculation still needs a
local proof of enough nonempty finite-modification classes. Neither version's
one-line cardinality sentence is an adequate local proof contract.

**B18-F4 — remaining source/proof closure.** The binding Borel/analytic,
separation, boundedness, regularity and conditional AD/DC portions have not
received their complete two-treatment harvest and semantic dependency audit.
Moschovakis §6F provides the substantial covering proof, but its general
arbitrary-alphabet auxiliary games and AC cannot be silently imported into a
ZF+AD argument. Marker Theorem 6.9 only states Borel determinacy and refers
elsewhere for its proof. Martin's six-page scan fetched via web but exposed no
text; screenshot calls returned references without image contents to this
agent. It is NOT counted as read. No claim that full DC follows from AD alone
has been approved.

The Rudin, Balogh, and additional-hypothesis aleph_1 constructions remain
proof obligations. Rinot–Shalev–Todorcevic and Nyikos full PDFs were located,
but their complete relevant construction proofs have not been read here and
are NOT claimed as evidence for a closed construction. The latter explicitly
flags a correction to the original Balogh argument, making reharvesting
necessary before copying a proof route.

**B18-F5 — fetch infrastructure.** Python's attempt to retrieve the PCF PDF
failed with `Temporary failure in name resolution`. Web retrieval succeeded
for the listed documents. Actual shell fetch checks, their outcomes, and URL
checks are recorded below after execution. No fetch stamps may be fabricated
from a search snippet, an abstract, or a web page-count report.

## Binding scope retained in full

SET-10 A: Baire/Cantor interfaces; trees and closed bodies; Borel hierarchy,
codes and evaluation; analytic projections/tree projections; Souslin operation;
separation and boundedness; analytic perfect-set theorem; measure/category
regularity; games/strategies; open determinacy; covering, lifting, closed
unravelling, composition, inverse-limit and countable-intersection lemmas;
transfinite Borel rank induction; AD/DC distinctions and conditional
regularity; choice-based Vitali/Bernstein/Hamel pathologies.

SET-10 B: worked Borel codes; closed-set tree; analytic non-Borel witness;
determined open games; fs-every-set-of-reals-is-borel. Projective determinacy
and its Woodin-cardinal strength remain the design's advanced continuation,
never a supplier for the present theorems or the later Solovay proof.

SET-30 A: poset cofinality; ideals/reduced products/true cofinality/scales;
generators/basic PCF/no-holes needed for the scale; countable paracompactness,
shrinkings and Dowker's product characterization; Rudin's space and size;
Balogh's continuum-sized construction; exact Kojman–Shelah normalization,
space, closure, cofinality, cardinality and non-countable-paracompactness;
CH, club, diamond, Luzin and stick sufficient conditions; dated aleph_1 status.

SET-30 B: explicit shrinking criterion, ordinal-product slice, scale use in
the subspace, and fs-normality-is-preserved-by-product-with-the-unit-interval.
Every mathematical clause of rem-dowker-spaces remains assigned to this
consumer; that remark is a ledger target, never a logical prerequisite.

## Source status refresh

Searched for the aleph_1 ZFC question with 2025/2026 terms, and recovered Cruz
Chapital's full PDF. The current unversioned PDF places §9 on printed p.26,
whereas the design cites p.25 in the April 21 version. Its opening paragraph
still calls the question open. The search is not a proof that no later solution
exists. Retain the explicit safe date 2025-04-21 until a version-pinned,
fully dated status audit is closed. Do not turn the status into a theorem or
publish an undated count of known constructions. The search also returned
this library's own published status page: it is not independent evidence.

## Continuation

First reread the manifest, coverage, these findings, both source versions and
the exact supplier interfaces. Complete source recovery and the mathematical
harvest; determine whether the model-chain route is supplied by an earlier
registered pair; then build the full proof-ordered inventories, split any A
page exceeding 60 items, and rerun all checks. No sufficient verdict or
completed transitive semantic audit is recorded by this artifact.

## URL check evidence

The liveness report was streamed through `/dev/stdout` and passed to source
backing through `/dev/stdin`; no unowned report file was written.

```json
{
  "version": 1,
  "generated_at": "2026-09-07T14:14:34.660Z",
  "scope": {
    "manifests": [],
    "ledgers": [],
    "items": 0
  },
  "summary": {
    "urls": 8,
    "live": 0,
    "failed": 8,
    "recovered": 0,
    "suspect": 0,
    "superseded": 1
  },
  "superseded": [
    "https://shelah.logic.at/files/180666/609.pdf"
  ],
  "rows": [
    {
      "url": "https://arxiv.org/pdf/2209.10504",
      "status": 0,
      "ok": false,
      "final_url": "https://arxiv.org/pdf/2209.10504",
      "ms": 13,
      "error": "curl: (6) Could not resolve host: arxiv.org"
    },
    {
      "url": "https://arxiv.org/pdf/2504.15398",
      "status": 0,
      "ok": false,
      "final_url": "https://arxiv.org/pdf/2504.15398",
      "ms": 12,
      "error": "curl: (6) Could not resolve host: arxiv.org"
    },
    {
      "url": "https://arxiv.org/pdf/math/9512201",
      "status": 0,
      "ok": false,
      "final_url": "https://arxiv.org/pdf/math/9512201",
      "ms": 10,
      "error": "curl: (6) Could not resolve host: arxiv.org"
    },
    {
      "url": "https://arxiv.org/pdf/math/9512202",
      "status": 0,
      "ok": false,
      "final_url": "https://arxiv.org/pdf/math/9512202",
      "ms": 9,
      "error": "curl: (6) Could not resolve host: arxiv.org"
    },
    {
      "url": "https://homepages.math.uic.edu/~marker/math512/dst.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://homepages.math.uic.edu/~marker/math512/dst.pdf",
      "ms": 6,
      "error": "curl: (6) Could not resolve host: homepages.math.uic.edu"
    },
    {
      "url": "https://people.math.sc.edu/nyikos/Zoli.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://people.math.sc.edu/nyikos/Zoli.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: people.math.sc.edu"
    },
    {
      "url": "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: www.math.ucla.edu"
    },
    {
      "url": "https://www.math.ucla.edu/~ynm/lectures/dst2009/dst2009.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://www.math.ucla.edu/~ynm/lectures/dst2009/dst2009.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: www.math.ucla.edu"
    }
  ]
}
```

Source backing exit 0:

```text
source-backing: 0 authored result(s) across 1 file(s), every one still backed by an openable source
```

## Required check outcomes

- `node tools/coverage-checklist.mjs research/frontier-34-batch-18.coverage.json --require-destination`: exit 0; 32 harvested results, 0 scaffolded, 2 low-yield warnings. These are open mandatory obligations, not approved scope declines.
- `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json`: exit 0; 763 items, 0 normalized, 0 errors. No write flag used.
- `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json`: exit 1; complete current output below. Errors concern other manifests; the empty owned inventory does not demonstrate sufficiency.
- `node tools/validate-plan.mjs`: exit 0; 892 populated and 579 empty pages; legacy redundant-requires warnings.
- `node tools/extcheck.mjs --quiet`: exit 0; no hard error; the verbose invocation also reported legacy unproved published-item warnings.
- `node tools/url-sweep.mjs --coverage research/frontier-34-batch-18.coverage.json --out /dev/stdout --fail-on-dead --timeout-ms 10000`: exit 1; 0/8 URLs reached, all DNS failures. This demonstrates unavailable shell retrieval, not that the remote documents are absent. No recovery flag used.
- `node tools/source-backing.mjs --coverage research/frontier-34-batch-18.coverage.json --liveness /dev/stdin --require-verified`: exit 0 with **zero authored results checked**. Its success is vacuous and provides no backing certificate.
- `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-18.coverage.json --stamp --timeout-sec 10`: exit 1; 0/5 verified, each EAI_AGAIN, no new stamps.

Exploratory command failures: manifest-deps treated `--help` as a filename; guessed source-backing-check.mjs and url-liveness.mjs names were absent. The actual tools above were subsequently used.

```text
content-policy: 769 scoped item(s), 100 error(s), 0 warning(s)
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds]: cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
```

Candidate ID check: scanned current plan, all item bodies/frontmatter (including aliases), and all research batch manifests. The seven proposed elementary-model supplier IDs above have no occurrences. They remain unregistered proposals; their listed prerequisite IDs resolve to existing item files, but a complete semantic supplier audit remains owed.

The whole-run files changed concurrently between checks: the first content-policy invocation saw 763 items and 102 errors; the captured repeat above saw 769 items and 100 errors. Both failed. The earlier manifest-deps count belongs to its own snapshot, not the later content-policy snapshot. Final owned pages and coverage JSON parsing succeeded. The owned pages manifest was not modified; only the owned notes and coverage were created.
