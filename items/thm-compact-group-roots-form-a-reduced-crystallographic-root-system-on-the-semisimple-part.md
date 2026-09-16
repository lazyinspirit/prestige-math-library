---
id: thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part
kind: theorem
title: Compact roots form a reduced crystallographic root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, def-roots-of-a-compact-connected-lie-group, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, thm-equivalent-characterizations-of-reductive-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6, Φ(g,t) as a reduced root system in the orthogonal complement of the central directions"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§§20–21 and Appendix R §R.2"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$ and root system $\Phi=\Phi(G,T)$
([[def-roots-of-a-compact-connected-lie-group]]). Then the roots vanish on the
central torus $Z(G)^0$ and on the centre $\mathfrak z(\mathfrak g)$ of the Lie
algebra, and their differentials, restricted to the semisimple part of
$\mathfrak t$ and taken in the dual of the real form $i\mathfrak t$, form a
reduced crystallographic root system: the root set is finite and reduced, every
root is an integral functional on the coroots, reflections in the roots
preserve the root set, and the roots span the orthogonal complement of the
central directions.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$ with maximal torus $T$, Lie algebra $\mathfrak g$, and root system $\Phi=\Phi(G,T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the invariant inner product and structure theory of [L1]–[L2].

[L1] $G$ carries a bi-invariant metric whose value at the identity is a positive-definite inner product on $\mathfrak g$ invariant under every $\operatorname{Ad}_g$; it restricts to a positive-definite inner product on every invariant subspace, in particular on $[\mathfrak g,\mathfrak g]$ ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]).

[L2] $\mathfrak g$ is reductive: $\mathfrak g=\mathfrak z(\mathfrak g)\oplus\mathfrak g'$ with $\mathfrak g':=[\mathfrak g,\mathfrak g]$ semisimple and $\mathfrak z(\mathfrak g)$ its centre; a maximal abelian subspace of $\mathfrak g$ splits accordingly as $\mathfrak t=\mathfrak z(\mathfrak g)\oplus\mathfrak t'$ with $\mathfrak t'=\mathfrak t\cap\mathfrak g'$ a Cartan subalgebra of $\mathfrak g'$, and the roots of $(\mathfrak g',\mathfrak t')$ are the nonzero weights of the adjoint action on $(\mathfrak g')_{\mathbb C}$ ([[thm-equivalent-characterizations-of-reductive-lie-algebras]], [[def-roots-of-a-compact-connected-lie-group]]).

[L3] For a finite-dimensional complex semisimple Lie algebra with Cartan subalgebra, the root set is finite and satisfies: $\mathfrak g_{\mathbb C}=\mathfrak h_{\mathbb C}\oplus\bigoplus_{\alpha}\mathfrak g_\alpha$ with one-dimensional root spaces; the roots span the dual of $\mathfrak h$; the root set is reduced and central; reflections $s_\alpha(\beta)$ lie in the root set; and the Cartan integers $\langle\beta,\alpha^\vee\rangle=\beta(h_\alpha)$ are integers for a coroot $h_\alpha$ with $\alpha(h_\alpha)=2$ ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] the complexified Lie algebra decomposes as $\mathfrak g_{\mathbb C}=\mathfrak t_{\mathbb C}\oplus\bigoplus_{\alpha\in\Phi'}\mathfrak g'_\alpha$, where $\Phi'$ is the root set of the semisimple pair $(\mathfrak g',\mathfrak t')$ and each $\mathfrak g'_\alpha$ is one-dimensional; the centre contributes $\mathfrak z(\mathfrak g)_{\mathbb C}\subseteq\mathfrak t_{\mathbb C}$ and therefore only the zero weight. [L2, L3]

2.1 Each root space $\mathfrak g'_\alpha$ is invariant under $\operatorname{Ad}(t)$ for $t\in T$, because $\operatorname{Ad}(t)$ commutes with $\operatorname{ad}(H)$ for every $H\in\mathfrak t'$ (since $T$ is abelian, $\operatorname{Ad}(t)H=H$); as $\mathfrak g'_\alpha$ is one-dimensional, $\operatorname{Ad}(t)$ acts on it by a character $\alpha_T$ of $T$, which is a root of $(G,T)$ in the sense of [L2]. [L2, L3, step 1.1]

3.1 The assignment $\alpha\mapsto\alpha_T$ is a bijection from $\Phi'$ onto $\Phi$: it is injective and surjective because a character of the connected torus $T$ is determined by its differential and because on a root space $\mathfrak g'_\alpha$ the differential of $\alpha_T$ is exactly $\alpha$, so distinct $\alpha$ give distinct $\alpha_T$ and every T-weight space is one of the $\mathfrak g'_\alpha$. Consequently the differentials of the roots of $(G,T)$ are exactly the functionals $\alpha\in\Phi'$, extended by zero on $\mathfrak z(\mathfrak g)$. [L2, L3, step 2.1]

4.1 By [L3] the set $\Phi'$ is a reduced crystallographic root system in the dual of $\mathfrak t'_{\mathbb R}:=i\mathfrak t'$ for the inner product induced by the restriction of the invariant form [L1]; transport along the bijection of step 3.1 then gives the same properties for the differentials of $\Phi(G,T)$: finiteness, reducedness, integrality of Cartan integers, reflection invariance, and spanning of the orthogonal complement of the central directions, since $\mathfrak t'_{\mathbb R}$ is exactly the orthogonal complement of $i\mathfrak z(\mathfrak g)$ in $i\mathfrak t$. In particular no root vanishes identically on $\mathfrak t'$ and every root vanishes on $\mathfrak z(\mathfrak g)$ and on the central torus $Z(G)^0=\exp(\mathfrak z(\mathfrak g))$. The Axiom of Choice entered through the cited metric and structure theory. [A1, L1, L2, L3, step 3.1] ∎
