---
id: def-roots-and-root-groups-of-a-split-reductive-group
kind: definition
title: Roots and root groups of a split reductive group
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 22
deps: [def-axiom-of-choice, thm-chevalley-centralizer-radical-and-reductive-centralizers, lem-lie-functor-exactness-fixed-points-and-generation, def-split-reductive-algebraic-group, lem-character-and-cocharacter-lattices-of-a-split-torus, thm-weight-subgroups-of-a-torus-action, thm-cocharacter-limit-subgroups, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, lem-adjoint-representation-of-an-affine-group-scheme, lem-fixed-loci-and-centralizers-of-torus-actions-are-connected, def-borel-subgroup-and-maximal-torus]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 21 (21.1), (21.10)-(21.12), (21.23), (21.35); Ch. 16 (16.64)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $(G,T)$ be a split reductive group over $k$ ([[def-split-reductive-algebraic-group]]). The **roots** $\Phi(G,T)$ are the nontrivial characters $\alpha\in X(T)$ for which the adjoint weight space $\mathfrak g_\alpha$ in $\mathfrak g=\operatorname{Lie}G$ is nonzero. The adjoint action is rational, and the weight decomposition
$$\mathfrak g=\mathfrak g_0\oplus\bigoplus_{\alpha\in\Phi(G,T)}\mathfrak g_\alpha$$
is the choice-free decomposition into character eigenspaces ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[lem-adjoint-representation-of-an-affine-group-scheme]]). This nonzero-weight definition uses no choice principle.

Assume the Axiom of Choice for the following supplemental structural facts and subgroup constructions ([[def-axiom-of-choice]]). The reductive centralizer identity $C_G(T)=T$ and Lie fixed-point equality give $\mathfrak g_0=\operatorname{Lie}T=C_{\mathfrak g}(T)$ ([[thm-chevalley-centralizer-radical-and-reductive-centralizers]], [[lem-lie-functor-exactness-fixed-points-and-generation]]). For $\alpha\in\Phi$, put $T_\alpha=(\ker\alpha)_t=(\ker\alpha)^\circ_{\mathrm{red}}$, the maximal reduced subtorus of its kernel, of codimension one in $T$, and $G_\alpha=C_G(T_\alpha)$. The **root group** is $U_\alpha=H_{(\alpha)}\subseteq G_\alpha$, attached to the semigroup of strictly positive rational multiples of $\alpha$ in $X(T)$; it is smooth connected unipotent and $T$-stable with Lie algebra $\bigoplus_{\beta\in(\alpha)\cap\Phi}\mathfrak g_\beta$. Its identity-concentrator construction takes place in $G_\alpha$, not in all of $G$ ([[thm-weight-subgroups-of-a-torus-action]], [[thm-cocharacter-limit-subgroups]]).

The **Weyl group** is $W(G,T)=N_G(T)/T$. Under the stated AC premise it is a finite étale group scheme and acts faithfully on $X(T)$ (Milne21.1 and21.12). A Borel subgroup $B\supseteq T$ determines the **positive roots** $\Phi^+(B)=\{\alpha\in\Phi:\mathfrak g_\alpha\subseteq\operatorname{Lie}B\}$ and negative roots $-\Phi^+(B)$ ([[def-borel-subgroup-and-maximal-torus]], [[lem-character-and-cocharacter-lattices-of-a-split-torus]]). Root groups are independent of the auxiliary cocharacter because $(\alpha)$ is intrinsic and its smooth connected subgroup is characterized by its specified Lie weight subspace. Two Borels containing $T$ give the same positive roots exactly when they are equal (Milne21.23 and21.35). These structural facts inherit the explicit AC premise; the definition of a root as a nonzero adjoint character above remains choice-free.
