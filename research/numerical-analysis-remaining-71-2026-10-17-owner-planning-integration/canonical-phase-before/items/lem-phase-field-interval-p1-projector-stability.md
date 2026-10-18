---
id: lem-phase-field-interval-p1-projector-stability
kind: lemma
title: Uniform interval stability of the phase-field L2 projector
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-phase-field-discrete-realizations
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - def-axiom-of-choice
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - lem-classical-derivatives-are-weak-derivatives
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: Assume the Axiom of Choice through the supplier providing the unique absolutely-continuous representative of each one-dimensional H1 class, so nodal interpolation is well-defined; its Countable Choice consequence also supplies smooth L2 approximants for the density argument.
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, complete lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §§12.1–12.2, PDF pp. 102–105: conforming spatial subspaces, the L2 projector, and projector stability hypotheses in parabolic discretization."
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §9.2, printed pp. 35–42: the one-dimensional orthogonal dual mesh and its center-to-center transmissibilities."
verification:
  precheck: pending
---

## Statement

Let $\Omega=(0,L)$ and let $V_h$ be the conforming interval space in [[def-phase-field-discrete-realizations]], with center spacing $h$. Let $I_hv$ interpolate the absolutely-continuous representative of $v\in H^1(0,L)$ at the centers and extend it constantly to the two boundary half-cells. Let $P_h$ be the exact $L^2$-orthogonal projection onto $V_h$. There is a constant $C$ independent of $h$ such that
$$\|I_hv\|_{H^1}\le C\|v\|_{H^1},\qquad \|v-I_hv\|_{L^2}\le Ch\|v'\|_{L^2},\qquad \|P_hv\|_{H^1}\le C\|v\|_{H^1}.$$
In addition, $\|P_hv-v\|_{L^2}\le Ch\|v'\|_{L^2}$ for every $v\in H^1(0,L)$, $P_hv\to v$ in $H^1(0,L)$ for every $v\in H^1(0,L)$, and $P_hg\to g$ in $L^2(0,L)$ for every $g\in L^2(0,L)$ as $h\to0$.

## Facts & Assumptions

**Given:** A bounded interval, a uniform center mesh, and the definitions of $V_h$, $I_h$, and $P_h$ in the statement.

[F1] [[def-phase-field-discrete-realizations]]: $V_h$ consists of continuous functions affine between centers and constant on the boundary half-cells, so its $L^2$ inner product is positive definite and $P_h$ is the orthogonal projection.

[F2] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: each $H^1(0,L)$ class has a unique absolutely-continuous representative on $[0,L]$ with $v(x)-v(y)=\int_y^xv'(s)\,ds$.

[F3] Assume Countable Choice. For every $g\in L^2(0,L)$ and $\delta>0$ there is $q\in C_c^\infty(0,L)$ with $\|g-q\|_2<\delta$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F4] Every compactly supported smooth function on $(0,L)$ lies in $H^1(0,L)$ because its classical derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[A1] Assume the Axiom of Choice through [F2] when selecting the canonical representative at the finitely many interpolation nodes; it supplies the Countable Choice hypothesis in [F3].

## Proof

1.1 On every segment between adjacent centers, $I_hv$ has slope $h^{-1}\int_{x_i}^{x_{i+1}}v'(s)\,ds$, so Cauchy–Schwarz bounds its squared derivative integral by $\int_{x_i}^{x_{i+1}}|v'|^2$. It is constant on the boundary half-cells. Summing proves $\|(I_hv)'\|_2\le\|v'\|_2$. The fundamental-theorem identity in [F2] gives $|v(x)-I_hv(x)|\le 2\sqrt h\|v'\|_{L^2(K)}$ on each center interval $K$ and the same bound on each boundary half-cell. Squaring and summing proves $\|v-I_hv\|_2\le Ch\|v'\|_2$; then $\|I_hv\|_2\le\|v\|_2+Ch\|v'\|_2$. [A1, F1, F2, given, algebra]

1.2 For an affine function $w_h$ on an interval $J$ of length $h$ with endpoint values $a,b$, direct integration gives $\|w_h'\|_{L^2(J)}^2=(b-a)^2/h$ and $\|w_h\|_{L^2(J)}^2=h(a^2+ab+b^2)/3\ge h(a^2+b^2)/6$. Hence $\|w_h'\|_{L^2(J)}\le\sqrt{12}h^{-1}\|w_h\|_{L^2(J)}$. Summing this inequality over the affine segments proves the inverse estimate $\|w_h'\|_2\le\sqrt{12}h^{-1}\|w_h\|_2$ on $V_h$; the constant boundary segments add no derivative. [F1, algebra]

2.1 Since $P_hI_hv=I_hv$ and $P_h$ is an $L^2$ contraction, $\|P_hv-I_hv\|_2=\|P_h(v-I_hv)\|_2\le Ch\|v'\|_2$ by step 1.1. The triangle inequality with step 1.1 gives $\|P_hv-v\|_2\le Ch\|v'\|_2$. Apply step 1.2 to $P_hv-I_hv\in V_h$, and then step 1.1, to obtain $\|(P_hv)'\|_2\le\|(I_hv)'\|_2+Ch^{-1}\|P_hv-I_hv\|_2\le C\|v'\|_2$. The $L^2$ contraction gives the full $H^1$ stability. [F1, step 1.1, step 1.2, algebra]

3.1 If $v\in C^2([0,L])$, linear interpolation on each interior segment has $H^1$ error tending to zero, while on a boundary half-cell the derivative error is bounded by $\sqrt h\|v'\|_\infty$. Thus $\|I_hv-v\|_{H^1}\to0$. Step 2.1 applied to $v-I_hv$ gives $\|P_hv-I_hv\|_{H^1}\le C\|v-I_hv\|_{H^1}\to0$, so $P_hv\to v$ in $H^1$. [step 2.1, given, algebra]

3.2 For arbitrary $v\in H^1(0,L)$, let $v'$ be its $L^2$ weak derivative and use [F3] to choose $q_j\in C_c^\infty(0,L)$ with $q_j\to v'$ in $L^2$. Define $v_j(x)=v(0)+\int_0^xq_j(s)\,ds$ using the representative in [F2]. Then $v_j\in C^\infty([0,L])$ and $\|v_j'-v'\|_2=\|q_j-v'\|_2\to0$, while Cauchy--Schwarz gives $\|v_j-v\|_2\le L\|q_j-v'\|_2$. Hence $v_j\to v$ in $H^1$. Uniform stability from step 2.1 and smooth convergence from step 3.1 yield $$\|P_hv-v\|_{H^1}\le C\|v-v_j\|_{H^1}+\|P_hv_j-v_j\|_{H^1}+\|v_j-v\|_{H^1};$$ first let $h\to0$ with $j$ fixed and then let $j\to\infty$. Thus $P_hv\to v$ in $H^1$ for every $v\in H^1(0,L)$. [A1, F2, F3, step 2.1, step 3.1, given, algebra]

3.3 For $g\in L^2(0,L)$ and $\delta>0$, [F3] gives $q\in C_c^\infty(0,L)\subset H^1(0,L)$ with $\|g-q\|_2<\delta$. The orthogonal projector is an $L^2$ contraction by [F1], and step 2.1 gives $P_hq\to q$ in $L^2$. Therefore $$\|P_hg-g\|_2\le2\|g-q\|_2+\|P_hq-q\|_2,$$ so $\limsup_{h\to0}\|P_hg-g\|_2\le2\delta$. Letting $\delta\downarrow0$ proves strong $L^2$ convergence for every $g\in L^2(0,L)$. [A1, F1, F3, F4, step 2.1, given, algebra] ∎

