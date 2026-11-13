---
id: def-se-perturbation-hypotheses
kind: definition
domain: mathematics
title: Abstract nonlinear control-space hypotheses
status: published
deps:
  - def-se-internal-systems
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - def-se-foundation-time-function-spaces
  - math:def-banach-space
  - math:def-axiom-of-choice
dependency_roles:
  def-se-internal-systems: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
---

## Definition

Assume the Axiom of Choice. Let $T>0$, $s\in[1,2]$ and $m\in\{3,5\}$. Let $\Omega$ and $H_D^s(\Omega)$ be the exterior domain and Dirichlet spectral space, let $W(t)=e^{it\Delta_D}$ be the free evolution, and let $g(z)=\lambda|z|^{m-1}z$ with $\lambda\in\mathbb R\setminus\{0\}$. Write $H=H_D^s(\Omega)$.

A control space satisfying the abstract perturbation hypotheses is a real or complex Banach space $X_T$ of $H$-valued continuous paths on $[0,T]$ whose inclusion into $C([0,T];H)$ is linear and satisfies $\|u\|_{C([0,T];H)}\leq\|u\|_{X_T}$, and for which there is one constant $C_0\geq1$ such that all of the following hold:

(i) For every $u_0\in H$, the path $t\mapsto W(t)u_0$ belongs to $X_T$ and $\|W(\cdot)u_0\|_{X_T}\leq C_0\|u_0\|_H$.

(ii) For every $f\in L^1(0,T;H)$, the retarded path $Df(t)=\int_0^t W(t-r)f(r)\,dr$, with the integral understood in the Bochner sense in $H$, is defined for each $t\in[0,T]$, belongs to $X_T$, and satisfies $\|Df\|_{X_T}\leq C_0\|f\|_{L^1(0,T;H)}$.

(iii) For every $v\in X_T$, the pointwise power expression $g(v)$ represents an element of $L^1(0,T;H)$, and for all $u,v\in X_T$,

$$\|g(v)\|_{L^1(0,T;H)}\leq C_0\|v\|_{X_T}^{m},\qquad \|g(v)-g(u)\|_{L^1(0,T;H)}\leq C_0(\|v\|_{X_T}^{m-1}+\|u\|_{X_T}^{m-1})\|v-u\|_{X_T}.$$

The same constant is required in all three conditions, although it may depend on the fixed domain, $T$, $s$, $m$ and $\lambda$. These are hypotheses on $X_T$; they do not assert that such a space exists or that any controlled equation is solvable.

## Definition references

[[def-se-internal-systems]]

[[def-se-dirichlet-scale]]

[[prop-se-scale-flow]]

[[def-se-foundation-time-function-spaces]]

[[math:def-banach-space]]

[[math:def-axiom-of-choice]]

## Justification

The domain, nonlinearity and parameter $\lambda$ are fixed by [[def-se-internal-systems]], and the spectral space and its norm by [[def-se-dirichlet-scale]]. The Axiom of Choice is retained from those inputs and the evolution supplier [[math:def-axiom-of-choice]].

A Banach space is a complete normed space over its stated scalar field [[math:def-banach-space]]. The inclusion condition therefore specifies the path represented by each element of $X_T$ and bounds every evaluation by its $X_T$ norm. The time-space conventions in [[def-se-foundation-time-function-spaces]] define norm-continuous paths, strongly measurable $L^1$ classes and Bochner integration. Condition (ii) explicitly requires the displayed integral and its $X_T$ membership; condition (iii) explicitly requires the nonlinear expression to have the stated strongly measurable integrable representative. Neither is inferred merely from pointwise notation.

The group and its strong continuity on $H$ are supplied by [[prop-se-scale-flow]], so the homogeneous path in (i) is meaningful. The three conditions prescribe bounds and membership rather than deriving them from the definitions. In particular, this definition alone does not claim that multiplication by $i$ preserves an arbitrary real $X_T$; an argument using that operation must supply the necessary property.

## Source notes

The article is cited for the formulation of assumptions (i)–(iii) in Theorem 3.7, PDF page 14. The cited local and library items provide the independent terminology; the article attribution is not used as a proof of a prerequisite or of the estimates.
