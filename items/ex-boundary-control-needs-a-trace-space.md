---
id: ex-boundary-control-needs-a-trace-space
kind: example
title: A boundary flux control uses the H1 trace and a different control operator
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - def-axiom-of-choice
  - def-pde-box-control-set
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-integration-by-parts-for-absolutely-continuous-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§3 boundary-control example, printed pp. 19–25: Neumann boundary controls enter through a trace-space functional."
---

## Statement

Assume the Axiom of Choice. For $\Omega=(0,1)$, realize $V=H^1(0,1)$ by its unique absolutely continuous representatives, with norm $\|v\|_V=(\|v\|_2^2+\|v'\|_2^2)^{1/2}$. For a smooth state satisfying $-u''+u=f$, $u'(0)=0$, and $u'(1)=g$, integration by parts gives the weak boundary load $v\mapsto g v(1)$. The boundary control parameter is a scalar, equivalently $L^2(\{1\})$ for counting measure. For $g\ne0$, its trace functional is not representable by an interior density $q\in L^2(0,1)$; for $g=0$, both loads include the zero functional. Thus the boundary control space and its trace operator must be specified separately from the distributed-control space $L^2(0,1)$.

## Facts & Assumptions
**Given:** The Axiom of Choice, the interval, the energy space $H^1(0,1)$, and the one-dimensional weak formulation of a Neumann boundary load.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[F1] The control box [[def-pde-box-control-set]] consists of equivalence classes in an $L^2$ space over its declared measure domain; changing the domain changes the control space.

[F2] Under the Axiom of Choice, every $H^1(0,1)$ class has a unique absolutely continuous representative on $[0,1]$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] The Axiom of Choice implies Dependent Choice and Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] For absolutely continuous functions, integration by parts gives $\int FG'+\int F'G=F(1)G(1)-F(0)G(0)$ when Countable Choice and Dependent Choice hold ([[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F5] Cauchy--Schwarz gives $|\int_0^1 ab|\le\|a\|_2\|b\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Verification

1.1 By [F2], $v$ has an absolutely continuous representative. By [F3], the hypotheses of [F4] hold. Applying [F4] to $F(x)=x$ and $G(x)=v(x)$ gives $v(1)=\int_0^1v(x)\,dx+\int_0^1xv'(x)\,dx$. Cauchy--Schwarz [F5] yields $|v(1)|\le\|v\|_2+\|v'\|_2\le\sqrt2\|v\|_V$. Applying [F4] to $F=u'$ and $G=v$ for a smooth state gives $\int_0^1(u'v'+uv)\,dx=\int_0^1fv\,dx+g v(1)$. Thus the boundary control operator $B_\partial g:v\mapsto g v(1)$ is bounded on $V$. [A1, F2, F3, F4, F5, given, algebra]

2.1 Let $v_n(x)=\max\{1-n(1-x),0\}$. Then $v_n\in H^1(0,1)$, $v_n(1)=1$, and $\|v_n\|_2=(3n)^{-1/2}$. If $g\ne0$ and $g v(1)=\int_0^1qv$ for every $v\in V$ with some $q\in L^2(0,1)$, Cauchy--Schwarz [F5] gives $|g|=|\int_0^1qv_n|\le\|q\|_2(3n)^{-1/2}\to0$, a contradiction. For $g=0$, $q=0$ represents the same zero functional. The boundary input space is nevertheless the scalar $L^2(\{1\})$ space, while the distributed input space in [F1] is $L^2(0,1)$; their operators and control sets must be specified separately. [F1, F5, step 1.1, given, algebra] ∎
