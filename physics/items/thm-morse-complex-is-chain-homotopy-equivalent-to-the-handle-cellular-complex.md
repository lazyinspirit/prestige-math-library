---
id: thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex
kind: theorem
title: "The Morse complex is chain isomorphic to the handle cellular complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-compactified-unstable-manifolds-give-a-cw-decomposition, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, def-signed-morse-differential-over-the-integers, def-mod-two-morse-differential, def-oriented-cellular-chain-group, def-cellular-boundary-from-three-consecutive-skeleta, thm-cellular-boundary-is-the-incidence-degree-matrix, def-cellular-homology, def-morse-homology-of-a-morse-smale-pair, def-orientation-line-of-a-morse-critical-point, def-chain-complex-in-an-abelian-category, def-graded-morphism-of-chain-complexes, prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence, def-axiom-of-choice, def-mod-two-morse-chain-group]
justified_by: []
dependency_level: 9
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9, Theorem 4.9.3 (existence of a chain isomorphism F between the Morse complex and the cellular complex) and its proof, printed pp. 115-126, PDF pp. 125-136"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Corollary 2.5.2 and Proposition 2.5.1: the Thom--Smale complex is isomorphic to the complex of the handle filtration and computes singular homology, read at PDF pp. 73-74"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, remark (3) and Lecture 21, Sec. 7.4: the comparison MC_* to C^{cell}_*, p maps to W^u(p), for self-indexing Morse functions, PDF pp. 87-88 and 99"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f,X)$ be
Morse--Smale on a closed manifold $M$, let
$\{e_p\}_{p\in\operatorname{Crit}(f)}$ be the cells of the Morse--Smale CW
decomposition with the orientation-line orientations of the unstable manifolds
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]],
[[def-orientation-line-of-a-morse-critical-point]]), and let
$C_*^{\mathrm{cell}}(M;\Lambda)$ be the cellular chain complex
([[def-oriented-cellular-chain-group]],
[[def-cellular-boundary-from-three-consecutive-skeleta]],
[[thm-cellular-boundary-is-the-incidence-degree-matrix]],
[[def-cellular-homology]]).

Then the sign-normalized identity map
$$\Theta:\ CM_k(f,X;\Lambda)\longrightarrow C_k^{\mathrm{cell}}(M;\Lambda),\qquad p\longmapsto \varepsilon'_p\,e_p,$$
with the signs $\varepsilon'_p\in\{\pm1\}$ of
[[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]], is
an isomorphism of chain complexes over $\Lambda=\mathbb Z/2$ (where
$\varepsilon'_p=1$) and over $\Lambda=\mathbb Z$. Equivalently, the signed
trajectory counts agree, up to the index normalization, with the
attaching-map (incidence) coefficients of the handle cellular complex; hence
the Morse complex is chain isomorphic to the handle cellular complex, in
particular chain homotopy equivalent to it
([[prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence]]), and
$$HM_k(f,X;\Lambda)\cong H_k^{\mathrm{cell}}(M;\Lambda).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, Morse--Smale data $(f,X)$ on a closed manifold
$M$, the Morse complex and the cellular complex of its Morse--Smale CW
decomposition.

[F1] Both chain groups are free modules on one generator per critical point:
the Morse chain group has basis $\operatorname{Crit}_k(f)$
([[def-mod-two-morse-chain-group]],
[[def-signed-morse-differential-over-the-integers]]) and the cellular chain
group has basis the $k$-cells $\{e_p\}$, so $\Theta$ is a degreewise
isomorphism, with $\varepsilon'_p\in\{\pm1\}$ a diagonal change of basis in
the integral case
([[def-oriented-cellular-chain-group]],
[[def-cellular-boundary-from-three-consecutive-skeleta]],
[[def-chain-complex-in-an-abelian-category]]).

[F2] The Morse differential is the matrix of trajectory counts
$n_X(p,q)$ over $\mathbb Z$ and its mod-two reduction over $\mathbb Z/2$
([[def-signed-morse-differential-over-the-integers]],
[[def-mod-two-morse-differential]]); the cellular differential is the
incidence matrix $[e_p:e_q]$
([[thm-cellular-boundary-is-the-incidence-degree-matrix]],
[[def-cellular-boundary-from-three-consecutive-skeleta]]).

[F3] The coefficient comparison of
[[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]] gives
$[e_p:e_q]=\varepsilon_{\operatorname{ind}(p)}n_X(p,q)$ over $\mathbb Z$ and
$[e_p:e_q]\equiv\#\mathcal M(p,q)$ over $\mathbb Z/2$, and states that the
cellular boundary matrix equals the trajectory matrix after the diagonal
basis change $e_p\mapsto\varepsilon'_p e_p$
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]] for the CW
structure used).

[F4] A chain isomorphism is a chain homotopy equivalence, and isomorphisms of
chain complexes induce isomorphisms on homology
([[prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence]],
[[def-chain-complex-in-an-abelian-category]],
[[def-graded-morphism-of-chain-complexes]]).

[F5] The homology of the Morse complex is Morse homology and the homology of
the cellular complex is cellular homology
([[def-morse-homology-of-a-morse-smale-pair]],
[[def-cellular-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the map $\Theta$ is a degreewise isomorphism of graded modules: on each degree it sends the basis $\operatorname{Crit}_k(f)$ bijectively onto the basis of $k$-cells, up to the diagonal signs $\varepsilon'_p$ which are invertible in both coefficient rings. [F1, given]

2.1 It remains to check that $\Theta$ commutes with the differentials. By [F2] the two differentials are the trajectory matrix and the incidence matrix, and by [F3] the incidence matrix equals the trajectory matrix after the diagonal basis change $e_p\mapsto\varepsilon'_p e_p$ in the integral case, while over $\mathbb Z/2$ the incidence coefficients are exactly the mod-two trajectory counts. [F2, F3, step 1.1]

3.1 Therefore, for every $k$, the composite $\Theta\circ\partial^{\mathrm{Morse}}_k$ and $\partial^{\mathrm{cell}}_k\circ\Theta$ have the same matrix with respect to the chosen bases; equality of matrices on a basis gives equality of homomorphisms, so $\Theta$ is a morphism of chain complexes, and being degreewise invertible it is an isomorphism of chain complexes. [F2, F3, step 2.1, algebra]

4.1 By [F4] the chain isomorphism $\Theta$ is a chain homotopy equivalence and induces an isomorphism on homology; by [F5] this homology isomorphism is the displayed $HM_k(f,X;\Lambda)\cong H_k^{\mathrm{cell}}(M;\Lambda)$. This completes the proof. [F4, F5, step 3.1] ∎
