---
id: lem-dirichlet-character-chebyshev-laplace-transform
title: "Dirichlet character chebyshev laplace transform"
kind: lemma
status: published
origin: pipeline
deps: [thm-dirichlet-l-euler-product, thm-dirichlet-series-summatory-integral, thm-chebyshev-theta-linear-bounds, lem-chebyshev-functions-prime-power-comparison, thm-dirichlet-l-nonzero-at-one, thm-dirichlet-l-nonvanishing-line-one, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-principal-dirichlet-l-factorization, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a74.4, proof of Theorem 4.12"
      url: https://kskedlaya.org/ant/chap-primes-in-ap.html
proof_strategy: direct argument
---

## Statement

Fix a Dirichlet character $\chi$ modulo $q\ge1$. Put $\Psi_\chi(x)=\sum_{n\le x}\chi(n)\Lambda(n)$ and $\delta_\chi=1$ for the principal character, zero otherwise. The bounded, locally integrable function $f_\chi(t)=e^{-t}\Psi_\chi(e^t)-\delta_\chi$ has Laplace transform
$$g_\chi(s)=-\frac{L'(s+1,\chi)}{(s+1)L(s+1,\chi)}-\frac{\delta_\chi}{s}\quad(\operatorname{Re}s>0).$$
After the removable value at zero is filled in, this extends holomorphically to an open neighborhood of the closed right half-plane.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-dirichlet-l-euler-product]]: For every Dirichlet character $\chi$ and every $s$ with $\operatorname{Re}s>1$, $L(s,\chi)=\prod_p \frac{1}{1-\chi(p)p^{-s}},$ and this product is nonzero on $\operatorname{Re}s>1$.

[F2] [[thm-dirichlet-series-summatory-integral]]: Let $\theta\in\mathbb R$, let $(a_n)_{n\ge1}$ be complex coefficients, and put $A(x):=\sum_{1\le n\le x} a_n$. If $A(x)=O(x^\theta)$, then for every $s$ with $\Re s > \theta$, $\sum_{n \ge 1} a_n n^{-s} = s \int_1^\infty A(x)x^{-s-1}\,dx.$ For every integer $N\ge1$ one has the endpoint formula $\sum_{1\le n \le N} a_n n^{-s} = A(N)N^{-s} + s\int_1^N A(x)x^{-s-1}\,dx.$

[F3] [[thm-chebyshev-theta-linear-bounds]]: There exist positive constants $c<C$ and a real number $x_0$ such that $ cx\le\theta(x)\le Cx $ for every real $x\ge x_0$.

[F4] [[lem-chebyshev-functions-prime-power-comparison]]: There are positive constants $K_1,K_2$ such that for every real $x\ge2$, $ 0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x $ and, for all sufficiently large $x$, $ \psi(x)-\theta(x)\le K_2\sqrt{x}. $

[F5] [[thm-dirichlet-l-nonzero-at-one]]: If $\chi\ne\chi_0$ is a Dirichlet character, then $L(1,\chi)\ne0$.

[F6] [[thm-dirichlet-l-nonvanishing-line-one]]: If $\chi\ne\chi_0$ is a Dirichlet character, then $L(1+it,\chi)\ne0$ for every real $t\ne0$.

[F7] [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]]: If $\chi\ne\chi_0$ is a Dirichlet character, then the Dirichlet series $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ converges for every $\operatorname{Re}s>0$ and defines a holomorphic function there.

[F8] [[thm-principal-dirichlet-l-factorization]]: Let $\chi_0$ be the principal Dirichlet character modulo $q$. Then on $\operatorname{Re}s>1$, $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s}).$ Consequently, the meromorphic continuation of $L(s,\chi_0)$ has a simple pole at $s=1$ with residue $\prod_{p\mid q}\left(1-\frac1p\right)=\frac{\varphi(q)}{q}.$

[F9] [[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]]: The meromorphic continuation of $\zeta$ has no zeros on the closed half-plane $\operatorname{Re}s\ge1$. Its only singularity there is the simple pole at $s=1$.

## Proof

1.1 The linear theta bound and prime-power comparison give $\psi(x)=O(x)$, uniformly after enlarging the constant for bounded x. Since $|\chi(n)|\le1$, $|\Psi_\chi(x)|\le\psi(x)$; thus $f_\chi$ is bounded and locally integrable, with only finitely many jumps on each compact t-interval. [F3, F4]

1.2 For nonprincipal chi, holomorphy on $\operatorname{Re}w>0$ and nonvanishing at w=1 and at every $1+it$, $t\ne0$, show that the logarithmic derivative is holomorphic near every point of that line; the Euler product covers its right side. For the principal character, $L(w,\chi_0)=\zeta(w)\prod_{p\mid q}(1-p^{-w})$ continues meromorphically, with a simple pole at one and no zero on $\operatorname{Re}w\ge1$. The finite factors cannot vanish there because $|p^{-w}|<1$. [F5, F6, F7, F8, F9]

2.1 The Euler logarithm is normally absolutely convergent on $\operatorname{Re}w>1$; its differentiated series is dominated on each smaller half-plane by $\sum(\log n)n^{-\sigma}$. Differentiation gives $-L'/L(w,\chi)=\sum\chi(n)\Lambda(n)n^{-w}$. Apply the summatory integral at $w=s+1$ and substitute $x=e^t$, obtaining the displayed formula with the factor s+1 intact. [F1, F2, step 1.1]

3.1 At s=0 in the principal case write $-L'/L(1+s)=1/s+h(s)$ with h holomorphic. Then $g_{\chi_0}(s)=-1/(1+s)+h(s)/(1+s)$ is holomorphic. Elsewhere shrink the pointwise neighborhoods to avoid s=-1. The union of these neighborhoods and the original half-plane is the required open set. For q=1 the finite product is empty and equals one. [step 2.1, step 1.2, algebra] ∎
