---
id: lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood
kind: lemma
title: "The velocity field of an isotopy extends to a neighbourhood"
status: draft
origin: session
dependency_level: 6
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-compactness-of-a-subspace-is-ambient,
       lem-euclidean-bump-for-a-compact-set-inside-an-open-set,
       lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image,
       lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       def-neat-submanifold-of-a-manifold-with-boundary,
       def-interior-point-boundary-point-interior-and-boundary-of-a-manifold,
       thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set,
       def-countable-choice,
       def-smooth-vector-bundle-rank-fibre-and-trivial-bundle,
       def-embedded-submanifold-and-slice-chart,
       prop-smooth-maps-are-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Proposition 2.38 (Picard–Lindelöf for time-dependent fields) and Theorem 2.39 (isotopy extension), printed pp. 35–36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact smooth manifold, $N$ a smooth manifold, $F:M\times I\to N$ a smooth isotopy of embeddings with track $S\subseteq N\times I$ and horizontal velocity $Y$ ([[lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image]]). Then:

1. There are an open neighbourhood $\Omega$ of $S$ in $N\times I$ and a smooth map $\widetilde Y:\Omega\to TN$ with $\widetilde Y(y,t)\in T_yN$ and $\widetilde Y|_S=Y$.
2. If $N$ has boundary and $F$ takes values in $\partial N$, then, after shrinking $\Omega$, the extension can be chosen tangent to $\partial N$ along $\Omega\cap(\partial N\times I)$; if $F$ takes values in the interior, the extension can be chosen with values in $T(N\setminus\partial N)$, which is its natural value on the part of $\Omega$ lying over the interior.
3. For every open neighbourhood $W$ of $S$ in $N\times I$ there is such an extension with $\Omega\subseteq W$; more generally, if $A\subseteq S$ is compact and $\widetilde Y_0$ is a smooth extension of $Y$ defined on a neighbourhood of $A$, the extension may be chosen to agree with $\widetilde Y_0$ on a (possibly smaller) neighbourhood of $A$. If boundary tangency is also required, the prescribed extension must satisfy that tangency on its domain.

The extension is horizontal: only the $TN$ component is prescribed or changed, not the unit time component.

## Facts & Assumptions

**Given:** Countable choice, a compact smooth manifold $M$, a smooth manifold $N$, a smooth isotopy $F$ with track $S$ and horizontal velocity $Y$.

[F1] Compact subsets admit finite subcovers from ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). The track is compact, closed and smoothly embedded, with local graph coordinates and smooth horizontal velocity up to the endpoint faces ([[lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image]], proof steps 2.2 and 4.1).

[L1] The boundaryless field-extension lemma uses local coefficient extension and partitions of unity ([[lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed]]). Here steps 1.1 and 1.2 give that construction explicitly in product coordinates, including endpoint and ambient boundary faces.

[L3] For the compact sets used here, a cutoff equal to one near the set and supported in a prescribed open set follows from finitely many Euclidean chart bumps, restricted to the product chart faces, as in step 1.1. Sum bumps equal to one on smaller neighbourhoods covering the compact set and compose with a smooth scalar cutoff equal to one above $1/2$. This proves the needed product-corner version directly ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]); the ordinary versions are [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]] and [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]].

[L4] In a boundary chart of $N$ the boundary stratum is the coordinate hyperplane of last coordinate $0$ and the interior is the open half-space of last coordinate $>0$; a vector is tangent to the stratum exactly when its last coordinate vanishes ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]], [[def-neat-submanifold-of-a-manifold-with-boundary]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[A1] Countable choice is used exactly for the countable selections of cutoffs and partition-of-unity functions in [L1] and [L3]; no other selection occurs ([[def-countable-choice]]).

[F2] A compact subset of a Hausdorff space is closed, and smooth maps are continuous ([[prop-smooth-maps-are-continuous]], [[def-embedded-submanifold-and-slice-chart]]).

## Proof

**Proof technique:** direct.

1.1 In a product chart $(y,t)$ near a track point, the graph coordinates of [F1] give a smooth local inverse $(p(y),t)\mapsto(u(y,t),t)$, where $p$ selects target coordinates. Extend the coordinate functions of $F$ locally across time endpoints and, if necessary, the target boundary chart. Define the $j$th target component of a local field by $(\partial_tF^j)(u(y,t),t)$. On the track it equals the $j$th velocity component. Interpret these coefficients in the coordinate basis of $TN$ and assign zero time component; horizontality follows directly, without assuming slice charts preserve the horizontal subbundle. Take finitely many such chart domains covering compact $S$. In their Euclidean extensions choose finitely many nonnegative smooth bumps with compact supports inside these domains by [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] and positive sum near $S$, and restrict them to $N\times I$. Dividing each by their sum gives smooth weights summing to one on a neighbourhood $\Omega$ of $S$. The weighted sum of the local horizontal fields is smooth, horizontal and equals $Y$ on $S$. These restricted coordinate bumps also handle the corners of $N\times I$ when $N$ has boundary. This proves clause 1. [F1, L1, A1, construct]

2.1 If $F$ takes values in $\partial N$, perform the graph construction of step 1.1 first in the boundary coordinates $y'$, choosing $p$ from those coordinates, since the slice differential is injective into $T\partial N$. Extend the tangential coefficients independently of the inward coordinate $y_n$ and set the $y_n$ component identically zero. Restricted product-chart bumps patch these fields as in step 1.1. Each is tangent to $\partial N$ there, so their sum is tangent too; boundary coordinate changes preserve this condition. If the track lies in the interior, restrict $\Omega$ to $\operatorname{Int}N\times I$. These are the two alternatives of clause 2. [F1, L4, step 1.1, construct]

2.2 For a prescribed open neighbourhood $W$ of $S$, simply restrict the extension to $\Omega':=\Omega\cap W$. This is an open neighbourhood of $S$ contained in $W$; no tubular theorem for a boundary or cornered track is required. [step 1.1, construct]

3.1 Clause 3, relative form: let $A\subseteq S$ be compact and let $\widetilde Y_0$ be a smooth extension of $Y$ defined on an open neighbourhood $\Omega_0$ of $A$ (it agrees with $Y$ at every point of $S$ in its domain). The set $A$ is closed in the manifold $N\times I$ by [F2], and both $\Omega'$ from step 2.2 and $\Omega_0$ are open neighbourhoods of $A$; by [L3] choose a smooth cutoff $\chi$ equal to $1$ on a neighbourhood $A'\subseteq\Omega'\cap\Omega_0$ of $A$ with support in $\Omega'\cap\Omega_0$. Define $\widetilde Y_1:=\widetilde Y+\chi\,(\widetilde Y_0-\widetilde Y)$ on $\Omega'\cap\Omega_0$, extended by $\widetilde Y$ outside $\operatorname{supp}\chi$. This is a smooth map into $TN$ because the fibrewise vector-space operations of a smooth vector bundle are smooth in local trivialisations ([L4]), it agrees with $\widetilde Y_0$ on $A'$ and with $\widetilde Y$ outside $\operatorname{supp}\chi$, and it restricts to $Y$ on $S\cap\Omega'$; hence it is an extension of $Y$ agreeing with $\widetilde Y_0$ near $A$. When both fields are boundary-tangent, their blend is boundary-tangent too. [F2, L3, L4, step 2.2, construct]

4.1 The constructions prove all three clauses. They modify only the horizontal component and preserve the stated relative and boundary conditions. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
