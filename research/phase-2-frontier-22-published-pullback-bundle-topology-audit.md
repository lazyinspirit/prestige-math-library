# Frontier-22 published pullback-bundle topology audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Disposition |
|---|---|---|
| `def-product-topology` | `1038a007ccebf2ec84ca395cd956a62840aed240f8c6c36e1edfda27a1adb9a8` | clear |
| `thm-product-of-countable` | `c88623fbdf039bd36d1752d276afc64020c8853375fc678ff9f61e1849e8e02f` | clear |
| `prop-second-countability-is-hereditary` | `63d1abfb80c5fb354c382b2fac91858bb310a4615d15abc81ca4d74bdb01e176` | clear |
| `lem-t0-t1-and-hausdorff-are-hereditary` | `698463e6abcde079ce4b739dce3c49da2b5ed596e55c1469b37552ac629401c0` | clear |
| `def-quotient-topology` | `637644b0f7c52efe8472e8cb80a38f9736bf906c73a03108bc1571d5ab92ef7e` | clear |
| `lem-open-or-closed-surjection-is-quotient` | `925089bc7d8603b917053ec31f3dc81a123f0f487d8fa5c4aab92070412a4351` | clear |
| `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` | `fd0d3b823a8058fb72d6be817254a2e1a6aa18e52184f30542fd6af0944d791e` | clear |
| `def-pullback-vector-bundle-as-a-fibre-product` | `5512aeb802ff7f729ee44d1a34009015decc8f5af8c208e094b0815dec694f03` | clear |
| `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` | `b895f302602aedae63682a70add8c34f91317a232e6eae85249df4556e522bbd` | A-P |

All nine complete targets and the exact product, subspace, manifold, bundle and
quotient clauses used by the active Hom and pullback constructions were read.
Every exact ID was searched in the complete canonical ledger and in each
classification section. Product/box topology, finite products of countable
bases, hereditary second countability/Hausdorffness, quotient topology,
open-surjection quotients, pullback fibre products, pulled-back chart topology
and unproved total-space manifold mechanisms were also searched. None of the
nine targets had a classification row or item-specific defect finding. The new
pullback finding is distinct from the existing Hom-bundle A-P item: these are
different total-space sets, constructions and consumer paths, though both omit
the same kind of manifold-topology verification.

## Bounded clear dispositions

The product set, projections, box basis, finite-support product basis and empty
product are correctly defined. The definition distinguishes finite choice from
the arbitrary-product form of AC. Two fixed at-most-countable sets have an
at-most-countable product: choosing the two supplied enumerations is only a
finite existential use, and pairing gives an explicit enumeration. Finite
products of smooth manifolds inherit Hausdorffness and a countable product
basis; the two fixed basis witnesses again need no choice axiom. Subspaces
inherit Hausdorffness and second countability by tracing open sets and bases.

The quotient topology is the exact final topology of a surjection and its open
sets correspond to saturated open subsets of the domain. A continuous open or
closed surjection, or a continuous surjection with a continuous section,
satisfies the quotient biconditional. These clauses are adequate for the
already installed choice-free Hom-bundle quotient construction.

The pullback definition correctly forms only the fibre-product set and leaves
its smooth structure to the following theorem. That set-level definition is
sound and makes no independent manifold claim.

Classification: eight new bounded no-repair-needed dispositions.

## Pullback-bundle proof defect

`thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` proof 1.1 constructs
only a bijection

`(f^*E)|_{f^{-1}U_alpha} -> f^{-1}U_alpha x R^r`.

Proof 2.1 computes smooth overlap formulas and immediately concludes that the
pulled-back charts define a smooth vector bundle. Under the published contracts,
a smooth bundle total space must first be a Hausdorff second-countable smooth
manifold. The proof never gives `f^*E` a topology, identifies a proposed topology
with the chart topology, proves those bijections are homeomorphisms, or proves
Hausdorffness and second countability. Smooth overlaps alone do not establish
these global manifold requirements for an arbitrary atlas.

Repair is choice-free. Give `f^*E` the subspace topology from the published
product manifold `N x E`. Hereditary Hausdorffness and second countability supply
the global axioms. For each original bundle chart, the displayed bijection has
inverse

`(q,v) -> (q, Phi_alpha^{-1}(f(q),v))`.

Product and subspace universal properties prove both maps continuous. Its target
is the open manifold `f^{-1}(U_alpha) x R^r`, so these are manifold charts;
the already displayed overlap formula is smooth and fibrewise linear. The
projection to `N` is then smooth and locally the first projection. Add the exact
subspace, hereditary and product-map suppliers and write these steps.

Classification: one new A-P item. Existing published suppliers suffice; no new
Phase-2 pair is needed.

## Current frontier impact

The active draft definitions `def-pullback-connection` and
`def-vector-field-and-section-along-a-smooth-curve` directly consume the
defective existence/smooth-structure clause. The supervising worker was notified
immediately with the exact choice-free local repair. Until that repair is made
explicit in the draft path, this is a mathematical acceptance blocker for those
two clauses. No inference is made about unrelated pullback consumers.

## Limits

This is a complete-target and exact used-interface audit of the nine listed
items, not a whole pullback or bundle census. It does not reclassify the separate
Hom-bundle proof gap and does not claim that every consumer is affected. No
external source was newly consulted, no published item or draft was edited, and
no independent judgment or exhaustive discovery claim is made.
