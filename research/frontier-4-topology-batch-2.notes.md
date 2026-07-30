# frontier-4 topology batch 2 — research and splice notes

Pages scaffolded:

- `hereditary-and-productive-separation` (265, A) and
  `hereditary-and-productive-separation-examples` (266, B);
- `partitions-of-unity-and-paracompactness` (269, A) and
  `partitions-of-unity-and-paracompactness-examples` (270, B);
- `countability-axioms-and-cardinal-functions` (273, A) and
  `countability-axioms-and-cardinal-functions-examples` (274, B).

The final page objects are in
`research/frontier-4-topology-batch-2.pages.json`. They contain 107 new item
ids: 24 + 7, 25 + 7, and 35 + 9 items respectively. The A-page review ceiling
is 100 items, so none of these pages is near it. No B-page item is consumed
outside its own B page.

## 1. Splice and prose recommendations

Apply these recommendations one at a time. They are not edits to
`research/plan-spec.json`; the supplied JSON page objects already carry the
resulting prerequisites and items.

### Recommendation 1 — page 265 prerequisite

Keep `cardinal-arithmetic-and-cofinality` in the `requires` array of
`hereditary-and-productive-separation`. Jones's bound and the lower-limit-plane
argument use cardinal power sets and Cantor's inequality. The other requirements
are `hausdorff-via-the-diagonal`, `compactness`,
`ordinals-and-transfinite-recursion`, and `ordinal-arithmetic`.

### Recommendation 2 — page 269 seam

Keep `hereditary-and-productive-separation` in the `requires` array of
`partitions-of-unity-and-paracompactness`. Its negative product result uses the
normal lower-limit line and its nonnormal square from page 265. The seam is
deliberate and is the only planned-earlier dependency on the A page.

### Recommendation 3 — page 273 compactness prerequisite

Keep `compactness` in the `requires` array of
`countability-axioms-and-cardinal-functions`. It supplies the already-published
Lindelöf definition, one-point compactification, and compactness facts. Do not
mint a second definition of Lindelöfness on page 273.

### Recommendation 4 — page 273 separation prerequisite

Keep `separation-axioms` in the `requires` array of
`countability-axioms-and-cardinal-functions`. The omega-one examples use the
published order topology and its separation profile. This is separate from the
ordinal and cardinal prerequisites already named by the track.

### Recommendation 5 — page 265 track amendment

In `research/plan-topology-track.md`, amend the T7 audit to record that the
frontier-1 drop of “every regular space is normal” is now discharged. Page 265
reconstructs the deleted Tychonoff plank on the A page, proves it regular and
nonnormal, and uses it for both failure of hereditary normality and the
`fs-every-regular-space-is-normal` refutation. Also record that the
Sorgenfrey/lower-limit line is reconstructed locally because its published
treatment is on a B leaf.

### Recommendation 6 — page 269 track amendment

In the same T7 audit, replace the placeholder “paracompact Hausdorff implies
normal is homed on 269” with the actual proof architecture:

1. locally finite closure and union lemmas;
2. paracompact Hausdorff implies regular;
3. paracompact Hausdorff implies normal;
4. a double shrinking of a cover;
5. Urysohn functions followed by locally finite summation and normalization;
6. Ornstein's point-finite and locally finite stages for Stone's theorem.

Paracompactness does **not** include Hausdorffness in this library. Every result
that needs Hausdorffness states it.

### Recommendation 7 — page 273 track amendment

In T8a, replace the blanket claim that all five cardinal functions are minima.
The scaffold defines \(w,d,\chi,L\) by raw minima (with \(\chi(X)\) a
supremum of local characters) and \(c(X)\) as the supremum of cardinalities of
cellular families. Each of the five has its own well-definedness item.

The convention is deliberately **raw**, not \(\aleph_0\)-normalized. Thus an
infinite discrete space of size \(\kappa\) has
\(\chi(X)=1\) and \(w(X)=d(X)=L(X)=c(X)=\kappa\). Do not copy a source's
normalized assertion that every standard cardinal invariant of a metrizable
space is equal. The page proves the convention-safe equality \(d(X)=w(X)\).

### Recommendation 8 — staged published-claim decay at page 273

When page 273 publishes, enact the four already-staged amendments under
“Trigger: `countability-axioms-and-cardinal-functions`” in
`research/ts-d2-published-amendments.md`. The trigger's old order 213 is stale;
the current spec order is 273.

The exact replacement clauses should be order-relative:

- in `def-first-countable-top`, replace “has no item in this library” by
  “is not developed at this point in the reading order; see
  `def-second-countable-space` for the later definition”;
- in `def-dense-top`, replace the corresponding corpus-relative claim by
  “is not developed at this point in the reading order; see
  `def-separable-space` for the later definition”;
- in `ex-sorgenfrey-line`, replace “no item in this library defines it” by
  “it is not defined at this point in the reading order; see
  `def-separable-space` for the later definition”;
- in the summary of
  `library/topology/topological-spaces-and-continuity-examples.md`, make the
  same order-relative replacement and later pointer.

The first item must declare `def-second-countable-space` in `forward_refs`; the
other three must declare `def-separable-space` if their pointers are wikilinks.
Do not add ordinary `deps` edges from the earlier pages.

### Recommendation 9 — staged Stone remark amendment at page 269

When page 269 publishes, amend the Remarks of
`rem-stone-theorem-choice-strength`. Replace

> No part of this is proved here; no topology track exists at this point in the
> library, so even the statement of paracompactness is being borrowed.

by

> No part of the independence analysis is proved here. Paracompactness and the
> choice-based topological proof of Stone's theorem are not available at this
> point in the reading order; they are developed later in
> `thm-stone-metric-spaces-are-paracompact`.

Also change the later ledger pointer from the generic `rem-choice-ledger` to
`rem-paracompactness-choice-and-convention-ledger`. If these are wikilinks, add
both new page-269 ids to `forward_refs`; do not add ordinary dependencies. The
new page proves Stone under AC only and does not claim that AC is its exact
strength.

## 2. Exact A-page summary bodies

Each A-page summary must consist of exactly the following two nonempty prose
paragraphs. Each paragraph is under 150 words. B pages receive no authored
summary body.

### `hereditary-and-productive-separation`

This page studies which separation properties survive subspaces and products. It uses the published subspace and product machinery reached through `hausdorff-via-the-diagonal`, compact Hausdorff normality from `compactness`, ordinal order topologies and boundedness from the two ordinal prerequisites, and Cantor's cardinal inequality from `cardinal-arithmetic-and-cofinality`. Regular, normal, and completely regular follow the library convention of not including \(T_1\); \(T_3\), \(T_4\), Tychonoff, \(T_5\), and \(T_6\) add it explicitly.

It proves hereditary and productive results through complete regularity, identifies complete normality with hereditary normality, and derives the closed-hereditary and perfect-normal corollaries. The lower-limit line, Jones's cardinal obstruction, and its antidiagonal show that normality is not productive, while the deleted Tychonoff plank shows that normality is not hereditary and supplies a regular nonnormal space. The page ends with a preservation ledger separating positive theorems from the sharp failures.

### `partitions-of-unity-and-paracompactness`

This page develops paracompactness from open-cover refinements. It uses compactness for the finite case, the earlier separation-preservation page for the lower-limit product obstruction, and `urysohn-lemma-and-tietze` for the DC-sensitive construction of separating functions. Paracompactness itself does not include Hausdorffness; that hypothesis is stated separately wherever regularity, normality, shrinking, or partitions of unity require it.

It defines refinements, local finiteness, paracompactness, and subordinate partitions of unity; proves the locally finite closure and sum lemmas; and derives paracompact Hausdorff regularity and normality. A double shrinking, Urysohn functions, and normalization yield the partition-of-unity theorem and its converse. Ornstein's two-stage refinement argument yields Stone's theorem under choice. Closed heredity and compact examples are balanced by ordinal and lower-limit counterexamples to arbitrary heredity and productivity.

### `countability-axioms-and-cardinal-functions`

This page assembles the topology and set-theory prerequisites needed for countability axioms and cardinal functions. It reuses first countability and density from `subspaces-products-and-quotients`, Lindelöfness from `compactness`, ordinal topology and boundedness for the omega-one examples, separation axioms for their order-topological form, and cardinal arithmetic for cardinal-valued minima, suprema, and Cantor-cube estimates. Countable always means at most countable.

It defines second countability, separability, ccc, and the raw cardinal functions \(w\), \(d\), \(\chi\), \(L\), and \(c\), with a separate well-definedness result for each. It proves the standard implication and metric-equivalence theorems, hereditary and countable-product results, core inequalities, and \(d=w\) for metrizable spaces. A delta-system argument supplies ccc Cantor cubes, while lower-limit, discrete, compactification, ordinal, and large-cube witnesses separate the failed converses and preservation claims.

## 3. Pair 265/266 — hereditary and productive separation

### Source ledger

| Source | Planned use | Convention or access note |
|---|---|---|
| [J. P. May, *An Outline Summary of Basic Point Set Topology*](https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf) | Hereditary and productive \(T_0,T_1,T_2\), regularity, complete regularity; failures for normality | May builds \(T_1\) into “regular” and “normal”. The scaffold separates regular from \(T_3\), and normal from \(T_4\). |
| [HMC, *Topology Through Inquiry: Theorems*](https://math.hmc.edu/su/wp-content/uploads/sites/10/2025/01/topology-thms-all.pdf) | Product and subspace preservation, complete normality versus hereditary normality, deleted plank | Used as a theorem map, not as authority for the library's naming convention. |
| [Steen and Seebach, *Counterexamples in Topology*](https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf) | Tychonoff plank and deleted-plank witness | The scaffold proves only the separation and compactness profile it consumes. |
| [G. Gruenhage, *General Topology Course Notes*](https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf) | Jones's lemma and the lower-limit-plane antidiagonal argument | The published lower-limit examples are B-leaf material, so page 265 reconstructs the necessary A-page facts. |

### Long-proof decomposition

The page avoids burying several independent claims in omnibus theorems.
Heredity and productivity are first proved separately for the low separation
axioms, regularity, and complete regularity, then collected. Finite minima of
\([0,1]\)-valued functions are isolated because the published algebra theorem
only treats real functions on subsets of \(\mathbb R\), not functions on an
arbitrary topological domain.

The two negative results also have explicit load-bearing lemmas. Jones's
cardinality bound and the lower-limit-plane antidiagonal feed the failure of
productivity. Ordinal compactness, boundedness in \(\omega_1\), and positive
separation preservation feed the deleted-plank theorem and then failure of
heredity.

### Cheap-corollary pass

The positive heredity theorem immediately yields \(T_3\), Tychonoff, and
\(T_5\) clauses once their explicit \(T_1\) components are restored.
Closed-hereditary normality is retained separately because arbitrary hereditary
normality is false. Perfect-normal heredity is a corollary only under the
countable-choice cost already carried by the published theorem that perfectly
normal implies completely normal.

### Seam and scope decisions

The page restores the `fs-every-regular-space-is-normal` item dropped at
frontier-1. It does not duplicate Urysohn's lemma, Tietze extension, or
Stone–Čech material. The proof of lower-limit-square nonnormality locally
reconstructs \(\mathbb R\approx\mathcal P(\mathbb N)\), because the exact
published worked example is a B leaf and cannot be cited.

## 4. Pair 269/270 — partitions of unity and paracompactness

### Source ledger

| Source | Planned use | Convention or access note |
|---|---|---|
| [Dartmouth, *Point-Set Topology, Lecture 25*](https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf) | Shrinking, subordinate partitions, locally finite sums, normalization, and the paracompact Hausdorff characterization | The scaffold states Hausdorff separately rather than building it into “paracompact”. |
| [J. Robbin, *Partitions of Unity*](https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf) | Local finiteness, support, subordination, and the equivalence architecture | Used to cross-check definitions and proof order. |
| [UCR, *Smirnov Metrization Theorem notes*](https://math.ucr.edu/~res/math205A/smirnov.pdf) | Partition-of-unity applications and the later metrization seam | The present pair stops before metrization theorems. |
| [D. Ornstein, “A new proof of the paracompactness of metric spaces”](https://www.ams.org/proc/1969-021-02/S0002-9939-1969-0242120-3/S0002-9939-1969-0242120-3.pdf) | Ornstein's two-stage point-finite-to-locally-finite proof of Stone's theorem | Search extraction exposed the paper, but direct PDF retrieval returned HTTP 403 during this audit. Reacquire and compare the two lemma statements before final authoring. |
| [C. Good, I. J. Tree and W. S. Watson, “On Stone's theorem and the axiom of choice”](https://doi.org/10.1090/S0002-9939-98-04163-X) | Choice-strength guardrail | Cross-checked against an author-uploaded full text. It does not license an equivalence with AC. |

### Long-proof decomposition

The paracompact-normal proof does not depend circularly on a shrinking lemma.
It first proves regularity from paracompactness plus Hausdorffness, then proves
normality using a locally finite refinement and the closed-union lemma. The cover
shrinking theorem can therefore use regularity and two successive refinements.

The partition theorem is split into general algebra of continuous real-valued
maps on a space, continuity of locally finite sums, normalization, double
shrinking, and Urysohn functions. Stone's theorem is split into Ornstein's
point-finite stage and the locally finite refinement of that specifically
constructed cover. The second lemma intentionally does not claim that every
arbitrary point-finite metric cover admits the same transformation.

### Cheap-corollary pass

Compact spaces are paracompact by finite refinement, and compact Hausdorff
spaces therefore receive finite partitions by grouping a locally finite
partition over a finite subcover. Closed-subspace heredity is stated positively.
Countably compact plus paracompact Hausdorff implies compact, which supplies the
\(\omega_1\) nonheredity witness. Regular Lindelöf spaces are paracompact, and
the lower-limit line plus page 265 supplies failure of productivity.

### Choice and convention decisions

Paracompact Hausdorff regularity and normality are choice-free as scaffolded:
their proofs use the families of all eligible neighbourhoods instead of choosing
one neighbourhood at every point. The cover-shrinking theorem is the first
paracompactness result on the page to state AC.

The scaffold states AC and DC separately for subordinate partitions because the
published Urysohn lemma carries DC; it does not silently use an unproved
library-level implication AC \(\Rightarrow\) DC. Stone's theorem is proved
under AC. The countably compact and regular-Lindelöf results state their
countable-choice costs. A finite non-\(T_1\) compact space refutes “paracompact
implies normal” under the library's T1-free convention.

## 5. Pair 273/274 — countability axioms and cardinal functions

### Source ledger

| Source | Planned use | Convention or access note |
|---|---|---|
| [UCR, *General Topology Notes*](https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf) | Second countability, separability, Lindelöfness, metric equivalence, subspaces, products, and large Cantor cubes | Choice costs are made explicit in the scaffold even when the notes use ordinary ZFC silently. |
| [D. H. Fremlin, *Measure Theory*, Chapter 5A](https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf) | Raw cardinal functions and their basic inequalities; metric \(d=w\) | Primary convention source for the unnormalized values used here. |
| [Encyclopedia of Mathematics, “Character of a topological space”](https://encyclopediaofmath.org/wiki/Character_%28of_a_topological_space%29) | Local character and first countability | Cross-check for \(\chi(x,X)\) versus \(\chi(X)\). |
| [Encyclopedia of Mathematics, “Metric space”](https://encyclopediaofmath.org/wiki/Metric_space) | Metric countability and paracompactness facts | Its statement that cardinal invariants coincide uses a different normalization; the scaffold does not import that claim. |
| [nLab, “second-countable spaces are Lindelöf”](https://ncatlab.org/nlab/show/second-countable%2Bspaces%2Bare%2BLindel%C3%B6f) | Choice supplement for the second-countable implication | Used only to audit the \(\mathrm{AC}_\omega\) annotation. |

### Long-proof decomposition

Second countability, separability, and ccc are new definitions; first
countability, density, and Lindelöfness are transferred from published items.
The five cardinal functions have five separate well-definedness results. The
decreasing local-base lemma is proved directly by interiors and running finite
intersections, so it does not inherit the countable-choice cost of the published
sequence theorem.

The metric three-way equivalence is a single cycle reusing the two
second-countability implications. Cardinal inequalities are collected only
after well-definedness. The Cantor-cube separation is decomposed into the
uncountable delta-system lemma, the ccc theorem, and the coordinate-column
nonseparability bound.

### Cheap-corollary pass

The \(\aleph_0\)-threshold dictionary translates the raw cardinal functions
back to first countability, second countability, separability, Lindelöfness, and
ccc. Basis traces give hereditary second countability and the subspace
weight/character inequalities. Images of dense sets and pulled-back covers give
the continuous-image inequalities. Separable implies ccc without a new choice
principle by using the least point in a fixed enumeration of a countable dense
set.

### Counterexample allocation

The uncountable discrete space separates first from second countability. The
locally reconstructed lower-limit line separates separability from second
countability and supplies the nonproductive Lindelöf example. Its plane and
antidiagonal give nonhereditary separability. A one-point compactification gives
nonhereditary Lindelöfness. \(\omega_1\) supplies the first-countable,
countably-compact, nonseparable, non-Lindelöf profile. A Cantor cube indexed
strictly above \(2^{\aleph_0}\) gives ccc without separability and shows that
second countability is not arbitrarily productive.

## 6. Dependency, collision, and gate report

The six page objects were spliced into a scratch copy of
`research/plan-spec.json`; the canonical spec was not modified.

- `jq empty research/frontier-4-topology-batch-2.pages.json` — pass.
- `node tools/validate-plan.mjs <spliced-copy>` — pass: the merged 88 pages
  with item lists are acyclic and have no item-level cycles, unresolved ids,
  forward references, or B-page dependency violations. The emitted
  redundant-prerequisite warnings belong to pre-existing pages outside this
  batch.
- Exact-id search through `items/` and `research/plan-spec.json` — zero
  collisions among all 107 new ids.
- `node tools/depsource.mjs <spliced-copy> --json` — for these six pages:
  259 published dependency occurrences and 40 planned-earlier occurrences;
  zero draft-page, homeless, planned-later, or unresolved occurrences.
  The 40 planned-earlier occurrences are the intended A-to-B and page-265-to-269
  seams.

Of the 62 distinct external dependencies, two published items declare their own
later references: `def-axiom-of-choice` points to
`ex-russells-socks` and `rem-choice-strengths`, and
`thm-cantor-set-ternary-description` points to
`cex-cantor-point-that-is-not-an-endpoint`. Those later references occur in
non-load-bearing explanatory material; the definition and theorem clauses used
by this batch are proved without them. Authors should cite only the proved
clauses named in the strategies.

## 7. Residual authoring risks

1. **Ornstein comparison remains mandatory.** The direct AMS PDF was
   bot-blocked during this audit. The two-stage architecture is supported by
   search extraction and secondary notes, but the final proof author must compare
   the exact dyadic construction and especially the restricted second lemma
   against the primary paper.
2. **Stone's exact choice strength must not be overstated.** Page 269 proves the
   theorem under AC; the published independence remark says it is not a theorem
   of ZF + DC and is not known to be equivalent to AC.
3. **Raw cardinal conventions must remain visible.** Copying normalized formulas
   from a reference would make the discrete-space example and several displayed
   equalities false.
4. **The Jones reconstruction is intentional.** The local proof of
   \(\mathbb R\approx\mathcal P(\mathbb N)\) is needed because the otherwise
   exact library example is B-leaf locked; it should remain a proof step, not a
   new item.
5. **Choice assumptions are statement-level data.** In particular,
   partitions use AC + DC rather than an undeclared implication between them,
   and the lower-limit/ordinal countability results preserve their
   \(\mathrm{AC}_\omega\) annotations.
