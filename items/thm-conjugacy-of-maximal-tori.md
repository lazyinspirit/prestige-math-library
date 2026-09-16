---
id: thm-conjugacy-of-maximal-tori
kind: theorem
title: Conjugacy of maximal tori
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, thm-maximal-tori-exist-in-compact-lie-groups, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-equivalent-characterizations-of-reductive-lie-algebras, def-axiom-of-choice, def-torus-and-maximal-torus-in-a-compact-lie-group, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §5, Theorem 4.34 and its critical-point proof"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§11"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Any two maximal tori of a compact connected Lie
group are conjugate.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$ with Lie algebra $\mathfrak g$, and two maximal tori $T_1,T_2\le G$ with Lie algebras $\mathfrak t_1,\mathfrak t_2$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the normalization and invariance of the inner product of [L1] and through the ambient theory of the page.

[L1] $G$ carries a bi-invariant Riemannian metric, and for it the geodesics through the identity are exactly the one-parameter subgroups; pulling the metric back to $\mathfrak g=T_eG$ gives a positive-definite inner product $\langle\cdot,\cdot\rangle$ invariant under $\operatorname{Ad}_g$ for every $g\in G$, hence with the invariance identity $\langle[X,U],V\rangle=-\langle U,[X,V]\rangle$ for all $X,U,V\in\mathfrak g$ ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]).

[L2] The Lie algebra of a maximal torus is a maximal abelian subspace of $\mathfrak g$: if an abelian subalgebra $\mathfrak a$ strictly contained $\mathfrak t_i$, the closure of its analytic subgroup would be a compact connected abelian Lie subgroup of $G$ strictly containing $T_i$, contradicting maximality of the torus ([[thm-maximal-tori-exist-in-compact-lie-groups]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L3] $\mathfrak g$ is reductive: $\mathfrak g=\mathfrak z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$ with $\mathfrak g':=[\mathfrak g,\mathfrak g]$ semisimple ([[thm-equivalent-characterizations-of-reductive-lie-algebras]]). For a maximal abelian $\mathfrak t\subseteq\mathfrak g$ containing $\mathfrak z(\mathfrak g)$, the complexification satisfies $\mathfrak g_{\mathbb C}=\mathfrak t_{\mathbb C}\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ where $\Phi$ is a finite set of nonzero complex-linear functionals on $\mathfrak t_{\mathbb C}$ and $\mathfrak g_\alpha=\{U:[H,U]=\alpha(H)U\ \forall H\in\mathfrak t_{\mathbb C}\}$, by applying the root space decomposition of the semisimple part $\mathfrak g'$ to the Cartan subalgebra $\mathfrak t\cap\mathfrak g'$ ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L4] A finite-dimensional vector space over an infinite field is not the union of finitely many proper subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 Each $\mathfrak t_i$ is a maximal abelian subspace of $\mathfrak g$ by [L2], and contains $\mathfrak z(\mathfrak g)$; fix an $\operatorname{Ad}$-invariant inner product $\langle\cdot,\cdot\rangle$ as in [L1] and let $\Phi_i$ be the finite root set of $\mathfrak g_{\mathbb C}$ relative to $\mathfrak t_{i,\mathbb C}$ from [L3]. [L1, L2, L3]

2.1 For each $i$ there is $X_i\in\mathfrak t_i$ with $\alpha(X_i)\ne0$ for every $\alpha\in\Phi_i$: the kernel of $\alpha$ in the real vector space $\mathfrak t_i$ is a proper subspace, for if $\alpha$ vanished on all of $\mathfrak t_i$ then $\mathbb C$-linearity would give $\alpha(iX)=i\alpha(X)=0$ on $i\mathfrak t_i$ as well and hence $\alpha=0$ on $\mathfrak t_{i,\mathbb C}$, contrary to $\alpha\ne0$; by [L4] the finite union of these proper kernels does not cover $\mathfrak t_i$. [L3, L4, step 1.1]

3.1 For such a regular $X_i$ the centralizer is exactly $\mathfrak t_i$: on $\mathfrak t_{\mathbb C}$ the derivation $\operatorname{ad}_{X_i}$ vanishes and on the root space $\mathfrak g_\alpha$ it is multiplication by $\alpha(X_i)\ne0$, so $\mathfrak c_{\mathfrak g_{\mathbb C}}(X_i)=\mathfrak t_{i,\mathbb C}$ and, intersecting with $\mathfrak g$, $\mathfrak c_{\mathfrak g}(X_i)=\mathfrak t_i$. [L3, step 2.1]

4.1 Fix regular $X\in\mathfrak t_1$ and $Y\in\mathfrak t_2$ by steps 2.1 and 3.1. The continuous function $f(g):=\langle\operatorname{Ad}(g)X,Y\rangle$ on the compact group $G$ attains a maximum at some $g_0\in G$; for every $Z\in\mathfrak g$ the derivative of $s\mapsto f(e^{sZ}g_0)$ at $s=0$ vanishes, that is $0=\langle[Z,\operatorname{Ad}(g_0)X],Y\rangle=-\langle Z,[\operatorname{Ad}(g_0)X,Y]\rangle$ by the invariance identity of [L1], whence $[\operatorname{Ad}(g_0)X,Y]=0$ by nondegeneracy. [L1, step 3.1]

5.1 The relation $[\operatorname{Ad}(g_0)X,Y]=0$ says $\operatorname{Ad}(g_0)X\in\mathfrak c_{\mathfrak g}(Y)=\mathfrak t_2$ by step 3.1, so $\mathfrak t_2\subseteq\mathfrak c_{\mathfrak g}(\operatorname{Ad}(g_0)X)=\operatorname{Ad}(g_0)\mathfrak c_{\mathfrak g}(X)=\operatorname{Ad}(g_0)\mathfrak t_1$; since $\operatorname{Ad}(g_0)\mathfrak t_1$ is a maximal abelian subspace of $\mathfrak g$ (the image of one under an automorphism) and $\mathfrak t_2$ is abelian and maximal abelian by step 1.1, the inclusion forces $\mathfrak t_2=\operatorname{Ad}(g_0)\mathfrak t_1$. [L1, step 4.1]

6.1 Conjugation $C_{g_0}$ maps the analytic subgroup $T_1$ onto a connected subgroup with Lie algebra $\operatorname{Ad}(g_0)\mathfrak t_1=\mathfrak t_2$, and $T_2$ is the unique connected subgroup with Lie algebra $\mathfrak t_2$; hence $g_0T_1g_0^{-1}=T_2$, so any two maximal tori are conjugate. The Axiom of Choice entered through the invariance of the inner product and the cited structure theory. [A1, step 5.1] ∎
