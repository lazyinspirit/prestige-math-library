---
id: lem-heat-ball-representation-formula
kind: lemma
title: Heat-ball representation formula
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-exponential-beats-every-polynomial
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-heine-cantor-metric
  - thm-differentiation-under-the-integral-sign
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-countable-choice
  - def-heat-ball-and-its-slices
  - def-parabolic-cylinder-and-parabolic-boundary
  - def-laplacian-of-a-c2-function
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-classical-normal-derivative
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-dominated-convergence
  - thm-clairaut-schwarz-mixed-partials
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
proof_strategy: direct
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
      locator: '§6.3, printed p. 156, Lemma 6.12 and its complete proof (integration by parts in space-time, normal derivative $\partial\Phi/\partial\nu=-\frac{|x-y|}{2(t-s)}\Phi$, normalisation $L_r=1$)'
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.1–5.1.2 (representation formulas for the heat equation)"
---

## Statement

Assume Countable Choice. Let $u$ be of class $C^{2,1}$ on a neighbourhood of the
closed heat ball $E:=E_r(t,x)$ of [[def-heat-ball-and-its-slices]], and put
$f:=u_t-\Delta u$. Then, with $\rho_n$ the slice radius,
$$u(x,t)=\iint_E\bigl(\Gamma(x-y,t-s)-r^{-n}\bigr)f(y,s)\,dy\,ds+\frac{1}{2r^n}\int_{t-r^2/4\pi}^{t}\frac{\rho_n(t-s)}{t-s}\int_{|y-x|=\rho_n(t-s)}u(y,s)\,dS(y)\,ds,$$
all integrals absolutely convergent. For $n=1$, the inner sphere integral is the sum over its two points; endpoint slices are irrelevant to the time integral.

## Facts & Assumptions

**Given:** Countable Choice, a $C^{2,1}$ function $u$ on a neighbourhood of the closed heat ball $E=E_r(t,x)$, and $f=u_t-\Delta u$.

[A1] Countable Choice is the ambient hypothesis; the divergence theorem and the surface integral are stated under $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The heat ball $E_r(t,x)$ is compact, its slice at depth $\tau=t-s$ is $\overline B(x,\rho_n(\tau))=\{|y-x|\le\rho_n(\tau)\}$ for $0<\tau<r^2/(4\pi)$, the level set on which $\Gamma(x-y,t-s)=r^{-n}$ is a $C^\infty$ hypersurface on which $\nabla\Gamma\ne0$, and $\partial E_r(t,x)$ is that level set together with the single top point $(x,t)$ ([[def-heat-ball-and-its-slices]]).

[F2] The heat kernel $\Gamma$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$, solves $\partial_\tau\Gamma=\Delta_x\Gamma$ there, and has unit mass $\int_{\mathbb R^n}\Gamma(x,\tau)\,dx=1$ for every $\tau>0$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]); the Laplacian is that of [[def-laplacian-of-a-c2-function]] and the class $C^{2,1}$ is the cylinder convention of [[def-parabolic-cylinder-and-parabolic-boundary]].

[F3] Divergence theorem: for a bounded domain with a finite piecewise $C^1$ presentation and a $C^1$ field $F$ on its closure, $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]), the surface integral and the outward normal being those of [[def-surface-integral-on-a-compact-c-one-hypersurface]] and [[def-classical-normal-derivative]].

[F4] Dominated convergence ([[thm-dominated-convergence]]).

[F6] Nondegenerate boxes have positive volume and singletons have zero volume ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Smooth bumps exist ([[lem-smooth-bump-between-concentric-euclidean-balls]]); convolution with a smooth compactly supported kernel is smooth ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]). Differentiation under integrals is supplied by [[thm-differentiation-under-the-integral-sign]], and continuity on compact sets is uniform ([[thm-heine-cantor-metric]]).

[F7] Polar measure is finite and gives polar integration ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]); on spheres in dimensions $n\ge2$ it agrees with chart surface measure and scales by $R^{n-1}$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]). Fubini applies to absolutely integrable functions ([[thm-tonelli-and-fubini-for-completed-product-measures]]). Exponential decay dominates polynomial growth ([[thm-exponential-beats-every-polynomial]]).

## Proof

**Given:** Countable Choice, $u\in C^{2,1}$ near $E=E_r(t,x)$, and $f=u_t-\Delta u$. Put $a=r^2/(4\pi)$ and $R(\tau)=\rho_n(\tau)$.

1.1 Choose a bounded neighbourhood $O$ of $E$ whose closure lies in the given neighbourhood of $u$. By [F6], normalize a nonnegative smooth bump supported in the unit ball of $\mathbb R^{n+1}$ to have mass one, and let $u_j$ be its shrinking convolutions with $u\mathbf1_O$. For large $j$ these are smooth near $E$. In the translated integration formula, differentiation with respect to time once or space at most twice differentiates $u$ under a fixed compactly supported integral by [F6]; hence these derivatives of $u_j$ are the corresponding convolutions of the continuous derivatives of $u$. Their uniform convergence on $E$ follows from uniform continuity and the estimate $|g*\eta_j(P)-g(P)|\le\sup_{|h|\le1/j}|g(P-h)-g(P)|$. Thus $u_j\to u$ and $f_j:=(u_j)_t-\Delta u_j\to f$ uniformly on $E$. It suffices to prove the formula for smooth $u$, then pass to the limit using the integrable bounds below. [A1, F6, given]

2.1 For smooth $u$, put $v(y,s)=\Gamma(x-y,t-s)-r^{-n}$ on $s<t$; it is smooth there and satisfies $v_s+\Delta_yv=0$ by [F2]. For $0<\varepsilon<a$, the interior of $E^\varepsilon=E\cap\{s\le t-\varepsilon\}$ is a bounded piecewise smooth domain. The lower tip is regular by [F1], and the cap intersects the lateral surface transversely because its spatial gradient is nonzero there. In spatial-first coordinates the smooth field $F=(u\nabla_yv-v\nabla_yu,uv)$ has $\operatorname{div}F=v(u_s-\Delta_yu)=vf$. Applying [F3] to $E^\varepsilon$ gives the volume integral as the sum of the lateral flux and the top-cap flux. No smoothness of $v$ at $(x,t)$ is used. [step 1.1, F1, F2, F3, given]

3.1 On the lateral level $v=0$ the outward normal is $-\nabla v/|\nabla v|$, so $F\cdot\nu=-u|\nabla_yv|^2/|\nabla v|$. Away from the lower tip use the parametrization $(\tau,\theta)\mapsto(x+R(\tau)\theta,t-\tau)$. Since $RR'=n(\log(a/\tau)-1)$, its chart surface element is $\sqrt{1+R'^2}R^{n-1}d\tau\,d\sigma(\theta)$, by the Gram determinant formula in [F3] and the sphere identification [F7]. Also $|\nabla_yv|=Rr^{-n}/(2\tau)$ and $|\nabla v|=r^{-n}\sqrt{R^2+(RR')^2}/(2\tau)$. Cancelling these factors gives the lateral flux $-\frac1{2r^n}\int_\varepsilon^a\frac{R(\tau)}\tau\int_{|y-x|=R(\tau)}u(y,t-\tau)\,dS(y)\,d\tau$. When $n=1$ the parametrization has two curves and $d\sigma$ is counting measure on $\{-1,1\}$ (each defining polar cone has length one), giving the same formula. The single lower tip has zero chart surface measure and does not affect the flux. [step 2.1, F1, F2, F3, F7, given]

3.2 The cap has outward normal $(0,\ldots,0,1)$, so its flux is $\int_{|y-x|\le R(\varepsilon)}u(y,t-\varepsilon)v(y,t-\varepsilon)\,dy$. Scaling $y-x=\sqrt\varepsilon z$ and $R(\varepsilon)/\sqrt\varepsilon=\sqrt{2n\log(a/\varepsilon)}\to\infty$ shows that the Gaussian mass of the cap tends to one, by [F2] and [F4]. The subtracted mass $r^{-n}|B_1|R(\varepsilon)^n$ tends to zero. Since $v\ge0$, its cap mass is at most one, and uniform continuity of $u$ on the shrinking cap therefore makes the flux tend to $u(x,t)$. [step 2.1, F1, F2, F4, F6, given]

4.1 The volume integrand has an integrable majorant despite the top singularity: $0\le v\le\Gamma$ on $E$ below its top, and $\iint_E\Gamma\,dy\,ds\le\int_0^a1\,d\tau=a$ by [F2] and [F7]. Hence $|vf|\le\|f\|_\infty\Gamma$ is integrable. The absolute lateral integral is at most $\frac{\sigma(S^{n-1})}{2r^n}\|u\|_\infty\int_0^a R(\tau)^n/\tau\,d\tau$. Substituting $\tau=ae^{-q}$ makes this last integral a constant times $\int_0^\infty e^{-nq/2}q^{n/2}\,dq<\infty$; exponential domination [F7] gives integrability at infinity and the integrand is bounded near zero. Thus dominated convergence in the truncated identity from step 2.1, with steps 3.1 and 3.2, yields the stated representation and absolute convergence. [step 2.1, step 3.1, step 3.2, F2, F4, F7, given]

5.1 Apply the smooth formula of step 4.1 to $u_j$ from step 1.1. Uniform convergence of $u_j$ and $f_j$ on $E$, multiplied by the finite volume and lateral weights just proved, passes both right-hand integrals to those for $u$ and the left side to $u(x,t)$. This establishes the formula under precisely the stated $C^{2,1}$ hypothesis. [step 1.1, step 4.1, given] ∎
