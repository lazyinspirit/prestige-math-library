---
id: lem-fourier-lattice-sobolev-embedding
kind: lemma
title: "Sobolev embedding on the torus: $H^\\sigma\\subseteq C^j$ for $\\sigma>j+3/2$, with continuous representatives"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-cm-lattice-shell-count-and-weight-sums, def-countable-choice, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, thm-uniform-limit-continuous-real-functions, thm-fourier-basis-and-parseval-on-the-n-torus, cor-bounded-convergence-on-a-finite-measure-space, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-over-a-measurable-set, def-continuity-real, def-metric-topology, def-metric-ball, def-quotient-topology, def-product-topology, def-the-one-dimensional-torus-and-normalized-haar-integral, def-product-measure-on-sigma-finite-spaces, thm-lebesgue-measure-of-a-box-of-every-kind, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-vector-valued-ftc-and-lipschitz-bound, lem-cm-integral-and-ftc-for-continuous-normed-space-curves]
dependency_roles:
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-weierstrass-m-test-for-function-series: mathematical-premise
  def-series-of-real-functions: mathematical-premise
  thm-uniform-limit-continuous-real-functions: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  cor-bounded-convergence-on-a-finite-measure-space: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-continuity-real: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-product-topology: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of Sobolev spaces on T^3; the absolutely convergent coefficient series and the embedding H^s(T^3)⊂C(T^3) for s>3/2) and Section 4.3 (Agmon's inequality via low/high frequency splitting)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Subsection 3.2.1 and the appendix to Chapter 3 (calculus inequalities in Sobolev spaces: the Banach-algebra property for H^s with s>N/2 and the Sobolev inequality (3.30))"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as the Fourier-basis and measure-theoretic suppliers below do. Work with either the scalar spaces $H^s(\mathbb T^3;\mathbb R)$ or the vector spaces $H^s=H^s(\mathbb T^3;\mathbb R^3)$ and the weight family $w_k$ of [[def-periodic-vector-sobolev-space-and-leray-projection]]. In the scalar case replace $\mathbb R^3$ by $\mathbb R$ and vector norms by absolute values throughout. Let $\sigma>3/2$ and $u\in H^\sigma$.

1. **Continuous representative.** The coefficient series converges absolutely, $\sum_k|\widehat u(k)|_2\le W_\sigma\|u\|_{H^\sigma}$ with $W_\sigma$ as in [[lem-cm-lattice-shell-count-and-weight-sums]], and $S_M:=\sum_{|k|_\infty\le M}\widehat u(k)e_k$ converges uniformly on $\mathbb T^3$ to a continuous field $\widetilde u\in C(\mathbb T^3;\mathbb R^3)$ with the same Fourier coefficients, $\widehat{\widetilde u}(k)=\widehat u(k)$ for all $k$, which satisfies $\widetilde u=u$ almost everywhere and
$$\|\widetilde u\|_{L^\infty}=\sup_{x\in\mathbb T^3}|\widetilde u(x)|_2\;\le\;W_\sigma\|u\|_{H^\sigma}.$$
2. **Uniqueness of the continuous representative.** In the scalar case replace $\mathbb R^3$ by $\mathbb R$ in the following formulas. If $f,g\in C(\mathbb T^3;\mathbb R^3)$ satisfy $f=g$ almost everywhere, then $f=g$ everywhere. Consequently the field $\widetilde u$ is the only continuous field equal to $u$ almost everywhere, and if $u$ has a continuous representative $w$ then $\widetilde u=w$; in particular for $u\in C(\mathbb T^3;\mathbb R^3)$, $\widetilde u=u$.
3. **Higher order.** If $j\ge0$ is an integer and $\sigma>j+3/2$, then the canonical representative $\widetilde u\in C^j$, and its classical derivatives are the corresponding uniform series
$$\partial^\alpha\widetilde u=\sum_{k\in\mathbb Z^3}(2\pi i k)^\alpha\widehat u(k)\,e_k\qquad(|\alpha|\le j),$$
the series being absolutely and uniformly convergent, and
$$\|u\|_{C^j}:=\max_{|\alpha|\le j}\sup_{x\in\mathbb T^3}|\partial^\alpha\widetilde u(x)|_2\;\le\;C_{\sigma,j}\|u\|_{H^\sigma},\qquad C_{\sigma,j}:=\max_{|\alpha|\le j}W_{\sigma-|\alpha|}.$$
4. **Derivative bound for differentiable fields.** If $\sigma>3/2$, $u\in H^{\sigma+1}$ and $\partial_ju$ is continuous for some $j$, then $\partial_ju\in H^\sigma$ has continuous representative $\partial_ju$ itself and
$$\sup_{x\in\mathbb T^3}|\partial_ju(x)|_2\;\le\;W_\sigma\|\partial_ju\|_{H^\sigma}\;\le\;W_\sigma\|u\|_{H^{\sigma+1}}.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real number $\sigma>3/2$, and a field $u\in H^\sigma$ with coefficient family $\widehat u$.

[F1] For every $\sigma'>3/2$ and every family $c$ with finite weighted norm, $\sum_k|c(k)|_2\le W_{\sigma'}\bigl(\sum_kw_k^{2\sigma'}|c(k)|_2^2\bigr)^{1/2}$; and if $\alpha$ is a multi-index with $\sigma'-|\alpha|>3/2$, then $\sum_k|2\pi k|_\infty^{|\alpha|}|c(k)|_2\le W''_{\sigma',|\alpha|}\bigl(\sum_kw_k^{2\sigma'}|c(k)|_2^2\bigr)^{1/2}$ for a finite constant $W''$, by finite Cauchy–Schwarz followed by the supremum over finite frequency sets: $\sum_k w_k^{|\alpha|}|c(k)|_2\le(\sum_k w_k^{-2(\sigma'-|\alpha|)})^{1/2}\|c\|_{\ell^2_{\sigma'}}=W_{\sigma'-|\alpha|}\|c\|_{\ell^2_{\sigma'}}$, with finite first factor by the general weight-sum bound ([[lem-cm-lattice-shell-count-and-weight-sums]]).

[F2] If a sequence of continuous complex-valued functions on a compact space is bounded by a summable sequence of constants, then its series converges absolutely and uniformly, and the sum is continuous. The real M-test applies to real and imaginary coordinates ([[thm-weierstrass-m-test-for-function-series]], [[def-series-of-real-functions]]). The uniform-limit continuity argument of [[thm-uniform-limit-continuous-real-functions]] also holds on this topological torus: for $\epsilon>0$ choose a partial sum with uniform error $<\epsilon/3$, then a neighborhood on which its variation is $<\epsilon/3$, and the limit varies by $<\epsilon$ there.

[F3] The finite-subset-net partial sums of the Fourier expansion of $f\in L^2(\mathbb T^3;\mathbb C)$ converge to $f$ in $L^2$, and $\langle f,g\rangle=\sum_k\widehat f(k)\overline{\widehat g(k)}$ ([[thm-fourier-basis-and-parseval-on-the-n-torus]]); a field is determined up to equality almost everywhere by its coefficient family.

[F4] If $(X,\mathcal A,\mu)$ is a finite measure space, $f_n\to f$ pointwise almost everywhere and $|f_n|\le M$ almost everywhere for one real $M$, then $\int f_n\to\int f$ ([[cor-bounded-convergence-on-a-finite-measure-space]]).

[F5] $\int |f|^2\,dx=0$ if and only if $f=0$ almost everywhere, for measurable $f$ ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]); if $0\le f\le g$ then $\int f\le\int g$ and $0\le\int f$, for the integral over a measurable set ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]]).

[F6] The one-dimensional torus carries the quotient topology of $q:\mathbb R\to\mathbb T$ and the measure $m_{\mathbb T}(E)=\lambda_1(q^{-1}[E]\cap[0,1))$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-quotient-topology]]); $\mathbb T^3$ carries the product topology, for which a set is open exactly when its preimage under the product quotient map is open in $\mathbb R^3$ ([[def-product-topology]]). The product measure $dx$ on $\mathbb T^3$ is the threefold product of $m_{\mathbb T}$ ([[def-product-measure-on-sigma-finite-spaces]]), and for a box $\prod_i(a_i,b_i]$ in $\mathbb R^3$ the Lebesgue measure is the product of the side lengths, so a nonempty product of nondegenerate intervals has positive measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).


[F7] For smooth curves in $\mathbb R^3$, the integral of the derivative equals the endpoint difference ([[cor-vector-valued-ftc-and-lipschitz-bound]], claim 1). The tagged-sum integral of a continuous complete-normed-space curve satisfies $\|\int_a^b g\|\le(b-a)\sup\|g\|$ and linearity ([[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]], claims 1 and 3).

## Proof

**Proof technique:** direct; absolute convergence of the coefficient series gives a continuous representative by the Weierstrass test, coefficients are identified by bounded convergence, and the standard fact that a continuous function vanishing almost everywhere is identically zero is proved from the positive measure of nonempty open sets.

**Given:** Countable choice, $\sigma>3/2$ and $u\in H^\sigma$ with coefficient family $\widehat u$.

1.1 By [F1] with $\sigma'=\sigma$, $\sum_k|\widehat u(k)|_2\le W_\sigma\|u\|_{H^\sigma}<+\infty$. For each $M$ the partial sum $S_M=\sum_{|k|_\infty\le M}\widehat u(k)e_k$ is continuous with $|S_M(x)|_2\le\sum_{|k|_\infty\le M}|\widehat u(k)|_2\le W_\sigma\|u\|_{H^\sigma}$. Applying [F2] componentwise to the series with dominating constants $|\widehat u(k)|_2$ gives: $S_M$ converges uniformly on $\mathbb T^3$ to a continuous field $\widetilde u$, and $\|\widetilde u\|_{L^\infty}\le W_\sigma\|u\|_{H^\sigma}$. [F1, F2]

1.2 **Nonempty open sets have positive measure.** For nonempty open $U\subseteq\mathbb T^3$, its inverse image under the surjective quotient map $Q:\mathbb R^3\to\mathbb T^3$ is nonempty open by [F6]. Choose a point $y$ in it with no integer coordinate: such points meet every open box, because each coordinate interval contains a noninteger real. Translate $y$ by an integer vector to $z\in(0,1)^3$; periodicity leaves $z\in Q^{-1}[U]$. Openness gives a sufficiently small nonempty box $I$ about $z$ contained in $Q^{-1}[U]\cap(0,1)^3$. Its volume is positive, so $dx(U)=\lambda_3(Q^{-1}[U]\cap[0,1)^3)\ge\lambda_3(I)>0$ by [F5] and [F6]. [F5, F6]

2.1 For each $m\in\mathbb Z^3$ and every $M\ge|m|_\infty$, the integrals $\int_{\mathbb T^3}S_Me_{-m}\,dx$ equal $\widehat u(m)$ by orthonormality of the characters; the sequence $S_M$ is uniformly bounded by $W_\sigma\|u\|_{H^\sigma}$ and converges pointwise (indeed uniformly) to $\widetilde u$, so bounded convergence [F4] gives $\widehat{\widetilde u}(m)=\int\widetilde u\,e_{-m}\,dx=\lim_M\int S_Me_{-m}\,dx=\widehat u(m)$ for every $m$. Hence $u$ and $\widetilde u$ have the same coefficient family; by [F3] they agree in $L^2$, so $\widetilde u=u$ almost everywhere. [step 1.1, F3, F4]

2.2 **A continuous field vanishing almost everywhere is zero.** Let $f$ be a continuous scalar or vector field with $f=0$ almost everywhere. Then $|f|^2=0$ almost everywhere, so $\int|f|^2=0$ by [F5]. If $f(x_0)\ne0$ for some $x_0$, continuity ([[def-continuity-real]], [[def-metric-topology]]) gives a nonempty open neighborhood $U$ of $x_0$ on which $|f|_2>|f(x_0)|_2/2>0$; that neighborhood is an open set of positive measure by step 1.2, whence $\int|f|^2\ge(|f(x_0)|_2/2)^2\,dx(U)>0$ by monotonicity [F5], a contradiction. Hence $f=0$. Applying this to the difference of two continuous fields proves that fields equal almost everywhere are equal, proving claim 2. [step 1.2, F5]

2.3 Let $j\ge0$ and $\sigma>j+3/2$. For each multi-index $\alpha$ with $|\alpha|\le j$ the family $c_\alpha(k):=(2\pi ik)^\alpha\widehat u(k)$ has $H^{\sigma-|\alpha|}$-norm at most $\|u\|_{H^\sigma}$ (because $|(2\pi k)^\alpha|\le w_k^{|\alpha|}$), and $\sigma-|\alpha|>3/2$, so by [F1] the series $f_\alpha:=\sum_k(2\pi ik)^\alpha\widehat u(k)e_k$ converges absolutely and uniformly with $\|f_\alpha\|_{L^\infty}\le W_{\sigma-|\alpha|}\|u\|_{H^\sigma}$ by the argument of step 1.1. [step 1.1, F1, F2]

3.1 **Termwise differentiation.** We prove $\partial^\alpha\widetilde u=f_\alpha$ for every $|\alpha|\le j$ by induction on $|\alpha|$. Fix an index $i$ and a multi-index $\alpha$ with $|\alpha|+1\le j$, and assume $\partial^\alpha\widetilde u=f_\alpha$. Put $v_M:=\partial^\alpha S_M$; then $v_M\to f_\alpha$ uniformly by step 2.3, and $\partial_iv_M=\sum_{|k|_\infty\le M}(2\pi ik)^{\alpha+e_i}\widehat u(k)e_k\to f_{\alpha+e_i}$ uniformly. For fixed $x$ and small $h$ with $x+he_i\in\mathbb T^3$, the componentwise fundamental theorem ([[cor-vector-valued-ftc-and-lipschitz-bound]], claim 1), applied to the smooth real curve $s\mapsto v_M(x+she_i)$ on $[0,1]$, gives $v_M(x+he_i)-v_M(x)=h\int_0^1\partial_iv_M(x+she_i)\,ds$ for each $M$; for continuous coordinate functions its integral agrees with the tagged-sum integral (upper/lower sums squeeze tagged sums by uniform continuity). The norm bound in [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]], claim 1, therefore allows passage to the uniform limit, giving $f_\alpha(x+he_i)-f_\alpha(x)=h\int_0^1f_{\alpha+e_i}(x+she_i)\,ds$, and continuity of $f_{\alpha+e_i}$ gives $\bigl(f_\alpha(x+he_i)-f_\alpha(x)\bigr)/h\to f_{\alpha+e_i}(x)$ as $h\to0$. Hence $\partial_if_\alpha=f_{\alpha+e_i}$, which is the induction step; the base $|\alpha|=0$ is the definition of $\widetilde u$, so all claimed identities hold and $\widetilde u\in C^j$ with the displayed sup bounds. This proves claim 3. [step 2.3, F7]

4.1 Claim 4: for $u\in H^{\sigma+1}$ with $\partial_ju$ continuous, $\partial_ju\in H^\sigma$ and the continuous field $w:=\sum_k\widehat{\partial_ju}(k)e_k$ produced by steps 2.1-2.2 satisfies $w=\partial_ju$ almost everywhere, hence $w=\partial_ju$ everywhere by step 2.2; therefore $\sup|\partial_ju|_2=\|w\|_{L^\infty}\le W_\sigma\|\partial_ju\|_{H^\sigma}\le W_\sigma\|u\|_{H^{\sigma+1}}$, because $\|\partial_ju\|_{H^\sigma}\le\|u\|_{H^{\sigma+1}}$ by [[def-periodic-vector-sobolev-space-and-leray-projection]]. [step 2.1, step 2.2, F1] ∎

## Remarks

- Claim 2 is the only measure-theoretic input: it says that a continuous field is determined by its values almost everywhere, which is exactly what lets the Fourier representative and a smooth field be identified pointwise.
- Claims 1 and 3 recover, with explicit constants $W_{\sigma-|\alpha|}$, the standard fact that $H^\sigma(\mathbb T^3)$ for $\sigma>3/2$ consists of continuous fields, with $j$ continuous derivatives once $\sigma>j+3/2$.
- The sup bound in claim 4 is the form used later for $\|\nabla v\|_{L^\infty}\le W_{s-1}\|v\|_{H^s}$, $s\ge4$: it avoids any elliptic regularity or bounded-domain Sobolev machinery.
