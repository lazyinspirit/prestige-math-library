# Final-adjudicator evidence — `thm-topological-characterisation-of-profinite-groups`

Disposition: `repaired`.

## Material reviewed

I independently read the statement and every proof step; all inverse-limit,
compactness, separation, continuity, and topological-group dependencies; the
complete profinite A/B page context; the batch-1 manifest, source coverage,
notes, proof contract, boundary worksheet, and critical-risk review; the Step-6
reader/refuter records; both frozen judge rejections and exact Alpha
adjudications; the defect-ledger rows; and Alpha's two repairs.

## Mathematical basis

Alpha's final repair correctly adds Choice, obtains an open subneighbourhood
before taking a compact complement, and fixes the compact-image/density route to
surjectivity. Two phrases still concealed the theorem's load-bearing work:
“the standard compact-group stabiliser construction” did not construct the
open normal subgroup, and “common refinements show density” did not exhibit the
element realizing a finite cylinder. I expanded both arguments.

For a compact Hausdorff totally disconnected group, total separatedness first
gives a clopen identity neighbourhood $C$ inside an arbitrary identity
neighbourhood. Put $K=(G\setminus C)\cap C^2$. Compactness and Hausdorffness make
$K$ compact and closed. Continuity of multiplication supplies, for each
$h\in C$, neighbourhoods $W_h$ of $h$ and $X_h$ of $1$ with
$W_hX_h\subseteq C$. A finite $W_h$-subcover and the symmetric intersection
$Y$ of the corresponding $X_h$ give $CY\subseteq C$. Therefore
$H_0=\bigcup_{n\ge1}Y^n$ is an open subgroup contained in $C$. Compactness
makes its index finite. Since its normalizer contains it, it has only finitely
many conjugates; their intersection is an open normal finite-index subgroup
inside the original neighbourhood.

For the inverse-limit identification, I use the family of *all* open normal
finite-index subgroups, which is genuinely closed under finite intersections.
The canonical map is continuous coordinatewise and injective because the basis
separates points. For density, a basic cylinder restricting
$N_1,\ldots,N_k$ is handled at the common coordinate
$M=N_1\cap\cdots\cap N_k$: choose a tuple in the nonempty cylinder and a
representative of its $M$-coordinate. Compatibility makes that representative
match every restricted coordinate. The no-restriction case contains the
identity tuple. Compact-image closedness in the Hausdorff target then upgrades
density to surjectivity, and compact-to-Hausdorff gives a homeomorphism.

This proves both equivalences separately: profinite implies the compact/
Hausdorff/totally-disconnected properties and the finite-quotient kernel basis;
total disconnectedness constructs such a basis; and any compact Hausdorff group
already having one is its finite-quotient inverse limit.

I added the finite-product and closed-subspace compactness dependencies,
regenerated both proof contracts, corrected the empty-cylinder, Choice, and
reverse-implication boundary records, and wrote a current final-adjudicator
critical-risk review.

## Source verification

Source status: `verified`.

- Brian Osserman's official Ohio State notes,
  https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf, give the exact
  route. Theorem 3.7 states the compact-Hausdorff-totally-disconnected
  characterization. Lemma 3.9 (PDF pp. 4-5) constructs an open subgroup inside
  a clopen identity neighbourhood using the compact stabilizer argument and
  then takes the finite-conjugate core. The proof of Theorem 3.7 identifies the
  group with the inverse limit of its open normal quotients, proving continuity,
  injectivity, and surjectivity through compactness and finite intersections.
- Hendrik Lenstra's Leiden notes,
  https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf, independently
  state on PDF p. 3 that profinite groups are exactly Hausdorff, compact, totally
  disconnected topological groups, identify total disconnectedness with clopen
  separation, and explain the closed-subgroup-of-compact-product route.

Those sources work classically. The item's explicit Axiom of Choice hypothesis
is retained because the local inverse-limit compactness theorem tracks
Tychonoff's Choice cost exactly.

## Focused checks

- `precheck`: 1 checked, 0 failing; stored phase numbering is canonical.
- Renderer check: clean YAML, wikilinks, displays, delimiters, and KaTeX.
- Strict batch-1 proof contract: 1/1 checked, 0 errors or warnings.
- Strict merged proof contract: 1/1 checked, 0 errors or warnings.
- Batch-1 citation fidelity: 121 citations over 53 items, no missing quote and
  no widening candidate.
- Required batch-1 risk report: 53 items routed, 0 errors; this theorem is
  critical risk with a complete final-adjudicator review.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- `git diff --check` on the repaired theorem and both synchronized contracts:
  clean.
