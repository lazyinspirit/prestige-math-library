## Your cluster — `vfy-batch-5`: batch 5 — universal properties and the Yoneda lemma (order 361)

Your artifact is **`research/frontier-11-batch-5.proof-contracts.json`**.
The items are under `items/<id>.md` and are **frozen** — read them, never edit.

79 citation quotes were rewritten here, and the Yoneda pair was one of the three
named sites of truncated quotes. Category-theoretic facts are especially prone to
a quote that stops before the variance or the naturality clause — and in this
subject the dropped clause is usually the whole content. Check variance
(covariant vs contravariant, $\mathcal C(a,-)$ vs $\mathcal C(-,a)$) in every
quote you check.

Rule explicitly on the `iff` rows of
`cor-representable-presheaves-detect-isomorphism-of-objects` and
`thm-universal-arrows-are-initial-or-terminal-in-comma-categories`: both are
genuine biconditionals whose `iff-forward`/`iff-reverse` rows were
`not_applicable` and are now `checked`. Confirm the newly named steps really
prove the two directions separately.

### Priority items — rule on each of these explicitly

- `cor-representable-presheaves-detect-isomorphism-of-objects`
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`
- `ex-set-products-as-representing-objects`
- `cor-contravariant-yoneda-lemma`
- `ex-yoneda-lemma-for-a-monoid-action`

### Every row changed in the repair round, by item

These are the rows the Beta changed. Each is a claim that the row is now true of
the frozen item text. Work down the list; report coverage honestly and do not
extrapolate to rows you did not open.

- `cex-the-doubling-functor-on-set-is-not-representable`
    - quotes changed: F1<-def-functor-and-contravariant-functor (uses 1.1); F2<-def-union-of-a-set-and-binary-union (uses 1.1,1.3); F2<-lem-unions-and-intersections-of-small-families (uses 1.1,1.3); F3<-def-ordered-pair (uses 1.1,1.3); F3<-def-natural-numbers (uses 1.1,1.3); F4<-def-the-set-of-functions-from-one-set-to-another (uses 1.2); F4<-def-function (uses 1.2); F5<-def-presheaf-representable-functor-and-representation (uses 2.1,3.1)
    - boundary rows changed: empty[checked], zero[not_applicable], one[checked], degenerate[checked]
- `cor-contravariant-yoneda-lemma`
    - quotes changed: L1<-thm-yoneda-lemma-is-natural-in-both-variables (uses 1.1,1.2); F1<-def-opposite-category (uses 1.1,1.2)
- `cor-representable-presheaves-detect-isomorphism-of-objects`
    - quotes changed: L1<-thm-yoneda-embedding-is-fully-faithful (uses 1.1,1.2,2.1)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `ex-free-group-universal-property-as-a-representation`
    - quotes changed: F1<-def-free-group (uses 1.1,2.1); L2<-thm-free-groups-unique-up-to-unique-isomorphism (uses 3.1); F4<-def-presheaf-representable-functor-and-representation (uses 3.1)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked]
- `ex-free-monoid-universal-property-as-a-representation`
    - quotes changed: F1<-def-semigroup-and-monoid (uses 1.1); F2<-def-group-homomorphism (uses 1.2,2.1,2.2,3.1,4.1); F3<-def-category (uses 1.2); F3<-def-small-locally-small-and-large-category (uses 1.2); F4<-def-functor-and-contravariant-functor (uses 1.2,2.1); F4<-def-the-set-of-functions-from-one-set-to-another (uses 1.2,2.1); F5<-def-monoid-finite-product (uses 1.3,2.2); F5<-thm-generalised-associativity (uses 1.3,2.2); F7<-def-presheaf-representable-functor-and-representation (uses 5.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-function-sets-as-exponential-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-def-the-set-of-functions-from-one-set-to-another (uses 1.1,1.2,2.1); F5<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], degenerate[checked]
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`
    - quotes changed: F2<-def-polynomial-ring-over-a-commutative-ring (uses 1.2,1.3,2.2,3.1); L2<-lem-integer-multiples-in-a-ring (uses 1.2,1.3,1.4,2.1); F3<-def-ring-homomorphism (uses 1.4,3.1,4.1); F4<-def-monoid-finite-product (uses 1.2,1.4,2.1,2.2); F4<-thm-generalised-associativity (uses 1.2,1.4,2.1,2.2); L3<-lem-finite-sum-reindexing-and-fubini (uses 1.3,2.1,3.1); F5<-def-presheaf-representable-functor-and-representation (uses 5.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked]
- `ex-representable-presheaf-on-a-poset`
    - quotes changed: F3<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked]
- `ex-set-coproducts-as-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-lem-unions-and-intersections-of-small-families (uses 1.2,2.2); F4<-def-ordered-pair (uses 1.2,2.2); F4<-def-natural-numbers (uses 1.2,2.2)
    - boundary rows changed: empty[checked], zero[not_applicable], one[not_applicable], degenerate[checked]
- `ex-set-products-as-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F4<-def-function (uses 1.2,2.1,2.2)
    - boundary rows changed: empty[checked], degenerate[checked]
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`
    - quotes changed: F1<-def-topological-space (uses 1.1); F2<-def-continuous-map-top (uses 1.1); F4<-def-presheaf-representable-functor-and-representation (uses 4.1); F5<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], zero[not_applicable], one[checked], degenerate[checked]
- `ex-two-singletons-are-canonically-isomorphic-representing-objects`
    - quotes changed: F2<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-def-function (uses 1.1,2.1,4.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-yoneda-embedding-of-the-walking-arrow-category`
    - quotes changed: F1<-def-category (uses 2.1,2.2,4.1,5.1); F2<-def-yoneda-embedding (uses 2.1,2.2); L1<-thm-yoneda-embedding-is-fully-faithful (uses 4.1); F3<-def-function (uses 2.1,2.2,3.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-yoneda-lemma-for-a-monoid-action`
    - quotes changed: F1<-def-semigroup-and-monoid (uses 1.1,3.1); L2<-thm-yoneda-lemma-is-natural-in-both-variables (uses 4.1); F3<-def-natural-transformation (uses 2.1)
- `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves`
    - quotes changed: L1<-cor-representable-presheaves-detect-isomorphism-of-objects (uses 3.1); L2<-thm-yoneda-embedding-is-fully-faithful (uses 2.1)
- `fs-yoneda-lemma-requires-a-small-category`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 2.1); F1<-def-small-locally-small-and-large-category (uses 1.1)
- `lem-yoneda-evaluation-bijection`
    - quotes changed: F1<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,2.1,2.3); F2<-def-natural-transformation (uses 1.1,2.1,2.3)
    - boundary rows changed: nonempty-choice[checked]
- `prop-initial-and-terminal-objects-as-representations`
    - quotes changed: F2<-def-presheaf-representable-functor-and-representation (uses 1.1,1.2,1.3)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked], iff-forward[checked], iff-reverse[checked]
- `thm-hom-assignment-is-a-bifunctor`
    - quotes changed: F1<-def-product-category (uses 1.2,1.3); F2<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,1.3)
- `thm-hom-assignments-are-functors`
    - quotes changed: F1<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,1.3,1.4); F2<-def-functor-and-contravariant-functor (uses 2.1)
- `thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`
    - quotes changed: F2<-def-isomorphism-groupoid-and-connected-category (uses 2.1)
- `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`
    - quotes changed: F1<-def-isomorphism-groupoid-and-connected-category (uses 3.1,4.1)
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`
    - quotes changed: F1<-def-universal-arrow-to-and-from-a-functor (uses 1.1,1.2); F2<-def-comma-slice-and-coslice-categories (uses 1.1,1.2)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-universal-elements-and-universal-factorisations`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 1.1); L2<-thm-yoneda-lemma-is-natural-in-both-variables (uses 3.1); L3<-cor-contravariant-yoneda-lemma (uses 1.2,3.1); F1<-def-universal-element (uses 1.1,1.2,2.1)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`
    - quotes changed: F1<-def-category-of-elements (uses 1.1,1.2)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-yoneda-embedding-is-fully-faithful`
    - quotes changed: L1<-cor-contravariant-yoneda-lemma (uses 1.1); F1<-def-yoneda-embedding (uses 1.1)
- `thm-yoneda-lemma-is-natural-in-both-variables`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 1.1,1.2,1.3); L2<-thm-hom-assignment-is-a-bifunctor (uses 1.1); F1<-def-natural-transformation (uses 1.2); F2<-def-vertical-composition-of-natural-transformations (uses 1.3)
