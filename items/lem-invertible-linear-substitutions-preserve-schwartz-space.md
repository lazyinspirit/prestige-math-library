---
id: lem-invertible-linear-substitutions-preserve-schwartz-space
kind: lemma
title: "Invertible linear substitutions preserve Schwartz space"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
deps: [def-schwartz-space-and-its-seminorms, def-ck-and-multi-index-notation-in-several-variables, thm-chain-rule, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, thm-continuous-partial-derivatives-imply-total-differentiability, def-jacobian-matrix-and-gradient, thm-ck-euclidean-maps-closed-under-algebra-and-composition, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-real-square-matrix-invertible-iff-determinant-nonzero, def-matrix-product-and-identity-matrix, def-schwartz-topology-and-convergence, thm-multinomial-theorem, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, thm-symmetry-of-higher-mixed-partials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 14, Theorem 14.2 (basic Fourier properties on $L^1(\\mathbb R^d)$, including the matrix-dilation law $[|\\det A|f(Ax)]^{\\wedge}(\\xi)=\\widehat f(\\xi A^{-1})$ for $A\\in\\operatorname{GL}(\\mathbb R,d)$), printed pp. 79-80"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§4, Exercise 16: the Schwartz class is closed under the Fourier transform and inversion; §3, Exercise 12 for the underlying $L^1$ calculus, PDF pp. 3-5"
verification:
  precheck: pass
---

## Statement

Let $A$ be an invertible real $n\times n$ matrix and put
$(A^{*}f)(y):=f(Ay)$. If $f\in\mathcal S(\mathbb R^n)$ then
$A^{*}f\in\mathcal S(\mathbb R^n)$; more precisely, for every pair of
multi-indices $\alpha,\beta$ there are a constant $C_{\alpha\beta}$ and a finite
set of Schwartz seminorms of $f$ with
$$p_{\alpha\beta}(A^{*}f)\le C_{\alpha\beta}\max_{|\delta|\le|\alpha|,\,|\gamma|\le|\beta|}p_{\delta\gamma}(f).$$
Hence $f\mapsto f\circ A$ is a continuous linear endomorphism of
$\mathcal S(\mathbb R^n)$ with continuous inverse $f\mapsto f\circ A^{-1}$. No
choice principle is used.

## Facts & Assumptions

**Given:** An invertible real $n\times n$ matrix $A$, a function $f\in\mathcal S(\mathbb R^n)$ as in [[def-schwartz-space-and-its-seminorms]], and the multi-index derivative notation of [[def-ck-and-multi-index-notation-in-several-variables]].

[F1] $\mathcal S(\mathbb R^n)\subseteq C^\infty(\mathbb R^n;\mathbb C)$, and $p_{\alpha\beta}(g)=\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta g(x)|$ for $g\in\mathcal S(\mathbb R^n)$ ([[def-schwartz-space-and-its-seminorms]]); a map is $C^k$ when all iterated coordinate derivatives of order at most $k$ exist and are continuous, $C^\infty$ meaning $C^k$ for every $k$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] Totally differentiable maps and their total derivative are as in [[def-total-derivative-in-euclidean-space]], and $D(g\circ h)(a)=Dg(h(a))\circ Dh(a)$ ([[thm-chain-rule-for-total-derivatives]]); if all partial derivatives of a map exist on a neighbourhood of a point and are continuous there, the map is totally differentiable at that point with derivative the Jacobian matrix ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-jacobian-matrix-and-gradient]]).

[F3] Finite sums and scalar multiples, and composites, of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F4] Every linear map $L:\mathbb R^m\to\mathbb R^n$ has a unique matrix with $(Lh)_i=\sum_{j<m}a_{ij}h_j$ and satisfies $\|Lh\|_2\le K\|h\|_2$ for some $K\ge0$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]); $A$ is invertible, so $h\mapsto A^{-1}h$ is defined ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]), and matrix-vector multiplication is the matrix product of [[def-matrix-product-and-identity-matrix]].

[F5] The Schwartz topology has as a base of neighbourhoods of a point the finite intersections of conditions $p_{\alpha\beta}(g-g_0)<\varepsilon$ ([[def-schwartz-topology-and-convergence]]).

[F6] For a natural number $N$ and reals $u_0,\dots,u_{m-1}$, the expansion $\bigl(u_0+\dots+u_{m-1}\bigr)^N=\sum_{|\delta|=N}\binom{N}{\delta}\prod_i u_i^{\delta_i}$ holds ([[thm-multinomial-theorem]]).

[F7] For a $C^k$ real scalar field, $k\ge2$, every ordered derivative of order $k$ is unchanged by permuting the coordinate differentiations ([[thm-symmetry-of-higher-mixed-partials]]). Applying this to the real and imaginary parts gives the same assertion for smooth complex functions, so $\partial_j\partial^\gamma f=\partial^{\gamma+e_j}f$.

## Proof

**Proof technique:** direct.

1.1 The map $y\mapsto Ay$ is $C^\infty$: each component $\sum_jA_{ij}y_j$ is a finite sum of scalar multiples of the coordinate functions, whose iterated coordinate derivatives are constant, hence continuous, so each component is $C^\infty$ as a composite of the $C^\infty$ identity with itself and finite sums of such [F1, F3]. It is totally differentiable at every $y$ with $D(A\cdot)(y)=A$, because $A(y+h)=Ay+Ah$ has remainder identically zero in the defining limit [F2]. Consequently $f\circ A\in C^\infty$ [F1, F3], and for every $C^1$ map $u$ on $\mathbb R^n$ and every $j$, the chain rule gives $\partial_j(u\circ A)(y)=(D u(Ay)\circ A)e_j$, and the matrix of $D u(Ay)$ is the Jacobian $(\partial_iu(Ay))$ because the partial derivatives of $u$ are continuous [F2, F4], so $\partial_j(u\circ A)(y)=\sum_iA_{ij}(\partial_iu)(Ay)$. [F1, F2, F3, F4, given]

2.1 Iterating the coordinate chain rule of step 1.1 along the canonical differentiation word for $\beta$ gives a finite sum of derivatives of $f$ of order $|\beta|$, evaluated at $Ay$, with constant coefficients depending only on $A$. By [F7] those derivatives can be grouped by their multi-indices, giving $\partial^\beta(f\circ A)(y)=\sum_{|\gamma|=|\beta|}c_{\beta\gamma}(\partial^\gamma f)(Ay)$. The case $\beta=0$ has its single coefficient equal to one. [step 1.1, F1, F7, algebra]

3.1 Choose $K\ge1$ with $\|A^{-1}x\|_2\le K\|x\|_2$ [F4], and put $N=|\alpha|$. For $x=Ay$ one has $|y^\alpha|\le K^N(1+\sum_i|x_i|)^N$. By [F6] this last power is $\sum_{|\delta|\le N}b_{N\delta}|x^\delta|$, where $b_{N\delta}:=N!/((N-|\delta|)!\,\delta!)$ is the multinomial coefficient with exponent tuple $(N-|\delta|,\delta_1,\ldots,\delta_n)$. Combining this expansion with step 2.1 and taking the supremum over $y$ gives $p_{\alpha\beta}(A^*f)\le K^N\sum_{|\delta|\le N}b_{N\delta}\sum_{|\gamma|=|\beta|}|c_{\beta\gamma}|p_{\delta\gamma}(f)$, hence the asserted finite-maximum bound with $C_{\alpha\beta}:=K^N\sum_{|\delta|\le N}b_{N\delta}\sum_{|\gamma|=|\beta|}|c_{\beta\gamma}|$. [step 2.1, F1, F4, F6, algebra]

4.1 Every seminorm $p_{\alpha\beta}(A^{*}f)$ is finite by step 3.1, so $A^{*}f\in\mathcal S(\mathbb R^n)$; and the same step with $A$ replaced by $A^{-1}$ shows $(A^{-1})^{*}f\in\mathcal S(\mathbb R^n)$, while $(A^{-1})^{*}(A^{*}f)=f=(A^{*})(A^{-1})^{*}f$. For continuity, fix a basic neighbourhood $p_{\alpha_r\beta_r}(g)<\varepsilon_r$ ($r\le m$) of $0$ in the Schwartz topology [F5]; by step 3.1 the preimage under $f\mapsto A^{*}f$ contains the neighbourhood of $0$ cut out by the finitely many conditions $p_{\delta\gamma}(f)<\varepsilon_r/\max(C_{\alpha_r\beta_r},1)$ over the $(|\delta|\le|\alpha_r|,|\gamma|\le|\beta_r|)$ appearing in the $r$-th estimate, so the map is continuous at $0$ and, being linear, everywhere. The same argument applies to $f\mapsto f\circ A^{-1}$. No choice is used: all sums, constants and maxima above range over finite index sets determined by $\alpha,\beta$ and the fixed matrix $A$. [step 3.1, F4, F5, algebra] ∎

The theorem [[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]] includes reflection, the special case $A=-I$, but does not assert continuity for arbitrary invertible linear substitutions. The argument above establishes the general case directly, without using that theorem as a supplier.
