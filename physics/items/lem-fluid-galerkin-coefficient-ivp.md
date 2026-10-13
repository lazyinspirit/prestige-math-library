---
id: lem-fluid-galerkin-coefficient-ivp
kind: lemma
title: "The Galerkin coefficient system: finite-dimensional invariance, local Lipschitz property, and the unique maximal approximation on the torus"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-discrete-young-and-sobolev-product, lem-fourier-lattice-sobolev-embedding, lem-cm-lattice-shell-count-and-weight-sums, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, thm-coordinate-map-for-a-finite-dimensional-normed-space, thm-cauchy-schwarz-finite, def-linear-basis, def-first-order-ode-initial-value-problem-and-solution, def-metric-ball, def-vector-space, def-inner-product-space]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-coordinate-map-for-a-finite-dimensional-normed-space: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-linear-basis: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-metric-ball: mathematical-premise
  def-vector-space: mathematical-premise
  def-inner-product-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Definition 3.1 and Subsection 3.1.2 (the N-th order Galerkin approximation of the NSE and the resulting finite system of ODEs)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Theorem 3.1 and Proposition 3.6 with Subsection 3.2.2 (Picard's theorem on a Banach space and the locally Lipschitz regularized/Galerkin evolution)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through the Fourier-coefficient suppliers. Fix $N\ge1$, a real viscosity parameter $\nu\ge0$ and a real exponent $s>3/2$. Work in the notation of [[def-periodic-vector-sobolev-space-and-leray-projection]]: $H^s=H^s(\mathbb T^3;\mathbb R^3)$ with coefficients $\widehat u(k)$, weights $w_k$, Leray projection $P$, differential operators $\partial_j,\Delta$ and divergence-free subspace $H^s_\sigma$.

**Definitions.** For a coefficient family $c$ let $(P_Nc)(k):=c(k)$ if $|k|_\infty\le N$ and $(P_Nc)(k):=0$ otherwise (\emph{Fourier truncation}); let
$$X_N:=\{\,u\in H^0:\widehat u(k)=0\ \text{for }|k|_\infty>N,\ k\cdot\widehat u(k)=0\ \forall k,\ \widehat u(-k)=\overline{\widehat u(k)}\ \forall k\,\}$$
be the space of real divergence-free trigonometric-polynomial fields of frequency at most $N$, and define the **Galerkin field**
$$F_N:X_N\longrightarrow H^0,\qquad F_N(u):=-P_NP\bigl((u\cdot\nabla)u\bigr)+\nu\Delta u .$$

Then:

1. $X_N$ is a finite-dimensional real-linear subspace of $H^s$ for every $s\in\mathbb R$, $P_N$ restricted to the real divergence-free subspace $H^s_\sigma$ is the orthogonal projection onto $X_N$ for the $H^s$ inner product and $\|P_Nu\|_{H^s}\le\|u\|_{H^s}$; moreover $F_N$ maps $X_N$ into $X_N$, and $\int_{\mathbb T^3}F_N(u)\,dx=0$ and $F_N(P_Nu)=F_N(u)$ for $u\in X_N$.
2. **Local Lipschitz property.** For every $R>0$ there is $L_N(R)<+\infty$ such that $\|F_N(u)-F_N(v)\|_{H^s}\le L_N(R)\|u-v\|_{H^s}$ whenever $u,v\in X_N$ with $\|u\|_{H^s},\|v\|_{H^s}\le R$; the proof exhibits $L_N(R)=12\pi^2\nu N^2+6C_sc_NR$ with $c_N=(1+12\pi^2N^2)^{1/2}$ and $C_s$ the product constant of [[lem-discrete-young-and-sobolev-product]].
3. **Galerkin IVP.** For every $u_0\in X_N$ the initial value problem
$$u'(t)=F_N(u(t)),\qquad u(0)=u_0$$
has a unique maximal solution $u_N:I\to X_N$ with open interval $I\ni0$; if the maximal interval has finite right endpoint $T_{\max}<+\infty$, then $\lim_{t\uparrow T_{\max}}\|u_N(t)\|_{H^{s'}}=+\infty$ for every $s'>3/2$, and conversely if $\|u_N\|_{H^{s'}}\le R$ on $[0,T)$ for some $s'>3/2$ with $T<+\infty$ then the solution extends past $T$. For $u_0\in H^0_\sigma$ arbitrary, $P_Nu_0\in X_N$ and the corresponding solution is written $u_N(\cdot;P_Nu_0)$.
4. **Basic bounds.** Along the maximal solution:
   (a) for every real $m>3/2$,
   $$\|u_N'(t)\|_{H^m}\le\nu\|u_N(t)\|_{H^{m+2}}+3C_m\|u_N(t)\|_{H^{m+1}}^2 ,$$
   where $C_m$ is the product constant of [[lem-discrete-young-and-sobolev-product]] at order $m$;
   (b) for every real $0\le m\le2$, with $c_N=(1+12\pi^2N^2)^{1/2}$ and $e_N=(1+48\pi^2N^2)^{1/2}$,
   $$\|u_N'(t)\|_{H^m}\le12\pi^2\nu N^2\|u_N(t)\|_{H^m}+3C_sc_Ne_N^2\|u_N(t)\|_{H^s}^2 ;$$
   (c) $\|P_Nu-u\|_{H^r}\le(2\pi(N+1))^{-1}\|u\|_{H^{r+1}}$ for every real $r$ and every $u\in H^{r+1}$.

## Facts & Assumptions

**Given:** The finite support $|k|_\infty\le N$, the weight family with $w_k\ge\max(1,2\pi|k|_\infty,2\pi|k|_j)$, and the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]].

[F1] For a finitely supported family with $|k|_\infty\le N$ one has $\|u\|_{H^{r+1}}\le c_N\|u\|_{H^r}$ for every real $r$, and $\|\Delta u\|_{H^r}\le12\pi^2N^2\|u\|_{H^r}$, because $w_k\le c_N:=(1+12\pi^2N^2)^{1/2}$ and $|2\pi k|_2^2\le12\pi^2N^2$ on the support, where $|k|_2^2\le3N^2$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).


[F2] For $\sigma>3/2$ the product bounds $\|fg\|_{H^\sigma}\le C_\sigma\|f\|_{H^\sigma}\|g\|_{H^\sigma}$ and $\|(f\cdot\nabla)g\|_{H^\sigma}\le3C_\sigma\|f\|_{H^\sigma}\|g\|_{H^{\sigma+1}}$ hold with $C_\sigma=2^\sigma W_\sigma$ ([[lem-discrete-young-and-sobolev-product]], claims 2 and 3); $C_s$ denotes this constant at order $s$.

[F3] $P$ is an orthogonal projection (self-adjoint, idempotent, norm nonincreasing) in every $H^s$; $P$ commutes with $\Delta$ and $\partial_j$; $P\nabla f=0$; and $\operatorname{div}(Pu)=0$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F4] A locally Lipschitz field on an open subset of $\mathbb R^n$ has a unique local solution through every initial point ([[thm-picard-lindelof-local-existence-and-uniqueness]]), and every initial value problem satisfying the Picard-Lindelof hypotheses has a unique maximal solution whose domain is an open interval containing the initial time ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]).

[F5] Let $v_0,\dots,v_{M-1}$ be an ordered basis ([[def-linear-basis]]) of the finite-dimensional real vector space $X_N$ and $T(a):=\sum_{i<M}a_iv_i$. Then $T$ is a topological isomorphism onto its span ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]), so there are constants $0<b\le B<+\infty$ with $b\|a\|_1\le\|T(a)\|_{H^s}\le B\|a\|_1$ for every $a\in\mathbb R^M$; the same holds with $\|\cdot\|_{H^{s'}}$ in place of $\|\cdot\|_{H^s}$ for every real $s'$, with constants $b',B'$ depending on $s'$. Moreover $\|a\|_2\le\|a\|_1\le\sqrt M\|a\|_2$ for every $a\in\mathbb R^M$ ([[thm-cauchy-schwarz-finite]]).

[F6] For a trigonometric polynomial $W$ on $\mathbb T^3$ one has $\int_{\mathbb T^3}\operatorname{div}W\,dx=0$; for divergence-free $u$, the $i$-th component satisfies $\sum_{j=1}^3u_j\partial_ju_i=\sum_{j=1}^3\partial_j(u_ju_i)$, by the product rule and $\sum_j\partial_ju_j=0$; each scalar derivative has zero coefficient at $k=0$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F7] $\|P_Nu-u\|_{H^r}\le(2\pi(N+1))^{-1}\|u\|_{H^{r+1}}$ for $u\in H^{r+1}$: the tail sum over $|k|_\infty>N$ is bounded by $(2\pi(N+1))^{-2}$ times the $H^{r+1}$-weighted sum ([[lem-cm-lattice-shell-count-and-weight-sums]], claim 5).

[F8] If $v\in H^0$ has Fourier support in $|k|_\infty\le2N$ and $0\le m\le2$ then $\|v\|_{H^m}\le e_N^m\|v\|_{H^0}\le e_N^2\|v\|_{H^0}$ with $e_N:=(1+48\pi^2N^2)^{1/2}$, because $w_k\le e_N$ on that support and $w_k\ge1$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

## Proof


**Proof technique:** direct; the finite-dimensional coefficient space carries a polynomial vector field, so Picard-Lindelof supplies the maximal solution, while the invariance and Lipschitz bounds are explicit finite-sum estimates.

**Given:** $N\ge1$, $\nu\ge0$, the space $X_N$, the field $F_N$ and the facts [F1]-[F8].

1.1 $X_N$ is a real-linear subspace of the coefficient space: the support condition $|k|_\infty\le N$ and the two linear conditions $k\cdot\widehat u(k)=0$, $\widehat u(-k)=\overline{\widehat u(k)}$ are preserved by sums and real multiples. It is spanned by $P((\operatorname{Re}e_k)e_i)$ and $P((\operatorname{Im}e_k)e_i)$ for $|k|_\infty\le N$ and standard coordinate vectors $e_i\in\mathbb R^3$: these are real divergence-free polynomials in $X_N$, and applying $P$ to the ordinary finite Fourier expansion of any $u\in X_N$ fixes $u$. Order this finite spanning list, then process it in order, retaining a vector exactly when it is not in the span of the vectors already retained. Induction gives a linearly independent list spanning all processed vectors, hence an ordered basis after the final vector. Thus $X_N$ is finite-dimensional, and it is contained in $H^s$ for every $s$ because only finitely many coefficients are nonzero. The truncation $P_N$ is the orthogonal projection onto the support condition: it commutes with the weights $w_k^{2s}$, is idempotent and self-adjoint, and $\|P_Nu\|_{H^s}\le\|u\|_{H^s}$. [given, F1]

2.1 $F_N$ maps $X_N$ into $X_N$: for $u\in X_N$, the field $(u\cdot\nabla)u$ is a trigonometric polynomial with support in $|k|_\infty\le2N$ (a finite convolution of supports), and $P$, $P_N$ and $\Delta$ preserve finite support, reality and the divergence-free condition (for $P$ by [F3], for $P_N$ and $\Delta$ coefficientwise), so $F_N(u)\in X_N$. Moreover $\widehat{F_N(u)}(0)=-\widehat{P((u\cdot\nabla)u)}(0)+\nu\widehat{\Delta u}(0)$ and $\widehat{\Delta u}(0)=-4\pi^2\cdot0\cdot\widehat u(0)=0$, while each component of $(u\cdot\nabla)u$ is a sum of scalar derivatives by [F6], each with zero coefficient at $0$; hence $\int F_N(u)\,dx=0$. Finally $P_N$ is the identity on $X_N$, so $F_N(P_Nu)=F_N(u)$ for $u\in X_N$. [step 1.1, F3, F6]

3.1 **Local Lipschitz bound.** For $u,v\in X_N$ put $h:=u-v$. Then $F_N(u)-F_N(v)=-P_NP\bigl((u\cdot\nabla)h+(h\cdot\nabla)v\bigr)+\nu\Delta h$. By [F1], $\|\Delta h\|_{H^s}\le12\pi^2N^2\|h\|_{H^s}$ and $\|h\|_{H^{s+1}}\le c_N\|h\|_{H^s}$; by [F2], $\|(u\cdot\nabla)h\|_{H^s}\le3C_s\|u\|_{H^s}\|h\|_{H^{s+1}}\le3C_sc_N\|u\|_{H^s}\|h\|_{H^s}$ and likewise $\|(h\cdot\nabla)v\|_{H^s}\le3C_sc_N\|v\|_{H^s}\|h\|_{H^s}$. Since $P$ and $P_N$ are norm nonincreasing [F3], $\|F_N(u)-F_N(v)\|_{H^s}\le\bigl(12\pi^2\nu N^2+3C_sc_N(\|u\|_{H^s}+\|v\|_{H^s})\bigr)\|h\|_{H^s}$, which is at most $L_N(R)\|u-v\|_{H^s}$ with $L_N(R):=12\pi^2\nu N^2+6C_sc_NR$ whenever $\|u\|_{H^s},\|v\|_{H^s}\le R$. [step 2.1, F1, F2, F3]

3.2 **Derivative bounds.** Part (a): for $m>3/2$, by [F2] and [F3], $\|F_N(u)\|_{H^m}\le\nu\|\Delta u\|_{H^m}+\|(u\cdot\nabla)u\|_{H^m}\le\nu\|u\|_{H^{m+2}}+3C_m\|u\|_{H^m}\|u\|_{H^{m+1}}\le\nu\|u\|_{H^{m+2}}+3C_m\|u\|_{H^{m+1}}^2$. Part (b): let $0\le m\le2$ and $v:=(u\cdot\nabla)u$, a trigonometric polynomial with support in $|k|_\infty\le2N$ (step 2.1); by [F8], $\|P_NPv\|_{H^m}\le\|v\|_{H^m}\le e_N^2\|v\|_{H^0}$, and by [F2] with [F1], $\|v\|_{H^0}\le\|v\|_{H^s}\le3C_s\|u\|_{H^s}\|u\|_{H^{s+1}}\le3C_sc_N\|u\|_{H^s}^2$; since $\|\Delta u\|_{H^m}\le12\pi^2N^2\|u\|_{H^m}$ by [F1], adding the two terms gives (b). Part (c) is [F7]. This is claim 4. [step 2.1, F1, F8, F2, F3, F7]

4.1 **The maximal solution.** Fix an ordered basis $v_0,\dots,v_{M-1}$ of $X_N$ ($M:=\dim_{\mathbb R}X_N$) and put $T(a):=\sum_{i<M}a_iv_i$, so that $T^{-1}:X_N\to\mathbb R^M$ is well defined. Let $G:=T^{-1}\circ F_N\circ T:\mathbb R^M\to\mathbb R^M$. For $\|a\|_2,\|a'\|_2\le\rho$ put $R:=B\sqrt M\rho$, so that $\|T(a)\|_{H^s},\|T(a')\|_{H^s}\le R$ by [F5], and step 3.1 gives $\|G(a)-G(a')\|_2\le\|G(a)-G(a')\|_1\le b^{-1}\|F_N(Ta)-F_N(Ta')\|_{H^s}\le b^{-1}L_N(R)\|T(a-a')\|_{H^s}\le b^{-1}BL_N(R)\|a-a'\|_1\le b^{-1}BL_N(R)\sqrt M\|a-a'\|_2$, using [F5]. Hence $G$ is locally Lipschitz, and [F4] gives a unique maximal solution $x:I\to\mathbb R^M$ of $x'=G(x)$, $x(0)=T^{-1}(u_0)$, with $I$ an open interval containing $0$; $u_N:=T\circ x$ is the unique maximal solution of the $X_N$-valued initial value problem $u'=F_N(u)$, $u(0)=u_0$, and every other solution is a restriction of it. [step 3.1, F4, F5]

5.1 **Blow-up alternative.** Let $T_{\max}<+\infty$ be the right endpoint of $I$. If the asserted norm divergence fails, there are $R<\infty$ and times $t_j\uparrow T_{\max}$ with $\|u_N(t_j)\|_{H^s}\le R$; then $x(t_j)=T^{-1}u_N(t_j)$ satisfies $\|x(t_j)\|_1\le b^{-1}R$, so the points $x(t_j)$ lie in the Euclidean ball of radius $\rho:=b^{-1}R$ and, by step 4.1, $G$ is bounded by some $M_0<+\infty$ and Lipschitz with constant $K:=b^{-1}BL_N\bigl(B\sqrt M(\rho+1)\bigr)\sqrt M$ on the ball of radius $\rho+1$. The quantitative Picard-Lindelof theorem [F4] applied to $G$ on that ball therefore gives one fixed $\eta>0$, depending only on $\rho,K,M_0$ (hence only on $R,N,\nu$), such that every initial value problem for $G$ with datum in the ball of radius $\rho$ has a solution on an interval of length $2\eta$; restarting at $t_j>T_{\max}-\eta$ extends $x$, hence $u_N$, beyond $T_{\max}$, contradicting maximality. Hence $\|u_N(t)\|_{H^s}\to+\infty$ as $t\uparrow T_{\max}$; for any other exponent $s'>3/2$ the norms $\|\cdot\|_{H^s}$ and $\|\cdot\|_{H^{s'}}$ are equivalent on the finite-dimensional space $X_N$ by [F5], so $\|u_N(t)\|_{H^{s'}}$ diverges as well. Conversely, if $\|u_N(t)\|_{H^{s'}}\le R$ on $[0,T)$, $T<+\infty$, for some $s'>3/2$, then [F5] transfers the bound to the exponent $s$ and the same restarting argument extends the solution past $T$. [step 3.1, step 4.1, F4, F5]

6.1 Claims 1-4 are established by steps 1.1, 2.1, 3.1, 4.1, 5.1 and 3.2; the identity $P_Nu_0\in X_N$ for $u_0\in H^0_\sigma$ holds by definition of $X_N$ and [F3]. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 3.2] ∎

## Remarks

- The ordered basis of step 4.1 is a bookkeeping device for the finite-dimensional ODE theory; the estimates use only the two-sided bound of [F5] and, for the blow-up alternative, the equivalence of the norms $\|\cdot\|_{H^s}$ on the finite-dimensional space $X_N$.
- The blow-up alternative is stated for the $H^s$ norm with $s>3/2$ because that is the norm in which the restarting argument is quantitative; the local Lipschitz bound is proved in the same norm.
