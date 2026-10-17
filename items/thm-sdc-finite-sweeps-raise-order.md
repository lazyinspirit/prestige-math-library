---
id: thm-sdc-finite-sweeps-raise-order
kind: theorem
title: Each SDC sweep raises the order up to the collocation order
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-collocation-quadrature-tableau
  - alg-explicit-left-euler-sdc-sweep
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-local-defect-order-m
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3, Theorem 3.1
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Fix $M\ge1$ collocation nodes and a nonnegative integer $k$ independent of $h$. Use the explicit-left-Euler SDC sweep in [[alg-explicit-left-euler-sdc-sweep]] with constant predictor $U^0=\mathbf1u$ and form the candidate endpoint from $U^k$, after $k$ completed sweeps. Assume each coordinate of $f$ has continuous partial derivatives through total order $M$ on an open neighborhood of a common compact tube $\mathcal T$; assume $f$ is state-Lipschitz with constant $L$ and bounded by $B$ on $\mathcal T$, which contains the exact path, all iterates, and the comparison segments. Also assume the exact-path integrand has the derivative bound required by [[thm-collocation-local-defect-order-m]]. At each mesh time $t_n$, let $\mathcal U_n\subseteq\mathcal T_{t_n}:=\{u:(t_n,u)\in\mathcal T\}$ be a set of starting states containing the exact and numerical grid states used in the global-error comparison. For every $u\in\mathcal U_n$, assume the constant predictor $U^0=\mathbf1u$ belongs to a nonempty closed product ball $\mathcal C_{n,u}$ used in [[thm-sdc-sweep-contraction-and-error-bound]], and each inner stage map and sweep preserves $\mathcal C_{n,u}$. Assume the contraction theorem holds uniformly with $a=hL\|Q_\Delta\|_\infty\le1/2$ and $q\le C_qh<1$. For the global-order assertion, initialize the numerical grid solution exactly, $y_0=y(0)$. For fixed $k$, the $U^k$ endpoint map has exact-start defect $O(h^{p+1})$ and global order $p=\min(M,k+1)$ on any fixed interval, provided all grid states stay in $\mathcal T$. The claim is local-step and fixed-$k$; it asserts no uniform constants as $M$ or $k$ grows.

## Facts & Assumptions

**Given:** A fixed uniform mesh, an IVP, its collocation stages and endpoint, the constant SDC predictor, and the uniform tube and contraction hypotheses.

[F1] [[def-collocation-quadrature-tableau]]: $U^*=\mathbf1u+hQF(U^*)$ and the collocation endpoint is $u+h\sum_jb_jF_j(U^*)$.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: each iterate satisfies $U^{j+1}=\mathbf1u+hQ_\Delta F(U^{j+1})+h(Q-Q_\Delta)F(U^j)$, and its candidate endpoint is $u+h\sum_jb_jF_j(U^k)$.

[F3] [[thm-sdc-sweep-contraction-and-error-bound]]: there is a unique collocation stage vector $U^*\in\mathcal C$; when $U^0\in\mathcal C$, the iterates converge to it and $\|U^k-U^*\|_{\infty,2}\le q^k\|U^0-U^*\|_{\infty,2}$.

[F4] [[thm-collocation-local-defect-order-m]]: the exact-start collocation defect is uniformly $O(h^{M+1})$.

[F5] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0=0$ and $e_{n+1}\le(1+C_sh)e_n+Ch^{p+1}$ uniformly, then the maximum grid error is $O(h^p)$ on a fixed interval.

[A1] The numerical grid solution starts at $y_0=y(0)$. The field satisfies $\|F(U)\|_{\infty,2}\le B$ and $\|F(U)-F(V)\|_{\infty,2}\le L\|U-V\|_{\infty,2}$ on the common invariant tube. The fixed nodes make $Q,Q_\Delta,b$ finite and independent of $h$.

## Proof

1.1 The stage points of the contraction limit $U^*$ lie in the compact set $\mathcal T$, since all iterates do and they converge by [F3]. The constant predictor gives $\|U^0-U^*\|_{\infty,2}=\|hQF(U^*)\|_{\infty,2}\le h\|Q\|_\infty B$ by [F1] and the row-sum norm. Since $q\le C_qh$, [F3] gives $\|U^k-U^*\|_{\infty,2}\le C_q^k\|Q\|_\infty B h^{k+1}$ for fixed $k$ (with the same $O(h)$ bound when $k=0$). [A1, F1, F3, algebra]

1.2 To bound dependence on the input, let $D_j=\|U^j(u)-U^j(v)\|_{\infty,2}$ for two starts $u,v\in\mathcal U_n$, and put $\delta=hL\|Q-Q_\Delta\|_\infty$. Subtracting the stage equations [F2] and using the row-sum norm gives $(1-a)D_{j+1}\le\|u-v\|_2+\delta D_j$. Since $a\le1/2$ and $\delta=O(h)$, $D_0=\|u-v\|_2$ and induction for the fixed number $k$ gives $D_k\le C_k\|u-v\|_2$ with $C_k$ independent of $h$. [A1, F2, algebra, induction]

1.3 Let $\Omega$ be the open neighborhood of $\mathcal T$ on which the stated smoothness holds, within the IVP domain. There is $\rho>0$ such that the closed $3\rho$-neighborhood $N$ of $\mathcal T$ lies in $\Omega$: cover $\mathcal T$ by finitely many balls whose concentric doubled balls lie in $\Omega$, and take $3\rho$ smaller than the minimum of their radii. The set $N$ is compact, so all partial derivatives through order $M$ are bounded there. In particular, since $M\ge1$, the state Jacobian has a uniform bound $\widehat L$; applying the scalar mean-value estimate along state segments gives a state Lipschitz bound $\widehat L$ on each convex cylinder contained in $N$. For an exact start $u=y(t)$, the fixed cylinder $K_t=[t,t+\rho]\times\overline B(u,\rho)$ is compact, convex, and contained in $N$, because its points have distance at most $\sqrt2\rho$ from $(t,u)\in\mathcal T$. These bounds are uniform in $t$ and independent of $h$. [given, construct]

2.1 For an exact start, [F1] and step 1.1 give $\sup_{0\le\tau\le1}\|u_h(\tau)-u\|_2\le h\Lambda_M B$. The exact path has speed at most $B$, hence $\sup_{0\le\tau\le1}\|y(t+\tau h)-u\|_2\le hB$. Thus for $h\le\rho$ and $hB\max\{1,\Lambda_M\}\le\rho$, both paths, the stages, and their comparison segments lie in $K_t$. Any two collocation solutions $V,W$ with stage points in $K_t$ satisfy $\|V-W\|_{\infty,2}\le h\widehat L\|Q\|_\infty\|V-W\|_{\infty,2}$ by subtracting [F1]. Taking $h\widehat L\|Q\|_\infty<1$ proves uniqueness there; existence follows from [F3] and the containment of $U^*$. Together with the assumed exact-path derivative bound, step 1.3 now verifies every tube, smoothness, and branch hypothesis of [F4], with uniform constants. [given, A1, F1, F3, F4, step 1.1, step 1.3, algebra]

2.2 Applying the endpoint formula [F2] to the two stage vectors gives $\|\Psi_h^{(k)}(u)-\Psi_h^{(k)}(v)\|_2\le\|u-v\|_2+hL\|b\|_1D_k\le(1+C_sh)\|u-v\|_2$ for $u,v\in\mathcal U_n$. [A1, F2, step 1.2, algebra]

3.1 The endpoint formula in [F2], the state Lipschitz bound, and step 1.1 give a difference from the exact collocation endpoint of at most $hL\|b\|_1\|U^k-U^*\|_{\infty,2}=O(h^{k+2})$. Adding the exact collocation defect [F4], whose hypotheses were checked in step 2.1, gives an exact-start defect $O(h^{M+1})+O(h^{k+2})=O(h^{p+1})$, since $p+1=\min(M+1,k+2)$ and $h\le1$. [A1, F2, F4, step 1.1, step 2.1, algebra]

4.1 Let $e_n=\|y_n-y(t_n)\|_2$. Both starts lie in $\mathcal U_n$ by the Statement. Insert and subtract the exact-start one-step output to obtain, using step 2.2 and step 3.1, $e_{n+1}\le(1+C_sh)e_n+Ch^{p+1}$ with $p=\min(M,k+1)$ and a uniform $C$. The initial error is $e_0=0$, so [F5] gives global order $p$. [A1, F4, F5, step 3.1, step 2.2, algebra] ∎
