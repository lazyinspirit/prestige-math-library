---
id: lem-the-local-intersection-sign-of-the-graph-and-diagonal
kind: lemma
title: "The local intersection sign of graph against diagonal is sign det(I-Df)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-fixed-points-are-graph-diagonal-intersections, lem-graph-transversality-is-fixed-point-nondegeneracy, def-local-fixed-point-index, thm-index-of-a-nondegenerate-fixed-point, def-local-oriented-intersection-sign, def-oriented-intersection-number, thm-intersection-number-under-factor-interchange, prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold, prop-the-diagonal-is-an-embedded-submanifold, thm-canonical-tangent-and-cotangent-splittings-for-products, def-product-orientation, def-differential-of-a-smooth-map, cor-determinant-is-alternating-multilinear-in-the-rows, def-countable-choice, thm-determinant-of-transpose, def-global-geometric-lefschetz-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 121-122 (the local number is the orientation number of the graph against the diagonal, computed as a determinant)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (sign(x)=sign det(I-df), normal bundle of the diagonal identified with the tangent bundle)"
dependency_level: 5
---

## Statement

Let $M$ be a closed oriented smooth $n$-manifold, $n\ge1$, let $f:M\to M$ be smooth with
all fixed points nondegenerate, let $\Gamma_f\subseteq M\times M$ be the graph
oriented by the diffeomorphism $x\mapsto(x,f(x))$ onto $M$ and let $\Delta_M$ be
the diagonal oriented by $x\mapsto(x,x)$, with $M\times M$ carrying the product
orientation ([[def-product-orientation]]). Then at each fixed point $x$, for the
ordered pair of factors $(\Gamma_f,\Delta_M)$, the local oriented intersection
sign of [[def-local-oriented-intersection-sign]] is
$$\varepsilon_{(\Gamma_f,\Delta_M)}(x)=\operatorname{sign}\det(I-Df_x)=\operatorname{ind}_x(f).$$
Consequently the oriented intersection numbers of
[[def-oriented-intersection-number]] satisfy
$$I(\gamma_f,\Delta_M)=I(\Gamma_f,\Delta_M)=\sum_{x\in\operatorname{Fix}(f)}\operatorname{ind}_x(f)=I(f),$$
the graph map being $\gamma_f(x)=(x,f(x))$
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]), and the sum is
finite because $\Gamma_f$ and $\Delta_M$ are closed complementary submanifolds
of the closed oriented $M\times M$. The factor order matters: in the order
$(\Delta_M,\Gamma_f)$ every local sign is multiplied by $(-1)^n$
([[thm-intersection-number-under-factor-interchange]]).

## Facts & Assumptions

**Given:** A closed oriented smooth $n$-manifold $M$, a smooth $f:M\to M$ with all fixed points nondegenerate, the graph $\Gamma_f$ and diagonal $\Delta_M$ in the closed oriented manifold $M\times M$.

[F1] At a coincidence point of transverse oriented maps the local sign compares the ordered direct sum $T_aX\oplus T_bZ\to T_yM$ of the two tangent spaces, with the product orientation, to the ambient orientation ([[def-local-oriented-intersection-sign]], [[def-product-orientation]]).

[F2] The graph map $\gamma_f$ and the diagonal map $\delta_M(x)=(x,x)$ are diffeomorphisms onto the embedded submanifolds $\Gamma_f,\Delta_M$ of dimension $n$; in the splitting $T_{(x,x)}(M\times M)\cong T_xM\oplus T_xM$ the tangent space of the graph is $\{(v,Df_xv)\}$ and that of the diagonal $\{(v,v)\}$ ([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]], [[prop-the-diagonal-is-an-embedded-submanifold]], [[thm-canonical-tangent-and-cotangent-splittings-for-products]], [[def-differential-of-a-smooth-map]]).

[F3] $\Gamma_f$ and $\Delta_M$ meet transversely at $\gamma_f(x)$ exactly when $x$ is a nondegenerate fixed point ([[lem-graph-transversality-is-fixed-point-nondegeneracy]]), and then $\operatorname{ind}_x(f)=\operatorname{sign}\det(I-Df_x)$ ([[thm-index-of-a-nondegenerate-fixed-point]]).

[L1] The oriented intersection number of a map transverse to a closed oriented submanifold is the finite sum of the local signs over the preimages ([[def-oriented-intersection-number]]), and exchanging the two ordered factors multiplies every local sign by $(-1)^{ab}$ for dimensions $a,b$ ([[thm-intersection-number-under-factor-interchange]]). Countable Choice is inherited by the intersection number, not by its displayed finite sums ([[def-countable-choice]]).

## Proof

1.1 The determinant at a fixed point. Let $x$ be a fixed point and let $(e_1,\dots,e_n)$ be a positively oriented basis of $T_xM$. By [F2] the tuples $(e_i,Df_xe_i)_{i\le n}$ and $(e_j,e_j)_{j\le n}$ are positively oriented bases of $T_{\gamma_f(x)}\Gamma_f$ and $T_{(x,x)}\Delta_M$; concatenated in the order $(\Gamma_f,\Delta_M)$ and expressed in the ambient basis $((e_1,0),\dots,(e_n,0),(0,e_1),\dots,(0,e_n))$ of $T_{(x,x)}(M\times M)$ they form the columns of the block matrix $\begin{pmatrix}I&I\\ Df_x&I\end{pmatrix}$. Subtracting the $i$-th column from the $(n+i)$-th column for each $i$ (a column shear of determinant $1$, [[cor-determinant-is-alternating-multilinear-in-the-rows]] applied to the transpose, using [[thm-determinant-of-transpose]]) gives the block lower triangular matrix $\begin{pmatrix}I&0\\ Df_x&I-Df_x\end{pmatrix}$, whose determinant is $\det(I-Df_x)$. The orientation comparison of [F1] is therefore $\operatorname{sign}\det(I-Df_x)$, and by [F3] this is $\operatorname{ind}_x(f)$. [given, F1, F2, F3]

2.1 The global intersection number. By [F3] the graph map is transverse to the diagonal precisely because all fixed points are nondegenerate, and transversality plus closedness of the complementary-dimensional submanifolds in the compact $M\times M$ makes the intersection finite; by [L1] the oriented intersection number $I(\gamma_f,\Delta_M)$ is the sum of the local signs over the fixed points, which by step 1.1 is $\sum_x\operatorname{ind}_x(f)=I(f)$, the geometric Lefschetz number of [[def-global-geometric-lefschetz-number]]. Replacing the graph map by the inclusion of the graph changes nothing: the two are identified by the diffeomorphism $x\mapsto(x,f(x))$, which is orientation-preserving and conjugates the local data, so $I(\Gamma_f,\Delta_M)=I(\gamma_f,\Delta_M)$. [step 1.1, F3, L1]

3.1 Factor order. In the opposite order $(\Delta_M,\Gamma_f)$ the ambient tangent space is presented with the two $n$-dimensional factors exchanged, and [L1] applies with $a=b=n$, giving $I(\Delta_M,\Gamma_f)=(-1)^{n^2}I(\Gamma_f,\Delta_M)=(-1)^nI(\Gamma_f,\Delta_M)$; the same factor appears pointwise because the local sign of [F1] is computed from the ordered sum. No metric is used, and the only choice principle involved is the Countable Choice recorded in [L1] for the intersection number of non-transverse representatives, which the transverse case of this lemma does not use. [step 2.1, L1] ∎
