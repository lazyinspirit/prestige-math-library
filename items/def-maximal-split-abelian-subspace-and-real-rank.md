---
id: def-maximal-split-abelian-subspace-and-real-rank
kind: definition
title: Maximal split abelian subspace and real rank
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-split-real-form, def-cartan-involution-of-a-real-semisimple-lie-algebra]
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

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with a
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

which is independent of the choice of $\mathfrak a$ by
[[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]].

The terminology is related to the split real forms of
[[def-split-real-form]]: a real form $\mathfrak g_0$ is split precisely when
$\operatorname{rank}_{\mathbb R}\mathfrak g_0$ equals the complex rank of the
complexification $\mathfrak g_0^{\mathbb C}$, equivalently when a maximal
abelian subspace $\mathfrak a\subseteq\mathfrak p_0$ (any one, by
[[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]) is a Cartan
subalgebra of $\mathfrak g_0$; in general $\operatorname{rank}_{\mathbb R}\mathfrak g_0\in
\{0,1,\dots,\operatorname{rank}\mathfrak g_0^{\mathbb C}\}$, with value $0$
exactly for compact $\mathfrak g_0$.
