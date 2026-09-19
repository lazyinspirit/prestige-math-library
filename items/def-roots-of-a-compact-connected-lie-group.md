---
id: def-roots-of-a-compact-connected-lie-group
kind: definition
title: Roots of a compact connected Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-character-and-cocharacter-lattices-of-a-torus, def-conjugation-and-the-adjoint-representation-of-a-lie-group, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6, the root system Φ(g,t) and the real form t_R = i t_0"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§§20–21 and Appendix R"
---

## Definition

Let $G$ be a compact connected Lie group with maximal torus $T$ and Lie algebra
$\mathfrak g$, and let $\mathfrak t=\operatorname{Lie}(T)$. Write
$\mathfrak g_{\mathbb C}=\mathfrak g\otimes_{\mathbb R}\mathbb C$ and
$\mathfrak t_{\mathbb C}=\mathfrak t\otimes_{\mathbb R}\mathbb C$ for the
complexifications, and let $\operatorname{Ad}$ denote the adjoint
representation of $G$ on $\mathfrak g$, extended $\mathbb C$-linearly to
$\mathfrak g_{\mathbb C}$ ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]).

A **root** of $(G,T)$ is a continuous character $\alpha:T\to S^1$
([[def-character-and-cocharacter-lattices-of-a-torus]])
whose **weight space**
$$\mathfrak g_\alpha:=\{X\in\mathfrak g_{\mathbb C}:\operatorname{Ad}(t)X=\alpha(t)X\ \text{for all }t\in T\}$$
is nonzero. The set of roots is written $\Phi(G,T)$, or simply $\Phi$. Since
$T$ is compact abelian, the nonzero weight spaces together with the zero weight
space $\mathfrak g_0=\{X:\operatorname{Ad}(t)X=X\ \forall t\in T\}$ give a
direct sum decomposition
$$\mathfrak g_{\mathbb C}=\mathfrak g_0\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha,$$
the **root space decomposition** of $\mathfrak g_{\mathbb C}$ with respect to
$T$. Indeed, the adjoint representation can be made unitary by
[[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]];
the commuting normal operators $\operatorname{Ad}(t)$ are diagonalizable by
[[thm-complex-spectral-theorem-for-normal-endomorphisms]] and have a common
eigenbasis by
[[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]].
The resulting common eigenvalue functions are continuous characters of $T$,
and only finitely many occur because $\mathfrak g_{\mathbb C}$ is
finite-dimensional.

**The differential notation.** For a character $\alpha$ of $T$, its
differential at the identity, extended $\mathbb C$-linearly, is the
$\mathbb C$-linear functional
$$d\alpha:\mathfrak t_{\mathbb C}\to\mathbb C,\qquad d\alpha(X)=\frac{d}{dt}\Big|_{t=0}\alpha(\exp(tX)).$$
The differential of a root is again written $\alpha$, so that under the
identification just made $\operatorname{ad}_X$ acts on $\mathfrak g_\alpha$ by
the scalar $\alpha(X)$ for $X\in\mathfrak t_{\mathbb C}$:
$[X,Y]=\alpha(X)Y$ for $Y\in\mathfrak g_\alpha$. With this convention a root is
a nonzero element of the dual of the real form $\mathfrak t_{\mathbb R}:=i\mathfrak t$
on which it is real-valued, and $\alpha$ and $d\alpha$ determine each other
because $T$ is connected and its exponential map is surjective (this is proved
as part of the structure theorem on this page).

## Remarks

- The roots vanish on the centre $\mathfrak z(\mathfrak g)$ and on the central
  torus $Z(G)^0$; the nonzero weights of the adjoint action of $T$ on
  $\mathfrak g_{\mathbb C}$ are exactly the roots, and $\mathfrak g_0$ is the
  centralizer of $\mathfrak t_{\mathbb C}$ in $\mathfrak g_{\mathbb C}$.
- For the trivial torus $T=\{e\}$ the root set is empty; for a torus of
  positive dimension the adjoint action need not have any nonzero weights
  (the centre contributes only the zero weight).
- The notation $\Phi(G,T)$ suppresses the choice of maximal torus; a
  conjugating isomorphism carries $\Phi(G,T)$ to $\Phi(G,T')$, and the root
  system is defined only up to that identification.
