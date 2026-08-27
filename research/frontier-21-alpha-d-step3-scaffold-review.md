# frontier-21 — group Alpha `d`, step-3 scaffold breadth and depth review

Batches **6** and **10**, the discrete-combinatorics cluster in
`research/frontier-21-alpha-groups.json`: integer partitions / Pólya counting
and the Erdős-Hajnal blockade pages. For each owned A/B pair I read the batch
manifest, coverage, notes, governing design section, current `plan-spec.json`,
and the relevant step-0 drift ruling. I also refreshed
`research/frontier-21-alpha-d-scope-decisions.json`, resolved all 14 current
declines, and repaired one in-scope backward prerequisite on page `409`:
`thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property` now
cites `cor-rodl-for-a-nonempty-family-of-forbidden-graphs`, and
`node tools/content-policy.mjs --manifest-only research/frontier-21-batch-10.pages.json`
passes on Thursday, August 27, 2026.

No owned A page is near the step-3 split ceiling: page `201` has 21 A items,
page `205` has 20, page `409` has 14, and page `435` has 7.

## Verdicts

| pair | A items | B items | verdict | findings |
|---|---:|---:|---|---|
| `integer-partitions-and-the-twelvefold-way` | 21 | 15 | **sufficient** | none |
| `counting-up-to-symmetry-burnside-and-polya` | 20 | 12 | **sufficient** | none |
| `pure-pairs-forests-and-path-antipath-classes` | 14 | 4 | **insufficient** | B10-1 |
| `quotient-blockades-and-mixing-relations` | 7 | 4 | **sufficient** | none |

## Severity table

| id | pair | severity | class | disposition |
|---|---|---|---|---|
| B10-1 | `pure-pairs-forests-and-path-antipath-classes` | **major** | source depth: no textbook/monograph/full lecture-note treatment | route to Beta 10 |

## Batch 6

### `integer-partitions-and-the-twelvefold-way` — **sufficient**

The current scaffold is breadth-complete against the live CB-8 route. It has
the partition/twelvefold-way conventions item, Ferrers and conjugation data,
the `p(n)` / `p_k(n)` layer, the exact-`k` recurrence, the direct Euler-product
agreement remark against the published multiset proof, the distinct/odd product
specializations, Euler's theorem by generating functions and by Glaisher, the
self-conjugate/distinct-odd bijection, the Durfee-square identity, the unified
twelvefold-way theorem with its unlabelled-to-unlabelled subtheorem, and the
Franklin pentagonal theorem plus recurrence. The B page is real, not padding:
it works the twelve cells at `n=3, k=2`, lists and conjugates partitions of 6,
computes `p(10)`, and carries two honest counterexamples plus the summability
warning the page needs.

The source set also satisfies the pair rule on current disk. Hulpke and
Grinberg give independent note treatments of the twelvefold-way / partition
core, Melczer supplies the conjugation/Durfee/self-conjugate route, and the MIT
lecture note is an exact Franklin source. The three declines in
`research/frontier-21-alpha-d-scope-decisions.json` are acceptable as written:
the two bivariate master generating-function rows are stronger than the current
page needs, and Melczer's `Additional Problems` block is the later q-analogue
branch rather than a missing prerequisite. Step 0 already records that the
CB-17 box-count note is a later target, not a defect in page `201`'s closure.

### `counting-up-to-symmetry-burnside-and-polya` — **sufficient**

The scaffold follows the enriched CB-10 correction rather than the stale base
inventory. It does not re-mint Burnside's lemma; it starts where the current
design says it should start: cycle index, weighted pattern inventory,
cycle-index series, the computed `C_n`, `D_{2n}`, `S_n`, and `A_n` formulas,
plain and weighted Pólya, necklace and bracelet counts, the mandatory agreement
remark with the published `CYC` necklace formula, the edge-set-orbit
application, and the coefficientwise exponential identity for `Z(S_n)`. The B
page is also honest: it computes `Z(C_4)`, `Z(D_8)`, `Z(S_3)`, carries the
nonfree-action witness, compares the two necklace routes, counts bracelets and
cube-face colourings, and gives the required cycle-index counterexamples.

The pair's backing is strong enough. Judson is the required textbook-form
treatment, Lynn and MathWorld give independent cycle-index / weighted-Pólya
writeups, and *Applied Combinatorics* supplies the dihedral and edge-set-orbit
application. The notes correctly keep the nonisomorphic-graph item in the
edge-set language rather than the enriched graph-language wording, because the
graph-definition discharge would widen the prerequisite boundary beyond the live
spec. That is an honest scope-preserving workaround, not a missing result.
De Bruijn stays out because the controlling design itself withholds it absent an
exact source. No step-3 blocker remains on page `205`.

## Batch 10

### `pure-pairs-forests-and-path-antipath-classes` — **insufficient**

The mathematical route is otherwise in good shape. The page has the small
`P_4`-free bridge, the strong-to-weak implication, the general
Erdős-Hajnal-Pach pure-pair baseline, the forest strong theorem and weak
corollary, the path-antipath strong theorem and weak corollary, the earlier
leaf-deletion virality theorem, and the target paper's leaf/co-leaf virality
and Erdős-Hajnal corollary. The deferred and out-of-scope rows also now close
honestly against the live plan: Theorem `1` goes to page `401`, Theorem `3.2`
to page `403`, Theorem `1.9` to page `417`, and the buildable-class theorems
stay out of the deliberately narrower 409/410 scope. The one backward
prerequisite gap I found was repaired in place before this review closed.

### B10-1 — the pair still lacks the required source form

The standing batch rule is explicit: every pair needs two independent
treatments, **at least one** of them a textbook, monograph, or full lecture-note
set with a harvestable table of contents. Page `409` does not have that on
current disk. Its coverage lists:

1. Maria Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey* (`survey`)
2. Bousquet–Lagoutte–Thomassé, *The Erdős-Hajnal Conjecture for Paths and
   Antipaths* (`paper`)
3. Chudnovsky–Scott–Seymour–Spirkl, *Pure pairs. I. Trees and linear
   anticomplete pairs* (`paper`)
4. Nguyen–Scott–Seymour, *Induced subgraph density. IV* (`paper`)
5. Huang–Ju–Zhou, *Erdős-Hajnal beyond the five-vertex path* (`paper`)

That is one survey plus four papers, and none of those sources is a textbook,
monograph, or full lecture-note set. This is a step-3 sufficiency failure even
though the scaffold's mathematics is otherwise coherent: the pair is missing the
required backing form, exactly the source-depth defect Alpha flagged on
`modules-substitution-and-prime-graphs` in the previous combinatorics run.

**Required at `3-fix`:** add one qualifying textbook/monograph/full
lecture-note treatment for the pure-pair / forest / path-antipath / leaf/co-leaf
route, enumerate its own section or named-result headings over the exact range
used, and give each heading a disposition in the coverage file. Until that
source exists on current disk, page `409` is not sufficient for authoring.

### `quotient-blockades-and-mixing-relations` — **sufficient**

This scaffold is narrow in exactly the right way. It defines the mixed-block
reachability relation, proves equivalence, defines the quotient blockade, splits
Lemma `6.1` into its three logical parts, and ends at Lemma `6.2`, exactly as
the 435/436 design row says. The B page earns its keep: it shows direct
mixedness is not transitive, computes a quotient class on a mixed chain, and
works the Lemma `6.2` reduction on a finite configuration.

The source backing is sufficient as a pair. Nguyen's EH notes give the required
lecture-note-form treatment for the blockade context, the `5`-hole paper gives
the earlier pure-blockade/pattern background, and the target paper gives the
exact relation `M`, quotient construction, and Lemmas `6.1-6.2`. All current
declines are honest. The VC-dimension and long-sparse-blockade rows are upstream
of this page's local quotient remit, while source items `5.1`, `5.2`, and `6.3`
each have exact later destinations on current disk (`413` or `417`). I found no
remaining missing prerequisite, hidden forward edge, or unsupported omission on
page `435`.
