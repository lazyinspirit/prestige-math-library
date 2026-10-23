---
id: ex-fdmath-vacuum-momentum-degeneracy
kind: example
title: Vanishing scalar density leaves velocity undetermined by momentum
status: draft
origin: pipeline
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-conservative-weak-form
dependency_roles:
  def-fd-conservative-weak-form: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
physical_scope: null
empirical_premises: []
---

## Example

At a fixed point, let $\rho\in[0,\infty)$ be mass density and let $u\in\mathbb R^3$ be velocity. In SI units, $\rho$ is measured in $\mathrm{kg\,m^{-3}}$, $u$ in $\mathrm{m\,s^{-1}}$, and the momentum-density vector $M=\rho u$ in $\mathrm{kg\,m^{-2}\,s^{-1}}$. To use momentum density as a field in a conservative weak form, let $\Omega\subseteq\mathbb R^3$ be open and $T>0$, take measurable maps $\rho:\Omega\times[0,T)\to[0,\infty)$ and $u:\Omega\times[0,T)\to\mathbb R^3$, and require their product $U(x,t):=\rho(x,t)u(x,t)$ to be locally integrable, including near $t=0$. The vector $M$ above is a pointwise value of such a product, not itself a field. At $\rho=0$, distinct vectors $u_1\ne u_2$ both give $M=0$, so the momentum density does not determine velocity. At $\rho>0$, the relation has the unique inverse $u=M/\rho$. This is a pointwise algebraic example and makes no claim that any chosen fields solve a differential equation.

## Example references

[[def-fd-conservative-weak-form]]

## Facts & Assumptions

**Given:** A fixed point, a scalar $\rho\ge0$, and a vector $u\in\mathbb R^3$. The example tests whether the algebraic map $u\mapsto M=\rho u$ is injective.

[F1] [[def-fd-conservative-weak-form]]: a conserved field $U$ is a locally integrable vector-valued field whose conservative equation is formulated against compactly supported test functions; here $M$ is a pointwise vector, while $U(x,t)=\rho(x,t)u(x,t)$ is an admissible field only under the stated measurability and local-integrability requirements (with three components).

## Verification

1.1 Choose $u_1=0$ and $u_2=e_1$, where $e_1=(1,0,0)$. They are distinct, but at $\rho=0$ their momentum densities satisfy $\rho u_1=0=\rho u_2$. Thus the map $u\mapsto\rho u$ is not injective when $\rho=0$. [given, F1, algebra]

2.1 If $\rho>0$ and $M=\rho u$, division by the positive scalar gives the unique recovery $u=M/\rho$. Hence the failure in step 1.1 is exactly the zero-density degeneracy, not a claim about positive density. [step 1.1, given, algebra] ∎
