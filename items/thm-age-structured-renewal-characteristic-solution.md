---
id: thm-age-structured-renewal-characteristic-solution
kind: theorem
title: Characteristic formula and Volterra solution for age renewal transport
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-age-structured-renewal-transport-problem
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; the characteristic paths and finite interval continuation are explicit.
provenance:
  statement: literature-derived
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §1.1.2, PDF pp. 4–5: characteristic formula and Volterra renewal equation; Chapter 2, §2.1, PDF pp. 14–15: characteristic solution of the adjoint transport equation."
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: cohort characteristic dynamics and the weak transport equation."
---

## Statement

For [[def-age-structured-renewal-transport-problem]], put $M(a)=\int_0^a\mu(r)\,dr$, $K(a)=\beta(a)e^{-M(a)}$, and

$$G(t)=\int_0^\infty \beta(x+t)\exp\!\left(-\int_x^{x+t}\mu(r)\,dr\right)n_0(x)\,dx.$$

There is a unique mild solution. Its birth rate is the unique continuous solution of

$$B(t)=G(t)+\int_0^t K(a)B(t-a)\,da,$$

and its density, for almost every $a\ge0$, is

$$n(t,a)=\begin{cases}n_0(a-t)\exp\!\left(-\int_{a-t}^{a}\mu(r)\,dr\right),&a\ge t,\\ B(t-a)e^{-M(a)},&0\le a<t.\end{cases}$$

## Facts & Assumptions

**Given:** The model [[def-age-structured-renewal-transport-problem]] with bounded nonnegative Lipschitz $\mu,\beta$ and $n_0\in L^1_+$.

[F1] [[def-age-structured-renewal-transport-problem]]: characteristic age paths solve $a'=1$, survival is $S(a,s)=\exp(-\int_a^{a+s}\mu)$, and a mild solution satisfies the renewal boundary equation.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution of a first-order initial value problem is differentiable along its interval and satisfies its differential equation and initial value.

## Proof

1.1 The old-cohort branch in the Statement follows the characteristic $a(s)=x+s$ and survival $S(x,t)$ from [F1]; the newborn branch starts from the boundary value $B(t-a)$ at time $t-a$ and follows survival $S(0,a)$. These are the characteristic branches in the definition of a mild solution. We use them to construct a candidate after solving the Volterra equation; no pointwise differentiability of a weak solution is assumed. [F1, F2, algebra]

1.2 The functions $K$ and $G$ are continuous. Indeed, $K$ is a product of Lipschitz functions; for $s,t\in[0,T]$, the integrand multiplier in $G$ changes by at most $(\operatorname{Lip}(\beta)+\|\beta\|_\infty\|\mu\|_\infty)|t-s|$, since $|e^{-u}-e^{-v}|\le|u-v|$ for $u,v\ge0$. Multiplication by $n_0\in L^1$ and integration gives continuity of $G$. [given, F1, algebra]

2.1 Substitute the two branches into $B(t)=\int_0^\infty\beta(a)n(t,a)\,da$ and split at $a=t$. In the old-cohort part set $x=a-t$; the result is exactly $G(t)+\int_0^t\beta(a)e^{-M(a)}B(t-a)\,da$. [F1, step 1.1, algebra]

2.2 On any interval of length $\tau$ with $\tau\|K\|_\infty<1$, the right side of the Volterra equation is a contraction in the sup norm on continuous birth-rate functions: the difference of two outputs is bounded by $\tau\|K\|_\infty$ times the input difference. If $\|K\|_\infty=0$, the equation is simply $B=G$. Starting at time zero and then treating the already determined history as a fixed forcing term, finitely many such intervals cover $[0,T]$; each interval therefore has one continuous solution and the solutions agree at their shared endpoints. [step 1.2, construct, algebra]

2.3 Let $\phi\in C_c^1([0,T]\times[0,\infty))$ satisfy $\phi(T,a)=0$. On an initial cohort with coordinate $x=a-t\ge0$, the chain rule gives $\frac{d}{dt}[n_0(x)S(x,t)\phi(t,x+t)]=n(t,x+t)(\phi_t+\phi_a-\mu\phi)(t,x+t)$ for almost every $t$. Integrating from $0$ to $T$ makes the terminal term zero and leaves $-n_0(x)\phi(0,x)$; integration over $x\ge0$ gives the initial-data contribution to the weak identity. [F1, step 1.1, algebra]

2.4 For a newborn cohort with birth time $s=t-a\ge0$, the chain rule gives $\frac{d}{da}[B(s)S(0,a)\phi(s+a,a)]=n(s+a,a)(\phi_t+\phi_a-\mu\phi)(s+a,a)$. Integrating from $a=0$ to $T-s$ gives $-B(s)\phi(s,0)$ because $\phi(T,T-s)=0$; integrating over $s\in[0,T]$ gives the renewal-boundary contribution. [F1, step 1.1, algebra]

3.1 When $n_0\ge0$, $G,K\ge0$. Picard iteration from the zero function on the first interval preserves nonnegativity and converges to its unique fixed point; the same argument applies on each continuation interval because its known-history forcing is nonnegative. Thus $B\ge0$, and the characteristic formula gives $n\ge0$. [given, step 2.2, induction, algebra]

4.1 The formula has finite $L^1$ norm because its old-cohort contribution is at most $\|n_0\|_1$ and its newborn contribution is at most $\int_0^t B(s)\,ds$. On the old branch, continuity in time follows from translation continuity of $n_0$ in $L^1$ and dominated convergence for the survival multiplier. On the newborn branch, continuity follows from continuity and boundedness of $B$ and $S$, with the interval of newly entering cohorts having length tending to zero. Thus $n\in C([0,T];L^1)$. [given, step 1.1, step 2.2, step 3.1, algebra]

5.1 The old-cohort region $a\ge t$ and newborn region $a<t$ partition the time-age domain up to a measure-zero diagonal. Adding their integrals from steps 2.3 and 2.4, then multiplying by $-1$, gives exactly the weak identity in [F1] with initial term $\int n_0(x)\phi(0,x)dx$ and boundary term $\int_0^T B(s)\phi(s,0)ds$. Step 2.1 gives $B(t)=\int_0^\infty\beta(a)n(t,a)da$, and step 4.1 gives $n\in C([0,T];L^1)$ and nonnegativity. Thus the characteristic formula is a weak, hence mild, solution. [F1, step 2.1, step 4.1, step 2.3, step 2.4, algebra]

6.1 Any mild solution has a birth rate satisfying the Volterra equation in step 2.1. Uniqueness from step 2.2 forces that same birth rate, and the characteristic formula in step 1.1 then forces the same density. [F1, step 1.1, step 2.1, step 2.2] ∎

