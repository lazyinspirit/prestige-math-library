---
id: lem-crouzeix-raviart-simplex-traces-and-green-identity
kind: lemma
title: Fractional face traces and cellwise Green identity on a simplex
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - def-countable-choice
  - def-fractional-slobodeckij-space-on-euclidean-space
  - def-matching-affine-simplicial-meshes
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-affine-simplex-gauss-green-formula
  - lem-coordinate-direction-form-of-the-slobodeckij-seminorm
  - lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - lem-complex-translation-and-approximate-identity-interfaces
  - lem-compact-support-zero-extension-in-wkp
  - lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - lem-smooth-density-on-reference-simplex
  - lem-test-function-cutoffs-and-euclidean-localization
  - lem-shape-regular-affine-simplex-scaling
  - lem-affine-pullback-weak-derivatives-and-scaling
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - thm-reference-simplex-poincare-wirtinger
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-heine-borel-rn
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.8 and its proof, PDF p. 6: face-mean Poincare estimate for H^s, s>1/2; Lemma 36.10, PDF pp. 9–10: cellwise Green identity and consistency."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 314–343: elementwise integration by parts and subtraction of face means in the H2 case."
---

## Statement

Assume Countable Choice. Let $K$ be a shape-regular affine $d$-simplex,
$F\subset\partial K$ a facet, and $1/2<r\le1$. Every $q\in H^r(K)$ has a
single-valued $L^2(F)$ trace $\gamma_Fq$. For $1/2<r<1$,
$$\|\gamma_Fq\|_{L^2(F)} \le C\left(h_K^{-1/2}\|q\|_{L^2(K)} +h_K^{r-1/2}[q]_{H^r(K)}\right),$$
and
$$\|\gamma_Fq-\operatorname{avg}_F\gamma_Fq\|_{L^2(F)} \le C h_K^{r-1/2}[q]_{H^r(K)},$$
while for $r=1$,
$$\|\gamma_Fq\|_{L^2(F)} \le C\left(h_K^{-1/2}\|q\|_{L^2(K)} +h_K^{1/2}\|\nabla q\|_{L^2(K)}\right),$$
and the face-mean fluctuation is bounded by
$C h_K^{1/2}\|\nabla q\|_{L^2(K)}$.
The constant depends only on $d$, the shape-regularity bound, and $r$.

If $u\in H^1(K)$, $\nabla u\in H^r(K;\mathbb R^d)$, and
$f=-\Delta u\in L^2(K)$ distributionally, then for every $w\in H^1(K)$,
$$\int_Kfw\,dx=\int_K\nabla u\cdot\nabla w\,dx -\sum_{F\subset\partial K}\int_F(\gamma_F\nabla u\cdot n_{K,F})\gamma_Fw\,dS.$$
Here $n_{K,F}$ is the outward unit normal. The trace threshold $r>1/2$ is
used to make the normal-gradient trace an $L^2$ function.

The two cell traces of a global $H^1(\Omega)$ function agree on a shared
interior facet, and the trace of a global $H^1_0(\Omega)$ function vanishes
on a boundary facet. More generally, if $1/2<r<1$ and $q\in H^r(\Omega)$,
then its two traces on each shared interior facet agree almost everywhere.

## Facts & Assumptions

**Given:** Countable Choice, a shape-regular affine simplex, the local Slobodeckij convention of [[def-crouzeix-raviart-fractional-sobolev-regularity]], and the real Sobolev spaces of [[def-sobolev-space-wkp-and-its-norm]].

For a measurable face or cell $E$ of positive measure, write
$\operatorname{avg}_E f:=|E|^{-1}\int_E f$.

[F1] On $\mathbb R^d$, the double-integral Slobodeckij seminorm is equivalent to the sum of coordinate-direction difference integrals; in particular it controls the integral in any chosen orthonormal direction. ([[lem-coordinate-direction-form-of-the-slobodeckij-seminorm]])

[F2] Smooth functions are dense in $H^1$ on the reference simplex and in $W^{r,2}(\mathbb R^d)$ for $0<r<1$. ([[lem-smooth-density-on-reference-simplex]], [[lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces]])

[F3] A smooth vector field on an affine simplex satisfies Gauss–Green with the outward facet normals. ([[lem-affine-simplex-gauss-green-formula]])

[F4] The affine map of a shape-regular simplex has determinant comparable to $h_K^d$, singular values comparable to $h_K$, and facet Jacobians comparable to $h_K^{d-1}$. ([[lem-shape-regular-affine-simplex-scaling]])

[F5] A compact set inside an open set has a smooth cutoff supported in the open set and equal to one near the compact set; compactness gives a finite subcover of the closed simplex. ([[lem-test-function-cutoffs-and-euclidean-localization]], [[thm-heine-borel-rn]])

[F6] For nonnegative measurable integrands, Tonelli permits the iterated integrals and the changes between layer, face, and volume integrations used below. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F7] Smooth functions on an open set are dense in its finite-order Sobolev spaces; $H^1_0(\Omega)$ is the closure of compactly supported smooth functions. ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[def-wkp-zero-as-a-sobolev-closure]])

[F8] The Poincare–Wirtinger inequality controls a mean-zero $W^{1,2}$ function on the reference simplex by its gradient. ([[thm-reference-simplex-poincare-wirtinger]])

[F9] A smooth cutoff supported in an interior neighborhood can localize a function, and smooth functions are dense in $W^{r,2}(\mathbb R^d)$ for $0<r<1$. ([[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces]])

[F10] Countable unions of measurable null sets are null. ([[thm-finite-and-countable-subadditivity-of-measures]])

[F11] For $1\le p<\infty$, standard mollifiers converge in $L^p$; in $W^{1,2}$ they converge together with all first weak derivatives. ([[lem-complex-translation-and-approximate-identity-interfaces]], [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]])

[F12] Smooth functions compactly supported in an open set are dense in its $L^2$ space, so affine dilations are continuous in $L^2(K)$ by approximation and change of variables. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F13] Under an invertible affine map $T(x)=Ax+b$, weak derivatives obey $D_j(q\circ T)=\sum_i A_{ij}(D_iq)\circ T$; in particular the homothety $T_\epsilon x=c+(1-\epsilon)(x-c)$ gives $\operatorname{div}(q\circ T_\epsilon)=(1-\epsilon)(\operatorname{div}q)\circ T_\epsilon$. The assertion follows by testing against compactly supported smooth functions and applying affine change of variables. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F14] For a smooth scalar cutoff $\eta$, $\operatorname{div}(\eta q)=\eta\operatorname{div}q+\nabla\eta\cdot q$ weakly. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F15] Holder's inequality with exponents $2,2$ makes products of $L^2$ volume or face functions integrable and gives $|\int fg|\le\|f\|_2\|g\|_2$. ([[thm-holder-inequality-for-integrals]])

[F16] A compactly supported $W^{1,2}$ function on an open set extends by zero to $W^{1,2}(\mathbb R^d)$. ([[lem-compact-support-zero-extension-in-wkp]])

## Proof
1.1 Fractional Poincare inequality. Put $m_K:=|K|^{-1}\int_Kq$. Since $|x-y|\le h_K$ on $K\times K$ and $|K|\ge c h_K^d$ by [F4], $\|q-m_K\|_{L^2(K)}^2=\frac1{2|K|}\int_K\int_K|q(x)-q(y)|^2\,dx\,dy \le C h_K^{2r}[q]_{H^r(K)}^2.$ The equality follows by expanding the square and evaluating the two cross terms; the inequality follows by multiplying the Gagliardo integrand by $|x-y|^{d+2r}\le h_K^{d+2r}$. [F4, given, algebra]

1.2 Fractional extension from the reference simplex. Cover its closed simplex by finitely many affine coordinate neighborhoods: at a point on a face of codimension $m$, the $m$ vanishing barycentric coordinates are independent and the simplex is locally the orthant where those coordinates are positive. Compactness gives a finite cover with smaller compact subsets still covering the closed simplex. By [F5], choose smooth cutoffs supported in the corresponding neighborhoods and equal to one on those smaller sets; divide them by their positive sum near the closed simplex to obtain a finite smooth partition of unity. Multiplication by a smooth cutoff is bounded on $W^{r,2}$: split $\eta(x)q(x)-\eta(y)q(y)$ into $\eta(x)(q(x)-q(y))$ and $(\eta(x)-\eta(y))q(y)$, use $|\eta(x)-\eta(y)|\le\min(\|D\eta\|_\infty|x-y|,2\|\eta\|_\infty)$, and integrate the latter radial kernel, finite exactly for $0<r<1$. Each localized piece is supported away from the artificial edge of its chart, so extending by zero there adds at most $C\|q\|_{L^2}^2$ to the seminorm: all cross-pairs have distance at least the support-to-edge distance. In orthant coordinates extend across each active coordinate hyperplane by even reflection. Same-side pairs reproduce the original integral; for opposite-side pairs $(x',t),(y',-s)$ with $t,s>0$, $|(x'-y',t+s)|\ge|(x'-y',t-s)|$, so their Gagliardo integrand is bounded by the corresponding original-side integrand. Iterating over the finitely many active coordinates, pulling back the nonsingular affine charts, and summing the finitely many extensions gives a bounded linear extension $E:W^{r,2}(\widehat S_d)\to W^{r,2}(\mathbb R^d)$. The same construction for $r=1$ uses the ordinary even-reflection weak derivative formula; the zero extension of each compactly supported $W^{1,2}$ localized piece is justified by [F16]. [F2, F4, F5, F16, given, algebra]

1.3 The $H^1$ trace bound. First take smooth $q$ on the closed reference simplex. Fix a facet $F$ and its opposite vertex $z_F$, and set $X(x)=x-z_F$. Then $X\cdot n_G=0$ on every other facet $G$, while $X\cdot n_F=H_F>0$ on $F$. Gauss–Green applied to $|q|^2X$ gives $H_F\|q\|_{L^2(F)}^2=\int_K\bigl(d|q|^2+2qX\cdot\nabla q\bigr)\,dx.$ On the fixed reference simplex, $H_F>0$ and $|X|$ is bounded, so Holder [F15] gives $\|q\|_{L^2(F)}\le C\|q\|_{H^1(K)}$. By the $H^1$ density in [F2], this defines the trace for every $q\in H^1(K)$ and proves its boundedness. On a physical cell, apply the affine scaling in [F4] to obtain $\|\gamma_Fq\|_{L^2(F)}\le C\bigl(h_K^{-1/2}\|q\|_{L^2(K)}+h_K^{1/2}\|\nabla q\|_{L^2(K)}\bigr).$ The constants are uniform over shape-regular cells. [F2, F3, F4, F15, algebra]

2.1 Trace on a hyperplane for $0<r<1$. For a smooth $v$ on $\mathbb R^d$, let $a_k(x'):=2^k\int_0^{2^{-k}}v(x',t)\,dt$. For each $x'$, Cauchy–Schwarz and the identity $\int_I|v-a_I|^2dt=\frac1{2|I|}\int_I\int_I|v(t)-v(s)|^2\,dt\,ds$ give $|a_{k+1}(x')-a_k(x')|\le C2^{-k(r-1/2)}[v(x',\cdot)]_{H^r(0,1)}$. The geometric series converges because $r>1/2$, and $a_k(x')\to v(x',0)$. Integrating in $x'$ and using [F1] on the normal direction yields $\|v(\cdot,0)\|_{L^2(\mathbb R^{d-1})}\le C(\|v\|_{L^2(\mathbb R^d)}+[v]_{W^{r,2}(\mathbb R^d)}).$ By density [F2] this restriction extends uniquely to $W^{r,2}(\mathbb R^d)$. Apply it to the extension in step 1.2, after an orthogonal change of coordinates, to define $\gamma_Fq$ and obtain a bounded trace on each reference facet. If two extensions agree on the simplex, their difference vanishes on the one-sided normal slices; the same dyadic averages show its trace is zero, so the trace is independent of the extension. [F1, F2, F6, step 1.2]

2.2 Density in the graph norm. Let $q\in W^{r,2}(K;\mathbb R^d)$ with $\operatorname{div}q\in L^2(K)$, where $1/2<r\le1$, and write $g=\operatorname{div}q$. Contract the simplex toward its barycenter by $T_\epsilon x=c+(1-\epsilon)(x-c)$. For each fixed $\epsilon>0$, $T_\epsilon$ maps an open neighborhood $U_\epsilon$ of $\overline K$ into $K$, so $q_\epsilon=q\circ T_\epsilon$ is defined there. Apply the affine pullback rule [F13] on $U_\epsilon$ (with image $T_\epsilon(U_\epsilon)\subset K$) to obtain $\operatorname{div}q_\epsilon=(1-\epsilon)g\circ T_\epsilon$ distributionally. For $0<r<1$, pull $q$ back to the reference simplex by the affine reference map; change of variables in the double integral and the fixed positive affine Jacobian bounds give equivalent local $W^{r,2}$ norms. Transfer the finite-chart reflection extension of step 1.2 to $K$ by the same affine change of variables. Euclidean smooth density [F2] then supplies functions $q_j$ smooth near $\overline K$ with $q_j\to q$ in $W^{r,2}(K)$. Put $c=1-\epsilon$. For $c\ge1/2$, changing variables $u=T_\epsilon x$, $v=T_\epsilon y$ gives $\|q_j\circ T_\epsilon\|_{L^2(K)}\le c^{-d/2}\|q_j\|_{L^2(K)}$ and $[q_j\circ T_\epsilon]_{H^r(K)}\le c^{-d/2+r}[q_j]_{H^r(K)}$, so these pullbacks are uniformly bounded on $W^{r,2}(K)$. The same change-of-variables estimate holds for every input in $W^{r,2}(K)$, so the pullback operator norms are uniformly bounded for $c\ge1/2$. For a fixed smooth $q_j$, $q_j\circ T_\epsilon-q_j$ and its Lipschitz constant tend uniformly to zero; the estimate $[f]_{H^r(K)}^2\le\operatorname{Lip}(f)^2\int_{K\times K}|x-y|^{2-d-2r}\,dx\,dy$ and finiteness of that integral for $r<1$ give convergence in $W^{r,2}$. Approximation and the uniform pullback bound therefore give $q_\epsilon\to q$. For $r=1$, transfer the reference-simplex smooth density [F2] to $K$ using [F13]; its affine derivative rule and change of variables give a uniform $W^{1,2}$ pullback bound when $c\ge1/2$, and smooth approximants converge under $T_\epsilon$ in $W^{1,2}$, hence so does $q$. By [F12], $g\circ T_\epsilon\to g$ in $L^2(K)$, so $\operatorname{div}q_\epsilon\to g$ there as well. For each fixed $\epsilon$, choose by [F5] a smooth cutoff $\eta\in C_c^\infty(U_\epsilon)$ equal to one near $\overline K$. The weak product rule [F14] gives $\operatorname{div}(\eta q_\epsilon)=\eta\operatorname{div}q_\epsilon+\nabla\eta\cdot q_\epsilon$. The zero extension $Q_\epsilon$ of $\eta q_\epsilon$ belongs to $W^{r,2}(\mathbb R^d)$: the fractional multiplier and separated-boundary estimates are those already proved in step 1.2, and for $r=1$ the product rule and compact support give the same conclusion. Its distributional divergence is the zero extension of $\eta\operatorname{div}q_\epsilon+\nabla\eta\cdot q_\epsilon$: for a test function on $\mathbb R^d$, insert a cutoff equal to one near the compact support of $\eta q_\epsilon$ and use the weak divergence identity in $U_\epsilon$. This divergence is in $L^2(\mathbb R^d)$. Mollify $Q_\epsilon$. The fractional density proof [F2] gives convergence in $W^{r,2}(\mathbb R^d)$ when $r<1$; the $W^{1,2}$ convergence follows from [F11] when $r=1$. For a test function, the divergence of each mollification equals the mollification of $\operatorname{div}Q_\epsilon$: expand the convolution integral and use the distributional divergence identity; all integrals are absolutely integrable by [F15] on the compact supports, so Tonelli applied to the absolute values justifies the interchange in [F6]. By [F11], these divergences converge in $L^2$. For small radii the cutoff is identically one throughout every convolution neighborhood of points of $K$, so the smooth fields restrict to approximations of $q_\epsilon$ and $\operatorname{div}q_\epsilon$ on $K$. Choose for each $\epsilon_n\downarrow0$ a radius small enough that both local errors are below $1/n$. The resulting smooth $q_n$ converge to $q$ in $W^{r,2}(K)$ and their divergences converge to $g$ in $L^2(K)$. This is convergence in the graph norm of $H(\operatorname{div},K)\cap W^{r,2}(K)$. [F2, F5, F6, F11, F12, F13, F14, F15, step 1.2, algebra]

3.1 Face-mean fluctuation. On the reference simplex, for $0<r<1$, apply step 2.1 to $q-m_K$ and use step 1.1; the trace seminorm is unchanged by subtracting a constant. Since the face average is the best $L^2(F)$ constant, $\|\gamma_Fq-\operatorname{avg}_F\gamma_Fq\|_{L^2(F)} \le\|\gamma_F(q-m_K)\|_{L^2(F)}\le C[q]_{H^r(K)}.$ For $r=1$, take smooth $q$ and apply [F3] to $|q-m_K|^2X$ with the vector field $X$ from step 1.3. Holder [F15] and [F8] give $\|\gamma_F(q-m_K)\|_{L^2(F)}^2\le C\|\nabla q\|_{L^2(K)}^2$ on the reference simplex; density and step 1.3 extend this to $H^1(K)$. The affine scaling factors in [F4] give the stated physical powers $h_K^{r-1/2}$ and $h_K^{1/2}$. For $0<r<1$, the full trace bound follows by applying step 2.1 to $q-m_K$ and adding the trace of the cell mean, $|\operatorname{avg}_Kq|\,|F|^{1/2}\le C h_K^{-1/2}\|q\|_{L^2(K)}$. For $r=1$, the full bound is step 1.3. [F2, F3, F4, F8, F15, step 1.1, step 2.1, step 1.3, algebra]

3.2 Green identity. For each smooth field $q_n$ from step 2.2 and smooth $w$ on a neighborhood of $\overline K$, [F3] applied to $wq_n$ gives $-\int_K(\operatorname{div}q_n)w=\int_Kq_n\cdot\nabla w-\sum_{F\subset\partial K}\int_F(q_n\cdot n_{K,F})w.$ For arbitrary $w\in H^1(K)$, transfer $w$ to the reference simplex by an affine map, using [F13] to get norm equivalence; approximate there by functions smooth near its closure using [F2], then compose with the inverse affine map. This gives smooth-near-$\overline K$ approximants converging to $w$ in $H^1(K)$. Holder's inequality [F15] makes the volume products integrable, and the bounded $H^1$ traces of step 1.3 and [F15] justify passage in both volume terms and the $L^2(F)$ trace pairings. Now pass $q_n$ to $q$ using step 2.2: the volume terms converge by $W^{r,2}\subset L^2$ and graph convergence, while the boundary terms converge by the $r>1/2$ trace estimate of step 2.1 applied to $q_n-q$. Taking $q=\nabla u$, $\operatorname{div}q=\Delta u=-f$, proves the asserted identity. Interior trace compatibility for a global H^1 function follows as follows. Approximate it in H^1(Ω) by smooth functions on Ω using [F7]. On each compact subfacet G in the relative interior of a shared facet F, G lies inside Ω, so each approximant is a single smooth function near G and its two restrictions have the same trace there. The bounded cell trace map of step 1.3 makes both traces converge in L^2(G); hence the limits agree on G. Exhaust the relative interior of F by countably many compact subfacets; the remaining facet boundary is a finite union of lower-dimensional affine faces and has (d−1)-measure zero by a grid cover. Thus the traces agree almost everywhere on F. For a boundary facet, approximate an H^1_0(Ω) function by smooth compactly supported functions and use the same trace bound to see its trace is zero. [F2, F3, F7, F10, F13, F15, step 2.1, step 1.3, step 2.2, algebra]

4.1 For $q\in H^r(\Omega)$ and a compact subfacet $G$ in the relative interior of an interior mesh facet, choose by [F9] a smooth cutoff $\eta$ supported in $\Omega$ and equal to one near $G$. The product $\eta q$ extends by zero to $W^{r,2}(\mathbb R^d)$: within $\Omega$ the smooth multiplier estimate follows by splitting the difference as in step 1.2, and pairs across $\partial\Omega$ have one point a positive distance from the compact support. Approximate this extension in $W^{r,2}(\mathbb R^d)$ by smooth functions using [F9]. The trace estimate of step 2.1 on each incident simplex shows that both restrictions converge in $L^2(G)$ to the same limit, because each approximant is one smooth function across $G$. Exhaust the relative interior of the facet by a countable increasing sequence of compact subfacets. Its boundary is a finite union of lower-dimensional affine faces and has $(d-1)$-dimensional measure zero by covering those faces with arbitrarily thin grids. The exceptional sets on the compact subfacets are null, so [F10] gives equality almost everywhere on the full facet. [F9, F10, step 1.2, step 2.1] ∎
