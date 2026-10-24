---
id: thm-topological-and-matrix-burau-representations-agree
kind: theorem
title: "The topological and matrix Burau representations agree"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps:
  - def-reduced-burau-representation
  - def-unreduced-burau-matrices
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
  - prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module
  - lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block
  - lem-the-invariant-vector-and-covector-of-the-unreduced-burau
  - lem-the-reduced-burau-module-is-free-of-rank-n-minus-one
  - lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover
  - def-braid-group-by-the-artin-presentation
  - def-invertible-matrix-and-similarity-over-a-commutative-ring
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - def-relative-singular-homology
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-axiom-of-choice
  - thm-the-artin-presentation-is-complete-for-geometric-braids
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
    - title: "Stephen J. Bigelow, The Burau representation is not faithful for n = 5, Geometry & Topology 3 (1999) 397-404, Definition 1.1 (printed pp. 397-398)"
      url: "https://arxiv.org/pdf/math/9904100"
      locator: "Definition 1.1, printed pp. 397-398"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC (inherited from the topological definition of the reduced
representation and the lift of braid mapping classes). Write
$U=H_1(\tilde X,p^{-1}d;\mathbb Z)$ and
$M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ over
$\Lambda_1=\mathbb Z[t^{\pm1}]$, with the relative lifted-edge basis
$e_1,\dots,e_n$ of [[def-unreduced-burau-matrices]] and the reduced basis
$g_i=t e_i-e_{i+1}$ ($1\le i\le n-1$) of $\ker\sigma=\ker\partial_*$ from
[[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]] and
[[lem-the-invariant-vector-and-covector-of-the-unreduced-burau]]. Then:

(1) the topological action of $B_n$ on $U$ in the basis $e_1,\dots,e_n$ is the
matrix representation $\rho^{\mathrm{mat}}_n$ of
[[def-unreduced-burau-matrices]], i.e. $\rho^{\mathrm{mat}}_n(\beta)$ is the
matrix of the lifted braid action for every $\beta\in B_n$;

(2) under the isomorphism $M_{\mathrm{red}}\cong\ker\partial_*$ induced by the
inclusion of the pair, the reduced Burau representation $\bar\rho_n$ of
[[def-reduced-burau-representation]] acts in the basis
$(g_1,\dots,g_{n-1})$ by the formulas
$$g_{j-1}\longmapsto g_{j-1}+g_j,\qquad g_j\longmapsto -t g_j,\qquad g_{j+1}\longmapsto t g_j+g_{j+1},$$
every other $g_i$ fixed; in particular, for $n=3$, in the basis $(g_1,g_2)$,
$\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$,
$\bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$, and
$\bar\rho_3(\Delta^2)=t^3I_2$ for the full twist $\Delta^2$.

Caveat: the inclusion carries the fixed basis $b_i$ of
[[def-reduced-burau-representation]] to
$t^i(\epsilon_i-\epsilon_{i+1})=te_i-e_{i+1}=g_i$, since
$e_i=t^{i-1}\epsilon_i$. Thus this identifies the two representations as matrices in the frozen
bases; it does not claim that the integral extension
$0\to M_{\mathrm{red}}\to U\xrightarrow{\partial_*}\Lambda_1\xrightarrow{\varepsilon}\mathbb Z\to0$ splits.

## Facts & Assumptions

**Given:** AC; the unreduced module $U$ with its relative lifted-edge basis $e_1,\dots,e_n$; the reduced module $M_{\mathrm{red}}$ with its fixed basis; the exact sequence $0\to M_{\mathrm{red}}\to U\xrightarrow{\partial_*}\Lambda_1\xrightarrow{\varepsilon}\mathbb Z\to0$ of [[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]]; the candidate reduced basis $g_i=te_i-e_{i+1}$.

[F1] The topological action gives a homomorphism $B_n\to\operatorname{Aut}_{\Lambda_1}(U)$, $\beta\mapsto(\tilde h)_*$, where $\tilde h$ is the basepoint-normalised lift of a representative homeomorphism of $\beta$; isotopic representatives give the same automorphism ([[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]], [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]]).

[F2] $\rho^{\mathrm{mat}}_n:B_n\to\operatorname{GL}_n(\Lambda_1)$ is the homomorphism with $\rho^{\mathrm{mat}}_n(\sigma_i)=B_i$, and on the generator $\sigma_i$ the topological action on $U$ has matrix exactly $B_i$ in the basis $e_1,\dots,e_n$ ([[lem-unreduced-burau-matrices-satisfy-the-artin-relations]], [[lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block]]).

[F3] The inclusion of the pair induces an isomorphism $M_{\mathrm{red}}\to\ker\partial_*$, and $\partial_*=(t-1)\sigma$ where $\sigma(x)=\sum_it^{i-1}x_i$; the maps are compatible with the braid actions in the sense that the inclusion $M_{\mathrm{red}}\to U$ is natural for homeomorphisms of the pair, so the action on $M_{\mathrm{red}}$ corresponds to the restriction of the action on $U$ to $\ker\partial_*$ ([[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[def-relative-singular-homology]]).

[F4] The matrices act on column vectors, and the matrix of a $\Lambda_1$-linear map in a fixed basis has the images of the basis vectors as its columns; $\Lambda_1$ is a domain and $t\ne1$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]], [[def-the-laurent-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 *Clause (1).* Both $\beta\mapsto(\tilde h)_*$ (in the basis $e_1,\dots,e_n$) and $\rho^{\mathrm{mat}}_n$ are homomorphisms from the presented group $B_n$ to $\mathrm{GL}_n(\Lambda_1)$ by [F1], [F2]; they agree on each generator $\sigma_i$, where the matrix of the topological action is $B_i$ by [F2]. Since $B_n$ is generated by the $\sigma_i$, the two homomorphisms agree on all of $B_n$, which is clause (1). [F1, F2, F4]

1.2 *The basis $(g_1,\dots,g_{n-1})$ of $\ker\partial_*$.* By [F3], $\partial_*(x)=0$ means $\sum_it^{i-1}x_i=0$ for $x=\sum_ix_ie_i$. Given such an $x$, set $c_k:=-\sum_{i>k}t^{i-1-k}x_i$ for $1\le k\le n-1$ and $c_0:=c_n:=0$; then $\sum_{k=1}^{n-1}c_kg_k=\sum_j(tc_j-c_{j-1})e_j$ with $tc_j-c_{j-1}=x_j$ for every $j$, the case $j=1$ using $\sum_it^{i-1}x_i=0$ and the case $j=n$ the definition $c_n=0$. Hence the $g_i$ span $\ker\partial_*$. They are independent: if $\sum_{k=1}^{n-1}c_kg_k=0$, the coefficient of $e_n$ is $-c_{n-1}$, then the coefficient of $e_{n-1}$ is $tc_{n-1}-c_{n-2}=-c_{n-2}$, and induction downwards gives $c_k=0$ for all $k$. So $(g_1,\dots,g_{n-1})$ is a $\Lambda_1$-basis of $\ker\partial_*$. [F3, algebra]

2.1 *Clause (2): the action on the reduced basis.* For the generator $\sigma_j$, the unreduced action of clause (1) is $e_j\mapsto(1-t)e_j+e_{j+1}$, $e_{j+1}\mapsto te_j$ and $e_k\mapsto e_k$ otherwise [F2]. Substituting, $g_{j-1}=te_{j-1}-e_j\mapsto te_{j-1}-(1-t)e_j-e_{j+1}=(te_{j-1}-e_j)+(te_j-e_{j+1})=g_{j-1}+g_j$; $g_j=te_j-e_{j+1}\mapsto t(1-t)e_j+te_{j+1}-te_j=-t(te_j-e_{j+1})=-tg_j$; $g_{j+1}=te_{j+1}-e_{j+2}\mapsto t^2e_j-e_{j+2}=(t^2e_j-te_{j+1})+(te_{j+1}-e_{j+2})=tg_j+g_{j+1}$; and every other $g_i$ involves only basis vectors outside $\{e_j,e_{j+1}\}$ and is fixed. Boundary conventions: for $j=1$ there is no $g_0$, for $j=n-1$ there is no $g_n$. By [F3] the action on $M_{\mathrm{red}}$ corresponds to this action on $\ker\partial_*$, so the matrix of $\bar\rho_n(\sigma_j)$ in the basis $(g_i)$ is as displayed. [F2, F3, F4, step 1.2, algebra]

3.1 *The case $n=3$.* In the basis $(g_1,g_2)$ the formulas of step 2.1 for $j=1$ give $g_1\mapsto-tg_1$, $g_2\mapsto tg_1+g_2$, i.e. $\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$, and for $j=2$ give $g_1\mapsto g_1+g_2$, $g_2\mapsto-tg_2$, i.e. $\bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$. Multiplying, $\bar\rho_3(\sigma_1)\bar\rho_3(\sigma_2)\bar\rho_3(\sigma_1)=\begin{pmatrix}0&-t^2\\-t&0\end{pmatrix}$, whose square is $t^3I_2$; since $\Delta^2=(\sigma_1\sigma_2\sigma_1)^2$ in $B_3$, this is $\bar\rho_3(\Delta^2)=t^3I_2$. [step 2.1, algebra]

4.1 *Conclusion.* Clause (1) is step 1.1 and clause (2) is steps 2.1 and 3.1; the identification is in the frozen bases and no $\Lambda_1$-linear splitting of the exact sequence of [F3] is constructed or claimed. [step 1.1, step 2.1, step 3.1] ∎
