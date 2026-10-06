---
id: ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements
kind: example
title: "Compact isotopic submanifolds have isomorphic normal bundles and diffeomorphic complements"
status: published
origin: session
dependency_level: 11
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-characteristic-class-as-a-universal-natural-bundle-class,
       thm-chain-rule-for-differentials-of-smooth-maps,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-axiom-of-choice,
       thm-isotopy-extension,
       cor-isotopic-embeddings-have-diffeomorphic-complements,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       def-smooth-embedding,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-countable-choice,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-tangent-bundle-as-a-disjoint-union,
       def-differential-of-a-smooth-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $N$ be a smooth manifold without boundary, let $M$ be a compact smooth manifold and let $f_0,f_1:M\to N$ be isotopic embeddings with normal bundles $\nu_0=f_0^*TN/TM$ and $\nu_1=f_1^*TN/TM$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]). Then $\nu_0\cong\nu_1$ as smooth vector bundles over $M$ and $N\setminus f_0(M)\cong N\setminus f_1(M)$; under AC every characteristic class defined on these normal bundles agrees (for orientation-dependent classes, use orientations transported by the displayed bundle isomorphism) and the complements are diffeomorphic. The example verifies the two embedding invariants supplied by isotopy: the ambient diffeomorphism of [[cor-isotopic-embeddings-have-diffeomorphic-complements]] intertwines the normal bundles, and [[thm-isotopy-extension]] is the source of that diffeomorphism. (The converse fails: trivial normal bundles do not force isotopy, as the reflected-sphere counterexample on this page shows.)

## Facts & Assumptions

**Given:** Countable choice, a boundaryless $N$, a compact $M$, isotopic embeddings $f_0,f_1:M\to N$ with normal bundles $\nu_0,\nu_1$.

[F1] Isotopic embeddings are joined by a smooth isotopy of embeddings ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-smooth-embedding]]).

[L1] Under $\mathrm{AC}_\omega$ there is a diffeomorphism $H:N\to N$ with $H\circ f_0=f_1$, restricting to a diffeomorphism of pairs and of complements ([[cor-isotopic-embeddings-have-diffeomorphic-complements]], [[thm-isotopy-extension]]).

[L2] Under countable choice the normal quotients have their smooth bundle structures by [[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]. The chain rule is [[thm-chain-rule-for-differentials-of-smooth-maps]]. Under AC a characteristic class is natural in the bundle isomorphism class ([[def-characteristic-class-as-a-universal-natural-bundle-class]]). The normal bundle of the embedding $f_i$ is the fibrewise quotient $f_i^*TN/TM$, with tangent maps $df_i$ as in [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[def-tangent-bundle-as-a-disjoint-union]] and [[def-differential-of-a-smooth-map]]; a diffeomorphism $H$ carries $TN|_{f_0(M)}$ isomorphically onto $TN|_{f_1(M)}$ by its differential.

[A1] Countable choice is inherited from [L1]; the bundle isomorphism below is an explicit induced map and selects nothing. The characteristic-class clauses additionally assume AC ([[def-axiom-of-choice]]) ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] let $H$ be an ambient diffeomorphism with $H\circ f_0=f_1$. Its differential restricts to a smooth bundle isomorphism $dH:TN|_{f_0(M)}\to TN|_{f_1(M)}$ covering $f_1\circ f_0^{-1}$. [F1, L1, L2, A1]

2.1 On the level of $M$ the map $dH$ induces a bundle map $\nu_0\to\nu_1$ over the identity of $M$: by the chain rule, $dH$ carries the summand $df_0(T M)\subseteq TN|_{f_0(M)}$ isomorphically onto $df_1(TM)\subseteq TN|_{f_1(M)}$, so it descends to an isomorphism of the fibrewise quotients $\nu_0=f_0^*TN/TM\to\nu_1=f_1^*TN/TM$ over $\mathrm{id}_M$. A bundle map that is a linear isomorphism on each fibre is a bundle isomorphism, so $\nu_0\cong\nu_1$; consequently the characteristic classes natural under this bundle isomorphism agree. For the characteristic-class construction assume additionally AC. Orientation-dependent classes agree when orientations are transported by it; unrelated choices of orientations are not being compared. [L2, step 1.1]

2.2 The complement statement is the second conclusion of [L1]: $H$ restricts to a diffeomorphism $N\setminus f_0(M)\to N\setminus f_1(M)$ with smooth inverse. For the standard sphere and its reflection, the radial vectors at their image points give nowhere-zero smooth frames of the normal line bundles, so both are trivial. The reflected-sphere counterexample on this page proves they are not isotopic, establishing the parenthetical failure of the converse. [L1, step 1.1]

3.1 The normal bundles are isomorphic and the complements diffeomorphic, which is what the example claims. [step 2.1, step 2.2] ∎
