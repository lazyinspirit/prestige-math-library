---
id: def-tangent-space-and-differential-on-a-banach-manifold
kind: definition
title: Tangent space and differential on a Banach manifold
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-countable-base-banach-manifold-and-smooth-map, def-frechet-derivative-between-banach-spaces, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §1.3"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Definition

Let $k \ge 1$, let $M$ be a $C^k$ Banach manifold modelled on the real Banach
space $E$ ([[def-countable-base-banach-manifold-and-smooth-map]]) and let
$p \in M$. Consider the set of pairs $(\varphi,v)$ in which $\varphi$ is a chart
of $M$ whose domain contains $p$ and $v \in E$, and declare


$$(\varphi,v) \sim (\psi,w) \quad :\Longleftrightarrow \quad w = D(\psi \circ \varphi^{-1})\bigl(\varphi(p)\bigr)\,v ,$$


the derivative being that of the transition map, a $C^1$ map between open
subsets of $E$ ([[def-frechet-derivative-between-banach-spaces]]). The
**tangent space to $M$ at $p$** is the quotient set

$$T_pM := \{\,(\varphi,v) : p \in \operatorname{dom}\varphi \,\} \big/ \sim ,$$

and the class of $(\varphi,v)$ is written $[\varphi,v]$. For a chart $\varphi$ at
$p$ the assignment $[\varphi,v] \mapsto v$ identifies $T_pM$ with $E$; the
resulting real vector space structure is


$$\lambda\,[\varphi,v] + \mu\,[\varphi,w] := [\varphi,\lambda v + \mu w] \qquad (\lambda,\mu \in \mathbb R),$$


and the **differential** of a $C^1$ map $f : M \to N$ between Banach manifolds
(models $E$ and $F$) at $p$ is


$$Df(p)\bigl([\varphi,v]\bigr) := \Bigl[\psi,\ D(\psi \circ f \circ \varphi^{-1})\bigl(\varphi(p)\bigr)v\Bigr] \in T_{f(p)}N ,$$


where $\varphi$ is any chart of $M$ at $p$ and $\psi$ any chart of $N$ at
$f(p)$ for which the representative $\psi \circ f \circ \varphi^{-1}$ is defined
near $\varphi(p)$. The well-definedness of the relation, of the vector space
operations and of the differential, together with the identities below, is
proved on this page as [[lem-banach-manifold-differentials-are-chart-independent]].

## Remarks

- **Tangent vectors are velocities of curves.** If $\varphi$ is a chart at $p$
  and $v \in E$, then the curve $\gamma(t) := \varphi^{-1}(\varphi(p)+tv)$,
  defined for small real $t$, lies in $M$ and satisfies
  $\varphi \circ \gamma(t) = \varphi(p)+tv$, so its coordinate velocity at $0$
  is $v$; the class $[\varphi,v]$ is exactly that velocity. Conversely every
  velocity of a curve through $p$ arises in this way. This is the reading used
  in the counterexample on the companion page, where a curve in a closed
  subspace produces a tangent vector of the subspace.

- **The differential is linear on tangent spaces.** This is not part of the
  definition but follows from the chain rule: in a fixed chart at $p$ and a
  fixed chart at $f(p)$ the map $v \mapsto D(\psi \circ f \circ \varphi^{-1})
  (\varphi(p))v$ is bounded linear, and the chart identifications are linear.
  The functoriality statements $D(\mathrm{id}) = \mathrm{id}$ and
  $D(g\circ f) = Dg \circ Df$ are proved with the same computation.

- **The vector space structure does not depend on the chart.** A change
  $\varphi \to \psi$ multiplies coordinate vectors by the transition derivative
  $D(\psi \circ \varphi^{-1})(\varphi(p))$, which is a bounded linear
  isomorphism of $E$ with inverse
  $D(\varphi \circ \psi^{-1})(\psi(p))$; linearity of this change is exactly
  what makes the displayed operations independent of the chart chosen. The
  invertibility follows from the chain rule: the two transition maps are
  mutually inverse $C^1$ maps, so their composites are the identity on open
  sets and differentiating those identities exhibits each derivative as the
  inverse of the other. Both facts are recorded in the lemma below.

- **For an open set the tangent space is the model space.** If $W \subseteq E$
  is open and $p \in W$, the single chart $(\mathrm{id}_W,W)$ makes $T_pW$ the
  set of classes $[\mathrm{id}_W,v]$, which is canonically identified with $E$;
  under this identification $Df(p)$ of a map $f : W \to E$ is the Fréchet
  derivative of the coordinate representative, which here is $f$ itself. All
  computations on this page are performed through this identification.
