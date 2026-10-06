---
page: pontryagin-duality-for-locally-compact-abelian-groups
title: "Pontryagin Duality for Locally Compact Abelian Groups"
status: draft
items: [def-annihilator-of-a-subgroup,
        lem-local-compact-subgroups-of-hausdorff-groups-are-closed,
        lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca,
        lem-compact-open-subgroups-in-totally-disconnected-lca-groups,
        lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index,
        lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean,
        thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator,
        thm-principal-structure-theorem-for-lca-groups,
        lem-continuous-characters-separate-points-of-an-lca-group,
        lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group,
        lem-lca-transform-range-is-dense-in-ltwo-of-the-dual,
        thm-plancherel-theorem-for-lca-groups,
        cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases,
        lem-positive-compactly-supported-transform-bump-on-the-dual,
        thm-pontryagin-biduality,
        lem-annihilator-reverses-inclusion-and-double-annihilator-closes,
        thm-compact-discrete-duality-for-lca-groups,
        lem-character-extension-from-a-closed-subgroup-of-an-lca-group,
        thm-dual-of-a-closed-subgroup-is-the-dual-quotient,
        lem-biduality-is-stable-under-products-closed-subgroups-and-quotients,
        cor-pontryagin-duality-is-a-contravariant-involution]
examples: []
---

This page completes the duality theory of locally compact Hausdorff abelian
groups whose topology interface was built on the prerequisite page on
character groups and elementary duals. All groups here are written additively,
characters take values in the multiplicative circle $\mathbb T$, and the dual
carries pointwise multiplication and the compact-open topology.

The analytic content begins with the completion of Plancherel theory for an LCA
group. The isometric extension of the Fourier transform supplied by the
prerequisite page is shown to have dense range: orthogonality to the range
forces a finite regular measure on the dual to vanish by the
Fourier-Stieltjes uniqueness theorem, and density together with closedness of
the range upgrades the isometry to a unitary operator. The next steps
localise the transform: compact sets of the dual control neighbourhoods on the
group through explicit sets measuring uniform closeness on compact sets, a
compactly supported nonnegative bump of the transform is constructed from
inverse square-integrable transforms, and the evaluation map of the group into
its bidual is shown to be continuous, injective and open onto its image.

Biduality is then assembled from these ingredients without circularity: if the
closed image of the evaluation map were proper, a bump supported away from the
image would have vanishing inverse Fourier-Stieltjes transform, contradicting
the positivity of the bump; so the evaluation map is a topological isomorphism.
The calculus that follows uses only this theorem and the quotient-dual
identification: annihilators reverse inclusions, the double annihilator closes
a subgroup, characters of a closed subgroup extend to the ambient group, the
dual of a closed subgroup is the dual quotient, and dualisation is a
contravariant involution that preserves finite products, closed subgroups and
quotients. Compactness and discreteness are exchanged by duality, and the
compact and discrete Plancherel identities are the two extreme special cases.

The structure theory on this page records the principal structure theorem: an
LCA group contains an open subgroup of the form $\mathbb R^n\times W$ with
$W$ compact. Its proof is routed through the classification of compactly
generated LCA groups, quoted from Hewitt-Ross Theorem 9.8 through the
author-hosted article at the recorded locator, together with two local
reductions that find an open compactly generated subgroup with no open
subgroup of infinite index and split it. The Axiom of Choice and Dependent
Choice are declared on the items that use them and propagated to consumers;
the annihilator definition, the totally disconnected compact-open subgroup
basis, the quotient-local-compactness lemma and the closed subgroup support
lemma are choice-free. The companion examples page carries the Euclidean
annihilator computations, the concrete bidual maps on $\mathbb Z$ and
$\mathbb T$, and the counterexample showing that the compact-open topology
cannot be replaced by the discrete topology without destroying biduality.
