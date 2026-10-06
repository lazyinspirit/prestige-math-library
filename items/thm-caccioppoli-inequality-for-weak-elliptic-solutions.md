---
id: thm-caccioppoli-inequality-for-weak-elliptic-solutions
kind: theorem
title: "The Caccioppoli inequality for weak elliptic solutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-elliptic-form-is-well-defined-and-bounded, lem-weak-leibniz-rule-with-a-smooth-factor, def-wkp-zero-as-a-sobolev-closure, def-hk-and-hk-zero-notation, def-the-standard-smooth-step-function, thm-chain-rule-for-total-derivatives, thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, def-conjugate-exponents, def-countable-choice, lem-compact-support-zero-extension-in-wkp, lem-cutoff-difference-quotient-commutator-estimate]
landmark: false
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, Lemma 1 (Caccioppoli-type energy estimate) and its proof, printed pp. 58-59 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, final step of the proof of Theorem 4.27 with test function $\eta^2u$, printed pp. 112-114 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant
$\theta$ and coefficient bounds $M_a,M_b,M_c$, let
$f\in L^2_{\mathrm{loc}}(\Omega)$ and let $u\in H^1(\Omega;\mathbb K)$ be a
local weak solution of $Lu=f$ on $\Omega$
([[def-local-weak-solution-for-a-divergence-form-operator]]). For every ball
$B_R(x_0)\Subset\Omega$ and every $0<r<R$ there is a constant
$C=C(n,\theta,M_a,M_b,M_c)$ with
$$\int_{B_r(x_0)}|Du|^2\,dx\le C\Big(\frac{1}{(R-r)^2}\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|u|^2\,dx+\int_{B_R(x_0)}|f|^2\,dx\Big).$$
No regularity of the coefficients beyond measurability and essential
boundedness is used, and the estimate is uniform in the localisation. When
$f=0$ the estimate is the energy inequality for a locally weak harmonic class.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; coefficients $a^{ij},b^i,c$ and the form $a(\cdot,\cdot)$ of [[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant $\theta$ and bounds $M_a,M_b,M_c$; a class $f\in L^2_{\mathrm{loc}}(\Omega)$; a local weak solution $u\in H^1(\Omega)$ of $Lu=f$; a ball $B_R(x_0)\Subset\Omega$; and a radius $0<r<R$; the standard smooth step $\sigma$ of [[def-the-standard-smooth-step-function]] is fixed once and for all, with $S:=\|\sigma'\|_{L^\infty(\mathbb R)}$.

[F1] The form is well defined on $H^1(\Omega)$ and bounded: $|a(w,z)|\le(nM_a+nM_b+M_c)\|w\|_{H^1}\|z\|_{H^1}$ for $w,z\in H^1(\Omega)$, the value depends only on the $H^1$ classes, and the form is linear in the first and conjugate-linear in the second slot. ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-uniformly-elliptic-divergence-form-operator]])

[F2] Uniform ellipticity: $\operatorname{Re}\big(\sum_{i,j}a^{ij}(x)\xi_j\overline{\xi_i}\big)\ge\theta|\xi|^2$ for almost every $x\in\Omega$ and every $\xi\in\mathbb C^n$; the coefficient bounds $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ hold almost everywhere. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] The local weak equation is equivalent to $a(u,v)=\int_{\Omega_2}f\,\overline v\,dx$ for every bounded open $\Omega_2\Subset\Omega$ and every $v\in H^1_0(\Omega_2)$, and every class in $H^1_0(\Omega_2)$ may be used as a test class there. ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-wkp-zero-as-a-sobolev-closure]])

[F4] Smooth-factor Leibniz rule: for $\eta\in C_c^\infty(\Omega)$ and $u\in H^1(\Omega)$ the class $\eta^2u$ lies in $H^1(\Omega)$ and $D_i(\eta^2u)=\eta^2D_iu+2\eta(D_i\eta)u$ almost everywhere; a class in $H^1(\Omega)$ with support in a compact subset of $\Omega$ lies in $H^1_0$ of any open set containing its support. ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-compact-support-zero-extension-in-wkp]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-cutoff-difference-quotient-commutator-estimate]]).

[F5] The standard smooth step is smooth with values in $[0,1]$, vanishes on $(-\infty,0]$ and equals $1$ on $[1,\infty)$; the chain rule computes the derivatives of $x\mapsto\sigma(g(x))$ as $\sigma'(g(x))Dg(x)$. ([[def-the-standard-smooth-step-function]], [[thm-chain-rule-for-total-derivatives]])

[F6] Cauchy-Schwarz and Young: for real vectors or scalars one has $|XY|\le\delta X^2+Y^2/(4\delta)$ for every $\delta>0$, and $\int|FG|\le\|F\|_{L^2}\|G\|_{L^2}$; the vector estimate $\sum_{i,j}|a^{ij}D_ju\overline{D_iv}|\le nM_a|Du|\,|Dv|$ holds almost everywhere. ([[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]], [[def-conjugate-exponents]])



## Proof

**Proof technique:** direct.

1.1 Put $s:=(r+R)/2$ and define $u_*(x):=(s^2-|x-x_0|^2)/(s^2-r^2)$ and $\eta(x):=\sigma(u_*(x))$ on $\mathbb R^n$. Then $\eta$ is smooth, $0\le\eta\le1$, $\eta=1$ on $B_r(x_0)$, and $\operatorname{supp}\eta\subseteq\overline{B_s(x_0)}\subset B_R(x_0)$: indeed $u_*\ge1$ on $B_r(x_0)$ and $u_*\le0$ off $B_s(x_0)$, while $s^2-r^2>0$. Thus the support is compactly contained in $B_R(x_0)\Subset\Omega$. Moreover, on the support of $\sigma'\circ u_*$ one has $0\le u_*\le1$, hence $|x-x_0|\le s$, and the chain rule gives $$|D\eta(x)|=|\sigma'(u_*(x))|\,|Du_*(x)|\le S\,\frac{2|x-x_0|}{s^2-r^2}\le S\,\frac{2s}{(R-r)s/2}=\frac{4S}{R-r},$$ because $s-r=(R-r)/2$ and $s+r\ge s$ give $s^2-r^2=(s-r)(s+r)\ge(R-r)s/2$. [F5, given, construct]

2.1 The class $v:=\eta^2u$ lies in $H^1(\Omega)$ by [F4] and its support is contained in $\operatorname{supp}\eta\subseteq\overline{B_s(x_0)}\Subset B_R(x_0)\Subset\Omega$, so $v\in H^1_0(B_R(x_0))$ by [F4]; since $B_R(x_0)\Subset\Omega$ is bounded, the weak equation of [F3] with the test class $v$ reads $a(u,\eta^2u)=\int_{B_R(x_0)}f\,\overline{\eta^2u}\,dx$, both sides finite by the boundedness of the form in [F1]. [F1, F3, F4, step 1.1]

3.1 By the Leibniz rule of [F4], $D_i(\eta^2u)=\eta^2D_iu+2\eta(D_i\eta)u$ almost everywhere; substituting this into the definition of the form and splitting the principal part, $$a(u,\eta^2u)=\int_{B_R}\eta^2a^{ij}D_ju\overline{D_iu}\,dx+\int_{B_R}2\eta\,a^{ij}D_ju\overline{(D_i\eta)u}\,dx+\int_{B_R}\big(b^iD_iu+cu\big)\overline{\eta^2u}\,dx,$$ and taking real parts in the identity of step 2.1 gives $$\operatorname{Re}\int_{B_R}\eta^2a^{ij}D_ju\overline{D_iu}\,dx\le 2nM_a\int_{B_R}\eta|D\eta||Du||u|+nM_b\int_{B_R}\eta^2|Du||u|+M_c\int_{B_R}\eta^2|u|^2+\int_{B_R}\eta^2|f||u|,$$ using [F2] for the left side ($\operatorname{Re}(a^{ij}D_ju\overline{D_iu})\ge\theta|Du|^2$) and the coefficient bounds together with [F6] for each remaining term. [F2, F4, F6, step 2.1, algebra]

4.1 Estimate the four terms on the right of step 3.1 by Young's inequality with a parameter $\delta>0$: $2nM_a\int\eta|D\eta||Du||u|\le2nM_a\delta\int\eta^2|Du|^2+\frac{2nM_a}{4\delta}\int|D\eta|^2|u|^2$; $nM_b\int\eta^2|Du||u|\le nM_b\delta\int\eta^2|Du|^2+\frac{nM_b}{4\delta}\int\eta^2|u|^2$; $\int\eta^2|f||u|\le\delta\int\eta^2|f|^2+\frac1{4\delta}\int\eta^2|u|^2$; and $M_c\int\eta^2|u|^2$ needs no splitting. Choosing $\delta:=\theta/\big(2(2nM_a+nM_b)\big)$ makes the two $|Du|^2$ coefficients sum to at most $\theta/2$, so the left side of step 3.1 controls the gradient: $$\frac{\theta}{2}\int_{B_R}\eta^2|Du|^2\,dx\le C_1\int_{B_R}|D\eta|^2|u|^2\,dx+C_2\int_{B_R}|u|^2\,dx+C_3\int_{B_R}|f|^2\,dx$$ with constants $C_1,C_2,C_3$ depending only on $n,\theta,M_a,M_b,M_c$. [F6, step 3.1, algebra]

5.1 Since $\eta=1$ on $B_r(x_0)$ and $\operatorname{supp}\eta\subseteq B_R(x_0)$, one has $\int_{B_r}|Du|^2\le\int_{B_R}\eta^2|Du|^2$, and step 4.1 combined with the gradient bound $|D\eta|\le4S/(R-r)$ of step 1.1 gives $$\int_{B_r(x_0)}|Du|^2\,dx\le\frac{2}{\theta}\Big(C_1\frac{16S^2}{(R-r)^2}\int_{B_R(x_0)}|u|^2\,dx+C_2\int_{B_R(x_0)}|u|^2\,dx+C_3\int_{B_R(x_0)}|f|^2\,dx\Big),$$ which is the displayed estimate with $C=\max\{32S^2C_1/\theta,\,2C_2/\theta,\,2C_3/\theta\}=C(n,\theta,M_a,M_b,M_c)$, because $\sigma$ is fixed in advance and $S$ is a universal constant. [step 1.1, step 4.1, algebra] ∎

## Source notes

Simon's Lecture 6, Lemma 1 (printed pp. 58-59) proves the estimate by testing with $\eta^2u$; Hunter's final step of Theorem 4.27 (printed pp. 112-114) uses the same test function. The explicit $(R-r)^{-2}$ scale above comes from the rescaled standard bump, whose gradient bound is computed in step 1.1 rather than quoted as a separate lemma, and the constant is uniform over the choice of ball because no quantity depending on $x_0$, $r$ or $R$ enters it except through the displayed powers.
