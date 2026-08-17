---
id: prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain
kind: proposition
title: "Vanishing integrals around triangles construct a primitive for a continuous function on a star-shaped domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, rem-plane-star-shaped-and-convex-dictionary, def-complex-primitive, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, thm-existence-of-complex-line-integrals-on-rectifiable-paths, prop-reversal-and-concatenation-of-complex-line-integrals, cor-ml-estimate-for-complex-line-integrals, prop-linearity-of-complex-line-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Tang-Kai Lee, Complex Analysis Notes, Section 2.1.2"
      url: "https://www.math.columbia.edu/~leetk/TA/CA25-file/Note-CA.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and star-shaped with respect to $a\in U$ in the sense of [[rem-plane-star-shaped-and-convex-dictionary]], and let $f:U\to\mathbb C$ be continuous. Suppose

$$\int_{\partial\Delta[u,v,w]}f(\zeta)\,d\zeta=0$$

for every filled triangle $\Delta[u,v,w]\subseteq U$ in the sense of [[def-oriented-complex-triangle-and-boundary]]. Then

$$F(z)=\int_{\ell_{az}}f(\zeta)\,d\zeta$$

is holomorphic on $U$ and satisfies $F'(z)=f(z)$ for every $z\in U$. Thus $F$ is a primitive of $f$ as defined in [[def-complex-primitive]].

## Facts & Assumptions

**Given:** An open set $U$ star-shaped with respect to $a$, a continuous $f:U\to\mathbb C$, and vanishing boundary integral for every filled triangle contained in $U$.

[L1] Reversal negates a contour integral and concatenation adds contour integrals ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L2] On a piecewise-$C^1$ contour, the complex line integral agrees with the usual parametric integral ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] Complex line integrals are linear in the integrand, and the ML estimate bounds their modulus by a uniform integrand bound times contour length ([[prop-linearity-of-complex-line-integrals]], [[cor-ml-estimate-for-complex-line-integrals]]).

[L4] A primitive of $f$ on an open set is a holomorphic function whose derivative equals $f$ there ([[def-complex-primitive]]).

[L5] A continuous integrand has a complex line integral along every rectifiable contour ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z\in U$. The segment $\ell_{az}$ is rectifiable and $f$ is continuous on it, so $F(z)$ exists by [L5]. Since $U$ is open, choose $\rho>0$ with $B(z,\rho)\subseteq U$. If $0<|h|<\rho$, the short segment from $z$ to $z+h$ lies in that ball, and every segment from $a$ to a point of the short segment lies in $U$ by star-shapedness; hence $\Delta[a,z,z+h]\subseteq U$. [given, L5, choose]

1.2 Parametrizing the short edge by $\zeta=z+th$ and using [L2] gives $\int_{\ell_{z,z+h}}f(z)\,d\zeta=f(z)h$. [L2, algebra]

2.1 The zero boundary integral of that triangle reads $F(z)+\int_{\ell_{z,z+h}}f-F(z+h)=0$ by [L1], and therefore $F(z+h)-F(z)=\int_{\ell_{z,z+h}}f(\zeta)\,d\zeta$. [step 1.1, L1]

3.1 By [L3], steps 2.1 and 1.2 imply $\left|(F(z+h)-F(z))/h-f(z)\right|\le\sup_{0\le t\le1}|f(z+th)-f(z)|$. [step 2.1, step 1.2, L3]

4.1 Continuity of $f$ at $z$ makes the right side of step 3.1 tend to zero as $h\to0$. Thus $F'(z)=f(z)$ for arbitrary $z\in U$, including $z=a$; [L4] says exactly that $F$ is a primitive, and $h=0$ was only the excluded difference-quotient value. [step 3.1, L4] ∎
