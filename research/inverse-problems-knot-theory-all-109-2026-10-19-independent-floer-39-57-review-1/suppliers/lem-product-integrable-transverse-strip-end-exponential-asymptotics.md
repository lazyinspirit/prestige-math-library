---
id: lem-product-integrable-transverse-strip-end-exponential-asymptotics
kind: lemma
title: "Exponential asymptotics at product-integrable transverse strip ends"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-finite-energy-transverse-strip-end-convergence, lem-transverse-linear-strip-cauchy-riemann-isomorphism]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Transverse strip-end analysis"
---

## Statement

Assume Countable Choice and the actual finite-energy half-strip hypotheses of [[lem-finite-energy-transverse-strip-end-convergence]]. Suppose additionally that at each point $x\in L_0\cap L_1$ there is a smooth target coordinate chart $q_x$ centered at $x$, taking the two boundary submanifolds locally to
$$\mathbb R^m,\qquad \prod_{j=1}^m e^{i\theta_j(x)}\mathbb R,\qquad 0<\theta_j(x)<\pi,$$
and taking $J(s,t,\cdot)$ to the constant structure $i$ throughout that neighborhood for all source $s,t$. These are concrete geometric choice hypotheses, not moduli-space axioms.

Let $x_+$ be the end limit. On a sufficiently far tail put $v=q_{x_+}\circ u$ and $\gamma_+=\min_j(\pi-\theta_j(x_+))>0$. For every integer $k\ge0$ there is $C_k<\infty$ such that
$$\sup_{0\le t\le1}|D^k v(s,t)|\le C_k e^{-\gamma_+s}.$$
For every $0\le\delta<\gamma_+$ and every finite $k$, the map $e^{\delta s}v$ belongs to $H^k$ on a far tail. Thus all derivatives converge exponentially to the constant generator. Constructing the prescribed coordinate charts and an admissible global $J$ with these values is a separate prerequisite.

## Statement references

[[def-countable-choice]]

[[lem-finite-energy-transverse-strip-end-convergence]]

## Facts & Assumptions

**Given:** The finite-energy actual strip, its compact geometric bounds, and the stated exact product-integrable neighborhoods.

[F1] [[lem-finite-energy-transverse-strip-end-convergence]] proves actual uniform convergence to a unique intersection point and uniform first-derivative convergence to zero.

[F2] The full twisted real Fourier construction in [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] proves that on one complex coordinate with real lower boundary and $e^{i\theta}\mathbb R$ upper boundary, $\phi_n(t)=e^{-i\lambda_nt}$, $\lambda_n=\pi n-\theta$, is an orthonormal basis of $L^2([0,1];\mathbb C)$ viewed as a real Hilbert space. Integration by parts with those boundary values makes $i\partial_t$ symmetric with eigenvalues $\lambda_n$. Parseval also gives $\|f\|_2\le\gamma^{-1}\|f_t\|_2$ for smooth boundary-compatible $f$, where $\gamma=\min\{\theta,\pi-\theta\}$.

## Proof

1.1 By [F1], after some $S$ the entire tail image is in the chart about $x_+$. Its coordinate map $v$ has exact boundary values in the two given product planes and satisfies $v_s+iv_t=0$. Coordinate and Riemannian derivative norms are uniformly comparable there after shrinking the neighborhood around the limit. Thus $\int_S^\infty\int_0^1(|v_s|^2+|v_t|^2)<\infty$. Apply the slice Poincare estimate in [F2] coordinatewise and integrate in $s$; it follows that $v\in L^2([S,\infty)\times[0,1])$. This use of finite energy excludes nondecaying modes without assuming a weighted space in advance. [F1, F2, given, construct, algebra]

2.1 Expand each coordinate in the real orthonormal basis of [F2]: $$v_j(s,t)=\sum_{n\in\mathbb Z}a_{jn}(s)e^{-i\lambda_{jn}t},\qquad\lambda_{jn}=\pi n-\theta_j.$$ Its real coefficients are smooth in $s$ by differentiating their integral formula. Integration by parts in $t$ has zero real boundary form: at each edge both $v_j$ and the eigenfunction lie in its same real line. Projecting $v_s+iv_t=0$ consequently gives $$a_{jn}'+\lambda_{jn}a_{jn}=0,\qquad a_{jn}(s)=c_{jn}e^{-\lambda_{jn}(s-S)}.$$ Every mode coefficient is square-integrable in $s$ by step 1.1 and the norm-one coefficient functional. Since no $\lambda_{jn}$ is zero, this forces $c_{jn}=0$ whenever $\lambda_{jn}<0$. Parseval at $S$ gives $\sum_{j,n}|c_{jn}|^2=\|v(S,\cdot)\|_2^2<\infty$. [F2, step 1.1, construct, algebra]

3.1 All surviving eigenvalues are positive and at least $\gamma_+$. For any integer $k\ge0$ and $h=s-S\ge1$, $$\sum_{j,n:\lambda_{jn}>0}\lambda_{jn}^{2k}e^{-2\lambda_{jn}h}\le e^{-2\gamma_+h}\sum_{j,n:\lambda_{jn}>0}\lambda_{jn}^{2k}e^{-2(\lambda_{jn}-\gamma_+)}<\infty.$$ The last constant is finite because these eigenvalues are a finite union of arithmetic progressions with spacing $\pi$. Each mixed derivative of order $k$ of a Fourier term has modulus at most $|c_{jn}|\lambda_{jn}^ke^{-\lambda_{jn}h}$. Cauchy-Schwarz and step 2.1 therefore show that the differentiated series converges absolutely and uniformly for $h\ge1$, with supremum at most $C_k e^{-\gamma_+h}\|v(S,\cdot)\|_2$. The same argument at every derivative order permits termwise differentiation on smaller open tails. The undifferentiated series already equals $v$ in $L^2$ on each slice by completeness; continuity identifies it everywhere, including boundary values, and its uniformly convergent derivatives equal the actual derivatives of $v$. Absorbing the fixed factor $e^{\gamma_+S}$ gives the asserted estimates. [F2, step 2.1, construct, algebra]

4.1 Finally every derivative of $e^{\delta s}v$ up to a fixed order is a finite linear combination of $e^{\delta s}$ times derivatives from step 3.1. Its square is bounded by $C e^{-2(\gamma_+-\delta)s}$ on the tail, integrable because $\delta<\gamma_+$. This proves membership in every claimed weighted $H^k$ space. The argument proves exponential asymptotics of actual strips for the stated exact local geometric choice and supplies no global extension of that choice, index formula, or universal regularity assertion. [step 3.1, algebra] ∎
