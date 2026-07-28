---
id: ex-the-diagonal-in-the-cofinite-and-cocountable-topologies
kind: example
title: "The cofinite topology on an infinite set, and the cocountable topology on $\\mathbb{R}$, are $T_1$ with a diagonal whose closure is the whole square; on a countably infinite set the cocountable topology is discrete instead"
status: draft
origin: session
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-product-topology, def-topology-basis-subbasis, def-hausdorff-space,
       thm-closure-characterisation-top, def-countable, lem-subset-of-countable,
       fs-unique-sequential-limits-imply-hausdorff, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the diagonal in the cofinite and cocountable topologies"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Standard topologies are as in [[def-standard-topologies]], diagonals as in
[[def-the-diagonal-of-a-space]], and every square carries the product topology
([[def-product-topology]]).

1. **Cofinite, on an infinite set.** Let $X$ be infinite ([[def-countable]]) and
   give it the cofinite topology $\mathcal{T}_{\mathrm{cof}}$. Then
   $(X, \mathcal{T}_{\mathrm{cof}})$ is $T_1$ ([[def-t0-and-t1-spaces]]), no two
   nonempty open sets are disjoint,
   $$\overline{\Delta_X} \;=\; X \times X \;\ne\; \Delta_X ,$$
   so $\Delta_X$ is not closed and the space is not Hausdorff.
2. **Cocountable, on $\mathbb{R}$.** Give $\mathbb{R}$ the cocountable topology
   $\mathcal{T}_{\mathrm{coc}}$. The same three conclusions hold:
   $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is $T_1$, no two nonempty open sets
   are disjoint, and $\overline{\Delta_{\mathbb{R}}} = \mathbb{R} \times
   \mathbb{R} \ne \Delta_{\mathbb{R}}$.
3. **"Infinite" is the wrong hypothesis for the cocountable half.** If $Z$ is
   countably infinite then $\mathcal{T}_{\mathrm{coc}}$ on $Z$ is the **discrete**
   topology, which is Hausdorff and whose diagonal is therefore closed. So clause
   2 must be asserted of a set large enough that a cocountable set is a genuine
   restriction, and $\mathbb{R}$ is such a set; an arbitrary infinite set is not.

In every case the verdict on the diagonal matches
[[thm-hausdorff-iff-the-diagonal-is-closed]], as it must.

## Facts & Assumptions

**Given:** An infinite set $X$ with the cofinite topology; $\mathbb{R}$ with the cocountable topology; a countably infinite set $Z$ with the cocountable topology; and each square with the product topology.

[A1] The cofinite topology consists of $\varnothing$ together with the sets of finite complement, and its closed sets are the whole set together with the finite subsets; the cocountable topology consists of $\varnothing$ together with the sets of at most countable complement, and its closed sets are the whole set together with the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open form a basis for the product topology on a square, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A3] A subset of a finite set is finite and a union of two finite sets is finite, both discharged in [[def-standard-topologies]]; a set with at most one element is equinumerous with $0$ or with $1$ and hence finite, so an infinite set has at least two distinct elements ([[def-countable]]).

[L1] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L2] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

[L3] A space is Hausdorff exactly when its diagonal is closed in its square ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[def-hausdorff-space]]).

[L4] In the cocountable topology on $\mathbb{R}$ no two nonempty open sets are disjoint, so that space is not Hausdorff ([[fs-unique-sequential-limits-imply-hausdorff]]).

[L5] A subset of an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]]).

## Verification

**Proof technique:** direct.

1.1 Every singleton of $X$ is finite, hence closed in $\mathcal{T}_{\mathrm{cof}}$, so $(X, \mathcal{T}_{\mathrm{cof}})$ is $T_1$; every singleton of $\mathbb{R}$ is finite, hence at most countable, hence closed in $\mathcal{T}_{\mathrm{coc}}$, so $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is $T_1$. [A1, A3, L1]

1.2 No two nonempty $U, V \in \mathcal{T}_{\mathrm{cof}}$ are disjoint: $X \setminus U$ and $X \setminus V$ are finite by [A1], so $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is finite by [A3], and $X$ is infinite, so $U \cap V \ne \varnothing$. [A1, A3]

1.3 No two nonempty members of $\mathcal{T}_{\mathrm{coc}}$ on $\mathbb{R}$ are disjoint. [L4]

1.4 Each of $X$ and $\mathbb{R}$ has two distinct points, $X$ being infinite and $\mathbb{R}$ containing $0$ and $1$. [A3]

1.5 Every subset of the countably infinite $Z$ is at most countable by [L5], so every subset of $Z$ has at most countable complement and is therefore open in $\mathcal{T}_{\mathrm{coc}}$; thus $\mathcal{T}_{\mathrm{coc}}$ on $Z$ is the discrete topology. [A1, L5]

2.1 Let $(Y, \mathcal{T})$ be either $(X, \mathcal{T}_{\mathrm{cof}})$ or $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$, and let $z \in Y \times Y$ and $U \times W$ be a basic open box containing $z$; then $U \ni z_0$ and $W \ni z_1$ are nonempty open, so $U \cap W \ne \varnothing$ by step 1.2 or step 1.3, and any $t \in U \cap W$ gives $(t,t) \in (U \times W) \cap \Delta_Y$. [step 1.2, step 1.3, A2]

2.2 For distinct $p, q \in Y$ the point $(p,q)$ lies in $Y \times Y$ and not in $\Delta_Y$, so $\Delta_Y \ne Y \times Y$. [step 1.4]

3.1 By step 2.1 and [L2] every point of $Y \times Y$ lies in $\overline{\Delta_Y}$, so $\overline{\Delta_Y} = Y \times Y$, which by step 2.2 differs from $\Delta_Y$; hence $\Delta_Y$ is not closed and by [L3] $Y$ is not Hausdorff. This is claims 1 and 2, together with step 1.1. [step 1.1, step 2.1, step 2.2, L2, L3]

4.1 Distinct $p, q \in Z$ are separated by the disjoint open sets $\{p\}$ and $\{q\}$, so $(Z, \mathcal{T}_{\mathrm{coc}})$ is Hausdorff and by [L3] its diagonal is closed in $Z \times Z$; this is claim 3, and with step 3.1 the example is verified. [step 3.1, step 1.5, L3] ∎

## Remarks

- **Why clause 3 is stated rather than left implicit.** The cofinite and the cocountable topologies behave alike only when the underlying set is large enough for the excluded sets to be a genuine restriction. On a countably infinite set "at most countable complement" excludes nothing, so the cocountable topology collapses to the discrete one and every conclusion of clause 2 reverses. Stating the two clauses with the same hypothesis would be a falsehood, and the falsehood is invisible unless the degenerate case is written out.

- **The closure of the diagonal is as large as it can be.** In both spaces of clauses 1 and 2 it is the entire square, so the diagonal is not merely non-closed: it is dense. That is the extreme opposite of the metric picture of [[ex-the-diagonal-of-the-real-line-is-closed]], where the diagonal is closed and its complement is open.

- **$T_1$ is doing no work here.** Both spaces satisfy $T_1$ and neither satisfies $T_2$, which is exactly the separation between the two axioms; the diagonal criterion detects the second and is blind to the first, since it is a statement about the square rather than about singletons.
