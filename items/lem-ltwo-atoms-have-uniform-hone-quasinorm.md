---
id: lem-ltwo-atoms-have-uniform-hone-quasinorm
kind: lemma
title: "L2-normalised H1 atoms have uniformly bounded H1 norm"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-grand-maximal-test-class-of-order-n, def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-real-hardy-space-by-a-radial-maximal-function, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, thm-maximal-function-characterisations-of-real-hardy-spaces, def-centered-and-uncentered-hardy-littlewood-maximal-functions, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, thm-centered-hardy-littlewood-maximal-function-is-borel-measurable, def-multidimensional-rectangle-and-volume, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-polynomial-growth-functions-define-tempered-distributions, cor-cauchy-schwarz-inequality-for-l-two, thm-lebesgue-measure-of-a-box-of-every-kind, lem-sphere-and-ball-measures-scale, prop-measure-monotonicity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.34 and Proposition 7.35 (every $L^2$ atom has $|A|_{H^1}\\lesssim_n1$), printed pp. 40-41"
---

## Statement

Assume Countable Choice. Fix an admissible kernel $\varphi$ with
$\int\varphi\ne0$ and an auxiliary integer order
$\widetilde N\ge\max\{N_0(n,1,\varphi),n+1\}$ for the grand-maximal
characterisation. Let $a$ be a $(1,2)$-atom supported in a cube $Q$: $a$
vanishes off $Q$, $\int a=0$ and
$\bigl(|Q|^{-1}\int_Q|a|^2\bigr)^{1/2}\le|Q|^{-1}$. Then
$\|a\|_{H^1}=\|M^0_\varphi a\|_{L^1}\le C_{n,\widetilde N,\varphi}$, with the
constant independent of $Q$ and the atom.

## Facts & Assumptions

**Given:** Countable Choice, the fixed admissible kernel $\varphi$ and auxiliary integer order $\widetilde N$ from the statement; also let $a$ be a $(1,2)$-atom supported in a cube $Q$ with centre $x_Q$ and side $\ell(Q)$, and the functionals and spaces of [[def-real-hardy-space-by-a-radial-maximal-function]] and [[def-grand-maximal-test-class-of-order-n]].

[F1] The test class is $\mathcal F_{\widetilde N}=\{\psi\in\mathcal S:P_{\widetilde N}(\psi)\le1\}$ with $P_{\widetilde N}(\psi)=\sup_x(1+|x|)^{\widetilde N}\max_{|\alpha|\le\widetilde N+1}|\partial^\alpha\psi(x)|$, $M_{\widetilde N}f(x)=\sup_{\psi\in\mathcal F_{\widetilde N}}\sup_{t>0}\sup_{|y-x|\le t}|(f*\psi_t)(y)|$ with $\psi_t(u)=t^{-n}\psi(u/t)$; in particular $|\psi|\le1$ and, from the componentwise derivative bounds in the seminorm, $|\nabla\psi(u)|\le\sqrt n(1+|u|)^{-\widetilde N}$ for every $\psi\in\mathcal F_{\widetilde N}$ ([[def-grand-maximal-test-class-of-order-n]]).

[F2] Every $L^2$ class has a representative defining a tempered distribution, and for the regular distribution of a locally integrable compactly supported $a$ the convolution is $(a*\psi_t)(y)=\int a(z)\psi_t(y-z)\,dz$ ([[thm-polynomial-growth-functions-define-tempered-distributions]], [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]).

[F3] The stated atom hypotheses give $\operatorname{supp}a\subseteq Q$, $\int a=0$ and $\|a\|_{L^2}\le|Q|^{-1/2}$; hence $\|a\|_{L^1}\le|Q|^{1/2}\|a\|_{L^2}\le1$ by Cauchy-Schwarz on the finite-measure cube ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] Once $M_{\widetilde N}a\in L^1$ has been established, the maximal-function characterisation gives $a\in H^1$ and $\|M^0_\varphi a\|_{L^1}\le C_{n,\widetilde N,\varphi}\|M_{\widetilde N}a\|_{L^1}$ and $M_{\widetilde N}a$ is Borel measurable ([[thm-maximal-function-characterisations-of-real-hardy-spaces]], [[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]).

[F5] The centered Hardy-Littlewood maximal operator satisfies $\|Mf\|_{L^2}\le C_{n,2}\|f\|_{L^2}$ and $Mf$ is Borel measurable for $f\in L^1_{\mathrm{loc}}$ ([[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]], [[thm-centered-hardy-littlewood-maximal-function-is-borel-measurable]], [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F6] A Euclidean ball of radius $R$ is contained in the axis-parallel box of side $2R$ with the same centre; under Countable Choice that box has Lebesgue measure $(2R)^n$, and Lebesgue measure is monotone ([[def-multidimensional-rectangle-and-volume]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]]).

[F7] Under Countable Choice, $\lambda(B(x,r))=c_nr^n$ for a finite positive constant $c_n$ depending only on dimension ([[lem-sphere-and-ball-measures-scale]]).

## Proof

**Proof technique:** direct.

1.1 Since $a\in L^2$ is supported in the finite-measure cube $Q$, [F2] identifies its regular distribution with a tempered distribution; [F3] gives $\|a\|_{L^1}\le1$. For every $\psi\in\mathcal F_{\widetilde N}$, $|\psi(u)|\le(1+|u|)^{-\widetilde N}$. Fix $t>0$ and $|y-x|\le t$. Split the convolution integral into $|y-z|<t$ and the annuli $2^{k-1}t\le|y-z|<2^kt$ for $k\ge1$. The ball inclusions $B(y,t)\subseteq B(x,2t)$ and $B(y,2^kt)\subseteq B(x,2^{k+1}t)$, together with [F5] and [F7], give
$$|(a*\psi_t)(y)|\le t^{-n}\int_{B(y,t)}|a(z)|\,dz+\sum_{k\ge1}2^{-(k-1)\widetilde N}t^{-n}\int_{B(y,2^kt)}|a(z)|\,dz$$
$$\le c_n2^nM(|a|)(x)+c_n\sum_{k\ge1}2^{-(k-1)\widetilde N}2^{(k+1)n}M(|a|)(x)\le C_{n,\widetilde N}M(|a|)(x),$$
since $\widetilde N\ge n+1$ makes the geometric series converge. Taking suprema gives $M_{\widetilde N}a\le C_{n,\widetilde N}M(|a|)$ pointwise. [F1, F2, F3, F5, F7, algebra]

2.1 Near region. Put $\rho_n:=4\sqrt n$ and $Q^*:=\{x:|x-x_Q|\le\rho_n\ell(Q)\}$. By [F6], $|Q^*|\le(2\rho_n\ell(Q))^n=C_n'|Q|$, since the ball is contained in the corresponding axis-parallel cube. Cauchy-Schwarz together with the $L^2$ bound of [F5] and step 1.1 gives $\int_{Q^*}|M_{\widetilde N}a|\le|Q^*|^{1/2}\|M_{\widetilde N}a\|_2\le|Q^*|^{1/2}C_{n,\widetilde N}\|M(|a|)\|_2\le C_{n,2}'|Q^*|^{1/2}\|a\|_2\le C_n$. [step 1.1, F3, F5, F6]

2.2 Far region, pointwise. Assume $r:=|x-x_Q|\ge\rho_n\ell(Q)$; then every $z\in Q$ satisfies $|z-x_Q|\le\sqrt n\,\ell(Q)\le r/4$, so for $|y-x|\le t$ and $w$ on the segment between $y-z$ and $y-x_Q$ one has $|w|\ge r-t-r/4$. If $t\le r/2$, then $|w|\ge r/4$ and $|\psi_t(y-z)-\psi_t(y-x_Q)|\le\sqrt n\,\ell(Q)\sup|\nabla\psi_t|$ with $|\nabla\psi_t(w)|=t^{-n-1}|\nabla\psi(w/t)|\le\sqrt n\,t^{-n-1}(t/|w|)^{\widetilde N}\le C_{\widetilde N,n}r^{-n-1}$ because $\widetilde N\ge n+1$ and $t\le r/2$; if $t>r/2$, the same difference is at most $\sqrt n\,\ell(Q)\cdot\sqrt n(r/2)^{-n-1}\le C_n\ell(Q)r^{-n-1}$ by [F1]. Using $\int a=0$ to write $(a*\psi_t)(y)=\int a(z)[\psi_t(y-z)-\psi_t(y-x_Q)]dz$ and $\|a\|_{L^1}\le1$ from [F3], both cases give $|(a*\psi_t)(y)|\le C_{\widetilde N,n}\ell(Q)r^{-n-1}$, and taking suprema over $\psi\in\mathcal F_{\widetilde N}$, $t>0$ and $|y-x|\le t$ yields $M_{\widetilde N}a(x)\le C_{\widetilde N,n}\ell(Q)r^{-n-1}$. [step 1.1, F1, F3, F2]

3.1 Far region, integration. Covering $\{r\ge\rho_n\ell(Q)\}$ by the shells $\{2^j\rho_n\ell(Q)\le r<2^{j+1}\rho_n\ell(Q)\}$, each contained in a cube of side $4\cdot2^j\rho_n\ell(Q)$, and using step 2.2 gives $\int_{r\ge\rho_n\ell(Q)}M_{\widetilde N}a\le C_{\widetilde N,n}\ell(Q)\sum_{j\ge0}(2^j\rho_n\ell(Q))^{-n-1}(4\cdot2^j\rho_n\ell(Q))^n=C_{\widetilde N,n}'$. [step 2.2, algebra]

4.1 Combining steps 2.1 and 3.1, $\|M_{\widetilde N}a\|_{L^1}=\int_{Q^*}|M_{\widetilde N}a|+\int_{\mathbb R^n\setminus Q^*}|M_{\widetilde N}a|\le C_{n,\widetilde N}<\infty$, so [F4] gives $\|a\|_{H^1}=\|M^0_\varphi a\|_{L^1}\le C_{n,\widetilde N,\varphi}\|M_{\widetilde N}a\|_{L^1}\le C_{n,\widetilde N,\varphi}$, independent of $Q$ and of the atom. Countable Choice is inherited from the maximal-function and measure suppliers [F4]-[F7]. [step 2.1, step 3.1, F4] ∎
