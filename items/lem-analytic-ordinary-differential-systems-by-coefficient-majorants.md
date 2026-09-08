---
id: lem-analytic-ordinary-differential-systems-by-coefficient-majorants
kind: lemma
title: Analytic ODE systems from majorants
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §3 equations (26)–(34), printed pp. 7–8, Theorem 15. The autonomous augmentation and quadratic majorant below avoid the misnormalized scalar formula (18).
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "lem-an-analytic-germ-has-a-rational-geometric-majorant", "thm-real-analytic-inverse-and-implicit-function-theorems", "thm-power-series-define-holomorphic-functions-in-several-variables"]
---

## Statement

For an analytic map $H(t,v)$ near $(0,v_0)\in\mathbb R\times\mathbb R^N$, $N\ge1$, the problem $v^{\prime}=H(t,v)$, $v(0)=v_0$, has a unique analytic solution germ. If $v_0=0$ and all Taylor coefficients of $H$ at $(0,0)$ are nonnegative, then the solution has nonnegative Taylor coefficients.

## Facts & Assumptions

**Given:** $H(t,v)$ is analytic near $(0,v_0)$ in $1+N$ real variables, $N\ge1$. The optional positivity assertion assumes $v_0=0$ and nonnegative Taylor coefficients of H.

[F1] A finite analytic family has a common rational geometric majorant. ([[lem-an-analytic-germ-has-a-rational-geometric-majorant]]).

[F2] Zero-constant substitution preserves coefficient majorisation. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

[F3] An analytic equation with nonzero derivative in its unknown has a unique local analytic branch. ([[thm-real-analytic-inverse-and-implicit-function-theorems]]).

[F4] Geometrically bounded coefficients define a holomorphic sum with termwise derivatives. ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

## Proof

1.1 Put $w=v-v_0$, adjoin $z_0=t$, and write $z=(z_0,w)\in\mathbb R^{N+1}$. The autonomous system is $z^{\prime}=A(z)=(1,H(z_0,v_0+w))$, $z(0)=0$. A formal series $z=\sum_{q\ge1}a_qt^q$ has the unique recursion $(q+1)a_{q+1}=[t^q]A(z)$. This coefficient depends only on $a_1,\ldots,a_q$: each substituted series has zero constant term, so no positive-degree factor can use $a_{q+1}$. Its zeroth coordinate is exactly $t$. [given, F2]

1.2 With $L=N+1$, F1 supplies $M\ge1,r>0$ majorising every component of $A$ by $M/(1-\sum_{i=0}^N Z_i/r)$. The scalar equation $W-\frac{L}{2r}W^2=Mt$, $W(0)=0$, has an analytic branch by F3: the derivative in $W$ at zero is one. Its coefficient recursion $W=Mt+\frac{L}{2r}W^2$ gives $[t]W=M$ and every subsequent coefficient nonnegative. Differentiating the identity yields $W^{\prime}=M/(1-LW/r)$ near zero, since the denominator there is one. Solving this quadratic on the branch through zero gives $W=(r/L)(1-\sqrt{1-2LMt/r})$. The square root is the analytic branch with value one at zero, so a positive convergence neighborhood is explicit; its positive real endpoint $t_*=r/(2LM)$ is singular, since differentiating $W-LW^2/(2r)=Mt$ there would give $0=M$ if W extended analytically through it. No entire majorant is claimed. [given, F1, F3, algebra]

2.1 Compare the recursion in step 1.1 with the vector whose L components are W. At degree zero the initial coefficients agree. If $|[t^j]z_i|\le[t^j]W$ for $j\le q$, F2 bounds $[t^q]A_i(z)$ by $[t^q]M/(1-LW/r)=(q+1)[t^{q+1}]W$. Dividing by $q+1>0$ gives the next coefficient bound. This induction proves $z_i\ll W$ at every degree. [step 1.1, step 1.2, F2]

3.1 Choose $s>0$ strictly inside the convergence radius of W. Its coefficients obey $[t^q]W\le C s^{-q}$, where $C=\sum_q[t^q]Ws^q<\infty$. Step 2.1 transfers this bound to z. F4 and F2 show the series sums and its compositions differentiate as in the formal recursion on a smaller interval, so $z^{\prime}-A(z)=0$. The recursion also forces the Taylor series of every analytic solution; hence two such germs coincide. Finally, for the original nonnegative H with $v_0=0$, the recursion $(q+1)[t^{q+1}]v=[t^q]H(t,v)$ consists solely of nonnegative sums and products from its zero initial coefficient, so every coefficient of v is nonnegative. [step 1.1, step 2.1, F2, F4] ∎

## Source notes

Gantumur, §3 equations (26)–(34), printed pp. 7–8, Theorem 15. The autonomous augmentation and quadratic majorant below avoid the misnormalized scalar formula (18).

