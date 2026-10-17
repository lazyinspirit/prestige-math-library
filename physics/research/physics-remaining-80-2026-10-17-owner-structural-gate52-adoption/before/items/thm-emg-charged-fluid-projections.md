---
id: thm-emg-charged-fluid-projections
kind: theorem
title: Perfect-fluid exchange projections and conduction heating
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-product-connection-on-tensor-and-hom-bundles
  - lem-gr-observer-projection-decomposition
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-product-connection-on-tensor-and-hom-bundles: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.110), PDF p. 36 (printed p. 30)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Perfect-fluid tensor from its rest-frame energy density and isotropic pressure; the curved charged projections and conduction term are proved locally here."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §4.5.4, equations (4.53)–(4.55), PDF pp. 192–194 (printed pp. 185–187)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Perfect-fluid rest-frame tensor and the energy and Euler projections of stress balance; the sourced force and Ohmic current are explicit additional hypotheses here."
verification:
  precheck: pending
---

## Statement

Let $\Omega$ be an open subset of [[def-emg-matter-formal-systems]]. Let $\epsilon,p,\sigma\in C^1(\Omega,\mathbb R)$ and let $U\in C^2(\Omega,T\Omega)$ be future timelike with $g(U,U)=-c^2$. Set

$$T_m^{ab}=\frac{\epsilon+p}{c^2}U^aU^b+pg^{ab},\qquad a^b=U^a\nabla_aU^b,\quad D=U^a\nabla_a,\quad \theta=\nabla_aU^a,\quad h^b{}_c=\delta^b{}_c+\frac{U^bU_c}{c^2}.$$

For a current $j^a=\sigma U^a+q^a$ with $q^aU_a=0$, define $f^b=F^b{}_cj^c$ and assume the mathematical exchange equation $\nabla_aT_m^{ab}=f^b$. Then it is equivalent to the longitudinal and rest-space equations

$$D\epsilon+(\epsilon+p)\theta=-U_bf^b,\qquad \frac{\epsilon+p}{c^2}a^b+h^{ba}\nabla_ap=h^b{}_cf^c.$$

The rest electric field of $U$ is $E_U^a=F^a{}_bU^b$. If $q^a=\chi E_U^a$ for a specified scalar $\chi\ge0$, then the electromagnetic contribution to the comoving energy balance is $-U_bf^b=\chi\,g(E_U,E_U)\ge0$. For $q=0$ it is zero. The Ohmic relation is an additional constitutive hypothesis; no equation of state, entropy law, or fluid existence result follows.

## Facts & Assumptions

**Given:** The fields and regularity in the Statement, $g(U,U)=-c^2$, $q^aU_a=0$, and $\nabla_aT_m^{ab}=f^b$.

[F1] [[def-emg-matter-formal-systems]]: $T_m^{ab}=(\epsilon+p)U^aU^b/c^2+pg^{ab}$ and $E_U^a=F^a{}_bU^b$.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla$ is metric-compatible and its induced tensor derivative commutes with contractions and annihilates $g$.

[F3] [[def-product-connection-on-tensor-and-hom-bundles]]: the induced tensor connection obeys the Leibniz rule on tensor products and on scalar multiples of tensor fields.

[F4] [[lem-gr-observer-projection-decomposition]]: for every future unit timelike vector $n$, the rest space $n^\perp$ has positive-definite restricted metric.

[A1] The current is the stated sum $j^a=\sigma U^a+q^a$ with $q^aU_a=0$; no constitutive law is assumed until the final conditional clause.

## Proof

1.1 Apply the product rule to the three factors of $T_m^{ab}$ and use $\nabla_ag^{ab}=0$. The result is $\nabla_aT_m^{ab}=\frac{U^b}{c^2}[D(\epsilon+p)+(\epsilon+p)\theta]+\frac{\epsilon+p}{c^2}a^b+\nabla^bp$. [F1, F2, F3, algebra]

2.1 Contract this expression with $U_b$. The normalization gives $U_bU^b=-c^2$ and $U_ba^b=\tfrac12D(g(U,U))=0$; also $U_b\nabla^bp=Dp$. Hence $U_b\nabla_aT_m^{ab}=-D\epsilon-(\epsilon+p)\theta$. Equating this with $U_bf^b$ proves the longitudinal equation. [F2, step 1.1, algebra]

3.1 The map $h^b{}_c=\delta^b{}_c+U^bU_c/c^2$ satisfies $h^b{}_cU^c=0$ and $h^b{}_c a^c=a^b$, by $U\cdot U=-c^2$ and $U\cdot a=0$. Applying it to step 1.1 removes the term proportional to $U^b$ and gives the stated rest-space equation. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For any vector $w^b$, $w^b=h^b{}_cw^c-U^b(U_cw^c)/c^2$. Thus if both displayed projected equations hold, the projections of $\nabla_aT_m^{ab}-f^b$ onto $U$ and $U^\perp$ vanish, so that vector is zero. This proves the converse. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Antisymmetry of $F$ gives $U_bF^b{}_cU^c=0$, so $E_U^a=F^a{}_bU^b$ is orthogonal to $U$. Since $c>0$, $n:=U/c$ is future unit timelike and $E_U\in n^\perp$; [F4] makes $g(E_U,E_U)\ge0$. Therefore $-U_bf^b=-U_bF^b{}_cq^c=g(E_U,q)$. If $q=\chi E_U$ with $\chi\ge0$, this is $\chi g(E_U,E_U)\ge0$; if $q=0$ it is zero. No sign or heating claim has been used without the stated current hypothesis. [F1, F4, A1, step 2.1, algebra] ∎
## Remarks

- The source-free and charged cases share the same projection identities. A general conduction current is not assumed to obey Ohm's law; Example [[ex-emgmath-ml-b02]] supplies a local explicit instance of the optional $q=\chi E_U$ branch.
- These equations are algebraic projections of a supplied balance law, not a global fluid evolution theorem.
