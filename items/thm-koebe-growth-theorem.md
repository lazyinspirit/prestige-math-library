---
id: thm-koebe-growth-theorem
kind: theorem
title: "Koebe's growth theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalized-univalent-class, thm-koebe-distortion-theorem]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 7.5.8"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Ch. 14"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

If $f\in\mathcal S$ and $|z|=r<1$, then

$$\frac{r}{(1+r)^2}\le |f(z)|\le\frac{r}{(1-r)^2}.$$

## Facts & Assumptions

**Given:** A function $f\in\mathcal S$ and a point $z\in\mathbb D$ with $|z|=r<1$.

[L1] Koebe's distortion theorem gives $$\frac{1-|\zeta|}{(1+|\zeta|)^3}\le |f'(\zeta)| \le\frac{1+|\zeta|}{(1-|\zeta|)^3}\qquad(\zeta\in\mathbb D)$$ for every $f\in\mathcal S$ ([[thm-koebe-distortion-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Write $z=re^{i\theta}$. Since $f(0)=0$, $$f(z)=\int_0^r e^{i\theta}f'(te^{i\theta})\,dt.$$ Therefore $$|f(z)|\le\int_0^r |f'(te^{i\theta})|\,dt.$$ [given, algebra]

1.2 For the lower bound, choose $z_0$ on $|z|=r$ for which $|f(z_0)|$ is minimal. The segment from $0$ to $f(z_0)$ lies in $f(\overline{D(0,r)})$: otherwise its first exit point from $f(D(0,r))$ would be an image of the circle $|z|=r$ having modulus strictly smaller than $|f(z_0)|$. Since $f$ is univalent, this segment has a lift $\gamma$ from $0$ to $z_0$. [given, choose, algebra]

2.1 Applying [L1] inside the integral gives $$|f(z)|\le\int_0^r \frac{1+t}{(1-t)^3}\,dt=\frac{r}{(1-r)^2}.$$ [L1, step 1.1, algebra]

2.2 The image of $\gamma$ is a straight segment, so [L1] gives $$ |f(z_0)|=\int_\gamma |f'(\zeta)|\,|d\zeta| \ge \int_\gamma\frac{1-|\zeta|}{(1+|\zeta|)^3}\,|d\zeta| \ge \int_0^r\frac{1-t}{(1+t)^3}\,dt =\frac{r}{(1+r)^2}. $$ The penultimate inequality follows because $\gamma$ joins radius $0$ to radius $r$, while the integrand is positive and depends only on the radius. [L1, step 1.2, algebra]

3.1 Minimality of $z_0$ now gives $|f(z)|\ge |f(z_0)|\ge r/(1+r)^2$ for every $|z|=r$. Together with step 2.1 this proves both bounds. [step 2.1, step 2.2] ∎
