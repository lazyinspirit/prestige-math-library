---
id: def-split-banach-submanifold
kind: definition
title: Split Banach submanifold
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, def-complemented-subspace, def-linear-subspace, def-subspace-topology-top, cor-finite-dimensional-subspaces-are-complemented]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11 (regular values as onto with complemented kernel)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Let $k \ge 1$, let $M$ be a $C^k$ Banach manifold modelled on the real Banach
space $E$ ([[def-countable-base-banach-manifold-and-smooth-map]]), and let
$S \subseteq M$ be a subset. Then $S$ is a **split $C^k$ submanifold of $M$**
when for every $p \in S$ there are

* a chart $(\varphi,U)$ of $M$ with $p \in U$, and
* a decomposition $E = E_0 \oplus E_1$ of the model space into two closed
  subspaces with bounded coordinate projections
  ([[def-complemented-subspace]], [[def-linear-subspace]]),

such that

$$\varphi[U \cap S] = \varphi[U] \cap \bigl(E_0 \oplus \{0\}\bigr) .$$

In other words, in the chart the submanifold is exactly the slice of the open
set $\varphi[U]$ cut out by setting the $E_1$-coordinate equal to zero. The
subspace topology on $S$ ([[def-subspace-topology-top]]) carries the resulting
componentwise $C^k$ structure: the charts $(\varphi|_{U \cap S},U \cap S)$ take
values in open subsets of the local space $E_0$, and their transition maps are
restrictions of the $C^k$ transition maps of $M$. On an overlap, the derivative
of such a transition map is a bounded linear isomorphism between the two local
model spaces. Hence the isomorphism type of $E_0$ is locally constant on $S$,
and every connected component of $S$ is a $C^k$ Banach manifold modelled on one
fixed representative of that type. Different components need not have
isomorphic model spaces; without an additional uniform-model hypothesis, $S$
as a whole need not be modelled on one Banach space in the global convention of
[[def-countable-base-banach-manifold-and-smooth-map]].

For $p \in S$ the **tangent space** $T_pS$ is the tangent space of the component
of $S$ containing $p$, and the differential of the inclusion identifies it
with a subspace of $T_pM$.

## Remarks

- **Splitness is a local condition, and the complement is part of the local
  data.** The definition does not assert that an arbitrary closed subspace of a
  Banach space is a submanifold of it: the complement $E_1$ is produced along
  with the chart, and the companion page exhibits a closed subspace $c_0$ of
  $\ell^\infty$ that is not complemented in it. For a closed subspace
  $E_0 \le E$ with $E$ second countable, the split charts with $M = E$ and
  $\varphi = \mathrm{id}$ exist exactly when $E_0$ is complemented in $E$; for
  $E = \ell^\infty$ the ambient is not a Banach manifold in the library's
  sense, so the example separates closedness from complementedness at the level
  of Banach spaces rather than exhibiting a split-submanifold failure for a
  Banach manifold.

- **The local model can vary between components.** For example,
  $\{0\} \cup (1,2) \subseteq \mathbb R$ satisfies the slice condition, with
  local model $\{0\}$ at the isolated point and $\mathbb R$ on the interval.
  Thus it is split in the componentwise sense above, but it is not modelled on
  one fixed Banach space.

- **The tangent space of a split submanifold is complemented.** In a chart at
  $p$ the tangent space of $S$ corresponds to $E_0$ and that of $M$ to $E$, so
  the inclusion $T_pS \to T_pM$ is, in that chart, the inclusion of the
  complemented subspace $E_0$ into $E$. This is why the regular value theorem
  below demands a complemented kernel rather than mere surjectivity of the
  derivative.

- **Automatic cases.** Assuming the Axiom of Choice ([[def-axiom-of-choice]]), if $E_0$ is finite dimensional or of finite codimension
  in $E$, then every closed subspace of that kind is complemented, so the only
  obstruction to splitness in these cases is the local product structure of $S$
  itself ([[cor-finite-dimensional-subspaces-are-complemented]]). In particular
  finite-dimensional level sets of submersions are split when the
  derivative is surjective and the stated choice premise holds.
