---
id: def-weyl-jacobian-on-a-maximal-torus
kind: definition
title: Weyl Jacobian
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-roots-of-a-compact-connected-lie-group, def-positive-system-and-base-of-simple-roots]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15, the Jacobian of the degree-#W map"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6 and Chapter VIII §1"
---

## Definition

Let $G$ be a compact connected Lie group with maximal torus $T$, let
$\Phi=\Phi(G,T)$ be its root system
([[def-roots-of-a-compact-connected-lie-group]]), and fix a positive system
$\Phi^+\subseteq\Phi$
([[def-positive-system-and-base-of-simple-roots]]). The **Weyl Jacobian** is
the continuous function
$$J:T\to\mathbb R,\qquad J(t)=\prod_{\alpha\in\Phi^+}\bigl|1-\alpha(t)^{-1}\bigr|^2 .$$
Each factor is well defined because every root is an actual continuous
character $T\to S^1$; its modulus is $1$, so
$|1-\alpha(t)^{-1}|=|1-\alpha(t)|$ and the product is a nonnegative real
number, vanishing exactly at those $t$ at which some positive root takes the
value $1$. The function is globally defined *without* assuming that any half
root $\alpha/2$ or the vector $\rho$ is a character of $T$: only the honest
characters $\alpha$ occur.

The exponent $-1$ in the first factor matches the standard normalisation of the
Weyl integration formula
([[thm-weyl-integration-formula]]) in which the quotient measure on $G/T$ is
fixed by the coset Fubini identity with the *right* translation convention
$F\mapsto F\circ R_h$; replacing $\alpha(t)^{-1}$ by $\alpha(t)$ does not
change $J$, since $|1-\alpha(t)^{-1}|=|1-\alpha(t)|$ for $|\alpha(t)|=1$.

The product is finite because a root system is finite, and it does not depend on
the numbering of the roots. If $\Phi\ne\varnothing$, then $J(e)=0$. If
$\Phi=\varnothing$ (in particular, when $G=T$ is a torus), the empty product is
$J\equiv1$. In all cases $J(t)=0$ exactly when some root takes the value $1$ at
$t$; the zero set is the finite union of the kernels of the root characters,
with the empty union understood as the empty set.

## Remarks

- The notation $J$ is standard for the density of the Weyl integration formula;
  it is also called the *Weyl denominator density*.
- The positive system is part of the data of the displayed product, but the
  next proposition proves that the product is independent of the choice of
  positive system and invariant under $W(G,T)$.
- The individual factors $|1-\alpha(t)^{-1}|^2$ are independent of any
  complexification convention: they are computed from the characters of $T$.
