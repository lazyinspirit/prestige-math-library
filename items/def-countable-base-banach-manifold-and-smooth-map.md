---
id: def-countable-base-banach-manifold-and-smooth-map
kind: definition
title: Countable base Banach manifold and smooth map
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-k-map-between-banach-spaces, def-topological-space, def-hausdorff-space, def-second-countable-space, def-homeomorphism-and-open-maps, def-banach-space, def-metric-topology, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §1.3 and §2.11"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Definition

Let $k \in \mathbb N \cup \{\infty\}$ and let $E$ be a real Banach space
([[def-banach-space]]) with its norm topology ([[def-metric-topology]]).

* A **chart** on a topological space $M$ ([[def-topological-space]]) is a pair
  $(\varphi, U)$ in which $U \subseteq M$ is open and
  $\varphi : U \to \varphi[U] \subseteq E$ is a homeomorphism onto an open
  subset of $E$ ([[def-homeomorphism-and-open-maps]]); $U$ is the **domain** of
  the chart and $\varphi$ its **coordinate map**.
* Two charts $(\varphi,U)$ and $(\psi,V)$ of $M$ with $U \cap V \ne \varnothing$
  are **$C^k$ compatible** when the **transition map**
  $$\psi \circ \varphi^{-1} : \varphi[U \cap V] \to \psi[U \cap V]$$
  is of class $C^k$ ([[def-c-k-map-between-banach-spaces]]) as a map between
  open subsets of $E$. Two charts with disjoint domains are declared compatible.
* An **atlas of class $C^k$** on $M$ is a family of pairwise $C^k$ compatible
  charts whose domains cover $M$, and the space $M$ together with such an atlas
  is a **$C^k$ Banach manifold modelled on $E$** — a **Banach manifold** for
  short — when additionally $M$ is Hausdorff ([[def-hausdorff-space]]) and
  second countable ([[def-second-countable-space]]).

Thus every point of $M$ lies in the domain of a chart: $M$ is locally
homeomorphic to open subsets of the Banach space $E$, and the change of
coordinates between any two charts is a $C^k$ map. The pair (Hausdorff, second
countable) is part of the definition and is never dropped below.

Let $M$ be a $C^k$ Banach manifold modelled on $E$ and $N$ a $C^k$ Banach
manifold modelled on $F$, and let $f : M \to N$ be a map.

* $f$ is of **class $C^k$** when for every chart $(\varphi,U)$ of $M$ and every
  chart $(\psi,V)$ of $N$ the **coordinate representative**
  $$\psi \circ f \circ \varphi^{-1} : \varphi\bigl[U \cap f^{-1}[V]\bigr] \to F$$
  is of class $C^k$ where it is defined, that is on the open set
  $\varphi[U \cap f^{-1}[V]] \subseteq E$.
* $f$ is **smooth** when it is of class $C^\infty$.
* A bijection $f : M \to N$ is a **$C^k$ diffeomorphism** when both $f$ and
  $f^{-1}$ are of class $C^k$; likewise for $C^\infty$.

## Remarks

- **Chart independence of the class of a map is a chain-rule statement.** If
  $(\varphi,U)$, $(\varphi',U')$ are charts of $M$ and $(\psi,V)$,
  $(\psi',V')$ are charts of $N$, then on the open set where both sides are
  defined, $\psi' \circ f \circ \varphi'^{-1}$ equals
  $(\psi' \circ \psi^{-1}) \circ (\psi \circ f \circ \varphi^{-1}) \circ
  (\varphi \circ \varphi'^{-1})$, a composite of $C^k$ transition maps and the
  representative $\psi \circ f \circ \varphi^{-1}$. For $k = 1$ the class is
  therefore independent of the charts by the chain rule
  ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]) —
  the composition of $C^1$ maps is $C^1$ because the chain rule expresses the
  derivative as a product of continuous operator-valued maps
  ([[def-c-k-map-between-banach-spaces]]) — and consequently $C^1$-ness may be
  checked at each point with one pair of charts around it. Nothing below uses
  this independence for $k \ge 2$, and the definition itself quantifies over
  all chart pairs, so no higher-order chain rule is presupposed.

- **The model space is fixed.** Charts take values in one Banach space $E$,
  which may be infinite dimensional; a manifold with a finite-dimensional model
  space is the familiar finite-dimensional case. Two manifolds modelled on
  different Banach spaces are compared by maps whose coordinate
  representatives map open subsets of one model space into the other.

- **Open sets are the basic examples, when the model space is second
  countable.** If $E$ is second countable, then an open subset $W$ of $E$ is a
  $C^\infty$ Banach manifold modelled on $E$ with the single chart
  $(W,\mathrm{id}_W)$: a basis of $E$ restricts to a basis of the subspace $W$,
  and $W$ is Hausdorff because $E$ is. The hypothesis cannot be dropped: for
  $E=\ell^\infty$ and $W=E$ the identity chart covers $E$, but $E$ is not
  second countable — the uncountably many $0$-$1$ sequences are pairwise at
  distance $1$, so any dense subset is uncountable and $E$ is not separable,
  hence not second countable. A map between open subsets of a second countable
  $E$ is of class $C^k$ as a map of manifolds exactly when it is of class $C^k$
  in the sense of [[def-c-k-map-between-banach-spaces]]. All the local theorems
  of this page are statements about such open sets, transported to manifolds
  exactly through charts.

- **The Hausdorff and countability hypotheses are part of the definition.** They
  are the standard hypotheses of the global theory: the countable base is what
  the later Sard–Smale and transversality development consumes, and the
  Hausdorff condition is what makes the local pieces of a manifold fit together
  as a space of points rather than a set with overlapping coordinate patches.
  No theorem on this page asserts anything for a non-Hausdorff or
  non-second-countable "manifold", and the four Euclidean-space local theorems
  above are unaffected by either hypothesis because they do not mention
  manifolds at all.
