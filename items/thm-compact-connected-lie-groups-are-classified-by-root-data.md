---
id: thm-compact-connected-lie-groups-are-classified-by-root-data
kind: theorem
title: Compact connected Lie groups are classified by root data
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-datum-of-a-compact-connected-lie-group, thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-structure-of-a-compact-connected-abelian-lie-group, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, thm-lie-second-fundamental-theorem, def-axiom-of-choice, thm-equivalent-characterizations-of-reductive-lie-algebras, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V, Theorem V.1.1 and §V.2 (marked quotients and the outer-automorphism caveat)"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 42 §42.1, Theorem 42.4 and Corollary 42.6 (finite central cover)"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. For every compact connected Lie group $G$,
multiplication induces a finite central covering
$$Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\longrightarrow G,$$
where $G_{\mathrm{der}}^{\mathrm{sc}}$ is the simply connected compact group
integrating the derived algebra $[\mathfrak g,\mathfrak g]$. Isomorphism classes
of compact connected Lie groups, equivalently pairs $(G,T)$ with a maximal torus
up to conjugacy, correspond to isomorphism classes of reduced compact root data
including the central torus directions
([[def-root-datum-of-a-compact-connected-lie-group]]).

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and a compact connected Lie group $G$ with Lie algebra $\mathfrak g$ and maximal torus $T$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the integration and covering theory of [L2]–[L5].

[L1] $\mathfrak g=\mathfrak z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$ with $[\mathfrak g,\mathfrak g]$ semisimple; a maximal torus has Lie algebra $\mathfrak t=\mathfrak z(\mathfrak g)\oplus\mathfrak t'$; the centre of a compact connected Lie group is a torus and $Z(G)^0=\exp(\mathfrak z(\mathfrak g))$ ([[thm-equivalent-characterizations-of-reductive-lie-algebras]], [[thm-structure-of-a-compact-connected-abelian-lie-group]]).

[L2] Compact connected semisimple Lie groups with isomorphic root systems are centrally isogenous, and the simply connected compact form exists and is unique with character lattice $P$ ([[thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems]], [[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]).

[L3] Connected simply connected groups integrate Lie algebras uniquely, and every connected Lie group is a quotient of its simply connected cover by a discrete central subgroup ([[thm-lie-second-fundamental-theorem]], [[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L4] A Lie homomorphism whose differential is an isomorphism is a local diffeomorphism at the identity; a discrete subgroup of a compact connected group is finite; the kernel of a covering homomorphism is central ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L5] Under the full-lattice description of a torus, a finite-index sublattice $X\subseteq X^*(\widetilde T)$ has finite common kernel $C=\bigcap_{\chi\in X}\ker\chi$, and pullback identifies $X^*(\widetilde T/C)$ with $X$. Indeed, elementary-divisor bases reduce this to $n_1\mathbb Z\oplus\cdots\oplus n_r\mathbb Z\subseteq\mathbb Z^r$, whose common kernel is the product of the groups of $n_i$-th roots of unity ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]], [[thm-structure-of-a-compact-connected-abelian-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 The inclusion $[\mathfrak g,\mathfrak g]\hookrightarrow\mathfrak g$ integrates by [L3] to a homomorphism $G_{\mathrm{der}}^{\mathrm{sc}}\to G$ from the simply connected compact semisimple group of [L2]; the connected centre $Z(G)^0$ is the compact torus integrating $\mathfrak z(\mathfrak g)$ by [L1]. The product homomorphism $\mu:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$, $\mu(z,x)=zx$, has an isomorphism on Lie algebras by [L1], hence is a local diffeomorphism at the identity by [L4]; its image is therefore open and, since the domain is connected, is all of $G$. Its kernel is discrete (the map is a local diffeomorphism) and hence finite by [L4], and it is central because the domain is abelian-by-central: the kernel is a closed subgroup of $Z(G)^0\times Z(G_{\mathrm{der}}^{\mathrm{sc}})$ mapped into $Z(G)$. [L1, L2, L3, L4]

1.2 Conversely, let $(X,\Phi,X^\vee,\Phi^\vee)$ be a reduced compact root datum. In $X_{\mathbb Q}:=X\otimes\mathbb Q$, let $V$ be the rational span of $\Phi$ and put $X_V:=X\cap V$. Then $X_V$ is saturated in $X$, so $Y:=X/X_V$ is free abelian. The semisimple projection of any $x\in X$ is the unique element $x_s\in V$ having the same pairings with all coroots; root-datum integrality gives $x_s\in P$. Thus $$j:X\longrightarrow P\oplus Y,\qquad x\longmapsto(x_s,x+X_V)$$ is injective: an element in its kernel lies in $X_V\subseteq V$ and equals its zero semisimple projection. It has finite-index image because its source and target have the same rank. Let $G_{sc}$ be the simply connected compact group of [L2], with $X^*(T_{sc})=P$, and let $A$ be the torus with character lattice $Y$. Then $j$ identifies $X$ with a finite-index sublattice of $X^*(T_{sc}\times A)=P\oplus Y$ and sends every root $\alpha$ to $(\alpha,0)$. [L2, L5]

2.1 Put $\widetilde T:=T_{sc}\times A$ and define $$C:=\{t\in\widetilde T:\chi(t)=1\text{ for every }\chi\in j(X)\}.$$ This is a finite subgroup of the torus $\widetilde T$, and [L5] identifies $X^*(\widetilde T/C)$ with $j(X)\cong X$. Since every root $(\alpha,0)$ belongs to $j(X)$, every element of $C$ acts trivially on all root spaces of $\operatorname{Lie}(G_{sc})_{\mathbb C}$ and hence its $G_{sc}$-component is central; the $A$-component is already central. Therefore $C$ is finite central in $A\times G_{sc}$, so $G_X:=(A\times G_{sc})/C$ is compact and connected. Its maximal torus is $\widetilde T/C$, its roots are the images of $\Phi$, and its character and cocharacter lattices with their pairing are precisely the prescribed root datum. Thus every reduced compact root datum is realised. [L1, L5, step 1.2]

3.1 For the classification statement: an isomorphism of root data respects the based root system up to a diagram automorphism, lifts to an isomorphism of the simply connected semisimple factors by [L2] and, on the abelian factor, is induced by the lattice duality of [L5]; these lift through the finite central quotients and hence induce an isomorphism $G_X\to G_{X'}$. Conversely an isomorphism of groups carries a maximal torus to a conjugate of a chosen one, hence induces an isomorphism of root data. Therefore isomorphism classes of compact connected Lie groups correspond to isomorphism classes of reduced compact root data, with the central torus directions retained; the finite cover of step 1.1 is the explicit supplier of the coverings used throughout. [A1, L2, L5, step 1.1, step 1.2, step 2.1]∎
