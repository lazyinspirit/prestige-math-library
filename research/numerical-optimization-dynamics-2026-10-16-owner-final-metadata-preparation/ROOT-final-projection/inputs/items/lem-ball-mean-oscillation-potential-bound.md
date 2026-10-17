---
id: lem-ball-mean-oscillation-potential-bound
kind: lemma
title: "Ball-mean oscillation bound by the Riesz potential of the gradient"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-axiom-of-choice, def-countable-choice, def-polar-surface-measure-on-the-unit-sphere, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, lem-sphere-and-ball-measures-scale, lem-truncated-riesz-kernel-potential-bounded-on-lp, thm-chain-rule-for-total-derivatives, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, thm-linear-change-of-variables-for-lebesgue-measure, thm-local-smooth-approximation-in-wkp, thm-polar-coordinates-formula-for-lebesgue-measure, thm-riesz-fischer-completeness-of-l-p, thm-tonelli-and-fubini-for-completed-product-measures, cor-vector-valued-ftc-and-lipschitz-bound, thm-dominated-convergence, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.3, Lemma 5.22 and Remarks 5.23(1), printed pp. 133-135."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.8, the potential representation in the proof of Theorem 3.36, display (3.14), printed pp. 68-70."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$, let $1\le p<\infty$, let $B(x,r)\subseteq\mathbb R^n$ be a ball, and let $u\in W^{1,p}(B(x,r);\mathbb K)$ with ball average $u_{B(x,r)}$. Then
$$\bigl|u(z)-u_{B(x,r)}\bigr|\le C(n)\int_{B(x,r)}|Du(y)|\,|z-y|^{1-n}\,dy$$
for almost every $z\in B(x,r)$; here $|Du|$ is the Euclidean norm of the weak gradient and $C(n)$ depends only on $n$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$; $x\in\mathbb R^n$ and $r>0$; $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(B(x,r);\mathbb K)$.

[F1] The polar surface measure is normalized by $\sigma(E)=n\lambda_n(\{t\omega:\omega\in E,\ 0<t\le1\})$ on Borel $E\subseteq S^{n-1}$, and for nonnegative Borel $h$ one has $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(t\omega)t^{n-1}\,d\sigma(\omega)\,dt$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] For every ball $\lambda_n(B(z,\rho))=\sigma(S^{n-1})\rho^n/n$, and this is positive and finite ([[lem-sphere-and-ball-measures-scale]]).

[F3] If a curve is composed from differentiable maps then the chain rule computes its derivative, and a differentiable curve with integrable derivative satisfies the fundamental theorem of calculus ([[thm-chain-rule-for-total-derivatives]], [[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F4] On completed sigma-finite products nonnegative measurable functions may be integrated in either order (Tonelli-Fubini), and an invertible linear map scales Lebesgue measure by $|\det|$ ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F5] Truncated Riesz kernel bound: for measurable $\Omega\subseteq B(z_0,\rho)$ and $f\in L^p(\Omega;\mathbb K)$, $\bigl\|\int_\Omega|x-y|^{1-n}|f(y)|\,dy\bigr\|_{L^p(\Omega)}\le C(n)\rho\|f\|_{L^p(\Omega)}$ ([[lem-truncated-riesz-kernel-potential-bounded-on-lp]]).

[F6] Interior mollifications converge to $u$ in $W^{1,p}(U)$ on every $U\Subset B(x,r)$ ([[thm-local-smooth-approximation-in-wkp]]). Norm convergence has an almost-everywhere convergent subsequence ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]). Dominated convergence applies to integrable majorants ([[thm-dominated-convergence]]).

[F7] The ball average $u_B=|B|^{-1}\int_Bu$ is the normalized integral of the class, and $W^{1,p}$ consists of the $L^p$ classes with weak gradient in $L^p$ ([[def-ball-average-operator-on-r-n]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F8] On a finite measure space $L^p$ includes into $L^1$, so $u_i\to u$ in $L^p$ implies $(u_i)_B\to u_B$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F9] The Axiom of Countable Choice is available and is used through the cited measure-theoretic and approximation interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Spherical oscillation bound for a smooth function. Let $v\in C^\infty(\mathbb R^n;\mathbb K)$, $B:=B(x,r)$, and fix $z\in B$ and $\rho>0$. For $y\in B$ the chain rule and the fundamental theorem [F3] applied to $t\mapsto v(ty+(1-t)z)$ give $v(y)-v(z)=\int_0^1Dv(ty+(1-t)z)\cdot(y-z)\,dt$, hence $|v(y)-v(z)|\le|y-z|\int_0^1|Dv(ty+(1-t)z)|\,dt$. Writing $S_\rho:=\partial B(z,\rho)$ for the sphere equipped with its surface measure, and using that the homothety $y\mapsto ty+(1-t)z$ maps $S_\rho$ onto $S_{t\rho}$ with surface element scaled by $t^{n-1}$; its image of $B\cap S_\rho$ is contained in $B\cap S_{t\rho}$ by convexity, so enlargement gives the inequality below (the surface measures are the polar measures of cones, so this is the linear change-of-variables property of [F1] and [F4]), $\int_{B\cap S_\rho}|v(y)-v(z)|\,dS(y)\le\rho\int_0^1\int_{B\cap S_\rho}|Dv(ty+(1-t)z)|\,dS(y)\,dt\le\rho\int_0^1t^{1-n}\int_{B\cap S_{t\rho}}|Dv(w)|\,dS(w)\,dt$. Since $|w-z|=t\rho$ on $S_{t\rho}$, the inner integral equals $\rho^{n-1}t^{n-1}\int_{B\cap S_{t\rho}}|Dv(w)|\,|z-w|^{1-n}\,dS(w)$; substituting $s=t\rho$, so that $dt=ds/\rho$, the last display becomes $\rho^{n-1}\int_0^\rho\int_{B\cap S_s}|Dv(w)|\,|z-w|^{1-n}\,dS(w)\,ds=\rho^{n-1}\int_{B\cap B(z,\rho)}|Dv(w)|\,|z-w|^{1-n}\,dw$, the final equality being the polar-coordinate formula [F1] for the nonnegative function $w\mapsto|Dv(w)||z-w|^{1-n}$ on $B\cap B(z,\rho)$ (whose singularity at $w=z$ is integrable; a single point is null). [F1, F3, F4, given, algebra]

2.1 The oscillation bound for a smooth function. Let $v\in C^\infty(\mathbb R^n;\mathbb K)$ and keep $B=B(x,r)$. Since $u_{B}$ is the normalized integral, $|v(z)-v_B|=|B|^{-1}|\int_B(v(z)-v(y))\,dy|$; writing the integral over $B$ in polar coordinates around $z$ and using $B\subseteq B(z,2r)$, step 1.1 gives $|v(z)-v_B|\le|B|^{-1}\int_0^{2r}\int_{B\cap S_\rho}|v(y)-v(z)|\,dS(y)\,d\rho\le|B|^{-1}\int_0^{2r}\rho^{n-1}\,d\rho\int_B|Dv(y)|\,|z-y|^{1-n}\,dy$ for every $z\in B$. By [F2], $|B|=\sigma(S^{n-1})r^n/n$ and $\int_0^{2r}\rho^{n-1}d\rho=(2r)^n/n$, so $|B|^{-1}\int_0^{2r}\rho^{n-1}d\rho=2^n/\sigma(S^{n-1})=:c(n)$; hence $|v(z)-v_B|\le c(n)\int_B|Dv(y)||z-y|^{1-n}dy$ for every $z\in B$. [F1, F2, F7, step 1.1, algebra]

3.1 First pass to the Sobolev class on an inner ball $B_j:=B(x,r(1-1/j))$, $j\ge2$. Its closure lies in $B$, so [F6] supplies smooth mollifications $u_i\to u$ in $W^{1,p}(B_j)$. By [F8] their $B_j$ means converge. Apply step 2.1 on $B_j$. The potential operator on $B_j$ satisfies [F5], and $\bigl|\int_{B_j}|Du_i(y)||z-y|^{1-n}dy-\int_{B_j}|Du(y)||z-y|^{1-n}dy\bigr|\le\int_{B_j}|Du_i-Du|(y)|z-y|^{1-n}dy$ tends to zero in $L^p(B_j)$ by [F5]. Successive almost-everywhere subsequences from [F6] for $u_i$ and these potentials therefore give $|u(z)-u_{B_j}|\le c(n)\int_{B_j}|Du(y)||z-y|^{1-n}dy$ for almost every $z\in B_j$. [F5, F6, F8, F9, step 2.1, algebra]

4.1 Take the union of the countably many exceptional null sets from step 3.1. For $z$ outside this union, $z\in B_j$ for every sufficiently large $j$, and each right side is at most $c(n)\int_B|Du(y)||z-y|^{1-n}dy$. Since $u\in L^1(B)$, dominated convergence [F6] gives $u_{B_j}\to u_B$. Letting $j\to\infty$ proves the asserted inequality on $B$, without any approximation claim at its boundary. [F6, F8, step 3.1, algebra] ∎

## Source notes

The computation is Kinnunen's Lemma 5.22, printed pp. 133-135: the spherical change of variables $w=ty+(1-t)z$, the radius substitution $s=t\rho$ and the final polar-coordinate identity are reproduced with their justification, and the explicit constant $2^n/\sigma(S^{n-1})$ is recorded. Kinnunen states the lemma for $C^1(\mathbb R^n)$ functions and then passes to $W^{1,p}_{\mathrm{loc}}$ by mollification and the $L^p$ bound for the Riesz potential of the gradient; the passage above uses the library's interior mollification and its truncated-kernel bound, which already carries the John-domain rescaling used later on the companion page.
