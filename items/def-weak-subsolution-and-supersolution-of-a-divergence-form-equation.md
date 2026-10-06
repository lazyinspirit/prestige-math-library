---
id: def-weak-subsolution-and-supersolution-of-a-divergence-form-equation
kind: definition
title: "Weak subsolutions and supersolutions of a divergence-form equation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-local-weak-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-locally-integrable-function-as-a-regular-distribution, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-kernel-of-the-trace-is-w-one-p-zero, def-bounded-c-k-domain-and-boundary-charts, thm-meyers-serrin-density-on-an-arbitrary-open-set, lem-elliptic-form-is-well-defined-and-bounded, def-h-minus-one-as-the-dual-of-h-one-zero, cor-sobolev-inequality-for-w-one-p-zero, thm-critical-sobolev-embedding-into-every-finite-lq, thm-holder-inequality-for-integrals, def-countable-choice, def-axiom-of-choice, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, lem-compact-support-zero-extension-in-wkp, thm-local-smooth-approximation-in-wkp, thm-dominated-convergence, thm-chebyshev-markov-inequality-for-the-integral]
justified_by: [lem-positive-part-of-a-zero-trace-function-has-zero-trace]
forward_refs: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, printed pp. 147-158: the weak formulation of Lu <= 0, the boundary conventions (i)-(iv) and Theorem 4 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 10, Section 1 (Theorem 10.1, Lemma 10.2 and the boundary convention), printed pp. 223-232 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019; complete 185-page lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter 2, Sections II.1-II.2 (Definitions II.1.1 and II.1.3, Theorem II.2.1 and the c-sign theorem), printed pp. 40-49 (read in full)"
---

## Definition

Assume Countable Choice and the Axiom of Choice for the Sobolev, trace and embedding interfaces below. Let $n\ge1$, let $\Omega\subset\mathbb R^n$ be open, and let $L$ and its sesquilinear form $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant $\theta$ and coefficient bounds $M_a,M_b,M_c$. For the order comparison below, take real coefficients and a real-valued source $f\in L^1_{\mathrm{loc}}(\Omega)$ ([[def-locally-integrable-function-as-a-regular-distribution]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

A real class $u\in H^1(\Omega;\mathbb R)$ ([[def-hk-and-hk-zero-notation]]) is a **local weak subsolution** of $Lu=f$ on $\Omega$ if
$$a(u,\varphi)\le\int_\Omega f\varphi\,dx\qquad\text{for every nonnegative }\varphi\in C_c^\infty(\Omega;\mathbb R),$$
and a **local weak supersolution** if the reverse inequality holds; it is a **local weak solution** if equality holds for every real $\varphi\in C_c^\infty(\Omega)$. These tests make every pairing finite for $f\in L^1_{\mathrm{loc}}$.

**Global Sobolev-test version.** If the source defines a continuous functional $F\in H^{-1}(\Omega):=(H^1_0(\Omega))^*$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]), then a real $u\in H^1(\Omega)$ is a global weak subsolution if
$$a(u,v)\le F(v)\qquad\text{for every nonnegative }v\in H^1_0(\Omega),$$
with the reverse inequality defining a global weak supersolution and equality defining a global weak solution. The local and global formulations agree when both apply, by continuity of the form and $F$ and the following positive-cone density argument. Given $0\le v\in H^1_0$, choose real $z_j\in C_c^\infty(\Omega)$ converging to $v$ in $H^1$ and a subsequence converging a.e.; such a subsequence follows by choosing $\|z_j-v\|_2^2\le2^{-3j}$ and applying Chebyshev and countable subadditivity to $\{|z_j-v|>2^{-j}\}$. The positive-part chain rule gives $Dz_j^+-Dv=\mathbf1_{\{z_j>0\}}(Dz_j-Dv)+(\mathbf1_{\{z_j>0\}}-\mathbf1_{\{v>0\}})Dv$. The second term tends to zero in $L^2$ by dominated convergence, since its indicator converges where $v>0$ and $Dv=0$ a.e. where $v=0$; the first term and the function difference converge in $L^2$. Thus $z_j^+\to v$ in $H^1$. Each $z_j^+$ has compact support, so zero extension followed by nonnegative unit-mass mollification with sufficiently small radius gives a nonnegative $C_c^\infty(\Omega)$ approximant within $1/j$ in $H^1$ ([[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]], [[lem-compact-support-zero-extension-in-wkp]], [[thm-local-smooth-approximation-in-wkp]], [[thm-dominated-convergence]], [[thm-chebyshev-markov-inequality-for-the-integral]]). In particular, $f\in L^2(\Omega)$ suffices by Cauchy--Schwarz and $H^1_0\hookrightarrow L^2$; on a bounded $C^1$ domain, $f\in L^q(\Omega)$ with $q>n/2$ for $n\ge3$ (or $q>1$ for $n=2$) suffices because $q'$ lies in the Sobolev range $H^1_0\hookrightarrow L^{q'}$ ([[cor-sobolev-inequality-for-w-one-p-zero]], [[thm-critical-sobolev-embedding-into-every-finite-lq]], [[thm-holder-inequality-for-integrals]]). If $f\in L^2_{\mathrm{loc}}(\Omega)$, the local inequality also extends to nonnegative $H^1_0(U)$ tests on any bounded open $U\Subset\Omega$, since $f|_U\in L^2(U)$.

For complex-valued coefficients or classes, only the weak-solution identity with a specified continuous complex source functional is used; no subsolution or supersolution order is defined by comparing complex numbers. In the real setting, a weak solution is both a subsolution and a supersolution exactly when the same source functional is used in both inequalities.

**Signed essential extrema.** For a real measurable class on a positive-measure set $E$, write $\operatorname{ess\,sup}_E u:=\inf\{t\in\mathbb R:u\le t\text{ a.e. on }E\}$ in the extended reals, and $\operatorname{ess\,inf}_E u:=-\operatorname{ess\,sup}_E(-u)$. A finite essential supremum $s$ is itself an a.e. upper bound: take the union of the null exceptional sets for the bounds $s+1/j$. These signed extrema differ from the essential supremum of $|u|$ used to define the $L^\infty$ norm. For a continuous representative on an open set, its pointwise and essential extrema agree, since a strict violation of an essential bound would hold on a nonempty open set of positive measure.

**Weak boundary order (for $n\ge2$).** Let in addition $n\ge2$ and let $\Omega$ be a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]) with trace operator $T$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). For real $u,v\in H^1(\Omega)$ and $k\in\mathbb R$ one writes $u\le k$ on $\partial\Omega$ if $(u-k)^+\in H^1_0(\Omega)$, and $u\le v$ on $\partial\Omega$ if $(u-v)^+\in H^1_0(\Omega)$; by [[thm-kernel-of-the-trace-is-w-one-p-zero]] these are respectively the statements $Tu\le k$ and $Tu\le Tv$ a.e. on $\partial\Omega$, as justified by [[lem-positive-part-of-a-zero-trace-function-has-zero-trace]], and it is independent of the chosen representatives. The **boundary supremum** is
$$\sup_{\partial\Omega}u:=\inf\{k\in\mathbb R:\ u\le k\text{ on }\partial\Omega\}\in\mathbb R\cup\{+\infty\},$$
with $\inf\varnothing:=+\infty$; the set is nonempty as soon as $u$ is essentially bounded above.

## Conventions

- **Sign convention.** In the real order theory, the subsolution inequality is $a(u,v)\le\int_\Omega fv$ against nonnegative tests. For the operator $L=-D_i(a^{ij}D_j)+b^iD_i+c$, the favourable pointwise sign in the maximum principle is $c\ge0$; negating a supersolution preserves the same coefficients, so the same sign is favourable for the corresponding minimum estimate.
- **Real order versus complex identities.** The maximum-principle, De Giorgi and Harnack results use real-valued $u$, real coefficients and real sources, so their inequalities compare real numbers. Complex local weak solutions use the compactly supported identity of [[def-local-weak-solution-for-a-divergence-form-operator]]; a complex global weak identity uses a specified continuous functional on $H^1_0$. No order notion is assigned to a complex-valued form.
- **No boundary condition is imposed** by the subsolution or supersolution notion itself, and the boundary order is only introduced on a bounded $C^1$ domain, through the trace; it is never read off pointwise boundary values of a class.

## Sources

- Simon, *Lectures on Partial Differential Equations*, Lecture 13, printed pp. 147-158: the real weak form against nonnegative $\varphi\in C_c^\infty$, the conventions (i)-(iv) for $u\le0$ on $\partial\Omega$ and $\sup_{\partial\Omega}u=\inf\{k:u\le k\text{ on }\partial\Omega\}$, and the weak maximum principle Theorem 4. Simon works with real-valued data; the present definition records the local real order convention and the separate $H^{-1}$ global extension.
- Teschl, *PDE: From Classical to Modern*, Chapter 10 Section 1: Theorem 10.1, Lemma 10.2 and the same boundary convention $(v-u)^+\in H^1_0(U)$ for $v\le u$ on $\partial U$.
- Schikorra, *Partial Differential Equations*, Chapter 2 Sections II.1-II.2: Definitions II.1.1 and II.1.3, the sign convention for the zeroth-order term, and Theorem II.2.1.
