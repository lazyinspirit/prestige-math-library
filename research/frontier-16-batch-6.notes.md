# Frontier 16, batch 6 — Beta-6 scaffold notes

## Scope and owned artifacts

This batch owns `the-seifert-van-kampen-theorem` at order 297, its companion at order 298, `classification-of-covering-spaces` at order 299, and its companion at order 300. The manifest contains 15 A-page items and 5 companion items for the van Kampen pair, followed by 13 A-page items and 3 companion items for covering classification. Neither A page approaches the 60-item ceiling, so no split is proposed.

The four batch artifacts are:

- `research/frontier-16-batch-6.pages.json`
- `research/frontier-16-batch-6.coverage.json`
- `research/frontier-16-batch-6.proof-contracts.json`
- `research/frontier-16-batch-6.notes.md`

The coverage file is separately required by the dispatch and `QUALITY-CONTROLS.md`, despite the dispatch's earlier three-file list omitting it.

## Design-versus-spec drift

Recommendation: let the stage-1 drift unit adjudicate the order discrepancy and keep this batch on the current spec. The design headings say:

```text
## HT-5. The Seifert–van Kampen Theorem  (order 237, topology)
## HT-6. Classification of Covering Spaces  (order 239, topology)
```

The current `research/plan-spec.json` and this dispatch put the A pages at 297 and 299. The declared prerequisite page ids agree between design and spec. I did not alter either source of truth.

## Applyable amendments to `research/plan-topology-set-theory-track.md`

### Amendment HT5-1 — state a group pushout, not the library's monomorphic amalgamation

Recommendation: approve. The intersection-induced maps need not be injective. The published `def-free-product-with-amalgamation` reserves that construction for monomorphisms, while `def-pushout-of-group-homomorphisms` explicitly allows arbitrary maps.

Exact old text:

```text
the induced map
$\pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V) \to \pi_1(X)$ (well-definedness #18,
via FG-2's pushout property) is an isomorphism;
```

Exact new text:

```text
the canonical map from the group pushout of
$\pi_1(U) \leftarrow \pi_1(U \cap V) \rightarrow \pi_1(V)$ to $\pi_1(X)$
is an isomorphism (well-definedness #18, via the arbitrary-map pushout property
of `def-pushout-of-group-homomorphisms`); use free-product-with-amalgamation
notation only in a corollary whose two edge maps are known to be monomorphisms;
```

If declined, the main theorem would silently claim injectivity hypotheses that topology does not supply and would contradict the published algebra convention.

### Amendment HT5-2 — add the missing wedge definition and replace the nonexistent published supplier

Recommendation: approve. `def-adjunction-cone-suspension` defines adjunction spaces, cones, suspensions, and mapping cones; it does not define a wedge of pointed spaces.

Exact old text:

```text
the wedge $X \vee Y$ of pointed spaces (via the published
`def-adjunction-cone-suspension` / coproduct-quotient machinery)
```

Exact new text:

```text
the wedge of a family of pointed spaces, defined in
`def-wedge-of-pointed-spaces` as the quotient of their tagged disjoint union
that identifies exactly the basepoints; its construction cites the published
coproduct and quotient machinery
```

If declined, the finite-circle-wedge theorem would use an undefined object or inaccurately cite a definition that never states it.

### Amendment HT5-3 — build the product theorem locally before computing the torus group

Recommendation: approve. No published item states that the fundamental group preserves binary products. The design's claimed HT-2 supplier does not exist on disk.

Exact old text:

```text
$\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$ via the PUBLISHED
product identification of the torus (191 B has the example; the A-page route
is $\pi_1$-of-a-product from HT-2 applied to $(\mathbb{R}/\mathbb{Z})^2
```

Exact new text:

```text
`thm-fundamental-group-of-a-product` is proved on this A page from componentwise
loops and homotopies. Define `def-two-dimensional-torus` as
$T^2=(\mathbb{R}/\mathbb{Z})^2$, then derive
`cor-fundamental-group-of-two-dimensional-torus` from the product theorem and
the two published degree isomorphisms. Do not cite the B-page square-quotient
example as a load-bearing dependency.
```

If declined, the torus calculation has no legal load-bearing supplier and would either contain a silent theorem or cite a B-page leaf.

### Amendment HT5-4 — retain May's one-simply-connected-set quotient corollary

Recommendation: approve. Insert after the simply-connected-overlap corollary:

```text
`cor-van-kampen-one-simply-connected-set`: if $X=U\cup V$ satisfies the
two-set van Kampen hypotheses and $V$ is simply connected, then
$\pi_1(U)\to\pi_1(X)$ is surjective and its kernel is the normal closure of the
image of $\pi_1(U\cap V)$.
```

This is a named proposition in May §8, has a short proof from the pushout quotient, and is distinct from the free-product corollary. If declined, a standard harvested consequence with a closed local proof would be omitted.

### Amendment HT5-5 — make the companion's basepoint witness self-contained

Recommendation: approve. The exact general change-of-basepoint result exists as published `ex-change-of-basepoint-isomorphism-for-fundamental-groups`, but it is homed on `categories-functors-and-natural-transformations-examples` at order 360. The B-leaf rule prevents using it as a dependency at order 298, and a re-home would need a separate owner receipt.

Exact old text:

```text
B: the two-isomorphisms change-of-basepoint witness owed by HT-2 (#16), now
buildable in $F(2)$;
```

Exact new text:

```text
B: `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge` proves the
needed conjugation map inline from path concatenation and then uses $F(2)$
normal form to distinguish two explicit connecting paths; it does not cite or
duplicate the later B-page item as a new general theorem.
```

If declined, this promised witness is either missing or violates the B-leaf dependency rule.

### Amendment HT6-1 — remove definitions and universal-cover results already published on the prerequisite page

Recommendation: approve. `covering-spaces-and-lifting` already publishes maps and isomorphisms of coverings, deck transformations and the deck group, semilocal simple connectedness, universal covering spaces, the necessity theorem, the path-class basis, the covering verification, existence, uniqueness, and the universal deck-group theorem.

Exact old text:

```text
DEFS: morphism and isomorphism of coverings over a fixed base; **semilocally
simply connected** (discharges ‡ `rem-semilocal-simple-connectedness`); the
**universal cover** (definition by the simply-connected property, then
existence as the theorem); **deck transformation** and the deck group; regular
(normal) covering.
```

Exact new text:

```text
ALREADY PUBLISHED ON `covering-spaces-and-lifting`:
`def-map-and-isomorphism-of-covering-spaces`,
`def-semilocally-simply-connected-space`, `def-universal-covering-space`, and
`def-deck-transformation-and-deck-group`, together with universal-cover
existence and necessity. NEW HERE: `def-regular-covering`.
```

If declined, immutable published definitions and completed proofs would be minted a second time under conflicting ids.

### Amendment HT6-2 — replace the stale universal-cover construction route with subgroup quotients

Recommendation: approve. The difficult basis and evenly-covered checks for the universal path-class model are already published as `def-path-class-model-for-a-universal-cover` and `lem-path-class-projection-is-a-covering-map`.

Exact old text:

```text
the **existence of the universal cover** for a connected, locally path-connected,
semilocally simply connected base (landmark; the path-class construction,
well-definedness #19);
```

Exact new text:

```text
use the published universal cover and its deck action to prove
`lem-subgroup-quotient-of-universal-cover`: every subgroup $H$ acts on the
universal cover with a connected quotient covering whose induced subgroup is
exactly $H$. The local disjoint-sheet and closed-lift checks are explicit.
```

If declined, classification would redo the longest proof on its prerequisite page instead of building the genuinely new subgroup-realization step.

### Amendment HT6-3 — correct the stable interface ids to immutable published names

Recommendation: approve. The stable-interface paragraph names `def-universal-cover` and `thm-existence-of-the-universal-cover`, but the immutable published ids are `def-universal-covering-space` and `thm-universal-cover-existence`.

Exact old text:

```text
Use `def-universal-cover`,
`def-deck-transformation-and-deck-group` and `def-regular-covering`;
`thm-existence-of-the-universal-cover` keeps the connected, locally
path-connected and semilocally simply connected hypotheses;
```

Exact new text:

```text
Reuse published `def-universal-covering-space`,
`def-deck-transformation-and-deck-group`, and `thm-universal-cover-existence`;
add `def-regular-covering` here. The published existence theorem keeps the
nonempty, path-connected, locally path-connected, and semilocally simply
connected hypotheses.
```

If declined, later consumers will cite nonexistent ids even though the exact results are already published.

### Amendment HT6-4 — use the published traversal-order deck convention

Recommendation: approve. The current `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` says that under traversal-order loop multiplication the endpoint assignment itself is an isomorphism and **no path reversal is inserted**. The scaffold follows that exact convention in subgroup actions and the normalizer calculation.

Exact old expectation from the current plan strategy for the published theorem:

```text
with the inverse-path convention
```

Exact new expectation:

```text
with the published traversal-order right-monodromy convention; the loop-class
assignment to deck transformations is multiplicative as written, and no path
reversal is inserted
```

If declined, the subgroup quotient and normalizer homomorphisms would be composed in the wrong order relative to their load-bearing dependency.

### Amendment HT6-5 — update the integer-subgroup route

Recommendation: approve. The exact A-page supplier now exists and is published.

Exact old text:

```text
check on disk which A-page item carries
"subgroups of $\mathbb{Z}$ are $n\mathbb{Z}$", since the scaffold placed one
copy on a B page — if only the B copy exists, the fact is re-proved here
citing the division algorithm `thm-division-algorithm-in-z`, with an
agreement remark
```

Exact new text:

```text
cite published A-page `lem-subgroups-of-z-are-cyclic`, faithfully shortened as
"every subgroup of $(\mathbb Z,+)$ is $n\mathbb Z$ for a unique nonnegative
integer $n$". Do not reproduce the legacy applied-embedding notation from that
item in new content.
```

If declined, the classification would unnecessarily reprove an exact eligible result or reach for its B-page predecessor.

## Planned page summaries for Step 5

### `the-seifert-van-kampen-theorem`

The fundamental group turns based continuous maps into homomorphisms, and the quotient-circle degree gives the first nontrivial calculation. Group pushouts combine two homomorphisms with a common source without assuming they are injective, while free products describe the special case in which the common group is trivial. Compactness of the interval supplies finite subdivisions of loops and homotopies subordinate to open covers.

Loop subdivision first proves that two path-connected open sets generate the fundamental group of their union. A subordinate grid then makes factorization independent of choices and yields the Seifert–van Kampen pushout isomorphism. Its corollaries treat simply connected overlaps and one simply connected member. Explicit quotient neighbourhoods compute finite wedges of circles, componentwise loops compute products, and these results give the fundamental groups of higher-dimensional spheres and the two-dimensional torus.

### `classification-of-covering-spaces`

Covering-space lifting supplies unique path and map lifts, injects fundamental groups, and equips each fibre with a right monodromy action. The prerequisite development also constructs universal covers for nonempty path-connected, locally path-connected, semilocally simply connected bases and identifies their deck groups with the base fundamental group under traversal-order multiplication. Subgroup index already measures the number of sheets.

The lifting criterion first characterizes morphisms between connected coverings. Quotients of a universal cover then realize every subgroup, while changing the point over the basepoint produces conjugation, giving the based and unbased classification theorems. Regular coverings are defined through transitivity of deck transformations on fibres; basepoint conjugacy identifies regularity with normality, and the deck group becomes a normalizer quotient. The circle specialization classifies connected covers by the subgroups $n\mathbb Z$ and computes their regularity and deck groups.

## Per-page item lists

### `the-seifert-van-kampen-theorem` — 15 items

1. `lem-open-cover-loop-generation` — lemma — Loops over a two-set path-connected open cover factor through the covering sets
2. `lem-antipodal-sphere-cover` — lemma — Antipodal complements cover $S^n$ by simply connected sets with path-connected overlap for $n\ge2$
3. `thm-higher-dimensional-spheres-are-simply-connected` — theorem — $S^n$ is simply connected for every $n\ge2$
4. `lem-van-kampen-homotopy-grid` — lemma — A path homotopy over a two-set open cover admits a finite subordinate grid
5. `lem-van-kampen-factorization-invariance` — lemma — Homotopic-loop factorizations have the same value in the group pushout
6. `thm-seifert-van-kampen` — theorem — Seifert–van Kampen identifies the fundamental group with a group pushout
7. `cor-seifert-van-kampen-simply-connected-overlap` — corollary — A simply connected overlap turns the van Kampen pushout into a free product
8. `cor-van-kampen-one-simply-connected-set` — corollary — If one set is simply connected, the other fundamental group surjects with overlap-generated kernel
9. `def-wedge-of-pointed-spaces` — definition — The wedge of a family of pointed spaces
10. `lem-finite-circle-wedge-open-cover` — lemma — Finite wedges of quotient circles have van Kampen covers at the wedge point
11. `thm-fundamental-group-of-finite-wedge-of-circles` — theorem — The fundamental group of a finite wedge of circles is free of that rank
12. `cor-fundamental-group-of-two-circle-wedge` — corollary — $\pi_1(S^1\vee S^1)$ is the free group on two generators
13. `thm-fundamental-group-of-a-product` — theorem — $\pi_1(X\times Y)\cong\pi_1(X)\times\pi_1(Y)$
14. `def-two-dimensional-torus` — definition — The two-dimensional torus $T^2=(\mathbb R/\mathbb Z)^2$
15. `cor-fundamental-group-of-two-dimensional-torus` — corollary — $\pi_1(T^2)\cong\mathbb Z\times\mathbb Z$

### `the-seifert-van-kampen-theorem-examples` — 5 items

1. `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge` — example — Two paths can induce distinct change-of-basepoint isomorphisms on $S^1\vee S^1$
2. `ex-fundamental-group-of-the-punctured-plane` — example — $\pi_1(\mathbb R^2\setminus\{0\})\cong\mathbb Z$
3. `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere` — example — Once- and twice-punctured two-sphere groups
4. `fs-every-fundamental-group-is-abelian` — false statement — Every fundamental group is abelian
5. `fs-van-kampen-with-disconnected-intersection` — false statement — The two-set conclusion needs no path-connectedness hypothesis on the overlap

### `classification-of-covering-spaces` — 13 items

1. `prop-covering-morphism-subgroup-criterion` — proposition — A based morphism between connected coverings exists exactly when the induced subgroups are included
2. `cor-based-connected-coverings-isomorphic-iff-equal-subgroups` — corollary — Based connected coverings are isomorphic exactly when their induced subgroups are equal
3. `lem-subgroup-quotient-of-universal-cover` — lemma — Every subgroup acts on the universal cover with a connected quotient covering that realizes it
4. `lem-covering-basepoint-change-conjugates-subgroup` — lemma — Changing the point over a fixed basepoint conjugates the induced covering subgroup
5. `thm-classification-of-connected-covering-spaces` — theorem — Connected covering spaces are classified by conjugacy classes of fundamental-group subgroups
6. `def-regular-covering` — definition — Regular coverings
7. `lem-deck-transformations-correspond-to-normalizer-cosets` — lemma — Deck transformations correspond to cosets in the subgroup normalizer
8. `thm-deck-group-as-normalizer-quotient` — theorem — $\operatorname{Deck}(E/B)\cong N_G(H)/H$
9. `thm-regular-covering-characterizations` — theorem — Regularity, subgroup normality, and deck transitivity are equivalent
10. `cor-deck-group-of-a-regular-covering` — corollary — A regular connected covering has deck group $G/H$
11. `cor-real-line-is-universal-cover-of-circle` — corollary — $\mathbb R\to\mathbb R/\mathbb Z$ is a universal covering
12. `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` — corollary — Connected circle coverings are classified by $n\mathbb Z$, $n\ge0$
13. `cor-every-connected-covering-of-circle-is-regular` — corollary — Every connected covering of the circle is regular

### `classification-of-covering-spaces-examples` — 3 items

1. `ex-circle-covering-towers-follow-divisibility` — example — Maps between connected circle coverings are governed by divisibility
2. `ex-deck-groups-of-connected-circle-coverings` — example — The deck group of the $n$-sheeted connected circle cover is $\mathbb Z/n\mathbb Z$
3. `ex-regular-and-nonregular-three-sheeted-wedge-coverings` — example — The two-circle wedge has regular and nonregular connected three-sheeted coverings

## Per-pair richness report

### Seifert–van Kampen pair

The long proof of `thm-seifert-van-kampen` is decomposed into `lem-open-cover-loop-generation`, `lem-van-kampen-homotopy-grid`, and `lem-van-kampen-factorization-invariance`. The higher-sphere corollary receives the separate stereographic and overlap lemma `lem-antipodal-sphere-cover`. The finite-wedge theorem receives `lem-finite-circle-wedge-open-cover`, which performs the explicit saturated-open-set and deformation-retraction work at the wedge point.

The corollary pass added `cor-seifert-van-kampen-simply-connected-overlap`, the source-harvested `cor-van-kampen-one-simply-connected-set`, `cor-fundamental-group-of-two-circle-wedge`, and `cor-fundamental-group-of-two-dimensional-torus`. I performed both the decomposition and corollary passes. No split is needed.

### Covering-classification pair

The classification proof is decomposed into the morphism criterion, based-isomorphism corollary, subgroup quotient of the universal cover, and basepoint-conjugacy lemma before the main theorem. The deck-group proof is decomposed through `lem-deck-transformations-correspond-to-normalizer-cosets` before the first-isomorphism-theorem quotient. The regularity theorem remains separate from that quotient because it proves a three-way equivalence rather than a formula.

The corollary pass added the regular-cover deck quotient, the universal real-line cover, the nonnegative-integer classification of connected circle covers, and regularity of every connected circle cover. The companion turns subgroup inclusion into divisibility, computes circle-cover deck groups, and supplies the promised regular/nonregular contrast at equal sheet number. I performed both passes. No split is needed.

## Component provenance and Step-5 source plan

Abbreviations below are `LD` = `literature-derived`, `AA` = `ai-altered`, `AG` = `ai-generated`, and `NA` = `not-applicable`. Proof labels describe the planned local proof, not statement eligibility.

### Seifert–van Kampen pair

| item | statement / proof | rationale and Step-5 reference URL |
|---|---|---|
| `lem-open-cover-loop-generation` | LD / AA | Hatcher Lemma 1.15; proof adapted to two sets and the library's interval machinery. Hatcher URL. |
| `lem-antipodal-sphere-cover` | AA / AA | Hatcher Proposition 1.14's stereographic cover, materially repackaged as a reusable geometry lemma. Hatcher URL. |
| `thm-higher-dimensional-spheres-are-simply-connected` | LD / AA | Hatcher Proposition 1.14; local proof uses the separated generation lemma. Hatcher URL. |
| `lem-van-kampen-homotopy-grid` | AA / AA | Focused extraction from the Hatcher/May subdivision proof, with prescribed boundary refinement added. Hatcher and May URLs. |
| `lem-van-kampen-factorization-invariance` | AA / AA | Focused extraction of Hatcher's factorization-move proof, translated to the published pushout convention. Hatcher URL. |
| `thm-seifert-van-kampen` | LD / AA | Hatcher Theorem 1.20 and May §7; statement specialized to the two-set arbitrary-map group pushout. Hatcher and May URLs. |
| `cor-seifert-van-kampen-simply-connected-overlap` | LD / AA | Standard Hatcher/May consequence; local universal-property proof. Hatcher and May URLs. |
| `cor-van-kampen-one-simply-connected-set` | LD / AA | May §8 named proposition; proof adapted to the library's normal-closure quotient. May URL. |
| `def-wedge-of-pointed-spaces` | LD / NA | Hatcher Example 1.21 and May's wedge definition-in-use; quotient phrasing follows the published topology machinery. Hatcher and May URLs. |
| `lem-finite-circle-wedge-open-cover` | AA / AA | Hatcher Example 1.21 and May's wedge proposition, restricted to concrete finite quotient circles and expanded at the wedge point. Hatcher and May URLs. |
| `thm-fundamental-group-of-finite-wedge-of-circles` | LD / AA | Hatcher Example 1.21 and May's corollary; proof made inductive to cover rank zero and one explicitly. Hatcher and May URLs. |
| `cor-fundamental-group-of-two-circle-wedge` | LD / AA | Explicit source specialization in Hatcher Example 1.21. Hatcher URL. |
| `thm-fundamental-group-of-a-product` | LD / AA | May's product lemma; coordinate proof adapted to published product and loop conventions. May URL. |
| `def-two-dimensional-torus` | LD / NA | May §8 uses $T^2=S^1\times S^1$; the library uses its quotient-circle model. May URL. |
| `cor-fundamental-group-of-two-dimensional-torus` | LD / AA | May §8 product observation; local proof composes published degree isomorphisms. May URL. |
| `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge` | AG / AG | Locally chosen checkable witness. Step 5 must include `generation: {role: example}`. Truth-risk check: reduce the two images in $F(a,b)$ and verify they are distinct; no item may depend on this construction. |
| `ex-fundamental-group-of-the-punctured-plane` | LD / AA | Classical deformation-retract computation appearing in Hatcher's chapter; proof uses published radial retraction and circle dictionary. Hatcher URL. |
| `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere` | AA / AA | Classical stereographic consequences, combined into one bounded example and adapted to the preceding punctured-plane computation. Hatcher URL. |
| `fs-every-fundamental-group-is-abelian` | LD / AA | Hatcher's introduction and wedge computation supply the standard counterexample; local refutation uses published normal form. Hatcher URL. |
| `fs-van-kampen-with-disconnected-intersection` | LD / AA | Hatcher's explicit two-open-arc counterexample; quotient intervals make every claim checkable. Hatcher URL. |

### Covering-classification pair

| item | statement / proof | rationale and Step-5 reference URL |
|---|---|---|
| `prop-covering-morphism-subgroup-criterion` | LD / AA | May Chapter 3 §7 and Hatcher Proposition 1.37 route; includes May's lemma that the morphism is a covering. Hatcher and May URLs. |
| `cor-based-connected-coverings-isomorphic-iff-equal-subgroups` | LD / AA | Hatcher Proposition 1.37; proof uses two lifts and their unique composites. Hatcher URL. |
| `lem-subgroup-quotient-of-universal-cover` | LD / AA | Hatcher Proposition 1.36 and May Chapter 3 §8; quotient route reuses the published universal cover. Hatcher and May URLs. |
| `lem-covering-basepoint-change-conjugates-subgroup` | LD / AA | Hatcher proof of Theorem 1.38; traversal-order conjugation direction checked directly. Hatcher URL. |
| `thm-classification-of-connected-covering-spaces` | LD / AA | Hatcher Theorem 1.38 and May Chapter 3 §7. Hatcher and May URLs. |
| `def-regular-covering` | LD / NA | Hatcher's normal/regular definition and May's regular-cover convention. Hatcher and May URLs. |
| `lem-deck-transformations-correspond-to-normalizer-cosets` | AA / AA | Hatcher Proposition 1.39 proof isolated for decomposition; right-coset direction follows the published right monodromy action. Hatcher URL. |
| `thm-deck-group-as-normalizer-quotient` | LD / AA | Hatcher Proposition 1.39(b) and May Chapter 3 §7's automorphism-group corollary. Hatcher and May URLs. |
| `thm-regular-covering-characterizations` | LD / AA | Hatcher Proposition 1.39(a) and May's regular-cover definition, with deck transitivity stated explicitly. Hatcher and May URLs. |
| `cor-deck-group-of-a-regular-covering` | LD / AA | Immediate clause of Hatcher Proposition 1.39. Hatcher URL. |
| `cor-real-line-is-universal-cover-of-circle` | LD / AA | Hatcher and May universal-cover constructions; proof reuses the published quotient covering. Hatcher and May URLs. |
| `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` | LD / AA | Hatcher's circle-cover classification discussion and the published subgroup theorem. Hatcher URL. |
| `cor-every-connected-covering-of-circle-is-regular` | LD / AA | Hatcher's normal circle-cover examples; local proof uses abelianness. Hatcher URL. |
| `ex-circle-covering-towers-follow-divisibility` | AA / AA | Specialization of May's covering-morphism/subgroup-inclusion theorem to the circle, materially reformulated with the library's unique nonnegative subgroup generators. May URL. |
| `ex-deck-groups-of-connected-circle-coverings` | LD / AA | Hatcher's deck-transformation discussion and Proposition 1.39. Hatcher URL. |
| `ex-regular-and-nonregular-three-sheeted-wedge-coverings` | AG / AG | Locally chosen finite permutation witnesses. Step 5 must include `generation: {role: example}`. Truth-risk check: compute the two surjections, the stabilizer preimage, its conjugate, both indices, and normality directly; no item may depend on this construction. |

Exact source URLs for Step 5:

- Hatcher: https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf
- May: https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf

## Source ledger and convention disagreements

### Hatcher

Allen Hatcher, *Algebraic Topology*, official complete edition: https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf

Read Proposition 1.14 and Lemma 1.15 on printed pp. 35–36; Section 1.2, printed pp. 43–55; and the classification/deck portion of Section 1.3, printed pp. 63–72. These ranges support loop generation, higher-sphere simple connectedness, the factorization proof, wedges, the disconnected-overlap witness, subgroup realization, based and unbased classification, regular coverings, the normalizer quotient, and circle-cover examples.

Convention disagreements: Hatcher writes the general many-set theorem as a free product modulo the normal closure of intersection relations. The library expresses the two-set statement as the pushout of arbitrary homomorphisms and reserves “free product with amalgamation” for monomorphisms. Hatcher calls regular coverings “normal” and uses geometric circles in examples; the scaffold says “regular” and uses $\mathbb R/\mathbb Z$. Hatcher's printed convention must also be translated to the library's traversal-order right monodromy, whose published deck theorem inserts no reversal.

### May

J. Peter May, *A Concise Course in Algebraic Topology*: https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf

Read Chapter 2 §§7–8, printed pp. 17–20, and the relevant covering-classification statements in Chapter 3 §§5–8, printed pp. 25–34. The van Kampen range independently supplies groupoid and group colimit forms, the finite-cover step, wedge and product results, and the one-simply-connected-set quotient. The covering range independently supplies morphism criteria, subgroup and group-set classifications, automorphism groups, universal-cover construction, and orbit quotients.

Convention disagreement: May's preferred van Kampen theorem is groupoid/categorical and his covering classification is formulated through orbit categories. Those category interfaces occur after these pages in plan order, so the scaffold uses the equivalent group pushout and connected-subgroup forms that close from earlier dependencies.

For classification, read Chapter 3 §§5–8, printed pp. 25–34: the groupoid prototype, morphism and isomorphism criteria, fibre-action descriptions, automorphism-group corollary, topological classification, universal-cover construction, and subgroup orbit spaces. The complete disconnected group-set equivalence was harvested but not scaffolded because its category interfaces are ordered after this pair.

Both official full texts were opened successfully through the web research channel. The coverage URLs are the exact official copies already full-body fetched and durably stamped in completed `frontier-15-batch-5`; the stamps were reused byte-for-byte rather than invented. Running `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-6.coverage.json --stamp` now reports `4/4 source(s) fetch-verified (0 newly stamped)`.

## Published dependencies opened and closure

Every direct external dependency in the final manifest was opened from `items/` and its actual Definition, Statement, or Example was checked. All are `status: published`; none has `provenance.statement: ai-generated`; none is legacy-unclassified. Every dependency is either earlier on its page, on the other earlier page of this batch, or published on a page strictly below order 297. Three older dependencies are absent from the plan's item lists but are homed on published library pages: `thm-induction-principle` on `construction-of-the-natural-numbers` (order 6), `thm-int-comm-ring` on published early arithmetic pages including `divisibility-gcd-and-bezout` (order 26), and `def-rank-of-a-finite-rank-free-group` on `free-groups-and-presentations` (order 60).

The AI-altered load-bearing targets whose exact conventions mattered were source-checked rather than auto-trusted: `thm-lebesgue-number-lemma` against Hatcher's subdivision route; `def-path-connected`, `lem-punctured-rn-is-polygonally-connected`, and the Euclidean continuity items against the explicit stereographic formulas; `def-quotient-topology` and the wedge quotient against Hatcher/May; `lem-subgroups-of-z-are-cyclic` against its full on-disk proof and the classical least-positive-element argument; `thm-normal-subgroup-characterisations` and `cor-subgroups-of-abelian-groups-are-normal` against the normalizer sources; and `prop-integers-modulo-n-as-a-quotient-group` against its exact $n=0,1$ clauses. No published load-bearing falsehood was found.

The proof-contract source clauses were checked mechanically against all 67 citations to already-published items: every recorded quote occurs in the exact cited section. Planned-to-planned citations carry the exact Statement sentence the Step-5 author must preserve.

## Forward references and cross-batch dependencies

No load-bearing forward reference remains. The full group-set/category-equivalence version of covering classification was not put on the spine because `def-category`, functor, and equivalence machinery is homed after order 299; it is recorded result-by-result as out of scope in coverage rather than smuggled into a proof.

This batch needs no item from another `frontier-16` batch, and the current manifests of the other batches declare no dependency on this batch. Within the batch, the classification companion legitimately cites `cor-fundamental-group-of-two-circle-wedge` from order 297. The unassigned future page `applications-of-the-fundamental-group` is expected to need `thm-higher-dimensional-spheres-are-simply-connected`, `thm-seifert-van-kampen`, `thm-classification-of-connected-covering-spaces`, and `thm-regular-covering-characterizations`. No reciprocal edge is needed.

## New-id search

I ran an exact fixed-string search for every proposed id across `items/` and `research/plan-spec.json` after finalizing the manifest. It checked 36 ids and found 0 pre-existing hits. The search deliberately excluded this batch manifest itself. No immutable id is re-used or re-homed.

## Findings for Step-3 Alpha, ordered by severity

1. **Approve the arbitrary-map pushout correction.** The design's amalgamation notation conflicts with the published monomorphism-only definition. Declining makes the main theorem misstated.
2. **Approve reuse of the published covering/universal-cover interfaces.** Rebuilding them here would duplicate immutable ids and redo completed proof machinery. Declining creates duplicate or nonexistent interfaces.
3. **Approve the local product theorem and torus definition.** The design's claimed published product theorem does not exist. Declining leaves the torus result without a legal proof.
4. **Approve the explicit wedge definition and wedge-point cover lemma.** The cited adjunction-space item does not define wedges. Declining leaves an undefined object and the classic wedge-point gap.
5. **Approve the published no-reversal monodromy convention.** Declining reverses multiplication in subgroup actions and the normalizer map relative to the actual dependency.
6. **Approve the harvested one-simply-connected-set corollary.** It is a named source result with a short closed proof. Declining makes the source harvest unnecessarily thin.
7. **Approve direct inline construction of the two-basepoint witness.** The general published item is a later B leaf and cannot be cited. Declining loses a promised example or forces an illegal dependency.
8. **Approve deferral of full disconnected-cover/category equivalence.** Its formal category interfaces are planned after order 299; connected classification remains complete and source-backed. Declining would require a forward load-bearing dependency or duplicate category definitions.
9. **Approve the official full-book URL substitutions used for durable fetch verification.** They are the same Hatcher and May editions and preserve every locator; completed-run stamps already bind their full bodies and hashes. Declining would restore unstamped URL variants without changing any mathematics.

## Gate and confidence statement

`content-policy.mjs --manifest-only` ran on the final manifest: 36 scoped items, 0 errors, 0 warnings. JSON parsing and proof-contract scope checks are clean: 33 proof-bearing items and 33 contracts, each with all eight boundary dispositions; all 67 published-source clauses in the contracts are exact section matches. `source-fetch-check` reports 4/4 verified sources. The coverage checklist reports 0 errors and two expected low-yield warnings, which correspond to explicitly resolved cell-complex, surface, category, and groupoid declines. `prosecheck --warnings` reports 0 errors and four count warnings, all from the four item-count headings required by this dispatch; it reports no positional contradiction. `git diff --check` is clean. `validate-plan.mjs` and `depsource.mjs` were not run against a spliced spec, because Step 4 has not occurred; I do not claim those gates passed.

Confidence is high on the mathematical statements, pushout convention, subgroup conjugacy direction, right-monodromy multiplication, source coverage, and boundary cases. I verified every direct published dependency's statement and provenance, but did not re-audit every published dependency proof. I did not verify the planned later differential-geometry consumers mentioned by the stale stable-interface prose because no current plan item cites those ids. All required source bodies carry current durable fetch stamps.

## Continuity checkpoint

- Current substage: Step 2 artifacts and all available pre-splice checks complete.
- Owned paths: `research/frontier-16-batch-6.pages.json`, `.coverage.json`, `.proof-contracts.json`, and `.notes.md`.
- Completed checks: all normative docs and exemplars read; both design sections checked against the spec; Hatcher and May harvested independently; every direct published dependency opened; new-id search clean; proof obligations and all boundary cases encoded; manifest-only content policy clean; source fetch check reports 4/4 verified; coverage, prose, JSON, exact-clause, and diff checks complete.
- Open constraint: none mathematical; authoritative plan validation waits for the Step-4 splice.
- Exact next action: Step-3 Alpha reads all four artifacts, adjudicates the nine findings, and verifies the two low-yield warning sets against the harvested source headings.
