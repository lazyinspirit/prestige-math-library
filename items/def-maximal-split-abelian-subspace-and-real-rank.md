---
id: def-maximal-split-abelian-subspace-and-real-rank
kind: definition
title: Maximal split abelian subspace and real rank
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-split-real-form, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-riemannian-symmetric-pair-of-noncompact-type, cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
justified_by: [thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, definition of a and discussion before Proposition 6.40, printed p. 370"
landmark: false
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with a
Cartan involution $\theta$ and Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]). A **maximal
split abelian subspace** of $\mathfrak g_0$ is a subspace
$\mathfrak a\subseteq\mathfrak p_0$ that is abelian for the bracket, that is
$[\mathfrak a,\mathfrak a]=0$, and is maximal with this property among
subspaces of $\mathfrak p_0$; equivalently (since $\mathfrak p_0$ is
finite-dimensional, every abelian subspace of $\mathfrak p_0$ is contained in
a maximal one) $\mathfrak a$ is a maximal abelian subspace of
$\mathfrak p_0$. The **real rank** of $\mathfrak g_0$ is

$$\operatorname{rank}_{\mathbb R}\mathfrak g_0:=\dim\mathfrak a,$$

which is independent of the choice of $\mathfrak a$.  The Lie-algebra form of
the noncompact symmetric-pair construction in
[[def-riemannian-symmetric-pair-of-noncompact-type]] applies to the pair
$(\mathfrak g_0,\theta)$ after its compact ideals are split off: those ideals
lie in $\mathfrak k_0$ and contribute nothing to $\mathfrak p_0$, while the
remaining ideal $\mathfrak g_{nc}$ has no compact ideal.  This Lie-algebra datum
does produce a symmetric pair.  Namely, let
$G=\operatorname{Aut}(\mathfrak g_{nc})^0$.  Its Lie algebra is
$\operatorname{Der}(\mathfrak g_{nc})=\operatorname{ad}\mathfrak g_{nc}$, and
centerlessness identifies this with $\mathfrak g_{nc}$
([[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]],
[[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]],
[[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).  The center of
$G$ is trivial: a central automorphism commutes with every
$e^{t\operatorname{ad}X}$, so differentiation gives
$\operatorname{ad}(AX)=\operatorname{ad}X$ for every $X$, and injectivity of
$\operatorname{ad}$ gives $A=1$.  Conjugation
$A\mapsto\theta A\theta$ is a global involution of $G$ whose differential is
$\theta$ under this identification.  Thus $(G,G^\Theta)$ is the required
noncompact-type symmetric pair, and
[[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]] conjugates any two
maximal abelian subspaces of its $\mathfrak p_0$.  They therefore have equal
dimension.  This downstream theorem is the well-definedness justification
recorded in `justified_by`.

The terminology is related to the split real forms of
[[def-split-real-form]]: a real form $\mathfrak g_0$ is split precisely when
$\operatorname{rank}_{\mathbb R}\mathfrak g_0$ equals the complex rank of the
complexification $\mathfrak g_0^{\mathbb C}$, equivalently when a maximal
abelian subspace $\mathfrak a\subseteq\mathfrak p_0$ (any one, by
[[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]) is a Cartan
subalgebra of $\mathfrak g_0$; in general $\operatorname{rank}_{\mathbb R}\mathfrak g_0\in
\{0,1,\dots,\operatorname{rank}\mathfrak g_0^{\mathbb C}\}$, with value $0$
exactly for compact $\mathfrak g_0$.
