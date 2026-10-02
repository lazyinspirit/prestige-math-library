---
id: lem-poisson-kernel-boundary-cap-and-complement-estimate
kind: lemma
title: Cap and complement estimate for the ball Poisson integral
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-surface-integral-on-a-compact-c-one-hypersurface, lem-ball-poisson-kernel-is-positive-and-normalised, lem-euclidean-balls-are-bounded-c-one-domains, lem-sphere-and-ball-measures-scale, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-poisson-kernel-for-a-ball-in-rn]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 49–50, alternative proof of boundary attainment by cap/complement splitting"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34, Theorem 2.13 states pointwise boundary recovery"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed p. 72, Theorem 4.24 states boundary recovery for ball data"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed pp. 133–134, Theorem 5.25 proof"
---

## Statement

Assume Countable Choice and $n\ge3$. Let $g\in C(\partial B_R(a);\mathbb C)$, $p\in\partial B_R(a)$, $\delta>0$, and $x\in B_R(a)$ with $|x-p|<\delta/2$. Write $U_g(x)=\int_{\partial B_R(a)}P_{R,a}(x,y)g(y)\,dS_y$, an absolutely convergent integral under these hypotheses, and $\omega_{g,p}(\delta)=\sup\{|g(y)-g(p)|:y\in\partial B_R(a),\ |y-p|<\delta\}$. Then
$$|U_g(x)-g(p)|\le\omega_{g,p}(\delta)+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty\bigl(R^2-|x-a|^2\bigr).$$
In particular, $U_g(x)\to g(p)$ as $x\to p$ from inside the ball.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, a datum $g\in C(\partial B_R(a);\mathbb C)$, a boundary point $p\in\partial B_R(a)$, a number $\delta>0$ and an interior point $x\in B_R(a)$ with $|x-p|<\delta/2$.

[F1] For $x\in B_R(a)$ and $y\in\partial B_R(a)$ the kernel is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$, it is continuous on $B_R(a)\times\partial B_R(a)$, it is strictly positive, and $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$ ([[thm-poisson-kernel-for-a-ball-in-rn]], [[lem-ball-poisson-kernel-is-positive-and-normalised]]).

[F2] $B_R(a)$ is a bounded $C^1$ domain whose boundary is the sphere $\partial B_R(a)$; thus $\partial B_R(a)$ is a compact embedded $C^1$ hypersurface and the surface integral $\int_{\partial B_R(a)}f\,dS$ is defined for Borel $f$ with finite absolute integral, is additive over a Borel partition and obeys $\bigl|\int f\,dS\bigr|\le\int|f|\,dS$ ([[lem-euclidean-balls-are-bounded-c-one-domains]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F3] $\partial B_R(a)$ is compact and nonempty, so a continuous real function on it is bounded and attains its extrema; hence $\lVert g\rVert_\infty:=\sup_{y\in\partial B_R(a)}|g(y)|$ is finite, and the set defining $\omega_{g,p}(\delta)$ is nonempty because it contains $y=p$ ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-extreme-value-metric]]).

[F4] For $n\ge1$ and $r>0$ one has $|\partial B_r|=\omega_{n-1}r^{n-1}>0$ ([[lem-sphere-and-ball-measures-scale]]).

[F5] For $f,h\in L^1$ the integral is additive, $\int(f+h)=\int f+\int h$, and additive over a Borel partition of the domain ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F6] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F6] and set $\kappa:=R^2-|x-a|^2$, $C:=\{y\in\partial B_R(a):|y-p|<\delta\}$ and $D:=\partial B_R(a)\setminus C$. Since $x$ is interior, $|x-a|<R$ and $\kappa>0$. By [F3] the numbers $\lVert g\rVert_\infty$ and $\omega_{g,p}(\delta)$ are finite, and the integrand $y\mapsto P_{R,a}(x,y)g(y)$ is Borel with $|P_{R,a}(x,y)g(y)|\le\lVert g\rVert_\infty\sup_{z\in\partial B_R(a)}P_{R,a}(x,z)$, a finite bound by [F1] and [F3]; the sphere has finite surface measure by [F4], so $U_g(x)$ is absolutely convergent. [given, F1, F2, F3, F4, F6]

2.1 For $y\in D$ one has $|y-p|\ge\delta$, hence $|x-y|\ge|y-p|-|x-p|>\delta-\delta/2=\delta/2$, so $1/|x-y|^n\le 2^n\delta^{-n}$. [given, step 1.1, algebra]

2.2 The cap carries mass at most one: $C$ is open in $\partial B_R(a)$, hence Borel, $0\le P_{R,a}(x,\cdot)\mathbf 1_C\le P_{R,a}(x,\cdot)$ pointwise by [F1], and the surface integral is monotone by [F2]; therefore $\int_C P_{R,a}(x,\cdot)\,dS\le\int_{\partial B_R(a)}P_{R,a}(x,\cdot)\,dS=1$ by the unit-mass clause of [F1]. [step 1.1, F1, F2, algebra]

2.3 The modulus vanishes at small scales: $g$ is continuous at $p$ on the sphere, so for every $\eta>0$ there is $\delta_0>0$ with $|g(y)-g(p)|<\eta$ whenever $y\in\partial B_R(a)$ and $|y-p|<\delta_0$; the set over which the supremum in $\omega_{g,p}(\delta_0)$ is taken is nonempty by [F3], so $0\le\omega_{g,p}(\delta_0)\le\eta$. [step 1.1, F3]

3.1 Consequently, for every $y\in D$, [F1] and step 2.1 give $P_{R,a}(x,y)=\kappa/(R\omega_{n-1}|x-y|^n)\le\kappa 2^n/(R\omega_{n-1}\delta^n)$, and also $|g(y)-g(p)|\le|g(y)|+|g(p)|\le2\lVert g\rVert_\infty$ by [F3]. [step 1.1, step 2.1, F1, F3, algebra]

4.1 The complement carries little mass: by [F2], [F4] and step 3.1, $\int_D P_{R,a}(x,\cdot)\,dS\le\frac{\kappa 2^n}{R\omega_{n-1}\delta^n}\,|\partial B_R(a)|=\frac{\kappa 2^n}{R\omega_{n-1}\delta^n}\cdot\omega_{n-1}R^{n-1}=2^nR^{n-2}\delta^{-n}\kappa$. [step 3.1, F2, F4, algebra]

5.1 Splitting by [F2] and [F5] and bounding each piece, $|U_g(x)-g(p)|\le\int_C P_{R,a}(x,\cdot)|g-g(p)|\,dS+\int_D P_{R,a}(x,\cdot)|g-g(p)|\,dS\le\omega_{g,p}(\delta)\int_C P_{R,a}(x,\cdot)\,dS+2\lVert g\rVert_\infty\int_D P_{R,a}(x,\cdot)\,dS\le \omega_{g,p}(\delta)+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty\kappa$, which is the displayed estimate. [step 3.1, step 4.1, step 2.2, F1, F2, F5, algebra]

6.1 Therefore $U_g(x)\to g(p)$ as $x\to p$ from inside: given $\eta>0$, choose $\delta_0$ as in step 2.3, keep it fixed and let $x\to p$ with $|x-p|<\delta_0/2$; step 5.1 gives $|U_g(x)-g(p)|\le\eta+2^{n+1}R^{n-2}\delta_0^{-n}\lVert g\rVert_\infty(R^2-|x-a|^2)$, and $R^2-|x-a|^2\to R^2-|p-a|^2=0$ because $|p-a|=R$, so $\limsup_{x\to p}|U_g(x)-g(p)|\le\eta$. [step 5.1, step 2.3, algebra]

7.1 Since $\eta>0$ was arbitrary, the limsup in step 6.1 is zero; thus the displayed estimate holds for all admissible $x,\delta$ and the integral tends to $g(p)$ as $x\to p$ from inside the ball, which proves both assertions of the statement. The argument uses the kernel formula, its positivity and its unit mass, but never the ball Dirichlet solution theorem, so no circularity arises with the later boundary-trace theorems. [step 5.1, step 6.1] ∎
