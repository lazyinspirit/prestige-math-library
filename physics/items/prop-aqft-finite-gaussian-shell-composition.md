---
id: prop-aqft-finite-gaussian-shell-composition
kind: proposition
domain: mathematics
library: physics
title: Successive finite Gaussian shells compose
status: "published"
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-qftx-finite-gaussian-shell-transform
  - prop-qftx-finite-gaussian-shell-semigroup
justified_by: []
forward_refs: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-finite-gaussian-shell-transform: mathematical-premise
  prop-qftx-finite-gaussian-shell-semigroup: mathematical-premise
physical_scope: Pure finite-dimensional Gaussian probability identity; no physical model realization or continuum limit is asserted.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals
      url: https://arxiv.org/pdf/1902.08652
      locator: §11.2, printed pp. 44–47, finite-dimensional Gaussian covariance and exponential moments; shell composition itself is proved from the exact local supplier.
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let $C_1,C_2$ be real symmetric positive-semidefinite $d\times d$ covariance matrices, and let $f:\mathbb R^d\to[0,\infty]$ be Borel. For a covariance matrix $C$, let $\gamma_C$ denote the centered Gaussian probability with covariance $C$, including when $C$ is singular, and define

$$
T_Cf(x):=\int_{\mathbb R^d}f(x+z)\,d\gamma_C(z).
$$

For a finite nonnegative Borel potential $V$, $0<T_C(e^{-V})(x)\le1$; define the finite nonnegative potential $V_C(x):=-\log T_C(e^{-V})(x)$. Then

$$
T_{C_2}(T_{C_1}f)(x)=T_{C_1+C_2}f(x)\qquad(x\in\mathbb R^d)
$$

as an equality in $[0,\infty]$, and

$$
e^{-(V_{C_1})_{C_2}(x)}=e^{-V_{C_1+C_2}(x)}.
$$

The Gaussian measures are normalized probabilities, so no determinant or vacuum constant appears. This is a finite-regulator composition identity; it asserts no derivative equation along a covariance path and no continuum limit.

## Statement references

[[def-qftx-finite-gaussian-shell-transform]]

[[prop-qftx-finite-gaussian-shell-semigroup]]

## Facts & Assumptions

**Given:** The Axiom of Choice; finite dimension $d\ge1$; real symmetric positive-semidefinite $C_1,C_2$; and the Borel functions in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the Gaussian-law suppliers state this assumption.

[F1] [[def-qftx-finite-gaussian-shell-transform]]: for a positive-semidefinite covariance $C$, $T_Cf(x)=\int f(x+z)\,d\gamma_C(z)$, and $e^{-V_C(x)}=T_C(e^{-V})(x)$ for finite nonnegative Borel $V$.

[F2] [[prop-qftx-finite-gaussian-shell-semigroup]]: for every nonnegative Borel $f$, $T_{C_2}(T_{C_1}f)(x)=T_{C_1+C_2}f(x)$, including singular and zero covariances.

## Proof

**Proof technique:** direct substitution into the normalized Gaussian semigroup identity.

**Given:** The hypotheses and conventions in the Statement.

1.1 Put $f_V=e^{-V}$. Since $V$ is finite, nonnegative, and Borel, $f_V$ is a nonnegative Borel function. By [F1], $e^{-V_{C_1}(x)}=T_{C_1}f_V(x)$ and $e^{-V_{C_1+C_2}(x)}=T_{C_1+C_2}f_V(x)$. [given, F1]

2.1 Apply [F2] to $f_V$ to obtain $T_{C_2}(T_{C_1}f_V)(x)=T_{C_1+C_2}f_V(x)$, with the value $+\infty$ allowed for the first equality. Substituting the two identities from step 1.1 proves both displayed conclusions. Normalization is part of [F1], and no limit or differentiation is used. [A1, F1, F2, step 1.1] ∎
