---
id: def-split-reductive-algebraic-group
kind: definition
title: Split reductive groups
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 19
deps: [def-axiom-of-choice, lem-diagonalizable-character-antiequivalence, def-radical-and-unipotent-radical-of-an-algebraic-group, def-group-of-multiplicative-type-and-torus, def-borel-subgroup-and-maximal-torus, lem-maximal-tori-extension-conjugacy-and-derived-group, lem-character-and-cocharacter-lattices-of-a-split-torus, lem-adjoint-representation-of-an-affine-group-scheme, thm-lie-bracket-and-adjoint-action-from-infinitesimals, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, thm-multiplicative-type-groups-and-galois-character-modules]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Definitions 19.20 and 19.22, printed pp. 401-403; Ch. 17 (17.82)-(17.85); Ch. 10 (10.20)-(10.24)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.1-S6.2, pp. 66-74; S6.5 Definitions 177"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "S4.1, in particular the definition of a reductive group scheme and Theorem 4.1.4"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

A **split reductive group** over $k$ is a pair $(G,T)$ consisting of a reductive algebraic group $G$ over $k$ ([[def-radical-and-unipotent-radical-of-an-algebraic-group]]) and a maximal torus $T\subseteq G$ that is split, i.e. isomorphic over $k$ to $\mathbf G_m^r$ for some $r$ ([[def-group-of-multiplicative-type-and-torus]], [[def-borel-subgroup-and-maximal-torus]]). 

The following supplemental existence and field-invariance facts assume the Axiom of Choice ([[def-axiom-of-choice]]) through their cited suppliers. Since maximal tori exist, any torus lies in one, and maximality is preserved by field extension ([[lem-maximal-tori-extension-conjugacy-and-derived-group]]), the rank $\dim T$ and the semisimple rank $\operatorname{rk}(G/R(G))$ are well defined. A homomorphism of split reductive groups $(G,T)\to(G',T')$ is a homomorphism of algebraic groups carrying $T$ into $T'$. Because $G$ is affine of finite type, the adjoint representation $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$ ([[lem-adjoint-representation-of-an-affine-group-scheme]], [[thm-lie-bracket-and-adjoint-action-from-infinitesimals]]) restricts to a rational representation of $T$ on $\mathfrak g=\operatorname{Lie}(G)$, to which the eigenspace decomposition of diagonalizable groups applies ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]]). We write $X=X(T)$, $X^\vee=X_*(T)$ for the lattices of [[lem-character-and-cocharacter-lattices-of-a-split-torus]]. Every reductive group splits over a finite separable extension of the base field; the split hypothesis is kept throughout.

Under this same assumption, the rank of $(G,T)$ is the common dimension of its maximal tori and the semisimple rank is the rank of the semisimple quotient $G/R(G)$; both are additive invariants of the pair. The split hypothesis is exactly the requirement that the geometric character lattice $X^*(T)=\operatorname{Hom}_{k_s}(T_{k_s},\mathbf G_m)$ have trivial $\operatorname{Gal}(k_s/k)$-action; it is always a free $\mathbb Z$-module of finite rank, and $X(T)=X^*(T)^{\operatorname{Gal}(k_s/k)}$. The equivalence with splitting is [[thm-multiplicative-type-groups-and-galois-character-modules]], which is why the root datum of $(G,T)$ is defined over $k$ rather than only over a finite extension. A homomorphism of split reductive groups need not carry $T$ isomorphically onto $T'$; the induced map on character lattices is then only a homomorphism. An isogeny carrying $T$ onto $T'$ induces an injective character-lattice map with finite cokernel, by the split character anti-equivalence ([[lem-diagonalizable-character-antiequivalence]]); it need not induce an isomorphism even if the two groups have the same abstract root datum. For example, the isogeny $t\mapsto t^p$ of $\mathbf G_m$ in characteristic $p$ induces multiplication by $p$ on its character lattice $\mathbb Z$.
