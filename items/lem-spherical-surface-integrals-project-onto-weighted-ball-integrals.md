---
id: lem-spherical-surface-integrals-project-onto-weighted-ball-integrals
kind: lemma
title: "Sphere integrals of a cylindrical function project to weighted ball integrals"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-spherical-mean-of-space-dependent-data, def-surface-integral-on-a-compact-c-one-hypersurface, def-polar-surface-measure-on-the-unit-sphere, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, lem-sphere-and-ball-measures-scale, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, cor-gamma-factorial-values, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-surface-integral-is-independent-of-c-one-boundary-charts, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric]
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
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.4, printed pp. 285–286, computation (9.1.15) (the projection factor, one sheet at a time)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 175: the descent computation behind (7.24)"
---


## Statement

Assume the Axiom of Countable Choice. Let $n\ge1$ and $g\in C^0(\mathbb R^n)$, and let $G(\xi,z):=g(\xi)$ be the extension of $g$ to $\mathbb R^{n+1}$ independent of the last coordinate. For $r>0$ and $x\in\mathbb R^n$, with $S^n_r(x)=\{(\xi,z)\in\mathbb R^{n+1}:|\xi-x|^2+z^2=r^2\}$ the sphere of radius $r$ in $\mathbb R^{n+1}$ and $\omega_n=|S^n|$ its total polar measure ([[def-polar-surface-measure-on-the-unit-sphere]]),
$$\int_{S^n_r(x)}G\,dS=2r\int_{B_r^n(x)}\frac{g(y)}{\sqrt{r^2-|y-x|^2}}\,dy ,$$
and the spherical mean of $G$ over $S^n_r(x)$ equals $\dfrac{2}{\omega_nr^{n-1}}\displaystyle\int_{B_r^n(x)}\dfrac{g(y)}{\sqrt{r^2-|y-x|^2}}dy$. In particular, for even $n=2k$, every $c>0$ and $t>0$, with $W_g$ the weighted ball integral of [[def-spherical-mean-of-space-dependent-data]],
$$t^{n-1}M_G\bigl((x,0),ct\bigr)=\frac{(n-1)!!}{c^{n-1}}\,W_g(x,ct),$$
where $M_G$ is the $(n+1)$-dimensional spherical mean of $G$ with centre $(x,0)$. The connecting constant identity is $2\,n!!V_n/\omega_n=(n-1)!!$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $g\in C^0(\mathbb R^n)$, the cylindrical extension $G(\xi,z)=g(\xi)$, and $r>0$, $x\in\mathbb R^n$.

[F1] Surface measure is chart-independent; in graph coordinates $(y,h(y))$ its density is $\sqrt{1+|Dh(y)|^2}$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]). On spheres it agrees with polar measure and scales by the appropriate radius power ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F2] Under Countable Choice, $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(s\theta)s^{n-1}\,d\sigma(\theta)\,ds$ for every Borel $f:\mathbb R^n\to[0,\infty]$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] $|\partial B_r^m|=\omega_{m-1}r^{m-1}$ and $|B_r^m|=\omega_{m-1}r^m/m$, so in particular $|S^n_r(x)|=\omega_nr^n$ for the sphere in $\mathbb R^{n+1}$ and $\omega_m=(m+1)V_{m+1}$ for the unit sphere $S^m$ ([[lem-sphere-and-ball-measures-scale]]).

[F4] $V_m=\pi^{m/2}/\Gamma(m/2+1)$ for every $m\ge1$ ([[cor-volume-of-the-unit-n-ball]]).

[F5] $\Gamma(s+1)=s\Gamma(s)$ for $s>0$ with $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]); $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]); $\Gamma(m+1)=m!$ for every integer $m\ge0$ ([[cor-gamma-factorial-values]]).

## Proof

1.1 Graph sheets. The upper and lower open hemispheres of $S_r^n(x)$ are the graphs $y\mapsto(y,\pm\sqrt{r^2-|y-x|^2})$ over $B_r^n(x)$. Their graph density is $\sqrt{1+|y-x|^2/(r^2-|y-x|^2)}=r/\sqrt{r^2-|y-x|^2}$ by [F1]. The equator has zero surface measure: near each of its points choose a sphere graph omitting a nonzero one of the first $n$ coordinates. Its parameter set for the equator lies in the coordinate hyperplane $z=0$, which has Lebesgue measure zero (for $n=1$, it is a singleton, null because it lies in intervals of arbitrarily small length); [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] applied to its indicator proves nullity, and the continuous graph density preserves it. A finite chart cover suffices by compactness of the sphere ([[cor-euclidean-closed-balls-and-spheres-are-compact]]). [F1, algebra]


1.2 Integrating the two sheets gives $\int_{S_r^n(x)}G\,dS=2r\int_{B_r^n(x)}g(y)(r^2-|y-x|^2)^{-1/2}\,dy$. These integrals are absolutely convergent: $g$ is bounded on the closed ball by [[thm-extreme-value-metric]], and [F2] reduces the weight integral to $\omega_{n-1}\int_0^rs^{n-1}(r^2-s^2)^{-1/2}ds$, bounded by $\omega_{n-1}r^{n-1}\int_0^r(r^2-s^2)^{-1/2}ds=\omega_{n-1}r^{n-1}\pi/2$. Thus the graph computation applies separately to positive and negative parts. [F1, F2, algebra]


1.3 The mean. By [F3], $|S^n_r(x)|=\omega_nr^n$, so the spherical mean of $G$ over $S^n_r(x)$ is $\omega_n^{-1}r^{-n}\int_{S^n_r(x)}G\,dS=\frac{2}{\omega_nr^{n-1}}\int_{B_r(x)}\frac{g(y)}{\sqrt{r^2-|y-x|^2}}dy$. [F3, algebra]

1.4 The even-dimensional form. Let $n=2k$ be even, $c>0$, $t>0$ and $r=ct$. Substituting $r=ct$ in the mean identity, $t^{n-1}M_G((x,0),ct)=\frac{2}{\omega_nc^{n-1}}\int_{B_{ct}(x)}\frac{g(y)}{\sqrt{c^2t^2-|y-x|^2}}dy=\frac{2n!!V_n}{\omega_nc^{n-1}}W_g(x,ct)$ by the definition of $W_g$. For the constant: $V_n=\pi^{n/2}/\Gamma(k+1)=\pi^k/k!$ by [F4]; the functional equation and $\Gamma(1/2)=\sqrt\pi$ give by induction $\Gamma(k+1/2)=\frac{(2k-1)(2k-3)\cdots1}{2^k}\sqrt\pi=\frac{(2k)!\sqrt\pi}{4^kk!}$, so with $\omega_n=|S^n|=(n+1)V_{n+1}=\frac{2\pi^{k+1/2}}{\Gamma(k+1/2)}=\frac{2^{2k+1}\pi^kk!}{(2k)!}$ one gets $2n!!V_n=2\cdot2^kk!\cdot\pi^k/k!=2^{k+1}\pi^k$ and $\frac{2n!!V_n}{\omega_n}=\frac{2^{k+1}\pi^k(2k)!}{2^{2k+1}\pi^kk!}=\frac{(2k)!}{2^kk!}=(2k-1)!!=(n-1)!!$. [F3, F4, F5, algebra]

2.1 Substituting the constant gives $t^{n-1}M_G((x,0),ct)=\frac{(n-1)!!}{c^{n-1}}W_g(x,ct)$, which together with the two integral identities proves all assertions. [algebra] ∎ 