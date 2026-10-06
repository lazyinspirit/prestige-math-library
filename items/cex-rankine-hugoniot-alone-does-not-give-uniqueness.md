---
id: cex-rankine-hugoniot-alone-does-not-give-uniqueness
kind: counterexample
title: Rankine--Hugoniot alone does not give uniqueness
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
deps: [cex-expansion-shock-is-weak-but-not-entropic, ex-burgers-rarefaction-riemann-solution, thm-riemann-solver-for-strictly-convex-scalar-flux, def-kruzhkov-entropy-solution, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, def-self-similar-riemann-problem, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.3 and §5.1, pp. 27–33"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.2, pp. 352–353"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=\tfrac12u^2$ and let the Riemann data be $u_L=0$, $u_R=1$. Then both
of the following are weak solutions of the same Cauchy problem: the expansion
shock from [[cex-expansion-shock-is-weak-but-not-entropic]] and the rarefaction
fan from [[ex-burgers-rarefaction-riemann-solution]],
$$u_{\mathrm{shock}}(t,x)=\begin{cases}0,&x<t/2,\\ 1,&x>t/2,\end{cases}\qquad u_{\mathrm{fan}}(t,x)=\begin{cases}0,&x\le0,\\ x/t,&0<x<t,\\ 1,&x\ge t.\end{cases}$$
Only the fan is a Kruzhkov entropy solution
([[thm-riemann-solver-for-strictly-convex-scalar-flux]]); the shock violates the
entropy inequality. Thus the Rankine--Hugoniot condition and the weak
formulation do not by themselves determine the solution, and an entropy
selection is indispensable
([[def-kruzhkov-entropy-solution]],
[[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, the Riemann datum $u_0=\mathbf 1_{(0,\infty)}$, the expansion-shock profile $u_{\mathrm{shock}}$ and the rarefaction fan $u_{\mathrm{fan}}$ displayed in the statement.

[F1] The expansion shock $u_{\mathrm{shock}}$ is a distributional weak solution with datum $u_0$: it has left state $u^-=0$, right state $u^+=1$, speed $s=\tfrac12$ satisfying Rankine--Hugoniot, and it fails the Kruzhkov entropy inequality (for $k=\tfrac12$ the production coefficient is $\tfrac14>0$) ([[cex-expansion-shock-is-weak-but-not-entropic]]).

[F2] The rarefaction fan $u_{\mathrm{fan}}$ is the unique Kruzhkov entropy solution of the same Riemann problem: it is a weak solution, satisfies all Kruzhkov inequalities, and attains the datum in the strong local $L^1$ sense ([[ex-burgers-rarefaction-riemann-solution]], [[thm-riemann-solver-for-strictly-convex-scalar-flux]], [[def-self-similar-riemann-problem]]).

[F3] The weak formulation admits every distributional weak solution, while the entropy class is unique: two bounded Kruzhkov entropy solutions with the same datum agree almost everywhere ([[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]], [[def-kruzhkov-entropy-solution]]).

## Proof

**Proof technique:** direct.

1.1 **Two weak solutions of the same problem.** By [F1] the expansion shock is a distributional weak solution with datum $u_0$; by [F2] the rarefaction fan is also a distributional weak solution with the same datum. Both are bounded and piecewise smooth. [F1, F2]


2.1 **They differ on a set of positive measure.** On the open region $\{(t,x):t>0,\ t/2<x<t\}$ the shock takes the value $1$, while the fan takes the value $x/t<1$; the region has positive Lebesgue measure, so the two classes differ. [F1, F2, step 1.1]


3.1 **Only the fan is entropic, and the entropy class is unique.** The shock fails the Kruzhkov entropy inequality by [F1], so it is not a Kruzhkov entropy solution; the fan is the unique Kruzhkov entropy solution of these data by [F2], and any two bounded Kruzhkov entropy solutions with the same datum coincide almost everywhere by [F3]. Therefore Rankine--Hugoniot and the weak formulation alone determine neither the value of the solution nor its uniqueness, while the entropy condition selects the rarefaction fan and restores uniqueness in the entropy class. [F3, step 1.1, step 2.1] ∎
