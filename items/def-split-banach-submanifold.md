---
id: def-split-banach-submanifold
kind: definition
title: Split Banach submanifold
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, def-complemented-subspace, def-linear-subspace, def-subspace-topology-top, cor-finite-dimensional-subspaces-are-complemented]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11 (regular values as onto with complemented kernel)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
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
subspace topology on $S$ ([[def-subspace-topology-top]]) then makes $S$ a
$C^k$ Banach manifold modelled on $E_0$: the charts $(\varphi|_{U \cap S},
U \cap S)$ take values in the open subsets $\varphi[U] \cap E_0$ of $E_0$, and
their transition maps are restrictions of the $C^k$ transition maps of $M$.
For $p \in S$ the **tangent space** $T_pS$ is the tangent space of this induced
manifold, and the differential of the inclusion identifies it with a subspace
of $T_pM$.

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

- **The tangent space of a split submanifold is complemented.** In a chart at
  $p$ the tangent space of $S$ corresponds to $E_0$ and that of $M$ to $E$, so
  the inclusion $T_pS \to T_pM$ is, in that chart, the inclusion of the
  complemented subspace $E_0$ into $E$. This is why the regular value theorem
  below demands a complemented kernel rather than mere surjectivity of the
  derivative.

- **Automatic cases.** If $E_0$ is finite dimensional or of finite codimension
  in $E$, then every closed subspace of that kind is complemented, so the only
  obstruction to splitness in these cases is the local product structure of $S$
  itself ([[cor-finite-dimensional-subspaces-are-complemented]]). In particular
  finite-dimensional level sets of submersions are automatically split when the
  derivative is surjective.
