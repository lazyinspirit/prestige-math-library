---
id: lem-orbit-map-fibres-and-stabilizer-dimension
kind: lemma
title: "Fibre dimension and orbit dimension add to the dimension of the group"
status: draft
origin: pipeline
dependency_level: 4
deps: [cor-smooth-variety-classical-scheme-conventions-agree, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-dimension-classical-variety, def-dimension-noetherian-topological-space, lem-action-map-fibres-and-stabilizer-subscheme, lem-dimension-finite-union-components, lem-dimension-nonempty-open-subset, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, thm-generic-fibre-dimension, lem-nonaffine-connected-group-geometrically-connected]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Proposition 5.23, Orbit Lemma 1.66, Propositions 7.4-7.6, Appendix A.72, printed pp. 27-28, 104-105, 139-140, 586"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Proposition 1.11, printed pp. 5-6"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $G$
be a connected smooth algebraic group scheme of finite type over $k$ (such a
$G$ is separated by Milne 1.22 and geometrically reduced, hence a classical
variety of finite type over $k$) acting on a classical variety $X$ over $k$
([[def-dimension-classical-variety]],
[[cor-smooth-variety-classical-scheme-conventions-agree]]), and let
$x\in X(k)$ be a closed point. Then: (a) every fibre over a closed $k$-point of
the orbit map $\varrho_x:G\to O_x$ is a left translate of the stabilizer $G_x$
([[lem-action-map-fibres-and-stabilizer-subscheme]]), hence has underlying
topological dimension $\dim G_x$, equivalently the dimension of its reduction;
$G_x$ may be nonreduced ([[def-dimension-noetherian-topological-space]]);
(b) $\dim G=\dim G_x+\dim O_x$; (c) the orbit closure $\overline{O_x}$ is the
union of $O_x$ and of orbits of strictly smaller dimension; consequently every
orbit of minimal dimension in $X$ is closed, and $\overline{O_x}$ contains a
closed orbit. The Axiom of Choice is inherited from the generic-fibre and
constructibility inputs.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, a connected smooth finite-type
$k$-group scheme $G$ acting on a classical variety $X$, and a closed point
$x\in X(k)$.

[F1] The orbit subscheme $O_x$ is locally closed, stable under $G$ and smooth
over $k$, the orbit map $\varrho_x:G\to O_x$ is faithfully flat and locally of
finite presentation, and $G$ is geometrically integral, hence irreducible
([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]],
[[lem-nonaffine-connected-group-geometrically-connected]],
[[cor-smooth-variety-classical-scheme-conventions-agree]]).

[F2] For a closed $k$-point $y=g_0x$ of $O_x$ the scheme fibre is the translate
$F_y=g_0G_x$, and every closed point of a nonempty fibre is such a translate;
the stabilizer $G_x$ may be nonreduced
([[lem-action-map-fibres-and-stabilizer-subscheme]]).

[F3] For a dominant morphism $f:X\to Y$ of irreducible classical varieties
there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every
fibre over a closed point of $U$ has pure dimension $\dim X-\dim Y$
([[thm-generic-fibre-dimension]]).

[F4] A nonempty open subset of an irreducible classical variety has the
dimension of the variety, a proper closed subvariety has strictly smaller
dimension, and the dimension of a finite union of closed subsets is the maximum
of the dimensions ([[lem-dimension-nonempty-open-subset]],
[[lem-dimension-finite-union-components]], [[def-dimension-classical-variety]]).

[F5] Every nonempty closed subset of a finite-type $k$-scheme contains a closed
point, and every closed point has residue field $k$
([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

## Proof

**Given:** AC, the algebraically closed field $k$, the connected smooth
finite-type $k$-group scheme $G$, the classical variety $X$, and the closed
point $x\in X(k)$.

1.1 By [F1] the group $G$ is an irreducible classical variety, the orbit $O_x$ is a smooth locally closed $G$-stable subscheme, and $\varrho_x:G\to O_x$ is faithfully flat, hence surjective; as a continuous image of the irreducible space $G$ the space $O_x$ is irreducible, so $\varrho_x$ is a dominant morphism of irreducible classical varieties. [F1, given]

2.1 Applying [F3] to $\varrho_x:G\to O_x$ gives a nonempty open $U\subseteq O_x$ such that every fibre of $\varrho_x$ over a closed point of $U$ is nonempty and has pure dimension $\dim G-\dim O_x$; every closed point of $U$ is a closed point of $O_x$, hence lies in $O_x(k)$. [F1, F3, step 1.1]

2.2 Every closed $k$-point $y$ of $O_x$ lifts to a $k$-point of $G$: the fibre over $y$ is nonempty of finite type over $k$ and hence has a $k$-point by [F5]. Consequently $y=g_0x$ for some $g_0\in G(k)$, and by [F2] the fibre is the translate $g_0G_x$, whose underlying space is homeomorphic to that of $G_x$; so every closed-point fibre has underlying topological dimension $\dim G_x$, equivalently the dimension of its reduction. This is assertion (a). [F2, F5, step 1.1, algebra]

3.1 By steps 2.1 and 2.2 the generic closed-point fibres have dimension both $\dim G-\dim O_x$ and $\dim G_x$; comparing these two descriptions gives $\dim G=\dim G_x+\dim O_x$, which is assertion (b). [step 2.1, step 2.2, algebra]

4.1 Let $Z=\overline{O_x}$ be the orbit closure, an irreducible closed subvariety of $X$; since $O_x$ is dense and locally closed in $Z$, it is open in $Z$, and the boundary $B=Z\setminus O_x$ is a proper closed $G$-stable subset. Being a proper closed subset of the irreducible $Z$, $B$ has dimension strictly smaller than $\dim Z=\dim O_x$ by [F4]; every orbit contained in $B$ has closure contained in $B$, hence dimension at most $\dim B$, by the same dimension comparison applied to that orbit. [F1, F4, step 3.1, given]

5.1 This proves (c): the closure $\overline{O_x}=O_x\cup B$ is the union of $O_x$ and of orbits of strictly smaller dimension. If an orbit $O$ has minimal dimension among all orbits in $X$, then its boundary orbit closures would be orbits of strictly smaller dimension, contradicting minimality; hence $O$ is closed. Finally, starting from $\overline{O_x}$, replace the current orbit by an orbit in its boundary whenever the boundary is nonempty: the dimensions strictly decrease in the nonnegative integers, so after finitely many steps one reaches an orbit whose boundary is empty, that is, a closed orbit contained in $\overline{O_x}$; such an orbit exists because every nonempty closed subset contains a closed point by [F5], hence an orbit. [F4, F5, step 4.1, choose] ∎ 