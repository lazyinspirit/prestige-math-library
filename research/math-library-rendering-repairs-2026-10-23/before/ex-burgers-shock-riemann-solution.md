---
id: ex-burgers-shock-riemann-solution
kind: example
title: The Burgers shock Riemann solution
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-self-similar-riemann-problem, thm-riemann-solver-for-strictly-convex-scalar-flux, thm-rankine-hugoniot-jump-condition, cor-lax-shock-inequalities-for-convex-scalar-laws, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, def-kruzhkov-entropy-solution, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§§6.1–6.2, pp. 52–54"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.2, pp. 352–353"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=\tfrac12u^2$ and let $u_L>u_R$. Then the Riemann problem
([[def-self-similar-riemann-problem]]) has the entropy solution
$$u(t,x)=\begin{cases}u_L,&x<st,\\ u_R,&x>st,\end{cases}\qquad s=\frac{u_L+u_R}{2}.$$
Indeed the Rankine--Hugoniot condition at the jump gives
$s=\dfrac{f(u_R)-f(u_L)}{u_R-u_L}=\dfrac{u_L+u_R}{2}$, and the Lax
inequalities $f'(u_R)=u_R\le s\le u_L=f'(u_L)$ hold because $u_L>u_R$; the data
are attained in the strong local $L^1$ sense. For example, $u_L=1$, $u_R=0$
gives the shock $x=t/2$ separating $1$ from $0$
([[thm-riemann-solver-for-strictly-convex-scalar-flux]],
[[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, states $u_L>u_R$, the single-jump profile $u$ with speed $s$ of the statement, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] The strictly convex Riemann solver: for $f\in C^2$ strictly convex with $u_L>u_R$ the unique Kruzhkov entropy solution of the Riemann problem is the shock with speed $s=\bigl(f(u_R)-f(u_L)\bigr)/(u_R-u_L)$; it satisfies the weak conservation law, all Kruzhkov entropy inequalities and the strong local $L^1$ trace ([[thm-riemann-solver-for-strictly-convex-scalar-flux]], [[def-self-similar-riemann-problem]], [[def-kruzhkov-entropy-solution]]).

[F2] Rankine--Hugoniot applies to a piecewise $C^1$ weak solution: a nontrivial jump of speed $s$ satisfies $s[u]=[f]$ ([[thm-rankine-hugoniot-jump-condition]]). For a nontrivial jump satisfying this relation with strictly convex flux, entropy admissibility is equivalent to $u^->u^+$, and an admissible jump obeys $f\prime(u^+)\le s\le f\prime(u^-)$ ([[cor-lax-shock-inequalities-for-convex-scalar-laws]], [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]).

[F3] For $f(u)=\tfrac12u^2$ one has $f'(u)=u$ and $f''\equiv1>0$, so $f$ is strictly convex: for $a\ne b$ and $0<\lambda<1$, $\lambda f(a)+(1-\lambda)f(b)-f(\lambda a+(1-\lambda)b)=\lambda(1-\lambda)(a-b)^2/2>0$.

## Proof

**Proof technique:** direct.

1.1 **The speed is the chord slope.** By [F3], $f$ is $C^2$ and strictly convex, and the given states satisfy $u_L>u_R$. The Riemann solver [F1] therefore supplies a weak entropy shock with speed $s=(f(u_R)-f(u_L))/(u_R-u_L)$. Since $u_R-u_L\ne0$, algebra gives $s=\tfrac12(u_R^2-u_L^2)/(u_R-u_L)=\tfrac12(u_L+u_R)$, so this is exactly the profile and speed in the statement. [F1, F3, algebra]


2.1 **Admissibility.** With $f'(u)=u$, the Lax inequalities read $u_R=f'(u_R)\le s\le f'(u_L)=u_L$, and indeed $u_R\le\tfrac12(u_L+u_R)\le u_L$ because $u_R\le u_L$; the jump is compressive and entropy-admissible by [F2]. Alternatively the chord through $(u_R,\tfrac12u_R^2)$ and $(u_L,\tfrac12u_L^2)$ lies above the parabola, which is the chord criterion of [F2]. [F2, step 1.1]


3.1 **Conclusion via the solver and the initial trace.** By [F1] the shock with speed $s$ is the unique Kruzhkov entropy solution of the Riemann problem, so the weak conservation law, all Kruzhkov entropy inequalities and the strong local $L^1$ trace hold. The trace can also be seen directly: the set where $u(t,\cdot)$ differs from the step datum $u_0$ is contained in the interval between $0$ and $st$, of length $|s|t$ and amplitude $|u_L-u_R|$, so its $L^1$ discrepancy on any compact set is at most $|u_L-u_R||s|t\to0$. For $u_L=1$, $u_R=0$ the formula gives $s=\tfrac12$, so the shock is the ray $x=t/2$, with state $1$ on the left and $0$ on the right. [F1, step 1.1, step 2.1] ∎
