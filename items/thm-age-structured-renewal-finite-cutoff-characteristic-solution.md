---
id: thm-age-structured-renewal-finite-cutoff-characteristic-solution
kind: theorem
title: Characteristic solution and mass bound for the finite-age renewal model
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-age-structured-renewal-finite-cutoff-model
  - thm-gronwall-integral-inequality
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; Volterra continuation uses finitely many contractions on bounded intervals.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §1.1.2, PDF pp. 4–5, and Chapter 2, §§2.1–2.3, PDF pp. 14–20: characteristic renewal equations, mass bounds and finite-age outflow."
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: cohort characteristic representation; the finite-cutoff Volterra and outflow argument is proved locally here."
---

## Statement

For [[def-age-structured-renewal-finite-cutoff-model]], define $K(a)=\beta(a)S(0,a)$ and

$$G_A(t)=\int_0^{A-t}\beta(x+t)S(x,t)n_0^A(x)\,dx,\qquad 0\le t\le T.$$

There is a unique continuous nonnegative birth rate satisfying

$$B_A(t)=G_A(t)+\int_0^tK(a)B_A(t-a)\,da,$$

and the finite-age density is, for almost every $0<a<A$,

$$n^A(t,a)=\begin{cases}n_0^A(a-t)S(a-t,t),&t\le a<A,\\B_A(t-a)S(0,a),&0\le a<t.\end{cases}$$

It is the unique mild solution, has $B_A(t)=\int_0^A\beta(a)n^A(t,a)\,da$, and obeys

$$\|n^A(t,\cdot)\|_1\le e^{\beta_\infty t}\|n_0^A\|_1,\qquad \beta_\infty=\|\beta\|_\infty.$$

For $t\le T<A$, its exact cumulative number outflow is

$$O_A(t)=\int_{A-t}^{A}n_0^A(x)S(x,A-x)\,dx.$$

## Facts & Assumptions

**Given:** Bounded nonnegative Lipschitz rates, $n_0^A\in L^1_+(0,A)$, and the characteristic survival law in [[def-age-structured-renewal-finite-cutoff-model]].

[F1] [[def-age-structured-renewal-finite-cutoff-model]]: characteristics have age $a+s$ and survival $S(a,s)=\exp(-\int_a^{a+s}\mu)$; age $A$ is absorbing outflow, and the birth rate integrates $\beta n^A$ only over $[0,A]$.

[F2] [[thm-gronwall-integral-inequality]]: if $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$ with nonnegative continuous $u,b$ and nondecreasing $a$, then $u(t)\le a(t)e^{\int_0^t b}$.

## Proof

1.1 The kernel $K$ is continuous on $[0,T]$. The moving-limit forcing $G_A$ is also continuous: on the common part of the integration intervals its integrand changes uniformly continuously with $t$, and the integral over the symmetric difference tends to zero by absolute continuity of the integral of $n_0^A$. It is nonnegative. [given, F1, algebra]

2.1 On any interval of length $\delta$ with $\delta\|K\|_\infty<1$, the map $b\mapsto G_A(t)+\int_0^tK(a)b(t-a)da$ is a contraction on the unknown continuous birth-rate segment, with contraction factor at most $\delta\|K\|_\infty$ after the already determined history is placed in the forcing. If $K=0$, the equation reduces to $B_A=G_A$. Finitely many such intervals cover $[0,T]$, and at each endpoint the defining equation fixes the same value from either adjacent interval; this constructs a unique continuous solution. Picard iteration from zero on each interval preserves nonnegativity because $G_A,K\ge0$, so $B_A\ge0$. [step 1.1, construct, algebra]

3.1 Substitute the displayed density formula into $\int_0^A\beta(a)n^A(t,a)da$. On the initial-cohort part $t\le a<A$, use $x=a-t$ to obtain $G_A(t)$. On the newborn part $0\le a<t$, the integral is $\int_0^t\beta(a)S(0,a)B_A(t-a)da=\int_0^tK(a)B_A(t-a)da$. The Volterra equation therefore gives exactly the renewal boundary relation. Both parts are nonnegative and have finite $L^1$ mass, bounded by $\|n_0^A\|_1+\int_0^tB_A(s)ds$. [F1, step 2.1, algebra]

4.1 Integrating the two characteristic branches gives $N_A(t)=\int_0^{A-t}n_0^A(x)S(x,t)dx+\int_0^tB_A(t-a)S(0,a)da$. This mass function is absolutely continuous; the moving-limit rule and $\partial_tS(x,t)=-\mu(x+t)S(x,t)$ show for almost every $t$ that $N_A'(t)=B_A(t)-\int_0^A\mu(a)n^A(t,a)da-n_0^A(A-t)S(A-t,t)$. The final term is nonnegative outflow, so $N_A'(t)\le B_A(t)\le\beta_\infty N_A(t)$. Integrating and applying [F2] yields $N_A(t)\le e^{\beta_\infty t}N_A(0)$. [F1, F2, step 3.1, algebra]

5.1 For $t\le T<A$, newborn cohorts have age at most $T$ and cannot reach $A$. An initial cohort with age $x$ exits by time $t$ precisely when $A-t\le x<A$; it survives until exit by $S(x,A-x)$. Integrating its initial density over those ages gives the stated $O_A(t)$. Any mild solution must follow these same characteristics and its birth rate must solve the Volterra equation from step 3.1, whose solution is unique by step 2.1. Thus the density and outflow are unique. Translation continuity in $L^1$, continuity of $B_A$ and of $S$, and the vanishing measure of the newly entering cohort region give continuity of $n^A$ in time with values in $L^1(0,A)$. [F1, step 2.1, step 3.1, step 4.1, algebra] ∎

