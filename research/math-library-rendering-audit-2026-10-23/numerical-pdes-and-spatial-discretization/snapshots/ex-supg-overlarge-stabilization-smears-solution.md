---
id: ex-supg-overlarge-stabilization-smears-solution
kind: example
title: "Overlarge streamline stabilization suppresses a two-cell solution"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-supg-one-dimensional-convection-diffusion-model, def-supg-one-dimensional-residual-form, lem-supg-one-dimensional-optimal-parameter]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Remark 5.25 and Example 5.16, printed pp. 58 and 55–56: the stabilization parameter enters the norm and can add excessive streamline diffusion."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 78–80, PDF p. 9: artificial diffusion, the exact one-dimensional parameter, and its distinction from the upwind value."
---

## Example

Use $\epsilon=b=1$, $f=1$, homogeneous endpoint values, and one interior P1 degree of freedom on the two-cell mesh $h=1/2$. Replace the exact parameter $\tau$ by the deliberately oversized value $\widetilde\tau=M\tau$, $M>0$. The discrete midpoint value tends to zero as $M\to\infty$, while the exact midpoint value is fixed and positive.

## Facts & Assumptions

**Given:** The one-dimensional SUPG form, the two-cell homogeneous P1 space, $\epsilon=b=1$, $f=1$, and the modified parameter $\widetilde\tau=M\tau$.

[F1] [[def-supg-one-dimensional-convection-diffusion-model]]: the continuous problem is $-u''+u'=1$ on $(0,1)$ with $u(0)=u(1)=0$.

[F2] [[def-supg-one-dimensional-residual-form]]: the stabilized diffusion coefficient in the P1 bilinear form is $\epsilon+\widetilde\tau b^2$, and the stabilization load is $\sum_K\widetilde\tau(f,b\phi')_K$.

[F3] [[lem-supg-one-dimensional-optimal-parameter]]: the reference parameter $\tau$ is strictly positive.

## Verification

1.1 The function $u(x)=x-(e^x-1)/(e-1)$ satisfies the endpoint conditions. Its derivatives are $u'=1-e^x/(e-1)$ and $u''=-e^x/(e-1)$, so $-u''+u'=1$. Hence $u(1/2)=u_*:=1/2-1/(\sqrt e+1)>0$. [F1, given, algebra]

1.2 Let $\phi$ be the midpoint hat function and $U$ its coefficient. Its derivative is $2$ on the left cell and $-2$ on the right. Thus $\int_0^1|\phi'|^2dx=4$, $\int_0^1\phi'\phi\,dx=\frac12[\phi^2]_0^1=0$, and $\int_0^1\phi\,dx=1/2$. Also $\int_0^1\phi'\,dx=\phi(1)-\phi(0)=0$, so the stabilization load vanishes. The single discrete equation is therefore $4(1+M\tau)U=1/2$, so $U=1/[8(1+M\tau)]$. [F2, given, algebra]

2.1 Since $\tau>0$ by [F3], $U\to0$ as $M\to\infty$, whereas the exact value $u_*>0$ from step 1.1 is fixed. In particular, every $M$ satisfying $M\tau>1/(4u_*)-1$ gives $U<u_*/2$. Oversizing the parameter can therefore smear this discrete solution. [F3, step 1.1, step 1.2, algebra] ∎

