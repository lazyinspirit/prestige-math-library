---
id: thm-semisimple-flag-variety-smooth-projective
kind: theorem
title: A semisimple flag variety is smooth and projective
status: published
origin: pipeline
landmark: true
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-rational-pluecker-highest-weight-modules
  - lem-semisimple-projective-orbit-flag-quotients
  - lem-semisimple-flag-torsor-zariski-charts
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 21.68-21.91 and 23.59"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.1-1.2 (flag varieties as projective quotients)"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel subgroup $B=T\ltimes U$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let
$W_B=L(2\rho)$ with its $B$-stable line $\mathbb C v_B$ and the orbit map
$\pi_B:G\to\mathbb P(W_B)$, $g\mapsto g[v_B]$, be as in
[[lem-semisimple-rational-pluecker-highest-weight-modules]]. Then:

(i) $X_B=\pi_B(G)$ is a nonempty closed irreducible connected smooth
projective subvariety of $\mathbb P(W_B)$ of dimension $|\Phi^+|$ on which
$G$ acts transitively by automorphisms, and $\pi_B$ is a surjective morphism
whose fibres are exactly the right cosets $gB$;

(ii) consequently the orbit space $G/B$ carries the structure of an algebraic
quotient of $G$ by right translation by $B$, exhibited by the bijection
$G/B\to X_B$, $gB\mapsto g[v_B]$, with $B$ as the stabilizer of $[v_B]$ and
with $\pi_B$ as the quotient morphism; the quotient structure is compatible
with the Zariski-local product charts of
[[lem-semisimple-flag-torsor-zariski-charts]].

## Facts & Assumptions

**Given:** the group $G$ with maximal torus $T$, root system $\Phi$, positive system $\Phi^+$, Borel $B=T\ltimes U$, the Plücker module $W_B=L(2\rho)$ with its $B$-stable line $\mathbb C v_B$, the orbit map $\pi_B$ and the closed orbit $X_B=\pi_B(G)$.

[F1] $G$ is a connected smooth affine group scheme of finite type over $\mathbb C$ with $\operatorname{Lie}G=\mathfrak g$ semisimple, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, $\dim\mathfrak g=\dim\mathfrak h+2|\Phi^+|$, and $\dim\mathfrak b=\dim\mathfrak h+|\Phi^+|$; the root spaces are one-dimensional. ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F2] $U=\prod_{\beta\in\Phi^+}U_\beta$ is a closed connected unipotent subgroup with $\operatorname{Lie}U=\mathfrak n^+$, $B=T\ltimes U$ is a closed connected solvable subgroup with $\operatorname{Lie}B=\mathfrak b$ and $\dim B=\dim\mathfrak b$, and the restriction of characters $X^*(B)\to X^*(T)$ is an isomorphism. ([[lem-semisimple-borel-root-factorization]])

[F3] When $\Delta\ne\varnothing$, fix any $\alpha\in\Delta$. Then $W_B=L(2\rho)$ is a finite-dimensional rational representation of $G$ whose highest weight line $\mathbb C v_B$ is $B$-stable and is the only $B$-stable line, with $G$-orbit $X_B=\pi_B(G)$; the stabilizer of $[v_B]$ in $G$ is exactly $B$. ([[lem-semisimple-rational-pluecker-highest-weight-modules]], [[lem-semisimple-projective-orbit-flag-quotients]])

[F4] Under the same nonzero-rank hypothesis, $X_B=\pi_B(G)$ is a nonempty closed irreducible smooth projective subvariety of $\mathbb P(W_B)$ of dimension $|\Phi^+|$ on which $G$ acts by automorphisms, transitively on its point set; the fibres of $\pi_B$ are exactly the right cosets $gB$. ([[lem-semisimple-projective-orbit-flag-quotients]])

[F6] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

1.1 First suppose $\Delta=\varnothing$. Then $\Phi=\varnothing$, so $\mathfrak g=\mathfrak h$ is abelian by the root decomposition. An abelian semisimple Lie algebra is zero, because it is its own solvable radical. Since $G$ is connected and smooth of dimension $\dim\mathfrak g=0$ over $\mathbb C$, it is the single reduced point $\operatorname{Spec}\mathbb C$ (a smooth zero-dimensional finite-type scheme is a finite disjoint union of points). Thus $T=B=G$, $U=1$, $\mathfrak b=0$, and the Plücker construction is $W_B=\bigwedge^0(0)=\mathbb C$ with $v_B=1$. The orbit is $\mathbb P^0$, the orbit map and quotient are the identity of a point, and its single product chart is $\operatorname{Spec}\mathbb C\times B$. All claims hold, including dimension $|\Phi^+|=0$. For the rest of the proof assume $\Delta\ne\varnothing$ and fix a simple root, so [F3], [F4] and the torsor-chart supplier apply. [F1, F2, algebra]

1.2 The closed orbit. By [F4] the subset $X_B=\pi_B(G)\subseteq\mathbb P(W_B)$ is nonempty, closed, irreducible, smooth, projective of dimension $|\Phi^+|$, and $G$ acts on it by automorphisms transitively; the morphism $\pi_B$ is surjective onto $X_B$ by definition of $X_B$ as the image and is $G$-equivariant for the left action of $G$ on itself and on $\mathbb P(W_B)$. [F4]

1.3 Fibres and dimension. For $g_1,g_2\in G$ one has $\pi_B(g_1)=\pi_B(g_2)$ if and only if $g_1^{-1}g_2\in\operatorname{Stab}_G([v_B])=B$ by [F3], that is $g_2\in g_1B$; hence the fibres of $\pi_B$ are exactly the right cosets $gB$, each a translate of the subgroup $B$ of dimension $\dim B$ by [F2]. The orbit-closure dimension count $\dim X_B=\dim G-\dim B=|\Phi^+|$ supplied by [F4] is the corresponding instance of this fibre computation together with $\dim G=\dim\mathfrak h+2|\Phi^+|$ and $\dim B=\dim\mathfrak h+|\Phi^+|$ of [F1] and [F2]. This proves clause (i). [F1, F2, F3, F4]

2.1 The quotient structure on $G/B$. The map $gB\mapsto g[v_B]$ is a bijection $G/B\to X_B$ by step 1.3. The product charts of [[lem-semisimple-flag-torsor-zariski-charts]] cover $X_B$ by single $G$-translates of the open big-cell chart, and over each chart $\pi_B$ is the projection $V\times B\to V$ with right $B$ acting on the second factor. For every test scheme $S$, two lifts of a map $S\to X_B$ differ by a unique $B$-section after this Zariski cover, and lifts exist there; thus $X_B$ represents the fppf sheaf quotient $G/B$. A $B$-invariant morphism $f:G\to Y$ is constant on the second factor of each product chart and hence descends to morphisms $V\to Y$ that agree on overlaps because $\pi_B$ is surjective as an fppf sheaf. They glue uniquely to a morphism $X_B\to Y$, proving the categorical quotient property and clause (ii). [F3, F4, step 1.3, construct]

2.2 Connectedness, projectivity and closedness are the corresponding clauses of [F4]: $X_B$ is a closed subvariety of the projective space $\mathbb P(W_B)$, hence projective; it is irreducible, hence connected; and it is nonempty because it contains $[v_B]=\pi_B(1)$. [F4, step 1.2]

3.1 Conclusion. Steps 1.2, 1.3 and 2.2 prove clause (i), and step 2.1 proves clause (ii) using the proved product charts of [[lem-semisimple-flag-torsor-zariski-charts]]. The Axiom of Choice is assumed in the statement and declared as the dependency [[def-axiom-of-choice]] ([F6]); it is inherited through the representation-theoretic and orbit suppliers [F3] and [F4], and no further choice is made. [F1, F2, F3, F4, F6, step 1.2, step 1.3, step 2.1, step 2.2] ∎
