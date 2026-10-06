---
id: thm-morse-homology-is-naturally-isomorphic-to-singular-homology
kind: theorem
title: "Morse homology is naturally isomorphic to singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex, thm-cellular-homology-computes-singular-homology, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-cellular-homology, def-morse-homology-of-a-morse-smale-pair, def-canonical-morse-homology-of-a-closed-manifold, thm-reverse-continuation-is-an-inverse-on-morse-homology, thm-continuation-composition-law-on-homology, def-homology-object-of-a-chain-complex, def-chain-complex-in-an-abelian-category, def-axiom-of-choice]
justified_by: []
dependency_level: 14
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9, Theorem 4.9.3 and the consequent isomorphism of Morse homology with cellular homology, printed pp. 115-126, PDF pp. 125-136"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Corollary 2.5.2: for any Morse--Smale pair on a compact manifold there is an isomorphism from the homology of the Morse--Floer complex to singular homology, read at PDF p. 74"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, remark (3): the chain of isomorphisms from Morse homology to cellular and singular homology, PDF p. 87"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
smooth manifold and $\Lambda=\mathbb Z/2$ or $\mathbb Z$. For every
Morse--Smale pair $(f,X)$ on $M$ the composite
$$HM_k(f,X;\Lambda)\xrightarrow{\ \Theta\ }H_k^{\mathrm{cell}}(M;\Lambda)\xrightarrow{\ \cong\ }H_k(M;\Lambda)$$
of the chain isomorphism $\Theta$ of
[[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]]
with the cellular--singular comparison theorem
[[thm-cellular-homology-computes-singular-homology]] applied to the finite CW
complex of the Morse--Smale decomposition
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]],
[[def-cellular-homology]]) is an isomorphism
$$\theta_{(f,X)}:HM_k(f,X;\Lambda)\xrightarrow{\ \cong\ }H_k(M;\Lambda).$$
The isomorphism is independent of the auxiliary choices used to build the CW
decomposition and (over $\mathbb Z$) of the orientation lines, and it
identifies the canonical Morse homology
[[def-canonical-morse-homology-of-a-closed-manifold]] with singular homology:
$$HM_*(M;\Lambda)\cong H_*(M;\Lambda).$$
Here the word *naturally* expresses that the isomorphism is independent of
the Morse--Smale pair, the CW auxiliary choices and the orientation lines, as
proved below; no functoriality with respect to smooth maps is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold $M$, and a Morse--Smale pair
$(f,X)$ on $M$.

[F1] The compactified unstable manifolds of $(f,X)$ give a finite CW
structure on $M$ with one cell per critical point, so the cellular complex of
this CW structure is defined and the cellular--singular comparison applies,
naturally with respect to cellular maps
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]],
[[thm-cellular-homology-computes-singular-homology]],
[[def-cellular-homology]]).

[F2] The sign-normalized identity map $\Theta$ is an isomorphism of chain
complexes from the Morse complex to the cellular complex, hence induces an
isomorphism on homology
([[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]],
[[def-homology-object-of-a-chain-complex]],
[[def-chain-complex-in-an-abelian-category]]).

[F3] Cellular homology of a fixed CW complex is independent of the choice of
cell orientations: changing the orientation of a cell conjugates the cellular
differential by the corresponding diagonal sign change. On the Morse side the
same change conjugates the Morse complex and changes the signs
$\varepsilon'_p$ of $\Theta$ accordingly, so the composite $\theta_{(f,X)}$
is unchanged
([[def-morse-homology-of-a-morse-smale-pair]],
[[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]]).

[F4] For the canonical homology of
[[def-canonical-morse-homology-of-a-closed-manifold]] one uses the chosen
Morse--Smale pair defining it; any other Morse--Smale pair is related to it by
the canonical continuation isomorphism, with identity and composition laws
([[thm-reverse-continuation-is-an-inverse-on-morse-homology]],
[[thm-continuation-composition-law-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the Morse--Smale CW decomposition of $(f,X)$ is a finite CW structure with one $k$-cell per critical point of index $k$, so its cellular chain complex is defined and its homology is cellular homology. [F1, given]

2.1 By [F2] the map $\Theta$ is an isomorphism of chain complexes from the Morse complex to the cellular complex, and therefore induces an isomorphism $HM_k(f,X;\Lambda)\to H_k^{\mathrm{cell}}(M;\Lambda)$ on homology; composing with the cellular--singular comparison of [F1] gives the isomorphism $\theta_{(f,X)}$ of the statement. [F2, step 1.1]

3.1 By [F3] the composite is unchanged by the choice of cell orientations and of the orientation lines used to define $\Theta$; the auxiliary choices in the CW decomposition only change the cellular complex by an isomorphism through which $\Theta$ factors, so the map $\theta_{(f,X)}$ is independent of them. [F3, step 2.1]

4.1 For the canonical Morse homology, choose the Morse--Smale pair $(f_0,X_0)$ used in its definition and apply step 2.1 to obtain $\theta_{(f_0,X_0)}$; by [F4] any other pair is related to $(f_0,X_0)$ by a canonical continuation isomorphism, with composition and inverse laws, so the identification $HM_*(M;\Lambda)\cong H_*(M;\Lambda)$ is well defined up to the canonical isomorphisms and is natural in the sense of choice-independence. [F4, step 3.1] ∎
