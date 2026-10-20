---
id: lem-ridgeless-risk-decomposition
kind: lemma
title: Exact bias and noise decomposition of isotropic prediction risk
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-ridgeless-minimum-norm-regression
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-singular-value-decomposition
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $n,p\ge1$, let $X\in\mathbb R^{n\times p}$ and $\beta\in\mathbb R^p$
be deterministic, and let $\varepsilon\in\mathbb R^n$ and
$z_0\in\mathbb R^p$ be independent of one another and of $X$, with
$\mathbb E\varepsilon=0$, $\operatorname{Cov}(\varepsilon)=\sigma^2I_n$,
$\mathbb Ez_0=0$, and $\operatorname{Cov}(z_0)=I_p$. Set
$y=X\beta+\varepsilon$, $\widehat\beta=X^+y$,
$S=X^{\mathsf T}X/n$, and
$$\mathcal R(X):=\mathbb E_{\varepsilon,z_0}
\left[(z_0^{\mathsf T}(\widehat\beta-\beta))^2\mid X\right].$$
Then
$$\mathcal R(X)=\|(I_p-X^+X)\beta\|_2^2+
\sigma^2\operatorname{tr}((X^{\mathsf T}X)^+)
=\|(I_p-X^+X)\beta\|_2^2+
\frac{\sigma^2}{n}\operatorname{tr}(S^+).$$

## Statement references

[[def-ridgeless-minimum-norm-regression]]

[[def-moore-penrose-pseudoinverse]]

[[thm-singular-value-decomposition]]

## Facts & Assumptions

**Given:** $X,\beta,\varepsilon,z_0$ and their moment and independence
assumptions from the Statement.

[A1] The noise is independent of $X$, centered, and has covariance
$\sigma^2I_n$, so these are also its conditional first and second moments given
$X$.

[A2] The test vector is independent of $(X,\varepsilon)$, centered, and has
covariance $I_p$, so its conditional second moment given $(X,\varepsilon)$ is
$I_p$.

[F1] Every finite real matrix has a singular value decomposition
([[thm-singular-value-decomposition]]).

[F2] The Moore--Penrose pseudoinverse exists uniquely and satisfies the four
Penrose equations ([[def-moore-penrose-pseudoinverse]],
[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

## Proof

1.1 Write a rank-$q$ singular value decomposition
$X=U_qD_qV_q^{\mathsf T}$ with positive diagonal $D_q$. The four Penrose
equations and uniqueness [F2] give
$X^+=V_qD_q^{-1}U_q^{\mathsf T}$,
$I_p-X^+X=I_p-V_qV_q^{\mathsf T}$, and
$X^+(X^+)^{\mathsf T}=V_qD_q^{-2}V_q^{\mathsf T}=(X^{\mathsf T}X)^+$;
the last equality follows by checking the four equations for
$X^{\mathsf T}X=V_qD_q^2V_q^{\mathsf T}$. The same decomposition gives
$S^+=n(X^{\mathsf T}X)^+$. [given, F1, F2, algebra]

1.2 For any fixed $v\in\mathbb R^p$, [A2] gives
$\mathbb E[(z_0^{\mathsf T}v)^2\mid X,\varepsilon]
=v^{\mathsf T}I_pv=\|v\|_2^2$. Taking $v=\widehat\beta-\beta$ and then
expectation over $\varepsilon$ reduces $\mathcal R(X)$ to
$\mathbb E_\varepsilon[\|\widehat\beta-\beta\|_2^2\mid X]$.
[given, A2, algebra]

2.1 Put $Q=I_p-X^+X$. From the definition of $\widehat\beta$,
$\widehat\beta-\beta=-Q\beta+X^+\varepsilon$. Expanding the squared norm,
the cross term has conditional expectation zero by [A1], and the noise term is
$$\mathbb E_\varepsilon[\|X^+\varepsilon\|_2^2\mid X]
=\sigma^2\operatorname{tr}(X^+(X^+)^{\mathsf T})
=\sigma^2\operatorname{tr}((X^{\mathsf T}X)^+),$$
using step 1.1. Combining with step 1.2 and the scaling identity in step 1.1
proves the two displayed risk formulas. [given, A1, step 1.1, step 1.2, algebra] ∎
