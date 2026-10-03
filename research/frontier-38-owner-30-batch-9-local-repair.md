# Batch9 local dependency and proof repair

Run `frontier-38-owner-30`. This lane originally received the three missing
supplier declarations in hook branching, word reversal and two-line RSK.
The supervisor extended it to the required commutation supplier, row-insertion
Definition and row-bumping prerequisite, their13 direct consumers, and the
two remaining authored/scaffold statement mismatches. All engine authors were
drained before these edits. No new IDs, page split or pair was introduced.
A remains20items, B5items; no global plan, ledger, runtime or owner decisions
were written. This is local mathematical review/repair evidence, not a central
all-item certification or an engine gate receipt.

## Restored exact supplier uses

- `lem-hook-product-branching-identity`: declares the published
  `def-removable-and-addable-nodes-of-a-partition`; its F3 corner-row
  characterization uses exactly that Definition.
- `lem-word-reversal-transposes-the-insertion-tableau`: declares in-run
  `lem-row-bumping-route-monotonicity`; its L4 needs the strict-row/strict-column
  output and preserved entry set before applying commutation. The word's
  **pairwise distinct real letters** hypothesis remains explicit and unchanged.
- `thm-rsk-correspondence-for-two-line-arrays`: declares the same published
  corner Definition; F4 and the rightmost-maximum reverse deletion use it.

Manifest arrays now agree with actual item deps and scoped readiness arrays.
Published corner/partition, tableau/semistandard and polynomial supplier
statements were read and matched to the uses; relevant in-run operative
arguments were examined in supplier-before-consumer order. The recursive
availability audit of the final10subjects follows deps and justified_by:
**259IDs, no missing/nonpublished/non-batch9 suppliers**. This is availability
and exact-use review, not a new proof audit of every259published/in-run items.

## Completed mathematical repairs

**Hook branching.** The proof wrongly called R_x nonempty at every corner;
at lambda=(1) it is empty. It now allows the empty product. Its generic
coefficient argument is for r≥2, with r=1 explicitly proved before any
negative coefficient index occurs. The actual finite identity remains
`sum z_i product_(j≠i)(1+1/(z_j-z_i)) = sum z_i - choose(r,2)`.
The local interpolation polynomial is `g(t)=tQ(t-1)-(t-r)Q(t)`, and its
coefficient of degree r-1 is `choose(r,2)-sum z_i`. No theorem Statement changed.

**Commutation.** The old proof's geometric-only argument for at most one
shared trail box used the wrong path order, and its shared-box/boundary case
analysis was partly citation-only. The replacement is self-contained:

1. Distinct occupied labels increase along each trail. Two shared occupied
   boxes would be visited in opposite order on the two trails and force
   opposite strict label inequalities. A shared empty box cannot accompany
   an occupied shared box by the monotone row/column coordinates.
2. Sliding a trail decreases each old occupied label. Thus every unchanged
   original bump remains the first greater entry, and a new row-end box
   interferes with an append only if it is that same shared empty box.
3. At an occupied common box S, write a,i for column/row incoming labels.
   Young-diagram order proves: either the preceding column box A is
   immediately left of S or the next row box J is immediately below it;
   transpose to obtain the corresponding I-above/B-right alternative.
   Missing predecessors use the actual input labels at column1/row1.
4. If i<a, A cannot be immediately left (the row threshold would imply a<i),
   so J is directly below. After the column slide, row insertion bumps a at
   S and puts it in J, whose left neighbour is smaller than a; the local
   labels become i,s,a at S,B,J. If i>a, I cannot be directly above, forcing
   B directly right; row insertion bumps s at B, then follows the old suffix,
   yielding a,i,s. Transposition gives the same labels in the opposite
   insertion order. Empty successors are handled by these same append rules.
5. At a common empty box, both composites put min(a,i) there and the other
   label directly below if i<a, or directly right if i>a. The row/column
   lengths establishing those adjacent boxes and the input-only empty-tableau
   case are explicitly proved.

Thus there is no unverified finite configuration list or omitted boundary
case in the current commutation proof. Its original Statement is unchanged.

**Real-alphabet convention.** The published standard-tableau Definition uses
alphabet1..m. The insertion Definition now explicitly explains its intended
extension to strictly increasing injective fillings on finite real alphabets.
The unique rank map preserves every comparison; induction over the procedure
preserves bump positions and carried labels. The commutation and reversal
proofs state this argument locally. This clarifies the existing distinct-real
claims rather than dropping their alphabet hypotheses.

**Reversal.** Its first-letter recursion is now backed by the fully local
commutation proof and declared standardness supplier. The two inductions
(recursion, then reversal) were checked with the exact absent/distinct input
hypotheses. No statement about the recording tableau was added.

**Repeated-letter RSK.** The old extension incorrectly asserted the expelled
letter was absent from the remaining tableau, established only a weak upper
column inequality, used successive-insertion comparisons on nonconsecutive
boxes, and omitted within-layer reversal in its symmetry argument. The
replacement proves:

- weak rows and strict columns survive insertion, using upper values
  ≤previous carried value<current carried value;
- reverse deletion removes one occurrence, may leave other equal entries,
  preserves semistandardness and is inverse in both directions by exact
  leftmost/rightmost threshold inequalities;
- inputs x≤x' give strictly increasing new columns and x>x' give a strictly
  lower final row and nonincreasing new column; every adjacent comparison
  in an equal-label block proves the horizontal-strip condition for Q;
- arbitrary semistandard pairs have a well-defined rightmost maximum corner;
  reconstruction and the contrapositive comparison recover lexicographic order;
- Knuth's source layers give first rows by a local induction; their shifted
  pairs are the chronologically lexicographic bump array;
- swapping coordinates reverses the order inside each layer. The new shifted
  pairs are exactly the coordinate swaps of the old shifted pairs as a
  multiset. Induction on the strictly smaller bump array swaps every lower
  row, proving the full transpose-interchange clause.

Empty arrays, singleton arrays, repetitions and the word case are explicit.
All original three RSK theorem clauses remain unchanged. Every construction
is finite and canonical; no Choice is used.

**Two necessary smaller supplier/consumer repairs.** The row-insertion
Definition and row-bumping proof falsely said a next row shorter than the
preceding bump position must append. For rows(1,2,3)/(4), inserting2.5 bumps3
at column3, then bumps4 at column1 despite lower length1<3. The correction
allows bump or append, in either case at position ≤lower_length+1≤old position;
the algorithm and true monotonicity Statement are unchanged. The direct
inverse-deletion consumer had its row indices/carried values reversed and
confused the old T value with the overwritten U value. Its upward and
downward inductions are repaired, including the s=1 converse. The first-row
basic-subsequence consumer now derives its smaller predecessor from the
leftmost-greater or append threshold, not strict row order alone. Their
Statements are unchanged.

## Definition's13 actual direct consumers

Mapped from actual item deps/justified_by; all are draft batch9 items, with
no published, outside-run or active consumer writer. Each use below was read:

| Consumer | Actual use and current result |
|---|---|
| `def-column-insertion-for-distinct-letters` | Transposed algorithm, finite termination and position bound; preserved |
| `def-reverse-row-deletion` | Comparison rule and distinct increasing filling; rightmost smaller predicate and corner bounds valid |
| `ex-empty-and-singleton-rsk-boundaries` | No-operation and one-box append; correct n=0 convention retained |
| `ex-rsk-insertion-and-reverse-deletion` | Explicit six-letter rule computation; displayed rows and reverse expelled list checked |
| `lem-first-row-insertion-basic-subsequences` | Threshold/predecessor inequality clarified as above; Statement preserved |
| `lem-robinson-schensted-recording-tableau-is-standard` | Single addable box plus largest recording label; proof use valid |
| `lem-row-and-column-insertion-commute` | Route/carry/slide mechanics; completed locally as above |
| `lem-row-bumping-route-monotonicity` | Shorter-row position estimate corrected; Statement preserved |
| `lem-row-insertion-and-reverse-deletion-are-inverse` | Deterministic reverse threshold, carried-index inductions corrected; Statement preserved |
| `lem-word-reversal-transposes-the-insertion-tableau` | Intermediate increasing tableaux and exact commutation hypotheses; valid |
| `thm-robinson-schensted-correspondence` | Exact inverse at last-created corner and finite reconstruction; preserved |
| `thm-rsk-correspondence-for-two-line-arrays` | Rule extended locally to repetitions with full proof; preserved |
| `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` | First-row basic subsequences and distinct-letter reversal; chain/cover argument valid |

No consumer relies on the false shorter-row⇒append assertion. No consumer's
Statement or Definition was changed, so the impact traversal stops after
these13 uses. Contracts for12 proof-bearing touched/consumer entries were
regenerated from current facts and full supplier sections; the two listed
Definitions correctly have no proof-bearing contract to regenerate.

## Two further manifest reconciliations

After their actual authored arguments were read, the supervisor authorized:

- `lem-hook-product-change-under-corner-removal`: the affected R_x consists of
  boxes **left of x in its row and above x in its column**, exactly the hooks
  containing x. The removed corner's own arm and leg are empty. All those
  hook lengths decrease by1, other remaining hooks do not change, and each
  denominator is positive. The false old manifest arm/leg expression is
  replaced by the current authored Statement. As a minimal check, lambda=(2)
  has hook-product ratio2, not the empty product1.
- `ex-empty-and-singleton-rsk-boundaries`: at n=0 the removal recursion is
  not asserted; f_empty=1 is the unique empty-tableau convention. At n=1
  the one corner gives f_(1)=f_empty. The false manifest n=0 recursion1=1
  wording is replaced by the current authored Example.

Their item files were unchanged. The branching manifest likewise uses the
correct authored R_x interface. The planned sum, ratio, counts and examples
are retained in their mathematically correct form; nothing was weakened.

## Source retrieval and honest reuse

Fresh full text read in this lane:

- Knuth, entire23-page PDF,1984341bytes, SHA256
  `24110cfb5d82f47915b75583a696f01678fb83e05676c415c69c8e0151203cbc`;
  fetched/extracted every page and read §§2–4, printed711–719. INSERT/DELETE
  assertions, ordered-input comparisons, first-row layers and shifted-pair
  recursion support the local RSK proof. This matches the earlier fetch stamp.
- Abram–Reutenauer, entire9-page PDF,307049bytes, SHA256
  `f59a9c4d764c272659f1dcbe0f423e4918e3d512b7a6fd5c72a44ea5bfa757e0`;
  fetched/extracted all pages and read every section, including the
  French/English convention and the source's omitted boundary details.
  The local proof derives its adjacency alternatives and boundary rules
  directly in coordinates, without depending on a figure's unchecked list.

Existing qualified scaffold/author full-text evidence for Craven, Schensted,
Chan, Etingof and Martin is retained only for unchanged source interfaces.
No new retrieval/figure inspection of those texts is claimed. Hook arithmetic
and its local interpolation proof were checked independently against the
current exact published definitions and polynomial interfaces. A verified
Abram coverage source/harvest row is now registered; coverage has88rows and
10/10 verified source entries. No source citation stands in for an absent
local proof in the repaired commutation or RSK items.

## Exact writes, current hashes and checks

Edited item paths (8):
`items/def-row-insertion-and-bumping-route.md`,
`items/lem-hook-product-branching-identity.md`,
`items/lem-row-and-column-insertion-commute.md`,
`items/lem-word-reversal-transposes-the-insertion-tableau.md`,
`items/thm-rsk-correspondence-for-two-line-arrays.md`,
`items/lem-row-bumping-route-monotonicity.md`,
`items/lem-row-insertion-and-reverse-deletion-are-inverse.md`,
`items/lem-first-row-insertion-basic-subsequences.md`.

Research writes: batch9 pages, proof-contracts, coverage, notes, this report
and companion JSON; ten scoped Step1 readiness records (the eight items plus
hook-product-change and empty-boundary manifest reconciliations). All are
current; no central Step3 item/scope decision was written. The companion JSON
contains exact deps, raw and transitive item hashes, direct-consumer mapping,
current scope hash and recursive availability findings.

Final actual checks: explicit proof-layout **8items,63steps,0defects**;
precheck **7proof-bearing items PASS** (Definition not applicable); rendercheck
**8files OK**; scoped content-policy **10items,0errors,0warnings**;
manifest-deps **25items,0errors**; full batch strict proof-contract
**25/25items,0errors,0warnings**; coverage **2pages,88rows,0errors,0warnings**;
source-fetch-check **10/10verified**; local dependency levels **0errors**.
Earlier formatter/contract issues were corrected before these final passes.

Recommend current scope proceed and normal item acceptance after the parent's
mandatory dependency-ordered all-item recertification. There is no unresolved
local proof/source/consumer blocker in this packet. This recommendation is
based on the complete local proofs and exact uses above, not a claimed
independent whole-batch audit or a fabricated gate success. Other workers'
claims, global publication and engine decisions remain outside this evidence.
