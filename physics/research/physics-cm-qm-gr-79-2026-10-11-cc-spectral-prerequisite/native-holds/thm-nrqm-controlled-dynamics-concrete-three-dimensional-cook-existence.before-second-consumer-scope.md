---
id: thm-nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence
aliases: [nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence]
kind: theorem
domain: mathematics
title: "Concrete three-dimensional Cook existence"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-cook-domain-criterion, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, thm-dominated-convergence, lem-schwartz-space-is-dense-in-l-two, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 pp. 253-256 (existence of wave operators for short-range potentials via Cook's criterion)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics III: Scattering Theory, Section XI.3 (short-range potentials and asymptotic completeness; standard treatment of the L^2 class)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^2(\mathbb R^3;\mathbb R)$ be real, let $H_0=-\Delta$ on
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$, and let $H=H_0+M_V$ be the
self-adjoint operator on $D(H_0)$ of
[[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] (c).
Then:

(a) For every Schwartz function $\psi$
$$\int_0^\infty\bigl\|Ve^{-itH_0}\psi\bigr\|_2\,dt<\infty,\qquad \int_{-\infty}^0\bigl\|Ve^{-itH_0}\psi\bigr\|_2\,dt<\infty.$$

(b) Consequently the wave operators
$\Omega_\pm:=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH}e^{-itH_0}$ exist as
bounded linear isometries on $L^2(\mathbb R^3)$ by
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]], with
$\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ and
$H\Omega_\pm\psi=\Omega_\pm H_0\psi$ for $\psi\in D(H_0)$.

(c) *Free absolute continuity.* $H_0$ has purely absolutely continuous
spectrum: for every $\psi\in L^2$ the scalar spectral measure of $H_0$ is
absolutely continuous with respect to Lebesgue measure, with density
$\frac{\sqrt E}{2}\int_{S^2}|\mathcal F_2\psi(\sqrt E\,\Omega)|^2d\sigma(\Omega)$
on $E>0$ (in the sense of the polarization identity for the scalar measures).
Hence $L^2=H_{\mathrm{ac}}(H_0)$.

Assertions about the ranges of $\Omega_\pm$, asymptotic completeness or the
S-matrix are not made here; they are separate theorems
([[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]).

## Facts & Assumptions

**Given:** $V\in L^2(\mathbb R^3;\mathbb R)$; $H_0=-\Delta$; $H=H_0+M_V$;
a Schwartz function $\psi$; $t\in\mathbb R$.

[F1] For $|t|\le1$ the free evolution preserves the $H^2$ norm: $e^{-itH_0}\psi\in D(H_0)$ and $\|H_0e^{-itH_0}\psi\|_2=\|H_0\psi\|_2$; also $\|\Delta(e^{-itH_0}\psi)\|_2=\|H_0\psi\|_2$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]] (c), [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F2] For $|t|\ge1$, $\|e^{-itH_0}\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]] (b)).

[F3] Cook's criterion applies to the pair $(H_0,H)$ with $D=\mathcal S(\mathbb R^3)$: the Schwartz class is dense, $e^{-itH_0}$-invariant, contained in $D(H_0)$, and the integrability hypothesized in (a) is exactly its hypothesis ([[thm-nrqm-controlled-dynamics-cook-domain-criterion]], [[def-schwartz-space-and-its-seminorms]], [[lem-schwartz-space-is-dense-in-l-two]]).

[F4] Polar coordinates and dominated convergence give, for Schwartz $\psi$ and bounded continuous $h$, $\langle h(H_0)\psi,\psi\rangle=\int_0^\infty h(E)\frac{\sqrt E}{2}\Bigl(\int_{S^2}|\mathcal F_2\psi(\sqrt E\,\Omega)|^2d\sigma(\Omega)\Bigr)dE$; the density is finite and locally integrable because $\mathcal F_2\psi$ is Schwartz ([[thm-plancherel]], [[thm-dominated-convergence]]).

## Proof

1.1 [Short-time integrability] For $|t|\le1$, $\|Ve^{-itH_0}\psi\|_2\le\|V\|_2\|e^{-itH_0}\psi\|_\infty$, and by the sup-norm interpolation of [[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] (a) with $R=1$, $\|e^{-itH_0}\psi\|_\infty\le C(\|\psi\|_2+\|H_0\psi\|_2)$ uniformly in $|t|\le1$ by [F1]; hence the integrand is bounded on $[-1,1]$ and its integral is finite. [F1, given, algebra]

2.1 [Long-time integrability] For $|t|\ge1$, [F2] gives $\|Ve^{-itH_0}\psi\|_2\le\|V\|_2(4\pi|t|)^{-3/2}\|\psi\|_1$, which is integrable on $\{|t|\ge1\}$ because $\int_1^\infty t^{-3/2}dt<\infty$; combining with step 1.1 proves (a). [step 1.1, F2, algebra]

3.1 [Norm continuity] $t\mapsto Ve^{-itH_0}\psi$ is norm-continuous: it suffices to show $\|e^{-itH_0}\psi-e^{-isH_0}\psi\|_\infty\to0$ as $t\to s$, and for Schwartz $\psi$ this follows from dominated convergence applied to $|\mathcal F_2\psi(\xi)|\,|e^{-4\pi^2it|\xi|^2}-e^{-4\pi^2is|\xi|^2}|\le2|\mathcal F_2\psi(\xi)|$ with $|\mathcal F_2\psi|\in L^1$. Together with (a), the hypotheses of [F3] are met, so Cook's criterion yields (b). [step 2.1, F3, F4, algebra]

4.1 [Free absolute continuity] For Schwartz $\psi$, [F4] exhibits the scalar spectral measure of $H_0$ as absolutely continuous on $(0,\infty)$ with the displayed density; the point $\{0\}$ is Lebesgue-null and carries at most the value at $E=0$, which is finite for every vector, so the measure is absolutely continuous with respect to Lebesgue measure. For general $\psi\in L^2$ choose Schwartz $\psi_n\to\psi$; then for every Borel $B$ the identity $|\langle E_{H_0}(B)\psi,\psi\rangle-\langle E_{H_0}(B)\psi_n,\psi_n\rangle|\le2\|\psi-\psi_n\|\|\psi\|+\|\psi-\psi_n\|^2$ shows the a.c. property passes to the limit, since a uniform limit of absolutely continuous measures is absolutely continuous; hence $L^2=H_{\mathrm{ac}}(H_0)$. This proves (c). [step 3.1, F4, algebra] ∎
