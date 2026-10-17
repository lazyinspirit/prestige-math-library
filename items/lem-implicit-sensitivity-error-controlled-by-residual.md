---
id: lem-implicit-sensitivity-error-controlled-by-residual
kind: lemma
title: "An implicit sensitivity evaluated at an approximate state has a local residual bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [thm-euclidean-implicit-function-theorem, thm-mean-value-inequality-for-total-derivatives, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6 and proof, §8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
    - title: "J. Lebl, Basic Analysis I, Theorem 8.3.7 and proof, §8.3.1"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
dependency_level: 0
---

## Statement

Let $R(z,\theta)$ be $C^2$ near an exact solution $R(z_*,\theta_0)=0$, with $A(z)=R_z(z,\theta_0)$ invertible and $B(z)=R_\theta(z,\theta_0)$. The implicit sensitivity at a state $z$ is $S(z)=-A(z)^{-1}B(z)$. Suppose the local inverse $\Psi$ of $z\mapsto R(z,\theta_0)$, supplied near $z_*$ by the implicit function theorem, is defined on a convex residual neighborhood containing $0$ and $r=R(\tilde z,\theta_0)$, with $\|D\Psi(y)\|\le\kappa$ along their segment. Suppose also that the segment from $z_*$ to $\tilde z=\Psi(r)$ lies in a convex neighborhood where $\|A(z)^{-1}\|\le M$, $\|B(z)\|\le B_0$, and $A,B$ are Lipschitz with constants $L_A,L_B$. Then
$$\|S(\tilde z)-S(z_*)\|\le\kappa\bigl(M^2L_AB_0+ML_B\bigr)\|r\|.$$
This bounds the implicit sensitivity formula evaluated at an approximate state. It is not by itself a bound for the derivative of a stopped iteration.

## Facts & Assumptions

**Given:** The exact root, local inverse chart, residual, inverse-norm and Lipschitz bounds in the statement.

[F1] [[thm-euclidean-implicit-function-theorem]]: if the state Jacobian of a $C^1$ residual is invertible at a zero, there is a local $C^1$ solution branch and its derivative formula; applying the theorem to $R(z,\theta_0)-r=0$ gives the local inverse $\Psi(r)$.

[F2] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a uniform derivative bound $\|Df(z)v\|\le M\|v\|$ implies $\|f(y)-f(x)\|\le M\|y-x\|$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the derivatives at the corresponding points.

[A1] The residual segment lies inside the inverse chart and the state segment lies inside the neighborhood where all stated bounds hold.

## Proof

**Proof technique:** first control state error by residual, then perturb the inverse-Jacobian formula.

1.1 For $0<t<1$, put $\gamma(t)=\Psi(tr)$. By [F1] and [F3], $\gamma$ is differentiable and $\|\gamma'(t)\|=\|D\Psi(tr)r\|\le\kappa\|r\|$. For $0<\varepsilon<1/2$, apply [F2] to $\gamma$ on the convex open interval $(0,1)$ at $\varepsilon$ and $1-\varepsilon$ to obtain $\|\Psi((1-\varepsilon)r)-\Psi(\varepsilon r)\|\le\kappa(1-2\varepsilon)\|r\|$. Letting $\varepsilon\downarrow0$ and using continuity of $\Psi$ at $0$ and $r$ gives $\|\tilde z-z_*\|\le\kappa\|r\|$. [F1, F2, F3, A1, given]

1.2 Put $A=A(\tilde z)$, $A_*=A(z_*)$, $B=B(\tilde z)$, and $B_*=B(z_*)$. The identities $S(\tilde z)-S(z_*)=(A_*^{-1}-A^{-1})B+A_*^{-1}(B_*-B)$ and $A_*^{-1}-A^{-1}=A^{-1}(A-A_*)A_*^{-1}$ follow by expansion and multiplication. [given, algebra]

2.1 The inverse bounds, $B$ bound, and Lipschitz bounds give $\|A_*^{-1}-A^{-1}\|\le M^2L_A\|\tilde z-z_*\|$ and $\|B_*-B\|\le L_B\|\tilde z-z_*\|$. The triangle and product inequalities then yield $\|S(\tilde z)-S(z_*)\|\le(M^2L_AB_0+ML_B)\|\tilde z-z_*\|$. [A1, step 1.2, given, algebra]

3.1 Substitute step 1.1 into step 2.1 to obtain the asserted residual bound. If $r=0$, local uniqueness gives $\tilde z=z_*$ and the same inequality reads $0\le0$. [F1, step 1.1, step 2.1, algebra] ∎
