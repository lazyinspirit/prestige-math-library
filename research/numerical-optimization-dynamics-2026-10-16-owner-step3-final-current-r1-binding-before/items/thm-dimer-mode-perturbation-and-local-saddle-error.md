---
id: thm-dimer-mode-perturbation-and-local-saddle-error
kind: theorem
title: "A separated dimer mode gives a local inexact saddle error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-budget-dimer-mode-following
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - lem-dimer-central-force-hessian-vector-error
  - thm-local-index-one-saddle-certificate-from-enclosures
  - def-ck-and-multi-index-notation-in-several-variables
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A–C, equations (2)–(3), (18), and (21): paired-force curvature estimate, rotation, and saddle translation"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (90)–(93): the local root correction is a vector Newton solve; the quantitative certificate here is proved independently"
---

## Statement

Let $d\ge2$, let $U\subseteq\mathbb R^d$ be open, and let $V\in C^4(U,\mathbb R)$ using the convention of [[def-ck-and-multi-index-notation-in-several-variables]]. Fix $x\in U$. Put $H=\nabla^2V(x)$ and suppose a validated ordered eigenvalue enclosure certifies index one with gap $\gamma>0$ as in [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]], so $\lambda_1(H)\le-\gamma$ and $\lambda_j(H)\ge\gamma$ for $j\ge2$. Let $\epsilon>0$, let $v$ be a unit direction accepted by the rotation test of [[alg-finite-budget-dimer-mode-following]], and assume the whole segment $x+[-\epsilon,\epsilon]v$ lies in $U$. Let $D_\epsilon$ be the paired-force estimate, with $\|(I-vv^T)D_\epsilon\|_2\le\tau_{\rm rot}$. Suppose each force evaluation has Euclidean error at most $\eta$ and the third derivatives of each gradient coordinate along this segment are bounded by $M_4$. Set

$$\delta:=\frac{\sqrt d\,M_4}{6}\epsilon^2+\frac{\eta}{\epsilon}.$$

If $\delta\le\gamma/4$ and the measured Rayleigh estimate $v^TD_\epsilon\le-\gamma/2$, then the sine of the angle from $v$ to the lowest-eigenvalue line of $H$ satisfies

$$\sin\angle(v,q_1):=\sqrt{1-|q_1^Tv|^2}\le\frac{4(\tau_{\rm rot}+\delta)}{5\gamma},$$

where $q_1$ is any unit eigenvector for $\lambda_1(H)$. This is a conditional mode bound; rotation success alone is not an index certificate.

Let $\epsilon_g=\|\nabla V(x)\|_2$. If $\epsilon_g=0$, $x$ itself is an index-one critical point. If $\epsilon_g>0$, put $\rho=2\epsilon_g/\gamma$ and additionally assume $B_2(x,2\rho)\subset U$, $H(\cdot)=\nabla^2V(\cdot)$ is $L$-Lipschitz on that ball, and $L\rho/\gamma\le1/2$. Then there is a unique index-one critical point $x_*$ in $\overline B_2(x,\rho)$ and

$$\|x_*-x\|_2\le\rho=\frac{2\epsilon_g}{\gamma}.$$

The dimer direction bound does not replace the validated eigenvalue enclosure or the residual, inverse, and Hessian-Lipschitz conditions in this local saddle certificate.

## Facts & Assumptions

**Given:** The potential and point, validated ordered eigenvalue enclosure, accepted unit dimer direction, paired-force estimate and error data, gradient residual, and (when $\epsilon_g>0$) the local Hessian-Lipschitz hypotheses in the Statement.

[A1] The validated intervals establish $\lambda_1(H)\le-\gamma$ and $\lambda_j(H)\ge\gamma$ for $j\ge2$ ([[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]).

[A2] The dimer rotation test has accepted $v$ with $\|(I-vv^T)D_\epsilon\|_2\le\tau_{\rm rot}$, and $v^TD_\epsilon\le-\gamma/2$.

[A3] The force errors and third-derivative bound give the stated value $\delta$.

[A4] For the local saddle conclusion with $\epsilon_g>0$, the stated ball, Hessian-Lipschitz, and radius hypotheses hold.

[F1] Since $V\in C^4$, it is $C^2$; [[cor-hessian-is-symmetric]] makes $H$ symmetric, hence self-adjoint in the standard Euclidean inner product, so [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] gives an orthonormal eigenbasis.

[F2] [[lem-dimer-central-force-hessian-vector-error]]: $\|D_\epsilon-Hv\|_2\le\delta$ under the stated paired-force and derivative-error bounds.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for a unit vector $v$, $|v^Tw|\le\|w\|_2$; orthogonal projection $I-vv^T$ does not increase Euclidean norm, by the orthogonal decomposition into parallel and perpendicular parts.

[F4] [[thm-local-index-one-saddle-certificate-from-enclosures]]: the eigenvalue gap, gradient residual, inverse bound, and local Hessian-Lipschitz/radius conditions give the stated unique nearby index-one critical point.



## Proof

**Proof technique:** direct.

1.1 By [F1], choose an orthonormal eigenbasis $q_1,\ldots,q_d$ for $H$, ordered so that their eigenvalues are $\lambda_1\le\cdots\le\lambda_d$. Since $v$ is unit, write $v=\sum_{j=1}^d c_jq_j$ with $\sum_jc_j^2=1$. [A1, F1, given]

2.1 Put $\mu=v^THv$. From [F2] and [F3], $|v^T(D_\epsilon-Hv)|\le\delta$, so $\mu\le v^TD_\epsilon+\delta\le-\gamma/2+\gamma/4=-\gamma/4$. [A2, A3, F2, F3, step 1.1, algebra]

3.1 Since $v^THv=\mu$, $(I-vv^T)Hv=(H-\mu I)v$. By [A2], [F2], and the projection bound in [F3], $\|(H-\mu I)v\|_2\le\|(I-vv^T)D_\epsilon\|_2+\|(I-vv^T)(Hv-D_\epsilon)\|_2\le\tau_{\rm rot}+\delta$. [A2, A3, F2, F3, step 2.1, algebra]

4.1 For every $j\ge2$, [A1] and step 2.1 give $\lambda_j-\mu\ge\gamma+\gamma/4=5\gamma/4$. Expanding step 3.1 in the eigenbasis from step 1.1 yields $\left(\frac{5\gamma}{4}\right)^2\sum_{j=2}^dc_j^2\le\sum_{j=2}^d(\lambda_j-\mu)^2c_j^2\le\|(H-\mu I)v\|_2^2\le(\tau_{\rm rot}+\delta)^2$. As $\sum_{j=2}^dc_j^2=1-|q_1^Tv|^2$, taking nonnegative square roots proves the stated sine-angle bound. [A1, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $\epsilon_g=0$, the zero-residual branch of [[thm-local-index-one-saddle-certificate-from-enclosures]] and [A1] make $x$ an exact index-one critical point. If $\epsilon_g>0$, [A1] and [A4] are exactly the enclosure, residual, and neighborhood hypotheses of [F4]; applying it gives the unique index-one critical point in the radius-$\rho$ ball and the bound $\|x_*-x\|_2\le2\epsilon_g/\gamma$. This local error conclusion is independent of the mode-angle estimate and adds no global convergence claim for the finite dimer iteration. [A1, A4, F4, step 4.1, given] ∎

