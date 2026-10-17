---
id: lem-tgr-static-gas-finite-normalization
kind: lemma
title: "Static relativistic finite gas normalization and hydrostatics"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-gravitating-phase-reference
  - thm-differentiation-under-the-integral-sign
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
---
## Statement

Let $I_{x^0}\subseteq\mathbb R$ be an open interval and $B\subset\mathbb R^3$ an open bounded coordinate box with compact closure and positive volume. On a neighborhood of $I_{x^0}\times\overline B$, with $x^0=ct$ assigned metres and $t$ in seconds, prescribe the smooth static metric
$$g=-\mathcal N(x)^2(dx^0)^2+h_{ij}(x)dx^i dx^j,$$
where $h_{ij}$ is positive definite with eigenvalues bounded above and away from zero, and the lapse satisfies $0<\mathcal N_0\le\mathcal N(x)\le\mathcal N_1<\infty$. The static unit observer is $u=\mathcal N^{-1}\partial_{x^0}$, so $g(u,u)=-1$; this is a prescribed background, not a solution sourced by the gas.

Use SI units: particle mass $m>0$ is in $\mathrm{kg}$, $c>0$ is in $\mathrm{m\,s^{-1}}$, orthonormal momentum $\hat p$ is in $\mathrm{kg\,m\,s^{-1}}$, and local energy $E$ is in $\mathrm J$. In any local orthonormal coframe, $p_i=e_i{}^a\hat p_a$ and $h_{ij}=\sum_a e_i{}^ae_j{}^a$, so $dV_h\,d^3\hat p=d^3x\,d^3p_i$; orthonormal-frame changes are rotations and preserve $d^3\hat p$. This defines a fibre measure without assuming a global frame. Use the fixed action reference $h_*>0$ in $\mathrm{J\,s}$ and $\beta_K>0$ in $\mathrm{J^{-1}}$:
$$E(\hat p)=\sqrt{m^2c^4+c^2|\hat p|^2},\qquad H_K(x,\hat p)=\mathcal N(x)E(\hat p),\qquad Z_1(\beta_K)=\int_B\int_{\mathbb R^3}e^{-\beta_KH_K}\frac{dV_h\,d^3\hat p}{h_*^3}.$$
Then $0<Z_1<\infty$, with all polynomial momentum moments and compact-positive-$\beta_K$ derivatives finite. For each fixed particle count $M\ge1$, the classical ideal-gas preparation with Gibbs factor $1/M!$ has $Z_M=Z_1^M/M!$; a grand fugacity preparation with dimensionless $z>0$ has $\Xi=\exp(zZ_1)$.

Define $f(x,\hat p)=z h_*^{-3}e^{-\beta_KH_K}$ and the proper local densities
$$n(x)=\int f\,d^3\hat p,\quad \varepsilon(x)=\int E f\,d^3\hat p,\quad P(x)=\frac13\int \hat p\cdot\nabla_{\hat p}E\,f\,d^3\hat p.$$
Their units are $\mathrm{m^{-3}}$, $\mathrm{J\,m^{-3}}$, and $\mathrm{J\,m^{-3}}$, respectively. With $\beta_{\mathrm{loc}}=\beta_K\mathcal N(x)$ and $T_K=(k_B\beta_K)^{-1}$, the exact model identities are
$$T_{\mathrm{loc}}(x)=\frac1{k_B\beta_{\mathrm{loc}}}=\frac{T_K}{\mathcal N(x)},\quad P=nk_BT_{\mathrm{loc}},\quad \partial_iP=-(\varepsilon+P)\partial_i\log\mathcal N.$$
If $z=e^{\beta_K\mu_K}$ with $\mu_K$ in joules, the local chemical parameter is $\mu_{\mathrm{loc}}=\mu_K/\mathcal N$. No Einstein equation, self-consistent gas backreaction, interacting quantum trace, or arbitrary curved-space mode spectrum is asserted.

## Facts & Assumptions

**Given:** A bounded positive-volume region, smooth prescribed static metric data satisfying the stated uniform bounds, $m,c,h_*,k_B,\beta_K,z>0$, and the classical ideal-gas preparation.

[F1] The phase-reference item fixes the action unit $h_*$ and the convention that a phase integral is dimensionless after division by its corresponding power. ([[def-tgr-gravitating-phase-reference]])

[F2] If an integrable section is differentiable in a parameter and its derivative has an integrable uniform majorant on a neighborhood, differentiation passes through the integral. ([[thm-differentiation-under-the-integral-sign]])

[F3] Tonelli factors nonnegative measurable integrals on products of sigma-finite measure spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

1.1 In a local orthonormal coframe, $p_i=e_i{}^a\hat p_a$ and $h_{ij}=\sum_a e_i{}^ae_j{}^a$, so $|\det(e_i{}^a)|=\sqrt{\det h}$. Hence $d^3p_i=\sqrt{\det h}\,d^3\hat p$ and $d^3x\,d^3p_i=dV_h\,d^3\hat p$. The transition matrix between orthonormal coframes is orthogonal and has absolute determinant one, so this fibre measure is independent of the chosen local coframe. [F1, algebra]

1.2 In the orthonormal momentum variables, $E(\hat p)\ge c|\hat p|$, so $e^{-\beta_K\mathcal N E}\le e^{-\beta_K\mathcal N_0c|\hat p|}$. The right side is integrable on $\mathbb R^3$: $|\hat p|\ge(|\hat p_1|+|\hat p_2|+|\hat p_3|)/\sqrt3$ reduces its integral to a product of three finite one-dimensional exponential integrals. The same comparison with polynomial factors gives every energy moment and a common majorant for $\beta_K$ in compact positive intervals. Each $\beta_K$ derivative of the integrand is $(-H_K)^j e^{-\beta_KH_K}$; [F2] therefore gives $Z_1^{(j)}=\int(-H_K)^j e^{-\beta_KH_K}dV_h\,d^3\hat p/h_*^3$ for every finite order. The proper volume of $\overline B$ is finite by compactness and the metric eigenvalue bounds, and positive because $B$ has positive volume and $\det h>0$. Thus $Z_1$ is finite and strictly positive. For $M$ independent labelled particles, Tonelli [F3] factors the product integral; the fixed classical indistinguishable-particle counting convention divides by $M!$, giving $Z_M=Z_1^M/M!$. Summing grand weights yields $\sum_{M\ge0}(zZ_1)^M/M!=e^{zZ_1}$. [F1, F2, F3, given, algebra]

2.1 At a fixed $x$, put $\beta_{\mathrm{loc}}=\beta_K\mathcal N(x)$. On a momentum cube $[-R,R]^3$, integrate
$$\sum_{i=1}^3\partial_{\hat p_i}\left(\hat p_i e^{-\beta_{\mathrm{loc}}E}\right) =3e^{-\beta_{\mathrm{loc}}E}-\beta_{\mathrm{loc}}(\hat p\cdot\nabla_{\hat p}E)e^{-\beta_{\mathrm{loc}}E}.$$
The constant factor $z h_*^{-3}$ in $f$ cancels from the moments. Here $\nabla_{\hat p}E=c^2\hat p/E$ and $\hat p\cdot\nabla_{\hat p}E\le c|\hat p|$, so the divergence terms are integrable under the exponential bound of step 1.2. On a face with $|\hat p_i|=R$, $|\hat p|\ge R$ and $|\hat p|\ge(|\hat p_j|+|\hat p_k|)/\sqrt2$, hence $|\hat p|\ge R/2+(|\hat p_j|+|\hat p_k|)/(2\sqrt2)$. Each face integral is therefore bounded by a constant times $R e^{-\beta_{\mathrm{loc}}cR/2}\int_{\mathbb R^2}e^{-\beta_{\mathrm{loc}}c(|y|+|z|)/(2\sqrt2)}dy\,dz$, which tends to zero. The integral of the divergence over $\mathbb R^3$ is zero, and division by $3\beta_{\mathrm{loc}}$ gives $P=n/\beta_{\mathrm{loc}}=nk_BT_{\mathrm{loc}}$. [given, step 1.2, algebra]

3.1 For each spatial coordinate $x^i$, $\partial_i f=-\beta_K(\partial_i\mathcal N)E f$. The derivatives of the lapse are bounded on the compact closure, $\mathcal N\ge\mathcal N_0$, and $Ef$ has the integrable majorant from step 1.2. Hence [F2] gives $\partial_i n=-\beta_K(\partial_i\mathcal N)\varepsilon$. Differentiating $P=n/(\beta_K\mathcal N)$ and substituting this identity yields
$$\partial_iP=-\frac{\varepsilon}{\mathcal N}\partial_i\mathcal N -\frac{n}{\beta_K\mathcal N^2}\partial_i\mathcal N =-(\varepsilon+P)\partial_i\log\mathcal N.$$
Finally, rewriting $\beta_K(\mathcal N E-\mu_K)$ as $\beta_{\mathrm{loc}}(E-\mu_{\mathrm{loc}})$ gives $\mu_{\mathrm{loc}}=\mu_K/\mathcal N$. [F1, F2, step 1.2, step 2.1, algebra] ∎
