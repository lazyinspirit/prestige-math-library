---
id: ex-first-order-neumann-closure-causes-first-order-error
kind: example
title: A one-sided Neumann closure gives only first-order error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 5: Finite Difference Approximation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
      locator: "Complete PDF, p. 5: one-sided Neumann closure has a first-order boundary residual and can lower the global order."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Let $h=1/N$ for an integer $N\ge2$, $x_i=ih$, $\delta_h^2V_i=(V_{i+1}-2V_i+V_{i-1})/h^2$, and $D_h^+V_0=(V_1-V_0)/h$. The exact solution $u(x)=x^2$ solves $-u''=-2$ on $(0,1)$ with $u'(0)=0$ and $u(1)=1$. Discretize the interior equation by $-\delta_h^2V_i=-2$ for $1\le i<N$, impose the one-sided Neumann row $D_h^+V_0=0$, and impose $V_N=1$. The unique grid solution is
$$
V_i=x_i^2+h(1-x_i),
$$
so $\max_{0\le i\le N}|V_i-u(x_i)|=h$. The boundary residual of the exact samples is $D_h^+u(0)-u'(0)=h$, and the global error is only first order.

## Facts & Assumptions

**Given:** An integer $N\ge2$, $h=1/N$, $x_i=ih$, the displayed centered second difference and one-sided forward Neumann row, and the stated mixed discrete equations.

[A1] The grid equations are $-\delta_h^2V_i=-2$ for $1\le i<N$, $D_h^+V_0=0$, and $V_N=1$.

## Verification

1.1 For the exact samples $u_i=x_i^2$, $D_h^+u_0=(h^2-0)/h=h$, whereas $u'(0)=0$. Thus the imposed Neumann row has residual exactly $h$. [given, A1, algebra]

1.2 Define $V_i=x_i^2+h(1-x_i)$. Then $V_0=h$, $V_1=h$, so $D_h^+V_0=0$; also $V_N=1$. Since the second difference of the quadratic part is $2$ and the second difference of the affine part is $0$, $-\delta_h^2V_i=-2$ at every interior node. Hence $V$ satisfies [A1]. [A1, algebra]

2.1 If two grid solutions existed, their difference $d$ would satisfy $\delta_h^2d_i=0$ for $1\le i<N$, $D_h^+d_0=0$, and $d_N=0$. The recurrence says $d_i-d_{i-1}$ is constant in $i$; the forward boundary row makes that constant $0$, and $d_N=0$ then makes every $d_i=0$. Therefore the solution in step 1.2 is unique. [A1, step 1.2, algebra]

3.1 The error is $V_i-u_i=h(1-x_i)$. Because $0\le x_i\le1$, its maximum absolute value is $h$, attained at $i=0$. The boundary residual and global error are both first order in $h$. [step 1.1, step 1.2, algebra] ∎
