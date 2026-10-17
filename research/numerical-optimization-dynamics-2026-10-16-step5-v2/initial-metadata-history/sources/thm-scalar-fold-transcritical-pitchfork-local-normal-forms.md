---
id: thm-scalar-fold-transcritical-pitchfork-local-normal-forms
kind: theorem
title: Scalar fold, transcritical, and symmetric pitchfork equilibrium branches
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - thm-newton-leibniz-with-interior-derivative
  - thm-intermediate-value
  - thm-chain-rule-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.2–3.3, printed pp. 80–86, scalar fold hypotheses and local curve
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 1–2, printed pp. 1–30, local one-parameter equilibrium bifurcations and pitchfork symmetry example
verification:
  precheck: pass
---

## Statement

Let $F(x,\lambda)$ be a real $C^5$ scalar function near $(0,0)$, with equilibria defined by $F(x,\lambda)=0$.

1. A **fold** occurs if $F(0,0)=F_x(0,0)=0$ and $F_\lambda(0,0)F_{xx}(0,0)\ne0$. Its local equilibrium set is a unique curve $\lambda=\phi(x)$ with
$$\phi'(0)=0,\qquad \phi''(0)=-\frac{F_{xx}(0,0)}{F_\lambda(0,0)}\ne0.$$
For $\lambda$ sufficiently close to zero, there are exactly two nearby equilibria on the side where $\lambda\phi''(0)>0$, one at $\lambda=0$, and none on the opposite side.

2. A **transcritical bifurcation** occurs if $F(0,\lambda)=0$ for all small $\lambda$, $F_x(0,0)=0$, and $F_{x\lambda}(0,0)F_{xx}(0,0)\ne0$. The local equilibria are exactly the trivial branch $x=0$ and a second branch $x=\psi(\lambda)$ with
$$\psi(0)=0,\qquad \psi'(0)=-\frac{2F_{x\lambda}(0,0)}{F_{xx}(0,0)}\ne0.$$
The two branches cross transversely.

3. A **pitchfork bifurcation** occurs if $F(-x,\lambda)=-F(x,\lambda)$ for all nearby $(x,\lambda)$, $F_x(0,0)=F_{xx}(0,0)=0$, and $F_{x\lambda}(0,0)F_{xxx}(0,0)\ne0$. The trivial equilibrium $x=0$ persists. A pair of nontrivial equilibria $x=\pm r(\lambda)$ exists on exactly the side where $\lambda\phi''(0)>0$, with
$$\phi''(0)=-\frac{F_{xxx}(0,0)}{3F_{x\lambda}(0,0)}\ne0,$$
and there are no nontrivial equilibria on the opposite side.

## Facts & Assumptions

**Given:** A scalar $C^5$ function $F$ and the relevant hypotheses in the Statement.

[F1] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: for a $C^k$ scalar equation with $k\ge1$, a nonzero derivative in the solved scalar variable gives a unique local $C^k$ solution branch containing every nearby zero.

[F2] [[thm-simple-fold-lyapunov-schmidt-parameterization]]: in the scalar case $n=1$, if $F=F_x=0$, $F_\lambda\ne0$, and $F_{xx}\ne0$, there is a unique local $C^3$ solution curve $(x(s),\lambda(s))$ with $x'(0)=1$, $\lambda'(0)=0$, and $\lambda''(0)=-F_{xx}/F_\lambda$.

[F3] [[thm-newton-leibniz-with-interior-derivative]]: for $C^1$ scalar $g$, $g(x)-g(0)=\int_0^x g'(s)\,ds$.

[F4] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions are computed by the chain rule.

[F5] [[thm-intermediate-value]]: a continuous real function on a closed interval attains every value between its endpoint values.

## Proof

**Given:** $F$ and the hypotheses for the case being proved.

1.1 In the fold case choose $n=1$, $v=w=1$ in [F2]. Its hypotheses are exactly $F(0,0)=F_x(0,0)=0$ and $F_\lambda F_{xx}\ne0$. Thus all nearby equilibria lie on a unique curve $\lambda=\phi(x)$ with the stated first and second derivatives. [F2, given]

1.2 For the transcritical and pitchfork cases define $G(x,\lambda):=\int_0^1 F_x(tx,\lambda)\,dt$. Because $F(0,\lambda)=0$ in both cases, [F3] and the change of variable $s=tx$ give $F(x,\lambda)=xG(x,\lambda)$. Since $F\in C^5$, the derivatives of $F_x(tx,\lambda)$ through order four are continuous jointly in $(t,x,\lambda)$; on compact parameter neighborhoods their difference quotients converge uniformly in $t\in[0,1]$, so they may be integrated termwise. Thus $G\in C^4$, with $G_x=\int_0^1tF_{xx}(tx,\lambda)\,dt$, $G_\lambda=\int_0^1F_{x\lambda}(tx,\lambda)\,dt$, and $G_{xx}=\int_0^1t^2F_{xxx}(tx,\lambda)\,dt$. [F3, given, construct]

2.1 In the fold case, since $\phi''(0)\ne0$ and $\phi''$ is continuous, shrink $\delta>0$ so $\phi''$ has the constant sign of $c:=\phi''(0)$ on $[-\delta,\delta]$. By [F3], $\phi'(x)=\int_0^x\phi''(s)\,ds$, so $\phi'(x)$ has the sign of $cx$; hence $\phi$ is strictly monotone on each half-interval. Also $\phi(x)=\int_0^x\phi'(s)\,ds$ has the sign of $c$ for every $x\ne0$. Thus $\phi(-\delta)$ and $\phi(\delta)$ are nonzero and have sign $c$. Every sufficiently small nonzero level with $\lambda c>0$ lies strictly between zero and each endpoint value, so [F5] and strict monotonicity give exactly one solution on each half-interval; no level of the opposite sign is attained. [F2, F3, F5, step 1.1, given, algebra]

2.2 In the transcritical case, the derivative formulas from step 1.2 give $G(0,0)=F_x(0,0)=0$, $G_x(0,0)=F_{xx}(0,0)/2\ne0$, and $G_\lambda(0,0)=F_{x\lambda}(0,0)\ne0$. Apply [F1] with $k=4$, solving $G=0$ for $x=\psi(\lambda)$; differentiating gives $\psi'(0)=-G_\lambda/G_x=-2F_{x\lambda}/F_{xx}$. Since $F=xG$, every nearby zero lies on at least one of the branches $x=0$ or $x=\psi(\lambda)$; at their common point $(0,0)$ they coincide, and elsewhere sufficiently near zero they are distinct. Their distinct tangent slopes make them transverse. [F1, F4, step 1.2, given, algebra]

2.3 In the pitchfork case, oddness of $F$ makes $G$ even in $x$. The derivative formulas from step 1.2 give $G(0,0)=0$, $G_x(0,0)=0$, $G_\lambda(0,0)=F_{x\lambda}(0,0)\ne0$, and $G_{xx}(0,0)=F_{xxx}(0,0)/3\ne0$. By [F1] with $k=4$, $G=0$ is a unique local curve $\lambda=\phi(x)$, with $\phi'(0)=0$ and $\phi''(0)=-G_{xx}/G_\lambda=-F_{xxx}/(3F_{x\lambda})$. Evenness of $G$ and uniqueness imply $\phi(-x)=\phi(x)$. [F1, F4, step 1.2, given, algebra]

3.1 Shrink the interval so $\phi''$ has the sign of $\phi''(0)$. Then $\phi$ is strictly monotone for $x>0$, and by evenness it has exactly one positive and one negative solution of $\phi(x)=\lambda$ on the side $\lambda\phi''(0)>0$, and no nonzero solution on the other side. Since $F=xG$, these are exactly the two nontrivial equilibria in addition to the persistent branch $x=0$. [step 2.3, given, algebra] ∎
