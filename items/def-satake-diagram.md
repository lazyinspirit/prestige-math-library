---
id: def-satake-diagram
kind: definition
title: Satake diagram
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-positive-system-and-base-of-simple-roots, def-axiom-of-choice, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-maximal-split-abelian-subspace-and-real-rank, def-restricted-root-and-restricted-root-space, thm-restricted-root-space-decomposition, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-vogan-diagram]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, root types and Proposition 6.70, printed pp. 386-388; §7, Cayley transforms and Propositions 6.69-6.72, printed pp. 389-394; §11, restricted roots in the classification, printed pp. 422-425; §12, Problem 7, printed p. 427; Historical Notes, printed p. 767"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan involution $\theta$ and Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]). Let
$\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ be a $\theta$-stable Cartan
subalgebra of $\mathfrak g_0$ whose split part $\mathfrak a_0$ is a maximal
abelian subspace of $\mathfrak p_0$; such an $\mathfrak h_0$ is
**maximally split**, or maximally noncompact
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]],
[[def-maximal-split-abelian-subspace-and-real-rank]]). Write
$\mathfrak h=\mathfrak h_0\oplus i\mathfrak h_0$ for the complexification,
$\mathfrak t=\mathfrak t_0\oplus i\mathfrak t_0$ and
$\mathfrak a=\mathfrak a_0\oplus i\mathfrak a_0$, so that
$\mathfrak h=\mathfrak t\oplus\mathfrak a$, and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the root system of
$(\mathfrak g,\mathfrak h)$, with root spaces $\mathfrak g_\alpha$; the
$\mathbb C$-linear extension of $\theta$ is again written $\theta$.

**Root types.** By
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]] every root
$\alpha\in\Phi$ satisfies $\alpha(\mathfrak t_0)\subseteq i\mathbb R$ and
$\alpha(\mathfrak a_0)\subseteq\mathbb R$, and $\alpha$ is
$$\text{real if }\alpha|_{\mathfrak t_0}=0,\qquad \text{imaginary if }\alpha|_{\mathfrak a_0}=0,\qquad \text{complex otherwise};$$
equivalently $\theta\alpha=-\alpha$, $\theta\alpha=\alpha$, or neither, where
$\theta\alpha=\alpha\circ\theta^{-1}$. In particular an imaginary root is
exactly a root whose restriction to $\mathfrak a_0$ vanishes, and $\theta$
permutes the three classes of roots. An imaginary root has $\theta$-stable
root space $\mathfrak g_\alpha$, which is one-dimensional, so it lies either
in the $+1$-eigenspace $\mathfrak k$ of $\theta$ or in the $-1$-eigenspace
$\mathfrak p$; the imaginary root is **compact** in the first case and
**noncompact** in the second. Because $\mathfrak h_0$ is maximally split, no
noncompact imaginary root of $(\mathfrak g,\mathfrak h)$ exists: a noncompact
imaginary root admits a noncompact-imaginary Cayley transform, which produces
a $\theta$-stable Cartan subalgebra whose noncompact dimension is larger by
one ([[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]],
assertion 2).

**Compatible positive systems.** A positive system $\Phi^{+}$ of $\Phi$ and
its base $\Delta$ are as in
[[def-positive-system-and-base-of-simple-roots]]. Let
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a_0)$ be the restricted-root system of
$\mathfrak g_0$ with respect to the maximal abelian subspace $\mathfrak a_0$
([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]), and let $\Sigma^{+}$ be a
positive system of $\Sigma$. A positive system $\Phi^{+}$ of $\Phi$ is
**compatible** with $\Sigma^{+}$ if every root of $\Phi^{+}$ whose restriction
to $\mathfrak a_0$ is nonzero has that restriction in $\Sigma^{+}$:
$$\alpha\in\Phi^{+},\ \alpha|_{\mathfrak a_0}\ne0\quad\Longrightarrow\quad\alpha|_{\mathfrak a_0}\in\Sigma^{+}.$$
Compatible positive systems exist: choose $H\in\mathfrak a_0$ with
$\lambda(H)\ne0$ for every $\lambda\in\Sigma$ and $T\in\mathfrak t_0$ with
$\alpha(T)\ne0$ for every imaginary root $\alpha$, and declare $\alpha$ to be
positive when the pair
$\bigl(\alpha(H),\ \operatorname{Im}\alpha(T)\bigr)\in\mathbb R^{2}$ is
strictly positive for the lexicographic order; this is a positive system,
because $(\alpha(H),\operatorname{Im}\alpha(T))\ne(0,0)$ for every root, and
it is compatible with the positive system
$\Sigma^{+}=\{\lambda\in\Sigma:\lambda(H)>0\}$.

**The Satake diagram.** Let $\Phi^{+}$ be a positive system of $\Phi$
compatible with a positive system $\Sigma^{+}$ of $\Sigma$, with base $\Delta$.
The **Satake diagram** of the quadruple
$(\mathfrak g_0,\mathfrak h_0,\Sigma^{+},\Phi^{+})$ is the Dynkin diagram of
$\Phi$ relative to $\Delta$
([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]) together
with the following two decorations of its vertices:

- **Colouring.** A vertex $\alpha\in\Delta$ is **black** if it is an
  imaginary simple root, that is, if $\alpha|_{\mathfrak a_0}=0$, and
  **white** otherwise, that is, if $\alpha|_{\mathfrak a_0}\ne0$. Since
  $\mathfrak h_0$ is maximally split, every imaginary root of
  $(\mathfrak g,\mathfrak h)$ is compact, so the black vertices are exactly
  the compact imaginary simple roots.
- **Arrows.** Two distinct white vertices $\alpha,\beta\in\Delta$ are joined
  by a **Satake arrow** when their restrictions to $\mathfrak a_0$ agree:
  $$\alpha|_{\mathfrak a_0}=\beta|_{\mathfrak a_0}\,\bigl(\ne0\bigr).$$
  In the standard drawing a Satake arrow is curved or drawn in a distinct
  style, so that it is not confused with the arrows attached to multiple
  edges of the underlying Dynkin diagram.

That the arrow relation is the pairing of Satake's construction, and not an
arbitrary decoration, is the content of Knapp, Chapter VI, §12, Problem 7,
printed p. 427: part (a) shows that every simple restricted root of
$\Sigma^{+}$ is the restriction of a simple root of $\Phi^{+}$; part (b) shows
that for every simple root $\alpha$ whose restriction is nonzero the root
$-\theta\alpha$ differs by an element of the span $V$ of the imaginary simple
roots from a unique simple root $\alpha'$, so that $\alpha\mapsto\alpha'$ is
an involution of the simple roots outside $V$ (it may fix a root, as for the
real roots, and two distinct simple roots outside $V$ have the same nonzero
restriction exactly when they form an orbit of this involution); and parts (c)
and (d) show, by exhibiting
elements of $\mathfrak a_0$ that separate the various restricted simple roots,
that two distinct white simple roots have equal restriction if and only if they
are paired in this way. The Satake diagram therefore records the same
structure that the Vogan diagram of [[def-vogan-diagram]] records, in the
coordinate system of the restricted roots rather than that of a maximally
compact Cartan subalgebra.

**Equivalent Satake diagrams.** Two quadruples determine diagrams over the
same root system $\Phi$, and the passage between the diagrams of one real
form is generated by the following moves, in the same way as for Vogan
diagrams in [[def-vogan-diagram]]:

1. conjugating the Cartan subalgebra by a real inner automorphism of
   $\mathfrak g_0$; every maximally split $\theta$-stable Cartan subalgebra of
   $\mathfrak g_0$ is conjugate to $\mathfrak h_0$ by such an automorphism
   ([[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]],
   assertion 4);
2. replacing the compatible positive system $\Phi^{+}$ by another compatible
   positive system for the same Cartan subalgebra, which changes the base and
   the decorations by the corresponding diagram automorphism and by changes of
   base.

For Satake diagrams arising from such quadruples, the decorations after a
change of base are recomputed using the same split part $\mathfrak a_0$ and
restriction map $\mathfrak h^*\to\mathfrak a_0^*$; the two geometric moves
above generate **equivalence**. An **abstract Satake diagram** with no chosen
real-form realization is only the decorated based root system, and two such
abstract diagrams are called equivalent precisely when they are isomorphic as
decorated data: an isometry carries one root system and base to the other and
preserves the colouring and arrow pairing. An arbitrary change of base is not
a move on the abstract decoration alone, because that decoration does not
contain the split part or restriction map needed to redecorate the new base.
The equivalence of the Vogan and Satake pictures, and the fact that the
realized decorated data are determined by the pair
$(\mathfrak g_0,\theta)$ rather than by the choices made in their construction,
is the content of
[[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]];
the passage between the two pictures is given by real-root and
noncompact-imaginary Cayley transforms
([[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]],
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]).
