# `frontier-10` — amendments to published pages, staged not applied

**Status: STAGED, NOT APPLIED.** The group-actions pair is already published,
but all 47 additions below remain `status: draft`. Applying either list before
the publishing commit would expose drafts on a published page and trigger
`draft-on-published-page`. The orchestrator applies the lists and A-page summary
only in the commit that publishes `frontier-10`, together with the item status
flips and owner-audit metadata.

The two published page files were not edited during step 5.

## Re-home record — already applied at step 4; do not reapply

The owner-approved re-home recorded in `research/frontier-10-rehomed.json` moved
`def-finite-sum-in-a-commutative-monoid` and
`lem-finite-sum-reindexing-and-fubini`, in that order, from
`incidence-algebras-and-mobius-inversion` to
`rings-subrings-and-integral-domains`. Both the published page lists and
`research/plan-spec.json` were updated together at step 4 because deferring that
move made plan validation fail. This is the durable amendment record for the
move; there is no pending re-home edit for the publishing commit.

## `group-actions-and-cayleys-theorem` — staged `items:` list

Retain the six published IDs in their current order and append the 31 new IDs in
the step-3/4 adjudicated reading order:

```yaml
items: [def-group-action,
        thm-group-actions-correspond-to-homomorphisms,
        def-orbit-and-stabilizer,
        lem-stabilizer-is-a-subgroup,
        thm-orbits-partition-the-set,
        thm-cayleys-theorem,
        def-equivariant-map-of-group-actions,
        def-free-group-action,
        def-fixed-point-sets-of-a-group-action,
        thm-orbit-stabilizer,
        cor-orbit-stabilizer-cardinality,
        lem-stabilizers-in-one-orbit-are-conjugate,
        def-core-of-a-subgroup,
        lem-core-is-largest-normal-subgroup-contained,
        thm-left-coset-action-and-its-kernel,
        thm-finite-index-core-bound-and-finite-overgroups,
        thm-transitive-actions-are-coset-actions,
        cor-faithful-transitive-actions-are-core-free-coset-actions,
        def-conjugacy-class-and-centralizer,
        def-normalizer-of-a-subgroup,
        lem-centralizers-and-normalizers-are-subgroups,
        thm-conjugacy-class-cardinality,
        thm-conjugate-subgroups-are-counted-by-the-normalizer,
        thm-conjugates-of-proper-subgroup-do-not-cover-finite-group,
        thm-class-equation,
        def-finite-p-group,
        lem-subgroups-of-finite-p-groups-are-p-groups,
        cor-index-p-subgroups-of-finite-p-groups-are-normal,
        thm-p-group-fixed-point-congruence,
        cor-p-group-action-has-a-fixed-point,
        thm-nontrivial-center-of-a-finite-p-group,
        lem-cyclic-quotient-by-center-implies-abelian,
        cor-groups-of-order-p-squared-are-abelian,
        thm-normal-subgroups-of-finite-p-groups-meet-the-center,
        thm-cauchys-theorem-for-finite-groups,
        thm-cauchy-frobenius-orbit-counting,
        thm-jordans-derangement-theorem]
```

### Staged replacement A-page summary

Replace the current summary body with exactly these two nonempty prose
paragraphs. Each is under 150 words.

```markdown
A group action turns the elements of a group into symmetries of a set. Groups,
homomorphisms, kernels, quotient groups and isomorphisms supply the declared
algebraic prerequisites, while symmetric groups turn actions into permutation
representations. Subgroups and cosets provide stabilisers and orbit models;
normal subgroups and the isomorphism theorems control action kernels. Finite
cardinality, index, Lagrange's theorem and elementary counting support the
finite results.

Equivariant maps, free actions and fixed-point sets lead to orbit–stabiliser,
coset actions, cores and the classification of transitive actions. Conjugation
then yields centralisers, normalisers, conjugacy-class counts, the non-covering
theorem and the class equation. For finite $p$-groups, orbit decomposition gives
the fixed-point congruence, index-$p$ normality, nontrivial centres, the
order-$p^2$ theorem, central intersection for normal subgroups and Cauchy's
theorem. Double-counting fixed pairs closes the page with Cauchy–Frobenius orbit
counting and Jordan's derangement theorem, while Cayley's theorem remains the
regular-action case.
```

## `group-actions-and-cayleys-theorem-examples` — staged `examples:` list

Keep `items: []`. Retain the existing published example first and append the 16
new examples and counterexamples in adjudicated order:

```yaml
examples: [ex-trivial-action-of-z-two-is-not-faithful,
           ex-left-regular-action-is-free-and-transitive,
           cex-faithful-transitive-action-need-not-be-free,
           cex-free-action-need-not-be-transitive,
           ex-rotations-of-a-square-on-its-vertices,
           ex-nonfaithful-coset-action-of-z-six,
           ex-class-equation-of-s-three,
           cex-s-three-has-trivial-center,
           ex-class-equation-of-the-dihedral-group-of-order-eight,
           cex-groups-of-order-p-cubed-need-not-be-abelian,
           ex-conjugate-subgroups-and-normalizers-in-s-three,
           ex-fixed-point-congruence-for-an-action-of-z-two,
           cex-fixed-point-congruence-fails-without-p-group-hypothesis,
           cex-cauchys-theorem-does-not-extend-to-composite-divisors,
           ex-two-colourings-of-a-square-up-to-dihedral-symmetry,
           ex-binary-necklaces-of-length-four,
           cex-orbit-count-is-not-set-size-divided-by-group-order]
```

The B page has no authored summary body and must keep none.

## If this is not applied

The 47 draft items will exist on disk but remain absent from both rendered page
lists. Nothing already published will break, but the enrichment will be
invisible and unreachable from the library's reading order.
