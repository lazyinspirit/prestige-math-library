# Final-adjudicator evidence — `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and every proof step; all declared topology,
inverse-limit, and Choice dependencies; the A/B profinite page context; the
batch-1 manifest, source coverage, notes, proof contract, boundary worksheet,
and critical-risk review; the Step-6 reader/refuter records; both frozen judge
rejections and exact Alpha adjudications; the defect-ledger rows; and Alpha's
two repairs.

## Mathematical basis

Alpha's final foundational split is correct: Hausdorffness and total
disconnectedness require no Choice, while compactness of an arbitrary product
is asserted only under the Axiom of Choice. The added product-Hausdorff,
closed-subspace compactness, and cylinder-basis dependencies address the second
frozen rejection.

Two local deductions were still only implicit. Tychonoff applies only after
each finite discrete factor is known compact, and product Hausdorffness does not
by itself literally state that the inverse-limit subspace is Hausdorff. I
repaired the proof by making both points explicit.

- A finite discrete group is Hausdorff by disjoint singleton neighbourhoods.
  Any open cover has a finite subcover after choosing one covering member per
  point; the library's finite-choice lemma supplies exactly this ZF step.
- The arbitrary product is Hausdorff by the cited product theorem. Intersecting
  disjoint ambient neighbourhoods with $L$ proves the subspace Hausdorff claim
  directly.
- Only under Choice does Tychonoff make the product compact. The inverse limit
  is closed by the earlier proved-here lemma, so closed-in-compact then makes
  $L$ compact.
- Exact-value coordinate cylinders
  $C_i(x)=\{z\in L:z_i=x_i\}$ are clopen because the factors are discrete. If
  two points differ in coordinate $i$, this cylinder and its complement give a
  clopen separation of any connected subset containing them. Hence every
  nonempty connected subset is a singleton.

I added the finite-choice dependency, regenerated both proof-contract entries,
changed the empty-connected-set, singleton, and Choice boundary rows to checked,
and wrote a current final-adjudicator critical-risk review.

## Source verification

Source status: `verified`.

- Brian Osserman's official Ohio State notes,
  https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf, support the
  inverse-limit topology and separation argument. Proposition 2.4 gives the
  product-subgroup topological-group structure; Lemma 2.5 proves the inverse
  limit is a closed subgroup and explicitly derives Hausdorffness and compactness
  from products/subspaces and closed subsets; the proof of Theorem 3.7 states
  that finite discrete factors are compact, Hausdorff, and totally disconnected
  and that products/subspaces preserve the latter property.
- Hendrik Lenstra's Leiden notes,
  https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf, independently
  define the projective limit with the restricted product topology (Section 2),
  use Tychonoff plus closedness for compactness, and identify clopen separation
  with total disconnectedness on PDF p. 3.

Those notes work in ordinary classical mathematics and do not inventory Choice
as finely as this library. The exact foundational scope therefore comes from the
opened local `thm-tychonoff`, whose hypothesis explicitly assumes full Choice;
the repaired item spends it only in the compactness clause.

## Focused checks

- `precheck`: 1 checked, 0 failing.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-1 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-1 citation fidelity: 118 citations over 53 items, no missing quote and
  no widening candidate.
- Required batch-1 risk report: 53 items routed, 0 errors; this theorem is
  critical risk with a complete final-adjudicator review.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.
