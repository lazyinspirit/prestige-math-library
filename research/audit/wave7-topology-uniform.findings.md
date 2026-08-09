# Wave 7 topology uniform-spaces — Audit-Beta A1/A2 findings

Date: 2026-08-08–09

## Scope and coverage

The manifest assigns one A/B pair: `uniform-spaces` with 54 in-scope items and
`uniform-spaces-examples` with seven, for 61 mathematical-content items. The
already dual-tagged
`ex-uncountable-cantor-cube-uniformizable-not-first-countable` is absent from
the manifest and was neither audited nor ledgered.

I read all 61 item files, all 253 declared dependency edges, and all 101
distinct dependency targets. Of those targets, 47 are in this batch and 54 are
outside it; the latter were read only as citation targets. I also read the
`uniform-spaces` page summary and the companion page file, which has no
narrative body.

There are 45 proof-bearing items. I read every one of their 180 numbered proof,
verification, refutation, or counterexample steps and every one of the 188
fact-to-target citations in their 146 labeled Facts. There is no coverage
exception.

The central fatal defect is a convention mismatch. The library requires every
filter to be proper, so no filter—and hence no entourage uniformity—exists on
the empty set. It nevertheless admits empty metric spaces, empty completely
regular and Tychonoff spaces, and the empty compact Hausdorff space. Eleven
published definitions or results pass across that mismatch without a nonempty
hypothesis. There are also citation-contract defects in the symmetric-root,
minimal-Cauchy-filter, compactness, uniformization, and worked-example chains.
The proposed repairs are below. A3 adjudication and the resulting A4 edits are
recorded at the end of this file.

## A1 provenance determinations

`wave7-topology-uniform.provenance.jsonl` contains exactly one row for each of
the 61 items. The eight distinct recorded URLs were opened successfully in the
browser-backed source reader. They are university notes or books, the
Encyclopedia of Mathematics, and one peer-reviewed paper. No URL is claimed for
the three exact worked constructions for which only informal search results
surfaced.

| Statement provenance | evidence | count |
|---|---|---:|
| `literature-derived` | `exact-source` | 19 |
| `ai-altered` | `semantic-source` | 21 |
| `ai-altered` | `established-knowledge` | 21 |

The 19 exact-source items are:

`def-uniform-space-by-entourages`,
`lem-symmetric-entourages-form-a-base`,
`thm-uniformity-induces-a-topology`,
`def-separated-uniform-space`,
`thm-separated-uniformity-iff-induced-topology-is-hausdorff`,
`def-uniformly-continuous-map`,
`thm-uniformly-continuous-maps-are-continuous`,
`lem-pseudometric-from-a-normal-entourage-sequence`,
`def-cauchy-filter-in-a-uniform-space`,
`lem-convergent-filters-are-cauchy`,
`lem-cauchy-filter-with-a-cluster-point-converges`,
`def-complete-uniform-space`,
`lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
`thm-uniform-completion-universal-property-and-uniqueness`,
`def-countably-based-uniformity`,
`def-uniformizable-space`,
`lem-uniformizable-spaces-are-regular`,
`def-topological-group`, and
`lem-topological-group-translations-and-inversion`.

The 21 semantic-source items are:

`lem-metric-uniformity-dictionary`,
`def-uniform-cover-space`,
`lem-entourage-and-uniform-cover-dictionary`,
`def-gauge-of-pseudometrics`,
`def-uniform-embedding-and-uniform-isomorphism`,
`def-completion-of-a-uniform-space`,
`lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
`lem-minimal-cauchy-filter-space-is-complete`,
`lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`,
`thm-hausdorff-completion-of-a-uniform-space`,
`def-totally-bounded-uniform-space`,
`lem-finite-star-refinement-for-compact-hausdorff-spaces`,
`thm-compact-hausdorff-open-cover-uniformity`,
`thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`,
`cor-compact-domain-maps-are-uniformly-continuous`,
`thm-countably-based-uniformity-is-pseudometrizable`,
`lem-completely-regular-topologies-come-from-continuous-pseudometrics`,
`def-pointwise-and-uniform-convergence-uniformities`,
`lem-uniform-convergence-uniformity-is-finer-than-pointwise`,
`ex-usual-metric-uniformity-on-r`, and
`ex-closed-unit-interval-has-one-compatible-uniformity`.

The 21 established-knowledge rows are explicitly escalated to Alpha and retain
`alpha_concurred: false`:

`lem-normal-sequences-of-entourages`,
`thm-entourage-uniformities-are-generated-by-gauges`,
`thm-three-definitions-of-uniform-space-are-equivalent`,
`lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy`,
`lem-compact-uniform-spaces-are-complete`,
`lem-compact-uniform-spaces-are-totally-bounded`,
`thm-complete-and-totally-bounded-uniform-spaces-are-compact`,
`cor-uniform-compactness-equivalence`,
`lem-countable-uniform-base-normalisation`,
`lem-uniformizable-spaces-are-completely-regular`,
`thm-uniformizable-iff-completely-regular`,
`cor-separated-uniformizable-iff-tychonoff`,
`def-left-and-right-uniformities-of-a-topological-group`,
`thm-topological-group-uniformities-induce-the-given-topology`,
`def-upper-and-roelcke-uniformities-of-a-topological-group`,
`cor-topological-groups-are-completely-regular`,
`ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`,
`fs-a-compatible-uniformity-is-unique`,
`ex-additive-group-uniformity-on-r`,
`ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`, and
`cex-k-topology-is-not-uniformizable`.

These are positive established-mathematics determinations, not failed searches
silently converted to a sourced label. The principal reason for the first
group is that classical sources do not state the library's exact ZF, DC, or
ultrafilter-lemma calibration. The non-Hausdorff topological-group definitions
are broader than the Hausdorff/Polish source clauses. The last worked examples
are canonical constructions or direct compositions of sourced standard
results, but no semantically identical allowed source was located. Alpha's
independent concurrence is required before these rows are valid for A4.

No Statement is classified `ai-generated`: there was no positive evidence that
any standard definition, theorem, or canonical example here was genuinely
invented. Proof provenance is independent: 29 proofs are `ai-altered`, 16 are
`ai-generated`, and the 16 non-proof items are `not-applicable`.

## A2 proof contracts and boundary checks

`wave7-topology-uniform.proof-contracts.json` contains all 45 proof-bearing
ids. It records an exact on-disk target clause and every using step for all 188
fact citations, and maps every numbered step exactly once. The strict contract
gate reports 45/45 items, zero errors, and zero warnings. The finite-smoke gate
reports zero errors and no applicable supported finite-combinatorial check.

The boundary worksheets contain 360 dispositions:

| boundary | checked | not applicable |
|---|---:|---:|
| empty | 44 | 1 |
| zero | 36 | 9 |
| one | 45 | 0 |
| degenerate | 23 | 22 |
| endpoints | 13 | 32 |
| nonempty choice | 35 | 10 |
| iff forward | 6 | 39 |
| iff reverse | 6 | 39 |

The high-risk routing report marks eight items critical, 23 high, nine
moderate, and five ordinary. Those routes require Alpha review later; no Beta
`risk_review` certification has been inserted.

## A3 proposal A — empty-carrier failures (class a)

The on-disk `def-filter` requires both `X in F` and `emptyset notin F`. At
`X=emptyset` these are contradictory, so no proper filter exists. In
particular, no entourage uniformity exists on the empty carrier.

This is not a harmless alternate convention elsewhere in the corpus:

- `def-metric-space` permits the empty metric space because all metric axioms
  are universally quantified over points.
- `def-completely-regular-and-tychonoff-spaces` says the empty closed-set case
  hides no nonemptiness condition; on the empty space complete regularity and
  T1 are vacuous.
- `def-compact-space` expressly says the empty space is compact.
- A uniform-cover structure does exist on the empty set: take the family of
  all covers of the empty set. It is nonempty, upward under coarsening, has
  common refinements, and has star-refinements.

Consequently the following current claims are false or their promised
construction fails at the empty carrier:

1. `lem-metric-uniformity-dictionary`: every metric entourage is empty and
   cannot generate a proper filter.
2. `def-uniform-cover-space`: its unqualified promise of equivalence with
   entourages is false on the empty carrier.
3. `lem-entourage-and-uniform-cover-dictionary`: the cover-to-entourage
   direction produces only the empty relation and no proper filter.
4. `def-gauge-of-pseudometrics`: every pseudometric ball on the empty set is
   empty, so the asserted nonempty filter base does not exist.
5. `thm-three-definitions-of-uniform-space-are-equivalent`: the cover
   formulation exists on the empty carrier while the entourage and gauge
   formulations do not.
6. `lem-completely-regular-topologies-come-from-continuous-pseudometrics`:
   the empty completely regular topology cannot be induced by the asserted
   gauge uniformity.
7. `thm-uniformizable-iff-completely-regular`: the empty space is completely
   regular but not uniformizable under the proper-filter convention.
8. `cor-separated-uniformizable-iff-tychonoff`: the empty space is Tychonoff
   but not separated-uniformizable.
9. `thm-compact-hausdorff-open-cover-uniformity`: the cover structure exists,
   but proof step 4.1 falsely invokes the dictionary to recover an entourage
   uniformity.
10. `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`: the
    empty compact Hausdorff topology has zero compatible uniformities, not
    exactly one.
11. `cor-compact-domain-maps-are-uniformly-continuous`: an empty compact
    Hausdorff source has no compatible source uniformity to which the asserted
    uniform continuity could refer.

Proposed smallest coherent repair:

- In `def-uniform-cover-space`, change the final sentence to say that for
  **nonempty** `X` the induced topology and equivalence with entourages are
  proved in the dictionary lemma.
- In `def-gauge-of-pseudometrics`, retain the definition of a gauge on any set
  but replace “The nonempty such sets form a filter base and generate a
  uniformity” by “If `X` is nonempty, these sets form a filter base and
  generate a uniformity.”
- Add “nonempty” to the carrier hypothesis of the other nine Statements above.

This is a class-(a) convention repair, not a stylistic strengthening. It keeps
all ids and conclusions on their intended nonempty domain and matches the
nonempty convention visibly used by Wodzicki's filter construction. Each of
the nine proof-bearing contracts already records the failing empty boundary.

## A3 proposal B — symmetric roots and finite composites (class b)

Current `lem-symmetric-entourages-form-a-base` states only:

> for every entourage E there is a symmetric entourage D contained in E.

Eleven in-scope Facts cite that Statement alone for a stronger proposition:
symmetric square roots, or a symmetric `D` with a prescribed finite composite
`D^n` contained in `E`. The present Statement does not license those uses.
Wodzicki states the symmetric-base result and separately gives the arbitrary
finite-composite construction in Exercise 23.

Proposed root repair: append to the Statement:

> More generally, for every entourage E and every integer n at least 1, there
> is a symmetric entourage D with the n-fold composite D^n contained in E.

Append the elementary finite derivation to the proof: take a finite chain of
square roots of length `n`, symmetrize the last member, and inductively obtain
`D^(2^n) subset E`; reflexivity lets one pad an `n`-fold composite to a
`2^n`-fold composite. This uses only finite recursion, not DC.

This one source-backed Statement repair makes the square-root and finite-power
Facts in the normal-sequence, countable-normalization, compact-map,
completion, minimal-filter, separation, and regularity proofs exact. Because
it is a public Statement change, it is a material repair and its impact cone
must be audited.

Two local citations still need direct repairs:

- `lem-convergent-filters-are-cauchy` step 1.1 chooses a **symmetric** square
  root, but its Facts and deps omit `lem-symmetric-entourages-form-a-base`.
  Add that dependency and cite the strengthened clause in L2.
- `lem-cauchy-filter-with-a-cluster-point-converges` step 1.2 treats `D[x]` as
  a neighbourhood, but no Fact cites the induced-topology theorem. Add
  `thm-uniformity-induces-a-topology` to deps and to the exact Fact used there.

## A3 proposal C — minimal-Cauchy-filter construction (class b)

The carrier of `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`
must be nonempty before its hatted relations can generate a proper filter.
The proof never establishes this. The next lemma also says in L1 that
principal filters are Cauchy while citing
`lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`, whose current
Statement starts only with an already-Cauchy filter. Finally,
`thm-hausdorff-completion-of-a-uniform-space` uses the claim that every member
of the minimal point filter at `x` contains `x`, but its cited point-filter
lemma does not state that clause.

Wodzicki 6.1.4-6.1.6 states all three missing facts: the singleton family at a
point is Cauchy, its associated minimal filter is the point-neighbourhood
filter, and these filters define the canonical map.

Proposed coupled repair:

- Append to `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` that the
  principal filter at every point is Cauchy and hence has an associated
  minimal Cauchy filter. Add the one-line verification
  `{x} times {x} subset E` for every entourage.
- In `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
  make L1 quote that clause and state before the base verification that a
  uniform space is nonempty and therefore its minimal-filter carrier is
  nonempty.
- Append to the Statement of
  `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space` that every
  member of `eta(x)` contains `x`. In its construction, this follows from
  `m(P_x) subset P_x` and the definition of the principal filter.
- Expand L2 of `thm-hausdorff-completion-of-a-uniform-space` to quote that
  member-contains-the-point clause exactly before step 2.1 uses it.

The first and third changes are material Statement repairs; the other two are
proof/citation repairs.

## A3 proposal D — remaining citation-precision repairs (class b)

### Choice strength in compactness

In `thm-complete-and-totally-bounded-uniform-spaces-are-compact`, current L3
cites both `thm-compactness-via-nets-filters-and-ultrafilters` and
`thm-ultrafilter-lemma`. The first target itself says:

> Assume the ultrafilter lemma ... X is compact iff every ultrafilter on X
> converges.

The second target instead begins “Assume the Axiom of Choice” and proves every
filter extends to an ultrafilter. The proof never needs that extension. Remove
`thm-ultrafilter-lemma` from L3 and deps; retaining it makes the Fact claim the
weaker hypothesis while citing a full-Choice theorem.

### Definition and topology clauses

- `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` L3 says a
  compatible uniformity induces the given topology but cites
  `def-uniform-space-by-entourages`, which does not define compatibility. Add
  `def-uniformizable-space` and quote its compatible-uniformity clause.
- `thm-countably-based-uniformity-is-pseudometrizable` L3 says a
  pseudometric is a metric exactly when its zero-pair relation is diagonal,
  but neither current target states the pseudometric-to-metric criterion. Add
  `def-metric-space`, whose pseudometric clause states it exactly.
- `lem-completely-regular-topologies-come-from-continuous-pseudometrics` step
  1.1 asserts `p_f(x,y)=|f(x)-f(y)|` is a pseudometric without a triangle
  citation. Add `lem-of-triangle-inequality` and `lem-of-abs-value` and state
  the direct substitution proving symmetry, reflexivity, and the triangle
  inequality.
- `cor-separated-uniformizable-iff-tychonoff` uses Hausdorff implies T1 in
  step 1.1 and T1 implies singletons closed in step 1.2. Add
  `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`, clause 2, and
  `thm-t1-iff-singletons-are-closed`, clause (b), to deps and the corresponding
  Facts.
- `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` L2 attributes
  a triangle-inequality estimate to `lem-of-abs-value`, whose Statement has no
  triangle inequality. Add `lem-of-triangle-inequality` to L2 and deps.

### Compact-domain proof and a hidden family choice

`cor-compact-domain-maps-are-uniformly-continuous` L3 says that a uniform open
cover admits an entourage-ball refinement, but
`thm-compact-hausdorff-open-cover-uniformity` states only that open covers are
uniform. Add `lem-entourage-and-uniform-cover-dictionary` and quote its ball
refinement clause.

Step 1.1 also says “for each x ... choose an open neighbourhood O_x.” No choice
principle is assumed. Avoid a family choice by defining `O_x` canonically as
the union of all open `O` containing `x` for which
`f[O] subset W[f(x)]`. Continuity makes the indexing family nonempty; the union
is open and retains the image containment. The rest of the proof is unchanged.

### Discrete target uniformity in the convergence example

`ex-pointwise-but-not-uniform-convergence-on-a-countable-domain` gives the set
`{0,1}` only its discrete **topology**, then step 1.2 uses equality as a target
entourage. Add `ex-discrete-metric` and
`lem-metric-uniformity-dictionary`; say explicitly that `{0,1}` carries its
zero-one metric uniformity and that the equality relation is a metric
entourage. This makes both pointwise and uniform convergence well-defined and
licenses the step.

## A3 proposal E — provenance/source metadata (class c)

All 61 items currently lack a component `provenance` block and none has a
legacy `authorship` field. After Alpha adjudicates the 21
`established-knowledge` rows, approve one bulk pure-retag pass using the ledger
values. Add the ledger's verified URLs to `sources.references`.

The present blanket Wodzicki reference does not expose the claimed clause for
the topological-group, function-space, and K-topology items. Replace it there
with the verified BIU topological-group notes, Rosendal's Roelcke source where
applicable, and the ETSU Munkres K-topology notes plus the Vienna uniformization
source. Remove the unverified Cambridge completion landing-page URL; Wodzicki
and Encyclopedia of Mathematics supply the completion clauses. Remove the
Wodzicki reference from the exact `h(x)=x/(1+|x|)` and moving-tail examples,
for which the ledger honestly claims no source URL rather than a merely related
one.

This pure-retag/source pass uses one stage snapshot and retains existing judge
and audit blocks unless an item also receives a material repair. Each material
repair above needs its own item-named baseline, stale judge/audit deletion, and
post-repair independent reading as prescribed by A4.

## Nonfatal observations left unchanged under triage

- The homeomorphism calculation for `h` compresses continuity and inverse
  algebra into one sentence after the triangle citation. A competent reader
  checks it directly in under 30 seconds.
- `fs-a-compatible-uniformity-is-unique` does not expand the routine pullback
  uniformity verification.
- `ex-additive-group-uniformity-on-r` treats continuity of real addition and
  negation as standard, and the group-uniformity theorem compresses the
  inversion entourage algebra. These are sub-30-second gaps.
- The A-page summary is mathematically consistent with the item chain; no
  published-claim decay was found there.

No other false Statement, invalid proof step, wrong-direction dependency,
choice-strength mismatch, or mathematical falsehood in prose was found.

## A4 application record

`wave7-A3.md` approves the eleven nonempty-carrier corrections, the eight
citation-precision repairs, the 19 exact-source provenance rows, and the 21
semantic-source provenance rows. It defers all 21 established-knowledge rows
to Alpha and declines the finite-composite strengthening, the
minimal-Cauchy-filter Statement changes, removal of the unused ultrafilter
dependency, and deletion of old source references. The declined text and
dependencies remain unchanged.

The common derivation for the eleven class-(a) repairs is elementary and is the
same one recorded above: `def-filter` requires both $X\in\mathcal F$ and
$\varnothing\notin\mathcal F$. When $X=\varnothing$ these conditions contradict
one another, so the library has no entourage uniformity on the empty carrier.
Metrics, complete regularity, Tychonoffness, compactness, and uniform-cover
structures do permit the empty carrier. The applied repairs are:

1. `lem-metric-uniformity-dictionary` — old: “For a metric space $(X,d)$” and
   an assertion that its metric entourages generate a proper uniformity. New:
   “with $X\ne\varnothing$”; the Given line also makes both metric carriers
   nonempty, and step 2.1 now proves that every basic entourage is nonempty.
   Class (a), with the proper-filter derivation above.
2. `def-uniform-cover-space` — old: every uniform-cover structure was said to
   induce a topology and be equivalent to entourages. New: that final promise
   is explicitly restricted to $X\ne\varnothing$. Class (a), same derivation.
3. `lem-entourage-and-uniform-cover-dictionary` — old: the two formulations
   determined one another on an arbitrary set. New: the title, Statement, and
   Given line require a nonempty set, and step 1.2 observes that the constructed
   entourage contains the nonempty diagonal. Class (a), same derivation.
4. `def-gauge-of-pseudometrics` — old: the basic pseudometric relations were
   said to generate a uniformity on every $X$. New: they do so when
   $X\ne\varnothing$. Class (a), same derivation.
5. `thm-three-definitions-of-uniform-space-are-equivalent` — old: the
   equivalence was unqualified. New: the title, Statement, and Given line state
   it only on a nonempty set. Class (a), same derivation.
6. `lem-completely-regular-topologies-come-from-continuous-pseudometrics` —
   old: every completely regular topology was produced by a gauge, and step 1.1
   merely asserted that $|f(x)-f(y)|$ is a pseudometric. New: the carrier is
   nonempty; L4 quotes the absolute-value and triangle-inequality results; step
   1.1 verifies nonnegativity, symmetry, the zero diagonal, and the triangle
   inequality by substitution. Classes (a) and (b), with the proper-filter
   derivation and `lem-of-abs-value`/`lem-of-triangle-inequality`.
7. `thm-uniformizable-iff-completely-regular` — old: the equivalence covered
   every topological space. New: the title, Statement, and Given line require a
   nonempty space. Class (a), same derivation.
8. `cor-separated-uniformizable-iff-tychonoff` — old: the equivalence covered
   every topological space and compressed Hausdorff $\Rightarrow T_1$ and
   $T_1\Rightarrow$ singleton-closed without their targets. New: the carrier is
   nonempty; L5 quotes `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`
   clause 2 and L6 quotes `thm-t1-iff-singletons-are-closed` clause (b), with
   both steps citing them. Classes (a) and (b), with those exact clauses.
9. `thm-compact-hausdorff-open-cover-uniformity` — old: the compatible
   uniform-cover construction was asserted for every compact Hausdorff space.
   New: the title, Statement, and Given line require nonemptiness. Class (a),
   same derivation.
10. `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` — old:
    every compact Hausdorff topology was said to carry a compatible uniformity,
    and L3 attributed compatibility to `def-uniform-space-by-entourages`. New:
    the carrier is nonempty and L3 quotes the actual compatibility clause in
    `def-uniformizable-space`. Classes (a) and (b), with the proper-filter
    derivation and that exact Definition clause.
11. `cor-compact-domain-maps-are-uniformly-continuous` — old: the source could
    be empty, L3 attributed an entourage-ball refinement to the open-cover
    theorem, and step 1.1 selected one neighbourhood for every point. New: the
    source is nonempty; L3 separates the open-cover theorem from the ball-cover
    refinement in `lem-entourage-and-uniform-cover-dictionary`; and
    $O_x$ is canonically the union of all suitable open neighbourhoods, so no
    family choice is used. Classes (a) and (b), with the proper-filter
    derivation and the dictionary's exact Statement.
12. `lem-cauchy-filter-with-a-cluster-point-converges` — old: steps 1.2 and 3.1
    used entourage balls as neighbourhoods without citing the induced-topology
    theorem. New: L3 quotes `thm-uniformity-induces-a-topology`; both steps cite
    it. Class (b).
13. `thm-countably-based-uniformity-is-pseudometrizable` — old: L3 attributed
    “a pseudometric is a metric exactly when its zero pairs are diagonal” to the
    metric-uniformity dictionary and separatedness definition. New: that clause
    is quoted from `def-metric-space`. Class (b).
14. `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` — old: L2
    attributed the triangle inequality to `lem-of-abs-value`. New: L2 and the
    dependency list cite `lem-of-triangle-inequality` for it. Class (b).
15. `ex-pointwise-but-not-uniform-convergence-on-a-countable-domain` — old:
    only a discrete topology was specified before equality was used as a target
    entourage. New: $\{0,1\}$ carries the zero-one metric uniformity, L1
    verifies the metric axioms directly, identifies radius-$1/2$ balls and the
    radius-$1/2$ equality entourage, and step 1.2 cites L1. A3 named
    `ex-discrete-metric`, but the repository gate correctly rejected that item
    as a B-page-only dependency. The final legal dependency is
    `def-metric-space`, together with the same-page
    `lem-metric-uniformity-dictionary`; the direct triangle verification is:
    if $u\ne w$, then $u\ne v$ or $v\ne w$, so
    $1=d(u,w)\le d(u,v)+d(v,w)$. Class (b).

Before these edits, each of the fifteen material items received its own
`pre-A4-<id>` snapshot in `wave7-touches.json`. The shared ledger already had
the stage snapshot `pre-A4` at index 1. I added a second `pre-A4` at index 15
before noticing the existing label; I did not rewrite the shared ledger because
first-match baseline resolution still selects index 1. The whole-wave
`post-A4` snapshot remains the orchestrator's serial action after every sibling
Beta finishes, as required by `AUDIT-WORKFLOW.md`.

The provenance application is complete to the A3 boundary. Old: all 61 items
lacked a component `provenance` block. New: all 19 exact-source and all 21
semantic-source items listed above carry the ledger's Statement and proof
values, and every ledger URL for those rows appears in `sources.references`.
Thirty of these were pure retags and retain their previous judge and audit
stamps. Ten also received a material repair and therefore lost their stale
judge and audit stamps. The other five materially repaired items are among the
21 established-knowledge rows and likewise lost stale stamps, but remain
untagged. All 21 established-knowledge rows still say
`alpha_concurred: false`; none was silently converted or applied. No legacy
`authorship` field remains in the scope, and no old source reference was
deleted.

The proof-contract ledger was refreshed after reflow. It still covers all 45
proof-bearing items, all numbered steps exactly once, every citation with an
exact current target clause and complete use list, and all eight boundary
cases. In particular, the nine proof-bearing nonempty-carrier repairs now mark
the empty case as excluded by the repaired hypothesis rather than retaining a
stale proposed-repair note.

The local checks after the final edit report:

- reflow: all 13 changed proof items unchanged; precheck: 13/13 pass (the final
  discrete-uniformity adjustment was rechecked separately, 1/1 pass);
- proof-contract strict: 45/45, zero errors and zero warnings;
- finite-smoke: zero errors, zero applicable checks; risk routing: 45 items,
  zero errors;
- rendercheck: 61 files clean with real KaTeX and parsed frontmatter;
  prosecheck: 61 files, zero errors and zero warnings; citecheck: 61 items,
  no recognized misattribution;
- content-policy manifest-only: 61 items, zero errors and zero warnings;
  audit-manifest: 105 published-backward and 159 same-batch edges, with no
  dangling or illegal target after the B-leaf correction;
- depcheck with `--pending-audit-ok`, fwdcheck, extcheck, and depsource all exit
  zero. The pending-audit warnings are the intended A4 state until A6 reads the
  fifteen material repairs independently.

The full ledger-aware content-policy check remains intentionally red with 105
errors: exactly five diagnostics for each of the 21 untagged
established-knowledge rows (missing Statement tag, missing proof tag, ledger
mismatch, evidence mismatch, and missing Alpha concurrence). There is no error
outside that deferred set.

A1/A2/A4 coverage is complete for the assigned pair: every one of the 61 items,
180 numbered steps, and 188 dependency citations was read. Alpha must now
concur with or reclassify the 21 established-knowledge rows and independently
certify the fifteen material repairs. The orchestrator must take the serial
whole-wave `post-A4` snapshot and generate the impact-audit worklist after all
Beta batches have returned.

## A4 recovery after the corrected A3 decision

Alpha concurred with all 21 `established-knowledge` rows. Their recorded
Statement/proof labels and every recorded URL are now transcribed into the
matching item frontmatter. The five items already materially repaired in the
first A4 pass retain their absent stale stamps; the other pure transcriptions
retain their existing judge and audit stamps. The 21 ids are:

`lem-normal-sequences-of-entourages`,
`thm-entourage-uniformities-are-generated-by-gauges`,
`thm-three-definitions-of-uniform-space-are-equivalent`,
`lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy`,
`lem-compact-uniform-spaces-are-complete`,
`lem-compact-uniform-spaces-are-totally-bounded`,
`thm-complete-and-totally-bounded-uniform-spaces-are-compact`,
`cor-uniform-compactness-equivalence`,
`lem-countable-uniform-base-normalisation`,
`lem-uniformizable-spaces-are-completely-regular`,
`thm-uniformizable-iff-completely-regular`,
`cor-separated-uniformizable-iff-tychonoff`,
`def-left-and-right-uniformities-of-a-topological-group`,
`thm-topological-group-uniformities-induce-the-given-topology`,
`def-upper-and-roelcke-uniformities-of-a-topological-group`,
`cor-topological-groups-are-completely-regular`,
`ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`,
`fs-a-compatible-uniformity-is-unique`,
`ex-additive-group-uniformity-on-r`,
`ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`, and
`cex-k-topology-is-not-uniformizable`.

The seven newly material item repairs are:

1. `lem-symmetric-entourages-form-a-base` — old: the Statement supplied only a
   symmetric subentourage, while downstream Facts cited it for symmetric
   square roots and arbitrary finite composites. New: for every integer
   $n\ge1$ it supplies symmetric $D$ with $D^{\circ n}\subseteq E$, proved by
   a finite chain of square roots and diagonal padding. Class (b), supported by
   Wodzicki Exercise 23. Because both Statement and proof were materially
   expanded, Statement provenance changed from `literature-derived` /
   `exact-source` to `ai-altered` / `semantic-source`; proof remains
   `ai-altered`.
2. `lem-convergent-filters-are-cauchy` — old: L2 and step 1.1 obtained a
   symmetric square root from targets that did not state one. New: L2 and
   `deps` cite the strengthened symmetric-entourage lemma. Class (b).
3. `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` — old: the
   Statement began only with an already-Cauchy filter, while downstream items
   cited it for principal filters and step 2.1 used unstated finite-composite
   control. New: the Statement and step 4.1 prove that every principal filter
   is Cauchy, and L3 states the finite-composite clause used in the proof.
   Class (b), supported by Wodzicki 6.1.4–6.1.6 and the displayed
   $\{x\}\times\{x\}\subseteq\Delta_X\subseteq E$ derivation. Statement
   provenance changed to `ai-altered` / `semantic-source`; proof remains
   `ai-altered`.
4. `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity` —
   old: the proof never showed that the minimal-filter carrier, and hence its
   hatted entourage base, was nonempty. New: L1 cites the principal-filter
   clause, step 1.1 obtains a point from the proper-filter convention and a
   minimal point filter, and step 2.1 records that every hatted entourage
   contains the nonempty diagonal. Class (b), with the elementary proper-filter
   derivation recorded in proposal C.
5. `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space` — old: the
   later completion proof used that every member of $\eta(x)$ contains $x$,
   but this Statement did not state it. New: the Statement and step 1.1 state
   and prove the clause from
   $m(\mathcal P_x)\subseteq\mathcal P_x$. Class (b), supported by Wodzicki
   6.1.4–6.1.6.
6. `thm-hausdorff-completion-of-a-uniform-space` — old: L2 cited only uniform
   continuity and density before step 2.1 used the member-contains-the-point
   clause. New: L2 quotes that clause exactly. Class (b). The off-target
   Cambridge landing-page reference was also removed in favour of the already
   verified Wodzicki and Encyclopedia references.
7. `thm-complete-and-totally-bounded-uniform-spaces-are-compact` — old: L3 and
   `deps` redundantly cited the full-Choice ultrafilter-extension theorem even
   though the direct compactness characterization already assumes exactly the
   ultrafilter lemma. New: the full-Choice target and its contract entry are
   removed; L3 cites only the direct characterization. Class (b). Its newly
   concurred Statement provenance is `ai-altered`; its already
   `ai-generated` proof label remains unchanged as required.

All seven newly material items lost their stale `verification.judge` and
obsolete `verification.audited` blocks. No `verification.verified` block was
written. The proof-contract file now records the six-step symmetric-root
derivation, the principal-filter and nonempty-carrier steps, the corrected
compactness citation, and the strengthened exact source clauses in every
affected consumer.

The amended source cleanup also removed the Cambridge completion landing page
from `thm-uniform-completion-universal-property-and-uniqueness`; replaced the
blanket Wodzicki reference by the verified BIU/Rosendal sources on
`def-topological-group`, `lem-topological-group-translations-and-inversion`,
`def-left-and-right-uniformities-of-a-topological-group`,
`thm-topological-group-uniformities-induce-the-given-topology`,
`def-upper-and-roelcke-uniformities-of-a-topological-group`,
`cor-topological-groups-are-completely-regular`, and
`ex-additive-group-uniformity-on-r`; replaced it by BIU on
`def-pointwise-and-uniform-convergence-uniformities` and
`lem-uniform-convergence-uniformity-is-finer-than-pointwise`; replaced it by
the ETSU K-topology notes and Vienna uniformization source on
`cex-k-topology-is-not-uniformizable`; and removed it from the two honestly
unsourced, Alpha-concurred canonical constructions
`ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` and
`ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`.

Exact recovery write scope: 32 item ids — the 21 provenance ids above, the six
additional material ids `lem-symmetric-entourages-form-a-base`,
`lem-convergent-filters-are-cauchy`,
`lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
`lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
`lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`, and
`thm-hausdorff-completion-of-a-uniform-space`, plus the five metadata-only ids
`def-topological-group`, `lem-topological-group-translations-and-inversion`,
`def-pointwise-and-uniform-convergence-uniformities`,
`lem-uniform-convergence-uniformity-is-finer-than-pointwise`, and
`thm-uniform-completion-universal-property-and-uniqueness`. Page ids edited:
none. No touch snapshot was written.

Recovery validation: reflow left all 28 touched proof-bearing items unchanged;
precheck passed 28/28; strict proof-contract validation passed 45/45 with zero
errors and warnings; finite smoke and risk routing passed; ledger-aware content
policy passed 61/61 with only the two expected Alpha-concurred unsourced
warnings; rendercheck, prosecheck, citecheck, depcheck with pending-audit
allowance, fwdcheck, extcheck, depsource, and batch audit-manifest generation
all exited zero. JSON and all 61 JSONL rows parse. The regenerated batch
relationship manifest has 104 published-backward and 160 same-batch edges.
