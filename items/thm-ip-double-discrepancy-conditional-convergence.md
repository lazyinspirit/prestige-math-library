---
id: thm-ip-double-discrepancy-conditional-convergence
kind: theorem
title: Conditional convergence of double-discrepancy composite inversion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - def-compact-spectral-filter-and-qualification
  - def-hilbert-space-adjoint
  - def-ip-compact-linear-inverse-model
  - def-ip-composite-double-regularization
  - def-ip-power-source-set
  - def-ip-unbounded-hilbert-moore-penrose-inverse
  - lem-ip-spectral-interpolation-for-power-source-balls
  - thm-singular-value-decomposition-for-compact-operators
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christina Brandt and Patrick Horn, Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems, Theorem 6 and proof"
      url: "https://arxiv.org/pdf/2610.13483"
      locator: "Theorem 6, equations (13)–(20), Lemmas 7–8, printed pp. 6–9; the source statement's variable and radius-power corrections are documented in batch-6 notes."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes, Theorem 5.11"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 5, §5.2, a posteriori choice rules, Theorem 5.11 and complete proof, printed pp. 52–54; single-stage source-condition Morozov estimate."
---

## Statement

Assume Countable Choice. Let $X,Y,Z$ be real or complex Hilbert spaces over one scalar field. Let compact linear maps $F:X\to Y$ and $G:Y\to Z$ have a common singular system indexed by a finite or countable set $J$: $(x_j)_{j\in J}$, $(y_j)_{j\in J}$, and $(z_j)_{j\in J}$ are orthonormal bases of $\overline{R(F^*)}$, $\overline{R(F)}=\overline{R(G^*)}$, and $\overline{R(G)}$, and $Fx_j=\lambda_jy_j$, $F^*y_j=\lambda_jx_j$, $Gy_j=\mu_jz_j$, and $G^*z_j=\mu_jy_j$ with $0<\lambda_j,\mu_j\le1$. Put $A:=G\circ F$. Let $\nu_0>2$, $1<\nu\le\nu_0-1$, $\rho>0$, $x^\dagger=|A|^\nu w$ with $\|w\|_X\le\rho$, and $z:=Ax^\dagger\ne0$; set $y^\dagger:=Fx^\dagger$. The common system gives the compatible minimum-norm factorization on this exact datum: $A^\dagger z=F^\dagger G^\dagger z=x^\dagger$ and $G^\dagger z=Fx^\dagger=y^\dagger$. For $H=F,G$, let $R^H_\eta=f^H_\eta(H^*H)H^*$ and $p^H_\eta(t):=1-tf^H_\eta(t)$. Assume finite constants $C_H,S_H,K_H>0$ satisfy $\|HR^H_\eta\|\le C_H$, $\|I-HR^H_\eta\|\le S_H$, and $\|R^H_\eta\|\le K_H\eta^{-1/2}$ for every $\eta>0$; and, for each $0<s\le\nu_0$, $\sup_{j\in J}s_{H,j}^{s}|p^H_\eta(s_{H,j}^2)|\le D_H(s)\eta^{s/2}$ for finite $D_H(s)$, where $s_{F,j}=\lambda_j$ and $s_{G,j}=\mu_j$. Fix $\tau_G>S_G$ and $\tau_F>S_FC_G$. Let $\alpha_k,\gamma_\ell>0$ be decreasing sequences with successive ratios in $[\theta,1)$ for one fixed $0<\theta<1$. For noisy data $z^\delta$ with $\|z^\delta-z\|_Z\le\delta$, choose first indices $k,\ell$ (when they exist) such that $\|GR^G_{\alpha_k}z^\delta-z^\delta\|_Z\le\tau_G\delta<\|GR^G_{\alpha_i}z^\delta-z^\delta\|_Z$ for every $i<k$, and $\|AR^F_{\gamma_\ell}R^G_{\alpha_k}z^\delta-GR^G_{\alpha_k}z^\delta\|_Z\le\tau_F\delta<\|AR^F_{\gamma_i}R^G_{\alpha_k}z^\delta-GR^G_{\alpha_k}z^\delta\|_Z$ for every $i<\ell$. For any sequence $\delta\downarrow0$ for which both selected indices exist for all sufficiently small $\delta$, there are constants $C_1,C_2$ independent of $\delta$ and $\rho$ such that, for all sufficiently small $\delta$, $\|x^\dagger-R^F_{\gamma_\ell}R^G_{\alpha_k}z^\delta\|_X\le C_1\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}+C_2\rho^{2/(\nu+1)}\delta^{(\nu-1)/(\nu+1)}.$ In particular, for fixed $\rho$ this two-stage reconstruction converges to $x^\dagger$. The statement is conditional on existence of both stopping indices and makes no claim that $(G\circ F)^\dagger=F^\dagger G^\dagger$ for arbitrary factorizations.

## Statement references

[[def-ip-composite-double-regularization|Composite estimator and order]]

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[[def-ip-power-source-set|Power source ball and minimum-norm convention]]

[[lem-ip-spectral-interpolation-for-power-source-balls|Spectral interpolation inequality]]

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse]]

[[def-hilbert-space-adjoint|Hilbert adjoint convention]]

[[thm-singular-value-decomposition-for-compact-operators|Compact-operator singular system]]

[[def-compact-spectral-filter-and-qualification|Spectral filter and residual conventions]]

[Brandt and Horn, Theorem 6, proof, and conclusion on optimality](https://arxiv.org/pdf/2610.13483)

[Clason, Theorem 5.11 and complete proof](https://arxiv.org/pdf/2001.00617)

## Facts & Assumptions

**Given:** Countable Choice; compact real or complex Hilbert maps $F:X\to Y$ and $G:Y\to Z$ with the common positive singular system in the Statement; $A=G\circ F$; $x^\dagger=|A|^\nu w$, $\|w\|\le\rho$, $z=Ax^\dagger\ne0$; the compatible minimum-norm factorization; spectral filters with the stated residual, norm, and qualification bounds; the two geometric first-crossing rules; and noisy data $\|z^\delta-z\|\le\delta$ for a sequence $\delta\downarrow0$.

[A1] [[def-countable-choice]]: Every sequence of nonempty sets admits a choice function selecting one member from each set.

[F1] [[def-ip-composite-double-regularization]]: The forward map is $A=G\circ F$ and the reconstruction applies $R^G_\alpha$ first, then $R^F_\gamma$.

[F2] [[def-ip-compact-linear-inverse-model]]: A compact Hilbert inverse model has a compact linear forward map and exact data $z=Ax^\dagger$ for a truth $x^\dagger$.

[F3] [[def-ip-power-source-set]]: $X_{\nu,\rho}(A)=\{|A|^\nu w:\|w\|\le\rho\}$, where $|A|=(A^*A)^{1/2}$; source elements lie in $(\ker A)^\perp$ and are minimum-norm representatives.

[F4] [[def-ip-unbounded-hilbert-moore-penrose-inverse]]: The inverse domain is $R(A)\oplus R(A)^\perp$, and on exact range data it returns the unique minimum-norm solution.

[F5] [[thm-singular-value-decomposition-for-compact-operators]]: A compact Hilbert operator has a positive singular system with orthonormal right and left singular families and the corresponding operator expansion.

[F6] [[def-hilbert-space-adjoint]]: The adjoint is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F7] [[def-compact-spectral-filter-and-qualification]]: For a filter family, the residual multiplier is $1-tf(t)$ and qualification bounds positive spectral powers times the absolute residual.

[F8] [[lem-ip-spectral-interpolation-for-power-source-balls]]: If $e=|H|^\nu v$, then $\|e\|\le\|He\|^{\nu/(\nu+1)}\|v\|^{1/(\nu+1)}$.

## Proof

1.1 Because $F$ and $G$ are compact, hence bounded, $A=G\circ F$ is compact: the image under $F$ of any bounded sequence is bounded, and compactness of $G$ gives a subsequence whose images under $G$ converge. Put $a_j=\lambda_j\mu_j$ and $w_j=\langle w,x_j\rangle$. The adjoint identity [F6] and the singular-vector equations show $N(F)=\{x_j:j\in J\}^{\perp}$ and $N(G)=\{y_j:j\in J\}^{\perp}$: each kernel vector is orthogonal to the indicated family, and conversely a vector orthogonal to the family is orthogonal to the full range of the adjoint, hence is killed by the operator. Since $G$ is injective on $\overline{R(F)}=\overline{R(G^*)}$ (its coefficients there are the positive $\mu_j$), $\ker A=\ker F$; hence $(x_j)$ is a basis of $N(A)^\perp$. By [F1], $Ax_j=a_jz_j$. The adjoint identity [F6] gives $A^*=F^*G^*$, so [F5] yields $A^*z_j=a_jx_j$, $A^*Ax_j=a_j^2x_j$, and $|A|x_j=a_jx_j$. The vectors $z_j$ span $\overline{R(A)}$, since the range of $A$ is generated by $Ax_j=a_jz_j$ and $a_j>0$. Compact spectral calculus and [F3] therefore give $x^\dagger=\sum_{j\in J}a_j^\nu w_jx_j$ and $z=Ax^\dagger=\sum_{j\in J}a_j^{\nu+1}w_jz_j$. The source element is perpendicular to $\ker A$, so [F4] gives $A^\dagger z=x^\dagger$. Thus $y^\dagger=Fx^\dagger$ lies in $N(G)^\perp$ and $x^\dagger$ lies in $N(F)^\perp$; since $Gy^\dagger=z$ and $Fx^\dagger=y^\dagger$, the minimum-norm property [F4] gives $G^\dagger z=y^\dagger$ and $F^\dagger y^\dagger=x^\dagger$. Finally, $v:=\sum_j\lambda_j^{\nu+1}w_jy_j$ satisfies $y^\dagger=|G|^\nu v$ and $\|v\|^2=\sum_j\lambda_j^{2\nu+2}|w_j|^2\le\|w\|^2\le\rho^2$. [given, A1, F1, F2, F3, F4, F5, F6, algebra, construct]

2.1 Let $e_G:=R^G_\alpha z-y^\dagger$. On each $y_j$, $I_Y-R^G_\alpha G$ has multiplier $p^G_\alpha(\mu_j^2)$, whose absolute value is at most $S_G$ because $I_Z-GR^G_\alpha$ has that same multiplier on $z_j$. Thus $e_G=-|G|^\nu p^G_\alpha(G^*G)v=|G|^\nu v'$ with $\|v'\|\le S_G\|v\|\le S_G\rho$. Also $Ge_G=GR^G_\alpha z-z$. The difference between the exact and noisy first residuals is $(GR^G_\alpha-I_Z)(z-z^\delta)$, of norm at most $S_G\delta$; the stopping inequality therefore gives $\|Ge_G\|\le(\tau_G+S_G)\delta$. Applying [F8] to $e_G=|G|^\nu v'$ proves $\|R^G_\alpha z-y^\dagger\|\le((\tau_G+S_G)\delta)^{\nu/(\nu+1)}(S_G\rho)^{1/(\nu+1)}$. [given, step 1.1, F3, F7, F8, algebra]

2.2 Put $e_A:=x^\dagger-R^F_\gamma R^G_\alpha z$. On the common singular system, $R^F_\gamma R^G_\alpha A$ has multiplier $(1-p^F_\gamma(\lambda_j^2))(1-p^G_\alpha(\mu_j^2))$. The bounds on $FR^F_\gamma$ and $GR^G_\alpha$ bound the two factors by $C_F,C_G$; on $N(A)$ the product with $A$ is zero. Therefore $e_A=|A|^\nu u$ with $u=(I-R^F_\gamma R^G_\alpha A)w$ and $\|u\|\le(1+C_FC_G)\rho$. The same coefficient formula, now on $Z$, gives $\|AR^F_\gamma R^G_\alpha\|\le C_FC_G$. The exact composite residual decomposes as $(z-z^\delta)+(z^\delta-GR^G_\alpha z^\delta)+(GR^G_\alpha z^\delta-AR^F_\gamma R^G_\alpha z^\delta)+AR^F_\gamma R^G_\alpha(z^\delta-z)$. These four terms have norms at most $\delta,\tau_G\delta,\tau_F\delta,C_FC_G\delta$, respectively, by the noise bound, the two stopping rules, and the composite operator bound. Since $Ae_A=z-AR^F_\gamma R^G_\alpha z$, it follows that $\|Ae_A\|\le(1+\tau_G+\tau_F+C_FC_G)\delta$. Applying [F8] to $e_A=|A|^\nu u$ proves $\|e_A\|\le C_1\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}$. [given, step 1.1, F1, F3, F7, F8, algebra]

2.3 Replace $D_H(\nu+1)$ by $\max\{D_H(\nu+1),0\}+1$ for $H=F,G$; the qualification bounds remain valid and these constants are positive. Define $q_\gamma(h):=AR^F_\gamma R^G_\alpha h-GR^G_\alpha h$. Its common-system multiplier on $z_j$ is $-p^F_\gamma(\lambda_j^2)(1-p^G_\alpha(\mu_j^2))$. Since $a_j^{\nu+1}=\lambda_j^{\nu+1}\mu_j^{\nu+1}$, qualification at $s=\nu+1$, $\mu_j\le1$, and $|1-p^G_\alpha(\mu_j^2)|\le C_G$ give $\|q_\gamma(z)\|\le D_F(\nu+1)C_G\rho\,\gamma^{(\nu+1)/2}$. On arbitrary noise coordinates, $|p^F_\gamma(\lambda_j^2)|\le S_F$ and $|1-p^G_\alpha(\mu_j^2)|\le C_G$, so $\|q_\gamma(z^\delta-z)\|\le S_FC_G\delta$. Let $\ell_0$ denote the first index of $(\gamma_\ell)$. If $\ell>\ell_0$, the preceding noisy discrepancy is greater than $\tau_F\delta$; subtracting the noise bound gives $\|q_{\gamma_{\ell-1}}(z)\|>(\tau_F-S_FC_G)\delta$. The exact-data bound just proved then yields $\gamma_{\ell-1}>[(\tau_F-S_FC_G)/(D_F(\nu+1)C_G)]^{2/(\nu+1)}(\delta/\rho)^{2/(\nu+1)}$, and $\gamma_\ell\ge\theta\gamma_{\ell-1}$ gives the same lower bound with factor $\theta$. Hence $\|R^F_{\gamma_\ell}\|\le K_F/\sqrt{\gamma_\ell}\le C''\rho^{1/(\nu+1)}\delta^{-1/(\nu+1)}$. If $\ell=\ell_0$, then $\gamma_\ell=\gamma_{\ell_0}$ is fixed. The common system and $\lambda_j,\mu_j\le1$ give $\|A\|\le1$, so $0<\delta<\|z\|=\||A|^{\nu+1}w\|\le\rho$ for all sufficiently small $\delta$. Thus $(\rho/\delta)^{1/(\nu+1)}\ge1$, and $\|R^F_{\gamma_{\ell_0}}\|\le K_F/\sqrt{\gamma_{\ell_0}}\le C''(\rho/\delta)^{1/(\nu+1)}$ after enlarging $C''$. [given, step 1.1, F3, F7, algebra]

3.1 Let $k_0$ denote the first index of $(\alpha_k)$. If $k>k_0$, the preceding noisy residual is greater than $\tau_G\delta$. Its difference from the exact-data residual is $(GR^G_{\alpha_{k-1}}-I_Z)(z-z^\delta)$, of norm at most $S_G\delta$, so $\|GR^G_{\alpha_{k-1}}z-z\|>(\tau_G-S_G)\delta$. Expanding $z=G|G|^\nu v$ in the common basis and applying the qualification bound at $s=\nu+1$ gives $\|GR^G_{\alpha_{k-1}}z-z\|\le D_G(\nu+1)\rho\,\alpha_{k-1}^{(\nu+1)/2}$. Thus $\alpha_{k-1}>[(\tau_G-S_G)/D_G(\nu+1)]^{2/(\nu+1)}(\delta/\rho)^{2/(\nu+1)}$, and $\alpha_k\ge\theta\alpha_{k-1}$ gives the same lower bound for $\alpha_k$ with the extra factor $\theta$. Consequently $\|R^G_{\alpha_k}(z^\delta-z)\|\le K_G\delta/\sqrt{\alpha_k}\le C\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}$, where $C$ is independent of $\rho,\delta$. If $k=k_0$, then $\alpha_k=\alpha_{k_0}$ is fixed. Since $\rho>0$, we have $\delta\le\rho$ for all sufficiently small $\delta$, and hence $\|R^G_{\alpha_{k_0}}(z^\delta-z)\|\le K_G\delta/\sqrt{\alpha_{k_0}}\le K_G\alpha_{k_0}^{-1/2}\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}$. Combining this noise bound with step 2.1 and the triangle inequality gives $\|R^G_{\alpha_k}z^\delta-y^\dagger\|\le C'\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}$. [given, step 2.1, F7, algebra]

4.1 The exact/noisy decomposition is $x^\dagger-R^F_{\gamma_\ell}R^G_{\alpha_k}z^\delta=e_A+R^F_{\gamma_\ell}R^G_{\alpha_k}(z-z^\delta)$. By linearity, $\|R^G_{\alpha_k}(z-z^\delta)\|\le\|R^G_{\alpha_k}z-y^\dagger\|+\|R^G_{\alpha_k}z^\delta-y^\dagger\|$, and these terms are bounded by steps 2.1 and 3.1. Combining those estimates with the exact composite bias from step 2.2 and the outer norm bound from step 2.3 gives the two terms in the Statement, with constants independent of $\delta$ and $\rho$. Since $\nu>1$, both powers of $\delta$ are positive, so the error tends to zero for fixed $\rho$. [given, step 2.1, step 2.2, step 2.3, step 3.1, F1, algebra] ∎

