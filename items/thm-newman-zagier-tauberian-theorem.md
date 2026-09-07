---
id: thm-newman-zagier-tauberian-theorem
title: "Newman zagier tauberian theorem"
kind: theorem
status: draft
origin: pipeline
deps: [lem-newman-damped-contour-estimates, thm-residue-theorem-null-homologous-cycle, thm-dominated-convergence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a71.4, Theorem 1.8 and its complete proof"
      url: https://kskedlaya.org/ant/chap-pnt.html
proof_strategy: direct argument
---

## Statement

Let $f:[0,\infty)\to\mathbb C$ be bounded and locally Lebesgue integrable. If $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$, initially defined for $\operatorname{Re}z>0$, extends holomorphically to an open set containing $\{\operatorname{Re}z\ge0\}$, then
$$\lim_{T\to\infty}\int_0^T f(t)\,dt=g(0).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-newman-damped-contour-estimates]]: Let $f:[0,\infty)\to\mathbb C$ be locally integrable with $|f|\le B$, let $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$ for $\operatorname{Re}z>0$, and $g_T(z)=\int_0^T f(t)e^{-zt}\,dt$. For $R>0,T\ge0$, set $K_R(z)=(1+z^2/R^2)/z$. On the right and left semicircles $C_+,C_-$ of radius R, $\left|\int_{C_+}(g-g_T)e^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R},\qquad\left|\int_{C_-}g_Te^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R}.$ Integrals at the imaginary endpoints are interpreted as improper limits when needed.

[F2] [[thm-residue-theorem-null-homologous-cycle]]: Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$ with pole set $S$, and let $\Gamma$ be admissible for the residue theorem in $\Omega$. Then $\int_\Gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a),$ where only finitely many terms are nonzero.

[F3] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then $f\in L^1(\mu)$, $\int|f_n-f|\,d\mu\longrightarrow0,$ and hence $\int f_n\,d\mu\longrightarrow\int f\,d\mu.$

## Proof

1.1 Choose a bound $B\ge0$ for $|f|$ and fix $R>0$. The finite transform $g_T$ is entire: on compact z-sets its difference quotients and derivatives are dominated by integrable constants times $|f(t)|$ on [0,T]. Compactness of the imaginary segment permits $0<\delta<R$ such that the closed region $\{|z|\le R,\operatorname{Re}z\ge-\delta\}$ and a neighborhood are in the continuation domain. Its positively oriented boundary C has a right semicircle and a left path staying strictly left except at its two endpoints. [F3, given]

2.1 Apply the residue theorem to $(g-g_T)e^{Tz}K_R(z)$ on C. Its sole possible pole is zero, with residue $g(0)-g_T(0)$. Split the contour into the right arc, the g left-path integral, and minus the $g_T$ left-path integral. Deform the last integral to the left semicircle: $g_Te^{Tz}K_R(z)$ is holomorphic in the region between these two left paths, which does not contain zero. [F2, step 1.1]

3.1 After division by $2\pi$, the right-arc and left-semicircle absolute contributions are each at most $B/R$. On the fixed left path the g integrand is bounded independently of T, since the path misses zero, and tends to zero except at the endpoints. Dominated convergence makes that integral tend to zero. This argument applies to every sequence of real T tending to infinity, hence to the full limit. Thus $\limsup_{T\to\infty}|g(0)-g_T(0)|\le2B/R$. [F1, F3, step 2.1]

4.1 The radius R can be arbitrarily large; for each radius only its own positive strip width is needed. Letting R tend to infinity gives $g_T(0)\to g(0)$, which is precisely convergence of the asserted improper integral. If B=0 the assertion is immediate from the same estimates. [step 3.1, algebra] ∎
