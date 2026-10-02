---
id: cor-uniform-boundary-convergence-of-ball-poisson-integrals
kind: corollary
title: Ball Poisson integrals converge uniformly along radial boundary approaches
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, lem-poisson-kernel-boundary-cap-and-complement-estimate, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, thm-heine-cantor-metric]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 49–50, pointwise cap/complement estimate"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34, Theorem 2.13"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed pp. 133–134, Theorem 5.25 cap estimate; radial uniformity is the compact-sphere consequence"
---

## Statement

Assume Countable Choice and $n\ge3$. For $g\in C(\partial B_R(a);\mathbb C)$ let $U_g$ be its ball Poisson integral. Then
$$\sup_{\theta\in S^{n-1}}\bigl|U_g(a+r\theta)-g(a+R\theta)\bigr|\longrightarrow0\qquad(r\uparrow R).$$

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, and a datum $g\in C(\partial B_R(a);\mathbb C)$.

[F1] With $\omega_{g,p}(\delta)=\sup\{|g(y)-g(p)|:y\in\partial B_R(a),\ |y-p|<\delta\}$ and $|x-p|<\delta/2$, $|U_g(x)-g(p)|\le\omega_{g,p}(\delta)+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty(R^2-|x-a|^2)$ ([[lem-poisson-kernel-boundary-cap-and-complement-estimate]]).

[F2] The sphere $\partial B_R(a)$ is compact and nonempty, so continuous real functions on it are bounded and a continuous $g$ on it is uniformly continuous ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]]).

[F3] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F3]. By [F2] the quantity $\lVert g\rVert_\infty=\sup_{\partial B_R(a)}|g|$ is finite and $g$ is uniformly continuous on the sphere: for every $\varepsilon>0$ there is $\delta>0$ with $|g(y)-g(z)|\le\varepsilon$ whenever $y,z\in\partial B_R(a)$ and $|y-z|<\delta$. In particular, for every $p\in\partial B_R(a)$ and every cap radius $\delta$ with this property, $\omega_{g,p}(\delta)=\sup\{|g(y)-g(p)|:|y-p|<\delta\}\le\varepsilon$ by [F1]. [given, F1, F2, F3]

2.1 Fix such an $\varepsilon$ and an associated $\delta>0$, and let $r<R$ with $R-r<\delta/2$. For $p=a+R\theta$ and $x=a+r\theta$ with $\theta\in S^{n-1}$ we have $|x-p|=(R-r)|\theta|=R-r<\delta/2$, so [F1] applies and gives $|U_g(x)-g(p)|\le\varepsilon+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty(R^2-r^2)$. [step 1.1, F1, algebra]

3.1 Choose $r$ additionally so close to $R$ that $2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty(R^2-r^2)\le\varepsilon$; this is possible because $R^2-r^2\to0$ as $r\uparrow R$. Then step 2.1 gives $|U_g(a+r\theta)-g(a+R\theta)|\le2\varepsilon$ for every $\theta\in S^{n-1}$ simultaneously, since neither the bound $\varepsilon$ from [F2] nor the factor $R^2-r^2$ depends on $\theta$. [step 1.1, step 2.1, F2, algebra]

4.1 Taking the supremum over $\theta$ and letting $\varepsilon\downarrow0$ shows $\sup_{\theta}|U_g(a+r\theta)-g(a+R\theta)|\to0$ as $r\uparrow R$, which is the assertion. The estimate used is the pointwise cap/complement bound; the ball Dirichlet solution theorem is not needed for this uniformity statement, and no structure of $U_g$ beyond the integral formula is used. [step 3.1, F1] ∎
