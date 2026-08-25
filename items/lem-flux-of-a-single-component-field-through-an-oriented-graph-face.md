---
id: lem-flux-of-a-single-component-field-through-an-oriented-graph-face
kind: lemma
title: "The flux of a single-component field through a graph face is a base integral of its trace"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-simple-solid-region-in-a-coordinate-direction, lem-change-of-variables-with-a-degenerate-parameter-boundary, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, lem-riemann-integral-unchanged-by-content-zero-modification, thm-jordan-boundary-criterion, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-euclidean-inner-product, def-riemann-integral-over-a-jordan-set, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $(k,D,\gamma_1,\gamma_2)$ be a simple description of a solid $E$ in the direction $k$ and let $\Sigma$ be a boundary presentation adapted to it, with sublists $\Sigma^+,\Sigma^-,\Sigma^0$ ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]). Let $R:E\to\mathbb R$ be continuous and let $Re_k$ be the field on $E$ whose $k$th coordinate is $R$ and whose other two coordinates are zero. For $j\in\Sigma^+\cup\Sigma^-$ put $\psi_j:=\pi_k\circ\varphi_j$ and $V_j:=\psi_j[D_j^\circ]$, and write $\sigma_k^{-1}(w,t)$ for the point of $\mathbb R^3$ with $\pi_k$-projection $w$ and $k$th coordinate $t$.

Then each $V_j$ is a bounded open Jordan measurable subset of $D$, the displayed base integrand is integrable over $V_j$, and the flux of $Re_k$ through an upper face is the integral of the trace of $R$ on the upper graph over the projected image, and through a lower face it is the negative of the corresponding integral:

$$\int_{D_j}\bigl\langle Re_k(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\bigr\rangle=\int_{V_j}R\bigl(\sigma_k^{-1}(w,\gamma_2(w))\bigr)\,dw\qquad(j\in\Sigma^+),$$

$$\int_{D_j}\bigl\langle Re_k(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\bigr\rangle=-\int_{V_j}R\bigl(\sigma_k^{-1}(w,\gamma_1(w))\bigr)\,dw\qquad(j\in\Sigma^-).$$

## Facts & Assumptions

**Given:** The simple description $(k,D,\gamma_1,\gamma_2)$ of $E$, the adapted presentation $\Sigma$ with its supplied sublists, the continuous $R:E\to\mathbb R$, and an index $j$ in $\Sigma^+$ or in $\Sigma^-$.

[F1] For a regular patch $(D',\varphi)$ and a continuous vector field $F$, the flux in the orientation induced by $\varphi$ is $\int_{D'}(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F2] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and the standard unit vector $e_k$ has $k$th coordinate $1$ and the others $0$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[F3] A simple solid region in the direction $k$ is $E=\{p\in\mathbb R^3:\pi_k(p)\in D,\ \gamma_1(\pi_k(p))\le p_k\le\gamma_2(\pi_k(p))\}$, with $\pi_k$ the cyclic coordinate projection and $\gamma_1,\gamma_2$ continuous on the compact Jordan base $D$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F4] For $j\in\Sigma^+$ the image of $\varphi_j$ lies in the graph of $\gamma_2$ and the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ is positive on the interior of $D_j$; for $j\in\Sigma^-$ the image lies in the graph of $\gamma_1$ and that coordinate is negative on the interior of $D_j$ ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F5] A regular patch has a compact Jordan parameter region that is the closure of its nonempty interior, its parametrization is $C^1$ on an open neighbourhood of that region, and no point of $D^\circ$ has the same image as a distinct point of $D$ ([[def-admissible-regular-parametrized-surface-patch]]).

[F6] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] For a $C^1$ map $\varphi$ of two variables into $\mathbb R^3$, $(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$ for each of the three coordinate directions ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

[L2] Let $\psi$ be $C^1$ on an open $W\supseteq D'$ with $D'$ compact Jordan, and suppose $\psi$ is injective on the interior of $D'$ and has nonvanishing Jacobian determinant there. Then $\psi[D'^\circ]$ is bounded, open and Jordan measurable, and for continuous $h$ on $\psi[D']$, $\int_{D'}h(\psi(w))\lvert\det D\psi(w)\rvert\,dw=\int_{\psi[D'^\circ]}h$ ([[lem-change-of-variables-with-a-degenerate-parameter-boundary]]).

[L3] Let $E'$ be bounded Jordan measurable and let $f,g:E'\to\mathbb R$ be bounded with $\{x\in E':f(x)\ne g(x)\}$ of content zero. Then $f$ is integrable over $E'$ if and only if $g$ is, and their integrals then agree ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

[L4] A metric-bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[L5] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] the inner product of $Re_k(p)$ with any vector $\nu$ is $R(p)\nu_k$, so by [F1] the flux integrand of $Re_k$ through the patch $(D_j,\varphi_j)$ is $w\mapsto R(\varphi_j(w))\,(\varphi_{j,u}\times\varphi_{j,v})_k(w)$ on $D_j$. [given, F1, F2]

1.2 Suppose $j\in\Sigma^+$ and put $h(w):=R\bigl(\sigma_k^{-1}(w,\gamma_2(w))\bigr)$ for $w\in D$; by [F3] the point $\sigma_k^{-1}(w,\gamma_2(w))$ lies in $E$ and $h$ is continuous on $D$, being $R$ composed with a continuous map. By [F4] the image of $\varphi_j$ lies in the graph of $\gamma_2$, so for $w\in D_j$ the point $\varphi_j(w)$ has $\pi_k$-projection $\psi_j(w)\in D$ and $k$th coordinate $\gamma_2(\psi_j(w))$; hence $\varphi_j(w)=\sigma_k^{-1}\bigl(\psi_j(w),\gamma_2(\psi_j(w))\bigr)$ and $R(\varphi_j(w))=h(\psi_j(w))$. For $j\in\Sigma^-$ the same computation with $\gamma_1$ in place of $\gamma_2$ defines a continuous $h$ on $D$ with $R(\varphi_j(w))=h(\psi_j(w))$. [given, F3, F4]

2.1 By [L1] the factor $(\varphi_{j,u}\times\varphi_{j,v})_k$ in step 1.1 is $\det D\psi_j$, so the flux integrand is $w\mapsto R(\varphi_j(w))\det D\psi_j(w)$. The map $\psi_j$ is $C^1$ on an open neighbourhood of $D_j$ by [F5], since $\varphi_j$ is and $\pi_k$ is linear. [step 1.1, L1, F5]

2.2 The map $\psi_j$ is injective on $D_j^\circ$. Indeed let $a,b\in D_j^\circ$ with $\psi_j(a)=\psi_j(b)$. By step 1.2 both $\varphi_j(a)$ and $\varphi_j(b)$ are determined by their common $\pi_k$-projection through the same graph function, so $\varphi_j(a)=\varphi_j(b)$; by [F5] no point of $D_j^\circ$ shares its image with a distinct point of $D_j$, so $a=b$. [step 1.2, F5]

3.1 By [F4] and step 2.1, $\det D\psi_j$ is positive on $D_j^\circ$ when $j\in\Sigma^+$ and negative there when $j\in\Sigma^-$; in either case it is nonvanishing on $D_j^\circ$. [step 2.1, F4]

4.1 By [F5] the parameter region $D_j$ is compact and Jordan measurable, so steps 2.2 and 3.1 put the data $(\psi_j,D_j)$ under the hypotheses of [L2]. Hence $V_j=\psi_j[D_j^\circ]$ is bounded, open and Jordan measurable, it is contained in $D$ by step 1.2, and with the continuous $h$ of step 1.2 $$\int_{D_j}h(\psi_j(w))\,\lvert\det D\psi_j(w)\rvert\,dw=\int_{V_j}h.$$ Both sides exist, the left by [L5] on the compact Jordan $D_j$ and the right as part of [L2], with integrals read as in [F6]. [step 2.2, step 3.1, L2, L5, F5, F6]

5.1 On $D_j^\circ$ the two functions $\lvert\det D\psi_j\rvert$ and $\varepsilon_j\det D\psi_j$ coincide, where $\varepsilon_j=+1$ for $j\in\Sigma^+$ and $\varepsilon_j=-1$ for $j\in\Sigma^-$, by step 3.1. They can differ only on $\partial D_j$, which has content zero by [F5] and [L4]; both are continuous on the compact Jordan $D_j$, hence bounded and integrable by [L5], so multiplying each by the bounded continuous $h\circ\psi_j$ and applying [L3] on $D_j$ gives $$\int_{D_j}h(\psi_j)\,\lvert\det D\psi_j\rvert=\varepsilon_j\int_{D_j}h(\psi_j)\,\det D\psi_j.$$ [step 4.1, L3, L4, L5, F5]

6.1 Let $j\in\Sigma^+$, so $\varepsilon_j=+1$. Combining steps 1.1, 1.2 and 2.1 the flux integral is $\int_{D_j}h(\psi_j)\det D\psi_j$, which by step 5.1 equals $\int_{D_j}h(\psi_j)\lvert\det D\psi_j\rvert$ and by step 4.1 equals $\int_{V_j}h=\int_{V_j}R(\sigma_k^{-1}(w,\gamma_2(w)))\,dw$. That is the first asserted identity. [step 1.1, step 1.2, step 2.1, step 4.1, step 5.1]

7.1 Let $j\in\Sigma^-$, so $\varepsilon_j=-1$ and $h(w)=R(\sigma_k^{-1}(w,\gamma_1(w)))$. Steps 1.1, 1.2 and 2.1 again make the flux integral $\int_{D_j}h(\psi_j)\det D\psi_j$, and step 5.1 now reads $\int_{D_j}h(\psi_j)\lvert\det D\psi_j\rvert=-\int_{D_j}h(\psi_j)\det D\psi_j$, so the flux integral is $-\int_{D_j}h(\psi_j)\lvert\det D\psi_j\rvert$, which by step 4.1 is $-\int_{V_j}R(\sigma_k^{-1}(w,\gamma_1(w)))\,dw$. This is the second asserted identity, and the sign comes from that replacement of the absolute determinant and from nothing else. [step 1.1, step 1.2, step 2.1, step 4.1, step 5.1] ∎

## Remarks

- **Injectivity of the projection is forced, not assumed.** Step 2.2 uses only that the patch image lies in a graph over the base: two interior parameter points with the same projection are then carried to the same point of $\mathbb R^3$, which the patch definition forbids. Nothing in the adapted-presentation conditions had to say it.

- **Where the absolute value is paid for.** Change of variables produces $\lvert\det D\psi_j\rvert$, while the flux integrand carries $\det D\psi_j$ with its sign. Step 5.1 is the whole difference between the two faces of a solid: the upper one contributes with a plus sign and the lower one with a minus, and that is what makes the two contributions add to an increment of $R$ across the solid rather than cancel.
