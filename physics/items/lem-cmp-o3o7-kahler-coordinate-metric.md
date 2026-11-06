---
id: lem-cmp-o3o7-kahler-coordinate-metric
kind: lemma
title: "Local complex Hessian of the multi-modulus O3/O7 coordinates"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: ZF; the argument is local algebra and uses no choice principle.
deps: []
dependency_roles: {}
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3.2, equations (3.25)–(3.27), and Appendix C.1, equations (C.1)–(C.8), PDF pp. 12–15 and 33–34."
---

## Statement

Let $r\ge1$ and $s\ge0$, let $N=(N^1,\ldots,N^s)$ be local complex coordinates on a patch in $\mathbb C^s$, and let $K_0(N,\bar N)$ be a real $C^2$ function there. Let $v^\alpha,\rho_\alpha\in\mathbb R$ for $1\le\alpha\le r$, let $\kappa_{\alpha\beta\gamma}$ be a real symmetric tensor with indices in $\{1,\ldots,r\}$, and set
$$P(v)=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma,\qquad P_\alpha=\kappa_{\alpha\beta\gamma}v^\beta v^\gamma,\qquad H_{\alpha\beta}=\kappa_{\alpha\beta\gamma}v^\gamma.$$
Assume $P>0$ and $H_{\alpha\beta}$ is invertible, with inverse $H^{\alpha\beta}$. For smooth complex functions $\zeta_\alpha(N,\bar N)$ define $\zeta^R_\alpha=\zeta_\alpha+\bar\zeta_\alpha$ and
$$T_\alpha=\frac{3i}{2}\rho_\alpha+\frac34P_\alpha(v)-\frac32\zeta_\alpha(N,\bar N).$$
On any patch where $(T_\alpha,N^A)$ are valid complex coordinates, define $K=K_0-2\log P(v(T,\bar T,N,\bar N))$ and
$$G_{\alpha\beta}=-\frac32\left(\frac{H_{\alpha\beta}}{P}-\frac32\frac{P_\alpha P_\beta}{P^2}\right),\qquad G^{\alpha\beta}=-\frac23P H^{\alpha\beta}+2v^\alpha v^\beta.$$
Then $G^{\alpha\beta}$ is the inverse of $G_{\alpha\beta}$, and the nonzero complex Hessian blocks of $K$ are
$$K_{T_\alpha\bar T_\beta}=\frac{G^{\alpha\beta}}{P^2},\qquad K_{T_\alpha\bar N^{\bar B}}=\frac32\frac{G^{\alpha\beta}}{P^2}\,\partial_{\bar N^{\bar B}}\zeta^R_\beta,$$
$$K_{N^A\bar N^{\bar B}}=K_{0,A\bar B}-\frac{3v^\alpha}{P}\,\partial_A\partial_{\bar B}\zeta^R_\alpha+\frac94\frac{G^{\alpha\beta}}{P^2}(\partial_A\zeta^R_\alpha)(\partial_{\bar B}\zeta^R_\beta).$$
Equivalently, after the coordinate change to $(v^\alpha,\rho_\alpha,N^A)$, the associated real-coordinate Hermitian quadratic form is
$$G_{\alpha\beta}dv^\alpha dv^\beta+\frac14(d\log P)^2+\left(K_{0,A\bar B}-\frac{3v^\alpha}{P}\partial_A\partial_{\bar B}\zeta^R_\alpha\right)dN^A d\bar N^{\bar B}+\frac94\frac{G^{\alpha\beta}}{P^2}\Xi_\alpha\Xi_\beta,$$
where $\Xi_\alpha=d\rho_\alpha-i\big((\partial_A\bar\zeta_\alpha)dN^A-(\partial_{\bar A}\zeta_\alpha)d\bar N^{\bar A}\big)$ and products denote the corresponding symmetric quadratic form.

## Statement references

[Grimm and Louis, §3.2 and Appendix C.1](https://arxiv.org/pdf/hep-th/0403067v3)

## Facts & Assumptions

**Given:** The real cubic $P$, its derivatives, the invertible matrix $H_{\alpha\beta}$, the real variables $v^\alpha,\rho_\alpha$, the complex coordinates $N^A$, the smooth functions $\zeta_\alpha$, and the local-coordinate hypothesis in the Statement.

[A1] The map $(v,\rho,N)\mapsto(T,N)$ is a valid local coordinate map on the chosen patch; no global invertibility is assumed.

## Proof

**Proof technique:** implicit differentiation and matrix multiplication.

**Given:** The data and local coordinate patch in the Statement.

1.1 Write $\zeta^R_\alpha=\zeta_\alpha+\bar\zeta_\alpha$. The real part of the coordinate definition is $T_\alpha+\bar T_\alpha=\frac32(P_\alpha-\zeta^R_\alpha)$. Differentiating it with respect to $T_\beta$ at fixed $(\bar T, N,\bar N)$ gives $\delta_\alpha^\beta=3H_{\alpha\gamma}\partial_{T_\beta}v^\gamma$, hence $\partial_{T_\beta}v^\alpha=\frac13H^{\alpha\beta}$. Differentiating at fixed $(T,\bar T,\bar N)$ with respect to $N^A$ gives $0=3H_{\alpha\gamma}\partial_Av^\gamma-\frac32\partial_A\zeta^R_\alpha$, hence $\partial_Av^\alpha=\frac12H^{\alpha\beta}\partial_A\zeta^R_\beta$. Conjugation gives the barred derivatives. [given, A1, algebra]

2.1 The cubic identities $P_\alpha v^\alpha=P$ and $H_{\alpha\beta}v^\beta=P_\alpha$ imply $P_\beta H^{\beta\alpha}=v^\alpha$. Hence $\partial_{T_\alpha}P=3P_\beta(\partial v^\beta/\partial T_\alpha)=v^\alpha$ and $\partial_{N^A}P=3P_\beta(\partial v^\beta/\partial N^A)=\frac32v^\alpha\partial_A\zeta^R_\alpha$. Differentiating $K=K_0-2\log P$ gives $K_{T_\alpha}=-2v^\alpha/P$ and $K_{N^A}=K_{0,A}-3v^\alpha\partial_A\zeta^R_\alpha/P$. [given, step 1.1, algebra]

3.1 Multiplying the proposed inverse by $G_{\alpha\beta}$, use $H_{\alpha\beta}v^\beta=P_\alpha$, $P_\alpha v^\alpha=P$, and $H_{\alpha\beta}H^{\beta\gamma}=\delta_\alpha^\gamma$. The coefficient of $P_\alpha v^\gamma/P$ in the product is $-3-\frac32+\frac92=0$, leaving $\delta_\alpha^\gamma$. Thus $G^{\alpha\beta}$ is the inverse of $G_{\alpha\beta}$. [given, step 2.1, algebra]

4.1 Differentiating $K_{T_\alpha}=-2v^\alpha/P$ in a barred coordinate gives
$$K_{T_\alpha\bar T_\beta}=-\frac{2H^{\alpha\beta}}{3P}+\frac{2v^\alpha v^\beta}{P^2}=\frac{G^{\alpha\beta}}{P^2},\qquad K_{T_\alpha\bar N^{\bar B}}=-\frac{H^{\alpha\gamma}\zeta^R_{\gamma,\bar B}}{P}+\frac{3v^\alpha v^\gamma\zeta^R_{\gamma,\bar B}}{P^2}=\frac32\frac{G^{\alpha\gamma}}{P^2}\zeta^R_{\gamma,\bar B}.$$
Differentiating $K_{N^A}=K_{0,A}-3v^\alpha\zeta^R_{\alpha,A}/P$ gives
$$K_{N^A\bar N^{\bar B}}=K_{0,A\bar B}-\frac{3v^\alpha}{P}\zeta^R_{\alpha,A\bar B}-\frac{3H^{\alpha\gamma}}{2P}\zeta^R_{\alpha,A}\zeta^R_{\gamma,\bar B}+\frac{9v^\alpha v^\gamma}{2P^2}\zeta^R_{\alpha,A}\zeta^R_{\gamma,\bar B}.$$
The last two terms equal $\frac94G^{\alpha\gamma}\zeta^R_{\alpha,A}\zeta^R_{\gamma,\bar B}/P^2$ by the displayed formula for $G^{\alpha\gamma}$. [given, step 1.1, step 2.1, step 3.1, algebra]

5.1 In the pullback of the Hessian blocks from step 4.1, the terms involving $dT$ and the derivatives of $\zeta^R$ factor as
$$\frac{G^{\alpha\beta}}{P^2}\left(dT_\alpha+\frac32\zeta^R_{\alpha,A}dN^A\right)\left(d\bar T_\beta+\frac32\zeta^R_{\beta,\bar B}d\bar N^{\bar B}\right).$$
Using the coordinate definition and its conjugate, the two factors are $\frac32(H_{\alpha\gamma}dv^\gamma+i\Xi_\alpha)$ and $\frac32(H_{\beta\delta}dv^\delta-i\Xi_\beta)$, respectively. Their product has no mixed $dv\,\Xi$ term because these are complex conjugates and $H,G^{\alpha\beta},v,\Xi$ are real. The $\Xi$ coefficient is $9G^{\alpha\beta}/(4P^2)$. For the $dv$ coefficient, the inverse formula in step 3.1 gives
$$\frac{9}{4P^2}G^{\alpha\beta}H_{\alpha\gamma}H_{\beta\delta}=-\frac{3H_{\gamma\delta}}{2P}+\frac{9P_\gamma P_\delta}{2P^2}=G_{\gamma\delta}+\frac14\partial_\gamma\log P\,\partial_\delta\log P,$$
since $\partial_\gamma P=3P_\gamma$. The remaining Hessian block is exactly $(K_{0,A\bar B}-3v^\alpha\zeta^R_{\alpha,A\bar B}/P)dN^A d\bar N^{\bar B}$. This proves the stated real-coordinate form. [given, step 1.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The coordinate map is only local. The lemma does not assert that the cubic-volume Hessian is invertible on every Kähler cone, or that one global prepotential or Kähler potential exists. The hypotheses also do not imply positivity: with $r=2$, $\kappa_{111}=\kappa_{122}=1$ (all other independent coefficients zero), and $v=(1,0)$, one has $P=1$ and $H=I$, but $G_{22}=-3/2$. Thus the result is a Hessian identity; additional cone hypotheses are needed to call this quadratic form a positive Kähler metric.
