# Exact Step-8 repair envelope — 8-close, round 2

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-close",
  "round": 2,
  "mode": "close",
  "group": "f",
  "full_evidence": "research/frontier-32-8-close-repair-evidence-2-e99fd7ad2b7d38c8035eb3fe22b3b95379e9e794b607e40ef0a7f3018436b1cd.json",
  "full_evidence_sha256": "e99fd7ad2b7d38c8035eb3fe22b3b95379e9e794b607e40ef0a7f3018436b1cd",
  "failures": [
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 3832 rows over 1 contract file(s); 3121 marked not_applicable\n\nTEMPLATE REUSE — 9 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  7 rows · axes: degenerate, empty, iff-forward, iff-reverse, nonempty-choice, one, zero\n    \"Step 1.1 uses only nonempty irreducible closed subsets and identifies singleton points. Steps 2.1–4.1 construct both inverse functors and prove finite-type, irr…\"\n    items: thm-classical-varieties-equivalent-integral-separated-finite-type-schemes\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 1.1–2.1 prove C is nonzero and Z nonempty; nonzero a_1 a_prime_1 is a function nonzero at some x. Step 3.1 handles a point factor. Empty varieties are exc…\"\n    items: thm-affine-variety-product-coordinate-ring\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 1.1–3.1 use the point test object, allow an empty fibre (unit ideal/zero ring), and take radicals so nonreduced scheme fibres are not asserted.\"\n    items: lem-fibre-as-base-change-to-point-classical\n\n  6 rows · axes: iff-forward, iff-reverse\n    \"This is a counterexample, not an equivalence.\"\n    items: lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics, ex-a-morse-smale-height-function-on-a-tilted-torus, cex-symmetric-torus-height-flow-is-not-morse-smale\n\n  5 rows · axes: degenerate, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–3.1 handle unequal and zero bidegrees, d=0 constants and P^0 factors. A nonzero z_pq makes the balancing multiplier nonzero and the tuples cover the p…\"\n    items: thm-multihomogeneous-map-to-projective-space\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Step 2.1 proves maximal sequence existence from the finite dimension bound, includes the empty sequence in dimension zero, and uses the nonzero localization hyp…\"\n    items: lem-depth-at-a-prime-bounded-by-local-dimension\n\n  4 rows · axes: degenerate, endpoints, nonempty-choice, one\n    \"Step 3.1 covers a=1 or b=1 and P^0 factors; nonzero x_i,y_j give a nonzero monomial x_i^a y_j^b.\"\n    items: cor-segre-veronese-embedding\n\n  3 rows · axes: degenerate, empty, zero\n    \"In statement and step 1.1, for d=0 the parameter tuple is empty, M remains nonzero, and the inequalities give depth=0. The zero module is explicitly excluded.\"\n    items: cor-one-regular-system-of-parameters-implies-cohen-macaulay\n\n  3 rows · axes: degenerate, endpoints, zero\n    \"Step 1.1 handles r=0 and r=n, including n=0, as a single point of dimension zero.\"\n    items: cor-grassmannian-smooth-irreducible-dimension\n\nCONTRADICTED DISPOSITIONS — 4 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 8 row(s) an Alpha read and kept, with reasons on the record:\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
        "thm-affine-variety-product-coordinate-ring",
        "lem-fibre-as-base-change-to-point-classical",
        "thm-multihomogeneous-map-to-projective-space",
        "lem-depth-at-a-prime-bounded-by-local-dimension",
        "cor-segre-veronese-embedding",
        "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
        "cor-grassmannian-smooth-irreducible-dimension"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-variety-product-coordinate-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-fibre-as-base-change-to-point-classical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-multihomogeneous-map-to-projective-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-at-a-prime-bounded-by-local-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-segre-veronese-embedding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-grassmannian-smooth-irreducible-dimension",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-affine-variety-product-coordinate-ring",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-fibre-as-base-change-to-point-classical",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-multihomogeneous-map-to-projective-space",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-depth-at-a-prime-bounded-by-local-dimension",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-segre-veronese-embedding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-one-regular-system-of-parameters-implies-cohen-macaulay",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-grassmannian-smooth-irreducible-dimension",
      "scope": "run",
      "owner": "f"
    }
  ],
  "fatal_repair_licences": [],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **f**, run `frontier-32`

You are the group Alpha for batches **9**, **11**, **12**: 4 A/B pair(s), 8 page(s), 183 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `depth-and-cohen-macaulay-modules` | A | commutative-algebra | 365.903 | `koszul-complexes-and-regular-sequences-examples`, `ext-and-balanced-resolutions` |
| 9 | `depth-and-cohen-macaulay-modules-examples` | B | commutative-algebra | 365.904 | `depth-and-cohen-macaulay-modules` |
| 11 | `products-segre-and-veronese-embeddings-and-grassmannians` | A | algebraic-geometry | 366.047 | `projective-algebraic-sets-projective-morphisms-and-cones-examples`, `exterior-powers-orientation-and-hodge-duality` |
| 11 | `products-segre-and-veronese-embeddings-and-grassmannians-examples` | B | algebraic-geometry | 366.048 | `products-segre-and-veronese-embeddings-and-grassmannians` |
| 12 | `presheaves-sheaves-stalks-and-sheafification` | A | scheme-theory | 366.057 | `plane-curves-local-intersection-multiplicity-and-bezout-examples` |
| 12 | `presheaves-sheaves-stalks-and-sheafification-examples` | B | scheme-theory | 366.058 | `presheaves-sheaves-stalks-and-sheafification` |
| 12 | `schemes-subschemes-and-morphisms-locally-of-finite-type` | A | scheme-theory | 366.063 | `affine-schemes-and-the-structure-sheaf-examples`, `holomorphic-inverse-and-weierstrass-preparation` |
| 12 | `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` | B | scheme-theory | 366.064 | `schemes-subschemes-and-morphisms-locally-of-finite-type` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `depth-and-cohen-macaulay-modules` — Depth and Cohen Macaulay Modules (57 item(s))

- `def-depth-with-respect-to-an-ideal` · definition — Depth with respect to an ideal
- `lem-depth-infinity-when-ideal-acts-surjectively` · lemma — Depth is infinite when the ideal acts surjectively
- `lem-regular-element-exists-by-prime-avoidance` · lemma — A regular element exists by prime avoidance
- `cor-depth-zero-iff-ideal-contained-in-an-associated-prime` · corollary — Depth zero and associated primes
- `thm-depth-zero-associated-prime-criterion` · theorem — The local depth-zero associated-prime criterion
- `lem-maximal-regular-sequence-stops-at-associated-prime` · lemma — A maximal regular sequence stops at an associated prime
- `lem-ext-depth-zero-identifies-annihilated-elements` · lemma — Ext degree zero identifies ideal-annihilated elements
- `lem-ext-depth-shift-across-a-regular-element` · lemma — The first nonzero Ext shifts across a regular element
- `lem-maximal-regular-sequences-have-common-length-ext` · lemma — Maximal regular sequences have a common Ext length
- `cor-depth-as-first-nonzero-ext` · corollary — Depth as the first nonzero Ext degree
- `thm-depth-equals-maximal-regular-sequence-length` · theorem — Depth equals the maximal regular-sequence length
- `lem-depth-radical-invariance-via-ext` · lemma — Radical invariance of first nonzero Ext
- `cor-depth-depends-only-on-radical` · corollary — Depth depends only on the radical of the ideal
- `lem-depth-quotient-by-regular-element` · lemma — Depth drops by one after quotienting by a regular element
- `lem-associated-prime-after-power-regular-quotient` · lemma — A prime minimal over an associated prime plus one element becomes associated after a power quotient
- `lem-depth-bounded-by-associated-prime-quotient-dimension` · lemma — Depth is bounded by the quotient dimension at every associated prime
- `lem-depth-localisation-inequality` · lemma — Localization gives the stated depth inequality
- `thm-radical-localisation-and-regular-quotient-properties-of-depth` · theorem — Radical, localization, and regular-quotient properties of depth
- `lem-depth-lemma-lower-bound-middle` · lemma — The middle lower bound in the Depth Lemma
- `lem-depth-lemma-lower-bound-left` · lemma — The left lower bound in the Depth Lemma
- `lem-depth-lemma-lower-bound-right` · lemma — The right lower bound in the Depth Lemma
- `thm-depth-lemma` · theorem — The three Depth Lemma inequalities
- `cor-depth-lemma-unequal-depth-equalities` · corollary — Unequal-depth equalities in a short exact sequence
- `lem-koszul-depth-first-nonzero-cohomology` · lemma — Depth from first nonzero Koszul cohomology
- `cor-depth-bounded-by-number-of-ideal-generators` · corollary — Depth is bounded by the number of ideal generators
- `thm-koszul-characterisation-of-depth` · theorem — The Koszul characterization of depth
- `lem-depth-at-a-prime-bounded-by-local-dimension` · lemma — Depth at a prime is bounded by local support dimension
- `cor-depth-of-a-finite-local-module-at-most-its-dimension` · corollary — A finite local module has depth at most its dimension
- `thm-depth-bounded-by-support-dimension` · theorem — Depth is bounded by support dimension
- `def-cohen-macaulay-local-module-and-ring` · definition — Cohen--Macaulay local modules and rings
- `def-maximal-and-global-cohen-macaulay-modules` · definition — Maximal and global Cohen--Macaulay modules
- `cor-zero-dimensional-local-modules-are-cohen-macaulay` · corollary — Zero-dimensional finite local modules are Cohen--Macaulay
- `lem-regular-quotient-preserves-depth-dimension-gap` · lemma — A regular parameter quotient preserves the depth--dimension gap
- `cor-regular-quotient-cohen-macaulay-equivalence` · corollary — Cohen--Macaulayness and a regular parameter quotient
- `thm-regular-quotients-and-cohen-macaulayness` · theorem — Regular quotients and Cohen--Macaulayness
- `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension` · lemma — Associated primes of a Cohen--Macaulay module have full dimension
- `cor-cohen-macaulay-modules-have-no-embedded-associated-primes` · corollary — Cohen--Macaulay modules have no embedded associated primes
- `thm-associated-primes-of-cohen-macaulay-modules` · theorem — Associated primes of Cohen--Macaulay modules
- `lem-cohen-macaulay-parameter-first-element-regular` · lemma — The first parameter of a Cohen--Macaulay module is regular
- `lem-cohen-macaulay-parameter-sequence-induction` · lemma — Induction along a Cohen--Macaulay parameter sequence
- `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module` · corollary — Every system of parameters is regular in a Cohen--Macaulay module
- `cor-one-regular-system-of-parameters-implies-cohen-macaulay` · corollary — One regular system of parameters implies Cohen--Macaulayness
- `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules` · theorem — Parameters and regular sequences in Cohen--Macaulay modules
- `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality` · lemma — Localization preserves the Cohen--Macaulay depth--dimension equality
- `cor-cohen-macaulayness-localises` · corollary — Cohen--Macaulayness localizes
- `thm-localisation-of-cohen-macaulay-modules` · theorem — Localization of Cohen--Macaulay modules
- `lem-polynomial-extension-depth-increases-by-one` · lemma — A polynomial variable increases depth by one
- `cor-polynomial-extension-preserves-cohen-macaulayness` · corollary — Polynomial extension preserves Cohen--Macaulayness
- `thm-polynomial-extension-of-cohen-macaulay-rings` · theorem — Polynomial extensions of Cohen--Macaulay rings
- `lem-completion-preserves-regular-sequences` · lemma — Completion preserves regular sequences
- `lem-completion-reflects-depth` · lemma — Completion reflects depth
- `cor-completion-preserves-cohen-macaulayness-two-directions` · corollary — Completion preserves Cohen--Macaulayness in both directions
- `thm-completion-preserves-cohen-macaulayness` · theorem — Completion preserves Cohen--Macaulayness
- `lem-flat-local-depth-formula-regular-sequence-split` · lemma — A flat local map splits regular sequences into base and fibre parts
- `cor-flat-local-depth-additivity` · corollary — Depth is additive for a flat local homomorphism
- `cor-flat-local-cohen-macaulay-fibre-criterion` · corollary — The flat-local Cohen--Macaulay fibre criterion
- `thm-depth-formula-for-flat-local-homomorphisms` · theorem — The depth formula for flat local homomorphisms

### `depth-and-cohen-macaulay-modules-examples` — Depth and Cohen Macaulay Modules — Examples (13 item(s))

- `ex-zero-dimensional-rings-cohen-macaulay` · example — A zero-dimensional local ring is Cohen--Macaulay
- `ex-polynomial-rings-cohen-macaulay` · example — Polynomial rings are Cohen--Macaulay
- `ex-non-cohen-macaulay-local-ring` · example — A non-Cohen--Macaulay local quotient
- `ex-cohen-macaulay-ring-with-zero-divisors` · example — A Cohen--Macaulay ring with zero divisors
- `ex-maximal-cohen-macaulay-module` · example — A nonfree maximal Cohen--Macaulay module
- `ex-depth-of-a-hypersurface` · example — Depth of a hypersurface quotient
- `ex-depth-of-a-union-of-planes` · example — Depth of a union of planes
- `ex-depth-infinity-zero-module-convention` · example — The zero-module and surjective-ideal depth conventions
- `ex-depth-lemma-three-inequalities` · example — Three sharp Depth Lemma inequalities
- `ex-parameter-sequence-regular-in-a-hypersurface` · example — A parameter sequence regular in a hypersurface
- `ex-parameter-sequence-fails-in-a-non-cm-ring` · example — A parameter sequence that fails in a non-Cohen--Macaulay ring
- `ex-cohen-macaulay-associated-primes-unmixed` · example — Associated primes are unmixed in a Cohen--Macaulay example
- `ex-completion-depth-computation` · example — A depth computation before and after completion

### `products-segre-and-veronese-embeddings-and-grassmannians` — Products Segre and Veronese Embeddings and Grassmannians (25 item(s))

- `def-product-varieties-universal-property` · definition — Products of classical algebraic sets and their universal property
- `thm-affine-variety-product-coordinate-ring` · theorem — The product of affine varieties has coordinate ring k[X] tensor_k k[Y]
- `lem-affine-product-topology-not-product-topology` · lemma — The Zariski topology on an affine product is generally not the product topology
- `def-segre-map` · definition — The Segre map from a product of projective spaces
- `lem-segre-map-well-defined-injective` · lemma — The Segre map is well defined and injective
- `thm-segre-image-rank-one-minors` · theorem — The Segre image is the projective rank-one locus cut out by 2 by 2 minors
- `cor-projective-variety-product-exists` · corollary — Products of nonempty projective varieties exist as projective varieties
- `def-veronese-map` · definition — The degree-d Veronese map
- `lem-veronese-map-well-defined-closed-immersion` · lemma — The Veronese map is a well-defined closed immersion
- `cor-homogeneous-polynomial-becomes-hyperplane-section` · corollary — A degree-d homogeneous equation becomes a hyperplane section under Veronese
- `def-grassmannian-subspaces` · definition — The Grassmannian of r-dimensional subspaces of a finite-dimensional vector space
- `def-plucker-coordinates` · definition — Plucker coordinates and the Plucker map
- `lem-plucker-map-well-defined-injective` · lemma — The Plucker map is well defined and injective
- `thm-plucker-image-closed` · theorem — The Plucker image is a closed projective subvariety
- `lem-grassmannian-standard-affine-charts` · lemma — Standard affine charts on the Grassmannian
- `cor-grassmannian-smooth-irreducible-dimension` · corollary — The Grassmannian is smooth, irreducible, and has dimension r(n-r)
- `def-incidence-correspondence-varieties` · definition — Incidence correspondence loci
- `lem-incidence-locus-is-closed` · lemma — The standard incidence locus is closed
- `thm-graph-closed-for-classical-variety-morphism` · theorem — Graphs of morphisms to a projective classical variety are closed
- `lem-diagonal-affine-variety-cut-out-by-coordinate-differences` · lemma — The affine diagonal is cut out by coordinate differences
- `def-base-change-classical-varieties` · definition — Base change of classical varieties when the pullback exists
- `lem-fibre-as-base-change-to-point-classical` · lemma — A classical fibre is base change to a point
- `thm-multihomogeneous-map-to-projective-space` · theorem — Fixed-multidegree forms define maps from products to projective space
- `cor-segre-veronese-embedding` · corollary — The Segre-Veronese map is a closed embedding
- `rem-products-need-scheme-fibre-products` · remark — Why scheme fibre products are needed beyond the classical setting

### `products-segre-and-veronese-embeddings-and-grassmannians-examples` — Products Segre and Veronese Embeddings and Grassmannians — Examples (8 item(s))

- `ex-segre-p1-times-p1-quadric` · example — The Segre image of P1 times P1 is a quadric surface
- `ex-quadratic-veronese-conic` · example — The quadratic Veronese image of P1 is a plane conic
- `ex-grassmannian-lines-in-projective-three-space` · example — Lines in P3 and the Klein quadric Gr(2,4)
- `ex-grassmannian-boundary-r-zero-n` · example — The boundary Grassmannians Gr(0,V) and Gr(dim V,V)
- `cex-zariski-product-topology-too-coarse` · counterexample — The product of Zariski topologies is too coarse on A1 times A1
- `ex-incidence-point-hyperplane` · example — The incidence variety of a point and a hyperplane
- `cex-tensor-product-of-domains-not-domain` · counterexample — Tensor products of domains need not be domains over a nonclosed field
- `ex-segre-veronese-bidegree-two-three` · example — A bidegree (2,3) Segre-Veronese embedding

### `presheaves-sheaves-stalks-and-sheafification` — Presheaves Sheaves Stalks and Sheafification (29 item(s))

- `def-open-set-category-topological-space` · definition — The category of open subsets of a topological space
- `def-presheaf-on-topological-space` · definition — A presheaf on a topological space
- `def-section-restriction-and-global-section` · definition — Sections, restrictions, and global sections of a presheaf
- `def-morphism-of-presheaves` · definition — Morphisms of presheaves
- `def-separated-presheaf` · definition — Separated presheaves
- `def-sheaf-on-topological-space` · definition — A sheaf on a topological space
- `lem-sheaf-section-over-empty-set-terminal` · lemma — A set-valued sheaf has a unique section over the empty open set
- `thm-sheaf-equalizer-condition` · theorem — The sheaf axiom is the equalizer condition on a cover
- `lem-sheaf-condition-check-on-basis` · lemma — The sheaf condition can be checked on a basis with basis-refinable intersections
- `def-presheaf-of-groups-rings-modules` · definition — Presheaves and sheaves of groups, rings, and modules
- `lem-forgetful-sheaf-compatibility` · lemma — Sheafhood of algebraic-structure valued presheaves is detected on underlying sets
- `def-stalk-of-presheaf` · definition — The stalk of a presheaf at a point
- `lem-germ-equivalence-relation` · lemma — Equality on a smaller neighbourhood defines the germ equivalence relation
- `def-germ-of-section` · definition — Germs of sections
- `lem-section-zero-if-all-germs-zero` · lemma — A section of a sheaf of groups is zero exactly when all of its germs are zero
- `lem-morphisms-of-sheaves-determined-by-stalks` · lemma — Morphisms of sheaves are determined by their maps on stalks
- `thm-sheaf-morphism-isomorphism-stalkwise` · theorem — A morphism of sheaves is an isomorphism exactly when it is an isomorphism on every stalk
- `def-etale-space-of-sheaf-of-sets` · definition — The etale space of a sheaf of sets
- `thm-sheaves-as-local-homeomorphisms` · theorem — Sheaves of sets are equivalent to local homeomorphisms over the base space
- `def-presheaf-plus-construction` · definition — The plus construction for a presheaf
- `lem-first-plus-construction-is-separated` · lemma — The first plus construction is separated and preserves stalks
- `lem-second-plus-construction-is-sheaf` · lemma — The second plus construction is a sheaf
- `def-sheafification` · definition — Sheafification of a presheaf
- `thm-sheafification-universal-property` · theorem — Sheafification is left adjoint to the inclusion of sheaves into presheaves
- `thm-sheafification-preserves-stalks` · theorem — Sheafification preserves stalks
- `cor-sheafification-idempotent` · corollary — Sheafification is idempotent
- `def-subsheaf` · definition — Subsheaves
- `lem-image-sheaf-is-sheafification-presheaf-image` · lemma — The image sheaf is the sheafification of the presheaf image
- `rem-sections-not-determined-by-single-stalk` · remark — A single stalk does not determine a global section

### `presheaves-sheaves-stalks-and-sheafification-examples` — Presheaves Sheaves Stalks and Sheafification — Examples (9 item(s))

- `ex-sheaf-continuous-real-functions` · example — Continuous real-valued functions form a sheaf
- `ex-sheaf-locally-constant-functions` · example — Locally constant functions form a sheaf and have constant stalks
- `cex-presheaf-bounded-continuous-functions-not-sheaf` · counterexample — Bounded continuous functions need not form a sheaf
- `cex-constant-presheaf-not-sheaf-disconnected-open` · counterexample — The constant presheaf need not be a sheaf on a disconnected open set
- `ex-skyscraper-set-sheaf-stalks` · example — A set-valued skyscraper sheaf and its stalks
- `ex-extension-by-empty-outside-open` · example — Sections on an open subset extended by the empty set outside it
- `cex-objectwise-image-not-sheaf` · counterexample — The objectwise image of a sheaf morphism need not be a sheaf
- `ex-germs-of-continuous-functions` · example — Distinct continuous functions can share one germ, but equal germs everywhere force equality
- `ex-empty-space-unique-sheaf-sections` · example — The empty space has a unique sheaf section over the empty open set

### `schemes-subschemes-and-morphisms-locally-of-finite-type` — Schemes Subschemes and Morphisms Locally of Finite Type (33 item(s))

- `def-classical-algebraic-prevariety-regular-maps-and-varieties` · definition — Classical algebraic prevarieties, regular maps, and varieties
- `def-scheme` · definition — Schemes as affine-locally locally ringed spaces
- `def-affine-open-subscheme` · definition — Affine open subschemes
- `lem-intersection-affine-opens-covered-principal-opens` · lemma — Intersections of affine opens admit principal affine covers
- `thm-gluing-affine-schemes` · theorem — Gluing affine schemes along compatible open isomorphisms
- `def-morphism-of-schemes` · definition — Morphisms of schemes
- `thm-morphisms-into-affine-scheme-global-sections` · theorem — Morphisms to an affine scheme and global sections
- `lem-morphism-schemes-local-on-source-target` · lemma — Morphisms of schemes are local on compatible open covers
- `def-scheme-over-base` · definition — Schemes and morphisms over a base scheme
- `def-open-immersion-schemes` · definition — Open immersions of schemes
- `lem-open-immersion-monomorphism` · lemma — Open immersions are monomorphisms
- `def-quasi-compact-and-quasi-separated-scheme` · definition — Quasi-compact and quasi-separated schemes
- `thm-affine-schemes-quasi-separated` · theorem — Affine schemes are quasi-separated
- `def-ideal-sheaf` · definition — Ideal sheaves on a scheme
- `def-quasi-coherent-ideal-sheaf` · definition — Quasi-coherent ideal sheaves
- `def-closed-immersion-schemes` · definition — Closed immersions of schemes
- `thm-affine-closed-immersions-quotient-rings` · theorem — Closed immersions into affine schemes are quotient spectra
- `thm-quasi-coherent-ideal-closed-subscheme-correspondence` · theorem — Quasi-coherent ideals and closed subschemes
- `def-reduction-of-scheme` · definition — The reduction of a scheme
- `thm-reduction-universal-property` · theorem — Universal property of scheme reduction
- `def-irreducible-component-scheme` · definition — Irreducible components with reduced induced scheme structure
- `def-integral-scheme` · definition — Integral schemes
- `def-locally-noetherian-and-noetherian-scheme` · definition — Locally Noetherian and Noetherian schemes
- `def-locally-finite-type-and-finite-type-morphism` · definition — Locally finite type and finite type morphisms
- `def-locally-finite-presentation-morphism` · definition — Locally finite presentation morphisms
- `lem-finite-type-local-on-source-and-target` · lemma — Finite type is affine-local on source and target
- `def-quasi-compact-and-quasi-separated-morphism` · definition — Quasi-compact and quasi-separated morphisms
- `def-affine-overlap-separation-condition` · definition — Affine-overlap separation condition
- `def-variety-scheme-theoretic` · definition — Scheme-theoretic varieties
- `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` · theorem — Irreducible classical varieties and integral separated finite-type schemes
- `def-scheme-theoretic-image` · definition — Scheme-theoretic image
- `thm-scheme-theoretic-image-quasi-compact-morphism` · theorem — Scheme-theoretic image of a quasi-compact morphism
- `rem-topological-versus-scheme-theoretic-subspace` · remark — A support does not determine its scheme structure

### `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` — Schemes Subschemes and Morphisms Locally of Finite Type — Examples (9 item(s))

- `ex-projective-line-by-gluing-affines` · example — The projective line from two affine charts
- `ex-doubled-origin-nonseparated-scheme` · example — The affine line with doubled origin
- `ex-closed-subscheme-double-origin-point` · example — Two infinitesimal structures at the origin
- `ex-reduction-dual-numbers` · example — Reduction of the dual-number point
- `cex-closed-subset-does-not-determine-closed-subscheme` · counterexample — A closed subset has many scheme structures
- `ex-affine-n-space-over-arbitrary-base` · example — Affine n-space over an arbitrary base
- `cex-locally-finite-type-not-finite-type` · counterexample — An infinite disjoint union is locally but not globally finite type
- `cex-finite-type-not-finite-presentation-nonnoetherian-base` · counterexample — Finite type need not mean finite presentation
- `ex-scheme-theoretic-image-dense-open-immersion` · example — The scheme-theoretic image of a dense open immersion

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d1aa912ac24bd97a0460a351 · `lem-depth-radical-invariance-via-ext`** (from group f, gap-a-reader-closes) — The stated hypotheses allow arbitrary ideals I,J, but its sole depth/Ext dependency, cor-depth-as-first-nonzero-ext, requires the ideal to lie in the Jacobson radical. The proof instead invokes an unlisted “standard finite-filtration Ext devissage”; the claim may be standard, but the supplied proof does not discharge this hypothesis/citation mismatch.
- **s8a-9420e482f9d7c30727202ca9 · `cor-one-regular-system-of-parameters-implies-cohen-macaulay`** (from group f, gap-a-reader-closes) — The statement uses “a system of parameters for M,” but its listed definition def-system-of-parameters-and-parameter-ideal defines systems only for a local ring R, not finite modules. The appropriate module convention is supplied by thm-dimension-and-parameters-for-modules but is not cited here.
- **s8a-27abc7a018265ebf06ec2b1a · `presheaves-sheaves-stalks-and-sheafification`** (from group f, would-be-fatal) — The declared prerequisite page plane-curves-local-intersection-multiplicity-and-bezout-examples is absent from library/. A repository search found only planning/current-run task references, so that required published dependency could not be read.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-32`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
