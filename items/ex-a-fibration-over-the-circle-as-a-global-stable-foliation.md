---
id: ex-a-fibration-over-the-circle-as-a-global-stable-foliation
kind: example
title: "A fibration over the circle as a globally stable foliation"
status: published
origin: pipeline
provenance: {"statement": "literature-derived", "proof": "literature-derived"}
deps: ["prop-mapping-torus-foliations-realize-global-reeb-stable-examples", "def-two-dimensional-torus", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure", "def-countable-choice-principle-for-foliation-pair", "cor-fundamental-group-of-two-dimensional-torus"]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources: {"references": [{"title": "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)", "url": "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf", "locator": "§4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7; Lemma 4.24, printed p. 155 (PDF p. 164)"}, {"title": "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF; MMF-derived corroboration)", "url": "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf", "locator": "§1.3.6, printed p. 10 (PDF p. 11); §2.1, printed pp. 11–14 (PDF pp. 12–15); §2.2, printed pp. 14–15 (PDF pp. 15–16)"}, {"title": "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003) — design's locators §§2.3, 2.5–2.6, pp. 30–33 and 44–55; not retrievable as full text", "url": "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016", "locator": "Design locators: §2.3, pp. 30–33 (local Reeb stability); §2.5, pp. 44–51 (global Reeb stability); §2.6, pp. 51–55 (Thurston stability)"}]}
dependency_level: 3
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]). Let $T^2=(\mathbb R/\mathbb Z)^2$ and $f(x,y)=(x+y,y)$. Its mapping torus, with quotient action $(z,t)\mapsto(f(z),t+1)$, has a smooth cooriented fibre foliation with compact torus leaves and trivial holonomy. Positive-time return is the inverse Dehn twist $f^{-1}(x,y)=(x-y,y)$. The bundle is not the product bundle over $S^1$. It illustrates the fibration conclusion of global Reeb stability; since torus fundamental groups are infinite, it does not satisfy that theorem's finite-fundamental-group hypothesis.

## Facts & Assumptions

**Given:** The torus, Dehn twist and quotient action above, with $\mathrm{AC}_\omega$.

[F1] The mapping torus of a diffeomorphism is a smooth closed manifold with compact fibre leaves and trivial holonomy; the stated quotient convention gives positive return $f^{-1}$. The bundle is trivial exactly when $f$ is isotopic to the identity ([[prop-mapping-torus-foliations-realize-global-reeb-stable-examples]]).

[F2] $\pi_1(T^2)=\mathbb Z^2$, with the two coordinate loops as generators ([[cor-fundamental-group-of-two-dimensional-torus]]).

## Verification

1.1 The integer-linear map $(x,y)\mapsto(x+y,y)$ descends to the torus, and $(x,y)\mapsto(x-y,y)$ is its smooth two-sided inverse. Thus F1 applies and supplies the smooth mapping torus, fibre bundle, torus leaves and trivial holonomy. The form $dt$ is invariant under the quotient action and coorients the fibre foliation. [F1, algebra]

1.2 The map $f$ fixes the horizontal coordinate loop and sends the vertical loop to the loop $(s,s)$, the sum of the two generators in F2. Its induced matrix is $\begin{pmatrix}1&1\\0&1\end{pmatrix}$, which is not the identity. An isotopy to the identity would induce the identity on the abelian fundamental group: the basepoint motion changes induced maps only by conjugation, and conjugation in $\mathbb Z^2$ is trivial. Therefore $f$ is not isotopic to the identity, and F1 shows that the bundle is not isomorphic over $S^1$ to the product bundle. F2 also shows that every leaf has infinite fundamental group, so no finite-fundamental-group instance of the global theorem has been asserted. [F1, F2]

2.1 Starting at $[z,0]$ and flowing positively in $t$ for time one gives $[z,1]=[f^{-1}(z),0]$. Thus the whole-fibre return is $f^{-1}$, with no sign-convention ambiguity. [F1, step 1.1]

3.1 This is a global compact holonomy-free torus foliation with nontrivial bundle monodromy and positive return $f^{-1}$; all conclusions were verified from the explicit quotient and mapping-torus supplier under countable choice. [step 1.1, step 2.1, step 1.2] ∎
