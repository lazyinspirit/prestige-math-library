# Owner escalation resolution 2 — torus classification

Run: `phase-2-remaining-27`  
Group: `a`  
Escalated item: `def-torus-and-maximal-torus-in-a-compact-lie-group`

## Verdict

At the decision-time current-byte read, the obstruction **survived** the later
final-adjudicator repairs and required an owner-authorized supplier repair.
The escalated definition then still said that every torus is a product of
circles and that this was “proved on this page”; its `itemHashGuard` was
`aeab4af90d782c2a021084e40c4d3a0ca793b432d9d2e094f91542d8a91dcc34`
and its judge-normalized hash was
`46e5b813da4893f99710a01d60bbdab3ad4ef8f522697b4111bdf05e9824f8b3`.

The designated proof-bearing supplier,
`thm-structure-of-a-compact-connected-abelian-lie-group`, still depended on
that definition but did not state any choice hypothesis and did not depend on
`def-axiom-of-choice` or an AC-to-countable-choice lemma. Nevertheless its
exponential-map definition, multiplicativity proposition, local-diffeomorphism
corollary, and circle-group supplier all explicitly assume
`AC_omega`. Its step 3.2 also asserted, without an argument, that the image of
a discrete subgroup under projection modulo the first lattice direction is
again discrete.

The later queue-position repairs did not address either issue:

- Position 2, `thm-maximal-tori-exist-in-compact-lie-groups`, now expressly
  uses only the defining clauses of the torus item, “not the additional
  classification assertion,” and proves maximality by an attained maximum of
  dimensions.
- Position 3,
  `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus`,
  spends countable choice through Cartan's closed-subgroup theorem and then
  invokes position 2. It neither proves nor supplies the product-of-circles
  classification.

Thus the repaired positions 2 and 3 correctly avoid the defective interface,
but they do not make the definition's classification supplier complete.

During final validation, another lane concurrently removed the definition's
classification sentence. The final current definition instead says only that
the product of $r$ circle groups is a torus of dimension $r$; its current
`itemHashGuard` is
`d57e4ff2ae0cfae031ade41cc6de72aa4f72c268f3bf34df71673f194e88c80d`
and its judge-normalized/item-file SHA-256 is
`197acbba290785a67e438faf11c629c4d849dc2d2e16b273289897278267e9e4`.
This lane did not author that concurrent edit. It removes the consumer-side
overstatement, but it does not erase the independently defective supplier
proof already repaired here: that proof still spent undeclared countable
choice and still lacked the projection-discreteness argument.

## Repair

Edited draft item:
`items/thm-structure-of-a-compact-connected-abelian-lie-group.md`.

The repair is deliberately local:

1. The statement and Given now assume the Axiom of Choice.
2. `def-axiom-of-choice` and
   `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
   are declared dependencies. Fact A1 uses the latter's exact theorem
   `AC => AC_omega` before any exponential-map supplier is invoked. The unused
   `thm-universal-covering-lie-group` dependency was removed.
3. The statement now records that the earlier torus definition supplies
   terminology only; the product-of-circles classification is not a premise. The
   exponential-kernel argument proves that classification independently, so
   the logical cycle is broken without changing the A/B reading order.
4. Step 3.2 now proves projection discreteness. After choosing a shortest
   nonzero `X_1`, every lattice element is reduced to an `X_1`-coordinate in
   `[-1/2,1/2]`. Representatives whose orthogonal projections have norm at
   most one lie in a compact cylinder. Its intersection with the closed
   discrete subgroup is finite, so the nonzero projected norms have a
   positive minimum. Induction then produces lifted generators and proves
   that the subgroup is free abelian on a real basis of its span.
5. The Batch-12 manifest dependency row and the structure theorem's proof
   contract were synchronized. Exact quotations were regenerated for the
   affected Batch-12 contracts that cite the repaired theorem or torus
   definition, including a second regeneration after the concurrent definition
   edit. The nonempty-choice boundary now says precisely that AC is spent
   through A1 to supply the `AC_omega` hypotheses of L1–L3; the
   finite-dimensional lattice induction adds no further infinite choice.

This lane edited no published item, page, queue, terminal receipt, judge
verdict, pass stamp, closure file, task file, or tool, and did not edit the
torus definition. Concurrent changes outside this lane were preserved.

## Authoritative source witnesses

- Brian Conrad and Aaron Landesman, *Compact Lie Groups*, §6.1, Lemma 6.11,
  Fact 6.12 and Theorem 6.13:
  <https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf>.
  Lemma 6.11 proves that the exponential map of a connected commutative Lie
  group is a surjective homomorphism with discrete kernel; Fact 6.12 gives the
  discrete-subgroup structure; and Theorem 6.13 concludes, “the compact
  connected commutative Lie groups are precisely the groups `(S^1)^r`.” This
  is the exact route used locally.
- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, digital second
  edition, Corollary 1.103(b)–(c), printed page 91, and Chapter IV §5, printed
  page 251:
  <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>.
  Knapp writes, “A torus is a product of circle groups,” and Corollary 1.103
  classifies an abelian analytic group as `R^l x T^k`, with the compact case a
  torus. The proof passes through `R^n/D` for a discrete subgroup `D`, matching
  the repaired quotient/lattice argument.

These references support the Lie-group classification and quotient route.
The repository's explicit choice cost is a local foundational contract:
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` proves
from `def-axiom-of-choice` that `AC_omega` holds, while the current exponential
suppliers explicitly state where they inherit `AC_omega`.

## Hashes and licence

For `thm-structure-of-a-compact-connected-abelian-lie-group`:

- immutable `pre-step7` `itemHashGuard` from the Step-7 baseline:
  `4114e8822d99218169ed6540d317ed9c30b3ea87443194a81c2d9a466e4ce466`;
- immediate pre-owner current `itemHashGuard`:
  `db112cb255e2402a563a7c3eec0c888ece76a8760d0019cb3eaa443cc50ed53e`;
- repaired current `itemHashGuard`:
  `c06dbd9484ecea4b17e609321f0209bfcd4de111baf5e330514111d00917935f`;
- repaired judge-normalized/item-file SHA-256:
  `34ac619e670dfee3f3256cfdcc0d821d6eb7b3413c2ff81081859add6da6cd73`.

The append-only owner repair ledger contains one
`owner-impact-repair` row with dependency path
`def-torus-and-maximal-torus-in-a-compact-lie-group ->
thm-structure-of-a-compact-connected-abelian-lie-group`, the two source URLs,
and the exact immutable pre/current post guard hashes.

## Focused checks

- `node tools/tsx-run.mjs tools/precheck.mts
  items/thm-structure-of-a-compact-connected-abelian-lie-group.md`: exit 0;
  1 checked, 0 failing.
- Focused strict proof-contract check on the repaired theorem in the Batch-12
  contract: exit 0; 1/1 checked, 0 errors, 0 warnings.
- `node tools/prosecheck.mjs --warnings` on the edited item and this report:
  exit 0; 2 files checked, 0 errors, 0 warnings.
- `node tools/depcheck.mjs`: exit 1 with one unrelated repository-wide error,
  the page cycle
  `root-systems-dynkin-diagrams-and-cartan-killing-classification ->
  highest-weight-theory-for-complex-semisimple-lie-algebras ->
  root-systems-dynkin-diagrams-and-cartan-killing-classification`. It reports
  no error involving either torus item or the repaired dependency edges.
- Global `git diff --check`: exit 2 because another lane's
  `items/thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.md:36`
  has trailing whitespace. The same check restricted to this lane's item,
  report, owner ledger and shared Batch-12 carriers exits 0.
- Round-2 group-a `queue-status`: positions 1–14 are now `current` and
  positions 15–77 are unrecorded. Thus no cluster position currently needs
  re-adjudication: position 1 was the minimum required target, and the FA lane
  concurrently completed its current recovery reseal; positions 2 and 3 are
  also current.

## Certification still owed

This owner lane has supplied repair authority and mathematical/source evidence,
not certification. The edited existing theorem still needs current ordinary
Step-7 evidence under the engine's existing-item rules. The latest current
position-1 FA receipt expressly says that the nonqueued structure theorem was
not used or certified; that is the remaining certification obligation. The
cluster's queue positions 1–3 themselves are current, so no further queue
re-adjudication is presently owed. No additional repair is identified. This
report is not a judge verdict, terminal receipt, pass stamp, or closure record.
