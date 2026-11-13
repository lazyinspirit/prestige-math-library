---
id: def-se-dirichlet-laplacian
kind: definition
domain: mathematics
title: Dirichlet Laplacian and positive shift
status: draft
deps:
  - def-se-geometry
  - def-se-foundation-integer-sobolev-notation
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:def-axiom-of-choice
  - lem-se-exterior-dirichlet-realization
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:def-strongly-continuous-one-parameter-unitary-group
  - math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - math:lem-spectral-form-domain-and-core-of-a-semibounded-operator
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-se-exterior-dirichlet-realization: mathematical-premise
  math:thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  math:thm-unbounded-borel-functional-calculus: mathematical-premise
  math:def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  math:lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
formulation_deps:
  - def-se-geometry
  - def-se-foundation-integer-sobolev-notation
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:def-axiom-of-choice
  - lem-se-exterior-dirichlet-realization
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:def-strongly-continuous-one-parameter-unitary-group
  - math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - math:lem-spectral-form-domain-and-core-of-a-semibounded-operator
argument_deps:
  - def-se-geometry
  - def-se-foundation-integer-sobolev-notation
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:def-axiom-of-choice
  - lem-se-exterior-dirichlet-realization
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:def-strongly-continuous-one-parameter-unitary-group
  - math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - math:lem-spectral-form-domain-and-core-of-a-semibounded-operator
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 4
---

## Definition

Assume the Axiom of Choice. Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact set with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Work in the complex Hilbert space $L^2(\Omega)$ of square-integrable functions modulo equality almost everywhere, with inner product $\langle u,v\rangle=\int_\Omega u\overline v\,dx$.

For $k=1,2$, $H^k(\Omega)$ consists of the $L^2$ classes whose weak derivatives of order at most $k$ are in $L^2$; $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $H^1$ norm. Define the Dirichlet Laplacian $\Delta_D$ by $D(\Delta_D)=H^2(\Omega)\cap H^1_0(\Omega)$ and $\Delta_Du=\sum_{j=1}^n\partial_j^2u$, where the derivatives are weak derivatives. Define $A=I-\Delta_D$ on the same domain.

The operator $\Delta_D$ is self-adjoint and nonpositive, and $A$ is self-adjoint with $A\ge I$ in the quadratic-form sense: $\langle Au,u\rangle\ge\|u\|_2^2$ for $u\in D(A)$. Here self-adjoint means that the densely defined operator equals its Hilbert-space adjoint, including equality of domains. Let $E_A$ be the spectral projection-valued measure of $A$. For real $s$, write $A^s$ for the spectral operator associated with the Borel function $\lambda\mapsto\max(1,\lambda)^s$. For real $t$, write $e^{it\Delta_D}$ for the bounded spectral operator associated with $\lambda\mapsto e^{it(1-\lambda)}$. These operators form the strongly continuous unitary Schrödinger group on $L^2(\Omega)$: for every $u\in L^2(\Omega)$ and $t_0\in\mathbb R$, $\lim_{t\to t_0}\|e^{it\Delta_D}u-e^{it_0\Delta_D}u\|_2=0$.

## Definition references

[[def-se-geometry]]

[[def-se-foundation-integer-sobolev-notation]]

[[math:def-sobolev-space-wkp-and-its-norm]]

[[math:def-wkp-zero-as-a-sobolev-closure]]

[[math:def-axiom-of-choice]]

[[lem-se-exterior-dirichlet-realization]]

[[math:thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[math:thm-unbounded-borel-functional-calculus]]

[[math:def-strongly-continuous-one-parameter-unitary-group]]

[[math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]

[[math:lem-spectral-form-domain-and-core-of-a-semibounded-operator]]

## Justification

The geometry and smooth-boundary convention are those of [[def-se-geometry]]. The complex weak Sobolev spaces and their norms are fixed by [[def-se-foundation-integer-sobolev-notation]] and [[math:def-sobolev-space-wkp-and-its-norm]]; [[math:def-wkp-zero-as-a-sobolev-closure]] supplies the test-function closure. In particular, the definition of $H^1_0$ does not itself assert a trace characterization.

Under the stated Choice assumption, [[lem-se-exterior-dirichlet-realization]] applies to this smooth exterior and identifies the displayed domain and action with the self-adjoint Dirichlet realization. It supplies $A\ge I$ and the nonpositivity of $\Delta_D$. Choice includes the countable-choice assumption used in the Sobolev definitions and is also assumed by the realization and spectral suppliers.

The exterior is nonempty and open, so $L^2(\Omega)$ is nonzero. The spectral theorem [[math:thm-spectral-theorem-for-unbounded-self-adjoint-operators]] therefore supplies the unique spectral measure of $A$. The spectral calculus [[math:thm-unbounded-borel-functional-calculus]] defines the stated operators, with the domain of $A^s$ consisting of those $u$ for which $\int\max(1,\lambda)^{2s}\,d(E_A)_u(\lambda)$ is finite. Applying [[math:lem-spectral-form-domain-and-core-of-a-semibounded-operator]] with the lower bound $c=1$ shows that $E_A$ is carried on $[1,\infty)$. Thus the Borel multiplier $\max(1,\lambda)^s$ agrees with the usual positive power $\lambda^s$ on the spectral support. The bounded calculus in that supplier gives the group law and adjoint formula for the exponential functions; their product with their conjugates is one, so each $e^{it\Delta_D}$ is unitary.

Applying [[math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]] to the self-adjoint $A$ on $L^2(\Omega)$ under the stated Choice assumption gives strong continuity of $t\mapsto e^{itA}u$ for every $u\in L^2(\Omega)$. The bounded spectral calculus identifies $e^{it\Delta_D}=e^{it}e^{-itA}$, because $e^{it(1-\lambda)}=e^{it}e^{-it\lambda}$. Thus for $u\in L^2(\Omega)$ and $t_0\in\mathbb R$,
$$\|e^{it\Delta_D}u-e^{it_0\Delta_D}u\|_2\le\|(e^{-itA}-e^{-it_0A})u\|_2+|e^{it}-e^{it_0}|\|u\|_2\longrightarrow0\quad(t\to t_0).$$
Together with the group law and unitarity already established, this gives a strongly continuous one-parameter unitary group in the sense of [[math:def-strongly-continuous-one-parameter-unitary-group]].

## Source notes

The article is cited for its notation and the stated Dirichlet domain. The realization and spectral conclusions above use the independently supplied mathematical items, not the article as proof.
