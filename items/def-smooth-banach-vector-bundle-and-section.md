---
id: def-smooth-banach-vector-bundle-and-section
kind: definition
title: Smooth Banach vector bundle and section
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-countable-base-banach-manifold-and-smooth-map, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-tangent-space-and-differential-on-a-banach-manifold, def-bounded-bilinear-map, thm-bounded-bilinear-map-equivalences, def-space-of-bounded-linear-operators, def-banach-space, def-complemented-subspace, cor-finite-codimensional-subspaces-are-complemented]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.12 (vector bundles and sections)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Definition

Let $M$ be a smooth ($C^\infty$) Banach manifold modelled on the real Banach
space $E$ ([[def-countable-base-banach-manifold-and-smooth-map]]) and let $F$ be
a real Banach space ([[def-banach-space]]).

A **smooth Banach vector bundle over $M$ with fibre $F$** is a smooth Banach
manifold $\mathcal E$ together with a surjective smooth map
$\pi : \mathcal E \to M$ ([[def-countable-base-banach-manifold-and-smooth-map]])
such that:

1. every **fibre** $\mathcal E_p := \pi^{-1}(p)$, $p \in M$, is a real vector
   space;
2. for every $p \in M$ there is an open neighbourhood $U$ of $p$ and a
   **local trivialization**, a diffeomorphism
   $\Phi : \pi^{-1}[U] \to U \times F$ satisfying
   $\mathrm{pr}_1 \circ \Phi = \pi$, whose restriction
   $\Phi_q := \mathrm{pr}_2 \circ \Phi|_{\mathcal E_q} : \mathcal E_q \to F$ is
   a linear isomorphism for every $q \in U$;
3. **cocycle condition**: if $\Phi$ over $U$ and $\Psi$ over $V$ are local
   trivializations, then on $\pi^{-1}[U \cap V]$,
   $$\Psi \circ \Phi^{-1}(q,v) = \bigl(q,\ g(q)v\bigr)$$
   for a smooth map $g : U \cap V \to \mathcal B(F)$ into the bounded operators
   on $F$ ([[def-space-of-bounded-linear-operators]]), and $g(q)$ is invertible
   for every $q \in U \cap V$.

A **smooth section of $\pi$** is a smooth map $s : M \to \mathcal E$ with
$\pi \circ s = \mathrm{id}_M$. Its **zeros** are the points $p \in M$ with
$s(p) = 0$, the zero of the vector space $\mathcal E_p$. In a local
trivialization $\Phi$ over $U$ the section corresponds to the smooth map
$$\sigma := \mathrm{pr}_2 \circ \Phi \circ s : U \to F ,$$
and $s(p) = 0$ if and only if $\sigma(p) = 0$.

At a zero $p$ of $s$ the **vertical derivative** of $s$ at $p$ is

$$D^vs(p) : T_pM \longrightarrow \mathcal E_p , \qquad D^vs(p)(\xi) := \Phi_p^{-1}\bigl(D\sigma(p)\,\xi\bigr),$$

where $\Phi$ is any local trivialization around $p$ and $D\sigma(p)$ is the
differential of the smooth manifold map $\sigma$ at $p$, the target $F$ being
read with its single identity chart; $\xi$ denotes a tangent vector in $T_pM$.

## Remarks

- **The vertical derivative is well defined.** Let $\Phi$ over $U$ and $\Psi$
  over $V$ be local trivializations around the zero $p$, with cocycle
  $g : U \cap V \to \mathcal B(F)$ as above, and let
  $\sigma_\Phi = \mathrm{pr}_2 \circ \Phi \circ s$,
  $\sigma_\Psi = \mathrm{pr}_2 \circ \Psi \circ s$ be the local representatives.
  Then $\sigma_\Psi(q) = g(q)\sigma_\Phi(q)$ for $q \in U \cap V$, and at the
  zero $p$ the product rule
  ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]])
  applied to the composition of $q \mapsto (g(q),\sigma_\Phi(q))$ with the
  bounded bilinear evaluation map
  $\mathcal B(F) \times F \to F$, $(T,v) \mapsto Tv$
  ([[def-bounded-bilinear-map]],
  [[thm-bounded-bilinear-map-equivalences]]), gives

$$D\sigma_\Psi(p) = g(p)\,D\sigma_\Phi(p) + Dg(p)\,\sigma_\Phi(p) = g(p)\,D\sigma_\Phi(p),$$

  the last term vanishing because $\sigma_\Phi(p) = 0$. Since
  $\Psi_p = g(p) \circ \Phi_p$ as linear isomorphisms $\mathcal E_p \to F$,
  the two prescriptions give the same element of $\mathcal E_p$.

- **Fibrewise linear structure is intrinsic.** The linear structure on
  $\mathcal E_p$ is part of the data, and each trivialization restricts to a
  linear isomorphism on it. The transition maps are fibrewise bounded linear
  and depend smoothly on the base; the vector bundle axioms are not restated
  here as a list of identities because they are exactly the conditions 1–3
  above.

- **The zero section.** The assignment $p \mapsto 0 \in \mathcal E_p$ is a
  smooth section, the **zero section**, whose vertical derivative at every point
  is the zero operator. Transversality of a section $s$ to the zero section is
  the condition that at every zero $p$ the map $D^vs(p)$ is surjective with
  complemented kernel ([[def-complemented-subspace]]); it is the hypothesis of
  the next theorem on this page, where the zero set is straightened.

- **Ranks and dimension.** Nothing is assumed about the dimension of $F$ or of
  $E$; the fibre may be infinite dimensional, which is exactly the case the
  infinite-dimensional transversality theorem below needs. When
  $\dim F < \infty$ and $D^vs(p)$ is onto, its kernel has finite codimension in
  $T_pM$ and is therefore automatically complemented, so the local condition of
  transversality reduces to surjectivity
  ([[cor-finite-codimensional-subspaces-are-complemented]]).
