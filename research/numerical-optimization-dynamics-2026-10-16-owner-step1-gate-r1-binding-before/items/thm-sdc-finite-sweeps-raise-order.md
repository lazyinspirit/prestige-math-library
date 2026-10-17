---
id: thm-sdc-finite-sweeps-raise-order
kind: theorem
title: Each SDC sweep raises the order up to the collocation order
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-collocation-quadrature-tableau
  - alg-explicit-left-euler-sdc-sweep
  - thm-sdc-sweep-contraction-and-error-bound
  - thm-collocation-local-defect-order-m
  - thm-global-error-from-one-step-defect-and-stability
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

Fix $M\ge1$ collocation nodes and a nonnegative integer $k$ independent of $h$. Use the explicit-left-Euler SDC sweep in [[alg-explicit-left-euler-sdc-sweep]] with constant predictor $U^0=\mathbf1u$ and form the candidate endpoint from $U^k$, after $k$ completed sweeps. Assume $f$ is $C^M$, state-Lipschitz with constant $L$, and bounded by $B$ on a common tube containing the exact path, all iterates, and the comparison segments; assume the exact-path integrand has the derivative bound required by [[thm-collocation-local-defect-order-m]]. Assume the stage set is invariant for the $k$ sweeps for every initial state in each stated time fiber, and the contraction theorem holds uniformly with $a=hL\|Q_\Delta\|_\infty\le1/2$ and $q\le C_qh<1$. For fixed $k$, the $U^k$ endpoint map has exact-start defect $O(h^{p+1})$ and global order $p=\min(M,k+1)$ on any fixed interval, provided all grid states stay in the tube. The claim is local-step and fixed-$k$; it asserts no uniform constants as $M$ or $k$ grows.

## Facts & Assumptions

**Given:** A fixed uniform mesh, an IVP, its collocation stages and endpoint, the constant SDC predictor, and the uniform tube and contraction hypotheses.

[F1] [[def-collocation-quadrature-tableau]]: $U^*=\mathbf1u+hQF(U^*)$ and the collocation endpoint is $u+h\sum_jb_jF_j(U^*)$.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: each iterate satisfies $U^{j+1}=\mathbf1u+hQ_\Delta F(U^{j+1})+h(Q-Q_\Delta)F(U^j)$, and its candidate endpoint is $u+h\sum_jb_jF_j(U^k)$.

[F3] [[thm-sdc-sweep-contraction-and-error-bound]]: $\|U^k-U^*\|_{\infty,2}\le q^k\|U^0-U^*\|_{\infty,2}$.

[F4] [[thm-collocation-local-defect-order-m]]: the exact-start collocation defect is uniformly $O(h^{M+1})$.

[F5] [[thm-global-error-from-one-step-defect-and-stability]]: a uniform local defect $O(h^{p+1})$ and one-step Lipschitz bound $1+C_sh$ imply global error $O(h^p)$ from an exact initial value on a fixed interval.

[A1] The field satisfies $\|F(U)\|_{\infty,2}\le B$ and $\|F(U)-F(V)\|_{\infty,2}\le L\|U-V\|_{\infty,2}$ on the common invariant tube. The fixed nodes make $Q,Q_\Delta,b$ finite and independent of $h$.

## Proof

1.1 The constant predictor gives $\|U^0-U^*\|_{\infty,2}=\|hQF(U^*)\|_{\infty,2}\le h\|Q\|_\infty B$ by [F1] and the row-sum norm. Since $q\le C_qh$, [F3] gives $\|U^k-U^*\|_{\infty,2}\le C_q^k\|Q\|_\infty B h^{k+1}$ for fixed $k$ (with the same $O(h)$ bound when $k=0$). [A1, F1, F3, algebra]

1.2 To bound dependence on the input, let $D_j=\|U^j(u)-U^j(v)\|_{\infty,2}$ for two starts in the tube, and put $\delta=hL\|Q-Q_\Delta\|_\infty$. Subtracting the stage equations [F2] and using the row-sum norm gives $(1-a)D_{j+1}\le\|u-v\|_2+\delta D_j$. Since $a\le1/2$ and $\delta=O(h)$, $D_0=\|u-v\|_2$ and induction for the fixed number $k$ gives $D_k\le C_k\|u-v\|_2$ with $C_k$ independent of $h$. [A1, F2, algebra, induction]

2.1 The endpoint formula in [F2], the state Lipschitz bound, and step 1.1 give a difference from the exact collocation endpoint of at most $hL\|b\|_1\|U^k-U^*\|_{\infty,2}=O(h^{k+2})$. Adding the exact collocation defect [F4] gives an exact-start defect $O(h^{M+1})+O(h^{k+2})=O(h^{p+1})$, since $p+1=\min(M+1,k+2)$ and $h\le1$. [A1, F2, F4, step 1.1, algebra]

3.1 Applying the endpoint formula [F2] to the two stage vectors gives $\|\Psi_h^{(k)}(u)-\Psi_h^{(k)}(v)\|_2\le\|u-v\|_2+hL\|b\|_1D_k\le(1+C_sh)\|u-v\|_2$. The local defect bound in step 2.1 and this stability bound meet [F5] with $p=\min(M,k+1)$; exact initial data give global order $p$. [A1, F2, F5, step 2.1, step 1.2, algebra] ∎