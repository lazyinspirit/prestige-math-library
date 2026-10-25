---
id: cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume
kind: corollary
title: "The divergence at a point is the limit of outward flux per unit volume"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-divergence-and-curl-of-a-c1-vector-field, thm-multidimensional-integral-properties, thm-jordan-content-and-indicator-integrability, def-riemann-integral-over-a-jordan-set, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-bounded-diameter, def-finite-gluing-of-elementary-solid-regions, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-metric-continuity, def-real-limit, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Lemma 4.1.20"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $O\subseteq\mathbb R^3$ be open, let $F:O\to\mathbb R^3$ be $C^1$ and let $p\in O$. For each $m\in\mathbb N$ let a finite gluing of elementary solid regions be given whose union $E^{(m)}$ satisfies $E^{(m)}\subseteq O$, $p\in E^{(m)}$ and $\operatorname{cont}(E^{(m)})>0$, and suppose $\operatorname{diam}(E^{(m)})\to0$. Then

$$\lim_{m\to\infty}\frac{1}{\operatorname{cont}(E^{(m)})}\iint_{\partial E^{(m)}}\langle F,n\rangle=\operatorname{div}F(p),$$

that is: for every rational $\varepsilon>0$ there is $M$ such that every $m\ge M$ satisfies

$$\left|\frac{1}{\operatorname{cont}(E^{(m)})}\iint_{\partial E^{(m)}}\langle F,n\rangle-\operatorname{div}F(p)\right|<\varepsilon.$$

Positive content is required only so that the quotient is defined; no relation between the content and the diameter is assumed.

## Facts & Assumptions

**Given:** The open $O\subseteq\mathbb R^3$, the $C^1$ field $F$ on $O$, the point $p\in O$, and for each $m$ the finite gluing with union $E^{(m)}\subseteq O$ containing $p$, of positive content, with $\operatorname{diam}(E^{(m)})\to0$.

[F1] The divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$; a $C^1$ map has continuous first partial derivatives, so $\operatorname{div}G$ is continuous ([[def-divergence-and-curl-of-a-c1-vector-field]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] For $f=1$ the zero extension is $1_E$, so $\int_E1=\operatorname{cont}(E)$ ([[def-riemann-integral-over-a-jordan-set]], [[thm-jordan-content-and-indicator-integrability]]).

[F3] For a nonempty bounded $A$ in a metric space, $\operatorname{diam}(A)=\sup\{d(a,b):a,b\in A\}$ ([[def-metric-bounded-diameter]]), the metric on $\mathbb R^3$ being $d(a,b)=\lVert a-b\rVert_2$ ([[def-euclidean-inner-product]]).

[F4] A map between metric spaces is continuous at a point when for every real $\varepsilon>0$ there is a real $\delta>0$ such that points within $\delta$ of it have images within $\varepsilon$ ([[def-metric-continuity]]).

[F5] A sequence of reals converges to $x$ when for every rational $\varepsilon>0$ there is $K$ with $|x_k-x|<\varepsilon$ for all $k\ge K$ ([[def-real-limit]]).

[L1] For a finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

[L2] For a finite gluing, $E$ is compact and Jordan measurable ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]], [[def-finite-gluing-of-elementary-solid-regions]]).

[L3] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$: $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$; if $f\le g$ then $\int f\le\int g$; and $\lvert f\rvert$ is integrable with $\lvert\int f\rvert\le\int\lvert f\rvert$ ([[thm-multidimensional-integral-properties]]).

[L4] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 For each $m$ the set $E^{(m)}$ is compact and Jordan measurable by [L2], and $\operatorname{div}F$ is continuous on $O$ by [F1], hence integrable over $E^{(m)}$ by [L4]. Since $F$ is $C^1$ on the open $O\supseteq E^{(m)}$, [L1] gives $\iint_{\partial E^{(m)}}\langle F,n\rangle=\int_{E^{(m)}}\operatorname{div}F$. [given, F1, L1, L2, L4]

1.2 Let $\varepsilon>0$ be rational. The function $\operatorname{div}F$ is continuous at $p$ by [F1], so [F4] with the real number $\varepsilon/2$ supplies $\delta>0$ such that every $q\in O$ with $\lVert q-p\rVert_2<\delta$ satisfies $\lvert\operatorname{div}F(q)-\operatorname{div}F(p)\rvert<\varepsilon/2$. Since $\operatorname{diam}(E^{(m)})\to0$, there is $M$ with $\operatorname{diam}(E^{(m)})<\delta$ for every $m\ge M$. [given, F1, F3, F4, F5]

2.1 Fix $m\ge M$. Since $p\in E^{(m)}$, every $q\in E^{(m)}$ has $\lVert q-p\rVert_2\le\operatorname{diam}(E^{(m)})<\delta$ by [F3], so step 1.2 bounds $\lvert\operatorname{div}F-\operatorname{div}F(p)\rvert$ by $\varepsilon/2$ on $E^{(m)}$. By [L3] and [F2], $\int_{E^{(m)}}\operatorname{div}F(p)=\operatorname{div}F(p)\operatorname{cont}(E^{(m)})$, and $$\Bigl\lvert\int_{E^{(m)}}\operatorname{div}F-\operatorname{div}F(p)\operatorname{cont}(E^{(m)})\Bigr\rvert=\Bigl\lvert\int_{E^{(m)}}\bigl(\operatorname{div}F-\operatorname{div}F(p)\bigr)\Bigr\rvert\le\int_{E^{(m)}}\frac{\varepsilon}{2}=\frac{\varepsilon}{2}\operatorname{cont}(E^{(m)}).$$ [step 1.1, step 1.2, F2, F3, L3]

3.1 Dividing the estimate of step 2.1 by the positive number $\operatorname{cont}(E^{(m)})$ and substituting step 1.1 gives $$\left\lvert\frac{1}{\operatorname{cont}(E^{(m)})}\iint_{\partial E^{(m)}}\langle F,n\rangle-\operatorname{div}F(p)\right\rvert\le\frac{\varepsilon}{2}<\varepsilon$$ for every $m\ge M$. As $\varepsilon$ was an arbitrary positive rational, [F5] gives the asserted limit. [step 2.1, F5] ∎

## Remarks

- **No shape hypothesis is needed.** The content cancels between the estimate and the quotient, so nothing forces the solids to be balls, cubes or comparable to their diameters. What is needed is that each carries the gluing data, that each contains $p$, and that the diameters vanish.

- **Positive content is a hypothesis about the quotient, not about the estimate.** Step 2.1 holds whatever $\operatorname{cont}(E^{(m)})$ is; step 3.1 divides by it. A solid of content zero would make the left-hand side undefined rather than make the estimate fail.
