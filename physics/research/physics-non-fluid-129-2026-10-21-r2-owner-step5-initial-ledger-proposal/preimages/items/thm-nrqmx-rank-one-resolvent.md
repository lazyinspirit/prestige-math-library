---
id: thm-nrqmx-rank-one-resolvent
kind: theorem
domain: mathematics
library: mathematics
title: Rank-one resolvent and bound-state equation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - thm-kato-rellich
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
  - thm-self-adjoint-resolvent-estimate
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-real-and-complex-inner-product-space
  - def-axiom-of-choice
dependency_roles:
  thm-kato-rellich: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. Albeverio and P. Kurasov, Singular Perturbations of Differential
        Operators: Solvable Schrödinger Type Operators"
      url: https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf
      locator: "Chapter 1, §1.1.1, Theorem 1.1.1 and proof, printed pp.9-10: rank-one
        resolvent formula for a bounded perturbation of a possibly unbounded
        self-adjoint operator."
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.2, printed pp.14-15: Kato-Rellich theorem used for the
        bounded symmetric perturbation interface."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $H_0$ be a self-adjoint operator on a complex
Hilbert space $H$, with inner product linear in its first variable and
$\inf\sigma(H_0)>-\infty$. Let $g\in H$, $\lambda\in\mathbb R$, and define
$P_g:H\to H$ by $P_gf=\langle f,g\rangle g$. Put
$H_\lambda=H_0+\lambda P_g$ on $D(H_\lambda)=D(H_0)$ and
$R_0(z)=(H_0-zI)^{-1}$. Then $H_\lambda$ is self-adjoint. For every
$z\in\rho(H_0)$ such that
$d_\lambda(z):=1+\lambda\langle R_0(z)g,g\rangle\ne0$, one has
$z\in\rho(H_\lambda)$ and
$$R_\lambda(z):=(H_\lambda-zI)^{-1}=R_0(z)-\frac{\lambda R_0(z)P_gR_0(z)}{1+\lambda\langle R_0(z)g,g\rangle}.$$
For real $E<\inf\sigma(H_0)$ and $g\ne0$, $E$ is an eigenvalue of $H_\lambda$
if and only if $d_\lambda(E)=0$; in that case the eigenspace is one-dimensional.

## Statement references

[[thm-kato-rellich]]

[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]

## Facts & Assumptions

**Given:** The self-adjoint lower-semibounded operator $H_0$, its domain,
$g\in H$, real $\lambda$, and the rank-one map $P_g$ defined in the Statement.

[A1] The resolvent set consists of those $z$ for which $H_0-zI:D(H_0)\to H$
is bijective with bounded inverse; for self-adjoint $H_0$, each real
$E<\inf\sigma(H_0)$ belongs to the resolvent set
([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
[[thm-self-adjoint-resolvent-estimate]]).

[F1] Kato–Rellich: a symmetric perturbation with relative operator bound less
than one preserves self-adjointness on the original operator domain
([[thm-kato-rellich]]).

[F2] Cauchy–Schwarz gives
$|\langle f,g\rangle|\le\|f\|\|g\|$, and the inner product is linear in
its first argument ([[thm-cauchy-schwarz-in-an-inner-product-space]],
[[def-real-and-complex-inner-product-space]]).

[A2] Kato–Rellich assumes the Axiom of Choice; the self-adjoint resolvent
input assumes Countable Choice. The stated AC hypothesis supplies the latter:
for any sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets, apply AC to
$\mathcal F=\{X_n:n\in\mathbb N\}$ to obtain a choice function $c$; then
$f(n)=c(X_n)\in X_n$ for every $n$, which is Countable Choice
([[def-axiom-of-choice]]).

## Proof

**Given:** [A1], [A2], $P_gf=\langle f,g\rangle g$, and the operators in the
Statement.

1.1 For every $f\in H$, [F2] gives $\|P_gf\|=|\langle f,g\rangle|\|g\|\le\|g\|^2\|f\|$. Also $\langle P_gf,h\rangle=\langle f,g\rangle\langle g,h\rangle =\langle f,P_gh\rangle$, so $P_g$ is bounded and self-adjoint, including $g=0$. Thus $\lambda P_g$ is symmetric on $D(H_0)$ with relative bound zero; [F1] implies that $H_\lambda$ is self-adjoint on $D(H_0)$. [A2, F1, F2, given]

1.2 Fix $z\in\rho(H_0)$ and write $R_0=R_0(z)$, $m=\langle R_0g,g\rangle$, and $X=R_0P_g$. Then $Xf=\langle f,g\rangle R_0g$ and $X^2f=\langle f,g\rangle\langle R_0g,g\rangle R_0g=mXf$; hence $X^2=mX$. If $d=1+\lambda m\ne0$, direct multiplication gives $(I+\lambda X)^{-1}=I-\lambda X/d$. [A1, given, algebra]

2.1 Define $S=(I-\lambda X/d)R_0$. Its range is contained in $D(H_0)$. Since $P_gR_0P_g=mP_g$, on $D(H_0)$ one has $S(H_\lambda-zI)=(I-\lambda X/d)(I+\lambda X)=I$. On $H$ one has $(H_\lambda-zI)S=I-\lambda P_gR_0/d+\lambda P_gR_0 -\lambda^2mP_gR_0/d=I$, using $d=1+\lambda m$. Thus $S$ is a bounded two-sided inverse from $H$ onto $D(H_\lambda)$, and its expansion is the stated resolvent formula. [step 1.2, A1, algebra]

3.1 Let $E<\inf\sigma(H_0)$ be real. By [A1], $R_0(E)$ exists. If $H_\lambda u=Eu$ with $u\ne0$, then $u=-\lambda\langle u,g\rangle R_0(E)g$. The coefficient $\langle u,g\rangle$ cannot be zero, because that would give $u=0$; applying $\langle\cdot,g\rangle$ therefore yields $1+\lambda\langle R_0(E)g,g\rangle=0$. Conversely, if this scalar is zero, then $u=R_0(E)g\ne0$ and $(H_\lambda-EI)u=g+\lambda\langle R_0(E)g,g\rangle g=0$. Every eigenvector satisfies the same scalar-multiple formula for $R_0(E)g$, so the eigenspace is one-dimensional. [A1, step 1.1, step 1.2, algebra] ∎
