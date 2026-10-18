---
id: lem-bem-exterior-energy-trace-bound
kind: lemma
title: Exterior finite-energy functions have a trace controlled by their gradient
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, lem-bem-lipschitz-trace-and-lifting, thm-poincare-wirtinger-on-bounded-connected-extension-domains, thm-tonelli-and-fubini-for-completed-product-measures, def-countable-choice, def-axiom-of-choice, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-na-lipschitz-scalar-h1-h2-extension, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, prop-mollifier-families-are-l-one-approximate-identities, lem-weak-leibniz-rule-with-a-smooth-factor, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-sobolev-spaces-are-banach-spaces, thm-acl-characterisation-of-w-one-p]
justified_by: []
proof_strategy: direct
axiom_use: The Axiom of Choice is used by Poincare–Wirtinger; Countable Choice is used for polar-coordinate slicing and integration.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 614–616: exterior trace estimates and homogeneous energy spaces on Lipschitz domains."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 3 §§3.1–3.3, printed pp. 40–46: exterior energy spaces and weak traces."
---

## Statement

Assume the Axiom of Choice and Countable Choice. For the connected exterior domain $\Omega^+$ of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], let
$$E^+(\Omega^+)=\{u\in H^1_{\mathrm{loc}}(\Omega^+):u\in L^6(\Omega^+),\ \nabla u\in L^2(\Omega^+)\}.$$
There is a constant $C$ depending only on $\Omega^-$ and its fixed trace atlas such that every $u\in E^+(\Omega^+)$ has $\gamma^+u\in H^{1/2}(\Gamma)$ and
$$\|\gamma^+u\|_{H^{1/2}(\Gamma)}\le C\|\nabla u\|_{L^2(\Omega^+)}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, a bounded connected Lipschitz polyhedron $\Omega^-$, and $u\in E^+(\Omega^+)$. Choose $R$ so large that $\overline{\Omega^-}\subset B_{R/4}$ and set $A=\Omega^+\cap B_R$.

[A1] The Axiom of Choice is assumed through Poincare–Wirtinger and Countable Choice through polar slicing ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Poincare–Wirtinger controls the mean-zero part of an H1 function on a bounded connected extension domain ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]]).

[F2] The trace theorem bounds the H1/2 trace on $\Gamma$ by the H1 norm in a bounded exterior collar ([[lem-bem-lipschitz-trace-and-lifting]]).

[F3] Tonelli/Fubini applies after the actual polar measure formula in [F90], including to nonnegative squared Sobolev derivatives. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F4] The already assumed AC supplies bounded $H^1$ extension on every bounded Lipschitz domain, connected or not, by [[lem-na-lipschitz-scalar-h1-h2-extension]]. After a bounded-support cutoff, approximate identities converge in $L^2$ for the extension and each first derivative, and convolution commutes with those derivatives. Thus ambient smooth restrictions are $H^1$ dense on bounded annuli. ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F5] A one-dimensional $H^1$ class on a bounded interval has an absolutely continuous representative with its weak derivative as derivative, and that representative obeys the fundamental theorem; AC supplies the CC/DC hypotheses of the cited theorem. The one-dimensional Sobolev-to-AC identification is the $n=1$ ACL characterization; completeness is the Sobolev Banach theorem. ([[thm-acl-characterisation-of-w-one-p]]) ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-sobolev-spaces-are-banach-spaces]])

## Proof

1.1 We justify the Sobolev slices. On each bounded spherical shell $a<|x|<b$ with $R/2<a<R<b$, $u$ belongs to $H^1$: bounded volume and $L^6$ give $L^2$, and its weak gradient is already $L^2$. Use [F4] to approximate it by ambient smooth $u_m$ in $H^1$ on a slightly larger shell. The polar formula [F90] and $a^2\le r^2\le b^2$ bound $\int_{S^2}\|u_m(r\omega)-u_l(r\omega)\|_{H^1(a,b)}^2d\sigma(\omega)$ by $C\|u_m-u_l\|_{H^1}^2$, because the radial derivative of a smooth approximant is $\omega\cdot\nabla u_m$. Take a subsequence with summable successive $H^1$ errors; Cauchy–Schwarz on the finite angular measure and Tonelli show that the successive slice norms are summable for almost every $\omega$. Completeness [F5] gives an $H^1(a,b)$ slice limit, identified by the polar $L^2$ limit with $u(r\omega)$ and derivative $\omega\cdot\nabla u(r\omega)$. Countably many overlapping shells exhaust $r>R/2$, so their representatives agree on overlaps off one angular null set; their values at $R$ define the usual trace, since the one-dimensional $H^1$ endpoint estimate passes smooth approximants to that value. By [F5] the slices are locally absolutely continuous. [A1, F3, F4, F5, F90, given, construct]


2.1 For almost every direction $\omega\in S^2$, the radial slice $r\mapsto u(r\omega)$ is locally H1 for $r\ge R$, and $\int_R^\infty|u(r\omega)|^6r^2dr<\infty$. Thus there is a sequence $r_m\to\infty$ with $u(r_m\omega)\to0$. For each such direction the radial derivative is square integrable with weight $r^2$; the one-dimensional fundamental theorem on $[R,r_m]$ and Cauchy–Schwarz give $|u(R\omega)|^2\le\left(\int_R^\infty|\partial_ru(r\omega)|^2r^2dr\right)\left(\int_R^\infty r^{-2}dr\right)=R^{-1}\int_R^\infty|\partial_ru(r\omega)|^2r^2dr.$ Integrating over $S^2$ by [F3,F90] yields $\|u\|_{L^2(\partial B_R)}\le R^{1/2}\|\nabla u\|_{L^2(\Omega^+\setminus B_R)}$. [A1, F3, F5, F90, step 1.1, given, choose]


3.1 The bounded annular domain $A=\Omega^+\cap B_R$ is Lipschitz: its boundary components are the original Lipschitz $\Gamma$ and the separated smooth sphere. Hence [F4] gives the exact extension-domain property required by [F1]. It is connected: for any point inside $B_{R/2}$, path-connectivity of the unbounded open set $\Omega^+$ gives a path to a point outside $B_{R/2}$; stopping at the first crossing of $\partial B_{R/2}$ keeps the path in $A$. The sphere $\partial B_{R/2}$ lies wholly in $A$ and is connected, and the outer shell $R/2<|x|<R$ is connected, so all points of $A$ join within $A$. Put $m=|A|^{-1}\int_Au$. By [F1], $\|u-m\|_{L^2(A)}\le C\|\nabla u\|_{L^2(A)}$. A direct one-dimensional trace estimate in the radial collar $R-\delta<|x|<R$ gives $\|u-m\|_{L^2(\partial B_R)}\le C\|u-m\|_{H^1(A)}\le C\|\nabla u\|_{L^2(A)}$: for each ray apply $|w(R)|^2\le C_\delta\int_{R-\delta}^R(|w(r)|^2+|w'(r)|^2)dr$ to $w(r)=u(r\omega)-m$, then integrate using that $r^2$ is comparable to $R^2$ on the collar. Hence $|m||\partial B_R|^{1/2}\le\|u\|_{L^2(\partial B_R)}+\|u-m\|_{L^2(\partial B_R)}\le C\|\nabla u\|_{L^2(\Omega^+)}$ by step 2.1. It follows that $\|u\|_{H^1(A)}\le C\|\nabla u\|_{L^2(\Omega^+)}$. [A1, F1, F4, F5, step 1.1, step 2.1, given, algebra]


4.1 The annular estimate of step 3.1 controls the H1 norm on an exterior collar of $\Gamma$. Apply [F2] to obtain $\|\gamma^+u\|_{H^{1/2}(\Gamma)}\le C\|u\|_{H^1(A)}\le C\|\nabla u\|_{L^2(\Omega^+)}$. [F2, step 3.1, given, algebra] ∎

