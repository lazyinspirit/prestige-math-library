---
id: ex-constant-mortality-and-age-localized-fertility
kind: example
title: Constant mortality with age-localized fertility
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §1.1, PDF pp. 3–5: age renewal equation and boundary births."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: positive upwind update under the CFL condition."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: composite midpoint quadrature used in the finite calculation."
---

## Example

Take constant mortality $\mu(a)=1$, initial density $n_0=\mathbf 1_{[1,2]}$, and triangular fertility

$$\beta(a)=\max\{1-2|a-3/2|,0\}.$$

The fertility is localized to ages $[1,2]$. Use cutoff $A=4$ and horizon $T=1/4$. Compute the initial birth rate, exhibit the corner incompatibility, and take one positive finite-volume step on a unit age grid with $\Delta t=1/4$.

## Verification

**Given:** The data above, the characteristic renewal formula and the upwind mass update.

[F1] [[def-age-structured-renewal-transport-problem]]: the inflow is $B(t)=\int_0^\infty\beta(a)n(t,a)\,da$ and the initial datum is specified as an $L^1$ function; this example separately uses its right-hand trace at age zero.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: the old cohort contributes $G(t)=\int_0^\infty\beta(x+t)S(x,t)n_0(x)\,dx$ to the Volterra birth equation.

[F3] [[alg-age-structured-renewal-upwind-finite-volume]]: $M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\mu_jM_j^k$ with $F_0=B_h$ and $F_j=M_j/\Delta a$.

[F4] [[thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability]]: if $\Delta t/\Delta a+\Delta t\mu_\infty\le1$, the updated masses remain nonnegative.

1.1 The triangle has base length $1$ and height $1$, so $B(0)=\int_1^2\beta(a)\,da=1/2$. The chosen initial density has right-hand trace $n_0(0+)=0$, which differs from $B(0)$; hence smooth renewal-corner compatibility fails. The example uses the characteristic/weak formulation rather than assuming that compatibility. [F1, algebra]

1.2 Here $S(x,t)=e^{-t}$, so [F2] gives $G(t)=e^{-t}\int_1^2\beta(x+t)\,dx$ and $B(t)=G(t)+\int_0^t\beta(a)e^{-a}B(t-a)\,da$. The first formula records the initially present age cohort; the second is the renewal feedback term. [F2, algebra]

1.3 Use cells $[0,1],[1,2],[2,3],[3,4]$, each of width $1$, and initial masses $(0,1,0,0)$. Four-panel composite midpoint quadrature on the second cell samples fertility values $1/4,3/4,3/4,1/4$, so $B_h^0=(1/4)(1/4+3/4+3/4+1/4)=1/2$. [F1, construct, algebra]

2.1 With $\lambda=\Delta t/\Delta a=1/4$ and $\mu_j\Delta t=1/4$, the CFL sum is $1/2$. The fluxes are $F_0=1/2,F_1=0,F_2=1,F_3=0,F_4=0$, so the first updated mass vector is $(1/8,1/2,1/4,0)$. Every entry is nonnegative, in agreement with [F4]. [F3, F4, step 1.3, algebra] ∎

