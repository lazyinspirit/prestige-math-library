---
id: lem-spherical-means-of-smooth-data-are-smooth
kind: lemma
title: "Smoothness, parity and zero-radius limits of spherical means"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-spherical-mean-of-space-dependent-data, lem-first-moment-of-the-unit-sphere-vanishes, def-surface-integral-on-a-compact-c-one-hypersurface, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-heine-cantor-metric, thm-extreme-value-metric, def-metric-compactness, cor-euclidean-closed-balls-and-spheres-are-compact, cor-mean-value-theorem, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed pp. 173–174, (7.16) and Problems 7.10–7.11 (smoothness and the $r=0$ limits of the means)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.3, printed pp. 284–285, Definition 9.1.1 and Remark 9.1.3(a) (regularity of the means used in the Kirchhoff proof)"
---


## Statement

Assume the Axiom of Countable Choice of [[def-spherical-mean-of-space-dependent-data]]. Let $n\ge1$, $k\ge1$ and $f\in C^k(\mathbb R^n)$, and let $M_f$ be the spherical mean with the convention $M_f(x,0):=f(x)$. Then:
(i) $(x,r)\mapsto M_f(x,r)$ is $C^k$ on $\mathbb R^n\times(0,\infty)$, and every derivative is obtained by differentiating $f$ under the sphere integral: for every multi-index $\alpha$ and every $m\ge0$ with $|\alpha|+m\le k$,
$$D_x^\alpha\partial_r^mM_f(x,r)=\frac{1}{\omega_{n-1}}\int_{S^{n-1}}D_x^\alpha\partial_r^m\bigl[f(x+r\omega)\bigr]\,d\sigma(\omega)\qquad(x\in\mathbb R^n,\ r>0),$$
where $\partial_r^m[f(x+r\omega)]$ is the $m$-th $r$-derivative of the composed function $r\mapsto f(x+r\omega)$.
(ii) $M_f$ extends to a continuous function on $\mathbb R^n\times[0,\infty)$ with $M_f(x,0)=f(x)$, and $\partial_rM_f(x,r)\to0$ as $r\downarrow0$, uniformly for $x$ in compact subsets of $\mathbb R^n$.
(iii) The signed-radius integral $\omega_{n-1}^{-1}\int_{S^{n-1}}f(x+r\omega)\,d\sigma(\omega)$ for $r\in\mathbb R$ is an even $C^k$ extension of $M_f$ to $\mathbb R^n\times\mathbb R$. Its differentiated-integral formula holds also at $r=0$; in particular every available odd-order radial derivative vanishes there.
(iv) $|\partial_rM_f(x,r)|\le\sup_{B_r(x)}|Df|$ for every $x\in\mathbb R^n$ and $r>0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $k\ge1$, $f\in C^k(\mathbb R^n)$, and the spherical mean $M_f$ with $M_f(x,0):=f(x)$.

[F1] The spherical mean is integration against the finite measure $\sigma/\omega_{n-1}$ of total mass one ([[def-spherical-mean-of-space-dependent-data]]).

[F2] The mean value theorem bounds a difference quotient by the corresponding derivative on its segment ([[cor-mean-value-theorem]]). Continuous partial derivatives imply total differentiability ([[thm-continuous-partial-derivatives-imply-total-differentiability]]), so the chain rule applies to $C^1$ data composed with affine maps ([[thm-chain-rule-for-total-derivatives]]).

[F3] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]); Euclidean closed balls are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], in the sense of [[def-metric-compactness]]); a continuous real function on a nonempty compact metric space is bounded and attains its bounds ([[thm-extreme-value-metric]]).

[F4] Under Countable Choice reflection $\omega\mapsto-\omega$ preserves the polar measure, and its first moment vanishes: $\int_{S^{n-1}}\omega\,d\sigma(\omega)=0$ ([[lem-first-moment-of-the-unit-sphere-vanishes]]).

## Proof

1.1 Differentiation, including signed radii. Put $H(x,r):=\omega_{n-1}^{-1}\int_{S^{n-1}}f(x+r\omega)\,d\sigma(\omega)$ for all real $r$. On a bounded parameter neighbourhood, all points $x+r\omega$ lie in a fixed compact ball. For a coordinate parameter $p$ and a continuous derivative integrand $q(p,\omega)$ with continuous $\partial_pq$, [F2] gives $\left|(q(p+h,\omega)-q(p,\omega))/h-\partial_pq(p,\omega)\right|\le\sup_{|s-p|\le|h|,\omega}|\partial_pq(s,\omega)-\partial_pq(p,\omega)|$. Uniform continuity on the compact ball makes this bound tend to zero uniformly in $\omega$; integration against the probability measure [F1] preserves the bound. Iterating through total order $k$ therefore gives every stated derivative under the integral, with continuity again following from the same uniform estimate. This works for $n=1$ as well, since it requires only a finite measure, not positive-dimensional surface charts. [F1, F2, F3, algebra]

1.2 Part (ii), continuity at $r=0$. Let $K\subseteq\mathbb R^n$ be compact and choose $R>0$ with $K\subseteq B_R(0)$; the ball $\overline{B_{R+1}(0)}$ is compact, so by [F3] $f$ is bounded there and uniformly continuous on it. Given $\varepsilon>0$ choose $\delta\in(0,1)$ such that $|f(u)-f(v)|<\varepsilon$ whenever $u,v\in\overline{B_{R+1}(0)}$ and $|u-v|<\delta$. For $x\in K$, $0\le r<\delta$ and $\omega\in S^{n-1}$ one has $x+r\omega\in\overline{B_{R+1}(0)}$ and $|x+r\omega-x|=r<\delta$, so $|M_f(x,r)-f(x)|\le\sup_{\omega}|f(x+r\omega)-f(x)|<\varepsilon$. Hence $M_f(x,r)\to f(x)$ as $r\downarrow0$ uniformly on compact subsets, and the extension by $M_f(\cdot,0)=f$ is continuous because $f$ is. [F3, algebra]

1.3 Part (ii), the derivative limit. By part (i) with $|\alpha|=0$, $m=1$, $\partial_rM_f(x,r)=\omega_{n-1}^{-1}\int_{S^{n-1}}Df(x+r\omega)\cdot\omega\,d\sigma(\omega)$ for $r>0$, so adding and subtracting $Df(x)$ inside the integral gives $\partial_rM_f(x,r)=\omega_{n-1}^{-1}\int_{S^{n-1}}[Df(x+r\omega)-Df(x)]\cdot\omega\,d\sigma(\omega)+\omega_{n-1}^{-1}Df(x)\cdot\int_{S^{n-1}}\omega\,d\sigma(\omega)$, where the second term vanishes by [F4]; the first is bounded by $\sup_{\omega\in S^{n-1}}|Df(x+r\omega)-Df(x)|$, which tends to $0$ as $r\downarrow0$ uniformly for $x$ in a fixed compact set by uniform continuity of the continuous function $Df$ on a large compact ball, again by [F3]. Hence $\partial_rM_f(x,r)\to0$ uniformly on compact subsets of $\mathbb R^n$. [F3, F4, algebra]

2.1 Parity and the bound. Reflection preserves $\sigma$ by [F4], hence the substitution $\omega\mapsto-\omega$ gives $H(x,-r)=H(x,r)$. Since $H$ is $C^k$ by step 1.1, its odd-order radial derivatives at zero vanish whenever their orders are at most $k$. For (iv), $|\partial_rM_f(x,r)|\le\omega_{n-1}^{-1}\int|Df(x+r\omega)|\,d\sigma(\omega)$. By continuity, each boundary value of $|Df|$ is at most $\sup_{B_r(x)}|Df|$, and integration gives the stated bound. [F1, F3, F4, step 1.1, algebra]

3.1 Thus $M_f$ has the differentiated-integral formula, the stated uniform zero-radius limits and gradient bound, and an even $C^k$ signed-radius extension. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
