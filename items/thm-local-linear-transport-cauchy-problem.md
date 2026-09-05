---
id: thm-local-linear-transport-cauchy-problem
kind: theorem
title: "Local linear transport has a unique solution from noncharacteristic Cauchy data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-transport-characteristics-depend-c-one-on-initial-position,
       thm-continuous-dependence-of-odes-on-initial-data-and-parameters,
       def-noncharacteristic-first-order-cauchy-surface,
       thm-euclidean-inverse-function-theorem,
       thm-first-order-linear-ode-integrating-factor,
       thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Andersson, First Order PDE: The Method of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Let $a,c,f$ be $C^1$ near a point $(x_*,t_*)$, and let
$\sigma:U\subseteq\mathbb R^n\to\mathbb R^n\times\mathbb R$ be a $C^1$
parametrized hypersurface written
$\sigma(\eta)=(\gamma(\eta),\tau(\eta))$, with datum $g:U\to\mathbb R$ of
class $C^1$. Assume $\sigma(\eta_*)=(x_*,t_*)$. If $\sigma$ is
noncharacteristic at $\eta_*$, then there are
neighborhoods $V$ of $\eta_*$ and $W$ of $(x_*,t_*)$ and a unique
$u\in C^1(W)$ such that

$$u_t+a\cdot\nabla_xu+c\,u=f \quad\text{on } W,$$

and

$$u(\gamma(\eta),\tau(\eta))=g(\eta)\quad(\eta\in V).$$

## Facts & Assumptions

**Given:** $C^1$ coefficients, a $C^1$ data surface $\sigma(\eta)=(\gamma(\eta),\tau(\eta))$, datum $g$, and a base point $\eta_*$ where the surface is noncharacteristic.

[L1] Noncharacteristic first-order data mean that the transport vector $B=(a,1)$ is transverse to the parametrized surface ([[def-noncharacteristic-first-order-cauchy-surface]]).

[L2] Characteristics depend $C^1$ on their initial position and satisfy the linearized variational equation ([[lem-transport-characteristics-depend-c-one-on-initial-position]]).

[L3] A scalar linear ODE with continuous coefficients has a unique solution
given by its integrating-factor formula
([[thm-first-order-linear-ode-integrating-factor]]).

[L4] A $C^1$ map with invertible derivative at a point has a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[L5] The chain rule computes the derivative of a $C^1$ function along a
$C^1$ curve ([[thm-chain-rule-for-total-derivatives]]).

[L6] ODE solutions on one common compact interval depend jointly and
continuously on their initial data and parameters
([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the space-time vector field $\widetilde a((x,t),r):=(a(x,t),1)$ with initial time $r=0$. After shrinking near $\eta_*$, its flow $\Gamma(s;z)$ is jointly continuous, $D_z\Gamma=Y$ exists, and $Y'=D\widetilde a(\Gamma)Y$ with $Y(0,z)=I_{n+1}$. The coefficient $D\widetilde a(\Gamma(s;z))$ is jointly continuous; applying [L6] to this linear matrix ODE, with $z$ as parameter, makes $Y$ jointly continuous. Also $\partial_s\Gamma=\widetilde a(\Gamma)$ is jointly continuous. Thus $\Gamma$ is $C^1$ in $(s,z)$. Since $\sigma$ is $C^1$, $$\Phi(s,\eta):=\Gamma(s;\sigma(\eta))$$ is $C^1$, and $\Phi(0,\eta)=\sigma(\eta)$. [L2, L6, given]

2.1 At $(0,\eta_*)$, the $s$-derivative of $\Phi$ is the transport vector $$\partial_s\Phi(0,\eta_*)=\widetilde a(\sigma(\eta_*),0)=(a(x_*,t_*),1)=B(\sigma(\eta_*)).$$ For each $j$, the $\eta_j$-derivative is $\partial_{\eta_j}\Phi(0,\eta_*)=\partial_{\eta_j}\sigma(\eta_*)$ because $\Phi(0,\eta)=\sigma(\eta)$. Thus the columns of $D\Phi(0,\eta_*)$ are exactly the $n$ tangent vectors to the data surface together with the transport vector, so [L1] says that $D\Phi(0,\eta_*)$ is invertible. [L1, step 1.1]

3.1 By [L4], after shrinking domains there are neighborhoods $I$ of $0$, $V$ of $\eta_*$, and $W$ of $(x_*,t_*)$ such that $\Phi:I\times V\to W$ is a $C^1$ diffeomorphism. Write $\Gamma(\rho;\sigma(\eta))=(X(\rho;\eta),T(\rho;\eta))$. For each $\eta\in V$, [L3] gives the unique solution $z(\cdot,\eta)$ of $$\partial_s z(s,\eta)+c(X(s;\eta),T(s;\eta))z(s,\eta)=f(X(s;\eta),T(s;\eta)),\qquad z(0,\eta)=g(\eta),$$ namely $$z(s,\eta)=e^{-\int_0^s c(X(\rho;\eta),T(\rho;\eta))\,d\rho}g(\eta)+\int_0^s e^{-\int_\lambda^s c(X(\rho;\eta),T(\rho;\eta))\,d\rho}f(X(\lambda;\eta),T(\lambda;\eta))\,d\lambda.$$ The $C^1$ integrands on the compact local interval may be differentiated in $s$ and $\eta$, so $z$ is $C^1$. Define $u:=z\circ\Phi^{-1}$ on $W$. [L3, L4, step 1.1, step 2.1]

4.1 Because $\Phi(0,\eta)=\sigma(\eta)$, step 3.1 gives $u(\gamma(\eta),\tau(\eta))=g(\eta)$ for $\eta\in V$. Moreover $u(\Phi(s,\eta))=z(s,\eta)$, so [L5] and $\partial_s\Phi=(a,1)$ give $$\partial_s z(s,\eta)=u_t(\Phi(s,\eta))+a(\Phi(s,\eta))\cdot\nabla_xu(\Phi(s,\eta)).$$ Substitution into the scalar ODE for $z$ proves the transport PDE throughout $W$. If two $C^1$ solutions shared the data, [L5] would restrict each one to the same scalar IVP on every characteristic, and uniqueness in [L3] would make them agree throughout $W$. [L3, L5, step 3.1] ∎
