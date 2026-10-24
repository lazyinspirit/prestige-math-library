---
id: def-positive-restricted-roots-and-nilpotent-n-algebra
kind: definition
title: Positive restricted roots and nilpotent n algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-restricted-root-and-restricted-root-space, thm-restricted-root-space-decomposition, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, positivity and definition of n = sum of the positive restricted-root spaces, printed p. 373"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with
Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, let
$\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace, and let
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$ be the restricted-root system with
root spaces $\mathfrak g_0^\lambda$
([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]). An element $H_0\in\mathfrak a$ is
**regular** (for $\Sigma$) if $\lambda(H_0)\ne0$ for every
$\lambda\in\Sigma$; such elements exist because $\Sigma$ is finite and a
finite union of proper subspaces of the real vector space $\mathfrak a$ cannot
exhaust it
([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).
A **positive system** of $\Sigma$ is a subset
$\Sigma^+\subseteq\Sigma$ for which there is a regular $H_0\in\mathfrak a$ with
$$\Sigma^+=\{\lambda\in\Sigma:\lambda(H_0)>0\};$$
since $\lambda(H_0)\ne0$ for every $\lambda\in\Sigma$, such a set satisfies
$\Sigma=\Sigma^+\sqcup(-\Sigma^+)$ and is cut out on $\mathfrak a^*$ by the
linear evaluation functional $\operatorname{ev}_{H_0}:\mathfrak a^*\to
\mathbb R$, $\lambda\mapsto\lambda(H_0)$. Write
$\Sigma^-=-\Sigma^+$ for the
**negative** restricted roots.

Fix a positive system $\Sigma^+$ and define
$$\mathfrak n=\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda ,$$
the direct sum of the restricted-root spaces of the positive restricted roots.
By the bracket relation of
[[thm-restricted-root-space-decomposition]],
$[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$
for all restricted roots, and a sum of positive functionals that is a
restricted root is again positive for the same ordering; consequently
$\mathfrak n$ is a Lie subalgebra of $\mathfrak g_0$. The subalgebra
$\mathfrak n$ is **nilpotent**, the sum $\mathfrak a\oplus\mathfrak n$ is a
solvable Lie subalgebra with
$[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$, and
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak a\oplus\mathfrak n$ is a
vector-space direct sum; these three assertions are proved in
[[thm-iwasawa-decomposition-on-the-lie-algebra-level]], where the nilpotency of
$\mathfrak n$ is derived from the following positive bounds: if $\Sigma^+$ is
nonempty and $H_0$ is a regular element cutting out $\Sigma^+$, the numbers
$\lambda(H_0)>0$ for $\lambda\in\Sigma^+$ have a positive minimum and a finite
maximum, so every iterated bracket of sufficiently many elements of
$\mathfrak n$ vanishes; and if $\Sigma^+=\emptyset$ then
$\mathfrak n=0$ is trivially nilpotent.
