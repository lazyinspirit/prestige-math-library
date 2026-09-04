# Final-adjudicator evidence: `ex-punctured-affine-line-not-affine-closed-subset`

Disposition: `repaired`.

## Scope inspected

I independently read the current item; all three direct dependencies
`def-principal-open-classical-variety`, `thm-coordinate-ring-principal-open`,
and `cor-zariski-topology-cofinite-on-affine-line`; the A page
`affine-algebraic-sets-and-coordinate-rings`; its B companion page; the AV-1
design block; batch-13 manifest, notes, and coverage ledger; the batch-13 proof
contract; the Step-6 reader report and impact disposition; both frozen judge
rejections; both exact Alpha adjudications and defect-ledger rows; and the
Alpha closure-recovery report.

The example has no phase-format proof and consequently has no standalone entry
in the batch proof-contract scope. I inspected the complete proof-contract
entries and risk reviews for its two proof-bearing load-bearing dependencies.
The principal-open theorem's risk review identifies its finite-cover gluing and
common-denominator argument as the sharp point; the affine-line corollary's
risk review checks both directions of the cofinite characterization.

## Fatal history and Alpha repairs

The first frozen rejection, context
`efe35e4b643da886bf21b5f66cd11b2838b302fbea6fae41880be087321cf216`,
correctly observed that the former phrase “not closed in affine space” was
false: the punctured line has a closed realization as $V(xy-1)$ in
$\mathbf A^2$. Alpha correctly narrowed the title to nonclosedness in the
original ambient affine line.

The second frozen rejection, context
`26c9f735fb868ee9f5b2c5ee76ac2ff7abc326d8ab70deece8d3fc2b88052d62`,
correctly observed that the example did not bind the algebraically closed
field required by both cited results. Alpha correctly added that hypothesis;
its repaired judge hash was
`7b0c7302e7d72b5ea6d400ac5c33b04d1f8411fc03b1322cfc6d740e0636fedd`.

## Independent mathematical review and repair

Alpha's second repair fixes the exact second rejection, but it does not close
the full direct-dependency contract. The proof of
`thm-coordinate-ring-principal-open` invokes
`cor-strong-nullstellensatz-two-inclusions` in L6 and step 1.4. That published
corollary explicitly assumes the Axiom of Choice. The principal-open theorem
formerly omitted Choice from both its Statement and Given block, even though a
neighboring Step-8 repair propagated precisely the same hypothesis through
`thm-affine-nullstellensatz-correspondence`. Thus the queued example's
load-bearing localization citation still rested on an unpropagated hypothesis.

I repaired the direct dependency by adding the Axiom of Choice to its Statement
and Given block and making L6's qualification explicit. I propagated the same
hypothesis to the queued example, which is the theorem's only direct consumer.
I also normalized the example's unchanged three-entry dependency list to the
canonical inline form consumed by the Step-8 exact direct-edge guard; no edge
was added or removed.
The dependency's exact guard hash changed from
`09624fa07443c6a048d8fc4ed620dccf14b409d131efcbc57b0335fc7db0aac0`
to
`f0f339713c772e91144b7ffb2ef435f58e4026355a92820449dd7eac0560263c`.
The required version-1 `owner-prerequisite-repair` licence is recorded in
`research/frontier-29-step8-owner-prerequisite-repairs.jsonl`.

With those hypotheses bound, the mathematics is correct. In
$\mathbf A_k^1$, nonvanishing of the coordinate $t$ is exactly removal of the
origin, so the set is $D(t)$. Principal localization gives
$k[t]_t=k[t,t^{-1}]$. Since an algebraically closed field is infinite, the
cofinite description makes the punctured line an infinite proper subset and
therefore not closed in its original $\mathbf A_k^1$. The final sentence is
also correctly scoped: the set is affine intrinsically (indeed it is
isomorphic to $V(xy-1)\subset\mathbf A_k^2$), while it is not closed in the
displayed ambient line.

## Authoritative source verification

- J. S. Milne, *Algebraic Geometry*, Definition 3.8 and Proposition 3.11:
  https://www.jmilne.org/math/CourseNotes/AG.pdf
  This gives the regular-function definition on a classical algebraic set and
  proves $k[V]_h\cong\mathcal O_V(D(h))$.
- The Stacks Project, Lemma 26.6.6:
  https://stacks.math.columbia.edu/tag/01HX
  This independently verifies that a principal open $D(f)$ of an affine
  object is affine, represented by the localization $R_f$.
- Aaron Landesman's Harvard Math 137 notes, Warning 5.19 and Exercises 6.4--6.5:
  https://people.math.harvard.edu/~landesman/assets/harris-undergrad-algebraic-geometry-notes.pdf
  These identify the Zariski topology on $\mathbf A^1$ as cofinite and
  explicitly distinguish the punctured line's failure to be affine as a subset
  of $\mathbf P^1$ from its closed affine realization $V(xy-1)$ in
  $\mathbf A^2$.

## Focused checks

- `node tools/proof-contract.mjs research/frontier-29-batch-13.proof-contracts.json --strict --items thm-coordinate-ring-principal-open,cor-zariski-topology-cofinite-on-affine-line --json`: passed with zero errors and zero warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-coordinate-ring-principal-open.md items/ex-punctured-affine-line-not-affine-closed-subset.md`: the theorem passed; the example correctly has no proof-format section to check.
- `node tools/rendercheck.mjs items/thm-coordinate-ring-principal-open.md items/ex-punctured-affine-line-not-affine-closed-subset.md`: both files passed YAML, delimiter, KaTeX, and wikilink-in-math checks.

No judge verdict or pass stamp was created.
