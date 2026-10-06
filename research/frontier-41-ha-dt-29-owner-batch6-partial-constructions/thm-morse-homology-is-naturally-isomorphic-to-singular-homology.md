---
id: thm-morse-homology-is-naturally-isomorphic-to-singular-homology
kind: theorem
title: "Morse homology is naturally isomorphic to singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
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

**Given:** The Axiom of Choice, a closed manifold $M$, and the retained comparison and choice-independence claims. The geometric chain comparison and its compatibility with continuation are not supplied prerequisites.

[F1] Cellular homology of an existing finite CW complex is isomorphic to singular homology ([[thm-cellular-homology-computes-singular-homology]]).

[F2] A chain isomorphism induces a homology isomorphism ([[def-homology-object-of-a-chain-complex]], [[def-chain-complex-in-an-abelian-category]]).

## Proof

**Proof technique:** direct (partial proof attempt).

1.1 Conditional on a supplied Morse--Smale characteristic-disk construction and a supplied chain isomorphism $\Theta$, [F2] gives an isomorphism from Morse to cellular homology, and [F1] composes it with the cellular--singular comparison to give an isomorphism $\theta_{(f,X)}$. This is an isomorphism for that fixed geometric construction; no independence of different constructions or pairs follows from its existence alone. [F1, F2, given]

1.2 For a fixed supplied geometric comparison, reversing one unstable orientation changes the corresponding Morse generator and the cellular generator by the same diagonal sign. The normalized generator map therefore commutes with these basis changes, and the cellular--singular comparison sends the same geometric homology class to singular homology. Thus that comparison is unchanged under matched orientation changes. This conditional orientation calculation does not relate different CW auxiliary constructions or different pairs. [F1, F2, step 1.1, algebra] ∎

The exact additional missing supply for the claimed naturality is the compatibility equation $\theta_{(f^+,X^+)}\Phi_* = \theta_{(f^-,X^-)}$ for every allowed continuation, together with compatibility for two auxiliary characteristic-disk constructions of one pair. A chain-level version would supply geometric singular-chain comparisons $J^\pm$ and a degree-one operator $H$ with $J^+\Phi-J^-=\partial H+H\partial$. Merely knowing that $\Phi_*$ has composition and inverse laws cannot force the equation: composing one of the two comparison isomorphisms with a nonidentity automorphism of $H_*(M;\Lambda)$ preserves those abstract properties. The cited Audin–Damian closed CW comparison supplies an isomorphism, not the present continuation-versus-comparison equation. The retained naturality statement therefore remains not supplied, independently of the earlier disk and incidence gaps.
