# A903/B904 local coherent duality packet

Run: `frontier-38-owner-30`. Date: 2026-10-02. Exclusive subject:
`coherent-duality-on-projective-cohen-macaulay-schemes` and its examples.
This is a local authoring and source record, not an independent audit or a gate receipt.

## Binding contract and outcome

I read CLAUDE.md, README.md and SCHEMA.md in full, the AG-DUAL-1 row in
`research/plan-algebraic-geometry-expansion-track.md`, the generated batch-28
contract, the current A903/B904 plan entries, and the coherent-duality blocker
in `research/frontier-38-owner-30-alpha-step1-drift.md`.

The complete promised inventory is retained: the dualizing-complex definition,
coherent Ext duality on projective pure CM schemes, comparison with the existing
smooth projective locally free theorem, the dimension-one residue-normalized
comparison, singular CM curve example, smooth projective surface example, and
failure without properness. Seven local lemmas close the embedding prerequisites.
A has 11 items and B has 3, both below the 100-item limit.

No mandatory claim is left without a local argument in this draft. No unselected
pair is used as a new prerequisite. In particular, the smooth locally free theorem
is a comparison, not the supplier for singular existence, adjunction, concentration
or biduality. The proof uses ambient perfectness after pushing into projective
space; it never assumes a coherent sheaf on a singular scheme is perfect.

No plans, manifests, tasks, page files, scope ledgers, shared design documents or
autopilot state were changed. The item files below are unlisted until the
orchestrator integrates their placement and authoring evidence.

## A inventory in prerequisite order

1. `def-dualizing-complex-on-projective-cm-scheme`
2. `lem-finite-closed-immersion-derived-coinduction-adjunction`
3. `lem-regular-quotient-dualizing-complex-and-biduality`
4. `lem-cm-quotient-of-regular-local-ring-ext-concentration`
5. `lem-projective-embedding-dualizing-complex-existence`
6. `lem-projective-space-derived-coherent-duality`
7. `lem-projective-dualizing-complex-trace-and-embedding-independence`
8. `lem-projective-pure-cm-dualizing-complex-concentration`
9. `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`
10. `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`
11. `rem-curve-residue-duality-is-the-dimension-one-case`

## B inventory

1. `ex-serre-duality-on-a-singular-projective-cm-curve`
2. `ex-serre-duality-on-a-smooth-projective-surface`
3. `cex-serre-duality-without-properness`

The three concrete B instances are marked as generated examples/counterexample with the corresponding generation role; they are not dependency targets. The examples apply the A theorem. The singular example computes the canonical
sheaf from the A packet's ambient Ext formula, then applies coherent duality to
the structure sheaf and to the node skyscraper. The surface example covers both
line bundles and a coherent skyscraper. The affine-line counterexample identifies
exactly the failing degree-one Hom/cohomology comparison and directly proves
nonproperness by a projection with nonclosed image.

## Local proof obligations and exact supplier uses

| Obligation | Local supplier and argument | Existing inputs |
|---|---|---|
| Projective embedding | Embedding existence lemma, step 1.1: use the closed-embedding definition of projectivity over a field. | `def-projective-morphism-pre-proj` |
| Finite-map derived adjunction | Coinduction lemma: give the evaluation-at-1 adjunction for finite rings, show coinduced injectives are injective, and extend it to all module sheaves for a closed immersion. | Supplied bounded-below injective replacements and homotopical injectivity; no general scheme six-functor theory is assumed. |
| Dualizing-complex existence | Regular-quotient lemma and embedding existence: a regular affine chart has finite global and injective dimension; coinduction gives a bounded injective complex over its quotient; finite free resolutions give coherence and homothety. | `thm-localisation-and-polynomial-extension-of-regular-rings`, `lem-global-dimension-is-detected-on-cyclic-modules`, existing finite twisted resolutions |
| Coherent biduality | Regular-quotient lemma, step 3.1: apply coinduction adjunction twice, identify the canonical evaluation with ambient finite-projective double evaluation, and use conservativity of restriction of scalars. | Ambient finite-projective resolutions, rather than false derived full faithfulness of a closed immersion |
| Local CM concentration | CM quotient lemma: AB gives projective dimension c; prime avoidance constructs a length-c regular sequence contained in the ideal; principal-quotient derived adjunction shifts Ext and kills degrees below c. | Published AB, regular-ring CM, associated-prime full dimension, prime avoidance, regular quotient CM, affine-domain dimension formula |
| Pure-dimension normalization | Global concentration lemma, step 1.1: at a closed point ambient dimension is N and quotient dimension is d; shift by N gives only degree -d; coherent support detects global vanishing. | `lem-affine-local-dimension-residue-transcendence`, finite residue-field extension at closed points |
| CM property and support of omega | Global concentration lemma, step 2.1: dual resolution length at most c, AB plus depth-support bound; localize from closed points; nonzero homothety forces full support. | Published depth bound, AB and CM localization |
| Trace and coherent duality | Derived projective-space lemma: evaluation and Laurent trace give a chain map; twisting perfectness, finite resolutions and triangles prove a quasi-isomorphism. Transport along the actual adjunction, then apply concentration. | Existing projective-space twisting duality, Laurent residue trace, finite twisted resolutions and Yoneda/derived product identification |
| Embedding independence | Trace/independence lemma, step 2.1: Yoneda uniqueness of the represented functor on bounded coherent complexes, with the evaluation functional fixing the trace. | The preceding local duality construction |
| Smooth and curve comparisons | The two remarks use existing regular-immersion/conormal results and the normalized rational-point Koszul residue. | Existing AG-LIE smooth theorem and point-normalization lemma; no dependency on a later curve page |

The definition gives the local affine-neighborhood dualizing-complex conditions.
The normalization over k is separate and includes the global representing
property. An arbitrary unnormalized dualizing complex is not asserted unique;
uniqueness is attached to the normalized representation and trace.

AC is explicitly assumed in all proof-bearing items and retained in both
comparison remarks. Its uses are the already supplied injective/replacement,
regularity, depth, dimension, and derived-product results. The arguments introduce
no choice-free assertion by dropping these inherited hypotheses.

## Fresh full-text source reading

I retrieved the current Stacks tag pages directly and read their complete
statements and proof bodies, rather than accepting historical citation titles.
The relevant pages were:

| Stable tag | Exact locator | Verified use and limitation |
|---|---|---|
| `0A7B` | Definition 47.15.1 | Finite injective dimension, finite cohomology and homothety conditions. |
| `0A70` | Lemma 47.13.1 | Derived restriction/coinduction adjunction. |
| `08XR` | Lemma 47.3.4 | Coinduction sends injectives to injectives. |
| `0AX0` | Lemma 47.15.8 | Finite ring maps carry dualizing complexes to derived coinduction. |
| `0A7I` | Lemma 47.15.9 | Surjective-ring special case; its proof refers to 0AX0, which was also read. |
| `0A7C` | Lemma 47.15.3 | Coherent derived biduality; local draft supplies a direct ambient finite-projective proof for the commissioned quotient case. |
| `0A7G` | Lemma 47.15.6 | Localization of a dualizing complex. |
| `0FVV` | Lemma 48.27.1 | Proper scheme over a field: existence and normalized derived duality. Its proof uses the right adjoint and dualizing-complex foundations, which are supplied locally here by a projective embedding instead of imported as an unproved supplier. |
| `0FVW` | Remark 48.27.2 | Evaluation trace, shift/Ext pairing and the finite-dimensional qualification for two-sided perfectness. |
| `0FVY` | Lemma 48.27.4 | Perfect-complex evaluation pairing. It does not itself justify coherent duality for nonperfect sheaves on a singular X. |
| `0FVZ` | Lemma 48.27.5 | Exact equidimensional proper CM derived and coherent Ext theorem. |
| `0FW0` | Remark 48.27.6 | Vector-bundle specialization only; it is not the exact coherent Ext statement. |

URLs are `https://stacks.math.columbia.edu/tag/TAG` with the listed stable tag.
Other exploratory tags were not used as proof suppliers. The local proofs do
not ask the reader to accept the source's general proper-right-adjoint theorem
as an unexplained foundation.

The independent global treatment was Ravi Vakil, *The Rising Sea*, author-hosted
2025-10-21 edition:
<https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf>.
Fresh download: 9,643,655 bytes, SHA-256
`d07177aa0317c13490c170fc6ccc6a2ee07989a9120d9958ed3453eefe5b2784`.
I extracted the chapter with MuPDF and read the full relevant proof discussions
in Chapter 29, Sections 29.1–29.4 (printed pp. 793–810):

- Proposition 29.1.8 gives uniqueness of canonical sheaf plus trace; §29.1.13
  explicitly says the trace version for Ext is not proved in the book.
- §29.2.2 gives the universal delta-functor projective-space argument, and
  Exercises 29.2.E–M specify the locally free Ext and local-to-global seams.
- Proposition 29.3.5 gives finite projective projection; its finite-field
  extension is Exercise 29.3.A. Our embedding proof avoids requiring this
  separate projection/finite-field exercise and miracle-flatness packet.
- Proposition 29.3.13 and Corollary 29.3.14 establish **functorial** coherent Ext
  duality on pure projective CM schemes.
- Remark 29.3.15 only outlines trace compatibility. The local derived
  evaluation/counit proof above completes that obligation.
- Exercises 29.4.A–G and Theorem 29.4.3 give the closed-immersion and ambient
  sheaf Ext route. The actual coinduction construction and adjunction proof
  are written locally, not left as these exercises.
- Proposition 29.4.8 and Exercise 29.4.H identify hypersurface/complete
  intersection canonical sheaves. The plane cubic calculation is written out.

For an independent local CM/canonical-module treatment I retrieved Jack
Jeffries, *Local Cohomology*:
<https://jack-jeffries.github.io/UM/LCnotes.pdf>.
Fresh download: 918,419 bytes, SHA-256
`224a47e31bb65b3d4b3d8b14d4dbf247d255e2c57f342e8089bd69bff1b03471`.
I read the full relevant passages in Remark 4.10 (printed p. 60), Section 4.4,
Proposition 4.29 and Corollary 4.30 (pp. 66), the dual-resolution discussion
preceding Proposition 4.36 (p. 68), Proposition 4.36, Lemma 4.37 (pp. 68–69),
and Proposition 4.40 (p. 70). These independently check the local regular/CM
quotient canonical-module calculation, Ext concentration by Rees plus AB,
CM property, homothety and localization. This source's canonical-module
arguments are not cited as a full treatment of arbitrary scheme dualizing
complexes; that additional local statement is proved directly in the packet.

## Local checks and limits

All checks below were scoped to the fourteen item paths in the inventories.
No check constitutes independent mathematical acceptance.

- Dependency closure inspection against current `research/plan-spec.json`:
  A903 has 338 declared closure pages with 9,421 planned supplier IDs. Every
  external direct dependency is in that closure and exists on disk. Every
  linked item is declared in that item's deps. No B item supplies an A item.
- `node tools/tsx-run.mjs tools/precheck.mts <14 explicit paths>`:
  exit 0, 11 proof-bearing items checked, zero failing. Definitions/remarks
  have no proof-like section and are skipped by this checker. I adopted its
  required phase numbering and updated every earlier-step reference.
- `node tools/rendercheck.mjs <14 explicit paths>`:
  exit 0, all fourteen frontmatters parse and every math span parses in KaTeX;
  no malformed math delimiters or wikilinks in math.
- The initial ordinary `node tools/proof-layout.mjs <14 explicit paths>` failed
  before reading content because the default app loader tried to parse JSX in
  `ItemBody.tsx` without transpilation (`Unexpected token '<'`, Node 22.22.1).
  The orchestrator supplied the established read-only loader workaround.
- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <14 explicit paths>`:
  exit 0, **14 items, 25 steps, 0 defects**, after the final item edits.

No verification/audit/judge stamp is invented. The orchestrator still owns
placement, independent mathematical review, run certificates and held-gate
closure. The local packet adds prerequisite results and preserves all four
commissioned A claims and all three commissioned B claims.
