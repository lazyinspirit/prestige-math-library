---
id: lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions
kind: lemma
title: Uniform interior higher integrability for conductivity solutions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators
  - thm-calderon-zygmund-singular-integrals-are-bounded-on-lp
  - thm-riesz-thorin-interpolation
  - thm-plancherel
  - thm-young-convolution-inequality
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - thm-critical-sobolev-embedding-into-every-finite-lq
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-poincare-wirtinger-on-bounded-connected-extension-domains
  - lem-ip-mean-zero-neumann-problem-wellposedness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: N. G. Meyers, An Lp-estimate for the gradient of solutions of second
        order elliptic divergence equations
      url: https://www.numdam.org/item/ASNSP_1963_3_17_3_189_0.pdf
      locator: Classical higher-integrability theorem; the local proof below uses the
        whole-space projection perturbation argument, not an imported theorem.
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega$ be a bounded connected smooth domain, let $U\Subset\Omega$ be open, and fix $0<m\le M<\infty$. There are $p\in(2,4)$ and $C<\infty$, depending only on $d,m,M,\Omega,U$, such that every real measurable $\gamma$ with $m\le\gamma\le M$ and every weak solution $u\in H^1(\Omega)$ of $\operatorname{div}(\gamma\nabla u)=0$ satisfy
$$\|\nabla u\|_{L^p(U)}\le C\|\nabla u\|_{L^2(\Omega)}.$$
In particular, for a weak Neumann solution with quotient flux $F\in\dot{\mathcal D}^{*}$, the right side is at most $C\|F\|_{\dot{\mathcal D}^{*}}$, uniformly in $\gamma$.

## Statement references

[[lem-ip-mean-zero-neumann-problem-wellposedness|The weak Neumann solution and quotient flux norm.]]

## Facts & Assumptions

**Given:** the domain, compactly contained set and uniform ellipticity bounds in the Statement.

[F1] The Riesz transforms have multipliers $-i\xi_j/|\xi|$, are bounded on every $L^r$, $1<r<\infty$, and their compositions agree on intersections of those spaces. ([[lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators]], [[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]])

[F2] Riesz–Thorin interpolation bounds the intermediate complex scalar $L^r$ operator norm by the geometric mean of its two endpoint bounds; Plancherel computes $L^2$ Fourier multiplier norms. ([[thm-riesz-thorin-interpolation]], [[thm-plancherel]])

[F3] Every bounded smooth domain is a Sobolev extension domain. On this fixed domain, $H^1$ embeds into $L^{2d/(d-2)}$ if $d>2$, and into every finite $L^r$ if $d=2$. Subtracting the volume mean bounds the $H^1$ norm by the gradient norm. ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]], [[thm-critical-sobolev-embedding-into-every-finite-lq]], [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]])

[F4] On a smooth domain contained in $(0,1)^d$, the uniformly elliptic weak Neumann solution satisfies $\|\nabla u\|_2\le C\|F\|_{\dot{\mathcal D}^{*}}$. ([[lem-ip-mean-zero-neumann-problem-wellposedness]])

[F5] Young’s convolution inequality holds on Lebesgue spaces under Countable Choice. ([[thm-young-convolution-inequality]])

[F6] The normalized locally integrable kernel $\Phi_-$ is $-|S^{d-1}|^{-1}\log|x|$ for $d=2$ and $|x|^{2-d}/((d-2)|S^{d-1}|)$ for $d\ge3$, and satisfies $-\Delta\Phi_-=\delta_0$ distributionally. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]])

[A1] The two choice assumptions are inherited at the stated harmonic-analysis, Sobolev and weak-solution interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the data in the Statement and a weak solution $u$.

1.1 On vector fields on $\mathbb R^d$ put $P=-\bigl(R_iR_j\bigr)_{i,j}$, with multiplier $\xi\xi^T/|\xi|^2$ away from zero. This is the orthogonal gradient projection, so $\|P\|_{L^2(\ell^2)\to L^2(\ell^2)}=1$ by [F2]. The finitely many compositions in [F1] give a finite $L^4(\ell^4)$ bound $C_4\ge1$. Apply scalar [F2] on the product of Lebesgue measure and counting measure on $\{1,\ldots,d\}$ to this matrix operator, whose $L^2$ norm there is exactly one. If $1/p=(1-\theta)/2+\theta/4$, then $\|P\|_{L^p(\ell^p)\to L^p(\ell^p)}\le C_4^\theta$. Since $\|z\|_{\ell^p}\le\|z\|_{\ell^2}\le d^{1/2-1/p}\|z\|_{\ell^p}$ for $p>2$, its Euclidean-vector $L^p$ norm is at most $D_p=d^{1/2-1/p}C_4^\theta$, which tends to one as $p\downarrow2$. These extensions agree with the $L^2$ projection on common inputs by density. [A1, F1, F2, given, construct]

2.1 Put $a=(m+M)/2$ and $k=(M-m)/(M+m)<1$. Extend $\gamma$ outside $\Omega$ by $a$ and set $c=(a-\gamma)/a$, so $\|c\|_\infty\le k$. Choose $p\in(2,4)$ sufficiently close to two that $kD_p<1$ and, when $d>2$, $p<2d/(d-2)$. The operators $Pc$ then have norms less than one both on $L^2(\ell^2)$ and on $L^p(\ell^2)$. For every vector field $F$ in their intersection, the series $\sum_{j\ge0}(Pc)^j a^{-1}PF$ converges in BOTH spaces. The two limits agree as distributions, since convergence in either space implies convergence against compactly supported smooth tests. In particular, any $v\in H^1(\mathbb R^d)$ solving $\operatorname{div}(\gamma\nabla v)=\operatorname{div}F$ satisfies $\nabla v=a^{-1}PF+Pc\nabla v$ in $L^2$: subtracting the two sides gives a gradient field of zero divergence, whose Fourier transform vanishes away from zero and hence vanishes in $L^2$. Thus $\|\nabla v\|_p\le a^{-1}D_p(1-kD_p)^{-1}\|F\|_p$. [step 1.1, given, choose, algebra]

3.1 Choose $\chi\in C_c^\infty(\Omega)$ equal to one on a neighborhood of $\overline U$, set $u_0=u-u_\Omega$ and extend $v=\chi u_0$ by zero. The product rule and the weak equation give $\operatorname{div}(\gamma\nabla v)=\operatorname{div}(\gamma u_0\nabla\chi)+g$, where $g=\gamma\nabla u\cdot\nabla\chi$ is compactly supported, $\|g\|_2\le C\|\nabla u\|_2$, and $\int g=0$ by testing the original weak equation with $\chi$. Put $\Phi=-\Phi_-$ using [F6], so $\Delta\Phi=\delta_0$, and set $W=\nabla\Phi*g$. The radial formula in [F6] gives $\partial_i\Phi=x_i/(|S^{d-1}||x|^d)$ and $\partial_{ij}\Phi=\delta_{ij}/(|S^{d-1}||x|^d)-d x_ix_j/(|S^{d-1}||x|^{d+2})$ away from zero, hence $|\nabla\Phi(x)|\le C|x|^{1-d}$ and $|D^2\Phi(x)|\le C|x|^{-d}$. This convolution defines a locally integrable distribution with $\operatorname{div}W=g$: integrate the fundamental-solution identity against compactly supported tests and use local integrability of $|x|^{1-d}$. Its low-frequency behavior is controlled by the zero integral of $g$, as quantified next. [F6, step 2.1, given, construct]

4.1 Enclose $\operatorname{supp}g$ in a fixed ball of radius $L$. On $|x|\le2L+1$, $W$ only uses the restriction of $\nabla\Phi$ to a fixed larger ball; that kernel is in $L^r$ for $1\le r<d/(d-1)$. The convolution inequality with $1+1/p=1/2+1/r$ gives $\|W\|_{L^p(|x|\le2L+1)}\le C\|g\|_2$, because the chosen $p<2d/(d-2)$ makes this $r$ admissible (there is no finite upper restriction for $d=2$). The same argument with $r=1$ gives the local $L^2$ bound. Outside that ball, subtract $\nabla\Phi(x)\int g=0$ in the integral and use $|D^2\Phi(x-y)|\le C|x|^{-d}$ to obtain $|W(x)|\le C|x|^{-d}\|g\|_1$. This is integrable to both the second and the $p$th power at infinity. Thus $\|W\|_2+\|W\|_p\le C\|\nabla u\|_2$. The convolution estimates are [F5]. [F5, step 2.1, step 3.1, algebra]

5.1 Set $F=\gamma u_0\nabla\chi+W$. By [F3], the first term belongs to $L^2\cap L^p$ with norm at most $C\|\nabla u\|_2$; step 4.1 gives the same bound for the second. Step 3.1 now reads $\operatorname{div}(\gamma\nabla v)=\operatorname{div}F$. Apply step 2.1 and use $\nabla v=\nabla u$ on $U$ to obtain $\|\nabla u\|_{L^p(U)}\le C\|\nabla u\|_2$, with all constants depending only on the fixed data. For the Neumann conclusion on an arbitrary bounded smooth $\Omega$, choose a similarity $S(x)=a+\ell x$, $\ell>0$, with $\widehat\Omega=S(\Omega)\subset(0,1)^d$. Put $\widehat u=u\circ S^{-1}$ and $\widehat\gamma=\gamma\circ S^{-1}$. Pullback $\widehat v\mapsto\widehat v\circ S$ is a bounded isomorphism of $H^1$ spaces, carries $H_0^1$ onto $H_0^1$ and preserves constants, hence induces a bounded isomorphism of the trace quotients by constants. Define $\widehat F([\operatorname{Tr}\widehat v])=\ell^{d-2}F([\operatorname{Tr}(\widehat v\circ S)])$. The energy change of variables gives $\int_{\widehat\Omega}\widehat\gamma\nabla\widehat u\cdot\overline{\nabla\widehat v}\,dy=\ell^{d-2}\int_\Omega\gamma\nabla u\cdot\overline{\nabla(\widehat v\circ S)}\,dx=\widehat F([\operatorname{Tr}\widehat v])$, and $\|\widehat F\|\le C_S\|F\|$. Apply [F4] there and use $\|\nabla\widehat u\|_{L^2(\widehat\Omega)}=\ell^{d/2-1}\|\nabla u\|_{L^2(\Omega)}$ to get the claimed energy bound on $\Omega$. Every construction used a fixed finite cutoff and bounded operators, so the two choice assumptions enter only through [A1]. [F3, F4, step 2.1, step 3.1, step 4.1, algebra] ∎
