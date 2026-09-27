---
id: fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic
kind: false-statement
title: Cohomologous symplectic forms on a noncompact manifold are always isotopic
status: published
origin: pipeline
deps: ["thm-moser-stability-theorem", "thm-compact-support-moser-stability-on-a-noncompact-manifold", "thm-change-of-variables-for-compact-jordan-sets", "thm-multidimensional-integral-properties", "def-real-exponential-function-and-e", "thm-exponential-addition-formula", "thm-jordan-fubini-by-sections", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, compactness discussion after Theorem 7.3, p. 45
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic). No independent judge or whole-closure certification.
    delegated_by: owner
proof_strategy: direct
---

## Statement refuted

Cohomologous symplectic forms on a noncompact manifold are always related by a
Moser isotopy.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] Compact Moser stability requires compact $M$; its noncompact replacement requires primitives with one common compact support. [[thm-moser-stability-theorem]], [[thm-compact-support-moser-stability-on-a-noncompact-manifold]].

[F2] [[thm-change-of-variables-for-compact-jordan-sets]] gives the Riemann substitution formula for an injective $C^1$ map with invertible derivative on a compact Jordan set. [[thm-multidimensional-integral-properties]] gives monotonicity and coordinate-slice additivity on rectangles.

[F3] For $u\geq0$, the nonnegative power-series terms give $\exp(u)\geq1+u$ ([[def-real-exponential-function-and-e]]). The addition formula gives $\exp(-u)=1/\exp(u)$ ([[thm-exponential-addition-formula]]). Thus $0<\exp(-t^2)\leq1$ for every real $t$, and $\exp(-t^2)\leq t^{-2}$ when $|t|\geq1$.

[F4] [[thm-jordan-fubini-by-sections]] gives iterated integrals of continuous functions on compact rectangles. [[thm-newton-leibniz-with-interior-derivative]] integrates $t^{-2}$ on $[1,N]$ using the primitive $-1/t$.

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R^2$ let $\omega_0=dx\wedge dy=d(x\,dy)$ and $\omega_1=e^{-(x^2+y^2)}dx\wedge dy=d(F\,dy)$, where $F(x,y)=\int_0^x e^{-(s^2+y^2)}ds$. Both are symplectic and exact, hence cohomologous. [given, algebra]

2.1 First obtain a uniform finite bound using only Riemann integrals of compact rectangles. For every integer $N>1$, [F3] and [F4] give $\int_{-N}^{N}e^{-t^2}\,dt\leq2+2\int_1^Nt^{-2}\,dt=4-2/N<4$; for $N=1$ the bound is at most $2<4$ directly. The addition formula separates $e^{-(x^2+y^2)}=e^{-x^2}e^{-y^2}$, so Jordan–Fubini on $Q_N=[-N,N]^2$ gives $\int_{Q_N}e^{-(x^2+y^2)}\,dx\,dy=\left(\int_{-N}^{N}e^{-t^2}\,dt\right)^2<16$. This bound applies to every $Q_N$, without defining a total integral over the noncompact plane. [F2, F3, F4, step 1.1]

3.1 Suppose a diffeomorphism $f:\mathbb R^2\to\mathbb R^2$ pulls $\omega_1$ back to $\omega_0$. Its Jacobian is positive and satisfies $e^{-|f(z)|^2}\det Df(z)=1$. Let $K=[-10,10]^2$. The compact-Jordan change-of-variables theorem [F2] applies to $f$ on $K$ and gives $\int_{f(K)}e^{-|y|^2}\,dy=\int_K1\,dz=400$. The image $f(K)$ is compact Jordan and lies in some $Q_N$, so monotonicity and step 2.1 bound its integral by $16$, a contradiction. Thus no symplectomorphism, hence no Moser isotopy, exists. This uses compact-set substitution only; no total-area integral or noncompact change-of-variables theorem is needed. The common-support/global-flow hypothesis in [F1] is substantive. [F1, F2, step 1.1, step 2.1] ∎
