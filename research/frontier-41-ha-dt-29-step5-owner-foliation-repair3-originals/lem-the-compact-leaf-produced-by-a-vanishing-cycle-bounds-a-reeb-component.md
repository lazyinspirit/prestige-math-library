---
id: lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component
kind: lemma
title: "The compact leaf produced by a vanishing cycle bounds a Reeb component"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-simple-vanishing-cycle-produces-a-compact-leaf, def-reeb-component-in-a-cooriented-three-manifold-foliation, def-saturated-neighbourhood-of-a-leaf, def-two-dimensional-torus, def-euclidean-spheres-and-closed-balls, def-countable-choice-principle-for-foliation-pair, lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum, lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root, lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps, lem-the-primitive-pi-cap-block-embeds-and-gives-the-global-reeb-model]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 20
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a78: Theorem 8.1, printed p. 26; Lemmas 8.1-8.2 and Corollary 8.1, pp. 26-27; Theorem 8.2 and Reeb-model proof, pp. 27-28"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov's Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a73.2.2, printed pp. 49-51"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. In the situation of [[lem-a-simple-vanishing-cycle-produces-a-compact-leaf]], the compact leaf $L_1$ obtained is diffeomorphic to the torus $T^2$, and there is a Reeb component $R\subseteq M$ with $\partial R=L_1$: $R$ is a compact saturated submanifold diffeomorphic to $D^2\times S^1$ with boundary leaf $L_1$, every interior leaf of $R$ is a plane, and $(R,F|_R)$ is foliated-homeomorphic to the standard Reeb component ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]). Moreover, on the side $j$ of the nonzero $\Pi^j_1$ class (the side approached by the vanishing-cycle family when one is given), $L_1$ is the limit set of every sufficiently nearby displaced leaf: for a corresponding one-sided normal fence based at the supporting leaf, there is $\varepsilon>0$ such that the leaf $A_t$ through its displaced base point has limit set exactly $L_1$ for $0<t<\varepsilon$.

## Facts & Assumptions

**Given:** The situation of [[lem-a-simple-vanishing-cycle-produces-a-compact-leaf]]: a compact leaf $L_1$ produced by a vanishing cycle, on the side $j$ of a nonzero $\Pi^j_1$ class.

[F1] The in-pair item [[lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum]] identifies the no-transversal compact leaf as a torus, and the in-pair item [[lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root]] extracts a primitive embedded $\Pi$ meridian whose fence is an embedded annulus with actual embedded disk caps.

[F2] The in-pair item [[lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps]] supplies the contracting complementary longitude holonomy $H$, the embedded leafwise longitude annuli $A_t$ with $D_{H(t)}=D_t\cup A_t$, and the exhaustion of nearby leaves as planes with limit set exactly the original torus.

[F3] The in-pair item [[lem-the-primitive-pi-cap-block-embeds-and-gives-the-global-reeb-model]] assembles the paired quotient into an embedded solid torus whose foliation is foliated-homeomorphic to the standard Reeb component with continuous inverse at the boundary, and a Reeb component is a compact saturated solid torus with boundary mapped to a leaf ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]], [[def-saturated-neighbourhood-of-a-leaf]], [[def-two-dimensional-torus]], [[def-euclidean-spheres-and-closed-balls]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 The original compact leaf $L_1$ obtained from the vanishing-cycle situation has no closed transversal, since a closed transversal through it would contradict the displaced nullness of the vanishing-cycle family on the approached side; its strict positive accessible region has finite compact inward boundary, and finite plane-bundle Euler boundary evaluation together with the finite oriented-surface normal forms identify $L_1$ as a torus by [F1]. [F1, given]

2.1 Extract a primitive embedded $\Pi$ meridian on $L_1$ by [F1]: increasing finite-order holonomy is the identity and torsion-free nearby surface groups turn the displaced root null, so the full primitive fixed-flow fence is embedded and its positive circles bound actual embedded Jordan disks. A complementary longitude has no small fixed point, since otherwise the compact graph lemma would contradict meridian nullness; choosing its inverse gives a contraction $H$. [F1, step 1.1]

3.1 Finite collar suspension over a cut fundamental polygon gives the embedded leafwise longitude annuli and the relations $D_{H(t)}=D_t\cup A_t$ of [F2], and the iterates exhaust each nearby leaf as a plane with limit set exactly $L_1$. [F2, step 2.1]

4.1 The fundamental cap sweep paired quotient has embedded boundary torus $C$ by [F2]; proper local inverse preimage counts, zero on the original-leaf side and jumping by one across $C$, prove that the entire quotient is globally embedded as a solid torus, whose compact collar is attached to the original leaf $L_1$ by [F3]. [F2, F3, step 3.1]

5.1 Saturation follows because the boundary $L_1$ is a leaf and all block and collar points lie in the exhausting plane leaves; interval contraction conjugacy, compatible disk and annulus extension and uniform forward and inverse collar control produce the global foliated homeomorphism to the standard Reeb model by [F3]. Hence there is a Reeb component $R\subseteq M$ with $\partial R=L_1$, every interior leaf of $R$ is a plane, and on the side $j$ of the nonzero $\Pi^j_1$ class the limit set of every sufficiently nearby displaced leaf is exactly $L_1$ by [F2]. The finite surface, index, spherical-stability and explicit disk-extension lemmas provide the local prerequisites, no source sentence substitutes for these constructions, and only the standing countable choice from [F4] is used. [F2, F3, F4, step 4.1] ∎
