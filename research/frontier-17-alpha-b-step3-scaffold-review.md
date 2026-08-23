# Frontier 17 — Alpha group b step-3 scaffold review

Scope: batches 3, 7, and 9, covering `the-galois-correspondence`,
`modules-over-a-pid-and-canonical-forms`,
`applications-of-the-fundamental-group`, and
`monadicity-and-becks-theorem`. I read each batch manifest, notes, and coverage
file with GA-2, MOD-5, HT-7, and MA-4 in their governing design documents. I
also opened every published dependency from disk and checked every stated
source range against the full source text.

The group assignment is coherent: all four developments classify structure by
automorphisms, subobjects, or comparison functors. Their A pages contain 30,
36, 17, and 44 planned items, so none requires a split at the 60-item ceiling.
`content-policy --manifest-only` passes all 167 scoped items;
`coverage-checklist` reports 307 harvested rows with no structural error; all
13 source records now carry current full-text fetch stamps; and the current
unspliced `plan-spec.json` passes `validate-plan`. Those mechanical results do
not clear the source-harvest and proof-route defects below.

## Severity table

| Finding | Pair | Severity | Disposition |
|---|---|---|---|
| B3-1 | `the-galois-correspondence` | resolved false design prose | The manifest correctly replaces the impossible $S_3$ normal-field count; approve the notes amendment for step 4. |
| B3-2 | `the-galois-correspondence` | blocking harvest | Reconcile Conrad's stated PDF-page locator with the undisposed §6 primitive-element results. |
| B3-3 | `modules-over-a-pid-and-canonical-forms` | blocking dependency route | Add the Noetherian maximal-condition supplier to the PID-to-UFD proof route. |
| B3-4 | `modules-over-a-pid-and-canonical-forms` | blocking decomposition/dependency route | Build the abelian-group/$\mathbb Z$-module dictionary and the integer-domain bridge before specialization. |
| B3-5 | `modules-over-a-pid-and-canonical-forms` | blocking harvest | Re-harvest the named Brussel results omitted from the claimed continuous ranges. |
| B7-1 | `applications-of-the-fundamental-group` | resolved overclaim | The manifest proves only the dimension-two slice and does not claim to discharge full invariance of dimension. |
| B7-2 | `applications-of-the-fundamental-group` | resolved false design target | The proposed Brouwer `fs-` sentence is true and is correctly absent from the manifest. |
| B9-1 | `monadicity-and-becks-theorem` | resolved overstrong statement | The manifest says the canonical splittings need not lift, rather than never lift. |
| B9-2 | `monadicity-and-becks-theorem` | blocking harvest | Add the omitted Mehrle Example 5.18(e) and Exercise 5.22 dispositions. |

## Batch 3

### `the-galois-correspondence`

The mathematical scaffold is strong and follows the design's route. Dedekind
independence, the two opposite Artin bounds, and recovery of the full
automorphism group are separate items. The four finite-Galois conditions, the
correspondence, and its conjugation/normality/quotient clause are not conflated.
Translation, composita, root actions, the Vandermonde sign, the characteristic
not two discriminant criterion, and the cubic and quartic classifications all
have enough earlier dependencies. The quartic $D_4/C_4$ discriminator is
licensed by Milne's fixed-field table: over the resolvent splitting field the
quartic remains irreducible in the $D_4$ case and not in the $C_4$ case. The
15-item B page is substantial and tests both missing Galois hypotheses, all
five quartic group types, normality, and inclusion reversal.

**B3-1. The design's $S_3$ count is false, but the owned scaffold already
repairs it.** Among strict intermediate fields of the splitting field of
$x^3-2$, $\mathbb Q(\omega)$ is the single normal one and the three cubic
fields are nonnormal. Including endpoints gives three normal fields and three
nonnormal fields, never “two normal / four non-normal.” Approve GA2-2 from the
batch notes for step-4 propagation. This is not open scaffold work.

**B3-2. Conrad's harvest does not match its own locator.** The source record
says “Sections 4–5 in full (PDF pp. 12–27).” In the cited 27-page PDF, §6
begins within that page range and contains Theorem 6.1 (degree equals Galois
orbit size and the primitive-element criterion) and Examples 6.2–6.3. None has
a coverage disposition. Either narrow the page locator to the actual end of
§5 or add explicit dispositions for those three named results; the current
range and contents cannot both be true. Keith Conrad, *The Galois
Correspondence*, §6 carries the missing rows.

Verdict: **insufficient** until B3-2 is closed. The mathematical item list itself
needs no breadth addition.

### `modules-over-a-pid-and-canonical-forms`

The intended chapter is otherwise present: aligned bases, invariant-factor and
elementary-divisor forms with uniqueness, Smith existence and determinantal
uniqueness, the finite-abelian specialization and agreement item, fraction-field
rank, the $F[x]$-module of an operator, rational canonical form, the minimal and
characteristic polynomial dictionaries, a second Cayley–Hamilton proof, a
second Jordan proof, and unconditional similarity classification. General-PID
existence is correctly separated from the Euclidean algorithm on the B page.
The companion's Smith, abelian-group, rational/Jordan, nonsplitting, and false
similarity examples make it a real boundary development.

**B3-3. The PID-to-UFD strategy names a choice-consuming route without its
supplier.** `thm-principal-ideal-domains-are-unique-factorisation-domains`
currently depends only on PID Noetherianity, irreducible-implies-prime, and the
UFD definition, then says to recursively choose a strict factor chain. The
batch notes themselves say this uses dependent choice. The legal earlier
supplier is already on the declared `chain-conditions-and-semisimple-modules`
page: add `thm-equivalent-characterizations-of-noetherian-modules` and replace
the recursive-chain sentence by the maximal-bad-principal-ideal argument. That
published theorem supplies the Noetherian maximal condition and records its DC
cost. Conrad, *Modules over a PID*, §5 and Brussel §3.5 explicitly use the
source-backed fact that every PID is a UFD; the published maximal-condition
theorem supplies the missing local proof route.

**B3-4. The finite-generated-abelian-group specialization skips a whole
dictionary.** `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`
says only to prove $\mathbb Z$ is a PID from the subgroup classification and
then specialize. `lem-subgroups-of-z-are-cyclic` does not state that
$\mathbb Z$ is a domain, nor that abelian groups and $\mathbb Z$-modules have
the same objects, morphisms, finite generation, and cyclic quotients. Insert a
source-backed intermediate proposition giving the unique integer scalar action
on every abelian group and identifying group homomorphisms with
$\mathbb Z$-linear maps. Then make the specialization cite it together with
`thm-int-comm-ring` and `lem-int-cancellation` (or an exact earlier A-page
integer-domain result) before applying `def-principal-ideal-domain`. Conrad
Example 4.2 and Brussel §4 carry the specialization; the missing dictionary and
domain proof are what make that specialization self-contained.

**B3-5. The Brussel harvest is materially under-enumerated.** The locator claims
§§1–5.4 and §§7.1–7.4 in full, but the checklist omits named entries already in
those ranges, including Remark 1.0.2 (the non-PID submodule obstruction),
Example 2.1.3 (an explicit $\mathbb Q[x]$ Smith reduction), §2.1.4 and
Definition 2.1.5 (equivalence invariance, minors, rank, and determinantal
divisors), and Corollary 3.4.1 (generators obtained from a Smith basis change).
Re-harvest the full declared ranges and disposition every named result; these
examples show the omission is not a wording quibble.

Verdict: **insufficient** until B3-3 through B3-5 are closed.

## Batch 7

### `applications-of-the-fundamental-group`

This pair contains the standard elementary applications and the source harvest
is faithful. Retract injection and no-retraction lead to Brouwer through a
separate ray-intersection continuity lemma. The two polynomial-loop lemmas
decompose Hatcher's fundamental-group proof of the fundamental theorem of
algebra. The odd lift increment carries Borsuk–Ulam, and the closed-cover and
noninjection corollaries have sharp companion examples. Punctured Euclidean
spaces support exactly the $\mathbb R^2$ dimension result. May's topological
group application is properly decomposed into the loop-product homotopy and
Eckmann–Hilton. Compactness/path connectedness and explicit circle retractions
give the Hawaiian-earring boundary without importing its deep fundamental-group
structure.

**B7-1. The old design overstates the dimension consequence; the scaffold does
not.** The planned theorem handles $n=0$, $n=1$, and $n\ge3$ and proves only
$\mathbb R^2\not\cong\mathbb R^n$ for $n\ne2$. It does not claim to replace
`rem-dimension-invariance-of-euclidean-space`, whose arbitrary-dimension and
open-subset statement is stronger. Approve the corresponding notes amendment.

**B7-2. The second proposed Brouwer false statement is true.** A continuous
self-map of $D^2$ that moves every boundary point still has a fixed point by
Brouwer's theorem. The manifest correctly mints no such `fs-` item. Approve the
design deletion.

The Hatcher and May ranges enumerate every named result in the declared spans,
and both are independent full treatments. The six-item B page is mathematically
substantive rather than token padding.

Verdict: **sufficient**.

## Batch 9

### `monadicity-and-becks-theorem`

The standard development is present and unusually well decomposed. Absolute
and split coequalizers precede the Eilenberg–Moore creation theorem; Beck's
converse has its own reconstruction lemma; ordinary and strict monadicity stay
separate; and the reflexive criterion supports algebraic, contravariant
power-set, and boundary examples. The ring application builds its free object
and operation descent. Riehl's finitary-algebra theorem is decomposed through
coequalizers, an $\omega$-sequence, a singleton solution set, and the general
adjoint functor theorem, with DC explicitly listed. The Manes direction splits
the induced topology, closure formula, unique limit, compact Hausdorffness, and
both object and morphism directions, with UL/BPI present exactly where the two
filter extensions occur. The seven-item B page exercises split, canonical,
Kleisli, nonpreservation, and ultrafilter-algebra boundaries.

**B9-1. The manifest correctly narrows the design's non-lifting claim.** Riehl
Example 5.4.7 shows that the canonical splittings need not be algebra maps; it
does not say they never can be. Approve MA4-3. This defect is already closed in
the batch scaffold.

**B9-2. The Mehrle harvest omits named material inside its declared full
range.** Lectures 16–17, pp. 48–56 contain Example 5.18(e), the discrete-space
adjunction showing that $\mathbf{Top}\to\mathbf{Set}$ is not monadic, and
Exercise 5.22, the proof obligation for the pullback direct/inverse-image
identity. Neither has a row. The first is already represented by
`fs-the-forgetful-functor-from-topological-spaces-is-monadic`; the second is
absorbed by `lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets`.
Add those exact `included`/`inline` dispositions and recheck the continuous
range.

Verdict: **insufficient** until B9-2 is closed.

## Design, order, provenance, and source decisions

- The earlier drift review correctly added `symmetric-polynomials` and
  `the-field-of-fractions-and-localisation` to the live spec. No further
  `plan-spec.json` edit is warranted here.
- The design headers at old orders 106 and 241 are stale against live orders
  110 and 301. The batch manifests correctly retain the spec orders; step 4 may
  synchronize prose without changing reading order.
- The MA-4 design's four named prerequisite pages are all in the transitive
  closure of `monads-comonads-and-their-algebras-examples`; the live spec is
  dependency-complete.
- Every published dependency target was opened on disk. All are published and
  have `literature-derived` or `ai-altered` Statement provenance; none is
  legacy-unclassified or `ai-generated`. Every source-backed planned Statement
  has a reader-visible URL route in the batch notes and coverage ledger.
- There are no load-bearing forward references, cross-batch dependencies,
  external fallbacks, or proposed published-dependency repairs in these three
  batches.
- The second fundamental-theorem-of-algebra, Cayley–Hamilton, Jordan-form, and
  compact-to-Hausdorff proofs are genuinely different routes with distinct ids
  and forward cross-references from the new material. Reciprocal edits to true
  published items are outside this group's repair boundary and are not treated
  as mathematical blockers.

## Gate record

- `coverage-checklist`: 4 A pages, 307 harvested rows, 0 structural errors and
  0 warnings. B3-2, B3-5, and B9-2 are semantic faithfulness failures that this
  gate cannot detect.
- `content-policy --manifest-only`: 167 scoped items, 0 errors, 0 warnings.
- `source-fetch-check`, run separately per owned coverage file: 6/6, 2/2, and
  5/5 sources fetch-verified.
- `validate-plan research/plan-spec.json`: pass on the current unspliced spec.
- Every non-definition/non-remark planned item has a nonempty strategy.

No batch file was edited in this review. The open work is routed through the
machine verdicts so the sequential `3-fix` loop can repair and re-harvest it.
