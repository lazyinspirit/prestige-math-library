# Final-adjudicator evidence — `def-profinite-completion-of-an-abstract-group`

Disposition: `repaired`.

## Material reviewed

I independently read the current definition; every declared dependency needed
for the construction; the preceding compatible-tuple and topological-subgroup
items; the A/B page pair; the batch-1 manifest, coverage ledger, notes, and
contract carriers; the page convention fixing reverse-inclusion indexing; the
Step-6 reader and refuter records; both frozen judge rejections and exact Alpha
adjudications; the defect-ledger rows; and Alpha's first and second repairs.

The item is a definition with `provenance.proof: not-applicable`, so it has no
item-local proof contract, finite smoke test, or proof risk tier. The Step-6
reader and refuter both opened it without an item-specific finding. Its
downstream uses do occur in five batch-1 proof contracts, whose quoted
Definition sections therefore had to remain synchronized with this repair.

## Mathematical basis

The finite-index normal subgroups form a nonempty directed index set in the
page's reverse-inclusion convention. The family contains $G$ itself. Given
$N_1$ and $N_2$, their intersection is normal, and the homomorphism

$$
G/(N_1\cap N_2)\longrightarrow G/N_1\times G/N_2,
\qquad g(N_1\cap N_2)\longmapsto(gN_1,gN_2),
$$

is injective because its kernel is $N_1\cap N_2$. Its source is consequently
finite, and $N_1\cap N_2$ is a common upper bound in reverse-inclusion order.
For $N'\subseteq N$, the natural map $G/N'\to G/N$ has exactly the direction
required by the page's convention
$\varphi_{ij}:G_j\to G_i$ for $i\leq j$.

Alpha's first repair supplied the intersection argument and the inverse-limit
topology. Alpha's second repair added a citation to the definition of a
profinite group. That citation did not by itself discharge the second frozen
rejection: the definition begins with a *topological group* and therefore
presupposes, rather than proves, continuity of the inverse-limit group
operations.

I repaired the item by citing the preceding lemma that the compatible-tuple
limit of finite discrete groups is a closed topological subgroup of the product.
The item now first obtains the topological-group structure from that lemma and
only then applies the profinite-group definition. I also made nonemptiness and
the common-upper-bound direction explicit. This fully closes both the original
well-definedness defect and the second-cycle topological-group defect without
changing the intended notion of profinite completion.

Because the Definition section changed, I regenerated the five affected
contract entries in both the batch-1 and merged contract files. The generator
preserved their boundary and `risk_review` records while refreshing citations
and derivations from the current item bytes.

## Source verification

Source status: `familiar`. No external verification was needed. The
finite-index intersection argument, quotient transition maps, coordinatewise
topological-group structure, and inverse-limit definition of a profinite group
are standard elementary facts, and the only disputed point was the library's
local dependency contract. The repaired conclusion is now supplied directly by
an earlier proved-here library lemma rather than by an external import.

## Focused checks

- `precheck` on the definition: no proof-bearing item was applicable and no
  failure was reported.
- Strict batch-1 proof contract on the five affected consumers: 5/5 checked,
  0 errors or warnings.
- Strict merged proof contract on the same consumers: 5/5 checked, 0 errors or
  warnings.
- Batch-1 citation fidelity: 116 citations over 53 items, with no missing quote
  and no widening candidate.
- Required batch-1 risk review: 53 items routed, 0 errors.
- Batch-1 content policy: 73 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- Renderer check on the repaired item: clean YAML, wikilinks, delimiters, and
  KaTeX.
- `git diff --check` on the item and both synchronized contract files: clean.
