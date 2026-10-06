---
id: lem-caccioppoli-inequality-for-truncated-subsolutions
kind: lemma
title: "Caccioppoli inequality for truncated subsolutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, lem-smooth-bump-between-concentric-euclidean-balls, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemmi 4-5, printed pp. 1-7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, printed pp. 199-210 (read in full)"
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 1 and the Moser-iteration proof with the estimates (7)-(15), printed pp. 1-9 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $0<\theta\le M_a^2$, and let $A=(a^{ij})$ be measurable with $a^{ij}=a^{ji}$ and
$$\theta|\xi|^2\le\sum_{i,j=1}^n a^{ij}(x)\xi_i\xi_j\le M_a^2|\xi|^2\qquad\text{for a.e. }x\in\Omega\text{ and all }\xi\in\mathbb R^n .$$
Write $L_0u:=-D_i(a^{ij}D_ju)$ and $a_0(u,v):=\int_\Omega a^{ij}D_ju\,D_iv\,dx$ for real $u,v\in H^1(\Omega)$. Let $f\in L^2_{\mathrm{loc}}(\Omega)$ and let $u\in H^1(\Omega;\mathbb R)$ satisfy the local weak subsolution inequality
$$a_0(u,\varphi)\le\int_\Omega f\,\varphi\,dx\qquad\text{for every nonnegative }\varphi\in C_c^\infty(\Omega).$$
Then for every $k\in\mathbb R$ and every $\eta\in C_c^\infty(\Omega)$ with $0\le\eta\le1$,
$$\int_\Omega\eta^2|D(u-k)^+|^2dx\le\frac{4M_a^2}{\theta}\int_\Omega (u-k)^{+2}|D\eta|^2dx+\frac{2}{\theta}\int_\Omega\eta^2 (u-k)^+f^+dx,$$
and for concentric balls $B_r(x_0)\Subset B_R(x_0)\Subset\Omega$, $0<r<R$,
$$\int_{B_r(x_0)}|D(u-k)^+|^2dx\le C(n,\theta,M_a)\Bigl(\frac{1}{(R-r)^2}\int_{B_R(x_0)}(u-k)^{+2}dx+\int_{B_R(x_0)}(u-k)^+f^+dx\Bigr).$$
All integrands are restricted to the superlevel set $\{u>k\}$, where $(u-k)^+>0$; the estimate is uniform in $k$ and in the localisation.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge2$; constants $0<\theta\le M_a^2$; a measurable symmetric coefficient field $A=(a^{ij})$ with $\theta|\xi|^2\le\langle A\xi,\xi\rangle\le M_a^2|\xi|^2$ a.e.; $f\in L^2_{\mathrm{loc}}(\Omega)$; and a real class $u\in H^1(\Omega;\mathbb R)$ with $a_0(u,\varphi)\le\int_\Omega f\varphi$ for every nonnegative $\varphi\in C_c^\infty(\Omega)$.

[F1] Assume Countable Choice and the Axiom of Choice. For $k\in\mathbb R$ and $u\in H^1(\Omega;\mathbb R)$, the class $u_k:=(u-k)^+$ lies in $H^1_{\mathrm{loc}}(\Omega;\mathbb R)$ with $Du_k=1_{\{u>k\}}Du$, and $Du_k=0$ a.e. on $\{u\le k\}$. Global $H^1(\Omega)$ membership is not asserted for arbitrary $k$ on an infinite-measure domain. For $\eta\in C_c^\infty(\Omega)$ the product $\eta^2u_k$ lies in $H^1_0(\Omega)$, is nonnegative, and satisfies $D(\eta^2u_k)=2\eta u_kD\eta+\eta^2Du_k$ a.e. ([[lem-positive-part-is-an-admissible-weak-test-by-truncation]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

[F2] Assume Countable Choice. Every element of $H^1(\Omega)$ has weak first derivatives in $L^2(\Omega)$, the weak derivative is linear, and products of $L^2$ classes with bounded measurable coefficients are integrable on compact sets ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] Bumps: for $0<r<R$ there is $\eta\in C_c^\infty(B_R(x_0))$ with $0\le\eta\le1$, $\eta=1$ on $B_r(x_0)$ and $|D\eta|\le C_U/(R-r)$ for a universal constant $C_U$; the explicit radial bump $\eta(x)=\sigma\bigl((s^2-|x-x_0|^2)/(s^2-r^2)\bigr)$, $s=(r+R)/2$, of [[lem-smooth-bump-between-concentric-euclidean-balls]] and [[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]] provides it, since on the support $|x-x_0|\le s$ and the chain rule give $|D\eta|\le\|\sigma'\|_\infty\,2s/(s^2-r^2)\le\|\sigma'\|_\infty\,4/(R-r)$.

[F4] Young's inequality with conjugate exponents $p=q=2$ and weight: for $a,b\ge0$ and $\varepsilon>0$, $2ab\le\varepsilon a^2+b^2/\varepsilon$ ([[thm-young-inequality-real-exponents]]); Cauchy–Schwarz in $L^2$ gives $|\int gh|\le(\int g^2)^{1/2}(\int h^2)^{1/2}$ ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** direct; insert the truncated test function into the subsolution inequality, expand, and absorb the cross term by Young's inequality.

1.1 Fix $k$ and $\eta\in C_c^\infty(\Omega)$ with $0\le\eta\le1$, and put $u_k:=(u-k)^+$ and $v:=\eta^2u_k$. By [F1], $v\in H^1_0(\Omega)$ is nonnegative; since $f\in L^2_{\mathrm{loc}}$ and the support is compact, density extends the local subsolution inequality to this test. Thus $a_0(u,v)\le\int_\Omega\eta^2u_kf^+\,dx$. Expanding and using $Du_k=\mathbf1_{\{u>k\}}Du$, define $S^2:=\int_\Omega\eta^2\,a^{ij}D_ju_kD_iu_k\,dx$. The correct identity is $$S^2=a_0(u,v)-2\int_\Omega\eta u_k\,a^{ij}D_ju_kD_i\eta\,dx\le\int_\Omega\eta^2u_kf^+dx+2\left|\int_\Omega\eta u_k\,a^{ij}D_ju_kD_i\eta\,dx\right|.$$ The matrix Cauchy--Schwarz inequality and $A\le M_a^2I$ bound the last term by $2|M_a|S(\int_\Omega u_k^2|D\eta|^2dx)^{1/2}$. [given, F1, F2, F4, algebra]

2.1 By Young's inequality $2|M_a|Sb\le\tfrac12S^2+2M_a^2b^2$ with $b=(\int_\Omega u_k^2|D\eta|^2)^{1/2}$, step 1.1 gives $S^2\le2\int_\Omega\eta^2u_kf^+dx+4M_a^2\int_\Omega u_k^2|D\eta|^2dx$. Ellipticity gives $S^2\ge\theta\int_\Omega\eta^2|Du_k|^2dx$, and therefore $$\int_\Omega\eta^2|Du_k|^2dx\le\frac{4M_a^2}{\theta}\int_\Omega u_k^2|D\eta|^2dx+\frac{2}{\theta}\int_\Omega\eta^2u_kf^+dx.$$ This is the first estimate. [step 1.1, F4, algebra]

3.1 For the ball form let $0<r<R$ with $B_R(x_0)\Subset\Omega$ and choose the bump $\eta$ of [F3], so that $0\le\eta\le1$, $\eta=1$ on $B_r(x_0)$, $\operatorname{supp}\eta\subseteq B_R(x_0)$ and $|D\eta|\le C_U/(R-r)$. Applying step 2.1 gives the second estimate, with $C(n,\theta,M_a):=\max\{4M_a^2C_U^2/\theta,\,2/\theta\}$. Both estimates are uniform in $k$, and no choice principle beyond the declared Countable Choice and Axiom of Choice is used. [step 2.1, F3] ∎

