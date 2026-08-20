# Frontier 16, batch 6 — Beta-6 scaffold notes

## Scope and owned artifacts

This batch owns `the-seifert-van-kampen-theorem` at order 297, its companion at order 298, `classification-of-covering-spaces` at order 299, and its companion at order 300. The manifest contains 15 A-page items and 5 companion items for the van Kampen pair, followed by 16 A-page items and 3 companion items for covering classification. Neither A page approaches the 60-item ceiling, so no split is proposed.

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

### Amendment HT6-6 — retain the compact local-homeomorphism criterion harvested from May

Recommendation: approve. May Chapter 3, Problem 4 supplies a useful positive companion to the already-published counterexample showing that a surjective local homeomorphism need not be a covering. Add `def-local-homeomorphism`, `lem-compact-local-homeomorphism-surjective-with-finite-fibres`, and `prop-compact-local-homeomorphism-is-finite-covering` before the subgroup classification. The lemma separates the open-and-closed image and compact-discrete fibre argument; the proposition uses finite Hausdorff separation and removes the compact image of the complement to build one evenly covered neighbourhood. If declined, a source result with a closed proof is omitted and the library retains only the negative half of the compactness boundary.

## Planned page summaries for Step 5

### `the-seifert-van-kampen-theorem`

The fundamental group turns based continuous maps into homomorphisms, and the quotient-circle degree gives the first nontrivial calculation. Group pushouts combine two homomorphisms with a common source without assuming they are injective, while free products describe the special case in which the common group is trivial. Compactness of the interval supplies finite subdivisions of loops and homotopies subordinate to open covers.

Loop subdivision first proves that two path-connected open sets generate the fundamental group of their union. A subordinate grid then makes factorization independent of choices and yields the Seifert–van Kampen pushout isomorphism. Its corollaries treat simply connected overlaps and one simply connected member. Explicit quotient neighbourhoods compute finite wedges of circles, componentwise loops compute products, and these results give the fundamental groups of higher-dimensional spheres and the two-dimensional torus.

### `classification-of-covering-spaces`

Covering-space lifting supplies unique path and map lifts, injects fundamental groups, and equips each fibre with a right monodromy action. The prerequisite development also constructs universal covers for nonempty path-connected, locally path-connected, semilocally simply connected bases and identifies their deck groups with the base fundamental group under traversal-order multiplication. Subgroup index already measures the number of sheets.

Local homeomorphisms are defined first, and compactness plus Hausdorff separation gives a finite-sheeted covering criterion. The lifting criterion then characterizes morphisms between connected coverings. Quotients of a universal cover realize every subgroup, while changing the point over the basepoint produces conjugation, giving the based and unbased classification theorems. Regular coverings are defined through transitivity of deck transformations on fibres; basepoint conjugacy identifies regularity with normality, and the deck group becomes a normalizer quotient. The circle specialization classifies connected covers by the subgroups $n\mathbb Z$ and computes their regularity and deck groups.

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

### `classification-of-covering-spaces` — 16 items

1. `def-local-homeomorphism` — definition — Local homeomorphisms
2. `lem-compact-local-homeomorphism-surjective-with-finite-fibres` — lemma — A compact local homeomorphism has surjective image and finite fibres under the stated connected Hausdorff hypotheses
3. `prop-compact-local-homeomorphism-is-finite-covering` — proposition — A compact Hausdorff local homeomorphism over a connected Hausdorff target is a finite-sheeted covering
4. `prop-covering-morphism-subgroup-criterion` — proposition — A based morphism between connected coverings exists exactly when the induced subgroups are included
5. `cor-based-connected-coverings-isomorphic-iff-equal-subgroups` — corollary — Based connected coverings are isomorphic exactly when their induced subgroups are equal
6. `lem-subgroup-quotient-of-universal-cover` — lemma — Every subgroup acts on the universal cover with a connected quotient covering that realizes it
7. `lem-covering-basepoint-change-conjugates-subgroup` — lemma — Changing the point over a fixed basepoint conjugates the induced covering subgroup
8. `thm-classification-of-connected-covering-spaces` — theorem — Connected covering spaces are classified by conjugacy classes of fundamental-group subgroups
9. `def-regular-covering` — definition — Regular coverings
10. `lem-deck-transformations-correspond-to-normalizer-cosets` — lemma — Deck transformations correspond to cosets in the subgroup normalizer
11. `thm-deck-group-as-normalizer-quotient` — theorem — $\operatorname{Deck}(E/B)\cong N_G(H)/H$
12. `thm-regular-covering-characterizations` — theorem — Regularity, subgroup normality, and deck transitivity are equivalent
13. `cor-deck-group-of-a-regular-covering` — corollary — A regular connected covering has deck group $G/H$
14. `cor-real-line-is-universal-cover-of-circle` — corollary — $\mathbb R\to\mathbb R/\mathbb Z$ is a universal covering
15. `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` — corollary — Connected circle coverings are classified by $n\mathbb Z$, $n\ge0$
16. `cor-every-connected-covering-of-circle-is-regular` — corollary — Every connected covering of the circle is regular

### `classification-of-covering-spaces-examples` — 3 items

1. `ex-circle-covering-towers-follow-divisibility` — example — Maps between connected circle coverings are governed by divisibility
2. `ex-deck-groups-of-connected-circle-coverings` — example — The deck group of the $n$-sheeted connected circle cover is $\mathbb Z/n\mathbb Z$
3. `ex-regular-and-nonregular-three-sheeted-wedge-coverings` — example — The two-circle wedge has regular and nonregular connected three-sheeted coverings

## Per-pair richness report

### Seifert–van Kampen pair

The long proof of `thm-seifert-van-kampen` is decomposed into `lem-open-cover-loop-generation`, `lem-van-kampen-homotopy-grid`, and `lem-van-kampen-factorization-invariance`. The higher-sphere corollary receives the separate stereographic and overlap lemma `lem-antipodal-sphere-cover`. The finite-wedge theorem receives `lem-finite-circle-wedge-open-cover`, which performs the explicit saturated-open-set and deformation-retraction work at the wedge point.

The corollary pass added `cor-seifert-van-kampen-simply-connected-overlap`, the source-harvested `cor-van-kampen-one-simply-connected-set`, `cor-fundamental-group-of-two-circle-wedge`, and `cor-fundamental-group-of-two-dimensional-torus`. I performed both the decomposition and corollary passes. No split is needed.

### Covering-classification pair

The compact local-homeomorphism criterion is decomposed into the open-and-closed image plus compact-discrete fibre lemma before the evenly-covered-neighbourhood proposition. The classification proof is decomposed into the morphism criterion, based-isomorphism corollary, subgroup quotient of the universal cover, and basepoint-conjugacy lemma before the main theorem. The deck-group proof is decomposed through `lem-deck-transformations-correspond-to-normalizer-cosets` before the first-isomorphism-theorem quotient. The regularity theorem remains separate from that quotient because it proves a three-way equivalence rather than a formula.

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
| `def-local-homeomorphism` | LD / NA | May Chapter 3 §8 problem preamble gives the exact local homeomorphism definition. May URL. |
| `lem-compact-local-homeomorphism-surjective-with-finite-fibres` | AA / AA | Proof-decomposition lemma extracted from May Problem 4: clopen image plus compact discrete fibres. May URL. |
| `prop-compact-local-homeomorphism-is-finite-covering` | LD / AA | May Chapter 3, Problem 4; proof expands the compact-complement construction explicitly. May URL. |
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

The proof-contract source clauses were checked mechanically against all 82 citations to already-published items: every recorded quote occurs in the exact cited section. Planned-to-planned citations carry the exact Statement sentence the Step-5 author must preserve.

## Forward references and cross-batch dependencies

No load-bearing forward reference remains. The full group-set/category-equivalence version of covering classification was not put on the spine because `def-category`, functor, and equivalence machinery is homed after order 299; it is recorded result-by-result as out of scope in coverage rather than smuggled into a proof.

This batch needs no item from another `frontier-16` batch, and the current manifests of the other batches declare no dependency on this batch. Within the batch, the classification companion legitimately cites `cor-fundamental-group-of-two-circle-wedge` from order 297. The unassigned future page `applications-of-the-fundamental-group` is expected to need `thm-higher-dimensional-spheres-are-simply-connected`, `thm-seifert-van-kampen`, `thm-classification-of-connected-covering-spaces`, and `thm-regular-covering-characterizations`. No reciprocal edge is needed.

## New-id search

I ran an exact fixed-string search for every proposed id across `items/` and `research/plan-spec.json` after finalizing the manifest. It checked 39 ids and found 0 pre-existing hits. The search deliberately excluded this batch manifest itself. No immutable id is re-used or re-homed.

## Findings for Step-3 Alpha, ordered by severity

1. **Approve the arbitrary-map pushout correction.** The design's amalgamation notation conflicts with the published monomorphism-only definition. Declining makes the main theorem misstated.
2. **Approve reuse of the published covering/universal-cover interfaces.** Rebuilding them here would duplicate immutable ids and redo completed proof machinery. Declining creates duplicate or nonexistent interfaces.
3. **Approve the local product theorem and torus definition.** The design's claimed published product theorem does not exist. Declining leaves the torus result without a legal proof.
4. **Approve the explicit wedge definition and wedge-point cover lemma.** The cited adjunction-space item does not define wedges. Declining leaves an undefined object and the classic wedge-point gap.
5. **Approve the published no-reversal monodromy convention.** Declining reverses multiplication in subgroup actions and the normalizer map relative to the actual dependency.
6. **Approve the harvested one-simply-connected-set corollary.** It is a named source result with a short closed proof. Declining makes the source harvest unnecessarily thin.
7. **Approve direct inline construction of the two-basepoint witness.** The general published item is a later B leaf and cannot be cited. Declining loses a promised example or forces an illegal dependency.
8. **Approve the compact local-homeomorphism definition, decomposition lemma, and finite-covering proposition.** May's problem closes from published compactness and Hausdorff results and supplies the positive boundary missing beside the published counterexample. Declining omits harvested content without a dependency obstacle.
9. **Approve deferral of full disconnected-cover/category equivalence.** Its formal category interfaces are planned after order 299; connected classification remains complete and source-backed. Declining would require a forward load-bearing dependency or duplicate category definitions.
10. **Approve the official full-book URL substitutions used for durable fetch verification.** They are the same Hatcher and May editions and preserve every locator; completed-run stamps already bind their full bodies and hashes. Declining would restore unstamped URL variants without changing any mathematics.

## Gate and confidence statement

`content-policy.mjs --manifest-only` ran on the final manifest: 39 scoped items, 0 errors, 0 warnings. JSON parsing and proof-contract scope checks are clean: 35 proof-bearing items and 35 contracts, each with all eight boundary dispositions; all 93 published-source clauses in the contracts are exact section matches. `source-fetch-check` reports 4/4 verified sources. The coverage checklist reports 0 errors and two expected low-yield warnings, which correspond to explicitly resolved cell-complex, surface, category, and groupoid declines. `prosecheck --warnings` reports 0 errors; its count warnings come only from the item-count headings required by this dispatch, and it reports no positional contradiction. `git diff --check` is clean. `validate-plan.mjs` and `depsource.mjs` were not run against a spliced spec, because Step 4 has not occurred; I do not claim those gates passed.

Confidence is high on the mathematical statements, pushout convention, subgroup conjugacy direction, right-monodromy multiplication, source coverage, and boundary cases. I verified every direct published dependency's statement and provenance, but did not re-audit every published dependency proof. I did not verify the planned later differential-geometry consumers mentioned by the stale stable-interface prose because no current plan item cites those ids. All required source bodies carry current durable fetch stamps.

## Step-3 Alpha-a direct repairs (2026-08-20)

Alpha-a repaired the proof routes and page closure before recording the pair verdicts.

- `lem-antipodal-sphere-cover` now explicitly transports simple connectedness across each stereographic homeomorphism using induced-map functoriality and the published simple-connectedness definition; the former strategy jumped from a convex target to a homeomorphic source without licensing the transport.
- The finite-wedge theorem now directly depends on its wedge definition, and the classification theorem directly depends on path connectedness, because both notions occur in their own planned Statements.
- `lem-deck-transformations-correspond-to-normalizer-cosets` now uses equality of based covering subgroups and the based-isomorphism corollary. Subgroup inclusion gives only a covering morphism, and May Chapter 3 explicitly warns that a self-map of a covering need not be an isomorphism; it therefore cannot by itself produce a deck transformation.
- The circle-classification corollary now declares `thm-int-comm-ring` before using abelianness to identify based and unbased classes. The deck-group example now declares the real-line universal-cover corollary used in its $n=0$ case.
- `classification-of-covering-spaces-examples` cites the two-circle-wedge group from `the-seifert-van-kampen-theorem`. That legal backward page edge was missing from both the batch manifest and `plan-spec.json`; both now declare it.

No new item was authored in this repair. Hatcher and May remain the two independent full-text treatments, and all their headings in the stated locator ranges retain explicit dispositions.

## Continuity checkpoint

- Current substage: Step 2 artifacts and all available pre-splice checks complete.
- Owned paths: `research/frontier-16-batch-6.pages.json`, `.coverage.json`, `.proof-contracts.json`, and `.notes.md`.
- Completed checks: all normative docs and exemplars read; both design sections checked against the spec; Hatcher and May harvested independently; every direct published dependency opened; new-id search clean; proof obligations and all boundary cases encoded; manifest-only content policy clean; source fetch check reports 4/4 verified; coverage, prose, JSON, exact-clause, and diff checks complete.
- Open constraint: none mathematical; authoritative plan validation waits for the Step-4 splice.
- Exact next action: Step-3 Alpha reads all four artifacts, adjudicates the ten findings, and verifies the two low-yield warning sets against the harvested source headings.

## Step-3 fix pass

- `B6-1` — **already correct.** `lem-deck-transformations-correspond-to-normalizer-cosets` now depends on `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`, and both its strategy and proof contract require equality $H=g^{-1}Hg$ before constructing a deck transformation. The weaker subgroup-inclusion morphism criterion is no longer used in this route.
- `B6-2` — **already correct.** `classification-of-covering-spaces-examples` declares `the-seifert-van-kampen-theorem` in `requires`, licensing its use of `cor-fundamental-group-of-two-circle-wedge`; the same legal backward prerequisite is already present in `research/plan-spec.json`. This fix pass did not edit the plan specification.
- `B6-3` — **already correct.** `lem-antipodal-sphere-cover` now declares `def-simply-connected` and `thm-induced-fundamental-group-map-functoriality`. Its strategy and contract use each stereographic homeomorphism and its inverse to transport path-connectedness and the trivial fundamental group from $\mathbb R^n$ to the pole complement before invoking the definition of simple connectedness.
- `B6-4` — **already correct.** The owning items now declare all four direct inputs: `def-wedge-of-pointed-spaces` for `thm-fundamental-group-of-finite-wedge-of-circles`, `def-path-connected` for `thm-classification-of-connected-covering-spaces`, `thm-int-comm-ring` for `cor-connected-coverings-of-circle-classified-by-nonnegative-integers`, and `cor-real-line-is-universal-cover-of-circle` for `ex-deck-groups-of-connected-circle-coverings`. The corresponding proof-contract routes name the same inputs.

Gate rerun after this disposition:

- `coverage-checklist.mjs`: exit 0; 76 harvested rows, 0 errors, and the same two Alpha-adjudicated low-yield warnings for the two A pages.
- `content-policy.mjs --manifest-only`: exit 0; 39 scoped items, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: exit 0; declared page order and all currently asserted item dependencies are consistent, with no item-level cycles, forward references, B-page dependency violations, or unresolved ids.

## Continuity checkpoint

- Current substage: Step-5 authoring is mathematically complete; final whole-batch gates, durable report, and diff review remain.
- Owned content: all 39 ids in `research/frontier-16-batch-6.pages.json`; the four page files under `library/topology/`; the batch pages manifest, proof contract, coverage ledger, and this notes file.
- Completed gates: all 35 proof-bearing items pass final canonical precheck; `proof-contract --strict` is clean for 35/35 contracts; `boundary-audit` finds no template or contradicted row; `citation-fidelity` finds no missing quote or widening; coverage has 0 errors and the two Alpha-adjudicated low-yield warnings; content policy, plan validation, prosecheck, and scoped rendercheck are clean. No judge was run.
- Frozen-text state: not frozen for Step 7; Step 6 may still repair. Every authored item and page remains `status: draft`, `origin: session`, with no judge or audited stamp.
- Mathematical constraints closed: arbitrary-map pushout convention; explicit Archimedean mesh choices; coordinate-axis stereographic covers at every basepoint; joint continuity of finite-wedge contractions; no-global-choice definition of the van Kampen inverse; traversal-order right monodromy; equality, not inclusion, for deck automorphisms; circle and wedge base hypotheses before covering classification; zero, one, empty, endpoint, and both-direction cases in the contract.
- Authored dependency deltas: thirteen items differ from scaffold dependencies, all recorded for the Step-5 ledger; none changes an id, kind, title, or planned mathematical claim. The batch manifest also follows the Step-4 plan addition of `partitions-of-unity-and-paracompactness` to the van Kampen page prerequisites.
- Open verification limits: finite-smoke has no registered check applicable to this topology batch; risk-report routes all proof-bearing items for Step-6 review; published dependency Statements were reopened, but their proofs were not re-audited wholesale.
- Exact next action: append the full `## Step-5 authoring` per-item/provenance/dependency report, rerun every required batch gate after that durable write, inspect the owned diff, and report exact outcomes without judging or advancing the stage.

## Step-5 authoring

### Scope result

Authored every scaffolded item: 39 item files, four draft page compositions, and the two required A-page summaries. The B pages have no authored summary body. No item was dropped, merged, renamed, or moved. Every item and page remains `status: draft`; every item is `origin: session`; no `verification.judge` or `verification.audited` field was written. The batch manifest now mirrors Step 4's authoritative addition of `partitions-of-unity-and-paracompactness` to the van Kampen A-page prerequisites.

Abbreviations below are `LD` for `literature-derived`, `AA` for `ai-altered`, `AG` for `ai-generated`, and `NA` for `not-applicable`. Hatcher means the official *Algebraic Topology* PDF already recorded above; May means the official *Concise Course* PDF. Each `AA` proof is a local adaptation to the library's exact quotient, basepoint, right-monodromy, zero-index, and phase-stratification conventions rather than a claim that the underlying result is new.

### Per-item precheck and component-provenance ledger

#### Seifert-van Kampen A/B pair

- `lem-open-cover-loop-generation`: precheck `pass`; `LD / AA`. Hatcher Lemma 1.15 supplies the statement and subdivision route; the proof uses the published metric compactness and explicit Archimedean mesh machinery.
- `lem-antipodal-sphere-cover`: precheck `pass`; `AA / AA`. Hatcher Proposition 1.14 supplies the stereographic construction; the reusable coordinate-axis form, denominator discharge, and induced-map transport are material adaptations.
- `thm-higher-dimensional-spheres-are-simply-connected`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.14 supplies the theorem; the proof factors through the local generation lemma and checks the library's every-basepoint convention.
- `lem-van-kampen-homotopy-grid`: precheck `pass`; `AA / AA`. The Hatcher/May homotopy subdivision is extracted as a boundary-refining grid lemma with an explicit Archimedean mesh.
- `lem-van-kampen-factorization-invariance`: precheck `pass`; `AA / AA`. Hatcher's grid sweep is isolated and translated from normal-closure language to the arbitrary-homomorphism pushout.
- `thm-seifert-van-kampen`: precheck `pass`; `LD / AA`. Hatcher Theorem 1.20 and May Chapter 2 support the claim; the local proof defines its inverse by a unique common factorization value and makes no global choice.
- `cor-seifert-van-kampen-simply-connected-overlap`: precheck `pass`; `LD / AA`. This standard Hatcher/May specialization is derived through the published trivial-amalgamation result.
- `cor-van-kampen-one-simply-connected-set`: precheck `pass`; `LD / AA`. May's named consequence supplies the statement; the local quotient proof identifies the normal-closure kernel.
- `def-wedge-of-pointed-spaces`: precheck `n/a`; `LD / NA`. Hatcher/May supply the wedge construction; the exact equivalence relation, empty-family point, and quotient well-definedness are written inline.
- `lem-finite-circle-wedge-open-cover`: precheck `pass`; `AA / AA`. Hatcher Example 1.21 and May's wedge argument are restricted to finite quotient circles; the proof adds the tagged-quotient regrouping and a direct joint-continuity check at the wedge point.
- `thm-fundamental-group-of-finite-wedge-of-circles`: precheck `pass`; `LD / AA`. Hatcher/May supply the free-group calculation; the local induction includes ranks zero and one and uses the exact free-product-of-free-groups theorem.
- `cor-fundamental-group-of-two-circle-wedge`: precheck `pass`; `LD / AA`. Hatcher Example 1.21 supplies the specialization, with the standard loops named as $a,b$.
- `thm-fundamental-group-of-a-product`: precheck `pass`; `LD / AA`. May supplies the product lemma; the proof constructs both coordinatewise homomorphisms and their inverse homotopies.
- `def-two-dimensional-torus`: precheck `n/a`; `LD / NA`. May's product torus is stated in the library's quotient-circle model.
- `cor-fundamental-group-of-two-dimensional-torus`: precheck `pass`; `LD / AA`. May's product calculation is composed with the two published degree isomorphisms.
- `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge`: precheck `pass`; `AG / AG`, role `example`. The construction is local rather than source-attributed; its two maps were checked by reducing $a$ and $b^{-1}ab$ as distinct free-group words.
- `ex-fundamental-group-of-the-punctured-plane`: precheck `pass`; `LD / AA`. Hatcher's classical calculation is implemented through the published radial deformation retraction and quotient-circle homeomorphism.
- `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere`: precheck `pass`; `AA / AA`. Hatcher's stereographic consequences are combined and tied to explicit basepoints and the preceding punctured-plane calculation.
- `fs-every-fundamental-group-is-abelian`: precheck `pass`; `LD / AA`. Hatcher's wedge witness supplies the false claim's counterexample; the refutation uses the published reduced-word model of a free group.
- `fs-van-kampen-with-disconnected-intersection`: precheck `pass`; `LD / AA`. Hatcher's two-arc failure supplies the claim and witness; exact quotient intervals and induced homeomorphism maps discharge the local calculations.

#### Covering-classification A/B pair

- `def-local-homeomorphism`: precheck `n/a`; `LD / NA`. May Chapter 3 supplies the exact local definition, with neither surjectivity nor the covering condition added.
- `lem-compact-local-homeomorphism-surjective-with-finite-fibres`: precheck `pass`; `AA / AA`. This is the clopen-image and compact-discrete-fibre part of May Problem 4, extracted for proof decomposition.
- `prop-compact-local-homeomorphism-is-finite-covering`: precheck `pass`; `LD / AA`. May Problem 4 supplies the statement; finite Hausdorff separation and removal of the compact complement image are explicit.
- `prop-covering-morphism-subgroup-criterion`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.37 and May Section 7 supply the criterion; the proof also establishes that the morphism is a surjective covering by local sheets and path lifting.
- `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.37 supplies the equivalence; the two unique morphisms are proved inverse.
- `lem-subgroup-quotient-of-universal-cover`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.36 and May Section 8 supply subgroup realization; the proof uses the already-published universal cover and no-reversal deck convention.
- `lem-covering-basepoint-change-conjugates-subgroup`: precheck `pass`; `LD / AA`. Hatcher's proof of Theorem 1.38 supplies the formula; both inclusions fix the traversal-order conjugation direction.
- `thm-classification-of-connected-covering-spaces`: precheck `pass`; `LD / AA`. Hatcher Theorem 1.38 and May Section 7 support both based and unbased bijections; all surjectivity and injectivity directions are written.
- `def-regular-covering`: precheck `n/a`; `LD / NA`. Hatcher/May supply the deck-transitivity definition and the normal-cover synonym; subgroup normality remains a theorem.
- `lem-deck-transformations-correspond-to-normalizer-cosets`: precheck `pass`; `AA / AA`. Hatcher Proposition 1.39's proof is isolated; equality of based subgroups, right cosets, multiplication order, surjectivity, and the closed-lift kernel are explicit.
- `thm-deck-group-as-normalizer-quotient`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.39(b) and May Section 7 support the formula; normality inside the normalizer and the first isomorphism theorem supply the proof.
- `thm-regular-covering-characterizations`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.39(a) and May support the equivalence; the proof transports transitivity from the selected fibre to every fibre by unique path lifting.
- `cor-deck-group-of-a-regular-covering`: precheck `pass`; `LD / AA`. Hatcher's regular special case follows by substituting $N_G(H)=G$.
- `cor-real-line-is-universal-cover-of-circle`: precheck `pass`; `LD / AA`. Hatcher/May support the universal cover; the proof combines the published quotient covering with convex simple connectedness of $\mathbb R$.
- `cor-connected-coverings-of-circle-classified-by-nonnegative-integers`: precheck `pass`; `LD / AA`. Hatcher's circle discussion and the published subgroup theorem support the claim; quotient arcs verify every base hypothesis and standard residues verify the sheet counts at $n=0,1$ and $n\ge1$.
- `cor-every-connected-covering-of-circle-is-regular`: precheck `pass`; `LD / AA`. Hatcher's circle covers supply the claim; quotient arcs and lifted local path-connectedness license the normal-subgroup criterion.
- `ex-circle-covering-towers-follow-divisibility`: precheck `pass`; `AA / AA`. May's morphism criterion is specialized to $m\mathbb Z\subseteq n\mathbb Z$; injectivity and functoriality identify the relative subgroup index with the quotient $q$.
- `ex-deck-groups-of-connected-circle-coverings`: precheck `pass`; `LD / AA`. Hatcher Proposition 1.39 and the circle classification support the positive and universal cases; the title was corrected to state both rather than calling the universal cover zero-sheeted.
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings`: precheck `pass`; `AG / AG`, role `example`. The finite witnesses were checked directly: both free-group maps are surjective, both subgroups have index three, $(123)(12)(132)=(23)$ fixes $1$, and its conjugate $(13)$ does not. The two-circle wedge's local and semilocal hypotheses are discharged before classification.

### Scaffold-change and dependency ledger

No id or kind changed. No planned claim was narrowed or dropped. Two Statement-level refinements and one title repair were made:

- `lem-antipodal-sphere-cover` states the stereographic cover for every coordinate-axis antipodal pair, rather than only the north/south wording in the strategy. This directly proves triviality at an arbitrary basepoint without citing a later B-page change-of-basepoint example.
- `lem-finite-circle-wedge-open-cover` records the canonical regrouping $W_{r+1}\cong W_r\vee Q$ and the induced fundamental-group isomorphisms of its deformation retracts, facts used by the successor induction and proved locally.
- `ex-deck-groups-of-connected-circle-coverings` changed title from the scaffold's positive-sheet wording to name both $n\ge1$ and the universal case. Its mathematical Example and id are unchanged; the repair prevents $n=0$ from reading as a zero-sheeted cover.

Final authored dependency lists differ from the scaffold as follows. Every addition is used in the final Statement, Fact, or numbered proof; every removal deletes a route the final proof does not use.

- `lem-open-cover-loop-generation`: replaced `thm-heine-borel-r` by metric `thm-heine-borel-rn`, and added `cor-archimedean-reciprocal`, because the Lebesgue lemma needs metric compactness and the uniform mesh needs an explicit positive denominator.
- `lem-van-kampen-homotopy-grid`: added `cor-archimedean-reciprocal` for the grid mesh.
- `lem-finite-circle-wedge-open-cover`: added `def-simply-connected`, induced-map functoriality, and the fundamental-group laws; dropped the unused general pasting lemma after joint continuity was proved directly at the wedge point.
- `thm-fundamental-group-of-finite-wedge-of-circles`: replaced the infinite-cyclic-family corollary by `thm-free-product-of-free-groups-on-disjoint-bases`, the exact theorem needed for the successor basis.
- `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge` and `fs-every-fundamental-group-is-abelian`: replaced free-product normal form by `thm-reduced-words-form-the-free-group`, matching the actual $F(a,b)$ statement.
- `fs-van-kampen-with-disconnected-intersection`: added induced-map functoriality to transport interval fundamental groups through quotient-arc homeomorphisms.
- `thm-regular-covering-characterizations`: added path lifting for transitivity on fibres away from the selected basepoint.
- `cor-connected-coverings-of-circle-classified-by-nonnegative-integers`: added the quotient/residue results and the path-connected, local path-connected, semilocally simply connected circle suppliers needed before applying classification and counting sheets.
- `cor-every-connected-covering-of-circle-is-regular`: added quotient-arc and lifted-local-path suppliers so the base and total-space hypotheses of the regularity theorem are explicit.
- `ex-circle-covering-towers-follow-divisibility`: added covering-map injectivity and induced-map functoriality to identify $f_*\pi_1(E_m)$ with $m\mathbb Z$ inside $n\mathbb Z$ before taking its index.
- `ex-deck-groups-of-connected-circle-coverings`: dropped the unused universal-deck theorem after both cases were computed by the regular-cover quotient; added the quotient-circle path/local suppliers needed for that theorem's hypotheses.
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings`: added orbit-stabilizer, standard residues, index and normality definitions, and the finite-wedge local topology needed for the two explicit subgroups and classification; dropped `lem-subgroup-criterion` because subgroup closure of the stabilizer preimage is proved directly.

### Generated-claim truth checks

- `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge`: checked the full local scope consisting of endpoint compatibility, the inverse path maps, the identity $c_\sigma=c_\rho\circ(b^{-1}(-)b)$, and distinct reduced words $a$ and $b^{-1}ab$. No counterexample or endpoint failure was found. The item is a B-page leaf and is not a dependency target.
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings`: checked the full finite scope in $\mathbb Z/3$ and $S_3$, including surjectivity, coset indices, preimage subgroup closure, the conjugation witness to nonnormality, and every base-space hypothesis of classification. No counterexample or convention mismatch was found. The item is a B-page leaf and is not a dependency target.

### Gate ledger

- Reflow: all 39 item files unchanged on the final run.
- Precheck: 35/35 proof-bearing items pass; the four structural definitions correctly record `n/a`.
- `validate-plan.mjs research/plan-spec.json`: pass.
- `content-policy.mjs research/frontier-16-batch-6.pages.json`: 39 scoped items, 0 errors, 0 warnings.
- Coverage checklist: 76 harvested rows, 0 errors; the two low-yield warnings are the exact Hatcher/May decline sets already adjudicated by Alpha at Step 3.
- Strict proof contract: 35/35 items, 191 direct citation entries, 0 errors, 0 warnings.
- Boundary audit: 280 rows, no template cluster and no contradicted disposition.
- Citation-fidelity audit: no missing source excerpt and no widening candidate.
- Rendercheck: 43 owned item/page files, no YAML, delimiter, wikilink-in-math, multiline-display, or KaTeX error.
- Prosecheck: 43 files, 0 errors, 0 warnings.
- `depcheck`, `fwdcheck`, and `extcheck`: pass globally; `citecheck` reports no batch-6 warning; `depsource` reports 0 unresolved.
- Finite smoke: 0 errors and 0 checks because no registered bounded topology check matches these claims; this is not evidence for the proofs.
- Risk report: 0 errors and all 35 proof-bearing items routed for Step-6 risk review. No author-side `risk_review` was written.
- `git diff --check`: pass.
- No judge was run, no judge verdict was invented, and no stage transition was attempted.

### Escalations and confidence

No blocker, missing item, scaffold falsehood, or suspected false published dependency remains. No published dependency was edited. The Step-4 prerequisite addition was reconciled in the batch manifest, and every authored dependency remains backward or earlier on its own page.

Confidence is high in the Statements, boundary handling, arbitrary-map pushout convention, grid sweep, finite-wedge topology, subgroup conjugation direction, right-coset normalizer calculation, and the finite permutation witnesses. I reopened every directly cited published Statement/Definition/Example and checked every exact contract excerpt, but I did not re-audit all published dependency proofs. I did not run a browser-level visual review, a judge, an owner audit, or a finite-model check; rendercheck did perform the real YAML and KaTeX parsers. Step 6 must still independently read the routed high/critical proofs, and Step 7 alone may judge the final frozen text.
