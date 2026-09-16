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

[L5] Finite abelian group duality: characters of a torus separate its points, and a finite group is recovered as the common kernel of the finite-index character lattices that contain or are contained in it ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]], [[thm-structure-of-a-compact-connected-abelian-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 The inclusion $[\mathfrak g,\mathfrak g]\hookrightarrow\mathfrak g$ integrates by [L3] to a homomorphism $G_{\mathrm{der}}^{\mathrm{sc}}\to G$ from the simply connected compact semisimple group of [L2]; the connected centre $Z(G)^0$ is the compact torus integrating $\mathfrak z(\mathfrak g)$ by [L1]. The product homomorphism $\mu:Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$, $\mu(z,x)=zx$, has an isomorphism on Lie algebras by [L1], hence is a local diffeomorphism at the identity by [L4]; its image is therefore open and, since the domain is connected, is all of $G$. Its kernel is discrete (the map is a local diffeomorphism) and hence finite by [L4], and it is central because the domain is abelian-by-central: the kernel is a closed subgroup of $Z(G)^0\times Z(G_{\mathrm{der}}^{\mathrm{sc}})$ mapped into $Z(G)$. [L1, L2, L3, L4]

1.2 Conversely, let $(X,\Phi,X^\vee,\Phi^\vee)$ be a reduced compact root datum. In $X_{\mathbb Q}:=X\otimes\mathbb Q$ let $V$ be the rational span of $\Phi$ and let $X_V:=X\cap V$; the pair $(X_V,\Phi,X^\vee_V,\Phi^\vee)$ is a semisimple root datum, and $X_V$ is intermediate between $Q$ and $P$ because the reflections act integrally. The simply connected compact group $G_{sc}$ of the root system $\Phi$ of [L2] has $X^*(T_{sc})=P$; the quotient of $G_{sc}$ by the finite central subgroup $C_V$ with $X^*(T_{sc}/C_V)=X_V$, which exists and is unique by finite character duality [L5], realises the semisimple part. The complementary summand of $X_V$ in $X$ determines a torus $A$ with character lattice equal to that complement, embedded so that $X$ has finite index in $X^*(A\times T_{sc})$. [L2, L5]

2.1 The finite group $C:=\ker\bigl(A\times G_{sc}\to \operatorname{Hom}(X,S^1)\bigr)$, i.e. the common kernel of the characters in $X$, is finite central in $A\times G_{sc}$ because every root of $\Phi$ vanishes on it; the quotient $G_X:=(A\times G_{sc})/C$ is compact connected with the prescribed roots, coroots and paired character–cocharacter lattices, so every reduced compact root datum is realised. [L1, L5, step 1.2]

3.1 For the classification statement: an isomorphism of root data respects the based root system up to a diagram automorphism, lifts to an isomorphism of the simply connected semisimple factors by [L2] and, on the abelian factor, is induced by the lattice duality of [L5]; these lift through the finite central quotients and hence induce an isomorphism $G_X\to G_{X'}$. Conversely an isomorphism of groups carries a maximal torus to a conjugate of a chosen one, hence induces an isomorphism of root data. Therefore isomorphism classes of compact connected Lie groups correspond to isomorphism classes of reduced compact root data, with the central torus directions retained; the finite cover of step 1.1 is the explicit supplier of the coverings used throughout. [A1, L2, L5, step 1.1, step 1.2, step 2.1]∎
