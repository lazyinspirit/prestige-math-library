---
id: thm-nrqmx-spectral-residual-certificate
kind: theorem
domain: mathematics
library: mathematics
title: Residual distance and isolated-eigenspace certificate
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - lem-scalar-and-complex-measures-from-a-pvm
  - lem-unbounded-pvm-integral-is-well-defined-and-closed
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Theo Bühler and Dietmar A. Salamon, Functional Analysis, ETH Zürich
        lecture text (2017)
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
      locator: "Chapter 6 §§6.4–6.5, printed pp.336–351: unbounded functional calculus
        and spectral PVM. The exact residual distance and selected-cluster
        inequalities are proved locally."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space and let $T=T^*$ be self-adjoint on $H$, with spectral projection-valued measure $E_T$. Let $u\in D(T)$ satisfy $\|u\|=1$, let $\lambda\in\mathbb R$, and define the residual $r=(T-\lambda I)u$. For a Borel set $\Delta\subseteq\mathbb R$, write $P_\Delta=E_T(\Delta)$. If $g>0$ and $|x-\lambda|\ge g$ for every $x\in\sigma(T)\setminus\Delta$, then

$$\operatorname{dist}(\lambda,\sigma(T))\le\|r\|,\qquad \|(I-P_\Delta)u\|\le\frac{\|r\|}{g},$$

where $\operatorname{dist}(\lambda,S)=\inf_{x\in S}|x-\lambda|$. If $\sigma(T)\setminus\Delta=\varnothing$, the second conclusion is $\|(I-P_\Delta)u\|=0$.

## Statement references

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[thm-unbounded-borel-functional-calculus]]

## Facts & Assumptions

**Given:** Choice and Countable Choice; a nonzero complex Hilbert space $H$; a self-adjoint operator $T$ with spectral PVM $E_T$; $u\in D(T)$ with $\|u\|=1$; a real $\lambda$; and a Borel set $\Delta$ and gap $g$ as in the Statement.

[A1] The Axiom of Choice and Countable Choice are the set-theoretic assumptions of the spectral theorem and scalar-measure suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] $T=\int x\,dE_T(x)$ with domain $D(T)=\{v:\int x^2\,d\mu_v(x)<\infty\}$, where $E_T$ is a regular PVM ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F2] $\mu_u(B)=\langle E_T(B)u,u\rangle$ is a positive measure of total mass $\|u\|^2=1$ ([[lem-scalar-and-complex-measures-from-a-pvm]]).

[F3] For real Borel functions, the unbounded PVM integral has its squared-integrability domain and norm identity; the Borel calculus identifies $\sigma(T)$ as the essential range of the identity function, and its proof shows $E_T(\mathbb R\setminus\sigma(T))=0$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]], [[thm-unbounded-borel-functional-calculus]]).

## Proof

1.1 By [F1] and the Borel product rule in [F3], $r=(x\mapsto x-\lambda)(T)u$. The norm identity in [F3] therefore gives $\|r\|^2=\int_{\mathbb R}|x-\lambda|^2\,d\mu_u(x)$. The measure $\mu_u$ has total mass one by [F2]. [A1, F1, F2, F3, given]

2.1 By [F3], $\mu_u$ is supported on $\sigma(T)$. Set $d=\operatorname{dist}(\lambda,\sigma(T))$. For every $x\in\sigma(T)$, $|x-\lambda|\ge d$ by the definition of infimum, so step 1.1 yields $\|r\|^2\ge d^2\mu_u(\sigma(T))=d^2$. Both sides are nonnegative, hence $d\le\|r\|$. [F2, F3, step 1.1, algebra]

3.1 Since $I-P_\Delta=E_T(\mathbb R\setminus\Delta)$, the PVM norm identity gives $\|(I-P_\Delta)u\|^2=\mu_u(\mathbb R\setminus\Delta)=\mu_u(\sigma(T)\setminus\Delta)$ by support from [F3]. On this set $|x-\lambda|\ge g$, so step 1.1 implies $\|r\|^2\ge g^2\|(I-P_\Delta)u\|^2$. Taking nonnegative square roots and dividing by $g>0$ proves the cluster estimate. If $\sigma(T)\setminus\Delta$ is empty, [F3] directly gives $\mu_u(\mathbb R\setminus\Delta)=0$, yielding the stated zero bound. [F2, F3, step 1.1, algebra] ∎

## Remarks

The residual is the continuum quantity $(T-\lambda I)u$ and requires $u\in D(T)$. A raw discrete-matrix residual is not a continuum residual unless its vector and operator action are shown to satisfy these domain hypotheses. The distance estimate locates some spectrum; only the separate gap-and-cluster hypothesis bounds amplitude outside a specified spectral set.
