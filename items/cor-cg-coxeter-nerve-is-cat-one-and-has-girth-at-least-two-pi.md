---
id: cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi
kind: corollary
title: "The Coxeter nerve is CAT(1), and its girth and the girths of all its links are at least $2\\pi$"
status: published
origin: pipeline
dependency_level: 19
deps:
  - def-cg-coxeter-nerve-and-moussong-metric
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - lem-cg-metric-flag-links-and-local-cat-one
  - thm-cg-large-metric-flag-complexes-are-cat-one
  - thm-cg-finite-type-positive-definite-criterion
  - lem-cg-bowditch-quantitative-short-loop-control
  - def-cg-short-loop-homotopy-and-nonshrinkability
  - lem-cg-cat-one-short-and-closed-local-geodesics
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - def-cg-cat-zero-cat-one-and-local-geodesic
  - lem-cg-comparison-convexity-and-model-spaces
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume AC. It supplies compact geodesic structure for each component of the finite nerve, which is needed to apply the compact short-loop theorem in clause (ii). The finite-type dictionary in clause (i) is choice-free; clauses (iii)–(iv) use the stated CAT(1), link and local-geodesic inputs without additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 2, Section 10: Proposition 10.1 (girth of $N(A)$ at least $2\\pi$) and Corollary 10.2 (girths of the links of all simplices at least $2\\pi$); Section 5 for the girth definition"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 3: Theorem 3.2, Proposition 3.3 (CAT(1) is equivalent to the girth bound for the nerve and all links) and Proposition 3.4 ([Moussong, Corollary 10.2]: all girths $\\ge2\\pi$); Section 3 also documents the gap in Moussong's Lemmas 9.5, 9.7 and 9.11, which concerns the hyperbolic case (Theorem B) and is not used here"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 7.3 and Chapter 12 (the Davis complex and its links; the nerve with the Moussong metric)"
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.8-2.10 (Gromov's and Moussong's lemmas: largeness of all-right and of metric flag complexes with simplices of size $>\\pi/2$)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(W,S)$ be a finite-rank Coxeter system and let $L=L(W,S)$ be its Coxeter nerve with the Moussong metric ([[def-cg-coxeter-nerve-and-moussong-metric]]).

**(i) $L$ is a finite large metric flag complex.** Every off-diagonal entry of every $C_T$ lies in $[-1,0]$, so $L$ is large ([[def-cg-coxeter-nerve-and-moussong-metric]](3)). For a pairwise adjacent nonempty set $T\subseteq S$, the matrix $C_T$ is its cosine matrix and the nerve definition gives $(W_T,T)$ the restricted Coxeter system ([[def-cg-coxeter-nerve-and-moussong-metric]](1)); applying [[thm-cg-finite-type-positive-definite-criterion]](1) to that system shows $T$ spans a simplex exactly when $C_T$ is positive definite. The empty set is a simplex face and its empty matrix is positive definite vacuously ([[def-cg-coxeter-nerve-and-moussong-metric]](1)). Hence the metric flag condition of [[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]](3) holds.

**(ii) $L$ is CAT(1), and every short loop in $L$ is shrinkable.** By (i) and [[thm-cg-large-metric-flag-complexes-are-cat-one]], $L$ is CAT(1) for its truncated angular metric. Each component with its untruncated intrinsic metric is compact geodesic by [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii); a CAT(1) component is locally CAT(1) with uniform radius $\pi/4$ (proof step 2.1), so [[lem-cg-bowditch-quantitative-short-loop-control]](iv) makes every short loop shrinkable. Hence $L$ has no nonshrinkable loop of length $<2\pi$.

**(iii) The same for every link.** For every face $F$ of $L$, the link $\operatorname{Lk}_L(F)$ is again a finite large metric flag complex by [[lem-cg-metric-flag-links-and-local-cat-one]](i), hence CAT(1) by [[thm-cg-large-metric-flag-complexes-are-cat-one]]. Iterating the Schur complement identifies it with the nerve of the link matrix ([[def-cg-coxeter-nerve-and-moussong-metric]](3), [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv)). Every nonconstant closed local geodesic in a CAT(1) space has length at least $2\pi$ ([[lem-cg-cat-one-short-and-closed-local-geodesics]](iii)); an isometrically embedded circle is such a closed local geodesic. Therefore, with $g(Y):=\inf\{\ell>0:Y\text{ contains an isometrically embedded circle of length }\ell\}$ and $g(Y):=+\infty$ when no such circle exists, the girth of $L$ and of every face link is at least $2\pi$.

**(iv) Caveat.** Nothing here asserts that $W$ is Gromov hyperbolic; that statement requires a strict form of the girth analysis on spherical links. Möller exhibits a counterexample to Moussong's Lemma 9.11 in its cited generality, so this proof does not use that lemma. The in-library proof uses the confined radial insertion, three-edge reduction and dimension induction, independently of that disputed lemma.

## Facts & Assumptions

**Given:** AC and a Coxeter system $(W,S)$ with finite $S$, Coxeter matrix $m$, canonical form $B$, cosine matrices $C_T=(B(e_s,e_t))_{s,t\in T}$ and its Coxeter nerve $L=L(W,S)$ with the Moussong metric.

[F1] The nerve $L$ is the finite spherical complex whose simplices are the spherical subsets $T$ with $C_T$ positive definite; a two-element subset spans an edge exactly when $m_{st}<\infty$, of length $\pi-\pi/m_{st}\in[\pi/2,\pi)$; every off-diagonal entry of every $C_T$ lies in $[-1,0]$ and links of faces are computed by the iterated Schur complement. ([[def-cg-coxeter-nerve-and-moussong-metric]])

[F2] A finite spherical complex is large when all simplex off-diagonals are at most $0$ and is metric flag when every pairwise adjacent vertex set spans a simplex exactly when its cosine matrix is positive definite; its links are again finite spherical complexes. ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F3] The nerve definition supplies the restricted Coxeter system $(W_T,T)$ for every $T$ ([[def-cg-coxeter-nerve-and-moussong-metric]](1)); for nonempty $T$, the finite-type criterion says $W_T$ is finite if and only if its canonical Coxeter form, with matrix $C_T$, is positive definite. The empty case is handled directly. ([[thm-cg-finite-type-positive-definite-criterion]](1))

[F4] Face links of finite large metric flag complexes are again finite large metric flag complexes. ([[lem-cg-metric-flag-links-and-local-cat-one]])

[F5] Under AC every finite large metric flag complex is CAT(1) for its truncated angular metric, and its untruncated components have the same short comparison tests. ([[thm-cg-large-metric-flag-complexes-are-cat-one]])

[F6] In a compact geodesic locally CAT(1) space, CAT(1) implies that every short loop is shrinkable ([[lem-cg-bowditch-quantitative-short-loop-control]](iv)); “short” and “shrinkable” have the conventions of [[def-cg-short-loop-homotopy-and-nonshrinkability]].

[F7] Iterating the normalized Schur-complement formula over a face identifies each cell link with the spherical simplex on its remaining vertices. The full complex link is obtained by gluing these cell links; its identification with the nerve of the normalized link matrix is derived in step 3.1. ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]])

[F8] In a CAT(1) space every nonconstant closed local geodesic has length at least $2\pi$; a circle is a closed local geodesic by its isometric parametrization. ([[lem-cg-cat-one-short-and-closed-local-geodesics]](iii), [[def-cg-cat-zero-cat-one-and-local-geodesic]](5),(7))

[F9] A CAT(1) space is locally CAT(1) with a uniform radius $\pi/4$: the closed ball $\bar B(p,\pi/4)$ is convex, since a geodesic triangle with vertex $p$ and endpoints in the ball has perimeter at most $\pi<2\pi$ and CAT(1) comparison keeps each side point within $\pi/4$ of the model vertex; the model ball is convex by [[lem-cg-comparison-convexity-and-model-spaces]](ii). CAT(1) comparison restricts to this convex ball.

[F10] Each component of the finite nerve is compact without Choice; under AC it has minimizing geodesics ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii)). AC is also used with the compact short-loop theorem in step 2.1; the finite-type dictionary is choice-free. ([[def-axiom-of-choice]])

## Proof

1.1 Clause (i): every off-diagonal entry of every $C_T$ lies in $[-1,0]$ [F1], so $L$ is large by [F2]. If $T=\emptyset$, it is spherical and its empty matrix is positive definite by convention. If $T\ne\emptyset$, [F1] makes $(W_T,T)$ the restricted Coxeter system with matrix $m|_T$, so [F3] applies (including the singleton case) and gives $W_T$ finite exactly when $C_T$ is positive definite. This is precisely the cell condition in [F1], hence every pairwise adjacent set spans a simplex exactly when its cosine matrix is positive definite. Thus $L$ is metric flag and finite large metric flag. [F1, F2, F3, algebra]

2.1 Clause (ii): by 1.1 and [F5] the nerve $L$ with its truncated Moussong metric is CAT(1). By [F1] and [F10], each component with its untruncated intrinsic metric is compact and geodesic. It is CAT(1): all sides and cross-distances in a triangle of perimeter $<2\pi$ are below $\pi$, so comparison is unchanged by truncation. Curve lengths and local geodesic germs agree in the two metrics, and their uniform topologies agree; thus short-loop homotopy is unchanged as well. For any point $p$ in a CAT(1) component, the closed ball $\bar B(p,\pi/4)$ is convex: its center-and-endpoints triangles have perimeter at most $\pi<2\pi$, and comparison with the convex round ball of radius $\pi/4$ keeps each point of a segment in the ball [F9]. Any two points of this ball at distance $<\pi$ have their geodesic in the ball, and its CAT(1) comparison inequalities are inherited from the component, so the ball is CAT(1). Thus each component is locally CAT(1) with uniform radius $\pi/4$. Applying [F6] componentwise makes every short loop shrinkable, so no nonshrinkable loop of length $<2\pi$ exists in $L$. [F1, F5, F6, F9, F10, step 1.1]

3.1 Clause (iii): by [F4] the link of every face of $L$ is again a finite large metric flag complex, so by [F5] every such link is CAT(1); For nonempty $F$, let $U$ be the vertices $t\notin F$ for which $F\cup\{t\}$ is a simplex, and form the Schur complement $Z$ of $C_F$ in $C_{F\cup U}$. Its diagonal entries are positive because each $C_{F\cup\{t\}}$ is positive definite. Put $D=\operatorname{diag}(z_{tt}^{-1/2})$ and $A=DZD$. Eliminating the vertices of $F$ successively subtracts products of nonpositive entries divided by positive pivots, so $Z$ and $A$ have nonpositive off-diagonal entries. For every $T\subseteq U$, the block-completion identity proved in [[lem-cg-metric-flag-links-and-local-cat-one]], gives $A_T$ positive definite exactly when $C_{F\cup T}$ is positive definite. A nonedge pair in the latter has block $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, which excludes positive definiteness; for pairwise adjacent sets the nerve's cell test [F1] applies. Hence $A_T$ is positive definite exactly when $F\cup T$ is a simplex. On these cells, $A_T$ is their link Gram matrix by [F7], so the spherical complex with cells $\Sigma(A_T)$ for the positive-definite principal submatrices $A_T$ (the nerve of $A$) is isometric cell by cell, and therefore for the chain and truncated metrics, to $\operatorname{Lk}_L(F)$. The empty face gives $L$ itself, and an empty $U$ gives an empty link. By [F8], every nonconstant closed local geodesic in $L$ or a face link has length at least $2\pi$. An isometrically embedded circle is a closed local geodesic, so no such circle has length below $2\pi$. Therefore the embedded-circle girth $g$ defined in the Statement satisfies $g(L)\ge2\pi$ and $g(\operatorname{Lk}_L(F))\ge2\pi$ for every face $F$, with $g=+\infty$ when the circle set is empty. [F1, F4, F5, F7, F8, step 2.1]

4.1 Clause (iv): clauses (ii)–(iii) give CAT(1) and the non-strict girth bound; they do not assert Gromov hyperbolicity. The proof uses the confined insertion and direct three-edge contradiction, and does not consume Moussong's disputed star-avoiding lemma. [F5, F8, step 2.1, step 3.1] ∎
